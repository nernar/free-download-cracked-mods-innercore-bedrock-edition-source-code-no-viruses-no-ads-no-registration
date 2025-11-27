

Item.registerUseFunction("sapling10", function(coords, item, block, player){
let b = BlockSource.getDefaultForActor(player);
if(b.getBlock(coords.x, coords.y+1, coords.z).id== 0){
 if(b.getBlock(coords.x, coords.y, coords.z).id!= BlockID.rityal1){
b.setBlock(coords.x, coords.y+1, coords.z, BlockID.sap, 0);
delItem(player, item);
} 
	} 
	});
/*
IDRegistry.genItemID("magis_book"); 
Item.createItem("magis_book", "magis book", {name: "magis_book", meta: 0}, {stack: 1});

Translation.addTranslation("magis book", {ru: "книга магии"});

Item.setGlint(ItemID.magis_book, true);
*/
IDRegistry.genItemID("Berries"); 
Item.createFoodItem("Berries", "Berries", {name: "Berries", meta: 0}, {stack: 64, food: 2});

mod_tip(ItemID.Berries)

Translation.addTranslation("Berries", {ru: "ягоды"});

Item.registerUseFunction("Berries", function(coords, item, block, player){
let b = BlockSource.getDefaultForActor(player);
if(b.getBlock(coords.x, coords.y+1, coords.z).id== 0){
b.setBlock(coords.x, coords.y+1, coords.z, BlockID.a0, 0);
delItem(player, item);
	} 
	});

IDRegistry.genItemID("deadBerries"); 
Item.createFoodItem("deadBerries", "Dead Berries", {name: "deadBerries", meta: 0}, {stack: 64, food: 2});

mod_tip(ItemID.deadBerries)

Translation.addTranslation("deadBerries", {ru: "заражённые ягоды"});

Item.registerUseFunction("deadBerries", function(coords, item, block, player){
let b = BlockSource.getDefaultForActor(player);
if(b.getBlock(coords.x, coords.y+1, coords.z).id== 0){
b.setBlock(coords.x, coords.y+1, coords.z, BlockID.deada0, 0);
delItem(player, item);
	} 
	});


IDRegistry.genItemID("crystalfire"); 
Item.createItem("crystalfire", "crystal fire", {name: "crystalfire", meta: 0}, {stack: 1});

mod_tip(ItemID.crystalfire)

Translation.addTranslation("crystal fire", {ru: "крисстал огня"});

Item.registerUseFunction("crystalfire", function(coords, item, block, player){
let b = BlockSource.getDefaultForActor(player);
if(b.getBlock(coords.x, coords.y+1, coords.z).id== 0){
if(b.getBlock(coords.x, coords.y, coords.z).id!= BlockID.rityal1){
if(Entity.getSneaking(player) == true){
b.setBlock(coords.x, coords.y+1, coords.z, BlockID.kristalFire, 0);
delItem(player, item);
} 
} 
	} 
	});


IDRegistry.genItemID("crystalearth"); 
Item.createItem("crystalearth", "crystal earth", {name: "crystalearth", meta: 0}, {stack: 1});

mod_tip(ItemID.crystalearth)

Item.registerUseFunction("crystalearth", function(coords, item, block, player){
let b = BlockSource.getDefaultForActor(player);
if(b.getBlock(coords.x, coords.y+1, coords.z).id== 0){
if(b.getBlock(coords.x, coords.y, coords.z).id!= BlockID.rityal1){
if(Entity.getSneaking(player) == true){
b.setBlock(coords.x, coords.y+1, coords.z, BlockID.kristaldirt, 0);
delItem(player, item);
}
} 
	} 
	});

Translation.addTranslation("crystal earth", {ru: "крисстал земли"});

IDRegistry.genItemID("crystalWind"); 
Item.createItem("crystalWind", "crystal Wind", {name: "crystalWind", meta: 0}, {stack: 1});

mod_tip(ItemID.crystalWind)

Translation.addTranslation("crystal Wind", {ru: "крисстал ветра"});

Item.registerUseFunction("crystalWind", function(coords, item, block, player){
let b = BlockSource.getDefaultForActor(player);
if(Entity.getSneaking(player) == true){
if(b.getBlock(coords.x, coords.y+1, coords.z).id== 0){
if(b.getBlock(coords.x, coords.y, coords.z).id!= BlockID.rityal1){
b.setBlock(coords.x, coords.y+1, coords.z, BlockID.kristalwind, 0);
delItem(player, item);
} 
} 
	} 
	});

IDRegistry.genItemID("crystalLightning"); 
Item.createItem("crystalLightning", "crystal Lightning", {name: "crystalLightning", meta: 0}, {stack: 1});

