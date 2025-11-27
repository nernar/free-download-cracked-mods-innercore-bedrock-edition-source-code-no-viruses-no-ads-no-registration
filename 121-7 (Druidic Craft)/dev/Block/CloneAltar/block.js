IDRegistry.genBlockID("cloneAltar");
Block.createBlockWithRotation("cloneAltar", [
    {
        name: "Clone Altar",
        texture: [["napolnitel", 0], ["napolnitel", 0], ["napolnitel", 0], ["napolnitel", 0], ["napolnitel", 0], ["napolnitel", 0]],
        inCreative: true
    }
]);

RenderHelper.setRitualAltarRender(BlockID.cloneAltar, true);

Callback.addCallback("PostLoaded", function () {

    Recipes.addShaped({id: BlockID.cloneAltar, count: 1, data: 0}, [
        "aca",
        " a ",
        "aaa"
    ], ['a', 98, 0, 'c', 264, 0]);
    
});