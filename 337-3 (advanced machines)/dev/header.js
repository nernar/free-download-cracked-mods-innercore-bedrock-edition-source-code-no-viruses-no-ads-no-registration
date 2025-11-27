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