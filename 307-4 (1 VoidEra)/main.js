/*
BUILD INFO:
  dir: assets/dev
  target: main.js
  files: 45
*/



// file: header.js

/*
  ___               _                 _                    _      ____                         
 |_ _|  _ __     __| |  _   _   ___  | |_   _ __    __ _  | |    / ___|   ___    _ __    ___   
  | |  | '_ \   / _` | | | | | / __| | __| | '__|  / _` | | |   | |      / _ \  | '__|  / _ \  
  | |  | | | | | (_| | | |_| | \__ \ | |_  | |    | (_| | | |   | |___  | (_) | | |    |  __/  
 |___| |_| |_|  \__,_|  \__,_| |___/  \__| |_|     \__,_| |_|    \____|  \___/  |_|     \___|  
 
 by zheka_smirnov (vk.com/zheka_smirnov) and MineExplorer (vk.com/vlad.gr2027)

 This code is a copyright, do not distribute.
*/

// libraries
IMPORT("flags");
IMPORT("ToolType");
IMPORT("energylib");
IMPORT("ChargeItem");
IMPORT("MachineRender");

// constants
var GUI_SCALE = 3.2;
var fallVelocity = -0.0784;
var debugMode = __config__.getBool("debug_mode");

// square lava texture for geothermal generator ui.
LiquidRegistry.getLiquidData("lava").uiTextures.push("gui_lava_texture_16x16");

// import values
Player.getArmorSlot = ModAPI.requireGlobal("Player.getArmorSlot");
Player.setArmorSlot = ModAPI.requireGlobal("Player.setArmorSlot");
var nativeDropItem = ModAPI.requireGlobal("Level.dropItem");
var MobEffect = Native.PotionEffect;
var Enchantment = Native.Enchantment;
var BlockSide = Native.BlockSide;
var EntityType = Native.EntityType;

// energy (Eu)
var EU = EnergyTypeRegistry.assureEnergyType("Eu", 1);

// API
var player;
Callback.addCallback("LevelLoaded", function(){
	debugMode = __config__.getBool("debug_mode");
	player = Player.get();
});

