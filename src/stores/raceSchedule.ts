import { ref } from "vue";
import { defineStore } from "pinia";
import { pickAndRemove } from "@/utils";
import { useHorsesStore } from "./horses";
import { NUMBER_OF_RACES, NUMBER_OF_HORSES_PER_RACE } from "@/config";
import type { RaceParticipant } from "@/ts";

export const useRaceScheduleStore = defineStore("raseSchedule", () => {
  const state = ref<RaceParticipant[][]>([]);

  function generateRace(): RaceParticipant[] {
    const race: RaceParticipant[] = [];
    const horsesStore = useHorsesStore();
    const horsesList = [...horsesStore.state];

    for (let i = 0; i < NUMBER_OF_HORSES_PER_RACE; i++) {
      const selectedHorse = pickAndRemove(horsesList);

      race.push({
        id: selectedHorse.id,
        position: i + 1,
        name: selectedHorse.name,
      });
    }

    return race;
  }

  function generateRaceSchedule() {
    state.value = [];

    for (let i = 0; i < NUMBER_OF_RACES; i++) {
      state.value.push(generateRace());
    }
  }

  return { state, generateRaceSchedule };
});
