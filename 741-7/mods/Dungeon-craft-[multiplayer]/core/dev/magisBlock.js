IDRegistry.genBlockID("MagicStorage");
Block.createBlock("MagicStorage", [{name: "Magic storage", texture: [["nis", 0], ["vverx1", 0], ["ctoronS", 0], ["storonO", 0], ["storonM", 0], ["ctoronl", 0]], inCreative: true, opaque: true, lightopacity: 1, renderlayer: 2}]);
Translation.addTranslation("Magic storage", {ru: "\u043c\u0430\u0433\u0438\u0447\u0438\u0441\u043a\u0438\u0439 \u043d\u0430\u043a\u043e\u043f\u0438\u0442\u0435\u043b\u044c"});
mod_tip(BlockID.MagicStorage);
TileEntity.registerPrototype(BlockID.MagicStorage, {defaultValues: {player: null}, client: {events: {particles: function (packet) {
    Particles.addParticle(7, packet.x + Math.random(), packet.y + 1 + Math.random(), packet.z + Math.random(), 0, 0, 0, 0);
}}}, tick: function () {
    if (this.data.player) {
        if (this.blockSource.getBlock(this.x - 1, this.y, this.z).id != BlockID.MagicStorage) {
            if (this.blockSource.getBlock(this.x - 2, this.y, this.z).id != BlockID.MagicStorage) {
                if (this.blockSource.getBlock(this.x + 1, this.y, this.z).id != BlockID.MagicStorage) {
                    if (this.blockSource.getBlock(this.x + 2, this.y, this.z).id != BlockID.MagicStorage) {
                        if (this.blockSource.getBlock(this.x - 1, this.y, this.z + 1).id != BlockID.MagicStorage) {
                            if (this.blockSource.getBlock(this.x - 2, this.y, this.z + 1).id != BlockID.MagicStorage) {
                                if (this.blockSource.getBlock(this.x + 2, this.y, this.z + 1).id != BlockID.MagicStorage) {
                                    if (this.blockSource.getBlock(this.x + 1, this.y, this.z + 1).id != BlockID.MagicStorage) {
                                        if (this.blockSource.getBlock(this.x, this.y, this.z + 1).id != BlockID.MagicStorage) {
                                            if (this.blockSource.getBlock(this.x - 1, this.y, this.z + 2).id != BlockID.MagicStorage) {
                                                if (this.blockSource.getBlock(this.x - 2, this.y, this.z + 2).id != BlockID.MagicStorage) {
                                                    if (this.blockSource.getBlock(this.x + 2, this.y, this.z + 2).id != BlockID.MagicStorage) {
                                                        if (this.blockSource.getBlock(this.x + 1, this.y, this.z + 2).id != BlockID.MagicStorage) {
                                                            if (this.blockSource.getBlock(this.x, this.y, this.z + 2).id != BlockID.MagicStorage) {
                                                                if (this.blockSource.getBlock(this.x - 1, this.y, this.z - 1).id != BlockID.MagicStorage) {
                                                                    if (this.blockSource.getBlock(this.x - 2, this.y, this.z - 1).id != BlockID.MagicStorage) {
                                                                        if (this.blockSource.getBlock(this.x + 2, this.y, this.z - 1).id != BlockID.MagicStorage) {
                                                                            if (this.blockSource.getBlock(this.x + 1, this.y, this.z - 1).id != BlockID.MagicStorage) {
                                                                                if (this.blockSource.getBlock(this.x, this.y, this.z - 1).id != BlockID.MagicStorage) {
                                                                                    if (this.blockSource.getBlock(this.x - 1, this.y, this.z - 2).id != BlockID.MagicStorage) {
                                                                                        if (this.blockSource.getBlock(this.x - 2, this.y, this.z - 2).id != BlockID.MagicStorage) {
                                                                                            if (this.blockSource.getBlock(this.x + 2, this.y, this.z - 2).id != BlockID.MagicStorage) {
                                                                                                if (this.blockSource.getBlock(this.x + 1, this.y, this.z - 2).id != BlockID.MagicStorage) {
                                                                                                    if (this.blockSource.getBlock(this.x, this.y, this.z - 2).id != BlockID.MagicStorage) {
                                                                                                        let mana = ManaCore.get(this.data.player);
                                                                                                        let per1 = mana.countMax;
                                                                                                        per1 = mana.countMax / 100 * 20;
                                                                                                        per1 = mana.countMax - per1;
                                                                                                        if (mana.count + 1 <= per1) {
                                                                                                            mana.count++;
                                                                                                            Mp.spawnParticle(7, this.x + Math.random(), this.y + 1 + Math.random(), this.z + Math.random(), 0, 0, 0);
                                                                                                            ManaCore.set(this.data.player, mana);
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
                        }
                    }
                }
            }
        }
    }
}, click: function (id, count, data, coords, player) {
    this.data.player = player;
    Mp.message(player, "\u0431\u043b\u043e\u043a \u043f\u0440\u0438\u0432\u044f\u0437\u0430\u043d \u043a \u0432\u0430\u043c");
}});

