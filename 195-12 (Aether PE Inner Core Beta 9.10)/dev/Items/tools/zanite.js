IDRegistry.genItemID("zaniteSword");
Item.createItem("zaniteSword", "Zanite Sword", {name: "zanite_sword", meta: 1}, {stack: 1});

IDRegistry.genItemID("zaniteShovel");
Item.createItem("zaniteShovel", "Zanite Shovel", {name: "zanite_shovel", meta: 1}, {stack: 1});

IDRegistry.genItemID("zanitePickaxe");
Item.createItem("zanitePickaxe", "Zanite Pickaxe", {name: "zanite_pickaxe", meta: 1}, {stack: 1});

IDRegistry.genItemID("zaniteAxe");
Item.createItem("zaniteAxe", "Zanite Axe", {name: "zanite_axe", meta: 1}, {stack: 1});

ToolAPI.addToolMaterial("zanitecb", {durability: 258, level: 2, efficiency: 1, damage: 2, enchantability: 14});

IDRegistry.genItemID("zaniteCrosb");
Item.createItem("zaniteCrosb", "Zanite Crosbow", {name: "zanite_crossbow", meta: 0}, {stack: 1});

IDRegistry.genItemID("zaniteB");
Item.createItem("zaniteB", "Zanite Bolt", {name: "zanite_bolt", meta: 0}, {stack: 64});

ToolAPI.setTool(ItemID.zaniteCrosb, "zanitecb", ToolType.sword);
Item.setToolRender(ItemID.zaniteCrosb, true);

GunRegistry.registerGun({
    gun:ItemID.zaniteCrosb,
    bullet:ItemID.zaniteB,
    skin:"entities/projectiles/zanite_bolt.png",
    speed:6,
    damage:7,
    aim: BitmapFactory.decodeFile(__dir__ + "gui/aim_0.png"),
    fov: 62
});

ToolAPI.addToolMaterial("zanitesw", {durability: 251, level: 3, efficiency: 3, damage: 7, enchantability: 14});
ToolAPI.addToolMaterial("zanitesh", {durability: 251, level: 3, efficiency: 6, damage: 1, enchantability: 14});
ToolAPI.addToolMaterial("zanitepi", {durability: 251, level: 3, efficiency: 6, damage: 2, enchantability: 14});
ToolAPI.addToolMaterial("zaniteaxe", {durability: 251, level: 3, efficiency: 6, damage: 4, enchantability: 14});


ToolAPI.setTool(ItemID.zaniteSword, "zanitesw", ToolType.sword);
Item.setToolRender(ItemID.zaniteSword, true);

ToolAPI.setTool(ItemID.zaniteShovel, "zanitesh", ToolType.shovel);
Item.setToolRender(ItemID.zaniteShovel, true);

ToolAPI.setTool(ItemID.zanitePickaxe, "zanitepi", ToolType.pickaxe);
Item.setToolRender(ItemID.zanitePickaxe, true);

ToolAPI.setTool(ItemID.zaniteAxe, "zaniteaxe", ToolType.axe);
Item.setToolRender(ItemID.zaniteAxe, true);


Recipes.addShaped({id: ItemID.zaniteSword, count: 1, data: 0}, [
    "a",
    "a",
    "b"
], ['a', ItemID.zaniteGemstone, 0, 'b', ItemID.stickSkyroot, 0]);

Recipes.addShaped({id: ItemID.zaniteShovel, count: 1, data: 0}, [
    "a",
    "b",
    "b"
], ['a', ItemID.zaniteGemstone, 0, 'b', ItemID.stickSkyroot, 0]);

Recipes.addShaped({id: ItemID.zanitePickaxe, count: 1, data: 0}, [
    "aaa",
    " b ",
    " b "
], ['a', ItemID.zaniteGemstone, 0, 'b', ItemID.stickSkyroot, 0]);

Recipes.addShaped({id: ItemID.zaniteAxe, count: 1, data: 0}, [
    "aa",
    "ab",
    " b"
], ['a', ItemID.zaniteGemstone, 0, 'b', ItemID.stickSkyroot, 0]);