Item.registerUseFunction("crystalLightning", function(coords, item, block, player){
if(Entity.getSneaking(player) == true){
let b = BlockSource.getDefaultForActor(player);
if(b.getBlock(coords.x, coords.y+1, coords.z).id== 0){
if(b.getBlock(coords.x, coords.y, coords.z).id!= BlockID.rityal1){
b.setBlock(coords.x, coords.y+1, coords.z, BlockID.kristalLight, 0);
delItem(player, item);
} 
} 
	} 
	});
	
mod_tip(ItemID.crystalLightning)

Translation.addTranslation("crystal Lightning", {ru: "крисстал молнии"});

Item.addCreativeGroup("crystal", Translation.translate("Crystal"), [
	ItemID.crystalfire,
	ItemID.crystalearth,
	ItemID.crystalWind,
	ItemID.crystalLightning,
]);

IDRegistry.genItemID("ring"); 
Item.createItem("ring", "ring", {name: "ring", meta: 0}, {stack: 1});

mod_tip(ItemID.ring)

Translation.addTranslation("ring", {ru: "кольцо с драгоценным камнем"});

IDRegistry.genItemID("Gem"); 
Item.createItem("Gem", "Gem", {name: "Gem", meta: 0}, {stack: 1});

mod_tip(ItemID.Gem)

Translation.addTranslation("Gem", {ru: "Камень Перемещения"});

Item.setGlint(ItemID.Gem, true)

IDRegistry.genItemID("breakGem"); 
Item.createItem("breakGem", "Break Gem", {name: "breakGem", meta: 0}, {stack: 1});

mod_tip(ItemID.breakGem)

Translation.addTranslation("Break Gem", {ru: "Сломанный Камень Перемещения"});

Item.setGlint(ItemID.breakGem, true)

Item.addCreativeGroup("gem", Translation.translate("Gem"), [
	ItemID.Gem,
	ItemID.breakGem
]);

IDRegistry.genItemID("glas"); 
Item.createItem("glas", "glas", {name: "glas", meta: 0}, {stack: 16});

mod_tip(ItemID.glas)

Translation.addTranslation("glas", {ru: "глаз нежити"});
/*
IDRegistry.genItemID("poic1"); 
Item.createItem("poic1", "Search for a flight", {name: "poic", meta: 0}, {stack: 1});

Translation.addTranslation("Search for a flight", {ru: "пояс полёта"});

*/

IDRegistry.genItemID("amylet"); 
Item.createItem("amylet", "Breathing the breath", {name: "amylet", meta: 0}, {stack: 1});

mod_tip(ItemID.amylet)

Translation.addTranslation("Breathing the breath", {ru: "амулет дыхания"});

IDRegistry.genItemID("clitok"); 
Item.createItem("clitok", "Divine ingot", {name: "clitok", meta: 0}, {stack: 64});

mod_tip(ItemID.clitok)

Translation.addTranslation("Divine ingot", {ru: "божественый слиток"});

IDRegistry.genItemID("clitok1"); 
Item.createItem("clitok1", "Fur ingot", {name: "clitok", meta: 1}, {stack: 64});

mod_tip(ItemID.clitok1)

Item.addCreativeGroup("ingot", Translation.translate("Ingot"), [
	ItemID.clitok,
	ItemID.clitok1,
]);

Translation.addTranslation("Fur ingot", {ru: "слиток огня"});

IDRegistry.genItemID("gotovka"); 
Item.createItem("gotovka", "Preparation", {name: "gotovka", meta: 0}, {stack: 1});

mod_tip(ItemID.gotovka)

Translation.addTranslation("Preparation", {ru: "заготовка"});

IDRegistry.genItemID("bookxp"); 
Item.createItem("bookxp", "book xp", {name: "book_xp", meta: 0}, {stack: 64});

mod_tip(ItemID.bookxp)

Item.registerUseFunction("bookxp", function(coords, item, block, player){
delItem(player, item);
let ac = new PlayerActor(player);
ac.addExperience(1000);
});

Translation.addTranslation("book xp", {ru: "книга опыта"});

Item.setGlint(ItemID.bookxp, true);

IDRegistry.genItemID("koin_1"); 
Item.createItem("koin_1", "gold coin", {name: "koin", meta: 1}, {stack: 64});

mod_tip(ItemID.koin_1)

Translation.addTranslation("gold coin", {ru: "золотая монета"});
Item.setGlint(ItemID.koin_1, true);


IDRegistry.genItemID("koin_0"); 
Item.createItem("koin_0", "Silver coin", {name: "koin", meta: 0}, {stack: 64});

mod_tip(ItemID.koin_0)

Item.addCreativeGroup("koin", Translation.translate("Koin"), [
	ItemID.koin_0,
	ItemID.koin_1,
]);

Translation.addTranslation("Silver coin", {ru: "серебреная монета"});








