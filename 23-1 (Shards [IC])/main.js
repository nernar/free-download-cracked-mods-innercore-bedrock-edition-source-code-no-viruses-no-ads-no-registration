IDRegistry.genItemID("woodshard");
Item.createItem("woodshard", "Wood Shard", {name:"wood_shard"}, {});
IDRegistry.genItemID("flintshard");
Item.createItem("flintshard", "Flint Shard", {name:"flint_shard"}, {});
IDRegistry.genItemID("ironshard");
Item.createItem("ironshard", "Iron Shard", {name:"iron_shard"}, {});
IDRegistry.genItemID("goldenshard");
Item.createItem("goldenshard", "Golden Shard", {name:"golden_shard"}, {});
IDRegistry.genItemID("redstoneshard");
Item.createItem("redstoneshard", "Redstone Shard", {name:"redstone_shard"}, {});
IDRegistry.genItemID("lapisshard");
Item.createItem("lapisshard", "Lapis Shard", {name:"lapis_shard"}, {});
IDRegistry.genItemID("diamondshard");
Item.createItem("diamondshard", "Diamond Shard", {name:"diamond_shard"}, {});
IDRegistry.genItemID("emeraldshard");
Item.createItem("emeraldshard", "Emerald Shard", {name:"emerald_shard"}, {});
IDRegistry.genItemID("obsidianshard");
Item.createItem("obsidianshard", "Obsidian Shard", {name:"obsidian_shard"}, {});
IDRegistry.genItemID("quartzshard");
Item.createItem("quartzshard", "Quartz Shard", {name:"quartz_shard"}, {});

Callback.addCallback("DestroyBlock", function(coords, block, player){
if(block.id ==17){
var fff = Math.random() * 1;
if(fff <= 0.5){World.drop(coords.x, coords.y, coords.z, ItemID.woodshard, 1)}
}
});

Callback.addCallback("DestroyBlock",
function(coords, block, player){
if(block.id ==13){
var fff = Math.random() * 1;
if(fff <= 0.5){World.drop(coords.x, coords.y, coords.z, ItemID.flintshard, 1)}
}
});

Callback.addCallback("DestroyBlock",
function(coords, block, player){
if(block.id ==15){
var fff = Math.random() * 1;
if(fff <= 0.5){World.drop(coords.x, coords.y, coords.z, ItemID.ironshard, 1)}
}
});
Callback.addCallback("DestroyBlock",
function(coords, block, player){
if(block.id ==14){
var fff = Math.random() * 1;
if(fff <= 0.5){World.drop(coords.x, coords.y, coords.z, ItemID.goldenshard, 1)}
}
});

Callback.addCallback("DestroyBlock",
function(coords, block, player){
if(block.id ==73){
var fff = Math.random() * 1;
if(fff <= 0.5){World.drop(coords.x, coords.y, coords.z, ItemID.redstoneshard, 1)}
}
});

Callback.addCallback("DestroyBlock", function(coords, block, player){
if(block.id ==21){
var fff = Math.random() * 1;
if(fff <= 0.5){World.drop(coords.x, coords.y, coords.z, ItemID.lapisshard, 1)}
}
});

Callback.addCallback("DestroyBlock",
function(coords, block, player){
if(block.id ==56){
var fff = Math.random() * 1;
if(fff <= 0.5){World.drop(coords.x, coords.y, coords.z, ItemID.diamondshard, 1)}
}
});

Callback.addCallback("DestroyBlock",
function(coords, block, player){
if(block.id ==129){
var fff = Math.random() * 1;
if(fff <= 0.5){World.drop(coords.x, coords.y, coords.z, ItemID.emeraldshard, 1)}
}
});

Callback.addCallback("DestroyBlock",
function(coords, block, player){
if(block.id ==49){
var fff = Math.random() * 1;
if(fff <= 0.5){World.drop(coords.x, coords.y, coords.z, ItemID.obsidianshard, 1)}
}
});

Callback.addCallback("DestroyBlock",
function(coords, block, player){
if(block.id ==153){
var fff = Math.random() * 1;
if(fff <= 0.5){World.drop(coords.x, coords.y, coords.z, ItemID.quartzshard, 1)}
}
});

Recipes.addShaped({id: 17, count: 1, data: 0}, [
		"   ",
		" aa",
		" aa"
	], ['a', ItemID.woodshard, 0]);
	
Recipes.addShaped({id: 318, count: 1, data: 0}, [
		"   ",
		" aa",
		" aa"
	], ['a', ItemID.flintshard, 0]);
	
Recipes.addShaped({id: 265, count: 1, data: 0}, [
		"   ",
		" aa",
		" aa"
	], ['a', ItemID.ironshard, 0]);
	
Recipes.addShaped({id: 266, count: 1, data: 0}, [
		"   ",
		" aa",
		" aa"
	], ['a', ItemID.goldenshard, 0]);
	
	Recipes.addShaped({id: 331, count: 1, data: 0}, [
		"   ",
		" aa",
		" aa"
	], ['a', ItemID.redstoneshard, 0]);
	
Recipes.addShaped({id: 351, count: 1, data: 4}, [
		"   ",
		" aa",
		" aa"
	], ['a', ItemID.lapisshard, 0]);
	
	Recipes.addShaped({id: 264, count: 1, data: 0}, [
		"   ",
		" aa",
		" aa"
	], ['a', ItemID.diamondshard, 0]);
	
	Recipes.addShaped({id: 388, count: 1, data: 0}, [
		"   ",
		" aa",
		" aa"
	], ['a', ItemID.emeraldshard, 0]);
	
Recipes.addShaped({id: 49, count: 1, data: 0}, [
		"   ",
		" aa",
		" aa"
	], ['a', ItemID.obsidianshard, 0]);
	
	Recipes.addShaped({id: 406, count: 1, data: 0}, [
		"   ",
		" aa",
		" aa"
	], ['a', ItemID.quartzshard, 0]);
	Recipes.addShaped({id: 263, count: 1, data: 0}, [
		"   ",
		" ba",
		" ab"
	], ['a', ItemID.woodshard, 0, 'b', ItemID.flintshard, 0]);
	Recipes.addShaped({id: ItemID.obsidianshard, count: 1, data: 0}, [
		"   ",
		" ba",
		" ab"
	], ['a', ItemID.redstoneshard, 0, 'b', ItemID.lapisshard, 0]);
	Recipes.addShaped({id: ItemID.diamondshard, count: 1, data: 0}, [
		"   ",
		" ba",
		" ab"
	], ['a', ItemID.obsidianshard, 0, 'b', ItemID.quartzshard, 0]);
