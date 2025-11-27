/*
BUILD INFO:
  dir: dev
  target: main.js
  files: 9
*/



// file: header.js

IMPORT("StorageInterface");
const transferByTier = ICore.requireGlobal("transferByTier");
const recyclerBlacklist = ICore.requireGlobal("recyclerBlacklist");


IDRegistry.genItemID("plateSharp");
Item.createItem("plateSharp", "Sharpened Iron Plate", {name: "plate_sharp"});
Recipes.addShaped({id: ItemID.plateSharp}, ["aaa", "aba", "aaa"], ["a", 318, 0, "b", ItemID.plateIron, 0]);


const AdvMachine = {

	createBlock: function(id, name, tex, active){
		let i = 0;
		for(i = 6; i--;){
			tex[i] = [tex[i], 0];
		}
		IDRegistry.genBlockID(id);
		Block.createBlock(id, [{name: name, texture: tex, inCreative: true}]);
		ICore.ItemName.addTierTooltip(id, 2);
		ICore.Render.setStandartModel(BlockID[id], tex);
		ICore.Render.registerRotationModel(BlockID[id], 0, tex);
		for(i = 6; i--;){
			tex[i] = [tex[i][0], active[i]];
		}
		ICore.Render.registerRotationModel(BlockID[id], 4, tex);
		Block.registerDropFunction(id, function(coords, blockID, blockData, level){
			return ICore.Machine.getMachineDrop(coords, blockID, level, BlockID.machineBlockAdvanced);
		});
		ICRender.getGroup("item-pipe").add(BlockID[id], -1);
	},

	gui: {},

	createGUI: function(id, machine, name, content){

		content.standart = {
			header: {text: {text: name}},
			inventory: {standart: true},
			background: {color: android.graphics.Color.parseColor("#b3b3b3")}
		};

		content.params = {
			slot: "classic_slot",
			slot_inv: "classic_slot"
		};

		content.elements.slotEnergy.isValid = ICore.Machine.isValidEUStorage;

		if(machine){
			content.elements.slotSource.isValid = function(id, count, data){
				return ICore.Recipe.hasRecipeFor(machine, id, data);
			};
		}

		for(let key in content.elements){
			if(key.startsWith("slotResult")){
				content.elements[key].isValid = function(){return false};
			}
		}

		content.elements.slotUpgradeA = {type: "slot", x: 900, y: 150, isValid: ICore.Upgrade.isValidUpgrade};
		content.elements.slotUpgradeB = {type: "slot", x: 900, y: 210, isValid: ICore.Upgrade.isValidUpgrade};

		this.gui[id] = new UI.StandartWindow(content);

	},

	registerPrototype: function(id, prototype, useWater, special){

		prototype.defaultValues = {
			meta: 0,
			signal: false,
			energy_storage: 10000,
			power_tier: 2,
			heat: 0,
			progress: 0,
			isActive: false,
			isHeating: false
		};

		if(useWater){

			prototype.upgrades = ["redstone", "transformer", "energyStorage", "itemEjector", "itemPulling", "fluidPulling"];

			prototype.init = function(){
				ICore.Render.mapAtCoords(this.x, this.y, this.z, this.id, this.data.meta + (this.data.isActive ? 4 : 0));
				this.liquidStorage.setLimit("water", 8);
			};

			prototype.click = function(id, count, data){
				if(LiquidRegistry.getItemLiquid(id, data) == "water" && this.liquidStorage.getAmount("water") <= 7){
					const empty = LiquidRegistry.getEmptyItem(id, data);
					this.liquidStorage.addLiquid("water", 1);
					Player.decreaseCarriedItem();
					Player.addItemToInventory(empty.id, 1, empty.data);
					return true;
				}
			};

		}
		else{

			prototype.upgrades = ["redstone", "transformer", "energyStorage", "itemEjector", "itemPulling"];

			prototype.init = function(){
				ICore.Render.mapAtCoords(this.x, this.y, this.z, this.id, this.data.meta + (this.data.isActive ? 4 : 0));
				delete this.liquidStorage;
			};

			prototype.idleFunc = function(){
				this.data.progress = 0;
				if(this.data.isHeating && this.data.energy){
					this.data.heat < 10000 && this.data.heat++;
					this.data.energy--;
				}
				else{
					this.data.heat = Math.max(0, this.data.heat - 2);
				}
			};

		}

		prototype.getGuiScreen = function(){
			return AdvMachine.gui[this.blockID];
		};

		prototype.getEnergyStorage = function(){
			return this.data.energy_storage;
		};

		prototype.getTier = function(){
			return this.data.power_tier;
		};

		prototype.redstone = function(signal){
			this.data.signal = !!signal.power;
		};

		prototype.energyReceive = ICore.Machine.basicEnergyReceiveFunc;

		if(!special){

			prototype.checkSpace = function(num, item){
				let slot;
				let space = 0;
				for(let i = 0; i < num; i++){
					slot = this.container.getSlot("slotResult" + i);
					(!slot.id || slot.id == item.id && slot.data == (item.data || 0)) && (space += Item.getMaxStack(item.id) - slot.count);
				}
				return item.count <= space;
			};

			prototype.putResult = function(item){
				let count = item.count;
				let i = 0;
				let slot;
				let add = 0;
				while(count){
					slot = this.container.getSlot("slotResult" + (i++));
					(!slot.id || slot.id == item.id && slot.data == (item.data || 0)) && (add = Math.min(count, Item.getMaxStack(item.id) - slot.count), slot.id = item.id, slot.data = (item.data || 0), slot.count += add, count -= add);
				}
			};

		}

		prototype.setRender = function(){
			this.data.heat ? this.activate() : this.deactivate();
		};

		prototype.setupMachine = function(){
			this.data.power_tier = this.defaultValues.power_tier;
			this.data.energy_storage = this.defaultValues.energy_storage;
			this.data.isHeating = this.data.signal;
			ICore.Upgrade.executeUpgrades(this);
			const tier = this.getTier();
			this.data.energy += ICore.ChargeRegistry.getEnergyFrom(this.container.getSlot("slotEnergy"), "Eu", this.getEnergyStorage() - this.data.energy, transferByTier[tier], tier);
		};

		prototype.updateElements = function(modifierFunc, useWater){
			if(this.container.isOpened()){
				this.container.setScale("energyScale", this.data.energy / this.getEnergyStorage());
				this.container.setScale("progressScale", this.data.progress);
				this.container.setText("textInfo", modifierFunc ? modifierFunc(this.data.heat) : this.data.heat);
				useWater && this.liquidStorage.updateUiScale("liquidScale", "water");
			}
		};

		ICore.Machine.registerElectricMachine(id, prototype);
		ICore.Render.setRotationPlaceFunction(id);

	},

	createInterface: function(id, machine, resultSlotCount){
		const interface = {
			slots: {slotSource: {input: true}}
		};
		for(let i = 0;  i < resultSlotCount; i++){
			interface.slots["slotResult" + i] = {output: true};
		}
		if(machine){
			interface.isValidInput = function(item){
				return ICore.Recipe.hasRecipeFor(machine, item.id, item.data);
			};
		}
		StorageInterface.createInterface(id, interface);
	},

	isValidSource: function(machine){
		return function(id, count, data){
			return ICore.Recipe.hasRecipeFor(machine, id, data);
		}
	}

};




