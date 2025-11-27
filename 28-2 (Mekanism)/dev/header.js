importLib("energylib", "*");
var player;
Callback.addCallback("LevelLoaded", function () {
    player = Player.get();
});
function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
var render = new ICRender.Model();
var energyJ = EnergyTypeRegistry.assureEnergyType("J", 0.5);
var EU = EnergyTypeRegistry.assureEnergyType("Eu", 1);
var Ewater = EnergyTypeRegistry.assureEnergyType("Wa", 0);
var RF = EnergyTypeRegistry.assureEnergyType("RF", 0.25);
var GUI_BAR_STANDART_SCALE = 3.2;
var OreGenerator = {genOreNormal: function (x, y, z, ore) {
    for (var xx = -1; xx < 2; xx++) {
        for (var yy = -1; yy < 2; yy++) {
            for (var zz = -1; zz < 2; zz++) {
                var d = Math.sqrt(xx * xx + yy * yy + zz * zz);
                var r = 1.5 - Math.random() / 2;
                if (d < r) {
                    GenerationUtils.setLockedBlock(x + xx, y + yy, z + zz);
                }
            }
        }
    }
}, genOreSmall: function (x, y, z, ore) {
    for (var xx = 0; xx < 2; xx++) {
        for (var yy = 0; yy < 2; yy++) {
            for (var zz = 0; zz < 2; zz++) {
                var d = Math.sqrt(xx * xx + yy * yy + zz * zz);
                var r = 2 - Math.random() * 2;
                if (d < r) {
                    GenerationUtils.setLockedBlock(x + xx, y + yy, z + zz);
                }
            }
        }
    }
}, genOreTiny: function (x, y, z, maxCount) {
    GenerationUtils.setLockedBlock(x, y, z);
    for (var i = 1; i < random(1, maxCount); i++) {
        GenerationUtils.setLockedBlock(x + random(-1, 1), y + random(-1, 1), z + random(-1, 1));
    }
}};
function setupWireRender(id, width, groupName, preventSelfAdd) {
    var render = new ICRender.Model();
    BlockRenderer.setStaticICRender(id, 0, render);
    var boxes = [{side: [1, 0, 0], box: [0.5 + width / 2, 0.5 - width / 2, 0.5 - width / 2, 1, 0.5 + width / 2, 0.5 + width / 2]}, {side: [-1, 0, 0], box: [0, 0.5 - width / 2, 0.5 - width / 2, 0.5 - width / 2, 0.5 + width / 2, 0.5 + width / 2]}, {side: [0, 1, 0], box: [0.5 - width / 2, 0.5 + width / 2, 0.5 - width / 2, 0.5 + width / 2, 1, 0.5 + width / 2]}, {side: [0, -1, 0], box: [0.5 - width / 2, 0, 0.5 - width / 2, 0.5 + width / 2, 0.5 - width / 2, 0.5 + width / 2]}, {side: [0, 0, 1], box: [0.5 - width / 2, 0.5 - width / 2, 0.5 + width / 2, 0.5 + width / 2, 0.5 + width / 2, 1]}, {side: [0, 0, -1], box: [0.5 - width / 2, 0.5 - width / 2, 0, 0.5 + width / 2, 0.5 + width / 2, 0.5 - width / 2]}];
    var group = ICRender.getGroup(groupName);
    if (!preventSelfAdd) {
        group.add(id, -1);
    }
    for (var i in boxes) {
        var box = boxes[i];
        var model = BlockRenderer.createModel();
        model.addBox(box.box[0], box.box[1], box.box[2], box.box[3], box.box[4], box.box[5], id, 0);
        render.addEntry(model).asCondition(box.side[0], box.side[1], box.side[2], group, 0);
    }
    var model = BlockRenderer.createModel();
    model.addBox(0.5 - width / 2, 0.5 - width / 2, 0.5 - width / 2, 0.5 + width / 2, 0.5 + width / 2, 0.5 + width / 2, id, 0);
    render.addEntry(model);
    width = Math.max(width, 0.5);
    Block.setBlockShape(id, {x: 0.5 - width / 2, y: 0.5 - width / 2, z: 0.5 - width / 2}, {x: 0.5 + width / 2, y: 0.5 + width / 2, z: 0.5 + width / 2});
}
function setupBlockAsWire(id) {
    energyJ.registerWire(id);
    RF.registerWire(id);
}

