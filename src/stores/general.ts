import { ref, readonly } from "vue";
import { defineStore } from "pinia";
import { PlayState } from "@/ts";

export const useGeneralStore = defineStore("general", () => {
  const playState = ref<PlayState>(PlayState.PAUSED);

  function togglePlayState() {
    playState.value =
      playState.value === PlayState.PAUSED
        ? PlayState.RUNNING
        : PlayState.PAUSED;
  }

  return { playState: readonly(playState), togglePlayState };
});
