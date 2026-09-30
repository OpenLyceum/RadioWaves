/**
 * RadioWavesKeyboardHelpContent.ts
 *
 * Content for the keyboard-help dialog (the "?" button in the navigation bar).
 * The transmitting electron is keyboard-dragged vertically (ElectronNode).
 * MoveDraggableItemsKeyboardHelpSection also documents left/right and A/D, which
 * that listener does not bind, so this section uses the up/down key strings
 * KeyboardDragListener actually registers. No second listener is added.
 */

import { HotkeyData } from "scenerystack/scenery";
import {
  BasicActionsKeyboardHelpSection,
  KeyboardHelpSection,
  KeyboardHelpSectionRow,
  SliderControlsKeyboardHelpSection,
  TwoColumnKeyboardHelpContent,
} from "scenerystack/scenery-phet";
import { StringManager } from "../../i18n/StringManager.js";

const keyboardHelpStrings = StringManager.getInstance().getKeyboardHelpStrings();

// Matches KeyboardDragListener's up/down key strings (shift is an ignored modifier).
const electronMoveHotkeyData = new HotkeyData({
  keys: ["shift?+arrowUp", "shift?+arrowDown", "shift?+w", "shift?+s"],
  repoName: "radio-waves",
  keyboardHelpDialogLabelStringProperty: keyboardHelpStrings.moveStringProperty,
  keyboardHelpDialogPDOMLabelStringProperty: keyboardHelpStrings.moveDescriptionStringProperty,
});

// Shift changes drag speed inside that same listener; this row only documents it.
const electronSlowerHotkeyData = new HotkeyData({
  keys: ["shift+arrowUp", "shift+arrowDown", "shift+w", "shift+s"],
  repoName: "radio-waves",
  keyboardHelpDialogLabelStringProperty: keyboardHelpStrings.moveSlowerStringProperty,
  keyboardHelpDialogPDOMLabelStringProperty: keyboardHelpStrings.moveSlowerDescriptionStringProperty,
});

export class RadioWavesKeyboardHelpContent extends TwoColumnKeyboardHelpContent {
  public constructor() {
    const electron = new KeyboardHelpSection(keyboardHelpStrings.electronHeadingStringProperty, [
      KeyboardHelpSectionRow.fromHotkeyData(electronMoveHotkeyData),
      KeyboardHelpSectionRow.fromHotkeyData(electronSlowerHotkeyData),
    ]);

    super(
      [new SliderControlsKeyboardHelpSection(), electron],
      [new BasicActionsKeyboardHelpSection({ withCheckboxContent: true })],
    );
  }
}
