<template>
  <div class="page">
    <TheHeader />
    <div class="layout">
      <ColumnHorseList />
      <ColumnHippodrome />
      <ColumnProgram />
      <ColumnResults />
    </div>
  </div>
</template>

<script setup lang="ts">
import TheHeader from "@/components/TheHeader.vue";
import ColumnHippodrome from "@/components/columns/ColumnHippodrome.vue";
import ColumnHorseList from "@/components/columns/ColumnHorseList.vue";
import ColumnProgram from "@/components/columns/ColumnProgram.vue";
import ColumnResults from "@/components/columns/ColumnResults.vue";
</script>

<style scoped lang="scss">
.page-header {
  margin-bottom: 30px;
}

.layout {
  display: grid;
  grid-template-columns: 1fr 2fr 0.9fr 0.9fr;
}
</style>
