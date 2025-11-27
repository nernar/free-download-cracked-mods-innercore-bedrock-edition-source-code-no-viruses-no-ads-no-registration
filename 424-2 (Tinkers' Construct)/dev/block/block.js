IDRegistry.genBlockID("seared_brick");
Block.createBlock("seared_brick", [{name: "Seared Brick", texture: [["seared_brick", 0]], inCreative: true}]);
Callback.addCallback("PreLoaded", function(){
	Recipes.addShaped({id: BlockID.seared_brick}, ["aa", "aa"], ["a", ItemID.seared_brick, 0]);
});

IDRegistry.genBlockID("slimy_mud");
Block.createBlock("slimy_mud", [{name: "Slimy Mud", texture: [["slimy_mud", 0]], inCreative: true}]);
Recipes.addShaped({id: BlockID.slimy_mud}, ["aa", "aa", "bc"], ["a", 341, 0, "b", 12, -1, "c", 3, 0]);

IDRegistry.genBlockID("graveyard_soil");
Block.createBlock("graveyard_soil", [{name: "Graveyard Soil", texture: [["graveyard_soil", 0]], inCreative: true}]);
Recipes.addShapeless({id: BlockID.graveyard_soil}, [{id: 3}, {id: 351, data: 15}, {id: 367}]);

IDRegistry.genBlockID("consecrated_soil");
Block.createBlock("consecrated_soil", [{name: "Consecrated Soil", texture: [["consecrated_soil", 0]], inCreative: true}]);
Recipes.addFurnace(BlockID.consecrated_soil, BlockID.graveyard_soil);