IMPORT("ToolLib");

IDRegistry.genItemID("ThistleBrush");
Item.createItem("ThistleBrush", "Icestone", {name: "thistlebrush"});

var ICY = [BlockID.grassblockGryss];

Item.registerUseFunction("ThistleBrush", function(coords, item, block,  player){
var region = BlockSource.getDefaultForActor(player);
 for(let i in ICY) {
     var ICYB = ICY[i];
    if(region.getBlockId(coords.x, coords.y, coords.z) == ICYB) 
   Game.message(ICYB);  
    World.drop(coords.relative.x + 0.5, coords.relative.y + 0.1, coords.relative.z + 0.5, ItemID.NeciceSh, 1, drop.data); 
     }  
});


IDRegistry.genItemID("magnemiveSword");
Item.createItem("magnemiveSword", "Magnemive Sword", {name: "magnemivesworde"}, {stack: 1});
 
IDRegistry.genItemID("magnemiveShovel");
Item.createItem("magnemiveShovel", "Magnemive Shovel", {name: "magnemiveshovel"}, {stack: 1});

IDRegistry.genItemID("magnemivePickaxe");
Item.createItem("magnemivePickaxe", "Magnemive Pickaxe", {name: "magnemivepick"}, {stack: 1});

IDRegistry.genItemID("magnemiveAxe");
Item.createItem("magnemiveAxe", "Magnemive Axe", {name: "magnemiveaxe"}, {stack: 1});

IDRegistry.genItemID("magnemiveHoe");
Item.createItem("magnemiveHoe", "Magnemive Hoe", {name: "magnemivehoe"}, {stack: 1});

ToolAPI.addToolMaterial("magnemivesw", {durability: 2048, level: 5, efficiency: 4, damage: 11, enchantability: 8});
ToolAPI.addToolMaterial("magnemivesh", {durability: 2000, level: 5, efficiency: 4, damage: 7, enchantability: 8});
ToolAPI.addToolMaterial("magnemivepi", {durability: 2200, level: 5, efficiency: 5, damage: 7, enchantability: 8});
ToolAPI.addToolMaterial("magnemiveaxe", {durability: 2128, level: 5, efficiency: 4, damage: 11, enchantability: 8});
ToolAPI.addToolMaterial("magnemiveh", {durability: 2048, level: 5, efficiency: 4, damage: 4, enchantability: 8});

ToolLib.setTool(ItemID.magnemiveSword, "magnemivesw", ToolType.sword);

ToolLib.setTool(ItemID.magnemiveShovel, "magnemivesh", ToolType.shovel);

ToolLib.setTool(ItemID.magnemivePickaxe, "magnemivepi", ToolType.pickaxe);

ToolLib.setTool(ItemID.magnemiveAxe, "magnemiveaxe", ToolType.axe);

ToolLib.setTool(ItemID.magnemiveHoe, "magnemiveh", ToolType.hoe);


Callback.addCallback("PostLoaded", function (){

Item.addRepairItemIds(ItemID.magnemiveSword, [ItemID.magnemiveIngot, ItemID.magnemiveSword]);
Item.addRepairItemIds(ItemID.magnemiveShovel, [ItemID.magnemiveIngot, ItemID.magnemiveShovel]);
Item.addRepairItemIds(ItemID.magnemivePickaxe, [ItemID.magnemiveIngot, ItemID.magnemivePickaxe]);
Item.addRepairItemIds(ItemID.magnemiveAxe, [ItemID.magnemiveIngot, ItemID.magnemiveAxe]);
Item.addRepairItemIds(ItemID.magnemiveHoe, [ItemID.magnemiveIngot, ItemID.magnemiveHoe]);

Recipes.addShaped({id: ItemID.magnemiveSword, count: 1, data: 0}, [
    "a",
    "a",
    "b"
], ['a', ItemID.magnemiveIngot, 0, 'b', ItemID.frostspineRod, 0]);
Recipes.addShaped({id: ItemID.magnemiveShovel, count: 1, data: 0}, [
    "a",
    "b",
    "b"
], ['a', ItemID.magnemiveIngot, 0, 'b', ItemID.frostspineRod, 0]);
Recipes.addShaped({id: ItemID.magnemivePickaxe, count: 1, data: 0}, [
    "aaa",
    " b ",
    " b "
], ['a', ItemID.magnemiveIngot, 0, 'b', ItemID.frostspineRod, 0]);
Recipes.addShaped({id: ItemID.magnemiveAxe, count: 1, data: 0}, [
    "aa",
    "ab",
    " b"
], ['a', ItemID.magnemiveIngot, 0, 'b', ItemID.frostspineRod, 0]);
Recipes.addShaped({id: ItemID.magnemiveHoe, count: 1, data: 0}, [
    "aa ",
    " a ",
    " b "
], ['a', ItemID.magnemiveIngot, 0, 'b', ItemID.frostspineRod, 0]);

});


