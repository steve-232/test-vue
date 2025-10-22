<template>
  <BaseColumn title="Program" text-align="center" header-bg-color="#5288ee">
    <Text v-if="!raceSchedule.length">No Program</Text>
    <TableScorePosition
      v-else
      v-for="(race, i) in raceSchedule"
      :key="race.id"
      :data="race.participants"
      :title="`${race.title} - ${race.length}m`"
    />
  </BaseColumn>
</template>

<script setup lang="ts">
import { storeToRefs } from "pinia";
import { useRaceStore } from "@/stores/race";
import BaseColumn from "@/components/base/BaseColumn.vue";
import TableScorePosition from "@/components/common/TableScorePosition.vue";
import Text from "@/components/common/Text.vue";

const raceStore = useRaceStore();
const { raceSchedule } = storeToRefs(raceStore);
</script>
