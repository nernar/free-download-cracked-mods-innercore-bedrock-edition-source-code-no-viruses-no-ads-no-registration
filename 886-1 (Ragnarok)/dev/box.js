IMPORT("ToolLib");

//Arid Box
IDRegistry.genBlockID("arid_box");
Block.createBlock("arid_box", [
	{name: "Arid Box", texture: [["arid_box", 0]], inCreative: true}]);
ToolAPI.registerBlockMaterial(BlockID.arid_box, "stone", 1, true);

//Deep Box
IDRegistry.genBlockID("deep_box");
Block.createBlock("deep_box", [
	{name: "Deep Box", texture: [["deep_box", 0]], inCreative: true}]);
ToolAPI.registerBlockMaterial(BlockID.deep_box, "stone", 1, true);

//Possessed Box
IDRegistry.genBlockID("possessed_box");
Block.createBlock("possessed_box", [
	{name: "Possessed Box", texture: [["possessed_box", 0]], inCreative: true}]);
ToolAPI.registerBlockMaterial(BlockID.possessed_box, "stone", 1, true);

//Steep Box
IDRegistry.genBlockID("steep_box");
Block.createBlock("steep_box", [
	{name: "Steep Box", texture: [["steep_box", 0]], inCreative: true}]);
ToolAPI.registerBlockMaterial(BlockID.steep_box, "stone", 1, true);

//Underground Box
IDRegistry.genBlockID("underground_box");
Block.createBlock("underground_box", [
	{name: "Underground Box", texture: [["underground_box", 0]], inCreative: true}]);
ToolAPI.registerBlockMaterial(BlockID.underground_box, "stone", 1, true);

//Wild Box
IDRegistry.genBlockID("wild_box");
Block.createBlock("wild_box", [
	{name: "Wild Box", texture: [["wild_box", 0]], inCreative: true}]);
ToolAPI.registerBlockMaterial(BlockID.wild_box, "stone", 1, true);

//spawn
Callback.addCallback("GenerateChunk", function (chunkX, chunkZ) {
    let coords = GenerationUtils.randomCoords(chunkX, chunkZ, 64, 128);
    if(Math.random() < 0.01){
    coords = GenerationUtils.findSurface(coords.x, coords.y, coords.z);
if(World.getBlock(coords.x,coords.y+1,coords.z).id === 0 && GenerationUtils.canSeeSky(coords.x, coords.y + 1, coords.z)) { 
       World.setBlock(coords.x,coords.y+1, coords.z, BlockID.arid_box, 0);
}}});

Callback.addCallback("GenerateChunk", function (chunkX, chunkZ) {
    let coords = GenerationUtils.randomCoords(chunkX, chunkZ, 64, 128);
    if(Math.random() < 0.01){
    coords = GenerationUtils.findSurface(coords.x, coords.y, coords.z);
if(World.getBlock(coords.x,coords.y+1,coords.z).id === 0 && GenerationUtils.canSeeSky(coords.x, coords.y + 1, coords.z)) { 
       World.setBlock(coords.x,coords.y+1, coords.z, BlockID.deep_box, 0);
}}});

Callback.addCallback("GenerateChunk", function (chunkX, chunkZ) {
    let coords = GenerationUtils.randomCoords(chunkX, chunkZ, 64, 128);
    if(Math.random() < 0.01){
    coords = GenerationUtils.findSurface(coords.x, coords.y, coords.z);
if(World.getBlock(coords.x,coords.y+1,coords.z).id === 0 && GenerationUtils.canSeeSky(coords.x, coords.y + 1, coords.z)) { 
       World.setBlock(coords.x,coords.y+1, coords.z, BlockID.possessed_box, 0);
}}});

Callback.addCallback("GenerateChunk", function (chunkX, chunkZ) {
    let coords = GenerationUtils.randomCoords(chunkX, chunkZ, 64, 128);
    if(Math.random() < 0.01){
    coords = GenerationUtils.findSurface(coords.x, coords.y, coords.z);
if(World.getBlock(coords.x,coords.y+1,coords.z).id === 0 && GenerationUtils.canSeeSky(coords.x, coords.y + 1, coords.z)) { 
       World.setBlock(coords.x,coords.y+1, coords.z, BlockID.steep_box, 0);
}}});

