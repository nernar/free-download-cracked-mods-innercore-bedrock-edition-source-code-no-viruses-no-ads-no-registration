IDRegistry.genItemID("blueapple");
Item.createFoodItem("blueapple","алмазное яблоко",
{name: "blueapple", meta: 0}, 
{food: 10});

IDRegistry.genItemID("whiteapple");
Item.createFoodItem("whiteapple","кварцевое яблоко",
{name: "whiteapple", meta: 0}, 
{food: 5});

IDRegistry.genItemID("grayapple");
Item.createFoodItem("grayapple","железное яблоко",
{name: "grayapple", meta: 0}, 
{food: 6});

IDRegistry.genItemID("redapple");
Item.createFoodItem("redapple","красное яблоко",
{name: "redapple", meta: 0}, 
{food: 4});

IDRegistry.genItemID("bblueapple");
Item.createFoodItem("bblueapple","лазуритоаое яблоко",
{name: "bblueapple", meta: 0}, 
{food: 4});

IDRegistry.genItemID("greenapple");
Item.createFoodItem("greenapple","изумрудное яблоко",
{name: "greenapple", meta: 0}, 
{food: 8});

IDRegistry.genItemID("blackapple");
Item.createFoodItem("blackapple","угольное яблоко",
{name: "blackapple", meta: 0}, 
{food: 3});

Recipes.addShaped({id: ItemID.redapple, count:1 , data: 0}, [
 "ab"
], ['a', 260, 0, 'b', 331, 0]);

Recipes.addShaped({id: ItemID.blueapple, count:1 , data: 0}, [
 "ab"
], ['a', 260, 0, 'b', 264, 0]);

Recipes.addShaped({id: ItemID.greenapple, count:1 , data: 0}, [
 "ab"
], ['a', 260, 0, 'b', 388, 0]);

Recipes.addShaped({id: ItemID.blackapple, count:1 , data: 0}, [
 "ab"
], ['a', 260, 0, 'b', 263, 0]);

Recipes.addShaped({id: ItemID.blackapple, count:1 , data: 0}, [
 "ab"
], ['a', 260, 0, 'b', 263, 1]);

Recipes.addShaped({id: ItemID.bblueapple, count:1 , data: 0}, [
 "ab"
], ['a', 260, 0, 'b', 351, 4]);

Recipes.addShaped({id: ItemID.grayapple, count:1 , data: 0}, [
 "ab"
], ['a', 260, 0, 'b', 265, 0]);

Recipes.addShaped({id: ItemID.whiteapple, count:1 , data: 0}, [
 "ab"
], ['a', 260, 0, 'b', 406, 0]);


Item.addCreativeGroup("Apples", Translation.translate("Яблоки"), [
	ItemID.blueapple,
	ItemID.whiteapple,
	ItemID.grayapple,
	ItemID.redapple,
	ItemID.bblueapple,
	ItemID.greenapple,
	ItemID.blackapple
]);

Callback.addCallback("FoodEaten",function(heal, satRatio)
{
    var helmet = Player.getArmorSlot(0);
    var chest = Player.getArmorSlot(1);
    var legs = Player.getArmorSlot(2);
    var boots = Player.getArmorSlot(3);
    var pos = Player.getPosition();
    
if(Player.getCarriedItem().id==ItemID.blueapple)
{
Entity.addEffect(Player.get(), 5, 3, 20*60)
Entity.addEffect(Player.get(), 3, 3, 20*60)
Entity.addEffect(Player.get(), 22, 3, 20*60)
Entity.addEffect(Player.get(), 11, 3, 20*60)
}


if(Player.getCarriedItem().id==ItemID.whiteapple)
{
Entity.addEffect(Player.get(), 12, 2, 20*60)
}


if(Player.getCarriedItem().id==ItemID.grayapple)
{
Entity.addEffect(Player.get(), 5, 1, 20*30)
Entity.addEffect(Player.get(), 3, 1, 20*30)
Entity.addEffect(Player.get(), 22, 1, 20*30)
}


if(Player.getCarriedItem().id==ItemID.redapple)
{
Entity.addEffect(Player.get(), 10, 1, 20*10)

}


if(Player.getCarriedItem().id==ItemID.bblueapple)
{
Entity.addEffect(Player.get(), 13, 3, 20*60)
Entity.addEffect(Player.get(), 16, 1,20*30)
}


if(Player.getCarriedItem().id==ItemID.greenapple)
{
Entity.addEffect(Player.get(), 14, 3, 20*60)
Entity.addEffect(Player.get(), 8, 1,20*30)
Entity.addEffect(Player.get(), 1, 1,20*30)
}


if(Player.getCarriedItem().id==ItemID.blackapple)
{
Entity.addEffect(Player.get(), 16, 2, 10*120)
}





}) ;