IDRegistry.genItemID("stickSkyroot");
Item.createItem("stickSkyroot", "Stick Skyroot", {name: "skyroot_stick"});

IDRegistry.genItemID("icestone");
Item.createItem("icestone", "Icestone", {name: "icestone"});

IDRegistry.genItemID("scatterglassShard");
Item.createItem("scatterglassShard", "Crude Scatterglass Shard", {name: "crude_scatterglass_shard"});

IDRegistry.genItemID("zaniteGemstone");
Item.createItem("zaniteGemstone", "Zanite Gemstone", {name: "zanite_gemstone"});

IDRegistry.genItemID("oreArkenium");
Item.createItem("oreArkenium", "Arkenium Ore", {name: "arkenium_ore"});

IDRegistry.genItemID("oreGravitite");
Item.createItem("oreGravitite", "Gravitite Ore", {name: "gravitite_ore"});

IDRegistry.genItemID("continuumOrb");
Item.createItem("continuumOrb", "Continuum Orb", {name: "continuum_orb"},{stack: 1});

IDRegistry.genItemID("plateArkenium");
Item.createItem("plateArkenium", "Arkenium Plate", {name: "arkenium_plate"});
Callback.addCallback('PostLoaded', function () {
Recipes.addFurnace(BlockID.oreArkenium, 0, ItemID.plateArkenium, 0);
});

IDRegistry.genItemID("plateGravitite");
Item.createItem("plateGravitite", "Gravitite Plate", {name: "gravitite_plate"});

IDRegistry.genItemID("EnAmbrosium");
Item.createItem("EnAmbrosium", "Ambrosium", {name: "ambrosium_shard"});

IDRegistry.genItemID("Ambrosium");
Item.createItem("Ambrosium", "Ambrosium Shard", {name: "ambrosium_shard", meta: 1});
Recipes.addFurnaceFuel(ItemID.Ambrosium, 0, 400);

IDRegistry.genItemID("chunkAmbrosium");
Item.createItem("chunkAmbrosium", "Ambrosium Chunk", {name: "ambrosium_chunk"});

Recipes.addShaped({id: ItemID.Ambrosium, count: 1, data: 0}, [
    "xx",
    "xx"
], ['x', ItemID.chunkAmbrosium, 0]);

Recipes.addShaped({id: ItemID.EnAmbrosium, count: 1, data: 0}, [
    "xx",
    "xx"
], ['x', ItemID.Ambrosium, 0]);

Recipes.addShaped({id: ItemID.chunkAmbrosium, count: 4, data: 0}, [
    "x"
], ['x', ItemID.Ambrosium, 0]);

IDRegistry.genItemID("itemPortal");
Item.createItem("itemPortal", "Aether Portal", {name: "aether_portal", meta: 1},{stack: 1});

IDRegistry.genItemID("itemAPortal");
Item.createItem("itemAPortal", "Aether Portal Active", {name: "aether_portal", meta: 0},{stack: 1});

IDRegistry.genItemID("goldAmber");
Item.createItem("goldAmber", "Golden Amber", {name: "golden_amber"});

IDRegistry.genItemID("ironBuble");
Item.createItem("ironBuble", "Iron Buble", {name: "iron_bubble"});

IDRegistry.genItemID("taegoreSkin");
Item.createItem("taegoreSkin", "Taegore Skin", {name: "taegore_hide"});

IDRegistry.genItemID("burrukaiSkin");
Item.createItem("burrukaiSkin", "Burrukai Pelt", {name: "burrukai_pelt"});

IDRegistry.genItemID("cloudWool");
Item.createItem("cloudWool", "Cloudwool", {name: "cloudwool"});

Callback.addCallback("PostLoaded", function () {        
Recipes.addShaped({id: BlockID.cloudWool, count: 1, data: 0}, [
    "bb",
    "bb"
], ['b', ItemID.cloudWool, 0]);
});

