//PRESENT_CRAFT
importLib("ToolType","*")



var present = Block.createSpecialType({
    base: 2,
    solid: true,
    destroytime: 1,
    explosionres: 1,
    opaque: true
});



Callback.addCallback("tick", function(){
    var helmet = Player.getArmorSlot(0);
    var chest = Player.getArmorSlot(1);
    var legs = Player.getArmorSlot(2);
    var boots = Player.getArmorSlot(3);
    var pos = Player.getPosition();
 if (boots.id == ItemID.skates) {
 	if (World.getBlock(pos.x, pos.y -2, pos.z).id == 79) {
   Entity.addEffect(Player.get(), Native.PotionEffect.movementSpeed, 5, 100)
   }
 }
 });
 
 

//JTSGENĒRĀTIŌN



Callback.addCallback("GenerateChunk", function (chunkX, chunkZ) {
    let coords = GenerationUtils.randomCoords(chunkX, chunkZ, 1, 512);
    if(Math.random() < 0.01){
    coords = GenerationUtils.findSurface(coords.x, coords.y, coords.z);
    if (World.getBlock(coords.x, coords.y + 1, coords.z).id === 0 && GenerationUtils.canSeeSky(coords.x, coords.y + 1, coords.z)) {
       World.setBlock(coords.x,coords.y+1,  coords.z, BlockID.redpresent, 0);
}}});


Callback.addCallback("GenerateChunk", function (chunkX, chunkZ) {
    let coords = GenerationUtils.randomCoords(chunkX, chunkZ, 1, 512);
    if(Math.random() < 0.01){
    coords = GenerationUtils.findSurface(coords.x, coords.y, coords.z);
    if (World.getBlock(coords.x, coords.y + 1, coords.z).id === 0 && GenerationUtils.canSeeSky(coords.x, coords.y + 1, coords.z)) {
       World.setBlock(coords.x,coords.y+1,  coords.z, BlockID.bluepresent, 0);
}}});


Callback.addCallback("GenerateChunk", function (chunkX, chunkZ) {
    let coords = GenerationUtils.randomCoords(chunkX, chunkZ, 1, 512);
    if(Math.random() < 0.01){
    coords = GenerationUtils.findSurface(coords.x, coords.y, coords.z);
    if (World.getBlock(coords.x, coords.y + 1, coords.z).id === 0 && GenerationUtils.canSeeSky(coords.x, coords.y + 1, coords.z)) {
       World.setBlock(coords.x,coords.y+1,  coords.z, BlockID.greenpresent, 0);
}}});


Callback.addCallback("GenerateChunk", function (chunkX, chunkZ) {
    let coords = GenerationUtils.randomCoords(chunkX, chunkZ, 1, 512);
    if(Math.random() < 0.01){
    coords = GenerationUtils.findSurface(coords.x, coords.y, coords.z);
    if (World.getBlock(coords.x, coords.y + 1, coords.z).id === 0 && GenerationUtils.canSeeSky(coords.x, coords.y + 1, coords.z)) {
       World.setBlock(coords.x,coords.y+1,  coords.z, BlockID.whitepresent, 0);
}}});








//JTSSWŌRD


IDRegistry.genItemID("candiedagger");
Item.createItem("candiedagger", "Caramel dagger \n12 damage", {name: "candiedagger", meta: 0}, {stack: 1});
ToolAPI.addToolMaterial("candiedagger", {durability: 3400, level: 4, efficiency: 15, damage: 12, enchantability: 14});
ToolAPI.setTool(ItemID.candiedagger, "candiedagger", ToolType.sword);


IDRegistry.genItemID("caramelsword");
Item.createItem("caramelsword", "Caramel sword \n20 damage", {name: "caramelsword", meta: 0}, {stack: 1});
ToolAPI.addToolMaterial("caramelsword", {durability: 3400, level: 4, efficiency: 15, damage: 20, enchantability: 14});
ToolAPI.setTool(ItemID.caramelsword, "caramelsword", ToolType.sword);


IDRegistry.genItemID("icesword");
Item.createItem("icesword", "Ice sword \n9 damage", {name: "icesword", meta: 0}, {stack: 1});
ToolAPI.addToolMaterial("icesword", {durability: 3400, level: 4, efficiency: 15, damage: 9, enchantability: 14});
ToolAPI.setTool(ItemID.icesword, "icesword", ToolType.sword);


