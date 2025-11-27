Translation.addTranslation("Golden Transport Pipe", {ru: "\u0417\u043e\u043b\u043e\u0442\u0430\u044f \u0442\u0440\u0430\u043d\u0441\u043f\u043e\u0440\u0442\u043d\u0430\u044f \u0442\u0440\u0443\u0431\u0430"});
IDRegistry.genBlockID("pipeItemGolden");
Block.createBlock("pipeItemGolden", [{name: "Golden Transport Pipe", texture: [["pipe_gold", 0]], inCreative: true}]);
Recipes.addShaped({id: BlockID.pipeItemGolden, count: 1, data: 0}, ["aba"], ["a", 266, 0, "b", 20, 0]);
FactAPI.render.setupWireasRender(BlockID.pipeItemGolden, 0.5, [{name: "item-pipe", add: true}, {name: "item-wood-pipe", add: false}, {name: "item-item-pipe", add: true}, {name: "item-sandstone-pipe", add: false}]);
Pipe.registerTile(BlockID.pipeItemGolden, {friction: -0.005});

