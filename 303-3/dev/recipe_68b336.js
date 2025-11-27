Callback.addCallback("PreLoaded", function () {
    if (ItemID.blueberry) {
        fastAddr(ItemID.coffeeworkshop$cream_milk, ItemID.blueberry, ItemID.coffeeworkshop$cream_berry);
    }
    if (ItemID.lemon) {
        fastAddr(ItemID.coffeeworkshop$cream_milk, ItemID.lemon, ItemID.coffeeworkshop$cream_lemon);
    }
});
Recipes.addShaped({id: ItemID.coffeeworkshop$Rawc, count: 1, data: 0}, ["Xa"], ["X", ItemID.coffeeworkshop$Sc, 0, "a", 325, 8], function (api, field, result) {
    for (let i in field) {
        api.decreaseFieldSlot(i);
    }
    Player.addItemToInventory(325, 1);
});
machine.icecreamMachine.registerRecipe(ItemID.coffeeworkshop$cream_milk, ItemID.coffeeworkshop$icecream_vanilla).registerRecipe(ItemID.coffeeworkshop$cream_chocolate, ItemID.coffeeworkshop$icecream_chocolate).registerRecipe(325, ItemID.coffeeworkshop$icecream_vanilla, 1).registerRecipe(ItemID.coffeeworkshop$cream_apple, ItemID.coffeeworkshop$icecream_apple).registerRecipe(ItemID.coffeeworkshop$cream_berry, ItemID.coffeeworkshop$icecream_berry).registerRecipe(ItemID.coffeeworkshop$cream_coffee, ItemID.coffeeworkshop$icecream_coffee).registerRecipe(ItemID.coffeeworkshop$cream_lemon, ItemID.coffeeworkshop$icecream_lemon).registerRecipe(ItemID.coffeeworkshop$cream_melon, ItemID.coffeeworkshop$icecream_melon).registerRecipeFuel(332, 40);
machine.coffeeMachine.registerRecipe(ItemID.coffeeworkshop$coffeepowder, ItemID.coffeeworkshop$espresso).registerRecipe(325, ItemID.coffeeworkshop$milk_foam, 1);
machine.grinderMachine.registerRecipe(ItemID.coffeeworkshop$Cb, ItemID.coffeeworkshop$coffeepowder).registerRecipe(ItemID.coffeeworkshop$Cocoabean, ItemID.coffeeworkshop$Cocoapowder).registerRecipe(ItemID.coffeeworkshop$Cocoapowder, ItemID.coffeeworkshop$Cocoabatter).registerRecipe(ItemID.coffeeworkshop$Chocolatebar, ItemID.coffeeworkshop$Chocolatechip).registerRecipe(174, ItemID.coffeeworkshop$ice_slag).registerRecipe(79, ItemID.coffeeworkshop$ice_slag).registerRecipe(295, ItemID.flour).registerRecipe(265, ItemID.plateIron);
Recipes.addShaped({id: BlockID.machineBlockBasic, count: 1, data: 0}, ["xxx", "x x", "xxx"], ["x", ItemID.plateIron, 0]);
Recipes.addShaped({id: ItemID.coffeeworkshop$oven, count: 1, data: 0}, [" a ", " x ", " b "], ["x", BlockID.machineBlockBasic, 0, "a", 318, 0, "b", 61, 0]);
Recipes.addShaped({id: ItemID.coffeeworkshop$Cakemodelsquare, count: 1, data: 0}, ["x x", " a ", "x x"], ["x", 265, 0, "a", 148, 0]);
Recipes.addShaped({id: ItemID.coffeeworkshop$Brownieraw, count: 1, data: 0}, ["xab", "bcd", "e"], ["x", ItemID.coffeeworkshop$Cakemodelsquare, 0, "a", 353, 0, "b", 344, 0, "c", ItemID.butter, 0, "d", ItemID.coffeeworkshop$cream_milk, 0, "e", ItemID.coffeeworkshop$Cocoapowder, 0]);
fastAo(ItemID.coffeeworkshop$Brownieraw, ItemID.coffeeworkshop$Browniemodel, ItemID.coffeeworkshop$Brownie);
Recipes.addShaped({id: ItemID.coffeeworkshop$tiramisu_model, count: 1, data: 0}, ["xab", "bcd", "e"], ["x", ItemID.coffeeworkshop$Cakemodelsquare, 0, "a", ItemID.coffeeworkshop$Cakesponge, 0, "b", ItemID.cheese, 0, "c", ItemID.coffeeworkshop$espresso, 0, "d", ItemID.coffeeworkshop$cream_milk, 0, "e", ItemID.coffeeworkshop$Cocoapowder, 0]);
Recipes.addShaped({id: ItemID.coffeeworkshop$tiramisu, count: 1, data: 0}, ["x"], ["x", ItemID.coffeeworkshop$tiramisu_model, 0]);
Recipes.addShaped({id: ItemID.mixing_bowl, count: 1, data: 0}, ["x x", " a "], ["x", 265, 0, "a", 148, 0]);
Recipes.addShaped({id: ItemID.dough, count: 1, data: 0}, ["ab", "cd"], ["a", ItemID.mixing_bowl, 0, "b", ItemID.flour, 0, "c", 325, 8, "d", ItemID.yeast, 0], function (api, field, result) {
    for (var i in field) {
        api.decreaseFieldSlot(i);
    }
    Player.addItemToInventory(ItemID.mixing_bowl, 1);
    Player.addItemToInventory(325, 1);
});
Recipes.addShaped({id: ItemID.yeast, count: 4, data: 0}, ["cc", "ab"], ["a", 353, 0, "b", ItemID.flour, 0, "c", 39, 0], function (api, field, result) {
    for (var i in field) {
        api.decreaseFieldSlot(i);
    }
    Player.addItemToInventory(ItemID.mixing_bowl, 1);
});
Recipes.addShaped({id: ItemID.cheese, count: 1, data: 0}, ["ab", "c"], ["a", ItemID.mixing_bowl, 0, "b", ItemID.yeast, 0, "c", 325, 1], function (api, field, result) {
    for (var i in field) {
        api.decreaseFieldSlot(i);
    }
    Player.addItemToInventory(ItemID.mixing_bowl, 1);
    Player.addItemToInventory(325, 1);
});
Recipes.addShaped({id: ItemID.butter, count: 1, data: 0}, ["ab"], ["a", ItemID.mixing_bowl, 0, "b", ItemID.coffeeworkshop$cream_milk, 0], function (api, field, result) {
    for (var i in field) {
        api.decreaseFieldSlot(i);
    }
    Player.addItemToInventory(ItemID.mixing_bowl, 1);
});
Recipes.addShaped({id: ItemID.coffeeworkshop$muffin_chocolate_raw, count: 4, data: 0}, ["abc", "deb"], ["a", ItemID.mixing_bowl, 0, "b", 344, 0, "c", 353, 0, "d", ItemID.butter, 0, "e", ItemID.coffeeworkshop$Cocoapowder, 0], function (api, field, result) {
    for (var i in field) {
        api.decreaseFieldSlot(i);
    }
    Player.addItemToInventory(ItemID.mixing_bowl, 1);
});
Recipes.addShaped({id: ItemID.coffeeworkshop$muffin_berry_raw, count: 4, data: 0}, ["abc", "def"], ["a", ItemID.mixing_bowl, 0, "b", ItemID.flour, 0, "c", 353, 0, "d", ItemID.butter, 0, "e", ItemID.coffeeworkshop$cream_berry, 0, "f", 344, 0], function (api, field, result) {
    for (var i in field) {
        api.decreaseFieldSlot(i);
    }
    Player.addItemToInventory(ItemID.mixing_bowl, 1);
});
Recipes.addShaped({id: ItemID.coffeeworkshop$Cakemodel, count: 1, data: 0}, [" x ", "xax", " x "], ["x", 265, 0, "a", 148, 0]);
Recipes.addShaped({id: ItemID.coffeeworkshop$Cakespongechocolateraw, count: 1, data: 0}, ["abc", "ccb", "def"], ["a", ItemID.coffeeworkshop$Cakemodel, 0, "b", 353, 0, "c", 344, 0, "d", 325, 1, "e", ItemID.flour, 0, "f", ItemID.coffeeworkshop$Cocoabatter, 0], function (api, field, result) {
    for (var i in field) {
        api.decreaseFieldSlot(i);
    }
    Player.addItemToInventory(ItemID.coffeeworkshop$Cakemodel, 1);
    Player.addItemToInventory(325, 1);
});
fastAo(ItemID.coffeeworkshop$Cakespongechocolateraw, ItemID.coffeeworkshop$Cakespongechocolatemodel, ItemID.coffeeworkshop$Cakespongechocolate);
Recipes.addShaped({id: ItemID.coffeeworkshop$Cakespongeraw, count: 1, data: 0}, ["abc", "ccb", "dee"], ["a", ItemID.coffeeworkshop$Cakemodel, 0, "b", 353, 0, "c", 344, 0, "d", 325, 1, "e", ItemID.flour, 0, "f", ItemID.coffeeworkshop$Cocoabatter, 0], function (api, field, result) {
    for (var i in field) {
        api.decreaseFieldSlot(i);
    }
    Player.addItemToInventory(ItemID.coffeeworkshop$Cakemodel, 1);
    Player.addItemToInventory(325, 1);
});
fastAo(ItemID.coffeeworkshop$Cakespongeraw, ItemID.coffeeworkshop$Cakespongemodel, ItemID.coffeeworkshop$Cakesponge);
Recipes.addShaped({id: ItemID.coffeeworkshop$Cakeredvelvetraw, count: 1, data: 0}, ["abc", "ccg", "def"], ["a", ItemID.coffeeworkshop$Cakemodel, 0, "b", 353, 0, "c", 344, 0, "d", 325, 1, "e", ItemID.flour, 0, "f", ItemID.coffeeworkshop$Cocoabatter, 0, "g", 351, 1], function (api, field, result) {
    for (var i in field) {
        api.decreaseFieldSlot(i);
    }
    Player.addItemToInventory(ItemID.coffeeworkshop$Cakemodel, 1);
    Player.addItemToInventory(325, 1);
});
fastAo(ItemID.coffeeworkshop$Cakeredvelvetraw, ItemID.coffeeworkshop$Cakeredvelvetmodel, ItemID.coffeeworkshop$Cakeredvelvet);
Recipes.addShaped({id: ItemID.coffeeworkshop$Cakecarrotraw, count: 1, data: 0}, ["abc", "cbg", "def"], ["a", ItemID.coffeeworkshop$Cakemodel, 0, "b", 353, 0, "c", 344, 0, "d", 325, 1, "e", ItemID.flour, 0, "f", ItemID.coffeeworkshop$Cocoabatter, 0, "g", 391, 0], function (api, field, result) {
    for (var i in field) {
        api.decreaseFieldSlot(i);
    }
    Player.addItemToInventory(ItemID.coffeeworkshop$Cakemodel, 1);
    Player.addItemToInventory(325, 1);
});
fastAo(ItemID.coffeeworkshop$Cakecarrotraw, ItemID.coffeeworkshop$Cakecarrotmodel, ItemID.coffeeworkshop$Cakecarrot);
Recipes.addShaped({id: ItemID.coffeeworkshop$Cakecheeseraw, count: 1, data: 0}, ["abg", "ccb", "deg"], ["a", ItemID.coffeeworkshop$Cakemodel, 0, "b", 353, 0, "c", 344, 0, "d", 325, 1, "e", ItemID.flour, 0, "f", ItemID.coffeeworkshop$Cocoabatter, 0, "g", ItemID.cheese, 0], function (api, field, result) {
    for (var i in field) {
        api.decreaseFieldSlot(i);
    }
    Player.addItemToInventory(ItemID.coffeeworkshop$Cakemodel, 1);
    Player.addItemToInventory(325, 1);
});
fastAo(ItemID.coffeeworkshop$Cakecheeseraw, ItemID.coffeeworkshop$Cakecheesemodel, ItemID.coffeeworkshop$Cakecheese);
ModAPI.addAPICallback("RecipeViewer", function (R) {
    let RecipeViewer = R.Core;
    RecipeViewer.registerRecipeType("CWS_grinder", {contents: {icon: ItemID.coffeeworkshop$grinder, drawing: [{type: "bitmap", x: 430, y: 185, scale: 2, bitmap: "_workbench_bar"}], elements: {input0: {type: "slot", x: 280, y: 190, size: 120}, output0: {type: "slot", x: 600, y: 190, size: 120}}}, getList: function (id, data, isUsage) {
        let result;
        if (isUsage) {
            result = machine.grinderMachine.getRecipe(id, data);
            return result ? [{input: [{id: id, count: 1, data: data}], output: [{id: result, count: 1, data: 0}]}] : [];
        }
        const list = [];
        let recipe = machine.grinderMachine.getRoot(id);
        for (let i = 0; i < recipe.length; i++) {
            list.push({input: [{id: recipe[i][0], data: recipe[i][1], count: 1}], output: [{id: id, count: 1, data: data}]});
        }
        return list;
    }});
});

