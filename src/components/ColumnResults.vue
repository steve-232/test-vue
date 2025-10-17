<template>
  <BaseColumn title="Results" text-align="center" header-bg-color="#a0d179">
    <TableScorePosition :data="data" title="Lap 1 - 1200m" />
    <TableScorePosition :data="data" title="Lap 2 - 1200m" />
    <TableScorePosition :data="data" title="Lap 3 - 1200m" />
  </BaseColumn>
</template>

<script setup lang="ts">
import { ref } from "vue";
import BaseColumn from "@/components/base/BaseColumn.vue";
import TableScorePosition from "@/components/common/TableScorePosition.vue";

const data = ref([
  {
    id: 1,
    name: "horse 1",
    position: 1,
  },
  {
    id: 2,
    name: "horse 2",
    position: 2,
  },
  {
    id: 3,
    name: "horse 3",
    position: 3,
  },
  {
    id: 3,
    name: "horse 3",
    position: 3,
  },
  {
    id: 4,
    name: "horse 4",
    position: 4,
  },
  {
    id: 5,
    name: "horse 5",
    position: 5,
  },
  {
    id: 6,
    name: "horse 6",
    position: 6,
  },
  {
    id: 7,
    name: "horse 7",
    position: 7,
  },
  {
    id: 8,
    name: "horse 8",
    position: 8,
  },
  {
    id: 9,
    name: "horse 9",
    position: 9,
  },
  {
    id: 10,
    name: "horse 10",
    position: 10,
  },
]);
</script>
