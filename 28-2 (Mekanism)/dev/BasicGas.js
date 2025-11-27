IDRegistry.genBlockID("BasicGazTank");
Block.createBlock("BasicGazTank", [{name: "(\u0411\u0430\u0437\u043e\u0432\u044b\u0439) \u0413\u0430\u0437\u043e\u0432\u044b\u0439 \u0431\u0430\u043b\u043e\u043d", texture: [["TankD", 0], ["TankTB", 0], ["TankC", 0], ["TankF", 0], ["TankC", 0], ["TankC", 0]], inCreative: true}]);
Block.setBlockShape(BlockID.BasicGazTank, {x: 0.2, y: 0, z: 0.2}, {x: 0.8, y: 1, z: 0.8});
Callback.addCallback("PostLoaded", function () {
    Recipes.addShaped({id: BlockID.BasicGazTank, count: 1, data: 0}, ["ror", "o o", "ror"], ["r", 331, 0, "o", ItemID.ingotosmium, 0]);
});

