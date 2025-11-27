function randomInt(min, max) {
 return Math.floor(Math.random() * (max - min + 1)) + min;
}
const UniqueGen = {
    randomCoords: function(random, chunkX, chunkZ, minHeight, maxHeight) {
        minHeight = minHeight || 0;
        maxHeight = maxHeight || 220;
        return {
            x: chunkX * 16 + random.nextInt(16),
            y: random.nextInt(maxHeight - minHeight + 1) - minHeight,
            z: z = chunkZ * 16 + random.nextInt(16)
        }
    },
    generateOre: function(id, data, chunkX, chunkZ, random, params) {
        for (let i = 0; i < params.veinCounts; i++) {
            let coords = this.randomCoords(random, chunkX, chunkZ, params.minY, params.maxY);
            GenerationUtils.generateOre(coords.x, coords.y, coords.z, id, data, params.size, false, random.nextInt());
        }
    },
    generateOreInDimension: function(id, data, chunkX, chunkZ, random, params) {
        for (let i = 0; i < params.veinCounts; i++) {
            let coords = this.randomCoords(random, chunkX, chunkZ, params.minY, params.maxY);
            GenerationUtils.generateOreCustom(coords.x, coords.y, coords.z, id, data, params.size, params.mode, params.check);
        }
    }
};

const PLANETAR_SAND = Block.createSpecialType({
    explosionres: 6,
    sound: "sand"
});

IDRegistry.genBlockID("menelaus_sand");
Block.createBlock("menelaus_sand",[{name: "Menelaus Sand", texture: [["sand_m", 0]], inCreative: true} ], PLANETAR_SAND);
Translation.addTranslation("Menelaus Sand",{
ru: "Песок Менелая"
});

IDRegistry.genBlockID("menelaus_gravel");
Block.createBlock("menelaus_gravel",[{name: "Menelaus Gravel", texture: [["gravel_m", 0]], inCreative: true} ], PLANETAR_SAND);
Translation.addTranslation("Menelaus Gravel",{
ru: "Гравий Менелая"
});

IDRegistry.genBlockID("menelaus_smoothsand_m");
Block.createBlock("menelaus_smoothsand_m",[{name: "Menelaus Smoothsand", texture: [["stone_sandstone_m_top", 0],["stone_sandstone_m_top",0],["stone_smoothsand_m", 0]], inCreative: true} ]);
Translation.addTranslation("Menelaus Smoothsand",{
ru: "Резной песчаник Менелая"
});

IDRegistry.genBlockID("menelaus_chiseledsand_m");
Block.createBlock("menelaus_chiseledsand_m",[{name: "Menelaus Chiseledsand", texture: [["stone_chiseledsand_m", 0],["stone_chiseledsand_m",0],["stone_smoothsand_m", 0]], inCreative: true} ]);
Translation.addTranslation("Menelaus Chiseledsand",{
ru: "Резной песчаник Менелая"
});


IDRegistry.genBlockID("menelaus_sandstone");
Block.createBlock("menelaus_sandstone",[{name: "Menelaus Sandstone", texture: [["stone_sandstone_m_bottom",0],["stone_sandstone_m_bottom",0],["stone_sand_m", 0]], inCreative: true} ]);
Translation.addTranslation("Menelaus Sandstone",{
ru: "Песчаник Менелая"
});

IDRegistry.genBlockID("pilz_log_m");
Block.createBlock("pilz_log_m",[{name: "Pilz log", texture: [["pilz_log_top",0],["pilz_log_top",0],["pilz_log", 0]], inCreative: true} ]);
Translation.addTranslation("Pilz log",{
ru: "Большой грибовый стержень Менелая"
});

IDRegistry.genBlockID("stone_menelaus");
Block.createBlock("stone_menelaus",[{name: "Stone Menelaus", texture: [["stone_m",0]], inCreative: true} ]);
Translation.addTranslation("Stone Menelaus",{
ru: "Камень Менелая"
});

IDRegistry.genBlockID("pilz_menelaus_inside");
Block.createBlock("pilz_menelaus_inside",[{name: "Pilz Menelaus inside", texture: [["pilz_menelaus_inside",0]], inCreative: true} ]);
Translation.addTranslation("Pilz Menelaus inside",{
ru: "Грибничная шапка Минелая"
});

IDRegistry.genBlockID("pilz_menelaus");
Block.createBlock("pilz_menelaus",[{name: "Pilz Menelaus", texture: [["pilz_menelaus",0]], inCreative: true} ]);
Translation.addTranslation("Pilz Menelaus",{
ru: "Грибничная шапка Минелая"
});

