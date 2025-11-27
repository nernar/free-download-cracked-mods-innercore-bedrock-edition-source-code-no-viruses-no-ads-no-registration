IDRegistry.genItemID("keyDungeon");
Item.createItem("keyDungeon", "keyDungeon", {name: "keyDungeon", meta: 0}, {stack: 1});
Translation.addTranslation("keyDungeon", {ru: "\u0437\u043e\u043b\u043e\u0442\u043e\u0439 \u043a\u043b\u044e\u0447"});
Item.setGlint(ItemID.keyDungeon, true);
Callback.addCallback("ItemUse", function (coords, item) {
    if (item.id == ItemID.keyDungeon) {
        if (World.getBlock(coords.x, coords.y, coords.z).id == BlockID.brickkey) {
            if (World.getBlock(coords.x, coords.y + 1, coords.z).id == BlockID.brick3) {
                if (World.getBlock(coords.x, coords.y - 1, coords.z).id == BlockID.brick3) {
                    if (World.getBlock(coords.x - 1, coords.y, coords.z).id == BlockID.brick3) {
                        if (World.getBlock(coords.x - 1, coords.y + 1, coords.z).id == BlockID.brick3) {
                            if (World.getBlock(coords.x - 1, coords.y - 1, coords.z).id == BlockID.brick3) {
                                if (World.getBlock(coords.x + 1, coords.y, coords.z).id == BlockID.brick3) {
                                    if (World.getBlock(coords.x + 1, coords.y + 1, coords.z).id == BlockID.brick3) {
                                        if (World.getBlock(coords.x + 1, coords.y - 1, coords.z).id == BlockID.brick3) {
                                            World.setBlock(coords.x, coords.y + 1, coords.z, 0, 0);
                                            World.setBlock(coords.x, coords.y, coords.z, 0, 0);
                                            World.setBlock(coords.x, coords.y - 1, coords.z, 0, 0);
                                            World.setBlock(coords.x - 1, coords.y + 1, coords.z, 0, 0);
                                            World.setBlock(coords.x - 1, coords.y, coords.z, 0, 0);
                                            World.setBlock(coords.x - 1, coords.y - 1, coords.z, 0, 0);
                                            World.setBlock(coords.x + 1, coords.y + 1, coords.z, 0, 0);
                                            World.setBlock(coords.x + 1, coords.y, coords.z, 0, 0);
                                            World.setBlock(coords.x + 1, coords.y - 1, coords.z, 0, 0);
                                            Player.decreaseCarriedItem();
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
});

