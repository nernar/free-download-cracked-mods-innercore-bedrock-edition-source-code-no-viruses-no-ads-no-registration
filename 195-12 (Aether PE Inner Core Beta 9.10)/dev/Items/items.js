IDRegistry.genItemID("stickSkyroot");
Item.createItem("stickSkyroot", "Stick Skyroot", {name: "skyroot_stick"});

IDRegistry.genItemID("icestone");
Item.createItem("icestone", "Icestone", {name: "icestone"});

IDRegistry.genItemID("zaniteGemstone");
Item.createItem("zaniteGemstone", "Zanite Gemstone", {name: "zanite_gemstone"});

IDRegistry.genItemID("oreArkenium");
Item.createItem("oreArkenium", "Arkenium Ore", {name: "arkenium_ore"});

IDRegistry.genItemID("oreGravitite");
Item.createItem("oreGravitite", "Gravitite Ore", {name: "gravitite_ore"});

IDRegistry.genItemID("continuumOrb");
Item.createItem("continuumOrb", "Continuum Orb", {name: "continuum_orb"},{isTech:false,stack: 1});

IDRegistry.genItemID("plateArkenium");
Item.createItem("plateArkenium", "Arkenium Plate", {name: "arkenium_plate"});

IDRegistry.genItemID("plateGravitite");
Item.createItem("plateGravitite", "Gravitite Plate", {name: "gravitite_plate"});

IDRegistry.genItemID("Ambrosium");
Item.createItem("Ambrosium", "Ambrosium Shard", {name: "ambrosium_shard"});

IDRegistry.genItemID("itemPortal");
Item.createItem("itemPortal", "Aether Portal", {name: "aether_portal", meta: 1},{isTech:false,stack: 1});

IDRegistry.genItemID("itemAPortal");
Item.createItem("itemAPortal", "Aether Portal Active", {name: "aether_portal", meta: 0},{isTech:false,stack: 1});

IDRegistry.genItemID("goldAmber");
Item.createItem("goldAmber", "Golden Amber", {name: "golden_amber", meta: 0});

IDRegistry.genItemID("ironBuble");
Item.createItem("ironBuble", "Iron Buble", {name: "iron_bubble", meta: 0});