Callback.addCallback("GenerateChunk", function (chunkX, chunkZ) {
    let coords = GenerationUtils.randomCoords(chunkX, chunkZ, 64, 128);
    if(Math.random() < 0.01){
    coords = GenerationUtils.findSurface(coords.x, coords.y, coords.z);
if(World.getBlock(coords.x,coords.y+1,coords.z).id === 0 && GenerationUtils.canSeeSky(coords.x, coords.y + 1, coords.z)) { 
       World.setBlock(coords.x,coords.y+1, coords.z, BlockID.underground_box, 0);
}}});

Callback.addCallback("GenerateChunk", function (chunkX, chunkZ) {
    let coords = GenerationUtils.randomCoords(chunkX, chunkZ, 64, 128);
    if(Math.random() < 0.01){
    coords = GenerationUtils.findSurface(coords.x, coords.y, coords.z);
if(World.getBlock(coords.x,coords.y+1,coords.z).id === 0 && GenerationUtils.canSeeSky(coords.x, coords.y + 1, coords.z)) { 
       World.setBlock(coords.x,coords.y+1, coords.z, BlockID.wild_box, 0);
}}});

//crafts
Recipes.addShaped({id: BlockID.arid_box, count: 1, data: 0}, [
    "xxx",
    "xax",
    "xxx"
], ['a', BlockID.deep_box, 0, 'x', VanillaBlockID.sand, 0]);

Recipes.addShaped({id: BlockID.arid_box, count: 1, data: 0}, [
    "xxx",
    "xax",
    "xxx"
], ['a', BlockID.deep_box, 0, 'x', VanillaBlockID.sand, 1]);

Recipes.addShaped({id: BlockID.arid_box, count: 1, data: 0}, [
    "xxx",
    "xax",
    "xxx"
], ['a', BlockID.possessed_box, 0, 'x', VanillaBlockID.sand, 0]);

Recipes.addShaped({id: BlockID.arid_box, count: 1, data: 0}, [
    "xxx",
    "xax",
    "xxx"
], ['a', BlockID.possessed_box, 0, 'x', VanillaBlockID.sand, 1]);

Recipes.addShaped({id: BlockID.arid_box, count: 1, data: 0}, [
    "xxx",
    "xax",
    "xxx"
], ['a', BlockID.steep_box, 0, 'x', VanillaBlockID.sand, 0]);

Recipes.addShaped({id: BlockID.arid_box, count: 1, data: 0}, [
    "xxx",
    "xax",
    "xxx"
], ['a', BlockID.steep_box, 0, 'x', VanillaBlockID.sand, 1]);

Recipes.addShaped({id: BlockID.arid_box, count: 1, data: 0}, [
    "xxx",
    "xax",
    "xxx"
], ['a', BlockID.underground_box, 0, 'x', VanillaBlockID.sand, 0]);

Recipes.addShaped({id: BlockID.arid_box, count: 1, data: 0}, [
    "xxx",
    "xax",
    "xxx"
], ['a', BlockID.underground_box, 0, 'x', VanillaBlockID.sand, 1]);

Recipes.addShaped({id: BlockID.arid_box, count: 1, data: 0}, [
    "xxx",
    "xax",
    "xxx"
], ['a', BlockID.wild_box, 0, 'x', VanillaBlockID.sand, 0]);

Recipes.addShaped({id: BlockID.arid_box, count: 1, data: 0}, [
    "xxx",
    "xax",
    "xxx"
], ['a', BlockID.wild_box, 0, 'x', VanillaBlockID.sand, 1]);

Recipes.addShaped({id: BlockID.deep_box, count: 1, data: 0}, [
    "xxx",
    "xax",
    "xxx"
], ['a', BlockID.arid_box, 0, 'x', VanillaBlockID.clay, 0]);

