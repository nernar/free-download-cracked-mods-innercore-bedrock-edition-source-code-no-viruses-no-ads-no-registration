IDRegistry.genBlockID("cloudWool"); 
Block.createBlock("cloudWool", [
    {name: "Cloudwool", texture: [["cloudwool_block", 0]],inCreative: true}], BLOCK_TYPE_ADIRT);
ToolAPI.registerBlockMaterial(BlockID.cloudWool, "cloth", 0, true);

IDRegistry.genBlockID("TwigsAther");
Block.createBlockWithRotation("TwigsAther", [
    {name: "Stick Skyroot", texture: [["skyroot_twigs", 0]], inCreative: true},
    {name: "Stick Skyroot", texture: [["skyroot_twigs", 0]], inCreative: false},
    {name: "Stick Skyroot", texture: [["skyroot_twigs", 0]], inCreative: false},
    {name: "Stick Skyroot", texture: [["skyroot_twigs", 0]], inCreative: false}
], BLOCK_TYPE_ROCKS);
twigs = new RenderMesh();
Twigsrender = new ICRender.Model();
FixedRotateble(BlockID.TwigsAther, [0, 1, 2, 3], {texture:"skyroot_twigs", meta:0}, {variable: twigs, name: "twigs"}, Twigsrender);

Callback.addCallback('BuildBlock', function (coords, block, player) {
if (block.id == BlockID.TwigsAther) {
var region = BlockSource.getDefaultForActor(player);
World.destroyBlock(coords.x, coords.y, coords.z);
region.setBlock(coords.x, coords.y, coords.z, BlockID.TwigsAther, randomInt(0, 3));
}
});  

Block.registerDropFunction("TwigsAther", function(coords, blockID){
    return [[ItemID.stickSkyroot, 1, 0]] 
});

IDRegistry.genBlockID("RocksAther");
Block.createBlockWithRotation("RocksAther", [
    {name: "Holystone", texture: [["holystone", 0]], inCreative: true},
    {name: "Holystone", texture: [["holystone", 0]], inCreative: false},
    {name: "Holystone", texture: [["holystone", 0]], inCreative: false},
    {name: "Holystone", texture: [["holystone", 0]], inCreative: false}
], BLOCK_TYPE_ROCKS);
rock = new RenderMesh();
Rockrender = new ICRender.Model();
FixedRotateble(BlockID.RocksAther, [0, 1, 2, 3], {texture:"holystone", meta:0}, {variable: rock, name: "rock"}, Rockrender);

Callback.addCallback('BuildBlock', function (coords, block, player) {
if (block.id == BlockID.RocksAther) {
var region = BlockSource.getDefaultForActor(player);
World.destroyBlock(coords.x, coords.y, coords.z);
region.setBlock(coords.x, coords.y, coords.z, BlockID.RocksAther, randomInt(0, 3));
}
});  

Block.registerDropFunction("RocksAther", function(coords, blockID){
    return [[BlockID.Holystone, 1, 0]] 
});

Callback.addCallback("GenerateCustomDimensionChunk", function(chunkX, chunkZ, random, dimensionId){
if (dimensionId != Aether.id) return;
let coords = GenerationUtils.randomCoords(chunkX, chunkZ);
  coords = GenerationUtils.findSurface(coords.x, 128, coords.z);
  if (coords.y < 45) return;
   for(let i=0; i<randomInt(20, 21); i++){
 if(World.getBlockID(coords.x,coords.y,coords.z)==BlockID.grassblockAether){
  if(random.nextFloat() < .80){  
World.setBlock(coords.x,coords.y+1,coords.z, BlockID.RocksAther, randomInt(0, 3)); 
        } else {
World.setBlock(coords.x,coords.y+1,coords.z, BlockID.TwigsAther, randomInt(0, 3));
        }             
    }
}});

IDRegistry.genBlockID("CrystalAther");
Block.createBlockWithRotation("CrystalAther", [
    {name: "Ice stone", texture: [["crude_scatterglass", 0]], inCreative: true},
    {name: "Ice stone", texture: [["crude_scatterglass", 0]], inCreative: false},
    {name: "Ice stone", texture: [["crude_scatterglass", 0]], inCreative: false},
    {name: "Ice stone", texture: [["crude_scatterglass", 0]], inCreative: false}
], BLOCK_TYPE_DECORATIVE);
crystal = new RenderMesh();
Crystalrender = new ICRender.Model();
FixedRotateble(BlockID.CrystalAther, [0, 1, 2, 3], {texture:"crude_scatterglass", meta:0}, {variable: crystal, name: "crystal"}, Crystalrender);

