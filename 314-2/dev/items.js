IDRegistry.genItemID("wichitum");
Item.createItem("wichitum", "Wichitum gem", {name: "wichitum", meta: 0}, {stack: 64});

Recipes.addFurnace(BlockID.wichitumore, ItemID.wichitum, 1);



IDRegistry.genItemID("extraterrestrialstaff");
Item.createItem("extraterrestrialstaff", "Extraterrestrial staff", {name: "extraterrestrialstaff", meta: 0}, {stack: 1});

Recipes.addShaped({id: ItemID.extraterrestrialstaff, count: 1, data: 0}, [ "aba", "cdc", " c "], ['a', 377, 0, 'b', 388, 0, 'c', 280, 0, 'd', ItemID.wichitum, 0]);



IDRegistry.genItemID("olstick");
Item.createItem("olstick", "Outlands stick", {name: "olstick", meta: 0}, {stack: 64});
Recipes.addShaped({id: ItemID.olstick, count: 4, data: 0}, [ "   ", " a ", " a "], ['a', BlockID.olplanks, 0]);



IDRegistry.genItemID("ankh");
Item.createItem("ankh", "Cross Ankh", {name: "ankh", meta: 0}, {stack: 1});
Recipes.addShaped({id: ItemID.ankh, count: 1, data: 0}, [ "aaa", "a a", " a "], ['a', ItemID.olstick, 0]);



IDRegistry.genItemID("olmsh1");
Item.createItem("olmsh1", "Blue Outlands mushroom", {name: "olmsh1", meta: 0}, {stack: 64});
Callback.addCallback("ItemUse", function (coords, item, block) {
if (item.id==ItemID.olmsh1)
{
World.setBlock (coords.relative.x, coords.relative.y, coords.relative.z, BlockID.bluemsh, 0);
Player.decreaseCarriedItem (1);
}
});



IDRegistry.genItemID("olmsh2");
Item.createItem("olmsh2", "Brown Outlands mushroom", {name: "olmsh2", meta: 0}, {stack: 64});
Callback.addCallback("ItemUse", function (coords, item, block) {
if (item.id==ItemID.olmsh2)
{
World.setBlock (coords.relative.x, coords.relative.y, coords.relative.z, BlockID.brownmsh, 0);
Player.decreaseCarriedItem (1);
}
});



IDRegistry.genItemID("oltorf");
Item.createItem("oltorf", "Peat", {name: "oltorf", meta: 0}, {stack: 64});


IDRegistry.genItemID("olpaper");
Item.createItem("olpaper", "Outlands paper", {name: "olpaper", meta: 0}, {stack: 64});
Recipes.addShaped({id: ItemID.olpaper, count: 16, data: 0}, [ " a ", "   ", "   "], ['a', BlockID.olwood, 0]);


IDRegistry.genItemID("olbook");
Item.createItem("olbook", "Outlands book", {name: "olbook", meta: 0}, {stack: 64});
Recipes.addShaped({id: ItemID.olbook, count: 16, data: 0}, [ "aaa", "bbb", "   "], ['a', ItemID.olpaper, 0, 'b', 334, 0]);


IDRegistry.genItemID("olbowl");
Item.createItem("olbowl", "Outlands bowl", {name: "olbowl", meta: 0}, {stack: 64});
Recipes.addShaped({id: ItemID.olbowl, count: 6, data: 0}, [ "a a", " a ", "   "], ['a', BlockID.olplanks, 0]);

IDRegistry.genItemID("bowlblue");
Item.createFoodItem("bowlblue", "Outlands marinated blue mushrooms in a bowl", {name: "bowlblue", meta: 0}, {food: 10});
Recipes.addShaped({id: ItemID.bowlblue, count: 1, data: 0}, [ " b ", " b ", " a "], ['a', ItemID.olbowl, 0, 'b', ItemID.olmsh1, 0]);

IDRegistry.genItemID("bowlbrown");
Item.createFoodItem("bowlbrown", "Outlands marinated brown mushrooms in a bowl", {name: "bowlbrown", meta: 0}, {food: 9});
Recipes.addShaped({id: ItemID.bowlbrown, count: 1, data: 0}, [ " b ", " b ", " a "], ['a', ItemID.olbowl, 0, 'b', ItemID.olmsh2, 0]);


