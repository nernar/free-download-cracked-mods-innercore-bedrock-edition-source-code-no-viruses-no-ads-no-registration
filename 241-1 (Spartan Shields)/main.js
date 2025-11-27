importLib("ToolType", "*");
IDRegistry.genItemID("woodenshield");
Item.createItem("woodenshield", "Wooden Shield", {name: "wooden_shield", meta: 0}, {isTech: false, stack: 1});
Item.setMaxDamage(ItemID.woodenshield, 53);
IDRegistry.genItemID("stoneshield");
Item.createItem("stoneshield", "Stone Shield", {name: "stone_shield", meta: 0}, {isTech: false, stack: 1});
Item.setMaxDamage(ItemID.stoneshield, 117);
IDRegistry.genItemID("ironshield");
Item.createItem("ironshield", "Iron Shield", {name: "iron_shield", meta: 0}, {isTech: false, stack: 1});
Item.setMaxDamage(ItemID.ironshield, 247);
IDRegistry.genItemID("goldenshield");
Item.createItem("goldenshield", "Golden Shield", {name: "golden_shield", meta: 0}, {isTech: false, stack: 1});
Item.setMaxDamage(ItemID.goldenshield, 356);
IDRegistry.genItemID("diamondshield");
Item.createItem("diamondshield", "Diamond Shield", {name: "diamond_shield", meta: 0}, {isTech: false, stack: 1});
Item.setMaxDamage(ItemID.diamondshield, 538);
IDRegistry.genItemID("nethershield");
Item.createItem("nethershield", "Nether Shield", {name: "nether_shield", meta: 0}, {isTech: false, stack: 1});
Item.setMaxDamage(ItemID.nethershield, 538);
IDRegistry.genItemID("endershield");
Item.createItem("endershield", "Ender Shield", {name: "ender_shield", meta: 0}, {isTech: false, stack: 1});
Item.setMaxDamage(ItemID.endershield, 538);
Callback.addCallback("EntityHurt", function (attacker, victim, damage) {
    if (Entity.getCarriedItem(victim).id === ItemID.endershield) {
        var ent = Entity.getPosition(attacker);
        var rand = Entity.getDistanceToEntity(attacker, victim);
        var vic = Entity.getPosition(victim);
        if (Entity.getPosition(attacker, ent.x + rand, ent.y, ent.z)) {
            Entity.addPosition(attacker, ent.x + 3, ent.y + 3, ent.z);
        } else {
            if (Entity.getPosition(attacker, ent.x, ent.y, ent.z + rand)) {
                Entity.addPosition(attacker, ent.x, ent.y + 3, ent.z + 3);
            } else {
                if (Entity.getPosition(attacker, ent.x, ent.y, ent.z - rand)) {
                    Entity.addPosition(attacker, ent.x, ent.y + 3, ent.z - 3);
                } else {
                    Entity.addPosition(attacker, ent.x - 3, ent.y + 3, ent.z);
                }
            }
        }
        Entity.setVelocity(victim, -0.75, -0.75, -0.75);
        var health = Entity.getHealth(victim);
        Entity.setHealth(victim, health + damage);
        ToolAPI.breakCarriedTool(1);
    }
});
Callback.addCallback("PostLoaded", function () {
    Recipes.addShaped({id: ItemID.woodenshield, count: 1, data: 0}, [" ab", "aaa", "ba "], ["a", 280, 0, "b", 5, 0]);
    Recipes.addShaped({id: ItemID.woodenshield, count: 1, data: 0}, [" ab", "aaa", "ba "], ["a", 280, 0, "b", 5, 1]);
    Recipes.addShaped({id: ItemID.woodenshield, count: 1, data: 0}, [" ab", "aaa", "ba "], ["a", 280, 0, "b", 5, 2]);
    Recipes.addShaped({id: ItemID.woodenshield, count: 1, data: 0}, [" ab", "aaa", "ba "], ["a", 280, 0, "b", 5, 3]);
    Recipes.addShaped({id: ItemID.woodenshield, count: 1, data: 0}, [" ab", "aaa", "ba "], ["a", 280, 0, "b", 5, 4]);
    Recipes.addShaped({id: ItemID.woodenshield, count: 1, data: 0}, [" ab", "aaa", "ba "], ["a", 280, 0, "b", 5, 5]);
    Recipes.addShaped({id: ItemID.stoneshield, count: 1, data: 0}, [" b ", "bab", " b "], ["a", ItemID.woodenshield, 0, "b", 1, 0]);
    Recipes.addShaped({id: ItemID.ironshield, count: 1, data: 0}, [" b ", "bab", " b "], ["a", ItemID.woodenshield, 0, "b", 265, 0]);
    Recipes.addShaped({id: ItemID.goldenshield, count: 1, data: 0}, [" b ", "bab", " b "], ["a", ItemID.woodenshield, 0, "b", 266, 0]);
    Recipes.addShaped({id: ItemID.diamondshield, count: 1, data: 0}, [" b ", "bab", " b "], ["a", ItemID.woodenshield, 0, "b", 264, 0]);
    Recipes.addShaped({id: ItemID.nethershield, count: 1, data: 0}, ["cbc", "bab", "cbc"], ["a", ItemID.diamondshield, 0, "b", 87, 0, "c", 377, 0]);
    Recipes.addShaped({id: ItemID.endershield, count: 1, data: 0}, ["cbc", "bab", "cbc"], ["a", ItemID.diamondshield, 0, "b", 381, 0, "c", 368, 0]);
});
Callback.addCallback("EntityHurt", function (attacker, victim, damage) {
    var p = (180 / Math.PI * (Entity.getLookAngle(attacker).pitch + 90));
    var y = (180 / Math.PI * (Entity.getLookAngle(attacker).yaw + 90));
    var xx = Math.sin(p) * Math.cos(y);
    var yy = Math.sin(p) * Math.sin(y);
    var zz = Math.cos(p);
    if (Entity.getCarriedItem(victim).id == ItemID.woodenshield) {
        var health = Entity.getHealth(victim);
        Entity.setHealth(victim, health + damage);
        Entity.setVelocity(attacker, 0.75 * xx, 0.5 * zz, 0.75 * yy);
        Entity.setVelocity(victim, -0.3, -0.3, -0.3);
        ToolAPI.breakCarriedTool(1);
    }
});
Callback.addCallback("EntityHurt", function (attacker, victim, damage) {
    var p = (180 / Math.PI * (Entity.getLookAngle(attacker).pitch + 90));
    var y = (180 / Math.PI * (Entity.getLookAngle(attacker).yaw + 90));
    var xx = Math.sin(p) * Math.cos(y);
    var yy = Math.sin(p) * Math.sin(y);
    var zz = Math.cos(p);
    if (Entity.getCarriedItem(victim).id == ItemID.stoneshield) {
        var health = Entity.getHealth(victim);
        Entity.setHealth(victim, health + damage);
        Entity.setVelocity(attacker, 1 * xx, 0.55 * zz, 1 * yy);
        Entity.setVelocity(victim, -0.3, -0.3, -0.3);
        ToolAPI.breakCarriedTool(1);
    }
});
Callback.addCallback("EntityHurt", function (attacker, victim, damage) {
    var p = (180 / Math.PI * (Entity.getLookAngle(attacker).pitch + 90));
    var y = (180 / Math.PI * (Entity.getLookAngle(attacker).yaw + 90));
    var xx = Math.sin(p) * Math.cos(y);
    var yy = Math.sin(p) * Math.sin(y);
    var zz = Math.cos(p);
    if (Entity.getCarriedItem(victim).id == ItemID.ironshield) {
        var health = Entity.getHealth(victim);
        Entity.setHealth(victim, health + damage);
        Entity.setVelocity(attacker, 1.1 * xx, 0.57 * zz, 1.1 * yy);
        Entity.setVelocity(victim, -0.5, -0.5, -0.5);
        ToolAPI.breakCarriedTool(1);
    }
});
Callback.addCallback("EntityHurt", function (attacker, victim, damage) {
    var p = (180 / Math.PI * (Entity.getLookAngle(attacker).pitch + 90));
    var y = (180 / Math.PI * (Entity.getLookAngle(attacker).yaw + 90));
    var xx = Math.sin(p) * Math.cos(y);
    var yy = Math.sin(p) * Math.sin(y);
    var zz = Math.cos(p);
    if (Entity.getCarriedItem(victim).id == ItemID.goldenshield) {
        var health = Entity.getHealth(victim);
        Entity.setHealth(victim, health + damage);
        Entity.setVelocity(attacker, 1.15 * xx, 0.58 * zz, 1.15 * yy);
        Entity.setVelocity(victim, -0.6, -0.6, -0.6);
        ToolAPI.breakCarriedTool(1);
    }
});
Callback.addCallback("EntityHurt", function (attacker, victim, damage) {
    var p = (180 / Math.PI * (Entity.getLookAngle(attacker).pitch + 90));
    var y = (180 / Math.PI * (Entity.getLookAngle(attacker).yaw + 90));
    var xx = Math.sin(p) * Math.cos(y);
    var yy = Math.sin(p) * Math.sin(y);
    var zz = Math.cos(p);
    if (Entity.getCarriedItem(victim).id == ItemID.diamondshield) {
        var health = Entity.getHealth(victim);
        Entity.setHealth(victim, health + damage);
        Entity.setVelocity(attacker, 1.25 * xx, 0.6 * zz, 1.25 * yy);
        Entity.setVelocity(victim, -0.75, -0.75, -0.75);
        ToolAPI.breakCarriedTool(1);
    }
});
Callback.addCallback("EntityHurt", function (attacker, victim, damage) {
    var p = (180 / Math.PI * (Entity.getLookAngle(attacker).pitch + 90));
    var y = (180 / Math.PI * (Entity.getLookAngle(attacker).yaw + 90));
    var xx = Math.sin(p) * Math.cos(y);
    var yy = Math.sin(p) * Math.sin(y);
    var zz = Math.cos(p);
    if (Entity.getCarriedItem(victim).id == ItemID.nethershield) {
        var health = Entity.getHealth(victim);
        Entity.setHealth(victim, health + damage);
        Entity.setVelocity(attacker, 1.25 * xx, 0.6 * zz, 1.25 * yy);
        Entity.setVelocity(victim, -0.75, -0.75, -0.75);
        Entity.setFire(attacker, 100);
        Entity.addEffect(victim, Native.PotionEffect.fireResistance, 3, 100);
        ToolAPI.breakCarriedTool(1);
    }
});

