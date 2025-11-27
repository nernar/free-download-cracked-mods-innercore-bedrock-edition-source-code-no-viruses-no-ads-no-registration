IDRegistry.genItemID("jeweled_apple");
Item.createFoodItem("jeweled_apple", "Jeweled Apple", {name: "jeweled_apple"}, {food: 4});
Item.registerEatenFunction("jeweled_apple", function(){
	Entity.addEffect(player, 3, 0, 1200);
	Entity.addEffect(player, 5, 0, 1200);
	Entity.addEffect(player, 11, 0, 1200);
	Entity.addEffect(player, 22, 0, 2400);
});

IDRegistry.genItemID("heart_red");
Item.createFoodItem("heart_red", "Miniature Red Heart", {name: "heart_red"});
Item.registerEatenFunction("heart_red", function(){
	Entity.healEntity(player, 20);
});

IDRegistry.genItemID("heart_yellow");
Item.createFoodItem("heart_yellow", "Miniature Yellow Heart", {name: "heart_yellow"});
Item.registerEatenFunction("heart_yellow", function(){
	Entity.healEntity(player, 40);
});

IDRegistry.genItemID("heart_green");
Item.createFoodItem("heart_green", "Miniature Green Heart", {name: "heart_green"});
Item.registerEatenFunction("heart_green", function(){
	Entity.healEntity(player, 60);
});

IDRegistry.genItemID("canister_empty");
Item.createItem("canister_empty", "Empty Canister", {name: "canister_empty"});

IDRegistry.genItemID("canister_red");
Item.createItem("canister_red", "Red Heart Canister", {name: "canister_red"}, {stack: 10});

IDRegistry.genItemID("canister_yellow");
Item.createItem("canister_yellow", "Yellow Heart Canister", {name: "canister_yellow"}, {stack: 10});

IDRegistry.genItemID("canister_green");
Item.createItem("canister_green", "Green Heart Canister", {name: "canister_green"}, {stack: 10});

Recipes.addShaped({id: ItemID.jeweled_apple}, ["oao", "aba", "oao"], ["a", 264, 0, "b", 260, 0]);
Recipes.addShaped({id: ItemID.canister_empty}, ["aa", "aa"], ["a", ItemID.ingot_aluminum, 0]);
Recipes.addShapeless({id: ItemID.canister_red}, [{id: ItemID.jeweled_apple}, {id: ItemID.necrotic_bone}, {id: ItemID.canister_empty}, {id: ItemID.heart_red}]);
Recipes.addShapeless({id: ItemID.canister_yellow}, [{id: ItemID.canister_red}, {id: ItemID.heart_yellow}, {id: 466}]);

Callback.addCallback("EntityDeath", function(ent, attacker){
	const pos = Player.getPosition();
	if(Entity.isEnemy(ent)){
		if(attacker == player && Math.random() < 0.005){
			World.drop(pos.x, pos.y, pos.z, ItemID.heart_red);
		}
	}
	else if(Entity.isBoss(ent)){
		World.drop(pos.x, pos.y, pos.z, ItemID.heart_yellow);
	}
});


Container.heart_canister = new UI.Container();
Elements.heart_canister = {};

(function(){

	const funcs = function(num){
		return{
			onClick: function(container){
				const item = Player.getCarriedItem();
				const slot = container.getSlot("slot" + num);
				if(item.id == slot.id){
					const add = Math.min(item.count, 10 - slot.count);
					slot.count += add;
					Player.decreaseCarriedItem(add);
				}
			},
			onLongClick: function(container){
				const slot = container.getSlot("slot" + num);
				if(slot.count){
					Player.addItemToInventory(slot.id, slot.count, 0);
					slot.count = 0;
				}
			}
		};
	};

	Elements.heart_canister.slot0 = {
		type: "slot", x: 0, y: 0, size: 1000 / 3,
		isValid: function(id){
			return id == ItemID.canister_red;
		},
		clicker: funcs(0)
	};

	Elements.heart_canister.slot1 = {
		type: "slot", x: 1000 / 3, y: 0, size: 1000 / 3,
		isValid: function(id){
			return id == ItemID.canister_yellow;
		},
		clicker: funcs(1)
	};

	Elements.heart_canister.slot2 = {
		type: "slot", x: 2000 / 3, y: 0, size: 1000 / 3,
		isValid: function(id){
			return id == ItemID.canister_green;
		},
		clicker: funcs(2)
	};

})();

Window.heart_canister = new UI.Window({
	location: {x: 870, y: ScreenHeight - 45, width: 120, height: 40},
	drawing: [{type: "background", color: ag.Color.TRANSPARENT}],
	elements: Elements.heart_canister
});


Callback.addCallback("NativeGuiChanged", function(name){
	if(name == "survival_inventory_screen"){
		const canister = [ItemID.canister_red, ItemID.canister_yellow, ItemID.canister_green];
		for(let i = 3; i--;){
			Container.heart_canister.setSlot("slot" + i, canister[i], HeartCanister[i], 0);
		}
		Container.heart_canister.openAs(Window.heart_canister);
		return;
	}
	if(Container.heart_canister.isOpened()){
		let heart = count = 0;
		for(let i = 0; i < 3; i++){
			count = Container.heart_canister.getSlot("slot" + i).count;
			HeartCanister[i] = count;
			heart += count;
		}
		Entity.setMaxHealth(player, 20 + heart * 2);
		Container.heart_canister.close();
	}
});