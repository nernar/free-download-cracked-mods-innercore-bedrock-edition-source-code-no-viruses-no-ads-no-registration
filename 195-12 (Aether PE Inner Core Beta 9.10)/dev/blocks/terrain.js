IMPORT("EntityState");
var BLOCK_TYPE_CLOUD = Block.createSpecialType({
    lightopacity: 1,
    destroytime: 1,
    opaque: false,
    renderlayer: 2
});

var BLOCK_TYPE_Ladder = Block.createSpecialType({
    lightopacity: 5,
    destroytime: 2,
    opaque: false,
    base:65
});

var BLOCK_TYPE_ACLOUD = Block.createSpecialType({
    lightopacity: 1,
    destroytime: 1,
    opaque: false
});

var BLOCK_LIGHT = Block.createSpecialType({
    lightlevel: 13,
    opaque: false
});
/*
var angle = Entity.getLookAngle(Player.get()); 
var vector = {}; 
vector.x = -Math.sin((angle.yaw)/ 180 * Math.PI);
vector.y = Math.sin((angle.pitch-180)/ 180 * Math.PI); 
vector.z = Math.cos((angle.yaw)/ 180 * Math.PI); 
*/
IDRegistry.genBlockID("dirtAether"); 
Block.createBlock("dirtAether", [
    {name: "Aether Dirt", texture: [["aether_dirt", 0]],inCreative: true}], "opaque");
Block.setDestroyTime(BlockID.dirtAether,2);
ToolAPI.registerBlockMaterial(BlockID.dirtAether, "dirt", 0, true);

IDRegistry.genBlockID("grassblockAether");
Block.createBlock("grassblockAether", [
    {name: "Aether Grass", texture: [["aether_dirt", 0], ["aether_grass_top", 0], ["aether_grass_side", 0]],inCreative: true}], "opaque");
ToolAPI.registerBlockMaterial(BlockID.grassblockAether, "dirt", 0, true);
Block.registerDropFunction("grassblockAether", function(){
return [[BlockID.dirtAether, 1, 0]];});

IDRegistry.genBlockID("theraAether"); 
Block.createBlock("theraAether", [
    {name: "Aether Dirt", texture: [["thera_dirt", 0]],inCreative: true}], "opaque");
Block.setDestroyTime(BlockID.theraAether,2);
ToolAPI.registerBlockMaterial(BlockID.theraAether, "dirt", 0, true);

IDRegistry.genBlockID("grasstheraAether");
Block.createBlock("grasstheraAether", [
    {name: "Aether Grass", texture: [["thera_dirt", 0], ["thera_grass_top", 0], ["thera_grass_side", 0]],inCreative: true}], "opaque");
ToolAPI.registerBlockMaterial(BlockID.grasstheraAether, "dirt", 0, true);
Block.registerDropFunction("grassblockAether", function(){
return [[BlockID.theraAether, 1, 0]];});

IDRegistry.genBlockID("nestSkyroot");
Block.createBlock("nestSkyroot", [
    {name: "Skyroot nest", texture: [["woven_skyroot_sticks", 0]],inCreative: true}], "opaque");
ToolAPI.registerBlockMaterial(BlockID.nestSkyroot, "wood", 0, true);

IDRegistry.genBlockID("quickSkyroot");
Block.createBlock("quickSkyroot", [
    {name: "Quckskoil sand", texture: [["quicksoil", 0]],inCreative: true}], "opaque");
ToolAPI.registerBlockMaterial(BlockID.nestSkyroot, "dirt", 0, true);
/*
Callback.addCallback("tick",function() {
var entP = Entity.getPosition(Player.get());
var blockP = World.getBlockID(entP.x, entP.y-1, entP.z);
if(blockP == BlockID.quickSkyroot){
if(EntityState.getPlayerState(EntityState.WALKING || EntityState.RUNNING))return   
Entity.addVelocity(Player.get(),vector.x, entP.y, vector.z); 
}
});
*/
IDRegistry.genBlockID("Holystone"); 
Block.createBlock("Holystone", [
    {name: "Holystone", texture: [["holystone", 0]],inCreative: true}], "opaque");
ToolAPI.registerBlockMaterial(BlockID.Holystone, "stone", 2, true);

IDRegistry.genBlockID("brickHolystone"); 
Block.createBlock("brickHolystone", [
    {name: "Holystone Bricks", texture: [["holystone_brick", 0]],inCreative: true}], "opaque");
ToolAPI.registerBlockMaterial(BlockID.brickHolystone, "stone", 2, true);

Recipes.addShaped({id: BlockID.brickHolystone, count: 4, data: 0}, [
    "xx ",
    "xx "
], ['x', BlockID.Holystone, 0]);

IDRegistry.genBlockID("fbrickHolystone"); 
Block.createBlock("fbrickHolystone", [
    {name: "Faded Holystone Bricks", texture:[["faded_holystone_brick", 0]],inCreative: true}], "opaque");
ToolAPI.registerBlockMaterial(BlockID.fbrickHolystone, "stone", 3, true);

