<template>
  <BaseColumn title="Horse list" header-bg-color="#f2eb67">
    <TableHorseList :data="data" />
  </BaseColumn>
</template>

<script setup lang="ts">
import { ref } from "vue";
import BaseColumn from "@/components/base/BaseColumn.vue";
import TableHorseList from "@/components/common/TableHorseList.vue";

const data = ref([
  {
    id: 1,
    name: "horse 1",
    condition: 59,
    color: "white",
  },
  {
    id: 2,
    name: "horse 2",
    condition: 23,
    color: "black",
  },
  {
    id: 3,
    name: "horse 3",
    condition: 23,
    color: "red",
  },
  {
    id: 11,
    name: "horse 1",
    condition: 59,
    color: "white",
  },
  {
    id: 12,
    name: "horse 2",
    condition: 23,
    color: "black",
  },
  {
    id: 13,
    name: "horse 3",
    condition: 23,
    color: "red",
  },
]);
</script>
