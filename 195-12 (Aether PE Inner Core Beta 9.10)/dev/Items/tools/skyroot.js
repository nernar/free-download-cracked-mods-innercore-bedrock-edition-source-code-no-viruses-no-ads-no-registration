importLib("ToolType", "*");

IDRegistry.genItemID("skyrootSword");
Item.createItem("skyrootSword", "Skyroot Sword", {name: "skyroot_sword", meta: 1}, {stack: 1});
 
IDRegistry.genItemID("skyrootShovel");
Item.createItem("skyrootShovel", "Skyroot Shovel", {name: "skyroot_shovel", meta: 1}, {stack: 1});

IDRegistry.genItemID("skyrootPickaxe");
Item.createItem("skyrootPickaxe", "Skyroot Pickaxe", {name: "skyroot_pickaxe", meta: 1}, {stack: 1});

IDRegistry.genItemID("skyrootAxe");
Item.createItem("skyrootAxe", "Skyroot Axe", {name: "skyroot_axe", meta: 1}, {stack: 1});

IDRegistry.genItemID("skyrootCrosb");
Item.createItem("skyrootCrosb", "Skyroot Crosbow", {name: "skyroot_crossbow", meta: 0}, {stack: 1});

IDRegistry.genItemID("skyrootB");
Item.createItem("skyrootB", "Skyroot Bolt", {name: "skyroot_bolt", meta: 0});

ToolAPI.addToolMaterial("skyrootsw", {durability: 60, level: 2, efficiency: 1, damage: 3, enchantability: 14});
ToolAPI.addToolMaterial("skyrootsh", {durability: 60, level: 2, efficiency: 1, damage: 1, enchantability: 14});
ToolAPI.addToolMaterial("skyrootpi", {durability: 63, level: 2, efficiency: 1, damage: 2, enchantability: 14});
ToolAPI.addToolMaterial("skyrootaxe", {durability: 61, level: 2, efficiency: 1, damage: 3, enchantability: 14});
ToolAPI.addToolMaterial("skyrootcb", {durability: 64, level: 2, efficiency: 1, damage: 2, enchantability: 14});

ToolAPI.setTool(ItemID.skyrootSword, "skyrootsw", ToolType.sword);
Item.setToolRender(ItemID.skyrootSword, true);

ToolAPI.setTool(ItemID.skyrootShovel, "skyrootsh", ToolType.shovel);
Item.setToolRender(ItemID.skyrootShovel, true);

ToolAPI.setTool(ItemID.skyrootPickaxe, "skyrootpi", ToolType.pickaxe);
Item.setToolRender(ItemID.skyrootPickaxe, true);

ToolAPI.setTool(ItemID.skyrootAxe, "skyrootaxe", ToolType.axe);
Item.setToolRender(ItemID.skyrootAxe, true);

ToolAPI.setTool(ItemID.skyrootCrosb, "skyrootcb", ToolType.sword);
Item.setToolRender(ItemID.skyrootCrosb, true);

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