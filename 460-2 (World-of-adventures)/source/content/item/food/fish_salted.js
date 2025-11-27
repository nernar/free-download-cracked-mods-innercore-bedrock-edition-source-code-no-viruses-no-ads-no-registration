IDRegistry.genItemID("fishCodSalted");
IDRegistry.genItemID("fishSalmonSalted");
IDRegistry.genItemID("fishPufferSalted");

Item.createFoodItem("fishCodSalted", "Salted Cod", { name: "fish_cod_salted" }, { stack: 64, food: 1 });
Item.createFoodItem("fishSalmonSalted", "Salted Salmon", { name: "fish_salmon_salted" }, { stack: 64, food: 1 });
Item.createFoodItem("fishPufferSalted", "Salted Puffer", { name: "fish_puffer_salted" }, { stack: 64, food: 1 });

Callback.addCallback("PreLoaded", function () {
    Recipe.registerBarrelRecipe({ id: ItemID.fishCodSalted, data: 0, count: 1 }, { id: 349, data: 0, count: 1 });
    Recipe.registerBarrelRecipe({ id: ItemID.fishSalmonSalted, data: 0, count: 1 }, { id: 349, data: 1, count: 1 });
    Recipe.registerBarrelRecipe({ id: ItemID.fishPufferSalted, data: 0, count: 1 }, { id: 349, data: 3, count: 1 });
});