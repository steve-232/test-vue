import { defineStore } from "pinia";
import type { Horse } from "@/ts";

export const useHorsesStore = defineStore("horses", {
  state: () =>
    [
      {
        id: 1,
        name: "horse 1",
        condition: 59,
        color: "white",
      },
      {
        id: 2,
        name: "horse 2",
        condition: 23,
        color: "black",
      },
      {
        id: 3,
        name: "horse 3",
        condition: 23,
        color: "red",
      },
      {
        id: 11,
        name: "horse 1",
        condition: 59,
        color: "white",
      },
      {
        id: 12,
        name: "horse 2",
        condition: 23,
        color: "black",
      },
      {
        id: 13,
        name: "horse 3",
        condition: 23,
        color: "red",
      },
    ] as Horse[],
});
