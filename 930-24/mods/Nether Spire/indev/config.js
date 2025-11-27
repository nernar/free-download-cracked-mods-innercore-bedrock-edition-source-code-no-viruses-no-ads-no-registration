__config__.checkAndRestore({spawn_enemy_limit: 3, dimensional_explodes: true, animated_deteriorate: false, obsidian_spire: false, ignore_leaved_players: false, expensive_craft: false, preserve_stealing_gold: false});
if (!__config__.getBool("override_reactor_spawn")) {
    NetherSpire.registerSpawnItem(VanillaItemID.melon_seeds);
    NetherSpire.registerSpawnItem(VanillaTileID.brown_mushroom);
    NetherSpire.registerSpawnItem(VanillaTileID.red_mushroom);
    NetherSpire.registerSpawnItem(338);
    NetherSpire.registerSpawnItem(VanillaTileID.cactus);
    NetherSpire.registerSpawnItem(VanillaItemID.quartz, 4);
    NetherSpire.registerSpawnItem(VanillaItemID.pumpkin_seeds);
    NetherSpire.registerSpawnItem(VanillaItemID.glowstone_dust, 3);
    NetherSpire.registerSpawnEntity(EEntityType.PIG_ZOMBIE);
}
(function () {
    try {
        let dimensions = __config__.getString("allowed_dimensions");
        if (dimensions != null && dimensions.length != 0) {
            dimensions = (new String(dimensions)).split(",");
            for (let i = 0, l = dimensions.length; i < l; i++) {
                let dimension = dimensions[i];
                dimension = EDimension[dimension.toUpperCase()] || parseInt(dimension);
                NetherSpire.registerAllowedDimension(dimension);
            }
        }
        let items = __config__.getString("custom_spawn_items");
        if (items != null && items.length != 0) {
            items = (new String(items)).split(",");
            for (let i = 0, l = items.length; i < l; i++) {
                let item = items[i].split(":");
                item[0] = ItemID[item[0]] || BlockID[item[0]] || VanillaItemID[item[0]] || VanillaTileID[item[0]] || parseInt(item[0]);
                if (item.length > 1) {
                    item[1] = parseInt(item[1]);
                }
                if (item.length > 2) {
                    item[2] = parseInt(item[2]);
                }
                if (item.length > 3) {
                    let extra = new ItemExtraData();
                    extra.setAllCustomData(item[3]);
                    item[3] = extra;
                }
                NetherSpire.registerSpawnItem(item[0], item[1], item[2], item[3]);
            }
        }
        let entities = __config__.getString("custom_spawn_entities");
        if (entities != null && entities.length != 0) {
            entities = (new String(entities)).split(",");
            for (let i = 0, l = entities.length; i < l; i++) {
                let entity = entities[i];
                entity = EEntityType[entity.toUpperCase()] || parseInt(entity);
                NetherSpire.registerSpawnEntity(entity);
            }
        }
    }
    catch (e) {
        Logger.Log("Nether Spire: Unexpected exception during additional config registration!", "ERROR");
        Logger.Log("Nether Spire: " + e.message + "\n" + e.stack, "ERROR");
        Logger.LogError(e);
    }
})();

