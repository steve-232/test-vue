import { ref } from "vue";
import { defineStore } from "pinia";
import { pickAndRemove } from "@/utils";
import { useHorsesStore } from "./horses";
import { NUMBER_OF_RACES, NUMBER_OF_HORSES_PER_RACE } from "@/config";
import type { RaceParticipant } from "@/ts";

export const useRaceScheduleStore = defineStore("raseSchedule", () => {
  const raceSchedule = ref<RaceParticipant[][]>([]);
  const activeRace = ref<RaceParticipant[]>([]);
  const activeRaceIndex = ref(0);

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
      raceSchedule.value.push(generateRace());
    }

    activeRace.value = raceSchedule.value[0] as RaceParticipant[];
  }

  function nextActiveRace() {
    activeRaceIndex.value += 1;
    activeRace.value = raceSchedule.value[
      activeRaceIndex.value
    ] as RaceParticipant[];
  }

  return {
    raceSchedule,
    activeRace,
    nextActiveRace,
    generateRaceSchedule,
  };
});
