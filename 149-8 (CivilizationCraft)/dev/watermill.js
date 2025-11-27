IDRegistry.genBlockID("kineticWatermill");
Block.createBlock("kineticWatermill", [{name: "Waterwheel", texture: [["nothing", 0]], inCreative: false}]);
IDRegistry.genItemID("haft");
Item.createItem("haft", "Haft", {name: "haft", meta: 0}, {stack: 64});
IDRegistry.genItemID("waterwheel_blade");
Item.createItem("waterwheel_blade", "Water wheel blade", {name: "waterwheel_blade", meta: 0}, {stack: 64});
IDRegistry.genItemID("waterwheel");
Item.createItem("waterwheel", "Water wheel", {name: "waterwheel", meta: 0}, {stack: 64});
Callback.addCallback("PostLoaded", function () {
    RecipeSystem.addRecipeToWorkbench(ItemID.waterwheel_blade, 1, 0, [[0, 0], [280, 0], [0, 0], [280, 0], [ItemID.plantRope, 0], [280, 0], [5, 0], [280, 0], [5, 0]], 0);
    RecipeSystem.addRecipeToWorkbench(ItemID.waterwheel, 1, 0, [[ItemID.waterwheel_blade, 0], [ItemID.haft, 0], [ItemID.waterwheel_blade, 0], [ItemID.haft, 0], [ItemID.gearWooden, 0], [ItemID.haft, 0], [ItemID.waterwheel_blade, 0], [ItemID.haft, 0], [ItemID.waterwheel_blade, 0]], 0);
});
var waterWheelDir = [{x: 1, z: 0}, {x: -1, z: 0}, {x: 0, z: 1}, {x: 0, z: -1}];
Item.registerUseFunction("waterwheel", function (coords, item, block) {
    let plc = coords.relative;
    if (World.getBlockID(plc.x, plc.y, plc.z) == 0 && World.getBlockID(plc.x, plc.y - 1, plc.z) == 0) {
        World.setBlock(plc.x, plc.y, plc.z, BlockID.kineticWatermill);
        World.addTileEntity(plc.x, plc.y, plc.z);
        Player.setCarriedItem(item.id, item.count - 1, 0);
    } else {
        if (Item.getName(280) == "\u041f\u0430\u043b\u043a\u0430") {
            Game.message("\u041d\u0435\u0434\u043e\u0441\u0442\u0430\u0442\u043e\u0447\u043d\u043e \u043f\u0440\u043e\u0441\u0442\u0440\u0430\u043d\u0441\u0442\u0432\u0430, \u0434\u043b\u044f \u0442\u043e\u0433\u043e, \u0447\u0442\u043e\u0431\u044b \u0440\u0430\u0441\u043f\u043e\u043b\u043e\u0436\u0438\u0442\u044c \u0432\u043e\u0434\u044f\u043d\u043e\u0435 \u043a\u043e\u043b\u0435\u0441\u043e!");
        } else {
            Game.message("There is not enough space to place a water wheel!");
        }
    }
});
Block.registerDropFunction(BlockID.kineticWatermill, function () {
    return [[ItemID.waterwheel, 1, 0]];
});
KineticMachine.registerPrototype(BlockID.kineticWatermill, {defaultValues: {work: false}, initAnimation: function () {
    this.animation = new Animation.Item(this.x + 0.5, this.y + 0.5, this.z + 0.5);
    this.animation.describeItem({id: ItemID.waterwheel, count: 1, data: 0, rotation: "z", size: 2});
    this.animation.load();
}, destroyAnimation: function () {
    if (this.animation) {
        this.animation.destroy();
    }
}, updateAnimation: function () {
    this.destroyAnimation();
    this.initAnimation();
}, destroy: function () {
    this.destroyAnimation();
}, tick: function () {
    let dir = waterWheelDir[i];
    if (World.getBlockID(this.x, this.y - 1, this.z) == 9 && World.getBlock(this.x, this.y - 1, this.z).data > 0) {
        this.data.work = true;
        if (rnd(0, 20) == 20 && World.getThreadTime() % 40 == 0) {
            World.grop(this.x + 0.5, this.y + 1, this.z + 0.5, 349, 1, rnd(0, 3));
        }
    }
    if (World.getThreadTime() % 50 == 0) {
        this.data.work = false;
    }
}, init: function () {
    this.initAnimation();
}, destroy: function () {
    this.destroyAnimation();
}, type: function () {
    return "out";
}});

