/*
BUILD INFO:
  dir: dev
  target: RuneMain.js
  files: 4
*/



// file: blocks.js


  
  var ST = Block.createSpecialType({
    base: 1,
    solid: true,
    destroytime: 3,
    explosionres: 1,
    opaque: true
});

var MaSH = Block.createSpecialType({
    base: 1,
    destroytime: 3
});


IDRegistry.genBlockID("ironfurnace");
Block.createBlockWithRotation("ironfurnace", [{name: "Железная печь", texture: [["ironblock", 0], ["ironblock", 0], ["ironblock", 0], ["ironfurnacerenderfront", 0], ["ironblock", 0], ["ironblock", 0]], inCreative: true}], MaSH);
ToolAPI.registerBlockMaterial(BlockID.ironfurnace, "stone");

var model = BlockRenderer.createModel();
var render = new ICRender.Model();

model.addBox(0/16, 0/16, 0/16, 16/16, 16/16, 1/16, "ironblock", 0);

model.addBox(0/16, 0/16, 15/16, 16/16, 15/16, 16/16, "ironfurnacerenderfront", 0);

model.addBox(0/16, 0/16, 1/16, 1/16, 16/16, 15/16, "ironblock", 0);

model.addBox(15/16, 0/16, 1/16, 16/16, 16/16, 16/16, "ironblock", 0);




model.addBox(1/16, 0/16, 1/16, 15/16, 1/16, 15/16, "ironblock", 0);

model.addBox(1/16, 15/16, 1/16, 15/16, 16/16, 16/16, "ironblock", 0);





render.addEntry(model);
BlockRenderer.setStaticICRender(BlockID.ironfurnace, -1, render);
Block.setBlockShape(BlockID.ironfurnace, {"x":0,"y":0,"z":0}, {"x":1,"y":1,"z":1});

Recipes.addShaped({id: BlockID.ironfurnace, count: 1, data: 0}, [ "aba", "aca", "ada"], ['a', ItemID.ironplate, 0, 'b', ItemID.mcfurnace, 0, 'c', 173, 0, 'd', ItemID.mcsoed, 0]);


IDRegistry.genBlockID("runicstone");
Block.createBlockWithRotation("runicstone", [{name: "Рунический камень", texture: [["runicstone", 0], ["runicstone", 0], ["runicstone", 0], ["runicstone", 0], ["runicstone", 0], ["runicstone", 0]], inCreative: true}], ST);
ToolAPI.registerBlockMaterial(BlockID.runicstone, "stone");


IDRegistry.genBlockID("mashinebase");
Block.createBlockWithRotation("mashinebase", [{name: "Машинная база", texture: [["mashinebase", 0], ["mashinebase", 0], ["mashinebase", 0], ["mashinebase", 0], ["mashinebase", 0], ["mashinebase", 0]], inCreative: true}], MaSH);
ToolAPI.registerBlockMaterial(BlockID.mashinebase, "stone");
Recipes.addShaped({id: BlockID.mashinebase, count: 1, data: 0}, [ "aba", "bcb", "aba"], ['a', ItemID.brassingot, 0, 'b', 265, 0, 'c', ItemID.mcmashine, 0]);

IDRegistry.genBlockID("flushmashine");
Block.createBlockWithRotation("flushmashine", [{name: "Руно-промывочная машина", texture: [["mashinebase", 0], ["flushmashinetop", 0], ["mashinebase", 0], ["mashinebase", 0], ["mashinebase", 0], ["mashinebase", 0]], inCreative: true}], MaSH);
ToolAPI.registerBlockMaterial(BlockID.flushmashine, "stone");

var model = BlockRenderer.createModel();
var render = new ICRender.Model();

model.addBox(0/16, 0/16, 0/16, 16/16, 16/16, 1/16, "mashinebase", 0);

model.addBox(0/16, 0/16, 15/16, 16/16, 15/16, 16/16, "mashinebase", 0);

model.addBox(0/16, 0/16, 1/16, 1/16, 16/16, 15/16, "mashinebase", 0);

model.addBox(15/16, 0/16, 1/16, 16/16, 16/16, 16/16, "mashinebase", 0);




model.addBox(1/16, 0/16, 1/16, 15/16, 1/16, 15/16, "mashinebase", 0);

model.addBox(1/16, 15/16, 1/16, 15/16, 16/16, 16/16, "flushmashine", 0);


model.addBox(1/16, 1/16, 1/16, 15/16, 12/16, 15/16, 9, 0);





render.addEntry(model);
BlockRenderer.setStaticICRender(BlockID.flushmashine, -1, render);
Block.setBlockShape(BlockID.flushmashine, {"x":0,"y":0,"z":0}, {"x":1,"y":1,"z":1});

Recipes.addShaped({id: BlockID.flushmashine, count: 1, data: 0}, [ "aca", " b ", "aca"], ['a', ItemID.brassingot, 0, 'b', BlockID.mashinebase, 0, 'c', ItemID.mcmashine, 0]);



IDRegistry.genBlockID("wither");
Block.createBlockWithRotation("wither", [{name: "Иссушитель магии", texture: [["witherbottom", 0], ["withertop", 0], ["witherside", 0], ["witherside", 0], ["witherside", 0], ["witherside", 0]], inCreative: true}], MaSH);
ToolAPI.registerBlockMaterial(BlockID.wither, "stone");

var model = BlockRenderer.createModel();
var render = new ICRender.Model();

model.addBox(4/16, 18/16, 4/16, 12/16, 18/16, 12/16, "wskulltop", 0);


model.addBox(4/16, 10/16, 4/16, 12/16, 10/16, 12/16, "wskullbottom", 0);

model.addBox(12/16, 10/16, 4/16, 12/16, 18/16, 12/16, "wskullfront", 0);

model.addBox(4/16, 10/16, 4/16, 4/16, 18/16, 12/16, "wskullback", 0);

//model.addBox(4/16, 10/16, 4/16, 12/16, 18/16, 4/16, "wskullback", 0);

model.addBox(4/16, 10/16, 4/16, 12/16, 18/16, 4/16, "wskullside2", 0);

model.addBox(4/16, 10/16, 12/16, 12/16, 18/16, 12/16, "wskullside1", 0);




//model.addBox(0/16, 0/16, 0/16, 16/16, 8/16, 16/16, "witherside", 0);


model.addBox(16/16, 0/16, 0/16, 16/16, 8/16, 16/16, "witherside", 0);

model.addBox(0/16, 0/16, 0/16, 0/16, 8/16, 16/16, "witherside", 0);

model.addBox(0/16, 0/16, 16/16, 16/16, 8/16, 16/16, "witherside", 0);

model.addBox(0/16, 0/16, 0/16, 16/16, 8/16, 0/16, "witherside", 0);



model.addBox(0/16, 8/16, 0/16, 16/16, 8/16, 16/16, "withertoprender", 0);

model.addBox(0/16, 0/16, 0/16, 16/16, 0/16, 16/16, "witherbottom", 0);


model.addBox(1/16, 6/16, 1/16, 15/16, 6/16, 15/16, "runium", 0);






render.addEntry(model);
BlockRenderer.setStaticICRender(BlockID.wither, -1, render);
Block.setBlockShape(BlockID.wither, {"x":0,"y":0,"z":0}, {"x":1,"y":0.5,"z":1});








IDRegistry.genBlockID("sbarmor");
Block.createBlockWithRotation("sbarmor", [{name: "Бронесборщик", texture: [["sb1", 0], ["sb1", 0], ["sb1", 0], ["sb1", 0], ["sb1", 0], ["sb1", 0]], inCreative: true}], MaSH);
ToolAPI.registerBlockMaterial(BlockID.sbarmor, "stone");

var model = BlockRenderer.createModel();
var render = new ICRender.Model();

model.addBox(0/16, 0/16, 0/16, 4/16, 4/16, 4/16, "sb1", 0);

model.addBox(12/16, 0/16, 0/16, 16/16, 4/16, 4/16, "sb1", 0);

model.addBox(0/16, 0/16, 12/16, 4/16, 4/16, 16/16, "sb1", 0);

model.addBox(12/16, 0/16, 12/16, 16/16, 4/16, 16/16, "sb1", 0);



model.addBox(0/16, 12/16, 0/16, 4/16, 16/16, 4/16, "sb1", 0);

model.addBox(12/16, 12/16, 0/16, 16/16, 16/16, 4/16, "sb1", 0);

model.addBox(0/16, 12/16, 12/16, 4/16, 16/16, 16/16, "sb1", 0);

model.addBox(12/16, 12/16, 12/16, 16/16, 16/16, 16/16, "sb1", 0);




model.addBox(4/16, 0/16, 0/16, 12/16, 3/16, 3/16, "sb2", 0);

model.addBox(4/16, 0/16, 13/16, 12/16, 3/16, 16/16, "sb2", 0);

model.addBox(0/16, 0/16, 3/16, 3/16, 3/16, 13/16, "sb2", 0);

model.addBox(13/16, 0/16, 3/16, 16/16, 3/16, 13/16, "sb2", 0);




model.addBox(4/16, 13/16, 0/16, 12/16, 16/16, 3/16, "sb2", 0);

model.addBox(4/16, 13/16, 13/16, 12/16, 16/16, 16/16, "sb2", 0);

model.addBox(0/16, 13/16, 3/16, 3/16, 16/16, 13/16, "sb2", 0);

model.addBox(13/16, 13/16, 3/16, 16/16, 16/16, 13/16, "sb2", 0);





model.addBox(0/16, 3/16, 0/16, 3/16, 13/16, 3/16, "sb2", 0);

model.addBox(13/16, 3/16, 13/16, 16/16, 13/16, 16/16, "sb2", 0);

model.addBox(13/16, 3/16, 0/16, 16/16, 13/16, 3/16, "sb2", 0);

model.addBox(0/16, 3/16, 13/16, 3/16, 13/16, 16/16, "sb2", 0);






model.addBox(6/16, 5/16, 7/16, 10/16, 11/16, 9/16, "sb3", 0);

model.addBox(4/16, 9/16, 7/16, 12/16, 11/16, 9/16, "sb3", 0);


render.addEntry(model);
BlockRenderer.setStaticICRender(BlockID.sbarmor, -1, render);
Block.setBlockShape(BlockID.sbarmor, {"x":0,"y":0,"z":0}, {"x":1,"y":1,"z":1});









IDRegistry.genBlockID("sbtools");
Block.createBlockWithRotation("sbtools", [{name: "Сборщик инструментов", texture: [["sb1", 0], ["sb1", 0], ["sb1", 0], ["sb1", 0], ["sb1", 0], ["sb1", 0]], inCreative: true}], MaSH);
ToolAPI.registerBlockMaterial(BlockID.sbtools, "stone");

var model = BlockRenderer.createModel();
var render = new ICRender.Model();

model.addBox(0/16, 0/16, 0/16, 4/16, 4/16, 4/16, "sb1", 0);

model.addBox(12/16, 0/16, 0/16, 16/16, 4/16, 4/16, "sb1", 0);

model.addBox(0/16, 0/16, 12/16, 4/16, 4/16, 16/16, "sb1", 0);

model.addBox(12/16, 0/16, 12/16, 16/16, 4/16, 16/16, "sb1", 0);



model.addBox(0/16, 12/16, 0/16, 4/16, 16/16, 4/16, "sb1", 0);

model.addBox(12/16, 12/16, 0/16, 16/16, 16/16, 4/16, "sb1", 0);

model.addBox(0/16, 12/16, 12/16, 4/16, 16/16, 16/16, "sb1", 0);

model.addBox(12/16, 12/16, 12/16, 16/16, 16/16, 16/16, "sb1", 0);




model.addBox(4/16, 0/16, 0/16, 12/16, 3/16, 3/16, "sb2", 0);

model.addBox(4/16, 0/16, 13/16, 12/16, 3/16, 16/16, "sb2", 0);

model.addBox(0/16, 0/16, 3/16, 3/16, 3/16, 13/16, "sb2", 0);

model.addBox(13/16, 0/16, 3/16, 16/16, 3/16, 13/16, "sb2", 0);




model.addBox(4/16, 13/16, 0/16, 12/16, 16/16, 3/16, "sb2", 0);

model.addBox(4/16, 13/16, 13/16, 12/16, 16/16, 16/16, "sb2", 0);

model.addBox(0/16, 13/16, 3/16, 3/16, 16/16, 13/16, "sb2", 0);

model.addBox(13/16, 13/16, 3/16, 16/16, 16/16, 13/16, "sb2", 0);





model.addBox(0/16, 3/16, 0/16, 3/16, 13/16, 3/16, "sb2", 0);

model.addBox(13/16, 3/16, 13/16, 16/16, 13/16, 16/16, "sb2", 0);

model.addBox(13/16, 3/16, 0/16, 16/16, 13/16, 3/16, "sb2", 0);

model.addBox(0/16, 3/16, 13/16, 3/16, 13/16, 16/16, "sb2", 0);





