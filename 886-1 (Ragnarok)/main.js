/*
BUILD INFO:
  dir: dev
  target: main.js
  files: 11
*/



// file: box.js

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




// file: ores.js

var BLOCK_TYPE_STONE = Block.createSpecialType({
	base: 1,
	solid: true,
	destroytime: 2,
	explosionres: 2
}, "stone");

IDRegistry.genBlockID("annwinite_ore");
Block.createBlock("annwinite_ore", [
	{name: "Annwinite Ore", texture: [["annwinite_ore", 0]], inCreative: true}
], BLOCK_TYPE_STONE);
ToolAPI.registerBlockMaterial(BlockID.annwinite_ore, "stone", 3, true);

Block.registerDropFunction("annwinite_ore", function(coords, blockID, blockData, level, enchant){
	if(level > 2){
		if(enchant.silk){
			return [[blockID, 1, 0]];
		}
		ToolAPI.dropOreExp(coords, 3, 7, enchant.experience);
		return [[ItemID.raw_annwinite, 1, 0]]
	}
	return [];
}, 3);

IDRegistry.genBlockID("diyuite_ore");
Block.createBlock("diyuite_ore", [
	{name: "Diyuite Ore", texture: [["diyuite_ore", 0]], inCreative: true}
], BLOCK_TYPE_STONE);
ToolAPI.registerBlockMaterial(BlockID.diyuite_ore, "stone", 3, true);

Block.registerDropFunction("diyuite_ore", function(coords, blockID, blockData, level, enchant){
	if(level > 2){
		if(enchant.silk){
			return [[blockID, 1, 0]];
		}
		ToolAPI.dropOreExp(coords, 3, 7, enchant.experience);
		return [[ItemID.raw_diyuite, 1, 0]]
	}
	return [];
}, 3);

IDRegistry.genBlockID("duatite_ore");
Block.createBlock("duatite_ore", [
	{name: "Duatite Ore", texture: [["duatite_ore", 0]], inCreative: true}
], BLOCK_TYPE_STONE);
ToolAPI.registerBlockMaterial(BlockID.duatite_ore, "stone", 3, true);

Block.registerDropFunction("duatite_ore", function(coords, blockID, blockData, level, enchant){
	if(level > 2){
		if(enchant.silk){
			return [[blockID, 1, 0]];
		}
		ToolAPI.dropOreExp(coords, 3, 7, enchant.experience);
		return [[ItemID.raw_duatite, 1, 0]]
	}
	return [];
}, 3);

IDRegistry.genBlockID("hadesite_ore");
Block.createBlock("hadesite_ore", [
	{name: "Hadesite Ore", texture: [["hadesite_ore", 0]], inCreative: true}
], BLOCK_TYPE_STONE);
ToolAPI.registerBlockMaterial(BlockID.hadesite_ore, "stone", 3, true);

Block.registerDropFunction("hadesite_ore", function(coords, blockID, blockData, level, enchant){
	if(level > 2){
		if(enchant.silk){
			return [[blockID, 1, 0]];
		}
		ToolAPI.dropOreExp(coords, 3, 7, enchant.experience);
		return [[ItemID.raw_hadesite, 1, 0]]
	}
	return [];
}, 3);

IDRegistry.genBlockID("helheimite_ore");
Block.createBlock("helheimite_ore", [
	{name: "Helheimite Ore", texture: [["helheimite_ore", 0]], inCreative: true}
], BLOCK_TYPE_STONE);
ToolAPI.registerBlockMaterial(BlockID.helheimite_ore, "stone", 3, true);

Block.registerDropFunction("helheimite_ore", function(coords, blockID, blockData, level, enchant){
	if(level > 2){
		if(enchant.silk){
			return [[blockID, 1, 0]];
		}
		ToolAPI.dropOreExp(coords, 3, 7, enchant.experience);
		return [[ItemID.raw_helheimite, 1, 0]]
	}
	return [];
}, 3);

IDRegistry.genBlockID("narakasite_ore");
Block.createBlock("narakasite_ore", [
	{name: "Narakasite Ore", texture: [["narakasite_ore", 0]], inCreative: true}
], BLOCK_TYPE_STONE);
ToolAPI.registerBlockMaterial(BlockID.narakasite_ore, "stone", 3, true);

Block.registerDropFunction("narakasite_ore", function(coords, blockID, blockData, level, enchant){
	if(level > 2){
		if(enchant.silk){
			return [[blockID, 1, 0]];
		}
		ToolAPI.dropOreExp(coords, 3, 7, enchant.experience);
		return [[ItemID.raw_narakasite, 1, 0]]
	}
	return [];
}, 3);

IDRegistry.genBlockID("xibalbaite_ore");
Block.createBlock("xibalbaite_ore", [
	{name: "Xibalbaite Ore", texture: [["xibalbaite_ore", 0]], inCreative: true}
], BLOCK_TYPE_STONE);
ToolAPI.registerBlockMaterial(BlockID.xibalbaite_ore, "stone", 3, true);

Block.registerDropFunction("xibalbaite_ore", function(coords, blockID, blockData, level, enchant){
	if(level > 2){
		if(enchant.silk){
			return [[blockID, 1, 0]];
		}
		ToolAPI.dropOreExp(coords, 3, 7, enchant.experience);
		return [[ItemID.raw_xibalbaite, 1, 0]]
	}
	return [];
}, 3);

IDRegistry.genBlockID("yomite_ore");
Block.createBlock("yomite_ore", [
	{name: "Yomite Ore", texture: [["yomite_ore", 0]], inCreative: true}
], BLOCK_TYPE_STONE);
ToolAPI.registerBlockMaterial(BlockID.yomite_ore, "stone", 3, true);

Block.registerDropFunction("yomite_ore", function(coords, blockID, blockData, level, enchant){
	if(level > 2){
		if(enchant.silk){
			return [[blockID, 1, 0]];
		}
		ToolAPI.dropOreExp(coords, 3, 7, enchant.experience);
		return [[ItemID.raw_yomite, 1, 0]]
	}
	return [];
}, 3);




// file: ores_spawn.js

Callback.addCallback("GenerateChunkUnderground", function (chunkX, chunkZ) {
    for(var i=0;i<5;i++){
        var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 5, 132);
            GenerationUtils.generateOre(coords.x, coords.y, coords.z, BlockID.annwinite_ore, 0, 3);
    }
}
)

Callback.addCallback("GenerateChunkUnderground", function (chunkX, chunkZ) {
    for(var i=0;i<5;i++){
        var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 5, 132);
            GenerationUtils.generateOre(coords.x, coords.y, coords.z, BlockID.adiyuite_ore, 0, 3);
    }
}
)

Callback.addCallback("GenerateChunkUnderground", function (chunkX, chunkZ) {
    for(var i=0;i<5;i++){
        var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 5, 132);
            GenerationUtils.generateOre(coords.x, coords.y, coords.z, BlockID.duatite_ore, 0, 3);
    }
}
)

Callback.addCallback("GenerateChunkUnderground", function (chunkX, chunkZ) {
    for(var i=0;i<5;i++){
        var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 5, 132);
            GenerationUtils.generateOre(coords.x, coords.y, coords.z, BlockID.hadesite_ore, 0, 3);
    }
}
)

Callback.addCallback("GenerateChunkUnderground", function (chunkX, chunkZ) {
    for(var i=0;i<5;i++){
        var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 5, 132);
            GenerationUtils.generateOre(coords.x, coords.y, coords.z, BlockID.helheimite_ore, 0, 3);
    }
}
)

Callback.addCallback("GenerateChunkUnderground", function (chunkX, chunkZ) {
    for(var i=0;i<5;i++){
        var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 5, 132);
            GenerationUtils.generateOre(coords.x, coords.y, coords.z, BlockID.narakasite_ore, 0, 3);
    }
}
)

Callback.addCallback("GenerateChunkUnderground", function (chunkX, chunkZ) {
    for(var i=0;i<5;i++){
        var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 5, 132);
            GenerationUtils.generateOre(coords.x, coords.y, coords.z, BlockID.xibalbaite_ore, 0, 3);
    }
}
)

Callback.addCallback("GenerateChunkUnderground", function (chunkX, chunkZ) {
    for(var i=0;i<5;i++){
        var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 5, 132);
            GenerationUtils.generateOre(coords.x, coords.y, coords.z, BlockID.yomite_ore, 0, 3);
    }
}
)




