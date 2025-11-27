importLib("ToolType", "*");
IDRegistry.genItemID("darkSteelHelmet");
IDRegistry.genItemID("darkSteelChestplate");
IDRegistry.genItemID("darkSteelLeggings");
IDRegistry.genItemID("darkSteelBoots");
Item.createArmorItem("darkSteelHelmet", "Dark steel helmet", {name: "darkSteel_helmet", meta: 0}, {type: "helmet", armor: 3, durability: 753, texture: "armor/darkSteel_layer_1.png"});
Item.createArmorItem("darkSteelChestplate", "Dark steel chestplate", {name: "darkSteel_chestplate", meta: 0}, {type: "chestplate", armor: 8, durability: 865, texture: "armor/darkSteel_layer_1.png"});
Item.createArmorItem("darkSteelLeggings", "Dark steel leggings", {name: "darkSteel_leggings", meta: 0}, {type: "leggings", armor: 6, durability: 798, texture: "armor/darkSteel_layer_2.png"});
Item.createArmorItem("darkSteelBoots", "Dark steel boots", {name: "darkSteel_boots", meta: 0}, {type: "boots", armor: 3, durability: 763, texture: "armor/darkSteel_layer_1.png"});
ToolType.darkPick = {isWeapon: false, damage: 3, baseDamage: 4, blockTypes: ["stone"], onDestroy: function (item) {
    item.data += 80;
}, onBroke: function (item) {
    return true;
}, calcDestroyTime: function (item, coords, block, params, destroyTime, enchant) {
    let energy = ChargeItemRegistry.getEnergyStored(item);
    if (energy >= 80) {
        if (block.id == 49) {
            return 2;
        }
        let material = ToolAPI.getBlockMaterial(block.id) || {};
        material = material.name;
        if (material == "stone") {
            return params.base / 2.5;
        }
    }
    return destroyTime;
}};
ToolAPI.addToolMaterial("darkSteel", {durability: 765, level: 5, efficiency: 5, damage: 7});
IDRegistry.genItemID("pickaxeDarkSteel");
Item.createItem("pickaxeDarkSteel", "Dark pick", {name: "darkSteel_pickaxe"}, {stack: 1});
ToolAPI.setTool(ItemID.pickaxeDarkSteel, "darkSteel", ToolType.pickaxe);
Item.registerNameOverrideFunction(ItemID.pickaxeDarkSteel, function (item, name) {
    return name + "\n" + "\xa77You can empower this\nwith Vibrant Crystal in Dark Anvil";
});
IDRegistry.genItemID("pickaxeDarkSteelEmpowered");
Item.createItem("pickaxeDarkSteelEmpowered", "Dark pick", {name: "darkSteel_pickaxe"}, {stack: 1});
ToolAPI.setTool(ItemID.pickaxeDarkSteelEmpowered, "darkSteel", ToolType.darkPick);
ChargeItemRegistry.registerItem(ItemID.pickaxeDarkSteelEmpowered, RF, 50000, 0);
Item.registerNameOverrideFunction(ItemID.pickaxeDarkSteelEmpowered, function (item, name) {
    return name + "\n" + "\xa77Empowered: breaks obisdian faster.\nRF:" + ChargeItemRegistry.getEnergyStored(item) + "/" + (Item.getMaxDamage(item.id) - 1);
});
IDRegistry.genItemID("swordDarkSteel");
Item.createItem("swordDarkSteel", "The ender", {name: "darkSteel_sword"}, {stack: 1});
ToolAPI.setTool(ItemID.swordDarkSteel, "darkSteel", ToolType.sword);
Item.registerNameOverrideFunction(ItemID.pickaxeDarkSteel, function (item, name) {
    return name + "\n" + "\xa77Increases the chance of \ndropping the head from the mob";
});
Callback.addCallback("EntityDeath", function (ent, attacker, damageType) {
    let c = Entity.getPosition(ent);
    let item = Player.getCarriedItem();
    if (item.id == ItemID.swordDarkSteel && Entity.getType(attacker) == 63) {
        if (Entity.getType(ent) == 32 && Math.random() <= 0.4) {
            World.drop(c.x + 0.5, c.y + 0.5, c.z + 0.5, ItemID.zombieSkull, 1, 0);
        }
        if (Entity.getType(ent) == 33 && Math.random() <= 0.4) {
            World.drop(c.x + 0.5, c.y + 0.5, c.z + 0.5, ItemID.creeperSkull, 1, 0);
        }
        if (Entity.getType(ent) == 34 && Math.random() <= 0.4) {
            World.drop(c.x + 0.5, c.y + 0.5, c.z + 0.5, ItemID.skeletonSkull, 1, 0);
        }
        if (Entity.getType(ent) == 38 && Math.random() <= 0.8) {
            World.drop(c.x + 0.5, c.y + 0.5, c.z + 0.5, ItemID.endermanSkull, 1, 0);
        }
        if (Entity.getType(ent) == 48 && Math.random() <= 0.6) {
            World.drop(c.x + 0.5, c.y + 0.5, c.z + 0.5, 397, 1, 1);
        }
    }
});

