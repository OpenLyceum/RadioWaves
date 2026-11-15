/**
 * ElectronPosition.ts
 *
 * Minimal electron surface used by movement strategies (avoids Electron↔strategy cycle).
 */

import type { Vector2 } from "scenerystack/dot";

export type ElectronPosition = {
  readonly position: Vector2;
  readonly startPosition: Vector2;
  setPosition(position: Vector2): void;
};