Callback.addCallback('BuildBlock', function (coords, block, player) {
if (block.id == BlockID.CrystalAther) {
var region = BlockSource.getDefaultForActor(player);
World.destroyBlock(coords.x, coords.y, coords.z);
region.setBlock(coords.x, coords.y + 1, coords.z, BlockID.CrystalAther, randomInt(0, 3));
}
});  

Block.registerDropFunction("CrystalAther", function(coords, blockID){
    return [];
});

Callback.addCallback("GenerateCustomDimensionChunk", function(chunkX, chunkZ, random, dimensionId){
if (dimensionId != Aether.id) return;
 if(Math.random() < 0.004){
let coords = GenerationUtils.randomCoords(chunkX, chunkZ);
  coords = GenerationUtils.findSurface(coords.x, 98, coords.z);
  if (coords.y < 45) return;
   for(let i=0; i<randomInt(0, 3); i++){
 if(World.getBlockID(coords.x,coords.y,coords.z)==BlockID.quickSkyroot){ 
World.setBlock(coords.x,coords.y+1,coords.z, BlockID.CrystalAther, randomInt(0, 3));     
    }
}
}});

IDRegistry.genBlockID("ambrosiumTorch");
Block.createBlock("ambrosiumTorch", [
    {name: "Aether Torch", texture:[["aetherbookshelf", 1], ["ambrosium_torch", 1], ["ambrosium_torch", 0]],inCreative: false}], BLOCK_LIGHT);
Block.setBlockShape(BlockID.ambrosiumTorch, {x: 0.45, y: 0, z: 0.45}, {x: 0.55, y: 0.6, z: 0.55})   
    
IDRegistry.genItemID("ambrosiumTorch");
Item.createItem("ambrosiumTorch", "Aether Torch", {name: "ambrosium_torch"});    

Item.registerUseFunction("ambrosiumTorch", function(coords, item, block,  player){
var region = BlockSource.getDefaultForActor(player);
    var place = coords.relative;
   if(GenerationUtils.isTransparentBlock(region.getBlockId(place.x,place.y-1,place.z))){ 
        region.setBlock(place.x, place.y, place.z, BlockID.ambrosiumTorch);  
         Entity.setCarriedItem(player, item.id, item.count - 1, item.data);
    } 
});

Recipes.addShaped({id: BlockID.ambrosiumTorch, count: 1, data: 0}, [
    "a",
    "b",
], ['a', ItemID.Ambrosium, 0, 'b', ItemID.stickSkyroot, 0]);

IDRegistry.genBlockID("boockselfAether");
Block.createBlockWithRotation("boockselfAether", [
{name: "Aether Boockself", texture: [["aetherbookshelf", 1], ["aetherbookshelf", 1], ["aetherbookshelf", 0], ["aetherbookshelf", 0], ["aetherbookshelf", 0], ["aetherbookshelf", 0]], inCreative: true}], "opaque");
ToolAPI.registerBlockMaterial(BlockID.boockselfAether, "wood", 0, true);

Recipes.addShaped({id: BlockID.boockselfAether, count: 3, data: 0}, [
    "xxx",
    "ccc",
    "xxx"
], ['c', 340, 0, 'x', BlockID.plankSkyroot, 0]);

IDRegistry.genBlockID("presentAether");
Block.createBlockWithRotation("presentAether", [
{name: "Aether Present", texture: [["present", 0], ["present", 1], ["present", 0], ["present", 0], ["present", 0], ["present", 0]], inCreative: true}], "opaque");
ToolAPI.registerBlockMaterial(BlockID.presentAether, "wood", 0, true);

var PRESENT_RANDOM_DROP = [
    {chance: 40, id: ItemID.candyCane, data: 0},
    {chance: 38, id: ItemID.candyCorn, data: 0},
    {chance: 21, id: ItemID.zaniteGemstone, data: 0},
];

