Translation.addTranslation("Energy Cable", {ru: "Энергетический кабель"});
Translation.addTranslation("Iron Cable", {ru: "Железный кабель"});
Translation.addTranslation("Liquid pipe", {ru: "Жидкостная труба"});

IDRegistry.genBlockID("energy_cable");
IDRegistry.genBlockID("iron_cable");
IDRegistry.genBlockID("liquid_pipe");

Block.createBlock("energy_cable", [
	{name: "Energy Cable", texture: [["energy_cable", 0]], inCreative: true}
]);
Block.createBlock("iron_cable", [
	{name: "Iron Cable", texture: [["iron_block", 0]], inCreative: true}
]);
Block.createBlock("liquid_pipe", [
	{name: "Liquid pipe", texture: [["light_quarry_bottom", 0]], inCreative: true}
]);

TileRenderer.setupWireModel(BlockID.energy_cable, 0, 3/8, "fc-wire");
TileRenderer.setupWireModel(BlockID.iron_cable, 0, 4/8, "fc-wire");
TileRenderer.setupWireModel(BlockID.liquid_pipe, 0, 4/8, "liquid_pipe");

ICRender.getGroup("rf-wire").add(BlockID.iron_cable, -1);
ICRender.getGroup("fc-wire").add(BlockID.iron_cable, -1);

ICRender.getGroup("rf-wire").add(BlockID.energy_cable, -1);
ICRender.getGroup("fc-wire").add(BlockID.energy_cable, -1);

RF.registerWire(BlockID.energy_cable);
RF.registerWire(BlockID.iron_cable);
