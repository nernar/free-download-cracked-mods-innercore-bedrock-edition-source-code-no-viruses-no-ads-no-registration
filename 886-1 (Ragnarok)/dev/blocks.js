var BLOCK_TYPE_LIGHT = Block.createSpecialType({
	destroytime: 2,
	explosionres: 0.5,
	opaque: false,
	lightopacity: 0,
	renderlayer: 3,
	lightlevel: 15
});

IDRegistry.genBlockID("annwinite_block");
Block.createBlock("annwinite_block", [
	{name: "Annwinite Block", texture: [["annwinite_block", 0]], inCreative: true}]);
ToolAPI.registerBlockMaterial(BlockID.annwinite_block, "stone", 2, true);

Recipes.addShaped({id: BlockID.annwinite_block, count: 1, data: 0}, [
    "xxx",
    "xxx",
    "xxx"
], ['x', ItemID.annwinite_ingot, 0]);

Recipes.addShaped({id: ItemID.annwinite_ingot, count: 9, data: 0}, [
    " x "
], ['x', BlockID.annwinite_block, 0]);

IDRegistry.genBlockID("diyuite_block");
Block.createBlock("diyuite_block", [
	{name: "Diyuite Block", texture: [["diyuite_block", 0]], inCreative: true}]);
ToolAPI.registerBlockMaterial(BlockID.diyuite_block, "stone", 2, true);

Recipes.addShaped({id: BlockID.diyuite_block, count: 1, data: 0}, [
    "xxx",
    "xxx",
    "xxx"
], ['x', ItemID.diyuite_ingot, 0]);

Recipes.addShaped({id: ItemID.diyuite_ingot, count: 9, data: 0}, [
    " x "
], ['x', BlockID.diyuite_block, 0]);

IDRegistry.genBlockID("duatite_block");
Block.createBlock("duatite_block", [
	{name: "Duatite Block", texture: [["duatite_block", 0]], inCreative: true}]);
ToolAPI.registerBlockMaterial(BlockID.duatite_block, "stone", 2, true);

Recipes.addShaped({id: BlockID.duatite_block, count: 1, data: 0}, [
    "xxx",
    "xxx",
    "xxx"
], ['x', ItemID.duatite_ingot, 0]);

Recipes.addShaped({id: ItemID.duatite_ingot, count: 9, data: 0}, [
    " x "
], ['x', BlockID.duatite_block, 0]);

IDRegistry.genBlockID("hadesite_block");
Block.createBlock("hadesite_block", [
	{name: "Hadesite Block", texture: [["hadesite_block", 0]], inCreative: true}]);
ToolAPI.registerBlockMaterial(BlockID.hadesite_block, "stone", 2, true);

Recipes.addShaped({id: BlockID.hadesite_block, count: 1, data: 0}, [
    "xxx",
    "xxx",
    "xxx"
], ['x', ItemID.hadesite_ingot, 0]);

Recipes.addShaped({id: ItemID.hadesite_ingot, count: 9, data: 0}, [
    " x "
], ['x', BlockID.hadesite_block, 0]);

IDRegistry.genBlockID("helheimite_block");
Block.createBlock("helheimite_block", [
	{name: "Helheimite Block", texture: [["helheimite_block", 0]], inCreative: true}]);
ToolAPI.registerBlockMaterial(BlockID.helheimite_block, "stone", 2, true);

Recipes.addShaped({id: BlockID.helheimite_block, count: 1, data: 0}, [
    "xxx",
    "xxx",
    "xxx"
], ['x', ItemID.helheimite_ingot, 0]);

Recipes.addShaped({id: ItemID.helheimite_ingot, count: 9, data: 0}, [
    " x "
], ['x', BlockID.helheimite_block, 0]);

IDRegistry.genBlockID("narakasite_block");
Block.createBlock("narakasite_block", [
	{name: "Narakasite Block", texture: [["narakasite_block", 0]], inCreative: true}]);