model.addBox(1/16, 0/16, 8/16, 15/16, 16/16, 8/16, "magicaxe", 0);



render.addEntry(model);
BlockRenderer.setStaticICRender(BlockID.sbtools, -1, render);
Block.setBlockShape(BlockID.sbtools, {"x":0,"y":0,"z":0}, {"x":1,"y":1,"z":1});



IDRegistry.genBlockID("reader");
Block.createBlockWithRotation("reader", [{name: "Рунный дешифратор", texture: [["book0", 0], ["book0", 0], ["book0", 0], ["book0", 0], ["book0", 0], ["book0", 0]], inCreative: true}], MaSH);
ToolAPI.registerBlockMaterial(BlockID.reader, "stone");

var model = BlockRenderer.createModel();
var render = new ICRender.Model();

model.addBox(0/16, 2/16, 0/16, 16/16, 3/16, 16/16, "book0", 0);

model.addBox(0/16, 13/16, 0/16, 16/16, 14/16, 16/16, "book0", 0);

model.addBox(0/16, 8/16, 0/16, 16/16, 9/16, 16/16, "book0", 0); 




model.addBox(0/16, 0/16, 0/16, 1/16, 14/16, 1/16, "book0", 0);

model.addBox(15/16, 0/16, 15/16, 16/16, 14/16, 16/16, "book0", 0);

model.addBox(15/16, 0/16, 0/16, 16/16, 14/16, 1/16, "book0", 0);

model.addBox(0/16, 0/16, 15/16, 1/16, 14/16, 16/16, "book0", 0);





model.addBox(2/16, 14/16, 3/16, 14/16, 14.99/16, 12/16, "book2", 0);


model.addBox(3/16, 15/16, 4/16, 13/16, 15.1/16, 11/16, "book3", 0);






model.addBox(15/16, 3/16, 1/16, 15/16, 8/16, 15/16, "book4", 0);

model.addBox(1/16, 3/16, 1/16, 1/16, 8/16, 15/16, "book4", 0);



model.addBox(1/16, 3/16, 15/16, 15/16, 8/16, 15/16, "book0", 0);

model.addBox(1/16, 3/16, 1/16, 15/16, 8/16, 1/16, "book0", 0);




model.addBox(0/16, 9/16, 0/16, 16/16, 9.1/16, 16/16, "book5", 0); 


/*
model.addBox(1.99/16, 14/16, 3/16, 2/16, 15/16, 12/16, "book2", 0);

model.addBox(2/16, 14/16, 2.99/16, 14/16, 15/16, 2/16, "book2", 0);


model.addBox(14/16, 14/16, 3/16, 14.1/16, 15/16, 12/16, "book2", 0);

model.addBox(2/16, 14/16, 12/16, 14/16, 15/16, 12.1/16, "book2", 0);
*/

render.addEntry(model);
BlockRenderer.setStaticICRender(BlockID.reader, -1, render);
Block.setBlockShape(BlockID.reader, {"x":0,"y":0,"z":0}, {"x":1,"y":1,"z":1});



  
  




  IDRegistry.genBlockID("sbmagic");
Block.createBlockWithRotation("sbmagic", [{name: "Магический сборщик", texture: [["sbmagic", 0], ["sbmagic", 0], ["sbmagic", 0], ["sbmagic", 0], ["sbmagic", 0], ["sbmagic", 0]], inCreative: true}], MaSH);
ToolAPI.registerBlockMaterial(BlockID.sbmagic, "stone");

var model = BlockRenderer.createModel();
var render = new ICRender.Model();

model.addBox(0/16, 0/16, 0/16, 16/16, 4/16, 16/16, "magentablock", 0);

model.addBox(0/16, 11/16, 0/16, 16/16, 15/16, 16/16, "magentablock", 0);

model.addBox(0/16, 4/16, 0/16, 16/16, 11/16, 4/16, "magentablock", 0);


model.addBox(14/16, 4/16, 14/16, 15/16, 11/16, 15/16, "magentablock", 0);

model.addBox(1/16, 4/16, 14/16, 2/16, 11/16, 15/16, "magentablock", 0);


model.addBox(0/16, 15/16, 0/16, 16/16, 15.1/16, 16/16, "r3", 0);

render.addEntry(model);
BlockRenderer.setStaticICRender(BlockID.sbmagic, -1, render);
Block.setBlockShape(BlockID.sbmagic, {"x":0,"y":0,"z":0}, {"x":1,"y":1,"z":1});





























































// file: items.js

IDRegistry.genItemID("runedirtfire");
Item.createItem("runedirtfire", "Грязная руна Исат", {name: "runeisat", meta: 0}, {stack: 64});

IDRegistry.genItemID("runedirtwater");
Item.createItem("runedirtwater", "Грязная руна Вха", {name: "runewha", meta: 0}, {stack: 64});

IDRegistry.genItemID("runedirtair");
Item.createItem("runedirtair", "Грязная руна Кдмиа", {name: "runekdmia", meta: 0}, {stack: 64});

IDRegistry.genItemID("runedirtearth");
Item.createItem("runedirtearth", "Грязная руна Флерет", {name: "runefleret", meta: 0}, {stack: 64});

IDRegistry.genItemID("runedirtlight");
Item.createItem("runedirtlight", "Грязная руна Брхан", {name: "runebrhan", meta: 0}, {stack: 64});


IDRegistry.genItemID("woodplate");
Item.createItem("woodplate", "Древоселедавочиевая магическая пластина", {name: "woodplate", meta: 0}, {stack: 64});
Recipes.addShaped({id: ItemID.woodplate, count: 1, data: 0}, [ "aba", "   ", "aba"], ['a', 5, 0, 'b', 102, 0]);
Recipes.addShaped({id: ItemID.woodplate, count: 1, data: 0}, [ "aba", "   ", "aba"], ['a', 5, 1, 'b', 102, 0]);
Recipes.addShaped({id: ItemID.woodplate, count: 1, data: 0}, [ "aba", "   ", "aba"], ['a', 5, 2, 'b', 102, 0]);
Recipes.addShaped({id: ItemID.woodplate, count: 1, data: 0}, [ "aba", "   ", "aba"], ['a', 5, 3, 'b', 102, 0]);
Recipes.addShaped({id: ItemID.woodplate, count: 1, data: 0}, [ "aba", "   ", "aba"], ['a', 5, 4, 'b', 102, 0]);
Recipes.addShaped({id: ItemID.woodplate, count: 1, data: 0}, [ "aba", "   ", "aba"], ['a', 5, 5, 'b', 102, 0]);


IDRegistry.genItemID("stoneplate");
Item.createItem("stoneplate", "Каменно-динигайическая магическая пластина", {name: "stoneplate", meta: 0}, {stack: 64});
Recipes.addShaped({id: ItemID.stoneplate, count: 1, data: 0}, [ "aba", "   ", "aba"], ['a', 1, 0, 'b', 102, 0]);


IDRegistry.genItemID("coalplate");
Item.createItem("coalplate", "Углема-идинитийская магическая пластина", {name: "coalplate", meta: 0}, {stack: 64});
Recipes.addShaped({id: ItemID.coalplate, count: 1, data: 0}, [ "aba", "   ", "aba"], ['a', 263, 0, 'b', 102, 0]);

IDRegistry.genItemID("ironplate");
Item.createItem("ironplate", "Железобиретическая магическая пластина", {name: "ironplate", meta: 0}, {stack: 64});
Recipes.addShaped({id: ItemID.ironplate, count: 1, data: 0}, [ "aba", "   ", "aba"], ['a', 265, 0, 'b', 102, 0]);


IDRegistry.genItemID("diamondplate");
Item.createItem("diamondplate", "Алимазивная магическая пластина", {name: "diamondplate", meta: 0}, {stack: 64});
Recipes.addShaped({id: ItemID.diamondplate, count: 1, data: 0}, [ "aba", "   ", "aba"], ['a', 264, 0, 'b', 102, 0]);

IDRegistry.genItemID("obsidianplate");
Item.createItem("obsidianplate", "Обсиазодийанианская магическая пластина", {name: "obsidianplate", meta: 0}, {stack: 64});
Recipes.addShaped({id: ItemID.obsidianplate, count: 1, data: 0}, [ "aba", "   ", "aba"], ['a', 49, 0, 'b', 102, 0]);

IDRegistry.genItemID("goldplate");
Item.createItem("goldplate", "Злотоверик-ическая магическая пластина", {name: "goldplate", meta: 0}, {stack: 64});
Recipes.addShaped({id: ItemID.goldplate, count: 1, data: 0}, [ "aba", "   ", "aba"], ['a', 266, 0, 'b', 102, 0]);

IDRegistry.genItemID("redstoneplate");
Item.createItem("redstoneplate", "Краснокаменная к'эйи-динигайская магическая пластина", {name: "redstoneplate", meta: 0}, {stack: 64});
Recipes.addShaped({id: ItemID.redstoneplate, count: 1, data: 0}, [ "aba", "   ", "aba"], ['a', 152, 0, 'b', 102, 0]);

IDRegistry.genItemID("lapislazuliplate");
Item.createItem("lapislazuliplate", "Лазульная магическая пластина", {name: "lapislazuliplate", meta: 0}, {stack: 64});
Recipes.addShaped({id: ItemID.lapislazuliplate, count: 1, data: 0}, [ "aba", "   ", "aba"], ['a', 22, 0, 'b', 102, 0]);


IDRegistry.genItemID("emeraldplate");
Item.createItem("emeraldplate", "Изумрудниник-урарыя магическая пластина", {name: "emeraldplate", meta: 0}, {stack: 64});
Recipes.addShaped({id: ItemID.emeraldplate, count: 1, data: 0}, [ "aba", "   ", "aba"], ['a', 388, 0, 'b', 102, 0]);

IDRegistry.genItemID("brassplate");
Item.createItem("brassplate", "Латуннонасивная маПгическая пластина", {name: "brassplate", meta: 0}, {stack: 64});
Recipes.addShaped({id: ItemID.brassplate, count: 1, data: 0}, [ "aba", "   ", "aba"], ['a', ItemID.brassingot, 0, 'b', 102, 0]);


IDRegistry.genItemID("magniumplate");
Item.createItem("magniumplate", "Магнижийемийная маПгическая пластина", {name: "magniumplate", meta: 0}, {stack: 64});









IDRegistry.genItemID("mcfurnace");
Item.createItem("mcfurnace", "Плавящее машинное ядро", {name: "furnacemashinecore", meta: 0}, {stack: 64});
Recipes.addShaped({id: ItemID.mcfurnace, count: 1, data: 0}, [ "aca", "bdb", "a a"], ['a', 264, 0, 'b', 266, 0, 'c', 61, 0, 'd', 173, 0]);

IDRegistry.genItemID("mcsoed");
Item.createItem("mcsoed", "Сливающее машинное ядро", {name: "mcsoed", meta: 0}, {stack: 64});
Recipes.addShaped({id: ItemID.mcsoed, count: 1, data: 0}, [ "aca", "bdb", "a a"], ['a', 82, 0, 'b', 266, 0, 'c', 49, 0, 'd', 45, 0]);

IDRegistry.genItemID("mcmashine");
Item.createItem("mcmashine", "Машинное ядро", {name: "mcmashine", meta: 0}, {stack: 64});
Recipes.addShaped({id: ItemID.mcmashine, count: 1, data: 0}, [ "aaa", "aba", "aaa"], ['a', 331, 0, 'b', 4, 0]);

IDRegistry.genItemID("mcwither");
Item.createItem("mcwither", "Иссушающее машинное ядро", {name: "mcwither", meta: 0}, {stack: 64});

IDRegistry.genItemID("mcsb");
Item.createItem("mcsb", "Собирающее машинное ядро", {name: "mcsb", meta: 0}, {stack: 64});

IDRegistry.genItemID("mcread");
Item.createItem("mcread", "Читающее машинное ядро", {name: "mcread", meta: 0}, {stack: 64});

IDRegistry.genItemID("mcmagic");
Item.createItem("mcmagic", "МаПпгическое машинное ядро", {name: "mcmagic", meta: 0}, {stack: 64});




IDRegistry.genItemID("brassingot");
Item.createItem("brassingot", "Латунный слиток", {name: "brassingot", meta: 0}, {stack: 64});


	Block.registerDropFunctionForID(BlockID.runicstone, function(coords, blockID, blockData, level){
 if(Math.random() < 0.2){
 var drop = [];
  drop.push([ItemID.runedirtfire, 1, 0]);
 return drop;
 }
 
 if(Math.random() < 0.2){
 var drop = [];
  drop.push([ItemID.runedirtwater, 1, 0]);
 return drop;
 }
 
 if(Math.random() < 0.2){
 var drop = [];
  drop.push([ItemID.runedirtair, 1, 0]);
 return drop;
 }
 
 if(Math.random() < 0.2){
 var drop = [];
  drop.push([ItemID.runedirtearth, 1, 0]);
 return drop;
 }
 
 if(Math.random() < 0.2){
 var drop = [];
  drop.push([ItemID.runedirtlight, 1, 0]);
 return drop;
 }
 
 
 
  else{
  var drop = [];
  drop.push([ItemID.runedirtearth, 1, 0]);
 return drop;
 }
});


