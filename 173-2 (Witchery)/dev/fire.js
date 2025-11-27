var BLOCK_TYPE_LOW_LIGHT = Block.createSpecialType({ 
 lightlevel: 11});


IDRegistry.genItemID("fire");
Item.createItem("fire","Костёр", {name:"fire"},{stack:1});


Recipes.addShaped({id: ItemID.fire, count: 1, data: 0}, [
"oxo",
"xax",
"xxx"
], ['x', 17, 0,'a',259,0]);




Callback.addCallback("ItemUse", function(coords, item, block){
if(item.id==ItemID.fire){
   World.setBlock(coords.x,coords.y+1, coords.z, BlockID.fire, 0)
	Player.setCarriedItem(item.id, item.count-1, item.data, item.enchant);
}
});


Block.registerDropFunctionForID(BlockID.fire, function(coords, id, data, diggingLevel, toolLevel){ 
return [[ItemID.fire, 1, 0]];
});



IDRegistry.genBlockID("fire"); 
Block.createBlock("fire", [{name: "Костёр", texture: [["stone", 0]], inCreative: true}],BLOCK_TYPE_LOW_LIGHT);

var renderFire = new ICRender.Model(); 
BlockRenderer.setStaticICRender(BlockID.fire, 0, renderFire); 

var modelFire = BlockRenderer.createModel();



modelFire.addBox(7/16, 0/16, 3/16, 9/16, 2/16,13/16, "wood", 0);//полено1

modelFire.addBox(3/16, 0/16, 7/16, 13/16, 2/16,9/16, "wood", 0);//полено2

modelFire.addBox(7/16, 2/16, 4/16, 9/16, 4/16,6/16, "wood", 0);//полено1/3

modelFire.addBox(7/16, 4/16, 5/16, 9/16, 6/16,7/16, "wood", 0);//полено2/3

modelFire.addBox(7/16, 6/16, 7/16, 9/16, 8/16,9/16, "wood", 0);//полено3/3

modelFire.addBox(7/16, 2/16, 10/16, 9/16, 4/16,12/16, "wood", 0);//полено1/2@

modelFire.addBox(7/16, 4/16, 9/16, 9/16, 6/16,11/16, "wood", 0);//полено2/2@


modelFire.addBox(10/16, 2/16, 7/16, 12/16, 4/16,9/16, "wood", 0);//полено1/2@@

modelFire.addBox(9/16, 4/16, 7/16, 11/16, 6/16,9/16, "wood", 0);//полено2/2@@



modelFire.addBox(4/16, 2/16, 7/16, 6/16, 4/16,9/16, "wood", 0);//полено1/2&

modelFire.addBox(5/16, 4/16, 7/16, 7/16, 6/16,9/16, "wood", 0);//полено2/2&

//fire
modelFire.addBox(8/16, 8/16, 8/16, 9/16, 9/16,9/16, "red", 0);

modelFire.addBox(8/16, 4/16, 8/16, 9/16, 5/16,9/16, "red", 0);

modelFire.addBox(4/16, 4/16, 7/16, 5/16, 5/16,8/16, "red", 0);

modelFire.addBox(7/16, 6/16, 5/16, 8/16, 7/16,6/16, "red", 0);

modelFire.addBox(7/16, 6/16, 8/16, 9/16, 8/16,9/16, "red", 0);//fire/1/2

modelFire.addBox(8/16, 6/16, 7/16, 9/16, 8/16,9/16, "red", 0);//fire/2/2

renderFire.addEntry(modelFire);

Block.setBlockShape(BlockID.fire, {x: 0, y: 0, z: 0}, {x: 1, y: 1, z: 1});