ToolAPI.registerBlockMaterial(BlockID.narakasite_block, "stone", 2, true);

Recipes.addShaped({id: BlockID.narakasite_block, count: 1, data: 0}, [
    "xxx",
    "xxx",
    "xxx"
], ['x', ItemID.narakasite_ingot, 0]);

Recipes.addShaped({id: ItemID.narakasite_ingot, count: 9, data: 0}, [
    " x "
], ['x', BlockID.narakasite_block, 0]);

IDRegistry.genBlockID("xibalbaite_block");
Block.createBlock("xibalbaite_block", [
	{name: "Xibalbaite Block", texture: [["xibalbaite_block", 0]], inCreative: true}]);
ToolAPI.registerBlockMaterial(BlockID.xibalbaite_block, "stone", 2, true);

Recipes.addShaped({id: BlockID.xibalbaite_block, count: 1, data: 0}, [
    "xxx",
    "xxx",
    "xxx"
], ['x', ItemID.xibalbaite_ingot, 0]);

Recipes.addShaped({id: ItemID.xibalbaite_ingot, count: 9, data: 0}, [
    " x "
], ['x', BlockID.xibalbaite_block, 0]);

IDRegistry.genBlockID("yomite_block");
Block.createBlock("yomite_block", [
	{name: "Yomite Block", texture: [["yomite_block", 0]], inCreative: true}]);
ToolAPI.registerBlockMaterial(BlockID.yomite_block, "stone", 2, true);

Recipes.addShaped({id: BlockID.yomite_block, count: 1, data: 0}, [
    "xxx",
    "xxx",
    "xxx"
], ['x', ItemID.yomite_ingot, 0]);

Recipes.addShaped({id: ItemID.yomite_ingot, count: 9, data: 0}, [
    " x "
], ['x', BlockID.yomite_block, 0]);

IDRegistry.genBlockID("ancient_brick");
Block.createBlock("ancient_brick", [
	{name: "Ancient Brick", texture: [["ancient_brick", 0]], inCreative: true}]);
ToolAPI.registerBlockMaterial(BlockID.ancient_brick, "stone", 2, true);

Recipes.addShaped({id: BlockID.ancient_brick, count: 2, data: 0}, [
    " x ",
    "xax",
    " x "
], ['a', ItemID.xibalbaite_ingot, 0, 'x', 336, 0]);

IDRegistry.genBlockID("viking_lamp");
Block.createBlock("viking_lamp", [
	{name: "Viking Lamp", texture: [["viking_lamp", 0]], inCreative: true}], BLOCK_TYPE_LIGHT);
ToolAPI.registerBlockMaterial(BlockID.viking_lamp, "stone", 2, true);

Recipes.addShaped({id: BlockID.viking_lamp, count: 1, data: 0}, [
    " x ",
    "xax",
    " x "
], ['x', ItemID.helheimite_ingot, 0, 'a', 89, 0]);

IDRegistry.genBlockID("triskelion_lamp");
Block.createBlock("triskelion_lamp", [
	{name: "Triskelion Lamp", texture: [["triskelion_lamp", 0]], inCreative: true}], BLOCK_TYPE_LIGHT);
ToolAPI.registerBlockMaterial(BlockID.triskelion_lamp, "stone", 2, true);

Recipes.addShaped({id: BlockID.triskelion_lamp, count: 1, data: 0}, [
    " x ",
    "xax",
    " x "
], ['x', ItemID.annwinite_ingot, 0, 'a', 89, 0]);

IDRegistry.genBlockID("chochin");
Block.createBlock("chochin", [
	{name: "Chochin", texture: [["chochin_top", 0], ["chochin_top", 0], ["chochin_side", 0], ["chochin_side", 0], ["chochin_side", 0], ["chochin_side", 0]], inCreative: true}], BLOCK_TYPE_LIGHT);
ToolAPI.registerBlockMaterial(BlockID.chochin, "stone", 2, true);

