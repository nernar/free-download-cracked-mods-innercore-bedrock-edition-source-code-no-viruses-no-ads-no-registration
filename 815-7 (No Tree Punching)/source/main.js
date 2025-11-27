/*
BUILD INFO:
  dir: dev
  target: main.js
  files: 5
*/



// file: header.js

IMPORT("BlockEngine");




// file: main.js

ItemRegistry.createItem("flint_shard", {name: "Flint Shard", icon: "flint_shard"});

Item.registerUseFunctionForID(VanillaItemID.flint, function(cords, item, block, player){
  if(block.id === VanillaBlockID.stone) {
    let count = 2;
    
    Entity.setCarriedItem(player, item.id, item.count - 1, item.data);
    
    if(Math.random() < __config__.getFloat('flint_knapping.consume_chance'))
      count--;
    if(count === 1 && Math.round() < __config__.getFloat('flint_knapping.success_chance'))
      count++;
    
    World.drop(cords.relative.x, cords.relative.y, cords.relative.z, ItemID.flint_shard, count, 0);
  }
});

Block.registerDropFunctionForID(VanillaBlockID.log, function(cords, blockID, blockData, digLv){
	if(digLv !== 0){
		return [[blockID, 1,  blockData]]
	}else{
		return []
	}
}, 1)




// file: plant.js

ItemRegistry.createItem("plant_fiber", {name: "Plant Fiber", icon: "plant_fiber"});
ItemRegistry.createItem("plant_string", {name: "Plant String", icon: "plant_string"});

Block.registerDropFunctionForID(VanillaBlockID.tallgrass, function(a, b, c, d, e, item){
  const drop = [];
  
  if(item.id === ItemID.flint_knife){
    if(Math.random() < 0.5)
      drop.push([ItemID.plant_fiber, 1, 0])
  }
  
  if(Math.random() < 0.4)
    drop.push([VanillaItemID.wheat_seeds, 1, 0])
  
  return drop
});




// file: tools.js

ItemRegistry.addToolMaterial("flint", {
  durability: 60,
  level: 1,
  efficiency: 1,
  damage: 1,
  enchantability: 15
  // repairMaterial: 
});

ItemRegistry.createTool("flint_knife", {name: "Flint Knife", icon: "flint_knife", material: "flint" }, ToolType.SWORD);
ItemRegistry.createTool("flint_shovel", { name: "Flint Shovel", icon: "flint_shovel", material: "flint" }, ToolType.SHOVEL);
ItemRegistry.createTool("flint_pickaxe", { name: "Flint Pickaxe", icon: "flint_pickaxe", material: "flint" }, ToolType.PICKAXE);
ItemRegistry.createTool("flint_axe", { name: "Flint Axe", icon: "flint_axe", material: "flint" }, ToolType.AXE);
ItemRegistry.createTool("flint_hoe", { name: "Flint Hoe", icon: "flint_hoe", material: "flint" }, ToolType.HOE);

Recipes.addShaped({id: ItemID.flint_knife, count: 1, data: 0}, [
  "+",
  "|"
], [
  '+', ItemID.flint_shard, 0,
  '|', VanillaItemID.stick, 0
]);

Recipes.addShaped({id: ItemID.flint_knife, count: 1, data: 0}, [
  "+#",
  " |"
], [
  '+', ItemID.flint_shard, 0,
  '|', VanillaItemID.stick, 0,
  '#', ItemID.plant_string, 0
]);

Recipes.addShaped({id: ItemID.flint_shovel, count: 1, data: 0}, [
  " ++",
  " #+",
  "/  "
], [
  '+', ItemID.flint_shard, 0,
  '#', ItemID.plant_string, 0,
  '/', VanillaItemID.stick, 0
])

Recipes.addShaped({id: ItemID.flint_pickaxe, count: 1, data: 0}, [
  "+#+",
  "+|+",
  " | "
], [
  '+', ItemID.flint_shard, 0,
  '#', ItemID.plant_string, 0,
  '|', VanillaItemID.stick, 0
])

Recipes.addShaped({id: ItemID.flint_hoe, count: 1, data: 0}, [
  "#++",
  "|  ",
  "|  "
], [
  '+', ItemID.flint_shard, 0,
  '#', ItemID.plant_string, 0,
  '|', VanillaItemID.stick, 0
])




// file: loose_rocks.js

BlockRegistry.createBlock("loose_rock", [
  {name: "Stone Loose Rock", texture: [["stone", 0]], inCreative: true}
], {base: 1, destroytime: 2, renderlayer: 2, sound: "stone"});

Block.setBlockShape(BlockID.loose_rock, {x: 6/16, y: 0, z: 6/16}, {x: 10/16, y: 1/16, z: 10/16}, 0);

World.addGenerationCallback('GenerateChunk', function(chunkX, chunkY, random){
  const x = random.nextInt(16) + chunkX * 16
  const z = random.nextInt(16) + chunkY * 16
  const y = GenerationUtils.findHighSurface(x, z)
  
  for(let i = y; i > 0; i--){
    const item = World.getBlock(x, i, z);
    
    if(item.id === VanillaBlockID.stone){
      World.setBlock(x, y, z, BlockID.loose_rock, 0);
      Debug.m('placed block at '+x+', '+y+', '+z)
      return;
    }
  }
})




