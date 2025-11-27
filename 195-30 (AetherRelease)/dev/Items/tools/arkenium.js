IDRegistry.genItemID("arkeniumSword");
Item.createItem("arkeniumSword", "Arkenium Sword", {name: "arkenium_sword"}, {stack: 1});

IDRegistry.genItemID("arkeniumSabber");
Item.createItem("arkeniumSabber", "Arkenium Saber", {name: "arkenium_saber"}, {stack: 1});

IDRegistry.genItemID("arkeniumShovel");
Item.createItem("arkeniumShovel", "Arkenium Shovel", {name: "arkenium_shovel", meta: 1}, {stack: 1});

IDRegistry.genItemID("arkeniumPickaxe");
Item.createItem("arkeniumPickaxe", "Arkenium Pickaxe", {name: "arkenium_pickaxe", meta: 1}, {stack: 1});

IDRegistry.genItemID("arkeniumAxe");
Item.createItem("arkeniumAxe", "Arkenium Axe", {name: "arkenium_axe", meta: 1}, {stack: 1});

IDRegistry.genItemID("arkeniumCrosb");
Item.createItem("arkeniumCrosb", "Arkenium Crosbow", {name: "arkenium_crossbow"}, {stack: 1});

IDRegistry.genItemID("arkeniumBolt");
Item.createItem("arkeniumBolt", "Arkenium Bolt", {name: "arkenium_bolt"});

//งงอะ
ToolAPI.addToolMaterial("arkeniumsw", {durability: 778, level: 4, efficiency: 0, damage: 7, enchantability: 14});
ToolAPI.addToolMaterial("arkeniumsab", {durability: 752, level: 4, efficiency: 0, damage: 8, enchantability: 14});
ToolAPI.addToolMaterial("arkeniumsh", {durability: 735, level: 3, efficiency: 6, damage: 1, enchantability: 14});
ToolAPI.addToolMaterial("arkeniumpi", {durability: 786, level: 3, efficiency: 6, damage: 2, enchantability: 14});
ToolAPI.addToolMaterial("arkeniumaxe", {durability: 780, level: 3, efficiency: 6, damage: 4, enchantability: 14});
ToolAPI.addToolMaterial("arkeniumcb", {durability: 720, level: 4, efficiency: 0, damage: 4, enchantability: 14});

ToolLib.setTool(ItemID.arkeniumSword, "arkeniumsw", ToolType.sword);

ToolLib.setTool(ItemID.arkeniumSabber, "arkeniumsab", ToolType.sword);

ToolLib.setTool(ItemID.arkeniumShovel, "arkeniumsh", ToolType.shovel);

ToolLib.setTool(ItemID.arkeniumPickaxe, "arkeniumpi", ToolType.pickaxe);

ToolLib.setTool(ItemID.arkeniumAxe, "arkeniumaxe", ToolType.axe);

ToolLib.setTool(ItemID.arkeniumCrosb, "arkeniumcb", ToolType.sword);

Item.addRepairItemIds(ItemID.arkeniumSword, [ItemID.plateArkenium, ItemID.arkeniumSword]);
Item.addRepairItemIds(ItemID.arkeniumSabber, [ItemID.plateArkenium, ItemID.arkeniumSabber]);
Item.addRepairItemIds(ItemID.arkeniumShovel, [ItemID.plateArkenium, ItemID.arkeniumShovel]);
Item.addRepairItemIds(ItemID.arkeniumPickaxe, [ItemID.plateArkenium, ItemID.arkeniumPickaxe]);
Item.addRepairItemIds(ItemID.arkeniumAxe, [ItemID.plateArkenium, ItemID.arkeniumAxe]);
Item.addRepairItemIds(ItemID.arkeniumCrosb, [ItemID.plateArkenium, ItemID.arkeniumCrosb]);

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
], ['a', ItemID.plateArkenium, 0, 'b', ItemID.stickSkyroot, 0, 'c', 287, 0]);