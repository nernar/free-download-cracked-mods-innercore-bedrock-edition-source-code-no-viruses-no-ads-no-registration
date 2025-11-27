IDRegistry.genBlockID("realitybanner"); 
  Block.createBlockWithRotation("realitybanner", [{name: "Знамя Яви", texture: [["realitybanner", 0], ["realitybanner", 0], ["realitybanner", 0], ["realitybanner", 0], ["realitybanner", 0], ["realitybanner", 0]], inCreative: false}], GM);
var model = BlockRenderer.createModel();
var render = new ICRender.Model();
model.addBox(2/16, 0/16, 2/16, 14/16, 1/16, 14/16, "ooak", 0);
model.addBox(3/16, 0/16, 3/16, 13/16, 2/16, 13/16, "ooak", 0);
model.addBox(6/16, 0/16, 6/16, 10/16, 16/16, 10/16, "ooak", 0);
model.addBox(6/16, 16/16, 6/16, 10/16, 28/16, 10/16, "ooak", 0);
model.addBox(3/16, 28/16, 6/16, 13/16, 32/16, 10/16, "ooak", 0);
model.addBox(3/16, 16/16, 10/16, 13/16, 32/16, 11/16, "realitybanner", 0);
model.addBox(3/16, 0/16, 10/16, 13/16, 16/16, 11/16, "realitybannerniz", 0);
render.addEntry(model);
BlockRenderer.setStaticICRender(BlockID.realitybanner, -1, render);
Block.setBlockShape(BlockID.realitybanner, {"x":0,"y":0,"z":0}, {"x":1,"y":2,"z":1});
IDRegistry.genItemID("realitybanner");
Item.createItem("realitybanner", "Знамя Яви", {name: "realitybanner", meta: 0}, {stack: 64});
Callback.addCallback("ItemUse", function (coords, item, block) {
if (item.id==ItemID.realitybanner)
{
World.setBlock (coords.relative.x, coords.relative.y, coords.relative.z, BlockID.realitybanner, 0);
Player.decreaseCarriedItem (1);
}
});
Block.registerDropFunction(BlockID.realitybanner, function(coords, blockID, blockData, level){
 var drop = [];
  drop.push([ItemID.realitybanner, 1, 0]);
 return drop;
});



IDRegistry.genBlockID("bronzerealitybanner"); 
  Block.createBlockWithRotation("bronzerealitybanner", [{name: "Бронзовое знамя Яви", texture: [["bronzerealitybanner", 0], ["bronzerealitybanner", 0], ["bronzerealitybanner", 0], ["bronzerealitybanner", 0], ["bronzerealitybanner", 0], ["bronzerealitybanner", 0]], inCreative: false}], GM);
var model = BlockRenderer.createModel();
var render = new ICRender.Model();
model.addBox(2/16, 0/16, 2/16, 14/16, 1/16, 14/16, "ooak", 0);
model.addBox(3/16, 0/16, 3/16, 13/16, 2/16, 13/16, "ooak", 0);
model.addBox(6/16, 0/16, 6/16, 10/16, 16/16, 10/16, "ooak", 0);
model.addBox(6/16, 16/16, 6/16, 10/16, 28/16, 10/16, "ooak", 0);
model.addBox(3/16, 28/16, 6/16, 13/16, 32/16, 10/16, "ooak", 0);
model.addBox(3/16, 16/16, 10/16, 13/16, 32/16, 11/16, "bronzerealitybanner", 0);
model.addBox(3/16, 0/16, 10/16, 13/16, 16/16, 11/16, "bronzerealitybannerniz", 0);
render.addEntry(model);
BlockRenderer.setStaticICRender(BlockID.bronzerealitybanner, -1, render);
Block.setBlockShape(BlockID.bronzerealitybanner, {"x":0,"y":0,"z":0}, {"x":1,"y":2,"z":1});
IDRegistry.genItemID("bronzerealitybanner");
Item.createItem("bronzerealitybanner", "Бронзовое знамя Яви", {name: "bronzerealitybanner", meta: 0}, {stack: 64});
Callback.addCallback("ItemUse", function (coords, item, block) {
if (item.id==ItemID.bronzerealitybanner)
{
World.setBlock (coords.relative.x, coords.relative.y, coords.relative.z, BlockID.bronzerealitybanner, 0);
Player.decreaseCarriedItem (1);
}
});
Block.registerDropFunction(BlockID.bronzerealitybanner, function(coords, blockID, blockData, level){
 var drop = [];
  drop.push([ItemID.bronzerealitybanner, 1, 0]);
 return drop;
});
Recipes.addShaped({id: ItemID.bronzerealitybanner, count: 1, data: 0}, [ "bab", "aaa", "bab"], ['a', ItemID.realitybanner, 0, 'b', 265, 0]);






IDRegistry.genBlockID("silverrealitybanner"); 
  Block.createBlockWithRotation("silverrealitybanner", [{name: "Серебрянное знамя Яви", texture: [["silverrealitybanner", 0], ["silverrealitybanner", 0], ["silverrealitybanner", 0], ["silverrealitybanner", 0], ["silverrealitybanner", 0], ["silverrealitybanner", 0]], inCreative: false}], GM);
var model = BlockRenderer.createModel();
var render = new ICRender.Model();
model.addBox(2/16, 0/16, 2/16, 14/16, 1/16, 14/16, "ooak", 0);
model.addBox(3/16, 0/16, 3/16, 13/16, 2/16, 13/16, "ooak", 0);
model.addBox(6/16, 0/16, 6/16, 10/16, 16/16, 10/16, "ooak", 0);
model.addBox(6/16, 16/16, 6/16, 10/16, 28/16, 10/16, "ooak", 0);
model.addBox(3/16, 28/16, 6/16, 13/16, 32/16, 10/16, "ooak", 0);
model.addBox(3/16, 16/16, 10/16, 13/16, 32/16, 11/16, "silverrealitybanner", 0);
model.addBox(3/16, 0/16, 10/16, 13/16, 16/16, 11/16, "silverrealitybannerniz", 0);
render.addEntry(model);
BlockRenderer.setStaticICRender(BlockID.silverrealitybanner, -1, render);
Block.setBlockShape(BlockID.silverrealitybanner, {"x":0,"y":0,"z":0}, {"x":1,"y":2,"z":1});
IDRegistry.genItemID("silverrealitybanner");
Item.createItem("silverrealitybanner", "Серебрянное знамя Яви", {name: "silverrealitybanner", meta: 0}, {stack: 64});
Callback.addCallback("ItemUse", function (coords, item, block) {
if (item.id==ItemID.silverrealitybanner)
{
World.setBlock (coords.relative.x, coords.relative.y, coords.relative.z, BlockID.silverrealitybanner, 0);
Player.decreaseCarriedItem (1);
}
});
Block.registerDropFunction(BlockID.silverrealitybanner, function(coords, blockID, blockData, level){
 var drop = [];
  drop.push([ItemID.silverrealitybanner, 1, 0]);
 return drop;
});
Recipes.addShaped({id: ItemID.silverrealitybanner, count: 1, data: 0}, [ "bab", "aaa", "bab"], ['a', ItemID.bronzerealitybanner, 0, 'b', 264, 0]);



