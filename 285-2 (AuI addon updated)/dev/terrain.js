var BLOCK_LIGHT = Block.createSpecialType({
    lightlevel: 13,
    opaque: false
});

function randomInt(min, max){ 
return Math.floor(Math.random() * (max - min + 1)) + min; 
}

IDRegistry.genBlockID("azuriteore"); 
Block.createBlock("azuriteore", [
    {name: "Azurite ore", texture: [["azurite_ore", 0]],inCreative: true}], "opaque");
Block.setDestroyTime(BlockID.azuriteore,2);
ToolAPI.registerBlockMaterial(BlockID.azuriteore, "stone", 3, true);

IDRegistry.genBlockID("azuriteblock"); 
Block.createBlock("azuriteblock", [
    {name: "Azurite block", texture: [["azurite_block", 0]],inCreative: true}], "opaque");
Block.setDestroyTime(BlockID.azuriteblock,3);
ToolAPI.registerBlockMaterial(BlockID.azuriteblock, "stone", 3, true);

Callback.addCallback("PostLoaded", function () {
Recipes.addShaped({id: BlockID.azuriteblock, count: 1, data: 0}, [
    "aaa",
    "aaa",
    "aaa"
], ['a', ItemID.azurite, 0]);
});

IDRegistry.genBlockID("etheriumore"); 
Block.createBlock("etheriumore", [
    {name: "Etherium ore", texture: [["etherium_ore", 0]],inCreative: true}], "opaque");
Block.setDestroyTime(BlockID.etheriumore,2);
ToolAPI.registerBlockMaterial(BlockID.etheriumore, "stone", 3, true);

IDRegistry.genBlockID("inferniumoreb"); 
Block.createBlock("inferniumoreb", [
    {name: "Infernium ore", texture: [["infernium_ore", 1]],inCreative: true}], "opaque");
Block.setDestroyTime(BlockID.inferniumoreb,3);
ToolAPI.registerBlockMaterial(BlockID.inferniumoreb, "stone", 3, true);

IDRegistry.genBlockID("inferniumore"); 
Block.createBlock("inferniumore", [
    {name: "Infernium ore", texture: [["infernium_ore", 0]],inCreative: true}], "opaque");
Block.setDestroyTime(BlockID.inferniumore,2);
ToolAPI.registerBlockMaterial(BlockID.inferniumore, "stone", 3, true);

Callback.addCallback("PostLoaded", function () {
Recipes.addShaped({id: BlockID.inferniumblock, count: 1, data: 0}, [
    "aaa",
    "aaa",
    "aaa"
], ['a', ItemID.inferniumshard, 0]);
});

IDRegistry.genBlockID("inferniumblock"); 
Block.createBlock("inferniumblock", [
    {name: "Infernium block", texture: [["infernium_block", 0]],inCreative: true}], "opaque");
Block.setDestroyTime(BlockID.inferniumblock,3);
ToolAPI.registerBlockMaterial(BlockID.inferniumblock, "stone", 3, true);

IDRegistry.genBlockID("nightOre"); 
Block.createBlock("nightOre", [
    {name: "Night ore", texture: [["NethNightyOre", 0]],inCreative: true}], "opaque");
Block.setDestroyTime(BlockID.nightOre,3);
ToolAPI.registerBlockMaterial(BlockID.nightOre, "stone", 4, true);

IDRegistry.genBlockID("bloodrockore"); 
Block.createBlock("bloodrockore", [
    {name: "Blood ore", texture: [["bloodrock_ore", 0]],inCreative: true}], "opaque");
Block.setDestroyTime(BlockID.bloodrockore,2);
ToolAPI.registerBlockMaterial(BlockID.bloodrockore, "stone", 3, true);

IDRegistry.genBlockID("bloodrockblock"); 
Block.createBlock("bloodrockblock", [
    {name: "Blood block", texture: [["bloodrock_block", 0]],inCreative: true}], "opaque");
Block.setDestroyTime(BlockID.bloodrockblock,3);
ToolAPI.registerBlockMaterial(BlockID.bloodrockblock, "stone", 3, true);

Callback.addCallback("PostLoaded", function () {
Recipes.addShaped({id: BlockID.bloodrockblock, count: 1, data: 0}, [
    "aaa",
    "aaa",
    "aaa"
], ['a', ItemID.bloodrock, 0]);
});

IDRegistry.genBlockID("shadowquartzore"); 
Block.createBlock("shadowquartzore", [
    {name: "Shadow quartz ore", texture: [["shadow_quartz_ore", 0]],inCreative: true}], "opaque");
Block.setDestroyTime(BlockID.shadowquartzore,3);
ToolAPI.registerBlockMaterial(BlockID.shadowquartzore, "stone", 4, true);

