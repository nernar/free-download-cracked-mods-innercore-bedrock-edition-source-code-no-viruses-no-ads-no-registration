TileEntity.registerPrototype(BlockID.barrel, {
    defaultValues: {
        progress: 0
    },

    getGuiScreen: function () {
        return UI_BARREL;
    },

    addTransportedItem: function (self, item, direction) {
        var slot = this.container.getSlot("slotFuel");
        if (item.id == ItemID.salt && (slot.id == 0 || slot.id == item.id && slot.data == item.data && slot.count < 64)) {
            var add = Math.min(item.count, 64 - slot.count);
            item.count -= add;
            slot.id = item.id;
            slot.data = item.data;
            slot.count += add;
            if (!item.count) { return; }
        }

        var slot = this.container.getSlot("slotSource");
        if (slot.id == 0 || slot.id == item.id && slot.data == item.data && slot.count < 64) {
            var add = Math.min(item.count, 64 - slot.count);
            item.count -= add;
            slot.id = item.id;
            slot.data = item.data;
            slot.count += add;
            if (!item.count) { return; }
        }
    },

    getTransportSlots: function () {
        return { input: ["slotSource", "slotFuel"], output: ["slotResult"] };
    },

    tick: function () {
        var sourceSlot = this.container.getSlot("slotSource");
        var fuelSlot = this.container.getSlot("slotFuel");
        var result = Recipe.getBarrelRecipe(sourceSlot);
                        
        if (fuelSlot.id == ItemID.salt && fuelSlot.count > 0 && result) {
            var resultSlot = this.container.getSlot("slotResult");
            if ((resultSlot.id == result.id && resultSlot.data == result.data && resultSlot.count < 64 || resultSlot.id == 0) && this.data.progress++ >= 160) {
                sourceSlot.count--;
                fuelSlot.count--;
                resultSlot.id = result.id;
                resultSlot.data = result.data || 0;
                resultSlot.count++;
                this.container.validateAll();
                this.data.progress = 0;
            }
        }
        else {
            this.data.progress = 0;
        }

        this.container.setScale("progressScale", this.data.progress / 160);
    }
});