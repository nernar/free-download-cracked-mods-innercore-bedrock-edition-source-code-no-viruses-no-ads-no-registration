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