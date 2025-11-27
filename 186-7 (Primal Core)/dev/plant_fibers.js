Generator.setItem("plant_fiber", {name: "Plant fiber", texture: "plant_fiber", stack: 64});
Generator.setItem("plant_twine", {name: "Plant twine", texture: "plant_cordage", stack: 64});
Generator.setItem("plant_tinder", {name: "Plant tinder", texture: "plant_tinder", stack: 64});
Callback.addCallback("PostLoaded", function () {
    Recipes.addShaped({id: ItemID.plant_twine, count: 1, data: 0}, ["ff", "f"], ["f", ItemID.plant_fiber, 0]);
    Recipes.addShaped({id: ItemID.plant_tinder, count: 1, data: 0}, ["ff", "ff"], ["f", ItemID.plant_fiber, 0]);
});
Block.registerDropFunction(31, function () {
    if (Math.random() <= 0.8) {
        return [[ItemID.plant_fiber, 1, 0]];
    }
});
Block.registerDropFunction(106, function () {
    return [[ItemID.plant_fiber, 1, 0]];
});
Block.registerDropFunction(17, function (coords, blockID, data, level, enchant) {
    if (level == 0) {
        if (data <= 3) {
            return [[5, 1, data]];
        }
    }
});
Block.registerDropFunction(162, function (coords, blockID, data, level, enchant) {
    if (level == 0 && data <= 2) {
        return [[5, 1, data + 4]];
    } else {
        if (level == 0) {
            return [[5, 1, 4]];
        }
    }
});
Block.registerDropFunction(161, function (coords, blockID, data, level, enchant) {
    if (Math.random() <= 0.5) {
        return [[280, 1, 0]];
    }
});
Block.registerDropFunction(18, function (coords, blockID, data, level, enchant) {
    if (Math.random() <= 0.5) {
        return [[280, 1, 0]];
    }
});

