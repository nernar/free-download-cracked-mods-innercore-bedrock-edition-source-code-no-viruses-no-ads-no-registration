createBlock("fusion_casing", "Fusion Casing", [["fusion_casing", 0]]);
createBlock("fusion_core", "Fusion Core", [["fusion_casing", 0], ["fusion_casing", 0], ["fusion_core", 0]]);

createBlock("fusion_controller", "Fusion Controller", [["fusion_casing", 0], ["fusion_casing", 0], ["fusion_casing", 0], ["chem_controller", 0], ["fusion_casing", 0], ["fusion_casing", 0]]);
TileRenderer.setStandartModel(BlockID.fusion_controller, [["fusion_casing", 0], ["fusion_casing", 0], ["fusion_casing", 0], ["chem_controller", 0], ["fusion_casing", 0], ["fusion_casing", 0]]);
TileRenderer.registerRotationModel(BlockID.fusion_controller, 0, [["fusion_casing", 0], ["fusion_casing", 0], ["fusion_casing", 0], ["chem_controller", 0], ["fusion_casing", 0], ["fusion_casing", 0]]);
TileRenderer.registerRotationModel(BlockID.fusion_controller, 4, [["fusion_casing", 0], ["fusion_casing", 0], ["fusion_casing", 0], ["chem_controller", 1], ["fusion_casing", 0], ["fusion_casing", 0]]);
TileRenderer.registerRotationModel(BlockID.fusion_controller, 8, [["fusion_casing", 0], ["fusion_casing", 0], ["fusion_casing", 0], ["chem_controller", 2], ["fusion_casing", 0], ["fusion_casing", 0]]);

Recipes2.addShaped({id: BlockID.fusion_casing, count: 4}, "aba:bcb:aba", {a: ItemID.ingotTungsten, b: ItemID.ingotNeodymium, c: VanillaItemID.ender_pearl});
Recipes2.addShaped(BlockID.fusion_core, "aba:aca:aba", {a: ItemID.ingotThorium, b: BlockID.fusion_casing, c: VanillaItemID.netherstar});
Recipes2.addShaped(BlockID.fusion_controller, "aba:cda:aba", {a: ItemID.ingotSelenium, b: BlockID.fusion_casing, c: VanillaBlockID.glass, d: VanillaItemID.ender_pearl});


const windowFusion = new UI.StandartWindow({
    standart: {
        header: {text: {text: "Fusion"}},
        inventory: {standart: true},
        background: {standart: true}
    },
    drawing: [
        {type: "frame", x: 400, y: 50, width: 54, height: 186, bitmap: "classic_frame_slot", scale: 3}
    ],
    elements: {
        scaleEnergy: {type: "scale", x: 403, y: 53, bitmap: "minechemistry.energy", scale: 3, direction: 1},
        scaleProgress: {type: "scale", x: 668, y: 126, z: 1, bitmap: "minechemistry.progress", scale: 3},
        backProgress: {type: "image", x: 668, y: 126, bitmap: "minechemistry.progress_bg", scale: 3, clicker: {
            onClick: function(container){
                RV && RV.openRecipePage("chemical_fusion", container);
            }
        }},
        slotSource1: {type: "slot", x: 540, y: 110, isValid: ValidFunc.element},
        slotSource2: {type: "slot", x: 600, y: 110, isValid: ValidFunc.element},
        slotResult: {type: "slot", x: 760, y: 110, isValid: ValidFunc.output}
    }
});


registerMachine(BlockID.fusion_controller, {

    defaultValues: {
        meta: 0,
        energy: 0,
        progress: 0,
        condition: 0
    },

    getGuiScreen: function(){
        return windowFusion;
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
                if(World.getBlockID(xx, yy, zz) !== BlockID.fusion_casing){
                    isValid = false;
                    break loop;
                }
            }
            else if(x === 0 && z === 0){
                if(World.getBlockID(xx, yy, zz) !== BlockID.fusion_core){
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

    tick: function(){

        const slotSource1 = this.container.getSlot("slotSource1");
        const slotSource2 = this.container.getSlot("slotSource2");
        const sum = slotSource1.data + slotSource2.data;

        if(this.data.condition === 0){
            World.getThreadTime() % 40 === 0 && this.checkStructure();
        }
        else if(slotSource1.id === ItemID.chem_element && slotSource2.id === ItemID.chem_element && sum <= ElementRegistry.maxAtomicNumber){
            if(this.data.condition === 1){
                if(this.checkStructure()){
                    this.setCondition(2);
                }
            }
            else{
                if(this.data.energy >= Cfg.fusion.cost){
                    this.data.energy -= Cfg.fusion.cost;
                    this.data.progress++;
                }
                if(this.data.progress >= Cfg.fusion.time){
                    const slotResult = this.container.getSlot("slotResult");
                    if(slotResult.id === 0 || slotResult.id === ItemID.chem_element && slotResult.data === sum && slotResult.count < 64){
                        slotResult.id = ItemID.chem_element;
                        slotResult.data = sum;
                        slotResult.count++;
                        slotSource1.count--;
                        slotSource2.count--;
                        this.container.validateSlot("slotSource1");
                        this.container.validateSlot("slotSource2");
                        this.data.progress = 0;
                        this.setCondition(1);
                    }
                }
            }
        }
        else{
            this.data.progress = 0;
            this.setCondition(1);
        }

        this.container.setScale("scaleEnergy", this.data.energy / this.getEnergyStorage());
        this.container.setScale("scaleProgress", this.data.progress / Cfg.fusion.time);
        StorageInterface.checkHoppers(this);

    },

    getEnergyStorage: function(){
        return Cfg.fusion.storage;
    }

});

TileRenderer.setRotationPlaceFunction(BlockID.fusion_controller);


StorageInterface.createInterface(BlockID.fusion_controller, {
    slots: {
        slotSource1: {input: true},
        slotSource2: {input: true},
        slotResult: {output: true}
    }
});