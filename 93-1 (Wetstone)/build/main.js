Translation.addTranslation("Wetstone", {ru: "\u0412\u043b\u0430\u0436\u043d\u044b\u0439 \u043a\u0430\u043c\u0435\u043d\u044c"});
IDRegistry.genBlockID("wetstone");
Block.createBlock("wetstone", [{name: "Wetstone", texture: [["wetstone", 0]], inCreative: true}], "opaque");
Recipes.addShaped({id: BlockID.wetstone, count: 4, data: 0}, ["aba", "bcb", "aba"], ["a", 265, 0, "b", 98, 0, "c", 325, 8]);
var WetstoneJSON = FileTools.ReadJSON(__dir__ + "assets/json/wetstone.json");
TileEntity.registerPrototype(BlockID.wetstone, {tick: function () {
    for (var x = 0; x < WetstoneJSON.range; x++) {
        for (var z = 0; z < WetstoneJSON.range; z++) {
            if (World.getThreadTime() % 10 == 0) {
                block = World.getBlock(this.x - (WetstoneJSON.range - 1) / 2 + x, this.y, this.z - (WetstoneJSON.range - 1) / 2 + z);
                if (block.id == 60 && block.data < 7) {
                    World.setBlock(this.x - (WetstoneJSON.range - 1) / 2 + x, this.y, this.z - (WetstoneJSON.range - 1) / 2 + z, 60, 7);
                    return;
                }
            }
        }
    }
    if (World.getBlockID(this.x + 1, this.y, this.z) == 10) {
        World.setBlock(this.x + 1, this.y, this.z, 49, 0);
        return;
    }
    if (World.getBlockID(this.x - 1, this.y, this.z) == 10) {
        World.setBlock(this.x - 1, this.y, this.z, 49, 0);
        return;
    }
    if (World.getBlockID(this.x, this.y, this.z + 1) == 10) {
        World.setBlock(this.x, this.y, this.z + 1, 49, 0);
        return;
    }
    if (World.getBlockID(this.x, this.y, this.z - 1) == 10) {
        World.setBlock(this.x, this.y, this.z - 1, 49, 0);
        return;
    }
}});

