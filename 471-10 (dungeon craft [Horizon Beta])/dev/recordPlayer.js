IDRegistry.genBlockID("player");
Block.createBlock("player", [{name: "player", texture: [["jukebox_side", 0], ["jukebox_top", 0], ["jukebox_side", 0]], inCreative: true}]);
Translation.addTranslation("player", {ru: "\u043f\u0440\u043e\u0438\u0433\u0440\u044b\u0432\u0430\u0442\u0435\u043b\u044c"});
IDRegistry.genBlockID("player1");
Block.createBlock("player1", [{name: "player", texture: [["jukebox_side", 0], ["jukebox_top", 0], ["jukebox_side", 0]], inCreative: false}]);
IDRegistry.genBlockID("player2");
Block.createBlock("player2", [{name: "player", texture: [["jukebox_side", 0], ["jukebox_top", 0], ["jukebox_side", 0]], inCreative: false}]);
IDRegistry.genBlockID("player3");
Block.createBlock("player3", [{name: "player", texture: [["jukebox_side", 0], ["jukebox_top", 0], ["jukebox_side", 0]], inCreative: false}]);
TileEntity.registerPrototype(BlockID.player1, {defaultValues: {someValue: 0}, tick: function () {
}, click: function (id, count, data, coords) {
    World.setBlock(this.x, this.y, this.z, BlockID.player, 0);
    boss1.stop();
    World.drop(this.x, this.y + 1, this.z, ItemID.GlasPlacte, 1, 0);
}, destroyBlock: function (coords, player) {
    boss1.stop();
}});
Block.registerDropFunctionForID(BlockID.player1, function (coords, id, data, diggingLevel, toolLevel) {
    return [[BlockID.player, 1, 0], [ItemID.GlasPlacte, 1, 0]];
});
TileEntity.registerPrototype(BlockID.player2, {defaultValues: {someValue: 0}, tick: function () {
}, click: function (id, count, data, coords) {
    World.setBlock(this.x, this.y, this.z, BlockID.player, 0);
    angel.stop();
    World.drop(this.x, this.y + 1, this.z, ItemID.AngelPlate, 1, 0);
}, destroyBlock: function (coords, player) {
    angel.stop();
}});
Block.registerDropFunctionForID(BlockID.player2, function (coords, id, data, diggingLevel, toolLevel) {
    return [[BlockID.player, 1, 0], [ItemID.AngelPlate, 1, 0]];
});
TileEntity.registerPrototype(BlockID.player3, {defaultValues: {someValue: 0}, tick: function () {
}, click: function (id, count, data, coords) {
    World.setBlock(this.x, this.y, this.z, BlockID.player, 0);
    raiFinal.stop();
    World.drop(this.x, this.y + 1, this.z, ItemID.godcol, 1, 0);
}, destroyBlock: function (coords, player) {
    raiFinal.stop();
}});
Block.registerDropFunctionForID(BlockID.player3, function (coords, id, data, diggingLevel, toolLevel) {
    return [[BlockID.player, 1, 0], [ItemID.godcol, 1, 0]];
});

