TileEntity.registerPrototype(BlockID.furnaceBlast, {
    defaultValues: {
        meta: 0,
        progress: 0,
        progressHeat: 0,
        burn: 0,
        burnMax: 0,
        airValue: 0,
        liquidValue: 0,
        liquidType: null,
        isActive: false
    },
    
    getGuiScreen: function () {
        return UI_BLAST_FURNACE;
    },

    addTransportedItem: function (self, item, direction) {
        var slot = this.container.getSlot("slotRawSource");
        if (slot.id == 0 || slot.id == item.id && slot.data == item.data && slot.count < 64) {
            var add = Math.min(item.count, 64 - slot.count);
            item.count -= add;
            slot.id = item.id;
            slot.data = item.data;
            slot.count += add;
            if (!item.count) { return; }
        }

        var slot = this.container.getSlot("slotFuel");
        if (Recipes.getFuelBurnDuration(item.id, item.data) && (slot.id == 0 || slot.id == item.id && slot.data == item.data && slot.count < 64)) {
            var add = Math.min(item.count, 64 - slot.count);
            item.count -= add;
            slot.id = item.id;
            slot.data = item.data;
            slot.count += add;
        }
    },

    getTransportSlots: function () {
        return { input: ["slotRawSource", "slotFuel"], output: ["slotResult"] };
    },

    onAIRGet: function () {
        this.data.airValue = Math.min(this.data.airValue + 1, 20);
    },

    tick: function () {

        if (this.container.isOpened()) {
            let content = this.container.getGuiContent();
            content.elements.liquidScale.bitmap == "liquid." + this.data.liquidType ? null : content.elements.liquidScale.bitmap = "liquid." + this.data.liquidType;
        }

        let sourceRawSlot = this.container.getSlot("slotRawSource");
        let sourceSlot = this.container.getSlot("slotSource");
        let resultSlot = this.container.getSlot("slotResult");

        let recipe1 = Recipe.getBlastLiquidRecipe(sourceRawSlot.id);
        let recipe2 = Recipe.getBlastFormRecipe(sourceSlot.id, this.data.liquidType);

        if (this.data.burn == 0 && (recipe1 || recipe2) && this.data.airValue > 0) {
            this.data.burn = this.data.burnMax = this.getFuel("slotFuel");
        }

        if (this.data.liquidValue <= 0)
            this.data.liquidType = null;

        if (this.data.airValue > 0 && this.data.burn > 0 && recipe1) {
            if (((recipe1.type == this.data.liquidType && this.data.liquidValue + recipe1.count <= 16) || this.data.liquidValue == 0) && this.data.progressHeat++ >= 160) {
                this.data.liquidType = recipe1.type;
                this.data.liquidValue += recipe1.count;
                this.data.progressHeat = 0;
                sourceRawSlot.count--;
                this.data.airValue--;
                this.container.validateAll();
            }
        }
        else {
            this.data.progressHeat = 0;
        }

        if (this.data.airValue > 0 && this.data.burn > 0 && recipe2) {
            if (this.data.liquidValue > 0 && (resultSlot.id == recipe2.id && resultSlot.data == recipe2.data && resultSlot.count < 64 || resultSlot.id == 0) && this.data.progress++ >= 160) {
                resultSlot.id = recipe2.id;
                resultSlot.data = recipe2.data || 0;
                resultSlot.count++;
                this.container.validateAll();
                this.data.progress = 0;
                this.data.airValue--;
                this.data.liquidValue--;
            }
        }
        else {
            this.data.progress = 0;
        }

        if (this.data.burn > 0) {
            this.data.burn--;
        }

        this.container.setScale("progressScale", this.data.progress / 160);
        this.container.setScale("burningScale", this.data.burn / this.data.burnMax || 0);
        this.container.setScale("liquidScale", this.data.liquidValue / 20);
        this.container.setScale("airScale", this.data.airValue / 20);
        this.container.setScale("heatScale", this.data.progressHeat / 160);
    },

    getMaximalProgressValue: function () {
        return 160;
    },
    getMaximalAirValue: function () {
        return 20;
    },
    getMaximalLiquidValue: function () {
        return 16;
    },
    
    getFuel: function (slotName) {
        var fuelSlot = this.container.getSlot(slotName);
        if (fuelSlot.id > 0) {
            var burn = Recipes.getFuelBurnDuration(fuelSlot.id, fuelSlot.data);
            if (burn) {
                if (LiquidRegistry.getItemLiquid(fuelSlot.id, fuelSlot.data)) {
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