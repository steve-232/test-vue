<template>
  <BaseColumn title="Results" text-align="center" header-bg-color="#a0d179">
    <TableScorePosition
      v-for="race in results"
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

const raceStore = useRaceStore();
const { results } = storeToRefs(raceStore);
</script>