IDRegistry.genItemID("arunefire");
Item.createItem("arunefire", "Руна Исат", {name: "arunefire", meta: 0}, {stack: 64});

IDRegistry.genItemID("arunewater");
Item.createItem("arunewater", "Руна Вха", {name: "arunewater", meta: 0}, {stack: 64});

IDRegistry.genItemID("aruneair");
Item.createItem("aruneair", "Руна Кдмиа", {name: "aruneair", meta: 0}, {stack: 64});

IDRegistry.genItemID("aruneearth");
Item.createItem("aruneearth", "Руна Флерет", {name: "aruneearth", meta: 0}, {stack: 64});

IDRegistry.genItemID("arunelight");
Item.createItem("arunelight", "Руна Брхан", {name: "arunelight", meta: 0}, {stack: 64});

IDRegistry.genItemID("witherbone");
Item.createItem("witherbone", "Иссушающая кость", {name: "witherbone", meta: 0}, {stack: 64});
Recipes.addShaped({id: ItemID.witherbone, count: 1, data: 0}, [ "ab ", "   ", "   "], ['a', 263, 0, 'b', 352, 0]);

Recipes.addShaped({id: ItemID.mcwither, count: 1, data: 0}, [ "aba", "b b", "aba"], ['a', 266, 0, 'b', ItemID.witherbone, 0]);

Recipes.addShaped({id: BlockID.wither, count: 1, data: 0}, [ "aba", "aca", "ada"], ['a', ItemID.coalplate, 0, 'b', 397, 1, 'c', ItemID.mcwither, 0, 'd', 116, 0]);

IDRegistry.genItemID("bucketrunium");
Item.createItem("bucketrunium", "Ведро с руниумом", {name: "bucketrunium", meta: 0}, {stack: 64});

IDRegistry.genItemID("swordform");
Item.createItem("swordform", "Форма для меча", {name: "swordform", meta: 0}, {stack: 1});

IDRegistry.genItemID("pickaxeform");
Item.createItem("pickaxeform", "Форма для кирки", {name: "pickaxeform", meta: 0}, {stack: 1});

IDRegistry.genItemID("axeform");
Item.createItem("axeform", "Форма для топора", {name: "axeform", meta: 0}, {stack: 1});

IDRegistry.genItemID("shovelform");
Item.createItem("shovelform", "Форма для лопаты", {name: "shovelform", meta: 0}, {stack: 1});

IDRegistry.genItemID("hoeform");
Item.createItem("hoeform", "Форма для мотыги", {name: "hoeform", meta: 0}, {stack: 1});

IDRegistry.genItemID("helmetform");
Item.createItem("helmetform", "Форма для шлема", {name: "helmetform", meta: 0}, {stack: 1});

IDRegistry.genItemID("chestplateform");
Item.createItem("chestplateform", "Форма для нагрудника", {name: "chestplateform", meta: 0}, {stack: 1});

IDRegistry.genItemID("leggingsform");
Item.createItem("leggingsform", "Форма для понож", {name: "leggingsform", meta: 0}, {stack: 1});

IDRegistry.genItemID("bootsform");
Item.createItem("bootsform", "Форма для ботинков", {name: "bootsform", meta: 0}, {stack: 1});

Recipes.addShaped({id: ItemID.swordform, count: 1, data: 0}, [ " a ", " a ", "   "], ['a', ItemID.brassingot, 0]);
Recipes.addShaped({id: ItemID.pickaxeform, count: 1, data: 0}, [ "aaa", "   ", "   "], ['a', ItemID.brassingot, 0]);
Recipes.addShaped({id: ItemID.axeform, count: 1, data: 0}, [ "aa ", "a  ", "   "], ['a', ItemID.brassingot, 0]);
Recipes.addShaped({id: ItemID.shovelform, count: 1, data: 0}, [ " a ", "   ", "   "], ['a', ItemID.brassingot, 0]);
Recipes.addShaped({id: ItemID.hoeform, count: 1, data: 0}, [ "aa ", "   ", "   "], ['a', ItemID.brassingot, 0]);

Recipes.addShaped({id: ItemID.helmetform, count: 1, data: 0}, [ "aaa", "a a", "   "], ['a', ItemID.brassingot, 0]);
Recipes.addShaped({id: ItemID.chestplateform, count: 1, data: 0}, [ "a a", "aaa", "aaa"], ['a', ItemID.brassingot, 0]);
Recipes.addShaped({id: ItemID.leggingsform, count: 1, data: 0}, [ "aaa", "a a", "a a"], ['a', ItemID.brassingot, 0]);
Recipes.addShaped({id: ItemID.bootsform, count: 1, data: 0}, [ "   ", "a a", "a a"], ['a', ItemID.brassingot, 0]);


importLib("ToolType","*")


IDRegistry.genItemID("magicsword");
IDRegistry.genItemID("magicpickaxe");
IDRegistry.genItemID("magicaxe");
IDRegistry.genItemID("magicshovel");
IDRegistry.genItemID("magichoe");
Item.createItem("magicsword", "Магический меч", {name: "magicsword", meta: 0}, {stack: 1});
Item.createItem("magicpickaxe", "Магическая кирка", {name: "magicpickaxe", meta: 0}, {stack: 1});
Item.createItem("magicaxe", "Магический топор", {name: "magicaxe", meta: 0}, {stack: 1});
Item.createItem("magicshovel", "Магическая лопата", {name: "magicshovel", meta: 0}, {stack: 1});
Item.createItem("magichoe", "Магическая мотыга", {name: "magichoe", meta: 0}, {stack: 1});

ToolAPI.addToolMaterial("magic", {durability: 1000000, level: 10, efficiency: 180, damage: 12, enchantability: 30});
ToolAPI.setTool(ItemID.magicsword, "magic", ToolType.sword);
ToolAPI.setTool(ItemID.magicpickaxe, "magic", ToolType.pickaxe);
ToolAPI.setTool(ItemID.magicaxe, "magic", ToolType.axe);
ToolAPI.setTool(ItemID.magicshovel, "magic", ToolType.shovel);
ToolAPI.setTool(ItemID.magichoe, "magic", ToolType.hoe);

IDRegistry.genItemID("magichelmet");
IDRegistry.genItemID("magicchestplate");
IDRegistry.genItemID("magicleggings");
IDRegistry.genItemID("magicboots");

Item.createArmorItem("magichelmet", "Магический шлем", {name: "magichelmet", meta: 0}, {type: "helmet", armor: 5, durability: 1000000, texture: "armor/magicarmor.png"});
Item.createArmorItem("magicchestplate", "Магический нагрудник", {name: "magicchestplate", meta: 0}, {type: "chestplate", armor: 9, durability: 1000000, texture: "armor/magicarmor.png"});
Item.createArmorItem("magicleggings", "Магические поножи", {name: "magicleggings", meta: 0}, {type: "leggings", armor: 7, durability: 1000000, texture: "armor/magicarmor0.png"});
Item.createArmorItem("magicboots", "Магические ботинки", {name: "magicboots", meta: 0}, {type: "boots", armor: 4, durability: 1000000, texture: "armor/magicarmor.png"});



IDRegistry.genItemID("drunefire");
Item.createItem("drunefire", "Руна Исат\n§4Руна огня", {name: "arunefire", meta: 0}, {stack: 64});

IDRegistry.genItemID("drunewater");
Item.createItem("drunewater", "Руна Вха\n§9Руна воды", {name: "arunewater", meta: 0}, {stack: 64});

IDRegistry.genItemID("druneair");
Item.createItem("druneair", "Руна Кдмиа\n§fРуна воздуха", {name: "aruneair", meta: 0}, {stack: 64});

IDRegistry.genItemID("druneearth");
Item.createItem("druneearth", "Руна Флерет\n§2Руна земли", {name: "aruneearth", meta: 0}, {stack: 64});

IDRegistry.genItemID("drunelight");
Item.createItem("drunelight", "Руна Брхан\n§eРуна света", {name: "arunelight", meta: 0}, {stack: 64});


Recipes.addShaped({id: ItemID.mcsb, count: 1, data: 0}, [ "aca", "b b", "ada"], ['a', ItemID.brassingot, 0, 'b', 265, 0, 'c', ItemID.chestplateform, 0, 'd', ItemID.axeform, 0]);

Recipes.addShaped({id: BlockID.sbarmor, count: 1, data: 0}, [ "aca", "b b", "ada"], ['a', ItemID.brassplate, 0, 'b', ItemID.ironplate, 0, 'c', ItemID.mcsb, 0, 'd', ItemID.chestplateform, 0]);

Recipes.addShaped({id: BlockID.sbtools, count: 1, data: 0}, [ "aca", "b b", "ada"], ['a', ItemID.brassplate, 0, 'b', ItemID.ironplate, 0, 'c', ItemID.mcsb, 0, 'd', ItemID.axeform, 0]);



Recipes.addShaped({id: ItemID.mcread, count: 1, data: 0}, [ "aba", "bcb", "aba"], ['a', 339, 0, 'b', 370, 0, 'c', 340, 0]);



Recipes.addShaped({id: BlockID.reader, count: 1, data: 0}, [ "ede", "aca", "bab"], ['a', ItemID.woodplate, 0, 'b', 280, 0, 'c', ItemID.arunefire, 0, 'd', 340, 0, 'e', ItemID.mcread, 0]);

Recipes.addShaped({id: BlockID.reader, count: 1, data: 0}, [ "ede", "aca", "bab"], ['a', ItemID.woodplate, 0, 'b', 280, 0, 'c', ItemID.arunewater, 0, 'd', 340, 0, 'e', ItemID.mcread, 0]);

Recipes.addShaped({id: BlockID.reader, count: 1, data: 0}, [ "ede", "aca", "bab"], ['a', ItemID.woodplate, 0, 'b', 280, 0, 'c', ItemID.aruneair, 0, 'd', 340, 0, 'e', ItemID.mcread, 0]);

Recipes.addShaped({id: BlockID.reader, count: 1, data: 0}, [ "ede", "aca", "bab"], ['a', ItemID.woodplate, 0, 'b', 280, 0, 'c', ItemID.aruneearth, 0, 'd', 340, 0, 'e', ItemID.mcread, 0]);

Recipes.addShaped({id: BlockID.reader, count: 1, data: 0}, [ "ede", "aca", "bab"], ['a', ItemID.woodplate, 0, 'b', 280, 0, 'c', ItemID.arunelight, 0, 'd', 340, 0, 'e', ItemID.mcread, 0]);



IDRegistry.genItemID("magentadust");
Item.createItem("magentadust", "Магиныжийеми", {name: "magentadust", meta: 0}, {stack: 64});
Recipes.addShaped({id: ItemID.magentadust, count: 1, data: 0}, [ "   ", "ab ", "   "], ['a', 331, 0, 'b', 351, 4]);

IDRegistry.genItemID("magniumingot");
Item.createItem("magniumingot", "Слиток магния", {name: "magniumingot", meta: 0}, {stack: 64});

Recipes.addShaped({id: ItemID.magniumplate, count: 1, data: 0}, [ "aba", "   ", "aba"], ['a', ItemID.magniumingot, 0, 'b', 102, 0]);

Recipes.addShaped({id: ItemID.mcmagic, count: 1, data: 0}, [ "aea", "bcb", "ada"], ['a', 378, 0, 'b', 370, 0, 'c', 265, 0, 'd', 280, 0, 'e', ItemID.magniumingot, 0]);

Recipes.addShaped({id: BlockID.sbmagic, count: 1, data: 0}, [ "ada", "aca", "aba"], ['a', ItemID.magniumplate, 0, 'b', ItemID.mcsb, 0, 'c', ItemID.mcmagic, 0, 'd', ItemID.drunefire, 0]);

Recipes.addShaped({id: BlockID.sbmagic, count: 1, data: 0}, [ "ada", "aca", "aba"], ['a', ItemID.magniumplate, 0, 'b', ItemID.mcsb, 0, 'c', ItemID.mcmagic, 0, 'd', ItemID.drunewater, 0]);

Recipes.addShaped({id: BlockID.sbmagic, count: 1, data: 0}, [ "ada", "aca", "aba"], ['a', ItemID.magniumplate, 0, 'b', ItemID.mcsb, 0, 'c', ItemID.mcmagic, 0, 'd', ItemID.druneair, 0]);

Recipes.addShaped({id: BlockID.sbmagic, count: 1, data: 0}, [ "ada", "aca", "aba"], ['a', ItemID.magniumplate, 0, 'b', ItemID.mcsb, 0, 'c', ItemID.mcmagic, 0, 'd', ItemID.druneearth, 0]);

Recipes.addShaped({id: BlockID.sbmagic, count: 1, data: 0}, [ "ada", "aca", "aba"], ['a', ItemID.magniumplate, 0, 'b', ItemID.mcsb, 0, 'c', ItemID.mcmagic, 0, 'd', ItemID.drunelight, 0]);



