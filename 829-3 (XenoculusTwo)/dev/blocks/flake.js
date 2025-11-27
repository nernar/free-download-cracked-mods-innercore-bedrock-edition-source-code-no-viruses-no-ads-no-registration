const BLOCK_TYPE_XDIRT = Block.createSpecialType({
    lightopacity: 0,
    destroytime: 3,
    renderlayer: 3,
    sond: "grass"
});

const BLOCK_TYPE_LEAVES = Block.createSpecialType({
    base: 18,
    destroytime: 0.2,
    explosionres: 1,
    renderallfaces: true,
    renderlayer: 1,
    lightopacity: 1,
    translucency: 0.5,
    sound: "grass"
});

const BLOCK_TYPE_SPIKE_ICE = Block.createSpecialType({
    solid: false,
    destroytime: 0.4,
    explosionres: 2,
    renderallfaces: true,
    lightopacity: 4,
    translucency: 0.5,
    sound: "glass"
});

const BLOCK_TYPE_WOOD = Block.createSpecialType({
    solid: true,
    renderlayer: 3,
    explosionres: 16,
    translucency: 0,
    sound: "wood"
});

var BLOCK_TYPE_STONE = Block.createSpecialType({
    solid: true,
    renderlayer: 3,
    explosionres: 15,
    lightopacity: 15,
    translucency: 0
});

var BLOCK_TYPE_STONE_TR = Block.createSpecialType({
    solid: true,
    renderlayer: 1,
    explosionres: 15,
    lightopacity: 1,
    translucency: 0
});

const BLOCK_TYPE_WALL = Block.createSpecialType({
    destroytime: 3,
    lightopacity: 1,
    renderlayer: 2,
    rendertype: 32,
    translucency: 0.5
});

const BLOCK_TYPE_SLAB_WOOD = Block.createSpecialType({
    solid: false,
    renderlayer: 2,
    explosionres: 16,
    lightopacity: 1,
    translucency: 0,
    sound: "wood"
});

const BLOCK_TYPE_SLAB = Block.createSpecialType({
    solid: false,
    renderlayer: 2,
    explosionres: 16,
    lightopacity: 1,
    translucency: 0
});

IDRegistry.genBlockID("cloudPulsen");
Block.createBlock("cloudPulsen", [
    {name: "Pulsen Cloud", texture: [["snowcloudt", 0]], inCreative: true}
], BLOCK_TYPE_LEAVES);

const cloudCrender = new ICRender.CollisionShape();
cloudCrender.addEntry().addBox(1, 1, 1, 0, 0, 0);
BlockRenderer.setCustomCollisionShape(BlockID.cloudPulsen, 0, cloudCrender);
Block.setShape(BlockID.cloudPulsen, 0, 0, 0, 1, 1, 1, 0);

IDRegistry.genBlockID("cloudFlowing");
Block.createBlock("cloudFlowing", [
    {name: "Flowing Cloud", texture: [["flowcloudt", 0]], inCreative: true}
], BLOCK_TYPE_LEAVES);

IDRegistry.genBlockID("dirtGryss"); 
Block.createBlock("dirtGryss", [
    {name: "Ivorak", texture: [["ivorack", 0]],inCreative: true}], BLOCK_TYPE_XDIRT);
Block.setDestroyTime(BlockID.dirtGryss, 2);
ToolAPI.registerBlockMaterial(BlockID.dirtGryss, "dirt", 2, true);

IDRegistry.genBlockID("grassblockGryss");
Block.createBlock("grassblockGryss", [
    {name: "Ivorak Grass", texture: [["ivorack", 0], ["grysstop", 0], ["grysssidenew", 0]],inCreative: true}], BLOCK_TYPE_XDIRT);
ToolAPI.registerBlockMaterial(BlockID.grassblockGryss, "dirt", 2, true);
Block.registerDropFunction("grassblockGryss", function(){
return [[BlockID.dirtGryss, 1, 0]];});

IDRegistry.genBlockID("grassblockGryssIcy");
Block.createBlock("grassblockGryssIcy", [
    {name: "Ivorak Grass", texture: [["icyivorack", 0], ["icygrysstopnew", 0], ["icygrysssidenew", 0]],inCreative: true}], BLOCK_TYPE_XDIRT);
ToolAPI.registerBlockMaterial(BlockID.grassblockGryssIcy, "dirt", 2, true);
Block.registerDropFunction("grassblockGryssIcy", function(){
return [[BlockID.dirtGryss, 1, 0]];});

IDRegistry.genBlockID("Frone"); 
Block.createBlock("Frone", [
    {name: "Frone", texture: [["frone", 0]],inCreative: true}], BLOCK_TYPE_STONE);
Block.setDestroyTime(BlockID.Frone, 3);
ToolAPI.registerBlockMaterial(BlockID.Frone, "stone", 2, true);

IDRegistry.genBlockID("Necice"); 
Block.createBlock("Necice", [
    {name: "Necice", texture: [["necice", 0]],inCreative: true}], BLOCK_TYPE_STONE);
Block.setDestroyTime(BlockID.Necice, 3);
ToolAPI.registerBlockMaterial(BlockID.Necice, "stone", 2, true);

IDRegistry.genBlockID("NeciceTh"); 
Block.createBlock("NeciceTh", [
    {name: "Necice Thin", texture: [["thinnecicet", 0]],inCreative: true}], BLOCK_TYPE_STONE_TR);
Block.setDestroyTime(BlockID.NeciceTh, 3);
ToolAPI.registerBlockMaterial(BlockID.NeciceTh, "stone", 2, true);

IDRegistry.genBlockID("NeciceSh"); 
Block.createBlock("NeciceSh", [
    {name: "NeciceSh", texture: [["necicesharp", 0]],inCreative: true}], BLOCK_TYPE_STONE);
Block.setDestroyTime(BlockID.NeciceSh, 3);
ToolAPI.registerBlockMaterial(BlockID.NeciceSh, "stone", 3, true);

IDRegistry.genBlockID("NeciceD"); 
Block.createBlock("NeciceD", [
    {name: "Dark Necice", texture: [["darkestnecice", 0]],inCreative: true}], BLOCK_TYPE_STONE);
Block.setDestroyTime(BlockID.NeciceD, 3);
ToolAPI.registerBlockMaterial(BlockID.NeciceD, "stone", 2, true);

IDRegistry.genBlockID("Coldicite"); 
Block.createBlock("Coldicite", [
    {name: "Coldicite", texture: [["coldiciteblock", 0]],inCreative: true}], BLOCK_TYPE_STONE);
Block.setDestroyTime(BlockID.Coldicite, 3);
ToolAPI.registerBlockMaterial(BlockID.Coldicite, "stone", 2, true);

IDRegistry.genBlockID("ColdiciteTh"); 
Block.createBlock("ColdiciteTh", [
    {name: "Coldicite Thin", texture: [["coldictethint", 0]],inCreative: true}], BLOCK_TYPE_STONE_TR);
Block.setDestroyTime(BlockID.ColdiciteTh, 3);
ToolAPI.registerBlockMaterial(BlockID.ColdiciteTh, "stone", 2, true);







