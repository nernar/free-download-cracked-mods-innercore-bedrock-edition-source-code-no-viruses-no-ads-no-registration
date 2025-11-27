IDRegistry.genBlockID("stee");
Block.createBlock("stee", [{name: "Стальной блок", texture: [["стальной_блок", 0], ["стальной_блок", 0], ["стальной_блок", 0], ["стальной_блок", 0], ["стальной_блок", 0], ["стальной_блок", 0]], inCreative: false}], BLOCK_TYPE_STAL);
    if (Config.TexturesQuality) {
createFurnitureStal("mini_pres","мини_пресс","iron_block",0, "Мини пресс", ItemID.mini_pres, BlockID.mini_pres);
}
    if (!Config.TexturesQuality) {
createFurnitureStal("mini_pres","ммини_пресс","iron_block",0, "Мини пресс", ItemID.mini_pres, BlockID.mini_pres);
}
function createMPRender(id, idMaterial, dataMaterial){
var render = new ICRender.Model();
BlockRenderer.setStaticICRender (id, 0, render);
var model = BlockRenderer.createModel();
model.addBox (11/16, 0, 11/16, 15/16, 4/16, 15/16,  4, 0);
model.addBox (10/16, 0, 11/16, 11/16, 4/16, 15/16,  4, 0);
model.addBox (11/16, 0, 10/16, 15/16, 4/16, 11/16,  4, 0);
model.addBox (1/16, 0, 11/16, 5/16, 4/16, 15/16,  4, 0);
model.addBox (5/16, 0, 11/16, 6/16, 4/16, 15/16,  4, 0);
model.addBox (11/16, 0, 5/16, 15/16, 4/16, 6/16,  4, 0);
model.addBox (11/16, 0, 1/16, 15/16, 4/16, 5/16,  4, 0);
model.addBox (10/16, 0, 1/16, 11/16, 4/16, 5/16,  4, 0);
model.addBox (1/16, 0, 10/16, 5/16, 4/16, 11/16,  4, 0);
model.addBox (1/16, 0, 1/16, 5/16, 4/16, 5/16,  4, 0);
model.addBox (5/16, 0, 1/16, 6/16, 4/16, 5/16,  4, 0);
model.addBox (1/16, 0, 5/16, 5/16, 4/16, 6/16,  4, 0);
model.addBox (7/16, 1/16, 1/16, 9/16, 2/16, 15/16,  4, 0);
model.addBox (1/16, 1/16, 7/16, 15/16, 2/16, 9/16,  4, 0);
model.addBox (6/16, 2/16, 1/16, 7/16, 4/16, 6/16,  4, 0);
model.addBox (6/16, 2/16, 10/16, 7/16, 4/16, 15/16,  4, 0);
model.addBox (9/16, 2/16, 1/16, 10/16, 4/16, 6/16,  4, 0);
model.addBox (9/16, 2/16, 10/16, 10/16, 4/16, 15/16,  4, 0);
model.addBox (1/16, 2/16, 6/16, 6/16, 4/16, 7/16,  4, 0);
model.addBox (10/16, 2/16, 6/16, 15/16, 4/16, 7/16,  4, 0);
model.addBox (1/16, 2/16, 9/16, 6/16, 4/16, 10/16,  4, 0);
model.addBox (10/16, 2/16, 9/16, 15/16, 4/16, 10/16,  4, 0);
model.addBox (4/16, 4/16, 3/16, 7/16, 5/16, 4/16,  4, 0);
model.addBox (9/16, 4/16, 3/16, 12/16, 5/16, 4/16,  4, 0);
model.addBox (4/16, 4/16, 12/16, 7/16, 5/16, 13/16,  4, 0);
model.addBox (9/16, 4/16, 12/16, 12/16, 5/16, 13/16,  4, 0);
model.addBox (3/16, 4/16, 4/16, 4/16, 5/16, 7/16,  4, 0);
model.addBox (3/16, 4/16, 9/16, 4/16, 5/16, 12/16,  4, 0);
model.addBox (12/16, 4/16, 4/16, 13/16, 5/16, 7/16,  4, 0);
model.addBox (12/16, 4/16, 9/16, 13/16, 5/16, 12/16,  4, 0);
model.addBox (5/16, 0, 5/16, 11/16, 1/16, 11/16,  4, 0);
model.addBox (6/16, 1/16, 1/16, 7/16, 2/16, 15/16,  BlockID.stee, 0);
model.addBox (9/16, 1/16, 1/16, 10/16, 2/16, 15/16,  BlockID.stee, 0);
model.addBox (1/16, 1/16, 6/16, 15/16, 2/16, 7/16,  BlockID.stee, 0);
model.addBox (1/16, 1/16, 9/16, 15/16, 2/16, 10/16,  BlockID.stee, 0);
model.addBox (7/16, 3/16, 7/16, 9/16, 4/16, 9/16,  BlockID.stee, 0);
model.addBox (6/16, 2/16, 9/16, 7/16, 3/16, 10/16,  BlockID.stee, 0);
model.addBox (9/16, 2/16, 9/16, 10/16, 3/16, 10/16,  BlockID.stee, 0);
model.addBox (9/16, 2/16, 6/16, 10/16, 3/16, 7/16,  BlockID.stee, 0);
model.addBox (6/16, 2/16, 6/16, 7/16, 3/16, 7/16,  BlockID.stee, 0);
model.addBox (5/16, 3/16, 10/16, 6/16, 4/16, 11/16,  BlockID.stee, 0);
model.addBox (10/16, 3/16, 10/16, 11/16, 4/16, 11/16,  BlockID.stee, 0);
model.addBox (10/16, 3/16, 5/16, 11/16, 4/16, 6/16,  BlockID.stee, 0);
model.addBox (5/16, 3/16, 5/16, 6/16, 4/16, 6/16,  BlockID.stee, 0);
model.addBox (14/16, 5/16, 14/16, 15/16, 6/16, 15/16,  BlockID.stee, 0);
model.addBox (1/16, 5/16, 1/16, 2/16, 6/16, 2/16,  BlockID.stee, 0);
model.addBox (1/16, 5/16, 14/16, 2/16, 6/16, 15/16,  BlockID.stee, 0);
model.addBox (14/16, 5/16, 1/16, 15/16, 6/16, 2/16,  BlockID.stee, 0);
model.addBox (2/16, 5/16, 2/16, 3/16, 14/16, 3/16,  BlockID.stee, 0);
model.addBox (13/16, 5/16, 13/16, 14/16, 14/16, 14/16,  BlockID.stee, 0);
model.addBox (2/16, 5/16, 13/16, 3/16, 14/16, 14/16,  BlockID.stee, 0);
model.addBox (13/16, 5/16, 2/16, 14/16, 14/16, 3/16,  BlockID.stee, 0);
model.addBox (2/16, 11/16, 1/16, 3/16, 12/16, 15/16,  BlockID.stee, 0);
model.addBox (13/16, 11/16, 1/16, 14/16, 12/16, 15/16,  BlockID.stee, 0);
model.addBox (1/16, 11/16, 2/16, 15/16, 12/16, 3/16,  BlockID.stee, 0);
model.addBox (1/16, 11/16, 13/16, 15/16, 12/16, 14/16,  BlockID.stee, 0);
model.addBox (3/16, 13/16, 3/16, 4/16, 1, 4/16,  BlockID.stee, 0);
model.addBox (12/16, 13/16, 12/16, 13/16, 1, 13/16,  BlockID.stee, 0);
model.addBox (3/16, 13/16, 12/16, 4/16, 1, 13/16,  BlockID.stee, 0);
model.addBox (12/16, 13/16, 3/16, 13/16, 1, 4/16,  BlockID.stee, 0);
model.addBox (4/16, 15/16, 4/16, 5/16, 1, 5/16,  BlockID.stee, 0);
model.addBox (11/16, 15/16, 11/16, 12/16, 1, 12/16,  BlockID.stee, 0);
model.addBox (4/16, 15/16, 11/16, 5/16, 1, 12/16,  BlockID.stee, 0);
model.addBox (11/16, 15/16, 4/16, 12/16, 1, 5/16,  BlockID.stee, 0);
model.addBox (5/16, 15/16, 5/16, 6/16, 1, 6/16,  BlockID.stee, 0);
model.addBox (10/16, 15/16, 10/16, 11/16, 1, 11/16,  BlockID.stee, 0);
model.addBox (5/16, 15/16, 10/16, 6/16, 1, 11/16,  BlockID.stee, 0);
model.addBox (10/16, 15/16, 5/16, 11/16, 1, 6/16,  BlockID.stee, 0);
model.addBox (6/16, 15/16, 6/16, 7/16, 31/32, 7/16,  BlockID.stee, 0);
model.addBox (9/16, 15/16, 9/16, 10/16, 31/32, 10/16,  BlockID.stee, 0);
model.addBox (6/16, 15/16, 9/16, 7/16, 31/32, 10/16,  BlockID.stee, 0);
model.addBox (9/16, 15/16, 6/16, 10/16, 31/32, 7/16,  BlockID.stee, 0);
model.addBox (7/16, 8/16, 7/16, 9/16, 15/16, 9/16,  BlockID.stee, 0);
model.addBox (6/16, 8/16, 7/16, 10/16, 10/16, 9/16,  BlockID.stee, 0);
model.addBox (7/16, 8/16, 6/16, 9/16, 10/16, 10/16,  BlockID.stee, 0);
model.addBox (6/16, 7/16, 6/16, 7/16, 9/16, 7/16,  BlockID.stee, 0);
model.addBox (9/16, 7/16, 9/16, 10/16, 9/16, 10/16,  BlockID.stee, 0);
model.addBox (9/16, 7/16, 6/16, 10/16, 9/16, 7/16,  BlockID.stee, 0);
model.addBox (6/16, 7/16, 9/16, 7/16, 9/16, 10/16,  BlockID.stee, 0);
model.addBox (9/16, 2/16, 7/16, 15/16, 4/16, 9/16,  42, 0);
model.addBox (7/16, 2/16, 9/16, 9/16, 4/16, 15/16,  42, 0);
model.addBox (1/16, 2/16, 7/16, 7/16, 4/16, 9/16,  42, 0);
model.addBox (7/16, 2/16, 1/16, 9/16, 4/16, 7/16,  42, 0);
model.addBox (0, 0, 1/16, 1/16, 5/16, 3/16,  42, 0);
model.addBox (1/16, 0, 0, 3/16, 5/16, 1/16,  42, 0);
model.addBox (15/16, 0, 1/16, 1, 5/16, 3/16,  42, 0);
model.addBox (13/16, 0, 0, 15/16, 5/16, 1/16,  42, 0);
model.addBox (0, 0, 13/16, 1/16, 5/16, 15/16,  42, 0);
model.addBox (1/16, 0, 15/16, 3/16, 5/16, 1,  42, 0);
model.addBox (15/16, 0, 13/16, 1, 5/16, 15/16,  42, 0);
model.addBox (13/16, 0, 15/16, 15/16, 5/16, 1,  42, 0);
model.addBox (15/16, 1/16, 15/16, 1, 4/16, 1,  42, 0);
model.addBox (0, 1/16, 0, 1/16, 4/16, 1/16,  42, 0);
model.addBox (15/16, 1/16, 0, 1, 4/16, 1/16,  42, 0);
model.addBox (0, 1/16, 15/16, 1/16, 4/16, 1,  42, 0);
model.addBox (12/16, 4/16, 12/16, 15/16, 5/16, 15/16,  42, 0);
model.addBox (1/16, 4/16, 1/16, 4/16, 5/16, 4/16,  42, 0);
model.addBox (1/16, 4/16, 12/16, 4/16, 5/16, 15/16,  42, 0);
model.addBox (12/16, 4/16, 1/16, 15/16, 5/16, 4/16,  42, 0);
model.addBox (12/16, 5/16, 13/16, 15/16, 6/16, 14/16,  42, 0);
model.addBox (13/16, 5/16, 12/16, 14/16, 6/16, 15/16,  42, 0);
model.addBox (2/16, 5/16, 1/16, 3/16, 6/16, 4/16,  42, 0);
model.addBox (1/16, 5/16, 2/16, 4/16, 6/16, 3/16,  42, 0);
model.addBox (2/16, 5/16, 12/16, 3/16, 6/16, 15/16,  42, 0);
model.addBox (1/16, 5/16, 13/16, 4/16, 6/16, 14/16,  42, 0);
model.addBox (12/16, 5/16, 2/16, 15/16, 6/16, 3/16,  42, 0);
model.addBox (13/16, 5/16, 1/16, 14/16, 6/16, 4/16,  42, 0);
model.addBox (11/16, 4/16, 11/16, 12/16, 5/16, 12/16,  42, 0);
model.addBox (4/16, 4/16, 4/16, 5/16, 5/16, 5/16,  42, 0);
model.addBox (4/16, 4/16, 11/16, 5/16, 5/16, 12/16,  42, 0);
model.addBox (11/16, 4/16, 4/16, 12/16, 5/16, 5/16,  42, 0);
model.addBox (3/16, 4/16, 7/16, 4/16, 5/16, 9/16,  42, 0);
model.addBox (12/16, 4/16, 7/16, 13/16, 5/16, 9/16,  42, 0);
model.addBox (7/16, 4/16, 3/16, 9/16, 5/16, 4/16,  42, 0);
model.addBox (7/16, 4/16, 12/16, 9/16, 5/16, 13/16,  42, 0);
model.addBox (2/16, 4/16, 4/16, 3/16, 5/16, 12/16,  42, 0);
model.addBox (13/16, 4/16, 4/16, 14/16, 5/16, 12/16,  42, 0);
model.addBox (4/16, 4/16, 2/16, 12/16, 5/16, 3/16,  42, 0);
model.addBox (4/16, 4/16, 13/16, 12/16, 5/16, 14/16,  42, 0);
model.addBox (0, 1/16, 3/16, 1/16, 3/16, 4/16,  42, 0);
model.addBox (0, 1/16, 12/16, 1/16, 3/16, 13/16,  42, 0);
model.addBox (15/16, 1/16, 3/16, 1, 3/16, 4/16,  42, 0);
model.addBox (15/16, 1/16, 12/16, 1, 3/16, 13/16,  42, 0);
model.addBox (3/16, 1/16, 0, 4/16, 3/16, 1/16,  42, 0);
model.addBox (12/16, 1/16, 0, 13/16, 3/16, 1/16,  42, 0);
model.addBox (3/16, 1/16, 15/16, 4/16, 3/16, 1,  42, 0);
model.addBox (12/16, 1/16, 15/16, 13/16, 3/16, 1,  42, 0);
model.addBox (3/16, 5/16, 3/16, 4/16, 12/16, 4/16,  42, 0);
model.addBox (12/16, 5/16, 12/16, 13/16, 12/16, 13/16,  42, 0);
model.addBox (3/16, 5/16, 12/16, 4/16, 12/16, 13/16,  42, 0);
model.addBox (12/16, 5/16, 3/16, 13/16, 12/16, 4/16,  42, 0);
model.addBox (1/16, 10/16, 2/16, 4/16, 11/16, 3/16,  42, 0);
model.addBox (2/16, 10/16, 1/16, 3/16, 11/16, 4/16,  42, 0);
model.addBox (13/16, 10/16, 12/16, 14/16, 11/16, 15/16,  42, 0);
model.addBox (12/16, 10/16, 13/16, 15/16, 11/16, 14/16,  42, 0);
model.addBox (2/16, 10/16, 12/16, 3/16, 11/16, 15/16,  42, 0);
model.addBox (12/16, 10/16, 2/16, 15/16, 11/16, 3/16,  42, 0);
model.addBox (13/16, 10/16, 1/16, 14/16, 11/16, 4/16,  42, 0);
model.addBox (1/16, 10/16, 13/16, 4/16, 11/16, 14/16,  42, 0);
model.addBox (1/16, 12/16, 2/16, 4/16, 13/16, 3/16,  42, 0);
model.addBox (2/16, 12/16, 1/16, 3/16, 13/16, 4/16,  42, 0);
model.addBox (13/16, 12/16, 12/16, 14/16, 13/16, 15/16,  42, 0);
model.addBox (12/16, 12/16, 13/16, 15/16, 13/16, 14/16,  42, 0);
model.addBox (2/16, 12/16, 12/16, 3/16, 13/16, 15/16,  42, 0);
model.addBox (12/16, 12/16, 2/16, 15/16, 13/16, 3/16,  42, 0);
model.addBox (13/16, 12/16, 1/16, 14/16, 13/16, 4/16,  42, 0);
model.addBox (1/16, 12/16, 13/16, 4/16, 13/16, 14/16,  42, 0);
model.addBox (1/16, 11/16, 1/16, 2/16, 12/16, 2/16,  42, 0);
model.addBox (14/16, 11/16, 14/16, 15/16, 12/16, 15/16,  42, 0);
model.addBox (14/16, 11/16, 1/16, 15/16, 12/16, 2/16,  42, 0);
model.addBox (1/16, 11/16, 14/16, 2/16, 12/16, 15/16,  42, 0);
model.addBox (1/16, 11/16, 3/16, 2/16, 12/16, 4/16,  42, 0);
model.addBox (14/16, 11/16, 3/16, 15/16, 12/16, 4/16,  42, 0);
model.addBox (1/16, 11/16, 12/16, 2/16, 12/16, 13/16,  42, 0);
model.addBox (14/16, 11/16, 12/16, 15/16, 12/16, 13/16,  42, 0);
model.addBox (3/16, 11/16, 1/16, 4/16, 12/16, 2/16,  42, 0);
model.addBox (12/16, 11/16, 1/16, 13/16, 12/16, 2/16,  42, 0);
model.addBox (3/16, 11/16, 14/16, 4/16, 12/16, 15/16,  42, 0);
model.addBox (12/16, 11/16, 14/16, 13/16, 12/16, 15/16,  42, 0);
model.addBox (2/16, 13/16, 3/16, 3/16, 15/16, 4/16,  42, 0);
model.addBox (2/16, 13/16, 12/16, 3/16, 15/16, 13/16,  42, 0);
model.addBox (13/16, 13/16, 3/16, 14/16, 15/16, 4/16,  42, 0);
model.addBox (13/16, 13/16, 12/16, 14/16, 15/16, 13/16,  42, 0);
model.addBox (3/16, 13/16, 2/16, 4/16, 15/16, 3/16,  42, 0);
model.addBox (12/16, 13/16, 2/16, 13/16, 15/16, 3/16,  42, 0);
model.addBox (3/16, 13/16, 13/16, 4/16, 15/16, 14/16,  42, 0);
model.addBox (12/16, 13/16, 13/16, 13/16, 15/16, 14/16,  42, 0);
model.addBox (3/16, 14/16, 3/16, 5/16, 15/16, 13/16,  42, 0);
model.addBox (11/16, 14/16, 3/16, 13/16, 15/16, 13/16,  42, 0);
model.addBox (5/16, 14/16, 3/16, 11/16, 15/16, 5/16,  42, 0);
model.addBox (5/16, 14/16, 11/16, 11/16, 15/16, 13/16,  42, 0);
model.addBox (5/16, 14/16, 5/16, 6/16, 15/16, 6/16,  42, 0);
model.addBox (10/16, 14/16, 10/16, 11/16, 15/16, 11/16,  42, 0);
model.addBox (10/16, 14/16, 5/16, 11/16, 15/16, 6/16,  42, 0);
model.addBox (5/16, 14/16, 10/16, 6/16, 15/16, 11/16,  42, 0);
model.addBox (3/16, 13/16, 7/16, 4/16, 14/16, 9/16,  42, 0);
model.addBox (12/16, 13/16, 7/16, 13/16, 14/16, 9/16,  42, 0);
model.addBox (7/16, 13/16, 3/16, 9/16, 14/16, 4/16,  42, 0);
model.addBox (7/16, 13/16, 12/16, 9/16, 14/16, 13/16,  42, 0);
model.addBox (7/16, 11/16, 6/16, 9/16, 15/16, 7/16,  42, 0);
model.addBox (7/16, 11/16, 9/16, 9/16, 15/16, 10/16,  42, 0);
model.addBox (6/16, 11/16, 7/16, 7/16, 15/16, 9/16,  42, 0);
model.addBox (9/16, 11/16, 7/16, 10/16, 15/16, 9/16,  42, 0);
render.addEntry(model);
}
createMPRender(BlockID.mini_pres, 4, 0);
Item.registerUseFunction("mini_pres", function(coords, item, block){
if(block.id !== 199)
{
	World.setBlock(coords.relative.x,coords.relative.y,coords.relative.z, BlockID.mini_pres);
	World.addTileEntity(coords.relative.x,coords.relative.y,coords.relative.z);
Player.decreaseCarriedItem (1)
}
});
const guiMPress = new UI.StandartWindow({
    standart: {
        header: {text: {text: "Мини пресс(mini press)"}},
        inventory: {standart: true},
        background: {standart: true}
    },

    drawing: [
        {type: "bitmap", x: 530, y: 146, bitmap: "furnace_bar_background", scale: 3.2},
        {type: "bitmap", x: 350, y: 100, bitmap: "rf_scale", scale: 3.2}
    ],

    elements: {
        "progressScale": {type: "scale", x: 530, y: 146, direction: 0, bitmap: "furnace_bar_scale", scale: 3.2},
        "energyScale": {type: "scale", x: 350, y: 100, direction: 1, bitmap: "rf_scale_full", scale: 3.2},

        "slotSource": {type: "slot", x: 441, y: 142},
        "slotSource2": {type: "slot", x: 930, y: 60, bitmap: "Chip"},
        "slotResult": {type: "slot", x: 625, y: 142, isValid: ValidFunc.result},
		"textInfo1": {type: "text", x: 350, y: 252, width: 300, height: 30, text: "0/"},
		"textInfo2": {type: "text", x: 350, y: 282, width: 300, height: 30, text: "10000"}
    }
});
const PressmRecipes = {
    recipes: {},

    add: function (obj) {
        if (!obj) return;

        this.recipes[obj.input.id + ":" + obj.input.data] = obj;
    },

    getResult: function (id, data) {
        return this.recipes[id + ":" + data];
    }

};
PressmRecipes.add({
    input: {id: 256, data: 0},
    result: {id: ItemID.obichnii_metallalom, data: 0, count: 1}
});
PressmRecipes.add({
    input: {id: ItemID.meteoritovii_slitok, data: 0},
    result: {id: ItemID.mezhgalakticheskaia_valuta, data: 0, count: 3}
});
PressmRecipes.add({
    input: {id: 257, data: 0},
    result: {id: ItemID.obichnii_metallalom, data: 0, count: 1}
});
PressmRecipes.add({
    input: {id: 258, data: 0},
    result: {id: ItemID.obichnii_metallalom, data: 0, count: 1}
});
PressmRecipes.add({
    input: {id: 259, data: 0},
    result: {id: ItemID.obichnii_metallalom, data: 0, count: 1}
});
PressmRecipes.add({
    input: {id: 267, data: 0},
    result: {id: ItemID.obichnii_metallalom, data: 0, count: 1}
});
PressmRecipes.add({
    input: {id: 302, data: 0},
    result: {id: ItemID.obichnii_metallalom, data: 0, count: 1}
});
PressmRecipes.add({
    input: {id: 305, data: 0},
    result: {id: ItemID.obichnii_metallalom, data: 0, count: 1}
});
PressmRecipes.add({
    input: {id: 306, data: 0},
    result: {id: ItemID.obichnii_metallalom, data: 0, count: 1}
});
PressmRecipes.add({
    input: {id: 309, data: 0},
    result: {id: ItemID.obichnii_metallalom, data: 0, count: 1}
});
PressmRecipes.add({
    input: {id: 325, data: 0},
    result: {id: ItemID.obichnii_metallalom, data: 0, count: 1}
});
PressmRecipes.add({
    input: {id: 404, data: 0},
    result: {id: ItemID.obichnii_metallalom, data: 0, count: 1}
});
PressmRecipes.add({
    input: {id: 356, data: 0},
    result: {id: ItemID.obichnii_metallalom, data: 0, count: 1}
});
PressmRecipes.add({
    input: {id: 345, data: 0},
    result: {id: ItemID.obichnii_metallalom, data: 0, count: 1}
});
PressmRecipes.add({
    input: {id: 283, data: 0},
    result: {id: ItemID.cvetnoi_metallalom, data: 0, count: 1}
});
PressmRecipes.add({
    input: {id: 284, data: 0},
    result: {id: ItemID.cvetnoi_metallalom, data: 0, count: 1}
});
PressmRecipes.add({
    input: {id: 285, data: 0},
    result: {id: ItemID.cvetnoi_metallalom, data: 0, count: 1}
});
PressmRecipes.add({
    input: {id: 286, data: 0},
    result: {id: ItemID.cvetnoi_metallalom, data: 0, count: 1}
});
PressmRecipes.add({
    input: {id: 294, data: 0},
    result: {id: ItemID.cvetnoi_metallalom, data: 0, count: 1}
});
PressmRecipes.add({
    input: {id: 314, data: 0},
    result: {id: ItemID.cvetnoi_metallalom, data: 0, count: 1}
});
PressmRecipes.add({
    input: {id: 322, data: 0},
    result: {id: ItemID.cvetnoi_metallalom, data: 0, count: 3}
});
PressmRecipes.add({
    input: {id: 466, data: 0},
    result: {id: ItemID.cvetnoi_metallalom, data: 0, count: 3}
});
PressmRecipes.add({
    input: {id: 347, data: 0},
    result: {id: ItemID.cvetnoi_metallalom, data: 0, count: 1}
});
PressmRecipes.add({
    input: {id: 317, data: 0},
    result: {id: ItemID.cvetnoi_metallalom, data: 0, count: 1}
});
MachineRegistry.register(BlockID.mini_pres, {
    ENERGY_CONSUME: 12.5,
    DOP_ENERGY_CONSUME: 22.5,
    PROGRESS_MAX: 400,

    defaultValues: {
        progress: 0
    },

	init:function(){
	this.animationDo = new Animation.Item(this.x+.5, this.y+.4, this.z+.5);
	this.animationD = new Animation.Item(this.x+.5, this.y+.3, this.z+.5);
	this.animationDD = new Animation.Item(this.x+.5, this.y+61/64, this.z+.5);
	},

    getGuiScreen: function () {
        return guiMPress;
    },

    getTransportSlots: function () {
        return {input: ["slotSource"], output: ["slotResult"]};
    },

    tick: function () {
        let slotSource = this.container.getSlot("slotSource");
        let slotResult = this.container.getSlot("slotResult");
        var slotSource2 = this.container.getSlot("slotSource2");
			if(slotSource.id!=0){
				this.animationDo.describeItem({
			id: slotSource.id,
			count: 1,
			data: slotSource.data,
			size: .55,
			rotation:[3.14/2, 0, 0]
		});
		this.animationDo.load();
			}else {
				this.animationDo.destroy();
			}
			if(slotResult.id!=0){
				this.animationD.describeItem({
			id: slotResult.id,
			count: 1,
			data: slotResult.data,
			size: .4,
			rotation:[3.14/2, 0, 0]
		});
		this.animationD.load();
			}else {
				this.animationD.destroy();
			}
			if(slotSource2.id!=0){
				this.animationDD.describeItem({
			id: slotSource2.id,
			count: 1,
			data: slotSource2.data,
			size: .3,
			rotation:[3.14/2, 0, 0]
		});
		this.animationDD.load();
			}else {
				this.animationDD.destroy();
			}
        if (this.data.progress) {
            if (!slotSource.id) {
                this.data.progress = 0;
                return;
            }

            if (this.data.energy < this.ENERGY_CONSUME) return;
			if(slotSource2.id!==ItemID.chip_ysk_1){
            this.data.energy -= this.ENERGY_CONSUME;
}
			if(slotSource2.id==ItemID.chip_ysk_1){
            this.data.energy -= (this.ENERGY_CONSUME+this.DOP_ENERGY_CONSUME);
}
            if (this.data.progress >= this.PROGRESS_MAX) {
                var r = PressmRecipes.getResult(slotSource.id, slotSource.data);
                var result = r.result;

                if (slotResult.id === 0 || (slotResult.id === result.id && slotResult.data === result.data && slotResult.count + result.count <= Item.getMaxStack(slotResult.id))) {
                        slotResult.count = !slotResult.id ? result.count : slotResult.count + result.count;
                        slotResult.id = result.id;
                        slotResult.data = result.data;


                    slotSource.count -= 1;
                    this.data.progress = 0;
            
                }
                } else {
                    			if(slotSource2.id!==ItemID.chip_ysk_1){
this.data.progress++;
}
			if(slotSource2.id==ItemID.chip_ysk_1){
this.data.progress++;
this.data.progress++;
}
            }
        } else if (slotSource.id && PressmRecipes.getResult(slotSource.id, slotSource.data)) {
            this.data.progress = 1;
        }

        this.container.setScale("progressScale", this.data.progress / this.PROGRESS_MAX);
        this.container.setScale("energyScale", this.data.energy / this.getEnergyStorage());
        this.container.validateAll();
		this.container.setText("textInfo1", this.data.energy + "/");
},
    getEnergyStorage: function () {
        return 10000;
    }
});