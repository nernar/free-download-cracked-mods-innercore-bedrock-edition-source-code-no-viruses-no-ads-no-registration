IDRegistry.genBlockID("Block");

Block.createBlock("Block", [{name:"Блок Ирумидия", texture: [["block", 0]], inCreative: true}]);

ToolAPI.registerBlockMaterial(BlockID.Block, "stone");
Block.setDestroyTime(BlockID.Block, 10);
Block.setDestroyLevel(BlockID.Block, 3);




