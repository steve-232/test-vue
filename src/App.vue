<template>
  <div class="page">
    <TheHeader />
    <ColumnHorseList />
  </div>
</template>

<script setup lang="ts">
import TheHeader from "@/components/TheHeader.vue";
import ColumnHorseList from "./components/ColumnHorseList.vue";
</script>

<style scoped lang="scss">
.page-header {
  margin-bottom: 30px;
}
</style>
