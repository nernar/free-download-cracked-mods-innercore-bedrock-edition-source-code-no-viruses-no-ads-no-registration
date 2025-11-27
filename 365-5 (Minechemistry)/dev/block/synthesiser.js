createBlock("chemical_synthesiser", "Chemical Synthesiser", [["block_minechemistry", 0], ["block_minechemistry", 0], ["block_minechemistry", 0], ["block_minechemistry", 0], ["block_minechemistry", 0], ["block_minechemistry", 0]], true);
Recipes2.addShaped(BlockID.chemical_synthesiser, "aba:aca:ada", {a: VanillaItemID.iron_ingot, b: VanillaItemID.diamond, c: VanillaBlockID.obsidian, d: VanillaBlockID.piston});

(function(){
    let mesh, model, render;
    for(let i = 0; i < 4; i++){
        mesh = new RenderMesh();
        model = new BlockRenderer.Model(mesh);
        render = new ICRender.Model();
        mesh.setBlockTexture("chemical_synthesiser", 0);
        mesh.importFromFile(__dir__ + "res/model/synthesiser_" + i + ".obj", "obj", null);
        render.addEntry(model);
        BlockRenderer.setStaticICRender(BlockID.chemical_synthesiser, i, render);
        ItemModel.getFor(BlockID.chemical_synthesiser, i).setModel(render);
    }
})();

const modelArm = [
    {type: "box", uv: {x: 0, y: 17}, coords: {x: -4.5, y: 4, z: -1.5}, size: {x: 3, y: 2, z: 13}},
    {type: "box", uv: {x: 32, y: 23}, coords: {x: -4.5, y: 9, z: -4.5}, size: {x: 1, y: 8, z: 1}}
];


let windowSynthesiser;

(function(){

    const elements = {
        scaleEnergy: {type: "scale", x: 403, y: 53, bitmap: "minechemistry.energy", scale: 3, direction: 1},
        slotResult: {type: "slot", x: 800, y: 110, isValid: ValidFunc.output},
        slotTarget: {type: "slot", x: 800, y: 50, bitmap: "_default_slot_empty", visual: true, needClean: true},
        buttonClear: {type: "button", x: 540, y: 50, bitmap: "close_button_up", bitmap2: "close_button_down", scale: 2, clicker: {
            onClick: function(container, tile){
                tile.clearTarget();
            }
        }},
        buttonImport: {type: "button", x: 410, y: 276, bitmap: "_button_next_48x24", bitmap2: "_button_next_48x24p", scale: 2, clicker: {
            onClick: function(container){
                const list = {};
                let i = j = 0;
                let slot, inv;
                for(i = 0; i < 9; i++){
                    slot = container.getSlot("slotPattern" + i);
                    if(slot.id !== 0){
                        list[slot.id + ":" + slot.data] = true;
                    }
                }
                for(i = 0; i < 36; i++){
                    inv = InvSource.get(i);
                    if(!((inv.id + ":" + inv.data) in list)){
                        continue;
                    }
                    for(j = 0; j < 10; j++){
                        slot = container.getSlot("slotBuffer" + j);
                        StorageInterface.addItemToSlot(inv, slot);
                        if(inv.count === 0){
                            InvSource.set(i, 0, 0, 0);
                            break;
                        }
                        InvSource.set(i, inv.id, inv.count, inv.data);
                    }
                }
            }
        }},
        buttonExport: {type: "button", x: 410, y: 336, bitmap: "_button_prev_48x24", bitmap2: "_button_prev_48x24p", scale: 2, clicker: {
            onClick: function(container){
                let i = j = 0;
                let slot, inv;
                for(i = 0; i < 10; i++){
                    slot = container.getSlot("slotBuffer" + i);
                    if(slot.id === 0){
                        continue;
                    }
                    for(j = 0; j < 36; j++){
                        inv = InvSource.get(j);
                        StorageInterface.addItemToSlot(slot, inv);
                        InvSource.set(j, inv.id, inv.count, inv.data);
                        if(slot.id === 0){
                            break;
                        }
                    }
                }
            }
        }},
        arrow: {type: "image", x: 770, y: 118, bitmap: "minechemistry.triangle_right", scale: 3, clicker: {
            onClick: function(container){
                RV && RV.openRecipePage("chemical_synthesiser", container);
            }
        }}
    };

    for(let i = 0; i < 9; i++){
        let key = "slotPattern" + i;
        elements[key] = {
            type: "slot",
            x: (i % 3) * 60 + 580,
            y: (i / 3 | 0) * 60 + 50,
            isDarkenAtZero: false,
            isValid: function(id, count, data, container){
                const tile = container.getParent();
                const slot = container.getSlot(key);
                slot.id = id;
                slot.count = Math.min(64, slot.count + 1);
                slot.data = data;
                tile.updateTarget();
                return false;
            },
            clicker: {
                onClick: function(container, tile){
                    const elem = container.getElement(key);
                    const field = elem.getClass().getDeclaredField("currentSelectedSlot");
                    field.setAccessible(true);
                    field.set(elem, elem);
                    container.getSlot(key).count--;
                    container.validateSlot(key);
                    tile.updateTarget();
                },
                onLongClick: function(container, tile){
                    const elem = container.getElement(key);
                    const field = elem.getClass().getDeclaredField("currentSelectedSlot");
                    field.setAccessible(true);
                    field.set(elem, elem);
                    container.clearSlot(key);
                    tile.updateTarget();
                }
            }
        };
    }

    for(let i = 0; i < 10; i++){
        elements["slotBuffer" + i] = {
            type: "slot",
            x: (i % 5) * 60 + 520,
            y: (i / 5 | 0) * 60 + 270
        };
    }

    windowSynthesiser = new UI.StandartWindow({
        standart: {
            header: {text: {text: "Chemical Synthesiser"}},
            inventory: {standart: true},
            background: {standart: true}
        },
        drawing: [
            {type: "frame", x: 400, y: 50, width: 54, height: 186, bitmap: "classic_frame_slot", scale: 3},
            {type: "bitmap", x: 648, y: 240, bitmap: "minechemistry.triangle_up", scale: 3}
        ],
        elements: elements
    });

})();