IDRegistry.genBlockID("goldrealitybanner"); 
  Block.createBlockWithRotation("goldrealitybanner", [{name: "Серебрянное знамя Яви", texture: [["goldrealitybanner", 0], ["goldrealitybanner", 0], ["goldrealitybanner", 0], ["goldrealitybanner", 0], ["goldrealitybanner", 0], ["goldrealitybanner", 0]], inCreative: false}], GM);
var model = BlockRenderer.createModel();
var render = new ICRender.Model();
model.addBox(2/16, 0/16, 2/16, 14/16, 1/16, 14/16, "ooak", 0);
model.addBox(3/16, 0/16, 3/16, 13/16, 2/16, 13/16, "ooak", 0);
model.addBox(6/16, 0/16, 6/16, 10/16, 16/16, 10/16, "ooak", 0);
model.addBox(6/16, 16/16, 6/16, 10/16, 28/16, 10/16, "ooak", 0);
model.addBox(3/16, 28/16, 6/16, 13/16, 32/16, 10/16, "ooak", 0);
model.addBox(3/16, 16/16, 10/16, 13/16, 32/16, 11/16, "goldrealitybanner", 0);
model.addBox(3/16, 0/16, 10/16, 13/16, 16/16, 11/16, "goldrealitybannerniz", 0);
render.addEntry(model);
BlockRenderer.setStaticICRender(BlockID.goldrealitybanner, -1, render);
Block.setBlockShape(BlockID.goldrealitybanner, {"x":0,"y":0,"z":0}, {"x":1,"y":2,"z":1});
IDRegistry.genItemID("goldrealitybanner");
Item.createItem("goldrealitybanner", "Серебрянное знамя Яви", {name: "goldrealitybanner", meta: 0}, {stack: 64});
Callback.addCallback("ItemUse", function (coords, item, block) {
if (item.id==ItemID.goldrealitybanner)
{
World.setBlock (coords.relative.x, coords.relative.y, coords.relative.z, BlockID.goldrealitybanner, 0);
Player.decreaseCarriedItem (1);
}
});
Block.registerDropFunction(BlockID.goldrealitybanner, function(coords, blockID, blockData, level){
 var drop = [];
  drop.push([ItemID.goldrealitybanner, 1, 0]);
 return drop;
});
Recipes.addShaped({id: ItemID.goldrealitybanner, count: 1, data: 0}, [ "bab", "aaa", "bab"], ['a', ItemID.silverrealitybanner, 0, 'b', ItemID.flisotuachewn, 0]);












IDRegistry.genBlockID("mushroombanner"); 
  Block.createBlockWithRotation("mushroombanner", [{name: "Знамя Грибов", texture: [["mushroombanner", 0], ["mushroombanner", 0], ["mushroombanner", 0], ["mushroombanner", 0], ["mushroombanner", 0], ["mushroombanner", 0]], inCreative: false}], GM);
var model = BlockRenderer.createModel();
var render = new ICRender.Model();
model.addBox(2/16, 0/16, 2/16, 14/16, 1/16, 14/16, "ooak", 0);
model.addBox(3/16, 0/16, 3/16, 13/16, 2/16, 13/16, "ooak", 0);
model.addBox(6/16, 0/16, 6/16, 10/16, 16/16, 10/16, "ooak", 0);
model.addBox(6/16, 16/16, 6/16, 10/16, 28/16, 10/16, "ooak", 0);
model.addBox(3/16, 28/16, 6/16, 13/16, 32/16, 10/16, "ooak", 0);
model.addBox(3/16, 16/16, 10/16, 13/16, 32/16, 11/16, "mushroombanner", 0);
model.addBox(3/16, 0/16, 10/16, 13/16, 16/16, 11/16, "mushroombannerniz", 0);
render.addEntry(model);
BlockRenderer.setStaticICRender(BlockID.mushroombanner, -1, render);
Block.setBlockShape(BlockID.mushroombanner, {"x":0,"y":0,"z":0}, {"x":1,"y":2,"z":1});
IDRegistry.genItemID("mushroombanner");
Item.createItem("mushroombanner", "Знамя Грибов", {name: "mushroombanner", meta: 0}, {stack: 64});
Callback.addCallback("ItemUse", function (coords, item, block) {
if (item.id==ItemID.mushroombanner)
{
World.setBlock (coords.relative.x, coords.relative.y, coords.relative.z, BlockID.mushroombanner, 0);
Player.decreaseCarriedItem (1);
}
});
Block.registerDropFunction(BlockID.mushroombanner, function(coords, blockID, blockData, level){
 var drop = [];
  drop.push([ItemID.mushroombanner, 1, 0]);
 return drop;
});



IDRegistry.genBlockID("bronzemushroombanner"); 
  Block.createBlockWithRotation("bronzemushroombanner", [{name: "Бронзовое знамя Грибов", texture: [["bronzemushroombanner", 0], ["bronzemushroombanner", 0], ["bronzemushroombanner", 0], ["bronzemushroombanner", 0], ["bronzemushroombanner", 0], ["bronzemushroombanner", 0]], inCreative: false}], GM);
var model = BlockRenderer.createModel();
var render = new ICRender.Model();
model.addBox(2/16, 0/16, 2/16, 14/16, 1/16, 14/16, "ooak", 0);
model.addBox(3/16, 0/16, 3/16, 13/16, 2/16, 13/16, "ooak", 0);
model.addBox(6/16, 0/16, 6/16, 10/16, 16/16, 10/16, "ooak", 0);
model.addBox(6/16, 16/16, 6/16, 10/16, 28/16, 10/16, "ooak", 0);
model.addBox(3/16, 28/16, 6/16, 13/16, 32/16, 10/16, "ooak", 0);
model.addBox(3/16, 16/16, 10/16, 13/16, 32/16, 11/16, "bronzemushroombanner", 0);
model.addBox(3/16, 0/16, 10/16, 13/16, 16/16, 11/16, "bronzemushroombannerniz", 0);
render.addEntry(model);
BlockRenderer.setStaticICRender(BlockID.bronzemushroombanner, -1, render);
Block.setBlockShape(BlockID.bronzemushroombanner, {"x":0,"y":0,"z":0}, {"x":1,"y":2,"z":1});
IDRegistry.genItemID("bronzemushroombanner");
Item.createItem("bronzemushroombanner", "Бронзовое знамя Грибов", {name: "bronzemushroombanner", meta: 0}, {stack: 64});
Callback.addCallback("ItemUse", function (coords, item, block) {
if (item.id==ItemID.bronzemushroombanner)
{
World.setBlock (coords.relative.x, coords.relative.y, coords.relative.z, BlockID.bronzemushroombanner, 0);
Player.decreaseCarriedItem (1);
}
});
Block.registerDropFunction(BlockID.bronzemushroombanner, function(coords, blockID, blockData, level){
 var drop = [];
  drop.push([ItemID.bronzemushroombanner, 1, 0]);
 return drop;
});
Recipes.addShaped({id: ItemID.bronzemushroombanner, count: 1, data: 0}, [ "bab", "aaa", "bab"], ['a', ItemID.mushroombanner, 0, 'b', 40, 0]);