function random(min, max){
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

function addShapelessRecipe(result, source){
	var ingredients = [];
	for(var i in source){
		var item = source[i];
		for(var n = 0; n < item.count; n++){
			ingredients.push(item);
		}
	}
	Recipes.addShapeless(result, ingredients);
}


var RARE_ITEM_NAME = function(item, name){
	return "§b" + name;
}

var ENERGY_ITEM_NAME = function(item, name){
	var energyStorage = Item.getMaxDamage(item.id) - 1;
	var energyStored = ChargeItemRegistry.getEnergyStored(item);
	if(energyStored==0){return name;}
	return name + "\n§7" + energyStored + "/" + energyStorage + " Eu";
}

var RARE_ENERGY_ITEM_NAME = function(item, name){
	var energyStorage = Item.getMaxDamage(item.id) - 1;
	var energyStored = ChargeItemRegistry.getEnergyStored(item);
	if(energyStored==0){return name;}
	return "§b" + name + "\n§7" + energyStored + "/" + energyStorage + " Eu";
}

// vanilla items
Recipes.addFurnaceFuel(325, 10, 2000);
ChargeItemRegistry.registerFlashItem(331, "Eu", 800, 0); // redstone

// debug
var lasttime = -1
var frame = 0

Callback.addCallback("tick", function(){
	if(debugMode){
		var t = java.lang.System.currentTimeMillis()
		if(frame++ % 20 == 0){
			if(lasttime != -1){
				tps = 1000 / (t - lasttime) * 20
				Game.tipMessage(Math.round(tps * 10) / 10 + "tps")
			}
			lasttime = t
		}
	}
});




// file: core/machine/define.js

var MachineRegistry = {
	machineIDs: {},

	isMachine: function(id){
		return this.machineIDs[id];
	},

	registerPrototype: function(id, Prototype, notUseEU){
		// register ID
		this.machineIDs[id] = true;
		/*
		Prototype.click = function(id, count, data, coords){
			if(id==ItemID.wrench || id==ItemID.electricWrench){
				return true;
			}
		}
		*/
		if(!notUseEU){
			// wire connection
			ICRender.getGroup("ic-wire").add(id, -1);
			// setup energy value
			if (Prototype.defaultValues){
				Prototype.defaultValues.energy = 0;
			}
			else{
				Prototype.defaultValues = {
					energy: 0
				};
			}
			// copy functions
			if(!Prototype.getEnergyStorage){
				Prototype.getEnergyStorage = function(){
					return 0;
				};
			}
		}
		ToolAPI.registerBlockMaterial(id, "stone", 1);
		Block.setDestroyTime(id, 3);
		TileEntity.registerPrototype(id, Prototype);
		
		if(!notUseEU){
			// register for energy net
			EnergyTileRegistry.addEnergyTypeForId(id, EU);
		}
	},

	// standart functions
	getMachineDrop: function(coords, blockID, level, standartDrop){
		BlockRenderer.unmapAtCoords(coords.x, coords.y, coords.z);
		var item = Player.getCarriedItem();
		if(item.id==ItemID.wrenchBronze){
			ToolAPI.breakCarriedTool(10);
			World.setBlock(coords.x, coords.y, coords.z, 0);
			if(Math.random() < 0.8){return [[blockID, 1, 0]];}
			return [[standartDrop || blockID, 1, 0]];
		}
		if(item.id==ItemID.electricWrench && item.data + 500 <= Item.getMaxDamage(item.id)){
			Player.setCarriedItem(item.id, 1, item.data + 500);
			World.setBlock(coords.x, coords.y, coords.z, 0);
			return [[blockID, 1, 0]];
		}
		if(level >= ToolAPI.getBlockDestroyLevel(blockID)){
			return [[standartDrop || blockID, 1, 0]];
		}
		return [];
	},
	
	create6sidesRender: function(id, texture){
		if(texture.length == 2){
			var textures = [
				[texture[1], texture[0], texture[0], texture[0], texture[0], texture[0]],
				[texture[0], texture[1], texture[0], texture[0], texture[0], texture[0]],
				[texture[0], texture[0], texture[1], texture[0], texture[0], texture[0]],
				[texture[0], texture[0], texture[0], texture[1], texture[0], texture[0]],
				[texture[0], texture[0], texture[0], texture[0], texture[1], texture[0]],
				[texture[0], texture[0], texture[0], texture[0], texture[0], texture[1]]
			]
		}
		for(var i = 0; i < 5; i++){
			MachineRenderer.registerRenderModel(id, i, textures[i])
		}
	},
	
	initModel: function(){
		if(this.data.isActive){
			var block = World.getBlock(this.x, this.y, this.z);
			MachineRenderer.mapAtCoords(this.x, this.y, this.z, block.id, block.data);
		}
	},
	
	activateMachine: function(){
		if(!this.data.isActive){
			this.data.isActive = true;
			var block = World.getBlock(this.x, this.y, this.z);
			MachineRenderer.mapAtCoords(this.x, this.y, this.z, block.id, block.data);
		}
	},
	
	deactivateMachine: function(){
		if(this.data.isActive){
			this.data.isActive = false;
			BlockRenderer.unmapAtCoords(this.x, this.y, this.z);
		}
	},
	
	basicEnergyReceiveFunc: function(type, src){
		var energyNeed = this.getEnergyStorage() - this.data.energy;
		this.data.energy += src.getAll(energyNeed);
	},
	
	isValidEUItem: function(id, count, data, container){
		var level = container.tileEntity.data.power_tier || 0;
		return ChargeItemRegistry.isValidItem(id, "Eu",  level);
	},
	
	isValidEUStorage: function(id, count, data, container){
		var level = container.tileEntity.data.power_tier || 0;
		return ChargeItemRegistry.isValidStorage(id, "Eu",  level);
	},
}

var transferByTier = {
	0: 32,
	1:  256,
	2: 2048,
	3: 8192,
  4: 16384,
  5: 25000

}




// file: core/machine/recipe.js

var MachineRecipeRegistry = {
	recipeData: {},
	
	registerRecipesFor: function(name, data, validateKeys){
		if(validateKeys){
			var newData = {};
			for(var key in data){
				var newKey = key;
				if(key.split(":").length < 2){
					newKey = eval(key);
				}
				newData[newKey] = data[key];
			}
			data = newData;
		}
		this.recipeData[name] = data;
	},
	
	addRecipeFor: function(name, source, result){
		this.requireRecipesFor(name, true)[source] = result;
	},
	
	requireRecipesFor: function(name, createIfNotFound){
		if(!this.recipeData[name] && createIfNotFound){
			this.recipeData[name] = {};
		}
		return this.recipeData[name];
	},
	
	getRecipeResult: function(name, key1, key2){
		var data = this.requireRecipesFor(name);
		if(data){
			return data[key1] || data[key1+":"+key2];
		}
	}
}




// file: core/machine/upgrade.js

var UpgradeAPI = {
	upgrades: {},
	data: {},

	isUpgrade: function(id){
		return UpgradeAPI.upgrades[id];
	},

	registerUpgrade: function(id, func){
		this.upgrades[id] = true;
		this.data[id] = func;
	},

	callUpgrade: function(item, machine, container, data, coords){
		var callback = this.data[item.id];
		if(callback){
			callback(item, machine, container, data, coords);
		}
	},

	executeUpgrades: function(machine){
		var container = machine.container;
		var data = machine.data;
		var coords = {x: machine.x, y: machine.y, z: machine.z};
		
		var upgrades = [];
		for(var slotName in container.slots){
			if(slotName.match(/Upgrade/)){
				var slot = container.getSlot(slotName);
				if(slot.id){
					var find = false;
					for(var i in upgrades){
						var item = upgrades[i];
						if(item.id == slot.id && item.data == slot.data){
							find = true;
							item.count += slot.count;
						}
					}
					if(!find){
						item = {id: slot.id, count: slot.count, data: slot.data};
						upgrades.push(item);
					}
				}
			}
		}
		for(var i in upgrades){
			this.callUpgrade(upgrades[i], machine, container, data, coords);
		}
	},
	
	findNearestContainers: function(coords, direction){
		var directions = {
			up: {x: 0, y: 1, z: 0},
			down: {x: 0, y: -1, z: 0},
			east: {x: 1, y: 0, z: 0},
			west: {x: -1, y: 0, z: 0},
			south: {x: 0, y: 0, z: 1},
			north: {x: 0, y: 0, z: -1},
		}
		var containers = [];
		if(direction){
			dir = directions[direction]
			var container = World.getContainer(coords.x + dir.x, coords.y + dir.y, coords.z + dir.z);
			if(container){containers.push(container);}
		}
		else{
			for(var i in directions){
				var dir = directions[i];
				var container = World.getContainer(coords.x + dir.x, coords.y + dir.y, coords.z + dir.z);
				if(container){containers.push(container);}
			}
		}
		return containers;
	},
	
	findNearestLiquidStorages: function(coords, direction){
		var directions = {
			up: {x: 0, y: 1, z: 0},
			down: {x: 0, y: -1, z: 0},
			east: {x: 1, y: 0, z: 0},
			west: {x: -1, y: 0, z: 0},
			south: {x: 0, y: 0, z: 1},
			north: {x: 0, y: 0, z: -1},
		}
		var storages = [];
		if(direction){
			dir = directions[direction]
			var tileEntity = World.getTileEntity(coords.x + dir.x, coords.y + dir.y, coords.z + dir.z);
			if(tileEntity && tileEntity.liquidStorage){
				storages.push(tileEntity.liquidStorage);
			}
		}
		else{
			for(var i in directions){
				var dir = directions[i];
				var tileEntity = World.getTileEntity(coords.x + dir.x, coords.y + dir.y, coords.z + dir.z);
				if(tileEntity && tileEntity.liquidStorage){
					storages.push(tileEntity.liquidStorage);
				}
			}
		}
		return storages;
	},
}


function addItemsToContainers(items, containers, tile){
	for(var i in items){
		var item = items[i];
		for(var c in containers){
			if(item.count==0){
				item.id = 0;
				item.data = 0;
				break;
			}
			
			var container = containers[c];
			var tileEntity = container.tileEntity;
			var slots = [];
			var slotsInitialized = false;
			
			if(tileEntity){
				if(tileEntity.addTransportedItem){
					tileEntity.addTransportedItem({}, item, {x: tile.x, y: tile.y, z: tile.z});
					continue;
				}
				if(tileEntity.getTransportSlots){
					slots = tileEntity.getTransportSlots().input || [];
					slotsInitialized = true;
				}
			}
			if(!slotsInitialized){
				if(container.slots){
					for(var name in container.slots){
						slots.push(name);
					}
				}else{
					for(var s = 0; s < container.getSize(); s++){
						slots.push(s);
					}
				}
			}
			for(var s in slots){
				var slot = container.getSlot(slots[s]);
				if(item.count <= 0){
					break;
				}
				if(slot.id == 0 || slot.id == item.id && slot.data == item.data){
					var maxstack = slot.id > 0 ? Item.getMaxStack(slot.id) : 64;
					var add = Math.min(maxstack - slot.count, item.count);
					item.count -= add;
					slot.count += add;
					slot.id = item.id;
					slot.data = item.data;
					if(!container.slots){
						container.setSlot(s, slot.id, slot.count, slot.data);
					}
				}
			}
		}
		if(item.count==0){
			item.id = 0;
			item.data = 0;
		}
	}
}

function getItemsFrom(items, containers, tile){
	for(var i in items){
		var item = items[i];
		var maxStack = 64;
		var stop = false;
		for(var c in containers){
			var container = containers[c];
			var tileEntity = container.tileEntity;
			var slots = [];
			var slotsInitialized = false;
			
			if(tileEntity && tileEntity.getTransportSlots){
				slots = tileEntity.getTransportSlots().output || [];
				slotsInitialized = true;
			}
			if(!slotsInitialized){
				if(container.slots){
					for(var name in container.slots){
						slots.push(name);
					}
				}else{
					for(var s = 0; s < container.getSize(); s++){
						slots.push(s);
					}
				}
			}
			for(var s in slots){
				var slot = container.getSlot(slots[s]);
				if(slot.id > 0){
					if(tile.addTransportedItem){
						stop = tile.addTransportedItem({}, slot, {});
						if(!container.slots){
							container.setSlot(s, slot.id, slot.count, slot.data);
						}
						if(stop) break;
					}
					else if(item.id == slot.id && item.data == slot.data || item.id == 0){
						maxStack = Item.getMaxStack(slot.id);
						var add = Math.min(maxStack - item.count, slot.count);
						slot.count -= add;
						item.count += add;
						item.id = slot.id;
						item.data = slot.data;
						if(slot.count==0) slot.id = slot.data = 0;
						if(!container.slots){
							container.setSlot(s, slot.id, slot.count, slot.data);
						}
						if(item.count == maxStack){break;}
					}
				}
			}
			if(stop || !tile.addTransportedItem &&  item.count == maxStack){break;}
		}
		if(tile.addTransportedItem){return;}
	}
}


function addLiquidToStorages(liquid, output, input){
	var amount = output.getLiquid(liquid, 1);
	if(amount){
		for(var i in input){
			var storage = input[i];
			if(storage.getLimit(liquid) < 99999999){
			amount = storage.addLiquid(liquid, amount);}
		}
		output.addLiquid(liquid, amount);
	}
}

function getLiquidFromStorages(liquid, input, output){
	var amount;
	for(var i in output){
		var storage = output[i];
		if(!liquid){
			liquid = storage.getLiquidStored();
		}
		if(liquid){
			var limit = input.getLimit(liquid);
			if(limit < 99999999){
				if(!amount) amount = Math.min(limit - input.getAmount(liquid), 1);
				amount = storage.getLiquid(liquid, amount);
				input.addLiquid(liquid, amount);
				if(input.isFull(liquid)) return;
			}
			else{
				liquid = null;
			}
		}
	}
}




// file: machine/item/but.js

var currentUIscreen;
Callback.addCallback("NativeGuiChanged", function(screenName){
	currentUIscreen = screenName;
	if(screenName != "hud_screen" && screenName != "in_game_play_screen"){
		if(UIbuttons.container){
			UIbuttons.container.close();
			UIbuttons.container = null;
		}
	}
});

var button_scale = __config__.access("button_scale");
var UIbuttons = {
	data: {},
	isEnabled: false,
	container: null,
	Window: new UI.Window({
		location: {
			x: 1000 - button_scale,
			y: UI.getScreenHeight()/2 - button_scale*1.5,
			width: button_scale,
			height: button_scale*4
		},
		drawing: [{type: "background", color: 0}],
		elements: {}
	}),
	
	setButton: function(id, name){
		if(!this.data[id]){
			this.data[id] = [name]
		}else{
			this.data[id].push(name);
		}
	},
	
	getButtons: function(id){
		return this.data[id];
	},
	
	registerButton: function(name, properties){
		buttonContent[name] = properties;
	}
}

var buttonMap = {
	button_nightvision: false,
	button_fly: false,
	button_jump: false,
}

var buttonContent = {
	button_nightvision: {
		y: 0,
		type: "button",
		bitmap: "button_nightvision_on",
		bitmap2: "button_nightvision_off",
		scale: 50,
		clicker: {
			onClick: function(){
				var armor = Player.getArmorSlot(0);
				var extra = armor.extra;
				if(extra){
					var nightvision = extra.getBoolean("nv");
				}
				else{
					var nightvision = false;
					extra = new ItemExtraData();
				}
				if(nightvision){
					extra.putBoolean("nv", false);
					Game.message("§4Nightvision mode disabled");
				}
				else{
					extra.putBoolean("nv", true);
					Game.message("§2Nightvision mode enabled");
				}
				Player.setArmorSlot(0, armor.id, 1, armor.data, extra);
			}
		}
	},
	button_fly: {
		y: 1000,
		type: "button",
		bitmap: "button_fly_on",
		bitmap2: "button_fly_off",
		scale: 50
	},
	button_hover: {
		y: 2000,
		type: "button",
		bitmap: "button_hover_off",
		scale: 50,
		clicker: {
			onClick: function(){
				var armor = Player.getArmorSlot(1);
				var extra = armor.extra;
				if(extra){
					var hover = extra.getBoolean("hover");
				}
				else{
					var hover = false;
					extra = new ItemExtraData();
				}
				if(hover){
					extra.putBoolean("hover", false);
					Game.message("§4Hover mode disabled");
				}
				else{
					extra.putBoolean("hover", true);
					Game.message("§2Hover mode enabled");
				}
				Player.setArmorSlot(1, armor.id, 1, armor.data, extra);
			}
		}
	},
	button_jump: {
		y: 3000,
		type: "button",
		bitmap: "button_jump_on",
		bitmap2: "button_jump_off",
		scale: 50,
		clicker: {
			onClick: function(){
				var armor = Player.getArmorSlot(3);
				if(Item.getMaxDamage(armor.id) - armor.data >= 1000 && Math.abs(Player.getVelocity().y - fallVelocity) < 0.0001){
					Player.addVelocity(0, 1.4, 0);
					Player.setArmorSlot(3, armor.id, 1, armor.data+1000);
				}
			}
		}
	}
}

UIbuttons.Window.setAsGameOverlay(true);

function updateUIbuttons(){
	var elements = UIbuttons.Window.content.elements;
	for(var name in buttonMap){
		if(buttonMap[name]){
			if(!elements[name]){
				elements[name] = buttonContent[name];
			}
			var element = elements[name];
			if(name == "button_hover"){
				var armor = Player.getArmorSlot(1);
				var extra = armor.extra;
				if(extra){
					var hover = extra.getBoolean("hover");
				}
				if(hover){
					element.bitmap = "button_hover_on";
				}else{
					element.bitmap = "button_hover_off";
				}
			}
			element.x = 0;
			buttonMap[name] = false;
		}
		else{
			elements[name] = null;
		}
	}
}


Callback.addCallback("tick", function(){
	var armor = [Player.getArmorSlot(0), Player.getArmorSlot(1), Player.getArmorSlot(2), Player.getArmorSlot(3)];
	activeButtons = [];
	for(var i in armor){
		var buttons = UIbuttons.getButtons(armor[i].id);
		for(var i in buttons){
			buttonMap[buttons[i]] = true;
			UIbuttons.isEnabled = true;
		}
	}
	if(UIbuttons.isEnabled && (currentUIscreen == "hud_screen" || currentUIscreen == "in_game_play_screen")){
		updateUIbuttons();
		if(!UIbuttons.container){
			UIbuttons.container = new UI.Container();
			UIbuttons.container.openAs(UIbuttons.Window);
		}
		if(UIbuttons.container.isElementTouched("button_fly")){
			var armor = armor[1];
			var extra = armor.extra;
			if(extra){
				var hover = extra.getBoolean("hover");
			}
			var y = Player.getPosition().y
			var maxDmg = Item.getMaxDamage(armor.id)
			if(armor.data < maxDmg && y < 256){
				var vel = Player.getVelocity();
				var vy = Math.min(32, 264-y) / 160;
				if(hover){
					if(World.getThreadTime() % 5 == 0){
						Player.setArmorSlot(1, armor.id, 1, Math.min(armor.data+20, maxDmg), extra);
					}
					if(vel.y < 0.2){
						Player.addVelocity(0, Math.min(vy, 0.2-vel.y), 0);
					}
				}
				else{
					if(World.getThreadTime() % 5 == 0){
						Player.setArmorSlot(1, armor.id, 1, Math.min(armor.data+35, maxDmg), extra);
					}
					if(vel.y < 0.67){
						Player.addVelocity(0, Math.min(vy, 0.67-vel.y), 0);
					}
				}
			}
		}
	}
	else{
		if(UIbuttons.container){
			UIbuttons.container.close();
			UIbuttons.container = null;
		}
	}
	UIbuttons.isEnabled = false;
});




// file: machine/generator/advsolar.js

IDRegistry.genBlockID("advsolar");
Block.createBlock("advsolar", [
	{name: "Advanced Solar Panel", texture: [["advtop", 0], ["advs", 0], ["advtop", 0], ["advtop", 0], ["advtop", 0], ["advtop", 0]], inCreative: true}
], "opaque");

Block.registerDropFunction("advsolar", function(coords, blockID, blockData, level){
	return MachineRegistry.getMachineDrop(coords, blockID, level, BlockID.machineBlockBasic);
});

Callback.addCallback("PreLoaded", function(){
	Recipes.addShaped({id: BlockID.advsolar, count: 1, data: 0}, [
		"aaa",
		"bxb",
		"wsw"
	], ['a', BlockID.reinforcedGlass, 0, 'x', BlockID.solarPanel, 0, 'b', ItemID.plateAlloy, 0, 'w', ItemID.circuitAdvanced, 0, 's', ItemID.irradiantreinforceplate, 0]);
});

var ADV = {
	gen_day: 8,
	gen_night: 1,
	output: 32,
	energy_storage: 32000
};

var guiAdvsolar = new UI.StandartWindow({
	standart: {
		header: {text: {text: "Advanced Solar Panel"}},
		inventory: {standart: true},
		background: {standart: true}
	},
	
	drawing: [
		{type: "background", color: android.graphics.Color.rgb(53, 53, 53)},
		{type: "bitmap", x: 360, y: 40, bitmap: "advgui", scale: 2.1},
	],
	
	elements: {
		"energyScale": {type: "scale", x: 398, y: 90, direction: 0, value: 0.5, bitmap: "adven", scale: 2.1},
		"slot1": {type: "slot", x: 800, y: 70, bitmap: "sbg", size: 50, isValid: MachineRegistry.isValidEUItem},
		"slot2": {type: "slot", x: 800, y: 125, bitmap: "sbg", size: 50},
		"slot3": {type: "slot", x: 800, y: 185, bitmap: "sbg", size: 50},
		"slot4": {type: "slot", x: 800, y: 245, bitmap: "sbg", size: 50},
		"textStorage": {font: {color: android.graphics.Color.WHITE, shadow: 0.6, size: 18}, type: "text", x: 420, y: 190, width: 300, height: 50, text: "Storage:"},
		"textInfo1": {font: {color: android.graphics.Color.WHITE, shadow: 0.6, size: 18}, type: "text", x: 520, y: 190, width: 300, height: 50, text: "/32000"},
		"textOutput": {font: {color: android.graphics.Color.WHITE, shadow: 0.6, size: 18}, type: "text", x: 420, y: 247, width: 300, height: 20, text: "Max Output: " + ADV.output + " EU/t"},
		"textGen": {font: {color: android.graphics.Color.WHITE, shadow: 0.6, size: 18}, type: "text", x: 420, y: 280, width: 300, height: 39, text: "Generating:"},
		"light": {type: "image", x: 425, y: 135, bitmap: "soff", scale: 2.1}
	}
});


ICore.Machine.registerPrototype(BlockID.advsolar, {
	getEnergyStorage: function(){
		return ADV.energy_storage;
	},
	
	getGuiScreen: function(){
		return guiAdvsolar;
	},
	
	tick: function(){
		var energyStorage = this.getEnergyStorage();
		this.data.energy -= ChargeItemRegistry.addEnergyTo(this.container.getSlot("slot1"), this.data.energy, ADV.output, 0);
		
		this.container.setScale("energyScale", this.data.energy / energyStorage);
		this.container.setText("textInfo1", parseInt(this.data.energy) + "/" + energyStorage);
	},
	
	isGenerator: function() {
		return true;
	},
	
	energyTick: function(type, src){
		var content = this.container.getGuiContent();
			if(World.getLightLevel(this.x, this.y+1, this.z) == 15){
				this.data.energy = Math.min(this.data.energy + ADV.gen_day, this.getEnergyStorage());
				this.container.setText("textGen", "Generating: " + ADV.gen_day + " EU/t"); 
				if(content){ 
				content.elements["light"].bitmap = "son";}
	
			else{
				this.data.energy = Math.min(this.data.energy + ADV.gen_night, this.getEnergyStorage());
				this.container.setText("textGen", "Generating: " + ADV.gen_night + " EU/t");
				if(content){
				content.elements["light"].bitmap = "mon";}
			}
      }
		else{
			this.container.setText("textGen", "Generating: 0 EU/t");
			if(content){
			content.elements["light"].bitmap = "soff";}
}
		var output = Math.min(ADV.output, this.data.energy);
		this.data.energy += src.add(output) - output;
	}
});




// file: machine/generator/hbrsolar.js

IDRegistry.genBlockID("hbrsolar");
Block.createBlock("hbrsolar", [
	{name: "Hybrid Solar Panel", texture: [["hbrtop", 0], ["hbrs", 0], ["hbrtop", 0], ["hbrtop", 0], ["hbrtop", 0], ["hbrtop", 0]], inCreative: true}
], "opaque");

Block.registerDropFunction("hbrsolar", function(coords, blockID, blockData, level){
	return MachineRegistry.getMachineDrop(coords, blockID, level, BlockID.machineBlockBasic);
});

Callback.addCallback("PreLoaded", function(){
	Recipes.addShaped({id: BlockID.hbrsolar, count: 1, data: 0}, [
		"awa",
		"dxd",
		"ese"
	], ['a', ItemID.carbonPlate, 0, 'x', BlockID.advsolar, 0, 'd', ItemID.plateReinforcedIridium, 0, 'e', ItemID.circuitAdvanced, 0, 'w', 22, 0, 's', ItemID.sunnarium, 0]);
});

var HBR = {
	gen_day: 64,
	gen_night: 8,
	output: 128,
	energy_storage: 100000
};

var guiHbrsolar = new UI.StandartWindow({
	standart: {
		header: {text: {text: "Hybrid Solar Panel"}},
		inventory: {standart: true},
		background: {standart: true}
	},
	
	drawing: [
		{type: "background", color: android.graphics.Color.rgb(53, 53, 53)},
		{type: "bitmap", x: 360, y: 40, bitmap: "advgui", scale: 2.1},
	],
	
	elements: {
		"energyScale": {type: "scale", x: 398, y: 90, direction: 0, value: 0.5, bitmap: "adven", scale: 2.1},
		"slot1": {type: "slot", x: 800, y: 70, bitmap: "sbg", size: 50, isValid: MachineRegistry.isValidEUItem},
		"slot2": {type: "slot", x: 800, y: 125, bitmap: "sbg", size: 50},
		"slot3": {type: "slot", x: 800, y: 185, bitmap: "sbg", size: 50},
		"slot4": {type: "slot", x: 800, y: 245, bitmap: "sbg", size: 50},
		"textStorage": {font: {color: android.graphics.Color.WHITE, shadow: 0.6, size: 18}, type: "text", x: 420, y: 190, width: 300, height: 50, text: "Storage:"},
		"textInfo1": {font: {color: android.graphics.Color.WHITE, shadow: 0.6, size: 18}, type: "text", x: 520, y: 190, width: 300, height: 50, text: "/100000"},
		"textOutput": {font: {color: android.graphics.Color.WHITE, shadow: 0.6, size: 18}, type: "text", x: 420, y: 247, width: 300, height: 20, text: "Max Output: " + HBR.output + " EU/t"},
		"textGen": {font: {color: android.graphics.Color.WHITE, shadow: 0.6, size: 18}, type: "text", x: 420, y: 280, width: 300, height: 39, text: "Generating:"},
		"light": {type: "image", x: 425, y: 135, bitmap: "soff", scale: 2.1}
	}
});


ICore.Machine.registerPrototype(BlockID.hbrsolar, {
	getEnergyStorage: function(){
		return HBR.energy_storage;
	},
	
	getGuiScreen: function(){
		return guiHbrsolar;
	},
	
	tick: function(){
		var energyStorage = this.getEnergyStorage();
		this.data.energy -= ChargeItemRegistry.addEnergyTo(this.container.getSlot("slot1"), this.data.energy, HBR.output, 0);
		
		this.container.setScale("energyScale", this.data.energy / energyStorage);
		this.container.setText("textInfo1", parseInt(this.data.energy) + "/" + energyStorage);
	},
	
	isGenerator: function() {
		return true;
	},
	
	energyTick: function(type, src){
		var content = this.container.getGuiContent();
			if(World.getLightLevel(this.x, this.y+1, this.z) == 15){
				this.data.energy = Math.min(this.data.energy + HBR.gen_day, this.getEnergyStorage());
				this.container.setText("textGen", "Generating: " + HBR.gen_day + " EU/t"); 
				if(content){ 
				content.elements["light"].bitmap = "son";}
	
			else{
				this.data.energy = Math.min(this.data.energy + HBR.gen_night, this.getEnergyStorage());
				this.container.setText("textGen", "Generating: " + HBR.gen_night + " EU/t");
				if(content){
				content.elements["light"].bitmap = "mon";}
			}
      }
		else{
			this.container.setText("textGen", "Generating: 0 EU/t");
			if(content){
			content.elements["light"].bitmap = "soff";}
}
		var output = Math.min(HBR.output, this.data.energy);
		this.data.energy += src.add(output) - output;
	}
});





// file: machine/generator/ultsolar.js

IDRegistry.genBlockID("ultsolar");
Block.createBlock("ultsolar", [
	{name: "Ultimate Solar Panel", texture: [["ulttop", 0], ["ults", 0], ["ulttop", 0], ["ulttop", 0], ["ulttop", 0], ["ulttop", 0]], inCreative: true}
], "opaque");

Block.registerDropFunction("ultsolar", function(coords, blockID, blockData, level){
	return MachineRegistry.getMachineDrop(coords, blockID, level, BlockID.machineBlockBasic);
});

Callback.addCallback("PreLoaded", function(){
	Recipes.addShaped({id: BlockID.ultsolar, count: 1, data: 0}, [
		" w ",
		"dxd",
		"ede"
	], ['d', ItemID.coalChunk, 0, 'x', BlockID.hbrsolar, 0, 'e', ItemID.sunnariumalloy, 0, 'w', 22, 0]);
});

var ULT = {
	gen_day: 512,
	gen_night: 64,
	output: 512,
	energy_storage: 1000000
};

var guiUltsolar = new UI.StandartWindow({
	standart: {
		header: {text: {text: "Ultimate Solar Panel"}},
		inventory: {standart: true},
		background: {standart: true}
	},
	
	drawing: [
		{type: "background", color: android.graphics.Color.rgb(53, 53, 53)},
		{type: "bitmap", x: 360, y: 40, bitmap: "advgui", scale: 2.1},
	],
	
	elements: {
		"energyScale": {type: "scale", x: 398, y: 90, direction: 0, value: 0.5, bitmap: "adven", scale: 2.1},
		"slot1": {type: "slot", x: 800, y: 70, bitmap: "sbg", size: 50, isValid: MachineRegistry.isValidEUItem},
		"slot2": {type: "slot", x: 800, y: 125, bitmap: "sbg", size: 50},
		"slot3": {type: "slot", x: 800, y: 185, bitmap: "sbg", size: 50},
		"slot4": {type: "slot", x: 800, y: 245, bitmap: "sbg", size: 50},
		"textStorage": {font: {color: android.graphics.Color.WHITE, shadow: 0.6, size: 18}, type: "text", x: 420, y: 190, width: 300, height: 50, text: "Storage:"},
		"textInfo1": {font: {color: android.graphics.Color.WHITE, shadow: 0.6, size: 18}, type: "text", x: 520, y: 190, width: 300, height: 50, text: "/32000"},
		"textOutput": {font: {color: android.graphics.Color.WHITE, shadow: 0.6, size: 18}, type: "text", x: 420, y: 247, width: 300, height: 20, text: "Max Output: " + ULT.output + " EU/t"},
		"textGen": {font: {color: android.graphics.Color.WHITE, shadow: 0.6, size: 18}, type: "text", x: 420, y: 280, width: 300, height: 39, text: "Generating:"},
		"light": {type: "image", x: 425, y: 135, bitmap: "soff", scale: 2.1}
	}
});


ICore.Machine.registerPrototype(BlockID.ultsolar, {
	getEnergyStorage: function(){
		return ULT.energy_storage;
	},
	
	getGuiScreen: function(){
		return guiUltsolar;
	},
	
	tick: function(){
		var energyStorage = this.getEnergyStorage();
		this.data.energy -= ChargeItemRegistry.addEnergyTo(this.container.getSlot("slot1"), this.data.energy, ULT.output, 0);
		
		this.container.setScale("energyScale", this.data.energy / energyStorage);
		this.container.setText("textInfo1", parseInt(this.data.energy) + "/" + energyStorage);
	},
	
	isGenerator: function() {
		return true;
	},
	
	energyTick: function(type, src){
		var content = this.container.getGuiContent();
			if(World.getLightLevel(this.x, this.y+1, this.z) == 15){
				this.data.energy = Math.min(this.data.energy + ULT.gen_day, this.getEnergyStorage());
				this.container.setText("textGen", "Generating: " + ULT.gen_day + " EU/t"); 
				if(content){ 
				content.elements["light"].bitmap = "son";}
	
			else{
				this.data.energy = Math.min(this.data.energy + ULT.gen_night, this.getEnergyStorage());
				this.container.setText("textGen", "Generating: " + ULT.gen_night + " EU/t");
				if(content){
				content.elements["light"].bitmap = "mon";}
			}
      }
		else{
			this.container.setText("textGen", "Generating: 0 EU/t");
			if(content){
			content.elements["light"].bitmap = "soff";}
}
		var output = Math.min(ULT.output, this.data.energy);
		this.data.energy += src.add(output) - output;
	}
});





// file: machine/generator/ulthbrsolar.js

IDRegistry.genBlockID("ulthbrsolar");
Block.createBlock("ulthbrsolar", [
	{name: "Ultimate Hybrid Solar Panel", texture: [["ulthbrtop", 0], ["ulthbrs", 0], ["ulthbrtop", 0], ["ulthbrtop", 0], ["ulthbrtop", 0], ["ulthbrtop", 0]], inCreative: true}
], "opaque");

Block.registerDropFunction("ulthbrsolar", function(coords, blockID, blockData, level){
	return MachineRegistry.getMachineDrop(coords, blockID, level, BlockID.machineBlockBasic);
});

Callback.addCallback("PreLoaded", function(){
	Recipes.addShaped({id: BlockID.ulthbrsolar, count: 1, data: 0}, [
		"aaa",
		"xxx",
		"b#b"
	], ['x', BlockID.ultsolar, 0, 'a', ItemID.irradiantglasspane, 0, 'b', ItemID.irradiantreinforceplate, 0, '#', ItemID.enrichedsunnariumalloy, 0]);
});

var ULTHBR = {
	gen_day: 4096,
	gen_night: 2048,
	output: 8192,
	energy_storage: 10000000
};

var guiUlthbrsolar = new UI.StandartWindow({
	standart: {
		header: {text: {text: "Ultimate Hybrid Solar Panel"}},
		inventory: {standart: true},
		background: {standart: true}
	},
	
	drawing: [
		{type: "background", color: android.graphics.Color.rgb(53, 53, 53)},
		{type: "bitmap", x: 360, y: 40, bitmap: "advgui", scale: 2.1},
	],
	
	elements: {
		"energyScale": {type: "scale", x: 398, y: 90, direction: 0, value: 0.5, bitmap: "adven", scale: 2.1},
		"slot1": {type: "slot", x: 800, y: 70, bitmap: "sbg", size: 50, isValid: MachineRegistry.isValidEUItem},
		"slot2": {type: "slot", x: 800, y: 125, bitmap: "sbg", size: 50},
		"slot3": {type: "slot", x: 800, y: 185, bitmap: "sbg", size: 50},
		"slot4": {type: "slot", x: 800, y: 245, bitmap: "sbg", size: 50},
		"textStorage": {font: {color: android.graphics.Color.WHITE, shadow: 0.6, size: 18}, type: "text", x: 420, y: 190, width: 300, height: 50, text: "Storage:"},
		"textInfo1": {font: {color: android.graphics.Color.WHITE, shadow: 0.6, size: 18}, type: "text", x: 520, y: 190, width: 300, height: 50, text: "/32000"},
		"textOutput": {font: {color: android.graphics.Color.WHITE, shadow: 0.6, size: 18}, type: "text", x: 420, y: 247, width: 300, height: 20, text: "Max Output: " + ULTHBR.output + " EU/t"},
		"textGen": {font: {color: android.graphics.Color.WHITE, shadow: 0.6, size: 18}, type: "text", x: 420, y: 280, width: 300, height: 39, text: "Generating:"},
		"light": {type: "image", x: 425, y: 135, bitmap: "soff", scale: 2.1}
	}
});


ICore.Machine.registerPrototype(BlockID.ulthbrsolar, {
	getEnergyStorage: function(){
		return ULTHBR.energy_storage;
	},
	
	getGuiScreen: function(){
		return guiUlthbrsolar;
	},
	
	tick: function(){
		var energyStorage = this.getEnergyStorage();
		this.data.energy -= ChargeItemRegistry.addEnergyTo(this.container.getSlot("slot1"), this.data.energy, ULTHBR.output, 0);
		
		this.container.setScale("energyScale", this.data.energy / energyStorage);
		this.container.setText("textInfo1", parseInt(this.data.energy) + "/" + energyStorage);
	},
	
	isGenerator: function() {
		return true;
	},
	
	energyTick: function(type, src){
		var content = this.container.getGuiContent();
			if(World.getLightLevel(this.x, this.y+1, this.z) == 15){
				this.data.energy = Math.min(this.data.energy + ULTHBR.gen_day, this.getEnergyStorage());
				this.container.setText("textGen", "Generating: " + ULTHBR.gen_day + " EU/t"); 
				if(content){ 
				content.elements["light"].bitmap = "son";}
	
			else{
				this.data.energy = Math.min(this.data.energy + ULTHBR.gen_night, this.getEnergyStorage());
				this.container.setText("textGen", "Generating: " + ULTHBR.gen_night + " EU/t");
				if(content){
				content.elements["light"].bitmap = "mon";}
			}
      }
		else{
			this.container.setText("textGen", "Generating: 0 EU/t");
			if(content){
			content.elements["light"].bitmap = "soff";}
}
		var output = Math.min(ULTHBR.output, this.data.energy);
		this.data.energy += src.add(output) - output;
	}
});





// file: machine/generator/quantgenerator.js

IDRegistry.genBlockID("quantgenerator");
Block.createBlock("quantgenerator", [
	{name: "Quantum Generator", texture: [["qgtop", 0], ["qg", 0], ["qgtop", 0], ["qgtop", 0], ["qgtop", 0], ["qgtop", 0]], inCreative: true}
], "opaque");

Block.registerDropFunction("quantgenerator", function(coords, blockID, blockData, level){
	return MachineRegistry.getMachineDrop(coords, blockID, level, BlockID.machineBlockBasic);
});

Callback.addCallback("PreLoaded", function(){
	Recipes.addShaped({id: BlockID.quantgenerator, count: 1, data: 0}, [
		"aba",
		"x#x",
		"aba"
	], ['#', ItemID.quantumcore, -1, 'x', BlockID.ulthbrsolar, 0, 'a', ItemID.enrichedsunnariumalloy, -1, 'b', ItemID.irradiantreinforceplate, 0]);
});


var guiQuantgenerator = new UI.StandartWindow({
	standart: {
		header: {text: {text: "quantgenerator"}},
		inventory: {standart: true},
		background: {standart: true}
	},
	
	params: {       
		slot: "default_slot",
		invSlot: "default_slot"              
	},
	
	drawing: [
		{type: "background", color: android.graphics.Color.rgb(53, 53, 53)},
		{type: "bitmap", x: 360, y: 40, bitmap: "qg", scale: 2.1},
	],
	
	elements: {
		"slotEnergy": {type: "slot", x: 600, y: 117, isValid: function(id){return ChargeItemRegistry.isValidItem(id, "Eu", 500);}},
		"sun": {type: "image", x: 665, y: 83, bitmap: "sl", scale: 2}
	}
});

MachineRegistry.registerPrototype(BlockID.quantgenerator, {
	isGenerator: function() {
		return true;
	},
	
	getGuiScreen: function(){
		return guiQuantgenerator;
	},
	
	tick: function(){
		var content = this.container.getGuiContent();
		if(World.getBlockID(this.x, this.y + 1, this.z) != BlockID.luminator){
			this.data.energy = 1;
			this.data.energy -= ChargeItemRegistry.addEnergyTo(this.container.getSlot("slotEnergy"), "Eu", 64, 32, 0);
			if(content){ 
				content.elements["sun"].bitmap = "lon";
			}
		}
		else if(content){ 
			content.elements["sun"].bitmap = "sl";
		}
	},
	
	getEnergyStorage: function(){
		return 1000;
	},
	
	energyTick: function(type, src){
		if(this.data.energy){
			src.add(8000);
			this.data.energy = 1;
		}
else src.add(1000);
	}
});




// file: machine/MPM.js

IDRegistry.genBlockID("MPM");
Block.createBlockWithRotation("MPM", [
	{name: "MPM", texture: [["MPM", 0], ["MPM", 0], ["MPM", 0], ["MPMTOP", 0], ["MPM", 0], ["MPM", 0]], inCreative: true}
], "opaque");
MachineRenderer.setStandartModel(BlockID.MPM, [["MPM", 0], ["MPM", 0], ["MPM", 0], ["MPMTOP", 0], ["MPM", 0], ["MPM", 0]], true);
MachineRenderer.registerModelWithRotation(BlockID.MPM, [["MPM", 0], ["MPM", 0], ["MPM", 0], ["MPMTOP", 0], ["MPM", 0], ["MPM", 0]]);

Block.registerDropFunction("MPM", function(coords, blockID, blockData, level){
	return [];
});

Item.registerNameOverrideFunction(BlockID.MPM, function(item, name){
	item = Player.getCarriedItem();
	if(item.extra){
		var energyStored = item.extra.getInt("Eu");
		return name + "\n§7" + energyStored + "/" + 90000000 + " Eu";
	}
	return name;
});

Callback.addCallback("PreLoaded", function(){
	Recipes.addShaped({id: BlockID.MPM, count: 1, data: 0}, [
		"aca",
		"axa",
		"aba"
	], ['b', BlockID.storageMFSU, -1, 'a', ItemID.storageLapotronCrystal, -1, 'x', BlockID.machineBlockAdvanced, 0, 'c', ItemID.ulthbrcore, 0]);
});


var guiMPM = new UI.StandartWindow({
	standart: {
		header: {text: {text: "MPM"}},
		inventory: {standart: true},
		background: {standart: true}
	},
	
	drawing: [
		{type: "bitmap", x: 530, y: 144, bitmap: "energy_bar_background", scale: GUI_SCALE},
	],
	
	elements: {
		"energyScale": {type: "scale", x: 530 + GUI_SCALE * 4, y: 144, direction: 0, value: 0.5, bitmap: "energy_bar_scale", scale: GUI_SCALE},
		"slot1": {type: "slot", x: 441, y: 75, isValid: MachineRegistry.isValidEUItem},
		"slot2": {type: "slot", x: 441, y: 212, isValid: MachineRegistry.isValidEUStorage},
		"textInfo1": {type: "text", x: 642, y: 142, width: 350, height: 30, text: "0/"},
		"textInfo2": {type: "text", x: 642, y: 172, width: 350, height: 30, text: "40000000"}
	}
});




MachineRegistry.registerPrototype(BlockID.MPM, {
	defaultValues: {
		power_tier: 3
	},
	
	isStorage: true,
	
	getGuiScreen: function(){
		return guiMPM;
	},
	
	tick: function(){
		var energyStorage = this.getEnergyStorage();
		this.container.setScale("energyScale", this.data.energy / energyStorage);
		this.container.setText("textInfo1", parseInt(this.data.energy) + "/");
		this.container.setText("textInfo2", energyStorage + "");
		
		var TRANSFER = transferByTier[4];
		this.data.energy += ChargeItemRegistry.getEnergyFrom(this.container.getSlot("slot2"), "Eu", energyStorage - this.data.energy, TRANSFER, 4);
		this.data.energy -= ChargeItemRegistry.addEnergyTo(this.container.getSlot("slot1"), "Eu", this.data.energy, TRANSFER, 4);
	},
	
	getEnergyStorage: function(){
		return 90000000;
	},
	
	energyTick: function(type, src){
		var TRANSFER = 8192;
		this.data.energy += src.storage(Math.min(TRANSFER*4, this.getEnergyStorage() - this.data.energy), Math.min(TRANSFER, this.data.energy));
	},
	
	destroyBlock: function(coords, player){
		var itemID = Player.getCarriedItem().id;
		var blockID = BlockID.storageMPM;
		var level = ToolAPI.getToolLevelViaBlock(itemID, blockID)
		var drop = MachineRegistry.getMachineDrop(coords, blockID, level, BlockID.machineBlockAdvanced);
		if(drop.length > 0){
			if(drop[0][0] == blockID && this.data.energy > 0){
				var extra = new ItemExtraData();
				extra.putInt("Eu", this.data.energy);
				nativeDropItem(coords.x, coords.y, coords.z, 0, blockID, 1, 0, extra);
			}
			else{
				World.drop(coords.x, coords.y, coords.z, drop[0][0], drop[0][1], drop[0][2]);
			}
		}
	}
});

Block.registerPlaceFunction("MPM", function(coords, item, block){
	Game.prevent();
	var x = coords.relative.x
	var y = coords.relative.y
	var z = coords.relative.z
	block = World.getBlockID(x, y, z)
	if(GenerationUtils.isTransparentBlock(block)){
		World.setBlock(x, y, z, item.id, 0);
		var tile = World.addTileEntity(x, y, z);
		if(item.extra){
			tile.data.energy = item.extra.getInt("Eu") + 16;
		}
	}
});




// file: machine/item/storage.js

IDRegistry.genItemID("advcore");
Item.createItem("advcore", "advcore", {name: "advcore", meta: 0}, {stack: 1});
ChargeItemRegistry.registerItem(ItemID.advcore, "Eu", 25000, 1, true);

IDRegistry.genItemID("hbrcore");
Item.createItem("hbrcore", "hbrcore", {name: "hbrcore", meta: 0}, {stack: 1});
ChargeItemRegistry.registerItem(ItemID.hbrcore, "Eu", 250000, 2, true);

IDRegistry.genItemID("ultcore");
Item.createItem("ultcore", "ultcore", {name: "ultcore", meta: 0}, {stack: 1});
ChargeItemRegistry.registerItem(ItemID.ultcore, "Eu", 25000000, 3, true);

IDRegistry.genItemID("ulthbrcore");
Item.createItem("ulthbrcore", "ulthbrcore", {name: "ulthbrcore", meta: 0}, {stack: 1});
ChargeItemRegistry.registerItem(ItemID.ulthbrcore, "Eu", 250000000, 3, true);


Item.registerNameOverrideFunction(ItemID.advcore, ENERGY_ITEM_NAME);
Item.registerNameOverrideFunction(ItemID.hbrcore, ENERGY_ITEM_NAME);
Item.registerNameOverrideFunction(ItemID.ultcore, ENERGY_ITEM_NAME);
Item.registerNameOverrideFunction(ItemID.ulthbrcore, ENERGY_ITEM_NAME);


Callback.addCallback("PreLoaded", function(){
	Recipes.addShaped({id: ItemID.advcore, count: 1, data: Item.getMaxDamage(ItemID.advcore)}, [
		"c#c",
		"cxc",
		"c#c"
	], ['x', ItemID.storageBattery, -1, '#', ItemID.circuitBasic, 0, 'c', 265, 0]);

	Recipes.addShaped({id: ItemID.hbrcore, count: 1, data: Item.getMaxDamage(ItemID.hbrcore)}, [
		"bcb",
		"bab",
		"bcb"
	], ['a', ItemID.advcore, -1, 'c', ItemID.circuitBasic, 0, 'b', 265, 0]);

	Recipes.addShaped({id: ItemID.ultcore, count: 1, data: Item.getMaxDamage(ItemID.ultcore)}, [
		"x#x",
		"xax",
		"x#x"
	], ['a', ItemID.hbrcore, -1, '#', ItemID.circuitAdvanced, 0, 'x', ItemID.ingotSteel, 0]);

Recipes.addShaped({id: ItemID.ulthbrcore, count: 1, data: Item.getMaxDamage(ItemID.ulthbrcore)}, [
		"x#x",
		"xax",
		"x#x"
	], ['a', ItemID.ultcore, -1, '#', ItemID.circuitAdvanced, 0, 'x', ItemID.plateBronze, 0], ChargeItemRegistry.transportEnergy);
});




// file: machine/item/voidrecipe.js

Callback.addCallback("PreLoaded", function(){
MachineRecipeRegistry.registerRecipesFor("vajraMacerator", {
"BlockID.oreTin": {storage: [ItemID.disoreed, 1], result: [ItemID.dustTin, 8, 0]},
"BlockID.oreCopper": {storage: [ItemID.disoreed, 1], result: [ItemID.dustCopper, 8, 0]},
"BlockID.oreLead": {storage: [ItemID.disoreed, 1], result: [ItemID.dustLead, 8, 0]},
"15": {storage: [ItemID.disoreed, 1], result: [ItemID.dustIron, 8, 0]},
"14": {storage: [ItemID.disoreed, 1], result: [ItemID.dustGold, 8, 0]},
"ItemID.voidshard": {storage: [ItemID.rediant, 1], result: [ItemID.voidingot, 2, 0]},
"ItemID.voidingot": {storage: [ItemID.disoreed, 1], result: [ItemID.voiddust, 4, 0]},
"BlockID.oreTin": {storage: [ItemID.rediant, 1], result: [ItemID.ingotTin, 4, 0]},
"BlockID.oreCopper": {storage: [ItemID.rediant, 1], result: [ItemID.ingotCopper, 4, 0]},
"BlockID.oreLead": {storage: [ItemID.rediant, 1], result: [ItemID.ingotLead, 4, 0]},
"15": {storage: [ItemID.rediant, 1], result: [265, 4, 0]},
"14": {storage: [ItemID.rediant, 1], result: [266, 4, 0]},
"ItemID.iridiumChunk": {storage: [ItemID.rediant, 1], result: [ItemID.iridiumingot, 2, 0]},
"ItemID.uranium": {storage: [ItemID.rediant, 1], result: [ItemID.uraniumingot, 2, 0]},
}, true);

MachineRecipeRegistry.registerRecipesFor("malecularTransformer", {
"ItemID.disoreed": {id: ItemID.molecule, count: 1, data: 0},
"ItemID.rediant": {id: ItemID.molecule, count: 1, data: 0},
"ItemID.refirus": {id: ItemID.molecule, count: 1, data: 0},
"ItemID.voidingot": {id: ItemID.molecule, count: 2, data: 0},
"ItemID.voidshard": {id: ItemID.molecule, count: 3, data: 0},
"ItemID.voidstick": {id: ItemID.molecule, count: 1, data: 0},
"ItemID.eyse": {id: ItemID.molecule, count: 1, data: 0},
"ItemID.voidplate": {id: ItemID.molecule, count: 2, data: 0},
"ItemID.voiddust": {id: ItemID.molecule, count: 1, data: 0},
}, true);

Recipes.addFurnace(ItemID.voidshard, ItemID.voidingot, 0);
});




// file: machine/item/voiditem.js

IDRegistry.genItemID("voidcristall");
Item.createItem("voidcristall", "voidcristall", {name: "voidcristall", meta: 0}, {stack: 1});
ChargeItemRegistry.registerItem(ItemID.voidcristall, "Eu", 250000, 3, true);

IDRegistry.genItemID("voidcristallarmoured");
Item.createItem("voidcristallarmoured", "voidcristallarmoured", {name: "voidcristallarmoured", meta: 0}, {stack: 1});
ChargeItemRegistry.registerItem(ItemID.voidcristallarmoured, "Eu", 10000000, 3, true);

Item.registerNameOverrideFunction(ItemID.voidcristall, ENERGY_ITEM_NAME);
Item.registerNameOverrideFunction(ItemID.voidcristallarmoured, ENERGY_ITEM_NAME);

Callback.addCallback("PreLoaded", function(){
	Recipes.addShaped({id: ItemID.voidcristall, count: 1, data: Item.getMaxDamage(ItemID.voidcristall)}, [
		"c#c",
		"cxc",
		"csc"
	], ['x', ItemID.hbrcore, -1, '#', ItemID.uranium, 0, 'c', ItemID.diamondPlate, 0, 's', ItemID.matter, 0]);
});

Callback.addCallback("PreLoaded", function(){
	Recipes.addShaped({id: ItemID.voidcristallarmoured, count: 1, data: Item.getMaxDamage(ItemID.voidcristall)}, [
		"c#c",
		"cxc",
		"csc"
	], ['x', ItemID.voidcristall, -1, '#', ItemID.ultcore, 0, 'c', ItemID.uranium, 0, 's', ItemID.voidingot, 0]);
});




// file: machine/item/voidsaber.js

IDRegistry.genItemID("voidsaber");
Item.createItem("voidsaber", "Void Saber", {name: "voidsaber", meta: 0}, {stack: 1});
ChargeItemRegistry.registerItem(ItemID.voidsaber, "Eu", 1000000, 2);
Item.setToolRender(ItemID.voidsaber, true);

Item.registerNameOverrideFunction(ItemID.voidsaber, ENERGY_ITEM_NAME);

var VOID_SABER_DURABILITY = Item.getMaxDamage(ItemID.voidsaber);

Recipes.addShaped({id: ItemID.voidsaber, count: 1, data: VOID_SABER_DURABILITY}, [
	"c c",
	"c c",
	"bxb"
], ['x', ItemID.ultcore, -1, 'c', ItemID.voidplate, 0, 'b', ItemID.voidcristall, -1], ChargeItemRegistry.transportEnergy);

ToolAPI.registerSword(ItemID.voidsaber, {level: 0, durability: VOID_SABER_DURABILITY, damage: 4}, {
	damage: 0,
	onBroke: function(item){
		item.data = Math.min(item.data, VOID_SABER_DURABILITY);
		return true;
	},
	onAttack: function(item, mob){
		this.damage = item.data < VOID_SABER_DURABILITY ? 16 : 0;
		return false;
	}
});

Callback.addCallback("tick", function(){
	if(World.getThreadTime() % 20 == 0){
		var item = Player.getCarriedItem()
		if(item.id == ItemID.voidsaber){
			item.data = Math.min(item.data+1280, VOID_SABER_DURABILITY);
			Player.setCarriedItem(item.id, 1, item.data);
		}
	}
});




// file: machine/shardore.js

IDRegistry.genBlockID("shardore");
Block.createBlock("shardore", [
	{name: "Shard Ore", texture: [["shardore", 0]], inCreative: true}
], "opaque");
ToolAPI.registerBlockMaterial(BlockID.shardore, "stone", 3, true);
Block.setDestroyTime(BlockID.shardore, 3);
Block.registerDropFunction(BlockID.shardore, function(coords, blockID, blockData, level, enchant){
	if(level > 3){
		return [[ItemID.voidshard, 3, 0]];
	}
	return [];
}, 3);

Callback.addCallback("GenerateChunk", function(chunkX, chunkZ){
	for(var i = 0; i < 10; i++){
		var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 3, 50);
		GenerationUtils.generateOre(coords.x, coords.y, coords.z, BlockID.shardore, 0, 8);
	}
});




