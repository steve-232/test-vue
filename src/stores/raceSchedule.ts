import { ref } from "vue";
import { defineStore } from "pinia";
import { pickAndRemove } from "@/utils";
import { useGeneralStore } from "@/stores/general";
import { NUMBER_OF_RACES, NUMBER_OF_HORSES_PER_RACE } from "@/config";
import { generateRandomId } from "@/utils";
import { RACE_LENGTH } from "@/config";
import type { Race } from "@/ts";

export const useRaceScheduleStore = defineStore("raseSchedule", () => {
  const raceSchedule = ref<Race[]>([]);
  const activeRace = ref<Race>();
  const activeRaceIndex = ref(0);

  function generateRace(index: number): Race {
    const race: Race = {
      id: generateRandomId(),
      title: `Lap ${index + 1}`,
      length: RACE_LENGTH[index] as number,
      participants: [],
    };
    const generalStore = useGeneralStore();
    const horsesList = [...generalStore.horses];

    for (let i = 0; i < NUMBER_OF_HORSES_PER_RACE; i++) {
      const selectedHorse = pickAndRemove(horsesList);

      race.participants.push({
        id: selectedHorse.id,
        position: i + 1,
        name: selectedHorse.name,
        color: selectedHorse.color,
        condition: selectedHorse.condition,
      });
    }

    return race;
  }

  function generateRaceSchedule() {
    raceSchedule.value = [];
    activeRaceIndex.value = 0;

    for (let i = 0; i < NUMBER_OF_RACES; i++) {
      raceSchedule.value.push(generateRace(i));
    }

    activeRace.value = raceSchedule.value[0];
  }

  function nextActiveRace() {
    activeRaceIndex.value += 1;
    activeRace.value = raceSchedule.value[activeRaceIndex.value];
  }

  return {
    raceSchedule,
    activeRace,
    nextActiveRace,
    generateRaceSchedule,
  };
});
