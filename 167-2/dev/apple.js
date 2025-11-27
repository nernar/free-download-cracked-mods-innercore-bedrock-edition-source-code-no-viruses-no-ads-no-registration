IDRegistry.genBlockID("applebb");
Block.createBlock("applebb", [
	{name: "apple bush", texture: [["applebb", 0], ["applebb", 0], ["applebb", 0], ["applebb", 0], ["applebb", 0], ["applebb", 0]], inCreative: true}]);
	IDRegistry.genBlockID("applebbb");
Block.createBlock("applebbb", [
	{name: "apple bush", texture: [["applebb", 1], ["applebb", 1], ["applebb", 1], ["applebb", 1], ["applebb", 1], ["applebb", 1]], inCreative: false}]);
	
	Recipes.addShaped({id: BlockID.applebb, count: 1, data: 0}, [
"xxx","xax","xxx"], ['x', 18, -1, 'a', 260, -1]);

Block.setDestroyTime(BlockID.applebb, 0.4);
ToolAPI.registerBlockMaterial(BlockID.applebb, "wood");
Block.setRandomTickCallback(BlockID.applebb, function(x, y, z, id, data){
	if(data==0 && Math.random() < 0.1){
		World.setBlock(x, y, z, BlockID.applebbb, 0);
	}});
	



Callback.addCallback("ItemUse", function (coords, item, block) { 
if(block.id==BlockID.applebbb){
World.setBlock(coords.x, coords.y, coords.z, BlockID.applebb, 0);
World.drop(coords.x+0.5, coords.y+1, coords.z+0.5, 260, 2, 0);
}});



	