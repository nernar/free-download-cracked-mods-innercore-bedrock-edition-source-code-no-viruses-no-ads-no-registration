IDRegistry.genBlockID("devilBlock");

Block.createBlock("devilBlock", [{name:"Devil Block", texture: [ 
["devil_block1", 0],  
["devil_block1", 0],  
["devil_block2", 0],  
["devil_block2", 0],  
["devil_block3", 0],  
["devil_block3", 0]   
], 
inCreative: true}]);

ToolAPI.registerBlockMaterial(BlockID.devilBlock, "stone");
Block.setDestroyTime(BlockID.devilBlock, 3);
Block.setDestroyLevel(BlockID.devilBlock, 4);