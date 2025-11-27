Generator.setItems("dust", ["Brass", "Bronze", "Copper", "Lead", "Pigiron", "Silver", "Tin", "Iron", "Wootz", "Zinc", "Gold"]);
Generator.setItems("ingot", ["Brass", "Bronze", "Copper", "Lead", "Pigiron", "Silver", "Steel", "Tamahagane", "Tin", "Wootz", "Zinc"]);
Generator.setItems("nugget", ["Brass", "Bronze", "Copper", "Lead", "Pigiron", "Silver", "Iron", "Tin", "Wootz", "Zinc"]);
Generator.setItems("plate", ["Brass", "Bronze", "Copper", "Gold", "Lead", "Pigiron", "Silver", "Iron", "Steel", "Tamahagane", "Tin", "Wootz", "Zinc", "Obsidian"]);
Generator.setItems("shard", ["Obsidian"]);
Callback.addCallback("PostLoaded", function () {
    for (i in gallaghers) {
        Recipes.addCraftToolRecipeItem({id: ItemID.plateBrass, count: 1, data: 0}, [{id: ItemID.ingotBrass, data: 0}, {id: ItemID.ingotBrass, data: 0}], gallaghers[i]);
        Recipes.addCraftToolRecipeItem({id: ItemID.shardObsidian, count: 4, data: 0}, [{id: 49, data: 0}], gallaghers[i]);
        Recipes.addFurnace(ItemID.shardObsidian, ItemID.plateObsidian, 0);
        Recipes.addCraftToolRecipeItem({id: ItemID.plateBronze, count: 1, data: 0}, [{id: ItemID.ingotBronze, data: 0}, {id: ItemID.ingotBronze, data: 0}], gallaghers[i]);
        Recipes.addCraftToolRecipeItem({id: ItemID.plateCopper, count: 1, data: 0}, [{id: ItemID.ingotCopper, data: 0}, {id: ItemID.ingotCopper, data: 0}], gallaghers[i]);
        Recipes.addCraftToolRecipeItem({id: ItemID.plateLead, count: 1, data: 0}, [{id: ItemID.ingotLead, data: 0}, {id: ItemID.ingotLead, data: 0}], gallaghers[i]);
        Recipes.addCraftToolRecipeItem({id: ItemID.platePigiron, count: 1, data: 0}, [{id: ItemID.ingotPigiron, data: 0}, {id: ItemID.ingotPigiron, data: 0}], gallaghers[i]);
        Recipes.addCraftToolRecipeItem({id: ItemID.plateSilver, count: 1, data: 0}, [{id: ItemID.ingotSilver, data: 0}, {id: ItemID.ingotSilver, data: 0}], gallaghers[i]);
        Recipes.addCraftToolRecipeItem({id: ItemID.plateIron, count: 1, data: 0}, [{id: 265, data: 0}, {id: 265, data: 0}], gallaghers[i]);
        Recipes.addCraftToolRecipeItem({id: ItemID.plateSteel, count: 1, data: 0}, [{id: ItemID.ingotSteel, data: 0}, {id: ItemID.ingotSteel, data: 0}], gallaghers[i]);
        Recipes.addCraftToolRecipeItem({id: ItemID.plateTamahagane, count: 1, data: 0}, [{id: ItemID.ingotTamahagane, data: 0}, {id: ItemID.ingotTamahagane, data: 0}], gallaghers[i]);
        Recipes.addCraftToolRecipeItem({id: ItemID.plateTin, count: 1, data: 0}, [{id: ItemID.ingotTin, data: 0}, {id: ItemID.ingotTin, data: 0}], gallaghers[i]);
        Recipes.addCraftToolRecipeItem({id: ItemID.plateWootz, count: 1, data: 0}, [{id: ItemID.ingotWootz, data: 0}, {id: ItemID.ingotWootz, data: 0}], gallaghers[i]);
        Recipes.addCraftToolRecipeItem({id: ItemID.plateZinc, count: 1, data: 0}, [{id: ItemID.ingotZinc, data: 0}, {id: ItemID.ingotZinc, data: 0}], gallaghers[i]);
    }
});

