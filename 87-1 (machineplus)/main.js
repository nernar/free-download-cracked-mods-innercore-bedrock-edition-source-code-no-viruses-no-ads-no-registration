importLib("ToolType", "*");
importLib("energylib", "*");

//var
var EU = EnergyTypeRegistry.assureEnergyType("Eu", 1);
var GS = 3.2;
var RUBBER_SAPLING_GROUND_TILES = {
	2: true,
	3: true,
	60: true
};


//gui
var guirobot = new UI.StandartWindow({
	standart: {
		header: {text: {text: "робот"}},
		inventory: {standart: true},
		background: {standart: true}
	},
	
	params: {       
		slot: "default_slot",
		
		    
	},
	
	
	elements: {
		
		"slot1": {type: "slot", x: 420, y: 70},
		"energyScale": {type: "scale", x: 420, y: 150, direction: 1, value: 0.5, bitmap: "energy_small_scale", scale: GS},
	}
});




var guispawn = new UI.StandartWindow({
	standart: {
		header: {text: {text: "спавнер"}},
		inventory: {standart: true},
		background: {standart: true}
	},
	
	params: {       
		slot: "default_slot",
		
		    
	},
	
	
	drawing: [
		{type: "bitmap", x: 520, y: 70, bitmap: "furnace_bar_background", scale: GS},
		
	],
	
	elements: {
		"progressScale": {type: "scale", x: 520, y: 70, direction: 0, value: 0.5, bitmap: "furnace_bar_scale", scale: GS},
		"energyScale": {type: "scale", x: 420, y: 150, direction: 1, value: 0.5, bitmap: "energy_small_scale", scale: GS},
		"slot1": {type: "slot", x: 420, y: 70},
		
	}
});




var guidnk = new UI.StandartWindow({
	standart: {
		header: {text: {text: "машина днк"}},
		inventory: {standart: true},
		background: {standart: true}
	},
	
	params: {       
		slot: "default_slot",
		
		    
	},
	
	
	drawing: [
		{type: "bitmap", x: 520, y: 70, bitmap: "furnace_bar_background", scale: GS},
		
	],
	
	elements: {
		"progressScale": {type: "scale", x: 520, y: 70, direction: 0, value: 0.5, bitmap: "furnace_bar_scale", scale: GS},
		"energyScale": {type: "scale", x: 420, y: 150, direction: 1, value: 0.5, bitmap: "energy_small_scale", scale: GS},
		"slot1": {type: "slot", x: 420, y: 70},
		"slot2": {type: "slot", x: 600, y: 70},
		"slot3": {type: "slot", x: 600, y: 180},
	}
});




var guiexp = new UI.StandartWindow({
	standart: {
		header: {text: {text: "собиратель опыта"}},
		inventory: {standart: true},
		background: {standart: true}
	},
	
	params: {       
		slot: "default_slot",
		
		    
	},
	
	
	drawing: [
		
		
	],
	
	elements: {
		"slot1": {type: "slot", x: 440, y: 70},
		"slot2": {type: "slot", x: 560, y: 70},
		"slot3": {type: "slot", x: 560, y: 160},
		"slot4": {type: "slot", x: 440, y: 160},
		
		"textInfo1": {type: "text", x: 660, y: 150, width: 300, height: 30, text: "0"},
		
	}
});









var guiCl = new UI.StandartWindow({
	standart: {
		header: {text: {text: "кристаллизатор"}},
		inventory: {standart: true},
		background: {standart: true}
	},
	
	params: {       
		slot: "default_slot",
		
		    
	},
	
	
	drawing: [
		{type: "bitmap", x: 520, y: 70, bitmap: "furnace_bar_background", scale: GS},
		
	],
	
	elements: {
		"progressScale": {type: "scale", x: 520, y: 70, direction: 0, value: 0.5, bitmap: "furnace_bar_scale", scale: GS},
		"energyScale": {type: "scale", x: 440, y: 150, direction: 1, value: 0.5, bitmap: "energy_small_scale", scale: GS},
		"slot1": {type: "slot", x: 440, y: 70,bitmap: "crystal_slot"},
		"slot2": {type: "slot", x: 440, y: 200,bitmap: "cr_slot"},
		"slot3":{type:  "slot", x: 600, y: 70}
	}
});

var guiFtree = new UI.StandartWindow({
	standart: {
		header: {text: {text: "фабрика дерева"}},
		inventory: {standart: true},
		background: {standart: true}
	},
	
	params: {       
		slot: "default_slot",
		
		    
	},
	
	
	drawing: [
		{type: "bitmap", x: 520, y: 70, bitmap: "furnace_bar_background", scale: GS},
	],
	
	elements: {
		"progressScale": {type: "scale", x: 520, y: 70, direction: 0, value: 0.5, bitmap: "furnace_bar_scale", scale: GS},
		"energyScale": {type: "scale", x: 440, y: 150, direction: 1, value: 0.5, bitmap: "energy_small_scale", scale: GS},
		"slot1": {type: "slot", x: 440, y: 70,bitmap: "tree_slot"},
		"slot2": {type: "slot", x: 440, y: 200,bitmap: "body_slot"},
		"slot3":{type:  "slot", x: 600, y: 70}
	}
});




var guiBatt = new UI.StandartWindow({
	standart: {
		header: {text: {text: "Батарея"}},
		inventory: {standart: true},
		background: {standart: true}
	},
	
	params: {       
		slot: "default_slot",
		    
	},
	
	
	drawing: [
		
	],
	
	elements: {
		
		"slot1": {type: "slot", x: 440, y: 70},
		"slot2": {type: "slot", x: 580, y: 70},
		"textInfo1": {type: "text", x: 642, y: 142, width: 300, height: 30, text: "0/"},
		"textInfo2": {type: "text", x: 642, y: 172, width: 300, height: 30, text: "10000"}
	}
});


var guiEFurnace = new UI.StandartWindow({
	standart: {
		header: {text: {text: "энерго печь"}},
		inventory: {standart: true},
		background: {standart: true}
	},
	
	drawing: [
		{type: "bitmap", x: 530, y: 146, bitmap: "furnace_bar_background", scale: GS},
		
	],
	
	elements: {
		"progressScale": {type: "scale", x: 530, y: 146, direction: 0, value: 0.5, bitmap: "furnace_bar_scale", scale: GS},
		"energyScale": {type: "scale", x: 450, y: 150, direction: 1, value: 0.5, bitmap: "energy_small_scale", scale: GS},
		"slotSource": {type: "slot", x: 441, y: 75},
		"slotResult": {type: "slot", x: 625, y: 142},
		
	}
});

//API
var UpgradeAPI = {
	_elements: {},

	registerUpgrade: function(id, upgrade){
		UpgradeAPI._elements[id] = upgrade;
	},

	executeUpgrade: function(item, machine, container, data, coords){
		if(UpgradeAPI._elements[item.id]){
			UpgradeAPI._elements[item.id](item.count, machine, container, data, coords);
		}
	},

	executeAll: function(machine){
		var container = machine.container;
		var data = machine.data;
		var coords = {x: machine.x, y: machine.y, z: machine.z};
		
		var upgrades = {};
		for(var slotName in container.slots){
			if(slotName.match(/Upgrade/)){
				var slot = container.getSlot(slotName);
				if(!upgrades[slot.id]){upgrades[slot.id] = slot.count;}
				else{upgrades[slot.id] += slot.count;}
			}
		}
		for(var upgrade in upgrades){
			UpgradeAPI.executeUpgrade({id: upgrade, count: upgrades[upgrade]}, machine, container, data, coords);
		}
		return upgrades;
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
	}
}


