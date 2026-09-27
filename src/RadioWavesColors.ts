import { Color, ProfileColorProperty } from "scenerystack/scenery";
import RadioWavesNamespace from "./RadioWavesNamespace.js";

const { BLACK, WHITE } = Color;

// ── Panel fills ───────────────────────────────────────────────────────────────
// Cool blue-tinted dark/light fills for better theme coherence.
const PANEL_FILL_DARK = new Color(28, 32, 40);
const PANEL_FILL_LIGHT = new Color(230, 234, 242);

// Semi-transparent borders that stay visible on either fill.
const PANEL_STROKE_DARK = "rgba(255, 255, 255, 0.35)";
const PANEL_STROKE_LIGHT = "rgba(0, 0, 0, 0.35)";

const RadioWavesColors = {
  backgroundColorProperty: new ProfileColorProperty(RadioWavesNamespace, "background", {
    default: BLACK,
    projector: WHITE,
  }),
  foregroundColorProperty: new ProfileColorProperty(RadioWavesNamespace, "foreground", {
    default: WHITE,
    projector: BLACK,
  }),

  panelFillProperty: new ProfileColorProperty(RadioWavesNamespace, "panelFill", {
    default: PANEL_FILL_DARK,
    projector: PANEL_FILL_LIGHT,
  }),
  panelStrokeProperty: new ProfileColorProperty(RadioWavesNamespace, "panelStroke", {
    default: PANEL_STROKE_DARK,
    projector: PANEL_STROKE_LIGHT,
  }),

  // Field visualization. Red for "force on electron", blue for "electric field".
  // Dark theme uses highly saturated values that pop against black; projector uses
  // deeper, ink-friendly tones that stay legible on white.
  forceArrowProperty: new ProfileColorProperty(RadioWavesNamespace, "forceArrow", {
    default: "#ff5252",
    projector: "#c62828",
  }),
  fieldArrowProperty: new ProfileColorProperty(RadioWavesNamespace, "fieldArrow", {
    default: "#5c8ee8",
    projector: "#1a56a8",
  }),

  // The transmitting/receiving electrons (rendered as outlined circles). Cyan keeps
  // them clearly distinguishable from the blue field-direction arrows.
  electronFillProperty: new ProfileColorProperty(RadioWavesNamespace, "electronFill", {
    default: "#29d9ff",
    projector: "#0086a8",
  }),
  electronStrokeProperty: new ProfileColorProperty(RadioWavesNamespace, "electronStroke", {
    default: "#7eeeff",
    projector: "#005c70",
  }),

  // The antenna rods. Cool gray with a subtle blue-tinted highlight.
  antennaFillProperty: new ProfileColorProperty(RadioWavesNamespace, "antennaFill", {
    default: "#8a96a4",
    projector: "#546070",
  }),
  antennaStrokeProperty: new ProfileColorProperty(RadioWavesNamespace, "antennaStroke", {
    default: "rgba(190, 220, 255, 0.5)",
    projector: "rgba(0, 0, 0, 0.4)",
  }),

  // Oscilloscope position plots. Deep navy background; the trace color matches the electron
  // (cyan/teal) since the plot shows electron position over time.
  plotBackgroundProperty: new ProfileColorProperty(RadioWavesNamespace, "plotBackground", {
    default: new Color(8, 12, 22),
    projector: WHITE,
  }),
  // Default grid brightened vs. the deep navy plot fill so axes/border stay readable.
  plotGridProperty: new ProfileColorProperty(RadioWavesNamespace, "plotGrid", {
    default: "#4a6580",
    projector: "#b8c8d8",
  }),
  plotLineProperty: new ProfileColorProperty(RadioWavesNamespace, "plotLine", {
    default: "#29d9ff",
    projector: "#0086a8",
  }),

  // ── Background scene (landscape art) ──────────────────────────────────────────
  // The hand-drawn daytime landscape painted by BackgroundSceneNode. These are representational
  // scenery colors rather than UI elements, so projector mode keeps the same values; they live here
  // (rather than hard-coded in the canvas node) so the palette is centralized and theme-able.
  sceneSkyTopProperty: new ProfileColorProperty(RadioWavesNamespace, "sceneSkyTop", {
    default: "#5ba8e8",
    projector: "#5ba8e8",
  }),
  sceneSkyBottomProperty: new ProfileColorProperty(RadioWavesNamespace, "sceneSkyBottom", {
    default: "#b0d4f5",
    projector: "#b0d4f5",
  }),
  sceneInkProperty: new ProfileColorProperty(RadioWavesNamespace, "sceneInk", {
    default: "#111111",
    projector: "#111111",
  }),
  sceneStructureLightProperty: new ProfileColorProperty(RadioWavesNamespace, "sceneStructureLight", {
    default: "#ffffff",
    projector: "#ffffff",
  }),
  sceneMountainFarProperty: new ProfileColorProperty(RadioWavesNamespace, "sceneMountainFar", {
    default: "#d9d9d1",
    projector: "#d9d9d1",
  }),
  sceneMountainNearProperty: new ProfileColorProperty(RadioWavesNamespace, "sceneMountainNear", {
    default: "#777061",
    projector: "#777061",
  }),
  sceneHillBackProperty: new ProfileColorProperty(RadioWavesNamespace, "sceneHillBack", {
    default: "#8a865d",
    projector: "#8a865d",
  }),
  sceneHillFrontProperty: new ProfileColorProperty(RadioWavesNamespace, "sceneHillFront", {
    default: "#28b038",
    projector: "#28b038",
  }),
  sceneTreesProperty: new ProfileColorProperty(RadioWavesNamespace, "sceneTrees", {
    default: "#1a6e2a",
    projector: "#1a6e2a",
  }),
  sceneWireProperty: new ProfileColorProperty(RadioWavesNamespace, "sceneWire", {
    default: "#d00000",
    projector: "#d00000",
  }),
  sceneTransmitterBuildingProperty: new ProfileColorProperty(RadioWavesNamespace, "sceneTransmitterBuilding", {
    default: "#d0b218",
    projector: "#d0b218",
  }),
  sceneReceiverRoofProperty: new ProfileColorProperty(RadioWavesNamespace, "sceneReceiverRoof", {
    default: "#555555",
    projector: "#555555",
  }),
  sceneReceiverBuildingProperty: new ProfileColorProperty(RadioWavesNamespace, "sceneReceiverBuilding", {
    default: "#f47c00",
    projector: "#f47c00",
  }),
  sceneAntennaArtFillProperty: new ProfileColorProperty(RadioWavesNamespace, "sceneAntennaArtFill", {
    default: "#a4aab0",
    projector: "#a4aab0",
  }),
  sceneAntennaArtHighlightProperty: new ProfileColorProperty(RadioWavesNamespace, "sceneAntennaArtHighlight", {
    default: "#e7ecef",
    projector: "#e7ecef",
  }),

  // Fleet-standard aliases for shared Panel + ButtonOptions modules.
  panelBackgroundColorProperty: new ProfileColorProperty(RadioWavesNamespace, "panelBackground", {
    default: PANEL_FILL_DARK,
    projector: PANEL_FILL_LIGHT,
  }),
  panelBorderColorProperty: new ProfileColorProperty(RadioWavesNamespace, "panelBorder", {
    default: PANEL_STROKE_DARK,
    projector: PANEL_STROKE_LIGHT,
  }),
  textColorProperty: new ProfileColorProperty(RadioWavesNamespace, "text", { default: WHITE, projector: BLACK }),

  // ── Light control surfaces ───────────────────────────────────────────────────
  // White chrome (combo boxes, flat push buttons, editable input fields) stays light
  // in both profiles; its text stays dark.

  /** Fill of light control surfaces: combo-box button/list, editable input fields. */
  controlSurfaceColorProperty: new ProfileColorProperty(RadioWavesNamespace, "controlSurface", {
    default: "#ffffff",
    projector: "#ffffff",
  }),

  /** Fill of a disabled control surface (grayed-out editable input field). */
  controlSurfaceDisabledColorProperty: new ProfileColorProperty(RadioWavesNamespace, "controlSurfaceDisabled", {
    default: "#cccccc",
    projector: "#cccccc",
  }),

  /** Text on light control surfaces: combo items, flat-button labels, field values, preferences. */
  controlSurfaceTextColorProperty: new ProfileColorProperty(RadioWavesNamespace, "controlSurfaceText", {
    default: "#1a1a1a",
    projector: "#1a1a1a",
  }),
};

export default RadioWavesColors;
