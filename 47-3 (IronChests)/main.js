var IronChest = {register: function (id, obj) {
    ICRender.getGroup(obj.renderGroup[0]).add(id, -1);
    var ChestObj = {standart: {header: {text: {text: obj.name}}, inventory: {standart: true}, background: {standart: true}, minHeight: 90 + (obj.slots / 10 * 61) + 70}, drawing: [], elements: {}};
    var slotsInRow = 0;
    var xp = 350;
    var yp = 35;
    for (var i = 0; i < obj.slots; i++) {
        ChestObj.elements["slot" + i] = {type: "slot", x: xp, y: yp};
        xp += 61;
        slotsInRow++;
        if (slotsInRow == 9) {
            xp = 350;
            yp += 61;
            slotsInRow = 0;
        }
    }
    var ChestGUI = new UI.StandartWindow(ChestObj);
    TileEntity.registerPrototype(id, {getTransportSlots: obj.getTransportSlots, defaultValues: {}, tick: function () {
    }, getGuiScreen: function () {
        return ChestGUI;
    }});
    Block.setBlockShape(id, {x: 0.07, y: 0, z: 0.07}, {x: 0.93, y: 0.87, z: 0.93});
    for (let i = 0; i < 4; i++) {
        let render = new ICRender.Model();
        BlockRenderer.setStaticICRender(id, i, render);
        let model = BlockRenderer.createModel();
        model.addBox(0.07, 0, 0.07, 0.93, 0.87, 0.93, id, i);
        switch (i) {
          case 0:
            model.addBox(0.43, 0.45, 0.93, 0.55, 0.7, 1, obj.zamokID, 0);
            break;
          case 1:
            model.addBox(0.44, 0.45, 0, 0.57, 0.7, 0.07, obj.zamokID, 0);
            break;
          case 2:
            model.addBox(0.93, 0.45, 0.45, 1, 0.7, 0.55, obj.zamokID, 0);
            break;
          case 3:
            model.addBox(0, 0.45, 0.44, 0.07, 0.7, 0.55, obj.zamokID, 0);
            break;
        }
        render.addEntry(model);
    }
}};
Block.setPrototype("copperChest", {type: Block.TYPE_ROTATION, getVariations: function () {
    return [{name: "Copper Chest", texture: [["copper_chest", 0], ["copper_chest", 0], ["copper_chest", 2], ["copper_chest", 1], ["copper_chest", 2], ["copper_chest", 2]], inCreative: true}];
}});
IronChest.register(BlockID.copperChest, {name: "Copper Chest", slots: 45, zamokID: 42, renderGroup: ["pipe"], getTransportSlots: function () {
    return {input: ["slot0", "slot1", "slot2", "slot3", "slot4", "slot5", "slot6", "slot7", "slot8", "slot9", "slot10", "slot11", "slot12", "slot13", "slot14", "slot15", "slot16", "slot17", "slot18", "slot19", "slot20", "slot21", "slot22", "slot23", "slot24", "slot25", "slot26", "slot27", "slot28", "slot29", "slot30", "slot31", "slot32", "slot33", "slot34", "slot35", "slot36", "slot37", "slot38", "slot39", "slot40", "slot41", "slot42", "slot43", "slot44"], output: ["slot0", "slot1", "slot2", "slot3", "slot4", "slot5", "slot6", "slot7", "slot8", "slot9", "slot10", "slot11", "slot12", "slot13", "slot14", "slot15", "slot16", "slot17", "slot18", "slot19", "slot20", "slot21", "slot22", "slot23", "slot24", "slot25", "slot26", "slot27", "slot28", "slot29", "slot30", "slot31", "slot32", "slot33", "slot34", "slot35", "slot36", "slot37", "slot38", "slot39", "slot40", "slot41", "slot42", "slot43", "slot44"]};
}});
Block.setPrototype("ironChest", {type: Block.TYPE_ROTATION, getVariations: function () {
    return [{name: "Iron Chest", texture: [["iron_chest", 0], ["iron_chest", 0], ["iron_chest", 2], ["iron_chest", 1], ["iron_chest", 2], ["iron_chest", 2]], inCreative: true}];
}});
IronChest.register(BlockID.ironChest, {name: "Iron Chest", slots: 54, zamokID: 42, renderGroup: ["pipe"], getTransportSlots: function () {
    return {input: ["slot0", "slot1", "slot2", "slot3", "slot4", "slot5", "slot6", "slot7", "slot8", "slot9", "slot10", "slot11", "slot12", "slot13", "slot14", "slot15", "slot16", "slot17", "slot18", "slot19", "slot20", "slot21", "slot22", "slot23", "slot24", "slot25", "slot26", "slot27", "slot28", "slot29", "slot30", "slot31", "slot32", "slot33", "slot34", "slot35", "slot36", "slot37", "slot38", "slot39", "slot40", "slot41", "slot42", "slot43", "slot44", "slot45", "slot46", "slot47", "slot48", "slot49", "slot50", "slot51", "slot52", "slot53", "slot54", "slot55"], output: ["slot0", "slot1", "slot2", "slot3", "slot4", "slot5", "slot6", "slot7", "slot8", "slot9", "slot10", "slot11", "slot12", "slot13", "slot14", "slot15", "slot16", "slot17", "slot18", "slot19", "slot20", "slot21", "slot22", "slot23", "slot24", "slot25", "slot26", "slot27", "slot28", "slot29", "slot30", "slot31", "slot32", "slot33", "slot34", "slot35", "slot36", "slot37", "slot38", "slot39", "slot40", "slot41", "slot42", "slot43", "slot44", "slot45", "slot46", "slot47", "slot48", "slot49", "slot50", "slot51", "slot52", "slot53", "slot54", "slot55"]};
}});
Block.setPrototype("goldChest", {type: Block.TYPE_ROTATION, getVariations: function () {
    return [{name: "Gold Chest", texture: [["gold_chest", 0], ["gold_chest", 0], ["gold_chest", 2], ["gold_chest", 1], ["gold_chest", 2], ["gold_chest", 2]], inCreative: true}];
}});
IronChest.register(BlockID.goldChest, {name: "Gold Chest", slots: 72, zamokID: 41, renderGroup: ["pipe"], getTransportSlots: function () {
    return {input: ["slot0", "slot1", "slot2", "slot3", "slot4", "slot5", "slot6", "slot7", "slot8", "slot9", "slot10", "slot11", "slot12", "slot13", "slot14", "slot15", "slot16", "slot17", "slot18", "slot19", "slot20", "slot21", "slot22", "slot23", "slot24", "slot25", "slot26", "slot27", "slot28", "slot29", "slot30", "slot31", "slot32", "slot33", "slot34", "slot35", "slot36", "slot37", "slot38", "slot39", "slot40", "slot41", "slot42", "slot43", "slot44", "slot45", "slot46", "slot47", "slot48", "slot49", "slot50", "slot51", "slot52", "slot53", "slot54", "slot55", "slot56", "slot57", "slot58", "slot59", "slot60", "slot61", "slot62", "slot63", "slot64", "slot65", "slot66", "slot67", "slot68", "slot69", "slot70", "slot71"], output: ["slot0", "slot1", "slot2", "slot3", "slot4", "slot5", "slot6", "slot7", "slot8", "slot9", "slot10", "slot11", "slot12", "slot13", "slot14", "slot15", "slot16", "slot17", "slot18", "slot19", "slot20", "slot21", "slot22", "slot23", "slot24", "slot25", "slot26", "slot27", "slot28", "slot29", "slot30", "slot31", "slot32", "slot33", "slot34", "slot35", "slot36", "slot37", "slot38", "slot39", "slot40", "slot41", "slot42", "slot43", "slot44", "slot45", "slot46", "slot47", "slot48", "slot49", "slot50", "slot51", "slot52", "slot53", "slot54", "slot55", "slot56", "slot57", "slot58", "slot59", "slot60", "slot61", "slot62", "slot63", "slot64", "slot65", "slot66", "slot67", "slot68", "slot69", "slot70", "slot71"]};
}});
Block.setPrototype("diamondChest", {type: Block.TYPE_ROTATION, getVariations: function () {
    return [{name: "Diamond Chest", texture: [["diamond_chest", 0], ["diamond_chest", 0], ["diamond_chest", 2], ["diamond_chest", 1], ["diamond_chest", 2], ["diamond_chest", 2]], inCreative: true}];
}});
IronChest.register(BlockID.diamondChest, {name: "Diamond Chest", slots: 108, zamokID: 57, renderGroup: ["pipe"], getTransportSlots: function () {
    return {input: ["slot0", "slot1", "slot2", "slot3", "slot4", "slot5", "slot6", "slot7", "slot8", "slot9", "slot10", "slot11", "slot12", "slot13", "slot14", "slot15", "slot16", "slot17", "slot18", "slot19", "slot20", "slot21", "slot22", "slot23", "slot24", "slot25", "slot26", "slot27", "slot28", "slot29", "slot30", "slot31", "slot32", "slot33", "slot34", "slot35", "slot36", "slot37", "slot38", "slot39", "slot40", "slot41", "slot42", "slot43", "slot44", "slot45", "slot46", "slot47", "slot48", "slot49", "slot50", "slot51", "slot52", "slot53", "slot54", "slot55", "slot56", "slot57", "slot58", "slot59", "slot60", "slot61", "slot62", "slot63", "slot64", "slot65", "slot66", "slot67", "slot68", "slot69", "slot70", "slot71", "slot72", "slot73", "slot74", "slot75", "slot76", "slot77", "slot78", "slot79", "slot80", "slot81", "slot82", "slot83", "slot84", "slot85", "slot86", "slot87", "slot88", "slot89", "slot90", "slot92", "slot93", "slot94", "slot95", "slot96", "slot97", "slot98", "slot99", "slot100", "slot102", "slot103", "slot104", "slot105", "slot106", "slot107"], output: ["slot0", "slot1", "slot2", "slot3", "slot4", "slot5", "slot6", "slot7", "slot8", "slot9", "slot10", "slot11", "slot12", "slot13", "slot14", "slot15", "slot16", "slot17", "slot18", "slot19", "slot20", "slot21", "slot22", "slot23", "slot24", "slot25", "slot26", "slot27", "slot28", "slot29", "slot30", "slot31", "slot32", "slot33", "slot34", "slot35", "slot36", "slot37", "slot38", "slot39", "slot40", "slot41", "slot42", "slot43", "slot44", "slot45", "slot46", "slot47", "slot48", "slot49", "slot50", "slot51", "slot52", "slot53", "slot54", "slot55", "slot56", "slot57", "slot58", "slot59", "slot60", "slot61", "slot62", "slot63", "slot64", "slot65", "slot66", "slot67", "slot68", "slot69", "slot70", "slot71", "slot72", "slot73", "slot74", "slot75", "slot76", "slot77", "slot78", "slot79", "slot80", "slot81", "slot82", "slot83", "slot84", "slot85", "slot86", "slot87", "slot88", "slot89", "slot90", "slot92", "slot93", "slot94", "slot95", "slot96", "slot97", "slot98", "slot99", "slot100", "slot102", "slot103", "slot104", "slot105", "slot106", "slot107"]};
}});
Block.setPrototype("obsidianChest", {type: Block.TYPE_ROTATION, getVariations: function () {
    return [{name: "Obsidian Chest", texture: [["obsidian_chest", 0], ["obsidian_chest", 0], ["obsidian_chest", 2], ["obsidian_chest", 1], ["obsidian_chest", 2], ["obsidian_chest", 2]], inCreative: true}];
}});
IronChest.register(BlockID.obsidianChest, {name: "Obsidian Chest", slots: 108, zamokID: 42, renderGroup: ["pipe"], getTransportSlots: function () {
    return {input: ["slot0", "slot1", "slot2", "slot3", "slot4", "slot5", "slot6", "slot7", "slot8", "slot9", "slot10", "slot11", "slot12", "slot13", "slot14", "slot15", "slot16", "slot17", "slot18", "slot19", "slot20", "slot21", "slot22", "slot23", "slot24", "slot25", "slot26", "slot27", "slot28", "slot29", "slot30", "slot31", "slot32", "slot33", "slot34", "slot35", "slot36", "slot37", "slot38", "slot39", "slot40", "slot41", "slot42", "slot43", "slot44", "slot45", "slot46", "slot47", "slot48", "slot49", "slot50", "slot51", "slot52", "slot53", "slot54", "slot55", "slot56", "slot57", "slot58", "slot59", "slot60", "slot61", "slot62", "slot63", "slot64", "slot65", "slot66", "slot67", "slot68", "slot69", "slot70", "slot71", "slot72", "slot73", "slot74", "slot75", "slot76", "slot77", "slot78", "slot79", "slot80", "slot81", "slot82", "slot83", "slot84", "slot85", "slot86", "slot87", "slot88", "slot89", "slot90", "slot92", "slot93", "slot94", "slot95", "slot96", "slot97", "slot98", "slot99", "slot100", "slot102", "slot103", "slot104", "slot105", "slot106", "slot107"], output: ["slot0", "slot1", "slot2", "slot3", "slot4", "slot5", "slot6", "slot7", "slot8", "slot9", "slot10", "slot11", "slot12", "slot13", "slot14", "slot15", "slot16", "slot17", "slot18", "slot19", "slot20", "slot21", "slot22", "slot23", "slot24", "slot25", "slot26", "slot27", "slot28", "slot29", "slot30", "slot31", "slot32", "slot33", "slot34", "slot35", "slot36", "slot37", "slot38", "slot39", "slot40", "slot41", "slot42", "slot43", "slot44", "slot45", "slot46", "slot47", "slot48", "slot49", "slot50", "slot51", "slot52", "slot53", "slot54", "slot55", "slot56", "slot57", "slot58", "slot59", "slot60", "slot61", "slot62", "slot63", "slot64", "slot65", "slot66", "slot67", "slot68", "slot69", "slot70", "slot71", "slot72", "slot73", "slot74", "slot75", "slot76", "slot77", "slot78", "slot79", "slot80", "slot81", "slot82", "slot83", "slot84", "slot85", "slot86", "slot87", "slot88", "slot89", "slot90", "slot92", "slot93", "slot94", "slot95", "slot96", "slot97", "slot98", "slot99", "slot100", "slot102", "slot103", "slot104", "slot105", "slot106", "slot107"]};
}});
Block.setPrototype("crystalChest", {type: Block.TYPE_ROTATION, getVariations: function () {
    return [{name: "Crystal Chest", texture: [["crystal_chest", 0], ["crystal_chest", 0], ["crystal_chest", 2], ["crystal_chest", 1], ["crystal_chest", 2], ["crystal_chest", 2]], inCreative: true}];
}});
IronChest.register(BlockID.crystalChest, {name: "Crystal Chest", slots: 108, zamokID: 57, renderGroup: ["pipe"], getTransportSlots: function () {
    return {input: ["slot0", "slot1", "slot2", "slot3", "slot4", "slot5", "slot6", "slot7", "slot8", "slot9", "slot10", "slot11", "slot12", "slot13", "slot14", "slot15", "slot16", "slot17", "slot18", "slot19", "slot20", "slot21", "slot22", "slot23", "slot24", "slot25", "slot26", "slot27", "slot28", "slot29", "slot30", "slot31", "slot32", "slot33", "slot34", "slot35", "slot36", "slot37", "slot38", "slot39", "slot40", "slot41", "slot42", "slot43", "slot44", "slot45", "slot46", "slot47", "slot48", "slot49", "slot50", "slot51", "slot52", "slot53", "slot54", "slot55", "slot56", "slot57", "slot58", "slot59", "slot60", "slot61", "slot62", "slot63", "slot64", "slot65", "slot66", "slot67", "slot68", "slot69", "slot70", "slot71", "slot72", "slot73", "slot74", "slot75", "slot76", "slot77", "slot78", "slot79", "slot80", "slot81", "slot82", "slot83", "slot84", "slot85", "slot86", "slot87", "slot88", "slot89", "slot90", "slot92", "slot93", "slot94", "slot95", "slot96", "slot97", "slot98", "slot99", "slot100", "slot102", "slot103", "slot104", "slot105", "slot106", "slot107"], output: ["slot0", "slot1", "slot2", "slot3", "slot4", "slot5", "slot6", "slot7", "slot8", "slot9", "slot10", "slot11", "slot12", "slot13", "slot14", "slot15", "slot16", "slot17", "slot18", "slot19", "slot20", "slot21", "slot22", "slot23", "slot24", "slot25", "slot26", "slot27", "slot28", "slot29", "slot30", "slot31", "slot32", "slot33", "slot34", "slot35", "slot36", "slot37", "slot38", "slot39", "slot40", "slot41", "slot42", "slot43", "slot44", "slot45", "slot46", "slot47", "slot48", "slot49", "slot50", "slot51", "slot52", "slot53", "slot54", "slot55", "slot56", "slot57", "slot58", "slot59", "slot60", "slot61", "slot62", "slot63", "slot64", "slot65", "slot66", "slot67", "slot68", "slot69", "slot70", "slot71", "slot72", "slot73", "slot74", "slot75", "slot76", "slot77", "slot78", "slot79", "slot80", "slot81", "slot82", "slot83", "slot84", "slot85", "slot86", "slot87", "slot88", "slot89", "slot90", "slot92", "slot93", "slot94", "slot95", "slot96", "slot97", "slot98", "slot99", "slot100", "slot102", "slot103", "slot104", "slot105", "slot106", "slot107"]};
}});
Callback.addCallback("PostLoaded", function () {
    Recipes.addShaped({id: BlockID.copperChest, count: 1, data: 0}, ["xax", "a#a", "xax"], ["#", 54, 0, "a", 265, 0, "x", 20, 0]);
    Recipes.addShaped({id: BlockID.ironChest, count: 1, data: 0}, ["aaa", "a#a", "aaa"], ["#", 54, 0, "a", 265, 0]);
    Recipes.addShaped({id: BlockID.goldChest, count: 1, data: 0}, ["aaa", "a#a", "aaa"], ["#", BlockID.ironChest, -1, "a", 266, 0]);
    Recipes.addShaped({id: BlockID.diamondChest, count: 1, data: 0}, ["aaa", "x#x", "aaa"], ["#", BlockID.goldChest, -1, "a", 264, 0, "x", 20, 0]);
    Recipes.addShaped({id: BlockID.obsidianChest, count: 1, data: 0}, ["aaa", "a#a", "aaa"], ["#", BlockID.diamondChest, -1, "a", 49, 0]);
    Recipes.addShaped({id: BlockID.crystalChest, count: 1, data: 0}, ["xxx", "x#x", "xxx"], ["#", BlockID.diamondChest, -1, "x", 20, 0]);
});
var UpgradeChest = {set: function (item, one, two) {
    Item.registerUseFunction(item, function (b, a, d) {
        d.id == one && (d = World.getTileEntity(b.x, b.y, b.z), a = d.container, d.container = new UI.Container(), d.selfDestroy(), World.setBlock(b.x, b.y, b.z, two), b = World.addTileEntity(b.x, b.y, b.z), b.container = a, a.tileEntity = b);
    });
}};
IDRegistry.genItemID("copperToIron");
Item.createItem("copperToIron", "Copper -> Iron", {name: "copper_to_iron"});
UpgradeChest.set("copperToIron", BlockID.copperChest, BlockID.ironChest);
IDRegistry.genItemID("ironToGold");
Item.createItem("ironToGold", "Iron -> Gold", {name: "iron_to_gold"});
UpgradeChest.set("ironToGold", BlockID.ironChest, BlockID.goldChest);
IDRegistry.genItemID("goldToDiamond");
Item.createItem("goldToDiamond", "Gold -> Diamond", {name: "gold_to_diamond"});
UpgradeChest.set("goldToDiamond", BlockID.goldChest, BlockID.diamondChest);
IDRegistry.genItemID("diamondToObsidian");
Item.createItem("diamondToObsidian", "Diamond -> Obsidian", {name: "diamond_to_obsidian"});
UpgradeChest.set("diamondToObsidian", BlockID.diamondChest, BlockID.obsidianChest);
IDRegistry.genItemID("diamondToCrystal");
Item.createItem("diamondToCrystal", "Diamond -> Crystal", {name: "copper_to_iron"});
UpgradeChest.set("diamondToCrystal", BlockID.diamondChest, BlockID.crystalChest);
Callback.addCallback("PostLoaded", function () {
    Recipes.addShaped({id: ItemID.copperToIron, count: 1, data: 0}, ["aaa", "a#a", "aaa"], ["#", 54, 0, "a", 265, 0]);
    Recipes.addShaped({id: ItemID.ironToGold, count: 1, data: 0}, ["aaa", "a#a", "aaa"], ["#", 265, 0, "a", 266, 0]);
    Recipes.addShaped({id: ItemID.goldToDiamond, count: 1, data: 0}, ["aaa", "xbx", "aaa"], ["a", 264, 0, "x", 20, 0, "b", 266, 0]);
    Recipes.addShaped({id: ItemID.diamondToObsidian, count: 1, data: 0}, ["aaa", "a#a", "aaa"], ["#", 49, 0, "a", 264, 0]);
    Recipes.addShaped({id: ItemID.diamondToCrystal, count: 1, data: 0}, ["aaa", "a#a", "aaa"], ["#", BlockID.diamondChest, -1, "a", 49, 0]);
});

