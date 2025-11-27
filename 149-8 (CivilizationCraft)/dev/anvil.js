Block.setAnvilRender = function (id, tex, data) {
    if (data == null) {
        data = 0;
    }
    let anvilRender = new ICRender.Model();
    BlockRenderer.setStaticICRender(id, -1, anvilRender);
    var anvilModel = BlockRenderer.createModel();
    anvilModel.addBox(2 / 16, 7 / 16, 0 / 16, 13 / 16, 0.8, 16 / 16, tex, data);
    anvilModel.addBox(4 / 16, 0.01, 4 / 16, 11 / 16, 0.78, 12 / 16, tex, data);
    anvilModel.addBox(4 / 16, 0.01, 0 / 16, 11 / 16, 2 / 16, 16 / 16, tex, data);
    anvilRender.addEntry(anvilModel);
};
IDRegistry.genBlockID("stoneAnvil");
Block.createBlock("stoneAnvil", [{name: "Primitive anvil", texture: [["cobblestone", 0]], inCreative: false}]);
IDRegistry.genBlockID("ironAnvil");
Block.createBlock("ironAnvil", [{name: "Anvil", texture: [["iron_anvil", 0]], inCreative: false}]);
IDRegistry.genItemID("anvilIron");
Item.createItem("anvilIron", "Iron anvil", {name: "ironAnvil", meta: 0}, {stack: 64});
IDRegistry.genItemID("anvilPrimal");
Item.createItem("anvilPrimal", "Primal anvil", {name: "primalAnvil", meta: 0}, {stack: 64});
Block.registerDropFunction(BlockID.stoneAnvil, function () {
    return [[ItemID.anvilPrimal, 1, 0]];
});
Block.registerDropFunction(BlockID.ironAnvil, function () {
    return [[ItemID.anvilIron, 1, 0]];
});
Item.registerUseFunction("anvilIron", function (coords) {
    let crd = coords.relative;
    if (World.getBlockID(crd.x, crd.y, crd.z) == 0) {
        World.setBlock(crd.x, crd.y, crd.z, BlockID.ironAnvil);
        Player.decreaseCarriedItem();
    }
});
Item.registerUseFunction("anvilPrimal", function (coords) {
    let crd = coords.relative;
    if (World.getBlockID(crd.x, crd.y, crd.z) == 0) {
        World.setBlock(crd.x, crd.y, crd.z, BlockID.stoneAnvil);
        Player.decreaseCarriedItem();
    }
});
Block.setAnvilRender(BlockID.stoneAnvil, 1);
Block.setAnvilRender(BlockID.ironAnvil, "iron_anvil");
Callback.addCallback("PostLoaded", function () {
    for (i in craftingHammers) {
        RecipeSystem.addAnvilRecipe({id: ItemID.plateDowniron, count: 1, data: 0}, ItemID.ingotDowniron, craftingHammers[i]);
        RecipeSystem.addAnvilRecipe({id: ItemID.plateCopper, count: 1, data: 0}, ItemID.ingotCopper, craftingHammers[i]);
        RecipeSystem.addAnvilRecipe({id: ItemID.plateTin, count: 1, data: 0}, ItemID.ingotTin, craftingHammers[i]);
        RecipeSystem.addAnvilRecipe({id: ItemID.dustCoal, count: 1, data: 0}, 263, craftingHammers[i]);
        RecipeSystem.addAnvilRecipe({id: ItemID.plateGold, count: 1, data: 0}, 266, craftingHammers[i]);
        RecipeSystem.addAnvilRecipe({id: ItemID.dustCopper, count: 1, data: 0}, ItemID.oreChunkCopper, craftingHammers[i]);
        RecipeSystem.addAnvilRecipe({id: ItemID.dustTin, count: 1, data: 0}, ItemID.oreChunkTin, craftingHammers[i]);
        RecipeSystem.addAnvilRecipe({id: ItemID.dustIron, count: 1, data: 0}, ItemID.oreChunkIron, craftingHammers[i]);
        RecipeSystem.addAnvilRecipe({id: 331, count: 1, data: 0}, ItemID.oreChunkRedstone, craftingHammers[i]);
        RecipeSystem.addAnvilRecipe({id: 351, count: 1, data: 4}, ItemID.oreChunkLapis, craftingHammers[i]);
        RecipeSystem.addAnvilRecipe({id: 264, count: 1, data: 0}, ItemID.oreChunkDiamond, craftingHammers[i]);
        RecipeSystem.addAnvilRecipe({id: 388, count: 1, data: 0}, ItemID.oreChunkEmerald, craftingHammers[i]);
        RecipeSystem.addAnvilRecipe({id: ItemID.plateDirium, count: 1, data: 0}, ItemID.ingotDirium, craftingHammers[2]);
        RecipeSystem.addAnvilRecipe({id: ItemID.plateIron, count: 1, data: 0}, 265, craftingHammers[i]);
        RecipeSystem.addAnvilRecipe({id: ItemID.plateCobalt, count: 1, data: 0}, ItemID.ingotCobalt, craftingHammers[i]);
    }
});
TileEntity.registerPrototype(BlockID.stoneAnvil, {defaultValues: {id: 0, data: 0}, initAnimation: function () {
    this.animation = new Animation.Item(this.x + 0.5, this.y + 0.82, this.z + 0.5);
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
}, destroy: function () {
    World.drop(this.x + 0.5, this.y + 0.5, this.z + 0.5, this.data.id, 1, this.data.data);
    this.destroyAnimation();
}, click: function () {
    let item = Player.getCarriedItem();
    if (Entity.getSneaking(Player.get()) && this.data.id != 0 && item.id == 0) {
        World.drop(this.x + 0.5, this.y + 1, this.z + 0.5, this.data.id, 1, this.data.data);
        this.updateAnimation();
        this.data.id = this.data.data = 0;
    }
    let rec_ = RecipeSystem.getAnvilRecipe();
    for (i in rec_) {
        let rec = rec_[i];
        if (item.id == rec.item && this.data.id == 0) {
            this.data.id = item.id;
            this.data.data = item.data;
            Player.decreaseCarriedItem();
            Game.prevent();
        }
        if (this.data.id == rec.item && item.id == rec.tool) {
            Item.breakCarried();
            World.drop(this.x + 0.5, this.y + 1, this.z + 0.5, rec.resId, rec.resCount, rec.resData);
            PlaySoundFile("HammerUse.ogg");
            this.data.id = this.data.data = 0;
            Game.prevent();
            if (rnd(1, 20) == 1) {
                World.destroyBlock(this.x, this.y, this.z);
                this.destroyAnimation();
            }
        }
    }
}});
Callback.addCallback("PostLoaded", function () {
    RecipeSystem.addRecipeToWorkbench(ItemID.anvilPrimal, 1, 0, [[1, 0], [1, 0], [1, 0], [0, 0], [4, 0], [0, 0], [4, 0], [4, 0], [4, 0]], 0);
    RecipeSystem.addRecipeToWorkbench(ItemID.anvilIron, 1, 0, [[42, 0], [42, 0], [42, 0], [0, 0], [265, 0], [0, 0], [265, 0], [265, 0], [265, 0]], 0);
});
TileEntity.registerPrototype(BlockID.ironAnvil, {defaultValues: {id: 0, data: 0}, initAnimation: function () {
    this.animation = new Animation.Item(this.x + 0.5, this.y + 0.82, this.z + 0.5);
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
        if (World.getThreadTime() % 40 == 0) {
            this.updateAnimation();
        }
    } else {
        this.destroyAnimation();
    }
}, destroy: function () {
    World.drop(this.x + 0.5, this.y + 0.5, this.z + 0.5, this.data.id, 1, this.data.data);
    this.destroyAnimation();
}, click: function () {
    let item = Player.getCarriedItem();
    if (Entity.getSneaking(Player.get()) && this.data.id != 0 && item.id == 0) {
        World.drop(this.x + 0.5, this.y + 1, this.z + 0.5, this.data.id, 1, this.data.data);
        this.updateAnimation();
        this.data.id = this.data.data = 0;
    }
    let rec_ = RecipeSystem.getAnvilRecipe();
    for (i in rec_) {
        let rec = rec_[i];
        if (item.id == rec.item && this.data.id == 0) {
            this.data.id = item.id;
            this.data.data = item.data;
            Player.decreaseCarriedItem();
            Game.prevent();
        }
        if (this.data.id == rec.item && item.id == rec.tool) {
            Item.breakCarried();
            World.drop(this.x + 0.5, this.y + 1, this.z + 0.5, rec.resId, rec.resCount, rec.resData);
            this.data.id = this.data.data = 0;
            Game.prevent();
            PlaySoundFile("HammerUse.ogg");
            if (rnd(1, 200) == 1) {
                if (rnd(1, 20) == 1) {
                    World.destroyBlock(this.x, this.y, this.z);
                    this.destroyAnimation();
                }
            }
        }
    }
}});

