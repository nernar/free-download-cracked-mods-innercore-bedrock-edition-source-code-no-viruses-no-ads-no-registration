IDRegistry.genItemID("arkeniumSword");
Item.createItem("arkeniumSword", "Arkenium Sword", {name: "arkenium_sword", meta: 0}, {stack: 1});

IDRegistry.genItemID("arkeniumSabber");
Item.createItem("arkeniumSabber", "Arkenium Saber", {name: "arkenium_saber", meta: 0}, {stack: 1});

IDRegistry.genItemID("arkeniumShovel");
Item.createItem("arkeniumShovel", "Arkenium Shovel", {name: "arkenium_shovel", meta: 1}, {stack: 1});

IDRegistry.genItemID("arkeniumPickaxe");
Item.createItem("arkeniumPickaxe", "Arkenium Pickaxe", {name: "arkenium_pickaxe", meta: 1}, {stack: 1});

IDRegistry.genItemID("arkeniumAxe");
Item.createItem("arkeniumAxe", "Arkenium Axe", {name: "arkenium_axe", meta: 1}, {stack: 1});

IDRegistry.genItemID("arkeniumCrosb");
Item.createItem("arkeniumCrosb", "Arkenium Crosbow", {name: "arkenium_crossbow", meta: 0}, {stack: 1});

IDRegistry.genItemID("arkeniumBolt");
Item.createItem("arkeniumBolt", "Arkenium Bolt", {name: "arkenium_bolt", meta: 0}, {stack: 64});

//งงอะ
ToolAPI.addToolMaterial("arkeniumsw", {durability: 251, level: 4, efficiency: 3, damage: 7, enchantability: 14});
ToolAPI.addToolMaterial("arkeniumsab", {durability: 216, level: 4, efficiency: 3, damage: 8, enchantability: 14});
ToolAPI.addToolMaterial("arkeniumsh", {durability: 221, level: 3, efficiency: 6, damage: 1, enchantability: 14});
ToolAPI.addToolMaterial("arkeniumpi", {durability: 228, level: 3, efficiency: 6, damage: 2, enchantability: 14});
ToolAPI.addToolMaterial("arkeniumaxe", {durability: 252, level: 3, efficiency: 6, damage: 4, enchantability: 14});

ToolAPI.addToolMaterial("arkeniumcb", {durability: 256, level: 4, efficiency: 3, damage: 4, enchantability: 14});

ToolAPI.setTool(ItemID.arkeniumSword, "arkeniumsw", ToolType.sword);
Item.setToolRender(ItemID.arkeniumSword, true);

ToolAPI.setTool(ItemID.arkeniumSabber, "arkeniumsab", ToolType.sword);
Item.setToolRender(ItemID.arkeniumSabber, true);

ToolAPI.setTool(ItemID.arkeniumShovel, "arkeniumsh", ToolType.shovel);
Item.setToolRender(ItemID.arkeniumShovel, true);

ToolAPI.setTool(ItemID.arkeniumPickaxe, "arkeniumpi", ToolType.pickaxe);
Item.setToolRender(ItemID.arkeniumPickaxe, true);

ToolAPI.setTool(ItemID.arkeniumAxe, "arkeniumaxe", ToolType.axe);
Item.setToolRender(ItemID.arkeniumAxe, true);

ToolAPI.setTool(ItemID.arkeniumAxe, "arkeniumcb", ToolType.sword);
Item.setToolRender(ItemID.arkeniumCrosb, true);

GunRegistry.registerGun({
    gun:ItemID.arkeniumCrosb,
    bullet:ItemID.arkeniumBolt,
    skin:"entities/projectiles/arkenium_bolt.png",
    speed:7,
    damage:6,
    aim: BitmapFactory.decodeFile(__dir__ + "gui/aim_0.png"),
    fov: 62
});

Recipes.addShaped({id: ItemID.arkeniumSword, count: 1, data: 0}, [
    "a",
    "a",
    "b"
], ['a', ItemID.plateArkenium, 0, 'b', ItemID.stickSkyroot, 0]);

Recipes.addShaped({id: ItemID.arkeniumShovel, count: 1, data: 0}, [
    "a",
    "b",
    "b"
], ['a', ItemID.plateArkenium, 0, 'b', ItemID.stickSkyroot, 0]);
6
Recipes.addShaped({id: ItemID.arkeniumPickaxe, count: 1, data: 0}, [
    "aaa",
    " b ",
    " b "
], ['a', ItemID.plateArkenium, 0, 'b', ItemID.stickSkyroot, 0]);

Recipes.addShaped({id: ItemID.arkeniumAxe, count: 1, data: 0}, [
    "aa",
    "ab",
    " b"
], ['a', ItemID.plateArkenium, 0, 'b', ItemID.stickSkyroot, 0]);

Recipes.addShaped({id: ItemID.arkeniumCrosb, count: 1, data: 0}, [
    "aaa",
    "cac",
    " b"
], ['a', BlockID.plateArkenium, 0, 'b', ItemID.stickSkyroot, 0, 'c', 287, 0]);