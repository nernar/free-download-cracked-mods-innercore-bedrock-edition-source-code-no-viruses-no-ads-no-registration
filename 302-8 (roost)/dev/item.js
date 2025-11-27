IDRegistry.genItemID("chicken_catcher");
Item.createItem("chicken_catcher", "Chicken Catcher", {name: "chicken_catcher"}, {stack: 1});
Recipes2.addShaped("ItemID.chicken_catcher", "a:b:c", {a: 344, b: 280, c: 288});


Callback.addCallback("PlayerAttack", function(player, ent){
	if(Entity.getType(ent) == 10 && Player.getCarriedItem().id == ItemID.chicken_catcher){
		const pos = Entity.getPosition(ent);
		const age = Entity.getAge(ent);
		const particle = age < 0 ? 4 : 5;
		Game.prevent();
		for(let i = 20; i--;){
			Particles.addParticle(particle, pos.x + Math.random() * 0.6 - 0.3, pos.y + Math.random() * 0.6, pos.z + Math.random() * 0.6 - 0.3, Math.random() * 0.02, Math.random() * 0.2, Math.random() * 0.02);
		}
		if(age < 0){
			return;
		}
		const custom = Entity.getCustom(ent);
		if(custom && ItemID[custom.nameId]){
			World.drop(pos.x + 0.5, pos.y, pos.z + 0.5, ItemID[custom.nameId], 1);
			Entity.remove(ent);
			return;
		}
		World.drop(pos.x + 0.5, pos.y, pos.z + 0.5, ItemID.chicken_vanilla, 1);
		Entity.remove(ent);
	}
});


ChickenRegistry.registerChicken("vanilla", "", {id: 344}, "NONE", true);




IDRegistry.genItemID("chicken_guide");
Item.createItem("chicken_guide", "Chicken Breeding Guide", {name: "chicken_guide"}, {stack: 1});
Recipes2.addShaped("ItemID.chicken_guide", "oao:aba:oao", {a: 344, b: 339});


const ScreenHeight = UI.getScreenHeight();


const setupGuide = function(keyword){
	const elements = GuideAdjacentWindow.getElements();
	let button, slot, text;
	let name = "";
	let i = x = y = 0;
	for(let id in ChickenRegistry.data){
		name = Item.getName(id).replace(" Chicken", "");
		if(keyword && !name.match(new RegExp(keyword, "i"))){
			continue;
		}
		button = elements.get("button" + i);
		slot = elements.get("slot" + i);
		text = elements.get("text" + i);
		x = (i & 1) * 500;
		y = (i >> 1) * 89;
		button.x = x;
		button.y = y;
		slot.x = x - 20;
		slot.y = y - 15;
		slot.source.id = id - 0;
		text.x = x + 80;
		text.y = y + 20;
		text.onBindingUpdated("text", name);
		if(++i >= 256){
			break;
		}
	}
	for(; i < 256; i++){
		button = elements.get("button" + i);
		slot = elements.get("slot" + i);
		text = elements.get("text" + i);
		button.x = slot.x = text.x = 2000;
		slot.source.id = 0;
	}
	const location = GuideAdjacentWindow.getLocation();
	location.scrollY = Math.max(y, ScreenHeight - 108);
};


const clickButton = function(key){
	return function(){
		let elements = typeof key == "number" ?
			GuideAdjacentWindow.getElements() :
			GuideWindow.getElements();
		let elem = elements.get("slot" + key);
		const id = elem.source.id;
		const chickenData = ChickenRegistry.getData(id);
		if(!chickenData){
			return;
		}
		elements = GuideWindow.getElements();
		elem = elements.get("textName");
		elem.onBindingUpdated("text", chickenData.getName());
		elem = elements.get("textInfo");
		elem.onBindingUpdated("text", "Tier " + chickenData.getTier() + ",  Spawn Type: " + ["None", "Normal", "Snow", "Hell"][chickenData.biomeType]);
		elem = elements.get("slotParent1");
		elem.source.id = chickenData.parent1 ? 	ItemID[chickenData.parent1.getKey()] : 0;
		elem = elements.get("slotParent2");
		elem.source.id = chickenData.parent2 ? ItemID[chickenData.parent2.getKey()] : 0;
		elem = elements.get("slotChild");
		elem.source.id = id;
		elem = elements.get("slotChicken");
		elem.source.id = id;
		elem = elements.get("slotProduct");
		elem.source.id = chickenData.product.id;
		elem.source.data = chickenData.product.data || 0;
	};
};