var MachineRegistry = {
	machineIDs: {},

	isMachine: function(id){
		return this.machineIDs[id];
	},

	registerPrototype: function(id, Prototype){
		// register render
		ICRender.getGroup("ic-wire").add(id, -1);
		// register ID
		this.machineIDs[id] = true;
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
		
		
		ToolAPI.registerBlockMaterial(id, "stone");
		Block.setDestroyTime(id, 3);
		TileEntity.registerPrototype(id, Prototype);
		EnergyTileRegistry.addEnergyTypeForId(id, EU);
	},

	// standart functions
	getMachineDrop: function(coords, blockID, level, standartDrop){
		var item = Player.getCarriedItem();
		if(item.id==ItemID.wrench){
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
		if(level > 0){
			return [[standartDrop || blockID, 1, 0]];
		}
		return [];
	},
	
	basicEnergyReceiveFunc: function(type, src){
		var energyNeed = this.getEnergyStorage() - this.data.energy;
		this.data.energy += src.getAll(energyNeed);
	}
}






var ENERGY_ITEM_NAME = function(item, name){
	var energyStorage = Item.getMaxDamage(item.id) - 1;
	var energyStored = Math.min(energyStorage - item.data + 1, energyStorage);
	if(energyStored==0){return name;}
	return name + "\n§7" + energyStored + "/" + energyStorage + " Eu";
}



var ChargeItemRegistry = {
	chargeData: {},
	
	registerItem: function(item, energy, level, preventUncharge, isTool){
		Item.setMaxDamage(item, energy + 1);
		this.chargeData[item] = {
			type: "normal",
			id: item,
			level: level || 0,
			maxDamage: energy + 1,
			maxCharge: energy,
			preventUncharge: preventUncharge,
			isTool: isTool
		};
	},
	
	registerFlashItem: function(item, energy, level){
		this.chargeData[item] = {
			type: "flash",
			id: item,
			level: level || 0,
			energy: energy,
		};
	},
	
	getItemData: function(id){
		return this.chargeData[id];
	},
	
	isFlashStorage: function(id){
		var data = this.getItemData(id);
		return data && data.type == "flash";
	},
	
	getEnergyFrom: function(item, amount, level, getFromAll){
		if(item.id==ItemID.debugItem){
			return amount;
		}
		
		level = level || 0;
		var data = this.getItemData(item.id);
		if(!data || data.level > level || !getFromAll && data.preventUncharge){
			return 0;
		}
		if(data.type == "flash"){
			if(amount < 1){
				return 0;
			}
			item.count--;
			if(item.count < 1){
				item.id = item.data = 0;
			}
			return data.energy;
		}
		if(item.data < 1){
			item.data = 1;
		}
		
		var energyGot = Math.min(amount, data.maxDamage - item.data);
		item.data += energyGot;
		return energyGot;
	},
	
	addEnergyTo: function(item, energy, transf, level){
		level = level || 0;
		var data = this.getItemData(item.id);
		if(!data || data.type == "flash" || data.level > level){
			return 0;
		}
		
		var energyAdd = Math.min(item.data - 1, transf);
		if(energy >= energyAdd){
			item.data -= energyAdd;
			return energyAdd;
		}
		return 0;
	},
	
	getEnergyStored: function(item){
		var data = this.getItemData(item.id);
		if(!data){
			return 0;
		}
		return data.maxDamage - item.data;
	},
 Energyremove: function(item,energy)
 {
 var data = this.getItemData(item.id);
 var EnEU = Item.getMaxDamage(item.id)
 
 if(EnEU > energy)
 {
  Item.getMaxDamage(item.id) - energy;
 }
 else if(EnEU < energy)
 {
  

 }
 else if(EnEU < 0)
 {
   
   Item.getMaxDamage(item.id) ++;
 }
 
  
 }
}



//ID
IDRegistry.genBlockID("ore1");
IDRegistry.genBlockID("battareyblock");
IDRegistry.genBlockID("Solar");
IDRegistry.genBlockID("ore2");
IDRegistry.genBlockID("ore3");
IDRegistry.genBlockID("ore4");
IDRegistry.genBlockID("ore5");
IDRegistry.genBlockID("ore6");
IDRegistry.genBlockID("ore7");
IDRegistry.genBlockID("ore8");
IDRegistry.genBlockID("ore9");
IDRegistry.genItemID("ingot0");
IDRegistry.genItemID("ingot1");
IDRegistry.genItemID("ingot2");
IDRegistry.genItemID("ingot3");
IDRegistry.genItemID("ingot4");
IDRegistry.genItemID("ingot5");
IDRegistry.genItemID("SC");

IDRegistry.genItemID("tran");
IDRegistry.genItemID("meg");
IDRegistry.genItemID("ch0");
IDRegistry.genItemID("ch1");
IDRegistry.genItemID("ch2");
IDRegistry.genItemID("ch3");
IDRegistry.genItemID("mc0");
IDRegistry.genItemID("mc1");
IDRegistry.genItemID("mc2");
IDRegistry.genItemID("cable1");
IDRegistry.genItemID("ec1");
IDRegistry.genItemID("ec2");
IDRegistry.genItemID("ec3");

//block

Block.createBlock("ore1", [
	{name: "медная руда", texture: [["ore", 0]], inCreative: true}
]);

Block.createBlock("ore2", [
	{name: "титановая руда", texture: [["ore", 1]], inCreative: true}
]);

Block.createBlock("ore3", [
	{name: "оловяная руда", texture: [["ore", 2]], inCreative: true}
]);

Block.createBlock("ore4", [
	{name: "свинцовая руда", texture: [["ore", 3]], inCreative: true}
]);

Block.createBlock("ore5", [
	{name: "урановая руда", texture: [["ore", 4]], inCreative: true}
]);

Block.createBlock("ore6", [
	{name: "руда калифорния", texture: [["ore", 5]], inCreative: true}
]);


Block.createBlock("ore7", [
	{name: "руда красного энергокристала", texture: [["ore", 6]], inCreative: true}
]);



Block.createBlock("ore8", [
	{name: "руда зелёного энергокристала", texture: [["ore", 8]], inCreative: true}
]);



Block.createBlock("ore9", [
	{name: "руда синего энергокристала", texture: [["ore", 7]], inCreative: true}
]);




//item
Item.createItem("ingot0", "титановый слиток", {name: "ingot", meta: 1}, {stack: 64});

Item.createItem("cable1", "провод", {name: "cable1", meta: 0}, {stack: 64});

Item.createItem("ingot1", "медный слиток", {name: "ingot", meta: 0}, {stack: 64});

Item.createItem("ingot2", "оловяный слиток", {name: "ingot", meta: 3}, {stack: 64});

Item.createItem("ingot3", "свинцовый слиток", {name: "ingot", meta: 2}, {stack: 64});

Item.createItem("ingot4", "уран", {name: "ingot", meta: 4}, {stack: 64});

Item.createItem("ingot5", "калифорний", {name: "ingot", meta: 5}, {stack: 64});

Item.createItem("tran", "транзистор", {name: "tran", meta: 0}, {stack: 64});

Item.createItem("meg", "акамулятор на красном кристале", {name: "eg", meta: 0}, {stack: 1});

ChargeItemRegistry.registerItem(ItemID.meg, 100000, 2);
Item.registerNameOverrideFunction(ItemID.meg, ENERGY_ITEM_NAME);

Item.createItem("ch0", "микросхема(уровень: 1)", {name: "ch", meta: 0}, {stack: 64});


Item.createItem("ch1", "микросхема(уровень: 2)", {name: "ch", meta: 1}, {stack: 64});

Item.createItem("ch2", "микросхема(уровень: 3)", {name: "ch", meta: 2}, {stack: 64});

Item.createItem("ch3", "микросхема(уровень: 4)", {name: "ch", meta: 3}, {stack: 64});



Item.createItem("mc0", "микроконтроллер(уровень: 1)", {name: "mc", meta: 0}, {stack: 64});


Item.createItem("mc1", "микроконтроллер(уровень: 2)", {name: "mc", meta: 1}, {stack: 64});

Item.createItem("mc2", "микроконтроллер(уровень: 3)", {name: "mc", meta: 2}, {stack: 64});

Item.createItem("ec1", "красный энергокристалл", {name: "energy_crustal", meta: 0}, {stack: 64});

Item.createItem("ec2", "зелёный энергокристалл", {name: "energy_crustal", meta: 1}, {stack: 64});

Item.createItem("ec3", "синний энергокристалл", {name: "energy_crustal", meta: 2}, {stack: 64});

Item.createItem("SC","сканер",{name: "sc",meta: 0},{stack: 64});

IDRegistry.genItemID("latex");
Item.createItem("latex", "латекс", {name: "latex", data: 0});



//DNK
IDRegistry.genItemID("DNK0");
Item.createItem("DNK0", "пузырёк для днк", {name: "DNK", data: 0},{stack: 64});

IDRegistry.genItemID("DNK1");
Item.createItem("DNK1", "днк зомби", {name: "DNK", data: 1},{stack: 64});

IDRegistry.genItemID("DNK2");
Item.createItem("DNK2", "днк скелета", {name: "DNK", data: 1},{stack: 64});

IDRegistry.genItemID("DNK3");
Item.createItem("DNK3", "днк крипера", {name: "DNK", data: 1},{stack: 64});

IDRegistry.genItemID("DNK4");
Item.createItem("DNK4", "днк эндермена", {name: "DNK", data: 1},{stack: 64});

IDRegistry.genItemID("DNK5");
Item.createItem("DNK5", "днк железного голема", {name: "DNK", data: 1},{stack: 64});

IDRegistry.genItemID("DNK6");
Item.createItem("DNK6", "днк снежного голема", {name: "DNK", data: 1},{stack: 64});

IDRegistry.genItemID("DNK7");
Item.createItem("DNK7", "днк свиньи", {name: "DNK", data: 1},{stack: 64});

IDRegistry.genItemID("DNK8");
Item.createItem("DNK8", "днк курицы", {name: "DNK", data: 1},{stack: 64});

IDRegistry.genItemID("DNK9");
Item.createItem("DNK9", "днк овцы", {name: "DNK", data: 1},{stack: 64});


//energy
IDRegistry.genBlockID("AES");
Block.createBlock("AES", [
	{name: "АЭС", texture: [["machine", 0],["machine",0],["AES", 0],["AES", 0], ["AES", 0],["AES", 0]], inCreative: true}
]);


MachineRegistry.registerPrototype(BlockID.AES, {
	
	
	isGenerator: function() {
		return true;
	},
	energyTick: function(type, src){
		
		
			src.add(3);
	}
	
});


Block.createBlock("Solar", [
	{name: "солнечная панель", texture: [["machine", 0],["solar",0],["machine", 0],["machine", 0], ["machine", 0],["machine", 0],], inCreative: true}
]);
MachineRegistry.registerPrototype(BlockID.Solar, {
	isGenerator: function() {
		return true;
	},

	energyTick: function(type, src){
		if(World.getLightLevel(this.x, this.y + 1, this.z) == 15){
			src.add(1);
		}
	}
});



Block.createBlock("battareyblock", [
	{name: "красная батарея", texture: [["machine", 0],["machine",0],["battarey", 0],["battarey", 0], ["battarey", 0],["battarey", 0],], inCreative: true}
]);

MachineRegistry.registerPrototype(BlockID.battareyblock, {
	isStorage:  true,
	
getGuiScreen: function(){
		return guiBatt;
	},
	tick: function(){
		var energyStorage = this.getEnergyStorage();
		this.container.setScale("energyScale", this.data.energy / energyStorage);
		this.container.setText("textInfo1", parseInt(this.data.energy) + "/");
		this.container.setText("textInfo2", energyStorage + "");
		
		var TRANSFER = 2048;
		this.data.energy += ChargeItemRegistry.getEnergyFrom(this.container.getSlot("slot2"), Math.min(TRANSFER, energyStorage - this.data.energy), 2);
		this.data.energy -= ChargeItemRegistry.addEnergyTo(this.container.getSlot("slot1"), this.data.energy, TRANSFER, 2);
	},
	
	getEnergyStorage: function(){
		return 100000;
	},
	
	energyTick: function(type, src){
		var TRANSFER = 512;
		this.data.energy += src.storage(Math.min(TRANSFER*4, this.getEnergyStorage() - this.data.energy), Math.min(TRANSFER, this.data.energy));
	}

})



IDRegistry.genBlockID("eFurnace");
Block.createBlockWithRotation("eFurnace", [
	{name: "энерго печь", texture: [["machine", 0], ["machine", 0], ["machine", 0], ["efurnace", 0], ["machine", 0], ["machine", 0]], inCreative: true}
]);
MachineRegistry.registerPrototype(BlockID.eFurnace, {
	defaultValues: {
		energy_storage: 2000,
		energy_consumption: 3,
		work_time: 50,
		progress: 0,
	},
	
	getGuiScreen: function(){
		return guiEFurnace;
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
		UpgradeAPI.executeAll(this);
		
		var sourceSlot = this.container.getSlot("slotSource");
		var result = Recipes.getFurnaceRecipeResult(sourceSlot.id, "iron");
		if(result){
			var resultSlot = this.container.getSlot("slotResult");
			if(resultSlot.id == result.id && resultSlot.data == result.data && resultSlot.count < 64 || resultSlot.id == 0){
				if(this.data.energy >= this.data.energy_consumption){
					this.data.energy -= this.data.energy_consumption;
					this.data.progress += 1/this.data.work_time;
				}
				if(this.data.progress >= 1){
					sourceSlot.count--;
					resultSlot.id = result.id;
					resultSlot.data = result.data;
					resultSlot.count++;
					this.container.validateAll();
					this.data.progress = 0;
				}
			}
		}
		else {
			this.data.progress = 0;
		}
		
		var energyStorage = this.getEnergyStorage();
		this.data.energy = Math.min(this.data.energy, energyStorage);
		this.data.energy += ChargeItemRegistry.getEnergyFrom(this.container.getSlot("slotEnergy"), Math.min(32, energyStorage - this.data.energy), 0);
		
		this.container.setScale("progressScale", this.data.progress);
		this.container.setScale("energyScale", this.data.energy / energyStorage);
	},
	
	getEnergyStorage: function(){
		return this.data.energy_storage;
	},
	
	energyTick: MachineRegistry.basicEnergyReceiveFunc
});


IDRegistry.genBlockID("FTree");
Block.createBlockWithRotation("FTree", [
	{name: "фабрика дерева", texture: [["machine", 0], ["machine", 0], ["ftree", 0], ["ftree", 0], ["ftree", 0], ["ftree", 0]], inCreative: true}
]);

MachineRegistry.registerPrototype(BlockID.FTree, {
	defaultValues: {
		energy_storage: 2000,
		energy_consumption: 5,
		work_time: 50,
		progress: 0,
	},
	
	getGuiScreen: function(){
		return guiFtree;
	},
	getTransportSlots: function(){
		return {input: ["slot1"], output: ["slot3"]};
		
		},
	setDefaultValues: function(){
		this.data.energy_storage = this.defaultValues.energy_storage;
		this.data.energy_consumption = this.defaultValues.energy_consumption;
		this.data.work_time = this.defaultValues.work_time;
	},
	tick: function()
	{
		this.setDefaultValues();
		UpgradeAPI.executeAll(this);
		
		
		
		
		var treeSlot = this.container.getSlot("slot1");
		var bodySlot = this.container.getSlot("slot2");
		var resultSlot = this.container.getSlot("slot3");
		var datatree;
		
		if(treeSlot.id ==6&&bodySlot.id==351&&bodySlot.data ==15&&treeSlot.count > 0&&bodySlot.count > 0)
		{
			datatree = treeSlot.data;
			if(this.data.energy >= this.data.energy_consumption)
            {
			
			        this.data.energy -= this.data.energy_consumption;
					this.data.progress += 1/this.data.work_time;
			
			
			}
			
		}
		if(treeSlot.count < 1)
		{
		   treeSlot.id = 0;
			
			
		}
		if(bodySlot.count < 1)
		{
		   bodySlot.id = 0;
			
			
		}
		
		
		
		if(this.data.progress >= 1)
		{
			treeSlot.count --;
			bodySlot.count--;
			resultSlot.id = 17;
			resultSlot.data = datatree;
			resultSlot.count+= Math.round(Math.random()*6); 
			this.data.progress = 0;
			
			
			
		}
		var energyStorage = this.getEnergyStorage();
		this.data.energy = Math.min(this.data.energy, energyStorage);
		
		
		this.container.setScale("progressScale", this.data.progress);
		this.container.setScale("energyScale", this.data.energy / energyStorage);
		
	},
	getEnergyStorage: function(){
		return this.data.energy_storage;
	},
	
	energyTick: MachineRegistry.basicEnergyReceiveFunc
	
	})


IDRegistry.genBlockID("Blaser");
Block.createBlockWithRotation("Blaser", [
	{name: "боевой лазер", texture: [["machine", 0], ["machine", 0], ["mlazer", 0], ["mlazer", 0], ["mlazer", 0], ["mlazer", 0]], inCreative: true}
]);
MachineRegistry.registerPrototype(BlockID.Blaser, {
defaultValues: {
		energy_storage: 2000,
		energy_consumption: 50,
		work_time: 15,
		target: 0, 
		progress: 0,
	},
	
	setDefaultValues: function(){
		this.data.energy_storage = this.defaultValues.energy_storage;
		this.data.energy_consumption = this.defaultValues.energy_consumption;
		this.data.work_time = this.defaultValues.work_time;
	},

	tick: function(){
		
		this.setDefaultValues();
		
		var energyStorage = this.getEnergyStorage();
		this.data.energy = Math.min(this.data.energy, energyStorage);
		
 if(this.data.energy >= this.data.energy_consumption){
			 var mob = Entity.getAll();
			
	 for(var i=0; i < mob.length; i++){
			
		  if(Entity.getType(mob[i]) != 63 && Entity.getType(mob[i]) != 64 && Entity.getType(mob[i]) != 68 && Entity.getType(mob[i]) != 69&&Entity.getType(mob[i]) != 10&&Entity.getType(mob[i]) != 11&&Entity.getType(mob[i]) != 12&&Entity.getType(mob[i]) != 13&&Entity.getType(mob[i]) != 14&&Entity.getType(mob[i]) != 15&&Entity.getType(mob[i]) != 16&&Entity.getType(mob[i]) != 17&&Entity.getType(mob[i]) != 19&&Entity.getType(mob[i]) != 65&&Entity.getType(mob[i]) != 66&&Entity.getType(mob[i]) != 80&&Entity.getType(mob[i]) != 81&&Entity.getType(mob[i]) != 82&&Entity.getType(mob[i]) != 83&&Entity.getType(mob[i]) != 84)
		  {
			   var x1 = Entity.getPosition(mob[i]).x;
               var y1 = Entity.getPosition(mob[i]).y;
               var z1 = Entity.getPosition(mob[i]).z;
  
                 var X1 = x1-this.x;
                 var Y1 = y1-this.y;
                 var Z1 = z1-this.z;
              
			 if(X1*X1+Y1*Y1+Z1*Z1 < 20*20)
			{
				target = mob[i];
				
			}
			else {
				target = 0;
				
				}
			
			if(target != 0)
			                this.data.progress += 1/this.data.work_time;
			
			
			if(this.data.progress >= 1)
			{
				Entity.damageEntity(target, 5);
				var x1 = Entity.getPosition(target).x;
               var y1 = Entity.getPosition(target).y;
               var z1 = Entity.getPosition(target).z;
  
				
				Particles.addFarParticle(10,x1+0.5,y1+1,z1)
				Particles.addFarParticle(10,x1,y1+1,z1+0.5)
				Particles.addFarParticle(10,x1-0.5,y1+1,z1)
				Particles.addFarParticle(10,x1,y1+1,z1-0.5)
				Particles.addFarParticle(10,x1+0.5,y1+1,z1+0.5)
				Particles.addFarParticle(10,x1-0.5,y1+1,z1-0.5)
				Particles.addFarParticle(10,x1-0.5,y1+1,z1+0.5)
				Particles.addFarParticle(10,x1+0.5,y1+1,z1-0.5)
				this.data.progress = 0;
				this.data.energy -= this.data.energy_consumption;
				
				
			}
		  }
		}
			
			
     }
		
		
	},
	
	
	getEnergyStorage: function(){
		return this.data.energy_storage;
	},
   energyTick: MachineRegistry.basicEnergyReceiveFunc
	
})

IDRegistry.genBlockID("cryst");
Block.createBlockWithRotation("cryst", [
	{name: "кристаллизатор", texture: [["machine", 0], ["machine", 0], ["crystalisator", 0], ["crystalisator", 0], ["crystalisator", 0], ["crystalisator", 0]], inCreative: true}
]);
MachineRegistry.registerPrototype(BlockID.cryst, {
	defaultValues: {
		energy_storage: 2000,
		energy_consumption: 5,
		work_time: 50,
		progress: 0,
	},
	
	getGuiScreen: function(){
		return guiCl;
	},
	
	getTransportSlots: function(){
		return {input: ["slot1"], output: ["slot3"]};
		
		},
	setDefaultValues: function(){
		this.data.energy_storage = this.defaultValues.energy_storage;
		this.data.energy_consumption = this.defaultValues.energy_consumption;
		this.data.work_time = this.defaultValues.work_time;
	},
	tick: function()
	{
		this.setDefaultValues();
		UpgradeAPI.executeAll(this);
		
		
		
		
		var diamondSlot = this.container.getSlot("slot1");
		var crSlot = this.container.getSlot("slot2");
		var resultSlot = this.container.getSlot("slot3");
		var itemprog;

	 if(this.data.energy >= this.data.energy_consumption)
     {
        	
        
         if(diamondSlot.id ==264&&diamondSlot.count > 0)
	     {
            if(crSlot.id==351&&crSlot.data== 1&&crSlot.count > 0){
			    this.data.energy -= this.data.energy_consumption;
					this.data.progress += 1/this.data.work_time;
					itemprog = ItemID.ec1;
				}
				else if(crSlot.id==351&&crSlot.data== 10&&crSlot.count > 0){
			    this.data.energy -= this.data.energy_consumption;
					this.data.progress += 1/this.data.work_time;
					itemprog = ItemID.ec2;
				}
			    else if(crSlot.id==351&&crSlot.data== 12&&crSlot.count > 0){
			    this.data.energy -= this.data.energy_consumption;
					this.data.progress += 1/this.data.work_time;
					itemprog = ItemID.ec3;
				}
				
				
	   }
			
			
			
		}
		
		
	
	
		if(diamondSlot.count < 1)
		{
		   diamondSlot.id = 0;
			
			
		}
		if(crSlot.count < 1)
		{
		   crSlot.id = 0;
			
			
		}
		
		
		
		if(this.data.progress >= 1)
		{
			diamondSlot.count --;
			crSlot.count--;
			resultSlot.id = itemprog;
			resultSlot.count++; 
			this.data.progress = 0;
			
			
			
		}
		var energyStorage = this.getEnergyStorage();
		this.data.energy = Math.min(this.data.energy, energyStorage);
		
		
		this.container.setScale("progressScale", this.data.progress);
		this.container.setScale("energyScale", this.data.energy / energyStorage);
		
	},
	getEnergyStorage: function(){
		return this.data.energy_storage;
	},
	
	energyTick: MachineRegistry.basicEnergyReceiveFunc
	
		
	
	
	});
	
IDRegistry.genBlockID("trap");
Block.createBlockWithRotation("trap", [
	{name: "ловушка", texture: [["machine", 0], ["trap", 0], ["trap", 0], ["trap", 0], ["trap", 0], ["trap", 0]], inCreative: true}
]);
MachineRegistry.registerPrototype(BlockID.trap, {
	defaultValues: {
		energy_storage: 2000,
		energy_consumption: 20,
		
	},
	setDefaultValues: function(){
		this.data.energy_storage = this.defaultValues.energy_storage;
		this.data.energy_consumption = this.defaultValues.energy_consumption;
		
	},
	tick: function()
	{
		this.setDefaultValues();
		
		if(this.data.energy >= this.data.energy_consumption)
		{
			
			var mobs = Entity.getAll()
		for(var i = 0;i < mobs.length;i++)
		{
				var x = Entity.getPosition(mobs[i]).x - this.x;
				var y = Entity.getPosition(mobs[i]).y - this.y+1;
				var z = Entity.getPosition(mobs[i]).z - this.z;
			if(Entity.getType(mobs[i]) != 64&&Entity.getType(mobs[i]) != 63)
			{
			   if(x*x+y*y+z*z < 1.6*1.6)
			   {
				this.data.energy -=this.data.energy_consumption;
				 Entity.damageEntity(mobs[i], 7);
			    }
			}
	    }
	}
		var energyStorage = this.getEnergyStorage();
		this.data.energy = Math.min(this.data.energy, energyStorage);
	},
	getEnergyStorage: function(){
	return this.data.energy_storage;
	},
	
	energyTick: MachineRegistry.basicEnergyReceiveFunc
	
		
		
	
	
})


IDRegistry.genBlockID("Bexp");
Block.createBlockWithRotation("Bexp", [
	{name: "собиратель опыта", texture: [["machine", 0], ["expb", 1], ["expb", 0], ["expb", 0], ["expb", 0], ["expb", 0]], inCreative: true}
]);

TileEntity.registerPrototype(BlockID.Bexp, {	
defaultValues: {
		exp: 0,
	},

getGuiScreen: function(){
		return guiexp;
	},
	getTransportSlots: function(){
		return {input: ["slot1"], output: ["slot4"]};
		return {input: ["slot2"], output: ["slot3"]};
		
		
		},
 tick: function()
{
	 
	var target = 0;
	var expSlot1 = this.container.getSlot("slot1");
    var expSlot2 = this.container.getSlot("slot2");
    var expSlot3 = this.container.getSlot("slot3");
    var expSlot4 = this.container.getSlot("slot4");
	
	this.container.setText("textInfo1", parseInt(this.data.exp));
	
	
	var mobs = Entity.getAll();
		
	for(var i = 0;i < mobs.length;i++)
	{
		if(Entity.getType(mobs[i]) == 69)
		{
			target = mobs[i];
			
		}
		
	}
	var xt = Entity.getPosition(target).x;
    var yt = Entity.getPosition(target).y;
    var zt = Entity.getPosition(target).z;
	
	var X = xt-this.x;
	var Y = yt-this.y;
	var Z = zt-this.z;

	
	if(X*X+Y*Y+Z*Z < 3*3)
	{
		this.data.exp += 10;
		Entity.remove(target);
	
	}
	
	if(expSlot1.id == 374&&expSlot1.count > 0&&this.data.exp >= 20)
	{
		
		expSlot1.count--;
		this.data.exp -= 20;
	    expSlot4.id = 384; 
		expSlot4.count++;
		
	}
	
	if(expSlot2.id == 384&&expSlot2.count > 0)
	{
		
		
		expSlot2.count--;
		this.data.exp += 20;
		expSlot3.id = 374; 
		expSlot3.count++;
		
		
		
	}
	
	
	
}

})

IDRegistry.genBlockID("DNKB");
Block.createBlockWithRotation("DNKB", [
	{name: "днк машина", texture: [["machine", 0], ["machine", 0], ["machine", 0], ["DNKb", 0], ["machine", 0], ["machine", 0]], inCreative: true}
]);
MachineRegistry.registerPrototype(BlockID.DNKB, {
	defaultValues: {
		energy_storage: 2000,
		energy_consumption: 20,
		progress: 0,
		work_time: 1000,
		
		
	},
	getGuiScreen: function(){
		return guidnk;
		
		},
	
	setDefaultValues: function(){
		this.data.energy_storage = this.defaultValues.energy_storage;
		this.data.energy_consumption = this.defaultValues.energy_consumption;
		this.data.work_time = this.defaultValues.work_time;
		
	},
	tick: function()
	{
		this.setDefaultValues();
		UpgradeAPI.executeAll(this);
		
	   var dnkID ;
       var dnkSlot = this.container.getSlot("slot1");
       var resultSlot = this.container.getSlot("slot2");
       var cupSlot = this.container.getSlot("slot3");
   if(this.data.energy >= this.data.energy_consumption){
       
       if(dnkSlot.count > 0&&cupSlot.id == ItemID.DNK0&&cupSlot.count > 0)
		{
			if(dnkSlot.id == 367)
			{
				dnkID = ItemID.DNK1;
				this.data.progress += 1/this.data.work_time;
				this.data.energy -=this.data.energy_consumption;
			}
			else if(dnkSlot.id == 352)
			{
				dnkID = ItemID.DNK2;
				this.data.progress += 1/this.data.work_time;
				this.data.energy -=this.data.energy_consumption;
			}
			else if(dnkSlot.id == 289)
			{
				dnkID = ItemID.DNK3;
				this.data.progress += 1/this.data.work_time;
				this.data.energy -=this.data.energy_consumption;
			}
			else if(dnkSlot.id == 368)
			{
				dnkID = ItemID.DNK4;
				this.data.progress += 1/this.data.work_time;
				this.data.energy -=this.data.energy_consumption;
			}
			else if(dnkSlot.id == 265)
			{
				dnkID = ItemID.DNK5;
				this.data.progress += 1/this.data.work_time;
				this.data.energy -=this.data.energy_consumption;
			}
			else if(dnkSlot.id == 332)
			{
				dnkID = ItemID.DNK6;
				this.data.progress += 1/this.data.work_time;
				this.data.energy -=this.data.energy_consumption;
			}
			else if(dnkSlot.id == 363)
			{
				dnkID = ItemID.DNK7;
				this.data.progress += 1/this.data.work_time;
			    this.data.energy -=this.data.energy_consumption;
			}
			if(dnkSlot.id == 288)
			{
				dnkID = ItemID.DNK8;
				this.data.progress += 1/this.data.work_time;
				this.data.energy -=this.data.energy_consumption;
			}
			if(dnkSlot.id == 423)
			{
				dnkID = ItemID.DNK9;
				this.data.progress += 1/this.data.work_time;
				this.data.energy -=this.data.energy_consumption;
			}
		}
		
		
		
		
		
	}
	
	
	
	
	if(this.data.progress >= 1)
	{
		cupSlot.count--;
		dnkSlot.count--;
		resultSlot.id = dnkID;
		resultSlot.count++;
		this.data.progress = 0;
		
	}
	
	if(dnkSlot.count < 1)
		{
		   dnkSlot.id = 0;
			
			
		}
	  if(cupSlot.count < 1)
		{
		   cupSlot.id = 0;
			
			
		} 
	
		
		var energyStorage = this.getEnergyStorage();
		this.data.energy = Math.min(this.data.energy, energyStorage);
		
		this.container.setScale("progressScale", this.data.progress);
		this.container.setScale("energyScale", this.data.energy / energyStorage);
		
	},
	getEnergyStorage: function(){
	return this.data.energy_storage;
	},
	
	energyTick: MachineRegistry.basicEnergyReceiveFunc
	
		
		
	
	
})


IDRegistry.genBlockID("spawner");
Block.createBlockWithRotation("spawner", [
	{name: "спавнер", texture: [["spawner", 0], ["spawner", 0], ["spawner", 0], ["spawner", 1], ["spawner", 0], ["spawner", 0]], inCreative: true}
]);
MachineRegistry.registerPrototype(BlockID.spawner, {
	defaultValues: {
		energy_storage: 2000,
		energy_consumption: 20,
		progress: 0,
		work_time: 1000,
		
		
	},
	getGuiScreen: function(){
		return guispawn;
		
		},
	
	setDefaultValues: function(){
		this.data.energy_storage = this.defaultValues.energy_storage;
		this.data.energy_consumption = this.defaultValues.energy_consumption;
		this.data.work_time = this.defaultValues.work_time;
		
	},
	tick: function()
	{
		this.setDefaultValues();
		UpgradeAPI.executeAll(this);
		
	   var mobID ;
       var dnkSlot = this.container.getSlot("slot1");
       
   if(this.data.energy >= this.data.energy_consumption){
       
       if(dnkSlot.count > 0)
		{
			if(dnkSlot.id == ItemID.DNK1)
			{
				mobID = 32;
				this.data.progress += 1/this.data.work_time;
				this.data.energy -=this.data.energy_consumption;
			}
			else if(dnkSlot.id == ItemID.DNK2)
			{
				mobID = 34;
				this.data.progress += 1/this.data.work_time;
				this.data.energy -=this.data.energy_consumption;
			}
			else if(dnkSlot.id == ItemID.DNK3)
			{
				mobID = 33;
				this.data.progress += 1/this.data.work_time;
				this.data.energy -=this.data.energy_consumption;
			}
			else if(dnkSlot.id == ItemID.DNK4)
			{
				mobID = 38;
				this.data.progress += 1/this.data.work_time;
				this.data.energy -=this.data.energy_consumption;
			}
			else if(dnkSlot.id == ItemID.DNK5)
			{
                mobID = 20;
				this.data.progress += 1/this.data.work_time;
				this.data.energy -=this.data.energy_consumption;
			}
			else if(dnkSlot.id == ItemID.DNK6)
			{
				mobID = 21;
				this.data.progress += 1/this.data.work_time;
				this.data.energy -=this.data.energy_consumption;
			}
			else if(dnkSlot.id == ItemID.DNK7)
			{
				mobID = 11;
				this.data.progress += 1/this.data.work_time;
			    this.data.energy -=this.data.energy_consumption;
			}
			if(dnkSlot.id == ItemID.DNK8)
			{
				mobID = 10;
				this.data.progress += 1/this.data.work_time;
				this.data.energy -=this.data.energy_consumption;
			}
			if(dnkSlot.id == ItemID.DNK9)
			{
				mobID = 13;
				this.data.progress += 1/this.data.work_time;
				this.data.energy -=this.data.energy_consumption;
			}
		}
		
		
		
		
		
	}
	
	
	
	
	if(this.data.progress >= 1)
	{
		Entity.spawn(this.x, this.y+1, this.z,mobID);
		this.data.progress = 0;
		
	}
	
	if(dnkSlot.count < 1)
		{
		   dnkSlot.id = 0;
			
			
		}
	
	
		
		var energyStorage = this.getEnergyStorage();
		this.data.energy = Math.min(this.data.energy, energyStorage);
		
		this.container.setScale("progressScale", this.data.progress);
		this.container.setScale("energyScale", this.data.energy / energyStorage);
		
	},
	getEnergyStorage: function(){
	return this.data.energy_storage;
	},
	
	energyTick: MachineRegistry.basicEnergyReceiveFunc
	
		
		
	
	
})

IDRegistry.genBlockID("robot");
Block.createBlockWithRotation("robot", [
	{name: "робот", texture: [["machine", 0], ["machine", 0], ["machine", 0], ["robot", 0], ["machine", 0], ["machine", 0]], inCreative: true}
]);
MachineRegistry.registerPrototype(BlockID.robot, {
	defaultValues: {
		energy_storage: 2000,
		energy_consumption: 20,
		progress: 0,
		
		
	},
	getGuiScreen: function(){
		return guirobot;
		
		},
	
	setDefaultValues: function(){
		this.data.energy_storage = this.defaultValues.energy_storage;
		this.data.energy_consumption = this.defaultValues.energy_consumption;
		this.data.work_time = this.defaultValues.work_time;
		
	},
	tick: function()
	{
		
		
	}
	
	
	

	
		
		
	
	
})


//generic



Callback.addCallback("GenerateChunkUnderground", function(chunkX, chunkZ){
 for (var i = 0; i < 16; i++){

  var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 3, 70);
 if(Math.random() > 1/21) GenerationUtils.genMinable(coords.x, coords.y, coords.z, {
   id: BlockID.ore1,
   data: 0,
   size: 4,
   ratio: .4,
   checkerTile: 1,
   checkerMode: true
  });
 }




//Callback.addCallback("GenerateChunkUnderground", function(chunkX, chunkZ){
 for (var i = 0; i < 14; i++){
  var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 3, 60);
 if(Math.random() > 1/21) GenerationUtils.genMinable(coords.x, coords.y, coords.z, {
   id: BlockID.ore2,
   data: 0,
   size: 6,
   ratio: .4,
   checkerTile: 1,
   checkerMode: true
  });
 }
//});


//Callback.addCallback("GenerateChunkUnderground", function(chunkX, chunkZ){
 for (var i = 0; i < 18; i++){
  var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 3, 50);
 if(Math.random() > 1/21) GenerationUtils.genMinable(coords.x, coords.y, coords.z, {
   id: BlockID.ore3,
   data: 0,
   size: 4,
   ratio: .4,
   checkerTile: 1,
   checkerMode: true
  });
 }