// file: machine/macerator.js

AdvMachine.createBlock("advMacerator", "Rotary Macerator", [
	"machine_advanced",
	"advMacerator_top",
	"machine_side",
	"advMacerator_front",
	"machine",
	"machine",
], [0, 1, 0, 1, 0, 0]);

Recipes.addShaped({id: BlockID.advMacerator}, ["aaa", "aba", "aca"], ["a", ItemID.plateSharp, 0, "b", BlockID.macerator, 0, "c", BlockID.machineBlockAdvanced, 0]);


AdvMachine.createGUI(BlockID.advMacerator, "macerator", "Rotary Macerator", {
	drawing: [
		{type: "bitmap", x: 510, y: 185, bitmap: "energy_small_background", scale: 3.2},
		{type: "bitmap", x: 575, y: 185, bitmap: "macerator_bar_background", scale: 3.2},
		{type: "text", x: 360, y: 160, text: "Speed:"},
		{type: "text", x: 360, y: 240, text: "RPM"}
	],
	elements: {
		energyScale: {type: "scale", x: 510, y: 185, direction: 1, bitmap: "energy_small_scale", scale: 3.2},
		progressScale: {type: "scale", x: 575, y: 185, bitmap: "macerator_bar_scale", scale: 3.2},
		slotEnergy: {type: "slot", x: 500, y: 240},
		slotSource: {type: "slot", x: 500, y: 120},
		slotResult0: {type: "slot", x: 660, y: 180},
		slotResult1: {type: "slot", x: 720, y: 180},
		textInfo: {type: "text", x: 360, y: 180}
	}
});