/*
var portalGenerationHelper = {
    p: function(region, x, y, z, id){
        region.setBlock(x, y, z, id, 0);
    },
    random:function(){if(Math.floor(Math.random() * (150 - 0 + 1)) <= 70){return true}else if((Math.floor(Math.random() * (150 - 0 + 1))) >= 68){return false}},
    radiuse:function(coords, code, i){
        for(var x = coords.x - i; x < coords.x + i; x++){
            for(var y = coords.y - i; y < coords.y + i; y++){
                for(var z = coords.z- i; z < coords.z + i; z++){
                    code();
                }
            }
        }
    },    
    generatePortal:function(region, crds, block){
        var block = {
            frame: 89,
            portal: BlockID.aetherPortal
        }
        if(this.random()){
            var a = [];            
            this.p(region, crds.x, crds.y, crds.z, block.frame);
            this.p(region, crds.x+1, crds.y, crds.z, block.frame);
            this.p(region, crds.x-1, crds.y, crds.z, block.frame);
            this.p(region, crds.x+2, crds.y, crds.z, block.frame);
            this.p(region, crds.x+2, crds.y+1, crds.z, block.frame);
            this.p(region, crds.x+2, crds.y+2, crds.z, block.frame);
            this.p(region, crds.x+2, crds.y+3, crds.z, block.frame);
            this.p(region, crds.x+2, crds.y+4, crds.z, block.frame);
            this.p(region, crds.x+1, crds.y+4, crds.z, block.frame);
            this.p(region, crds.x, crds.y+4, crds.z, block.frame);
            this.p(region, crds.x-1, crds.y+4, crds.z, block.frame);
            this.p(region, crds.x-1, crds.y+3, crds.z, block.frame);
            this.p(region, crds.x-1, crds.y+2, crds.z, block.frame);
            this.p(region, crds.x-1, crds.y+1, crds.z, block.frame);
            
            this.p(region, crds.x, crds.y+1, crds.z, block.portal);
            this.p(region, crds.x+1, crds.y+1, crds.z, block.portal);
            this.p(region, crds.x, crds.y+2, crds.z, block.portal);
            this.p(region, crds.x+1, crds.y+2, crds.z, block.portal);
            this.p(region, crds.x, crds.y+3, crds.z, block.portal);
            this.p(region, crds.x+1, crds.y+3, crds.z, block.portal);                                  
            }if(this.random()){
            var a = [];            
            this.p(region, crds.x, crds.y, crds.z, block.frame);
            this.p(region, crds.x+1, crds.y, crds.z, block.frame);
            this.p(region, crds.x-1, crds.y, crds.z, block.frame);
            this.p(region, crds.x+2, crds.y, crds.z, block.frame);
            this.p(region, crds.x+2, crds.y+1, crds.z, block.frame);
            this.p(region, crds.x+2, crds.y+2, crds.z, block.frame);
            this.p(region, crds.x+2, crds.y+3, crds.z, block.frame);
            this.p(region, crds.x+2, crds.y+4, crds.z, block.frame);
            this.p(region, crds.x+1, crds.y+4, crds.z, block.frame);
            this.p(region, crds.x, crds.y+4, crds.z, block.frame);
            this.p(region, crds.x-1, crds.y+4, crds.z, block.frame);
            this.p(region, crds.x-1, crds.y+3, crds.z, block.frame);
            this.p(region, crds.x-1, crds.y+2, crds.z, block.frame);
            this.p(region, crds.x-1, crds.y+1, crds.z, block.frame);
            
            this.p(region, crds.x, crds.y+1, crds.z, block.portal);
            this.p(region, crds.x+1, crds.y+1, crds.z, block.portal);
            this.p(region, crds.x, crds.y+2, crds.z, block.portal);
            this.p(region, crds.x+1, crds.y+2, crds.z, block.portal);
            this.p(region, crds.x, crds.y+3, crds.z, block.portal);
            this.p(region, crds.x+1, crds.y+3, crds.z, block.portal);                                  
            }
      }
}*/

Item.registerUseFunction("itemAPortal", function(coords, item, block,  player){
var region = BlockSource.getDefaultForActor(player);
    var place = coords.relative;
  if(GenerationUtils.isTransparentBlock(region.getBlockId(place.x, place.y, place.z))){
    //    portalGenerationHelper.generatePortal(region, {x: place.x, y: place.y, z: place.z});    
Network.sendServerMessage(Translation.translate("Now player MUST create aether teleporter item using 1 golden ingot 4 stones and 4 iron ingots"));      
    } 
});

Recipes.addShaped({id: ItemID.itemPortal, count: 1, data: 0}, [
    "aaa",
    "a a",
    "aaa"
], ['a', 89, 0]);

Recipes.addShaped({id: ItemID.itemAPortal, count: 1, data: 0}, [
    "ab"
], ['a', ItemID.itemPortal, 0, 'b', 866, 0]);

Item.registerUseFunction("continuumOrb", function(coords, item, block,  player){
var region = BlockSource.getDefaultForActor(player);
var random = new java.util.Random();
   var drop = getContinumDropItem();
    region.spawnDroppedItem(coords.relative.x + 0.5, coords.relative.y + 0.1, coords.relative.z + 0.5, drop.id, drop.count, drop.data);
    //item.id--;
    //if(!item.count){item.id = 0;}
    Entity.setCarriedItem(player, item.id, item.count - 1, 0);
});