//});


//Callback.addCallback("GenerateChunkUnderground", function(chunkX, chunkZ){
 for (var i = 0; i < 16; i++){
  var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 3, 60);
 if(Math.random() > 1/21) GenerationUtils.genMinable(coords.x, coords.y, coords.z, {
   id: BlockID.ore4,
   data: 0,
   size: 4,
   ratio: .4,
   checkerTile: 1,
   checkerMode: true
  });
 }
//});

//Callback.addCallback("GenerateChunkUnderground", function(chunkX, chunkZ){
 for (var i = 0; i < 11; i++){
  var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 3, 40);
 if(Math.random() > 1/21) GenerationUtils.genMinable(coords.x, coords.y, coords.z, {
   id: BlockID.ore5,
   data: 0,
   size: 2,
   ratio: .4,
   checkerTile: 1,
   checkerMode: true
  });
 }
//});



//Callback.addCallback("GenerateChunkUnderground", function(chunkX, chunkZ){
 for (var i = 0; i < 6; i++){
  var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 3, 10);
 if(Math.random() > 1/21) GenerationUtils.genMinable(coords.x, coords.y, coords.z, {
   id: BlockID.ore6,
   data: 0,
   size: 2,
   ratio: .4,
   checkerTile: 1,
   checkerMode: true
  });
 }
