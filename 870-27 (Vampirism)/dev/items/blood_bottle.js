IDRegistry.genItemID("bloodBottle");
Item.createItem("bloodBottle", "Blood Bottle", {name: "bloodBottle2"}, {stack: 1});

Item.registerUseFunction("bloodBottle", function(coords, item, block, player) {
    if (item.data) {
        if (VM.players[player]['level']) {
            let scale = Scales.getScaleByPlayer(player, "BLOOD");
            if (scale.getValue() < 20) {
                VM.BM.bloodBottleDataDown(item, 1, player);
                VM.BM.bloodLvlUp(2, player);
                VM.playSound(coords, 12, player, "drink");
            }
        } else {
            VM.BM.bloodBottleDataDown(item, 1, player);
            VM.playSound(coords, 12, player, "drink");
            Entity.addEffect(player, 9, 2, 300);
        }
    }
});

Item.registerNoTargetUseFunction("bloodBottle", function(item, player) {
    if (VM.players[player]['level'] && item.data < 3) {
        let scale = Scales.getScaleByPlayer(player, "BLOOD");
        if (scale.getValue() > 2) {
            VM.BM.bloodLvlDown(2, player);
            VM.BM.bloodBottleDataUp(item, 1, player);
        }
    }
});

Item.registerIconOverrideFunction("bloodBottle", function(item, isModUi) {
    if (!isModUi) {
        if (item.data >= 3) {
            return {name: "bloodBottle2"};
        } else if (item.data > 0 && item.data < 3) {
            return {name: "bloodBottle1"};
        } else {
            return {name: "bloodBottle0"};
        }
    }
});
Item.registerNameOverrideFunction("bloodBottle", function(item, translation, name) {
    return Translation.translate("Blood Bottle") + Translation.translate("\nStorage: ") + item.data;
});

Recipes.addShaped({id: ItemID.bloodBottle, count: 1, data: 0},
	[" i ", "g g", " g "],
	['i', VanillaItemID.gold_ingot, 0, 'g', VanillaBlockID.glass, 0]
); 