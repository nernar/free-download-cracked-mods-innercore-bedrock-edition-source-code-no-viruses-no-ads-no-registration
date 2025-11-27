var modifierAugmentApi = {modifiers: {0: 0, 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0, 7: 0, 8: 0, 9: 0, 10: 0, 11: 0, 12: 0, 13: 0, 14: 0, 15: 0, 16: 0, 17: 0}, getList: function () {
    let blocks = [BlockID.null_modifier, BlockID.speed_modifier, BlockID.piezo_modifier, BlockID.accuracy_modifier, BlockID.regen_modifier, BlockID.absorption_modifier, BlockID.haste_modifier, BlockID.resistance_modifier, BlockID.water_modifier, BlockID.jump_modifier, BlockID.night_modifier, BlockID.saturation_modifier, BlockID.luck_modifier, BlockID.flight_modifier, BlockID.health_boost_modifier, BlockID.fire_modifier, BlockID.invisibility_modifier, BlockID.strength_modifier];
    return blocks;
}, getModifier: function (s, x, y, z) {
    for (let v = 0; v < 17; v++) {
        this.modifiers[v] = 0;
    }
    let list = this.getList();
    let t = 0;
    for (let i in s) {
        var block = World.getBlock(x + s[i].x, y + s[i].y, z + s[i].z);
        for (let u in list) {
            if (block.id === list[u]) {
                this.modifiers[t]++;
                break;
            }
            t++;
        }
        t = 0;
    }
    return this.modifiers;
}};
var modEffectApi = {setEffectList: function () {
    var effects = [null, 1, null, null, 10, 22, 3, 11, 13, 8, 16, null, "fly", 21, 12, 14, 5];
    return effects;
}, setUgradesList: function () {
    var upgrades = ["piezo", "accuracy"];
    return upgrades;
}};