function getPresentDropItem(){
    var total = 0;
    for (var i in PRESENT_RANDOM_DROP){
        total += PRESENT_RANDOM_DROP[i].chance;
    }
    var random = Math.random() * total * 1.4;
    var current = 0;
    for (var i in PRESENT_RANDOM_DROP){
        var drop = PRESENT_RANDOM_DROP[i];
        if (current < random && current + drop.chance > random){
            return drop;
        }
        current += drop.chance;
    }    
    return {id: ItemID.ambrosiumTorch, data: 0};
}

Block.registerDropFunction("presentAether", function(coords,item, block){
var region = BlockSource.getCurrentWorldGenRegion();
 var drop = getPresentDropItem();
    region.drop(coords.relative.x + 0.5, coords.relative.y + 0.1, coords.relative.z + 0.5, drop.id, 1, drop.data);
    item.id--;
    if(!item.count){item.id = 0;}
        return drop;    
});

/*IDRegistry.genBlockID("ladderSkyroot");
Block.createBlock("ladderSkyroot", [
    {name: "Skyroot ladder", texture: [["skyroot_ladder", 0]],inCreative: true}], BLOCK_TYPE_Ladder);
ToolAPI.registerBlockMaterial(BlockID.ladderSkyroot, "wood", 0, true);*/

IDRegistry.genBlockID("pillarHolystone");
Block.createBlock("pillarHolystone", [
    {name: "Holystone pillar", texture: [["holystone", 0], ["holystone_base_top", 0], ["holystone_pillar", 0]],inCreative: true}], "opaque");
ToolAPI.registerBlockMaterial(BlockID.pillarHolystone, "stone", 2, true);

IDRegistry.genBlockID("fenceHolystone");
Block.createBlock("fenceHolystone", [
    {name: "Holystone Wall", texture: [["holystone", 0]], inCreative: true}
], BLOCK_TYPE_FENCE_STONE);

IDRegistry.genBlockID("basebricksHolystone");
Block.createBlock("basebricksHolystone", [
    {name: "Holystone base bricks", texture: [["holystone_base_bricks", 0]],inCreative: true}], "opaque");
ToolAPI.registerBlockMaterial(BlockID.basebricksHolystone, "stone", 2, true);

IDRegistry.genBlockID("basebricksHolystoneS");
Block.createBlock("basebricksHolystoneS", [
    {name: "Holystone base bricks Slab", texture: [["holystone_base_bricks", 0]], inCreative: true}
]);
ToolAPI.registerBlockMaterial(BlockID.basebricksHolystoneS, "stone", 2, true);
TileRenderer.makeSlab(BlockID.basebricksHolystoneS, BlockID.basebricksHolystone);

IDRegistry.genBlockID("stairsbasebricksH");
Block.createBlock("stairsbasebricksH", [
    {name: "Holystone base bricks Stairs", texture: [["holystone_base_bricks", 0]], inCreative: true}
], BLOCK_TYPE_STAIRS_STONE);

IDRegistry.genBlockID("basepillarHolystone");
Block.createBlock("basepillarHolystone", [
    {name: "Holystone base pillar", texture: [["holystone_base_bricks", 0], ["holystone_base_top", 0], ["holystone_basepillar", 0]],inCreative: true}], "opaque");
ToolAPI.registerBlockMaterial(BlockID.basepillarHolystone, "stone", 2, true);

IDRegistry.genBlockID("capstonebricksHolystone");
Block.createBlock("capstonebricksHolystone", [
    {name: "Holystone capstone bricks", texture: [["holystone_capstone_bricks", 0]],inCreative: true}], "opaque");
ToolAPI.registerBlockMaterial(BlockID.capstonebricksHolystone, "stone", 2, true);

IDRegistry.genBlockID("capstonebricksHolystoneS");
Block.createBlock("capstonebricksHolystoneS", [
    {name: "Holystone capstone bricks Slab", texture: [["holystone_capstone_bricks", 0]], inCreative: true}
]);
ToolAPI.registerBlockMaterial(BlockID.capstonebricksHolystoneS, "stone", 2, true);
TileRenderer.makeSlab(BlockID.capstonebricksHolystoneS, BlockID.capstonebricksHolystone);

