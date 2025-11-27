IDRegistry.genBlockID("tool_station");

Block.createBlock("tool_station", [
	{name: "Tool Station", texture: [["planks", 0], ["tool_station_top", 0], ["tool_station_side", 0]], inCreative: true}
]);

ToolAPI.registerBlockMaterial(BlockID.tool_station, "stone", 1);
Block.setDestroyTime(BlockID.tool_station, 5);
Tinco.createTableModel(BlockID.tool_station, 1);
Recipes.addShaped({id: BlockID.tool_station}, ["a", "b"], ["a", ItemID.pattern_blank, 0, "b", 58, 0]);


const StationLayout = {
	repair: [
		{type: "tool", x: 480, y: 140},
		{type: "lapis", x: 420, y: 110},
		{type: "dust", x: 420, y: 170},
		{x: 350, y: 80}
	],
	pickaxe: [
		{type: "pickaxe", x: 450, y: 80},
		{type: "rod", x: 450, y: 200},
		{type: "binding", x: 450, y: 140},
		{x: 350, y: 80}
	],
	shovel: [
		{type: "shovel", x: 450, y: 110},
		{type: "rod", x: 450, y: 170},
		{x: 350, y: 80},
		{x: 350, y: 140}
	],
	hatchet: [
		{type: "hatchet", x: 450, y: 110},
		{type: "rod", x: 450, y: 170},
		{x: 350, y: 80},
		{x: 350, y: 140}
	],
	mattock: [
		{type: "hatchet", x: 420, y: 110},
		{type: "rod", x: 450, y: 170},
		{type: "shovel", x: 480, y: 110},
		{x: 350, y: 80}
	],
	sword: [
		{type: "sword", x: 450, y: 80},
		{type: "rod", x: 450, y: 200},
		{type: "guard", x: 450, y: 140},
		{x: 350, y: 80}
	],
	hammer: [
		{type: "hammer", x: 450, y: 110},
		{type: "rod2", x: 450, y: 170},
		{type: "plate", x: 390, y: 110},
		{type: "plate", x: 510, y: 110}
	],
	excavator: [
		{type: "excavator", x: 420, y: 80},
		{type: "rod2", x: 450, y: 200},
		{type: "plate", x: 480, y: 80},
		{type: "binding2", x: 450, y: 140}
	],
	lumberaxe: [
		{type: "lumberaxe", x: 420, y: 80},
		{type: "rod2", x: 450, y: 200},
		{type: "plate", x: 480, y: 80},
		{type: "binding2", x: 450, y: 140}
	],
	scythe: [
		{type: "scythe", x: 450, y: 80},
		{type: "rod2", x: 420, y: 140},
		{type: "binding2", x: 480, y: 140},
		{type: "rod2", x: 450, y: 200}
	],
	battleaxe: [
		{type: "lumberaxe", x: 420, y: 80},
		{type: "rod2", x: 450, y: 200},
		{type: "lumberaxe", x: 480, y: 80},
		{type: "binding2", x: 450, y: 140}
	]
};


const ToolStationFont = {size: 14, color: ag.Color.WHITE, shadow: 0.5};
const ModifierCount = function(max, count1, count2){
	let min = max;
	if(count1){
		min = Math.min(min, count1);
	}
	if(count2){
		min = Math.min(min, count2);
	}
	return min;
};

