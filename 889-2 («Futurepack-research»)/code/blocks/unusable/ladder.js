IDRegistry.genBlockID("composite_ladder");
Block.createBlock("composite_ladder", [ {name: "Composite Ladder", texture: [["eisenleiter", 0]], inCreative: true}], ladder_block_type);
ToolAPI.registerBlockMaterial(BlockID.composite_ladder, "stone", 2);
