IDRegistry.genBlockID("block_portala_respherite");
Block.createBlock("block_portala_respherite", [{name: "Респеритовый блок портала", texture: [["respherite_block", 0], ["respherite_block", 0], ["block_portala_respherite", 0], ["block_portala_respherite", 0], ["block_portala_respherite", 0], ["block_portala_respherite", 0]], inCreative: true}]);
Block.setBlockShape(BlockID.block_portala_respherite, {x: 0.1, y: 0, z: 0.1}, {x: 0.9, y: 1, z: 0.9});
IDRegistry.genBlockID("block_portala_hellite");
Block.createBlock("block_portala_hellite", [{name: "Хеллитовый блок портала", texture: [["hellite_block", 0], ["hellite_block", 0], ["block_portala_hellite", 0], ["block_portala_hellite", 0], ["block_portala_hellite", 0], ["block_portala_hellite", 0]], inCreative: true}]);
Block.setBlockShape(BlockID.block_portala_hellite, {x: 0.1, y: 0, z: 0.1}, {x: 0.9, y: 1, z: 0.9});
IDRegistry.genBlockID("hellite_block");
Block.createBlock("hellite_block", [{name: "Хеллитовый блок", texture: [["hellite_block", 0], ["hellite_block", 0], ["hellite_block", 0], ["hellite_block", 0], ["hellite_block", 0], ["hellite_block", 0]], inCreative: true}]);
IDRegistry.genBlockID("respherite_block");
Block.createBlock("respherite_block", [{name: "Респеритовый блок", texture: [["respherite_block", 0], ["respherite_block", 0], ["respherite_block", 0], ["respherite_block", 0], ["respherite_block", 0], ["respherite_block", 0]], inCreative: true}]);
Recipes.addShaped({id: BlockID.respherite_block, count: 1, data: 0}, [
    "aaa",
    "aaa",
    "aaa"
], ['a', ItemID.respherite_ingot, 0]);
Recipes.addShaped({id: BlockID.hellite_block, count: 1, data: 0}, [
    "aaa",
    "aaa",
    "aaa"
], ['a', ItemID.hellite_ingot, 0]);
Recipes.addShaped({id: BlockID.block_portala_respherite, count: 1, data: 0}, [
    " c ",
    "bad",
    " e "
], ['a', BlockID.respherite_block, 0,'b', ItemID.rune_naturae, 0,'c', ItemID.rune_ignis, 0,'d', ItemID.rune_aqua, 0,'e', ItemID.rune_sol, 0]);
Recipes.addShaped({id: BlockID.block_portala_hellite, count: 1, data: 0}, [
    " c ",
    "bad",
    " e "
], ['a', BlockID.hellite_block, 0,'b', ItemID.rune_naturae, 0,'c', ItemID.rune_ignis, 0,'d', ItemID.rune_aqua, 0,'e', ItemID.rune_sol, 0]);
Recipes.addShaped({id: ItemID.respherite_ingot, count: 9, data: 0}, [
    "   ",
    " a ",
    "   "
], ['a', BlockID.respherite_block, 0]);
Recipes.addShaped({id: ItemID.hellite_ingot, count: 9, data: 0}, [
    "   ",
    " a ",
    "   "
], ['a', BlockID.hellite_block, 0]);