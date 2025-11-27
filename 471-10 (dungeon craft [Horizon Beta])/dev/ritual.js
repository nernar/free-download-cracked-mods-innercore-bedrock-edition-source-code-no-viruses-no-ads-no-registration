IDRegistry.genBlockID("statua");
Block.createBlock("statua", [{name: "statua 1", texture: [["ctena", 1], ["ctena", 1], ["vvex", 1]], inCreative: true}]);
Translation.addTranslation("statua 1", {ru: "\u0441\u0442\u0430\u0442\u0443\u044f \u043d\u0435\u0436\u0438\u0442\u0438"});
IDRegistry.genBlockID("rityal");
Block.createBlock("rityal", [{name: "magis??", texture: [["nis", 0], ["vverx1", 0], ["ctoronS", 0], ["storonO", 0], ["storonM", 0], ["ctoronl", 0]], inCreative: true, opaque: true, lightopacity: 1, renderlayer: 2}]);
var nak = 19999;
TileEntity.registerPrototype(BlockID.rityal, {defaultValues: {someValue: 0}, tick: function () {
    if (mana <= nak) {
        mana += 1;
    }
}, click: function (id, count, data, coords) {
}});
Translation.addTranslation("magis??", {ru: "\u043c\u0430\u0433\u0438\u0447\u0438\u0441\u043a\u0438\u0439 \u043d\u0430\u043a\u043e\u043f\u0438\u0442\u0435\u043b\u044c"});
var render = new ICRender.Model();
BlockRenderer.setStaticICRender(BlockID.statua, -1, render);
var model = BlockRenderer.createModel();
render.addEntry(model);
model.addBox(6 / 16, 0, 6 / 16, 10 / 16, 0.29, 10 / 16, BlockID.statua, 0);
model.addBox(3 / 16, 0.3, 3 / 16, 13 / 16, 0.8, 13 / 16, BlockID.statua, 0);
IDRegistry.genBlockID("ritualGL");
Block.createBlock("ritualGL", [{name: "ritualGL", texture: [["testN", 0], ["testV", 0], ["testC", 0]], inCreative: true}]);
Translation.addTranslation("ritualGL", {ru: "\u043f\u044c\u0435\u0434\u0435\u0441\u0442\u0430\u043b \u0434\u043b\u0441 \u0441\u0442\u0430\u0442\u0443\u0439"});
var render1 = new ICRender.Model();
BlockRenderer.setStaticICRender(BlockID.ritualGL, -1, render1);
var model1 = BlockRenderer.createModel();
render1.addEntry(model1);
model1.addBox(2 / 16, 0, 2 / 16, 14 / 16, 0.9, 14 / 16, BlockID.ritualGL, 0);
model1.addBox(3 / 16, 0.91, 3 / 16, 13 / 16, 1, 13 / 16, BlockID.ritualGL, 0);
model1.addBox(0 / 16, 0, 2 / 16, 16 / 16, 0.5, 14 / 16, BlockID.ritualGL, 0);
model1.addBox(16 / 16, 0, 2 / 16, 0 / 16, 0.5, 14 / 16, BlockID.ritualGL, 0);
model1.addBox(0 / 16, 0, 16 / 16, 16 / 16, 0.5, 0 / 16, BlockID.ritualGL, 0);
model1.addBox(0 / 16, 0, 0 / 16, 16 / 16, 0.5, 16 / 16, BlockID.ritualGL, 0);
TileEntity.registerPrototype(BlockID.statua, {defaultValues: {progress: 0, active: false, active2: false, manaC: 0, manaC2: 0, charge: false, rings: 0, item: 0, testFunction: 0}, init: function () {
}, animation: function () {
}, click: function () {
}, destroy: function () {
    this.data.active = false;
    this.data.item = 0;
}, selfDestroy: function () {
    this.destroy();
}, RitualCraft: function (material, result, count, manaCount, manaMax) {
    if (World.getBlock(this.x - 2, this.y - 1, this.z).id === BlockID.rityal1) {
        if (World.getBlock(this.x, this.y - 1, this.z).id === BlockID.ritualGL) {
            if (World.getBlock(this.x + 2, this.y - 1, this.z).id === BlockID.rityal1) {
                if (World.getBlock(this.x, this.y - 1, this.z - 2).id === BlockID.rityal1) {
                    if (World.getBlock(this.x, this.y - 1, this.z + 2).id === BlockID.rityal1) {
                        if (World.getTileEntity(this.x - 2, this.y - 1, this.z).data.item === material) {
                            if (World.getTileEntity(this.x + 2, this.y - 1, this.z).data.item === material) {
                                if (World.getTileEntity(this.x, this.y - 1, this.z - 2).data.item === material) {
                                    if (World.getTileEntity(this.x, this.y - 1, this.z + 2).data.item === material) {
                                        if (mana >= manaMax) {
                                            this.data.active = true;
                                            this.data.item = result;
                                            this.data.manaC = manaCount;
                                            sound.play();
                                            Entity.spawn(this.x, this.y + 1, this.z, 93);
                                            World.drop(this.x, this.y + 1, this.z, this.data.item, count);
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
}, RitualmanaPlus: function (material, manaCount, manaMax) {
    if (World.getBlock(this.x - 2, this.y - 1, this.z).id === BlockID.rityal1) {
        if (World.getBlock(this.x, this.y - 1, this.z).id === BlockID.ritualGL) {
            if (World.getBlock(this.x + 2, this.y - 1, this.z).id === BlockID.rityal1) {
                if (World.getBlock(this.x, this.y - 1, this.z - 2).id === BlockID.rityal1) {
                    if (World.getBlock(this.x, this.y - 1, this.z + 2).id === BlockID.rityal1) {
                        if (World.getTileEntity(this.x - 2, this.y - 1, this.z).data.item === material) {
                            if (World.getTileEntity(this.x + 2, this.y - 1, this.z).data.item === material) {
                                if (World.getTileEntity(this.x, this.y - 1, this.z - 2).data.item === material) {
                                    if (World.getTileEntity(this.x, this.y - 1, this.z + 2).data.item === material) {
                                        if (mana <= manaMax) {
                                            this.data.manaC2 = manaCount;
                                            this.data.active2 = true;
                                            sound.play();
                                            Entity.spawn(this.x, this.y + 1, this.z, 93);
                                            mana += manaCount;
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
}, ProRitualCraft: function (r) {
    if (World.getBlock(this.x - 2, this.y - 1, this.z).id === BlockID.rityal1) {
        if (World.getBlock(this.x, this.y - 1, this.z).id === BlockID.ritualGL) {
            if (World.getBlock(this.x + 2, this.y - 1, this.z).id === BlockID.rityal1) {
                if (World.getBlock(this.x, this.y - 1, this.z - 2).id === BlockID.rityal1) {
                    if (World.getBlock(this.x, this.y - 1, this.z + 2).id === BlockID.rityal1) {
                        if (World.getTileEntity(this.x - 2, this.y - 1, this.z).data.item === r.ItemXm) {
                            if (World.getTileEntity(this.x + 2, this.y - 1, this.z).data.item === r.ItemXp) {
                                if (World.getTileEntity(this.x, this.y - 1, this.z - 2).data.item === r.ItemZm) {
                                    if (World.getTileEntity(this.x, this.y - 1, this.z + 2).data.item === r.ItemZp) {
                                        if (mana >= r.manaMax) {
                                            this.data.active = true;
                                            this.data.item = r.result;
                                            this.data.manaC = r.manaCount;
                                            sound.play();
                                            Entity.spawn(this.x, this.y + 1, this.z, 93);
                                            World.drop(this.x, this.y + 1, this.z, this.data.item, r.count);
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
}, restart: function () {
    mana -= this.data.manaC;
    if (World.getBlock(this.x - 2, this.y - 1, this.z).id === BlockID.rityal1) {
        World.getTileEntity(this.x - 2, this.y - 1, this.z).animationItem.destroy();
        World.getTileEntity(this.x - 2, this.y - 1, this.z).data.item = 0;
    }
    if (World.getBlock(this.x + 2, this.y - 1, this.z).id === BlockID.rityal1) {
        World.getTileEntity(this.x + 2, this.y - 1, this.z).animationItem.destroy();
        World.getTileEntity(this.x + 2, this.y - 1, this.z).data.item = 0;
    }
    if (World.getBlock(this.x, this.y - 1, this.z - 2).id === BlockID.rityal1) {
        World.getTileEntity(this.x, this.y - 1, this.z - 2).animationItem.destroy();
        World.getTileEntity(this.x, this.y - 1, this.z - 2).data.item = 0;
    }
    if (World.getBlock(this.x, this.y - 1, this.z + 2).id === BlockID.rityal1) {
        World.getTileEntity(this.x, this.y - 1, this.z + 2).animationItem.destroy();
        World.getTileEntity(this.x, this.y - 1, this.z + 2).data.item = 0;
    }
}, restart2: function () {
    if (World.getBlock(this.x - 2, this.y - 1, this.z).id === BlockID.rityal1) {
        World.getTileEntity(this.x - 2, this.y - 1, this.z).animationItem.destroy();
        World.getTileEntity(this.x - 2, this.y - 1, this.z).data.item = 0;
        mana += this.data.manaC2;
    }
    if (World.getBlock(this.x + 2, this.y - 1, this.z).id === BlockID.rityal1) {
        World.getTileEntity(this.x + 2, this.y - 1, this.z).animationItem.destroy();
        World.getTileEntity(this.x + 2, this.y - 1, this.z).data.item = 0;
    }
    if (World.getBlock(this.x, this.y - 1, this.z - 2).id === BlockID.rityal1) {
        World.getTileEntity(this.x, this.y - 1, this.z - 2).animationItem.destroy();
        World.getTileEntity(this.x, this.y - 1, this.z - 2).data.item = 0;
    }
    if (World.getBlock(this.x, this.y - 1, this.z + 2).id === BlockID.rityal1) {
        World.getTileEntity(this.x, this.y - 1, this.z + 2).animationItem.destroy();
        World.getTileEntity(this.x, this.y - 1, this.z + 2).data.item = 0;
    }
}, tick: function () {
    this.RitualmanaPlus(ItemID.Gem2, 4000, 12000);
    this.RitualmanaPlus(ItemID.Gem, 1000, 18000);
    this.RitualCraft(ItemID.clitok, ItemID.Gem, 1, 1000, 2000);
    this.ProRitualCraft({ItemXm: ItemID.Gem, ItemXp: ItemID.gotovka, ItemZm: ItemID.clitok, ItemZp: ItemID.clitok, manaMax: 15000, result: ItemID.poic1, count: 1, manaCount: 5000});
    this.ProRitualCraft({ItemXm: ItemID.gotovka, ItemXp: ItemID.Gem, ItemZm: ItemID.clitok, ItemZp: ItemID.clitok, manaMax: 15000, result: ItemID.poic1, count: 1, manaCount: 5000});
    this.ProRitualCraft({ItemXm: ItemID.clitok, ItemXp: ItemID.clitok, ItemZm: ItemID.gotovka, ItemZp: ItemID.Gem, manaMax: 15000, result: ItemID.poic1, count: 1, manaCount: 5000});
    this.ProRitualCraft({ItemXm: ItemID.clitok, ItemXp: ItemID.clitok, ItemZm: ItemID.Gem, ItemZp: ItemID.gotovka, manaMax: 15000, result: ItemID.poic1, count: 1, manaCount: 5000});
    this.ProRitualCraft({ItemXm: ItemID.crystalearth, ItemXp: ItemID.crystalearth, ItemZm: ItemID.crystalLightning, ItemZp: ItemID.crystalLightning, manaMax: 10000, result: ItemID.clitok, count: 1, manaCount: 10000});
    this.ProRitualCraft({ItemXm: ItemID.crystalLightning, ItemXp: ItemID.crystalLightning, ItemZm: ItemID.crystalearth, ItemZp: ItemID.crystalearth, manaMax: 10000, result: ItemID.clitok, count: 1, manaCount: 10000});
    this.ProRitualCraft({ItemXm: ItemID.crystalfire, ItemXp: ItemID.crystalfire, ItemZm: ItemID.crystalearth, ItemZp: ItemID.crystalearth, manaMax: 20000, result: ItemID.clitok1, count: 1, manaCount: 20000});
    this.ProRitualCraft({ItemXm: ItemID.crystalearth, ItemXp: ItemID.crystalearth, ItemZm: ItemID.crystalfire, ItemZp: ItemID.crystalfire, manaMax: 20000, result: ItemID.clitok1, count: 1, manaCount: 20000});
    if (this.data.charge == true) {
        this.getSource();
        this.data.charge = false;
    }
    if (this.data.active === true) {
        this.restart();
        this.data.active = false;
        this.data.manaC = 0;
    }
    if (this.data.active2 === true) {
        this.restart2();
        this.data.active2 = false;
        this.data.manaC2 = 0;
    }
}});

