ModAPI.addAPICallback("AncientWondersAPI", function (api) {
    if (api.ItemGenerate) {
        const ItemGenerate = api.ItemGenerate;
        ItemGenerate.addItem(ItemID.manysript2, 5, {max: 1});
        ItemGenerate.addItem(ItemID.manysript1, 10, {max: 1});
    } else {
        ModAPI.addAPICallback("DungeonUtility", function (api) {
            const ItemGeneration = api.ItemGeneration;
            ItemGeneration.addItem("aw_default", ItemID.manysript2, 0.05, {max: 1});
            ItemGeneration.addItem("aw_default_2", ItemID.manysript1, 0.1, {max: 1});
        });
    }
});
let Item2 = new ItemGenerate.advanced();
Item2.addItem(264, 0.02, {max: 1});
Item2.addItem(266, 1, {max: 1});
Item2.addItem(283, 0.2, {max: 1});
Item2.addItem(381, 0.1, {max: 6});
Item2.addItem(399, 0.01, {max: 1});
Item2.addItem(384, 0.1, {max: 16});
Item2.addItem(322, 0.05, {max: 1});
Item2.addItem(ItemID.Gem, 0.05, {max: 1});
Item2.addItem(ItemID.Gem2, 0.002, {max: 1});
Item2.addItem(ItemID.manysript1, 0.05, {max: 1});
Item2.addItem(VanillaItemID.bone, 0.8, {slotMax: 3, slotMin: 1, max: 2});
Item2.addItem(265, 0.5, {slotMax: 3, slotMin: 1, max: 3});
Item2.addItem(VanillaItemID.rotten_flesh, 1, {slotMax: 4, slotMin: 1, max: 2});
var date = new Date();
if (date.getMonth() == 0 && date.getDate() >= 1 && date.getDate() <= 10) {
    let biome = [12, 13, 26, 30, 31, 34, 140, 158];
    let ng = new ItemGenerate();
    ng.addItem(264, 0.1, {max: 3});
    ng.addItem(266, 0.5, {max: 5});
    ng.addItem(265, 1, {max: 10});
    ng.addItem(80, 1, {max: 10});
    ng.addItem(ItemID.koin_0, 0.2, {max: 1});
    ng.addItem(ItemID.koin_1, 0.1, {max: 1});
    Callback.addCallback("GenerateChunk", function (chunkX, chunkZ, random, id) {
        for (let i in biome) {
            if (random.nextInt(100) <= 0.4) {
                var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 5, 100);
                coords = GenerationUtils.findSurface(coords.x, coords.y, coords.z);
                if (BlockSource.getCurrentWorldGenRegion().getBiome(coords.x, coords.z) == biome[i]) {
                    (new DungeonAPI("\u043d\u04331.json")).setStructure(coords.x, coords.y, coords.z, 0, id);
                    ng.fillChest(coords.x, coords.y + 1, coords.z, 0, id);
                }
            }
        }
    });
    Callback.addCallback("GenerateChunk", function (chunkX, chunkZ, random, id) {
        for (let i in biome) {
            if (random.nextInt(100) <= 0.3) {
                var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 5, 100);
                coords = GenerationUtils.findSurface(coords.x, coords.y, coords.z);
                if (BlockSource.getCurrentWorldGenRegion().getBiome(coords.x, coords.z) == biome[i]) {
                    (new DungeonAPI("\u043d\u04332.json")).setStructure(coords.x, coords.y, coords.z, 0, id);
                    ng.fillChest(coords.x, coords.y + 1, coords.z + 1, 0, id);
                    ng.fillChest(coords.x, coords.y + 1, coords.z + 2, 0, id);
                }
            }
        }
    });
    IDRegistry.genItemID("present");
    Item.createItem("present", "present", {name: "present", meta: 0}, {stack: 1});
    Translation.addTranslation("present", {ru: "\u043f\u043e\u0434\u0430\u0440\u043e\u043a"});
    Item2.addItem(ItemID.present, 0.1, {max: 1});
    ng.addItem(ItemID.present, 0.3, {max: 1});
    ng.registerRecipeViewer("Generate6", "\u0433\u0435\u043d\u0435\u0440\u0430\u0446\u0438\u044f \u043f\u0440\u0435\u0434\u043c\u0435\u0442\u043e\u0432");
    let arrPresent = [];
    let Present = {add: function (obj) {
        arrPresent.push(obj);
    }};
    Present.add({id: 264, date: 0, min: 1, max: 3});
    Present.add({id: ItemID.clitok, date: 0, min: 1, max: 3});
    Present.add({id: ItemID.koin_0, date: 0, min: 1, max: 2});
    Present.add({id: ItemID.koin_1, date: 0, min: 1, max: 1});
    Item.registerUseFunction("present", function (coords, item, block, player) {
        let bs = BlockSource.getDefaultForActor(player);
        let r = Math.round(Math.random() * (arrPresent.length - 1));
        bs.spawnDroppedItem(coords.x, coords.y + 1, coords.z, arrPresent[r].id, Math.floor(Math.random() * (arrPresent[r].max)) + arrPresent[r].min, arrPresent[r].date, null);
        delItem(player, item);
    });
}
Item2.setPrototype({generate: function (pos, random, slot, item, blockSource, packet) {
    let container = World.getContainer(pos.x, pos.y, pos.z, blockSource);
    if (item.id == 283) {
        let extra = ItemGenerate.enchantAdd("sword", 3);
        container.setSlot(slot, item.id, 1, item.data, extra);
    }
}});
let Item3 = new ItemGenerate.defaults();
Item3.addItem(264, 0.02, {max: 1});
Item3.addItem(265, 1, {max: 3});
Item3.addItem(ItemID.koin_0, 0.1, {max: 2});
Item3.addItem(ItemID.koin_1, 0.01, {max: 1});
Item3.addItem(ItemID.bookxp, 0.01, {max: 2});
Item3.addItem(306, 0.15, {max: 1});
Item3.addItem(307, 0.08, {max: 1});
Item3.addItem(308, 0.08, {max: 1});
Item3.addItem(309, 0.15, {max: 1});
Item3.addItem(310, 0.02, {max: 1});
Item3.addItem(311, 0.01, {max: 1});
Item3.addItem(312, 0.03, {max: 1});
Item3.addItem(313, 0.02, {max: 1});
Item3.addItem(298, 0.4, {max: 1});
Item3.addItem(299, 0.1, {max: 1});
Item3.addItem(300, 0.2, {max: 1});
Item3.addItem(301, 0.4, {max: 1});
Item3.addItem(302, 0.2, {max: 1});
Item3.addItem(303, 0.1, {max: 1});
Item3.addItem(304, 0.1, {max: 1});
Item3.addItem(305, 0.2, {max: 1});
let Item5 = new ItemGenerate.advanced();
Item5.addItem(264, 0.02, {max: 1});
Item5.addItem(266, 0.5, {max: 5});
Item5.addItem(265, 1, {max: 10});
Item5.addItem(372, 0.1, {max: 5});
Item5.addItem(384, 0.1, {max: 11});
Item5.addItem(399, 0.01, {max: 1});
Item5.addItem(ItemID.boss_summon_eye, 0.4, {max: 1});
Item5.addItem(VanillaItemID.bone, 0.8, {slotMax: 3, slotMin: 1, max: 2});
Item5.addItem(265, 0.5, {slotMax: 3, slotMin: 1, max: 3});
Item5.addItem(VanillaItemID.rotten_flesh, 1, {slotMax: 4, slotMin: 1, max: 2});
let Item6 = new ItemGenerate.defaults();
Item6.addItem(264, 0.2, {max: 1});
Item6.addItem(266, 0.4, {max: 7});
Item6.addItem(295, 0.8, {max: 20});
Item6.addItem(291, 0.9, {max: 1});
Item6.addItem(261, 0.8, {max: 1});
Item6.addItem(262, 0.4, {max: 20});
Item6.addItem(297, 0.8, {max: 6});
Item6.addItem(322, 0.05, {max: 10});
Item6.addItem(ItemID.sorcererStaff, 0.1, {max: 1});
Item6.addItem(ItemID.idal, 0.05, {max: 1});
Item6.addItem(ItemID.Gem2, 0.08, {max: 1});
Item6.addItem(ItemID.manysript1, 0.05, {max: 1});
let ItemGenerateParadise = new ItemGenerate.advanced();
ItemGenerateParadise.addItem(ItemID.boss_summon_eye, 0.4, {max: 1});
ItemGenerateParadise.addItem(VanillaItemID.bone, 1, {slotMax: 3, slotMin: 1, max: 2});
ItemGenerateParadise.addItem(265, 0.8, {slotMax: 3, slotMin: 1, max: 3});
ItemGenerateParadise.addItem(ItemID.manysript1, 0.05, {max: 1});
ItemGenerateParadise.addItem(ItemID.GemEarth, 0.25, {max: 1});
ItemGenerateParadise.addItem(264, 0.15, {max: 2, slotMax: 2});
ItemGenerateParadise.addItem(ItemID.bookxp, 0.1, {slotMax: 2, slotMin: 1, max: 1});
ItemGenerateParadise.addItem(ItemID.fire_ingot, 0.25, {slotMax: 2, slotMin: 1, max: 1});
ItemGenerateParadise.addItem(ItemID.melted_stone, 0.3, {slotMax: 2, slotMin: 1, max: 1});
ItemGenerateParadise.addItem(ItemID.koin_0, 0.2, {max: 2});
ItemGenerateParadise.addItem(ItemID.keyDungeon, 0.05, {max: 1});
let ItemGenerateParadiseSuper = new ItemGenerate.advanced();
ItemGenerateParadiseSuper.addItem(265, 1, {slotMax: 3, slotMin: 1, max: 5});
ItemGenerateParadiseSuper.addItem(ItemID.manysript1, 0.5, {max: 1});
ItemGenerateParadiseSuper.addItem(ItemID.GemEarth, 0.9, {max: 1});
ItemGenerateParadiseSuper.addItem(264, 1, {max: 3, slotMax: 2});
ItemGenerateParadiseSuper.addItem(ItemID.bookxp, 0.7, {slotMax: 2, slotMin: 1, max: 1});
ItemGenerateParadiseSuper.addItem(ItemID.fire_ingot, 0.8, {slotMax: 2, slotMin: 1, max: 1});
ItemGenerateParadiseSuper.addItem(ItemID.melted_stone, 0.6, {slotMax: 2, slotMin: 1, max: 1});
ItemGenerateParadiseSuper.addItem(ItemID.koin_0, 1, {slotMax: 2, max: 2});
ItemGenerateParadiseSuper.addItem(ItemID.koin_1, 0.8, {slotMax: 2, max: 2});
ItemGenerateParadiseSuper.addItem(ItemID.keyDungeon2, 0.5, {max: 1});
let GeneraterNether = new ItemGenerate.advanced();
GeneraterNether.addItem(VanillaItemID.bone, 0.8, {slotMax: 2, slotMin: 1, max: 2});
GeneraterNether.addItem(265, 0.5, {slotMax: 3, slotMin: 1, max: 2});
GeneraterNether.addItem(VanillaItemID.rotten_flesh, 1, {slotMax: 3, slotMin: 1, max: 2});
GeneraterNether.addItem(264, 0.02, {slotMax: 1, slotMin: 1, max: 2});
GeneraterNether.addItem(ItemID.boss_summon_eye, 0.3, {slotMax: 1, slotMin: 1, max: 1});
GeneraterNether.addItem(ItemID.bookxp, 0.1, {slotMax: 2, slotMin: 1, max: 1});
GeneraterNether.addItem(ItemID.fire_ingot, 0.05, {slotMax: 2, slotMin: 1, max: 1});
GeneraterNether.addItem(ItemID.melted_stone, 0.05, {slotMax: 2, slotMin: 1, max: 1});
let GeneraterEnd = new ItemGenerate.advanced();
GeneraterEnd.addItem(265, 1, {slotMax: 3, slotMin: 1, max: 2});
GeneraterEnd.addItem(264, 0.6, {slotMax: 2, slotMin: 1, max: 2});
GeneraterEnd.addItem(ItemID.bookxp, 0.6, {slotMax: 1, slotMin: 0, max: 1});
GeneraterEnd.addItem(ItemID.god_ingot, 0.8, {slotMax: 2, slotMin: 0, max: 1});
GeneraterEnd.addItem(ItemID.fire_ingot, 0.2, {slotMax: 2, slotMin: 0, max: 2});
GeneraterEnd.addItem(310, 0.4, {slotMax: 1, slotMin: 0, max: 1});
GeneraterEnd.addItem(311, 0.2, {slotMax: 1, slotMin: 0, max: 1});
GeneraterEnd.addItem(312, 0.3, {slotMax: 1, slotMin: 0, max: 1});
GeneraterEnd.addItem(313, 0.4, {slotMax: 1, slotMin: 0, max: 1});
GeneraterEnd.setPrototype({generate: function (pos, random, slot, item, blockSource, packet) {
    let container = World.getContainer(pos.x, pos.y, pos.z, blockSource);
    if (item.id == 310) {
        let extra = ItemGenerate.enchantAdd("helmet", 3);
        container.setSlot(slot, item.id, 1, item.data, extra);
    }
    if (item.id == 311) {
        let extra = ItemGenerate.enchantAdd("chestplate", 3);
        container.setSlot(slot, item.id, 1, item.data, extra);
    }
    if (item.id == 312) {
        let extra = ItemGenerate.enchantAdd("leggings", 3);
        container.setSlot(slot, item.id, 1, item.data, extra);
    }
    if (item.id == 313) {
        let extra = ItemGenerate.enchantAdd("boots", 3);
        container.setSlot(slot, item.id, 1, item.data, extra);
    }
}});
let GeneraterDesert = new ItemGenerate.advanced();
GeneraterDesert.addItem(VanillaItemID.bone, 0.8, {slotMax: 2, slotMin: 1, max: 2});
GeneraterDesert.addItem(265, 0.5, {slotMax: 3, slotMin: 1, max: 2});
GeneraterDesert.addItem(VanillaItemID.rotten_flesh, 1, {slotMax: 3, slotMin: 1, max: 2});
GeneraterDesert.addItem(264, 0.02, {slotMax: 1, slotMin: 1, max: 2});
GeneraterDesert.addItem(ItemID.boss_summon_eye, 0.3, {slotMax: 1, slotMin: 1, max: 1});
GeneraterDesert.addItem(ItemID.bookxp, 0.1, {slotMax: 2, slotMin: 1, max: 1});
GeneraterDesert.addItem(ItemID.god_ingot, 0.05, {slotMax: 2, slotMin: 1, max: 1});
GeneraterDesert.addItem(ItemID.sorcererStaff, 0.1, {max: 1});
GeneraterDesert.addItem(ItemID.idal, 0.05, {max: 10});
GeneraterDesert.addItem(12, 0.9, {slotMax: 5, slotMin: 1, max: 2});