IDRegistry.genItemID("frostsword");
Item.createItem("frostsword", "Frost sword \n12 damage", {name: "frostsword", meta: 0}, {stack: 1});
ToolAPI.addToolMaterial("frostsword", {durability: 3400, level: 4, efficiency: 15, damage: 12, enchantability: 14});
ToolAPI.setTool(ItemID.frostsword, "frostsword", ToolType.sword);


IDRegistry.genItemID("iceswordship");
Item.createItem("iceswordship", "Thorn ice sword \n12 damage", {name: "iceswordship", meta: 0}, {stack: 1});
ToolAPI.addToolMaterial("iceswordship", {durability: 3400, level: 4, efficiency: 15, damage: 12, enchantability: 14});
ToolAPI.setTool(ItemID.iceswordship, "iceswordship", ToolType.sword);
Callback.addCallback("PlayerAttack", function (player, victim) { 
let item = Player.getCarriedItem();
if (item.id == ItemID.iceswordship){ 
Entity.addEffect(victim, 18, 1, 1000, true, true); 
}
});


//JTSARMŌR&TÖLS&WEAPONẞ


IDRegistry.genItemID("skates");

Item.createArmorItem("skates", "Skates\n4 protection\nSlide on the ice", {name: "skates", meta: 0}, {type: "boots", armor: 4, durability: 600, texture: "armor/skates.png"});


IDRegistry.genItemID("iceswordcraftable");
IDRegistry.genItemID("icepickaxe");
IDRegistry.genItemID("iceaxe");
IDRegistry.genItemID("iceshovel");
Item.createItem("iceswordcraftable", "Ice sword \n10 damage", {name: "iceswordcraftable", meta: 0}, {stack: 1});
Item.createItem("icepickaxe", "Ice pickaxe", {name: "icepickaxe", meta: 0}, {stack: 1});
Item.createItem("iceaxe", "Ice axe", {name: "iceaxe", meta: 0}, {stack: 1});
Item.createItem("iceshovel", "Ice shovel", {name: "iceshovel", meta: 0}, {stack: 1});

ToolAPI.addToolMaterial("ice", {durability: 3400, level: 4, efficiency: 8, damage: 10, enchantability: 14});
ToolAPI.setTool(ItemID.iceswordcraftable, "ice", ToolType.sword);
ToolAPI.setTool(ItemID.icepickaxe, "ice", ToolType.pickaxe);
ToolAPI.setTool(ItemID.iceaxe, "ice", ToolType.axe);
ToolAPI.setTool(ItemID.iceshovel, "ice", ToolType.shovel);

IDRegistry.genItemID("icehelmet");
IDRegistry.genItemID("icechestplate");
IDRegistry.genItemID("iceleggings");
IDRegistry.genItemID("iceboots");

Item.createArmorItem("icehelmet", "Ice helmet \n4 protection", {name: "icehelmet", meta: 0}, {type: "helmet", armor: 4, durability: 650, texture: "armor/icearmor.png"});
Item.createArmorItem("icechestplate", "Ice chestplate \n9 protection", {name: "icechestplate", meta: 0}, {type: "chestplate", armor: 9, durability: 750, texture: "armor/icearmor.png"});
Item.createArmorItem("iceleggings", "Ice leggings \n7 protection", {name: "iceleggings", meta: 0}, {type: "leggings", armor: 7, durability: 700, texture: "armor/icearmor0.png"});
Item.createArmorItem("iceboots", "Ice boots \n4 protection", {name: "iceboots", meta: 0}, {type: "boots", armor: 4, durability: 600, texture: "armor/icearmor.png"});

Recipes.addShaped({id: ItemID.iceswordcraftable, count: 1, data: 0}, [ " a ", " a ", " b "], ['a', 79, 0, 'b', 280, 0]);
Recipes.addShaped({id: ItemID.icepickaxe, count: 1, data: 0}, [ "aaa", " b ", " b "], ['a', 79, 0, 'b', 280, 0]);
Recipes.addShaped({id: ItemID.iceaxe, count: 1, data: 0}, [ "aa ", "ab ", " b "], ['a', 79, 0, 'b', 280, 0]);
Recipes.addShaped({id: ItemID.iceshovel, count: 1, data: 0}, [ " a ", " b ", " b "], ['a', 79, 0, 'b', 280, 0]);



