TileEntity.registerPrototype(BlockID.furnaceCampfireBlock, {
	defaultValues: {
		meta: 0,
		progress: 0,
		burn: 0,
		burnMax: 0,
		isActive: false
	},

    getGuiScreen: function () {
        return UI_CAMPFIRE;
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

    init: function () {
        if (this.data.isActive) {
            BlockRenderer.mapAtCoords(this.x, this.y, this.z, CampfireEFFECTRENDER);
        }
    },

    click: function (id, count, data) {
        if (ItemDictionary.isItemInCategory(id, "minecraft:tool.fire") && !this.data.isActive) {
            Game.prevent();
            this.getGuiScreen = function () {
                return null;
            };
            this.data.isActive = true;
            BlockRenderer.mapAtCoords(this.x, this.y, this.z, CampfireEFFECTRENDER);

            if (id == 50) Player.decreaseCarriedItem(1);
            if (id == 259) ToolAPI.breakCarriedTool(1);
            if (id == ItemID.fireIgniter) ToolAPI.breakCarriedTool(1);
        }
        else if (id == 325 && data == 0 && this.data.isActive) {
            Game.prevent();
            this.getGuiScreen = function () {
                return null;
            }
            this.data.isActive = false;
            BlockRenderer.unmapAtCoords(this.x, this.y, this.z);
            Player.setCarriedItem(325, 1, 0);
        }
        else {
            this.getGuiScreen = function () { return UI_CAMPFIRE; };
        }
    },

	tick: function(){
		var sourceSlot = this.container.getSlot("slotSource");
		var result = Recipe.getCampfireRecipe(sourceSlot);
		
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
            if (burn) {
                if (!LiquidRegistry.getItemLiquid(fuelSlot.id, fuelSlot.data)) {
                    fuelSlot.count--;
                    this.container.validateSlot(slotName);
                    return burn;
                }
			}
		}
		return 0;
	}
});