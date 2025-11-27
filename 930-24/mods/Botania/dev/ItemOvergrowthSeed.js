let ItemOvergrowthSeed = (function (_super) {
    __extends(ItemOvergrowthSeed, _super);
    function ItemOvergrowthSeed() {
        _super.apply(this, arguments);
        return this;
    }
    ItemOvergrowthSeed.prototype.onItemUse = function (coords, item, block, player) {
        if (VanillaBlockID.grass == block.id) {
            let region = WorldRegion.getForActor(player);
            region.setBlock(coords, BlockID.enchantedSoil);
            player.setCarriedItem(item.id, item.count - 1, item.data, item.extra);
        }
    };
    ItemOvergrowthSeed.prototype.onIconOverride = function (item, _) {
        return {name: this.icon.name, meta: Math.round((Math.sin(ClientTickHandler.ticksInGame / (Math.PI * 2)) * 0.5 + 0.5) * 15)};
    };
    ItemOvergrowthSeed.prototype.register = function () {
        IAHelper.convertTexture("assets/raw-textures/", this.icon.name, "assets/items-opaque/", this.icon.name);
        ItemRegistry.registerItem(this);
    };
    return ItemOvergrowthSeed;
}(ItemMod));

