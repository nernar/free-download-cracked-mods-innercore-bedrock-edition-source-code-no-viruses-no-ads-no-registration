const MCSystem = ModAPI.requireGlobal("MCSystem");
MCSystem.setLoadingTip("Initialization Script");
const isDebug = false;
const isDevelop = false;
const isCreative = false;
const launchTime = Date.now();
const context = UI.getContext();
var gameTime = isDevelop ? 0 : 0;
var gameNight = isDevelop ? 3 : 1;