Recipes.addShaped({id: BlockID.chochin, count: 1, data: 0}, [
    " x ",
    "xax",
    " x "
], ['a', 89, 0, 'x', ItemID.yomite_ingot, 0]);

IDRegistry.genBlockID("quadruple_shoji");
Block.createBlock("quadruple_shoji", [
	{name: "Quadruple Shoji", texture: [["quadruple_shoji", 0]], inCreative: true}]);
ToolAPI.registerBlockMaterial(BlockID.quadruple_shoji, "stone", 2, true);

Recipes.addShaped({id: BlockID.quadruple_shoji, count: 2, data: 0}, [
    "x x",
    " a ",
    "x x"
], ['a', ItemID.yomite_ingot, 0, 'x', 339, 0]);

IDRegistry.genBlockID("double_shoji");
Block.createBlock("double_shoji", [
	{name: "Double Shoji", texture: [["double_shoji", 0]], inCreative: true}]);
ToolAPI.registerBlockMaterial(BlockID.double_shoji, "stone", 2, true);

Recipes.addShaped({id: BlockID.double_shoji, count: 1, data: 0}, [
    " x ",
    " a ",
    " x "
], ['a', ItemID.yomite_ingot, 0, 'x', 339, 0]);

IDRegistry.genBlockID("yellow_roof");
Block.createBlock("yellow_roof", [
	{name: "Yellow Roof", texture: [["yellow_roof", 0]], inCreative: true}]);
ToolAPI.registerBlockMaterial(BlockID.yellow_roof, "stone", 2, true);

Recipes.addShaped({id: BlockID.yellow_roof, count: 4, data: 0}, [
    "axa"
], ['a', 266, 0, 'x', ItemID.diyuite_ingot, 0]);

IDRegistry.genBlockID("terracotta_warrior_face");
Block.createBlockWithRotation("terracotta_warrior_face", [
	{name: "Terracotta Warrior Face", texture: [["terracotta_warrior_top", 0], ["terracotta_warrior_top", 0], ["terracotta_warrior_side", 0], ["terracotta_warrior_face", 0], ["terracotta_warrior_side", 0], ["terracotta_warrior_side", 0]], inCreative: true}]);
ToolAPI.registerBlockMaterial(BlockID.terracotta_warrior_face, "stone", 2, true);

Recipes.addShaped({id: BlockID.terracotta_warrior_face, count: 1, data: 0}, [
    "axa"
], ['a', 159, 0, 'x', ItemID.diyuite_ingot, 0]);

IDRegistry.genBlockID("terracotta_warrior_feet");
Block.createBlock("terracotta_warrior_feet", [
	{name: "Terracotta Warrior Feet", texture: [["terracotta_warrior_top", 0], ["terracotta_warrior_top", 0], ["terracotta_warrior_feet", 0], ["terracotta_warrior_feet", 0], ["terracotta_warrior_feet", 0], ["terracotta_warrior_feet", 0]], inCreative: true}]);
ToolAPI.registerBlockMaterial(BlockID.terracotta_warrior_feet, "stone", 2, true);

Recipes.addShaped({id: BlockID.terracotta_warrior_feet, count: 1, data: 0}, [
    " a ",
    " x ",
    " a "
], ['a', 159, 0, 'x', ItemID.diyuite_ingot, 0]);

IDRegistry.genBlockID("terracotta_warrior_block");
Block.createBlock("terracotta_warrior_block", [
	{name: "Terracotta Warrior Block", texture: [["terracotta_warrior_top", 0], ["terracotta_warrior_top", 0], ["terracotta_warrior_side", 0], ["terracotta_warrior_side", 0], ["terracotta_warrior_side", 0], ["terracotta_warrior_side", 0]], inCreative: true}]);
ToolAPI.registerBlockMaterial(BlockID.terracotta_warrior_block, "stone", 2, true);