IDRegistry.genBlockID("silvermushroombanner"); 
  Block.createBlockWithRotation("silvermushroombanner", [{name: "Серебрянное знамя Грибов", texture: [["silvermushroombanner", 0], ["silvermushroombanner", 0], ["silvermushroombanner", 0], ["silvermushroombanner", 0], ["silvermushroombanner", 0], ["silvermushroombanner", 0]], inCreative: false}], GM);
var model = BlockRenderer.createModel();
var render = new ICRender.Model();
model.addBox(2/16, 0/16, 2/16, 14/16, 1/16, 14/16, "ooak", 0);
model.addBox(3/16, 0/16, 3/16, 13/16, 2/16, 13/16, "ooak", 0);
model.addBox(6/16, 0/16, 6/16, 10/16, 16/16, 10/16, "ooak", 0);
model.addBox(6/16, 16/16, 6/16, 10/16, 28/16, 10/16, "ooak", 0);
model.addBox(3/16, 28/16, 6/16, 13/16, 32/16, 10/16, "ooak", 0);
model.addBox(3/16, 16/16, 10/16, 13/16, 32/16, 11/16, "silvermushroombanner", 0);
model.addBox(3/16, 0/16, 10/16, 13/16, 16/16, 11/16, "silvermushroombannerniz", 0);
render.addEntry(model);
BlockRenderer.setStaticICRender(BlockID.silvermushroombanner, -1, render);
Block.setBlockShape(BlockID.silvermushroombanner, {"x":0,"y":0,"z":0}, {"x":1,"y":2,"z":1});
IDRegistry.genItemID("silvermushroombanner");
Item.createItem("silvermushroombanner", "Серебрянное знамя Грибов", {name: "silvermushroombanner", meta: 0}, {stack: 64});
Callback.addCallback("ItemUse", function (coords, item, block) {
if (item.id==ItemID.silvermushroombanner)
{
World.setBlock (coords.relative.x, coords.relative.y, coords.relative.z, BlockID.silvermushroombanner, 0);
Player.decreaseCarriedItem (1);
}
});
Block.registerDropFunction(BlockID.silvermushroombanner, function(coords, blockID, blockData, level){
 var drop = [];
  drop.push([ItemID.silvermushroombanner, 1, 0]);
 return drop;
});
Recipes.addShaped({id: ItemID.silvermushroombanner, count: 1, data: 0}, [ "bab", "aaa", "bab"], ['a', ItemID.bronzemushroombanner, 0, 'b', 39, 0]);



IDRegistry.genBlockID("goldmushroombanner"); 
  Block.createBlockWithRotation("goldmushroombanner", [{name: "Серебрянное знамя Грибов", texture: [["goldmushroombanner", 0], ["goldmushroombanner", 0], ["goldmushroombanner", 0], ["goldmushroombanner", 0], ["goldmushroombanner", 0], ["goldmushroombanner", 0]], inCreative: false}], GM);
var model = BlockRenderer.createModel();
var render = new ICRender.Model();
model.addBox(2/16, 0/16, 2/16, 14/16, 1/16, 14/16, "ooak", 0);
model.addBox(3/16, 0/16, 3/16, 13/16, 2/16, 13/16, "ooak", 0);
model.addBox(6/16, 0/16, 6/16, 10/16, 16/16, 10/16, "ooak", 0);
model.addBox(6/16, 16/16, 6/16, 10/16, 28/16, 10/16, "ooak", 0);
model.addBox(3/16, 28/16, 6/16, 13/16, 32/16, 10/16, "ooak", 0);
model.addBox(3/16, 16/16, 10/16, 13/16, 32/16, 11/16, "goldmushroombanner", 0);
model.addBox(3/16, 0/16, 10/16, 13/16, 16/16, 11/16, "goldmushroombannerniz", 0);
render.addEntry(model);
BlockRenderer.setStaticICRender(BlockID.goldmushroombanner, -1, render);
Block.setBlockShape(BlockID.goldmushroombanner, {"x":0,"y":0,"z":0}, {"x":1,"y":2,"z":1});
IDRegistry.genItemID("goldmushroombanner");
Item.createItem("goldmushroombanner", "Серебрянное знамя Грибов", {name: "goldmushroombanner", meta: 0}, {stack: 64});
Callback.addCallback("ItemUse", function (coords, item, block) {
if (item.id==ItemID.goldmushroombanner)
{
World.setBlock (coords.relative.x, coords.relative.y, coords.relative.z, BlockID.goldmushroombanner, 0);
Player.decreaseCarriedItem (1);
}
});
Block.registerDropFunction(BlockID.goldmushroombanner, function(coords, blockID, blockData, level){
 var drop = [];
  drop.push([ItemID.goldmushroombanner, 1, 0]);
 return drop;
});
Recipes.addShaped({id: ItemID.goldmushroombanner, count: 1, data: 0}, [ "bab", "aaa", "bab"], ['a', ItemID.silvermushroombanner, 0, 'b', 110, 0]);













IDRegistry.genBlockID("waterbanner"); 
  Block.createBlockWithRotation("waterbanner", [{name: "Знамя Океана", texture: [["waterbanner", 0], ["waterbanner", 0], ["waterbanner", 0], ["waterbanner", 0], ["waterbanner", 0], ["waterbanner", 0]], inCreative: false}], GM);
var model = BlockRenderer.createModel();
var render = new ICRender.Model();
model.addBox(2/16, 0/16, 2/16, 14/16, 1/16, 14/16, "ooak", 0);
model.addBox(3/16, 0/16, 3/16, 13/16, 2/16, 13/16, "ooak", 0);
model.addBox(6/16, 0/16, 6/16, 10/16, 16/16, 10/16, "ooak", 0);
model.addBox(6/16, 16/16, 6/16, 10/16, 28/16, 10/16, "ooak", 0);
model.addBox(3/16, 28/16, 6/16, 13/16, 32/16, 10/16, "ooak", 0);
model.addBox(3/16, 16/16, 10/16, 13/16, 32/16, 11/16, "waterbanner", 0);
model.addBox(3/16, 0/16, 10/16, 13/16, 16/16, 11/16, "waterbannerniz", 0);
render.addEntry(model);
BlockRenderer.setStaticICRender(BlockID.waterbanner, -1, render);
Block.setBlockShape(BlockID.waterbanner, {"x":0,"y":0,"z":0}, {"x":1,"y":2,"z":1});
IDRegistry.genItemID("waterbanner");
Item.createItem("waterbanner", "Знамя Океана", {name: "waterbanner", meta: 0}, {stack: 64});
Callback.addCallback("ItemUse", function (coords, item, block) {
if (item.id==ItemID.waterbanner)
{
World.setBlock (coords.relative.x, coords.relative.y, coords.relative.z, BlockID.waterbanner, 0);
Player.decreaseCarriedItem (1);
}
});
Block.registerDropFunction(BlockID.waterbanner, function(coords, blockID, blockData, level){
 var drop = [];
  drop.push([ItemID.waterbanner, 1, 0]);
 return drop;
});