Recipes.addShaped({id: ItemID.icehelmet, count: 1, data: 0}, [ "aaa", "a a", "   "], ['a', 79, 0]);
Recipes.addShaped({id: ItemID.icechestplate, count: 1, data: 0}, [ "a a", "aaa", "aaa"], ['a', 79, 0]);
Recipes.addShaped({id: ItemID.iceleggings, count: 1, data: 0}, [ "aaa", "a a", "a a"], ['a', 79, 0]);
Recipes.addShaped({id: ItemID.iceboots, count: 1, data: 0}, [ "   ", "a a", "a a"], ['a', 79, 0]);

//A
/*
IDRegistry.genItemID("alphasword");
IDRegistry.genItemID("alphapickaxe");
IDRegistry.genItemID("alphaaxe");
IDRegistry.genItemID("alphashovel");
Item.createItem("alphasword", "A sword \n 40 damage", {name: "alphasword", meta: 0}, {stack: 1});
Item.createItem("alphapickaxe", "A pickaxe", {name: "alphapickaxe", meta: 0}, {stack: 1});
Item.createItem("alphaaxe", "A axe", {name: "alphaaxe", meta: 0}, {stack: 1});
Item.createItem("alphashovel", "A shovel", {name: "alphashovel", meta: 0}, {stack: 1});

ToolAPI.addToolMaterial("alpha", {durability: 6400, level: 8, efficiency: 16, damage: 40, enchantability: 14});
ToolAPI.setTool(ItemID.alphasword, "alpha", ToolType.sword);
ToolAPI.setTool(ItemID.alphapickaxe, "alpha", ToolType.pickaxe);
ToolAPI.setTool(ItemID.alphaaxe, "alpha", ToolType.axe);
ToolAPI.setTool(ItemID.alphashovel, "alpha", ToolType.shovel);

IDRegistry.genItemID("alphahelmet");
IDRegistry.genItemID("alphachestplate");
IDRegistry.genItemID("alphaleggings");
IDRegistry.genItemID("alphaboots");

Item.createArmorItem("alphahelmet", "A helmet \n 8 protection", {name: "alphahelmet", meta: 0}, {type: "helmet", armor: 8, durability: 1300, texture: "armor/alphaarmor.png"});
Item.createArmorItem("alphachestplate", "A chestplate \n 18 protection", {name: "alphachestplate", meta: 0}, {type: "chestplate", armor: 18, durability: 1500, texture: "armor/alphaarmor.png"});
Item.createArmorItem("alphaleggings", "A leggings \n 14 protection", {name: "alphaleggings", meta: 0}, {type: "leggings", armor: 14, durability: 1400, texture: "armor/alphaarmor0.png"});
Item.createArmorItem("alphaboots", "A boots \n 8 protection", {name: "alphaboots", meta: 0}, {type: "boots", armor: 8, durability: 1200, texture: "armor/alphaarmor.png"});


//B

IDRegistry.genItemID("betasword");
IDRegistry.genItemID("betapickaxe");
IDRegistry.genItemID("betaaxe");
IDRegistry.genItemID("betashovel");
Item.createItem("betasword", "B sword \n 80 damage", {name: "betasword", meta: 0}, {stack: 1});
Item.createItem("betapickaxe", "B pickaxe", {name: "betapickaxe", meta: 0}, {stack: 1});
Item.createItem("betaaxe", "B axe", {name: "betaaxe", meta: 0}, {stack: 1});
Item.createItem("betashovel", "B shovel", {name: "betashovel", meta: 0}, {stack: 1});

ToolAPI.addToolMaterial("beta", {durability: 12800, level: 16, efficiency: 32, damage: 80, enchantability: 14});
ToolAPI.setTool(ItemID.betasword, "beta", ToolType.sword);
ToolAPI.setTool(ItemID.betapickaxe, "beta", ToolType.pickaxe);
ToolAPI.setTool(ItemID.betaaxe, "beta", ToolType.axe);
ToolAPI.setTool(ItemID.betashovel, "beta", ToolType.shovel);

IDRegistry.genItemID("betahelmet");
IDRegistry.genItemID("betachestplate");
IDRegistry.genItemID("betaleggings");
IDRegistry.genItemID("betaboots");

Item.createArmorItem("betahelmet", "A helmet \n 16 protection", {name: "betahelmet", meta: 0}, {type: "helmet", armor: 16, durability: 2600, texture: "armor/betaarmor.png"});
Item.createArmorItem("betachestplate", "A chestplate \n 36 protection", {name: "betachestplate", meta: 0}, {type: "chestplate", armor: 36, durability: 3000, texture: "armor/betaarmor.png"});
Item.createArmorItem("betaleggings", "A leggings \n 28 protection", {name: "betaleggings", meta: 0}, {type: "leggings", armor: 28, durability: 2800, texture: "armor/betaarmor0.png"});
Item.createArmorItem("betaboots", "A boots \n 16 protection", {name: "betaboots", meta: 0}, {type: "boots", armor: 16, durability: 2400, texture: "armor/betaarmor.png"});

//G

IDRegistry.genItemID("gammasword");
IDRegistry.genItemID("gammapickaxe");
IDRegistry.genItemID("gammaaxe");
IDRegistry.genItemID("gammashovel");
Item.createItem("gammasword", "Γ sword \n 160 damage", {name: "gammasword", meta: 0}, {stack: 1});
Item.createItem("gammapickaxe", "Г pickaxe", {name: "gammapickaxe", meta: 0}, {stack: 1});
Item.createItem("gammaaxe", "Г axe", {name: "gammaaxe", meta: 0}, {stack: 1});
Item.createItem("gammashovel", "Г shovel", {name: "gammashovel", meta: 0}, {stack: 1});

ToolAPI.addToolMaterial("gamma", {durability: 25600, level: 32, efficiency: 64, damage: 160, enchantability: 14});
ToolAPI.setTool(ItemID.gammasword, "gamma", ToolType.sword);
ToolAPI.setTool(ItemID.gammapickaxe, "gamma", ToolType.pickaxe);
ToolAPI.setTool(ItemID.gammaaxe, "gamma", ToolType.axe);
ToolAPI.setTool(ItemID.gammashovel, "gamma", ToolType.shovel);

IDRegistry.genItemID("gammahelmet");
IDRegistry.genItemID("gammachestplate");
IDRegistry.genItemID("gammaleggings");
IDRegistry.genItemID("gammaboots");

Item.createArmorItem("gammahelmet", "Г helmet \n 32 protection", {name: "gammahelmet", meta: 0}, {type: "helmet", armor: 32, durability: 5200, texture: "armor/gammaarmor.png"});
Item.createArmorItem("gammachestplate", "Г chestplate \n 42 protection", {name: "gammachestplate", meta: 0}, {type: "chestplate", armor: 42, durability: 6000, texture: "armor/gammaarmor.png"});
Item.createArmorItem("gammaleggings", "Г leggings \n 56 protection", {name: "gammaleggings", meta: 0}, {type: "leggings", armor: 56, durability: 5600, texture: "armor/gammaarmor0.png"});
Item.createArmorItem("gammaboots", "Г boots \n 32 protection", {name: "gammaboots", meta: 0}, {type: "boots", armor: 32, durability: 48, texture: "armor/gammaarmor.png"});

//Δ

IDRegistry.genItemID("deltasword");
IDRegistry.genItemID("deltapickaxe");
IDRegistry.genItemID("deltaaxe");
IDRegistry.genItemID("deltashovel");
Item.createItem("deltasword", "Δ sword \n 160 damage", {name: "deltasword", meta: 0}, {stack: 1});
Item.createItem("deltapickaxe", "Г pickaxe", {name: "deltapickaxe", meta: 0}, {stack: 1});
Item.createItem("deltaaxe", "Г axe", {name: "deltaaxe", meta: 0}, {stack: 1});
Item.createItem("deltashovel", "Г shovel", {name: "deltashovel", meta: 0}, {stack: 1});

ToolAPI.addToolMaterial("delta", {durability: 25600, level: 32, efficiency: 64, damage: 160, enchantability: 14});
ToolAPI.setTool(ItemID.deltasword, "delta", ToolType.sword);
ToolAPI.setTool(ItemID.deltapickaxe, "delta", ToolType.pickaxe);
ToolAPI.setTool(ItemID.deltaaxe, "delta", ToolType.axe);
ToolAPI.setTool(ItemID.deltashovel, "delta", ToolType.shovel);

IDRegistry.genItemID("deltahelmet");
IDRegistry.genItemID("deltachestplate");
IDRegistry.genItemID("deltaleggings");
IDRegistry.genItemID("deltaboots");

Item.createArmorItem("deltahelmet", "Г helmet \n 32 protection", {name: "deltahelmet", meta: 0}, {type: "helmet", armor: 32, durability: 5200, texture: "armor/deltaarmor.png"});
Item.createArmorItem("deltachestplate", "Г chestplate \n 42 protection", {name: "deltachestplate", meta: 0}, {type: "chestplate", armor: 42, durability: 6000, texture: "armor/deltaarmor.png"});
Item.createArmorItem("deltaleggings", "Г leggings \n 56 protection", {name: "deltaleggings", meta: 0}, {type: "leggings", armor: 56, durability: 5600, texture: "armor/deltaarmor0.png"});
Item.createArmorItem("deltaboots", "Г boots \n 32 protection", {name: "deltaboots", meta: 0}, {type: "boots", armor: 32, durability: 48, texture: "armor/deltaarmor.png"});
*/



