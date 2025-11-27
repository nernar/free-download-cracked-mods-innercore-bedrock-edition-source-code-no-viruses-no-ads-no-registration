createBlock("fission_casing", "Fission Casing", [["fission_casing", 0]]);
createBlock("fission_core", "Fission Core", [["fission_casing", 0], ["fission_casing", 0], ["fission_core", 0]]);

createBlock("fission_controller", "Fission Controller", [["fission_casing", 0], ["fission_casing", 0], ["fission_casing", 0], ["chem_controller", 0], ["fission_casing", 0], ["fission_casing", 0]]);
TileRenderer.setStandartModel(BlockID.fission_controller, [["fission_casing", 0], ["fission_casing", 0], ["fission_casing", 0], ["chem_controller", 0], ["fission_casing", 0], ["fission_casing", 0]]);
TileRenderer.registerRotationModel(BlockID.fission_controller, 0, [["fission_casing", 0], ["fission_casing", 0], ["fission_casing", 0], ["chem_controller", 0], ["fission_casing", 0], ["fission_casing", 0]]);
TileRenderer.registerRotationModel(BlockID.fission_controller, 4, [["fission_casing", 0], ["fission_casing", 0], ["fission_casing", 0], ["chem_controller", 1], ["fission_casing", 0], ["fission_casing", 0]]);
TileRenderer.registerRotationModel(BlockID.fission_controller, 8, [["fission_casing", 0], ["fission_casing", 0], ["fission_casing", 0], ["chem_controller", 2], ["fission_casing", 0], ["fission_casing", 0]]);

Recipes2.addShaped({id: BlockID.fission_casing, count: 4}, "aba:bcb:aba", {a: ItemID.ingotBarium, b: ItemID.ingotMagnesium, c: VanillaItemID.blaze_powder});
Recipes2.addShaped(BlockID.fission_core, "aba:aba:aba", {a: ItemID.ingotChromium, b: VanillaItemID.blaze_rod});
Recipes2.addShaped(BlockID.fission_controller, "aba:cda:aba", {a: ItemID.ingotBeryllium, b: BlockID.fission_casing, c: VanillaBlockID.glass, d: VanillaItemID.blaze_rod});


const windowFission = new UI.StandartWindow({
    standart: {
        header: {text: {text: "Fission"}},
        inventory: {standart: true},
        background: {standart: true}
    },
    drawing: [
        {type: "frame", x: 400, y: 50, width: 54, height: 186, bitmap: "classic_frame_slot", scale: 3}
    ],
    elements: {
        scaleEnergy: {type: "scale", x: 403, y: 53, bitmap: "minechemistry.energy", scale: 3, direction: 1},
        scaleProgress: {type: "scale", x: 608, y: 126, z: 1, bitmap: "minechemistry.progress", scale: 3},
        backProgress: {type: "image", x: 608, y: 126, bitmap: "minechemistry.progress_bg", scale: 3, clicker: {
            onClick: function(container){
                RV && RV.openRecipePage("chemical_fission", container);
            }
        }},
        slotSource: {type: "slot", x: 540, y: 110, isValid: ValidFunc.element},
        slotResult1: {type: "slot", x: 700, y: 110, isValid: ValidFunc.output},
        slotResult2: {type: "slot", x: 760, y: 110, isValid: ValidFunc.output}
    }
});


registerMachine(BlockID.fission_controller, {

    defaultValues: {
        meta: 0,
        energy: 0,
        progress: 0,
        condition: 0
    },

    getGuiScreen: function(){
        return windowFission;
    },

    setModel: function(){
        TileRenderer.mapAtCoords(this.x, this.y, this.z, this.blockID, this.data.meta + this.data.condition * 4);
    },

    setCondition: function(condition){
        if(this.data.condition != condition){
            this.data.condition = condition;
            this.setModel();
        }
    },

    checkStructure: function(){
        const dir = StorageInterface.directionsBySide[this.data.meta + 2];
        let isValid = true;
        let x = y = z = xx = yy = zz = 0;
        loop:
        for(x = -2; x <= 2; x++){
        for(y = -2; y <= 2; y++){
        for(z = -2; z <= 2; z++){
            xx = this.x - dir.x * 3 + x;
            yy = this.y + 2 + y;
            zz = this.z - dir.z * 3 + z;
            if(Math.abs(x) === 2 || Math.abs(y) === 2 || Math.abs(z) === 2){
                if(World.getBlockID(xx, yy, zz) !== BlockID.fission_casing){
                    isValid = false;
                    break loop;
                }
            }
            else if(x === 0 && z === 0){
                if(World.getBlockID(xx, yy, zz) !== BlockID.fission_core){
                    isValid = false;
                    break loop;
                }
            }
        }
        }
        }
        this.setCondition(isValid ? 1 : 0);
        return isValid;
    },

    init: function(){
        this.checkStructure();
        this.setModel();
        delete this.liquidStorage;
    },

    destroy: function(){
        BlockRenderer.unmapAtCoords();
    },

    outputResult: function(num){
        const slotResult1 = this.container.getSlot("slotResult1");
        const half = num >> 1;
        const surplus = num & 1;
        if(surplus === 0){
            if(slotResult1.id === 0 || slotResult1.id === ItemID.chem_element && slotResult1.data === half && slotResult1.count <= 62){
                slotResult1.id = ItemID.chem_element;
                slotResult1.data = half;
                slotResult1.count += 2;
                return true;
            }
        }
        else{
            const slotResult2 = this.container.getSlot("slotResult2");
            if((slotResult1.id === 0 || slotResult1.id === ItemID.chem_element && slotResult1.data === half && slotResult1.count < 64) && (slotResult2.id === 0 || slotResult2.id === ItemID.chem_element && slotResult2.data === half + 1 && slotResult2.count < 64)){
                slotResult1.id = ItemID.chem_element;
                slotResult1.data = half;
                slotResult1.count++;
                slotResult2.id = ItemID.chem_element;
                slotResult2.data = half + 1;
                slotResult2.count++;
                return true;
            }
        }
        return false;
    },

    tick: function(){

        const slotSource = this.container.getSlot("slotSource");

        if(this.data.condition === 0){
            World.getThreadTime() % 40 === 0 && this.checkStructure();
        }
        else if(slotSource.id === ItemID.chem_element && slotSource.data > 1){
            if(this.data.condition === 1){
                if(this.checkStructure()){
                    this.setCondition(2);
                }
            }
            else{
                if(this.data.energy >= Cfg.fission.cost){
                    this.data.energy -= Cfg.fission.cost;
                    this.data.progress++;
                }
                if(this.data.progress >= Cfg.fission.time && this.outputResult(slotSource.data)){
                    slotSource.count--;
                    this.container.validateSlot("slotSource");
                    this.data.progress = 0;
                    this.setCondition(1);
                }
            }
        }
        else{
            this.data.progress = 0;
            this.setCondition(1);
        }

        this.container.setScale("scaleEnergy", this.data.energy / this.getEnergyStorage());
        this.container.setScale("scaleProgress", this.data.progress / Cfg.fission.time);
        StorageInterface.checkHoppers(this);

    },

    getEnergyStorage: function(){
        return Cfg.fission.storage;
    }

});

TileRenderer.setRotationPlaceFunction(BlockID.fission_controller);


StorageInterface.createInterface(BlockID.fission_controller, {
    slots: {
        slotSource: {input: true},
        slotResult1: {output: true},
        slotResult2: {output: true}
    }
});