IDRegistry.genItemID("bowlmix");
Item.createFoodItem("bowlmix", "Outlands marinated mushrooms in a bowl", {name: "bowlmix", meta: 0}, {food: 12});
Recipes.addShaped({id: ItemID.bowlmix, count: 1, data: 0}, [ " c ", " b ", " a "], ['a', ItemID.olbowl, 0, 'b', ItemID.olmsh2, 0, 'c', ItemID.olmsh1, 0]);


IDRegistry.genItemID("olruby");
Item.createItem("olruby", "Outlands ruby", {name: "olruby", meta: 0}, {stack: 64});

Recipes.addShaped({id: ItemID.bowlmix, count: 2, data: 0}, [ "   ", " a ", "   "], ['a', ItemID.oltorf, 0]);

Recipes.addShaped({id: BlockID.oljukebox, count: 1, data: 0}, [ "bbb", "bab", "bbb"], ['a', BlockID.olplanks, 0, 'b', ItemID.olruby, 0]);

Recipes.addShaped({id: BlockID.olbookshelf, count: 1, data: 0}, [ " a ", "bbb", "bbb"], ['a', BlockID.owpplate, 0, 'b', ItemID.olbook, 0]);

IDRegistry.genItemID("orihalk");
Item.createItem("orihalk", "Orichalc ingot", {name: "orihalk", meta: 0}, {stack: 64});

IDRegistry.genItemID("hpup1");
Item.createFoodItem("hpup1", "Egyptian sweetness", {name: "hpup1", meta: 0}, {food: 1});

Callback.addCallback("FoodEaten",function(heal, satRatio){
var Ph = Entity.getMaxHealth(Player.get());
if(Player.getCarriedItem().id==ItemID.hpup1){
Entity.setMaxHealth(Player.get(), Ph+1);    
if(Entity.getMaxHealth(Player.get()) == 1000)return false    
}});

IDRegistry.genItemID("hpup3");
Item.createFoodItem("hpup3", "Honey Egyptian sweetness", {name: "hpup3", meta: 0}, {food: 3});

Callback.addCallback("FoodEaten",function(heal, satRatio){
var Ph = Entity.getMaxHealth(Player.get());
if(Player.getCarriedItem().id==ItemID.hpup3){
Entity.setMaxHealth(Player.get(), Ph+3);    
if(Entity.getMaxHealth(Player.get()) == 1000)return false    
}});

IDRegistry.genItemID("hpup5");
Item.createFoodItem("hpup5", "Sweetness of Atlantis", {name: "hpup5", meta: 0}, {food: 5});

Callback.addCallback("FoodEaten",function(heal, satRatio){
var Ph = Entity.getMaxHealth(Player.get());
if(Player.getCarriedItem().id==ItemID.hpup5){
Entity.setMaxHealth(Player.get(), Ph+5);    
if(Entity.getMaxHealth(Player.get()) == 1000)return false    
}});


IDRegistry.genItemID("hpup7");
Item.createFoodItem("hpup7", "Swamp sweetness", {name: "hpup7", meta: 0}, {food: 7});

Callback.addCallback("FoodEaten",function(heal, satRatio){
var Ph = Entity.getMaxHealth(Player.get());
if(Player.getCarriedItem().id==ItemID.hpup7){
Entity.setMaxHealth(Player.get(), Ph+7);    
if(Entity.getMaxHealth(Player.get()) == 1000)return false    
}});

IDRegistry.genItemID("hpup9");
Item.createFoodItem("hpup9", "Royal sweetness", {name: "hpup9", meta: 0}, {food: 7});

Callback.addCallback("FoodEaten",function(heal, satRatio){
var Ph = Entity.getMaxHealth(Player.get());
if(Player.getCarriedItem().id==ItemID.hpup9){
Entity.setMaxHealth(Player.get(), Ph+9);    
if(Entity.getMaxHealth(Player.get()) == 1000)return false    
}});


