IDRegistry.genItemID("Emcream");
Item.createFoodItem("Emcream", "Congealed Magma", {name: "EtableMagmaCream", meta: 0},{isTech:false,stack: 64,food: 1});
Callback.addCallback("FoodEaten",function(heal, satRatio, player){
if(Entity.getCarriedItem(player).id==ItemID.Emcream){
Entity.addEffect(player, 12, 0, 1200, false,false);
}});

IDRegistry.genItemID("EnMushroom");
Item.createFoodItem("EnMushroom", "Enoki Mushroom", {name: "MushroomEnoki", meta: 0},{isTech:false,stack: 64,food: 3});
Callback.addCallback("FoodEaten",function(heal, satRatio, player){
if(Entity.getCarriedItem(player).id==ItemID.EnMushroom){
Entity.clearEffects(player);
}});

IDRegistry.genItemID("GhastM");
Item.createFoodItem("GhastM", "Ghast Meat raw", {name: "GhastMeatRaw", meta: 0},{isTech:false,stack: 64,food: 3});
Callback.addCallback("FoodEaten",function(heal, satRatio, player){
if(Entity.getCarriedItem(player).id==ItemID.GhastM){
Entity.addEffect(player, 19, 0, 1200, false,false);
}});

IDRegistry.genItemID("GhastMc");
Item.createFoodItem("GhastMc", "Ghast Meat cooked", {name: "GhastMeatCooked", meta: 0},{isTech:false,stack: 64,food: 9});

Recipes.addFurnace(378, 0, ItemID.Emcream, 0);
Recipes.addFurnace(ItemID.GhastM, ItemID.GhastMc, 0);


IDRegistry.genItemID("appleSilver");
Item.createFoodItem("appleSilver", "Apple Silver", {name: "apple_silver", meta: 0},{isTech:false,stack: 64,food: 5});
Callback.addCallback("FoodEaten",function(heal, satRatio, player){
if(Entity.getCarriedItem(player).id==ItemID.appleSilver){
Entity.addEffect(player, 11, 3, 600, false,false);
Entity.addEffect(player, 22, 2, 600, false,false);
}});

IDRegistry.genItemID("carrotSilver");
Item.createFoodItem("carrotSilver", "Carrot Silver", {name: "carrot_silver", meta: 0},{isTech:false,stack: 64,food: 6});
Callback.addCallback("FoodEaten",function(heal, satRatio, player){
if(Entity.getCarriedItem(player).id==ItemID.appleSilver){
Entity.addEffect(player, 11, 3, 250, false,false);
}});


Callback.addCallback("EntityDeath", function(entity){
if(Entity.getType(entity) == 41){
 var region = BlockSource.getCurrentWorldGenRegion();  
var coords = Entity.getPosition(entity);
region.spawnDroppedItem(coords.x, coords.y, coords.z, ItemID.GhastM, randomInt(1,4), 0);
}
});