Recipes.addShaped({id: BlockID.deep_box, count: 1, data: 0}, [
    "xxx",
    "xax",
    "xxx"
], ['a', BlockID.possessed_box, 0, 'x', VanillaBlockID.clay, 0]);

Recipes.addShaped({id: BlockID.deep_box, count: 1, data: 0}, [
    "xxx",
    "xax",
    "xxx"
], ['a', BlockID.steep_box, 0, 'x', VanillaBlockID.clay, 0]);

Recipes.addShaped({id: BlockID.deep_box, count: 1, data: 0}, [
    "xxx",
    "xax",
    "xxx"
], ['a', BlockID.underground_box, 0, 'x', VanillaBlockID.clay, 0]);

Recipes.addShaped({id: BlockID.deep_box, count: 1, data: 0}, [
    "xxx",
    "xax",
    "xxx"
], ['a', BlockID.wild_box, 0, 'x', VanillaBlockID.clay, 0]);

Recipes.addShaped({id: BlockID.possessed_box, count: 1, data: 0}, [
    "xxx",
    "xax",
    "xxx"
], ['a', BlockID.arid_box, 0, 'x', VanillaBlockID.soul_sand, 0]);

Recipes.addShaped({id: BlockID.possessed_box, count: 1, data: 0}, [
    "xxx",
    "xax",
    "xxx"
], ['a', BlockID.deep_box, 0, 'x', VanillaBlockID.soul_sand, 0]);

Recipes.addShaped({id: BlockID.possessed_box, count: 1, data: 0}, [
    "xxx",
    "xax",
    "xxx"
], ['a', BlockID.steep_box, 0, 'x', VanillaBlockID.soul_sand, 0]);

Recipes.addShaped({id: BlockID.possessed_box, count: 1, data: 0}, [
    "xxx",
    "xax",
    "xxx"
], ['a', BlockID.underground_box, 0, 'x', VanillaBlockID.soul_sand, 0]);

Recipes.addShaped({id: BlockID.possessed_box, count: 1, data: 0}, [
    "xxx",
    "xax",
    "xxx"
], ['a', BlockID.wild_box, 0, 'x', VanillaBlockID.soul_sand, 0]);

Recipes.addShaped({id: BlockID.steep_box, count: 1, data: 0}, [
    "xxx",
    "xax",
    "xxx"
], ['a', BlockID.arid_box, 0, 'x', VanillaBlockID.snow, 0]);

Recipes.addShaped({id: BlockID.steep_box, count: 1, data: 0}, [
    "xxx",
    "xax",
    "xxx"
], ['a', BlockID.deep_box, 0, 'x', VanillaBlockID.snow, 0]);

Recipes.addShaped({id: BlockID.steep_box, count: 1, data: 0}, [
    "xxx",
    "xax",
    "xxx"
], ['a', BlockID.possessed_box, 0, 'x', VanillaBlockID.snow, 0]);

Recipes.addShaped({id: BlockID.steep_box, count: 1, data: 0}, [
    "xxx",
    "xax",
    "xxx"
], ['a', BlockID.underground_box, 0, 'x', VanillaBlockID.snow, 0]);

Recipes.addShaped({id: BlockID.steep_box, count: 1, data: 0}, [
    "xxx",
    "xax",
    "xxx"
], ['a', BlockID.wild_box, 0, 'x', VanillaBlockID.snow, 0]);

Recipes.addShaped({id: BlockID.underground_box, count: 1, data: 0}, [
    "xxx",
    "xax",
    "xxx"
], ['a', BlockID.arid_box, 0, 'x', VanillaBlockID.stone, 0]);

Recipes.addShaped({id: BlockID.underground_box, count: 1, data: 0}, [
    "xxx",
    "xax",
    "xxx"
], ['a', BlockID.deep_box, 0, 'x', VanillaBlockID.stone, 0]);

Recipes.addShaped({id: BlockID.underground_box, count: 1, data: 0}, [
    "xxx",
    "xax",
    "xxx"
], ['a', BlockID.possessed_box, 0, 'x', VanillaBlockID.stone, 0]);

