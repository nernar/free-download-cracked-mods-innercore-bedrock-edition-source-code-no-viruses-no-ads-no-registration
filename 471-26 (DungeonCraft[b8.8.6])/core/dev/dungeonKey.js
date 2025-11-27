IDRegistry.genItemID("keyDungeon");
Item.createItem("keyDungeon", "key Dungeon", {name: "keyDungeon", meta: 0}, {stack: 1});
Translation.addTranslation("key Dungeon", {ru: "\u0437\u043e\u043b\u043e\u0442\u043e\u0439 \u043a\u043b\u044e\u0447"});
Item.setGlint(ItemID.keyDungeon, true);
Item.registerUseFunction("keyDungeon", function (coords, item, block, player) {
    let b = BlockSource.getDefaultForActor(player);
    if (b.getBlock(coords.x, coords.y, coords.z).id == BlockID.brickkey) {
        if (b.getBlock(coords.x, coords.y + 1, coords.z).id == BlockID.brick3) {
            if (b.getBlock(coords.x, coords.y - 1, coords.z).id == BlockID.brick3) {
                if (b.getBlock(coords.x - 1, coords.y, coords.z).id == BlockID.brick3) {
                    if (b.getBlock(coords.x - 1, coords.y + 1, coords.z).id == BlockID.brick3) {
                        if (b.getBlock(coords.x - 1, coords.y - 1, coords.z).id == BlockID.brick3) {
                            if (b.getBlock(coords.x + 1, coords.y, coords.z).id == BlockID.brick3) {
                                if (b.getBlock(coords.x + 1, coords.y + 1, coords.z).id == BlockID.brick3) {
                                    if (b.getBlock(coords.x + 1, coords.y - 1, coords.z).id == BlockID.brick3) {
                                        b.setBlock(coords.x, coords.y + 1, coords.z, 0, 0);
                                        b.setBlock(coords.x, coords.y, coords.z, 0, 0);
                                        b.setBlock(coords.x, coords.y - 1, coords.z, 0, 0);
                                        b.setBlock(coords.x - 1, coords.y + 1, coords.z, 0, 0);
                                        b.setBlock(coords.x - 1, coords.y, coords.z, 0, 0);
                                        b.setBlock(coords.x - 1, coords.y - 1, coords.z, 0, 0);
                                        b.setBlock(coords.x + 1, coords.y + 1, coords.z, 0, 0);
                                        b.setBlock(coords.x + 1, coords.y, coords.z, 0, 0);
                                        b.setBlock(coords.x + 1, coords.y - 1, coords.z, 0, 0);
                                        Entity.setCarriedItem(player, 0, 0, 0);
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
IDRegistry.genItemID("keyDungeon2");
Item.createItem("keyDungeon2", "update key", {name: "key", meta: 2}, {stack: 1});
Translation.addTranslation("update key", {ru: "\u043e\u0433\u043d\u0435\u043d\u043d\u044b\u0439 \u043a\u043b\u044e\u0447"});
Item.setGlint(ItemID.keyDungeon2, true);
Item.addCreativeGroup("keyDungeon", Translation.translate("Key"), [ItemID.keyDungeon, ItemID.keyDungeon2]);
Item.registerUseFunction("keyDungeon2", function (coords, item, block, player) {
    let b = BlockSource.getDefaultForActor(player);
    if (b.getBlock(coords.x, coords.y, coords.z).id == BlockID.brickkey) {
        if (b.getBlock(coords.x, coords.y + 1, coords.z).id == BlockID.brick3) {
            if (b.getBlock(coords.x, coords.y - 1, coords.z).id == BlockID.brick3) {
                if (b.getBlock(coords.x - 1, coords.y, coords.z).id == BlockID.brick3) {
                    if (b.getBlock(coords.x - 1, coords.y + 1, coords.z).id == BlockID.brick3) {
                        if (b.getBlock(coords.x - 1, coords.y - 1, coords.z).id == BlockID.brick3) {
                            if (b.getBlock(coords.x + 1, coords.y, coords.z).id == BlockID.brick3) {
                                if (b.getBlock(coords.x + 1, coords.y + 1, coords.z).id == BlockID.brick3) {
                                    if (b.getBlock(coords.x + 1, coords.y - 1, coords.z).id == BlockID.brick3) {
                                        b.setBlock(coords.x, coords.y + 1, coords.z, 0, 0);
                                        b.setBlock(coords.x, coords.y, coords.z, 0, 0);
                                        b.setBlock(coords.x, coords.y - 1, coords.z, 0, 0);
                                        b.setBlock(coords.x - 1, coords.y + 1, coords.z, 0, 0);
                                        b.setBlock(coords.x - 1, coords.y, coords.z, 0, 0);
                                        b.setBlock(coords.x - 1, coords.y - 1, coords.z, 0, 0);
                                        b.setBlock(coords.x + 1, coords.y + 1, coords.z, 0, 0);
                                        b.setBlock(coords.x + 1, coords.y, coords.z, 0, 0);
                                        b.setBlock(coords.x + 1, coords.y - 1, coords.z, 0, 0);
                                        Entity.setCarriedItem(player, 0, 0, 0);
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