IDRegistry.genBlockID("bronzewaterbanner"); 
  Block.createBlockWithRotation("bronzewaterbanner", [{name: "Бронзовое знамя Океана", texture: [["bronzewaterbanner", 0], ["bronzewaterbanner", 0], ["bronzewaterbanner", 0], ["bronzewaterbanner", 0], ["bronzewaterbanner", 0], ["bronzewaterbanner", 0]], inCreative: false}], GM);
var model = BlockRenderer.createModel();
var render = new ICRender.Model();
model.addBox(2/16, 0/16, 2/16, 14/16, 1/16, 14/16, "ooak", 0);
model.addBox(3/16, 0/16, 3/16, 13/16, 2/16, 13/16, "ooak", 0);
model.addBox(6/16, 0/16, 6/16, 10/16, 16/16, 10/16, "ooak", 0);
model.addBox(6/16, 16/16, 6/16, 10/16, 28/16, 10/16, "ooak", 0);
model.addBox(3/16, 28/16, 6/16, 13/16, 32/16, 10/16, "ooak", 0);
model.addBox(3/16, 16/16, 10/16, 13/16, 32/16, 11/16, "bronzewaterbanner", 0);
model.addBox(3/16, 0/16, 10/16, 13/16, 16/16, 11/16, "bronzewaterbannerniz", 0);
render.addEntry(model);
BlockRenderer.setStaticICRender(BlockID.bronzewaterbanner, -1, render);
Block.setBlockShape(BlockID.bronzewaterbanner, {"x":0,"y":0,"z":0}, {"x":1,"y":2,"z":1});
IDRegistry.genItemID("bronzewaterbanner");
Item.createItem("bronzewaterbanner", "Бронзовое знамя Океана", {name: "bronzewaterbanner", meta: 0}, {stack: 64});
Callback.addCallback("ItemUse", function (coords, item, block) {
if (item.id==ItemID.bronzewaterbanner)
{
World.setBlock (coords.relative.x, coords.relative.y, coords.relative.z, BlockID.bronzewaterbanner, 0);
Player.decreaseCarriedItem (1);
}
});
Block.registerDropFunction(BlockID.bronzewaterbanner, function(coords, blockID, blockData, level){
 var drop = [];
  drop.push([ItemID.bronzewaterbanner, 1, 0]);
 return drop;
});
Recipes.addShaped({id: ItemID.bronzewaterbanner, count: 1, data: 0}, [ "bab", "aaa", "bab"], ['a', ItemID.waterbanner, 0, 'b', 168, 1]);






IDRegistry.genBlockID("silverwaterbanner"); 
  Block.createBlockWithRotation("silverwaterbanner", [{name: "Серебрянное знамя Океана", texture: [["silverwaterbanner", 0], ["silverwaterbanner", 0], ["silverwaterbanner", 0], ["silverwaterbanner", 0], ["silverwaterbanner", 0], ["silverwaterbanner", 0]], inCreative: false}], GM);
var model = BlockRenderer.createModel();
var render = new ICRender.Model();
model.addBox(2/16, 0/16, 2/16, 14/16, 1/16, 14/16, "ooak", 0);
model.addBox(3/16, 0/16, 3/16, 13/16, 2/16, 13/16, "ooak", 0);
model.addBox(6/16, 0/16, 6/16, 10/16, 16/16, 10/16, "ooak", 0);
model.addBox(6/16, 16/16, 6/16, 10/16, 28/16, 10/16, "ooak", 0);
model.addBox(3/16, 28/16, 6/16, 13/16, 32/16, 10/16, "ooak", 0);
model.addBox(3/16, 16/16, 10/16, 13/16, 32/16, 11/16, "silverwaterbanner", 0);
model.addBox(3/16, 0/16, 10/16, 13/16, 16/16, 11/16, "silverwaterbannerniz", 0);
render.addEntry(model);
BlockRenderer.setStaticICRender(BlockID.silverwaterbanner, -1, render);
Block.setBlockShape(BlockID.silverwaterbanner, {"x":0,"y":0,"z":0}, {"x":1,"y":2,"z":1});
IDRegistry.genItemID("silverwaterbanner");
Item.createItem("silverwaterbanner", "Серебрянное знамя Океана", {name: "silverwaterbanner", meta: 0}, {stack: 64});
Callback.addCallback("ItemUse", function (coords, item, block) {
if (item.id==ItemID.silverwaterbanner)
{
World.setBlock (coords.relative.x, coords.relative.y, coords.relative.z, BlockID.silverwaterbanner, 0);
Player.decreaseCarriedItem (1);
}
});
Block.registerDropFunction(BlockID.silverwaterbanner, function(coords, blockID, blockData, level){
 var drop = [];
  drop.push([ItemID.silverwaterbanner, 1, 0]);
 return drop;
});
Recipes.addShaped({id: ItemID.silverwaterbanner, count: 1, data: 0}, [ "bab", "aaa", "bab"], ['a', ItemID.bronzewaterbanner, 0, 'b', 168, 2]);



IDRegistry.genBlockID("goldwaterbanner"); 
  Block.createBlockWithRotation("goldwaterbanner", [{name: "Серебрянное знамя Океана", texture: [["goldwaterbanner", 0], ["goldwaterbanner", 0], ["goldwaterbanner", 0], ["goldwaterbanner", 0], ["goldwaterbanner", 0], ["goldwaterbanner", 0]], inCreative: false}], GM);
var model = BlockRenderer.createModel();
var render = new ICRender.Model();
model.addBox(2/16, 0/16, 2/16, 14/16, 1/16, 14/16, "ooak", 0);
model.addBox(3/16, 0/16, 3/16, 13/16, 2/16, 13/16, "ooak", 0);
model.addBox(6/16, 0/16, 6/16, 10/16, 16/16, 10/16, "ooak", 0);
model.addBox(6/16, 16/16, 6/16, 10/16, 28/16, 10/16, "ooak", 0);
model.addBox(3/16, 28/16, 6/16, 13/16, 32/16, 10/16, "ooak", 0);
model.addBox(3/16, 16/16, 10/16, 13/16, 32/16, 11/16, "goldwaterbanner", 0);
model.addBox(3/16, 0/16, 10/16, 13/16, 16/16, 11/16, "goldwaterbannerniz", 0);
render.addEntry(model);
BlockRenderer.setStaticICRender(BlockID.goldwaterbanner, -1, render);
Block.setBlockShape(BlockID.goldwaterbanner, {"x":0,"y":0,"z":0}, {"x":1,"y":2,"z":1});
IDRegistry.genItemID("goldwaterbanner");
Item.createItem("goldwaterbanner", "Серебрянное знамя Океана", {name: "goldwaterbanner", meta: 0}, {stack: 64});
Callback.addCallback("ItemUse", function (coords, item, block) {
if (item.id==ItemID.goldwaterbanner)
{
World.setBlock (coords.relative.x, coords.relative.y, coords.relative.z, BlockID.goldwaterbanner, 0);
Player.decreaseCarriedItem (1);
}
});
Block.registerDropFunction(BlockID.goldwaterbanner, function(coords, blockID, blockData, level){
 var drop = [];
  drop.push([ItemID.goldwaterbanner, 1, 0]);
 return drop;
});
Recipes.addShaped({id: ItemID.goldwaterbanner, count: 1, data: 0}, [ "bab", "aaa", "bab"], ['a', ItemID.silverwaterbanner, 0, 'b', 169, 0]);