Recipes.addShaped({id: BlockID.underground_box, count: 1, data: 0}, [
    "xxx",
    "xax",
    "xxx"
], ['a', BlockID.steep_box, 0, 'x', VanillaBlockID.stone, 0]);

Recipes.addShaped({id: BlockID.underground_box, count: 1, data: 0}, [
    "xxx",
    "xax",
    "xxx"
], ['a', BlockID.wild_box, 0, 'x', VanillaBlockID.stone, 0]);


Recipes.addShaped({id: BlockID.underground_box, count: 1, data: 0}, [
    "xxx",
    "xax",
    "xxx"
], ['a', BlockID.arid_box, 0, 'x', VanillaBlockID.stone, 1]);

Recipes.addShaped({id: BlockID.underground_box, count: 1, data: 0}, [
    "xxx",
    "xax",
    "xxx"
], ['a', BlockID.deep_box, 0, 'x', VanillaBlockID.stone, 1]);

Recipes.addShaped({id: BlockID.underground_box, count: 1, data: 0}, [
    "xxx",
    "xax",
    "xxx"
], ['a', BlockID.possessed_box, 0, 'x', VanillaBlockID.stone, 1]);

Recipes.addShaped({id: BlockID.underground_box, count: 1, data: 0}, [
    "xxx",
    "xax",
    "xxx"
], ['a', BlockID.steep_box, 0, 'x', VanillaBlockID.stone, 1]);

Recipes.addShaped({id: BlockID.underground_box, count: 1, data: 0}, [
    "xxx",
    "xax",
    "xxx"
], ['a', BlockID.wild_box, 0, 'x', VanillaBlockID.stone, 1]);


Recipes.addShaped({id: BlockID.underground_box, count: 1, data: 0}, [
    "xxx",
    "xax",
    "xxx"
], ['a', BlockID.arid_box, 0, 'x', VanillaBlockID.stone, 2]);

Recipes.addShaped({id: BlockID.underground_box, count: 1, data: 0}, [
    "xxx",
    "xax",
    "xxx"
], ['a', BlockID.deep_box, 0, 'x', VanillaBlockID.stone, 2]);

Recipes.addShaped({id: BlockID.underground_box, count: 1, data: 0}, [
    "xxx",
    "xax",
    "xxx"
], ['a', BlockID.possessed_box, 0, 'x', VanillaBlockID.stone, 2]);

Recipes.addShaped({id: BlockID.underground_box, count: 1, data: 0}, [
    "xxx",
    "xax",
    "xxx"
], ['a', BlockID.steep_box, 0, 'x', VanillaBlockID.stone, 2]);

Recipes.addShaped({id: BlockID.underground_box, count: 1, data: 0}, [
    "xxx",
    "xax",
    "xxx"
], ['a', BlockID.wild_box, 0, 'x', VanillaBlockID.stone, 2]);

Recipes.addShaped({id: BlockID.underground_box, count: 1, data: 0}, [
    "xxx",
    "xax",
    "xxx"
], ['a', BlockID.arid_box, 0, 'x', VanillaBlockID.stone, 3]);

Recipes.addShaped({id: BlockID.underground_box, count: 1, data: 0}, [
    "xxx",
    "xax",
    "xxx"
], ['a', BlockID.deep_box, 0, 'x', VanillaBlockID.stone, 3]);

Recipes.addShaped({id: BlockID.underground_box, count: 1, data: 0}, [
    "xxx",
    "xax",
    "xxx"
], ['a', BlockID.possessed_box, 0, 'x', VanillaBlockID.stone, 3]);

Recipes.addShaped({id: BlockID.underground_box, count: 1, data: 0}, [
    "xxx",
    "xax",
    "xxx"
], ['a', BlockID.steep_box, 0, 'x', VanillaBlockID.stone, 3]);

Recipes.addShaped({id: BlockID.underground_box, count: 1, data: 0}, [
    "xxx",
    "xax",
    "xxx"
], ['a', BlockID.wild_box, 0, 'x', VanillaBlockID.stone, 3]);

