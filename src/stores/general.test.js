import { setActivePinia, createPinia } from "pinia";
import { useGeneralStore } from "@/stores/general";
import { PlayState } from "@/ts";
import { NUMBER_OF_HORSES } from "@/config";

describe("useGeneralStore", () => {
  let store;

  beforeEach(() => {
    setActivePinia(createPinia());
    store = useGeneralStore();
  });

  it("should initializes correct default state", () => {
    expect(store.playState).toBe(PlayState.PAUSED);
    expect(store.horses).toEqual([]);
  });

  it("should set playState to PAUSED, when pauseRace() is called", () => {
    store.startRace();
    store.pauseRace();
    expect(store.playState).toBe(PlayState.PAUSED);
  });

  it("should set playState to RUNNING, when startRace() is called", () => {
    store.startRace();
    expect(store.playState).toBe(PlayState.RUNNING);
  });

  it("should switches between PAUSED and RUNNING, when togglePlayState() is called", () => {
    store.togglePlayState();
    expect(store.playState).toBe(PlayState.RUNNING);
    store.togglePlayState();
    expect(store.playState).toBe(PlayState.PAUSED);
  });

  it("should create the correct number of horses, when generateHorses() is called", () => {
    store.generateHorses();

    expect(store.horses.length).toBe(NUMBER_OF_HORSES);
    expect(store.horses[0].id).toBeTruthy();
    expect(store.horses[0].id).toBeTypeOf("number");
    expect(store.horses[0].condition).toBeTruthy();
    expect(store.horses[0].condition).toBeTypeOf("number");
    expect(store.horses[0].name).toBeTruthy();
    expect(store.horses[0].name).toBeTypeOf("string");
    expect(store.horses[0].color).toBeTruthy();
    expect(store.horses[0].color).toBeTypeOf("string");
  });
});
