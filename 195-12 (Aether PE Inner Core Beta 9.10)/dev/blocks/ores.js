function randomInt(min, max){ 
return Math.floor(Math.random() * (max - min + 1)) + min; 
}

var BLOCK_TYPE_STONE = Block.createSpecialType({
    base: 1,
    solid: true,
    destroytime: 3,
    explosionres: 3,
    opaque: true
}, "stone");
IDRegistry.genBlockID("oreAmbrosium"); 
Block.createBlock("oreAmbrosium", [
    {name: "Ambrosium Ore", texture:[["ambrosium_ore", 0]],inCreative: true}],BLOCK_TYPE_STONE);
ToolAPI.registerBlockMaterial(BlockID.oreAmbrosium, "stone", 1, true);
Block.setDestroyLevel("oreAmbrosium", 1);
Block.registerDropFunction("oreAmbrosium", function(coords, blockID, blockData, level, enchant){
    if(level > 0){
        if(enchant.silk){
            return [[BlockID.oreAmbrosium, 1, 0]];
        }
        var drop = [[ItemID.Ambrosium, randomInt(1,3), 0]];
        if(Math.random() < enchant.fortune/3 - 1/3){drop.push(drop[0]);}
        ToolAPI.dropOreExp(coords, 3, 7, enchant.experience);
        return drop;
    }
    return [];
}, 1);

Callback.addCallback("GenerateChunk", function(chunkX, chunkZ){
for(var i = 0; i < 27; i++){ 
   var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 108, 180);
    if(World.getBlockID(coords.x,coords.y,coords.z)==BlockID.Holystone){ 
GenerationUtils.generateOre(coords.x, coords.y, coords.z, BlockID.oreAmbrosium, 0, randomInt(4, 6),true);     
            }
          } 
});
IDRegistry.genBlockID("oreIcestone"); 
Block.createBlock("oreIcestone", [
    {name: "icestone Ore", texture:[["icestone_ore", 0]],inCreative: true}],BLOCK_TYPE_STONE);
ToolAPI.registerBlockMaterial(BlockID.oreIcestone, "stone", 1, true);
Block.setDestroyLevel("oreIcestone", 1);
Block.registerDropFunction("oreIcestone", function(coords, blockID, blockData, level, enchant){
    if(level > 0){
        if(enchant.silk){
            return [[blockID, 1, 0]];
        }
        var drop = [[ItemID.icestone, randomInt(1,4), 0]];
        if(Math.random() < enchant.fortune/3 - 1/3){drop.push(drop[0]);}
        ToolAPI.dropOreExp(coords, 3, 7, enchant.experience);
        return drop;
    }
    return [];
}, 1);

Callback.addCallback("GenerateChunk", function(chunkX, chunkZ){
for(var i = 0; i < 22; i++){
   var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 108, 180);
   if(World.getBlockID(coords.x,coords.y,coords.z).id==BlockID.Holystone){ 
GenerationUtils.generateOre(coords.x, coords.y, coords.z, BlockID.oreIcestone, 0, randomInt(2, 5),true);       
             }
          } 
});
IDRegistry.genBlockID("oreZanite"); 
Block.createBlock("oreZanite", [
    {name: "Zanite Ore", texture:[["zanite_ore", 0]],inCreative: true}],BLOCK_TYPE_STONE);
ToolAPI.registerBlockMaterial(BlockID.oreZanite, "stone", 2, true);
Block.registerDropFunction("oreZanite", function(coords, blockID, blockData, level, enchant){
    if(level > 1){
        if(enchant.silk){
            return [[blockID, 1, 0]];
        }
        var drop = [[ItemID.zaniteGemstone, randomInt(1,5), 0]];
        if(Math.random() < enchant.fortune/3 - 1/3){drop.push(drop[0]);}
        ToolAPI.dropOreExp(coords, 3, 7, enchant.experience);
        return drop;
    }
    return [];
}, 2);

