IDRegistry.genBlockID("rityalPedestal");
Block.createBlock("rityalPedestal", [{name: "aw.block.rityal_pedestal", texture: [["stone", 0]], inCreative: true}]);
RenderAPI.SetAltar(BlockID.rityalPedestal);
MagicCore.setPlaceBlockFunc(BlockID.rityalPedestal, null, null, {name: "ritual"});
RitualAPI.addPedestal(BlockID.rityalPedestal);
TileEntity.registerPrototype(BlockID.rityalPedestal, objectFix(getProtPedestal(1), {click: function (id, count, data, coords, player) {
    if (this.blocking) {
        return;
    }
    Game.prevent();
    this.isItem();
    if (this.data.item.id != 0) {
        if (id != ItemID.bookk) {
            this.drop(player);
        }
    } else {
        if (id != ItemID.bookk) {
            let item = Entity.getCarriedItem(player);
            delItem(player, {id: id, data: data, count: count});
            item.count = 1;
            this.animation(item);
        }
    }
}}));

