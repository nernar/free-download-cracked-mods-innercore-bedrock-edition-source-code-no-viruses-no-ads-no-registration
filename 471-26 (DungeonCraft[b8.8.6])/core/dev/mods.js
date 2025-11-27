ModAPI.addAPICallback("BetterFoliageLeaves", function (BetterFoliage) {
    BetterFoliage.setupLeavesModel(BlockID.Foliage, -1, ["Foliage", 0]);
});
ModAPI.registerAPI("DungeonAPI", {ManaCore: ManaCore, Ritual: Ritual, Debug: Debug, Mp: Mp, ParticlesAPI: ParticlesAPI, ItemGenerate: {defaults: Item2, armors: Item3, rare: Item5, veryRare: Item6, paradise: ItemGenerateParadise, paradiseSuper: ItemGenerateParadiseSuper, nether: GeneraterNether, end: GeneraterEnd}, Structure: Structure, requireGlobal(command) {
    return eval(command);
}, versionAPI: 1});
let ac;
ModAPI.addAPICallback("AchievementsAPI", function (api) {
    DA = true;
    ac = api.AchievementAPI;
    api.AchievementAPI.registerGroup({uid: "DungeonAchievement", name: "Dungeon craft", width: 600, height: 600, size: 100, background: "stone", icon: {id: BlockID.grass2}});
    api.AchievementAPI.register("DungeonAchievement", {uid: "visitRai", name: Translation.translate("new world"), description: Translation.translate("visit paradise"), column: 1, row: 2, icon: {id: ItemID.Gem}});
    api.AchievementAPI.register("DungeonAchievement", {uid: "visitRai2", name: Translation.translate("conqueror of worlds"), description: Translation.translate("survive in paradise and get out"), column: 1, row: 3, parent: "visitRai", icon: {id: ItemID.GemEarth}});
    api.AchievementAPI.register("DungeonAchievement", {uid: "oreRai", name: Translation.translate("mysterious thing"), description: Translation.translate("get the ore of paradise"), column: 3, row: 3, parent: "visitRai", icon: {id: ItemID.clitok}});
    api.AchievementAPI.register("DungeonAchievement", {uid: "trade", name: Translation.translate("full of paradise?"), description: Translation.translate("trade with an angel"), column: 4, row: 2, parent: "visitRai", icon: {id: ItemID.koin_1}});
    api.AchievementAPI.register("DungeonAchievement", {uid: "manaMax", name: Translation.translate("powerful magician"), description: Translation.translate("pump your mana pool to 100,000"), column: 5, row: 1, type: "challenge", parent: "trade", icon: {id: ItemID.DarkSphere}});
    api.AchievementAPI.register("DungeonAchievement", {uid: "manaMax2", name: Translation.translate("powerful magician"), description: Translation.translate("pump your mana pool to 1,000,000"), column: 6, row: 1, type: "challenge", parent: "trade", icon: {id: ItemID.DarkSphere}});
    api.AchievementAPI.register("DungeonAchievement", {uid: "killBoss0", name: Translation.translate("bloody eye"), description: Translation.translate("kill the boss of the eye"), column: 1, row: 8, type: "challenge", icon: {id: ItemID.boss_summon_eye}});
    api.AchievementAPI.register("DungeonAchievement", {uid: "storageMagic", name: Translation.translate("storing magic"), description: Translation.translate("find a way to store magic"), column: 4, row: 4, parent: "oreRai", icon: {id: ItemID.RitualActivator}});
    api.AchievementAPI.register("DungeonAchievement", {uid: "Ritual1", name: Translation.translate("old magic"), description: Translation.translate("use new ore and boss statue"), column: 6, row: 4, parent: "storageMagic", icon: {id: BlockID.statua}});
    Callback.addCallback("ItemUse", function (coords, item, block, isExternal, player) {
        if (item.id == ItemID.Gem && block.id == BlockID.block1) {
            api.AchievementAPI.give(player, "DungeonAchievement", "visitRai");
        }
    });
    Callback.addCallback("ItemUse", function (coords, item, block, isExternal, player) {
        if (item.id == ItemID.Gem2 && block.id == BlockID.block1) {
            api.AchievementAPI.give(player, "DungeonAchievement", "visitRai");
        }
    });
    Callback.addCallback("ItemUse", function (coords, item, block, isExternal, player) {
        if (item.id == ItemID.GemEarth) {
            api.AchievementAPI.give(player, "DungeonAchievement", "visitRai2");
        }
    });
    Callback.addCallback("ItemUse", function (coords, item, block, isExternal, player) {
        if (item.id == ItemID.GemEarth2) {
            api.AchievementAPI.give(player, "DungeonAchievement", "visitRai2");
        }
    });
    Callback.addCallback("DestroyBlock", function (coords, block, player) {
        if (block.id == BlockID.ore) {
            api.AchievementAPI.give(player, "DungeonAchievement", "oreRai");
        }
    });
    Callback.addCallback("ItemUse", function (coords, item, block, isExternal, player) {
        if (item.id == ItemID.DarkSphere && ManaCore.get(player).countMax >= 100000) {
            api.AchievementAPI.give(player, "DungeonAchievement", "manaMax");
        }
        if (item.id == ItemID.DarkSphere && ManaCore.get(player).countMax >= 1000000) {
            api.AchievementAPI.give(player, "DungeonAchievement", "manaMax2");
        }
    });
    Callback.addCallback("EntityDeath", function (entity, attacker, damageType) {
        if (Entity.getTypeName(entity) == "dc:boss0<>" && Player.isPlayer(attacker)) {
            api.AchievementAPI.give(attacker, "DungeonAchievement", "killBoss0");
        }
    });
    Translation.addTranslation("new world", {ru: "\u0438\u043d\u043e\u0439 \u043c\u0438\u0440"});
    Translation.addTranslation("visit paradise", {ru: "\u043f\u043e\u0441\u0435\u0442\u0438\u0442\u0435 \u0440\u0430\u0439"});
    Translation.addTranslation("conqueror of worlds", {ru: "\u043f\u043e\u043a\u043e\u0440\u0438\u0442\u0435\u043b\u044c \u043c\u0438\u0440\u043e\u0432"});
    Translation.addTranslation("survive in paradise and get out", {ru: "\u0432\u044b\u0436\u0438\u0432\u0438\u0442\u0435 \u0432 \u0440\u0430\u044e \u0438 \u0432\u044b\u0431\u0435\u0440\u0435\u0442\u0435\u0441\u044c"});
    Translation.addTranslation("mysterious thing", {ru: "\u0437\u0430\u0433\u0430\u0434\u043e\u0447\u043d\u0430\u044f \u0432\u0435\u0449\u044c"});
    Translation.addTranslation("get the ore of paradise", {ru: "\u0434\u043e\u0431\u0443\u0434\u044c\u0442\u0435 \u0440\u0443\u0434\u0443 \u0440\u0430\u044f"});
    Translation.addTranslation("full of paradise?", {ru: "\u043d\u0430\u0441\u0430\u0442\u044b\u0439 \u0440\u0430\u044f?"});
    Translation.addTranslation("trade with an angel", {ru: "\u043f\u043e \u0442\u043e\u0440\u0433\u0443\u0439\u0442\u0435 \u0441 \u0430\u043d\u0433\u0435\u043b\u043e\u043c"});
    Translation.addTranslation("powerful magician", {ru: "\u043c\u043e\u0449\u043d\u044b\u0439 \u043c\u0430\u0433"});
    Translation.addTranslation("pump your mana pool to 100,000", {ru: "\u043f\u0440\u043e\u043a\u0430\u0447\u0430\u0439\u0442\u0435 \u0437\u0430\u043f\u0430\u0441 \u043c\u0430\u043d\u044b \u0434\u043e 100.000"});
    Translation.addTranslation("pump your mana pool to 1,000,000", {ru: "\u043f\u0440\u043e\u043a\u0430\u0447\u0430\u0439\u0442\u0435 \u0437\u0430\u043f\u0430\u0441 \u043c\u0430\u043d\u044b \u0434\u043e 1,000,000"});
    Translation.addTranslation("bloody eye", {ru: "\u043a\u0440\u043e\u0432\u0430\u0432\u043e\u0435 \u043e\u043a\u043e"});
    Translation.addTranslation("kill the boss of the eye", {ru: "\u0443\u0431\u0435\u0439\u0442\u0435 \u0431\u043e\u0441\u0441\u0430 \u043e\u043a\u043e"});
    Translation.addTranslation("old magic", {ru: "\u0434\u0440\u0435\u0432\u043d\u044f\u044f \u043c\u0430\u0433\u0438\u044f"});
    Translation.addTranslation("use new ore and boss statue", {ru: "\u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u0442\u0435 \u043d\u043e\u0432\u0443\u044e \u0440\u0443\u0434\u0443 \u0438 \u0441\u0442\u0430\u0442\u0443\u044e \u0431\u043e\u0441\u0441\u0430"});
    Translation.addTranslation("storing magic", {ru: "\u0445\u0440\u0430\u043d\u0435\u043d\u0438\u0435 \u043c\u0430\u0433\u0438\u0438"});
    Translation.addTranslation("find a way to store magic", {ru: "\u043d\u0430\u0439\u0434\u0438\u0442\u0435 \u0441\u043f\u043e\u0441\u043e\u0431 \u0445\u0440\u0430\u043d\u0438\u0442\u044c \u043c\u0430\u0433\u0438\u044e"});
    Translation.addTranslation("improvement time", {ru: "\u0432\u0440\u0435\u043c\u044f \u0443\u043b\u0443\u0447\u0448\u0435\u043d\u0438\u044f"});
    Translation.addTranslation("use all basic rituals", {ru: "\u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u0442\u0435 \u0432\u0441\u0435 \u0431\u0430\u0437\u043e\u0432\u044b\u0435 \u0440\u0438\u0442\u0443\u0430\u043b\u044b"});
});
Callback.addCallback("RitualDC", function (player, type, coords) {
    if (DA && type == "statua") {
        ac.give(player, "DungeonAchievement", "Ritual1");
    }
});
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf || ({__proto__: []} instanceof Array && function (d, b) {
            d.__proto__ = b;
        }) || function (d, b) {
            for (var p in b) {
                if (Object.prototype.hasOwnProperty.call(b, p)) {
                    d[p] = b[p];
                }
            }
        };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Callback.addCallback("ModsLoaded", function () {
    ModAPI.addAPICallback("RecipeViewer", function (api) {
        let RV = api.Core;
        function regRV(name, titleRv, blockId, contentRv, recipes, open) {
            var RVTypeAW = (function (_super) {
                __extends(RVTypeAW, _super);
                function RVTypeAW(nameRv, icon, content) {
                    return _super.call(this, nameRv, icon, content) || this;
                }
                RVTypeAW.prototype.getAllList = function () {
                    return recipes();
                };
                RVTypeAW.prototype.onOpen = function (elements, data) {
                    open(elements, data);
                };
                return RVTypeAW;
            }(api.RecipeType));
            api.RecipeTypeRegistry.register(name, new RVTypeAW(titleRv, blockId, contentRv));
        }
        regRV("ritual1", "\u0440\u0438\u0442\u0443\u0430\u043b \u0441\u043e\u0437\u0434\u0430\u043d\u0438\u044f/ritul create", BlockID.statua, {drawing: [], elements: {output0: {x: 440, y: 150, size: 120}, input0: {x: 440, y: 0, size: 120}, input1: {x: 440, y: 300, size: 120}, input2: {x: 590, y: 150, size: 120}, input3: {x: 290, y: 150, size: 120}, textMana: {type: "text", x: 150, y: 350, font: {size: 40}}}}, function () {
            let recipe = Ritual.arr1;
            let recipeList = [];
            let result;
            for (var i in recipe) {
                result = recipe[i].obj;
                recipeList.push({mana: result.mana, input: [{id: result.xp, count: 0, data: 0}, {id: result.xm, count: 0, data: 0}, {id: result.zp, count: 0, data: 0}, {id: result.zm, count: 0, data: 0}], output: [{id: recipe[i].id, count: 1, data: 0}]});
            }
            return recipeList;
        }, function (elements, data) {
            elements.get("textMana").onBindingUpdated("text", "mana: " + data.mana);
        });
        regRV("ritual2", "\u0440\u0438\u0442\u0443\u0430\u043b \u0443\u043b\u0443\u0447\u0448\u0435\u043d\u0438\u044f/ritul update", BlockID.rityal1, {drawing: [{type: "bitmap", x: 410, y: 200, scale: 7.5, bitmap: "furnace_bar_guide"}], elements: {output0: {x: 640, y: 200, size: 120}, input0: {x: 240, y: 200, size: 120}, textMana: {type: "text", x: 400, y: 150, font: {size: 40}}}}, function () {
            let recipe = Ritual.arr2;
            let recipeList = [];
            let obj;
            for (var i in recipe) {
                obj = recipe[i];
                recipeList.push({input: [{id: obj.id, count: 0, data: 0}], output: [{id: obj.result, count: 1, data: 0}]});
            }
            return recipeList;
        }, function (elements, data) {
            elements.get("textMana").onBindingUpdated("text", "mana: " + Ritual.get2(data.input[0].id).mana);
        });
        regRV("ritual3", "\u0440\u0438\u0442\u0443\u0430\u043b \u0437\u0430\u0447\u0430\u0440\u043e\u0432\u0430\u043d\u0438\u0435/ritul enchantment", BlockID.rityal1, {drawing: [{type: "bitmap", x: 410, y: 200, scale: 7.5, bitmap: "furnace_bar_guide"}], elements: {output0: {x: 640, y: 200, size: 120}, input0: {x: 240, y: 200, size: 120}, textMana: {type: "text", x: 400, y: 150, font: {size: 40}}}}, function () {
            let recipeList = [];
            let keys = Object.keys(Ritual.obj3);
            for (var g in keys) {
                let key = keys[g];
                for (var i in Ritual.obj3[key].arr) {
                    recipeList.push({input: [{id: parseInt(key), data: 0, count: 1}], output: [{id: Ritual.obj3[key].arr[i], count: 1, data: 0}]});
                }
            }
            return recipeList;
        }, function (elements, data) {
            elements.get("textMana").onBindingUpdated("text", "mana: " + Ritual.get3(data.input[0].id).obj.mana);
        });
        regRV("tradeAngel", "\u0442\u043e\u0440\u0433\u043e\u0432\u043b\u044f/trade", 388, {drawing: [{type: "bitmap", x: 410, y: 200, scale: 7.5, bitmap: "furnace_bar_guide"}], elements: {output0: {x: 640, y: 200, size: 120}, input0: {x: 240, y: 200, size: 120}}}, function () {
            let recipeList = [];
            for (var g in Entity.tradeArr) {
                let obj = Entity.tradeArr[g];
                recipeList.push({input: [{id: obj.item.id, count: obj.item.count, data: obj.item.data}], output: [{id: obj.result.id, count: obj.count.max, data: obj.result.data}]});
            }
            return recipeList;
        }, function (elements, data) {
        });
    });
});
ModAPI.addAPICallback("AncientWondersAPI", function (api) {
    const MagicCore = api.MagicCore;
    Item.registerUseFunctionForID(ItemID.manysript2, function (coords, item, block, player) {
        let mana = ManaCore.get(player);
        if (mana.count >= 5000) {
            MagicCore.piece(player, "magis");
            MagicCore.piece(player, "Protection");
            MagicCore.piece(player, "necromancer");
            if (MagicCore.isClass(player)) {
                mana.count -= 5000;
            }
            ManaCore.set(player, mana);
        } else {
            Mp.message(player, "\u0443 \u0432\u0430\u0441 \u043d\u0435 \u0445\u0432\u0430\u0442\u0430\u0435\u0442 \u043c\u0430\u043d\u044b, \u043d\u0443\u0436\u043d\u043e \u043d\u0435 \u043c\u0435\u043d\u044c\u0448\u0435 5000");
        }
    });
    MagicCore.setArmor(ItemID.armor1, "Protection", 70);
    MagicCore.setArmor(ItemID.armor2, "Protection", 70);
    MagicCore.setArmor(ItemID.armor3, "Protection", 70);
    MagicCore.setArmor(ItemID.armor4, "Protection", 70);
    MagicCore.setArmor(ItemID.armor5, "Protection", 60);
    MagicCore.setArmor(ItemID.armor6, "Protection", 60);
    MagicCore.setArmor(ItemID.armor7, "Protection", 60);
    MagicCore.setArmor(ItemID.armor8, "Protection", 60);
});