//JTSEĀT


IDRegistry.genItemID("candiecane");
Item.createFoodItem("candiecane", "Candy cane\nRestores 3 hunger", {name: "candiecane", meta: 0}, {food: 3});


IDRegistry.genItemID("crismastreecookie");
Item.createFoodItem("crismastreecookie", "Christmas tree cookie\nRestores 5 hunger", {name: "crismastreecookie", meta: 0}, {food: 5});


IDRegistry.genItemID("gingerman");
Item.createFoodItem("gingerman", "Ginger man\nRestores 4 hunger", {name: "gingerman", meta: 0}, {food: 4});


IDRegistry.genItemID("whiteapple");
Item.createFoodItem("whiteapple", "White apple\nSometimes speeds you up", {name: "whiteapple", meta: 0}, {food: 0});

Callback.addCallback("FoodEaten",function(heal, satRatio){
if(Player.getCarriedItem().id==ItemID.whiteapple){
	if(Math.random() < 0.3){
Entity.addEffect(Player.get(), 1, 10, 1000, false,false);
}
}});



IDRegistry.genItemID("windberry");
Item.createFoodItem("windberry", "Windberry\nRestores 2 hunger\nSpeeds you up", {name: "windberry", meta: 0}, {food: 2});

Callback.addCallback("FoodEaten",function(heal, satRatio){
if(Player.getCarriedItem().id==ItemID.windberry){
Entity.addEffect(Player.get(), 1, 5, 1000, false,false);
}});



