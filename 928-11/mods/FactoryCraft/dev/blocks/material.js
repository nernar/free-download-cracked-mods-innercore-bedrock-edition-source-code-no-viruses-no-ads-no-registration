Translation.addTranslation("Wooden Machine Block", {
	ru: "Деревянный машинный блок"
});
Translation.addTranslation("Stone Machine Block", {
	ru: "Каменный машинный блок"
});
Translation.addTranslation("Iron Machine Block", {
	ru: "Железный машинный блок"
});
IDRegistry.genBlockID("blockMachineWooden");
IDRegistry.genBlockID("blockMachineStone");
IDRegistry.genBlockID("blockMachineIron");


var ironcore_texture={
	side:"block_machine_iron",
}

if(!Options.isThemeBlack()){
	ironcore_texture.side="light_iron_machine";
}

Block.createBlock("blockMachineWooden", [{name: "Wooden Machine Block", texture: [["block_machine_wooden", 0]], inCreative: true}],"opaque");

Block.createBlock("blockMachineStone", [{name: "Stone Machine Block", texture: [["block_machine_stone", 0]], inCreative: true}],"opaque");

Block.createBlock("blockMachineIron", [{name: "Iron Machine Block", texture: [[ironcore_texture.side,0]], inCreative: true}],"opaque");

