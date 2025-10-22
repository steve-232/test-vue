<template>
  <section class="hippodrome">
    <BaseText v-if="!activeRace">No Race</BaseText>
    <div v-else>
      <div class="hippodrome__content" :key="refreshKey">
        <ColumnHippodromeHorse
          v-for="(horse, i) in activeRace?.participants"
          :label="`${i + 1}`"
          :key="horse.id"
          :horse="{
          id: horse.id,
          condition: horse.condition,
          color: horse.color as HorseColor,
          name: horse.name as HorseName
        }"
          @finished-the-race="participantFinishedTheRace"
        />
      </div>
      <div class="hippodrome__footer">
        {{ activeRace?.title }} - {{ activeRace?.length }}m
        <span>Finish</span>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, watch } from "vue";
import { storeToRefs } from "pinia";
import { useRaceStore } from "@/stores/race";
import ColumnHippodromeHorse from "@/components/columns/ColumnHippodromeHorse.vue";
import BaseText from "@/components/base/BaseText.vue";
import { NUMBER_OF_HORSES_PER_RACE } from "@/config";
import type { HorseColor, HorseName, RaceParticipant } from "@/ts";

const raceStore = useRaceStore();
const { activeRace } = storeToRefs(raceStore);

const refreshKey = ref(Date.now());
const howManyParticipantsFinishedTheRace = ref(0);

const participantFinishedTheRace = (
  participant: Omit<RaceParticipant, "position">
) => {
  raceStore.finishedTheRace({
    ...participant,
    position: howManyParticipantsFinishedTheRace.value + 1,
  });
  howManyParticipantsFinishedTheRace.value += 1;
};

watch(howManyParticipantsFinishedTheRace, (newVal) => {
  if (newVal === NUMBER_OF_HORSES_PER_RACE) {
    howManyParticipantsFinishedTheRace.value = 0;
    raceStore.nextActiveRace();
    refreshKey.value = Date.now();
  }
});

watch(
  () => raceStore.raceSchedule,
  () => {
    refreshKey.value = Date.now();
    howManyParticipantsFinishedTheRace.value = 0;
  }
);
</script>

<style scoped lang="scss">
.hippodrome {
  padding: 0 50px 0 30px;
  box-sizing: border-box;

  &__content {
    border-right: solid 4px var(--color-warning);
  }
  &__footer {
    position: relative;
    padding: 14px 0;
    text-align: center;
    color: var(--color-warning);
    font-weight: bold;

    span {
      position: absolute;
      right: -20px;
    }
  }

  :deep(.race-path:last-child) {
    .race-path__position {
      border-bottom: 2px solid var(--color-secondary);
    }
    .race-path__content {
      border-bottom: 2px dashed var(--color-primary);
    }
  }
}
</style>
