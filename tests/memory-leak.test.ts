/**
 * Fleet-standard memory-leak regression suite.
 * SinusoidalMovementStrategy + Electron are the pure model units under test.
 */

import { Vector2 } from "scenerystack/dot";
import { describe, expect, it } from "vitest";
import { TimeModel } from "../src/common/TimeModel.js";
import { Electron } from "../src/radio-waves/model/Electron.js";
import { SinusoidalMovementStrategy } from "../src/radio-waves/model/MovementStrategy.js";
import { describeDisposalLeaks, forceGC } from "./helpers/memoryLeak.js";

function createAndDropStrategy(): WeakRef<object> {
  const electron = new Electron(new Vector2(0, 0));
  electron.recordingHistory = false;
  const strategy = new SinusoidalMovementStrategy(electron, 1, 50);
  strategy.update(0.25);
  strategy.reset(1, 50);
  return new WeakRef<object>(strategy);
}

describe("Memory leak regression", () => {
  it("SinusoidalMovementStrategy is collected after drop", async () => {
    const ref = createAndDropStrategy();
    await forceGC(ref);
    expect(ref.deref()).toBeUndefined();
  });

  it("repeated create/drop cycles leave no survivors", async () => {
    const refs: WeakRef<object>[] = [];
    for (let i = 0; i < 10; i++) {
      refs.push(createAndDropStrategy());
    }
    await forceGC(refs);
    expect(refs.filter((r) => r.deref() !== undefined).length).toBe(0);
  });
});

describeDisposalLeaks([{ name: "TimeModel", create: () => new TimeModel(), idempotentDispose: true }]);
