import type { Horse } from "./Horse";

export interface RaceParticipant extends Pick<Horse, "id" | "name"> {
  position: number;
}