var portalGenerationHelper = {
    p: function(x, y, z, id){
        World.setBlock(x, y, z, id, 0);
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
    generatePortal:function(crds, block){
        var block = {
            frame: 89,
            portal: BlockID.aetherPortal
        }
        if(this.random()){
            var a = [];            
            this.p(crds.x, crds.y, crds.z, block.frame);
            this.p(crds.x+1, crds.y, crds.z, block.frame);
            this.p(crds.x-1, crds.y, crds.z, block.frame);
            this.p(crds.x+2, crds.y, crds.z, block.frame);
            this.p(crds.x+2, crds.y+1, crds.z, block.frame);
            this.p(crds.x+2, crds.y+2, crds.z, block.frame);
            this.p(crds.x+2, crds.y+3, crds.z, block.frame);
            this.p(crds.x+2, crds.y+4, crds.z, block.frame);
            this.p(crds.x+1, crds.y+4, crds.z, block.frame);
            this.p(crds.x, crds.y+4, crds.z, block.frame);
            this.p(crds.x-1, crds.y+4, crds.z, block.frame);
            this.p(crds.x-1, crds.y+3, crds.z, block.frame);
            this.p(crds.x-1, crds.y+2, crds.z, block.frame);
            this.p(crds.x-1, crds.y+1, crds.z, block.frame);
            
            this.p(crds.x, crds.y+1, crds.z, block.portal);
            this.p(crds.x+1, crds.y+1, crds.z, block.portal);
            this.p(crds.x, crds.y+2, crds.z, block.portal);
            this.p(crds.x+1, crds.y+2, crds.z, block.portal);
            this.p(crds.x, crds.y+3, crds.z, block.portal);
            this.p(crds.x+1, crds.y+3, crds.z, block.portal);                                  
            }if(this.random()){
            var a = [];            
            this.p(crds.x, crds.y, crds.z, block.frame);
            this.p(crds.x+1, crds.y, crds.z, block.frame);
            this.p(crds.x-1, crds.y, crds.z, block.frame);
            this.p(crds.x+2, crds.y, crds.z, block.frame);
            this.p(crds.x+2, crds.y+1, crds.z, block.frame);
            this.p(crds.x+2, crds.y+2, crds.z, block.frame);
            this.p(crds.x+2, crds.y+3, crds.z, block.frame);
            this.p(crds.x+2, crds.y+4, crds.z, block.frame);
            this.p(crds.x+1, crds.y+4, crds.z, block.frame);
            this.p(crds.x, crds.y+4, crds.z, block.frame);
            this.p(crds.x-1, crds.y+4, crds.z, block.frame);
            this.p(crds.x-1, crds.y+3, crds.z, block.frame);
            this.p(crds.x-1, crds.y+2, crds.z, block.frame);
            this.p(crds.x-1, crds.y+1, crds.z, block.frame);
            
            this.p(crds.x, crds.y+1, crds.z, block.portal);
            this.p(crds.x+1, crds.y+1, crds.z, block.portal);
            this.p(crds.x, crds.y+2, crds.z, block.portal);
            this.p(crds.x+1, crds.y+2, crds.z, block.portal);
            this.p(crds.x, crds.y+3, crds.z, block.portal);
            this.p(crds.x+1, crds.y+3, crds.z, block.portal);                                  
            }
      }
}

Item.registerUseFunction("itemAPortal", function(coords, item, block){
    var place = coords.relative;
    if(GenerationUtils.isTransparentBlock(World.getBlockID(place.x, place.y, place.z))){
    portalGenerationHelper.generatePortal({x: place.x, y: place.y, z: place.z});    
    }
});

Recipes.addShaped({id: ItemID.itemPortal, count: 1, data: 0}, [
    "aaa",
    "a a",
    "aaa"
], ['a', 89, 0]);

Recipes.addShaped({id: ItemID.itemAPortal, count: 1, data: 0}, [
    "ab"
], ['a', ItemID.itemPortal, 0, 'b', 325, 8]);

Item.registerUseFunction("continuumOrb", function(coords, item, block){
    var drop = getContinumDropItem();
    World.drop(coords.relative.x + 0.5, coords.relative.y + 0.1, coords.relative.z + 0.5, drop.id, 1, drop.data);
    item.id--;
    if(!item.count){item.id = 0;}
    Player.setCarriedItem(item.id, item.count, 0);
});

var CONTINUM_RANDOM_DROP = [   
    {chance: 41, id: ItemID.Ambrosium, data: 0},
    {chance: 31, id: ItemID.skyrootSword, data: 0},
    {chance: 28, id: ItemID.skyrootShovel, data: 0},
    {chance: 36, id: ItemID.skyrootPickaxe, data: 0},
    {chance: 32, id: ItemID.skyrootAxe, data: 0},
    {chance: 30, id: ItemID.ambrosiumTorch, data: 0},
    {chance: 1.2, id: ItemID.plateGravitite, data: 0},
    {chance: .1, id: ItemID.gravititeSword, data: 0},
    {chance: .7, id: ItemID.valkiriaSword, data: 0},
    {chance: 1.5, id: BlockID.oreGravitite, data: 0},
    {chance: .27, id: BlockID.oreZanite, data: 0},
    {chance: 20, id: BlockID.oreArkenium, data: 0},
    {chance: 29, id: ItemID.zaniteGemstone, data: 0},
    {chance: 12, id: ItemID.zanitePickaxe, data: 0},
    {chance: .75, id: ItemID.vampireSword, data: 0},
    {chance: .55, id: ItemID.holySword, data: 0},
    {chance: .83, id: ItemID.flamingSword, data: 0},
    {chance: .70, id: ItemID.lightingSword, data: 0},
    {chance: .85, id: ItemID.pigsSword, data: 0},
    {chance: .76, id: ItemID.neptuneHelmet, data: 0},
    {chance: .69, id: ItemID.neptuneChestplate, data: 0},
    {chance: .72, id: ItemID.neptuneLeggings, data: 0},
    {chance: .79, id: ItemID.neptuneBoots, data: 0},
    {chance: 8.9, id: ItemID.phoenixHelmet, data: 0},
    {chance: 8, id: ItemID.phoenixChestplate, data: 0},
    {chance: 8.1, id: ItemID.phoenixLeggings, data: 0},
    {chance: 8.4, id: ItemID.phoenixBoots, data: 0}
];

function getContinumDropItem(){
    var total = 0;
    for (var i in CONTINUM_RANDOM_DROP){
        total += CONTINUM_RANDOM_DROP[i].chance;
    }
    var random = Math.random() * total * 1.3;
    var current = 0;
    for (var i in CONTINUM_RANDOM_DROP){
        var drop = CONTINUM_RANDOM_DROP[i];
        if (current < random && current + drop.chance > random){
            return drop;
        }
        current += drop.chance;
    }    
    return {id: ItemID.ambrosiumTorch, data: 0};
}