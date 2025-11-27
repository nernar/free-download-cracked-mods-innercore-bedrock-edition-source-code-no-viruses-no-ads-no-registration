//создаем блок с рендером

IDRegistry.genBlockID("stol");
Block.createBlock("stol", [
 {name: "stol", texture: [["", 0]], inCreative: false}
])
 
function createStolRender(id, idMaterial, dataMaterial) {
var render = new ICRender.Model();
BlockRenderer.setStaticICRender (id, 0, render);
var model = BlockRenderer.createModel();
model.addBox (1/16, 0, 1/16, 4/16, 13/16, 4/16,  BlockID.block13, 0);
model.addBox (12/16, 0, 1/16, 15/16, 13/16, 4/16,  BlockID.block13, 0);
model.addBox (1/16, 0, 12/16, 4/16, 13/16, 15/16,  BlockID.block13, 0);
model.addBox (12/16, 0, 12/16, 15/16, 13/16, 15/16,  BlockID.block13, 0);
model.addBox (0, 13/16, 0, 1, 14/16, 1,  BlockID.block13, 0);
render.addEntry(model);
}

createStolRender(BlockID.stol, 5, 0);

//создаем предмет который будет ставить блок

IDRegistry.genItemID("stol");
Item.createItem("stol","стол",{name:"stol",meta:0},{stack:1});

//создаем функцию постановки блока по тапу предметом

Item.registerUseFunction(ItemID.stol, function(coords, item, block){
 World.setBlock(coords.relative.x,coords.relative.y,coords.relative.z, BlockID.stol);
Player.decreaseCarriedItem(1);
});

//дроп

Block.registerDropFunction("stol", function(coords, id, data, diggingLevel, toolLevel){      return [[ItemID.stol, 1, data]]; });




//создаем блок с рендером

IDRegistry.genBlockID("styl");
Block.createBlock("styl", [
 {name: "styl", texture: [["", 0]], inCreative: false}
])
 
function createStylRender(id, idMaterial, dataMaterial) {
var render = new ICRender.Model();
BlockRenderer.setStaticICRender (id, 0, render);
var model = BlockRenderer.createModel();
model.addBox (3/16, 0, 3/16, 4/16, 8/16, 4/16,  BlockID.block13, 0);
model.addBox (12/16, 0, 3/16, 13/16, 8/16, 4/16,  BlockID.block13, 0);
model.addBox (3/16, 0, 12/16, 4/16, 8/16, 13/16,  BlockID.block13, 0);
model.addBox (12/16, 0, 12/16, 13/16, 8/16, 13/16,  BlockID.block13, 0);
model.addBox (3/16, 8/16, 3/16, 13/16, 9/16, 13/16,  BlockID.block13, 0);
render.addEntry(model);
}

createStylRender(BlockID.styl, 5, 0);

//создаем предмет который будет ставить блок

IDRegistry.genItemID("styl");
Item.createItem("styl","стул",{name:"styl",meta:0},{stack:1});

//создаем функцию постановки блока по тапу предметом

Item.registerUseFunction(ItemID.styl, function(coords, item, block){
 World.setBlock(coords.relative.x,coords.relative.y,coords.relative.z, BlockID.styl);
Player.decreaseCarriedItem(1);
});

//дроп

Block.registerDropFunction("styl", function(coords, id, data, diggingLevel, toolLevel){      return [[ItemID.styl, 1, data]]; });