// file: machine/item/voidshard.js

IDRegistry.genItemID("voidshard");
Item.createItem("voidshard", "voidshard", {name: "voidshard", meta: 0}, {stack: 64});

IDRegistry.genItemID("molecule");
Item.createItem("molecule", "molecule", {name: "molecule", meta: 0}, {stack: 128});


IDRegistry.genItemID("voidplate");
Item.createItem("voidplate", "voidplate", {name: "voidplate", meta: 0}, {stack: 64});

IDRegistry.genItemID("voidingot");
Item.createItem("voidingot", "voidingot", {name: "voidingot", meta: 0}, {stack: 64});

IDRegistry.genItemID("voiddust");
Item.createItem("voiddust", "voiddust", {name: "voiddust", meta: 0}, {stack: 64});

IDRegistry.genItemID("voidstick");
Item.createItem("voidstick", "voidstick", {name: "voidstick", meta: 0}, {stack: 64});

IDRegistry.genItemID("eyse");
Item.createItem("eyse", "eyse", {name: "eyse", data: 0});

Callback.addCallback("PreLoaded", function(){
	Recipes.addShaped({id: ItemID.voidstick, count: 1, data: 0}, [
		"  a",
		" a ",
		"a  "
	], ['a', BlockID.voidplank, -1]);
});

IDRegistry.genItemID("heatConductor"); 
Item.createItem("heatConductor", "heatConductor", {name: "heatConductor", meta: 0}, {stack:64});

IDRegistry.genItemID("advancedHeatConductor"); Item.createItem("advancedHeatConductor", "advancedHeatConductor", {name: "advancedHeatConductor", meta: 0}, {stack:64});

IDRegistry.genItemID("tripleCopperPlate"); 
Item.createItem("tripleCopperPlate", "tripleCopperPlate", {name: "tripleCopperPlate", meta: 0}, {stack:64});

IDRegistry.genItemID("engineBooster"); 
Item.createItem("engineBooster", "engineBooster", {name: "engineBooster", meta: 0}, {stack:64});

IDRegistry.genItemID("superConductorCover"); 
Item.createItem("superConductorCover", "superConductorCover", {name: "superConductorCover", meta: 0}, {stack:64});

IDRegistry.genItemID("superConductor"); 
Item.createItem("superConductor", "superConductor", {name: "superConductor", meta: 0}, {stack:64});

IDRegistry.genItemID("coolingCore"); 
Item.createItem("coolingCore", "coolingCore", {name: "coolingCore", meta: 0}, {stack:64});

IDRegistry.genItemID("gravitationEngine"); 
Item.createItem("gravitationEngine", "gravitationEngine", {name: "gravitationEngine", meta: 0}, {stack:64});

IDRegistry.genItemID("magnetron"); 
Item.createItem("magnetron", "magnetron", {name: "magnetron", meta: 0}, {stack:64});

IDRegistry.genItemID("vajraCore"); 
Item.createItem("vajraCore", "vajraCore", {name: "vajraCore", meta: 0}, {stack:1});

IDRegistry.genItemID("diamondPlate"); 
Item.createItem("diamondPlate", "diamondPlate", {name: "diamondPlate", meta: 0}, {stack:64});

Callback.addCallback("PreLoaded", function(){
	Recipes.addShaped({id: ItemID.engineBooster, count: 1, data: 0}, [
		"axa",
		"bdb",
		"xwx"
	], ['a', 348, 0, 'x', ItemID.plateAlloy, 0, 'b', ItemID.circuitAdvanced, 0, 'd', ItemID.upgradeOverclocker, 0, 'w', ItemID.diamondPlate, 0]);
});

Callback.addCallback("PreLoaded", function(){
	Recipes.addShaped({id: ItemID.superConductorCover, count: 3, data: 0}, [
		"axa",
		"bbb",
		"axa"
	], ['a', 348, 0, 'x', ItemID.plateReinforcedIridium, 0, 'b', ItemID.carbonPlate, 0]);
});

Callback.addCallback("PreLoaded", function(){
	Recipes.addShaped({id: ItemID.superConductor, count: 3, data: 0}, [
		"aaa",
		"bxb",
		"aaa"
	], ['x', 266, 0, 'a', ItemID.superConductorCover, 0, 'b', ItemID.cableOptic, 0]);
});

Callback.addCallback("PreLoaded", function(){
	Recipes.addShaped({id: ItemID.coolingCore, count: 1, data: 0}, [
		"axa",
		"bdb",
		"axa"
	], ['a', ItemID.coolantCell, -1, 'x', ItemID.advancedHeatConductor, 0, 'b', ItemID.tripleCopperPlate, 0, 'd', ItemID.plateReinforcedIridium, 0]);
});

Callback.addCallback("PreLoaded", function(){
	Recipes.addShaped({id: ItemID.heatConductor, count: 1, data: 0}, [
		"axa",
		"bab",
		"aba"
	], ['x', ItemID.circuitBasic, 0, 'b', ItemID.plateTin, 0, 'a', ItemID.plateCopper, 0]);
});

Callback.addCallback("PreLoaded", function(){
	Recipes.addShaped({id: ItemID.advancedHeatConductor, count: 1, data: 0}, [
		"axa",
		"bdb",
		"axa"
	], ['a', ItemID.plateLapis, 0, 'b', ItemID.heatConductor, 0, 'd', ItemID.circuitBasic, 0, 'x', ItemID.plateCopper, 0]);
});

Callback.addCallback("PreLoaded", function(){
	Recipes.addShaped({id: ItemID.tripleCopperPlate, count: 1, data: 0}, [
		"x b",
		" b ",
		"b  "
	], ['x', ItemID.craftingHammer, -1, 'b', ItemID.plateCopper, 0]);
});

Callback.addCallback("PreLoaded", function(){
	Recipes.addShaped({id: ItemID.magnetron, count: 1, data: 0}, [
		"axa",
		"xbx",
		"axa"
	], ['x', ItemID.plateCopper, 0, 'b', ItemID.superConductor, 0, 'a', ItemID.plateIron, 0]);
});

Callback.addCallback("PreLoaded", function(){
	Recipes.addShaped({id: ItemID.vajraCore, count: 1, data: 0}, [
		" a ",
		"bdb",
		"xwx"
	], ['a', ItemID.magnetron, 0, 'x', ItemID.superConductor, 0, 'b', ItemID.plateReinforcedIridium, 0, 'd', ItemID.storageCrystal, -1, 'w', BlockID.storageMFE, -1]);
});

Callback.addCallback("PreLoaded", function(){
	Recipes.addShaped({id: ItemID.gravitationEngine, count: 1, data: 0}, [
		"axa",
		"bdb",
		"xwx"
	], ['a', ItemID.superConductor, 0, 'x', ItemID.plateAlloy, 0, 'b', ItemID.circuitAdvanced, 0, 'd', BlockID.storageMFE, 0, 'w', ItemID.diamondPlate, 0]);
});

Callback.addCallback("PreLoaded", function(){
	Recipes.addShaped({id: ItemID.advancedNanoChestplate, count: 1, data: 0}, [
		"axa",
		"aba",
		"xwx"
	], ['w', ItemID.advancedElectricJetpack, -1, 'b', ItemID.nanoChestplate, -1, 'a', ItemID.carbonPlate, 0, 'x', ItemID.circuitAdvanced, 0]);
});

Callback.addCallback("PreLoaded", function(){
	Recipes.addShaped({id: ItemID.graviChestplate, count: 1, data: 0}, [
		"axa",
		"bdb",
		"awa"
	], ['a', ItemID.superConductor, 0, 'x', ItemID.quantumChestplate, -1, 'b', ItemID.gravitationEngine, 0, 'd', BlockID.storageMFE, -1, 'w', ItemID.energypack, -1]);
});

Callback.addCallback("PreLoaded", function(){
	Recipes.addShaped({id: ItemID.advancedElectricJetpack, count: 1, data: 0}, [
		"axa",
		"bdb",
		"mwm"
	], ['a', ItemID.carbonPlate, 0, 'x', ItemID.jetpack, -1, 'b', ItemID.engineBooster, 0, 'd', ItemID.energypack, -1, 'w', ItemID.circuitAdvanced, 0, 'm', ItemID.cableOptic, 0]);
});

