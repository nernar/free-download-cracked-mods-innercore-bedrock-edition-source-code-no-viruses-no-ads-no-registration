//mushroom Cave
var MUSH = Block.createSpecialType({
	base: 59,
});
IDRegistry.genBlockID("mushroomcave");
Block.createBlockWithRotation("mushroomcave", [{name: "CMushroom", texture: [["mushroom_cave", 0], ["mushroom_cave", 0],["mushroom_cave", 0], ["mushroom_cave", 0], ["mushroom_cave", 0], ["mushroom_cave", 0]], inCreative: true},],MUSH);

Block.setBlockShape(BlockID.mushroomcave, {x: 0.43, y: 0, z: 0.43}, {x: 0.56, y: 0.50, z: 0.56});

IDRegistry.genItemID("mushroomcaveitem");
Item.createItem("mushroomcaveitem", "Cave Mushroom",
{name: "mushroomitem", meta: 0}, {stack: 64});

Block.registerDropFunction("mushroomcave", function (coords, id, data, diggingLevel) {
     {
        return [[ItemID.mushroomcaveitem, 0]];
    }
    return [];
});
BlockRenderer.addRenderCallback(BlockID.mushroomcave, function(api, coords, block) {
var box = BlockID.mushroomcave;

api.renderBoxId(coords.x, coords.y, coords.z, .497, 0, 0.438, .507, 0.25, .563, box, 0);
api.renderBoxId(coords.x, coords.y, coords.z, 0.438, 0, .497, .563, 0.25, .507, box, 0);

api.renderBoxId(coords.x, coords.y, coords.z, .497, 0.25, 0.25, .507, 0.375, .75, box, 0);
api.renderBoxId(coords.x, coords.y, coords.z, 0.25, 0.25, .497, .75, 0.375, .507, box, 0);

api.renderBoxId(coords.x, coords.y, coords.z, .497, 0.375, 0.313, .507, 0.438, .688, box, 0);
api.renderBoxId(coords.x, coords.y, coords.z, 0.313, 0.375, .497, .688, 0.438, .507, box, 0);

api.renderBoxId(coords.x, coords.y, coords.z, .497, 0.438, 0.375, .507, 0.50, .625, box, 0);
api.renderBoxId(coords.x, coords.y, coords.z, 0.375, 0.438, .497, .625, 0.50, .507, box, 0);

});
BlockRenderer.enableCustomRender(BlockID.mushroomcave);

Callback.addCallback("GenerateChunk", function (chunkX, chunkZ) {

    let coords = GenerationUtils.randomCoords(chunkX, chunkZ, 1, 75);
    if(Math.random() < 2.15){
    coords = GenerationUtils.findSurface(coords.x, coords.y, coords.z);

    if (World.getBlock(coords.x, coords.y + 1, coords.z).id === 0 && World.getBlock(coords.x, coords.y, coords.z).id === 1) {
        World.setBlock(coords.x,coords.y + 1,  coords.z, BlockID.mushroomcave, 0);
}}});

Callback.addCallback("ItemUse", function (coords, item, block) {
if (World.getBlock(coords.x, coords.y + 1, coords.z).id === 0 && item.id==ItemID.mushroomcaveitem){
World.setBlock(coords.x, coords.y + 1, coords.z, BlockID.mushroomcave, 0);
if (World.getBlock(coords.x, coords.y, coords.z).id === BlockID.mushroomcave){
  World.setBlock(coords.x, coords.y + 1, coords.z, 0, 0);
}
}});


var GLOWMUSH = Block.createSpecialType({
	base: 59,
  lightlevel: 13,
  lightopacity: 0,
  opaque: false
});
IDRegistry.genBlockID("mushroomglow");
Block.createBlockWithRotation("mushroomglow", [{name: "GMushroom", texture: [["mushroomcaveglow", 0], ["mushroomcaveglow", 0],["mushroomcaveglow", 0],
["mushroomcaveglow", 0], ["mushroomcaveglow", 0], ["mushroomcaveglow", 0]], inCreative: true},],GLOWMUSH);

Block.setBlockShape(BlockID.mushroomglow, {x: 0.43, y: 0, z: 0.43}, {x: 0.56, y: 0.50, z: 0.56});

IDRegistry.genItemID("mushroomglowitem");
Item.createItem("mushroomglowitem", "Glowing Mushroom",
{name: "mushroomglowitem", meta: 0}, {stack: 64});

Block.registerDropFunction("mushroomglow", function (coords, id, data, diggingLevel) {
     {
        return [[ItemID.mushroomglowitem, 0]];
    }
    return [];
});
BlockRenderer.addRenderCallback(BlockID.mushroomglow, function(api, coords, block) {
var box1 = BlockID.mushroomglow;

api.renderBoxId(coords.x, coords.y, coords.z, .497, 0, 0.438, .507, 0.25, .563, box1, 0);
api.renderBoxId(coords.x, coords.y, coords.z, 0.438, 0, .497, .563, 0.25, .507, box1, 0);

api.renderBoxId(coords.x, coords.y, coords.z, .497, 0.25, 0.25, .507, 0.375, .75, box1, 0);
api.renderBoxId(coords.x, coords.y, coords.z, 0.25, 0.25, .497, .75, 0.375, .507, box1, 0);

api.renderBoxId(coords.x, coords.y, coords.z, .497, 0.375, 0.313, .507, 0.438, .688, box1, 0);
api.renderBoxId(coords.x, coords.y, coords.z, 0.313, 0.375, .497, .688, 0.438, .507, box1, 0);

api.renderBoxId(coords.x, coords.y, coords.z, .497, 0.438, 0.375, .507, 0.50, .625, box1, 0);
api.renderBoxId(coords.x, coords.y, coords.z, 0.375, 0.438, .497, .625, 0.50, .507, box1, 0);

});
BlockRenderer.enableCustomRender(BlockID.mushroomglow);

Callback.addCallback("GenerateChunk", function (chunkX, chunkZ) {

    let coords = GenerationUtils.randomCoords(chunkX, chunkZ, 1, 75);
    if(Math.random() < 2.15){
    coords = GenerationUtils.findSurface(coords.x, coords.y, coords.z);

    if (World.getBlock(coords.x, coords.y + 1, coords.z).id === 0 && World.getBlock(coords.x, coords.y, coords.z).id === 1) {
        World.setBlock(coords.x,coords.y + 1,  coords.z, BlockID.mushroomglow, 0);
}}});

Callback.addCallback("ItemUse", function (coords, item, block) {
if (World.getBlock(coords.x, coords.y + 1, coords.z).id === 0 && item.id==ItemID.mushroomglowitem){
World.setBlock(coords.x, coords.y + 1, coords.z, BlockID.mushroomglow, 0);
if (World.getBlock(coords.x, coords.y, coords.z).id === BlockID.mushroomglow){
  World.setBlock(coords.x, coords.y + 1, coords.z, 0, 0);
}
}});

IDRegistry.genItemID("cavesoup");
Item.createFoodItem("cavesoup", "Cave Mushroom Soup", {name: "cavesoup", meta: 0}, {food: 9});
/*Callback.addCallback("FoodEaten", function (food, satRatio) {
if (food.id==ItemID.cavesoup){
Player.setCarriedItem(281, 1, 0);
}});*/
Callback.addCallback("PostLoaded", function () {
  Recipes.addShaped({id: ItemID.cavesoup, count: 1, data: 0}, [
    "   ", "cd ", "xab"], [
      'x', 281, 0, 'a', ItemID.mushroomcaveitem, 0, 'b', ItemID.mushroomglowitem, 0, 'c', 40, 0, 'd', 39, 0]);
});