Callback.addCallback("GenerateChunk", function(chunkX, chunkZ){
for(var i = 0; i < 21; i++){
   var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 108, 180);
    if(World.getBlockID(coords.x,coords.y,coords.z).id==BlockID.Holystone){ 
   GenerationUtils.generateOre(coords.x, coords.y, coords.z, BlockID.oreZanite, 0, randomInt(4, 8),true);     
            }
          } 
});
IDRegistry.genBlockID("oreArkenium"); 
Block.createBlock("oreArkenium", [
    {name: "Arkenium Ore", texture: [["arkenium_ore", 0]],inCreative: true}],BLOCK_TYPE_STONE);
ToolAPI.registerBlockMaterial(BlockID.oreArkenium, "stone", 2, true);
Block.setDestroyLevel("oreArkenium", 2);
Block.registerDropFunction("oreArkenium", function(coords, blockID, blockData, level, enchant){
    if(level > 1){
        if(enchant.silk){
            return [[blockID, 1, 0]];
        }
        var drop = [[ItemID.oreArkenium, randomInt(1,3), 0]];
        if(Math.random() < enchant.fortune/3 - 1/3){drop.push(drop[0]);}
        ToolAPI.dropOreExp(coords, 3, 7, enchant.experience);
        return drop;
    }
    return [];
}, 2);

Callback.addCallback("GenerateChunk", function(chunkX, chunkZ){
for(var i = 0; i < 20; i++){
   var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 108, 180);
    if(World.getBlockID(coords.x,coords.y,coords.z).id==BlockID.Holystone){ 
GenerationUtils.generateOre(coords.x, coords.y, coords.z, BlockID.oreArkenium, 0, randomInt(4, 7),true);
              }
          } 
});
IDRegistry.genBlockID("oreGravitite"); 
Block.createBlock("oreGravitite", [
    {name: "Gravitite Ore", texture: 
    [["gravitite_ore", 0]],inCreative: true}],BLOCK_TYPE_STONE);
ToolAPI.registerBlockMaterial(BlockID.oreGravitite, "stone", 3, true);
Block.registerDropFunction("oreGravitite", function(coords, blockID, blockData, level, enchant){
    if(level > 2){
        if(enchant.silk){
            return [[blockID, 1, 0]];
        }
        var drop = [[ItemID.oreGravitite, randomInt(1,2), 0]];
        if(Math.random() < enchant.fortune/3 - 1/3){drop.push(drop[0]);}
        ToolAPI.dropOreExp(coords, 3, 7, enchant.experience);
        return drop;
    }
    return [];
}, 3);
 
Callback.addCallback("GenerateChunk", function(chunkX, chunkZ){
for(var i = 0; i < 13; i++){
   var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 108, 180);
    if(World.getBlockID(coords.x,coords.y,coords.z).id==BlockID.Holystone){  
   GenerationUtils.generateOre(coords.x, coords.y, coords.z, BlockID.oreGravitite, 0, randomInt(1, 4),true);
               }
          } 
});
IDRegistry.genBlockID("oreContinuum"); 
Block.createBlock("oreContinuum", [
    {name: "Continuum Ore", texture:[["continuum_ore", 0]],inCreative: true}],BLOCK_TYPE_STONE);
ToolAPI.registerBlockMaterial(BlockID.oreContinuum, "stone", 3, true);
Block.setDestroyLevel("oreContinuum", 3);
Block.registerDropFunction("oreContinuum", function(coords, blockID, blockData, level, enchant){
    if(level > 2){
        if(enchant.silk){
            return [[blockID, 1, 0]];
        }
        var drop = [[ItemID.continuumOrb, randomInt(1,3), 0]];
        if(Math.random() < enchant.fortune/3 - 1/3){drop.push(drop[0]);}
        ToolAPI.dropOreExp(coords, 3, 7, enchant.experience);
        return drop;
    }
    return [];
}, 2);

Callback.addCallback("GenerateChunk", function(chunkX, chunkZ){
for(var i = 0; i < 16; i++){
   var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 108, 180);
    if(World.getBlockID(coords.x,coords.y,coords.z).id==BlockID.Holystone){ 
   GenerationUtils.generateOre(coords.x, coords.y, coords.z, BlockID.oreContinuum, 0, randomInt(1, 4),true);
               }
          } 
});