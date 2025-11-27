
// included from: \header.js
IMPORT("EnergyNet");
IMPORT("TileRender");

const Color = android.graphics.Color;

const energyType = ["Eu", "RF"];
EnergyTypeRegistry.assureEnergyType("Eu", 1);
EnergyTypeRegistry.assureEnergyType("RF", 0.25);

/*
Callback.addCallback("PostLoaded", function(){
    for(let key in EnergyTypeRegistry.energyTypes){
        energyType.push(key);
    }
});
*/

let player = 0;
Callback.addCallback("LevelLoaded", function(){
    player = Player.get();
});


const texture = [
    ["energy_convertor", 0],
    ["energy_convertor", 0],
    ["energy_convertor", 0],
    ["energy_convertor", 1],
    ["energy_convertor", 0],
    ["energy_convertor", 0]
];

IDRegistry.genBlockID("energy_convertor");
Block.createBlock("energy_convertor", [{name: "Energy Convertor", texture: texture, inCreative: true}]);
TileRenderer.setStandartModel(BlockID.energy_convertor, texture);
TileRenderer.registerFullRotationModel(BlockID.energy_convertor, 0, texture);
ToolAPI.registerBlockMaterial(BlockID.energy_convertor, "stone");
Block.setDestroyTime(BlockID.energy_convertor, 3);
Recipes.addShaped({id: BlockID.energy_convertor}, ["aaa", "bcd", "aaa"], ["a", 44, 0, "b", 265, -1, "c", 152, -1, "d", 266, -1]);

ICRender.getGroup("ic-wire").add(BlockID.energy_convertor, -1);
ICRender.getGroup("rf-wire").add(BlockID.energy_convertor, -1);


const window = new UI.StandartWindow({
    standart: {
        header: {text: {text: "Energy Convertor"}},
        background: {standart: true},
        inventory: {standart: true}
    },
    drawing: [
        {type: "frame", x: 450, y: 128, width: 320, height: 64, bitmap: "default_container_frame", scale: 4}
    ],
    elements: {
        textStored: {type: "text", x: 450, y: 30, text: "Stored: 10000 RF"},
        textTransfer: {type: "text", x: 610, y: 112, text: "1  2  3  4  0", font: {color: Color.WHITE, size: 48, alignment: 1}},
        buttonPlus3: {type: "button", x: 450, y: 64, bitmap: "default_button_up", bitmap2: "default_button_down", scale: 4, clicker: {
            onClick: function(container, tile){
                tile.data.transfer = Math.min(tile.data.transfer + 10000, 99990);
                tile.drawText();
            }
        }},
        buttonPlus2: {type: "button", x: 514, y: 64, bitmap: "default_button_up", bitmap2: "default_button_down", scale: 4, clicker: {
            onClick: function(container, tile){
                tile.data.transfer = Math.min(tile.data.transfer + 1000, 99990);
                tile.drawText();
            }
        }},
        buttonPlus1: {type: "button", x: 578, y: 64, bitmap: "default_button_up", bitmap2: "default_button_down", scale: 4, clicker: {
            onClick: function(container, tile){
                tile.data.transfer = Math.min(tile.data.transfer + 100, 99990);
                tile.drawText();
            }
        }},
        buttonPlus0: {type: "button", x: 642, y: 64, bitmap: "default_button_up", bitmap2: "default_button_down", scale: 4, clicker: {
            onClick: function(container, tile){
                tile.data.transfer = Math.min(tile.data.transfer + 10, 99990);
                tile.drawText();
            }
        }},
        buttonMinus3: {type: "button", x: 450, y: 192, bitmap: "default_button_up", bitmap2: "default_button_down", scale: 4, clicker: {
            onClick: function(container, tile){
                tile.data.transfer = Math.max(tile.data.transfer - 10000, 0);
                tile.drawText();
            }
        }},
        buttonMinus2: {type: "button", x: 514, y: 192, bitmap: "default_button_up", bitmap2: "default_button_down", scale: 4, clicker: {
            onClick: function(container, tile){
                tile.data.transfer = Math.max(tile.data.transfer - 1000, 0);
                tile.drawText();
            }
        }},
        buttonMinus1: {type: "button", x: 578, y: 192, bitmap: "default_button_up", bitmap2: "default_button_down", scale: 4, clicker: {
            onClick: function(container, tile){
                tile.data.transfer = Math.max(tile.data.transfer - 100, 0);
                tile.drawText();
            }
        }},
        buttonMinus0: {type: "button", x: 642, y: 192, bitmap: "default_button_up", bitmap2: "default_button_down", scale: 4, clicker: {
            onClick: function(container, tile){
                tile.data.transfer = Math.max(tile.data.transfer - 10, 0);
                tile.drawText();
            }
        }},
        textPlus: {type: "text", x: 462, y: 60, z: 1, text: "+ + + +", font: {color: Color.BLACK, size: 64}},
        textMinus: {type: "text", x: 462, y: 188, z: 1, text: "- - - -", font: {color: Color.BLACK, size: 64}},
        buttonMode: {type: "button", x: 780, y: 131, bitmap: "_craft_button_up", bitmap2: "_craft_button_down", scale: 3, clicker: {
            onClick: function(container, tile){
                tile.data.mode = (tile.data.mode + 1) % energyType.length;
                tile.drawText();
            }
        }},
        textMode: {type: "text", x: 852, y: 128, z: 1, text: "RF", font: {color: Color.WHITE, size: 32, shadow: 0.5, alignment: 1}},
    }
});

