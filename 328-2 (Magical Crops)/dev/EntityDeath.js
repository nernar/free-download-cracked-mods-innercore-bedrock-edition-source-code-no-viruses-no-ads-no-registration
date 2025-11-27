var animals = [10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28];
var monsters = [32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 54, 55];
var boss = [52, 53];
Callback.addCallback("EntityDeath", function (entity) {
    var item = Player.getCarriedItem();
    if (config.animals_dropping) {
        for (var i = 0; i < animals.length; i++) {
            if (Entity.getType(entity) == animals[i]) {
                var coords = Entity.getPosition(entity);
                if (Math.random() <= config.chance_animals_dropping) {
                    World.drop(coords.x, coords.y, coords.z, ItemID.minicioEssence, 1, 0);
                }
            }
        }
    }
    if (config.monsters_dropping) {
        for (var i = 0; i < monsters.length; i++) {
            if (Entity.getType(entity) == monsters[i]) {
                var coords = Entity.getPosition(entity);
                if (Math.random() <= config.chance_monsters_dropping) {
                    World.drop(coords.x, coords.y, coords.z, ItemID.minicioEssence, 1, 0);
                }
            }
        }
    }
    if (config.boss_dropping) {
        for (var i = 0; i < boss.length; i++) {
            if (Entity.getType(entity) == boss[i]) {
                var coords = Entity.getPosition(entity);
                World.drop(coords.x, coords.y, coords.z, ItemID.zivicioEssence, 2, 0);
            }
        }
    }
});

