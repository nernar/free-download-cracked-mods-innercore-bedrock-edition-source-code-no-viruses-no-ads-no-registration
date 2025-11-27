IMPORT("TileRender");
IMPORT("BaseBlocks");

var Flowers = WRAP_NATIVE("FlowerModule");

function setPlantModel(id, isDouble) {
var shape = new ICRender.CollisionShape();
BlockRenderer.setCustomCollisionShape(id, 0, shape);    
Flowers.registerFlower(id, isDouble); 
} 

var axes = [271, 275, 258, 286, 279];

const DIR = __dir__+"structures/";

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

function generateBuilds(biomes, pool, namee, obj) { 
var Biome = World.getBiome(obj.offset.x, obj.offset.z);
   for(var l in biomes) {
    if(Biome == biomes[l])     
        StructurePiece.register(StructurePiece.getDefault({
        type: "default",
        dimension: 0,
        white_list_blocks: true,
        blocks: [obj.check],
        name: pool.get(namee),
        chance: obj.chance,
        distance: obj.distance,
        isSet: true,
        offset: {x: obj.offset.x, y: obj.offset.y, z: obj.offset.z},
        structure: new Structure.advanced(namee)
        })); 
    }
}

function generateTree(pool, name, x, y, z, region) {   
    StructurePiece.addStructure(name, x, y, z, region);  
     Structure.set(StructureUtility.rotate(pool.get(name), StructureRotation.getAllY()[randomInt(0,3)]), x, y, z, region);
    }
    
