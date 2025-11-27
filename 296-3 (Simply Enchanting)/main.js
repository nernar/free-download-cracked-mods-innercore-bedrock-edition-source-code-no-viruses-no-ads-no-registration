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
var Color = android.graphics.Color;
var EnchID = Native.Enchantment;
Callback.addCallback("PreLoaded", function () {
    var getA = function (pixel) { return pixel >> 24; };
    var getR = function (pixel) { return pixel >> 16 & 0xff; };
    var getG = function (pixel) { return pixel >> 8 & 0xff; };
    var getB = function (pixel) { return pixel & 0xff; };
    var convertMonochrome = function (bitmap) {
        var bmp = bitmap.copy(android.graphics.Bitmap.Config.ARGB_8888, true);
        var width = bmp.getWidth();
        var height = bmp.getHeight();
        var w;
        var h;
        var pixel;
        var gray;
        for (w = 0; w < width; w++) {
            for (h = 0; h < height; h++) {
                pixel = bmp.getPixel(w, h);
                if (getA(pixel) !== 0) {
                    gray = getR(pixel) * 0.30 + getG(pixel) * 0.59 + getB(pixel) * 0.11;
                    bmp.setPixel(w, h, Color.argb(127, gray, gray, gray));
                }
            }
        }
        return bmp;
    };
    var dir = __packdir__ + "assets/resource_packs/vanilla/textures/";
    var lapis = FileTools.ReadImage(dir + "items/dye_powder_blue.png");
    var book = FileTools.ReadImage(dir + "items/book_normal.png");
    UI.TextureSource.put("icon_grayscale_lapis", convertMonochrome(lapis));
    UI.TextureSource.put("icon_grayscale_book", convertMonochrome(book));
    //UI.TextureSource.put("ui.anvil-plus", FileTools.ReadImage(dir + "ui/anvil-plus.png"));
});
var RecipeManager = /** @class */ (function () {
    function RecipeManager() {
    }
    RecipeManager.getCodeByItem = function (id, data) {
        return data === -1 ? -id : id | (data << 16);
    };
    RecipeManager.getItemByCode = function (code) {
        return code < 0 ? { id: -code, data: -1 } : { id: code & 65535, data: code >> 16 };
    };
    RecipeManager.addRecipe = function (item, enchant, maxLv) {
        this.recipes[typeof item === "number" ? this.getCodeByItem(item, -1) : this.getCodeByItem(item.id, item.data)] = { id: enchant, max: maxLv };
    };
    RecipeManager.isExist = function (id, data) {
        return this.getCodeByItem(id, data) in this.recipes || this.getCodeByItem(id, -1) in this.recipes;
    };
    RecipeManager.getResult = function (id, data) {
        return this.recipes[this.getCodeByItem(id, data)] || this.recipes[this.getCodeByItem(id, -1)];
    };
    RecipeManager.getAllRecipeForRV = function () {
        var list = [];
        var item;
        for (var code in this.recipes) {
            item = this.getItemByCode(parseInt(code));
            list.push({
                input: [{ id: item.id, count: 1, data: item.data === -1 ? 0 : item.data }, { id: VanillaItemID.dye, count: 8, data: 4 }, { id: VanillaItemID.book, count: 1, data: 0 }],
                output: [{ id: VanillaItemID.enchanted_book, count: 1, data: 0 }],
                enchant: this.recipes[code].id
            });
        }
        return list;
    };
    RecipeManager.recipes = {};
    return RecipeManager;
}());
ModAPI.registerAPI("SimplyEnchanting", {
    Recipe: RecipeManager
});
RecipeManager.addRecipe(VanillaBlockID.obsidian, EnchID.PROTECTION, 4);
RecipeManager.addRecipe(VanillaItemID.magma_cream, EnchID.FIRE_PROTECTION, 4);
RecipeManager.addRecipe(VanillaItemID.feather, EnchID.FEATHER_FALLING, 4);
RecipeManager.addRecipe(VanillaItemID.gunpowder, EnchID.BLAST_PROTECTION, 4);
RecipeManager.addRecipe(VanillaItemID.arrow, EnchID.PROJECTILE_PROTECTION, 4);
RecipeManager.addRecipe(VanillaItemID.glass_bottle, EnchID.RESPIRATION, 3);
RecipeManager.addRecipe(VanillaBlockID.waterlily, EnchID.AQUA_AFFINITY, 1);
RecipeManager.addRecipe(VanillaBlockID.cactus, EnchID.THORNS, 3);
RecipeManager.addRecipe(VanillaItemID.iron_ingot, EnchID.DEPTH_STRIDER, 3);
RecipeManager.addRecipe(VanillaBlockID.ice, EnchID.FROST_WALKER, 2);
RecipeManager.addRecipe(VanillaItemID.quartz, EnchID.SHARPNESS, 5);
RecipeManager.addRecipe(VanillaItemID.rotten_flesh, EnchID.SMITE, 5);
RecipeManager.addRecipe(VanillaItemID.spider_eye, EnchID.BANE_OF_ARTHROPODS, 5);
RecipeManager.addRecipe(VanillaBlockID.piston, EnchID.KNOCKBACK, 2);
RecipeManager.addRecipe(VanillaItemID.blaze_powder, EnchID.FIRE_ASPECT, 2);
RecipeManager.addRecipe({ id: VanillaBlockID.skull, data: 0 }, EnchID.LOOTING, 3);
//RecipeManager.addRecipe(VanillaBlockID.tnt, EnchID.SWEEPING, 3);
RecipeManager.addRecipe(VanillaItemID.emerald, EnchID.EFFICIENCY, 5);
RecipeManager.addRecipe(VanillaItemID.diamond, EnchID.SILK_TOUCH, 1);
RecipeManager.addRecipe(VanillaItemID.slime_ball, EnchID.UNBREAKING, 3);
RecipeManager.addRecipe(VanillaItemID.gold_ingot, EnchID.FORTUNE, 3);
RecipeManager.addRecipe(VanillaItemID.flint, EnchID.POWER, 5);
RecipeManager.addRecipe(VanillaItemID.ender_eye, EnchID.PUNCH, 2);
RecipeManager.addRecipe({ id: VanillaItemID.flint_and_steel, data: 0 }, EnchID.FLAME, 1);
RecipeManager.addRecipe(VanillaItemID.ender_pearl, EnchID.INFINITY, 1);
RecipeManager.addRecipe({ id: VanillaItemID.dye, data: 0 }, EnchID.LUCK_OF_THE_SEA, 3);
RecipeManager.addRecipe(VanillaItemID.fish, EnchID.LURE, 3);
RecipeManager.addRecipe(VanillaBlockID.end_stone, EnchID.MENDING, 1);
var RV;
ModAPI.addAPICallback("RecipeViewer", function (api) {
    RV = api.Core;
    Callback.addCallback("PostLoaded", function () {
        var size = 100;
        var scale = size / 16;
        RV.registerRecipeType("book_enchanter", {
            title: "Book Enchanter",
            contents: {
                icon: BlockID.book_enchanter,
                drawing: [
                    { type: "bitmap", x: 325 + 1.5 * scale, y: 100 + 1.5 * scale, bitmap: "book_enchanter_plus", scale: scale },
                    { type: "bitmap", x: 575 + 1.5 * scale, y: 100 + 1.5 * scale, bitmap: "book_enchanter_plus", scale: scale }
                ],
                elements: {
                    input0: { x: 200, y: 100, size: size },
                    input1: { x: 450, y: 100, size: size },
                    input2: { x: 700, y: 100, size: size },
                    output0: { x: 450, y: 250, size: size },
                    textEnchant: { type: "text", x: 500, y: 380, font: { color: Color.WHITE, size: 40, shadow: 0.5, align: UI.Font.ALIGN_CENTER } }
                },
                moveItems: { x: 820, y: 152, slots: ["slotSource", "slotLapis", "slotBook"] }
            },
            recipeList: RecipeManager.getAllRecipeForRV(),
            onOpen: function (elements, recipe) {
                elements.get("textEnchant").setBinding("text", (function () {
                    for (var name in EnchID) {
                        //@ts-ignore
                        if (recipe.enchant === EnchID[name]) {
                            return name;
                        }
                    }
                    return "";
                })());
            }
        });
    });
});
IDRegistry.genBlockID("book_enchanter");
Block.createBlock("book_enchanter", [{ name: "Book Enchanter", texture: [["book_enchanter", 0], ["book_enchanter", 1], ["book_enchanter", 2]], inCreative: true }]);
Block.setShape(BlockID.book_enchanter, 0, 0, 0, 1, 0.75, 1);
Block.setDestroyTime(BlockID.book_enchanter, 5);
ToolAPI.registerBlockMaterial(BlockID.book_enchanter, "stone");
Recipes.addShaped({ id: BlockID.book_enchanter }, ["_a_", "bcb", "ddd"], [
    "a", VanillaItemID.book, -1,
    "b", VanillaItemID.diamond, -1,
    "c", VanillaBlockID.enchanting_table, -1,
    "d", VanillaBlockID.obsidian, -1
]);
var windowEnchanter = (function () {
    var width = 600;
    var height = 450;
    var size = 100;
    var scale = size / 16;
    var itemScale = scale * 0.75;
    var itemPadding = (size - size * 0.75) / 2;
    var window = new UI.Window({
        location: { x: (1000 - width) / 2, y: 20, width: width, height: height },
        drawing: [
            { type: "background", color: Color.TRANSPARENT },
            { type: "frame", x: 0, y: 0, width: 1000, height: 1000 * height / width, bitmap: "classic_frame_bg_light", scale: scale },
            { type: "text", x: 500, y: 40, text: "Book Enchanter", font: { color: Color.DKGRAY, size: 40, align: UI.Font.ALIGN_CENTER } },
            { type: "bitmap", x: 200, y: 70, width: size, height: size, bitmap: "classic_slot" },
            { type: "bitmap", x: 450, y: 70, width: size, height: size, bitmap: "classic_slot" },
            { type: "bitmap", x: 700, y: 70, width: size, height: size, bitmap: "classic_slot" },
            { type: "bitmap", x: 450 + itemPadding, y: 70 + itemPadding, bitmap: "icon_grayscale_lapis", scale: itemScale },
            { type: "bitmap", x: 700 + itemPadding, y: 70 + itemPadding, bitmap: "icon_grayscale_book", scale: itemScale },
            { type: "bitmap", x: 325 + 1.5 * scale, y: 70 + 1.5 * scale, bitmap: "book_enchanter_plus", scale: scale },
            { type: "bitmap", x: 575 + 1.5 * scale, y: 70 + 1.5 * scale, bitmap: "book_enchanter_plus", scale: scale },
        ],
        elements: (function () {
            var slot = { type: "slot", bitmap: "_default_slot_empty", size: size };
            var elements = {
                slotSource: __assign(__assign({}, slot), { x: 200, y: 70, isValid: function (id, count, data) { return RecipeManager.isExist(id, data); } }),
                slotLapis: __assign(__assign({}, slot), { x: 450, y: 70, isValid: function (id, count, data) { return id === VanillaItemID.dye && data === 4; } }),
                slotBook: __assign(__assign({}, slot), { x: 700, y: 70, isValid: function (id) { return id === VanillaItemID.book; } }),
                slotIcon: __assign(__assign({}, slot), { x: 450, y: 190, z: 1, visual: true, source: { id: VanillaItemID.enchanted_book, count: 1, data: 0 } }),
                buttonCraft: { type: "button", x: 450, y: 190, bitmap: "classic_button_up", bitmap2: "classic_button_down", scale: scale, clicker: {
                        onClick: function (container) {
                            container.setText("textLv", "");
                            var slotSource = container.getSlot("slotSource");
                            var slotLapis = container.getSlot("slotLapis");
                            var slotBook = container.getSlot("slotBook");
                            var enchant = RecipeManager.getResult(slotSource.id, slotSource.data);
                            if (!enchant || slotLapis.id !== VanillaItemID.dye || slotLapis.data !== 4 || slotLapis.count < 8 || slotBook.id !== VanillaItemID.book) {
                                return;
                            }
                            var lv = Math.min(enchant.max, slotSource.count, slotLapis.count / 8 | 0);
                            if (Player.getLevel() < lv * 10) {
                                container.setText("textLv", "Required Lv: " + lv * 10);
                                return;
                            }
                            slotSource.count -= lv;
                            slotLapis.count -= lv * 8;
                            slotBook.count--;
                            container.validateAll();
                            Player.addLevel(-lv * 10);
                            var extra = new ItemExtraData();
                            extra.addEnchant(enchant.id, lv);
                            for (var i = 0; i < 36; i++) {
                                if (Player.getInventorySlot(i).id === 0) {
                                    Player.setInventorySlot(i, VanillaItemID.enchanted_book, 1, 0, extra);
                                    return;
                                }
                            }
                            var pos = Player.getPosition();
                            World.drop(pos.x, pos.y, pos.z, VanillaItemID.enchanted_book, 1, 0, extra);
                        }
                    } },
                buttonInfo: { type: "button", x: 820, y: 120, bitmap: "book_enchanter_info", scale: scale / 2, clicker: {
                        onClick: function (container) {
                            RV ? RV.openRecipePage("book_enchanter", container) : alert("Please install Recipe Viewer");
                        }
                    } },
                buttonExit: { type: "closeButton", x: 1000 - (15 * 4 + 3 * scale), y: 3 * scale, bitmap: "classic_close_button", bitmap2: "classic_close_button_down", scale: 4 },
                textLv: { type: "text", x: 570, y: 260, font: { size: 30, color: Color.GREEN, shadow: 0.5 } }
            };
            for (var i = 0; i < 36; i++) {
                elements["inv" + i] = {
                    type: "invSlot",
                    x: 50 + (i % 9) * size,
                    y: i < 9 ? 620 : 200 + (i / 9 | 0) * size,
                    size: size,
                    index: i
                };
            }
            return elements;
        })()
    });
    window.setInventoryNeeded(true);
    window.setBlockingBackground(true);
    window.setEventListener({
        onOpen: function (win) {
            var container = win.getContainer();
            container.setText("textLv", "");
        }
    });
    return window;
})();
var BookEnchanter = /** @class */ (function () {
    function BookEnchanter() {
    }
    //useNetworkItemContainer = true;
    BookEnchanter.prototype.init = function () {
        this.anim = new BookModel(this.x + 0.5, this.y + 0.75, this.z + 0.5, "model/enchanting_table_book");
        this.anim.spawn();
        delete this.liquidStorage;
    };
    BookEnchanter.prototype.destroy = function () {
        this.anim && this.anim.destroy();
    };
    BookEnchanter.prototype.getGuiScreen = function () {
        return windowEnchanter;
    };
    return BookEnchanter;
}());
TileEntity.registerPrototype(BlockID.book_enchanter, new BookEnchanter());
