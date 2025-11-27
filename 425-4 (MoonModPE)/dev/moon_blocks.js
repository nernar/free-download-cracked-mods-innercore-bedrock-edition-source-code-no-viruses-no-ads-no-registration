IDRegistry.genBlockID("moonTurf");
IDRegistry.genBlockID("moonDirt");
IDRegistry.genBlockID("moonRock");
Block.createBlock("moonRock", [{name: "Moon rock", texture: [["moon_rock", 0]], inCreative: true}], "opaque");
Block.createBlock("moonDirt", [{name: "Moon dirt", texture: [["moon_dirt", 0]], inCreative: true}], "opaque");
Block.createBlock("moonTurf", [{name: "Moon turf", texture: [["moon_turf", 0]], inCreative: true}], "opaque");
ToolAPI.registerBlockMaterial(BlockID.moonTurf, "dirt", 2);
Block.setDestroyTime(BlockID.moonTurf, 1);
Block.setDestroyLevel("moonTurf", 1);
ToolAPI.registerBlockMaterial(BlockID.moonDirt, "dirt", 2);
Block.setDestroyTime(BlockID.moonDirt, 2);
Block.setDestroyLevel("moonDirt", 1);
ToolAPI.registerBlockMaterial(BlockID.moonRock, "stone", 2);
Block.setDestroyTime(BlockID.moonRock, 3);
Block.setDestroyLevel("moonRock", 2);