IDRegistry.genItemID("magicsword1");
Item.createItem("magicsword1", "Магический меч\n§1Сила", {name: "magicsword", meta: 0}, {stack: 1});

IDRegistry.genItemID("magicsword2");
Item.createItem("magicsword2", "Магический меч\n§1Отравление", {name: "magicsword", meta: 0}, {stack: 1});


IDRegistry.genItemID("magicpickaxe1");
Item.createItem("magicpickaxe1", "Магическая кирка\n§1Площадь ፴", {name: "magicpickaxe", meta: 0}, {stack: 1});


IDRegistry.genItemID("magicaxe1");
Item.createItem("magicaxe1", "Магический топор\n§1Площадь ፴", {name: "magicaxe", meta: 0}, {stack: 1});


IDRegistry.genItemID("magicshovel1");
Item.createItem("magicshovel1", "Магическая лопата\n§1Площадь ፴", {name: "magicshovel", meta: 0}, {stack: 1});


IDRegistry.genItemID("magicpickaxe2");
Item.createItem("magicpickaxe2", "Магическая кирка\n§1Спешка", {name: "magicpickaxe", meta: 0}, {stack: 1});


IDRegistry.genItemID("magicaxe2");
Item.createItem("magicaxe2", "Магический топор\n§1Спешка", {name: "magicaxe", meta: 0}, {stack: 1});


IDRegistry.genItemID("magicshovel2");
Item.createItem("magicshovel2", "Магическая лопата\n§1Спешка", {name: "magicshovel", meta: 0}, {stack: 1});


IDRegistry.genItemID("magichoe1");
Item.createItem("magichoe1", "Ах[уточкин кря]ительня мапПппгическая мотыга", {name: "magichoe", meta: 0}, {stack: 1});


ToolAPI.addToolMaterial("duck", {durability: 400000000, level: 20, efficiency: 400, damage: 2500, enchantability: 120});
ToolAPI.setTool(ItemID.magichoe1, "duck", ToolType.sword);


ToolAPI.addToolMaterial("mapgic", {durability: 20000000, level: 15, efficiency: 200, damage: 15, enchantability: 60});
ToolAPI.setTool(ItemID.magicsword1, "mapgic", ToolType.sword);
ToolAPI.setTool(ItemID.magicsword2, "mapgic", ToolType.sword);

ToolAPI.setTool(ItemID.magicpickaxe1, "mapgic", ToolType.pickaxe);

ToolAPI.setTool(ItemID.magicaxe1, "mapgic", ToolType.axe);

ToolAPI.setTool(ItemID.magicshovel1, "mapgic", ToolType.shovel);

ToolAPI.setTool(ItemID.magichoe, "mapgic", ToolType.hoe);

IDRegistry.genItemID("magichelmet1");
Item.createArmorItem("magichelmet1", "Магический шлем\n§1Подводное дыхание", {name: "magichelmet", meta: 0}, {type: "helmet", armor: 5, durability: 1000000, texture: "armor/magicarmor.png"});

IDRegistry.genItemID("magichelmet2");
Item.createArmorItem("magichelmet2", "Магический шлем\n§1Ночьное зрение", {name: "magichelmet", meta: 0}, {type: "helmet", armor: 5, durability: 1000000, texture: "armor/magicarmor.png"});

/*
IDRegistry.genItemID("magicchestplate");
Item.createArmorItem("magicchestplate", "Магический нагрудник", {name: "magicchestplate", meta: 0}, {type: "chestplate", armor: 9, durability: 1000000, texture: "armor/magicarmor.png"});


IDRegistry.genItemID("magicleggings");
Item.createArmorItem("magicleggings", "Магические поножи", {name: "magicleggings", meta: 0}, {type: "leggings", armor: 7, durability: 1000000, texture: "armor/magicarmor0.png"});
*/

IDRegistry.genItemID("magicboots1");
Item.createArmorItem("magicboots1", "Магические ботинки\n§1Скорость ፶", {name: "magicboots", meta: 0}, {type: "boots", armor: 4, durability: 1000000, texture: "armor/magicarmor.png"});

IDRegistry.genItemID("magicboots2");
Item.createArmorItem("magicboots2", "Магические ботинки\n§1Прыгучесть", {name: "magicboots", meta: 0}, {type: "boots", armor: 4, durability: 1000000, texture: "armor/magicarmor.png"});











IDRegistry.genItemID("magichelmet3");
Item.createArmorItem("magichelmet3", "Магический шлем\n§1Регенерация", {name: "magichelmet", meta: 0}, {type: "helmet", armor: 5, durability: 1000000, texture: "armor/magicarmor.png"});


IDRegistry.genItemID("magicchestplate3");
Item.createArmorItem("magicchestplate3", "Магический нагрудник\n§1Регенерация", {name: "magicchestplate", meta: 0}, {type: "chestplate", armor: 9, durability: 1000000, texture: "armor/magicarmor.png"});


IDRegistry.genItemID("magicleggings3");
Item.createArmorItem("magicleggings3", "Магические поножи\n§1Регенерация", {name: "magicleggings", meta: 0}, {type: "leggings", armor: 7, durability: 1000000, texture: "armor/magicarmor0.png"});


IDRegistry.genItemID("magicboots3");
Item.createArmorItem("magicboots3", "Магические ботинки\n§1Регенерация", {name: "magicboots", meta: 0}, {type: "boots", armor: 4, durability: 1000000, texture: "armor/magicarmor.png"});






IDRegistry.genItemID("magichelmet4");
Item.createArmorItem("magichelmet4", "Магический шлем\n§1Сопротивление", {name: "magichelmet", meta: 0}, {type: "helmet", armor: 5, durability: 1000000, texture: "armor/magicarmor.png"});


IDRegistry.genItemID("magicchestplate4");
Item.createArmorItem("magicchestplate4", "Магический нагрудник\n§1Сопротивление", {name: "magicchestplate", meta: 0}, {type: "chestplate", armor: 9, durability: 1000000, texture: "armor/magicarmor.png"});


IDRegistry.genItemID("magicleggings4");
Item.createArmorItem("magicleggings4", "Магические поножи\n§1Сопротивление", {name: "magicleggings", meta: 0}, {type: "leggings", armor: 7, durability: 1000000, texture: "armor/magicarmor0.png"});


IDRegistry.genItemID("magicboots4");
Item.createArmorItem("magicboots4", "Магические ботинки\n§1Сопротивление", {name: "magicboots", meta: 0}, {type: "boots", armor: 4, durability: 1000000, texture: "armor/magicarmor.png"});






IDRegistry.genItemID("magichelmet5");
Item.createArmorItem("magichelmet5", "Магический шлем\n§1Огнестойкость", {name: "magichelmet", meta: 0}, {type: "helmet", armor: 5, durability: 1000000, texture: "armor/magicarmor.png"});


IDRegistry.genItemID("magicchestplate5");
Item.createArmorItem("magicchestplate5", "Магический нагрудник\n§1Огнестойкость", {name: "magicchestplate", meta: 0}, {type: "chestplate", armor: 9, durability: 1000000, texture: "armor/magicarmor.png"});


IDRegistry.genItemID("magicleggings5");
Item.createArmorItem("magicleggings5", "Магические поножи\n§1Огнестойкость", {name: "magicleggings", meta: 0}, {type: "leggings", armor: 7, durability: 1000000, texture: "armor/magicarmor0.png"});


IDRegistry.genItemID("magicboots5");
Item.createArmorItem("magicboots5", "Магические ботинки\n§1Огнестойкость", {name: "magicboots", meta: 0}, {type: "boots", armor: 4, durability: 1000000, texture: "armor/magicarmor.png"});






IDRegistry.genItemID("magichelmet6");
Item.createArmorItem("magichelmet6", "Магический шлем\n§1Здоровье", {name: "magichelmet", meta: 0}, {type: "helmet", armor: 5, durability: 1000000, texture: "armor/magicarmor.png"});


IDRegistry.genItemID("magicchestplate6");
Item.createArmorItem("magicchestplate6", "Магический нагрудник\n§1Здоровье", {name: "magicchestplate", meta: 0}, {type: "chestplate", armor: 9, durability: 1000000, texture: "armor/magicarmor.png"});


IDRegistry.genItemID("magicleggings6");
Item.createArmorItem("magicleggings6", "Магические поножи\n§1Здоровье", {name: "magicleggings", meta: 0}, {type: "leggings", armor: 7, durability: 1000000, texture: "armor/magicarmor0.png"});


IDRegistry.genItemID("magicboots6");
Item.createArmorItem("magicboots6", "Магические ботинки\n§1Здоровье", {name: "magicboots", meta: 0}, {type: "boots", armor: 4, durability: 1000000, texture: "armor/magicarmor.png"});






IDRegistry.genItemID("magichelmet7");
Item.createArmorItem("magichelmet7", "Магический шлем\n§1Насыщение", {name: "magichelmet", meta: 0}, {type: "helmet", armor: 5, durability: 1000000, texture: "armor/magicarmor.png"});


IDRegistry.genItemID("magicchestplate7");
Item.createArmorItem("magicchestplate7", "Магический нагрудник\n§1Насыщение", {name: "magicchestplate", meta: 0}, {type: "chestplate", armor: 9, durability: 1000000, texture: "armor/magicarmor.png"});


IDRegistry.genItemID("magicleggings7");
Item.createArmorItem("magicleggings7", "Магические поножи\n§1Насыщение", {name: "magicleggings", meta: 0}, {type: "leggings", armor: 7, durability: 1000000, texture: "armor/magicarmor0.png"});


IDRegistry.genItemID("magicboots7");
Item.createArmorItem("magicboots7", "Магические ботинки\n§1Насыщение", {name: "magicboots", meta: 0}, {type: "boots", armor: 4, durability: 1000000, texture: "armor/magicarmor.png"});





Callback.addCallback("tick", function(){
    var helmet = Player.getArmorSlot(0);
    var chest = Player.getArmorSlot(1);
    var legs = Player.getArmorSlot(2);
    var boots = Player.getArmorSlot(3);
    var pos = Player.getPosition();
    
if (helmet.id == ItemID.magichelmet1) {
    Entity.addEffect(Player.get(), Native.PotionEffect.waterBreathing, 1, 100)
    }
    
    if (helmet.id == ItemID.magichelmet2) {
    Entity.addEffect(Player.get(), Native.PotionEffect.nightVision, 1, 100)
    }
    
    if (boots.id == ItemID.magicboots1) {
    Entity.addEffect(Player.get(), Native.PotionEffect.movementSpeed, 4, 100)
    }
    
    if (boots.id == ItemID.magicboots2) {
    Entity.addEffect(Player.get(), Native.PotionEffect.jump, 4, 100)
    }
    
    
    
    
    
    
    
    
    
    if (helmet.id == ItemID.magichelmet3) {
    Entity.addEffect(Player.get(), Native.PotionEffect.regeneration, 4, 100)
    }
    
    if (chest.id == ItemID.magicchestplate3) {
    Entity.addEffect(Player.get(), Native.PotionEffect.regeneration, 4, 100)
    }
    
    if (legs.id == ItemID.magicleggings3) {
    Entity.addEffect(Player.get(), Native.PotionEffect.regeneration, 4, 100)
    }
    
    if (boots.id == ItemID.magicboots3) {
    Entity.addEffect(Player.get(), Native.PotionEffect.regeneration, 4, 100)
    }
    
    
    
    
    
    if (helmet.id == ItemID.magichelmet4) {
    Entity.addEffect(Player.get(), Native.PotionEffect.damageResistance, 4, 100)
    }
    
    if (chest.id == ItemID.magicchestplate4) {
    Entity.addEffect(Player.get(), Native.PotionEffect.damageResistance, 4, 100)
    }
    
    if (legs.id == ItemID.magicleggings4) {
    Entity.addEffect(Player.get(), Native.PotionEffect.damageResistance, 4, 100)
    }
    
    if (boots.id == ItemID.magicboots4) {
    Entity.addEffect(Player.get(), Native.PotionEffect.damageResistance, 4, 100)
    }
    
    
    
    
    
    if (helmet.id == ItemID.magichelmet5) {
    Entity.addEffect(Player.get(), Native.PotionEffect.fireResistance, 4, 100)
    }
    
    if (chest.id == ItemID.magicchestplate5) {
    Entity.addEffect(Player.get(), Native.PotionEffect.fireResistance, 4, 100)
    }
    
    if (legs.id == ItemID.magicleggings5) {
    Entity.addEffect(Player.get(), Native.PotionEffect.fireResistance, 4, 100)
    }
    
    if (boots.id == ItemID.magicboots5) {
    Entity.addEffect(Player.get(), Native.PotionEffect.fireResistance, 4, 100)
    }
    
    
    
    
    
    if (helmet.id == ItemID.magichelmet6) {
    Entity.addEffect(Player.get(), Native.PotionEffect.absorption, 4, 100)
    }
    
    if (chest.id == ItemID.magicchestplate6) {
    Entity.addEffect(Player.get(), Native.PotionEffect.absorption, 4, 100)
    }
    
    if (legs.id == ItemID.magicleggings6) {
    Entity.addEffect(Player.get(), Native.PotionEffect.absorption, 4, 100)
    }
    
    if (boots.id == ItemID.magicboots6) {
    Entity.addEffect(Player.get(), Native.PotionEffect.absorption, 4, 100)
    }
    
    
    
    
    
    if (helmet.id == ItemID.magichelmet7) {
    Entity.addEffect(Player.get(), Native.PotionEffect.saturation, 4, 100)
    }
    
    if (chest.id == ItemID.magicchestplate7) {
    Entity.addEffect(Player.get(), Native.PotionEffect.saturation, 4, 100)
    }
    
    if (legs.id == ItemID.magicleggings7) {
    Entity.addEffect(Player.get(), Native.PotionEffect.saturation, 4, 100)
    }
    
    if (boots.id == ItemID.magicboots7) {
    Entity.addEffect(Player.get(), Native.PotionEffect.saturation, 4, 100)
    }
   
   
});



