function randomInt(min, max) { 
    return Math.floor(Math.random() * (max - min + 1)) + min; 
}
IMPORT("ToolLib");
IMPORT("TileRender");

ToolAPI.addToolMaterial("forester", {durability: 200, level: 2, efficiency: 1, damage: 4, enchantability: 4});
IDRegistry.genItemID("foresters");
Item.createItem("foresters", "Forester Knife", {name: "forester_knife", meta: 0}, {stack: 1});

Recipes.addShaped({id: ItemID.foresters, count: 1, data: 0}, [
 "oco",
 "odo"
], ["c", 268, 0, "d", 318, 0]);
ToolLib.setTool(ItemID.foresters, "forester", ToolType.sword);

//BERRIES
IDRegistry.genItemID("blueberries");
Item.createFoodItem("blueberries", "Blueberries", {name: "blueberry"},{isTech:false,food: 1});


IDRegistry.genItemID("blueberryPips");
Item.createFoodItem("blueberryPips", "Blueberry Pips", {name: "blueberry_pips"},{isTech:false,food: 1});

IDRegistry.genItemID("raspberry");
Item.createFoodItem("raspberry", "Raspberry", {name: "raspberry"},{isTech:false,food: 2});


IDRegistry.genItemID("raspberryPips");
Item.createFoodItem("raspberryPips", "Raspberry Pips", {name: "raspberry_pips"},{isTech:false,food: 1});

IDRegistry.genItemID("lingonberry");
Item.createFoodItem("lingonberry", "Lingonberry", {name: "lingonberry"},{isTech:false,food: 1});


IDRegistry.genItemID("lingonberryPips");
Item.createFoodItem("lingonberryPips", "Lingonberry Pips", {name: "lingonberry_pips"},{isTech:false,food: 1});

Recipes.addShapeless({id: ItemID.blueberryPips, count: 1, data: 0}, [{id: ItemID.blueberries, data: 0}]);
Recipes.addShapeless({id: ItemID.raspberryPips, count: 1, data: 0}, [{id: ItemID.raspberry, data: 0}]);
Recipes.addShapeless({id: ItemID.lingonberryPips, count: 1, data: 0}, [{id: ItemID.lingonberry, data: 0}]);





//JEMS
IDRegistry.genItemID("sweetJam");
Item.createFoodItem("sweetJam", "Sweet Berry Jam", {name: "sweet_berry_jam"},{isTech:false,food: 3});
Recipes.addFurnace(477, ItemID.sweetJam, 0);

IDRegistry.genItemID("blueberryJam");
Item.createFoodItem("blueberryJam", "Blueberries Jam", {name: "blueberry_jam"},{isTech:false,food: 3});
Recipes.addFurnace(ItemID.blueberries, ItemID.blueberryJam, 0);

IDRegistry.genItemID("raspberryJam");
Item.createFoodItem("raspberryJam", "Raspberry Jam", {name: "raspberry_jam"},{isTech:false,food: 3});
Recipes.addFurnace(ItemID.raspberry, ItemID.raspberryJam, 0);

IDRegistry.genItemID("lingonberryJam");
Item.createFoodItem("lingonberryJam", "Lingonberry Jam", {name: "lingonberry_jam"},{isTech:false,food: 3});
Recipes.addFurnace(ItemID.lingonberry, ItemID.lingonberryJam, 0);

IDRegistry.genItemID("mixedJam");
Item.createFoodItem("mixedJam", "Mixed Jam", {name: "mixed_berry_jam"},{isTech:false,food: 8});
Recipes.addShaped({id: ItemID.mixedJam, count: 1, data: 0}, [
 "acb",
 "odo"
], ["a", ItemID.sweetJam, 0, "c", ItemID.blueberryJam, 0, "b", ItemID.raspberryJam, 0, "d", ItemID.lingonberryJam, 0]);


//BREAD
IDRegistry.genItemID("sweetBread");
Item.createFoodItem("sweetBread", "Sweet Berry Bread", {name: "sweet_berry_bread"},{isTech:false,food: 8});
Recipes.addShapeless({id: ItemID.sweetBread, count: 1, data: 0}, [{id: ItemID.sweetJam, data: 0}, {id: 297, data: 0}]);

IDRegistry.genItemID("blueberryBread");
Item.createFoodItem("blueberryBread", "Blueberry Bread", {name: "blueberry_bread"},{isTech:false,food: 8});
Recipes.addShapeless({id: ItemID.blueberryBread, count: 1, data: 0}, [{id: ItemID.blueberryJam, data: 0}, {id: 297, data: 0}]);

