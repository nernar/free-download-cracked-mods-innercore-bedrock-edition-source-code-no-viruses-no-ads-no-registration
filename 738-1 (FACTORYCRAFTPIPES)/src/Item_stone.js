Translation.addTranslation("Stone Transport Pipe", {ru: "\u041a\u0430\u043c\u0435\u043d\u0430\u044f \u0442\u0440\u0430\u043d\u0441\u043f\u043e\u0440\u0442\u043d\u0430\u044f \u0442\u0440\u0443\u0431\u0430"});
IDRegistry.genBlockID("pipeItemStone");
Block.createBlock("pipeItemStone", [{name: "Stone Transport Pipe", texture: [["pipe_stone", 0]], inCreative: true}]);
Recipes.addShaped({id: BlockID.pipeItemStone, count: 1, data: 0}, ["aba"], ["a", 1, 0, "b", 20, 0]);
FactAPI.render.setupWireasRender(BlockID.pipeItemStone, 0.5, [{name: "item-pipe", add: true}, {name: "item-wood-pipe", add: false}, {name: "item-item-pipe", add: true}, {name: "item-sandstone-pipe", add: false}]);
Pipe.registerTile(BlockID.pipeItemStone, {friction: 0.0005});

