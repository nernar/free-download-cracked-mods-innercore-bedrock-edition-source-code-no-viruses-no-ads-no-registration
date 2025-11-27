/*
BUILD INFO:
  dir: core/Spaces
  target: main.js
  files: 209
*/



// file: SpaceTools/Core/Core.js

IMPORT("TileRender");
IMPORT("EnergyNet");
IMPORT("StorageInterface");
IMPORT("ScrutinyAPI");
IMPORT("ItemAnimHelper");
IMPORT("BlockEngine");

let sj = EnergyTypeRegistry.assureEnergyType("spacejoule", 0.25);
//Космическая энергия
let ob = EnergyTypeRegistry.assureEnergyType("oxygenbar", 0.25);
let stj = EnergyTypeRegistry.assureEnergyType("strengthjoule", 1);
var EU = EnergyTypeRegistry.assureEnergyType("Eu", 1);

var RF = EnergyTypeRegistry.assureEnergyType("Rf", 0.25);
//Кислород
/*Mod by SpacesCraftTeam - ArtemOn,Demerror,Arsenilay,Temp0zz
 Moderator of pablic in vkontakte is Nikita - Temp0ss/Никита Киркоров
 ArtemOn)Артём Борисенков
 Demerror - Дима (фамилию размещать не буду т.к он врядли будет за)
 Arsenilay - Арсений Заусайлов
 ArtemOn - texture,code,idea.Demerror - more texture.Arsenilay - 3D models obj.(don't  more).
 Based on Inner core под Horizon...
 */
 Callback.addCallback('LevelDisplayed', function () {
    Game.message("§l§6Мод SpacesCraft был успешно загружен!")
});

var SpacesConfiguration = {Экипировка: {coords: __config__.getFloat('Экипировка.coords'), twocoords: __config__.getFloat('Экипировка.twocoords'), threecoords: __config__.getFloat('Экипировка.threecoords')}};

var EquipMent = new UI.Window({
	location: {
    	x: SpacesConfiguration.Экипировка.coords / SpacesConfiguration.Экипировка.twocoords - SpacesConfiguration.Экипировка.threecoords,
        y: 60,
        width: 145,
        height: 347
    },
    drawing: [{type: "bitmap", bitmap:"SPC.gray", scale: 700 ,x: 0,y: 0}, 	{type: "frame", bitmap: "classic_frame_bg_light", scale: 10, width: 1000, height: 2400, y: 0}],
    elements: {
        "Head": {
        	type: "slot", 
			x: 60, 
			y: 80, 
			size: 300,
			bitmap:"SPC.SPC_Head"
		},
		"Body": {
			type: "slot",
			x:60,
			y:380,
			size:300,
			bitmap: "SPC.SPC_Body"
		},
		"Legs": {
			type: "slot",
			x:60,
			y:680,
			size:300,
			bitmap: "SPC.SPC_Legs"
		},
		"Boots" : {
			type: "slot",
			x:60,
			y:980,
			size:300,
			bitmap: "SPC.SPC_LegTwoS"
		},
		"Ballone1" : {
			type: "slot",
			x:60,
			y:1430,
			size:300,
			bitmap: "SPC.SPC_Tank"
		},
		"Ballone2": {
		type: "slot",
			x: 480,
			y:1430,
			size:300,
			bitmap: "SPC.SPC_Tank"
		},
     }
  }
);



let Snariadjenie = new UI.Container();

Callback.addCallback("NativeGuiChanged", function(screenName){ 
    if(screenName == "survival_inventory_screen" || screenName == "creative_inventory_screen" || screenName == "inventory_screen" || screenName == "inventory_screen_pocket"){ 
        Snariadjenie.openAs(EquipMent);
    } else {
        Snariadjenie.close();
    } 
});

Item.registerUseFunction("extra_oxygen_tank", function(coords, item, block, player){
	this.container.getSlot("Ballone1").id;
	this.container.setSlot("Ballone1", ItemID.extra_oxygen_tank, 1 ,0);
	         //Entity.setCarriedItem(player, item.id, item.count - 1, item.data);
}); 

var BLOCK_TYPE_STAIRS_GL = Block.createSpecialType({
    lightopacity: 1,
   destroytime: .4,
    sound: "glass"
});

var BLOCK_TYPE_FENCE_GL = Block.createSpecialType({
    lightopacity: 1,
    renderlayer: 1,
    rendertype: 11,
    sound: "glass"
});

var BLOCK_TYPE_FENCEE_GL = Block.createSpecialType({
    lightopacity: 1,
    renderlayer: 1,
    rendertype: 32,
    sound: "glass"
});

var BLOCK_TYPE_GLASS = Block.createSpecialType({ 
    explosionres: 05,
    lightopacity: 1,
    destroytime: .4,
    renderlayer: 1,
    sound: "glass"
});

var BLOCK_TYPE_STAIRS = Block.createSpecialType({
    lightopacity: 1,
    destroytime: .6,
});

var BLOCK_TYPE_FENCE = Block.createSpecialType({
    lightopacity: 1,
    renderlayer: 2,
    rendertype: 11
});

var BLOCK_TYPE_FENCEE = Block.createSpecialType({
    lightopacity: 1,
    renderlayer: 2,
    rendertype: 32
});

var BLOCK_TYPE_PLANE = Block.createSpecialType({
    lightopacity: 1,
    renderlayer: 1,
    rendertype: 87,
    translucency: 1,
    sound: "glass"
});

var BLOCK_TYPE_STAIRS_WD = Block.createSpecialType({
    lightopacity: 1,
    destroytime: .4,
    sound: "wood"
});

var BLOCK_TYPE_FENCE_WD = Block.createSpecialType({
    lightopacity: 1,
    renderlayer: 2,
    rendertype: 11,
    sound: "wood"
});




// file: SpaceTools/Core/Liquids.js

const BLOCK_TYPE_LIQUID = Block.createSpecialType({
    solid: false,
    renderlayer: 1,
    explosionres: 10000
});

 LiquidRegistry.registerLiquid("spacescraft_oil", "Oil", ["oil_gl_flow"]); 
 
Block.createLiquidBlock("spacescraft_oil", 
{ 
 name: "Oil", 
 still: { 
 texture: ["oil_gl_still", 0], 
 id: "spacescraft_oil_still",
 }, 
 flowing: { 
 texture: ["oil_gl_flow", 0], 
 id: "spacescraft_oil_flowing",
 }, 
 bucket: { 
 texture: { name: "Bucket Oil", meta: 0 }, 
 name: "Bucket of oil",
 id: "bucket_of_oil",
 }, 
}, BLOCK_TYPE_LIQUID);

Callback.addCallback("GenerateChunk", function(chunkX, chunkZ, random){
if (Math.random()*12 <= 1){
    for(var i = 0; i < 3; i++){
        
        var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 0, 15);
        GenerationUtils.generateOre(coords.x, coords.y, coords.z, BlockID.oil_gl_still, 0, 1, false);

} 
} 
});


LiquidRegistry.registerLiquid("spacescraft_rubber", "Rubber", ["rubber_spacescraft"]); 
 
Block.createLiquidBlock("spacescraft_rubber", 
{ 
 name: "Rubber", 
 still: { 
 texture: ["rubber_spacescraft", 0], 
 id: "spacescraft_rubber_still",
 }, 
 flowing: { 
 texture: ["rubber_spacescraft", 0], 
 id: "spacescraft_rubber_flowing",
 }, 
 bucket: { 
 texture: { name: "rubber_bucket", meta: 0 }, 
 name: "Bucket of rubber",
 id: "bucket_of_rubber",
 }, 
}, BLOCK_TYPE_LIQUID);






LiquidRegistry.registerLiquid("spacescraft_cerosin", "Cerosin", ["cerosin_sc"]); 
 
Block.createLiquidBlock("spacescraft_cerosin", 
{ 
 name: "Cerosin", 
 still: { 
 texture: ["cerosin_sc", 0], 
 id: "spacescraft_cerosin_still",
 }, 
 flowing: { 
 texture: ["cerosin_sc", 0], 
 id: "spacescraft_cerosin_flowing",
 }, 
 bucket: { 
 texture: { name: "cerosin_bucket", meta: 0 }, 
 name: "Bucket of kerosene",
 id: "bucket_of_cerosin",
 }, 
}, BLOCK_TYPE_LIQUID);



 LiquidRegistry.registerLiquid("spacescraft_bad_fuel", "Dirty Fuel", ["bad_fuel"]); 
 
Block.createLiquidBlock("spacescraft_bad_fuel", 
{ 
 name: "Dirty Fuel", 
 still: { 
 texture: ["bad_fuel", 0], 
 id: "spacescraft_bad_fuel_still",
 }, 
 flowing: { 
 texture: ["bad_fuel", 0], 
 id: "spacescraft_bad_fuel_flowing",
 }, 
 bucket: { 
 texture: { name: "bad_fuel_bucket", meta: 0 }, 
 name: "Bucket of dirty fuel",
 id: "bucket_of_bad_fuel",
 }, 
}, BLOCK_TYPE_LIQUID);



LiquidRegistry.registerLiquid("spacescraft_liquidoxygen", "Liquid Oxygen", ["liquidoxygen"]); 
 
Block.createLiquidBlock("spacescraft_liquidoxygen", 
{ 
 name: "Liquid Oxygen", 
 still: { 
 texture: ["liquidoxygen", 0], 
 id: "spacescraft_liquidoxygen_still",
 }, 
 flowing: { 
 texture: ["liquidoxygen", 0], 
 id: "spacescraft_liquidoxygen_flowing",
 }, 
 bucket: { 
 texture: { name: "oxygenliquid_bucket", meta: 0 }, 
 name: "Bucket of liquid oxygen",
 id: "bucket_of_liquid_oxygen",
 }, 
}, BLOCK_TYPE_LIQUID);



LiquidRegistry.registerLiquid("spacescraft_argon", "Argon", ["argon"]); 
 
Block.createLiquidBlock("spacescraft_argon", 
{ 
 name: "Argon", 
 still: { 
 texture: ["argon", 0], 
 id: "spacescraft_argon_still",
 }, 
 flowing: { 
 texture: ["argon", 0], 
 id: "spacescraft_argon_flowing",
 }, 
 bucket: { 
 texture: { name: "argon_bucket", meta: 0 }, 
 name: "Bucket of argon",
 id: "bucket_of_argon",
 }, 
}, BLOCK_TYPE_LIQUID);



LiquidRegistry.registerLiquid("spacescraft_methane", "Methane", ["methane"]); 
 
Block.createLiquidBlock("spacescraft_methane", 
{ 
 name: "Methane", 
 still: { 
 texture: ["methane", 0], 
 id: "spacescraft_methane_still",
 }, 
 flowing: { 
 texture: ["methane", 0], 
 id: "spacescraft_methane_flowing",
 }, 
 bucket: { 
 texture: { name: "methane_bucket", meta: 1 }, 
 name: "Bucket of methane",
 id: "bucket_of_methane",
 }, 
}, BLOCK_TYPE_LIQUID);



LiquidRegistry.registerLiquid("spacescraft_liquid_methane", "Liquid Methane", ["liquidmethane"]); 
 
Block.createLiquidBlock("spacescraft_liquid_methane", 
{ 
 name: "Liquid Methane", 
 still: { 
 texture: ["liquidmethane", 0], 
 id: "spacescraft_liquid_methane_still",
 }, 
 flowing: { 
 texture: ["liquidmethane", 0], 
 id: "spacescraft_liquid_methane_flowing",
 }, 
 bucket: { 
 texture: { name: "liquidmethane_bucket", meta: 0 }, 
 name: "Bucket of liquid methane",
 id: "bucket_of_liquid_methane",
 }, 
}, BLOCK_TYPE_LIQUID);



LiquidRegistry.registerLiquid("spacescraft_carbondioxide", "Carbon dioxide", ["carbondioxide"]); 
 
Block.createLiquidBlock("spacescraft_carbondioxide", 
{ 
 name: "Carbon dioxide", 
 still: { 
 texture: ["carbondioxide", 0], 
 id: "spacescraft_carbondioxide_still",
 }, 
 flowing: { 
 texture: ["carbondioxide", 0], 
 id: "spacescraft_carbondioxide_flowing",
 }, 
 bucket: { 
 texture: { name: "carbondioxide_bucket", meta: 0 }, 
 name: "Bucket of carbon dioxide",
 id: "bucket_of_carbondioxide",
 }, 
}, BLOCK_TYPE_LIQUID);



LiquidRegistry.registerLiquid("spacescraft_helium", "Helium", ["helium"]); 
 
Block.createLiquidBlock("spacescraft_helium", 
{ 
 name: "Helium", 
 still: { 
 texture: ["helium", 0], 
 id: "spacescraft_helium_still",
 }, 
 flowing: { 
 texture: ["helium", 0], 
 id: "spacescraft_helium_flowing",
 }, 
 bucket: { 
 texture: { name: "helium_bucket", meta: 0 }, 
 name: "Bucket of helium",
 id: "bucket_of_helium",
 }, 
}, BLOCK_TYPE_LIQUID);



LiquidRegistry.registerLiquid("spacescraft_nitrogen", "Nitrogen", ["nitrogen"]); 
 
Block.createLiquidBlock("spacescraft_nitrogen", 
{ 
 name: "Nitrogen", 
 still: { 
 texture: ["nitrogen", 0], 
 id: "spacescraft_nitrogen_still",
 }, 
 flowing: { 
 texture: ["nitrogen", 0], 
 id: "spacescraft_nitrogen_flowing",
 }, 
 bucket: { 
 texture: { name: "nitrogen_bucket", meta: 0 }, 
 name: "Bucket of nitrogen",
 id: "bucket_of_nitrogen",
 }, 
}, BLOCK_TYPE_LIQUID);



LiquidRegistry.registerLiquid("spacescraft_liquid_nitrogen", "Liquid Nitrogen", ["liquidnitrogen"]); 
 
Block.createLiquidBlock("spacescraft_liquid_nitrogen", 
{ 
 name: "Liquid Nitrogen", 
 still: { 
 texture: ["liquidnitrogen", 0], 
 id: "spacescraft_liquid_nitrogen_still",
 }, 
 flowing: { 
 texture: ["liquidnitrogen", 0], 
 id: "spacescraft_liquid_nitrogen_flowing",
 }, 
 bucket: { 
 texture: { name: "liquidnitrogen_bucket", meta: 0 }, 
 name: "Bucket of liquid nitrogen",
 id: "bucket_of_liquid_nitrogen",
 }, 
}, BLOCK_TYPE_LIQUID);




LiquidRegistry.registerLiquid("spacescraft_liquid_argon", "Liquid Argon", ["liquidargon"]); 
 
Block.createLiquidBlock("spacescraft_liquid_argon", 
{ 
 name: "Liquid Argon", 
 still: { 
 texture: ["liquidargon", 0], 
 id: "spacescraft_liquid_argon_still",
 }, 
 flowing: {  
 texture: ["liquidargon", 0], 
 id: "spacescraft_liquid_argon_flowing",
 }, 
 bucket: { 
 texture: { name: "liquidargon_bucket", meta: 0 }, 
 name: "Bucket of liquid argon",
 id: "bucket_of_liquid_argon",
 }, 
}, BLOCK_TYPE_LIQUID);


Translation.addTranslation("Bucket of kerosene", {ru: "Ведро с керосином"});

Translation.addTranslation("Bucket of rubber",
{ru: "Ведро с сырым каучуком"});

Translation.addTranslation("Bucket of liquid oxygen", {ru: "Ведро с жидким H2O"});

Translation.addTranslation("Bucket of dirty fuel", {ru: "Ведро с загрязнённым топливом"});

Translation.addTranslation("Bucket of methane", {ru: "Ведро с метаном"});

Translation.addTranslation("Bucket of liquid methane", {ru: "Ведро с жидким метаном"});

Translation.addTranslation("Bucket of argon", {ru: "Ведро с Аргоном"});

Translation.addTranslation("Bucket of liquid argon", {ru: "Ведро с жидким Аргоном"});

Translation.addTranslation("Bucket of nitrogen", {ru: "Ведро с Нитрогеном(азотом)"});

Translation.addTranslation("Bucket of liquid nitrogen", {ru: "Ведро с жидким Нитрогеном(азотом)"});


Translation.addTranslation("Bucket of carbon dioxide", {ru: "Ведро с жидким углекислым  газом"});

Translation.addTranslation("Bucket of helium", {ru: "Ведро с жидким гелием"});


Translation.addTranslation("Bucket of fuel", {ru: "Ведро с ракетным топливом"});

Translation.addTranslation("Bucket of oil", {ru: "Ведро с нефтью"});

Translation.addTranslation("Bucket of sulphuric acid", {ru: "Ведро серной кислоты"});

Translation.addTranslation("Bucket of sludge", {ru: "Ведро осадка"});



LiquidRegistry.registerLiquid("spacescraft_fuel", "Ракетное топливо", ["fuel_gl_flow"]); 
 
Block.createLiquidBlock("spacescraft_fuel", 
{ 
 name: "Fuel", 
 still: { 
 texture: ["fuel_gl", 0], 
 id: "spacescraft_fuel_still",
 }, 
 flowing: { 
 texture: ["fuel_gl_flow", 0],
 id: "spacescraft_fuel_flowing",
 }, 
 bucket: { 
 texture: { name: "Bucket Fuel", meta: 0 }, 
 name: "Bucket of fuel",
 id: "bucket_of_fuel",
 }, 
}, BLOCK_TYPE_LIQUID);



LiquidRegistry.registerLiquid("sulphuric_acid", "Sulphuric Acid", ["sulphuric_acid_flow"]); 
 
Block.createLiquidBlock("sulphuric_acid", 
{ 
 name: "Sulphuric Acid", 
 still: { 
 texture: ["sulphuric_acid_still", 0],
 id: "spacescraft_sulphuric_acid_still",
 }, 
 flowing: { 
 texture: ["sulphuric_acid_flow", 0], 
 id: "spacescraft_sulphuric_acid_flow",
 }, 
 bucket: { 
 texture: { name: "bucket_sulphuric_acid", meta: 0 }, 
 name: "Bucket of sulphuric acid",
 id: "bucket_of_sulphuric_acid",
 }, 
}, BLOCK_TYPE_LIQUID);

LiquidRegistry.registerLiquid("sludge_liquid", "Sludge", ["sludge_flow"]); 
 
Block.createLiquidBlock("sludge_liquid", 
{ 
 name: "Sludge", 
 still: { 
 texture: ["sludge_still", 0], 
 id: "spacescraft_sludge_still",
 }, 
 flowing: { 
 texture: ["sludge_flow", 0],
 id: "spacescraft_sludge_flowing",
 }, 
 bucket: { 
 texture: { name: "bucket_sludge", meta: 0 }, 
 name: "Bucket of sludge",
 id: "bucket_of_sludge",
 }, 
 
}, BLOCK_TYPE_LIQUID);

Item.registerUseFunction(ItemID.fuel_canister, function(coords,block, item, data, id,player) { 
 if(item.data == 6){
 coords = coords.relative; 
 World.setBlock(coords.x, coords.y, coords.z, BlockID.spacescraft_fuel_still, 0);
          SpacesCraft.changeDamage(item.id,+6)}})

Item.registerUseFunction(ItemID.fuel_canister, function(coords, block, item, data, id,player) { 
 if(item.data == 0){
 if(block.id == BlockID.spacescraft_fuel_still){
          SpacesCraft.changeDamage(item.id,-1)}}})




// file: groups.js

Item.addCreativeGroup("Ores",   Translation.translate("Руда"), [
   BlockID.arkanite_ore,
BlockID.gravetite_ore,
   BlockID.coldgravetite_ore,
BlockID.coiper_ore,
   BlockID.desh,
BlockID.moonore_cheese,
   BlockID.moonore_sapphire,
BlockID.ore_aluminum,
   BlockID.ore_aluminum_venus,
BlockID.ore_aluminum_asteroids,
   BlockID.ore_copper,
BlockID.ore_copper_mars,
   BlockID.ore_copper_moon,
BlockID.ore_copper_venus,
   BlockID.ore_galena,
BlockID.ore_ilmenite,
   BlockID.ore_iron_asteroids,
BlockID.ore_iron_mars,
   BlockID.ore_quartz_venus,
BlockID.ore_silicon,
   BlockID.ore_silicon_venus,
BlockID.ore_solar,
   BlockID.ore_tin,
BlockID.ore_tin_mars,
   BlockID.ore_tin_moon,
BlockID.ore_tin_venus,
]); 

Item.addCreativeGroup("block ores",
Translation.translate("Блоки руды"), [
BlockID.gravetite_block,
   BlockID.coldgravetite_block,
  BlockID.arkanite_block,
BlockID.coiper_block,
BlockID.block_aluminum,
  BlockID.block_copper,
   BlockID.block_iron_steel,
BlockID.block_lead,
BlockID.block_tin,
  BlockID.block_titanium,
 BlockID.decoration_desh,
BlockID.iron_steel_block,
]);

Item.addCreativeGroup("block ingots",
Translation.translate("Слитки руд"), [
  ItemID.ingot_titanium,
  ItemID.ingot_aluminum,
 ItemID.meteoric_iron_ingot,
 ItemID.ingot_copper,
  ItemID.ingot_desh,
   ItemID.ingot_lead,
    ItemID.ingot_tin,
    ItemID.coldgravetite_ingot,
   ItemID.gravetite_ingot,
  ItemID.ingot_coiper,
  ItemID.arkanite_ingot,
 ItemID.iron_steel_ingot,
]);

Item.addCreativeGroup("Planets",
Translation.translate("Планеты"), [
  BlockID.charged_moon,
  BlockID.charged_mars,
  BlockID.charged_sun,
  BlockID.charged_venus,
]);

Item.addCreativeGroup("Batteries",
Translation.translate("Батарейки"), [
  ItemID.battery,
  ItemID.battery_infinity,
 /* ModAPI.addAPICallback("FuturepackAPI", function(api){
  	ItemID.retium_battery,
  	ItemID.glowtite_batterika,
  	ItemID.neon_battery,
  	ItemID.wakurum_battery,
  	ItemID.quantanium_battery,
   ItemID.bioterium_battery,
  	
  });*/
]);



Item.addCreativeGroup("Vic A - 1",
Translation.translate("Предметы Vic A - 1"), [
  BlockID.vic_a1_sand,
  BlockID.vic_a1_stonesand,
  BlockID.vic_a1_stone,
  BlockID.vic_coal,
  ItemID.burned_coal,
  BlockID.vic_iron,
  BlockID.marble_sc,
  ItemID.bush_vic_1
]);

Item.addCreativeGroup("Vic A - 2",
Translation.translate("Предметы Vic A - 2"), [
  BlockID.marble_sc,
  BlockID.vic_tantros_grass,
  BlockID.vic_tantros_sand,
  BlockID.vic_a2_stone,
  ItemID.vic_a2_coal,
  BlockID.vic_a2_iron,
  BlockID.vic_a2_gold,
  BlockID.vic_a2_emerald,
  BlockID.vic_a2_diamond,
  BlockID.vic_a2_torantiy,
  BlockID.vic_a2_redstone,
  BlockID.vic_a2_lapiz,
  BlockID.vic_a2_turao,
  BlockID.turao_planks,
  BlockID.vic_a2_turao_leaves,
  ItemID.tantros_short_grass_1,
  ItemID.tantros__grass_1,
  ItemID.tantros_cane_1,
  ItemID.blue_sugar_sc,
  BlockID.tantros_berry,
  ItemID.tantros_berry_1,
  BlockID.blue_stones
]);

Item.addCreativeGroup("Machines",
Translation.translate("Приборы"), [
  BlockID.coal_generator,
  BlockID.refinery_sc,
  BlockID.oxygen_storage_module,
  BlockID.oxygen_compressor,
  BlockID.oxygen_decompressor,
  BlockID.compressed_drill
]);




// file: SpaceTools/Core/Rockets.js

var Rocketmesh = new RenderMesh(); 
Rocketmesh.setBlockTexture("rocket_t1",0); 
Rocketmesh.importFromFile(__dir__+"/models/rocket_tier1.obj","obj",null); 
IDRegistry.genBlockID("rocket_1_tier"); 
Block.createBlockWithRotation("rocket_1_tier", [ 
 {name: "Rocket Tier 1", texture: [["rocket_t1", 0],["rocket_t1", 1],["rocket_t1", 2],["rocket_t1", 3],["rocket_t1", 4],["rocket_t1", 5]], inCreative: false} 
]); 
var Rocketrender = new ICRender.Model(); 
Rocketrender.addEntry(new BlockRenderer.Model(Rocketmesh)); 
BlockRenderer.setStaticICRender(BlockID.rocket_1_tier,0,Rocketrender);

Item.registerUseFunction("padding", function(coords, item, block, player){
	if(block.id == BlockID.deco_block){
		var region = BlockSource.getDefaultForActor(player);
        var place = coords.relative;
region.setBlock(place.x, place.y, place.z,BlockID.Pad_Normal); region.setBlock(place.x-1,place.y,place.z, BlockID.Pad_Normal); region.setBlock(place.x-2,place.y,place.z,BlockID.Pad_Normal); region.setBlock(place.x,place.y,place.z-1, BlockID.Pad_Normal); region.setBlock(place.x-1,place.y,place.z-1, BlockID.Padding1lvl); region.setBlock(place.x-2,place.y,place.z-1, BlockID.Pad_Normal); region.setBlock(place.x,place.y,place.z-2, BlockID.Pad_Normal); region.setBlock(place.x-1,place.y,place.z-2, BlockID.Pad_Normal); region.setBlock(place.x-2,place.y,place.z-2, BlockID.Pad_Normal); region.setBlock(place.x-2,place.y,place.z-1, BlockID.Pad_Normal);
Entity.setCarriedItem(player, item.id, item.count - 1, item.data);
 }});

Callback.addCallback('DestroyBlock', function (coords, block, player) {
if(block.id == BlockID.rocket_1_tier){World.setBlock(coords.x, coords.y, coords.z, VanillaBlockID.air); World.setBlock(coords.x, coords.y, coords.z, BlockID.Padding1lvl);
					SPC_b1.close();
					SPC_b2.close();
					SPC_b3.close();
		    	Entity.clearEffects(Player.get());
		    let gamemode = new PlayerActor(player).getGameMode();
        if (gamemode !== Native.GameMode.CREATIVE) {Player.setFlyingEnabled(false);
		Player.setFlying(false);
     }
}
});

Block.registerDropFunction("Padding1lvl", function(coords, blockID){
    return [[BlockID.Pad_Normal, 1, 0]] 
});

IDRegistry.genItemID("rocket_1"); 
Item.createItem("rocket_1", "Rocket Tier 1", {name: "rocket_tierik1", meta: 0}, {stack: 1, inCreative:true});
Translation.addTranslation("Rocket Tier 1", {
ru: "Ракета 1-го уровня"
});

Block.registerDropFunction("rocket_1_tier", function(coords, blockID){
    return [[ItemID.rocket_1, 1, 0]] 
});

Item.registerUseFunction("rocket_1", function(coords, item, block, player){
var region = BlockSource.getDefaultForActor(player);
    var place = coords.relative;
   if(region.getBlockId(place.x,place.y-1,place.z)==BlockID.Padding1lvl){ 
        region.setBlock(place.x, place.y-1, place.z, BlockID.rocket_1_tier);  
         Entity.setCarriedItem(player, item.id, item.count - 1, item.data);
         Game.message("§7Ракета первого уровня успешно состыкована с посадочной площадкой")
    } 
});
var SPC_b1 = new UI.Container();
var SPC_b2 = new UI.Container();
var SPC_b3 = new UI.Container();
var InterFace = new UI.Container();
var Roket = new UI.Container();
Callback.addCallback("ItemUse", function (coords, item, block) { 
	if(block.id === BlockID.rocket_1_tier){
		Player.setPosition(coords.x, coords.y + 2, coords.z);
	SPC_b1.openAs(wrum);
		SPC_b2.openAs(exit);
	SPC_b3.openAs(rocketgui);
		Entity.addEffect(Player.get(), Native.PotionEffect.movementSlowdown, 100000, 100000000);
		Player.setFlyingEnabled(true);
		Player.setFlying(true);
		Game.message("§c§lВы находитесь в ракете,убедитесь что вы надели скафандр,загрузили и заправили ракету.")
	}
 });
 
 

var wrum = new UI.Window({
	location: {
    	x: 1000 / 2 - 80,
        y: 350,
        width: 48,
        height: 24
    },
    drawing: [],
    elements: {
        "btn": {
        	type: "button",
			x: 0, 
			y: 0,
			bitmap: "SPC.SPC_button",
			bitmap2:"SPC.SPC_button2",
			text: "полёт",
			scale: 250, 
			clicker: {
            	onClick: function () {
					//закрываем чтобы игрок не смог выйти
					SPC_b2.close();
					//полёт
					
					for(var i = 0; i < 256 - Player.getPosition().y; i++){
						Game.tipMessage("§l§cРакета запущена! ")
						if(World.getBlock(Player.getPosition().x, Player.getPosition().y - 2, Player.getPosition().z, false).id == BlockID.rocket_1_tier){
							World.destroyBlock(Player.getPosition().x, Player.getPosition().y - 2, Player.getPosition().z, false);
						}
						if(World.getBlock(Player.getPosition().x, Player.getPosition().y - 1, Player.getPosition().z, false).id == BlockID.rocket_1_tier){
							World.destroyBlock(Player.getPosition().x, Player.getPosition().y - 1, Player.getPosition().z, false);
						}
						if(World.getBlock(Player.getPosition().x, Player.getPosition().y - 3, Player.getPosition().z, false).id == BlockID.rocket_1_tier){
							World.destroyBlock(Player.getPosition().x, Player.getPosition().y - 3, Player.getPosition().z, false);
						}
						if(World.getBlock(Player.getPosition().x, Player.getPosition().y - 4, Player.getPosition().z, false).id == BlockID.rocket_1_tier){
							World.destroyBlock(Player.getPosition().x, Player.getPosition().y - 4, Player.getPosition().z, false);
						}
						Player.setPosition(Player.getPosition().x, Player.getPosition().y + 1, Player.getPosition().z);
						World.setBlock(Player.getPosition().x, Player.getPosition().y - 2, Player.getPosition().z, BlockID.rocket_1_tier, 0);
						java.lang.Thread.sleep(95);
					}
					if(World.getBlock(Player.getPosition().x, Player.getPosition().y - 2, Player.getPosition().z, false).id == BlockID.rocket_1_tier){
						World.destroyBlock(Player.getPosition().x, Player.getPosition().y - 2, Player.getPosition().z, false);
					}
					if(World.getBlock(Player.getPosition().x, Player.getPosition().y - 1, Player.getPosition().z, false).id == BlockID.rocket_1_tier){
						World.destroyBlock(Player.getPosition().x, Player.getPosition().y - 1, Player.getPosition().z, false);
					}
					if(World.getBlock(Player.getPosition().x, Player.getPosition().y - 3, Player.getPosition().z, false).id == BlockID.rocket_1_tier){
						World.destroyBlock(Player.getPosition().x, Player.getPosition().y - 3, Player.getPosition().z, false);
					}
					if(World.getBlock(Player.getPosition().x, Player.getPosition().y - 4, Player.getPosition().z, false).id == BlockID.rocket_1_tier){
						World.destroyBlock(Player.getPosition().x, Player.getPosition().y - 4, Player.getPosition().z, false);
					}
					SPC_b1.close();
					SPC_b2.close();
					SPC_b3.close();
		    	InterFace.openAs(SpacesMap);
		    	Entity.clearEffects(Player.get());
                }
            }
		},
	}
});

var exit = new UI.Window({
	location: {
    	x: 1000 / 2 - 80,
        y: 313,
        width: 48,
        height: 24
    },
    drawing: [],
    elements: {
        "exit": {
        	type: "button", 
			text: "Выйти",
			x: 0, 
			y: 0, 
			bitmap: "SPC.SPC_button", 
			bitmap2: "SPC.SPC_button2",
			scale: 250, 
			clicker: {
            	onClick: function () {
					SPC_b1.close();
					SPC_b2.close();
					SPC_b3.close();
					Player.setFlying(false);
					Player.setPosition(Player.getPosition().x + 2, Player.getPosition().y, Player.getPosition().z);
					Entity.clearEffects(Player.get());
					Player.setFlyingEnabled(false);
                }
            }
		},
	}
});


let Rocketry = new UI.StandartWindow({standart:{header:{text:{text:Translation.translate("Хранилище топлива")
}},inventory:{standart:true},background:{standart:true}},drawing:[
    {type: "bitmap", x: 500, y:130, bitmap: "RocketStorage1",scale:5.4
    }],elements:{fuelScale:{type:"scale",x:500,y:130,bitmap: "RocketStorage2",scale:5.4}}});
		
		var rocketgui = new UI.Window({
	location: {
    	x: 1000 / 2 - 80,
        y: 273,
        width: 48,
        height: 24
    },
    drawing: [],
    elements: {
        "exit": {
        	type: "button", 
			text: "Спешиться",
			x: 0, 
			y: 0, 
			bitmap: "SPC.SPC_button", 
			bitmap2: "SPC.SPC_button2",
			scale: 250, 
			clicker: {
            	onClick: function () {
					SPC_b1.close();
					SPC_b2.close();
					SPC_b3.close();
					let window = getWindow(BlockID.Pad_Normal, Rocketry);
					Roket.openAs(window);
                }
            }
		},
	}
});
	
/*var nextvariant = new UI.Window({
	location: {
    	x: 1000 / 2 - 80,
        y: 313,
        width: 660,
        height: 24
    },
    drawing: [],
    elements: {
        "next": {
        	type: "button", 
			text: "варианты",
			x: 0, 
			y: 0, 
			bitmap: "SPC.SPC_nextleft", 
			bitmap2: "SPC.SPC_nextleftPRESSED",
			scale: 2.1, 
			clicker: {
            	onClick: function () {
					SPC_b1.close();
					SPC_b2.close();
					SPC_b3.close();
					Player.setFlying(false);
					Player.setPosition(Player.getPosition().x + 2, Player.getPosition().y, Player.getPosition().z);
					Entity.clearEffects(Player.get());
                }
            }
		},
	}
});
*/





var Rockemesh = new RenderMesh(); 
Rockemesh.setBlockTexture("rocket_t2",0); 
Rockemesh.importFromFile(__dir__+"/models/rocket_tier2.obj","obj",null); 
IDRegistry.genBlockID("rocket_2_tier"); 
Block.createBlockWithRotation("rocket_2_tier", [ 
 {name: "Rocket Tier 2", texture: [["rocket_t2", 0],["rocket_t2", 1],["rocket_t2", 2],["rocket_t2", 3],["rocket_t2", 4],["rocket_t2", 5]], inCreative: false} 
]); 
var Rockerender = new ICRender.Model(); 
Rockerender.addEntry(new BlockRenderer.Model(Rockemesh)); 
BlockRenderer.setStaticICRender(BlockID.rocket_2_tier,0,Rockerender);

IDRegistry.genItemID("rocket_2"); 
Item.createItem("rocket_2", "Rocket Tier 2", {name: "rocket_tierik2", meta: 0}, {stack: 1, inCreative:true});
Translation.addTranslation("Rocket Tier 2", {
ru: "Ракета 2-го уровня"
});

Block.registerDropFunction("rocket_2_tier", function(coords, blockID){
    return [[ItemID.rocket_2, 1, 0]] 
});

Item.registerUseFunction("rocket_2", function(coords, item, block, player){
var region = BlockSource.getDefaultForActor(player);
    var place = coords.relative;
   if(region.getBlockId(place.x,place.y-1,place.z)==BlockID.Padding1lvl){ 
        region.setBlock(place.x, place.y-1, place.z, BlockID.rocket_2_tier);  
         Entity.setCarriedItem(player, item.id, item.count - 1, item.data);
         Game.message("§7Ракета второго уровня успешно состыкована с посадочной площадкой")
    } 
});

var SPC_c1 = new UI.Container();
var InterFacce = new UI.Container();
Callback.addCallback("ItemUse", function (coords, item, block) { 
	if(block.id === BlockID.rocket_2_tier){
		Player.setPosition(coords.x, coords.y + 2, coords.z);
	SPC_c1.openAs(vrum);
		SPC_b2.openAs(exit);
	SPC_b3.openAs(rocketgui);
		Entity.addEffect(Player.get(), Native.PotionEffect.movementSlowdown, 100000, 100000000);
		Player.setFlyingEnabled(true);
		Player.setFlying(true);
		Game.message("§c§lВы находитесь в ракете,убедитесь что вы надели скафандр,загрузили и заправили ракету.")
	}
 });
 
 

var vrum = new UI.Window({
	location: {
    	x: 1000 / 2 - 80,
        y: 350,
        width: 48,
        height: 24
    },
    drawing: [],
    elements: {
        "btn": {
        	type: "button",
			x: 0, 
			y: 0,
			bitmap: "SPC.SPC_button",
			bitmap2:"SPC.SPC_button2",
			text: "полёт",
			scale: 250, 
			clicker: {
            	onClick: function () {
					//закрываем чтобы игрок не смог выйти
					SPC_b2.close();
					//полёт
					
					for(var i = 0; i < 256 - Player.getPosition().y; i++){
						Game.tipMessage("§l§cРакета запущена! ")
						if(World.getBlock(Player.getPosition().x, Player.getPosition().y - 2, Player.getPosition().z, false).id == BlockID.rocket_2_tier){
							World.destroyBlock(Player.getPosition().x, Player.getPosition().y - 2, Player.getPosition().z, false);
						}
						if(World.getBlock(Player.getPosition().x, Player.getPosition().y - 1, Player.getPosition().z, false).id == BlockID.rocket_2_tier){
							World.destroyBlock(Player.getPosition().x, Player.getPosition().y - 1, Player.getPosition().z, false);
						}
						if(World.getBlock(Player.getPosition().x, Player.getPosition().y - 3, Player.getPosition().z, false).id == BlockID.rocket_2_tier){
							World.destroyBlock(Player.getPosition().x, Player.getPosition().y - 3, Player.getPosition().z, false);
						}
						if(World.getBlock(Player.getPosition().x, Player.getPosition().y - 4, Player.getPosition().z, false).id == BlockID.rocket_2_tier){
							World.destroyBlock(Player.getPosition().x, Player.getPosition().y - 4, Player.getPosition().z, false);
						}
						Player.setPosition(Player.getPosition().x, Player.getPosition().y + 1, Player.getPosition().z);
						World.setBlock(Player.getPosition().x, Player.getPosition().y - 2, Player.getPosition().z, BlockID.rocket_2_tier, 0);
						java.lang.Thread.sleep(95);
					}
					if(World.getBlock(Player.getPosition().x, Player.getPosition().y - 2, Player.getPosition().z, false).id == BlockID.rocket_2_tier){
						World.destroyBlock(Player.getPosition().x, Player.getPosition().y - 2, Player.getPosition().z, false);
					}
					if(World.getBlock(Player.getPosition().x, Player.getPosition().y - 1, Player.getPosition().z, false).id == BlockID.rocket_2_tier){
						World.destroyBlock(Player.getPosition().x, Player.getPosition().y - 1, Player.getPosition().z, false);
					}
					if(World.getBlock(Player.getPosition().x, Player.getPosition().y - 3, Player.getPosition().z, false).id == BlockID.rocket_2_tier){
						World.destroyBlock(Player.getPosition().x, Player.getPosition().y - 3, Player.getPosition().z, false);
					}
					if(World.getBlock(Player.getPosition().x, Player.getPosition().y - 4, Player.getPosition().z, false).id == BlockID.rocket_2_tier){
						World.destroyBlock(Player.getPosition().x, Player.getPosition().y - 4, Player.getPosition().z, false);
					}
					SPC_c1.close();
					SPC_b2.close();
					SPC_b3.close();
		    	InterFacce.openAs(SpacesMap);
		    	Entity.clearEffects(Player.get());
                }
            }
		},
	}
});




var Rocktmesh = new RenderMesh(); 
Rocktmesh.setBlockTexture("rocket_t3",0); 
Rocktmesh.importFromFile(__dir__+"/models/rocket_tier3.obj","obj",null); 
IDRegistry.genBlockID("rocket_3_tier"); 
Block.createBlockWithRotation("rocket_3_tier", [ 
 {name: "Rocket Tier 3", texture: [["rocket_t3", 0],["rocket_t3", 1],["rocket_t3", 2],["rocket_t3", 3],["rocket_t3", 4],["rocket_t3", 5]], inCreative: false} 
]); 
var Rocktrender = new ICRender.Model(); 
Rocktrender.addEntry(new BlockRenderer.Model(Rocktmesh)); 
BlockRenderer.setStaticICRender(BlockID.rocket_3_tier,0,Rocktrender);

IDRegistry.genItemID("rocket_3"); 
Item.createItem("rocket_3", "Rocket Tier 3", {name: "rocket_tierik3", meta: 0}, {stack: 1, inCreative:true});
Translation.addTranslation("Rocket Tier 3", {
ru: "Ракета 3-го уровня"
});

Block.registerDropFunction("rocket_3_tier", function(coords, blockID){
    return [[ItemID.rocket_3, 1, 0]] 
});

Item.registerUseFunction("rocket_3", function(coords, item, block, player){
var region = BlockSource.getDefaultForActor(player);
    var place = coords.relative;
   if(region.getBlockId(place.x,place.y-1,place.z)==BlockID.Padding1lvl){ 
        region.setBlock(place.x, place.y-1, place.z, BlockID.rocket_3_tier);  
         Entity.setCarriedItem(player, item.id, item.count - 1, item.data);
         Game.message("§7Ракета третьего уровня успешно состыкована с посадочной площадкой")
    } 
});

var SPC_d1 = new UI.Container();
var InterFaccce = new UI.Container();
Callback.addCallback("ItemUse", function (coords, item, block) { 
	if(block.id === BlockID.rocket_3_tier){
		Player.setPosition(coords.x, coords.y + 2, coords.z);
	SPC_d1.openAs(wvrum);
		SPC_b2.openAs(exit);
	SPC_b3.openAs(rocketgui);
		Entity.addEffect(Player.get(), Native.PotionEffect.movementSlowdown, 100000, 100000000);
		Player.setFlyingEnabled(true);
		Player.setFlying(true);
		Game.message("§c§lВы находитесь в ракете,убедитесь что вы надели скафандр,загрузили и заправили ракету.")
	}
 });
 
 

var wvrum = new UI.Window({
	location: {
    	x: 1000 / 2 - 80,
        y: 350,
        width: 48,
        height: 24
    },
    drawing: [],
    elements: {
        "btn": {
        	type: "button",
			x: 0, 
			y: 0,
			bitmap: "SPC.SPC_button",
			bitmap2:"SPC.SPC_button2",
			text: "полёт",
			scale: 250, 
			clicker: {
            	onClick: function () {
					//закрываем чтобы игрок не смог выйти
					SPC_b2.close();
					//полёт
					
					for(var i = 0; i < 256 - Player.getPosition().y; i++){
						Game.tipMessage("§l§cРакета запущена! ")
						if(World.getBlock(Player.getPosition().x, Player.getPosition().y - 2, Player.getPosition().z, false).id == BlockID.rocket_3_tier){
							World.destroyBlock(Player.getPosition().x, Player.getPosition().y - 2, Player.getPosition().z, false);
						}
						if(World.getBlock(Player.getPosition().x, Player.getPosition().y - 1, Player.getPosition().z, false).id == BlockID.rocket_3_tier){
							World.destroyBlock(Player.getPosition().x, Player.getPosition().y - 1, Player.getPosition().z, false);
						}
						if(World.getBlock(Player.getPosition().x, Player.getPosition().y - 3, Player.getPosition().z, false).id == BlockID.rocket_3_tier){
							World.destroyBlock(Player.getPosition().x, Player.getPosition().y - 3, Player.getPosition().z, false);
						}
						if(World.getBlock(Player.getPosition().x, Player.getPosition().y - 4, Player.getPosition().z, false).id == BlockID.rocket_3_tier){
							World.destroyBlock(Player.getPosition().x, Player.getPosition().y - 4, Player.getPosition().z, false);
						}
						Player.setPosition(Player.getPosition().x, Player.getPosition().y + 1, Player.getPosition().z);
						World.setBlock(Player.getPosition().x, Player.getPosition().y - 2, Player.getPosition().z, BlockID.rocket_3_tier, 0);
						java.lang.Thread.sleep(95);
					}
					if(World.getBlock(Player.getPosition().x, Player.getPosition().y - 2, Player.getPosition().z, false).id == BlockID.rocket_3_tier){
						World.destroyBlock(Player.getPosition().x, Player.getPosition().y - 2, Player.getPosition().z, false);
					}
					if(World.getBlock(Player.getPosition().x, Player.getPosition().y - 1, Player.getPosition().z, false).id == BlockID.rocket_3_tier){
						World.destroyBlock(Player.getPosition().x, Player.getPosition().y - 1, Player.getPosition().z, false);
					}
					if(World.getBlock(Player.getPosition().x, Player.getPosition().y - 3, Player.getPosition().z, false).id == BlockID.rocket_3_tier){
						World.destroyBlock(Player.getPosition().x, Player.getPosition().y - 3, Player.getPosition().z, false);
					}
					if(World.getBlock(Player.getPosition().x, Player.getPosition().y - 4, Player.getPosition().z, false).id == BlockID.rocket_3_tier){
						World.destroyBlock(Player.getPosition().x, Player.getPosition().y - 4, Player.getPosition().z, false);
					}
					SPC_d1.close();
					SPC_b2.close();
					SPC_b3.close();
		    	InterFaccce.openAs(SpacesMap);
		    	Entity.clearEffects(Player.get());
                }
            }
		},
	}
});




// file: API/DungeonCore.js

var DungeonCore = {
    path: "assets/structure/",
    getId: function(id){
        let blocks = BlockID;
        let d;
        if(id >= 8000){
           key = Object.keys(blocks);
           for(let i in key){
               let k = key[i];
               if(blocks[k]==id){
                   d = k;
                   break;
               }
           }
        }else{
            d = id
        }
        return d;
    },
    setStructure: function(name, x, y, z, rotation, region){
        let structure = FileTools.ReadText(this.path+name+".dc");
        structure = structure.split(":");
        for(let i in structure){
            let data = structure[i].split(".");
            region.setBlock(x + parseInt(data[2]), y + parseInt(data[3]), z + parseInt(data[4]), this.getId(data[0]), parseInt(data[1]));
        }
    },
    importDungeonAPI: function(name){
        let structure = FileTools.ReadJSON(this.path+name+".json");
        for(let i in structure){
            FileTools.WriteText(this.path+name+".dc", i == structure.length - 1 ? structure[i] : structure[i] + ":", true);
        }
    }
};
/*
Callback.addCallback("GenerateChunk", function(chunkX, chunkZ){
    var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 5, 100);
    coords = GenerationUtils.findSurface(coords.x, coords.y, coords.z);
    if(Math.random()<=0.1) DungeonCore.setStructure("test2", coords.x, coords.y, coords.z, 0, BlockSource.getCurrentWorldGenRegion());
});*/




// file: API/MachineAPI.js

let MachineAPI = {
	all: {},
	register(id, obj){
		obj = obj || {};
		obj.connectEnergy = obj.connectEnergy || [];
		this.all[id] = obj;
	},
	getMeta: function(metaConnect, meta){
		let metas = [
			[0, 0, 0, 0, 0, 0],
			[1, 1, 1, 1, 1, 1],
			[0, 1, 3, 2, 5, 4],
			[0, 1, 2, 3, 4, 5],
			[0, 1, 4, 5, 3, 2],
			[0, 1, 5, 4, 2, 3]
		];
    return metas[meta][metaConnect];
  },
	getPosByMeta(meta){
		let pos = [
			{x: 0, y: -1, z: 0},
			{x: 0, y: 1, z: 0},
    	{x: 0, y: 0, z: -1},
      {x: 0, y: 0, z: 1},
      {x: -1, y: 0, z: 0},
      {x: 1, y: 0, z: 0}
    ];
  	return pos[meta] || {x: 0, y: 0, z: 0};
	},
	getCoords(x, y, z, meta){
		let pos = this.getPosByMeta(meta);
		pos.x+=x;
		pos.y+=y;
		pos.z+=z;
		return pos;
	},
	getSideByPos(x, y, z, xc, yc, zc, data){
		let block = World.getBlock(x, y, z);
		if(block.id == 0)
			return;
		let sides = this.all[block.id].connectEnergy;
		for(let i in sides){
			let tile = World.getTileEntity(x,y,z);
			if(!tile)
				return
			let pos = this.getPosByMeta(this.getMeta(tile.data.meta+data, sides[i]));
			if(x+pos.x==xc&&y+pos.y==yc&&z+pos.z==zc)
				return sides[i];
		}
		return -1;
	},
	updateWireRender(x, y, z, id, rot){
		let sides = this.all[id].connectEnergy;
		for(let side in sides){
			let pos = this.getCoords(x, y, z, this.getMeta(rot,sides[side]));
			let block = World.getBlock(pos.x, pos.y, pos.z);
			let wire = RenderAPI.wire[block.id];
			if(wire){
				let model = RenderAPI.getModel(block.id);
				let p = [
					{x: 0, y: -1, z: 0},
					{x: 0, y: 1, z: 0},
    			{x: 0, y: 0, z: -1},
      		{x: 0, y: 0, z: 1},
    		  {x: -1, y: 0, z: 0},
      		{x: 1, y: 0, z: 0}
   		 ];
				for(let i in p){
					let blockMachine = World.getBlock(pos.x+p[i].x,pos.y+p[i].y,pos.z+p[i].z);
					if(this.all[blockMachine.id]){
						let meta = this.getSideByPos(pos.x+p[i].x,pos.y+p[i].y,pos.z+p[i].z, pos.x, pos.y, pos.z, 2)
						if(meta != -1){
							let tile = World.getTileEntity(pos.x+p[i].x,pos.y+p[i].y,pos.z+p[i].z);
							if(!tile)
								return
							let box = wire.boxes[this.getMeta(tile.data.meta+2, meta)].box; 
							model.addEntry(new BlockRenderer.Model(box[0], box[1], box[2], box[3], box[4], box[5], block.id, 0)); 
						}
					}
				}
				BlockRenderer.mapAtCoords(pos.x, pos.y, pos.z, model);
			}
		}
	},
	destroyModel(x, y, z, id, rot){
		let sides = this.all[id].connectEnergy;
		for(let i in sides){
			let pos = MachineAPI.getCoords(x, y, z, MachineAPI.getMeta(rot, sides[i]))
			BlockRenderer.unmapAtCoords(pos.x, pos.y, pos.z, true);
		}
	},
	registerRotation: function(id, meta, arr){
		TileRenderer.setStandartModel(id, arr);
		TileRenderer.registerRotationModel(id, meta, arr);
	},
	registerChangeSkin: function(id, meta, arr){
		TileRenderer.registerRotationModel(id, meta, arr);
		TileRenderer.setRotationPlaceFunction(id, false)
	},
	setSkin: function(x, y, z, id, meta){
		TileRenderer.mapAtCoords(x, y, z, id, meta);
	},
};
/*var MachineAPI = {
    all: {},
    register: function(id, data){
        this.all[id] = {};
        if(data.energyConnect || data.energyConnect == 0) this.all[id].energyConnect = data.energyConnect;
        if(data.energyOutput || data.energyOutput == 0) this.all[id].energyOutput = data.energyOutput;
    },
    getConnectMeta: function(id, meta){
        let metas = [
            [1, 0, 3, 2],
            [0, 1, 2, 3],
            [3, 2, 0, 1],
            [2, 3, 1, 0]
        ];
        return metas[meta][this.all[id].energyConnect];
    },
    getConnectCoords: function(id, meta){
        return this.getCoordsForMeta(this.getConnectMeta(id, meta));
    },
    getConnectMetaOutput: function(id, meta){
        let metas = [
            [1, 0, 3, 2],
            [0, 1, 2, 3],
            [3, 2, 0, 1],
            [2, 3, 1, 0]
        ];
        return metas[meta][this.all[id].energyOutput || this.all[id].energyConnect];
    },
    getConnectCoordsOutput: function(id, meta){
        return this.getCoordsForMeta(this.getConnectMetaOutput(id, meta));
    },
    registerRotation: function(id, meta, arr){
        TileRenderer.setStandartModel(id, arr);
        TileRenderer.registerRotationModel(id, meta, arr);
    },
    registerChangeSkin: function(id, meta, arr){
        TileRenderer.registerRotationModel(id, meta, arr);
        TileRenderer.setRotationPlaceFunction(id, false)
    },
    setSkin: function(x, y, z, id, meta){
        TileRenderer.mapAtCoords(x, y, z, id, meta);
    },
    getCoordsForMeta: function(meta){
        let pos = [
            {x: 0, y: 0, z: -1},
            {x: 0, y: 0, z: 1},
            {x: -1, y: 0, z: 0},
            {x: 1, y: 0, z: 0}
        ]
        return pos[meta] || {x: 0, y: 0, z: 0};
    },
    metaForSide: function(meta){
        let arr = [2, 3, 4, 5];
        return arr[meta];
    },
    updateWireRender: function(region, x, y, z, id, meta){
        let arr = [
            4, 
            5,
            0,
            1
        ];
        let pos = MachineAPI.getConnectCoords(id, meta);
        let block = region.getBlock(x+pos.x, y+pos.y, z+pos.z);
        if(RenderAPI.wire[block.id]){
            var model = new ICRender.Model();
            let boxes = RenderAPI.wire[block.id].boxes;
            for(let i in arr){
                let coord = this.getCoordsForMeta(i);
                let bl = region.getBlock(x+pos.x+coord.x, y+pos.y+coord.y, z+pos.z+coord.z);
                if(this.all[bl.id]){
                    if(this.all[bl.id].energyConnect){
                        let te = TileEntity.getTileEntity(x+pos.x+coord.x, y+pos.y+coord.y, z+pos.z+coord.z, region);
                        if(te){
                        let posTe = this.getConnectCoords(bl.id, te.data.meta);
                        if((te.x+posTe.x) == (x+pos.x) && (te.y+posTe.y) == (y+pos.y) && (te.z+posTe.z) == (z+pos.z) && te.data.connect){
                            let box = RenderAPI.wire[block.id].boxes[arr[this.getConnectMeta(bl.id, te.data.meta)]].box;
                            model.addEntry(new BlockRenderer.Model(box[0], box[1], box[2], box[3], box[4], box[5], block.id, 0));
                        }
                        }
                    }
                     if(this.all[bl.id].energyOutput){
                        let te = TileEntity.getTileEntity(x+pos.x+coord.x, y+pos.y+coord.y, z+pos.z+coord.z, region);
                        if(te){
                        let posTe = this.getConnectCoordsOutput(bl.id, te.data.meta);
                        if((te.x+posTe.x) == (x+pos.x) && (te.y+posTe.y) == (y+pos.y) && (te.z+posTe.z) == (z+pos.z) && te.data.connect){
                            let box = RenderAPI.wire[block.id].boxes[arr[this.getConnectMetaOutput(bl.id, te.data.meta)]].box;
                            model.addEntry(new BlockRenderer.Model(box[0], box[1], box[2], box[3], box[4], box[5], block.id, 0));
                        }
                        }
                    }
                }
            }
            let width = RenderAPI.wire[block.id].width;
            model.addEntry(new BlockRenderer.Model(0.5 - width / 2, 0.5 - width / 2, 0.5 - width / 2, 0.5 + width / 2, 0.5 + width / 2, 0.5 + width / 2, block.id, 0)); 
            for(var i in boxes){ 
                var box = boxes[i].box; 
                var side = boxes[i].side; 
                model.addEntry(new BlockRenderer.Model(box[0], box[1], box[2], box[3], box[4], box[5], block.id, 0)).setCondition(new ICRender.BLOCK(side[0], side[1], side[2], ICRender.getGroup("gc-wire"), false)); 
            }
            BlockRenderer.mapAtCoords(x+pos.x, y+pos.y, z+pos.z, model);
        }
        if(this.all[id]){
            if(this.all[id].energyOutput) this.updateWireRender2(region, x, y, z, id, meta)
        }
    },
    updateWireRender2: function(region, x, y, z, id, meta){
        let arr = [
            4, 
            5,
            0,
            1
        ];
        let pos = MachineAPI.getConnectCoordsOutput(id, meta);
        let block = region.getBlock(x+pos.x, y+pos.y, z+pos.z);
        if(RenderAPI.wire[block.id]){
            var model = new ICRender.Model();
            let boxes = RenderAPI.wire[block.id].boxes;
            for(let i in arr){
                let coord = this.getCoordsForMeta(i);
                let bl = region.getBlock(x+pos.x+coord.x, y+pos.y+coord.y, z+pos.z+coord.z);
                if(this.all[bl.id]){
                    if(this.all[bl.id].energyConnect){
                        let te = TileEntity.getTileEntity(x+pos.x+coord.x, y+pos.y+coord.y, z+pos.z+coord.z, region);
                        if(te){
                        let posTe = this.getConnectCoords(bl.id, te.data.meta);
                        if((te.x+posTe.x) == (x+pos.x) && (te.y+posTe.y) == (y+pos.y) && (te.z+posTe.z) == (z+pos.z) && te.data.connect){
                            let box = RenderAPI.wire[block.id].boxes[arr[this.getConnectMeta(bl.id, te.data.meta)]].box;
                            model.addEntry(new BlockRenderer.Model(box[0], box[1], box[2], box[3], box[4], box[5], block.id, 0));
                        }
                        }
                    }
                     if(this.all[bl.id].energyOutput){
                        let te = TileEntity.getTileEntity(x+pos.x+coord.x, y+pos.y+coord.y, z+pos.z+coord.z, region);
                        if(te){
                        let posTe = this.getConnectCoordsOutput(bl.id, te.data.meta);
                        if((te.x+posTe.x) == (x+pos.x) && (te.y+posTe.y) == (y+pos.y) && (te.z+posTe.z) == (z+pos.z) && te.data.connect){
                            let box = RenderAPI.wire[block.id].boxes[arr[this.getConnectMetaOutput(bl.id, te.data.meta)]].box;
                            model.addEntry(new BlockRenderer.Model(box[0], box[1], box[2], box[3], box[4], box[5], block.id, 0));
                        }
                        }
                    }
                }
            }
            let width = RenderAPI.wire[block.id].width;
            model.addEntry(new BlockRenderer.Model(0.5 - width / 2, 0.5 - width / 2, 0.5 - width / 2, 0.5 + width / 2, 0.5 + width / 2, 0.5 + width / 2, block.id, 0)); 
            for(var i in boxes){ 
                var box = boxes[i].box; 
                var side = boxes[i].side; 
                model.addEntry(new BlockRenderer.Model(box[0], box[1], box[2], box[3], box[4], box[5], block.id, 0)).setCondition(new ICRender.BLOCK(side[0], side[1], side[2], ICRender.getGroup("gc-wire"), false)); 
            }
            BlockRenderer.mapAtCoords(x+pos.x, y+pos.y, z+pos.z, model);
        }
        
    }
};*/




// file: API/SpacesAPI.js

  
/*var Spaces = {
	cableAPI : cableAPI;
	AirCable : AirCable;
	battery : battery;
	oxygenStorage : oxygenStorage;
}*/




var group = ICRender.getGroup("sj-wire"); 
let cableAPI = {
    renderSet: function (idblock, siz){
var id = idblock;
var width = siz; 
group.add(id, -1); 

var boxes = [
    {side: [1, 0, 0], box: [0.5 + width / 2, 0.5 - width / 2, 0.5 - width / 2, 1, 0.5 + width / 2, 0.5 + width / 2]},
    {side: [-1, 0, 0], box: [0, 0.5 - width / 2, 0.5 - width / 2, 0.5 - width / 2, 0.5 + width / 2, 0.5 + width / 2]},
    {side: [0, 1, 0], box: [0.5 - width / 2, 0.5 + width / 2, 0.5 - width / 2, 0.5 + width / 2, 1, 0.5 + width / 2]},
    {side: [0, -1, 0], box: [0.5 - width / 2, 0, 0.5 - width / 2, 0.5 + width / 2, 0.5 - width / 2, 0.5 + width / 2]},
    {side: [0, 0, 1], box: [0.5 - width / 2, 0.5 - width / 2, 0.5 + width / 2, 0.5 + width / 2, 0.5 + width / 2, 1]},
    {side: [0, 0, -1], box: [0.5 - width / 2, 0.5 - width / 2, 0, 0.5 + width / 2, 0.5 + width / 2, 0.5 - width / 2]}
];

var model = new ICRender.Model(); 

model.addEntry(new BlockRenderer.Model(0.5 - width / 2, 0.5 - width / 2, 0.5 - width / 2, 0.5 + width / 2, 0.5 + width / 2, 0.5 + width / 2, id, 0)); 

for(var i in boxes){
   
    var box = boxes[i].box; 
    var side = boxes[i].side;

    model.addEntry(new BlockRenderer.Model(box[0], box[1], box[2], box[3], box[4], box[5], id, 0))
        .setCondition(new ICRender.BLOCK(side[0], side[1], side[2], group, false));
}

BlockRenderer.setStaticICRender(id, -1, model);
    }, 
    addGroup: function (id) {
         group.add(id, -1); 
    }
};

var group2 = ICRender.getGroup("sc-wire");
var AirCable = {
    set: function (idblock, siz){
        var id = idblock;
var width = siz; 
group2.add(id, -1); 

var boxes = [
    {side: [1, 0, 0], box: [0.5 + width / 2, 0.5 - width / 2, 0.5 - width / 2, 1, 0.5 + width / 2, 0.5 + width / 2]},
    {side: [-1, 0, 0], box: [0, 0.5 - width / 2, 0.5 - width / 2, 0.5 - width / 2, 0.5 + width / 2, 0.5 + width / 2]},
    {side: [0, 1, 0], box: [0.5 - width / 2, 0.5 + width / 2, 0.5 - width / 2, 0.5 + width / 2, 1, 0.5 + width / 2]},
    {side: [0, -1, 0], box: [0.5 - width / 2, 0, 0.5 - width / 2, 0.5 + width / 2, 0.5 - width / 2, 0.5 + width / 2]},
    {side: [0, 0, 1], box: [0.5 - width / 2, 0.5 - width / 2, 0.5 + width / 2, 0.5 + width / 2, 0.5 + width / 2, 1]},
    {side: [0, 0, -1], box: [0.5 - width / 2, 0.5 - width / 2, 0, 0.5 + width / 2, 0.5 + width / 2, 0.5 - width / 2]}
];

var model = new ICRender.Model(); 

model.addEntry(new BlockRenderer.Model(0.5 - width / 2, 0.5 - width / 2, 0.5 - width / 2, 0.5 + width / 2, 0.5 + width / 2, 0.5 + width / 2, id, 0)); 

for(var i in boxes){
   
    var box = boxes[i].box; 
    var side = boxes[i].side;

    model.addEntry(new BlockRenderer.Model(box[0], box[1], box[2], box[3], box[4], box[5], id, 0))
        .setCondition(new ICRender.BLOCK(side[0], side[1], side[2], group2, false));
}

BlockRenderer.setStaticICRender(id, -1, model);
    }, 
    addGroup: function (id){
        group2.add(id, -1); 
    }
};








let batt = [];
let battery = {
    set: function (id, description){ 
        description = description || {};
        description.storage = description.storage || 1000;
        description.addMax = description.addMax || 32;
        Item.setMaxDamage(id, description.storage);
        Callback.addCallback("PreLoaded", function() {
            //Item.addToCreative(id, 1, description.storage);
        });
Item.registerNameOverrideFunction(id, function(item, name) {
              return name  + "\n§6⚡ : " + (Item.getMaxDamage(item.id) - item.data) + "§6/" + Item.getMaxDamage(item.id);
        });
        batt.push({id: id, storage: description.storage, addMax: description.addMax});
    }, 
    add: function (block, data, slot){
        let en = block.getSlot(slot);
        for(i in batt){
            if(en.id == batt[i].id){
                if(data.energy + batt[i].addMax <= data.energyMax){
                    if(en.data + 16 - batt[i].addMax <= batt[i].storage - batt[i].addMax + 16){
                        data.energy += batt[i].addMax;
                        en.data += batt[i].addMax
                    }
                }
            }
        }
    },
    setVoid: function (id, description){ 
        description = description || {};
        description.storage = description.storage || 1000;
        description.addMax = description.addMax || 32;
        Item.setMaxDamage(id, description.storage);
    	batt.push({id: id, storage: description.storage, addMax: description.addMax});
    },
    Minus: function (block, data, slot){
        let en = block.getSlot(slot);
        for(i in batt){
            if(en.id == batt[i].id){
                if(data.energy - batt[i].addMax >= 0){
                   if(en.data - batt[i].addMax >= 0){
                        data.energy -= batt[i].addMax;
                        en.data -= batt[i].addMax
                   } 
                    
                }
            }
        }
},
    getBattery: function () {
        return batt;
    }
};

     
let oxygenStorage = {
    set: function (id, description){ 
        description = description || {};
        description.storage = description.storage || 1000;
        description.addMax = description.addMax || 32;
        Item.setMaxDamage(id, description.storage);
        Callback.addCallback("PreLoaded", function() {
            //Item.addToCreative(id, 1, description.storage);
        });
Item.registerNameOverrideFunction(id, function(item, name) {
              return name  + "\n§6«» : " + (Item.getMaxDamage(item.id) - item.data) + "§6/" + Item.getMaxDamage(item.id);
        });
        batt.push({id: id, storage: description.storage, addMax: description.addMax});
    }, 
    add: function (block, data, slot){
        let en = block.getSlot(slot);
        for(i in batt){
            if(en.id == batt[i].id){
                if(data.energy + batt[i].addMax <= data.energyMax){
                    if(en.data + 16 - batt[i].addMax <= batt[i].storage - batt[i].addMax + 16){
                        data.energy += batt[i].addMax;
                        en.data += batt[i].addMax
                    }
                }
            }
        }
    },
    Minus: function (block, data, slot){
        let en = block.getSlot(slot);
        for(i in batt){
            if(en.id == batt[i].id){
                if(data.energy - batt[i].addMax >= 0){
                   if(en.data - batt[i].addMax >= 0){
                        data.energy -= batt[i].addMax;
                        en.data -= batt[i].addMax
                   } 
                    
                }
            }
        }
    }, 
    getBattery: function () {
        return batt;
    }
};


cableAPI.addGroup(BlockID.enclosed_aluminum_wire);
cableAPI.addGroup(BlockID.coal_generator);
cableAPI.addGroup(BlockID.oxygen_compressor);
cableAPI.addGroup(BlockID.oxygen_decompressor);


AirCable.addGroup(BlockID.oxygen_compressor);
AirCable.addGroup(BlockID.oxygen_decompressor);

cableAPI.addGroup(BlockID.compressor_sj);
cableAPI.addGroup(BlockID.enclosed_heavy_aluminum_wire);

cableAPI.addGroup(BlockID.collector_sc);
AirCable.addGroup(BlockID.collector_sc);


AirCable.addGroup(BlockID.oxygen_storage_module);
cableAPI.addGroup(BlockID.oxygen_storage_module);
AirCable.addGroup(BlockID.enclosed_fluid_pipe);
cableAPI.addGroup(BlockID.refinery_sc);
cableAPI.addGroup(BlockID.fuel_loader);

ModAPI.registerAPI("SpacesAPI", {
  	  cableAPI: cableAPI, 
  	  AirCable: AirCable, 
  	  battery: battery,
  	  oxygenStorage: oxygenStorage,
  	  RenderAPI: RenderAPI,
	requireGlobal: function(command){
		return eval(command);
	}
});




// file: integrations.js

ModAPI.addAPICallback("ICore", function(api){
//Тут собраны соединения проводов,совместимость энергий и рецепты с блоками для интеграции
IDRegistry.genBlockID("enclosed_copper_cable");
Block.createBlockWithRotation("enclosed_copper_cable",[{name: "Enclosed Copper Cable", texture: [["Oxygentile 3", 0],["Oxygentile 3", 0],["Enclosed Copper Cable", 0],["Enclosed Copper Cable", 0],["Enclosed Copper Cable", 0],["Enclosed Copper Cable", 0]], inCreative: true} ]);
Translation.addTranslation("Enclosed Copper Cable",{
ru: "Герметичный медный кабель §6(IC2)"
});
EU.registerWire(BlockID.enclosed_copper_cable, 128);

IDRegistry.genBlockID("enclosed_gold_cable");
Block.createBlockWithRotation("enclosed_gold_cable",[{name: "Enclosed Gold Cable", texture: [["Oxygentile 3", 0],["Oxygentile 3", 0],["Enclosed Gold Cable", 0],["Enclosed Gold Cable", 0],["Enclosed Gold Cable", 0],["Enclosed Gold Cable", 0]], inCreative: true} ]);
Translation.addTranslation("Enclosed Gold Cable",{
ru: "Герметичный золотой кабель §6(IC2)"
});
EU.registerWire(BlockID.enclosed_gold_cable, 512);

IDRegistry.genBlockID("enclosed_lv_cable");
Block.createBlockWithRotation("enclosed_lv_cable",[{name: "Enclosed LV Cable", texture: [["Oxygentile 3", 0],["Oxygentile 3", 0],["Enclosed LV Cable", 0],["Enclosed LV Cable", 0],["Enclosed LV Cable", 0],["Enclosed LV Cable", 0]], inCreative: true} ]);
Translation.addTranslation("Enclosed LV Cable",{
ru: "Герметичный lv кабель §6(IC2)"
});

EU.registerWire(BlockID.enclosed_lv_cable, 2048);
var group = ICRender.getGroup("ic-wire");
group.add(BlockID.oxygen_storage_module, -1);
group.add(BlockID.collector_sc, -1);
group.add(BlockID.enclosed_copper_cable, -1);
group.add(BlockID.enclosed_gold_cable, -1);
group.add(BlockID.coal_generator, -1);
group.add(BlockID.oxygen_compressor, -1);
group.add(BlockID.oxygen_decompressor, -1);
group.add(BlockID.compressor_sj, -1);
group.add(BlockID.enclosed_lv_cable, -1);
group.add(BlockID.refinery_sc, -1);
cableAPI.addGroup(BlockID.semifluidGenerator);
cableAPI.addGroup(BlockID.solarPanel);
cableAPI.addGroup(BlockID.primalGenerator);
cableAPI.addGroup(BlockID.electricHeatGenerator);

cableAPI.addGroup(BlockID.fluidHeatGenerator);
cableAPI.addGroup(BlockID.enclosed_aluminum_wire);
cableAPI.addGroup(BlockID.rtHeatGenerator);
cableAPI.addGroup(BlockID.solidHeatGenerator -1);

cableAPI.addGroup(BlockID.recycler);
cableAPI.addGroup(BlockID.metalFormer);
cableAPI.addGroup(BlockID.oreWasher);
cableAPI.addGroup(BlockID.thermalCentrifuge);
cableAPI.addGroup(BlockID.blastFurnace);
cableAPI.addGroup(BlockID.icFermenter);
cableAPI.addGroup(BlockID.massFabricator);
cableAPI.addGroup(BlockID.stirlingGenerator);

cableAPI.addGroup(BlockID.ironFurnace);
cableAPI.addGroup(BlockID.nuclearReactor);
cableAPI.addGroup(BlockID.reactorChamber);
cableAPI.addGroup(BlockID.storageBatBox);

cableAPI.addGroup(BlockID.storageCESU);
cableAPI.addGroup(BlockID.storageMFE);
cableAPI.addGroup(BlockID.storageMFSU);
cableAPI.addGroup(BlockID.transformerLV);
cableAPI.addGroup(BlockID.transformerHV);
cableAPI.addGroup(BlockID.transformerEV);

cableAPI.addGroup(BlockID.electricFurnace);
cableAPI.addGroup(BlockID.inductionFurnace);
cableAPI.addGroup(BlockID.macerator);
cableAPI.addGroup(BlockID.compressor);
cableAPI.addGroup(BlockID.extractor);
cableAPI.addGroup(BlockID.solidCanner);
cableAPI.addGroup(BlockID.canner);

    EnergyTileRegistry.addEnergyTypeForId(BlockID.semifluidGenerator, sj);
        EnergyTileRegistry.addEnergyTypeForId(BlockID.solarPanel, sj);
            EnergyTileRegistry.addEnergyTypeForId(BlockID.primalGenerator, sj);
                EnergyTileRegistry.addEnergyTypeForId(BlockID.electricHeatGenerator, sj);
    EnergyTileRegistry.addEnergyTypeForId(BlockID.rtGenerator, sj);
    EnergyTileRegistry.addEnergyTypeForId(BlockID.solidHeatGenerator, sj);
        EnergyTileRegistry.addEnergyTypeForId(BlockID.recycler, sj);
            EnergyTileRegistry.addEnergyTypeForId(BlockID.metalFormer, sj);
                EnergyTileRegistry.addEnergyTypeForId(BlockID.oreWasher, sj);
                    EnergyTileRegistry.addEnergyTypeForId(BlockID.thermalCentrifuge, sj);
    EnergyTileRegistry.addEnergyTypeForId(BlockID.blastFurnace, sj);
    EnergyTileRegistry.addEnergyTypeForId(BlockID.icFermenter, sj);
    EnergyTileRegistry.addEnergyTypeForId(BlockID.massFabricator, sj);
    EnergyTileRegistry.addEnergyTypeForId(BlockID.stirlingGenerator, sj);
        EnergyTileRegistry.addEnergyTypeForId(BlockID.ironFurnace, sj);
        EnergyTileRegistry.addEnergyTypeForId(BlockID.nuclearReactor, sj);
        EnergyTileRegistry.addEnergyTypeForId(BlockID.storageBatBox, sj);
        EnergyTileRegistry.addEnergyTypeForId(BlockID.storageCESU, sj);
        EnergyTileRegistry.addEnergyTypeForId(BlockID.storageMFE, sj);
        EnergyTileRegistry.addEnergyTypeForId(BlockID.storageMFSU, sj);
    EnergyTileRegistry.addEnergyTypeForId(BlockID.transformerHV, sj);
            EnergyTileRegistry.addEnergyTypeForId(BlockID.transformerLV, sj);
            EnergyTileRegistry.addEnergyTypeForId(BlockID.transformerEV, sj);
            EnergyTileRegistry.addEnergyTypeForId(BlockID.electricFurnace, sj);
            EnergyTileRegistry.addEnergyTypeForId(BlockID.inductionFurnace, sj);
            EnergyTileRegistry.addEnergyTypeForId(BlockID.macerator, sj);
            EnergyTileRegistry.addEnergyTypeForId(BlockID.compressor, sj);
            EnergyTileRegistry.addEnergyTypeForId(BlockID.extractor, sj);
            EnergyTileRegistry.addEnergyTypeForId(BlockID.canner, sj);
            EnergyTileRegistry.addEnergyTypeForId(BlockID.solidCanner, sj);
        
   cableAPI.addGroup(BlockID.pump);
    group.add(BlockID.fuel_loader, -1);
        
Callback.addCallback("LevelCreated", function() {

Recipes.addShaped({id: ItemID.ingotCopper, count: 1, data: 0}, [
    "",
    " a ",
    ""
], ['a', ItemID.copper_ingot_sc, 0]);

Recipes.addShaped({id: ItemID.ingotCopper, count: 1, data: 0}, [
    "",
    " a ",
    ""
], ['a', ItemID.ingot_copper_sc, 0]);

Recipes.addShaped({id: ItemID.canister_copper, count: 1, data: 0}, [
    "a a",
    "a a",
    "aaa"
], ['a', ItemID.ingotCopper, 0]);
//канистра из меди
Recipes.addShaped({id: ItemID.canister_tin, count: 1, data: 0}, [
    "a a",
    "a a",
    "aaa"
], ['a', ItemID.ingotTin, 0]);

Recipes.addShaped({id: ItemID.canister_tin, count: 1, data: 0}, [
    "a a",
    "a a",
    "aaa"
], ['a', ItemID.plateTin, 0]);

Recipes.addShaped({id: ItemID.canister_copper, count: 1, data: 0}, [
    "a a",
    "a a",
    "aaa"
], ['a', ItemID.plateCopper, 0]);

Recipes.addShaped({id: BlockID.block_tin_sc, count: 1, data: 0}, [
    "aaa",
    "aaa",
    "aaa"
], ['a', ItemID.plateTin, 0]);
Recipes.addShaped({id: BlockID.block_copper_sc, count: 1, data: 0}, [
    "aaa",
    "aaa",
    "aaa"
], ['a', ItemID.plateCopper]);

Recipes.addShaped({id: ItemID.ingotTin, count: 1, data: 0}, [
    "",
    " a ",
    ""
], ['a', ItemID.ingot_tin_sc, 0]);

Recipes.addShaped({id: ItemID.ingot_tin_sc, count: 1, data: 0}, [
    "",
    " a ",
    ""
], ['a', ItemID.ingotTin, 0]);

Recipes.addShaped({id: ItemID.compressed_iron, count: 1, data: 0}, [
    "",
    " a ",
    ""
], ['a', ItemID.plateIron, 0]);

Recipes.addShaped({id: ItemID.plateIron, count: 1, data: 0}, [
    "",
    " a ",
    ""
], ['a', ItemID.compressed_iron, 0]);

Recipes.addShaped({id: ItemID.plateTin, count: 1, data: 0}, [
    "",
    " a ",
    ""
], ['a', ItemID.compressed_tin, 0]);

Recipes.addShaped({id: ItemID.compressed_tin, count: 1, data: 0}, [
    "",
    " a ",
    ""
], ['a', ItemID.plateTin, 0]);

Recipes.addShaped({id: ItemID.compressed_copper, count: 1, data: 0}, [
    "",
    " a ",
    ""
], ['a', ItemID.plateCopper, 0]);

Recipes.addShaped({id: ItemID.plateCopper, count: 1, data: 0}, [
    "",
    " a ",
    ""
], ['a', ItemID.compressed_copper, 0]);

Recipes.addShaped({id: ItemID.compressed_bronze, count: 1, data: 0}, [
    "",
    " a ",
    ""
], ['a', ItemID.plateBronze, 0]);

Recipes.addShaped({id: ItemID.plateBronze, count: 1, data: 0}, [
    "",
    " a ",
    ""
], ['a', ItemID.compressed_bronze, 0]);

Recipes.addShaped({id: ItemID.iron_steel_ingot, count: 1, data: 0}, [
    "",
    "ab",
    ""
], ['a', ItemID.ingotSteel, 0, 'b', VanillaItemID.iron_ingot, 0]);

Recipes.addShaped({ id: BlockID.primalGenerator, count: 1, data: 0 }, [
        " x ",
        "###",
        " a "
    ], ['#', ItemID.compressed_iron, 0, 'a', BlockID.ironFurnace, -1, 'x', ItemID.storageBattery, -1]);
    
    Recipes.addShaped({ id: BlockID.geothermalGenerator, count: 1, data: 0 }, [

        "xax",

        "xax",

        "b#b"

    ], ['#', BlockID.coal_generator, -1, 'a', ItemID.cellEmpty, 0, 'b', ItemID.casingIron, 0, 'x', 20, -1]);
    
    Recipes.addShaped({ id: BlockID.genWindmill, count: 1, data: 0 }, [

        "x x",

        " # ",

        "xcx"

    ], ['#', BlockID.coal_generator, -1, 'x', ItemID.compressed_steel, 0, 'c', ItemID.coil, 0]);
    
    Recipes.addShaped({ id: BlockID.genWindmill, count: 1, data: 0 }, [

        "x x",

        " # ",

        "xcx"

    ], ['#', BlockID.coal_generator, -1, 'x', ItemID.plateSteel, 0, 'c', ItemID.coil, 0]);
    
    Recipes.addShaped({ id: BlockID.genWindmill, count: 1, data: 0 }, [

        "x x",

        " # ",

        "xcx"

    ], ['#', BlockID.primalGenerator, -1, 'x', ItemID.compressed_steel, 0, 'c', ItemID.coil, 0]);
    
    Recipes.addShaped({ id: BlockID.genWatermill, count: 1, data: 0 }, [

        "x x",

        "a#a",

        "xcx"

    ], ['#', BlockID.coal_generator, -1, 'x', ItemID.compressed_steel, 0, 'a', ItemID.casingSteel, 0, 'c', ItemID.coil, 0]);
    
    Recipes.addShaped({ id: BlockID.genWatermill, count: 1, data: 0 }, [

        "x x",

        "a#a",

        "xcx"

    ], ['#', BlockID.coal_generator, -1, 'x', ItemID.plateSteel, 0, 'a', ItemID.casingSteel, 0, 'c', ItemID.coil, 0]);
    
    Recipes.addShaped({ id: BlockID.genWatermill, count: 1, data: 0 }, [

        "x x",

        "a#a",

        "xcx"

    ], ['#', BlockID.primalGenerator, -1, 'x', ItemID.plateSteel, 0, 'a', ItemID.compressed_steel, 0, 'c', ItemID.coil, 0]);
    
    Recipes.addShaped({ id: BlockID.rtGenerator, count: 1, data: 0 }, [

        "ccc",

        "c#c",

        "cxc"

    ], ['#', BlockID.reactorChamber, 0, 'x', BlockID.coal_generator, 0, 'c', ItemID.casingIron, 0]);
    
    Recipes.addShaped({ id: BlockID.stirlingGenerator, count: 1, data: 0 }, [

        "cxc",

        "c#c",

        "ccc"

    ], ['#', BlockID.coal_generator, 0, 'c', ItemID.casingIron, 0, 'x', ItemID.heatConductor, 0]);

Recipes.addShaped({ id: BlockID.electricHeatGenerator, count: 1, data: 0 }, [

        "xbx",

        "x#x",

        "xax"

    ], ['#', ItemID.circuitBasic, 0, 'x', ItemID.casingIron, 0, 'a', ItemID.heatConductor, 0, 'b', ItemID.battery, -1]);
    
    Recipes.addShaped({ id: BlockID.nuclearReactor, count: 1, data: 0 }, [

        "xcx",

        "aaa",

        "x#x"

    ], ['#', BlockID.coal_generator, 0, 'a', BlockID.reactorChamber, 0, 'x', ItemID.densePlateLead, 0, 'c', ItemID.circuitAdvanced, 0]);
    
    Recipes.addShaped({ id: BlockID.storageBatBox, count: 1, data: 0 }, [

        "xax",

        "bbb",

        "xxx"

    ], ['a', ItemID.cableTin1, 0, 'x', 5, -1, 'b', ItemID.battery, -1]);
    
    Recipes.addShaped({ id: BlockID.storageCESU, count: 1, data: 0 }, [

        "bxb",

        "aaa",

        "bbb"

    ], ['x', ItemID.cableCopper1, 0, 'a', ItemID.storageAdvBattery, -1, 'b', ItemID.compressed_bronze, 0]);
    
    Recipes.addShaped({ id: BlockID.storageCESU, count: 1, data: 0 }, [

        "bxb",

        "aaa",

        "bbb"

    ], ['x', BlockID.CopperWire, 0, 'a', ItemID.storageAdvBattery, -1, 'b', ItemID.plateBronze, 0]);
    
    Recipes.addShaped({ id: BlockID.storageCESU, count: 1, data: 0 }, [

        "bxb",

        "aaa",

        "bbb"

    ], ['x', BlockID.CopperWire, 0, 'a', ItemID.storageAdvBattery, -1, 'b', ItemID.compressed_bronze, 0]);
    
    Recipes.addShaped({ id: BlockID.transformerMV, count: 1, data: 0 }, [

        "b",

        "x",

        "b"

    ], ['x', BlockID.machineBlockBasic, 0, 'b', BlockID.CopperWire, 0]);
    
    Recipes.addShaped({ id: BlockID.ironFurnace, count: 1, data: 0 }, [

        " x ",

        "x x",

        "x#x"

    ], ['#', 61, -1, 'x', ItemID.compressed_iron, 0]);
    
    Recipes.addShaped({ id: BlockID.inductionFurnace, count: 1, data: 0 }, [

        "xxx",

        "x#x",

        "xax"

    ], ['#', BlockID.electricFurnace, -1, 'x', ItemID.copper_ingot_sc, 0, 'a', BlockID.machineBlockAdvanced, 0]);
    
    Recipes.addShaped({ id: BlockID.solidCanner, count: 1, data: 0 }, [

        "c#c",

        "cxc",

        "ccc"

    ], ['#', BlockID.machineBlockBasic, 0, 'x', ItemID.circuitBasic, 0, 'c', ItemID.canister_tin, 0]);
    
    Recipes.addShaped({ id: BlockID.recycler, count: 1, data: 0 }, [

        " a ",

        "x#x",

        "bxb"

    ], ['#', BlockID.compressor, -1, 'x', 3, -1, 'a', 348, 0, 'b', ItemID.compressed_steel, 0]);
    
    Recipes.addShaped({ id: BlockID.oreWasher, count: 1, data: 0 }, [

        "aaa",

        "b#b",

        "xcx"

    ], ['#', BlockID.machineBlockBasic, 0, 'x', ItemID.electricMotor, 0, 'a', ItemID.compressed_iron, 0, 'b', 325, 0, 'c', ItemID.circuitBasic, 0]);
    
    Recipes.addShaped({ id: BlockID.cropHarvester, count: 1, data: 0 }, [

        "zcz",

        "s#s",

        "pap"

    ], ['#', BlockID.machineBlockBasic, 0, 'z', ItemID.circuitBasic, 0, 'c', 54, -1, 'a', ItemID.agriculturalAnalyzer, 0, 'p', ItemID.compressed_iron, 0, 's', 359, 0]);

Recipes.addShaped({ id: ItemID.ingotAlloy, count: 2, data: 0 }, [

        "aaa",

        "bbb",

        "ccc"

    ], ['a', ItemID.compressed_iron, -1, 'b', ItemID.plateBronze, -1, 'c', ItemID.plateTin, -1]);
    
    Recipes.addShaped({ id: ItemID.ingotAlloy, count: 2, data: 0 }, [

        "aaa",

        "bbb",

        "ccc"

    ], ['a', ItemID.ironPlate, -1, 'b', ItemID.compressed_bronze, -1, 'c', ItemID.plateTin, -1]);
    
    Recipes.addShaped({ id: ItemID.ingotAlloy, count: 2, data: 0 }, [

        "aaa",

        "bbb",

        "ccc"

    ], ['a', ironPlate, -1, 'b', ItemID.plateBronze, -1, 'c', ItemID.compressed_tin, -1]);
    
    Recipes.addShaped({ id: ItemID.ingotAlloy, count: 2, data: 0 }, [

        "aaa",

        "bbb",

        "ccc"

    ], ['a', compressed_iron, -1, 'b', ItemID.compressed_bronze, -1, 'c', ItemID.compressed_tin, -1]);
    
    Recipes.addShaped({ id: ItemID.ingotAlloy, count: 2, data: 0 }, [

        "aaa",

        "bbb",

        "ccc"

    ], ['a', compressed_iron, -1, 'b', ItemID.compressed_bronze, -1, 'c', ItemID.plateTin, -1]);
    
    Recipes.addShaped({ id: ItemID.ingotAlloy, count: 2, data: 0 }, [

        "aaa",

        "bbb",

        "ccc"

    ], ['a', ironPlate, -1, 'b', ItemID.compressed_bronze, -1, 'c', ItemID.compressed_tin, -1]);
    
    Recipes.addShaped({ id: 66, count: 12, data: 0 }, [

        "a a",

        "axa",

        "a a"

    ], ['x', 280, -1, 'a', ItemID.compressed_bronze, -1]);
    
    Recipes.addShaped({ id: 33, count: 1, data: 0 }, [

        "ppp",

        "cbc",

        "cxc"

    ], ['x', 331, -1, 'b', ItemID.compressed_bronze, -1, 'c', 4, -1, 'p', 5, -1]);
    
    Recipes.addShaped({ id: ItemID.cellEmpty, count: 1, data: 0 }, [

    " x ",

    "xgx",

    " x "

], ['x', ItemID.canister_tin, 0, 'g', 102, 0]);

Recipes.addShaped({ id: ItemID.circuitBasic, count: 1, data: 0 }, [

        "xxx",

        "a#a",

        "xxx"

    ], ['x', ItemID.cableCopper1, 0, 'a', 331, 0, '#', ItemID.compressed_iron, 0]);
    
    Recipes.addShaped({ id: ItemID.coil, count: 1, data: 0 }, [

        "aaa",

        "axa",

        "aaa"

    ], ['x', 265, 0, 'a', BlockID.CopperWire, 0]);
    
    Recipes.addShaped({ id: ItemID.electricMotor, count: 1, data: 0 }, [

        " b ",

        "axa",

        " b "

    ], ['x', 265, 0, 'a', ItemID.coil, 0, 'b', ItemID.canister_tin, 0]);
    
    Recipes.addShaped({ id: ItemID.powerUnit, count: 1, data: 0 }, [

        "acs",

        "axe",

        "acs"

    ], ['x', ItemID.circuitBasic, 0, 'e', ItemID.electricMotor, 0, 'a', ItemID.battery, -1, 's', ItemID.casingIron, 0, 'c',BlockID.CopperWire, 0]);
    
    Recipes.addShaped({ id: ItemID.powerUnit, count: 1, data: 0 }, [

        "acs",

        "axe",

        "acs"

    ], ['x', ItemID.circuitBasic, 0, 'e', ItemID.electricMotor, 0, 'a', ItemID.battery, -1, 's', ItemID.casingIron, 0, 'c', ItemID.cableCopper0, 0]);
    
    Recipes.addShaped({ id: ItemID.powerUnit, count: 1, data: 0 }, [

        "acs",

        "axe",

        "acs"

    ], ['x', ItemID.circuitBasic, 0, 'e', ItemID.electricMotor, 0, 'a', ItemID.storageBattery, -1, 's', ItemID.casingIron, 0, 'c', BlockID.CopperWire, 0]);
    
    Recipes.addShaped({ id: ItemID.heatConductor, count: 1, data: 0 }, [

        "aсa",

        "aсa",

        "aсa"

    ], ['с', ItemID.compressed_copper, 0, 'a', ItemID.rubber, 0]);
    
    Recipes.addShaped({ id: ItemID.battery, count: 1, data: Item.getMaxDamage(ItemID.battery) }, [

        " x ",

        "c#c",

        "c#c"

    ], ['x', ItemID.cableTin1, 0, 'c', ItemID.casingTin, 0, '#', 331, 0]);
    
    Recipes.addShaped({ id: ItemID.upgradeEnergyStorage, count: 1, data: 0 }, [

        "aaa",

        "x#x",

        "aca"

    ], ['#', ItemID.battery, -1, 'x', ItemID.cableCopper1, -1, 'a', 5, -1, 'c', ItemID.circuitBasic, -1]);
    
    Recipes.addShaped({ id: ItemID.upgradeRedstone, count: 1, data: 0 }, [

        "x x",

        " # ",

        "x x",

    ], ['x', ItemID.compressed_tin, -1, '#', 69, -1]);
    
    Recipes.addShaped({ id: ItemID.upgradeEjector, count: 1, data: 0 }, [

        "aba",

        "x#x",

    ], ['#', ItemID.circuitBasic, -1, 'x', BlockID.ImprovedCopperWire, -1, 'a', 33, -1, 'b', 410, 0]);
    
    Recipes.addShaped({ id: ItemID.upgradePulling, count: 1, data: 0 }, [

        "aba",

        "x#x",

    ], ['#', ItemID.circuitBasic, -1, 'x', BlockID.ImprovedCopperWire, -1, 'a', 29, -1, 'b', 410, 0]);
    
    Recipes.addShaped({ id: ItemID.upgradeFluidEjector, count: 1, data: 0 }, [

        "x x",

        " # ",

        "x x",

    ], ['x', ItemID.compressed_tin, -1, '#', ItemID.electricMotor, -1]);
    
    Recipes.addShaped({ id: ItemID.upgradeFluidPulling, count: 1, data: 0 }, [

        "xcx",

        " # ",

        "x x",

    ], ['x', ItemID.compressed_tin, -1, '#', ItemID.electricMotor, -1, 'c', ItemID.treetap, 0]);
    
    Recipes.addShaped({ id: ItemID.fuelRodUranium2, count: 1, data: 0 }, [

    "fxf"

], ['x', ItemID.compressed_iron, 0, 'f', ItemID.fuelRodUranium, 0]);

Recipes.addShaped({ id: ItemID.fuelRodUranium4, count: 1, data: 0 }, [

    " f ",

    "bab",

    " f "

], ['a', ItemID.compressed_iron, 0, 'b', ItemID.compressed_copper, 0, 'f', ItemID.fuelRodUranium2, 0]);

Recipes.addShaped({ id: ItemID.fuelRodUranium4, count: 1, data: 0 }, [

    " f ",

    "bab",

    " f "

], ['a', ItemID.compressed_iron, 0, 'b', ItemID.plateCopper, 0, 'f', ItemID.fuelRodUranium2, 0]);

Recipes.addShaped({ id: ItemID.fuelRodUranium4, count: 1, data: 0 }, [

    " f ",

    "bab",

    " f "

], ['a', ItemID.plateIron, 0, 'b', ItemID.compressed_copper, 0, 'f', ItemID.fuelRodUranium2, 0]);

Recipes.addShaped({ id: ItemID.fuelRodUranium4, count: 1, data: 0 }, [

    "faf",

    "bab",

    "faf"

], ['a', ItemID.compressed_iron, 0, 'b', ItemID.compressed_copper, 0, 'f', ItemID.fuelRodUranium, 0]);

Recipes.addShaped({ id: ItemID.fuelRodUranium4, count: 1, data: 0 }, [

    "faf",

    "bab",

    "faf"

], ['a', ItemID.compressed_iron, 0, 'b', ItemID.plateCopper, 0, 'f', ItemID.fuelRodUranium, 0]);

Recipes.addShaped({ id: ItemID.fuelRodUranium4, count: 1, data: 0 }, [

    "faf",

    "bab",

    "faf"

], ['a', ItemID.plateIron, 0, 'b', ItemID.compressed_copper, 0, 'f', ItemID.fuelRodUranium, 0]);

Recipes.addShaped({ id: ItemID.fuelRodMOX2, count: 1, data: 0 }, [

    "fxf"

], ['x', ItemID.compressed_iron, 0, 'f', ItemID.fuelRodMOX, 0]);

Recipes.addShaped({ id: ItemID.fuelRodMOX4, count: 1, data: 0 }, [

    " f ",

    "bab",

    " f "

], ['a', ItemID.compressed_iron, 0, 'b', ItemID.compressed_copper, 0, 'f', ItemID.fuelRodMOX2, 0]);

Recipes.addShaped({ id: ItemID.fuelRodMOX4, count: 1, data: 0 }, [

    " f ",

    "bab",

    " f "

], ['a', ItemID.compressed_iron, 0, 'b', ItemID.plateCopper, 0, 'f', ItemID.fuelRodMOX2, 0]);

Recipes.addShaped({ id: ItemID.fuelRodMOX4, count: 1, data: 0 }, [

    " f ",

    "bab",

    " f "

], ['a', ItemID.plateIron, 0, 'b', ItemID.compressed_copper, 0, 'f', ItemID.fuelRodMOX2, 0]);

Recipes.addShaped({ id: ItemID.reactorPlatingHeat, count: 1, data: 0 }, [

    "aaa",

    "axa",

    "aaa"

], ['x', ItemID.reactorPlating, 0, 'a', ItemID.compressed_copper, 0]);

Recipes.addShaped({ id: ItemID.neutronReflector, count: 1, data: 0 }, [

    "bab",

    "axa",

    "bab"

], ["x", ItemID.compressed_copper, 0, 'a', ItemID.dustCoal, 0, 'b', ItemID.dustTin, 0]);

Recipes.addShaped({ id: ItemID.neutronReflectorThick, count: 1, data: 0 }, [

    "axa",

    "xax",

    "axa"

], ["x", ItemID.neutronReflector, 0, 'a', ItemID.compressed_copper, 0]);

Recipes.addShaped({ id: ItemID.coolantCell, count: 1, data: 1 }, [

    " a ",

    "axa",

    " a ",

], ['x', ItemID.cellCoolant, 0, 'a', ItemID.compressed_tin, 0]);

Recipes.addShaped({ id: ItemID.coolantCell3, count: 1, data: 1 }, [

    "axa",

    "axa",

    "axa",

], ['x', ItemID.coolantCell, 1, 'a', ItemID.compressed_tin, 0]);

Recipes.addShaped({ id: ItemID.coolantCell3, count: 1, data: 1 }, [

    "aaa",

    "xxx",

    "aaa",

], ['x', ItemID.coolantCell, 1, 'a', ItemID.compressed_tin, 0]);

Recipes.addShaped({ id: ItemID.coolantCell6, count: 1, data: 1 }, [

    "aaa",

    "xbx",

    "aaa",

], ['x', ItemID.coolantCell3, 1, 'a', ItemID.compressed_tin, 0, 'b', ItemID.compressed_iron, 0]);

Recipes.addShaped({ id: ItemID.coolantCell6, count: 1, data: 1 }, [

    "aaa",

    "xbx",

    "aaa",

], ['x', ItemID.coolantCell3, 1, 'a', ItemID.plateTin, 0, 'b', ItemID.compressed_iron, 0]);

Recipes.addShaped({ id: ItemID.coolantCell6, count: 1, data: 1 }, [

    "aaa",

    "xbx",

    "aaa",

], ['x', ItemID.coolantCell3, 1, 'a', ItemID.compressed_tin, 0, 'b', ItemID.plateIron, 0]);

Recipes.addShaped({ id: ItemID.coolantCell6, count: 1, data: 1 }, [

    "axa",

    "aba",

    "axa",

], ['x', ItemID.coolantCell3, 1, 'a', ItemID.compressed_tin, 0, 'b', ItemID.compressed_iron, 0]);

Recipes.addShaped({ id: ItemID.coolantCell6, count: 1, data: 1 }, [

    "axa",

    "aba",

    "axa",

], ['x', ItemID.coolantCell3, 1, 'a', ItemID.plateTin, 0, 'b', ItemID.compressed_iron, 0]);

Recipes.addShaped({ id: ItemID.coolantCell6, count: 1, data: 1 }, [

    "axa",

    "aba",

    "axa",

], ['x', ItemID.coolantCell3, 1, 'a', ItemID.compressed_tin, 0, 'b', ItemID.plateIron, 0]);

Recipes.addShaped({ id: ItemID.heatExchangerReactor, count: 1, data: 1 }, [

    "aaa",

    "axa",

    "aaa"

], ['x', ItemID.heatExchanger, 1, 'a', ItemID.compressed_copper, 0]);

Recipes.addShaped({ id: ItemID.heatVent, count: 1, data: 1 }, [

    "bab",

    "axa",

    "bab"

], ['x', ItemID.electricMotor, 0, 'a', ItemID.compressed_iron, 0, 'b', 101, -1]);

Recipes.addShaped({ id: ItemID.heatVentComponent, count: 1, data: 0 }, [

    "bab",

    "axa",

    "bab"

], ['x', ItemID.heatVent, 1, 'a', ItemID.compressed_tin, 0, 'b', 101, -1]);

Recipes.addShaped({ id: ItemID.bronzeHelmet, count: 1, data: 0 }, [

    "xxx",

    "x x"

], ['x', ItemID.compressed_bronze, 0]);

Recipes.addShaped({ id: ItemID.bronzeChestplate, count: 1, data: 0 }, [

    "x x",

    "xxx",

    "xxx"

], ['x', ItemID.compressed_bronze, 0]);

Recipes.addShaped({ id: ItemID.bronzeLeggings, count: 1, data: 0 }, [

    "xxx",

    "x x",

    "x x"

], ['x', ItemID.compressed_bronze, 0]);

Recipes.addShaped({ id: ItemID.bronzeBoots, count: 1, data: 0 }, [

    "x x",

    "x x"

], ['x', ItemID.compressed_bronze, 0]);

Recipes.addShaped({ id: ItemID.jetpack, count: 1, data: ELECTRIC_ITEM_MAX_DAMAGE }, [

    "bcb",

    "bab",

    "d d"

], ['a', BlockID.battery, -1, 'b', ItemID.casingIron, 0, 'c', ItemID.circuitAdvanced, 0, 'd', 348, 0]);

Recipes.addShaped({ id: ItemID.advBatpack, count: 1, data: ELECTRIC_ITEM_MAX_DAMAGE }, [

    "bcb",

    "bab",

    "b b"

], ['a', ItemID.compressed_bronze, 0, 'b', ItemID.storageAdvBattery, -1, 'c', ItemID.circuitBasic, 0], ChargeItemRegistry.transferEnergy);

Recipes.addShaped({ id: ItemID.solarHelmet, count: 1, data: 0 }, [

    "aaa",

    "axa",

    "ccc"

], ['x', BlockID.solarPanel, -1, 'a', VanillaItemID.iron_ingot, 0, 'c', BlockID.ImprovedCopperWire, 0]);

Recipes.addShaped({ id: ItemID.cutter, count: 1, data: 0 }, [

        "x x",

        " x ",

        "a a"

    ], ['a', 265, 0, 'x', ItemID.compressed_iron, 0]);
    
    Recipes.addShaped({ id: ItemID.bronzeSword, count: 1, data: 0 }, [

        "a",

        "a",

        "b"

    ], ['a', ItemID.compressed_bronze, 0, 'b', 280, 0]);
    
    Recipes.addShaped({ id: ItemID.bronzeShovel, count: 1, data: 0 }, [

        "a",

        "b",

        "b"

    ], ['a', ItemID.compressed_bronze, 0, 'b', 280, 0]);
    
    Recipes.addShaped({ id: ItemID.bronzePickaxe, count: 1, data: 0 }, [

        "aaa",

        " b ",

        " b "

    ], ['a', ItemID.compressed_bronze, 0, 'b', 280, 0]);
    
    Recipes.addShaped({ id: ItemID.bronzeAxe, count: 1, data: 0 }, [

        "aa",

        "ab",

        " b"

    ], ['a', ItemID.compressed_bronze, 0, 'b', 280, 0]);
    
    Recipes.addShaped({ id: ItemID.bronzeHoe, count: 1, data: 0 }, [

        "aa",

        " b",

        " b"

    ], ['a', ItemID.compressed_bronze, 0, 'b', 280, 0]);

Recipes.addShaped({ id: ItemID.EUMeter, count: 1, data: 0 }, [

        " g ",

        "xcx",

        "x x"

    ], ['c', ItemID.circuitBasic, 0, 'x', BlockID.ImprovedCopperWire, 0, 'g', 348, -1]);
    
    Recipes.addShaped({ id: ItemID.freqTransmitter, count: 1, data: 0 }, [

        "x",

        "#",

        "b"

    ], ['#', ItemID.circuitBasic, 0, 'x', BlockID.ImprovedCopperWire, 0, 'b', ItemID.casingIron, 0]);
    
    Recipes.addShaped({ id: ItemID.scanner, count: 1, data: 27 }, [

        "gdg",

        "cbc",

        "xxx"

    ], ['x', ItemID.cableCopper1, -1, 'b', ItemID.battery, -1, 'c', ItemID.circuitBasic, -1, 'd', 348, 0, 'g', ItemID.casingGold, -1], ChargeItemRegistry.transferEnergy);
    
    Recipes.addShaped({ id: ItemID.scanner, count: 1, data: 27 }, [

        "gdg",

        "cbc",

        "xxx"

    ], ['x', BlockID.ImprovedCopperWire, -1, 'b', ItemID.storageBattery, -1, 'c', ItemID.circuitBasic, -1, 'd', 348, 0, 'g', ItemID.casingGold, -1], ChargeItemRegistry.transferEnergy);
    
    Recipes.addShaped({ id: ItemID.scanner, count: 1, data: 27 }, [

        "gdg",

        "cbc",

        "xxx"

    ], ['x', BlockID.ImprovedCopperWire, -1, 'b', ItemID.battery, -1, 'c', ItemID.circuitBasic, -1, 'd', 348, 0, 'g', ItemID.casingGold, -1], ChargeItemRegistry.transferEnergy);
    
    Recipes.addShaped({ id: ItemID.bronzeWrench, count: 1, data: 0 }, [

        "a a",

        "aaa",

        " a "

    ], ['a', ItemID.compressed_bronze, 0]);
    
    Recipes.addShaped({ id: ItemID.electricHoe, count: 1, data: 27 }, [

        "pp",

        " p",

        " x"

    ], ['x', ItemID.powerUnitSmall, 0, 'p', compressed_iron, 0]);
    
    Recipes.addShaped({ id: ItemID.chainsaw, count: 1, data: 27 }, [

        " pp",

        "ppp",

        "xp "

    ], ['x', ItemID.powerUnit, 0, 'p', compressed_iron, 0]);
    
    Recipes.addShaped({ id: ItemID.drill, count: 1, data: 27 }, [

        " p ",

        "ppp",

        "pxp"

    ], ['x', ItemID.powerUnit, 0, 'p', compressed_iron, 0]);
    
    Recipes.addShaped({ id: ItemID.agriculturalAnalyzer, count: 1, data: 0 }, [

        "xx ",

        "rgr",

        "rcr"

    ], ['x', BlockID.ImprovedCopperWire, 0, 'r', 331, 0, 'g', 20, 0, "c", ItemID.circuitBasic, 0]);
    
    Recipes.addShaped({ id: BlockID.blockBronze, count: 1, data: 0 }, [

        "xxx",

        "xxx",

        "xxx"

    ], ['x', ItemID.compressed_bronze, 0]);
    
    Recipes.addShaped({ id: BlockID.machineBlockBasic, count: 1, data: 0 }, [

        "xxx",

        "x x",

        "xxx"

    ], ['x', ItemID.compressed_iron, -1]);
    
    Recipes.addShaped({ id: BlockID.machineBlockAdvanced, count: 1, data: 0 }, [

        "scs",

        "a#a",

        "scs"

    ], ['#', BlockID.machineBlockBasic, -1, 'c', ItemID.carbonPlate, -1, 'a', ItemID.plateAlloy, -1, 's', ItemID.compressed_steel, -1]);
    
    Recipes.addShaped({ id: BlockID.miningPipe, count: 8, data: 0 }, [

        "p p",

        "p p",

        "pxp",

    ], ['x', ItemID.treetap, 0, 'p', ItemID.compressed_iron, 0]);
});
/*








*/


ChargeItemRegistry.registerItem(ItemID.storageBattery, " sj", 10000, 20,0, true)
	ChargeItemRegistry.registerItem(ItemID.storageAdvBattery, "sj", 100000, 20, 0, true);
	ChargeItemRegistry.registerItem(ItemID.storageCrystal, "sj", 1000000, 20,0, true);
	ChargeItemRegistry.registerItem(ItemID.storageLapotronCrystal, "sj", 10000000, 20, 0, true);
	battery.setVoid(ItemID.storageBattery, {storage: 10000});
battery.setVoid(ItemID.storageAdvBattery, {storage: 100000});
battery.setVoid(ItemID.storageCrystal, {storage: 1000000});
battery.setVoid(ItemID.storageLapotronCrystal, {storage: 10000000});
});

/*cableAPI.addGroup(BlockID.geothermalGenerator);
cableAPI.addGroup(BlockID.genWindMill);*/
ModAPI.addAPICallback("ClassicUI", function(api){
	api.registerUiConfig("coal_generator",{
       		"x": 0,
			"y": 75,
			"scale": -0.19999999999999996
	});
	api.registerUiConfig("oxygen_storage_module",{
			"x": -25,
			"y": 50,
			"scale": -0.19999999999999996
	});
	
	api.registerUiConfig("workbench_nasa",{
			"x": 0,
			"y": 30,
			"scale": -0.19999999999999996
	});
	
	api.registerUiConfig("refinery_sc",{
			"x": 0,
			"y": -35,
			"scale": 0.20000000000000018
	});
	api.registerUiConfig("workbench_rocket",{
			"x": 0,
			"y": -30,
			"scale": 0.10000000000000009
	});
	api.registerUiConfig("Pad_Normal",{
			"x": 0,
			"y": -10,
			"scale": 0.10000000000000009
		
	});
		api.registerUiConfig("Padding1lvl",{
			"x": 0,
			"y": -10,
			"scale": 0,
	});
     	api.registerUiConfig("fuel_loader",{
			"x": -170,
			"y": -40,
			"scale": 0.20000000000000018
    });
	api.registerTheme("Dark_SpacesCraft", {
				"slot":	"_default_slot",
			"invSlot": "_default_slot",
			"selected_slot": "_selection",
			"selected_invSlot": "_selection",
			"frame": "workbench_frame3",
			"color_inventory": "#ffffff",
			"color_title": "#ffffff",
})
 api.registerAllHandler({
  updateUi(id, window, tile){
   let content = window.getContent();
   
   let config = api.getConfig(id);
   let theme = api.getTheme(id);
   
   if(config.theme == "Dark_SpacesCraft")
    for(let key in content.elements){
     let element = content.elements[key];
     
     if(element.bitmap == "SPC.SPC_Canister"){
        element.bitmap = "SPC_Canister_Dark"};
        
     if(element.bitmap == "Others.en_slot"){
        element.bitmap = "en_slot_dark"};
        
     if(element.bitmap == "RocketSlots"){
        element.bitmap = "RocketSlots_dark"};
        
     if(element.bitmap == "trashslot"){
        element.bitmap = "dark_trashslot"};
        
     if(element.bitmap == "ChestableSlot"){
        element.bitmap = "ChestableSlot_dark"};
        
     if(element.bitmap == "Others.O2Slot"){
        element.bitmap = "O2Slot_dark"};
        if(element.bitmap == "coalslot"){
        element.bitmap = "coalslot_dark"};
        
        if(element.bitmap == "energy_small_background"){
        element.bitmap = "energy_small_dark"};
        if(element.bitmap == "arrow_bar_background"){
        element.bitmap = "arrow_bar_dark"};
    }
  }
 });
	});
	
let ClassicUI;
ModAPI.addAPICallback("ClassicUI", function(api){
ClassicUI = api;
});
function getWindow(id, ui){
if(ClassicUI)
return ClassicUI.getWindow(id, ui, {});
return ui;
}



ModAPI.addAPICallback("RecipeViewer", function(api) {var RV = api.Core;
	RV.registerRecipeType("refinery", {
      title: "Рецепты очистительного завода",
      contents: {
         icon: BlockID.refinery_sc,
         drawing: [
    {type: "bitmap",x: 268,y: 190, bitmap: "Liquid_null",scale: 3.8},
    {type: "bitmap",x: 769,y: 190, bitmap: "Liquid_null",scale: 3.8}, {type: "bitmap", x:667 ,y: 190, bitmap:"Liquid_null",scale : 3.8},{type: "bitmap", x:565 ,y: 190, bitmap:"Liquid_null",scale : 3.8},
     {type: "bitmap", x:500 ,y: 70, bitmap:"slace_en_0",scale : 3}, {type: "bitmap", x:640 ,y: 70, bitmap:"en_noy",scale : 3}, 
			],
         elements: {
      input0:
    	{type:"slot",x:355,y:120,size:70, bitmap:"SPC.SPC_Canister"},input1:
    	{type:"slot",x:445,y:120,size:70, bitmap:"SPC.SPC_Canister"},
    output0:    	{type:"slot",x:455,y:260,size:70,bitmap: "Others.en_slot"}, 
    
    	output1:
    	{type:"slot",x:855,y:120,size:70, bitmap:"SPC.SPC_Canister"},
    	output2: {type:"slot",x:755,y:120,size:70, bitmap:"SPC.SPC_Canister"}, output3: {type:"slot",x:651,y:120,size:70, bitmap:"SPC.SPC_Canister"}
            //slotAxe: { type: "slot", x: 430, y: 140 },
            //slotShears: { type: "slot", x: 490, y: 140 },
         }
         /*
               moveItems: {
                 x: 730,
                 y: 375,
                 slots: ["ingredient"]
               }*/
      },getList: function(id, data, isUsage) {         let list = [];
         if (isUsage) {
            var rec = RecipeRegistry.refinery
            for (let i in rec) {}}}});
});

ModAPI.addAPICallback("FuturepackAPI", function(api){
	ChargeItemRegistry.registerItem(ItemID.battery_I, " sj", 300, 20, 0, true)
	ChargeItemRegistry.registerItem(ItemID.battery_n, "sj", 420, 20, 0, true);
	ChargeItemRegistry.registerItem(ItemID.neon_battery, "sj", 1000, 20, 0, true);
	ChargeItemRegistry.registerItem(ItemID.energie_zelle, "sj", 760, 20, 0, true);
	ChargeItemRegistry.registerItem(ItemID.compact_energie_zelle, "sj", 760, 20, 0, true);
	ChargeItemRegistry.registerItem(ItemID.kristall_energie_zelle, "sj", 860, 20, 0, true);
    battery.setVoid(ItemID.battery_I, {storage: 300});
    battery.setVoid(ItemID.battery_n, {storage: 420});
	battery.setVoid(ItemID.neon_battery, {storage: 1000});
	battery.setVoid(ItemID.energie_zelle, {storage: 760});
	battery.setVoid(ItemID.compact_energie_zelle, {storage: 760});
	battery.setVoid(ItemID.kristall_energie_zelle, {storage: 860});
	var batCryst = ["bioterium_battery","glowtite_batareika","wakurum_battery","neon_battery","quantanium_battery","retium_battery"]
	var batTranslat = ["Bioterium Battery","Glowtite Battery","Wakurum Battery","Neon Battery","Quantanium Battery","Retium Battery"]
	var energa = [550,320,575,800,765,590]
	for(var crystal in batCryst){var bat = batCryst[crystal];
		var bt = batTranslat[crystal];
		var en = energa[crystal];
		IDRegistry.genItemID(bat); 
Item.createItem(bat, bt, {name: bat, meta: 0}, {stack: 1, inCreative:false});
		ChargeItemRegistry.registerItem(ItemID[bat], "sj", en, 20, 0, true);
		ChargeItemRegistry.registerItem(ItemID[bat], "ft", en, 20, 0, true);
	};
		
		battery.setVoid(ItemID.bioterium_battery, {storage: 550});
		battery.setVoid(ItemID.glowtite_batareika, {storage: 320});
		battery.setVoid(ItemID.wakurum_battery, {storage: 575});
		battery.setVoid(ItemID.neon_battery, {storage: 800});
		battery.setVoid(ItemID.quantanium_battery, {storage: 765});
		battery.setVoid(ItemID.retium_battery, {storage: 590});
    Callback.addCallback("PostLoaded", function() {
			var Futurepack = api.Futurepack;
		Futurepack.addFuturetock(ItemID.bioterium_battery, {futock: 550});
		Futurepack.addFuturetock(ItemID.glowtite_batareika, {futock: 320});
		Futurepack.addFuturetock(ItemID.wakurum_battery, {futock: 575});
		Futurepack.addFuturetock(ItemID.neon_battery, {futock: 800});
		Futurepack.addFuturetock(ItemID.quantanium_battery, {futock: 765});
		Futurepack.addFuturetock(ItemID.retium_battery, {futock: 590});});
		Callback.addCallback("LevelCreated", function() {
		Recipes.addShaped({id: ItemID.bioterium_battery, count: 1, data: 0}, [
    " g ",
    "gbg",
    "gag"
], ['a', ItemID.crystal_bioterium_1, 0, 'b', ItemID.dust_bioterium, 0, 'g', ItemID.compressed_tin, 0]);

Recipes.addShaped({id: ItemID.neon_battery, count: 1, data: 0}, [
    " g ",
    "gbg",
    "gag"
], ['a', ItemID.crystal_neon_1, 0, 'b', ItemID.dust_neon, 0, 'g', ItemID.compressed_tin, 0]);

Recipes.addShaped({id: ItemID.glowtite_batareika, count: 1, data: 0}, [
    " g ",
    "gbg",
    "gag"
], ['a', ItemID.crystal_glowtite_1, 0, 'b', ItemID.dust_glowtite, 0, 'g', ItemID.compressed_tin, 0]);

Recipes.addShaped({id: ItemID.retium_battery, count: 1, data: 0}, [
    " g ",
    "gbg",
    "gag"
], ['a', ItemID.crystal_retium_1, 0, 'b', ItemID.dust_retium, 0, 'g', ItemID.compressed_tin, 0]);

Recipes.addShaped({id: ItemID.quantanium_battery, count: 1, data: 0}, [
    " g ",
    "gbg",
    "gag"
], ['a', ItemID.ingot_quantanium, 0, 'b', ItemID.dust_quantanium, 0, 'g', ItemID.compressed_tin, 0]);

Recipes.addShaped({id: ItemID.wakurum_battery, count: 1, data: 0}, [
    " g ",
    "gbg",
    "gag"
], ['a', ItemID.ingot_wakurum, 0, 'b', ItemID.dust_wakurum, 0, 'g', ItemID.compressed_tin, 0]);});

Translation.addTranslation("Bioterium Battery",{
ru: "Биотериумовая батарейка"
})

Translation.addTranslation("Retium Battery",{
ru: "Ретиумовая батарейка"
})

Translation.addTranslation("Wakurum Battery",{
ru: "Вакурумовая батарейка "
})

Translation.addTranslation("Neon Battery",{
ru: "Неоновая батарейка"
})

Translation.addTranslation("Glowtite Battery",{
ru: "Светящаяся батарейка"
})

Translation.addTranslation("Quantanium Battery",{
ru: "Квантаниумовая батарейка"
})


});




// file: Blocks/Mekanisms/rocket_padding.js

var Landingmesh = new RenderMesh(); 
Landingmesh.setBlockTexture("PadNormal",0); 
Landingmesh.importFromFile(__dir__+"/models/1padNormal.obj","obj",null); 
IDRegistry.genBlockID("Pad_Normal"); 
Block.createBlock("Pad_Normal", [ 
 {name: "Padding Rocket", texture: [["PadNormal", 0],["PadNormal", 1],["PadNormal", 2],["PadNormal", 3],["PadNormal", 4],["PadNormal", 5]], inCreative: true} 
]); 
var Landingrender = new ICRender.Model(); 
Landingrender.addEntry(new BlockRenderer.Model(Landingmesh)); 
BlockRenderer.setStaticICRender(BlockID.Pad_Normal,0,Landingrender);
var Padding1lvl = new ICRender.CollisionShape();
var entry = Padding1lvl.addEntry();
entry.addBox( 1, 1, 1, 0.5,0.5, 0.5) 
BlockRenderer.setCustomCollisionShape(BlockID.Pad_Normal, -1,Padding1lvl)


/*var createPaddings = {}
createPaddings.spawn1Pad = function spawnPad(coords, item, block, player){
var region = BlockSource.getDefaultForActor(player);
    var place = coords.relative;
   if(region.getBlockId(place.x,place.y-1,place.z)==BlockID.Pad_Normal && region.getBlockId(place.x-1,place.y-1,place.z)==BlockID.Pad_Normal && region.getBlockId(place.x-2,place.y-1,place.z)==BlockID.Pad_Normal && region.getBlockId(place.x,place.y-1,place.z-1)==BlockID.Pad_Normal && region.getBlockId(place.x-1,place.y-1,place.z-1)==BlockID.Pad_Normal && region.getBlockId(place.x-2,place.y-1,place.z-1)==BlockID.Pad_Normal && region.getBlockId(place.x,place.y-1,place.z-2)==BlockID.Pad_Normal && region.getBlockId(place.x-1,place.y-1,place.z-2)==BlockID.Pad_Normal && region.getBlockId(place.x-2,place.y-1,place.z-2)==BlockID.Pad_Normal && region.getBlockId(place.x-2,place.y-1,place.z-1)==BlockID.Pad_Normal){ 
        region.setBlock(place.x, place.y, place.z, BlockID.Padding1lvl);}}
        
Block.registerPlaceFunction("Pad_Normal", function(coords, item, block, player){
	createPaddings.spawn1Pad()
});*/
	

var Landing1mesh = new RenderMesh(); 
Landing1mesh.setBlockTexture("Padding",0); 
Landing1mesh.importFromFile(__dir__+"/models/1padDing.obj","obj",null); 
IDRegistry.genBlockID("Padding1lvl"); 
Block.createBlock("Padding1lvl", [ 
 {name: "Padding of Rocket", texture: [["Padding", 0],["Padding", 1],["Padding", 2],["Padding", 3],["Padding", 4],["Padding", 5]], inCreative: true} 
]); 
var Landing1render = new ICRender.Model(); 
Landing1render.addEntry(new BlockRenderer.Model(Landing1mesh)); 
BlockRenderer.setStaticICRender(BlockID.Padding1lvl,0,Landing1render);
var Padding1lvll = new ICRender.CollisionShape();
var entry = Padding1lvll.addEntry();
entry.addBox( 1, 1, 1, 0.5,0.5, 0.5) 
BlockRenderer.setCustomCollisionShape(BlockID.Padding1lvl, -1,Padding1lvll)


﻿IDRegistry.genItemID("padding"); 
Item.createItem("padding", "Padding 1 tier", {name: "padding", meta: 0}, {stack: 1, inCreative:false});
IAHelper.makeAdvancedAnim(ItemID.padding, "padding", 1, [1, 1, 1,1 , 1, 2, 2, 2, 2, 2 , 2, 3 ,3 ,3 ,3 ,3 ,3 ,3]);
Translation.addTranslation("Padding 1 tier", {
ru: "Площадка 1го уровня"
});
//{getFor(ItemID.padding, 0): "1padNormal";}




// file: Blocks/Mekanisms/Mekanisms.js

IDRegistry.genBlockID("compressor_sj");
Block.createBlockWithRotation("compressor_sj",[{name: "Compressor", texture: [["Machine", 0],["Machine", 0],["Machine", 0],["Compressor", 0],["Machine Input", 0],["Machine", 0]], inCreative: true} ]);
Translation.addTranslation("Compressor",{
ru: "Компрессор"
});









IDRegistry.genBlockID("fuel_loader"); 
Block.createBlockWithRotation("fuel_loader", [
 {name: "Fuel Loader", texture: [["Machine", 0],["Machine", 0],["refinery_front", 0],["Fuel Loader", 0],["Machine Output", 0],["Machine Output", 0]], inCreative: true} 
]); 
Translation.addTranslation("Fuel Loader",{
ru: "Загрузчик ракетного топлива"
})

let FuelLoader = new UI.StandartWindow({standart:
{header:
{text:{text:
Translation.translate("Загрузчик топлива")
}},
  inventory:
{standart:true},
  background:
{standart:true}}
,drawing:[
    {type: "bitmap",x: 268,y: 190, bitmap: "Liquid_null",scale: 3.8},     {type: "bitmap", x:550 ,y: 70, bitmap:"slace_en_0",scale : 3}, {type: "bitmap", x:690 ,y: 70, bitmap:"en_noy",scale : 3}
    ],
    elements:{
    	canisterFuel:
    	{type:"slot",x:355,y:120,size:70, bitmap:"SPC.SPC_Canister"},
    	FuelScale:
    {type: "scale", x:268,y: 190, bitmap:"Liquid_fuel",scale : 3.8, direction: 1}, 
    	batterySlot:    	{type:"slot",x:455,y:260,size:70,bitmap: "Others.en_slot"},  ENERGYBar : {type: "scale", x:550 ,y: 70, bitmap:"slace_en_1",scale : 3, direction: 0}, Energy : {type: "scale", x:690,y: 70, bitmap:"en_yes",scale : 3, direction: 1}, 
    	ELECTRIC: {type: "text", x: 565, y: 113, width: 100, height: 30, text: "Space Joule" },
    }
  }
);

TileEntity.registerPrototype(BlockID.fuel_loader,{defaultValues: {
		progress: 0, 
   progressMax: 0,
   active: false,  
   energy: 0,
   energyMax: 1000,
   liquid: 0,
	},energyReceive: function(type, amount, voltage) { 
		amount = Math.min(amount, 950)
		var add = Math.min(amount, this.getCapacity() - this.data.energy);
		this.data.energy += add  
		return add
	},
    canReceiveEnergy: function(type, side){
        return true;
    }, 
    getCapacity: function(){
   return 1000
    },
    tick: function(){
    	battery.add(this.container, this.data, "batterySlot");

let canisterFuel = this.container.getSlot("canisterFuel");
this.container.setScale("Energy", this.data.energy / 1000);
this.container.setScale("ENERGYBar", this.data.energy / 1000);
this.container.setScale("FuelScale", this.data.liquid / 40);
this.container.setText("ELECTRIC", "Sj :" + this.data.energy + " / " + this.data.energyMax);
if(this.container.getSlot("canisterFuel").id == ItemID.bucket_of_fuel && this.data.liquid <= 40) {
     this.container.setSlot("canisterFuel", 325, 1, 0);
     this.data.liquid += 5;
    }
	},
	energyTick: function(type, src) {

           		let output = Math.min(950, this.data.energy)
	this.data.energy += src.add(output) - output;
	
}, 
	getGuiScreen: function(){
		return FuelLoader; 
	},
});
	
    EnergyTileRegistry.addEnergyTypeForId(BlockID.fuel_loader, sj);
    EnergyTileRegistry.addEnergyTypeForId(BlockID.fuel_loader, EU);
    EnergyTileRegistry.addEnergyTypeForId(BlockID.fuel_loader, RF);









IDRegistry.genBlockID("enclosed_aluminum_wire");
Block.createBlockWithRotation("enclosed_aluminum_wire",[{name: "Enclosed Aluminum Wire", texture: [["Deco Block", 0],["Deco Block", 0],["Enclosed Aluminum Wire", 0],["Enclosed Aluminum Wire", 0],["Enclosed Aluminum Wire", 0],["Enclosed Aluminum Wire", 0]], inCreative: true} ]);
Translation.addTranslation("Enclosed Aluminum Wire",{
ru: "Герметичная алюминиевая труба"
});
sj.registerWire(BlockID.enclosed_aluminum_wire, 200);

IDRegistry.genBlockID("enclosed_fluid_pipe");
Block.createBlockWithRotation("enclosed_fluid_pipe",[{name: "Enclosed Oxygen Pipe", texture: [["Deco Block", 0],["Deco Block", 0],["Enclosed Fluid Pipe", 0],["Enclosed Fluid Pipe", 0],["Enclosed Fluid Pipe", 0],["Enclosed Fluid Pipe", 0]], inCreative: true} ]);
Translation.addTranslation("Enclosed Oxygen Pipe",{
ru: "Герметичная кислородная труба"
});
sj.registerWire(BlockID.enclosed_fluid_pipe, 400);

IDRegistry.genBlockID("enclosed_heavy_aluminum_wire");
Block.createBlockWithRotation("enclosed_heavy_aluminum_wire",[{name: "Enclosed Heavy Aluminum Wire", texture: [["Deco Block", 0],["Deco Block", 0],["Enclosed Heavy Aluminum Wire", 0],["Enclosed Heavy Aluminum Wire", 0],["Enclosed Heavy Aluminum Wire", 0],["Enclosed Heavy Aluminum Wire", 0]], inCreative: true} ]);
Translation.addTranslation("Enclosed Heavy Aluminum Wire",{
ru: "Герметичная улучшенная алюминиевая труба"
});
sj.registerWire(BlockID.enclosed_heavy_aluminum_wire, 400);

IDRegistry.genBlockID("collector_sc");
Block.createBlockWithRotation("collector_sc",[{name: "Oxygen Collector", texture: [["collector", 0],["collector", 0],["collector", 0],["collector", 0],["Machine Input", 0],["Machine Oxygen Output", 0]], inCreative: true} ]);
Translation.addTranslation("Oxygen Collector",{
ru: "Кислородный коллектор"
});

IDRegistry.genBlockID("oxygen_storage_module");
Block.createBlockWithRotation("oxygen_storage_module",[{name: "Oxygen Storage Module", texture: [["Machine", 0],["Machine", 0],["Machine", 0],["Oxygen Storage Module", 0],["Machine Input", 0],["Machine Oxygen Input", 0]], inCreative: true}, {name: "Oxygen Storage Module", texture: [["Machine", 0],["Machine", 0],["Machine", 0],["Oxygen Storage Module One", 0],["Machine Input", 0],["Machine Oxygen Input", 0]], inCreative: false},{name: "Oxygen Storage Module", texture: [["Machine", 0],["Machine", 0],["Machine", 0],["Oxygen Storage Module 1", 0],["Machine Input", 0],["Machine Oxygen Input", 0]], inCreative: false}, {name: "Oxygen Storage Module", texture: [["Machine", 0],["Machine", 0],["Machine", 0],["Oxygen Storage Module 2", 0],["Machine Input", 0],["Machine Oxygen Input", 0]], inCreative: false},{name: "Oxygen Storage Module", texture: [["Machine", 0],["Machine", 0],["Machine", 0],["Oxygen Storage Module 3", 0],["Machine Input", 0],["Machine Oxygen Input", 0]], inCreative: false}, {name: "Oxygen Storage Module", texture: [["Machine", 0],["Machine", 0],["Machine", 0],["Oxygen Storage Module 4", 0],["Machine Input", 0],["Machine Oxygen Input", 0]], inCreative: false}, {name: "Oxygen Storage Module", texture: [["Machine", 0],["Machine", 0],["Machine", 0],["Oxygen Storage Module 5", 0],["Machine Input", 0],["Machine Oxygen Input", 0]], inCreative: false}, {name: "Oxygen Storage Module", texture: [["Machine", 0],["Machine", 0],["Machine", 0],["Oxygen Storage Module 6", 0],["Machine Input", 0],["Machine Oxygen Input", 0]], inCreative: false}, {name: "Oxygen Storage Module", texture: [["Machine", 0],["Machine", 0],["Machine", 0],["Oxygen Storage Module 7", 0],["Machine Input", 0],["Machine Oxygen Input", 0]], inCreative: false},{name: "Oxygen Storage Module", texture: [["Machine", 0],["Machine", 0],["Machine", 0],["Oxygen Storage Module 8", 0],["Machine Input", 0],["Machine Oxygen Input", 0]], inCreative: false}, {name: "Oxygen Storage Module", texture: [["Machine", 0],["Machine", 0],["Machine", 0],["Oxygen Storage Module 9", 0],["Machine Input", 0],["Machine Oxygen Input", 0]], inCreative: false}, {name: "Oxygen Storage Module", texture: [["Machine", 0],["Machine", 0],["Machine", 0],["Oxygen Storage Module 10", 0],["Machine Input", 0],["Machine Oxygen Input", 0]], inCreative: false}, {name: "Oxygen Storage Module", texture: [["Machine", 0],["Machine", 0],["Machine", 0],["Oxygen Storage Module 11", 0],["Machine Input", 0],["Machine Oxygen Input", 0]], inCreative: false}, {name: "Oxygen Storage Module", texture: [["Machine", 0],["Machine", 0],["Machine", 0],["Oxygen Storage Module 12", 0],["Machine Input", 0],["Machine Oxygen Input", 0]], inCreative: false}, {name: "Oxygen Storage Module", texture: [["Machine", 0],["Machine", 0],["Machine", 0],["Oxygen Storage Module 13", 0],["Machine Input", 0],["Machine Oxygen Input", 0]], inCreative: false},{name: "Oxygen Storage Module", texture: [["Machine", 0],["Machine", 0],["Machine", 0],["Oxygen Storage Module 14", 0],["Machine Input", 0],["Machine Oxygen Input", 0]], inCreative: false}, {name: "Oxygen Storage Module", texture: [["Machine", 0],["Machine", 0],["Machine", 0],["Oxygen Storage Module 15", 0],["Machine Input", 0],["Machine Oxygen Input", 0]], inCreative: false},{name: "Oxygen Storage Module", texture: [["Machine", 0],["Machine", 0],["Machine", 0],["Oxygen Storage Module Full", 0],["Machine Input", 0],["Machine Oxygen Input", 0]], inCreative: false}]);
Translation.addTranslation("Oxygen Storage Module",{
ru: "Кислородное хранилище"
});

TileEntity.registerPrototype(BlockID.oxygen_storage_module,{defaultValues: {
		progress: 0, 
   progressMax: 0,
   active: false,  
   energy: 0,
   energyMax: 20000,
	}, isEnergySource: function() {
     return true
    },
   canReceiveEnergy: function(){
        return false
    }, 
    getCapacity: function(){
        return 20000},
    tick: function(){
    if(this.dimension == 0){this.data.energy += Math.min(1,this.data.energyMax - this.data.energy);}
let slot1 = this.container.getSlot("slot1");

this.container.setScale("scala", this.data.energy / 20000);
this.container.setScale("o2", this.data.energy / 100);
this.container.setText("OXYGEN", "Ob: " + this.data.energy + " / " + this.data.energyMax);
	},
	energyTick: function(type, src) {
           if(this.dimension == 0){ src.addAll(10);}
	},
	getGuiScreen: function(){
		return OxygenStorage; 
	},});



let OxygenStorage = new UI.StandartWindow({standart:
{header:
{text:{text:
Translation.translate("Кислородное хранилище")
}},
  inventory:
{standart:true},
  background:
{standart:true}}
,drawing:[
    {type: "bitmap", x: 400, y:190, bitmap: "Others.Scala",scale:4.3
    },{type: "bitmap", x:680, y:150, bitmap:"o2_noy", scale: 4.0}],elements:{
    	slot1:
    	{type:"slot",x:400,y:110,size:70,bitmap: "Others.O2Slot"},
    	scala: 
    	{type: "scale", x:400 ,y: 190, bitmap:"Others.Scala2",scale : 4.3, direction: 0},
    	o2: 
    	{type: "scale", x:680 ,y: 150, bitmap:"o2_yes",scale : 4.0, direction: 1},
    	OXYGEN:
    	{type: "text", x: 480, y: 135, width: 100, height: 30, text: "Oxygen Bar" },
    }
  }
);
    EnergyTileRegistry.addEnergyTypeForId(BlockID.oxygen_storage_module, ob);
    /*
 $ - slot1
 # - Scala
 
 $
 #######
    */
    
    IDRegistry.genBlockID("refinery_sc");
Block.createBlockWithRotation("refinery_sc",[{name: "Refinery", texture: [["Machine", 0],["refinery_top", 0],["Machine", 0],["refinery_side", 0],["refinery_front", 0],["Machine Oxygen Input", 0]], inCreative: true} ]);
Translation.addTranslation("Refinery",{
ru: "Центрифуга"
});

let ClearFuel = new UI.StandartWindow({standart:
{header:
{text:{text:
Translation.translate("Очистительный завод")
}},
  inventory:
{standart:true},
  background:
{standart:true}}
,drawing:[
    {type: "bitmap",x: 268,y: 190, bitmap: "Liquid_null",scale: 3.8},
    {type: "bitmap",x: 769,y: 190, bitmap: "Liquid_null",scale: 3.8}, {type: "bitmap", x:667 ,y: 190, bitmap:"Liquid_null",scale : 3.8},{type: "bitmap", x:565 ,y: 190, bitmap:"Liquid_null",scale : 3.8},
     {type: "bitmap", x:500 ,y: 70, bitmap:"slace_en_0",scale : 3}, {type: "bitmap", x:640 ,y: 70, bitmap:"en_noy",scale : 3}, 
    ],
    elements:{
    	canister1:
    	{type:"slot",x:355,y:120,size:70, bitmap:"SPC.SPC_Canister"},canister1i1:
    	{type:"slot",x:445,y:120,size:70, bitmap:"SPC.SPC_Canister"},
    	OilScall:
    {type: "scale", x:268,y: 190, bitmap:"Liquid_oil",scale : 3.8, direction: 1,clicker: {
            onClick: function(){
               /* RV && RV.RecipeTypeRegistry.openRecipePage("refinery");*/
            }}}, 
    	
    	FUELScall: {type: "scale", x:769 ,y: 190, bitmap:"Liquid_fuel",scale : 3.8, direction: 1,clicker: {
            onClick: function(){
             /* RV && RV.RecipeTypeRegistry.openRecipePage("refinery");*/
            }}}, 
    	canister2:
    	{type:"slot",x:855,y:120,size:70, bitmap:"SPC.SPC_Canister"},
    	canister3: {type:"slot",x:755,y:120,size:70, bitmap:"SPC.SPC_Canister"}, canister4: {type:"slot",x:651,y:120,size:70, bitmap:"SPC.SPC_Canister"},CEROSINScall : {type: "scale", x:667 ,y: 190, bitmap:"Others.Liquid_cerosin",scale : 3.8, direction: 1,clicker: {
            onClick: function(){
            /*    RV && RV.RecipeTypeRegistry.openRecipePage("refinery");*/
            }}},RUBBERScall : {type: "scale", x:565 ,y: 190, bitmap:"Others.Liquid_rubber",scale : 3.8, direction: 1,clicker: {
            onClick: function(){
               /* RV && RV.RecipeTypeRegistry.openRecipePage("refinery");*/
            }}}, ENERGYBar : {type: "scale", x:500 ,y: 70, bitmap:"slace_en_1",scale : 3, direction: 0}, Energy : {type: "scale", x:640 ,y: 70, bitmap:"en_yes",scale : 3, direction: 1}, 
    	ELECTRIC: {type: "text", x: 690, y: 80, width: 100, height: 30, text: "Space Joule" },energySlot:    	{type:"slot",x:455,y:260,size:70,bitmap: "Others.en_slot"}, 
    }
  }
);

TileEntity.registerPrototype(BlockID.refinery_sc,{defaultValues: {
		progress: 0, 
   progressMax: 0,
   active: false,  
   energy: 0,
   energyMax: 500,
   fuel: 0,
   oil: 0,
   kerosene: 0,
   rubber: 0,
	},energyReceive: function(type, amount, voltage) { 
		amount = Math.min(amount, 450)
		var add = Math.min(amount, this.getCapacity() - this.data.energy);
		this.data.energy += add  
		return add
	},
    canReceiveEnergy: function(type, side){
        return true;
    }, 
    getCapacity: function(){
   return 500
    },
    tick: function(){
    	battery.add(this.container, this.data, "energySlot");


this.container.setScale("Energy", this.data.energy / 500);
this.container.setScale("ENERGYBar", this.data.energy / 500);
this.container.setScale("OilScall", this.data.oil / 40);
this.container.setScale("CEROSINScall", this.data.kerosene / 40);
this.container.setScale("RUBBERScall", this.data.rubber / 40);
this.container.setScale("FUELScall", this.data.fuel / 40);
this.container.setText("ELECTRIC", "Sj :" + this.data.energy + " / " + this.data.energyMax);
if(this.data.energy >= 50){

if(this.container.getSlot("canister1").id == ItemID.bucket_of_oil && this.data.kerosene != 40 && this.data.fuel != 40 && this.data.rubber != 40) {
     this.container.setSlot("canister1", 325, 1, 0);
     this.data.fuel += 5;
     this.data.oil += 5;
     this.data.energy -= 45;
     if(this.data.kerosene != 40 && this.data.fuel != 40){
     this.data.oil -= 5;};
     this.data.kerosene += 5;
     this.data.rubber += 5
     if(this.data.fuel == 40 || this.data.rubber == 40 || this.data.kerosene == 40 && this.container.getSlot("canister1").id == ItemID.bucket_of_oil){this.container.setSlot("canister1", 325, 1, 0); this.data.oil += 0}
    }
   ;};
   if(this.container.getSlot("canister1i1").id == VanillaItemID.bucket && this.data.oil >= 5) {
     this.container.setSlot("canister1i1", ItemID.bucket_of_oil, 1, 0);
     this.data.oil -= 5;
    };
       if(this.container.getSlot("canister3").id == VanillaItemID.bucket && this.data.kerosene >= 5) {
     this.container.setSlot("canister3", ItemID.bucket_of_cerosin, 1, 0);
     this.data.kerosene -= 5;
    };
   if(this.container.getSlot("canister2").id == VanillaItemID.bucket && this.data.fuel >= 5) {
     this.container.setSlot("canister2", ItemID.bucket_of_fuel, 1, 0);
     this.data.fuel -= 5;
    };
    if(this.container.getSlot("canister3").id == ItemID.cerosin_canister,1 ,0 && this.data.kerosene >= 5) {
     this.container.setSlot("canister3", ItemID.cerosin_canister, 1, data+6);
     this.data.kerosene -= 5;
    };
    if(this.container.getSlot("canister4").id == VanillaItemID.bucket && this.data.rubber >= 5) {
     this.container.setSlot("canister4", ItemID.bucket_of_rubber, 1, 0);
     this.data.rubber -= 5;
    };
	},
	energyTick: function(type, src) {

           		let output = Math.min(450, this.data.energy)
	this.data.energy += src.add(output) - output;
	
}, 
	getGuiScreen: function(){
		return ClearFuel; 
	},
});
	
    EnergyTileRegistry.addEnergyTypeForId(BlockID.refinery_sc, sj);
    EnergyTileRegistry.addEnergyTypeForId(BlockID.refinery_sc, EU);
    EnergyTileRegistry.addEnergyTypeForId(BlockID.refinery_sc, RF);
    /*
 $ - slot1
 # - Scala
 
 $
 #######
    */
    




// file: Ores/raw_silicon.js

﻿IDRegistry.genItemID("raw_silicon"); 
Item.createItem("raw_silicon", "Raw Silicon", {name: "Raw Silicon", meta: 0}, {stack: 64});
Translation.addTranslation("Raw Silicon", {
ru: "Неочищенный кремний"
});




// file: Ores/ingot_copper.js

﻿IDRegistry.genItemID("ingot_copper_sc"); 
Item.createItem("ingot_copper_sc", "Ingot Copper", {name: "Ingot Copper", meta: 0}, {stack: 64});
Translation.addTranslation("Ingot Copper", {
ru: "Медный слиток"
});




// file: Ores/lunar_sapphire.js

﻿IDRegistry.genItemID("lunar_sapphire"); 
Item.createItem("lunar_sapphire", "Lunar Sapphire", {name: "Lunar Sapphire", meta: 0}, {stack: 64});
Translation.addTranslation("Lunar Sapphire", {
ru: "Лунный сапфир"
});




// file: Ores/ingot_aluminum.js

﻿IDRegistry.genItemID("ingot_aluminum_sc"); 
Item.createItem("ingot_aluminum_sc", "Ingot Aluminum", {name: "Ingot Aluminum", meta: 0}, {stack: 64});
Translation.addTranslation("Ingot Aluminum", {
ru: "Алюминиевый слиток"
});




// file: Ores/ingot_tin.js

﻿IDRegistry.genItemID("ingot_tin_sc"); 
Item.createItem("ingot_tin_sc", "Ingot Tin", {name: "Ingot Tin", meta: 0}, {stack: 64});
Translation.addTranslation("Ingot Tin", {
ru: "Оловяный слиток"
});




// file: SpaceTools/oxygen_canister_infinite.js

IMPORT("ChargeItem");
﻿IDRegistry.genItemID("oxygen_canister_infinite"); 
Item.createItem("oxygen_canister_infinite", "Oxygen Canister Infinite", {name: "Extra Oxygen Tank", meta: 0}, {stack: 64});
Translation.addTranslation("Oxygen Canister Infinite", {
ru: "Бесконечно-кислородный баллон"
});

ChargeItemRegistry.registerItem(ItemID.oxygen_canister_infinite, "ob", 500, 20, 0, true);
oxygenStorage.set(ItemID.oxygen_canister_infinite, {storage: 500});

Item.setGlint(ItemID.oxygen_canister_infinite, true);




// file: rocket_fins.js

﻿IDRegistry.genItemID("rocket_fins"); 

Item.createItem("rocket_fins", "Rocket Fins", {name: "Rocket Fins", meta: 0}, {stack: 4});

Translation.addTranslation("Rocket Fins", {

ru: "Ступень ракеты"

});





// file: air_fan.js

﻿IDRegistry.genItemID("air_fan"); 
Item.createItem("air_fan", "Air Fan", {name: "Air Fan", meta: 0}, {stack: 1});
Translation.addTranslation("Air Fan", {
ru: "Вентилятор"
});




// file: Ores/meteoric_iron_raw.js

﻿IDRegistry.genItemID("meteoric_iron_raw"); 
Item.createItem("meteoric_iron_raw", "Meteoric Iron Raw", {name: "Meteoric Iron Raw", meta: 0}, {stack: 64});
Translation.addTranslation("Meteoric Iron Raw", {
ru: "Метеоритное железо"
});
Recipes.addFurnace(ItemID.meteoric_iron_raw, 0, ItemID.meteoric_iron_ingot, 0);




// file: nose_cone.js

﻿IDRegistry.genItemID("nose_cone"); 
Item.createItem("nose_cone", "Nose Cone", {name: "Nose Cone", meta: 0}, {stack: 1});
Translation.addTranslation("Nose Cone", {
ru: "Ракетный обтекатель"
});




// file: Ores/meteoric_iron_ingot.js

﻿IDRegistry.genItemID("meteoric_iron_ingot"); 
Item.createItem("meteoric_iron_ingot", "Meteoric Iron Ingot", {name: "Meteoric Iron Ingot", meta: 0}, {stack: 64});
Translation.addTranslation("Meteoric Iron Ingot", {
ru: "Метеоритно-железный слиток"
});




// file: engine_tier1.js

﻿IDRegistry.genItemID("engine_tier"); 
Item.createItem("engine_tier", "Engine Tier1", {name: "Engine Tier1", meta: 0}, {stack: 5});
Translation.addTranslation("Engine Tier1", {
ru: "Двигатель ракеты"
});




// file: Ores/compressed_iron.js

﻿IDRegistry.genItemID("compressed_iron"); 
Item.createItem("compressed_iron", "Compressed Iron", {name: "Compressed Iron", meta: 0}, {stack: 64});
Translation.addTranslation("Compressed Iron", {
ru: "Сжатое железо"
});




// file: Ores/compressed_bronze.js

﻿IDRegistry.genItemID("compressed_bronze"); 
Item.createItem("compressed_bronze", "Compressed Bronze", {name: "Compressed Bronze", meta: 0}, {stack: 64});
Translation.addTranslation("Compressed Bronze", {
ru: "Сжатая бронза"
});




// file: Ores/compressed_tin.js

﻿IDRegistry.genItemID("compressed_tin"); 
Item.createItem("compressed_tin", "Compressed Tin", {name: "Compressed Tin", meta: 0}, {stack: 64});
Translation.addTranslation("Compressed Tin", {
ru: "Сжатое олово"
});




// file: Ores/compressed_aluminum.js

﻿IDRegistry.genItemID("compressed_aluminum"); 
Item.createItem("compressed_aluminum", "Compressed Aluminum", {name: "Compressed Aluminum", meta: 0}, {stack: 64});
Translation.addTranslation("Compressed Aluminum", {
ru: "Сжатый Алюминий"
});




// file: Ores/compressed_steel.js

﻿IDRegistry.genItemID("compressed_steel"); 
Item.createItem("compressed_steel", "Compressed Steel", {name: "Compressed Steel", meta: 0}, {stack: 64});
Translation.addTranslation("Compressed Steel", {
ru: "Сжатая сталь"
});




// file: Ores/compressed_copper.js

﻿IDRegistry.genItemID("compressed_copper"); 
Item.createItem("compressed_copper", "Compressed Copper", {name: "Compressed Copper", meta: 0}, {stack: 64});
Translation.addTranslation("Compressed Copper", {
ru: "Сжатая медь"
});




// file: Ores/compressed_meteoric_iron.js

﻿IDRegistry.genItemID("compressed_meteoric_iron"); 
Item.createItem("compressed_meteoric_iron", "Compressed Meteoric Iron", {name: "Compressed Meteoric Iron", meta: 0}, {stack: 64});
Translation.addTranslation("Compressed Meteoric Iron", {
ru: "Сжатое метеоритное железо"
});




// file: wafer_advanced.js

﻿IDRegistry.genItemID("wafer_advanced"); 
Item.createItem("wafer_advanced", "Wafer Advanced", {name: "Wafer Advanced", meta: 0}, {stack: 32});
Translation.addTranslation("Wafer Advanced", {
ru: "Усовершенствованная пластина"
});




// file: wafer_basic.js

﻿IDRegistry.genItemID("wafer_basic"); 
Item.createItem("wafer_basic", "Wafer Basic", {name: "Wafer Basic", meta: 0}, {stack: 64});
Translation.addTranslation("Wafer Basic", {
ru: "Базовая пластина"
});




// file: engine_tier1_buster.js

﻿IDRegistry.genItemID("engine_tier1_booster"); 
Item.createItem("engine_tier1_booster", "Engine Tier1 Booster", {name: "Engine Tier1 Buster", meta: 0}, {stack:4});
Translation.addTranslation("Engine Tier1 Booster", {
ru: "Ускоритель двигателя"
});




// file: schematic_rocket_2.js

﻿IDRegistry.genItemID("schematic_rocket_2"); 
Item.createItem("schematic_rocket_2", "Schematic Rocket 2 Lvl", {name: "Schematic Rocket 2", meta: 0}, {stack: 1});
Translation.addTranslation("Schematic Rocket 2 Lvl", {
ru: "Чертёж ракеты 2-го уровня"
});




// file: schematic_rocket_t3.js

﻿IDRegistry.genItemID("schematic_rocket_3"); 
Item.createItem("schematic_rocket_3", "Schematic Rocket 3lvl", {name: "Schematic Rocket T3", meta: 0}, {stack: 1});
Translation.addTranslation("Schematic Rocket 3lvl", {
ru: "Чертёж ракеты 3-го уровня"
});




// file: schematic_buggy.js

﻿IDRegistry.genItemID("schematic_buggy"); 
Item.createItem("schematic_buggy", "Schematic Buggy", {name: "Schematic Buggy", meta: 0}, {stack: 1});
Translation.addTranslation("Schematic Buggy", {
ru: "Чертёж багги"
});




// file: thermal_controller.js

﻿IDRegistry.genItemID("thermal_controller"); 
Item.createItem("thermal_controller", "Thermal Controller", {name: "Thermal Controller", meta: 0}, {stack: 3});
Translation.addTranslation("Thermal Controller", {
ru: "Терморегулятор"
});




// file: solar_module_1.js

﻿IDRegistry.genItemID("solar_module1"); 
Item.createItem("solar_module1", "Solar Module 1", {name: "Solar Module 1", meta: 0}, {stack: 16});
Translation.addTranslation("Solar Module 1", {
ru: "Солнечный модуль"
});




// file: buggymat_sit.js

﻿IDRegistry.genItemID("buggymat_sit"); 
Item.createItem("buggymat_sit", "Buggymat Sit", {name: "Buggymat Sit", meta: 0}, {stack: 1});
Translation.addTranslation("Buggymat Sit", {
ru: "Сиденье багги"
});




// file: heavy_plating.js

﻿IDRegistry.genItemID("heavy_plating"); 
Item.createItem("heavy_plating", "Heavy Plating", {name: "Heavy Plating", meta: 0}, {stack: 64});
Translation.addTranslation("Heavy Plating", {
ru: "Сверхпрочная пластина"
});




// file: SpaceTools/oxygen_concentrator.js

﻿IDRegistry.genItemID("oxygen_concentrator"); 
Item.createItem("oxygen_concentrator", "Oxygen Concentrator", {name: "Oxygen Concentrator", meta: 0}, {stack: 3});
Translation.addTranslation("Oxygen Concentrator", {
ru: "Кислородный концентратор"
});




// file: SpaceTools/proj.js

﻿IDRegistry.genItemID("compactable_computer"); 
Item.createItem("compactable_computer", "Mobile Computer", {name: "Mobile Computer", meta: 1}, {stack: 1});
IAHelper.makeAdvancedAnim(ItemID.compactable_computer, "proj", 1, [1, 2, 3, 4, 5]);
Translation.addTranslation("Mobile Computer", {
ru: "Портативный компьютер(A#%R+-Tēm8{}oN$)"
});
Item.registerUseFunction("compactable_computer",function(coords, item, block, player) {
ScrutinyAPI.open(player, "SpacesCraftTab");
});
//Future pack? Questions?Задачи?
//может быть
ScrutinyAPI.register("SpacesCraftTab", {
	frame: "projframe",
	dscrFrame: "classic_tab_up_light_left",
	closeButtonFrame: "tab_up_close_button",
	default_tab: "projframe",
});
//Табы,вкладки по-другому
ScrutinyAPI.setTab("SpacesCraftTab", "projframe", {
	title: Translation.translate("Beginning"),
	id: 0,
	frame: "classic_tab_left_light",
	frame2: "classic_tab_left_dark",
	onTouchFrame: "classic_tab_left_dark",
	icon: BlockID.oxygen_compressor,
	auto_size: true 
});
Translation.addTranslation("Beginning", {
	ru: "Начало"
});
ScrutinyAPI.setTab("SpacesCraftTab", "Moon", {
	title: Translation.translate("Moon adventures"),
	id: 1,
	frame: "classic_tab_left_light",
	frame2: "classic_tab_left_dark",
	onTouchFrame: "classic_tab_left_dark",
	icon: BlockID.moon_top_side||0,
	auto_size: true 
});
Translation.addTranslation("Moon adventures", {
	ru: "Лунные приключения"
});
ScrutinyAPI.setTab("SpacesCraftTab", "Mars", {
	title: Translation.translate("Mars adventures"),
	id: 1,
	frame: "classic_tab_left_light",
	frame2: "classic_tab_left_dark",
	onTouchFrame: "classic_tab_left_dark",
	icon: BlockID.mars_stone||0,
	auto_size: true 
});
Translation.addTranslation("Mars adventures", {
	ru: "Марсианские приключения"
});




// file: buggymat_wheel.js

﻿IDRegistry.genItemID("buggymat_wheel"); 
Item.createItem("buggymat_wheel", "Buggymat Wheel", {name: "Buggymat Wheel", meta: 0}, {stack: 6});
Translation.addTranslation("Buggymat Wheel", {
ru: "Колесо багги"
});




// file: wafer_solar.js

﻿IDRegistry.genItemID("wafer_solar"); 
Item.createItem("wafer_solar", "Wafer Solar", {name: "Wafer Solar", meta: 0}, {stack: 16});
Translation.addTranslation("Wafer Solar", {
ru: "Солнечная пластина"
});




// file: SpaceTools/oxygen_gear.js

﻿IDRegistry.genItemID("oxygen_gear"); 
Item.createItem("oxygen_gear", "Oxygen Gear", {name: "Oxygen Gear", meta: 0}, {stack: 1});
Translation.addTranslation("Oxygen Gear", {
ru: "Кислородное снаряжение"
});




// file: SpaceTools/extra_oxygen_tank.js

IMPORT("ChargeItem");
﻿IDRegistry.genItemID("extra_oxygen_tank"); 
Item.createItem("extra_oxygen_tank", "Extra Oxygen Tank", {name: "Extra Oxygen Tank", meta: 0}, {stack: 1});
Translation.addTranslation("Extra Oxygen Tank", {
ru: "Экстра кислородный баллон"
});

ChargeItemRegistry.registerItem(ItemID.extra_oxygen_tank, "ob", 5000, 20, 0, true);
oxygenStorage.set(ItemID.extra_oxygen_tank, {storage: 5000});




// file: SpaceTools/oxygen_tank_heavy_full.js

IMPORT("ChargeItem");
﻿IDRegistry.genItemID("oxygentank_heavyfull"); 
Item.createItem("oxygentank_heavyfull", "Oxygen Tank Heavy Full", {name: "Oxygen Tank Heavy Full", meta: 0}, {stack: 1});
Translation.addTranslation("Oxygen Tank Heavy Full", {
ru: "Большой кислородный баллон"
});
ChargeItemRegistry.registerItem(ItemID.oxygentank_heavyfull, "ob", 2700, 20, 0, true);
oxygenStorage.set(ItemID.oxygentank_heavyfull, {storage: 2700});




// file: SpaceTools/oxygen_tank_med_full.js

IMPORT("ChargeItem");
﻿IDRegistry.genItemID("oxygentank_medfull"); 
Item.createItem("oxygentank_medfull", "Oxygen Tank Med Full", {name: "Oxygen Tank Med Full", meta: 0}, {stack: 1});
Translation.addTranslation("Oxygen Tank Med Full", {
ru: "Средний кислородный баллон"
});

ChargeItemRegistry.registerItem(ItemID.oxygentank_medfull, "ob", 1800, 20, 0, true);
oxygenStorage.set(ItemID.oxygentank_medfull, {storage: 1800});




// file: SpaceTools/oxygen_tank_light_full.js

IMPORT("ChargeItem");
﻿IDRegistry.genItemID("oxygentank_lightfull"); 
Item.createItem("oxygentank_lightfull", "Oxygen Tank Light Full", {name: "Oxygen Tank Light Full", meta: 0}, {stack: 1});
Translation.addTranslation("Oxygen Tank Light Full", {
ru: "Маленький кислородный баллон"
});
ChargeItemRegistry.registerItem(ItemID.oxygentank_lightfull, "ob", 900, 20, 0, true);
oxygenStorage.set(ItemID.oxygentank_lightfull, {storage: 900});




// file: SpaceTools/frequency_module.js

﻿IDRegistry.genItemID("frequency_module"); 
Item.createItem("frequency_module", "Frequency Module", {name: "Frequency Module", meta: 0}, {stack: 1});
Translation.addTranslation("Frequency Module", {
ru: "Высокочастотный модуль"
});




// file: SpaceTools/shield_controller.js

﻿IDRegistry.genItemID("shield_controller"); 
Item.createItem("shield_controller", "Shield Controller", {name: "Shield Controller", meta: 0}, {stack: 1});
Translation.addTranslation("Shield Controller", {
ru: "Щитовой контроллер"
});
//100% шанс появления на Венере




// file: alien_flesh.js

﻿IDRegistry.genItemID("alien_flesh"); 
Item.createItem("alien_flesh", "Alien Flesh", {name: "Alien Flesh", meta: 0}, {stack: 64});
Translation.addTranslation("Alien Flesh", {
ru: "Инопланетная плоть"
});




// file: Food/fried_alien_flesh.js

﻿IDRegistry.genItemID("fried_alien_flesh"); 
Item.createFoodItem("fried_alien_flesh", "Fried Alien Flesh", {name: "Fried Alien Flesh", meta: 0}, {stack: 64,food: 5});
Translation.addTranslation("Fried Alien Flesh", {
ru: "Жаренная инопланетная плоть"
});




// file: Ores/compressed_iron_steel.js

﻿IDRegistry.genItemID("compressed_iron_steel"); 
Item.createItem("compressed_iron_steel", "Compressed Iron Steel", {name: "Compressed Iron Steel", meta: 0}, {stack: 64});
Translation.addTranslation("Compressed Iron Steel", {
ru: "Сжатая железо-сталь"
});




// file: buggymat_storage.js

﻿IDRegistry.genItemID("buggymat_storage"); 
Item.createItem("buggymat_storage", "Buggymat Storage", {name: "Buggymat Storage", meta: 0}, {stack: 6});
Translation.addTranslation("Buggymat Storage", {
ru: "Хранилище багги"
});




// file: Canisters/empty_liquid_canister.js

﻿IDRegistry.genItemID("empty_liquid_canister"); 
Item.createItem("empty_liquid_canister", "Empty Liquid Canister", {name: "Empty Liquid Canister", meta: 0}, {stack: 1});
Translation.addTranslation("Empty Liquid Canister", {
ru: "Пустая жидкостная канистра"
});
Item.registerNameOverrideFunction("empty_liquid_canister", function(item, translation, name) {
    return Translation.translate("Empty Liquid Canister") + Translation.translate("\n§7Empty") 
});
Translation.addTranslation("\n§7Empty", {ru: "\n§7Пусто"});




// file: Canisters/bad_fuel_canister.js

IDRegistry.genItemID("dirty_fuel_canister");
Item.createItem("dirty_fuel_canister", "Dirty Fuel Canister", {name: "bad_fuel_canister_partial", meta:6}, {stack: 1});
Translation.addTranslation("Dirty Fuel Canister", {
ru: "Канистра с неочищенным топливом"
});
Item.registerNameOverrideFunction("dirty_fuel_canister", function(item, translation, name) {
    return Translation.translate("Dirty Fuel Canister") + Translation.translate("\n§7Filled in: ") + item.data;
});
Translation.addTranslation("\n§7Filled in: ", {ru: "\n§7Заполненно: "});

Item.registerIconOverrideFunction("dirty_fuel_canister", function(item, data) {
        if (item.data == 6) {
            return {name: "bad_fuel_canister_partial", meta:6};
        } if (item.data == 5 ) {
            return {name: "bad_fuel_canister_partial", meta:5};
        } if (item.data == 4 ) {
            return {name: "bad_fuel_canister_partial", meta:4};
        } if (item.data == 3 ) { 
            return {name: "bad_fuel_canister_partial", meta:3};
        } if (item.data == 2 ) { 
            return {name: "bad_fuel_canister_partial" ,meta: 2};
        } if (item.data == 1 ) {
            return {name: "bad_fuel_canister_partial", meta:1};
        } if (item.data == 0 ) {
            return {name: "Empty Liquid Canister", meta:0};
        }
});




// file: Canisters/cerosin_canister.js

IDRegistry.genItemID("cerosin_canister");
Item.createItem("cerosin_canister", "Asot Canister", {name: "cerosin_canister_partial", meta:6}, {stack: 1});
Translation.addTranslation("Cerosin Canister", {
ru: "Канистра с жидким керосином "
});
Item.registerNameOverrideFunction("cerosin_canister", function(item, translation, name) {
    return Translation.translate("Cerosin Canister") + Translation.translate("\n§7Filled in: ") + item.data;
});
Translation.addTranslation("\n§7Filled in: ", {ru: "\n§7Наполненно жидким керосином : "});

Item.registerIconOverrideFunction("cerosin_canister", function(item, data) {
        if (item.data == 6) {
            return {name: "cerosin_canister_partial", meta:6};
        } if (item.data == 5 ) {
            return {name: "cerosin_canister_partial", meta:5};
        } if (item.data == 4 ) {
            return {name: "cerosin_canister_partial", meta:4};
        } if (item.data == 3 ) { 
            return {name: "cerosin_canister_partial", meta:3};
        } if (item.data == 2 ) { 
            return {name: "cerosin_canister_partial" ,meta: 2};
        } if (item.data == 1 ) {
            return {name: "cerosin_canister_partial", meta:1};
        } if (item.data == 0 ) {
            return {name: "Empty Liquid Canister", meta:0};
        }
}   );




// file: Canisters/masut_canister.js

IDRegistry.genItemID("masut_canister");
Item.createItem("masut_canister", "Masut Canister", {name: "masut_canister_partial", meta:6}, {stack: 1});
Translation.addTranslation("Masut Canister", {
ru: "Канистра с мазутом "
});
Item.registerNameOverrideFunction("masut_canister", function(item, translation, name) {
    return Translation.translate("Masut Canister") + Translation.translate("\n§7Filled in : ") + item.data;
});
Translation.addTranslation("\n§7Filled in : ", {ru: "\n§7Заполненно: "});

Item.registerIconOverrideFunction("masut_canister", function(item, data) {
        if (item.data == 6) {
            return {name: "masut_canister_partial", meta:6};
        } if (item.data == 5 ) {
            return {name: "masut_canister_partial", meta:5};
        } if (item.data == 4 ) {
            return {name: "masut_canister_partial", meta:4};
        } if (item.data == 3 ) { 
            return {name: "masut_canister_partial", meta:3};
        } if (item.data == 2 ) { 
            return {name: "masut_canister_partial" ,meta: 2};
        } if (item.data == 1 ) {
            return {name: "masut_canister_partial", meta:1};
        } if (item.data == 0 ) {
            return {name: "Empty Liquid Canister", meta:0};
        }
}   );




// file: Canisters/fuel_canister.js

IDRegistry.genItemID("fuel_canister");
Item.createItem("fuel_canister", "Fuel Canister", {name: "Fuel_Canister_Partial", meta:6}, {stack: 1});
Translation.addTranslation("Clean Fuel Canister", {
ru: "Канистра с чистым топливом "
});
Item.registerNameOverrideFunction("fuel_canister", function(item, translation, name) {
    return Translation.translate("Clean Fuel Canister") + Translation.translate("\n§7Filled in : ") + item.data;
});
Translation.addTranslation("\n§7Filled in : ", {ru: "\n§7Заполненно: "});

Item.registerIconOverrideFunction("fuel_canister", function(item, data) {
        if (item.data == 6) {
            return {name: "Fuel_Canister_Partial", meta:6};
        } if (item.data == 5 ) {
            return {name: "Fuel_Canister_Partial", meta:5};
        } if (item.data == 4 ) {
            return {name: "Fuel_Canister_Partial", meta:4};
        } if (item.data == 3 ) { 
            return {name: "Fuel_Canister_Partial", meta:3};
        } if (item.data == 2 ) { 
            return {name: "Fuel_Canister_Partial" ,meta: 2};
        } if (item.data == 1 ) {
            return {name: "Fuel_Canister_Partial", meta:1};
        } if (item.data == 0 ) {
            return {name: "Empty Liquid Canister", meta:0};
        }
}   );

	Item.setLiquidClip("fuel_canister", true);
	




// file: Canisters/canister_h2o.js

IDRegistry.genItemID("h2o_canister"); 
Item.createItem("h2o_canister", "h2o Canister", {name: "canister_partial_lox", meta: 6}, {stack: 1});
Translation.addTranslation("h2o Canister", {
ru: "Канистра с H2O  "
});

Item.registerNameOverrideFunction("h2o_canister", function(item, translation, name) {
    return Translation.translate("h2o Canister") + Translation.translate("\n§7Filled with gas : ") + item.data;
});
Translation.addTranslation("\n§7Filled with gas : ", {ru: "\n§7Наполненно жидким газом: "});

Item.registerIconOverrideFunction("h2o_canister", function(item, data) {
        if (item.data == 6) {
            return {name: "canister_partial_lox", meta:6};
        } if (item.data == 5 ) {
            return {name: "canister_partial_lox", meta:5};
        } if (item.data == 4 ) {
            return {name: "canister_partial_lox", meta:4};
        } if (item.data == 3 ) { 
            return {name: "canister_partial_lox", meta:3};
        } if (item.data == 2 ) { 
            return {name: "canister_partial_lox" ,meta: 2};
        } if (item.data == 1 ) {
            return {name: "canister_partial_lox", meta:1};
        } if (item.data == 0 ) {
            return {name: "Empty Liquid Canister", meta:0};
        }
}   );




// file: Canisters/canister_asot.js

IDRegistry.genItemID("asot_canister");
Item.createItem("asot_canister", "Asot Canister", {name: "canister_partial_In2", meta:6}, {stack: 1});
Translation.addTranslation("Asot Canister", {
ru: "Канистра с жидким азотом "
});
Item.registerNameOverrideFunction("asot_canister", function(item, translation, name) {
    return Translation.translate("Asot Canister") + Translation.translate("\n§7Filled with gas : ") + item.data;
});
Translation.addTranslation("\n§7Filled with gas : ", {ru: "\n§7Наполненно жидким газом: "});

Item.registerIconOverrideFunction("asot_canister", function(item, data) {
        if (item.data == 6) {
            return {name: "canister_partial_In2", meta:6};
        } if (item.data == 5 ) {
            return {name: "canister_partial_In2", meta:5};
        } if (item.data == 4 ) {
            return {name: "canister_partial_In2", meta:4};
        } if (item.data == 3 ) { 
            return {name: "canister_partial_In2", meta:3};
        } if (item.data == 2 ) { 
            return {name: "canister_partial_In2" ,meta: 2};
        } if (item.data == 1 ) {
            return {name: "canister_partial_In2", meta:1};
        } if (item.data == 0 ) {
            return {name: "Empty Liquid Canister", meta:0};
        }
}   );




// file: Canisters/oil_canister.js

IDRegistry.genItemID("oil_canister"); 
Item.createItem("oil_canister", "Oil Canister", {name: "Oil_Canister_Partial", meta: 6}, {stack: 1});
Translation.addTranslation("Oil Canister", {
ru: "Канистра с нефтью "
});

Item.registerNameOverrideFunction("oil_canister", function(item, translation, name) {
    return Translation.translate("Oil Canister") + Translation.translate("\n§7Filled in : ") + item.data;
});
Translation.addTranslation("\n§7Filled in : ", {ru: "\n§7Заполненно: "});

Item.registerIconOverrideFunction("oil_canister", function(item, data) {
        if (item.data == 6) {
            return {name: "Oil_Canister_Partial", meta:6};
        } if (item.data == 5 ) {
            return {name: "Oil_Canister_Partial", meta:5};
        } if (item.data == 4 ) {
            return {name: "Oil_Canister_Partial", meta:4};
        } if (item.data == 3 ) { 
            return {name: "Oil_Canister_Partial", meta:3};
        } if (item.data == 2 ) { 
            return {name: "Oil_Canister_Partial" ,meta: 2};
        } if (item.data == 1 ) {
            return {name: "Oil_Canister_Partial", meta:1};
        } if (item.data == 0 ) {
            return {name: "Empty Liquid Canister", meta:0};
        }
}   );




// file: Canisters/methane_canister.js

IDRegistry.genItemID("methane_canister");
Item.createItem("methane_canister", "Methane Canister", {name: "methane_canister_partial", meta:6}, {stack: 1});
Translation.addTranslation("Methane Canister", {
ru: "Канистра с метаном"
});
Item.registerNameOverrideFunction("methane_canister", function(item, translation, name) {
    return Translation.translate("Methane Canister") + Translation.translate("\n§7Filled with gas: ") + item.data;
});
Translation.addTranslation("\n§7Filled with gas: ", {ru: "\n§7Наполненно газом: "});

Item.registerIconOverrideFunction("methane_canister", function(item, data) {
        if (item.data == 6) {
            return {name: "methane_canister_partial", meta:6};
        } if (item.data == 5 ) {
            return {name: "methane_canister_partial", meta:5};
        } if (item.data == 4 ) {
            return {name: "methane_canister_partial", meta:4};
        } if (item.data == 3 ) { 
            return {name: "methane_canister_partial", meta:3};
        } if (item.data == 2 ) { 
            return {name: "methane_canister_partial" ,meta: 2};
        } if (item.data == 1 ) {
            return {name: "methane_canister_partial", meta:1};
        } if (item.data == 0 ) {
            return {name: "Empty Liquid Canister", meta:0};
        }
});




// file: Food/cheese_curd.js

IDRegistry.genItemID("cheese_curd"); 
Item.createFoodItem("cheese_curd", "Cheese Curd", {name: "Cheese Curd", meta: 0}, {stack: 64,food: 4});
Translation.addTranslation("Cheese Curd", {
ru: "Кусочек сыра"
});





// file: air_vent.js

﻿IDRegistry.genItemID("air_vent"); 
Item.createItem("air_vent", "Air Vent", {name: "Air Vent", meta: 0}, {stack: 3});
Translation.addTranslation("Air Vent", {
ru: "Решетка для воздуха"
});




// file: Canisters/storage_of_canisters.js

IMPORT("BackpackAPI");
IDRegistry.genItemID("backpackTest");
Item.createItem("backpackTest", "Хранилище канистр", {name: "Storage Of Canisters", meta: 0}, {stack: 1});
BackpackRegistry.register(ItemID.backpackTest, {
    title: "Хранилище для канистр",
    slots: 15,
    slotsCenter: true,
    inRow: 5,
    items: [
        "^fuel.+",
        "^oil.+",
        "^empty.+",
        {id: 345, data: "^[1-3]$"}
    ]
});




// file: GalacticTokens/galactic_token_1.js

﻿IDRegistry.genItemID("galactic_token_1"); 
Item.createItem("galactic_token_1", "Galactic token of a space station builder", {name: "Galactic Token 1", meta: 0}, {stack: 3});
Translation.addTranslation("Galactic token of a space station builder", {
ru: "Галактический жетон строителя космических станций"
});




// file: GalacticTokens/galactic_token_2.js

IDRegistry.genItemID("galactic_token_2"); 
Item.createItem("galactic_token_2", "Galactic resource miner token", {name: "Galactic Token 2", meta: 0}, {stack: 3});
Translation.addTranslation("Galactic resource miner token", {
ru: "Галактический жетон добытчика ресурсов"
});





// file: GalacticTokens/galactic_token_3.js

IDRegistry.genItemID("galactic_token_3"); 
Item.createItem("galactic_token_3", "Galactic mechanic token", {name: "Galactic Token 3", meta: 0}, {stack: 3});
Translation.addTranslation("Galactic mechanic token", {
ru: "Галактический жетон механика"
});





// file: Food/cheeseburger.js

IDRegistry.genItemID("cheeseburger"); 
Item.createFoodItem("cheeseburger", "CheeseBurger", {name: "CheeseBurger", meta: 0}, {stack: 64,food: 14});
Translation.addTranslation("CheeseBurger", {
ru: "Чизбургер"
});






// file: Food/burger_bun.js

IDRegistry.genItemID("burger_bun"); 
Item.createFoodItem("burger_bun", "Burger Bun", {name: "Burger Bun", meta: 0}, {stack: 64,food: 4});
Translation.addTranslation("Burger Bun", {
ru: "Булочка для бургера"
});




// file: Food/beef_patty_raw.js

IDRegistry.genItemID("beef_patty_raw"); 
Item.createFoodItem("beef_patty_raw", "Beef Patty Raw", {name: "Beef Patty Raw", meta: 0}, {stack: 64,food: 4});
Translation.addTranslation("Beef Patty Raw", {
ru: "Котлета из говядины"
});




// file: Food/cheese_slice.js

IDRegistry.genItemID("cheese_slice"); 
Item.createFoodItem("cheese_slice", "Cheese Slice", {name: "Cheese Slice", meta: 0}, {stack: 64,food: 2});
Translation.addTranslation("Cheese Slice", {
ru: "Ломтик сыра"
});




// file: Food/grid_ground_beef.js

IDRegistry.genItemID("grid_ground_beef"); 
Item.createFoodItem("grid_ground_beef", "Grid Ground Beef", {name: "Grid Ground Beef", meta: 0}, {stack: 64,food: 2});
Translation.addTranslation("Grid Ground Beef", {
ru: "Фарш из говядины"
});




// file: Food/canned_beef.js

IDRegistry.genItemID("canned_beef"); 
Item.createFoodItem("canned_beef", "Canned Beef", {name: "Canned Beef", meta: 0}, {stack: 64,food: 8});
Translation.addTranslation("Canned Beef", {
ru: "Консервы с говядиной"
});




// file: Food/dehydrated_potato.js

IDRegistry.genItemID("dehydrated_potato"); 
Item.createFoodItem("dehydrated_potato", "Dehydrated Potato", {name: "Dehydrated Potato", meta: 0}, {stack: 64,food: 2});
Translation.addTranslation("Dehydrated Potato", {
ru: "Картофель в банке"
});




// file: Food/dehydrated_apple.js

IDRegistry.genItemID("dehydrated_apple"); 
Item.createFoodItem("dehydrated_apple", "Dehydrated Apple", {name: "Dehydrated Apple", meta: 0}, {stack: 64,food: 8});
Translation.addTranslation("Dehydrated Apple", {
ru: "Яблоко в банке"
});




// file: Food/dehydrated_carrot.js

IDRegistry.genItemID("dehydrated_carrot"); 
Item.createFoodItem("dehydrated_carrot", "Dehydrated Carrot", {name: "Dehydrated Carrot", meta: 0}, {stack: 64,food: 8});
Translation.addTranslation("Dehydrated Carrot", {
ru: "Морковь в банке"
});




// file: Food/dehydrated_mel.js

IDRegistry.genItemID("dehydrated_melon"); 
Item.createFoodItem("dehydrated_melon", "Dehydrated Melon", {name: "Dehydrated Mel", meta: 0}, {stack: 64,food: 4});
Translation.addTranslation("Dehydrated Melon", {
ru: "Арбуз в банке"
});




// file: Food/beef_patty_cooked.js

IDRegistry.genItemID("beef_patty_cooked"); 
Item.createFoodItem("beef_patty_cooked", "Beef Patty Cooked", {name: "Beef Patty Cooked", meta: 0}, {stack: 64,food: 4});
Translation.addTranslation("Beef Patty Cooked", {
ru: "Приготовленная котлета из говядины"
});




// file: canvas.js

﻿IDRegistry.genItemID("canvas"); 
Item.createItem("canvas", "Canvas", {name: "Canvas", meta: 0}, {stack: 64});
Translation.addTranslation("Canvas", {
ru: "Холст"
});




// file: Parachute/parachute_black.js

﻿IDRegistry.genItemID("parachute_black"); 
Item.createItem("parachute_black", "Parachute Black", {name: "Parachute Black", meta: 0}, {stack: 1});
Translation.addTranslation("Parachute Black", {
ru: "Чёрный парашют"
});




// file: Parachute/parachute_blue.js

﻿IDRegistry.genItemID("parachute_blue"); 
Item.createItem("parachute_blue", "Parachute Blue", {name: "Parachute Blue", meta: 0}, {stack: 1});
Translation.addTranslation("Parachute Blue", {
ru: "Голубой парашют"
});




// file: Parachute/parachute_brown.js

﻿IDRegistry.genItemID("parachute_brown"); 
Item.createItem("parachute_brown", "Parachute Brown", {name: "Parachute Brown", meta: 0}, {stack: 1});
Translation.addTranslation("Parachute Brown", {
ru: "Коричневый парашют"
});




// file: Parachute/parachute_darkblue.js

﻿IDRegistry.genItemID("parachute_darkblue"); 
Item.createItem("parachute_darkblue", "Parachute Darkblue", {name: "Parachute Darkblue", meta: 0}, {stack: 1});
Translation.addTranslation("Parachute Darkblue", {
ru: "Синий парашют"
});




// file: Parachute/parachute_darkgray.js

﻿IDRegistry.genItemID("parachute_darkgray"); 
Item.createItem("parachute_darkgray", "Parachute Darkgray", {name: "Parachute Darkgray", meta: 0}, {stack: 1});
Translation.addTranslation("Parachute Darkgray", {
ru: "Тёмно-серый парашют"
});




// file: Parachute/parachute_darkgreen.js

﻿IDRegistry.genItemID("parachute_darkgreen"); 
Item.createItem("parachute_darkgreen", "Parachute Darkgreen", {name: "Parachute Darkgreen", meta: 0}, {stack: 1});
Translation.addTranslation("Parachute Darkgreen", {
ru: "Тёмно-зелёный парашют"
});




// file: Parachute/parachute_grey.js

﻿IDRegistry.genItemID("parachute_grey"); 
Item.createItem("parachute_grey", "Parachute Grey", {name: "Parachute Grey", meta: 0}, {stack: 1});
Translation.addTranslation("Parachute Grey", {
ru: "Серый парашют"
});




// file: Parachute/parachute_lime.js

﻿IDRegistry.genItemID("parachute_lime"); 
Item.createItem("parachute_lime", "Parachute Lime", {name: "Parachute Lime", meta: 0}, {stack: 1});
Translation.addTranslation("Parachute Lime", {
ru: "Лаймовый парашют"
});




// file: Parachute/parachute_magenta.js

﻿IDRegistry.genItemID("parachute_magenta"); 
Item.createItem("parachute_magenta", "Parachute Magenta", {name: "Parachute Magenta", meta: 0}, {stack: 1});
Translation.addTranslation("Parachute Magenta", {
ru: "Пурпурный парашют"
});




// file: Parachute/parachute_orange.js

﻿IDRegistry.genItemID("parachute_orange"); 
Item.createItem("parachute_orange", "Parachute Orange", {name: "Parachute Orange", meta: 0}, {stack: 1});
Translation.addTranslation("Parachute Orange", {
ru: "Оранжевый парашют"
});




// file: Parachute/parachute_plain.js

﻿IDRegistry.genItemID("parachute_plain"); 
Item.createItem("parachute_plain", "Parachute Plain", {name: "Parachute Plain", meta: 0}, {stack: 1});
Translation.addTranslation("Parachute Plain", {
ru: "Стандартный парашют"
});




// file: Parachute/parachute_purple.js

﻿IDRegistry.genItemID("parachute_purple"); 
Item.createItem("parachute_purple", "Parachute Purple", {name: "Parachute Purple", meta: 0}, {stack: 1});
Translation.addTranslation("Parachute Purple", {
ru: "Фиолетовый парашют"
});




// file: Parachute/parachute_red.js

﻿IDRegistry.genItemID("parachute_red"); 
Item.createItem("parachute_red", "Parachute Red", {name: "Parachute Red", meta: 0}, {stack: 1});
Translation.addTranslation("Parachute Red", {
ru: "Красный парашют"
});




// file: Parachute/parachute_teal.js

﻿IDRegistry.genItemID("parachute_teal"); 
Item.createItem("parachute_teal", "Parachute Teal", {name: "Parachute Teal", meta: 0}, {stack: 1});
Translation.addTranslation("Parachute Teal", {
ru: "Бирюзовый парашют"
});




// file: Parachute/parachute_yellow.js

﻿IDRegistry.genItemID("parachute_yellow"); 
Item.createItem("parachute_yellow", "Parachute Yellow", {name: "Parachute Yellow", meta: 0}, {stack: 1});
Translation.addTranslation("Parachute Yellow", {
ru: "Желтый парашют"
});




// file: battery.js

﻿IMPORT("ChargeItem");
﻿IDRegistry.genItemID("battery"); 
Item.createItem("battery", "Battery", {name: "Battery", meta: 0}, {stack: 1, inCreative:false});
Translation.addTranslation("Battery", {
ru: "Батарейка"
});
ChargeItemRegistry.registerItem(ItemID.battery, "sj", 500, 20, 0, true);
ChargeItemRegistry.registerItem(ItemID.battery, "ft", 500, 20, 0, true);
battery.set(ItemID.battery, {storage: 500});
IDRegistry.genItemID("battery_infinity"); 
Item.createItem("battery_infinity", "Battery Infinity", {name: "Oxygen Canistre Infinite", meta: 0}, {stack: 1, inCreative:false});
Translation.addTranslation("Battery Infinity", {
ru: "Бесконечная батарейка"
});
ChargeItemRegistry.registerItem(ItemID.battery_infinity, "sj", 500, 20, 0, true);
ChargeItemRegistry.registerItem(ItemID.battery_infinity, "ft", 500, 20, 0, true);
//if(ItemID.battery == data = 500){alert(500)}
battery.set(ItemID.battery_infinity, {storage: 500});
Item.setGlint(ItemID.battery_infinity, true);




// file: Blocks/Decorative/deco_block.js

IDRegistry.genBlockID("deco_block");
Block.createBlock("deco_block",[{name: "Deco Block", texture: [["Deco Block", 0]], inCreative: true} ]);
Translation.addTranslation("Deco Block",{
ru: "Декоративный-оловянный блок"
})

IDRegistry.genBlockID("deco_block_slab");
Block.createBlock("deco_block_slab",[{name: "Deco Block Slab", texture: [["Deco Block", 0]], inCreative: true} ]);
Translation.addTranslation("Deco Block Slab",{
ru: "Декоративный-оловянная плита"
})


TileRenderer.makeSlab(BlockID.deco_block_slab, BlockID.deco_block);


IDRegistry.genBlockID("deco_block_2");
Block.createBlock("deco_block_2",[{name: "Deco Tin Block", texture: [["Deco Block Up", 0],["Deco Block Up", 0],["Deco Block Side", 0],["Deco Block Side", 0],["Deco Block Side", 0],["Deco Block Side", 0]], inCreative: true} ]);
Translation.addTranslation("Deco Tin Block",{
ru: "Украшенный декоративный-оловянный блок"
})

IDRegistry.genBlockID("deco_block_2_slab");
Block.createBlock("deco_block_2_slab",[{name: "Deco Tin Block Slab", texture: [["Deco Block Up", 0],["Deco Block Up", 0],["Deco Block Side", 0],["Deco Block Side", 0],["Deco Block Side", 0],["Deco Block Side", 0]], inCreative: true} ]);
Translation.addTranslation("Deco Tin Block Slab",{
ru: "Украшенная декоративно-оловянная плита"
})

TileRenderer.makeSlab(BlockID.deco_block_2_slab, BlockID.deco_block_2);

IDRegistry.genBlockID("brick");
Block.createBlock("brick",[{name: "Dungeon Brick", texture: [["Brick", 0]], inCreative: true} ]);
Translation.addTranslation("Dungeon Brick",{
ru: "Крепостные кирпичи"
})

IDRegistry.genBlockID("dungeon_brick_venus_1");
Block.createBlock("dungeon_brick_venus_1",[{name: "Dungeon Brick Venus 1", texture: [["Dungeon Brick Venus 1", 0]], inCreative: true} ]);
Translation.addTranslation("Dungeon Brick Venus 1",{
ru: "Венерианские кирпичи 1-го типа"
})

IDRegistry.genBlockID("dungeon_brick_venus_1_stairs");
Block.createBlock("dungeon_brick_venus_1_stairs",[{name: "Dungeon Brick Venus 1 Stairs", texture: [["Dungeon Brick Venus 1", 0]], inCreative: true} ], BLOCK_TYPE_STAIRS);
Translation.addTranslation("Dungeon Brick Venus 1 Stairs",{
ru: "Ступеньки Венерианских кирпичей 1-го типа"
})

IDRegistry.genBlockID("dungeon_brick_venus_2_stairs");
Block.createBlock("dungeon_brick_venus_2_stairs",[{name: "Dungeon Brick Venus 2 Stairs", texture: [["Dungeon Brick Venus 2", 0]], inCreative: true} ], BLOCK_TYPE_STAIRS);
Translation.addTranslation("Dungeon Brick Venus 2 Stairs",{
ru: "Ступеньки Венерианских кирпичей 2-го типа"
})


IDRegistry.genBlockID("dungeon_brick_venus_2");
Block.createBlock("dungeon_brick_venus_2",[{name: "Dungeon Brick Venus 2", texture: [["Dungeon Brick Venus 2", 0]], inCreative: true} ]);
Translation.addTranslation("Dungeon Brick Venus 2",{
ru: "Венерианские кирпичи 2-го типа"
})

IDRegistry.genBlockID("deco_block_stairs");
Block.createBlock("deco_block_stairs",[{name: "Deco Block Stairs", texture: [["Deco Block", 0]], inCreative: true} ], BLOCK_TYPE_STAIRS);
Translation.addTranslation("Deco Block Stairs",{
ru: "Декоративно-оловяные ступени"
})

IDRegistry.genBlockID("deco_block_2_stairs");
Block.createBlock("deco_block_2_stairs",[{name: "Deco Tin Stairs", texture: [["Deco Block Up", 0],["Deco Block Up", 0],["Deco Block Side", 0],["Deco Block Side", 0],["Deco Block Side", 0],["Deco Block Side", 0]], inCreative: true} ],BLOCK_TYPE_STAIRS);
Translation.addTranslation("Deco Tin Stairs",{
ru: "Резные декоративно-оловяные ступени"
})

IDRegistry.genBlockID("bricks_stairs");
Block.createBlock("bricks_stairs",[{name: "Dungeon Brick Stairs", texture: [["Brick", 0]], inCreative: true} ], BLOCK_TYPE_STAIRS);
Translation.addTranslation("Dungeon Brick Stairs",{
ru: "Крепостно-кирпичные ступени"
})

IDRegistry.genBlockID("dungeon_brick_venus_1_stairs");
Block.createBlock("dungeon_brick_venus_1_stairs",[{name: "Dungeon Brick Venus 1 Stairs", texture: [["Dungeon Brick Venus 1", 0]], inCreative: true} ]);
Translation.addTranslation("Dungeon Brick Venus 1 Stairs",{
ru: "Венерианские ступеньки из кирпичей 1-го типа"
})

IDRegistry.genBlockID("dungeon_brick_venus_2_stairs");
Block.createBlock("dungeon_brick_venus_2_stairs",[{name: "Dungeon Brick Venus 2 Stairs", texture: [["Dungeon Brick Venus 2", 0]], inCreative: true} ]);
Translation.addTranslation("Dungeon Brick Venus 1 Stairs",{
ru: "Венерианские ступеньки из кирпичей 2-го типа"
})

IDRegistry.genBlockID("deco_block_fence");
Block.createBlock("deco_block_fence",[{name: "Deco Block Fence", texture: [["Deco Block", 0]], inCreative: true} ], BLOCK_TYPE_FENCE);
Translation.addTranslation("Deco Block Fence",{
ru: "Декоротивно-оловяный забор"
})

IDRegistry.genBlockID("deco_block_2_fence");
Block.createBlock("deco_block_2_fence",[{name: "Deco Tin Fence", texture: [["Deco Block Up", 0],["Deco Block Up", 0],["Deco Block Side", 0],["Deco Block Side", 0],["Deco Block Side", 0],["Deco Block Side", 0]], inCreative: true} ],BLOCK_TYPE_STAIRS);
Translation.addTranslation("Deco Tin Fence",{
ru: "Резной декоративно-оловяный забор"
})




// file: Blocks/Ores/block_aluminum.js

IDRegistry.genBlockID("block_aluminum");
Block.createBlock("block_aluminum",[{name: "Block Aluminum", texture: [["Block Aluminum", 0]], inCreative: true} ]);
Translation.addTranslation("Block Aluminum",{
ru: "Алюминиевый блок"
})




// file: Blocks/Ores/block_tin.js

IDRegistry.genBlockID("block_tin_sc");
Block.createBlock("block_tin_sc",[{name: "Block Tin", texture: [["Block Tin", 0]], inCreative: true} ]);
Translation.addTranslation("Block Tin",{
ru: "Оловянный блок"
})




// file: Blocks/Ores/block_copper.js

IDRegistry.genBlockID("block_copper_sc");
Block.createBlock("block_copper_sc",[{name: "Block Copper", texture: [["Block Copper", 0]], inCreative: true} ]);
Translation.addTranslation("Block Copper",{
ru: "Медный блок"
})




// file: Blocks/Ores/ore_tin_moon.js

IDRegistry.genBlockID("ore_tin_moon");
Block.createBlock("ore_tin_moon",[{name: "Lunar Tin Ore", texture: [["Ore Tin Moon", 0]], inCreative: true} ]);
Translation.addTranslation("Lunar Tin Ore",{
ru: "Лунная оловянная руда"
})

Recipes.addFurnace(BlockID.ore_tin_moon, ItemID.ingot_tin_sc, 0);




// file: Blocks/Ores/ore_copper_moon.js

IDRegistry.genBlockID("ore_copper_moon");
Block.createBlock("ore_copper_moon",[{name: "Lunar Copper Ore", texture: [["Ore Copper Moon", 0]], inCreative: true} ]);
Translation.addTranslation("Lunar Copper Ore",{
ru: "Лунная медная руда"
})

Recipes.addFurnace(BlockID.ore_copper_moon, ItemID.ingot_copper_sc, 0);




// file: Blocks/Ores/moonore_cheese.js

IDRegistry.genBlockID("moonore_cheese");
Block.createBlock("moonore_cheese",[{name: "Lunar Cheese Ore", texture: [["Moonore Cheese", 0]], inCreative: true} ]);
Translation.addTranslation("Lunar Cheese Ore",{
ru: "Лунная сырная руда"
})

Block.registerDropFunction("moonore_cheese", function(coords, blockID){
    return [[ItemID.cheese_curd, randomInt[1,3,2], 0]] 
});




// file: TintedGlass/tinted_glass_pane_green.js


var glss = ["green","black","blue","brown","cyan","gray","light_blue","lime","magenta","orange","pink","purple","red","silver","white","yellow"]
var glsss = ["Green","Black","Blue","Brown","Cyan","Gray","Light Blue","Lime","Magenta","Orange","Pink","Purple","Red","Silver","White","Yellow"]
for(let i in glss){var gl = glss[i]; var g = glsss[i]
IDRegistry.genBlockID("tinted_glass_pane_" + gl);
Block.createBlock("tinted_glass_pane_" + gl,[{name: "Tinted Glass Pane " + g, texture: [["Tinted Glass Pane " + g, 0]], inCreative: true} ], BLOCK_TYPE_GLASS);

IDRegistry.genBlockID("tinted_glass_plane_" + gl);
Block.createBlock("tinted_glass_plane_" + gl,[{name: "Tinted Glass Plane " + g, texture: [["Tinted Glass Pane " + g, 0]], inCreative: true} ], BLOCK_TYPE_PLANE);

IDRegistry.genBlockID("tinted_glass_pane_fence_" + gl);
Block.createBlock("tinted_glass_pane_fence_" + gl,[{name: "Tinted Glass Pane Fence" + g, texture: [["Tinted Glass Pane " + g, 0]], inCreative: true} ], BLOCK_TYPE_FENCE_GL);
	
	IDRegistry.genBlockID("tinted_glass_pane_big_fence_" + gl);
Block.createBlock("tinted_glass_pane_big_fence_" + gl,[{name: "Tinted Glass Pane Big Fence" + g, texture: [["Tinted Glass Pane " + g, 0]], inCreative: true} ], BLOCK_TYPE_FENCEE_GL);
/*
IDRegistry.genBlockID("tinted_glass_pane_stairs_" + gl);
Block.createBlockWithRotation("tinted_glass_pane_stairs_" + gl,[{name: "Tinted Glass Pane Stairs" + g, texture: [["Tinted Glass Pane " + g, 0]], inCreative: true} ], BLOCK_TYPE_STAIRS_GL);

*/
/*IDRegistry.genBlockID("tinted_glass_pane_slab_" + gl);
Block.createBlock("tinted_glass_pane_slab_" + gl,[{name: "Tinted Glass Pane Slab" + g, texture: [["Tinted Glass Pane " + g, 0]], inCreative: true} ]);


TileRenderer.makeSlab(BlockID.tinted_glass_pane_slab_ + [gl], BlockID.tinted_glass_pane_ + [gl]);*/
}
Translation.addTranslation("Tinted Glass Pane Green",{
ru: "Зелёное тонированное стекло"
})


Translation.addTranslation("Tinted Glass Pane Black",{
ru: "Чёрное тонированное стекло"
})


Translation.addTranslation("Tinted Glass Pane Blue",{
ru: "Синее тонированное стекло"
})

Translation.addTranslation("Tinted Glass Pane Brown",{
ru: "Коричневое тонированное стекло"
})

Translation.addTranslation("Tinted Glass Pane Cyan",{
ru: "Бирюзовое тонированное стекло"
});

Translation.addTranslation("Tinted Glass Pane Gray",{
ru: "Серое тонированное стекло"
})

Translation.addTranslation("Tinted Glass Pane Light Blue",{
ru: "Голубое тонированное стекло"
});

Translation.addTranslation("Tinted Glass Pane Lime",{
ru: "Лаймовое тонированное стекло"
})

Translation.addTranslation("Tinted Glass Pane Magenta",{
ru: "Пурпурное тонированное стекло"
})

Translation.addTranslation("Tinted Glass Pane Red",{
ru: "Красное тонированное стекло"
})

Translation.addTranslation("Tinted Glass Pane Silver",{
ru: "Серебристое тонированное стекло"
})

Translation.addTranslation("Tinted Glass Pane White",{
ru: "Белое тонированное стекло"
});

Translation.addTranslation("Tinted Glass Pane Yellow",{
ru: "Жёлтое тонированное стекло"
})





// file: Blocks/Ores/ore_silicon.js

IDRegistry.genBlockID("ore_silicon");
Block.createBlock("ore_silicon",[{name: "Ore Silicon", texture: [["Ore Silicon", 0]], inCreative: true} ]);
Translation.addTranslation("Ore Silicon",{
ru: "Кремниевая руда"
})
Recipes.addFurnace(BlockID.ore_silicon, ItemID.raw_silicon, 0);




// file: Blocks/Ores/ore_copper.js

IDRegistry.genBlockID("ore_copper");
Block.createBlock("ore_copper",[{name: "Ore Copper", texture: [["Ore Copper", 0]], inCreative: true} ]);
Translation.addTranslation("Ore Copper",{
ru: "Медная руда"
})

Recipes.addFurnace(BlockID.ore_copper, ItemID.ingot_copper_sc, 0);




// file: Blocks/Ores/ore_tin.js

IDRegistry.genBlockID("ore_tin");
Block.createBlock("ore_tin",[{name: "Ore Tin", texture: [["Ore Tin", 0]], inCreative: true} ]);
Translation.addTranslation("Ore Tin",{
ru: "Оловянная руда"
})
Recipes.addFurnace(BlockID.ore_tin, ItemID.ingot_tin_sc, 0);




// file: Blocks/Ores/ore_aluminum.js

IDRegistry.genBlockID("ore_aluminum");
Block.createBlock("ore_aluminum",[{name: "Ore Aluminum", texture: [["Ore Aluminum", 0]], inCreative: true} ]);
Translation.addTranslation("Ore Aluminum",{
ru: "Алюминиевая руда"
})

Recipes.addFurnace(BlockID.ore_aluminum, ItemID.ingot_aluminum_sc, 0);




// file: Blocks/Ores/ore_quartz_venus.js

IDRegistry.genBlockID("venus_quartz");
Block.createBlock("venus_quartz",[{name: "Venus Quartz", texture: [["Ore Quartz Venus", 0]], inCreative: true} ]);
Translation.addTranslation("Venus Quartz",{
ru: "Венерианский кварц"
})

Recipes.addFurnace(BlockID.venus_quartz, VanillaItemID.quartz, 0);




// file: Blocks/Ores/ore_aluminum_venus.js

IDRegistry.genBlockID("ore_aluminum_venus");
Block.createBlock("ore_aluminum_venus",[{name: "Ore Aluminum Venus", texture: [["Ore Aluminum Venus", 0]], inCreative: true} ]);
Translation.addTranslation("Ore Aluminum Venus",{
ru: "Венерианская алюминиевая руда"
})

Recipes.addFurnace(BlockID.ore_aluminum_venus, ItemID.ingot_aluminum_sc, 0);




// file: Blocks/Ores/moonore_sapphire.js

IDRegistry.genBlockID("moonore_sapphire");
Block.createBlock("moonore_sapphire",[{name: "Lunar Sapphire", texture: [["Moonore Sapphire", 0]], inCreative: true} ]);
Translation.addTranslation("Lunar Sapphire",{
ru: "Лунная сапфирная руда"
})

Block.registerDropFunction("moonore_sapphire", function(coords, blockID){
    return [[ItemID.lunar_sapphire, 1, 0]] 
});




// file: Blocks/Ores/ore_tin_venus.js

IDRegistry.genBlockID("ore_tin_venus");
Block.createBlock("ore_tin_venus",[{name: "Ore Tin Venus", texture: [["Ore Tin Venus", 0]], inCreative: true} ]);
Translation.addTranslation("Ore Tin Venus",{
ru: "Венерианская оловянная руда"
})

Recipes.addFurnace(BlockID.ore_tin_venus, ItemID.ingot_tin_sc, 0);




// file: Blocks/Ores/ore_copper_venus.js

IDRegistry.genBlockID("ore_copper_venus");
Block.createBlock("ore_copper_venus",[{name: "Ore Copper Venus", texture: [["Ore Copper Venus", 0]], inCreative: true} ]);
Translation.addTranslation("Ore Copper Venus",{
ru: "Венерианская медная руда"
})

Recipes.addFurnace(BlockID.ore_copper_venus, ItemID.ingot_copper_sc, 0);




// file: Blocks/Ores/ore_silicon_venus.js

IDRegistry.genBlockID("ore_silicon_venus");
Block.createBlock("ore_silicon_venus",[{name: "Ore Silicon Venus", texture: [["Ore Silicon Venus", 0]], inCreative: true} ]);
Translation.addTranslation("Ore Silicon Venus",{
ru: "Венерианская кремниевая руда"
})

Recipes.addFurnace(BlockID.ore_silicon_venus, ItemID.raw_silicon, 0);




// file: Blocks/Ores/ore_galena.js

IDRegistry.genBlockID("ore_galena");
Block.createBlock("ore_galena",[{name: "Ore Galena", texture: [["Ore Galena", 0]], inCreative: true} ]);
Translation.addTranslation("Ore Galena",{
ru: "Галеновая руда"
})

Recipes.addFurnace(BlockID.ore_galena, ItemID.ingot_lead, 0);




// file: Blocks/Ores/ore_iron_asteroids.js

IDRegistry.genBlockID("ore_iron_asteroids");
Block.createBlock("ore_iron_asteroids",[{name: "Ore Iron Asteroids", texture: [["Ore Iron Asteroids", 0]], inCreative: true} ]);
Translation.addTranslation("Ore Iron Asteroids",{
ru: "Железная руда из астероида"
})

Block.registerDropFunction("ore_iron_asteroids", function(coords, blockID){
    return [[ItemID.shard_iron, 1, 0]] 
});




// file: Blocks/Ores/ore_ilmenite.js

IDRegistry.genBlockID("ore_ilmenite");
Block.createBlock("ore_ilmenite",[{name: "Ore Ilmenite", texture: [["Ore Ilmenite", 0]], inCreative: true} ]);
Translation.addTranslation("Ore Ilmenite",{
ru: "Ильменитовая руда"
})
Recipes.addFurnace(BlockID.ore_ilmenite, ItemID.ingot_titanium, 0);




// file: Blocks/Ores/ore_aluminum_asteroids.js

IDRegistry.genBlockID("ore_aluminum_asteroids");
Block.createBlock("ore_aluminum_asteroids",[{name: "Ore Aluminum Asteroids", texture: [["Ore Aluminum Asteroids", 0]], inCreative: true} ]);
Translation.addTranslation("Ore Aluminum Asteroids",{
ru: "Алюминиевая руда из астероида"
})

Recipes.addFurnace(BlockID.ore_aluminum_asteroids, ItemID.ingot_aluminum_sc, 0);




// file: Blocks/Venus/venus_rock_0.js

IDRegistry.genBlockID("venus_rock_0");
Block.createBlock("venus_rock_0",[{name: "Venus Rock 0", texture: [["Venus Rock 0", 0]], inCreative: true} ]);
Translation.addTranslation("Venus Rock 0",{
ru: "Горячий венерианский камень"
})

IDRegistry.genBlockID("venus_rock_0_slab");
Block.createBlockWithRotation("venus_rock_0_slab",[{name: "Venus Rock 0 Slab", texture: [["Venus Rock 0", 0],["Venus Rock 0", 0],["Venus Rock 0", 0],["Venus Rock 0", 0],["Venus Rock 0", 0],["Venus Rock 0", 0]], inCreative: true} ]);
Translation.addTranslation("Venus Rock 0 Slab",{
ru: "Плита из горячего венерианского камня"
})

TileRenderer.makeSlab(BlockID.venus_rock_0_slab, BlockID.venus_rock_0);

/*
IDRegistry.genBlockID("venus_rock_0_stairs");
Block.createBlockWithRotation("venus_rock_0_stairs",[{name: "Venus Rock 0 Stairs", texture: [["Venus Rock 0", 0]], inCreative: true} ], BLOCK_TYPE_STAIRS);
Translation.addTranslation("Venus Rock 0 Stairs",{
ru: "Ступеньки из горячего венерианского камня"
})
*/

/*IDRegistry.genBlockID("venus_rock_1_stairs");
Block.createBlockWithRotation("venus_rock_1_stairs",[{name: "Venus Rock 1 Stairs", texture: [["Venus Rock 1", 0]], inCreative: true} ], BLOCK_TYPE_STAIRS);
Translation.addTranslation("Venus Rock 1 Stairs",{
ru: "Ступеньки из твёрдого венерианского камня"
})

IDRegistry.genBlockID("venus_rock_2_stairs");
Block.createBlockWithRotation("venus_rock_2_stairs",[{name: "Venus Rock 2 Stairs", texture: [["Venus Rock 2", 0]], inCreative: true} ], BLOCK_TYPE_STAIRS);
Translation.addTranslation("Venus Rock 2 Stairs",{
ru: "Ступеньки из вулканического венерианского камня"
})*/

IDRegistry.genBlockID("venus_rock_0_fence");
Block.createBlock("venus_rock_0_fence",[{name: "Venus Rock 0 Fence", texture: [["Venus Rock 0", 0]], inCreative: true} ], BLOCK_TYPE_FENCE);
Translation.addTranslation("Venus Rock 0 Fence",{
ru: "Забор из горячего венерианского камня"
})

IDRegistry.genBlockID("venus_rock_1_fence");
Block.createBlock("venus_rock_1_fence",[{name: "Venus Rock 1 Fence", texture: [["Venus Rock 1", 0]], inCreative: true} ], BLOCK_TYPE_FENCE);
Translation.addTranslation("Venus Rock 1 Fence",{
ru: "Забор из твёрдого венерианского камня"
})

IDRegistry.genBlockID("venus_rock_2_fence");
Block.createBlock("venus_rock_2_fence",[{name: "Venus Rock 2 Fence", texture: [["Venus Rock 2", 0]], inCreative: true} ], BLOCK_TYPE_FENCE);
Translation.addTranslation("Venus Rock 2 Fence",{
ru: "Забор из вулканического венерианского камня"
})

IDRegistry.genBlockID("venus_rock_1");
Block.createBlock("venus_rock_1",[{name: "Venus Rock venus_rock_1", texture: [["Venus Rock 1", 0]], inCreative: true} ]);
Translation.addTranslation("Venus Rock 1",{
ru: "Твёрдый венерианский камень"
})

IDRegistry.genBlockID("venus_rock_2");
Block.createBlock("venus_rock_2",[{name: "Venus Rock 2", texture: [["Venus Rock 2", 0]], inCreative: true} ]);
Translation.addTranslation("Venus Rock 2",{
ru: "Вулканический венерианский камень"
})



IDRegistry.genBlockID("venus_rock_1_slab");
Block.createBlock("venus_rock_1_slab",[{name: "Venus Rock 1 Slab", texture: [["Venus Rock 1", 0]], inCreative: true} ]);
Translation.addTranslation("Venus Rock 1 Slab",{
ru: "Плита из твёрдого венерианского камня"
})

TileRenderer.makeSlab(BlockID.venus_rock_1_slab, BlockID.venus_rock_1);

TileRenderer.makeSlab(BlockID.venus_rock_0_slab, BlockID.venus_rock_0);

IDRegistry.genBlockID("venus_rock_2_slab");
Block.createBlock("venus_rock_2_slab",[{name: "Venus Rock 2 Slab", texture: [["Venus Rock 2", 0]], inCreative: true} ]);
Translation.addTranslation("Venus Rock 2 Slab",{
ru: "Плита из твёрдого венерианского камня"
})

TileRenderer.makeSlab(BlockID.venus_rock_2_slab, BlockID.venus_rock_2);


var Venusmesh = new RenderMesh(); 
Venusmesh.setBlockTexture("VenusT",0); 
Venusmesh.importFromFile(__dir__+"/models/Venus.obj","obj",null); 
IDRegistry.genBlockID("charged_venus"); 
Block.createBlock("charged_venus", [ 
 {name: "A little Venus", texture: [["VenusT", 0],["VenusT", 1],["VenusT", 2],["VenusT", 3],["VenusT", 4],["VenusT", 5]], inCreative: true} 
]); 
Translation.addTranslation("A little Venus",{
ru: "< Венера >"
});
var Venusrender = new ICRender.Model(); 
Venusrender.addEntry(new BlockRenderer.Model(Venusmesh)); 
BlockRenderer.setStaticICRender(BlockID.charged_venus,0,Venusrender);




// file: Blocks/Moon/lunar_stone.js

IDRegistry.genBlockID("lunar_stone");
Block.createBlock("lunar_stone",[{name: "Lunar Stone", texture: [["Lunar Stone", 0]], inCreative: true} ]);
Translation.addTranslation("Lunar Stone",{
ru: "Лунный камень"
})

IDRegistry.genBlockID("lunar_stone_slab");
Block.createBlock("lunar_stone_slab",[{name: "Lunar Stone Slab", texture: [["Lunar Stone", 0]], inCreative: true} ]);
Translation.addTranslation("Lunar Stone Slab",{
ru: "Плита из лунного камня"
})


TileRenderer.makeSlab(BlockID.lunar_stone_slab, BlockID.lunar_stone);
/*
IDRegistry.genBlockID("lunar_stone_stairs");
Block.createBlockWithRotation("lunar_stone_stairs",[{name: "Lunar Stone Stairs", texture: [["Lunar Stone", 0]], inCreative: true} ], BLOCK_TYPE_STAIRS);
Translation.addTranslation("Lunar Stone Stairs",{
ru: "Лунно-каменные ступеньки"
})*/


IDRegistry.genBlockID("lunar_middle");
Block.createBlock("lunar_middle",[{name: "Lunar Dirt", texture: [["Middle", 0]], inCreative: true} ]);
Translation.addTranslation("Lunar Dirt",{
ru: "Лунная почва"
})

IDRegistry.genBlockID("lunar_middle_slab");
Block.createBlock("lunar_middle_slab",[{name: "Lunar Dirt Slab", texture: [["Middle", 0]], inCreative: true} ]);
Translation.addTranslation("Lunar Dirt Slab",{
ru: "Плита из лунной почвы"
})

TileRenderer.makeSlab(BlockID.lunar_middle_slab, BlockID.lunar_middle);

/*
IDRegistry.genBlockID("lunar_middle_stairs");
Block.createBlockWithRotation("lunar_middle_stairs",[{name: "Lunar Dirt Stairs", texture: [["Middle", 0]], inCreative: true} ], BLOCK_TYPE_STAIRS);
Translation.addTranslation("Lunar Dirt Stairs",{
ru: "Ступеньки из лунной почвы"
})
*/
var moonmesh = new RenderMesh(); 
moonmesh.setBlockTexture("Lunar",0); 
moonmesh.importFromFile(__dir__+"/models/luna.obj","obj",null); 
IDRegistry.genBlockID("charged_moon"); 
Block.createBlock("charged_moon", [ 
 {name: "A little Moon", texture: [["Lunar", 0],["Lunar", 1],["Lunar", 2],["Lunar", 3],["Lunar", 4],["Lunar", 5]], inCreative: true} 
]); 
Translation.addTranslation("A little Moon",{
ru: "< Луна >"
});
var moonrender = new ICRender.Model(); 
moonrender.addEntry(new BlockRenderer.Model(moonmesh)); 
BlockRenderer.setStaticICRender(BlockID.charged_moon,0,moonrender);

IDRegistry.genBlockID("moon_top_side");
Block.createBlock("moon_top_side",[{name: "Lunar Top Side", texture: [["Top Side", 0],["Top", 0],["Top Side", 0],["Top", 0],["Top Side", 0],["Top Side", 0]], inCreative: true} ]);
Translation.addTranslation("Lunar Top Side",{
ru: "Лунный грунт"
})

IDRegistry.genBlockID("moon_top_side_slab");
Block.createBlock("moon_top_side_slab",[{name: "Lunar Top Side Slab", texture: [["Top Side", 0],["Top", 0],["Top Side", 0],["Top", 0],["Top Side", 0],["Top Side", 0]], inCreative: true} ]);
Translation.addTranslation("Lunar Top Side Slab",{
ru: "Плита из лунного грунта"
})


IDRegistry.genBlockID("moon_top_side_stairs");
Block.createBlockWithRotation("moon_top_side_stairs",[{name: "Lunar Top Side Stairs", texture: [["Top Side", 0],["Top", 0],["Top Side", 0],["Top", 0],["Top Side", 0],["Top Side", 0]], inCreative: true} ], BLOCK_TYPE_STAIRS);
Translation.addTranslation("Lunar Top Side Stairs",{
ru: "Ступеньки из лунного грунта"
})

TileRenderer.makeSlab(BlockID.moon_top_side_slab, BlockID.moon_top_side);




// file: Blocks/Ores/decoration_desh.js

IDRegistry.genBlockID("decoration_desh");
Block.createBlock("decoration_desh",[{name: "Desh Block", texture: [["Decoration Desh", 0]], inCreative: true} ]);
Translation.addTranslation("Desh Block",{
ru: "Блок из деша"
})




// file: Blocks/Ores/moon_lapiz.js

IDRegistry.genBlockID("lapiz_moon");
Block.createBlock("lapiz_moon",[{name: "Lapiz Block", texture: [["moonlapiz_block", 0]], inCreative: true} ]);
Translation.addTranslation("Lapiz Block",{
ru: "Лунный сапфирный блок"
})




// file: Blocks/Ores/ore_solar.js

IDRegistry.genBlockID("ore_solar");
Block.createBlock("ore_solar",[{name: "Ore Solar", texture: [["Ore Solar", 0]], inCreative: true} ]);
Translation.addTranslation("Ore Solar",{
ru: "Руда насыщенная солнцем"
})

Block.registerDropFunction("ore_solar", function(coords, blockID){
    return [[ItemID.solar_dust_sc, 1, 0]] 
});




// file: Blocks/Ores/block_titanium.js

IDRegistry.genBlockID("block_titanium");
Block.createBlock("block_titanium",[{name: "Block Titanium", texture: [["Block Titanium", 0]], inCreative: true} ]);
Translation.addTranslation("Block Titanium",{
ru: "Титановый блок из частиц ильменита"
})




// file: Blocks/Mars/cobblestone_mars.js

IDRegistry.genBlockID("cobblestone_mars");
Block.createBlock("cobblestone_mars",[{name: "The Martian Cobblestone", texture: [["Cobblestone Mars", 0]], inCreative: true} ]);
Translation.addTranslation("The Martian Cobblestone",{
ru: "Марсианский булыжник"
})

/*IDRegistry.genBlockID("cobblestone_mars_slab");
Block.createBlock("cobblestone_mars_slab",[{name: "The Martian Cobblestone Slab", texture: [["Cobblestone Mars", 0],["Cobblestone Mars", 0],["Cobblestone Mars", 0],["Cobblestone Mars", 0],["Cobblestone Mars", 0],["Cobblestone Mars", 0]], inCreative: true} ]);
Translation.addTranslation("The Martian Cobblestone Slab",{
ru: "Плита из Марсианского булыжника"
})

TileRenderer.makeSlab(BlockID.cobblestone_mars_slab, BlockID.cobblestone_mars);*/

/*

IDRegistry.genBlockID("cobblestone_mars_stairs");
Block.createBlockWithRotation("cobblestone_mars_stairs",[{name: "The Martian Cobblestone Stairs", texture: [["Cobblestone Mars", 0]], inCreative: true} ]);
Translation.addTranslation("The Martian Cobblestone Stairs",{
ru: "Ступеньки из марсианского булыжника"
})
*/
IDRegistry.genBlockID("dense_ice");
Block.createBlock("dense_ice",[{name: "Dense Ice", texture: [["Dense Ice", 0]], inCreative: true} ]);
Translation.addTranslation("Dense Ice",{
ru: "Плотный лёд"
})

var marsmesh = new RenderMesh(); 
marsmesh.setBlockTexture("Mars",0); 
marsmesh.importFromFile(__dir__+"/models/mars.obj","obj",null); 
IDRegistry.genBlockID("charged_mars"); 
Block.createBlock("charged_mars", [ 
 {name: "A little Mars", texture: [["Mars", 0],["Mars", 1],["Mars", 2],["Mars", 3],["Mars", 4],["Mars", 5]], inCreative: true} 
]); 
Translation.addTranslation("A little Mars",{
ru: "< Марс >"
});
var marsrender = new ICRender.Model(); 
marsrender.addEntry(new BlockRenderer.Model(marsmesh)); 
BlockRenderer.setStaticICRender(BlockID.charged_mars,0,marsrender);

IDRegistry.genBlockID("mars_stone");
Block.createBlock("mars_stone",[{name: "The Martian Stone", texture: [["Bottom Mars", 0]], inCreative: true} ]);
Translation.addTranslation("The Martian Stone",{
ru: "Марсианский камень"
})
/*
IDRegistry.genBlockID("mars_stone_stairs");
Block.createBlockWithRotation("mars_stone_stairs",[{name: "The Martian Stone Stairs", texture: [["Bottom Mars", 0]], inCreative: true} ], BLOCK_TYPE_STAIRS);
Translation.addTranslation("The Martian Stone Stairs",{
ru: "Ступенько из марсианского камня"
})
*/
IDRegistry.genBlockID("mars_stone_fence");
Block.createBlock("mars_stone_fence",[{name: "The Martian Stone Fence", texture: [["Bottom Mars", 0]], inCreative: true} ], BLOCK_TYPE_FENCE);
Translation.addTranslation("The Martian Stone Fence",{
ru: "Забор из марсианского камня"
})

IDRegistry.genBlockID("mars_cobblestone_fence");
Block.createBlock("mars_cobblestone_fence",[{name: "The Martian Cobblestone Fence", texture: [["Bottom Mars", 0]], inCreative: true} ], BLOCK_TYPE_FENCE);
Translation.addTranslation("The Martian Cobblestone Fence",{
ru: "Забор из марсианского булыжника"
})

IDRegistry.genBlockID("mars_stone_slab");
Block.createBlock("mars_stone_slab",[{name: "The Martian Stone Slab", texture: [["Stone Mars", 0]], inCreative: true} ]);
Translation.addTranslation("The Martian Stone Slab",{
ru: "Плита из марсианского камня"
})

TileRenderer.makeSlab(BlockID.mars_stone_slab, BlockID.mars_stone);





// file: Blocks/Ores/block_lead.js

IDRegistry.genBlockID("block_of_lead");
Block.createBlock("block_of_lead",[{name: "Block Lead", texture: [["Block Lead", 0]], inCreative: true} ]);
Translation.addTranslation("Block Lead",{
ru: "Свинцовый блок"
})




// file: Blocks/Ores/desh.js

IDRegistry.genBlockID("desh");
Block.createBlock("desh",[{name: "Desh Ore", texture: [["Desh", 0]], inCreative: true} ]);
Translation.addTranslation("Desh Ore",{
ru: "Деш"
})

Block.registerDropFunction("desh", function(coords, blockID){
    return [[ItemID.raw_desh, 1, 0]] 
});




// file: Blocks/Ores/ore_tin_mars.js

IDRegistry.genBlockID("ore_tin_mars");
Block.createBlock("ore_tin_mars",[{name: "Ore Tin Mars", texture: [["Ore Tin Mars", 0]], inCreative: true} ]);
Translation.addTranslation("Ore Tin Mars",{
ru: "Марсианская оловянная руда"
})

Recipes.addFurnace(BlockID.ore_tin_mars, ItemID.ingot_tin_sc, 0);




// file: Blocks/Ores/ore_copper_mars.js

IDRegistry.genBlockID("ore_copper_mars");
Block.createBlock("ore_copper_mars",[{name: "Ore Copper Mars", texture: [["Ore Copper Mars", 0]], inCreative: true} ]);
Translation.addTranslation("Ore Copper Mars",{
ru: "Медная марсианская руда"
});

Recipes.addFurnace(BlockID.ore_copper_mars, ItemID.ingot_copper_sc, 0);




// file: Blocks/Ores/ore_iron_mars.js

IDRegistry.genBlockID("ore_iron_mars");
Block.createBlock("ore_iron_mars",[{name: "Ore Iron Mars", texture: [["Ore Iron Mars", 0]], inCreative: true} ]);
Translation.addTranslation("Ore Iron Mars",{
ru: "Железная марсианская руда"
})

Block.registerDropFunction("ore_iron_mars", function(coords, blockID){
    return [[ItemID.shard_iron, 1, 0]] 
});




// file: Ores/iron_steel_ingot.js

﻿IDRegistry.genItemID("iron_steel_ingot"); 
Item.createItem("iron_steel_ingot", "Iron Steel Ingot", {name: "Iron Steel Ingot", meta: 0}, {stack: 64});
Translation.addTranslation("Iron Steel Ingot", {
ru: "Железостальной слиток"
});

IDRegistry.genItemID("ingot_steel_spacescraft"); 
Item.createItem("ingot_steel_spacescraft", "Steel Ingot", {name: "Steel Don't Mekanism", meta: 0}, {stack: 64});
Translation.addTranslation("Steel Ingot", {
ru: "Слиток стали"
});

IDRegistry.genItemID("steel_shards");
Item.createItem("steel_shards", "Steel Shards", {name: "Steel Shards", meta: 0}, {stack: 64});
Translation.addTranslation("Steel Shards", {
ru: "Осколки стали"
});




// file: Ores/ingot_lead.js

﻿IDRegistry.genItemID("ingot_lead"); 
Item.createItem("ingot_lead", "Ingot Lead", {name: "Ingot Lead", meta: 0}, {stack: 64});
Translation.addTranslation("Ingot Lead", {
ru: "Свинцовый слиток"
});




// file: Ores/shard_iron.js

﻿IDRegistry.genItemID("shard_iron"); 
Item.createItem("shard_iron", "Shard Iron", {name: "Shard Iron", meta: 0}, {stack: 64});
Translation.addTranslation("Shard Iron", {
ru: "Осколок железа"
});

Recipes.addFurnace(ItemID.shard_iron, 0, ItemID.ingot_copper_sc, 0);




// file: Ores/compressed_titanium.js

﻿IDRegistry.genItemID("compressed_titanium"); 
Item.createItem("compressed_titanium", "Compressed Titanium", {name: "Compressed Titanium", meta: 0}, {stack: 64});
Translation.addTranslation("Compressed Titanium", {
ru: "Сжатый титан"
});




// file: Ores/shard_titanium.js

﻿IDRegistry.genItemID("shard_titanium"); 
Item.createItem("shard_titanium", "Shard Titanium", {name: "Shard Titanium", meta: 0}, {stack: 64});
Translation.addTranslation("Shard Titanium", {
ru: "Осколок титана"
});




// file: Ores/ingot_titanium.js

﻿IDRegistry.genItemID("ingot_titanium"); 
Item.createItem("ingot_titanium", "Ingot Titanium", {name: "Ingot Titanium", meta: 0}, {stack: 64});
Translation.addTranslation("Ingot Titanium", {
ru: "Титановый слиток с частичками ильменита"
});




// file: Ores/ingot_desh.js

﻿IDRegistry.genItemID("ingot_desh"); 
Item.createItem("ingot_desh", "Ingot Desh", {name: "Ingot Desh", meta: 0}, {stack: 64});
Translation.addTranslation("Ingot Desh", {
ru: "Слиток деша"
});




// file: Ores/solar_dust.js

﻿IDRegistry.genItemID("solar_dust_sc"); 
Item.createItem("solar_dust", "Solar Dust", {name: "Solar Dust", meta: 0}, {stack: 64});
Translation.addTranslation("Solar Dust", {
ru: "Пыль из солнечной руды"
});




// file: Ores/dust_titanium.js

﻿IDRegistry.genItemID("dust_titanium"); 
Item.createItem("dust_titanium", "Dust Titanium", {name: "Dust Titanium", meta: 0}, {stack: 64});
Translation.addTranslation("Dust Titanium", {
ru: "Титановая пыль с частичками ильменита"
});




// file: Ores/raw_desh.js

﻿IDRegistry.genItemID("raw_desh"); 
Item.createItem("raw_desh", "Raw Desh", {name: "Raw Desh", meta: 0}, {stack: 64});
Translation.addTranslation("Raw Desh", {
ru: "Необработанный деш"
});

Recipes.addFurnace(ItemID.raw_desh, 0, ItemID.ingot_desh, 0);




// file: SpaceTools/Tools/stick_from_knifes.js

﻿IDRegistry.genItemID("stick_from_knifes"); 
Item.createItem("stick_from_knifes", "A Stick With Blades", {name: "Stick From Knifes", meta: 0}, {stack: 1});
Translation.addTranslation("A Stick With Blades", {
ru: "Палка для разрезания плоти лезвиями"
});




// file: SpaceTools/Tools/knifes.js

﻿IDRegistry.genItemID("blades"); 
Item.createItem("blades", "Blades", {name: "Knifes", meta: 0}, {stack: 1});
Translation.addTranslation("Blades", {
ru: "Лезвия"
});




// file: SpaceTools/Tools/knife.js

﻿IDRegistry.genItemID("blade"); 
Item.createItem("blade", "Blade", {name: "Knife", meta: 0}, {stack: 3});
Translation.addTranslation("Blade", {
ru: "Лезвие"
});
Recipes.addShaped({id: ItemID.blade, count: 1, data: 0}, [
    "a",
    "a",
    ""
], ['a', VanillaItemID.iron_ingot, 0]);




// file: Ores/iron_steel_dust.js

﻿IDRegistry.genItemID("iron_steel_dust"); 
Item.createItem("iron_steel_dust", "Iron Steel Dust", {name: "Iron Steel Dust", meta: 0}, {stack: 64});
Translation.addTranslation("Iron Steel Dust", {
ru: "Пыль из раскрошенной железостали"
});




// file: Blocks/Ores/block_iron_steel.js

IDRegistry.genBlockID("block_iron_steel");
Block.createBlock("block_iron_steel",[{name: "Block Iron Steel", texture: [["Block Iron Steel", 0]], inCreative: true} ]);
Translation.addTranslation("Block Iron Steel",{
ru: "Резной железостальной блок"
})




// file: Ores/desh_plate.js

﻿IDRegistry.genItemID("desh_plate"); 
Item.createItem("desh_plate", "Desh Plate", {name: "Desh Plate", meta: 0}, {stack: 64});
Translation.addTranslation("Desh Plate", {
ru: "Пластина из деша"
});




// file: Ores/reinforced_plate_t2.js

﻿IDRegistry.genItemID("reinforced_plate_t2"); 
Item.createItem("reinforced_plate_t2", "Reinforced Plate 2 lvl", {name: "Reinforced Plate T2", meta: 0}, {stack: 64});
Translation.addTranslation("Reinforced Plate 2 lvl", {
ru: "Усовершенствованная пластина 2-го уровня"
});




// file: Ores/reinforced_plate_t3.js

﻿IDRegistry.genItemID("reinforced_plate_t3"); 
Item.createItem("reinforced_plate_t3", "Reinforced Plate 3 lvl", {name: "Reinforced Plate T3", meta: 0}, {stack: 64});
Translation.addTranslation("Reinforced Plate 3 lvl", {
ru: "Усовершенствованная пластина 3-го уровня"
});




// file: Ores/carbon_fragments.js

﻿IDRegistry.genItemID("carbon_fragments"); 
Item.createItem("carbon_fragments", "Carbon Fragments", {name: "Carbon Fragments", meta: 0}, {stack: 64});
Translation.addTranslation("Carbon Fragments", {
ru: "Фрагментированный углерод"
});




// file: Blocks/Ores/iron_steel_block.js

IDRegistry.genBlockID("iron_steel_block");
Block.createBlock("iron_steel_block",[{name: "Iron Steel Block", texture: [["Iron Steel Block Side", 0],["Iron Steel Block 3", 0],["Iron Steel Block 2", 0],["Iron Steel Block 2", 0],["Iron Steel Block 2", 0],["Iron Steel Block 2", 0]], inCreative: true} ]);
Translation.addTranslation("Iron Steel Block",{
ru: "Железостальной блок"
});




// file: Caution/radioisotope_core.js

﻿IDRegistry.genItemID("radioisotope_core"); 
Item.createItem("radioisotope_core", "Radioisotope Core", {name: "Radioisotope Core", meta: 0}, {stack: 64});
Translation.addTranslation("Radioisotope Core", {
ru: "Радиоизотопное ядро"
});
/*на венере в зондах водится*/




// file: rocket_fins_t2.js

﻿IDRegistry.genItemID("rocket_fins_2"); 

Item.createItem("rocket_fins_2", "Rocket Fins 2 lvl", {name: "Rocket Fins T2", meta: 0}, {stack: 4});

Translation.addTranslation("Rocket Fins 2 lvl", {

ru: "Ступень ракеты 2-го уровня"

});





// file: Blocks/CoiperBelt/coiper_stone.js

IDRegistry.genBlockID("coiper_stone");
Block.createBlock("coiper_stone",[{name: "Coiper Stone", texture: [["Coiper Stone", 0]], inCreative: true} ]);
Translation.addTranslation("Coiper Stone",{
ru: "Метеоритный камень пояса астероидов Койпера"
})




// file: Blocks/CoiperBelt/coiper_grunt.js

IDRegistry.genBlockID("coiper_grunt");
Block.createBlock("coiper_grunt",[{name: "Coiper Grunt", texture: [["Coiper Grunt", 0]], inCreative: true} ]);
Translation.addTranslation("Coiper Grunt",{
ru: "Метеоритный грунт пояса астероидов Койпера"
})




// file: Blocks/CoiperBelt/coldgravetite_block.js

IDRegistry.genBlockID("coldgravetite_block");
Block.createBlock("coldgravetite_block",[{name: "Coldgravetite Block", texture: [["Coldgravetite Block", 0]], inCreative: true} ]);
Translation.addTranslation("Coldgravetite Block",{
ru: "Блок замерзшего граветита"
})




// file: Blocks/CoiperBelt/gravetite_block.js

IDRegistry.genBlockID("gravetite_block");
Block.createBlock("gravetite_block",[{name: "Gravetite Block", texture: [["Gravetite Block", 0]], inCreative: true} ]);
Translation.addTranslation("Gravetite Block",{
ru: "Граветитовый блок"
})




// file: Blocks/CoiperBelt/gravetite_ore.js

IDRegistry.genBlockID("gravetite_ore");
Block.createBlock("gravetite_ore",[{name: "Gravetite Ore", texture: [["Gravetite Prototype", 0]], inCreative: true} ]);
Translation.addTranslation("Gravetite Ore",{
ru: "Граветитовая руда"
});
Item.registerNameOverrideFunction(BlockID.gravetite_ore, function(item, name){
    return Native.Color.BLUE + name + "\n§1" + "Эта руда образовалась очень давно,\nпосле катастроф на станциях,их структура стала из железообразной\n,в кристаллическую,а физика как будто\n стала с ними действовать неправильно";
});
Block.registerDropFunction("gravetite_ore", function(coords, blockID){
    return [[ItemID.gravetite_shard, 3, 0]] 
});

Recipes.addFurnace(ItemID.gravetite_shard, 0, ItemID.gravetite_ingot, 0);




// file: Blocks/CoiperBelt/coldgravetite_ore.js

IDRegistry.genBlockID("coldgravetite_ore");
Block.createBlock("coldgravetite_ore",[{name: "Coldgravetite Ore", texture: [["Coldgravetite Prototype 1", 0],["Coldgravetite Prototype 2", 0],["Coldgravetite Prototype 3", 0],["Coldgravetite Prototype 4", 0],["Coldgravetite Prototype 5", 0],["Coldgravetite Prototype 6", 0]],
inCreative: true} ]);
Translation.addTranslation("Coldgravetite Ore",{
ru: "Замерзшая граветитовая руда"
});
Item.registerNameOverrideFunction(BlockID.coldgravetite_ore, function(item, name){
    return Native.Color.BLUE + name + "\n§1" + "С веками,гравитационная руда замерзала\nи теперь она прочная как стекло,\nи ничто не сможет растопить её";
});
Block.registerDropFunction("coldgravetite_ore", function(coords, blockID){
    return [[ItemID.coldgravetite_shard, 3, 0]] 
});

Recipes.addFurnace(ItemID.coldgravetite_shard, 0, ItemID.coldgravetite_ingot, 0);




// file: Ores/old_plate.js

﻿IDRegistry.genItemID("old_plate"); 
Item.createItem("old_plate", "Old Plate", {name: "Old Plate", meta: 0}, {stack: 64});
Translation.addTranslation("Old Plate", {
ru: "Старая пластина"
});




// file: CoiperBelt/Ores/coldgravetite_ingot.js

﻿IDRegistry.genItemID("coldgravetite_ingot"); 
Item.createItem("coldgravetite_ingot", "Coldgravetite Ingot", {name: "Coldgravetite Ingot", meta: 0}, {stack: 64});
Translation.addTranslation("Coldgravetite Ingot", {
ru: "Замерзший граветитовый слиток"
});




// file: CoiperBelt/Ores/coldgravetite_shard.js

﻿IDRegistry.genItemID("coldgravetite_shard"); 
Item.createItem("coldgravetite_shard", "Coldgravetite Shard", {name: "Coldgravetite Shard", meta: 0}, {stack: 64});
Translation.addTranslation("Coldgravetite Shard", {
ru: "Осколок замерзшего граветита "
});




// file: CoiperBelt/Ores/reinforced_plate_t5.js

﻿IDRegistry.genItemID("reinforced_plate_t5"); 
Item.createItem("reinforced_plate_t5", "Reinforced Plate Of Coldgravetite", {name: "Reinforced Plate T5", meta: 0}, {stack: 64});
Translation.addTranslation("Reinforced Plate Of Coldgravetite", {
ru: "Усовершенствованная пластина 5-го уровня из замерзшего граветита"
});




// file: CoiperBelt/Ores/compressed_coldgravetite.js

﻿IDRegistry.genItemID("compressed_coldgravetite"); 
Item.createItem("compressed_coldgravetite", "Compressed Coldgravetite", {name: "Compressed Coldgravetite", meta: 0}, {stack: 64});
Translation.addTranslation("Compressed Coldgravetite", {
ru: "Сжатый замерзший граветит"
});




// file: CoiperBelt/Ores/gravetite_shard.js

﻿IDRegistry.genItemID("gravetite_shard"); 
Item.createItem("gravetite_shard", "Gravetite Shard", {name: "Gravetite Shard", meta: 0}, {stack: 64});
Translation.addTranslation("Gravetite Shard", {
ru: "Осколок граветита"
});




// file: CoiperBelt/Ores/gravetite_ingot.js

﻿IDRegistry.genItemID("gravetite_ingot"); 
Item.createItem("gravetite_ingot", "Gravetite Ingot", {name: "Gravetite Ingot", meta: 0}, {stack: 64});
Translation.addTranslation("Gravetite Ingot", {
ru: "Граветитовый слиток"
});




// file: CoiperBelt/Ores/gravetite_dust.js

﻿IDRegistry.genItemID("gravetite_dust"); 
Item.createItem("gravetite_dust", "Gravetite Dust", {name: "Gravetite Dust", meta: 0}, {stack: 64});
Translation.addTranslation("Gravetite Dust", {
ru: "Граветитовая пыль"
});




// file: CoiperBelt/Ores/compressed_gravetite.js

﻿IDRegistry.genItemID("compressed_gravetite"); 
Item.createItem("compressed_gravetite", "Compressed Gravetite", {name: "Compressed Gravetite", meta: 0}, {stack: 64});
Translation.addTranslation("Compressed Gravetite", {
ru: "Сжатый граветит"
});




// file: CoiperBelt/Ores/reinforced_plate_t4.js

﻿IDRegistry.genItemID("reinforced_plate_t4"); 
Item.createItem("reinforced_plate_t4", "Reinforced Plate Of Gravetite", {name: "Reinforced Plate T4", meta: 0}, {stack: 64});
Translation.addTranslation("Reinforced Plate Of Gravetite", {
ru: "Усовершенствованная пластина 4-го уровня из граветита"
});




// file: CoiperBelt/Ores/coldgravetite_dust.js

﻿IDRegistry.genItemID("coldgravetite_dust"); 
Item.createItem("coldgravetite_dust", "Coldgravetite Dust", {name: "Coldgravetite Dust", meta: 0}, {stack: 64});
Translation.addTranslation("Coldgravetite Dust", {
ru: "Пыль из замерзшего граветита"
});




// file: CoiperBelt/Arkanite/compressed_arkanite.js

﻿IDRegistry.genItemID("compressed_arkanite"); 
Item.createItem("compressed_arkanite", "Compressed Arkanite", {name: "Compressed Arkanite", meta: 0}, {stack: 64});
Translation.addTranslation("Compressed Arkanite", {
ru: "Сжатый Арканит"
});




// file: CoiperBelt/Arkanite/reinforced_plate_t6.js

﻿IDRegistry.genItemID("reinforced_plate_t6"); 
Item.createItem("reinforced_plate_t6", "Reinforced Plate Of Arkanite", {name: "Reinforced Plate T6", meta: 0}, {stack: 64});
Translation.addTranslation("Reinforced Plate Of Arkanite", {
ru: "Усовершенствованная пластина 6-го уровня из Арканита"
});




// file: Blocks/CoiperBelt/arkanite_ore.js

IDRegistry.genBlockID("arkanite_ore");
Block.createBlock("arkanite_ore",[{name: "Arkanite Ore",texture: [["Arkanite Ore", 0]], inCreative: true} ]);
Translation.addTranslation("Arkanite Ore",{
ru: "Арканитная порода"
});
Item.registerNameOverrideFunction(BlockID.arkanite_ore, function(item, name){
    return Native.Color.GOLD + name + "\n§4" + "Когда-то это был замерзший\n граветит,пока §o§7***************\n,************\n*****************\n§r §4не проникло внутрь,и не расплавило\n этот металл до температуры магмы";
});
Block.registerDropFunction("arkanite_ore", function(coords, blockID){
    return [[ItemID.arkanite_shard, 3, 0]] 
});

Recipes.addFurnace(ItemID.arkanite_shard, 0, ItemID.arkanite_ingot, 0);




// file: CoiperBelt/Arkanite/arkanite_ingot.js

﻿IDRegistry.genItemID("arkanite_ingot"); 
Item.createItem("arkanite_ingot", "Arkanite Ingot", {name: "Arkanite Ingot", meta: 0}, {stack: 64});
Translation.addTranslation("Arkanite Ingot", {
ru: "Слиток из Арканита"
});




// file: CoiperBelt/Arkanite/arkanite_shard.js

﻿IDRegistry.genItemID("arkanite_shard"); 
Item.createItem("arkanite_shard", "Arkanite Shard", {name: "Arkanite Shard", meta: 0}, {stack: 64});
Translation.addTranslation("Arkanite Shard", {
ru: "Осколок Арканита"
});




// file: CoiperBelt/Arkanite/arkanite_dust.js

﻿IDRegistry.genItemID("arkanite_dust"); 
Item.createItem("arkanite_dust", "Arkanite Dust", {name: "Arkanite Dust", meta: 0}, {stack: 64});
Translation.addTranslation("Arkanite Dust", {
ru: "Арканитовая пыль"
});




// file: Blocks/CoiperBelt/arkanite_block.js

IDRegistry.genBlockID("arkanite_block");
Block.createBlock("arkanite_block",[{name: "Arkanite Block", texture: [["Arkanite Block", 0]], inCreative: true} ]);
Translation.addTranslation("Arkanite Block",{
ru: "Блок из Арканита"
})




// file: CoiperBelt/Ores/coiper_ore.js

IDRegistry.genBlockID("coiper_ore");
Block.createBlock("coiper_ore",[{name: "Coiper Ore", texture: [["Coiper Ore", 0]], inCreative: true} ]);
Translation.addTranslation("Coiper Ore",{
ru: "Руда Койпера"
});
Item.registerNameOverrideFunction(BlockID.coiper_ore, function(item, name){
    return Native.Color.BLUE + name + "\n§1" + "Руда, которой лет больше чем вселенной...";
});
Block.registerDropFunction("coiper_ore", function(coords, blockID){
    return [[ItemID.coiper_shard, 3, 0]] 
});




// file: CoiperBelt/Ores/coiper_block.js

IDRegistry.genBlockID("coiper_block");
Block.createBlock("coiper_block",[{name: "Coiper Block", texture: [["Coiper Block", 0]], inCreative: true} ]);
Translation.addTranslation("Coiper Block",{
ru: "Блок из руды Койпера"
})




// file: Ores/desh_stick.js

﻿IDRegistry.genItemID("desh_stick"); 
Item.createItem("desh_stick", "Desh Stick", {name: "Desh Stick", meta: 0}, {stack: 64});
Translation.addTranslation("Desh Stick", {
ru: "Палка из деша"
});




// file: CoiperBelt/volcanic_cooled_rock.js

IDRegistry.genBlockID("volcanic_cooled_rock");
Block.createBlock("volcanic_cooled_rock",[{name: "Volcanic Cooled Rock", texture: [["Volcanic Cooled Rock", 0]], inCreative: true} ]);
Translation.addTranslation("Volcanic Cooled Rock",{
ru: "Вулканическая остывшая порода"
})




// file: Blocks/Mekanisms/coal_generator.js

IDRegistry.genBlockID("coal_generator"); 
Block.createBlockWithRotation("coal_generator", [
 {name: "Coal Generator", texture: [["Machine", 0],["Machine", 0],["Machine", 0],["Coal Generator", 0],["Machine Output", 0],["Machine Output", 0]], inCreative: true} 
]); 
Translation.addTranslation("Coal Generator",{
ru: "Угольный генератор"
})

TileEntity.registerPrototype(BlockID.coal_generator, {
   defaultValues: {
      burn: 0,
      burnMax: 0,
      active: false,
      energy: 0,
      energyMax: 30000,
      isActive: false
   },

   tick: function() {
      let coalSlot = this.container.getSlot("coalSlot");
      var energyStorage = this.getEnergyStorage();
      if (this.data.burn <= 0 && this.data.energy + 30 < energyStorage && (coalSlot.id == VanillaItemID.coal || coalSlot.id == VanillaItemID.charcoal || coalSlot.id == ItemID.burned_coal && coalSlot.count >= 1 && coalSlot.data == 0)) {
         coalSlot.count -= 1;
         this.container.validateSlot("coalSlot");
         this.data.burn = this.data.burnMax = 1600 / 4
      } 
      if (this.data.burn > 0 && this.data.energy + 30 < energyStorage) {
         this.data.energy += 15;
         this.data.burn--;
      }

      this.data.energy = Math.min(this.data.energy, energyStorage);

      this.container.setScale("progress_scale", this.data.energy / 30000);
      this.container.setScale("spaceJoule", this.data.energy / 30000);
      this.container.setText("EnergiA", "Sj :" + this.data.energy + " / " + this.data.energyMax);
      this.container.setScale("crashing", this.data.energy / 30000);
   },

   getGuiScreen: function() {
      return CoalEnergy;
   },

   getEnergyStorage: function() {
      return this.data.energyMax
   },

   canReceiveEnergy: function() {
      return false;
   },

   canExtractEnergy: function() {
      return true;
   },

   energyTick: function(type, src) {
      let output = Math.min(30, this.data.energy);
      this.data.energy += src.add(output) - output;
   }
});

let CoalEnergy = new UI.StandartWindow({
   standart: {
      header: {
         text: {
            text: Translation.translate("Сжигатель уголя")
         }
      },
      inventory: { standart: true },
      background: { standart: true }
   },
   drawing: [
      {
         type: "bitmap",
         x: 490,
         y: 110,
         bitmap: "arrow_bar_background",
         scale: 4.2
    },
      { type: "bitmap", x: 580, y: 110, bitmap: "generators.Crashed_1", scale: 5.0 }, { type: "bitmap", x: 760, y: 110, bitmap: "energy_small_background", scale: 5.0 }],
   elements: {
      coalSlot: {
         type: "slot",
         x: 400,
         y: 110,
         bitmap: "coalslot",
         size: 70
      },
      progress_scale: {
         type: "scale",
         x: 490,
         y: 110,
         scale: 4.2,
         direction: 0,
         bitmap: "arrow_bar_scale"
      },
      crashing: { type: "scale", x: 580, y: 110, direction: 1, bitmap: "generators.Crashed_2", scale: 5.0 },
      trash: { type: "slot", x: 670, y: 110, bitmap: "trashslot", size: 80 },
      spaceJoule: { type: "scale", x: 760, y: 110, scale: 5.0, direction: 1, bitmap: "energy_small_scale" },
      EnergiA: { type: "text", x: 400, y: 190, width: 100, height: 30, text: "Space Joule" },
   }
});
EnergyTileRegistry.addEnergyTypeForId(BlockID.coal_generator, sj);
EnergyTileRegistry.addEnergyTypeForId(BlockID.coal_generator, EU);
EnergyTileRegistry.addEnergyTypeForId(BlockID.coal_generator, RF);
/*
 #1 - slot1
 cr - crashing scale
 =» - progress scale
 $ - trashslot
 √ - spaceJoule
 -----------------
 #1 =» cr $ √
 
 
 
 ---------------
 */
/* SpacesCraft.addElectroLevel(BlockID.coal_generator)*/

/*TileEntity.registerPrototype(BlockID.coal_generator,{defaultValues: {
		progress: 0, 
   progressMax: 0,
   active: false,  
   energy: 0,
   energyMax: 1000,
	},
	isEnergySource: function() {
        return true; 
    },
    canReceiveEnergy: function(){
        return false;
    }, 
    tick: function(){
    this.data.energy += Math.min(1,this.data.energyMax - this.data.energy);
let slot1 = this.container.getSlot("slot1");
let trash = this.container.getSlot("trash");
this.container.setScale("progress_scale", this.data.energy / 1000);
  this.container.setScale("spaceJoule", this.data.energy / 1000);
       this.container.setText("EnergiA", "Sj :" + this.data.energy + " / " + this.data.energyMax);
       this.container.setScale("crashing", this.data.energy / 1000);
    },

	
	getGuiScreen: function(){
		return CoalEnergy; 
	}, 

energyTick: function(type, src) {
	let output = Math.min(2, this.data.energy)
	this.data.energy += src.add(output) - output;
     src.addAll(1)	
}, 
});*/




// file: Blocks/Mekanisms/oxygen_compressor.js

IDRegistry.genBlockID("oxygen_compressor");
Block.createBlockWithRotation("oxygen_compressor",[{name: "Oxygen Compressor", texture: [["Machine", 0],["Machine", 0],["Oxygen Compressor Back", 0],["Oxygen Compressor", 0],["Machine Input", 0],["Machine Oxygen Input", 0]], inCreative: true} ]);
Translation.addTranslation("Oxygen Compressor",{
ru: "Кислородный компрессор"
})

IDRegistry.genBlockID("oxygen_decompressor");
Block.createBlockWithRotation("oxygen_decompressor",[{name: "Oxygen Decompressor", texture: [["Machine", 0],["Machine", 0],["Oxygen Compressor Back", 0],["Oxygen Decompressor", 0],["Machine Input", 0],["Machine Oxygen Input", 0]], inCreative: true} ]);
Translation.addTranslation("Oxygen Decompressor",{
ru: "Кислородный Декомпрессор"
})





// file: Blocks/Mekanisms/compressed_drill.js

IDRegistry.genBlockID("compressed_drill");
Block.createBlockWithRotation("compressed_drill",[{name: "Sort Our The Spare Parts", texture: [["Dangerous Lent", 0],["Compressed Drill", 0],["Compressed Drill Side", 0],["Compressed Drill Off", 0],["Strength Machine", 0],["Port 1", 0]], inCreative: true} ]);
Translation.addTranslation("Sort Our The Spare Parts",{
ru: "Разбиратель на запчасти"
})




// file: Blocks/Mekanisms/workbench_rocket.js


IDRegistry.genBlockID("workbench_rocket");
Block.createBlock("workbench_rocket",[{name: "Workbench Rocket", texture: [["workbench_nasa_side", 0],["rocket_workbench", 0],["workbench_nasa_side", 0],["workbench_nasa_side", 0],["workbench_nasa_side", 0],["workbench_nasa_side", 0]], inCreative: true} ]);
Translation.addTranslation("Workbench Rocket",{
ru: "Верстак НАСА"
});



Block.registerPlaceFunction("workbench_rocket", function(coords, item, block){
	var spaces = coords.relative
     World.setBlock(spaces.x, spaces.y, spaces.z, item.id, item.data); 
     World.setBlock(spaces.x, spaces.y + 1, spaces.z, BlockID.workbench_nasa);
});

Callback.addCallback('DestroyBlock', function (coords, block, player) {
if(block.id == BlockID.workbench_rocket){
	World.setBlock(coords.x, coords.y + 1, coords.z, VanillaBlockID.air);
}
});
Callback.addCallback('DestroyBlock', function (coords, block, player) {
if(block.id == BlockID.workbench_nasa){World.setBlock(coords.x, coords.y - 1, coords.z, VanillaBlockID.air);
}
});



var Workbench1 = {
    recipes: {},
  
   set: function(o1, o2, o3,o4,o5,o6,o7,o8,o9,o10,o11,o12,o13,o14, result){
      this.recipes[JSON.stringify([o1, o2, o3,o4,o5,o6,o7,o8,o9,o10,o11,o12,o13,o14])] = {id: result.id, count: result.count, data: result.data};
},
 
   get: function(o1, o2, o3,o4,o5,o6,o7,o8,o9,o10,o11,o12,o13,o14){
     return this.recipes[JSON.stringify([o1, o2, o3,o4,o5,o6,o7,o8,o9,o10,o11,o12,o13,o14])];
}
};

Workbench1.set(ItemID.nose_cone, ItemID.heavy_plating,ItemID.heavy_plating,ItemID.heavy_plating,ItemID.heavy_plating,ItemID.heavy_plating,ItemID.heavy_plating,ItemID.heavy_plating,ItemID.heavy_plating,ItemID.engine_tier,ItemID.rocket_fins,ItemID.rocket_fins,ItemID.rocket_fins,ItemID.rocket_fins, {
    id: ItemID.rocket, count: 1, data: 0
});


let WorkbencheableUI = new UI.StandartWindow({standart:{header:{text:{text:Translation.translate("Ракетосборочный стол")}},inventory:{standart:true},background:{standart:true}},drawing:[
    {type: "bitmap", x: 725, y: 195, bitmap: "SignRocketbench",scale:3.2
    },
],elements:{slot1:{type:"slot",x:550,y:50,size:50},chestable1:{type:"slot",x:675,y:40,size:50, bitmap: "ChestableSlot"},chestable2:{type:"slot",x:775,y:40,size:50, bitmap: "ChestableSlot"},chestable3:{type:"slot",x:875,y:40,size:50, bitmap: 
"ChestableSlot"},slot2:{type:"slot",x:525,y:100,size:50},slot3:{type:"slot",x:575,y:100,size:50},slot4:{type:"slot",x:525,y:150,size:50},slot5:{type:"slot",x:575,y:150,size:50},slot6:{type:"slot",x:525,y:200,size:50},slot7:{type:"slot",x:575,y:200,size:50},slot8:{type:"slot",x:525,y:250,size:50},slot9:{type:"slot",x:575,y:250,size:50},slotuer1:{type:"slot",x:625,y:250,size:50},slotuer2:{type:"slot",x:625,y:300,size:50},slotuel1:{type:"slot",x:475,y:250,size:50},slotuel2:{type:"slot",x:475,y:300,size:50},slot10:{type:"slot",x:550,y:300,size:50},craftable:{type:"slot",x:775,y:240,size:85, bitmap: "RocketSlots"}}});



TileEntity.registerPrototype(BlockID.workbench_rocket,{
tick:function(){
let a = this.container.getSlot("slot1").id
let b = this.container.getSlot("slot2").id
let c = this.container.getSlot("slot3").id
let d = this.container.getSlot("slot4").id
let e = this.container.getSlot("slot5").id
let f = this.container.getSlot("slot6").id
let g = this.container.getSlot("slot7").id
let h = this.container.getSlot("slot8").id
let i = this.container.getSlot("slot9").id
let j = this.container.getSlot("slot10").id
let k = this.container.getSlot("slotuer1").id
let l = this.container.getSlot("slotuer2").id
let m = this.container.getSlot("slotuel1").id
let n = this.container.getSlot("slotuel2").id
let o = this.container.getSlot("chestable1").id
let p = this.container.getSlot("chestable2").id
let q = this.container.getSlot("chestable3").id
let r = this.container.getSlot("craftable").id
let rec = Workbench1.get(a.id, b.id,c.id,d.id,e.id,f.id,g.id,h.id,i.id,j.id,k.id,l.id,m.id,n.id);
        {
        if(rec!=null) {
   if((((r.id == rec.id && r.data == rec.data) && r.count < 64) || r.id == 0)){
            a.count--;
            b.count--;
            c.count--;
            d.count--;
            e.count--;
           f.count--;
            g.count--;
            h.count--;
            i.count--;
            j.count--;
            k.count--;
            l.count--;
            m.count--;
            n.count--;
            r.id = rec.id;
            r.data = rec.data;
            r.count+= rec.count;
            this.container.validateAll();
          
                }
            }
        }


},
getGuiScreen:function(){return WorkbencheableUI}});
/*  slots:numerations
slotuer:r1,r2.
sltuel:l1,l2.
slotchestable:sc1,sc2,sc3.
craftable:cr.
drawing:SignRocketbench — drsrb.
             #1
           2#-#3   sc1#  sc2#  sc3#
           4#-#5
           6#-#7
        r1#8#-#9#l1  #drsrb
        r2# #10 #l2   #cr
       
          Интерфейс*/

var Workbenchmesh = new RenderMesh(); 
Workbenchmesh.setBlockTexture("assembly",0); 
Workbenchmesh.importFromFile(__dir__+"/models/workbench.obj","obj",null); 
IDRegistry.genBlockID("workbench_nasa"); 
Block.createBlock("workbench_nasa", [ 
 {name: "Workbench Nasa", texture: [["assembly", 0],["assembly", 1],["assembly", 2],["assembly", 3],["assembly", 4],["assembly", 5]], inCreative: true} 
]); 
var Workbenchrender = new ICRender.Model(); 
Workbenchrender.addEntry(new BlockRenderer.Model(Workbenchmesh)); 
BlockRenderer.setStaticICRender(BlockID.workbench_nasa,0,Workbenchrender);

TileEntity.registerPrototype(BlockID.workbench_nasa,{getGuiScreen:function(){return ManipulatorsUI}});


let ManipulatorsUI = new UI.StandartWindow({standart:{header:{text:{text:Translation.translate("Манипуляторная программа")
}},inventory:{standart:true},background:{standart:true}},drawing:[
    {type: "bitmap", x: 500, y:120, bitmap: "ShemaS",scale:4.2
    }],elements:{slot1:{type:"slot",x:583,y:169,size:79}}});
/*          
                
           
          #######
          ##d,s##
          #######
          %%%%%%%
 
          
          Интерфейс*/




// file: Blocks/Mekanisms/PKOff.js

var pkamesh = new RenderMesh(); 
pkamesh.setBlockTexture("PkOf",0); 
pkamesh.importFromFile(__dir__+"/models/PkOff.obj","obj",null); 
IDRegistry.genBlockID("computer_a"); 
Block.createBlock("computer_a", [ 
 {name: "Computer", texture: [["PkOf", 0],["PkOf", 1],["PkOf", 2],["PkOf", 3],["PkOf", 4],["PkOf", 5]], inCreative: true} 
]); 
var pkarender= new ICRender.Model(); 
pkarender.addEntry(new BlockRenderer.Model(pkamesh)); 
BlockRenderer.setStaticICRender(BlockID.computer_a,0,pkarender);
TileEntity.registerPrototype(BlockID.computer_a,{getGuiScreen:function(){return PKOffUI}});


let PKOffUI = new UI.StandartWindow({standart:{header:{text:{text:Translation.translate("SpacesCraft Computer выключен")
}},inventory:{standart:true},background:{standart:true}},drawing:[
    {type: "bitmap", x: 340, y:25, bitmap: "InterFon",scale:2.4
    },{type: "bitmap", x:840,y:315, bitmap:"Ram",scale:3.8}],elements:{buttonoff:{type:"button",x:352,y:350,scale:5.2, bitmap:"PKOf"},chestslot:{type: "button",x:422,y:350,scale:2.5, bitmap:"PressedChest",clicker:{onClick:function(){alert("Обесточено");}}},debugslot:{type:"button",x:492,y:350,scale:2.5, bitmap:"PressedPlanet",clicker:{onClick:function(){alert("Обесточено");}}},PlanetsMonik:{type:"button",x:360,y:120,scale:3.5, bitmap:"DaTuiPravEtoPlanetui",clicker:{onClick:function(){alert("Обесточено");}}},text:{type:"text", x: 360,y:45,size:15,text:" Здравствуйте,в данный момент я выключен,"},text1:{type:"text",x: 360,y:59,size:15,text:" прошу включить меня"}}});




// file: Blocks/Mekanisms/DebugPK.js

var pkbmesh = new RenderMesh(); 
pkbmesh.setBlockTexture("DebugPK",0); 
pkbmesh.importFromFile(__dir__+"/models/DebugComp.obj","obj",null); 
IDRegistry.genBlockID("computer_b"); 
Block.createBlock("computer_b", [ 
 {name: "Computer", texture: [["DebugPK", 0],["DebugPK", 1],["DebugPK", 2],["DebugPK", 3],["DebugPK", 4],["DebugPK", 5]], inCreative: true} 
]); 
var pkbrender= new ICRender.Model(); 
pkbrender.addEntry(new BlockRenderer.Model(pkbmesh)); 
BlockRenderer.setStaticICRender(BlockID.computer_b,0,pkbrender);




// file: Blocks/Mekanisms/ChestablePK.js

var pkcmesh = new RenderMesh(); 
pkcmesh.setBlockTexture("PKStorage",0); 
pkcmesh.importFromFile(__dir__+"/models/PKChest.obj","obj",null); 
IDRegistry.genBlockID("computer_c"); 
Block.createBlock("computer_c", [ 
 {name: "Computer", texture: [["PKStorage", 0],["PKStorage", 1],["PKStorage", 2],["PKStorage", 3],["PKStorage", 4],["PKStorage", 5]], inCreative: true} 
]); 
var pkcrender= new ICRender.Model(); 
pkcrender.addEntry(new BlockRenderer.Model(pkcmesh)); 
BlockRenderer.setStaticICRender(BlockID.computer_c,0,pkcrender);




// file: Blocks/Mekanisms/PKPlanet.js

var pkdmesh = new RenderMesh(); 
pkdmesh.setBlockTexture("PlanetPK",0); 
pkdmesh.importFromFile(__dir__+"/models/PKPlanet.obj","obj",null); 
IDRegistry.genBlockID("computer_d"); 
Block.createBlock("computer_d", [ 
 {name: "Computer", texture: [["PlanetPK", 0],["PlanetPK", 1],["PlanetPK", 2],["PlanetPK", 3],["PlanetPK", 4],["PlanetPK", 5]], inCreative: true} 
]); 
var pkdrender= new ICRender.Model(); 
pkdrender.addEntry(new BlockRenderer.Model(pkdmesh)); 
BlockRenderer.setStaticICRender(BlockID.computer_d,0,pkdrender);




// file: Blocks/Mekanisms/TeleporterToPlanets.js

IDRegistry.genBlockID("creative_teleporter");
Block.createBlockWithRotation("creative_teleporter",[{name: "Teleporter To Planets", texture: [["Machine", 0],["Machine", 0],["Oxygen Compressor Back", 0],["TeleporterPlanets", 0],["Machine", 0],["Machine", 0]], inCreative: true} ]);
Translation.addTranslation("Teleporter To Planets",{
ru: "Телепортер на другие планеты(креативный)"
});

TileEntity.registerPrototype(BlockID.creative_teleporter,{getGuiScreen:function(){return SpacesMap}});
let closse = 0
let groupp = new UI.WindowGroup();
//1е окно
let SpacesMap = new UI.Window({location:{
    x:280,
    y:1000,
    width:1000,
    height:1000
},params:{},
drawing:[
    {type: "bitmap", x: 0, y:0, bitmap: "background_spacemap",scale:1.0
    },{type:"bitmap",x: 280,y:60,bitmap:"Solar",scale:1.0},{type:"bitmap", x:450,y:10, bitmap:"Sol",scale:2.0},{type: "bitmap",x: 240,y:95,bitmap: "earth",scale:0.6},{type: "bitmap",x: 240,y: 145,bitmap: "moon",scale: 3.2},{type:"bitmap",x: 240,y: 195,bitmap: "space_station",scale: 2.0},{type:"bitmap",x: 240,y: 245, bitmap:"mars",scale:2.0},{type: "bitmap",x: 240,y: 295,bitmap: "venus",scale:2.5}],
    elements:{but1:{type:"button",x:40,y:300,scale:2.1, bitmap:"spacemap_linia",bitmap2:"pressedlinia"},but2:{type: "button",x:40,y:350,scale:2.1, bitmap:"spacemap_linia",bitmap2:"pressedlinia",clicker:{onClick:function(){Dimensions.transfer(player, 0);}}},but3:{type:"button",x:40,y:400,scale:2.1, bitmap:"spacemap_linia",bitmap2:"pressedlinia",clicker:{onClick:function(){alert("Обесточено");}}},but4:{type:"button",x:40,y:250,scale:2.1, bitmap:"spacemap_linia",bitmap2:"pressedlinia",clicker:{onClick:function(){
    Dimensions.transfer(player, Mars.id);}}},but5:{type:"button",x:40,y:200,scale:2.1, bitmap:"spacemap_linia",bitmap2:"pressedlinia",clicker:{onClick:function(){alert("Обесточено");}}},
    but6:{type:"button",x:40,y:150,scale:2.1, bitmap:"spacemap_linia",bitmap2:"pressedlinia", clicker:{onClick:function(){
      Dimensions.transfer(player, Moon.id);}}}
    ,but7:{type:"button",x:40,y:100,scale:2.1, bitmap:"spacemap_linia",bitmap2:"pressedlinia",clicker:{onClick:function(){alert("Обесточено");}}},catalog:{type:"button",x:40,y:32,scale:2.4, bitmap:"catalog",bitmap2:"catalogpressed",clicker:{onClick:function(){alert("Обесточено");}}},catalog2:{type:"button",x:660,y:32,scale:2.4, bitmap:"Catalogg",bitmap2:"cataloggpressed",clicker:{onClick:function(){alert("Обесточено");}}},close:{type: "closeButton", x:800, y:100, global: true, bitmap: "exit", bitmap2: "exitpressed", scale:1.9},//текстик
    text1:{type:"text",x:40,y:30,scale:2.1,text:"Test",color: android.api.android.graphics.Color.WHITE}
    }});




// file: Dimensions/Vic_A1.js

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
/*
IDRegistry.genBlockID("vic_a1_stone_stairs");
Block.createBlockWithRotation("vic_a1_stone_stairs",[{name: "Red Vic Stone Stairs", texture: [["Vic Stone", 0]], inCreative: true} ], BLOCK_TYPE_STAIRS);
Translation.addTranslation("Red Vic Stone Stairs",{
ru: "Красно-каменные ступеньки"
});
*/
IDRegistry.genBlockID("vic_a1_stone_big_fence");
Block.createBlock("vic_a1_stone_big_fence",[{name: "Red Vic Stone Big Fence", texture: [["Vic Stone", 0]], inCreative: true} ], BLOCK_TYPE_FENCEE);
Translation.addTranslation("Red Vic Stone Big Fence",{
ru: "Красно-каменная ограда"
});

IDRegistry.genBlockID("vic_a1_stone_fence");
Block.createBlock("vic_a1_stone_fence",[{name: "Red Vic Stone Fence", texture: [["Vic Stone", 0]], inCreative: true} ], BLOCK_TYPE_FENCE);
Translation.addTranslation("Red Vic Stone Fence",{
ru: "Красно-каменный забор"
});

ToolAPI.registerBlockMaterial(BlockID.vic_a1_stone, "stone", 4);

ToolAPI.registerBlockMaterial(BlockID.vic_a1_stone_stairs, "stone", 4);

ToolAPI.registerBlockMaterial(BlockID.vic_a1_stone_big_fence, "stone", 4);

ToolAPI.registerBlockMaterial(BlockID.vic_a1_stone_fence, "stone", 4);

Item.registerNameOverrideFunction(BlockID.vic_a1_stone, function(item, name){
    return Native.Color.RED + name + "\n§6" + "Этот камень очень крепок,\nведь в нём была концентрация прожжённого\n угля,который содержится только на Vic ";
});

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
 
Item.registerNameOverrideFunction(BlockID.vic_a1_stonesand, function(item, name){
    return Native.Color.RED + name + "\n§6" + "При скрещивании песка и камня произошла \nнеобычная реакция минералов,\nи песок закрепился в структуре планеты Vic";
});
 //Камнепесок виса
 
IDRegistry.genBlockID("marble_sc");
Block.createBlock("marble_sc",[{name: "Marble", texture: [["Mramor", 0]], inCreative: true} ]);
Translation.addTranslation("Marble",{
ru: "Мрамор"
});

ToolAPI.registerBlockMaterial(BlockID.marble_sc, "stone", 1);

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
TileRenderer.setPlantModel(BlockID.bush_vic, 0, "Vic Plant", 0);

Item.registerNameOverrideFunction(BlockID.marble_sc, function(item, name){
    return Native.Color.RED + name + "\n§6" + "Под влиянием огромного излучения\n радиации от звезды,\nструктура камня в некоторых местах изменилась,\nпревратившись в мрамор ";
});

IDRegistry.genBlockID("vic_coal");
Block.createBlock("vic_coal",[{name: "Burned Coal Block", texture: [["Vic Coal", 0]], inCreative: true} ]);
Translation.addTranslation("Burned Coal Block",{
ru: "Прожжённый угольный блок"
});

Recipes.addFurnaceFuel(ItemID.burned_coal, 0, 170)

ToolAPI.registerBlockMaterial(BlockID.vic_coal, "stone", 1);

Item.registerNameOverrideFunction(BlockID.vic_coal, function(item, name){
    return Native.Color.RED + name + "\n§6" + "В ряде химических реакций\n под влиянием радиации звезды,\nуголь стал кристализоваться и греться,\nтеперь он вечно горит и не\n плавится от этого. ";
});

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




// file: Dimensions/Vic A 2 - Tantros.js

const SPACE_GRASS = Block.createSpecialType({
    destroytime: 0.1,
    explosionres: 1,
    sound: "grass"
});

const PLANETAR_COBBLE = Block.createSpecialType({
    lightlevel: 4,

});

IDRegistry.genBlockID("vic_tantros_grass");
Block.createBlock("vic_tantros_grass",[{name: "Tantros Grass", texture: [["dirt", 0], ["Tantros Top", 0], ["Tantros Side", 0], ["Tantros Side", 0], ["Tantros Side", 0], ["Tantros Side", 0]], inCreative: true} ], SPACE_GRASS);
Translation.addTranslation("Tantros Grass",{
ru: "Моховидный дёрн «Тантроса»"
});

IDRegistry.genBlockID("vic_tantros_sand");
Block.createBlock("vic_tantros_sand",[{name: "Tantros Grass", texture: [["Tantros Sand", 0]], inCreative: true} ], PLANETAR_SAND);
Translation.addTranslation("Tantros Sand",{
ru: "Песок «Тантроса»"
});

IDRegistry.genBlockID("vic_a2_stone");
Block.createBlock("vic_a2_stone",[{name: "Tantros Stone", texture: [["Tantros Stone", 0]], inCreative: true} ]);
Translation.addTranslation("Tantros Stone",{
ru: "Ситень"
});
/*
IDRegistry.genBlockID("vic_a2_stone_stairs");
Block.createBlockWithRotation("vic_a2_stone_stairs",[{name: "Tantros Stone Stairs", texture: [["Tantros Stone", 0]], inCreative: true} ], BLOCK_TYPE_STAIRS);
Translation.addTranslation("Tantros Stone Stairs",{
ru: "Ситеневые ступеньки"
});*/

IDRegistry.genBlockID("vic_a2_stone_fence");
Block.createBlock("vic_a2_stone_fence",[{name: "Tantros Stone Fence", texture: [["Tantros Stone", 0]], inCreative: true} ], BLOCK_TYPE_FENCE);
Translation.addTranslation("Tantros Stone Fence",{
ru: "Ситеневый забор"
});

IDRegistry.genBlockID("vic_a2_stone_big_fence");
Block.createBlock("vic_a2_stone_big_fence",[{name: "Tantros Stone Big Fence", texture: [["Tantros Stone", 0]], inCreative: true} ], BLOCK_TYPE_FENCEE);
Translation.addTranslation("Tantros Stone Big Fence",{
ru: "Ситеневая ограда"
});

ToolAPI.registerBlockMaterial(BlockID.vic_tantros_grass, "stone", 4);

IDRegistry.genBlockID("vic_a2_coal");
Block.createBlock("vic_a2_coal",[{name: "Coal in Tantros stone", texture: [["Tantros Coal", 0]], inCreative: true} ]);
Translation.addTranslation("Coal in Tantros stone",{
ru: "Уголь в ситене"
});

Block.registerDropFunction("vic_a2_coal", function(coords, blockID){
    return [[VanillaItemID.coal, 1, 0]] 
});

ToolAPI.registerBlockMaterial(BlockID.vic_a2_coal, "stone", 1);

IDRegistry.genBlockID("vic_a2_iron");
Block.createBlock("vic_a2_iron",[{name: "Iron in Tantros stone", texture: [["Tantros Iron", 0]], inCreative: true} ]);
Translation.addTranslation("Iron in Tantros stone",{
ru: "Железо в ситене"
});

ToolAPI.registerBlockMaterial(BlockID.vic_a2_iron, "stone", 2);

Recipes.addFurnace(BlockID.vic_a2_iron, VanillaItemID.iron_ingot, 0);

IDRegistry.genBlockID("vic_a2_gold");
Block.createBlock("vic_a2_gold",[{name: "Gold in Tantros stone", texture: [["Tantros Gold", 0]], inCreative: true} ]);
Translation.addTranslation("Gold in Tantros stone",{
ru: "Золото в ситене"
});

ToolAPI.registerBlockMaterial(BlockID.vic_a2_gold, "stone", 2);

Recipes.addFurnace(BlockID.vic_a2_gold, VanillaItemID.gold_ingot, 0);

IDRegistry.genBlockID("vic_a2_emerald");
Block.createBlock("vic_a2_emerald",[{name: "Emerald in Tantros stone", texture: [["Tantros Emerald", 0]], inCreative: true} ]);
Translation.addTranslation("Emerald in Tantros stone",{
ru: "Изумруд в ситене"
});

ToolAPI.registerBlockMaterial(BlockID.vic_a2_emerald, "stone", 2);

Block.registerDropFunction("vic_a2_emerald", function(coords, blockID){
    return [[VanillaItemID.emerald, 1, 0]] 
});
//дроп
IDRegistry.genBlockID("vic_a2_diamond");
Block.createBlock("vic_a2_diamond",[{name: "Diamond in Tantros stone", texture: [["Tantros Diamond", 0]], inCreative: true} ]);
Translation.addTranslation("Diamond in Tantros stone",{
ru: "Алмаз в ситене"
});

ToolAPI.registerBlockMaterial(BlockID.vic_a2_diamond, "stone", 3);

Block.registerDropFunction("vic_a2_diamond", function(coords, blockID){
    return [[VanillaItemID.diamond, 1, 0]] 
});
//дроп
IDRegistry.genBlockID("vic_a2_torantiy");
Block.createBlock("vic_a2_torantiy",[{name: "Torantiy in Tantros stone", texture: [["Tantros Torantiy", 0]], inCreative: true} ]);
Translation.addTranslation("Torantiy in Tantros stone",{
ru: "Торантий в ситене"
});

ToolAPI.registerBlockMaterial(BlockID.vic_a2_diamond, "stone", 4);


IDRegistry.genBlockID("vic_a2_redstone");
Block.createBlock("vic_a2_redstone",[{name: "Redstone in Tantros stone", texture: [["Tantros Redstone", 0]], inCreative: true} ]);
Translation.addTranslation("Redstone in Tantros stone",{
ru: "Редстоун в ситене"
});

ToolAPI.registerBlockMaterial(BlockID.vic_a2_redstone, "stone", 2);

Block.registerDropFunction("vic_a2_redstone", function(coords, blockID){
    return [[VanillaItemID.redstone, 3, 0]] 
});
//дроп
IDRegistry.genBlockID("vic_a2_lapiz");
Block.createBlock("vic_a2_lapiz",[{name: "Lapiz in Tantros stone", texture: [["Tantros Lapiz", 0]], inCreative: true} ]);
Translation.addTranslation("Lapiz in Tantros stone",{
ru: "Лазурит в ситене"
});

ToolAPI.registerBlockMaterial(BlockID.vic_a2_lapiz, "stone", 2);

Block.registerDropFunction("vic_a2_lapiz", function(coords, blockID){
    return [[VanillaItemID.lapiz, 3, 0]] 
});
//опять дроп :)
IDRegistry.genBlockID("vic_a2_turao");
Block.createBlock("vic_a2_turao",[{name: "Turao", texture: 
  [["Turao Top", 0],
   ["Turao Top", 0], 
   ["Turao", 0],
   ["Turao", 0],
   ["Turao", 0]], inCreative: true} ]);
Translation.addTranslation("Turao",{
ru: "Турао"
});

ToolAPI.registerBlockMaterial(BlockID.vic_a2_turao, "wood", 4);

IDRegistry.genBlockID("vic_a2_turao_leaves");
Block.createBlock("vic_a2_turao_leaves",[{name: "Turao Leaves", texture: [["Turao Leaves", 0]], inCreative: true} ], SPACE_GRASS);
Translation.addTranslation("Turao Leaves",{
ru: "Листья «Турао»"
});

IDRegistry.genBlockID("tantros_short_grass");
Block.createBlock("tantros_short_grass",[{name: "Short Grass", texture: [["Grass Tantros Short", 0]], inCreative: false} ], PLANT);
Translation.addTranslation("Grass Tantros",{
ru: "Короткая трава"
});

IDRegistry.genItemID("tantros_short_grass_1"); 
Item.createItem("tantros_short_grass_1", "Blue Short Grass", {name: "Grass Tantros Short", meta: 0}, {stack: 64});
Translation.addTranslation("Blue Short Grass", {
ru: "Синяя короткая трава"
});

Item.registerUseFunction("tantros_short_grass_1", function(coords, item, block, player){
var region = BlockSource.getDefaultForActor(player);
    var place = coords.relative;
   if(region.getBlockId(place.x,place.y-1,place.z)==BlockID.vic_tantros_grass){ 
        region.setBlock(place.x, place.y, place.z, BlockID.tantros_short_grass);  
         Entity.setCarriedItem(player, item.id, item.count - 1, item.data);
    } 
});
//получаем под ногами моховидный дёрн и предметом ставим блок
IDRegistry.genBlockID("tantros_grass");
Block.createBlock("tantros_grass",[{name: "Grass", texture: [["Grass Tantros", 0]], inCreative: false} ], PLANT);
Translation.addTranslation("Grass Tantros",{
ru: "Трава"
});

IDRegistry.genItemID("tantros_grass_1"); 
Item.createItem("tantros_grass_1", "Blue Grass", {name: "Grass Tantros", meta: 0}, {stack: 64});
Translation.addTranslation("Blue Grass", {
ru: "Синяя трава"
});

Item.registerUseFunction("tantros_grass_1", function(coords, item, block, player){
var region = BlockSource.getDefaultForActor(player);
    var place = coords.relative;
   if(region.getBlockId(place.x,place.y-1,place.z)==BlockID.vic_tantros_grass){ 
        region.setBlock(place.x, place.y, place.z, BlockID.tantros_grass);  
         Entity.setCarriedItem(player, item.id, item.count - 1, item.data);
    } 
});



var GRASS_VIC = new ICRender.CollisionShape();
var entry = GRASS_VIC.addEntry();
entry.addBox( 0, 0, 0, 0,0, 0) 
BlockRenderer.setCustomCollisionShape(BlockID.tantros_grass, -1,GRASS_VIC);
TileRenderer.setPlantModel(BlockID.tantros_grass, 0, "Grass Tantros", 0);
//Тайл рендер
var SHORT_GRASS_VIC = new ICRender.CollisionShape();
var entry = GRASS_VIC.addEntry();
entry.addBox( 0, 0, 0, 0,0, 0) 
BlockRenderer.setCustomCollisionShape(BlockID.tantros_short_grass, -1,SHORT_GRASS_VIC);
TileRenderer.setPlantModel(BlockID.tantros_short_grass, 0, "Grass Tantros Short", 0);

Block.registerDropFunction("tantros_short_grass", function(coords, blockID){
    return [[ItemID.tantros_grass_1, 1, 0]] 
});

Block.registerClickFunction(BlockID.tantros_short_grass, function(coords, item, block, player) {
  if (item.id == VanillaItemID.bone_meal) {
    let can_placing = BlockSource.getDefaultForActor(player);
    can_placing.setBlock(coords.x, coords.y, coords.z, BlockID.tantros_grass);
    Entity.setCarriedItem(player, item.id, item.count - 1, item.data);
  }
});

Block.registerDropFunction("tantros_grass", function(coords, blockID){
    return [[ItemID.tantros_grass_1, 1, 0]] 
});





IDRegistry.genBlockID("tantros_cane");
Block.createBlock("tantros_cane",[{name: "Tantros Cane", texture: [["Tantros Cane", 0]], inCreative: false} ], PLANT);

IDRegistry.genItemID("tantros_cane_1"); 
Item.createItem("tantros_cane_1", "Tantros Cane", {name: "Tantros Cane", meta: 0}, {stack: 64});
Translation.addTranslation("Tantros Cane",{
ru: "Тантросный тростник"
});


Item.registerUseFunction("tantros_cane_1", function(coords, item, block, player){
var region = BlockSource.getDefaultForActor(player);
    var place = coords.relative;
   if(region.getBlockId(place.x,place.y-1,place.z)==BlockID.vic_tantros_sand){ 
        region.setBlock(place.x, place.y, place.z, BlockID.tantros_cane);  
         Entity.setCarriedItem(player, item.id, item.count - 1, item.data);
    } 
});
//ставим инопланетный тростник
ToolAPI.registerBlockMaterial(BlockID.tantros_cane, "plant", 3);

Block.registerDropFunction("tantros_cane", function(coords, blockID){
    return [[ItemID.tantros_cane_1, 1, 0]] 
});

Block.registerClickFunction(BlockID.tantros_cane, function(coords, item, block, player) {
  if (item.id == VanillaItemID.bone_meal) {
    let can_placing = BlockSource.getDefaultForActor(player);
    can_placing.setBlock(coords.x, coords.y+1, coords.z, block.id);
    Entity.setCarriedItem(player, item.id, item.count - 1, item.data);
  }
});

//выращивание тростника костной мукой
if(__config__.getBool("GrassTopping")){
Block.setRandomTickCallback(BlockID.tantros_short_grass, function(x, y, z, id, data) {
        World.setBlock(x, y, z, BlockID.tantros_grass);
});}
//настройка для роста травы
Block.registerClickFunction(BlockID.vic_tantros_grass, function(coords, item, block, player) {
  if (item.id == VanillaItemID.bone_meal) {
    let can_placing = BlockSource.getDefaultForActor(player);
    can_placing.setBlock(coords.x, coords.y+1, coords.z, BlockID.tantros_short_grass);
    Entity.setCarriedItem(player, item.id, item.count - 1, item.data);
  }
});

Block.setRandomTickCallback(BlockID.tantros_cane, function(x, y, z, id, data) {
        World.setBlock(x, y+1, z, id);
});
//рост самого тростника
/*
Block.registerNeighbourChangeFunction(BlockID.tantros_cane, function(coords, block, changedCoords, region) {
  if (World.getBlock(coords.x, coords.y-1, coords.z).id !== BlockID.vic_a1_sand) {
    World.destroyBlock(coords.x, coords.y, coords.z);
    World.drop(coords.x, coords.y, coords.z, ItemID.tantros_cane_1, 1);
  }
});*/
// ломание тростника
var CANE_TANTROS = new ICRender.CollisionShape();
var entry = CANE_TANTROS.addEntry();
entry.addBox( 0, 0, 0, 0,0, 0) 
BlockRenderer.setCustomCollisionShape(BlockID.tantros_cane, -1,CANE_TANTROS);







ToolAPI.registerBlockMaterial(BlockID.vic_a2_turao_leaves, "plant", 3);

IDRegistry.genBlockID("tantros_berry");
Block.createBlock("tantros_berry",[{name: "Tantros Berry", texture: [["Tantros Berry", 0]], inCreative: true} ], PLANT);
Translation.addTranslation("Tantros Berry",{
ru: "Ветка с ягодами «турао»"
});

IDRegistry.genBlockID("turao_planks");
Block.createBlock("turao_planks",[{name: "Turao Planks", texture: [["Turao_planks", 0]], inCreative: true} ]);
Translation.addTranslation("Turao Planks",{
ru: "Тураоумовые доски"
});
/*
IDRegistry.genBlockID("turao_planks_stairs");
Block.createBlockWithRotation("turao_planks_stairs",[{name: "Turao Planks Stairs", texture: [["Turao_planks", 0]], inCreative: true} ], BLOCK_TYPE_STAIRS);
Translation.addTranslation("Turao Planks Stairs",{
ru: "Тураоумовые ступеньки"
});*/

IDRegistry.genBlockID("turao_planks_fence");
Block.createBlock("turao_planks_fence",[{name: "Turao Planks Fence", texture: [["Turao_planks", 0]], inCreative: true} ], BLOCK_TYPE_FENCE);
Translation.addTranslation("Turao Planks Fence",{
ru: "Тураоумовый забор"
});

ToolAPI.registerBlockMaterial(BlockID.turao_planks, "wood", 4);

ToolAPI.registerBlockMaterial(BlockID.turao_planks_stairs, "wood", 4);

ToolAPI.registerBlockMaterial(BlockID.turao_planks_fence, "wood", 4);

Recipes.addShaped({id: BlockID.turao_planks, count: 1, data: 0}, [
    "a"
], ['a', BlockID.vic_a2_turao, 0]);

Recipes.addShaped({id: VanillaBlockID.chest, count: 1, data: 0}, [
    "aaa",
    "a a",
    "aaa"
], ['a', BlockID.turao_planks, 0]);

IDRegistry.genItemID("blue_sugar_sc"); 
Item.createFoodItem("blue_sugar_sc", "Blue Sugar", {name: "Blue Sugar", meta: 0}, {stack: 64, food: 2});
Translation.addTranslation("Blue Sugar", {
ru: "Синий сахар"
});

Recipes.addShaped({id: ItemID.blue_sugar_sc, count: 1, data: 0}, [
    "a"
], ['a', ItemID.tantros_cane_1, 0]);

IDRegistry.genItemID("tantros_berry_1"); 
Item.createFoodItem("tantros_berry_1", "Turao Berry", {name: "Vic A - 2 Berry", meta: 0}, {stack: 64, food: 4});
Translation.addTranslation("Turao Berry", {
ru: "Ягода «Турао»"
});

ToolAPI.registerBlockMaterial(BlockID.tantros_berry, "plant", 3);

TileRenderer.setPlantModel(BlockID.tantros_berry, 0, "Tantros Berry", 0);

var TANTROS_BERRY = new ICRender.CollisionShape();
var entry = TANTROS_BERRY.addEntry();
entry.addBox( 0, 0, 0, 0,0, 0) 
BlockRenderer.setCustomCollisionShape(BlockID.tantros_berry, -1,TANTROS_BERRY);

Block.registerDropFunction("tantros_berry", function(coords, blockID){
    return [[ItemID.tantros_berry_1, 1, 0]] 
});

Item.registerUseFunction("tantros_berry_1", function(coords, item, block, player){
var region = BlockSource.getDefaultForActor(player);
    var place = coords.relative;
   if(region.getBlockId(place.x,place.y+1,place.z)==BlockID.vic_a2_turao_leaves){ 
        region.setBlock(place.x, place.y, place.z, BlockID.tantros_berry);  
         Entity.setCarriedItem(player, item.id, item.count - 1, item.data);
    } 
});

Block.registerClickFunction(BlockID.tantros_berry, function(coords, item, block, player) {
  if (item.id == VanillaItemID.bone_meal) {
   World.drop(coords.x, coords.y, coords.z, ItemID.tantros_berry_1, 1);
    Entity.setCarriedItem(player, item.id, item.count - 1, item.data);
  }
});

var StonesMesh = new RenderMesh(); 
StonesMesh.setBlockTexture("stones_tantros",0); 
StonesMesh.importFromFile(__dir__+"/models/tantros_stones.obj","obj",null); 
IDRegistry.genBlockID("blue_stones"); 
Block.createBlock("blue_stones", [ 
 {name: "Blue Stones Of Tantros", texture: [["stones_tantros", 0],["stones_tantros", 1],["stones_tantros", 2],["stones_tantros", 3],["stones_tantros", 4],["stones_tantros", 5]], inCreative: true} 
], PLANETAR_COBBLE); 
var StonesRender = new ICRender.Model(); 
StonesRender.addEntry(new BlockRenderer.Model(StonesMesh)); 
BlockRenderer.setStaticICRender(BlockID.blue_stones,0,StonesRender);
var STONES_COLISION = new ICRender.CollisionShape();
var entry =STONES_COLISION.addEntry();
entry.addBox( 0, 0, 0, 0,0, 0) 
BlockRenderer.setCustomCollisionShape(BlockID.blue_stones, -1,STONES_COLISION)

Translation.addTranslation("Blue Stones Of Tantros", {
ru: "Синие камни тантроса"
});

var Vic_2 = new CustomBiome ("Vic_2")
.setCoverBlock(BlockID.vic_a1_sand, 0)
.setSurfaceBlock(BlockID.vic_a1_stonesand, 0)
.setFillingBlock(BlockID.vic_a1_stone, 0);
var Vic_Tantros = new Dimensions.CustomDimension("Vic_Tantros", 2006);
Vic_Tantros.setGenerator(Dimensions.newGenerator({
    biome: Vic_2.id,
    layers: [

    {
        minY: 0,
        maxY: 128,
         yConversion: [[1, -0.99], [0.5, -.99], [.9, -0.99], [0.4, -.4], [0, 0.9]
        ],
        material: {
            base: VanillaBlockID.stone,
            surface: {
                id: VanillaBlockID.dirt,
                data: 0,
                width: 5
            },
            cover: BlockID.vic_tantros_grass
        },
        noise: {
            octaves: {
               count: 5,
               scale: 218,
               weight: 1.7
            }
         }     
      },
      { minY: 0,
      	maxY: 1,
      	material: {base: 7}
      }
    ,{ minY: 0,
      	maxY: 25,
      	material: {base: BlockID.vic_a2_stone}}]
}));

Callback.addCallback('ItemUse', function (coords, item, block, is, player) {
if(Entity.getCarriedItem(player).id == 0 && block.id == BlockID.computer_b) {
Dimensions.transfer(player, Vic_Tantros.id);       }})
Callback.addCallback("GenerateCustomDimensionChunk", function(chunkX, chunkZ, random, dimensionId){
if (dimensionId != Vic_Tantros.id) return;
let coords = GenerationUtils.randomCoords(chunkX, chunkZ);
  coords = GenerationUtils.findSurface(coords.x, 128, coords.z);
  if (coords.y < 32) return;
   for(let i=0; i<randomInt(20, 30); i++){
 if(World.getBlockID(coords.x,coords.y,coords.z)==BlockID.vic_tantros_grass){  
World.setBlock(coords.x,coords.y+1,coords.z,BlockID.tantros_grass,0);   
    }
}});

Callback.addCallback("GenerateCustomDimensionChunk", function(chunkX, chunkZ, random, dimensionId){
if (dimensionId != Vic_Tantros.id) return;
let coords = GenerationUtils.randomCoords(chunkX, chunkZ);
  coords = GenerationUtils.findSurface(coords.x, 128, coords.z);
  if (coords.y < 32) return;
   for(let i=0; i<randomInt(70, 160); i++){
 if(World.getBlockID(coords.x,coords.y,coords.z)==BlockID.vic_tantros_grass){  
World.setBlock(coords.x,coords.y+1,coords.z,BlockID.tantros_short_grass,0);   
    }
}});

Callback.addCallback("GenerateCustomDimensionChunk", function(chunkX, chunkZ, random, dimensionId){
if (dimensionId != Vic_Tantros.id) return;
let coords = GenerationUtils.randomCoords(chunkX, chunkZ);
  coords = GenerationUtils.findSurface(coords.x, 128, coords.z);
  if (coords.y < 32) return;
   for(let i=0; i<randomInt(0, 1); i++){
 if(World.getBlockID(coords.x,coords.y,coords.z)==BlockID.vic_tantros_grass){  
World.setBlock(coords.x,coords.y+1,coords.z,BlockID.blue_stones,0);   
    }
}});

Callback.addCallback("GenerateCustomDimensionChunk", function(chunkX, chunkZ, random, dimensionId) { 
 if (dimensionId != Vic_Tantros.id) return; 
 UniqueGen.generateOreInDimension(BlockID.marble_sc, 0, chunkX, chunkZ, random, { 
 veinCounts: 4, 
 minY:2, 
 maxY: 40, 
 size: randomInt(4, 40), 
 mode: true, 
 check: [BlockID.vic_a2_stone] 
 }); 
});

Callback.addCallback("GenerateCustomDimensionChunk", function(chunkX, chunkZ, random, dimensionId) { 
 if (dimensionId != Vic_Tantros.id) return; 
 UniqueGen.generateOreInDimension(BlockID.vic_a2_iron, 0, chunkX, chunkZ, random, { 
 veinCounts: 3, 
 minY:2, 
 maxY: 40, 
 size: randomInt(4, 7), 
 mode: true, 
 check: [BlockID.vic_a2_stone] 
 }); 
});

Callback.addCallback("GenerateCustomDimensionChunk", function(chunkX, chunkZ, random, dimensionId) { 
 if (dimensionId != Vic_Tantros.id) return; 
 UniqueGen.generateOreInDimension(BlockID.vic_a2_redstone, 0, chunkX, chunkZ, random, { 
 veinCounts: 4, 
 minY:2, 
 maxY: 40, 
 size: randomInt(4, 6), 
 mode: true, 
 check: [BlockID.vic_a2_stone] 
 }); 
});

Callback.addCallback("GenerateCustomDimensionChunk", function(chunkX, chunkZ, random, dimensionId) { 
 if (dimensionId != Vic_Tantros.id) return; 
 UniqueGen.generateOreInDimension(BlockID.vic_a2_lapiz, 0, chunkX, chunkZ, random, { 
 veinCounts: 4, 
 minY:2, 
 maxY: 40, 
 size: randomInt(4, 8), 
 mode: true, 
 check: [BlockID.vic_a2_stone] 
 }); 
});

Callback.addCallback("GenerateCustomDimensionChunk", function(chunkX, chunkZ, random, dimensionId) { 
 if (dimensionId != Vic_Tantros.id) return; 
 UniqueGen.generateOreInDimension(BlockID.vic_a2_gold, 0, chunkX, chunkZ, random, { 
 veinCounts: 3, 
 minY:2, 
 maxY: 40, 
 size: randomInt(3, 5), 
 mode: true, 
 check: [BlockID.vic_a2_stone] 
 }); 
});

Callback.addCallback("GenerateCustomDimensionChunk", function(chunkX, chunkZ, random, dimensionId) { 
 if (dimensionId != Vic_Tantros.id) return; 
 UniqueGen.generateOreInDimension(BlockID.vic_a2_emerald, 0, chunkX, chunkZ, random, { 
 veinCounts: 1, 
 minY:2, 
 maxY: 40, 
 size: randomInt(1, 4), 
 mode: true, 
 check: [BlockID.vic_a2_stone] 
 }); 
});

Callback.addCallback("GenerateCustomDimensionChunk", function(chunkX, chunkZ, random, dimensionId) { 
 if (dimensionId != Vic_Tantros.id) return; 
 UniqueGen.generateOreInDimension(BlockID.vic_a2_diamond, 0, chunkX, chunkZ, random, { 
 veinCounts: 5, 
 minY:2, 
 maxY:40, 
 size: randomInt(2, 7), 
 mode: true, 
 check: [BlockID.vic_a2_stone] 
 }); 
});

Callback.addCallback("GenerateCustomDimensionChunk", function(chunkX, chunkZ, random, dimensionId) { 
 if (dimensionId != Vic_Tantros.id) return; 
 UniqueGen.generateOreInDimension(BlockID.vic_a2_coal, 0, chunkX, chunkZ, random, { 
 veinCounts: 4, 
 minY:2, 
 maxY: 40, 
 size: randomInt(1, 6), 
 mode: true, 
 check: [BlockID.vic_a2_stone] 
 }); 
});

Callback.addCallback("GenerateCustomDimensionChunk", function(chunkX, chunkZ, random, dimensionId) { 
 if (dimensionId != Vic_Tantros.id) return; 
 UniqueGen.generateOreInDimension(BlockID.vic_a2_torantiy, 0, chunkX, chunkZ, random, { 
 veinCounts: 2, 
 minY:2, 
 maxY: 40, 
 size: randomInt(1, 4), 
 mode: true, 
 check: [BlockID.vic_a2_stone] 
 }); 
});


Callback.addCallback("GenerateCustomDimensionChunk", function(chunkX, chunkZ, random, dimensionId){
if (dimensionId != Vic_Tantros.id) return;
let coords = GenerationUtils.randomCoords(chunkX, chunkZ);
  coords = GenerationUtils.findSurface(coords.x, 128, coords.z);
  if (coords.y < 32) return;
   for(let i=0; i<randomInt(0, 0.6); i++){
 if(World.getBlockID(coords.x,coords.y,coords.z)==BlockID.vic_tantros_grass){  
World.setBlock(coords.x,coords.y+1,coords.z,BlockID.vic_a2_turao,0);   
World.setBlock(coords.x,coords.y+2,coords.z,BlockID.vic_a2_turao,0);   
World.setBlock(coords.x,coords.y+3,coords.z,BlockID.vic_a2_turao,0);   
World.setBlock(coords.x,coords.y+4,coords.z,BlockID.vic_a2_turao,0);   

World.setBlock(coords.x + 1,coords.y+4,coords.z,BlockID.vic_a2_turao_leaves,0);  
World.setBlock(coords.x - 1,coords.y+4,coords.z,BlockID.vic_a2_turao_leaves,0);   
World.setBlock(coords.x + 1,coords.y+4,coords.z+ 1,BlockID.vic_a2_turao_leaves,0);  
World.setBlock(coords.x - 1,coords.y+4,coords.z- 1,BlockID.vic_a2_turao_leaves,0);  
World.setBlock(coords.x + 1,coords.y+4,coords.z- 1,BlockID.vic_a2_turao_leaves,0);   
World.setBlock(coords.x - 1,coords.y+4,coords.z+ 1,BlockID.vic_a2_turao_leaves,0);  
World.setBlock(coords.x + 1,coords.y+4,coords.z- 1,BlockID.vic_a2_turao_leaves,0);   
World.setBlock(coords.x + 1,coords.y+4,coords.z,BlockID.vic_a2_turao_leaves,0);   
World.setBlock(coords.x - 1,coords.y+4,coords.z,BlockID.vic_a2_turao_leaves,0);   
World.setBlock(coords.x,coords.y+4,coords.z-1,BlockID.vic_a2_turao_leaves,0);   


    }
    World.setBlock(coords.x,coords.y+5,coords.z,BlockID.vic_a2_turao_leaves,0);   
    World.setBlock(coords.x,coords.y+5,coords.z- 1,BlockID.vic_a2_turao_leaves,0); 
    World.setBlock(coords.x,coords.y+5,coords.z+ 1,BlockID.vic_a2_turao_leaves,0);   
    World.setBlock(coords.x - 1,coords.y+5,coords.z,BlockID.vic_a2_turao_leaves,0);   
    World.setBlock(coords.x + 1,coords.y+5,coords.z,BlockID.vic_a2_turao_leaves,0);   
    
    World.setBlock(coords.x,coords.y+6,coords.z,BlockID.vic_a2_turao_leaves,0); 
    
World.setBlock(coords.x + 1,coords.y+3,coords.z,BlockID.tantros_berry,0);  
World.setBlock(coords.x + 1,coords.y+3,coords.z+1,BlockID.tantros_berry,0);  
World.setBlock(coords.x,coords.y+3,coords.z + 1,BlockID.tantros_berry,0);  
World.setBlock(coords.x - 1,coords.y+3,coords.z-1,BlockID.tantros_berry,0);  
}});




// file: Dimensions/Spaces Station.js

/*const AIR_SPACES = Block.createSpecialType({
    solid: false,
    base: 0
});

IDRegistry.genBlockID("space_air");
Block.createBlock("space_air",[{name: "Space Air", texture: [["Space Void", 0]], inCreative: true} ], AIR_SPACES);
Translation.addTranslation("Space Air",{
ru: "Космический воздух"
});

var SPACES_AIR = new ICRender.CollisionShape();
var entry = SPACES_AIR.addEntry();
entry.addBox( 0, 0, 0, 0,0, 0) 
BlockRenderer.setCustomCollisionShape(BlockID.space_air, -1,SPACES_AIR);*/

/*var Spaces = new Dimensions.CustomDimension("Spaces", 2010);
Spaces.setSkyColor(.0, .0, .0);
Spaces.setFogColor(.0, .0, .0);
Spaces.setGenerator(Dimensions.newGenerator({
    layers: [
    {
        minY: 0,
        maxY: 128,
         yConversion: [[0, 0], [0, 0], 
        ],
        material: {
            base: 7,
        },
        noise: {
            octaves: {
               count: 1,
               scale: 0,
            },
        }     
    },{ minY: 0,
       maxY: 1,
       material: {base: 
       7
       	
       }
    }]
}));
Callback.addCallback('ItemUse', function (coords, item, block, is, player) {
if(Entity.getCarriedItem(player).id == 0 && block.id == BlockID.computer_c) {
Dimensions.transfer(player, Spaces.id);        
 }
});
*/ 
   /*Callback.addCallback('LevelDisplayed', function (dimensionId, id, player) {
if(dimensionId == Spaces.id){
	var region = BlockSource.getDefaultForActor(player);
    var place = coords.relative;
    region.setBlock(place.x, place.y-40, place.z, BlockID.deco_block);  
    region.setBlock(place.x-1, place.y-40, place.z, BlockID.deco_block);  
    region.setBlock(place.x, place.y-40, place.z-1, BlockID.deco_block);  
    region.setBlock(place.x-1, place.y-40, place.z-1, BlockID.deco_block);  
    region.setBlock(place.x+1, place.y-40, place.z, BlockID.deco_block);  
    region.setBlock(place.x, place.y-40, place.z+1, BlockID.deco_block);  
    region.setBlock(place.x+1, place.y-40, place.z+1, BlockID.deco_block);  
    region.setBlock(place.x+1, place.y-40, place.z-1, BlockID.deco_block);  
    region.setBlock(place.x-1, place.y-40, place.z+1, BlockID.deco_block);  
    region.setBlock(place.x-2, place.y-40, place.z, BlockID.deco_block);  
    region.setBlock(place.x, place.y-40, place.z-2, BlockID.deco_block);  
    region.setBlock(place.x+2, place.y-40, place.z, BlockID.deco_block);  
    region.setBlock(place.x, place.y-40, place.z+2, BlockID.deco_block);  
    region.setBlock(place.x-2, place.y-40, place.z-2, BlockID.deco_block);  
    region.setBlock(place.x+2, place.y-40, place.z+2, BlockID.deco_block);  
    Player.setPosition(coords.x, coords.y -38, coords.z);
}
});

*/




// file: Dimensions/Moon.js

IMPORT("SoundAPI");
var Moon_Luna = new CustomBiome ("Moon_Luna")
.setSkyColor(android.graphics.Color.rgb(1, 0, 0))
.setCoverBlock(BlockID.moon_top_side, 0)
.setSurfaceBlock(BlockID.middle, 0)
.setFillingBlock(BlockID.lunar_stone, 0);
var Moon = new Dimensions.CustomDimension("Moon", 2000);
Moon.setSkyColor(.0, .0, .0);
Moon.setFogColor(.0, .0, .0);
Moon.setGenerator(Dimensions.newGenerator({
    biome: Moon_Luna.id,
    layers: [

    {
        minY: 0,
        maxY: 128,
         yConversion: [[1, -0.99], [0.5, -.99], [.9, -0.99], [0.4, -.4], [0, 0.8]
        ],
        material: {
            base: BlockID.lunar_stone,
            surface: {
                id: BlockID.middle,
                data: 0,
                width: 4
            },
            cover: BlockID.moon_top_side
        },
        noise: {
            octaves: {
               count: 4,
               scale: 190,
               weight: 2.0
            },
        }     
    },{ minY: 0,
      	maxY: 1,
      	material: {base: 7}}]

}));
Callback.addCallback('ItemUse', function (coords, item, block, is, player) {
if(Entity.getCarriedItem(player).id == 0 && block.id == BlockID.computer_c) {
Dimensions.transfer(player, Moon.id);    
 }
});

Callback.addCallback("GenerateCustomDimensionChunk", function(chunkX, chunkZ, random, dimensionId) { 
 if (dimensionId != Moon.id) return; 
 UniqueGen.generateOreInDimension(BlockID.ore_tin_moon, 0, chunkX, chunkZ, random, { 
 veinCounts: 3, 
 minY:2, 
 maxY:65, 
 size: randomInt(4, 7), 
 mode: true, 
 check: [BlockID.lunar_stone] 
 }); 
});

Callback.addCallback("GenerateCustomDimensionChunk", function(chunkX, chunkZ, random, dimensionId) { 
 if (dimensionId != Moon.id) return; 
 UniqueGen.generateOreInDimension(BlockID.ore_copper_moon, 0, chunkX, chunkZ, random, { 
 veinCounts: 3, 
 minY:2, 
 maxY:65, 
 size: randomInt(4, 7), 
 mode: true, 
 check: [BlockID.lunar_stone] 
 }); 
});

Callback.addCallback("GenerateCustomDimensionChunk", function(chunkX, chunkZ, random, dimensionId) { 
 if (dimensionId != Moon.id) return; 
 UniqueGen.generateOreInDimension(BlockID.moonore_sapphire, 0, chunkX, chunkZ, random, { 
 veinCounts: 2, 
 minY:2, 
 maxY:30, 
 size: randomInt(3, 5), 
 mode: true, 
 check: [BlockID.lunar_stone] 
 }); 
});

Callback.addCallback("GenerateCustomDimensionChunk", function(chunkX, chunkZ, random, dimensionId) {
 if (dimensionId != Moon.id) return; 
 UniqueGen.generateOreInDimension(BlockID.moonore_cheese, 0, chunkX, chunkZ, random, { 
 veinCounts: 3, 
 minY:2, 
 maxY:65, 
 size: randomInt(4, 9), 
 mode: true, 
 check: [BlockID.lunar_stone] 
 }); 
});




// file: Dimensions/Mars.js

var MarsPlains = new CustomBiome ("MarsPlains")
.setSkyColor(android.graphics.Color.rgb(255, 159, 0))
.setCoverBlock(BlockID.mars_stone, 0)
.setSurfaceBlock(BlockID.cobblestone_mars, 0)
.setFillingBlock(BlockID.cobblestone_mars, 0);
var Mars = new Dimensions.CustomDimension("Mars", 2001);
Mars.setSkyColor(255, 159, 0);
Mars.setFogColor(255, 159, 0);
Mars.setGenerator(Dimensions.newGenerator({
    biome: Mars.id,
    layers: [
    {
        minY: 0,
        maxY: 128,
         yConversion: [[1, -0.99], [0.8, -.99], [.9, -0.99], [0.4, -.4], [0, 0.8]
        ],
        material: {
            base: BlockID.cobblestone_mars,
            surface: {
                id: BlockID.cobblestone_mars,
                data: 0,
                width: 4
            },
            cover: BlockID.mars_stone
        },
        noise: {
            octaves: {
               count: 4,
               scale: 260,
               weight: 1.99
               }
        }
    },{ minY: 0,
      	maxY: 1,
      	material: {base: 7}
    }]
}));
Callback.addCallback('ItemUse', function (coords, item, block, is, player) {
if(Entity.getCarriedItem(player).id == 0 && block.id == BlockID.computer_a) {
Dimensions.transfer(player, Mars.id);        
 }
});




// file: API/RenderAPI.js

var RenderAPI = {
    wire: {},
    addGroupWire(id){
      let group = ICRender.getGroup("sj-wire");
      group.add(id, -1);
      let model = new ICRender.Model();
        
      BlockRenderer.setStaticICRender(id, -1, model); 
    },
    setWire(id, width){
      let group = ICRender.getGroup("sj-wire");
      group.add(id, -1);
      let boxes = [
      	{side: [0, 1, 0], box: [0.5 - width / 2, 0.5 + width / 2, 0.5 - width / 2, 0.5 + width / 2, 1, 0.5 + width / 2]}, 
        {side: [0, -1, 0], box: [0.5 - width / 2, 0, 0.5 - width / 2, 0.5 + width / 2, 0.5 - width / 2, 0.5 + width / 2]}, 
    		{side: [0, 0, 1], box: [0.5 - width / 2, 0.5 - width / 2, 0.5 + width / 2, 0.5 + width / 2, 0.5 + width / 2, 1]}, 
        {side: [0, 0, -1], box: [0.5 - width / 2, 0.5 - width / 2, 0, 0.5 + width / 2, 0.5 + width / 2, 0.5 - width / 2]},
        {side: [1, 0, 0], box: [0.5 + width / 2, 0.5 - width / 2, 0.5 - width / 2, 1, 0.5 + width / 2, 0.5 + width / 2]},
        {side: [-1, 0, 0], box: [0, 0.5 - width / 2, 0.5 - width / 2, 0.5 - width / 2, 0.5 + width / 2, 0.5 + width / 2]}
      ];
      let model = new ICRender.Model();
      model.addEntry(new BlockRenderer.Model(0.5 - width / 2, 0.5 - width / 2, 0.5 - width / 2, 0.5 + width / 2, 0.5 + width / 2, 0.5 + width / 2, id, 0)); 
      this.wire[id] = {};
      this.wire[id].boxes = boxes;
      this.wire[id].width = width;
      for(let i in boxes){ 
        let box = boxes[i].box; 
        let side = boxes[i].side; 
        model.addEntry(new BlockRenderer.Model(box[0], box[1], box[2], box[3], box[4], box[5], id, 0)).setCondition(new ICRender.BLOCK(side[0], side[1], side[2], group, false)); 
      }
      this.wire[id].model = model;
      BlockRenderer.setStaticICRender(id, -1, model); 
      BlockRenderer.enableCoordMapping(id, -1, model);
    },
    getModel(id){
    	if(!this.wire[id])
    		return;
    	let model = new ICRender.Model();
    	model.addEntry(new BlockRenderer.Model(0.5 - this.wire[id].width / 2, 0.5 - this.wire[id].width / 2, 0.5 - this.wire[id].width / 2, 0.5 + this.wire[id].width / 2, 0.5 + this.wire[id].width / 2, 0.5 + this.wire[id].width / 2, id, 0)); 
    	for(let i in this.wire[id].boxes){ 
        let box = this.wire[id].boxes[i].box; 
        let side = this.wire[id].boxes[i].side; 
        model.addEntry(new BlockRenderer.Model(box[0], box[1], box[2], box[3], box[4], box[5], id, 0)).setCondition(new ICRender.BLOCK(side[0], side[1], side[2], ICRender.getGroup("sc-wire"), false)); 
      }
      return model;
    }
};
Callback.addCallback("DestroyBlock", function(pos, block, player){
    if(RenderAPI.wire[block.id] || MachineAPI.all[block.id]) BlockRenderer.unmapAtCoords(pos.x, pos.y, pos.z, true);
})
IDRegistry.genBlockID("ImprovedAluminumWireLightBlue");
Block.createBlock("ImprovedAluminumWireLightBlue", [ {name: "Improved Aluminum Wire", texture: [["LightBlueWire", 0]], inCreative: true}]);
RenderAPI.setWire(BlockID.ImprovedAluminumWireLightBlue, 4/16);
sj.registerWire(BlockID.ImprovedAluminumWireLightBlue, 400);
Translation.addTranslation("Improved Aluminum Wire", {
ru: "Улучшенный алюминиевый провод"
})
Item.registerNameOverrideFunction(BlockID.ImprovedAluminumWireLightBlue, function(item, name){
    return Native.Color.White + name + "\n§1" + "Свойства:\n1.Передаёт 400 единиц энергии Space Joule\n2.Крашенный";
});








var RenderAPI = {
    wire: {},
    addGroupWire(id){
      let group = ICRender.getGroup("sj-wire");
      group.add(id, -1);
      let model = new ICRender.Model();
        
      BlockRenderer.setStaticICRender(id, -1, model); 
    },
    setWire(id, width){
      let group = ICRender.getGroup("sj-wire");
      group.add(id, -1);
      let boxes = [
      	{side: [0, 1, 0], box: [0.5 - width / 2, 0.5 + width / 2, 0.5 - width / 2, 0.5 + width / 2, 1, 0.5 + width / 2]}, 
        {side: [0, -1, 0], box: [0.5 - width / 2, 0, 0.5 - width / 2, 0.5 + width / 2, 0.5 - width / 2, 0.5 + width / 2]}, 
    		{side: [0, 0, 1], box: [0.5 - width / 2, 0.5 - width / 2, 0.5 + width / 2, 0.5 + width / 2, 0.5 + width / 2, 1]}, 
        {side: [0, 0, -1], box: [0.5 - width / 2, 0.5 - width / 2, 0, 0.5 + width / 2, 0.5 + width / 2, 0.5 - width / 2]},
        {side: [1, 0, 0], box: [0.5 + width / 2, 0.5 - width / 2, 0.5 - width / 2, 1, 0.5 + width / 2, 0.5 + width / 2]},
        {side: [-1, 0, 0], box: [0, 0.5 - width / 2, 0.5 - width / 2, 0.5 - width / 2, 0.5 + width / 2, 0.5 + width / 2]}
      ];
      let model = new ICRender.Model();
      model.addEntry(new BlockRenderer.Model(0.5 - width / 2, 0.5 - width / 2, 0.5 - width / 2, 0.5 + width / 2, 0.5 + width / 2, 0.5 + width / 2, id, 0)); 
      this.wire[id] = {};
      this.wire[id].boxes = boxes;
      this.wire[id].width = width;
      for(let i in boxes){ 
        let box = boxes[i].box; 
        let side = boxes[i].side; 
        model.addEntry(new BlockRenderer.Model(box[0], box[1], box[2], box[3], box[4], box[5], id, 0)).setCondition(new ICRender.BLOCK(side[0], side[1], side[2], group, false)); 
      }
      this.wire[id].model = model;
      BlockRenderer.setStaticICRender(id, -1, model); 
      BlockRenderer.enableCoordMapping(id, -1, model);
    },
    getModel(id){
    	if(!this.wire[id])
    		return;
    	let model = new ICRender.Model();
    	model.addEntry(new BlockRenderer.Model(0.5 - this.wire[id].width / 2, 0.5 - this.wire[id].width / 2, 0.5 - this.wire[id].width / 2, 0.5 + this.wire[id].width / 2, 0.5 + this.wire[id].width / 2, 0.5 + this.wire[id].width / 2, id, 0)); 
    	for(let i in this.wire[id].boxes){ 
        let box = this.wire[id].boxes[i].box; 
        let side = this.wire[id].boxes[i].side; 
        model.addEntry(new BlockRenderer.Model(box[0], box[1], box[2], box[3], box[4], box[5], id, 0)).setCondition(new ICRender.BLOCK(side[0], side[1], side[2], ICRender.getGroup("sc-wire"), false)); 
      }
      return model;
    }
};
Callback.addCallback("DestroyBlock", function(pos, block, player){
    if(RenderAPI.wire[block.id] || MachineAPI.all[block.id]) BlockRenderer.unmapAtCoords(pos.x, pos.y, pos.z, true);
})
IDRegistry.genBlockID("ImprovedAluminumWire");
Block.createBlock("ImprovedAluminumWire", [ {name: "Improved Aluminum Wire", texture: [["aluminum_wire", 0]], inCreative: true}]);
RenderAPI.setWire(BlockID.ImprovedAluminumWire, 4/16);
sj.registerWire(BlockID.ImprovedAluminumWire, 400);
Translation.addTranslation("Improved Aluminum Wire", {
ru: "Улучшенный алюминиевый провод"
})
Item.registerNameOverrideFunction(BlockID.ImprovedAluminumWire, function(item, name){
    return Native.Color.White + name + "\n§1" + "Свойства:\n1.Передаёт 400 единиц энергии Space Joule\n2.Можно покрасить";
});

















var RenderAPI = {
    wire: {},
    addGroupWire(id){
      let group = ICRender.getGroup("sj-wire");
      group.add(id, -1);
      let model = new ICRender.Model();
        
      BlockRenderer.setStaticICRender(id, -1, model); 
    },
    setWire(id, width){
      let group = ICRender.getGroup("sj-wire");
      group.add(id, -1);
      let boxes = [
      	{side: [0, 1, 0], box: [0.5 - width / 2, 0.5 + width / 2, 0.5 - width / 2, 0.5 + width / 2, 1, 0.5 + width / 2]}, 
        {side: [0, -1, 0], box: [0.5 - width / 2, 0, 0.5 - width / 2, 0.5 + width / 2, 0.5 - width / 2, 0.5 + width / 2]}, 
    		{side: [0, 0, 1], box: [0.5 - width / 2, 0.5 - width / 2, 0.5 + width / 2, 0.5 + width / 2, 0.5 + width / 2, 1]}, 
        {side: [0, 0, -1], box: [0.5 - width / 2, 0.5 - width / 2, 0, 0.5 + width / 2, 0.5 + width / 2, 0.5 - width / 2]},
        {side: [1, 0, 0], box: [0.5 + width / 2, 0.5 - width / 2, 0.5 - width / 2, 1, 0.5 + width / 2, 0.5 + width / 2]},
        {side: [-1, 0, 0], box: [0, 0.5 - width / 2, 0.5 - width / 2, 0.5 - width / 2, 0.5 + width / 2, 0.5 + width / 2]}
      ];
      let model = new ICRender.Model();
      model.addEntry(new BlockRenderer.Model(0.5 - width / 2, 0.5 - width / 2, 0.5 - width / 2, 0.5 + width / 2, 0.5 + width / 2, 0.5 + width / 2, id, 0)); 
      this.wire[id] = {};
      this.wire[id].boxes = boxes;
      this.wire[id].width = width;
      for(let i in boxes){ 
        let box = boxes[i].box; 
        let side = boxes[i].side; 
        model.addEntry(new BlockRenderer.Model(box[0], box[1], box[2], box[3], box[4], box[5], id, 0)).setCondition(new ICRender.BLOCK(side[0], side[1], side[2], group, false)); 
      }
      this.wire[id].model = model;
      BlockRenderer.setStaticICRender(id, -1, model); 
      BlockRenderer.enableCoordMapping(id, -1, model);
    },
    getModel(id){
    	if(!this.wire[id])
    		return;
    	let model = new ICRender.Model();
    	model.addEntry(new BlockRenderer.Model(0.5 - this.wire[id].width / 2, 0.5 - this.wire[id].width / 2, 0.5 - this.wire[id].width / 2, 0.5 + this.wire[id].width / 2, 0.5 + this.wire[id].width / 2, 0.5 + this.wire[id].width / 2, id, 0)); 
    	for(let i in this.wire[id].boxes){ 
        let box = this.wire[id].boxes[i].box; 
        let side = this.wire[id].boxes[i].side; 
        model.addEntry(new BlockRenderer.Model(box[0], box[1], box[2], box[3], box[4], box[5], id, 0)).setCondition(new ICRender.BLOCK(side[0], side[1], side[2], ICRender.getGroup("sc-wire"), false)); 
      }
      return model;
    }
};
Callback.addCallback("DestroyBlock", function(pos, block, player){
    if(RenderAPI.wire[block.id] || MachineAPI.all[block.id]) BlockRenderer.unmapAtCoords(pos.x, pos.y, pos.z, true);
})
IDRegistry.genBlockID("ImprovedAluminumWireDarkLime");
Block.createBlock("ImprovedAluminumWireDarkLime", [ {name: "Improved Aluminum Wire", texture: [["DarkLime", 0]], inCreative: true}]);
RenderAPI.setWire(BlockID.ImprovedAluminumWireDarkLime, 4/16);
sj.registerWire(BlockID.ImprovedAluminumWireDarkLime, 400);
Translation.addTranslation("Improved Aluminum Wire", {
ru: "Улучшенный алюминиевый провод"
})
Item.registerNameOverrideFunction(BlockID.ImprovedAluminumWireDarkLime, function(item, name){
    return Native.Color.White + name + "\n§1" + "Свойства:\n1.Передаёт 400 единиц энергии Space Joule\n2.Крашенный";
});







var RenderAPI = {
    wire: {},
    addGroupWire(id){
      let group = ICRender.getGroup("sj-wire");
      group.add(id, -1);
      let model = new ICRender.Model();
        
      BlockRenderer.setStaticICRender(id, -1, model); 
    },
    setWire(id, width){
      let group = ICRender.getGroup("sj-wire");
      group.add(id, -1);
      let boxes = [
      	{side: [0, 1, 0], box: [0.5 - width / 2, 0.5 + width / 2, 0.5 - width / 2, 0.5 + width / 2, 1, 0.5 + width / 2]}, 
        {side: [0, -1, 0], box: [0.5 - width / 2, 0, 0.5 - width / 2, 0.5 + width / 2, 0.5 - width / 2, 0.5 + width / 2]}, 
    		{side: [0, 0, 1], box: [0.5 - width / 2, 0.5 - width / 2, 0.5 + width / 2, 0.5 + width / 2, 0.5 + width / 2, 1]}, 
        {side: [0, 0, -1], box: [0.5 - width / 2, 0.5 - width / 2, 0, 0.5 + width / 2, 0.5 + width / 2, 0.5 - width / 2]},
        {side: [1, 0, 0], box: [0.5 + width / 2, 0.5 - width / 2, 0.5 - width / 2, 1, 0.5 + width / 2, 0.5 + width / 2]},
        {side: [-1, 0, 0], box: [0, 0.5 - width / 2, 0.5 - width / 2, 0.5 - width / 2, 0.5 + width / 2, 0.5 + width / 2]}
      ];
      let model = new ICRender.Model();
      model.addEntry(new BlockRenderer.Model(0.5 - width / 2, 0.5 - width / 2, 0.5 - width / 2, 0.5 + width / 2, 0.5 + width / 2, 0.5 + width / 2, id, 0)); 
      this.wire[id] = {};
      this.wire[id].boxes = boxes;
      this.wire[id].width = width;
      for(let i in boxes){ 
        let box = boxes[i].box; 
        let side = boxes[i].side; 
        model.addEntry(new BlockRenderer.Model(box[0], box[1], box[2], box[3], box[4], box[5], id, 0)).setCondition(new ICRender.BLOCK(side[0], side[1], side[2], group, false)); 
      }
      this.wire[id].model = model;
      BlockRenderer.setStaticICRender(id, -1, model); 
      BlockRenderer.enableCoordMapping(id, -1, model);
    },
    getModel(id){
    	if(!this.wire[id])
    		return;
    	let model = new ICRender.Model();
    	model.addEntry(new BlockRenderer.Model(0.5 - this.wire[id].width / 2, 0.5 - this.wire[id].width / 2, 0.5 - this.wire[id].width / 2, 0.5 + this.wire[id].width / 2, 0.5 + this.wire[id].width / 2, 0.5 + this.wire[id].width / 2, id, 0)); 
    	for(let i in this.wire[id].boxes){ 
        let box = this.wire[id].boxes[i].box; 
        let side = this.wire[id].boxes[i].side; 
        model.addEntry(new BlockRenderer.Model(box[0], box[1], box[2], box[3], box[4], box[5], id, 0)).setCondition(new ICRender.BLOCK(side[0], side[1], side[2], ICRender.getGroup("sc-wire"), false)); 
      }
      return model;
    }
};
Callback.addCallback("DestroyBlock", function(pos, block, player){
    if(RenderAPI.wire[block.id] || MachineAPI.all[block.id]) BlockRenderer.unmapAtCoords(pos.x, pos.y, pos.z, true);
})
IDRegistry.genBlockID("ImprovedAluminumWireMagenta");
Block.createBlock("ImprovedAluminumWireMagenta", [ {name: "Improved Aluminum Wire", texture: [["Magenta", 0]], inCreative: true}]);
RenderAPI.setWire(BlockID.ImprovedAluminumWireMagenta, 4/16);
sj.registerWire(BlockID.ImprovedAluminumWireMagenta, 400);
Translation.addTranslation("Improved Aluminum Wire", {
ru: "Улучшенный алюминиевый провод"
})
Item.registerNameOverrideFunction(BlockID.ImprovedAluminumWireMagenta, function(item, name){
    return Native.Color.White + name + "\n§1" + "Свойства:\n1.Передаёт 400 единиц энергии Space Joule\n2.Крашенный";
});






var RenderAPI = {
    wire: {},
    addGroupWire(id){
      let group = ICRender.getGroup("sj-wire");
      group.add(id, -1);
      let model = new ICRender.Model();
        
      BlockRenderer.setStaticICRender(id, -1, model); 
    },
    setWire(id, width){
      let group = ICRender.getGroup("sj-wire");
      group.add(id, -1);
      let boxes = [
      	{side: [0, 1, 0], box: [0.5 - width / 2, 0.5 + width / 2, 0.5 - width / 2, 0.5 + width / 2, 1, 0.5 + width / 2]}, 
        {side: [0, -1, 0], box: [0.5 - width / 2, 0, 0.5 - width / 2, 0.5 + width / 2, 0.5 - width / 2, 0.5 + width / 2]}, 
    		{side: [0, 0, 1], box: [0.5 - width / 2, 0.5 - width / 2, 0.5 + width / 2, 0.5 + width / 2, 0.5 + width / 2, 1]}, 
        {side: [0, 0, -1], box: [0.5 - width / 2, 0.5 - width / 2, 0, 0.5 + width / 2, 0.5 + width / 2, 0.5 - width / 2]},
        {side: [1, 0, 0], box: [0.5 + width / 2, 0.5 - width / 2, 0.5 - width / 2, 1, 0.5 + width / 2, 0.5 + width / 2]},
        {side: [-1, 0, 0], box: [0, 0.5 - width / 2, 0.5 - width / 2, 0.5 - width / 2, 0.5 + width / 2, 0.5 + width / 2]}
      ];
      let model = new ICRender.Model();
      model.addEntry(new BlockRenderer.Model(0.5 - width / 2, 0.5 - width / 2, 0.5 - width / 2, 0.5 + width / 2, 0.5 + width / 2, 0.5 + width / 2, id, 0)); 
      this.wire[id] = {};
      this.wire[id].boxes = boxes;
      this.wire[id].width = width;
      for(let i in boxes){ 
        let box = boxes[i].box; 
        let side = boxes[i].side; 
        model.addEntry(new BlockRenderer.Model(box[0], box[1], box[2], box[3], box[4], box[5], id, 0)).setCondition(new ICRender.BLOCK(side[0], side[1], side[2], group, false)); 
      }
      this.wire[id].model = model;
      BlockRenderer.setStaticICRender(id, -1, model); 
      BlockRenderer.enableCoordMapping(id, -1, model);
    },
    getModel(id){
    	if(!this.wire[id])
    		return;
    	let model = new ICRender.Model();
    	model.addEntry(new BlockRenderer.Model(0.5 - this.wire[id].width / 2, 0.5 - this.wire[id].width / 2, 0.5 - this.wire[id].width / 2, 0.5 + this.wire[id].width / 2, 0.5 + this.wire[id].width / 2, 0.5 + this.wire[id].width / 2, id, 0)); 
    	for(let i in this.wire[id].boxes){ 
        let box = this.wire[id].boxes[i].box; 
        let side = this.wire[id].boxes[i].side; 
        model.addEntry(new BlockRenderer.Model(box[0], box[1], box[2], box[3], box[4], box[5], id, 0)).setCondition(new ICRender.BLOCK(side[0], side[1], side[2], ICRender.getGroup("sc-wire"), false)); 
      }
      return model;
    }
};
Callback.addCallback("DestroyBlock", function(pos, block, player){
    if(RenderAPI.wire[block.id] || MachineAPI.all[block.id]) BlockRenderer.unmapAtCoords(pos.x, pos.y, pos.z, true);
})
IDRegistry.genBlockID("ImprovedAluminumWireOrange");
Block.createBlock("ImprovedAluminumWireOrange", [ {name: "Improved Aluminum Wire", texture: [["OrangeCopper", 0]], inCreative: true}]);
RenderAPI.setWire(BlockID.ImprovedAluminumWireOrange, 4/16);
sj.registerWire(BlockID.ImprovedAluminumWireOrange, 400);
Translation.addTranslation("Improved Aluminum Wire", {
ru: "Улучшенный алюминиевый провод"
})
Item.registerNameOverrideFunction(BlockID.ImprovedAluminumWireOrange, function(item, name){
    return Native.Color.White + name + "\n§1" + "Свойства:\n1.Передаёт 400 единиц энергии Space Joule\n2.Крашенный";
});






var RenderAPI = {
    wire: {},
    addGroupWire(id){
      let group = ICRender.getGroup("sj-wire");
      group.add(id, -1);
      let model = new ICRender.Model();
        
      BlockRenderer.setStaticICRender(id, -1, model); 
    },
    setWire(id, width){
      let group = ICRender.getGroup("sj-wire");
      group.add(id, -1);
      let boxes = [
      	{side: [0, 1, 0], box: [0.5 - width / 2, 0.5 + width / 2, 0.5 - width / 2, 0.5 + width / 2, 1, 0.5 + width / 2]}, 
        {side: [0, -1, 0], box: [0.5 - width / 2, 0, 0.5 - width / 2, 0.5 + width / 2, 0.5 - width / 2, 0.5 + width / 2]}, 
    		{side: [0, 0, 1], box: [0.5 - width / 2, 0.5 - width / 2, 0.5 + width / 2, 0.5 + width / 2, 0.5 + width / 2, 1]}, 
        {side: [0, 0, -1], box: [0.5 - width / 2, 0.5 - width / 2, 0, 0.5 + width / 2, 0.5 + width / 2, 0.5 - width / 2]},
        {side: [1, 0, 0], box: [0.5 + width / 2, 0.5 - width / 2, 0.5 - width / 2, 1, 0.5 + width / 2, 0.5 + width / 2]},
        {side: [-1, 0, 0], box: [0, 0.5 - width / 2, 0.5 - width / 2, 0.5 - width / 2, 0.5 + width / 2, 0.5 + width / 2]}
      ];
      let model = new ICRender.Model();
      model.addEntry(new BlockRenderer.Model(0.5 - width / 2, 0.5 - width / 2, 0.5 - width / 2, 0.5 + width / 2, 0.5 + width / 2, 0.5 + width / 2, id, 0)); 
      this.wire[id] = {};
      this.wire[id].boxes = boxes;
      this.wire[id].width = width;
      for(let i in boxes){ 
        let box = boxes[i].box; 
        let side = boxes[i].side; 
        model.addEntry(new BlockRenderer.Model(box[0], box[1], box[2], box[3], box[4], box[5], id, 0)).setCondition(new ICRender.BLOCK(side[0], side[1], side[2], group, false)); 
      }
      this.wire[id].model = model;
      BlockRenderer.setStaticICRender(id, -1, model); 
      BlockRenderer.enableCoordMapping(id, -1, model);
    },
    getModel(id){
    	if(!this.wire[id])
    		return;
    	let model = new ICRender.Model();
    	model.addEntry(new BlockRenderer.Model(0.5 - this.wire[id].width / 2, 0.5 - this.wire[id].width / 2, 0.5 - this.wire[id].width / 2, 0.5 + this.wire[id].width / 2, 0.5 + this.wire[id].width / 2, 0.5 + this.wire[id].width / 2, id, 0)); 
    	for(let i in this.wire[id].boxes){ 
        let box = this.wire[id].boxes[i].box; 
        let side = this.wire[id].boxes[i].side; 
        model.addEntry(new BlockRenderer.Model(box[0], box[1], box[2], box[3], box[4], box[5], id, 0)).setCondition(new ICRender.BLOCK(side[0], side[1], side[2], ICRender.getGroup("sc-wire"), false)); 
      }
      return model;
    }
};
Callback.addCallback("DestroyBlock", function(pos, block, player){
    if(RenderAPI.wire[block.id] || MachineAPI.all[block.id]) BlockRenderer.unmapAtCoords(pos.x, pos.y, pos.z, true);
})
IDRegistry.genBlockID("ImprovedAluminumWireGray");
Block.createBlock("ImprovedAluminumWireGray", [ {name: "Improved Aluminum Wire", texture: [["DemerrorColor", 0]], inCreative: true}]);
RenderAPI.setWire(BlockID.ImprovedAluminumWireGray, 4/16);
sj.registerWire(BlockID.ImprovedAluminumWireGray, 400);
Translation.addTranslation("Improved Aluminum Wire", {
ru: "Улучшенный алюминиевый провод"
})
Item.registerNameOverrideFunction(BlockID.ImprovedAluminumWireGray, function(item, name){
    return Native.Color.White + name + "\n§1" + "Свойства:\n1.Передаёт 400 единиц энергии Space Joule\n2.Крашенный";
});





var RenderAPI = {
    wire: {},
    addGroupWire(id){
      let group = ICRender.getGroup("sj-wire");
      group.add(id, -1);
      let model = new ICRender.Model();
        
      BlockRenderer.setStaticICRender(id, -1, model); 
    },
    setWire(id, width){
      let group = ICRender.getGroup("sj-wire");
      group.add(id, -1);
      let boxes = [
      	{side: [0, 1, 0], box: [0.5 - width / 2, 0.5 + width / 2, 0.5 - width / 2, 0.5 + width / 2, 1, 0.5 + width / 2]}, 
        {side: [0, -1, 0], box: [0.5 - width / 2, 0, 0.5 - width / 2, 0.5 + width / 2, 0.5 - width / 2, 0.5 + width / 2]}, 
    		{side: [0, 0, 1], box: [0.5 - width / 2, 0.5 - width / 2, 0.5 + width / 2, 0.5 + width / 2, 0.5 + width / 2, 1]}, 
        {side: [0, 0, -1], box: [0.5 - width / 2, 0.5 - width / 2, 0, 0.5 + width / 2, 0.5 + width / 2, 0.5 - width / 2]},
        {side: [1, 0, 0], box: [0.5 + width / 2, 0.5 - width / 2, 0.5 - width / 2, 1, 0.5 + width / 2, 0.5 + width / 2]},
        {side: [-1, 0, 0], box: [0, 0.5 - width / 2, 0.5 - width / 2, 0.5 - width / 2, 0.5 + width / 2, 0.5 + width / 2]}
      ];
      let model = new ICRender.Model();
      model.addEntry(new BlockRenderer.Model(0.5 - width / 2, 0.5 - width / 2, 0.5 - width / 2, 0.5 + width / 2, 0.5 + width / 2, 0.5 + width / 2, id, 0)); 
      this.wire[id] = {};
      this.wire[id].boxes = boxes;
      this.wire[id].width = width;
      for(let i in boxes){ 
        let box = boxes[i].box; 
        let side = boxes[i].side; 
        model.addEntry(new BlockRenderer.Model(box[0], box[1], box[2], box[3], box[4], box[5], id, 0)).setCondition(new ICRender.BLOCK(side[0], side[1], side[2], group, false)); 
      }
      this.wire[id].model = model;
      BlockRenderer.setStaticICRender(id, -1, model); 
      BlockRenderer.enableCoordMapping(id, -1, model);
    },
    getModel(id){
    	if(!this.wire[id])
    		return;
    	let model = new ICRender.Model();
    	model.addEntry(new BlockRenderer.Model(0.5 - this.wire[id].width / 2, 0.5 - this.wire[id].width / 2, 0.5 - this.wire[id].width / 2, 0.5 + this.wire[id].width / 2, 0.5 + this.wire[id].width / 2, 0.5 + this.wire[id].width / 2, id, 0)); 
    	for(let i in this.wire[id].boxes){ 
        let box = this.wire[id].boxes[i].box; 
        let side = this.wire[id].boxes[i].side; 
        model.addEntry(new BlockRenderer.Model(box[0], box[1], box[2], box[3], box[4], box[5], id, 0)).setCondition(new ICRender.BLOCK(side[0], side[1], side[2], ICRender.getGroup("sc-wire"), false)); 
      }
      return model;
    }
};
Callback.addCallback("DestroyBlock", function(pos, block, player){
    if(RenderAPI.wire[block.id] || MachineAPI.all[block.id]) BlockRenderer.unmapAtCoords(pos.x, pos.y, pos.z, true);
})
IDRegistry.genBlockID("ImprovedAluminumWireDarkGrey");
Block.createBlock("ImprovedAluminumWireDarkGrey", [ {name: "Improved Aluminum Wire", texture: [["ArtemOnColor", 0]], inCreative: true}]);
RenderAPI.setWire(BlockID.ImprovedAluminumWireDarkGrey, 4/16);
sj.registerWire(BlockID.ImprovedAluminumWireDarkGrey, 400);
Translation.addTranslation("Improved Aluminum Wire", {
ru: "Улучшенный алюминиевый провод"
})
Item.registerNameOverrideFunction(BlockID.ImprovedAluminumWireDarkGrey, function(item, name){
    return Native.Color.White + name + "\n§1" + "Свойства:\n1.Передаёт 400 единиц энергии Space Joule\n2.Крашенный";
});






var RenderAPI = {
    wire: {},
    addGroupWire(id){
      let group = ICRender.getGroup("sj-wire");
      group.add(id, -1);
      let model = new ICRender.Model();
        
      BlockRenderer.setStaticICRender(id, -1, model); 
    },
    setWire(id, width){
      let group = ICRender.getGroup("sj-wire");
      group.add(id, -1);
      let boxes = [
      	{side: [0, 1, 0], box: [0.5 - width / 2, 0.5 + width / 2, 0.5 - width / 2, 0.5 + width / 2, 1, 0.5 + width / 2]}, 
        {side: [0, -1, 0], box: [0.5 - width / 2, 0, 0.5 - width / 2, 0.5 + width / 2, 0.5 - width / 2, 0.5 + width / 2]}, 
    		{side: [0, 0, 1], box: [0.5 - width / 2, 0.5 - width / 2, 0.5 + width / 2, 0.5 + width / 2, 0.5 + width / 2, 1]}, 
        {side: [0, 0, -1], box: [0.5 - width / 2, 0.5 - width / 2, 0, 0.5 + width / 2, 0.5 + width / 2, 0.5 - width / 2]},
        {side: [1, 0, 0], box: [0.5 + width / 2, 0.5 - width / 2, 0.5 - width / 2, 1, 0.5 + width / 2, 0.5 + width / 2]},
        {side: [-1, 0, 0], box: [0, 0.5 - width / 2, 0.5 - width / 2, 0.5 - width / 2, 0.5 + width / 2, 0.5 + width / 2]}
      ];
      let model = new ICRender.Model();
      model.addEntry(new BlockRenderer.Model(0.5 - width / 2, 0.5 - width / 2, 0.5 - width / 2, 0.5 + width / 2, 0.5 + width / 2, 0.5 + width / 2, id, 0)); 
      this.wire[id] = {};
      this.wire[id].boxes = boxes;
      this.wire[id].width = width;
      for(let i in boxes){ 
        let box = boxes[i].box; 
        let side = boxes[i].side; 
        model.addEntry(new BlockRenderer.Model(box[0], box[1], box[2], box[3], box[4], box[5], id, 0)).setCondition(new ICRender.BLOCK(side[0], side[1], side[2], group, false)); 
      }
      this.wire[id].model = model;
      BlockRenderer.setStaticICRender(id, -1, model); 
      BlockRenderer.enableCoordMapping(id, -1, model);
    },
    getModel(id){
    	if(!this.wire[id])
    		return;
    	let model = new ICRender.Model();
    	model.addEntry(new BlockRenderer.Model(0.5 - this.wire[id].width / 2, 0.5 - this.wire[id].width / 2, 0.5 - this.wire[id].width / 2, 0.5 + this.wire[id].width / 2, 0.5 + this.wire[id].width / 2, 0.5 + this.wire[id].width / 2, id, 0)); 
    	for(let i in this.wire[id].boxes){ 
        let box = this.wire[id].boxes[i].box; 
        let side = this.wire[id].boxes[i].side; 
        model.addEntry(new BlockRenderer.Model(box[0], box[1], box[2], box[3], box[4], box[5], id, 0)).setCondition(new ICRender.BLOCK(side[0], side[1], side[2], ICRender.getGroup("sc-wire"), false)); 
      }
      return model;
    }
};
Callback.addCallback("DestroyBlock", function(pos, block, player){
    if(RenderAPI.wire[block.id] || MachineAPI.all[block.id]) BlockRenderer.unmapAtCoords(pos.x, pos.y, pos.z, true);
})
IDRegistry.genBlockID("ImprovedAluminumWireRed");
Block.createBlock("ImprovedAluminumWireRed", [ {name: "Improved Aluminum Wire", texture: [["Red", 0]], inCreative: true}]);
RenderAPI.setWire(BlockID.ImprovedAluminumWireRed, 4/16);
sj.registerWire(BlockID.ImprovedAluminumWireRed, 400);
Translation.addTranslation("Improved Aluminum Wire", {
ru: "Улучшенный алюминиевый провод"
})
Item.registerNameOverrideFunction(BlockID.ImprovedAluminumWireRed, function(item, name){
    return Native.Color.White + name + "\n§1" + "Свойства:\n1.Передаёт 400 единиц энергии Space Joule\n2.Крашенный";
});





var RenderAPI = {
    wire: {},
    addGroupWire(id){
      let group = ICRender.getGroup("sj-wire");
      group.add(id, -1);
      let model = new ICRender.Model();
        
      BlockRenderer.setStaticICRender(id, -1, model); 
    },
    setWire(id, width){
      let group = ICRender.getGroup("sj-wire");
      group.add(id, -1);
      let boxes = [
      	{side: [0, 1, 0], box: [0.5 - width / 2, 0.5 + width / 2, 0.5 - width / 2, 0.5 + width / 2, 1, 0.5 + width / 2]}, 
        {side: [0, -1, 0], box: [0.5 - width / 2, 0, 0.5 - width / 2, 0.5 + width / 2, 0.5 - width / 2, 0.5 + width / 2]}, 
    		{side: [0, 0, 1], box: [0.5 - width / 2, 0.5 - width / 2, 0.5 + width / 2, 0.5 + width / 2, 0.5 + width / 2, 1]}, 
        {side: [0, 0, -1], box: [0.5 - width / 2, 0.5 - width / 2, 0, 0.5 + width / 2, 0.5 + width / 2, 0.5 - width / 2]},
        {side: [1, 0, 0], box: [0.5 + width / 2, 0.5 - width / 2, 0.5 - width / 2, 1, 0.5 + width / 2, 0.5 + width / 2]},
        {side: [-1, 0, 0], box: [0, 0.5 - width / 2, 0.5 - width / 2, 0.5 - width / 2, 0.5 + width / 2, 0.5 + width / 2]}
      ];
      let model = new ICRender.Model();
      model.addEntry(new BlockRenderer.Model(0.5 - width / 2, 0.5 - width / 2, 0.5 - width / 2, 0.5 + width / 2, 0.5 + width / 2, 0.5 + width / 2, id, 0)); 
      this.wire[id] = {};
      this.wire[id].boxes = boxes;
      this.wire[id].width = width;
      for(let i in boxes){ 
        let box = boxes[i].box; 
        let side = boxes[i].side; 
        model.addEntry(new BlockRenderer.Model(box[0], box[1], box[2], box[3], box[4], box[5], id, 0)).setCondition(new ICRender.BLOCK(side[0], side[1], side[2], group, false)); 
      }
      this.wire[id].model = model;
      BlockRenderer.setStaticICRender(id, -1, model); 
      BlockRenderer.enableCoordMapping(id, -1, model);
    },
    getModel(id){
    	if(!this.wire[id])
    		return;
    	let model = new ICRender.Model();
    	model.addEntry(new BlockRenderer.Model(0.5 - this.wire[id].width / 2, 0.5 - this.wire[id].width / 2, 0.5 - this.wire[id].width / 2, 0.5 + this.wire[id].width / 2, 0.5 + this.wire[id].width / 2, 0.5 + this.wire[id].width / 2, id, 0)); 
    	for(let i in this.wire[id].boxes){ 
        let box = this.wire[id].boxes[i].box; 
        let side = this.wire[id].boxes[i].side; 
        model.addEntry(new BlockRenderer.Model(box[0], box[1], box[2], box[3], box[4], box[5], id, 0)).setCondition(new ICRender.BLOCK(side[0], side[1], side[2], ICRender.getGroup("sc-wire"), false)); 
      }
      return model;
    }
};
Callback.addCallback("DestroyBlock", function(pos, block, player){
    if(RenderAPI.wire[block.id] || MachineAPI.all[block.id]) BlockRenderer.unmapAtCoords(pos.x, pos.y, pos.z, true);
})
IDRegistry.genBlockID("ImprovedAluminumWirePink");
Block.createBlock("ImprovedAluminumWirePink", [ {name: "Improved Aluminum Wire", texture: [["Pink", 0]], inCreative: true}]);
RenderAPI.setWire(BlockID.ImprovedAluminumWirePink, 4/16);
sj.registerWire(BlockID.ImprovedAluminumWirePink, 400);
Translation.addTranslation("Improved Aluminum Wire", {
ru: "Улучшенный алюминиевый провод"
})
Item.registerNameOverrideFunction(BlockID.ImprovedAluminumWirePink, function(item, name){
    return Native.Color.White + name + "\n§1" + "Свойства:\n1.Передаёт 400 единиц энергии Space Joule\n2.Крашенный";
});







var RenderAPI = {
    wire: {},
    addGroupWire(id){
      let group = ICRender.getGroup("sj-wire");
      group.add(id, -1);
      let model = new ICRender.Model();
        
      BlockRenderer.setStaticICRender(id, -1, model); 
    },
    setWire(id, width){
      let group = ICRender.getGroup("sj-wire");
      group.add(id, -1);
      let boxes = [
      	{side: [0, 1, 0], box: [0.5 - width / 2, 0.5 + width / 2, 0.5 - width / 2, 0.5 + width / 2, 1, 0.5 + width / 2]}, 
        {side: [0, -1, 0], box: [0.5 - width / 2, 0, 0.5 - width / 2, 0.5 + width / 2, 0.5 - width / 2, 0.5 + width / 2]}, 
    		{side: [0, 0, 1], box: [0.5 - width / 2, 0.5 - width / 2, 0.5 + width / 2, 0.5 + width / 2, 0.5 + width / 2, 1]}, 
        {side: [0, 0, -1], box: [0.5 - width / 2, 0.5 - width / 2, 0, 0.5 + width / 2, 0.5 + width / 2, 0.5 - width / 2]},
        {side: [1, 0, 0], box: [0.5 + width / 2, 0.5 - width / 2, 0.5 - width / 2, 1, 0.5 + width / 2, 0.5 + width / 2]},
        {side: [-1, 0, 0], box: [0, 0.5 - width / 2, 0.5 - width / 2, 0.5 - width / 2, 0.5 + width / 2, 0.5 + width / 2]}
      ];
      let model = new ICRender.Model();
      model.addEntry(new BlockRenderer.Model(0.5 - width / 2, 0.5 - width / 2, 0.5 - width / 2, 0.5 + width / 2, 0.5 + width / 2, 0.5 + width / 2, id, 0)); 
      this.wire[id] = {};
      this.wire[id].boxes = boxes;
      this.wire[id].width = width;
      for(let i in boxes){ 
        let box = boxes[i].box; 
        let side = boxes[i].side; 
        model.addEntry(new BlockRenderer.Model(box[0], box[1], box[2], box[3], box[4], box[5], id, 0)).setCondition(new ICRender.BLOCK(side[0], side[1], side[2], group, false)); 
      }
      this.wire[id].model = model;
      BlockRenderer.setStaticICRender(id, -1, model); 
      BlockRenderer.enableCoordMapping(id, -1, model);
    },
    getModel(id){
    	if(!this.wire[id])
    		return;
    	let model = new ICRender.Model();
    	model.addEntry(new BlockRenderer.Model(0.5 - this.wire[id].width / 2, 0.5 - this.wire[id].width / 2, 0.5 - this.wire[id].width / 2, 0.5 + this.wire[id].width / 2, 0.5 + this.wire[id].width / 2, 0.5 + this.wire[id].width / 2, id, 0)); 
    	for(let i in this.wire[id].boxes){ 
        let box = this.wire[id].boxes[i].box; 
        let side = this.wire[id].boxes[i].side; 
        model.addEntry(new BlockRenderer.Model(box[0], box[1], box[2], box[3], box[4], box[5], id, 0)).setCondition(new ICRender.BLOCK(side[0], side[1], side[2], ICRender.getGroup("sc-wire"), false)); 
      }
      return model;
    }
};
Callback.addCallback("DestroyBlock", function(pos, block, player){
    if(RenderAPI.wire[block.id] || MachineAPI.all[block.id]) BlockRenderer.unmapAtCoords(pos.x, pos.y, pos.z, true);
})
IDRegistry.genBlockID("ImprovedAluminumWireBlue");
Block.createBlock("ImprovedAluminumWireBlue", [ {name: "Improved Aluminum Wire", texture: [["Blue", 0]], inCreative: true}]);
RenderAPI.setWire(BlockID.ImprovedAluminumWireBlue, 4/16);
sj.registerWire(BlockID.ImprovedAluminumWireBlue, 400);
Translation.addTranslation("Improved Aluminum Wire", {
ru: "Улучшенный алюминиевый провод"
})
Item.registerNameOverrideFunction(BlockID.ImprovedAluminumWireBlue, function(item, name){
    return Native.Color.White + name + "\n§1" + "Свойства:\n1.Передаёт 400 единиц энергии Space Joule\n2.Крашенный";
});





var RenderAPI = {
    wire: {},
    addGroupWire(id){
      let group = ICRender.getGroup("sj-wire");
      group.add(id, -1);
      let model = new ICRender.Model();
        
      BlockRenderer.setStaticICRender(id, -1, model); 
    },
    setWire(id, width){
      let group = ICRender.getGroup("sj-wire");
      group.add(id, -1);
      let boxes = [
      	{side: [0, 1, 0], box: [0.5 - width / 2, 0.5 + width / 2, 0.5 - width / 2, 0.5 + width / 2, 1, 0.5 + width / 2]}, 
        {side: [0, -1, 0], box: [0.5 - width / 2, 0, 0.5 - width / 2, 0.5 + width / 2, 0.5 - width / 2, 0.5 + width / 2]}, 
    		{side: [0, 0, 1], box: [0.5 - width / 2, 0.5 - width / 2, 0.5 + width / 2, 0.5 + width / 2, 0.5 + width / 2, 1]}, 
        {side: [0, 0, -1], box: [0.5 - width / 2, 0.5 - width / 2, 0, 0.5 + width / 2, 0.5 + width / 2, 0.5 - width / 2]},
        {side: [1, 0, 0], box: [0.5 + width / 2, 0.5 - width / 2, 0.5 - width / 2, 1, 0.5 + width / 2, 0.5 + width / 2]},
        {side: [-1, 0, 0], box: [0, 0.5 - width / 2, 0.5 - width / 2, 0.5 - width / 2, 0.5 + width / 2, 0.5 + width / 2]}
      ];
      let model = new ICRender.Model();
      model.addEntry(new BlockRenderer.Model(0.5 - width / 2, 0.5 - width / 2, 0.5 - width / 2, 0.5 + width / 2, 0.5 + width / 2, 0.5 + width / 2, id, 0)); 
      this.wire[id] = {};
      this.wire[id].boxes = boxes;
      this.wire[id].width = width;
      for(let i in boxes){ 
        let box = boxes[i].box; 
        let side = boxes[i].side; 
        model.addEntry(new BlockRenderer.Model(box[0], box[1], box[2], box[3], box[4], box[5], id, 0)).setCondition(new ICRender.BLOCK(side[0], side[1], side[2], group, false)); 
      }
      this.wire[id].model = model;
      BlockRenderer.setStaticICRender(id, -1, model); 
      BlockRenderer.enableCoordMapping(id, -1, model);
    },
    getModel(id){
    	if(!this.wire[id])
    		return;
    	let model = new ICRender.Model();
    	model.addEntry(new BlockRenderer.Model(0.5 - this.wire[id].width / 2, 0.5 - this.wire[id].width / 2, 0.5 - this.wire[id].width / 2, 0.5 + this.wire[id].width / 2, 0.5 + this.wire[id].width / 2, 0.5 + this.wire[id].width / 2, id, 0)); 
    	for(let i in this.wire[id].boxes){ 
        let box = this.wire[id].boxes[i].box; 
        let side = this.wire[id].boxes[i].side; 
        model.addEntry(new BlockRenderer.Model(box[0], box[1], box[2], box[3], box[4], box[5], id, 0)).setCondition(new ICRender.BLOCK(side[0], side[1], side[2], ICRender.getGroup("sc-wire"), false)); 
      }
      return model;
    }
};
Callback.addCallback("DestroyBlock", function(pos, block, player){
    if(RenderAPI.wire[block.id] || MachineAPI.all[block.id]) BlockRenderer.unmapAtCoords(pos.x, pos.y, pos.z, true);
})
IDRegistry.genBlockID("ImprovedAluminumWireOrange");
Block.createBlock("ImprovedAluminumWireOrange", [ {name: "Improved Aluminum Wire", texture: [["OrangeS", 0]], inCreative: true}]);
RenderAPI.setWire(BlockID.ImprovedAluminumWireOrange, 4/16);
sj.registerWire(BlockID.ImprovedAluminumWireOrange, 400);
Translation.addTranslation("Improved Aluminum Wire", {
ru: "Улучшенный алюминиевый провод"
})
Item.registerNameOverrideFunction(BlockID.ImprovedAluminumWireOrange, function(item, name){
    return Native.Color.White + name + "\n§1" + "Свойства:\n1.Передаёт 400 единиц энергии Space Joule\n2.Крашенный";
});






var RenderAPI = {
    wire: {},
    addGroupWire(id){
      let group = ICRender.getGroup("sj-wire");
      group.add(id, -1);
      let model = new ICRender.Model();
        
      BlockRenderer.setStaticICRender(id, -1, model); 
    },
    setWire(id, width){
      let group = ICRender.getGroup("sj-wire");
      group.add(id, -1);
      let boxes = [
      	{side: [0, 1, 0], box: [0.5 - width / 2, 0.5 + width / 2, 0.5 - width / 2, 0.5 + width / 2, 1, 0.5 + width / 2]}, 
        {side: [0, -1, 0], box: [0.5 - width / 2, 0, 0.5 - width / 2, 0.5 + width / 2, 0.5 - width / 2, 0.5 + width / 2]}, 
    		{side: [0, 0, 1], box: [0.5 - width / 2, 0.5 - width / 2, 0.5 + width / 2, 0.5 + width / 2, 0.5 + width / 2, 1]}, 
        {side: [0, 0, -1], box: [0.5 - width / 2, 0.5 - width / 2, 0, 0.5 + width / 2, 0.5 + width / 2, 0.5 - width / 2]},
        {side: [1, 0, 0], box: [0.5 + width / 2, 0.5 - width / 2, 0.5 - width / 2, 1, 0.5 + width / 2, 0.5 + width / 2]},
        {side: [-1, 0, 0], box: [0, 0.5 - width / 2, 0.5 - width / 2, 0.5 - width / 2, 0.5 + width / 2, 0.5 + width / 2]}
      ];
      let model = new ICRender.Model();
      model.addEntry(new BlockRenderer.Model(0.5 - width / 2, 0.5 - width / 2, 0.5 - width / 2, 0.5 + width / 2, 0.5 + width / 2, 0.5 + width / 2, id, 0)); 
      this.wire[id] = {};
      this.wire[id].boxes = boxes;
      this.wire[id].width = width;
      for(let i in boxes){ 
        let box = boxes[i].box; 
        let side = boxes[i].side; 
        model.addEntry(new BlockRenderer.Model(box[0], box[1], box[2], box[3], box[4], box[5], id, 0)).setCondition(new ICRender.BLOCK(side[0], side[1], side[2], group, false)); 
      }
      this.wire[id].model = model;
      BlockRenderer.setStaticICRender(id, -1, model); 
      BlockRenderer.enableCoordMapping(id, -1, model);
    },
    getModel(id){
    	if(!this.wire[id])
    		return;
    	let model = new ICRender.Model();
    	model.addEntry(new BlockRenderer.Model(0.5 - this.wire[id].width / 2, 0.5 - this.wire[id].width / 2, 0.5 - this.wire[id].width / 2, 0.5 + this.wire[id].width / 2, 0.5 + this.wire[id].width / 2, 0.5 + this.wire[id].width / 2, id, 0)); 
    	for(let i in this.wire[id].boxes){ 
        let box = this.wire[id].boxes[i].box; 
        let side = this.wire[id].boxes[i].side; 
        model.addEntry(new BlockRenderer.Model(box[0], box[1], box[2], box[3], box[4], box[5], id, 0)).setCondition(new ICRender.BLOCK(side[0], side[1], side[2], ICRender.getGroup("sc-wire"), false)); 
      }
      return model;
    }
};
Callback.addCallback("DestroyBlock", function(pos, block, player){
    if(RenderAPI.wire[block.id] || MachineAPI.all[block.id]) BlockRenderer.unmapAtCoords(pos.x, pos.y, pos.z, true);
})
IDRegistry.genBlockID("ImprovedAluminumWireYellow");
Block.createBlock("ImprovedAluminumWireYellow", [ {name: "Improved Aluminum Wire", texture: [["Yellow", 0]], inCreative: true}]);
RenderAPI.setWire(BlockID.ImprovedAluminumWireYellow, 4/16);
sj.registerWire(BlockID.ImprovedAluminumWireYellow, 400);
Translation.addTranslation("Improved Aluminum Wire", {
ru: "Улучшенный алюминиевый провод"
})
Item.registerNameOverrideFunction(BlockID.ImprovedAluminumWireYellow, function(item, name){
    return Native.Color.White + name + "\n§1" + "Свойства:\n1.Передаёт 400 единиц энергии Space Joule\n2.Крашенный";
});




var RenderAPI = {
    wire: {},
    addGroupWire(id){
      let group = ICRender.getGroup("sj-wire");
      group.add(id, -1);
      let model = new ICRender.Model();
        
      BlockRenderer.setStaticICRender(id, -1, model); 
    },
    setWire(id, width){
      let group = ICRender.getGroup("sj-wire");
      group.add(id, -1);
      let boxes = [
      	{side: [0, 1, 0], box: [0.5 - width / 2, 0.5 + width / 2, 0.5 - width / 2, 0.5 + width / 2, 1, 0.5 + width / 2]}, 
        {side: [0, -1, 0], box: [0.5 - width / 2, 0, 0.5 - width / 2, 0.5 + width / 2, 0.5 - width / 2, 0.5 + width / 2]}, 
    		{side: [0, 0, 1], box: [0.5 - width / 2, 0.5 - width / 2, 0.5 + width / 2, 0.5 + width / 2, 0.5 + width / 2, 1]}, 
        {side: [0, 0, -1], box: [0.5 - width / 2, 0.5 - width / 2, 0, 0.5 + width / 2, 0.5 + width / 2, 0.5 - width / 2]},
        {side: [1, 0, 0], box: [0.5 + width / 2, 0.5 - width / 2, 0.5 - width / 2, 1, 0.5 + width / 2, 0.5 + width / 2]},
        {side: [-1, 0, 0], box: [0, 0.5 - width / 2, 0.5 - width / 2, 0.5 - width / 2, 0.5 + width / 2, 0.5 + width / 2]}
      ];
      let model = new ICRender.Model();
      model.addEntry(new BlockRenderer.Model(0.5 - width / 2, 0.5 - width / 2, 0.5 - width / 2, 0.5 + width / 2, 0.5 + width / 2, 0.5 + width / 2, id, 0)); 
      this.wire[id] = {};
      this.wire[id].boxes = boxes;
      this.wire[id].width = width;
      for(let i in boxes){ 
        let box = boxes[i].box; 
        let side = boxes[i].side; 
        model.addEntry(new BlockRenderer.Model(box[0], box[1], box[2], box[3], box[4], box[5], id, 0)).setCondition(new ICRender.BLOCK(side[0], side[1], side[2], group, false)); 
      }
      this.wire[id].model = model;
      BlockRenderer.setStaticICRender(id, -1, model); 
      BlockRenderer.enableCoordMapping(id, -1, model);
    },
    getModel(id){
    	if(!this.wire[id])
    		return;
    	let model = new ICRender.Model();
    	model.addEntry(new BlockRenderer.Model(0.5 - this.wire[id].width / 2, 0.5 - this.wire[id].width / 2, 0.5 - this.wire[id].width / 2, 0.5 + this.wire[id].width / 2, 0.5 + this.wire[id].width / 2, 0.5 + this.wire[id].width / 2, id, 0)); 
    	for(let i in this.wire[id].boxes){ 
        let box = this.wire[id].boxes[i].box; 
        let side = this.wire[id].boxes[i].side; 
        model.addEntry(new BlockRenderer.Model(box[0], box[1], box[2], box[3], box[4], box[5], id, 0)).setCondition(new ICRender.BLOCK(side[0], side[1], side[2], ICRender.getGroup("sc-wire"), false)); 
      }
      return model;
    }
};
Callback.addCallback("DestroyBlock", function(pos, block, player){
    if(RenderAPI.wire[block.id] || MachineAPI.all[block.id]) BlockRenderer.unmapAtCoords(pos.x, pos.y, pos.z, true);
})
IDRegistry.genBlockID("ImprovedAluminumWireBlack");
Block.createBlock("ImprovedAluminumWireBlack", [ {name: "Improved Aluminum Wire", texture: [["Black", 0]], inCreative: true}]);
RenderAPI.setWire(BlockID.ImprovedAluminumWireBlack, 4/16);
sj.registerWire(BlockID.ImprovedAluminumWireBlack, 400);
Translation.addTranslation("Improved Aluminum Wire", {
ru: "Улучшенный алюминиевый провод"
})
Item.registerNameOverrideFunction(BlockID.ImprovedAluminumWireBlack, function(item, name){
    return Native.Color.White + name + "\n§1" + "Свойства:\n1.Передаёт 400 единиц энергии Space Joule\n2.Крашенный";
});





var RenderAPI = {
    wire: {},
    addGroupWire(id){
      let group = ICRender.getGroup("sj-wire");
      group.add(id, -1);
      let model = new ICRender.Model();
        
      BlockRenderer.setStaticICRender(id, -1, model); 
    },
    setWire(id, width){
      let group = ICRender.getGroup("sj-wire");
      group.add(id, -1);
      let boxes = [
      	{side: [0, 1, 0], box: [0.5 - width / 2, 0.5 + width / 2, 0.5 - width / 2, 0.5 + width / 2, 1, 0.5 + width / 2]}, 
        {side: [0, -1, 0], box: [0.5 - width / 2, 0, 0.5 - width / 2, 0.5 + width / 2, 0.5 - width / 2, 0.5 + width / 2]}, 
    		{side: [0, 0, 1], box: [0.5 - width / 2, 0.5 - width / 2, 0.5 + width / 2, 0.5 + width / 2, 0.5 + width / 2, 1]}, 
        {side: [0, 0, -1], box: [0.5 - width / 2, 0.5 - width / 2, 0, 0.5 + width / 2, 0.5 + width / 2, 0.5 - width / 2]},
        {side: [1, 0, 0], box: [0.5 + width / 2, 0.5 - width / 2, 0.5 - width / 2, 1, 0.5 + width / 2, 0.5 + width / 2]},
        {side: [-1, 0, 0], box: [0, 0.5 - width / 2, 0.5 - width / 2, 0.5 - width / 2, 0.5 + width / 2, 0.5 + width / 2]}
      ];
      let model = new ICRender.Model();
      model.addEntry(new BlockRenderer.Model(0.5 - width / 2, 0.5 - width / 2, 0.5 - width / 2, 0.5 + width / 2, 0.5 + width / 2, 0.5 + width / 2, id, 0)); 
      this.wire[id] = {};
      this.wire[id].boxes = boxes;
      this.wire[id].width = width;
      for(let i in boxes){ 
        let box = boxes[i].box; 
        let side = boxes[i].side; 
        model.addEntry(new BlockRenderer.Model(box[0], box[1], box[2], box[3], box[4], box[5], id, 0)).setCondition(new ICRender.BLOCK(side[0], side[1], side[2], group, false)); 
      }
      this.wire[id].model = model;
      BlockRenderer.setStaticICRender(id, -1, model); 
      BlockRenderer.enableCoordMapping(id, -1, model);
    },
    getModel(id){
    	if(!this.wire[id])
    		return;
    	let model = new ICRender.Model();
    	model.addEntry(new BlockRenderer.Model(0.5 - this.wire[id].width / 2, 0.5 - this.wire[id].width / 2, 0.5 - this.wire[id].width / 2, 0.5 + this.wire[id].width / 2, 0.5 + this.wire[id].width / 2, 0.5 + this.wire[id].width / 2, id, 0)); 
    	for(let i in this.wire[id].boxes){ 
        let box = this.wire[id].boxes[i].box; 
        let side = this.wire[id].boxes[i].side; 
        model.addEntry(new BlockRenderer.Model(box[0], box[1], box[2], box[3], box[4], box[5], id, 0)).setCondition(new ICRender.BLOCK(side[0], side[1], side[2], ICRender.getGroup("sc-wire"), false)); 
      }
      return model;
    }
};
Callback.addCallback("DestroyBlock", function(pos, block, player){
    if(RenderAPI.wire[block.id] || MachineAPI.all[block.id]) BlockRenderer.unmapAtCoords(pos.x, pos.y, pos.z, true);
})
IDRegistry.genBlockID("ImprovedAluminumWireWhite");
Block.createBlock("ImprovedAluminumWireWhite", [ {name: "Improved Aluminum Wire", texture: [["Demerror&ArtemOn", 0]], inCreative: true}]);
RenderAPI.setWire(BlockID.ImprovedAluminumWireWhite, 4/16);
sj.registerWire(BlockID.ImprovedAluminumWireWhite, 400);
Translation.addTranslation("Improved Aluminum Wire", {
ru: "Улучшенный алюминиевый провод"
})
Item.registerNameOverrideFunction(BlockID.ImprovedAluminumWireWhite, function(item, name){
    return Native.Color.White + name + "\n§1" + "Свойства:\n1.Передаёт 400 единиц энергии Space Joule\n2.Крашенный";
});




var RenderAPI = {
    wire: {},
    addGroupWire(id){
      let group = ICRender.getGroup("sj-wire");
      group.add(id, -1);
      let model = new ICRender.Model();
        
      BlockRenderer.setStaticICRender(id, -1, model); 
    },
    setWire(id, width){
      let group = ICRender.getGroup("sj-wire");
      group.add(id, -1);
      let boxes = [
      	{side: [0, 1, 0], box: [0.5 - width / 2, 0.5 + width / 2, 0.5 - width / 2, 0.5 + width / 2, 1, 0.5 + width / 2]}, 
        {side: [0, -1, 0], box: [0.5 - width / 2, 0, 0.5 - width / 2, 0.5 + width / 2, 0.5 - width / 2, 0.5 + width / 2]}, 
    		{side: [0, 0, 1], box: [0.5 - width / 2, 0.5 - width / 2, 0.5 + width / 2, 0.5 + width / 2, 0.5 + width / 2, 1]}, 
        {side: [0, 0, -1], box: [0.5 - width / 2, 0.5 - width / 2, 0, 0.5 + width / 2, 0.5 + width / 2, 0.5 - width / 2]},
        {side: [1, 0, 0], box: [0.5 + width / 2, 0.5 - width / 2, 0.5 - width / 2, 1, 0.5 + width / 2, 0.5 + width / 2]},
        {side: [-1, 0, 0], box: [0, 0.5 - width / 2, 0.5 - width / 2, 0.5 - width / 2, 0.5 + width / 2, 0.5 + width / 2]}
      ];
      let model = new ICRender.Model();
      model.addEntry(new BlockRenderer.Model(0.5 - width / 2, 0.5 - width / 2, 0.5 - width / 2, 0.5 + width / 2, 0.5 + width / 2, 0.5 + width / 2, id, 0)); 
      this.wire[id] = {};
      this.wire[id].boxes = boxes;
      this.wire[id].width = width;
      for(let i in boxes){ 
        let box = boxes[i].box; 
        let side = boxes[i].side; 
        model.addEntry(new BlockRenderer.Model(box[0], box[1], box[2], box[3], box[4], box[5], id, 0)).setCondition(new ICRender.BLOCK(side[0], side[1], side[2], group, false)); 
      }
      this.wire[id].model = model;
      BlockRenderer.setStaticICRender(id, -1, model); 
      BlockRenderer.enableCoordMapping(id, -1, model);
    },
    getModel(id){
    	if(!this.wire[id])
    		return;
    	let model = new ICRender.Model();
    	model.addEntry(new BlockRenderer.Model(0.5 - this.wire[id].width / 2, 0.5 - this.wire[id].width / 2, 0.5 - this.wire[id].width / 2, 0.5 + this.wire[id].width / 2, 0.5 + this.wire[id].width / 2, 0.5 + this.wire[id].width / 2, id, 0)); 
    	for(let i in this.wire[id].boxes){ 
        let box = this.wire[id].boxes[i].box; 
        let side = this.wire[id].boxes[i].side; 
        model.addEntry(new BlockRenderer.Model(box[0], box[1], box[2], box[3], box[4], box[5], id, 0)).setCondition(new ICRender.BLOCK(side[0], side[1], side[2], ICRender.getGroup("sc-wire"), false)); 
      }
      return model;
    }
};
Callback.addCallback("DestroyBlock", function(pos, block, player){
    if(RenderAPI.wire[block.id] || MachineAPI.all[block.id]) BlockRenderer.unmapAtCoords(pos.x, pos.y, pos.z, true);
})
IDRegistry.genBlockID("ImprovedAluminumWireDarkBlue");
Block.createBlock("ImprovedAluminumWireDarkBlue", [ {name: "Improved Aluminum Wire", texture: [["DarkBlue", 0]], inCreative: true}]);
RenderAPI.setWire(BlockID.ImprovedAluminumWireDarkBlue, 4/16);
sj.registerWire(BlockID.ImprovedAluminumWireDarkBlue, 400);
Translation.addTranslation("Improved Aluminum Wire", {
ru: "Улучшенный алюминиевый провод"
})
Item.registerNameOverrideFunction(BlockID.ImprovedAluminumWireDarkBlue, function(item, name){
    return Native.Color.White + name + "\n§1" + "Свойства:\n1.Передаёт 400 единиц энергии Space Joule\n2.Крашенный";
});



var RenderAPI = {
    wire: {},
    addGroupWire(id){
      let group = ICRender.getGroup("sj-wire");
      group.add(id, -1);
      let model = new ICRender.Model();
        
      BlockRenderer.setStaticICRender(id, -1, model); 
    },
    setWire(id, width){
      let group = ICRender.getGroup("sj-wire");
      group.add(id, -1);
      let boxes = [
      	{side: [0, 1, 0], box: [0.5 - width / 2, 0.5 + width / 2, 0.5 - width / 2, 0.5 + width / 2, 1, 0.5 + width / 2]}, 
        {side: [0, -1, 0], box: [0.5 - width / 2, 0, 0.5 - width / 2, 0.5 + width / 2, 0.5 - width / 2, 0.5 + width / 2]}, 
    		{side: [0, 0, 1], box: [0.5 - width / 2, 0.5 - width / 2, 0.5 + width / 2, 0.5 + width / 2, 0.5 + width / 2, 1]}, 
        {side: [0, 0, -1], box: [0.5 - width / 2, 0.5 - width / 2, 0, 0.5 + width / 2, 0.5 + width / 2, 0.5 - width / 2]},
        {side: [1, 0, 0], box: [0.5 + width / 2, 0.5 - width / 2, 0.5 - width / 2, 1, 0.5 + width / 2, 0.5 + width / 2]},
        {side: [-1, 0, 0], box: [0, 0.5 - width / 2, 0.5 - width / 2, 0.5 - width / 2, 0.5 + width / 2, 0.5 + width / 2]}
      ];
      let model = new ICRender.Model();
      model.addEntry(new BlockRenderer.Model(0.5 - width / 2, 0.5 - width / 2, 0.5 - width / 2, 0.5 + width / 2, 0.5 + width / 2, 0.5 + width / 2, id, 0)); 
      this.wire[id] = {};
      this.wire[id].boxes = boxes;
      this.wire[id].width = width;
      for(let i in boxes){ 
        let box = boxes[i].box; 
        let side = boxes[i].side; 
        model.addEntry(new BlockRenderer.Model(box[0], box[1], box[2], box[3], box[4], box[5], id, 0)).setCondition(new ICRender.BLOCK(side[0], side[1], side[2], group, false)); 
      }
      this.wire[id].model = model;
      BlockRenderer.setStaticICRender(id, -1, model); 
      BlockRenderer.enableCoordMapping(id, -1, model);
    },
    getModel(id){
    	if(!this.wire[id])
    		return;
    	let model = new ICRender.Model();
    	model.addEntry(new BlockRenderer.Model(0.5 - this.wire[id].width / 2, 0.5 - this.wire[id].width / 2, 0.5 - this.wire[id].width / 2, 0.5 + this.wire[id].width / 2, 0.5 + this.wire[id].width / 2, 0.5 + this.wire[id].width / 2, id, 0)); 
    	for(let i in this.wire[id].boxes){ 
        let box = this.wire[id].boxes[i].box; 
        let side = this.wire[id].boxes[i].side; 
        model.addEntry(new BlockRenderer.Model(box[0], box[1], box[2], box[3], box[4], box[5], id, 0)).setCondition(new ICRender.BLOCK(side[0], side[1], side[2], ICRender.getGroup("sc-wire"), false)); 
      }
      return model;
    }
};
Callback.addCallback("DestroyBlock", function(pos, block, player){
    if(RenderAPI.wire[block.id] || MachineAPI.all[block.id]) BlockRenderer.unmapAtCoords(pos.x, pos.y, pos.z, true);
})
IDRegistry.genBlockID("ImprovedAluminumWireGreen");
Block.createBlock("ImprovedAluminumWireGreen", [ {name: "Improved Aluminum Wire", texture: [["Green", 0]], inCreative: true}]);
RenderAPI.setWire(BlockID.ImprovedAluminumWireGreen, 4/16);
sj.registerWire(BlockID.ImprovedAluminumWireGreen, 400);
Translation.addTranslation("Improved Aluminum Wire", {
ru: "Улучшенный алюминиевый провод"
})
Item.registerNameOverrideFunction(BlockID.ImprovedAluminumWireGreen, function(item, name){
    return Native.Color.White + name + "\n§1" + "Свойства:\n1.Передаёт 400 единиц энергии Space Joule\n2.Крашенный";
});




var RenderAPI = {
    wire: {},
    addGroupWire(id){
      let group = ICRender.getGroup("sj-wire");
      group.add(id, -1);
      let model = new ICRender.Model();
        
      BlockRenderer.setStaticICRender(id, -1, model); 
    },
    setWire(id, width){
      let group = ICRender.getGroup("sj-wire");
      group.add(id, -1);
      let boxes = [
      	{side: [0, 1, 0], box: [0.5 - width / 2, 0.5 + width / 2, 0.5 - width / 2, 0.5 + width / 2, 1, 0.5 + width / 2]}, 
        {side: [0, -1, 0], box: [0.5 - width / 2, 0, 0.5 - width / 2, 0.5 + width / 2, 0.5 - width / 2, 0.5 + width / 2]}, 
    		{side: [0, 0, 1], box: [0.5 - width / 2, 0.5 - width / 2, 0.5 + width / 2, 0.5 + width / 2, 0.5 + width / 2, 1]}, 
        {side: [0, 0, -1], box: [0.5 - width / 2, 0.5 - width / 2, 0, 0.5 + width / 2, 0.5 + width / 2, 0.5 - width / 2]},
        {side: [1, 0, 0], box: [0.5 + width / 2, 0.5 - width / 2, 0.5 - width / 2, 1, 0.5 + width / 2, 0.5 + width / 2]},
        {side: [-1, 0, 0], box: [0, 0.5 - width / 2, 0.5 - width / 2, 0.5 - width / 2, 0.5 + width / 2, 0.5 + width / 2]}
      ];
      let model = new ICRender.Model();
      model.addEntry(new BlockRenderer.Model(0.5 - width / 2, 0.5 - width / 2, 0.5 - width / 2, 0.5 + width / 2, 0.5 + width / 2, 0.5 + width / 2, id, 0)); 
      this.wire[id] = {};
      this.wire[id].boxes = boxes;
      this.wire[id].width = width;
      for(let i in boxes){ 
        let box = boxes[i].box; 
        let side = boxes[i].side; 
        model.addEntry(new BlockRenderer.Model(box[0], box[1], box[2], box[3], box[4], box[5], id, 0)).setCondition(new ICRender.BLOCK(side[0], side[1], side[2], group, false)); 
      }
      this.wire[id].model = model;
      BlockRenderer.setStaticICRender(id, -1, model); 
      BlockRenderer.enableCoordMapping(id, -1, model);
    },
    getModel(id){
    	if(!this.wire[id])
    		return;
    	let model = new ICRender.Model();
    	model.addEntry(new BlockRenderer.Model(0.5 - this.wire[id].width / 2, 0.5 - this.wire[id].width / 2, 0.5 - this.wire[id].width / 2, 0.5 + this.wire[id].width / 2, 0.5 + this.wire[id].width / 2, 0.5 + this.wire[id].width / 2, id, 0)); 
    	for(let i in this.wire[id].boxes){ 
        let box = this.wire[id].boxes[i].box; 
        let side = this.wire[id].boxes[i].side; 
        model.addEntry(new BlockRenderer.Model(box[0], box[1], box[2], box[3], box[4], box[5], id, 0)).setCondition(new ICRender.BLOCK(side[0], side[1], side[2], ICRender.getGroup("sc-wire"), false)); 
      }
      return model;
    }
};
Callback.addCallback("DestroyBlock", function(pos, block, player){
    if(RenderAPI.wire[block.id] || MachineAPI.all[block.id]) BlockRenderer.unmapAtCoords(pos.x, pos.y, pos.z, true);
})
IDRegistry.genBlockID("ImprovedAluminumWireDarkGreen");
Block.createBlock("ImprovedAluminumWireDarkGreen", [ {name: "Improved Aluminum Wire", texture: [["DarkGreen", 0]], inCreative: true}]);
RenderAPI.setWire(BlockID.ImprovedAluminumWireDarkGreen, 4/16);
sj.registerWire(BlockID.ImprovedAluminumWireDarkGreen, 400);
Translation.addTranslation("Improved Aluminum Wire", {
ru: "Улучшенный алюминиевый провод"
})
Item.registerNameOverrideFunction(BlockID.ImprovedAluminumWireDarkGreen, function(item, name){
    return Native.Color.White + name + "\n§1" + "Свойства:\n1.Передаёт 400 единиц энергии Space Joule\n2.Крашенный";
});



var RenderAPI = {
    wire: {},
    addGroupWire(id){
      let group = ICRender.getGroup("sj-wire");
      group.add(id, -1);
      let model = new ICRender.Model();
        
      BlockRenderer.setStaticICRender(id, -1, model); 
    },
    setWire(id, width){
      let group = ICRender.getGroup("sj-wire");
      group.add(id, -1);
      let boxes = [
      	{side: [0, 1, 0], box: [0.5 - width / 3, 0.5 + width / 3, 0.5 - width / 3, 0.5 + width / 3, 1, 0.5 + width / 3]}, 
        {side: [0, -1, 0], box: [0.5 - width / 3, 0, 0.5 - width / 3, 0.5 + width / 3, 0.5 - width / 3, 0.5 + width / 3]}, 
    		{side: [0, 0, 1], box: [0.5 - width / 3, 0.5 - width / 3, 0.5 + width / 3, 0.5 + width / 3, 0.5 + width / 3, 1]}, 
        {side: [0, 0, -1], box: [0.5 - width / 3, 0.5 - width / 3, 0, 0.5 + width / 3, 0.5 + width / 3, 0.5 - width / 3]},
        {side: [1, 0, 0], box: [0.5 + width / 3, 0.5 - width / 3/**/, 0.5 - width / 3, 1, 0.5 + width / 3, 0.5 + width / 3]},
        {side: [-1, 0, 0], box: [0, 0.5 - width / 3, 0.5 - width / 3, 0.5 - width / 3, 0.5 + width / 3, 0.5 + width / 3]}
      ];
      let model = new ICRender.Model();
      model.addEntry(new BlockRenderer.Model(0.5 - width / 3, 0.5 - width / 3, 0.5 - width / 3, 0.5 + width / 3, 0.5 + width / 3, 0.5 + width / 3, id, 0)); 
      this.wire[id] = {};
      this.wire[id].boxes = boxes;
      this.wire[id].width = width;
      for(let i in boxes){ 
        let box = boxes[i].box; 
        let side = boxes[i].side; 
        model.addEntry(new BlockRenderer.Model(box[0], box[1], box[2], box[3], box[4], box[5], id, 0)).setCondition(new ICRender.BLOCK(side[0], side[1], side[2], group, false)); 
      }
      this.wire[id].model = model;
      BlockRenderer.setStaticICRender(id, -1, model); 
      BlockRenderer.enableCoordMapping(id, -1, model);
    },
    getModel(id){
    	if(!this.wire[id])
    		return;
    	let model = new ICRender.Model();
    	model.addEntry(new BlockRenderer.Model(0.5 - this.wire[id].width / 4, 0.5 - this.wire[id].width / 4, 0.5 - this.wire[id].width / 4, 0.5 + this.wire[id].width / 4, 0.5 + this.wire[id].width / 4, 0.5 + this.wire[id].width / 4, id, 0)); 
    	for(let i in this.wire[id].boxes){ 
        let box = this.wire[id].boxes[i].box; 
        let side = this.wire[id].boxes[i].side; 
        model.addEntry(new BlockRenderer.Model(box[0], box[1], box[2], box[3], box[4], box[5], id, 0)).setCondition(new ICRender.BLOCK(side[0], side[1], side[2], ICRender.getGroup("sc-wire"), false)); 
      }
      return model;
    }
};
Callback.addCallback("DestroyBlock", function(pos, block, player){
    if(RenderAPI.wire[block.id] || MachineAPI.all[block.id]) BlockRenderer.unmapAtCoords(pos.x, pos.y, pos.z, true);
})
IDRegistry.genBlockID("AluminumWire");
Block.createBlock("AluminumWire", [ {name: "Aluminum Wire", texture: [["wire_aluminum", 0]], inCreative: true}]);
RenderAPI.setWire(BlockID.AluminumWire, 4/16);
sj.registerWire(BlockID.AluminumWire, 200);
Translation.addTranslation("Aluminum Wire", {
ru: "Алюминиевый провод"
})
Item.registerNameOverrideFunction(BlockID.AluminumWire, function(item, name){
    return Native.Color.White + name + "\n§1" + "Свойства:\n1.Передаёт 200 единиц энергии Space Joule\n2.Можно покрасить";
});






var RenderAPI = {
    wire: {},
    addGroupWire(id){
      let group = ICRender.getGroup("sj-wire");
      group.add(id, -1);
      let model = new ICRender.Model();
        
      BlockRenderer.setStaticICRender(id, -1, model); 
    },
    setWire(id, width){
      let group = ICRender.getGroup("sj-wire");
      group.add(id, -1);
      let boxes = [
      	{side: [0, 1, 0], box: [0.5 - width / 3, 0.5 + width / 3, 0.5 - width / 3, 0.5 + width / 3, 1, 0.5 + width / 3]}, 
        {side: [0, -1, 0], box: [0.5 - width / 3, 0, 0.5 - width / 3, 0.5 + width / 3, 0.5 - width / 3, 0.5 + width / 3]}, 
    		{side: [0, 0, 1], box: [0.5 - width / 3, 0.5 - width / 3, 0.5 + width / 3, 0.5 + width / 3, 0.5 + width / 3, 1]}, 
        {side: [0, 0, -1], box: [0.5 - width / 3, 0.5 - width / 3, 0, 0.5 + width / 3, 0.5 + width / 3, 0.5 - width / 3]},
        {side: [1, 0, 0], box: [0.5 + width / 3, 0.5 - width / 3/**/, 0.5 - width / 3, 1, 0.5 + width / 3, 0.5 + width / 3]},
        {side: [-1, 0, 0], box: [0, 0.5 - width / 3, 0.5 - width / 3, 0.5 - width / 3, 0.5 + width / 3, 0.5 + width / 3]}
      ];
      let model = new ICRender.Model();
      model.addEntry(new BlockRenderer.Model(0.5 - width / 3, 0.5 - width / 3, 0.5 - width / 3, 0.5 + width / 3, 0.5 + width / 3, 0.5 + width / 3, id, 0)); 
      this.wire[id] = {};
      this.wire[id].boxes = boxes;
      this.wire[id].width = width;
      for(let i in boxes){ 
        let box = boxes[i].box; 
        let side = boxes[i].side; 
        model.addEntry(new BlockRenderer.Model(box[0], box[1], box[2], box[3], box[4], box[5], id, 0)).setCondition(new ICRender.BLOCK(side[0], side[1], side[2], group, false)); 
      }
      this.wire[id].model = model;
      BlockRenderer.setStaticICRender(id, -1, model); 
      BlockRenderer.enableCoordMapping(id, -1, model);
    },
    getModel(id){
    	if(!this.wire[id])
    		return;
    	let model = new ICRender.Model();
    	model.addEntry(new BlockRenderer.Model(0.5 - this.wire[id].width / 4, 0.5 - this.wire[id].width / 4, 0.5 - this.wire[id].width / 4, 0.5 + this.wire[id].width / 4, 0.5 + this.wire[id].width / 4, 0.5 + this.wire[id].width / 4, id, 0)); 
    	for(let i in this.wire[id].boxes){ 
        let box = this.wire[id].boxes[i].box; 
        let side = this.wire[id].boxes[i].side; 
        model.addEntry(new BlockRenderer.Model(box[0], box[1], box[2], box[3], box[4], box[5], id, 0)).setCondition(new ICRender.BLOCK(side[0], side[1], side[2], ICRender.getGroup("sc-wire"), false)); 
      }
      return model;
    }
};
Callback.addCallback("DestroyBlock", function(pos, block, player){
    if(RenderAPI.wire[block.id] || MachineAPI.all[block.id]) BlockRenderer.unmapAtCoords(pos.x, pos.y, pos.z, true);
})
IDRegistry.genBlockID("AluminumWireBlue");
Block.createBlock("AluminumWireBlue", [ {name: "Aluminum Wire", texture: [["BlueW", 0]], inCreative: true}]);
RenderAPI.setWire(BlockID.AluminumWireBlue, 4/16);
sj.registerWire(BlockID.AluminumWireBlue, 200);
Translation.addTranslation("Aluminum Wire", {
ru: "Алюминиевый провод"
})
Item.registerNameOverrideFunction(BlockID.AluminumWireBlue, function(item, name){
    return Native.Color.White + name + "\n§1" + "Свойства:\n1.Передаёт 200 единиц энергии Space Joule\n2.Крашенный";
});




var RenderAPI = {
    wire: {},
    addGroupWire(id){
      let group = ICRender.getGroup("sj-wire");
      group.add(id, -1);
      let model = new ICRender.Model();
        
      BlockRenderer.setStaticICRender(id, -1, model); 
    },
    setWire(id, width){
      let group = ICRender.getGroup("sj-wire");
      group.add(id, -1);
      let boxes = [
      	{side: [0, 1, 0], box: [0.5 - width / 3, 0.5 + width / 3, 0.5 - width / 3, 0.5 + width / 3, 1, 0.5 + width / 3]}, 
        {side: [0, -1, 0], box: [0.5 - width / 3, 0, 0.5 - width / 3, 0.5 + width / 3, 0.5 - width / 3, 0.5 + width / 3]}, 
    		{side: [0, 0, 1], box: [0.5 - width / 3, 0.5 - width / 3, 0.5 + width / 3, 0.5 + width / 3, 0.5 + width / 3, 1]}, 
        {side: [0, 0, -1], box: [0.5 - width / 3, 0.5 - width / 3, 0, 0.5 + width / 3, 0.5 + width / 3, 0.5 - width / 3]},
        {side: [1, 0, 0], box: [0.5 + width / 3, 0.5 - width / 3/**/, 0.5 - width / 3, 1, 0.5 + width / 3, 0.5 + width / 3]},
        {side: [-1, 0, 0], box: [0, 0.5 - width / 3, 0.5 - width / 3, 0.5 - width / 3, 0.5 + width / 3, 0.5 + width / 3]}
      ];
      let model = new ICRender.Model();
      model.addEntry(new BlockRenderer.Model(0.5 - width / 3, 0.5 - width / 3, 0.5 - width / 3, 0.5 + width / 3, 0.5 + width / 3, 0.5 + width / 3, id, 0)); 
      this.wire[id] = {};
      this.wire[id].boxes = boxes;
      this.wire[id].width = width;
      for(let i in boxes){ 
        let box = boxes[i].box; 
        let side = boxes[i].side; 
        model.addEntry(new BlockRenderer.Model(box[0], box[1], box[2], box[3], box[4], box[5], id, 0)).setCondition(new ICRender.BLOCK(side[0], side[1], side[2], group, false)); 
      }
      this.wire[id].model = model;
      BlockRenderer.setStaticICRender(id, -1, model); 
      BlockRenderer.enableCoordMapping(id, -1, model);
    },
    getModel(id){
    	if(!this.wire[id])
    		return;
    	let model = new ICRender.Model();
    	model.addEntry(new BlockRenderer.Model(0.5 - this.wire[id].width / 4, 0.5 - this.wire[id].width / 4, 0.5 - this.wire[id].width / 4, 0.5 + this.wire[id].width / 4, 0.5 + this.wire[id].width / 4, 0.5 + this.wire[id].width / 4, id, 0)); 
    	for(let i in this.wire[id].boxes){ 
        let box = this.wire[id].boxes[i].box; 
        let side = this.wire[id].boxes[i].side; 
        model.addEntry(new BlockRenderer.Model(box[0], box[1], box[2], box[3], box[4], box[5], id, 0)).setCondition(new ICRender.BLOCK(side[0], side[1], side[2], ICRender.getGroup("sc-wire"), false)); 
      }
      return model;
    }
};
Callback.addCallback("DestroyBlock", function(pos, block, player){
    if(RenderAPI.wire[block.id] || MachineAPI.all[block.id]) BlockRenderer.unmapAtCoords(pos.x, pos.y, pos.z, true);
})
IDRegistry.genBlockID("AluminumWireWhite");
Block.createBlock("AluminumWireWhite", [ {name: "Aluminum Wire", texture: [["WhiteW", 0]], inCreative: true}]);
RenderAPI.setWire(BlockID.AluminumWireWhite, 4/16);
sj.registerWire(BlockID.AluminumWireWhite, 200);
Translation.addTranslation("Aluminum Wire", {
ru: "Алюминиевый провод"
})
Item.registerNameOverrideFunction(BlockID.AluminumWireWhite, function(item, name){
    return Native.Color.White + name + "\n§1" + "Свойства:\n1.Передаёт 200 единиц энергии Space Joule\n2.Крашенный";
});



var RenderAPI = {
    wire: {},
    addGroupWire(id){
      let group = ICRender.getGroup("sj-wire");
      group.add(id, -1);
      let model = new ICRender.Model();
        
      BlockRenderer.setStaticICRender(id, -1, model); 
    },
    setWire(id, width){
      let group = ICRender.getGroup("sj-wire");
      group.add(id, -1);
      let boxes = [
      	{side: [0, 1, 0], box: [0.5 - width / 3, 0.5 + width / 3, 0.5 - width / 3, 0.5 + width / 3, 1, 0.5 + width / 3]}, 
        {side: [0, -1, 0], box: [0.5 - width / 3, 0, 0.5 - width / 3, 0.5 + width / 3, 0.5 - width / 3, 0.5 + width / 3]}, 
    		{side: [0, 0, 1], box: [0.5 - width / 3, 0.5 - width / 3, 0.5 + width / 3, 0.5 + width / 3, 0.5 + width / 3, 1]}, 
        {side: [0, 0, -1], box: [0.5 - width / 3, 0.5 - width / 3, 0, 0.5 + width / 3, 0.5 + width / 3, 0.5 - width / 3]},
        {side: [1, 0, 0], box: [0.5 + width / 3, 0.5 - width / 3/**/, 0.5 - width / 3, 1, 0.5 + width / 3, 0.5 + width / 3]},
        {side: [-1, 0, 0], box: [0, 0.5 - width / 3, 0.5 - width / 3, 0.5 - width / 3, 0.5 + width / 3, 0.5 + width / 3]}
      ];
      let model = new ICRender.Model();
      model.addEntry(new BlockRenderer.Model(0.5 - width / 3, 0.5 - width / 3, 0.5 - width / 3, 0.5 + width / 3, 0.5 + width / 3, 0.5 + width / 3, id, 0)); 
      this.wire[id] = {};
      this.wire[id].boxes = boxes;
      this.wire[id].width = width;
      for(let i in boxes){ 
        let box = boxes[i].box; 
        let side = boxes[i].side; 
        model.addEntry(new BlockRenderer.Model(box[0], box[1], box[2], box[3], box[4], box[5], id, 0)).setCondition(new ICRender.BLOCK(side[0], side[1], side[2], group, false)); 
      }
      this.wire[id].model = model;
      BlockRenderer.setStaticICRender(id, -1, model); 
      BlockRenderer.enableCoordMapping(id, -1, model);
    },
    getModel(id){
    	if(!this.wire[id])
    		return;
    	let model = new ICRender.Model();
    	model.addEntry(new BlockRenderer.Model(0.5 - this.wire[id].width / 4, 0.5 - this.wire[id].width / 4, 0.5 - this.wire[id].width / 4, 0.5 + this.wire[id].width / 4, 0.5 + this.wire[id].width / 4, 0.5 + this.wire[id].width / 4, id, 0)); 
    	for(let i in this.wire[id].boxes){ 
        let box = this.wire[id].boxes[i].box; 
        let side = this.wire[id].boxes[i].side; 
        model.addEntry(new BlockRenderer.Model(box[0], box[1], box[2], box[3], box[4], box[5], id, 0)).setCondition(new ICRender.BLOCK(side[0], side[1], side[2], ICRender.getGroup("sc-wire"), false)); 
      }
      return model;
    }
};
Callback.addCallback("DestroyBlock", function(pos, block, player){
    if(RenderAPI.wire[block.id] || MachineAPI.all[block.id]) BlockRenderer.unmapAtCoords(pos.x, pos.y, pos.z, true);
})
IDRegistry.genBlockID("AluminumWireBlack");
Block.createBlock("AluminumWireBlack", [ {name: "Aluminum Wire", texture: [["BlackW", 0]], inCreative: true}]);
RenderAPI.setWire(BlockID.AluminumWireBlack, 4/16);
sj.registerWire(BlockID.AluminumWireBlack, 200);
Translation.addTranslation("Aluminum Wire", {
ru: "Алюминиевый провод"
})
Item.registerNameOverrideFunction(BlockID.AluminumWireBlack, function(item, name){
    return Native.Color.White + name + "\n§1" + "Свойства:\n1.Передаёт 200 единиц энергии Space Joule\n2.Крашенный";
});





var RenderAPI = {
    wire: {},
    addGroupWire(id){
      let group = ICRender.getGroup("sj-wire");
      group.add(id, -1);
      let model = new ICRender.Model();
        
      BlockRenderer.setStaticICRender(id, -1, model); 
    },
    setWire(id, width){
      let group = ICRender.getGroup("sj-wire");
      group.add(id, -1);
      let boxes = [
      	{side: [0, 1, 0], box: [0.5 - width / 2, 0.5 + width / 2, 0.5 - width / 2, 0.5 + width / 2, 1, 0.5 + width / 2]}, 
        {side: [0, -1, 0], box: [0.5 - width / 2, 0, 0.5 - width / 2, 0.5 + width / 2, 0.5 - width / 2, 0.5 + width / 2]}, 
    		{side: [0, 0, 1], box: [0.5 - width / 2, 0.5 - width / 2, 0.5 + width / 2, 0.5 + width / 2, 0.5 + width / 2, 1]}, 
        {side: [0, 0, -1], box: [0.5 - width / 2, 0.5 - width / 2, 0, 0.5 + width / 2, 0.5 + width / 2, 0.5 - width / 2]},
        {side: [1, 0, 0], box: [0.5 + width / 2, 0.5 - width / 2, 0.5 - width / 2, 1, 0.5 + width / 2, 0.5 + width / 2]},
        {side: [-1, 0, 0], box: [0, 0.5 - width / 2, 0.5 - width / 2, 0.5 - width / 2, 0.5 + width / 2, 0.5 + width / 2]}
      ];
      let model = new ICRender.Model();
      model.addEntry(new BlockRenderer.Model(0.5 - width / 2, 0.5 - width / 2, 0.5 - width / 2, 0.5 + width / 2, 0.5 + width / 2, 0.5 + width / 2, id, 0)); 
      this.wire[id] = {};
      this.wire[id].boxes = boxes;
      this.wire[id].width = width;
      for(let i in boxes){ 
        let box = boxes[i].box; 
        let side = boxes[i].side; 
        model.addEntry(new BlockRenderer.Model(box[0], box[1], box[2], box[3], box[4], box[5], id, 0)).setCondition(new ICRender.BLOCK(side[0], side[1], side[2], group, false)); 
      }
      this.wire[id].model = model;
      BlockRenderer.setStaticICRender(id, -1, model); 
      BlockRenderer.enableCoordMapping(id, -1, model);
    },
    getModel(id){
    	if(!this.wire[id])
    		return;
    	let model = new ICRender.Model();
    	model.addEntry(new BlockRenderer.Model(0.5 - this.wire[id].width / 2, 0.5 - this.wire[id].width / 2, 0.5 - this.wire[id].width / 2, 0.5 + this.wire[id].width / 2, 0.5 + this.wire[id].width / 2, 0.5 + this.wire[id].width / 2, id, 0)); 
    	for(let i in this.wire[id].boxes){ 
        let box = this.wire[id].boxes[i].box; 
        let side = this.wire[id].boxes[i].side; 
        model.addEntry(new BlockRenderer.Model(box[0], box[1], box[2], box[3], box[4], box[5], id, 0)).setCondition(new ICRender.BLOCK(side[0], side[1], side[2], ICRender.getGroup("sc-wire"), false)); 
      }
      return model;
    }
};
Callback.addCallback("DestroyBlock", function(pos, block, player){
    if(RenderAPI.wire[block.id] || MachineAPI.all[block.id]) BlockRenderer.unmapAtCoords(pos.x, pos.y, pos.z, true);
})
IDRegistry.genBlockID("ImprovedCopperWire");
Block.createBlock("ImprovedCopperWire", [ {name: "Improved Copper Wire", texture: [["wire_copper", 0]], inCreative: true}]);
RenderAPI.setWire(BlockID.ImprovedCopperWire, 4/16);
sj.registerWire(BlockID.ImprovedCopperWire, 300);
Translation.addTranslation("Improved Copper Wire", {
ru: "Улучшенный медный провод"
})
Item.registerNameOverrideFunction(BlockID.ImprovedCopperWire, function(item, name){
    return Native.Color.White + name + "\n§1" + "Свойства:\n1.Улучшенный провод\n2.Передаёт 300 единиц энергии Space Joule";
});






var RenderAPI = {
    wire: {},
    addGroupWire(id){
      let group = ICRender.getGroup("sj-wire");
      group.add(id, -1);
      let model = new ICRender.Model();
        
      BlockRenderer.setStaticICRender(id, -1, model); 
    },
    setWire(id, width){
      let group = ICRender.getGroup("sj-wire");
      group.add(id, -1);
      let boxes = [
      	{side: [0, 1, 0], box: [0.5 - width / 3, 0.5 + width / 3, 0.5 - width / 3, 0.5 + width / 3, 1, 0.5 + width / 3]}, 
        {side: [0, -1, 0], box: [0.5 - width / 3, 0, 0.5 - width / 3, 0.5 + width / 3, 0.5 - width / 3, 0.5 + width / 3]}, 
    		{side: [0, 0, 1], box: [0.5 - width / 3, 0.5 - width / 3, 0.5 + width / 3, 0.5 + width / 3, 0.5 + width / 3, 1]}, 
        {side: [0, 0, -1], box: [0.5 - width / 3, 0.5 - width / 3, 0, 0.5 + width / 3, 0.5 + width / 3, 0.5 - width / 3]},
        {side: [1, 0, 0], box: [0.5 + width / 3, 0.5 - width / 3/**/, 0.5 - width / 3, 1, 0.5 + width / 3, 0.5 + width / 3]},
        {side: [-1, 0, 0], box: [0, 0.5 - width / 3, 0.5 - width / 3, 0.5 - width / 3, 0.5 + width / 3, 0.5 + width / 3]}
      ];
      let model = new ICRender.Model();
      model.addEntry(new BlockRenderer.Model(0.5 - width / 3, 0.5 - width / 3, 0.5 - width / 3, 0.5 + width / 3, 0.5 + width / 3, 0.5 + width / 3, id, 0)); 
      this.wire[id] = {};
      this.wire[id].boxes = boxes;
      this.wire[id].width = width;
      for(let i in boxes){ 
        let box = boxes[i].box; 
        let side = boxes[i].side; 
        model.addEntry(new BlockRenderer.Model(box[0], box[1], box[2], box[3], box[4], box[5], id, 0)).setCondition(new ICRender.BLOCK(side[0], side[1], side[2], group, false)); 
      }
      this.wire[id].model = model;
      BlockRenderer.setStaticICRender(id, -1, model); 
      BlockRenderer.enableCoordMapping(id, -1, model);
    },
    getModel(id){
    	if(!this.wire[id])
    		return;
    	let model = new ICRender.Model();
    	model.addEntry(new BlockRenderer.Model(0.5 - this.wire[id].width / 4, 0.5 - this.wire[id].width / 4, 0.5 - this.wire[id].width / 4, 0.5 + this.wire[id].width / 4, 0.5 + this.wire[id].width / 4, 0.5 + this.wire[id].width / 4, id, 0)); 
    	for(let i in this.wire[id].boxes){ 
        let box = this.wire[id].boxes[i].box; 
        let side = this.wire[id].boxes[i].side; 
        model.addEntry(new BlockRenderer.Model(box[0], box[1], box[2], box[3], box[4], box[5], id, 0)).setCondition(new ICRender.BLOCK(side[0], side[1], side[2], ICRender.getGroup("sc-wire"), false)); 
      }
      return model;
    }
};
Callback.addCallback("DestroyBlock", function(pos, block, player){
    if(RenderAPI.wire[block.id] || MachineAPI.all[block.id]) BlockRenderer.unmapAtCoords(pos.x, pos.y, pos.z, true);
})
IDRegistry.genBlockID("CopperWire");
Block.createBlock("CopperWire", [ {name: "Copper Wire", texture: [["copper_wire", 0]], inCreative: true}]);
RenderAPI.setWire(BlockID.CopperWire, 4/16);
sj.registerWire(BlockID.CopperWire, 100);
Translation.addTranslation("Copper Wire", {
ru: "Медный провод"
})
Item.registerNameOverrideFunction(BlockID.CopperWire, function(item, name){
    return Native.Color.White + name + "\n§1" + "Свойства:\n1.Передаёт 100 единиц энергии Space Joule";
});






var RenderAPI = {
    wire: {},
    addGroupWire(id){
      let group = ICRender.getGroup("sc-wire");
      group.add(id, -1);
      let model = new ICRender.Model();
        
      BlockRenderer.setStaticICRender(id, -1, model); 
    },
    setWire(id, width){
      let group = ICRender.getGroup("sc-wire");
      group.add(id, -1);
      let boxes = [
      	{side: [0, 1, 0], box: [0.5 - width / 2, 0.5 + width / 2, 0.5 - width / 2, 0.5 + width / 2, 1, 0.5 + width / 2]}, 
        {side: [0, -1, 0], box: [0.5 - width / 2, 0, 0.5 - width / 2, 0.5 + width / 2, 0.5 - width / 2, 0.5 + width / 2]}, 
    		{side: [0, 0, 1], box: [0.5 - width / 2, 0.5 - width / 2, 0.5 + width / 2, 0.5 + width / 2, 0.5 + width / 2, 1]}, 
        {side: [0, 0, -1], box: [0.5 - width / 2, 0.5 - width / 2, 0, 0.5 + width / 2, 0.5 + width / 2, 0.5 - width / 2]},
        {side: [1, 0, 0], box: [0.5 + width / 2, 0.5 - width / 2, 0.5 - width / 2, 1, 0.5 + width / 2, 0.5 + width / 2]},
        {side: [-1, 0, 0], box: [0, 0.5 - width / 2, 0.5 - width / 2, 0.5 - width / 2, 0.5 + width / 2, 0.5 + width / 2]}
      ];
      let model = new ICRender.Model();
      model.addEntry(new BlockRenderer.Model(0.5 - width / 2, 0.5 - width / 2, 0.5 - width / 2, 0.5 + width / 2, 0.5 + width / 2, 0.5 + width / 2, id, 0)); 
      this.wire[id] = {};
      this.wire[id].boxes = boxes;
      this.wire[id].width = width;
      for(let i in boxes){ 
        let box = boxes[i].box; 
        let side = boxes[i].side; 
        model.addEntry(new BlockRenderer.Model(box[0], box[1], box[2], box[3], box[4], box[5], id, 0)).setCondition(new ICRender.BLOCK(side[0], side[1], side[2], group, false)); 
      }
      this.wire[id].model = model;
      BlockRenderer.setStaticICRender(id, -1, model); 
      BlockRenderer.enableCoordMapping(id, -1, model);
    },
    getModel(id){
    	if(!this.wire[id])
    		return;
    	let model = new ICRender.Model();
    	model.addEntry(new BlockRenderer.Model(0.5 - this.wire[id].width / 2, 0.5 - this.wire[id].width / 2, 0.5 - this.wire[id].width / 2, 0.5 + this.wire[id].width / 2, 0.5 + this.wire[id].width / 2, 0.5 + this.wire[id].width / 2, id, 0)); 
    	for(let i in this.wire[id].boxes){ 
        let box = this.wire[id].boxes[i].box; 
        let side = this.wire[id].boxes[i].side; 
        model.addEntry(new BlockRenderer.Model(box[0], box[1], box[2], box[3], box[4], box[5], id, 0)).setCondition(new ICRender.BLOCK(side[0], side[1], side[2], ICRender.getGroup("sc-wire"), false)); 
      }
      return model;
    }
};
Callback.addCallback("DestroyBlock", function(pos, block, player){
    if(RenderAPI.wire[block.id] || MachineAPI.all[block.id]) BlockRenderer.unmapAtCoords(pos.x, pos.y, pos.z, true);
})
IDRegistry.genBlockID("PipeOxygenWhite");
Block.createBlock("PipeOxygenWhite", [ {name: "Pipe Oxygen White", texture: [["Pipe Oxygen White", 0]], inCreative: true}]);
RenderAPI.setWire(BlockID.PipeOxygenWhite, 4/16);
ob.registerWire(BlockID.PipeOxygenWhite, 200);
Translation.addTranslation("Pipe Oxygen White", {
ru: "Кислородная труба"
})
Item.registerNameOverrideFunction(BlockID.PipeOxygenWhite, function(item, name){
    return Native.Color.White + name + "\n§1" + "Свойства:\n1.Можно покрасить\n2.Может передовать 200 единиц кислорода";
});






var RenderAPI = {
    wire: {},
    addGroupWire(id){
      let group = ICRender.getGroup("sc-wire");
      group.add(id, -1);
      let model = new ICRender.Model();
        
      BlockRenderer.setStaticICRender(id, -1, model); 
    },
    setWire(id, width){
      let group = ICRender.getGroup("sc-wire");
      group.add(id, -1);
      let boxes = [
      	{side: [0, 1, 0], box: [0.5 - width / 2, 0.5 + width / 2, 0.5 - width / 2, 0.5 + width / 2, 1, 0.5 + width / 2]}, 
        {side: [0, -1, 0], box: [0.5 - width / 2, 0, 0.5 - width / 2, 0.5 + width / 2, 0.5 - width / 2, 0.5 + width / 2]}, 
    		{side: [0, 0, 1], box: [0.5 - width / 2, 0.5 - width / 2, 0.5 + width / 2, 0.5 + width / 2, 0.5 + width / 2, 1]}, 
        {side: [0, 0, -1], box: [0.5 - width / 2, 0.5 - width / 2, 0, 0.5 + width / 2, 0.5 + width / 2, 0.5 - width / 2]},
        {side: [1, 0, 0], box: [0.5 + width / 2, 0.5 - width / 2, 0.5 - width / 2, 1, 0.5 + width / 2, 0.5 + width / 2]},
        {side: [-1, 0, 0], box: [0, 0.5 - width / 2, 0.5 - width / 2, 0.5 - width / 2, 0.5 + width / 2, 0.5 + width / 2]}
      ];
      let model = new ICRender.Model();
      model.addEntry(new BlockRenderer.Model(0.5 - width / 2, 0.5 - width / 2, 0.5 - width / 2, 0.5 + width / 2, 0.5 + width / 2, 0.5 + width / 2, id, 0)); 
      this.wire[id] = {};
      this.wire[id].boxes = boxes;
      this.wire[id].width = width;
      for(let i in boxes){ 
        let box = boxes[i].box; 
        let side = boxes[i].side; 
        model.addEntry(new BlockRenderer.Model(box[0], box[1], box[2], box[3], box[4], box[5], id, 0)).setCondition(new ICRender.BLOCK(side[0], side[1], side[2], group, false)); 
      }
      this.wire[id].model = model;
      BlockRenderer.setStaticICRender(id, -1, model); 
      BlockRenderer.enableCoordMapping(id, -1, model);
    },
    getModel(id){
    	if(!this.wire[id])
    		return;
    	let model = new ICRender.Model();
    	model.addEntry(new BlockRenderer.Model(0.5 - this.wire[id].width / 2, 0.5 - this.wire[id].width / 2, 0.5 - this.wire[id].width / 2, 0.5 + this.wire[id].width / 2, 0.5 + this.wire[id].width / 2, 0.5 + this.wire[id].width / 2, id, 0)); 
    	for(let i in this.wire[id].boxes){ 
        let box = this.wire[id].boxes[i].box; 
        let side = this.wire[id].boxes[i].side; 
        model.addEntry(new BlockRenderer.Model(box[0], box[1], box[2], box[3], box[4], box[5], id, 0)).setCondition(new ICRender.BLOCK(side[0], side[1], side[2], ICRender.getGroup("sc-wire"), false)); 
      }
      return model;
    }
};
Callback.addCallback("DestroyBlock", function(pos, block, player){
    if(RenderAPI.wire[block.id] || MachineAPI.all[block.id]) BlockRenderer.unmapAtCoords(pos.x, pos.y, pos.z, true);
})
IDRegistry.genBlockID("PipeOxygenGray");
Block.createBlock("PipeOxygenGray", [ {name: "Pipe Oxygen Gray", texture: [["Pipe Oxygen Gray", 0]], inCreative: true}]);
RenderAPI.setWire(BlockID.PipeOxygenGray, 4/16);
ob.registerWire(BlockID.PipeOxygenGray, 200);
Translation.addTranslation("Pipe Oxygen Gray", {
ru: "Серая кислородная труба"
})
Item.registerNameOverrideFunction(BlockID.PipeOxygenGray, function(item, name){
    return Native.Color.White + name + "\n§1" + "Свойства:\n1.Крашенная\n2.Может передовать 200 единиц кислорода";
});



var RenderAPI = {
    wire: {},
    addGroupWire(id){
      let group = ICRender.getGroup("sc-wire");
      group.add(id, -1);
      let model = new ICRender.Model();
        
      BlockRenderer.setStaticICRender(id, -1, model); 
    },
    setWire(id, width){
      let group = ICRender.getGroup("sc-wire");
      group.add(id, -1);
      let boxes = [
      	{side: [0, 1, 0], box: [0.5 - width / 2, 0.5 + width / 2, 0.5 - width / 2, 0.5 + width / 2, 1, 0.5 + width / 2]}, 
        {side: [0, -1, 0], box: [0.5 - width / 2, 0, 0.5 - width / 2, 0.5 + width / 2, 0.5 - width / 2, 0.5 + width / 2]}, 
    		{side: [0, 0, 1], box: [0.5 - width / 2, 0.5 - width / 2, 0.5 + width / 2, 0.5 + width / 2, 0.5 + width / 2, 1]}, 
        {side: [0, 0, -1], box: [0.5 - width / 2, 0.5 - width / 2, 0, 0.5 + width / 2, 0.5 + width / 2, 0.5 - width / 2]},
        {side: [1, 0, 0], box: [0.5 + width / 2, 0.5 - width / 2, 0.5 - width / 2, 1, 0.5 + width / 2, 0.5 + width / 2]},
        {side: [-1, 0, 0], box: [0, 0.5 - width / 2, 0.5 - width / 2, 0.5 - width / 2, 0.5 + width / 2, 0.5 + width / 2]}
      ];
      let model = new ICRender.Model();
      model.addEntry(new BlockRenderer.Model(0.5 - width / 2, 0.5 - width / 2, 0.5 - width / 2, 0.5 + width / 2, 0.5 + width / 2, 0.5 + width / 2, id, 0)); 
      this.wire[id] = {};
      this.wire[id].boxes = boxes;
      this.wire[id].width = width;
      for(let i in boxes){ 
        let box = boxes[i].box; 
        let side = boxes[i].side; 
        model.addEntry(new BlockRenderer.Model(box[0], box[1], box[2], box[3], box[4], box[5], id, 0)).setCondition(new ICRender.BLOCK(side[0], side[1], side[2], group, false)); 
      }
      this.wire[id].model = model;
      BlockRenderer.setStaticICRender(id, -1, model); 
      BlockRenderer.enableCoordMapping(id, -1, model);
    },
    getModel(id){
    	if(!this.wire[id])
    		return;
    	let model = new ICRender.Model();
    	model.addEntry(new BlockRenderer.Model(0.5 - this.wire[id].width / 2, 0.5 - this.wire[id].width / 2, 0.5 - this.wire[id].width / 2, 0.5 + this.wire[id].width / 2, 0.5 + this.wire[id].width / 2, 0.5 + this.wire[id].width / 2, id, 0)); 
    	for(let i in this.wire[id].boxes){ 
        let box = this.wire[id].boxes[i].box; 
        let side = this.wire[id].boxes[i].side; 
        model.addEntry(new BlockRenderer.Model(box[0], box[1], box[2], box[3], box[4], box[5], id, 0)).setCondition(new ICRender.BLOCK(side[0], side[1], side[2], ICRender.getGroup("sc-wire"), false)); 
      }
      return model;
    }
};
Callback.addCallback("DestroyBlock", function(pos, block, player){
    if(RenderAPI.wire[block.id] || MachineAPI.all[block.id]) BlockRenderer.unmapAtCoords(pos.x, pos.y, pos.z, true);
})
IDRegistry.genBlockID("PipeOxygenLime");
Block.createBlock("PipeOxygenLime", [ {name: "Pipe Oxygen Lime", texture: [["Pipe Oxygen Lime", 0]], inCreative: true}]);
RenderAPI.setWire(BlockID.PipeOxygenLime, 4/16);
ob.registerWire(BlockID.PipeOxygenLime, 200);
Translation.addTranslation("Pipe Oxygen Lime", {
ru: "Лаймовая кислородная труба"
})
Item.registerNameOverrideFunction(BlockID.PipeOxygenLime, function(item, name){
    return Native.Color.White + name + "\n§1" + "Свойства:\n1.Крашенная\n2.Может передовать 200 единиц кислорода";
});



var RenderAPI = {
    wire: {},
    addGroupWire(id){
      let group = ICRender.getGroup("sc-wire");
      group.add(id, -1);
      let model = new ICRender.Model();
        
      BlockRenderer.setStaticICRender(id, -1, model); 
    },
    setWire(id, width){
      let group = ICRender.getGroup("sc-wire");
      group.add(id, -1);
      let boxes = [
      	{side: [0, 1, 0], box: [0.5 - width / 2, 0.5 + width / 2, 0.5 - width / 2, 0.5 + width / 2, 1, 0.5 + width / 2]}, 
        {side: [0, -1, 0], box: [0.5 - width / 2, 0, 0.5 - width / 2, 0.5 + width / 2, 0.5 - width / 2, 0.5 + width / 2]}, 
    		{side: [0, 0, 1], box: [0.5 - width / 2, 0.5 - width / 2, 0.5 + width / 2, 0.5 + width / 2, 0.5 + width / 2, 1]}, 
        {side: [0, 0, -1], box: [0.5 - width / 2, 0.5 - width / 2, 0, 0.5 + width / 2, 0.5 + width / 2, 0.5 - width / 2]},
        {side: [1, 0, 0], box: [0.5 + width / 2, 0.5 - width / 2, 0.5 - width / 2, 1, 0.5 + width / 2, 0.5 + width / 2]},
        {side: [-1, 0, 0], box: [0, 0.5 - width / 2, 0.5 - width / 2, 0.5 - width / 2, 0.5 + width / 2, 0.5 + width / 2]}
      ];
      let model = new ICRender.Model();
      model.addEntry(new BlockRenderer.Model(0.5 - width / 2, 0.5 - width / 2, 0.5 - width / 2, 0.5 + width / 2, 0.5 + width / 2, 0.5 + width / 2, id, 0)); 
      this.wire[id] = {};
      this.wire[id].boxes = boxes;
      this.wire[id].width = width;
      for(let i in boxes){ 
        let box = boxes[i].box; 
        let side = boxes[i].side; 
        model.addEntry(new BlockRenderer.Model(box[0], box[1], box[2], box[3], box[4], box[5], id, 0)).setCondition(new ICRender.BLOCK(side[0], side[1], side[2], group, false)); 
      }
      this.wire[id].model = model;
      BlockRenderer.setStaticICRender(id, -1, model); 
      BlockRenderer.enableCoordMapping(id, -1, model);
    },
    getModel(id){
    	if(!this.wire[id])
    		return;
    	let model = new ICRender.Model();
    	model.addEntry(new BlockRenderer.Model(0.5 - this.wire[id].width / 2, 0.5 - this.wire[id].width / 2, 0.5 - this.wire[id].width / 2, 0.5 + this.wire[id].width / 2, 0.5 + this.wire[id].width / 2, 0.5 + this.wire[id].width / 2, id, 0)); 
    	for(let i in this.wire[id].boxes){ 
        let box = this.wire[id].boxes[i].box; 
        let side = this.wire[id].boxes[i].side; 
        model.addEntry(new BlockRenderer.Model(box[0], box[1], box[2], box[3], box[4], box[5], id, 0)).setCondition(new ICRender.BLOCK(side[0], side[1], side[2], ICRender.getGroup("sc-wire"), false)); 
      }
      return model;
    }
};
Callback.addCallback("DestroyBlock", function(pos, block, player){
    if(RenderAPI.wire[block.id] || MachineAPI.all[block.id]) BlockRenderer.unmapAtCoords(pos.x, pos.y, pos.z, true);
})
IDRegistry.genBlockID("PipeOxygenOrange");
Block.createBlock("PipeOxygenOrange", [ {name: "Pipe Oxygen Orange", texture: [["Pipe Oxygen Orange", 0]], inCreative: true}]);
RenderAPI.setWire(BlockID.PipeOxygenOrange, 4/16);
ob.registerWire(BlockID.PipeOxygenOrange, 200);
Translation.addTranslation("Pipe Oxygen Orange", {
ru: "Оранжевая кислородная труба"
})
Item.registerNameOverrideFunction(BlockID.PipeOxygenOrange, function(item, name){
    return Native.Color.White + name + "\n§1" + "Свойства:\n1.Крашенная\n2.Может передовать 200 единиц кислорода";
});



var RenderAPI = {
    wire: {},
    addGroupWire(id){
      let group = ICRender.getGroup("sc-wire");
      group.add(id, -1);
      let model = new ICRender.Model();
        
      BlockRenderer.setStaticICRender(id, -1, model); 
    },
    setWire(id, width){
      let group = ICRender.getGroup("sc-wire");
      group.add(id, -1);
      let boxes = [
      	{side: [0, 1, 0], box: [0.5 - width / 2, 0.5 + width / 2, 0.5 - width / 2, 0.5 + width / 2, 1, 0.5 + width / 2]}, 
        {side: [0, -1, 0], box: [0.5 - width / 2, 0, 0.5 - width / 2, 0.5 + width / 2, 0.5 - width / 2, 0.5 + width / 2]}, 
    		{side: [0, 0, 1], box: [0.5 - width / 2, 0.5 - width / 2, 0.5 + width / 2, 0.5 + width / 2, 0.5 + width / 2, 1]}, 
        {side: [0, 0, -1], box: [0.5 - width / 2, 0.5 - width / 2, 0, 0.5 + width / 2, 0.5 + width / 2, 0.5 - width / 2]},
        {side: [1, 0, 0], box: [0.5 + width / 2, 0.5 - width / 2, 0.5 - width / 2, 1, 0.5 + width / 2, 0.5 + width / 2]},
        {side: [-1, 0, 0], box: [0, 0.5 - width / 2, 0.5 - width / 2, 0.5 - width / 2, 0.5 + width / 2, 0.5 + width / 2]}
      ];
      let model = new ICRender.Model();
      model.addEntry(new BlockRenderer.Model(0.5 - width / 2, 0.5 - width / 2, 0.5 - width / 2, 0.5 + width / 2, 0.5 + width / 2, 0.5 + width / 2, id, 0)); 
      this.wire[id] = {};
      this.wire[id].boxes = boxes;
      this.wire[id].width = width;
      for(let i in boxes){ 
        let box = boxes[i].box; 
        let side = boxes[i].side; 
        model.addEntry(new BlockRenderer.Model(box[0], box[1], box[2], box[3], box[4], box[5], id, 0)).setCondition(new ICRender.BLOCK(side[0], side[1], side[2], group, false)); 
      }
      this.wire[id].model = model;
      BlockRenderer.setStaticICRender(id, -1, model); 
      BlockRenderer.enableCoordMapping(id, -1, model);
    },
    getModel(id){
    	if(!this.wire[id])
    		return;
    	let model = new ICRender.Model();
    	model.addEntry(new BlockRenderer.Model(0.5 - this.wire[id].width / 2, 0.5 - this.wire[id].width / 2, 0.5 - this.wire[id].width / 2, 0.5 + this.wire[id].width / 2, 0.5 + this.wire[id].width / 2, 0.5 + this.wire[id].width / 2, id, 0)); 
    	for(let i in this.wire[id].boxes){ 
        let box = this.wire[id].boxes[i].box; 
        let side = this.wire[id].boxes[i].side; 
        model.addEntry(new BlockRenderer.Model(box[0], box[1], box[2], box[3], box[4], box[5], id, 0)).setCondition(new ICRender.BLOCK(side[0], side[1], side[2], ICRender.getGroup("sc-wire"), false)); 
      }
      return model;
    }
};
Callback.addCallback("DestroyBlock", function(pos, block, player){
    if(RenderAPI.wire[block.id] || MachineAPI.all[block.id]) BlockRenderer.unmapAtCoords(pos.x, pos.y, pos.z, true);
})
IDRegistry.genBlockID("PipeOxygenSilver");
Block.createBlock("PipeOxygenSilver", [ {name: "Pipe Oxygen Silver", texture: [["Pipe Oxygen Silver", 0]], inCreative: true}]);
RenderAPI.setWire(BlockID.PipeOxygenSilver, 4/16);
ob.registerWire(BlockID.PipeOxygenWhite, 200);
Translation.addTranslation("Pipe Oxygen Silver", {
ru: "Серебрянная кислородная труба"
})
Item.registerNameOverrideFunction(BlockID.PipeOxygenSilver, function(item, name){
    return Native.Color.White + name + "\n§1" + "Свойства:\n1.Крашенная\n2.Может передовать 200 единиц кислорода";
});



var RenderAPI = {
    wire: {},
    addGroupWire(id){
      let group = ICRender.getGroup("sc-wire");
      group.add(id, -1);
      let model = new ICRender.Model();
        
      BlockRenderer.setStaticICRender(id, -1, model); 
    },
    setWire(id, width){
      let group = ICRender.getGroup("sc-wire");
      group.add(id, -1);
      let boxes = [
      	{side: [0, 1, 0], box: [0.5 - width / 2, 0.5 + width / 2, 0.5 - width / 2, 0.5 + width / 2, 1, 0.5 + width / 2]}, 
        {side: [0, -1, 0], box: [0.5 - width / 2, 0, 0.5 - width / 2, 0.5 + width / 2, 0.5 - width / 2, 0.5 + width / 2]}, 
    		{side: [0, 0, 1], box: [0.5 - width / 2, 0.5 - width / 2, 0.5 + width / 2, 0.5 + width / 2, 0.5 + width / 2, 1]}, 
        {side: [0, 0, -1], box: [0.5 - width / 2, 0.5 - width / 2, 0, 0.5 + width / 2, 0.5 + width / 2, 0.5 - width / 2]},
        {side: [1, 0, 0], box: [0.5 + width / 2, 0.5 - width / 2, 0.5 - width / 2, 1, 0.5 + width / 2, 0.5 + width / 2]},
        {side: [-1, 0, 0], box: [0, 0.5 - width / 2, 0.5 - width / 2, 0.5 - width / 2, 0.5 + width / 2, 0.5 + width / 2]}
      ];
      let model = new ICRender.Model();
      model.addEntry(new BlockRenderer.Model(0.5 - width / 2, 0.5 - width / 2, 0.5 - width / 2, 0.5 + width / 2, 0.5 + width / 2, 0.5 + width / 2, id, 0)); 
      this.wire[id] = {};
      this.wire[id].boxes = boxes;
      this.wire[id].width = width;
      for(let i in boxes){ 
        let box = boxes[i].box; 
        let side = boxes[i].side; 
        model.addEntry(new BlockRenderer.Model(box[0], box[1], box[2], box[3], box[4], box[5], id, 0)).setCondition(new ICRender.BLOCK(side[0], side[1], side[2], group, false)); 
      }
      this.wire[id].model = model;
      BlockRenderer.setStaticICRender(id, -1, model); 
      BlockRenderer.enableCoordMapping(id, -1, model);
    },
    getModel(id){
    	if(!this.wire[id])
    		return;
    	let model = new ICRender.Model();
    	model.addEntry(new BlockRenderer.Model(0.5 - this.wire[id].width / 2, 0.5 - this.wire[id].width / 2, 0.5 - this.wire[id].width / 2, 0.5 + this.wire[id].width / 2, 0.5 + this.wire[id].width / 2, 0.5 + this.wire[id].width / 2, id, 0)); 
    	for(let i in this.wire[id].boxes){ 
        let box = this.wire[id].boxes[i].box; 
        let side = this.wire[id].boxes[i].side; 
        model.addEntry(new BlockRenderer.Model(box[0], box[1], box[2], box[3], box[4], box[5], id, 0)).setCondition(new ICRender.BLOCK(side[0], side[1], side[2], ICRender.getGroup("sc-wire"), false)); 
      }
      return model;
    }
};
Callback.addCallback("DestroyBlock", function(pos, block, player){
    if(RenderAPI.wire[block.id] || MachineAPI.all[block.id]) BlockRenderer.unmapAtCoords(pos.x, pos.y, pos.z, true);
})
IDRegistry.genBlockID("PipeOxygenRed");
Block.createBlock("PipeOxygenRed", [ {name: "Pipe Oxygen Red", texture: [["Pipe Oxygen Red", 0]], inCreative: true}]);
RenderAPI.setWire(BlockID.PipeOxygenRed, 4/16);
ob.registerWire(BlockID.PipeOxygenRed, 200);
Translation.addTranslation("Pipe Oxygen Red", {
ru: "Красная кислородная труба"
})
Item.registerNameOverrideFunction(BlockID.PipeOxygenRed, function(item, name){
    return Native.Color.White + name + "\n§1" + "Свойства:\n1.Крашенная\n2.Может передовать 200 единиц кислорода";
});




var RenderAPI = {
    wire: {},
    addGroupWire(id){
      let group = ICRender.getGroup("sc-wire");
      group.add(id, -1);
      let model = new ICRender.Model();
        
      BlockRenderer.setStaticICRender(id, -1, model); 
    },
    setWire(id, width){
      let group = ICRender.getGroup("sc-wire");
      group.add(id, -1);
      let boxes = [
      	{side: [0, 1, 0], box: [0.5 - width / 2, 0.5 + width / 2, 0.5 - width / 2, 0.5 + width / 2, 1, 0.5 + width / 2]}, 
        {side: [0, -1, 0], box: [0.5 - width / 2, 0, 0.5 - width / 2, 0.5 + width / 2, 0.5 - width / 2, 0.5 + width / 2]}, 
    		{side: [0, 0, 1], box: [0.5 - width / 2, 0.5 - width / 2, 0.5 + width / 2, 0.5 + width / 2, 0.5 + width / 2, 1]}, 
        {side: [0, 0, -1], box: [0.5 - width / 2, 0.5 - width / 2, 0, 0.5 + width / 2, 0.5 + width / 2, 0.5 - width / 2]},
        {side: [1, 0, 0], box: [0.5 + width / 2, 0.5 - width / 2, 0.5 - width / 2, 1, 0.5 + width / 2, 0.5 + width / 2]},
        {side: [-1, 0, 0], box: [0, 0.5 - width / 2, 0.5 - width / 2, 0.5 - width / 2, 0.5 + width / 2, 0.5 + width / 2]}
      ];
      let model = new ICRender.Model();
      model.addEntry(new BlockRenderer.Model(0.5 - width / 2, 0.5 - width / 2, 0.5 - width / 2, 0.5 + width / 2, 0.5 + width / 2, 0.5 + width / 2, id, 0)); 
      this.wire[id] = {};
      this.wire[id].boxes = boxes;
      this.wire[id].width = width;
      for(let i in boxes){ 
        let box = boxes[i].box; 
        let side = boxes[i].side; 
        model.addEntry(new BlockRenderer.Model(box[0], box[1], box[2], box[3], box[4], box[5], id, 0)).setCondition(new ICRender.BLOCK(side[0], side[1], side[2], group, false)); 
      }
      this.wire[id].model = model;
      BlockRenderer.setStaticICRender(id, -1, model); 
      BlockRenderer.enableCoordMapping(id, -1, model);
    },
    getModel(id){
    	if(!this.wire[id])
    		return;
    	let model = new ICRender.Model();
    	model.addEntry(new BlockRenderer.Model(0.5 - this.wire[id].width / 2, 0.5 - this.wire[id].width / 2, 0.5 - this.wire[id].width / 2, 0.5 + this.wire[id].width / 2, 0.5 + this.wire[id].width / 2, 0.5 + this.wire[id].width / 2, id, 0)); 
    	for(let i in this.wire[id].boxes){ 
        let box = this.wire[id].boxes[i].box; 
        let side = this.wire[id].boxes[i].side; 
        model.addEntry(new BlockRenderer.Model(box[0], box[1], box[2], box[3], box[4], box[5], id, 0)).setCondition(new ICRender.BLOCK(side[0], side[1], side[2], ICRender.getGroup("sc-wire"), false)); 
      }
      return model;
    }
};
Callback.addCallback("DestroyBlock", function(pos, block, player){
    if(RenderAPI.wire[block.id] || MachineAPI.all[block.id]) BlockRenderer.unmapAtCoords(pos.x, pos.y, pos.z, true);
})
IDRegistry.genBlockID("PipeOxygenBrown");
Block.createBlock("PipeOxygenBrown", [ {name: "Pipe Oxygen Brown", texture: [["Pipe Oxygen Brown", 0]], inCreative: true}]);
RenderAPI.setWire(BlockID.PipeOxygenBrown, 4/16);
ob.registerWire(BlockID.PipeOxygenBrown, 200);
Translation.addTranslation("Pipe Oxygen Brown", {
ru: "Коричневая кислородная труба"
})
Item.registerNameOverrideFunction(BlockID.PipeOxygenBrown, function(item, name){
    return Native.Color.White + name + "\n§1" + "Свойства:\n1.Крашенная\n2.Может передовать 200 единиц кислорода";
});



var RenderAPI = {
    wire: {},
    addGroupWire(id){
      let group = ICRender.getGroup("sc-wire");
      group.add(id, -1);
      let model = new ICRender.Model();
        
      BlockRenderer.setStaticICRender(id, -1, model); 
    },
    setWire(id, width){
      let group = ICRender.getGroup("sc-wire");
      group.add(id, -1);
      let boxes = [
      	{side: [0, 1, 0], box: [0.5 - width / 2, 0.5 + width / 2, 0.5 - width / 2, 0.5 + width / 2, 1, 0.5 + width / 2]}, 
        {side: [0, -1, 0], box: [0.5 - width / 2, 0, 0.5 - width / 2, 0.5 + width / 2, 0.5 - width / 2, 0.5 + width / 2]}, 
    		{side: [0, 0, 1], box: [0.5 - width / 2, 0.5 - width / 2, 0.5 + width / 2, 0.5 + width / 2, 0.5 + width / 2, 1]}, 
        {side: [0, 0, -1], box: [0.5 - width / 2, 0.5 - width / 2, 0, 0.5 + width / 2, 0.5 + width / 2, 0.5 - width / 2]},
        {side: [1, 0, 0], box: [0.5 + width / 2, 0.5 - width / 2, 0.5 - width / 2, 1, 0.5 + width / 2, 0.5 + width / 2]},
        {side: [-1, 0, 0], box: [0, 0.5 - width / 2, 0.5 - width / 2, 0.5 - width / 2, 0.5 + width / 2, 0.5 + width / 2]}
      ];
      let model = new ICRender.Model();
      model.addEntry(new BlockRenderer.Model(0.5 - width / 2, 0.5 - width / 2, 0.5 - width / 2, 0.5 + width / 2, 0.5 + width / 2, 0.5 + width / 2, id, 0)); 
      this.wire[id] = {};
      this.wire[id].boxes = boxes;
      this.wire[id].width = width;
      for(let i in boxes){ 
        let box = boxes[i].box; 
        let side = boxes[i].side; 
        model.addEntry(new BlockRenderer.Model(box[0], box[1], box[2], box[3], box[4], box[5], id, 0)).setCondition(new ICRender.BLOCK(side[0], side[1], side[2], group, false)); 
      }
      this.wire[id].model = model;
      BlockRenderer.setStaticICRender(id, -1, model); 
      BlockRenderer.enableCoordMapping(id, -1, model);
    },
    getModel(id){
    	if(!this.wire[id])
    		return;
    	let model = new ICRender.Model();
    	model.addEntry(new BlockRenderer.Model(0.5 - this.wire[id].width / 2, 0.5 - this.wire[id].width / 2, 0.5 - this.wire[id].width / 2, 0.5 + this.wire[id].width / 2, 0.5 + this.wire[id].width / 2, 0.5 + this.wire[id].width / 2, id, 0)); 
    	for(let i in this.wire[id].boxes){ 
        let box = this.wire[id].boxes[i].box; 
        let side = this.wire[id].boxes[i].side; 
        model.addEntry(new BlockRenderer.Model(box[0], box[1], box[2], box[3], box[4], box[5], id, 0)).setCondition(new ICRender.BLOCK(side[0], side[1], side[2], ICRender.getGroup("sc-wire"), false)); 
      }
      return model;
    }
};
Callback.addCallback("DestroyBlock", function(pos, block, player){
    if(RenderAPI.wire[block.id] || MachineAPI.all[block.id]) BlockRenderer.unmapAtCoords(pos.x, pos.y, pos.z, true);
})
IDRegistry.genBlockID("PipeOxygenBlue");
Block.createBlock("PipeOxygenBlue", [ {name: "Pipe Oxygen Blue", texture: [["Pipe Oxygen Blue", 0]], inCreative: true}]);
RenderAPI.setWire(BlockID.PipeOxygenBlue, 4/16);
ob.registerWire(BlockID.PipeOxygenBlue, 200);
Translation.addTranslation("Pipe Oxygen Blue", {
ru: "Синяя кислородная труба"
})
Item.registerNameOverrideFunction(BlockID.PipeOxygenBlue, function(item, name){
    return Native.Color.White + name + "\n§1" + "Свойства:\n1.Крашенная\n2.Может передовать 200 единиц кислорода";
});



var RenderAPI = {
    wire: {},
    addGroupWire(id){
      let group = ICRender.getGroup("sc-wire");
      group.add(id, -1);
      let model = new ICRender.Model();
        
      BlockRenderer.setStaticICRender(id, -1, model); 
    },
    setWire(id, width){
      let group = ICRender.getGroup("sc-wire");
      group.add(id, -1);
      let boxes = [
      	{side: [0, 1, 0], box: [0.5 - width / 2, 0.5 + width / 2, 0.5 - width / 2, 0.5 + width / 2, 1, 0.5 + width / 2]}, 
        {side: [0, -1, 0], box: [0.5 - width / 2, 0, 0.5 - width / 2, 0.5 + width / 2, 0.5 - width / 2, 0.5 + width / 2]}, 
    		{side: [0, 0, 1], box: [0.5 - width / 2, 0.5 - width / 2, 0.5 + width / 2, 0.5 + width / 2, 0.5 + width / 2, 1]}, 
        {side: [0, 0, -1], box: [0.5 - width / 2, 0.5 - width / 2, 0, 0.5 + width / 2, 0.5 + width / 2, 0.5 - width / 2]},
        {side: [1, 0, 0], box: [0.5 + width / 2, 0.5 - width / 2, 0.5 - width / 2, 1, 0.5 + width / 2, 0.5 + width / 2]},
        {side: [-1, 0, 0], box: [0, 0.5 - width / 2, 0.5 - width / 2, 0.5 - width / 2, 0.5 + width / 2, 0.5 + width / 2]}
      ];
      let model = new ICRender.Model();
      model.addEntry(new BlockRenderer.Model(0.5 - width / 2, 0.5 - width / 2, 0.5 - width / 2, 0.5 + width / 2, 0.5 + width / 2, 0.5 + width / 2, id, 0)); 
      this.wire[id] = {};
      this.wire[id].boxes = boxes;
      this.wire[id].width = width;
      for(let i in boxes){ 
        let box = boxes[i].box; 
        let side = boxes[i].side; 
        model.addEntry(new BlockRenderer.Model(box[0], box[1], box[2], box[3], box[4], box[5], id, 0)).setCondition(new ICRender.BLOCK(side[0], side[1], side[2], group, false)); 
      }
      this.wire[id].model = model;
      BlockRenderer.setStaticICRender(id, -1, model); 
      BlockRenderer.enableCoordMapping(id, -1, model);
    },
    getModel(id){
    	if(!this.wire[id])
    		return;
    	let model = new ICRender.Model();
    	model.addEntry(new BlockRenderer.Model(0.5 - this.wire[id].width / 2, 0.5 - this.wire[id].width / 2, 0.5 - this.wire[id].width / 2, 0.5 + this.wire[id].width / 2, 0.5 + this.wire[id].width / 2, 0.5 + this.wire[id].width / 2, id, 0)); 
    	for(let i in this.wire[id].boxes){ 
        let box = this.wire[id].boxes[i].box; 
        let side = this.wire[id].boxes[i].side; 
        model.addEntry(new BlockRenderer.Model(box[0], box[1], box[2], box[3], box[4], box[5], id, 0)).setCondition(new ICRender.BLOCK(side[0], side[1], side[2], ICRender.getGroup("sc-wire"), false)); 
      }
      return model;
    }
};
Callback.addCallback("DestroyBlock", function(pos, block, player){
    if(RenderAPI.wire[block.id] || MachineAPI.all[block.id]) BlockRenderer.unmapAtCoords(pos.x, pos.y, pos.z, true);
})
IDRegistry.genBlockID("PipeOxygenBlack");
Block.createBlock("PipeOxygenBlack", [ {name: "Pipe Oxygen Black", texture: [["Pipe Oxygen Black", 0]], inCreative: true}]);
RenderAPI.setWire(BlockID.PipeOxygenBlack, 4/16);
ob.registerWire(BlockID.PipeOxygenBlack, 200);
Translation.addTranslation("Pipe Oxygen Black", {
ru: "Чёрная кислородная труба"
})
Item.registerNameOverrideFunction(BlockID.PipeOxygenBlack, function(item, name){
    return Native.Color.White + name + "\n§1" + "Свойства:\n1.Крашенная\n2.Может передовать 200 единиц кислорода";
});



var RenderAPI = {
    wire: {},
    addGroupWire(id){
      let group = ICRender.getGroup("sc-wire");
      group.add(id, -1);
      let model = new ICRender.Model();
        
      BlockRenderer.setStaticICRender(id, -1, model); 
    },
    setWire(id, width){
      let group = ICRender.getGroup("sc-wire");
      group.add(id, -1);
      let boxes = [
      	{side: [0, 1, 0], box: [0.5 - width / 2, 0.5 + width / 2, 0.5 - width / 2, 0.5 + width / 2, 1, 0.5 + width / 2]}, 
        {side: [0, -1, 0], box: [0.5 - width / 2, 0, 0.5 - width / 2, 0.5 + width / 2, 0.5 - width / 2, 0.5 + width / 2]}, 
    		{side: [0, 0, 1], box: [0.5 - width / 2, 0.5 - width / 2, 0.5 + width / 2, 0.5 + width / 2, 0.5 + width / 2, 1]}, 
        {side: [0, 0, -1], box: [0.5 - width / 2, 0.5 - width / 2, 0, 0.5 + width / 2, 0.5 + width / 2, 0.5 - width / 2]},
        {side: [1, 0, 0], box: [0.5 + width / 2, 0.5 - width / 2, 0.5 - width / 2, 1, 0.5 + width / 2, 0.5 + width / 2]},
        {side: [-1, 0, 0], box: [0, 0.5 - width / 2, 0.5 - width / 2, 0.5 - width / 2, 0.5 + width / 2, 0.5 + width / 2]}
      ];
      let model = new ICRender.Model();
      model.addEntry(new BlockRenderer.Model(0.5 - width / 2, 0.5 - width / 2, 0.5 - width / 2, 0.5 + width / 2, 0.5 + width / 2, 0.5 + width / 2, id, 0)); 
      this.wire[id] = {};
      this.wire[id].boxes = boxes;
      this.wire[id].width = width;
      for(let i in boxes){ 
        let box = boxes[i].box; 
        let side = boxes[i].side; 
        model.addEntry(new BlockRenderer.Model(box[0], box[1], box[2], box[3], box[4], box[5], id, 0)).setCondition(new ICRender.BLOCK(side[0], side[1], side[2], group, false)); 
      }
      this.wire[id].model = model;
      BlockRenderer.setStaticICRender(id, -1, model); 
      BlockRenderer.enableCoordMapping(id, -1, model);
    },
    getModel(id){
    	if(!this.wire[id])
    		return;
    	let model = new ICRender.Model();
    	model.addEntry(new BlockRenderer.Model(0.5 - this.wire[id].width / 2, 0.5 - this.wire[id].width / 2, 0.5 - this.wire[id].width / 2, 0.5 + this.wire[id].width / 2, 0.5 + this.wire[id].width / 2, 0.5 + this.wire[id].width / 2, id, 0)); 
    	for(let i in this.wire[id].boxes){ 
        let box = this.wire[id].boxes[i].box; 
        let side = this.wire[id].boxes[i].side; 
        model.addEntry(new BlockRenderer.Model(box[0], box[1], box[2], box[3], box[4], box[5], id, 0)).setCondition(new ICRender.BLOCK(side[0], side[1], side[2], ICRender.getGroup("sc-wire"), false)); 
      }
      return model;
    }
};
Callback.addCallback("DestroyBlock", function(pos, block, player){
    if(RenderAPI.wire[block.id] || MachineAPI.all[block.id]) BlockRenderer.unmapAtCoords(pos.x, pos.y, pos.z, true);
})
IDRegistry.genBlockID("PipeOxygenPink");
Block.createBlock("PipeOxygenPink", [ {name: "Pipe Oxygen Pink", texture: [["Pipe Oxygen Pink", 0]], inCreative: true}]);
RenderAPI.setWire(BlockID.PipeOxygenPink, 4/16);
ob.registerWire(BlockID.PipeOxygenPink, 200);
Translation.addTranslation("Pipe Oxygen Pink", {
ru: "Розовая кислородная труба"
})
Item.registerNameOverrideFunction(BlockID.PipeOxygenPink, function(item, name){
    return Native.Color.White + name + "\n§1" + "Свойства:\n1.Крашенная\n2.Может передовать 200 единиц кислорода";
});


var RenderAPI = {
    wire: {},
    addGroupWire(id){
      let group = ICRender.getGroup("sc-wire");
      group.add(id, -1);
      let model = new ICRender.Model();
        
      BlockRenderer.setStaticICRender(id, -1, model); 
    },
    setWire(id, width){
      let group = ICRender.getGroup("sc-wire");
      group.add(id, -1);
      let boxes = [
      	{side: [0, 1, 0], box: [0.5 - width / 2, 0.5 + width / 2, 0.5 - width / 2, 0.5 + width / 2, 1, 0.5 + width / 2]}, 
        {side: [0, -1, 0], box: [0.5 - width / 2, 0, 0.5 - width / 2, 0.5 + width / 2, 0.5 - width / 2, 0.5 + width / 2]}, 
    		{side: [0, 0, 1], box: [0.5 - width / 2, 0.5 - width / 2, 0.5 + width / 2, 0.5 + width / 2, 0.5 + width / 2, 1]}, 
        {side: [0, 0, -1], box: [0.5 - width / 2, 0.5 - width / 2, 0, 0.5 + width / 2, 0.5 + width / 2, 0.5 - width / 2]},
        {side: [1, 0, 0], box: [0.5 + width / 2, 0.5 - width / 2, 0.5 - width / 2, 1, 0.5 + width / 2, 0.5 + width / 2]},
        {side: [-1, 0, 0], box: [0, 0.5 - width / 2, 0.5 - width / 2, 0.5 - width / 2, 0.5 + width / 2, 0.5 + width / 2]}
      ];
      let model = new ICRender.Model();
      model.addEntry(new BlockRenderer.Model(0.5 - width / 2, 0.5 - width / 2, 0.5 - width / 2, 0.5 + width / 2, 0.5 + width / 2, 0.5 + width / 2, id, 0)); 
      this.wire[id] = {};
      this.wire[id].boxes = boxes;
      this.wire[id].width = width;
      for(let i in boxes){ 
        let box = boxes[i].box; 
        let side = boxes[i].side; 
        model.addEntry(new BlockRenderer.Model(box[0], box[1], box[2], box[3], box[4], box[5], id, 0)).setCondition(new ICRender.BLOCK(side[0], side[1], side[2], group, false)); 
      }
      this.wire[id].model = model;
      BlockRenderer.setStaticICRender(id, -1, model); 
      BlockRenderer.enableCoordMapping(id, -1, model);
    },
    getModel(id){
    	if(!this.wire[id])
    		return;
    	let model = new ICRender.Model();
    	model.addEntry(new BlockRenderer.Model(0.5 - this.wire[id].width / 2, 0.5 - this.wire[id].width / 2, 0.5 - this.wire[id].width / 2, 0.5 + this.wire[id].width / 2, 0.5 + this.wire[id].width / 2, 0.5 + this.wire[id].width / 2, id, 0)); 
    	for(let i in this.wire[id].boxes){ 
        let box = this.wire[id].boxes[i].box; 
        let side = this.wire[id].boxes[i].side; 
        model.addEntry(new BlockRenderer.Model(box[0], box[1], box[2], box[3], box[4], box[5], id, 0)).setCondition(new ICRender.BLOCK(side[0], side[1], side[2], ICRender.getGroup("sc-wire"), false)); 
      }
      return model;
    }
};
Callback.addCallback("DestroyBlock", function(pos, block, player){
    if(RenderAPI.wire[block.id] || MachineAPI.all[block.id]) BlockRenderer.unmapAtCoords(pos.x, pos.y, pos.z, true);
})
IDRegistry.genBlockID("PipeOxygenYellow");
Block.createBlock("PipeOxygenYellow", [ {name: "Pipe Oxygen Yellow", texture: [["Pipe Oxygen Yellow", 0]], inCreative: true}]);
RenderAPI.setWire(BlockID.PipeOxygenYellow, 4/16);
ob.registerWire(BlockID.PipeOxygenYellow, 200);
Translation.addTranslation("Pipe Oxygen Yellow", {
ru: "Жёлтая кислородная труба"
})
Item.registerNameOverrideFunction(BlockID.PipeOxygenYellow, function(item, name){
    return Native.Color.White + name + "\n§1" + "Свойства:\n1.Крашенная\n2.Может передовать 200 единиц кислорода";
});



var RenderAPI = {
    wire: {},
    addGroupWire(id){
      let group = ICRender.getGroup("sc-wire");
      group.add(id, -1);
      let model = new ICRender.Model();
        
      BlockRenderer.setStaticICRender(id, -1, model); 
    },
    setWire(id, width){
      let group = ICRender.getGroup("sc-wire");
      group.add(id, -1);
      let boxes = [
      	{side: [0, 1, 0], box: [0.5 - width / 2, 0.5 + width / 2, 0.5 - width / 2, 0.5 + width / 2, 1, 0.5 + width / 2]}, 
        {side: [0, -1, 0], box: [0.5 - width / 2, 0, 0.5 - width / 2, 0.5 + width / 2, 0.5 - width / 2, 0.5 + width / 2]}, 
    		{side: [0, 0, 1], box: [0.5 - width / 2, 0.5 - width / 2, 0.5 + width / 2, 0.5 + width / 2, 0.5 + width / 2, 1]}, 
        {side: [0, 0, -1], box: [0.5 - width / 2, 0.5 - width / 2, 0, 0.5 + width / 2, 0.5 + width / 2, 0.5 - width / 2]},
        {side: [1, 0, 0], box: [0.5 + width / 2, 0.5 - width / 2, 0.5 - width / 2, 1, 0.5 + width / 2, 0.5 + width / 2]},
        {side: [-1, 0, 0], box: [0, 0.5 - width / 2, 0.5 - width / 2, 0.5 - width / 2, 0.5 + width / 2, 0.5 + width / 2]}
      ];
      let model = new ICRender.Model();
      model.addEntry(new BlockRenderer.Model(0.5 - width / 2, 0.5 - width / 2, 0.5 - width / 2, 0.5 + width / 2, 0.5 + width / 2, 0.5 + width / 2, id, 0)); 
      this.wire[id] = {};
      this.wire[id].boxes = boxes;
      this.wire[id].width = width;
      for(let i in boxes){ 
        let box = boxes[i].box; 
        let side = boxes[i].side; 
        model.addEntry(new BlockRenderer.Model(box[0], box[1], box[2], box[3], box[4], box[5], id, 0)).setCondition(new ICRender.BLOCK(side[0], side[1], side[2], group, false)); 
      }
      this.wire[id].model = model;
      BlockRenderer.setStaticICRender(id, -1, model); 
      BlockRenderer.enableCoordMapping(id, -1, model);
    },
    getModel(id){
    	if(!this.wire[id])
    		return;
    	let model = new ICRender.Model();
    	model.addEntry(new BlockRenderer.Model(0.5 - this.wire[id].width / 2, 0.5 - this.wire[id].width / 2, 0.5 - this.wire[id].width / 2, 0.5 + this.wire[id].width / 2, 0.5 + this.wire[id].width / 2, 0.5 + this.wire[id].width / 2, id, 0)); 
    	for(let i in this.wire[id].boxes){ 
        let box = this.wire[id].boxes[i].box; 
        let side = this.wire[id].boxes[i].side; 
        model.addEntry(new BlockRenderer.Model(box[0], box[1], box[2], box[3], box[4], box[5], id, 0)).setCondition(new ICRender.BLOCK(side[0], side[1], side[2], ICRender.getGroup("sc-wire"), false)); 
      }
      return model;
    }
};
Callback.addCallback("DestroyBlock", function(pos, block, player){
    if(RenderAPI.wire[block.id] || MachineAPI.all[block.id]) BlockRenderer.unmapAtCoords(pos.x, pos.y, pos.z, true);
})
IDRegistry.genBlockID("PipeOxygenGreen");
Block.createBlock("PipeOxygenGreen", [ {name: "Pipe Oxygen Green", texture: [["Pipe Oxygen Green", 0]], inCreative: true}]);
RenderAPI.setWire(BlockID.PipeOxygenGreen, 4/16);
ob.registerWire(BlockID.PipeOxygenGreen, 200);
Translation.addTranslation("Pipe Oxygen Green", {
ru: "Зелёная кислородная труба"
})
Item.registerNameOverrideFunction(BlockID.PipeOxygenGreen, function(item, name){
    return Native.Color.White + name + "\n§1" + "Свойства:\n1.Крашенная\n2.Может передовать 200 единиц кислорода";
});



var RenderAPI = {
    wire: {},
    addGroupWire(id){
      let group = ICRender.getGroup("sc-wire");
      group.add(id, -1);
      let model = new ICRender.Model();
        
      BlockRenderer.setStaticICRender(id, -1, model); 
    },
    setWire(id, width){
      let group = ICRender.getGroup("sc-wire");
      group.add(id, -1);
      let boxes = [
      	{side: [0, 1, 0], box: [0.5 - width / 2, 0.5 + width / 2, 0.5 - width / 2, 0.5 + width / 2, 1, 0.5 + width / 2]}, 
        {side: [0, -1, 0], box: [0.5 - width / 2, 0, 0.5 - width / 2, 0.5 + width / 2, 0.5 - width / 2, 0.5 + width / 2]}, 
    		{side: [0, 0, 1], box: [0.5 - width / 2, 0.5 - width / 2, 0.5 + width / 2, 0.5 + width / 2, 0.5 + width / 2, 1]}, 
        {side: [0, 0, -1], box: [0.5 - width / 2, 0.5 - width / 2, 0, 0.5 + width / 2, 0.5 + width / 2, 0.5 - width / 2]},
        {side: [1, 0, 0], box: [0.5 + width / 2, 0.5 - width / 2, 0.5 - width / 2, 1, 0.5 + width / 2, 0.5 + width / 2]},
        {side: [-1, 0, 0], box: [0, 0.5 - width / 2, 0.5 - width / 2, 0.5 - width / 2, 0.5 + width / 2, 0.5 + width / 2]}
      ];
      let model = new ICRender.Model();
      model.addEntry(new BlockRenderer.Model(0.5 - width / 2, 0.5 - width / 2, 0.5 - width / 2, 0.5 + width / 2, 0.5 + width / 2, 0.5 + width / 2, id, 0)); 
      this.wire[id] = {};
      this.wire[id].boxes = boxes;
      this.wire[id].width = width;
      for(let i in boxes){ 
        let box = boxes[i].box; 
        let side = boxes[i].side; 
        model.addEntry(new BlockRenderer.Model(box[0], box[1], box[2], box[3], box[4], box[5], id, 0)).setCondition(new ICRender.BLOCK(side[0], side[1], side[2], group, false)); 
      }
      this.wire[id].model = model;
      BlockRenderer.setStaticICRender(id, -1, model); 
      BlockRenderer.enableCoordMapping(id, -1, model);
    },
    getModel(id){
    	if(!this.wire[id])
    		return;
    	let model = new ICRender.Model();
    	model.addEntry(new BlockRenderer.Model(0.5 - this.wire[id].width / 2, 0.5 - this.wire[id].width / 2, 0.5 - this.wire[id].width / 2, 0.5 + this.wire[id].width / 2, 0.5 + this.wire[id].width / 2, 0.5 + this.wire[id].width / 2, id, 0)); 
    	for(let i in this.wire[id].boxes){ 
        let box = this.wire[id].boxes[i].box; 
        let side = this.wire[id].boxes[i].side; 
        model.addEntry(new BlockRenderer.Model(box[0], box[1], box[2], box[3], box[4], box[5], id, 0)).setCondition(new ICRender.BLOCK(side[0], side[1], side[2], ICRender.getGroup("sc-wire"), false)); 
      }
      return model;
    }
};
Callback.addCallback("DestroyBlock", function(pos, block, player){
    if(RenderAPI.wire[block.id] || MachineAPI.all[block.id]) BlockRenderer.unmapAtCoords(pos.x, pos.y, pos.z, true);
})
IDRegistry.genBlockID("PipeOxygenLightBlue");
Block.createBlock("PipeOxygenLightBlue", [ {name: "Pipe Oxygen Light Blue", texture: [["Pipe Oxygen LightBlue", 0]], inCreative: true}]);
RenderAPI.setWire(BlockID.PipeOxygenLightBlue, 4/16);
ob.registerWire(BlockID.PipeOxygenLightBlue, 200);
Translation.addTranslation("Pipe Oxygen Light Blue", {
ru: "Голубая кислородная труба"
})
Item.registerNameOverrideFunction(BlockID.PipeOxygenLightBlue, function(item, name){
    return Native.Color.White + name + "\n§1" + "Свойства:\n1.Крашенная\n2.Может передовать 200 единиц кислорода";
});



var RenderAPI = {
    wire: {},
    addGroupWire(id){
      let group = ICRender.getGroup("sc-wire");
      group.add(id, -1);
      let model = new ICRender.Model();
        
      BlockRenderer.setStaticICRender(id, -1, model); 
    },
    setWire(id, width){
      let group = ICRender.getGroup("sc-wire");
      group.add(id, -1);
      let boxes = [
      	{side: [0, 1, 0], box: [0.5 - width / 2, 0.5 + width / 2, 0.5 - width / 2, 0.5 + width / 2, 1, 0.5 + width / 2]}, 
        {side: [0, -1, 0], box: [0.5 - width / 2, 0, 0.5 - width / 2, 0.5 + width / 2, 0.5 - width / 2, 0.5 + width / 2]}, 
    		{side: [0, 0, 1], box: [0.5 - width / 2, 0.5 - width / 2, 0.5 + width / 2, 0.5 + width / 2, 0.5 + width / 2, 1]}, 
        {side: [0, 0, -1], box: [0.5 - width / 2, 0.5 - width / 2, 0, 0.5 + width / 2, 0.5 + width / 2, 0.5 - width / 2]},
        {side: [1, 0, 0], box: [0.5 + width / 2, 0.5 - width / 2, 0.5 - width / 2, 1, 0.5 + width / 2, 0.5 + width / 2]},
        {side: [-1, 0, 0], box: [0, 0.5 - width / 2, 0.5 - width / 2, 0.5 - width / 2, 0.5 + width / 2, 0.5 + width / 2]}
      ];
      let model = new ICRender.Model();
      model.addEntry(new BlockRenderer.Model(0.5 - width / 2, 0.5 - width / 2, 0.5 - width / 2, 0.5 + width / 2, 0.5 + width / 2, 0.5 + width / 2, id, 0)); 
      this.wire[id] = {};
      this.wire[id].boxes = boxes;
      this.wire[id].width = width;
      for(let i in boxes){ 
        let box = boxes[i].box; 
        let side = boxes[i].side; 
        model.addEntry(new BlockRenderer.Model(box[0], box[1], box[2], box[3], box[4], box[5], id, 0)).setCondition(new ICRender.BLOCK(side[0], side[1], side[2], group, false)); 
      }
      this.wire[id].model = model;
      BlockRenderer.setStaticICRender(id, -1, model); 
      BlockRenderer.enableCoordMapping(id, -1, model);
    },
    getModel(id){
    	if(!this.wire[id])
    		return;
    	let model = new ICRender.Model();
    	model.addEntry(new BlockRenderer.Model(0.5 - this.wire[id].width / 2, 0.5 - this.wire[id].width / 2, 0.5 - this.wire[id].width / 2, 0.5 + this.wire[id].width / 2, 0.5 + this.wire[id].width / 2, 0.5 + this.wire[id].width / 2, id, 0)); 
    	for(let i in this.wire[id].boxes){ 
        let box = this.wire[id].boxes[i].box; 
        let side = this.wire[id].boxes[i].side; 
        model.addEntry(new BlockRenderer.Model(box[0], box[1], box[2], box[3], box[4], box[5], id, 0)).setCondition(new ICRender.BLOCK(side[0], side[1], side[2], ICRender.getGroup("sc-wire"), false)); 
      }
      return model;
    }
};
Callback.addCallback("DestroyBlock", function(pos, block, player){
    if(RenderAPI.wire[block.id] || MachineAPI.all[block.id]) BlockRenderer.unmapAtCoords(pos.x, pos.y, pos.z, true);
})
IDRegistry.genBlockID("PipeOxygenCyan");
Block.createBlock("PipeOxygenCyan", [ {name: "Pipe Oxygen Cyan", texture: [["Pipe Oxygen Cyan", 0]], inCreative: true}]);
RenderAPI.setWire(BlockID.PipeOxygenCyan, 4/16);
ob.registerWire(BlockID.PipeOxygenCyan, 200);
Translation.addTranslation("Pipe Oxygen Cyan", {
ru: "Бирюзовая кислородная труба"
})
Item.registerNameOverrideFunction(BlockID.PipeOxygenCyan, function(item, name){
    return Native.Color.White + name + "\n§1" + "Свойства:\n1.Крашенная\n2.Может передовать 200 единиц кислорода";
});


var RenderAPI = {
    wire: {},
    addGroupWire(id){
      let group = ICRender.getGroup("sc-wire");
      group.add(id, -1);
      let model = new ICRender.Model();
        
      BlockRenderer.setStaticICRender(id, -1, model); 
    },
    setWire(id, width){
      let group = ICRender.getGroup("sc-wire");
      group.add(id, -1);
      let boxes = [
      	{side: [0, 1, 0], box: [0.5 - width / 2, 0.5 + width / 2, 0.5 - width / 2, 0.5 + width / 2, 1, 0.5 + width / 2]}, 
        {side: [0, -1, 0], box: [0.5 - width / 2, 0, 0.5 - width / 2, 0.5 + width / 2, 0.5 - width / 2, 0.5 + width / 2]}, 
    		{side: [0, 0, 1], box: [0.5 - width / 2, 0.5 - width / 2, 0.5 + width / 2, 0.5 + width / 2, 0.5 + width / 2, 1]}, 
        {side: [0, 0, -1], box: [0.5 - width / 2, 0.5 - width / 2, 0, 0.5 + width / 2, 0.5 + width / 2, 0.5 - width / 2]},
        {side: [1, 0, 0], box: [0.5 + width / 2, 0.5 - width / 2, 0.5 - width / 2, 1, 0.5 + width / 2, 0.5 + width / 2]},
        {side: [-1, 0, 0], box: [0, 0.5 - width / 2, 0.5 - width / 2, 0.5 - width / 2, 0.5 + width / 2, 0.5 + width / 2]}
      ];
      let model = new ICRender.Model();
      model.addEntry(new BlockRenderer.Model(0.5 - width / 2, 0.5 - width / 2, 0.5 - width / 2, 0.5 + width / 2, 0.5 + width / 2, 0.5 + width / 2, id, 0)); 
      this.wire[id] = {};
      this.wire[id].boxes = boxes;
      this.wire[id].width = width;
      for(let i in boxes){ 
        let box = boxes[i].box; 
        let side = boxes[i].side; 
        model.addEntry(new BlockRenderer.Model(box[0], box[1], box[2], box[3], box[4], box[5], id, 0)).setCondition(new ICRender.BLOCK(side[0], side[1], side[2], group, false)); 
      }
      this.wire[id].model = model;
      BlockRenderer.setStaticICRender(id, -1, model); 
      BlockRenderer.enableCoordMapping(id, -1, model);
    },
    getModel(id){
    	if(!this.wire[id])
    		return;
    	let model = new ICRender.Model();
    	model.addEntry(new BlockRenderer.Model(0.5 - this.wire[id].width / 2, 0.5 - this.wire[id].width / 2, 0.5 - this.wire[id].width / 2, 0.5 + this.wire[id].width / 2, 0.5 + this.wire[id].width / 2, 0.5 + this.wire[id].width / 2, id, 0)); 
    	for(let i in this.wire[id].boxes){ 
        let box = this.wire[id].boxes[i].box; 
        let side = this.wire[id].boxes[i].side; 
        model.addEntry(new BlockRenderer.Model(box[0], box[1], box[2], box[3], box[4], box[5], id, 0)).setCondition(new ICRender.BLOCK(side[0], side[1], side[2], ICRender.getGroup("sc-wire"), false)); 
      }
      return model;
    }
};
Callback.addCallback("DestroyBlock", function(pos, block, player){
    if(RenderAPI.wire[block.id] || MachineAPI.all[block.id]) BlockRenderer.unmapAtCoords(pos.x, pos.y, pos.z, true);
})
IDRegistry.genBlockID("PipeOxygenMagenta");
Block.createBlock("PipeOxygenMagenta", [ {name: "Pipe Oxygen Magenta", texture: [["Pipe Oxygen Magenta", 0]], inCreative: true}]);
RenderAPI.setWire(BlockID.PipeOxygenMagenta, 4/16);
ob.registerWire(BlockID.PipeOxygenMagenta, 200);
Translation.addTranslation("Pipe Oxygen Magenta", {
ru: "Пурпурная кислородная труба"
})
Item.registerNameOverrideFunction(BlockID.PipeOxygenMagenta, function(item, name){
    return Native.Color.White + name + "\n§1" + "Свойства:\n1.Крашенная\n2.Может передовать 200 единиц кислорода";
});



var RenderAPI = {
    wire: {},
    addGroupWire(id){
      let group = ICRender.getGroup("sc-wire");
      group.add(id, -1);
      let model = new ICRender.Model();
        
      BlockRenderer.setStaticICRender(id, -1, model); 
    },
    setWire(id, width){
      let group = ICRender.getGroup("sc-wire");
      group.add(id, -1);
      let boxes = [
      	{side: [0, 1, 0], box: [0.5 - width / 2, 0.5 + width / 2, 0.5 - width / 2, 0.5 + width / 2, 1, 0.5 + width / 2]}, 
        {side: [0, -1, 0], box: [0.5 - width / 2, 0, 0.5 - width / 2, 0.5 + width / 2, 0.5 - width / 2, 0.5 + width / 2]}, 
    		{side: [0, 0, 1], box: [0.5 - width / 2, 0.5 - width / 2, 0.5 + width / 2, 0.5 + width / 2, 0.5 + width / 2, 1]}, 
        {side: [0, 0, -1], box: [0.5 - width / 2, 0.5 - width / 2, 0, 0.5 + width / 2, 0.5 + width / 2, 0.5 - width / 2]},
        {side: [1, 0, 0], box: [0.5 + width / 2, 0.5 - width / 2, 0.5 - width / 2, 1, 0.5 + width / 2, 0.5 + width / 2]},
        {side: [-1, 0, 0], box: [0, 0.5 - width / 2, 0.5 - width / 2, 0.5 - width / 2, 0.5 + width / 2, 0.5 + width / 2]}
      ];
      let model = new ICRender.Model();
      model.addEntry(new BlockRenderer.Model(0.5 - width / 2, 0.5 - width / 2, 0.5 - width / 2, 0.5 + width / 2, 0.5 + width / 2, 0.5 + width / 2, id, 0)); 
      this.wire[id] = {};
      this.wire[id].boxes = boxes;
      this.wire[id].width = width;
      for(let i in boxes){ 
        let box = boxes[i].box; 
        let side = boxes[i].side; 
        model.addEntry(new BlockRenderer.Model(box[0], box[1], box[2], box[3], box[4], box[5], id, 0)).setCondition(new ICRender.BLOCK(side[0], side[1], side[2], group, false)); 
      }
      this.wire[id].model = model;
      BlockRenderer.setStaticICRender(id, -1, model); 
      BlockRenderer.enableCoordMapping(id, -1, model);
    },
    getModel(id){
    	if(!this.wire[id])
    		return;
    	let model = new ICRender.Model();
    	model.addEntry(new BlockRenderer.Model(0.5 - this.wire[id].width / 2, 0.5 - this.wire[id].width / 2, 0.5 - this.wire[id].width / 2, 0.5 + this.wire[id].width / 2, 0.5 + this.wire[id].width / 2, 0.5 + this.wire[id].width / 2, id, 0)); 
    	for(let i in this.wire[id].boxes){ 
        let box = this.wire[id].boxes[i].box; 
        let side = this.wire[id].boxes[i].side; 
        model.addEntry(new BlockRenderer.Model(box[0], box[1], box[2], box[3], box[4], box[5], id, 0)).setCondition(new ICRender.BLOCK(side[0], side[1], side[2], ICRender.getGroup("sc-wire"), false)); 
      }
      return model;
    }
};
Callback.addCallback("DestroyBlock", function(pos, block, player){
    if(RenderAPI.wire[block.id] || MachineAPI.all[block.id]) BlockRenderer.unmapAtCoords(pos.x, pos.y, pos.z, true);
})
IDRegistry.genBlockID("PipeOxygenPurple");
Block.createBlock("PipeOxygenPurple", [ {name: "Pipe Oxygen Purple", texture: [["Pipe Oxygen Purple", 0]], inCreative: true}]);
RenderAPI.setWire(BlockID.PipeOxygenPurple, 4/16);
ob.registerWire(BlockID.PipeOxygenPurple, 200);
Translation.addTranslation("Pipe Oxygen Purple", {
ru: "Фиолетовая кислородная труба"
})
Item.registerNameOverrideFunction(BlockID.PipeOxygenPurple, function(item, name){
    return Native.Color.White + name + "\n§1" + "Свойства:\n1.Крашенная\n2.Может передовать 200 единиц кислорода";
});




// file: gravetite_canister.js

﻿IDRegistry.genItemID("gravetite_canister"); 
Item.createItem("gravetite_canister", "Gravetite Canister", {name: "Gravetite Canister", meta: 0}, {stack: 6});
Translation.addTranslation("Gravetite Canister", {
ru: "Канистра из граветита"
});




// file: coiper_canister.js

﻿IDRegistry.genItemID("coiper_canister"); 
Item.createItem("coiper_canister", "Coiper Canister", {name: "Coiper Canister", meta: 0}, {stack: 6});
Translation.addTranslation("Coiper Canister", {
ru: "Канистра из руды Койпера"
});




// file: iron_steel_canister.js

﻿IDRegistry.genItemID("iron_steel_canister"); 
Item.createItem("iron_steel_canister", "Iron Steel Canister", {name: "Iron Steel Canister", meta: 0}, {stack: 6});
Translation.addTranslation("Iron Steel Canister", {
ru: "Железостальная канистра"
});




// file: canister_tin.js

﻿IDRegistry.genItemID("canister_tin"); 
Item.createItem("canister_tin", "Canister Tin", {name: "Canister Tin", meta: 0}, {stack: 64});
Translation.addTranslation("Canister Tin", {
ru: "Оловяная канистра"
});




// file: canister_copper.js

﻿IDRegistry.genItemID("canister_copper"); 
Item.createItem("canister_copper", "Canister Copper", {name: "Canister Copper", meta: 0}, {stack: 3});
Translation.addTranslation("Canister Copper", {
ru: "Медная канистра"
});




// file: CoiperBelt/Ores/coiper_shard.js

﻿IDRegistry.genItemID("coiper_shard"); 
Item.createItem("coiper_shard", "Coiper Shard", {name: "Coiper Shard", meta: 0}, {stack: 64});
Translation.addTranslation("Coiper Shard", {
ru: "Осколок Койпера"
});




// file: CoiperBelt/Ores/ingot_coiper.js

﻿IDRegistry.genItemID("ingot_coiper"); 
Item.createItem("ingot_coiper", "Ingot Coiper", {name: "Coiper Ingot", meta: 0}, {stack: 64});
Translation.addTranslation("Ingot Coiper", {
ru: "Слиток Койпера"
});




// file: CoiperBelt/Ores/coiper_dust.js

﻿IDRegistry.genItemID("coiper_dust"); 
Item.createItem("coiper_dust", "Coiper Dust", {name: "Coiper Dust", meta: 0}, {stack: 64});
Translation.addTranslation("Coiper Dust", {
ru: "Пыль Койпера"
});




// file: CoiperBelt/Ores/compressed_coiper.js

﻿IDRegistry.genItemID("compressed_coiper"); 
Item.createItem("compressed_coiper", "Compressed Coiper", {name: "Compressed Coiper", meta: 0}, {stack: 64});
Translation.addTranslation("Compressed Coiper", {
ru: "Сжатый Койпер"
});




// file: CoiperBelt/Ores/reinforced_plate_t7.js

﻿IDRegistry.genItemID("reinforced_plate_t7"); 
Item.createItem("reinforced_plate_t7", "Reinfoced Plate 7lvl", {name: "Reinforced Plate T7", meta: 0}, {stack: 64});
Translation.addTranslation("Reinfoced Plate 7lvl", {
ru: "Усовершенствованная пластина 7-го уровня из пород Койпера"
});




// file: recéptś.js

Callback.addCallback("LevelCreated", function() {
Recipes.addShaped({id: ItemID.blade, count: 1, data: 0}, [
    "a",
    "a",
    ""
], ['a', VanillaItemID.iron_ingot, 0]);
//Лезвие
Recipes.addShaped({id: ItemID.blades, count: 1, data: 0}, [
    "aaa",
    "",
    ""
], ['a', ItemID.blade, 0]);
//Лезвия
Recipes.addShaped({id: ItemID.oxygen_concentrator, count: 1, data: 0}, [
    "aba",
    "bdb",
    "aca"
], ['a', ItemID.compressed_steel, 0, 'b', ItemID.compressed_tin, 0, 'c', ItemID.air_vent, 0, 'd', ItemID.canister_tin, 0]);
//Кислородный концентратор
Recipes.addShaped({id: ItemID.oxygentank_heavyfull, count: 1, data: 0}, [
    "aaa",
    "bbb",
    "ccc"
], ['a', VanillaBlockID.wool, 14, 'b', ItemID.canister_tin, 0, 'c', ItemID.compressed_steel, 0]);
//Большой кислородный баллон
Recipes.addShaped({id: ItemID.oxygentank_lightfull, count: 1, data: 0}, [
    "c  ",
    "a  ",
    "b  "
], ['a', ItemID.canister_tin, 0, 'b', ItemID.compressed_copper, 0, 'c', VanillaBlockID.wool, 5]);
//Маленький кислородный баллон
Recipes.addShaped({id: ItemID.oxygentank_medfull, count: 1, data: 0}, [
    "aa",
    "bb",
    "cc"
], ['a', VanillaBlockID.wool, 1, 'b', ItemID.canister_tin, 0, 'c', ItemID.compressed_tin, 0]);
//Средний кислородный баллон
Recipes.addShaped({id: ItemID.extra_oxygen_tank, count: 1, data: 0}, [
    "aaa",
    "bcd",
    "eee"
], ['a', BlockID.coiper_block, 0, 'b', ItemID.gravetite_canister, 0, 'c', ItemID.iron_steel_canister, 0, 'd', ItemID.coiper_canister, 0, 'e', ItemID.compressed_coiper, 0]);
//Экстра кислородный баллон
Recipes.addShaped({id: ItemID.frequency_module, count: 1, data: 0}, [
    " b ",
    "ada",
    "ece"
], ['a', ItemID.compressed_iron, 0, 'b', ItemID.compressed_aluminum, 0, 'c', ItemID.wafer_basic, 0, 'd', VanillaItemID.repeater, 0, 'e', VanillaItemID.redstone, 0]);
//Высокочастотный модуль
Recipes.addShaped({id: ItemID.air_fan, count: 1, data: 0}, [
    "b b",
    " c ",
    "bab"
], ['a', VanillaItemID.redstone, 0, 'b', ItemID.compressed_steel, 0, 'c', ItemID.wafer_basic, 0]);
//Закончился раздел SpaceTools
//Вентилятор
Recipes.addShaped({id: ItemID.air_vent, count: 1, data: 0}, [
    "aa",
    "ab",
    ""
], ['a', ItemID.compressed_tin, 0, 'b', ItemID.compressed_steel, 0]);
//Решётка для воздуха
Recipes.addShaped({id: ItemID.battery, count: 1, data: 0}, [
    " g ",
    "gbg",
    "gag"
], ['a', VanillaItemID.coal, 0, 'b', VanillaItemID.redstone, 0, 'g', ItemID.compressed_iron, 0]);
//Батарейка
Recipes.addShaped({id: ItemID.buggymat_sit, count: 1, data: 0}, [
    "  a",
    " ba",
    "aaa"
], ['a', ItemID.compressed_steel, 0, 'b', ItemID.compressed_iron, 0]);
//Сиденье багги
Recipes.addShaped({id: ItemID.buggymat_storage, count: 1, data: 0}, [
    "bbb",
    "iai",
    "bbb"
], ['a', VanillaBlockID.chest, 0, 'b', ItemID.compressed_steel, 0, 'i', ItemID.compressed_iron, 0]);
//Хранилище багги
Recipes.addShaped({id: ItemID.buggymat_wheel, count: 1, data: 0}, [
    " a ",
    "aba",
    " a "
], ['a', VanillaItemID.leather, 0, 'b', ItemID.compressed_steel, 0]);
//Колесо багги
Recipes.addShaped({id: ItemID.canister_copper, count: 1, data: 0}, [
    "a a",
    "a a",
    "aaa"
], ['a', ItemID.ingot_copper_sc, 0]);
//Медная канистра(слитками)
Recipes.addShaped({id: ItemID.canister_copper, count: 1, data: 0}, [
    "a a",
    "a a",
    "aaa"
], ['a', ItemID.compressed_copper, 0]);
//Медная канистра(сжатками)
Recipes.addShaped({id: ItemID.oxygen_gear, count: 1, data: 0}, [
    " b ",
    "bab",
    "b b"
], ['a', ItemID.oxygen_concentrator, 0, 'b', BlockID.PipeOxygenWhite, 0]);
//Кислородное снаряжение(белый)
Recipes.addShaped({id: ItemID.oxygen_gear, count: 1, data: 0}, [
    " b ",
    "bab",
    "b b"
], ['a', ItemID.oxygen_concentrator, 0, 'b', BlockID.PipeOxygenBlack, 0]);
//Кислородное снаряжение(черный)
Recipes.addShaped({id: ItemID.oxygen_gear, count: 1, data: 0}, [
    " b ",
    "bab",
    "b b"
], ['a', ItemID.oxygen_concentrator, 0, 'b', BlockID.PipeOxygenLightBlue, 0]);
//Кислородное снаряжение(голубой)
Recipes.addShaped({id: ItemID.oxygen_gear, count: 1, data: 0}, [
    " b ",
    "bab",
    "b b"
], ['a', ItemID.oxygen_concentrator, 0, 'b', BlockID.PipeOxygenSilver, 0]);
//Кислородное снаряжение(серебрянный)
Recipes.addShaped({id: ItemID.oxygen_gear, count: 1, data: 0}, [
    " b ",
    "bab",
    "b b"
], ['a', ItemID.oxygen_concentrator, 0, 'b', BlockID.PipeOxygenGreen, 0]);
//Кислородное снаряжение(зелёный)
Recipes.addShaped({id: ItemID.oxygen_gear, count: 1, data: 0}, [
    " b ",
    "bab",
    "b b"
], ['a', ItemID.oxygen_concentrator, 0, 'b', BlockID.PipeOxygenPink, 0]);
//Кислородное снаряжение(розовый)
Recipes.addShaped({id: ItemID.oxygen_gear, count: 1, data: 0}, [
    " b ",
    "bab",
    "b b"
], ['a', ItemID.oxygen_concentrator, 0, 'b', BlockID.PipeOxygenBlue, 0]);
//Кислородное снаряжение(синий)
Recipes.addShaped({id: ItemID.oxygen_gear, count: 1, data: 0}, [
    " b ",
    "bab",
    "b b"
], ['a', ItemID.oxygen_concentrator, 0, 'b', BlockID.PipeOxygenGray, 0]);
//Кислородное снаряжение(серый)
Recipes.addShaped({id: ItemID.oxygen_gear, count: 1, data: 0}, [
    " b ",
    "bab",
    "b b"
], ['a', ItemID.oxygen_concentrator, 0, 'b', BlockID.PipeOxygenCyan, 0]);
//Кислородное снаряжение(бирюзовый)
Recipes.addShaped({id: ItemID.oxygen_gear, count: 1, data: 0}, [
    " b ",
    "bab",
    "b b"
], ['a', ItemID.oxygen_concentrator, 0, 'b', BlockID.PipeOxygenLime, 0]);
//Кислородное снаряжение(лаймовый)
Recipes.addShaped({id: ItemID.oxygen_gear, count: 1, data: 0}, [
    " b ",
    "bab",
    "b b"
], ['a', ItemID.oxygen_concentrator, 0, 'b', BlockID.PipeOxygenYellow, 0]);
//Кислородное снаряжение(жёлтый)
Recipes.addShaped({id: ItemID.oxygen_gear, count: 1, data: 0}, [
    " b ",
    "bab",
    "b b"
], ['a', ItemID.oxygen_concentrator, 0, 'b', BlockID.PipeOxygenRed, 0]);
//Кислородное снаряжение(красный)
Recipes.addShaped({id: ItemID.oxygen_gear, count: 1, data: 0}, [
    " b ",
    "bab",
    "b b"
], ['a', ItemID.oxygen_concentrator, 0, 'b', BlockID.PipeOxygenOrange, 0]);
//Кислородное снаряжение(оранжевый)
Recipes.addShaped({id: ItemID.oxygen_gear, count: 1, data: 0}, [
    " b ",
    "bab",
    "b b"
], ['a', ItemID.oxygen_concentrator, 0, 'b', BlockID.PipeOxygenBrown, 0]);
//Кислородное снаряжение(коричневый)
Recipes.addShaped({id: ItemID.oxygen_gear, count: 1, data: 0}, [
    " b ",
    "bab",
    "b b"
], ['a', ItemID.oxygen_concentrator, 0, 'b', BlockID.PipeOxygenPurple, 0]);
//Кислородное снаряжение(фиолетовый)
Recipes.addShaped({id: ItemID.oxygen_gear, count: 1, data: 0}, [
    " b ",
    "bab",
    "b b"
], ['a', ItemID.oxygen_concentrator, 0, 'b', BlockID.PipeOxygenMagenta, 0]);
//Кислородное снаряжение(пурпурный)
Recipes.addShaped({id: BlockID.PipeOxygenWhite, count: 4, data: 0}, [
    "aaa",
    "",
    "aaa"
], ['a', VanillaBlockID.glass_pane, 0]);
//Труба(белый)
Recipes.addShaped({id: BlockID.PipeOxygenBlack, count: 1, data: 0}, [
    "ab",
    "",
    ""
], ['a', BlockID.PipeOxygenWhite, 0, 'b', VanillaItemID.black_dye, 0]);
//Труба(черный)
Recipes.addShaped({id: BlockID.PipeOxygenRed, count: 1, data: 0}, [
    "ab",
    "",
    ""
], ['a', BlockID.PipeOxygenWhite, 0, 'b', VanillaItemID.red_dye, 0]);
//Труба(красный)
Recipes.addShaped({id: BlockID.PipeOxygenGreen, count: 1, data: 0}, [
    "ab",
    "",
    ""
], ['a', BlockID.PipeOxygenWhite, 0, 'b', VanillaItemID.green_dye, 0]);
//Труба(зелёный)
Recipes.addShaped({id: BlockID.PipeOxygenBrown, count: 1, data: 0}, [
    "ab",
    "",
    ""
], ['a', BlockID.PipeOxygenWhite, 0, 'b', VanillaItemID.brown_dye, 0]);
//Труба(коричневый)
Recipes.addShaped({id: BlockID.PipeOxygenBlue, count: 1, data: 0}, [
    "ab",
    "",
    ""
], ['a', BlockID.PipeOxygenWhite, 0, 'b', VanillaItemID.blue_dye, 0]);
//Труба(синий)
Recipes.addShaped({id: BlockID.PipeOxygenLightBlue, count: 1, data: 0}, [
    "abv",
    "",
    ""
], ['a', BlockID.PipeOxygenWhite, 0, 'b', VanillaItemID.blue_dye, 0, 'v', VanillaItemID.white_dye, 0]);
//Труба(голубой)
Recipes.addShaped({id: BlockID.PipeOxygenPurple, count: 1, data: 0}, [
    "ab",
    "",
    ""
], ['a', BlockID.PipeOxygenWhite, 0, 'b', VanillaItemID.purple_dye, 0]);
//Труба(фиолетовый)
Recipes.addShaped({id: BlockID.PipeOxygenCyan, count: 1, data: 0}, [
    "ab",
    "",
    ""
], ['a', BlockID.PipeOxygenWhite, 0, 'b', VanillaItemID.cyan_dye, 0]);
//Труба(бирюзовый)
Recipes.addShaped({id: BlockID.PipeOxygenGray, count: 1, data: 0}, [
    "ab",
    "",
    ""
], ['a', BlockID.PipeOxygenWhite, 0, 'b', VanillaItemID.gray_dye, 0]);
//Труба(серый)
Recipes.addShaped({id: BlockID.PipeOxygenPink, count: 1, data: 0}, [
    "ab",
    "",
    ""
], ['a', BlockID.PipeOxygenWhite, 0, 'b', VanillaItemID.pink_dye, 0]);
//Труба(розовый)
Recipes.addShaped({id: BlockID.PipeOxygenLime, count: 1, data: 0}, [
    "ab",
    "",
    ""
], ['a', BlockID.PipeOxygenWhite, 0, 'b', VanillaItemID.lime_dye, 0]);
//Труба(лаймовый)
Recipes.addShaped({id: BlockID.PipeOxygenYellow, count: 1, data: 0}, [
    "ab",
    "",
    ""
], ['a', BlockID.PipeOxygenWhite, 0, 'b', VanillaItemID.yellow_dye, 0]);
//Труба(жёлтый)
Recipes.addShaped({id: BlockID.PipeOxygenMagenta, count: 1, data: 0}, [
    "ab",
    "",
    ""
], ['a', BlockID.PipeOxygenWhite, 0, 'b', VanillaItemID.magenta_dye, 0]);
//Труба(пурпурный)
Recipes.addShaped({id: BlockID.PipeOxygenOrange, count: 1, data: 0}, [
    "ab",
    "",
    ""
], ['a', BlockID.PipeOxygenWhite, 0, 'b', VanillaItemID.orange_dye, 0]);
//Труба(оранжевый)
Recipes.addShaped({id: BlockID.PipeOxygenSilver, count: 1, data: 0}, [
    "ab",
    "",
    ""
], ['a', BlockID.PipeOxygenWhite, 0, 'b', VanillaItemID.light_gray_dye, 0]);
//Труба(Серебрянный)
Recipes.addShaped({id: BlockID.AluminumWire, count: 6, data: 0}, [
    "bbb",
    "aaa",
    "bbb"
], ['a', ItemID.ingot_aluminum, 0, 'b', VanillaBlockID.wool, 0]);
//Алюминиевый провод
Recipes.addShaped({id: BlockID.ImprovedAluminumWire, count: 6, data: 0}, [
    "b  ",
    "w  ",
    "a  "
], ['a', ItemID.ingot_aluminum, 0, 'b', VanillaBlockID.wool, 0, 'w', BlockID.AluminumWire, 0]);
//Улучшенный алюминиевый провод
Recipes.addShaped({id: ItemID.canister_tin, count: 1, data: 0}, [
    "a a",
    "a a",
    "aaa"
], ['a', ItemID.ingot_tin_sc, 0]);
//Оловяная канистра(слитками)
Recipes.addShaped({id: ItemID.canister_tin, count: 1, data: 0}, [
    "a a",
    "a a",
    "aaa"
], ['a', ItemID.compressed_tin, 0]);
//Оловяная канистра(пожатками)
Recipes.addShaped({id: ItemID.canvas, count: 1, data: 0}, [
    " ba",
    "bbb",
    "ab "
], ['a', VanillaItemID.stick, 0, 'b', VanillaItemID.string, 0]);
//Холст
Recipes.addShaped({id: ItemID.coiper_canister, count: 1, data: 0}, [
    "a a",
    "a a",
    "aaa"
], ['a', ItemID.ingot_coiper, 0]);
//Койпера канистра(слитками)
Recipes.addShaped({id: ItemID.coiper_canister, count: 1, data: 0}, [
    "a a",
    "a a",
    "aaa"
], ['a', ItemID.compressed_coiper, 0]);
//Койпера канистра(пожатками)
Recipes.addShaped({id: ItemID.engine_tier, count: 1, data: 0}, [
    " a ",
    "bob",
    "bhb"
], ['a', VanillaItemID.flint_and_steel, 0, 'b', ItemID.heavy_plating, 0, 'o', ItemID.canister_tin, 0, 'h', ItemID.air_vent, 0]);
//Двигатель ракеты
Recipes.addShaped({id: ItemID.engine_tier1_booster, count: 1, data: 0}, [
    "bab",
    "bwb",
    "jfj"
], ['a', VanillaBlockID.wool, 4, 'b', ItemID.compressed_meteoric_iron, 0, 'f', ItemID.air_vent, 0, 'j', ItemID.heavy_plating, 0, 'w', ItemID.fuel_canister_6, 0]);
//Ускоритель ракеты 

Recipes.addShaped({id: BlockID.oxygen_storage_module, count: 1, data: 0}, [
    "aaa",
    "bbb",
    "aaa"
], ['a', ItemID.compressed_steel, 0, 'b', ItemID.oxygentank_heavyfull, 0]);
//хранилище кислорода

Recipes.addShaped({id: BlockID.refinery_sc, count: 1, data: 0}, [
    " b ",
    "aba",
    "dcd"
], ['a',VanillaBlockID.stone, 0, 'b', ItemID.canister_copper, 0, 'c', VanillaBlockID.furnace, 0, 'd', ItemID.ingot_steel_spacescraft, 0]);
//Центрифуга

Recipes.addShaped({id: ItemID.steel_shards, count: 1, data: 0}, [
    "a",
], ['a', ItemID.ingot_steel_spacescraft, 0]);
//Осколки стали

Recipes.addShaped({id: ItemID.iron_steel_ingot, count: 1, data: 0}, [
    "aaa",
    "aba",
    "aaa"
], ['a', ItemID.steel_shards, 0, 'b', VanillaItemID.iron_ingot, 0]);});




// file: SpaceTools/Core/SpawnOres.js

Callback.addCallback("GenerateChunk", function(chunkX, chunkZ, random, dimensionId){
//чем больше число тем реже спавнится, к примеру 
if (random.nextInt(5)<= 1){
        var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 35, 50);
        GenerationUtils.generateOre(coords.x, coords.y, coords.z,8582, 1, 5, true);
}
});




// file: Blocks/Sun/SunLittle.js

var Sunmesh = new RenderMesh(); 
Sunmesh.setBlockTexture("sunT",0); 
Sunmesh.importFromFile(__dir__+"/models/Sun.obj","obj",null); 
IDRegistry.genBlockID("charged_sun"); 
Block.createBlock("charged_sun", [ 
 {name: "A little Sun", texture: [["sunT", 0],["sunT", 1],["sunT", 2],["sunT", 3],["sunT", 4],["sunT", 5]], inCreative: true} 
]); 
Translation.addTranslation("A little Sun",{
ru: "< Солнце >"
});
var Sunrender = new ICRender.Model(); 
Sunrender.addEntry(new BlockRenderer.Model(Sunmesh)); 
BlockRenderer.setStaticICRender(BlockID.charged_sun,0,Sunrender);




