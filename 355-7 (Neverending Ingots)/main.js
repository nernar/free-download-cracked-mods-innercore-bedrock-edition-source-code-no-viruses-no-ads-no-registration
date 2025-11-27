IDRegistry.genItemID("emptySingularity");
Item.createItem("emptySingularity",  "Пустая Сингулярность", {name: "empty_singularity", meta: 0}, {stack: 8});

IDRegistry.genItemID("redSingularity");
Item.createItem("redSingularity",  "Редстоуновая Сингулярность", {name: "red_singularity", meta: 0}, {stack: 8});

IDRegistry.genItemID("lapisSingularity");
Item.createItem("lapisSingularity",  "Лазуритовая Сингулярность", {name: "lapis_singularity", meta: 0}, {stack: 8});

IDRegistry.genItemID("ironSingularity");
Item.createItem("ironSingularity",  "Железная Сингулярность", {name: "iron_singularity", meta: 0}, {stack: 8});

IDRegistry.genItemID("infinitySingularity");
Item.createItem("infinitySingularity",  "Сингулярность Бесконечности", {name: "infinity_singularity", meta: 0}, {stack: 8});

IDRegistry.genItemID("goldSingularity");
Item.createItem("goldSingularity", "Золотая Сингулярность", {name: "gold_singularity", meta: 0}, {stack: 8});

IDRegistry.genItemID("protoSingularity");
Item.createItem("protoSingularity", "Протониумовая Сингулярность", {name: "proto_singularity", meta: 0}, {stack: 8});

IDRegistry.genItemID("electroSingularity");
Item.createItem("electroSingularity", "Электрониумовая Сингулярность", {name: "electro_singularity", meta: 0}, {stack: 8});

IDRegistry.genItemID("diamondSingularity");
Item.createItem("diamondSingularity", "Алмазная Сингулярность", {name: "diamond_singularity", meta: 0}, {stack: 8});

IDRegistry.genItemID("coalSingularity");
Item.createItem("coalSingularity", "Угольная Сингулярность", {name: "coal_singularity", meta: 0}, {stack: 8});

IDRegistry.genItemID("atomSingularity");
Item.createItem("atomSingularity", "Атомная Сингулярность", {name: "atom_singularity", meta: 0}, {stack: 8});

IDRegistry.genItemID("infiniteIngot");
Item.createItem("infiniteIngot", "Слиток Бесконечности", {name: "infinite", meta: 0}, {stack: 16});

BLOCK_TYPE_INFINITY = Block.createSpecialType({
     lightlevel: 6,
     base: 42
});

IDRegistry.genBlockID("infiniteBlock");
Block.createBlock("infiniteBlock", [
     {name: "Блок Бесконечности", texture: [["infinite_block", 0], ["infinite_block", 0], ["infinite_block", 0], ["infinite_block", 0], ["infinite_block", 0], ["infinite_block", 0]], inCreative: true}
], BLOCK_TYPE_INFINITY);
ToolAPI.registerBlockMaterial(BlockID.infiniteBlock, "stone", 1, true);
Block.setDestroyTime(BlockID.infiniteBlock, 20);
Block.setDestroyLevel("infiniteBlock", 4);

IDRegistry.genBlockID("neutroniumBlock");
Block.createBlock("neutroniumBlock", [
     {name: "Блок Нейтрониума", texture: [["neutronium_block", 0], ["neutronium_block", 0], ["neutronium_block", 0], ["neutronium_block", 0], ["neutronium_block", 0], ["neutronium_block", 0]], inCreative: true}
], BLOCK_TYPE_INFINITY);
ToolAPI.registerBlockMaterial(BlockID.neutroniumBlock, "stone", 1, true);
Block.setDestroyTime(BlockID.neutroniumBlock, 10);
Block.setDestroyLevel("neutroniumBlock", 3);

IDRegistry.genBlockID("atomBlock");
Block.createBlock("atomBlock", [
     {name: "Атомный Блок", texture: [["atom_block", 0], ["atom_block", 0], ["atom_block", 0], ["atom_block", 0], ["atom_block", 0], ["atom_block", 0]], inCreative: true}
], BLOCK_TYPE_INFINITY);
ToolAPI.registerBlockMaterial(BlockID.atomBlock, "stone", 1, true);
Block.setDestroyTime(BlockID.atomBlock, 10);
Block.setDestroyLevel("atomBlock", 3);

IDRegistry.genItemID("infinityCoal");
Item.createItem("infinityCoal", "Уголь Бесконечности", {name: "infinity_fuel", meta: 0}, {stack: 64});

IDRegistry.genBlockID("protonBlock");
Block.createBlock("protonBlock", [
     {name: "Блок Протониума", texture: [["protonium_block", 0]], inCreative: true}
], BLOCK_TYPE_INFINITY);
ToolAPI.registerBlockMaterial(BlockID.protonBlock, "stone", 1, true);
Block.setDestroyTime(BlockID.protonBlock, 10);
Block.setDestroyLevel("protonBlock", 3);

