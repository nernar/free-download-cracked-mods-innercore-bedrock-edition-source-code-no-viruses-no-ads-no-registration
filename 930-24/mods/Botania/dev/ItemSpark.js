let ItemSpark = (function (_super) {
    __extends(ItemSpark, _super);
    function ItemSpark() {
        _super.apply(this, arguments);
        ModelKooker["\u2665kook\u2665"](this);
        with (this.getModel()) {
            setMaterial("translucent");
            setSpriteUiRender(false);
        }
        return this;
    }
    ItemSpark.prototype.onItemUse = function (coords, item, block, player) {
        this.attachSpark(WorldRegion.getForActor(player), new BlockPos(coords), new ItemStack(item), player);
    };
    ItemSpark.prototype.attachSpark = function (region, pos, stack, player) {
        let tile = region.getTileEntity(pos);
        if (__instanceOf(tile, ISparkAttachable)) {
            if (tile.canAttachSpark(stack) && tile.getAttachedSpark() == null) {
                player.setCarriedItem(stack.id, stack.count - 1, stack.data, stack.extra);
                let spark = new EntitySpark(region);
                spark.setPosition(pos.getX() + 0.5, pos.getY() + 1.25, pos.getZ() + 0.5);
                region.addEntity(spark);
                tile.attachSpark(spark);
                return true;
            }
        }
        return false;
    };
    return ItemSpark;
}(ItemMod));

