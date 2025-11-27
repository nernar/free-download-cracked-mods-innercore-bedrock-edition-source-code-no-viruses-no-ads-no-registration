TileEntity.registerPrototype(BlockID.kiln, {
	defaultValues: {
		meta: 0,
        progress: 0,
		burn: 0,
		burnMax: 0,
		isActive: false
	},

	getGuiScreen: function(){
		return UI_CERAMIC_FURNACE;
	},
	
	addTransportedItem: function(self, item, direction){
		var slot = this.container.getSlot("slotSource");
		if(slot.id==0 || slot.id==item.id && slot.data==item.data && slot.count < 64){
			var add = Math.min(item.count, 64 - slot.count);
			item.count -= add;
			slot.id = item.id;
			slot.data = item.data;
			slot.count += add;
			if(!item.count){return;}
		}
		
		var slot = this.container.getSlot("slotFuel");
		if(Recipes.getFuelBurnDuration(item.id, item.data) && (slot.id==0 || slot.id==item.id && slot.data==item.data && slot.count < 64)){
			var add = Math.min(item.count, 64 - slot.count);
			item.count -= add;
			slot.id = item.id;
			slot.data = item.data;
			slot.count += add;
		}
	},
	
	getTransportSlots: function(){
		return {input: ["slotSource", "slotFuel"], output: ["slotResult"]};
	},
	
	tick: function(){
		var sourceSlot = this.container.getSlot("slotSource");
		var result = Recipe.getCeramicFurnaceRecipe(sourceSlot);
		
		if(this.data.burn == 0 && result){
			this.data.burn = this.data.burnMax = this.getFuel("slotFuel");
		}
		
		if(this.data.burn > 0 && result){
			var resultSlot = this.container.getSlot("slotResult");
			if((resultSlot.id == result.id && resultSlot.data == result.data && resultSlot.count < 64 || resultSlot.id == 0) && this.data.progress++ >= 160){
				sourceSlot.count--;
				resultSlot.id = result.id;
				resultSlot.data = result.data || 0;
				resultSlot.count++;
				this.container.validateAll();
				this.data.progress = 0;
			}
		}
		else{
			this.data.progress = 0;
		}
		
		if(this.data.burn > 0){
			this.data.burn--;
		}
		
		this.container.setScale("burningScale", this.data.burn / this.data.burnMax || 0);
		this.container.setScale("progressScale", this.data.progress / 160);
	},
	
	getFuel: function(slotName){
		var fuelSlot = this.container.getSlot(slotName);
		if(fuelSlot.id > 0){
			var burn = Recipes.getFuelBurnDuration(fuelSlot.id, fuelSlot.data);
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
	}
});