//});




//Callback.addCallback("GenerateChunkUnderground", function(chunkX, chunkZ){
 for (var i = 0; i < 11; i++){

  var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 3, 20);
 if(Math.random() > 1/21) GenerationUtils.genMinable(coords.x, coords.y, coords.z, {
   id: BlockID.ore7,
   data: 0,
   size: 4,
   ratio: .4,
   checkerTile: 1,
   checkerMode: true
  });
 }
//});




//Callback.addCallback("GenerateChunkUnderground", function(chunkX, chunkZ){
 for (var i = 0; i < 11; i++){

  var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 3, 20);
 if(Math.random() > 1/21) GenerationUtils.genMinable(coords.x, coords.y, coords.z, {
   id: BlockID.ore8,
   data: 0,
   size: 4,
   ratio: .4,
   checkerTile: 1,
   checkerMode: true
  });
 }
//});





//Callback.addCallback("GenerateChunkUnderground", function(chunkX, chunkZ){
 for (var i = 0; i < 11; i++){

  var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 3, 20);
 if(Math.random() > 1/21) GenerationUtils.genMinable(coords.x, coords.y, coords.z, {
   id: BlockID.ore9,
   data: 0,
   size: 4,
   ratio: .4,
   checkerTile: 1,
   checkerMode: true
  });
 }
});


