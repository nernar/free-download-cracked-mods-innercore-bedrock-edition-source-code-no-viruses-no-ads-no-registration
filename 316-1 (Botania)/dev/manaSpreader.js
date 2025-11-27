IDRegistry.genBlockID("manaSpreader");
Block.createBlock("manaSpreader", [{name: "Mana Spreader", texture: [["livingwood", 0], ["livingwood", 0], ["livingwood", 0], ["livingwood", 0], ["mana_side", 0], ["mana_side", 0]], inCreative: true}]);
ToolAPI.registerBlockMaterial(BlockID.manaSpreader, "stone");
Block.setBlockShape(BlockID.manaPool, {x: 1 / 16, y: 0 / 16, z: 1 / 16}, {x: 15 / 16, y: 14 / 16, z: 15 / 16});
Callback.addCallback("PostLoaded", function () {
    Recipes.addShaped({id: BlockID.manaSpreader, count: 1, data: 0}, ["rrr", "gp ", "rrr"], ["r", BlockID.livingwood, 0, "g", 280, 0, "p", ItemID.petalRed, 0]);
});
var render = new ICRender.Model();
BlockRenderer.setStaticICRender(BlockID.manaSpreader, -1, render);
var model = BlockRenderer.createModel();
model.addBox(5 / 16, 4 / 16, 5 / 16, 11 / 16, 10 / 16, 11 / 16, [["mana_inside", 0]]);
model.addBox(1 / 16, 0 / 16, 1 / 16, 15 / 16, 1 / 16, 15 / 16, BlockID.manaSpreader, 0);
model.addBox(1 / 16, 1 / 16, 14 / 16, 15 / 16, 13 / 16, 15 / 16, BlockID.manaSpreader, 0);
model.addBox(1 / 16, 13 / 16, 1 / 16, 15 / 16, 14 / 16, 15 / 16, BlockID.manaSpreader, 0);
model.addBox(1 / 16, 1 / 16, 2 / 16, 2 / 16, 13 / 16, 14 / 16, BlockID.manaSpreader, 0);
model.addBox(14 / 16, 1 / 16, 2 / 16, 15 / 16, 13 / 16, 14 / 16, BlockID.manaSpreader, 0);
model.addBox(6 / 16, 1 / 16, 1 / 16, 10 / 16, 5 / 16, 2 / 16, BlockID.manaSpreader, 0);
model.addBox(6 / 16, 9 / 16, 1 / 16, 10 / 16, 13 / 16, 2 / 16, BlockID.manaSpreader, 0);
model.addBox(1 / 16, 1 / 16, 1 / 16, 6 / 16, 13 / 16, 2 / 16, BlockID.manaSpreader, 0);
model.addBox(10 / 16, 1 / 16, 1 / 16, 15 / 16, 13 / 16, 2 / 16, BlockID.manaSpreader, 0);
render.addEntry(model);
TileEntity.registerPrototype(BlockID.manaSpreader, {defaultValues: {curMana: 0, maxMana: 40, link: {}, flowers: []}, getGuiScreen: function () {
    return guiBatBox;
}, tick: function () {
    if (World.getWorldTime() % 60 == 0 && this.data.link.y && (this.data.link.data.maxMana - this.data.link.data.curMana) >= 10 && this.data.curMana >= 10) {
        this.data.curMana -= 10;
        this.data.link.data.curMana += 10;
    }
    for (e = 0; e < this.data.flowers.length; e++) {
        if (!this.data.flowers[e]) {
            this.data.flowers.splice(e, 1);
        }
        let crds = this.data.flowers[e];
        if (!isGenerator(World.getBlockID(crds.x, crds.y, crds.z))) {
            this.data.flowers.splice(e, 1);
        }
    }
    for (e = 0; e < this.data.flowers.length; e++) {
        if (this.data.flowers[e].y && this.data.flowers[e].data.curMana > 0 && this.data.curMana < 10) {
            this.data.flowers[e].data.curMana -= 1;
            this.data.curMana += 1;
        }
    }
    if (this.data.link.y > 1) {
        this.container.setText("text", "ygjguyuygiygihgyguyguygiyg Mana: " + this.data.curMana + "/40 * " + World.getTileEntity(this.data.link.x, this.data.link.y, this.data.link.z).data.curMana + "  " + this.data.flowers.length);
    }
}, click: function (id, count, data, coords) {
    if (id == 280) {
        this.data.curMana += 40;
    }
}});