Callback.addCallback("PlayerAttack", function (player, victim) { 
let item = Player.getCarriedItem();
if (item.id == ItemID.magicsword2){ 
Entity.addEffect(victim, Native.PotionEffect.poison, 1, 200, true, true); 
}
});


Callback.addCallback("tick", function(){
	var fhfh = Player.getCarriedItem();
	if(fhfh.id == ItemID.magicsword1){
		Entity.addEffect(Player.get(), Native.PotionEffect.damageBoost, 5, 100)
		}
});



Callback.addCallback("tick", function(){
	var fhfh = Player.getCarriedItem();
	if(fhfh.id == ItemID.magicpickaxe2){
		Entity.addEffect(Player.get(), Native.PotionEffect.digSpeed, 5, 100)
		}
});

Callback.addCallback("tick", function(){
	var fhfh = Player.getCarriedItem();
	if(fhfh.id == ItemID.magicaxe2){
		Entity.addEffect(Player.get(), Native.PotionEffect.digSpeed, 5, 100)
		}
});

Callback.addCallback("tick", function(){
	var fhfh = Player.getCarriedItem();
	if(fhfh.id == ItemID.magicshovel2){
		Entity.addEffect(Player.get(), Native.PotionEffect.digSpeed, 5, 100)
		}
});



Callback.addCallback("DestroyBlock", function(coords, player){
if(Player.getCarriedItem().id==ItemID.magicpickaxe1)
{
x = coords.x;
y = coords.y;
z = coords.z;
World.destroyBlock(x, y-1, z, true);
World.destroyBlock(x+1, y-1, z, true);
World.destroyBlock(x-1, y-1, z, true);
World.destroyBlock(x, y-1, z+1, true);
World.destroyBlock(x, y-1, z-1, true);
World.destroyBlock(x+1, y-1, z+1, true);
World.destroyBlock(x-1, y-1, z+1, true);
World.destroyBlock(x+1, y-1, z-1, true);
World.destroyBlock(x-1, y-1, z-1, true);

World.destroyBlock(x, y, z, true);
World.destroyBlock(x+1, y, z, true);
World.destroyBlock(x-1, y, z, true);
World.destroyBlock(x, y, z+1, true);
World.destroyBlock(x, y, z-1, true);
World.destroyBlock(x+1, y, z+1, true);
World.destroyBlock(x-1, y, z+1, true);
World.destroyBlock(x+1, y, z-1, true);
World.destroyBlock(x-1, y, z-1, true);

World.destroyBlock(x, y+1, z, true);
World.destroyBlock(x+1, y+1, z, true);
World.destroyBlock(x-1, y+1, z, true);
World.destroyBlock(x, y+1, z+1, true);
World.destroyBlock(x, y+1, z-1, true);
World.destroyBlock(x+1, y+1, z+1, true);
World.destroyBlock(x-1, y+1, z+1, true);
World.destroyBlock(x+1, y+1, z-1, true);
World.destroyBlock(x-1, y+1, z-1, true);
}
});



Callback.addCallback("DestroyBlock", function(coords, player){
if(Player.getCarriedItem().id==ItemID.magicaxe1)
{
x = coords.x;
y = coords.y;
z = coords.z;
World.destroyBlock(x, y-1, z, true);
World.destroyBlock(x+1, y-1, z, true);
World.destroyBlock(x-1, y-1, z, true);
World.destroyBlock(x, y-1, z+1, true);
World.destroyBlock(x, y-1, z-1, true);
World.destroyBlock(x+1, y-1, z+1, true);
World.destroyBlock(x-1, y-1, z+1, true);
World.destroyBlock(x+1, y-1, z-1, true);
World.destroyBlock(x-1, y-1, z-1, true);

World.destroyBlock(x, y, z, true);
World.destroyBlock(x+1, y, z, true);
World.destroyBlock(x-1, y, z, true);
World.destroyBlock(x, y, z+1, true);
World.destroyBlock(x, y, z-1, true);
World.destroyBlock(x+1, y, z+1, true);
World.destroyBlock(x-1, y, z+1, true);
World.destroyBlock(x+1, y, z-1, true);
World.destroyBlock(x-1, y, z-1, true);

World.destroyBlock(x, y+1, z, true);
World.destroyBlock(x+1, y+1, z, true);
World.destroyBlock(x-1, y+1, z, true);
World.destroyBlock(x, y+1, z+1, true);
World.destroyBlock(x, y+1, z-1, true);
World.destroyBlock(x+1, y+1, z+1, true);
World.destroyBlock(x-1, y+1, z+1, true);
World.destroyBlock(x+1, y+1, z-1, true);
World.destroyBlock(x-1, y+1, z-1, true);
}
});





Callback.addCallback("DestroyBlock", function(coords, player){
if(Player.getCarriedItem().id==ItemID.magicshovel1)
{
x = coords.x;
y = coords.y;
z = coords.z;
World.destroyBlock(x, y-1, z, true);
World.destroyBlock(x+1, y-1, z, true);
World.destroyBlock(x-1, y-1, z, true);
World.destroyBlock(x, y-1, z+1, true);
World.destroyBlock(x, y-1, z-1, true);
World.destroyBlock(x+1, y-1, z+1, true);
World.destroyBlock(x-1, y-1, z+1, true);
World.destroyBlock(x+1, y-1, z-1, true);
World.destroyBlock(x-1, y-1, z-1, true);

World.destroyBlock(x, y, z, true);
World.destroyBlock(x+1, y, z, true);
World.destroyBlock(x-1, y, z, true);
World.destroyBlock(x, y, z+1, true);
World.destroyBlock(x, y, z-1, true);
World.destroyBlock(x+1, y, z+1, true);
World.destroyBlock(x-1, y, z+1, true);
World.destroyBlock(x+1, y, z-1, true);
World.destroyBlock(x-1, y, z-1, true);

World.destroyBlock(x, y+1, z, true);
World.destroyBlock(x+1, y+1, z, true);
World.destroyBlock(x-1, y+1, z, true);
World.destroyBlock(x, y+1, z+1, true);
World.destroyBlock(x, y+1, z-1, true);
World.destroyBlock(x+1, y+1, z+1, true);
World.destroyBlock(x-1, y+1, z+1, true);
World.destroyBlock(x+1, y+1, z-1, true);
World.destroyBlock(x-1, y+1, z-1, true);
}
});
	
	
	
	

































// file: instruments_swords_and_armor.js



















































































// file: ironfurnace.js

var FURNACE_FUEL_MAP = {    5: 300,     6: 100,     17: 300,    263: 1600,  280: 100,   268: 200,   269: 200,   270: 200,   271: 200,   85: 300,    107: 300,   134: 300,   135: 300,   158: 150,   162: 300,   163: 300,   164: 300,   184: 300,   185: 300,   186: 300,   187: 300,   53: 300,    54: 300,    58: 300 };

var guiIrFur = new UI.StandartWindow({
    standart: {
        header: {text: {text: "Железная печь"}},
        inventory: {standart: true},
        background: {standart: true}
    },
    
    drawing: [
        {type: "bitmap", x: 530, y: 246, bitmap: "furnace_bar_background", scale: 3.2},
        {type: "bitmap", x: 450, y: 250, bitmap: "fire_background", scale: 3.2}
    ],
    
    elements: {
     "progressScale": {type: "scale", x: 530, y: 246, direction: 0, value: 0.5, bitmap: "furnace_bar_scale", scale: 3.2},
        "burningScale": {type: "scale", x: 450, y: 250, direction: 1, value: 0.5, bitmap: "fire_scale", scale: 3.2},
        "slotSource1": {type: "slot", x: 379, y: 175},
        "slotSource2": {type: "slot", x: 441, y: 175},
        "slotSource3": {type: "slot", x: 503, y: 175},
        "slotFuel": {type: "slot", x: 441, y: 312},
        "slotResult": {type: "slot", x: 625, y: 242},
    }
});



    
var IrFur = {
    recipes: {},
  
   set: function(abdulla1, abdulla2, abdulla3, result){
      this.recipes[JSON.stringify([abdulla1, abdulla2, abdulla3])] = {id: result.id, count: result.count, data: result.data || 0};
   },
 
   get: function(abdulla1, abdulla2, abdulla3){
     return this.recipes[JSON.stringify([abdulla1, abdulla2, abdulla3])];
   }
};

/*RECIPES FOR MOBS FURNACE*/

//MobsRecipes.set(slot1, slot2, slot3, {id: resultat id, count: 1, data: 0});

IrFur.set(265, 266, 0, {
    id: ItemID.brassingot, count: 2, data: 0
});

IrFur.set(ItemID.magentadust, ItemID.brassingot, 0, {
    id: ItemID.magniumingot, count: 1, data: 0
});


/*THE END*/

TileEntity.registerPrototype(BlockID.ironfurnace, {
    defaultValues: {
        progress: 0,
        burn: 0,
        burnMax: 0
    },
    
    getGuiScreen: function(){
        return guiIrFur;
    },
    
    tick: function(){
        let source1 = this.container.getSlot("slotSource1");
        var source2 = this.container.getSlot("slotSource2");
        let source3 = this.container.getSlot("slotSource3");
        var resultSlot = this.container.getSlot("slotResult");
        let f = IrFur.get(source1.id,source2.id,source3.id);
        if(this.data.burn > 0){
        if(f!=null) {
   if((((resultSlot.id == f.id && resultSlot.data == f.data) && resultSlot.count < 64) || resultSlot.id == 0) && this.data.progress ++ >= 150){
            source1.count--;
            source2.count--;
            source3.count--;
            resultSlot.id = f.id;
            resultSlot.data = f.data;
            resultSlot.count++;
            this.container.validateAll();
            this.data.progress = 0;
                }
            }
        }
        else {
            this.data.progress = 0;
        }
        if(this.data.burn > 0){
            this.data.burn--;
        }
        else if(f){
            this.data.burn = this.data.burnMax = this.getFuel("slotFuel");
        }
        
        this.container.setScale("burningScale", this.data.burn / this.data.burnMax || 0);
        this.container.setScale("progressScale", this.data.progress / 90);
    },
    
    getFuel: function(slotName){
        var fuelSlot = this.container.getSlot(slotName);
        if(fuelSlot.id > 0){
            var burn = FURNACE_FUEL_MAP[fuelSlot.id];
            if(burn){
                fuelSlot.count--;
                this.container.validateSlot(slotName);
                return burn;
            }
            if(LiquidRegistry.getItemLiquid(fuelSlot.id, fuelSlot.data) == "lava"){
                var empty = LiquidRegistry.getEmptyItem(fuelSlot.id, fuelSlot.data);
                fuelSlot.id = empty.id;
                fuelSlot.data = empty.data;
                return 20000;
            }
            
        }
        return 0;
    }
});
















Callback.addCallback("GenerateChunk", function (chunkX, chunkZ) {
    let coords = GenerationUtils.randomCoords(chunkX, chunkZ, 5, 256);
    if(Math.random() < 0.09){
    coords = GenerationUtils.findSurface(coords.x, coords.y, coords.z);
if(World.getBlockID(coords.x,coords.y,coords.z)==2){ 
       World.setBlock(coords.x,coords.y+1,  coords.z, BlockID.runicstone, 0);
       World.setBlock(coords.x,coords.y+2,  coords.z, BlockID.runicstone, 0);
       
       World.setBlock(coords.x,coords.y+3,  coords.z, 98, 3);
       
}}});







var FURNACE_FUEL_MAP = {    5: 300,     6: 100,     17: 300,    263: 1600,  280: 100,   268: 200,   269: 200,   270: 200,   271: 200,   85: 300,    107: 300,   134: 300,   135: 300,   158: 150,   162: 300,   163: 300,   164: 300,   184: 300,   185: 300,   186: 300,   187: 300,   53: 300,    54: 300,    58: 300 };