IDRegistry.genItemID("raspberryBread");
Item.createFoodItem("raspberryBread", "Raspberry Bread", {name: "raspberry_bread"},{isTech:false,food: 8});
Recipes.addShapeless({id: ItemID.raspberryBread, count: 1, data: 0}, [{id: ItemID.raspberryJam, data: 0}, {id: 297, data: 0}]);

IDRegistry.genItemID("lingonberryBread");
Item.createFoodItem("lingonberryBread", "Lingonberry Bread", {name: "lingonberry_bread"},{isTech:false,food: 8});
Recipes.addShapeless({id: ItemID.lingonberryBread, count: 1, data: 0}, [{id: ItemID.lingonberryJam, data: 0}, {id: 297, data: 0}]);

IDRegistry.genItemID("mixedBread");
Item.createFoodItem("mixedBread", "Mixed Bread", {name: "mixed_berry_bread"},{isTech:false,food: 9});
Recipes.addShapeless({id: ItemID.mixedBread, count: 1, data: 0}, [{id: ItemID.mixedJam, data: 0}, {id: 297, data: 0}]);

//PANCKAKES
IDRegistry.genItemID("Panckakes");
Item.createFoodItem("Panckakes", "Honey Panckakes", {name: "pancakes"},{isTech:false,food: 8});
Recipes.addShapeless({id: ItemID.Panckakes, count: 1, data: 0}, [{id: 296, data: 0}, {id: 353, data: 0}]);

IDRegistry.genItemID("honeyPanckakes");
Item.createFoodItem("honeyPanckakes", "Honey Panckakes", {name: "honey_pancakes"},{isTech:false,food: 8});
Recipes.addShapeless({id: ItemID.honeyPanckakes, count: 3, data: 0}, [{id: ItemID.Panckakes, data: 0}, {id: ItemID.Panckakes, data: 0}, {id: ItemID.Panckakes, data: 0}, {id: 280, data: 0}]);

IDRegistry.genItemID("sweetPanckakes");
Item.createFoodItem("sweetPanckakes", "Berry Panckakes", {name: "berry_pancakes"},{isTech:false,food: 8});
Recipes.addShapeless({id: ItemID.sweetPanckakes, count: 3, data: 0}, [{id: ItemID.honeyPanckakes, data: 0}, {id: ItemID.honeyPanckakes, data: 0}, {id: ItemID.honeyPanckakes, data: 0}, {id: ItemID.mixedJam, data: 0}]);

//PIES 
IDRegistry.genItemID("sweetPie");
Item.createFoodItem("sweetPie", "Sweet Berry Panckakes", {name: "sweet_berry_pie"},{isTech:false,food: 10});
Recipes.addShapeless({id: ItemID.sweetPie, count: 1, data: 0}, [{id: ItemID.sweetJam, data: 0}, {id: 344, data: 0}, {id: 296, data: 0}, {id: 296, data: 0}]);

IDRegistry.genItemID("blueberryPie");
Item.createFoodItem("blueberryPie", "Blueberry Panckakes", {name: "blueberry_pie"},{isTech:false,food: 10});
Recipes.addShapeless({id: ItemID.blueberryPie, count: 3, data: 0}, [{id: ItemID.blueberryJam, data: 0}, {id: 344, data: 0}, {id: 296, data: 0}, {id: 296, data: 0}]);

IDRegistry.genItemID("raspberryPie");
Item.createFoodItem("raspberryPie", "Raspberry Panckakes", {name: "raspberry_pie"},{isTech:false,food: 10});
Recipes.addShapeless({id: ItemID.raspberryPie, count: 3, data: 0}, [{id: ItemID.raspberryJam, data: 0}, {id: 344, data: 0}, {id: 296, data: 0}, {id: 296, data: 0}]);

IDRegistry.genItemID("lingonberryPie");
Item.createFoodItem("lingonberryPie", "Lingonberry Panckakes", {name: "lingonberry_pie"},{isTech:false,food: 10});
Recipes.addShapeless({id: ItemID.lingonberryPie, count: 3, data: 0}, [{id: ItemID.lingonberryJam, data: 0}, {id: 344, data: 0}, {id: 296, data: 0}, {id: 296, data: 0}]);

