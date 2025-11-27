FactAPI.machine = {
	registerEnergyTile: function (id, proto, pipe) {
		if (proto.defaultValues) {
			proto.defaultValues.energy = 0;
		} else {
			proto.defaultValues = {
				energy: 0
			};
		}
		if (!proto.getEnergyStorage) {
			proto.getEnergyStorage = function () {
				return 0;
			};
		}
		FactAPI.render.addStandartWireConnections(id);
		this.registerTile(id,proto,pipe);

		EnergyTileRegistry.addEnergyTypeForId(id, EU);
		EnergyTileRegistry.addEnergyTypeForId(id, RF);
		EnergyTileRegistry.addEnergyTypeForId(id, BT);
	},
	basicEnergyStorage: function (type, src) {
		amount = Math.min(amount, 1000);
var add = Math.min(amount, this.getCapacity() - this.data.energy);  ?this.data.energy += add; // ????????? ??????? ? ????????? ?? ??? ?return add; // ? ?????????? ??????? ??????? ???????
	},
	registerTile: function (id, tile, pipe) {
		pipe ? null : pipe = {}
		FactAPI.render.addPipeConnections(id, (pipe.item || false), (pipe.liquid || false));
		ToolAPI.registerBlockMaterial(id, "stone");
		TileEntity.registerPrototype(id, tile);
	},
	
	registerNetTile:function(id,proto){
		if (proto.defaultValues) {
			proto.defaultValues.energy = 0;
		} else {
			proto.defaultValues = {
				energy: 0
			};
		}
		if (!proto.getEnergyStorage) {
			proto.getEnergyStorage = function () {
				return 0;
			};
		}
		proto.isNetTile=true
		ToolAPI.registerBlockMaterial(id, "stone");
		TileEntity.registerPrototype(id, proto);
		EnergyTileRegistry.addEnergyTypeForId(id, AE);
		ICRender.getGroup("me-wire").add(id, -1);
	}
};
