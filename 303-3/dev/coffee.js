var coffeeSys = {};
coffeeSys.tips = function () {
};
IDRegistry.genBlockID("coffeeworkshop$espresso");
Block.createBlock("coffeeworkshop$espresso", [{name: "\u6d53\u7f29\u5496\u5561", texture: [["texture1", 0], ["wood", 0], ["anvil_base", 0]], inCreative: false}]);
IDRegistry.genItemID("coffeeworkshop$espresso");
Item.createItem("coffeeworkshop$espresso", "\u6d53\u7f29\u5496\u5561", {name: "ns"}, {inTech: true, stack: 64});
function espressoModel(id) {
    var render = new ICRender.Model();
    var model = BlockRenderer.createModel();
    model.addBox(6 / 16, 1 / 16, 7 / 16, 7 / 16, 4 / 16, 9 / 16, [["texture", 0]]);
    model.addBox(7 / 16, 1 / 16, 9 / 16, 9 / 16, 4 / 16, 10 / 16, [["texture", 0]]);
    model.addBox(7 / 16, 1 / 16, 6 / 16, 9 / 16, 4 / 16, 7 / 16, [["texture", 0]]);
    model.addBox(9 / 16, 1 / 16, 7 / 16, 10 / 16, 4 / 16, 9 / 16, [["texture", 0]]);
    model.addBox(7 / 16, 0 / 16, 7 / 16, 9 / 16, 1 / 16, 9 / 16, [["texture", 0]]);
    model.addBox(7 / 16, 2 / 16, 7 / 16, 9 / 16, 3 / 16, 9 / 16, [["texture5", 0]]);
    render.addEntry(model);
    BlockRenderer.setStaticICRender(id, -1, render);
}
espressoModel(BlockID.coffeeworkshop$espresso);
IDRegistry.genBlockID("coffeeworkshop$plate");
Block.createBlock("coffeeworkshop$plate", [{name: "\u76d8\u5b50", texture: [["\u676f\u5b50", 0], ["wood", 0], ["anvil_base", 0]], inCreative: false}]);
IDRegistry.genItemID("coffeeworkshop$plate");
Item.createItem("coffeeworkshop$plate", "\u76d8\u5b50", {name: "pz"}, {inTech: true, stack: 64});
bundBlockToItem(ItemID.coffeeworkshop$plate, BlockID.coffeeworkshop$plate, false);
function plateModel(id) {
    var render = new ICRender.Model();
    var Model = BlockRenderer.createModel();
    Model.addBox(3 / 16, 1 / 16, 14 / 16, 13 / 16, 2 / 16, 15 / 16, [["texture", 0]]);
    Model.addBox(3 / 16, 1 / 16, 1 / 16, 13 / 16, 2 / 16, 2 / 16, [["texture", 0]]);
    Model.addBox(3 / 16, 0 / 16, 2 / 16, 13 / 16, 1 / 16, 3 / 16, [["texture", 0]]);
    Model.addBox(3 / 16, 0 / 16, 13 / 16, 13 / 16, 1 / 16, 14 / 16, [["texture", 0]]);
    Model.addBox(13 / 16, 1 / 16, 13 / 16, 14 / 16, 2 / 16, 14 / 16, [["texture", 0]]);
    Model.addBox(2 / 16, 1 / 16, 13 / 16, 3 / 16, 2 / 16, 14 / 16, [["texture", 0]]);
    Model.addBox(2 / 16, 1 / 16, 2 / 16, 3 / 16, 2 / 16, 3 / 16, [["texture", 0]]);
    Model.addBox(13 / 16, 1 / 16, 2 / 16, 14 / 16, 2 / 16, 3 / 16, [["texture", 0]]);
    Model.addBox(14 / 16, 1 / 16, 3 / 16, 15 / 16, 2 / 16, 13 / 16, [["texture", 0]]);
    Model.addBox(1 / 16, 1 / 16, 3 / 16, 2 / 16, 2 / 16, 13 / 16, [["texture", 0]]);
    Model.addBox(2 / 16, 0 / 16, 3 / 16, 14 / 16, 1 / 16, 13 / 16, [["texture", 0]]);
    render.addEntry(Model);
    BlockRenderer.setStaticICRender(id, -1, render);
}
plateModel(BlockID.coffeeworkshop$plate);
Block.setShape(BlockID.coffeeworkshop$plate, 0, 0, 0, 1, 1 / 16, 1);
IDRegistry.genItemID("coffeeworkshop$cup_glass");
Item.createItem("coffeeworkshop$cup_glass", "\u73bb\u7483\u676f", {name: "blb"}, {inTech: true, stack: 64});
IDRegistry.genItemID("coffeeworkshop$cup");
Item.createItem("coffeeworkshop$cup", "\u676f\u5b50", {name: "b"}, {inTech: true, stack: 64});
Recipes.addShaped({id: ItemID.coffeeworkshop$cup_glass, count: 1, data: 0}, ["x x", "x x", " x "], ["x", 20, 0]);
Recipes.addShaped({id: ItemID.coffeeworkshop$cup, count: 1, data: 0}, ["x x", "x x", " x "], ["x", 4, 0]);
setfood("kbqn", "\u5361\u5e03\u5947\u8bfa", 64, 3);
Item.setUseAnimation(ItemID.coffeeworkshop$kbqn, 2);
Recipes.addShaped({id: ItemID.coffeeworkshop$kbqn, count: 1, data: 0}, ["ab", "cd"], ["a", 325, 1, "b", ItemID.coffeeworkshop$espresso, 0, "c", ItemID.coffeeworkshop$cream_milk, 0, "d", ItemID.coffeeworkshop$cup, 0], function (api, field, result) {
    for (var i in field) {
        api.decreaseFieldSlot(i);
    }
    Player.addItemToInventory(325, 1);
});
setfood("nt", "\u62ff\u94c1\u5496\u5561", 64, 3);
Item.setUseAnimation(ItemID.coffeeworkshop$nt, 2);
Recipes.addShaped({id: ItemID.coffeeworkshop$nt, count: 1, data: 0}, ["ab", "d"], ["a", 325, 1, "b", ItemID.coffeeworkshop$espresso, 0, "d", ItemID.coffeeworkshop$cup, 0], function (api, field, result) {
    for (var i in field) {
        api.decreaseFieldSlot(i);
    }
    Player.addItemToInventory(325, 1);
});
setfood("mk", "\u6469\u5361\u5947\u8bfa", 64, 3);
Item.setUseAnimation(ItemID.coffeeworkshop$mk, 2);
Recipes.addShaped({id: ItemID.coffeeworkshop$mk, count: 1, data: 0}, ["ab", "cde"], ["a", 325, 1, "b", ItemID.coffeeworkshop$espresso, 0, "c", ItemID.coffeeworkshop$Cocoapowder, 0, "d", ItemID.coffeeworkshop$cup, 0, "e", ItemID.coffeeworkshop$Chocolatechip, 0], function (api, field, result) {
    for (var i in field) {
        api.decreaseFieldSlot(i);
    }
    Player.addItemToInventory(325, 1);
});
setfood("jtmqd", "\u7126\u7cd6\u739b\u5947\u6735", 64, 3);
Item.setUseAnimation(ItemID.coffeeworkshop$jtmqd, 2);
Recipes.addShaped({id: ItemID.coffeeworkshop$jtmqd, count: 1, data: 0}, ["ab", "cd"], ["a", 325, 1, "b", ItemID.coffeeworkshop$espresso, 0, "c", 353, 0, "d", ItemID.coffeeworkshop$cup, 0], function (api, field, result) {
    for (var i in field) {
        api.decreaseFieldSlot(i);
    }
    Player.addItemToInventory(325, 1);
});
setfood("ms", "\u7f8e\u5f0f\u5496\u5561", 64, 3);
Item.setUseAnimation(ItemID.coffeeworkshop$ms, 2);
Recipes.addShaped({id: ItemID.coffeeworkshop$ms, count: 1, data: 0}, ["ab", "d"], ["a", 325, 8, "b", ItemID.coffeeworkshop$espresso, 0, "d", ItemID.coffeeworkshop$cup, 0], function (api, field, result) {
    for (var i in field) {
        api.decreaseFieldSlot(i);
    }
    Player.addItemToInventory(325, 1);
});
setItem("mkh", "\u6469\u5361\u58f6");
setItem("mkhs", "\u6469\u5361\u58f6\u4e0a\u5ea7");
setItem("mkhx", "\u6469\u5361\u58f6\u4e0b\u5ea7");
setItem("mkhf", "\u6469\u5361\u58f6-\u8403\u53d6\u5b8c\u6210");
Recipes.addShaped({id: ItemID.coffeeworkshop$mkh, count: 1, data: 0}, ["ea", "bc"], ["a", ItemID.coffeeworkshop$mkhs, 0, "b", ItemID.coffeeworkshop$mkhx, 0, "c", 325, 8, "e", ItemID.coffeeworkshop$coffeepowder, 0], function (api, field, result) {
    for (var i in field) {
        api.decreaseFieldSlot(i);
    }
    Player.addItemToInventory(325, 1);
});
Recipes.addShaped({id: ItemID.coffeeworkshop$mkhx, count: 1, data: 0}, ["aaa", "bab", " b "], ["a", 1, 0, "b", 265, 0], function (api, field, result) {
    for (var i in field) {
        api.decreaseFieldSlot(i);
    }
});
Recipes.addShaped({id: ItemID.coffeeworkshop$mkhs, count: 1, data: 0}, ["aaa", "aaa", "b"], ["a", 265, 0, "b", 351, 0], function (api, field, result) {
    for (var i in field) {
        api.decreaseFieldSlot(i);
    }
});
addFurnace(ItemID.coffeeworkshop$mkh, ItemID.coffeeworkshop$mkhf, 0);
setfood("hkf", "\u9ed1\u5496\u5561", 64, 3);
Item.setUseAnimation(ItemID.coffeeworkshop$hkf, 2);
Callback.addCallback("FoodEaten", function (heal, satRatio) {
    if (isCoffee(Player.getCarriedItem().id)) {
        Player.addItemToInventory(ItemID.coffeeworkshop$cup, 1);
        CFMState.addState("relax", 5, 1000, 0);
    }
});
Recipes.addShaped({id: ItemID.coffeeworkshop$hkf, count: 1, data: 0}, ["c", "d"], ["c", ItemID.coffeeworkshop$mkhf, 0, "d", ItemID.coffeeworkshop$cup, 0], function (api, field, result) {
    for (var i in field) {
        api.decreaseFieldSlot(i);
    }
    Player.addItemToInventory(ItemID.coffeeworkshop$mkhs, 1);
    Player.addItemToInventory(ItemID.coffeeworkshop$mkhx, 1);
});
setItem("kfh", "\u571f\u8033\u5176\u5496\u5561\u58f6-\u7a7a");
setItem("kfhh", "\u571f\u8033\u5176\u5496\u5561\u58f6");
setItem("kfhf", "\u571f\u8033\u5176\u5496\u5561\u58f6-\u8403\u53d6\u5b8c\u6210");
addFurnace(ItemID.coffeeworkshop$kfhh, ItemID.coffeeworkshop$kfhf, 0);
Recipes.addShaped({id: ItemID.coffeeworkshop$kfh, count: 1, data: 0}, ["  a", "bcb", "bbb"], ["a", 1, 0, "b", 265, 0, "c", 351, 11], function (api, field, result) {
    for (var i in field) {
        api.decreaseFieldSlot(i);
    }
});
Recipes.addShaped({id: ItemID.coffeeworkshop$kfhh, count: 1, data: 0}, ["ab", "cc"], ["a", ItemID.coffeeworkshop$kfh, 0, "b", 325, 8, "c", ItemID.coffeeworkshop$coffeepowder, 0], function (api, field, result) {
    for (var i in field) {
        api.decreaseFieldSlot(i);
    }
    Player.addItemToInventory(325, 1);
});
Recipes.addShaped({id: ItemID.coffeeworkshop$plate, count: 1, data: 0}, ["a a", " ab"], ["a", 1, 0, "b", 351, 18], function (api, field, result) {
    for (var i in field) {
        api.decreaseFieldSlot(i);
    }
});
setfood("rekeke", "\u70ed\u53ef\u53ef", 64, 3);
Item.setUseAnimation(ItemID.coffeeworkshop$rekeke, 2);
Recipes.addShaped({id: ItemID.coffeeworkshop$rekeke, count: 1, data: 0}, ["ab", "c"], ["a", ItemID.coffeeworkshop$cup, 0, "b", 325, 1, "c", ItemID.coffeeworkshop$Cocoapowder, 0], function (api, field, result) {
    for (var i in field) {
        api.decreaseFieldSlot(i);
    }
    Player.addItemToInventory(325, 1);
});
setfood("xnkeke", "\u9999\u6d53\u53ef\u53ef", 64, 3);
Item.setUseAnimation(ItemID.coffeeworkshop$xnkeke, 2);
Recipes.addShaped({id: ItemID.coffeeworkshop$xnkeke, count: 1, data: 0}, ["a", "c"], ["a", ItemID.coffeeworkshop$rekeke, 0, "c", ItemID.coffeeworkshop$Chocolatechip, 0], function (api, field, result) {
    for (var i in field) {
        api.decreaseFieldSlot(i);
    }
});
setfood("mandarin", "\u9e33\u9e2f\u5496\u5561", 64, 3);
Item.setUseAnimation(ItemID.coffeeworkshop$mandarin, 2);
setfood("smt", "\u751c\u5976\u8336", 64, 3);
Item.setUseAnimation(ItemID.coffeeworkshop$mandarin, 2);
var isCoffee = function (a) {
    if (a === ItemID.coffeeworkshop$kbqn) {
        return true;
    } else {
        if (a === ItemID.coffeeworkshop$nt) {
            return true;
        } else {
            if (a === ItemID.coffeeworkshop$mk) {
                return true;
            } else {
                if (a === ItemID.coffeeworkshop$jtmqd) {
                    return true;
                } else {
                    if (a === ItemID.coffeeworkshop$ms) {
                        return true;
                    } else {
                        if (a === ItemID.coffeeworkshop$hkf) {
                            return true;
                        } else {
                            if (a === ItemID.coffeeworkshop$rekeke) {
                                return true;
                            } else {
                                if (a === ItemID.coffeeworkshop$xnkeke) {
                                    return true;
                                } else {
                                    if (a === ItemID.coffeeworkshop$mandarin) {
                                        return true;
                                    } else {
                                        if (a === ItemID.coffeeworkshop$smt) {
                                            return true;
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
};
TileEntity.registerPrototype(BlockID.coffeeworkshop$plate, {set: function (id, id1) {
    if (Player.getCarriedItem().id == id) {
        Game.prevent();
        World.setBlock(this.x, this.y, this.z, id1);
        Player.decreaseCarriedItem(1);
        return true;
    }
}, click: function (id, count, data, croods) {
    this.set(ItemID.coffeeworkshop$cup, BlockID.coffeeworkshop$cupPlate);
    this.set(ItemID.coffeeworkshop$kbqn, BlockID.coffeeworkshop$kbqnPlate);
    this.set(ItemID.coffeeworkshop$nt, BlockID.coffeeworkshop$ntPlate);
    this.set(ItemID.coffeeworkshop$mk, BlockID.coffeeworkshop$mkPlate);
    this.set(ItemID.coffeeworkshop$jtmqd, BlockID.coffeeworkshop$jtmqdPlate);
    this.set(ItemID.coffeeworkshop$ms, BlockID.coffeeworkshop$msPlate);
    this.set(ItemID.coffeeworkshop$hkf, BlockID.coffeeworkshop$hkfPlate);
    this.set(ItemID.coffeeworkshop$rekeke, BlockID.coffeeworkshop$rekekePlate);
    this.set(ItemID.coffeeworkshop$xnkeke, BlockID.coffeeworkshop$xnkekePlate);
    this.set(ItemID.coffeeworkshop$mandarin, BlockID.coffeeworkshop$mandarinPlate);
    this.set(ItemID.coffeeworkshop$smt, BlockID.coffeeworkshop$smtPlate);
}});