IDRegistry.genBlockID("planks_menelaus_mushroom");
Block.createBlock("planks_menelaus_mushroom",[{name: "Planks menelaus", texture: [["planks_menelaus_mushroom",0]], inCreative: true} ]);
Translation.addTranslation("Planks menelaus",{
ru: "Доски Минелая"
});


IDRegistry.genBlockID("stone_brick_m");
Block.createBlock("stone_brick_m",[{name: "Stone Brick Menelaus",  texture: [["stone_brick_m",0]], inCreative: true} ]);
Translation.addTranslation("Stone Brick Menelaus",{
ru: "Каменные кирпичи Менелая"
});

ToolAPI.registerBlockMaterial(BlockID.stone_brick_m, "stone", 1);

ToolAPI.registerBlockMaterial(BlockID.stone_cobble_m, "stone", 1);

ToolAPI.registerBlockMaterial(BlockID.stone_cobble_m, "stone", 1);

ToolAPI.registerBlockMaterial(BlockID.stone_menelaus, "stone", 1);

ToolAPI.registerBlockMaterial(BlockID.stone_sand_m, "stone", 1);

IDRegistry.genBlockID("stone_cracked_m");
Block.createBlock("stone_cracked_m",[{name: "Stone Cracked Menelaus", texture: [["stone_brick_m",0]], inCreative: true} ]);
Translation.addTranslation("Stone Cracked Menelaus",{
ru: "Потрескавшиеся каменные кирпичи Менелая"
});

IDRegistry.genBlockID("stone_cobble_m");
Block.createBlock("stone_cobble_m",[{name: "Cobblestone Menelaus", texture: [["stone_cobble_m",0]], inCreative: true} ]);
Translation.addTranslation("Cobblestone Menelaus ",{
ru: "Булыжник Менелая"
});

IDRegistry.genBlockID("dirt_m");
Block.createBlock("dirt_m",[{name: "Dirt Menelaus", texture: [["dirt_m",0]], inCreative: true} ]);
Translation.addTranslation("Dirt Menelaus ",{
ru: "Земля Менелая"
});

IDRegistry.genItemID("menelaus_stick"); 
Item.createItem("menelaus_stick", "Stick Menelaus", {name: "stick", meta: 0}, {stack: 64});
Translation.addTranslation("Stick Menelaus", {
ru: "Трость Менелая"
});

var Menelaus = new CustomBiome ("Menelaus")
.setCoverBlock(BlockID.menelaus_sand, 0)
.setSurfaceBlock(BlockID.menelaus_sandstone, 0)
.setFillingBlock(VanillaBlockID.stone, 0);
var Menelay = new Dimensions.CustomDimension("Menelay", 73);
Menelay.setSkyColor(.243, .165, .5);
Menelay.setFogColor(.237, .118, .14);
Menelay.setGenerator(Dimensions.newGenerator({
    biome: Menelaus.id,
    layers: [

    {
        minY: 0,
        maxY: 128,
         yConversion: [[1, -0.99], [0.5, -.99], [.9, -0.99], [0.4, -.4], [0, 0.8]
        ],
        material: {
            base: VanillaBlockID.stone, width: 2,
            surface: {
                id: BlockID.menelaus_sandstone,
                data: 0,
                width: 4
            },
            cover: BlockID.menelaus_sand
        },
        noise: {
            octaves: {
               count: 5,
               scale: 70,
               weight: 1.57
            },
        }     
    },{ minY: 0,
      	maxY: 1,
      	material: {base: 7}}]

}));
Callback.addCallback('ItemUse', function (coords, item, block, is, player) {
if(item.id == ItemID.menelaus_stick){
Dimensions.transfer(player,Menelay.id);    
 }
});

Block.registerDropFunction("stone_menelaus", function(coords, blockID){

    return [[BlockID.stone_cobble_m, 1, 0]] 

});

Callback.addCallback("GenerateCustomDimensionChunk", function(chunkX, chunkZ, random, dimensionId) { 
 if (dimensionId != Menelay.id) return;
 UniqueGen.generateOreInDimension(BlockID.stone_menelaus, 0, chunkX, chunkZ, random, { 
 veinCounts: 3,
 minY:70, 
 maxY: 128, 
 size: randomInt(40, 110), 
 mode: true, 
 check: [VanillaBlockID.stone] 
 }); 
});

Callback.addCallback("GenerateCustomDimensionChunk", function(chunkX, chunkZ, random, dimensionId) { 
 if (dimensionId != Menelay.id) return;
 UniqueGen.generateOreInDimension(BlockID.kohle_erz_m, 0, chunkX, chunkZ, random, { 
 veinCounts: 3,
 minY:2, 
 maxY: 128, 
 size: randomInt(2, 6), 
 mode: true, 
 check: [BlockID.stone_menelaus] 
 }); 
});