//JTSBLŌCKẞ



IDRegistry.genBlockID("redpresent");
Block.createBlock("redpresent", [{name: "Red present", texture: [["rpb", 0], ["rpt", 0], ["rps", 0], ["rps", 0], ["rps", 0], ["rps", 0]], inCreative: true}], present);
ToolAPI.registerBlockMaterial(BlockID.redpresent, "wood", 3, true);



IDRegistry.genBlockID("greenpresent");
Block.createBlock("greenpresent", [{name: "Green present", texture: [["gpb", 0], ["gpt", 0], ["gps", 0], ["gps", 0], ["gps", 0], ["gps", 0]], inCreative: true}], present);
ToolAPI.registerBlockMaterial(BlockID.greenpresent, "wood", 3, true);




IDRegistry.genBlockID("whitepresent");
Block.createBlock("whitepresent", [{name: "White present", texture: [["wpb", 0], ["wpt", 0], ["wps", 0], ["wps", 0], ["wps", 0], ["wps", 0]], inCreative: true}], present);
ToolAPI.registerBlockMaterial(BlockID.whitepresent, "wood", 3, true);



IDRegistry.genBlockID("bluepresent");
Block.createBlock("bluepresent", [{name: "Blue present", texture: [["bpb", 0], ["bpt", 0], ["bps", 0], ["bps", 0], ["bps", 0], ["bps", 0]], inCreative: true}], present);
ToolAPI.registerBlockMaterial(BlockID.bluepresent, "wood", 3, true);



