MCSystem.setLoadingTip("Initialization Script");
let maxWindows = 8;
let saveCoords = false;
let autosave = true;
let autosaveInterface = false;
let autosavePeriod = 45;
let entityBoxType = true;
let fontScale = uiScaler = 1;
let drawSelection = true;
let autosaveProjectable = true;
let injectBorder = false;
let transparentBoxes = true;
let menuDividers = false;
let supportSupportables = true;
let loadSupportables = true;
let hintStackableDenied = true;
let maximumHints = 25;
let showProcesses = true;
let noImportedScripts = true;
let keyExpiresSoon = false;
let ignoreKeyDeprecation = false;
let projectHeaderBackground = false;
let maximumAllowedBounds = 128;
let importAutoselect = false;
let safetyProcesses = true;
let transitionSideDividers = 8;
let debugAttachBackground = false;
let debugAttachControlTools = true;
let debugIgnoreLockedBackground = true;
const REVISION = "testing-alpha-preview-0.3.5-22.06.2021-13";
const NAME = __mod__.getInfoProperty("name");
const AUTHOR = __mod__.getInfoProperty("author");
const VERSION = __mod__.getInfoProperty("version");
const DESCRIPTION = __mod__.getInfoProperty("description");
let firstLaunchTutorial = REVISION.startsWith("testing");
let typeface = android.graphics.Typeface.MONOSPACE;
let warningMessage = null;
let currentEnvironment = __name__;
let isSupportEnv = false;
let Setting, UIEditor, WorldEdit, DumpCreator, RunJSingame, InstantRunner, ModelConverter;
MCSystem.setLoadingTip("Import Libraries");
const isInstant = Boolean(this.isInstant);
IMPORT("Retention:4");
let alreadyHasDate = false;
reportError.setStackAction(function (err) {
    let message = reportError.getCode(err) + ": " + reportError.getStack(err), file = new java.io.File(Dirs.LOGGING, REVISION + ".log");
    if (!file.exists()) {
        Files.write(file, reportError.prepareDebugInfo());
    }
    if (!reportError.alreadyHasDate) {
        Files.addText(file, "\n" + reportError.getLaunchTime());
        reportError.alreadyHasDate = true;
    }
    Files.addText(file, "\n" + message);
    showHint(translate("Error stack saved into internal storage"));
});
reportError.prepareDebugInfo = function () {
    return NAME + " " + VERSION + " by " + AUTHOR + " for " + (isHorizon ? "Horizon" : "Inner Core") + " Report Log\nREVISION " + REVISION.toUpperCase() + ", ANDROID " + android.os.Build.VERSION.SDK_INT;
};
Interface.getFontSize = function (size) {
    return Math.round(this.getX(size) / this.Display.DENSITY * fontScale);
};
Interface.getX = function (x) {
    return x > 0 ? Math.round(this.Display.WIDTH / (1280 / x) * uiScaler) : x;
};
Interface.getY = function (y) {
    return y > 0 ? Math.round(this.Display.HEIGHT / (720 / y) * uiScaler) : y;
};
IMPORT("Network:2");
IMPORT("Transition:6");
IMPORT("Action:4");
IMPORT("Sequence:1");
getPlayerEnt = function () {
    return parseInt(Player.get());
};

