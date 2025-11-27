//by temeyd
IMPORT("flags");
IMPORT("ToolLib");
IMPORT("EnergyNet");
IMPORT("ChargeItem");
IMPORT("TileRender");
IMPORT("StorageInterface");
var ENERGY_PACK_TICK = ICore.requireGlobal("ENERGY_PACK_TICK");

// constants
const GUI_SCALE = 3.2;

//armor_assembler
var IC_WIRES = {};
function setupBlockAsWire(id, maxVoltage, insulationLevels){
	EU.registerWire(id, maxVoltage, wireBurnoutFunc);
	IC_WIRES[id] = insulationLevels || 0;
}