IDRegistry.genBlockID("stairscapstonebricksH");
Block.createBlock("stairscapstonebricksH", [
    {name: "Holystone capstone bricks Stairs", texture: [["holystone_capstone_bricks", 0]], inCreative: true}
], BLOCK_TYPE_STAIRS_STONE);

IDRegistry.genBlockID("capstonepillarHolystone");
Block.createBlock("capstonepillarHolystone", [
    {name: "Holystone capstone pillar", texture: [["holystone_capstone_bricks", 0], ["holystone_base_top", 0], ["holystone_capstone_pillar", 0]],inCreative: true}], "opaque");
ToolAPI.registerBlockMaterial(BlockID.capstonepillarHolystone, "stone", 2, true);

IDRegistry.genBlockID("flagstonebricksHolystone");
Block.createBlock("flagstonebricksHolystone", [
    {name: "Holystone flagstone bricks", texture: [["holystone_flagstones", 0]],inCreative: true}], "opaque");
ToolAPI.registerBlockMaterial(BlockID.flagstonebricksHolystone, "stone", 2, true);

IDRegistry.genBlockID("flagstonebricksHolystoneS");
Block.createBlock("flagstonebricksHolystoneS", [
    {name: "Holystone flagstone bricks Slab", texture: [["holystone_flagstones", 0]], inCreative: true}
]);
ToolAPI.registerBlockMaterial(BlockID.flagstonebricksHolystoneS, "stone", 2, true);
TileRenderer.makeSlab(BlockID.flagstonebricksHolystoneS, BlockID.flagstonebricksHolystone);

IDRegistry.genBlockID("stairsflagstonebricksH");
Block.createBlock("stairsflagstonebricksH", [
    {name: "Holystone flagstone bricks Stairs", texture: [["holystone_flagstones", 0]], inCreative: true}
], BLOCK_TYPE_STAIRS_STONE);

IDRegistry.genBlockID("headstoneHolystone");
Block.createBlock("headstoneHolystone", [
    {name: "Holystone headstone", texture: [["holystone_headstone", 0]],inCreative: true}], "opaque");
ToolAPI.registerBlockMaterial(BlockID.headstoneHolystone, "stone", 3, true);

IDRegistry.genBlockID("headstoneHolystoneS");
Block.createBlock("headstoneHolystoneS", [
    {name: "Holystone headstone Slab", texture: [["holystone_headstone", 0]], inCreative: true}
]);
ToolAPI.registerBlockMaterial(BlockID.headstoneHolystoneS, "stone", 2, true);
TileRenderer.makeSlab(BlockID.headstoneHolystoneS, BlockID.headstoneHolystoneS);

IDRegistry.genBlockID("stairsflagstonebricksH");
Block.createBlock("stairsflagstonebricksH", [
    {name: "Holystone headstone Stairs", texture: [["holystone_headstone", 0]], inCreative: true}
], BLOCK_TYPE_STAIRS_STONE);

IDRegistry.genBlockID("pillarIcestone");
Block.createBlock("pillarIcestone", [
    {name: "Icestone pillar", texture: [["icestone", 0], ["icestone_keystone", 0], ["icestone_pillar", 0]],inCreative: true}], "opaque");
ToolAPI.registerBlockMaterial(BlockID.pillarHolystone, "stone", 2, true);

IDRegistry.genBlockID("basebricksIcestone");
Block.createBlock("basebricksIcestone", [
    {name: "Icestone base bricks", texture: [["icestone_base_bricks", 0]],inCreative: true}], "opaque");
ToolAPI.registerBlockMaterial(BlockID.basebricksIcestone, "stone", 2, true);

IDRegistry.genBlockID("basebricksIcestoneS");
Block.createBlock("basebricksIcestoneS", [
    {name: "Icestone base bricks Slab", texture: [["icestone_base_bricks", 0]], inCreative: true}
]);
ToolAPI.registerBlockMaterial(BlockID.basebricksIcestoneS, "stone", 2, true);
TileRenderer.makeSlab(BlockID.basebricksIcestoneS, BlockID.basebricksIcestone);

IDRegistry.genBlockID("stairsbasebricksIce");
Block.createBlock("stairsbasebricksIce", [
    {name: "Icestone base Stairs", texture: [["icestone_base_bricks", 0]], inCreative: true}
], BLOCK_TYPE_STAIRS_STONE);

