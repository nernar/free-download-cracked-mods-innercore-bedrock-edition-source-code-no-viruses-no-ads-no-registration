const container = new UI.Container();
const window = new UI.StandartWindow({
	standart: {
		header: {text: {text: "Hammer Crafting Table"}},
		inventory: {standart: true},
		background: {standart: true}
	},
	drawing: [
		{type: "bitmap", x: 700, y: 240, bitmap: "_workbench_bar", scale: 0.8}
	],
	elements: {
		slot0: {type: "slot", x: 360, y: 60},
		slot1: {type: "slot", x: 420, y: 60},
		slot2: {type: "slot", x: 480, y: 60},
		slot3: {type: "slot", x: 540, y: 60},
		slot4: {type: "slot", x: 600, y: 60},
		slot5: {type: "slot", x: 360, y: 120},
		slot6: {type: "slot", x: 420, y: 120},
		slot7: {type: "slot", x: 480, y: 120},
		slot8: {type: "slot", x: 540, y: 120},
		slot9: {type: "slot", x: 600, y: 120},
		slot10: {type: "slot", x: 480, y: 180},
		slot11: {type: "slot", x: 480, y: 240},
		slot12: {type: "slot", x: 480, y: 300},
		slot13: {type: "slot", x: 480, y: 360},
		slotResult: {type: "slot", x: 780, y: 225, size: 90, visual: true, clicker: {
			onClick: function(){
				const res = container.getSlot("slotResult");
				if(res.id){
					Inventory.addItem(res.id, 1, 0);
					SHammer.preRecipe = res.id;
					if(!Inventory.decreaseItems(SHammer.data2[res.id])){
						let slot;
						for(let i = 14; i--;){
							slot = container.getSlot("slot" + i);
							if(slot.id){
								--slot.count || (slot.id = slot.data = 0);
							}
						}
					}
				}
			}
		}},
		buttonClear: {type: "button", x: 360, y: 380, bitmap: "_button_prev_48x24", bitmap2: "_button_prev_48x24p", scale: 1.6, clicker: {
			onClick: function(){
				SHammer.returnInv();
				SHammer.preRecipe = null;
			}
		}},
		buttonGuide: {type: "button", x: 680, y: 60, bitmap: "ic_loading_glow", scale: 0.1, clicker: {
			onClick: function(){
				GuideAPI ?
					GuideAPI.openGuide("SparksHammersGuide") :
					alert("Please install GuideAPI.");
			}
		}}
	}
});