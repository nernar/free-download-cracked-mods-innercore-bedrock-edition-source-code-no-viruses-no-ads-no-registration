IDRegistry.genItemID("builderWand");
Item.createItem("builderWand", "Builder wand", {name: "builderWand"}, {stack: 1});

IDRegistry.genBlockID('BW_GhostBlock');
Block.createBlock('BW_GhostBlock', [
{
	name: 'GhostBlock',
	texture: [
		['BW_GhostBlock', 0]
	]
}
], Block.createSpecialType({
	base: 0,
	opaque: false,
	renderLayer: 1,
	lightopacity: 0
}));

Block.registerDropFunction(BlockID.BW_GhostBlock, function(coords, id, data, diggingLevel, toolLevel){
	return [];
})

Recipes.addShaped({id: ItemID.builderWand, count: 1, data: 0}, [
	" gg",
	" sg",
	"s  "
], ['s', 280, 0, 'g', 266, 0]);

function set(xxx,yyy,zzz, id, data, deleteInInventory){
 var getBck = World.getBlock(xxx, yyy, zzz);
	if(getBck.id == BlockID.BW_GhostBlock || getBck.id == 0 || getBck.id == 9 || getBck.id == 11){
		if(deleteInInventory){
		 if(!searchItem(id, data)) return;
			Player.setInventorySlot(searchItem(id, data).slot, id, searchItem(id, data).count - 1, data)
			if(searchItem(id, data).count <= 0){
				Player.setInventorySlot(searchItem(id, data).slot, 0, 0, 0);
				if(!searchItem(id, data)) return;
			}
		}
		World.setBlock(xxx, yyy, zzz, id, data);
	}
}

Item.registerUseFunction("builderWand", function(coords, item, block){
	if(!searchItem(block.id, block.data)) return;
	var multiplier = 3;
	var x,y,z;
	x = y = z = 0;
	var xx,yy,zz;
	xx = yy = zz = 0;
	if(coords.side==Native.BlockSide.EAST){
		x = 1;
	}
	if(coords.side == Native.BlockSide.WEST){
		x = -1;
	}
	if(coords.side == Native.BlockSide.UP){
		y = 1;
	}
	if(coords.side == Native.BlockSide.DOWN){
		y = -1;
	}
	if(coords.side == Native.BlockSide.NORTH){
		z = -1;
	}
	if(coords.side == Native.BlockSide.SOUTH){
		z = 1;
	}
	
	if(coords.side == Native.BlockSide.UP || coords.side == Native.BlockSide.DOWN){
		for(xx = coords.x - multiplier; xx <= coords.x + multiplier; xx++){
			for(zz = coords.z - multiplier; zz <= coords.z + multiplier; zz++){
				if(World.getBlock(xx, coords.y, zz).id == block.id && World.getBlock(xx, coords.y, zz).data == block.data ){
					set(xx, coords.y + y, zz, block.id, block.data, true);
				}
			}
		}
	} else if(coords.side == Native.BlockSide.EAST || coords.side == Native.BlockSide.WEST){
		for(yy = coords.y - multiplier; yy <= coords.y + multiplier; yy++){
			for(zz = coords.z - multiplier; zz <= coords.z + multiplier; zz++){
				if(World.getBlock(coords.x, yy, zz).id == block.id && World.getBlock(coords.x, yy, zz).data == block.data){
					set(coords.x + x, yy, zz, block.id, block.data, true);
				}
			}
		}
	} else if(coords.side == Native.BlockSide.NORTH || coords.side == Native.BlockSide.SOUTH){
	 	for(yy = coords.y - multiplier; yy <= coords.y + multiplier; yy++){
			for(xx = coords.x - multiplier; xx <= coords.x + multiplier; xx++){
				if(World.getBlock(xx, yy, coords.z).id == block.id && World.getBlock(xx, yy, coords.z).data == block.data){
					set(xx, yy, coords.z + z, block.id, block.data, true);
				}
			}
		}
	}
}); 

