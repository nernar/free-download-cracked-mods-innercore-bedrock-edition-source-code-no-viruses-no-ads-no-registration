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

const PLANT = Block.createSpecialType({
   base: 38,
    solid: false,
    destroytime: 0.1,
    explosionres: 1,
    renderlayer: 1,
    rendertype: 91,
    renderallfaces: true,
    lightopacity: 0,
    translucency: 0.5,
    sound: "grass"
});

IDRegistry.genBlockID("vic_a1_stone");
Block.createBlock("vic_a1_stone",[{name: "Red Vic Stone", texture: [["Vic Stone", 0]], inCreative: true} ]);
Translation.addTranslation("Red Vic Stone",{
ru: "Красный камень"
});



IDRegistry.genBlockID("vic_a1_stone_big_fence");
Block.createBlock("vic_a1_stone_big_fence",[{name: "Red Vic Stone Big Fence", texture: [["Vic Stone", 0]], inCreative: true} ], BLOCK_TYPE_FENCEE);
Translation.addTranslation("Red Vic Stone Big Fence",{
ru: "Красно-каменная ограда"
});



ToolAPI.registerBlockMaterial(BlockID.vic_a1_stone, "stone", 4);

ToolAPI.registerBlockMaterial(BlockID.vic_a1_stone_stairs, "stone", 4);

ToolAPI.registerBlockMaterial(BlockID.vic_a1_stone_big_fence, "stone", 4);

ToolAPI.registerBlockMaterial(BlockID.vic_a1_stone_fence, "stone", 4);

/*Item.registerNameOverrideFunction(BlockID.vic_a1_stone, function(item, name){
    return Native.Color.RED + name + "\n§6" + "Этот камень очень крепок,\nведь в нём была концентрация прожжённого\n угля,который содержится только на Vic ";
});*/

IDRegistry.genBlockID("vic_a1_stonesand");
Block.createBlock("vic_a1_stonesand",[{name: "Red Vic Stonesand", texture: [["StoneSand", 0]], inCreative: true} ]);
Translation.addTranslation("Red Vic Stonesand",{
ru: "Красный окаменевший песок"
});

ToolAPI.registerBlockMaterial(BlockID.vic_a1_stonesand, "stone", 3);


//Камень виса
 
IDRegistry.genBlockID("vic_a1_sand");
Block.createBlock("vic_a1_sand",[{name: "Red Vic Sand", texture: [["Vic Sand", 0]], inCreative: true} ], PLANETAR_SAND);
Translation.addTranslation("Red Vic Sand",{
ru: "Красный сожжённый песок"
});
 
 ToolAPI.registerBlockMaterial(BlockID.vic_a1_sand, "stone", 2);
 
/*Item.registerNameOverrideFunction(BlockID.vic_a1_stonesand, function(item, name){
    return Native.Color.RED + name + "\n§6" + "При скрещивании песка и камня произошла \nнеобычная реакция минералов,\nи песок закрепился в структуре планеты Vic";
});*/
 //Камнепесок виса
 
IDRegistry.genBlockID("marble_sc");
Block.createBlock("marble_sc",[{name: "Marble", texture: [["Mramor", 0]], inCreative: true} ]);
Translation.addTranslation("Marble",{
ru: "Мрамор"
});



ToolAPI.registerBlockMaterial(BlockID.marble_sc, "stone", 1);

ToolAPI.registerBlockMaterial(BlockID.marble_stairs_sc, "stone", 1);

IDRegistry.genItemID("burned_stick"); 
Item.createItem("burned_stick", "Burned Stick >", {name: "Vic Stick", meta: 0}, {stack: 64});
Translation.addTranslation("Burned Stick >", {
ru: "Прожжённая палка >"
});

Recipes.addFurnaceFuel(ItemID.burned_stick, 0, 50)

IDRegistry.genBlockID("bush_vic");
Block.createBlock("bush_vic",[{name: "Burned Bush", texture: [["Vic Plant", 0]], inCreative:false} ], PLANT);
Translation.addTranslation("Burned Bush",{
ru: "Сгорающий куст"
});

var BUSH_VIC = new ICRender.CollisionShape();
var entry = BUSH_VIC.addEntry();
entry.addBox( 0, 0, 0, 0,0, 0) 
BlockRenderer.setCustomCollisionShape(BlockID.bush_vic, -1,BUSH_VIC)

IDRegistry.genItemID("bush_vic_1"); 
Item.createItem("bush_vic_1", "Burned Bush", {name: "Vic Plant", meta: 0}, {stack: 64});
Translation.addTranslation("Burned Bush", {
ru: "Сгорающий куст"
});

Item.registerUseFunction("bush_vic_1", function(coords, item, block, player){
var region = BlockSource.getDefaultForActor(player);
    var place = coords.relative;
   if(region.getBlockId(place.x,place.y-1,place.z)==BlockID.vic_a1_sand){ 
        region.setBlock(place.x, place.y, place.z, BlockID.bush_vic);  
         Entity.setCarriedItem(player, item.id, item.count - 1, item.data);
    } 
});

Block.registerDropFunction("bush_vic", function(coords, blockID){
    return [[ItemID.burned_stick, 2, 0]] 
});

ToolAPI.registerBlockMaterial(BlockID.bush_vic, "plant");


/*Item.registerNameOverrideFunction(BlockID.marble_sc, function(item, name){
    return Native.Color.RED + name + "\n§6" + "Под влиянием огромного излучения\n радиации от звезды,\nструктура камня в некоторых местах изменилась,\nпревратившись в мрамор ";
});*/