AdvMachine.registerPrototype(BlockID.advMacerator, {

	getStartSoundFile: function(){
		return "Machines/MaceratorOp.ogg";
	},
	getInterruptSoundFile: function(){
		return "Machines/InterruptOne.ogg";
	},

	tick: function(){

		const source = this.container.getSlot("slotSource");
		const result = ICore.Recipe.getRecipeResult("macerator", source.id, source.data);

		this.setupMachine();

		if(result && this.data.energy >= 16 && this.checkSpace(2, result)){
			this.data.energy -= 16;
			this.data.heat < 10000 && this.data.heat++;
			this.data.progress += this.data.heat / 100000;
			this.startPlaySound();
			if(this.data.progress >= 1){
				this.putResult(result);
				source.count--;
				this.container.validateSlot("slotSource");
				this.data.progress = 0;
			}
		}
		else{
			this.idleFunc();
		}

		this.setRender();
		this.updateElements();

		if(this.data.isActive && !(World.getThreadTime() & 7)){
			for(let i = 4; i--;){
				Particles.addParticle(4, this.x + 0.2 + Math.random() * 0.6, this.y + 0.9 + Math.random() * 0.2, this.z + 0.2 + Math.random() * 0.6, 0, 0, 0);
			}
		}

	}

});


AdvMachine.createInterface(BlockID.advMacerator, "macerator", 2);




// file: machine/compressor.js

AdvMachine.createBlock("advCompressor", "Singularity Compressor", [
	"machine_advanced",
	"advCompressor_top",
	"machine",
	"advCompressor_front",
	"advCompressor_right",
	"advCompressor_left",
], [0, 1, 0, 1, 0, 0]);

Recipes.addShaped({id: BlockID.advCompressor}, ["aaa", "aba", "aca"], ["a", 49, 0, "b", BlockID.compressor, 0, "c", BlockID.machineBlockAdvanced, 0]);


AdvMachine.createGUI(BlockID.advCompressor, "compressor", "Singularity Compressor", {
	drawing: [
		{type: "bitmap", x: 510, y: 185, bitmap: "energy_small_background", scale: 3.2},
		{type: "bitmap", x: 575, y: 185, bitmap: "compressor_bar_background", scale: 3.2},
		{type: "text", x: 360, y: 160, text: "Pressure:"},
		{type: "text", x: 360, y: 240, text: "Gibbl"}
	],
	elements: {
		energyScale: {type: "scale", x: 510, y: 185, direction: 1, bitmap: "energy_small_scale", scale: 3.2},
		progressScale: {type: "scale", x: 575, y: 185, bitmap: "compressor_bar_scale", scale: 3.2},
		slotEnergy: {type: "slot", x: 500, y: 240},
		slotSource: {type: "slot", x: 500, y: 120},
		slotResult0: {type: "slot", x: 660, y: 180},
		textInfo: {type: "text", x: 360, y: 180}
	}
});


