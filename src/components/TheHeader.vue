<template>
  <header class="page-header">
    <Title tag="h2" class="page-header__title">Horse Racing</Title>

    <div class="page-header__actions">
      <HeroBtn @click="raceScheduleStore.generateRaceSchedule"
        >Generate program</HeroBtn
      >
      <HeroBtn @click="generalStore.togglePlayState">{{
        generalStore.playState === PlayState.PAUSED ? "Start" : "Pause"
      }}</HeroBtn>
    </div>
  </header>
</template>
<script setup lang="ts">
import { PlayState } from "@/ts";

import { useGeneralStore } from "@/stores/general";
import { useRaceScheduleStore } from "@/stores/raceSchedule";

import Title from "@/components/common/Title.vue";
import HeroBtn from "@/components/common/HeroBtn.vue";

const raceScheduleStore = useRaceScheduleStore();
const generalStore = useGeneralStore();
</script>

<style scoped lang="scss">
.page-header {
  display: flex;
  padding: 10px 30px;
  justify-content: space-between;
  align-items: center;
  background-color: var(--color-header-bg-primary);
  border-bottom: solid 1px var(--color-border-primary);

  &__title {
    margin: 0;
  }
  &__actions {
    display: flex;
    align-items: center;

    button {
      margin: 0 10px;

      &:last-child {
        margin-right: 0;
      }
    }
  }
}
</style>
