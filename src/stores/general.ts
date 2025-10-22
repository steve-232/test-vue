import { ref, readonly } from "vue";
import { defineStore } from "pinia";
import { generateRandomId, generateRandomNumber, pickAndRemove } from "@/utils";
import { NUMBER_OF_HORSES, HORSE_NAMES, HORSE_COLORS } from "@/config";
import { PlayState } from "@/ts";
import type { Horse } from "@/ts";

export const useGeneralStore = defineStore("general", () => {
  const horses = ref<Horse[]>([]);
  const playState = ref<PlayState>(PlayState.PAUSED);

  function pauseRace() {
    playState.value = PlayState.PAUSED;
  }

  function startRace() {
    playState.value = PlayState.RUNNING;
  }

  function togglePlayState() {
    playState.value === PlayState.PAUSED ? startRace() : pauseRace();
  }

  function generateHorses() {
    const names = [...HORSE_NAMES];
    const colors = [...HORSE_COLORS];
    const newState: Horse[] = [];

    function createHorse(): Horse {
      return {
        id: generateRandomId(),
        condition: generateRandomNumber(1, 100),
        name: pickAndRemove(names),
        color: pickAndRemove(colors),
      };
    }

    for (let i = 0; i < NUMBER_OF_HORSES; i++) {
      newState.push(createHorse());
    }

    horses.value = newState;
  }

  return {
    playState: readonly(playState),
    togglePlayState,
    horses,
    generateHorses,
    startRace,
    pauseRace,
  };
});