AdvMachine.registerPrototype(BlockID.advCompressor, {

	getStartSoundFile: function(){
		return "Machines/CompressorOp.ogg";
	},
	getInterruptSoundFile: function(){
		return "Machines/InterruptOne.ogg";
	},

	tick: function(){

		const source = this.container.getSlot("slotSource");
		const result = ICore.Recipe.getRecipeResult("compressor", source.id, source.data);

		this.setupMachine();

		if(result && (!result.sourceCount || source.count >= result.sourceCount) && this.data.energy >= 16 && this.checkSpace(1, result)){
			this.data.energy -= 16;
			this.data.heat < 10000 && this.data.heat++;
			this.data.progress += this.data.heat / 100000;
			this.startPlaySound();
			if(this.data.progress >= 1){
				this.putResult(result);
				source.count -= result.sourceCount;
				this.container.validateSlot("slotSource");
				this.data.progress = 0;
			}
		}
		else{
			this.idleFunc();
		}

		this.setRender();
		this.updateElements(function(heat){return heat * 9});

	}

});


AdvMachine.createInterface(BlockID.advCompressor, "compressor", 1);




// file: machine/extractor.js

AdvMachine.createBlock("advExtractor", "Centrifuge Extractor", [
	"machine_advanced",
	"advExtractor_top",
	"machine_advanced",
	"advExtractor_front",
	"advExtractor_side",
	"advExtractor_side",
], [0, 0, 0, 1, 1, 1]);

Recipes.addShaped({id: BlockID.advExtractor}, ["aaa", "aba", "aca"], ["a", ItemID.treetap, 0, "b", BlockID.extractor, 0, "c", BlockID.machineBlockAdvanced, 0]);


AdvMachine.createGUI(BlockID.advExtractor, "extractor", "Centrifuge Extractor", {
	drawing: [
		{type: "bitmap", x: 510, y: 185, bitmap: "energy_small_background", scale: 3.2},
		{type: "bitmap", x: 575, y: 185, bitmap: "extractor_bar_background", scale: 3.2},
		{type: "text", x: 360, y: 160, text: "Speed:"},
		{type: "text", x: 360, y: 240, text: "cm/s"}
	],
	elements: {
		energyScale: {type: "scale", x: 510, y: 185, direction: 1, bitmap: "energy_small_scale", scale: 3.2},
		progressScale: {type: "scale", x: 575, y: 185, bitmap: "extractor_bar_scale", scale: 3.2},
		slotEnergy: {type: "slot", x: 500, y: 240},
		slotSource: {type: "slot", x: 500, y: 120},
		slotResult0: {type: "slot", x: 660, y: 180},
		slotResult1: {type: "slot", x: 720, y: 180},
		slotResult2: {type: "slot", x: 780, y: 180},
		textInfo: {type: "text", x: 360, y: 180}
	}
});


AdvMachine.registerPrototype(BlockID.advExtractor, {

	getStartSoundFile: function(){
		return "Machines/ExtractorOp.ogg";
	},
	getInterruptSoundFile: function(){
		return "Machines/InterruptOne.ogg";
	},

	tick: function(){

		const source = this.container.getSlot("slotSource");
		const result = ICore.Recipe.getRecipeResult("extractor", source.id, source.data);

		this.setupMachine();

		if(result && this.data.energy >= 16 && this.checkSpace(3, result)){
			this.data.energy -= 16;
			this.data.heat < 10000 && this.data.heat++;
			this.data.progress += this.data.heat / 100000;
			this.startPlaySound();
			if(this.data.progress >= 1){
				this.putResult(result);
				source.count--;
				this.container.validateSlot("slotSource");
				this.data.progress = 0;
			}
		}
		else{
			this.idleFunc();
		}

		this.setRender();
		this.updateElements();

	}

});


