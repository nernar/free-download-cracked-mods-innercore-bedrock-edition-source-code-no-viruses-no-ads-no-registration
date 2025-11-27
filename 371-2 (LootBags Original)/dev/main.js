function createBag(name, title, texturename) {
    IDRegistry.genItemID(name);
    Item.createItem(name, title, {name: texturename, meta: 0}, {stack: 1});
}
createBag("common_lbag", "Common Loot Bag\xa7r", "common_lbag");
createBag("uncommon_lbag", "\xa7aUncommon Loot Bag\xa7r", "uncommon_lbag");
createBag("rare_lbag", "\xa71Rare Loot Bag\xa7r", "rare_lbag");
createBag("epic_lbag", "\xa7dEpic Loot Bag\xa7r", "epic_lbag");
createBag("legendary_lbag", "\xa76Legendary Loot Bag\xa7r", "legendary_lbag");
Item.registerNameOverrideFunction(ItemID.common_lbag, function (item, name) {
    return name + "\n\xa7bOoh, what could be inside?\xa7r";
});
Item.registerNameOverrideFunction(ItemID.uncommon_lbag, function (item, name) {
    return name + "\n\xa7bOoh, what could be inside?\xa7r";
});
Item.registerNameOverrideFunction(ItemID.rare_lbag, function (item, name) {
    return name + "\n\xa7bOoh, what could be inside?\xa7r";
});
Item.registerNameOverrideFunction(ItemID.epic_lbag, function (item, name) {
    return name + "\n\xa7bOoh, what could be inside?\xa7r";
});
Item.registerNameOverrideFunction(ItemID.legendary_lbag, function (item, name) {
    return name + "\n\xa7bOoh, what could be inside?\xa7r";
});
IDRegistry.genBlockID("recycler_lbag");
Block.createBlock("recycler_lbag", [{name: "Lootbag Recycler", texture: [["recycler_lbag", 0]], inCreative: true}], "opaque");
IDRegistry.genBlockID("opener_lbag");
Block.createBlock("opener_lbag", [{name: "Bag Opener", texture: [["opener_lbag", 0]], inCreative: true}], "opaque");
Recipes.addShaped({id: ItemID.legendary_lbag, count: 1, data: 0}, ["xx ", "xx ", "   "], ["x", ItemID.epic_lbag, 0]);
Recipes.addShaped({id: ItemID.epic_lbag, count: 1, data: 0}, ["xx ", "xx ", "   "], ["x", ItemID.rare_lbag, 0]);
Recipes.addShaped({id: ItemID.rare_lbag, count: 1, data: 0}, ["xx ", "xx ", "   "], ["x", ItemID.uncommon_lbag, 0]);
Recipes.addShaped({id: ItemID.uncommon_lbag, count: 1, data: 0}, ["xx ", "xx ", "   "], ["x", ItemID.common_lbag, 0]);
Recipes.addShaped({id: BlockID.recycler_lbag, count: 1, data: 0}, ["sss", "scs", "sis"], ["s", 1, 0, "c", 54, 0, "i", 265, 0]);
Recipes.addShaped({id: BlockID.opener_lbag, count: 1, data: 0}, ["sis", "scs", "sss"], ["s", 1, 0, "c", 54, 0, "i", 265, 0]);
function additem(tablev, v_id, v_data, v_chance, v_name) {
    var v_chance_prim = v_chance;
    while (v_chance_prim > 0) {
        tablev.push({id: v_id, data: v_data, chance: 1, name: v_name});
        v_chance_prim--;
    }
}
var rand1, rand2, rand3, rand4, rand5;
function rands(total, a, b, c, d, e) {
    rand1 = Math.random() * a * total;
    rand2 = Math.random() * b * total;
    rand3 = Math.random() * c * total;
    rand4 = Math.random() * d * total;
    rand5 = Math.random() * e * total;
}
function mixing(v_table) {
    for (var x = 0; x < v_table.length; x++) {
        var y = Math.floor(Math.random() * v_table.length);
        var temp = v_table[x];
        v_table[x] = v_table[y];
        v_table[y] = temp;
    }
    return v_table;
}
const common_drop_vanilla = [];
additem(common_drop_vanilla, 264, 0, 2, "Diamond");
additem(common_drop_vanilla, 325, 0, 3, "Bucket");
additem(common_drop_vanilla, 351, 0, 5, "Ink Sac");
additem(common_drop_vanilla, 265, 0, 3, "Iron Ingot");
additem(common_drop_vanilla, 322, 0, 2, "Golden Apple");
additem(common_drop_vanilla, 362, 0, 4, "Melon Seeds");
additem(common_drop_vanilla, 367, 0, 5, "Rotten Flesh");
additem(common_drop_vanilla, 6, 0, 5, "Sapling");
additem(common_drop_vanilla, 388, 0, 2, "Emerald");
additem(common_drop_vanilla, 50, 0, 4, "Torch");
additem(common_drop_vanilla, 418, 0, 3, "Golden Horse Armor");
additem(common_drop_vanilla, 257, 0, 3, "Iron Pickaxe");
additem(common_drop_vanilla, 368, 0, 2, "Ender Pearl");
additem(common_drop_vanilla, 339, 0, 5, "Paper");
additem(common_drop_vanilla, 260, 0, 5, "Apple");
additem(common_drop_vanilla, 309, 0, 3, "Iron Boots");
additem(common_drop_vanilla, 49, 0, 3, "Obsidian");
additem(common_drop_vanilla, 375, 0, 5, "Spider Eye");
additem(common_drop_vanilla, 27, 0, 3, "Powered Rail");
additem(common_drop_vanilla, 12, 0, 5, "Sand");
additem(common_drop_vanilla, 289, 0, 5, "Gunpowder");
additem(common_drop_vanilla, 458, 0, 5, "Beetroot Seeds");
additem(common_drop_vanilla, 331, 0, 4, "Redstone");
additem(common_drop_vanilla, 419, 0, 2, "Diamond Horse Armor");
additem(common_drop_vanilla, 345, 0, 4, "Compass");
additem(common_drop_vanilla, 329, 0, 3, "Saddle");
additem(common_drop_vanilla, 287, 0, 5, "String");
additem(common_drop_vanilla, 297, 0, 5, "Bread");
additem(common_drop_vanilla, 262, 0, 5, "Arrow");
additem(common_drop_vanilla, 361, 0, 5, "Pumpkin Seeds");
additem(common_drop_vanilla, 266, 0, 3, "Gold Ingot");
additem(common_drop_vanilla, 263, 0, 5, "Coal");
additem(common_drop_vanilla, 306, 0, 3, "Iron Helmet");
additem(common_drop_vanilla, 308, 0, 3, "Iron Leggings");
additem(common_drop_vanilla, 307, 0, 3, "Iron Chestplate");
additem(common_drop_vanilla, 417, 0, 3, "Iron Horse Armor");
additem(common_drop_vanilla, 340, 0, 4, "Book");
additem(common_drop_vanilla, 395, 0, 4, "Empty Map");
additem(common_drop_vanilla, 66, 0, 4, "Rail");
additem(common_drop_vanilla, 296, 0, 5, "Wheat");
additem(common_drop_vanilla, 28, 0, 3, "Detector Rail");
additem(common_drop_vanilla, 421, 0, 4, "Name Tag");
additem(common_drop_vanilla, 267, 0, 3, "Iron Sword");
additem(common_drop_vanilla, 352, 0, 5, "Bone");
var common_drop_vanilla_chance = 0;
for (var i in common_drop_vanilla) {
    common_drop_vanilla_chance += common_drop_vanilla[i].chance;
}
const rare_drop_vanilla = [];
additem(rare_drop_vanilla, 264, 0, 2, "Diamond");
additem(rare_drop_vanilla, 325, 0, 3, "Bucket");
additem(rare_drop_vanilla, 351, 0, 5, "Ink Sac");
additem(rare_drop_vanilla, 265, 0, 3, "Iron Ingot");
additem(rare_drop_vanilla, 322, 0, 2, "Golden Apple");
additem(rare_drop_vanilla, 362, 0, 4, "Melon Seeds");
additem(rare_drop_vanilla, 367, 0, 5, "Rotten Flesh");
additem(rare_drop_vanilla, 6, 0, 5, "Sapling");
additem(rare_drop_vanilla, 388, 0, 2, "Emerald");
additem(rare_drop_vanilla, 418, 0, 3, "Golden Horse Armor");
additem(rare_drop_vanilla, 257, 0, 3, "Iron Pickaxe");
additem(rare_drop_vanilla, 368, 0, 2, "Ender Pearl");
additem(rare_drop_vanilla, 260, 0, 5, "Apple");
additem(rare_drop_vanilla, 309, 0, 3, "Iron Boots");
additem(rare_drop_vanilla, 49, 0, 3, "Obsidian");
additem(rare_drop_vanilla, 27, 0, 3, "Powered Rail");
additem(rare_drop_vanilla, 12, 0, 5, "Sand");
additem(rare_drop_vanilla, 289, 0, 5, "Gunpowder");
additem(rare_drop_vanilla, 458, 0, 5, "Beetroot Seeds");
additem(rare_drop_vanilla, 331, 0, 4, "Redstone");
additem(rare_drop_vanilla, 419, 0, 2, "Diamond Horse Armor");
additem(rare_drop_vanilla, 345, 0, 4, "Compass");
additem(rare_drop_vanilla, 329, 0, 3, "Saddle");
additem(rare_drop_vanilla, 287, 0, 5, "String");
additem(rare_drop_vanilla, 297, 0, 5, "Bread");
additem(rare_drop_vanilla, 361, 0, 5, "Pumpkin Seeds");
additem(rare_drop_vanilla, 266, 0, 3, "Gold Ingot");
additem(rare_drop_vanilla, 263, 0, 5, "Coal");
additem(rare_drop_vanilla, 306, 0, 3, "Iron Helmet");
additem(rare_drop_vanilla, 308, 0, 3, "Iron Leggings");
additem(rare_drop_vanilla, 307, 0, 3, "Iron Chestplate");
additem(rare_drop_vanilla, 417, 0, 3, "Iron Horse Armor");
additem(rare_drop_vanilla, 340, 0, 4, "Book");
additem(rare_drop_vanilla, 395, 0, 4, "Empty Map");
additem(rare_drop_vanilla, 28, 0, 3, "Detector Rail");
additem(rare_drop_vanilla, 267, 0, 3, "Iron Sword");
additem(rare_drop_vanilla, 106, 0, 4, "Vines");
var rare_drop_vanilla_chance = 0;
for (var i in rare_drop_vanilla) {
    rare_drop_vanilla_chance += rare_drop_vanilla[i].chance;
}
const epic_drop_vanilla = [];
additem(epic_drop_vanilla, 264, 0, 2, "Diamond");
additem(epic_drop_vanilla, 325, 0, 3, "Bucket");
additem(epic_drop_vanilla, 351, 0, 5, "Ink Sac");
additem(epic_drop_vanilla, 265, 0, 3, "Iron Ingot");
additem(epic_drop_vanilla, 322, 0, 2, "Golden Apple");
additem(epic_drop_vanilla, 362, 0, 4, "Melon Seeds");
additem(epic_drop_vanilla, 6, 0, 5, "Sapling");
additem(epic_drop_vanilla, 388, 0, 2, "Emerald");
additem(epic_drop_vanilla, 418, 0, 3, "Golden Horse Armor");
additem(epic_drop_vanilla, 257, 0, 3, "Iron Pickaxe");
additem(epic_drop_vanilla, 368, 0, 2, "Ender Pearl");
additem(epic_drop_vanilla, 309, 0, 3, "Iron Boots");
additem(epic_drop_vanilla, 49, 0, 3, "Obsidian");
additem(epic_drop_vanilla, 27, 0, 3, "Powered Rail");
additem(epic_drop_vanilla, 12, 0, 5, "Sand");
additem(epic_drop_vanilla, 289, 0, 5, "Gunpowder");
additem(epic_drop_vanilla, 458, 0, 5, "Beetroot Seeds");
additem(epic_drop_vanilla, 331, 0, 4, "Redstone");
additem(epic_drop_vanilla, 419, 0, 2, "Diamond Horse Armor");
additem(epic_drop_vanilla, 345, 0, 4, "Compass");
additem(epic_drop_vanilla, 329, 0, 3, "Saddle");
additem(epic_drop_vanilla, 287, 0, 5, "String");
additem(epic_drop_vanilla, 361, 0, 5, "Pumpkin Seeds");
additem(epic_drop_vanilla, 266, 0, 3, "Gold Ingot");
additem(epic_drop_vanilla, 306, 0, 3, "Iron Helmet");
additem(epic_drop_vanilla, 308, 0, 3, "Iron Leggings");
additem(epic_drop_vanilla, 307, 0, 3, "Iron Chestplate");
additem(epic_drop_vanilla, 417, 0, 3, "Iron Horse Armor");
additem(epic_drop_vanilla, 340, 0, 4, "Book");
additem(epic_drop_vanilla, 395, 0, 4, "Empty Map");
additem(epic_drop_vanilla, 28, 0, 3, "Detector Rail");
additem(epic_drop_vanilla, 267, 0, 3, "Iron Sword");
var epic_drop_vanilla_chance = 0;
for (var i in epic_drop_vanilla) {
    epic_drop_vanilla_chance += epic_drop_vanilla[i].chance;
}
if (ItemID.rubber != null) {
    ic2 = true;
    const common_drop_ic2 = [];
    additem(common_drop_ic2, ItemID.rubberSapling, 0, 5, "Rubber Sapling");
    additem(common_drop_ic2, ItemID.latex, 0, 5, "Latex");
    additem(common_drop_ic2, ItemID.rubber, 0, 5, "Rubber");
    additem(common_drop_ic2, ItemID.dustCopper, 0, 2, "Dust Gold");
    additem(common_drop_ic2, ItemID.dustLead, 0, 5, "Dust Lead");
    additem(common_drop_ic2, ItemID.dustTin, 0, 5, "Dust Tin");
    additem(common_drop_ic2, ItemID.dustSilver, 0, 5, "Dust Silver");
    additem(common_drop_ic2, ItemID.dustBronze, 0, 4, "Dust Bronze");
    additem(common_drop_ic2, ItemID.dustIron, 0, 5, "Dust Iron");
    additem(common_drop_ic2, ItemID.dustSteel, 0, 5, "Dust Steel");
    additem(common_drop_ic2, ItemID.dustDiamond, 0, 2, "Dust Diamond");
    additem(common_drop_ic2, ItemID.dustCoal, 0, 5, "Dust Coal");
    additem(common_drop_ic2, ItemID.dustLapis, 0, 4, "Dust Lapis");
    additem(common_drop_ic2, ItemID.ingotBronze, 0, 4, "Bronze Ingot");
    additem(common_drop_ic2, ItemID.ingotCopper, 0, 5, "Copper Ingot");
    additem(common_drop_ic2, ItemID.ingotTin, 0, 5, "Tin Ingot");
    additem(common_drop_ic2, ItemID.ingotSteel, 0, 5, "Steel Ingot");
    additem(common_drop_ic2, ItemID.ingotLead, 0, 5, "Lead Ingot");
    additem(common_drop_ic2, ItemID.ingotSilver, 0, 5, "Silver Ingot");
    additem(common_drop_ic2, ItemID.plateTin, 0, 5, "Tin Plate");
    additem(common_drop_ic2, ItemID.plateIron, 0, 5, "Iron Plate");
    additem(common_drop_ic2, ItemID.plateSteel, 0, 5, "Steel Plate");
    additem(common_drop_ic2, ItemID.plateGold, 0, 4, "Gold Plate");
    additem(common_drop_ic2, ItemID.plateLead, 0, 5, "Lead Plate");
    additem(common_drop_ic2, ItemID.plateLapis, 0, 4, "Lapis Plate");
    additem(common_drop_ic2, ItemID.casingCopper, 0, 5, "Copper Casing");
    additem(common_drop_ic2, ItemID.casingTin, 0, 5, "Tin Casing");
    additem(common_drop_ic2, ItemID.casingBronze, 0, 5, "Bronze Casing");
    additem(common_drop_ic2, ItemID.casingIron, 0, 5, "Iron Casing");
    additem(common_drop_ic2, ItemID.casingGold, 0, 5, "Gold Casing");
    additem(common_drop_ic2, ItemID.casingLead, 0, 5, "Lead Casing");
    additem(common_drop_ic2, ItemID.scrapBox, 0, 5, "Scrap Box");
    additem(common_drop_ic2, ItemID.scrap, 0, 5, "Scrap");
    additem(common_drop_ic2, ItemID.ingotAlloy, 0, 2, "Alloy Ingot");
    additem(common_drop_ic2, ItemID.plateAlloy, 0, 2, "Alloy Plate");
    additem(common_drop_ic2, ItemID.cellEmpty, 0, 2, "Cell");
    additem(common_drop_ic2, ItemID.circuitBasic, 0, 2, "Circuit");
    additem(common_drop_ic2, ItemID.bronzeHelmet, 0, 2, "Bronze Helmet");
    additem(common_drop_ic2, ItemID.bronzeChestplate, 0, 2, "Bronze Chestplate");
    additem(common_drop_ic2, ItemID.bronzeLeggings, 0, 2, "Bronze Leggings");
    additem(common_drop_ic2, ItemID.bronzeBoots, 0, 2, "Bronze Boots");
    additem(common_drop_ic2, ItemID.treetap, 0, 5, "Treetap");
    additem(common_drop_ic2, ItemID.craftingHammer, 0, 4, "Forge Hammer");
    additem(common_drop_ic2, ItemID.craftingCutter, 0, 4, "Cutter");
    additem(common_drop_ic2, ItemID.bronzeSword, 0, 2, "Bronze Sword");
    additem(common_drop_ic2, ItemID.bronzeAxe, 0, 2, "Bronze Axe");
    additem(common_drop_ic2, ItemID.bronzePickaxe, 0, 2, "Bronze Pickaxe");
    additem(common_drop_ic2, ItemID.bronzeShovel, 0, 2, "Bronze Shovel");
    var common_drop_ic2_chance = 0;
    for (var i in common_drop_ic2) {
        common_drop_ic2_chance += common_drop_ic2[i].chance;
    }
} else {
    ic2 = false;
}
if (ItemID.silicon != null) {
    enderio = true;
    const common_drop_enderio = [];
    additem(common_drop_enderio, ItemID.electricalSteel, 0, 4, "Electrical Steel");
    additem(common_drop_enderio, ItemID.darkSteel, 0, 4, "Dark Steel");
    additem(common_drop_enderio, ItemID.energeticAlloy, 0, 3, "Energetic alloy");
    additem(common_drop_enderio, ItemID.pulsatingIron, 0, 3, "Pulsating iron");
    additem(common_drop_enderio, ItemID.redstoneAlloy, 0, 3, "Redstone alloy");
    additem(common_drop_enderio, ItemID.soulariumIngot, 0, 2, "Soularium");
    additem(common_drop_enderio, ItemID.vibrantAlloy, 0, 3, "Vibrant alloy");
    additem(common_drop_enderio, ItemID.vibrantNugget, 0, 3, "Vibrant nugget");
    additem(common_drop_enderio, ItemID.silicon, 0, 4, "Silicon");
    additem(common_drop_enderio, ItemID.conductiveIron, 0, 3, "Conductive iron");
    additem(common_drop_enderio, ItemID.binderComposite, 0, 2, "Binder composite");
    additem(common_drop_enderio, ItemID.conduitBinder, 0, 4, "Conduit binder");
    additem(common_drop_enderio, ItemID.coalPowder, 0, 4, "Coal Powder");
    var common_drop_enderio_chance = 0;
    for (var i in common_drop_enderio) {
        common_drop_enderio_chance += common_drop_enderio[i].chance;
    }
} else {
    enderio = false;
}
if (ItemID.darkMatter != null) {
    ee = true;
    const common_drop_ee = [];
    additem(common_drop_ee, ItemID.covDust1, 0, 3, "Covalence dust Low");
    additem(common_drop_ee, ItemID.covDust2, 0, 3, "Covalence dust Medium");
    additem(common_drop_ee, ItemID.covDust3, 0, 3, "Covalence dust High");
    additem(common_drop_ee, ItemID.rodDivining1, 0, 2, "Divining rod low");
    additem(common_drop_ee, ItemID.rodDivining2, 0, 2, "Divining rod medium");
    additem(common_drop_ee, ItemID.rodDivining3, 0, 2, "Divining rod high");
    var common_drop_ee_chance = 0;
    for (var i in common_drop_ee) {
        common_drop_ee_chance += common_drop_ee[i].chance;
    }
} else {
    ee = false;
}
const lbag_gui = new UI.StandartWindow({standart: {header: {text: {text: "Loot Bag"}, hideButton: true}, inventory: {standart: false}, background: {standart: true}}, elements: {"slot1": {type: "slot", x: 420, y: 160}, "slot2": {type: "slot", x: 480, y: 160}, "slot3": {type: "slot", x: 540, y: 160}, "slot4": {type: "slot", x: 600, y: 160}, "slot5": {type: "slot", x: 660, y: 160}, "close": {type: "button", x: 940, y: 20, bitmap: "close_button_up", scale: 3.2, clicker: {onClick: function (con, tile) {
    if (con.getSlot("slot1").id != 0) {
        World.drop(Player.getPosition().x, Player.getPosition().y, Player.getPosition().z, con.getSlot("slot1").id, 1, 0);
    }
    if (con.getSlot("slot2").id != 0) {
        World.drop(Player.getPosition().x, Player.getPosition().y, Player.getPosition().z, con.getSlot("slot2").id, 1, 0);
    }
    if (con.getSlot("slot3").id != 0) {
        World.drop(Player.getPosition().x, Player.getPosition().y, Player.getPosition().z, con.getSlot("slot3").id, 1, 0);
    }
    if (con.getSlot("slot4").id != 0) {
        World.drop(Player.getPosition().x, Player.getPosition().y, Player.getPosition().z, con.getSlot("slot4").id, 1, 0);
    }
    if (con.getSlot("slot5").id != 0) {
        World.drop(Player.getPosition().x, Player.getPosition().y, Player.getPosition().z, con.getSlot("slot5").id, 1, 0);
    }
    con.close();
}}}}});
Callback.addCallback("LevelLoaded", function () {
    if (ItemID.rubber == null) {
        ic2 = false;
    }
    if (ItemID.silicon == null) {
        enderio = false;
    }
});
Item.registerUseFunction("common_lbag", function (coords, item, block) {
    Game.prevent();
    var container = new UI.Container();
    container.openAs(lbag_gui);
    var connect_drop_table = [];
    connect_drop_table = connect_drop_table.concat(common_drop_vanilla);
    if (ic2) {
        connect_drop_table = connect_drop_table.concat(common_drop_ic2);
    }
    var chance_total = common_drop_vanilla_chance;
    if (ic2) {
        chance_total += common_drop_ic2_chance;
    }
    if (enderio) {
        connect_drop_table = connect_drop_table.concat(common_drop_enderio);
    }
    if (enderio) {
        chance_total += common_drop_enderio_chance;
    }
    var chance_current = 0;
    connect_drop_table = mixing(connect_drop_table);
    rands(chance_total, 1.5, 1.75, 2, 2.25, 2.5);
    var slot = [container.getSlot("slot1"), container.getSlot("slot2"), container.getSlot("slot3"), container.getSlot("slot4"), container.getSlot("slot5")];
    var chance_current = 0;
    var n = 0;
    for (var x in connect_drop_table) {
        var tempt = connect_drop_table[x];
        chance_current += tempt.chance;
        if (chance_current - tempt.chance < rand1 && rand1 < chance_current) {
            slot[n].id = tempt.id;
            slot[n].count = 1;
            slot[n].data = tempt.data;
            n++;
        } else {
            if (chance_current - tempt.chance < rand2 && rand2 < chance_current) {
                slot[n].id = tempt.id;
                slot[n].count = 1;
                slot[n].data = tempt.data;
                n++;
            } else {
                if (chance_current - tempt.chance < rand3 && rand3 < chance_current) {
                    slot[n].id = tempt.id;
                    slot[n].count = 1;
                    slot[n].data = tempt.data;
                    n++;
                } else {
                    if (chance_current - tempt.chance < rand4 && rand4 < chance_current) {
                        slot[n].id = tempt.id;
                        slot[n].count = 1;
                        slot[n].data = tempt.data;
                        n++;
                    } else {
                        if (chance_current - tempt.chance < rand5 && rand5 < chance_current) {
                            slot[n].id = tempt.id;
                            slot[n].count = 1;
                            slot[n].data = tempt.data;
                            n++;
                        }
                    }
                }
            }
        }
    }
    item.count--;
    if (!item.count) {
        item.id = 0;
    }
    Player.setCarriedItem(item.id, item.count, 0);
});
Item.registerUseFunction("uncommon_lbag", function (coords, item, block) {
    Game.prevent();
    var container = new UI.Container();
    container.openAs(lbag_gui);
    var connect_drop_table = [];
    connect_drop_table = connect_drop_table.concat(common_drop_vanilla);
    if (ic2) {
        connect_drop_table = connect_drop_table.concat(common_drop_ic2);
    }
    var chance_total = common_drop_vanilla_chance;
    if (ic2) {
        chance_total += common_drop_ic2_chance;
    }
    if (enderio) {
        connect_drop_table = connect_drop_table.concat(common_drop_enderio);
    }
    if (enderio) {
        chance_total += common_drop_enderio_chance;
    }
    if (ee) {
        connect_drop_table = connect_drop_table.concat(common_drop_ee);
    }
    if (ee) {
        chance_total += common_drop_ee_chance;
    }
    var chance_current = 0;
    connect_drop_table = mixing(connect_drop_table);
    rands(chance_total, 1.5, 1.75, 2, 2.25, 2.5);
    var slot = [container.getSlot("slot1"), container.getSlot("slot2"), container.getSlot("slot3"), container.getSlot("slot4"), container.getSlot("slot5")];
    var chance_current = 0;
    var n = 0;
    for (var x in connect_drop_table) {
        var tempt = connect_drop_table[x];
        chance_current += tempt.chance;
        if (chance_current - tempt.chance < rand1 && rand1 < chance_current) {
            slot[n].id = tempt.id;
            slot[n].count = 1;
            slot[n].data = tempt.data;
            n++;
        } else {
            if (chance_current - tempt.chance < rand2 && rand2 < chance_current) {
                slot[n].id = tempt.id;
                slot[n].count = 1;
                slot[n].data = tempt.data;
                n++;
            } else {
                if (chance_current - tempt.chance < rand3 && rand3 < chance_current) {
                    slot[n].id = tempt.id;
                    slot[n].count = 1;
                    slot[n].data = tempt.data;
                    n++;
                } else {
                    if (chance_current - tempt.chance < rand4 && rand4 < chance_current) {
                        slot[n].id = tempt.id;
                        slot[n].count = 1;
                        slot[n].data = tempt.data;
                        n++;
                    } else {
                        if (chance_current - tempt.chance < rand5 && rand5 < chance_current) {
                            slot[n].id = tempt.id;
                            slot[n].count = 1;
                            slot[n].data = tempt.data;
                            n++;
                        }
                    }
                }
            }
        }
    }
    item.count--;
    if (!item.count) {
        item.id = 0;
    }
    Player.setCarriedItem(item.id, item.count, 0);
});
Item.registerUseFunction("rare_lbag", function (coords, item, block) {
    Game.prevent();
    var container = new UI.Container();
    container.openAs(lbag_gui);
    var connect_drop_table = [];
    connect_drop_table = connect_drop_table.concat(rare_drop_vanilla);
    if (ic2) {
        connect_drop_table = connect_drop_table.concat(common_drop_ic2);
    }
    var chance_total = rare_drop_vanilla_chance;
    if (ic2) {
        chance_total += common_drop_ic2_chance;
    }
    if (enderio) {
        connect_drop_table = connect_drop_table.concat(common_drop_enderio);
    }
    if (enderio) {
        chance_total += common_drop_enderio_chance;
    }
    if (ee) {
        connect_drop_table = connect_drop_table.concat(common_drop_ee);
    }
    if (ee) {
        chance_total += common_drop_ee_chance;
    }
    var chance_current = 0;
    connect_drop_table = mixing(connect_drop_table);
    rands(chance_total, 1.5, 1.75, 2, 2.25, 2.5);
    var slot = [container.getSlot("slot1"), container.getSlot("slot2"), container.getSlot("slot3"), container.getSlot("slot4"), container.getSlot("slot5")];
    var n = 0;
    for (var x in connect_drop_table) {
        var tempt = connect_drop_table[x];
        chance_current += tempt.chance;
        if (chance_current - tempt.chance < rand1 && rand1 < chance_current) {
            slot[n].id = tempt.id;
            slot[n].count = 1;
            slot[n].data = tempt.data;
            n++;
        } else {
            if (chance_current - tempt.chance < rand2 && rand2 < chance_current) {
                slot[n].id = tempt.id;
                slot[n].count = 1;
                slot[n].data = tempt.data;
                n++;
            } else {
                if (chance_current - tempt.chance < rand3 && rand3 < chance_current) {
                    slot[n].id = tempt.id;
                    slot[n].count = 1;
                    slot[n].data = tempt.data;
                    n++;
                } else {
                    if (chance_current - tempt.chance < rand4 && rand4 < chance_current) {
                        slot[n].id = tempt.id;
                        slot[n].count = 1;
                        slot[n].data = tempt.data;
                        n++;
                    } else {
                        if (chance_current - tempt.chance < rand5 && rand5 < chance_current) {
                            slot[n].id = tempt.id;
                            slot[n].count = 1;
                            slot[n].data = tempt.data;
                            n++;
                        }
                    }
                }
            }
        }
    }
    item.count--;
    if (!item.count) {
        item.id = 0;
    }
    Player.setCarriedItem(item.id, item.count, 0);
});
Item.registerUseFunction("epic_lbag", function (coords, item, block) {
    Game.prevent();
    var container = new UI.Container();
    container.openAs(lbag_gui);
    var connect_drop_table = [];
    connect_drop_table = connect_drop_table.concat(epic_drop_vanilla);
    if (ic2) {
        connect_drop_table = connect_drop_table.concat(common_drop_ic2);
    }
    var chance_total = epic_drop_vanilla_chance;
    if (ic2) {
        chance_total += common_drop_ic2_chance;
    }
    if (enderio) {
        connect_drop_table = connect_drop_table.concat(common_drop_enderio);
    }
    if (enderio) {
        chance_total += common_drop_enderio_chance;
    }
    if (ee) {
        connect_drop_table = connect_drop_table.concat(common_drop_ee);
    }
    if (ee) {
        chance_total += common_drop_ee_chance;
    }
    var chance_current = 0;
    connect_drop_table = mixing(connect_drop_table);
    rands(chance_total, 1.5, 1.75, 2, 2.25, 2.5);
    var slot = [container.getSlot("slot1"), container.getSlot("slot2"), container.getSlot("slot3"), container.getSlot("slot4"), container.getSlot("slot5")];
    var n = 0;
    for (var x in connect_drop_table) {
        var tempt = connect_drop_table[x];
        chance_current += tempt.chance;
        if (chance_current - tempt.chance < rand1 && rand1 < chance_current) {
            slot[n].id = tempt.id;
            slot[n].count = 1;
            slot[n].data = tempt.data;
            n++;
        } else {
            if (chance_current - tempt.chance < rand2 && rand2 < chance_current) {
                slot[n].id = tempt.id;
                slot[n].count = 1;
                slot[n].data = tempt.data;
                n++;
            } else {
                if (chance_current - tempt.chance < rand3 && rand3 < chance_current) {
                    slot[n].id = tempt.id;
                    slot[n].count = 1;
                    slot[n].data = tempt.data;
                    n++;
                } else {
                    if (chance_current - tempt.chance < rand4 && rand4 < chance_current) {
                        slot[n].id = tempt.id;
                        slot[n].count = 1;
                        slot[n].data = tempt.data;
                        n++;
                    } else {
                        if (chance_current - tempt.chance < rand5 && rand5 < chance_current) {
                            slot[n].id = tempt.id;
                            slot[n].count = 1;
                            slot[n].data = tempt.data;
                            n++;
                        }
                    }
                }
            }
        }
    }
    item.count--;
    if (!item.count) {
        item.id = 0;
    }
    Player.setCarriedItem(item.id, item.count, 0);
});
Item.registerUseFunction("legendary_lbag", function (coords, item, block) {
    Game.prevent();
    var container = new UI.Container();
    container.openAs(lbag_gui);
    var connect_drop_table = [];
    connect_drop_table = connect_drop_table.concat(epic_drop_vanilla);
    if (ic2) {
        connect_drop_table = connect_drop_table.concat(common_drop_ic2);
    }
    var chance_total = epic_drop_vanilla_chance;
    if (ic2) {
        chance_total += common_drop_ic2_chance;
    }
    if (enderio) {
        connect_drop_table = connect_drop_table.concat(common_drop_enderio);
    }
    if (enderio) {
        chance_total += common_drop_enderio_chance;
    }
    if (ee) {
        connect_drop_table = connect_drop_table.concat(common_drop_ee);
    }
    if (ee) {
        chance_total += common_drop_ee_chance;
    }
    var chance_current = 0;
    connect_drop_table = mixing(connect_drop_table);
    rands(chance_total, 1.5, 1.75, 2, 2.25, 2.5);
    var slot = [container.getSlot("slot1"), container.getSlot("slot2"), container.getSlot("slot3"), container.getSlot("slot4"), container.getSlot("slot5")];
    var n = 0;
    for (var x in connect_drop_table) {
        var tempt = connect_drop_table[x];
        chance_current += tempt.chance;
        if (chance_current - tempt.chance < rand1 && rand1 < chance_current) {
            slot[n].id = tempt.id;
            slot[n].count = 1;
            slot[n].data = tempt.data;
            n++;
        } else {
            if (chance_current - tempt.chance < rand2 && rand2 < chance_current) {
                slot[n].id = tempt.id;
                slot[n].count = 1;
                slot[n].data = tempt.data;
                n++;
            } else {
                if (chance_current - tempt.chance < rand3 && rand3 < chance_current) {
                    slot[n].id = tempt.id;
                    slot[n].count = 1;
                    slot[n].data = tempt.data;
                    n++;
                } else {
                    if (chance_current - tempt.chance < rand4 && rand4 < chance_current) {
                        slot[n].id = tempt.id;
                        slot[n].count = 1;
                        slot[n].data = tempt.data;
                        n++;
                    } else {
                        if (chance_current - tempt.chance < rand5 && rand5 < chance_current) {
                            slot[n].id = tempt.id;
                            slot[n].count = 1;
                            slot[n].data = tempt.data;
                            n++;
                        }
                    }
                }
            }
        }
    }
    item.count--;
    if (!item.count) {
        item.id = 0;
    }
    Player.setCarriedItem(item.id, item.count, 0);
});
Callback.addCallback("EntityDeath", function (entity) {
    var mob = Entity.getType(entity);
    var mobpos = Entity.getPosition(entity);
    var rand = Math.random() * 99;
    if (mob == 32 || mob == 33 || mob == 34 || mob == 35 || mob == 38 || mob == 40 || mob == 44 || mob == 47) {
        if (rand >= 45 && rand <= 55) {
            World.drop(mobpos.x, mobpos.y, mobpos.z, ItemID.common_lbag, 1, 0);
        } else {
            if (rand >= 17.5 && rand <= 22.5) {
                World.drop(mobpos.x, mobpos.y, mobpos.z, ItemID.uncommon_lbag, 1, 0);
            } else {
                if (rand >= 70 && rand <= 72.5) {
                    World.drop(mobpos.x, mobpos.y, mobpos.z, ItemID.rare_lbag, 1, 0);
                } else {
                    if (rand >= 10 && rand <= 11.5) {
                        World.drop(mobpos.x, mobpos.y, mobpos.z, ItemID.epic_lbag, 1, 0);
                    } else {
                        if (rand >= 90 && rand <= 91) {
                            World.drop(mobpos.x, mobpos.y, mobpos.z, ItemID.legendary_lbag, 1, 0);
                        }
                    }
                }
            }
        }
    }
});

