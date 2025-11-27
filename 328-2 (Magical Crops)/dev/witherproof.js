Block.createSpecialType({base: 1, solid: true, destroytime: 7, explosionres: 18000000, opaque: false, lightopacity: 0, renderlayer: 3}, "WitherproofBlocks");
Block.createSpecialType({base: 20, destroytime: 7, explosionres: 18000000, opaque: false, lightopacity: 0, renderlayer: 9}, "WitherproofGlass");
IDRegistry.genBlockID("WitherBlock");
Block.createBlock("WitherBlock", [{name: "Wither proof Block", texture: [["WitherBlock", 0]], inCreative: true}], "WitherproofBlocks");
ToolAPI.registerBlockMaterial(BlockID.WitherBlock, "stone", 3, true);
Block.setDestroyLevel("WitherBlock", 3);
IDRegistry.genBlockID("WitherGlass");
Block.createBlock("WitherGlass", [{name: "Wither proof Glass", texture: [["WitherGlass", 0]], inCreative: true}], "WitherproofGlass");
ToolAPI.registerBlockMaterial(BlockID.WitherGlass, "stone", 3, true);
Block.setDestroyLevel("WitherGlass", 3);