Recipes.addShaped({id: BlockID.underground_box, count: 1, data: 0}, [
    "xxx",
    "xax",
    "xxx"
], ['a', BlockID.arid_box, 0, 'x', VanillaBlockID.stone, 4]);

Recipes.addShaped({id: BlockID.underground_box, count: 1, data: 0}, [
    "xxx",
    "xax",
    "xxx"
], ['a', BlockID.deep_box, 0, 'x', VanillaBlockID.stone, 4]);

Recipes.addShaped({id: BlockID.underground_box, count: 1, data: 0}, [
    "xxx",
    "xax",
    "xxx"
], ['a', BlockID.possessed_box, 0, 'x', VanillaBlockID.stone, 4]);

Recipes.addShaped({id: BlockID.underground_box, count: 1, data: 0}, [
    "xxx",
    "xax",
    "xxx"
], ['a', BlockID.steep_box, 0, 'x', VanillaBlockID.stone, 4]);

Recipes.addShaped({id: BlockID.underground_box, count: 1, data: 0}, [
    "xxx",
    "xax",
    "xxx"
], ['a', BlockID.wild_box, 0, 'x', VanillaBlockID.stone, 4]);

Recipes.addShaped({id: BlockID.underground_box, count: 1, data: 0}, [
    "xxx",
    "xax",
    "xxx"
], ['a', BlockID.arid_box, 0, 'x', VanillaBlockID.stone, 5]);

Recipes.addShaped({id: BlockID.underground_box, count: 1, data: 0}, [
    "xxx",
    "xax",
    "xxx"
], ['a', BlockID.deep_box, 0, 'x', VanillaBlockID.stone, 5]);

Recipes.addShaped({id: BlockID.underground_box, count: 1, data: 0}, [
    "xxx",
    "xax",
    "xxx"
], ['a', BlockID.possessed_box, 0, 'x', VanillaBlockID.stone, 5]);

Recipes.addShaped({id: BlockID.underground_box, count: 1, data: 0}, [
    "xxx",
    "xax",
    "xxx"
], ['a', BlockID.steep_box, 0, 'x', VanillaBlockID.stone, 5]);

Recipes.addShaped({id: BlockID.underground_box, count: 1, data: 0}, [
    "xxx",
    "xax",
    "xxx"
], ['a', BlockID.wild_box, 0, 'x', VanillaBlockID.stone, 5]);

Recipes.addShaped({id: BlockID.underground_box, count: 1, data: 0}, [
    "xxx",
    "xax",
    "xxx"
], ['a', BlockID.arid_box, 0, 'x', VanillaBlockID.stone, 6]);

Recipes.addShaped({id: BlockID.underground_box, count: 1, data: 0}, [
    "xxx",
    "xax",
    "xxx"
], ['a', BlockID.deep_box, 0, 'x', VanillaBlockID.stone, 6]);

Recipes.addShaped({id: BlockID.underground_box, count: 1, data: 0}, [
    "xxx",
    "xax",
    "xxx"
], ['a', BlockID.possessed_box, 0, 'x', VanillaBlockID.stone, 6]);

Recipes.addShaped({id: BlockID.underground_box, count: 1, data: 0}, [
    "xxx",
    "xax",
    "xxx"
], ['a', BlockID.steep_box, 0, 'x', VanillaBlockID.stone, 6]);

Recipes.addShaped({id: BlockID.underground_box, count: 1, data: 0}, [
    "xxx",
    "xax",
    "xxx"
], ['a', BlockID.wild_box, 0, 'x', VanillaBlockID.stone, 6]);

Recipes.addShaped({id: BlockID.wild_box, count: 1, data: 0}, [
    "xxx",
    "xax",
    "xxx"
], ['a', BlockID.arid_box, 0, 'x', VanillaBlockID.sapling, 0]);

Recipes.addShaped({id: BlockID.wild_box, count: 1, data: 0}, [
    "xxx",
    "xax",
    "xxx"
], ['a', BlockID.deep_box, 0, 'x', VanillaBlockID.sapling, 0]);

