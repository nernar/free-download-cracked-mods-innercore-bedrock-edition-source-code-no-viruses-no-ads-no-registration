Translation.addTranslation("Mechanic Flame Tower", {
    ru: "Механический огнемет"
});

IDRegistry.genBlockID("machineMechanicTowerFlame");
Block.createBlockWithRotation("machineMechanicTowerFlame", [
	{
	    name: "Mechanic Flame Tower", texture: [
           ["block_machine_wooden", 0], ["block_machine_wooden", 0],
           ["block_machine_wooden", 0], ["block_mechanic_flame", 0],
           ["block_machine_wooden", 0], ["block_machine_wooden", 0]
	    ], inCreative: true
	},
], "opaque");


    Recipes.addShaped({ id: BlockID.machineMechanicTowerFlame, count: 1, data: 0 }, [
		"c",
        "a",
        "x"
    ], [
		'a', 261, 0,
        'c', 377, 0,
		'x', BlockID.blockMachineWooden, 0
    ]);

    
FactAPI.machine.registerTile(BlockID.machineMechanicTowerFlame, {
    defaultValues: {
        progress: 0,
        active: false
    },
    getConfig: function () {
        return {
            time: 60
        }
    },
    click: function () {
        var item = Player.getCarriedItem();
        this._getGuiScreen ? this.getGuiScreen = this._getGuiScreen : null;

        if (ItemDictionary.isItemInCathegory(item.id, "wrench")) {
            this.data.active = !this.data.active;
            this._getGuiScreen = this.getGuiScreen
            this.getGuiScreen = function () { return null };
            return
        }
    },
    tick: function () {
        if (!this.data.active) return
        if (World.getThreadTime() % this.getConfig().time == 0) this.MechanicDeploy();
    },
    MechanicDeploy: function () {
        try {
            var all = Entity.getAll();
            for (var i in all) {
                if (!Player.isPlayer(all[i]) && !FactAPI.constants.NotKill[Entity.getType(all[i])]) {
                    if (Entity.getDistanceToCoords(all[i], { x: this.x, y: this.y, z: this.z }) < 10) {
                        Entity.damageEntity(all[i], 4);
                        Entity.setFire(all[i], 60);
                        var crd = Entity.getPosition(all[i]);
                        Particles.line(ParticleType.flame, { x: this.x + 0.5, y: this.y + 0.5, z: this.z + 0.5 }, { x: crd.x + 0.5, y: crd.y + 0.5, z: crd.z + 0.5 }, 0.1, 1);
                        return
                    }
                }
            }
        } catch (e) { }
    }
});