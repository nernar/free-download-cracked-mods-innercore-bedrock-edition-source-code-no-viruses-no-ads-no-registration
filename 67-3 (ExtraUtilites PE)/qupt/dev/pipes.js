IDRegistry.genBlockID("pipeEnergy");
Block.createBlock("pipeEnergy", [{name: "Pipe Energy", texture: [["pipes_energy", 0]], inCreative: true}]);
RF.registerWire(BlockID.pipeEnergy);
setupWireRender(BlockID.pipeEnergy, 1 / 4, "io-wire");
IDRegistry.genBlockID("pipeEnergye");
Block.createBlock("pipeEnergye", [{name: "Pipe Energy Extract", texture: [["pipes_energy_extract", 0]], inCreative: true}]);
RF.registerWire(BlockID.pipeEnergye);
setupWireRender(BlockID.pipeEnergye, 1 / 4, "io-wire");