var GBinitAnim = function (){
 var GBblocks = [];

var poss = {
	x: 0,
	y: 0,
	z: 0
}
 var asddd = 0;
 Callback.addCallback("tick", function () { 
	 asddd++
  	if(asddd >= __config__.getNumber("ghost blocks update")){
	  	asddd = 0;
	  	var pos = getPointed().pos;
	  	if(pos.x != poss.x || pos.y != poss.y || pos.z != poss.z){
			poss = pos;
			for(var i in GBblocks){
			 if(GBblocks[i].destroy){
			  GBblocks[i].destroy();
			 }
			 GBblocks.splice(i, 1);
			}
		}
		
		var item = Player.getCarriedItem();
		if((item.id == ItemID.builderWand || item.id == ItemID.creativeBuilderWand) && (pos.x !== 0 || pos.y !== 0 || pos.z !== 0)){
		 var block = World.getBlock(pos.x, pos.y, pos.z);
		 var multiplier = 3;
		 if(item.id == ItemID.builderWand){
		  multiplier = 3;
		 } else if(Player.getCarriedItem().id == ItemID.creativeBuilderWand){
		  multiplier = 7;
		 }
			var x,y,z;
			x = y = z = 0;
			if(pos.side==Native.BlockSide.EAST){
				x = 1;
			} else
			if(pos.side == Native.BlockSide.WEST){
				x = -1;
			} else 
			if(pos.side == Native.BlockSide.UP){
				y = 1;
			} else
			if(pos.side == Native.BlockSide.DOWN){
				y = -1;
			} else
			if(pos.side == Native.BlockSide.NORTH){
				z = -1;
			} else
			if(pos.side == Native.BlockSide.SOUTH){
				z = 1;
			}
			if(pos.side == Native.BlockSide.UP || pos.side == Native.BlockSide.DOWN){
				for(xx = pos.x - multiplier; xx <= pos.x + multiplier; xx++){
					for(zz = pos.z - multiplier; zz <= pos.z + multiplier; zz++){
						if(World.getBlock(xx, pos.y, zz).id == World.getBlock(pos.x, pos.y, pos.z).id && World.getBlock(xx, pos.y, zz).data == World.getBlock(pos.x, pos.y, pos.z).data){
						 var animation = new Animation.Item(xx + 0.65625, pos.y + y + 0.3125, zz + 0.34375);
						 animation.describeItem({
					         id: 20, 
					         count: 1, 
					         data: 0, 
					         size: 1, 
					         //rotation: [Math.PI / 2, 0, 0], 
					         notRandomize: true 
					        });  
						 animation.load();
							GBblocks.push(animation);
						}
					}
				}
			} else if(pos.side == Native.BlockSide.EAST || pos.side == Native.BlockSide.WEST){
				for(yy = pos.y - multiplier; yy <= pos.y + multiplier; yy++){
					for(zz = pos.z - multiplier; zz <= pos.z + multiplier; zz++){
						if(World.getBlock(pos.x, yy, zz).id == World.getBlock(pos.x, pos.y, pos.z).id && World.getBlock(pos.x, yy, zz).data == World.getBlock(pos.x, pos.y, pos.z).data && World.getBlock(pos.x + x, yy, zz).id == 0){
							var animation = new Animation.Item(pos.x + x + 0.65625, yy + 0.3125, zz + 0.34375);
						 animation.describeItem({
					         id: 20, 
					         count: 1, 
					         data: 0, 
					         size: 1, 
					         //rotation: [Math.PI / 2, 0, 0], 
					         notRandomize: true 
					        });  
						 animation.load();
							GBblocks.push(animation);
						}
					}
				}
			} else if(pos.side == Native.BlockSide.NORTH || pos.side == Native.BlockSide.SOUTH){
			 	for(yy = pos.y - multiplier; yy <= pos.y + multiplier; yy++){
					for(xx = pos.x - multiplier; xx <= pos.x + multiplier; xx++){
						if(World.getBlock(xx, yy, pos.z).id == World.getBlock(pos.x, pos.y, pos.z).id && World.getBlock(xx, yy, pos.z).data == World.getBlock(pos.x, pos.y, pos.z).data && World.getBlock(xx, yy, pos.z + z).id == 0){
							World.setBlock(xx, yy, pos.z + z, BlockID.BW_GhostBlock, 0);
							var animation = new Animation.Item(xx + 0.65625, yy + 0.3125, pos.z + z + 0.34375);
						 animation.describeItem({
					         id: 20, 
					         count: 1, 
					         data: 0, 
					         size: 1, 
					         //rotation: [Math.PI / 2, 0, 0], 
					         notRandomize: true 
					        });  
						 animation.load();
							GBblocks.push(animation);
						}
					}
				}
			}
		}
		}
	 })
	}