IDRegistry.genBlockID("netherbanner"); 
  Block.createBlockWithRotation("netherbanner", [{name: "Знамя Преисподней", texture: [["netherbanner", 0], ["netherbanner", 0], ["netherbanner", 0], ["netherbanner", 0], ["netherbanner", 0], ["netherbanner", 0]], inCreative: false}], GM);
var model = BlockRenderer.createModel();
var render = new ICRender.Model();
model.addBox(2/16, 0/16, 2/16, 14/16, 1/16, 14/16, "ooak", 0);
model.addBox(3/16, 0/16, 3/16, 13/16, 2/16, 13/16, "ooak", 0);
model.addBox(6/16, 0/16, 6/16, 10/16, 16/16, 10/16, "ooak", 0);
model.addBox(6/16, 16/16, 6/16, 10/16, 28/16, 10/16, "ooak", 0);
model.addBox(3/16, 28/16, 6/16, 13/16, 32/16, 10/16, "ooak", 0);
model.addBox(3/16, 16/16, 10/16, 13/16, 32/16, 11/16, "netherbanner", 0);
model.addBox(3/16, 0/16, 10/16, 13/16, 16/16, 11/16, "netherbannerniz", 0);
render.addEntry(model);
BlockRenderer.setStaticICRender(BlockID.netherbanner, -1, render);
Block.setBlockShape(BlockID.netherbanner, {"x":0,"y":0,"z":0}, {"x":1,"y":2,"z":1});
IDRegistry.genItemID("netherbanner");
Item.createItem("netherbanner", "Знамя Преисподней", {name: "netherbanner", meta: 0}, {stack: 64});
Callback.addCallback("ItemUse", function (coords, item, block) {
if (item.id==ItemID.netherbanner)
{
World.setBlock (coords.relative.x, coords.relative.y, coords.relative.z, BlockID.netherbanner, 0);
Player.decreaseCarriedItem (1);
}
});
Block.registerDropFunction(BlockID.netherbanner, function(coords, blockID, blockData, level){
 var drop = [];
  drop.push([ItemID.netherbanner, 1, 0]);
 return drop;
});



IDRegistry.genBlockID("bronzenetherbanner"); 
  Block.createBlockWithRotation("bronzenetherbanner", [{name: "Бронзовое знамя Преисподней", texture: [["bronzenetherbanner", 0], ["bronzenetherbanner", 0], ["bronzenetherbanner", 0], ["bronzenetherbanner", 0], ["bronzenetherbanner", 0], ["bronzenetherbanner", 0]], inCreative: false}], GM);
var model = BlockRenderer.createModel();
var render = new ICRender.Model();
model.addBox(2/16, 0/16, 2/16, 14/16, 1/16, 14/16, "ooak", 0);
model.addBox(3/16, 0/16, 3/16, 13/16, 2/16, 13/16, "ooak", 0);
model.addBox(6/16, 0/16, 6/16, 10/16, 16/16, 10/16, "ooak", 0);
model.addBox(6/16, 16/16, 6/16, 10/16, 28/16, 10/16, "ooak", 0);
model.addBox(3/16, 28/16, 6/16, 13/16, 32/16, 10/16, "ooak", 0);
model.addBox(3/16, 16/16, 10/16, 13/16, 32/16, 11/16, "bronzenetherbanner", 0);
model.addBox(3/16, 0/16, 10/16, 13/16, 16/16, 11/16, "bronzenetherbannerniz", 0);
render.addEntry(model);
BlockRenderer.setStaticICRender(BlockID.bronzenetherbanner, -1, render);
Block.setBlockShape(BlockID.bronzenetherbanner, {"x":0,"y":0,"z":0}, {"x":1,"y":2,"z":1});
IDRegistry.genItemID("bronzenetherbanner");
Item.createItem("bronzenetherbanner", "Бронзовое знамя Преисподней", {name: "bronzenetherbanner", meta: 0}, {stack: 64});
Callback.addCallback("ItemUse", function (coords, item, block) {
if (item.id==ItemID.bronzenetherbanner)
{
World.setBlock (coords.relative.x, coords.relative.y, coords.relative.z, BlockID.bronzenetherbanner, 0);
Player.decreaseCarriedItem (1);
}
});
Block.registerDropFunction(BlockID.bronzenetherbanner, function(coords, blockID, blockData, level){
 var drop = [];
  drop.push([ItemID.bronzenetherbanner, 1, 0]);
 return drop;
});
Recipes.addShaped({id: ItemID.bronzenetherbanner, count: 1, data: 0}, [ "bab", "aaa", "bab"], ['a', ItemID.netherbanner, 0, 'b', 89, 0]);






IDRegistry.genBlockID("silvernetherbanner"); 
  Block.createBlockWithRotation("silvernetherbanner", [{name: "Серебрянное знамя Преисподней", texture: [["silvernetherbanner", 0], ["silvernetherbanner", 0], ["silvernetherbanner", 0], ["silvernetherbanner", 0], ["silvernetherbanner", 0], ["silvernetherbanner", 0]], inCreative: false}], GM);
var model = BlockRenderer.createModel();
var render = new ICRender.Model();
model.addBox(2/16, 0/16, 2/16, 14/16, 1/16, 14/16, "ooak", 0);
model.addBox(3/16, 0/16, 3/16, 13/16, 2/16, 13/16, "ooak", 0);
model.addBox(6/16, 0/16, 6/16, 10/16, 16/16, 10/16, "ooak", 0);
model.addBox(6/16, 16/16, 6/16, 10/16, 28/16, 10/16, "ooak", 0);
model.addBox(3/16, 28/16, 6/16, 13/16, 32/16, 10/16, "ooak", 0);
model.addBox(3/16, 16/16, 10/16, 13/16, 32/16, 11/16, "silvernetherbanner", 0);
model.addBox(3/16, 0/16, 10/16, 13/16, 16/16, 11/16, "silvernetherbannerniz", 0);
render.addEntry(model);
BlockRenderer.setStaticICRender(BlockID.silvernetherbanner, -1, render);
Block.setBlockShape(BlockID.silvernetherbanner, {"x":0,"y":0,"z":0}, {"x":1,"y":2,"z":1});
IDRegistry.genItemID("silvernetherbanner");
Item.createItem("silvernetherbanner", "Серебрянное знамя Преисподней", {name: "silvernetherbanner", meta: 0}, {stack: 64});
Callback.addCallback("ItemUse", function (coords, item, block) {
if (item.id==ItemID.silvernetherbanner)
{
World.setBlock (coords.relative.x, coords.relative.y, coords.relative.z, BlockID.silvernetherbanner, 0);
Player.decreaseCarriedItem (1);
}
});
Block.registerDropFunction(BlockID.silvernetherbanner, function(coords, blockID, blockData, level){
 var drop = [];
  drop.push([ItemID.silvernetherbanner, 1, 0]);
 return drop;
});
Recipes.addShaped({id: ItemID.silvernetherbanner, count: 1, data: 0}, [ "bab", "aaa", "bab"], ['a', ItemID.bronzenetherbanner, 0, 'b', 370, 0]);