var guiFlush = new UI.StandartWindow({
    standart: {
        header: {text: {text: "Руно-промывочная машина"}},
        inventory: {standart: true},
        background: {standart: true}
    },
    
    drawing: [
        {type: "bitmap", x: 530, y: 246, bitmap: "flush_back", scale: 3.2},
        {type: "bitmap", x: 450, y: 250, bitmap: "fire_background", scale: 3.2}
    ],
    
    elements: {
     "progressScale": {type: "scale", x: 530, y: 246, direction: 0, value: 0.5, bitmap: "flush_scale", scale: 3.2},
        "burningScale": {type: "scale", x: 450, y: 250, direction: 1, value: 0.5, bitmap: "fire_scale", scale: 3.2},
        "slotSource1": {type: "slot", x: 379, y: 175},
        "slotSource2": {type: "slot", x: 441, y: 175},
        "slotSource3": {type: "slot", x: 503, y: 175},
        "slotFuel": {type: "slot", x: 441, y: 312},
        "slotResult": {type: "slot", x: 625, y: 242},
    }
});



    
var Flush = {
    recipes: {},
  
   set: function(abdulla1, abdulla2, abdulla3, result){
      this.recipes[JSON.stringify([abdulla1, abdulla2, abdulla3])] = {id: result.id, count: result.count, data: result.data || 0};
   },
 
   get: function(abdulla1, abdulla2, abdulla3){
     return this.recipes[JSON.stringify([abdulla1, abdulla2, abdulla3])];
   }
};

/*RECIPES FOR MOBS FURNACE*/

//MobsRecipes.set(slot1, slot2, slot3, {id: resultat id, count: 1, data: 0});

Flush.set(ItemID.runedirtwater, 0, 0, {
    id: ItemID.arunewater, count: 1, data: 0
});

Flush.set(ItemID.runedirtair, 0, 0, {
    id: ItemID.aruneair, count: 1, data: 0
});

Flush.set(ItemID.runedirtfire, 0, 0, {
    id: ItemID.arunefire, count: 1, data: 0
});

Flush.set(ItemID.runedirtearth, 0, 0, {
    id: ItemID.aruneearth, count: 1, data: 0
});

Flush.set(ItemID.runedirtlight, 0, 0, {
    id: ItemID.arunelight, count: 1, data: 0
});


/*THE END*/

TileEntity.registerPrototype(BlockID.flushmashine, {
    defaultValues: {
        progress: 0,
        burn: 0,
        burnMax: 0
    },
    
    getGuiScreen: function(){
        return guiFlush;
    },
    
    tick: function(){
        let source1 = this.container.getSlot("slotSource1");
        var source2 = this.container.getSlot("slotSource2");
        let source3 = this.container.getSlot("slotSource3");
        var resultSlot = this.container.getSlot("slotResult");
        let f = Flush.get(source1.id,source2.id,source3.id);
        if(this.data.burn > 0){
        if(f!=null) {
   if((((resultSlot.id == f.id && resultSlot.data == f.data) && resultSlot.count < 64) || resultSlot.id == 0) && this.data.progress ++ >= 150){
            source1.count--;
            source2.count--;
            source3.count--;
            resultSlot.id = f.id;
            resultSlot.data = f.data;
            resultSlot.count++;
            this.container.validateAll();
            this.data.progress = 0;
                }
            }
        }
        else {
            this.data.progress = 0;
        }
        if(this.data.burn > 0){
            this.data.burn--;
        }
        else if(f){
            this.data.burn = this.data.burnMax = this.getFuel("slotFuel");
        }
        
        this.container.setScale("burningScale", this.data.burn / this.data.burnMax || 0);
        this.container.setScale("progressScale", this.data.progress / 90);
    },
    
    getFuel: function(slotName){
        var fuelSlot = this.container.getSlot(slotName);
        if(fuelSlot.id > 0){
            var burn = FURNACE_FUEL_MAP[fuelSlot.id];
            if(burn){
                fuelSlot.count--;
                this.container.validateSlot(slotName);
                return burn;
            }
            if(LiquidRegistry.getItemLiquid(fuelSlot.id, fuelSlot.data) == "lava"){
                var empty = LiquidRegistry.getEmptyItem(fuelSlot.id, fuelSlot.data);
                fuelSlot.id = empty.id;
                fuelSlot.data = empty.data;
                return 20000;
            }
            
        }
        return 0;
    }
});





var FURNACE_FUEL_MAP = {    5: 300,     6: 100,     17: 300,    263: 1600,  280: 100,   268: 200,   269: 200,   270: 200,   271: 200,   85: 300,    107: 300,   134: 300,   135: 300,   158: 150,   162: 300,   163: 300,   164: 300,   184: 300,   185: 300,   186: 300,   187: 300,   53: 300,    54: 300,    58: 300 };

var guiW = new UI.StandartWindow({
    standart: {
        header: {text: {text: "Иссушитель магии"}},
        inventory: {standart: true},
        background: {standart: true}
    },
    
    drawing: [
        {type: "bitmap", x: 530, y: 246, bitmap: "bar_empty", scale: 3.2},
        {type: "bitmap", x: 450, y: 250, bitmap: "fire_background", scale: 3.2}
    ],
    
    elements: {
     "progressScale": {type: "scale", x: 530, y: 246, direction: 0, value: 0.5, bitmap: "wither_scale", scale: 3.2},
        "burningScale": {type: "scale", x: 450, y: 250, direction: 1, value: 0.5, bitmap: "fire_scale", scale: 3.2},
        "slotSource1": {type: "slot", x: 379, y: 175},
        "slotSource2": {type: "slot", x: 441, y: 175},
        "slotSource3": {type: "slot", x: 503, y: 175},
        "slotFuel": {type: "slot", x: 441, y: 312},
        "slotResult": {type: "slot", x: 625, y: 242},
    }
});



    
var W = {
    recipes: {},
  
   set: function(abdulla1, abdulla2, abdulla3, result){
      this.recipes[JSON.stringify([abdulla1, abdulla2, abdulla3])] = {id: result.id, count: result.count, data: result.data || 0};
   },
 
   get: function(abdulla1, abdulla2, abdulla3){
     return this.recipes[JSON.stringify([abdulla1, abdulla2, abdulla3])];
   }
};

/*RECIPES FOR MOBS FURNACE*/

//MobsRecipes.set(slot1, slot2, slot3, {id: resultat id, count: 1, data: 0});

W.set(ItemID.arunewater, 325, 0, {
    id: ItemID.bucketrunium, count: 1, data: 0
});

W.set(ItemID.aruneearth, 325, 0, {
    id: ItemID.bucketrunium, count: 1, data: 0
});

W.set(ItemID.aruneair, 325, 0, {
    id: ItemID.bucketrunium, count: 1, data: 0
});

W.set(ItemID.arunefire, 325, 0, {
    id: ItemID.bucketrunium, count: 1, data: 0
});

W.set(ItemID.arunelight, 325, 0, {
    id: ItemID.bucketrunium, count: 1, data: 0
});




/*THE END*/

TileEntity.registerPrototype(BlockID.wither, {
    defaultValues: {
        progress: 0,
        burn: 0,
        burnMax: 0
    },
    
    getGuiScreen: function(){
        return guiW;
    },
    
    tick: function(){
        let source1 = this.container.getSlot("slotSource1");
        var source2 = this.container.getSlot("slotSource2");
        let source3 = this.container.getSlot("slotSource3");
        var resultSlot = this.container.getSlot("slotResult");
        let f = W.get(source1.id,source2.id,source3.id);
        if(this.data.burn > 0){
        if(f!=null) {
   if((((resultSlot.id == f.id && resultSlot.data == f.data) && resultSlot.count < 64) || resultSlot.id == 0) && this.data.progress ++ >= 150){
            source1.count--;
            source2.count--;
            source3.count--;
            resultSlot.id = f.id;
            resultSlot.data = f.data;
            resultSlot.count++;
            this.container.validateAll();
            this.data.progress = 0;
                }
            }
        }
        else {
            this.data.progress = 0;
        }
        if(this.data.burn > 0){
            this.data.burn--;
        }
        else if(f){
            this.data.burn = this.data.burnMax = this.getFuel("slotFuel");
        }
        
        this.container.setScale("burningScale", this.data.burn / this.data.burnMax || 0);
        this.container.setScale("progressScale", this.data.progress / 90);
    },
    
    getFuel: function(slotName){
        var fuelSlot = this.container.getSlot(slotName);
        if(fuelSlot.id > 0){
            var burn = FURNACE_FUEL_MAP[fuelSlot.id];
            if(burn){
                fuelSlot.count--;
                this.container.validateSlot(slotName);
                return burn;
            }
            if(LiquidRegistry.getItemLiquid(fuelSlot.id, fuelSlot.data) == "lava"){
                var empty = LiquidRegistry.getEmptyItem(fuelSlot.id, fuelSlot.data);
                fuelSlot.id = empty.id;
                fuelSlot.data = empty.data;
                return 20000;
            }
            
        }
        return 0;
    }
});











var FURNACE_FUEL_MAP = {    5: 300,     6: 100,     17: 300,    263: 1600,  280: 100,   268: 200,   269: 200,   270: 200,   271: 200,   85: 300,    107: 300,   134: 300,   135: 300,   158: 150,   162: 300,   163: 300,   164: 300,   184: 300,   185: 300,   186: 300,   187: 300,   53: 300,    54: 300,    58: 300 };

var guiSbAr = new UI.StandartWindow({
    standart: {
        header: {text: {text: "Бронесборщик"}},
        inventory: {standart: true},
        background: {standart: true}
    },
    
    drawing: [
        {type: "bitmap", x: 530, y: 246, bitmap: "furnace_bar_background", scale: 3.2},
        {type: "bitmap", x: 450, y: 250, bitmap: "fire_background", scale: 3.2}
    ],
    
    elements: {
     "progressScale": {type: "scale", x: 530, y: 246, direction: 0, value: 0.5, bitmap: "furnace_bar_scale", scale: 3.2},
        "burningScale": {type: "scale", x: 450, y: 250, direction: 1, value: 0.5, bitmap: "fire_scale", scale: 3.2},
        "slotSource1": {type: "slot", x: 379, y: 175},
        "slotSource2": {type: "slot", x: 441, y: 175},
        "slotSource3": {type: "slot", x: 503, y: 175},
        "slotFuel": {type: "slot", x: 441, y: 312},
        "slotResult": {type: "slot", x: 625, y: 242},
    }
});



    
var SbAr = {
    recipes: {},
  
   set: function(abdulla1, abdulla2, abdulla3, result){
      this.recipes[JSON.stringify([abdulla1, abdulla2, abdulla3])] = {id: result.id, count: result.count, data: result.data || 0};
   },
 
   get: function(abdulla1, abdulla2, abdulla3){
     return this.recipes[JSON.stringify([abdulla1, abdulla2, abdulla3])];
   }
};

/*RECIPES FOR MOBS FURNACE*/

//MobsRecipes.set(slot1, slot2, slot3, {id: resultat id, count: 1, data: 0});






SbAr.set(ItemID.helmetform, ItemID.brassingot, ItemID.bucketrunium, {
    id: ItemID.magichelmet, count: 1, data: 0
});

SbAr.set(ItemID.chestplateform, ItemID.brassingot, ItemID.bucketrunium, {
    id: ItemID.magicchestplate, count: 1, data: 0
});

SbAr.set(ItemID.leggingsform, ItemID.brassingot, ItemID.bucketrunium, {
    id: ItemID.magicleggings, count: 1, data: 0
});

SbAr.set(ItemID.bootsform, ItemID.brassingot, ItemID.bucketrunium, {
    id: ItemID.magicboots, count: 1, data: 0
});









/*THE END*/

TileEntity.registerPrototype(BlockID.sbarmor, {
    defaultValues: {
        progress: 0,
        burn: 0,
        burnMax: 0
    },
    
    getGuiScreen: function(){
        return guiSbAr;
    },
    
    tick: function(){
        let source1 = this.container.getSlot("slotSource1");
        var source2 = this.container.getSlot("slotSource2");
        let source3 = this.container.getSlot("slotSource3");
        var resultSlot = this.container.getSlot("slotResult");
        let f = SbAr.get(source1.id,source2.id,source3.id);
        if(this.data.burn > 0){
        if(f!=null) {
   if((((resultSlot.id == f.id && resultSlot.data == f.data) && resultSlot.count < 64) || resultSlot.id == 0) && this.data.progress ++ >= 150){
            source1.count--;
            source2.count--;
            source3.count--;
            resultSlot.id = f.id;
            resultSlot.data = f.data;
            resultSlot.count++;
            this.container.validateAll();
            this.data.progress = 0;
                }
            }
        }
        else {
            this.data.progress = 0;
        }
        if(this.data.burn > 0){
            this.data.burn--;
        }
        else if(f){
            this.data.burn = this.data.burnMax = this.getFuel("slotFuel");
        }
        
        this.container.setScale("burningScale", this.data.burn / this.data.burnMax || 0);
        this.container.setScale("progressScale", this.data.progress / 90);
    },
    
    getFuel: function(slotName){
        var fuelSlot = this.container.getSlot(slotName);
        if(fuelSlot.id > 0){
            var burn = FURNACE_FUEL_MAP[fuelSlot.id];
            if(burn){
                fuelSlot.count--;
                this.container.validateSlot(slotName);
                return burn;
            }
            if(LiquidRegistry.getItemLiquid(fuelSlot.id, fuelSlot.data) == "lava"){
                var empty = LiquidRegistry.getEmptyItem(fuelSlot.id, fuelSlot.data);
                fuelSlot.id = empty.id;
                fuelSlot.data = empty.data;
                return 20000;
            }
            
        }
        return 0;
    }
});







