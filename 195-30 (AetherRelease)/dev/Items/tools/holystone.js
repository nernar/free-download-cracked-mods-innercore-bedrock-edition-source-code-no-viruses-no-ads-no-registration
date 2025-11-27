IDRegistry.genItemID("holystoneSword");
Item.createItem("holystoneSword", "Holystone Sword", {name: "holystone_sword", meta: 1}, {stack: 1});

IDRegistry.genItemID("holystoneShovel");
Item.createItem("holystoneShovel", "Holystone Shovel", {name: "holystone_shovel", meta: 1}, {stack: 1});

IDRegistry.genItemID("holystonePickaxe");
Item.createItem("holystonePickaxe", "Holystone Pickaxe", {name: "holystone_pickaxe", meta: 1}, {stack: 1});

IDRegistry.genItemID("holystoneAxe");
Item.createItem("holystoneAxe", "Holystone Axe", {name: "holystone_axe", meta: 1}, {stack: 1});

IDRegistry.genItemID("holystoneCrosb");
Item.createItem("holystoneCrosb", "Holystone Crosbow", {name: "holystone_crossbow"}, {stack: 1});

IDRegistry.genItemID("holystoneB");
Item.createItem("holystoneB", "Holystone Bolt", {name: "holystone_bolt"});

//งงอะ
ToolAPI.addToolMaterial("holystonesw", {durability: 332, level: 4, efficiency: 0, damage: 3, enchantability: 14});
ToolAPI.addToolMaterial("holystonesh", {durability: 312, level: 3, efficiency: 5, damage: 1, enchantability: 14});
ToolAPI.addToolMaterial("holystonepi", {durability: 354, level: 3, efficiency: 5, damage: 2, enchantability: 14});
ToolAPI.addToolMaterial("holystoneaxe", {durability: 339, level: 3, efficiency: 5, damage: 4, enchantability: 14});
ToolAPI.addToolMaterial("holystonecb", {durability: 282, level: 2, efficiency: 0, damage: 2, enchantability: 14});


ToolLib.setTool(ItemID.holystoneSword, "holystonesw", ToolType.sword);

ToolLib.setTool(ItemID.holystoneShovel, "holystonesh", ToolType.shovel);

ToolLib.setTool(ItemID.holystonePickaxe, "holystonepi", ToolType.pickaxe);

ToolLib.setTool(ItemID.holystoneAxe, "holystoneaxe", ToolType.axe);

ToolLib.setTool(ItemID.holystoneCrosb, "holystonecb", ToolType.sword);


GunRegistry.registerGun({
    gun:ItemID.holystoneCrosb,
    bullet:ItemID.holystoneB,
    skin:"entities/projectiles/stone_bolt.png",
    speed:6,
    damage:7,
    aim: BitmapFactory.decodeFile(__dir__ + "gui/aim_0.png"),
    fov: 62
});

Callback.addCallback("PostLoaded", function (){

Item.addRepairItemIds(ItemID.holystoneSword, [BlockID.Holystone, ItemID.holystoneSword]);
Item.addRepairItemIds(ItemID.holystoneShovel, [BlockID.Holystone, ItemID.holystoneShovel]);
Item.addRepairItemIds(ItemID.holystonePickaxe, [BlockID.Holystone, ItemID.holystonePickaxe]);
Item.addRepairItemIds(ItemID.holystoneAxe, [BlockID.Holystone, ItemID.holystoneAxe]);
Item.addRepairItemIds(ItemID.holystoneCrosb, [BlockID.Holystone, ItemID.holystoneCrosb]);

Recipes.addShaped({id: ItemID.holystoneSword, count: 1, data: 0}, [
    "a",
    "a",
    "b"
], ['a', BlockID.Holystone, 0, 'b', ItemID.stickSkyroot, 0]);
Recipes.addShaped({id: ItemID.holystoneShovel, count: 1, data: 0}, [
    "a",
    "b",
    "b"
], ['a', BlockID.Holystone, 0, 'b', ItemID.stickSkyroot, 0]);
Recipes.addShaped({id: ItemID.holystonePickaxe, count: 1, data: 0}, [
    "aaa",
    " b ",
    " b "
], ['a', BlockID.Holystone, 0, 'b', ItemID.stickSkyroot, 0]);
Recipes.addShaped({id: ItemID.holystoneAxe, count: 1, data: 0}, [
    "aa",
    "ab",
    " b"
], ['a', BlockID.Holystone, 0, 'b', ItemID.stickSkyroot, 0]);
Recipes.addShaped({id: ItemID.holystoneCrosb, count: 1, data: 0}, [
    "aaa",
    "cac",
    " b"
], ['a', BlockID.Holystone, 0, 'b', ItemID.stickSkyroot, 0, 'c', 287, 0]);
Recipes.addShaped({id: ItemID.holystoneB, count: 4, data: 0}, [
    "c",
    "a",
    "b"
], ['a', ItemID.stickSkyroot, 0, 'b', 288, 0, 'c', BlockID.Holystone, 0]);

Recipes.addShaped({id: 61, count: 1, data: 0}, [
    "ccc",
    "coc",
    "ccc"
], ['c', BlockID.Holystone, 0]);
});