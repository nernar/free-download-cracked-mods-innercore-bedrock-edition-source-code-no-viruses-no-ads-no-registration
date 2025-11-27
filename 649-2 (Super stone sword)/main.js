var 创建 = function (c, l) {
    IDRegistry.genItemID("SuperSword" + c);
    Item.createItem("SuperSword" + c, "Super stone sword\nlevel: " + l, {name: "Sword", meta: 1}, {stack: 1});
    Translation.addTranslation("Super stone sword\nlevel: " + l, {zh: "\u77f3\u5251\u662f\u68c0\u9a8c\u771f\u7406\u7684\u552f\u4e00\u6807\u51c6\n\u7b49\u7ea7\uff1a" + l});
    Item.setToolRender(ItemID["SuperSword" + c], true);
    Item.setGlint(ItemID["SuperSword" + c], true);
};
创建(1, 1);
创建(2, 2);
创建(3, 3);
创建(4, 4);
创建(5, "MAX");
Recipes.addShaped({id: ItemID.SuperSword1, count: 1, data: 0}, ["aaa", "aaa", "aaa"], ["a", 272, 0]);
Recipes.addShaped({id: ItemID.SuperSword2, count: 1, data: 0}, ["aaa", "aaa", "aaa"], ["a", ItemID.SuperSword1, 0]);
Recipes.addShaped({id: ItemID.SuperSword3, count: 1, data: 0}, ["aaa", "aaa", "aaa"], ["a", ItemID.SuperSword2, 0]);
Recipes.addShaped({id: ItemID.SuperSword4, count: 1, data: 0}, ["aaa", "aba", "aaa"], ["a", 264, 0, "b", ItemID.SuperSword3, 0]);
Recipes.addShaped({id: ItemID.SuperSword5, count: 1, data: 0}, ["aaa", "aba", "aaa"], ["a", 57, 0, "b", ItemID.SuperSword4, 0]);
随机 = {};
随机[ItemID.SuperSword1] = 1;
随机[ItemID.SuperSword2] = 0.1;
随机[ItemID.SuperSword3] = 0.01;
随机[ItemID.SuperSword4] = -1;
随机[ItemID.SuperSword5] = -2;
设置 = {"\u79d2\u6740": true, "\u963b\u6b62\u81ea\u5b9a\u4e49\u751f\u6210": false, "\u53cd\u4f24": true, "\u4e0d\u5b8c\u5168\u514d\u4f24": true, "\u5b8c\u5168\u514d\u4f24": true, "\u98de\u884c": true, "\u9690\u85cf\u7269\u54c1": [false, {}]};
备份 = [Entity.spawnCustomAtCoords, Entity.spawnCustom, Entity.healEntity, Entity.damageEntity, Entity.remove, Entity.setHealth, Entity.setMaxHealth, Player.health, Player.setHealth];
负面 = [2, 4, 7, 9, 15, 17, 18, 19, 20, 25, 28];
var getmode = ModAPI.requireGlobal("Level.getGameMode");
var GuiName;
Callback.addCallback("NativeGuiChanged", function (screenName) {
    GuiName = screenName;
});
var 路径;
Callback.addCallback("LevelSelected", function (nameWorld, dirWorld) {
    if (Game.getEngineVersion() == "2.0") {
        路径 = __packdir__ + "worlds/" + dirWorld + "/super_stone_sword.json";
    } else {
        路径 = FileTools.root + "games/com.mojang/innercoreworlds/" + dirWorld + "/super_stone_sword.json";
    }
    if (FileTools.isExists(路径)) {
        设置 = FileTools.ReadJSON(路径);
    } else {
        设置 = {"\u79d2\u6740": true, "\u963b\u6b62\u81ea\u5b9a\u4e49\u751f\u6210": false, "\u53cd\u4f24": true, "\u4e0d\u5b8c\u5168\u514d\u4f24": true, "\u5b8c\u5168\u514d\u4f24": true, "\u98de\u884c": true, "\u9690\u85cf\u7269\u54c1": [false, {}]};
    }
});
Callback.addCallback("WriteSaves", function () {
    FileTools.WriteJSON(路径, 设置);
});
setUI_ = {};
var setUI = function (name, item, x, y, texture, func) {
    this.ui = {window: new UI.Window({location: {x: x, y: y, width: 40, height: 40}, drawing: [{type: "bitmap", bitmap: "button0", x: 0, y: 0, width: 1000, height: 1000}], elements: {"main": {type: "slot", x: 50, y: 50, isTransparentBackground: true, visual: true, size: 900, bitmap: texture, source: {id: item.id || 0, count: 1, data: item.data || 0}, clicker: {onClick: function () {
        func();
    }, onLongClick: function () {
        alert(Translation.translate(name));
    }}}}}), open: function () {
        this.window.setAsGameOverlay(true);
        this.window.open();
    }, close: function () {
        this.window.close();
    }};
};
var BITMAP = function (a, b) {
    setUI_[a].ui.window.getContent().drawing[0].bitmap = b ? "button1" : "button0";
};
ALLCLOSE = function () {
    try {
        for (i in setUI_) {
            setUI_[i].ui.close();
        }
    }
    catch (e) {
    }
};
setUI_.秒杀 = new setUI("\u79d2\u6740\u6a21\u5f0f", {}, 550, 0, "skill_1", function () {
    if (设置.秒杀) {
        BITMAP("\u79d2\u6740", true);
        设置.秒杀 = false;
        alert(Translation.translate("\u79d2\u6740\u6a21\u5f0f \u5df2\u5173\u95ed"));
    } else {
        BITMAP("\u79d2\u6740", false);
        设置.秒杀 = true;
        alert(Translation.translate("\u79d2\u6740\u6a21\u5f0f \u5df2\u5f00\u542f"));
    }
});
setUI_.阻止自定义生成 = new setUI("\u963b\u6b62\u81ea\u5b9a\u4e49\u5b9e\u4f53\u751f\u6210", {}, 600, 0, "skill_2", function () {
    if (设置.阻止自定义生成) {
        BITMAP("\u963b\u6b62\u81ea\u5b9a\u4e49\u751f\u6210", true);
        Entity.spawnCustomAtCoords = 备份[0];
        设置.阻止自定义生成 = false;
        alert(Translation.translate("\u963b\u6b62\u81ea\u5b9a\u4e49\u5b9e\u4f53\u751f\u6210 \u5df2\u5173\u95ed"));
    } else {
        BITMAP("\u963b\u6b62\u81ea\u5b9a\u4e49\u751f\u6210", false);
        设置.阻止自定义生成 = true;
        alert(Translation.translate("\u963b\u6b62\u81ea\u5b9a\u4e49\u5b9e\u4f53\u751f\u6210 \u5df2\u5f00\u542f"));
    }
});
setUI_.反伤 = new setUI("\u53cd\u4f24", {}, 650, 0, "skill_3", function () {
    if (设置.反伤) {
        BITMAP("\u53cd\u4f24", true);
        设置.反伤 = false;
        alert(Translation.translate("\u53cd\u4f24 \u5df2\u5173\u95ed"));
    } else {
        BITMAP("\u53cd\u4f24", false);
        设置.反伤 = true;
        alert(Translation.translate("\u53cd\u4f24 \u5df2\u5f00\u542f"));
    }
});
setUI_.不完全免伤 = new setUI("\u4e0d\u5b8c\u5168\u514d\u4f24", {}, 700, 0, "skill_4", function () {
    if (设置.不完全免伤) {
        BITMAP("\u4e0d\u5b8c\u5168\u514d\u4f24", true);
        设置.不完全免伤 = false;
        alert(Translation.translate("\u4e0d\u5b8c\u5168\u514d\u4f24 \u5df2\u5173\u95ed"));
    } else {
        BITMAP("\u4e0d\u5b8c\u5168\u514d\u4f24", false);
        设置.不完全免伤 = true;
        alert(Translation.translate("\u4e0d\u5b8c\u5168\u514d\u4f24 \u5df2\u5f00\u542f"));
    }
});
setUI_.完全免伤 = new setUI("\u5b8c\u5168\u514d\u4f24", {}, 750, 0, "skill_5", function () {
    if (设置.完全免伤) {
        BITMAP("\u5b8c\u5168\u514d\u4f24", true);
        设置.完全免伤 = false;
        alert(Translation.translate("\u5b8c\u5168\u514d\u4f24 \u5df2\u5173\u95ed"));
        Entity.damageEntity = 备份[1];
        Entity.remove = 备份[2];
        Entity.setHealth = 备份[3];
        Entity.setMaxHealth = 备份[4];
    } else {
        BITMAP("\u5b8c\u5168\u514d\u4f24", false);
        设置.完全免伤 = true;
        alert(Translation.translate("\u5b8c\u5168\u514d\u4f24 \u5df2\u5f00\u542f"));
    }
});
setUI_.隐藏物品 = new setUI("\u9690\u85cf\u7269\u54c1", {}, 800, 0, "skill_6", function () {
    if (设置.隐藏物品[0]) {
        if (Player.getCarriedItem().id == 0) {
            BITMAP("\u9690\u85cf\u7269\u54c1", true);
            设置.隐藏物品[0] = false;
            Player.setCarriedItem(设置.隐藏物品[1].id, 设置.隐藏物品[1].count, 设置.隐藏物品[1].data, 设置.隐藏物品[1].extra);
            alert(Translation.translate("\u7269\u54c1\u5df2\u663e\u73b0"));
        } else {
            alert(Translation.translate("\u7269\u54c1\u663e\u73b0\u5931\u8d25\uff0c\u8bf7\u786e\u8ba4\u60a8\u5904\u4e8e\u7a7a\u624b\u72b6\u6001"));
        }
    } else {
        BITMAP("\u9690\u85cf\u7269\u54c1", false);
        设置.隐藏物品[0] = true;
        设置.隐藏物品[1] = Player.getCarriedItem();
        Player.setCarriedItem(0, 0, 0);
        alert(Translation.translate("\u7269\u54c1\u5df2\u9690\u85cf"));
    }
});
Callback.addCallback("LevelLoaded", function () {
    setUI_.秒杀.ui.window.getContent().drawing[0].bitmap = 设置.秒杀 ? "button0" : "button1";
    setUI_.阻止自定义生成.ui.window.getContent().drawing[0].bitmap = 设置.阻止自定义生成 ? "button0" : "button1";
    setUI_.反伤.ui.window.getContent().drawing[0].bitmap = 设置.反伤 ? "button0" : "button1";
    setUI_.不完全免伤.ui.window.getContent().drawing[0].bitmap = 设置.不完全免伤 ? "button0" : "button1";
    setUI_.完全免伤.ui.window.getContent().drawing[0].bitmap = 设置.完全免伤 ? "button0" : "button1";
    setUI_.隐藏物品.ui.window.getContent().drawing[0].bitmap = 设置.隐藏物品[0] ? "button0" : "button1";
});
Callback.addCallback("tick", function () {
    try {
        if (GuiName == "in_game_play_screen" || GuiName == "hud_screen") {
            this.c = 随机[Player.getCarriedItem().id];
            if (this.c < 2 || 设置.隐藏物品[0]) {
                setUI_.秒杀.ui.open();
            } else {
                setUI_.秒杀.ui.close();
            }
            if (this.c < 1 || 设置.隐藏物品[0]) {
                setUI_.阻止自定义生成.ui.open();
            } else {
                setUI_.阻止自定义生成.ui.close();
            }
            if (this.c < 0.1 || 设置.隐藏物品[0]) {
                setUI_.反伤.ui.open();
            } else {
                setUI_.反伤.ui.close();
            }
            if (this.c < 0.1 || 设置.隐藏物品[0]) {
                setUI_.不完全免伤.ui.open();
            } else {
                setUI_.不完全免伤.ui.close();
            }
            if (this.c < 0 || 设置.隐藏物品[0]) {
                setUI_.完全免伤.ui.open();
            } else {
                setUI_.完全免伤.ui.close();
            }
            if (this.c < -1 || 设置.隐藏物品[0]) {
                setUI_.隐藏物品.ui.open();
            } else {
                setUI_.隐藏物品.ui.close();
            }
        } else {
            ALLCLOSE();
        }
    }
    catch (e) {
    }
});
Callback.addCallback("LevelLeft", ALLCLOSE);
Callback.addCallback("PlayerAttack", function (pr, v) {
    if (随机[Player.getCarriedItem().id] < 2 || 设置.隐藏物品[0]) {
        if (设置.秒杀) {
            Game.message("\xa79" + Translation.translate("\u62d2\u7edd\u82b1\u91cc\u80e1\u54e8"));
            if (Math.random() <= 随机[Player.getCarriedItem().id]) {
                Player.setCarriedItem(0, 0, 0);
            }
            Entity.damageEntity(v, Entity.getHealth(v) > 10000 ? Entity.getHealth(v) + 1 : 10000, Player.get(), {attacker: Player.get()});
            new java.lang.Thread(function () {
                java.lang.Thread.sleep(2);
                if (Entity.isExist(v)) {
                    Entity.setMaxHealth(v, 0);
                }
                if (Entity.isExist(v)) {
                    java.lang.Thread.sleep(2);
                    Entity.remove(v);
                }
            }).start();
        } else {
            if (Math.random() <= 随机[Player.getCarriedItem().id] / 10) {
                Player.setCarriedItem(0, 0, 0);
            }
            Entity.damageEntity(v, Math.ceil(Entity.getMaxHealth(v) / 5) > 6 ? Math.ceil(Entity.getMaxHealth(v) / 5) : 6, Player.get(), {attacker: Player.get()});
        }
    }
});
Callback.addCallback("tick", function () {
    if (设置.阻止自定义生成) {
        Entity.spawnCustomAtCoords = 备份[0];
        Entity.spawnCustom = 备份[1];
        if (随机[Player.getCarriedItem().id] < 1 || 设置.隐藏物品[0]) {
            Entity.spawnCustomAtCoords = function (n, c, e) {
                Game.message("\xa79" + Translation.translate("\u5df2\u963b\u6b62\u81ea\u5b9a\u4e49\u5b9e\u4f53\u751f\u6210"));
                return Entity.spawn(c.x, -30, c.z, 81);
            };
            Entity.spawnCustom = function (n, x, y, z, e) {
                Game.message("\xa79" + Translation.translate("\u5df2\u963b\u6b62\u81ea\u5b9a\u4e49\u5b9e\u4f53\u751f\u6210"));
                return Entity.spawn(x, -30, z, 81);
            };
        }
    }
    if (设置.完全免伤) {
        Entity.healthEntity = 备份[2];
        Entity.damageEntity = 备份[3];
        Entity.remove = 备份[4];
        Entity.setHealth = 备份[5];
        Entity.setMaxHealth = 备份[6];
        Player.health = 备份[7];
        Player.setHealth = 备份[8];
        if (随机[Player.getCarriedItem().id] < 0 || 设置.隐藏物品[0]) {
            if (World.getThreadTime() % 5 == 0) {
                Entity.addEffect(Player.get(), 12, 0, 20, true);
            }
            Entity.setMaxHealth(Player.get(), 20);
            Entity.setHealth(Player.get(), 20);
            Player.setHunger(20);
            负面.map(function (i) {
                Entity.clearEffect(Player.get(), i);
            });
            Entity.healthEntity = function (a, b) {
                if (a == Player.get() && b < 0) {
                    return;
                }
                备份[2](a, b);
            };
            Entity.damageEntity = function (a, b) {
                if (a == Player.get()) {
                    return;
                }
                备份[3](a, b);
            };
            Entity.remove = function (a) {
                if (a == Player.get()) {
                    return;
                }
                备份[4](a);
            };
            Entity.setHealth = function (a, b) {
                if (a == Player.get() && b < 20) {
                    return;
                }
                备份[5](a, b);
            };
            Entity.setMaxHealth = function (a, b) {
                if (a == Player.get() && b < 20) {
                    return;
                }
                备份[6](a, b);
            };
            Player.setHealth = function (a) {
                if (a < 20) {
                    return;
                }
                备份[7](a);
            };
            Player.health = function () {
                return {set: Player.setHealth, get: Player.getHealth};
            };
        }
    }
    if (随机[Player.getCarriedItem().id] < 0 || 设置.隐藏物品[0]) {
        if (!设置.飞行) {
            设置.飞行 = true;
        }
        Player.setFlyingEnabled(true);
    } else {
        if (设置.飞行 && getmode() !== 1) {
            设置.飞行 = false;
            Player.setFlyingEnabled(false);
            Player.setFlying(false);
        }
    }
});
Callback.addCallback("EntityHurt", function (a, ent, d) {
    if ((随机[Player.getCarriedItem().id] < 0.1 || 设置.隐藏物品[0]) && ent == Player.get()) {
        if (设置.反伤) {
            Entity.damageEntity(a, d, Player.get(), {attacker: Player.get()});
        }
        if (设置.不完全免伤 || 设置.完全免伤) {
            Game.prevent();
        }
    }
});
Callback.addCallback("EntityRemoved", function (ent) {
    if (设置.完全免伤) {
        if ((随机[Player.getCarriedItem().id] < 0 || 设置.隐藏物品[0]) && ent == Player.get()) {
            Entity.setMaxHealth(Player.get(), 20);
            Entity.setHealth(Player.get(), 20);
            Game.prevent();
        }
    }
});
Callback.addCallback("EntityDeath", function (ent) {
    if (设置.完全免伤) {
        if ((随机[Player.getCarriedItem().id] < 0 || 设置.隐藏物品[0]) && ent == Player.get()) {
            Entity.setMaxHealth(Player.get(), 20);
            Entity.setHealth(Player.get(), 20);
            Game.prevent();
        }
    }
});
var EN = FileTools["ReadKeyValueFile"](__dir__ + "/lang/en_US.lang", "===");
var RU = FileTools["ReadKeyValueFile"](__dir__ + "/lang/ru_RU.lang", "===");
var ZH = FileTools["ReadKeyValueFile"](__dir__ + "/lang/zh_CN.lang", "===");
for (var key in EN) {
    Translation.addTranslation(key, {en: EN[key]});
}
for (var key in RU) {
    Translation.addTranslation(key, {ru: RU[key]});
}
for (var key in ZH) {
    Translation.addTranslation(key, {zh: ZH[key]});
}
UI.getContext().runOnUiThread(new java.lang.Runnable({run: function () {
    try {
        var d = new android.app.AlertDialog.Builder(UI.getContext());
        d.setNegativeButton("OK", new android.content.DialogInterface.OnClickListener() {onClick: function () {
        }});
        d.setTitle(Translation.translate("Super stone sword"));
        d.setMessage(Translation.translate("Welcome to use this mod.") + "\n" + Translation.translate("This mod is open source,") + "\n" + "https://github.com/CuiZhenhang/Super-stone-sword" + "\n" + Translation.translate("You can use the code of this module according to your needs,") + "\n" + Translation.translate("Feel free to reprint this mod,") + "\n" + Translation.translate("But do not publish it as your mod.") + "\n" + Translation.translate("Have a goot time!") + "\n\n" + Translation.translate("Write by CuiZhenhang, author of this mod"));
        d.show();
    }
    catch (e) {
    }
}}));