AdvMachine.createInterface(BlockID.advExtractor, "extractor", 3);




// file: machine/recycler.js

AdvMachine.createBlock("advRecycler", "Compacting Recycler", [
	"machine_advanced",
	"advMacerator_top",
	"machine",
	"advRecycler_front",
	"advRecycler_right",
	"advRecycler_left",
], [0, 1, 0, 1, 0, 0]);

Recipes.addShaped({id: BlockID.advRecycler}, ["aaa", "aba", "aca"], ["a", 33, -1, "b", BlockID.recycler, 0, "c", BlockID.machineBlockAdvanced, 0]);


AdvMachine.createGUI(BlockID.advRecycler, "", "Compacting Recycler", {
	drawing: [
		{type: "bitmap", x: 510, y: 185, bitmap: "energy_small_background", scale: 3.2},
		{type: "bitmap", x: 575, y: 185, bitmap: "recycler_bar_background", scale: 3.2},
		{type: "text", x: 360, y: 160, text: "Pressure:"},
		{type: "text", x: 360, y: 240, text: "Gibbl"}
	],
	elements: {
		energyScale: {type: "scale", x: 510, y: 185, direction: 1, bitmap: "energy_small_scale", scale: 3.2},
		progressScale: {type: "scale", x: 575, y: 185, bitmap: "recycler_bar_scale", scale: 3.2},
		slotEnergy: {type: "slot", x: 500, y: 240},
		slotSource: {type: "slot", x: 500, y: 120},
		slotResult0: {type: "slot", x: 660, y: 180},
		textInfo: {type: "text", x: 360, y: 180}
	}
});


AdvMachine.registerPrototype(BlockID.advRecycler, {

	getStartSoundFile: function(){
		return "Machines/RecyclerOp.ogg";
	},
	getInterruptSoundFile: function(){
		return "Machines/InterruptOne.ogg";
	},

	tick: function(){

		const source = this.container.getSlot("slotSource");

		this.setupMachine();

		if(source.id && this.data.energy >= 16 && this.checkSpace(1, {id: ItemID.scrap, count: 1})){
			this.data.energy -= 16;
			this.data.heat < 10000 && this.data.heat++;
			this.data.progress += this.data.heat / 100000 * 12;
			this.startPlaySound();
			if(this.data.progress >= 1){
				Math.random() < 0.125 && !~recyclerBlacklist.indexOf(source.id) && this.putResult({id: ItemID.scrap, count: 1});
				source.count--;
				this.container.validateSlot("slotSource");
				this.data.progress = 0;
			}
		}
		else{
			this.idleFunc();
		}

		this.setRender();
		this.updateElements(function(heat){return heat * 9});

	}

});


AdvMachine.createInterface(BlockID.advRecycler, "", 1);




// file: machine/extruder.js

AdvMachine.createBlock("advExtruder", "Liquescent Extruder", [
	"machine_advanced",
	"advExtruder_top",
	"machine_side",
	"advExtruder_front",
	"machine",
	"machine",
], [0, 1, 0, 1, 0, 0]);

Recipes.addShaped({id: BlockID.advExtruder}, ["aaa", "aba", "aca"], ["a", ItemID.casingIron, 0, "b", BlockID.metalFormer, 0, "c", BlockID.machineBlockAdvanced, 0]);
//a: Iron Fence


AdvMachine.createGUI(BlockID.advExtruder, "metalFormer2", "Liquescent Extruder", {
	drawing: [
		{type: "bitmap", x: 510, y: 185, bitmap: "energy_small_background", scale: 3.2},
		{type: "bitmap", x: 565, y: 183, bitmap: "extruder_bar_background", scale: 3.2},
		{type: "text", x: 360, y: 160, text: "Heat:"}
	],
	elements: {
		energyScale: {type: "scale", x: 510, y: 185, direction: 1, bitmap: "energy_small_scale", scale: 3.2},
		progressScale: {type: "scale", x: 565, y: 183, bitmap: "extruder_bar_scale", scale: 3.2},
		slotEnergy: {type: "slot", x: 500, y: 240},
		slotSource: {type: "slot", x: 500, y: 120},
		slotResult0: {type: "slot", x: 660, y: 180},
		slotResult1: {type: "slot", x: 720, y: 180},
		slotResult2: {type: "slot", x: 780, y: 180},
		textInfo: {type: "text", x: 360, y: 180}
	}
});


