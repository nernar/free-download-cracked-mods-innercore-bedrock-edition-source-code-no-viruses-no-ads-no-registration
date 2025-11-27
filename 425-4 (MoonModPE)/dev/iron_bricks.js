IDRegistry.genBlockID("ironBricks");
Block.createBlock("ironBricks", [{name: "Iron bricks", texture: [["iron_bricks", 0]], inCreative: true}], "opaque");
ToolAPI.registerBlockMaterial(BlockID.ironBricks, "stone", 2);
Block.setDestroyTime(BlockID.ironBricks, 2);
Block.setDestroyLevel("ironBricks", 2);

