<template>
  <BaseColumn title="Horse list" header-bg-color="#f2eb67">
    <TableHorseList :data="data" />
  </BaseColumn>
</template>

<script setup lang="ts">
import { ref } from "vue";
import BaseColumn from "@/components/base/BaseColumn.vue";
import TableHorseList from "@/components/common/TableHorseList.vue";
import { useHorsesStore } from "@/stores/horses";

const store = useHorsesStore();

const data = ref(store.$state);
</script>
