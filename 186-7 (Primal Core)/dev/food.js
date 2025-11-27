Generator.setFoodItem("monster_flesh_dried", {name: "Dried monster flesh", texture: "monster_flesh_dried", stack: 64, food: 3});
Generator.setFoodItem("fish_cod_salted", {name: "Salted fish", texture: "fish_cod_salted", stack: 64, food: 1});
Generator.setFoodItem("fish_salmon_salted", {name: "Salted salmon", texture: "fish_salmon_salted", stack: 64, food: 1});
Generator.setFoodItem("wolf_meat_raw", {name: "Raw wolf meat", texture: "wolf_meat_raw", stack: 64, food: 4});
Generator.setFoodItem("wolf_meat_cooked", {name: "Wolf steak", texture: "wolf_meat_cooked", stack: 64, food: 8});
Generator.setFoodItem("fish_puffer_salted", {name: "Salted puffer fish", texture: "fish_puffer_salted", stack: 64, food: 1});
Generator.setFoodItem("fish_cod_dried", {name: "Fish (dried)", texture: "fish_cod_dried", stack: 64, food: 4});
Generator.setFoodItem("fish_salmon_dried", {name: "Dried salmon", texture: "fish_salmon_dried", stack: 64, food: 4});
Generator.setFoodItem("fish_puffer_dried", {name: "Dried puffer fish", texture: "fish_puffer_dried", stack: 64, food: 5});
Callback.addCallback("PostLoaded", function () {
    Recipes.addFurnace(ItemID.wolf_meat_raw, ItemID.wolf_meat_cooked, 0);
    Recipes.addShapeless({id: ItemID.fish_cod_salted, count: 1, data: 0}, [{id: 349, data: 0}, {id: ItemID.salt_rock, data: 0}]);
    Recipes.addShapeless({id: ItemID.fish_salmon_salted, count: 1, data: 0}, [{id: 349, data: 1}, {id: ItemID.salt_rock, data: 0}]);
    Recipes.addShapeless({id: ItemID.fish_puffer_salted, count: 1, data: 0}, [{id: 349, data: 3}, {id: ItemID.salt_rock, data: 0}]);
    DryingRack.addRecipe(ItemID.fish_cod_salted, 700, ItemID.fish_cod_dried);
    DryingRack.addRecipe(ItemID.fish_salmon_salted, 700, ItemID.fish_salmon_dried);
    DryingRack.addRecipe(ItemID.fish_puffer_salted, 700, ItemID.fish_puffer_dried);
});