Recipes.addShaped({id: BlockID.wild_box, count: 1, data: 0}, [
    "xxx",
    "xax",
    "xxx"
], ['a', BlockID.possessed_box, 0, 'x', VanillaBlockID.sapling, 0]);

Recipes.addShaped({id: BlockID.wild_box, count: 1, data: 0}, [
    "xxx",
    "xax",
    "xxx"
], ['a', BlockID.steep_box, 0, 'x', VanillaBlockID.sapling, 0]);

Recipes.addShaped({id: BlockID.wild_box, count: 1, data: 0}, [
    "xxx",
    "xax",
    "xxx"
], ['a', BlockID.underground_box, 0, 'x', VanillaBlockID.sapling, 0]);

Recipes.addShaped({id: BlockID.wild_box, count: 1, data: 0}, [
    "xxx",
    "xax",
    "xxx"
], ['a', BlockID.arid_box, 0, 'x', VanillaBlockID.sapling, 1]);

Recipes.addShaped({id: BlockID.wild_box, count: 1, data: 0}, [
    "xxx",
    "xax",
    "xxx"
], ['a', BlockID.deep_box, 0, 'x', VanillaBlockID.sapling, 1]);

Recipes.addShaped({id: BlockID.wild_box, count: 1, data: 0}, [
    "xxx",
    "xax",
    "xxx"
], ['a', BlockID.possessed_box, 0, 'x', VanillaBlockID.sapling, 1]);

Recipes.addShaped({id: BlockID.wild_box, count: 1, data: 0}, [
    "xxx",
    "xax",
    "xxx"
], ['a', BlockID.steep_box, 0, 'x', VanillaBlockID.sapling, 1]);

Recipes.addShaped({id: BlockID.wild_box, count: 1, data: 0}, [
    "xxx",
    "xax",
    "xxx"
], ['a', BlockID.underground_box, 0, 'x', VanillaBlockID.sapling, 1]);

Recipes.addShaped({id: BlockID.wild_box, count: 1, data: 0}, [
    "xxx",
    "xax",
    "xxx"
], ['a', BlockID.arid_box, 0, 'x', VanillaBlockID.sapling, 2]);

Recipes.addShaped({id: BlockID.wild_box, count: 1, data: 0}, [
    "xxx",
    "xax",
    "xxx"
], ['a', BlockID.deep_box, 0, 'x', VanillaBlockID.sapling, 2]);

Recipes.addShaped({id: BlockID.wild_box, count: 1, data: 0}, [
    "xxx",
    "xax",
    "xxx"
], ['a', BlockID.possessed_box, 0, 'x', VanillaBlockID.sapling, 2]);

Recipes.addShaped({id: BlockID.wild_box, count: 1, data: 0}, [
    "xxx",
    "xax",
    "xxx"
], ['a', BlockID.steep_box, 0, 'x', VanillaBlockID.sapling, 2]);

Recipes.addShaped({id: BlockID.wild_box, count: 1, data: 0}, [
    "xxx",
    "xax",
    "xxx"
], ['a', BlockID.underground_box, 0, 'x', VanillaBlockID.sapling, 2]);

Recipes.addShaped({id: BlockID.wild_box, count: 1, data: 0}, [
    "xxx",
    "xax",
    "xxx"
], ['a', BlockID.arid_box, 0, 'x', VanillaBlockID.sapling, 3]);

Recipes.addShaped({id: BlockID.wild_box, count: 1, data: 0}, [
    "xxx",
    "xax",
    "xxx"
], ['a', BlockID.deep_box, 0, 'x', VanillaBlockID.sapling, 3]);

Recipes.addShaped({id: BlockID.wild_box, count: 1, data: 0}, [
    "xxx",
    "xax",
    "xxx"
], ['a', BlockID.possessed_box, 0, 'x', VanillaBlockID.sapling, 3]);

Recipes.addShaped({id: BlockID.wild_box, count: 1, data: 0}, [
    "xxx",
    "xax",
    "xxx"
], ['a', BlockID.steep_box, 0, 'x', VanillaBlockID.sapling, 3]);

