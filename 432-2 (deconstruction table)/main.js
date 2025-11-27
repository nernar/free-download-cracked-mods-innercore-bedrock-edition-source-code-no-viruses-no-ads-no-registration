IMPORT("ChargeItem");
IMPORT("RegisterFunction");


IDRegistry.genBlockID("decon_table");
Block.createBlock("decon_table", [{name: "Deconstruction Table", texture: [["decon_table", 0], ["decon_table", 0], ["decon_table", 1]], inCreative: true}]);
ToolAPI.registerBlockMaterial(BlockID.decon_table, "wood");
Block.setDestroyTime(BlockID.decon_table, 2);
Recipes.addShaped({id: BlockID.decon_table}, ["aba", "cdc", "ccc"], ["a", 265, 0, "b", 264, 0, "c", 5, -1, "d", 58, 0]);


const Container = new UI.Container();
const Window = new UI.StandartWindow({
	standart: {
		header: {text: {text: "Deconstruction Table"}},
		inventory: {standart: true},
		background: {standart: true}
	},
	drawing: [
		{type: "bitmap", x: 500, y: 110, bitmap: "decon_arrow", scale: 4},
		{type: "bitmap", x: 620, y: 220, bitmap: "decon_prev_back", scale: 4},
		{type: "bitmap", x: 910, y: 220, bitmap: "decon_next_back", scale: 4}
	],
	elements: {
		slotInput: {type: "slot", x: 405, y: 70, size: 90},
		slotBook: {type: "slot", x: 413, y: 180, bitmap: "decon_slot", size: 75, isValid: function(id){
			return id == 340;
		}},
		slot0: {type: "slot", x: 670, y: 60, size: 75, visual: true, source: {}},
		slot1: {type: "slot", x: 745, y: 60, size: 75, visual: true, source: {}},
		slot2: {type: "slot", x: 820, y: 60, size: 75, visual: true, source: {}},
		slot3: {type: "slot", x: 670, y: 135, size: 75, visual: true, source: {}},
		slot4: {type: "slot", x: 745, y: 135, size: 75, visual: true, source: {}},
		slot5: {type: "slot", x: 820, y: 135, size: 75, visual: true, source: {}},
		slot6: {type: "slot", x: 670, y: 210, size: 75, visual: true, source: {}},
		slot7: {type: "slot", x: 745, y: 210, size: 75, visual: true, source: {}},
		slot8: {type: "slot", x: 820, y: 210, size: 75, visual: true, source: {}},
		buttonPrev: {type: "button", x: 620, y: 220, bitmap: "decon_prev", bitmap2: "decon_prev_push", scale: 4, clicker: {
			onClick: function(){
				Page--;
			}
		}},
		buttonNext: {type: "button", x: 910, y: 220, bitmap: "decon_next", bitmap2: "decon_next_push", scale: 4, clicker: {
			onClick: function(){
				Page++;
			}
		}},
		buttonDecon: {type: "button", x: 722, y: 300, bitmap: "_craft_button_up", bitmap2: "_craft_button_down", scale: 2.5, clicker: {
			onClick: function(){
				const input = Container.getSlot("slotInput");
				let recipe;
				let count = input.count + 1;
				for(; --count;){
					recipe = Recipes.getWorkbenchRecipesByResult(input.id, count, input.data);
					if(!recipe.isEmpty()){
						break;
					}
				}
				if(count){
					const elements = Window.getElements();
					let slot;
					for(let i = 9; i--;){
						slot = elements.get("slot" + i) || {source: {}};
						slot.source.id && Player.addItemToInventory(slot.source.id, 1, !~slot.source.data ? 0 : slot.source.data);
					}
					if(input.extra && input.extra.isEnchanted()){
						const book = Container.getSlot("slotBook");
						if(book.id == 340 && book.count == 1){
							book.id = 403;
							book.extra = input.extra.copy();
						}
					}
					input.count -= count;
					if(!input.count){
						input.id = input.data = 0;
						input.extra = null;
					}
				}
			}
		}},
		text: {type: "text", x: 734, y: 313, z: 1, text: "Uncraft"}
	}
});


Block.registerClickFunction("decon_table", function(){
	Container.openAs(Window);
});


let Page = 0;
Callback.addCallback("tick", function(){
	if(Container.isOpened()){
		const elements = Window.getElements();
		const prev = elements.get("buttonPrev") || {};
		const next = elements.get("buttonNext") || {};

		const input = Container.getSlot("slotInput");
		let data = input.data;
		const energy = {type: "", amount: 0};
		let chargeData = ChargeItemRegistry.getItemData(input.id);
		if(chargeData && chargeData.type == "normal"){
			data = chargeData.maxDamage;
			energy.type = chargeData.energy;
			energy.amount = ChargeItemRegistry.getEnergyStored(input, chargeData.energy);
		}

		let i = 0, slot;
		let recipe;
		let count = input.count + 1;
		for(; --count;){
			recipe = Recipes.getWorkbenchRecipesByResult(input.id, count, data);
			if(!recipe.isEmpty()){
				break;
			}
		}
		if(!count){
			for(i = 9; i--;){
				slot = elements.get("slot" + i) || {source: {}};
				slot.source.id = slot.source.count = slot.source.data = 0;
			}
			Page = 0;
			prev.y = next.y = 1000;
			return;
		}

		const size = recipe.size();
		const iterator = recipe.iterator();

		Page = Math.min(Math.max(Page, 0), size - 1);
		prev.y = Page == 0 ? 1000 : 220;
		next.y = size == 1 || Page == size - 1 ? 1000 : 220;

		let item;
		for(i = Page + 1; i--;){
			if(iterator.hasNext()){
				item = iterator.next().sortedEntries;
			}
		}

		for(i = item.length; i--;){
			slot = elements.get("slot" + i) || {source: {}};
			if(!item[i].id){
				slot.source.id = slot.source.count = slot.source.data = 0;
				continue;
			}
			slot.source.id = item[i].id;
			slot.source.count = item[i].id ? 1 : 0;
			slot.source.data = item[i].data;
			chargeData = ChargeItemRegistry.getItemData(slot.source.id);
			if(chargeData && chargeData.type == "normal"){
				slot.source.data = chargeData.maxDamage;
				if(energy.type){
					energy.amount -= ChargeItemRegistry.addEnergyTo(slot.source, energy.type, energy.amount, energy.amount, 100);
				}
			}
		}

	}
});


Container.setOnCloseListener({
	onClose: function(){
		const pos = Player.getPosition();
		Container.dropSlot("slotInput", pos.x, pos.y, pos.z);
		Container.dropSlot("slotBook", pos.x, pos.y, pos.z);
	}
});