Elements.tool_station = {
	slot0: {type: "slot", x: 480, y: 140, bitmap: "tc_slot_tool"},
	slot1: {type: "slot", x: 420, y: 110, bitmap: "tc_slot_lapis"},
	slot2: {type: "slot", x: 420, y: 170, bitmap: "tc_slot_dust"},
	slot3: {type: "slot", x: 350, y: 80},
	slotResult: {type: "slot", x: 680, y: 140, isValid: function(){return false}},
	iconResult: {type: "image", x: 680, y: 60, z: 1, bitmap: "_default_slot_empty", scale: 4},
	buttonCraft: {type: "button", x: 570, y: 220, bitmap: "_craft_button_up", bitmap2: "_craft_button_down", scale: 2, clicker: {onClick: function(container){
		const result = container.getSlot("slotResult");
		if(result.id){
			return;
		}

		let i = j = 0;
		const slotTool = Container.tool_station.getSlot("slot0");
		const slotMod1 = Container.tool_station.getSlot("slot1");
		const slotMod2 = Container.tool_station.getSlot("slot2");
		const toolData = Tool.getToolData(slotTool.id, slotTool.data);
		const modifier = Tool.getModifierRecipe(slotMod1, slotMod2);
		if(toolData){

			let materialData;
			if(slotMod1.id && !slotMod2.id){
				materialData = Material.getMaterial(slotMod1.id, slotMod1.data);
			}
			if(!slotMod1.id && slotMod2.id){
				materialData = Material.getMaterial(slotMod2.id, slotMod2.data);
			}
			if(materialData && materialData.material == toolData.material[0].toLowerCase()){
				const param = Tool.getParam(slotTool.id, toolData);
				toolData.uses -= Math.min(toolData.uses, param.durability * (materialData.cost / RepairCost[Tool.toolType[slotTool.id]]) * Math.max(0.5, (1 - toolData.repair++ / 100)) | 0);
				container.setSlot("slotResult", slotTool.id, 1, slotTool.data);
				for(i = 4; i--;){
					container.getSlot("slot" + i).count--;
					container.validateSlot("slot" + i);
				}
				return;
			}

			if(!modifier){
				return;
			}


			if(modifier == "add1" && toolData.slot == 3 || modifier == "add2" && toolData.slot == 4 || modifier == "add3" && toolData.slot == 5){
				toolData.slot++;
				container.setSlot("slotResult", slotTool.id, 1, slotTool.data);
				for(i = 4; i--;){
					container.getSlot("slot" + i).count--;
					container.validateSlot("slot" + i);
				}
				return;
			}

			const modData = Tool.modifier[modifier];
			let add = 0;
			for(i = toolData.modifier.length; i--;){
				if(toolData.modifier[i].name == modifier && toolData.modifier[i].level < modData.max){
					add = ModifierCount(modData.max - toolData.modifier[i].level, slotMod1.count, slotMod2.count);
					toolData.modifier[i].level += add;
					container.setSlot("slotResult", slotTool.id, 1, slotTool.data);
					for(j = 4; j--;){
						container.getSlot("slot" + j).count -= add;
						container.validateSlot("slot" + j);
					}
					return;
				}
			}

			const modifierSlot = toolData.slot + (Tool.getTrait(toolData.material).Writable ? 1 : 0);
			if(toolData.modifier.length >= modifierSlot){
				toolData.modifier.length = modifierSlot
				return;
			}

			if(!modData.multi){
				for(i = toolData.modifier.length; i--;){
					if(toolData.modifier[i].name == modifier && toolData.modifier[i].level >= modData.max){
						return;
					}
				}
			}

			if(modData.compatible){
				for(i = toolData.modifier.length; i--;){
					if(~modData.compatible.indexOf(toolData.modifier[i].name)){
						alert("compatible!");
						return;
					}
				}
			}

			add = ModifierCount(modData.max, slotMod1.count, slotMod2.count);
			const array = [Tool.getToolType(slotTool.id), slotTool.data, modifier];
			const path = __dir__ + "res/items-opaque/tool/tinkers_" + array[0] + "_";
			FileTools.WriteImage(path + array[1] + ".png", UI.TextureSource.get(array.join("_")));
			FileTools.WriteImage(path + "broken_" + array[1] + ".png", Bmp.addModifier(array[0], array[1], array[2], true));
			toolData.modifier.push({name: modifier, level: add});
			container.setSlot("slotResult", slotTool.id, 1, slotTool.data);
			for(i = 4; i--;){
				container.getSlot("slot" + i).count -= add;
				container.validateSlot("slot" + i);
			}
			return;
		}

		const type = [];
		const material = [];
		let slot, data;
		for(i = 0; i < 4; i++){
			slot = container.getSlot("slot" + i);
			data = Tool.getPartData(slot.id);
			if(data){
				type.push(data.type);
				material.push(data.material);
			 }
			else{
				type.push(0);
			}
		}
		const tool = StationRecipe[type.join("_")];
		if(tool){
			container.setSlot("slotResult", ItemID["tinkers_" + tool], 1, Tool.createTool(tool, material));
			for(i = 4; i--;){
				container.getSlot("slot" + i).count--;
				container.validateSlot("slot" + i);
			}
		}


	}}},
	textCraft: {type: "text", x: 585, y: 228, z: 1, text: "Craft"},
	textDurability: {type: "text", x: 750, y: 40, font: ToolStationFont},
	textSpeed: {type: "text", x: 750, y: 60, font: ToolStationFont},
	textLevel: {type: "text", x: 750, y: 80, font: ToolStationFont},
	textDamage: {type: "text", x: 750, y: 100, font: ToolStationFont},
	textSlot: {type: "text", x: 750, y: 130, font: ToolStationFont},
	textMod0: {type: "text", x: 750, y: 150, font: ToolStationFont},
	textMod1: {type: "text", x: 750, y: 170, font: ToolStationFont},
	textMod2: {type: "text", x: 750, y: 190, font: ToolStationFont},
	textMod3: {type: "text", x: 750, y: 210, font: ToolStationFont},
	textMod4: {type: "text", x: 750, y: 230, font: ToolStationFont},
	textMod5: {type: "text", x: 750, y: 250, font: ToolStationFont},
	textMod6: {type: "text", x: 750, y: 270, font: ToolStationFont}
};


