Translation.addTranslation("Sandstone Transport Pipe", {ru: "\u041f\u0435\u0441\u0447\u0430\u043d\u0438\u043a\u043e\u0432\u0430\u044f \u0442\u0440\u0430\u043d\u0441\u043f\u043e\u0440\u0442\u043d\u0430\u044f \u0442\u0440\u0443\u0431\u0430"});
IDRegistry.genBlockID("pipeItemSandstone");
Block.createBlock("pipeItemSandstone", [{name: "Sandstone Transport Pipe", texture: [["pipe_sandstone", 0]], inCreative: true}]);
Recipes.addShaped({id: BlockID.pipeItemSandstone, count: 1, data: 0}, ["aba"], ["a", 24, -1, "b", 20, 0]);
FactAPI.render.setupWireasRender(BlockID.pipeItemSandstone, 0.5, [{name: "item-wood-pipe", add: false}, {name: "item-item-pipe", add: false}, {name: "item-sandstone-pipe", add: true}]);
Pipe.registerTile(BlockID.pipeItemSandstone, {friction: 0.005, stopContainerAdding: true, getTransportingDirections: function (item) {
    var pos = item.position;
    var dir = item.direction;
    var list = Pipe.findDirections(pos.x, pos.y, pos.z, true);
    var res = Pipe.filterDirections(list, dir);
    return res;
}});

