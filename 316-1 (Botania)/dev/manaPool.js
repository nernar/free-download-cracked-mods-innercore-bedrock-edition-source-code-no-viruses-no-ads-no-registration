var manaPoolRecipes = [];
function addManapoolRecipe(input, manaCost, output, alchemyType) {
    if (!alchemyType) {
        alchemyType = "none";
    }
    if (!input.id) {
    }
    if (!input.data) {
        input.data = 0;
    }
    if (!output.id) {
    }
    if (!output.data) {
        output.data = 0;
    }
    if (!output.count) {
        output.count = 1;
    }
    manaPoolRecipes.push({input: {id: input.id, data: input.data}, manaCost: manaCost, output: {id: output.id, data: output.data, count: output.count}, alchemyType: alchemyType});
}
IDRegistry.genItemID("manaPool");
Item.createItem("manaPool", "Mana Pool", {name: "manaPool"});
IDRegistry.genBlockID("manaPool");
Block.createBlock("manaPool", [{name: "Mana Pool", texture: [["livingrock", 0]], inCreative: false}]);
ToolAPI.registerBlockMaterial(BlockID.manaPool, "stone");
setItemPlace(BlockID.manaPool, ItemID.manaPool);
addStorage(BlockID.manaPool);
Block.setBlockShape(BlockID.manaPool, {x: 0.0001, y: 0.0001, z: 0.0001}, {x: 1, y: 0.5, z: 1});
Callback.addCallback("PostLoaded", function () {
    Recipes.addShaped({id: ItemID.manaPool, count: 1, data: 0}, ["r r", "rrr"], ["r", BlockID.livingrock, 0]);
});
var render = new ICRender.Model();
BlockRenderer.setStaticICRender(BlockID.manaPool, -1, render);
var model = BlockRenderer.createModel();
model.addBox(0 / 16, 0, 0 / 16, 1, 1 / 16, 1, BlockID.manaPool, 0);
model.addBox(0 / 16, 0, 0 / 16, 1 / 16, 8 / 16, 1, BlockID.manaPool, 0);
model.addBox(0 / 16, 0, 0 / 16, 1, 8 / 16, 1 / 16, BlockID.manaPool, 0);
model.addBox(15 / 16, 0, 0 / 16, 1, 8 / 16, 1, BlockID.manaPool, 0);
model.addBox(0 / 16, 0, 15 / 16, 1, 8 / 16, 1, BlockID.manaPool, 0);
render.addEntry(model);
TileEntity.registerPrototype(BlockID.manaPool, {defaultValues: {curMana: 3000, maxMana: 4000}, tick: function () {
    this.container.setScale("progressScale", this.data.curMana / 4000);
}, click: function (id, count, data, coords) {
    if (Player.getCarriedItem().id == 280) {
        Game.message("Current mana: " + this.data.curMana + isStorage(ItemID.manaPool));
    }
    for (i = 0; i < manaPoolRecipes.length; i++) {
        var curRecipe = manaPoolRecipes[i];
        if (curRecipe.input.id == id && curRecipe.alchemyType == "none" && this.data.curMana >= curRecipe.manaCost) {
            Player.setCarriedItem(id, count - 1, data);
            World.drop(this.x + 0.5, this.y + 0.5, this.z + 0.5, curRecipe.output.id, curRecipe.output.count, curRecipe.output.data);
            this.data.curMana -= curRecipe.manaCost;
        }
    }
}});

