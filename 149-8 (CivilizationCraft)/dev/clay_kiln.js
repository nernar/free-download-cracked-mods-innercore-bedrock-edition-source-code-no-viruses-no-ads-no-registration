IDRegistry.genBlockID("unfiredClayKiln");
Block.createBlock("unfiredClayKiln", [{name: "Unfired kiln", texture: [["clayKiln", 0], ["clayKiln_top", 0], ["clayKiln", 0]], inCreative: true}]);
Block.setDestroyTime(BlockID.unfiredClayKiln, 2);
ToolAPI.registerBlockMaterial(BlockID.clayKiln, "dirt", 1, true);
Block.setBlockShape(BlockID.unfiredClayKiln, {x: 0.1, y: 0, z: 0.1}, {x: 0.9, y: 0.1, z: 0.9});
var BLOCK_TEMP = {50: true, 51: true, 11: true, 10: true};
Block.setRandomTickCallback(BlockID.unfiredClayKiln, function (x, y, z, id, data) {
    if (BLOCK_TEMP[World.getBlockID(x, y - 1, z)]) {
        World.drop(x + 0.5, y, z + 0.5, BlockID.clayKiln, 1, 0);
        World.setBlock(x, y, z, 0);
    }
});
Callback.addCallback("PostLoaded", function () {
    RecipeSystem.addRecipeToWorkbench(BlockID.unfiredClayKiln, 1, 0, [[337, 0], [337, 0], [337, 0], [337, 0], [0, 0], [337, 0], [337, 0], [44, 3], [337, 0]]);
});
IDRegistry.genBlockID("clayKiln");
Block.createBlock("clayKiln", [{name: "Kiln", texture: [["clayKiln", 1], ["clayKiln_top", 1], ["clayKiln", 1]], inCreative: true}]);
Block.setDestroyTime(BlockID.clayKiln, 3.5);
ToolAPI.registerBlockMaterial(BlockID.clayKiln, "stone", 1, true);
Block.setBlockShape(BlockID.clayKiln, {x: 0.1, y: 0, z: 0.1}, {x: 0.9, y: 0.1, z: 0.9});
TileEntity.registerPrototype(BlockID.clayKiln, {defaultValues: {id: 0, data: 0, progress: 0, progressMax: 450}, initAnimation: function () {
    this.animation = new Animation.Item(this.x + 0.5, this.y + 0.101, this.z + 0.5);
    if (this.data.id != 0) {
        this.animation.describeItem({id: this.data.id, count: 1, data: this.data.data, rotation: [3.14 / 2, 0, 0], size: 0.6});
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
    this.data.id = 0;
    this.destroyAnimation();
}, tick: function () {
    if (this.data.id != 0) {
        if (World.getThreadTime() % 35 == 0) {
            this.updateAnimation();
        }
    } else {
        this.destroyAnimation();
    }
    if (BLOCK_TEMP[World.getBlockID(this.x, this.y - 1, this.z)]) {
        let rec_ = RecipeSystem.getKilnRecipe();
        for (i in rec_) {
            let rec = rec_[i];
            if (this.data.id == rec.ing0 && this.data.data == rec.ingData0 && rec.ing1 == 0 && rec.ingCount0 == 1) {
                this.data.progress++;
                if (this.data.progress >= this.data.progressMax) {
                    this.data.progress = 0;
                    this.data.id = rec.resId;
                    this.data.data = rec.resData;
                }
            }
        }
    }
}, click: function () {
    let item = Player.getCarriedItem();
    let rec_ = RecipeSystem.getKilnRecipe();
    for (i in rec_) {
        let rec = rec_[i];
        if (item.id == rec.ing0 && item.data == rec.ingData0) {
            Game.prevent();
            Player.decreaseCarriedItem();
            this.data.id = item.id;
            this.data.data = item.data;
        }
        if (Entity.getSneaking(Player.get()) && this.data.id != 0) {
            World.drop(this.x + 0.5, this.y + 1, this.z + 0.5, this.data.id, 1, this.data.data);
            this.data.id = this.data.data = 0;
        }
    }
}});