// file: sacrificial.js

IDRegistry.genBlockID("sacrificial_stone");
Block.createBlock("sacrificial_stone", [
	{name: "Sacrificial Stone", texture: [["sacrificial_stone_bottom", 0], ["sacrificial_stone_top", 0], ["sacrificial_stone_side", 0], ["sacrificial_stone_side", 0], ["sacrificial_stone_side", 0], ["sacrificial_stone_side", 0]], inCreative: true}]);
ToolAPI.registerBlockMaterial(BlockID.sacrificial_stone, "stone", 2, true);

Recipes.addShaped({id: BlockID.sacrificial_stone, count: 1, data: 0}, [
    "xxx",
    "xax",
    "xxx"
], ['a', ItemID.grimoire, 0, 'x', 4, 0]);

IDRegistry.genBlockID("archaic_table");
Block.createBlock("archaic_table", [
	{name: "Archaic Table", texture: [["archaic_table_bottom", 0], ["archaic_table_top", 0], ["archaic_table_side", 0], ["archaic_table_side", 0], ["archaic_table_side", 0], ["archaic_table_side", 0]], inCreative: true}]);
ToolAPI.registerBlockMaterial(BlockID.archaic_table, "stone", 2, true);

Recipes.addShaped({id: BlockID.archaic_table, count: 1, data: 0}, [
    "xxx",
    "xax",
    "xxx"
], ['a', ItemID.grimoire, 0, 'x', 5, 0]);

Recipes.addShaped({id: BlockID.archaic_table, count: 1, data: 0}, [
    "xxx",
    "xax",
    "xxx"
], ['a', ItemID.grimoire, 0, 'x', 5, 1]);

Recipes.addShaped({id: BlockID.archaic_table, count: 1, data: 0}, [
    "xxx",
    "xax",
    "xxx"
], ['a', ItemID.grimoire, 0, 'x', 5, 2]);

Recipes.addShaped({id: BlockID.archaic_table, count: 1, data: 0}, [
    "xxx",
    "xax",
    "xxx"
], ['a', ItemID.grimoire, 0, 'x', 5, 3]);

Recipes.addShaped({id: BlockID.archaic_table, count: 1, data: 0}, [
    "xxx",
    "xax",
    "xxx"
], ['a', ItemID.grimoire, 0, 'x', 5, 4]);

Recipes.addShaped({id: BlockID.archaic_table, count: 1, data: 0}, [
    "xxx",
    "xax",
    "xxx"
], ['a', ItemID.grimoire, 0, 'x', 5, 5]);

//gui Sacrificial Stone

var guiSacrificial_Stone = new UI.StandartWindow({
    standart: {
        header: {text: {text: "Sacrificial Stone"}},
        inventory: {standart: true},
        background: {standart: true}
    },
    
    drawing: [
        {type: "bitmap", x: 495, y: 90, bitmap: "plus", scale: 1.8},
        {type: "text", x: 490, y: 65, text: "Spirits"},
        {type: "text", x: 805, y: 65, text: "God"},
],
    
    elements: {
        "slotSource1": {type: "slot", x: 400, y: 90},
        "slotSource2": {type: "slot", x: 500, y: 185},
        "slotSource3": {type: "slot", x: 600, y: 90},
        "slotResult1": {type: "slot", x: 800, y: 90},
    }
});

var SacrificialStone = {
    recipes: {},
  
   set: function(nagymet1, nagymet2, nagymet3, result){
      this.recipes[JSON.stringify([nagymet1, nagymet2, nagymet3])] = {id: result.id, count: result.count, data: result.data};
},
 
   get: function(nagymet1, nagymet2, nagymet3){
     return this.recipes[JSON.stringify([nagymet1, nagymet2, nagymet3])];
}
};

SacrificialStone.set(ItemID.shadow_spirit, ItemID.shadow_spirit, ItemID.undead_spirit, {
    id: ItemID.izanami, count: 1, data: 0
});

SacrificialStone.set(ItemID.shadow_spirit, ItemID.shadow_spirit, ItemID.war_spirit, {
    id: ItemID.ravana, count: 1, data: 0
});

SacrificialStone.set(ItemID.cold_spirit, ItemID.cold_spirit, ItemID.shadow_spirit, {
    id: ItemID.arawn, count: 1, data: 0
});

SacrificialStone.set(ItemID.mental_spirit, ItemID.mental_spirit, ItemID.shadow_spirit, {
    id: ItemID.anubis, count: 1, data: 0
});

SacrificialStone.set(ItemID.toxic_spirit, ItemID.undead_spirit, ItemID.undead_spirit, {
    id: ItemID.ah_puch, count: 1, data: 0
});

SacrificialStone.set(ItemID.flame_spirit, ItemID.shadow_spirit, ItemID.undead_spirit, {
    id: ItemID.hades, count: 1, data: 0
});

SacrificialStone.set(ItemID.cold_spirit, ItemID.pixie_spirit, ItemID.undead_spirit, {
    id: ItemID.hel, count: 1, data: 0
});

SacrificialStone.set(ItemID.flame_spirit, ItemID.flame_spirit, ItemID.shadow_spirit, {
    id: ItemID.yama, count: 1, data: 0
});

SacrificialStone.set(ItemID.stone_spirit, ItemID.stone_spirit, ItemID.stone_spirit, {
    id: ItemID.geb, count: 1, data: 0
});

SacrificialStone.set(ItemID.sand_spirit, ItemID.sand_spirit, ItemID.war_spirit, {
    id: ItemID.seth, count: 1, data: 0
});

SacrificialStone.set(ItemID.plant_spirit, ItemID.sea_spirit, ItemID.thunder_spirit, {
    id: ItemID.chaac, count: 1, data: 0
});

SacrificialStone.set(ItemID.thunder_spirit, ItemID.thunder_spirit, ItemID.war_spirit, {
    id: ItemID.thor, count: 1, data: 0
});

SacrificialStone.set(ItemID.ore_spirit, ItemID.ore_spirit, ItemID.wyvern_spirit, {
    id: ItemID.fafnir, count: 1, data: 0
});

SacrificialStone.set(ItemID.flame_spirit, ItemID.flame_spirit, ItemID.flame_spirit, {
    id: ItemID.agni, count: 1, data: 0
});

SacrificialStone.set(ItemID.pixie_spirit, ItemID.stone_spirit, ItemID.wind_spirit, {
    id: ItemID.nuwa, count: 1, data: 0
});

SacrificialStone.set(ItemID.sea_spirit, ItemID.sea_spirit, ItemID.sea_spirit, {
    id: ItemID.poseidon, count: 1, data: 0
});

SacrificialStone.set(ItemID.insect_spirit, ItemID.insect_spirit, ItemID.toxic_spirit, {
    id: ItemID.arachne, count: 1, data: 0
});

SacrificialStone.set(ItemID.flame_spirit, ItemID.flame_spirit, ItemID.hero_spirit, {
    id: ItemID.amaterasu, count: 1, data: 0
});

SacrificialStone.set(ItemID.pixie_spirit, ItemID.pixie_spirit, ItemID.plant_spirit, {
    id: ItemID.cernunnos, count: 1, data: 0
});

SacrificialStone.set(ItemID.mental_spirit, ItemID.war_spirit, ItemID.wind_spirit, {
    id: ItemID.morrigan, count: 1, data: 0
});

SacrificialStone.set(ItemID.mental_spirit, ItemID.mental_spirit, ItemID.mental_spirit, {
    id: ItemID.thoth, count: 1, data: 0
});

SacrificialStone.set(ItemID.thunder_spirit, ItemID.thunder_spirit, ItemID.wind_spirit, {
    id: ItemID.zeus, count: 1, data: 0
});

SacrificialStone.set(ItemID.ore_spirit, ItemID.stone_spirit, ItemID.wind_spirit, {
    id: ItemID.yuhuang, count: 1, data: 0
});

SacrificialStone.set(ItemID.mental_spirit, ItemID.pixie_spirit, ItemID.war_spirit, {
    id: ItemID.discordia, count: 1, data: 0
});

SacrificialStone.set(ItemID.cold_spirit, ItemID.cold_spirit, ItemID.cold_spirit, {
    id: ItemID.skadi, count: 1, data: 0
});