registerMachine(BlockID.chemical_synthesiser, {

    render: null,
    anim: null,
    animLoaded: false,

    defaultValues: {
        energy: 0,
        progress: 0
    },

    requiredItem: [],

    getGuiScreen: function(){
        return windowSynthesiser;
    },

    init: function(){
        this.render = new Render();
        this.render.getPart("head").addPart("arm");
        this.render.setPart("arm", modelArm, {width: 128, height: 64});
        this.render.getPart("arm").setRotation(0, [0, Math.PI, -Math.PI / 2, Math.PI / 2][World.getBlock(this.x, this.y, this.z).data], 0);
        this.anim = new Animation.Base(this.x + 0.5, this.y - 0.5, this.z + 0.5);
        this.anim.isActive = false;
        this.anim.armTimer = 0;
        this.anim.armX = -4.5;
        this.anim.armY = 9;
        this.anim.describe({render: this.render.getID(), skin: "terrain-atlas/chemical_synthesiser.png"});
        this.anim.load();
        this.anim.setSkylightMode();
        delete this.liquidStorage;
    },

    destroy: function(){
        this.clearTarget();
        this.anim.destroy();
    },

    armPosition: function(timer, start, end, v1, v2){
        return v1 + (timer - start) / (end - start) * (v2 - v1);
    },

    moveArm: function(increase){
        this.anim.armTimer += increase;
        switch(true){
            case this.anim.armTimer <= 5: this.anim.armY = this.armPosition(this.anim.armTimer, 00, 5, 9, 7.2); break;
            case this.anim.armTimer <= 20: this.anim.armX = this.armPosition(this.anim.armTimer, 5, 20, -4.5, 0); break;
            case this.anim.armTimer <= 25: this.anim.armY = this.armPosition(this.anim.armTimer, 20, 25, 7.2, 9); break;
            case this.anim.armTimer <= 30: this.anim.armY = this.armPosition(this.anim.armTimer, 25, 30, 9, 7.2); break;
            case this.anim.armTimer <= 45: this.anim.armX = this.armPosition(this.anim.armTimer, 30, 45, 0, 4.5); break;
            case this.anim.armTimer <= 50: this.anim.armY = this.armPosition(this.anim.armTimer, 45, 50, 7.2, 9); break;
            case this.anim.armTimer <= 55: this.anim.armY = this.armPosition(this.anim.armTimer, 50, 55, 9, 7.2); break;
            case this.anim.armTimer <= 70: this.anim.armX = this.armPosition(this.anim.armTimer, 55, 70, 4.5, 0); break;
            case this.anim.armTimer <= 75: this.anim.armY = this.armPosition(this.anim.armTimer, 70, 75, 7.2, 9); break;
            case this.anim.armTimer <= 80: this.anim.armY = this.armPosition(this.anim.armTimer, 75, 80, 9, 7.2); break;
            case this.anim.armTimer <= 95: this.anim.armX = this.armPosition(this.anim.armTimer, 80, 95, 0, -4.5); break;
            case this.anim.armTimer <= 100: this.anim.armY = this.armPosition(this.anim.armTimer, 95, 100, 7.2, 9); break;
            default: this.anim.armTimer = 0;
        }
        this.render.setPart("arm", [
            {type: "box", uv: {x: 0, y: 17}, coords: {x: this.anim.armX, y: 4, z: -1.5}, size: {x: 3, y: 2, z: 13}},
            {type: "box", uv: {x: 32, y: 23}, coords: {x: this.anim.armX, y: this.anim.armY, z: -4.5}, size: {x: 1, y: 8, z: 1}}
        ], {width: 128, height: 64});
        this.anim.refresh();
    },

    updateTarget: function(){
        const result = SynthesisRecipe.getResult(this.container);
        result?
            this.container.setSlot("slotTarget", result.id, result.count, result.data):
            this.container.clearSlot("slotTarget");
    },

    onMoveItems: function(){
        this.updateTarget();
    },

    clearTarget: function(){
        for(let i = 0; i < 9; i++){
            this.container.clearSlot("slotPattern" + i);
        }
        this.container.clearSlot("slotTarget");
    },

    tick: function(){

        process: {

            if(World.getThreadTime() % Cfg.synthesiser.time !== 0){
                break process;
            }

            if(this.data.energy < Cfg.synthesiser.cost * Cfg.synthesiser.time){
                this.anim.isActive = false;
                break process;
            }

            const result = this.container.getSlot("slotTarget");
            if(result.id === 0){
                this.anim.isActive = false;
                break process;
            }

            const slotResult = this.container.getSlot("slotResult");
            if(slotResult.id !== 0 && (slotResult.id !== result.id || slotResult.data !== result.data || slotResult.count + result.count > 64)){
                this.anim.isActive = false;
                break process;
            }

            const require = {};
            const stock = {};
            let i = 0;
            let slot;
            let key = "";

            for(i = 0; i < 9; i++){
                slot = this.container.getSlot("slotPattern" + i);
                if(slot.id !== 0){
                    key = slot.id + ":" + slot.data;
                    require[key] = (key in require ? require[key] : 0) + slot.count;
                }
            }

            for(i = 0; i < 10; i++){
                slot = this.container.getSlot("slotBuffer" + i);
                if(slot.id !== 0){
                    key = slot.id + ":" + slot.data;
                    stock[key] = (key in stock ? stock[key] : 0) + slot.count;
                }
            }

            for(key in require){
                if(!(key in stock) || stock[key] < require[key]){
                    this.anim.isActive = false;
                    break process;
                }
            }

            let item;
            let decrease = 0;

            for(key in require){
                item = key.split(":");
                item[0] -= 0;
                item[1] -= 0;
                for(i = 0; i < 10; i++){
                    slot = this.container.getSlot("slotBuffer" + i);
                    if(slot.id === item[0] && slot.data === item[1]){
                        decrease = Math.min(slot.count, require[key]);
                        slot.count -= decrease;
                        require[key] -= decrease;
                        this.container.validateSlot("slotBuffer" + i);
                    }
                    if(require[key] === 0){
                        break;
                    }
                }
            }

            slotResult.id = result.id;
            slotResult.data = result.data;
            slotResult.count++;
            this.data.energy -= Cfg.synthesiser.cost * Cfg.synthesiser.time;
            this.anim.isActive = true;

            if(Cfg.smooth){
                break process;
            }

            this.moveArm(5);

        }

        this.container.setScale("scaleEnergy", this.data.energy / this.getEnergyStorage());
        StorageInterface.checkHoppers(this);
        
    },

    getEnergyStorage: function(){
        return Cfg.synthesiser.storage;
    }

});


Cfg.smooth && Block.setAnimateTickCallback(BlockID.chemical_synthesiser, function(x, y, z){
    const tile = World.getTileEntity(x, y, z);
    if(tile && !tile.animLoaded){
        tile.animLoaded = true;
        new Thread(function(){
            while(tile.isLoaded){
                tile.anim.isActive && tile.moveArm(1);
                Thread.sleep(20);
            }
        }).start();
    }
});


StorageInterface.createInterface(BlockID.chemical_synthesiser, {
    slots: {
        slotBuffer0: {input: true},
        slotBuffer1: {input: true},
        slotBuffer2: {input: true},
        slotBuffer3: {input: true},
        slotBuffer4: {input: true},
        slotBuffer5: {input: true},
        slotBuffer6: {input: true},
        slotBuffer7: {input: true},
        slotBuffer8: {input: true},
        slotBuffer9: {input: true},
        slotResult: {output: true}
    }
});