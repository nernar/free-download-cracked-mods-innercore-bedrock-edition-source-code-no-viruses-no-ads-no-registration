const MagmaticManager = {
    fuels: {},

    addFuel: function (liquid, energy) {
        this.fuels[liquid] = energy;
    },

    getEnergyFor100mb: function (liquid) {
        return this.fuels[liquid] || 0;
    }

};

MagmaticManager.addFuel("lava", 18000);
const DynamoHelper = {

    MIN_POWER: 1,
    MAX_POWER: 80,

    registerDynamo: function (unique, name, texture, texture2, tile) {

        Block.setPrototype(unique, {
            type: Block.TYPE_BASE,

            getVariations: function () {
                return [
                    {name: name, texture: [[texture2, 0], [texture, 0], [texture, 1]], inCreative: true}
                ];
            }

        });

        tile.energyTick = function(type, src){
            let output = Math.min(this.getMaxEnergyProvide ? this.getMaxEnergyProvide() : 400, this.data.energy);
            this.data.energy += src.add(output) - output;
        };

        tile.isGenerator = function(){
            return true
        };
        MachineRegistry.register(BlockID[unique], tile);
    },

    mapAtCoords: function(x, y, z, id, texture, isActive, rotate){

        let render = new ICRender.Model();
        let model = BlockRenderer.createModel();

        if(rotate === 0){ //UP
            model.addBox(0, 0, 0, 1, 0.61, 1, [["dynamo_" + texture, 1], ["dynamo_" + texture, 1], ["dynamo_" + texture, 0]]);
            model.addBox(0.250, 0.62, 0.250, 0.746, 1, 0.746, [["dynamo_coil_" + isActive, 1], ["dynamo_coil_" + isActive, 1], ["dynamo_coil_" + isActive, 0]]);
        }else if(rotate === 1){ //DOWN
            model.addBox(0, 0.39, 0, 1, 1, 1, [["dynamo_" + texture, 1], ["dynamo_" + texture, 1], ["dynamo_" + texture, 2]]);
            model.addBox(0.250, 0, 0.250, 0.746, 0.62, 0.746, [["dynamo_coil_" + isActive, 1], ["dynamo_coil_" + isActive, 1], ["dynamo_coil_" + isActive, 3]]);
        }else if(rotate === 2){
            model.addBox(0, 0, 0, 0.625, 1, 1, [["dynamo_" + texture, 3], ["dynamo_" + texture, 3], ["dynamo_" + texture, 3], ["dynamo_" + texture, 3], ["dynamo_" + texture, 1]]);
            model.addBox(0.625, 0.250, 0.250, 1, 0.7, 0.746, [["dynamo_coil_" + isActive, 4], ["dynamo_coil_" + isActive, 4], ["dynamo_coil_" + isActive, 4], ["dynamo_coil_" + isActive, 4], ["dynamo_coil_" + isActive, 1]]);
        }else if(rotate === 3){
            model.addBox(0.38, 0, 0, 1, 1, 1, [["dynamo_" + texture, 4], ["dynamo_" + texture, 4], ["dynamo_" + texture, 4], ["dynamo_" + texture, 4], ["dynamo_" + texture, 1]]);
            model.addBox(0, 0.250, 0.250, 0.38, 0.7, 0.746, [["dynamo_coil_" + isActive, 5], ["dynamo_coil_" + isActive, 5], ["dynamo_coil_" + isActive, 5], ["dynamo_coil_" + isActive, 5], ["dynamo_coil_" + isActive, 1]]);
        }else if(rotate === 4){
            model.addBox(0, 0, 0.38, 1, 1, 1, [["dynamo_" + texture, 0], ["dynamo_" + texture, 0], ["dynamo_" + texture, 1], ["dynamo_" + texture, 1], ["dynamo_" + texture, 4]]);
            model.addBox(0.250, 0.250, 0, 0.746, 0.7, 0.40, [["dynamo_coil_" + isActive, 0], ["dynamo_coil_" + isActive, 0], ["dynamo_coil_" + isActive, 1], ["dynamo_coil_" + isActive, 1], ["dynamo_coil_" + isActive, 5]]);
        }else if(rotate === 5){
            model.addBox(0, 0, 0, 1, 1, 0.625, [["dynamo_" + texture, 2], ["dynamo_" + texture, 2], ["dynamo_" + texture, 1], ["dynamo_" + texture, 1], ["dynamo_" + texture, 3]]);
            model.addBox(0.250, 0.250, 0.625, 0.746, 0.7, 1, [["dynamo_coil_" + isActive, 3], ["dynamo_coil_" + isActive, 3], ["dynamo_coil_" + isActive, 1], ["dynamo_coil_" + isActive, 1], ["dynamo_coil_" + isActive, 4]]);
        }

        render.addEntry(model);
        BlockRenderer.enableCoordMapping(id, -1, render);
        BlockRenderer.mapAtCoords(x, y, z, render);
    },

    calcEnergy: function (tile, basePower) {
        let maxPowerLevel = 9 * tile.getEnergyStorage() / 10;

        return (tile.getEnergyStorage() - tile.data.energy) / (maxPowerLevel / basePower);
    }

};
const vodGUI = new UI.StandartWindow({
    standart: {
        header: {
            text: {
                text: "Водяной генератор(water generator)"
            }
        },
        inventory: {
            standart: true
        },
        background: {
            standart: true
        }
    },
    drawing: [
        {type: "bitmap", x: 350, y: 100, bitmap: "rf_scale", scale: 3.2},
        {type: "bitmap", x: 3400, y: 60, bitmap: "fluid_scale_short_b", scale: 3.2}
    ],
    elements: {
        "rfScale": {type: "scale", x: 350, y: 100, direction: 1, bitmap: "rf_scale_full", scale: 3.2},
        "lavaScale": {type: "scale", x: 3430, y: 63, direction: 1, bitmap: "fluid_scale_short", scale: 3.2},

        "slot1": {type: "slot", x: 4200, y: 60},
        "slot2": {type: "slot", x: 4200, y: 199},
        "slotSource2": {type: "slot", x: 930, y: 60, bitmap: "Chip"},
        		"textInfo1": {type: "text", x: 350, y: 252, width: 300, height: 30, text: "0/"},
		"textInfo2": {type: "text", x: 350, y: 282, width: 300, height: 30, text: "5000"}
    }
});
IDRegistry.genBlockID("vodge");
Block.createBlock("vodge", [{name: "Пальмовые доски", texture: [["низ", 0], ["cobblestone", 0], ["низ", 0], ["низ", 0], ["низ", 0], ["низ", 0]], inCreative: false}]);
IDRegistry.genBlockID("vodg");
Block.createBlock("vodg", [{name: "Пальмовые доски", texture: [["низ_корпус", 0], ["корпус", 0], ["низ_корпус", 0], ["низ_корпус", 0], ["низ_корпус", 0], ["низ_корпус", 0]], inCreative: false}]);
function createVodRender(id, idMaterial, dataMaterial){
var render = new ICRender.Model();
BlockRenderer.setStaticICRender (id, 0, render);
var model = BlockRenderer.createModel();
model.addBox (1/32, 1/32, 1/32, 31/32, 31/32, 31/32,  BlockID.vodge,0);
model.addBox (0, 0, 0, 1, 1, 1,  BlockID.vodg,0);
render.addEntry(model);
}
createVodRender(BlockID.vodgen, 1, 0);
DynamoHelper.registerDynamo("vodgen", "Водяной генератор", "корпусы", "низ_корпус", {
    defaultValues: {
        energy: 0
    },

    getGuiScreen: function () {
        return vodGUI;
    },
    init: function () {
	this.animationDD = new Animation.Item(this.x+.5, this.y+63/64, this.z+.5);
    },

    tick: function () {
            var slotSource2 = this.container.getSlot("slotSource2");
            			if(slotSource2.id!=0){
				this.animationDD.describeItem({
			id: slotSource2.id,
			count: 1,
			data: slotSource2.data,
			size: .3,
			rotation:[3.14/2, 0, 0]
		});
		this.animationDD.load();
			}else {
				this.animationDD.destroy();
			}
if(this.data.energy >= 5001){
    this.data.energy = 5000;
}
if(this.data.energy <= 4999){
        if((World.getBlockID(this.x, this.y - 1, this.z)==8)||(World.getBlockID(this.x, this.y - 1, this.z)==9)){
        if((World.getBlockID(this.x + 1, this.y, this.z)==8)||(World.getBlockID(this.x + 1, this.y, this.z)==9)){
        if((World.getBlockID(this.x - 1, this.y, this.z)==8)||(World.getBlockID(this.x - 1, this.y, this.z)==9)){
        if((World.getBlockID(this.x, this.y, this.z - 1)==8)||(World.getBlockID(this.x, this.y, this.z - 1)==9)){
        if((World.getBlockID(this.x, this.y, this.z + 1)==8)||(World.getBlockID(this.x, this.y, this.z + 1)==9)){
this.data.energy = (this.data.energy + 10);
            if (slotSource2.id == ItemID.chip_ysk_1)
{
this.data.energy = (this.data.energy + 5);
}
}
}
}
}
}
}
        this.container.setScale("rfScale", this.data.energy / this.getEnergyStorage());

        this.container.validateAll();
		this.container.setText("textInfo1", this.data.energy + "/");
    },

    getEnergyStorage: function () {
        return 5000;
    }
});