SacrificialStone.set(ItemID.cold_spirit, ItemID.mental_spirit, ItemID.mental_spirit, {
    id: ItemID.odin, count: 1, data: 0
});

SacrificialStone.set(ItemID.flame_spirit, ItemID.sand_spirit, ItemID.sand_spirit, {
    id: ItemID.ra, count: 1, data: 0
});

SacrificialStone.set(ItemID.plant_spirit, ItemID.stone_spirit, ItemID.sea_spirit, {
    id: ItemID.terra, count: 1, data: 0
});

SacrificialStone.set(ItemID.mental_spirit, ItemID.sea_spirit, ItemID.shadow_spirit, {
    id: ItemID.cthulhu, count: 1, data: 0
});

SacrificialStone.set(ItemID.flame_spirit, ItemID.sea_spirit, ItemID.stone_spirit, {
    id: ItemID.pele, count: 1, data: 0
});

SacrificialStone.set(ItemID.flame_spirit, ItemID.undead_spirit, ItemID.undead_spirit, {
    id: ItemID.cerberus, count: 1, data: 0
});

TileEntity.registerPrototype(BlockID.sacrificial_stone, {
    defaultValues: {
        progress: 0
    },    
    getGuiScreen: function(){
        return guiSacrificial_Stone;
    },  
    tick: function(){
        let source1 = this.container.getSlot("slotSource1");
        let source2 = this.container.getSlot("slotSource2");
        let source3 = this.container.getSlot("slotSource3");
        var resultSlot1 = this.container.getSlot("slotResult1");

let f = SacrificialStone.get(source1.id, source2.id, source3.id);
        {
        if(f!=null) {
   if((((resultSlot1.id == f.id && resultSlot1.data == f.data) && resultSlot1.count < 64) || resultSlot1.id == 0) && this.data.progress ++ >= 2){
            source1.count--;
            source2.count--;
            source3.count--;
            resultSlot1.id = f.id;
            resultSlot1.data = f.data;
            resultSlot1.count+= f.count;
            this.container.validateAll();
            this.data.progress = 0;
                }
            }
        }
        this.container.setScale("progressScale", this.data.progress / 0);
    },
});

//gui archaic_table

var guiArchaicTable = new UI.StandartWindow({
    standart: {
        header: {text: {text: "Archaic Table"}},
        inventory: {standart: true},
        background: {standart: true}
    },
    
    drawing: [
        {type: "bitmap", x: 495, y: 150, bitmap: "plus", scale: 1.8},
        {type: "bitmap", x: 700, y: 150, bitmap: "arrow", scale: 1.8},
        {type: "text", x: 405, y: 125, text: "God"},
        {type: "text", x: 590, y: 125, text: "Offering"},
        {type: "text", x: 785, y: 125, text: "Blessing"},
],
    
    elements: {
        "slotSource1": {type: "slot", x: 400, y: 150},
        "slotSource2": {type: "slot", x: 600, y: 150},
        "slotResult1": {type: "slot", x: 800, y: 150},
    }
});

var ArchaicTable = {
    recipes: {},
  
   set: function(nagymet1, nagymet2, result){
      this.recipes[JSON.stringify([nagymet1, nagymet2])] = {id: result.id, count: result.count, data: result.data};
},
 
   get: function(nagymet1, nagymet2){
     return this.recipes[JSON.stringify([nagymet1, nagymet2])];
}
};

ArchaicTable.set(ItemID.izanami, ItemID.offering, {
    id: ItemID.raw_yomite, count: 3, data: 0
});

ArchaicTable.set(ItemID.ravana, ItemID.offering, {
    id: ItemID.raw_narakasite, count: 3, data: 0
});

ArchaicTable.set(ItemID.arawn, ItemID.offering, {
    id: ItemID.raw_annwinite, count: 3, data: 0
});

ArchaicTable.set(ItemID.anubis, ItemID.offering, {
    id: ItemID.raw_duatite, count: 3, data: 0
});

ArchaicTable.set(ItemID.ah_puch, ItemID.offering, {
    id: ItemID.raw_xibalbaite, count: 3, data: 0
});

ArchaicTable.set(ItemID.hades, ItemID.offering, {
    id: ItemID.raw_hadesite, count: 3, data: 0
});

ArchaicTable.set(ItemID.hel, ItemID.offering, {
    id: ItemID.raw_helheimite, count: 3, data: 0
});

ArchaicTable.set(ItemID.yama, ItemID.offering, {
    id: ItemID.raw_diyuite, count: 3, data: 0
});

ArchaicTable.set(ItemID.geb, ItemID.offering, {
    id: 1, count: 32, data: 0
});

ArchaicTable.set(ItemID.seth, ItemID.offering, {
    id: 12, count: 32, data: 0
});

ArchaicTable.set(ItemID.chaac, ItemID.offering, {
    id: 295, count: 32, data: 0
});

ArchaicTable.set(ItemID.thor, ItemID.offering, {
    id: 265, count: 5, data: 0
});

ArchaicTable.set(ItemID.fafnir, ItemID.offering, {
    id: 266, count: 5, data: 0
});

ArchaicTable.set(ItemID.agni, ItemID.offering, {
    id: 263, count: 10, data: 0
});

ArchaicTable.set(ItemID.nuwa, ItemID.offering, {
    id: 337, count: 32, data: 0
});

ArchaicTable.set(ItemID.poseidon, ItemID.offering, {
    id: VanillaItemID.cod, count: 16, data: 0
});

ArchaicTable.set(ItemID.arachne, ItemID.offering, {
    id: 287, count: 16, data: 0
});

ArchaicTable.set(ItemID.amaterasu, ItemID.offering, {
    id: 348, count: 32, data: 0
});

ArchaicTable.set(ItemID.cernunnos, ItemID.offering, {
    id: 334, count: 8, data: 0
});

ArchaicTable.set(ItemID.morrigan, ItemID.offering, {
    id: 288, count: 8, data: 0
});

ArchaicTable.set(ItemID.thoth, ItemID.offering, {
    id: 339, count: 16, data: 0
});

ArchaicTable.set(ItemID.zeus, ItemID.offering, {
    id: 56, count: 1, data: 0
});

ArchaicTable.set(ItemID.yuhuang, ItemID.offering, {
    id: 129, count: 1, data: 0
});

ArchaicTable.set(ItemID.discordia, ItemID.offering, {
    id: 260, count: 16, data: 0
});

ArchaicTable.set(ItemID.skadi, ItemID.offering, {
    id: 35, count: 5, data: 0
});

ArchaicTable.set(ItemID.odin, ItemID.offering, {
    id: 384, count: 3, data: 0
});

ArchaicTable.set(ItemID.ra, ItemID.offering, {
    id: 377, count: 6, data: 0
});

ArchaicTable.set(ItemID.terra, ItemID.offering, {
    id: 318, count: 12, data: 0
});

ArchaicTable.set(ItemID.cthulhu, ItemID.offering, {
    id: 368, count: 1, data: 0
});

ArchaicTable.set(ItemID.pele, ItemID.offering, {
    id: 49, count: 6, data: 0
});

ArchaicTable.set(ItemID.cerberus, ItemID.offering, {
    id: 372, count: 6, data: 0
});

TileEntity.registerPrototype(BlockID.archaic_table, {
    defaultValues: {
        progress: 0
    },    
    getGuiScreen: function(){
        return guiArchaicTable;
    },  
    tick: function(){
        let source1 = this.container.getSlot("slotSource1");
        let source2 = this.container.getSlot("slotSource2");
        var resultSlot1 = this.container.getSlot("slotResult1");

let f = ArchaicTable.get(source1.id, source2.id);
        {
        if(f!=null) {
   if((((resultSlot1.id == f.id && resultSlot1.data == f.data) && resultSlot1.count < 64) || resultSlot1.id == 0) && this.data.progress ++ >= 2){
            source2.count--;
            resultSlot1.id = f.id;
            resultSlot1.data = f.data;
            resultSlot1.count+= f.count;
            this.container.validateAll();
            this.data.progress = 0;
                }
            }
        }
        this.container.setScale("progressScale", this.data.progress / 0);
    },
});




// file: raw.js

IDRegistry.genItemID("raw_annwinite");
Item.createItem("raw_annwinite", "Annwinite Raw", {name: "raw_annwinite"});

