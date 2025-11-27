//Tree Lib by cube
LIBRARY({
 name: "NatureLib",
 version: 1,
 shared: true,
 api: "CoreEngine"
});
//you need tileRender
IMPORT("TileRender");
//api
function random(min, max) {
 return Math.floor(Math.random() * (max - min + 1)) + min;
}

//blocksType
Block.createSpecialType({
 base: 59,
 destroytime: 0,
 explosionres: 0,
 opaque: false,
 lightopacity: 0,
 rendertype: 1,
 destroytime: 0.5,
 sound: "grass"
}, "plantBerry");

Block.createSpecialType({
 base: 59,
 destroytime: 0,
 explosionres: 0,
 opaque: false,
 lightopacity: 0,
 rendertype: 6,
 destroytime: 0,
 sound: "grass"
}, "plant");

Block.createSpecialType({
  base: 59,
  destroytime: 0.5,
  explosionres: 0,
  opaque: false,
  lightopacity: 0,
  rendertype: 1,
  destroytime: 0,
  sound: "grass"
}, "plantClick");

Block.createSpecialType({
 base: 17,
 solid: true,
 destroytime: 2,
 explosionres: 10,
 lightopacity: 15,
 renderlayer: 2,
 translucency: 0,
 sound: "wood"
}, "wood");

Block.createSpecialType({
 destroytime: 0.2,
 explosionres: 1,
 renderallfaces: true,
 renderlayer: 1,
 lightopacity: 1,
 translucency: 0.5,
 sound: "grass"
}, "leave")

Block.createSpecialType({
 destroytime: 0.2,
 rendertype: 1,
 sound: "grass",
 destroytime: 0
}, "sapling")

Block.createSpecialType({
 rendertype: 1,
 sound: "grass",
 destroytime: 0.1,
}, "fruit")

Block.createSpecialType({
 sound: "grass",
 destroytime: 0.1,
}, "berrys")

