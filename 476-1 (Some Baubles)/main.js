IMPORT("ToolType");
IMPORT("ToolLib");
IMPORT("BaublesAPI");
//baublefunctions
Baubles.registerBauble({
    id: ItemID.ironanklets,
    type: "charm",
    onEquip: function () {
        Entity.addEffect(Player.get(), Native.PotionEffect.damageResistance, 1, 9999999999, false, false)
    },

    onTakeOff: function () {
        Entity.clearEffect(Player.get(), 11);
    }
});

Baubles.registerBauble({
    id: ItemID.goldanklets,
    type: "charm",
    onEquip: function () {
        Entity.addEffect(Player.get(), Native.PotionEffect.damageResistance, 2, 9999999999, false, false)
    },

    onTakeOff: function () {
        Entity.clearEffect(Player.get(), 11);
    }
});


Baubles.registerBauble({
    id: ItemID.ironnecklace,
    type: "amulet",
    onEquip: function () {
        Entity.addEffect(Player.get(), Native.PotionEffect.healthBoost, 1, 9999999999, false, false)
    },

    onTakeOff: function () {
        Entity.clearEffect(Player.get(), 21);
    }
});

Baubles.registerBauble({
    id: ItemID.goldnecklace,
    type: "amulet",
    onEquip: function () {
        Entity.addEffect(Player.get(), Native.PotionEffect.healthBoost, 2, 9999999999, false, false)
    },

    onTakeOff: function () {
        Entity.clearEffect(Player.get(), 21);
    }
});


Baubles.registerBauble({
    id: ItemID.ironcrown,
    type: "head",
    onEquip: function () {
        Entity.addEffect(Player.get(), Native.PotionEffect.movementSpeed, 1, 9999999999, false, false)
    },

    onTakeOff: function () {
        Entity.clearEffect(Player.get(), 1);
    }
});

Baubles.registerBauble({
    id: ItemID.goldcrown,
    type: "head",
    onEquip: function () {
        Entity.addEffect(Player.get(), Native.PotionEffect.movementSpeed, 2, 9999999999, false, false)
    },

    onTakeOff: function () {
        Entity.clearEffect(Player.get(), 1);
    }
});

IDRegistry.genItemID("magicessence");
IDRegistry.genItemID("ironanklets");
IDRegistry.genItemID("ironnecklace");
IDRegistry.genItemID("ironcrown");
IDRegistry.genItemID("goldanklets");
IDRegistry.genItemID("goldnecklace");
IDRegistry.genItemID("goldcrown");


Item.createItem ("magicessence", "Essence", {name: "magic_essence", meta: 0}, {stack: 64});
Item.createItem ("ironanklets", "Iron Anklets", {name: "iron_anklets", meta: 0}, {stack: 1});
Item.createItem ("ironcrown", "Iron Crown", {name: "iron_crown", meta: 0}, {stack: 1});
Item.createItem ("ironnecklace", "Iron Necklace", {name: "iron_necklace", meta: 0}, {stack: 1});
Item.createItem ("goldanklets", "Gold Anklets", {name: "gold_anklets", meta: 0}, {stack: 1});
Item.createItem ("goldnecklace", "Gold Necklace", {name: "gold_necklace", meta: 0}, {stack: 1});
Item.createItem ("goldcrown", "Gold Crown", {name: "gold_crown", meta: 0}, {stack: 1});

Recipes.addShaped({id: ItemID.magicessence, count: 2, data: 0}, 
[" b ", 
 "a a",
 " b "],
["a", 377, 0, "b", 368, 0, "c", 1, 6]);
Recipes.addShaped({id: ItemID.ironanklets, count: 1, data: 0}, 
["a a", 
 " b ",
 " c "],
["a", 265, 0, "b", 287, 0, "c", ItemID.magicessence, 0]);
Recipes.addShaped({id: ItemID.ironcrown, count: 1, data: 0}, 
[" b ", 
 "aaa",
 " c "],
["a", 265, 0, "b", 287, 0, "c", ItemID.magicessence, 0]);
Recipes.addShaped({id: ItemID.ironnecklace, count: 1, data: 0}, 
["a a", 
 "bab",
 " c "],
["a", 265, 0, "b", 287, 0, "c", ItemID.magicessence, 0]);
Recipes.addShaped({id: ItemID.goldanklets, count: 1, data: 0}, 
["a a", 
 " b ",
 " c "],
["a", 266, 0, "b", 287, 0, "c", ItemID.magicessence, 0]);
Recipes.addShaped({id: ItemID.goldcrown, count: 1, data: 0}, 
[" b ", 
 "aaa",
 " c "],
["a", 266, 0, "b", 287, 0, "c", ItemID.magicessence, 0]);
Recipes.addShaped({id: ItemID.goldnecklace, count: 1, data: 0}, 
["a a", 
 "bab",
 " c "],
["a", 266, 0, "b", 287, 0, "c", ItemID.magicessence, 0]);