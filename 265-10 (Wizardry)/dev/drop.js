Callback.addCallback("EntityDeath", function (entity) {
    var coords = Entity.getPosition(entity);
    if (Entity.getType(entity) == WITCH_ID && Math.random() < 0.125) {
        World.drop(coords.x + 0.5, coords.y + 0.1, coords.z + 0.5, ItemID.myst_page, 1, 0);
    }
    if (Entity.getType(entity) == WITCH_ID && Math.random() < 0.125) {
        World.drop(coords.x + 0.5, coords.y + 0.1, coords.z + 0.5, ItemID.spell_healing, 1, 0);
    }
    if (Entity.getType(entity) == BLAZE_ID && Math.random() < 0.125) {
        World.drop(coords.x + 0.5, coords.y + 0.1, coords.z + 0.5, ItemID.spell_fire, 1, 0);
    }
    if (Entity.getType(entity) == SNOW_GOLEM_ID && Math.random() < 0.125) {
        World.drop(coords.x + 0.5, coords.y + 0.1, coords.z + 0.5, ItemID.spell_freeze, 1, 0);
    }
    if (Entity.getType(entity) == CREEPER_ID && Math.random() < 0.125) {
        World.drop(coords.x + 0.5, coords.y + 0.1, coords.z + 0.5, ItemID.spell_lightning, 1, 0);
    }
    if (Entity.getType(entity) == BAT_ID && Math.random() < 0.125) {
        World.drop(coords.x + 0.5, coords.y + 0.1, coords.z + 0.5, ItemID.spell_summon, 1, 0);
    }
    if (Entity.getType(entity) == MAGMA_CUBE_ID && Math.random() < 0.125) {
        World.drop(coords.x + 0.5, coords.y + 0.1, coords.z + 0.5, ItemID.spell_magma, 1, 0);
    }
});

