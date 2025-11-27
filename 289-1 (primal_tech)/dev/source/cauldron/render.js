IDRegistry.genBlockID("woodenCauldron");
Block.createBlock("woodenCauldron", [{
    "name": "Cauldron",
    "texture": [
        ["log_oak", 0]
    ],
    "inCreative": true
}]);

var render = new ICRender.Model();
var model = BlockRenderer.createModel();
model.addBox(14 / 16, 0 / 16, 14 / 16, 16 / 16, 1 / 16, 16 / 16, "stone", 0);
model.addBox(0 / 16, 0 / 16, 14 / 16, 2 / 16, 1 / 16, 16 / 16, "stone", 0);
model.addBox(0 / 16, 0 / 16, 0 / 16, 2 / 16, 1 / 16, 2 / 16, "stone", 0);
model.addBox(14 / 16, 0 / 16, 0 / 16, 16 / 16, 1 / 16, 2 / 16, "stone", 0);
model.addBox(14 / 16, 1 / 16, 1 / 16, 15 / 16, 5 / 16, 2 / 16, "stone", 0);
model.addBox(1 / 16, 1 / 16, 1 / 16, 2 / 16, 5 / 16, 2 / 16, "stone", 0);
model.addBox(1 / 16, 1 / 16, 14 / 16, 2 / 16, 5 / 16, 15 / 16, "stone", 0);
model.addBox(14 / 16, 1 / 16, 14 / 16, 15 / 16, 5 / 16, 15 / 16, "stone", 0);
model.addBox(1 / 16, 3 / 16, 2 / 16, 15 / 16, 5 / 16, 14 / 16, "log_oak", 0);
model.addBox(1 / 16, 5 / 16, 0 / 16, 15 / 16, 11 / 16, 2 / 16, "log_oak", 0);
model.addBox(0 / 16, 5 / 16, 1 / 16, 2 / 16, 11 / 16, 15 / 16, "log_oak", 0);
model.addBox(15 / 16, 5 / 16, 16 / 16, 1 / 16, 11 / 16, 14 / 16, "log_oak", 0);
model.addBox(16 / 16, 5 / 16, 15 / 16, 14 / 16, 11 / 16, 1 / 16, "log_oak", 0);
model.addBox(2 / 16, 4 / 16, 2 / 16, 14 / 16, 10 / 16, 14 / 16, "water_placeholder", 0);
render.addEntry(model);

BlockRenderer.setStaticICRender(BlockID.woodenCauldron, -1, render);
Block.setBlockShape(BlockID.woodenCauldron, { "x": 0, "y": 0, "z": 0}, {"x": 1, "y": 0.6875, "z": 1});