Callback.addCallback("GenerateCustomDimensionChunk", function(chunkX, chunkZ, random, dimensionId) { 
 if (dimensionId != Menelay.id) return;
 UniqueGen.generateOreInDimension(BlockID.quartz_erz_m, 0, chunkX, chunkZ, random, { 
 veinCounts: 2,
 minY:2, 
 maxY: 128, 
 size: randomInt(1, 8), 
 mode: true, 
 check: [BlockID.stone_menelaus] 
 }); 
});

Callback.addCallback("GenerateCustomDimensionChunk", function(chunkX, chunkZ, random, dimensionId) { 
 if (dimensionId != Menelay.id) return;
 UniqueGen.generateOreInDimension(BlockID.kupfer_erz_m, 0, chunkX, chunkZ, random, { 
 veinCounts: 5,
 minY:2, 
 maxY: 128, 
 size: randomInt(3, 9), 
 mode: true, 
 check: [BlockID.stone_menelaus] 
 }); 
});



Callback.addCallback("GenerateCustomDimensionChunk", function(chunkX, chunkZ, random, dimensionId) { 
 if (dimensionId != Menelay.id) return;
 UniqueGen.generateOreInDimension(BlockID.zinn_erz, 0, chunkX, chunkZ, random, { 
 veinCounts: 4,
 minY:2, 
 maxY: 128, 
 size: randomInt(2, 8), 
 mode: true, 
 check: [VanillaBlockID.stone] 
 }); 
});

Callback.addCallback("GenerateCustomDimensionChunk", function(chunkX, chunkZ, random, dimensionId) { 
 if (dimensionId != Menelay.id) return;
 UniqueGen.generateOreInDimension(BlockID.zink_erz, 0, chunkX, chunkZ, random, { 
 veinCounts: 4,
 minY:2, 
 maxY: 128, 
 size: randomInt(2, 8), 
 mode: true, 
 check: [VanillaBlockID.stone] 
 }); 
});

Callback.addCallback("GenerateCustomDimensionChunk", function(chunkX, chunkZ, random, dimensionId) { 
 if (dimensionId != Menelay.id) return;
 UniqueGen.generateOreInDimension(BlockID.bauxit_erz, 0, chunkX, chunkZ, random, { 
 veinCounts: 3,
 minY:2, 
 maxY: 128, 
 size: randomInt(2, 8), 
 mode: true, 
 check: [VanillaBlockID.stone] 
 }); 
});

Callback.addCallback("GenerateCustomDimensionChunk", function(chunkX, chunkZ, random, dimensionId) { 
 if (dimensionId != Menelay.id) return;
 UniqueGen.generateOreInDimension(BlockID.magnetit_erz, 0, chunkX, chunkZ, random, { 
 veinCounts: 4,
 minY:2, 
 maxY: 128, 
 size: randomInt(2, 7), 
 mode: true, 
 check: [VanillaBlockID.stone] 
 }); 
});

Callback.addCallback("GenerateCustomDimensionChunk", function(chunkX, chunkZ, random, dimensionId) { 
 if (dimensionId != Menelay.id) return;
 UniqueGen.generateOreInDimension(BlockID.kupfer_erz, 0, chunkX, chunkZ, random, { 
 veinCounts: 5,
 minY:2, 
 maxY: 128, 
 size: randomInt(2, 8), 
 mode: true, 
 check: [VanillaBlockID.stone] 
 }); 
});

Callback.addCallback("GenerateCustomDimensionChunk", function(chunkX, chunkZ, random, dimensionId){
if (dimensionId != Menelay.id) return;
let coords = GenerationUtils.randomCoords(chunkX, chunkZ);
  coords = GenerationUtils.findSurface(coords.x, 128, coords.z);
  if (coords.y < 32) return;
   for(let i=0; i<randomInt(0, 1); i++){
 if(World.getBlockID(coords.x,coords.y,coords.z)==BlockID.menelaus_sand){  
World.setBlock(coords.x,coords.y+1,coords.z,VanillaBlockID.dead_bush,0);   
    }
}});

Callback.addCallback("GenerateCustomDimensionChunk", function (chunkX, chunkZ, random, dimensionId){
if (dimensionId != Menelay.id) return;
let coords = GenerationUtils.randomCoords(chunkX, chunkZ);
  coords = GenerationUtils.findSurface(coords.x, 128, coords.z);
  if (coords.y < 32) return;
   for(let i=0; i<randomInt(0, 1); i++){
 if(World.getBlockID(coords.x,coords.y,coords.z)==BlockID.menelaus_sand){  
World.setBlock(coords.x,coords.y+1,coords.z,BlockID.mendel_berry_plant,3);   
    }
}});