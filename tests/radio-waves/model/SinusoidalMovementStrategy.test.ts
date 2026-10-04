import { Vector2 } from "scenerystack/dot";
import { describe, expect, it } from "vitest";
import { Electron } from "../../../src/radio-waves/model/Electron.js";
import { SinusoidalMovementStrategy } from "../../../src/radio-waves/model/MovementStrategy.js";

describe("SinusoidalMovementStrategy", () => {
  const frequency = 1;
  const amplitude = 50;
  const start = new Vector2(100, 200);

  it("offsets position by amplitude after one quarter period", () => {
    const electron = new Electron(start.copy());
    electron.recordingHistory = false;
    const strategy = new SinusoidalMovementStrategy(electron, frequency, amplitude);

    strategy.update(0);
    expect(electron.position.y).toBeCloseTo(start.y, 6);

    const quarterPeriod = 1 / (4 * frequency);
    strategy.update(quarterPeriod);
    expect(electron.position.y).toBeCloseTo(start.y + amplitude, 4);
  });

  it("scales velocity with amplitude, including a stationary zero-amplitude source", () => {
    const electron = new Electron(start.copy());
    const strategy = new SinusoidalMovementStrategy(electron, frequency, amplitude);
    expect(strategy.getVelocity().y).toBeCloseTo(amplitude * 2 * Math.PI * frequency);
    strategy.setAmplitude(0);
    expect(strategy.getVelocity().y).toBe(0);
  });

  it("reset clears running time and oscillation offset", () => {
    const electron = new Electron(start.copy());
    electron.recordingHistory = false;
    const strategy = new SinusoidalMovementStrategy(electron, frequency, amplitude);

    strategy.update(1);
    expect(strategy.getRunningTime()).toBeGreaterThan(0);

    strategy.reset(frequency, amplitude);
    expect(strategy.getRunningTime()).toBeCloseTo(0, 6);

    strategy.update(0);
    expect(electron.position.y).toBeCloseTo(start.y, 6);
  });

  it("returns to the start y after one full period", () => {
    const electron = new Electron(start.copy());
    electron.recordingHistory = false;
    const strategy = new SinusoidalMovementStrategy(electron, frequency, amplitude);

    strategy.update(0);
    strategy.update(1 / frequency);
    expect(electron.position.y).toBeCloseTo(start.y, 4);
  });
});

// Compare with the derivative of the actual position, independently of the velocity formula.
describe("sinusoidal kinematics", () => {
  it.each([0, 1, 50])("velocity differentiates position at amplitude %s", (amplitude) => {
    const electron = new Electron(new Vector2(100, 200));
    const strategy = new SinusoidalMovementStrategy(electron, 0.7, amplitude);
    const time = 0.13;
    const epsilon = 1e-6;
    strategy.setRunningTime(time - epsilon);
    strategy.update(0);
    const before = electron.position.y;
    strategy.setRunningTime(time + epsilon);
    strategy.update(0);
    const after = electron.position.y;
    strategy.setRunningTime(time);
    expect(strategy.getVelocity().y).toBeCloseTo((after - before) / (2 * epsilon), 5);
  });
});
