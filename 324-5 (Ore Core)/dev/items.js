//items
IDRegistry.genItemID("lava_crystal");
Item.createItem("lava_crystal", "Кристалл лавы", {name: "lava_crystal"});

IDRegistry.genItemID("ashe");
Item.createItem("ashe", "Эш", {name: "ashe"});

IDRegistry.genItemID("loam_ball");
Item.createItem("loam_ball", "Суглинистый шар", {name: "loam_ball"});

IDRegistry.genItemID("loam_brick");
Item.createItem("loam_brick", "Суглинистый Кирпич", {name: "loam_brick"});

IDRegistry.genItemID("oil_bucket");
Item.createItem("oil_bucket", "Ведро с маслом", {name: "oil_bucket"});

IDRegistry.genItemID("oil_paste");
Item.createItem("oil_paste", "Масляная паста", {name: "oil_paste"});

IDRegistry.genItemID("fossil");
Item.createItem("fossil", "Ископаемое", {name: "fossil"});

IDRegistry.genItemID("fossil1");
Item.createItem("fossil1", "Ископаемое", {name: "fossil1"});

IDRegistry.genItemID("fossil2");
Item.createItem("fossil2", "Ископаемое", {name: "fossil2"});

IDRegistry.genItemID("fossil3");
Item.createItem("fossil3", "Ископаемое", {name: "fossil3"});

IDRegistry.genItemID("fossil4");
Item.createItem("fossil4", "Ископаемое", {name: "fossil4"});

IDRegistry.genItemID("fossil5");
Item.createItem("fossil5", "Ископаемое", {name: "fossil5"});

IDRegistry.genItemID("fossil6");
Item.createItem("fossil6", "Ископаемое", {name: "fossil6"});

//recipes
Recipes.addShaped({id: 352, count: 4, data: 0}, ["x"
], ['x', ItemID.fossil, 0]);

Recipes.addShaped({id: 352, count: 4, data: 0}, ["x"
], ['x', ItemID.fossil1, 0]);

Recipes.addShaped({id: 352, count: 4, data: 0}, ["x"
], ['x', ItemID.fossil2, 0]);

Recipes.addShaped({id: 352, count: 4, data: 0}, ["x"
], ['x', ItemID.fossil3, 0]);

Recipes.addShaped({id: 352, count: 4, data: 0}, ["x"
], ['x', ItemID.fossil4, 0]);

Recipes.addShaped({id: 352, count: 4, data: 0}, ["x"
], ['x', ItemID.fossil5, 0]);

Recipes.addShaped({id: 352, count: 4, data: 0}, ["x"
], ['x', ItemID.fossil6, 0]);

Recipes.addShaped({id: ItemID.oil_bucket, count: 1, data: 0}, ["axx", "xx ",
], ['x', ItemID.oil_paste, 0, 'a', 325, 8]);

Recipes.addShaped({id: BlockID.loam_brick_block, count: 4, data: 0}, ["xx", "xx ",
], ['x', ItemID.loam_brick, 0]);

Recipes.addShaped({id: BlockID.basalt_block, count: 4, data: 0}, ["xx", "xx ",
], ['x', BlockID.basalt_ore, 0]);

Recipes.addShaped({id: BlockID.marmor_block, count: 4, data: 0}, ["xx", "xx ",
], ['x', BlockID.marmor_ore, 0]);

Recipes.addShaped({id: BlockID.fossil_stand, count: 1, data: 0}, ["xxx", "xxx", "xxx"
], ['x', BlockID.basalt_block, 0]);

Recipes.addShaped({id: BlockID.fossil_stand1, count: 1, data: 0}, ["xa"
], ['x', BlockID.fossil_stand, 0, 'a', 352, 0]);

Recipes.addShaped({id: BlockID.fossil_stand2, count: 1, data: 0}, ["xa"
], ['x', BlockID.fossil_stand, 0, 'a', ItemID.fossil, 0]);

Recipes.addShaped({id: BlockID.fossil_stand3, count: 1, data: 0}, ["xa"
], ['x', BlockID.fossil_stand, 0, 'a', ItemID.fossil1, 0]);

Recipes.addShaped({id: BlockID.fossil_stand4, count: 1, data: 0}, ["xa"
], ['x', BlockID.fossil_stand, 0, 'a', ItemID.fossil2, 0]);

Recipes.addShaped({id: BlockID.fossil_stand5, count: 1, data: 0}, ["xa"
], ['x', BlockID.fossil_stand, 0, 'a', ItemID.fossil3, 0]);

Recipes.addShaped({id: BlockID.fossil_stand6, count: 1, data: 0}, ["xa"
], ['x', BlockID.fossil_stand, 0, 'a', ItemID.fossil5, 0]);

Recipes.addShaped({id: BlockID.fossil_stand7, count: 1, data: 0}, ["xa"
], ['x', BlockID.fossil_stand, 0, 'a', ItemID.fossil6, 0]);

Recipes.addShaped({id: BlockID.fossil_stand8, count: 1, data: 0}, ["xa"
], ['x', BlockID.fossil_stand, 0, 'a', ItemID.fossil4, 0]);

//recipes furnace
Recipes.addFurnaceFuel(ItemID.oil_paste, 0, 300);
Recipes.addFurnaceFuel(ItemID.lava_crystal, 0, 1000);
Recipes.addFurnaceFuel(ItemID.oil_bucket, 0, 2000);
Recipes.addFurnace(ItemID.loam_ball, ItemID.loam_brick, 1);