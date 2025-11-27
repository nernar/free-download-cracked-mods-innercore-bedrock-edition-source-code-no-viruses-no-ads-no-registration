var BLOCK_TYPE_CLOUD = Block.createSpecialType({ 
    explosionres: 9999999,
    lightopacity: 1,
    destroytime: 1,
    renderlayer: 1,
    sound: "cloth"
});

var BLOCK_TYPE_AGLASS = Block.createSpecialType({ 
    explosionres: 5,
    lightopacity: 1,
    destroytime: .4,
    renderlayer: 1,
    sound: "glass"
});

var BLOCK_TYPE_STAIRS_WOOD = Block.createSpecialType({
    lightopacity: 1,
    renderlayer: 2,
    rendertype: 10,
    sound: "wood"
});

var BLOCK_TYPE_STAIRS_STONE = Block.createSpecialType({
    lightopacity: 1,
    renderlayer: 2,
    rendertype: 10
});

var BLOCK_TYPE_AGRASS = Block.createSpecialType({
    destroytime: 1,
    renderlayer: 3,
    sound: "grass"
});

var BLOCK_TYPE_ADIRT = Block.createSpecialType({ 
    destroytime: 1,
    renderlayer: 3,
    sound: "grass"
});

var BLOCK_TYPE_FENCE_WOOD = Block.createSpecialType({
    lightopacity: 1,
    renderlayer: 2, 
    rendertype: 11,
    sound: "wood"
});

var BLOCK_TYPE_FENCE_STONE = Block.createSpecialType({
    lightopacity: 1,
    renderlayer: 2,
    rendertype: 32
});

var BLOCK_TYPE_ACLOUD = Block.createSpecialType({
    explosionres: 9999999,
    lightopacity: 1,
    destroytime: 1,
    renderlayer: 1
});

var BLOCK_TYPE_PLANE = Block.createSpecialType({
    lightopacity: 1,
    renderlayer: 1,
    rendertype: 87,
    translucency: 1,
    sound: "glass"
});

var BLOCK_TYPE_PLANT = Block.createSpecialType({
    base: 38,
    solid: false,
    destroytime: 0.1,
    explosionres: 1,
    //renderlayer: 1,
    rendertype: 91,
    lightopacity: 0,
    translucency: 0.5,
    sound: "grass"
});

var BLOCK_TYPE_PLANT_DOUBLE = Block.createSpecialType({
    base: 38,
    solid: false,
    destroytime: 0.1,
    explosionres: 1,
    //renderlayer: 1,
    rendertype: 91,
    lightopacity: 0,
    translucency: 0.5,
    sound: "grass"
});

var BLOCK_LIGHT = Block.createSpecialType({
    lightlevel: 13,
    opaque: false
});

var BLOCK_TYPE_DECORATIVE = Block.createSpecialType({ 
    solid: false,
    explosionres: 5,
    lightopacity: 1,
    destroytime: .1,
    destroylevel: 0,
    renderlayer: 1,
    sound: "glass"
});

var BLOCK_TYPE_ROCKS = Block.createSpecialType({ 
    solid: false,
    explosionres: 3,
    destroytime: .1,
    destroylevel: 0,
    renderlayer: 1
});

var BLOCK_TYPE_WOOL = Block.createSpecialType({ 
    solid: true,
    explosionres: 4,
    destroytime: .9,
    renderlayer: 3,
    sound: "cloth"
});


IDRegistry.genBlockID("dirtAether"); 
Block.createBlock("dirtAether", [
    {name: "Aether Dirt", texture: [["aether_dirt", 0]],inCreative: true}], BLOCK_TYPE_ADIRT);
Block.setDestroyTime(BlockID.dirtAether,1);
ToolAPI.registerBlockMaterial(BlockID.dirtAether, "dirt", 0, true);

IDRegistry.genBlockID("grassblockAether");
Block.createBlock("grassblockAether", [
    {name: "Aether Grass", texture: [["aether_dirt", 0], ["aether_grass_top", 0], ["aether_grass_side", 0]],inCreative: true}], BLOCK_TYPE_AGRASS);
ToolAPI.registerBlockMaterial(BlockID.grassblockAether, "dirt", 0, true);
Block.registerDropFunction("grassblockAether", function(){
return [[BlockID.dirtAether, 1, 0]];});

IDRegistry.genBlockID("theraAether"); 
Block.createBlock("theraAether", [
    {name: "Aether Dirt", texture: [["thera_dirt", 0]],inCreative: true}], BLOCK_TYPE_ADIRT);
Block.setDestroyTime(BlockID.theraAether,1);
ToolAPI.registerBlockMaterial(BlockID.theraAether, "dirt", 0, true);