IDRegistry.genBlockID("redcaramel");
Block.createBlock("redcaramel", [{name: "Red caramel", texture: [["redcaramel", 0], ["redcaramel", 0], ["redcaramel", 0], ["redcaramel", 0], ["redcaramel", 0], ["redcaramel", 0]], inCreative: true}], present);

IDRegistry.genBlockID("greencaramel");
Block.createBlock("greencaramel", [{name: "Green caramel", texture: [["greencaramel", 0], ["greencaramel", 0], ["greencaramel", 0], ["greencaramel", 0], ["greencaramel", 0], ["greencaramel", 0]], inCreative: true}], present);

IDRegistry.genBlockID("yellowcaramel");
Block.createBlock("yellowcaramel", [{name: "Yellow caramel", texture: [["yellowcaramel", 0], ["yellowcaramel", 0], ["yellowcaramel", 0], ["yellowcaramel", 0], ["yellowcaramel", 0], ["yellowcaramel", 0]], inCreative: true}], present);

IDRegistry.genBlockID("bluecaramel");
Block.createBlock("bluecaramel", [{name: "Blue caramel", texture: [["bluecaramel", 0], ["bluecaramel", 0], ["bluecaramel", 0], ["bluecaramel", 0], ["bluecaramel", 0], ["bluecaramel", 0]], inCreative: true}], present);

IDRegistry.genBlockID("froststone");
Block.createBlock("froststone", [{name: "Frost stone", texture: [["froststone", 0], ["froststone", 0], ["froststone", 0], ["froststone", 0], ["froststone", 0], ["froststone", 0]], inCreative: true}], present);

IDRegistry.genBlockID("frostgrass");
Block.createBlock("frostgrass", [{name: "Frost grass block", texture: [["frostdirt", 0], ["frostgrassblocktop", 0], ["frostgrassblock", 0], ["frostgrassblock", 0], ["frostgrassblock", 0], ["frostgrassblock", 0]], inCreative: true}], present);


/*
IDRegistry.genBlockID("alphapresent");
Block.createBlock("alphapresent", [{name: "Α present", texture: [["alphapresenttop", 0], ["alphapresenttop", 0], ["alphapresent", 0], ["alphapresentside", 0], ["alphapresent", 0], ["alphapresentside", 0]], inCreative: true}], present);
Recipes.addShaped({id: BlockID.alphapresent, count: 1, data: 0}, [ " a ", "b c", " d "], ['a', ItemID.redpresent, 0, 'b', ItemID.greenpresent, 0, 'c', ItemID.whitepresent, 0, 'd', ItemID.bluepresent, 0]);


IDRegistry.genBlockID("betapresent");
Block.createBlock("betapresent", [{name: "Β present", texture: [["betapresenttop", 0], ["betapresenttop", 0], ["betapresent", 0], ["betapresentside", 0], ["betapresent", 0], ["betapresentside", 0]], inCreative: true}], present);
Recipes.addShaped({id: BlockID.betapresent, count: 1, data: 0}, [ "bad", "b c", "cda"], ['a', ItemID.redpresent, 0, 'b', ItemID.greenpresent, 0, 'c', ItemID.whitepresent, 0, 'd', ItemID.bluepresent, 0]);
Recipes.addShaped({id: BlockID.betapresent, count: 1, data: 0}, [ "aa ", "   ", "   "], ['a', ItemID.betapresent, 0]);

IDRegistry.genBlockID("gammapresent");
Block.createBlock("gammapresent", [{name: "Γ present", texture: [["gammapresenttop", 0], ["gammapresenttop", 0], ["gammapresent", 0], ["gammapresentside", 0], ["gammapresent", 0], ["gammapresentside", 0]], inCreative: true}], present);
Recipes.addShaped({id: BlockID.gammapresent, count: 1, data: 0}, [ "aa ", "aa ", "   "], ['a', ItemID.betapresent, 0]);

IDRegistry.genBlockID("deltapresent");
Block.createBlock("deltapresent", [{name: "Δ present", texture: [["deltapresenttop", 0], ["deltapresenttop", 0], ["deltapresent", 0], ["deltapresentside", 0], ["deltapresent", 0], ["deltapresentside", 0]], inCreative: true}], present);
Recipes.addShaped({id: BlockID.deltapresent, count: 1, data: 0}, [ "aa ", "aa ", "   "], ['a', ItemID.gammapresent, 0]);

IDRegistry.genBlockID("divinepresent");
Block.createBlock("divinepresent", [{name: "Divine present", texture: [["divinepresent", 0], ["divinepresent", 0], ["divinepresent", 0], ["divinepresent", 0], ["divinepresent", 0], ["divinepresent", 0]], inCreative: true}], present);
Recipes.addShaped({id: BlockID.divinepresent, count: 1, data: 0}, [ "aa ", "aa ", "   "], ['a', ItemID.deltapresent, 0]);

IDRegistry.genBlockID("arkpresent");
Block.createBlock("arkpresent", [{name: "Ark present", texture: [["arkpresent", 0], ["arkpresent", 0], ["arkpresent", 0], ["arkpresent", 0], ["arkpresent", 0], ["arkpresent", 0]], inCreative: true}], present);
Recipes.addShaped({id: BlockID.divinepresent, count: 1, data: 0}, [ "aa ", "aa ", "   "], ['a', ItemID.arkpresent, 0]);

*/