Recipes.addShaped({id: BlockID.wild_box, count: 1, data: 0}, [
    "xxx",
    "xax",
    "xxx"
], ['a', BlockID.underground_box, 0, 'x', VanillaBlockID.sapling, 3]);

Recipes.addShaped({id: BlockID.wild_box, count: 1, data: 0}, [
    "xxx",
    "xax",
    "xxx"
], ['a', BlockID.arid_box, 0, 'x', VanillaBlockID.sapling, 4]);

Recipes.addShaped({id: BlockID.wild_box, count: 1, data: 0}, [
    "xxx",
    "xax",
    "xxx"
], ['a', BlockID.deep_box, 0, 'x', VanillaBlockID.sapling, 4]);

Recipes.addShaped({id: BlockID.wild_box, count: 1, data: 0}, [
    "xxx",
    "xax",
    "xxx"
], ['a', BlockID.possessed_box, 0, 'x', VanillaBlockID.sapling, 4]);

Recipes.addShaped({id: BlockID.wild_box, count: 1, data: 0}, [
    "xxx",
    "xax",
    "xxx"
], ['a', BlockID.steep_box, 0, 'x', VanillaBlockID.sapling, 4]);

Recipes.addShaped({id: BlockID.wild_box, count: 1, data: 0}, [
    "xxx",
    "xax",
    "xxx"
], ['a', BlockID.underground_box, 0, 'x', VanillaBlockID.sapling, 4]);

Recipes.addShaped({id: BlockID.wild_box, count: 1, data: 0}, [
    "xxx",
    "xax",
    "xxx"
], ['a', BlockID.arid_box, 0, 'x', VanillaBlockID.sapling, 5]);

Recipes.addShaped({id: BlockID.wild_box, count: 1, data: 0}, [
    "xxx",
    "xax",
    "xxx"
], ['a', BlockID.deep_box, 0, 'x', VanillaBlockID.sapling, 5]);

Recipes.addShaped({id: BlockID.wild_box, count: 1, data: 0}, [
    "xxx",
    "xax",
    "xxx"
], ['a', BlockID.possessed_box, 0, 'x', VanillaBlockID.sapling, 5]);

Recipes.addShaped({id: BlockID.wild_box, count: 1, data: 0}, [
    "xxx",
    "xax",
    "xxx"
], ['a', BlockID.steep_box, 0, 'x', VanillaBlockID.sapling, 5]);

Recipes.addShaped({id: BlockID.wild_box, count: 1, data: 0}, [
    "xxx",
    "xax",
    "xxx"
], ['a', BlockID.underground_box, 0, 'x', VanillaBlockID.sapling, 5]);

Recipes.addShaped({id: BlockID.wild_box, count: 1, data: 0}, [
    "xxx",
    "xax",
    "xxx"
], ['a', BlockID.arid_box, 0, 'x', VanillaBlockID.sapling, 6]);

Recipes.addShaped({id: BlockID.wild_box, count: 1, data: 0}, [
    "xxx",
    "xax",
    "xxx"
], ['a', BlockID.deep_box, 0, 'x', VanillaBlockID.sapling, 6]);

Recipes.addShaped({id: BlockID.wild_box, count: 1, data: 0}, [
    "xxx",
    "xax",
    "xxx"
], ['a', BlockID.possessed_box, 0, 'x', VanillaBlockID.sapling, 6]);

Recipes.addShaped({id: BlockID.wild_box, count: 1, data: 0}, [
    "xxx",
    "xax",
    "xxx"
], ['a', BlockID.steep_box, 0, 'x', VanillaBlockID.sapling, 6]);

Recipes.addShaped({id: BlockID.wild_box, count: 1, data: 0}, [
    "xxx",
    "xax",
    "xxx"
], ['a', BlockID.underground_box, 0, 'x', VanillaBlockID.sapling, 6]);

//Released
IDRegistry.genBlockID("arid_box_released");
Block.createBlock("arid_box_released", [
	{name: "Released Arid Box", texture: [["arid_box_open", 0]], inCreative: true}]);
ToolAPI.registerBlockMaterial(BlockID.arid_box_released, "stone", 1, true);

