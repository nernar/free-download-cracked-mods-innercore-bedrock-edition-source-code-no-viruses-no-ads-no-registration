IDRegistry.genItemID("soonw");
Item.createItem("soonw", "soon", {name: "stick", meta: 0}, {stack: 1});
IDRegistry.genBlockID("soonq");
Block.createBlockWithRotation("soonq", [{name: "Soon", texture: [["stone", 0]], inCreative: true}]);
Block.registerDropFunction("soonq", function (coords, id, data, diggingLevel, toolLevel) {
    return [[BlockID.soonq, 1, 0]];
});
var dimension = new Dimensions.CustomDimension("tvoiuid", 1999);
dimension.setGenerator(Dimensions.newGenerator({layers: [{minY: 0, maxY: 40, yConversion: [[0, 50], [1, -50]], material: {base: 1}, noise: {octaves: {count: 4, scale: 20}}}]}));
Item.registerUseFunction(ItemID.soonw, function (coords, item, block) {
    if (block.id == BlockID.soonq) {
        Dimensions.transfer(Player.get(), dimension.id);
    }
});