IDRegistry.genItemID("olbucket");
Item.createItem("olbucket", "Outlands bucket", {name: "olbucket", meta: 0}, {stack: 64});
Recipes.addShaped({id: ItemID.olbook, count: 16, data: 0}, [ "a a", "a a", " a "], ['a', BlockID.olwood, 0]);


IDRegistry.genItemID("honey");
Item.createFoodItem("honey", "Honeycomb", {name: "honey", meta: 0}, {food: 6});
Callback.addCallback("FoodEaten",function(heal, satRatio){
if(Player.getCarriedItem().id==ItemID.honey){
Entity.addEffect(Player.get(), 1, 3, 1200, false,false);
Entity.addEffect(Player.get(), 10, 5, 1200, false,false);
}});


IDRegistry.genItemID("honeybucket");
Item.createFoodItem("honeybucket", "Outlands honey bucket", {name: "honeybucket", meta: 0}, {food: 7});
Recipes.addShaped({id: ItemID.honeybucket, count: 16, data: 0}, [ "ab ", "   ", "   "], ['a', ItemID.olbucket, 0, 'b', ItemID.honey, 0]);
Callback.addCallback("FoodEaten",function(heal, satRatio){
if(Player.getCarriedItem().id==ItemID.honeybucket){
Entity.addEffect(Player.get(), 1, 4, 1600, false,false);
Entity.addEffect(Player.get(), 10, 6, 1600, false,false);
Player.addItemToInventory (ItemID.olbucket, 1, 0) 
}});

Recipes.addShaped({id: ItemID.hpup3, count: 1, data: 0}, [ "ab ", "   ", "   "], ['a', ItemID.honeybucket, 0, 'b', ItemID.hpup1, 0]);


IDRegistry.genItemID("goldenapplepotion");
Item.createItem("goldenapplepotion", "Golden apple potion", {name: "goldenapplepotion", meta: 0}, {stack: 64});
Callback.addCallback("ItemUse", function (coords, item, block) {
if (item.id==ItemID.goldenapplepotion)
{
Entity.addEffect(Player.get(), Native.PotionEffect.absorption, 3, 2400)
Entity.addEffect(Player.get(), Native.PotionEffect.regeneration, 1, 400)
Entity.addEffect(Player.get(), Native.PotionEffect.fireResistance, 0, 6000)
Entity.addEffect(Player.get(), Native.PotionEffect.damageResistance, 0, 6000)
Player.addItemToInventory (374, 1);
Player.decreaseCarriedItem (1);
}
});
Recipes.addShaped({id: ItemID.goldenapplepotion, count: 1, data: 0}, [ "ab ", "   ", "   "], ['a', 374, 0, 'b', 322, 1]);

IDRegistry.genItemID("starpotion");
Item.createItem("starpotion", "Star potion", {name: "starpotion", meta: 0}, {stack: 64});
Callback.addCallback("ItemUse", function (coords, item, block) {
if (item.id==ItemID.starpotion)
{
Entity.addEffect(Player.get(), Native.PotionEffect.absorption, 7, 5600)
Entity.addEffect(Player.get(), Native.PotionEffect.regeneration, 3, 1600)
Entity.addEffect(Player.get(), Native.PotionEffect.fireResistance, 1, 24000)
Entity.addEffect(Player.get(), Native.PotionEffect.damageResistance, 1, 24000)
Entity.addEffect(Player.get(), Native.PotionEffect.movementSpeed, 4, 5600)
Player.addItemToInventory (374, 1);
Player.decreaseCarriedItem (1);
}
});

IDRegistry.genItemID("starapple");
Item.createFoodItem("starapple", "Star apple", {name: "starapple", meta: 0}, {food: 8});
Callback.addCallback("FoodEaten",function(heal, satRatio){
if(Player.getCarriedItem().id==ItemID.starapple){
Entity.addEffect(Player.get(), Native.PotionEffect.absorption, 7, 5600)
Entity.addEffect(Player.get(), Native.PotionEffect.regeneration, 3, 1600)
Entity.addEffect(Player.get(), Native.PotionEffect.fireResistance, 1, 24000)
Entity.addEffect(Player.get(), Native.PotionEffect.damageResistance, 1, 24000)
Entity.addEffect(Player.get(), Native.PotionEffect.movementSpeed, 4, 5600)
}});


