function getChace(biome, array) {
  var chace = array.all != undefined && array.all ? array.chance : array[biome] || 0;
  return chace / 100
}

let fuctionsNature = {
  Seeds: [],
  addDropSeeds: function(idItem) {
    this.Seeds.push(idItem)
  },
  getDropsSeeds: function() {
    return this.Seeds
  },
  setBiomes: function(biomeArray, chace) {
    let object = {}
    for(var i = 0; i < biomeArray.length; i++){
      object[biomeArray[i]] = chace
    }
    
    return object
  },
  setTstItem: function(id, treeName) {
    IDRegistry.genItemID(id)
    Item.createItem(id, id + treeName, {
      name: id
    }, {
      stack: 1
    });

    Item.registerUseFunction(ItemID[id], function(coords, item, block, player) {

      CreateTrees.createTreeForType(coords.x, coords.y + 1, coords.z, treeName)

    })
  },
  
  setSeed: function(id, name, texture, idBlock, tilesDirt) {
    IDRegistry.genItemID(id);
    Item.createItem(id, name, { name: texture, meta: 0 }, {});
    Item.registerUseFunction(ItemID[id], function(coords, item, block, player) {

      var place = coords.relative;
      var tile1 = World.getBlock(place.x, place.y, place.z);
      var tile2 = World.getBlock(place.x, place.y - 1, place.z);

      if (World.canTileBeReplaced(tile1.id, tile1.data) && tilesDirt[tile2.id]) {
        World.setBlock(place.x, place.y, place.z, BlockID[idBlock], 0);
        Entity.setCarriedItem(player, item.id, item.count - 1, item.data);
      }
    });
    this.addDropSeeds(ItemID[id])
  },
  createFoodBerrySeed: function(id, name, texture, idBlock, tilesDirt, food) {
    IDRegistry.genItemID(id);
    Item.createFoodItem(id, name, { name: texture, meta: 0 }, { food: food });
    Item.registerUseFunction(ItemID[id], function(coords, item, block, player) {

      var place = coords.relative;
      var tile1 = World.getBlock(place.x, place.y, place.z);
      var tile2 = World.getBlock(place.x, place.y - 1, place.z);

      if (World.canTileBeReplaced(tile1.id, tile1.data) && tilesDirt[tile2.id]) {
        World.setBlock(place.x, place.y, place.z, BlockID[idBlock], 0);
        Entity.setCarriedItem(player, item.id, item.count - 1, item.data);
      }
    });
  },
  setFood: function(id, name, texture, food) {
    IDRegistry.genItemID(id);
    Item.createFoodItem(id, name, { name: texture, meta: 0 }, { food: food });
  },
  setCraftSapling: function(IdSapling, fruit) {
    Recipes.addShaped({
      id: BlockID[IdSapling],
      count: 1,
      data: 0
    }, [
  	"   ",
  	"as ",
  	"   "
  ], ['s', 6, 0, 'a', fruit, 0]);

  },
  setCraftSeed: function(seed, fruit) {
    Recipes.addShaped({
      id: ItemID[seed],
      count: 2,
      data: 0
    }, [
     	"   ",
     	" s ",
     	"   "
     ], ['s', fruit, 0]);
  },
  setGenerationBerry: function(biomeList, dirtTiles, maxheight, block, amount) {
    Callback.addCallback("GenerateChunk", function(chunkX, chunkZ, random) {
      let biome = World.getBiome((chunkX + 0.5) * 16, (chunkZ + 0.5) * 16)
    
      if (random.nextDouble() < getChace(biome, biomeList)) {
        let count = 1 + Math.floor(Math.random() * amount)
        for (let i = 0; i < count; i++) {
          let coords = GenerationUtils.findSurface(chunkX*16 + Math.floor(Math.random() * 16), maxheight, chunkZ*16 + Math.floor(Math.random() * 16));
    
          if (dirtTiles[World.getBlockID(coords.x, coords.y, coords.z)]) {
    
            coords.y++;
    
            World.setBlock(coords.x, coords.y, coords.z, BlockID[block], 0);
    
            if (debug) {
              Game.message(coords.x + "," + coords.y + "," + coords.z + ",biome:" + World.getBiome((chunkX + 0.5) * 16, (chunkZ + 0.5) * 16) + "," + block + ",chance:" + getChace(biome, biomeList))
            }
          }
        }
      }
    })
  },
  setGenerationTree: function(biomeList, dirtTiles, maxheight, nameTree, amount) {
    Callback.addCallback("GenerateChunk", function(chunkX, chunkZ,random) {
      let biome = World.getBiome((chunkX + 0.5) * 16, (chunkZ + 0.5) * 16)
      
      if(random.nextDouble() < getChace(biome,biomeList)){
        let count = 1 + Math.floor(Math.random() * amount)
        for (let i = 0; i < count; i++) {
          let coords = GenerationUtils.findSurface(chunkX*16 + Math.floor(Math.random() * 16), maxheight, chunkZ*16 + Math.floor(Math.random() * 16));
          
          if (dirtTiles[World.getBlockID(coords.x, coords.y, coords.z)]) {
          
            coords.y++;
          
            CreateTrees.createTreeForType(coords.x, coords.y, coords.z, nameTree)
          
            if (debug) {
              Game.message(coords.x + "," + coords.y + "," + coords.z + ",biome:" + World.getBiome((chunkX + 0.5) * 16, (chunkZ + 0.5) * 16) + "," + nameTree + ",chance:" + getChace(biome,biomeList))
            }
          }
        }
      }
    })
  },
  setGardenBlock: function(id, name, inCreativeBool, tilesDirt) {
  IDRegistry.genBlockID(id);
  Block.createBlock(id, [
    {
      name: name,
      texture: [
	  [name, 0]
	  ],
      inCreative: inCreativeBool
   }
  ], "gander")
  ToolAPI.registerBlockMaterial(BlockID[id], "plant");
  TileRenderer.setEmptyCollisionShape(BlockID[id])
  Block.registerDropFunction(id, function(coords, block, data) {

    if (Math.random() < 0.7) {
      let drop = fuctionsNature.getDropsSeeds()
      return [[drop[Math.floor(Math.random() * drop.length)], Math.floor(Math.random() * 10), 0]]
    }


  });
  Block.setDestroyTime(BlockID[id], 0.8);
  ToolAPI.registerBlockMaterial(BlockID[id], "fibre");
  Block.registerNeighbourChangeFunction(id, function(coords, block, changeCoords, region) {
    if (changeCoords.y < coords.y && !tilesDirt[region.getBlockId(coords.x, coords.y - 1, coords.z)]) {
      region.destroyBlock(coords.x, coords.y, coords.z, false);
    }
  });
}

}