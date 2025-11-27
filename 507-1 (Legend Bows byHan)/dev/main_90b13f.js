IMPORT("Bow");
IDRegistry.genItemID("hellfireBow");
IDRegistry.genItemID("thunderbane");
IDRegistry.genItemID("reinforcedBow");
IDRegistry.genItemID("goldenShower");
Item.createItem("hellfireBow", "Hellfire Bow\xa77\nShoots fire arrow\nLast 9999 ticks.", {"name": "hellfire_bow", "meta": 0}, {stack: 1});
Item.describeItem("hellfireBow", {toolRender: true, useAnimation: 4});
Item.createItem("thunderbane", "\xa7aThunderbane\xa77\nShoots the thunder of the zeus arrow\nDamage 9999.", {"name": "thunderbane", "meta": 0}, {stack: 1});
Item.describeItem("thunderbane", {toolRender: true, useAnimation: 4});
Item.createItem("reinforcedBow", "\xa74Reinforced Bow\xa77\nShoots tnt\nExplosive", {"name": "reinforced_bow", "meta": 0}, {stack: 1});
Item.describeItem("reinforcedBow", {toolRender: true, useAnimation: 4});
Item.createItem("goldenShower", "\xa76Golden Shower\xa77\nFires at a speed of light", {"name": "golden_shower", "meta": 0}, {stack: 1});
Item.describeItem("goldenShower", {toolRender: true, useAnimation: 4});
var HellfireCustomBow = new Bow();
HellfireCustomBow.set({id: ItemID.hellfireBow, texture: "hellfire_bow", bullets: [262], skin: "entity/arrow_hellfire.png", speed: 2, damage: 4.5, variations: 3, arrow_id: 1});
var ThunderbaneBow = new Bow();
ThunderbaneBow.set({id: ItemID.thunderbane, texture: "thunderbane", bullets: [262], skin: "entity/arrow_thunderbane.png", speed: 3, damage: 4999.5, variations: 3, arrow_id: 2});
var ReinforcedBow = new Bow();
ReinforcedBow.set({id: ItemID.reinforcedBow, texture: "reinforced_bow", bullets: [46], skin: "entity/arrow_tnt.png", speed: 3, damage: 2, variations: 3, arrow_id: 3});
var GoldenShower = new Bow();
GoldenShower.set({id: ItemID.goldenShower, texture: "golden_shower", bullets: [371], skin: "entity/arrow_gold.png", speed: 5, damage: 2, variations: 11, arrow_id: 4});
Callback.addCallback("BowArrowEntityDamage", function (attacker, victim, damage) {
    if (Entity.getCarriedItem(attacker) == ItemID.hellfireBow) {
        Entity.setFire(victim, 9999, 10);
    }
    alert("A mob is being hurt by arrow");
});
Callback.addCallback("CustomArrowSpawn", function (projectile, arrow_id) {
    if (arrow_id == 1) {
        Entity.setFire(projectile, 9999);
    }
});
Callback.addCallback("CustomArrowLand", function (projectile, arrow_id) {
    var pos = Entity.getPosition(projectile);
    if (arrow_id == 1) {
        Entity.remove(projectile);
    } else {
        if (arrow_id == 2) {
            Entity.remove(projectile);
        } else {
            if (arrow_id == 3) {
                Entity.remove(projectile);
            } else {
                if (arrow_id == 4) {
                    Entity.remove(projectile);
                }
            }
        }
    }
});
Callback.addCallback("CustomArrowRemoved", function (pos, arrow_id) {
    if (arrow_id == 1) {
        World.explode(pos.x, pos.y, pos.z, 1, true);
    } else {
        if (arrow_id == 2) {
            Entity.spawn(pos.x, pos.y, pos.z, 93);
        } else {
            if (arrow_id == 3) {
                Entity.spawn(pos.x, pos.y, pos.z, 65);
            }
        }
    }
});
var timer = 0;
Callback.addCallback("BowStateChange", function (bow) {
    var id = bow.id;
    if (id == ItemID.goldenShower && timer % 1 == 0) {
        Bows.shoot();
    }
    timer++;
});
Recipes.addShaped({id: ItemID.hellfireBow, count: 1, data: 0}, ["bbb", "bcb", "bbb"], ["c", 261, 0, "b", 378, 0]);
Recipes.addShaped({id: ItemID.thunderbane, count: 1, data: 0}, ["bbb", "bcb", "bbb"], ["c", 261, 0, "b", 208, 0]);
Recipes.addShaped({id: ItemID.reinforcedBow, count: 1, data: 0}, ["brb", "rcr", "brb"], ["c", 261, 0, "b", 265, 0, "r", 331]);
Recipes.addShaped({id: ItemID.goldenShower, count: 1, data: 0}, ["bbb", "bcb", "bbb"], ["c", 261, 0, "b", 41, 0]);

