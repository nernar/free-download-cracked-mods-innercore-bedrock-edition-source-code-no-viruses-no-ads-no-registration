IDRegistry.genItemID("sword");
IDRegistry.genItemID("pickaxe");
IDRegistry.genItemID("axe");
IDRegistry.genItemID("hoe");
IDRegistry.genItemID("shovel");


Item.createItem("sword", "Ирумидиевый Меч", {name: "sword_iru", meta: 0}, {stack: 1});
Item.createItem("pickaxe", "Ирумидиевая Kирка", {name: "pickaxe_iru", meta: 0}, {stack: 1});
Item.createItem("axe", "Ирумидиевый Топор", {name: "axe_iru", meta: 0}, {stack: 1});
Item.createItem("hoe", "Ирумидиевая Мотыга", {name: "hoe_iru", meta: 0}, {stack: 1});
Item.createItem("shovel", "Ирумидиевая Лопата", {name: "sho_iru", meta: 0}, {stack: 1});


IMPORT("ToolType");

ToolAPI.addToolMaterial("sw", {durability: 900, level: 4, efficiency: 3, damage: 15, enchantability: 14});
ToolAPI.addToolMaterial("pc", {durability: 900, level: 5, efficiency: 15, damage: 8, enchantability: 14});
ToolAPI.addToolMaterial("ax", {durability: 900, level: 4, efficiency: 3, damage: 13, enchantability: 14});





ToolAPI.setTool(ItemID.sword, "sw", ToolType.sword);

ToolAPI.setTool(ItemID.pickaxe, "pc", ToolType.pickaxe);

ToolAPI.setTool(ItemID.axe, "ax", ToolType.axe);
ToolAPI.setTool(ItemID.hoe, "pc", ToolType.hoe);
ToolAPI.setTool(ItemID.shovel, "pc", ToolType.shovel);


Callback.addCallback("PostLoaded", function() {
Recipes.addShaped({id: ItemID.axe, count: 1, data: 0}, [
    "aa ", 
    "as ", 
    " s "
    ], ['a', ItemID.ingot,0, 's', 280,0]);
});


Callback.addCallback("PostLoaded", function() {
Recipes.addShaped({id: ItemID.hoe, count: 1, data: 0}, [
    "aa ", 
    "bs ", 
    " s "
    ], ['a', ItemID.ingot,0, 's', 280,0, 'b', 371,0]);
});

Callback.addCallback("PostLoaded", function() {
Recipes.addShaped({id: ItemID.shovel, count: 1, data: 0}, [
    " a ", 
    " s ", 
    " s "
    ], ['a', ItemID.ingot,0, 's', 280,0, 'b', 371,0]);
});