//function and api







Callback.addCallback("ItemUse", function(coords, item, block){
x = coords.x;
y = coords.y;
z = coords.z;



});




Callback.addCallback("tick", function(){


});


//cable


IDRegistry.genBlockID("cable");
Block.createBlock("cable", [
	{name: "tile.cable.name", texture: [["cable", 0]], inCreative: false}
]);



function setupWireRender(id, width, groupName, preventSelfAdd) {
    var render = new ICRender.Model();
    BlockRenderer.setStaticICRender(id, 0, render);
   
    var boxes = [
        {side: [1, 0, 0], box: [0.5 + width / 2, 0.5 - width / 2, 0.5 - width / 2, 1, 0.5 + width / 2, 0.5 + width / 2]},
        {side: [-1, 0, 0], box: [0, 0.5 - width / 2, 0.5 - width / 2, 0.5 - width / 2, 0.5 + width / 2, 0.5 + width / 2]},
        {side: [0, 1, 0], box: [0.5 - width / 2, 0.5 + width / 2, 0.5 - width / 2, 0.5 + width / 2, 1, 0.5 + width / 2]},
        {side: [0, -1, 0], box: [0.5 - width / 2, 0, 0.5 - width / 2, 0.5 + width / 2, 0.5 - width / 2, 0.5 + width / 2]},
        {side: [0, 0, 1], box: [0.5 - width / 2, 0.5 - width / 2, 0.5 + width / 2, 0.5 + width / 2, 0.5 + width / 2, 1]},
        {side: [0, 0, -1], box: [0.5 - width / 2, 0.5 - width / 2, 0, 0.5 + width / 2, 0.5 + width / 2, 0.5 - width / 2]},
    ]
   
    var group = ICRender.getGroup(groupName);
    if (!preventSelfAdd) {
        group.add(id, -1);
    }
   
    for (var i in boxes) {
        var box = boxes[i];
       
        var model = BlockRenderer.createModel();
        model.addBox(box.box[0], box.box[1], box.box[2], box.box[3], box.box[4], box.box[5], id, 0);
       
        render.addEntry(model).asCondition(box.side[0], box.side[1], box.side[2], group, 0);
    }
   
    var model = BlockRenderer.createModel();
    model.addBox(0.5 - width / 2, 0.5 - width / 2, 0.5 - width / 2, 0.5 + width / 2, 0.5 + width / 2, 0.5 + width / 2, id, 0);
    render.addEntry(model);
    
    width = Math.max(width, 0.5);
    Block.setBlockShape(id, {x: 0.5 - width/2, y: 0.5 - width/2, z: 0.5 - width/2}, {x: 0.5 + width/2, y: 0.5 + width/2, z: 0.5 + width/2});
}

