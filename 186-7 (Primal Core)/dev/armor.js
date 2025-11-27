Generator.setItem("pelt_wolf", {name: "Wolf pelt", texture: "pelt_wolf", stack: 64});
IDRegistry.genItemID("primalObsidianHelmet");
IDRegistry.genItemID("primalObsidianChestplate");
IDRegistry.genItemID("primalObsidianLeggings");
IDRegistry.genItemID("primalObsidianBoots");
Item.createArmorItem("primalObsidianHelmet", "Obsidian helmet", {name: "primalObsidian_helmet", meta: 0}, {type: "helmet", armor: 1, durability: 1753, texture: "armor/obsidian_layer_1.png"});
Item.createArmorItem("primalObsidianChestplate", "Obsidian chestplate", {name: "primalObsidian_body", meta: 0}, {type: "chestplate", armor: 4, durability: 1865, texture: "armor/obsidian_layer_1.png"});
Item.createArmorItem("primalObsidianLeggings", "Obsidian leggings", {name: "primalObsidian_legs", meta: 0}, {type: "leggings", armor: 2, durability: 1798, texture: "armor/obsidian_layer_2.png"});
Item.createArmorItem("primalObsidianBoots", "Obsidian boots", {name: "primalObsidian_boots", meta: 0}, {type: "boots", armor: 1, durability: 1763, texture: "armor/obsidian_layer_1.png"});
IDRegistry.genItemID("wolfHelmet");
IDRegistry.genItemID("wolfChestplate");
IDRegistry.genItemID("wolfLeggings");
IDRegistry.genItemID("wolfBoots");
Item.createArmorItem("wolfHelmet", "Wolf head", {name: "wolf_head", meta: 0}, {type: "helmet", armor: 1, durability: 153, texture: "armor/wolf_layer_1.png"});
Item.createArmorItem("wolfChestplate", "Wolf body", {name: "wolf_body", meta: 0}, {type: "chestplate", armor: 4, durability: 165, texture: "armor/wolf_layer_1.png"});
Item.createArmorItem("wolfLeggings", "Wolf leggings", {name: "wolf_legs", meta: 0}, {type: "leggings", armor: 3, durability: 198, texture: "armor/wolf_layer_2.png"});
Item.createArmorItem("wolfBoots", "Wolf boots", {name: "wolf_boots", meta: 0}, {type: "boots", armor: 1, durability: 163, texture: "armor/wolf_layer_1.png"});
Callback.addCallback("EntityDeath", function (ent, attacker, damageType) {
    let c = Entity.getPosition(ent);
    if (Entity.getType(ent) == 14) {
        World.drop(c.x + 0.5, c.y + 0.5, c.z + 0.5, ItemID.pelt_wolf, 1, 0);
        if (Math.random() < 0.5) {
            World.drop(c.x + 0.5, c.y + 0.5, c.z + 0.5, ItemID.pelt_wolf, 1, 0);
        }
    }
});
Callback.addCallback("PostLoaded", function () {
    Recipes.addShaped({id: ItemID.primalObsidianHelmet, count: 1, data: 0}, ["sss", "shs"], ["s", ItemID.plateObsidian, 0, "h", 298, 0]);
    Recipes.addShaped({id: ItemID.primalObsidianChestplate, count: 1, data: 0}, ["shs", "sss", "sss"], ["s", ItemID.plateObsidian, 0, "h", 299, 0]);
    Recipes.addShaped({id: ItemID.primalObsidianLeggings, count: 1, data: 0}, ["sss", "shs", "s s"], ["s", ItemID.plateObsidian, 0, "h", 300, 0]);
    Recipes.addShaped({id: ItemID.primalObsidianBoots, count: 1, data: 0}, ["shs", "s s"], ["s", ItemID.plateObsidian, 0, "h", 301, 0]);
    Recipes.addShaped({id: ItemID.wolfHelmet, count: 1, data: 0}, ["sss", "s s"], ["s", ItemID.pelt_wolf, 0]);
    Recipes.addShaped({id: ItemID.wolfChestplate, count: 1, data: 0}, ["s s", "sss", "sss"], ["s", ItemID.pelt_wolf, 0]);
    Recipes.addShaped({id: ItemID.wolfLeggings, count: 1, data: 0}, ["sss", "s s", "s s"], ["s", ItemID.pelt_wolf, 0]);
    Recipes.addShaped({id: ItemID.wolfBoots, count: 1, data: 0}, ["s s", "s s"], ["s", ItemID.pelt_wolf, 0]);
});

