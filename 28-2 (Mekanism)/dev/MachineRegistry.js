var MachineRegistry = {machineIDs: {}, isMachine: function (id) {
    return this.machineIDs[id];
}, register: function (id, prototype) {
    ICRender.getGroup("ic-wire").add(id, -1);
    ICRender.getGroup("pipe").add(id, -1);
    this.machineIDs[id] = true;
    if (prototype.defaultValues) {
        prototype.defaultValues.energy = 0;
        prototype.defaultValues.fuel = 0;
        prototype.defaultValues.fuelmax = 0;
        prototype.defaultValues.out = 0;
    } else {
        prototype.defaultValues = {energy: 0, fuel: 0, fuelmax: 0, out: 0};
    }
    if (!prototype.getEnergyStorage) {
        prototype.getEnergyStorage = function () {
            return 0;
        };
    }
    prototype.destroyBlock = function (coords, player) {
        extra = new ItemExtraData();
        extra.putInt("J", this.data.energy);
        var NativeDropItem = ModAPI.requireGlobal("Level.dropItem");
        NativeDropItem(coords.x, coords.y, coords.z, 0, id, 1, 0, extra);
    };
    ToolAPI.registerBlockMaterial(id, "stone");
    Block.setDestroyTime(id, 3);
    TileEntity.registerPrototype(id, prototype);
    EnergyTileRegistry.addEnergyTypeForId(id, energyJ);
    EnergyTileRegistry.addEnergyTypeForId(id, EU);
    EnergyTileRegistry.addEnergyTypeForId(id, RF);
}, basicEnergyReceiveFunc: function (type, src) {
    var energyNeed = this.getEnergyStorage() - this.data.energy;
    this.data.energy += src.getAll(energyNeed);
}, placeFunction: function (coords, item, block) {
    Game.prevent();
    var x = coords.relative.x;
    var y = coords.relative.y;
    var z = coords.relative.z;
    block = World.getBlockID(x, y, z);
    if (GenerationUtils.isTransparentBlock(block)) {
        World.setBlock(x, y, z, item.id, 0);
        var tile = World.addTileEntity(x, y, z);
        if (item.extra) {
            tile.data.energy = item.extra.getInt("J");
        }
    }
}};

