createBlock("chemical_decomposer", "Chemical Decomposer", [["block_minechemistry", 0]]);
Recipes2.addShaped(BlockID.chemical_decomposer, "aba:aca:aba", {a: VanillaItemID.iron_ingot, b: VanillaBlockID.piston, c: VanillaBlockID.magma});

(function(){
    const mesh = new RenderMesh();
    const model = new BlockRenderer.Model(mesh);
    const render = new ICRender.Model();
    mesh.setBlockTexture("chemical_decomposer", 0);
    mesh.importFromFile(__dir__ + "res/model/decomposer.obj", "obj", null);
    render.addEntry(model);
    BlockRenderer.setStaticICRender(BlockID.chemical_decomposer, -1, render);
    ItemModel.getFor(BlockID.chemical_decomposer, -1).setModel(render);
})();

const modelMill = [
    {type: "box", uv: {x: 12, y: 0}, coords: {x: 0, y: 4.5, z: 0}, size: {x: 1, y: 1, z: 6}},
    {type: "box", uv: {x: 12, y: 7}, coords: {x: 0, y: 4.5, z: 0}, size: {x: 6, y: 1, z: 1}},
    {type: "box", uv: {x: 12, y: 9}, coords: {x: 0, y: 4.5, z: 4}, size: {x: 4, y: 2, z: 2}},
    {type: "box", uv: {x: 12, y: 9}, coords: {x: 0, y: 4.5, z: -4}, size: {x: 4, y: 2, z: 2}},
    {type: "box", uv: {x: 12, y: 13}, coords: {x: 4, y: 4.5, z: 0}, size: {x: 2, y: 2, z: 4}},
    {type: "box", uv: {x: 12, y: 13}, coords: {x: -4, y: 4.5, z: 0}, size: {x: 2, y: 2, z: 4}}
];


let windowDecomposer;