IDRegistry.genItemID("raw_diyuite");
Item.createItem("raw_diyuite", "Diyuite Raw", {name: "raw_diyuite"});

IDRegistry.genItemID("raw_duatite");
Item.createItem("raw_duatite", "Duatite Raw", {name: "raw_duatite"});

IDRegistry.genItemID("raw_hadesite");
Item.createItem("raw_hadesite", "Hadesite Raw", {name: "raw_hadesite"});

IDRegistry.genItemID("raw_helheimite");
Item.createItem("raw_helheimite", "Helheimite Raw", {name: "raw_helheimite"});

IDRegistry.genItemID("raw_narakasite");
Item.createItem("raw_narakasite", "Narakasite Raw", {name: "raw_narakasite"});

IDRegistry.genItemID("raw_xibalbaite");
Item.createItem("raw_xibalbaite", "Xibalbaite Raw", {name: "raw_xibalbaite"});

IDRegistry.genItemID("raw_yomite");
Item.createItem("raw_yomite", "Yomite Raw", {name: "raw_yomite"});




// file: ingots.js

IDRegistry.genItemID("annwinite_ingot");
Item.createItem("annwinite_ingot", "Annwinite Ingot", {name: "annwinite_ingot"});

IDRegistry.genItemID("diyuite_ingot");
Item.createItem("diyuite_ingot", "Diyuite Ingot", {name: "diyuite_ingot"});

IDRegistry.genItemID("duatite_ingot");
Item.createItem("duatite_ingot", "Duatite Ingot", {name: "duatite_ingot"});

IDRegistry.genItemID("hadesite_ingot");
Item.createItem("hadesite_ingot", "Hadesite Ingot", {name: "hadesite_ingot"});

IDRegistry.genItemID("helheimite_ingot");
Item.createItem("helheimite_ingot", "Helheimite Ingot", {name: "helheimite_ingot"});

IDRegistry.genItemID("narakasite_ingot");
Item.createItem("narakasite_ingot", "Narakasite Ingot", {name: "narakasite_ingot"});

IDRegistry.genItemID("xibalbaite_ingot");
Item.createItem("xibalbaite_ingot", "Xibalbaite Ingot", {name: "xibalbaite_ingot"});

IDRegistry.genItemID("yomite_ingot");
Item.createItem("yomite_ingot", "Yomite Ingot", {name: "yomite_ingot"});

Recipes.addFurnace(ItemID.raw_annwinite, ItemID.annwinite_ingot, 0);
Recipes.addFurnace(ItemID.raw_diyuite, ItemID.diyuite_ingot, 0);
Recipes.addFurnace(ItemID.raw_duatite, ItemID.duatite_ingot, 0);
Recipes.addFurnace(ItemID.raw_hadesite, ItemID.hadesite_ingot, 0);
Recipes.addFurnace(ItemID.raw_helheimite, ItemID.helheimite_ingot, 0);
Recipes.addFurnace(ItemID.raw_narakasite, ItemID.narakasite_ingot, 0);
Recipes.addFurnace(ItemID.raw_xibalbaite, ItemID.xibalbaite_ingot, 0);
Recipes.addFurnace(ItemID.raw_yomite, ItemID.yomite_ingot, 0);




// file: gods.js

IDRegistry.genItemID("agni");
Item.createItem("agni", "Agni", {name: "agni", meta: 0}, {stack: 1});

IDRegistry.genItemID("amaterasu");
Item.createItem("amaterasu", "Amaterasu", {name: "amaterasu", meta: 0}, {stack: 1});

IDRegistry.genItemID("anubis");
Item.createItem("anubis", "Anubis", {name: "anubis", meta: 0}, {stack: 1});

IDRegistry.genItemID("arachne");
Item.createItem("arachne", "Arachne", {name: "arachne", meta: 0}, {stack: 1});

IDRegistry.genItemID("arawn");
Item.createItem("arawn", "Arawn", {name: "arawn", meta: 0}, {stack: 1});

IDRegistry.genItemID("cerberus");
Item.createItem("cerberus", "Cerberus", {name: "cerberus", meta: 0}, {stack: 1});

IDRegistry.genItemID("cernunnos");
Item.createItem("cernunnos", "Cernunnos", {name: "cernunnos", meta: 0}, {stack: 1});

IDRegistry.genItemID("chaac");
Item.createItem("chaac", "Chaac", {name: "chaac", meta: 0}, {stack: 1});

IDRegistry.genItemID("cthulhu");
Item.createItem("cthulhu", "Cthulhu", {name: "cthulhu", meta: 0}, {stack: 1});

IDRegistry.genItemID("discordia");
Item.createItem("discordia", "Discordia", {name: "discordia", meta: 0}, {stack: 1});

IDRegistry.genItemID("fafnir");
Item.createItem("fafnir", "Fafnir", {name: "fafnir", meta: 0}, {stack: 1});

IDRegistry.genItemID("geb");
Item.createItem("geb", "Geb", {name: "geb", meta: 0}, {stack: 1});

IDRegistry.genItemID("hades");
Item.createItem("hades", "Hades", {name: "hades", meta: 0}, {stack: 1});

IDRegistry.genItemID("hel");
Item.createItem("hel", "Hel", {name: "hel", meta: 0}, {stack: 1});

IDRegistry.genItemID("izanami");
Item.createItem("izanami", "Izanami", {name: "izanami", meta: 0}, {stack: 1});

IDRegistry.genItemID("morrigan");
Item.createItem("morrigan", "Morrigan", {name: "morrigan", meta: 0}, {stack: 1});

IDRegistry.genItemID("nuwa");
Item.createItem("nuwa", "Nu Wa", {name: "nuwa", meta: 0}, {stack: 1});

IDRegistry.genItemID("odin");
Item.createItem("odin", "Odin", {name: "odin", meta: 0}, {stack: 1});

IDRegistry.genItemID("pele");
Item.createItem("pele", "Pele", {name: "pele", meta: 0}, {stack: 1});

IDRegistry.genItemID("poseidon");
Item.createItem("poseidon", "Poseidon", {name: "poseidon", meta: 0}, {stack: 1});

IDRegistry.genItemID("ra");
Item.createItem("ra", "Ra", {name: "ra", meta: 0}, {stack: 1});

IDRegistry.genItemID("ravana");
Item.createItem("ravana", "Ravana", {name: "ravana", meta: 0}, {stack: 1});

IDRegistry.genItemID("seth");
Item.createItem("seth", "Seth", {name: "seth", meta: 0}, {stack: 1});

IDRegistry.genItemID("skadi");
Item.createItem("skadi", "Skadi", {name: "skadi", meta: 0}, {stack: 1});

IDRegistry.genItemID("terra");
Item.createItem("terra", "Terra", {name: "terra", meta: 0}, {stack: 1});

IDRegistry.genItemID("thor");
Item.createItem("thor", "Thor", {name: "thor", meta: 0}, {stack: 1});

IDRegistry.genItemID("thoth");
Item.createItem("thoth", "Thoth", {name: "thoth", meta: 0}, {stack: 1});

IDRegistry.genItemID("ah_puch");
Item.createItem("ah_puch", "Ah Puch", {name: "ah_puch", meta: 0}, {stack: 1});

IDRegistry.genItemID("yama");
Item.createItem("yama", "Yama", {name: "yama", meta: 0}, {stack: 1});

IDRegistry.genItemID("yuhuang");
Item.createItem("yuhuang", "Yu Huang", {name: "yuhuang", meta: 0}, {stack: 1});

IDRegistry.genItemID("zeus");
Item.createItem("zeus", "Zeus", {name: "zeus", meta: 0}, {stack: 1});




// file: items.js

IDRegistry.genItemID("grimoire");
Item.createItem("grimoire", "Grimoire", {name: "grimoire", meta: 0}, {stack: 1});

ToolAPI.addToolMaterial("grimoire", {durability: 15, level: 1, efficiency: 5, damage: 1, enchantability: 5});
ToolLib.setTool(ItemID.grimoire, "grimoire", ToolType.grimoire);

/*let Ragnarok = {}
Ragnarok.registerClicking = function (block, id, item)

{Item.registerUseFunction(ItemID.grimoire, function(coords, item, block, player) {
    if(block.id == BlockID.arid_box) {
        var regi = BlockSource.getDefaultForActor(Player.get());
        regi.setBlock(coords.x, coords.y, coords.z, BlockID.arid_box_released, 0);
        Entity.setCarriedItem(player, item.id, item.count, item.data - 1);}})}*/

