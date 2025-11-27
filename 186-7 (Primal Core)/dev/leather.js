Generator.setItem("tannin_ground", {name: "Tannin ground", texture: "tannin_ground", stack: 64});
Generator.setItem("tannin_bottle", {name: "Bottle of tannin", texture: "tannin_bottle", stack: 64});
LiquidRegistry.registerItem("tannin", {id: 374, data: 0}, {id: ItemID.tannin_bottle, data: 0});
Generator.setItem("pelt_animal", {name: "Animal pelt", texture: "pelt_animal", stack: 64});
Generator.setItem("pelt_animal_large", {name: "Animal pelt large", texture: "pelt_animal_large", stack: 64});
Generator.setItem("hide_raw", {name: "Raw hide", texture: "hide_raw", stack: 64});
Generator.setItem("hide_salted", {name: "Salted hide", texture: "hide_salted", stack: 64});
Generator.setItem("hide_dried", {name: "Dried hide", texture: "hide_dried", stack: 64});
Generator.setItem("hide_tanned", {name: "Tanned hide", texture: "hide_tanned", stack: 64});
Callback.addCallback("PostLoaded", function () {
    Recipes.addShaped({id: ItemID.tannin_ground, count: 1, data: 0}, ["bb"], ["b", ItemID.wood_bark, 0]);
    Recipes.addShaped({id: ItemID.tannin_bottle, count: 1, data: 0}, ["wt"], ["w", 373, 0, "t", ItemID.tannin_ground, 0]);
    Recipes.addShapeless({id: ItemID.hide_salted, count: 1, data: 0}, [{id: ItemID.hide_raw, data: 0}, {id: ItemID.salt_rock, data: 0}]);
    Callback.addCallback("EntityDeath", function (ent, attacker, damageType) {
        let c = Entity.getPosition(ent);
        if ((Entity.getType(ent) == 11 || Entity.getType(ent) == 23 || Entity.getType(ent) == 24 || Entity.getType(ent) == 25)) {
            Game.prevent();
            World.drop(c.x + 0.5, c.y + 0.5, c.z + 0.5, ItemID.pelt_animal, Math.random() * 5, 0);
            if (Entity.getType(ent) == 11) {
                World.drop(c.x + 0.5, c.y + 0.5, c.z + 0.5, 363, Math.random() * 2, 0);
            }
            if (Math.random() < 0.5) {
                World.drop(c.x + 0.5, c.y + 0.5, c.z + 0.5, ItemID.pelt_animal_large, 1, 0);
            }
        }
    });
    for (i in workblades) {
        Recipes.addCraftToolRecipeItem({id: ItemID.hide_raw, count: 3, data: 0}, [{id: ItemID.pelt_animal, data: 0}], workblades[i]);
        Recipes.addCraftToolRecipeItem({id: ItemID.hide_raw, count: 6, data: 0}, [{id: ItemID.pelt_animal_large, data: 0}], workblades[i]);
    }
    Cauldron.addRecipe([ItemID.hide_dried, 0, 0, 0], {id: ItemID.hide_tanned, data: 0, liquid: {name: "tannin", amount: 1}});
});