const GuideWindow = new UI.Window({
	location: {x: 0, y: 0, width: 1000, height: ScreenHeight},
	params: {slot: "_default_slot_empty"},
	drawing: [
		{type: "background", color: android.graphics.Color.TRANSPARENT},
		{type: "frame", x: 0, y: 0, width: 1000, height: ScreenHeight, bitmap: "classic_frame_bg_light", scale: 4},
		{type: "frame", x: 20, y: 80, width: 508, height: ScreenHeight - 100, bitmap: "classic_frame_tin_border", scale: 2},
		{type: "bitmap", x: 550, y: 100, bitmap: "image_breeding", scale: 5},
		{type: "bitmap", x: 550, y: 350, bitmap: "image_laying", scale: 5},
	],
	elements: {
		close: {
			type: "closeButton",
			x: 942, y: 0, scale: 3.2,
			bitmap: "close_button_up", bitmap2: "close_button_down"
		},
		textName: {
			type: "text",
			x: 550, y: 30,
			text: "",
			font: {color: android.graphics.Color.CYAN, shadow: 0.5, size: 30}
		},
		textInfo: {
			type: "text",
			x: 550, y: 70,
			text: "",
			font: {size: 15}
		},
		slotParent1: {
			type: "slot",
			x: 585, y: 155, size: 90,
			visual: true,
			source: {id: 0, count: 1},
			clicker: {onClick: clickButton("Parent1")}
		},
		slotParent2: {
			type: "slot",
			x: 800, y: 155, size: 90,
			visual: true,
			source: {id: 0, count: 1},
			clicker: {onClick: clickButton("Parent2")}
		},
		slotChild: {
			type: "slot",
			x: 700, y: 248, size: 90,
			visual: true,
			source: {id: 0, count: 1}
		},
		slotChicken: {
			type: "slot",
			x: 615, y: 385, size: 90,
			visual: true,
			source: {id: 0, count: 1}
		},
		slotProduct: {
			type: "slot",
			x: 835, y: 413, size: 90,
			visual: true,
			source: {id: 0, count: 1, data: 0}
		},
		buttonSearch: {
			type: "button",
			x: 30, y: 30, scale: 0.8,
			bitmap: "mod_browser_search_field",
			clicker: {onClick: function(){
				const ctx = UI.getContext();
				ctx.runOnUiThread(new java.lang.Runnable({
					run: function(){
						try{
							const dialog = new android.app.AlertDialog.Builder(ctx); 
							dialog.setTitle("Please type the keywords");
							const editText = new android.widget.EditText(ctx); 
							editText.setHint("in this space");
							const layout = new android.widget.LinearLayout(ctx); 
							layout.setOrientation(1);
							layout.addView(editText);
							dialog.setView(layout);
							dialog.setPositiveButton("Search", new android.content.DialogInterface.OnClickListener(){
								onClick: function(){
									const elements = GuideWindow.getElements();
									const text = elements.get("textSearch");
									const keyword = editText.getText() + "";
									text.onBindingUpdated("text", keyword);
									setupGuide(keyword);
								}
							});
							dialog.show();
						}
						catch(e){
							alert(e);
						}
					}
				}));
			}}
		},
		textSearch: {type: "text", x: 40, y: 40, z: 1, font: {color: android.graphics.Color.WHITE, size: 20}, text: ""}
	}
});


const GuideAdjacentElements = {};
(function(){
	let x = y = 0;
	for(let i = 0; i < 256; i++){
		x = (i & 1) * 500;
		y = (i >> 1) * 89;
		GuideAdjacentElements["button" + i] = {
			type: "button",
			x: x, y: y, scale: 1.78,
			bitmap: "mod_browser_button", bitmap2: "mod_browser_button_down",
			clicker: {onClick: clickButton(i)}
		};
		GuideAdjacentElements["slot" + i] = {
			type: "slot",
			x: x - 20, y: y - 15, z: 1, size: 120,
			bitmap: "_default_slot_empty",
			visual: true,
			source: {id: 0, count: 1}
		};
		GuideAdjacentElements["text" + i] = {
			type: "text",
			x: x + 80, y: y + 20, z: 1,
			text: "",
			font: {color: android.graphics.Color.WHITE, size: 40}
		};
	}
})();

const GuideAdjacentWindow = new UI.Window({
	location: {x: 24, y: 84, width: 500, padding: {bottom: 24}, scrollY: ScreenHeight - 108},
	params: {slot: "_default_slot_empty"},
	drawing: [
		{type: "background", color: android.graphics.Color.TRANSPARENT}
	],
	elements: GuideAdjacentElements
});

GuideWindow.setBlockingBackground(true);
GuideWindow.addAdjacentWindow(GuideAdjacentWindow);



Item.registerUseFunction("chicken_guide", function(coords, item, block){
	setupGuide();
	GuideWindow.open();
});