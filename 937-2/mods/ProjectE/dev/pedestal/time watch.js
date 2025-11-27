IDRegistry.genItemID("watchTime");
Item.createItem("watchTime", "Watch of flowing time", {name: "timeWatch", meta: 0}, {stack: 1});

/*let update_watchTime = 20;
let radius_watchTime = 5;

function update_tiles(tile){
	tile.data.tiles = [];
	for(let x = -radius_watchTime; x < radius_watchTime; x++)
		for(let y = -radius_watchTime; y < radius_watchTime; y++)
			for(let z = -radius_watchTime; z < radius_watchTime; z++){
				let block = tile.blockSource.getBlockId(tile.x + x, tile.y + y, tile.z + z);
				let _tile = TileEntity.getTileEntity(tile.x + x, tile.y + y, tile.z + z, tile.blockSource);
				if(block != BlockID.pedestalMatter && !!_tile && _tile.tick)
					tile.data.tiles.push([x, y, z]);
			}
}

Pedestal.register(ItemID.watchTime, function(tile){
	if(tile.data.tiles && World.getThreadTime()%update_watchTime==0)
		try{
			for(let i in tile.data.tiles){
				let pos = tile.data.tiles[i];
				let _tile = TileEntity.getTileEntity(tile.x + pos[0], tile.y + pos[1], tile.z + pos[2], tile.blockSource);
				for(let i = 0;i < update_watchTime;i++)
					_tile.tick();
			}
		}catch(e){
			update_tiles(tile);
		}
	else if(World.getThreadTime() % 500 == 0)
		update_tiles(tile);
}, function(tile){
	update_tiles(tile);
});*/

let update_watchTime = 20;
let radius_watchTime = 5;

function to1D(x, y, z) {
    return (z * 5 * 5) + (y * 5) + x;
}

function to3D( idx ) {
let z = idx / (5 * 5); 
idx -= (z * 5 * 5); 
let y = idx / 5; 
let x = idx % 5; 
return [x, y, z]
}

function update_tiles(tile){
	tile.data.tiles = [];
	for(let x = -radius_watchTime; x < radius_watchTime; x++)
		for(let y = -radius_watchTime; y < radius_watchTime; y++)
			for(let z = -radius_watchTime; z < radius_watchTime; z++){
				let block = tile.blockSource.getBlockId(tile.x + x, tile.y + y, tile.z + z);
				let _tile = TileEntity.getTileEntity(tile.x + x, tile.y + y, tile.z + z, tile.blockSource);
				
					block != BlockID.pedestalMatter && !!_tile && _tile.tick && tile.data.tiles.push(to1D(x, y, z));
			}
}

Pedestal.register(ItemID.watchTime, function(tile){
	if(tile.data.tiles && World.getThreadTime()%update_watchTime==0)
		try{
			for(let i in tile.data.tiles){
				let pos = to3D(tile.data.tiles[i]);
				let _tile = TileEntity.getTileEntity(tile.x + pos[0], tile.y + pos[1], tile.z + pos[2], tile.blockSource);
				for(let i = 0;i < update_watchTime;i++)
					_tile.tick();
			}
		}catch(e){
			update_tiles(tile);
		}
	else if(World.getThreadTime() % 500 == 0)
		update_tiles(tile);
}, function(tile){
	update_tiles(tile);
});

/*let watch_blocks = [];
(function(){
  for(let x = -radius_watchTime; x < radius_watchTime; x++)
    for(let y = -radius_watchTime; y < radius_watchTime; y++)
      for(let z = -radius_watchTime; z < radius_watchTime; z++)
        watch_blocks.push({x: x, y: y, z: z});
})();

Pedestal.register(ItemID.watchTime, function(tile){
  if(World.getThreadTime()%update_watchTime==0){
for(let i in watch_blocks){
let pos = watch_blocks[i];
let block = tile.blockSource.getBlockId(tile.x + pos.x, tile.y + pos.y, tile.z + pos.z);
let _tile = TileEntity.getTileEntity(tile.x + pos.x, tile.y + pos.y, tile.z + pos.z, tile.blockSource);
if(block != BlockID.pedestalMatter && !!_tile && _tile.tick)
         for(let i = 0;i < update_watchTime;i++)
        	_tile.tick();
}
  for(let x = -radius_watchTime; x < radius_watchTime; x++)
    for(let y = -radius_watchTime; y < radius_watchTime; y++)
      for(let z = -radius_watchTime; z < radius_watchTime; z++){
        let block = tile.blockSource.getBlockId(tile.x + x, tile.y + y, tile.z + z);
let _tile = TileEntity.getTileEntity(tile.x + x, tile.y + y, tile.z + z, tile.blockSource);
         if(block != BlockID.pedestalMatter && !!_tile && _tile.tick)
         for(let i = 0;i < update_watchTime;i++)
        	_tile.tick();
        
      }
}
});*/
