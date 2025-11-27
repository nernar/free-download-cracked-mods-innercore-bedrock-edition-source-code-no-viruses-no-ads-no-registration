var apothecaryRecipes = [];
var ingredients = [];
function addApothecaryRecipe(input, output, outputCount, outputData) {
    var inputMas = [];
    if (!outputData) {
        outputData = 0;
    }
    if (!outputCount) {
        outputCount = 1;
    }
    for (var r = 0; r < input.length; r++) {
        if (!input[r].data) {
            input[r].data = 0;
        }
        inputMas[r] = input[r].id * 100 + input[r].data;
    }
    apothecaryRecipes.push({input: inputMas, output: {id: output, data: outputData, count: outputCount}});
}
function addIngredient(id) {
    ingredients.push(id * 100);
}
addApothecaryRecipe([{id: ItemID.petalRed}, {id: ItemID.petalBrown}, {id: ItemID.petalBrown}], 280, 1, 0);
addApothecaryRecipe([{id: ItemID.petalGreen}, {id: ItemID.petalGreen}, {id: ItemID.petalLime}], 295, 1, 0);
var guiPetalTest = new UI.StandartWindow({standart: {header: {text: {text: "Petal Apothecary"}}, inventory: {standart: true}, background: {standart: true}}, drawing: [], elements: {}});
IDRegistry.genItemID("petalApothecary");
Item.createItem("petalApothecary", "Petal Apothecary", {name: "petalApothecary"});
IDRegistry.genBlockID("petalApothecary");
Block.createBlock("petalApothecary", [{name: "Petal Apothecary", texture: [["cobblestone", 0]], inCreative: true}]);
ToolAPI.registerBlockMaterial(BlockID.petalApothecary, "stone");
setItemPlace(BlockID.petalApothecary, ItemID.petalApothecary);
Block.setBlockShape(BlockID.petalApothecary, {x: 2 / 16, y: 0.0001, z: 2 / 16}, {x: 14 / 16, y: 20 / 16, z: 14 / 16});
var render = new ICRender.Model();
BlockRenderer.setStaticICRender(BlockID.petalApothecary, -1, render);
var model = BlockRenderer.createModel();
model.addBox(0 / 16, 0 / 16, 0 / 16, 1, 2 / 16, 1, BlockID.petalApothecary, 0);
model.addBox(1 / 16, 2 / 16, 1 / 16, 15 / 16, 3 / 16, 15 / 16, BlockID.petalApothecary, 0);
model.addBox(2 / 16, 3 / 16, 2 / 16, 14 / 16, 4 / 16, 14 / 16, BlockID.petalApothecary, 0);
model.addBox(5 / 16, 4 / 16, 5 / 16, 11 / 16, 12 / 16, 11 / 16, BlockID.petalApothecary, 0);
model.addBox(4 / 16, 12 / 16, 4 / 16, 12 / 16, 13 / 16, 12 / 16, BlockID.petalApothecary, 0);
model.addBox(3 / 16, 13 / 16, 3 / 16, 13 / 16, 14 / 16, 13 / 16, BlockID.petalApothecary, 0);
model.addBox(2 / 16, 14 / 16, 3 / 16, 3 / 16, 20 / 16, 13 / 16, BlockID.petalApothecary, 0);
model.addBox(3 / 16, 14 / 16, 2 / 16, 13 / 16, 20 / 16, 3 / 16, BlockID.petalApothecary, 0);
model.addBox(3 / 16, 14 / 16, 13 / 16, 13 / 16, 20 / 16, 14 / 16, BlockID.petalApothecary, 0);
model.addBox(13 / 16, 14 / 16, 3 / 16, 14 / 16, 20 / 16, 13 / 16, BlockID.petalApothecary, 0);
render.addEntry(model);
TileEntity.registerPrototype(BlockID.petalApothecary, {defaultValues: {curItems: []}, tick: function () {
}, click: function (id, count, data, coords) {
    for (var h = 0; h < ingredients.length; h++) {
        if (ingredients[h] == id * 100 + data) {
            this.data.curItems[this.data.curItems.length] = id * 100 + data;
            Player.setCarriedItem(id, count - 1, data);
        }
    }
    if (id == 295) {
        Game.message("\xa7b==========Done==========");
        Game.message("Recipes massive length: " + apothecaryRecipes.length);
        Game.message("Ingredients massive length: " + ingredients.length);
        Game.message("Curent items: " + this.data.curItems.length);
        for (var g = 0; g < this.data.curItems.length; g++) {
            Game.message(this.data.curItems[g]);
        }
        for (var k = 0; k < apothecaryRecipes[0].input.length; k++) {
            Game.message(apothecaryRecipes[0].input[k]);
        }
        for (var t = 0; t < apothecaryRecipes.length; t++) {
            var curRecipe = apothecaryRecipes[t];
            alert("Success for");
            if (testMass(curRecipe.input, this.data.curItems)) {
                alert("Success if");
                this.data.curItems = [];
                Player.setCarriedItem(id, count - 1, data);
                World.drop(this.x, this.y, this.z, curRecipe.output.id, curRecipe.output.count, curRecipe.output.data);
            }
        }
    }
    if (id == 0) {
    }
}});
function testMass(arr, arr2) {
    if (arr.length != arr2.length) {
        return false;
    }
    var on = 0;
    for (var i = 0; i < arr.length; i++) {
        for (var j = 0; j < arr2.length; j++) {
            if (arr[i] == arr2[j]) {
                on++;
                arr[i] = undefined;
                arr2[j] = undefined;
                break;
            }
        }
    }
    return on == arr.length ? true : false;
}

