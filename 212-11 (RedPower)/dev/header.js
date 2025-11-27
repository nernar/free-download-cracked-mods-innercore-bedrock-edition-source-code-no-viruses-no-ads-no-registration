// libraries
IMPORT("flags");
IMPORT("ToolLib");
IMPORT("energylib");
IMPORT("ChargeItem");
IMPORT("TileRender");
IMPORT("BackpackAPI");
IMPORT("StorageInterface");

// constants
var GUI_SCALE = 3.2;

// API
Player.getArmorSlot = ModAPI.requireGlobal("Player.getArmorSlot");
Player.setArmorSlot = ModAPI.requireGlobal("Player.setArmorSlot");
var nativeDropItem = ModAPI.requireGlobal("Level.dropItem");
var MobEffect = Native.PotionEffect;
var BlockSide = Native.BlockSide;
var EntityType = Native.EntityType;

function random(min, max){
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

// blutricity
var BT = EnergyTypeRegistry.assureEnergyType("Bu", 2);

ChargeItemRegistry.registerFlashItem(ItemID.nikolite, "Bu", 500, 0);
