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

if(Options.theme){
	ironcore_texture.side="light_iron_machine";
}

Block.createBlock("blockMachineWooden", [{name: "Wooden Machine Block", texture: [["block_machine_wooden", 0]], inCreative: true}],"opaque");
Block.createBlock("blockMachineStone", [{name: "Stone Machine Block", texture: [["block_machine_stone", 0]], inCreative: true}],"opaque");
Block.createBlock("blockMachineIron", [{name: "Iron Machine Block", texture: [[ironcore_texture.side,0]], inCreative: true}],"opaque");

Recipes.addShaped({id: BlockID.blockMachineWooden, count: 1, data: 0}, [
	"xax",
	"aba",
	"xax"
],[
	'a',ItemID.gearWooden,0,
	'b',280,0,
	'x',5,-1
]);
Recipes.addShaped({id: BlockID.blockMachineStone, count: 1, data: 0}, [
	"xax",
	"aba",
	"xax"
],[
	'a',ItemID.gearStone,0,
	'b',331,0,
	'x',4,0
]);
Recipes.addShaped({id: BlockID.blockMachineIron, count: 1, data: 0}, [
	"xax",
    "aba",
	"xax"
],[
	'a',ItemID.gearIron,0,
	'b',331,0,
	'x',265,0
]);