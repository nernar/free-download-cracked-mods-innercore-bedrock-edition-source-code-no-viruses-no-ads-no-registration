//создаем блок с рендером

IDRegistry.genBlockID("stol1");
Block.createBlock("stol1", [
 {name: "stol1", texture: [["", 0]], inCreative: false}
])
 
function createStoLRender(id, idMaterial, dataMaterial) {
var render = new ICRender.Model();
BlockRenderer.setStaticICRender (id, 0, render);
var model = BlockRenderer.createModel();
model.addBox (1/16, 0, 1/16, 4/16, 13/16, 4/16,  BlockID.block14, 0);
model.addBox (12/16, 0, 1/16, 15/16, 13/16, 4/16,  BlockID.block14, 0);
model.addBox (1/16, 0, 12/16, 4/16, 13/16, 15/16,  BlockID.block14, 0);
model.addBox (12/16, 0, 12/16, 15/16, 13/16, 15/16,  BlockID.block14, 0);
model.addBox (0, 13/16, 0, 1, 14/16, 1,  BlockID.block14, 0);
render.addEntry(model);
}

createStoLRender(BlockID.stol1, 5, 0);

//создаем предмет который будет ставить блок

IDRegistry.genItemID("stol1");
Item.createItem("stol1","стол",{name:"stol",meta:1},{stack:1});

//создаем функцию постановки блока по тапу предметом

Item.registerUseFunction(ItemID.stol1, function(coords, item, block){
 World.setBlock(coords.relative.x,coords.relative.y,coords.relative.z, BlockID.stol1);
Player.decreaseCarriedItem(1);
});

//дроп

Block.registerDropFunction("stol1", function(coords, id, data, diggingLevel, toolLevel){      return [[ItemID.stol1, 1, data]]; });





//создаем блок с рендером

IDRegistry.genBlockID("styl1");
Block.createBlock("styl1", [
 {name: "styl1", texture: [["", 0]], inCreative: false}
])
 
function createStyLRender(id, idMaterial, dataMaterial) {
var render = new ICRender.Model();
BlockRenderer.setStaticICRender (id, 0, render);
var model = BlockRenderer.createModel();
model.addBox (3/16, 0, 3/16, 4/16, 8/16, 4/16,  BlockID.block14, 0);
model.addBox (12/16, 0, 3/16, 13/16, 8/16, 4/16,  BlockID.block14, 0);
model.addBox (3/16, 0, 12/16, 4/16, 8/16, 13/16,  BlockID.block14, 0);
model.addBox (12/16, 0, 12/16, 13/16, 8/16, 13/16,  BlockID.block14, 0);
model.addBox (3/16, 8/16, 3/16, 13/16, 9/16, 13/16,  BlockID.block14, 0);
render.addEntry(model);
}

createStyLRender(BlockID.styl1, 5, 0);

//создаем предмет который будет ставить блок

IDRegistry.genItemID("styl1");
Item.createItem("styl1","стул",{name:"styl1",meta:0},{stack:1});

//создаем функцию постановки блока по тапу предметом

Item.registerUseFunction(ItemID.styl1, function(coords, item, block){
 World.setBlock(coords.relative.x,coords.relative.y,coords.relative.z, BlockID.styl1);
Player.decreaseCarriedItem(1);
});

//дроп

Block.registerDropFunction("styl1", function(coords, id, data, diggingLevel, toolLevel){      return [[ItemID.styl1, 1, data]]; });