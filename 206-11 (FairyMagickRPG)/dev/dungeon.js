IDRegistry.genItemID("sky_shard");
Item.createItem("sky_shard", "Sky shards", {name: "sky_shard", meta: 0});

IDRegistry.genBlockID("sky_stone");
Block.createBlock("sky_stone", [{name: "Sky stone", texture: [["sky_stone", 0]], inCreative: true}
] );

ToolAPI.registerBlockMaterial(BlockID.sky_stone, "stone", 2);
Block.registerDropFunction("sky_stone", function(coords, id, data, diggingLevel, toolLevel){
			if (diggingLevel > 2) return [[ItemID.sky_shard, 2, 0]];
			return [];
	}, 2);

IDRegistry.genBlockID("sky_brick");
Block.createBlock("sky_brick", [
{name: "Sky brick", texture: [["sky_brick", 0]], inCreative: true}
] );
ToolAPI.registerBlockMaterial(BlockID.sky_brick, "stone", 2);
Block.registerDropFunction("sky_brick", function(coords, id, data, diggingLevel, toolLevel){
			if (diggingLevel > 2) return [[BlockID.sky_brick, 1, 0]];
			return [];
	}, 2);

Callback.addCallback("GenerateChunk", function(chunkX, chunkZ){
 if (Math.random() < .02){
  var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 200, 252);
 
 GenerationUtils.lockInBlock(BlockID.sky_brick, 0, 0, false);
  GenerationUtils.setLockedBlock(coords.x - 3, coords.y + 1, coords.z - 1);
  GenerationUtils.setLockedBlock(coords.x - 1, coords.y + 1, coords.z + 3);
  GenerationUtils.setLockedBlock(coords.x + 1, coords.y + 1, coords.z - 3);  
  GenerationUtils.setLockedBlock(coords.x - 3, coords.y + 1, coords.z + 1);
  GenerationUtils.setLockedBlock(coords.x + 1, coords.y + 1, coords.z + 3);
  GenerationUtils.setLockedBlock(coords.x - 1, coords.y + 1, coords.z - 3);  
  GenerationUtils.setLockedBlock(coords.x - 3, coords.y + 1, coords.z);
  GenerationUtils.setLockedBlock(coords.x, coords.y + 1, coords.z + 3);
  GenerationUtils.setLockedBlock(coords.x, coords.y + 1, coords.z - 3);  
  GenerationUtils.setLockedBlock(coords.x - 2, coords.y + 1, coords.z + 3);
  GenerationUtils.setLockedBlock(coords.x + 3, coords.y + 1, coords.z + 2);
  GenerationUtils.setLockedBlock(coords.x + 2, coords.y + 1, coords.z - 3);
  GenerationUtils.setLockedBlock(coords.x - 2, coords.y + 1, coords.z - 3);
  GenerationUtils.setLockedBlock(coords.x - 3, coords.y + 1, coords.z + 2);
  GenerationUtils.setLockedBlock(coords.x - 3, coords.y + 1, coords.z - 2);
  GenerationUtils.setLockedBlock(coords.x + 2, coords.y + 1, coords.z + 3);
  GenerationUtils.setLockedBlock(coords.x + 3, coords.y + 1, coords.z - 2);

GenerationUtils.setLockedBlock(coords.x - 3, coords.y + 4, coords.z - 1);
  GenerationUtils.setLockedBlock(coords.x + 3, coords.y + 4, coords.z + 1);
  GenerationUtils.setLockedBlock(coords.x - 1, coords.y + 4, coords.z + 3);
  GenerationUtils.setLockedBlock(coords.x + 1, coords.y + 4, coords.z - 3);  
  GenerationUtils.setLockedBlock(coords.x - 3, coords.y + 4, coords.z + 1);
  GenerationUtils.setLockedBlock(coords.x + 3, coords.y + 4, coords.z - 1);
  GenerationUtils.setLockedBlock(coords.x + 1, coords.y + 4, coords.z + 3);
  GenerationUtils.setLockedBlock(coords.x - 1, coords.y + 4, coords.z - 3);  
  GenerationUtils.setLockedBlock(coords.x - 3, coords.y + 4, coords.z);
  GenerationUtils.setLockedBlock(coords.x + 3, coords.y + 4, coords.z);
  GenerationUtils.setLockedBlock(coords.x, coords.y + 4, coords.z + 3);
  GenerationUtils.setLockedBlock(coords.x, coords.y + 4, coords.z - 3);  
  GenerationUtils.setLockedBlock(coords.x - 2, coords.y + 4, coords.z + 3);
  GenerationUtils.setLockedBlock(coords.x + 3, coords.y + 4, coords.z + 2);
  GenerationUtils.setLockedBlock(coords.x + 2, coords.y + 4, coords.z - 3);
  GenerationUtils.setLockedBlock(coords.x - 2, coords.y + 4, coords.z - 3);
  GenerationUtils.setLockedBlock(coords.x - 3, coords.y + 4, coords.z + 2);
  GenerationUtils.setLockedBlock(coords.x - 3, coords.y + 4, coords.z - 2);
  GenerationUtils.setLockedBlock(coords.x + 2, coords.y + 4, coords.z + 3);
  GenerationUtils.setLockedBlock(coords.x + 3, coords.y + 4, coords.z - 2);

GenerationUtils.setLockedBlock(coords.x - 3, coords.y + 2, coords.z - 1);
  GenerationUtils.setLockedBlock(coords.x + 3, coords.y + 2, coords.z + 1);
  GenerationUtils.setLockedBlock(coords.x - 1, coords.y + 2, coords.z + 3);
  GenerationUtils.setLockedBlock(coords.x + 1, coords.y + 2, coords.z - 3);  
  GenerationUtils.setLockedBlock(coords.x - 3, coords.y + 2, coords.z + 1);
  GenerationUtils.setLockedBlock(coords.x + 3, coords.y + 2, coords.z - 1);
  GenerationUtils.setLockedBlock(coords.x + 1, coords.y + 2, coords.z + 3);
  GenerationUtils.setLockedBlock(coords.x - 1, coords.y + 2, coords.z - 3);  
  GenerationUtils.setLockedBlock(coords.x - 3, coords.y + 2, coords.z);
  GenerationUtils.setLockedBlock(coords.x + 3, coords.y + 2, coords.z);
  GenerationUtils.setLockedBlock(coords.x, coords.y + 2, coords.z + 3);
  GenerationUtils.setLockedBlock(coords.x, coords.y + 2, coords.z - 3);  
  GenerationUtils.setLockedBlock(coords.x - 2, coords.y + 2, coords.z + 3);
  GenerationUtils.setLockedBlock(coords.x + 3, coords.y + 2, coords.z + 2);
  GenerationUtils.setLockedBlock(coords.x + 2, coords.y + 2, coords.z - 3);
  GenerationUtils.setLockedBlock(coords.x - 2, coords.y + 2, coords.z - 3);
  GenerationUtils.setLockedBlock(coords.x - 3, coords.y + 2, coords.z + 2);
  GenerationUtils.setLockedBlock(coords.x - 3, coords.y + 2, coords.z - 2);
  GenerationUtils.setLockedBlock(coords.x + 2, coords.y + 2, coords.z + 3);
  GenerationUtils.setLockedBlock(coords.x + 3, coords.y + 2, coords.z - 2);

GenerationUtils.setLockedBlock(coords.x - 3, coords.y + 3, coords.z - 1);
  GenerationUtils.setLockedBlock(coords.x + 3, coords.y + 3, coords.z + 1);
  GenerationUtils.setLockedBlock(coords.x - 1, coords.y + 3, coords.z + 3);
  GenerationUtils.setLockedBlock(coords.x + 1, coords.y + 3, coords.z - 3);  
  GenerationUtils.setLockedBlock(coords.x - 3, coords.y + 3, coords.z + 1);
  GenerationUtils.setLockedBlock(coords.x + 3, coords.y + 3, coords.z - 1);
  GenerationUtils.setLockedBlock(coords.x + 1, coords.y + 3, coords.z + 3);
  GenerationUtils.setLockedBlock(coords.x - 1, coords.y + 3, coords.z - 3);  
  GenerationUtils.setLockedBlock(coords.x - 3, coords.y + 3, coords.z);
  GenerationUtils.setLockedBlock(coords.x + 3, coords.y + 3, coords.z);
  GenerationUtils.setLockedBlock(coords.x, coords.y + 3, coords.z + 3);
  GenerationUtils.setLockedBlock(coords.x, coords.y + 3, coords.z - 3);  
  GenerationUtils.setLockedBlock(coords.x - 2, coords.y + 3, coords.z + 3);
  GenerationUtils.setLockedBlock(coords.x + 3, coords.y + 3, coords.z + 2);
  GenerationUtils.setLockedBlock(coords.x + 2, coords.y + 3, coords.z - 3);
  GenerationUtils.setLockedBlock(coords.x - 2, coords.y + 3, coords.z - 3);
  GenerationUtils.setLockedBlock(coords.x - 3, coords.y + 3, coords.z + 2);
  GenerationUtils.setLockedBlock(coords.x - 3, coords.y + 3, coords.z - 2);
  GenerationUtils.setLockedBlock(coords.x + 2, coords.y + 3, coords.z + 3);
  GenerationUtils.setLockedBlock(coords.x + 3, coords.y + 3, coords.z - 2);


  GenerationUtils.setLockedBlock(coords.x - 3, coords.y, coords.z - 1);
  GenerationUtils.setLockedBlock(coords.x + 3, coords.y, coords.z + 1);
  GenerationUtils.setLockedBlock(coords.x - 1, coords.y, coords.z + 3);
  GenerationUtils.setLockedBlock(coords.x + 1, coords.y, coords.z - 3);  
  GenerationUtils.setLockedBlock(coords.x - 3, coords.y, coords.z + 1);
  GenerationUtils.setLockedBlock(coords.x + 3, coords.y, coords.z - 1);
  GenerationUtils.setLockedBlock(coords.x + 1, coords.y, coords.z + 3);
  GenerationUtils.setLockedBlock(coords.x - 1, coords.y, coords.z - 3);  
  GenerationUtils.setLockedBlock(coords.x - 3, coords.y, coords.z);
  GenerationUtils.setLockedBlock(coords.x + 3, coords.y, coords.z);
  GenerationUtils.setLockedBlock(coords.x, coords.y, coords.z + 3);
  GenerationUtils.setLockedBlock(coords.x, coords.y, coords.z - 3);  
  GenerationUtils.setLockedBlock(coords.x - 2, coords.y, coords.z + 3);
  GenerationUtils.setLockedBlock(coords.x + 3, coords.y, coords.z + 2);
  GenerationUtils.setLockedBlock(coords.x + 2, coords.y, coords.z - 3);
  GenerationUtils.setLockedBlock(coords.x - 2, coords.y, coords.z - 3);
  GenerationUtils.setLockedBlock(coords.x - 3, coords.y, coords.z + 2);
  GenerationUtils.setLockedBlock(coords.x - 3, coords.y, coords.z - 2);
  GenerationUtils.setLockedBlock(coords.x + 2, coords.y, coords.z + 3);
  GenerationUtils.setLockedBlock(coords.x + 3, coords.y, coords.z - 2);

 GenerationUtils.setLockedBlock(coords.x - 1, coords.y + 4, coords.z + 2);
  GenerationUtils.setLockedBlock(coords.x + 2, coords.y + 4, coords.z + 1);
  GenerationUtils.setLockedBlock(coords.x + 1, coords.y + 4, coords.z - 2);
  GenerationUtils.setLockedBlock(coords.x - 1, coords.y + 4, coords.z - 2);
  GenerationUtils.setLockedBlock(coords.x - 2, coords.y + 4, coords.z + 1);
  GenerationUtils.setLockedBlock(coords.x - 2, coords.y + 4, coords.z - 2);
  GenerationUtils.setLockedBlock(coords.x +2, coords.y + 4, coords.z + 2);
  GenerationUtils.setLockedBlock(coords.x - 2, coords.y + 4, coords.z - 1);
  GenerationUtils.setLockedBlock(coords.x - 2, coords.y + 4, coords.z + 2);
  GenerationUtils.setLockedBlock(coords.x + 1, coords.y + 4, coords.z + 2);
  GenerationUtils.setLockedBlock(coords.x + 2, coords.y + 4, coords.z - 1);
  GenerationUtils.setLockedBlock(coords.x + 2, coords.y + 4, coords.z - 2);
  GenerationUtils.setLockedBlock(coords.x - 2, coords.y + 4, coords.z);
  GenerationUtils.setLockedBlock(coords.x + 2, coords.y + 4, coords.z);
  GenerationUtils.setLockedBlock(coords.x, coords.y + 4, coords.z + 2);
  GenerationUtils.setLockedBlock(coords.x, coords.y + 4, coords.z - 2);
GenerationUtils.setLockedBlock(coords.x - 1, coords.y + 4, coords.z - 1);
  GenerationUtils.setLockedBlock(coords.x - 1, coords.y + 4, coords.z + 1);
  GenerationUtils.setLockedBlock(coords.x + 1, coords.y + 4, coords.z + 1);
  GenerationUtils.setLockedBlock(coords.x + 1, coords.y + 4, coords.z - 1);
  GenerationUtils.setLockedBlock(coords.x, coords.y + 4, coords.z);
  GenerationUtils.setLockedBlock(coords.x - 1, coords.y + 4, coords.z);
  GenerationUtils.setLockedBlock(coords.x + 1, coords.y + 4, coords.z);
  GenerationUtils.setLockedBlock(coords.x, coords.y + 4, coords.z + 1);
  GenerationUtils.setLockedBlock(coords.x, coords.y + 4, coords.z - 1);
  
  GenerationUtils.setLockedBlock(coords.x - 1, coords.y, coords.z + 2);
  GenerationUtils.setLockedBlock(coords.x + 2, coords.y, coords.z + 1);
  GenerationUtils.setLockedBlock(coords.x + 1, coords.y, coords.z - 2);
  GenerationUtils.setLockedBlock(coords.x - 1, coords.y, coords.z - 2);
  GenerationUtils.setLockedBlock(coords.x - 2, coords.y, coords.z + 1);
  GenerationUtils.setLockedBlock(coords.x - 2, coords.y, coords.z - 2);
  GenerationUtils.setLockedBlock(coords.x +2, coords.y, coords.z + 2);
  GenerationUtils.setLockedBlock(coords.x - 2, coords.y, coords.z - 1);
  GenerationUtils.setLockedBlock(coords.x - 2, coords.y, coords.z + 2);
  GenerationUtils.setLockedBlock(coords.x + 1, coords.y, coords.z + 2);
  GenerationUtils.setLockedBlock(coords.x + 2, coords.y, coords.z - 1);
  GenerationUtils.setLockedBlock(coords.x + 2, coords.y, coords.z - 2);
  GenerationUtils.setLockedBlock(coords.x - 2, coords.y, coords.z);
  GenerationUtils.setLockedBlock(coords.x + 2, coords.y, coords.z);
  GenerationUtils.setLockedBlock(coords.x, coords.y, coords.z + 2);
  GenerationUtils.setLockedBlock(coords.x, coords.y, coords.z - 2);
 
GenerationUtils.setLockedBlock(coords.x - 1, coords.y, coords.z - 1);
  GenerationUtils.setLockedBlock(coords.x - 1, coords.y, coords.z + 1);
  GenerationUtils.setLockedBlock(coords.x + 1, coords.y, coords.z + 1);
  GenerationUtils.setLockedBlock(coords.x + 1, coords.y, coords.z - 1);
  GenerationUtils.setLockedBlock(coords.x, coords.y, coords.z);
  GenerationUtils.setLockedBlock(coords.x - 1, coords.y, coords.z);
  GenerationUtils.setLockedBlock(coords.x + 1, coords.y, coords.z);
  GenerationUtils.setLockedBlock(coords.x, coords.y, coords.z + 1);
  GenerationUtils.setLockedBlock(coords.x, coords.y, coords.z - 1);
  World.setBlock(coords.x, coords.y + 2, coords.z, BlockID.sky_stone);
  World.setBlock(coords.x, coords.y + 3, coords.z, BlockID.skyfence);
  World.setBlock(coords.x, coords.y + 1, coords.z, BlockID.skyfence);

 World.setBlock(coords.x + 3, coords.y + 1, coords.z, BlockID.ironfence);
 World.setBlock(coords.x + 3, coords.y + 1, coords.z - 1, BlockID.ironfence);
 World.setBlock(coords.x + 3, coords.y + 1, coords.z + 1, BlockID.ironfence);
 World.setBlock(coords.x + 3, coords.y + 2, coords.z, BlockID.ironfence);
 World.setBlock(coords.x + 3, coords.y + 2, coords.z - 1, BlockID.ironfence);
 World.setBlock(coords.x + 3, coords.y + 2, coords.z + 1, BlockID.ironfence);
 World.setBlock(coords.x + 3, coords.y + 3, coords.z, BlockID.ironfence);
 World.setBlock(coords.x + 3, coords.y + 3, coords.z - 1, BlockID.ironfence);
 World.setBlock(coords.x + 3, coords.y + 3, coords.z + 1, BlockID.ironfence);

World.setBlock(coords.x - 3, coords.y + 2, coords.z + 1, BlockID.sky_brick, 0);
World.setBlock(coords.x - 3, coords.y + 2, coords.z - 1, BlockID.sky_brick, 0);
World.setBlock(coords.x - 3, coords.y + 1, coords.z, BlockID.sky_brick, 0);
World.setBlock(coords.x - 3, coords.y + 3, coords.z, BlockID.sky_brick, 0);
World.setBlock(coords.x - 3, coords.y + 2, coords.z, BlockID.sky_brick, 0);

World.setBlock(coords.x + 1, coords.y + 1, coords.z + 3, BlockID.goldfence, 0);
World.setBlock(coords.x - 1, coords.y + 1, coords.z + 3, BlockID.goldfence, 0);
World.setBlock(coords.x + 1, coords.y + 2, coords.z + 3, BlockID.diamondfence, 0);
World.setBlock(coords.x - 1, coords.y + 2, coords.z + 3, BlockID.diamondfence, 0);
World.setBlock(coords.x + 1, coords.y + 3, coords.z + 3, BlockID.goldfence, 0);
World.setBlock(coords.x - 1, coords.y + 3, coords.z + 3, BlockID.goldfence, 0);
World.setBlock(coords.x + 1, coords.y + 1, coords.z - 3, BlockID.goldfence, 0);
World.setBlock(coords.x - 1, coords.y + 1, coords.z - 3, BlockID.goldfence, 0);
World.setBlock(coords.x + 1, coords.y + 2, coords.z - 3, BlockID.diamondfence, 0);
World.setBlock(coords.x - 1, coords.y + 2, coords.z - 3, BlockID.diamondfence, 0);
World.setBlock(coords.x + 1, coords.y + 3, coords.z - 3, BlockID.goldfence, 0);
World.setBlock(coords.x - 1, coords.y + 3, coords.z - 3, BlockID.goldfence, 0);
World.setBlock(coords.x + 1, coords.y - 1, coords.z, 80, 0);
World.setBlock(coords.x - 1, coords.y - 1, coords.z, 80, 0);
World.setBlock(coords.x, coords.y - 2, coords.z, 80, 0);
World.setBlock(coords.x, coords.y - 1, coords.z - 1, 80, 0);
World.setBlock(coords.x, coords.y - 1, coords.z + 1, 80, 0);
}
});