var FURNACE_FUEL_MAP = {    5: 300,     6: 100,     17: 300,    263: 1600,  280: 100,   268: 200,   269: 200,   270: 200,   271: 200,   85: 300,    107: 300,   134: 300,   135: 300,   158: 150,   162: 300,   163: 300,   164: 300,   184: 300,   185: 300,   186: 300,   187: 300,   53: 300,    54: 300,    58: 300 };

var guiSbTl = new UI.StandartWindow({
    standart: {
        header: {text: {text: "Сборщик инструментов"}},
        inventory: {standart: true},
        background: {standart: true}
    },
    
    drawing: [
        {type: "bitmap", x: 530, y: 246, bitmap: "furnace_bar_background", scale: 3.2},
        {type: "bitmap", x: 450, y: 250, bitmap: "fire_background", scale: 3.2}
    ],
    
    elements: {
     "progressScale": {type: "scale", x: 530, y: 246, direction: 0, value: 0.5, bitmap: "furnace_bar_scale", scale: 3.2},
        "burningScale": {type: "scale", x: 450, y: 250, direction: 1, value: 0.5, bitmap: "fire_scale", scale: 3.2},
        "slotSource1": {type: "slot", x: 379, y: 175},
        "slotSource2": {type: "slot", x: 441, y: 175},
        "slotSource3": {type: "slot", x: 503, y: 175},
        "slotFuel": {type: "slot", x: 441, y: 312},
        "slotResult": {type: "slot", x: 625, y: 242},
    }
});



    
var SbTl = {
    recipes: {},
  
   set: function(abdulla1, abdulla2, abdulla3, result){
      this.recipes[JSON.stringify([abdulla1, abdulla2, abdulla3])] = {id: result.id, count: result.count, data: result.data || 0};
   },
 
   get: function(abdulla1, abdulla2, abdulla3){
     return this.recipes[JSON.stringify([abdulla1, abdulla2, abdulla3])];
   }
};

/*RECIPES FOR MOBS FURNACE*/

//MobsRecipes.set(slot1, slot2, slot3, {id: resultat id, count: 1, data: 0});

SbTl.set(ItemID.swordform, ItemID.brassingot, ItemID.bucketrunium, {
    id: ItemID.magicsword, count: 1, data: 0
});

SbTl.set(ItemID.pickaxeform, ItemID.brassingot, ItemID.bucketrunium, {
    id: ItemID.magicpickaxe, count: 1, data: 0
});

SbTl.set(ItemID.axeform, ItemID.brassingot, ItemID.bucketrunium, {
    id: ItemID.magicaxe, count: 1, data: 0
});

SbTl.set(ItemID.shovelform, ItemID.brassingot, ItemID.bucketrunium, {
    id: ItemID.magicshovel, count: 1, data: 0
});

SbTl.set(ItemID.hoeform, ItemID.brassingot, ItemID.bucketrunium, {
    id: ItemID.magichoe, count: 1, data: 0
});















/*THE END*/

TileEntity.registerPrototype(BlockID.sbtools, {
    defaultValues: {
        progress: 0,
        burn: 0,
        burnMax: 0
    },
    
    getGuiScreen: function(){
        return guiSbTl;
    },
    
    tick: function(){
        let source1 = this.container.getSlot("slotSource1");
        var source2 = this.container.getSlot("slotSource2");
        let source3 = this.container.getSlot("slotSource3");
        var resultSlot = this.container.getSlot("slotResult");
        let f = SbTl.get(source1.id,source2.id,source3.id);
        if(this.data.burn > 0){
        if(f!=null) {
   if((((resultSlot.id == f.id && resultSlot.data == f.data) && resultSlot.count < 64) || resultSlot.id == 0) && this.data.progress ++ >= 150){
            source1.count--;
            source2.count--;
            source3.count--;
            resultSlot.id = f.id;
            resultSlot.data = f.data;
            resultSlot.count++;
            this.container.validateAll();
            this.data.progress = 0;
                }
            }
        }
        else {
            this.data.progress = 0;
        }
        if(this.data.burn > 0){
            this.data.burn--;
        }
        else if(f){
            this.data.burn = this.data.burnMax = this.getFuel("slotFuel");
        }
        
        this.container.setScale("burningScale", this.data.burn / this.data.burnMax || 0);
        this.container.setScale("progressScale", this.data.progress / 90);
    },
    
    getFuel: function(slotName){
        var fuelSlot = this.container.getSlot(slotName);
        if(fuelSlot.id > 0){
            var burn = FURNACE_FUEL_MAP[fuelSlot.id];
            if(burn){
                fuelSlot.count--;
                this.container.validateSlot(slotName);
                return burn;
            }
            if(LiquidRegistry.getItemLiquid(fuelSlot.id, fuelSlot.data) == "lava"){
                var empty = LiquidRegistry.getEmptyItem(fuelSlot.id, fuelSlot.data);
                fuelSlot.id = empty.id;
                fuelSlot.data = empty.data;
                return 20000;
            }
            
        }
        return 0;
    }
});




















var FURNACE_FUEL_MAP = {    5: 300,     6: 100,     17: 300,    263: 1600,  280: 100,   268: 200,   269: 200,   270: 200,   271: 200,   85: 300,    107: 300,   134: 300,   135: 300,   158: 150,   162: 300,   163: 300,   164: 300,   184: 300,   185: 300,   186: 300,   187: 300,   53: 300,    54: 300,    58: 300 };

var guiRead = new UI.StandartWindow({
    standart: {
        header: {text: {text: "Дешифратор рун"}},
        inventory: {standart: true},
        background: {standart: true}
    },
    
    drawing: [
        {type: "bitmap", x: 530, y: 246, bitmap: "read_back", scale: 3.2},
        {type: "bitmap", x: 450, y: 250, bitmap: "fire_background", scale: 3.2}
    ],
    
    elements: {
     "progressScale": {type: "scale", x: 530, y: 246, direction: 0, value: 0.5, bitmap: "read_scale", scale: 3.2},
        "burningScale": {type: "scale", x: 450, y: 250, direction: 1, value: 0.5, bitmap: "fire_scale", scale: 3.2},
        "slotSource1": {type: "slot", x: 379, y: 175},
        "slotSource2": {type: "slot", x: 441, y: 175},
        "slotSource3": {type: "slot", x: 503, y: 175},
        "slotFuel": {type: "slot", x: 441, y: 312},
        "slotResult": {type: "slot", x: 625, y: 242},
    }
});



    
var Read = {
    recipes: {},
  
   set: function(abdulla1, abdulla2, abdulla3, result){
      this.recipes[JSON.stringify([abdulla1, abdulla2, abdulla3])] = {id: result.id, count: result.count, data: result.data || 0};
   },
 
   get: function(abdulla1, abdulla2, abdulla3){
     return this.recipes[JSON.stringify([abdulla1, abdulla2, abdulla3])];
   }
};

/*RECIPES FOR MOBS FURNACE*/

//MobsRecipes.set(slot1, slot2, slot3, {id: resultat id, count: 1, data: 0});

Read.set(ItemID.arunewater, 0, 0, {
    id: ItemID.drunewater, count: 1, data: 0
});

Read.set(ItemID.aruneearth, 0, 0, {
    id: ItemID.druneearth, count: 1, data: 0
});

Read.set(ItemID.aruneair, 0, 0, {
    id: ItemID.druneair, count: 1, data: 0
});

Read.set(ItemID.arunefire, 0, 0, {
    id: ItemID.drunefire, count: 1, data: 0
});

Read.set(ItemID.arunelight, 0, 0, {
    id: ItemID.drunelight, count: 1, data: 0
});




/*THE END*/

TileEntity.registerPrototype(BlockID.reader, {
    defaultValues: {
        progress: 0,
        burn: 0,
        burnMax: 0
    },
    
    getGuiScreen: function(){
        return guiRead;
    },
    
    tick: function(){
        let source1 = this.container.getSlot("slotSource1");
        var source2 = this.container.getSlot("slotSource2");
        let source3 = this.container.getSlot("slotSource3");
        var resultSlot = this.container.getSlot("slotResult");
        let f = Read.get(source1.id,source2.id,source3.id);
        if(this.data.burn > 0){
        if(f!=null) {
   if((((resultSlot.id == f.id && resultSlot.data == f.data) && resultSlot.count < 64) || resultSlot.id == 0) && this.data.progress ++ >= 150){
            source1.count--;
            source2.count--;
            source3.count--;
            resultSlot.id = f.id;
            resultSlot.data = f.data;
            resultSlot.count++;
            this.container.validateAll();
            this.data.progress = 0;
                }
            }
        }
        else {
            this.data.progress = 0;
        }
        if(this.data.burn > 0){
            this.data.burn--;
        }
        else if(f){
            this.data.burn = this.data.burnMax = this.getFuel("slotFuel");
        }
        
        this.container.setScale("burningScale", this.data.burn / this.data.burnMax || 0);
        this.container.setScale("progressScale", this.data.progress / 90);
    },
    
    getFuel: function(slotName){
        var fuelSlot = this.container.getSlot(slotName);
        if(fuelSlot.id > 0){
            var burn = FURNACE_FUEL_MAP[fuelSlot.id];
            if(burn){
                fuelSlot.count--;
                this.container.validateSlot(slotName);
                return burn;
            }
            if(LiquidRegistry.getItemLiquid(fuelSlot.id, fuelSlot.data) == "lava"){
                var empty = LiquidRegistry.getEmptyItem(fuelSlot.id, fuelSlot.data);
                fuelSlot.id = empty.id;
                fuelSlot.data = empty.data;
                return 20000;
            }
            
        }
        return 0;
    }
});











var FURNACE_FUEL_MAP = {    5: 300,     6: 100,     17: 300,    263: 1600,  280: 100,   268: 200,   269: 200,   270: 200,   271: 200,   85: 300,    107: 300,   134: 300,   135: 300,   158: 150,   162: 300,   163: 300,   164: 300,   184: 300,   185: 300,   186: 300,   187: 300,   53: 300,    54: 300,    58: 300 };

var guiMag = new UI.StandartWindow({
    standart: {
        header: {text: {text: "Магический сборщик"}},
        inventory: {standart: true},
        background: {standart: true}
    },
    
    drawing: [
        {type: "bitmap", x: 530, y: 246, bitmap: "read_back", scale: 3.2},
        {type: "bitmap", x: 450, y: 250, bitmap: "fire_background", scale: 3.2}
    ],
    
    elements: {
     "progressScale": {type: "scale", x: 530, y: 246, direction: 0, value: 0.5, bitmap: "read_scale", scale: 3.2},
        "burningScale": {type: "scale", x: 450, y: 250, direction: 1, value: 0.5, bitmap: "fire_scale", scale: 3.2},
        "slotSource1": {type: "slot", x: 503, y: 175},
        "slotSource2": {type: "slot", x: 565, y: 175},
        "slotSource3": {type: "slot", x: 627, y: 175},
        
        "slotSource4": {type: "slot", x: 503, y: 113},
        "slotSource5": {type: "slot", x: 565, y: 113},
        "slotSource6": {type: "slot", x: 627, y: 113},
        
        "slotSource7": {type: "slot", x: 503, y: 51},
        "slotSource8": {type: "slot", x: 565, y: 51},
        "slotSource9": {type: "slot", x: 627, y: 51},
       
       "slotSource10": {type: "slot", x: 441, y: 113},
        
        "slotFuel": {type: "slot", x: 441, y: 312},
        "slotResult": {type: "slot", x: 625, y: 242},
    }
});



    
var Mag = {
    recipes: {},
  
   set: function(abdulla1, abdulla2, abdulla3, abdulla4, abdulla5, abdulla6, abdulla7, abdulla8, abdulla9, abdulla10, result){
      this.recipes[JSON.stringify([abdulla1, abdulla2, abdulla3, abdulla4, abdulla5, abdulla6, abdulla7, abdulla8, abdulla9, abdulla10])] = {id: result.id, count: result.count, data: result.data || 0};
   },
 
   get: function(abdulla1, abdulla2, abdulla3, abdulla4, abdulla5, abdulla6, abdulla7, abdulla8, abdulla9, abdulla10){
     return this.recipes[JSON.stringify([abdulla1, abdulla2, abdulla3, abdulla4, abdulla5, abdulla6, abdulla7, abdulla8, abdulla9, abdulla10])];
   }
};

