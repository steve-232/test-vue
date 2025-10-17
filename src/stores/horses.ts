import { ref } from "vue";
import { defineStore } from "pinia";
import { generateRandomId, generateRandomNumber, pickAndRemove } from "@/utils";
import type { Horse } from "@/ts";

export const useHorsesStore = defineStore("horses", () => {
  const state = ref<Horse[]>([]);

  function generateHorses() {
    const names = [
      "Thunder",
      "Blaze",
      "Midnight",
      "Storm",
      "Shadow",
      "Spirit",
      "Misty",
      "Apollo",
      "Luna",
      "Ranger",
      "Comet",
      "Willow",
      "Copper",
      "Whisper",
      "Dusty",
      "Sierra",
      "Dakota",
      "Jet",
      "Maple",
      "Echo",
    ];
    const colors = [
      "Crimson",
      "Azure",
      "Ivory",
      "Coral",
      "Teal",
      "Olive",
      "Silver",
      "Gold",
      "Indigo",
      "Violet",
      "Beige",
      "Cyan",
      "Magenta",
      "Maroon",
      "Lime",
      "Navy",
      "Plum",
      "Tan",
      "Salmon",
      "Orchid",
    ];
    const newState: Horse[] = [];

    for (let i = 0; i < 20; i++) {
      const newHorse: Horse = {
        id: generateRandomId(),
        condition: generateRandomNumber(1, 100),
        name: pickAndRemove(names),
        color: pickAndRemove(colors),
      };

      newState.push(newHorse);
    }

    state.value = newState;
  }

  return { state, generateHorses };
});
