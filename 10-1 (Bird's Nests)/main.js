//Мод сделал Олег Вохрин (MrCreeperCowboy) 

IDRegistry.genItemID("birdNest");
Item.createItem("birdNest", "Bird Nest", {name:"birdNest"}, {});

function nestDrop(id, data, chance, coords){
   var ggg = Math.random() * 1;
   if(ggg <= chance){World.drop(coords.x, coords.y + 1, coords.z, id, 1)};
};

Callback.addCallback("DestroyBlock", function(coords, block, player){
if(block.id ==18){
var fff = Math.random() * 1;
if(fff <= 0.05){World.drop(coords.x, coords.y, coords.z, ItemID.birdNest, 1)}
}
});

Item.registerUseFunction(ItemID.birdNest, function(coords, item, block){
nestDrop(280, 0, 1, coords);
nestDrop(264, 0, 0.01, coords);
nestDrop(18, 0, 0.125, coords);
nestDrop(18, 1, 0.125, coords);
nestDrop(18, 2, 0.125, coords);
nestDrop(18, 3, 0.125, coords);
nestDrop(287, 0, 0.25, coords);
nestDrop(288, 0, 0.5, coords);
nestDrop(295, 0, 0.33, coords);
nestDrop(296, 0, 0.5, coords);
nestDrop(318, 0, 0.33, coords);
nestDrop(341, 0, 0.05, coords);
nestDrop(334, 0, 0.25, coords);
nestDrop(349, 0, 0.1, coords);
nestDrop(348, 0, 0.2, coords);
nestDrop(344, 0, 0.75, coords);
nestDrop(371, 0, 0.33, coords);
nestDrop(361, 0, 0.1, coords);
nestDrop(362, 0, 0.1, coords);
nestDrop(375, 0, 0.05, coords);
nestDrop(280, 0, 0.75, coords);
nestDrop(280, 0, 0.5, coords);
Player.setCarriedItem (item.id, item.count - 1, item.data);
});

Translation.addTranslation("Bird Nest", {ru: "Птичье Гнездо"});