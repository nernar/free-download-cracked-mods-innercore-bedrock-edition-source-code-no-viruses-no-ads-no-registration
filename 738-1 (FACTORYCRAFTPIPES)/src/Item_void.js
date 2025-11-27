Translation.addTranslation("Void Transport Pipe", {ru: "\u041f\u0443\u0441\u0442\u043e\u0442\u043d\u0430\u044f \u0442\u0440\u0430\u043d\u0441\u043f\u043e\u0440\u0442\u043d\u0430\u044f \u0442\u0440\u0443\u0431\u0430"});
IDRegistry.genBlockID("pipeItemVoid");
Block.createBlock("pipeItemVoid", [{name: "Void Transport Pipe", texture: [["pipe_void", 0]], inCreative: true}]);
Recipes.addShaped({id: BlockID.pipeItemVoid, count: 1, data: 0}, ["aba"], ["a", 263, -1, "b", 20, 0]);
FactAPI.render.setupWireasRender(BlockID.pipeItemVoid, 0.5, [{name: "item-pipe", add: true}, {name: "item-wood-pipe", add: false}, {name: "item-item-pipe", add: true}, {name: "item-sandstone-pipe", add: false}]);
Pipe.registerTile(BlockID.pipeItemVoid, {friction: -0.0005});
TileEntity.registerPrototype(BlockID.pipeItemVoid, {setPipeFunctions: function (item) {
    item.destroySelf();
}});