Recipes.addShaped({id: ItemID.grimoire, count: 1, data: 0}, [
    "qwe",
    "rty",
    "uio"
], ['q', ItemID.diyuite_ingot, 0, 'w', ItemID.hadesite_ingot, 0, 'e', ItemID.narakasite_ingot, 0, 'r', ItemID.helheimite_ingot, 0, 't', 340, 0, 'y', ItemID.yomite_ingot, 0, 'u', ItemID.annwinite_ingot, 0, 'i', ItemID.duatite_ingot, 0, 'o', ItemID.xibalbaite_ingot, 0]);

IDRegistry.genItemID("offering");
Item.createItem("offering", "Offering", {name: "offering"});

Recipes.addShaped({id: ItemID.offering, count: 1, data: 0}, [
    "ax"
], ['a', ItemID.annwinite_ingot, 0, 'x', 339, 0]);

Recipes.addShaped({id: ItemID.offering, count: 1, data: 0}, [
    "ax"
], ['a', ItemID.diyuite_ingot, 0, 'x', 339, 0]);

Recipes.addShaped({id: ItemID.offering, count: 1, data: 0}, [
    "ax"
], ['a', ItemID.duatite_ingot, 0, 'x', 339, 0]);

Recipes.addShaped({id: ItemID.offering, count: 1, data: 0}, [
    "ax"
], ['a', ItemID.hadesite_ingot, 0, 'x', 339, 0]);

Recipes.addShaped({id: ItemID.offering, count: 1, data: 0}, [
    "ax"
], ['a', ItemID.helheimite_ingot, 0, 'x', 339, 0]);

Recipes.addShaped({id: ItemID.offering, count: 1, data: 0}, [
    "ax"
], ['a', ItemID.narakasite_ingot, 0, 'x', 339, 0]);

Recipes.addShaped({id: ItemID.offering, count: 1, data: 0}, [
    "ax"
], ['a', ItemID.xibalbaite_ingot, 0, 'x', 339, 0]);

Recipes.addShaped({id: ItemID.offering, count: 1, data: 0}, [
    "ax"
], ['a', ItemID.yomite_ingot, 0, 'x', 339, 0]);




// file: spirit.js

IDRegistry.genItemID("cold_spirit");
Item.createItem("cold_spirit", "Cold Spirit", {name: "cold_spirit"});

IDRegistry.genItemID("flame_spirit");
Item.createItem("flame_spirit", "Flame Spirit", {name: "flame_spirit"});

IDRegistry.genItemID("hero_spirit");
Item.createItem("hero_spirit", "Hero Spirit", {name: "hero_spirit"});

IDRegistry.genItemID("insect_spirit");
Item.createItem("insect_spirit", "Insect Spirit", {name: "insect_spirit"});

IDRegistry.genItemID("mental_spirit");
Item.createItem("mental_spirit", "Mental Spirit", {name: "mental_spirit"});

IDRegistry.genItemID("ore_spirit");
Item.createItem("ore_spirit", "Ore Spirit", {name: "ore_spirit"});

IDRegistry.genItemID("pixie_spirit");
Item.createItem("pixie_spirit", "Pixie Spirit", {name: "pixie_spirit"});

IDRegistry.genItemID("plant_spirit");
Item.createItem("plant_spirit", "Plant Spirit", {name: "plant_spirit"});

IDRegistry.genItemID("sand_spirit");
Item.createItem("sand_spirit", "Sand Spirit", {name: "sand_spirit"});

IDRegistry.genItemID("sea_spirit");
Item.createItem("sea_spirit", "Sea Spirit", {name: "sea_spirit"});

IDRegistry.genItemID("shadow_spirit");
Item.createItem("shadow_spirit", "Shadow Spirit", {name: "shadow_spirit"});

IDRegistry.genItemID("stone_spirit");
Item.createItem("stone_spirit", "Stone Spirit", {name: "stone_spirit"});

IDRegistry.genItemID("thunder_spirit");
Item.createItem("thunder_spirit", "Thunder Spirit", {name: "thunder_spirit"});

IDRegistry.genItemID("toxic_spirit");
Item.createItem("toxic_spirit", "Toxic Spirit", {name: "toxic_spirit"});

IDRegistry.genItemID("undead_spirit");
Item.createItem("undead_spirit", "Undead Spirit", {name: "undead_spirit"});

IDRegistry.genItemID("war_spirit");
Item.createItem("war_spirit", "War Spirit", {name: "war_spirit"});

IDRegistry.genItemID("wind_spirit");
Item.createItem("wind_spirit", "Wind Spirit", {name: "wind_spirit"});

IDRegistry.genItemID("wyvern_spirit");
Item.createItem("wyvern_spirit", "Wyvern Spirit", {name: "wyvern_spirit"});




// file: sword.js

IDRegistry.genItemID("fragarach");
IDRegistry.genItemID("gram");
IDRegistry.genItemID("jian");
IDRegistry.genItemID("katana");
IDRegistry.genItemID("khopesh");
IDRegistry.genItemID("macana");
IDRegistry.genItemID("macuahuitl");
IDRegistry.genItemID("trishula");
IDRegistry.genItemID("xiphos");

Item.createItem("fragarach", "Fragarach", {name: "fragarach", meta: 0}, {stack: 1});
Item.createItem("gram", "Gram", {name: "gram", meta: 0}, {stack: 1});
Item.createItem("jian", "Jian", {name: "jian", meta: 0}, {stack: 1});
Item.createItem("katana", "Katana", {name: "katana", meta: 0}, {stack: 1});
Item.createItem("khopesh", "Khopesh", {name: "khopesh", meta: 0}, {stack: 1});
Item.createItem("macana", "Macana", {name: "macana", meta: 0}, {stack: 1});
Item.createItem("macuahuitl", "Macuahuitl", {name: "macuahuitl", meta: 0}, {stack: 1});
Item.createItem("trishula", "Trishula", {name: "trishula", meta: 0}, {stack: 1});
Item.createItem("xiphos", "Xiphos", {name: "xiphos", meta: 0}, {stack: 1});

ToolAPI.addToolMaterial("fragarach", {durability: 1050, level: 3, efficiency: 10, damage: 6, enchantability: 14});
ToolAPI.addToolMaterial("gram", {durability: 500, level: 3, efficiency: 10, damage: 6, enchantability: 14});
ToolAPI.addToolMaterial("jian", {durability: 300, level: 3, efficiency: 10, damage: 6, enchantability: 14});
ToolAPI.addToolMaterial("katana", {durability: 250, level: 3, efficiency: 10, damage: 6, enchantability: 14});
ToolAPI.addToolMaterial("khopesh", {durability: 1000, level: 3, efficiency: 10, damage: 6, enchantability: 14});
ToolAPI.addToolMaterial("macana", {durability: 800, level: 3, efficiency: 10, damage: 6, enchantability: 14});
ToolAPI.addToolMaterial("macuahuitl", {durability: 800, level: 3, efficiency: 10, damage: 6, enchantability: 14});
ToolAPI.addToolMaterial("trishula", {durability: 550, level: 3, efficiency: 10, damage: 6, enchantability: 14});
ToolAPI.addToolMaterial("xiphos", {durability: 750, level: 3, efficiency: 10, damage: 6, enchantability: 14});

ToolLib.setTool(ItemID.fragarach, "fragarach", ToolType.sword);
ToolLib.setTool(ItemID.gram, "gram", ToolType.sword);
ToolLib.setTool(ItemID.jian, "jian", ToolType.sword);
ToolLib.setTool(ItemID.katana, "katana", ToolType.sword);
ToolLib.setTool(ItemID.khopesh, "khopesh", ToolType.sword);
ToolLib.setTool(ItemID.macana, "macana", ToolType.sword);
ToolLib.setTool(ItemID.macuahuitl, "macuahuitl", ToolType.sword);
ToolLib.setTool(ItemID.trishula, "trishula", ToolType.sword);
ToolLib.setTool(ItemID.xiphos, "xiphos", ToolType.sword);

