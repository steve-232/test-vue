<template>
  <BaseColumn
    :title="`Horse List (1 - ${NUMBER_OF_HORSES})`"
    header-bg-color="#f2eb67"
  >
    <TableHorseList :data="horses" />
  </BaseColumn>
</template>

<script setup lang="ts">
import { onBeforeMount } from "vue";
import { storeToRefs } from "pinia";

import { NUMBER_OF_HORSES } from "@/config";
import { useGeneralStore } from "@/stores/general";

import BaseColumn from "@/components/base/BaseColumn.vue";
import TableHorseList from "@/components/common/TableHorseList.vue";

const generalStore = useGeneralStore();
const { horses } = storeToRefs(generalStore);

onBeforeMount(() => generalStore.generateHorses());
</script>
