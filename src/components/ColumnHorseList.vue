<template>
  <BaseColumn
    :title="`Horse List (1 - ${NUMBER_OF_HORSES})`"
    header-bg-color="#f2eb67"
  >
    <TableHorseList :data="data" />
  </BaseColumn>
</template>

<script setup lang="ts">
import { onBeforeMount } from "vue";
import { storeToRefs } from "pinia";

import { NUMBER_OF_HORSES } from "@/config";
import { useHorsesStore } from "@/stores/horses";

import BaseColumn from "@/components/base/BaseColumn.vue";
import TableHorseList from "@/components/common/TableHorseList.vue";

const horsesStore = useHorsesStore();
const { state: data } = storeToRefs(horsesStore);

onBeforeMount(() => horsesStore.generateHorses());
</script>