AdvMachine.registerPrototype(BlockID.advExtruder, {

	tick: function(){

		const source = this.container.getSlot("slotSource");
		const result = ICore.Recipe.getRecipeResult("metalFormer2", source.id);

		this.setupMachine();

		if(result && this.data.energy >= 24 && this.checkSpace(3, result)){
			this.data.energy -= 24;
			this.data.heat < 10000 && this.data.heat++;
			this.data.progress += this.data.heat / 100000;
			if(this.data.progress >= 1){
				this.putResult(result);
				source.count--;
				this.container.validateSlot("slotSource");
				this.data.progress = 0;
			}
		}
		else{
			this.idleFunc();
		}

		this.setRender();
		this.updateElements(function(heat){return (heat / 100 | 0) + "%"});

	}

});


AdvMachine.createInterface(BlockID.advExtruder, "metalFormer2", 3);




// file: machine/roller.js

AdvMachine.createBlock("advRoller", "Impellerized Roller", [
	"machine_advanced",
	"machine_advanced",
	"machine_side",
	"advRoller_front",
	"machine",
	"machine",
], [0, 0, 0, 1, 0, 0]);

Recipes.addShaped({id: BlockID.advRoller}, ["aaa", "aba", "aca"], ["a", ItemID.craftingHammer, 0, "b", BlockID.metalFormer, 0, "c", BlockID.machineBlockAdvanced, 0]);


AdvMachine.createGUI(BlockID.advRoller, "metalFormer0", "Impellerized Roller", {
	drawing: [
		{type: "bitmap", x: 510, y: 185, bitmap: "energy_small_background", scale: 3.2},
		{type: "bitmap", x: 565, y: 183, bitmap: "extruder_bar_background", scale: 3.2},
		{type: "text", x: 360, y: 160, text: "Pressure:"},
		{type: "text", x: 360, y: 240, text: "Gibbl"}
	],
	elements: {
		energyScale: {type: "scale", x: 510, y: 185, direction: 1, bitmap: "energy_small_scale", scale: 3.2},
		progressScale: {type: "scale", x: 565, y: 183, bitmap: "extruder_bar_scale", scale: 3.2},
		slotEnergy: {type: "slot", x: 500, y: 240},
		slotSource: {type: "slot", x: 500, y: 120},
		slotResult0: {type: "slot", x: 660, y: 180},
		textInfo: {type: "text", x: 360, y: 180}
	}
});


AdvMachine.registerPrototype(BlockID.advRoller, {

	tick: function(){

		const source = this.container.getSlot("slotSource");
		const result = ICore.Recipe.getRecipeResult("metalFormer0", source.id);

		this.setupMachine();

		if(result && this.data.energy >= 24 && this.checkSpace(1, result)){
			this.data.energy -= 24;
			this.data.heat < 10000 && this.data.heat++;
			this.data.progress += this.data.heat / 100000;
			if(this.data.progress >= 1){
				this.putResult(result);
				source.count--;
				this.container.validateSlot("slotSource");
				this.data.progress = 0;
			}
		}
		else{
			this.idleFunc();
		}

		this.setRender();
		this.updateElements();

	}

});


AdvMachine.createInterface(BlockID.advRoller, "metalFormer0", 1);




// file: machine/cutter.js

AdvMachine.createBlock("advCutter", "Water-Jet Cutter", [
	"advCutter_bottom",
	"machine_advanced",
	"machine_side",
	"advCutter_front",
	"machine",
	"machine",
], [1, 0, 0, 1, 0, 0]);

