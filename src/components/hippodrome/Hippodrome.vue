<template>
  <section class="hippodrome">
    <div class="hippodrome__content" :key="refreshKey">
      <HippodromeHorse
        v-for="(horse, i) in activeRace"
        :label="`${i + 1}`"
        :key="horse.id"
        :horse="{
          id: horse.id,
          condition: horse.condition,
          color: horse.color as string,
        }"
        @finished-the-race="participantFinishedTheRace"
      />
    </div>
    <div class="hippodrome__footer">
      Lap 1 - 1200m - {{ howManyParticipantsFinishedTheRace
      }}<span>Finish</span>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, watch } from "vue";
import { storeToRefs } from "pinia";
import { useRaceScheduleStore } from "@/stores/raceSchedule";
import HippodromeHorse from "@/components/hippodrome/HippodromeHorse.vue";
import { NUMBER_OF_HORSES_PER_RACE } from "@/config";

const raceScheduleStore = useRaceScheduleStore();
const { activeRace } = storeToRefs(raceScheduleStore);

const refreshKey = ref(Date.now());
const howManyParticipantsFinishedTheRace = ref(0);

const participantFinishedTheRace = () =>
  (howManyParticipantsFinishedTheRace.value += 1);

watch(howManyParticipantsFinishedTheRace, (newVal) => {
  if (newVal === NUMBER_OF_HORSES_PER_RACE) {
    howManyParticipantsFinishedTheRace.value = 0;
    raceScheduleStore.nextActiveRace();
    refreshKey.value = Date.now();
  }
});
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
