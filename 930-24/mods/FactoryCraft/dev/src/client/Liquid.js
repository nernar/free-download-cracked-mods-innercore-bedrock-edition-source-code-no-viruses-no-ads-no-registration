FactAPI.liquid = {
	textures: {},
	registerTexture: function (id, texture) {
		this.textures[id] = texture;
		PAPI.registerLiquidTexture(id,texture);
	},
	getTexture: function (id) {
		return this.textures[id] || false;
	},
	fluidContainerEmpty: function (liquid, tile, slots) {
		var slotContainerFull = tile.container.getSlot(slots.full);
		var slotContainer = tile.container.getSlot(slots.empty);
		if (slotContainerFull && slotContainer && slotContainerFull.id) {
			var empty = LiquidRegistry.getEmptyItem(slotContainerFull.id, slotContainerFull.data);
			if (empty && (liquid === null || liquid.indexOf(empty.liquid)) > -1 && tile.liquidStorage.getAmount(empty.liquid) + 1 <= tile.liquidStorage.getLimit(empty.liquid)) {
				if (slotContainer.id === 0) {
					tile.container.setSlot(slots.empty, empty.id, 1, empty.data);
					tile.liquidStorage.addLiquid(empty.liquid, 1);
					slotContainerFull.count--;
					tile.container.validateAll();
					return true;
				} else if (slotContainer.id === empty.id && slotContainer.data === empty.data && slotContainer.count < Item.getMaxStack(slotContainer.id)) {
					slotContainer.count++;
					slotContainerFull.count--;
					tile.liquidStorage.addLiquid(empty.liquid, 1);
					tile.container.validateAll();
					return true;
				}
			}
		}
		return false;
	}
};

FactAPI.liquid.registerTexture("water", ["fluid_water", 0]);
FactAPI.liquid.registerTexture("lava", ["fluid_lava", 0]);
FactAPI.liquid.registerTexture("appleJuice", ["liquid_juice", 0])
FactAPI.liquid.registerTexture("honey", ["liquid_honey", 0])
FactAPI.liquid.registerTexture("seedOil", ["liquid_seedoil", 0])
FactAPI.liquid.registerTexture("biomass", ["liquid_biomass", 0])
FactAPI.liquid.registerTexture("ethanol", ["liquid_ethanol", 0])
FactAPI.liquid.registerTexture("forestryGlass", ["liquid_glass", 0])
