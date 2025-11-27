Translation.addTranslation("Energy Cable", {ru: "Энергетический кабель"});
Translation.addTranslation("ME Cable", {ru: "МЭ кабель"});
Translation.addTranslation("Iron Cable", {ru: "Железный кабель"});

IDRegistry.genBlockID("energy_cable");
IDRegistry.genBlockID("me_cable");
IDRegistry.genBlockID("iron_cable");

Block.createBlock("energy_cable", [
	{name: "Energy Cable", texture: [["energy_cable", 0]], inCreative: true}
]);
Block.createBlock("me_cable", [
	{name: "ME Cable", texture: [["net_cable", 0]], inCreative: true}
]);
Block.createBlock("iron_cable", [
	{name: "Iron Cable", texture: [["iron_block", 0]], inCreative: true}
]);

FactAPI.render.setupWireasRender(BlockID.energy_cable, 3/8,[
	{name:"ic-wire", add:true},
	{name:"rf-wire", add:true},
	{name:"bt-wire",add:true}]);
FactAPI.render.setupWireasRender(BlockID.me_cable, 6/16,[
	{name:"me-wire", add:true}]);
	
FactAPI.render.setupHCable(BlockID.iron_cable, 4/8,[
	{name:"iron-wire", add:true}]);

EU.registerWire(BlockID.energy_cable);
RF.registerWire(BlockID.energy_cable);
BT.registerWire(BlockID.energy_cable);

AE.registerWire(BlockID.me_cable);
	
Recipes.addShaped({id: BlockID.energy_cable, count: 2, data: 0}, [
	"aba"
], ['a',331,0,'b',265,0]);
Recipes.addShaped({id: BlockID.me_cable, count: 4, data: 0}, [
	"aba"
], ['a',ItemID.crystalFluix,0,'b',20,0]);
Recipes.addShaped({id: BlockID.iron_cable, count: 2, data: 0}, [
	"aba"
], ['a',265,0,'b',331,0]);