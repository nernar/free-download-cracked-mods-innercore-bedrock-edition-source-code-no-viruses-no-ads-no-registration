IDRegistry.genItemID("kotel");
Item.createItem("kotel","Котёл ведьмы", {name:"kotel"},{stack:1});


Recipes.addShaped({id: ItemID.kotel, count: 1, data: 0}, [
"xox",
"xox",
"xxx"
], ['x', ItemID.obc_ignot, 0]);



IDRegistry.genBlockID("kotel_pust"); 
Block.createBlock("kotel_pust", [{name: "Котёл пустой", texture: [["stone", 0]], inCreative: true}]);


Callback.addCallback("ItemUse", function(coords, item, block){
if(item.id==ItemID.kotel){
   World.setBlock(coords.x,coords.y+1, coords.z, BlockID.kotel_pust, 0)
	Player.setCarriedItem(item.id, item.count-1, item.data, item.enchant);
}
});

Block.registerDropFunctionForID(BlockID.kotel_pust, function(coords, id, data, diggingLevel, toolLevel){ 
return [[ItemID.kotel, 1, 0]];
});
var renderKotel = new ICRender.Model(); 
BlockRenderer.setStaticICRender(BlockID.kotel_pust, 0, renderKotel); 

var modelKotel = BlockRenderer.createModel();



modelKotel.addBox(3/16, 0/16, 3/16, 13/16, 1/16,13/16, "obc", 0);//нижняя плита

modelKotel.addBox(2/16, 1/16, 2/16, 14/16, 2/16,14/16, "obc", 0);//нижняя плита dop

modelKotel.addBox(2/16, 2/16, 1/16, 14/16, 10/16,2/16, "obc", 0);//сторона1/4

modelKotel.addBox(2/16, 2/16, 14/16, 14/16, 10/16,15/16, "obc", 0);//сторона2/4

modelKotel.addBox(1/16, 2/16, 2/16, 2/16, 10/16,14/16, "obc", 0);//сторона3/4

modelKotel.addBox(14/16, 2/16, 2/16, 15/16, 10/16,14/16, "obc", 0);//сторона4/4

modelKotel.addBox(3/16, 10/16, 3/16, 13/16, 11/16,13/16, "obc", 0);//верхняя плита

modelKotel.addBox(3/16, 11/16, 2/16, 13/16, 15/16,3/16, "obc", 0);//чаша1/4

modelKotel.addBox(3/16, 11/16, 13/16, 13/16, 15/16,14/16, "obc", 0);//чаша2/4

modelKotel.addBox(2/16, 11/16, 3/16, 3/16, 15/16,13/16, "obc", 0);//чаша3/4

modelKotel.addBox(13/16, 11/16, 3/16, 14/16, 15/16,13/16, "obc", 0);//чаша4/4

renderKotel.addEntry(modelKotel);

Block.setBlockShape(BlockID.kotel_pust, {x: 0, y: 0, z: 0}, {x: 1, y: 1, z: 1});

