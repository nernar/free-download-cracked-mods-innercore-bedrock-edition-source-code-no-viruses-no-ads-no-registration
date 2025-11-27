Generator.setItem("rock_stone", {name: "Rock", texture: "rock_stone", stack: 64});
Generator.setItem("rock_granite", {name: "Rock", texture: "rock_granite", stack: 64});
Generator.setItem("rock_diorite", {name: "Rock", texture: "rock_diorite", stack: 64});
Generator.setItem("rock_andesite", {name: "Rock", texture: "rock_andesite", stack: 64});
Generator.setItem("building_mortar", {name: "Mortar", texture: "mortar", stack: 64});
Block.registerDropFunction(1, function (coords, blockID, data, level, enchant) {
    if (level > 0) {
        if (data == 0) {
            return [[ItemID.rock_stone, 4, 0]];
        }
        if (data == 1) {
            return [[ItemID.rock_granite, 4, 0]];
        }
        if (data == 3) {
            return [[ItemID.rock_diorite, 4, 0]];
        }
        if (data == 5) {
            return [[ItemID.rock_andesite, 4, 0]];
        }
    }
});
Callback.addCallback("PostLoaded", function () {
    Recipes.addShaped({id: 4, count: 2, data: 0}, ["rrr", "rmr", "rrr"], ["r", ItemID.rock_stone, 0, "m", ItemID.building_mortar, 0]);
    Recipes.addShaped({id: 1, count: 2, data: 1}, ["rrr", "rmr", "rrr"], ["r", ItemID.rock_granite, 0, "m", ItemID.building_mortar, 0]);
    Recipes.addShaped({id: 1, count: 2, data: 3}, ["rrr", "rmr", "rrr"], ["r", ItemID.rock_diorite, 0, "m", ItemID.building_mortar, 0]);
    Recipes.addShaped({id: 1, count: 2, data: 5}, ["rrr", "rmr", "rrr"], ["r", ItemID.rock_andesite, 0, "m", ItemID.building_mortar, 0]);
    Recipes.addShaped({id: ItemID.building_mortar, count: 16, data: 0}, ["scs", "csc", "scs"], ["s", 12, -1, "c", 337, 0]);
});