Callback.addCallback("PreLoaded", function(){
	Recipes.addShaped({id: ItemID.diamondPlate, count: 1, data: 0}, [
		"x  ",
		" b ",
		"   "
	], ['x', ItemID.craftingHammer, -1, 'b', 264, 0]);
});

Callback.addCallback("PreLoaded", function(){
	Recipes.addShaped({id: ItemID.voidplate, count: 1, data: 0}, [
		"x  ",
		" b ",
		"   "
	], ['x', ItemID.craftingHammer, -1, 'b', ItemID.voidingot, 0]);
});






// file: machine/item/souleater.js

IDRegistry.genItemID("souleateroff");
Item.createItem("souleateroff", "souleateroff", {name: "souleateroff"}, {stack: 1});

Callback.addCallback("PostLoaded", function(){
  Recipes.addShaped({id: ItemID.souleateroff, count: 1, data: 0}, ["apa","aga","dfh"], ['a', ItemID.voidplate, 0, 'p', ItemID.voidshard, 0, 'g', ItemID.hbrcore, -1, 'd', ItemID.voidingot, 0, 'f', ItemID.voidcristall, -1, 'h', 20, 0]);
  });


var setEater = function(arg){
  IDRegistry.genItemID("soulEater"+ arg.id);
Item.createItem("soulEater"+ arg.id, "soulEater"+ arg.id, {name: "soulEaterOn"}, {stack: 1, isTech: true});

  Callback.addCallback("PlayerAttack",function(player,victim){
    item=Player.getCarriedItem(true);
    if(item.id==ItemID.souleateroff&&Entity.getType(victim)==arg.mob.id){
     Entity.remove(victim);
      Player.setCarriedItem(ItemID["soulEater"+arg.id],1,0);}});
  Callback.addCallback("ItemUse",function(coords){
    item=Player.getCarriedItem(true);
    if(item.id==ItemID["soulEater"+arg.id]){
    Entity.spawn(coords.x+0.5, coords.y+1, coords.z+0.5, arg.mob.id) 
      Player.setCarriedItem(ItemID.souleateroff,1,0);}});
}
setEater({id: "Chicken", mob: {id: 10}}); 
setEater({id: "Cow", mob: {id: 11}}); 
setEater({id: "Pig", mob: {id: 12}}); 
setEater({id: "Sheep", mob: {id: 13}}); 
setEater({id: "Wolf", mob: {id: 14}}); 
setEater({id: "Villager", mob: {id: 15}});
setEater({id: "Moooshrom", mob: {id: 16}});
setEater({id: "Squid", mob: {id: 17}});
setEater({id: "Rabbit", mob: {id: 18}});
setEater({id: "Bat", mob: {id: 19}});
setEater({id: "Golem", mob: {id: 20}});
setEater({id: "Snowman", mob: {id: 21}});
setEater({id: "Ocelot", mob: {id: 22}});
setEater({id: "Zombie", mob: {id: 32}});
setEater({id: "Creeper", mob: {id: 33}});
setEater({id: "Skeleton", mob: {id: 34}});
setEater({id: "Spider", mob: {id: 35}});
setEater({id: "Pigman", mob: {id: 36}});
setEater({id: "Slime", mob: {id: 37}});
setEater({id: "Enderman", mob: {id: 38}});
setEater({id: "Silverfish", mob: {id: 39}});
setEater({id: "CaveSpider", mob: {id: 40}});
setEater({id: "Ghast", mob: {id: 41}});
setEater({id: "Magmacube", mob: {id: 42}});
setEater({id: "Blaze", mob: {id: 43}});
setEater({id: "Zombie-villager", mob: {id: 44}});








// file: machine/voidblocks.js

var BLOCKVOID = Block.createSpecialType({
base: 1,
lightlevel: 6,
lightopacity: 5 });
IDRegistry.genBlockID("voidblock");
Block.createBlockWithRotation("voidblock", [
	{name: "voidblock", texture: [["voidblock", 0], ["voidblock", 0], ["voidblock", 0], ["voidblock", 0], ["voidblock", 0], ["voidblock", 0]], inCreative: true}
], "BLOCKVOID");

Block.registerDropFunction("voidblock", function(coords, id, data, diggingLevel, toolLevel){
return [id, 1, data];
});

Callback.addCallback("PreLoaded", function(){
	Recipes.addShaped({id: BlockID.voidblock, count: 1, data: 0}, [
		"aaa",
		"aaa",
		"aaa"
	], ['a', ItemID.voidshard, 0]);
});

Callback.addCallback("PreLoaded", function(){
	Recipes.addShaped({id: ItemID.voidshard, count: 9, data: 0}, [
		"   ",
		" a ",
		"   "
	], ['a', BlockID.voidblock, 0]);
});

var GLASS = Block.createSpecialType({
base: 20,
lightopacity: 0,
renderlayer: 4,
lightopacity: 5 });
IDRegistry.genBlockID("voidglass");
Block.createBlockWithRotation("voidglass", [
	{name: "voidglass", texture: [["voidglass", 0], ["voidglass", 0], ["voidglass", 0], ["voidglass", 0], ["voidglass", 0], ["voidglass", 0]], inCreative: true}
], "GLASS");

Block.registerDropFunction("voidglass", function(coords, id, data, diggingLevel, toolLevel){
return [id, 1, data];
});;

Callback.addCallback("PreLoaded", function(){
	Recipes.addShaped({id: BlockID.voidglass, count: 8, data: 0}, [
		"aaa",
		"axa",
		"aaa"
	], ['a', 20, 0, 'x', ItemID.voidshard, 0]);
});


IDRegistry.genBlockID("voidplank");
Block.createBlock("voidplank", [
	{name: "Void Plank", texture: [["voidplank", 0], ["voidplank", 0], ["voidplank", 0], ["voidplank", 0], ["voidplank", 0], ["voidplank", 0]], inCreative: true}
], "opaque");
Block.registerDropFunction("voidplank", function(coords, id, data, diggingLevel, toolLevel){
return [id, 1, data];
});
Block.setDestroyTime(BlockID.voidplank, 0.3);
ToolAPI.registerBlockMaterial(BlockID.voidblock, "stone");
ToolAPI.registerBlockMaterial(BlockID.voidplank, "wood");
ToolAPI.registerBlockMaterial(BlockID.voidglass, "stone");
ToolAPI.registerBlockMaterial(BlockID.luckyVoid, "stone");





// file: machine/voidtree.js

function destroyLeaves(x, y, z){
	var max = 0;
	while(World.getBlockID(x, y+max+1, z)==BlockID.voidleaf){max++;}
	for(var yy = y; yy <= y+max; yy++){
		for(var xx = x-2; xx <= x+2; xx++){
			for(var zz = z-2; zz <= z+2; zz++){
				if(World.getBlockID(xx, yy, zz)==BlockID.voidleaf){
					if(Math.random() < .075){
						World.drop(xx, yy, zz, ItemID.voidtree, 1, 0);
					}
					World.setBlock(xx, yy, zz, 0);
				}
			}
		}
	}
}

IDRegistry.genBlockID("voidlog");
Block.createBlock("voidlog", [
	{name: "Void Log", texture: [["voidlog", 1], ["voidlog", 1], ["voidlog", 0], ["voidlog", 0], ["voidlog", 0], ["voidlog", 0]], inCreative: true}
], "opaque");
Block.registerDropFunction("voidlog", function(coords, blockID){
	destroyLeaves(coords.x, coords.y, coords.z);
	return [[blockID, 1, 0]];
});
Block.setDestroyTime(BlockID.voidlog, 0.4);
ToolAPI.registerBlockMaterial(BlockID.voidlog, "wood");

IDRegistry.genBlockID("voidlogeyse");
Block.createBlock("voidlogeyse", [
	{name: "tile.voidlogeyse.name", texture: [["voidlog", 1], ["voidlog", 1], ["voidlog", 0], ["voidlog", 0], ["voidlog", 0], ["voidlog", 0]], inCreative: false},
	{name: "tile.voidlogeyse.name", texture: [["voidlog", 1], ["voidlog", 1], ["voidlog", 2], ["voidlog", 0], ["voidlog", 0], ["voidlog", 0]], inCreative: false},
	{name: "tile.voidlogeyse.name", texture: [["voidlog", 1], ["voidlog", 1], ["voidlog", 0], ["voidlog", 2], ["voidlog", 0], ["voidlog", 0]], inCreative: false},
	{name: "tile.voidlogeyse.name", texture: [["voidlog", 1], ["voidlog", 1], ["voidlog", 0], ["voidlog", 0], ["voidlog", 2], ["voidlog", 0]], inCreative: false},
	{name: "tile.voidlogeyse.name", texture: [["voidlog", 1], ["voidlog", 1], ["voidlog", 0], ["voidlog", 0], ["voidlog", 0], ["voidlog", 2]], inCreative: false}
], "opaque");
Block.registerDropFunction("voidlogeyse", function(coords, blockID){
	destroyLeaves(coords.x, coords.y, coords.z);
	return [[BlockID.voidlog, 1, 0], [ItemID.eyse, 1, 0]];
});
Block.setDestroyTime(BlockID.voidlogeyse, 0.4);
ToolAPI.registerBlockMaterial(BlockID.voidlogeyse, "wood");
Block.setRandomTickCallback(BlockID.voidlogeyse, function(x, y, z, id, data){
	if(data==0 && Math.random() < 0.1){
		World.setBlock(x, y, z, id, parseInt(Math.random()*4 + 1));
	}
});


IDRegistry.genBlockID("voidleaf");
Block.createBlock("voidleaf", [
	{name: "Void Leaves", texture: [["voidleaf", 0]], inCreative: false}
]);
Block.registerDropFunction("voidleaf", function(){
	if(Math.random() < .05){
		return [[ItemID.voidtree, 1, 0]]
	}
	else {
		return [];
	}
});
Block.setDestroyTime(BlockID.voidleaf, 0.2);
ToolAPI.registerBlockMaterial(BlockID.voidleaf, "plant");

Recipes.addShaped({id: BlockID.voidplank, count: 4, data: 0}, ["x"], ['x', BlockID.voidlog, -1]);



var VoidTreeGenerationHelper = {
	/*
	 params: {
		 leaves: {
			 id: 
			 data: 
		 },
		 log: {
			 id: 
			 data:
			 resin: 
		 },
		 height: {
			 min:
			 max:
			 start: 
		 },
		 pike:
		 radius: 
	 }
	*/
	generateCustomTree: function(x, y, z, params){
		var leaves = params.leaves;
		var log = params.log;
		
		var height = parseInt(Math.random() * (0.5 + params.height.max - params.height.min) + params.height.min);
		var k = 0.25;
		for(var ys = 0; ys < height; ys++){
			if(log.resin && Math.random() < k){
				World.setBlock(x, y + ys, z, log.resin, parseInt(Math.random()*4 + 1));
				k -= 0.1;
			}
			else{
				World.setFullBlock(x, y + ys, z, log);
			}
		}
		if(params.pike){
			for(var ys = 0; ys < params.pike; ys++){
				World.setFullBlock(x, y + ys + height, z, leaves);
			}
		}
		
		var leavesStart = params.height.start;
		var leavesEnd = height;
		var leavesMiddle = (leavesEnd + leavesStart) / 2;
		var leavesLen = leavesEnd - leavesStart;
		for(var ys = leavesStart; ys < leavesEnd; ys++){
			for(var xs = -params.radius; xs <= params.radius; xs++){
				for(var zs = -params.radius; zs <= params.radius; zs++){
					var d = Math.sqrt(xs*xs + zs*zs) + (Math.random()*0.5 + 0.5) * Math.pow(Math.abs(leavesMiddle - ys) / leavesLen, 1.5) * 1.2;
					var blockID = World.getBlockID(x + xs, y + ys, z + zs);
					if(d <= params.radius + 0.5 && (blockID==0 || blockID==106)){
						World.setFullBlock(x + xs, y + ys, z + zs, leaves);
					}
				}
			}
		}
	},

	generateVoidTree: function(x, y, z){
		VoidTreeGenerationHelper.generateCustomTree(x, y, z, {
			log: {
				id: BlockID.voidlog,
				data: 0,
				resin: BlockID.voidlogeyse
			},
			leaves: {
				id: BlockID.voidleaf,
				data: 0
			},
			height: {
				min: 4,
				max: 8,
				start: 2 + parseInt(Math.random() * 2)
			},
			pike: 2 + parseInt(Math.random() * 1.5),
			radius: 2
		});
	}
}


var ForestBiomeIDs = [4, 18, 27, 28];
var JungleBiomeIDs = [21, 22, 23, 149, 151];
var SwampBiomeIDs = [6, 134];

var VOID_TREE_BIOME_DATA = { };
if(__config__.access("void_tree_gen.forest_and_plains")){
	VOID_TREE_BIOME_DATA[1] = 0.005;
	for(var id in ForestBiomeIDs){
	VOID_TREE_BIOME_DATA[ForestBiomeIDs[id]] = 0.025;}
}
if(__config__.access("void_tree_gen.jungle")){
	for(var id in JungleBiomeIDs){
	VOID_TREE_BIOME_DATA[JungleBiomeIDs[id]] = 0.06;}
}
if(__config__.access("void_tree_gen.swamp")){
	for(var id in SwampBiomeIDs){
	VOID_TREE_BIOME_DATA[SwampBiomeIDs[id]] = 0.05;}
}

Callback.addCallback("GenerateChunk", function(chunkX, chunkZ){
	if(Math.random() < VOID_TREE_BIOME_DATA[World.getBiome((chunkX + 0.5) * 16, (chunkZ + 0.5) * 16)]){
		for(var i = 0; i < 1 + Math.random() * 6; i++){
			var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 64, 128);
			coords = GenerationUtils.findSurface(coords.x, coords.y, coords.z);
			if(World.getBlockID(coords.x, coords.y, coords.z) == 2){
				coords.y++;
				VoidTreeGenerationHelper.generateVoidTree(coords.x, coords.y, coords.z);
			}
		}
	}
});




// file: machine/item/tool.js

IDRegistry.genItemID("voidSword");
IDRegistry.genItemID("voidShovel");
IDRegistry.genItemID("voidPickaxe");
IDRegistry.genItemID("voidAxe");
Item.createItem("voidSword", "Void Sword", {name: "voidsword", meta: 0}, {stack: 1});
Item.createItem("voidShovel", "Void Shovel", {name: "voidshovel", meta: 0}, {stack: 1});
Item.createItem("voidPickaxe", "Void Pickaxe", {name: "voidpickaxe", meta: 0}, {stack: 1});
Item.createItem("voidAxe", "Void Axe", {name: "voidaxe", meta: 0}, {stack: 1});

ToolAPI.addToolMaterial("void", {durability: 700, level: 5, efficiency: 10, damage: 12, enchantability: 50});
ToolAPI.setTool(ItemID.voidSword, "void", ToolType.sword);
ToolAPI.setTool(ItemID.voidShovel, "void", ToolType.shovel);
ToolAPI.setTool(ItemID.voidPickaxe, "void", ToolType.pickaxe);
ToolAPI.setTool(ItemID.voidAxe, "void", ToolType.axe);

Recipes.addShaped({id: ItemID.voidSword, count: 1, data: 0}, [
	"a",
	"s",
	"b"
], ['b', ItemID.voidstick, 0, 'a', ItemID.voidingot, 0, 's', ItemID.eyse, 0]);

Recipes.addShaped({id: ItemID.voidShovel, count: 1, data: 0}, [
	"a",
	"s",
	"b"
], ['a', ItemID.voidstick, 0, 'b', ItemID.voidingot, 0, 's', ItemID.eyse, 0]);

Recipes.addShaped({id: ItemID.voidPickaxe, count: 1, data: 0}, [
	"asa",
	" b ",
	" b "
], ['b', ItemID.voidstick, 0, 'a', ItemID.voidingot, 0, 's', ItemID.eyse, 0]);

Recipes.addShaped({id: ItemID.voidAxe, count: 1, data: 0}, [
	"sa",
	"ab",
	" b"
], ['b', ItemID.voidstick, 0, 'a', ItemID.voidingot, 0, 's', ItemID.eyse, 0]);




// file: machine/voidsapling.js

var VOID_SAPLING_GROUND_TILES = {
	2: true,
	3: true,
	60: true
};

IDRegistry.genItemID("voidtree");
Item.createItem("voidtree", "voidtree", {name: "voidtree", data: 0});

Item.registerUseFunction("voidtree", function(coords, item, tile){
	var place = coords.relative;
	var tile1 = World.getBlock(place.x, place.y, place.z);
	var tile2 = World.getBlock(place.x, place.y - 1, place.z);
	
	if (GenerationUtils.isTransparentBlock(tile1.id) && VOID_SAPLING_GROUND_TILES[tile2.id]){
		World.setBlock(place.x, place.y, place.z, BlockID.voidtree);
		World.addTileEntity(place.x, place.y, place.z);
		Player.setCarriedItem(item.id, item.count - 1, item.data);
	}
});

IDRegistry.genBlockID("voidtree");
Block.createBlock("voidtree", [
	{name: "voidtree", texture: [["empty", 0], ["empty", 0], ["empty", 0], ["empty", 0], ["empty", 0], ["empty", 0]], inCreative: false}
]);

Block.setBlockShape(BlockID.voidtree, {x: 0.001, y: 0.001, z: 0.001}, {x: 0.999, y: 0.1, z: 0.999});
Block.registerDropFunction("voidtree", function(){
	return [[ItemID.voidtree, 1, 0]];
});

TileEntity.registerPrototype(BlockID.voidtree, {
	defaultValues: {
		size: 0,
		growth: 0,
		lastGrowth: 0
	},
	
	created: function(){
		this.data.size = .85 + Math.random() * .25;
	},
	
	initAnimation: function(){
		this.animation1 = new Animation.Item(this.x + .5, this.y + this.data.size / 2 - .02, this.z + .5);
		this.animation2 = new Animation.Item(this.x + .5, this.y + this.data.size / 2 - .02, this.z + .5);
		this.animation1.describeItem({
			id: ItemID.voidtree,
			count: 1,
			data: 0,
			rotation: "x",
			size: this.data.size
		});
		this.animation1.load();
		
		this.animation2.describeItem({
			id: ItemID.voidtree,
			count: 1,
			data: 0,
			rotation: "z",
			size: this.data.size
		});
		this.animation2.load();
	},
	
	destroyAnimation: function(){
		if (this.animation1){
			this.animation1.destroy();
		}
		if (this.animation2){
			this.animation2.destroy();
		}
	},
	
	updateAnimation: function(){
		this.destroyAnimation();
		this.initAnimation();
	},
	
	init: function(){
		this.initAnimation();
	},
	
	destroy: function(){
		this.destroyAnimation();
	},
	
	tick: function(){
		if (World.getThreadTime() % 20 == 0){
			this.data.growth += Math.random() * 2;
			this.checkGrowth();
			if (!VOID_SAPLING_GROUND_TILES[World.getBlockID(this.x, this.y - 1, this.z)]){
				World.destroyBlock(this.x, this.y, this.z, true);
				this.selfDestroy();
			}
		}
	},
	
	click: function(id, count, data){
		if (id == 351 && data == 15){
			this.data.growth += 256 + Math.random() * 128;
			this.checkGrowth();
			Player.setCarriedItem(id, count - 1, data);
		}
	},
	
	checkGrowth: function(){
		if (this.data.growth - 56 > this.data.lastGrowth){
			this.data.size += (this.data.growth - this.data.lastGrowth) / 480;
			this.data.lastGrowth = this.data.growth;
			this.updateAnimation();
		}
		if (this.data.growth > 512){
			this.selfDestroy();
			VoidTreeGenerationHelper.generateVoidTree(this.x, this.y, this.z, true);
		}
	}
});




// file: machine/item/minisaber.js

IDRegistry.genItemID("minisaber");
Item.createItem("minisaber", "minisaber", {name: "minisaber", data: 0}, {stack: 1});
Item.setMaxDamage(ItemID.minisaber, 7);

Item.registerUseFunction("minisaber", function(coords, item, block){
	if(block.id == BlockID.voidlogeyse && block.data == coords.side - 1){
		World.setBlock(coords.x, coords.y, coords.z, BlockID.voidlogeyse, 0);
		Player.setCarriedItem(item.id, ++item.data < 7 ? item.count : 0, item.data);
		Entity.setVelocity(
			World.drop(
				coords.relative.x + 0.5,
				coords.relative.y + 0.5,
				coords.relative.z + 0.5,
				ItemID.eyse, 1 + parseInt(Math.random() * 1), 0
			),
			(coords.relative.x - coords.x) * 0.25,
			(coords.relative.y - coords.y) * 0.25,
			(coords.relative.z - coords.z) * 0.25
		);
	}
});

Recipes.addShaped({id: ItemID.minisaber, count: 1, data: 0}, [
	" a ",
	" a ",
	" x "
], ['x', ItemID.voidstick, 0, 'a', ItemID.voidshard, 0]);




// file: machine/item/1.js

IDRegistry.genItemID("advChainsaw");
Item.createItem("advChainsaw", "advChainsaw", {name: "advChainsaw", meta: 0}, {stack: 1});
ChargeItemRegistry.registerItem(ItemID.advChainsaw, "Eu", 50000, 0);

Item.registerNameOverrideFunction(ItemID.advChainsaw, ENERGY_ITEM_NAME);

Recipes.addShaped({id: ItemID.advChainsaw, count: 1, data: Item.getMaxDamage(ItemID.advChainsaw)}, [
	"aap",
	"agx",
	"pxc"
], ['a', ItemID.iridiumChunk, 0, 'p', ItemID.voidingot, 0, 'g', ItemID.chainsaw, -1, 'x', ItemID.circuitAdvanced, 0, 'c', ItemID.hbrcore, -1]);