IDRegistry.genBlockID("goldnetherbanner"); 
  Block.createBlockWithRotation("goldnetherbanner", [{name: "Серебрянное знамя Преисподней", texture: [["goldnetherbanner", 0], ["goldnetherbanner", 0], ["goldnetherbanner", 0], ["goldnetherbanner", 0], ["goldnetherbanner", 0], ["goldnetherbanner", 0]], inCreative: false}], GM);
var model = BlockRenderer.createModel();
var render = new ICRender.Model();
model.addBox(2/16, 0/16, 2/16, 14/16, 1/16, 14/16, "ooak", 0);
model.addBox(3/16, 0/16, 3/16, 13/16, 2/16, 13/16, "ooak", 0);
model.addBox(6/16, 0/16, 6/16, 10/16, 16/16, 10/16, "ooak", 0);
model.addBox(6/16, 16/16, 6/16, 10/16, 28/16, 10/16, "ooak", 0);
model.addBox(3/16, 28/16, 6/16, 13/16, 32/16, 10/16, "ooak", 0);
model.addBox(3/16, 16/16, 10/16, 13/16, 32/16, 11/16, "goldnetherbanner", 0);
model.addBox(3/16, 0/16, 10/16, 13/16, 16/16, 11/16, "goldnetherbannerniz", 0);
render.addEntry(model);
BlockRenderer.setStaticICRender(BlockID.goldnetherbanner, -1, render);
Block.setBlockShape(BlockID.goldnetherbanner, {"x":0,"y":0,"z":0}, {"x":1,"y":2,"z":1});
IDRegistry.genItemID("goldnetherbanner");
Item.createItem("goldnetherbanner", "Серебрянное знамя Преисподней", {name: "goldnetherbanner", meta: 0}, {stack: 64});
Callback.addCallback("ItemUse", function (coords, item, block) {
if (item.id==ItemID.goldnetherbanner)
{
World.setBlock (coords.relative.x, coords.relative.y, coords.relative.z, BlockID.goldnetherbanner, 0);
Player.decreaseCarriedItem (1);
}
});
Block.registerDropFunction(BlockID.goldnetherbanner, function(coords, blockID, blockData, level){
 var drop = [];
  drop.push([ItemID.goldnetherbanner, 1, 0]);
 return drop;
});
Recipes.addShaped({id: ItemID.goldnetherbanner, count: 1, data: 0}, [ "bab", "aaa", "bab"], ['a', ItemID.silvernetherbanner, 0, 'b', 399, 0]);













IDRegistry.genBlockID("endbanner"); 
  Block.createBlockWithRotation("endbanner", [{name: "Знамя Края", texture: [["endbanner", 0], ["endbanner", 0], ["endbanner", 0], ["endbanner", 0], ["endbanner", 0], ["endbanner", 0]], inCreative: false}], GM);
var model = BlockRenderer.createModel();
var render = new ICRender.Model();
model.addBox(2/16, 0/16, 2/16, 14/16, 1/16, 14/16, "ooak", 0);
model.addBox(3/16, 0/16, 3/16, 13/16, 2/16, 13/16, "ooak", 0);
model.addBox(6/16, 0/16, 6/16, 10/16, 16/16, 10/16, "ooak", 0);
model.addBox(6/16, 16/16, 6/16, 10/16, 28/16, 10/16, "ooak", 0);
model.addBox(3/16, 28/16, 6/16, 13/16, 32/16, 10/16, "ooak", 0);
model.addBox(3/16, 16/16, 10/16, 13/16, 32/16, 11/16, "endbanner", 0);
model.addBox(3/16, 0/16, 10/16, 13/16, 16/16, 11/16, "endbannerniz", 0);
render.addEntry(model);
BlockRenderer.setStaticICRender(BlockID.endbanner, -1, render);
Block.setBlockShape(BlockID.endbanner, {"x":0,"y":0,"z":0}, {"x":1,"y":2,"z":1});
IDRegistry.genItemID("endbanner");
Item.createItem("endbanner", "Знамя Края", {name: "endbanner", meta: 0}, {stack: 64});
Callback.addCallback("ItemUse", function (coords, item, block) {
if (item.id==ItemID.endbanner)
{
World.setBlock (coords.relative.x, coords.relative.y, coords.relative.z, BlockID.endbanner, 0);
Player.decreaseCarriedItem (1);
}
});
Block.registerDropFunction(BlockID.endbanner, function(coords, blockID, blockData, level){
 var drop = [];
  drop.push([ItemID.endbanner, 1, 0]);
 return drop;
});



IDRegistry.genBlockID("bronzeendbanner"); 
  Block.createBlockWithRotation("bronzeendbanner", [{name: "Бронзовое знамя Края", texture: [["bronzeendbanner", 0], ["bronzeendbanner", 0], ["bronzeendbanner", 0], ["bronzeendbanner", 0], ["bronzeendbanner", 0], ["bronzeendbanner", 0]], inCreative: false}], GM);
var model = BlockRenderer.createModel();
var render = new ICRender.Model();
model.addBox(2/16, 0/16, 2/16, 14/16, 1/16, 14/16, "ooak", 0);
model.addBox(3/16, 0/16, 3/16, 13/16, 2/16, 13/16, "ooak", 0);
model.addBox(6/16, 0/16, 6/16, 10/16, 16/16, 10/16, "ooak", 0);
model.addBox(6/16, 16/16, 6/16, 10/16, 28/16, 10/16, "ooak", 0);
model.addBox(3/16, 28/16, 6/16, 13/16, 32/16, 10/16, "ooak", 0);
model.addBox(3/16, 16/16, 10/16, 13/16, 32/16, 11/16, "bronzeendbanner", 0);
model.addBox(3/16, 0/16, 10/16, 13/16, 16/16, 11/16, "bronzeendbannerniz", 0);
render.addEntry(model);
BlockRenderer.setStaticICRender(BlockID.bronzeendbanner, -1, render);
Block.setBlockShape(BlockID.bronzeendbanner, {"x":0,"y":0,"z":0}, {"x":1,"y":2,"z":1});
IDRegistry.genItemID("bronzeendbanner");
Item.createItem("bronzeendbanner", "Бронзовое знамя Края", {name: "bronzeendbanner", meta: 0}, {stack: 64});
Callback.addCallback("ItemUse", function (coords, item, block) {
if (item.id==ItemID.bronzeendbanner)
{
World.setBlock (coords.relative.x, coords.relative.y, coords.relative.z, BlockID.bronzeendbanner, 0);
Player.decreaseCarriedItem (1);
}
});
Block.registerDropFunction(BlockID.bronzeendbanner, function(coords, blockID, blockData, level){
 var drop = [];
  drop.push([ItemID.bronzeendbanner, 1, 0]);
 return drop;
});
Recipes.addShaped({id: ItemID.bronzeendbanner, count: 1, data: 0}, [ "bab", "aaa", "bab"], ['a', ItemID.endbanner, 0, 'b', 206, 0]);