//treeLib
let CreateTrees = {
 TREES: {},
 registerTree: function(name, treeParams) {
  if (!this.TREES[name]) {
   this.TREES[name] = treeParams
  } else {
   Logger.Log("duplucated Tree", "plantsAPI")
  }
 },
 getTree: function(name) {
  if (this.TREES[name] != undefined) {
   return this.TREES[name]
  } else {
   Logger.Log("not fount tree", "plantsAPI")
  }
 },
 createTreeForType: function(x, y, z, nameTree) {
   try{
  let tree = this.getTree(nameTree)
  if(!(tree != undefined)){
    return
  } 
  
  if(!(tree.type != undefined)) tree.type = "tree"
  
  switch (tree.type) {
   case "tree":
    this.createTreeForest(x, y, z, nameTree)
    break;
   case "treeFlower":
    this.createTreeFlower(x, y, z, nameTree)
    break;
   case "treeFruit":
    this.createTreeFruit(x, y, z, nameTree)
    break;
  }
}catch(e){
  Game.message("oh no have error" + x +","+ y + "," + "," + nameTree)
}
 },
 createTreeForest: function(x, y, z, nameTree) {
  let tree = this.TREES[nameTree]
  let rand = Math.floor(Math.random() * tree.variants.length);
  let variant = tree.variants[rand]
  var height = random(variant.minheight, variant.maxheight)
  var leaveWit = Math.floor(2 + (height / variant.leafDiv))

  let startLeave = Math.floor(height / variant.leafDivStart) + random(1, 2)

  let endLeave = Math.floor(1 + height)
  //dev mode
  if (tree.devMode != undefined && tree.devMode) {
   Game.message(JSON.stringify(variant))
   Game.message(x + "," + y + "," + z)
   Game.message("height:" + height + ",leaveWit:" + leaveWit + ",startLeave:" + startLeave + ",endLeave:" + endLeave + ",variant selector:" + rand)
  }
  //wood
  for (var yy = y; yy < y + height; yy++) {
   World.setBlock(x, yy, z, tree.blocks.wood.id, tree.blocks.wood.data);
  }
  //leaves
  for (let yl = startLeave; yl <= endLeave; yl++) {

   for (let xl = -leaveWit; xl < leaveWit; xl++) {

    for (let zl = -leaveWit; zl < leaveWit; zl++) {

     let LeaveRadius = Math.floor(3 + (Math.random() * endLeave / startLeave) * 0.1)

     let b = Math.sqrt(xl * xl + zl * zl)

     if (yl == endLeave) LeaveRadius /= 2
     if (b <= LeaveRadius) {
      this.setLeave(tree.blocks.leaf, x + xl, y + yl, z + zl)
     }
    }
   }
  }
  //spike tree
  if (variant.pike) {
   this.setSpike(tree, variant, x, y, z, endLeave)
  }
 },
 //flower block, chance
 createTreeFlower: function(x, y, z, nameTree) {
  let tree = this.TREES[nameTree]
  let rand = Math.floor(Math.random() * tree.variants.length);
  let variant = tree.variants[rand]
  var height = random(variant.minheight, variant.maxheight)
  var leaveWit = Math.floor(2 + (height / variant.leafDiv))

  let startLeave = Math.floor(height / variant.leafDivStart) + random(1, 2)

  let endLeave = Math.floor(1 + height)
  //dev mode
  if (tree.devMode != undefined && tree.devMode) {
   Game.message(JSON.stringify(variant))
   Game.message(x + "," + y + "," + z)
   Game.message("height:" + height + ",leaveWit:" + leaveWit + ",startLeave:" + startLeave + ",endLeave:" + endLeave + ",variant selector:" + rand)
  }
  //wood
  for (var yy = y; yy < y + height; yy++) {
   World.setBlock(x, yy, z, tree.blocks.wood.id, tree.blocks.wood.data);
  }
  //leaves
  for (let yl = startLeave; yl <= endLeave; yl++) {

   for (let xl = -leaveWit; xl < leaveWit; xl++) {

    for (let zl = -leaveWit; zl < leaveWit; zl++) {

     let LeaveRadius = Math.floor(3 + (Math.random() * endLeave / startLeave) * 0.1)

     let b = Math.sqrt(xl * xl + zl * zl)

     if (yl == endLeave) LeaveRadius /= 2
     if (b <= LeaveRadius) {
      if (Math.random() < variant.chanceFlower) {
       this.setLeave(tree.blocks.flower, x + xl, y + yl, z + zl)
      } else {
       this.setLeave(tree.blocks.leaf, x + xl, y + yl, z + zl)
      }
     }

    }
   }
  }

  //spike tree
  if (variant.pike) {
   this.setSpike(tree, variant, x, y, z, endLeave)
  }
 },
 createTreeFruit: function(x, y, z, nameTree) {
  let tree = this.TREES[nameTree]
  let rand = Math.floor(Math.random() * tree.variants.length);
  let variant = tree.variants[rand]
  var height = random(variant.minheight, variant.maxheight)
  var leaveWit = Math.floor(2 + (height / variant.leafDiv))

  let startLeave = Math.floor(height / variant.leafDivStart) + random(1, 2)
  let startFruit = startLeave - 1
  let endLeave = Math.floor(1 + height)
  //dev mode
  if (tree.devMode != undefined && tree.devMode) {
   Game.message(JSON.stringify(variant))
   Game.message(x + "," + y + "," + z)
   Game.message("height:" + height + ",leaveWit:" + leaveWit + ",startLeave:" + startLeave + ",endLeave:" + endLeave + ",variant selector:" + rand)
  }
  //wood
  for (var yy = y; yy < y + height; yy++) {
   World.setBlock(x, yy, z, tree.blocks.wood.id, tree.blocks.wood.data);
  }
  //leaves
  for (let yl = startLeave; yl <= endLeave; yl++) {

   for (let xl = -leaveWit; xl < leaveWit; xl++) {

    for (let zl = -leaveWit; zl < leaveWit; zl++) {

     let LeaveRadius = Math.floor(3 + (Math.random() * endLeave / startLeave) * 0.1)

     let b = Math.sqrt(xl * xl + zl * zl)

     if (yl == endLeave) LeaveRadius /= 2
     if (b <= LeaveRadius) {
      this.setLeave(tree.blocks.leaf, x + xl, y + yl, z + zl)
     }

    }
   }
  }

  for (let xl = -leaveWit; xl < leaveWit; xl++) {

   for (let zl = -leaveWit; zl < leaveWit; zl++) {

    let LeaveRadius = Math.floor(3 + (Math.random() * endLeave / startLeave) * 0.1)

    let b = Math.sqrt(xl * xl + zl * zl)

    if (b <= LeaveRadius) {
     if (Math.random() < variant.chanceFruit) {
      this.setLeave(tree.blocks.fruit, x + xl, y + startFruit, z + zl)
     }
    }

   }

  }
  //spike tree
  if (variant.pike) {
   this.setSpike(tree, variant, x, y, z, endLeave)
  }
 },
 setLeave: function(leafParams, x, y, z) {
  let blockID = World.getBlockID(x, y, z);
  if (blockID == 0 || blockID == 106) {
   World.setBlock(x, y, z, leafParams.id, leafParams.data);
  }
 },
 setSpike: function(params, variant, x, y, z, endLeave) {
  for (var ys = 1; ys <= variant.pikeRadius; ys++) {
   this.setLeaves(x, y + ys + endLeave, z, params.blocks.leaf);
  }
 }

}