Recipes.addShaped({id: BlockID.advCutter}, ["aaa", "aba", "aca"], ["a", ItemID.cutter, 0, "b", BlockID.metalFormer, 0, "c", BlockID.machineBlockAdvanced, 0]);


AdvMachine.createGUI(BlockID.advCutter, "metalFormer1", "Water-Jet Cutter", {
	drawing: [
		{type: "bitmap", x: 500, y: 120, bitmap: "liquid_bar", scale: 3.2},
		{type: "bitmap", x: 590, y: 185, bitmap: "energy_small_background", scale: 3.2},
		{type: "bitmap", x: 650, y: 185, bitmap: "arrow_bar_background", scale: 3.2},
		{type: "text", x: 360, y: 160, text: "Pressure:"},
		{type: "text", x: 360, y: 240, text: "Gibbl"}
	],
	elements: {
		liquidScale: {type: "scale", x: 513, y: 133, direction: 1, bitmap: "gui_water_scale", overlay: "gui_liquid_storage_overlay", scale: 3.2},
		energyScale: {type: "scale", x: 590, y: 185, direction: 1, bitmap: "energy_small_scale", scale: 3.2},
		progressScale: {type: "scale", x: 650, y: 185, bitmap: "arrow_bar_scale", scale: 3.2},
		slotEnergy: {type: "slot", x: 580, y: 240},
		slotSource: {type: "slot", x: 580, y: 120},
		slotResult0: {type: "slot", x: 740, y: 180},
		textInfo: {type: "text", x: 360, y: 180}
	}
});


AdvMachine.registerPrototype(BlockID.advCutter, {

	idleFunc: function(amount){
		this.data.progress = 0;
		if(this.data.isHeating && this.data.energy && this.liquidStorage.getAmount("water") >= amount){
			this.data.energy--;
			this.liquidStorage.getLiquid("water", amount);
			this.data.heat < 10000 && this.data.heat++;
		}
		else{
			this.data.heat = Math.max(0, this.data.heat - 2);
		}
	},

	tick: function(){

		const source = this.container.getSlot("slotSource");
		const result = ICore.Recipe.getRecipeResult("metalFormer1", source.id);
		const amount = (this.data.heat / 10000 * 2 | 0) / 1000;

		this.setupMachine();

		if(result && this.data.energy >= 24 && this.checkSpace(1, result) && this.liquidStorage.getAmount("water") >= 0.5){
			this.data.energy -= 24;
			this.liquidStorage.getLiquid("water", amount);
			this.data.heat < 10000 && this.data.heat++;
			this.data.progress += this.data.heat / 100000;
			if(this.data.progress >= 1){
				this.putResult(result);
				source.count--;
				this.container.validateSlot("slotSource");
				this.liquidStorage.getLiquid("water", 0.5);
				this.data.progress = 0;
			}
		}
		else{
			this.idleFunc(amount, 1);
		}

		this.setRender();
		this.updateElements(null, true);

	}

}, true);


AdvMachine.createInterface(BlockID.advCutter, "metalFormer1", 1);




// file: machine/washer.js

AdvMachine.createBlock("advWasher", "Thermal Washer", [
	"machine_advanced",
	"machine_advanced",
	"advWasher_back",
	"advWasher_front",
	"advWasher_side",
	"advWasher_side",
], [0, 0, 1, 1, 1, 1]);

Recipes.addShaped({id: BlockID.advWasher}, ["aaa", "aba", "aca"], ["a", ItemID.dustSulfur, 0, "b", BlockID.oreWasher, 0, "c", BlockID.machineBlockAdvanced, 0]);


