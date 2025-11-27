IDRegistry.genBlockID("drying_rack");
Block.createBlock("drying_rack", [{name: "Drying rack", texture: [["planks", 0]], inCreative: true}]);
ToolAPI.registerBlockMaterial(BlockID.drying_rack, "wood", 0, true);
Block.setBlockShape(BlockID.drying_rack, {x: 0.4, y: 0.4, z: 0.4}, {x: 0.6, y: 1, z: 0.6});
Callback.addCallback("PostLoaded", function () {
    Recipes.addShaped({id: BlockID.drying_rack, count: 2, data: 0}, ["s", "s", "s"], ["s", 158, -1]);
});
DryingRack.addRecipe(ItemID.hide_salted, 1000, ItemID.hide_dried);
DryingRack.addRecipe(ItemID.hide_tanned, 1000, 334);
TileEntity.registerPrototype(BlockID.drying_rack, {defaultValues: {item: 0, progress: 0}, initAnimation: function () {
    this.animation = new Animation.Item(this.x + 0.5, this.y, this.z + 0.5);
    if (this.data.item != 0) {
        this.animation.describeItem({id: this.data.item, count: 1, data: 0, rotation: "y", size: 1});
        this.animation.load();
    }
}, destroyAnimation: function () {
    if (this.animation) {
        this.animation.destroy();
    }
}, updateAnimation: function () {
    this.destroyAnimation();
    this.initAnimation();
}, init: function () {
    this.initAnimation();
}, destroy: function () {
    World.drop(this.x + 0.5, this.y + 0.5, this.z + 0.5, this.data.item, 1, 0);
    this.destroyAnimation();
    this.data.item = 0;
}, click: function () {
    Game.prevent();
    let item = Player.getCarriedItem();
    if (DryingRack.getRecipe(item.id) && this.data.item == 0) {
        this.data.item = item.id;
        this.updateAnimation();
        Player.decreaseCarriedItem();
    }
    if (this.data.item != 0 && Entity.getSneaking(Player.get())) {
        World.drop(this.x + 0.5, this.y + 0.5, this.z + 0.5, this.data.item, 1, 0);
        this.destroyAnimation();
        this.data.item = 0;
    }
}, tick: function () {
    if (World.getThreadTime() % 30 == 0) {
        this.updateAnimation();
    }
    let recipe = DryingRack.getRecipe(this.data.item);
    if (recipe) {
        this.data.progress++;
        if (this.data.progress >= recipe.time) {
            this.data.progress = 0;
            this.data.item = recipe.id;
        }
    } else {
        if (this.data.progress > 0) {
            this.data.progress = 0;
        }
    }
    if (this.animation && this.data.item == 0) {
        this.destroyAnimation();
    }
}});

