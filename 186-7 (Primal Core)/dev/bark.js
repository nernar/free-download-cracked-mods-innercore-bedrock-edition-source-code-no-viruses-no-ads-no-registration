IDRegistry.genBlockID("stripped_log");
Block.createBlock("stripped_log", [{name: "Stripped log", texture: [["log_oak_top", 0], ["log_oak_top", 0], ["log_stripped_oak_side", 0]], inCreative: true}]);
ToolAPI.registerBlockMaterial(BlockID.stripped_log, "wood", 0, true);
Block.setBlockShape(BlockID.stripped_log, {x: 0.1, y: 0, z: 0.1}, {x: 0.9, y: 1, z: 0.9});
IDRegistry.genBlockID("splited_log");
Block.createBlock("splited_log", [{name: "Splited log", texture: [["log_stripped_oak_side", 0]], inCreative: true}]);
ToolAPI.registerBlockMaterial(BlockID.stripped_log, "wood", 0, true);
Block.setBlockShape(BlockID.splited_log, {x: 0.4, y: 0.1, z: 0.4}, {x: 0.6, y: 0.9, z: 0.6});
Generator.setItem("wood_bark", {name: "Bark", texture: "bark", stack: 64});

