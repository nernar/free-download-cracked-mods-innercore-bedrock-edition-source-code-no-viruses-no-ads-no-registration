var BLOCKVOID = Block.createSpecialType({
base: 1,
lightlevel: 6,
lightopacity: 5 });
IDRegistry.genBlockID("voidblock");
Block.createBlockWithRotation("voidblock", [
	{name: "voidblock", texture: [["voidblock", 0], ["voidblock", 0], ["voidblock", 0], ["voidblock", 0], ["voidblock", 0], ["voidblock", 0]], inCreative: true}
], "BLOCKVOID");

Block.registerDropFunction("voidblock", function(coords, id, data, diggingLevel, toolLevel){
return [id, 1, data];
});

Callback.addCallback("PreLoaded", function(){
	Recipes.addShaped({id: BlockID.voidblock, count: 1, data: 0}, [
		"aaa",
		"aaa",
		"aaa"
	], ['a', ItemID.voidshard, 0]);
});

Callback.addCallback("PreLoaded", function(){
	Recipes.addShaped({id: ItemID.voidshard, count: 9, data: 0}, [
		"   ",
		" a ",
		"   "
	], ['a', BlockID.voidblock, 0]);
});

var GLASS = Block.createSpecialType({
base: 20,
lightopacity: 0,
renderlayer: 4,
lightopacity: 5 });
IDRegistry.genBlockID("voidglass");
Block.createBlockWithRotation("voidglass", [
	{name: "voidglass", texture: [["voidglass", 0], ["voidglass", 0], ["voidglass", 0], ["voidglass", 0], ["voidglass", 0], ["voidglass", 0]], inCreative: true}
], "GLASS");

Block.registerDropFunction("voidglass", function(coords, id, data, diggingLevel, toolLevel){
return [id, 1, data];
});;

Callback.addCallback("PreLoaded", function(){
	Recipes.addShaped({id: BlockID.voidglass, count: 8, data: 0}, [
		"aaa",
		"axa",
		"aaa"
	], ['a', 20, 0, 'x', ItemID.voidshard, 0]);
});


IDRegistry.genBlockID("voidplank");
Block.createBlock("voidplank", [
	{name: "Void Plank", texture: [["voidplank", 0], ["voidplank", 0], ["voidplank", 0], ["voidplank", 0], ["voidplank", 0], ["voidplank", 0]], inCreative: true}
], "opaque");
Block.registerDropFunction("voidplank", function(coords, id, data, diggingLevel, toolLevel){
return [id, 1, data];
});
Block.setDestroyTime(BlockID.voidplank, 0.3);
ToolAPI.registerBlockMaterial(BlockID.voidblock, "stone");
ToolAPI.registerBlockMaterial(BlockID.voidplank, "wood");
ToolAPI.registerBlockMaterial(BlockID.voidglass, "stone");
ToolAPI.registerBlockMaterial(BlockID.luckyVoid, "stone");