Recipes.addShaped({id: ItemID.katana, count: 1, data: 0}, [
    " x ",
    " x ",
    " a "
], ['a', 280, 0, 'x', ItemID.yomite_ingot, 0]);

Recipes.addShaped({id: ItemID.jian, count: 1, data: 0}, [
    " x ",
    " x ",
    " a "
], ['a', 280, 0, 'x', ItemID.diyuite_ingot, 0]);

Recipes.addShaped({id: ItemID.gram, count: 1, data: 0}, [
    " x ",
    " x ",
    " a "
], ['a', 280, 0, 'x', ItemID.helheimite_ingot, 0]);

Recipes.addShaped({id: ItemID.trishula, count: 1, data: 0}, [
    "x x",
    " a ",
    " a "
], ['a', 280, 0, 'x', ItemID.narakasite_ingot, 0]);

Recipes.addShaped({id: ItemID.xiphos, count: 1, data: 0}, [
    " x ",
    " x ",
    " a "
], ['a', 280, 0, 'x', ItemID.hadesite_ingot, 0]);

Recipes.addShaped({id: ItemID.macana, count: 1, data: 0}, [
    " x ",
    " a ",
    " x "
], ['a', 280, 0, 'x', ItemID.xibalbaite_ingot, 0]);

Recipes.addShaped({id: ItemID.khopesh, count: 1, data: 0}, [
    " x ",
    "x  ",
    " a "
], ['a', 280, 0, 'x', ItemID.duatite_ingot, 0]);

Recipes.addShaped({id: ItemID.fragarach, count: 1, data: 0}, [
    " x ",
    " x ",
    " a "
], ['a', 280, 0, 'x', ItemID.annwinite_ingot, 0]);

Recipes.addShaped({id: ItemID.macuahuitl, count: 1, data: 0}, [
    "axa",
    " a ",
    " a "
], ['a', 280, 0, 'x', ItemID.xibalbaite_ingot, 0]);




// file: blocks.js

var BLOCK_TYPE_LIGHT = Block.createSpecialType({
	destroytime: 2,
	explosionres: 0.5,
	opaque: false,
	lightopacity: 0,
	renderlayer: 3,
	lightlevel: 15
});

IDRegistry.genBlockID("annwinite_block");
Block.createBlock("annwinite_block", [
	{name: "Annwinite Block", texture: [["annwinite_block", 0]], inCreative: true}]);
ToolAPI.registerBlockMaterial(BlockID.annwinite_block, "stone", 2, true);

Recipes.addShaped({id: BlockID.annwinite_block, count: 1, data: 0}, [
    "xxx",
    "xxx",
    "xxx"
], ['x', ItemID.annwinite_ingot, 0]);

Recipes.addShaped({id: ItemID.annwinite_ingot, count: 9, data: 0}, [
    " x "
], ['x', BlockID.annwinite_block, 0]);

IDRegistry.genBlockID("diyuite_block");
Block.createBlock("diyuite_block", [
	{name: "Diyuite Block", texture: [["diyuite_block", 0]], inCreative: true}]);
ToolAPI.registerBlockMaterial(BlockID.diyuite_block, "stone", 2, true);

Recipes.addShaped({id: BlockID.diyuite_block, count: 1, data: 0}, [
    "xxx",
    "xxx",
    "xxx"
], ['x', ItemID.diyuite_ingot, 0]);

Recipes.addShaped({id: ItemID.diyuite_ingot, count: 9, data: 0}, [
    " x "
], ['x', BlockID.diyuite_block, 0]);

IDRegistry.genBlockID("duatite_block");
Block.createBlock("duatite_block", [
	{name: "Duatite Block", texture: [["duatite_block", 0]], inCreative: true}]);
ToolAPI.registerBlockMaterial(BlockID.duatite_block, "stone", 2, true);

Recipes.addShaped({id: BlockID.duatite_block, count: 1, data: 0}, [
    "xxx",
    "xxx",
    "xxx"
], ['x', ItemID.duatite_ingot, 0]);

Recipes.addShaped({id: ItemID.duatite_ingot, count: 9, data: 0}, [
    " x "
], ['x', BlockID.duatite_block, 0]);

IDRegistry.genBlockID("hadesite_block");
Block.createBlock("hadesite_block", [
	{name: "Hadesite Block", texture: [["hadesite_block", 0]], inCreative: true}]);
ToolAPI.registerBlockMaterial(BlockID.hadesite_block, "stone", 2, true);

Recipes.addShaped({id: BlockID.hadesite_block, count: 1, data: 0}, [
    "xxx",
    "xxx",
    "xxx"
], ['x', ItemID.hadesite_ingot, 0]);

Recipes.addShaped({id: ItemID.hadesite_ingot, count: 9, data: 0}, [
    " x "
], ['x', BlockID.hadesite_block, 0]);

IDRegistry.genBlockID("helheimite_block");
Block.createBlock("helheimite_block", [
	{name: "Helheimite Block", texture: [["helheimite_block", 0]], inCreative: true}]);
ToolAPI.registerBlockMaterial(BlockID.helheimite_block, "stone", 2, true);

Recipes.addShaped({id: BlockID.helheimite_block, count: 1, data: 0}, [
    "xxx",
    "xxx",
    "xxx"
], ['x', ItemID.helheimite_ingot, 0]);

Recipes.addShaped({id: ItemID.helheimite_ingot, count: 9, data: 0}, [
    " x "
], ['x', BlockID.helheimite_block, 0]);

IDRegistry.genBlockID("narakasite_block");
Block.createBlock("narakasite_block", [
	{name: "Narakasite Block", texture: [["narakasite_block", 0]], inCreative: true}]);
ToolAPI.registerBlockMaterial(BlockID.narakasite_block, "stone", 2, true);

Recipes.addShaped({id: BlockID.narakasite_block, count: 1, data: 0}, [
    "xxx",
    "xxx",
    "xxx"
], ['x', ItemID.narakasite_ingot, 0]);

Recipes.addShaped({id: ItemID.narakasite_ingot, count: 9, data: 0}, [
    " x "
], ['x', BlockID.narakasite_block, 0]);

IDRegistry.genBlockID("xibalbaite_block");
Block.createBlock("xibalbaite_block", [
	{name: "Xibalbaite Block", texture: [["xibalbaite_block", 0]], inCreative: true}]);
ToolAPI.registerBlockMaterial(BlockID.xibalbaite_block, "stone", 2, true);

Recipes.addShaped({id: BlockID.xibalbaite_block, count: 1, data: 0}, [
    "xxx",
    "xxx",
    "xxx"
], ['x', ItemID.xibalbaite_ingot, 0]);

Recipes.addShaped({id: ItemID.xibalbaite_ingot, count: 9, data: 0}, [
    " x "
], ['x', BlockID.xibalbaite_block, 0]);

IDRegistry.genBlockID("yomite_block");
Block.createBlock("yomite_block", [
	{name: "Yomite Block", texture: [["yomite_block", 0]], inCreative: true}]);
ToolAPI.registerBlockMaterial(BlockID.yomite_block, "stone", 2, true);

Recipes.addShaped({id: BlockID.yomite_block, count: 1, data: 0}, [
    "xxx",
    "xxx",
    "xxx"
], ['x', ItemID.yomite_ingot, 0]);

Recipes.addShaped({id: ItemID.yomite_ingot, count: 9, data: 0}, [
    " x "
], ['x', BlockID.yomite_block, 0]);

IDRegistry.genBlockID("ancient_brick");
Block.createBlock("ancient_brick", [
	{name: "Ancient Brick", texture: [["ancient_brick", 0]], inCreative: true}]);
ToolAPI.registerBlockMaterial(BlockID.ancient_brick, "stone", 2, true);

Recipes.addShaped({id: BlockID.ancient_brick, count: 2, data: 0}, [
    " x ",
    "xax",
    " x "
], ['a', ItemID.xibalbaite_ingot, 0, 'x', 336, 0]);

IDRegistry.genBlockID("viking_lamp");
Block.createBlock("viking_lamp", [
	{name: "Viking Lamp", texture: [["viking_lamp", 0]], inCreative: true}], BLOCK_TYPE_LIGHT);
ToolAPI.registerBlockMaterial(BlockID.viking_lamp, "stone", 2, true);

Recipes.addShaped({id: BlockID.viking_lamp, count: 1, data: 0}, [
    " x ",
    "xax",
    " x "
], ['x', ItemID.helheimite_ingot, 0, 'a', 89, 0]);