//JTSDROPS



Block.registerDropFunction("redpresent", function(coords, blockID, blockData, level){
	var IR = Math.round(Math.random() * 14);
         if(IR == 0){
		return [[BlockID.redcaramel, 10, 0]]
	return [];
	}
	
         if(IR == 1){
		return [[BlockID.greencaramel, 10, 0]]
	return [];
	}
	
         if(IR == 2){
		return [[BlockID.yellowcaramel, 10, 0]]
	return [];
	}
	
         if(IR == 3){
		return [[BlockID.bluepresent, 10, 0]]
	return [];
	}
	
         if(IR == 4){
		return [[ItemID.candiecane, 8, 0]]
	return [];
	}
	
         if(IR == 5){
		return [[ItemID.crismastreecookie, 10, 0]]
	return [];
	}
	
         if(IR == 6){
		return [[ItemID.gingerman, 9, 0]]
	return [];
	}
	
         if(IR == 7){
		return [[ItemID.whiteapple, 2, 0]]
	return [];
	}
	
         if(IR == 8){
		return [[ItemID.windberry, 1, 0]]
	return [];
	}
	
         if(IR == 9){
		return [[ItemID.icesword, 1, 0]]
	return [];
	}
	
	if(IR == 10){
		return [[ItemID.iceswordship, 1, 0]]
	return [];
	}
	
	if(IR == 11){
		return [[ItemID.frostsword, 1, 0]]
	return [];
	}
	
	
	if(IR == 12){
		return [[ItemID.candiedagger, 1, 0]]
	return [];
	}
	
	if(IR == 13){
		return [[ItemID.caramelsword, 1, 0]]
	return [];
	}
	
	if(IR == 14){
		return [[ItemID.redpresent, 1, 0]]
	return [];
	}
	
	
}, 1);



//Blue


Block.registerDropFunction("bluepresent", function(coords, blockID, blockData, level){
	var IR = Math.round(Math.random() * 14);
         if(IR == 0){
		return [[BlockID.redcaramel, 10, 0]]
	return [];
	}
	
         if(IR == 1){
		return [[BlockID.greencaramel, 10, 0]]
	return [];
	}
	
         if(IR == 2){
		return [[BlockID.yellowcaramel, 10, 0]]
	return [];
	}
	
         if(IR == 3){
		return [[BlockID.bluepresent, 10, 0]]
	return [];
	}
	
         if(IR == 4){
		return [[ItemID.candiecane, 8, 0]]
	return [];
	}
	
         if(IR == 5){
		return [[ItemID.crismastreecookie, 10, 0]]
	return [];
	}
	
         if(IR == 6){
		return [[ItemID.gingerman, 9, 0]]
	return [];
	}
	
         if(IR == 7){
		return [[ItemID.whiteapple, 2, 0]]
	return [];
	}
	
         if(IR == 8){
		return [[ItemID.windberry, 1, 0]]
	return [];
	}
	
         if(IR == 9){
		return [[ItemID.icesword, 1, 0]]
	return [];
	}
	
	if(IR == 10){
		return [[ItemID.iceswordship, 1, 0]]
	return [];
	}
	
	if(IR == 11){
		return [[ItemID.frostsword, 1, 0]]
	return [];
	}
	
	
	if(IR == 12){
		return [[ItemID.candiedagger, 1, 0]]
	return [];
	}
	
	if(IR == 13){
		return [[ItemID.caramelsword, 1, 0]]
	return [];
	}
	
	if(IR == 14){
		return [[ItemID.bluepresent, 1, 0]]
	return [];
	}
	
	
}, 1);


