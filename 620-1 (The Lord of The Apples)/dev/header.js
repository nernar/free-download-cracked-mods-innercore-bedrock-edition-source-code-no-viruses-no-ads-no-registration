IMPORT("ChargeItem");
IMPORT("IExtra");
IMPORT("ItemName");
IMPORT("SoundAPI");
IMPORT("ToolLib");

World.drop = ModAPI.requireGlobal("Level.dropItem");

Block.createSpecialType({base:1,solid:true,destroytime:5},"stone");