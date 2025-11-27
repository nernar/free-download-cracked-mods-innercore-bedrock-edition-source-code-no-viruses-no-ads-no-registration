function createAerRender(id, idMaterial, dataMaterial){
var render = new ICRender.Model();
BlockRenderer.setStaticICRender (id, 0, render);
var model = BlockRenderer.createModel();
model.addBox (0, 0, 0, 1, 2/16, 1,  BlockID.blockSteel, 0);
model.addBox (0, 2/16, 12/16, 15/16, 3/16, 1,  BlockID.blockSteel, 0);
model.addBox (12/16, 2/16, 0, 1, 3/16, 1,  BlockID.blockSteel, 0);
model.addBox (0, 2/16, 4/16, 1/16, 3/16, 12/16,  20, 0);
model.addBox (0, 2/16, 0, 15/16, 3/16, 4/16,  BlockID.blockSteel, 0);
model.addBox (0, 3/16, 0, 1, 5/16, 1,  BlockID.blockSteel, 0);
model.addBox (7/16, 5/16, 7/16, 9/16, 6/16, 9/16,  42, 0);
model.addBox (0, 12/16, 0, 1, 1, 1,  BlockID.blockSteel, 0);
model.addBox (1/16, 5/16, 1/16, 15/16, 12/16, 15/16,  20, 0);
model.addBox (14/16, 5/16, 14/16, 1, 12/16, 1,  42, 0);
model.addBox (0, 5/16, 0, 2/16, 12/16, 2/16,  42, 0);
model.addBox (14/16, 5/16, 0, 1, 12/16, 2/16,  42, 0);
model.addBox (0, 5/16, 14/16, 2/16, 12/16, 1,  42, 0);
model.addBox (9/16, 8/16, 9/16, 10/16, 12/16, 10/16,  BlockID.blockSteel, 0);
model.addBox (37/64, 7/16, 37/64, 39/64, 8/16, 39/64,  152, 0);
model.addBox (6/16, 10/16, 6/16, 7/16, 12/16, 7/16,  BlockID.blockSteel, 0);
model.addBox (6/16, 9/16, 6/16, 9/16, 10/16, 7/16,  BlockID.blockSteel, 0);
model.addBox (33/64, 8/16, 25/64, 35/64, 9/16, 27/64,  152, 0);
model.addBox (6/16, 9/16, 9/16, 7/16, 12/16, 10/16,  BlockID.blockSteel, 0);
model.addBox (7/16, 37/64, 37/64, 8/16, 39/64, 39/64,  152, 0);
render.addEntry(model);
}
createFurnitureStal("fabrshem","фабрика_схем","iron_block",0, "Фабрика чипов", ItemID.fabrshem, BlockID.fabrshem);
createAerRender(BlockID.fabrshem, 2, 0)
Item.registerUseFunction("fabrshem", function(coords, item, block){
if(block.id !== 199)
{
	World.setBlock(coords.relative.x,coords.relative.y,coords.relative.z, BlockID.fabrshem);
	World.addTileEntity(coords.relative.x,coords.relative.y,coords.relative.z);
Player.decreaseCarriedItem (1)
}
});
const guiShem = new UI.StandartWindow({
    standart: {
        header: {text: {text: "Фабрика чипов(chip factory)"}},
        inventory: {standart: true},
        background: {standart: true}
    },

    drawing: [
        {type: "bitmap", x: 530, y: 146, bitmap: "furnace_bar_background", scale: 3.2},
        {type: "bitmap", x: 350, y: 100, bitmap: "rf_scale", scale: 3.2}
    ],

    elements: {
        "progressScale": {type: "scale", x: 530, y: 146, direction: 0, bitmap: "furnace_bar_scale", scale: 3.2},
        "energyScale": {type: "scale", x: 350, y: 100, direction: 1, bitmap: "rf_scale_full", scale: 3.2},

        "slotSource": {type: "slot", x: 441, y: 142},
        "slotSource2": {type: "slot", x: 930, y: 60, bitmap: "Chip"},
        "slotResult": {type: "slot", x: 625, y: 142, isValid: ValidFunc.result},
		"textInfo1": {type: "text", x: 350, y: 252, width: 300, height: 30, text: "0/"},
		"textInfo2": {type: "text", x: 350, y: 282, width: 300, height: 30, text: "10000"}
    }
});
const ShemRecipes = {
    recipes: {},

    add: function (obj) {
        if (!obj) return;

        this.recipes[obj.input.id + ":" + obj.input.data] = obj;
    },

    getResult: function (id, data) {
        return this.recipes[id + ":" + data];
    }

};
ShemRecipes.add({
    input: {id: ItemID.ndsm, data: 0},
    result: {id: ItemID.chip, data: 0, count: 1}
});
ShemRecipes.add({
    input: {id: ItemID.chip, data: 0},
    result: {id: ItemID.chip_ysk_1, data: 0, count: 1}
});
MachineRegistry.register(BlockID.fabrshem, {
    ENERGY_CONSUME: 10,
    DOP_ENERGY_CONSUME: 18,
    PROGRESS_MAX: 500,

    defaultValues: {
        progress: 0
    },

	init:function(){
	this.animationDo = new Animation.Item(this.x+.5, this.y+.4, this.z+.5);
	this.animationD = new Animation.Item(this.x+.5, this.y+5/32, this.z+.5);
	this.animationDD = new Animation.Item(this.x+.5, this.y+65/64, this.z+.5);
	},

    getGuiScreen: function () {
        return guiShem;
    },

    getTransportSlots: function () {
        return {input: ["slotSource"], output: ["slotResult"]};
    },

    tick: function () {
        let slotSource = this.container.getSlot("slotSource");
        let slotResult = this.container.getSlot("slotResult");
        var slotSource2 = this.container.getSlot("slotSource2");
			if(slotSource.id!=0){
				this.animationDo.describeItem({
			id: slotSource.id,
			count: 1,
			data: slotSource.data,
			size: .55,
			rotation:[3.14/2, 0, 0]
		});
		this.animationDo.load();
			}else {
				this.animationDo.destroy();
			}
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
			if(slotResult.id!=0){
				this.animationD.describeItem({
			id: slotResult.id,
			count: 1,
			data: slotResult.data,
			size: .5,
			rotation:[3.14/2, 0, 0]
		});
		this.animationD.load();
			}else {
				this.animationD.destroy();
			}
        if (this.data.progress) {
            if (!slotSource.id) {
                this.data.progress = 0;
                return;
            }

            if (this.data.energy < this.ENERGY_CONSUME) return;
			if(slotSource2.id!==ItemID.chip_ysk_1){
            this.data.energy -= this.ENERGY_CONSUME;
}
			if(slotSource2.id==ItemID.chip_ysk_1){
            this.data.energy -= (this.ENERGY_CONSUME+this.DOP_ENERGY_CONSUME);
}
            if (this.data.progress >= this.PROGRESS_MAX) {
                var r = ShemRecipes.getResult(slotSource.id, slotSource.data);
                var result = r.result;

                if (slotResult.id === 0 || (slotResult.id === result.id && slotResult.data === result.data && slotResult.count + result.count <= Item.getMaxStack(slotResult.id))) {
                        slotResult.count = !slotResult.id ? result.count : slotResult.count + result.count;
                        slotResult.id = result.id;
                        slotResult.data = result.data;


                    slotSource.count -= 1;
                    this.data.progress = 0;
            
                }
                } else {
                    			if(slotSource2.id!==ItemID.chip_ysk_1){
this.data.progress++;
}
			if(slotSource2.id==ItemID.chip_ysk_1){
this.data.progress++;
this.data.progress++;
}
            }
        } else if (slotSource.id && ShemRecipes.getResult(slotSource.id, slotSource.data)) {
            this.data.progress = 1;
        }

        this.container.setScale("progressScale", this.data.progress / this.PROGRESS_MAX);
        this.container.setScale("energyScale", this.data.energy / this.getEnergyStorage());
        this.container.validateAll();
		this.container.setText("textInfo1", this.data.energy + "/");
},
    getEnergyStorage: function () {
        return 10000;
    }
});