//Green


Block.registerDropFunction("greenpresent", function(coords, blockID, blockData, level){
	var IR = Math.round(Math.random() * 14);
         if(IR == 0){
		return [[BlockID.redcaramel, 10, 0]]
	return [];
	}
	
         if(IR == 1){
		return [[BlockID.greencaramel, 10, 0]]
	return [];
	}
	
         if(IR == 2){
		return [[BlockID.yellowcaramel, 10, 0]]
	return [];
	}
	
         if(IR == 3){
		return [[BlockID.bluepresent, 10, 0]]
	return [];
	}
	
         if(IR == 4){
		return [[ItemID.candiecane, 8, 0]]
	return [];
	}
	
         if(IR == 5){
		return [[ItemID.crismastreecookie, 10, 0]]
	return [];
	}
	
         if(IR == 6){
		return [[ItemID.gingerman, 9, 0]]
	return [];
	}
	
         if(IR == 7){
		return [[ItemID.whiteapple, 2, 0]]
	return [];
	}
	
         if(IR == 8){
		return [[ItemID.windberry, 1, 0]]
	return [];
	}
	
         if(IR == 9){
		return [[ItemID.icesword, 1, 0]]
	return [];
	}
	
	if(IR == 10){
		return [[ItemID.iceswordship, 1, 0]]
	return [];
	}
	
	if(IR == 11){
		return [[ItemID.frostsword, 1, 0]]
	return [];
	}
	
	
	if(IR == 12){
		return [[ItemID.candiedagger, 1, 0]]
	return [];
	}
	
	if(IR == 13){
		return [[ItemID.caramelsword, 1, 0]]
	return [];
	}
	
	if(IR == 14){
		return [[ItemID.greenpresent, 1, 0]]
	return [];
	}
	
	
}, 1);


//White


Block.registerDropFunction("whitepresent", function(coords, blockID, blockData, level){
	var IR = Math.round(Math.random() * 14);
         if(IR == 0){
		return [[BlockID.redcaramel, 10, 0]]
	return [];
	}
	
         if(IR == 1){
		return [[BlockID.greencaramel, 10, 0]]
	return [];
	}
	
         if(IR == 2){
		return [[BlockID.yellowcaramel, 10, 0]]
	return [];
	}
	
         if(IR == 3){
		return [[BlockID.bluepresent, 10, 0]]
	return [];
	}
	
         if(IR == 4){
		return [[ItemID.candiecane, 8, 0]]
	return [];
	}
	
         if(IR == 5){
		return [[ItemID.crismastreecookie, 10, 0]]
	return [];
	}
	
         if(IR == 6){
		return [[ItemID.gingerman, 9, 0]]
	return [];
	}
	
         if(IR == 7){
		return [[ItemID.whiteapple, 2, 0]]
	return [];
	}
	
         if(IR == 8){
		return [[ItemID.windberry, 1, 0]]
	return [];
	}
	
         if(IR == 9){
		return [[ItemID.icesword, 1, 0]]
	return [];
	}
	
	if(IR == 10){
		return [[ItemID.iceswordship, 1, 0]]
	return [];
	}
	
	if(IR == 11){
		return [[ItemID.frostsword, 1, 0]]
	return [];
	}
	
	
	if(IR == 12){
		return [[ItemID.candiedagger, 1, 0]]
	return [];
	}
	
	if(IR == 13){
		return [[ItemID.caramelsword, 1, 0]]
	return [];
	}
	
	if(IR == 14){
		return [[ItemID.whitepresent, 1, 0]]
	return [];
	}
	
	
}, 1);






















































