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