IDRegistry.genItemID("starmaterial");
Item.createItem("starmaterial", "Star material", {name: "starmaterial", meta: 0}, {stack: 64});

IDRegistry.genItemID("voidshard");
Item.createItem("voidshard", "Void shard", {name: "voidshard", meta: 0}, {stack: 64});

IDRegistry.genItemID("eyeofswamp");
Item.createItem("eyeofswamp", "Eye of swamp", {name: "eyeofswamp", meta: 0}, {stack: 64});

IDRegistry.genItemID("monsterheart");
Item.createItem("monsterheart", "Monster heart", {name: "monsterheart", meta: 0}, {stack: 64});

IDRegistry.genItemID("strangeskull");
Item.createItem("strangeskull", "Strange skull", {name: "strangeskull", meta: 0}, {stack: 1});
Callback.addCallback("ItemUse", function (coords, item, block) {
if (item.id==ItemID.strangeskull)
{
World.setBlock (coords.relative.x, coords.relative.y, coords.relative.z, BlockID.strangeskull, 0);
Player.decreaseCarriedItem (1);
}
});


IDRegistry.genItemID("mudstaff");
Item.createItem("mudstaff", "Mud staff", {name: "mudstaff", meta: 0}, {stack: 1});

Callback.addCallback("PlayerAttack", function (player, victim) { 
let item = Player.getCarriedItem();
if (item.id == ItemID.mudstaff){ 
 var coords = Entity.getPosition(victim);

World.setBlock(coords.x,coords.y,  coords.z, BlockID.mud, 0);
World.setBlock(coords.x,coords.y,  coords.z+1, BlockID.mud, 0);
World.setBlock(coords.x+1,coords.y,  coords.z, BlockID.mud, 0);
World.setBlock(coords.x-1,coords.y,  coords.z, BlockID.mud, 0);
World.setBlock(coords.x,coords.y,  coords.z-1, BlockID.mud, 0);
World.setBlock(coords.x+1,coords.y, coords.z+1, BlockID.mud, 0);
World.setBlock(coords.x+1,coords.y,  coords.z-1, BlockID.mud, 0);
World.setBlock(coords.x-1,coords.y,  coords.z-1, BlockID.mud, 0);
World.setBlock(coords.x-1,coords.y,  coords.z+1, BlockID.mud, 0);


World.setBlock(coords.x,coords.y+1,  coords.z, BlockID.mud, 0);
World.setBlock(coords.x,coords.y+1,  coords.z+1, BlockID.mud, 0);
World.setBlock(coords.x+1,coords.y+1,  coords.z, BlockID.mud, 0);
World.setBlock(coords.x-1,coords.y+1,  coords.z, BlockID.mud, 0);
World.setBlock(coords.x,coords.y+1,  coords.z-1, BlockID.mud, 0);
World.setBlock(coords.x+1,coords.y+1, coords.z+1, BlockID.mud, 0);
World.setBlock(coords.x+1,coords.y+1,  coords.z-1, BlockID.mud, 0);
World.setBlock(coords.x-1,coords.y+1,  coords.z-1, BlockID.mud, 0);
World.setBlock(coords.x-1,coords.y+1,  coords.z+1, BlockID.mud, 0);

World.setBlock(coords.x,coords.y+2,  coords.z, BlockID.mud, 0);
World.setBlock(coords.x,coords.y+2,  coords.z+1, BlockID.mud, 0);
World.setBlock(coords.x+1,coords.y+2,  coords.z, BlockID.mud, 0);
World.setBlock(coords.x-1,coords.y+2,  coords.z, BlockID.mud, 0);
World.setBlock(coords.x,coords.y+2,  coords.z-1, BlockID.mud, 0);
World.setBlock(coords.x+1,coords.y+2, coords.z+1, BlockID.mud, 0);
World.setBlock(coords.x+1,coords.y+2,  coords.z-1, BlockID.mud, 0);
World.setBlock(coords.x-1,coords.y+2,  coords.z-1, BlockID.mud, 0);
World.setBlock(coords.x-1,coords.y+2,  coords.z+1, BlockID.mud, 0);

 }
});


