IDRegistry.genItemID("creativeBuilderWand");
Item.createItem("creativeBuilderWand", "Creative Builder wand", {name: "creativeBuilderWand"}, {stack: 1});

Item.registerUseFunction("creativeBuilderWand", function(coords, item, block){
	var multiplier = 7;
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
					set(xx, coords.y + y, zz, block.id, block.data);
				}
			}
		}
	} else if(coords.side == Native.BlockSide.EAST || coords.side == Native.BlockSide.WEST){
		for(yy = coords.y - multiplier; yy <= coords.y + multiplier; yy++){
			for(zz = coords.z - multiplier; zz <= coords.z + multiplier; zz++){
				if(World.getBlock(coords.x, yy, zz).id == block.id && World.getBlock(coords.x, yy, zz).data == block.data){
					set(coords.x + x, yy, zz, block.id, block.data);
				}
			}
		}
	} else if(coords.side == Native.BlockSide.NORTH || coords.side == Native.BlockSide.SOUTH){
	 	for(yy = coords.y - multiplier; yy <= coords.y + multiplier; yy++){
			for(xx = coords.x - multiplier; xx <= coords.x + multiplier; xx++){
				if(World.getBlock(xx, yy, coords.z).id == block.id && World.getBlock(xx, yy, coords.z).data == block.data){
					set(xx, yy, coords.z + z, block.id, block.data);
				}
			}
		}
	}
}); 