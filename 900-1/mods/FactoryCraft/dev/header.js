IMPORT("EnergyNet");
IMPORT("StorageInterface");
IMPORT("TileRender");
IMPORT("RenderAPI");
IMPORT("ToolLib");
IMPORT("Multiblock");

const machine_particle = Native.ParticleType.cloud;

let EU = EnergyTypeRegistry.assureEnergyType("Eu", 1);
let RF = EnergyTypeRegistry.assureEnergyType("RF", 
.25);

FactAPI.getBlockDrop = function(coords, id, data, tool) {
	var dropFunc = Block.dropFunctions[id];
	if (dropFunc) {
		return dropFunc(coords, id, data, ToolAPI.getToolLevel(tool), {});
	}
	return [[id, 1, data]];
}