ToolAPI.addBlockMaterial("wool", 1.5);
ToolAPI.registerBlockMaterial(35, "wool");

ToolType.chainsaw = {
	isWeapon: true,
	damage: 6,
	baseDamage: 0,
	blockTypes: ["wood", "wool", "fibre", "plant"],
	onDestroy: function(item){
        item.data = Math.min(item.data + this.toolMaterial.energyConsumption - 1, Item.getMaxDamage(item.id));
    },
    onBroke: function(item){return true;},
	onAttack: function(item, mob){
		var material = this.toolMaterial;
		if(!this.baseDamage) this.baseDamage = material.damage;
		if(item.data + material.energyConsumption <= Item.getMaxDamage(item.id)){
			item.data += material.energyConsumption - 1;
			material.damage = this.baseDamage;
		}
		else{
			material.damage = 0;
		}
	},
	calcDestroyTime: function(item, coords, block, params, destroyTime, enchant){
        if(item.data + this.toolMaterial.energyConsumption <= Item.getMaxDamage(item.id)){
            return destroyTime;
        }
        else{
            return params.base;
        }
    }
}

ToolAPI.setTool(ItemID.advChainsaw, {energyConsumption: 50, level: 4, efficiency: 21, damage: 7},  ToolType.chainsaw);




// file: machine/item/2.js

IDRegistry.genItemID("advDrill");
Item.createItem("advDrill", "advDrill", {name: "advDrill"}, {stack: 1});
Item.setGlint(ItemID.advDrill, true);
ChargeItemRegistry.registerItem(ItemID.advDrill, "Eu", 2000000, 2);

Item.registerNameOverrideFunction(ItemID.advDrill, function(item, name){
	var energyStorage = Item.getMaxDamage(item.id) - 1;
	var energyStored = Math.min(energyStorage - item.data + 1, energyStorage);
	if(energyStored==0){return name;}
	name = "§b" + name + "\n§7" + energyStored + "/" + energyStorage + " Eu";
	
	var mode = 0;
	var extra = item.extra;
	if(extra){
	mode = extra.getInt("mode");}
	switch(mode){
		case 0:
			name += "\nFortune III mode";
		break;
		case 1:
			name += "\nSilk Touch mode";
		break;
		case 2:
			name += "\n3x3 Fortune III mode";
		break;
		case 3:
			name += "\n3x3 Silk Touch mode";
		break;
	}
	
	return name;
});

Recipes.addShaped({id: ItemID.advDrill, count: 1, data: Item.getMaxDamage(ItemID.advDrill)}, [
    "aap",
    "agx",
    "pxc"
], ['a', ItemID.iridiumChunk, 0, 'p', ItemID.voidingot, 0, 'g', ItemID.diamondDrill, -1, 'x', ItemID.circuitAdvanced, 0, 'c', ItemID.hbrcore, -1], ChargeItemRegistry.transportEnergy);


ToolType.drill = {
    damage: 0,
    blockTypes: ["stone", "dirt", "ore"],
    onDestroy: function(item){
        item.data = Math.min(item.data + this.toolMaterial.energyConsumption - 1, Item.getMaxDamage(item.id));
    },
    onBroke: function(item){return true;},
    onAttack: function(item, mob){
        item.data = Math.min(item.data + this.toolMaterial.energyConsumption - 2, Item.getMaxDamage(item.id));
    },
    calcDestroyTime: function(item, coords, block, params, destroyTime, enchant){
        if(item.data + this.toolMaterial.energyConsumption <= Item.getMaxDamage(item.id)){
            return destroyTime;
        }
        else{
            return params.base;
        }
    },
    useItem: function(coords, item, block){
    	var side = coords.side;
    	coords = coords.relative;
    	block = World.getBlockID(coords.x, coords.y, coords.z);
    	if(block==0){
	    	for(var i = 0; i < 36; i++){
				var slot = Player.getInventorySlot(i);
				if(slot.id==50){
					slot.count--;
					if(!slot.count) slot.id = 0;
					Player.setInventorySlot(i, slot.id, slot.count, 0);
					World.setBlock(coords.x, coords.y, coords.z, 50, (6 - side)%6);
					break;
				}
			}
	    }
   }
}
var extraData;
var dirtBlocksDrop = {13:318, 60:3, 110:3, 198:3, 243:3};
ToolAPI.setTool(ItemID.advDrill, {energyConsumption: 800, level: 5, efficiency: 30, damage: 8}, {
	damage: 0,
	blockTypes: ["stone", "dirt", "ore"],

	modifyEnchant: function(enchant, item){
		var mode = 0;
		var extra = item.extra || extraData;
		if(extra){
		mode = extra.getInt("mode");}
		
		if(mode%2){
		enchant.silk = 1;}
		else{
		enchant.fortune = 3;}
	},
	onDestroy: function(item){
		item.data = Math.min(item.data + this.toolMaterial.energyConsumption - 1, Item.getMaxDamage(item.id));
	},
	onBroke: function(item){return true;},
	onAttack: function(item, mob){
		item.data = Math.min(item.data + this.toolMaterial.energyConsumption - 2, Item.getMaxDamage(item.id));
	},
	calcDestroyTime: function(item, coords, block, params, destroyTime){
		if(item.data + 800 <= Item.getMaxDamage(item.id)){
			var mode = 0;
			var extra = item.extra;
			extraData = extra;
			if(extra){
			mode = extra.getInt("mode");}
			var material = ToolAPI.getBlockMaterial(block.id) || {};
			material = material.name;
			if(mode > 1 && (material == "dirt" || material == "stone")){
				destroyTime = 0;
				var side = coords.side;
				var X = 1;
				var Y = 1;
				var Z = 1;
				if(side==BlockSide.EAST || side==BlockSide.WEST){
				X = 0;}
				if(side==BlockSide.UP || side==BlockSide.DOWN){
				Y = 0;}
				if(side==BlockSide.NORTH || side==BlockSide.SOUTH){
				Z = 0;}
				for(var xx = coords.x - X; xx <= coords.x + X; xx++){
					for(var yy = coords.y - Y; yy <= coords.y + Y; yy++){
						for(var zz = coords.z - Z; zz <= coords.z + Z; zz++){
							var blockID = World.getBlockID(xx, yy, zz);
							var material = ToolAPI.getBlockMaterial(blockID) || {};
							if(material.name == "dirt" || material.name == "stone"){
								destroyTime += Block.getDestroyTime(blockID) / material.multiplier * 1.5;
							}
						}
					}
				}
				destroyTime /= 24;
			}
			return destroyTime;
		}
		else{
			return params.base;
		}
	},
	destroyBlock: function(coords, side, item, block){
		var mode = 0;
		var extra = extraData;
		if(extra){
		mode = extra.getInt("mode");}
		if(item.data + 800 <= Item.getMaxDamage(item.id)){
			if(mode < 2){
				item.data += 800;
			}
			else{
				var X = 1;
				var Y = 1;
				var Z = 1;
				if(side==BlockSide.EAST || side==BlockSide.WEST){
				X = 0;}
				if(side==BlockSide.UP || side==BlockSide.DOWN){
				Y = 0;}
				if(side==BlockSide.NORTH || side==BlockSide.SOUTH){
				Z = 0;}
				for(var xx = coords.x - X; xx <= coords.x + X; xx++){
					for(var yy = coords.y - Y; yy <= coords.y + Y; yy++){
						for(var zz = coords.z - Z; zz <= coords.z + Z; zz++){
							blockID = World.getBlockID(xx, yy, zz);
							var material = ToolAPI.getBlockMaterial(blockID) || {};
							if(material.name == "dirt" || material.name == "stone"){
								item.data += 800;
								if(mode == 3 || material == "stone"){
									World.destroyBlock(xx, yy, zz, true);
								}else{
									drop = dirtBlocksDrop[blockID];
									if(drop){
										World.destroyBlock(xx, yy, zz, false);
										World.drop(xx+0.5, yy+0.5, zz+0.5, drop, 1);
									}
									else{World.destroyBlock(xx, yy, zz, true);}
								}
							}
							if(item.data + 800 >= Item.getMaxDamage(item.id)){
								Player.setCarriedItem(item.id, 1, item.data, extra);
								return;
							}
						}
					}
				}
			}
		}
		Player.setCarriedItem(item.id, 1, item.data, extra);
	},
	useItem: function(coords, item, block){
		if(Entity.getSneaking(player)){
			var extra = item.extra;
			if(!extra){
				extra = new ItemExtraData();
			}
			var mode = (extra.getInt("mode")+1)%4;
			extra.putInt("mode", mode);
			switch(mode){
			case 0:
				//var enchant = {type: Enchantment.FORTUNE, level: 3};
				Game.message("§eFortune III mode");
			break;
			case 1:
				//var enchant = {type: Enchantment.SILK_TOUCH, level: 1};
				Game.message("§9Silk Touch mode");
			break;
			case 2:
				//var enchant = {type: Enchantment.FORTUNE, level: 3};
				Game.message("§c3x3 Fortune III mode");
			break;
			case 3:
				//var enchant = {type: Enchantment.SILK_TOUCH, level: 1};
				Game.message("§23x3 Silk Touch mode");
			break;
			}
			//extra.removeAllEnchants();
			//extra.addEnchant(enchant.type, enchant.level);
			Player.setCarriedItem(item.id, 1, item.data, extra);
		}
		else{
			var side  = coords.side;
			coords = coords.relative;
			block = World.getBlockID(coords.x, coords.y, coords.z);
			if(block==0){
				for(var i = 0; i < 36; i++){
					var slot = Player.getInventorySlot(i);
					if(slot.id==50){
						slot.count--;
						if(!slot.count) slot.id = 0;
						Player.setInventorySlot(i, slot.id, slot.count, 0);
						World.setBlock(coords.x, coords.y, coords.z, 50, (6 - side)%6);
						break;
					}
				}
			}
		}
	}
});




// file: machine/item/3.js

IDRegistry.genItemID("advHoe");
IDRegistry.genItemID("advTreetap");
Item.createItem("advHoe", "advHoe", {name: "advHoe", meta: 0}, {stack: 1});
Item.createItem("advTreetap", "advTreetap", {name: "advTreetap", meta: 0}, {stack: 1});
ChargeItemRegistry.registerItem(ItemID.advHoe, "Eu", 20000, 0);
ChargeItemRegistry.registerItem(ItemID.advTreetap, "Eu", 20000, 0);
Item.setToolRender(ItemID.advHoe, true);

Item.registerNameOverrideFunction(ItemID.advHoe, ENERGY_ITEM_NAME);
Item.registerNameOverrideFunction(ItemID.advTreetap, ENERGY_ITEM_NAME);

Recipes.addShaped({id: ItemID.advHoe, count: 1, data: Item.getMaxDamage(ItemID.advHoe)}, [
	"a p",
	" gx",
	"pxc"
], ['a', ItemID.iridiumChunk, 0, 'p', ItemID.voidingot, 0, 'g', ItemID.electricHoe, -1, 'x', ItemID.circuitAdvanced, 0, 'c', ItemID.hbrcore, -1]);

Recipes.addShaped({id: ItemID.advTreetap, count: 1, data: Item.getMaxDamage(ItemID.advTreetap)}, [
	"a p",
	" gx",
	"pxc"
], ['a', ItemID.iridiumChunk, 0, 'p', ItemID.voidingot, 0, 'g', ItemID.electricTreetap, -1, 'x', ItemID.circuitAdvanced, 0, 'c', ItemID.hbrcore, -1]);


Item.registerUseFunction("advHoe", function(coords, item, block){
	if(item.data + 50 <= Item.getMaxDamage(ItemID.advHoe) && (block.id==2 || block.id==3 || block.id==110 || block.id==243) && coords.side==1){ 
		World.setBlock(coords.x, coords.y, coords.z, 60);
		World.playSoundAtEntity(Player.get(), "step.grass", 0.5, 0.75);
		Player.setCarriedItem(item.id, 1, item.data + 50);
	}
});
Item.registerUseFunction("advTreetap", function(coords, item, block){
	if(item.data + 50 <= Item.getMaxDamage(ItemID.advTreetap) && block.id == BlockID.rubberTreeLogLatex && block.data == coords.side - 1){
		World.setBlock(coords.x, coords.y, coords.z, BlockID.rubberTreeLogLatex, 0);
		Player.setCarriedItem(item.id, 1, item.data + 50);
		Entity.setVelocity(
			World.drop(
				coords.relative.x + 0.5,
				coords.relative.y + 0.5,
				coords.relative.z + 0.5,
				ItemID.latex, 1 + parseInt(Math.random() * 5), 0
			),
			(coords.relative.x - coords.x) * 0.25,
			(coords.relative.y - coords.y) * 0.25,
			(coords.relative.z - coords.z) * 0.25
		);
	}
});




// file: machine/item/4.js

IDRegistry.genItemID("advWrench");
Item.createItem("advWrench", "advWrench", {name: "advWrench", meta: 0}, {stack: 1});
ChargeItemRegistry.registerItem(ItemID.advWrench, "Eu", 20000, 0);

Item.registerNameOverrideFunction(ItemID.advWrench, ENERGY_ITEM_NAME);

Recipes.addShaped({id: ItemID.advWrench, count: 1, data: Item.getMaxDamage(ItemID.advWrench)}, [
	"a p",
	" gx",
	"pxc"
], ['a', ItemID.iridiumChunk, 0, 'p', ItemID.voidingot, 0, 'g', ItemID.electricWrench, -1, 'x', ItemID.circuitAdvanced, 0, 'c', ItemID.hbrcore, -1]);



Callback.addCallback("DestroyBlockStart", function(coords, block){
	if(MachineRegistry.machineIDs[block.id]){
		var item = Player.getCarriedItem();
		if(item.id==ItemID.wrenchBronze || item.id==ItemID.advWrench && item.data + 500 <= Item.getMaxDamage(item.id)){
			Block.setTempDestroyTime(block.id, 0);
		}
	}
});




// file: machine/item/graviChestplate.js

IDRegistry.genItemID("graviChestplate");
Item.createArmorItem("graviChestplate", "graviChestplate", {name: "graviChestplate"}, {type: "chestplate", armor: 12, durability: 10000, texture: "armor/graviChestplate.png", isTech: false});

ChargeItemRegistry.registerItem(ItemID.graviChestplate, "Eu", 60000000, 3);

Item.registerNameOverrideFunction(ItemID.graviChestplate, RARE_ENERGY_ITEM_NAME);

IDRegistry.genItemID("graviChestplateUncharged");

Item.createArmorItem("graviChestplateUncharged", "graviChestplate", {name: "graviChestplate"}, {type: "chestplate", armor: 12, durability: 10000, texture: "armor/graviChestplate.png", isTech: true});

ChargeItemRegistry.registerItem(ItemID.graviChestplateUncharged, 60000000, 3, true);

Item.registerNameOverrideFunction(ItemID.graviChestplateUncharged, RARE_ENERGY_ITEM_NAME);

MachineRecipeRegistry.registerRecipesFor("quantum-armor-charge", {
    "ItemID.graviChestplate": {charged: ItemID.graviChestplate, uncharged: ItemID.graviChestplateUncharged},
    "ItemID.graviChestplateUncharged": {charged: ItemID.graviChestplate, uncharged: ItemID.graviChestplateUncharged},
}, true);

UIbuttons.setButton(ItemID.graviChestplate, "button_fly");
UIbuttons.setButton(ItemID.graviChestplate, "button_hover");

var runTime = 0;

var GRAVI_ARMOR_FUNCS = {
	hurt: function(params, item, index, maxDamage){
		var type = params.type;
		if(type==2 || type==3 || type==11){
			var energy = params.damage * 900;
			item.data = Math.min(item.data + energy, maxDamage);
		}
		if(type==5 && (index==1 || index==3)){
			var damage = 0;
			var vel = Player.getVelocity().y;
			var time = vel / -0.06;
			var height = 0.06 * time*time / 2;
			if(height < 22){
				if(height < 17){
					var damage = Math.floor(height) - 3;
				}else{
					var damage = Math.ceil(height)- 3;
				}
			}
			if(index==1){
				if(damage <= 0 && height < 22){
					Game.prevent();
				}
				else if(params.damage > damage){
					Entity.setHealth(player, Entity.getHealth(player) + params.damage - damage);
				}
			}
			if(index==3 && item.data + 900 <= maxDamage && (damage > 0 || height >= 22)){
				params.damage = damage;
				damage = Math.min(params.damage, Math.floor((maxDamage - item.data)/900));
				if(params.damage > damage){
					Entity.setHealth(player, Entity.getHealth(player) + damage);
				}
				else{
					Game.prevent();
				}
				item.data = item.data + damage*900;
			}
		}
		if(type==9 && index==0 && item.data + 1000 <= maxDamage){
			Game.prevent();
			Entity.addEffect(player, MobEffect.waterBreathing, 1, 2);
			item.data = item.data + 1000;
		}
		Player.setArmorSlot(index, item.id, 1, item.data, item.extra);
		return false;
	},
	
	tick: function(slot, index, maxDamage){
		var armor = MachineRecipeRegistry.getRecipeResult("quantum-armor-charge", slot.id);
		if(slot.data >= maxDamage){
			slot.id = armor.uncharged;
			return true;
		}
		else{
			switch (index){
			case 0:
				Entity.clearEffect(player, MobEffect.poison);
				Entity.clearEffect(player, MobEffect.wither);
				
				var hunger = Player.getHunger();
				if(hunger < 20){
					var index = World.getThreadTime%36+9;
					var slot = Player.getInventorySlot(index);
					if(slot.id == ItemID.tinCanFull){
						var count = Math.min(20 - hunger, slot.count);
						Player.setHunger(hunger + count);
						slot.count -= count;
						Player.setInventorySlot(index, slot.count ? slot.id : 0, slot.count, slot.data);
						Player.addItemToInventory(ItemID.tinCanEmpty, count, 0);
						break;
					}
				}
				
				var extra = slot.extra;
				if(extra){
					var nightvision = extra.getBoolean("nv");
				}
				if(nightvision){
					var coords = Player.getPosition();
					var time = World.getWorldTime()%24000;
					if(World.getLightLevel(coords.x, coords.y, coords.z)==15 && time >= 0 && time <= 12000){
						Entity.addEffect(player, MobEffect.blindness, 1, 25);
					}
					Entity.addEffect(player, MobEffect.nightVision, 1, 225);
					if(World.getThreadTime()%20==0){
						slot.data = Math.min(slot.data+20, maxDamage);
						return true;
					}
				}
			break;
			case 1:
				var extra = slot.extra;
				if(extra){
					var hover = extra.getBoolean("hover");
				}
				if(hover && slot.data < maxDamage){
					var vel = Player.getVelocity();
					if(vel.y < -0.1){
						Player.setVelocity(vel.x, -0.1, vel.z);
						if(World.getThreadTime() % 5 == 0){
							slot.data = Math.min(slot.data+20, maxDamage);
							return true;
						}
					}
				}
				Entity.setFire(player, 0, true);
			break;
			case 2:
				var vel = Player.getVelocity();
				var horizontalVel = Math.sqrt(vel.x*vel.x + vel.z*vel.z)
				if(horizontalVel > 0.15){
					if(Math.abs(vel.y - fallVelocity) < 0.0001){runTime++;}
				}
				else{runTime = 0;}
				if(runTime > 2 && !Player.getFlying()){
					Entity.addEffect(player, MobEffect.movementSpeed, 6, 5);
					if(World.getThreadTime()%5==0){
						slot.data = Math.min(slot.data + Math.floor(horizontalVel*600), maxDamage);
						return true;
					}
				}
			break;
			}
			if(slot.id != armor.charged){
				slot.id = armor.charged;
				return true;
			}
		}
		return false;
	}
}; 



Armor.registerFuncs("graviChestplate", GRAVI_ARMOR_FUNCS); Armor.registerFuncs("graviChestplateUncharged", GRAVI_ARMOR_FUNCS);




// file: machine/item/advancedElectricJetpack.js

IDRegistry.genItemID("advancedElectricJetpack");
Item.createArmorItem("advancedElectricJetpack", "advancedElectricJetpack", {name: "advancedElectricJetpack"}, {type: "chestplate", armor: 5, durability: 3000000, texture: "armor/advancedElectricJetpack.png"});
ChargeItemRegistry.registerItem(ItemID.advancedElectricJetpack, "Eu", 3000000, 0);
Item.registerNameOverrideFunction(ItemID.advancedElectricJetpack, ENERGY_ITEM_NAME);

UIbuttons.setButton(ItemID.advancedElectricJetpack, "button_fly");
UIbuttons.setButton(ItemID.advancedElectricJetpack, "button_hover");

Armor.registerFuncs("advancedElectricJetpack", {
	hurt: function(params, item, index, maxDamage){
		if(params.type==5){
			var vel = Player.getVelocity().y;
			var time = vel / -0.06;
			var height = 0.06 * time*time / 2;
			if(height < 22){
				if(height < 17){
					var damage = Math.floor(height) - 3;
				}else{
					var damage = Math.ceil(height)- 3;
				}
			}
			//Game.message(height + ", "+damage+", "+params.damage)
			if(damage <= 0 && height < 22){
				Game.prevent();
			}
			else if(params.damage > damage){
				Entity.setHealth(player, Entity.getHealth(player) + params.damage - damage);
			}
		}
		return false;
	},
	tick: function(slot, index, maxDamage){
		var extra = slot.extra;
		if(extra){
			var hover = extra.getBoolean("hover");
		}
		if(hover && slot.data < maxDamage){
			var vel = Player.getVelocity();
			if(vel.y < -0.1){
				Player.setVelocity(vel.x, -0.1, vel.z);
				if(World.getThreadTime() % 5 == 0){
					Player.setArmorSlot(1, slot.id, 1, Math.min(slot.data+20, maxDamage), extra);
				}
			}
		}
		return false;
	},
});