IDRegistry.genBlockID("shadowquartzblock"); 
Block.createBlock("shadowquartzblock", [
    {name: "Shadow quartz block", texture: [["shadow_quartz_block", 0]],inCreative: true}], "opaque");
Block.setDestroyTime(BlockID.shadowquartzblock,3);
ToolAPI.registerBlockMaterial(BlockID.shadowquartzblock, "stone", 4, true);

Callback.addCallback("PostLoaded", function () {
Recipes.addShaped({id: BlockID.shadowquartzblock, count: 1, data: 0}, [
    "aaa",
    "aaa",
    "aaa"
], ['a', ItemID.shadowquartz, 0]);
});

IDRegistry.genBlockID("starciliumore"); 
Block.createBlock("starciliumore", [
    {name: "Starcilium ore", texture: [["starcilium_ore", 0]],inCreative: true}], "opaque");
Block.setDestroyTime(BlockID.starciliumore,4);
ToolAPI.registerBlockMaterial(BlockID.starciliumore, "stone", 5, true);

IDRegistry.genBlockID("starciliumblock"); 
Block.createBlock("starciliumblock", [
    {name: "Starcilium block", texture: [["starcilium_block", 0]],inCreative: true}], "opaque");
Block.setDestroyTime(BlockID.starciliumblock,3);
ToolAPI.registerBlockMaterial(BlockID.starciliumblock, "stone", 5, true);

Callback.addCallback("PostLoaded", function () {
Recipes.addShaped({id: BlockID.starciliumblock, count: 1, data: 0}, [
    "aaa",
    "aaa",
    "aaa"
], ['a', ItemID.starcilium, 0]);
});

IDRegistry.genBlockID("basalt"); 
Block.createBlock("basalt", [
    {name: "Basalt", texture: [["basalt", 0]],inCreative: true}], "opaque");
Block.setDestroyTime(BlockID.basalt,6);
ToolAPI.registerBlockMaterial(BlockID.basalt, "stone", 4, true);

IDRegistry.genBlockID("basaltCb"); 
Block.createBlock("basaltCb", [
    {name: "Basalt cobblestone", texture: [["basalt_cobblestone", 0]],inCreative: true}], "opaque");
Block.setDestroyTime(BlockID.basaltCb,6);
ToolAPI.registerBlockMaterial(BlockID.basaltCb, "stone", 4, true);

Callback.addCallback("GenerateNetherChunk", function(chunkX, chunkZ){
for(var i = 0; i < 36; i++){
   var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 0, 230);
     GenerationUtils.generateOre(coords.x, coords.y, coords.z, BlockID.azuriteore, 0, randomInt(2, 6));          
          } 
});

Block.registerDropFunction("azuriteore", function(coords, blockID, blockData, level, enchant){
    if(level > 2){
        if(enchant.silk){
            return [[blockID, 1, 0]];
        }
        var drop = [[ItemID.azurite, randomInt(1, 4), 0]];
        if(Math.random() < enchant.fortune/3 - 1/3){drop.push(drop[0]);}
        ToolAPI.dropOreExp(coords, 3, 7, enchant.experience);
        return drop;
    }
    return [];
});

Callback.addCallback("GenerateNetherChunk", function(chunkX, chunkZ){
for(var i = 0; i < 10; i++){
   var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 1, 230);
     GenerationUtils.generateOre(coords.x, coords.y, coords.z, BlockID.etheriumore, 0, randomInt(1, 3));          
          } 
});

Block.registerDropFunction("etheriumore", function(coords, blockID, blockData, level, enchant){
    if(level > 2){
        if(enchant.silk){
            return [[blockID, 1, 0]];
        }
        var drop = [[ItemID.ectoplasm, randomInt(1, 2), 0]];
        if(Math.random() < enchant.fortune/3 - 1/3){drop.push(drop[0]);}
        ToolAPI.dropOreExp(coords, 3, 7, enchant.experience);
        return drop;
    }
    return [];
});

Callback.addCallback("GenerateNetherChunk", function(chunkX, chunkZ){
for(var i = 0; i < 10; i++){
   var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 1, 8);
if(World.getBlockID(coords.x+1,coords.y,coords.z+1)==BlockID.basalt){GenerationUtils.generateOre(coords.x, coords.y, coords.z, BlockID.inferniumoreb, 0, randomInt(2, 6));
    }             
          } 
});

Block.registerDropFunction("inferniumoreb", function(coords, blockID, blockData, level, enchant){
    if(level > 2){
        if(enchant.silk){
            return [[blockID, 1, 0]];
        }
        var drop = [[ItemID.inferniumshard, randomInt(2, 5), 0]];
        if(Math.random() < enchant.fortune/3 - 1/3){drop.push(drop[0]);}
        ToolAPI.dropOreExp(coords, 3, 7, enchant.experience);
        return drop;
    }
    return [];
});

