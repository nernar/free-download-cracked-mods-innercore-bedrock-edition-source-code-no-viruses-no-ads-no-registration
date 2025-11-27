let dc, dtile;
let ItemDebug = (function (_super) {
    __extends(ItemDebug, _super);
    function ItemDebug() {
        _super.apply(this, arguments);
        return this;
    }
    ItemDebug.prototype.onItemUse = function (coords, i, b, player) {
        dc = coords;
        let client = player.getClient();
        if (client) {
            client.sendMessage(toJson(b, 3, 3));
        }
        let bl = WorldRegion.getForActor(player).getTileEntity(coords);
        dtile = bl;
        if (bl && bl.data) {
            if (client) {
                client.sendMessage(toJson(bl.data, 3, 3));
            }
        }
        if (player.getSneaking()) {
            let ent = Entity.findNearest(coords, 64, 5);
            if (ent && client) {
                client.sendMessage(toJson(Entity.getCompoundTag(ent).toScriptable(), 3, 3));
            }
        }
    };
    ItemDebug.prototype.onIconOverride = function (item, _) {
        return {name: this.icon.name, meta: ClientTickHandler.ticksInGame % 16};
    };
    return ItemDebug;
}(ItemMod));

