IMPORT("ToolLib");

IDRegistry.genItemID("skyrootSword");
Item.createItem("skyrootSword", "Skyroot Sword", {name: "skyroot_sword", meta: 1}, {stack: 1});
 
IDRegistry.genItemID("skyrootShovel");
Item.createItem("skyrootShovel", "Skyroot Shovel", {name: "skyroot_shovel", meta: 1}, {stack: 1});

IDRegistry.genItemID("skyrootPickaxe");
Item.createItem("skyrootPickaxe", "Skyroot Pickaxe", {name: "skyroot_pickaxe", meta: 1}, {stack: 1});

IDRegistry.genItemID("skyrootAxe");
Item.createItem("skyrootAxe", "Skyroot Axe", {name: "skyroot_axe", meta: 1}, {stack: 1});

IDRegistry.genItemID("skyrootCrosb");
Item.createItem("skyrootCrosb", "Skyroot Crosbow", {name: "skyroot_crossbow"}, {stack: 1});

IDRegistry.genItemID("skyrootB");
Item.createItem("skyrootB", "Skyroot Bolt", {name: "skyroot_bolt"});

ToolAPI.addToolMaterial("skyrootsw", {durability: 124, level: 2, efficiency: 0, damage: 3, enchantability: 4});
ToolAPI.addToolMaterial("skyrootsh", {durability: 113, level: 2, efficiency: 1, damage: 1, enchantability: 4});
ToolAPI.addToolMaterial("skyrootpi", {durability: 136, level: 2, efficiency: 1, damage: 2, enchantability: 4});
ToolAPI.addToolMaterial("skyrootaxe", {durability: 131, level: 2, efficiency: 1, damage: 3, enchantability: 4});
ToolAPI.addToolMaterial("skyrootcb", {durability: 128, level: 2, efficiency: 0, damage: 2, enchantability: 4});

ToolLib.setTool(ItemID.skyrootSword, "skyrootsw", ToolType.sword);

ToolLib.setTool(ItemID.skyrootShovel, "skyrootsh", ToolType.shovel);

ToolLib.setTool(ItemID.skyrootPickaxe, "skyrootpi", ToolType.pickaxe);

ToolLib.setTool(ItemID.skyrootAxe, "skyrootaxe", ToolType.axe);

ToolLib.setTool(ItemID.skyrootCrosb, "skyrootcb", ToolType.sword);


GunRegistry.registerGun({
    gun:ItemID.skyrootCrosb,
    bullet:ItemID.skyrootB,
    skin:"entities/projectiles/skyroot_bolt.png",
    speed:6,
    damage:6,
    aim: BitmapFactory.decodeFile(__dir__ + "gui/aim_0.png"),
    fov: 62
});

Callback.addCallback("PostLoaded", function (){

Item.addRepairItemIds(ItemID.skyrootSword, [BlockID.plankSkyroot, ItemID.skyrootSword]);
Item.addRepairItemIds(ItemID.skyrootShovel, [BlockID.plankSkyroot, ItemID.skyrootShovel]);
Item.addRepairItemIds(ItemID.skyrootPickaxe, [BlockID.plankSkyroot, ItemID.skyrootPickaxe]);
Item.addRepairItemIds(ItemID.skyrootAxe, [BlockID.plankSkyroot, ItemID.skyrootAxe]);
Item.addRepairItemIds(ItemID.skyrootCrosb, [BlockID.plankSkyroot, ItemID.skyrootCrosb]);

Recipes.addShaped({id: ItemID.skyrootSword, count: 1, data: 0}, [
    "a",
    "a",
    "b"
], ['a', BlockID.plankSkyroot, 0, 'b', ItemID.stickSkyroot, 0]);
Recipes.addShaped({id: ItemID.skyrootShovel, count: 1, data: 0}, [
    "a",
    "b",
    "b"
], ['a', BlockID.plankSkyroot, 0, 'b', ItemID.stickSkyroot, 0]);
Recipes.addShaped({id: ItemID.skyrootPickaxe, count: 1, data: 0}, [
    "aaa",
    " b ",
    " b "
], ['a', BlockID.plankSkyroot, 0, 'b', ItemID.stickSkyroot, 0]);
Recipes.addShaped({id: ItemID.skyrootAxe, count: 1, data: 0}, [
    "aa",
    "ab",
    " b"
], ['a', BlockID.plankSkyroot, 0, 'b', ItemID.stickSkyroot, 0]);
Recipes.addShaped({id: ItemID.skyrootCrosb, count: 1, data: 0}, [
    "aaa",
    "cac",
    " b"
], ['a', BlockID.plankSkyroot, 0, 'b', ItemID.stickSkyroot, 0, 'c', 287, 0]);
Recipes.addShaped({id: ItemID.skyrootB, count: 4, data: 0}, [
    "c",
    "a",
    "b"
], ['a', ItemID.stickSkyroot, 0, 'b', 288, 0, 'c', BlockID.plankSkyroot, 0]);
});