IDRegistry.genBlockID("Agiosite"); 
Block.createBlock("Agiosite", [
    {name: "Agiosite", texture: [["agiosite", 0]],inCreative: true}], "opaque");
ToolAPI.registerBlockMaterial(BlockID.Agiosite, "stone", 2, true);

IDRegistry.genBlockID("brickAgiosite"); 
Block.createBlock("brickAgiosite", [
    {name: "Agiosite bricks", texture: [["agiosite_brick", 0]],inCreative: true}], "opaque");
ToolAPI.registerBlockMaterial(BlockID.brickAgiosite, "stone", 3, true);

Recipes.addShaped({id: BlockID.brickAgiosite, count: 4, data: 0}, [
    "xx ",
    "xx "
], ['x', BlockID.Agiosite, 0]);

IDRegistry.genBlockID("Zanite"); 
Block.createBlock("Zanite", [
    {name: "Block Zanite", texture: [["zanite_block", 0]],inCreative: true}], "opaque");
ToolAPI.registerBlockMaterial(BlockID.Zanite, "stone", 3, true);

Recipes.addShaped({id: BlockID.Zanite, count: 1, data: 0}, [
    "xxx",
    "xxx",
    "xxx"
], ['x', ItemID.zaniteGemstone, 0]);

IDRegistry.genBlockID("Gravitite"); 
Block.createBlock("Gravitite", [
    {name: "Block Gravitite", texture: [["gravitite_block", 0]],inCreative: true}], "opaque");
ToolAPI.registerBlockMaterial(BlockID.Gravitite, "stone", 3, true);

Recipes.addShaped({id: BlockID.Gravitite, count: 1, data: 0}, [
    "xx ",
    "xx "
], ['x', BlockID.oreGravitite, 0]);

IDRegistry.genBlockID("enGravitite"); 
Block.createBlock("enGravitite", [
    {name: "Block Gravitite Enchanted", texture:[["enchanted_gravitite", 0]],inCreative: true}], "opaque");
ToolAPI.registerBlockMaterial(BlockID.enGravitite, "stone", 3, true);

IDRegistry.genBlockID("coldAercloud"); 
Block.createBlock("coldAercloud", [
    {name: "Cold Aercloud", texture: 
    [["aercloud_cold", 0]],inCreative: true}],BLOCK_TYPE_CLOUD);
    
IDRegistry.genBlockID("AcoldAercloud"); 
Block.createBlock("AcoldAercloud", [
    {name: "Cold Aercloud", texture: 
    [["aercloud_cold", 1]],inCreative: false}],BLOCK_TYPE_ACLOUD);    

IDRegistry.genBlockID("blueAercloud"); 
Block.createBlock("blueAercloud", [
    {name: "Blue Aercloud", texture:[["aercloud_blue", 0]],inCreative: true}],BLOCK_TYPE_CLOUD);
/*    
Callback.addCallback("tick",function() {
var entP = Entity.getPosition(Player.get());
var blockP = World.getBlockID(entP.x, entP.y-1, entP.z);
if(blockP == BlockID.blueAercloud){
if(EntityState.getPlayerState(EntityState.WALKING || EntityState.RUNNING))return   
Entity.addVelocity(Player.get(),entP.x, vector.y+12, entP.z); 
}
});
*/
IDRegistry.genBlockID("goldenAercloud"); 
Block.createBlock("goldenAercloud", [
    {name: "Golden Aercloud", texture:[["aercloud_golden", 0]],inCreative: true}],BLOCK_TYPE_CLOUD);

IDRegistry.genBlockID("greenAercloud"); 
Block.createBlock("greenAercloud", [
    {name: "Green Aercloud", texture:[["aercloud_green", 0]],inCreative: true}],BLOCK_TYPE_CLOUD);

IDRegistry.genBlockID("stormAercloud"); 
Block.createBlock("stormAercloud", [
    {name: "Storm Aercloud", texture:[["aercloud_storm", 0]],inCreative: true}],BLOCK_TYPE_CLOUD);
    
IDRegistry.genBlockID("purpuleAercloud"); 
Block.createBlock("purpuleAercloud", [
    {name: "Purpule Aercloud", texture:[["purple_aercloud_back", 0]],inCreative: true}],BLOCK_TYPE_CLOUD) ;    
    
/*    
Callback.addCallback("tick",function() {
var entP = Entity.getPosition(Player.get());
var blockP = World.getBlockID(entP.x, entP.y-1, entP.z);
if(blockP == BlockID.stormAercloud){
if(EntityState.getPlayerState(EntityState.WALKING || EntityState.RUNNING))return   
Entity.addVelocity(Player.get(),vector.x, entP.y, vector.z); 
}
});    
*/
IDRegistry.genBlockID("grassblockFrostpine");
Block.createBlock("grassblockFrostpine", [
    {name: "Frostroot", texture:[["frostroot_side", 0], ["frostroot_top", 0], ["frostroot_side", 0]],inCreative: true}], "opaque");
