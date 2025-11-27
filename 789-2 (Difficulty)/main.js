var time;
var difficulty = 0;
//const entities = [10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 28, 29, 30, 31, 32, 33, 34, 35 ,36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 52, 53, 54, 55, 57, 58, 59, 74, 75, 104, 105, 108, 109, 110, 111, 112, 113, 114, 115, 116];
const armored = [32, 34, 36, 46, 47, 48, 110];
const weaponed = [32, 36, 47, 110, 114];

//Sets the timer value for the first start
Callback.addCallback('LevelDisplayed', function () {if(time == undefined){time = 12000}});

//Decreases timer time
Callback.addCallback('tick', function () {
	time--;
	if(time <= 0){
		time = 12000;
		difficulty++;
	}
});

//Saves timer and difficulty values
Saver.addSavesScope("SaverBD",
	function read(scope){
		difficulty = scope.hard || 0;
		time = scope.Time || 0;
	}, function save(){
		return {
			hard: difficulty,
			Time: time
		}
	}
);

//Register items
IDRegistry.genItemID("GetHard");
Item.createItem("GetHard", "Hardometr", {name: "hardometr", meta: 0}, {stack: 1});
IDRegistry.genItemID("cursed_crystal");
Item.createItem("cursed_crystal", "Cursed Crystal", {name: "c_cursed", meta: 0}, {stack: 16});
IDRegistry.genItemID("enchanted_crystal");
Item.createItem("enchanted_crystal", "Enchanted Crystal", {name: "c_enchanted", meta: 0}, {stack: 16});

Recipes.addShaped({id: ItemID.GetHard, count: 1, data: 0}, ["", "cac", "aba"], ["a", 265, 0, "b", 452, 0, "c", 331, 0]);

//Adds the ability to use the items
Callback.addCallback("ItemUse", function (coords, item, block, isExternal, playerUid) {
	if (item.id == ItemID.GetHard){Game.message("§2Difficulty: "+difficulty);}
	if (item.id == ItemID.cursed_crystal && difficulty <= 190){difficulty+=10; Entity.setCarriedItem(playerUid, item.id, item.count - 1, item.data);}
	else if (item.id == ItemID.cursed_crystal && difficulty > 190 && difficulty < 200){difficulty = 200; Entity.setCarriedItem(playerUid, item.id, item.count - 1, item.data);}
	else if (item.id == ItemID.cursed_crystal && difficulty >= 200){Game.message("§4The difficulty is already the maximum");}
	if (item.id == ItemID.enchanted_crystal && difficulty >= 10){difficulty-=10; Entity.setCarriedItem(playerUid, item.id, item.count - 1, item.data);}
	else if (item.id == ItemID.enchanted_crystal && difficulty < 10 && difficulty > 0){difficulty = 0; Entity.setCarriedItem(playerUid, item.id, item.count - 1, item.data);}
	else if (item.id == ItemID.enchanted_crystal && difficulty <= 0){Game.message("§4The difficulty is already the minimum");}
});

//Improves mob health and equipment depending on difficulty
Callback.addCallback("EntityAdded", function (entity) {
	if (Entity.getHealth(entity) > 0) {
		Entity.setMaxHealth(entity, Math.round(Entity.getMaxHealth(entity)*(difficulty/200+1)));
		Entity.setHealth(entity, Entity.getMaxHealth(entity));
	}
	if (weaponed.indexOf(Entity.getType(entity)) != -1 && Entity.getCarriedItem(entity).id == 0 && Math.random() <= 0.7) {
		switch (Math.random()){
			case (0.005 * difficulty/2):
				Entity.setCarriedItem(entity, 276, 1, 0);
			break;
			case (0.0075 * difficulty/2):
				Entity.setCarriedItem(entity, 267, 1, 0);
			break;
			case (0.01 * difficulty/2):
				Entity.setCarriedItem(entity, 283, 1, 0);
			break;
			case (0.02 * difficulty/2):
				Entity.setCarriedItem(entity, 272, 1, 0);
			break;
		}
	}
	if(Entity.getArmorSlot(entity, 0).id == 0 && Math.random() <= 0.7){
		switch (Math.random()) {
			case (0.007 * difficulty/2):
				Entity.setArmorSlot(entity, 0, 310, 1, 0);
			break;
			case (0.01 * difficulty/2):
				Entity.setArmorSlot(entity, 0, 306, 1, 0);
			break;
			case (0.05 * difficulty/2):
				Entity.setArmorSlot(entity, 0, 302, 1, 0);
			break;
			case (0.1 * difficulty/2):
				Entity.setArmorSlot(entity, 0, 314, 1, 0);
			break;
			case (0.2 * difficulty/2):
				Entity.setArmorSlot(entity, 0, 298, 1, 0);
			break;
		}
	}
	if(Entity.getArmorSlot(entity, 1).id == 0 && Math.random() <= 0.7){
		switch (Math.random()) {
			case (0.007 * difficulty/2):
				Entity.setArmorSlot(entity, 1, 311, 1, 0);
			break;
			case (0.01 * difficulty/2):
				Entity.setArmorSlot(entity, 1, 307, 1, 0);
			break;
			case (0.05 * difficulty/2):
				Entity.setArmorSlot(entity, 1, 303, 1, 0);
			break;
			case (0.1 * difficulty/2):
				Entity.setArmorSlot(entity, 1, 315, 1, 0);
			break;
			case (0.2 * difficulty/2):
				Entity.setArmorSlot(entity, 1, 299, 1, 0);
			break;
		}
	}
	if(Entity.getArmorSlot(entity, 2).id == 0 && Math.random() <= 0.7){
		switch (Math.random()) {
			case (0.007 * difficulty/2):
				Entity.setArmorSlot(entity, 2, 312, 1, 0);
			break;
			case (0.01 * difficulty/2):
				Entity.setArmorSlot(entity, 2, 308, 1, 0);
			break;
			case (0.05 * difficulty/2):
				Entity.setArmorSlot(entity, 2, 304, 1, 0);
			break;
			case (0.1 * difficulty/2):
				Entity.setArmorSlot(entity, 2, 316, 1, 0);
			break;
			case (0.2 * difficulty/2):
				Entity.setArmorSlot(entity, 2, 300, 1, 0);
			break;
		}
	}
	if(Entity.getArmorSlot(entity, 3).id == 0 && Math.random() <= 0.7){
		switch (Math.random()) {
			case (0.007 * difficulty/2):
				Entity.setArmorSlot(entity, 3, 313, 1, 0);
			break;
			case (0.01 * difficulty/2):
				Entity.setArmorSlot(entity, 3, 309, 1, 0);
			break;
			case (0.05 * difficulty/2):
				Entity.setArmorSlot(entity, 3, 305,1, 0);
			break;
			case (0.1 * difficulty/2):
				Entity.setArmorSlot(entity, 3, 317, 1, 0);
			break;
			case (0.2 * difficulty/2):
				Entity.setArmorSlot(entity, 3, 301, 1, 0);
			break;
		}
	}
});

["abandoned_mineshaft", "monster_room", "stronghold_crossing", "stronghold_corridor", "stronghold_library"]
.forEach(function(tableName) {
	KEX.LootModule.createLootTableModifier("chests/" + tableName)
		.addItem(ItemID.enchanted_crystal, 1, 0, .2)
		.addItem(ItemID.cursed_crystal, 1, 0, .2);
});