const elements = window.getWindow("main").getElements();


TileEntity.registerPrototype(BlockID.energy_convertor, {

    defaultValues: {
        meta: 0,
        energy: 0,
        transfer: 0,
        mode: 0
    },

    renderModel: function(){
        TileRenderer.mapAtCoords(this.x, this.y, this.z, this.blockID, this.data.meta);
    },

    init: function(){
        this.renderModel();
    },

    destroy: function(){
        BlockRenderer.unmapAtCoords(this.x, this.y, this.z);
    },

    onItemClick: function(id, count, data, coords){
        if(this.click(id, count, data, coords))return true;
        if(Entity.getSneaking(player))return false;
        const screen = this.getGuiScreen();
        if(screen){
            this.container.openAs(screen);
            return true;
        }
        return false;
    },

    click: function(id, count, data, coords){
        if(id === 0 && Entity.getSneaking(player)){
            if(this.data.meta !== coords.side){
                this.data.meta = coords.side;
                this.renderModel();
                EnergyNetBuilder.rebuildTileNet(this);
            }
            return true;
        }
    },

    drawText: function(){
        elements.get("textTransfer").onBindingUpdated("text", ("00000" + this.data.transfer).slice(-5).split("").join("  "));
        elements.get("textMode").onBindingUpdated("text", energyType[this.data.mode]);
    },

    getGuiScreen: function(){
        this.drawText();
        return window;
    },

    isEnergySource: function(){
        return true;
    },

    getEnergyStorage: function(){
        return 10000;
    },

    canReceiveEnergy: function(side){
        return this.data.meta !== side;
    },

    canExtractEnergy: function(side){
        return this.data.meta === side;
    },

    energyReceive: function(type, amount){
        const ratio = EnergyTypeRegistry.getValueRatio(type, "RF");
        const add = Math.min(amount * ratio, this.getEnergyStorage() - this.data.energy) | 0;
        this.data.energy += add;
        return add / ratio | 0;
    },

    energyTick: function(type, src){
        if(type === energyType[this.data.mode]){
            const ratio = EnergyTypeRegistry.getValueRatio(energyType[this.data.mode], "RF");
            const output = Math.min(this.data.transfer * ratio, this.data.energy);
            this.data.energy += (src.add(output / ratio) * ratio - output) | 0;
        }
        elements.get("textStored").onBindingUpdated("text", "Stored:  " + this.data.energy + " RF");
    }

});

TileRenderer.setRotationPlaceFunction(BlockID.energy_convertor, true);

energyType.forEach(function(name){
    EnergyTileRegistry.addEnergyTypeForId(BlockID.energy_convertor, EnergyTypeRegistry.getEnergyType(name));
});


/*
IDRegistry.genBlockID("RF_out");
Block.createBlock("RF_out", [{name: "RF out", texture: [["", 0]], inCreative: true}]);

IDRegistry.genBlockID("RF_in");
Block.createBlock("RF_in", [{name: "RF in", texture: [["", 0]], inCreative: true}]);

TileEntity.registerPrototype(BlockID.RF_out, {

    defaultValues: {
        energy: 10000
    },

    click: function(){
        Game.tipMessage(this.data.energy);
    },

    isEnergySource: function(){
        return true;
    },

    getEnergyStorage: function(){
        return 10000;
    },

    canReceiveEnergy: function(){
        return false;
    },

    canExtractEnergy: function(){
        return true;
    },

    energyTick: function(type, src){
        const output = Math.min(100, this.data.energy);
        this.data.energy += src.add(output) - output;
    }

});

TileEntity.registerPrototype(BlockID.RF_in, {

    defaultValues: {
        energy: 0
    },

    click: function(){
        Game.tipMessage(this.data.energy);
    },

    isEnergySource: function(){
        return false;
    },

    getEnergyStorage: function(){
        return 10000;
    },

    canReceiveEnergy: function(){
        return true;
    },

    canExtractEnergy: function(){
        return false;
    },

    energyReceive: function(type, amount){
        const add = Math.min(100, amount, this.getEnergyStorage() - this.data.energy);
        this.data.energy += add;
        return add;
    }

});

EnergyTileRegistry.addEnergyTypeForId(BlockID.RF_out, EnergyTypeRegistry.getEnergyType("RF"));
EnergyTileRegistry.addEnergyTypeForId(BlockID.RF_in, EnergyTypeRegistry.getEnergyType("RF"));
*/