IDRegistry.genBlockID("basepillarIcestone");
Block.createBlock("basepillarIcestone", [
    {name: "Icestone base pillar", texture: [["icestone_base_bricks", 0], ["icestone_keystone", 0], ["icestone_base_pillar", 0]],inCreative: true}], "opaque");
ToolAPI.registerBlockMaterial(BlockID.basepillarIcestone, "stone", 2, true);

IDRegistry.genBlockID("capstonebricksIcestone");
Block.createBlock("capstonebricksIcestone", [
    {name: "Icestone capstone bricks", texture: [["icestone_capstone_bricks", 0]],inCreative: true}], "opaque");
ToolAPI.registerBlockMaterial(BlockID.capstonebricksIcestone, "stone", 2, true);

IDRegistry.genBlockID("capstonebricksIcestoneS");
Block.createBlock("capstonebricksIcestoneS", [
    {name: "Icestone capstone bricks Slab", texture: [["icestone_capstone_bricks", 0]], inCreative: true}
]);
ToolAPI.registerBlockMaterial(BlockID.basebricksIcestoneS, "stone", 2, true);
TileRenderer.makeSlab(BlockID.basebricksIcestoneS, BlockID.basebricksIcestone);

IDRegistry.genBlockID("stairscapstonebricksIce");
Block.createBlock("stairscapstonebricksIce", [
    {name: "Icestone capstone Stairs", texture: [["icestone_capstone_bricks", 0]], inCreative: true}
], BLOCK_TYPE_STAIRS_STONE);

IDRegistry.genBlockID("capstonepillarIcestone");
Block.createBlock("capstonepillarIcestone", [
    {name: "Icestone capstone pillar", texture: [["icestone_capstone_bricks", 0], ["icestone_keystone", 0], ["icestone_capstone_pillar", 0]],inCreative: true}], "opaque");
ToolAPI.registerBlockMaterial(BlockID.capstonepillarIcestone, "stone", 2, true);


IDRegistry.genBlockID("pillarSkyroot");
Block.createBlock("pillarSkyroot", [
    {name: "Skyroot pillar", texture: [["skyroot_base_planks", 0], ["skyroot_base_top", 0], ["skyroot_beam", 0]],inCreative: true}], "opaque");
ToolAPI.registerBlockMaterial(BlockID.pillarSkyroot, "wood", 0, true);

IDRegistry.genBlockID("baseplanksSkyroot");
Block.createBlock("baseplanksSkyroot", [
    {name: "Skyroot base planks", texture: [["skyroot_base_planks", 0]],inCreative: true}], "opaque");
ToolAPI.registerBlockMaterial(BlockID.baseplanksSkyroot, "wood", 0, true);

IDRegistry.genBlockID("baseplanksSkyrootS");
Block.createBlock("baseplanksSkyrootS", [
    {name: "Skyroot base planks Slab", texture: [["skyroot_base_planks", 0]], inCreative: true}
]);
ToolAPI.registerBlockMaterial(BlockID.baseplanksSkyrootS, "wood", 2, true);
TileRenderer.makeSlab(BlockID.baseplanksSkyrootS, BlockID.baseplanksSkyroot);

IDRegistry.genBlockID("stairsbaseSkyroot");
Block.createBlock("stairsbaseSkyroot", [
    {name: "Skyroot base Stairs", texture: [["skyroot_planks", 0]], inCreative: true}
], BLOCK_TYPE_STAIRS_WOOD);

IDRegistry.genBlockID("basepillarSkyroot");
Block.createBlock("basepillarSkyroot", [
    {name: "Skyroot base pillar", texture: [["skyroot_base_planks", 0], ["skyroot_base_top", 0], ["skyroot_base_beam", 0]],inCreative: true}], "opaque");
ToolAPI.registerBlockMaterial(BlockID.basepillarSkyroot, "wood", 0, true);

IDRegistry.genBlockID("floorboardsSkyroot");
Block.createBlock("floorboardsSkyroot", [
    {name: "Skyroot floorboards", texture: [["skyroot_floorboards", 0]],inCreative: true}], "opaque");
ToolAPI.registerBlockMaterial(BlockID.floorboardsSkyroot, "wood", 0, true);

