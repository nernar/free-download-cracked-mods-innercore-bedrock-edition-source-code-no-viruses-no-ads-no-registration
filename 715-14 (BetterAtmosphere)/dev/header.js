IMPORT("TileRender");
IMPORT("BaseBlocks");
IMPORT("Structures");

var axes = [271, 275, 258, 286, 279];

function randomInt(min, max) { 
    return Math.floor(Math.random() * (max - min + 1)) + min; 
}

function addShapedRecipe(id, count, data, mask, keys) {
    Recipes.addShaped({id: id, count: count, data: data}, mask, keys);
}

function addShapelessRecipe(id, count, data, items) {
    let ingredients = [];
    for (let i in items){
        ingredients.push({id: items[i].id, data: items[i].data});
    }
    Recipes.addShapeless({id: id, count: count, data: data}, ingredients);
}

function generateStructureInBiomes(ids, params, random) {
var Biome = World.getBiome(params.x, params.z); 
 for(var l in ids) {
  if (Biome == ids[l] && random.nextFloat() < params.chance.normal) {
    if (World.getBlockID(params.x, params.y, params.z) == params.check && World.getBlockID(params.x, params.y + 1, params.z) == 0) 
      params.str.build(params.x, params.y + 1, params.z, Structure.ROTATE_Y, random, params.region);
        } 
    } 
}