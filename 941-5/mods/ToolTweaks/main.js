/*
BUILD INFO:
  dir: dev
  target: main.js
  files: 2
*/



// file: API.js

let ToolTweaks = {
	items: {},
	isBlock(id){
		return IDRegistry.getIdInfo(id).split("block").length > 1;
	},
	setReplacement(obj){
		this.items[obj.id] = obj;
	},
	getReplacement(id){
		return this.items[id] || new TweaksType.Default(id);
	},
	
	canReplaced(item, type){
		let obj = this.getReplacement(item.id);
		return !Game.isActionPrevented() && obj.canReplaced(item, type);
	},
	replace(player, item){
		let player_actor = new PlayerActor(player);
		let slot = this.getInventoryItem(player_actor, item);
		if(slot == -1)
			return;
		this.getReplacement(item.id).replace(player_actor, player, slot, item);
	},
	getInventoryItem(player, item){
		let obj = this.getReplacement(item.id);
		for(let i = 0;i < 36;i++){
			let slot = player.getInventorySlot(i);
			if(player.getSelectedSlot() != i && obj.isItem(item, slot, i))
				return i;
		}
		return -1;
	}
};

let TOOLS_TYPES = ["ItemUse", "DestroyBlock", "PlayerAttack"];

let TweaksType = {
	Default(id){
		this.id = id;
		
		this.isItem = function(item, slot){
			return item.id == slot.id;
		}
		this.replace = function(player_actor, player, slot, item){
			let slot_item = player_actor.getInventorySlot(slot);
			Entity.setCarriedItem(player, slot_item.id, slot_item.count+1, slot_item.data, slot_item.extra);
			player_actor.setInventorySlot(slot, 0, 0, 0, null);
		}
		this.canReplaced = function(item, type){
			return ToolTweaks.isBlock(item.id) && type == "ItemUse" && item.count == 1;
		}
	},
	PlantItem(id){
		this.id = id;
		
		this.isItem = function(item, slot){
			return item.id == slot.id;
		}
		this.replace = function(player_actor, player, slot, item){
			let slot_item = player_actor.getInventorySlot(slot);
			Entity.setCarriedItem(player, slot_item.id, slot_item.count+1, slot_item.data, slot_item.extra);
			player_actor.setInventorySlot(slot, 0, 0, 0, null);
		}
		this.canReplaced = function(item, type){
			return type == "ItemUse" && item.count == 1;
		}
	},
	Tool(id){
		this.id = id;
		
		this.isItem = function(item, slot){
			return item.id == slot.id;
		}
		this.replace = function(player_actor, player, slot, item){
			let slot_item = player_actor.getInventorySlot(slot);
			Entity.setCarriedItem(player, slot_item.id, slot_item.count, slot_item.data-1, slot_item.extra);
			player_actor.setInventorySlot(slot, 0, 0, 0, null);
		}
		this.canReplaced = function(item, type){
			return TOOLS_TYPES.indexOf(type) != 0 && item.data >= Item.getMaxDamage(item.id) - 1;
		}
	}
};

Callback.addCallback("ModsLoaded", function(){
	let keys = Object.keys(ToolAPI.toolData);
	for(let i in keys)
		ToolTweaks.setReplacement(new TweaksType.Tool(parseInt(keys[i])));
});

Callback.addCallback("BuildBlock", function(coords, block, player){
	if(ToolTweaks.canReplaced(block, "BuildBlock"))
		ToolTweaks.replace(player, block);
}, -2);

Callback.addCallback("DestroyBlock", function(coords, block, player){
	let item = Entity.getCarriedItem(player);
	if(ToolTweaks.canReplaced(item, "DestroyBlock"))
		ToolTweaks.replace(player, item);
}, -2);

Callback.addCallback("PlayerAttack", function(player){
	let item = Entity.getCarriedItem(player);
	if(ToolTweaks.canReplaced(item, "PlayerAttack"))
		ToolTweaks.replace(player, item);
}, -2);




// file: shared.js

ModAPI.registerAPI("ToolTweaks", {
	ToolTweaks: ToolTweaks,
	TweaksType: TweaksType,
	version: 1,
	requireGlobal(command){
		return eval(command);
	}
});
/*
ModAPI.addAPICallback("ToolTweaks", function(api){
	const ToolTweaks = api.ToolTweaks;
	const TweaksType = api.TweaksType;
	
	ToolTweaks.setReplacement({
		id: 1,//id предмета, блока,
		canReplaced(item, type){//можетли предмет быть заменён
			return ToolTweaks.isBlock(item.id) && type == "ItemUse" && item.count == 1;
		},
		isItem(item, slot){//проверяет можетли прндмет item быть заменён предметом slot
			return item.id == slot.id;
		},
		replace(player_actor, player, slot, item){//функция замены предмета
			let slot_item = player_actor.getInventorySlot(slot);
			Entity.setCarriedItem(player, slot_item.id, slot_item.count+1, slot_item.data, slot_item.extra);
			player_actor.setInventorySlot(slot, 0, 0, 0, null);
		}
	});
	
	//стандартный типы
	new TweaksType.Default(id)
	new TweaksType.PlantItem(id)
	new TweaksType.Tool(id)
	
	ToolTweaks.setReplacement(new TweaksType.Default(2));
});
*/