Callback.addCallback("GenerateNetherChunk", function(chunkX, chunkZ){
for(var i = 0; i < 29; i++){
   var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 15, 68);
     GenerationUtils.generateOre(coords.x, coords.y, coords.z, BlockID.inferniumore, 0, randomInt(2, 5));            
          } 
});

Block.registerDropFunction("inferniumore", function(coords, blockID, blockData, level, enchant){
    if(level > 2){
        if(enchant.silk){
            return [[blockID, 1, 0]];
        }
        var drop = [[ItemID.inferniumshard, randomInt(1, 3), 0]];
        if(Math.random() < enchant.fortune/3 - 1/3){drop.push(drop[0]);}
        ToolAPI.dropOreExp(coords, 3, 7, enchant.experience);
        return drop;
    }
    return [];
});

Callback.addCallback("GenerateNetherChunk", function(chunkX, chunkZ){
for(var i = 0; i < 28; i++){
   var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 1, 211);
     GenerationUtils.generateOre(coords.x, coords.y, coords.z, BlockID.bloodrockore, 0, randomInt(2, 5));          
          } 
});

Block.registerDropFunction("bloodrockore", function(coords, blockID, blockData, level, enchant){
    if(level > 2){
        if(enchant.silk){
            return [[blockID, 1, 0]];
        }
        var drop = [[ItemID.bloodrock, randomInt(1, 3), 0]];
        if(Math.random() < enchant.fortune/3 - 1/3){drop.push(drop[0]);}
        ToolAPI.dropOreExp(coords, 3, 7, enchant.experience);
        return drop;
    }
    return [];
});

Callback.addCallback("GenerateNetherChunk", function(chunkX, chunkZ){
for(var i = 0; i < 35; i++){
   var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 1, 243);
     GenerationUtils.generateOre(coords.x, coords.y, coords.z, BlockID.shadowquartzore, 0, randomInt(4, 9));          
          } 
});

Block.registerDropFunction("shadowquartzore", function(coords, blockID, blockData, level, enchant){
    if(level > 2){
        if(enchant.silk){
            return [[blockID, 1, 0]];
        }
        var drop = [[ItemID.shadowquartz, randomInt(1, 3), 0]];
        if(Math.random() < enchant.fortune/3 - 1/3){drop.push(drop[0]);}
        ToolAPI.dropOreExp(coords, 3, 7, enchant.experience);
        return drop;
    }
    return [];
});

Callback.addCallback("GenerateNetherChunk", function(chunkX, chunkZ){
for(var i = 0; i < 14; i++){
   var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 0, 5);   if(World.getBlockID(coords.x+1,coords.y,coords.z+1)==BlockID.basalt){GenerationUtils.generateOre(coords.x, coords.y, coords.z, BlockID.starciliumore, 0, randomInt(2, 3));
    }        
          } 
});

Block.registerDropFunction("starciliumore", function(coords, blockID, blockData, level, enchant){
    if(level > 3){
        if(enchant.silk){
            return [[blockID, 1, 0]];
        }
        var drop = [[ItemID.starcilium, randomInt(1, 2), 0]];
        if(Math.random() < enchant.fortune/3 - 1/3){drop.push(drop[0]);}
        ToolAPI.dropOreExp(coords, 3, 7, enchant.experience);
        return drop;
    }
    return [];
});

Callback.addCallback("GenerateNetherChunk", function(chunkX, chunkZ){
for(var i = 0; i < 68; i++){
   var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 2, 180);
     GenerationUtils.generateOre(coords.x, coords.y, coords.z, BlockID.basalt, 0, randomInt(5, 11));
          } 
});

Block.registerDropFunction("basalt", function(coords, blockID, blockData, level, enchant){
    if(level > 3){
        if(enchant.silk){
            return [[blockID, 1, 0]];
        }
        var drop = [[BlockID.basaltCb, 1, 0]];
        if(Math.random() < enchant.fortune/3 - 1/3){drop.push(drop[0]);}
        return drop;
    }
    return [];
});

Callback.addCallback("GenerateNetherChunk", function(chunkX, chunkZ){
for(var i = 0; i < 31; i++){
   var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 2, 180);
     GenerationUtils.generateOre(coords.x, coords.y, coords.z, BlockID.nightOre, 0, randomInt(1,5));
          } 
});

Block.registerDropFunction("nightOre", function(coords, blockID, blockData, level, enchant){
    if(level > 3){
        if(enchant.silk){
            return [[blockID, 1, 0]];
        }
        var drop = [[ItemID.nightCryst, randomInt(1,3), 0]];
        if(Math.random() < enchant.fortune/3 - 1/3){drop.push(drop[0]);}
        return drop;
    }
    return [];
});