IDRegistry.genBlockID("grasstheraAether");
Block.createBlock("grasstheraAether", [
    {name: "Aether Grass", texture: [["thera_dirt", 0], ["thera_grass_top", 0], ["thera_grass_side", 0]],inCreative: true}], BLOCK_TYPE_AGRASS);
ToolAPI.registerBlockMaterial(BlockID.grasstheraAether, "dirt", 0, true);
Block.registerDropFunction("grasstheraAether", function(){
return [[BlockID.theraAether, 1, 0]];});

IDRegistry.genBlockID("nestSkyroot");
Block.createBlock("nestSkyroot", [
    {name: "Skyroot nest", texture: [["woven_skyroot_sticks", 0]],inCreative: true}], {solid: true, explosionres: 4, destroytime: .9, renderlayer: 3, sound: "sweet_berry_bush"
});
ToolAPI.registerBlockMaterial(BlockID.nestSkyroot, "wood", 0, true);

IDRegistry.genBlockID("quickSkyroot");
Block.createBlock("quickSkyroot", [
    {name: "Qucksoil sand", texture: [["quicksoil", 0]],inCreative: true}], {sound: "sand", friction: 1});
ToolAPI.registerBlockMaterial(BlockID.quickSkyroot, "dirt", 0, true);

Block.registerEntityStepOnFunction(BlockID.quickSkyroot, function(coords, block, entity){
 Entity.addEffect(entity, 1, 2, 300, false,false);
});

IDRegistry.genBlockID("Holystone"); 
Block.createBlock("Holystone", [
    {name: "Holystone", texture: [["holystone", 0]],inCreative: true}], "opaque");
ToolAPI.registerBlockMaterial(BlockID.Holystone, "stone", 2, true);

IDRegistry.genBlockID("brickHolystone"); 
Block.createBlock("brickHolystone", [
    {name: "Holystone Bricks", texture: [["holystone_brick", 0]],inCreative: true}], "opaque");
ToolAPI.registerBlockMaterial(BlockID.brickHolystone, "stone", 2, true);

IDRegistry.genBlockID("brickHolystoneS");
Block.createBlock("brickHolystoneS", [
    {name: "Holystone Bricks Slab", texture: [["holystone_brick", 0]], inCreative: true}
]);
ToolAPI.registerBlockMaterial(BlockID.brickHolystoneS, "stone", 2, true);
TileRenderer.makeSlab(BlockID.brickHolystoneS, BlockID.brickHolystone);

IDRegistry.genBlockID("stairsHolystone");
Block.createBlock("stairsHolystone", [
    {name: "Holystone Stairs", texture: [["holystone_brick", 0]], inCreative: true}
], BLOCK_TYPE_STAIRS_STONE);

Recipes.addShaped({id: BlockID.brickHolystone, count: 4, data: 0}, [
    "xx ",
    "xx "
], ['x', BlockID.Holystone, 0]);

IDRegistry.genBlockID("fbrickHolystone"); 
Block.createBlock("fbrickHolystone", [
    {name: "Faded Holystone Bricks", texture:[["faded_holystone_brick", 0]],inCreative: true}], "opaque");
ToolAPI.registerBlockMaterial(BlockID.fbrickHolystone, "stone", 3, true);

IDRegistry.genBlockID("fbrickHolystoneS");
Block.createBlock("fbrickHolystoneS", [
    {name: "Faded Holystone Bricks Slab", texture: [["faded_holystone_brick", 0]], inCreative: true}
]);
ToolAPI.registerBlockMaterial(BlockID.fbrickHolystoneS, "stone", 2, true);
TileRenderer.makeSlab(BlockID.fbrickHolystoneS, BlockID.fbrickHolystone);

IDRegistry.genBlockID("fstairsHolystone");
Block.createBlock("fstairsHolystone", [
    {name: "Faded Holystone Stairs", texture: [["faded_holystone_brick", 0]], inCreative: true}
], BLOCK_TYPE_STAIRS_STONE);

IDRegistry.genBlockID("Agiosite"); 
Block.createBlock("Agiosite", [
    {name: "Agiosite", texture: [["agiosite", 0]],inCreative: true}], "opaque");
ToolAPI.registerBlockMaterial(BlockID.Agiosite, "stone", 2, true);

IDRegistry.genBlockID("brickAgiosite"); 
Block.createBlock("brickAgiosite", [
    {name: "Agiosite Bricks", texture: [["agiosite_brick", 0]],inCreative: true}], "opaque");
ToolAPI.registerBlockMaterial(BlockID.brickAgiosite, "stone", 3, true);