IDRegistry.genBlockID("triskelion_lamp");
Block.createBlock("triskelion_lamp", [
	{name: "Triskelion Lamp", texture: [["triskelion_lamp", 0]], inCreative: true}], BLOCK_TYPE_LIGHT);
ToolAPI.registerBlockMaterial(BlockID.triskelion_lamp, "stone", 2, true);

Recipes.addShaped({id: BlockID.triskelion_lamp, count: 1, data: 0}, [
    " x ",
    "xax",
    " x "
], ['x', ItemID.annwinite_ingot, 0, 'a', 89, 0]);

IDRegistry.genBlockID("chochin");
Block.createBlock("chochin", [
	{name: "Chochin", texture: [["chochin_top", 0], ["chochin_top", 0], ["chochin_side", 0], ["chochin_side", 0], ["chochin_side", 0], ["chochin_side", 0]], inCreative: true}], BLOCK_TYPE_LIGHT);
ToolAPI.registerBlockMaterial(BlockID.chochin, "stone", 2, true);

Recipes.addShaped({id: BlockID.chochin, count: 1, data: 0}, [
    " x ",
    "xax",
    " x "
], ['a', 89, 0, 'x', ItemID.yomite_ingot, 0]);

IDRegistry.genBlockID("quadruple_shoji");
Block.createBlock("quadruple_shoji", [
	{name: "Quadruple Shoji", texture: [["quadruple_shoji", 0]], inCreative: true}]);
ToolAPI.registerBlockMaterial(BlockID.quadruple_shoji, "stone", 2, true);

Recipes.addShaped({id: BlockID.quadruple_shoji, count: 2, data: 0}, [
    "x x",
    " a ",
    "x x"
], ['a', ItemID.yomite_ingot, 0, 'x', 339, 0]);

IDRegistry.genBlockID("double_shoji");
Block.createBlock("double_shoji", [
	{name: "Double Shoji", texture: [["double_shoji", 0]], inCreative: true}]);
ToolAPI.registerBlockMaterial(BlockID.double_shoji, "stone", 2, true);

Recipes.addShaped({id: BlockID.double_shoji, count: 1, data: 0}, [
    " x ",
    " a ",
    " x "
], ['a', ItemID.yomite_ingot, 0, 'x', 339, 0]);

IDRegistry.genBlockID("yellow_roof");
Block.createBlock("yellow_roof", [
	{name: "Yellow Roof", texture: [["yellow_roof", 0]], inCreative: true}]);
ToolAPI.registerBlockMaterial(BlockID.yellow_roof, "stone", 2, true);

Recipes.addShaped({id: BlockID.yellow_roof, count: 4, data: 0}, [
    "axa"
], ['a', 266, 0, 'x', ItemID.diyuite_ingot, 0]);

IDRegistry.genBlockID("terracotta_warrior_face");
Block.createBlockWithRotation("terracotta_warrior_face", [
	{name: "Terracotta Warrior Face", texture: [["terracotta_warrior_top", 0], ["terracotta_warrior_top", 0], ["terracotta_warrior_side", 0], ["terracotta_warrior_face", 0], ["terracotta_warrior_side", 0], ["terracotta_warrior_side", 0]], inCreative: true}]);
ToolAPI.registerBlockMaterial(BlockID.terracotta_warrior_face, "stone", 2, true);

Recipes.addShaped({id: BlockID.terracotta_warrior_face, count: 1, data: 0}, [
    "axa"
], ['a', 159, 0, 'x', ItemID.diyuite_ingot, 0]);

IDRegistry.genBlockID("terracotta_warrior_feet");
Block.createBlock("terracotta_warrior_feet", [
	{name: "Terracotta Warrior Feet", texture: [["terracotta_warrior_top", 0], ["terracotta_warrior_top", 0], ["terracotta_warrior_feet", 0], ["terracotta_warrior_feet", 0], ["terracotta_warrior_feet", 0], ["terracotta_warrior_feet", 0]], inCreative: true}]);
ToolAPI.registerBlockMaterial(BlockID.terracotta_warrior_feet, "stone", 2, true);

Recipes.addShaped({id: BlockID.terracotta_warrior_feet, count: 1, data: 0}, [
    " a ",
    " x ",
    " a "
], ['a', 159, 0, 'x', ItemID.diyuite_ingot, 0]);

IDRegistry.genBlockID("terracotta_warrior_block");
Block.createBlock("terracotta_warrior_block", [
	{name: "Terracotta Warrior Block", texture: [["terracotta_warrior_top", 0], ["terracotta_warrior_top", 0], ["terracotta_warrior_side", 0], ["terracotta_warrior_side", 0], ["terracotta_warrior_side", 0], ["terracotta_warrior_side", 0]], inCreative: true}]);
ToolAPI.registerBlockMaterial(BlockID.terracotta_warrior_block, "stone", 2, true);

Recipes.addShaped({id: BlockID.terracotta_warrior_block, count: 1, data: 0}, [
    "ax "
], ['a', 159, 0, 'x', ItemID.diyuite_ingot, 0]);

IDRegistry.genBlockID("draugr_skull");
Block.createBlockWithRotation("draugr_skull", [
	{name: "Draugr Skull", texture: [["draugr_skull_top", 0], ["draugr_skull_top", 0], ["draugr_skull_side", 0], ["draugr_skull", 0], ["draugr_skull_side", 0], ["draugr_skull_side", 0]], inCreative: true}]);
ToolAPI.registerBlockMaterial(BlockID.draugr_skull, "stone", 2, true);

Recipes.addShaped({id: BlockID.draugr_skull, count: 1, data: 0}, [
    " x ",
    "xax",
    " x "
], ['a', ItemID.helheimite_ingot, 0, 'x', 352, 0]);

IDRegistry.genBlockID("mayan_skull");
Block.createBlockWithRotation("mayan_skull", [
	{name: "Mayan Skull", texture: [["mayan_skull_top", 0], ["mayan_skull_top", 0], ["mayan_skull_side", 0], ["mayan_skull", 0], ["mayan_skull_side", 0], ["mayan_skull_side", 0]], inCreative: true}]);
ToolAPI.registerBlockMaterial(BlockID.mayan_skull, "stone", 2, true);

Recipes.addShaped({id: BlockID.mayan_skull, count: 1, data: 0}, [
    " x ",
    "xax",
    " x "
], ['a', ItemID.xibalbaite_ingot, 0, 'x', 352, 0]);

IDRegistry.genBlockID("green_pattern_wall");
Block.createBlock("green_pattern_wall", [
	{name: "Green Pattern Wall", texture: [["ancient_brick", 0], ["ancient_brick", 0], ["green_pattern_wall", 0], ["green_pattern_wall", 0], ["green_pattern_wall", 0], ["green_pattern_wall", 0]], inCreative: true}]);
ToolAPI.registerBlockMaterial(BlockID.green_pattern_wall, "stone", 2, true);

Recipes.addShaped({id: BlockID.green_pattern_wall, count: 4, data: 0}, [
    " x ",
    "xax",
    " x "
], ['a', 336, 0, 'x', ItemID.xibalbaite_ingot, 0]);

IDRegistry.genBlockID("gold_pattern_wall");
Block.createBlock("gold_pattern_wall", [
	{name: "Gold Pattern Wall", texture: [["ancient_brick", 0], ["ancient_brick", 0], ["gold_pattern_wall", 0], ["gold_pattern_wall", 0], ["gold_pattern_wall", 0], ["gold_pattern_wall", 0]], inCreative: true}]);
ToolAPI.registerBlockMaterial(BlockID.gold_pattern_wall, "stone", 2, true);

Recipes.addShaped({id: BlockID.gold_pattern_wall, count: 4, data: 0}, [
    " x ",
    "xax",
    " x "
], ['a', 266, 0, 'x', ItemID.xibalbaite_ingot, 0]);

IDRegistry.genBlockID("glyphs");
Block.createBlock("glyphs", [
	{name: "Glyphs", texture: [["ancient_brick", 0], ["ancient_brick", 0], ["glyphs", 0], ["glyphs", 0], ["glyphs", 0], ["glyphs", 0]], inCreative: true}]);
ToolAPI.registerBlockMaterial(BlockID.glyphs, "stone", 2, true);

