<template>
  <div class="page">
    <TheHeader />
    <div class="layout">
      <ColumnHorseList />
      <ColumnHorseList />
      <ColumnProgram />
      <ColumnHorseList />
    </div>
  </div>
</template>

<script setup lang="ts">
import TheHeader from "@/components/TheHeader.vue";
import ColumnHorseList from "@/components/ColumnHorseList.vue";
import ColumnProgram from "@/components/ColumnProgram.vue";
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
