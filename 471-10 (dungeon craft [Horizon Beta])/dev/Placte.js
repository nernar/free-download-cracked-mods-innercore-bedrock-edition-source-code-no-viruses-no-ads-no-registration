IDRegistry.genItemID("godcol");
Item.createItem("godcol", "Record of the sun god", {name: "godcol", meta: 0}, {stack: 1});
Translation.addTranslation("Record of the sun god", {ru: "\u043f\u043b\u0430\u0441\u0442\u0438\u043d\u043a\u0430 \u0411\u043e\u0433\u0430"});
IDRegistry.genItemID("GlasPlacte");
Item.createItem("GlasPlacte", "Evil Plate", {name: "GlasPlacte", meta: 0}, {stack: 1});
Translation.addTranslation("Evil Plate", {ru: "\u043f\u043b\u0430\u0441\u0442\u0438\u043d\u043a\u0430 \u043d\u0435\u0447\u0435\u0441\u0442\u0438"});
IDRegistry.genItemID("AngelPlate");
Item.createItem("AngelPlate", "angel record", {name: "AngelPlate", meta: 0}, {stack: 1});
Translation.addTranslation("angel record", {ru: "\u043f\u043b\u0430\u0441\u0442\u0438\u043d\u043a\u0430 \u0440\u0430\u044f"});
Callback.addCallback("ItemUse", function (coords, item) {
    if (item.id == ItemID.godcol) {
        if (World.getBlockID(coords.x, coords.y, coords.z) == BlockID.player) {
            World.setBlock(coords.x, coords.y, coords.z, BlockID.player3, 0);
            raiFinal.play();
            Player.decreaseCarriedItem();
            Game.tipMessage("\xa72\u0441\u0435\u0439\u0447\u0430\u0441 \u0438\u0433\u0440\u0430\u0435\u0442 \xa73\u0420\u0430\u0439 \u0424\u0438\u043d\u0430\u043b");
        }
    }
});
Callback.addCallback("ItemUse", function (coords, item) {
    if (item.id == ItemID.GlasPlacte) {
        if (World.getBlockID(coords.x, coords.y, coords.z) == BlockID.player) {
            World.setBlock(coords.x, coords.y, coords.z, BlockID.player1, 0);
            boss1.play();
            Player.decreaseCarriedItem();
            Game.tipMessage("\u0438\u0433\u0440\u0430\u0435\u0442 \u043c\u0443\u0437\u044b\u043a\u0430 \xa73\u0431\u043e\u0441\u0441 \u0436\u0438\u0432\u0430\u044f \u043d\u0435 \u0447\u0435\u0441\u0442\u044c");
        }
    }
});
Callback.addCallback("ItemUse", function (coords, item) {
    if (item.id == ItemID.AngelPlate) {
        if (World.getBlockID(coords.x, coords.y, coords.z) == BlockID.player) {
            World.setBlock(coords.x, coords.y, coords.z, BlockID.player2, 0);
            angel.play();
            Player.decreaseCarriedItem();
            Game.tipMessage("\u0438\u0433\u0440\u0430\u0435\u0442 \u043c\u0443\u0437\u044b\u043a\u0430 \xa73\u0445\u0440\u0430\u043d\u0438\u0442\u0435\u043b\u044c \u043d\u0435\u0431\u0435\u0441");
        }
    }
});