IDRegistry.genBlockID("silverendbanner"); 
  Block.createBlockWithRotation("silverendbanner", [{name: "Серебрянное знамя Края", texture: [["silverendbanner", 0], ["silverendbanner", 0], ["silverendbanner", 0], ["silverendbanner", 0], ["silverendbanner", 0], ["silverendbanner", 0]], inCreative: false}], GM);
var model = BlockRenderer.createModel();
var render = new ICRender.Model();
model.addBox(2/16, 0/16, 2/16, 14/16, 1/16, 14/16, "ooak", 0);
model.addBox(3/16, 0/16, 3/16, 13/16, 2/16, 13/16, "ooak", 0);
model.addBox(6/16, 0/16, 6/16, 10/16, 16/16, 10/16, "ooak", 0);
model.addBox(6/16, 16/16, 6/16, 10/16, 28/16, 10/16, "ooak", 0);
model.addBox(3/16, 28/16, 6/16, 13/16, 32/16, 10/16, "ooak", 0);
model.addBox(3/16, 16/16, 10/16, 13/16, 32/16, 11/16, "silverendbanner", 0);
model.addBox(3/16, 0/16, 10/16, 13/16, 16/16, 11/16, "silverendbannerniz", 0);
render.addEntry(model);
BlockRenderer.setStaticICRender(BlockID.silverendbanner, -1, render);
Block.setBlockShape(BlockID.silverendbanner, {"x":0,"y":0,"z":0}, {"x":1,"y":2,"z":1});
IDRegistry.genItemID("silverendbanner");
Item.createItem("silverendbanner", "Серебрянное знамя Края", {name: "silverendbanner", meta: 0}, {stack: 64});
Callback.addCallback("ItemUse", function (coords, item, block) {
if (item.id==ItemID.silverendbanner)
{
World.setBlock (coords.relative.x, coords.relative.y, coords.relative.z, BlockID.silverendbanner, 0);
Player.decreaseCarriedItem (1);
}
});
Block.registerDropFunction(BlockID.silverendbanner, function(coords, blockID, blockData, level){
 var drop = [];
  drop.push([ItemID.silverendbanner, 1, 0]);
 return drop;
});
Recipes.addShaped({id: ItemID.silverendbanner, count: 1, data: 0}, [ "bab", "aaa", "bab"], ['a', ItemID.bronzeendbanner, 0, 'b', 433, 0]);



IDRegistry.genBlockID("goldendbanner"); 
  Block.createBlockWithRotation("goldendbanner", [{name: "Серебрянное знамя Края", texture: [["goldendbanner", 0], ["goldendbanner", 0], ["goldendbanner", 0], ["goldendbanner", 0], ["goldendbanner", 0], ["goldendbanner", 0]], inCreative: false}], GM);
var model = BlockRenderer.createModel();
var render = new ICRender.Model();
model.addBox(2/16, 0/16, 2/16, 14/16, 1/16, 14/16, "ooak", 0);
model.addBox(3/16, 0/16, 3/16, 13/16, 2/16, 13/16, "ooak", 0);
model.addBox(6/16, 0/16, 6/16, 10/16, 16/16, 10/16, "ooak", 0);
model.addBox(6/16, 16/16, 6/16, 10/16, 28/16, 10/16, "ooak", 0);
model.addBox(3/16, 28/16, 6/16, 13/16, 32/16, 10/16, "ooak", 0);
model.addBox(3/16, 16/16, 10/16, 13/16, 32/16, 11/16, "goldendbanner", 0);
model.addBox(3/16, 0/16, 10/16, 13/16, 16/16, 11/16, "goldendbannerniz", 0);
render.addEntry(model);
BlockRenderer.setStaticICRender(BlockID.goldendbanner, -1, render);
Block.setBlockShape(BlockID.goldendbanner, {"x":0,"y":0,"z":0}, {"x":1,"y":2,"z":1});
IDRegistry.genItemID("goldendbanner");
Item.createItem("goldendbanner", "Серебрянное знамя Края", {name: "goldendbanner", meta: 0}, {stack: 64});
Callback.addCallback("ItemUse", function (coords, item, block) {
if (item.id==ItemID.goldendbanner)
{
World.setBlock (coords.relative.x, coords.relative.y, coords.relative.z, BlockID.goldendbanner, 0);
Player.decreaseCarriedItem (1);
}
});
Block.registerDropFunction(BlockID.goldendbanner, function(coords, blockID, blockData, level){
 var drop = [];
  drop.push([ItemID.goldendbanner, 1, 0]);
 return drop;
});
Recipes.addShaped({id: ItemID.goldendbanner, count: 1, data: 0}, [ "ba ", "aaa", " ac"], ['a', ItemID.silverendbanner, 0, 'b', 397, 5, 'c', 122, 0]);













IDRegistry.genBlockID("cometbanner"); 
  Block.createBlockWithRotation("cometbanner", [{name: "Знамя Комет", texture: [["cometbanner", 0], ["cometbanner", 0], ["cometbanner", 0], ["cometbanner", 0], ["cometbanner", 0], ["cometbanner", 0]], inCreative: false}], GM);
var model = BlockRenderer.createModel();
var render = new ICRender.Model();
model.addBox(2/16, 0/16, 2/16, 14/16, 1/16, 14/16, "ooak", 0);
model.addBox(3/16, 0/16, 3/16, 13/16, 2/16, 13/16, "ooak", 0);
model.addBox(6/16, 0/16, 6/16, 10/16, 16/16, 10/16, "ooak", 0);
model.addBox(6/16, 16/16, 6/16, 10/16, 28/16, 10/16, "ooak", 0);
model.addBox(3/16, 28/16, 6/16, 13/16, 32/16, 10/16, "ooak", 0);
model.addBox(3/16, 16/16, 10/16, 13/16, 32/16, 11/16, "cometbanner", 0);
model.addBox(3/16, 0/16, 10/16, 13/16, 16/16, 11/16, "cometbannerniz", 0);
render.addEntry(model);
BlockRenderer.setStaticICRender(BlockID.cometbanner, -1, render);
Block.setBlockShape(BlockID.cometbanner, {"x":0,"y":0,"z":0}, {"x":1,"y":2,"z":1});
IDRegistry.genItemID("cometbanner");
Item.createItem("cometbanner", "Знамя Комет", {name: "cometbanner", meta: 0}, {stack: 64});
Callback.addCallback("ItemUse", function (coords, item, block) {
if (item.id==ItemID.cometbanner)
{
World.setBlock (coords.relative.x, coords.relative.y, coords.relative.z, BlockID.cometbanner, 0);
Player.decreaseCarriedItem (1);
}
});
Block.registerDropFunction(BlockID.cometbanner, function(coords, blockID, blockData, level){
 var drop = [];
  drop.push([ItemID.cometbanner, 1, 0]);
 return drop;
});



IDRegistry.genBlockID("bronzecometbanner"); 
  Block.createBlockWithRotation("bronzecometbanner", [{name: "Бронзовое знамя Комет", texture: [["bronzecometbanner", 0], ["bronzecometbanner", 0], ["bronzecometbanner", 0], ["bronzecometbanner", 0], ["bronzecometbanner", 0], ["bronzecometbanner", 0]], inCreative: false}], GM);
