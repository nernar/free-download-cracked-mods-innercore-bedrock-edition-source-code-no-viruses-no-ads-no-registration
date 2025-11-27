/*
IDRegistry.genBlockID("arbitrator");
Block.createBlock("arbitrator", [{name: "Alchemy Arbitrator", texture: [["dragon_egg", 0], ["arbitratorTop", 0], ["arbitratorSide", 0]], inCreative: true}]);
ToolAPI.registerBlockMaterial(BlockID.arbitrator, "stone");
Block.setDestroyTime(BlockID.arbitrator, 5);

Callback.addCallback("PostLoaded", function(){
  Recipes.addShaped({id: BlockID.arbitrator},
    ["", "", ""],
    ["a", , 0, "b", , 0, "c", , 0, "d", , 0, "e", , 0]
  );
});*/