var EvaporatingDish_TYPE_ = Block.createSpecialType({
	sound: "wood"
});
IDRegistry.genBlockID("ex_evaporatingdish");
Block.createBlock("ex_evaporatingdish", [{
	name: "Evaporating dish",
	texture: [["planks", 0]],
	inCreative: true
}], EvaporatingDish_TYPE_);

var EvaporatingDish_boxes_1 = [[0, 0, 0, 1, 1 / 16, 1], [0, 1 / 16, 0, 1, 5 / 16, 1 / 16], [0, 1 / 16, 1 / 16, 1 / 16, 5 / 16, 15 / 16], [0, 1 / 16, 15 / 16, 1, 5 / 16, 1], [15 / 16, 1 / 16, 1 / 16, 1, 5 / 16, 15 / 16]]
var model = BlockRenderer.Model();
for (var box in EvaporatingDish_boxes_1) {
	var array = EvaporatingDish_boxes_1[box];
	model.addBox(array[0], array[1], array[2], array[3], array[4], array[5], BlockID.ex_evaporatingdish, 0);
};
var render = new ICRender.Model();
render.addEntry(model);
BlockRenderer.enableCoordMapping(BlockID.ex_evaporatingdish, 0, render);

var Collision = new ICRender.CollisionShape();
for (var box in EvaporatingDish_boxes_1) {
	var array = EvaporatingDish_boxes_1[box];
	Collision.addEntry().addBox(array[0], array[1], array[2], array[3], array[4], array[5]);
};
BlockRenderer.setCustomCollisionShape(BlockID.ex_evaporatingdish, 0, Collision);

var BuildEvaporatingDishBox = function(ydata, data, x, y, z) {
	var model = BlockRenderer.Model();
	for (var box in EvaporatingDish_boxes_1) {
		var array = EvaporatingDish_boxes_1[box];
		model.addBox(array[0], array[1], array[2], array[3], array[4], array[5], BlockID.ex_evaporatingdish, 0);
	};
	model.addBox(1 / 16, 1 / 16, 1 / 16, 15 / 16, ydata, 15 / 16, data);
	var render = new ICRender.Model();
	render.addEntry(model);
	BlockRenderer.mapAtCoords(x, y, z, render);
	var Collision = new ICRender.CollisionShape();
	for (var box in EvaporatingDish_boxes_1) {
		var array = EvaporatingDish_boxes_1[box];
		Collision.addEntry().addBox(array[0], array[1], array[2], array[3], array[4], array[5]);
	};
	Collision.addEntry().addBox(1 / 16, 1 / 16, 1 / 16, 15 / 16, ydata, 15 / 16);
	BlockRenderer.setCustomCollisionShape(BlockID.ex_evaporatingdish, 0, Collision);
};
var BuildEvaporatingDishOnce;
TileEntity.registerPrototype(BlockID.ex_evaporatingdish, {
	useNetworkItemContainer: true,
	defaultValues: {
		worktime: 0,
		type: null
	},
	getTransportSlots: function() {
		return {
			output: ["slot2"]
		}
	},
	init: function() {
		this.liquidStorage.setLimit("water", 1);
		this.show()
	},
	client: {
		renderModel: function() {
			let ydata = this.networkData.getInt("ydata");
			let data = this.networkData.getString("data");
			if (BuildEvaporatingDishOnce != undefined) BuildEvaporatingDishBox(ydata, data, this.x, this.y, this.z);
		},
		load: function() {
			this.renderModel();
			var self = this;
			this.networkData.addOnDataChangedListener(function(data, isExternal) {
				self.renderModel();
			});
		}
	},
	box: function(ydata, data) {
		var BuildEvaporatingDishOnce = true;
		if (ydata) {
			this.networkData.putInt("ydata", ydata);
		} else {
			this.networkData.putInt("ydata", 0);
		};
		if (data) {
			this.networkData.putString("data", data);
		} else {
			this.networkData.putInt("data", 0);
		};
		BuildEvaporatingDishBox(ydata, data, this.x, this.y, this.z);
	},
	show: function() {
		var input = this.container.getSlot("slotInput");
		var st2 = this.container.getSlot("slot2");
		var stored = this.liquidStorage.getLiquidStored();
		var amount = this.liquidStorage.getAmount(stored);
		if (amount > 0) {
			this.box(5 / 16 * amount, [["ex_water", 0]])
		} else {
			this.box(5 / 16, [["air", 0]])
		}
		if (st2.count > 0) {
			this.box(5 / 16, [["ex_coarsesalt", 0]])
		}
	},
	tick: function() {
		var st2 = this.container.getSlot("slot2");
		var stored = this.liquidStorage.getLiquidStored();
		var water = this.liquidStorage.getAmount("water");
		if (water >= 1 && this.data.worktime < 1000) {
			this.data.worktime++
		}
		if (stored != this.data.type) {
			this.show();
			this.data.type = stored;
		};
		if (this.data.worktime >= 1000) {
			this.liquidStorage.getLiquid("water", 1);
			st2.setSlot(BlockID.ex_saltcoarse, st2.count + 1, 0);
			this.show();
			this.data.worktime = 0
		}
		if (this.data.worktime <= 0 && water <= 0 && st2.count <= 0) {
			this.box(5 / 16, [["air", 0]]);
		}
	},
	setItem: function(id, data, count, id2, data2, player) {
		if (count > 1) {
(new PlayerActor(player)).addItemToInventory(id, 1, data, null, true);
Entity.setCarriedItem(player, id2, count - 1, data2);
		} else {
			Entity.setCarriedItem(player, id, 1, data);
		};
	},
	setLiquid: function(type, id, data, count, stored, amount, empty, liquid, player) {
		Game.prevent();
		var st2 = this.container.getSlot("slot2");
		if (!stored && st2.id == 0 && (!this.data.worktime || stored == type) && amount < 1) {
			this.liquidStorage.addLiquid(liquid, 1);
			this.setItem(empty.id, empty.data, count, id, data, player);
			return true;
		};
	},
	click: function(id, count, data, coords, player) {
		var input = this.container.getSlot("slotInput");
		var st2 = this.container.getSlot("slot2");
		var stored = this.liquidStorage.getLiquidStored();
		var liquid = LiquidRegistry.getItemLiquid(id, data);
		var amount = this.liquidStorage.getAmount(stored);
		var full = LiquidRegistry.getFullItem(id, data, stored);
		var empty = LiquidRegistry.getEmptyItem(id, data);
		var client = Network.getClientForPlayer(player);
		liquid && this.setLiquid(liquid, id, data, count, stored, amount, empty, liquid, player);
		if (st2.count > 0) {
		    Game.prevent();
			this.blockSource.spawnDroppedItem(this.x + 0.5, this.y + 1, this.z + 0.5, st2.id, st2.count, st2.data);
			st2.setSlot(0, 0, 0);
		}
	},
	destroyBlock: function(coords, player) {
		this.box(5 / 16, [["air", 0]]);
	}
});