var model = BlockRenderer.createModel();
var render = new ICRender.Model();
model.addBox(2/16, 0/16, 2/16, 14/16, 1/16, 14/16, "ooak", 0);
model.addBox(3/16, 0/16, 3/16, 13/16, 2/16, 13/16, "ooak", 0);
model.addBox(6/16, 0/16, 6/16, 10/16, 16/16, 10/16, "ooak", 0);
model.addBox(6/16, 16/16, 6/16, 10/16, 28/16, 10/16, "ooak", 0);
model.addBox(3/16, 28/16, 6/16, 13/16, 32/16, 10/16, "ooak", 0);
model.addBox(3/16, 16/16, 10/16, 13/16, 32/16, 11/16, "bronzecometbanner", 0);
model.addBox(3/16, 0/16, 10/16, 13/16, 16/16, 11/16, "bronzecometbannerniz", 0);
render.addEntry(model);
BlockRenderer.setStaticICRender(BlockID.bronzecometbanner, -1, render);
Block.setBlockShape(BlockID.bronzecometbanner, {"x":0,"y":0,"z":0}, {"x":1,"y":2,"z":1});
IDRegistry.genItemID("bronzecometbanner");
Item.createItem("bronzecometbanner", "Бронзовое знамя Комет", {name: "bronzecometbanner", meta: 0}, {stack: 64});
Callback.addCallback("ItemUse", function (coords, item, block) {
if (item.id==ItemID.bronzecometbanner)
{
World.setBlock (coords.relative.x, coords.relative.y, coords.relative.z, BlockID.bronzecometbanner, 0);
Player.decreaseCarriedItem (1);
}
});
Block.registerDropFunction(BlockID.bronzecometbanner, function(coords, blockID, blockData, level){
 var drop = [];
  drop.push([ItemID.bronzecometbanner, 1, 0]);
 return drop;
});
Recipes.addShaped({id: ItemID.bronzecometbanner, count: 1, data: 0}, [ "bab", "aaa", "bab"], ['a', ItemID.cometbanner, 0, 'b', BlockID.cometwood, 0]);






IDRegistry.genBlockID("silvercometbanner"); 
  Block.createBlockWithRotation("silvercometbanner", [{name: "Серебрянное знамя Комет", texture: [["silvercometbanner", 0], ["silvercometbanner", 0], ["silvercometbanner", 0], ["silvercometbanner", 0], ["silvercometbanner", 0], ["silvercometbanner", 0]], inCreative: false}], GM);
var model = BlockRenderer.createModel();
var render = new ICRender.Model();
model.addBox(2/16, 0/16, 2/16, 14/16, 1/16, 14/16, "ooak", 0);
model.addBox(3/16, 0/16, 3/16, 13/16, 2/16, 13/16, "ooak", 0);
model.addBox(6/16, 0/16, 6/16, 10/16, 16/16, 10/16, "ooak", 0);
model.addBox(6/16, 16/16, 6/16, 10/16, 28/16, 10/16, "ooak", 0);
model.addBox(3/16, 28/16, 6/16, 13/16, 32/16, 10/16, "ooak", 0);
model.addBox(3/16, 16/16, 10/16, 13/16, 32/16, 11/16, "silvercometbanner", 0);
model.addBox(3/16, 0/16, 10/16, 13/16, 16/16, 11/16, "silvercometbannerniz", 0);
render.addEntry(model);
BlockRenderer.setStaticICRender(BlockID.silvercometbanner, -1, render);
Block.setBlockShape(BlockID.silvercometbanner, {"x":0,"y":0,"z":0}, {"x":1,"y":2,"z":1});
IDRegistry.genItemID("silvercometbanner");
Item.createItem("silvercometbanner", "Серебрянное знамя Комет", {name: "silvercometbanner", meta: 0}, {stack: 64});
Callback.addCallback("ItemUse", function (coords, item, block) {
if (item.id==ItemID.silvercometbanner)
{
World.setBlock (coords.relative.x, coords.relative.y, coords.relative.z, BlockID.silvercometbanner, 0);
Player.decreaseCarriedItem (1);
}
});
Block.registerDropFunction(BlockID.silvercometbanner, function(coords, blockID, blockData, level){
 var drop = [];
  drop.push([ItemID.silvercometbanner, 1, 0]);
 return drop;
});
Recipes.addShaped({id: ItemID.silvercometbanner, count: 1, data: 0}, [ "bab", "aaa", "bab"], ['a', ItemID.bronzecometbanner, 0, 'b', ItemID.goldendust, 0]);



IDRegistry.genBlockID("goldcometbanner"); 
  Block.createBlockWithRotation("goldcometbanner", [{name: "Серебрянное знамя Комет", texture: [["goldcometbanner", 0], ["goldcometbanner", 0], ["goldcometbanner", 0], ["goldcometbanner", 0], ["goldcometbanner", 0], ["goldcometbanner", 0]], inCreative: false}], GM);
var model = BlockRenderer.createModel();
var render = new ICRender.Model();
model.addBox(2/16, 0/16, 2/16, 14/16, 1/16, 14/16, "ooak", 0);
model.addBox(3/16, 0/16, 3/16, 13/16, 2/16, 13/16, "ooak", 0);
model.addBox(6/16, 0/16, 6/16, 10/16, 16/16, 10/16, "ooak", 0);
model.addBox(6/16, 16/16, 6/16, 10/16, 28/16, 10/16, "ooak", 0);
model.addBox(3/16, 28/16, 6/16, 13/16, 32/16, 10/16, "ooak", 0);
model.addBox(3/16, 16/16, 10/16, 13/16, 32/16, 11/16, "goldcometbanner", 0);
model.addBox(3/16, 0/16, 10/16, 13/16, 16/16, 11/16, "goldcometbannerniz", 0);
render.addEntry(model);
BlockRenderer.setStaticICRender(BlockID.goldcometbanner, -1, render);
Block.setBlockShape(BlockID.goldcometbanner, {"x":0,"y":0,"z":0}, {"x":1,"y":2,"z":1});
IDRegistry.genItemID("goldcometbanner");
Item.createItem("goldcometbanner", "Серебрянное знамя Комет", {name: "goldcometbanner", meta: 0}, {stack: 64});
Callback.addCallback("ItemUse", function (coords, item, block) {
if (item.id==ItemID.goldcometbanner)
{
World.setBlock (coords.relative.x, coords.relative.y, coords.relative.z, BlockID.goldcometbanner, 0);
Player.decreaseCarriedItem (1);
}
});
Block.registerDropFunction(BlockID.goldcometbanner, function(coords, blockID, blockData, level){
 var drop = [];
  drop.push([ItemID.goldcometbanner, 1, 0]);
 return drop;
});
//Recipes.addShaped({id: ItemID.goldcometbanner, count: 1, data: 0}, [ "bab", "aaa", "bab"], ['a', ItemID.silvercometbanner, 0, 'b', ItemID.flisotuachewn, 0]);























































