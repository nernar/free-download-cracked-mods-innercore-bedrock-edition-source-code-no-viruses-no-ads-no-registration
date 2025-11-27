var setBag2 = function( bag , cn ){
	if(bag !== "coffeeworkshop$bag_none"){
 IDRegistry.genBlockID(bag+"_double");
Block.createBlock(bag+"_double", [
{name:cn + "两袋", texture: [["coffeeworkshop$bag_none", 0],[bag, 0],["coffeeworkshop$bag_none", 0],["coffeeworkshop$bag_none", 0],["coffeeworkshop$bag_none", 0],["coffeeworkshop$bag_none", 0]], inCreative: true}]);
//Block.setBlockShape(BlockID[bag], {x:0, y:0, z:0}, {x:1, y:0.5, z:1}, -1);
function bagcocoaModel(id){
var render = new ICRender.Model();
 var model =   BlockRenderer.createModel();
    
 model.addBox (0,0,1/16,1,8/16,15/16,[["coffeeworkshop$bag_none", 0],[bag, 0],["coffeeworkshop$bag_none", 0],["coffeeworkshop$bag_none", 0],["coffeeworkshop$bag_none", 0],["coffeeworkshop$bag_none", 0]]);
model.addBox (1/16, 1/16, 15/16, 15/16,7/16, 1,[["coffeeworkshop$bag_none", 0]]);
model.addBox (1/16, 1/16, 0, 15/16,7/16, 1/16,[["coffeeworkshop$bag_none", 0]]);
model.addBox (0,8/16,1/16,1,16/16,15/16,[["coffeeworkshop$bag_none", 0],[bag, 0],["coffeeworkshop$bag_none", 0],["coffeeworkshop$bag_none", 0],["coffeeworkshop$bag_none", 0],["coffeeworkshop$bag_none", 0]]);
model.addBox (1/16, 9/16, 0/16, 15/16,15/16, 1/16,[["coffeeworkshop$bag_none", 0]]);
model.addBox (1/16, 9/16, 15/16, 15/16,15/16, 16/16,[["coffeeworkshop$bag_none", 0]]);
render.addEntry(model);

BlockRenderer.setStaticICRender(id, -1, render);
 }
 bagcocoaModel(BlockID[bag+"_double"]);
Recipes.addShaped({id: BlockID[bag+"_double"], count: 1, data: 0}, [
"aa"
], [ 'a', BlockID[bag], 0]);

 
 }
 };
 var setBag = function( bag , cn ){
 IDRegistry.genBlockID(bag);
Block.createBlock(bag, [
{name:cn + "袋", texture: [["coffeeworkshop$bag_none", 0],[bag, 0],["coffeeworkshop$bag_none", 0],["coffeeworkshop$bag_none", 0],["coffeeworkshop$bag_none", 0],["coffeeworkshop$bag_none", 0]], inCreative: true}]);
Block.setBlockShape(BlockID[bag], {x:0, y:0, z:0}, {x:1, y:0.5, z:1}, -1);
function bagcocoaModel(id){
var render = new ICRender.Model();
 var model =   BlockRenderer.createModel();
    
 model.addBox (0,0,1/16,1,8/16,15/16,[["coffeeworkshop$bag_none", 0],[bag, 0],["coffeeworkshop$bag_none", 0],["coffeeworkshop$bag_none", 0],["coffeeworkshop$bag_none", 0],["coffeeworkshop$bag_none", 0]]);
model.addBox (1/16, 1/16, 15/16, 15/16,7/16, 1,[["coffeeworkshop$bag_none", 0]]);
model.addBox (1/16, 1/16, 0, 15/16,7/16, 1/16,[["coffeeworkshop$bag_none", 0]]);
render.addEntry(model);

BlockRenderer.setStaticICRender(id, -1, render);
 }
 bagcocoaModel(BlockID[bag]);
 setBag2(bag,cn);
 };
 
 
 setBag("coffeeworkshop$bag_none","麻");
 setBag("coffeeworkshop$bag_cocoa","可可豆");
 setBag("coffeeworkshop$bag_cocoa_powder","可可粉");
 setBag("coffeeworkshop$bag_coffee","咖啡豆");
 setBag("coffeeworkshop$bag_coffee_powder","咖啡粉");
 setBag("coffeeworkshop$bag_coffee_raw","咖啡生豆");
 setBag("coffeeworkshop$bag_flour","面粉");
 setBag("coffeeworkshop$bag_sugar","砂糖");
 
 
 Recipes.addShaped({id: BlockID.coffeeworkshop$bag_none, count: 8, data: 0}, [
"x",
"a",
"x"
], [ 'x', 287, 0, 'a', 35, 0]);
var setBagRecipe = function ( d,iid ){
Recipes.addShaped({id: BlockID[iid], count: 1, data: 0}, [
"xaa",
"aaa",
"aaa"
], [ 'x', BlockID.coffeeworkshop$bag_none, 0, 'a', ItemID[d], 0]);
};

 setBagRecipe("coffeeworkshop$Cocoabean","coffeeworkshop$bag_cocoa");
 setBagRecipe("coffeeworkshop$Cocoapowder","coffeeworkshop$bag_cocoa_powder");
 setBagRecipe("coffeeworkshop$Cb","coffeeworkshop$bag_coffee");
 setBagRecipe("coffeeworkshop$coffeepowder","coffeeworkshop$bag_coffee_powder");
 setBagRecipe("coffeeworkshop$Rawc","coffeeworkshop$bag_coffee_raw");
 setBagRecipe("coffeeworkshop$flour","coffeeworkshop$bag_flour");
 
 Recipes.addShaped({id: BlockID.coffeeworkshop$bag_sugar, count: 1, data: 0}, [
"xaa",
"aaa",
"aaa"
], [ 'x', BlockID.coffeeworkshop$bag_none, 0, 'a',353 , 0]);

//沧海月明珠有泪，蓝田日暖玉生烟  2018.10.21