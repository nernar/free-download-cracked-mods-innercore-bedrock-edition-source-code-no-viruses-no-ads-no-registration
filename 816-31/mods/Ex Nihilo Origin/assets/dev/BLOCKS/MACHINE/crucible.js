var Crucible_TYPE_ = Block.createSpecialType({
	sound: "stone"
});
IDRegistry.genBlockID("ex_crucibleRaw");
Block.createBlock("ex_crucibleRaw", [{
	name: "Raw Crucible",
	texture: [["enr_uncrucible", 0], ["enr_uncrucible", 2], ["enr_uncrucible", 1], ["enr_uncrucible", 1], ["enr_uncrucible", 1], ["enr_uncrucible", 1]],
	inCreative: true
}], Crucible_TYPE_);
IDRegistry.genBlockID("ex_crucible");
Block.createBlock("ex_crucible", [{
	name: "Crucible",
	texture: [["enr_crucible", 0], ["enr_crucible", 2], ["enr_crucible", 1], ["enr_crucible", 1], ["enr_crucible", 1], ["enr_crucible", 1]],
	inCreative: true
}], Crucible_TYPE_);
ToolAPI.registerBlockMaterial(BlockID["ex_crucible"], "stone");

var Crucible_boxes_1 = [[c0, c3, c0, c1, c16, c16], [c15, c3, c0, c16, c16, c16], [c1, c3, c0, c15, c16, c1], [c1, c3, c15, c15, c16, c16], [c1, c2, c1, c15, c3, c15], [c2, c1, c2, c14, c2, c14], [c0, c0, c0, c1, c3, c1], [c0, c0, c15, c1, c3, c16], [c1, c2, c1, c15, c3, c15]];
var Crucible_boxes_2 = [[c0, c3, c0, c1, c16, c16], [c15, c3, c0, c16, c16, c16], [c1, c3, c0, c15, c16, c1], [c1, c3, c15, c15, c16, c16], [c0, c0, c0, c1, c3, c1], [c0, c0, c15, c1, c3, c16], [c1, c2, c1, c15, c3, c15], [c15, c0, c0, c16, c3, c1], [c15, c0, c15, c16, c3, c16]];
var Crucible_boxes_3 = [[c2, c1, c2, c14, c2, c14], [c1, c2, c1, c15, c3, c15]];
var Crucible_tex_1 = [["enr_crucible", 0], ["enr_crucible", 0], ["enr_crucible", 0], ["enr_crucible", 0], ["enr_crucible", 0], ["enr_crucible", 0]];
var Crucible_tex_2 = [["enr_uncrucible", 0], ["enr_uncrucible", 0], ["enr_uncrucible", 0], ["enr_uncrucible", 0], ["enr_uncrucible", 0], ["enr_uncrucible", 0]]

var Collision = new ICRender.CollisionShape();
for (var box in Crucible_boxes_1) {
	var array = Crucible_boxes_1[box];
	Collision.addEntry().addBox(array[0], array[1], array[2], array[3], array[4], array[5]);
};
BlockRenderer.setCustomCollisionShape(BlockID.ex_crucible, 0, Collision);
BlockRenderer.setCustomCollisionShape(BlockID.ex_crucibleRaw, 0, Collision);

var model = BlockRenderer.Model();
for (var box in Crucible_boxes_2) {
	var array = Crucible_boxes_2[box];
	model.addBox(array[0], array[1], array[2], array[3], array[4], array[5], BlockID.ex_crucible, 0);
};
for (var box in Crucible_boxes_3) {
	var array = Crucible_boxes_3[box];
	model.addBox(array[0], array[1], array[2], array[3], array[4], array[5], Crucible_tex_1);
};
var render = new ICRender.Model();
render.addEntry(model);
BlockRenderer.enableCoordMapping(BlockID.ex_crucible, 0, render);

var model = BlockRenderer.Model();
for (var box in Crucible_boxes_2) {
	var array = Crucible_boxes_2[box];
	model.addBox(array[0], array[1], array[2], array[3], array[4], array[5], BlockID.ex_crucibleRaw, 0);
};
for (var box in Crucible_boxes_3) {
	var array = Crucible_boxes_3[box];
	model.addBox(array[0], array[1], array[2], array[3], array[4], array[5], Crucible_tex_2);
};
var render = new ICRender.Model();
render.addEntry(model);
BlockRenderer.enableCoordMapping(BlockID.ex_crucibleRaw, 0, render);

ToolAPI.registerBlockMaterial(BlockID.ex_crucible, "stone");
ToolAPI.registerBlockMaterial(BlockID.ex_crucibleRaw, "stone");

