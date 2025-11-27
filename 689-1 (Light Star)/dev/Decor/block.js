IDRegistry.genBlockID("ApparatOne");
Block.createBlockWithRotation("ApparatOne", [{name: "Low Block Of The Unit", texture: [["side", 0], ["side", 0], ["side", 0], ["front", 0], ["side", 0], ["side", 0]], inCreative: true}]);
ToolAPI.registerBlockMaterial(BlockID.ApparatOne, "stone", 2, true);
Block.setDestroyLevel("ApparatOne", 2);
IDRegistry.genBlockID("ApparatTwo");
Block.createBlockWithRotation("ApparatTwo.", [{name: "High Block Of The Unit", texture: [["side", 0], ["side", 0], ["side", 0], ["front", 1], ["side", 0], ["side", 0]], inCreative: true}]);
ToolAPI.registerBlockMaterial(BlockID.ApparatTwo, "stone", 2, true);
Block.setDestroyLevel("ApparatTwo", 2);

IDRegistry.genBlockID("SneckOne");
Block.createBlockWithRotation("SneckOne", [{name: "Low Block Of The Sneck Apparatus", texture: [["side", 1], ["side", 1], ["side", 1], ["sneck", 0], ["side", 1], ["side", 1]], inCreative: true}]);
ToolAPI.registerBlockMaterial(BlockID.SneckOne, "stone", 2, true);
Block.setDestroyLevel("SneckOne", 2);
IDRegistry.genBlockID("SneckTwo");
Block.createBlockWithRotation("SneckTwo", [{name: "High Block Of The Sneck Apparatus", texture: [["side", 1], ["side", 1], ["side", 1], ["sneck", 1], ["side", 1], ["side", 1]], inCreative: true}]);
ToolAPI.registerBlockMaterial(BlockID.SneckTwo, "stone", 2, true);
Block.setDestroyLevel("SneckTwo", 2);