IDRegistry.genBlockID("electronBlock");
Block.createBlock("electronBlock", [
     {name: "Блок Электрониума", texture: [["electronium_block", 0]], inCreative: true}
], BLOCK_TYPE_INFINITY);
ToolAPI.registerBlockMaterial(BlockID.electronBlock, "stone", 1, true);
Block.setDestroyTime(BlockID.electronBlock, 10);
Block.setDestroyLevel("electronBlock", 3);

IDRegistry.genBlockID("crystaliumBlock");
Block.createBlock("crystaliumBlock", [
     {name: "Блок Кристалиума", texture: [["crystal_block", 0], ["crystal_block", 0], ["crystal_block", 0], ["crystal_block", 0], ["crystal_block", 0], ["crystal_block", 0]], inCreative: true}
], BLOCK_TYPE_INFINITY);
ToolAPI.registerBlockMaterial(BlockID.crystaliumBlock, "stone", 1, true);
Block.setDestroyTime(BlockID.crystaliumBlock, 10);
Block.setDestroyLevel("crystaliumBlock", 4);

IDRegistry.genBlockID("gaiaBlock");
Block.createBlock("gaiaBlock", [
     {name: "Блок Геда", texture: [["gaia_block", 0]], inCreative: true}
], BLOCK_TYPE_INFINITY);
ToolAPI.registerBlockMaterial(BlockID.protonBlock, "stone", 1, true);
Block.setDestroyTime(BlockID.protonBlock, 10);
Block.setDestroyLevel("protonBlock", 3);

IDRegistry.genItemID("crystalIngot");
Item.createItem("crystalIngot", "Слиток Кристаллиума", {name: "crystal_ingot", meta: 0}, {stack: 64});

IDRegistry.genItemID("diamondLattice");
Item.createItem("diamondLattice", "Алмазная Сетка", {name: "diamond_lattice", meta: 0}, {stack: 16});

IDRegistry.genItemID("neutronium");
Item.createItem("neutronium", "Слиток Нейтрониума", {name: "neutronium", meta: 0}, {stack: 64});

IDRegistry.genItemID("infinityShard");
Item.createItem("infinityShard", "Осколок Бесконечности", {name: "infinity_shard", meta: 0}, {stack: 64});

IDRegistry.genItemID("neutroniumShard");
Item.createItem("neutroniumShard", "Осколок Нейтрониума", {name: "neutron_shard", meta: 0}, {stack: 64});

IDRegistry.genItemID("atom");
Item.createItem("atom", "Атомный Слиток", {name: "atom_ingot", meta: 0}, {stack: 64});

IDRegistry.genItemID("protonium");
Item.createItem("protonium", "Слиток Протониума", {name: "protonium", meta: 0}, {stack: 64});

IDRegistry.genItemID("electronium");
Item.createItem("electronium", "Слиток Электрониума", {name: "electronium", meta: 0}, {stack: 64});

IDRegistry.genItemID("infinityDust");
Item.createItem("infinityDust", "Пыль Бесконечности", {name: "infinity_dust", meta: 0}, {stack: 64});

Recipes.addShaped({id: ItemID.infiniteIngot, count: 1, data: 0}, [

     "aaa",

     "aaa",

     "aaa"

], ['a', ItemID.infinityShard, 0]);

Recipes.addShaped({id: ItemID.neutronium, count: 1, data: 0}, [

     "aaa",

     "aaa",

     "aaa"

], ['a', ItemID.neutroniumShard, 0]);

Recipes.addShaped({id: ItemID.neutroniumShard, count: 1, data: 0}, [

     "bab",

     "a a",

     "bab"

], ['a', 331, 0, 'b', 263, 0]);

Recipes.addShaped({id: ItemID.diamondLattice, count: 1, data: 0}, [

     " a ",

     "a a",

     " a "

], ['a', 264, 0]);

Recipes.addShaped({id: BlockID.infiniteBlock, count: 1, data: 0}, [

     "aaa",

     "aaa",

     "aaa"

], ['a', ItemID.infiniteIngot, 0]);

Recipes.addShaped({id: ItemID.crystalIngot, count: 1, data: 0}, [

     " a ",

     "axa",

     " a "

], ['a', ItemID.diamondLattice, 0, 'x', ItemID.neutronium, 0]);

Recipes.addShaped({id: ItemID.protonium, count: 1, data: 0}, [

     " a ",

     "axa",

     " a "

], ['a', 331, 0, 'x', ItemID.neutronium, 0]);

Recipes.addShaped({id: ItemID.electronium, count: 1, data: 0}, [

     " a ",

     "axa",

     " a "

], ['a', 263, 0, 'x', ItemID.neutronium, 0]);

Recipes.addShaped({id: BlockID.protonBlock, count: 1, data: 0}, [

     "aaa",

     "aaa",

     "aaa"

], ['a', ItemID.protonium, 0]);

