var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
IMPORT("BlockEngine");
IMPORT("ChargeItem");
var BlockSide = Native.BlockSide;
ICore.Sound.setResourcePath(__dir__ + "assets/sounds/");
ICore.Sound.registerSound("ToolChange", "ToolChange.ogg");
// Items
Translation.addTranslation("superconductor_cover", { en: "Superconductor Cover", ru: "Изоляция сверхпроводника", zh: "超导体绝缘层" });
Translation.addTranslation("superconductor", { en: "Superconductor", ru: "Сверхпроводник", zh: "超导体" });
Translation.addTranslation("engine_booster", { en: "Engine Booster", ru: "Ускоритель двигателя", zh: "喷射引擎" });
Translation.addTranslation("cooling_core", { en: "Cooling Core", ru: "Охлаждающее ядро", zh: "降温核心" });
Translation.addTranslation("gravitation_engine", { en: "Gravitation Engine", ru: "Гравитационный двигатель", zh: "重力引擎" });
Translation.addTranslation("magnetron", { en: "Magnetron", ru: "Магнетрон", zh: "磁控管" });
Translation.addTranslation("vajra_core", { en: "Vajra Core", ru: "Ядро ваджры", zh: "金刚杵核心" });
Translation.addTranslation("vajra", { en: "Vajra", ru: "Ваджра", zh: "金刚杵" });
Translation.addTranslation("advanced_diamond_drill", { en: "Advanced Diamond Drill", ru: "Улучшенный алмазный бур", zh: "进阶钻石电钻" });
Translation.addTranslation("advanced_chainsaw", { en: "Advanced Chainsaw", ru: "Улучшенная электропила", zh: "进阶电锯" });
Translation.addTranslation("gravi_tool", { en: "GraviTool", ru: "Гравитул", zh: "万能重力工具" });
Translation.addTranslation("mode.treetap", { en: "Treetap", ru: "Краник", zh: "木龙头" });
Translation.addTranslation("mode.wrench", { en: "Wrench", ru: "Ключ", zh: "扳手" });
Translation.addTranslation("mode.hoe", { en: "Hoe", ru: "Мотыга", zh: "锄头" });
Translation.addTranslation("mode.screwdriver", { en: "Screwdriver", ru: "Отвёртка", zh: "螺丝刀" });
Translation.addTranslation("gravi_chestplate", { en: "GraviChestplate", ru: "Гравитационный жилет", zh: "重力胸甲" });
Translation.addTranslation("advanced_nano_chestplate", { en: "Advanced NanoChestplate", ru: "Улучшенный наножилет", zh: "进阶纳米重力胸甲" });
Translation.addTranslation("ultimate_lappack", { en: "Ultimate Lappack", ru: "Совершенный лаппак", zh: "终极兰波顿电池背包" });
Translation.addTranslation("advanced_jetpack", { en: "Advanced Jetpack", ru: "Улучшенный джетпак", zh: "进阶电力喷气背包" });
// Text
Translation.addTranslation("message.advancedDrill.normal", { en: "Normal", ru: "Нормальный" });
Translation.addTranslation("message.advancedDrill.lowPower", { en: "Low power", ru: "Низкое питание" });
Translation.addTranslation("message.advancedDrill.fine", { en: "Fine", ru: "Точный" });
Translation.addTranslation("message.advancedDrill.bigHoles", { en: "Big holes", ru: "Большие дыры" });
Translation.addTranslation("message.graviTool.hoe", { en: "Hoe activated", ru: "Мотыга активирована", zh: "锄头激活" });
Translation.addTranslation("message.graviTool.treetap", { en: "Treetap activated", ru: "Краник активирован", zh: "木龙头激活" });
Translation.addTranslation("message.graviTool.wrench", { en: "Wrench activated", ru: "Ключ активирован", zh: "扳手激活" });
Translation.addTranslation("message.graviTool.screwdriver", { en: "Screwdriver activated", ru: "Отвёртка активирована", zh: "螺丝刀激活" });
Translation.addTranslation("message.silktouch.enabled", { en: "Silk Touch enabled", ru: "Шёлковое касание включено" });
Translation.addTranslation("message.silktouch.disabled", { en: "Silk Touch disabled", ru: "Шёлковое касание выключено" });
Translation.addTranslation("message.graviChestPlate.enabled", { en: "Gravitation engine enabled", ru: "Гравитационный двигатель включен", zh: "重力引擎启动" });
Translation.addTranslation("message.graviChestPlate.disabled", { en: "Gravitation engine disabled", ru: "Гравитационный двигатель выключен", zh: "重力引擎关闭" });
Translation.addTranslation("message.graviChestPlate.lowEnergy", { en: "Not enough energy to run Gravitation engine!", ru: "Не хватает энергии для запуска гравитационного двигателя!", zh: "警告!警告!没有足够的能源去启动重力引擎!" });
Translation.addTranslation("message.graviChestPlate.shutdown", { en: "Warning! Your's energy cell is depleted! Gravitation engine off", ru: "Внимание! У вас закончилась энергия. Гравитационный двигатель отключен.", zh: "警告!警告!能源不足,重力引擎离线,请做好冲击准备." });
var EnergyLevelUI;
(function (EnergyLevelUI) {
    var data = [];
    function setFor(id) {
        data.push(id);
    }
    EnergyLevelUI.setFor = setFor;
    function isEnabledFor(id) {
        return data.indexOf(id) != -1;
    }
    EnergyLevelUI.isEnabledFor = isEnabledFor;
    EnergyLevelUI.container = null;
    EnergyLevelUI.window = getWindow();
    function getWindow() {
        var position = __config__.getString("energy_text.pos");
        var scale = __config__.getNumber("energy_text.scale").intValue();
        var posX = { left: 5, center: 500 - scale / 2, right: 1000 - scale }[position];
        var posY = __config__.getNumber("energy_text.y").intValue();
        var window = new UI.Window({
            location: {
                x: posX,
                y: posY,
                width: scale,
                height: 30
            },
            drawing: [{ type: "background", color: 0 }],
            elements: {
                "text1": { type: "text", font: { size: 85, color: android.graphics.Color.WHITE }, x: 0, y: 0, width: 300, height: 30, text: "Energy level: " },
                "text2": { type: "text", font: { size: 85, color: android.graphics.Color.GREEN }, x: 725, y: 0, width: 300, height: 30, text: "100%" },
            }
        });
        window.setAsGameOverlay(true);
        return window;
    }
    function onUpdate() {
        var armor = Player.getArmorSlot(1);
        if (isEnabledFor(armor.id) && currentUIscreen == "in_game_play_screen") {
            if (!EnergyLevelUI.container || !EnergyLevelUI.container.isOpened()) {
                EnergyLevelUI.container = new UI.Container();
                EnergyLevelUI.container.openAs(EnergyLevelUI.window);
            }
            var maxCharge = ChargeItemRegistry.getMaxCharge(armor.id);
            var energyStored = ChargeItemRegistry.getEnergyStored(armor);
            var charge = Math.ceil(energyStored / maxCharge * 100);
            var element = EnergyLevelUI.window.getContent().elements.text2;
            if (charge <= 1) {
                element.font.color = android.graphics.Color.RED;
            }
            else if (charge <= 10) {
                element.font.color = android.graphics.Color.YELLOW;
            }
            else {
                element.font.color = android.graphics.Color.GREEN;
            }
            EnergyLevelUI.container.setText("text2", charge + "%");
        }
        else if (EnergyLevelUI.container) {
            EnergyLevelUI.container.close();
            EnergyLevelUI.container = null;
        }
    }
    var currentUIscreen;
    Callback.addCallback("NativeGuiChanged", function (screenName) {
        currentUIscreen = screenName;
        if (screenName != "in_game_play_screen" && EnergyLevelUI.container) {
            EnergyLevelUI.container.close();
            EnergyLevelUI.container = null;
        }
    });
    Callback.addCallback("LocalTick", onUpdate);
})(EnergyLevelUI || (EnergyLevelUI = {}));
var GraviEngineButton = /** @class */ (function (_super) {
    __extends(GraviEngineButton, _super);
    function GraviEngineButton() {
        return _super.call(this, "gravi_engine", "armor", {
            position: 1,
            bitmap: "button_gravi_off",
            scale: 50,
        }) || this;
    }
    GraviEngineButton.prototype.onClick = function (player) {
        var client = Network.getClientForPlayer(player);
        var armor = Entity.getArmorSlot(player, 1);
        var extra = armor.extra || new ItemExtraData();
        if (extra.getBoolean("fly")) {
            extra.putBoolean("fly", false);
            BlockEngine.sendMessage(client, "§4", "message.graviChestPlate.disabled");
        }
        else if (ChargeItemRegistry.getEnergyStored(armor) >= 2500) {
            extra.putBoolean("fly", true);
            BlockEngine.sendMessage(client, "§2", "message.graviChestPlate.enabled");
        }
        else {
            BlockEngine.sendMessage(client, "message.graviChestPlate.lowEnergy");
        }
        Entity.setArmorSlot(player, 1, armor.id, 1, armor.data, extra);
    };
    GraviEngineButton.prototype.onUpdate = function (element) {
        var extra = Player.getArmorSlot(1).extra;
        if (extra && extra.getBoolean("fly")) {
            element.bitmap = "button_gravi_on";
        }
        else {
            element.bitmap = "button_gravi_off";
        }
    };
    return GraviEngineButton;
}(ICore.UI.AbstractButton));
ICore.UI.registerButton(new GraviEngineButton());
var AdvancedJetpack = /** @class */ (function (_super) {
    __extends(AdvancedJetpack, _super);
    function AdvancedJetpack() {
        var _this = _super.call(this, "advJetpack", "advanced_jetpack", 3000000, 10000, 4) || this;
        _this.setRarity(EnumRarity.UNCOMMON);
        ICore.UI.setButtonFor(_this.id, "button_fly");
        ICore.UI.setButtonFor(_this.id, "button_hover");
        EnergyLevelUI.setFor(_this.id);
        return _this;
    }
    AdvancedJetpack.prototype.setArmorTexture = function () {
        this.texture = "armor/advJetpack.png";
    };
    AdvancedJetpack.prototype.onHurt = function (params, item, index, playerUid) {
        if (BlockEngine.getMainGameVersion() >= 16 && params.type == 5 && !EntityHelper.isOnGround(playerUid)) {
            Game.prevent();
        }
        return _super.prototype.onHurt.call(this, params, item, index, playerUid);
    };
    AdvancedJetpack.prototype.onTick = function (item, index, playerUid) {
        var stack = _super.prototype.onTick.call(this, item, index, playerUid);
        return JetpackProvider.onTick(item, playerUid) || stack;
    };
    return AdvancedJetpack;
}(ArmorBatpack));
var AdvancedNanoChestplate = /** @class */ (function (_super) {
    __extends(AdvancedNanoChestplate, _super);
    function AdvancedNanoChestplate() {
        var _this = _super.call(this, "advNanoChestplate", "advanced_nano_chestplate", { type: "chestplate", defence: 8, texture: "advNanoChestplate" }, false) || this;
        _this.maxCharge = 3000000;
        _this.transferLimit = 10000;
        _this.tier = 4;
        ChargeItemRegistry.addToCreative(_this.id, _this.maxCharge);
        ICore.UI.setButtonFor(_this.id, "button_fly");
        ICore.UI.setButtonFor(_this.id, "button_hover");
        EnergyLevelUI.setFor(_this.id);
        return _this;
    }
    AdvancedNanoChestplate.prototype.onTick = function (item, index, playerUid) {
        var stack = null;
        if (World.getThreadTime() % 20 == 0) {
            var carried = Entity.getCarriedItem(playerUid);
            if (ChargeItemRegistry.isValidItem(carried.id, "Eu", this.tier)) {
                var energyStored = ChargeItemRegistry.getEnergyStored(item);
                var energyAdd = ChargeItemRegistry.addEnergyTo(carried, "Eu", Math.min(energyStored, this.transferLimit * 20), this.tier);
                if (energyAdd > 0) {
                    ChargeItemRegistry.setEnergyStored(item, energyStored - energyAdd);
                    Entity.setCarriedItem(playerUid, carried.id, 1, carried.data, carried.extra);
                    stack = item;
                }
            }
        }
        return JetpackProvider.onTick(item, playerUid) || stack;
    };
    return AdvancedNanoChestplate;
}(ArmorNanoSuit));
var GraviChestplate = /** @class */ (function (_super) {
    __extends(GraviChestplate, _super);
    function GraviChestplate() {
        var _this = _super.call(this, "graviChestplate", "gravi_chestplate", { type: "chestplate", defence: 9, texture: "graviChestplate" }, false) || this;
        _this.setRarity(EnumRarity.EPIC);
        _this.maxCharge = 6e7;
        _this.transferLimit = 100000;
        _this.canProvideEnergy = true;
        ChargeItemRegistry.addToCreative(_this.id, _this.maxCharge);
        EnergyLevelUI.setFor(_this.id);
        ICore.UI.setButtonFor(_this.id, "gravi_engine");
        return _this;
    }
    GraviChestplate.prototype.onTick = function (item, index, player) {
        var flyEnabled = item.extra ? item.extra.getBoolean("fly") : false;
        var energyStored = ChargeItemRegistry.getEnergyStored(item);
        if (energyStored > 0) {
            Entity.setFire(player, 0, true);
            if (World.getThreadTime() % 20 == 0) {
                var newEnergyStored = energyStored;
                if (flyEnabled) {
                    newEnergyStored = Math.max(newEnergyStored - 50000, 0);
                }
                var carried = Entity.getCarriedItem(player);
                if (ChargeItemRegistry.isValidItem(carried.id, "Eu", this.tier)) {
                    var energyAdd = ChargeItemRegistry.addEnergyTo(carried, "Eu", Math.min(newEnergyStored, this.transferLimit * 20), this.tier);
                    if (energyAdd > 0) {
                        newEnergyStored -= energyAdd;
                        Entity.setCarriedItem(player, carried.id, 1, carried.data, carried.extra);
                    }
                }
                if (energyStored != newEnergyStored) {
                    ChargeItemRegistry.setEnergyStored(item, newEnergyStored);
                    return item;
                }
            }
        }
        else if (flyEnabled) {
            item.extra.putBoolean("fly", false);
            BlockEngine.sendMessage(Network.getClientForPlayer(player), "§4", "message.graviChestPlate.shutdown");
            return item;
        }
        return null;
    };
    return GraviChestplate;
}(ArmorQuantumSuit));
var canFly = [];
Callback.addCallback("ServerPlayerTick", function (playerUid, isPlayerDead) {
	if (isPlayerDead) {
		var flightIndex = canFly.indexOf(playerUid);
		if (flightIndex != -1) {
			player.setFlying(false);
            player.setCanFly(false);
            canFly.splice(flightIndex, 1);
        }
		return;
	}
	var player = new PlayerActor(playerUid);
    if (player.getGameMode() != 1) {
    	var flightIndex = canFly.indexOf(playerUid);
    	var armor = player.getArmor(1);
        if (armor.id == ItemID.graviChestplate && armor.extra && armor.extra.getBoolean("fly")) {
            player.setCanFly(true);
            if (flightIndex == -1) {
            	canFly.push(playerUid);
            }
        }
        else if (flightIndex != -1) {
            player.setFlying(false);
            player.setCanFly(false);
            canFly.splice(flightIndex, 1);
	    }
    }
});
var UltimateLappack = /** @class */ (function (_super) {
    __extends(UltimateLappack, _super);
    function UltimateLappack() {
        var _this = _super.call(this, "ultimateLappack", "ultimate_lappack", 6e7, 100000, 4) || this;
        _this.setRarity(EnumRarity.RARE);
        return _this;
    }
    UltimateLappack.prototype.setArmorTexture = function () {
        this.texture = "armor/ultimateLappack.png";
    };
    return UltimateLappack;
}(ArmorBatpack));
var AdvancedChainsaw = /** @class */ (function (_super) {
    __extends(AdvancedChainsaw, _super);
    function AdvancedChainsaw() {
        var _this = _super.call(this, "advancedChainsaw", "advanced_chainsaw", { energyPerUse: 200, level: 4, efficiency: 16.2, damage: 8 }, 45000, 2000, 2) || this;
        _this.setRarity(EnumRarity.UNCOMMON);
        return _this;
    }
    return AdvancedChainsaw;
}(ElectricChainsaw));
var AdvancedDrill = /** @class */ (function (_super) {
    __extends(AdvancedDrill, _super);
    function AdvancedDrill() {
        var _this = _super.call(this, "advancedDDrill", "advanced_diamond_drill", { energyPerUse: 160, level: 4, efficiency: 21.6, damage: 3 }, 45000, 2000, 2) || this;
        _this.setRarity(EnumRarity.UNCOMMON);
        ICore.UI.setButtonFor(_this.id, "button_switch");
        return _this;
    }
    AdvancedDrill.prototype.getEnergyPerUse = function (item) {
        switch (this.readMode(item.extra)) {
            case 1:
                return 80;
            case 2:
                return 50;
            default:
                return this.energyPerUse;
        }
    };
    AdvancedDrill.prototype.readMode = function (extra) {
        if (!extra)
            return 0;
        return extra.getInt("mode");
    };
    AdvancedDrill.prototype.getModeName = function (mode) {
        switch (mode) {
            case 0:
                return "message.advancedDrill.normal";
            case 1:
                return "message.advancedDrill.lowPower";
            case 2:
                return "message.advancedDrill.fine";
            case 3:
                return "message.advancedDrill.bigHoles";
        }
    };
    AdvancedDrill.prototype.getModeChatColor = function (mode) {
        switch (mode) {
            case 0:
                return "§2";
            case 1:
                return "§6";
            case 2:
                return "§b";
            case 3:
                return "§5";
        }
    };
    AdvancedDrill.prototype.onNameOverride = function (item, name) {
        name = _super.prototype.onNameOverride.call(this, item, name);
        var mode = this.readMode(item.extra);
        var tooltip = this.getModeChatColor(mode) + Translation.translate("Mode: ") + Translation.translate(this.getModeName(mode));
        return name + "\n" + tooltip;
    };
    AdvancedDrill.prototype.onModeSwitch = function (item, player) {
        var client = Network.getClientForPlayer(player);
        var extra = item.extra || new ItemExtraData();
        var mode = (extra.getInt("mode") + 1) % 4;
        extra.putInt("mode", mode);
        BlockEngine.sendUnlocalizedMessage(client, this.getModeChatColor(mode), "Mode: ", this.getModeName(mode));
        Entity.setCarriedItem(player, item.id, 1, item.data, extra);
    };
    AdvancedDrill.prototype.getOperationRadius = function (side) {
        var rad = { x: 1, y: 1, z: 1 };
        if (side == BlockSide.EAST || side == BlockSide.WEST)
            rad.x = 0;
        if (side == BlockSide.UP || side == BlockSide.DOWN)
            rad.y = 0;
        if (side == BlockSide.NORTH || side == BlockSide.SOUTH)
            rad.z = 0;
        return rad;
    };
    AdvancedDrill.prototype.calcDestroyTime = function (item, coords, block, params, destroyTime) {
        if (ChargeItemRegistry.getEnergyStored(item) >= this.getEnergyPerUse(item)) {
            var mode = this.readMode(item.extra);
            var material = ToolAPI.getBlockMaterialName(block.id);
            if (mode == 1)
                return destroyTime * 1.35;
            if (mode == 2)
                return destroyTime * 2.7;
            if (mode == 3 && (material == "dirt" || material == "stone")) {
                var maxDestroyTime = 0;
                var rad = this.getOperationRadius(coords.side);
                for (var xx = coords.x - rad.x; xx <= coords.x + rad.x; xx++)
                    for (var yy = coords.y - rad.y; yy <= coords.y + rad.y; yy++)
                        for (var zz = coords.z - rad.z; zz <= coords.z + rad.z; zz++) {
                            var blockID = World.getBlockID(xx, yy, zz);
                            var material_1 = ToolAPI.getBlockMaterial(blockID);
                            if (material_1 && (material_1.name == "dirt" || material_1.name == "stone")) {
                                var destroyTime_1 = Block.getDestroyTime(blockID) / material_1.multiplier;
                                if (ToolAPI.getBlockDestroyLevel(blockID) <= this.toolMaterial.level) {
                                    destroyTime_1 /= this.toolMaterial.efficiency;
                                }
                                maxDestroyTime = Math.max(destroyTime_1, maxDestroyTime);
                            }
                        }
                return maxDestroyTime;
            }
            return destroyTime;
        }
        return params.base;
    };
    AdvancedDrill.prototype.onDestroy = function (item, coords, block, player) {
        this.playDestroySound(item, block, player);
        var region = WorldRegion.getForActor(player);
        var mode = this.readMode(item.extra);
        var material = ToolAPI.getBlockMaterialName(block.id);
        var energyStored = ChargeItemRegistry.getEnergyStored(item);
        if (mode == 3 && (material == "dirt" || material == "stone") && energyStored >= this.energyPerUse) {
            var consume = 0;
            var rad = this.getOperationRadius(coords.side);
            for (var xx = coords.x - rad.x; xx <= coords.x + rad.x; xx++)
                for (var yy = coords.y - rad.y; yy <= coords.y + rad.y; yy++)
                    for (var zz = coords.z - rad.z; zz <= coords.z + rad.z; zz++) {
                        if (xx == coords.x && yy == coords.y && zz == coords.z) {
                            continue;
                        }
                        var blockID = region.getBlockId(xx, yy, zz);
                        material = ToolAPI.getBlockMaterialName(blockID);
                        if (material == "dirt" || material == "stone") {
                            consume += this.energyPerUse;
                            region.destroyBlock(xx, yy, zz, true, player);
                            if (energyStored < consume + this.energyPerUse) {
                                ICore.Tool.dischargeItem(item, consume, player);
                                return true;
                            }
                        }
                    }
            if (consume > 0)
                ICore.Tool.dischargeItem(item, consume, player);
        }
        return true;
    };
    return AdvancedDrill;
}(ToolDrill));
var GraviTool = /** @class */ (function (_super) {
    __extends(GraviTool, _super);
    function GraviTool() {
        var _this = _super.call(this, "graviTool", "gravi_tool", 300000, 10000, 3) || this;
        _this.dropChance = 1;
        _this.setToolParams({ energyPerUse: 50, level: 4, efficiency: 16.2, blockMaterials: ["plant"] });
        _this.setRarity(EnumRarity.UNCOMMON);
        ICore.UI.setButtonFor(_this.id, "button_switch");
        ICore.Tool.registerWrench(_this.id, _this);
        ModAPI.addAPICallback("RedCore", function (api) {
            api.Machine.registerScrewdriver(_this.id, {
                canBeUsed: function (item) { return _this.canBeUsedAsScrewdriver(item); },
                useItem: function (item, player) { return _this.useAsScrewdriver(item, player); }
            });
        });
        return _this;
    }
    GraviTool.prototype.readMode = function (extra) {
        if (!extra)
            return 0;
        return extra.getInt("mode");
    };
    GraviTool.prototype.onIconOverride = function (item) {
        var mode = this.readMode(item.extra);
        return { name: this.icon.name, meta: mode };
    };
    GraviTool.prototype.getModeName = function (mode) {
        switch (mode) {
            case 0:
                return "mode.hoe";
            case 1:
                return "mode.treetap";
            case 2:
                return "mode.wrench";
            case 3:
                return "mode.screwdriver";
        }
    };
    GraviTool.prototype.onNameOverride = function (item, name) {
        var mode = this.readMode(item.extra);
        name += " (" + Translation.translate(this.getModeName(mode)) + ")";
        return _super.prototype.onNameOverride.call(this, item, name);
    };
    GraviTool.prototype.onModeSwitch = function (item, player) {
        var client = Network.getClientForPlayer(player);
        var extra = item.extra || new ItemExtraData();
        var mode = (extra.getInt("mode") + 1) % 4;
        extra.putInt("mode", mode);
        switch (mode) {
            case 0:
                BlockEngine.sendUnlocalizedMessage(client, "§2", "message.graviTool.hoe");
                break;
            case 1:
                BlockEngine.sendUnlocalizedMessage(client, "§6", "message.graviTool.treetap");
                break;
            case 2:
                BlockEngine.sendUnlocalizedMessage(client, "§b", "message.graviTool.wrench");
                break;
            case 3:
                BlockEngine.sendUnlocalizedMessage(client, "§5", "message.graviTool.screwdriver");
                break;
        }
        Entity.setCarriedItem(player, item.id, 1, item.data, extra);
        ICore.Sound.playSoundAtEntity(player, "ToolChange", 0.6);
    };
    GraviTool.prototype.isUseable = function (item, damage) {
        if (this.readMode(item.extra) < 2)
            return false;
        var energyStored = ChargeItemRegistry.getEnergyStored(item);
        return energyStored >= 100 * damage;
    };
    GraviTool.prototype.useItem = function (item, damage, player) {
        ICore.Tool.useElectricItem(item, 100 * damage, player);
    };
    GraviTool.prototype.canBeUsedAsScrewdriver = function (item) {
        return this.readMode(item.extra) == 3 && ChargeItemRegistry.getEnergyStored(item) >= this.energyPerUse;
    };
    GraviTool.prototype.useAsScrewdriver = function (item, player) {
        var energyStored = ChargeItemRegistry.getEnergyStored(item);
        ChargeItemRegistry.setEnergyStored(item, energyStored - this.energyPerUse);
        Entity.setCarriedItem(player, item.id, 1, item.data, item.extra);
    };
    GraviTool.prototype.onAttack = function (item, victim, attacker) {
        if (this.readMode(item.extra) == 0) {
            this.damage = 4;
            return _super.prototype.onAttack.call(this, item, attacker, victim);
        }
        this.damage = 0;
        return true;
    };
    GraviTool.prototype.onDestroy = function (item, coords, block, player) {
        if (this.readMode(item.extra) == 0)
            _super.prototype.onDestroy.call(this, item, coords, block, player);
        return true;
    };
    GraviTool.prototype.calcDestroyTime = function (item, coords, block, params, destroyTime) {
        if (this.readMode(item.extra) == 0) {
            return _super.prototype.calcDestroyTime.call(this, item, coords, block, params, destroyTime);
        }
        return params.base;
    };
    GraviTool.prototype.onItemUse = function (coords, item, block, player) {
        var mode = this.readMode(item.extra);
        if (mode == 0 && (block.id == 2 || block.id == 3 || block.id == 110 || block.id == 243) && coords.side != 0 && ICore.Tool.useElectricItem(item, 50, player)) {
            var region = WorldRegion.getForActor(player);
            region.setBlock(coords, 60, 0);
            region.playSound(coords.x + .5, coords.y + 1, coords.z + .5, "step.gravel", 1, 0.8);
        }
        else if (mode == 1 && block.id == BlockID.rubberTreeLogLatex && block.data >= 4 && block.data == coords.side + 2 && ICore.Tool.useElectricItem(item, 50, player)) {
            var region = WorldRegion.getForActor(player);
            ICore.Sound.playSoundAt(coords.vec.x, coords.vec.y, coords.vec.z, "Treetap.ogg");
            region.setBlock(coords, BlockID.rubberTreeLogLatex, block.data - 4);
            Entity.setVelocity(region.dropItem(coords.relative.x + 0.5, coords.relative.y + 0.5, coords.relative.z + 0.5, ItemID.latex, randomInt(1, 3), 0), (coords.relative.x - coords.x) * 0.25, (coords.relative.y - coords.y) * 0.25, (coords.relative.z - coords.z) * 0.25);
        }
    };
    return GraviTool;
}(ElectricTool));
var Vajra = /** @class */ (function (_super) {
    __extends(Vajra, _super);
    function Vajra() {
        var _this = _super.call(this, "vajra", "vajra", 1e7, 20000, 4) || this;
        _this.damage = 5;
        _this.setToolParams({ energyPerUse: 3333, level: 100, efficiency: 1, damage: 20, blockMaterials: ["stone", "dirt", "wood"] });
        _this.setRarity(EnumRarity.EPIC);
        ICore.UI.setButtonFor(_this.id, "button_switch");
        return _this;
    }
    Vajra.prototype.onModeSwitch = function (item, player) {
        var client = Network.getClientForPlayer(player);
        var extra = item.extra || new ItemExtraData();
        var silktouchMode = !extra.getBoolean("silktouch");
        extra.putBoolean("silktouch", silktouchMode);
        if (silktouchMode) {
            BlockEngine.sendUnlocalizedMessage(client, "§2", "message.silktouch.enabled");
        }
        else {
            BlockEngine.sendUnlocalizedMessage(client, "§4", "message.silktouch.disabled");
        }
        Entity.setCarriedItem(player, item.id, 1, item.data, extra);
    };
    Vajra.prototype.onNameOverride = function (item, name) {
        var _a;
        name = _super.prototype.onNameOverride.call(this, item, name);
        if ((_a = item.extra) === null || _a === void 0 ? void 0 : _a.getBoolean("silktouch")) {
            name += "\n" + Translation.translate("message.silktouch.enabled");
        }
        return name;
    };
    Vajra.prototype.modifyEnchant = function (enchant, item) {
        var _a;
        if ((_a = item.extra) === null || _a === void 0 ? void 0 : _a.getBoolean("silktouch")) {
            enchant.silk = true;
        }
    };
    Vajra.prototype.onDestroy = function (item, coords, block, player) {
        var _a;
        if (((_a = item.extra) === null || _a === void 0 ? void 0 : _a.getBoolean("silktouch")) && ToolAPI.getBlockMaterialName(block.id) == "plant") {
            if (ICore.Tool.dischargeItem(item, this.energyPerUse, player)) {
                var region = WorldRegion.getForActor(player);
                region.destroyBlock(coords);
                if (block.id == 175)
                    block.data = block.data % 8;
                region.dropItem(coords.x + .5, coords.y + .5, coords.z + .5, block.id, 1, block.data);
            }
            return true;
        }
        return _super.prototype.onDestroy.call(this, item, coords, block, player);
    };
    Vajra.prototype.calcDestroyTime = function (item, coords, block, params, destroyTime) {
        if (ChargeItemRegistry.getEnergyStored(item) >= this.energyPerUse && ToolAPI.getBlockMaterialName(block.id) != "unbreaking") {
            return 0;
        }
        return params.base;
    };
    return Vajra;
}(ElectricTool));
ItemRegistry.createItem("superconductorCover", { name: "superconductor_cover", icon: "superconductor_cover" });
ItemRegistry.createItem("superconductor", { name: "superconductor", icon: "superconductor" });
ItemRegistry.createItem("engineBoost", { name: "engine_booster", icon: "engine_boost" });
ItemRegistry.createItem("coolingCore", { name: "cooling_core", icon: "cooling_core" });
ItemRegistry.createItem("graviEngine", { name: "gravitation_engine", icon: "gravi_engine" });
ItemRegistry.createItem("magnetron", { name: "magnetron", icon: "magnetron", stack: 1 });
ItemRegistry.createItem("vajraCore", { name: "vajra_core", icon: "vajra_core", stack: 1 });
Recipes.addShaped({ id: ItemID.superconductorCover, count: 3, data: 0 }, [
    "aba",
    "ccc",
    "aba"
], ['a', ItemID.plateAlloy, 0, 'b', ItemID.plateReinforcedIridium, 0, 'c', ItemID.carbonPlate, 0]);
Recipes.addShaped({ id: ItemID.superconductor, count: 3, data: 0 }, [
    "ccc",
    "oao",
    "ccc"
], ['a', 266, 0, 'c', ItemID.superconductorCover, 0, 'o', ItemID.cableOptic, 0]);
Recipes.addShaped({ id: ItemID.coolingCore, count: 1, data: 0 }, [
    "chc",
    "pbp",
    "chc"
], ['b', ItemID.plateReinforcedIridium, 0, 'c', ItemID.coolantCell6, 1, 'h', ItemID.heatExchangerAdv, 1, 'p', ItemID.reactorPlatingHeat, 0]);
Recipes.addShaped({ id: ItemID.engineBoost, count: 1, data: 0 }, [
    "gag",
    "cbc",
    "aha"
], ['a', ItemID.plateAlloy, 0, 'b', ItemID.upgradeOverclocker, 0, 'c', ItemID.circuitBasic, 0, 'h', ItemID.heatVentAdv, 1, 'g', 348, 0]);
Recipes.addShaped({ id: ItemID.graviEngine, count: 1, data: 0 }, [
    "csc",
    "xax",
    "csc"
], ['x', ItemID.coolingCore, 0, 's', ItemID.superconductor, 0, 'a', BlockID.transformerHV, 0, 'c', BlockID.teslaCoil, 0]);
Recipes.addShaped({ id: ItemID.magnetron, count: 1, data: 0 }, [
    "aba",
    "bsb",
    "aba"
], ['s', ItemID.superconductor, 0, 'a', ItemID.plateIron, 0, 'b', ItemID.plateCopper, 0]);
Recipes.addShaped({ id: ItemID.vajraCore, count: 1, data: 0 }, [
    " m ",
    "rcr",
    "sxs"
], ['x', BlockID.transformerHV, 0, 'm', ItemID.magnetron, 0, 's', ItemID.superconductor, 0, 'c', BlockID.teslaCoil, 0, 'r', ItemID.plateReinforcedIridium, 0]);
ItemRegistry.registerItem(new AdvancedJetpack());
ItemRegistry.registerItem(new AdvancedNanoChestplate());
ItemRegistry.registerItem(new UltimateLappack());
ItemRegistry.registerItem(new GraviChestplate());
ItemRegistry.registerItem(new AdvancedChainsaw());
ItemRegistry.registerItem(new AdvancedDrill());
ItemRegistry.registerItem(new GraviTool());
ItemRegistry.registerItem(new Vajra());
Callback.addCallback("PreLoaded", function () {
    Recipes.addShaped({ id: ItemID.advJetpack, count: 1, data: Item.getMaxDamage(ItemID.advJetpack) }, [
        "cjc",
        "bab",
        "oxo"
    ], ['x', ItemID.circuitAdvanced, 0, 'j', ItemID.jetpack, -1, 'a', ItemID.lappack, -1, 'b', ItemID.engineBoost, 0, 'c', ItemID.carbonPlate, 0, 'o', ItemID.cableOptic, 0], ChargeItemRegistry.transferEnergy);
    Recipes.addShaped({ id: ItemID.advNanoChestplate, count: 1, data: Item.getMaxDamage(ItemID.advNanoChestplate) }, [
        "cjc",
        "cnc",
        "oxo"
    ], ['x', ItemID.circuitAdvanced, 0, 'n', ItemID.nanoChestplate, -1, 'j', ItemID.advJetpack, -1, 'c', ItemID.carbonPlate, 0, 'o', ItemID.cableOptic, 0], ChargeItemRegistry.transferEnergy);
    if (__config__.getBool("change_quantum_suit_recipe")) {
        Recipes.deleteRecipe({ id: ItemID.quantumChestplate, count: 1, data: Item.getMaxDamage(ItemID.quantumChestplate) });
        Recipes.addShaped({ id: ItemID.quantumChestplate, count: 1, data: Item.getMaxDamage(ItemID.quantumChestplate) }, [
            "bnb",
            "a#a",
            "aba"
        ], ['#', ItemID.storageLapotronCrystal, -1, 'n', ItemID.advNanoChestplate, -1, 'a', ItemID.plateReinforcedIridium, 0, 'b', ItemID.plateAlloy, 0], ChargeItemRegistry.transferEnergy);
    }
    Recipes.addShaped({ id: ItemID.ultimateLappack, count: 1, data: Item.getMaxDamage(ItemID.ultimateLappack) }, [
        "aba",
        "aea",
        "asa"
    ], ['a', ItemID.storageLapotronCrystal, -1, 'e', ItemID.lappack, -1, 'b', ItemID.plateReinforcedIridium, 0, 's', ItemID.superconductor, 0], ChargeItemRegistry.transferEnergy);
    Recipes.addShaped({ id: ItemID.graviChestplate, count: 1, data: Item.getMaxDamage(ItemID.graviChestplate) }, [
        "sqs",
        "gxg",
        "sus"
    ], ['x', BlockID.transformerHV, 0, 'q', ItemID.quantumChestplate, -1, 'u', ItemID.ultimateLappack, -1, 'g', ItemID.graviEngine, 0, 's', ItemID.superconductor, 0], ChargeItemRegistry.transferEnergy);
    Recipes.addShaped({ id: ItemID.graviTool, count: 1, data: Item.getMaxDamage(ItemID.graviTool) }, [
        "aha",
        "beb",
        "wct"
    ], ['e', ItemID.storageCrystal, -1, 'h', ItemID.electricHoe, -1, 't', ItemID.electricTreetap, -1, 'w', ItemID.electricWrench, -1, 'a', ItemID.carbonPlate, 0, 'b', ItemID.plateAlloy, 0, 'c', ItemID.circuitAdvanced, 0], ChargeItemRegistry.transferEnergy);
    Recipes.addShaped({ id: ItemID.advancedChainsaw, count: 1, data: Item.getMaxDamage(ItemID.advancedChainsaw) }, [
        " d ",
        "asa",
        "cac"
    ], ['s', ItemID.chainsaw, -1, 'a', ItemID.upgradeOverclocker, -1, 'c', ItemID.circuitBasic, -1, 'd', 264, 0], ChargeItemRegistry.transferEnergy);
    Recipes.addShaped({ id: ItemID.advancedDDrill, count: 1, data: Item.getMaxDamage(ItemID.advancedDDrill) }, [
        "ada",
        "cac"
    ], ['d', ItemID.diamondDrill, -1, 'a', ItemID.upgradeOverclocker, -1, 'c', ItemID.circuitBasic, -1], ChargeItemRegistry.transferEnergy);
    if (__config__.getBool("change_iridium_drill_recipe")) {
        Recipes.deleteRecipe({ id: ItemID.iridiumDrill, count: 1, data: Item.getMaxDamage(ItemID.iridiumDrill) });
        Recipes.addShaped({ id: ItemID.iridiumDrill, count: 1, data: Item.getMaxDamage(ItemID.iridiumDrill) }, [
            " a ",
            "ada",
            " e "
        ], ['d', ItemID.advancedDDrill, -1, 'e', ItemID.storageCrystal, -1, 'a', ItemID.plateReinforcedIridium, 0], ChargeItemRegistry.transferEnergy);
    }
    Recipes.addShaped({ id: ItemID.vajra, count: 1, data: Item.getMaxDamage(ItemID.vajra) }, [
        "mem",
        "c#c",
        "axa"
    ], ['#', ItemID.vajraCore, 0, 'x', ItemID.storageLapotronCrystal, -1, 'e', ItemID.storageCrystal, -1, 'a', ItemID.plateAlloy, 0, 'b', ItemID.carbonPlate, 0, 'm', ItemID.plateIron, 0], ChargeItemRegistry.transferEnergy);
});
