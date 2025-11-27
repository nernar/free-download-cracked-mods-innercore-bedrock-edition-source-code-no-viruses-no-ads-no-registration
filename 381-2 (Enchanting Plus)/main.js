var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
IMPORT("BookModel");
IMPORT("EnhancedRecipes");
var Color = android.graphics.Color;
var EnchID = Native.Enchantment;
var EnchType = Native.EnchantType;
var ParticleID = Native.ParticleType;
var spawnParticleRing = function (id, x, y, z, vx, vy, vz, step, data) {
    for (var d = 0; d < Math.PI * 2; d += step) {
        Particles.addParticle(id, x + Math.cos(d), y, z + Math.sin(d), vx, vy, vz, data);
    }
};
Callback.addCallback("PreLoaded", function () {
    var Bitmap = android.graphics.Bitmap;
    var bmp1 = new Bitmap.createBitmap(1, 1, Bitmap.Config.ARGB_8888);
    var bmp2 = new Bitmap.createBitmap(1, 1, Bitmap.Config.ARGB_8888);
    bmp1.setPixel(0, 0, Color.parseColor("#445aaeae"));
    bmp2.setPixel(0, 0, Color.parseColor("#44d10841"));
    UI.TextureSource.put("eplus.bg_available", bmp1);
    UI.TextureSource.put("eplus.bg_lock", bmp2);
});
var Enchantment = /** @class */ (function () {
    function Enchantment(id, name, maxLv, weight, type, special) {
        this.id = id;
        this.name = name;
        this.maxLv = maxLv;
        this.weight = weight;
        this.type = type;
        this.isCurse = false;
        this.isTreasure = false;
        switch (special) {
            case "curse":
                this.isCurse = true;
                break;
            case "treasure":
                this.isTreasure = true;
                break;
        }
        this.hate = {};
    }
    Enchantment.incompatibilities = function () {
        var enchants = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            enchants[_i] = arguments[_i];
        }
        var i;
        var j;
        for (i = 0; i < enchants.length; i++) {
            for (j = 0; j < enchants.length; j++) {
                if (i !== j) {
                    this.list[enchants[i]].hate[enchants[j]] = true;
                }
            }
        }
    };
    Enchantment.prototype.getName = function (lv) {
        return this.name + " " + ["", "I", "II", "III", "IV", "V"][lv];
    };
    Enchantment.prototype.getMaxLevel = function () {
        return this.maxLv;
    };
    Enchantment.prototype.getWeight = function () {
        return this.weight;
    };
    Enchantment.prototype.canApply = function (type) {
        return !!(this.type & type);
    };
    Enchantment.prototype.isImcompatibleWith = function (list) {
        for (var id in list) {
            if (this.hate[id]) {
                return true;
            }
        }
        return false;
    };
    Enchantment.list = [
        new Enchantment(0, "Protection", 4, 10, 15 /* ARMOR */),
        new Enchantment(1, "Fire Protection", 4, 5, 15 /* ARMOR */),
        new Enchantment(2, "Feather Falling", 4, 5, 8 /* ARMOR_FEET */),
        new Enchantment(3, "Blast Protection", 4, 2, 15 /* ARMOR */),
        new Enchantment(4, "Projectile Protection", 4, 5, 15 /* ARMOR */),
        new Enchantment(5, "Thorns", 3, 1, 2 /* ARMOR_TORSO */),
        new Enchantment(6, "Respiration", 3, 2, 1 /* ARMOR_HEAD */),
        new Enchantment(7, "Aqua Affinity", 1, 2, 1 /* ARMOR_HEAD */),
        new Enchantment(8, "Depth Strider", 3, 2, 8 /* ARMOR_FEET */),
        new Enchantment(9, "Sharpness", 5, 10, 16 /* WEAPON */),
        new Enchantment(10, "Smite", 5, 5, 16 /* WEAPON */),
        new Enchantment(11, "Bane of Arthropods", 5, 5, 16 /* WEAPON */),
        new Enchantment(12, "Knockback", 2, 5, 16 /* WEAPON */),
        new Enchantment(13, "Fire Aspect", 2, 2, 16 /* WEAPON */),
        new Enchantment(14, "Looting", 3, 2, 16 /* WEAPON */),
        new Enchantment(15, "Efficiency", 5, 10, 32 /* DIGGER */),
        new Enchantment(16, "Silk Touch", 1, 1, 32 /* DIGGER */),
        new Enchantment(17, "Unbreaking", 3, 5, 1023 /* ALL */),
        new Enchantment(18, "Fortune", 3, 2, 32 /* DIGGER */),
        new Enchantment(19, "Power", 5, 10, 64 /* BOW */),
        new Enchantment(20, "Punch", 2, 2, 64 /* BOW */),
        new Enchantment(21, "Flame", 1, 2, 64 /* BOW */),
        new Enchantment(22, "Infinity", 1, 1, 64 /* BOW */),
        new Enchantment(23, "Luck of the Sea", 3, 2, 128 /* FISHING_ROD */),
        new Enchantment(24, "Lure", 3, 2, 128 /* FISHING_ROD */),
        new Enchantment(25, "Frost Walker", 2, 2, 8 /* ARMOR_FEET */, "treasure"),
        new Enchantment(26, "Mending", 1, 2, 1023 /* ALL */, "treasure"),
        new Enchantment(27, "Curse of Binding", 1, 1, 15 /* ARMOR */, "curse"),
        new Enchantment(28, "Curse of Vanishing", 1, 1, 1023 /* ALL */, "curse"),
        new Enchantment(29, "Impaling", 5, 2, 256 /* TRIDENT */),
        new Enchantment(30, "Riptide", 3, 2, 256 /* TRIDENT */),
        new Enchantment(31, "Loyalty", 3, 5, 256 /* TRIDENT */),
        new Enchantment(32, "Channeling", 1, 1, 256 /* TRIDENT */)
    ];
    return Enchantment;
}());
Enchantment.incompatibilities(EnchID.PROTECTION, EnchID.FIRE_PROTECTION, EnchID.BLAST_PROTECTION, EnchID.PROJECTILE_PROTECTION);
Enchantment.incompatibilities(EnchID.DEPTH_STRIDER, EnchID.FROST_WALKER);
Enchantment.incompatibilities(EnchID.SHARPNESS, EnchID.SMITE, EnchID.BANE_OF_ARTHROPODS);
Enchantment.incompatibilities(EnchID.FORTUNE, EnchID.SILK_TOUCH);
Enchantment.incompatibilities(EnchID.MENDING, EnchID.INFINITY);
Enchantment.incompatibilities(EnchID.RIPTIDE, EnchID.LOYALTY, EnchID.CHANNELING);
var EnchantmentItem = /** @class */ (function () {
    function EnchantmentItem() {
    }
    EnchantmentItem.setType = function (id, type) {
        this.type[id] = type;
    };
    EnchantmentItem.getAvailableList = function (id, activeCurse, activeTreasure) {
        var _this = this;
        return Enchantment.list.filter(function (enchant) { return enchant.canApply(_this.type[id]) && (!enchant.isCurse || activeCurse) && (!enchant.isTreasure || activeTreasure); });
    };
    EnchantmentItem.isExist = function (id) {
        return id in this.type;
    };
    EnchantmentItem.type = {};
    return EnchantmentItem;
}());
EnchantmentItem.setType(VanillaItemID.leather_helmet, 1 /* ARMOR_HEAD */);
EnchantmentItem.setType(VanillaItemID.chainmail_helmet, 1 /* ARMOR_HEAD */);
EnchantmentItem.setType(VanillaItemID.iron_helmet, 1 /* ARMOR_HEAD */);
EnchantmentItem.setType(VanillaItemID.golden_helmet, 1 /* ARMOR_HEAD */);
EnchantmentItem.setType(VanillaItemID.diamond_helmet, 1 /* ARMOR_HEAD */);
EnchantmentItem.setType(VanillaItemID.turtle_helmet, 1 /* ARMOR_HEAD */);
EnchantmentItem.setType(VanillaItemID.leather_chestplate, 2 /* ARMOR_TORSO */);
EnchantmentItem.setType(VanillaItemID.chainmail_chestplate, 2 /* ARMOR_TORSO */);
EnchantmentItem.setType(VanillaItemID.iron_chestplate, 2 /* ARMOR_TORSO */);
EnchantmentItem.setType(VanillaItemID.golden_chestplate, 2 /* ARMOR_TORSO */);
EnchantmentItem.setType(VanillaItemID.diamond_chestplate, 2 /* ARMOR_TORSO */);
EnchantmentItem.setType(VanillaItemID.leather_leggings, 4 /* ARMOR_LEGS */);
EnchantmentItem.setType(VanillaItemID.chainmail_leggings, 4 /* ARMOR_LEGS */);
EnchantmentItem.setType(VanillaItemID.iron_leggings, 4 /* ARMOR_LEGS */);
EnchantmentItem.setType(VanillaItemID.golden_leggings, 4 /* ARMOR_LEGS */);
EnchantmentItem.setType(VanillaItemID.diamond_leggings, 4 /* ARMOR_LEGS */);
EnchantmentItem.setType(VanillaItemID.leather_boots, 8 /* ARMOR_FEET */);
EnchantmentItem.setType(VanillaItemID.chainmail_boots, 8 /* ARMOR_FEET */);
EnchantmentItem.setType(VanillaItemID.iron_boots, 8 /* ARMOR_FEET */);
EnchantmentItem.setType(VanillaItemID.golden_boots, 8 /* ARMOR_FEET */);
EnchantmentItem.setType(VanillaItemID.diamond_boots, 8 /* ARMOR_FEET */);
EnchantmentItem.setType(VanillaItemID.wooden_sword, 16 /* WEAPON */);
EnchantmentItem.setType(VanillaItemID.stone_sword, 16 /* WEAPON */);
EnchantmentItem.setType(VanillaItemID.iron_sword, 16 /* WEAPON */);
EnchantmentItem.setType(VanillaItemID.golden_sword, 16 /* WEAPON */);
EnchantmentItem.setType(VanillaItemID.diamond_sword, 16 /* WEAPON */);
EnchantmentItem.setType(VanillaItemID.wooden_shovel, 32 /* DIGGER */);
EnchantmentItem.setType(VanillaItemID.stone_shovel, 32 /* DIGGER */);
EnchantmentItem.setType(VanillaItemID.iron_shovel, 32 /* DIGGER */);
EnchantmentItem.setType(VanillaItemID.golden_shovel, 32 /* DIGGER */);
EnchantmentItem.setType(VanillaItemID.diamond_shovel, 32 /* DIGGER */);
EnchantmentItem.setType(VanillaItemID.wooden_pickaxe, 32 /* DIGGER */);
EnchantmentItem.setType(VanillaItemID.stone_pickaxe, 32 /* DIGGER */);
EnchantmentItem.setType(VanillaItemID.iron_pickaxe, 32 /* DIGGER */);
EnchantmentItem.setType(VanillaItemID.golden_pickaxe, 32 /* DIGGER */);
EnchantmentItem.setType(VanillaItemID.diamond_pickaxe, 32 /* DIGGER */);
EnchantmentItem.setType(VanillaItemID.wooden_axe, 32 /* DIGGER */);
EnchantmentItem.setType(VanillaItemID.stone_axe, 32 /* DIGGER */);
EnchantmentItem.setType(VanillaItemID.iron_axe, 32 /* DIGGER */);
EnchantmentItem.setType(VanillaItemID.golden_axe, 32 /* DIGGER */);
EnchantmentItem.setType(VanillaItemID.diamond_axe, 32 /* DIGGER */);
EnchantmentItem.setType(VanillaItemID.bow, 64 /* BOW */);
EnchantmentItem.setType(VanillaItemID.fishing_rod, 128 /* FISHING_ROD */);
EnchantmentItem.setType(VanillaItemID.trident, 256 /* TRIDENT */);
var _a;
var EnchLogic = /** @class */ (function () {
    function EnchLogic() {
    }
    EnchLogic.getEnchantingPower = function (posX, posY, posZ) {
        var power = 0;
        var x;
        var y;
        var z;
        var block;
        for (x = -2; x <= 2; x++) {
            for (z = -2; z <= 2; z++) {
                if (x > -2 && x < 2 && z === -1) {
                    z = 2;
                }
                if (World.getBlockID(posX + x / 2, posY, posZ + z / 2) === 0) {
                    for (y = 0; y <= 1; y++) {
                        block = World.getBlockID(posX + x, posY + y, posZ + z);
                        if (block === VanillaBlockID.bookshelf) {
                            power++;
                        }
                        else if (block === BlockID.eplus_decoration) {
                            power += this.config.floatingBookPower;
                        }
                    }
                }
            }
        }
        return Math.min(30, power);
    };
    EnchLogic.canAddTreasure = function (posX, posY, posZ) {
        var x;
        var z;
        for (x = -1; x <= 1; x++) {
            for (z = -1; z <= 1; z++) {
                if (!this.beaconBase[World.getBlockID(posX + x, posY - 1, posZ + z)]) {
                    return false;
                }
            }
        }
        return true;
    };
    EnchLogic.canAddCurse = function () {
        var time = World.getWorldTime();
        var moonPhase = (time / 24000 % 8 + 8) & 7;
        var angle = (time % 24000 + 1) / 24000 - 0.25;
        angle < 0 && angle++;
        angle > 1 && angle--;
        var save = angle;
        angle = 1 - (Math.cos(angle * Math.PI) + 1) / 2;
        angle = save + (angle - save) / 3;
        return moonPhase === 0 && angle > 0.4 && angle < 0.6;
    };
    EnchLogic.calculateNewEnchCost = function (enchant, level) {
        var cost = this.config.baseCost;
        cost *= Math.max(11 - enchant.getWeight(), 1);
        cost *= level;
        cost *= this.config.costFactor;
        if (enchant.isCurse) {
            cost *= this.config.curseFactor;
        }
        else if (enchant.isTreasure) {
            cost *= this.config.treasureFactor;
        }
        return cost;
    };
    EnchLogic.removeExperience = function (xp) {
        var lv = Player.getLevel();
        var cap = Player.getExperience() - this.getExperienceForLevels(lv);
        while (cap < xp) {
            cap += this.getExperienceForLevels(lv) - this.getExperienceForLevels(lv - 1);
            lv--;
        }
        Player.setLevel(lv);
        Player.setExperience(cap - xp);
    };
    EnchLogic.getExperienceForLevels = function (lv) {
        if (lv < 17) {
            return lv * lv + 6 * lv;
        }
        if (lv < 32) {
            return (2.5 * lv * lv - 40.5 * lv + 360) | 0;
        }
        return (4.5 * lv * lv - 162.5 * lv + 2220) | 0;
    };
    var _b, _c, _d, _e, _f;
    EnchLogic.config = {
        baseCost: (_b = __config__.getNumber("baseCost") - 0) !== null && _b !== void 0 ? _b : 45,
        costFactor: (_c = __config__.getNumber("costFactor") - 0) !== null && _c !== void 0 ? _c : 1.0,
        curseFactor: (_d = __config__.getNumber("curseFactor") - 0) !== null && _d !== void 0 ? _d : 3.0,
        treasureFactor: (_e = __config__.getNumber("treasureFactor") - 0) !== null && _e !== void 0 ? _e : 4.0,
        floatingBookPower: (_f = __config__.getNumber("floatingBookPower") - 0) !== null && _f !== void 0 ? _f : 1.0
    };
    EnchLogic.beaconBase = (_a = {},
        _a[VanillaBlockID.iron_block] = true,
        _a[VanillaBlockID.gold_block] = true,
        _a[VanillaBlockID.diamond_block] = true,
        _a[VanillaBlockID.emerald_block] = true,
        _a);
    return EnchLogic;
}());
IDRegistry.genBlockID("eplus_decoration");
Block.createBlock("eplus_decoration", [{ name: "eplus decoration", texture: [["obsidian", 0]] }]);
Block.setShape(BlockID.eplus_decoration, 6 / 16, 0, 6 / 16, 10 / 16, 0.5 / 16, 10 / 16);
Block.registerDropFunction(BlockID.eplus_decoration, function (coords) {
    var tile = World.getTileEntity(coords.x, coords.y, coords.z);
    if (tile && tile.data.skin in ItemID) {
        return [[ItemID[tile.data.skin], 1, 0]];
    }
    return [];
});
var FloatingBook = /** @class */ (function () {
    function FloatingBook() {
        this.defaultValues = {
            skin: "eplus_book_advanced"
        };
    }
    FloatingBook.prototype.init = function () {
        this.bookModel = new BookModel(this.x + 0.5, this.y + 0.75, this.z + 0.5, "model/" + this.data.skin + ".png");
        this.bookModel.spawn();
        delete this.liquidStorage;
    };
    FloatingBook.prototype.destroy = function () {
        this.bookModel && this.bookModel.destroy();
    };
    return FloatingBook;
}());
TileEntity.registerPrototype(BlockID.eplus_decoration, new FloatingBook());
IDRegistry.genBlockID("eplus_table");
Block.createBlock("eplus_table", [{ name: "Advanced Enchantment Table", texture: [["eplus_table", 0], ["eplus_table", 1], ["eplus_table", 2]], inCreative: true }]);
Block.setShape(BlockID.eplus_table, 0, 0, 0, 1, 0.75, 1);
Block.setDestroyTime(BlockID.eplus_table, 5);
ToolAPI.registerBlockMaterial(BlockID.eplus_table, "stone");
Recipes2.addShaped(BlockID.eplus_table, "aba:cdc:aea", { a: VanillaItemID.gold_ingot, b: VanillaItemID.writable_book, c: VanillaBlockID.obsidian, d: VanillaBlockID.enchanting_table, e: VanillaItemID.ender_eye });
Block.setAnimateTickCallback(BlockID.eplus_table, function (posX, posY, posZ) {
    var x;
    var y;
    var z;
    var block;
    for (x = -2; x <= 2; x++) {
        for (z = -2; z <= 2; z++) {
            if (x > -2 && x < 2 && z === -1) {
                z = 2;
            }
            if ((Math.random() * 16 | 0) === 0 && World.getBlockID(posX + x / 2, posY, posZ + z / 2) === 0) {
                for (y = 0; y <= 1; y++) {
                    block = World.getBlockID(posX + x, posY + y, posZ + z);
                    if (block === VanillaBlockID.bookshelf || block === BlockID.eplus_decoration) {
                        Particles.addParticle(ParticleID.enchantmenttable, posX + 0.5, posY + 2, posZ + 0.5, x + Math.random() - 0.5, y - Math.random() - 1, z + Math.random() - 0.5);
                    }
                }
            }
        }
    }
});
var scrollX;
var scrollY;
var scrollH;
var TestObj = {
    key: 0
};
var windowTable = (function () {
    var scale = 3;
    var enchLabelX = 450;
    var enchLabelY = 50;
    var enchLabelW = 144 * scale;
    var enchLabelH = enchLabelW / 2;
    scrollX = enchLabelX + scale * 3;
    scrollY = enchLabelY + scale;
    scrollH = 18 * scale;
    var template = {
        slot: { type: "slot", x: enchLabelX - 16 * scale - 20, size: 16 * scale },
        button: { type: "button", bitmap: "classic_button_up", bitmap2: "classic_button_down", scale: scale },
        image: { type: "image", x: enchLabelX + enchLabelW + 20, z: 1, scale: scale },
        line: { type: "line", x1: enchLabelX + scale, x2: enchLabelX + enchLabelW - scale, color: Color.parseColor("#616161"), width: 2 * scale },
        scale: { type: "scale", x: enchLabelX + scale, bitmap: "eplus.bg_available", width: enchLabelW - scale * 2, height: 16 * scale },
        text: { type: "text", x: enchLabelX + 8 * scale, z: 1, font: { size: 8 * scale, color: Color.parseColor("#55aaff00") } },
        scroll: {
            type: "scroll",
            x: scrollX, y: 1000, z: 2,
            bitmapHandle: "eplus.handle", bitmapHandleHover: "eplus.handle_hover",
            bitmapBg: "_default_slot_empty", bitmapBgHover: "_default_slot_empty",
            width: 16 * scale,
            length: (enchLabelW - scale * 2) - (16 * scale) * 5 / 16,
            min: 0,
            isInt: true
        }
    };
    var elements = {
        slot: __assign(__assign({}, template.slot), { y: enchLabelY }),
        icon: __assign(__assign({}, template.slot), { y: enchLabelY + scrollH, z: 1, visual: true, bitmap: "_default_slot_empty", source: { id: 0, count: 0, data: 0 } }),
        buttonEnchant: __assign(__assign({}, template.button), { x: enchLabelX - 16 * scale - 20, y: enchLabelY + scrollH, clicker: {
                onClick: function (container, tile) {
                    tile.enchantItem();
                }
            } }),
        buttonUp: __assign(__assign({}, template.button), { x: enchLabelX + enchLabelW + 20, y: enchLabelY + scale, clicker: {
                onClick: function (container, tile) {
                    tile.data.page = Math.max(0, tile.data.page - 1);
                },
                onLongClick: function (container, tile) {
                    tile.data.page = 0;
                }
            } }),
        buttonDown: __assign(__assign({}, template.button), { x: enchLabelX + enchLabelW + 20, y: enchLabelY + enchLabelH - 16 * scale - scale, clicker: {
                onClick: function (container, tile) {
                    var max = tile.getMaxPage();
                    tile.data.page = Math.min(max, tile.data.page + 1);
                },
                onLongClick: function (container, tile) {
                    var max = tile.getMaxPage();
                    tile.data.page = max;
                }
            } }),
        iconUp: __assign(__assign({}, template.image), { y: enchLabelY, bitmap: "eplus.triangle_up" }),
        iconDown: __assign(__assign({}, template.image), { y: enchLabelY + enchLabelH - 16 * scale, bitmap: "eplus.triangle_down" }),
        scale0: __assign(__assign({}, template.scale), { y: enchLabelY + scale + scrollH * 0 }),
        scale1: __assign(__assign({}, template.scale), { y: enchLabelY + scale + scrollH * 1 }),
        scale2: __assign(__assign({}, template.scale), { y: enchLabelY + scale + scrollH * 2 }),
        scale3: __assign(__assign({}, template.scale), { y: enchLabelY + scale + scrollH * 3 }),
        text0: __assign(__assign({}, template.text), { y: enchLabelY + scale + scrollH * 0 + 3 * scale }),
        text1: __assign(__assign({}, template.text), { y: enchLabelY + scale + scrollH * 1 + 3 * scale }),
        text2: __assign(__assign({}, template.text), { y: enchLabelY + scale + scrollH * 2 + 3 * scale }),
        text3: __assign(__assign({}, template.text), { y: enchLabelY + scale + scrollH * 3 + 3 * scale }),
        textInfo: { type: "text", x: enchLabelX, y: enchLabelY + enchLabelH + 10, font: { color: Color.BLACK, size: scale * 8 }, multiline: true },
        textTips: { type: "text", x: enchLabelX, y: enchLabelY + enchLabelH + 100, font: { color: Color.GRAY, size: scale * 6 }, multiline: true }
    };
    Enchantment.list.forEach(function (enchant) {
        var key = "scroll" + enchant.id;
        var max = enchant.getMaxLevel();
        elements[key] = __assign(__assign({}, template.scroll), { max: max, onNewValue: function (value, container, elem) {
                elem.setBinding("lv", value);
            }, onTouchEvent: function (elem, event) {
                try {
                    var tile = elem.window.getContainer().getParent();
                    var oldEnch = tile.getInitialEnchants();
                    var newEnch = tile.getNewEnchants();
                    event.localX = enchant.isImcompatibleWith(newEnch) ? 0 : Math.max(enchant.isCurse ? 0 : (oldEnch[enchant.id] || 0), Math.round(event.localX * max)) / max;
                }
                catch (e) {
                    alert("[TouchEvent]\n" + e);
                }
            } });
    });
    var window = new UI.StandartWindow({
        standard: {
            header: { text: { text: "Advanced Enchantment Table" } },
            inventory: { standard: true },
            background: { standard: true }
        },
        drawing: [
            { type: "frame", x: enchLabelX, y: enchLabelY, width: enchLabelW, height: enchLabelH, bitmap: "classic_slot", scale: scale },
            __assign(__assign({}, template.line), { y1: enchLabelY + scale + 17 * scale, y2: enchLabelY + scale + 17 * scale }),
            __assign(__assign({}, template.line), { y1: enchLabelY + scale + 35 * scale, y2: enchLabelY + scale + 35 * scale }),
            __assign(__assign({}, template.line), { y1: enchLabelY + scale + 53 * scale, y2: enchLabelY + scale + 53 * scale })
        ],
        elements: elements
    });
    var addLineBreaks = function (text) {
        var array = [];
        var words = text.split(" ");
        var i = 0;
        var line;
        var count;
        while (i < words.length) {
            line = [];
            count = 0;
            while (i < words.length && count + words[i].length <= 35) {
                line.push(words[i]);
                count += words[i].length;
                i++;
            }
            array.push(line.join(" "));
        }
        return array.join("\n");
    };
    var tips = [
        "You can place bookshelves around to reduce the cost of enchantments.",
        "Treasure enchantments require a floor of prescious materials.",
        "Curses can only be modified near midnight on nights with a full moon.",
        "The advanced table will store it's inventory like a chest."
    ].map(function (text) { return addLineBreaks(text); });
    window.getWindow("main").setEventListener({
        onOpen: function (win) {
            var container = win.getContainer();
            var tile = container.getParent();
            container.setBinding("icon", "source", { id: tile.data.activeCurse ? VanillaItemID.bone : VanillaItemID.enchanted_book, count: 1, data: 0 });
            container.setBinding("textTips", "text", tips[Math.random() * tips.length | 0]);
        }
    });
    return window;
})();
var AdvTable = /** @class */ (function (_super) {
    __extends(AdvTable, _super);
    function AdvTable() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.defaultValues = {
            skin: "eplus_book_advanced",
            page: 0,
            activeCurse: false,
            activeTreasure: false
        };
        return _this;
    }
    AdvTable.prototype.getGuiScreen = function () {
        return windowTable;
    };
    AdvTable.prototype.getAvailableList = function () {
        var slot = this.container.getSlot("slot");
        return EnchantmentItem.getAvailableList(slot.id, this.data.activeCurse, this.data.activeTreasure);
    };
    AdvTable.prototype.getMaxPage = function () {
        return Math.max(0, this.getAvailableList().length - 4);
    };
    AdvTable.prototype.getInitialEnchants = function () {
        var slot = this.container.getSlot("slot");
        if (slot.extra && slot.extra.isEnchanted()) {
            return slot.extra.getEnchants();
        }
        return {};
    };
    AdvTable.prototype.getNewEnchants = function () {
        var _this = this;
        var list = this.getAvailableList();
        var obj = {};
        Enchantment.list.forEach(function (enchant) {
            var lv = _this.container.getBinding("scroll" + enchant.id, "lv") | 0;
            if (lv > 0 && list.some(function (e) { return e.id === enchant.id; })) {
                obj[enchant.id] = lv;
            }
        });
        return obj;
    };
    AdvTable.prototype.calcCost = function () {
        var oldEnch = this.getInitialEnchants();
        var newEnch = this.getNewEnchants();
        var cost = Enchantment.list.reduce(function (val, enchant) { return val + EnchLogic.calculateNewEnchCost(enchant, Math.abs((newEnch[enchant.id] || 0) - (oldEnch[enchant.id] || 0))); }, 0);
        cost *= (100 - EnchLogic.getEnchantingPower(this.x, this.y, this.z)) / 100;
        return cost | 0;
    };
    AdvTable.prototype.tick = function () {
        var _this = this;
        if ((World.getThreadTime() & 63) === 0) {
            this.data.activeCurse = EnchLogic.canAddCurse();
            this.data.activeTreasure = EnchLogic.canAddTreasure(this.x, this.y, this.z);
        }
        if (this.data.activeCurse) {
            spawnParticleRing(ParticleID.portal, this.x + 0.5, this.y + 1, this.z + 0.5, 0, -1, 0, 0.45);
        }
        else if (this.data.activeTreasure && Math.random() < 0.5) {
            spawnParticleRing(ParticleID.redstone, this.x + 0.5, this.y + 1, this.z + 0.5, World.getThreadTime() & 1 ? 0 : -1, 1, 0, 0.45);
        }
        if (this.container.isOpened()) {
            var list = this.getAvailableList();
            var oldEnch_1 = this.getInitialEnchants();
            var newEnch_1 = this.getNewEnchants();
            if (list.length === 0) {
                this.data.page = 0;
            }
            var visible_1 = list.slice(this.data.page, this.data.page + 4);
            Enchantment.list.forEach(function (enchant) {
                var index = visible_1.findIndex(function (e) { return e.id === enchant.id; });
                var elem = _this.container.getElement("scroll" + enchant.id);
                if (elem) {
                    elem.setPosition(scrollX, index === -1 ? 1000 : scrollY + scrollH * index);
                    elem.isTouched || elem.setBinding("raw-value", java.lang.Float.valueOf(Math.max(enchant.isCurse ? 0 : (oldEnch_1[enchant.id] || 0), newEnch_1[enchant.id] || 0) / enchant.getMaxLevel()));
                }
            });
            for (var i = 0; i < 4; i++) {
                if (visible_1[i]) {
                    this.container.setBinding("scale" + i, "texture", visible_1[i].isImcompatibleWith(newEnch_1) ? "eplus.bg_lock" : "eplus.bg_available");
                    this.container.setBinding("scale" + i, "value", 1);
                    this.container.setText("text" + i, visible_1[i].getName(this.container.getBinding("scroll" + visible_1[i].id, "lv") | 0));
                }
                else {
                    this.container.setBinding("scale" + i, "value", 0);
                    this.container.setText("text" + i, "");
                }
            }
            this.container.setText("textInfo", list.length === 0 ?
                "Place an item in to see\navailable enchantments." :
                "EXP: " + Player.getExperience() + "\nCost: " + this.calcCost() + "\nDiscount: " + EnchLogic.getEnchantingPower(this.x, this.y, this.z) + "%");
        }
    };
    AdvTable.prototype.enchantItem = function () {
        var slot = this.container.getSlot("slot");
        if (slot.id) {
            var cost = this.calcCost();
            if (Player.getExperience() >= cost) {
                var newEnch = this.getNewEnchants();
                if (slot.extra) {
                    slot.extra.removeAllEnchants();
                }
                else {
                    slot.extra = new ItemExtraData();
                }
                for (var id in newEnch) {
                    slot.extra.addEnchant(parseInt(id), newEnch[id]);
                }
                EnchLogic.removeExperience(cost);
            }
            else {
                alert("You need more EXP to do this enchantment.");
            }
        }
    };
    return AdvTable;
}(FloatingBook));
TileEntity.registerPrototype(BlockID.eplus_table, new AdvTable());
var placeBookFunc = function (coords, item, block) {
    var place = World.canTileBeReplaced(block.id, block.data) ? coords : coords.relative;
    World.setBlock(place.x, place.y, place.z, BlockID.eplus_decoration);
    World.addTileEntity(place.x, place.y, place.z).data.skin = IDRegistry.getNameByID(item.id);
};
IDRegistry.genItemID("eplus_book_advanced");
Item.createItem("eplus_book_advanced", "Enchanting Plus Book", { name: "eplus_book_advanced" });
Item.registerUseFunction(ItemID.eplus_book_advanced, placeBookFunc);
Recipes2.addShaped(ItemID.eplus_book_advanced, "_a_:aba:_a_", { a: VanillaItemID.glowstone_dust, b: VanillaItemID.enchanted_book });
IDRegistry.genItemID("eplus_book_vanilla");
Item.createItem("eplus_book_vanilla", "Enchanting Book", { name: "eplus_book_vanilla" });
Item.registerUseFunction(ItemID.eplus_book_vanilla, placeBookFunc);
Recipes2.addShaped(ItemID.eplus_book_vanilla, "_a_:aba:_a_", { a: VanillaItemID.book, b: VanillaItemID.enchanted_book });
IDRegistry.genItemID("eplus_book_prismarine");
Item.createItem("eplus_book_prismarine", "Prismarine Book", { name: "eplus_book_prismarine" });
Item.registerUseFunction(ItemID.eplus_book_prismarine, placeBookFunc);
Recipes2.addShaped(ItemID.eplus_book_prismarine, "_a_:aba:_a_", { a: VanillaItemID.prismarine_shard, b: VanillaItemID.enchanted_book });
IDRegistry.genItemID("eplus_book_nether");
Item.createItem("eplus_book_nether", "Nether Book", { name: "eplus_book_nether" });
Item.registerUseFunction(ItemID.eplus_book_nether, placeBookFunc);
Recipes2.addShaped(ItemID.eplus_book_nether, "_a_:aba:_a_", { a: VanillaItemID.netherbrick, b: VanillaItemID.enchanted_book });
IDRegistry.genItemID("eplus_book_tartarite");
Item.createItem("eplus_book_tartarite", "Tartarite Book", { name: "eplus_book_tartarite" });
Item.registerUseFunction(ItemID.eplus_book_tartarite, placeBookFunc);
Recipes2.addShaped(ItemID.eplus_book_tartarite, "_a_:aba:_a_", { a: VanillaItemID.magma_cream, b: VanillaItemID.enchanted_book });
IDRegistry.genItemID("eplus_book_white");
Item.createItem("eplus_book_white", "Pale Book", { name: "eplus_book_white" });
Item.registerUseFunction(ItemID.eplus_book_white, placeBookFunc);
Recipes2.addShaped(ItemID.eplus_book_white, "_a_:aba:_a_", { a: VanillaItemID.paper, b: VanillaItemID.enchanted_book });
IDRegistry.genItemID("eplus_book_metal");
Item.createItem("eplus_book_metal", "Metal Book", { name: "eplus_book_metal" });
Item.registerUseFunction(ItemID.eplus_book_metal, placeBookFunc);
Recipes2.addShaped(ItemID.eplus_book_metal, "_a_:aba:_a_", { a: VanillaItemID.iron_ingot, b: VanillaItemID.enchanted_book });
Item.addCreativeGroup("eplus_book", "Floating Books", [
    ItemID.eplus_book_advanced,
    ItemID.eplus_book_vanilla,
    ItemID.eplus_book_prismarine,
    ItemID.eplus_book_nether,
    ItemID.eplus_book_tartarite,
    ItemID.eplus_book_white,
    ItemID.eplus_book_metal
]);
IDRegistry.genItemID("eplus_upgrade");
Item.createItem("eplus_upgrade", "Table Upgrade", { name: "eplus_upgrade" });
Recipes2.addShaped(ItemID.eplus_upgrade, "aba:c_c:ada", { a: VanillaItemID.gold_ingot, b: VanillaItemID.writable_book, c: VanillaBlockID.obsidian, d: VanillaItemID.ender_eye });
Item.registerUseFunctionForID(ItemID.eplus_upgrade, function (coords, item, block) {
    if (block.id === VanillaBlockID.enchanting_table) {
        World.setBlock(coords.x, coords.y, coords.z, BlockID.eplus_table, 0);
        World.addTileEntity(coords.x, coords.y, coords.z);
        Player.decreaseCarriedItem();
    }
});
