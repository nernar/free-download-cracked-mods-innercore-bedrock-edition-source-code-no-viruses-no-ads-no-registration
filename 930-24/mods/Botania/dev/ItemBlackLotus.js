let ItemBlackLotus = (function (_super) {
    __extends(ItemBlackLotus, _super);
    const MANA_PER = 8000;
    const MANA_PER_T2 = 100000;
    function ItemBlackLotus() {
        _super.apply(this, arguments);
        this.setName(Translation.translate("item.botania." + this.icon.name) + "\n\xa77" + Translation.translate("botaniamisc.lotusDesc"));
        return this;
    }
    __implements(ItemBlackLotus, IManaDissolvable);
    ItemBlackLotus.prototype.onDissolveTick = function (pool, stack, entity) {
        if (pool.isFull() || pool.getMana() == 0) {
            return;
        }
        pool.addMana(this.hasEffect(stack) ? MANA_PER_T2 : MANA_PER);
        stack.decrease();
    };
    ItemBlackLotus.prototype.hasEffect = function (stack) {
        return stack.getItemInstance() == ModItems.blackerLotus;
    };
    ItemBlackLotus.prototype.onNameOverride = function () {
        return this.name;
    };
    ItemBlackLotus.prototype.register = function () {
        if (this == ModItems.blackerLotus) {
            this.setGlint(true);
        }
        ItemRegistry.registerItem(this);
    };
    return ItemBlackLotus;
}(ItemMod));