// file: machine/item/advancedNanoChestplate.js

IDRegistry.genItemID("advancedNanoChestplate");
Item.createArmorItem("advancedNanoChestplate", "advancedNanoChestplate", {name: "advancedNanoChestplate"}, {type: "chestplate", armor: 7, durability: 5000, texture: "armor/advancedNanoChestplate.png", isTech: false});

ChargeItemRegistry.registerItem(ItemID.advancedNanoChestplate, "Eu", 3000000, 3);

Item.registerNameOverrideFunction(ItemID.advancedNanoChestplate, RARE_ENERGY_ITEM_NAME);

MachineRecipeRegistry.registerRecipesFor("advansedNanoChestplate", {
    "ItemID.advancedNanoChestplate": {charged: ItemID.advancedNanoChestplate, uncharged: ItemID.advancedNanoChestplateUncharged},
    "ItemID.advancedNanoChestplateUncharged": {charged: ItemID.advancedNanoChestplate, uncharged: ItemID.advancedNanoChestplateUncharged},
}, true);

IDRegistry.genItemID("advancedNanoChestplateUncharged");

Item.createArmorItem("advancedNanoChestplateUncharged", "advancedNanoChestplate", {name: "advancedNanoChestplate"}, {type: "chestplate", armor: 6, durability: 8333, texture: "armor/advancedNanoChestplate.png", isTech: true});

ChargeItemRegistry.registerItem(ItemID.advancedNanoChestplateUncharged, 3000000, 3, true);

Item.registerNameOverrideFunction(ItemID.advancedNanoChestplateUncharged, RARE_ENERGY_ITEM_NAME);

UIbuttons.setButton(ItemID.advancedNanoChestplate, "button_fly");
UIbuttons.setButton(ItemID.advancedNanoChestplate, "button_hover");

var runTime = 0;

var NANO_ARMOR_FUNCS = {
	hurt: function(params, item, index, maxDamage){
		var type = params.type;
		if(type==2 || type==3 || type==11){
			var energy = params.damage * 900;
			item.data = Math.min(item.data + energy, maxDamage);
		}
		if(type==5 && (index==1 || index==3)){
			var damage = 0;
			var vel = Player.getVelocity().y;
			var time = vel / -0.06;
			var height = 0.06 * time*time / 2;
			if(height < 22){
				if(height < 17){
					var damage = Math.floor(height) - 3;
				}else{
					var damage = Math.ceil(height)- 3;
				}
			}
			if(index==1){
				if(damage <= 0 && height < 22){
					Game.prevent();
				}
				else if(params.damage > damage){
					Entity.setHealth(player, Entity.getHealth(player) + params.damage - damage);
				}
			}
			if(index==3 && item.data + 900 <= maxDamage && (damage > 0 || height >= 22)){
				params.damage = damage;
				damage = Math.min(params.damage, Math.floor((maxDamage - item.data)/900));
				if(params.damage > damage){
					Entity.setHealth(player, Entity.getHealth(player) + damage);
				}
				else{
					Game.prevent();
				}
				item.data = item.data + damage*900;
			}
		}
		if(type==9 && index==0 && item.data + 1000 <= maxDamage){
			Game.prevent();
			Entity.addEffect(player, MobEffect.waterBreathing, 1, 2);
			item.data = item.data + 1000;
		}
		Player.setArmorSlot(index, item.id, 1, item.data, item.extra);
		return false;
	},
	
	tick: function(slot, index, maxDamage){
		var armor = MachineRecipeRegistry.getRecipeResult("advansedNanoChestplate", slot.id);
		if(slot.data >= maxDamage){
			slot.id = armor.uncharged;
			return true;
		}
		else{
			switch (index){
			case 0:
				Entity.clearEffect(player, MobEffect.poison);
				Entity.clearEffect(player, MobEffect.wither);
				
				var hunger = Player.getHunger();
				if(hunger < 20){
					var index = World.getThreadTime%36+9;
					var slot = Player.getInventorySlot(index);
					if(slot.id == ItemID.tinCanFull){
						var count = Math.min(20 - hunger, slot.count);
						Player.setHunger(hunger + count);
						slot.count -= count;
						Player.setInventorySlot(index, slot.count ? slot.id : 0, slot.count, slot.data);
						Player.addItemToInventory(ItemID.tinCanEmpty, count, 0);
						break;
					}
				}
				
				var extra = slot.extra;
				if(extra){
					var nightvision = extra.getBoolean("nv");
				}
				if(nightvision){
					var coords = Player.getPosition();
					var time = World.getWorldTime()%24000;
					if(World.getLightLevel(coords.x, coords.y, coords.z)==15 && time >= 0 && time <= 12000){
						Entity.addEffect(player, MobEffect.blindness, 1, 25);
					}
					Entity.addEffect(player, MobEffect.nightVision, 1, 225);
					if(World.getThreadTime()%20==0){
						slot.data = Math.min(slot.data+20, maxDamage);
						return true;
					}
				}
			break;
			case 1:
				var extra = slot.extra;
				if(extra){
					var hover = extra.getBoolean("hover");
				}
				if(hover && slot.data < maxDamage){
					var vel = Player.getVelocity();
					if(vel.y < -0.1){
						Player.setVelocity(vel.x, -0.1, vel.z);
						if(World.getThreadTime() % 5 == 0){
							slot.data = Math.min(slot.data+20, maxDamage);
							return true;
						}
					}
				}
				Entity.setFire(player, 0, true);
			break;
			case 2:
				var vel = Player.getVelocity();
				var horizontalVel = Math.sqrt(vel.x*vel.x + vel.z*vel.z)
				if(horizontalVel > 0.15){
					if(Math.abs(vel.y - fallVelocity) < 0.0001){runTime++;}
				}
				else{runTime = 0;}
				if(runTime > 2 && !Player.getFlying()){
					Entity.addEffect(player, MobEffect.movementSpeed, 6, 5);
					if(World.getThreadTime()%5==0){
						slot.data = Math.min(slot.data + Math.floor(horizontalVel*600), maxDamage);
						return true;
					}
				}
			break;
			}
			if(slot.id != armor.charged){
				slot.id = armor.charged;
				return true;
			}
		}
		return false;
	}
}; 

Armor.registerFuncs("advancedNanoChestplate", NANO_ARMOR_FUNCS); Armor.registerFuncs("advancedNanoChestplateUncharged", NANO_ARMOR_FUNCS);




// file: machine/item/Vajra.js

IDRegistry.genItemID("Vajra");
Item.createItem("Vajra", "Vajra", {name: "Vajra", meta: 0}, {stack: 1});
ChargeItemRegistry.registerItem(ItemID.Vajra, "Eu", 5000000, 0);

Item.registerNameOverrideFunction(ItemID.Vajra, ENERGY_ITEM_NAME);


ToolAPI.addBlockMaterial("wool", 1.5);
ToolAPI.registerBlockMaterial(35, "wool");

Item.registerNameOverrideFunction(ItemID.Vajra, function(item, name){
	var energyStorage = Item.getMaxDamage(item.id) - 1;
	var energyStored = Math.min(energyStorage - item.data + 1, energyStorage);
	if(energyStored==0){return name;}
	name = "§b" + name + "\n§7" + energyStored + "/" + energyStorage + " Eu";
	
	var mode = 0;
	var extra = item.extra;
	if(extra){
	mode = extra.getInt("mode");}
	switch(mode){
		case 0:
			name += "\nFortune III mode";
		break;
		case 1:
			name += "\nSilk Touch mode";
		break;
		case 2:
			name += "\n3x3 Fortune III mode";
		break;
		case 3:
			name += "\n3x3 Silk Touch mode";
		break;
	}
	
	return name;
});


ToolType.drill = {
isWeapon: true,
    damage: 15,
baseDamage: 0,
    blockTypes: ["stone", "dirt", "ore", "wood", "wool", "fibre", "plant"],
    onDestroy: function(item){
        item.data = Math.min(item.data + this.toolMaterial.energyConsumption - 1, Item.getMaxDamage(item.id));
    },
    onBroke: function(item){return true;},
    onAttack: function(item, mob){
        item.data = Math.min(item.data + this.toolMaterial.energyConsumption - 2, Item.getMaxDamage(item.id));
    },
    calcDestroyTime: function(item, coords, block, params, destroyTime, enchant){
        if(item.data + this.toolMaterial.energyConsumption <= Item.getMaxDamage(item.id)){
            return destroyTime;
        }
        else{
            return params.base;
        }
    },
useItem: function(coords, item, block){
    	var side = coords.side;
    	coords = coords.relative;
    	block = World.getBlockID(coords.x, coords.y, coords.z);
    	if(block==0){
	    	for(var i = 0; i < 36; i++){
				var slot = Player.getInventorySlot(i);
				if(slot.id==50){
					slot.count--;
					if(!slot.count) slot.id = 0;
					Player.setInventorySlot(i, slot.id, slot.count, 0);
					World.setBlock(coords.x, coords.y, coords.z, 50, (6 - side)%6);
					break;
				}
			}
	    }
   }
}
var extraData;
var dirtBlocksDrop = {13:318, 60:3, 110:3, 198:3, 243:3};
ToolAPI.setTool(ItemID.Vajra, {energyConsumption: 100, level: 5, efficiency: 100, damage: 15}, {
	damage: 0,
	blockTypes: ["stone", "dirt", "ore", "wood", "wool", "fibre", "plant"],

	modifyEnchant: function(enchant, item){
		var mode = 0;
		var extra = item.extra || extraData;
		if(extra){
		mode = extra.getInt("mode");}
		
		if(mode%2){
		enchant.silk = 1;}
		else{
		enchant.fortune = 3;}
	},
	onDestroy: function(item){
		item.data = Math.min(item.data + this.toolMaterial.energyConsumption - 1, Item.getMaxDamage(item.id));
	},
	onBroke: function(item){return true;},
	onAttack: function(item, mob){
		item.data = Math.min(item.data + this.toolMaterial.energyConsumption - 2, Item.getMaxDamage(item.id));
	},
	calcDestroyTime: function(item, coords, block, params, destroyTime){
		if(item.data + 800 <= Item.getMaxDamage(item.id)){
			var mode = 0;
			var extra = item.extra;
			extraData = extra;
			if(extra){
			mode = extra.getInt("mode");}
			var material = ToolAPI.getBlockMaterial(block.id) || {};
			material = material.name;
			if(mode > 1 && (material == "dirt" || material == "stone" || material == "wood")){
				destroyTime = 0;
				var side = coords.side;
				var X = 1;
				var Y = 1;
				var Z = 1;
				if(side==BlockSide.EAST || side==BlockSide.WEST){
				X = 0;}
				if(side==BlockSide.UP || side==BlockSide.DOWN){
				Y = 0;}
				if(side==BlockSide.NORTH || side==BlockSide.SOUTH){
				Z = 0;}
				for(var xx = coords.x - X; xx <= coords.x + X; xx++){
					for(var yy = coords.y - Y; yy <= coords.y + Y; yy++){
						for(var zz = coords.z - Z; zz <= coords.z + Z; zz++){
							var blockID = World.getBlockID(xx, yy, zz);
							var material = ToolAPI.getBlockMaterial(blockID) || {};
							if(material.name == "dirt" || material.name == "stone" || material == "wood"){
								destroyTime += Block.getDestroyTime(blockID) / material.multiplier * 1.5;
							}
						}
					}
				}
				destroyTime /= 10;
			}
			return destroyTime;
		}
		else{
			return params.base;
		}
	},
	destroyBlock: function(coords, side, item, block){
		var mode = 0;
		var extra = extraData;
		if(extra){
		mode = extra.getInt("mode");}
		if(item.data + 800 <= Item.getMaxDamage(item.id)){
			if(mode < 2){
				item.data += 800;
			}
			else{
				var X = 1;
				var Y = 1;
				var Z = 1;
				if(side==BlockSide.EAST || side==BlockSide.WEST){
				X = 0;}
				if(side==BlockSide.UP || side==BlockSide.DOWN){
				Y = 0;}
				if(side==BlockSide.NORTH || side==BlockSide.SOUTH){
				Z = 0;}
				for(var xx = coords.x - X; xx <= coords.x + X; xx++){
					for(var yy = coords.y - Y; yy <= coords.y + Y; yy++){
						for(var zz = coords.z - Z; zz <= coords.z + Z; zz++){
							blockID = World.getBlockID(xx, yy, zz);
							var material = ToolAPI.getBlockMaterial(blockID) || {};
							if(material.name == "dirt" || material.name == "stone" || material == "wood"){
								item.data += 800;
								if(mode == 3 || material == "stone"){
									World.destroyBlock(xx, yy, zz, true);
								}else{
									drop = dirtBlocksDrop[blockID];
									if(drop){
										World.destroyBlock(xx, yy, zz, false);
										World.drop(xx+0.5, yy+0.5, zz+0.5, drop, 1);
									}
									else{World.destroyBlock(xx, yy, zz, true);}
								}
							}
							if(item.data + 800 >= Item.getMaxDamage(item.id)){
								Player.setCarriedItem(item.id, 1, item.data, extra);
								return;
							}
						}
					}
				}
			}
		}
		Player.setCarriedItem(item.id, 1, item.data, extra);
	},
	useItem: function(coords, item, block){
		if(Entity.getSneaking(player)){
			var extra = item.extra;
			if(!extra){
				extra = new ItemExtraData();
			}
			var mode = (extra.getInt("mode")+1)%4;
			extra.putInt("mode", mode);
			switch(mode){
			case 0:
				//var enchant = {type: Enchantment.FORTUNE, level: 3};
				Game.message("§eFortune III mode");
			break;
			case 1:
				//var enchant = {type: Enchantment.SILK_TOUCH, level: 1};
				Game.message("§9Silk Touch mode");
			break;
			case 2:
				//var enchant = {type: Enchantment.FORTUNE, level: 3};
				Game.message("§c3x3 Fortune III mode");
			break;
			case 3:
				//var enchant = {type: Enchantment.SILK_TOUCH, level: 1};
				Game.message("§23x3 Silk Touch mode");
			break;
			}
			//extra.removeAllEnchants();
			//extra.addEnchant(enchant.type, enchant.level);
			Player.setCarriedItem(item.id, 1, item.data, extra);
		}
		else{
			var side  = coords.side;
			coords = coords.relative;
			block = World.getBlockID(coords.x, coords.y, coords.z);
			if(block==0){
				for(var i = 0; i < 36; i++){
					var slot = Player.getInventorySlot(i);
					if(slot.id==50){
						slot.count--;
						if(!slot.count) slot.id = 0;
						Player.setInventorySlot(i, slot.id, slot.count, 0);
						World.setBlock(coords.x, coords.y, coords.z, 50, (6 - side)%6);
						break;
					}
				}
			}
		}
	}
});


Callback.addCallback("PreLoaded", function(){
	Recipes.addShaped({id: ItemID.Vajra, count: 1, data: 0}, [
		"axa",
		"bdb",
		"mwm"
	], ['a', ItemID.plateIron, 0, 'x', ItemID.storageCrystal, -1, 'b', ItemID.carbonPlate, 0, 'd', ItemID.vajraCore, 0, 'w', ItemID.storageLapotronCrystal, -1, 'm', ItemID.plateAlloy, 0]);
});




// file: machine/vajraMacerator.js

IDRegistry.genBlockID("vajraMacerator");
Block.createBlockWithRotation("vajraMacerator", [
	{name: "vajraMacerator", texture: [["vajraMaceratorb", 0], ["vajraMaceratortop", 0], ["vajraMaceratorb", 0], ["vajraMacerators", 0], ["vajraMaceratorb", 0], ["vajraMaceratorb", 0]], inCreative: true}
], "opaque");
MachineRenderer.setStandartModel(BlockID.vajraMacerator, [["vajraMaceratorb", 0], ["vajraMaceratortop", 0], ["vajraMaceratorb", 0], ["vajraMacerators", 0], ["vajraMaceratorb", 0], ["vajraMaceratorb", 0]], true);
MachineRenderer.registerModelWithRotation(BlockID.vajraMacerator, [["vajraMaceratorb", 0], ["vajraMaceratortop", 0], ["vajraMaceratorb", 0], ["vajraMacerators", 0], ["vajraMaceratorb", 0], ["vajraMaceratorb", 0]]);

Block.registerDropFunction("vajraMacerator", function(coords, blockID, blockData, level){
	return MachineRegistry.getMachineDrop(coords, blockID, level, BlockID.machineMacerator);
});

Callback.addCallback("PreLoaded", function(){
	Recipes.addShaped({id: BlockID.vajraMacerator, count: 1, data: 0}, [
		"xax",
		"dgd",
"xfx"
	], ['x', BlockID.voidblock, 0, 'g', BlockID.macerator, 0, 'd', ItemID.voidcristall, -1, 'a', ItemID.Vajra, -1, 'f', BlockID.machineBlockAdvanced, 0]);
});


var guiVajra = new UI.StandartWindow({
	standart: {
		header: {text: {text: "vajraMacerator"}},
		inventory: {standart: true},
		background: {standart: true}
	},
	
	drawing: [
{type: "bitmap", x: 400, y: 50, bitmap: "1bg", scale: GUI_SCALE},
		{type: "scale", x: 407 + 33*GUI_SCALE, y: 51 + 58*GUI_SCALE, bitmap: "elbg", scale: GUI_SCALE}
	],
	
	elements: {
		"progressScale": {type: "scale", x: 300 + 99*GUI_SCALE, y: 15 + 33*GUI_SCALE, direction: 0, value: 1, bitmap: "lr", scale: GUI_SCALE},
		"energyScale": {type: "scale", x: 407 + 33*GUI_SCALE, y: 51 + 58*GUI_SCALE, direction: 1, value: 1, bitmap: "el", scale: GUI_SCALE},
        "slotSource": {type: "slot", x: 400 + 33*GUI_SCALE, y: 50 + 13*GUI_SCALE},
"slotS": {type: "slot", x: 400 + 99*GUI_SCALE, y: 50 + 13*GUI_SCALE},
        "slotEnergy": {type: "slot", x: 399 + 33*GUI_SCALE, y: 0 + 58*GUI_SCALE},
        "slotResult": {type: "slot", x: 611, y: 184},
	}
});

MachineRegistry.registerPrototype(BlockID.vajraMacerator, {
	defaultValues: {
		power_tier: 4,
		energy_storage: 2000,
		energy_consumption: 150,
		work_time: 300,
		progress: 0,
		isActive: false
	},
	
	getGuiScreen: function(){
		return guiVajra;
	},
	
	getTransportSlots: function(){
		return {input: ["slotSource", "slotS"], output: ["slotResult"]};
	},
	
	setDefaultValues: function(){
		this.data.energy_storage = this.defaultValues.energy_storage;
		this.data.energy_consumption = this.defaultValues.energy_consumption;
		this.data.work_time = this.defaultValues.work_time;
	},
	
	tick: function(){
		this.setDefaultValues();
		UpgradeAPI.executeUpgrades(this);
		
		var sourceSlot = this.container.getSlot("slotSource");
var sSlot = this.container.getSlot("slotS");
        var resultSlot = this.container.getSlot("slotResult");

        var recipe = MachineRecipeRegistry.getRecipeResult("vajraMacerator", sourceSlot.id);
		if(recipe && sSlot.id == recipe.storage[0] && sSlot.count >= recipe.storage[1] && (resultSlot.id == recipe.result[0] && resultSlot.data == recipe.result[2] && resultSlot.count <= 64 - recipe.result[1] || resultSlot.id == 0)){
			if(this.data.energy >= this.data.energy_consumption){
				this.data.energy -= this.data.energy_consumption;
				this.data.progress += 1//this.data.work_time;
				this.activate();
			}
			else{
				this.deactivate();
			}
			if(this.data.progress >= this.data.work_time){
				sourceSlot.count--;
				sSlot.count -= recipe.storage[1];
				resultSlot.id = recipe.result[0];
				resultSlot.data = recipe.result[2];
				resultSlot.count += recipe.result[1];
				this.container.validateAll();
				this.data.progress = 0;
			}
		}
		else {
			this.data.progress = 0;
			this.deactivate();
		}
        
        var energyStorage = this.getEnergyStorage();
		var tier = this.data.power_tier;
		this.data.energy = Math.min(this.data.energy, energyStorage);
		this.data.energy += ChargeItemRegistry.getEnergyFrom(this.container.getSlot("slotEnergy"), "Eu", energyStorage - this.data.energy, transferByTier[tier], tier);
		
        this.container.setScale("progressScale", this.data.progress / this.data.work_time);
        this.container.setScale("energyScale", this.data.energy / energyStorage);
    },
    
    getEnergyStorage: function(){
        return this.data.energy_storage;
    },
    
    init: MachineRegistry.initModel,
	activate: MachineRegistry.activateMachine,
	deactivate: MachineRegistry.deactivateMachine,
	destroy: this.deactivate,
    energyTick: MachineRegistry.basicEnergyReceiveFunc
});




// file: machine/1ore.js

IDRegistry.genBlockID("disoreedore");
Block.createBlock("disoreedore", [
	{name: "Disoreed Ore", texture: [["disoreedore", 0]], inCreative: true}
], "opaque");
ToolAPI.registerBlockMaterial(BlockID.disoreedore, "stone", 3, true);
Block.setDestroyTime(BlockID.disoreedore, 3);
Block.registerDropFunction(BlockID.disoreedore, function(coords, blockID, blockData, level, enchant){
	if(level > 2){
		return [[ItemID.disoreed, 4, 0]];
	}
	return [];
}, 2);

