Translation.addTranslation("Quartz Transport Pipe", {ru: "\u041a\u0432\u0430\u0440\u0446\u0435\u0432\u0430\u044f \u0442\u0440\u0430\u043d\u0441\u043f\u043e\u0440\u0442\u043d\u0430\u044f \u0442\u0440\u0443\u0431\u0430"});
IDRegistry.genBlockID("pipeItemQuartz");
Block.createBlock("pipeItemQuartz", [{name: "Quartz Transport Pipe", texture: [["pipe_quartz", 0]], inCreative: true}]);
Recipes.addShaped({id: BlockID.pipeItemQuartz, count: 1, data: 0}, ["aba"], ["a", 406, 0, "b", 20, 0]);
FactAPI.render.setupWireasRender(BlockID.pipeItemQuartz, 0.5, [{name: "item-pipe", add: true}, {name: "item-wood-pipe", add: false}, {name: "item-item-pipe", add: true}, {name: "item-sandstone-pipe", add: false}]);
Pipe.registerTile(BlockID.pipeItemQuartz, {friction: 0});