function setupBlockAsWire(id) {
	EU.registerWire(id);
}


setupBlockAsWire(BlockID.cable);
setupWireRender(BlockID.cable, 1/4, "ic-wire");

// drop 
Block.registerDropFunction("cable", function(){
	return [[ItemID.cable1, 1, 0]];
});

Item.registerUseFunction("cable1", function(coords, item, block){
	var place = coords.relative;
	if(GenerationUtils.isTransparentBlock(World.getBlockID(place.x, place.y, place.z))){
		World.setBlock(place.x, place.y, place.z, BlockID.cable);
		Player.setCarriedItem(item.id, item.count - 1, item.data);
		EnergyTypeRegistry.onWirePlaced();
	}
});

//craft
Recipes.addShaped({id: ItemID.SC, count: 1, data: 0}, [
		"xcx",
		"s#s",
		"ccc"
	], ['#',ItemID.ch0, 0, 'x', 331, 0, 's', ItemID.mc0, 0, 'c', 265, 0]);



Recipes.addShaped({id: ItemID.ch0, count: 1, data: 0}, [
		"cxc",
		"s#s",
		"cxc"
	], ['#',ItemID.tran, 0, 'x', 331, 0, 's', ItemID.mc0, 0, 'c', 265, 0]);
	
Recipes.addShaped({id: ItemID.tran, count: 1, data: 0}, [
		"ccc",
		"xsx",
		"ccc"
	], [ 'x', 331, 0, 's', 318, 0, 'c', 265, 0]);
	
	Recipes.addShaped({id: ItemID.mc0, count: 1, data: 0}, [
		"cxc",
		"###",
		"cxc"
	], ['#',ItemID.tran, 0, 'x', 331, 0, 's', ItemID.mc0, 0, 'c', 265, 0]);
	
	Recipes.addShaped({id: ItemID.ch1, count: 1, data: 0}, [
		"cxc",
		"s#s",
		"cxc"
	], ['#',ItemID.ch0, 0, 'x', 331, 0, 's', ItemID.mc0, 0, 'c', 265, 0]);
	
	Recipes.addShaped({id: ItemID.ch2, count: 1, data: 0}, [
		"cxc",
		"s#s",
		"cxc"
	], ['#',ItemID.ch1, 0, 'x', 266, 0, 's', ItemID.mc1, 0, 'c', 265, 0]);
	
	Recipes.addShaped({id: ItemID.ch3, count: 1, data: 0}, [
		"cxc",
		"s#s",
		"cxc"
	], ['#',ItemID.ch2, 0, 'x', 266, 0, 's', ItemID.mc2, 0, 'c', ItemID.ingot0, 0]);
	
	Recipes.addShaped({id: ItemID.mc1, count: 1, data: 0}, [
		"cxc",
		"#s#",
		"cxc"
	], ['#',ItemID.tran, 0, 'x', 331, 0, 's', ItemID.mc0, 0, 'c', 265, 0]);
	
	Recipes.addShaped({id: ItemID.mc2, count: 1, data: 0}, [
		"cxc",
		"#s#",
		"cxc"
	], ['#',ItemID.tran, 0, 'x', 266, 0, 's', ItemID.mc1, 0, 'c', ItemID.ingot0, 0]);
	
	Recipes.addShaped({id: ItemID.meg, count: 1, data: Item.getMaxDamage(ItemID.meg)}, [
		"ccc",
		"csc",
		"ccc"
	], [ 's', ItemID.ec1, 0, 'c', 265, 0]);
	
	Recipes.addShaped({id: BlockID.battareyblock, count: 1, data: 0}, [
		"ccc",
		"dsd",
		"ccc"
	], ['d',ItemID.cable1,0, 's', ItemID.meg, -1, 'c', 265, 0]);
	
	Recipes.addShaped({id: BlockID.AES, count: 1, data: 0}, [
		"ccc",
		"csc",
		"ccc"
	], ['s', ItemID.ingot4, 0, 'c', ItemID.ingot3, 0]);
	
	
	
	Recipes.addShaped({id: BlockID.Blaser, count: 1, data: 0}, [
		"ici",
		"lsl",
		"ici"
	], ['s', ItemID.ch2, 0, 'c', 42, 0,'i',ItemID.cable1,0,'l',ItemID.ec1,0]);
	
	Recipes.addShaped({id: BlockID.Bexp, count: 1, data: 0}, [
		"cic",
		"csc",
		"ccc"
	], ['s', ItemID.ec2, 0, 'c', 265, 0,'i',154,0]);
	
	Recipes.addShaped({id: BlockID.FTree, count: 1, data: 0}, [
		"ici",
		"dsi",
		"ici"
	], ['s',3, 0, 'i', 265, 0,'c',ItemID.cable1,0,'d',23,0]);
	
	
	
	Recipes.addFurnace(BlockID.ore1, ItemID.ingot1, 0); 
	Recipes.addFurnace(BlockID.ore2, ItemID.ingot0, 0); 
	Recipes.addFurnace(BlockID.ore3, ItemID.ingot2, 0); 
	Recipes.addFurnace(BlockID.ore4, ItemID.ingot3, 0); 
	Recipes.addFurnace(BlockID.ore5, ItemID.ingot4, 0); 
	Recipes.addFurnace(BlockID.ore6, ItemID.ingot5, 0); 
	
	