Callback.addCallback("GenerateChunk", function(chunkX, chunkZ){
	for(var i = 0; i < 10; i++){
		var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 3, 50);
		GenerationUtils.generateOre(coords.x, coords.y, coords.z, BlockID.disoreedore, 0, 8);
	}
});




// file: machine/2ore.js

IDRegistry.genBlockID("rediantore");
Block.createBlock("rediantore", [
	{name: "Rediant Ore", texture: [["rediantore", 0]], inCreative: true}
], "opaque");
ToolAPI.registerBlockMaterial(BlockID.rediantore, "stone", 3, true);
Block.setDestroyTime(BlockID.rediantore, 3);
Block.registerDropFunction(BlockID.rediantore, function(coords, blockID, blockData, level, enchant){
	if(level > 2){
		return [[ItemID.rediant, 5, 0]];
	}
	return [];
}, 3);

Callback.addCallback("GenerateChunk", function(chunkX, chunkZ){
	for(var i = 0; i < 10; i++){
		var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 3, 50);
		GenerationUtils.generateOre(coords.x, coords.y, coords.z, BlockID.rediantore, 0, 8);
	}
});




// file: machine/3ore.js

IDRegistry.genBlockID("refirusore");
Block.createBlock("refirusore", [
	{name: "Refirus Ore", texture: [["refirusore", 0]], inCreative: true}
], "opaque");
ToolAPI.registerBlockMaterial(BlockID.refirusore, "stone", 3, true);
Block.setDestroyTime(BlockID.refirusore, 3);
Block.registerDropFunction(BlockID.refirusore, function(coords, blockID, blockData, level, enchant){
	if(level > 2){
		return [[ItemID.refirus, 8, 0]];
	}
	return [];
}, 5);

Callback.addCallback("GenerateChunk", function(chunkX, chunkZ){
	for(var i = 0; i < 10; i++){
		var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 3, 50);
		GenerationUtils.generateOre(coords.x, coords.y, coords.z, BlockID.refirusore, 0, 8);
	}
});




// file: machine/item/oredrop.js

IDRegistry.genItemID("disoreed");
Item.createItem("disoreed", "disoreed", {name: "disoreed", meta: 0}, {stack: 128});

IDRegistry.genItemID("rediant");
Item.createItem("rediant", "rediant", {name: "rediant", meta: 0}, {stack: 64});

IDRegistry.genItemID("refirus");
Item.createItem("refirus", "refirus", {name: "refirus", meta: 0}, {stack: 64});




// file: machine/malecularTransformer.js

IDRegistry.genBlockID("malecularTransformer"); 
  Block.createBlock("malecularTransformer", [{name: "malecularTransformer", texture: [["malecularTransformer3", 0], ["malecularTransformer3", 0], ["malecularTransformer3", 0], ["malecularTransformer3", 0], ["malecularTransformer3", 0], ["malecularTransformer3", 0]], inCreative: true}]);
  ToolAPI.registerBlockMaterial(BlockID.malecularTransformer, "stone");
var model = BlockRenderer.createModel();
var render = new ICRender.Model();

model.addBox(0/16, 0/16, 0/16, 4/16, 15.99/16, 4/16, "malecularTransformer1", 0);

model.addBox(12/16, 0/16, 0/16, 16/16, 15.99/16, 4/16, "malecularTransformer1", 0);

model.addBox(0/16, 0/16, 12/16, 4/16, 15.99/16, 16/16, "malecularTransformer1", 0);

model.addBox(12/16, 0/16, 12/16, 16/16, 15.99/16, 16/16, "malecularTransformer1", 0);


model.addBox(0/16, 16/16, 0/16, 16/16, 16/16, 16/16, "malecularTransformer2", 0);


model.addBox(2/16, 0/16, 2/16, 14/16, 8.99/16, 14/16, "malecularTransformer3", 0);

model.addBox(2/16, 9/16, 2/16, 14/16, 9.1/16, 14/16, "malecularTransformer4", 0);


model.addBox(7.999/16, 2/16, 0/16, 8.005/16, 18/16, 16/16, "malecular", 0);
model.addBox(0/16, 2/16, 7.999/16, 16/16, 18/16, 8.005/16, "malecular", 0);



render.addEntry(model);
BlockRenderer.setStaticICRender(BlockID.malecularTransformer, -1, render);
Block.setBlockShape(BlockID.malecularTransformer, {"x":0,"y":0,"z":0}, {"x":1,"y":1,"z":1});

Callback.addCallback("PreLoaded", function(){
	Recipes.addShaped({id: BlockID.malecularTransformer, count: 1, data: 0}, [
		"xax",
		"dgd",
"xfx"
	], ['x', BlockID.voidglass, 0, 'g', ItemID.ulthbrcore, -1, 'd', ItemID.voidcristall, -1, 'a', ItemID.voidcristallarmoured, -1, 'f', BlockID.machineBlockAdvanced, 0]);
});


var guiMalecularTransformer = new UI.StandartWindow({
	standart: {
		header: {text: {text: "malecularTransformer"}},
		inventory: {standart: true},
		background: {standart: true}
	},
	
	drawing: [
		{type: "bitmap", x: 530, y: 155, bitmap: "arrow_bar_background", scale: GUI_SCALE},
		{type: "bitmap", x: 450, y: 155, bitmap: "energy_small_background", scale: GUI_SCALE}
	],
	
	elements: {
		"progressScale": {type: "scale", x: 530, y: 155, direction: 0, value: 0.5, bitmap: "arrow_bar_scale", scale: GUI_SCALE},
		"energyScale": {type: "scale", x: 450, y: 155, direction: 1, value: 0.5, bitmap: "energy_small_scale", scale: GUI_SCALE},
        "slotSource": {type: "slot", x: 441, y: 79},
        "slotResult": {type: "slot", x: 625, y: 148},
	}
});

MachineRegistry.registerPrototype(BlockID.malecularTransformer, {
	defaultValues: {
		power_tier: 4,
		energy_storage: 10000,
		energy_consumption: 250,
		work_time: 100,
		progress: 0,
		isActive: false
	},
	
	getGuiScreen: function(){
		return guiMalecularTransformer;
	},
	
	getTransportSlots: function(){
		return {input: ["slotSource"], output: ["slotResult"]};
	},
	
	setDefaultValues: function(){
		this.data.energy_storage = this.defaultValues.energy_storage;
		this.data.energy_consumption = this.defaultValues.energy_consumption;
		this.data.work_time = this.defaultValues.work_time;
	},
	
	tick: function(){
		this.setDefaultValues();
		UpgradeAPI.executeUpgrades(this);
		
		var sourceSlot = this.container.getSlot("slotSource");
		var resultSlot = this.container.getSlot("slotResult");
		var result = MachineRecipeRegistry.getRecipeResult("malecularTransformer", sourceSlot.id, sourceSlot.data);
        if(result && (resultSlot.id == result.id && resultSlot.data == result.data && resultSlot.count <= 64 - result.count || resultSlot.id == 0)){
			if(this.data.energy >= this.data.energy_consumption){
				this.data.energy -= this.data.energy_consumption;
				this.data.progress += 1//this.data.work_time;
				this.activate();
			}
			else{
				this.deactivate();
			}
			if(this.data.progress >= this.data.work_time){
				sourceSlot.count--;
				resultSlot.id = result.id;
				resultSlot.data = result.data;
				resultSlot.count += result.count;
				this.container.validateAll();
				this.data.progress = 0;
			}
        }
        else {
            this.data.progress = 0;
            this.deactivate();
        }
        
        var energyStorage = this.getEnergyStorage();
		var tier = this.data.power_tier;
		this.data.energy = Math.min(this.data.energy, energyStorage);
		this.data.energy += ChargeItemRegistry.getEnergyFrom(this.container.getSlot("slotEnergy"), "Eu", energyStorage - this.data.energy, transferByTier[tier], tier);
		
        this.container.setScale("progressScale", this.data.progress / this.data.work_time);
        this.container.setScale("energyScale", this.data.energy / energyStorage);
    },
    
    getEnergyStorage: function(){
        return this.data.energy_storage;
    },
    
    init: MachineRegistry.initModel,
	activate: MachineRegistry.activateMachine,
	deactivate: MachineRegistry.deactivateMachine,
	destroy: this.deactivate,
    energyTick: MachineRegistry.basicEnergyReceiveFunc
});




// file: machine/test1.js

Callback.addCallback("GenerateChunk", function (chunkX, chunkZ) {

    let coords = GenerationUtils.randomCoords(chunkX, chunkZ, 2056, 5112);
    if(Math.random() < 0.004){
    coords = GenerationUtils.findSurface(coords.x, coords.y, coords.z);
	
       World.setBlock(coords.x,coords.y-1,  coords.z, BlockID.voidblock, 0);
       World.setBlock(coords.x+1,coords.y,  coords.z, BlockID.voidblock, 0);
       World.setBlock(coords.x-1,coords.y,  coords.z, BlockID.voidblock, 0);
	   World.setBlock(coords.x+2,coords.y+1,  coords.z, BlockID.voidblock, 0);
       World.setBlock(coords.x-2,coords.y+1,  coords.z, BlockID.voidblock, 0);
       World.setBlock(coords.x+3,coords.y+1,  coords.z, BlockID.voidblock, 0);
       World.setBlock(coords.x-3,coords.y+1,  coords.z, BlockID.voidblock, 0);
       World.setBlock(coords.x-2,coords.y+2,  coords.z, BlockID.voidblock, 0);
       World.setBlock(coords.x+2,coords.y+2,  coords.z, BlockID.voidblock, 0);
       World.setBlock(coords.x+1,coords.y+2,  coords.z, BlockID.voidblock, 0);
       World.setBlock(coords.x-1,coords.y+2,  coords.z, BlockID.voidblock, 0);
	   World.setBlock(coords.x,coords.y+3,  coords.z, BlockID.voidglass, 0);
       World.setBlock(coords.x,coords.y+2,  coords.z, BlockID.vajraMacerator, 0);
       World.setBlock(coords.x,coords.y,  coords.z+1, BlockID.voidblock, 0);
       World.setBlock(coords.x,coords.y,  coords.z-1, BlockID.voidblock, 0);
       World.setBlock(coords.x,coords.y+1,  coords.z+2, BlockID.voidblock, 0);
	   World.setBlock(coords.x,coords.y+1,  coords.z-2, BlockID.voidblock, 0);
	   World.setBlock(coords.x,coords.y+1,  coords.z+3, BlockID.voidblock, 0);
       World.setBlock(coords.x,coords.y+1,  coords.z-3, BlockID.voidblock, 0);
       World.setBlock(coords.x,coords.y+2,  coords.z+2, BlockID.voidblock, 0);
       World.setBlock(coords.x,coords.y+2,  coords.z-2, BlockID.voidblock, 0);
       World.setBlock(coords.x,coords.y+2,  coords.z+1, BlockID.voidblock, 0);
       World.setBlock(coords.x,coords.y+2,  coords.z-1, BlockID.voidblock, 0); 
	   World.setBlock(coords.x+1,coords.y,  coords.z+1, BlockID.voidblock, 0);
       World.setBlock(coords.x-1,coords.y,  coords.z-1, BlockID.voidblock, 0);
       World.setBlock(coords.x+2,coords.y+1,  coords.z+2, BlockID.voidblock, 0);
	   World.setBlock(coords.x-2,coords.y+1,  coords.z-2, BlockID.voidblock, 0);
       World.setBlock(coords.x+1,coords.y+2,  coords.z+1, BlockID.voidblock, 0);
       World.setBlock(coords.x-1,coords.y+2,  coords.z-1, BlockID.voidblock, 0);
	   World.setBlock(coords.x+1,coords.y,  coords.z-1, BlockID.voidblock, 0);
       World.setBlock(coords.x-1,coords.y,  coords.z+1, BlockID.voidblock, 0);
       World.setBlock(coords.x+2,coords.y+1,  coords.z-2, BlockID.voidblock, 0);
	   World.setBlock(coords.x-2,coords.y+1,  coords.z+2, BlockID.voidblock, 0);
       World.setBlock(coords.x+1,coords.y+2,  coords.z-1, BlockID.voidblock, 0);
       World.setBlock(coords.x-1,coords.y+2,  coords.z+1, BlockID.voidblock, 0);
	   World.setBlock(coords.x+2,coords.y+1,  coords.z+1, BlockID.voidblock, 0);
       World.setBlock(coords.x-2,coords.y+1,  coords.z-1, BlockID.voidblock, 0);
       World.setBlock(coords.x+1,coords.y+1,  coords.z+2, BlockID.voidblock, 0);
	   World.setBlock(coords.x-1,coords.y+1,  coords.z-2, BlockID.voidblock, 0);
       World.setBlock(coords.x+2,coords.y+1,  coords.z-1, BlockID.voidblock, 0);
       World.setBlock(coords.x-2,coords.y+1,  coords.z+1, BlockID.voidblock, 0);
       World.setBlock(coords.x+1,coords.y+1,  coords.z-2, BlockID.voidblock, 0);
       World.setBlock(coords.x-1,coords.y+1,  coords.z+2, BlockID.voidblock, 0);
	   World.setBlock(coords.x-1,coords.y+1,  coords.z+1, BlockID.luckyVoid, 0);
       World.setBlock(coords.x+1,coords.y+1,  coords.z+1, BlockID.luckyVoid, 0);
       
	  
}});




// file: machine/craftStantion.js

IDRegistry.genBlockID("craftStantion");
Block.createBlockWithRotation("craftStantion", [
	{name: "craftStantion", texture: [["craftStantionb", 0], ["craftStantiontop", 0], ["craftStantionb", 0], ["craftStantions", 0], ["craftStantionb", 0], ["craftStantionb", 0]], inCreative: true}
], "opaque");
MachineRenderer.setStandartModel(BlockID.craftStantion, [["craftStantionb", 0], ["craftStantiontop", 0], ["craftStantionb", 0], ["craftStantions", 0], ["craftStantionb", 0], ["craftStantionb", 0]], true);
MachineRenderer.registerModelWithRotation(BlockID.craftStantion, [["craftStantionb", 0], ["craftStantiontop", 0], ["craftStantionb", 0], ["craftStantions", 0], ["craftStantionb", 0], ["craftStantionb", 0]]);

Block.registerDropFunction("craftStantion", function(coords, blockID, blockData, level){
	return MachineRegistry.getMachineDrop(coords, blockID, level, BlockID.machineMacerator);
});

Callback.addCallback("PreLoaded", function(){
	Recipes.addShaped({id: BlockID.craftStantion, count: 1, data: 0}, [
		"xax",
		"dgd",
"xfx"
	], ['x', BlockID.voidblock, 0, 'g', ItemID.ulthbrcore, -1, 'd', ItemID.voidcristall, -1, 'a', ItemID.voidcristallarmoured, -1, 'f', BlockID.machineBlockAdvanced, 0]);
});




var guiCraftStantion = new UI.StandartWindow({
	standart: {
		header: {text: {text: "craftStantion"}},
		inventory: {standart: true},
		background: {standart: true}
	},
	
	drawing: [
{type: "bitmap", x: 300, y: -100, bitmap: "craftSt", scale: GUI_SCALE},
		{type: "scale", x: 330, y: 110, bitmap: "elbg", scale: GUI_SCALE}
	],
	
	elements: {
		"progressScale": {type: "scale", x: 322, y: 188, direction: 3, value: 1, bitmap: "pb", scale: 1.3*GUI_SCALE},
		"energyScale": {type: "scale", x: 330, y: 110, direction: 1, value: 1, bitmap: "el", scale: GUI_SCALE},
        "slotSource1": {type: "slot", x: 150 + 99*GUI_SCALE, y: 40 + 13*GUI_SCALE},
"slotSource2": {type: "slot", x: 150 + 99*GUI_SCALE, y: 110 + 13*GUI_SCALE},
"slotSource3": {type: "slot", x: 150 + 99*GUI_SCALE, y: 180 + 13*GUI_SCALE},
"slotSource4": {type: "slot", x: 150 + 99*GUI_SCALE, y: 250 + 13*GUI_SCALE},
"slotSource5": {type: "slot", x: 150 + 99*GUI_SCALE, y: 320 + 13*GUI_SCALE},
"slotSource6": {type: "slot", x: 220 + 99*GUI_SCALE, y: 40 + 13*GUI_SCALE},
"slotSource7": {type: "slot", x: 220 + 99*GUI_SCALE, y: 110 + 13*GUI_SCALE},
"slotSource8": {type: "slot", x: 220 + 99*GUI_SCALE, y: 180 + 13*GUI_SCALE},
"slotSource9": {type: "slot", x: 220 + 99*GUI_SCALE, y: 250 + 13*GUI_SCALE},
"slotSource10": {type: "slot", x: 220 + 99*GUI_SCALE, y: 320 + 13*GUI_SCALE},
"slotSource11": {type: "slot", x: 290 + 99*GUI_SCALE, y: 40 + 13*GUI_SCALE},
"slotSource12": {type: "slot", x: 290 + 99*GUI_SCALE, y: 110 + 13*GUI_SCALE},
"slotSource13": {type: "slot", x: 290 + 99*GUI_SCALE, y: 180 + 13*GUI_SCALE},
"slotSource14": {type: "slot", x: 290 + 99*GUI_SCALE, y: 250 + 13*GUI_SCALE},
"slotSource15": {type: "slot", x: 290 + 99*GUI_SCALE, y: 320 + 13*GUI_SCALE},
"slotSource16": {type: "slot", x: 360 + 99*GUI_SCALE, y: 40 + 13*GUI_SCALE},
"slotSource17": {type: "slot", x: 360 + 99*GUI_SCALE, y: 110 + 13*GUI_SCALE},
"slotSource18": {type: "slot", x: 360 + 99*GUI_SCALE, y: 180 + 13*GUI_SCALE},
"slotSource19": {type: "slot", x: 360 + 99*GUI_SCALE, y: 250 + 13*GUI_SCALE},
"slotSource20": {type: "slot", x: 360 + 99*GUI_SCALE, y: 320 + 13*GUI_SCALE},
"slotSource21": {type: "slot", x: 430 + 99*GUI_SCALE, y: 40 + 13*GUI_SCALE},
"slotSource22": {type: "slot", x: 430 + 99*GUI_SCALE, y: 110 + 13*GUI_SCALE},
"slotSource23": {type: "slot", x: 430 + 99*GUI_SCALE, y: 180 + 13*GUI_SCALE},
"slotSource24": {type: "slot", x: 430 + 99*GUI_SCALE, y: 250 + 13*GUI_SCALE},
"slotSource25": {type: "slot", x: 430 + 99*GUI_SCALE, y: 320 + 13*GUI_SCALE},

        "slotEnergy": {type: "slot", x: 321, y: 58},
        "slotResult": {type: "slot", x: 321, y: 147},
	}
});



var VOID = {
    recipes: {},
  
   set: function(abdulla1, abdulla2, abdulla3, abdulla4, abdulla5, abdulla6, abdulla7, abdulla8, abdulla9, abdulla10, abdulla11, abdulla12, abdulla13, abdulla14, abdulla15, abdulla16, abdulla17, abdulla18, abdulla19, abdulla20, abdulla21, abdulla22, abdulla23, abdulla24, abdulla25, result){
      this.recipes[JSON.stringify([abdulla1, abdulla2, abdulla3, abdulla4, abdulla5, abdulla6, abdulla7, abdulla8, abdulla9, abdulla10, abdulla11, abdulla12, abdulla13, abdulla14, abdulla15, abdulla16, abdulla17, abdulla18, abdulla19, abdulla20, abdulla21, abdulla22, abdulla23, abdulla24, abdulla25])] = {id: result.id, count: result.count, data: result.data || 0};
   },
 
   get: function(abdulla1, abdulla2, abdulla3, abdulla4, abdulla5, abdulla6, abdulla7, abdulla8, abdulla9, abdulla10, abdulla11, abdulla12, abdulla13, abdulla14, abdulla15, abdulla16, abdulla17, abdulla18, abdulla19, abdulla20, abdulla21, abdulla22, abdulla23, abdulla24, abdulla25){
     return this.recipes[JSON.stringify([abdulla1, abdulla2, abdulla3, abdulla4, abdulla5, abdulla6, abdulla7, abdulla8, abdulla9, abdulla10, abdulla11, abdulla12, abdulla13, abdulla14, abdulla15, abdulla16, abdulla17, abdulla18, abdulla19, abdulla20, abdulla21, abdulla22, abdulla23, abdulla24, abdulla25])];
   }
};

/*RECIPES FOR MOBS FURNACE*/

//MobsRecipes.set(slot1, slot2, slot3, slot4, slot5, slot6, slot7, slot8, slot9, slot10, slot11, slot12, slot13, slot14, slot15, slot16, slot17, slot18, slot19, slot20, slot21, slot22, slot23, slot24, slot25, {id: resultat id, count: 1, data: 0});

VOID.set(ItemID.molecule, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, {id: ItemID.dustTin, count: 10, data: 0
});


/*THE END*/