Block.registerDropFunctionForID(BlockID.arid_box_released, function(coords, id, data, diggingLevel, toolLevel){
     return [[ItemID.flame_spirit, Math.ceil(Math.random()*(2-0))+1, 0], [ItemID.war_spirit, Math.ceil(Math.random()*(2-0))+1, 0], [ItemID.sand_spirit, Math.ceil(Math.random()*(2-0))+1, 0]]; 
});

IDRegistry.genBlockID("deep_box_released");
Block.createBlock("deep_box_released", [
	{name: "Released Deep Box", texture: [["deep_box_open", 0]], inCreative: true}]);
ToolAPI.registerBlockMaterial(BlockID.deep_box_released, "stone", 1, true);

Block.registerDropFunctionForID(BlockID.deep_box_released, function(coords, id, data, diggingLevel, toolLevel){
     return [[ItemID.mental_spirit, Math.ceil(Math.random()*(2-0))+1, 0], [ItemID.sea_spirit, Math.ceil(Math.random()*(2-0))+1, 0], [ItemID.wyvern_spirit, Math.ceil(Math.random()*(2-0))+1, 0]]; 
});

IDRegistry.genBlockID("possessed_box_released");
Block.createBlock("possessed_box_released", [
	{name: "Released Possessed Box", texture: [["possessed_box_open", 0]], inCreative: true}]);
ToolAPI.registerBlockMaterial(BlockID.possessed_box_released, "stone", 1, true);

Block.registerDropFunctionForID(BlockID.possessed_box_released, function(coords, id, data, diggingLevel, toolLevel){
     return [[ItemID.shadow_spirit, Math.ceil(Math.random()*(2-0))+1, 0], [ItemID.toxic_spirit, Math.ceil(Math.random()*(2-0))+1, 0], [ItemID.undead_spirit, Math.ceil(Math.random()*(2-0))+1, 0]]; 
});

IDRegistry.genBlockID("steep_box_released");
Block.createBlock("steep_box_released", [
	{name: "Released Steep Box", texture: [["steep_box_open", 0]], inCreative: true}]);
ToolAPI.registerBlockMaterial(BlockID.steep_box_released, "stone", 1, true);

Block.registerDropFunctionForID(BlockID.steep_box_released, function(coords, id, data, diggingLevel, toolLevel){
     return [[ItemID.cold_spirit, Math.ceil(Math.random()*(2-0))+1, 0], [ItemID.thunder_spirit, Math.ceil(Math.random()*(2-0))+1, 0], [ItemID.wind_spirit, Math.ceil(Math.random()*(2-0))+1, 0]]; 
});

IDRegistry.genBlockID("underground_box_released");
Block.createBlock("underground_box_released", [
	{name: "Released Underground Box", texture: [["underground_box_open", 0]], inCreative: true}]);
ToolAPI.registerBlockMaterial(BlockID.underground_box_released, "stone", 1, true);

Block.registerDropFunctionForID(BlockID.underground_box_released, function(coords, id, data, diggingLevel, toolLevel){
     return [[ItemID.hero_spirit, Math.ceil(Math.random()*(2-0))+1, 0], [ItemID.ore_spirit, Math.ceil(Math.random()*(2-0))+1, 0], [ItemID.stone_spirit, Math.ceil(Math.random()*(2-0))+1, 0]]; 
});

IDRegistry.genBlockID("wild_box_released");
Block.createBlock("wild_box_released", [
	{name: "Released Wild Box", texture: [["wild_box_open", 0]], inCreative: true}]);
ToolAPI.registerBlockMaterial(BlockID.wild_box_released, "stone", 1, true);

Block.registerDropFunctionForID(BlockID.wild_box_released, function(coords, id, data, diggingLevel, toolLevel){
     return [[ItemID.insect_spirit, Math.ceil(Math.random()*(2-0))+1, 0], [ItemID.pixie_spirit, Math.ceil(Math.random()*(2-0))+1, 0], [ItemID.plant_spirit, Math.ceil(Math.random()*(2-0))+1, 0]]; 
});