IDRegistry.genBlockID("vic_coal");
Block.createBlock("vic_coal",[{name: "Burned Coal Block", texture: [["Vic Coal", 0]], inCreative: true} ]);
Translation.addTranslation("Burned Coal Block",{
ru: "Прожжённый угольный блок"
});

Recipes.addFurnaceFuel(ItemID.burned_coal, 0, 170)

ToolAPI.registerBlockMaterial(BlockID.vic_coal, "stone", 1);

/*Item.registerNameOverrideFunction(BlockID.vic_coal, function(item, name){
    return Native.Color.RED + name + "\n§6" + "В ряде химических реакций\n под влиянием радиации звезды,\nуголь стал кристализоваться и греться,\nтеперь он вечно горит и не\n плавится от этого. ";
});*/

IDRegistry.genItemID("burned_coal"); 
Item.createItem("burned_coal", "Burned Coal >", {name: "Burned Coal", meta: 0}, {stack: 64});
Translation.addTranslation("Burned Coal >", {
ru: "Прожжённый уголь >"
});

Block.registerDropFunction("vic_coal", function(coords, blockID){
    return [[ItemID.burned_coal, 1, 0]] 
});

IDRegistry.genBlockID("vic_iron");
Block.createBlock("vic_iron",[{name: "Vic Iron", texture: [["Vic Iron", 0]], inCreative: true} ]);
Translation.addTranslation("Vic Iron",{
ru: "Железо в горячем камне"
});

ToolAPI.registerBlockMaterial(BlockID.vic_iron, "stone", 2);

Recipes.addFurnace(BlockID.vic_iron, VanillaItemID.iron_ingot, 0);

var Vic_1 = new CustomBiome ("Vic_1")
.setSkyColor(android.graphics.Color.rgb(16, -164, -255))
.setCoverBlock(BlockID.vic_a1_sand, 0)
.setSurfaceBlock(BlockID.vic_a1_stonesand, 0)
.setFillingBlock(BlockID.vic_a1_stone, 0);
var Vic = new Dimensions.CustomDimension("Vic", 2005);
Vic.setSkyColor(16, -164, -255);
Vic.setFogColor(16, -164, -255);
Vic.setGenerator(Dimensions.newGenerator({
    biome: Vic_1.id,
    layers: [

    {
        minY: 0,
        maxY: 128,
         yConversion: [[1, -0.99], [0.5, -.99], [.9, -0.99], [0.4, -.4], [0, 0.8]
        ],
        material: {
            base: BlockID.vic_a1_stone,
            surface: {
                id: BlockID.vic_a1_stonesand,
                data: 0,
                width: 5
            },
            cover: BlockID.vic_a1_sand,
            width: 3
        },
        noise: {
            octaves: {
               count: 9,
               scale: 193,
               weight: 1.7
            }
         }     
      },
      { minY: 0,
      	maxY: 1,
      	material: {base: 7}
    }]
}));

Callback.addCallback("GenerateCustomDimensionChunk", function(chunkX, chunkZ, random, dimensionId) { 
 if (dimensionId != Vic.id) return; 
 UniqueGen.generateOreInDimension(BlockID.vic_coal, 0, chunkX, chunkZ, random, { 
 veinCounts: 15, 
 minY:2, 
 maxY: 90, 
 size: randomInt(5, 15), 
 mode: true, 
 check: [BlockID.vic_a1_stone] 
 }); 
});

Callback.addCallback("GenerateCustomDimensionChunk", function(chunkX, chunkZ, random, dimensionId) { 
 if (dimensionId != Vic.id) return; 
 UniqueGen.generateOreInDimension(BlockID.vic_iron, 0, chunkX, chunkZ, random, { 
 veinCounts: 5, 
 minY:2, 
 maxY: 70, 
 size: randomInt(4, 10), 
 mode: true, 
 check: [BlockID.vic_a1_stone] 
 }); 
});

Callback.addCallback("GenerateCustomDimensionChunk", function(chunkX, chunkZ, random, dimensionId) { 
 if (dimensionId != Vic.id) return; 
 UniqueGen.generateOreInDimension(BlockID.marble_sc, 0, chunkX, chunkZ, random, { 
 veinCounts: 10, 
 minY:2, 
 maxY: 100, 
 size: randomInt(7, 30), 
 mode: true, 
 check: [BlockID.vic_a1_stone] 
 }); 
});

Callback.addCallback("GenerateCustomDimensionChunk", function(chunkX, chunkZ, random, dimensionId){
if (dimensionId != Vic.id) return;
let coords = GenerationUtils.randomCoords(chunkX, chunkZ);
  coords = GenerationUtils.findSurface(coords.x, 128, coords.z);
  if (coords.y < 32) return;
   for(let i=0; i<randomInt(2, 3); i++){
 if(World.getBlockID(coords.x,coords.y,coords.z)==BlockID.vic_a1_sand){  
World.setBlock(coords.x,coords.y+1,coords.z,BlockID.bush_vic,0);   
    }
}});

Callback.addCallback('ItemUse', function (coords, item, block, is, player) {
if(Entity.getCarriedItem(player).id == 0 && block.id == BlockID.computer_d) {
Dimensions.transfer(player, Vic.id);        
 }
});

Callback.addCallback("LocalTick", function() {
	let pos = Player.getPosition()
	if(Player.getDimension()==Vic.id){
		
	for(var i = 0; i<3; i++){
		
	}
	}
	if(Player.getDimension()==Vic.id){
	   
		World.setWorldTime(13300);
	}
});