var GBinitBlock = function (){
TileEntity.registerPrototype(BlockID.BW_GhostBlock, {
 created: function(){
 	Game.message('Wow');
 	this.destroy();
 }
});

var GBrender = new ICRender.Model();
BlockRenderer.setStaticICRender(BlockID.BW_GhostBlock, 0, GBrender);
var GBmodel = BlockRenderer.createModel();
GBmodel.addBox(0, 0, 0, 1, 1, 1, BlockID.BW_GhostBlock, 0);
GBrender.addEntry(GBmodel);

Block.setBlockShape(BlockID.BW_GhostBlock, {x: 0, y: 0, z: 0}, {x: 0.01, y: 0.01, z: 0.01});

var GBblocks = [];

var poss = {
	x: 0,
	y: 0,
	z: 0
}

var asddd = 0;
Callback.addCallback("tick", function () { 
	asddd++
	if(asddd >= __config__.getNumber("ghost blocks update")){
		asddd = 0;
		var pos = getPointed().pos;
		if(pos.x != poss.x || pos.y != poss.y || pos.z != poss.z){
			poss = pos;
			for(var i in GBblocks){
			 if(World.getBlock(GBblocks[i].x, GBblocks[i].y, GBblocks[i].z).id == BlockID.BW_GhostBlock){
				 World.setBlock(GBblocks[i].x, GBblocks[i].y, GBblocks[i].z, 0);
				}
				GBblocks.splice(i, 1);
			}
		}
		var item = Player.getCarriedItem();
		if((item.id == ItemID.builderWand || item.id == ItemID.creativeBuilderWand) && (pos.x !== 0 || pos.y !== 0 || pos.z !== 0)){
		 var block = World.getBlock(pos.x, pos.y, pos.z);
		 var multiplier = 3;
		 if(item.id == ItemID.builderWand){
		  multiplier = 3;
		 } else if(Player.getCarriedItem().id == ItemID.creativeBuilderWand){
		  multiplier = 7;
		 }
			var x,y,z;
			x = y = z = 0;
			if(pos.side==Native.BlockSide.EAST){
				x = 1;
			}
			if(pos.side == Native.BlockSide.WEST){
				x = -1;
			}
			if(pos.side == Native.BlockSide.UP){
				y = 1;
			}
			if(pos.side == Native.BlockSide.DOWN){
				y = -1;
			}
			if(pos.side == Native.BlockSide.NORTH){
				z = -1;
			}
			if(pos.side == Native.BlockSide.SOUTH){
				z = 1;
			}
			if(pos.side == Native.BlockSide.UP || pos.side == Native.BlockSide.DOWN){
				for(xx = pos.x - multiplier; xx <= pos.x + multiplier; xx++){
					for(zz = pos.z - multiplier; zz <= pos.z + multiplier; zz++){
						if(World.getBlock(xx, pos.y, zz).id == World.getBlock(pos.x, pos.y, pos.z).id && World.getBlock(xx, pos.y, zz).data == World.getBlock(pos.x, pos.y, pos.z).data && World.getBlock(xx, pos.y + y, zz).id == 0){
							World.setBlock(xx, pos.y + y, zz, BlockID.BW_GhostBlock, 0);
							GBblocks.push({
							 x: xx,
							 y: pos.y + y,
						  	z: zz
						 })
						}
					}
				}
			} else if(pos.side == Native.BlockSide.EAST || pos.side == Native.BlockSide.WEST){
				for(yy = pos.y - multiplier; yy <= pos.y + multiplier; yy++){
					for(zz = pos.z - multiplier; zz <= pos.z + multiplier; zz++){
						if(World.getBlock(pos.x, yy, zz).id == World.getBlock(pos.x, pos.y, pos.z).id && World.getBlock(pos.x, yy, zz).data == World.getBlock(pos.x, pos.y, pos.z).data && World.getBlock(pos.x + x, yy, zz).id == 0){
							World.setBlock(pos.x + x, yy, zz, BlockID.BW_GhostBlock, 0);
							GBblocks.push({
							 x: pos.x + x,
							 y: yy,
							 z: zz
						 })
						}
					}
				}
			} else if(pos.side == Native.BlockSide.NORTH || pos.side == Native.BlockSide.SOUTH){
			 	for(yy = pos.y - multiplier; yy <= pos.y + multiplier; yy++){
					for(xx = pos.x - multiplier; xx <= pos.x + multiplier; xx++){
						if(World.getBlock(xx, yy, pos.z).id == World.getBlock(pos.x, pos.y, pos.z).id && World.getBlock(xx, yy, pos.z).data == World.getBlock(pos.x, pos.y, pos.z).data && World.getBlock(xx, yy, pos.z + z).id == 0){
							World.setBlock(xx, yy, pos.z + z, BlockID.BW_GhostBlock, 0);
							GBblocks.push({
							 x: xx,
							 y: yy,
							 z: pos.z + z
						 })
						}
					}
				}
			}
		}
	}
}); 
}

if(__config__.getBool("ghost blocks")){
	if(__config__.getBool("Ghost blocks/Anim")){
		GBinitAnim();
	} else {
		GBinitBlock();
	}
}