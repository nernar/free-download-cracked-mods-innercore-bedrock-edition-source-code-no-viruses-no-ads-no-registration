var sound = new Sound();
sound.setSource("sound.ogg");
var ritual = {recipesItem: function (reg) {
    Callback.addCallback("ItemUse", function (coords, item) {
        var item = Player.getCarriedItem();
        if (item.id == reg.items) {
            var glBlocko = reg.glBlock;
            var block11 = reg.blockXp;
            var block22 = reg.blockXm;
            var block33 = reg.blockZp;
            var block44 = reg.blockZm;
            var manas = reg.manaMinus;
            var mann = reg.manaCount;
            var blockRepp = reg.blockReplace;
            var counts788 = reg.counts78;
            var glBlockk = reg.glBlockID;
            var sound1 = reg.sount;
            var sound2 = reg.sountD;
            if (World.getBlockID(coords.x + 2, coords.y, coords.z) == block11) {
                if (World.getBlockID(coords.x - 2, coords.y, coords.z) == block22) {
                    if (World.getBlockID(coords.x, coords.y, coords.z + 2) == block33) {
                        if (World.getBlockID(coords.x, coords.y, coords.z - 2) == block44) {
                            if (glBlocko == true) {
                                if (World.getBlockID(coords.x, coords.y, coords.z) == glBlockk) {
                                    if (mana >= mann) {
                                        if (manas == false) {
                                            mana += mann;
                                        }
                                        if (manas == true) {
                                            mana -= mann;
                                        }
                                        mann == 0;
                                        if (sound2 == true) {
                                            sound1.play();
                                        }
                                        World.setBlock(coords.x + 2, coords.y, coords.z, blockRepp, 0);
                                        World.setBlock(coords.x - 2, coords.y, coords.z, blockRepp, 0);
                                        World.setBlock(coords.x, coords.y, coords.z + 2, blockRepp, 0);
                                        World.setBlock(coords.x, coords.y, coords.z - 2, blockRepp, 0);
                                        World.drop(coords.x, coords.y + 1, coords.z, reg.item, reg.counts78, 0);
                                    }
                                }
                            }
                            if (glBlocko == false) {
                                if (mana >= mann) {
                                    if (manas == false) {
                                        mana += mann;
                                    }
                                    if (manas == true) {
                                        mana -= mann;
                                    }
                                    mann == 0;
                                    if (sound2 == true) {
                                        sound1.play();
                                    }
                                    World.setBlock(coords.x + 2, coords.y, coords.z, blockRepp, 0);
                                    World.setBlock(coords.x - 2, coords.y, coords.z, blockRepp, 0);
                                    World.setBlock(coords.x, coords.y, coords.z + 2, blockRepp, 0);
                                    World.setBlock(coords.x, coords.y, coords.z - 2, blockRepp, 0);
                                    World.drop(coords.x, coords.y + 1, coords.z, reg.itemID, reg.countItem, 0);
                                }
                            }
                        }
                    }
                }
            }
        }
        glBlocko = 0;
        block11 = 0;
        block22 = 0;
        block33 = 0;
        block44 = 0;
        manas = 0;
        mann = 0;
        blockRepp = 0;
        counts788 = 0;
        glBlockk = 0;
        sound1 = 0;
        sound2 = 0;
    });
}};
ritual.recipesItem({items: ItemID.clitok, glBlock: true, glBlockID: BlockID.glass2, blockXp: BlockID.glass2, blockXm: BlockID.glass2, blockZp: BlockID.glass2, blockZm: BlockID.glass2, manaMinus: false, manaCount: 500, blockReplace: BlockID.brick2, itemID: ItemID.clitok, countItem: 5, sountD: true, sount: sound});
ritual.recipesItem({items: ItemID.clitok, glBlock: false, blockXp: BlockID.brick2, blockXm: BlockID.brick2, blockZp: BlockID.brick2, blockZm: BlockID.brick2, manaMinus: true, manaCount: 500, blockReplace: BlockID.glass2, itemID: ItemID.clitok, countItem: 5, sountD: true, sount: sound});
var ritual = {register: function (reg) {
    var glBlocko = reg.glBlock;
    if (glBlocko == true) {
        Callback.addCallback("ItemUse", function (coords, item) {
            var item = Player.getCarriedItem();
            if (item.id == reg.items) {
                var block11 = reg.block1;
                var block22 = reg.block2;
                var block33 = reg.block3;
                var block44 = reg.block4;
                var mann = reg.man;
                var blockRepp = reg.blockRep;
                var counts788 = reg.counts78;
                var glBlockk = reg.glBlockc;
                var sound1 = reg.sountt;
                var sound2 = reg.sounttt;
                if (World.getBlockID(coords.x + 2, coords.y, coords.z) == block11) {
                    if (World.getBlockID(coords.x - 2, coords.y, coords.z) == block22) {
                        if (World.getBlockID(coords.x, coords.y, coords.z + 2) == block33) {
                            if (World.getBlockID(coords.x, coords.y, coords.z - 2) == block44) {
                                if (World.getBlockID(coords.x, coords.y, coords.z) == glBlockk) {
                                    if (mana >= mann) {
                                        mana -= mann;
                                        if (sound2 == true) {
                                            sound1.play();
                                        }
                                        World.setBlock(coords.x + 2, coords.y, coords.z, blockRepp, 0);
                                        World.setBlock(coords.x - 2, coords.y, coords.z, blockRepp, 0);
                                        World.setBlock(coords.x, coords.y, coords.z + 2, blockRepp, 0);
                                        World.setBlock(coords.x, coords.y, coords.z - 2, blockRepp, 0);
                                        World.drop(coords.x, coords.y + 1, coords.z, reg.item, reg.counts78, 0);
                                    }
                                }
                            }
                        }
                    }
                }
            }
        });
    }
    if (glBlocko == false) {
        Callback.addCallback("ItemUse", function (coords, item) {
            var item = Player.getCarriedItem();
            if (item.id == reg.items) {
                var block11 = reg.block1;
                var block22 = reg.block2;
                var block33 = reg.block3;
                var block44 = reg.block4;
                var mann = reg.man;
                var blockRepp = reg.blockRep;
                var counts788 = reg.counts78;
                var glBlockk = reg.glBlockc;
                var sound1 = reg.sountt;
                var sound2 = reg.sounttt;
                if (World.getBlockID(coords.x + 2, coords.y, coords.z) == block11) {
                    if (World.getBlockID(coords.x - 2, coords.y, coords.z) == block22) {
                        if (World.getBlockID(coords.x, coords.y, coords.z + 2) == block33) {
                            if (World.getBlockID(coords.x, coords.y, coords.z - 2) == block44) {
                                if (mana >= mann) {
                                    mana -= mann;
                                    if (sound2 == true) {
                                        sound1.play();
                                    }
                                    World.setBlock(coords.x + 2, coords.y, coords.z, blockRepp, 0);
                                    World.setBlock(coords.x - 2, coords.y, coords.z, blockRepp, 0);
                                    World.setBlock(coords.x, coords.y, coords.z + 2, blockRepp, 0);
                                    World.setBlock(coords.x, coords.y, coords.z - 2, blockRepp, 0);
                                    World.drop(coords.x, coords.y + 1, coords.z, reg.item, reg.counts78, 0);
                                }
                            }
                        }
                    }
                }
            }
        });
    }
}};
ritual.register({items: ItemID.clitok, glBlock: false, block1: BlockID.д, block2: BlockID.д, block3: BlockID.д, block4: BlockID.д, man: 500, blockRep: BlockID.л, item: ItemID.clitok, counts78: 5, sounttt: true, sountt: sound});
var dungeon1 = {cube3x3: function (reg) {
    var posX = reg.coordsX;
    var posY = reg.coordsY;
    var posZ = reg.coordsZ;
    var kokni = reg.plusY;
    var kokni1 = reg.Y;
    if (kokni == true) {
        posY.y += kokni1;
    }
    if (kokni == false) {
        posY.y -= kokni1;
    }
    var kokni2 = reg.plusX;
    var kokni3 = reg.X;
    if (kokni2 == true) {
        posX.x += kokni3;
    }
    if (kokni2 == false) {
        posX.x -= kokni3;
    }
    var kokni4 = reg.plusZ;
    var kokni5 = reg.Z;
    if (kokni4 == true) {
        posZ.z += kokni5;
    }
    if (kokni4 == false) {
        posZ.z -= kokni5;
    }
    World.setBlock(posX.x, posY.y, posZ.z, reg.cubeID, reg.cubeData);
    World.setBlock(posX.x + 1, posY.y, posZ.z, reg.cubeID, reg.cubeData);
    World.setBlock(posX.x - 1, posY.y, posZ.z, reg.cubeID, reg.cubeData);
    World.setBlock(posX.x, posY.y, posZ.z + 1, reg.cubeID, reg.cubeData);
    World.setBlock(posX.x, posY.y, posZ.z - 1, reg.cubeID, reg.cubeData);
    World.setBlock(posX.x + 1, posY.y, posZ.z - 1, reg.cubeID, reg.cubeData);
    World.setBlock(posX.x - 1, posY.y, posZ.z - 1, reg.cubeID, reg.cubeData);
    World.setBlock(posX.x + 1, posY.y, posZ.z + 1, reg.cubeID, reg.cubeData);
    World.setBlock(posX.x - 1, posY.y, posZ.z + 1, reg.cubeID, reg.cubeData);
}, cube3x3Empty: function (reg) {
    var posX = reg.coordsX;
    var posY = reg.coordsY;
    var posZ = reg.coordsZ;
    var kokni = reg.plusY;
    var kokni1 = reg.Y;
    if (kokni == true) {
        posY.y += kokni1;
    }
    if (kokni == false) {
        posY.y -= kokni1;
    }
    var kokni2 = reg.plusX;
    var kokni3 = reg.X;
    if (kokni2 == true) {
        posX.x += kokni3;
    }
    if (kokni2 == false) {
        posX.x -= kokni3;
    }
    var kokni4 = reg.plusZ;
    var kokni5 = reg.Z;
    if (kokni4 == true) {
        posZ.z += kokni5;
    }
    if (kokni4 == false) {
        posZ.z -= kokni5;
    }
    World.setBlock(posX.x + 1, posY.y, posZ.z, reg.cubeID, reg.cubeData);
    World.setBlock(posX.x - 1, posY.y, posZ.z, reg.cubeID, reg.cubeData);
    World.setBlock(posX.x, posY.y, posZ.z + 1, reg.cubeID, reg.cubeData);
    World.setBlock(posX.x, posY.y, posZ.z - 1, reg.cubeID, reg.cubeData);
    World.setBlock(posX.x + 1, posY.y, posZ.z - 1, reg.cubeID, reg.cubeData);
    World.setBlock(posX.x - 1, posY.y, posZ.z - 1, reg.cubeID, reg.cubeData);
    World.setBlock(posX.x + 1, posY.y, posZ.z + 1, reg.cubeID, reg.cubeData);
    World.setBlock(posX.x - 1, posY.y, posZ.z + 1, reg.cubeID, reg.cubeData);
}, cube3x3WallZ: function (reg) {
    var posX = reg.coordsX;
    var posY = reg.coordsY;
    var posZ = reg.coordsZ;
    var kokni = reg.plusY;
    var kokni1 = reg.Y;
    if (kokni == true) {
        posY.y += kokni1;
    }
    if (kokni == false) {
        posY.y -= kokni1;
    }
    var kokni2 = reg.plusX;
    var kokni3 = reg.X;
    if (kokni2 == true) {
        posX.x += kokni3;
    }
    if (kokni2 == false) {
        posX.x -= kokni3;
    }
    var kokni4 = reg.plusZ;
    var kokni5 = reg.Z;
    if (kokni4 == true) {
        posZ.z += kokni5;
    }
    if (kokni4 == false) {
        posZ.z -= kokni5;
    }
    World.setBlock(posX.x, posY.y, posZ.z, reg.cubeID, reg.cubeData);
    World.setBlock(posX.x, posY.y - 1, posZ.z, reg.cubeID, reg.cubeData);
    World.setBlock(posX.x, posY.y + 1, posZ.z, reg.cubeID, reg.cubeData);
    World.setBlock(posX.x + 1, posY.y, posZ.z, reg.cubeID, reg.cubeData);
    World.setBlock(posX.x + 1, posY.y - 1, posZ.z, reg.cubeID, reg.cubeData);
    World.setBlock(posX.x + 1, posY.y + 1, posZ.z, reg.cubeID, reg.cubeData);
    World.setBlock(posX.x - 1, posY.y, posZ.z, reg.cubeID, reg.cubeData);
    World.setBlock(posX.x - 1, posY.y - 1, posZ.z, reg.cubeID, reg.cubeData);
    World.setBlock(posX.x - 1, posY.y + 1, posZ.z, reg.cubeID, reg.cubeData);
}, cube3x3WallX: function (reg) {
    var posX = reg.coordsX;
    var posY = reg.coordsY;
    var posZ = reg.coordsZ;
    var kokni = reg.plusY;
    var kokni1 = reg.Y;
    if (kokni == true) {
        posY.y += kokni1;
    }
    if (kokni == false) {
        posY.y -= kokni1;
    }
    var kokni2 = reg.plusX;
    var kokni3 = reg.X;
    if (kokni2 == true) {
        posX.x += kokni3;
    }
    if (kokni2 == false) {
        posX.x -= kokni3;
    }
    var kokni4 = reg.plusZ;
    var kokni5 = reg.Z;
    if (kokni4 == true) {
        posZ.z += kokni5;
    }
    if (kokni4 == false) {
        posZ.z -= kokni5;
    }
    World.setBlock(posX.x, posY.y, posZ.z, reg.cubeID, reg.cubeData);
    World.setBlock(posX.x, posY.y - 1, posZ.z, reg.cubeID, reg.cubeData);
    World.setBlock(posX.x, posY.y + 1, posZ.z, reg.cubeID, reg.cubeData);
    World.setBlock(posX.x, posY.y, posZ.z + 1, reg.cubeID, reg.cubeData);
    World.setBlock(posX.x, posY.y - 1, posZ.z + 1, reg.cubeID, reg.cubeData);
    World.setBlock(posX.x, posY.y + 1, posZ.z + 1, reg.cubeID, reg.cubeData);
    World.setBlock(posX.x, posY.y, posZ.z - 1, reg.cubeID, reg.cubeData);
    World.setBlock(posX.x, posY.y - 1, posZ.z - 1, reg.cubeID, reg.cubeData);
    World.setBlock(posX.x, posY.y + 1, posZ.z - 1, reg.cubeID, reg.cubeData);
}, cube5x5: function (reg) {
    var posX = reg.coordsX;
    var posY = reg.coordsY;
    var posZ = reg.coordsZ;
    var kokni = reg.plusY;
    var kokni1 = reg.Y;
    if (kokni == true) {
        posY.y += kokni1;
    }
    if (kokni == false) {
        posY.y -= kokni1;
    }
    var kokni2 = reg.plusX;
    var kokni3 = reg.X;
    if (kokni2 == true) {
        posX.x += kokni3;
    }
    if (kokni2 == false) {
        posX.x -= kokni3;
    }
    var kokni4 = reg.plusZ;
    var kokni5 = reg.Z;
    if (kokni4 == true) {
        posZ.z += kokni5;
    }
    if (kokni4 == false) {
        posZ.z -= kokni5;
    }
    World.setBlock(posX.x, posY.y, posZ.z, reg.cubeID, reg.cubeData);
    World.setBlock(posX.x + 1, posY.y, posZ.z, reg.cubeID, reg.cubeData);
    World.setBlock(posX.x - 1, posY.y, posZ.z, reg.cubeID, reg.cubeData);
    World.setBlock(posX.x, posY.y, posZ.z + 1, reg.cubeID, reg.cubeData);
    World.setBlock(posX.x, posY.y, posZ.z - 1, reg.cubeID, reg.cubeData);
    World.setBlock(posX.x + 1, posY.y, posZ.z - 1, reg.cubeID, reg.cubeData);
    World.setBlock(posX.x - 1, posY.y, posZ.z - 1, reg.cubeID, reg.cubeData);
    World.setBlock(posX.x + 1, posY.y, posZ.z + 1, reg.cubeID, reg.cubeData);
    World.setBlock(posX.x - 1, posY.y, posZ.z + 1, reg.cubeID, reg.cubeData);
    World.setBlock(posX.x + 2, posY.y, posZ.z, reg.cubeID, reg.cubeData);
    World.setBlock(posX.x + 2, posY.y, posZ.z + 1, reg.cubeID, reg.cubeData);
    World.setBlock(posX.x + 2, posY.y, posZ.z + 2, reg.cubeID, reg.cubeData);
    World.setBlock(posX.x + 2, posY.y, posZ.z - 1, reg.cubeID, reg.cubeData);
    World.setBlock(posX.x + 2, posY.y, posZ.z - 2, reg.cubeID, reg.cubeData);
    World.setBlock(posX.x - 2, posY.y, posZ.z, reg.cubeID, reg.cubeData);
    World.setBlock(posX.x - 2, posY.y, posZ.z + 1, reg.cubeID, reg.cubeData);
    World.setBlock(posX.x - 2, posY.y, posZ.z + 2, reg.cubeID, reg.cubeData);
    World.setBlock(posX.x - 2, posY.y, posZ.z - 1, reg.cubeID, reg.cubeData);
    World.setBlock(posX.x - 2, posY.y, posZ.z - 2, reg.cubeID, reg.cubeData);
    World.setBlock(posX.x, posY.y, posZ.z + 2, reg.cubeID, reg.cubeData);
    World.setBlock(posX.x + 1, posY.y, posZ.z + 2, reg.cubeID, reg.cubeData);
    World.setBlock(posX.x - 1, posY.y, posZ.z + 2, reg.cubeID, reg.cubeData);
    World.setBlock(posX.x, posY.y, posZ.z - 2, reg.cubeID, reg.cubeData);
    World.setBlock(posX.x + 1, posY.y, posZ.z - 2, reg.cubeID, reg.cubeData);
    World.setBlock(posX.x - 1, posY.y, posZ.z - 2, reg.cubeID, reg.cubeData);
}, cube5x5Empty: function (reg) {
    var posX = reg.coordsX;
    var posY = reg.coordsY;
    var posZ = reg.coordsZ;
    var kokni = reg.plusY;
    var kokni1 = reg.Y;
    if (kokni == true) {
        posY.y += kokni1;
    }
    if (kokni == false) {
        posY.y -= kokni1;
    }
    var kokni2 = reg.plusX;
    var kokni3 = reg.X;
    if (kokni2 == true) {
        posX.x += kokni3;
    }
    if (kokni2 == false) {
        posX.x -= kokni3;
    }
    var kokni4 = reg.plusZ;
    var kokni5 = reg.Z;
    if (kokni4 == true) {
        posZ.z += kokni5;
    }
    if (kokni4 == false) {
        posZ.z -= kokni5;
    }
    World.setBlock(posX.x + 2, posY.y, posZ.z, reg.cubeID, reg.cubeData);
    World.setBlock(posX.x + 2, posY.y, posZ.z + 1, reg.cubeID, reg.cubeData);
    World.setBlock(posX.x + 2, posY.y, posZ.z + 2, reg.cubeID, reg.cubeData);
    World.setBlock(posX.x + 2, posY.y, posZ.z - 1, reg.cubeID, reg.cubeData);
    World.setBlock(posX.x + 2, posY.y, posZ.z - 2, reg.cubeID, reg.cubeData);
    World.setBlock(posX.x - 2, posY.y, posZ.z, reg.cubeID, reg.cubeData);
    World.setBlock(posX.x - 2, posY.y, posZ.z + 1, reg.cubeID, reg.cubeData);
    World.setBlock(posX.x - 2, posY.y, posZ.z + 2, reg.cubeID, reg.cubeData);
    World.setBlock(posX.x - 2, posY.y, posZ.z - 1, reg.cubeID, reg.cubeData);
    World.setBlock(posX.x - 2, posY.y, posZ.z - 2, reg.cubeID, reg.cubeData);
    World.setBlock(posX.x, posY.y, posZ.z + 2, reg.cubeID, reg.cubeData);
    World.setBlock(posX.x + 1, posY.y, posZ.z + 2, reg.cubeID, reg.cubeData);
    World.setBlock(posX.x - 1, posY.y, posZ.z + 2, reg.cubeID, reg.cubeData);
    World.setBlock(posX.x, posY.y, posZ.z - 2, reg.cubeID, reg.cubeData);
    World.setBlock(posX.x + 1, posY.y, posZ.z - 2, reg.cubeID, reg.cubeData);
    World.setBlock(posX.x - 1, posY.y, posZ.z - 2, reg.cubeID, reg.cubeData);
}};