IDRegistry.genItemID("fluroomiteSword");
Item.createItem("fluroomiteSword", "Fluroomite Sword", {name: "fluroomitesword"}, {stack: 1});
 
IDRegistry.genItemID("fluroomiteShovel");
Item.createItem("fluroomiteShovel", "Fluroomite Shovel", {name: "fluroomiteshovel"}, {stack: 1});

IDRegistry.genItemID("fluroomitePickaxe");
Item.createItem("fluroomitePickaxe", "Fluroomite Pickaxe", {name: "fluroomitepickaxe"}, {stack: 1});

IDRegistry.genItemID("fluroomiteAxe");
Item.createItem("fluroomiteAxe", "Fluroomite Axe", {name: "fluroomiteaxe"}, {stack: 1});

IDRegistry.genItemID("fluroomiteHoe");
Item.createItem("fluroomiteHoe", "Fluroomite Hoe", {name: "fluroomitehoe"}, {stack: 1});

ToolAPI.addToolMaterial("fluroomitesw", {durability: 2548, level: 5, efficiency: 5, damage: 12, enchantability: 8});
ToolAPI.addToolMaterial("fluroomitesh", {durability: 2500, level: 5, efficiency: 5, damage: 7, enchantability: 8});
ToolAPI.addToolMaterial("fluroomitepi", {durability: 2700, level: 5, efficiency: 5, damage: 7, enchantability: 8});
ToolAPI.addToolMaterial("fluroomiteaxe", {durability: 2628, level: 5, efficiency: 5, damage: 11, enchantability: 8});
ToolAPI.addToolMaterial("fluroomiteh", {durability: 2548, level: 5, efficiency: 5, damage: 4, enchantability: 8});

ToolLib.setTool(ItemID.fluroomiteSword, "fluroomitesw", ToolType.sword);

ToolLib.setTool(ItemID.fluroomiteShovel, "fluroomitesh", ToolType.shovel);

ToolLib.setTool(ItemID.fluroomitePickaxe, "fluroomitepi", ToolType.pickaxe);

ToolLib.setTool(ItemID.fluroomiteAxe, "fluroomiteaxe", ToolType.axe);

ToolLib.setTool(ItemID.fluroomiteHoe, "fluroomiteh", ToolType.hoe);


Callback.addCallback("PostLoaded", function (){

Item.addRepairItemIds(ItemID.fluroomiteSword, [ItemID.fluroomiteIngot, ItemID.fluroomiteSword]);
Item.addRepairItemIds(ItemID.fluroomiteShovel, [ItemID.fluroomiteIngot, ItemID.fluroomiteShovel]);
Item.addRepairItemIds(ItemID.fluroomitePickaxe, [ItemID.fluroomiteIngot, ItemID.fluroomitePickaxe]);
Item.addRepairItemIds(ItemID.fluroomiteAxe, [ItemID.fluroomiteIngot, ItemID.fluroomiteAxe]);
Item.addRepairItemIds(ItemID.fluroomiteHoe, [ItemID.fluroomiteIngot, ItemID.fluroomiteHoe]);

Recipes.addShaped({id: ItemID.fluroomiteSword, count: 1, data: 0}, [
    "a",
    "a",
    "b"
], ['a', ItemID.fluroomiteIngot, 0, 'b', ItemID.frostspineRod, 0]);
Recipes.addShaped({id: ItemID.fluroomiteShovel, count: 1, data: 0}, [
    "a",
    "b",
    "b"
], ['a', ItemID.fluroomiteIngot, 0, 'b', ItemID.frostspineRod, 0]);
Recipes.addShaped({id: ItemID.fluroomitePickaxe, count: 1, data: 0}, [
    "aaa",
    " b ",
    " b "
], ['a', ItemID.fluroomiteIngot, 0, 'b', ItemID.frostspineRod, 0]);
Recipes.addShaped({id: ItemID.fluroomiteAxe, count: 1, data: 0}, [
    "aa",
    "ab",
    " b"
], ['a', ItemID.fluroomiteIngot, 0, 'b', ItemID.frostspineRod, 0]);
Recipes.addShaped({id: ItemID.fluroomiteHoe, count: 1, data: 0}, [
    "aa ",
    " a ",
    " b "
], ['a', ItemID.fluroomiteIngot, 0, 'b', ItemID.frostspineRod, 0]);

});

//STAFFS

IDRegistry.genItemID("manuartzStaff");
Item.createItem("manuartzStaff", "Manuartz Staff", {name: "magnemivesworde"}, {stack: 1});

ToolAPI.addToolMaterial("manuartzst", {durability: 900, level: 5, efficiency: 4, damage: 6, enchantability: 8});

ToolLib.setTool(ItemID.manuartzStaff, "manuartzst", ToolType.sword);

Recipes.addShaped({id: ItemID.manuartzStaff, count: 1, data: 0}, [
    "aca",
    " a ",
    " b "
], ['a', ItemID.manuartzSh, 0, 'b', ItemID.frostspineRod, 0, 'c', ItemID.manuartzGw, 0]);