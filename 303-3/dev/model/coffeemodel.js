var c0 = 0 / 16;
 var c1 = 1 / 16;
 var c2 = 2 / 16;
 var c3 = 3 / 16;
 var c4 = 4 / 16;
 var c5 = 5 / 16;
 var c6 = 6 / 16;
 var c7 = 7 / 16;
 var c8 = 8 / 16;
 var c9 = 9 / 16;
 var c10 = 10 / 16;
 var c11 = 11 / 16;
 var c12 = 12 / 16;
 var c13 = 13 / 16;
 var c14 = 14 / 16;
 var c15 = 15 / 16;
 var c16 = 16 / 16;
 
var add = {
coffeeModel1: function(id,texture,i){
IDRegistry.genBlockID(id); 
Block.createBlock(id, [
	{name: "", texture: 
[[texture, 0], ["杯子", 0], 
["杯子", 0]], inCreative: false}]);
IDRegistry.genBlockID(id+"Plate"); 
Block.createBlock(id+"Plate", [
	{name: "", texture: 
[[texture, 0], ["杯子", 0], 
["杯子", 0]], inCreative: false}]);
Block.registerDropFunctionForID(BlockID[id], function(id, data){
     return [[]];
     });
Block.registerDropFunctionForID(BlockID[id+"Plate"], function(id, data){
     return [[]];
     });
var coffee = new ICRender.CollisionShape();
var entry = coffee.addEntry();
entry.addBox(c5, c0, c5, c11, c8, c11);
BlockRenderer.setCustomCollisionShape(BlockID[id], 0, coffee);
coffee = new ICRender.Model();
var model = BlockRenderer.Model();
model.addBox(c7, c6, c12, c9, c7, c14, [["杯子",0]]);
model.addBox(c7, c2, c12, c9, c3, c14, [["杯子",0]]);
model.addBox(c5, c0, c5, c11, c1, c11, [["杯子",0]]);
model.addBox(c5, c1, c4, c11, c8, c5, [["杯子",0]] );
model.addBox(c5, c1, c11, c11, c8, c12, [["杯子",0]]);
model.addBox(c4, c1, c5, c5, c8, c11, [["杯子",0]]);
model.addBox(c11, c1, c5, c12, c8, c11, [["杯子",0]]);
model.addBox(c7, c3, c14, c9, c7, c15, [["杯子",0]]);
model.addBox(c5, c6, c5, c11,  (i+2)/16, c11, [[texture,0]]);
coffee.addEntry(model);
BlockRenderer.setStaticICRender(BlockID[id], 0, coffee);
var plate = new ICRender.CollisionShape();
var entry = plate.addEntry();
entry.addBox(c1, c0, c1, c15, c14, c15);
BlockRenderer.setCustomCollisionShape(BlockID[id+"Plate"], 0, plate);
plate = new ICRender.Model();
var model = BlockRenderer.Model();
model.addBox(c7, c6, c12, c9, c7, c14, [["杯子",0]]);
model.addBox(c7, c2, c12, c9, c3, c14, [["杯子",0]]);
model.addBox(c5, c0, c5, c11, c1, c11, [["杯子",0]]);
model.addBox(c5, c1, c4, c11, c8, c5, [["杯子",0]] );
model.addBox(c5, c1, c11, c11, c8, c12, [["杯子",0]]);
model.addBox(c4, c1, c5, c5, c8, c11, [["杯子",0]]);
model.addBox(c11, c1, c5, c12, c8, c11, [["杯子",0]]);
model.addBox(c7, c3, c14, c9, c7, c15, [["杯子",0]]);
model.addBox(c3, c1, c14, c13, c2, c15, [["杯子",0]]);
model.addBox(c3, c1, c1, c13, c2, c2, [["杯子",0]]);
model.addBox(c3, c0, c2, c13, c1, c3, [["杯子",0]]);
model.addBox(c3, c0, c13, c13, c1, c14, [["杯子",0]]);
model.addBox(c13, c1, c13, c14, c2, c14, [["杯子",0]]);
model.addBox(c2, c1, c13, c3, c2, c14, [["杯子",0]]);
model.addBox(c2, c1, c2, c14, c2, c3, [["杯子",0]]);
model.addBox(c14, c1, c3, c15, c2, c13, [["杯子",0]]);
model.addBox(c1, c1, c3, c2, c2, c13, [["杯子",0]]);
model.addBox(c2, c0, c3, c14, c1, c13, [["杯子",0]]);
model.addBox(c5, c6, c5, c11, (i+2)/16, c11, [[texture,0]]);
plate.addEntry(model);
BlockRenderer.setStaticICRender(BlockID[id+"Plate"], 0, plate);
Block.registerDropFunction(id+"Plate", function(c, d, e, a, b){
 return [[ItemID[id],1,0],[ItemID.coffeeworkshop$plate,1,0]];
});
}    
 }


add.coffeeModel1("coffeeworkshop$cup","texture",0);
add.coffeeModel1("coffeeworkshop$kbqn","texture10",7);
add.coffeeModel1("coffeeworkshop$nt","texture12",5);
add.coffeeModel1("coffeeworkshop$mk","texture13",7);
add.coffeeModel1("coffeeworkshop$jtmqd","texture11",7);
add.coffeeModel1("coffeeworkshop$ms","texture9",5);
add.coffeeModel1("coffeeworkshop$hkf","texture1",5);
add.coffeeModel1("coffeeworkshop$rekeke","texture5",5);
add.coffeeModel1("coffeeworkshop$xnkeke","texture6",5);
add.coffeeModel1("coffeeworkshop$mandarin","mandarin",5);
add.coffeeModel1("coffeeworkshop$smt","smt",5);