/*biomes: {
    taiga: [5, 19, 32, 33],
    forest: [4, 18, 27, 28, 132, 155, 156],
    jungle: [21, 22, 23, 149, 151],
    swamp: [6, 134]
  },
  blockDirt: [
    2,
    3,
    60
    ],
  leafBlock: [18],
  
  */
let biomes = {
 taiga: [5, 19, 32, 33],
 forest: [4, 18, 27, 28, 132, 155, 156],
 jungle: [21, 22, 23, 149, 151],
 swamp: [6, 134]
}

// add easy fuctions create Berrys fruit sapling

let PlantsBlock = {
 setFruit: function(id, name, texture, dropObject, chanceGrowth, inCreativeBool) {
  IDRegistry.genBlockID(id);
  Block.createBlock(id, [
   {
    name: name,
    texture: [
	  [texture, 0]
	  ],
    inCreative: inCreativeBool
   },
   {
    name: name,
    texture: [
     [texture, 1]
     ],
    inCreative: false
      },
   {
    name: name,
    texture: [
        [texture, 2]
      	  ],
    inCreative: false
         },
  ], "fruit")
  ToolAPI.registerBlockMaterial(BlockID[id], "plant");
  Block.setShape(BlockID[id], 1 / 8, 0, 1 / 8, 7 / 8, 1, 7 / 8);
  TileRenderer.setEmptyCollisionShape(BlockID[id]);

  Block.registerDropFunction(id, function(coords, block, data) {
   if (data >= 2) {
    return [[dropObject.id, dropObject.random && dropObject.random != undefined ? random(1, dropObject.amount) : dropObject.amount, dropObject.data]]
   }
  });
  Block.setDestroyTime(BlockID[id], 0.4);
  ToolAPI.registerBlockMaterial(BlockID[id], "fibre");

  Block.registerNeighbourChangeFunction(id, function(coords, block, changeCoords, region) {
   if (region.getBlockId(coords.x, coords.y + 1, coords.z) != 0) {
    //none
   } else {
    World.destroyBlock(coords.x, coords.y, coords.z, true);
   }
  });

  Block.setRandomTickCallback(BlockID[id], function(x, y, z, id, data) {
   if (World.getBlockID(x, y + 1, z) != 0) {
    if (data < 2 && Math.random() < chanceGrowth) {
     World.setBlock(x, y, z, id, data + 1);
    }
   } else {
    World.destroyBlock(x, y, z, false);
   }
  });

  Callback.addCallback("ItemUse", function(coords, item, block, u, player) {
   if (block.id == BlockID[id] && block.data >= 2) {
    World.setBlock(coords.x, coords.y, coords.z, BlockID[id], 0);
    World.drop(coords.x + 0.5, coords.y + 1, coords.z + 0.5, dropObject.id, dropObject.random && dropObject.random != undefined ? random(1, dropObject.amount) : dropObject.amount, dropObject.data);
   }
   if (block.id == BlockID[id] && block.data < 2 && item.id == VanillaItemID.bone_meal) {
    World.setBlock(coords.x, coords.y, coords.z, BlockID[id], block.data + 1);

    Entity.setCarriedItem(player, item.id, item.count - 1, item.data);

   }
  });

 },
 setSapling: function(id, name, texture, dirtTilesObject, chanceGrowth, lightLevel, nameTree, inCreativeBool) {
  let tilesDirt = dirtTilesObject

  IDRegistry.genBlockID(id);
  Block.createBlock(id, [
   {
    name: name,
    texture: [
  	  [texture, 0]],
    inCreative: inCreativeBool
    }
  ], "sapling");
  ToolAPI.registerBlockMaterial(BlockID[id], "plant");
  Block.setShape(BlockID[id], 1 / 8, 0, 1 / 8, 7 / 8, 1, 7 / 8);
  TileRenderer.setEmptyCollisionShape(BlockID[id]);

  Block.registerPlaceFunction(BlockID[id], function(coords, item, block, player, region) {
   var place = coords.relative;
   var tile1 = World.getBlock(place.x, place.y, place.z);
   var tile2 = World.getBlock(place.x, place.y - 1, place.z);

   if (World.canTileBeReplaced(tile1.id, tile1.data) && tilesDirt[tile2.id]) {
    World.setBlock(place.x, place.y, place.z, BlockID[id], 0);
    Entity.setCarriedItem(player, item.id, item.count - 1, item.data);
   }
  });

  Block.registerDropFunction(id, function(coords, blockID) {
   return [[blockID, 1, 0]];
  });

  Block.registerNeighbourChangeFunction(id, function(coords, block, changeCoords, region) {
   if (changeCoords.y < coords.y && !tilesDirt[region.getBlockId(coords.x, coords.y - 1, coords.z)]) {
    region.destroyBlock(coords.x, coords.y, coords.z, true);
   }
  });

  Block.setRandomTickCallback(BlockID[id], function(x, y, z) {
   if (tilesDirt[World.getBlockID(x, y - 1, z)]) {
    if (Math.random() < chanceGrowth && World.getLightLevel(x, y + 1, z) >= lightLevel) {
     CreateTrees.createTreeForType(x, y, z, nameTree)
    }
   } else {
    World.destroyBlock(x, y, z, true);
   }
  });

  Callback.addCallback("ItemUse", function(coords, item, block, u, player) {
   if (block.id == BlockID[id] && item.id == VanillaItemID.bone_meal) {

    Entity.setCarriedItem(player, item.id, item.count - 1, item.data);

    if (Math.random() < chanceGrowth && World.getLightLevel(coords.x, coords.y + 1, coords.z) >= lightLevel) {
     CreateTrees.createTreeForType(coords.x, coords.y, coords.z, nameTree)
    }
   }
  });
 },
 setBerryBlock: function(id, name, texture, dropObject, chanceGrowth, tilesDirt, lightLevel, inCreativeBool) {
  IDRegistry.genBlockID(id);
  Block.createBlock(id, [
   {
    name: name,
    texture: [
	  [texture, 0]
	  ],
    inCreative: inCreativeBool
   },
   {
    name: name,
    texture: [
     [texture, 1]
     ],
    inCreative: false
      },
   {
    name: name,
    texture: [
        [texture, 2]
      	  ],
    inCreative: false
         },
  ], "berrys")
  ToolAPI.registerBlockMaterial(BlockID[id], "plant");
  Block.setShape(BlockID[id], 1 / 8, 0, 1 / 8, 7 / 8, 7 / 8, 7 / 8);
  Block.registerDropFunction(id, function(coords, block, data) {
   if (data >= 2) {
    return [[dropObject.id, dropObject.random && dropObject.random != undefined ? random(1, dropObject.amount) : dropObject.amount, dropObject.data]]
   }
  });
  Block.setDestroyTime(BlockID[id], 0.4);
  ToolAPI.registerBlockMaterial(BlockID[id], "fibre");

  Block.registerPlaceFunction(BlockID[id], function(coords, item, block, player, region) {
   var place = coords.relative;
   var tile1 = World.getBlock(place.x, place.y, place.z);
   var tile2 = World.getBlock(place.x, place.y - 1, place.z);

   if (World.canTileBeReplaced(tile1.id, tile1.data) && tilesDirt[tile2.id]) {
    World.setBlock(place.x, place.y, place.z, BlockID[id], 0);
    Entity.setCarriedItem(player, item.id, item.count - 1, item.data);
   }
  });

  Block.registerNeighbourChangeFunction(id, function(coords, block, changeCoords, region) {
   if (changeCoords.y < coords.y && !tilesDirt[region.getBlockId(coords.x, coords.y - 1, coords.z)]) {
    region.destroyBlock(coords.x, coords.y, coords.z, true);
   }
  });


  Block.setRandomTickCallback(BlockID[id], function(x, y, z, id, data) {
   if (tilesDirt[World.getBlockID(x, y - 1, z)]) {
    if (Math.random() < chanceGrowth && World.getLightLevel(x, y + 1, z) >= lightLevel && data < 2) {
     World.setBlock(x, y, z, id, data + 1);
    }
   } else {
    World.destroyBlock(x, y, z, true);
   }
  });

  Callback.addCallback("ItemUse", function(coords, item, block, u, player) {
   if (block.id == BlockID[id] && block.data >= 2) {
    World.setBlock(coords.x, coords.y, coords.z, BlockID[id], 0);
    World.drop(coords.x + 0.5, coords.y + 1, coords.z + 0.5, dropObject.id, dropObject.random && dropObject.random != undefined ? random(1, dropObject.amount) : dropObject.amount, dropObject.data);
   }
   if (block.id == BlockID[id] && block.data < 2 && item.id == VanillaItemID.bone_meal) {
    World.setBlock(coords.x, coords.y, coords.z, BlockID[id], block.data + 1);

    Entity.setCarriedItem(player, item.id, item.count - 1, item.data);

   }
  });

 },
 setBlockCrop: function(id, name, texture, chanceGrowth, tilesDirt, lightLevel, itemSeed, BlockObject, inCreativeBool) {
  IDRegistry.genBlockID(id);
  Block.createBlock(id, [
   {
    name: name,
    texture: [
  	  [texture, 0]
  	  ],
    inCreative: inCreativeBool
     },
   {
    name: name,
    texture: [
       [texture, 1]
       ],
    inCreative: false
        },
   {
    name: name,
    texture: [
          [texture, 2]
        	  ],
    inCreative: false
           },
    ], "plantBerry")
  TileRenderer.setEmptyCollisionShape(BlockID[id])

  Block.registerDropFunction(id, function(coords, blockID) {
   return [[itemSeed.id, 1, itemSeed.data]]
  });
  Block.setShape(BlockID[id], 1 / 8, 0, 1 / 8, 7 / 8, 7 / 8, 7 / 8);
  Block.setDestroyTime(BlockID[id], 0.4);
  ToolAPI.registerBlockMaterial(BlockID[id], "fibre");

  Block.registerPlaceFunction(BlockID[id], function(coords, item, block, player, region) {
   var place = coords.relative;
   var tile1 = World.getBlock(place.x, place.y, place.z);
   var tile2 = World.getBlock(place.x, place.y - 1, place.z);

   if (World.canTileBeReplaced(tile1.id, tile1.data) && tilesDirt[tile2.id]) {
    World.setBlock(place.x, place.y, place.z, BlockID[id], 0);
    Entity.setCarriedItem(player, item.id, item.count - 1, item.data);
   }
  });

  Block.registerNeighbourChangeFunction(id, function(coords, block, changeCoords, region) {
   if (changeCoords.y < coords.y && !tilesDirt[region.getBlockId(coords.x, coords.y - 1, coords.z)]) {
    region.destroyBlock(coords.x, coords.y, coords.z, true);
   }
  });


  Block.setRandomTickCallback(BlockID[id], function(x, y, z, id, data) {
   if (tilesDirt[World.getBlockID(x, y - 1, z)]) {
    if (Math.random() < chanceGrowth && World.getLightLevel(x, y + 1, z) >= lightLevel) {
     if (data < 2) {
      World.setBlock(x, y, z, id, data + 1);
     }
     if (data == 2) {
      World.setBlock(x, y, z, BlockObject.id, BlockObject.data);
     }
    }
   } else {
    World.destroyBlock(x, y, z, true);
   }
  });
  
  Callback.addCallback("ItemUse", function(coords, item, block, u, player) {
    if (block.id == BlockID[id] && block.data < 2 && item.id == VanillaItemID.bone_meal) {
      World.setBlock(coords.x, coords.y, coords.z, BlockID[id], block.data + 1);
  
      Entity.setCarriedItem(player, item.id, item.count - 1, item.data);
  
    }
  });
 },
 setCrop: function(id, name, texture, chanceGrowth, seed, drop, lightLevel, tilesDirt, inCreativeBool) {
  IDRegistry.genBlockID(id);
  Block.createBlock(id, [
   {
    name: name,
    texture: [
     	  [texture, 0]
     	  ],
    inCreative: inCreativeBool
        },
   {
    name: name,
    texture: [
          [texture, 1]
          ],
    inCreative: false
           },
   {
    name: name,
    texture: [
             [texture, 2]
           	  ],
    inCreative: false
              },
       ], "plant")

  TileRenderer.setEmptyCollisionShape(BlockID[id])
  
  Block.registerPlaceFunction(BlockID[id], function(coords, item, block, player, region) {
   var place = coords.relative;
   var tile1 = World.getBlock(place.x, place.y, place.z);
   var tile2 = World.getBlock(place.x, place.y - 1, place.z);
  
   if (World.canTileBeReplaced(tile1.id, tile1.data) && tilesDirt[tile2.id]) {
    World.setBlock(place.x, place.y, place.z, BlockID[id], 0);
    Entity.setCarriedItem(player, item.id, item.count - 1, item.data);
   }
  });
  
  Block.registerDropFunction(id, function(coords, block, data) {
   if (data < 2) {
    return [[seed.id, 1, seed.data]]
   }
   if (data >= 2) {
    return [[drop.id, drop.random && drop.random != undefined ? random(1, drop.amount) : drop.amount, drop.data], [seed.id, seed.random && seed.random != undefined ? random(1, seed.amount) : seed.amount, seed.data]]
   }
  });
  Block.registerNeighbourChangeFunction(id, function(coords, block, changeCoords, region) {
   if (changeCoords.y < coords.y && !tilesDirt[region.getBlockId(coords.x, coords.y - 1, coords.z)]) {
    region.destroyBlock(coords.x, coords.y, coords.z, false);
   }
  });

  Block.setRandomTickCallback(BlockID[id], function(x, y, z, id, data) {
   if (tilesDirt[World.getBlockID(x, y - 1, z)]) {
    if (Math.random() < chanceGrowth && World.getLightLevel(x, y + 1, z) >= lightLevel) {
     if (data < 2) {
      World.setBlock(x, y, z, id, data + 1);
     }
    }
   } else {
    World.destroyBlock(x, y, z, false);
   }
  });
  
  Callback.addCallback("ItemUse", function(coords, item, block, u, player) {
    if (block.id == BlockID[id] && block.data < 2 && item.id == VanillaItemID.bone_meal) {
      World.setBlock(coords.x, coords.y, coords.z, BlockID[id], block.data + 1);
  
      Entity.setCarriedItem(player, item.id, item.count - 1, item.data);
  
    }
  });
 }, 
 setCropClick: function(id, name, texture, chanceGrowth, seed, dropObject, lightLevel, tilesDirt, deletData,inCreativeBool) {
   IDRegistry.genBlockID(id);
   Block.createBlock(id, [
     {
       name: name,
       texture: [
      	  [texture, 0]
      	  ],
       inCreative: inCreativeBool
         },
     {
       name: name,
       texture: [
           [texture, 1]
           ],
       inCreative: false
            },
     {
       name: name,
       texture: [
              [texture, 2]
            	  ],
       inCreative: false
               },
        ], "plantClick")
 
   TileRenderer.setEmptyCollisionShape(BlockID[id])
 
   Block.registerPlaceFunction(BlockID[id], function(coords, item, block, player, region) {
     var place = coords.relative;
     var tile1 = World.getBlock(place.x, place.y, place.z);
     var tile2 = World.getBlock(place.x, place.y - 1, place.z);
 
     if (World.canTileBeReplaced(tile1.id, tile1.data) && tilesDirt[tile2.id]) {
       World.setBlock(place.x, place.y, place.z, BlockID[id], 0);
       Entity.setCarriedItem(player, item.id, item.count - 1, item.data);
     }
   });
 
   Block.registerDropFunction(id, function(coords, block, data) {
     
       return [[seed.id, 1, seed.data]]
    
   });
   Block.registerNeighbourChangeFunction(id, function(coords, block, changeCoords, region) {
     if (changeCoords.y < coords.y && !tilesDirt[region.getBlockId(coords.x, coords.y - 1, coords.z)]) {
       region.destroyBlock(coords.x, coords.y, coords.z, false);
     }
   });
 
   Block.setRandomTickCallback(BlockID[id], function(x, y, z, id, data) {
     if (tilesDirt[World.getBlockID(x, y - 1, z)]) {
       if (Math.random() < chanceGrowth && World.getLightLevel(x, y + 1, z) >= lightLevel) {
         if (data < 2) {
           World.setBlock(x, y, z, id, data + 1);
         }
       }
     } else {
       World.destroyBlock(x, y, z, false);
     }
   });
   
   Callback.addCallback("ItemUse", function(coords, item, block, u, player) {
     if (block.id == BlockID[id] && block.data >= 2) {
       World.setBlock(coords.x, coords.y, coords.z, BlockID[id], block.data - deletData);
       World.drop(coords.x + 0.5, coords.y + 1, coords.z + 0.5, dropObject.id, dropObject.random && dropObject.random != undefined ? random(1, dropObject.amount) : dropObject.amount, dropObject.data);
     }
     if (block.id == BlockID[id] && block.data < 2 && item.id == VanillaItemID.bone_meal) {
       World.setBlock(coords.x, coords.y, coords.z, BlockID[id], block.data + 1);
   
       Entity.setCarriedItem(player, item.id, item.count - 1, item.data);
   
     }
   });
 }
}


EXPORT("CreateTrees", CreateTrees);
EXPORT("biomes", biomes)
EXPORT('PlantsBlock', PlantsBlock)