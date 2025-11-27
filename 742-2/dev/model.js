IDRegistry.genBlockID("blockForHide");
Block.createBlock("blockForHide", [{
    name: "Block for hide&seek",
    texture: [
        ["gold_block", 0]
    ],
    inCreative: true
}]);
Translation.addTranslation("Block for hide&seek", {
    ru: "Блок для пряток"
})
ToolAPI.registerBlockMaterial(BlockID.blockForHide, "wood");
Recipes.addShaped({
    id: BlockID.blockForHide,
    count: 1,
    data: 0
}, ["bbb",
    "bvb",
    "bbb"
], ["b", 17, -1]);
 
var model = BlockRenderer.createModel();
model.addBox(0 / 16, 0, 0 / 16, 1 / 16, 16 / 16, 16 / 16, 17, 0);
model.addBox(15 / 16, 0, 0 / 16, 16 / 16, 16 / 16, 16 / 16, 17, 0);
model.addBox(1 / 16, 0, 0 / 16, 15 / 16, 16 / 16, 1 / 16, 17, 0);
model.addBox(1 / 16, 0, 15 / 16, 15 / 16, 16 / 16, 16 / 16, 17, 0); 
var hideRender = new ICRender.Model();
hideRender.addEntry(model);
BlockRenderer.setStaticICRender(BlockID.blockForHide, -1, hideRender);
var model = new ICRender.CollisionShape();
var entry = model.addEntry();
entry.addBox(0 / 16, 0, 0 / 16, 1 / 16, 16 / 16, 16 / 16)
entry.addBox(15 / 16, 0, 0 / 16, 16 / 16, 16 / 16, 16 / 16)
entry.addBox(1 / 16, 0, 0 / 16, 15 / 16, 16 / 16, 1 / 16)
entry.addBox(1 / 16, 0, 15 / 16, 15 / 16, 16 / 16, 16 / 16)
BlockRenderer.setCustomCollisionShape(BlockID.blockForHide, -1, model)