IDRegistry.genBlockID("floorboardsSkyrooS");
Block.createBlock("floorboardsSkyrooS", [
    {name: "Skyroot floorboards Slab", texture: [["skyroot_floorboards", 0]], inCreative: true}
]);
ToolAPI.registerBlockMaterial(BlockID.tilesSkyrootS, "wood", 2, true);
TileRenderer.makeSlab(BlockID.tilesSkyrootS, BlockID.tilesSkyroot);

IDRegistry.genBlockID("stairsfloorboardsSkyroot");
Block.createBlock("stairsfloorboardsSkyroot", [
    {name: "Skyroot floorboards Stairs", texture: [["skyroot_floorboards", 0]], inCreative: true}
], BLOCK_TYPE_STAIRS_WOOD);

IDRegistry.genBlockID("tilesSkyroot");
Block.createBlock("tilesSkyroot", [
    {name: "Skyroot tiles", texture: [["skyroot_tiles_small", 0]],inCreative: true}], "opaque");
ToolAPI.registerBlockMaterial(BlockID.tilesSkyroot, "wood", 0, true);

IDRegistry.genBlockID("tilesSkyrootS");
Block.createBlock("tilesSkyrootS", [
    {name: "Skyroot tiles Slab", texture: [["skyroot_tiles_small", 0]], inCreative: true}
]);
ToolAPI.registerBlockMaterial(BlockID.tilesSkyrootS, "wood", 2, true);
TileRenderer.makeSlab(BlockID.tilesSkyrootS, BlockID.tilesSkyroot);

IDRegistry.genBlockID("stairstilesSkyrootSkyroot");
Block.createBlock("stairstilesSkyrootSkyroot", [
    {name: "Skyroot tiles Stairs", texture: [["skyroot_tiles_small", 0]], inCreative: true}
], BLOCK_TYPE_STAIRS_WOOD);

IDRegistry.genBlockID("tilessSkyroot");
Block.createBlock("tilessSkyroot", [
    {name: "Skyroot tiles small", texture: [["skyroot_tiles", 0]],inCreative: true}], "opaque");
ToolAPI.registerBlockMaterial(BlockID.tilessSkyroot, "wood", 0, true);

IDRegistry.genBlockID("tilessSkyrootS");
Block.createBlock("tilessSkyrootS", [
    {name: "Skyroot small tiles Slab", texture: [["skyroot_tiles", 0]], inCreative: true}
]);
ToolAPI.registerBlockMaterial(BlockID.tilessSkyrootS, "wood", 2, true);
TileRenderer.makeSlab(BlockID.tilessSkyrootS, BlockID.tilessSkyroot);

IDRegistry.genBlockID("stairstilesSkyrootSkyroot");
Block.createBlock("stairstilesSkyrootSkyroot", [
    {name: "Skyroot small tiles Stairs", texture: [["skyroot_tiles", 0]], inCreative: true}
], BLOCK_TYPE_STAIRS_WOOD);

IDRegistry.genBlockID("CCglass");
Block.createBlock("CCglass", [{name: "Crude scatterglass", texture: [["crude_scatterglass", 0]],inCreative: true}], BLOCK_TYPE_CLOUD);

IDRegistry.genItemID("CCglassP");
Item.createItem("CCglassP", "Crude scatterglass Plane", {name: "crude_scatterglass"});

Item.registerUseFunction("CCglassP", function(coords, item, block,  player){
var region = BlockSource.getDefaultForActor(player);
    var place = coords.relative;
        region.setBlock(place.x, place.y, place.z, BlockID.CCglassP);  
         Entity.setCarriedItem(player, item.id, item.count - 1, item.data); 
}); 
 
IDRegistry.genBlockID("CCglassP");
Block.createBlock("CCglassP", [{name: "Crude scatterglass Plane", texture: [["crude_scatterglass", 0]],inCreative: false}], BLOCK_TYPE_PLANE);

IDRegistry.genBlockID("SCglass");
Block.createBlock("SCglass", [{name: "Scatterglass", texture: [["scatterglass", 0]],inCreative: true}], BLOCK_TYPE_AGLASS);

IDRegistry.genItemID("SCglassP");
Item.createItem("SCglassP", "Scatterglass Plane", {name: "scatterglass"});

