let ItemManaTablet = (function (_super) {
    __extends(ItemManaTablet, _super);
    __implements(ItemManaTablet, IManaItem, IManaTooltipDisplay);
    const MAX_MANA = 500000;
    const TAG_MANA = "mana";
    const TAG_CREATIVE = "creative";
    const TAG_ONE_USE = "oneUse";
    function ItemManaTablet() {
        _super.apply(this, arguments);
        this.setMaxStack(1);
        drawTextures(this.icon.name);
        return this;
    }
    function setMana(stack, mana) {
        ItemNBTHelper.setInt(stack, TAG_MANA, mana);
    }
    ItemManaTablet.setMana = setMana;
    function isStackCreative(stack) {
        return ItemNBTHelper.getBoolean(stack, TAG_CREATIVE, false);
    }
    ItemManaTablet.isStackCreative = isStackCreative;
    ItemManaTablet.prototype.onIconOverride = function (_stack, _) {
        let stack = new ItemStack(_stack);
        let item = stack.getItemInstance();
        let meta = 0;
        if (__instanceOf(item, ItemManaTablet)) {
            meta = Math.round(item.getManaFractionForDisplay(stack) * 15);
        }
        return {name: item.icon.name, meta: meta};
    };
    ItemManaTablet.prototype.getMana = function (stack) {
        return ItemNBTHelper.getInt(stack, TAG_MANA, 0) * stack.count;
    };
    ItemManaTablet.prototype.getMaxMana = function (stack) {
        return (isStackCreative(stack) ? MAX_MANA + 1000 : MAX_MANA) * stack.count;
    };
    ItemManaTablet.prototype.addMana = function (stack, mana) {
        if (!isStackCreative(stack)) {
            ItemNBTHelper.setInt(stack, TAG_MANA, Math.min(this.getMana(stack) + mana, this.getMaxMana(stack)) / stack.count);
        }
    };
    ItemManaTablet.prototype.canReceiveManaFromPool = function (stack, pool) {
        return !ItemNBTHelper.getBoolean(stack, TAG_ONE_USE, false);
    };
    ItemManaTablet.prototype.canReceiveManaFromItem = function (stack, otherStack) {
        return !isStackCreative(stack);
    };
    ItemManaTablet.prototype.canExportManaToPool = function (stack, pool) {
        return true;
    };
    ItemManaTablet.prototype.canExportManaToItem = function (stack, otherStack) {
        return true;
    };
    ItemManaTablet.prototype.getManaFractionForDisplay = function (stack) {
        return this.getMana(stack) / this.getMaxMana(stack);
    };
    function drawTextures(textureName) {
        let path = __dir__ + "/assets/raw-textures/" + textureName;
        let emptyBmp = android.graphics.Bitmap.createBitmap(16, 16, android.graphics.Bitmap.Config.ARGB_8888);
        let cvs = new android.graphics.Canvas(emptyBmp);
        let tablet = FileTools.ReadImage(path + ".png");
        let overlay = FileTools.ReadImage(path + "_overlay.png");
        for (let i = 0; i < 16; i++) {
            let _overlay = TextureWorker.changeBitmapColor(overlay, MathHelper.hsvToRGB(0.528, 1 / 15 * i, 1));
            let resultPath = __dir__ + "/assets/items-opaque/" + textureName + "_" + i;
            if (!FileTools.isExists(resultPath + ".png")) {
                cvs.drawBitmap(tablet, 0, 0, null);
                cvs.drawBitmap(_overlay, 0, 0, null);
                FileTools.WriteImage(resultPath + ".png", emptyBmp);
            }
        }
    }
    ItemManaTablet.drawTextures = drawTextures;
    return ItemManaTablet;
}(ItemMod));