IDRegistry.genBlockID("brickAgiositeS");
Block.createBlock("brickAgiositeS", [
    {name: "Agiosite Bricks Slab", texture: [["agiosite_brick", 0]], inCreative: true}
]);
ToolAPI.registerBlockMaterial(BlockID.brickAgiositeS, "stone", 2, true);
TileRenderer.makeSlab(BlockID.brickAgiositeS, BlockID.brickAgiosite);

IDRegistry.genBlockID("stairsAgiosite");
Block.createBlock("stairsAgiosite", [
    {name: "Agiosite Stairs", texture: [["agiosite_brick", 0]], inCreative: true}
], BLOCK_TYPE_STAIRS_STONE);

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
    
Callback.addCallback('EntityHurt', function (a, v, damageValue, damageType) {
if(damageType == 5 && World.getBlockID(Entity.getPosition(v).x, Entity.getPosition(v).y-1, Entity.getPosition(v).z) == BlockID.coldAercloud ||damageType == 5 && World.getBlockID(Entity.getPosition(v).x, Entity.getPosition(v).y-2, Entity.getPosition(v).z) == BlockID.coldAercloud) {
Game.message("hi");
 //Game.prevent();
Entity.addEffect(v, 28, 400, 0, false, false); 
    }
if(damageType == 12 && Network.getConnectedPlayers().indexOf(v)) {
   if(Entity.getDimension(v) == Aether.id) { 
Game.message("hi");       
 //Game.prevent();
Dimensions.transfer(v, 0);
        }    
    }
});    
    
IDRegistry.genBlockID("AcoldAercloud"); 
Block.createBlock("AcoldAercloud", [
    {name: "Cold Aercloud", texture: 
    [["aercloud_cold", 1]],inCreative: false}],BLOCK_TYPE_ACLOUD);    

IDRegistry.genBlockID("blueAercloud"); 
Block.createBlock("blueAercloud", [
    {name: "Blue Aercloud", texture:[["aercloud_blue", 0]],inCreative: true}],BLOCK_TYPE_CLOUD);

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
    
IDRegistry.genBlockID("grassblockFrostpine");
Block.createBlock("grassblockFrostpine", [
    {name: "Frostroot", texture:[["frostroot_side", 0], ["frostroot_top", 0], ["frostroot_side", 0]],inCreative: true}], BLOCK_TYPE_AGRASS);
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
    {name: "Highlands ice", texture:[["highlands_packedice", 0]],inCreative: true}], BLOCK_TYPE_CLOUD);
ToolAPI.registerBlockMaterial(BlockID.pIce, "stone", 3, true);

IDRegistry.genBlockID("aetherGell"); 
Block.createBlock("aetherGell", [
    {name: "Aether Gell", texture:[["sentrygel", 0]],inCreative: true}],BLOCK_TYPE_CLOUD);

IDRegistry.genBlockID("iceS");
Block.createBlock("iceS", [
    {name: "Ice stone", texture:[["icestone", 0]],inCreative: true}], BLOCK_TYPE_CLOUD);
ToolAPI.registerBlockMaterial(BlockID.iceS, "stone", 2, true);

IDRegistry.genBlockID("bS");
Block.createBlock("bS", [
    {name: "Ice stone bricks", texture:[["icestone_bricks", 0]],inCreative: true}],BLOCK_TYPE_CLOUD);
ToolAPI.registerBlockMaterial(BlockID.bS, "stone", 2, true);

IDRegistry.genBlockID("bSS");
Block.createBlock("bSS", [
    {name: "Ice stone bricks Slab", texture: [["icestone_bricks", 0]], inCreative: true}
]);
ToolAPI.registerBlockMaterial(BlockID.bSS, "stone", 2, true);
TileRenderer.makeSlab(BlockID.bSS, BlockID.bS);

IDRegistry.genBlockID("stairsSS");
Block.createBlock("stairsSS", [
    {name: "Ice stone Stairs", texture: [["icestone_bricks", 0]], inCreative: true}
], BLOCK_TYPE_STAIRS_STONE);

Recipes.addShaped({id: BlockID.bS, count: 4, data: 0}, [
    "xx ",
    "xx "
], ['x', BlockID.iceS, 0]);

var CFiremesh = new RenderMesh();
CFiremesh.setBlockTexture("altarent",0);
CFiremesh.importFromFile(__dir__+"/models/Blue.obj","obj",{translate:[+.5 ,0, +.5]});

var CFirerender = new ICRender.Model();
CFirerender.addEntry(new BlockRenderer.Model(CFiremesh));
BlockRenderer.setStaticICRender(BlockID.coldFire,0,CFirerender);

Block.registerDropFunction("coldFire", function(){
    if(Math.random() < .070){
        return [[ItemID.icestone, 1, 0]]
    }
    else {
        return [];
    }
});