/*
BUILD INFO:
  dir: Source/Dev
  target: Main Source/main.js
  files: 1
*/



// file: Header.js


var GS = " Giant Sword \n§9 Giant Sword";
var ID = "_giant_sword";
IMPORT("ToolLib");;
const sword = function(namedID, name, o1, o2){
    let texture, stack;
    if(typeof o1 === "string"){
        texture = o1;
        stack = o2;
    }
    else if(typeof o1 === "number"){
        stack = o1;
    }
    const id = IDRegistry.genItemID(namedID);
    Item.createItem(namedID, name, {name: texture || namedID}, {stack: stack || 64});
    Item.addCreativeGroup("Sword", Translation.translate("Sword"), [ItemID[namedID],]);
    Item.setEnchantType(ItemID[namedID], Native.EnchantType.weapon, 14);
    return id;
};
sword("wooden" + ID, "Wooden" + GS, 1);
sword("cobblestone" + ID, "Stone" + GS, 1);
sword("iron" + ID, "Iron" + GS, 1);
sword("gold" + ID, "Gold" + GS, 1);
sword("diamond" +ID, "Diamond" + GS, 1);
sword("emerald" + ID, "Emerald" +GS, 1);
sword("ender" + ID, "Ender" + GS, 1);
sword("netherrack" + ID, "Nnetherrack" + GS, 1);
sword("quartz" + ID, "Quartz" + GS, 1);
sword("bone" + ID, "Bone" + GS, 1);
sword("living_material" + ID, "Living" + GS, 1);
sword("wither" + ID, "Wither" + GS, 1);
sword("dragon" + ID, "Dragon" + GS, 1);
/*SET TOOLS*/
ToolAPI.addToolMaterial("wooden", {durability: 550, level: 3, efficiency: 17, damage: 8, enchantability: 20});
ToolLib.setTool(ItemID.wooden_giant_sword, "wooden", ToolType.sword);

ToolAPI.addToolMaterial("stone", {durability: 1270, level: 4, efficiency: 17, damage: 10, enchantability: 20});
ToolLib.setTool(ItemID.cobblestone_giant_sword, "stone", ToolType.sword);

ToolAPI.addToolMaterial("iron", {durability: 1670, level: 5, efficiency: 17, damage: 15, enchantability: 20});
ToolLib.setTool(ItemID.iron_giant_sword, "iron", ToolType.sword);

ToolAPI.addToolMaterial("gold", {durability: 1270, level: 5, efficiency: 17, damage: 12, enchantability: 20});
ToolLib.setTool(ItemID.gold_giant_sword, "gold", ToolType.sword);

ToolAPI.addToolMaterial("diamond", {durability: 3570, level: 6, efficiency: 17, damage: 17, enchantability: 20});
ToolLib.setTool(ItemID.diamond_giant_sword, "diamond", ToolType.sword);

ToolAPI.addToolMaterial("emerald", {durability: 4000, level: 7, efficiency: 17, damage: 20, enchantability: 20});
ToolLib.setTool(ItemID.emerald_giant_sword, "emerald", ToolType.sword);

ToolAPI.addToolMaterial("ender", {durability: 4500, level: 8, efficiency: 17, damage: 25, enchantability: 20});
ToolLib.setTool(ItemID.ender_giant_sword, "ender", ToolType.sword);

ToolAPI.addToolMaterial("netherrack", {durability: 1270, level: 4, efficiency: 17, damage: 10, enchantability: 20});
ToolLib.setTool(ItemID.netherrack_giant_sword, "netherrack", ToolType.sword);
ToolLib.setTool(ItemID.quartz_giant_sword, "netherrack", ToolType.sword);
ToolLib.setTool(ItemID.bone_giant_sword, "netherrack", ToolType.sword);

ToolAPI.addToolMaterial("living_material", {durability: 4700, level: 8, efficiency: 17, damage: 30, enchantability: 20});
ToolLib.setTool(ItemID.living_material_giant_sword, "living_material", ToolType.sword);

ToolAPI.addToolMaterial("wither", {durability: 5400, level: 9, efficiency: 17, damage: 35, enchantability: 20});
ToolLib.setTool(ItemID.wither_giant_sword, "wither", ToolType.sword);

ToolAPI.addToolMaterial("dragon", {durability: 7000, level: 10, efficiency: 17, damage: 50, enchantability: 20});
ToolLib.setTool(ItemID.dragon_giant_sword, "dragon", ToolType.sword);

	

Callback.addCallback("PostLoaded", function(){
Recipes.addShaped({id: ItemID.wooden_giant_sword, couant: 1, data: 0}, [
	"OAA",
	"SAA",
	"BSO"
], ['A', 5, 0, 'B', 280, 0,'S', 17, 0]);

Recipes.addShaped({id: ItemID.cobblestone_giant_sword, couant: 1, data: 0}, [
	"OAA",
	"AAA",
	"BAO"
], ['A', 4, 0, 'B', 280, 0]);

Recipes.addShaped({id: ItemID.iron_giant_sword, couant: 1, data: 0}, [
	"OAA",
	"SAA",
	"BSO"
], ['A', 265, 0, 'B', 280, 0,'S', 42, 0]);

Recipes.addShaped({id: ItemID.gold_giant_sword, couant: 1, data: 0}, [
	"OAA",
	"SAA",
	"BSO"
], ['A', 266, 0, 'B', 280, 0,'S', 41, 0]);

Recipes.addShaped({id: ItemID.diamond_giant_sword, couant: 1, data: 0}, [
	"OAA",
	"SAA",
	"BSO"
], ['A', 264, 0, 'B', 280, 0,'S', 57, 0]);

Recipes.addShaped({id: ItemID.emerald_giant_sword, couant: 1, data: 0}, [
	"OAA",
	"SAA",
	"BSO"
], ['A', 388, 0, 'B', 280, 0,'S', 133, 0]);

Recipes.addShaped({id: ItemID.emerald_giant_sword, couant: 1, data: 0}, [
	"OAA",
	"ASA",
	"BAO"
], ['A', 49, 0, 'B', 369, 0,'S', 381, 0]);

//
Recipes.addShaped({id: ItemID.netherrack_giant_sword, couant: 1, data: 0}, [
	"OAA",
	"SAA",
	"BSO"
], ['A', 87, 0, 'B', 280, 0,'S', 112, 0]);

Recipes.addShaped({id: ItemID.quartz_giant_sword, couant: 1, data: 0}, [
	"OAA",
	"SAA",
	"BSO"
], ['A', 406, 0, 'B', 280, 0,'S', 155, 0]);

Recipes.addShaped({id: ItemID.bone_giant_sword, couant: 1, data: 0}, [
	"OAA",
	"SAA",
	"BSO"
], ['A', 265, 0, 'B', 280, 0,'S', 87, 0]);

/*Recipes.addShaped({id: ItemID.living_material_giant_sword, couant: 1, data: 0}, [
	"OAA",
	"SAA",
	"BSO"
], ['A', 352, 0, 'B', 280, 0,'S', 41, 0]);*/

Recipes.addShaped({id: ItemID.wither_giant_sword, couant: 1, data: 0}, [
	"OAA",
	"ASA",
	"BAO"
], ['A', 49, 0, 'B', 280, 0,'S', 397, 1]);

Recipes.addShaped({id: ItemID.emerald_giant_sword, couant: 1, data: 0}, [
	"OAA",
	"ASA",
	"BAO"
], ['A', 49, 0, 'B', 280, 0,'S', 122, 0]);

});