Recipes.addShaped({id: ItemID.mudstaff, count: 1, data: 0}, [ " ba", " cb", "c  "], ['a', ItemID.eyeofswamp, 0, 'b', ItemID.monsterheart, 0, 'c', ItemID.oltorf, 0]);

IDRegistry.genItemID("swampkey");
Item.createItem("swampkey", "Swamp key", {name: "swampkey", meta: 0}, {stack: 1});

IDRegistry.genItemID("lat");
Item.createItem("lat", "Brass ingot", {name: "lat", meta: 0}, {stack: 64});

IDRegistry.genItemID("smola");
Item.createItem("smola", "Christmas tree resin \n What is it?", {name: "smola", meta: 0}, {stack: 64});

Block.registerDropFunction("oldirt", function(coords, blockID, blockData, level){
	if(Math.random>0.4){
		return [[ItemID.oltorf, 1, 0]]
	return [];
	}
}, 1);

Block.registerDropFunction("olwood", function(coords, blockID, blockData, level){
	if(Math.random>0.01){
		return [[ItemID.smola, 1, 0]]
	return [];
	}
}, 1);



IDRegistry.genItemID("voidpotion");
Item.createItem("voidpotion", "Void potion", {name: "voidpotion", meta: 0}, {stack: 64});
Callback.addCallback("ItemUse", function (coords, item, block) {
if (item.id==ItemID.voidpotion)
{
Entity.addEffect(Player.get(), Native.PotionEffect.absorption, 15, 12120)
Entity.addEffect(Player.get(), Native.PotionEffect.regeneration, 7, 3200)
Entity.addEffect(Player.get(), Native.PotionEffect.fireResistance, 3, 48000)
Entity.addEffect(Player.get(), Native.PotionEffect.damageResistance, 3, 48000)
Entity.addEffect(Player.get(), Native.PotionEffect.movementSpeed, 9, 12120)
Entity.addEffect(Player.get(), Native.PotionEffect.jumpBoost, 4, 12120)
Player.addItemToInventory (374, 1);
Player.decreaseCarriedItem (1);
}
});

IDRegistry.genItemID("voidapple");
Item.createFoodItem("voidapple", "Void apple", {name: "voidapple", meta: 0}, {food: 16});
Callback.addCallback("FoodEaten",function(heal, satRatio){
if(Player.getCarriedItem().id==ItemID.voidapple){
Entity.addEffect(Player.get(), Native.PotionEffect.absorption, 15, 12120)
Entity.addEffect(Player.get(), Native.PotionEffect.regeneration, 7, 3200)
Entity.addEffect(Player.get(), Native.PotionEffect.fireResistance, 3, 48000)
Entity.addEffect(Player.get(), Native.PotionEffect.damageResistance, 3, 48000)
Entity.addEffect(Player.get(), Native.PotionEffect.movementSpeed, 9, 12120)
Entity.addEffect(Player.get(), Native.PotionEffect.jumpBoost, 4, 12120)
}});


IDRegistry.genItemID("hungerpotion");
Item.createItem("hungerpotion", "Hunger potion", {name: "hungerpotion", meta: 0}, {stack: 64});
Callback.addCallback("ItemUse", function (coords, item, block) {
if (item.id==ItemID.hungerpotion)
{
Entity.addEffect(Player.get(), Native.PotionEffect.hunger, 10, 200)
Player.addItemToInventory (374, 1);
Player.decreaseCarriedItem (1);
}
});


IDRegistry.genItemID("voidmaterial");
Item.createItem("voidmaterial", "Void material", {name: "voidmaterial", meta: 0}, {stack: 64});

Recipes.addShaped({id: ItemID.hungerpotion, count: 1, data: 0}, [ " ab", "   ", "   "], ['a', ItemID.oltorf, 0, 'b', 374, 0]);


































//300