Recipes.addShaped({id: BlockID.electronBlock, count: 1, data: 0}, [

     "aaa",

     "aaa",

     "aaa"

], ['a', ItemID.electronium, 0]);

Recipes.addShaped({id: ItemID.atom, count: 4, data: 0}, [

     "aba",

     "bcb",

     "aba"

], ['a', ItemID.electronium, 0, 'b', ItemID.protonium, 0, 'c', ItemID.neutronium, 0]);

Recipes.addShaped({id: BlockID.atomBlock, count: 1, data: 0}, [

     "aaa",

     "aaa",

     "aaa"

], ['a', ItemID.atom, 0]);

Recipes.addShaped({id: ItemID.neutronium, count: 2, data: 0}, [

     "ab"

], ['a', ItemID.protonium, 0, 'b', ItemID.electronium, 0]);

Recipes.addShaped({id: BlockID.atomBlock, count: 1, data: 0}, [

     "aaa",

     "aaa",

     "aaa"

], ['a', ItemID.atom, 0]);

Recipes.addShaped({id: ItemID.emptySingularity, count: 1, data: 0}, [

     "xca",

     "bcb",

     "acx"

], ['a', ItemID.atom, 0, 'b', ItemID.protonium, 0, 'c', ItemID.neutronium, 0, 'x', ItemID.electronium, 0]);

Recipes.addShaped({id: ItemID.redSingularity, count: 1, data: 0}, [

     "aaa",

     "aba",

     "aaa"

], ['a', 152, 0, 'b', ItemID.emptySingularity, 0]); 

Recipes.addShaped({id: ItemID.diamondSingularity, count: 1, data: 0}, [

     "aaa",

     "aba",

     "aaa"

], ['a', 57, 0, 'b', ItemID.emptySingularity, 0]); 

Recipes.addShaped({id: ItemID.goldSingularity, count: 1, data: 0}, [

     "aaa",

     "aba",

     "aaa"

], ['a', 41, 0, 'b', ItemID.emptySingularity, 0]); 

Recipes.addShaped({id: ItemID.ironSingularity, count: 1, data: 0}, [

     "aaa",

     "aba",

     "aaa"

], ['a', 42, 0, 'b', ItemID.emptySingularity, 0]); 

Recipes.addShaped({id: ItemID.lapisSingularity, count: 1, data: 0}, [

     "aaa",

     "aba",

     "aaa"

], ['a', 22, 0, 'b', ItemID.emptySingularity, 0]); 

Recipes.addShaped({id: ItemID.coalSingularity, count: 1, data: 0}, [

     "aaa",

     "aba",

     "aaa"

], ['a', 173, 0, 'b', ItemID.emptySingularity, 0]); 

Recipes.addShaped({id: ItemID.electroSingularity, count: 1, data: 0}, [

     "aaa",

     "aba",

     "aaa"

], ['a', BlockID.electronBlock, 0, 'b', ItemID.emptySingularity, 0]);

Recipes.addShaped({id: ItemID.protoSingularity, count: 1, data: 0}, [

     "aaa",

     "aba",

     "aaa"

], ['a', BlockID.protonBlock, 0, 'b', ItemID.emptySingularity, 0]); 

Recipes.addShaped({id: ItemID.atomSingularity, count: 1, data: 0}, [

     "aaa",

     "aba",

     "aaa"

], ['a', BlockID.atomBlock, 0, 'b', ItemID.emptySingularity, 0]); 

Recipes.addShaped({id: ItemID.infinitySingularity, count: 1, data: 0}, [

     "dgi",

     "rcl",

     "ape"

], ['a', ItemID.atomSingularity, 0, 'd', ItemID.diamondSingularity, 0, 'g', ItemID.goldSingularity, 0, 'i', ItemID.ironSingularity, 0, 'r', ItemID.redSingularity, 0, 'c', ItemID.coalSingularity, 0, 'l', ItemID.lapisSingularity, 0,'p', ItemID.protoSingularity, 0, 'e', ItemID.electroSingularity, 0]); 

Recipes.addShaped({id: ItemID.infinityCoal, count: 1, data: 0}, [

     "aaa",

     "aba",

     "aaa"

], ['a', ItemID.infinityShard, 0, 'b', 173, 0]); 

Recipes.addShaped({id: ItemID.infinityDust, count: 2, data: 0}, [

     "a"

], ['a', ItemID.infinitySingularity, 0]);

Recipes.addFurnace(ItemID.infinityDust, 0, ItemID.infinityShard, 0); 

Callback.addCallback("GenerateChunkUnderground", function(chunkX, chunkZ){ var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 10, 128); for (var q = 0; q < 15;q++){ if (Math.random() < 7/10) GenerationUtils.genMinable(coords.x, coords.y, coords.z, { id: BlockID.gaiaBlock, data: 0, size: 30, ratio: 1, checkerTile: 1, checkerMode: false }); } });

Recipes.addFurnaceFuel(ItemID.infinityCoal, 0, 9999999);