ToolAPI.registerBlockMaterial(BlockID.grassblockFrostpine, "dirt", 0, true);
Block.registerDropFunction("grassblockFrostpine", function(){
return [[BlockID.dirtAether, 1, 0]];});

IDRegistry.genBlockID("Ferro");
Block.createBlock("Ferro", [
    {name: "Ferrosite", texture:[["ferrosite", 0]],inCreative: true}], "opaque");
ToolAPI.registerBlockMaterial(BlockID.Ferro, "stone", 3, true);

IDRegistry.genBlockID("rFerro");
Block.createBlock("rFerro", [
    {name: "Rusted ferrosite", texture:[["rusted_ferrosite", 0]],inCreative: true}], "opaque");       
ToolAPI.registerBlockMaterial(BlockID.rFerro, "stone", 3, true);

IDRegistry.genBlockID("sandFiosite"); 
Block.createBlock("sandFiosite", [
    {name: "Ferrosite sand", texture: [["ferrosite_sand", 0]],inCreative: true}], "opaque");
ToolAPI.registerBlockMaterial(BlockID.sandFiosite, "dirt", 0, true);

IDRegistry.genBlockID("coldFire");
Block.createBlock("coldFire", [
{name: "Cold Fire", texture: [["ColdFire", 0]], inCreative: true}], BLOCK_LIGHT);

IDRegistry.genBlockID("pIce");
Block.createBlock("pIce", [
    {name: "Highlands ice", texture:[["highlands_packedice", 0]],inCreative: true}], "opaque");
ToolAPI.registerBlockMaterial(BlockID.pIce, "stone", 3, true);

IDRegistry.genBlockID("iceS");
Block.createBlock("iceS", [
    {name: "Ice stone", texture:[["icestone", 0]],inCreative: true}], "opaque");
ToolAPI.registerBlockMaterial(BlockID.iceS, "stone", 2, true);

IDRegistry.genBlockID("bS");
Block.createBlock("bS", [
    {name: "Ice stone bricks", texture:[["icestone_bricks", 0]],inCreative: true}],BLOCK_TYPE_CLOUD);
ToolAPI.registerBlockMaterial(BlockID.bS, "stone", 2, true);

Recipes.addShaped({id: BlockID.bS, count: 4, data: 0}, [
    "xx ",
    "xx "
], ['x', BlockID.iceS, 0]);

var Renderer={
        setFireRender:function(id,x){
        var shape = new ICRender.CollisionShape();
        BlockRenderer.setCustomCollisionShape(Block.getNumericId(id), -1, shape);    
        BlockRenderer.addRenderCallback(id, function(api, coords,block) {
            if(x!=0){
                for(var i = 0;i < 1/x;i+=x){
                api.renderBoxId(coords.x, coords.y, coords.z, .4999, 0, 0, .501, 0.99, 1, id, 0);
                api.renderBoxId(coords.x, coords.y, coords.z, 0, 0, .499, 1, 0.90, .501, id, 0);
                api.renderBoxId(coords.x, coords.y, coords.z, 0.98, 0, 0, 0.99, 1, 1, id, 0);
                api.renderBoxId(coords.x, coords.y, coords.z, 0 , 0, 0.98, 1, 1, 0.99, id, 0);
                api.renderBoxId(coords.x, coords.y, coords.z, 0.01, 0, 0, 0.02, 1, 1, id, 0);
                api.renderBoxId(coords.x, coords.y, coords.z, 0 , 0, 0.01, 1, 1, 0.02, id, 0);
                }
            }
            else{
                api.renderBoxId(coords.x, coords.y, coords.z, .4999, 0, 0, .501, 0.99, 1, id, 0);
                api.renderBoxId(coords.x, coords.y, coords.z, 0, 0, .499, 1, 0.90, .501, id, 0);
                api.renderBoxId(coords.x, coords.y, coords.z, 0.98, 0, 0, 0.99, 1, 1, id, 0);
                api.renderBoxId(coords.x, coords.y, coords.z, 0 , 0, 0.98, 1, 1, 0.99, id, 0);
                api.renderBoxId(coords.x, coords.y, coords.z, 0.01, 0, 0, 0.02, 1, 1, id, 0);
                api.renderBoxId(coords.x, coords.y, coords.z, 0 , 0, 0.01, 1, 1, 0.02, id, 0);
            }
        })
        BlockRenderer.enableCustomRender(id);
    }
};
ToolAPI.registerBlockMaterial(BlockID.coldFire, "cobweb");

Renderer.setFireRender(BlockID.coldFire, 0);

Callback.addCallback("tick",function() {
var ent = Entity.getPosition(Player.get());
var block = World.getBlockID(ent.x, ent.y - 1, ent.z);
if(block == BlockID.coldFire){
Entity.setFire(Player.get(), 180);       
}
});


Block.registerDropFunction("coldFire", function(){
    if(Math.random() < .070){
        return [[ItemID.icestone, 1, 0]]
    }
    else {
        return [];
    }
});