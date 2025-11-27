IDRegistry.genItemID("fcarrot");
Item.createFoodItem("fcarrot", "baked carrot", {name:"baked_carrot"}, {food:7});
Recipes.addFurnace(391, ItemID.fcarrot, 0);

IDRegistry.genItemID("fbread");
Item.createFoodItem("fbread", "baked bread", {name:"baked_bread"}, {food:10});
Recipes.addFurnace(297, ItemID.fbread, 0);

Recipes.addShaped({id: 81, count: 1, data: 0},[" a "," a "," a "],['a', 18, 0]);
Recipes.addShaped({id: 388, count: 1, data: 0},[" a ","aba"," a "],['a', 351, 2, 'b', 20, 0]);
Recipes.addShaped({id: 351, count: 1, data: 2},[" a ","   ","   "],['a', 81, 0]);

IDRegistry.genItemID("hp");
Item.createItem("hp", "hp", {name: "hp", meta: 0});
Recipes.addShaped({id: ItemID.hp, count: 1, data: 0}, [
		" a ",
		"aba",
		" a "], ['a', 331, -1, 'b', 322, -1]);

Callback.addCallback("ItemUse", function (coords, item, block) {
var hp = Entity.getMaxHealth(Player.get());
if(item.id == ItemID.hp&&block.id !==0&&hp <=40){
Player.setCarriedItem(item.id, item.count - 1, 0);
Entity.setMaxHealth(Player.get(), hp+2)}}); 


Callback.addCallback("EntityDeath", function (entity) {
if(entity.id == 63){
Player.setHunger(0);
Player.setHealth(1);
}});