let StationMode = "repair";

const StationRecipe = {
	"pickaxe_rod_binding_0": "pickaxe",
	"shovel_rod_0_0": "shovel",
	"hatchet_rod_0_0": "hatchet",
	"hatchet_rod_shovel_0": "mattock",
	"sword_rod_guard_0": "sword",
	"hammer_rod2_plate_plate": "hammer",
	"excavator_rod2_plate_binding2": "excavator",
	"lumberaxe_rod2_plate_binding2": "lumberaxe",
	"scythe_rod2_binding2_rod2": "scythe",
	"lumberaxe_rod2_lumberaxe_binding2": "battleaxe"
};

const RepairCost = {
	pickaxe: 1,
	shovel: 1,
	hatchet: 1,
	mattock: 2,
	sword: 1,
	hammer: 4,
	excavator: 4,
	lumberaxe: 4,
	scythe: 4,
	battleaxe: 4,
};


(function(){

	const setLayout = function(){
		for(let key in StationLayout){
			Elements.tool_station["button_" + key].bitmap = "default_button_" + (key == StationMode ? "down" : "up");
		}
		let slot, layout;
		for(let i = 0; i < 4; i++){
			slot = Elements.tool_station["slot" + i];
			layout = StationLayout[StationMode][i];
			slot.x = layout.x;
			slot.y = layout.y;
			slot.bitmap = layout.type ? "tc_slot_" + layout.type : undefined;
		}
	};

	const clickFunc = function(type){
		return function(container){
			StationMode = type;
			setLayout();
		};
	};

	let x = 400, y = 300;
	for(let key in StationLayout){
		Elements.tool_station["button_" + key] = {type: "button", x: x, y: y, bitmap: "default_button_up", scale: 4, clicker: {onClick: clickFunc(key)}};
		Elements.tool_station["icon_" + key] = {type: "image", x: x + 6, y: y + 6, z: 1, bitmap: "icon." + key, scale: 3.2};
		x += 75;
		if(x == 925){
			x = 400;
			y += 75;
		}  
	}

	Block.registerClickFunction("tool_station", function(){
		Container.tool_station.openAs(Window.tool_station);
		StationMode = "repair";
		setLayout();
	});

})();


Container.tool_station = new UI.Container();
Window.tool_station = new UI.StandartWindow({
	standart: {
		header: {text: {text: "Tool Station"}},
		inventory: {standart: true},
		background: {standart: true}
	},
	drawing: [
		{type: "bitmap", x: 575, y: 140, bitmap: "tc_arrow_right", scale: 4}
	],
	elements: Elements.tool_station
});


const IndicateParam = function(id, toolData){
	const param = Tool.getParam(id, toolData);
	const realData = ToolAPI.getToolData(id) || {damage: 0};
	Container.tool_station.setText("textDurability", "Durability: " + (param.durability - toolData.uses) + "/" + param.durability);
	Container.tool_station.setText("textSpeed", "Mining Speed: " + ((param.efficiency * 100 | 0) / 100));
	Container.tool_station.setText("textLevel", "Mining Level: " + param.level + " (" + Tool.level[param.level] + ")");
	Container.tool_station.setText("textDamage", "Damage: " + (((realData.damage + param.damage) * 100 | 0) / 100));
	Container.tool_station.setText("textSlot", "Modifiers Remaining: " + (toolData.slot + (Tool.getTrait(toolData.material).Writable ? 1 : 0)));
	let modData;
	let text = "";
	for(let i = 7; i--;){
		if(toolData.modifier[i]){
			modData = Tool.modifier[toolData.modifier[i].name];
			text = "- " + modData.name;
			if(modData.max > 1){
				text += " (" + toolData.modifier[i].level + "/" + modData.max + ")"
			}
			Container.tool_station.setText("textMod" + i, text);
		}
		else{
			Container.tool_station.setText("textMod" + i, "");
		}
	}
};