var CrucibleUI = new Object();
CrucibleUI["standart"] = new Object();
CrucibleUI["standart"]["header"] = {text: {text: "Crusher"}};
CrucibleUI["standart"]["inventory"] = true;
CrucibleUI["standart"]["background"] = true;
CrucibleUI["elements"] = new Object();
CrucibleUI["elements"]["slotInput"] = {type: "slot", x: 600, y: 146};
CrucibleUI["elements"]["slot2"] = {type: "slot", x: 670, y: 146};
CrucibleUI["elements"]["slot3"] = {type: "slot", x: 670 + 70, y: 146};
var crucibleUI = new UI.StandartWindow(CrucibleUI);

Crucible.dataSet("crucible", {
    "1:0": {
        addworktime: 2500,
        blockmodel:"stone",
        liquidmodel:"ex_lava",
        liquiddata:"lava",
        baseliquid: 0.0001
    },
    "4:0": {
        addworktime: 2500,
        blockmodel:"cobblestone",
        liquidmodel:"ex_lava",
        liquiddata:"lava",
        baseliquid: 0.0001
    },
    "13:0": {
        addworktime: 2500,
        blockmodel:"gravel",
        liquidmodel:"ex_lava",
        liquiddata:"lava",
        baseliquid: 0.0001
    }
});
Crucible.dataSet("energy", {
    "0:0": {
        energy: 0
    },
    "10:0": {
        energy: 3
    },
    "11:0": {
        energy: 2.5
    },
    "50:0": {
        energy: 1
    },
    "51:0": {
        energy: 1.5
    }
});

