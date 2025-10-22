<template>
  <BaseColumn title="Program" text-align="center" header-bg-color="#5288ee">
    <BaseText v-if="!raceSchedule.length">No Program</BaseText>
    <TableScorePosition
      v-else
      v-for="race in raceSchedule"
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
import BaseText from "@/components/base/BaseText.vue";
import TableScorePosition from "@/components/common/TableScorePosition.vue";

const raceStore = useRaceStore();
const { raceSchedule } = storeToRefs(raceStore);
</script>