(function(){

    const elements = {
        scaleEnergy: {type: "scale", x: 403, y: 53, bitmap: "minechemistry.energy", scale: 3, direction: 1},
        scaleLiquid: {type: "scale", x: 563, y: 53, width: 42, height: 105, overlay: "minechemistry.liquid_line", scale: 3, direction: 1},
        slotSource: {type: "slot", x: 640, y: 50},
        buttonClear: {type: "button", x: 520, y: 50, bitmap: "close_button_up", bitmap2: "close_button_down", scale: 2, clicker: {
            onClick: function(container, tile){
                for(let key in tile.liquidStorage.liquidAmounts){
                    delete tile.liquidStorage.liquidAmounts[key];
                }
            }
        }},
        buttonExport: {type: "button", x: 520, y: 330, bitmap: "_button_prev_48x24", bitmap2: "_button_prev_48x24p", scale: 2, clicker: {
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
        arrow: {type: "image", x: 645, y: 120, bitmap: "minechemistry.arrow_down", scale: 3, clicker: {
            onClick: function(container){
                RV && RV.openRecipePage("chemical_decomposer", container);
            }
        }}
    };

    for(let i = 0; i < 10; i++){
        elements["slotBuffer" + i] = {
            type: "slot",
            x: (i % 5) * 60 + 520,
            y: (i / 5 | 0) * 60 + 200,
            isValid: ValidFunc.output
        };
    }

    windowDecomposer = new UI.StandartWindow({
        standart: {
            header: {text: {text: "Chemical Decomposer"}},
            inventory: {standart: true},
            background: {standart: true}
        },
        drawing: [
            {type: "frame", x: 400, y: 50, width: 54, height: 186, bitmap: "classic_frame_slot", scale: 3},
            {type: "frame", x: 560, y: 50, width: 48, height: 111, bitmap: "classic_frame_slot", scale: 3}
        ],
        elements: elements
    });

})();


registerMachine(BlockID.chemical_decomposer, {

    render: null,
    anim: null,
    animLoaded: false,

    defaultValues: {
        energy: 0
    },

    itemBuffer: [],

    getGuiScreen: function(){
        return windowDecomposer;
    },

    init: function(){
        this.render = new Render();
        this.render.getPart("head").addPart("mill");
        this.render.setPart("mill", modelMill, {width: 128, height: 64});
        this.anim = new Animation.Base(this.x + 0.5, this.y - 0.5, this.z + 0.5);
        this.anim.isActive = false;
        this.anim.rotationY = 0;
        this.anim.describe({render: this.render.getID(), skin: "terrain-atlas/chemical_decomposer.png"});
        this.anim.load();
        this.anim.setSkylightMode();
        this.liquidStorage.setLimit(null, 5);
    },

    destroy: function(){
        this.anim.destroy();
    },

    click: function(id, count, data){
        const stored = this.liquidStorage.getLiquidStored();
        const amount = this.liquidStorage.getAmount(stored);
        const liquid = LiquidRegistry.getItemLiquid(id, data);
        if(DecomposeRecipe.validLiquid(liquid) && (!stored || stored === liquid && amount + 1 <= this.liquidStorage.getLimit(stored))){
            const empty = LiquidRegistry.getEmptyItem(id, data);
            this.liquidStorage.addLiquid(liquid, 1);
            Player.decreaseCarriedItem();
            Player.addItemToInventory(empty.id, 1, empty.data);
            return true;
        }
        return false;
    },

    tick: function(){

        const liquid = this.liquidStorage.getLiquidStored();
        let isActive = false;

        process: {

            if(this.data.energy < Cfg.decomposer.cost){
                break process;
            }
    
            if(this.itemBuffer.length === 0){

                let result;

                checkLiquid:
                if(liquid && this.liquidStorage.getAmount(liquid) >= 1){
                    result = DecomposeRecipe.getResult(liquid);
                    if(!result){
                        break checkLiquid;
                    }
                    this.liquidStorage.getLiquid(liquid, 1);
                    if(result.length === 0){
                        isActive = true;
                        break process;
                    }
                    this.itemBuffer = result;
                }

                const slotSource = this.container.getSlot("slotSource");
                result = DecomposeRecipe.getResult(slotSource.id, slotSource.data);
                if(!result){
                    break process;
                }
                slotSource.count--;
                this.container.validateSlot("slotSource");
                if(result.length === 0){
                    isActive = true;
                    break process;
                }
                this.itemBuffer = result;

            }

            const item = this.itemBuffer[0];
            let count = Math.min(item.count, Cfg.decomposer.speed);
            let add = 0;
            for(let i = 0; i < 10; i++){
                add = StorageInterface.addItemToSlot(item, this.container.getSlot("slotBuffer" + i), count);
                if(add > 0){
                    count -= add;
                    isActive = true;
                    if(count <= 0){
                        break;
                    }
                }
            }
    
            item.count <= 0 && this.itemBuffer.shift();

        }

        if(isActive){
            this.data.energy -= Cfg.decomposer.cost;
            if(!Cfg.smooth){
                this.anim.rotationY += Math.PI / 4;
                if(this.anim.rotationY >= Math.PI){
                    this.anim.rotationY = 0;
                }
                this.render.getPart("mill").setRotation(0, this.anim.rotationY, 0);
                this.anim.refresh();
            }
        }

        this.anim.isActive = isActive;
        this.container.setScale("scaleEnergy", this.data.energy / this.getEnergyStorage());
        this.liquidStorage.updateUiScale("scaleLiquid", liquid);
        StorageInterface.checkHoppers(this);

    },

    getEnergyStorage: function(){
        return Cfg.decomposer.storage;
    }

});


Cfg.smooth && Block.setAnimateTickCallback(BlockID.chemical_decomposer, function(x, y, z){
    const tile = World.getTileEntity(x, y, z);
    if(tile && !tile.animLoaded){
        tile.animLoaded = true;
        new Thread(function(){
            while(tile.isLoaded){
                if(tile.anim.isActive){
                    tile.anim.rotationY += Math.PI / 16;
                    if(tile.anim.rotationY >= Math.PI){
                        tile.anim.rotationY = 0;
                    }
                    tile.render.getPart("mill").setRotation(0, tile.anim.rotationY, 0);
                    tile.anim.refresh();
                }
                Thread.sleep(20);
            }
        }).start();
    }
});


StorageInterface.createInterface(BlockID.chemical_decomposer, {
    slots: {
        slotSource: {input: true},
        slotBuffer0: {output: true},
        slotBuffer1: {output: true},
        slotBuffer2: {output: true},
        slotBuffer3: {output: true},
        slotBuffer4: {output: true},
        slotBuffer5: {output: true},
        slotBuffer6: {output: true},
        slotBuffer7: {output: true},
        slotBuffer8: {output: true},
        slotBuffer9: {output: true}
    },
    canReceiveLiquid: function(liquid){
        return DecomposeRecipe.validLiquid(liquid);
    }
});