Recipes.addShaped({id: BlockID.terracotta_warrior_block, count: 1, data: 0}, [
    "ax "
], ['a', 159, 0, 'x', ItemID.diyuite_ingot, 0]);

IDRegistry.genBlockID("draugr_skull");
Block.createBlockWithRotation("draugr_skull", [
	{name: "Draugr Skull", texture: [["draugr_skull_top", 0], ["draugr_skull_top", 0], ["draugr_skull_side", 0], ["draugr_skull", 0], ["draugr_skull_side", 0], ["draugr_skull_side", 0]], inCreative: true}]);
ToolAPI.registerBlockMaterial(BlockID.draugr_skull, "stone", 2, true);

Recipes.addShaped({id: BlockID.draugr_skull, count: 1, data: 0}, [
    " x ",
    "xax",
    " x "
], ['a', ItemID.helheimite_ingot, 0, 'x', 352, 0]);

IDRegistry.genBlockID("mayan_skull");
Block.createBlockWithRotation("mayan_skull", [
	{name: "Mayan Skull", texture: [["mayan_skull_top", 0], ["mayan_skull_top", 0], ["mayan_skull_side", 0], ["mayan_skull", 0], ["mayan_skull_side", 0], ["mayan_skull_side", 0]], inCreative: true}]);
ToolAPI.registerBlockMaterial(BlockID.mayan_skull, "stone", 2, true);

Recipes.addShaped({id: BlockID.mayan_skull, count: 1, data: 0}, [
    " x ",
    "xax",
    " x "
], ['a', ItemID.xibalbaite_ingot, 0, 'x', 352, 0]);

IDRegistry.genBlockID("green_pattern_wall");
Block.createBlock("green_pattern_wall", [
	{name: "Green Pattern Wall", texture: [["ancient_brick", 0], ["ancient_brick", 0], ["green_pattern_wall", 0], ["green_pattern_wall", 0], ["green_pattern_wall", 0], ["green_pattern_wall", 0]], inCreative: true}]);
ToolAPI.registerBlockMaterial(BlockID.green_pattern_wall, "stone", 2, true);

Recipes.addShaped({id: BlockID.green_pattern_wall, count: 4, data: 0}, [
    " x ",
    "xax",
    " x "
], ['a', 336, 0, 'x', ItemID.xibalbaite_ingot, 0]);

IDRegistry.genBlockID("gold_pattern_wall");
Block.createBlock("gold_pattern_wall", [
	{name: "Gold Pattern Wall", texture: [["ancient_brick", 0], ["ancient_brick", 0], ["gold_pattern_wall", 0], ["gold_pattern_wall", 0], ["gold_pattern_wall", 0], ["gold_pattern_wall", 0]], inCreative: true}]);
ToolAPI.registerBlockMaterial(BlockID.gold_pattern_wall, "stone", 2, true);

Recipes.addShaped({id: BlockID.gold_pattern_wall, count: 4, data: 0}, [
    " x ",
    "xax",
    " x "
], ['a', 266, 0, 'x', ItemID.xibalbaite_ingot, 0]);

IDRegistry.genBlockID("glyphs");
Block.createBlock("glyphs", [
	{name: "Glyphs", texture: [["ancient_brick", 0], ["ancient_brick", 0], ["glyphs", 0], ["glyphs", 0], ["glyphs", 0], ["glyphs", 0]], inCreative: true}]);
ToolAPI.registerBlockMaterial(BlockID.glyphs, "stone", 2, true);

Recipes.addShaped({id: BlockID.glyphs, count: 1, data: 0}, [
    "ax "
], ['a', ItemID.xibalbaite_ingot, 0, 'x', 159, 0]);

IDRegistry.genBlockID("papyrus_shelf");
Block.createBlock("papyrus_shelf", [
	{name: "Papyrus Shelf", texture: [["papyrus_shelf_top", 0], ["papyrus_shelf_top", 0], ["papyrus_shelf", 0], ["papyrus_shelf", 0], ["papyrus_shelf", 0], ["papyrus_shelf", 0]], inCreative: true}]);
