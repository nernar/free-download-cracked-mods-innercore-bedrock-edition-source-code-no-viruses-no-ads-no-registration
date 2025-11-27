IDRegistry.genItemID("plantStraw");
Item.createItem("plantStraw", "Straw", { name: "straw" });

Block.registerDropFunction(31, function (coords, blockID, blockData, lvl, enchant) {
    if (!ItemDictionary.isItemInCategory(Player.getCarriedItem().id, "minecraft:tool.knife")) {
        if(Random.randomDouble(0, 1) <= 0.8){
            return [[ItemID.fiberPlant, 1, 0]]
        }
    }
    else if(Random.randomDouble(0, 1) <= 0.8) {
        return [[ItemID.plantStraw, 1, 0]]
    }
    return [];
});

IDRegistry.genBlockID("plantStrawBlock");
Block.createBlock("plantStrawBlock", [
    { name: "Straw", texture: [["block_straw", 0]], inCreative: true }
], __OBJECT_BLOCK_TYPE);

Callback.addCallback("PreLoaded", function () {
    Recipes.addShaped({ id: BlockID.plantStrawBlock, count: 1, data: 0 }, [
        "aaa",
        "aaa",
        "aaa"
    ], ['a', ItemID.plantStraw, -1]);
});

{
    let render = new ICRender.CollisionShape();
    render.addEntry().addBox(1, 1, 1, 0, 0, 0);
    BlockRenderer.setCustomCollisionShape(BlockID.plantStrawBlock, -1, render);
}

IDRegistry.genBlockID("plantStrawBlockDense");
Block.createBlock("plantStrawBlockDense", [
    {
        name: "Dense Straw",
        texture: [
            ["block_straw_dense", 0]
        ],
        inCreative: true
    }
], "opaque");

Callback.addCallback("PreLoaded", function () {
    Recipes.addShaped({ id: BlockID.plantStrawBlockDense, count: 1, data: 0 }, [
        "aaa",
        "aba",
        "aaa"
    ], ['a', ItemID.plantStraw, -1, 'b', BlockID.plantStrawBlock, -1]);
});