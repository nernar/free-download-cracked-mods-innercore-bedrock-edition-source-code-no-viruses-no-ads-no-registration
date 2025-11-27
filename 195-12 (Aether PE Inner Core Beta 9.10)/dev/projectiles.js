//golden
ToolAPI.addToolMaterial("goldends", {durability: 192, level: 2, efficiency: 1, damage: 2, enchantability: 14});

IDRegistry.genItemID("goldenDshoot");
Item.createItem("goldenDshoot", "Golden dart shooter", {name: "golden_dart_shooter", meta: 0}, {stack: 1});

IDRegistry.genItemID("goldenD");
Item.createItem("goldenD", "Golden Dart", {name: "golden_dart", meta: 0}, {stack: 64});

Recipes.addShaped({id: ItemID.goldenD, count: 4, data: 0}, [
    " a ",
    " b ",
    " c "
], ['a', ItemID.goldAmber, 0, 'b', ItemID.stickSkyroot, 0, 'c', 288, 0]);

ToolAPI.setTool(ItemID.goldenDshoot, "goldends", ToolType.sword);
Item.setToolRender(ItemID.goldenDshoot, true);

GunRegistry.registerGun({
    gun:ItemID.goldenDshoot,
    bullet:ItemID.goldenD,
    skin:"entities/projectiles/golden_dart.png",
    speed:9,
    damage:7,
    aim: BitmapFactory.decodeFile(__dir__ + "gui/aim_0.png"),
    fov: 62
});

//poison
ToolAPI.addToolMaterial("poisonds", {durability: 192, level: 2, efficiency: 1, damage: 2, enchantability: 14});

IDRegistry.genItemID("poisonDshoot");
Item.createItem("poisonDshoot", "Poison dart shooter", {name: "poison_dart_shooter", meta: 0}, {stack: 1});

IDRegistry.genItemID("poisonD");
Item.createItem("poisonD", "Poison Dart", {name: "poison_dart", meta: 0}, {stack: 64});

Recipes.addShaped({id: ItemID.poisonD, count: 4, data: 0}, [
    " a ",
    " b "
], ['a', ItemID.goldenD, 0, 'b', ItemID.flowerAechor, 0]);

ToolAPI.setTool(ItemID.poisonDshoot, "poisonds", ToolType.sword);
Item.setToolRender(ItemID.poisonDshoot, true);

GunRegistry.registerGun({
    gun:ItemID.poisonDshoot,
    bullet:ItemID.poisonD,
    skin:"entities/projectiles/poison_dart.png",
    effect: 19,
    efftime:140,
    speed:9,
    damage:8,
    aim: BitmapFactory.decodeFile(__dir__ + "gui/aim_0.png"),
    fov: 62
});

//enchanted
ToolAPI.addToolMaterial("encantedds", {durability: 192, level: 2, efficiency: 1, damage: 2, enchantability: 14});

IDRegistry.genItemID("encantedDshoot");
Item.createItem("encantedDshoot", "Enchanted dart shooter", {name: "enchanted_dart_shooter", meta: 0}, {stack: 1});

IDRegistry.genItemID("encantedD");
Item.createItem("encantedD", "Enchanted Dart", {name: "enchanted_dart", meta: 0}, {stack: 64});

ToolAPI.setTool(ItemID.encantedDshoot, "poisonds", ToolType.sword);
Item.setToolRender(ItemID.encantedDshoot, true);

GunRegistry.registerGun({
    gun:ItemID.encantedDshoot,
    bullet:ItemID.encantedD,
    skin:"entities/projectiles/enchanted_dart.png",
    speed:11,
    damage:8,
    aim: BitmapFactory.decodeFile(__dir__ + "gui/aim_0.png"),
    fov: 62
});

//phoenix
ToolAPI.addToolMaterial("phoenixds", {durability: 1234, level: 2, efficiency: 1, damage: 2, enchantability: 14});

IDRegistry.genItemID("phoenixDshoot");
Item.createItem("phoenixDshoot", "Phoenix dart shooter", {name: "phoenix_dart_shootter", meta: 0}, {stack: 1});

IDRegistry.genItemID("phoenixD");
Item.createItem("phoenixD", "Phoenix Dart", {name: "phoenix_dart", meta: 0}, {stack: 64});

ToolAPI.setTool(ItemID.phoenixDshoot, "goldends", ToolType.sword);
Item.setToolRender(ItemID.phoenixDshoot, true);

GunRegistry.registerGun({
    gun:ItemID.phoenixDshoot,
    bullet:ItemID.phoenixD,
    skin:"entities/projectiles/phoenix_dart.png",
    ftime:100,
    speed:10,
    damage:8,
    aim: BitmapFactory.decodeFile(__dir__ + "gui/aim_0.png"),
    fov: 62
});

/*
//notch
ToolAPI.addToolMaterial("notchh", {durability: 999999999, level: 8, efficiency: 3, damage: 9, enchantability: 16});

IDRegistry.genItemID("NotchH");
Item.createItem("NotchH", "Notch Hammer", {name: "hammer_of_notch", meta: 0}, {stack: 1});

IDRegistry.genItemID("NotchHk");
Item.createItem("NotchHk", "Notch hamer part", {name: "hammer_of_notch_wave", meta: 1}, {stack: 64});

ToolAPI.setTool(ItemID.NotchH, "notchh", ToolType.sword);
Item.setToolRender(ItemID.NotchH, true);

Item.registerNoTargetUseFunction(="NotchH", function(item,coords){ 
shoot(Player.get(), Native.EntityType.SMALL_FIREBALL, 10, "hammer_ofnotch.png"); 
//Player.setCarriedItem(ItemID.goldenD, item.count-1, item.data); 
});
Callback.addCallback("DestroyBlockStart", function (coords, block, player){
if(Player.getCarriedItem().id==ItemID.NotchH){ 
  Game.prevent(); 
 } 
});*/