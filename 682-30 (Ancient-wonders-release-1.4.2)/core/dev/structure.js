let DISTANCE = __config__.get("structure.DISTANCE") || 150;
ItemGenerate.newGenerator("aw_default");
ItemGenerate.addItem("aw_default", ItemID.piece1, 0.8, {max: 1});
ItemGenerate.addItem("aw_default", ItemID.piece2, 0.8, {max: 1});
ItemGenerate.addItem("aw_default", ItemID.piece3, 0.8, {max: 1});
ItemGenerate.addItem("aw_default", ItemID.loreClass1, 0.02, {max: 1});
ItemGenerate.addItem("aw_default", ItemID.loreClass2, 0.02, {max: 1});
ItemGenerate.addItem("aw_default", ItemID.loreClass3, 0.02, {max: 1});
ItemGenerate.addItem("aw_default", VanillaItemID.bone, 0.9, {max: 3});
ItemGenerate.addItem("aw_default", VanillaItemID.rotten_flesh, 1, {max: 2});
ItemGenerate.addItem("aw_default", 264, 0.02, {max: 2});
ItemGenerate.addItem("aw_default", 265, 1, {max: 2});
ItemGenerate.addItem("aw_default", 322, 0.02, {max: 1});
ItemGenerate.addItem("aw_default", 266, 0.04, {max: 3});
ItemGenerate.addItem("aw_default", ItemID.rune1, 0.2, {max: 1}, 0);
ItemGenerate.addItem("aw_default", ItemID.rune2, 0.2, {max: 1}, 0);
ItemGenerate.addItem("aw_default", ItemID.rune3, 0.2, {max: 1}, 0);
ItemGenerate.addItem("aw_default", ItemID.rune4, 0.2, {max: 1}, 0);
ItemGenerate.addItem("aw_default", ItemID.sroll6, 0.05, {max: 1}, 0);
ItemGenerate.addItem("aw_default", ItemID.sroll4, 0.05, {max: 1}, 0);
ItemGenerate.addItem("aw_default", ItemID.sroll9, 0.05, {max: 1}, 0);
ItemGenerate.addItem("aw_default", ItemID.sroll1, 0.03, {max: 1}, 0);
ItemGenerate.addItem("aw_default", ItemID.sroll2, 0.03, {max: 1}, 0);
ItemGenerate.addItem("aw_default", ItemID.sroll3, 0.03, {max: 1}, 0);
ItemGenerate.addItem("aw_default", ItemID.sroll7, 0.02, {max: 1}, 0);
ItemGenerate.addItem("aw_default", ItemID.sroll5, 0.02, {max: 1}, 0);
ItemGenerate.addItem("aw_default", ItemID.piece4, 0.9, {max: 1});
ItemGenerate.addItem("aw_default", ItemID.tanatos, 0.01, {max: 1});
ItemGenerate.addItem("aw_default", ItemID.RobeOfTheAzureWizard, 0.01, {max: 1}, 0);
ItemGenerate.addItem("aw_default", ItemID.necromancer_helmet, 0.005, {max: 1}, 0);
ItemGenerate.addItem("aw_default", ItemID.necromancer_chestplate, 0.005, {max: 1}, 0);
ItemGenerate.addItem("aw_default", ItemID.necromancer_leggings, 0.005, {max: 1}, 0);
ItemGenerate.addItem("aw_default", ItemID.necromancer_boots, 0.005, {max: 1}, 0);
ModAPI.addAPICallback("ICore", function () {
    ItemGenerate.addItem("aw_default", ItemID.iridiumChunk, 0.05, {min: 2, max: 5});
    ItemGenerate.addItem("aw_default", ItemID.ingotCopper, 0.6, {min: 1, max: 2});
    ItemGenerate.addItem("aw_default", ItemID.ingotTin, 0.5, {min: 1, max: 2});
});
ItemGenerate.setPrototype("aw_default", {generate(pos, rand, slot, item, region, random, packet) {
    if (item.id == ItemID.piece4) {
        let obj = ScrutinyGeneration.get(random);
        let extra = new ItemExtraData();
        extra.putString("window", obj.win);
        extra.putString("tab", obj.tab);
        extra.putString("name", obj.name);
        extra.putString("name2", obj.name2);
        World.getContainer(pos.x, pos.y, pos.z, region).setSlot(slot, item.id, item.count, item.data, extra);
    }
}});
ItemGenerate.newGenerator("aw_default_2");
ItemGenerate.addItem("aw_default_2", 264, 0.04, {max: 3});
ItemGenerate.addItem("aw_default_2", 265, 1, {max: 3});
ItemGenerate.addItem("aw_default_2", 322, 0.03, {max: 2});
ItemGenerate.addItem("aw_default_2", ItemID.SpellSet31, 0.3, {max: 1});
ItemGenerate.addItem("aw_default_2", 266, 0.25, {max: 3});
ItemGenerate.addItem("aw_default_2", ItemID.acolyteStaff, 0.4, {max: 1});
ItemGenerate.addItem("aw_default_2", VanillaItemID.bone, 0.9, {max: 1, slotMax: 3});
ItemGenerate.addItem("aw_default_2", VanillaItemID.rotten_flesh, 1, {max: 1, slotMax: 3});
ItemGenerate.addItem("aw_default_2", ItemID.regularBag, 0.3, {max: 3});
ItemGenerate.addItem("aw_default_2", ItemID.magic_crystal, 0.3, {max: 1});
ItemGenerate.addItem("aw_default_2", ItemID.aw_glasses, 0.01, {max: 1});
ItemGenerate.addItem("aw_default_2", ItemID.rune_absorption, 0.1, {max: 1});
ItemGenerate.addItem("aw_default_2", ItemID.rune_greed, 0.01, {max: 1});
ItemGenerate.addItem("aw_default_2", ItemID.aw_potions_book, 0.5, {max: 1});
ItemGenerate.addItem("aw_default_2", ItemID.aw_bottle_potion, 0.1, {max: 1});
ItemGenerate.addItem("aw_default_2", ItemID.decor10, 0.1, {max: 1});
ItemGenerate.addItem("aw_default_2", ItemID.aw_magic_stick, 0.05, {max: 1});
ItemGenerate.addItem("aw_default_2", ItemID.aw_magic_shovel, 0.05, {max: 1});
ItemGenerate.addItem("aw_default_2", ItemID.aw_magic_staff, 0.05, {max: 1});
ItemGenerate.addItem("aw_default_2", VanillaItemID.enchanted_book, 0.2, {max: 1}, 0, (function () {
    let extra = new ItemExtraData();
    extra.addEnchant(aspects_restoration.id, 1);
    return extra;
})());
ItemGenerate.addItem("aw_default_2", VanillaItemID.enchanted_book, 0.1, {max: 1}, 0, (function () {
    let extra = new ItemExtraData();
    extra.addEnchant(aspects_restoration.id, 2);
    return extra;
})());
ItemGenerate.addItem("aw_default_2", VanillaItemID.enchanted_book, 0.05, {max: 1}, 0, (function () {
    let extra = new ItemExtraData();
    extra.addEnchant(magic_protection.id, 2);
    return extra;
})());
ItemGenerate.addItem("aw_default_2", VanillaItemID.enchanted_book, 0.05, {max: 1}, 0, (function () {
    let extra = new ItemExtraData();
    extra.addEnchant(magic_protection.id, 1);
    return extra;
})());
ItemGenerate.addItem("aw_default_2", VanillaItemID.enchanted_book, 0.05, {max: 1}, 0, (function () {
    let extra = new ItemExtraData();
    extra.addEnchant(dead_protection.id, 2);
    return extra;
})());
ItemGenerate.addItem("aw_default_2", VanillaItemID.enchanted_book, 0.05, {max: 1}, 0, (function () {
    let extra = new ItemExtraData();
    extra.addEnchant(dead_protection.id, 1);
    return extra;
})());
const EVENT_SPAWN_POTION = [ItemID.aw_brain, VanillaItemID.gunpowder];
const INGREDIENT_SPAWN_POTION = [ItemID.enchantment_forest_flower, VanillaItemID.rabbit_foot, VanillaItemID.sugar, VanillaItemID.blaze_powder, VanillaItemID.spider_eye, VanillaItemID.spider_eye, VanillaItemID.spider_eye];
const UPDATE_SPAWN_POTION = [VanillaItemID.glowstone_dust, VanillaItemID.glowstone_dust, ItemID.aw_petal_powder, ItemID.aw_petal_powder, 0, 0, 0, ItemID.aw_dragon_powder];
ItemGenerate.setPrototype("aw_default_2", {generate(pos, rand, slot, item, region, random, packet) {
    if (item.id == ItemID.aw_bottle_potion) {
        let items = [{id: EVENT_SPAWN_POTION[randInt(0, EVENT_SPAWN_POTION.length)], count: 1, data: 0}, {id: INGREDIENT_SPAWN_POTION[randInt(0, INGREDIENT_SPAWN_POTION.length)], count: 1, data: 0}];
        let update = UPDATE_SPAWN_POTION[randInt(0, UPDATE_SPAWN_POTION.length)];
        if (update != 0) {
            items.push({id: update, count: 1, data: 0});
        }
        let extra = Wands.getExtraByArr(items);
        let color = Potion.mathColorPotion(items);
        extra.putInt("R", color.r < 0 ? 0 : color.r);
        extra.putInt("G", color.g < 0 ? 0 : color.g);
        extra.putInt("B", color.b < 0 ? 0 : color.b);
        extra.putString("RGB", extra.getInt("R", 0) + "." + extra.getInt("G", 0) + "." + extra.getInt("B", 0));
        World.getContainer(pos.x, pos.y, pos.z, region).setSlot(slot, item.id, item.count, item.data, extra);
    }
}});
ModAPI.addAPICallback("ICore", function () {
    ItemGenerate.addItem("aw_default_2", ItemID.iridiumChunk, 0.05, {min: 2, max: 5});
    ItemGenerate.addItem("aw_default_2", ItemID.ingotCopper, 0.6, {min: 1, max: 2});
    ItemGenerate.addItem("aw_default_2", ItemID.ingotTin, 0.5, {min: 1, max: 2});
});
Callback.addCallback("StructureLoadOne", function () {
    StructurePiece.register(StructurePiece.getDefault({type: "default", dimension: 0, name: "aw_cursed_tower", distance: DISTANCE, isSet: false, white_list_blocks: true, blocks: [2], chance: __config__.getNumber("structure.Cursed_Tower"), structure: new Structure.advanced("aw_cursed_tower").setPrototype({after(x, y, z, region, packet) {
        if (region.getBlockId(x, y + 13, z) == VanillaBlockID.mob_spawner) {
            let tag = region.getBlockEntity(x, y + 13, z).getCompoundTag();
            tag.putString("EntityIdentifier", "minecraft:skeleton");
            region.getBlockEntity(x, y + 13, z).setCompoundTag(tag);
        }
        ItemGenerate.fill("aw_default_2", x - 2, y + 1, z + 2, packet.random, region);
        ItemGenerate.fill("aw_default_2", x + 2, y + 1, z + 2, packet.random, region);
        ItemGenerate.fill("aw_default_2", x - 2, y + 1, z - 2, packet.random, region);
        ItemGenerate.fill("aw_default_2", x + 2, y + 1, z - 2, packet.random, region);
        ItemGenerate.fill("aw_default_2", x, y + 1, z, packet.random, region);
        ItemGenerate.fill("aw_default", x - 3, y + 10, z, packet.random, region);
        ItemGenerate.fill("aw_default", x + 3, y + 10, z, packet.random, region);
        ItemGenerate.fill("aw_default", x, y + 10, z + 3, packet.random, region);
        ItemGenerate.fill("aw_default", x, y + 10, z - 3, packet.random, region);
        region.setBlock(x, y - 1, z, VanillaBlockID.tnt);
        region.setBlock(x, y - 2, z, VanillaBlockID.tnt);
        region.setBlock(x, y - 3, z, VanillaBlockID.tnt);
    }})}));
    StructurePiece.register(StructurePiece.getDefault({type: "default", dimension: 0, name: "aw_magic_temple", distance: DISTANCE, isSet: false, white_list_blocks: true, blocks: [2], chance: __config__.getNumber("structure.magic_temple"), structure: new Structure.advanced("aw_magic_temple").setPrototype({after(x, y, z, region, packet) {
        ItemGenerate.fill("aw_default_2", x, y + 1, z, packet.random, region);
    }})}));
    StructurePiece.register(StructurePiece.getDefault({type: "default", dimension: 0, name: "aw_house_of_magicians", distance: DISTANCE, isSet: false, white_list_blocks: true, blocks: [2], chance: __config__.getNumber("structure.House_of_magicians"), structure: new Structure.advanced("aw_house_of_magicians")}));
    StructurePiece.register(StructurePiece.getDefault({type: "default", dimension: 0, name: "aw_temple", distance: DISTANCE, isSet: false, chance: __config__.getNumber("structure.Temple"), structure: new Structure.advanced("aw_temple").setPrototype({after(x, y, z, region, packet) {
        ItemGenerate.fill("aw_default", x, y + 1, z, packet.random, region);
    }})}));
    StructurePiece.register(StructurePiece.getDefault({type: "default", dimension: 0, name: "aw_tower_of_evil", distance: DISTANCE, isSet: false, white_list_blocks: true, blocks: [2], chance: __config__.getNumber("structure.Tower_of_evil"), structure: new Structure.advanced("aw_tower_of_evil").setPrototype({after(x, y, z, region, packet) {
        ItemGenerate.fill("aw_default", x, y + 1, z, packet.random, region);
    }})}));
    StructurePiece.register(StructurePiece.getDefault({type: "default", dimension: 0, name: "aw_ordinary_temple", distance: DISTANCE, isSet: false, white_list_blocks: true, blocks: [2], chance: __config__.getNumber("structure.Ordinary_temple"), structure: new Structure.advanced("aw_ordinary_temple").setPrototype({after(x, y, z, region, packet) {
        ItemGenerate.fill("aw_default", x, y + 2, z - 1, packet.random, region);
        ItemGenerate.fill("aw_default", x, y + 2, z, packet.random, region);
        ItemGenerate.fill("aw_default", x + 1, y + 2, z, packet.random, region);
        ItemGenerate.fill("aw_default", x + 1, y + 2, z - 1, packet.random, region);
    }})}));
    StructurePiece.register(StructurePiece.getDefault({type: "default", dimension: 0, name: "aw_ordinary_temple", distance: DISTANCE, isSet: false, white_list_blocks: true, blocks: [2], chance: __config__.getNumber("structure.Tower_of_darkness"), structure: new Structure.advanced("aw_tower_of_darkness").setPrototype({after(x, y, z, region, packet) {
        ItemGenerate.fill("aw_default", x, y, z - 1, packet.random, region);
        ItemGenerate.fill("aw_default", x, y, z + 1, packet.random, region);
        ItemGenerate.fill("aw_default", x + 1, y, z, packet.random, region);
        ItemGenerate.fill("aw_default", x - 1, y, z, packet.random, region);
    }})}));
});
ItemGenerate.registerRecipeViewer("aw_default");
ItemGenerate.registerRecipeViewer("aw_default_2");
ItemGenerate.setItemIntegration(ItemID.RobeOfTheAzureWizard, 0.005, {max: 1}, 0);
ItemGenerate.setItemIntegration(ItemID.tanatos, 0.005, {max: 1}, 0);
ItemGenerate.setItemIntegration(ItemID.loreClass1, 0.01, {max: 1});
ItemGenerate.setItemIntegration(ItemID.loreClass2, 0.01, {max: 1});
ItemGenerate.setItemIntegration(ItemID.loreClass3, 0.01, {max: 1});
ItemGenerate.setItemIntegration(ItemID.magic_crystal, 0.1, {max: 1});

