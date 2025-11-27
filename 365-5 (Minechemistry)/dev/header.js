IMPORT("EnergyNet");
IMPORT("TileRender");
IMPORT("StorageInterface");
IMPORT("EnhancedRecipes");

const Color = android.graphics.Color;
const Bitmap = android.graphics.Bitmap;
const Canvas = android.graphics.Canvas;
const Paint = android.graphics.Paint;
const ColorFilter = android.graphics.PorterDuffColorFilter;
const PorterDuff = android.graphics.PorterDuff;
const Thread = java.lang.Thread;

const setLoadingTip = ModAPI.requireGlobal("MCSystem.setLoadingTip");
const NativeAPI = ModAPI.requireGlobal("requireMethodFromNativeAPI");

const InvSource = {
    get: NativeAPI("api.mod.util.InventorySource", "getSource"),
    set: NativeAPI("api.mod.util.InventorySource", "setSource")
};

const EU = EnergyTypeRegistry.assureEnergyType("Eu", 1);
const RF = EnergyTypeRegistry.assureEnergyType("RF", 0.25);

const groupEU = ICRender.getGroup("ic-wire");
const groupRF = ICRender.getGroup("rf-wire");
const groupPipe = ICRender.getGroup("item-pipe");


let player = 0;
Callback.addCallback("LevelLoaded", function(){
    player = Player.get();
});


const Cfg = {
    eu: __config__.getBool("supportEU"),
    rf: __config__.getBool("supportRF"),
    smooth: __config__.getBool("smoothAnimation"),
    formula: __config__.getBool("displayFormula"),
    decomposer: {
        cost: __config__.getNumber("decomposer.energyPerTick"),
        speed: __config__.getNumber("decomposer.maxOutputPerTick"),
        storage: __config__.getNumber("decomposer.energyCapacity")
    },
    synthesiser: {
        cost: __config__.getNumber("synthesiser.energyPerTick"),
        time: __config__.getNumber("synthesiser.ticksPerOperation"),
        storage: __config__.getNumber("synthesiser.energyCapacity")
    },
    fission: {
        cost: __config__.getNumber("fission.energyPerTick"),
        time: __config__.getNumber("fission.ticksPerOperation"),
        storage: __config__.getNumber("fission.energyCapacity")
    },
    fusion: {
        cost: __config__.getNumber("fusion.energyPerTick"),
        time: __config__.getNumber("fusion.ticksPerOperation"),
        storage: __config__.getNumber("fusion.energyCapacity")
    }
};


const ElemMeta = {};
const MolID = {};


const createBlock = function(namedID, name, texture, isRotation){
    const id = IDRegistry.genBlockID(namedID);
    Block[isRotation ? "createBlockWithRotation" : "createBlock"](namedID, [{name: name, texture: texture, inCreative: true}]);
    Block.setDestroyTime(id, 3);
    ToolAPI.registerBlockMaterial(id, "stone");
    return id;
};


const registerMachine = function(id, prototype){
    
    prototype.energyReceive = function(type, amount){
        const ratio = EnergyTypeRegistry.getValueRatio(type, "RF");
        const add = Math.min(amount * ratio, this.getEnergyStorage() - this.data.energy);
        this.data.energy += add;
        return add / ratio | 0;
    };

    TileEntity.registerPrototype(id, prototype);
    groupPipe.add(id, -1);

    if(Cfg.eu){
        EnergyTileRegistry.addEnergyTypeForId(id, EU);
        groupEU.add(id, -1);
    }
    if(Cfg.rf){
        EnergyTileRegistry.addEnergyTypeForId(id, RF);
        groupRF.add(id, -1);
    }

};


const ValidFunc = {
    element: function(id){
        return id === ItemID.chem_element;
    },
    output: function(){
        return false;
    }
};