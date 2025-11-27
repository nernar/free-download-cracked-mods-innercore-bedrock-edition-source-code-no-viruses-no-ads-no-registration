IMPORT("ToolType");

IDRegistry.genItemID("devilSword");
IDRegistry.genItemID("devilAxe");
IDRegistry.genItemID("devilPickaxe");
IDRegistry.genItemID("devilShovel");
IDRegistry.genItemID("devilHoe");

Item.createItem("devilSword", "Devil Sword", {name: "devil_sword", meta: 0}, {stack: 1});
Item.createItem("devilAxe", "Devil Axe", {name: "devil_axe", meta: 0}, {stack: 1});
Item.createItem("devilPickaxe", "Devil Pickaxe", {name: "devil_pickaxe", meta: 0}, {stack: 1});
Item.createItem("devilShovel", "Devil Shovel", {name: "devil_shovel", meta: 0}, {stack: 1});
Item.createItem("devilHoe", "Devil Hoe", {name: "devil_hoe", meta: 0}, {stack: 1});

Callback.addCallback("PostLoaded", function(){
Recipes.addShaped({id: ItemID.devilSword, count: 1, data: 0}, [
    " v ",
    "dvd",
    " a "
], ['d',ItemID.devilIngot, 0, 'v',BlockID.devilBlock, 0, 'a' , 280, 0]);
Recipes.addShaped({id: ItemID.devilAxe, count: 1, data: 0}, [
    "vvd",
    "va ",
    " a "
], ['d',ItemID.devilIngot, 0, 'v',BlockID.devilBlock, 0, 'a' , 280, 0]);
Recipes.addShaped({id: ItemID.devilPickaxe, count: 1, data: 0}, [
    "vvd",
    "da ",
    " a "
], ['d',ItemID.devilIngot, 0, 'v',BlockID.devilBlock, 0, 'a' , 280, 0]);
Recipes.addShaped({id: ItemID.devilShovel, count: 1, data: 0}, [
    " v ",
    "dad",
    " a "
], ['d',ItemID.devilIngot, 0, 'v',BlockID.devilBlock, 0, 'a' , 280, 0]);
Recipes.addShaped({id: ItemID.devilHoe, count: 1, data: 0}, [
    "vvd",
    " a",
    " a "
], ['d',ItemID.devilIngot, 0, 'v',BlockID.devilBlock, 0, 'a' , 280, 0]);
});

IMPORT("ToolType");

ToolAPI.addToolMaterial("devil", {
    durability: 15896,
    level: 4,
    efficiency: 50,
    damage: 40,
    enchantability: 14
});

ToolAPI.setTool(ItemID.devilSword, "devil", ToolType.sword);
ToolAPI.setTool(ItemID.devilAxe, "devil", ToolType.axe);
ToolAPI.setTool(ItemID.devilPickaxe, "devil", ToolType.pickaxe);
ToolAPI.setTool(ItemID.devilShovel, "devil", ToolType.shovel);
ToolAPI.setTool(ItemID.devilHoe, "devil", ToolType.hoe);

