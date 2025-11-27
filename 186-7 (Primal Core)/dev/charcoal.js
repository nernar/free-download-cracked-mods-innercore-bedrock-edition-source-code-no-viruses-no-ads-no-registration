var setStackRender = function (id, tex) {
    let render = new ICRender.Model();
    BlockRenderer.setStaticICRender(id, -1, render);
    let model = BlockRenderer.createModel();
    Block.setDestroyTime(id, 0);
    model.addBox(0 / 16, 0 / 16, 11 / 16, 16 / 16, 4 / 16, 15 / 16, tex, 0);
    model.addBox(0 / 16, 0 / 16, 6 / 16, 16 / 16, 4 / 16, 10 / 16, tex, 0);
    model.addBox(0 / 16, 0 / 16, 1 / 16, 16 / 16, 4 / 16, 5 / 16, tex, 0);
    model.addBox(0 / 16, 5 / 16, 11 / 16, 16 / 16, 9 / 16, 15 / 16, tex, 0);
    model.addBox(0 / 16, 5 / 16, 1 / 16, 16 / 16, 9 / 16, 5 / 16, tex, 0);
    model.addBox(0 / 16, 5 / 16, 6 / 16, 16 / 16, 9 / 16, 10 / 16, tex, 0);
    model.addBox(0 / 16, 10 / 16, 1 / 16, 16 / 16, 14 / 16, 5 / 16, tex, 0);
    model.addBox(0 / 16, 10 / 16, 11 / 16, 16 / 16, 14 / 16, 15 / 16, tex, 0);
    model.addBox(0 / 16, 10 / 16, 6 / 16, 16 / 16, 14 / 16, 10 / 16, tex, 0);
    model.addBox(7 / 16, 0 / 16, 15 / 16, 9 / 16, 15 / 16, 16 / 16, "stack_belt", 0);
    model.addBox(7 / 16, 0 / 16, 0 / 16, 9 / 16, 15 / 16, 1 / 16, "stack_belt", 0);
    model.addBox(7 / 16, 14 / 16, 1 / 16, 9 / 16, 15 / 16, 15 / 16, "stack_belt", 0);
    render.addEntry(model);
};
IDRegistry.genBlockID("log_stack");
Block.createBlock("log_stack", [{name: "Stacked stripped log", texture: [["log_stripped_oak_side", 0]], inCreative: true}]);
ToolAPI.registerBlockMaterial(BlockID.log_stack, "wood", 0);
setStackRender(BlockID.log_stack, "log_stripped_oak_side");
var LIGHT = Block.createSpecialType({lightlevel: 15});
Callback.addCallback("PostLoaded", function () {
    Recipes.addShaped({id: BlockID.log_stack, count: 1, data: 0}, ["lll", "ltl", "lll"], ["l", BlockID.splited_log, 0, "t", ItemID.plant_tinder, 0]);
});
IDRegistry.genBlockID("log_stack_burn");
Block.createBlock("log_stack_burn", [{name: "Stacked stripped log burn", texture: [["log_stripped_oak_side", 0]], inCreative: false}], LIGHT);
ToolAPI.registerBlockMaterial(BlockID.log_stack_burn, "wood", 0);
setStackRender(BlockID.log_stack_burn, "log_stripped_oak_side");
IDRegistry.genBlockID("charcoal_stack");
Block.createBlock("charcoal_stack", [{name: "Charcoal block", texture: [["charcoal_block", 0]], inCreative: false}]);
ToolAPI.registerBlockMaterial(BlockID.charcoal_stack, "wood", 0);
setStackRender(BlockID.charcoal_stack, "charcoal_block");
Block.setRandomTickCallback(BlockID.log_stack_burn, function (x, y, z, id, data) {
    if (Math.random() <= 0.5 && World.getBlockID(x, y + 1, z) != 0) {
        World.setBlock(x, y, z, BlockID.charcoal_stack);
    }
});
Block.registerDropFunction(BlockID.charcoal_stack, function () {
    return [[263, Math.random() * 8, 1]];
});
Block.registerDropFunction(BlockID.log_stack_burn, function () {
    return [[0, 0, 0]];
});