//OTHER
IDRegistry.genItemID("meatSweeted");
Item.createFoodItem("meatSweeted", "Lingonberry Ham", {name: "lingonberry_glazed_ham"},{isTech:false,food: 16});
Recipes.addShapeless({id: ItemID.meatSweeted, count: 1, data: 0}, [{id: ItemID.lingonberry, data: 0}, {id: 320, data: 0}, {id: 296, data: 0}]);

IDRegistry.genItemID("blueberryMuffin");
Item.createFoodItem("blueberryMuffin", "Lingonberry Muffin", {name: "blueberry_muffin"},{isTech:false,food: 16});
Recipes.addShapeless({id: ItemID.blueberryMuffin, count: 1, data: 0}, [{id: ItemID.lingonberry, data: 0}, {id: 320, data: 0}, {id: 296, data: 0}]);

IDRegistry.genItemID("raspberryCookie");
Item.createFoodItem("raspberryCookie", "Raspberry Cookie", {name: "raspberry_cookie"},{isTech:false,food: 7});
Recipes.addShapeless({id: ItemID.raspberryCookie, count: 3, data: 0}, [{id: ItemID.raspberryJam, data: 0}, {id: 344, data: 0}, {id: 296, data: 0}]);

//SHROOMS
IDRegistry.genBlockID("boletus"); 
Block.createBlock("boletus", [
{name: "Boletus", texture: [["boletus", 0]],inCreative: true}]); 
TileRenderer.setPlantModel(BlockID.boletus, 0, "boletus", 0);

IDRegistry.genItemID("boletus");
Item.createItem("boletus", "Boletus", {name: "boletus", meta: 0}, {stack: 64});

IDRegistry.genItemID("boletusCooked");
Item.createFoodItem("boletusCooked", "Boletus Cooked", {name: "cooked_boletus"},{isTech:false,food: 6});
Recipes.addShapeless({id: ItemID.boletusCooked, count: 1, data: 0}, [{id: ItemID.boletus, data: 0}]);

IDRegistry.genItemID("boletusStew");
Item.createFoodItem("boletusStew", "Boletus Stew", {name: "boletus_stew"},{isTech:false,food: 8});
Recipes.addShapeless({id: ItemID.boletusStew, count: 3, data: 0}, [{id: 281, data: 0}, {id: ItemID.boletus, data: 0}, {id: ItemID.boletus, data: 0}]);
Callback.addCallback("FoodEaten",function(heal, satRatio, player){
var coords = Entity.getPosition(player);
if(Entity.getCarriedItem(player).id==ItemID.boletusStew){
World.drop(coords.x + 0.5, coords.y + 0.1, coords.z + 0.5, 281, 1, 0)
}});

IDRegistry.genBlockID("chanterelle"); 
Block.createBlock("chanterelle", [
{name: "Chanterelle", texture: [["chanterelle", 0]],inCreative: true}]); 
TileRenderer.setPlantModel(BlockID.chanterelle, 0, "chanterelle", 0);

IDRegistry.genItemID("chanterelle");
Item.createItem("chanterelle", "Chanterelle", {name: "chanterelle", meta: 0}, {stack: 64});

IDRegistry.genItemID("chanterelleCooked");
Item.createFoodItem("chanterelleCooked", "Chanterelle Cooked", {name: "cooked_chanterelle"},{isTech:false,food: 6});
Recipes.addShapeless({id: ItemID.chanterelleCooked, count: 1, data: 0}, [{id: ItemID.chanterelle, data: 0}]);

IDRegistry.genItemID("chanterelleStew");
Item.createFoodItem("chanterelleStew", "Boletus Stew", {name: "chanterelle_stew"},{isTech:false,food: 8});
Recipes.addShapeless({id: ItemID.chanterelleStew, count: 3, data: 0}, [{id: 281, data: 0}, {id: ItemID.chanterelle, data: 0}, {id: ItemID.chanterelle, data: 0}]);
Callback.addCallback("FoodEaten",function(heal, satRatio, player){
var coords = Entity.getPosition(player);
if(Entity.getCarriedItem(player).id==ItemID.chanterelleStew){
World.drop(coords.x + 0.5, coords.y + 0.1, coords.z + 0.5, 281, 1, 0)
}});

Block.registerDropFunction("boletus", function(coords, blockID){
    World.drop(coords.relative.x + 0.5, coords.relative.y + 0.1, coords.relative.z + 0.5, ItemID.boletus, 1, 0);
});
Block.registerDropFunction("chanterelle", function(coords, blockID){
    World.drop(coords.relative.x + 0.5, coords.relative.y + 0.1, coords.relative.z + 0.5, ItemID.chanterelle, 1, 0);
});