Item.registerUseFunction("SCglassP", function(coords, item, block, player){
var region = BlockSource.getDefaultForActor(player);
    var place = coords.relative;
        region.setBlock(place.x, place.y, place.z, BlockID.SCglassP);  
         Entity.setCarriedItem(player, item.id, item.count - 1, item.data); 
});  
 
IDRegistry.genBlockID("SCglassP");
Block.createBlock("SCglassP", [{name: "Scatterglass Plane", texture: [["crude_scatterglass", 0]],inCreative: false}], BLOCK_TYPE_PLANE);

Callback.addCallback("GenerateCustomDimensionChunk", function(chunkX, chunkZ, random, dimensionId){
if (dimensionId != Aether.id) return;
UniqueGen.generateOreInDimension(BlockID.CCglass, 0, chunkX, chunkZ, random, { 
 veinCounts: 21,
 minY: 40,
 maxY: 230,
 size: randomInt(5, 11),
 mode: true,
 check: [BlockID.Holystone]
}); 
});
Callback.addCallback('PostLoaded', function () {
Recipes.addShaped({id: ItemID.scatterglassShard, count: 4, data: 0}, [
    "xoo" 
], ['x', BlockID.SCglassP, 0]);
});

IDRegistry.genBlockID("fSCglass");
Block.createBlock("fSCglass", [{name: "Framed scatterglass", texture: [["skyroot_frame_scatterglass", 0]],inCreative: true}], BLOCK_TYPE_AGLASS);

IDRegistry.genItemID("fSCglassP");
Item.createItem("fSCglassP", "Framed Scatterglass Plane", {name: "scatterglass"});

Item.registerUseFunction("fSCglassP", function(coords, item, block, player){
var region = BlockSource.getDefaultForActor(player);
    var place = coords.relative;
        region.setBlock(place.x, place.y, place.z, BlockID.fSCglassP);  
         Entity.setCarriedItem(player, item.id, item.count - 1, item.data); 
}); 
 
IDRegistry.genBlockID("fSCglassP");
Block.createBlock("fSCglassP", [{name: "Framed Scatterglass Plane", texture: [["skyroot_frame_scatterglass", 0]],inCreative: false}], BLOCK_TYPE_PLANE);

IDRegistry.genBlockID("SQglass");
Block.createBlock("SQglass", [{name: "Quicksoil glass", texture: [["quicksoil_glass", 0]],inCreative: true}], BLOCK_TYPE_AGLASS);

IDRegistry.genItemID("SQglassP");
Item.createItem("SQglassP", "Quicksoil glass Plane", {name: "quicksoil_glass"});

Item.registerUseFunction("SQglassP", function(coords, item, block, player){
var region = BlockSource.getDefaultForActor(player);
    var place = coords.relative;
        region.setBlock(place.x, place.y, place.z, BlockID.SQglassP);  
         Entity.setCarriedItem(player, item.id, item.count - 1, item.data); 
});  
 
IDRegistry.genBlockID("SQlassP");
Block.createBlock("SQlassP", [{name: "Quicksoil glass Plane", texture: [["quicksoil_glass", 0]],inCreative: false}], BLOCK_TYPE_PLANE);

IDRegistry.genBlockID("fSQglass");
Block.createBlock("fSQglass", [{name: "Framed Quicksoil Plane", texture: [["skyroot_frame_quicksoil_glass", 0]],inCreative: true}], BLOCK_TYPE_AGLASS);
    
IDRegistry.genItemID("fSQglassP");
Item.createItem("fSQglassP", "Framed Quicksoil glass Plane", {name: "quicksoil_glass"});

Item.registerUseFunction("fSQglassP", function(coords, item, block,  player){
var region = BlockSource.getDefaultForActor(player);
    var place = coords.relative;
        region.setBlock(place.x, place.y, place.z, BlockID.fSQglassP);  
         Entity.setCarriedItem(player, item.id, item.count - 1, item.data); 
});   
 
IDRegistry.genBlockID("fSQlassP");
Block.createBlock("fSQlassP", [{name: "Framed Quicksoil Plane", texture: [["quicksoil_glass", 0]],inCreative: false}], BLOCK_TYPE_PLANE);