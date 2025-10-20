import { ref } from "vue";
import { defineStore } from "pinia";
import { generateRandomId, generateRandomNumber, pickAndRemove } from "@/utils";
import { NUMBER_OF_HORSES, HORSE_NAMES, HORSE_COLORS } from "@/config";
import type { Horse } from "@/ts";

export const useHorsesStore = defineStore("horses", () => {
  const state = ref<Horse[]>([]);

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

    state.value = newState;
  }

  return { state, generateHorses };
});
