//libs
IMPORT("ToolLib");
//blocks vars

function randomInt(min, max){ 
return Math.floor(Math.random() * (max - min + 1)) + min; 
}

var BLOCK_TYPE_PLANT = Block.createSpecialType({
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

var BLOCK_TYPE_PLANT_DOUBLE = Block.createSpecialType({
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

var BLOCK_LOW_LIGHT = Block.createSpecialType({
    lightlevel: 9,
    opaque: true});

var BLOCK_LOWEST_LIGHT = Block.createSpecialType({
    lightlevel: 4,
    opaque: true});

var GLASS_TYPE = Block.createSpecialType({
    base: 20,
    destroytime: 3,
    opaque: false,
    lightopacity: 0,
    sound: "glass"});
//Ore(A&R)
//silverincludes
IDRegistry.genBlockID("oreSilver");
Block.createBlock("oreSilver", [
    {name: "Silver Ore", texture: [["ore_silver", 0]], inCreative: true}], {
    solid: true,
    renderlayer: 3,
    destroytime: 0.8,
    explosionres: 40,
    translucency: 0
});
ToolAPI.registerBlockMaterial(BlockID.oreSilver, "stone", 2, true);
Block.setDestroyTime(BlockID.oreSilver, 3);
Block.setDestroyLevel("oreSilver", 3);
Recipes.addFurnace(BlockID.oreSilver, ItemID.ingotSilver, 0);
//F
IDRegistry.genBlockID("oreSilverf");
Block.createBlock("oreSilverf", [
    {name: "Silver Ore fiery", texture: [["ore_silverf", 0]], inCreative: true}], {
    solid: true,
    renderlayer: 3,
    destroytime: 0.8,
    explosionres: 40,
    translucency: 0
});
ToolAPI.registerBlockMaterial(BlockID.oreSilverf, "stone", 2, true);
Block.setDestroyTime(BlockID.oreSilverf, 3);
Block.setDestroyLevel("oreSilverf", 3);
Recipes.addFurnace(BlockID.oreSilverf, ItemID.ingotSilver, 0);
//G
IDRegistry.genBlockID("oreSilverg");
Block.createBlock("oreSilverg", [
    {name: "Silver Ore gloomy", texture: [["ore_silverg", 0]], inCreative: true}], {
    solid: true,
    renderlayer: 3,
    destroytime: 0.8,
    explosionres: 40,
    translucency: 0
});
ToolAPI.registerBlockMaterial(BlockID.oreSilverg, "stone", 2, true);
Block.setDestroyTime(BlockID.oreSilverg, 3);
Block.setDestroyLevel("oreSilverg", 3);
Recipes.addFurnace(BlockID.oreSilverg, ItemID.ingotSilver, 0);
//I
IDRegistry.genBlockID("oreSilveri");
Block.createBlock("oreSilveri", [
    {name: "Silver Ore icy", texture: [["ore_silveri", 0]], inCreative: true}], {
    solid: true,
    renderlayer: 3,
    destroytime: 0.8,
    explosionres: 40,
    translucency: 0
});
ToolAPI.registerBlockMaterial(BlockID.oreSilveri, "stone", 2, true);
Block.setDestroyTime(BlockID.oreSilveri, 3);
Block.setDestroyLevel("oreSilveri", 3);
Recipes.addFurnace(BlockID.oreSilveri, ItemID.ingotSilver, 0);
//l
IDRegistry.genBlockID("oreSilverl");
Block.createBlock("oreSilverl", [
    {name: "Silver Ore lively", texture: [["ore_silverl", 0]], inCreative: true}], {
    solid: true,
    renderlayer: 3,
    destroytime: 0.8,
    explosionres: 40,
    translucency: 0
});
ToolAPI.registerBlockMaterial(BlockID.oreSilverl, "stone", 2, true);
Block.setDestroyTime(BlockID.oreSilverl, 3);
Block.setDestroyLevel("oreSilverl", 3);
Recipes.addFurnace(BlockID.oreSilverl, ItemID.ingotSilver, 0);
//n
IDRegistry.genBlockID("oreSilvern");
Block.createBlock("oreSilvern", [
    {name: "Silver Ore Nether", texture: [["ore_silvern", 0]], inCreative: true}], {
    solid: true,
    renderlayer: 3,
    destroytime: 0.8,
    explosionres: 40,
    translucency: 0
});
ToolAPI.registerBlockMaterial(BlockID.oreSilvern, "stone", 2, true);
Block.setDestroyTime(BlockID.oreSilvern, 3);
Block.setDestroyLevel("oreSilvern", 3);
Recipes.addFurnace(BlockID.oreSilvern, ItemID.ingotSilver, 0);
//e
IDRegistry.genBlockID("oreSilvere");
Block.createBlock("oreSilvere", [
    {name: "End Silver Ore", texture: [["ore_silvere", 0]], inCreative: true}], {
    solid: true,
    renderlayer: 3,
    destroytime: 0.8,
    explosionres: 40,
    translucency: 0
});
ToolAPI.registerBlockMaterial(BlockID.oreSilvere, "stone", 2, true);
Block.setDestroyTime(BlockID.oreSilvere, 3);
Block.setDestroyLevel("oreSilvere", 3);
Recipes.addFurnace(BlockID.oreSilvere, ItemID.ingotSilver, 0);

IDRegistry.genBlockID("FQuartzOre");
Block.createBlock("FQuartzOre", [
{name: "Fiery Quartz Ore", texture: [["FieryQuartzOre", 0]], inCreative: true}], {
    solid: true,
    renderlayer: 3,
    destroytime: 0.8,
    explosionres: 40,
    translucency: 0
});
ToolAPI.registerBlockMaterial(BlockID.FQuartzOre, "stone");
Block.setDestroyLevel("FQuartzOre", 3);

IDRegistry.genBlockID("GQuartzOre");
Block.createBlock("GQuartzOre", [
{name: "Gloomy Quartz Ore", texture: [["GloomyQuartzOre", 0]], inCreative: true}], {
    solid: true,
    renderlayer: 3,
    destroytime: 0.8,
    explosionres: 40,
    translucency: 0
});
ToolAPI.registerBlockMaterial(BlockID.GQuartzOre, "stone");
Block.setDestroyLevel("GQuartzOre", 3);

IDRegistry.genBlockID("IQuartzOre");
Block.createBlock("IQuartzOre", [
{name: "Icy Quartz Ore", texture: [["IcyQuartzOre", 0]], inCreative: true}], {
    solid: true,
    renderlayer: 3,
    destroytime: 0.8,
    explosionres: 40,
    translucency: 0
});
ToolAPI.registerBlockMaterial(BlockID.IQuartzOre, "stone");
Block.setDestroyLevel("IQuartzOre", 3);

IDRegistry.genBlockID("LQuartzOre");
Block.createBlock("LQuartzOre", [
{name: "Lively Quartz Ore", texture: [["LivelyQuartzOre", 0]], inCreative: true}], {
    solid: true,
    renderlayer: 3,
    destroytime: 0.8,
    explosionres: 40,
    translucency: 0
});
ToolAPI.registerBlockMaterial(BlockID.LQuartzOre, "stone");
Block.setDestroyLevel("LQuartzOre", 3);

IDRegistry.genBlockID("AmethystOre");
Block.createBlock("AmethystOre", [
{name: "Nether Amethyst ore", texture: [["AmethystOre", 0]], inCreative: true}], BLOCK_LOWEST_LIGHT);
ToolAPI.registerBlockMaterial(BlockID.AmethystOre, "stone");
Block.setDestroyLevel("AmethystOre", 3);

IDRegistry.genBlockID("RimeOre");
Block.createBlock("RimeOre", [
{name: "Rime ore", texture: [["RimeOre", 0]], inCreative: true}
], BLOCK_LOWEST_LIGHT);
ToolAPI.registerBlockMaterial(BlockID.RimeOre, "stone");
Block.setDestroyLevel("RimeOre", 3);

IDRegistry.genBlockID("NethRimeOre");
Block.createBlock("NethRimeOre", [
{name: "Nether Rime ore", texture: [["NethRimeOre", 0]], inCreative: true}], BLOCK_LOWEST_LIGHT);
ToolAPI.registerBlockMaterial(BlockID.NethRimeOre, "stone");
Block.setDestroyLevel("NethRimeOre", 3);
//blockBasalt

IDRegistry.genBlockID("BasaltBlock");
Block.createBlock("BasaltBlock", [
{name: "Basalt Block", texture: [["Basalt", 0]], inCreative: true}
], {
    solid: true,
    renderlayer: 3,
    destroytime: 0.8,
    explosionres: 40,
    translucency: 0
});
ToolAPI.registerBlockMaterial(BlockID.BasaltBlock, "stone", 2, true);
Block.setDestroyLevel("BasaltBlock", 3);
Block.setDestroyTime(BlockID.BasaltBlock, 5);

IDRegistry.genBlockID("BasaltBrick");
Block.createBlock("BasaltBrick", [
{name: "Basalt Brick", texture: [["BasaltBrick", 0]], inCreative: true}
], "opaque");
ToolAPI.registerBlockMaterial(BlockID.BasaltBrick, "stone", 2, true);
Block.setDestroyLevel("BasaltBrick", 3);
Block.setDestroyTime(BlockID.BasaltBrick, 5);

IDRegistry.genBlockID("BasaltSmooth");
Block.createBlock("BasaltSmooth", [
{name: "Basalt Smooth", texture: [["BasaltSmooth", 0]], inCreative: true}
], "opaque");
ToolAPI.registerBlockMaterial(BlockID.BasaltSmooth, "stone", 2, true);
Block.setDestroyLevel("BasaltSmooth", 3);
Block.setDestroyTime(BlockID.BasaltSmooth, 5);

IDRegistry.genBlockID("BasaltPillar");
Block.createBlockWithRotation("BasaltPillar", [
{name: "Basalt Pillar", texture: [["BasaltPillarTop", 0], ["BasaltPillarTop", 0], ["BasaltPillarSide", 0], ["BasaltPillarSide", 0], ["BasaltPillarSide", 0], ["BasaltPillarSide", 0]], inCreative: true}
], "opaque");
ToolAPI.registerBlockMaterial(BlockID.BasaltPillar, "stone", 2, true);
Block.setDestroyLevel("BasaltPillar", 3);
Block.setDestroyTime(BlockID.BasaltPillar, 5);
//block(A&R)

IDRegistry.genBlockID("WormI");
Block.createBlock("WormI", [
{name: "Worm Iron", texture: [["WormIron", 0]], inCreative: true}
], BLOCK_LOWEST_LIGHT);
ToolAPI.registerBlockMaterial(BlockID.WormI, "stone", 2, true);
Block.setDestroyLevel("WormI", 2);
Block.setDestroyTime(BlockID.WormI, 4);

Callback.addCallback("tick",function() {
var ent = Entity.getPosition(Player.get());
var block = World.getBlockID(ent.x, ent.y - 2, ent.z);
if(block == BlockID.WormI){
Entity.setFire(Player.get(), 155);    
}
});

IDRegistry.genBlockID("AmethystBlock");
Block.createBlock("AmethystBlock", [
{name: "Amethyst Block", texture: [["AmethystBlock", 0]], inCreative: true}
], BLOCK_LOW_LIGHT);
ToolAPI.registerBlockMaterial(BlockID.AmethystBlock, "stone", 2, true);
Block.setDestroyLevel("AmethystBlock", 3);
Block.setDestroyTime(BlockID.AmethystBlock, 4);

IDRegistry.genBlockID("soulGlass");
Block.createBlock("soulGlass", [
{name: "Soul Glass", texture: [["SoulGalss", 0]], inCreative: true}
], GLASS_TYPE);

IDRegistry.genBlockID("FBIce");
Block.createBlock("FBIce", [
{name: "Frost Burn Ice", texture: [["FBIce", 0]], inCreative: true}
], "opaque");
ToolAPI.registerBlockMaterial(BlockID.FBIce, "stone", 2, true);

IDRegistry.genBlockID("RimeBlock");
Block.createBlock("RimeBlock", [
{name: "Rime Block", texture: [["RimeBlock", 0]], inCreative: true}], BLOCK_LOW_LIGHT);
ToolAPI.registerBlockMaterial(BlockID.RimeBlock, "stone", 2, true);
Block.setDestroyLevel("RimeBlock", 3);

//NewN
IDRegistry.genBlockID("Netf");
Block.createBlock("Netf", [
{name: "Netherrack fiery Block", texture: [["NetherrackFiery", 0]], inCreative: true}], "opaque");
ToolAPI.registerBlockMaterial(BlockID.Netf, "stone", 2, true);
Block.setDestroyLevel("Netf", 3);

IDRegistry.genBlockID("Netg");
Block.createBlock("Netg", [
{name: "Netherrack gloomy Block", texture: [["NetherrackGloomy", 0]], inCreative: true}], "opaque");
ToolAPI.registerBlockMaterial(BlockID.Netg, "stone", 2, true);
Block.setDestroyLevel("Netg", 3);

IDRegistry.genBlockID("Neti");
Block.createBlock("Neti", [
{name: "Netherrack icy Block", texture: [["NetherrackIcy", 0]], inCreative: true}], "opaque");
ToolAPI.registerBlockMaterial(BlockID.Neti, "stone", 2, true);
Block.setDestroyLevel("Neti", 3);

IDRegistry.genBlockID("Netl");
Block.createBlock("Netl", [
{name: "Netherrack lively Block", texture: [["NetherrackLively", 0]], inCreative: true}
], "opaque");
ToolAPI.registerBlockMaterial(BlockID.Netl, "stone", 2, true);
Block.setDestroyLevel("Netl", 3);

IDRegistry.genBlockID("SmNetherrack");
Block.createBlock("SmNetherrack", [
{name: "Smooth Netherrack Block", texture: [["SmoothNetherrack", 0]], inCreative: true}], "opaque");
ToolAPI.registerBlockMaterial(BlockID.SmNetherrack, "stone", 2, true);
Block.setDestroyLevel("SmNetherrack", 3);

IDRegistry.genBlockID("SSmNetherrack");
Block.createBlockWithRotation("SSmNetherrack", [
{name: "Slab Smooth Netherrack", texture: [["SmoothNetherrack", 0], ["SmoothNetherrack", 0], ["SlabSmoothNetherrackSide", 0], ["SlabSmoothNetherrackSide", 0], ["SlabSmoothNetherrackSide", 0], ["SlabSmoothNetherrackSide", 0]], inCreative: true}], "opaque");
ToolAPI.registerBlockMaterial(BlockID.SSmNetherrack, "stone", 2, true);
Block.setDestroyLevel("SSmNetherrack", 3);
        
IDRegistry.genBlockID("PiNetherrack");
Block.createBlockWithRotation("PiNetherrack", [
{name: "Pillar Netherrack", texture: [["PillarNetherrackTop", 0], ["PillarNetherrackTop", 0], ["PillarNetherrackSide", 0], ["PillarNetherrackSide", 0], ["PillarNetherrackSide", 0], ["PillarNetherrackSide", 0]], inCreative: true}], "opaque");
ToolAPI.registerBlockMaterial(BlockID.PiNetherrack, "stone", 2, true);
Block.setDestroyLevel("PiNetherrack", 3);    

IDRegistry.genBlockID("WitherBoneBlock");
Block.createBlockWithRotation("WitherBoneBlock", [
{name: "Wither Bone Block", texture: [["CharredBoneBlockTop", 0], ["CharredBoneBlockTop", 0], ["CharredBoneBlockSide", 0], ["CharredBoneBlockSide", 0], ["CharredBoneBlockSide", 0], ["CharredBoneBlockSide", 0]], inCreative: true}], "opaque");
ToolAPI.registerBlockMaterial(BlockID.WitherBoneBlock, "stone", 2, true);
Block.setDestroyLevel("WitherBoneBlock", 3);

IDRegistry.genBlockID("WBoneBlock");
Block.createBlockWithRotation("WBoneBlock", [
{name: "Bone Block", texture: [["BoneBlockTop", 0], ["BoneBlockTop", 0], ["BoneBlockSide", 0], ["BoneBlockSide", 0], ["BoneBlockSide", 0], ["BoneBlockSide", 0]], inCreative: true}], "opaque");
ToolAPI.registerBlockMaterial(BlockID.WBoneBlock, "stone", 2, true);
Block.setDestroyLevel("WBoneBlock", 2);
    
//NewNM

IDRegistry.genBlockID("Hyphae");
Block.createBlockWithRotation("Hyphae", [
{name: "Nether Hypahen", texture: [["NetherrackLively", 0], ["Hyphae_Top", 0], ["Hyphae_Side", 0], ["Hyphae_Side", 0], ["Hyphae_Side", 0], ["Hyphae_Side", 0]], inCreative: true}], {sound: "grass"});
ToolAPI.registerBlockMaterial(BlockID.Hyphae, "dirt", 2, true);
Block.setDestroyLevel("Hyphae", 3);

//NewNB
IDRegistry.genBlockID("NBf");
Block.createBlock("NBf", [
{name: "Nether brick fiery Block", texture: [["NetherBrickFieryB", 0]], inCreative: true}
], "opaque");
ToolAPI.registerBlockMaterial(BlockID.NBf, "stone", 2, true);
Block.setDestroyLevel("NBf", 3);

IDRegistry.genBlockID("NBg");
Block.createBlock("NBg", [
{name: "Nether brick gloomy Block", texture: [["NetherBrickGloomyB", 0]], inCreative: true}
], "opaque");
ToolAPI.registerBlockMaterial(BlockID.NBg, "stone", 2, true);
Block.setDestroyLevel("NBg", 3);

IDRegistry.genBlockID("NBi");
Block.createBlock("NBi", [
{name: "Nether brick icy Block", texture: [["NetherBrickIcyB", 0]], inCreative: true}
], "opaque");
ToolAPI.registerBlockMaterial(BlockID.NBi, "stone", 2, true);
Block.setDestroyLevel("NBi", 3);

IDRegistry.genBlockID("NBl");
Block.createBlock("NBl", [
{name: "Nether brick lively Block", texture: [["NetherBrickLivelyB", 0]], inCreative: true}
], "opaque");
ToolAPI.registerBlockMaterial(BlockID.NBl, "stone", 2, true);
Block.setDestroyLevel("NBl", 3);

//DROP
Block.registerDropFunction("FQuartzOre", function(coords, blockID, blockData, level){
 if (level > 3){
  return [[406, 1, 0]]
 }
 return [];
});
 
 Block.registerDropFunction("GQuartzOre", function(coords, blockID, blockData, level){
 if (level > 3){
  return [[406, 1, 0]]
 }
 return [];
});

Block.registerDropFunction("IQuartzOre", function(coords, blockID, blockData, level){
 if (level > 3){
  return [[406, 1, 0]]
 }
 return [];
});

Block.registerDropFunction("LQuartzOre", function(coords, blockID, blockData, level){
 if (level > 3){
  return [[406, 1, 0]]
 }
 return [];
});

Block.registerDropFunction("AmethystOre", function(coords, blockID, blockData, level){
 if (level > 3){
  return [[ItemID.Amethyst, 1, 0]]
 }
 return [];
});

Block.registerDropFunction("RimeOre", function(coords, blockID, blockData, level){
 if (level > 3){
  return [[ItemID.RimeCryst, 1, 0]]
 }
 return [];
});


Block.registerDropFunction("NBf", function(coords, blockID, blockData, level){
 if (level > 2){
  return [[BlockID.NBf, 1, 0]]
 }
 return [];
});

Block.registerDropFunction("NBg", function(coords, blockID, blockData, level){
 if (level > 2){
  return [[BlockID.NBg, 1, 0]]
 }
 return [];
});

Block.registerDropFunction("NBi", function(coords, blockID, blockData, level){
 if (level > 2){
  return [[BlockID.NBi, 1, 0]]
 }
 return [];
});

Block.registerDropFunction("NBl", function(coords, blockID, blockData, level){
 if (level > 2){
  return [[BlockID.NBl, 1, 0]]
 }
 return [];
});

Block.registerDropFunction("Netf", function(coords, blockID, blockData, level){
 if (level > 2){
  return [[BlockID.Netf, 1, 0]]
 }
 return [];
});

Block.registerDropFunction("Netg", function(coords, blockID, blockData, level){
 if (level > 2){
  return [[BlockID.Netg, 1, 0]]
 }
 return [];
});

Block.registerDropFunction("Neti", function(coords, blockID, blockData, level){
 if (level > 2){
  return [[BlockID.Neti, 1, 0]]
 }
 return [];
});

Block.registerDropFunction("Netl", function(coords, blockID, blockData, level){
 if (level > 2){
  return [[BlockID.Netl, 1, 0]]
 }
 return [];
});

Block.registerDropFunction("BasaltBlock", function(coords, blockID, blockData, level){
 if (level > 3){
  return [[BlockID.BasaltBlock, 1, 0]]
 }
 return [];
});

Block.registerDropFunction("BasaltBrick", function(coords, blockID, blockData, level){
 if (level > 3){
  return [[BlockID.BasaltBrick, 1, 0]]
 }
 return [];
});

Block.registerDropFunction("BasaltSmooth", function(coords, blockID, blockData, level){
 if (level > 3){
  return [[BlockID.BasaltSmooth, 1, 0]]
 }
 return [];
});

Block.registerDropFunction("BasaltPillar", function(coords, blockID, blockData, level){
 if (level > 3){
  return [[ItemID.BasaltPillar, 1, 0]]
 }
 return [];
});

Block.registerDropFunction("NethRimeOre", function(coords, blockID, blockData, level){
 if (level > 3){
  return [[ItemID.RimeCryst, 1, 0]]
 }
 return [];
});