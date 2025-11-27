Ace3.addItem("grass_item", "Grass", {name: "grass", meta: 0}, {isTech: true});
Ace3.addItem("vanilla_flower_item", "Vanilla Flower", {name: "VanillaFlower", meta: 0}, {});
Ace3.addGardenPlant({blockID: "grass", prop: [{name: "Grass", texture: [["empty", 0], ["empty", 0], ["uncommonGrass", 0]], inCreative: false}], type: BLOCK_TYPE_PLANT, render: "tree", seed: ItemID.grass_item, genBiomes: [1, 4, 18, 27, 28], genCount: {min: 1, max: 5}});
Ace3.addGardenPlant({blockID: "vanilla_flower", prop: [{name: "Vanilla Flower", texture: [["empty", 0], ["empty", 0], ["vanillaFlower", 0]], inCreative: false}], type: BLOCK_TYPE_PLANT, render: "tree", seed: ItemID.vanilla_flower_item, genBiomes: [1, 4, 13, 18, 27, 28], genCount: {min: 1, max: 5}});
Block.registerDropFunction("grass", function (coords, blockID, blockData, level) {
    Ace3.resetParticleDrop(coords);
    var drop = [];
    if (Math.random() < 0.15) {
        drop.push([ItemID.cucumber_seeds, random(1, 3), 0]);
    }
    if (Math.random() < 0.15) {
        drop.push([ItemID.onion, random(1, 3), 0]);
    }
    if (Math.random() < 0.5) {
        drop.push([ItemID.tomato_seeds, random(1, 3), 0]);
    }
    if (Math.random() < 0.15) {
        drop.push([ItemID.lettuce_seeds, random(1, 3), 0]);
    }
    if (Math.random() < 0.15) {
        drop.push([ItemID.pepper_seeds, random(1, 3), 0]);
    }
    if (Math.random() < 0.15) {
        drop.push([ItemID.corn_seeds, random(1, 3), 0]);
    }
    if (Math.random() < 0.15) {
        drop.push([ItemID.rise_seeds, random(1, 3), 0]);
    }
    if (Math.random() < 0.15) {
        drop.push([ItemID.strawberry_seeds, random(1, 3), 0]);
    }
    return drop;
});
Block.registerDropFunction("vanilla_flower", function (coords, blockID, blockData, level) {
    Ace3.resetParticleDrop(coords);
    return [[ItemID.vanilla_flower_item, 1, 0]];
});
Ace3.addOre("oreRockSalt", [{name: "Rock Salt", texture: [["rockSalt", 0]], inCreative: true}], {destroytime: 1.5, destroylevel: 1}, {NORMAL_UNDERGROUND: {rare: 10, count: random(4, 10), minY: 32, maxY: 64}, NORMAL: {rare: 10, count: random(4, 10), minY: 64, maxY: 128}}, function (coords, blockID, blockData, level, enchant) {
    if (level > 0) {
        ToolAPI.dropOreExp(coords, 0, 2, enchant.experience);
        return [[ItemID.salt, random(1, 4), 0]];
    }
    return [];
});

