ItemRegistry.addToolMaterial("tofucraft_kinusword", {
    damage: 1,
    durability: 2,
    efficiency: 1.5,
    enchantability: 16,
    level: 1
});
ItemRegistry.addToolMaterial("tofucraft_momensword", {
    damage: 2,
    durability: 6,
    efficiency: 1.5,
    enchantability: 16,
    level: 2
});
ItemRegistry.addToolMaterial("tofucraft_solidsword", {
    damage: 3,
    durability: 184,
    efficiency: 1.5,
    enchantability: 16,
    level: 3
});
ItemRegistry.addToolMaterial("tofucraft_metalsword", {
    damage: 6,
    durability: 416,
    efficiency: 3,
    enchantability: 16,
    level: 3
});
ItemRegistry.addToolMaterial("tofucraft_diamondsword", {
    damage: 6,
    durability: 4627,
    efficiency: 3,
    enchantability: 16,
    level: 3
});
ItemRegistry.createTool("tofucraft_swordkinu", {
    name: "swordkinu",
    icon: "swordkinu",
    material: "tofucraft_kinusword"
}, ToolType.SWORD);
ItemRegistry.createTool("tofucraft_momensword", {
    name: "swordmomen",
    icon: "swordmomen",
    material: "tofucraft_momensword"
}, ToolType.SWORD);
ItemRegistry.createTool("tofucraft_solidsword", {
    name: "swordsolid",
    icon: "swordsolid",
    material: "tofucraft_solidsword"
}, ToolType.SWORD);
ItemRegistry.createTool("tofucraft_metalsword", {
    name: "swordmetal",
    icon: "swordmetal",
    material: "tofucraft_metalsword"
}, ToolType.SWORD);
ItemRegistry.createTool("tofucraft_diamondsword", {
    name: "sworddiamond",
    icon: "sworddiamond",
    material: "tofucraft_diamondsword"
}, ToolType.SWORD);
Callback.addCallback("EntityHurt",
function(attacker, entity, damageValue, damageType, someBool1, someBool2) {
    var item = Entity.getCarriedItem(attacker);
    var Extra = item.extra;
    var n = 8;
    if (Extra && Extra.getEnchants().id == tcToolAPI.EnchantTypes.drain.id) {
        n = 8 + 0.5 * Extra.getEnchantLevel(tcToolAPI.EnchantTypes.drain.id);
        if (__config__.getBool("debug")) alert("附魔等级" + Extra.getEnchantLevel(tcToolAPI.EnchantTypes.drain.id));
    };
    if (item.id != ItemID.tofucraft_diamondsword) return;
    var max = Entity.getMaxHealth(attacker);
    var now = Entity.getHealth(attacker);
    if (__config__.getBool("debug")) Game.message("§6" + "玩家最大血量" + "@" + max + "\n" + "玩家当前血量" + "@" + now);
    if (now < max) {
        Entity.setHealth(attacker, now + n * tcToolAPI.defaultfacter);
    };
});