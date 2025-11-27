IDRegistry.genItemID("devilIngot");

Item.createItem("devilIngot", "Devil Ingot", {name: "devil_ingot", meta: 0}, {stack: 64});

IDRegistry.genItemID("netherInk");

Item.createItem("netherInk", "Nether Ink", {name: "nether_ink", meta: 0}, {stack: 64});

IDRegistry.genItemID("soulStone");

Item.createItem("soulStone", "Soul Stone", {name: "soul_stone", meta: 0}, {stack: 64});

IDRegistry.genItemID("satanicStone");

Item.createItem("satanicStone", "Satanic Stone", {name: "satanic_stone", meta: 0}, {stack: 64});
Item.setGlint(ItemID.satanicStone, true);

IDRegistry.genItemID("runeCutter");

Item.createItem("runeCutter", "Rune Cutter", {name: "rune_cutter", meta: 0}, {stack: 16});
Item.setGlint(ItemID.runeCutter, true);

IDRegistry.genItemID("starOfNether");

Item.createItem("starOfNether", "Star Of Nether", {name: "star_of_nether", meta: 0}, {stack: 64});
Item.setGlint(ItemID.starOfNether, true);

IDRegistry.genItemID("soulIngot");

Item.createItem("soulIngot", "Soul Ingot", {name: "soul_ingot", meta: 0}, {stack: 64});

IDRegistry.genItemID("blazeSpine");
Item.createFoodItem("blazeSpine", "Blaze Spine", {name: "blaze_spine", meta: 0}, {
isTech: false,
stack: 64,
food: 1
});

IDRegistry.genItemID("friedBlazeSpine");
Item.createFoodItem("friedBlazeSpine", "Fried Blaze Spine", {name: "fried_blaze_spine", meta: 0}, {
isTech: false,
stack: 64,
food: 20
});

Callback.addCallback("FoodEaten",function(heal, satRatio){ 
if(Player.getCarriedItem().id==ItemID.friedBlazeSpine){ 
Entity.addEffect(Player.get(), 10, 4, 5000, false,false); 
}});
Callback.addCallback("FoodEaten",function(heal, satRatio){ 
if(Player.getCarriedItem().id==ItemID.friedBlazeSpine){ 
Entity.addEffect(Player.get(), 5, 2, 5000, false,false); 
}});
Callback.addCallback("FoodEaten",function(heal, satRatio){ 
if(Player.getCarriedItem().id==ItemID.friedBlazeSpine){ 
Entity.addEffect(Player.get(), 1, 1, 5000, false,false); 
}});
Callback.addCallback("FoodEaten",function(heal, satRatio){ 
if(Player.getCarriedItem().id==ItemID.friedBlazeSpine){ 
Entity.addEffect(Player.get(), 11, 2, 5000, false,false); 
}});
Callback.addCallback("FoodEaten",function(heal, satRatio){ 
if(Player.getCarriedItem().id==ItemID.friedBlazeSpine){ 
Entity.addEffect(Player.get(), 12, 2, 5000, false,false); 
}});
Callback.addCallback("FoodEaten",function(heal, satRatio){ 
if(Player.getCarriedItem().id==ItemID.friedBlazeSpine){ 
Entity.addEffect(Player.get(), 21, 3, 5000, false,false); 
}});
Callback.addCallback("FoodEaten",function(heal, satRatio){ 
if(Player.getCarriedItem().id==ItemID.friedBlazeSpine){ 
Entity.addEffect(Player.get(), 22, 2, 5000, false,false); 
}});
Callback.addCallback("FoodEaten",function(heal, satRatio){ 
if(Player.getCarriedItem().id==ItemID.friedBlazeSpine){ 
Entity.addEffect(Player.get(), 16, 0, 5000, false,false); 
}});

IDRegistry.genItemID("devolin");

Item.createItem("devolin", "Devolin", {name: "devolin", meta: 0}, {stack: 64});

IDRegistry.genItemID("theBreathOfHell");

Item.createItem("theBreathOfHell", "The breath of hell", {name: "the_breath_of_hell", meta: 0}, {stack: 64});
Item.setGlint(ItemID.theBreathOfHell, true);