ToolAPI.registerBlockMaterial(BlockID.papyrus_shelf, "stone", 2, true);

Recipes.addShaped({id: BlockID.papyrus_shelf, count: 1, data: 0}, [
    "xxx",
    "asa",
    "xxx"
], ['a', 339, 0, 'x', 5, 0, 's', ItemID.duatite_ingot, 0]);

Recipes.addShaped({id: BlockID.papyrus_shelf, count: 1, data: 0}, [
    "xxx",
    "asa",
    "xxx"
], ['a', 339, 0, 'x', 5, 1, 's', ItemID.duatite_ingot, 0]);

Recipes.addShaped({id: BlockID.papyrus_shelf, count: 1, data: 0}, [
    "xxx",
    "asa",
    "xxx"
], ['a', 339, 0, 'x', 5, 2, 's', ItemID.duatite_ingot, 0]);

Recipes.addShaped({id: BlockID.papyrus_shelf, count: 1, data: 0}, [
    "xxx",
    "asa",
    "xxx"
], ['a', 339, 0, 'x', 5, 3, 's', ItemID.duatite_ingot, 0]);

Recipes.addShaped({id: BlockID.papyrus_shelf, count: 1, data: 0}, [
    "xxx",
    "asa",
    "xxx"
], ['a', 339, 0, 'x', 5, 4, 's', ItemID.duatite_ingot, 0]);

Recipes.addShaped({id: BlockID.papyrus_shelf, count: 1, data: 0}, [
    "xxx",
    "asa",
    "xxx"
], ['a', 339, 0, 'x', 5, 5, 's', ItemID.duatite_ingot, 0]);

IDRegistry.genBlockID("egyptian_pillar");
Block.createBlock("egyptian_pillar", [
	{name: "Egyptian Pillar", texture: [["egyptian_pillar_top", 0], ["egyptian_pillar_top", 0], ["egyptian_pillar", 0], ["egyptian_pillar", 0], ["egyptian_pillar", 0], ["egyptian_pillar", 0]], inCreative: true}]);
ToolAPI.registerBlockMaterial(BlockID.egyptian_pillar, "stone", 2, true);

Recipes.addShaped({id: BlockID.egyptian_pillar, count: 3, data: 0}, [
    "xxx",
    "aaa",
    "xxx"
], ['a', 4, 0, 'x', ItemID.duatite_ingot, 0]);

IDRegistry.genBlockID("egyptian_pillar_core");
Block.createBlock("egyptian_pillar_core", [
	{name: "Egyptian Pillar Core", texture: [["egyptian_pillar_core_top", 0], ["egyptian_pillar_core_top", 0], ["egyptian_pillar_core", 0], ["egyptian_pillar_core", 0], ["egyptian_pillar_core", 0], ["egyptian_pillar_core", 0]], inCreative: true}]);
ToolAPI.registerBlockMaterial(BlockID.egyptian_pillar_core, "stone", 2, true);

Recipes.addShaped({id: BlockID.egyptian_pillar_core, count: 3, data: 0}, [
    "axa",
    "axa",
    "axa"
], ['a', ItemID.duatite_ingot, 0, 'x', 4, 0]);

IDRegistry.genBlockID("egyptian_pillar_top");
Block.createBlock("egyptian_pillar_top", [
	{name: "Egyptian Pillar Top", texture: [["egyptian_pillar_top", 0], ["egyptian_pillar_top", 0], ["egyptian_pillar_top_side", 0], ["egyptian_pillar_top_side", 0], ["egyptian_pillar_top_side", 0], ["egyptian_pillar_top_side", 0]], inCreative: true}]);
ToolAPI.registerBlockMaterial(BlockID.egyptian_pillar_top, "stone", 2, true);

Recipes.addShaped({id: BlockID.egyptian_pillar_top, count: 3, data: 0}, [
    "aaa",
    "xxx",
    "xxx"
], ['a', ItemID.duatite_ingot, 0, 'x', 4, 0]);