var CONTINUM_RANDOM_DROP = [   
    {chance: 41, id: ItemID.Ambrosium, count: randomInt(1, 4), data: 0},
    {chance: 35, id: ItemID.icestone, count: randomInt(1, 3), data: 0},
    {chance: 31, id: ItemID.skyrootSword, count: 1, data: 0},
    {chance: 28, id: ItemID.skyrootShovel, count: 1, data: 0},
    {chance: 35, id: ItemID.skyrootPickaxe, count: 1, data: 0},
    {chance: 32, id: ItemID.skyrootAxe, count: 1, data: 0},
    {chance: 30, id: ItemID.ambrosiumTorch, count: 4, data: 0},
    {chance: .96, id: ItemID.plateGravitite, count: randomInt(1, 2), data: 0},
    {chance: .1, id: ItemID.gravititeSword, count: 1, data: 0},
    {chance: .7, id: ItemID.valkiriaSword, count: 1, data: 0},
    {chance: 1.5, id: BlockID.oreGravitite, count: randomInt(1, 2), data: 0},
    {chance: .27, id: BlockID.oreZanite, count: randomInt(1, 3), data: 0},
    {chance: 20, id: BlockID.oreArkenium, count: randomInt(1, 2), data: 0},
    {chance: 22, id: ItemID.zaniteGemstone, count: randomInt(1, 3), data: 0},
    {chance: 12, id: ItemID.zanitePickaxe, count: 1, data: 0},
    {chance: .75, id: ItemID.vampireSword, count: 1, data: 0},
    {chance: .55, id: ItemID.holySword, count: 1, data: 0},
    {chance: .83, id: ItemID.flamingSword, count: 1, data: 0},
    {chance: .70, id: ItemID.lightingSword, count: randomInt(1, 2), data: 0},
    {chance: .85, id: ItemID.pigsSword, count: randomInt(1, 2), data: 0},
    {chance: .76, id: ItemID.neptuneHelmet, count: 1, data: 0},
    {chance: .69, id: ItemID.neptuneChestplate, count: 1, data: 0},
    {chance: .72, id: ItemID.neptuneLeggings, count: 1, data: 0},
    {chance: .79, id: ItemID.neptuneBoots, count: 1, data: 0},
    {chance: 8.5, id: ItemID.phoenixHelmet, count: 1, data: 0},
    {chance: 8, id: ItemID.phoenixChestplate, count: 1, data: 0},
    {chance: 8.1, id: ItemID.phoenixLeggings, count: 1, data: 0},
    {chance: 8.4, id: ItemID.phoenixBoots, count: 1, data: 0}
];

function getContinumDropItem(){
    var total = 0;
    for (var i in CONTINUM_RANDOM_DROP){
        total += CONTINUM_RANDOM_DROP[i].chance; 
    var random = Math.random() * total * 1.3;
    var current = 0; 
        var drop = CONTINUM_RANDOM_DROP[i];
        if (current < random && current + drop.chance > random){
            return drop;
        }
        current += drop.chance;
    }     
}

IDRegistry.genItemID("APortal");
Item.createItem("APortal", "Aether Teleporter", {name: "aether_teleporter", meta: 0},{stack: 1});

Recipes.addShaped({id: ItemID.APortal, count: 1, data: 0}, [
    "sis",
    "igi",
    "sis"
], ['s', 1, 0, 'g', 266, 0, 'i', 265, 0]);

Item.registerUseFunction("APortal", function(coords, item, block,  player){
var region = BlockSource.getDefaultForActor(player);
    var place = coords.relative;
  if(GenerationUtils.isTransparentBlock(region.getBlockId(place.x, place.y, place.z))){ 
//Dimensions.transfer(player, Aether.id);
Network.sendServerMessage(Translation.translate("Dimension is under construction, lags bug and wreked balance are normal for now and some time before mod be completed"));
region.setBlock(place.x, place.y, place.z, BlockID.TeleporterThera);
region.setBlock(place.x, place.y + 1, place.z, BlockID.TeleporterTheraE);        
    } 
});

IDRegistry.genItemID("irradiatedDust");
Item.createItem("irradiatedDust", "Irradiated Dust", {name: "irradiated_dust"});

IDRegistry.genItemID("irradiatedChunk");
Item.createItem("irradiatedChunk", "Irradiated Chunk", {name: "irradiated_chunk"}, {stack: 16});
Item.setGlint(ItemID.irradiatedChunk, true);

IDRegistry.genItemID("irradiatedCharm");
Item.createItem("irradiatedCharm", "Irradiated Charm", {name: "irradiated_charm"}, {stack: 1});
Item.setGlint(ItemID.irradiatedCharm, true);

IDRegistry.genItemID("irradiatedNeckwear");
Item.createItem("irradiatedNeckwear", "Irradiated Neckwear", {name: "irradiated_neckwear"}, {stack: 1});
Item.setGlint(ItemID.irradiatedNeckwear, true);

Callback.addCallback("PostLoaded", function () {
Recipes.addFurnace(ItemID.irradiatedDust, 0, ItemID.irradiatedChunk, 0);
        
Recipes.addShaped({id: ItemID.irradiatedCharm, count: 1, data: 0}, [
    "a",
   "aoa",
    "a"
], ['a', ItemID.irradiatedChunk, 0]);

Recipes.addShaped({id: ItemID.irradiatedCharm, count: 1, data: 0}, [
   "aaa",
   "aoa",
    "a"
], ['a', ItemID.irradiatedChunk, 0]);

Recipes.addShaped({id: 61, count: 1, data: 0}, [
    "aaa",
    "aoa",
    "aaa"
], ['b', BlockID.Holystone, 0]);
});