/*RECIPES FOR MOBS FURNACE*/

//MobsRecipes.set(slot1, slot2, slot3, {id: resultat id, count: 1, data: 0});

Mag.set(ItemID.drunewater, ItemID.drunewater, ItemID.drunewater,
                ItemID.druneair, ItemID.druneair, ItemID.druneair,
                0, 0, 0,
                ItemID.magichelmet, {
    id: ItemID.magichelmet1, count: 1, data: 0
});


Mag.set(ItemID.drunefire, ItemID.drunefire, ItemID.drunefire,
                ItemID.druneair, ItemID.druneearth, ItemID.drunewater,
                0, 0, 0,
                ItemID.magichelmet, {
    id: ItemID.magichelmet2, count: 1, data: 0
});


Mag.set(
                ItemID.druneair, ItemID.druneair, ItemID.druneair,
                ItemID.druneearth, ItemID.druneearth, ItemID.druneearth,
                0, 0, 0,
                ItemID.magicboots, {
    id: ItemID.magicboots1, count: 1, data: 0
});


Mag.set(
                ItemID.druneearth, ItemID.druneearth, ItemID.druneearth,
                ItemID.druneair, ItemID.druneair, ItemID.druneair,
                0, 0, 0,
                ItemID.magicboots, {
    id: ItemID.magicboots2, count: 1, data: 0
});







Mag.set(
                ItemID.drunefire, ItemID.drunefire, ItemID.drunefire,
                ItemID.drunelight, ItemID.drunelight, ItemID.drunelight,
                0, 0, 0,
                ItemID.magichelmet, {
    id: ItemID.magichelmet3, count: 1, data: 0
});

Mag.set(
                ItemID.drunefire, ItemID.drunefire, ItemID.drunefire,
                ItemID.drunelight, ItemID.drunelight, ItemID.drunelight,
                0, 0, 0,
                ItemID.magicchestplate, {
    id: ItemID.magicchestplate3, count: 1, data: 0
});

Mag.set(
                ItemID.drunefire, ItemID.drunefire, ItemID.drunefire,
                ItemID.drunelight, ItemID.drunelight, ItemID.drunelight,
                0, 0, 0,
                ItemID.magicleggings, {
    id: ItemID.magicleggings3, count: 1, data: 0
});

Mag.set(
                ItemID.drunefire, ItemID.drunefire, ItemID.drunefire,
                ItemID.drunelight, ItemID.drunelight, ItemID.drunelight,
                0, 0, 0,
                ItemID.magicboots, {
    id: ItemID.magicboots3, count: 1, data: 0
});









Mag.set(
                ItemID.drunelight, ItemID.drunelight, ItemID.drunelight,
                ItemID.drunefire, ItemID.drunefire, ItemID.drunefire,
                0, 0, 0,
                ItemID.magichelmet, {
    id: ItemID.magichelmet4, count: 1, data: 0
});

Mag.set(
                ItemID.drunelight, ItemID.drunelight, ItemID.drunelight,
                ItemID.drunefire, ItemID.drunefire, ItemID.drunefire,
                0, 0, 0,
                ItemID.magicchestplate, {
    id: ItemID.magicchestplate4, count: 1, data: 0
});

Mag.set(
                ItemID.drunelight, ItemID.drunelight, ItemID.drunelight,
                ItemID.drunefire, ItemID.drunefire, ItemID.drunefire,
                0, 0, 0,
                ItemID.magicleggings, {
    id: ItemID.magicleggings4, count: 1, data: 0
});

Mag.set(
                ItemID.drunelight, ItemID.drunelight, ItemID.drunelight,
                ItemID.drunefire, ItemID.drunefire, ItemID.drunefire,
                0, 0, 0,
                ItemID.magicboots, {
    id: ItemID.magicboots4, count: 1, data: 0
});









Mag.set(
                ItemID.drunefire, ItemID.drunefire, ItemID.drunefire,
                ItemID.drunefire, ItemID.drunefire, ItemID.drunefire,
                0, 0, 0,
                ItemID.magichelmet, {
    id: ItemID.magichelmet5, count: 1, data: 0
});

Mag.set(
                ItemID.drunefire, ItemID.drunefire, ItemID.drunefire,
                ItemID.drunefire, ItemID.drunefire, ItemID.drunefire,
                0, 0, 0,
                ItemID.magicchestplate, {
    id: ItemID.magicchestplate5, count: 1, data: 0
});

Mag.set(
                ItemID.drunefire, ItemID.drunefire, ItemID.drunefire,
                ItemID.drunefire, ItemID.drunefire, ItemID.drunefire,
                0, 0, 0,
                ItemID.magicleggings, {
    id: ItemID.magicleggings5, count: 1, data: 0
});

Mag.set(
                ItemID.drunefire, ItemID.drunefire, ItemID.drunefire,
                ItemID.drunefire, ItemID.drunefire, ItemID.drunefire,
                0, 0, 0,
                ItemID.magicboots, {
    id: ItemID.magicboots5, count: 1, data: 0
});









Mag.set(
                ItemID.drunelight, ItemID.drunefire, ItemID.drunelight,
                ItemID.drunefire, ItemID.drunelight, ItemID.drunefire,
                0, 0, 0,
                ItemID.magichelmet, {
    id: ItemID.magichelmet6, count: 1, data: 0
});

Mag.set(
                ItemID.drunelight, ItemID.drunefire, ItemID.drunelight,
                ItemID.drunefire, ItemID.drunelight, ItemID.drunefire,
                0, 0, 0,
                ItemID.magicchestplate, {
    id: ItemID.magicchestplate6, count: 1, data: 0
});

Mag.set(
                ItemID.drunelight, ItemID.drunefire, ItemID.drunelight,
                ItemID.drunefire, ItemID.drunelight, ItemID.drunefire,
                0, 0, 0,
                ItemID.magicleggings, {
    id: ItemID.magicleggings6, count: 1, data: 0
});

Mag.set(
                ItemID.drunelight, ItemID.drunefire, ItemID.drunelight,
                ItemID.drunefire, ItemID.drunelight, ItemID.drunefire,
                0, 0, 0,
                ItemID.magicboots, {
    id: ItemID.magicboots6, count: 1, data: 0
});









Mag.set(
                ItemID.drunelight, ItemID.drunefire, ItemID.drunelight,
                ItemID.druneearth, ItemID.drunelight, ItemID.druneearth,
                0, 0, 0,
                ItemID.magichelmet, {
    id: ItemID.magichelmet7, count: 1, data: 0
});

Mag.set(
                ItemID.drunelight, ItemID.drunefire, ItemID.drunelight,
                ItemID.druneearth, ItemID.drunelight, ItemID.druneearth,
                0, 0, 0,
                ItemID.magicchestplate, {
    id: ItemID.magicchestplate7, count: 1, data: 0
});



Mag.set(
                ItemID.obsidianplate, ItemID.obsidianplate, ItemID.obsidianplate,
                ItemID.obsidianplate, ItemID.magichoe, ItemID.obsidianplate,
                ItemID.obsidianplate, ItemID.obsidianplate, ItemID.obsidianplate,
                ItemID.magichoe, {
    id: ItemID.magichoe1, count: 1, data: 0
});



Mag.set(
                ItemID.drunelight, ItemID.drunefire, ItemID.drunelight,
                ItemID.druneearth, ItemID.drunelight, ItemID.druneearth,
                0, 0, 0,
                ItemID.magicleggings, {
    id: ItemID.magicleggings7, count: 1, data: 0
});

Mag.set(
                ItemID.drunelight, ItemID.drunefire, ItemID.drunelight,
                ItemID.druneearth, ItemID.drunelight, ItemID.druneearth,
                0, 0, 0,
                ItemID.magicboots, {
    id: ItemID.magicboots7, count: 1, data: 0
});









Mag.set(
                ItemID.druneearth, ItemID.druneearth, ItemID.druneearth,
                ItemID.drunefire, ItemID.drunefire, ItemID.drunefire,
                0, 0, 0,
                ItemID.magicsword, {
    id: ItemID.magicsword2, count: 1, data: 0
});


Mag.set(
                ItemID.drunefire, ItemID.drunefire, ItemID.drunefire,
                ItemID.druneearth, ItemID.druneearth, ItemID.druneearth,
                0, 0, 0,
                ItemID.magicsword, {
    id: ItemID.magicsword1, count: 1, data: 0
});




Mag.set(
                ItemID.druneair, ItemID.druneair, ItemID.druneair,
                ItemID.druneearth, ItemID.druneearth, ItemID.druneearth,
                0, 0, 0,
                ItemID.magicpickaxe, {
    id: ItemID.magicpickaxe2, count: 1, data: 0
});

Mag.set(
                ItemID.druneair, ItemID.druneair, ItemID.druneair,
                ItemID.druneearth, ItemID.druneearth, ItemID.druneearth,
                0, 0, 0,
                ItemID.magicpickaxe, {
    id: ItemID.magicaxe2, count: 1, data: 0
});

Mag.set(
                ItemID.druneair, ItemID.druneair, ItemID.druneair,
                ItemID.druneearth, ItemID.druneearth, ItemID.druneearth,
                0, 0, 0,
                ItemID.magicpickaxe, {
    id: ItemID.magicshovel2, count: 1, data: 0
});






Mag.set(
                ItemID.druneearth, ItemID.druneearth, ItemID.druneearth,
                ItemID.druneearth, ItemID.druneearth, ItemID.druneearth,
                0, 0, 0,
                ItemID.magicpickaxe, {
    id: ItemID.magicpickaxe1, count: 1, data: 0
});

Mag.set(
                ItemID.druneearth, ItemID.druneearth, ItemID.druneearth,
                ItemID.druneearth, ItemID.druneearth, ItemID.druneearth,
                0, 0, 0,
                ItemID.magicpickaxe, {
    id: ItemID.magicaxe1, count: 1, data: 0
});

Mag.set(
                ItemID.druneearth, ItemID.druneearth, ItemID.druneearth,
                ItemID.druneearth, ItemID.druneearth, ItemID.druneearth,
                0, 0, 0,
                ItemID.magicpickaxe, {
    id: ItemID.magicshovel1, count: 1, data: 0
});







/*THE END*/

TileEntity.registerPrototype(BlockID.sbmagic, {
    defaultValues: {
        progress: 0,
        burn: 0,
        burnMax: 0
    },
    
    getGuiScreen: function(){
        return guiMag;
    },
    
    tick: function(){
        let source1 = this.container.getSlot("slotSource1");
        var source2 = this.container.getSlot("slotSource2");
        let source3 = this.container.getSlot("slotSource3");
        
        let source4 = this.container.getSlot("slotSource4");
        let source5 = this.container.getSlot("slotSource5");
        let source6 = this.container.getSlot("slotSource6");
        let source7 = this.container.getSlot("slotSource7");
        
        let source8 = this.container.getSlot("slotSource8");
        let source9 = this.container.getSlot("slotSource9");
        
        let source10 = this.container.getSlot("slotSource10");
        
        var resultSlot = this.container.getSlot("slotResult");
        let f = Mag.get(source1.id,source2.id,source3.id, source4.id, source5.id, source6.id, source7.id, source8.id, source9.id, source10.id);
        if(this.data.burn > 0){
        if(f!=null) {
   if((((resultSlot.id == f.id && resultSlot.data == f.data) && resultSlot.count < 64) || resultSlot.id == 0) && this.data.progress ++ >= 150){
            source1.count--;
            source2.count--;
            source3.count--;
            source4.count--;
            source5.count--;
            source6.count--;
            source7.count--;
            source8.count--;
            source9.count--;
            source10.count--;
            resultSlot.id = f.id;
            resultSlot.data = f.data;
            resultSlot.count++;
            this.container.validateAll();
            this.data.progress = 0;
                }
            }
        }
        else {
            this.data.progress = 0;
        }
        if(this.data.burn > 0){
            this.data.burn--;
        }
        else if(f){
            this.data.burn = this.data.burnMax = this.getFuel("slotFuel");
        }
        
        this.container.setScale("burningScale", this.data.burn / this.data.burnMax || 0);
        this.container.setScale("progressScale", this.data.progress / 90);
    },
    
    getFuel: function(slotName){
        var fuelSlot = this.container.getSlot(slotName);
        if(fuelSlot.id > 0){
            var burn = FURNACE_FUEL_MAP[fuelSlot.id];
            if(burn){
                fuelSlot.count--;
                this.container.validateSlot(slotName);
                return burn;
            }
            if(LiquidRegistry.getItemLiquid(fuelSlot.id, fuelSlot.data) == "lava"){
                var empty = LiquidRegistry.getEmptyItem(fuelSlot.id, fuelSlot.data);
                fuelSlot.id = empty.id;
                fuelSlot.data = empty.data;
                return 20000;
            }
            
        }
        return 0;
    }
});















