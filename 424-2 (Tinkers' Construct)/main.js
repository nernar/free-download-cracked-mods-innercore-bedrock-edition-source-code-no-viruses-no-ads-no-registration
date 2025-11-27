/*
BUILD INFO:
  dir: dev
  target: main.js
  files: 23
*/



// file: header.js

/*
┏━━┳┓
┗┓┏╋╋━┳┳━┳━┓
╋┃┃┃┃┃┃┃━┫╋┃
╋┗┛┗┻┻━┻━┻━┛
by NikuJagajaga
*/


const ag = android.graphics;
const Elements = {};
const Container = {};
const Window = {};
const ScreenHeight = UI.getScreenHeight();
const nativeDropItem = ModAPI.requireGlobal("Level.dropItem");
let ThreadTime = 0;


IMPORT("TileRender");
IMPORT("ToolLib")
IMPORT("RegisterFunction");
IMPORT("DecimalLiquid");
IMPORT("EntityTypeUtil");


let player;
Callback.addCallback("LevelLoaded", function(){
	player = Player.get();
	Recipes.addShaped({id: 340}, ["aa", "ab", "cc"], ["a", 339, 0, "b", 287, 0, "c", ItemID.pattern_blank, 0]);
	Recipes.addShaped({id: 421}, ["abo", "bco", "oob"], ["a", 339, 0, "b", 287, 0, "c", 341, 0]);
});


let HeartCanister = [0, 0, 0];

Saver.addSavesScope("TincoScope",
	function read(scope){
		Tool.startupMeta = FileTools.ReadJSON(__dir__ + "res/items-opaque/tool/meta.json");
		if(scope.toolData){
			Tool.toolData = JSON.parse(JSON.stringify(scope.toolData));
		}
		if(scope.heart){
			HeartCanister = scope.heart.split(":");
		}
	},
	function save(){
		return {toolData: Tool.toolData, heart: HeartCanister.join(":")};
	}
);




// file: api/bitmap.js

Bmp = {

	frame: UI.FrameTextureSource.get("default_frame_2"),
	slot: UI.FrameTextureSource.get("_default_slot_light").expandAndScale(22, 22, 1, ag.Color.parseColor("#7d7575")),

	createFrame: function(name, width, height){
		UI.TextureSource.put(name, this.frame.expandAndScale(width, height, 1, ag.Color.parseColor("#7d7575")));
	},

	createEmpty: function(name, width, height){
		UI.TextureSource.put(name, new ag.Bitmap.createBitmap(width, height, ag.Bitmap.Config.ARGB_8888));
	},

	createSlot: function(name, onlySlot){
		const bmp = new ag.Bitmap.createBitmap(22, 22, ag.Bitmap.Config.ARGB_8888);
		const cvs = new ag.Canvas(bmp);
		cvs.drawBitmap(this.slot, 0, 0, null);
		cvs.drawBitmap(onlySlot ? FileTools.ReadImage(__dir__ + "res/slot_icon/" + name + ".png") : UI.TextureSource.get("symbol." + name), 3, 3, null);
		UI.TextureSource.put("tc_slot_" + name, bmp);
	},

	layer: [1, 0, 2, 3],
	createTool: function(tool, material, breakPart){
		const bmp = new ag.Bitmap.createBitmap(16, 16, ag.Bitmap.Config.ARGB_8888);
		const cvs = new ag.Canvas(bmp);
		let i = 0;
		for(let j = 0; j < material.length; j++){
			i = this.layer[j];
			cvs.drawBitmap(FileTools.ReadImage(__dir__ + "res/tool/" + tool + "/" + i + "/" + material[i] + (breakPart != undefined && i == breakPart ? "2" : "") + ".png"), 0, 0, null);
		}
		return bmp;
	},

	addModifier: function(type, data, modifier, isBreak){
		const bmp = new ag.Bitmap.createBitmap(16, 16, ag.Bitmap.Config.ARGB_8888);
		const cvs = new ag.Canvas(bmp);
		const base = FileTools.ReadImage(__dir__ + "res/items-opaque/tool/tinkers_" + type + (isBreak ? "_broken_" : "_") + data + ".png");
		if(modifier == "add1" || modifier == "add2" || modifier == "add3"){
			return base;
		}
		const mod = FileTools.ReadImage(__dir__ + "res/tool/" + type + "/modifier/" + modifier + ".png");
		cvs.drawBitmap(base, 0, 0, null);
		cvs.drawBitmap(mod, 0, 0, null);
		return bmp;
	}

};



Bmp.createFrame("smeltery_heat_bar_0", 5, 18);
Bmp.createFrame("smeltery_lava_bar_0", 14, 54);
Bmp.createFrame("smeltery_metal_bar_0", 54, 54);

Bmp.createSlot("frame", true);
Bmp.createSlot("lapis", true);
Bmp.createSlot("dust", true);
Bmp.createSlot("tool", true);
Bmp.createSlot("rod");
Bmp.createSlot("binding");
Bmp.createSlot("rod2");
Bmp.createSlot("binding2");
Bmp.createSlot("pickaxe");
Bmp.createSlot("shovel");
Bmp.createSlot("hatchet");
Bmp.createSlot("scythe");
Bmp.createSlot("hammer");
Bmp.createSlot("excavator");
Bmp.createSlot("lumberaxe");
Bmp.createSlot("plate");
Bmp.createSlot("sword");
Bmp.createSlot("guard");




// file: api/tinco.js

const Tinco = {

	liquid: ["water", "lava", "obsidian", "iron", "gold", "copper", "tin", "aluminum", "cobalt", "ardite", "bronze", "alubrass", "alumite", "manyullyn"],

	getLiquidY: function(liquid){
		return this.liquid.indexOf(liquid) * 32;
	},

	registerLiquid: function(material, name){
		name = name || material.charAt(0).toUpperCase() + material.slice(1);
		const id = "bucket_" + material;
		IDRegistry.genItemID(id);
		Item.createItem(id, name + " Bucket", {name: id}, {stack: 1});
		LiquidRegistry.registerLiquid(material, name, ["liquid." + material]);
		LiquidRegistry.registerItem(material, {id: 325, data: 0}, {id: ItemID[id], data: 0});
	},

	placeFunction: function(coords, item){
		const c = coords.relative;
		Game.prevent();
		if(GenerationUtils.isTransparentBlock(World.getBlockID(c.x, c.y, c.z))){
			World.setBlock(c.x, c.y, c.z, item.id, item.data);
			World.addTileEntity(c.x, c.y, c.z);
		}
	},

	createTableModel: function(id, i){
		let render, model;
		for(; i--;){
			render = new ICRender.Model();
			model = BlockRenderer.createModel();
			model.addBox(00/16, 12/16, 00/16, 16/16, 16/16, 16/16, id, i);
			model.addBox(00/16, 00/16, 00/16, 04/16, 12/16, 04/16, id, i);
			model.addBox(00/16, 00/16, 12/16, 04/16, 12/16, 16/16, id, i);
			model.addBox(12/16, 00/16, 00/16, 16/16, 12/16, 04/16, id, i);
			model.addBox(12/16, 00/16, 12/16, 16/16, 12/16, 16/16, id, i);
			render.addEntry(model);
			BlockRenderer.setStaticICRender(id, i, render);
		}
	},

	createBerry: function(id, name, isOre){

		id = "berry_" + id;

		IDRegistry.genBlockID(id);
		Block.createBlock(id, [
			{name: name + " Bush", texture: [[id, 0]], inCreative: true},
			{name: "", texture: [[id, 0]]},
			{name: "", texture: [[id, 0]]},
			{name: "", texture: [[id + "_ripe", 0]]}
		]);
		Block.setShape(BlockID[id], 04/16, 00/16, 04/16, 12/16, 08/16, 12/16, 0);
		Block.setShape(BlockID[id], 02/16, 00/16, 02/16, 14/16, 12/16, 14/16, 1);
		BlockRenderer.setCustomCollisionShape(BlockID[id], -1, new ICRender.CollisionShape());
		ToolAPI.registerBlockMaterial(BlockID[id], "plant");
		Block.setDestroyTime(BlockID[id], 2);

		IDRegistry.genItemID(id);
		Item.createItem(id, name, {name: id});

		if(isOre){
			Block.registerPlaceFunction(id, function(coords, item){
				Game.prevent();
				const c = coords.relative;
				if(World.getLightLevel(c.x, c.y, c.z) < 13 && GenerationUtils.isTransparentBlock(World.getBlockID(c.x, c.y, c.z))){
					World.setBlock(c.x, c.y, c.z, BlockID[id]);
				}
			});
			Block.setRandomTickCallback(BlockID[id], function(x, y, z, id, data){
				data < 4 && Math.random() < 0.5 && World.getLightLevel(x, y, z) < 10 && World.setBlock(x, y, z, id, data + 1);
			});
		}
		else{
			Block.setRandomTickCallback(BlockID[id], function(x, y, z, id, data){
				data < 4 && Math.random() < 0.5 && World.setBlock(x, y, z, id, data + 1);
			});
		}

		Block.registerDropFunction(id, function(){
			return [BlockID[id], 1];
		});

		Block.registerClickFunction(id, function(coords, item, block){
			if(block.data == 3){
				const relative = coords.relative
				World.setBlock(coords.x, coords.y, coords.z, BlockID[id], 2);
				World.drop(relative.x + 0.5, relative.y + 0.5, relative.z + 0.5, ItemID[id], 1);
			}
		});

	},

	addNuggetRecipe: function(ingot, nugget){
		Recipes.addShaped({id: ingot}, ["aaa", "aaa", "aaa"], ["a", nugget, 0]);
		Recipes.addShaped({id: nugget, count: 9}, ["a"], ["a", ingot, 0]);
	}

};


Tinco.registerLiquid("alubrass", "Aluminum Brass");
Tinco.registerLiquid("aluminum");
Tinco.registerLiquid("alumite");
Tinco.registerLiquid("ardite");
Tinco.registerLiquid("bronze");
Tinco.registerLiquid("cobalt");
Tinco.registerLiquid("copper");
Tinco.registerLiquid("gold");
Tinco.registerLiquid("iron");
Tinco.registerLiquid("manyullyn");
Tinco.registerLiquid("obsidian");
Tinco.registerLiquid("tin");




// file: api/material.js

const Material = {

	melt: {},
	alloy: [],
	cast: {},
	material: {},
	shard: {},
	shape: {},

	addMeltingRecipe: function(id, data, liquid, amount){
		this.melt[~data ? id + ":" + data : id] = {liquid: liquid, amount: amount};
	},
	getMeltingRecipe: function(id, data){
		return this.melt[id] || this.melt[id + ":" + data];
	},

	addAlloyRecipe: function(liquid, amount){
		const input = [];
		for(let i = 2; i < arguments.length; i += 2){
			input.push({liquid: arguments[i], amount: arguments[i + 1] / 1000});
		}
		this.alloy.push({input: input, result: {liquid: liquid, amount: amount / 1000}});
	},

	createCast: function(type, cost, name, isMetal){
		const id = (isMetal ? "cast_" : "pattern_") + type;
		this.cast[IDRegistry.genItemID(id)] = {
			type: type,
			cost: isMetal ? cost * 144 / 1000 : cost,
			isMetal: isMetal || false
		};
		Item.createItem(id, name + (isMetal ? " Cast" : " Pattern"), {name: id});
	},
	getCast: function(id){
		return this.cast[id];
	},

	registerMaterial: function(id, data, material, cost, type, isMetal){
		this.material[~data ? id + ":" + data : id] = {
			material: material,
			cost: cost,
			type: type,
			isMetal: isMetal || false
		};
	},
	getMaterial: function(id, data){
		return this.material[id] || this.material[id + ":" + data];
	},

	registerShard: function(id, data, material){
		this.registerMaterial(id, data || -1, material, 0.5);
		this.shard[material] = {id: id, data: data};
	},
	getShard: function(material){
		return this.shard[material];
	},

	registerShape: function(shape){
		for(let i = 1; i < arguments.length; i++){
			this.shape[arguments[i]] = shape;
		}
	},
	getShape: function(id){
		return this.shape[id];
	}

};




// file: api/tool.js

const Tool = {

	startupMeta: {},
	toolData : {},

	level: ["", "Stone", "Iron", "Redstone", "Obsidian", "Cobalt", "Manyullyn"],

	param: {
		Wooden: {durability: 97, modifier: 1, efficiency: 3.5, level: 2, damage: 0},
		Stone: {durability: 131, modifier: 0.5, efficiency: 4, level: 2, damage: 1, trait: {name: "Stonebound", level: 1}},
		Iron: {durability: 250, modifier: 1.3, efficiency: 6, level: 3, damage: 2, trait: {name: "Reinforced", level: 1}},
		Flint: {durability: 171, modifier: 0.7, efficiency: 5.25, level: 2, damage: 2},
		Cactus: {durability: 150, modifier: 1, efficiency: 5, level: 2, damage: 2, trait: {name: "Jagged", level: 1}},
		Bone: {durability: 200, modifier: 1, efficiency: 4, level: 2, damage: 1},
		Obsidian: {durability: 89, modifier: 0.8, efficiency: 7, level: 4, damage: 2, trait: {name: "Reinforced", level: 3}},
		Netherrack: {durability: 131, modifier: 1.2, efficiency: 4, level: 3, damage: 1, trait: {name: "Stonebound", level: 1}},
		Slime: {durability: 500, modifier: 1.5, efficiency: 1.5, level: 1, damage: 0, trait: {name: "Slimy", level: 1}},
		Paper: {durability: 30, modifier: 0.3, efficiency: 2, level: 1, damage: 0, trait: {name: "Writable", level: 1}},
		Cobalt: {durability: 800, modifier: 1.75, efficiency: 14, level: 5, damage: 3, trait: {name: "Reinforced", level: 2}},
		Ardite: {durability: 500, modifier: 2, efficiency: 8, level: 5, damage: 3, trait: {name: "Stonebound", level: 2}},
		Manyullyn: {durability: 1200, modifier: 2.5, efficiency: 9, level: 6, damage: 4},
		Copper: {durability: 180, modifier: 1.15, efficiency: 5, level: 2, damage: 2},
		Bronze: {durability: 550, modifier: 1.3, efficiency: 8, level: 3, damage: 2, trait: {name: "Reinforced", level: 1}},
		Alumite: {durability: 700, modifier: 1.3, efficiency: 8, level: 5, damage: 3, trait: {name: "Reinforced", level: 2}}
	},

	partData: {},
	partName: {
		rod: {name: " Tool Rod", cost: 0.5},
		pickaxe: {name: " Pickaxe Head", cost: 1},
		shovel: {name: " Shovel Head", cost: 1},
		hatchet: {name: " Axe Head", cost: 1},
		sword: {name: " Sword Blade", cost: 1},
		guard: {name: " Wide Guard", cost: 0.5},
		binding: {name: " Tool Binding", cost: 0.5},
		rod2: {name: " Tough Rod", cost: 3},
		binding2: {name: " Tough Binding", cost: 3},
		plate: {name: " Large Plate", cost: 8},
		lumberaxe: {name: " Broadaxe Head", cost: 8},
		scythe: {name: " Scythe Head", cost: 8},
		excavator: {name: " Excavator Head", cost: 8},
		hammer: {name: " Hammer Head", cost: 8}
	},
	createAllPart: function(name, isMetal){
		const material = name.toLowerCase();
		let id = "";
		for(let key in this.partName){
			id = "part_" + key + "_" + material;
			IDRegistry.genItemID(id);
			Item.createItem(id, name + this.partName[key].name, {name: id});
			this.partData[ItemID[id]] = {type: key, material: name};
			Material.registerShape(key, ItemID[id]);
			Material.registerMaterial(ItemID[id], -1, material, this.partName[key].cost, key, isMetal);
			Material.addMeltingRecipe(ItemID[id], material, this.partName[key].cost * 144 / 1000);
		}
	},

	getPartData: function(id){
		return this.partData[id];
	},


	createTool: function(type, material){
		let path = __dir__ + "res/items-opaque/tool/meta.json"
		const meta = FileTools.ReadJSON(path);
		meta[type]++;
		FileTools.WriteJSON(path, meta);
		if(!this.toolData[type]){
			this.toolData[type] = {};
		}
		this.toolData[type][meta[type]] = {
			material: material,
			uses: 0,
			repair: 0,
			slot: 3,
			modifier: []
		};
		path = __dir__ + "res/items-opaque/tool/tinkers_" + type + "_";
		FileTools.WriteImage(path + meta[type] + ".png", UI.TextureSource.get(type + "-" + material.join("_")));
		FileTools.WriteImage(path + "broken_" + meta[type] + ".png", Bmp.createTool(type, material, type == "hammer" ? 1 : 0));
		return meta[type];
	},


	modifier: {
		diamond: {name: "Diamond", max: 1, multi: false},
		emerald: {name: "Emerald", max: 1, multi: false},
		redstone: {name: "Haste", max: 50, multi: true},
		moss: {name: "Auto-Repair", max: 1, multi: true},
		lava: {name: "Auto-Smelt", max: 1, multi: false, compatible: ["silky"]},
		lapis: {name: "Luck", max: 450, multi: false, compatible: ["silky"]},
		quartz: {name: "Sharpness", max: 72, multi: true},
		blaze: {name: "Fiery", max: 25, multi: true},
		necrotic: {name: "Necrotic", max: 1, multi: true},
		silky: {name: "Silky", max: 1, multi: false, compatible: ["lava", "lapis"]},
		reinforced: {name: "Reinforced", max: 1, multi: true},
		piston: {name: "Knockback", max: 10, multi: true},
		head: {name: "Beheading", max: 1, multi: true},
		spider: {name: "Bane of Arthropods", max: 4, multi: true},
		smite: {name: "Smite", max: 36, multi: true},
	},

	modifierRecipe: {},
	addModifierRecipe: function(result, item1, item2){
		item2.id = item2.id || 0;
		if(!("data" in item1) && !("data" in item2)){
			this.modifierRecipe[item1.id + "," + item2.id] = result;
			this.modifierRecipe[item2.id + "," + item1.id] = result;
			return;
		}
		item1.data = item1.data || 0;
		item2.data = item2.data || 0;
		this.modifierRecipe[item1.id + ":" + item1.data + "," + item2.id + item2.data] = result;
		this.modifierRecipe[item2.id + ":" + item2.data + "," + item1.id + item1.data] = result;
	},
	getModifierRecipe: function(item1, item2){
		return this.modifierRecipe[item1.id + "," + item2.id] || this.modifierRecipe[item1.id + ":" + item1.data + "," + item2.id + item2.data];
	},


	getToolType: function(id){
		return this.toolType[id];
	},
	getToolData: function(id, data){
		const type = this.getToolType(id);
		if(type){
			return this.toolData[type][data];
		}
	},

	getTrait: function(material){
		const trait = {
			Reinforced: 0,
			Stonebound: 0,
			Jagged: 0,
			Writable: 0,
			Slimy: 0
		};
		let traitData;
		for(let i = material.length; i--;){
			traitData = this.param[material[i]].trait;
			if(traitData && trait[traitData.name] < traitData.level){
				trait[traitData.name] = traitData.level;
			}
		}
		return trait;
	},

	getParam: function(id, toolData){
		const part = [
			this.param[toolData.material[0]] || {},
			this.param[toolData.material[1]] || {},
			this.param[toolData.material[2]] || {},
			this.param[toolData.material[3]] || {}
		];
		const param = {
			durability: 0,
			efficiency: part[0].efficiency,
			level: part[0].level,
			damage: part[0].damage
		};
		switch(id){
			default:
				param.durability = part[0].durability * part[1].modifier;
			break;
			case ItemID.tinkers_mattock:
				param.durability = (part[0].durability + part[2].durability) * 0.75 * part[1].modifier;
			break;
			case ItemID.tinkers_lumberaxe:
				param.durability = (part[0].durability + part[2].durability) * 0.5625 * (part[1].modifier + part[3].modifier) * 2.5;
			break;
			case ItemID.tinkers_excavator:
				param.durability = (part[0].durability + part[2].durability) * 0.5625 * (part[1].modifier + part[3].modifier) * 2.75;
			break;
			case ItemID.tinkers_hammer:
				param.durability = (part[0].durability + part[2].durability + part[3].durability) * 3 * part[1].modifier;
				param.efficiency = (part[0].efficiency + part[2].efficiency + part[3].efficiency) / 7.5;
			break;
			case ItemID.tinkers_scythe:
				param.durability = part[0].durability * 3 * (part[1].modifier + part[2].modifier + part[3].modifier);
			break;
		}
		let redstone = quartz = 0;
		for(let i = 0; i < toolData.modifier.length; i++){
			switch(toolData.modifier[i].name){
				case "diamond":
					param.durability += 500;
					param.level = Math.max(param.level, 4);
				break;
				case "emerald":
					param.durability *= 1.5;
					param.level = Math.max(param.level, 3);
				break;
				case "redstone":
					redstone +=  toolData.modifier[i].level;
				break;
				case "quartz":
					quartz +=  toolData.modifier[i].level;
				break;
			}
		}

		let flag10 = flag20 = false;

		for(; redstone--;){
			flag10 = param.efficiency <= 10;
			flag20 = param.efficiency <= 20;
			param.efficiency += (flag10 ? 0.15 : flag20 ? 0.1 : 0.05) - (flag20 ? 0.05 * param.efficiency / (flag10 ? 10 : 20) : 0);
		}

		for(; quartz--;){
			flag10 = param.damage <= 10;
			flag20 = param.damage <= 20;
			param.damage += (flag10 ? 0.05 : flag20 ? 0.025 : 0.015) - (flag10 ? 0.025 : flag20 ? 0.01 : 0) * (param.damage / (flag10 ? 10 : 20));
		}

		const trait = this.getTrait(toolData.material);
		const bonus = Math.log(toolData.uses / 72 + 1) * 2;
		param.efficiency = Math.max(0, param.efficiency + bonus * (trait.Stonebound - trait.Jagged));
		param.damage = Math.max(0, param.damage + bonus * (trait.Jagged - trait.Stonebound));
		param.durability |= 0;
		return param;
	},


	damageTool: function(toolData, max, point){
		const trait = this.getTrait(toolData.material);
		let reinforced = 0;
		for(let i = toolData.modifier.length; i--;){
			if(toolData.modifier[i].name == "reinforced"){
				reinforced++;
			}
		}
		if(Math.random() > (trait.Reinforced + reinforced) * 0.1){
			toolData.uses = Math.min(max, toolData.uses + point);
		}
	},


	toolType: {},
	registerTool: function(type, name, blockMaterial, damage, option){

		const key = "tinkers_" + type
		const id = IDRegistry.genItemID(key);
		Item.createItem(key, name, {name: "stick"}, {stack: 1, isTech: true});

		this.toolType[id] = type;

		Item.registerIconOverrideFunction(id, function(item){
			if(item.data > Tool.startupMeta[type]){
				return {name: "tinkers_missing"};
			}
			const toolData = Tool.getToolData(item.id, item.data);
			const param = Tool.getParam(item.id, toolData);
			let name = "tinkers_" + type;
			if(toolData.uses >= param.durability){
				name += "_broken";
			}
			return {name: name, meta: item.data};
		});

		Item.registerNameOverrideFunction(id, function(item, defName){
			let newName = defName;
			const toolData = Tool.getToolData(item.id, item.data);
			if(toolData){
				const param = Tool.getParam(item.id, toolData);
				newName = toolData.material[0] + " " + defName + "  " + (param.durability - toolData.uses) + " / " + param.durability;
			}
			return newName;
		});

		ToolAPI.registerTool(id, {efficiency: 0, durability: 0, level: 0, damage: 0}, blockMaterial, {
			damage: damage,

			calcDestroyTime: option.calcDestroyTime || function(item, coords, block, timeData){
				const realData = ToolAPI.getToolData(item.id);
				const toolData = Tool.getToolData(item.id, item.data);
				if(!toolData){
					realData.toolMaterial.level = 0;
					return timeData.base;
				}
				const param = Tool.getParam(item.id, toolData);
				const blockData = ToolAPI.getBlockData(block.id);
				if(toolData.uses >= param.durability || !realData.blockMaterials[blockData.material.name] || param.level < blockData.level){
					realData.toolMaterial.level = 0;
					return timeData.base;
				}
				realData.toolMaterial.level = param.level;
				return timeData.base / param.efficiency;
			},

			onDestroy: option.onDestroy || function(item){
				const toolData = Tool.getToolData(item.id, --item.data);
				toolData && Tool.damageTool(toolData, Tool.getParam(item.id, toolData).durability, option.isWeapon ? 2 : 1);
			},

			onMineBlock: function(coords, item, block){
				const toolData = Tool.getToolData(item.id, item.data);
				toolData && Math.random() < 0.0033 * 1000 && Tool.getTrait(toolData.material).Slimy && Entity.spawn(coords.x + 0.5, coords.y, coords.z + 0.5, 37);
			},

			onAttack: function(item, ent){
				item.data -= 2;
				const realData = ToolAPI.getToolData(item.id);
				const toolData = Tool.getToolData(item.id, item.data);
				if(!toolData){
					realData.toolMaterial.damage = 0;
					return;
				}
				const param = Tool.getParam(item.id, toolData);
				if(toolData.point >= param.durability){
					realData.toolMaterial.damage = 0;
					return;
				}
				realData.toolMaterial.damage = param.damage;
				Tool.damageTool(toolData, param.durability, option.isWeapon ? 1 : 2);

				const modifier = {
					blaze: 0,
					lava: 0,
					piston: 0,
					necrotic: 0,
					spider: 0,
					smite: 0
				};

				for(let i = toolData.modifier.length; i--;){
					switch(toolData.modifier[i].name){
						case "blaze": modifier.blaze += toolData.modifier[i].level; break;
						case "lava": modifier.lava = 60; break;
						case "piston": modifier.piston += toolData.modifier[i].level; break;
						case "necrotic": modifier.necrotic++; break;
						case "spider": modifier.spider += toolData.modifier[i].level; break;
						case "smite": modifier.smite += toolData.modifier[i].level; break;
					}
				}

				option.onAttack && option.onAttack(item, ent, modifier);

				const time = modifier.blaze * 4 + modifier.lava;
				time && Entity.setFire(ent, time);
				modifier.piston && Entity.moveToAngle(ent, Entity.getLookAngle(player), {speed: modifier.piston / 10});
				modifier.necrotic && Entity.healEntity(player, modifier.necrotic * 2);

				if(Entity.isArthropod(ent) && modifier.spider){
					realData.toolMaterial.damage += (Math.random() * 2 + 2) * modifier.spider / 4;
				}
				else if(Entity.isUndead(ent) && modifier.smite){
					realData.toolMaterial.damage += (Math.random() * 2 + 2) * modifier.smite / 36;
				}

			},

			modifyEnchant: function(enchant, item){
				const toolData = Tool.getToolData(item.id, item.data);
				for(let i = toolData.modifier.length; i--;){
					if(toolData.modifier[i].name == "lapis"){
						if(toolData.modifier[i].level == 450){
							enchant.fortune = 3;
							break;
						}
						if(toolData.modifier[i].level >= 300){
							enchant.fortune = 2;
							break;
						}
						if(toolData.modifier[i].level >= 100){
							enchant.fortune = 1;
							break;
						}
						break;
					}
					if(toolData.modifier[i].name == "silky"){
						enchant.silk = 1;
						break;
					}
				}
			},

			onBroke: function(){
				return true;
			}
		});

	},


	get3x3Area: function(side){
		const area = {x: 1, y: 1, z: 1};
		switch(side & 6){
			case 0: area.y = 0; break;
			case 2: area.z = 0; break;
			case 4: area.x = 0; break;
		}
		return area;
	}


};


Callback.addCallback("EntityDeath", function(ent, attacker){
	const head = Entity.getHeadMeta(ent);
	if(attacker == player && ~head){
		const item = Player.getCarriedItem();
		const toolData = Tool.getToolData(item.id, item.data);
		if(toolData){
			let level = 0;
			for(let i = toolData.modifier.length; i--;){
				if(toolData.modifier[i].name == "head"){
					level++;
				}
			}
			if(Math.random() < level / 10){
				const pos = Player.getPosition();
				World.drop(pos.x, pos.y, pos.z, 397, 1, head);
			}
		}
	}
});


Callback.addCallback("tick", function(){
	ThreadTime = World.getThreadTime();
	if(ThreadTime & 511){
		return;
	}
	const select = Player.getSelectedSlotId();
	const pos = Player.getPosition();
	const light = World.getLightLevel(pos.x, pos.y + 1, pos.z)
	let i = j = moss = 0;
	let item, toolData;
	for(i = 9; i--;){
		if(i == select){
			continue;
		}
		item = Player.getInventorySlot(i);
		toolData = Tool.getToolData(item.id, item.data);
		if(!toolData){
			continue;
		}
		moss = 0;
		for(j = toolData.modifier.length; j--;){
			if(toolData.modifier[j].name == "moss"){
				moss += toolData.modifier[j].level;
			}
		}
		if(moss){
			toolData.uses -= Math.min(toolData.uses, moss + Math.random() * light | 0);
		}
	}

});




// file: block/ore.js

IDRegistry.genBlockID("ore_copper");
Block.createBlock("ore_copper", [{name: "Copper Ore", texture: [["ore_copper", 0]], inCreative: true}]);
ToolAPI.registerBlockMaterial(BlockID.ore_copper, "stone", 1);
Block.setDestroyTime(BlockID.ore_copper, 5);

IDRegistry.genBlockID("ore_tin");
Block.createBlock("ore_tin", [{name: "Tin Ore", texture: [["ore_tin", 0]], inCreative: true}]);
ToolAPI.registerBlockMaterial(BlockID.ore_tin, "stone", 1);
Block.setDestroyTime(BlockID.ore_tin, 5);

IDRegistry.genBlockID("ore_aluminum");
Block.createBlock("ore_aluminum", [{name: "Aluminum Ore", texture: [["ore_aluminum", 0]], inCreative: true}]);
ToolAPI.registerBlockMaterial(BlockID.ore_aluminum, "stone", 1);
Block.setDestroyTime(BlockID.ore_aluminum, 5);

IDRegistry.genBlockID("ore_ardite");
Block.createBlock("ore_ardite", [{name: "Ardite Ore", texture: [["ore_ardite", 0]], inCreative: true}]);
ToolAPI.registerBlockMaterial(BlockID.ore_ardite, "stone", 1);
Block.setDestroyTime(BlockID.ore_ardite, 5);

IDRegistry.genBlockID("ore_cobalt");
Block.createBlock("ore_cobalt", [{name: "Cobalt Ore", texture: [["ore_cobalt", 0]], inCreative: true}]);
ToolAPI.registerBlockMaterial(BlockID.ore_cobalt, "stone", 1);
Block.setDestroyTime(BlockID.ore_cobalt, 5);


Tinco.createBerry("iron", "Iron Oreberry", true);
Tinco.createBerry("gold", "Gold Oreberry", true);
Tinco.createBerry("copper", "Copper Oreberry", true);
Tinco.createBerry("tin", "Tin Oreberry", true);
Tinco.createBerry("aluminum", "Aluminum Oreberry", true);
Tinco.createBerry("xp", "Essence Berry");


Callback.addCallback("PreLoaded", function(){

	const Ore = {
		copper: "GenerateChunkUnderground",
		tin: "GenerateChunkUnderground",
		aluminum: "GenerateChunkUnderground",
		ardite: "GenerateNetherChunk",
		cobalt: "GenerateNetherChunk"
	};

	const Cfg = {count: 0, size: 0, minY: 0, maxY: 0};

	for(let key in Ore){
		Cfg.count = __config__.getNumber("OreGen." + key + ".count") | 0;
		Cfg.size = __config__.getNumber("OreGen." + key + ".size") | 0;
		Cfg.minY = __config__.getNumber("OreGen." + key + ".minY") | 0;
		Cfg.maxY = __config__.getNumber("OreGen." + key + ".maxY") | 0;
		if(Cfg.count){
			Callback.addCallback(Ore[key], function(x, z){
				let coords;
				for(let i = Cfg.count; i--;){
					coords = GenerationUtils.randomCoords(x, z, Cfg.minY, Cfg.maxY);
					GenerationUtils.generateOre(coords.x, coords.y, coords.z, BlockID["ore_" + key], 0, Cfg.size);
				}
			});
		}
	}

	const Berry = ["iron", "gold", "copper", "tin", "aluminum", "xp"];

	for(let i = Berry.length; i--;){
		Cfg.count = __config__.getNumber("BerryGen." + Berry[i] + ".count") | 0;
		Cfg.size = __config__.getNumber("BerryGen." + Berry[i] + ".size") | 0;
		Cfg.minY = __config__.getNumber("BerryGen." + Berry[i] + ".minY") | 0;
		Cfg.maxY = __config__.getNumber("BerryGen." + Berry[i] + ".maxY") | 0;
		if(Cfg.count){
			Callback.addCallback("GenerateChunkUnderground", function(x, z){
				let coords;
				for(let j = Cfg.count; j--;){
					coords = GenerationUtils.randomCoords(x, z, Cfg.minY, Cfg.maxY);
					GenerationUtils.generateOre(coords.x, coords.y, coords.z, BlockID["berry_" + Berry[i]], 2, Cfg.size);
				}
			});
		}
	}


	Recipes.addFurnace(BlockID.ore_copper, ItemID.ingot_copper);
	Recipes.addFurnace(BlockID.ore_tin, ItemID.ingot_tin);
	Recipes.addFurnace(BlockID.ore_aluminum, ItemID.ingot_aluminum);
	Recipes.addFurnace(BlockID.ore_ardite, ItemID.ingot_ardite);
	Recipes.addFurnace(BlockID.ore_cobalt, ItemID.ingot_cobalt);
	Recipes.addFurnace(ItemID.berry_iron, ItemID.nugget_iron);
	Recipes.addFurnace(ItemID.berry_gold, 371);
	Recipes.addFurnace(ItemID.berry_copper, ItemID.nugget_copper);
	Recipes.addFurnace(ItemID.berry_tin, ItemID.nugget_tin);
	Recipes.addFurnace(ItemID.berry_aluminum, ItemID.nugget_aluminum);

});




// file: block/block.js

IDRegistry.genBlockID("seared_brick");
Block.createBlock("seared_brick", [{name: "Seared Brick", texture: [["seared_brick", 0]], inCreative: true}]);
Callback.addCallback("PreLoaded", function(){
	Recipes.addShaped({id: BlockID.seared_brick}, ["aa", "aa"], ["a", ItemID.seared_brick, 0]);
});

IDRegistry.genBlockID("slimy_mud");
Block.createBlock("slimy_mud", [{name: "Slimy Mud", texture: [["slimy_mud", 0]], inCreative: true}]);
Recipes.addShaped({id: BlockID.slimy_mud}, ["aa", "aa", "bc"], ["a", 341, 0, "b", 12, -1, "c", 3, 0]);

IDRegistry.genBlockID("graveyard_soil");
Block.createBlock("graveyard_soil", [{name: "Graveyard Soil", texture: [["graveyard_soil", 0]], inCreative: true}]);
Recipes.addShapeless({id: BlockID.graveyard_soil}, [{id: 3}, {id: 351, data: 15}, {id: 367}]);

IDRegistry.genBlockID("consecrated_soil");
Block.createBlock("consecrated_soil", [{name: "Consecrated Soil", texture: [["consecrated_soil", 0]], inCreative: true}]);
Recipes.addFurnace(BlockID.consecrated_soil, BlockID.graveyard_soil);




// file: item/tool.js

Tool.registerTool("pickaxe", "Pickaxe", ["stone"], 1, {});
Tool.registerTool("shovel", "Shovel", ["dirt"], 2, {});
Tool.registerTool("hatchet", "Hatchet", ["wood", "plant"], 3, {});
Tool.registerTool("mattock", "Mattock", ["dirt", "wood"], 4, {});
Tool.registerTool("sword", "Broadsword", ["plant"], 4, {isWeapon: true});


(function(){

	const func3x3 = function(item, coords){
		const realData = ToolAPI.getToolData(item.id);
		const toolData = Tool.getToolData(item.id, --item.data);
		if(!toolData){
			return;
		}
		const param = Tool.getParam(item.id, toolData);
		if(++toolData.uses < param.durability){
			const area = Tool.get3x3Area(coords.side);
			let blockData;
			let x = y = z = count = 0;
			for(x = coords.x - area.x; x <= coords.x + area.x; x++){
			for(y = coords.y - area.y; y <= coords.y + area.y; y++){
			for(z = coords.z - area.z; z <= coords.z + area.z; z++){
				if(!x && !y && !z){
					continue;
				}
				blockData = ToolAPI.getBlockData(World.getBlockID(x, y, z)) || {};
				if(realData.blockMaterials[blockData.material ? blockData.material.name : ""] && realData.toolMaterial.level >= blockData.level){
					World.destroyBlock(x, y, z, true);
					count++;
				}
			}
			}
			}
			Tool.damageTool(toolData, param.durability, count);
		}
	};

	Tool.registerTool("hammer", "Hammer", ["stone"], 3, {onDestroy: func3x3});
	Tool.registerTool("excavator", "Excavator", ["dirt"], 2, {onDestroy: func3x3});

})();


Tool.registerTool("lumberaxe", "Lumber Axe", ["wood"], 3, {
	onDestroy: function(item, coords, block){
		const realData = ToolAPI.getToolData(item.id);
		const toolData = Tool.getToolData(item.id, --item.data);
		if(!toolData){
			return;
		}
		const param = Tool.getParam(item.id, toolData);
		if(++toolData.uses < param.durability){
			const woodLog = [17, 162];
			let x = y = z = count = 0;
			if(~woodLog.indexOf(block.id)){
				x = coords.x;
				y = coords.y;
				z = coords.z;
				while(~woodLog.indexOf(World.getBlockID(x, ++y, z))){
					World.destroyBlock(x, y, z, true);
					count++;
				}
			}
			else{
				const area = Tool.get3x3Area(coords.side);
				let blockData;
				for(x = coords.x - area.x; x <= coords.x + area.x; x++){
				for(y = coords.y - area.y; y <= coords.y + area.y; y++){
				for(z = coords.z - area.z; z <= coords.z + area.z; z++){
					if(!x && !y && !z){
						continue;
					}
					blockData = ToolAPI.getBlockData(World.getBlockID(x, y, z)) || {};
					if(realData.blockMaterials[blockData.material ? blockData.material.name : ""]){
						World.destroyBlock(x, y, z, true);
						count++;
					}
				}
				}
				}
			}
			Tool.damageTool(toolData, param.durability, count);
		}
	}
});


Tool.registerTool("scythe", "Scythe", ["plant"], 3, {
	isWeapon: true,
	onDestroy: function(item, coords, block){
		const realData = ToolAPI.getToolData(item.id);
		const toolData = Tool.getToolData(item.id, --item.data);
		if(!toolData){
			return;
		}
		const param = Tool.getParam(item.id, toolData);
		let blockData = ToolAPI.getBlockData(block.id);
		if(++toolData.uses < param.durability && realData.blockMaterials[blockData.material ? blockData.material.name : ""]){
			let x = y = z = count = 0;
			for(x = coords.x -1; x <= coords.x + 1; x++){
			for(y = coords.y -1; y <= coords.y + 1; y++){
			for(z = coords.z -1; z <= coords.z + 1; z++){
				if(!x && !y && !z){
					continue;
				}
				blockData = ToolAPI.getBlockData(World.getBlockID(x, y, z)) || {};
				if(realData.blockMaterials[blockData.material ? blockData.material.name : ""]){
					World.destroyBlock(x, y, z, true);
					count++;
				}
			}
			}
			}
			Tool.damageTool(toolData, param.durability, count);
		}
	},
	onAttack: function(item, ent, modifier){
		const realData = ToolAPI.getToolData(item.id);
		const defDamage = realData.damage + realData.toolMaterial.damage;
		const entity = Entity.getAllInRange(Entity.getPosition(ent), 1.5);
		const angle = Entity.getLookAngle(player);
		angle.yaw = 0.2;
		let time = random = damage = health = 0;
		modifier.piston += 5;
		for(let i = entity.length; i--;){
			if(entity[i] == ent || Entity.isAbiosis(entity[i])){
				continue;
			}
			time = modifier.blaze % 5 * 20 + modifier.lava;
			if(time){
				Entity.setFire(entity[i], time);
			}
			Entity.moveToAngle(entity[i], angle, {speed: modifier.piston / 10});
			if(modifier.necrotic){
				Entity.healEntity(player, modifier.necrotic * 2);
			}
			random = Math.random() * 2 + 2;
			damage = defDamage;
			if(Entity.isArthropod(entity[i]) && modifier.spider){
				damage += random * modifier.spider / 4;
			}
			else if(Entity.isUndead(entity[i]) && modifier.smite){
				damage += random * modifier.smite / 36;
			}
			damage = (damage | 0) + (Math.random() < damage - (damage | 0) ? 1 : 0);
			health = Entity.getHealth(entity[i]);
			Entity.setHealth(entity[i], health - Math.min(damage, health));
		}
	}
});


Tool.registerTool("battleaxe", "Battle Axe", ["wood"], 4, {
	isWeapon: true,
	onDestroy: function(item, coords, block){
		const realData = ToolAPI.getToolData(item.id);
		const toolData = Tool.getToolData(item.id, --item.data);
		if(!toolData){
			return;
		}
		const param = Tool.getParam(item.id, toolData);
		if(++toolData.uses < param.durability){
			const area = Tool.get3x3Area(coords.side);
			let blockData;
			let x = y = z = count = 0;
			for(let key in area){
				area[key] *= 4;
			}
			for(x = coords.x - area.x; x <= coords.x + area.x; x++){
			for(y = coords.y - area.y; y <= coords.y + area.y; y++){
			for(z = coords.z - area.z; z <= coords.z + area.z; z++){
				if(!x && !y && !z){
					continue;
				}
				blockData = ToolAPI.getBlockData(World.getBlockID(x, y, z)) || {};
				if(realData.blockMaterials[blockData.material ? blockData.material.name : ""]){
					World.destroyBlock(x, y, z, true);
					count++;
				}
			}
			}
			}
			Tool.damageTool(toolData, param.durability, count);
		}
	}
});


Item.registerNoTargetUseFunction("tinkers_battleaxe", function(){
	const coords = Player.getPosition();
	const angle = Entity.getLookAngle(player);
	const vec = Entity.getLookVectorByAngle(angle);
	for(let i = 0; i < 8; i++){
		coords.x += vec.x;
		coords.y += vec.y;
		coords.z += vec.z;
		if(World.getBlockID(coords.x, coords.y, coords.z)){
			return;
		}
	}
	Entity.moveToAngle(player, {yaw: angle.yaw, pitch: 0.1}, {speed: 3});
	Entity.addEffect(player, 17, 0, 80);
	Entity.addEffect(player, 1, 0, 160);
	Entity.addEffect(player, 5, 0, 160);
	Entity.addEffect(player, 8, 0, 160);
});




// file: item/part.js

Tool.createAllPart("Wooden");
Tool.createAllPart("Stone");
Tool.createAllPart("Iron", true);
Tool.createAllPart("Flint");
Tool.createAllPart("Cactus");
Tool.createAllPart("Bone");
Tool.createAllPart("Obsidian");
Tool.createAllPart("Netherrack");
Tool.createAllPart("Slime");
Tool.createAllPart("Paper");
Tool.createAllPart("Cobalt", true);
Tool.createAllPart("Ardite", true);
Tool.createAllPart("Manyullyn", true);
Tool.createAllPart("Copper", true);
Tool.createAllPart("Bronze", true);
Tool.createAllPart("Alumite", true);




// file: item/pattern.js

IDRegistry.genItemID("pattern_blank");
Item.createItem("pattern_blank", "Blank Pattern", {name: "pattern_blank"});
Recipes.addShaped({id: ItemID.pattern_blank}, ["ab", "ba"], ["a", 5, -1, "b", 280, 0]);

Material.createCast("rod", 0.5, "Tool Rod");
Material.createCast("pickaxe", 1, "Pickaxe Head");
Material.createCast("shovel", 1, "Shovel Head");
Material.createCast("hatchet", 1, "Axe Head");
Material.createCast("sword", 1, "Sword Blade");
Material.createCast("guard", 0.5, "Wide Guard");
Material.createCast("binding", 0.5, "Tool Binding");
Material.createCast("rod2", 3, "Tough Rod");
Material.createCast("binding2", 3, "Tough Binding");
Material.createCast("plate", 8, "Large Plate");
Material.createCast("lumberaxe", 8, "Broad Axe Head");
Material.createCast("scythe", 8, "Scythe Head");
Material.createCast("excavator", 8, "Excavator Head");
Material.createCast("hammer", 8, "Hammer Head");


IDRegistry.genItemID("slime_crystal");
Item.createItem("slime_crystal", "Slime Crystal", {name: "slime_crystal"});
Recipes.addFurnace(BlockID.slimy_mud, ItemID.slime_crystal);

IDRegistry.genItemID("paper_stack");
Item.createItem("paper_stack", "Paper Stack", {name: "paper_stack"});
Recipes.addShaped({id: ItemID.paper_stack}, ["aa", "aa"], ["a", 339, 0]);

IDRegistry.genItemID("shard_stone");
Item.createItem("shard_stone", "Stone Shard", {name: "shard_stone"});

IDRegistry.genItemID("shard_flint");
Item.createItem("shard_flint", "Flint Shard", {name: "shard_flint"});

IDRegistry.genItemID("shard_cactus");
Item.createItem("shard_cactus", "Cactus Shard", {name: "shard_cactus"});

IDRegistry.genItemID("shard_obsidian");
Item.createItem("shard_obsidian", "Obsidian Shard", {name: "shard_obsidian"});

IDRegistry.genItemID("shard_netherrack");
Item.createItem("shard_netherrack", "Netherrack Shard", {name: "shard_netherrack"});

IDRegistry.genItemID("shard_slime");
Item.createItem("shard_slime", "Slime Shard", {name: "shard_slime"});


Material.registerMaterial(5, -1, "wooden", 1);
Material.registerMaterial(4, -1, "stone", 1);
Material.registerMaterial(318, -1, "flint", 1);
Material.registerMaterial(81, -1, "cactus", 1);
Material.registerMaterial(352, -1, "bone", 1);
Material.registerMaterial(49, -1, "obsidian", 1);
Material.registerMaterial(87, -1, "netherrack", 1);
Material.registerMaterial(ItemID.slime_crystal, -1, "slime", 1);
Material.registerMaterial(ItemID.paper_stack, -1, "paper", 1);

Material.registerShard(280, 0, "wooden");
Material.registerShard(ItemID.shard_stone, 0, "stone");
Material.registerShard(ItemID.shard_flint, 0, "flint");
Material.registerShard(ItemID.shard_cactus, 0, "cactus");
Material.registerShard(351, 15, "bone");
Material.registerShard(ItemID.shard_obsidian, 0, "obsidian");
Material.registerShard(ItemID.shard_netherrack, 0, "netherrack");
Material.registerShard(ItemID.shard_slime, 0, "slime");
Material.registerShard(339, 0, "paper");




// file: item/cast.js

IDRegistry.genItemID("ingot_copper");
Item.createItem("ingot_copper", "Copper Ingot", {name: "ingot_copper"});

IDRegistry.genItemID("ingot_tin");
Item.createItem("ingot_tin", "Tin Ingot", {name: "ingot_tin"});

IDRegistry.genItemID("ingot_aluminum");
Item.createItem("ingot_aluminum", "Aluminum Ingot", {name: "ingot_aluminum"});

IDRegistry.genItemID("ingot_ardite");
Item.createItem("ingot_ardite", "Ardite Ingot", {name: "ingot_ardite"});

IDRegistry.genItemID("ingot_cobalt");
Item.createItem("ingot_cobalt", "Cobalt Ingot", {name: "ingot_cobalt"});

IDRegistry.genItemID("ingot_obsidian");
Item.createItem("ingot_obsidian", "Obsidian Ingot", {name: "ingot_obsidian"});

IDRegistry.genItemID("ingot_bronze");
Item.createItem("ingot_bronze", "Bronze Ingot", {name: "ingot_bronze"});

IDRegistry.genItemID("ingot_alubrass");
Item.createItem("ingot_alubrass", "Aluminum Brass Ingot", {name: "ingot_alubrass"});

IDRegistry.genItemID("ingot_alumite");
Item.createItem("ingot_alumite", "Alumite Ingot", {name: "ingot_alumite"});

IDRegistry.genItemID("seared_brick");
Item.createItem("seared_brick", "Seared Brick", {name: "seared_brick"});

Material.registerShape("ingot", 265, 266, 336, 405, ItemID.ingot_copper, ItemID.ingot_tin, ItemID.ingot_aluminum, ItemID.ingot_ardite, ItemID.ingot_cobalt, ItemID.ingot_obsidian, ItemID.ingot_bronze, ItemID.ingot_alubrass, ItemID.ingot_alumite, ItemID.seared_brick);


IDRegistry.genItemID("nugget_iron");
Item.createItem("nugget_iron", "Iron Nugget", {name: "nugget_iron"});

IDRegistry.genItemID("nugget_copper");
Item.createItem("nugget_copper", "Copper Nugget", {name: "nugget_copper"});

IDRegistry.genItemID("nugget_tin");
Item.createItem("nugget_tin", "Tin Nugget", {name: "nugget_tin"});

IDRegistry.genItemID("nugget_aluminum");
Item.createItem("nugget_aluminum", "Aluminum Nugget", {name: "nugget_aluminum"});

IDRegistry.genItemID("nugget_ardite");
Item.createItem("nugget_ardite", "Ardite Nugget", {name: "nugget_ardite"});

IDRegistry.genItemID("nugget_cobalt");
Item.createItem("nugget_cobalt", "Cobalt Nugget", {name: "nugget_cobalt"});

IDRegistry.genItemID("nugget_obsidian");
Item.createItem("nugget_obsidian", "Obsidian Nugget", {name: "nugget_obsidian"});

IDRegistry.genItemID("nugget_bronze");
Item.createItem("nugget_bronze", "Bronze Nugget", {name: "nugget_bronze"});

IDRegistry.genItemID("nugget_alubrass");
Item.createItem("nugget_alubrass", "Aluminum Brass Nugget", {name: "nugget_alubrass"});

IDRegistry.genItemID("nugget_alumite");
Item.createItem("nugget_alumite", "Alumite Nugget", {name: "nugget_alumite"});

Material.registerShape("nugget", 371, ItemID.nugget_iron, ItemID.nugget_copper, ItemID.nugget_tin, ItemID.nugget_aluminum, ItemID.nugget_ardite, ItemID.nugget_cobalt, ItemID.nugget_obsidian, ItemID.nugget_bronze, ItemID.nugget_alubrass, ItemID.nugget_alumite);


IDRegistry.genItemID("grout");
Item.createItem("grout", "Grout", {name: "grout"});

Recipes.addShapeless({id: ItemID.grout, count: 2}, [{id: 12, data: -1}, {id: 13}, {id: 337}]);
Recipes.addShapeless({id: ItemID.grout, count: 8}, [{id: 12, data: -1}, {id: 13}, {id: 82}]);
Recipes.addFurnace(ItemID.grout, ItemID.seared_brick);

Tinco.addNuggetRecipe(265, ItemID.nugget_iron);
Tinco.addNuggetRecipe(ItemID.ingot_copper, ItemID.nugget_copper);
Tinco.addNuggetRecipe(ItemID.ingot_tin, ItemID.nugget_tin);
Tinco.addNuggetRecipe(ItemID.ingot_aluminum, ItemID.nugget_aluminum);
Tinco.addNuggetRecipe(ItemID.ingot_ardite, ItemID.nugget_ardite);
Tinco.addNuggetRecipe(ItemID.ingot_cobalt, ItemID.nugget_cobalt);
Tinco.addNuggetRecipe(ItemID.ingot_obsidian, ItemID.nugget_obsidian);
Tinco.addNuggetRecipe(ItemID.ingot_bronze, ItemID.nugget_bronze);
Tinco.addNuggetRecipe(ItemID.ingot_alubrass, ItemID.nugget_alubrass);
Tinco.addNuggetRecipe(ItemID.ingot_alumite, ItemID.nugget_alumite);


Material.createCast("ingot", 1, "Ingot", true);
Material.createCast("rod", 0.5, "Tool Rod", true);
Material.createCast("pickaxe", 1, "Pickaxe Head", true);
Material.createCast("shovel", 1, "Shovel Head", true);
Material.createCast("hatchet", 1, "Axe Head", true);
Material.createCast("sword", 1, "Sword Blade", true);
Material.createCast("guard", 0.5, "Wide Guard", true);
Material.createCast("binding", 0.5, "Tool Binding", true);
Material.createCast("rod2", 3, "Tough Rod", true);
Material.createCast("binding2", 3, "Tough Binding", true);
Material.createCast("plate", 8, "Large Plate", true);
Material.createCast("lumberaxe", 8, "Broad Axe Head", true);
Material.createCast("scythe", 8, "Scythe Head", true);
Material.createCast("excavator", 8, "Excavator Head", true);
Material.createCast("hammer", 8, "Hammer Head", true);
Material.createCast("nugget", 1/9, "Nugget", true);


Material.registerMaterial(265, -1, "iron", 1, "ingot", true);
Material.registerMaterial(266, -1, "gold", 1, "ingot", true);
Material.registerMaterial(ItemID.ingot_copper, -1, "copper", 1, "ingot", true);
Material.registerMaterial(ItemID.ingot_cobalt, -1, "cobalt", 1, "ingot", true);
Material.registerMaterial(ItemID.ingot_ardite, -1, "ardite", 1, "ingot", true);
Material.registerMaterial(ItemID.ingot_bronze, -1, "bronze", 1, "ingot", true);
Material.registerMaterial(ItemID.ingot_manyullyn, -1, "manyullyn", 1, "ingot", true);
Material.registerMaterial(ItemID.ingot_alumite, -1, "alumite", 1, "ingot", true);
Material.registerMaterial(ItemID.ingot_tin, -1, "tin", 1, "ingot", true);
Material.registerMaterial(ItemID.ingot_aluminum, -1, "aluminum", 1, "ingot", true);
Material.registerMaterial(ItemID.ingot_alubrass, -1, "alubrass", 1, "ingot", true);

Material.registerMaterial(ItemID.nugget_iron, -1, "iron", 1, "nugget", true);
Material.registerMaterial(266, -1, "gold", 1, "nugget", true);
Material.registerMaterial(ItemID.nugget_copper, -1, "copper", 1, "nugget", true);
Material.registerMaterial(ItemID.nugget_cobalt, -1, "cobalt", 1, "nugget", true);
Material.registerMaterial(ItemID.nugget_ardite, -1, "ardite", 1, "nugget", true);
Material.registerMaterial(ItemID.nugget_bronze, -1, "bronze", 1, "nugget", true);
Material.registerMaterial(ItemID.nugget_manyullyn, -1, "manyullyn", 1, "nugget", true);
Material.registerMaterial(ItemID.nugget_alumite, -1, "alumite", 1, "nugget", true);
Material.registerMaterial(ItemID.nugget_tin, -1, "tin", 1, "nugget", true);
Material.registerMaterial(ItemID.nugget_aluminum, -1, "aluminum", 1, "nugget", true);
Material.registerMaterial(ItemID.nugget_alubrass, -1, "alubrass", 1, "nugget", true);




// file: item/modifier.js

IDRegistry.genItemID("moss_ball");
Item.createItem("moss_ball", "Ball of Moss", {name: "moss_ball"});
Recipes.addShaped({id: ItemID.moss_ball}, ["aaa", "aaa", "aaa"], ["a", 48, 0]);
Recipes.addShaped({id: ItemID.moss_ball}, ["aaa", "aaa", "aaa"], ["a", 98, 1]);

IDRegistry.genItemID("lava_crystal");
Item.createItem("lava_crystal", "Lava Crystal", {name: "lava_crystal"});
Recipes.addShaped({id: ItemID.lava_crystal}, ["aba", "bcb", "aba"], ["a", 385, 0, "b", 369, 0, "c", 325, 10], function(api, field){
	for(let i = 9; i--;){
		if(i == 4){
			field[i].data = 0;
			continue;
		}
		api.decreaseFieldSlot(i);
	}
});

IDRegistry.genItemID("silky_cloth");
Item.createItem("silky_cloth", "Silky Cloth", {name: "silky_cloth"});
Recipes.addShaped({id: ItemID.silky_cloth}, ["aaa", "aba", "aaa"], ["a", 287, 0, "b", 371, 0]);
Recipes.addShaped({id: ItemID.silky_cloth}, ["aaa", "aba", "aaa"], ["a", 287, 0, "b", ItemID.nugget_alubrass, 0]);

IDRegistry.genItemID("silky_jewel");
Item.createItem("silky_jewel", "Silky Jewel", {name: "silky_jewel"});
Recipes.addShaped({id: ItemID.silky_jewel}, ["oao", "aba", "oao"], ["a", ItemID.silky_cloth, 0, "b", 388, 0]);

IDRegistry.genItemID("necrotic_bone");
Item.createItem("necrotic_bone", "Necrotic Bone", {name: "necrotic_bone"});

Callback.addCallback("EntityDeath", function(ent, attacker){
	if(Entity.getType(ent) == 48 && Math.random() < (attacker == player ? 0.1 : 0.05)){
		const pos = Player.getPosition();
		World.drop(pos.x, pos.y, pos.z, ItemID.necrotic_bone, 1);
	}
});


Tool.addModifierRecipe("add1", {id: 264}, {id: 41});
Tool.addModifierRecipe("add2", {id: 466}, {id: 57});
Tool.addModifierRecipe("add3", {id: 399}, {});
Tool.addModifierRecipe("diamond", {id: 264}, {});
Tool.addModifierRecipe("emerald", {id: 388}, {});
Tool.addModifierRecipe("redstone", {id: 331}, {});
Tool.addModifierRecipe("moss", {id: ItemID.moss_ball}, {});
Tool.addModifierRecipe("lava", {id: ItemID.lava_crystal}, {});
Tool.addModifierRecipe("lapis", {id: 351, data: 4}, {});
Tool.addModifierRecipe("quartz", {id: 406}, {});
Tool.addModifierRecipe("blaze", {id: 377}, {});
Tool.addModifierRecipe("necrotic", {id: ItemID.necrotic_bone}, {});
Tool.addModifierRecipe("silky", {id: ItemID.silky_jewel}, {});
Tool.addModifierRecipe("reinforced", {id: ItemID.part_plate_obsidian}, {});
Tool.addModifierRecipe("piston", {id: 33}, {});
Tool.addModifierRecipe("head", {id: 368}, {id: 49});
Tool.addModifierRecipe("spider", {id: 376}, {});
Tool.addModifierRecipe("smite", {id: BlockID.consecrated_soil}, {});




// file: item/heart.js

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




// file: melting_recipe.js

Material.addMeltingRecipe(78, -1, "water", 0.25, 75);
Material.addMeltingRecipe(79, -1, "water", 1, 75);
Material.addMeltingRecipe(80, -1, "water", 0.5, 75);
Material.addMeltingRecipe(332, -1, "water", 0.125, 20);

Material.addMeltingRecipe(145, -1, "iron", 4.464, 800);
Material.addMeltingRecipe(267, 0, "iron", 0.288, 600);
Material.addMeltingRecipe(345, -1, "iron", 0.576, 600);
Material.addMeltingRecipe(154, -1, "iron", 0.72, 600);
Material.addMeltingRecipe(101, -1, "iron", 0.054, 600);
Material.addMeltingRecipe(28, -1, "iron", 0.144, 600);
Material.addMeltingRecipe(417, -1, "iron", 1.152, 700);
Material.addMeltingRecipe(330, -1, "iron", 0.864, 600);
Material.addMeltingRecipe(359, 0, "iron", 0.288, 600);
Material.addMeltingRecipe(258, 0, "iron", 0.432, 600);
Material.addMeltingRecipe(157, -1, "iron", 0.144, 600);
Material.addMeltingRecipe(259, 0, "iron", 0.144, 600);
Material.addMeltingRecipe(325, 0, "iron", 0.432, 600);
Material.addMeltingRecipe(66, -1, "iron", 0.054, 600);
Material.addMeltingRecipe(342, -1, "iron", 0.72, 600);
Material.addMeltingRecipe(308, 0, "iron", 1.008, 650);
Material.addMeltingRecipe(148, -1, "iron", 0.288, 600);
Material.addMeltingRecipe(307, 0, "iron", 1.152, 650);
Material.addMeltingRecipe(292, 0, "iron", 0.288, 600);
Material.addMeltingRecipe(408, -1, "iron", 1.44, 650);
Material.addMeltingRecipe(306, 0, "iron", 0.72, 650);
Material.addMeltingRecipe(380, -1, "iron", 1.008, 600);
Material.addMeltingRecipe(256, 0, "iron", 0.144, 600);
Material.addMeltingRecipe(328, -1, "iron", 0.72, 600);
Material.addMeltingRecipe(309, 0, "iron", 0.576, 650);
Material.addMeltingRecipe(257, 0, "iron", 0.432, 600);

Material.addMeltingRecipe(147, -1, "gold", 0.288);
Material.addMeltingRecipe(418, -1, "gold", 1.152);
Material.addMeltingRecipe(294, 0, "gold", 0.288);
Material.addMeltingRecipe(285, 0, "gold", 0.432);
Material.addMeltingRecipe(315, 0, "gold", 1.152);
Material.addMeltingRecipe(316, 0, "gold", 1.008);
Material.addMeltingRecipe(317, 0, "gold", 0.576);
Material.addMeltingRecipe(314, 0, "gold", 0.72);
Material.addMeltingRecipe(283, 0, "gold", 0.288);
Material.addMeltingRecipe(284, 0, "gold", 0.144);
Material.addMeltingRecipe(382, -1, "gold", 0.128);
Material.addMeltingRecipe(27, -1, "gold", 0.144);
Material.addMeltingRecipe(322, -1, "gold", 1.152);
Material.addMeltingRecipe(466, -1, "gold", 10.368);
Material.addMeltingRecipe(396, -1, "gold", 0.128);


Material.addMeltingRecipe(49, -1, "obsidian", 0.288);
Material.addMeltingRecipe(116, -1, "obsidian", 0.576);

Material.addMeltingRecipe(14, -1, "gold", 0.288);
Material.addMeltingRecipe(15, -1, "iron", 0.288);

Material.addMeltingRecipe(265, -1, "iron", 0.144);
Material.addMeltingRecipe(266, -1, "gold", 0.144);

Material.addMeltingRecipe(371, -1, "gold", 0.016);

Material.addMeltingRecipe(41, -1, "gold", 1.296);
Material.addMeltingRecipe(42, -1, "iron", 1.296);

Material.addMeltingRecipe(BlockID.ore_copper, -1, "copper", 0.288);
Material.addMeltingRecipe(BlockID.ore_tin, -1, "tin", 0.288);
Material.addMeltingRecipe(BlockID.ore_aluminum, -1, "aluminum", 0.288);
Material.addMeltingRecipe(BlockID.ore_ardite, -1, "ardite", 0.288);
Material.addMeltingRecipe(BlockID.ore_cobalt, -1, "cobalt", 0.288);

Material.addMeltingRecipe(ItemID.ingot_copper, -1, "copper", 0.144);
Material.addMeltingRecipe(ItemID.ingot_tin, -1, "tin", 0.144);
Material.addMeltingRecipe(ItemID.ingot_aluminum, -1, "aluminum", 0.144);
Material.addMeltingRecipe(ItemID.ingot_ardite, -1, "ardite", 0.144);
Material.addMeltingRecipe(ItemID.ingot_cobalt, -1, "cobalt", 0.144);
Material.addMeltingRecipe(ItemID.ingot_obsidian, -1, "obsidian", 0.144);
Material.addMeltingRecipe(ItemID.ingot_bronze, -1, "bronze", 0.144);
Material.addMeltingRecipe(ItemID.ingot_alubrass, -1, "alubrass", 0.144);
Material.addMeltingRecipe(ItemID.ingot_alumite, -1, "alumite", 0.144);

Material.addMeltingRecipe(ItemID.nugget_iron, -1, "iron", 0.016);
Material.addMeltingRecipe(ItemID.nugget_copper, -1, "copper", 0.016);
Material.addMeltingRecipe(ItemID.nugget_tin, -1, "tin", 0.016);
Material.addMeltingRecipe(ItemID.nugget_aluminum, -1, "aluminum", 0.016);
Material.addMeltingRecipe(ItemID.nugget_ardite, -1, "ardite", 0.016);
Material.addMeltingRecipe(ItemID.nugget_cobalt, -1, "cobalt", 0.016);
Material.addMeltingRecipe(ItemID.nugget_obsidian, -1, "obsidian", 0.016);
Material.addMeltingRecipe(ItemID.nugget_bronze, -1, "bronze", 0.016);
Material.addMeltingRecipe(ItemID.nugget_alubrass, -1, "alubrass", 0.016);
Material.addMeltingRecipe(ItemID.nugget_alumite, -1, "alumite", 0.016);

Material.addMeltingRecipe(ItemID.berry_iron, -1, "iron", 0.016);
Material.addMeltingRecipe(ItemID.berry_gold, -1, "gold", 0.016);
Material.addMeltingRecipe(ItemID.berry_copper, -1, "copper", 0.016);
Material.addMeltingRecipe(ItemID.berry_tin, -1, "tin", 0.016);
Material.addMeltingRecipe(ItemID.berry_aluminum, -1, "aluminum", 0.016);


Material.addAlloyRecipe("bronze", 4, "copper", 3, "tin", 1);
Material.addAlloyRecipe("alubrass", 4, "aluminum", 3, "copper", 1);
Material.addAlloyRecipe("alumite", 3, "aluminum", 5, "iron", 2, "obsidian", 2);
Material.addAlloyRecipe("manyullyn", 1, "cobalt", 1, "ardite", 1);
Material.addAlloyRecipe("obsidian", 288, "water", 1000, "lava", 1000);



ModAPI.addAPICallback("ICore", function(api){

	Material.addMeltingRecipe(BlockID.oreCopper, -1, "copper", 0.288);
	Material.addMeltingRecipe(BlockID.oreTin, -1, "tin", 0.288);

	Material.addMeltingRecipe(ItemID.ingotCopper, -1, "copper", 0.144);
	Material.addMeltingRecipe(ItemID.ingotTin, -1, "tin", 0.144);
	Material.addMeltingRecipe(ItemID.ingotBronze, -1, "bronze", 0.144);

	Material.addMeltingRecipe(ItemID.dustCopper, -1, "copper", 0.144);
	Material.addMeltingRecipe(ItemID.dustTin, -1, "tin", 0.144);
	Material.addMeltingRecipe(ItemID.dustBronze, -1, "bronze", 0.144);

});




// file: block/smeltery/controller.js

IDRegistry.genBlockID("smeltery_controller");
Block.createBlock("smeltery_controller", [
	{name: "Smeltery Controller", texture: [["seared_brick", 0], ["seared_brick", 0], ["seared_brick", 0], ["smeltery_controller", 0], ["seared_brick", 0], ["seared_brick", 0]], inCreative: true}
]);
TileRenderer.setStandartModel(BlockID.smeltery_controller, [["seared_brick", 0], ["seared_brick", 0], ["seared_brick", 0], ["smeltery_controller", 0], ["seared_brick", 0], ["seared_brick", 0]]);
TileRenderer.registerRotationModel(BlockID.smeltery_controller, 0, [["seared_brick", 0], ["seared_brick", 0], ["seared_brick", 0], ["smeltery_controller", 0], ["seared_brick", 0], ["seared_brick", 0]]);
TileRenderer.registerRotationModel(BlockID.smeltery_controller, 4, [["seared_brick", 0], ["seared_brick", 0], ["seared_brick", 0], ["smeltery_controller", 1], ["seared_brick", 0], ["seared_brick", 0]]);

Recipes.addShaped({id: BlockID.smeltery_controller}, ["aaa", "aoa", "aaa"], ["a", ItemID.seared_brick, 0]);
ToolAPI.registerBlockMaterial(BlockID.smeltery_controller, "stone", 1);
Block.setDestroyTime(BlockID.smeltery_controller, 5);
TileRenderer.setRotationPlaceFunction(BlockID.smeltery_controller);


Elements.smeltery_side = {};

(function(){
	const func = function(i){
		return function(container, tileEntity){
			const slot = container.getSlot("slot" + i);
			if(slot.id){
				Player.addItemToInventory(slot.id, 1, slot.data);
				slot.id = slot.count = slot.data = 0;
				delete tileEntity.data.progress[i];
			}
		}
	};
	let x = y = 0;
	for(let i = 0; i < 512; i++){
		x = (i & 3) * 240;
		y = (i / 4 | 0) * 180;
		Elements.smeltery_side["slot" + i] = {type: "slot", x: x, y: y, size: 180, visual: true, clicker: {onClick: func(i)}};
		Elements.smeltery_side["back" + i] = {type: "image", x: x + 180, y: y, bitmap: "smeltery_heat_bar_0", scale: 10};
		Elements.smeltery_side["scale" + i] = {type: "scale", x: x + 192, y: y + 12, z: 1, bitmap: "smeltery_heat_bar_1", direction: 1, scale: 10};
	}
})();

Window.smeltery_side = new UI.Window({
	location: {x: 350, y: 100, width: 320, scrollY: 2000},
	drawing: [{type: "background", color: ag.Color.TRANSPARENT}],
	elements: Elements.smeltery_side
});


Elements.smeltery_controller = {
	scaleLava: {type: "scale", x: 924, y: 64, bitmap: "smeltery_lava_bar_1", direction: 1, scale: 4},
	textLava: {type: "text", x: 700, y: 30},
	textInfo1: {type: "text", x: 770, y: 350},
	textInfo2: {type: "text", x: 770, y: 380},
	line: {type: "image", x: 704, y: 64, z: 1, bitmap: "smeltery_line", scale: 4},
	slotInput: {type: "slot", x: 700, y: 350, bitmap: "tc_slot_input", isValid: function(id, count, data){
		return !!Material.getMeltingRecipe(id, data);
	}},
	buttonSelect: {type: "button", x: 850, y: 280, bitmap: "default_button_up", bitmap2: "default_button_down", scale: 4, clicker: {
		onClick: function(container, tileEntity){
			tileEntity.data.select++;
			tileEntity.data.select %= Object.keys(tileEntity.liquidStorage.liquidAmounts).length;
			tileEntity.updateAnim();
		}
	}},
	icon: {type: "image", x: 856, y: 286, z: 1, bitmap: "mod_browser_update_icon", scale: 3.2},
	buttonDump: {type: "button", x: 700, y: 280, bitmap: "_craft_button_up", bitmap2: "_craft_button_down", scale: 1.6, clicker: {
		onClick: function(container, tileEntity){
			const liquidAmount = tileEntity.liquidStorage.liquidAmounts;
			delete liquidAmount[Object.keys(liquidAmount)[tileEntity.data.select]];
		}
	}},
	textDump: {type: "text", x: 710, y: 283, z: 1, text: "Dump"}
};

Window.smeltery_controller = new UI.StandartWindow({
	standart: {
		header: {text: {text: "Smeltery"}},
		inventory: {standart: true},
		background: {standart: true}
	},
	drawing: [
		{type: "bitmap", x: 700, y: 60, bitmap: "smeltery_metal_bar_0", scale: 4},
		{type: "bitmap", x: 920, y: 60, bitmap: "smeltery_lava_bar_0", scale: 4},
	],
	elements: Elements.smeltery_controller
});

Window.smeltery_controller.addWindowInstance("side_slot", Window.smeltery_side);


const SEARED_BRICK = {};
SEARED_BRICK[BlockID.seared_brick] = true;
SEARED_BRICK[BlockID.smeltery_controller] = true;
SEARED_BRICK[BlockID.seared_tank] = true;
SEARED_BRICK[BlockID.seared_drain] = true;

const AirLength = function(coords, x, y, z){
	let block = 0;
	for(let i = 0; i < 8; i++){
		block = World.getBlockID(coords.x + i * x, coords.y + i * y, coords.z + i * z);
		if(SEARED_BRICK[block]){
			return i;
		}
		if(block){
			return 0;
		}
	}
	return 0;
};


TileEntity.registerPrototype(BlockID.smeltery_controller, {
	anim: null,
	area: null,
	lavaTank: [],
	defaultValues: {
		isActive: false,
		progress: {},
		select: 0,
	},
	updateAnim: function(){
		if(!this.area){
			return;
		}
		const render = new Render();
		const part = [];
		const liquidAmount = this.liquidStorage.liquidAmounts;
		const order = Object.keys(liquidAmount);
		const limit = this.liquidStorage.getLimit();
		let i = 0;
		for(i = this.data.select; i--;){
			order.push(order.shift());
		}
		const sizeX = this.area.x2 - this.area.x1 - 1;
		const sizeZ = this.area.z2 - this.area.z1 - 1;
		let height = mag = y = 0;
		for(i = 0; i < order.length; i++){
			height = liquidAmount[order[i]] / limit * (this.area.y2 - this.area.y1);
			mag = Math.max(sizeX, sizeZ, height);
			part.push({
				type: "box",
				uv: {x: 0, y: Tinco.getLiquidY(order[i]) * mag},
				coords: {x: 0, y: y - height * 16 / 2, z: 0},
				size: {x: sizeX * 16, y: height * 16, z: sizeZ * 16}
			});
			y -= height * 16;
		}
		render.setPart("body", part, {width: 64 * mag, height: 448 * mag});
		this.anim.setPos(
			(this.area.x1 + this.area.x2) / 2 + 0.5,
			(this.area.y1 + this.area.y2) / 2 - 1 - (this.area.y2 - this.area.y1 - 1) * 0.5,
			(this.area.z1 + this.area.z2) / 2 + 0.5
		);
		this.anim.describe({skin: "model/liquid.png", render: render.getID()});
		this.anim.load();
	},
	init: function(){
		this.anim = new Animation.Base(this.x, this.y, this.z);
		this.refreshSmeltery();
		this.updateAnim();
		TileRenderer.mapAtCoords(this.x, this.y, this.z, this.blockID, this.data.meta + (this.data.isActive ? 4 : 0));
	},

	getLavaAmount: function(){
		let amount = 0;
		for(let i = this.lavaTank.length; i--;){
			amount += this.lavaTank[i].getAmount("lava");
		}
		return amount;
	},

	refreshSmeltery: function(){
		this.area = this.getArea();
		this.area ? this.activate() : this.deactivate();
		const capacity = this.getCapacity();
		const lavaAmount = this.getLavaAmount();
		const lavaLimit = this.lavaTank.length * 4;
		let key = "";
		let i = 0;
		for(key in this.container.slots){
			if(key == "slotInput"){
				continue;
			}
			i = key.slice(4) - 0;
			if(i >= capacity){
				delete this.container.slots[key];
				continue;
			}
			if(!(i in this.data.progress) && this.container.getSlot(key).id){
				this.data.progress[i] = 0;
			}
		}
		this.liquidStorage.setLimit(null, Math.round(capacity * 1.44 * 1000) / 1000);
		this.container.setScale("scaleLava", lavaLimit ? lavaAmount / lavaLimit : 0);
		this.container.setText("textLava", "Lava: " + (lavaAmount * 1000) + " / " + (lavaLimit * 1000) + " mB");
	},

	getGuiScreen: function(){
		this.refreshSmeltery();
		const capacity = this.getCapacity();
		let x = y = 0;
		for(let i = 512; i--;){
			x = (i & 3) * 240;
			y = (i / 4 | 0) * 180;
			if(i < capacity){
				Elements.smeltery_side["slot" + i].x = x;
				Elements.smeltery_side["back" + i].x = x + 180;
				Elements.smeltery_side["scale" + i].x = x + 192;
			}
			else{
				Elements.smeltery_side["slot" + i].x = 2000;
				Elements.smeltery_side["back" + i].x = 2000;
				Elements.smeltery_side["scale" + i].x = 2000;
			}
		}
		return Window.smeltery_controller;
	},

	getArea: function(){
		const coords = {x: this.x, y: this.y, z: this.z};
		coords[this.data.meta & 2 ? "x" : "z"] += this.data.meta & 1 ? -1 : 1;
		const area = {x1: 0, x2: 0, y1: 0, y2: 0, z1: 0, z2: 0};

		this.lavaTank.length = 0;

		area.y1 = -AirLength(coords, 0, -1, 0);
		if(!area.y1){
			return null;
		}

		area.x1 = -AirLength(coords, -1, 0, 0);
		if(!area.x1){
			return null;
		}

		area.x2 = AirLength(coords, 1, 0, 0);
		if(!area.x2){
			return null;
		}

		area.z1 = -AirLength(coords, 0, 0, -1);
		if(!area.z1){
			return null;
		}

		area.z2 = AirLength(coords, 0, 0, 1);
		if(!area.z2){
			return null;
		}


		let i = j = k = block = controller = 0;

		for(i = area.x1 + 1; i <= area.x2 - 1; i++){
		for(j = area.z1 + 1; j <= area.z2 - 1; j++){
			if(World.getBlockID(coords.x + i, coords.y + area.y1, coords.z + j) != BlockID.seared_brick){
				return null;
			}
		}
		}

		let tileEntity;

		label:
		for(i = 1; i < 8; i++){
		for(j = area.x1; j <= area.x2; j++){
		for(k = area.z1; k <= area.z2; k++){
			if(j == area.x1 && k == area.z1 || j == area.x1 && k == area.z2 || j == area.x2 && k == area.z1 || j == area.x2 && k == area.z2){
				continue;
			}
			if(j == area.x1 || j == area.x2 || k == area.z1 || k == area.z2){ 
				block = World.getBlockID(coords.x + j, coords.y + area.y1 + i, coords.z + k);
				if(block == BlockID.seared_brick){
					continue;
				}
				if(block == BlockID.seared_tank){
					tileEntity = World.getTileEntity(coords.x + j, coords.y + area.y1 + i, coords.z + k);
					if(!tileEntity){
						break label;
					}
					this.lavaTank.push(tileEntity.liquidStorage);
					continue;
				}
				if(block == BlockID.seared_drain){
					tileEntity = World.getTileEntity(coords.x + j, coords.y + area.y1 + i, coords.z + k);
					if(!tileEntity){
						break label;
					}
					tileEntity.liquidStorage = this.liquidStorage;
					tileEntity.data.currentLiquid = Object.keys(this.liquidStorage.liquidAmounts)[this.data.select];
					continue;
				}
				if(block == BlockID.smeltery_controller){
					controller++;
					continue;
				}
				area.y2 = area.y1 + i - 1;
				break label;
			}
			if(World.getBlockID(coords.x + j, coords.y + area.y1 + i, coords.z + k)){
				area.y2 = area.y1 + i - 1;
				break label;
			}
		}
		}
		}

		if(area.y2 == area.y1 || controller > 1){
			this.lavaTank.length = 0;
			return null;
		}

		return {
			x1: coords.x + area.x1,
			y1: coords.y + area.y1,
			z1: coords.z + area.z1,
			x2: coords.x + area.x2,
			y2: coords.y + area.y2,
			z2: coords.z + area.z2
		};

	},

	getCapacity: function(){
		if(this.area){
			return (this.area.x2 - this.area.x1 - 1) * (this.area.y2 - this.area.y1) * (this.area.z2 - this.area.z1 - 1);
		}
		return 0;
	},

	tick: function(){

		const capacity = this.getCapacity();
		let slot, recipe;
		let i = 0;
		let key = "";

		const limit = this.liquidStorage.getLimit();
		const liquidAmount = this.liquidStorage.liquidAmounts;
		for(key in liquidAmount){
			if(!liquidAmount[key]){
				delete liquidAmount[key];
			}
		}

		if(!(ThreadTime & 63)){

			this.refreshSmeltery();

			let total = 0;
			for(key in liquidAmount){
				if(total + liquidAmount[key] > limit){
					delete liquidAmount[key];
				}
				else{
					total += liquidAmount[key];
				}
			}

			if(this.getLavaAmount() >= 0.024){
				let isUsed = isUpdate = false;
				for(key in this.data.progress){
					isUsed = true;
					if(++this.data.progress[key] >= 10){
						isUpdate = true;
						slot = this.container.getSlot("slot" + key);
						recipe = Material.getMeltingRecipe(slot.id, slot.data);
						if(total + recipe.amount <= limit){
							this.liquidStorage.addLiquidMilli(recipe.liquid, recipe.amount);
							slot.id = slot.data = slot.count = 0;
							delete this.data.progress[key];
						}
					}
				}
				if(isUsed){
					let got = 0.024;
					for(i = this.lavaTank.length; i--;){
						got -= this.lavaTank[i].getLiquidMilli("lava", got);
						if(!got){
							break;
						}
					}
				}
				if(isUpdate){
					this.updateAnim();
				}
			}

			const amounts = [];
			let j = min = 0;
			for(i = Material.alloy.length; i--;){
				amounts.length = 0;
				for(j = Material.alloy[i].input.length; j--;){
					amounts.push(this.liquidStorage.getAmount(Material.alloy[i].input[j].liquid) / Material.alloy[i].input[j].amount | 0);
				}
				min = Math.min.apply(null, amounts);
				if(min){
					for(j = Material.alloy[i].input.length; j--;){
						this.liquidStorage.getLiquidMilli(Material.alloy[i].input[j].liquid, Material.alloy[i].input[j].amount * min);
					}
					this.liquidStorage.addLiquidMilli(Material.alloy[i].result.liquid, Material.alloy[i].result.amount * min);
					this.updateAnim();
				}
			}

		}

		if(this.data.isActive && !(ThreadTime & 15)){
			const randomXZ = Math.random() * 0.6 + 0.2;
			const randomY = Math.random() * 0.375 + 0.5 + this.y;
			switch(this.data.meta){
				case 0:
					Particles.addParticle(4, this.x + randomXZ, randomY, this.z - 0.02, 0, 0, 0);
					Particles.addParticle(7, this.x + randomXZ, randomY, this.z - 0.1, 0, 0, 0);
				break;
				case 1:
					Particles.addParticle(4, this.x + randomXZ, randomY, this.z + 1.02, 0, 0, 0);
					Particles.addParticle(7, this.x + randomXZ, randomY, this.z + 1.1, 0, 0, 0);
				break;
				case 2:
					Particles.addParticle(4, this.x - 0.02, randomY, this.z + randomXZ, 0, 0, 0);
					Particles.addParticle(7, this.x - 0.1, randomY, this.z + randomXZ, 0, 0, 0);
				break;
				case 3:
					Particles.addParticle(4, this.x + 1.02, randomY, this.z + randomXZ, 0, 0, 0);
					Particles.addParticle(7, this.x + 1.1, randomY, this.z + randomXZ, 0, 0, 0);
				break;
			}
		}

		const input = this.container.getSlot("slotInput");
		if(input.id){
			for(i = 0; i < capacity; i++){
				if(!this.container.slots["slot" + i]){
					break;
				}
				this.container.setScale("scale" + i, (this.data.progress[i] || 0) / 4);
				slot = this.container.getSlot("slot" + i);
				if(!slot.id){
					slot.id = input.id;
					slot.data = input.data;
					slot.count = 1;
					input.count--;
					this.data.progress[i] = 0;
					this.container.validateSlot("slotInput");
					break;
				}
			}
		}

		const order = Object.keys(liquidAmount);
		for(i = this.data.select; i--;){
			order.push(order.shift());
		}

		if(this.container.isOpened()){
			let y = 64;
			for(i = 0; i < order.length; i++){
				if("liquid_" + order[i] in Elements.smeltery_controller){
					Elements.smeltery_controller["liquid_" + order[i]].y = y;
				}
				else{
					Elements.smeltery_controller["liquid_" + order[i]] = {type: "scale", x: 704, y: y, direction: 1, bitmap: "smeltery_line", scale: 4};
				}
				this.liquidStorage.updateUiScale("liquid_" + order[i], order[i]);
				y -= liquidAmount[order[i]] / limit * 208;
			}
			let array;
			for(key in Elements.smeltery_controller){
				array = key.split("_");
				if(array[0] == "liquid" && !liquidAmount[array[1]]){
					this.liquidStorage.updateUiScale(key, 0);
				}
			}
			for(i = 0; i < capacity; i++){
				this.container.setScale("scale" + i, (this.data.progress[i] || 0) / 9);
			}
			if(liquidAmount[order[0]]){
				let amount = liquidAmount[order[0]] * 1000
				let ingot = amount / 144 | 0;
				let nugget = amount % 144 >> 4;
				ingot = ingot ? "Ingots: " + ingot + ", ": "";
				nugget = nugget ? "Nuggets: " + nugget : "";
				this.container.setText("textInfo1", LiquidRegistry.getLiquidName(order[0]) + ": " + amount + " mB");
				this.container.setText("textInfo2", ingot + nugget);
			}
			else{
				this.container.setText("textInfo1", "");
				this.container.setText("textInfo2", "");
			}
		}

	},

	activate: function(){
		if(!this.data.isActive){
			this.data.isActive = true;
			TileRenderer.mapAtCoords(this.x, this.y, this.z, this.blockID, this.data.meta + 4);
		}
	},
	deactivate: function(){
		if(this.data.isActive){
			this.data.isActive = false;
			TileRenderer.mapAtCoords(this.x, this.y, this.z, this.blockID, this.data.meta);
		}
	},
	destroy: function(){
		BlockRenderer.unmapAtCoords(this.x, this.y, this.z);
		if(this.anim){
			this.anim.destroy();
			this.anim = null;
		}
	}
});




// file: block/smeltery/drain.js

IDRegistry.genBlockID("seared_drain");
Block.createBlock("seared_drain", [
	{name: "Seared Drain", texture: [["seared_brick", 0], ["seared_brick", 0], ["seared_drain", 1], ["seared_drain", 0], ["seared_brick", 0], ["seared_brick", 0]], inCreative: true}
]);
TileRenderer.setStandartModel(BlockID.seared_drain, [["seared_brick", 0], ["seared_brick", 0], ["seared_drain", 1], ["seared_drain", 0], ["seared_brick", 0], ["seared_brick", 0]]);
TileRenderer.registerRotationModel(BlockID.seared_drain, 0, [["seared_brick", 0], ["seared_brick", 0], ["seared_drain", 1], ["seared_drain", 0], ["seared_brick", 0], ["seared_brick", 0]]);

Recipes.addShaped({id: BlockID.seared_drain}, ["aoa", "aoa", "aoa"], ["a", ItemID.seared_brick, 0]);
ToolAPI.registerBlockMaterial(BlockID.seared_drain, "stone", 1);
Block.setDestroyTime(BlockID.seared_drain, 5);
TileRenderer.setRotationPlaceFunction(BlockID.seared_drain);


TileEntity.registerPrototype(BlockID.seared_drain, {
	defaultValues: {
		meta: 0,
		currentLiquid: null
	},
	init: function(){
		delete this.liquidStorage;
	}
});




// file: block/smeltery/tank.js

IDRegistry.genBlockID("seared_tank");

Block.createBlock("seared_tank", [
	{name: "Seared Tank", texture: [["seared_tank_top", 0], ["seared_tank_top", 0], ["seared_tank_side", 0]], inCreative: true},
	{name: "Seared Glass", texture: [["seared_glass_bottom", 0], ["seared_glass_top", 0], ["seared_glass_side", 0]], inCreative: true},
	{name: "Seared Window", texture: [["seared_window_bottom", 0], ["seared_window_top", 0], ["seared_window_side", 0]], inCreative: true}
]);

ToolAPI.registerBlockMaterial(BlockID.seared_tank, "stone", 1);
Block.setDestroyTime(BlockID.seared_tank, 5);

Block.registerDropFunction("seared_tank", function(){
	return [];
});

Item.registerNameOverrideFunction(BlockID.seared_tank, function(item, name){
	item = Player.getCarriedItem();
	if(item.extra){
		return name + "\n§7" + LiquidRegistry.getLiquidName(item.extra.getString("stored")) + ": " + (item.extra.getFloat("amount") * 1000) + " mB";
	}
	return name;
});

Block.registerPlaceFunction(BlockID.seared_tank, function(coords, item){
	Game.prevent();
	const c = coords.relative;
	if(GenerationUtils.isTransparentBlock(World.getBlockID(c.x, c.y, c.z))){
		World.setBlock(c.x, c.y, c.z, item.id, item.data);
		const tileEntity = World.addTileEntity(c.x, c.y, c.z);
		tileEntity.data.meta = item.data;
		if(item.extra){
			tileEntity.liquidStorage.addLiquid(item.extra.getString("stored"), item.extra.getFloat("amount"));
		}
	}
});

Recipes.addShaped({id: BlockID.seared_tank, data: 0}, ["aaa", "aba", "aaa"], ["a", ItemID.seared_brick, 0, "b", 20, 0]);
Recipes.addShaped({id: BlockID.seared_tank, data: 1}, ["aba", "aba", "aba"], ["a", ItemID.seared_brick, 0, "b", 20, 0]);
Recipes.addShaped({id: BlockID.seared_tank, data: 2}, ["aba", "bbb", "aba"], ["a", ItemID.seared_brick, 0, "b", 20, 0]);


(function(){
	const render = new ICRender.Model();
	const model = BlockRenderer.createModel();
	model.addBox(0, 0, 0, 1, 1, 1, BlockID.seared_tank, 0);
	model.addBox(02/16, 16/16, 02/16, 14/16, 18/16, 14/16, BlockID.seared_tank, 0);
	render.addEntry(model);
	BlockRenderer.setStaticICRender(BlockID.seared_tank, 0, render);
})();


TileEntity.registerPrototype(BlockID.seared_tank, {
	anim: null,
	defaultValues: {
		meta: 0,
		height: 0
	},

	updateAnim: function(){
		const render = new Render();
		render.setPart("body", [{
			type: "box",
			uv: {x: 0, y: Tinco.getLiquidY(this.liquidStorage.getLiquidStored())},
			coords: {x: 0, y: -this.data.height / 2, z: 0},
			size: {x: 15, y: this.data.height * 0.9375, z: 15}
		}], {width: 64, height: 448});
		this.anim.describe({skin: "model/liquid.png", render: render.getID()});
		this.anim.load();
	},

	init: function(){
		this.anim = new Animation.Base(this.x + 0.5, this.y - 1.5, this.z + 0.5);
		this.updateAnim();
		this.liquidStorage.setLimit(null, 4);
	},

	destroy: function(){
		if(this.anim){
			this.anim.destroy();
			this.anim = null;
		}
	},

	click: function(id, count, data){
		const stored = this.liquidStorage.getLiquidStored();
		const amount = this.liquidStorage.getAmount(stored);
		const liquid = LiquidRegistry.getItemLiquid(id, data);
		Game.prevent();
		if(liquid){
			if(!stored || stored == liquid && amount <= 3){
				const empty = LiquidRegistry.getEmptyItem(id, data);
				this.liquidStorage.addLiquid(liquid, 1);
				Player.decreaseCarriedItem();
				Player.addItemToInventory(empty.id, 1, empty.data);
			}
			return;
		}
		const full = LiquidRegistry.getFullItem(id, data, stored);
		if(full && amount >= 1){
			this.liquidStorage.getLiquid(stored, 1);
			Player.decreaseCarriedItem();
			Player.addItemToInventory(full.id, 1, full.data);
		}
	},

	tick: function(){
		const stored = this.liquidStorage.getLiquidStored();
		const amount = this.liquidStorage.getAmount(stored);

		this.data.height += (amount * 4 - this.data.height) * 0.1;
		this.data.height = Math.round(this.data.height * 100) / 100;

		if(stored){
			if(Math.abs(amount * 4 - this.data.height) > 0.1){
				this.updateAnim();
			}
		}
		else if(this.anim && this.anim.isLoaded){
			this.anim.destroy();
		}

	},

	destroyBlock: function(){
		const stored = this.liquidStorage.getLiquidStored();
		if(stored){
			const extra = new ItemExtraData();
			extra.putString("stored", stored);
			extra.putFloat("amount", this.liquidStorage.getAmount(stored));
			nativeDropItem(this.x + 0.5, this.y, this.z + 0.5, 0, BlockID.seared_tank, 1, this.data.meta, extra);
		}
		else{
			World.drop(this.x + 0.5, this.y, this.z + 0.5, BlockID.seared_tank, 1, this.data.meta);
		}
	}

});




// file: block/smeltery/faucet.js

IDRegistry.genBlockID("seared_faucet");

Block.createBlockWithRotation("seared_faucet", [
	{name: "Seared Faucet", texture: [["seared_faucet", 0], ["seared_faucet", 0], ["seared_faucet", 0], ["seared_faucet", 0], ["seared_faucet", 0], ["seared_faucet", 0]], inCreative: true}
]);

ToolAPI.registerBlockMaterial(BlockID.seared_faucet, "stone");
Block.setDestroyTime(BlockID.seared_faucet, 5);
Recipes.addShaped({id: BlockID.seared_faucet}, ["aoa", "oao"], ["a", ItemID.seared_brick, 0]);

(function(){
	const render = [], model = [];
	let i = 0;
	for(i = 0; i < 4; i++){
		render.push(new ICRender.Model());
		model.push(BlockRenderer.createModel());
	}
	const addBox = function(x1, x2, z1, z2, y1, y2){
		model[0].addBox(x1 / 16, y1 / 16, z1 / 16, x2 / 16, y2 / 16, z2 / 16, "seared_faucet", 0);
		model[1].addBox(x1 / 16, y1 / 16, (16-z2) / 16, x2 / 16, y2 / 16, (16-z1) / 16, "seared_faucet", 0);
		model[2].addBox(z1 / 16, y1 / 16, x1 / 16, z2 / 16, y2 / 16, x2 / 16, "seared_faucet", 0);
		model[3].addBox((16-z2) / 16, y1 / 16, x1 / 16, (16-z1) / 16, y2 / 16, x2 / 16, "seared_faucet", 0);
	};
	addBox(04,12, 00,06, 04,06);
	addBox(04,06, 00,06, 06,10);
	addBox(10,12, 00,06, 06,10);
	for(i = 0; i < 4; i++){
		render[i].addEntry(model[i]);
		BlockRenderer.setStaticICRender(BlockID.seared_faucet, i, render[i]);
	}
})();

Block.setShape(BlockID.seared_faucet, 04/16, 04/16, 00/16, 12/16, 10/16, 06/16, 0);
Block.setShape(BlockID.seared_faucet, 04/16, 04/16, 10/16, 12/16, 10/16, 16/16, 1);
Block.setShape(BlockID.seared_faucet, 00/16, 04/16, 04/16, 06/16, 10/16, 12/16, 2);
Block.setShape(BlockID.seared_faucet, 10/16, 04/16, 04/16, 16/16, 10/16, 12/16, 3);


TileEntity.registerPrototype(BlockID.seared_faucet, {
	anim: null,
	defaultValues: {
		currentLiquid: null
	},
	init: function(){
		delete this.liquidStorage;
	},
	destroyAnim: function(){
		if(this.anim){
			this.anim.destroy();
			this.anim = null;
		}
	},
	destroy: function(){
		this.destroyAnim();
	},
	click: function(){
		const xz = [[0, -1], [0, 1], [-1, 0], [1, 0]][World.getBlock(this.x, this.y, this.z).data];
		const that = World.getTileEntity(this.x + xz[0], this.y, this.z + xz[1]);
		if(!that || !that.liquidStorage){
			this.destroyAnim();
			return;
		}
		this.liquidStorage = that.liquidStorage;
		this.data.currentLiquid = that.data.currentLiquid || null;
		const liquid = this.data.currentLiquid || this.liquidStorage.getLiquidStored();
		if(liquid){
			this.anim = new Animation.Base(this.x, this.y - 1, this.z);
			const render = new Render();
			const liquidY = Tinco.getLiquidY(liquid);
			render.setPart("body", [{
				type: "box",
				uv: {x: 0, y: liquidY},
				coords: {x: 8 + xz[0] * 5, y: 0, z: -8 - xz[1] * 5},
				size: {x: xz[0] ? 6 : 4, y: 4, z: xz[1] ? 6 : 4}
			}, {
				type: "box",
				uv: {x: 0, y: liquidY},
				coords: {x: 8 + xz[0], y: 3, z: -8 - xz[1]},
				size: {x: xz[0] ? 2 : 4, y: 10, z: xz[1] ? 2 : 4}
			}], {width: 64, height: 448});
			this.anim.describe({skin: "model/liquid.png", render: render.getID()});
			this.anim.load();
		}
	},
	tick: function(){
		if(this.anim){
			if(!(ThreadTime % 20)){
				const stored = this.data.currentLiquid || this.liquidStorage.getLiquidStored();
				if(stored){
					const that = World.getTileEntity(this.x, this.y - 1, this.z);
					if(that && that.liquidStorage){
						const stored2 = that.liquidStorage.getLiquidStored();
						const storage = that.liquidStorage.getLimit(stored) - that.liquidStorage.getAmount(stored);
						if((!stored2 || stored == stored2) && storage > 0){
							that.liquidStorage.addLiquidMilli(stored, this.liquidStorage.getLiquidMilli(stored, Math.min(0.144, this.liquidStorage.getAmount(stored), storage)));
							return;
						}
					}
				}
				this.destroyAnim();
			}
		}
	},
});




// file: block/smeltery/casting_table.js

IDRegistry.genBlockID("casting_table");

Block.createBlock("casting_table", [
	{name: "Casting Table", texture: [["casting_table_bottom", 0], ["casting_table_top", 0], ["casting_table_side", 0]], inCreative: true}
]);

ToolAPI.registerBlockMaterial(BlockID.casting_table, "stone", 1);
Block.setDestroyTime(BlockID.casting_table, 5);
Recipes.addShaped({id: BlockID.casting_table}, ["aaa", "aoa", "aoa"], ["a", ItemID.seared_brick, 0]);

(function(){
	const render = new ICRender.Model();
	const model = BlockRenderer.createModel();
	model.addBox(00/16, 15/16, 00/16, 15/16, 16/16, 01/16, BlockID.casting_table, 0);
	model.addBox(15/16, 15/16, 00/16, 16/16, 16/16, 15/16, BlockID.casting_table, 0);
	model.addBox(01/16, 15/16, 15/16, 16/16, 16/16, 16/16, BlockID.casting_table, 0);
	model.addBox(00/16, 15/16, 01/16, 01/16, 16/16, 16/16, BlockID.casting_table, 0);
	model.addBox(00/16, 10/16, 00/16, 16/16, 15/16, 16/16, BlockID.casting_table, 0);
	model.addBox(00/16, 00/16, 00/16, 05/16, 10/16, 05/16, BlockID.casting_table, 0);
	model.addBox(00/16, 00/16, 11/16, 05/16, 10/16, 16/16, BlockID.casting_table, 0);
	model.addBox(11/16, 00/16, 00/16, 16/16, 10/16, 05/16, BlockID.casting_table, 0);
	model.addBox(11/16, 00/16, 11/16, 16/16, 10/16, 16/16, BlockID.casting_table, 0);
	render.addEntry(model);
	BlockRenderer.setStaticICRender(BlockID.casting_table, 0, render);
})();


TileEntity.registerPrototype(BlockID.casting_table, {
	anim: null,
	animItem: null,
	animCast: null,
	defaultValues: {
		progress: 0,
		height: 0
	},
	updateAnim: function(){
		const render = new Render();
		render.setPart("body", [{
			type: "box",
			uv: {x: 0, y: Tinco.getLiquidY(this.liquidStorage.getLiquidStored())},
			coords: {x: 8, y: -7 - this.data.height / 2, z: -8},
			size: {x: 14, y: this.data.height, z: 14}
		}], {width: 64, height: 448});
		this.anim.describe({skin: "model/liquid.png", render: render.getID()});
		this.anim.load();
	},
	resetLimit: function(){
		for(let key in this.liquidStorage.liquidLimits){
			delete this.liquidStorage.liquidLimits[key];
		}
		this.liquidStorage.setLimit(null, -0.0001);
	},
	setLimit: function(){
		const castData = Material.getCast(this.container.getSlot("slotCast").id);
		for(let key in Material.material){
			if(Material.material[key].isMetal && Material.material[key].type == castData.type){
				this.liquidStorage.setLimit(Material.material[key].material, castData.cost);
			}
		}
	},
	setAnim: function(name){
		const id = this.container.getSlot("slot" + name).id;
		if(id){
			const key = "anim" + name;
			this[key] = new Animation.Item(this.x + 0.5, this.y + 1, this.z + 0.5);
			this[key].describeItem({id: id, count: 1, size: name == "Cast" ? 1 : 12/16, rotation: [Math.PI/2, 0, 0]});
			this[key].load();
		}
	},
	destroyAnim: function(name){
		const key = "anim" + name;
		if(this[key]){
			this[key].destroy();
			this[key] = null;
		}
	},
	init: function(){
		this.anim = new Animation.Base(this.x, this.y - 1, this.z);
		this.updateAnim();
		this.setAnim("Item");
		this.setAnim("Cast");
		this.resetLimit();
	},
	destroy: function(){
		this.destroyAnim("");
		this.destroyAnim("Item");
		this.destroyAnim("Cast");
	},
	click: function(id){
		let castData;
		if(this.animItem){
			this.container.dropSlot("slotItem", this.x + 0.5, this.y + 1, this.z + 0.5);
			this.destroyAnim("Item");
			if(this.animCast){
				this.setLimit();
				return;
			}
			this.resetLimit();
			return;
		}
		if(this.animCast){
			this.container.dropSlot("slotCast", this.x + 0.5, this.y + 1, this.z + 0.5);
			this.destroyAnim("Cast");
			this.resetLimit();
			return;
		}
		if(Material.getShape(id)){
			this.container.setSlot("slotItem", id, 1, 0);
			this.setAnim("Item");
			this.liquidStorage.setLimit("alubrass", 0.144);
			this.liquidStorage.setLimit("gold", 0.288);
			Player.decreaseCarriedItem();
			return;
		}
		castData = Material.getCast(id);
		if(castData){
			this.container.setSlot("slotCast", id, 1, 0);
			this.setAnim("Cast");
			this.setLimit();
			Player.decreaseCarriedItem();
			return;
		}
	},
	tick: function(){
		const stored = this.liquidStorage.getLiquidStored();
		const relative = this.liquidStorage.getRelativeAmount(stored);

		this.data.height += (relative - this.data.height) * 0.1;
		this.data.height = Math.round(this.data.height * 100) / 100;

		if(stored){
			if(relative == 1 && ++this.data.progress >= 40){
				let slot = this.container.getSlot("slotCast") || {};
				let type = Material.getCast(slot.id) || {};
				this.data.progress = 0;
				this.liquidStorage.setAmount(stored, 0);
				this.resetLimit();
				let result = null;
				for(let key in Material.material){
					if(Material.material[key].isMetal && Material.material[key].material == stored && Material.material[key].type == type.type){
						result = key - 0;
					}
				}
				if(result){
					this.container.setSlot("slotItem", result, 1, 0);
					this.setAnim("Item");
				}
				else{
					slot = this.container.getSlot("slotItem") || {};
					if(slot.id){
						type = Material.getShape(slot.id);
						this.container.setSlot("slotCast", ItemID["cast_" + type], 1, 0);
						this.setAnim("Cast");
					}
				}
			}
			if(Math.abs(relative - this.data.height) > 0.1){
				this.updateAnim();
			}
		}
		else if(this.anim && this.anim.isLoaded){
			this.anim.destroy();
		}

	}
});




// file: block/craft/stencil_table.js

IDRegistry.genBlockID("stencil_table");

Block.createBlock("stencil_table", [
	{name: "Stencil Table", texture: [["planks", 0], ["stencil_table_top", 0], ["stencil_table_side", 0]], inCreative: true},
	{name: "Stencil Table", texture: [["planks", 1], ["stencil_table_top", 0], ["stencil_table_side", 1]], inCreative: true},
	{name: "Stencil Table", texture: [["planks", 2], ["stencil_table_top", 0], ["stencil_table_side", 2]], inCreative: true},
	{name: "Stencil Table", texture: [["planks", 3], ["stencil_table_top", 0], ["stencil_table_side", 3]], inCreative: true},
	{name: "Stencil Table", texture: [["planks", 4], ["stencil_table_top", 0], ["stencil_table_side", 4]], inCreative: true},
	{name: "Stencil Table", texture: [["planks", 5], ["stencil_table_top", 0], ["stencil_table_side", 5]], inCreative: true}
]);

ToolAPI.registerBlockMaterial(BlockID.stencil_table, "stone", 1);
Block.setDestroyTime(BlockID.stencil_table, 5);
Tinco.createTableModel(BlockID.stencil_table, 6);


Elements.stencil_table = {
	slotInput: {type: "slot", x: 530, y: 80, bitmap: "tc_slot_frame", isValid: function(id){return id == ItemID.pattern_blank}},
	slotOutput: {type: "slot", x: 740, y: 80, isValid: function(){return false}}
};


(function(){

	for(let i = 6; i--;){
		Recipes.addShaped({id: BlockID.stencil_table, data: i}, ["a", "b"], ["a", ItemID.pattern_blank, 0, "b", 5, i]);
	}

	const array = ["rod", "binding", "rod2", "binding2", "pickaxe", "shovel", "hatchet", "scythe", "hammer", "excavator", "lumberaxe", "plate", "sword", "guard"];

	const func = function(result){
		return function(container){
			const input = container.getSlot("slotInput");
			const output = container.getSlot("slotOutput");
			if(input.id == ItemID.pattern_blank && (!output.id || output.id == result && output.count < 64)){
				input.count--;
				output.id = result;
				output.count++;
				container.validateSlot("slotInput");
			}
		};
	};

	let x = y = 0;
	for(let i = 0; i < array.length; i++){
		x = (i % 7) * 75 + 400;
		y = (i / 7 | 0) * 75 + 200;
		Elements.stencil_table["button_" + array[i]] = {type: "button", x: x, y: y, bitmap: "blank_button_up", bitmap2: "blank_button_down", scale: 4, clicker: {onClick: func(ItemID["pattern_" + array[i]])}};
		Elements.stencil_table["icon_" + array[i]] = {type: "image", x: x + 4, y: y + 4, z: 1, bitmap: "symbol." + array[i], scale: 4};
	}

})();


Container.stencil_table = new UI.Container();
Window.stencil_table = new UI.StandartWindow({
	standart: {
		header: {text: {text: "Stencil Table"}},
		inventory: {standart: true},
		background: {standart: true}
	},
	drawing: [
		{type: "bitmap", x: 620, y: 80, bitmap: "tc_arrow_right", scale: 4}
	],
	elements: Elements.stencil_table
});


Block.registerClickFunction("stencil_table", function(){
	Container.stencil_table.openAs(Window.stencil_table);
});


Container.stencil_table.setOnCloseListener({
	onClose: function(container){
		const pos = Player.getPosition();
		container.dropSlot("slotInput", pos.x, pos.y, pos.z);
		container.dropSlot("slotOutput", pos.x, pos.y, pos.z);
	}
});




// file: block/craft/part_builder.js

IDRegistry.genBlockID("part_builder");

Block.createBlock("part_builder", [
	{name: "Part Builder", texture: [["log_side", 0], ["part_builder_top", 0], ["part_builder_side", 0]], inCreative: true},
	{name: "Part Builder", texture: [["log_side", 1], ["part_builder_top", 0], ["part_builder_side", 1]], inCreative: true},
	{name: "Part Builder", texture: [["log_side", 2], ["part_builder_top", 0], ["part_builder_side", 2]], inCreative: true},
	{name: "Part Builder", texture: [["log_side", 3], ["part_builder_top", 0], ["part_builder_side", 3]], inCreative: true},
	{name: "Part Builder", texture: [["log2", 0], ["part_builder_top", 0], ["part_builder_side", 4]], inCreative: true},
	{name: "Part Builder", texture: [["log2", 2], ["part_builder_top", 0], ["part_builder_side", 5]], inCreative: true}
]);

ToolAPI.registerBlockMaterial(BlockID.part_builder, "stone", 1);
Block.setDestroyTime(BlockID.part_builder, 5);
Tinco.createTableModel(BlockID.part_builder, 6);


(function(){
	const array = [[17, 0], [17, 1], [17, 2], [17, 3], [162, 0], [162, 1]];
	for(let i = 6; i--;){
		Recipes.addShaped({id: BlockID.part_builder, data: i}, ["a", "b"], ["a", ItemID.pattern_blank, 0, "b", array[i][0], array[i][1]]);
	}
})();




Elements.part_builder = {
	slotPattern: {type: "slot", x: 470, y: 80, bitmap: "tc_slot_frame", isValid: function(id){
		const patternData = Material.getCast(id);
		if(patternData){
			return !patternData.isMetal;
		}
		return false;
	}},
	slotMaterial: {type: "slot", x: 530, y: 80, isValid: function(id, count, data){
		const materialData = Material.getMaterial(id, data);
		if(materialData){
			return !materialData.isMetal;
		}
		return false;
	}},
	slotPart: {type: "slot", x: 740, y: 80, isValid: function(){return false}},
	slotShard: {type: "slot", x: 800, y: 80, isValid: function(){return false}},
	button: {type: "button", x: 615, y: 160, bitmap: "_craft_button_up", bitmap2: "_craft_button_down", scale: 2, clicker: {
		onClick: function(container){
			const pattern = container.getSlot("slotPattern");
			const material = container.getSlot("slotMaterial");
			const patternData = Material.getCast(pattern.id);
			const materialData = Material.getMaterial(material.id, material.data);
			if(patternData && !patternData.isMetal && materialData && !materialData.isMetal){
				const part = container.getSlot("slotPart");
				const result = ItemID["part_" + patternData.type + "_" + materialData.material];
				const need = patternData.cost / materialData.cost;
				if((!part.id || part.id == result && part.count < 64) && material.count >= need){
					if(need == 0.5){
						const shard = container.getSlot("slotShard");
						const result2 = Material.getShard(materialData.material);
						if(!shard.id || shard.id == result2.id && shard.data == result2.data && shard.count < 64){
							part.id = result;
							part.count++;
							shard.id = result2.id;
							shard.data = result2.data;
							shard.count++;
							material.count--;
							container.validateSlot("slotMaterial");
						}
						return;
					}
					if(need % 1 == 0){
						part.id = result;
						part.count++;
						material.count -= need;
						container.validateSlot("slotMaterial");
					}
				}
			}
		}
	}},
	text: {type: "text", x: 630, y: 168, z: 1, text: "Craft"}
};


Container.part_builder = new UI.Container();
Window.part_builder = new UI.StandartWindow({
	standart: {
		header: {text: {text: "Part Builder"}},
		inventory: {standart: true},
		background: {standart: true}
	},
	drawing: [
		{type: "bitmap", x: 620, y: 80, bitmap: "tc_arrow_right", scale: 4}
	],
	elements: Elements.part_builder
});


Block.registerClickFunction("part_builder", function(){
	Container.part_builder.openAs(Window.part_builder);
});


Container.part_builder.setOnCloseListener({
	onClose: function(container){
		const pos = Player.getPosition();
		container.dropSlot("slotPattern", pos.x, pos.y, pos.z);
		container.dropSlot("slotMaterial", pos.x, pos.y, pos.z);
		container.dropSlot("slotPart", pos.x, pos.y, pos.z);
		container.dropSlot("slotShard", pos.x, pos.y, pos.z);
	}
});




// file: block/craft/tool_station.js

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




// file: api/share.js

ModAPI.registerAPI("TinCore", {
	Material: Material,
	Tool: Tool,
	Bmp: Bmp,
	Util: Tinco
});




