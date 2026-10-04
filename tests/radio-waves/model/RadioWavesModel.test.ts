import { describe, expect, it } from "vitest";
import { RadioWavesPreferencesModel } from "../../../src/preferences/RadioWavesPreferencesModel.js";
import Constants from "../../../src/RadioWavesConstants.js";
import { RadioWavesModel } from "../../../src/radio-waves/model/RadioWavesModel.js";

describe("RadioWavesModel mode changes", () => {
  it("holds the current transmitter position when switching to manual", () => {
    const model = new RadioWavesModel(new RadioWavesPreferencesModel());
    model.movementModeProperty.value = "oscillate";
    for (let i = 0; i < 10; i++) {
      model.stepOnce();
    }
    const position = model.transmittingElectron.position.copy();
    model.movementModeProperty.value = "manual";
    model.stepOnce();
    expect(model.transmittingElectron.position.equals(position)).toBe(true);
  });

  it("discards obsolete oscillator edits across mode changes", () => {
    const model = new RadioWavesModel(new RadioWavesPreferencesModel());
    model.movementModeProperty.value = "oscillate";
    model.frequencyProperty.value = 200;
    model.amplitudeProperty.value = 100;
    model.movementModeProperty.value = "manual";
    model.frequencyProperty.value = 0;
    model.amplitudeProperty.value = 0;
    model.movementModeProperty.value = "oscillate";
    for (let i = 0; i < 10; i++) {
      model.stepOnce();
    }
    expect(model.transmittingElectron.position.y).toBe(Constants.SIMULATION_ORIGIN.y);
  });

  it("uses the current controls when starting oscillation", () => {
    const model = new RadioWavesModel(new RadioWavesPreferencesModel());
    model.frequencyProperty.value = 0;
    model.amplitudeProperty.value = 0;
    model.movementModeProperty.value = "oscillate";
    for (let i = 0; i < 10; i++) {
      model.stepOnce();
    }
    expect(model.transmittingElectron.position.y).toBe(Constants.SIMULATION_ORIGIN.y);
  });
});