IDRegistry.genBlockID("greek_pillar");
Block.createBlock("greek_pillar", [
	{name: "Greek Pillar", texture: [["greek_pillar_top", 0], ["greek_pillar_top", 0], ["greek_pillar", 0], ["greek_pillar", 0], ["greek_pillar", 0], ["greek_pillar", 0]], inCreative: true}]);
ToolAPI.registerBlockMaterial(BlockID.greek_pillar, "stone", 2, true);

Recipes.addShaped({id: BlockID.greek_pillar, count: 6, data: 0}, [
    "xax",
    "xax",
    "xax"
], ['a', ItemID.hadesite_ingot, 0, 'x', 4, 0]);

IDRegistry.genBlockID("greek_red_pillar");
Block.createBlock("greek_red_pillar", [
	{name: "Greek Red Pillar", texture: [["greek_pillar_top", 0], ["greek_pillar_top", 0], ["greek_red_pillar", 0], ["greek_red_pillar", 0], ["greek_red_pillar", 0], ["greek_red_pillar", 0]], inCreative: true}]);
ToolAPI.registerBlockMaterial(BlockID.greek_red_pillar, "stone", 2, true);

Recipes.addShaped({id: BlockID.greek_red_pillar, count: 6, data: 0}, [
    "xax",
    "xox",
    "xax"
], ['a', ItemID.hadesite_ingot, 0, 'x', 4, 0, 'o', VanillaItemID.red_dye, 0]);

IDRegistry.genBlockID("greek_yellow_pillar");
Block.createBlock("greek_yellow_pillar", [
	{name: "Greek Yellow Pillar", texture: [["greek_pillar_top", 0], ["greek_pillar_top", 0], ["greek_yellow_pillar", 0], ["greek_yellow_pillar", 0], ["greek_yellow_pillar", 0], ["greek_yellow_pillar", 0]], inCreative: true}]);
ToolAPI.registerBlockMaterial(BlockID.greek_yellow_pillar, "stone", 2, true);

Recipes.addShaped({id: BlockID.greek_yellow_pillar, count: 6, data: 0}, [
    "xax",
    "xox",
    "xax"
], ['a', ItemID.hadesite_ingot, 0, 'x', 4, 0, 'o', VanillaItemID.yellow_dye, 0]);

IDRegistry.genBlockID("greek_brown_pillar");
Block.createBlock("greek_brown_pillar", [
	{name: "Greek Brown Pillar", texture: [["greek_pillar_top", 0], ["greek_pillar_top", 0], ["greek_brown_pillar", 0], ["greek_brown_pillar", 0], ["greek_brown_pillar", 0], ["greek_brown_pillar", 0]], inCreative: true}]);
ToolAPI.registerBlockMaterial(BlockID.greek_brown_pillar, "stone", 2, true);

Recipes.addShaped({id: BlockID.greek_brown_pillar, count: 6, data: 0}, [
    "xax",
    "xox",
    "xax"
], ['a', ItemID.hadesite_ingot, 0, 'x', 4, 0, 'o', VanillaItemID.brown_dye, 0]);

IDRegistry.genBlockID("greek_white_pillar");
Block.createBlock("greek_white_pillar", [
	{name: "Greek White Pillar", texture: [["greek_pillar_top", 0], ["greek_pillar_top", 0], ["greek_white_pillar", 0], ["greek_white_pillar", 0], ["greek_white_pillar", 0], ["greek_white_pillar", 0]], inCreative: true}]);
ToolAPI.registerBlockMaterial(BlockID.greek_white_pillar, "stone", 2, true);

Recipes.addShaped({id: BlockID.greek_white_pillar, count: 6, data: 0}, [
    "xax",
    "xox",
    "xax"
], ['a', ItemID.hadesite_ingot, 0, 'x', 4, 0, 'o', VanillaItemID.white_dye, 0]);