var CrucibleBoxFunc = function(ydata1, ydata2, ydata3, ydata4, data1,data2, x, y, z) {
	var model = BlockRenderer.Model();
	for (var box in Crucible_boxes_2) {
		var array = Crucible_boxes_2[box];
		model.addBox(array[0], array[1], array[2], array[3], array[4], array[5], BlockID.ex_crucible, 0);
	};
        model.addBox(c1, c3, c1, c15, c4, c15, [
            ["enr_crucible", 0]
        ]);
        model.addBox(c1, ydata1, c1, c15, ydata2, c15, [
            [data1, 0]
        ]);
        model.addBox(c1, ydata3, c1, c15, ydata4, c15, [
            [data2, 0]
        ]);
	var render = new ICRender.Model();
	render.addEntry(model);
	BlockRenderer.mapAtCoords(x, y, z, render);

	var Collision = new ICRender.CollisionShape();
	for (var box in Crucible_boxes_2) {
		var array = Crucible_boxes_2[box];
		Collision.addEntry().addBox(array[0], array[1], array[2], array[3], array[4], array[5]);
	};
	Collision.addEntry().addBox(c1, ydata1, c1, c15, ydata2, c15);
	Collision.addEntry().addBox(c1, ydata3, c1, c15, ydata4, c15);
	BlockRenderer.setCustomCollisionShape(BlockID.ex_crucible, 0, Collision);
};
var CrucibleOnce;
TileEntity.registerPrototype(BlockID.ex_crucible, {
	useNetworkItemContainer: true,
	defaultValues: {
		worktime: 0,
		innerdata:null
	},
	setTransportSlots: {},
	getTransportSlots: function() {
		return {
			input: [this.setTransportSlots]
		};
	},
	init: function() {
	let stored = this.liquidStorage.getLiquidStored();
        let amount = this.liquidStorage.getAmount(stored);
    if(this.data.innerdata==null){
    this.data.innerdata={baseliquid:0,addliquid:0,blockmodel:"air",liquidmodel:"air",liquiddata:"null",}
    }
        this.liquidStorage.setLimit("", 10)
        if (amount <= 0.1&&this.data.innerdata!=null) {
                this.cruciblebox(c4, 1 - (10000 - this.data.worktime) * 0.000075, c4, c4, this.data.innerdata.blockmodel,"air")
            } else {
                this.cruciblebox(c4, c4, c4 + this.data.worktime * 0.000075, (amount / 10) * ((10000 - this.data.worktime) * 0.000075) + c4 + this.data.worktime * 0.000075, "air",this.data.innerdata.liquidmodel)
            }
	},
	client: {
		renderModel: function() {
			let ydata1 = this.networkData.getInt("ydata1");
			let ydata2 = this.networkData.getInt("ydata2");
			let ydata3 = this.networkData.getInt("ydata3");
			let ydata4 = this.networkData.getInt("ydata4");
			let data1 = this.networkData.getString("data1");
			let data2 = this.networkData.getString("data2");
			if (CrucibleOnce != undefined) CrucibleBoxFunc(ydata1, ydata2, ydata3, ydata4, data1,data2, this.x, this.y, this.z);
		},
		load: function() {
			this.renderModel();
			var self = this;
			this.networkData.addOnDataChangedListener(function(data, isExternal) {
				self.renderModel();
			});
		}
	},
	cruciblebox: function(ydata1, ydata2, ydata3, ydata4, data1,data2) {
		var CrucibleOnce = true;
		this.networkData.putInt("ydata1", ydata1 ? ydata1: 0);
		this.networkData.putInt("ydata2", ydata2 ? ydata2: 0);
		this.networkData.putInt("ydata3", ydata3 ? ydata3: 0);
		this.networkData.putInt("ydata4", ydata4 ? ydata4: 0);
		this.networkData.putString("data1", data1 ? data1: "air");
		this.networkData.putString("data2", data2 ? data2: "air");
		CrucibleBoxFunc(ydata1, ydata2, ydata3, ydata4, data1,data2, this.x, this.y, this.z);
	},
	getLiquid: function(full, amount, id, data, count, player) {
		try {
			Game.prevent();
			if (amount >= 1) {
				this.liquidStorage.getLiquid("lava", 1);
Entity.setCarriedItem(player, id, count - 1, data);
(new PlayerActor(player)).addItemToInventory(full.id, 1, full.data, null, true);
				return true;
			};
		} catch(e) {}
	},
	tick: function() {
		let input = this.container.getSlot("slotInput");
        let slot11 = this.container.getSlot("[object Object]");
        let st2 = this.container.getSlot("slot2");
        let stored = this.liquidStorage.getLiquidStored();
        let amount = this.liquidStorage.getAmount(stored);
        let get = Crucible.dataGet("crucible", input.id, input.data);
        let block = World.getBlock(this.x, this.y - 1, this.z).id;
        let energy = Crucible.dataGet("energy", block, 0);
        
        slot11.count = 64;
        slot11.id = 1;
        if(energy){
        this.data.innerdata.setliquid = floatObj.add(amount,floatObj.multiply(this.data.innerdata.baseliquid,energy.energy))
        }
        if (this.liquidStorage.getLimit(this.data.innerdata.liquiddata)&&amount < this.liquidStorage.getLimit(this.data.innerdata.liquiddata) && this.data.worktime > 0 && energy) {
            this.liquidStorage.setAmount(this.data.innerdata.liquiddata, this.data.innerdata.setliquid)
            this.data.worktime -= energy.energy
        }
        if (this.data.worktime <= 7500 && this.data.worktime / 10000 + amount < 10) {
            this.setTransportSlots = ["slotInput"]
            if (get) {
                input.count--;
                input.id = 0;
                this.data.innerdata.baseliquid = get.baseliquid;
                this.data.worktime += get.addworktime;
                this.data.innerdata.blockmodel = get.blockmodel;
                this.data.innerdata.liquidmodel = get.liquidmodel;
                this.data.innerdata.liquiddata = get.liquiddata;
                
            }
        } else {
            this.setTransportSlots = {}
        }
        if (this.data.worktime > 0 || amount > 0) {
            if (amount <= 0.1) {
                this.cruciblebox(c4, 1 - (10000 - this.data.worktime) * 0.000075, c4, c4, this.data.innerdata.blockmodel,"air")
            } else {
                this.cruciblebox(c4, c4, c4 + this.data.worktime * 0.000075, (amount / 10) * ((10000 - this.data.worktime) * 0.000075) + c4 + this.data.worktime * 0.000075, "air",this.data.innerdata.liquidmodel)
            }
        }
        if (this.data.worktime + amount * 1000 == 0) {
            BlockRenderer.unmapAtCoords(this.x, this.y, this.z)
        }
	},
	click: function(id, count, data, coords, player) {
		var lava = this.liquidStorage.getAmount("lava");
		var input = this.container.getSlot("slotInput");
		var st2 = this.container.getSlot("slot2");
		var get = Crucible.dataGet("crucible", id, data);
		var lavafull = LiquidRegistry.getFullItem(id, data, "lava");

		if (this.data.worktime <= 7500 && this.data.worktime / 10000 + lava < 10) {
			if (get) {
//alert(true);
				try {
Entity.setCarriedItem(player, id, count-1, data);
					input.id = id;
					input.count++;
					Game.prevent()
				} catch(e) {}
			}
		}
		id == ItemID.ex_crookwriter && Debug.message("LAVA:" + lava);
		lavafull && this.getLiquid(lavafull, lava, id, data, count, player);
//alert(JSON.stringify(lavafull));
	},
	getScreenName: function(player, coords) {
		try {
			let item = Entity.getCarriedItem(player);
			if (item.id == ItemID.ex_crookwriter) {
				return "crucibleUI"
			}
		} catch(e) {}
	},
	destroy: function() {
		BlockRenderer.unmapAtCoords(this.x, this.y, this.z);
		var input = this.container.getSlot("slotInput");
		var st2 = this.container.getSlot("slot2");
		slot11 = this.container.getSlot("[object Object]");
		slot11.count = 0;
		input.count = 0
	}
});