Callback.addCallback("tick", function(){
	if(Container.tool_station.isOpened()){
		const slotTool = Container.tool_station.getSlot("slot0");
		const slotMod1 = Container.tool_station.getSlot("slot1");
		const slotMod2 = Container.tool_station.getSlot("slot2");
		const toolData = Tool.getToolData(slotTool.id, slotTool.data);
		let name = "";
		let i = 0;
		if(toolData){
			const dummy = JSON.parse(JSON.stringify(toolData));

			let materialData;
			if(slotMod1.id && !slotMod2.id){
				materialData = Material.getMaterial(slotMod1.id, slotMod1.data);
			}
			if(!slotMod1.id && slotMod2.id){
				materialData = Material.getMaterial(slotMod2.id, slotMod2.data);
			}
			if(materialData && materialData.material == toolData.material[0].toLowerCase()){
				const param = Tool.getParam(slotTool.id, toolData);
				dummy.uses -= Math.min(dummy.uses, param.durability * (materialData.cost / RepairCost[Tool.toolType[slotTool.id]]) * Math.max(0.5, (1 - dummy.repair / 100)) | 0);
				IndicateParam(slotTool.id, dummy);
				return;
			}


			const modifier = Tool.getModifierRecipe(slotMod1, slotMod2);

			if(!modifier){
				IndicateParam(slotTool.id, toolData);
				return;
			}

			const array = [Tool.getToolType(slotTool.id), slotTool.data, modifier];
			name = array.join("_");
			if(!UI.TextureSource.getNullable(name)){
				UI.TextureSource.put(name, Bmp.addModifier(array[0], array[1], array[2]));
			}

			label: {

				if(modifier == "add1" && toolData.slot == 3 || modifier == "add2" && toolData.slot == 4 || modifier == "add3" && toolData.slot == 5){
					dummy.slot++;
					break label;
				}

				const modData = Tool.modifier[modifier];

				for(i = dummy.modifier.length; i--;){
					if(dummy.modifier[i].name == modifier && dummy.modifier[i].level < modData.max){
						dummy.modifier[i].level += ModifierCount(modData.max - dummy.modifier[i].level, slotMod1.count, slotMod2.count);
						break label;
					}
				}

				if(toolData.modifier.length >= toolData.slot + (Tool.getTrait(toolData.material).Writable ? 1 : 0)){
					return;
				}

				if(!modData.multi){
					for(i = dummy.modifier.length; i--;){
						if(dummy.modifier[i].name == modifier && dummy.modifier[i].level >= modData.max){
							break label;
						}
					}
				}

				dummy.modifier.push({name: modifier, level: ModifierCount(modData.max, slotMod1.count, slotMod2.count)});

			}

			Elements.tool_station.iconResult.bitmap = name;
			IndicateParam(slotTool.id, dummy);
			return;

		}

		const type = [];
		const material = [];
		let slot, data;
		for(i = 0; i < 4; i++){
			slot = Container.tool_station.getSlot("slot" + i);
			data = Tool.getPartData(slot.id);
			if(data){
				type.push(data.type);
				material.push(data.material);
			 }
			else{
				type.push(0);
			}
		}
		const tool = StationRecipe[type.join("_")];
		if(tool){
			name = tool + "-" + material.join("_");
			if(!UI.TextureSource.getNullable(name)){
				UI.TextureSource.put(name, Bmp.createTool(tool, material));
			}
			Elements.tool_station.iconResult.bitmap = name;
			IndicateParam(ItemID["tinkers" + tool], {material: material, uses: 0, slot: 3, modifier: []});
			return;
		}

		Elements.tool_station.iconResult.bitmap = "_default_slot_empty";

		Container.tool_station.setText("textDurability", "");
		Container.tool_station.setText("textSpeed", "");
		Container.tool_station.setText("textLevel", "");
		Container.tool_station.setText("textDamage", "");
		Container.tool_station.setText("textSlot", "");
		for(i = 7; i--;){
			Container.tool_station.setText("textMod" + i, "");
		}

	}
});


Container.tool_station.setOnCloseListener({
	onClose: function(container){
		const pos = Player.getPosition();
		for(let i = 4; i--;){
			container.dropSlot("slot" + i, pos.x, pos.y, pos.z);
		}
	}
});