var CAKE1=Block.createSpecialType({
	base: 92
});
var cakeList={};
var createCake = function(item,pack,name){
//var name = namep?namep:"胡萝卜蛋糕";
//var  item = itemp?itemp:"Cakecarro";
IDRegistry.genBlockID("coffeeworkshop$"+item+"_0");
Block.createBlock("coffeeworkshop$"+item+"_0", [
{name: name, texture: [[pack, 0],[pack, 1],[pack, 2]], inCreative: false}]);
Block.setBlockShape(BlockID["coffeeworkshop$"+item+"_0"], {x:1/16, y:0, z:1/16}, {x:15/16, y:0.5, z:15/16}, -1);
IDRegistry.genBlockID("coffeeworkshop$"+item+"_1");
Block.createBlock("coffeeworkshop$"+item+"_1", [
{name: name, texture: [[pack, 0],[pack, 1],[pack, 2]], inCreative: false}]);
Block.setBlockShape(BlockID["coffeeworkshop$"+item+"_1"], {x:1/16, y:0, z:1/16}, {x:15/16, y:0.5, z:13/16}, -1);
IDRegistry.genBlockID("coffeeworkshop$"+item+"_2");
Block.createBlock("coffeeworkshop$"+item+"_2", [
{name: name, texture: [[pack, 0],[pack, 1],[pack, 2],[pack,3],[pack,2]], inCreative: false}]);
Block.setBlockShape(BlockID["coffeeworkshop$"+item+"_2"], {x:1/16, y:0, z:1/16}, {x:15/16, y:0.5, z:11/16}, -1);
IDRegistry.genBlockID("coffeeworkshop$"+item+"_3");
Block.createBlock("coffeeworkshop$"+item+"_3", [
{name: name, texture: [[pack, 0],[pack, 1],[pack, 2],[pack,3],[pack,2]], inCreative: false}]);
Block.setBlockShape(BlockID["coffeeworkshop$"+item+"_3"], {x:1/16, y:0, z:1/16}, {x:15/16, y:0.5, z:9/16}, -1);
IDRegistry.genBlockID("coffeeworkshop$"+item+"_4");
Block.createBlock("coffeeworkshop$"+item+"_4", [
{name: name, texture: [[pack, 0],[pack, 1],[pack, 2],[pack,3],[pack,2]], inCreative: false}]);
Block.setBlockShape(BlockID["coffeeworkshop$"+item+"_4"], {x:1/16, y:0, z:1/16}, {x:15/16, y:0.5, z:7/16}, -1);
IDRegistry.genBlockID("coffeeworkshop$"+item+"_5");
Block.createBlock("coffeeworkshop$"+item+"_5", [
{name: name, texture: [[pack, 0],[pack, 1],[pack, 2],[pack,3],[pack,2]], inCreative: false}]);
Block.setBlockShape(BlockID["coffeeworkshop$"+item+"_5"], {x:1/16, y:0, z:1/16}, {x:15/16, y:0.5, z:5/16}, -1);
IDRegistry.genBlockID("coffeeworkshop$"+item+"_6");
Block.createBlock("coffeeworkshop$"+item+"_6", [
{name: name, texture: [[pack, 0],[pack, 1],[pack, 2],[pack,3],[pack,2]], inCreative: false}]);
Block.setBlockShape(BlockID["coffeeworkshop$"+item+"_6"], {x:1/16, y:0, z:1/16}, {x:15/16, y:0.5, z:3/16}, -1);

cakeList[ItemID["coffeeworkshop$"+item]]=true;

Block.registerDropFunction("coffeeworkshop$"+item+ "_0", function(c, d, e, a, b){
 return [[ItemID["coffeeworkshop$"+item],1,0]];
});

Block.registerDropFunction("coffeeworkshop$"+item + "_1", function(c, d, e, a, b){
 return [[]];
});

Block.registerDropFunction("coffeeworkshop$"+item + "_2", function(c, d, e, a, b){
 return [[]];
});

Block.registerDropFunction("coffeeworkshop$"+item + "_3", function(c, d, e, a, b){
 return [[]];
});

Block.registerDropFunction("coffeeworkshop$"+item + "_4", function(c, d, e, a, b){
 return [[]];
});

Block.registerDropFunction("coffeeworkshop$"+item + "_5", function(c, d, e, a, b){
 return [[]];
});

Block.registerDropFunction("coffeeworkshop$"+item + "_6", function(c, d, e, a, b){
 return [[]];
});

TileEntity.registerPrototype (BlockID["coffeeworkshop$"+item + "_0"],{
tick:function(){
if (!World.getBlockID(this.x, this.y - 1, this.z)){
	World.destroyBlock(this.x, this.y, this.z, true);
	this.selfDestroy();
	}
},
click: function(id, count, data){
	if(Player.getHunger() <  20){
	   Game.prevent();
	   this.selfDestroy();
		World.setBlock(this.x, this.y, this.z, BlockID["coffeeworkshop$"+item + "_1"]);
		World.addTileEntity(this.x,this.y,this.z);
		Player.setHunger(Player.getHunger() + 1);
		}
		}
}
);

TileEntity.registerPrototype (BlockID["coffeeworkshop$"+item + "_1"],{
tick:function(){
if (!World.getBlockID(this.x, this.y - 1, this.z)){
	World.destroyBlock(this.x, this.y, this.z, true);
	this.selfDestroy();
	}
},
click: function(id, count, data){
	if(Player.getHunger() <  20){
	   Game.prevent();
	   this.selfDestroy();
		World.setBlock(this.x, this.y, this.z, BlockID["coffeeworkshop$"+item + "_2"]);
		World.addTileEntity(this.x,this.y,this.z);
		Player.setHunger(Player.getHunger() + 1);
		}
		}
}
);

TileEntity.registerPrototype (BlockID["coffeeworkshop$"+item + "_2"],{
tick:function(){
if (!World.getBlockID(this.x, this.y - 1, this.z)){
	World.destroyBlock(this.x, this.y, this.z, true);
	this.selfDestroy();
	}
},
click: function(id, count, data){
	if(Player.getHunger() <  20){
	   Game.prevent();
	   this.selfDestroy();
		World.setBlock(this.x, this.y, this.z, BlockID["coffeeworkshop$"+item + "_3"]);
		World.addTileEntity(this.x,this.y,this.z);
		Player.setHunger(Player.getHunger() + 1);
		}
		}
}
);

TileEntity.registerPrototype (BlockID["coffeeworkshop$"+item + "_3"],{
tick:function(){
if (!World.getBlockID(this.x, this.y - 1, this.z)){
	World.destroyBlock(this.x, this.y, this.z, true);
	this.selfDestroy();
	}
},
click: function(id, count, data){
	if(Player.getHunger() <  20){
	   Game.prevent();
	   this.selfDestroy();
		World.setBlock(this.x, this.y, this.z, BlockID["coffeeworkshop$"+item + "_4"]);
		World.addTileEntity(this.x,this.y,this.z);
		Player.setHunger(Player.getHunger() + 1);
		}
		}
}
);

TileEntity.registerPrototype (BlockID["coffeeworkshop$"+item + "_4"],{
tick:function(){
if (!World.getBlockID(this.x, this.y - 1, this.z)){
	World.destroyBlock(this.x, this.y, this.z, true);
	this.selfDestroy();
	}
},
click: function(id, count, data){
	if(Player.getHunger() <  20){
	   Game.prevent();
	   this.selfDestroy();
		World.setBlock(this.x, this.y, this.z, BlockID["coffeeworkshop$"+item + "_5"]);
		World.addTileEntity(this.x,this.y,this.z);
		Player.setHunger(Player.getHunger() + 1);
		}
		}
}
);

TileEntity.registerPrototype (BlockID["coffeeworkshop$"+item + "_5"],{
tick:function(){
if (!World.getBlockID(this.x, this.y - 1, this.z)){
	World.destroyBlock(this.x, this.y, this.z, true);
	this.selfDestroy();
	}
},
click: function(id, count, data){
	if(Player.getHunger() <  20){
	   Game.prevent();
	   this.selfDestroy();
		World.setBlock(this.x, this.y, this.z, BlockID["coffeeworkshop$"+item + "_6"]);
		World.addTileEntity(this.x,this.y,this.z);
		Player.setHunger(Player.getHunger() + 1);
		}
		}
}
);

TileEntity.registerPrototype (BlockID["coffeeworkshop$"+item + "_6"],{
tick:function(){
if (!World.getBlockID(this.x, this.y - 1, this.z)){
	World.destroyBlock(this.x, this.y, this.z, true);
	this.selfDestroy();
	}
},
click: function(id, count, data){
	if(Player.getHunger() <  20){
	   Game.prevent();
	   this.selfDestroy();
		World.setBlock(this.x, this.y, this.z, 0);
		World.addTileEntity(this.x,this.y,this.z);
		Player.setHunger(Player.getHunger() + 1);
		}
		}
}
);

Item.registerUseFunction(ItemID["coffeeworkshop$"+item], function(coords, i, tile){
	var place = coords.relative;
	var tile1 = World.getBlock(place.x, place.y, place.z);
	var tile2 = World.getBlock(place.x, place.y - 1, place.z);
if(World.getBlockID(place.x, place.y, place.z) === 0){
	if (GenerationUtils.isTransparentBlock(tile1.id) && tile2.id){
		World.setBlock(place.x, place.y, place.z, BlockID["coffeeworkshop$"+item + "_0"]);
		World.addTileEntity(place.x, place.y, place.z);
		Player.setCarriedItem(i.id, i.count - 1, i.data);
	}
	}
});
};
createCake("Cakecarrot","cake_carrot","胡萝卜蛋糕");
createCake("Cakecheese","cake_cheese","芝士蛋糕");
createCake("Cakeredvelvet","cake_redvelvet","红丝绒蛋糕");
createCake("Cakeschwarzwald","cake_schwarzwald","黑森林蛋糕");
createCake("Cakesponge","cake_sponge","海绵蛋糕");
createCake("Cakespongechocolate","cake_sponge_chocolate","巧克力海绵蛋糕");
createCake("tiramisu","tiramisu","提拉米苏");
//累死我了*2
//潮平两岸阔，风正一帆悬 2018.10.27
