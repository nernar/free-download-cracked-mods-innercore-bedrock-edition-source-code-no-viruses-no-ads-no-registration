Translation.addTranslation("Cobblestone Transport Pipe", {ru: "\u0411\u0443\u043b\u044b\u0436\u043d\u0438\u043a\u043e\u0432\u0430\u044f \u0442\u0440\u0430\u043d\u0441\u043f\u043e\u0440\u0442\u043d\u0430\u044f \u0442\u0440\u0443\u0431\u0430"});
IDRegistry.genBlockID("pipeItemCobblestone");
Block.createBlock("pipeItemCobblestone", [{name: "Cobblestone Transport Pipe", texture: [["pipe_cobblestone", 0]], inCreative: true}]);
Recipes.addShaped({id: BlockID.pipeItemCobblestone, count: 1, data: 0}, ["aba"], ["a", 4, -1, "b", 20, 0]);
FactAPI.render.setupWireasRender(BlockID.pipeItemCobblestone, 0.5, [{name: "item-pipe", add: true}, {name: "item-wood-pipe", add: false}, {name: "item-item-pipe", add: true}, {name: "item-sandstone-pipe", add: false}]);
Pipe.registerTile(BlockID.pipeItemCobblestone, {friction: 0.001});