//tree
IDRegistry.genItemID("rubberSapling");
Item.createItem("rubberSapling", "сажанец гивеи", {name: "rubber_sapling", data: 0});

Item.registerUseFunction("rubberSapling", function(coords, item, tile){
	var place = coords.relative;
	var tile1 = World.getBlock(place.x, place.y, place.z);
	var tile2 = World.getBlock(place.x, place.y - 1, place.z);
	
	if (GenerationUtils.isTransparentBlock(tile1.id) && RUBBER_SAPLING_GROUND_TILES[tile2.id]){
		World.setBlock(place.x, place.y, place.z, BlockID.rubberTreeSapling);
		World.addTileEntity(place.x, place.y, place.z);
		Player.setCarriedItem(item.id, item.count - 1, item.data);
	}
});

IDRegistry.genBlockID("rubberTreeSapling");
Block.createBlock("rubberTreeSapling", [
	{name: "Rubber Tree Sapling", texture: [["empty", 0], ["empty", 0], ["empty", 0], ["empty", 0], ["empty", 0], ["empty", 0]], inCreative: false}
]);

Block.setBlockShape(BlockID.rubberTreeSapling, {x: 0.001, y: 0.001, z: 0.001}, {x: 0.999, y: 0.1, z: 0.999});
Block.registerDropFunction("rubberTreeSapling", function(){
	return [[ItemID.rubberSapling, 1, 0]];
});

