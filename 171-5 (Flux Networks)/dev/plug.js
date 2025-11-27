IDRegistry.genBlockID("energyPlug");
Block.createBlock("energyPlug", [{name: "Energy Plug", texture: [["fluxPlug", 1]], inCreative: true}]);
IDRegistry.genItemID("fluxConnecter");
Item.createItem("fluxConnecter", "Flux Connecter", {name: "fluxConnecter"}, {stack: 1});
IDRegistry.genItemID("fluxCore");
Item.createItem("fluxCore", "Flux Core", {name: "fluxCore"}, {stack: 64});
IDRegistry.genItemID("flux");
Item.createItem("flux", "Flux", {name: "flux"}, {stack: 64});
Callback.addCallback("PostLoaded", function () {
    Recipes.addFurnace(331, ItemID.flux, 0);
    Recipes.addShaped({id: ItemID.fluxCore, count: 1, data: 0}, ["xcx", "cec", "xcx"], ["e", 381, 0, "c", 49, 0, "x", ItemID.flux, 0]);
    Recipes.addShaped({id: BlockID.energyPlug, count: 1, data: 0}, [" c ", "cec", " c "], ["e", 152, 0, "c", ItemID.fluxCore, 0]);
    Recipes.addShaped({id: ItemID.fluxConnecter, count: 1, data: 0}, ["  c", " s ", "o  "], ["o", 49, 0, "c", ItemID.fluxCore, 0, "s", 280, 0]);
});
var lastCoords = null;
Item.registerUseFunction("fluxConnecter", function (c) {
    if (Entity.getSneaking(Player.get()) && lastCoords == null) {
        lastCoords = {x: c.x, y: c.y, z: c.z};
        Game.message("Connecting started at coords x: " + c.x + " y: " + c.y + " z: " + c.z);
    }
});
function createPlugRender(id) {
    var render = new ICRender.Model();
    BlockRenderer.setStaticICRender(id, 0, render);
    var model = BlockRenderer.createModel();
    model.addBox(5 / 16, 5 / 16, 5 / 16, 11 / 16, 11 / 16, 11 / 16, "fluxPlug", 1);
    model.addBox(7 / 16, 2 / 16, 7 / 16, 9 / 16, 5 / 16, 9 / 16, "fluxPlug", 1);
    model.addBox(11 / 32, 0, 11 / 32, 21 / 32, 2 / 16, 21 / 32, "fluxPlug", 1);
    model.addBox(7 / 16, 11 / 16, 7 / 16, 9 / 16, 14 / 16, 9 / 16, "fluxPlug", 1);
    model.addBox(11 / 32, 14 / 16, 11 / 32, 21 / 32, 1, 21 / 32, "fluxPlug", 1);
    model.addBox(2 / 16, 7 / 16, 7 / 16, 5 / 16, 9 / 16, 9 / 16, "fluxPlug", 1);
    model.addBox(11 / 16, 7 / 16, 7 / 16, 14 / 16, 9 / 16, 9 / 16, "fluxPlug", 1);
    model.addBox(0, 11 / 32, 11 / 32, 2 / 16, 21 / 32, 21 / 32, "fluxPlug", 1);
    model.addBox(14 / 16, 11 / 32, 11 / 32, 1, 21 / 32, 21 / 32, "fluxPlug", 1);
    model.addBox(7 / 16, 7 / 16, 2 / 16, 9 / 16, 9 / 16, 5 / 16, "fluxPlug", 1);
    model.addBox(7 / 16, 7 / 16, 11 / 16, 9 / 16, 9 / 16, 14 / 16, "fluxPlug", 1);
    model.addBox(11 / 32, 11 / 32, 0 / 16, 21 / 32, 21 / 32, 2 / 16, "fluxPlug", 1);
    model.addBox(11 / 32, 11 / 32, 14 / 16, 21 / 32, 21 / 32, 1, "fluxPlug", 1);
    render.addEntry(model);
}
createPlugRender(BlockID.energyPlug);
Callback.addCallback("tick", function () {
    let item = Player.getCarriedItem();
    if (lastCoords && item.id != ItemID.fluxConnecter) {
        lastCoords = null;
        if (Item.getName(280) == "\u041f\u0430\u043b\u043a\u0430") {
            Game.message("\u0421\u043e\u0435\u0434\u0438\u043d\u0435\u043d\u0438\u0435 \u043e\u0441\u0442\u0430\u043d\u043e\u0432\u043b\u0435\u043d\u043e!");
        } else {
            Game.message("Connection is stopped!");
        }
    }
});
MachineRegistry.registerPrototype(BlockID.energyPlug, {defaultValues: {energy: 0, pointX: null, pointY: null, pointZ: null}, click: function () {
    if (lastCoords) {
        let tile = World.getTileEntity(lastCoords.x, lastCoords.y, lastCoords.z);
    }
    let item = Player.getCarriedItem();
    if (item.id == ItemID.fluxConnecter && !Entity.getSneaking(Player.get()) && tile && lastCoords) {
        this.data.pointX = lastCoords.x;
        this.data.pointY = lastCoords.y;
        this.data.pointZ = lastCoords.z;
        tile.data.pointX = this.x;
        tile.data.pointY = this.y;
        tile.data.pointZ = this.z;
        lastCoords = null;
        if (Item.getName(280) == "\u041f\u0430\u043b\u043a\u0430") {
            Game.message("\u041f\u043e\u0434\u043a\u043b\u044e\u0447\u0435\u043d\u043e!");
        } else {
            Game.message("Connected!");
        }
    }
    if (item.id != ItemID.fluxConnecter) {
        Game.tipMessage("X: " + this.data.pointX + " Y: " + this.data.pointY + " Z: " + this.data.pointZ + " Energy: " + this.data.energy);
    }
}, getEnergyStorage: function () {
    return 5000;
}, tick: function () {
    let point = {x: this.data.pointX, y: this.data.pointY, z: this.data.pointZ};
    let tile = World.getTileEntity(point.x, point.y, point.z);
    if (tile && this.data.energy > tile.data.energy && tile.data.energy + 32 <= tile.getEnergyStorage()) {
        this.data.energy -= 32;
        tile.data.energy += 32;
    }
    let direct = [{x: 0, y: 1, z: 0}, {x: 0, y: -1, z: 0}, {x: 1, y: 0, z: 0}, {x: -1, y: 0, z: 0}, {x: 0, y: 0, z: 1}, {x: 0, y: 0, z: -1}];
    for (i in direct) {
        let dir = direct[i];
        let tile = World.getTileEntity(this.x + dir.x, this.y + dir.y, this.z + dir.z);
        if (tile && this.data.energy >= 32 && tile.data.energy + 32 <= tile.getEnergyStorage()) {
            this.data.energy -= 32;
            tile.data.energy += 32;
        }
    }
}, energyTick: function (type, src) {
    var TRANSFER = 32;
    this.data.energy += src.storage(Math.min(TRANSFER * 4, this.getEnergyStorage() - this.data.energy), Math.min(TRANSFER, this.data.energy));
}});

