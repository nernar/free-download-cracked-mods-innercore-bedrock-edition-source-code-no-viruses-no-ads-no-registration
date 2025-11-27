ToolAPI.breakCarriedTool = function(damage){
	var item = Player.getCarriedItem(true);
	item.data += damage;
	if(item.data > Item.getMaxDamage(item.id)){
		item.id = 0;
	}
	Player.setCarriedItem(item.id, item.count, item.data, item.enchant);
}





IDRegistry.genItemID("point_obc");
Item.createItem("point_obc","Зелье Обсидиановой кожи.", {name:"point_obc"},{});
Item.setMaxDamage(ItemID.point_obc, 400);

Callback.addCallback("tick", function(){
if(Player.getCarriedItem().id==ItemID.point_obc){
Entity.addEffect(Player.get(), 11, 100, 2, false, false)

Entity.addEffect(Player.get(), 12, 100, 2, false, false)
ToolAPI.breakCarriedTool(1);
}
});


Callback.addCallback("ItemUse", function(coords, item, block){
if(item.id==ItemID.kolba_with_water&&block.id==BlockID.kotel_pust&&World.getBlockID(coords.x, coords.y-1, coords.z)==BlockID.fire){
   World.setBlock(coords.x,coords.y, coords.z, BlockID.kotel_water, 0)
	Player.setCarriedItem(item.id, item.count-1, item.data, item.enchant);
}
});



Callback.addCallback("ItemUse", function(coords, item, block){
if(item.id==ItemID.kolba_with_lava&&block.id==BlockID.kotel_water&&World.getBlockID(coords.x, coords.y-1, coords.z)==BlockID.fire){
   World.setBlock(coords.x,coords.y, coords.z, BlockID.kotel_water_lava, 0)
	Player.setCarriedItem(item.id, item.count-1, item.data, item.enchant);
}
});



Callback.addCallback("ItemUse", function(coords, item, block){
if(item.id==ItemID.kolba_pust&&block.id==BlockID.kotel_water_lava){
   World.drop(coords.x,coords.y, coords.z, ItemID.point_obc, 1)

World.setBlock(coords.x,coords.y, coords.z, BlockID.kotel_pust, 0)
	Player.setCarriedItem(item.id, item.count-1, item.data, item.enchant);
}
});




IDRegistry.genBlockID("kotel_water"); 
Block.createBlock("kotel_water", [{name: "Котёл пустой", texture: [["stone", 0]], inCreative: false}]);





Block.registerDropFunctionForID(BlockID.kotel_water, function(coords, id, data, diggingLevel, toolLevel){ 
return [[ItemID.kotel, 1, 0]];
});
var renderKotelW = new ICRender.Model(); 
BlockRenderer.setStaticICRender(BlockID.kotel_water, 0, renderKotelW); 

var modelKotelW = BlockRenderer.createModel();



modelKotelW.addBox(3/16, 0/16, 3/16, 13/16, 1/16,13/16, "obc", 0);//нижняя плита

modelKotelW.addBox(2/16, 1/16, 2/16, 14/16, 2/16,14/16, "obc", 0);//нижняя плита dop

modelKotelW.addBox(2/16, 2/16, 1/16, 14/16, 10/16,2/16, "obc", 0);//сторона1/4

modelKotelW.addBox(2/16, 2/16, 14/16, 14/16, 10/16,15/16, "obc", 0);//сторона2/4

modelKotelW.addBox(1/16, 2/16, 2/16, 2/16, 10/16,14/16, "obc", 0);//сторона3/4

modelKotelW.addBox(14/16, 2/16, 2/16, 15/16, 10/16,14/16, "obc", 0);//сторона4/4

modelKotelW.addBox(3/16, 10/16, 3/16, 13/16, 11/16,13/16, "obc", 0);//верхняя плита

modelKotelW.addBox(3/16, 11/16, 2/16, 13/16, 15/16,3/16, "obc", 0);//чаша1/4

modelKotelW.addBox(3/16, 11/16, 13/16, 13/16, 15/16,14/16, "obc", 0);//чаша2/4

modelKotelW.addBox(2/16, 11/16, 3/16, 3/16, 15/16,13/16, "obc", 0);//чаша3/4

modelKotelW.addBox(13/16, 11/16, 3/16, 14/16, 15/16,13/16, "obc", 0);//чаша4/4

modelKotelW.addBox(3/16, 11/16, 3/16, 13/16, 14/16,13/16, "water", 0);//налито
renderKotelW.addEntry(modelKotelW);

Block.setBlockShape(BlockID.kotel_water, {x: 0, y: 0, z: 0}, {x: 1, y: 1, z: 1});






IDRegistry.genBlockID("kotel_water_lava"); 
Block.createBlock("kotel_water_lava", [{name: "Котёл пустой", texture: [["stone", 0]], inCreative: false}]);





Block.registerDropFunctionForID(BlockID.kotel_water_lava, function(coords, id, data, diggingLevel, toolLevel){ 
return [[ItemID.kotel, 1, 0]];
});
var renderKotelWL = new ICRender.Model(); 
BlockRenderer.setStaticICRender(BlockID.kotel_water_lava, 0, renderKotelWL); 

var modelKotelWL = BlockRenderer.createModel();



modelKotelWL.addBox(3/16, 0/16, 3/16, 13/16, 1/16,13/16, "obc", 0);//нижняя плита

modelKotelWL.addBox(2/16, 1/16, 2/16, 14/16, 2/16,14/16, "obc", 0);//нижняя плита dop

modelKotelWL.addBox(2/16, 2/16, 1/16, 14/16, 10/16,2/16, "obc", 0);//сторона1/4

modelKotelWL.addBox(2/16, 2/16, 14/16, 14/16, 10/16,15/16, "obc", 0);//сторона2/4

modelKotelWL.addBox(1/16, 2/16, 2/16, 2/16, 10/16,14/16, "obc", 0);//сторона3/4

modelKotelWL.addBox(14/16, 2/16, 2/16, 15/16, 10/16,14/16, "obc", 0);//сторона4/4

modelKotelWL.addBox(3/16, 10/16, 3/16, 13/16, 11/16,13/16, "obc", 0);//верхняя плита

modelKotelWL.addBox(3/16, 11/16, 2/16, 13/16, 15/16,3/16, "obc", 0);//чаша1/4

modelKotelWL.addBox(3/16, 11/16, 13/16, 13/16, 15/16,14/16, "obc", 0);//чаша2/4

modelKotelWL.addBox(2/16, 11/16, 3/16, 3/16, 15/16,13/16, "obc", 0);//чаша3/4

modelKotelWL.addBox(13/16, 11/16, 3/16, 14/16, 15/16,13/16, "obc", 0);//чаша4/4

modelKotelWL.addBox(3/16, 11/16, 3/16, 13/16, 14/16,13/16, "black", 0);//налито
renderKotelWL.addEntry(modelKotelWL);

Block.setBlockShape(BlockID.kotel_water_lava, {x: 0, y: 0, z: 0}, {x: 1, y: 1, z: 1});








