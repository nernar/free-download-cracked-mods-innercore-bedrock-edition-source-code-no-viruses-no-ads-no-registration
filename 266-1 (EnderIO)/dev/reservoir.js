IDRegistry.genBlockID("reservoir");
Block.createBlock("reservoir", [{name: "Water reservoir", texture: [["reservoir", 0]], inCreative: true}]);
Callback.addCallback("PostLoaded", function () {
    Recipes.addShaped({id: BlockID.reservoir, count: 1, data: 0}, ["ggg", "gcg", "ggg"], ["g", 20, 0, "c", 380, 0]);
});
TileEntity.registerPrototype(BlockID.reservoir, {setBox: function (texture, dataa) {
    this.breakAnim();
    this.anim = new Animation.Base(this.x + 0.5, this.y, this.z + 0.5);
    let render = new Render();
    render.setPart("body", [{type: "box", coords: {x: 0, y: 0, z: 0}, size: {x: 15, y: dataa, z: 15}}]);
    this.anim.describe({render: render.getRenderType(), skin: texture});
    this.anim.load();
}, breakAnim: function () {
    if (this.anim) {
        this.anim.destroy();
    }
}, destroy: function () {
    this.breakAnim();
}, created: function () {
    this.liquidStorage.setLimit("water", 16);
}, tick: function () {
    if (this.liquidStorage.getAmount("water") > 4 && this.liquidStorage.getAmount("water") < 16 && World.getThreadTime() % 80 == 0) {
        this.liquidStorage.addLiquid("water", 1);
    }
    if (World.getThreadTime() % 5 == 0 && this.liquidStorage.getAmount("water") >= 1) {
        this.setBox("model/water_model.png", this.liquidStorage.getAmount("water"));
    }
}, click: function () {
    let item = Player.getCarriedItem();
    let liquid = LiquidRegistry.getItemLiquid(item.id, item.data);
    let empty = LiquidRegistry.getEmptyItem(item.id, item.data);
    if (liquid == "water" && this.liquidStorage.getAmount("water") < 16 && !Entity.getSneaking(Player.get())) {
        this.liquidStorage.addLiquid("water", 1);
        Player.addItemToInventory(empty.id, 1, empty.data);
        Player.decreaseCarriedItem();
    }
    if (LiquidRegistry.getFullItem(item.id, item.data, "water") && this.liquidStorage.getAmount("water") > 0 && Entity.getSneaking(Player.get())) {
        this.liquidStorage.getLiquid("water", 1);
        Player.addItemToInventory(LiquidRegistry.getFullItem(item.id, item.data, "water").id, 1, LiquidRegistry.getFullItem(item.id, item.data, "water").data);
        Player.decreaseCarriedItem();
    }
    if (Entity.getSneaking(Player.get())) {
        Game.tipMessage(" amount: " + (this.liquidStorage.getAmount("water") * 1000) + "/16000");
    }
    Game.prevent();
}});

