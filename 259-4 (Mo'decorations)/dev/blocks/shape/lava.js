//создаем блок с рендером

var Block_TYPE = Block.createSpecialType({ 
lightlevel: 10
}); 
IDRegistry.genBlockID("lava1");
Block.createBlock("lava1", [
 {name: "лава-лампа", texture: [["", 0]], inCreative: false}
],Block_TYPE)

function createLavaRender(id, idMaterial, dataMaterial) {
var render = new ICRender.Model();
BlockRenderer.setStaticICRender (id, 0, render);
var model = BlockRenderer.createModel();
//ядро
model.addBox (5/16, 4/16, 5/16, 11/16, 15/16, 11/16,  BlockID.block7, 0);
model.addBox (4/16, 0, 4/16, 12/16, 4/16, 12/16,  BlockID.block7, 0);
model.addBox (6/16, 15/16, 6/16, 10/16, 1, 10/16,  BlockID.block7, 0);
render.addEntry(model);
}

createLavaRender(BlockID.lava1, 20, 0);

//создаем предмет который будет ставить блок

IDRegistry.genItemID("lava1");
Item.createItem("lava1","лава-лампа",{name:"lava",meta:1},{stack:32});

//создаем функцию постановки блока по тапу предметом

Item.registerUseFunction(ItemID.lava1, function(coords, item, block){
 World.setBlock(coords.relative.x,coords.relative.y,coords.relative.z, BlockID.lava1);
Player.decreaseCarriedItem(1);
});

//дроп

Block.registerDropFunction("lava1", function(coords, id, data, diggingLevel, toolLevel){      return [[ItemID.lava1, 1, data]]; });





//создаем блок с рендером

var Block_TYPE = Block.createSpecialType({ 
lightlevel: 10
}); 
IDRegistry.genBlockID("lava2");
Block.createBlock("lava2", [
 {name: "лава-лампа", texture: [["", 0]], inCreative: false}
],Block_TYPE)

function createLAvaRender(id, idMaterial, dataMaterial) {
var render = new ICRender.Model();
BlockRenderer.setStaticICRender (id, 0, render);
var model = BlockRenderer.createModel();
//ядро
model.addBox (5/16, 4/16, 5/16, 11/16, 15/16, 11/16,  BlockID.block8, 0);
model.addBox (4/16, 0, 4/16, 12/16, 4/16, 12/16,  BlockID.block8, 0);
model.addBox (6/16, 15/16, 6/16, 10/16, 1, 10/16,  BlockID.block8, 0);
render.addEntry(model);
}

createLAvaRender(BlockID.lava2, 20, 0);

//создаем предмет который будет ставить блок

IDRegistry.genItemID("lava2");
Item.createItem("lava2","лава-лампа",{name:"lava",meta:2},{stack:32});

//создаем функцию постановки блока по тапу предметом

Item.registerUseFunction(ItemID.lava2, function(coords, item, block){
 World.setBlock(coords.relative.x,coords.relative.y,coords.relative.z, BlockID.lava2);
Player.decreaseCarriedItem(1);
});

//дроп

Block.registerDropFunction("lava2", function(coords, id, data, diggingLevel, toolLevel){      return [[ItemID.lava2, 1, data]]; });





//создаем блок с рендером

var Block_TYPE = Block.createSpecialType({ 
lightlevel: 10
}); 
IDRegistry.genBlockID("lava3");
Block.createBlock("lava3", [
 {name: "лава-лампа", texture: [["", 0]], inCreative: false}
],Block_TYPE)

function createLAVaRender(id, idMaterial, dataMaterial) {
var render = new ICRender.Model();
BlockRenderer.setStaticICRender (id, 0, render);
var model = BlockRenderer.createModel();
//ядро
model.addBox (5/16, 4/16, 5/16, 11/16, 15/16, 11/16,  BlockID.block9, 0);
model.addBox (4/16, 0, 4/16, 12/16, 4/16, 12/16,  BlockID.block9, 0);
model.addBox (6/16, 15/16, 6/16, 10/16, 1, 10/16,  BlockID.block9, 0);
render.addEntry(model);
}

createLAVaRender(BlockID.lava3, 20, 0);

//создаем предмет который будет ставить блок

IDRegistry.genItemID("lava3");
Item.createItem("lava3","лава-лампа",{name:"lava",meta:3},{stack:32});

//создаем функцию постановки блока по тапу предметом

Item.registerUseFunction(ItemID.lava3, function(coords, item, block){
 World.setBlock(coords.relative.x,coords.relative.y,coords.relative.z, BlockID.lava3);
Player.decreaseCarriedItem(1);
});

//дроп

Block.registerDropFunction("lava3", function(coords, id, data, diggingLevel, toolLevel){      return [[ItemID.lava3, 1, data]]; });




//создаем блок с рендером

var Block_TYPE = Block.createSpecialType({ 
lightlevel: 10
}); 
IDRegistry.genBlockID("lava4");
Block.createBlock("lava4", [
 {name: "лава-лампа", texture: [["", 0]], inCreative: false}
],Block_TYPE)

function createLAVARender(id, idMaterial, dataMaterial) {
var render = new ICRender.Model();
BlockRenderer.setStaticICRender (id, 0, render);
var model = BlockRenderer.createModel();
//ядро
model.addBox (5/16, 4/16, 5/16, 11/16, 15/16, 11/16,  BlockID.block10, 0);
model.addBox (4/16, 0, 4/16, 12/16, 4/16, 12/16,  BlockID.block10, 0);
model.addBox (6/16, 15/16, 6/16, 10/16, 1, 10/16,  BlockID.block10, 0);
render.addEntry(model);
}

createLAVARender(BlockID.lava4, 20, 0);

//создаем предмет который будет ставить блок

IDRegistry.genItemID("lava4");
Item.createItem("lava4","лава-лампа",{name:"lava",meta:4},{stack:32});

//создаем функцию постановки блока по тапу предметом

Item.registerUseFunction(ItemID.lava4, function(coords, item, block){
 World.setBlock(coords.relative.x,coords.relative.y,coords.relative.z, BlockID.lava4);
Player.decreaseCarriedItem(1);
});

//дроп

Block.registerDropFunction("lava4", function(coords, id, data, diggingLevel, toolLevel){      return [[ItemID.lava4, 1, data]]; });




//создаем блок с рендером

var Block_TYPE = Block.createSpecialType({ 
lightlevel: 10
}); 
IDRegistry.genBlockID("lava5");
Block.createBlock("lava5", [
 {name: "лава-лампа", texture: [["", 0]], inCreative: false}
],Block_TYPE)

function createLAAVARender(id, idMaterial, dataMaterial) {
var render = new ICRender.Model();
BlockRenderer.setStaticICRender (id, 0, render);
var model = BlockRenderer.createModel();
//ядро
model.addBox (5/16, 4/16, 5/16, 11/16, 15/16, 11/16,  BlockID.block11, 0);
model.addBox (4/16, 0, 4/16, 12/16, 4/16, 12/16,  BlockID.block11, 0);
model.addBox (6/16, 15/16, 6/16, 10/16, 1, 10/16,  BlockID.block11, 0);
render.addEntry(model);
}

createLAAVARender(BlockID.lava5, 20, 0);

//создаем предмет который будет ставить блок

IDRegistry.genItemID("lava5");
Item.createItem("lava5","лава-лампа",{name:"lava",meta:5},{stack:32});

//создаем функцию постановки блока по тапу предметом

Item.registerUseFunction(ItemID.lava5, function(coords, item, block){
 World.setBlock(coords.relative.x,coords.relative.y,coords.relative.z, BlockID.lava5);
Player.decreaseCarriedItem(1);
});

//дроп

Block.registerDropFunction("lava5", function(coords, id, data, diggingLevel, toolLevel){      return [[ItemID.lava5, 1, data]]; });




//создаем блок с рендером

var Block_TYPE = Block.createSpecialType({ 
lightlevel: 10
}); 
IDRegistry.genBlockID("lava6");
Block.createBlock("lava6", [
 {name: "лава-лампа", texture: [["", 0]], inCreative: false}
],Block_TYPE)

function createLAAVAARender(id, idMaterial, dataMaterial) {
var render = new ICRender.Model();
BlockRenderer.setStaticICRender (id, 0, render);
var model = BlockRenderer.createModel();
//ядро
model.addBox (5/16, 4/16, 5/16, 11/16, 15/16, 11/16,  BlockID.block12, 0);
model.addBox (4/16, 0, 4/16, 12/16, 4/16, 12/16,  BlockID.block12, 0);
model.addBox (6/16, 15/16, 6/16, 10/16, 1, 10/16,  BlockID.block12, 0);
render.addEntry(model);
}

createLAAVAARender(BlockID.lava6, 20, 0);

//создаем предмет который будет ставить блок

IDRegistry.genItemID("lava6");
Item.createItem("lava6","лава-лампа",{name:"lava",meta:6},{stack:32});

//создаем функцию постановки блока по тапу предметом

Item.registerUseFunction(ItemID.lava6, function(coords, item, block){
 World.setBlock(coords.relative.x,coords.relative.y,coords.relative.z, BlockID.lava6);
Player.decreaseCarriedItem(1);
});

//дроп

Block.registerDropFunction("lava6", function(coords, id, data, diggingLevel, toolLevel){      return [[ItemID.lava6, 1, data]]; });

Recipes.addShaped({id: ItemID.lava1, count: 1, data: 0}, [ 
" x ", 
"xax", 
"xbx" 
], ['x', 102, 0, 'a', 348, 0, 'b', 351, 13]);

Recipes.addShaped({id: ItemID.lava2, count: 1, data: 0}, [ 
" x ", 
"xax", 
"xbx" 
], ['x', 102, 0, 'a', 348, 0, 'b', 351, 12]);

Recipes.addShaped({id: ItemID.lava3, count: 1, data: 0}, [ 
" x ", 
"xax", 
"xbx" 
], ['x', 102, 0, 'a', 348, 0, 'b', 351, 11]);

Recipes.addShaped({id: ItemID.lava4, count: 1, data: 0}, [ 
" x ", 
"xax", 
"xbx" 
], ['x', 102, 0, 'a', 348, 0, 'b', 351, 4]);

Recipes.addShaped({id: ItemID.lava5, count: 1, data: 0}, [ 
" x ", 
"xax", 
"xbx" 
], ['x', 102, 0, 'a', 348, 0, 'b', 351, 10]);

Recipes.addShaped({id: ItemID.lava6, count: 1, data: 0}, [ 
" x ", 
"xax", 
"xbx" 
], ['x', 102, 0, 'a', 348, 0, 'b', 351, 1]);