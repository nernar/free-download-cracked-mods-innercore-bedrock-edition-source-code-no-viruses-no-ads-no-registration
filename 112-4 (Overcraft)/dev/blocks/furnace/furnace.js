IDRegistry.genBlockID("adamantiumFurnace");
Block.createBlockWithRotation("adamantiumFurnace", [
	{name: "Adamantium furnace", texture: [["adamant_side", 0], ["adamant_top", 0], ["adamant_side", 0], ["adamant_front", 0], ["adamant_side", 0], ["adamant_side", 0]], inCreative: true}
]);
MachineRenderer.setStandartModel(BlockID.adamantiumFurnace, [["adamant_side", 0], ["adamant_top", 0], ["adamant_side", 0], ["adamant_front", 0], ["adamant_side", 0], ["adamant_side", 0]], true);
MachineRenderer.registerRenderModel(BlockID.adamantiumFurnace, [["adamant_side", 0], ["adamant_top", 0], ["adamant_side", 0], ["adamant_active", 0], ["adamant_side", 0], ["adamant_side", 0]], true);

Callback.addCallback("PostLoaded", function(){
	Recipes.addShaped({id: BlockID.adamantiumFurnace, count: 1, data: 0}, [
		" a ",
		"aba",
		"aaa"
	], ['a', ItemID.ingotAdamantium, 0, 'b', 61, 0]);
});


var guiAdamantiumFurnace = new UI.StandartWindow({
	standart: {
		header: {text: {text: "Adamantium Furnace"}},
		inventory: {standart: true},
		background: {standart: true}
	},
	
	drawing: [
		{type: "bitmap", x: 530, y: 146, bitmap: "furnace_bar_background", scale: 3.2},
		{type: "bitmap", x: 450, y: 150, bitmap: "fire_background", scale: 3.2}
	],
	
	elements: {
		"progressScale": {type: "scale", x: 530, y: 146, direction: 0, value: 0.5, bitmap: "furnace_bar_scale", scale: 3.2},
		"burningScale": {type: "scale", x: 450, y: 150, direction: 1, value: 0.5, bitmap: "fire_scale", scale: 3.2},
		"slotSource": {type: "slot", x: 441, y: 75},
		"slotFuel": {type: "slot", x: 441, y: 212},
		"slotResult": {type: "slot", x: 625, y: 142},
	}
});

MachineRegistry.registerPrototype(BlockID.adamantiumFurnace, {
defaultValues: {
		progress: 0,
		burn: 0,
		burnMax: 0,
		isActive: false
	},

getGuiScreen: function(){
		return guiAdamantiumFurnace;
	},
	
		addTransportedItem: function(self, item, direction){
		var fuelSlot = this.container.getSlot("slotFuel");
		if(ItemID.Synol && (fuelSlot.id==0 || fuelSlot.id==item.id && fuelSlot.data==item.data && fuelSlot.count < 64)){
			var add = Math.min(item.count, 64 - slotFuel.count);
			item.count -= add;
			fuelSlot.id = item.id;
			fuelSlot.data = item.data;
			fuelSlot.count += add;
			if(!item.count){return;}
		}
		
		var sourceSlot = this.container.getSlot("slotSource");
		if(sourceSlot.id==0 || sourceSlot.id==item.id && sourceSlot.data==item.data && sourceSlot.count < 64){
			var add = Math.min(item.count, 64 - sourceSlot.count);
			item.count -= add;
			sourceSlot.id = item.id;
			sourceSlot.data = item.data;
			sourceSlot.count += add;
			if(!item.count){return;}
		}
	},
	
	
	tick: function(){
		var sourceSlot = this.container.getSlot("slotSource");
		var result = Recipes.getFurnaceRecipeResult(sourceSlot.id, "iron");
		
		if(this.data.burn > 0){
			this.data.burn--;
		}
		if(this.data.burn==0 && result){
			this.data.burn = this.data.burnMax = this.getFuel("slotFuel");
		}
		
		if(result && this.data.burn > 0){
			if(__config__.access("Furnace sounds") == true){
			   Music.playSound('furnace.ogg');
            }
			var resultSlot = this.container.getSlot("slotResult");
			if((resultSlot.id == result.id && resultSlot.data == result.data && resultSlot.count < 64 || resultSlot.id == 0) && this.data.progress++ >= 120){
				sourceSlot.count--;
				resultSlot.id = result.id;
				resultSlot.data = result.data;
				resultSlot.count++;
				this.container.validateAll();
				this.data.progress = 0;
			}
		}
		else{
			this.data.progress = 0;
		}
		
		if(this.data.burn > 0){
			this.activate();
		}else{
			this.deactivate();
		}
		
		this.container.setScale("burningScale", this.data.burn / this.data.burnMax || 0);
		this.container.setScale("progressScale", this.data.progress / 120);
	},
	
	getFuel: function(slotName){
		var fuelSlot = this.container.getSlot(slotName);
		if(fuelSlot.id > 0){
			var burn = ItemID.Synol;
			if(burn){
				if(LiquidRegistry.getItemLiquid(fuelSlot.id, fuelSlot.data)){
					var empty = LiquidRegistry.getEmptyItem(fuelSlot.id, fuelSlot.data);
					fuelSlot.id = empty.id;
					fuelSlot.data = empty.data;
					return burn;
				}
				fuelSlot.count--;
				this.container.validateSlot(slotName);
				return burn;
			}
		}
		return 0;
	},
	
	init: MachineRegistry.initModel,
	activate: MachineRegistry.activateMachine,
	deactivate: MachineRegistry.deactivateMachine,
});