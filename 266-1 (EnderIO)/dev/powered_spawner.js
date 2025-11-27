IDRegistry.genBlockID("poweredSpawner");
Block.createBlockWithRotation("poweredSpawner", [{"name": "Powered spawner", "texture": [["machineBottom", 0], ["machineTop", 0], ["machineSide", 0], ["poweredSpawnerFront", 0], ["machineSide", 0], ["machineSide", 0]], "inCreative": true}]);
var PoweredSpawnerGUI = new UI.StandartWindow({standart: {header: {text: {text: "Powered spawner"}}, inventory: {standart: true}, background: {standart: true}}, drawing: [{type: "bitmap", x: 335, y: 140, bitmap: "redflux_bar0", scale: 3.2}, {type: "bitmap", x: 510, y: 260, bitmap: "fire_scale0", scale: 3.2}], elements: {"energyScale": {type: "scale", x: 335, y: 140, direction: 1, bitmap: "redflux_bar1", scale: 3.2}, "progressScale": {type: "scale", x: 510, y: 260, direction: 1, bitmap: "fire_scale1", scale: 3.2}, "slotVessel": {type: "slot", x: 500, y: 200}, "capacitorSlot": {type: "slot", x: 325, y: 320}, "text": {type: "text", x: 400, y: 100, width: 100, height: 30, text: "RF"}}});
Callback.addCallback("PostLoaded", function () {
    Recipes.addShaped({id: BlockID.poweredSpawner, count: 1, data: 0}, ["ehe", "ece", "vzv"], ["e", ItemID.electricalSteel, 0, "c", BlockID.machineChassi, 0, "v", ItemID.vibrantCrystal, 0, "z", ItemID.skullZombieController, 0, "h", 397, -1]);
});
MachineRegistry.registerPrototype(BlockID.poweredSpawner, {defaultValues: {progress: 0, standartSpeed: 1, energyUsage: 20, maxEnergyStorage: 100000}, oldValues: {standartSpeed: 1, energyUsage: 160, maxEnergyStorage: 100000}, getGuiScreen: function () {
    return PoweredSpawnerGUI;
}, getSpawnCoords() {
    let X = rnd(this.x, this.x + 4);
    let Z = rnd(this.z, this.z + 4);
    if (GenerationUtils.isTransparentBlock(World.getBlockID(X, this.y, Z))) {
        return {x: X, z: Z, canSpawn: true};
    } else {
        return {canSpawn: false};
    }
}, tick: function () {
    let slotVessel = this.container.getSlot("slotVessel");
    let vesselMob = SoulVessel.getVesselMob(slotVessel.id);
    this.container.setScale("progressScale", this.data.progress / 500);
    this.container.setScale("energyScale", this.data.energy / this.getEnergyStorage());
    if (vesselMob && this.data.energy >= this.data.energyUsage) {
        this.data.progress += this.data.standartSpeed;
        this.data.energy -= this.data.energyUsage;
        if (this.data.progress >= 500 && this.getSpawnCoords().canSpawn) {
            if (this.getSpawnCoords().canSpawn) {
                Entity.spawn(this.getSpawnCoords().x, this.y, this.getSpawnCoords().z, vesselMob);
            }
            this.data.progress = 0;
        }
    }
    if (!vesselMob && this.data.progress > 0) {
        this.data.progress = 0;
    }
    let slotCapacitor = this.container.getSlot("capacitorSlot");
    let upgrade = UpgradeAPI.getUpgradeData(slotCapacitor.id);
    if (upgrade) {
        this.data.standartSpeed = upgrade.speed;
        this.data.energyUsage = upgrade.usage * 3;
        this.data.maxEnergyStorage = upgrade.storage;
    } else {
        this.data.standartSpeed = this.oldValues.standartSpeed;
        this.data.energyUsage = this.oldValues.energyUsage;
        this.data.maxEnergyStorage = this.oldValues.maxEnergyStorage;
    }
    this.container.setText("text", this.data.energy + "/" + this.data.maxEnergyStorage);
    if (this.data.energy > this.data.maxEnergyStorage) {
        this.data.energy = this.data.maxEnergyStorage;
    }
}, getEnergyStorage: function () {
    return this.data.maxEnergyStorage;
}, energyTick: MachineRegistry.basicEnergyReceiveFunc});