MachineRegistry.registerPrototype(BlockID.craftStantion, {
	defaultValues: {
		power_tier: 5,
		energy_storage: 2000,
		energy_consumption: 150,
		work_time: 100,
		progress: 0,
		isActive: false
	},
    
    getGuiScreen: function(){
        return guiCraftStantion;
    },
    
    tick: function(){
        let source1 = this.container.getSlot("slotSource1");
        var source2 = this.container.getSlot("slotSource2");
        let source3 = this.container.getSlot("slotSource3");
var source4 = this.container.getSlot("slotSource4");
let source5 = this.container.getSlot("slotSource5");
var source6 = this.container.getSlot("slotSource6");
let source7 = this.container.getSlot("slotSource7");
var source8 = this.container.getSlot("slotSource8");
let source9 = this.container.getSlot("slotSource9");
        var source10 = this.container.getSlot("slotSource10");
        let source11 = this.container.getSlot("slotSource11");
var source12 = this.container.getSlot("slotSource12");
let source13 = this.container.getSlot("slotSource13");
var source14 = this.container.getSlot("slotSource14");
let source15 = this.container.getSlot("slotSource15");
var source16 = this.container.getSlot("slotSource16");
let source17 = this.container.getSlot("slotSource17");
var source18 = this.container.getSlot("slotSource18");
let source19 = this.container.getSlot("slotSource19");
var source20 = this.container.getSlot("slotSource20");
let source21 = this.container.getSlot("slotSource21");
var source22 = this.container.getSlot("slotSource22");
let source23 = this.container.getSlot("slotSource23");
var source24 = this.container.getSlot("slotSource24");
let source25 = this.container.getSlot("slotSource25");
        var resultSlot = this.container.getSlot("slotResult");
        let f = VOID.get(source1.id,source2.id,source3.id,source4.id,source5.id,source6.id,source7.id,source8.id,source9.id,source10.id,source11.id,source12.id,source13.id,source14.id,source15.id,source16.id,source17.id,source18.id,source19.id,source20.id,source21.id,source22.id,source23.id,source24.id,source25.id);

        if(f!=null) {
   if((((resultSlot.id == f.id && resultSlot.data == f.data) && resultSlot.count < 64) || resultSlot.id == 0)){
if(this.data.energy >= this.data.energy_consumption){
this.data.energy -= this.data.energy_consumption;
this.data.progress += 1//this.data.work_time;
this.activate();
}
else{

this.deactivate();
}
if(this.data.progress >= this.data.work_time){
            source1.count--;
            source2.count--;
            source3.count--;
source4.count--;
source5.count--;
source6.count--;
source7.count--;
source8.count--;
source9.count--;
            source10.count--;
            source11.count--;
source12.count--;
source13.count--;
source14.count--;
source15.count--;
source16.count--;
source17.count--;
source18.count--;
source19.count--;
source20.count--;
source21.count--;
source22.count--;
source23.count--;
source24.count--;
source25.count--;
            resultSlot.id = f.id;
            resultSlot.data = f.data;
            resultSlot.count++;
            this.container.validateAll();
            this.data.progress = 0;
                }
        	}
	
		else {
			this.data.progress = 0;
			this.deactivate();
		}
        
        var energyStorage = this.getEnergyStorage();
		var tier = this.data.power_tier;
		this.data.energy = Math.min(this.data.energy, energyStorage);
		this.data.energy += ChargeItemRegistry.getEnergyFrom(this.container.getSlot("slotEnergy"), "Eu", energyStorage - this.data.energy, transferByTier[5], tier);
		
        this.container.setScale("progressScale", this.data.progress / this.data.work_time);
        this.container.setScale("energyScale", this.data.energy / energyStorage);
   }
 },
    
    getEnergyStorage: function(){
        return this.data.energy_storage;
    },
    
    init: MachineRegistry.initModel,
	activate: MachineRegistry.activateMachine,
	deactivate: MachineRegistry.deactivateMachine,
	destroy: this.deactivate,
    energyTick: MachineRegistry.basicEnergyReceiveFunc
});





// file: machine/item/craftStantionCraft.js

VOID.set(ItemID.molecule, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, {id: BlockID.oreTin, count: 1, data: 0
});
VOID.set(0, ItemID.molecule, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, {id: BlockID.oreCopper, count: 1, data: 0
});
VOID.set(0, 0, ItemID.molecule, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, {id: BlockID.oreLead, count: 1, data: 0
});
VOID.set(0, 0, 0, ItemID.molecule, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, {id: BlockID.shardore, count: 1, data: 0
});
VOID.set(0, 0, 0, 0, ItemID.molecule, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, {id: ItemID.voidingot, count: 1, data: 0
});
VOID.set(0, 0, 0, 0, 0, ItemID.molecule, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, {id: ItemID.voidplate, count: 1, data: 0
});
VOID.set(0, 0, 0, 0, 0, 0, ItemID.molecule, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, {id: ItemID.voiddust, count: 1, data: 0
});
VOID.set(0, 0, 0, 0, 0, 0, 0, ItemID.molecule, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, {id: ItemID.ingotSteel, count: 1, data: 0
});
VOID.set(ItemID.molecule, ItemID.molecule, ItemID.molecule, ItemID.molecule, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, {id: ItemID.iridiumChunk, count: 1, data: 0
});
VOID.set(0, 0, 0, 0, 0, 0, 0, 0, 0, ItemID.molecule, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, {id: ItemID.ingotAlloy, count: 1, data: 0
});
VOID.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, ItemID.molecule, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, {id: ItemID.ingotLead, count: 1, data: 0
});
VOID.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, ItemID.molecule, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, {id: ItemID.ingotSilver, count: 1, data: 0
});
VOID.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, ItemID.molecule, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, {id: ItemID.ingotBronze, count: 1, data: 0
});
VOID.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, ItemID.molecule, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, {id: ItemID.circuitBasic, count: 1, data: 0
});
VOID.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, ItemID.molecule, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, {id: ItemID.circuitAdvanced, count: 1, data: 0
});
VOID.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, ItemID.molecule, 0, 0, 0, 0, 0, 0, 0, 0, 0, {id: ItemID.storageBattery, count: 1, data: 0
});
VOID.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, ItemID.molecule, 0, 0, 0, 0, 0, 0, 0, 0, {id: ItemID.storageAdvBattery, count: 1, data: 0
});
VOID.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, ItemID.molecule, 0, 0, 0, 0, 0, 0, 0, {id: ItemID.storageCrystal, count: 1, data: 0
});
VOID.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, ItemID.molecule, 0, 0, 0, 0, 0, 0, {id: ItemID.storageLapotronCrystal, count: 1, data: 0
});
VOID.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, ItemID.molecule, 0, 0, 0, 0, 0, {id: ItemID.cableOptic, count: 1, data: 0
});
VOID.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, ItemID.molecule, 0, 0, 0, 0, {id: BlockID.solarPanel, count: 1, data: 0
});
VOID.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, ItemID.molecule, 0, 0, 0, {id: BlockID.storageMFSU, count: 1, data: 0
});
VOID.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, ItemID.molecule, 0, 0, {id: BlockID.machineBlockAdvanced, count: 1, data: 0
});




// file: machine/item/craft.js





// file: machine/luckyVoid.js

IDRegistry.genBlockID("luckyVoid"); Block.createBlock("luckyVoid", [ {name: "luckyVoid", texture: [["luckyVoid", 0]], inCreative: true} ]);

Block.registerDropFunction("luckyVoid", function(coords, blockID, blockData, level){
	var drop = getDropBlock();
	World.drop(coords.relative.x + 0.5, coords.relative.y + 0.1, coords.relative.z + 0.5, drop.id, 1, drop.data);
	return [];
});

var LUCKY_VOID_RANDOM_DROP = [
	{chance: 23, id: BlockID.machineBlockBasic, data: 0},
	{chance: 11, id: BlockID.machineBlockAdvanced, data: 0},
	{chance: 34, id: BlockID.cableOptic, data: 0},
	{chance: 50, id: BlockID.blockCopper, data: 0},
	{chance: 50, id: BlockID.blockTin, data: 0},
	{chance: 50, id: BlockID.blockBronze, data: 0},
	{chance: 50, id: BlockID.blockLead, data: 0},
	{chance: 50, id: BlockID.blockSteel, data: 0},
	{chance: 70, id: BlockID.oreUranium, data: 0},
	{chance: 80, id: BlockID.oreIridium, data: 0},
	{chance: 80, id: ItemID.iridiumChunk, data: 0},
	{chance: 80, id: ItemID.Vajra, data: 0},
	];
	
function getDropBlock(){
	var total = 0;
	for (var i in LUCKY_VOID_RANDOM_DROP){
		total += LUCKY_VOID_RANDOM_DROP[i].chance;
	}
	var random = Math.random() * total * 1.4;
	var current = 0;
	for (var i in LUCKY_VOID_RANDOM_DROP){
		var drop = LUCKY_VOID_RANDOM_DROP[i];
		if (current < random && current + drop.chance > random){
			return drop;
		}
		current += drop.chance;
	}
	return {id: 0, data: 0};
}





// file: machine/test.js

IDRegistry.genBlockID("molecularTransformer");
Block.createBlock("molecularTransformer", [
	{name: "Molecular Transformer", texture: [["mt", 2], ["mt", 1], ["mt", 0], ["mt", 3], ["mt", 0], ["mt", 0]], inCreative: true}
]);
/*
var molecularTransformerRenderer = new TileRenderModel(BlockID.molecularTransformer, 0);
molecularTransformerRenderer.addBox(.25, 0, .25, .75, 1, .75);
molecularTransformerRenderer.addBox(0, 0, 0, .25, .125, .25);
molecularTransformerRenderer.addBox(.75, 0, .25, 1, .125, .25);
molecularTransformerRenderer.addBox(.375, 0, .75, .625, .125, 1);
molecularTransformerRenderer.addBox(0, 0, .875, .25, 1, .25);
molecularTransformerRenderer.addBox(.75, .875, .25, 1, 1, .25);
molecularTransformerRenderer.addBox(.375, .875, .75, .625, 1, 1);
*/
Block.setBlockShape(BlockID.molecularTransformer, {x: 0.25, y: 0, z: 0.25}, {x: 0.75, y: 0.875, z: 0.75});

Recipes.addShaped({id: BlockID.molecularTransformer, count: 1, data: 0}, [
 "axa",
 "bcb", 
 "axa"
 ], ['a', BlockID.machineBlockAdvanced, 0, 'b', ItemID.circuitAdvanced, 0, 'c', ItemID.advcore, 0, 'x', ItemID.storageLapotronCrystal, -1]);

//UI.addItemOverride(BlockID.molecularTransformer, 0, "mt")

var guiMolecularTransformer = new UI.StandartWindow({
	standart: {
		header: {text: {text: "Molecular Transformer"}},
		inventory: {standart: true},
		background: {standart: true}
	},
	
	drawing: [
		{type: "bitmap", x: 360, y: 40, bitmap: "mgui", scale: 2.1},
	],
	
	elements: {
		"progressScale": {type: "scale", x: 408, y: 140.8, direction: 3, bitmap: "ebg", scale: 2.1},
		"slot1": {type: "slot", x: 398, y: 88, bitmap: "smt", size: 43},
		"slot2": {type: "slot", x: 398, y: 183, bitmap: "smt", size: 43},
		"textInput": {font: {color: android.graphics.Color.WHITE, shadow: 0.6, size: 18}, type: "text", x: 515, y: 75, width: 300, height: 50, text: "Input:"},
		"textOutput": {font: {color: android.graphics.Color.WHITE, shadow: 0.6, size: 18}, type: "text", x: 515, y: 120, width: 300, height: 20, text: "Output:"},
		"textEnergy": {font: {color: android.graphics.Color.WHITE, shadow: 0.6, size: 18}, type: "text", x: 515, y: 134, width: 300, height: 39, text: "Energy:"},
		"textProgress": {font: {color: android.graphics.Color.WHITE, shadow: 0.6, size: 18}, type: "text", x: 515, y: 159, width: 300, height: 39, text: "Progress:"},
	}
});

ICore.Recipe.registerRecipesFor("molecularTransformer", {
	"397:1": {id: 399, count: 1, data: 0, energy: 250000000},
	265: {id: ItemID.iridiumChunk, count: 1, data: 0, energy: 9000000},
	87: {id: 289, count: 2, data: 0, energy: 70000},
	12: {id: 13, count: 1, data: 0, energy: 50000},
	3: {id: 82, count: 1, data: 0, energy: 50000},
	"263:1": {id: 263, count: 1, data: 0, energy: 60000},
	348: {id: ItemID.sunnariumpart, count: 1, data: 0, energy: 1000000},
	89: {id: ItemID.sunnarium, count: 1, data: 0, energy: 9000000},
	"35:4": {id: 89, count: 1, data: 0, energy: 500000},
	"35:11": {id: 22, count: 1, data: 0, energy: 500000},
	"35:14": {id: 152, count: 1, data: 0, energy: 500000},
	"263:0": {id: 264, count: 1, data: 0, energy: 9000000},
	"ItemID.ingotTin": {id: ItemID.ingotSilver, count: 1, data: 0, energy: 500000},
	"ItemID.ingotSilver": {id: 266, count: 1, data: 0, energy: 500000},
}, true);

ICore.Machine.registerPrototype(BlockID.molecularTransformer, {
	defaultValues: {
		progress: 0,
	},
	
	getEnergyStorage: function(){
		return 8192;
	},
	
	getGuiScreen: function(){
		return guiMolecularTransformer;
	},
	
	tick: function(){
		var sourceSlot = this.container.getSlot("slot1");
		var result = ICore.Recipe.getRecipeResult("molecularTransformer", sourceSlot.id) || ICore.Recipe.getRecipeResult("molecularTransformer", sourceSlot.id+":"+sourceSlot.data);
		if(result){
			this.container.setText("textInput", "Input: " + Item.getName(sourceSlot.id, sourceSlot.data));
			this.container.setText("textOutput", "Output: " + Item.getName(result.id, result.data));
			this.container.setText("textEnergy", "Energy: " + result.energy);
			this.container.setText("textProgress", "Progress: " + parseInt(this.data.progress / result.energy * 100) + "%");
			var resultSlot = this.container.getSlot("slot2");
			if(resultSlot.id == result.id && resultSlot.data == result.data && resultSlot.count + result.count <= 64 || resultSlot.id == 0){
				var transfer = Math.min(this.data.energy, result.energy - this.data.progress);
				this.data.progress += transfer;
				this.data.energy -= transfer;
				this.container.setScale("progressScale", this.data.progress / result.energy);
				if(this.data.progress >= result.energy){
					sourceSlot.count--;
					resultSlot.id = result.id;
					resultSlot.data = result.data;
					resultSlot.count++;
					this.container.validateAll();
					this.data.progress = 0;
				}
			}
		}
		else{
			this.data.progress = 0;
			this.container.setScale("progressScale", 0);
			this.container.setText("textInput", "Input:    ");
			this.container.setText("textOutput", "Output:   ");
			this.container.setText("textEnergy", "Energy:   ");
			this.container.setText("textProgress", "Progress: ");
		}
	},
	
	energyTick: ICore.Machine.basicEnergyReceiveFunc
});
Callback.addCallback("PreLoaded", function(){
Recipes.addShaped({id: BlockID.molecularTransformer, count: 1, data: 0}, [
 "axa",
 "bcb", 
 "axa"
 ], ['a', BlockID.machineBlockAdvanced, 0, 'b', ItemID.circuitAdvanced, 0, 'c', ItemID.mtcore, 0, 'x', ItemID.storageLapotronCrystal, -1]);
});




// file: machine/item/solaritem.js

IDRegistry.genItemID("enrichedsunnarium");
Item.createItem("enrichedsunnarium", "enrichedsunnarium", {name: "enrichedsunnarium", meta: 0}, {stack: 64});

Callback.addCallback("PreLoaded", function(){
	Recipes.addShaped({id: ItemID.enrichedsunnarium, count: 1, data: 0}, [
		"ccc",
		"cxc",
		"ccc"
	], ['x', ItemID.sunnarium, 0, 'c', ItemID.irradianturanium, 0]);
});

IDRegistry.genItemID("enrichedsunnariumalloy");
Item.createItem("enrichedsunnariumalloy", "enrichedsunnariumalloy", {name: "enrichedsunnariumalloy", meta: 0}, {stack: 64});

Callback.addCallback("PreLoaded", function(){
	Recipes.addShaped({id: ItemID.enrichedsunnariumalloy, count: 1, data: 0}, [
		" c ",
		"cxc",
		" c "
	], ['x', ItemID.sunnariumalloy, 0, 'c', ItemID.enrichedsunnarium, 0]);
});


IDRegistry.genItemID("iridiumingot");
Item.createItem("iridiumingot", "iridiumingot", {name: "iridiumingot", meta: 0}, {stack: 64});


IDRegistry.genItemID("iridiumironplate");
Item.createItem("iridiumironplate", "iridiumironplate", {name: "iridiumironplate", meta: 0}, {stack: 64});

Callback.addCallback("PreLoaded", function(){
	Recipes.addShaped({id: ItemID.iridiumironplate, count: 1, data: 0}, [
		"ccc",
		"cxc",
		"ccc"
	], ['x', ItemID.iridiumingot, 0, 'c', 265, 0]);
});



IDRegistry.genItemID("irradianturanium");
Item.createItem("irradianturanium", "irradianturanium", {name: "irradianturanium", meta: 0}, {stack: 64});

Callback.addCallback("PreLoaded", function(){
	Recipes.addShaped({id: ItemID.irradianturanium, count: 1, data: 0}, [
		" c ",
		"cxc",
		" c "
	], ['x', ItemID.uraniumingot, 0, 'c', 348, 0]);
});


IDRegistry.genItemID("irradiantglasspane");
Item.createItem("irradiantglasspane", "irradiantglasspane", {name: "irradiantglasspane", meta: 0}, {stack: 64});

Callback.addCallback("PreLoaded", function(){
	Recipes.addShaped({id: ItemID.irradiantglasspane, count: 1, data: 0}, [
		"ccc",
		"sxs",
		"ccc"
	], ['x', 348, 0, 'c', BlockID.reinforcedGlass, 0, 's', ItemID.irradianturanium, 0]);
});


IDRegistry.genItemID("irradiantreinforceplate");
Item.createItem("irradiantreinforceplate", "irradiantreinforceplate", {name: "irradiantreinforceplate", meta: 0}, {stack: 64});

Callback.addCallback("PreLoaded", function(){
	Recipes.addShaped({id: ItemID.irradiantreinforceplate, count: 1, data: 0}, [
		"c#c",
		"axa",
		"csc"
	], ['x', ItemID.reinforcediridiumironplate, 0, '#', ItemID.sunnariumpart, 0, 'c', 331, 0, 's', 264, 0, 'a', 351, 4]);
});


IDRegistry.genItemID("quantumcore");
Item.createItem("quantumcore", "quantumcore", {name: "quantumcore", meta: 0}, {stack: 1});

Callback.addCallback("PreLoaded", function(){
	Recipes.addShaped({id: ItemID.quantumcore, count: 1, data: 0}, [
		"csc",
		"sxs",
		"csc"
	], ['x', 381, 0, 'c', ItemID.enrichedsunnariumalloy, 0, 's', ItemID.ulthbrcore, -1]);
});


IDRegistry.genItemID("reinforcediridiumironplate");
Item.createItem("reinforcediridiumironplate", "reinforcediridiumironplate", {name: "reinforcediridiumironplate", meta: 0}, {stack: 64});

Callback.addCallback("PreLoaded", function(){
	Recipes.addShaped({id: ItemID.reinforcediridiumironplate, count: 1, data: 0}, [
		"csc",
		"sxs",
		"csc"
	], ['x', ItemID.iridiumironplate, 0, 'c', ItemID.plateAlloy, 0, 's', ItemID.carbonPlate, 0]);
});

IDRegistry.genItemID("sunnarium");
Item.createItem("sunnarium", "sunnarium", {name: "sunnarium", meta: 0}, {stack: 64});

Callback.addCallback("PreLoaded", function(){
	Recipes.addShaped({id: ItemID.sunnarium, count: 1, data: 0}, [
		"ccc",
		"xxx",
		"ccc"
	], ['x', 348, 0, 'c', ItemID.matter, 0]);
});

Callback.addCallback("PreLoaded", function(){
	Recipes.addShaped({id: ItemID.sunnarium, count: 1, data: 0}, [
		"ccc",
		"ccc",
		"ccc"
	], ['c', ItemID.sunnariumpart, 0]);
});


IDRegistry.genItemID("sunnariumalloy");
Item.createItem("sunnariumalloy", "sunnariumalloy", {name: "sunnariumalloy", meta: 0}, {stack: 64});

Callback.addCallback("PreLoaded", function(){
	Recipes.addShaped({id: ItemID.sunnariumalloy, count: 1, data: 0}, [
		"ccc",
		"cxc",
		"ccc"
	], ['x', ItemID.sunnarium, 0, 'c', ItemID.plateReinforcedIridium, 0]);
});


IDRegistry.genItemID("sunnariumpart");
Item.createItem("sunnariumpart", "sunnariumpart", {name: "sunnariumpart", meta: 0}, {stack: 64});

Callback.addCallback("PreLoaded", function(){
	Recipes.addShaped({id: ItemID.sunnariumpart, count: 1, data: 0}, [
		" c ",
		" x ",
		" c "
	], ['x', 348, 0, 'c', ItemID.matter, 0]);
});



IDRegistry.genItemID("uraniumingot");
Item.createItem("uraniumingot", "uraniumingot", {name: "uraniumingot", meta: 0}, {stack: 64});


IDRegistry.genItemID("mtcore");
Item.createItem("mtcore", "mtcore", {name: "mtcore", meta: 0}, {stack: 1});

Callback.addCallback("PreLoaded", function(){
	Recipes.addShaped({id: ItemID.mtcore, count: 1, data: 0}, [
		"cxc",
		"c c",
		"cxc"
	], ['x', ItemID.diamondPlate, 0, 'c', ItemID.irradiantglasspane, 0]);
});





// file: core/api/shared.js

ModAPI.registerAPI("ICore", {
	Machine: MachineRegistry,
	Render: MachineRenderer,
	Recipe: MachineRecipeRegistry,
	ChargeRegistry: ChargeItemRegistry,
	Upgrade: UpgradeAPI,
	UI: UIbuttons,
	
	
	requireGlobal: function(command){
		return eval(command);
	}
});

Logger.Log("Industrial Core API shared with name ICore.", "API");