AdvMachine.createGUI(BlockID.advWasher, "oreWasher", "Thermal Washer", {
	drawing: [
		{type: "bitmap", x: 500, y: 120, bitmap: "liquid_bar", scale: 3.2},
		{type: "bitmap", x: 810, y: 196, bitmap: "energy_small_background", scale: 3.2},
		{type: "bitmap", x: 564, y: 162, bitmap: "washer_bar_background", scale: 3.2},
		{type: "text", x: 360, y: 160, text: "Heat:"}
	],
	elements: {
		liquidScale: {type: "scale", x: 513, y: 133, direction: 1, bitmap: "gui_water_scale", overlay: "gui_liquid_storage_overlay", scale: 3.2},
		energyScale: {type: "scale", x: 810, y: 196, direction: 1, bitmap: "energy_small_scale", scale: 3.2},
		progressScale: {type: "scale", x: 634, y: 178, bitmap: "ore_washer_bar_scale", scale: 3.2},
		slotEnergy: {type: "slot", x: 800, y: 251},
		slotSource: {type: "slot", x: 638, y: 107},
		slotResult0: {type: "slot", x: 578, y: 251},
		slotResult1: {type: "slot", x: 638, y: 251},
		slotResult2: {type: "slot", x: 698, y: 251},
		textInfo: {type: "text", x: 360, y: 180}
	}
});

AdvMachine.registerPrototype(BlockID.advWasher, {

	nullWater: false,

	checkSpace: function(result){
		let slot;
		let id = 0;
		let count = 0;
		for(let i = 3; i--;){
			slot = this.container.getSlot("slotResult" + i);
			id = result[i * 2];
			count = result[i * 2 + 1];
			if(!id){
				continue;
			}
			if(slot.id && (slot.id != id || slot.count + count > Item.getMaxStack(id))){
				return false;
			}
		}
		return true;
	},

	putResult: function(result){
		let slot;
		let id = 0;
		let count = 0;
		for(let i = 3; i--;){
			slot = this.container.getSlot("slotResult" + i);
			id = result[i * 2];
			count = result[i * 2 + 1];
			if(!id){
				continue;
			}
			slot.id = id;
			slot.count += count;
		}
	},

	idleFunc: function(amount){
		this.data.progress = 0;
		if(this.data.isHeating && this.data.energy >= 6){
			this.data.energy -= 6;
			this.liquidStorage.getLiquid("water", amount);
			this.data.heat < 10000 && this.data.heat++;
		}
		else{
			this.data.heat = Math.max(0, this.data.heat - 2);
		}
	},

	tick: function(){

		const water = this.liquidStorage.getAmount("water");

		if(this.nullWater){
			if(water){
				if(this.data.heat >= 1000){
					this.deactivate();
					World.removeTileEntity(this.x, this.y, this.z);
					World.setBlock(this.x, this.y, this.z, 0);
					for(let i = 8; i--;){
						Particles.addParticle(14, this.x + Math.random() * 2, this.y + Math.random() * 2, this.z + Math.random() * 2, 0, 0, 0);
					}
				}
				else{
					this.nullWater = false;
				}
			}
		}
		else{
			water || (this.nullWater = true);
		}

		const source = this.container.getSlot("slotSource");
		const result = ICore.Recipe.getRecipeResult("oreWasher", source.id, source.data);
		const amount = (this.data.heat / 10000 * 5 | 0) / 1000;

		this.setupMachine();

		if(result && this.data.energy >= 48 && this.checkSpace(result) && this.liquidStorage.getAmount("water") >= 0.5){
			this.data.energy -= 48;
			this.liquidStorage.getLiquid("water", amount);
			this.data.heat < 10000 && this.data.heat++;
			this.data.progress += this.data.heat / 100000;
			if(this.data.progress >= 1){
				this.putResult(result);
				source.count--;
				this.container.validateSlot("slotSource");
				this.liquidStorage.getLiquid("water", 0.5);
				this.data.progress = 0;
			}
		}
		else{
			this.idleFunc(amount, 6);
		}

		this.setRender();
		this.updateElements(function(heat){return (heat / 100 | 0) + "%"}, true);

	}

}, true, true);


AdvMachine.createInterface(BlockID.advWasher, "oreWasher", 3);




