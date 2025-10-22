<template>
  <BaseColumn title="Program" text-align="center" header-bg-color="#5288ee">
    <TableScorePosition
      v-for="(race, i) in raceSchedule"
      :data="race"
      :title="`Lap ${i + 1} - ${RACE_LENGTH[i]}`"
    />
  </BaseColumn>
</template>

<script setup lang="ts">
import { storeToRefs } from "pinia";

import { useRaceScheduleStore } from "@/stores/raceSchedule";
import { RACE_LENGTH } from "@/config";

import BaseColumn from "@/components/base/BaseColumn.vue";
import TableScorePosition from "@/components/common/TableScorePosition.vue";

const raceScheduleStore = useRaceScheduleStore();
const { raceSchedule } = storeToRefs(raceScheduleStore);
</script>
