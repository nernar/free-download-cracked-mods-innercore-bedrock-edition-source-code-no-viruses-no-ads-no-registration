var BLOCK_LOW_LIGHT = Block.createSpecialType({
    lightlevel: 9,
    opaque: true});

var BLOCK_LOWEST_LIGHT = Block.createSpecialType({
    lightlevel: 4,
    opaque: true});

IDRegistry.genBlockID("basaltBr");
Block.createBlock("basaltBr", [{name: "Basalt bricks", texture:[["basalt_bricks", 0]],inCreative: false}], "opaque");
Block.setDestroyTime(BlockID.basaltBr,6);
ToolAPI.registerBlockMaterial(BlockID.basaltBr, "stone", 5, true);

Callback.addCallback("PostLoaded", function () {
Recipes.addShaped({id: BlockID.basaltBr, count: 4, data: 0}, [
    "oaa",
    "oaa",
], ['a', BlockID.basalt, 0]);
Recipes.addFurnace(BlockID.basaltCb, BlockID.basalt, 0);
});

IDRegistry.genBlockID("basaltSm");
Block.createBlock("basaltSm", [{name: "Basalt smooth", texture:[["basalt_smooth", 0]],inCreative: false}], "opaque");
Block.setDestroyTime(BlockID.basaltSm,6);
ToolAPI.registerBlockMaterial(BlockID.basaltSm, "stone", 5, true);

Callback.addCallback("PostLoaded", function () {
Recipes.addShaped({id: BlockID.basaltSm, count: 4, data: 0}, [
    "ooa"
], ['a', BlockID.basalt, 0]);
});

IDRegistry.genBlockID("shadowbricks"); 
Block.createBlock("shadowbricks", [{name: "Shadow quartz bricks", texture:[["shadow_bricks_bottom", 0]],inCreative: true}], "opaque");
Block.setDestroyTime(BlockID.shadowbricks,3);
ToolAPI.registerBlockMaterial(BlockID.shadowbricks, "stone", 4, true);

Callback.addCallback("PostLoaded", function () {
Recipes.addShaped({id: BlockID.shadowbricks, count: 4, data: 0}, [
    "ooa"
], ['a', BlockID.shadowquartzblock, 0]);
});

IDRegistry.genBlockID("splitshadowbricks"); 
Block.createBlock("splitshadowbricks", [{name: "Shadow quartz bricks", texture:[["split_shadow_bricks_top", 0], ["split_shadow_bricks_bottom", 0], ["split_shadow_bricks", 0], ["split_shadow_bricks", 0], ["split_shadow_bricks", 0], ["split_shadow_bricks", 0]],inCreative: true}], "opaque");
Block.setDestroyTime(BlockID.splitshadowbricks,3);
ToolAPI.registerBlockMaterial(BlockID.splitshadowbricks, "stone", 4, true);

Callback.addCallback("PostLoaded", function () {
Recipes.addShaped({id: BlockID.splitshadowbricks, count: 1, data: 0}, [
    "ooa"
], ['a', BlockID.shadowbricks, 0]);
});

IDRegistry.genBlockID("carvBr");
Block.createBlock("carvBr", [{name: "Sky tile", texture:[["tile_sky", 0]],inCreative: false}], "opaque");
Block.setDestroyTime(BlockID.carvBr,4);
ToolAPI.registerBlockMaterial(BlockID.carvBr, "stone", 4, true);

IDRegistry.genBlockID("carvedBr");
Block.createBlock("carvedBr", [{name: "Sky bricks", texture:[["bricks_sky", 0]],inCreative: false}], "opaque");
Block.setDestroyTime(BlockID.carvedBr,4);
ToolAPI.registerBlockMaterial(BlockID.carvedBr, "stone", 4, true);

IDRegistry.genBlockID("carvedsBr");
Block.createBlock("carvedsBr", [{name: "Carved sky bricks", texture:[["carved_bricks_sky", 0]],inCreative: false}], BLOCK_LOWEST_LIGHT);
Block.setDestroyTime(BlockID.carvedsBr,4);
ToolAPI.registerBlockMaterial(BlockID.carvedsBr, "stone", 4, true);

IDRegistry.genBlockID("lampSt");
Block.createBlock("lampSt", [{name: "Storm lamp", texture:[["storm_lamp", 0]],inCreative: false}], BLOCK_LIGHT);
Block.setDestroyTime(BlockID.lampSt,2);
ToolAPI.registerBlockMaterial(BlockID.lampSt, "stone", 2, true);

IDRegistry.genBlockID("cen");
Block.createBlock("cen", [{name: "Candel", texture: [["candle", 0]], inCreative: false}],BLOCK_LIGHT);
Block.setBlockShape(BlockID.cen, {x: 0.001, y: 0.001, z: 0.001}, {x: 0.999, y: 0.002, z: 0.999});
Block.registerDropFunction("cen", function(){
    return [[ItemID.cen, 1, 0]];
});

IDRegistry.genItemID("cen");
Item.createItem("cen", "Candle", {name: "candle", data: 1});

BlockRenderer.addRenderCallback(BlockID.cen, function(api, coords, block) {
var box = BlockID.cen;
api.renderBoxId(coords.x, coords.y, coords.z, .499, 0, 0, .501, 0.90, 1, box, 0);
api.renderBoxId(coords.x, coords.y, coords.z, 0, 0, .499, 1, 0.90, .501, box, 0);               
});
BlockRenderer.enableCustomRender(BlockID.cen);

Item.registerUseFunction("cen", function(coords, item, block){
var place = coords.relative;
if(GenerationUtils.isTransparentBlock(World.getBlockID(place.x, place.y, place.z))){
  World.setBlock(place.x, place.y, place.z, BlockID.cen);
  Player.setCarriedItem(item.id, item.count - 1, item.data);
    }
});

Block.setBlockShape(BlockID.con, {x: 0.001, y: 0.001, z: 0.001}, {x: 0.999, y: 0.002, z: 0.999});
Block.registerDropFunction("con", function(){
    return [[ItemID.con, 1, 0]];
});

IDRegistry.genItemID("chendelier");
Item.createItem("chendelier", "Chandelier", {name: "chandelier", data: 1});

IDRegistry.genBlockID("chendelier");
Block.createBlock("chendelier", [{"name":"Chendelier","texture":[["chandelier",0]],"inCreative":false}], BLOCK_LIGHT);

var render = new ICRender.Model();
var model = BlockRenderer.createModel();
model.addBox(8/16, 1/16, 0/16, 8/16, 16/16, 16/16, "chandelier", 0);
model.addBox(0/16, 1/16, 8/16, 16/16, 16/16, 8/16, "chandelier", 0);

render.addEntry(model);
BlockRenderer.setStaticICRender(BlockID.chendelier, -1, render);

Block.setBlockShape(BlockID.chendelier, {"x":0.46875,"y":1,"z":0.46875}, {"x":0.53125,"y":0.03125,"z":0.53125});

Item.registerUseFunction("chendelier", function(coords, item, block){
var place = coords.relative;
if(GenerationUtils.isTransparentBlock(World.getBlockID(place.x, place.y, place.z))){
  World.setBlock(place.x, place.y, place.z, BlockID.chendelier);
  Player.setCarriedItem(item.id, item.count - 1, item.data);
    }
});