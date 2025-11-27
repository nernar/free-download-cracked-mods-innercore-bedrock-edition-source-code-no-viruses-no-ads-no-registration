IDRegistry.genBlockID("manaStorage");
Block.createBlock("manaStorage", [{name: "mana Storage", texture: [["brick2", 0]], inCreative: true}]);
mod_tip(BlockID.manaStorage);
Translation.addTranslation("mana Storage", {ru: "\u0445\u0440\u0430\u043d\u0438\u043b\u0438\u0449\u0435 \u043c\u0430\u043d\u044b"});
var Particles = ModAPI.requireGlobal("Particles");
TileEntity.registerPrototype(BlockID.manaStorage, {defaultValues: {mode: "nothing", manaStorage: 0, player: null}, isData: function () {
}, tick: function () {
    if (this.data.mode == "give") {
        let mana = ManaCore.get(this.data.player);
        let per1 = mana.countMax;
        per1 = mana.countMax / 100 * 5;
        per1 = mana.countMax - per1;
        if (mana.count <= per1 - 1) {
            if (this.data.manaStorage >= 1) {
                mana.count++;
                ManaCore.set(this.data.player, mana);
                this.data.manaStorage--;
                let pos = Entity.getPosition(this.data.player);
                ParticlesAPI.coords(ParticlesAPI.rai, this.x, this.y, this.z, pos.x, pos.y, pos.z);
            }
        }
    }
    if (this.data.mode == "accumulate") {
        let mana = ManaCore.get(this.data.player);
        if (this.data.manaStorage <= 19999) {
            if (mana.count >= 1) {
                mana.count--;
                this.data.manaStorage++;
                ManaCore.set(this.data.player, mana);
                let pos = Entity.getPosition(this.data.player);
                ParticlesAPI.coords(ParticlesAPI.rai, pos.x, pos.y, pos.z, this.x, this.y, this.z);
            }
        }
    }
}, click: function (id, count, data, coords, player) {
    if (DA) {
        ac.give(player, "DungeonAchievement", "storageMagic");
    }
    if (Entity.getSneaking(player) == true) {
        Mp.message(player, "mana: " + this.data.manaStorage + ";");
    } else {
        if (this.data.player != player) {
            this.data.player = player;
            Mp.message(player, "\u0431\u043b\u043e\u043a \u043f\u0440\u0438\u0432\u044f\u0437\u0430\u043d \u043a \u0432\u0430\u043c");
        } else {
            let v = true;
            if (this.data.mode == "accumulate") {
                if (v == true) {
                    v = false;
                    this.data.mode = "give";
                    Mp.message(player, "\u0432\u044b \u0441\u043c\u0435\u043d\u0438\u043b\u0438 \u0440\u0438\u0436\u0438\u043c \u043d\u0430 " + this.data.mode);
                }
            }
            if (this.data.mode == "nothing") {
                if (v == true) {
                    v = false;
                    this.data.mode = "accumulate";
                    Mp.message(player, "\u0432\u044b \u0441\u043c\u0435\u043d\u0438\u043b\u0438 \u0440\u0438\u0436\u0438\u043c \u043d\u0430 " + this.data.mode);
                }
            }
            if (this.data.mode == "give") {
                if (v == true) {
                    v = false;
                    this.data.mode = "nothing";
                    Mp.message(player, "\u0432\u044b \u0441\u043c\u0435\u043d\u0438\u043b\u0438 \u0440\u0438\u0436\u0438\u043c \u043d\u0430 " + this.data.mode);
                }
            }
            v = true;
        }
    }
}});
var mesh2 = new RenderMesh();
var renderAPI2 = new ICRender.Model();
BlockRenderer.setStaticICRender(BlockID.manaStorage, -1, renderAPI2);
var modelAPI2 = new BlockRenderer.Model(mesh2);
renderAPI2.addEntry(modelAPI2);
mesh2.importFromFile(__dir__ + "/res/model/magis_storage.obj", "obj", null);
mesh2.setBlockTexture("storage-mana", 0);

