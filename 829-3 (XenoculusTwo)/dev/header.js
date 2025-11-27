IMPORT("ToolLib");
IMPORT("TileRender");
IMPORT("BaseBlocks");
IMPORT("Structures");
//IMPORT("StructuresAPI");
IMPORT("PortalUtils");

let Flowers = WRAP_NATIVE("FlowerModule");

function randomInt(min, max){ 
    return Math.floor(Math.random() * (max - min + 1)) + min; 
}

function addShapedRecipe(id, count, data, mask, keys){
    Recipes.addShaped({id: id, count: count, data: data}, mask, keys);
}

function addShapelessRecipe(id, count, data, items){
    let ingredients = [];
    for(let item in items){
        ingredients.push({id: item[0], data: item[1]});
    }
    Recipes.addShapeless({id: id, count: count, data: data}, ingredients);
}

function setPlantModel(id, isDouble) {
var shape = new ICRender.CollisionShape();
BlockRenderer.setCustomCollisionShape(id, 0, shape);    
Flowers.registerFlower(id, isDouble); 
}

const UniqueGen = { 
    randomCoords: function(random, chunkX, chunkZ, minHeight, maxHeight){
        minHeight = minHeight || 0;
        maxHeight = maxHeight || 128;
        return {
            x: chunkX * 16 + random.nextInt(16),
            y: random.nextInt(maxHeight - minHeight + 1) - minHeight,
            z: z = chunkZ * 16 + random.nextInt(16)
        }
    }, 
    generateOre: function(id, data, chunkX, chunkZ, random, params){
        for(let i=0; i<params.veinCounts; i++){
            let coords = this.randomCoords(random, chunkX, chunkZ, params.minY, params.maxY);
            GenerationUtils.generateOre(coords.x, coords.y, coords.z, id, data, params.size, false, random.nextInt());
        }
    }, 
    generateOreInDimension: function(id, data, chunkX, chunkZ, random, params){
        for(let i=0; i<params.veinCounts; i++){
            let coords = this.randomCoords(random, chunkX, chunkZ, params.minY, params.maxY);
            GenerationUtils.generateOreCustom(coords.x, coords.y, coords.z, id, data, params.size, params.mode, params.check);
        }
    }
}