Recipes.addShaped({id: BlockID.glyphs, count: 1, data: 0}, [
    "ax "
], ['a', ItemID.xibalbaite_ingot, 0, 'x', 159, 0]);

IDRegistry.genBlockID("papyrus_shelf");
Block.createBlock("papyrus_shelf", [
	{name: "Papyrus Shelf", texture: [["papyrus_shelf_top", 0], ["papyrus_shelf_top", 0], ["papyrus_shelf", 0], ["papyrus_shelf", 0], ["papyrus_shelf", 0], ["papyrus_shelf", 0]], inCreative: true}]);
ToolAPI.registerBlockMaterial(BlockID.papyrus_shelf, "stone", 2, true);

Recipes.addShaped({id: BlockID.papyrus_shelf, count: 1, data: 0}, [
    "xxx",
    "asa",
    "xxx"
], ['a', 339, 0, 'x', 5, 0, 's', ItemID.duatite_ingot, 0]);

Recipes.addShaped({id: BlockID.papyrus_shelf, count: 1, data: 0}, [
    "xxx",
    "asa",
    "xxx"
], ['a', 339, 0, 'x', 5, 1, 's', ItemID.duatite_ingot, 0]);

Recipes.addShaped({id: BlockID.papyrus_shelf, count: 1, data: 0}, [
    "xxx",
    "asa",
    "xxx"
], ['a', 339, 0, 'x', 5, 2, 's', ItemID.duatite_ingot, 0]);

Recipes.addShaped({id: BlockID.papyrus_shelf, count: 1, data: 0}, [
    "xxx",
    "asa",
    "xxx"
], ['a', 339, 0, 'x', 5, 3, 's', ItemID.duatite_ingot, 0]);

Recipes.addShaped({id: BlockID.papyrus_shelf, count: 1, data: 0}, [
    "xxx",
    "asa",
    "xxx"
], ['a', 339, 0, 'x', 5, 4, 's', ItemID.duatite_ingot, 0]);

Recipes.addShaped({id: BlockID.papyrus_shelf, count: 1, data: 0}, [
    "xxx",
    "asa",
    "xxx"
], ['a', 339, 0, 'x', 5, 5, 's', ItemID.duatite_ingot, 0]);

IDRegistry.genBlockID("egyptian_pillar");
Block.createBlock("egyptian_pillar", [
	{name: "Egyptian Pillar", texture: [["egyptian_pillar_top", 0], ["egyptian_pillar_top", 0], ["egyptian_pillar", 0], ["egyptian_pillar", 0], ["egyptian_pillar", 0], ["egyptian_pillar", 0]], inCreative: true}]);
ToolAPI.registerBlockMaterial(BlockID.egyptian_pillar, "stone", 2, true);

Recipes.addShaped({id: BlockID.egyptian_pillar, count: 3, data: 0}, [
    "xxx",
    "aaa",
    "xxx"
], ['a', 4, 0, 'x', ItemID.duatite_ingot, 0]);

IDRegistry.genBlockID("egyptian_pillar_core");
Block.createBlock("egyptian_pillar_core", [
	{name: "Egyptian Pillar Core", texture: [["egyptian_pillar_core_top", 0], ["egyptian_pillar_core_top", 0], ["egyptian_pillar_core", 0], ["egyptian_pillar_core", 0], ["egyptian_pillar_core", 0], ["egyptian_pillar_core", 0]], inCreative: true}]);
ToolAPI.registerBlockMaterial(BlockID.egyptian_pillar_core, "stone", 2, true);

Recipes.addShaped({id: BlockID.egyptian_pillar_core, count: 3, data: 0}, [
    "axa",
    "axa",
    "axa"
], ['a', ItemID.duatite_ingot, 0, 'x', 4, 0]);

IDRegistry.genBlockID("egyptian_pillar_top");
Block.createBlock("egyptian_pillar_top", [
	{name: "Egyptian Pillar Top", texture: [["egyptian_pillar_top", 0], ["egyptian_pillar_top", 0], ["egyptian_pillar_top_side", 0], ["egyptian_pillar_top_side", 0], ["egyptian_pillar_top_side", 0], ["egyptian_pillar_top_side", 0]], inCreative: true}]);
ToolAPI.registerBlockMaterial(BlockID.egyptian_pillar_top, "stone", 2, true);

Recipes.addShaped({id: BlockID.egyptian_pillar_top, count: 3, data: 0}, [
    "aaa",
    "xxx",
    "xxx"
], ['a', ItemID.duatite_ingot, 0, 'x', 4, 0]);

IDRegistry.genBlockID("greek_pillar");
Block.createBlock("greek_pillar", [
	{name: "Greek Pillar", texture: [["greek_pillar_top", 0], ["greek_pillar_top", 0], ["greek_pillar", 0], ["greek_pillar", 0], ["greek_pillar", 0], ["greek_pillar", 0]], inCreative: true}]);
ToolAPI.registerBlockMaterial(BlockID.greek_pillar, "stone", 2, true);

Recipes.addShaped({id: BlockID.greek_pillar, count: 6, data: 0}, [
    "xax",
    "xax",
    "xax"
], ['a', ItemID.hadesite_ingot, 0, 'x', 4, 0]);

IDRegistry.genBlockID("greek_red_pillar");
Block.createBlock("greek_red_pillar", [
	{name: "Greek Red Pillar", texture: [["greek_pillar_top", 0], ["greek_pillar_top", 0], ["greek_red_pillar", 0], ["greek_red_pillar", 0], ["greek_red_pillar", 0], ["greek_red_pillar", 0]], inCreative: true}]);
ToolAPI.registerBlockMaterial(BlockID.greek_red_pillar, "stone", 2, true);

Recipes.addShaped({id: BlockID.greek_red_pillar, count: 6, data: 0}, [
    "xax",
    "xox",
    "xax"
], ['a', ItemID.hadesite_ingot, 0, 'x', 4, 0, 'o', VanillaItemID.red_dye, 0]);

IDRegistry.genBlockID("greek_yellow_pillar");
Block.createBlock("greek_yellow_pillar", [
	{name: "Greek Yellow Pillar", texture: [["greek_pillar_top", 0], ["greek_pillar_top", 0], ["greek_yellow_pillar", 0], ["greek_yellow_pillar", 0], ["greek_yellow_pillar", 0], ["greek_yellow_pillar", 0]], inCreative: true}]);
ToolAPI.registerBlockMaterial(BlockID.greek_yellow_pillar, "stone", 2, true);

Recipes.addShaped({id: BlockID.greek_yellow_pillar, count: 6, data: 0}, [
    "xax",
    "xox",
    "xax"
], ['a', ItemID.hadesite_ingot, 0, 'x', 4, 0, 'o', VanillaItemID.yellow_dye, 0]);

IDRegistry.genBlockID("greek_brown_pillar");
Block.createBlock("greek_brown_pillar", [
	{name: "Greek Brown Pillar", texture: [["greek_pillar_top", 0], ["greek_pillar_top", 0], ["greek_brown_pillar", 0], ["greek_brown_pillar", 0], ["greek_brown_pillar", 0], ["greek_brown_pillar", 0]], inCreative: true}]);
ToolAPI.registerBlockMaterial(BlockID.greek_brown_pillar, "stone", 2, true);

Recipes.addShaped({id: BlockID.greek_brown_pillar, count: 6, data: 0}, [
    "xax",
    "xox",
    "xax"
], ['a', ItemID.hadesite_ingot, 0, 'x', 4, 0, 'o', VanillaItemID.brown_dye, 0]);

IDRegistry.genBlockID("greek_white_pillar");
Block.createBlock("greek_white_pillar", [
	{name: "Greek White Pillar", texture: [["greek_pillar_top", 0], ["greek_pillar_top", 0], ["greek_white_pillar", 0], ["greek_white_pillar", 0], ["greek_white_pillar", 0], ["greek_white_pillar", 0]], inCreative: true}]);
ToolAPI.registerBlockMaterial(BlockID.greek_white_pillar, "stone", 2, true);

Recipes.addShaped({id: BlockID.greek_white_pillar, count: 6, data: 0}, [
    "xax",
    "xox",
    "xax"
], ['a', ItemID.hadesite_ingot, 0, 'x', 4, 0, 'o', VanillaItemID.white_dye, 0]);