TileEntity.registerPrototype(BlockID.rubberTreeSapling, {
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
			id: ItemID.rubberSapling,
			count: 1,
			data: 0,
			rotation: "x",
			size: this.data.size
		});
		this.animation1.load();
		
		this.animation2.describeItem({
			id: ItemID.rubberSapling,
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
			if (!RUBBER_SAPLING_GROUND_TILES[World.getBlockID(this.x, this.y - 1, this.z)]){
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
			RubberTreeGenerationHelper.generateRubberTree(this.x, this.y, this.z, true);
		}
	}
});






function destroyLeaves(x, y, z){
	var max = 0;
	while(World.getBlockID(x, y+max+1, z)==BlockID.rubberTreeLeaves){max++;}
	for(var yy = y; yy <= y+max; yy++){
		for(var xx = x-2; xx <= x+2; xx++){
			for(var zz = z-2; zz <= z+2; zz++){
				if(World.getBlockID(xx, yy, zz)==BlockID.rubberTreeLeaves){
					if(Math.random() < .075){
						World.drop(xx, yy, zz, ItemID.rubberSapling, 1, 0);
					}
					World.setBlock(xx, yy, zz, 0);
				}
			}
		}
	}
}

IDRegistry.genBlockID("rubberTreeLog");
Block.createBlock("rubberTreeLog", [
	{name: "древесина гивеи", texture: [["rubber_tree_log", 1], ["rubber_tree_log", 1], ["rubber_tree_log", 0], ["rubber_tree_log", 0], ["rubber_tree_log", 0], ["rubber_tree_log", 0]], inCreative: false}
], "opaque");
Block.registerDropFunction("rubberTreeLog", function(coords, blockID){
	destroyLeaves(coords.x, coords.y, coords.z);
	return [[blockID, 1, 0]];
});
Block.setDestroyTime(BlockID.rubberTreeLog, 2);
ToolAPI.registerBlockMaterial(BlockID.rubberTreeLog, "wood");

IDRegistry.genBlockID("rubberTreeLogLatex");
Block.createBlock("rubberTreeLogLatex", [
	{name: "tile.rubberTreeLogLatex.name", texture: [["rubber_tree_log", 1], ["rubber_tree_log", 1], ["rubber_tree_log", 2], ["rubber_tree_log", 0], ["rubber_tree_log", 0], ["rubber_tree_log", 0]], inCreative: false},
	{name: "tile.rubberTreeLogLatex.name", texture: [["rubber_tree_log", 1], ["rubber_tree_log", 1], ["rubber_tree_log", 0], ["rubber_tree_log", 2], ["rubber_tree_log", 0], ["rubber_tree_log", 0]], inCreative: false},
	{name: "tile.rubberTreeLogLatex.name", texture: [["rubber_tree_log", 1], ["rubber_tree_log", 1], ["rubber_tree_log", 0], ["rubber_tree_log", 0], ["rubber_tree_log", 2], ["rubber_tree_log", 0]], inCreative: false},
	{name: "tile.rubberTreeLogLatex.name", texture: [["rubber_tree_log", 1], ["rubber_tree_log", 1], ["rubber_tree_log", 0], ["rubber_tree_log", 0], ["rubber_tree_log", 0], ["rubber_tree_log", 2]], inCreative: false}
], "opaque");
Block.registerDropFunction("rubberTreeLogLatex", function(coords, blockID){
	destroyLeaves(coords.x, coords.y, coords.z);
	return [[BlockID.rubberTreeLog, 1, 0], [ItemID.latex, 1, 0]];
});
Block.setDestroyTime(BlockID.rubberTreeLogLatex, 2);
ToolAPI.registerBlockMaterial(BlockID.rubberTreeLogLatex, "wood");

IDRegistry.genBlockID("rubberTreeLeaves");
Block.createBlock("rubberTreeLeaves", [
	{name: "гивея", texture: [["rubber_tree_leaves", 0]], inCreative: false}
]);
Block.registerDropFunction("rubberTreeLeaves", function(){
	if(Math.random() < .075){
		return [[ItemID.rubberSapling, 1, 0]]
	}
	else {
		return [];
	}
});
Block.setDestroyTime(BlockID.rubberTreeLog, 0.2);
ToolAPI.registerBlockMaterial(BlockID.rubberTreeLeaves, "plant");

Recipes.addShaped({id: 5, count: 3, data: 3}, ["x"], ['x', BlockID.rubberTreeLog, -1]);



var RubberTreeGenerationHelper = {
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
		var resinHeight = -1;
		if(log.resin){
			resinHeight = parseInt(Math.random() * (height - 2)) + 1;
		}
		for(var ys = 0; ys < height; ys++){
			if(ys == resinHeight){
				World.setBlock(x, y + ys, z, log.resin, parseInt(Math.random()*4));
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

	generateRubberTree: function(x, y, z, activateTileEntity){
		RubberTreeGenerationHelper.generateCustomTree(x, y, z, {
			log: {
				id: BlockID.rubberTreeLog,
				data: 0,
				resin: BlockID.rubberTreeLogLatex
			},
			leaves: {
				id: BlockID.rubberTreeLeaves,
				data: 0
			},
			height: {
				min: 5,
				max: 7,
				start: 2 + parseInt(Math.random() * 2)
			},
			pike: 2 + parseInt(Math.random() * 1.5),
			radius: 2
		});
		if(activateTileEntity){
			return World.addTileEntity(x, y, z);
		}
	}
}


var ForestBiomeIDs = [4, 18, 27, 28];
var JungleBiomeIDs = [21, 22, 23, 149, 151];
var SwampBiomeIDs = [6, 134];

var RUBBER_TREE_BIOME_DATA = { };
if(__config__.access("rubber_tree_gen.forest_and_plains")){
	RUBBER_TREE_BIOME_DATA[1] = 0.005;
	for(var id in ForestBiomeIDs){
	RUBBER_TREE_BIOME_DATA[ForestBiomeIDs[id]] = 0.025;}
}
if(__config__.access("rubber_tree_gen.jungle")){
	for(var id in JungleBiomeIDs){
	RUBBER_TREE_BIOME_DATA[JungleBiomeIDs[id]] = 0.06;}
}
if(__config__.access("rubber_tree_gen.swamp")){
	for(var id in SwampBiomeIDs){
	RUBBER_TREE_BIOME_DATA[SwampBiomeIDs[id]] = 0.05;}
}

Callback.addCallback("GenerateChunk", function(chunkX, chunkZ){
	if(Math.random() < RUBBER_TREE_BIOME_DATA[World.getBiome((chunkX + 0.5) * 16, (chunkZ + 0.5) * 16)]){
		for(var i = 0; i < 1 + Math.random() * 6; i++){
			var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 64, 128);
			coords = GenerationUtils.findSurface(coords.x, coords.y, coords.z);
			if(World.getBlockID(coords.x, coords.y, coords.z) == 2){
				coords.y++;
				RubberTreeGenerationHelper.generateRubberTree(coords.x, coords.y, coords.z, false);
			}
		}
	}
});
IDRegistry.genItemID("treetap");
Item.createItem("treetap", "Treetap", {name: "treetap", data: 0}, {stack: 1});
Item.setMaxDamage(ItemID.treetap, 17);

Item.registerUseFunction("treetap", function(coords, item, block){
	if(block.id == BlockID.rubberTreeLogLatex && block.data == coords.side - 2){
		World.setBlock(coords.x, coords.y, coords.z, BlockID.rubberTreeLog);
		Player.setCarriedItem(item.id, ++item.data < 17 ? item.count : 0, item.data);
		Entity.setVelocity(
			World.drop(
				coords.relative.x + 0.5,
				coords.relative.y + 0.5,
				coords.relative.z + 0.5,
				ItemID.latex, 1 + parseInt(Math.random() * 3), 0
			),
			(coords.relative.x - coords.x) * 0.25,
			(coords.relative.y - coords.y) * 0.25,
			(coords.relative.z - coords.z) * 0.25
		);
	}
});

Recipes.addShaped({id: ItemID.treetap, count: 1, data: 0}, [
	" x ",
	"xxx",
	"x  "
], ['x', 5, -1]);





