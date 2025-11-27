/*
BUILD INFO:
  dir: src
  target: main.js
  files: 81
*/



// file: Header.js

/*
	FactoryCraft 1.0 build 1
	©SWCorp
*/

IMPORT("energylib");
IMPORT("ItemDictionary");
IMPORT("PipesAPI");
IMPORT("Pipe");

var EU = EnergyTypeRegistry.assureEnergyType("Eu",1);			//Standart energy
var RF = EnergyTypeRegistry.assureEnergyType("RF",0.25);	//Standart energy
var BT = EnergyTypeRegistry.assureEnergyType("Bu", 2);			//Standart energy
var AE = EnergyTypeRegistry.assureEnergyType("AE", 0.5);		//ME energy

Block.setDestroyLevel = function(id, lvl){
	Block.registerDropFunction(id, function(coords, blockID, blockData, level, enchant){
		if(level >= lvl){
			return [[blockID, 1, 0]];
		}
		return [];
	}, lvl);
}




// file: client/Init.js

FactAPI.getBlockDrop = function(coords, id, data, tool) {
	var dropFunc = Block.dropFunctions[id];
	if (dropFunc) {
		return dropFunc(coords, id, data, ToolAPI.getToolLevel(tool), {});
	}
	return [[id, 1, data]];
}




// file: client/Liquid.js

FactAPI.liquid = {
	textures: {},
	registerTexture: function (id, texture) {
		this.textures[id] = texture;
		PAPI.registerLiquidTexture(id,texture);
	},
	getTexture: function (id) {
		return this.textures[id] || false;
	},
	fluidContainerEmpty: function (liquid, tile, slots) {
		var slotContainerFull = tile.container.getSlot(slots.full);
		var slotContainer = tile.container.getSlot(slots.empty);
		if (slotContainerFull && slotContainer && slotContainerFull.id) {
			var empty = LiquidRegistry.getEmptyItem(slotContainerFull.id, slotContainerFull.data);
			if (empty && (liquid === null || liquid.indexOf(empty.liquid)) > -1 && tile.liquidStorage.getAmount(empty.liquid) + 1 <= tile.liquidStorage.getLimit(empty.liquid)) {
				if (slotContainer.id === 0) {
					tile.container.setSlot(slots.empty, empty.id, 1, empty.data);
					tile.liquidStorage.addLiquid(empty.liquid, 1);
					slotContainerFull.count--;
					tile.container.validateAll();
					return true;
				} else if (slotContainer.id === empty.id && slotContainer.data === empty.data && slotContainer.count < Item.getMaxStack(slotContainer.id)) {
					slotContainer.count++;
					slotContainerFull.count--;
					tile.liquidStorage.addLiquid(empty.liquid, 1);
					tile.container.validateAll();
					return true;
				}
			}
		}
		return false;
	}
};

FactAPI.liquid.registerTexture("water", ["fluid_water", 0]);
FactAPI.liquid.registerTexture("lava", ["fluid_lava", 0]);
FactAPI.liquid.registerTexture("appleJuice", ["liquid_juice", 0])
FactAPI.liquid.registerTexture("honey", ["liquid_honey", 0])
FactAPI.liquid.registerTexture("seedOil", ["liquid_seedoil", 0])
FactAPI.liquid.registerTexture("biomass", ["liquid_biomass", 0])
FactAPI.liquid.registerTexture("ethanol", ["liquid_ethanol", 0])
FactAPI.liquid.registerTexture("forestryGlass", ["liquid_glass", 0])




// file: client/Render.js

FactAPI.render = {
	addStandartWireConnections: function (id) {
		ICRender.getGroup("ic-wire").add(id, -1);
		ICRender.getGroup("rf-wire").add(id, -1);
		ICRender.getGroup("bt-wire").add(id, -1);
	},
	addPipeConnections: function (id, item, liquid) {
		if (item) ICRender.getGroup("item-pipe").add(id, -1);
		if (liquid) ICRender.getGroup("liquid-pipe").add(id, -1);
	},
	setupWireasRender: function (id, width, groups) {
		var render = new ICRender.Model();
		BlockRenderer.setStaticICRender(id, 0, render);
		var boxes = [
		{ side: [1, 0, 0], box: [0.5 + width / 2, 0.5 - width / 2, 0.5 - width / 2, 1, 0.5 + width / 2, 0.5 + width / 2] },
		{ side: [-1, 0, 0], box: [0, 0.5 - width / 2, 0.5 - width / 2, 0.5 - width / 2, 0.5 + width / 2, 0.5 + width / 2] },
		{ side: [0, 1, 0], box: [0.5 - width / 2, 0.5 + width / 2, 0.5 - width / 2, 0.5 + width / 2, 1, 0.5 + width / 2] },
		{ side: [0, -1, 0], box: [0.5 - width / 2, 0, 0.5 - width / 2, 0.5 + width / 2, 0.5 - width / 2, 0.5 + width / 2] },
		{ side: [0, 0, 1], box: [0.5 - width / 2, 0.5 - width / 2, 0.5 + width / 2, 0.5 + width / 2, 0.5 + width / 2, 1] },
		{ side: [0, 0, -1], box: [0.5 - width / 2, 0.5 - width / 2, 0, 0.5 + width / 2, 0.5 + width / 2, 0.5 - width / 2] },
		];
		for (var i in groups) {
		var gn = groups[i];
		var group = ICRender.getGroup(gn.name);
		if (gn.add) group.add(id, -1);
		for (var i in boxes) {
			var box = boxes[i];
			var model = BlockRenderer.createModel();
			model.addBox(box.box[0], box.box[1], box.box[2], box.box[3], box.box[4], box.box[5], id, 0);
			render.addEntry(model).asCondition(box.side[0], box.side[1], box.side[2], group, 0);
		}
		}
		var model = BlockRenderer.createModel();
		model.addBox(0.5 - width / 2, 0.5 - width / 2, 0.5 - width / 2, 0.5 + width / 2, 0.5 + width / 2, 0.5 + width / 2, id, 0);
		render.addEntry(model);
		Block.setBlockShape(id, { x: 0.5 - width / 2, y: 0.5 - width / 2, z: 0.5 - width / 2 }, { x: 0.5 + width / 2, y: 0.5 + width / 2, z: 0.5 + width / 2 });
	},
	
	setupHCable:function(id, width, groups) {
		var render = new ICRender.Model();
		BlockRenderer.setStaticICRender(id, 0, render);
		var boxes = [
		{ side: [1, 0, 0], box: [0.5 + width / 2, 0.5 - width / 2, 0.5 - width / 2, 1, 0.5 + width / 2, 0.5 + width / 2] },
		{ side: [-1, 0, 0], box: [0, 0.5 - width / 2, 0.5 - width / 2, 0.5 - width / 2, 0.5 + width / 2, 0.5 + width / 2] },
		{ side: [0, 0, 1], box: [0.5 - width / 2, 0.5 - width / 2, 0.5 + width / 2, 0.5 + width / 2, 0.5 + width / 2, 1] },
		{ side: [0, 0, -1], box: [0.5 - width / 2, 0.5 - width / 2, 0, 0.5 + width / 2, 0.5 + width / 2, 0.5 - width / 2] },
		];
		for (var i in groups) {
		var gn = groups[i];
		var group = ICRender.getGroup(gn.name);
		if (gn.add) group.add(id, -1);
		for (var i in boxes) {
			var box = boxes[i];
			var model = BlockRenderer.createModel();
			model.addBox(box.box[0], box.box[1], box.box[2], box.box[3], box.box[4], box.box[5], id, 0);
			render.addEntry(model).asCondition(box.side[0], box.side[1], box.side[2], group, 0);
		}
		}
		var model = BlockRenderer.createModel();
		model.addBox(0.5 - width / 2, 0.5 - width / 2, 0.5 - width / 2, 0.5 + width / 2, 0.5 + width / 2, 0.5 + width / 2, id, 0);
		render.addEntry(model);
		Block.setBlockShape(id, { x: 0.5 - width / 2, y: 0.5 - width / 2, z: 0.5 - width / 2 }, { x: 0.5 + width / 2, y: 0.5 + width / 2, z: 0.5 + width / 2 });
	},
};

FactAPI.render.addPipeConnections(54, 1);
FactAPI.render.addPipeConnections(61, 1);
FactAPI.render.addPipeConnections(62, 1);
FactAPI.render.addPipeConnections(154, 1);




// file: client/MachineContainer.js

FactAPI.machineContainer = {
	addItemToContainer: function (container, item, size,prefix,index) {
		if (!size) { s = 28 } else { s = size }
		!prefix?prefix="":null;
		for (var index = index?index:1; index <= s; index++) {
		var slot = container.getSlot("slot"+prefix + index);
		if ((slot.id == item.id && slot.data == item.data) || slot.id == 0) {
			if (slot.count <= Item.getMaxStack(item.id)) {
			var maxcount = Item.getMaxStack(item.id) - slot.count;
			if(item.count<=maxcount){
				container.setSlot("slot" + prefix+index, item.id, slot.count + item.count, item.data);
				container.validateAll();
				return false
			}
			if(item.count>maxcount){
				container.setSlot("slot" + prefix+index, item.id, slot.count + maxcount, item.data);
				container.validateAll();
				item.count-=maxcount;
			}
			}
		}
		}
		return item.count
	},
	isItemInContainer: function (container, item, size,prefix,index) {
		if (!size) { s = 28 } else { s = size }
		!prefix?prefix="":null;
		for (var index =index?index:1; index <= s; index++) {
		var slot = container.getSlot("slot"+prefix + index);
		if (slot.id == item.id&& (slot.data == item.data||item.data==-1)) {
			item.count = Math.max(item.count-slot.count,0)
		}
		}
		if(item.count==0)return true
		return false
	},
	giveItemFromContainer: function (container, item, size,prefix,index) {
		if (!size) { s = 28 } else { s = size }
		!prefix?prefix="":null;
		for (var index = index?index:1; index < s; index++) {
			var slot = container.getSlot("slot"+prefix + index);
			if (slot.id == item.id&& (slot.data == item.data||item.data==-1)) {
				if (slot.count >= item.count) {
					container.setSlot("slot" +prefix+ index, item.id, slot.count - item.count, item.data);
					container.validateAll();
					return true
				}
				if (slot.count < item.count){
					item.count-=slot.count;
					container.setSlot("slot" +prefix+ index, item.id, 0, item.data);
					container.validateAll();
				}
			}
		}
		return false
	}
}




// file: client/Machine.js

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
		var energyNeed = this.getEnergyStorage() - this.data.energy;
		this.data.energy += src.getAll(energyNeed);
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




// file: client/Marker.js

FactAPI.Marker={
	crd:{length:0},
	load:function(x,y,z){
		if(!FactAPI.Marker.crd[x+":"+y+":"+z]){
			if(FactAPI.Marker.crd.length>=4)FactAPI.Marker.clearList();
			FactAPI.Marker.crd[x+":"+y+":"+z]={x:x,y:y,z:z}
			FactAPI.Marker.crd.length++;
		}
	},
	
	clearList:function(){
		FactAPI.Marker.crd=null;
		FactAPI.Marker.crd={length:0}
	},
	
	checkNearest:function(x,y,z){
		for(var i in FactAPI.Marker.crd){
			var p=FactAPI.Marker.crd[i];
			if(p.y==y&&((Math.abs(p.x-x)==1&&p.z-z==0)||(Math.abs(p.z-z)==1&&p.x-x==0)))return true
		}
		return false;
	},
	
	getHeighMap: function(){
		var crds =[];
		for(var i in FactAPI.Marker.crd){
			if(i!="length")crds.push(FactAPI.Marker.crd[i])
		}
		return {
			minX: Math.min(crds[0].x,crds[1].x,crds[2].x,crds[3].x),
			maxX: Math.max(crds[0].x,crds[1].x,crds[2].x,crds[3].x),
			
			minY: Math.min(crds[0].y,crds[1].y,crds[2].y,crds[3].y),
			maxY: Math.max(crds[0].y,crds[1].y,crds[2].y,crds[3].y),
			
			minZ: Math.min(crds[0].z,crds[1].z,crds[2].z,crds[3].z),
			maxZ: Math.max(crds[0].z,crds[1].z,crds[2].z,crds[3].z),
		}
	}
}




// file: client/Farm.js

FactAPI.farm = {
	seeds:{
		392: 142,
		458: 244
	},
	crops:{
		142: [[392, parseInt(1 + Math.random() * 3), 0]],
		244: [[457, 1, 0], [458, parseInt(1 + Math.random() * 3), 0]]
	},
	datas:{
		142:7,
		244:7
	},
	registerPlant:function(seed,crop,drop){
		var blockId = crop.id;
		var endData = crop.maxData;
		this.seeds[seed]=blockId;
		this.crops[blockId]=drop;
		this.datas[blockId]=endData;
	}
};

FactAPI.farm.registerPlant(295,{
	id:59,
	maxData:7
},[
	[296, 1, 0],
	[295, parseInt(1 + Math.random() * 3), 0]
]);

FactAPI.farm.registerPlant(391,{
	id:141,
	maxData:7
},[
	[391, parseInt(1 + Math.random() * 3), 0]
]);




// file: client/Constants.js

FactAPI.constants = {
    NotKill: {
        64:true,65:true,66:true,
        67:true,68:true,69:true,
        77:true,80:true,81:true,
        82:true,83:true,84:true,
        85:true,86:true,90:true,
        93:true,94:true
    }
};




// file: client/Recipe.js

FactAPI.recipe = {
    repairStation: {
        all: {},
        register: function (id, id2, data2) {
            if (!data2) data2 = 0;
            if (!id2) id2 = id;
            this.all[id] = { id: id2, data: data2 };
        },
        get: function (id) {
            return this.all[id] || false;
        },
        delete: function (id) {
            this.all[id] = false;
        }
    },
}




// file: client/Reactor.js

FactAPI.Reactor = {
	fuel:{},
	coolant:{},
	registerFuel:function(id,therm,depleted){
		this.fuel[id]={therm: therm,depleted:depleted}
	},
	isFuel:function(id){
		return this.fuel[id]||false;
	},
	
	isCoolant:function(id,therm,val){
		if(val){
			this.coolant[id]=therm
		}
		if(!id||id<1)return false
		return this.coolant[id]||false;
	},
	
	burns:{},
	registerRadFuel:function(id,data,duration){
		this.burns[id+":"+data]=duration;
	},
	getNuclearBurn:function(id,data){
		return this.burns[id+":"+data]||false
	}
}




// file: client/Disk.js

FactAPI.disk = {
	itemUID:1,
	itemContainers:{},
	
	isItemDisk: function(id,data){
		return this.itemContainers[id+":"+data]
	},
	createItemDisk:function(id,data){
		if(data!=0)return data;
		data = this.itemUID++;
		this.itemContainers[id+":"+data]=new UI.Container();
		return data
	}
};

Saver.addSavesScope("FactoryCraftSaves",
	function read(scope) {
		FactAPI.disk.itemUID= scope.itemUID || 1;
		FactAPI.disk.itemContainers= scope.itemContainers || {};
	},
	function save() {
		return {
			itemUID:FactAPI.disk.itemUID,
			itemContainers:FactAPI.disk.itemContainers
		}
	}
);




// file: common/item/Gears.js

Translation.addTranslation("Wooden Gear", {
	ru: "Деревянная шестерня"
});
Translation.addTranslation("Stone Gear", {
	ru: "Каменная шестерня"
});
Translation.addTranslation("Iron Gear", {
	ru: "Железная шестерня"
});
Translation.addTranslation("Golden Gear", {
	ru: "Золотая шестерня"
});
Translation.addTranslation("Diamond Gear", {
	ru: "Алмазная шестерня"
});

IDRegistry.genItemID("gearWooden");
IDRegistry.genItemID("gearStone");
IDRegistry.genItemID("gearIron");
IDRegistry.genItemID("gearGolden");
IDRegistry.genItemID("gearDiamond");

Item.createItem("gearWooden", "Wooden Gear", { name: "gear_wood", meta: 0 });
Item.createItem("gearStone", "Stone Gear", { name: "gear_stone", meta: 0 });
Item.createItem("gearIron", "Iron Gear", { name: "gear_iron", meta: 0 });
Item.createItem("gearGolden", "Golden Gear", { name: "gear_gold", meta: 0 });
Item.createItem("gearDiamond", "Diamond Gear", { name: "gear_diamond", meta: 0 });

Recipes.addShaped({ id: ItemID.gearWooden, count: 1, data: 0 }, [
	"#a#",
	"a#a",
	"#a#"
],[
	'a', 280, 0
]);
Recipes.addShaped({ id: ItemID.gearStone, count: 1, data: 0 }, [
	"#a#",
	"aba",
	"#a#"
],[
	'a', 1, -1,
	'b', ItemID.gearWooden, 0
]);
Recipes.addShaped({ id: ItemID.gearIron, count: 1, data: 0 }, [
	"#a#",
	"aba",
	"#a#"
],[
	'a', 265, -1,
	'b', ItemID.gearStone, 0
]);
Recipes.addShaped({ id: ItemID.gearGolden, count: 1, data: 0 }, [
	"#a#",
	"aba",
	"#a#"
],[
	'a', 266, -1,
	'b', ItemID.gearIron, 0
]);
Recipes.addShaped({ id: ItemID.gearDiamond, count: 1, data: 0 }, [
	"#a#",
	"aba",
	"#a#"
],[
	'a', 264, -1,
	'b', ItemID.gearGolden, 0
]);




// file: common/item/Wrench.js

Translation.addTranslation("Iron Wrench", {
    ru: "Железный ключ"
});

IDRegistry.genItemID("factoryWrench");
Item.createItem("factoryWrench", "Iron Wrench", { name: "factory_wrench", meta: 0 });

Recipes.addShaped({ id: ItemID.factoryWrench, count: 1, data: 0 }, [
    "a a",
    " a ",
    " a "
],[
    'a', 265, 0
    ]);
ItemDictionary.setItemCathegory(ItemID.factoryWrench, "wrench");




// file: common/item/Craft.js

Translation.addTranslation("Battery", {
	ru: "Батарея"
});
Translation.addTranslation("Pipe Sealant", {
	ru: "Уплотнитель для труб"
});
Translation.addTranslation("Uranium", {
	ru: "Уран"
});

IDRegistry.genItemID("factoryBattery");
IDRegistry.genItemID("uranium");
IDRegistry.genItemID("pipeSealant");

Item.createItem("factoryBattery", "Battery", { name: "battery" });
Item.createItem("uranium", "Uranium", {name: "uranium"});
Item.createItem("pipeSealant", "Pipe Sealant", {name: "pipe_sealant"});

Recipes.addShaped({ id: ItemID.factoryBattery, count: 1, data: 0 }, [
	" b ",
	" a "
],[
	'a', 265, 0,
	'b', 331, 0
]);
Recipes.addShapeless({id: ItemID.pipeSealant, count: 1, data: 0}, [{id: 351, data: 2}]);
Recipes.addShapeless({id: ItemID.pipeSealant, count: 1, data: 0}, [{id: 341, data: 0}]);

FactAPI.Reactor.registerRadFuel(ItemID.uranium,0,2000);




// file: common/item/Crystal.js

Translation.addTranslation("Quartz Crystal", {
	ru: "Кварцевый кристалл"
});
Translation.addTranslation("Quantium Crystal", {
	ru: "Кубитовый кристалл"
});
Translation.addTranslation("Fluix Crystal", {
	ru: "Изменчивый кристалл"
});

IDRegistry.genItemID("crystalQuartz");
IDRegistry.genItemID("crystalQuantium");
IDRegistry.genItemID("crystalFluix");

Item.createItem("crystalQuartz", "Quartz Crystal", { name: "crystal_quartz", meta: 0 });
Item.createItem("crystalQuantium", "Quantium Crystal", { name: "crystal_quantium", meta: 0 });
Item.createItem("crystalFluix", "Fluix Crystal", { name: "crystal_fluix", meta: 0 });

Recipes.addShaped({ id: ItemID.crystalQuartz, count: 1, data: 0 }, [
	"#a#",
	"aba",
	"#a#"
],[
	'b', 331, 0,
	'a', 406, 0
]);
Recipes.addShaped({ id: ItemID.crystalQuantium, count: 1, data: 0 }, [
	"#a#",
	"aba",
	"#a#"
],[
	'b', ItemID.crystalQuartz, 0,
	'a', 351, 4
]);
Recipes.addShaped({ id: ItemID.crystalFluix, count: 1, data: 0 }, [
	"#a#",
	"aba",
	"#a#"
],[
	'b', ItemID.crystalQuantium, 0,
	'a', 331,0
]);




// file: common/item/Marker.js

Translation.addTranslation("Blue Marker", {
	ru: "Синий маркер"
});
Translation.addTranslation("Green Marker", {
	ru: "Зелёный маркер"
});
Translation.addTranslation("Yellow Marker", {
	ru: "Жёлтый маркер"
});

IDRegistry.genItemID("markerBlue");
IDRegistry.genItemID("markerGreen");
IDRegistry.genItemID("markerYellow");

Item.createItem("markerBlue", "Blue Marker", { name: "blue_marker", meta: 0 });
Item.createItem("markerGreen", "Green Marker", { name: "green_marker", meta: 0 });
Item.createItem("markerYellow", "Yellow Marker", { name: "yellow_marker", meta: 0 });

Recipes.addShaped({ id: ItemID.markerBlue, count: 1, data: 0 }, [
	" b ",
	" a "
],[
	'a', 76, 0,
	'b', 351, 4
]);
Recipes.addShaped({ id: ItemID.markerGreen, count: 1, data: 0 }, [
	" b ",
	" a "
],[
	'a', 76, 0,
	'b', 351, 2
]);
Recipes.addShaped({ id: ItemID.markerYellow, count: 1, data: 0 }, [
	" b ",
	" a "
],[
	'a', 76, 0,
	'b', 351, 11
]);

IDRegistry.genBlockID("markerBlueBlock");
IDRegistry.genBlockID("markerGreenBlock");
IDRegistry.genBlockID("markerYellowBlock");

Block.createBlock("markerBlueBlock", [
	{
		name:"Marker",
		texture: [
			["blue_marker",0]
		],
		inCreative: false
	}
]);
Block.createBlock("markerGreenBlock", [
	{
		name:"Marker",
		texture: [
			["green_marker",0]
		],
		inCreative: false
	}
]);
Block.createBlock("markerYellowBlock", [
	{
		name:"Marker",
		texture: [
			["yellow_marker",0]
		],
		inCreative: false
	}
]);

ToolAPI.registerBlockMaterial(BlockID.markerBlueBlock, "plant");
ToolAPI.registerBlockMaterial(BlockID.markerGreenBlock, "plant");
ToolAPI.registerBlockMaterial(BlockID.markerYellowBlock, "plant");

Callback.addCallback("ItemUse",function(crd,item){
	var hk=crd.relative;
	if(item.id==ItemID.markerBlue&&World.getBlockID(hk.x,hk.y-1,hk.z)!=0){
		World.setBlock(hk.x,hk.y,hk.z,BlockID.markerBlueBlock,0);
		Player.setCarriedItem(item.id, item.count - 1, item.data);
	}
});
Callback.addCallback("ItemUse",function(crd,item){
	var hk=crd.relative;
	if(item.id==ItemID.markerGreen&&World.getBlockID(hk.x,hk.y-1,hk.z)!=0){
		World.setBlock(hk.x,hk.y,hk.z,BlockID.markerGreenBlock,0);
		Player.setCarriedItem(item.id, item.count - 1, item.data);
	}
});
Callback.addCallback("ItemUse",function(crd,item){
	var hk=crd.relative;
	if(item.id==ItemID.markerYellow&&World.getBlockID(hk.x,hk.y-1,hk.z)!=0){
		World.setBlock(hk.x,hk.y,hk.z,BlockID.markerYellowBlock,0);
		Player.setCarriedItem(item.id, item.count - 1, item.data);
	}
});

Block.registerDropFunction("markerBlueBlock", function(){
	return [[ItemID.markerBlue, 1, 0]]
});
Block.registerDropFunction("markerGreenBlock", function(){
	return [[ItemID.markerGreen, 1, 0]]
});
Block.registerDropFunction("markerYellowBlock", function(){
	return [[ItemID.markerYellow, 1, 0]]
});

Block.setBlockShape(BlockID.markerBlueBlock, {x: 0, y: 0, z: 0},{x: 1, y: 0.001, z: 1});
Block.setBlockShape(BlockID.markerGreenBlock, {x: 0, y: 0, z: 0},{x: 1, y: 0.001, z: 1});
Block.setBlockShape(BlockID.markerYellowBlock, {x: 0, y: 0, z: 0},{x: 1, y: 0.001, z: 1});

BlockRenderer.addRenderCallback(BlockID.markerBlueBlock, function(api, coords,block) {
	api.renderBoxId(coords.x, coords.y, coords.z, 0.4999, 0.01, 0, 0.5, 0.99, 1,block.id, block.data);
	api.renderBoxId(coords.x, coords.y, coords.z, 0, 0.01, 0.4999, 1, 0.99, 0.5, block.id, block.data);
})
BlockRenderer.addRenderCallback(BlockID.markerGreenBlock, function(api, coords,block) {
	api.renderBoxId(coords.x, coords.y, coords.z, 0.4999, 0.01, 0, 0.5, 0.99, 1,block.id, block.data);
	api.renderBoxId(coords.x, coords.y, coords.z, 0, 0.01, 0.4999, 1, 0.99, 0.5, block.id, block.data);
})
BlockRenderer.addRenderCallback(BlockID.markerYellowBlock, function(api, coords,block) {
	api.renderBoxId(coords.x, coords.y, coords.z, 0.4999, 0.01, 0, 0.5, 0.99, 1,block.id, block.data);
	api.renderBoxId(coords.x, coords.y, coords.z, 0, 0.01, 0.4999, 1, 0.99, 0.5, block.id, block.data);
})

BlockRenderer.enableCustomRender(BlockID.markerBlueBlock);
BlockRenderer.enableCustomRender(BlockID.markerGreenBlock);
BlockRenderer.enableCustomRender(BlockID.markerYellowBlock);

var Particles = ModAPI.requireGlobal("Particles");

TileEntity.registerPrototype(BlockID.markerBlueBlock,{
	click:function(){
		if(Player.getCarriedItem().id==ItemID.factoryWrench){
			FactAPI.Marker.load(this.x,this.y,this.z)
			this.data.active=true;
		}
	},
	destroy:function(){
		FactAPI.Marker.clearList();
	},
	tick:function(){
		Particles.addParticle(this.x, this.y, this.z, 6, 0.1, 0.1, 0.1, 0);
		var emitter=new Particles.ParticleEmitter(this.x,this.y,this.z);
		if(World.getThreadTime()%10==0&&this.data.active){
			emitter.emit(Native.ParticleType.redstone, 0, this.x+.5,this.y+.5,this.z+.5);
		}
	}
});
TileEntity.registerPrototype(BlockID.markerGreenBlock,{
	click:function(){
		if(Player.getCarriedItem().id==ItemID.factoryWrench){
			FactAPI.Marker.load(this.x,this.y,this.z)
			this.data.active=true;
		}
	},
	destroy:function(){
		FactAPI.Marker.clearList();
	},
	tick:function(){
		Particles.addParticle(this.x, this.y, this.z, 6, 0.1, 0.1, 0.1, 0);
		var emitter=new Particles.ParticleEmitter(this.x,this.y,this.z);
		if(World.getThreadTime()%10==0&&this.data.active){
			emitter.emit(Native.ParticleType.redstone, 0, this.x+.5,this.y+.5,this.z+.5);
		}
	}
});
TileEntity.registerPrototype(BlockID.markerYellowBlock,{
	click:function(){
		if(Player.getCarriedItem().id==ItemID.factoryWrench){
			FactAPI.Marker.load(this.x,this.y,this.z)
			this.data.active=true;
		}
	},
	destroy:function(){
		FactAPI.Marker.clearList();
	},
	tick:function(){
		Particles.addParticle(this.x, this.y, this.z, 6, 0.1, 0.1, 0.1, 0);
		var emitter=new Particles.ParticleEmitter(this.x,this.y,this.z);
		if(World.getThreadTime()%10==0&&this.data.active){
			emitter.emit(Native.ParticleType.redstone, 0, this.x+.5,this.y+.5,this.z+.5);
		}
	}
});




// file: common/item/Disk.js

Translation.addTranslation("Energy Disk", {
	ru: "Энергетический диск"
});
Translation.addTranslation("Item Disk", {
	ru: "Предметный диск"
});
Translation.addTranslation("Liquid Disk", {
	ru: "Жидкостный диск"
});

IDRegistry.genItemID("diskEnergy");
IDRegistry.genItemID("diskItem");
IDRegistry.genItemID("diskLiquid");

Item.createItem("diskEnergy", "Energy Disk", { name: "disk_energy", meta: 0 });
Item.createItem("diskItem", "Item Disk", { name: "disk_item", meta: 0 });
Item.createItem("diskLiquid", "Liquid Disk", { name: "disk_liquid", meta: 0 });

Recipes.addShaped({ id: ItemID.diskEnergy, count: 1, data: 0 }, [
	" b ",
	"cac"
],[
	'a', ItemID.factoryBattery, 0,
	'b', ItemID.crystalQuantium, 0,
	'c', 265,0
]);
Recipes.addShaped({ id: ItemID.diskItem, count: 1, data: 0 }, [
	" b ",
	"cac"
],[
	'a', 58, 0,
	'b', ItemID.crystalQuantium, 0,
	'c', 265,0
]);
Recipes.addShaped({ id: ItemID.diskLiquid, count: 1, data: 0 }, [
	" b ",
	"cac"
],[
	'a', 325, 0,
	'b', ItemID.crystalQuantium, 0,
	'c', 265,0
]);

var UI_disk_item = new UI.StandartWindow({
	standart: {
		header: {
			text: {
				text: "Terminal/Терминал"
			},
		},
		minHeight: 700,
		inventory: {
			standart: true
		},
		background: {
			standart: true
		}
	},
	params: {
		slot: "slotFactory",
		invSlot: "slotFactory",
		selection: "selectionFactory"
	},
	drawing: [{
			type: "bitmap",
			x: 0,
			y: 0,
			bitmap: "gui_ground",
			scale: 8
		}
	],
	elements: {
		"slot1": {type: "slot", x: 370, y: 60, size: 70},
		"slot2": {type: "slot", x: 440, y: 60, size: 70},
		"slot3": {type: "slot", x: 510, y: 60, size: 70},
		"slot4": {type: "slot", x: 580, y: 60, size: 70},
		"slot5": {type: "slot", x: 650, y: 60, size: 70},
		"slot6": {type: "slot", x: 720, y: 60, size: 70},
		"slot7": {type: "slot", x: 790, y: 60, size: 70},
		"slot8": {type: "slot", x: 370, y: 130, size: 70},
		"slot9": {type: "slot", x: 440, y: 130, size: 70},
		"slot10": {type: "slot", x: 510, y: 130, size: 70},
		"slot11": {type: "slot", x: 580, y: 130, size: 70},
		"slot12": {type: "slot", x: 650, y: 130, size: 70},
		"slot13": {type: "slot", x: 720, y: 130, size: 70},
		"slot14": {type: "slot", x: 790, y: 130, size: 70},
		"slot15": {type: "slot", x: 370, y: 200, size: 70},
		"slot16": {type: "slot", x: 440, y: 200, size: 70},
		"slot17": {type: "slot", x: 510, y: 200, size: 70},
		"slot18": {type: "slot", x: 580, y: 200, size: 70},
		"slot19": {type: "slot", x: 650, y: 200, size: 70},
		"slot20": {type: "slot", x: 720, y: 200, size: 70},
		"slot21": {type: "slot", x: 790, y: 200, size: 70},
		"slot22": {type: "slot", x: 370, y: 270, size: 70},
		"slot23": {type: "slot", x: 440, y: 270, size: 70},
		"slot24": {type: "slot", x: 510, y: 270, size: 70},
		"slot25": {type: "slot", x: 580, y: 270, size: 70},
		"slot26": {type: "slot", x: 650, y: 270, size: 70},
		"slot27": {type: "slot", x: 720, y: 270, size: 70},
		"slot28": {type: "slot", x: 790, y: 270, size: 70},
		
		"infoText":{type: "text", x: 370, y:30 , text: "Connection: Disk Drive >> Item Disk", height: 30 , width:400, font:{color:android.graphics.Color.rgb(0, 0,0), size:18, shadow:0.1}},
	}
});




// file: common/item/Reactor_uranium.js

Translation.addTranslation("Fuel Rod (Uranium)", {
	ru: "Топливный стержень (Уран)"
});
Translation.addTranslation("Dual Fuel Rod (Uranium)", {
	ru: "Двойной топливный стержень (Уран)"
});
Translation.addTranslation("Quard Fuel Rod (Uranium)", {
	ru: "Счетверенный топливный стержень (Уран)"
});

Translation.addTranslation("Fuel Rod (Depleted Uranium)", {
	ru: "Топливный стержень (Обеднённый уран)"
});
Translation.addTranslation("Dual Fuel Rod (Depleted Uranium)", {
	ru: "Двойной топливный стержень (Обеднённый уран)"
});
Translation.addTranslation("Quard Fuel Rod (Depleted Uranium)", {
	ru: "Счетверенный топливный стержень (Обеднённый уран)"
});

IDRegistry.genItemID("rodUranium");
IDRegistry.genItemID("rodUraniumDual");
IDRegistry.genItemID("rodUraniumQuard");

IDRegistry.genItemID("rodUraniumDepleted");
IDRegistry.genItemID("rodUraniumDepletedDual");
IDRegistry.genItemID("rodUraniumDepletedQuard");

Item.createItem("rodUranium", "Fuel Rod (Uranium)", { name: "rod_uranium", meta: 0 });
Item.createItem("rodUraniumDual", "Dual Fuel Rod (Uranium)", { name: "rod_uranium", meta: 1 });
Item.createItem("rodUraniumQuard", "Quard Fuel Rod (Uranium)", { name: "rod_uranium", meta: 2 });

Item.createItem("rodUraniumDepleted", "Fuel Rod (Depleted Uranium)", { name: "rod_uranium_depleted", meta: 0 });
Item.createItem("rodUraniumDepletedDual", "Dual Fuel Rod (Depleted Uranium)", { name: "rod_uranium_depleted", meta: 1 });
Item.createItem("rodUraniumDepletedQuard", "Quard Fuel Rod (Depleted Uranium)", { name: "rod_uranium_depleted", meta: 2 });

Recipes.addShaped({ id: ItemID.rodUranium, count: 1, data: 0 }, [
	"bab"
],[
	'a', ItemID.uranium, 0,
	'b', 265, 0
]);
Recipes.addShaped({ id: ItemID.rodUraniumDual, count: 1, data: 0 }, [
	"bab"
],[
	'a', 265, 0,
	'b', ItemID.rodUranium, 0
]);
Recipes.addShaped({ id: ItemID.rodUraniumQuard, count: 1, data: 0 }, [
	"bab"
],[
	'a', 265, 0,
	'b', ItemID.rodUraniumDual, 0
]);

Item.setMaxDamage(ItemID.rodUranium, 100000);
Item.setMaxDamage(ItemID.rodUraniumDual, 200000);
Item.setMaxDamage(ItemID.rodUraniumQuard, 400000);

Item.setMaxDamage(ItemID.rodUraniumDepleted, 100000);
Item.setMaxDamage(ItemID.rodUraniumDepletedDual, 200000);
Item.setMaxDamage(ItemID.rodUraniumDepletedQuard, 400000);

FactAPI.Reactor.registerFuel(ItemID.rodUranium,1,ItemID.rodUraniumDepleted);
FactAPI.Reactor.registerFuel(ItemID.rodUraniumDual,2,ItemID.rodUraniumDualDepleted);
FactAPI.Reactor.registerFuel(ItemID.rodUraniumQuard,4,ItemID.rodUraniumQuardDepleted);

FactAPI.Reactor.registerRadFuel(ItemID.rodUranium,0,40000);
FactAPI.Reactor.registerRadFuel(ItemID.rodUraniumDual,0,80000);
FactAPI.Reactor.registerRadFuel(ItemID.rodUraniumQuard,0,16000);




// file: common/item/Reactor_coolant.js

Translation.addTranslation("Coolant Rod 10K", {
	ru: "Охлаждающий стержень 10К"
});
Translation.addTranslation("Coolant Rod 30K", {
	ru: "Охлаждающий стержень 30К"
});
Translation.addTranslation("Coolant Rod 60K", {
	ru: "Охлаждающий стержень 60К"
});

IDRegistry.genItemID("rodCoolant");
IDRegistry.genItemID("rodCoolantDual");
IDRegistry.genItemID("rodCoolantQuard");

Item.createItem("rodCoolant", "Coolant Rod 10K", { name: "rod_coolant", meta: 0 });
Item.createItem("rodCoolantDual", "Coolant Rod 30K", { name: "rod_coolant", meta: 1 });
Item.createItem("rodCoolantQuard", "Coolant Rod 60K", { name: "rod_coolant", meta: 2 });

Item.setMaxDamage(ItemID.rodCoolant, 100000);
Item.setMaxDamage(ItemID.rodCoolantDual, 300000);
Item.setMaxDamage(ItemID.rodCoolantQuard, 600000);

FactAPI.Reactor.isCoolant(ItemID.rodCoolant,1,true);
FactAPI.Reactor.isCoolant(ItemID.rodCoolantDual,3,true);
FactAPI.Reactor.isCoolant(ItemID.rodCoolantQuard,6,true);

Recipes.addShaped({ id: ItemID.rodCoolant, count: 1, data: 0 }, [
	"bab"
],[
	'a', 351, 4,
	'b', 265, 0
]);
Recipes.addShaped({ id: ItemID.rodCoolantDual, count: 1, data: 0 }, [
	"bab"
],[
	'b', ItemID.rodCoolant, 0,
	'a', 265, 0
]);
Recipes.addShaped({ id: ItemID.rodCoolantQuard, count: 1, data: 0 }, [
	"bab"
],[
	'b', ItemID.rodCoolantDual, 0,
	'a', 265, 0
]);




// file: common/item/Reactor_circuit.js

Translation.addTranslation("Circuit Cooling", {
	ru: "Охлаждающий контур"
});
Translation.addTranslation("Circuit Heating", {
	ru: "Нагревательный контур"
});

IDRegistry.genItemID("circuitCooling");
IDRegistry.genItemID("circuitHeating");

Item.createItem("circuitCooling", "Circuit Cooling", { name: "circuit_cooling", meta: 0 });
Item.createItem("circuitHeating", "Circuit Heating", { name: "circuit_heating", meta: 0 });

Recipes.addShaped({ id: ItemID.circuitCooling, count: 1, data: 0 }, [
	"bbb",
	"aba"
],[
	'a', 351, 4,
	'b', 265, 0
]);
Recipes.addShaped({ id: ItemID.circuitHeating, count: 1, data: 0 }, [
	"bab",
	"aba",
	"bab"
],[
	'a', 351, 4,
	'b', 265, 0
]);




// file: common/item/Reactor_vent.js

Translation.addTranslation("Cooling Vent", {
	ru: "Теплоотвод"
});
Translation.addTranslation("Advanced Cooling Vent", {
	ru: "Улучшенный теплоотвод"
});

IDRegistry.genItemID("ventCooling");
IDRegistry.genItemID("ventCoolingAdvanced");

Item.createItem("ventCooling", "Cooling Vent", { name: "cooling_vent", meta: 0 });
Item.createItem("ventCoolingAdvanced", "Advanced Cooling Vent", { name: "cooling_vent", meta: 1 });

Recipes.addShaped({ id: ItemID.ventCooling, count: 1, data: 0 }, [
	"cbc",
	"bab",
	"cbc"
],[
	'a', 351, 4,
	'b', 265, 0,
	'c', 101, 0
]);
Recipes.addShaped({ id: ItemID.ventCoolingAdvanced, count: 1, data: 0 }, [
	"aba",
	"aca",
	"aba"
],[
	'b', ItemID.ventCooling, 0,
	'c', 264, 0,
	'a', 101, 0
]);




// file: common/block/Frame.js

IDRegistry.genBlockID("fcFrame");
Block.createBlock("fcFrame", [
	{
		name:"Frame",
		texture: [
			["frame",0]
		],
		inCreative: false
	}
]);

FactAPI.render.setupWireasRender(BlockID.fcFrame,0.5,[{name:"frame",add:true}])
Block.registerDropFunction("fcFrame", function(){
	return [];
});




// file: common/block/Cores.js

Translation.addTranslation("Wooden Machine Block", {
	ru: "Деревянный машинный блок"
});
Translation.addTranslation("Stone Machine Block", {
	ru: "Каменный машинный блок"
});
Translation.addTranslation("Iron Machine Block", {
	ru: "Железный машинный блок"
});

IDRegistry.genBlockID("blockMachineWooden");
IDRegistry.genBlockID("blockMachineStone");
IDRegistry.genBlockID("blockMachineIron");

var ironcore_texture={
	side:"block_machine_iron",
}

if(Options.theme){
	ironcore_texture.side="light_iron_machine";
}

Block.createBlock("blockMachineWooden", [{name: "Wooden Machine Block", texture: [["block_machine_wooden", 0]], inCreative: true}],"opaque");
Block.createBlock("blockMachineStone", [{name: "Stone Machine Block", texture: [["block_machine_stone", 0]], inCreative: true}],"opaque");
Block.createBlock("blockMachineIron", [{name: "Iron Machine Block", texture: [[ironcore_texture.side,0]], inCreative: true}],"opaque");

Recipes.addShaped({id: BlockID.blockMachineWooden, count: 1, data: 0}, [
	"xax",
	"aba",
	"xax"
],[
	'a',ItemID.gearWooden,0,
	'b',280,0,
	'x',5,-1
]);
Recipes.addShaped({id: BlockID.blockMachineStone, count: 1, data: 0}, [
	"xax",
	"aba",
	"xax"
],[
	'a',ItemID.gearStone,0,
	'b',331,0,
	'x',4,0
]);
Recipes.addShaped({id: BlockID.blockMachineIron, count: 1, data: 0}, [
	"xax",
    "aba",
	"xax"
],[
	'a',ItemID.gearIron,0,
	'b',331,0,
	'x',265,0
]);




// file: common/block/Cable.js

Translation.addTranslation("Energy Cable", {ru: "Энергетический кабель"});
Translation.addTranslation("ME Cable", {ru: "МЭ кабель"});
Translation.addTranslation("Iron Cable", {ru: "Железный кабель"});

IDRegistry.genBlockID("energy_cable");
IDRegistry.genBlockID("me_cable");
IDRegistry.genBlockID("iron_cable");

Block.createBlock("energy_cable", [
	{name: "Energy Cable", texture: [["energy_cable", 0]], inCreative: true}
]);
Block.createBlock("me_cable", [
	{name: "ME Cable", texture: [["net_cable", 0]], inCreative: true}
]);
Block.createBlock("iron_cable", [
	{name: "Iron Cable", texture: [["iron_block", 0]], inCreative: true}
]);

FactAPI.render.setupWireasRender(BlockID.energy_cable, 3/8,[
	{name:"ic-wire", add:true},
	{name:"rf-wire", add:true},
	{name:"bt-wire",add:true}]);
FactAPI.render.setupWireasRender(BlockID.me_cable, 6/16,[
	{name:"me-wire", add:true}]);
	
FactAPI.render.setupHCable(BlockID.iron_cable, 4/8,[
	{name:"iron-wire", add:true}]);

EU.registerWire(BlockID.energy_cable);
RF.registerWire(BlockID.energy_cable);
BT.registerWire(BlockID.energy_cable);

AE.registerWire(BlockID.me_cable);
	
Recipes.addShaped({id: BlockID.energy_cable, count: 2, data: 0}, [
	"aba"
], ['a',331,0,'b',265,0]);
Recipes.addShaped({id: BlockID.me_cable, count: 4, data: 0}, [
	"aba"
], ['a',ItemID.crystalFluix,0,'b',20,0]);
Recipes.addShaped({id: BlockID.iron_cable, count: 2, data: 0}, [
	"aba"
], ['a',265,0,'b',331,0]);




// file: common/block/Ore.js

Translation.addTranslation("Uranium Ore", {ru: "Урановая руда"});

IDRegistry.genBlockID("oreUranium");
Block.createBlock("oreUranium", [
	{name: "Uranium Ore", texture: [["ore_uranium", 0]], inCreative: true}
], "opaque");
ToolAPI.registerBlockMaterial(BlockID.oreUranium, "stone", 3, true);
Block.setDestroyTime(BlockID.oreUranium, 3);
Block.registerDropFunction(BlockID.oreUranium, function(coords, blockID, blockData, level, enchant){
	if(level > 2){
		return [[ItemID.uranium, 1, 0]];
	}
	return [];
}, 2);

Callback.addCallback("GenerateChunk", function(chunkX, chunkZ){
	for(var i = 0; i < 10; i++){
		var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 3, 50);
		GenerationUtils.generateOre(coords.x, coords.y, coords.z, BlockID.oreUranium, 0, 8);
	}
});




// file: common/block/Reinforced.js

Block.createSpecialType({
	base: 1,
	solid: true,
	destroytime: 5,
	explosionres: 30,
	opaque: false,
	lightopacity: 0,
	renderlayer: 3,
}, "reinforced_block");

Translation.addTranslation("Reinforced Stone", {ru: "Укреплённый камень"});

IDRegistry.genBlockID("reinforcedStone");
Block.createBlock("reinforcedStone", [
	{name: "Reinforced Stone", texture: [["reinforced_block", 0]], inCreative: true}
], "reinforced_block");
ToolAPI.registerBlockMaterial(BlockID.reinforcedStone, "stone", 2, true);
Block.setDestroyLevel("reinforcedStone", 2);

Recipes.addShaped({id: BlockID.reinforcedStone, count: 1, data: 0}, [
	"bab",
	"aba",
	"bab"
],[
	'a',1,0,
	'b',265,0
]);




// file: common/block/Blocks.js

Translation.addTranslation("Energy Reel", {ru: "Энергокатушка"});
Translation.addTranslation("Reactor Controller", {ru: "Контроллер реактора"});

IDRegistry.genBlockID("energy_reel");
IDRegistry.genBlockID("blockReactorController");

Block.createBlockWithRotation("energy_reel", [
	{name: "Energy Reel", texture: [
		["block_machine_iron",0],["block_machine_iron", 0],
		["block_energy_reel",0],["block_energy_reel",0],
		["block_energy_reel",1],["block_energy_reel",1]
	], inCreative: true}
]);
Block.createBlock("blockReactorController", [
	{name: "Reactor Controller", texture: [
		["block_machine_iron",0],["block_machine_iron", 0],
		["block_energy_reactor",0],["block_energy_reactor",0],
		["block_energy_reactor",0],["block_energy_reactor",0]
	], inCreative: true}
],"opaque");

Recipes.addShaped({id: BlockID.energy_reel, count: 1, data: 0}, [
	"bbb",
	"#a#",
	"bbb"
], ['a', BlockID.blockMachineIron,0,'b',265,0,'c',331,0]);

Recipes.addShaped({id: BlockID.blockReactorController, count: 1, data: 0}, [
	"bab",
	"b#b",
	"b#b"
], ['a', BlockID.blockMachineIron,0,'b',263,-1]);


Block.setBlockShape(BlockID.energy_reel, {
	x: 1/16,
	y: 1/16,
	z: 0
},{
	x: 15/16,
	y: 15/16,
	z: 1
},0);
Block.setBlockShape(BlockID.energy_reel, {
	x: 1/16,
	y: 1/16,
	z: 0
},{
	x: 15/16,
	y: 15/16,
	z: 1
},1);
Block.setBlockShape(BlockID.energy_reel, {
	x: 0/16,
	y: 1/16,
	z: 1/16
},{
	x: 16/16,
	y: 15/16,
	z: 15/16
},2);
Block.setBlockShape(BlockID.energy_reel, {
	x: 0/16,
	y: 1/16,
	z: 1/16
},{
	x: 16/16,
	y: 15/16,
	z: 15/16
},3);




// file: common/tile/FishingNet.js

Translation.addTranslation("Fishing Net", {
	ru: "Рыболовная сеть"
});

IDRegistry.genBlockID("fishingnet");
Block.createBlock("fishingnet", [{name:"Fishing Net", texture:[["fishingnet",0]], inCreative: true}]);

Recipes.addShaped({id: BlockID.fishingnet, count: 1, data: 0}, [
	"a a",
	" a ",
	"a a"
], ['a', 287,0]);
	
Block.setBlockShape(BlockID.fishingnet, {x: 0, y: 0, z: 0}, {x: 1, y: 1/8,z: 1});

Callback.addCallback("ItemUse",function(c,i,b){
	if(b.id==BlockID.fishingnet){
		var id =World.getBlockID(c.x,c.y-1,c.z);
		if(Math.random()<0.03&&(id==8||id==9)){
			World.drop(c.x+0.5, c.y+1, c.z+0.5, 349, 1, Random.integer(0,3));
		}
	}
});




// file: common/tile/mechanic/Mechanic_hoe.js

Translation.addTranslation("Mechanic Hoe", {
	ru: "Механический плуг"
});

IDRegistry.genBlockID("machineMechanicHoe");

Block.createBlockWithRotation("machineMechanicHoe", [{
	name: "Mechanic Hoe",
	texture: [
		["block_machine_wooden", 0],
		["block_machine_wooden", 0],
		["block_machine_wooden", 0],
		["block_mechanic_hoe", 0],
		["block_machine_wooden", 0],
		["block_machine_wooden", 0]
	],
	inCreative: true
}], "opaque");

Recipes.addShaped({
	id: BlockID.machineMechanicHoe,
	count: 1,
	data: 0
}, [
	"a",
	"x"
	], [
		'a', 294, 0,
		'x', BlockID.blockMachineWooden, 0
]);

var UI_mechanic_hoe = new UI.StandartWindow({
	standart: {
		header: {
			text: {
				text: "Mechanic Hoe/Механический плуг"
			},
		},
		minHeight: 700,
		inventory: {
			standart: true
		},
		background: {
			standart: true
		}
	},
	params: {
		slot: "slotFactory",
		invSlot: "slotFactory",
		selection: "selectionFactory"
	},
	drawing: [
		{
			type: "bitmap",
			x: 0,
			y: 0,
			bitmap: "gui_ground",
			scale: 8
		},
		{
			type: "bitmap",
			x: 585,
			y: 130,
			bitmap: "progressbar.ground",
			scale: 5
		},
		{
			type: "bitmap",
			x: 490,
			y: 130,
			bitmap: "gear",
			scale: 5
		}
	],
	elements: {
		"progressScale": {
			type: "scale",
			x: 585,
			y: 130,
			direction: 0,
			scale: 5,
			bitmap: "progressbar.scale"
		},
		"slotU1": {	type: "slot", x: 400, y: 250, size: 70},
		"slotU2": { type: "slot", x: 470, y: 250, size: 70},
		"slotU3": { type: "slot", x: 540, y: 250, size: 70},
		"slotU4": {	type: "slot", x: 610, y: 250, size: 70},
		"slotU5": {	type: "slot", x: 680, y: 250, size: 70},
		"slotU6": {	type: "slot", x: 750, y: 250, size: 70},
		"slotU7": { type: "slot", x: 820, y: 250, size: 70},
	}
});

FactAPI.machine.registerTile(BlockID.machineMechanicHoe,{
	defaultValues: {
		progress:0,
		active:false
	},
	getConfig:function(){
		return {
			time: 100
		}
	},
	getGuiScreen: function(){
		return UI_mechanic_hoe;
	},
	click:function(){
		var item = Player.getCarriedItem();
		this._getGuiScreen?this.getGuiScreen=this._getGuiScreen:null;
		
		if(ItemDictionary.isItemInCathegory(item.id,"wrench")){
			this.data.active=!this.data.active;
			this._getGuiScreen = this.getGuiScreen
			this.getGuiScreen=function(){return null};
			return 
		}
	},
	tick:function(){
		var cfg = this.getConfig();
		
		if(!this.data.active)return
		
		this.container.setScale("progressScale", this.data.progress/cfg.time);
		
		this.data.modY=0;
		this.data.modTime=0;
		
		var updates={
			293:{timer:0.5}
		};
		updates[ItemID.gearIron]={timer:0.1}
		updates[ItemID.gearGolden]={timer:0.2,height:2}
		updates[ItemID.gearDiamond]={timer:0.4,height:4}
		
		for(var i=1;i<=7;i++){
			slotU=this.container.getSlot("slotU"+i);
			if(updates[slotU.id]){
				if(updates[slotU.id].timer){
					this.data.modTime+=updates[slotU.id].timer;
				}
				if(updates[slotU.id].height){
					this.data.modY+=updates[slotU.id].height;
				}
			}
		}
		
		var add = 1+this.data.modTime;
		this.data.progress+=add;
		
		if(this.data.progress>=cfg.time){
			this.MechanicDeploy();
			this.data.progress=0;
		}
	},
	
	MechanicDeploy: function(){
		for(var x=0;x<9;x++){
			for(var z=0;z<9;z++){
				for(var y=10+(this.data.modY/2);y>-10-(this.data.modY/2);y--){
					if(World.getBlockID(this.x-4+x,this.y+y,this.z-4+z)==2&&World.getBlockID(this.x-4+x,this.y+y+1,this.z-4+z)==0){
						World.setBlock(this.x-4+x,this.y+y,this.z-4+z,60);
						this.data.progress=0;
						return
					}
					if(World.getBlockID(this.x-4+x,this.y+y,this.z-4+z)==3&&World.getBlockID(this.x-4+x,this.y+y+1,this.z-4+z)==0){
						World.setBlock(this.x-4+x,this.y+y,this.z-4+z,60);
						this.data.progress=0;
						return
					}
				}
			}
		}
	}
});




// file: common/tile/mechanic/Mechanic_quarry.js

Translation.addTranslation("Mechanic Quarry", {
	ru: "Механический карьер"
});

IDRegistry.genBlockID("machineMechanicQuarry");
Block.createBlockWithRotation("machineMechanicQuarry", [
    {name:"Mechanic Quarry", texture: [
	["block_machine_wooden",0],["block_machine_wooden", 0],
    ["block_machine_wooden",0],["block_mechanic_quarry",0],
	["block_machine_wooden",0],["block_machine_wooden",0]
		 ], inCreative: true}
],"opaque");


    Recipes.addShaped({id: BlockID.machineMechanicQuarry, count: 1, data: 0}, [
		"a","x"
	],[
		'a', 274, 0,
		'x', BlockID.blockMachineWooden, 0
	]);



var UI_mechanic_quarry = new UI.StandartWindow({
	standart: {
		header: {
			text: {
				text:"Mechanic Quarry/Механический карьер"
			}
		},
		minHeight: 700,
		inventory: {standart: true},
		background: {standart: true}
	},		
	drawing: [
		{type: "bitmap", x: 0, y: 0, bitmap: "gui_ground", scale: 8},
		{type: "bitmap", x: 585, y: 350, bitmap: "progressbar.ground", scale: 5},
		{type: "bitmap", x: 490, y: 345, bitmap: "gear", scale: 5}
	],
	params: { 
		slot: "slotFactory", 
		invSlot: "slotFactory", 	
		selection: "selectionFactory"
	},
	elements: {
		"slot1": {type: "slot", x: 400, y: 60, size: 70},
		"slot2": {type: "slot", x: 470, y: 60, size: 70},
		"slot3": {type: "slot", x: 540, y: 60, size: 70},
		"slot4": {type: "slot", x: 610, y: 60, size: 70},
		"slot5": {type: "slot", x: 680, y: 60, size: 70},
		"slot6": {type: "slot", x: 750, y: 60, size: 70},
		"slot7": {type: "slot", x: 820, y: 60, size: 70},
		"slot8": {type: "slot", x: 400, y: 130, size: 70},
		"slot9": {type: "slot", x: 470, y: 130, size: 70},
		"slot10": {type: "slot", x: 540, y: 130, size: 70},
		"slot11": {type: "slot", x: 610, y: 130, size: 70},
		"slot12": {type: "slot", x: 680, y: 130, size: 70},
		"slot13": {type: "slot", x: 750, y: 130, size: 70},
		"slot14": {type: "slot", x: 820, y: 130, size: 70},
		"slot15": {type: "slot", x: 400, y: 200, size: 70},
		"slot16": {type: "slot", x: 470, y: 200, size: 70},
		"slot17": {type: "slot", x: 540, y: 200, size: 70},
		"slot18": {type: "slot", x: 610, y: 200, size: 70},
		"slot19": {type: "slot", x: 680, y: 200, size: 70},
		"slot20": {type: "slot", x: 750, y: 200, size: 70},
		"slot21": {type: "slot", x: 820, y: 200, size: 70},
		"slot22": {type: "slot", x: 400, y: 270, size: 70},
		"slot23": {type: "slot", x: 470, y: 270, size: 70},
		"slot24": {type: "slot", x: 540, y: 270, size: 70},
		"slot25": {type: "slot", x: 610, y: 270, size: 70},
		"slot26": {type: "slot", x: 680, y: 270, size: 70},
		"slot27": {type: "slot", x: 750, y: 270, size: 70},
		"slot28": {type: "slot", x: 820, y: 270, size: 70},
		"progressScale": {type: "scale", x: 585, y: 350, direction: 0, scale: 5, bitmap: "progressbar.scale"},
		"slotU1": {type: "slot", x: 400, y: 430, size: 70},
		"slotU2": {type: "slot", x: 470, y: 430, size: 70},
		"slotU3": {type: "slot", x: 540, y: 430, size: 70},
		"slotU4": {type: "slot", x: 610, y: 430, size: 70},
		"slotU5": {type: "slot", x: 680, y: 430, size: 70},
		"slotU6": {type: "slot", x: 750, y: 430, size: 70},
		"slotU7": {type: "slot", x: 820, y: 430, size: 70},
	}
});

FactAPI.machine.registerTile(BlockID.machineMechanicQuarry,{
	defaultValues: {
		progress:0,
		active:false
	},
	getConfig:function(){
		return {
			time: 100
		}
	},
	getGuiScreen: function(){
		return UI_mechanic_quarry;
	},
	putChest: function(item){
		var a=FactAPI.machineContainer.addItemToContainer(this.container,item);
		if(a)World.drop(this.x+0.5, this.y+1, this.z+0.5, item.id, a, item.data);
	},
	getTransportSlots: function () {
		var slotOut=[];
		for(var i=1;i<=28;i++){
			slotOut.push("slot"+i);
		}
		return {input: [], output:slotOut};
	},
	click:function(){
		var item = Player.getCarriedItem();
		this._getGuiScreen?this.getGuiScreen=this._getGuiScreen:null;
		
		if(ItemDictionary.isItemInCathegory(item.id,"wrench")){
			this.data.active=!this.data.active;
			this._getGuiScreen = this.getGuiScreen
			this.getGuiScreen=function(){return null};
			return 
		}
	},
	tick:function(){
		var cfg = this.getConfig();
		
		if(!this.data.active)return
		
		this.container.setScale("progressScale", this.data.progress/cfg.time);
		
		this.data.modY=0;
		this.data.modTime=0;
		
		var updates={
			278:{timer:0.5}
		};
		updates[ItemID.gearIron]={timer:0.1}
		updates[ItemID.gearGolden]={timer:0.2,height:2}
		updates[ItemID.gearDiamond]={timer:0.4,height:4}
		
		for(var i=1;i<=7;i++){
			slotU=this.container.getSlot("slotU"+i);
			if(updates[slotU.id]){
				if(updates[slotU.id].timer){
					this.data.modTime+=updates[slotU.id].timer;
				}
				if(updates[slotU.id].height){
					this.data.modY+=updates[slotU.id].height;
				}
			}
		}
		
		var add = 1+this.data.modTime;
		this.data.progress+=add;
		
		if(this.data.progress>=cfg.time){
			this.MechanicDeploy();
			this.data.progress=0;
		}
	},
	
	MechanicDeploy: function(){
		if(!this.data.digX){
			this.data.digY=this.y-1;
			this.data.digX=this.x-5;
			this.data.digZ=this.z-4;
		}
		
		if(!this.data.complete){
			var range=4;
			if(this.data.digX++>this.x+range-1){
				this.data.digX=this.x-range;
				if(this.data.digZ++>this.z+range-1){
					this.data.digZ=this.z-range;
					this.data.digX=this.x-range;
					if(this.data.digY--<this.y-31-this.data.modY){
						this.data.complete=true;
					}
				}
			}
			var block=World.getBlock(this.data.digX,this.data.digY,this.data.digZ);
			if(block.id==7||block.id==8||block.id==9||block.id==10||block.id==11)return
			var coords={x:this.data.digX,y:this.data.digY,z:this.data.digZ};
			var drop=FactAPI.getBlockDrop(coords,block.id,block.data,274);
			World.destroyBlock(this.data.digX,this.data.digY,this.data.digZ);
			for(var i in drop){
				this.putChest({id:drop[i][0],count:drop[i][1],data:drop[i][2]});
			}
		}
		return
	}
},{item:true});




// file: common/tile/mechanic/Mechanic_fishfarm.js

Translation.addTranslation("Mechanic Fish Farm", {
	ru: "Механическая ферма рыбы"
});

IDRegistry.genBlockID("machineMechanicFarmFish");
Block.createBlockWithRotation("machineMechanicFarmFish", [
	{name:"Mechanic Fish Farm", texture: [
	["block_machine_wooden",0],["block_machine_wooden", 0],
	["block_machine_wooden",0],["block_mechanic_fishfarm",0],
	["block_machine_wooden",0],["block_machine_wooden",0]
		 ], inCreative: true}
],"opaque");

Recipes.addShaped({id: BlockID.machineMechanicFarmFish, count: 1, data: 0}, [
	"a","x","b"
],[
	'a', 346, 0,
	'x', BlockID.blockMachineWooden, 0,
	'b', BlockID.fishingnet,0
]);

var UI_mechanic_fishfarm = new UI.StandartWindow({
	standart: {
		header: {
			text: {
				text:"Mechanic Fish Farm/Механическая ферма рыбы"
			}
		},
		minHeight: 700,
		inventory: {standart: true},
		background: {standart: true}
	},		
	drawing: [
		{type: "bitmap", x: 0, y: 0, bitmap: "gui_ground", scale: 8},
		{type: "bitmap", x: 585, y: 350, bitmap: "progressbar.ground", scale: 5},
		{type: "bitmap", x: 490, y: 345, bitmap: "gear", scale: 5}
	],
	params: { 
		slot: "slotFactory", 
		invSlot: "slotFactory", 	
		selection: "selectionFactory"
	},
	elements: {
		"slot1": {type: "slot", x: 400, y: 60, size: 70},
		"slot2": {type: "slot", x: 470, y: 60, size: 70},
		"slot3": {type: "slot", x: 540, y: 60, size: 70},
		"slot4": {type: "slot", x: 610, y: 60, size: 70},
		"slot5": {type: "slot", x: 680, y: 60, size: 70},
		"slot6": {type: "slot", x: 750, y: 60, size: 70},
		"slot7": {type: "slot", x: 820, y: 60, size: 70},
		"slot8": {type: "slot", x: 400, y: 130, size: 70},
		"slot9": {type: "slot", x: 470, y: 130, size: 70},
		"slot10": {type: "slot", x: 540, y: 130, size: 70},
		"slot11": {type: "slot", x: 610, y: 130, size: 70},
		"slot12": {type: "slot", x: 680, y: 130, size: 70},
		"slot13": {type: "slot", x: 750, y: 130, size: 70},
		"slot14": {type: "slot", x: 820, y: 130, size: 70},
		"slot15": {type: "slot", x: 400, y: 200, size: 70},
		"slot16": {type: "slot", x: 470, y: 200, size: 70},
		"slot17": {type: "slot", x: 540, y: 200, size: 70},
		"slot18": {type: "slot", x: 610, y: 200, size: 70},
		"slot19": {type: "slot", x: 680, y: 200, size: 70},
		"slot20": {type: "slot", x: 750, y: 200, size: 70},
		"slot21": {type: "slot", x: 820, y: 200, size: 70},
		"slot22": {type: "slot", x: 400, y: 270, size: 70},
		"slot23": {type: "slot", x: 470, y: 270, size: 70},
		"slot24": {type: "slot", x: 540, y: 270, size: 70},
		"slot25": {type: "slot", x: 610, y: 270, size: 70},
		"slot26": {type: "slot", x: 680, y: 270, size: 70},
		"slot27": {type: "slot", x: 750, y: 270, size: 70},
		"slot28": {type: "slot", x: 820, y: 270, size: 70},
		"progressScale": {type: "scale", x: 585, y: 350, direction: 0, scale: 5, bitmap: "progressbar.scale"},
		"slotU1": {type: "slot", x: 400, y: 430, size: 70},
		"slotU2": {type: "slot", x: 470, y: 430, size: 70},
		"slotU3": {type: "slot", x: 540, y: 430, size: 70},
		"slotU4": {type: "slot", x: 610, y: 430, size: 70},
		"slotU5": {type: "slot", x: 680, y: 430, size: 70},
		"slotU6": {type: "slot", x: 750, y: 430, size: 70},
		"slotU7": {type: "slot", x: 820, y: 430, size: 70},
	}
});

FactAPI.machine.registerTile(BlockID.machineMechanicFarmFish,{
	defaultValues: {
		progress:0,
		active:false
	},
	getConfig:function(){
		return {
			time: 1000
		}
	},
	getGuiScreen: function(){
		return UI_mechanic_fishfarm;
	},
	putChest: function(item){
		var a=FactAPI.machineContainer.addItemToContainer(this.container,item);
		if(a)World.drop(this.x+0.5, this.y+1, this.z+0.5, item.id, a, item.data);
	},
	getTransportSlots: function () {
		var slotOut=[];
		for(var i=1;i<=28;i++){
			slotOut.push("slot"+i);
		}
		return {input: [], output:slotOut};
	},
	click:function(){
		var item = Player.getCarriedItem();
		this._getGuiScreen?this.getGuiScreen=this._getGuiScreen:null;
		
		if(ItemDictionary.isItemInCathegory(item.id,"wrench")){
			this.data.active=!this.data.active;
			this._getGuiScreen = this.getGuiScreen
			this.getGuiScreen=function(){return null};
			return 
		}
	},
	
	tick:function(){
		var cfg = this.getConfig();
		
		if(!this.data.active)return
		
		this.container.setScale("progressScale", this.data.progress/cfg.time);
		
		this.data.modY=0;
		this.data.modTime=0;
		
		var updates={
			346:{timer:0.5}
		};
		updates[ItemID.gearIron]={timer:0.1}
		updates[ItemID.gearGolden]={timer:0.2,height:2}
		updates[ItemID.gearDiamond]={timer:0.4,height:4}
		
		for(var i=1;i<=7;i++){
			slotU=this.container.getSlot("slotU"+i);
			if(updates[slotU.id]){
				if(updates[slotU.id].timer){
					this.data.modTime+=updates[slotU.id].timer;
				}
				if(updates[slotU.id].height){
					this.data.modY+=updates[slotU.id].height;
				}
			}
		}
		
		var add = 1+this.data.modTime;
		this.data.progress+=add;
		
		if(this.data.progress>=cfg.time){
			this.MechanicDeploy();
			this.data.progress=0;
		}
	},
	
	MechanicDeploy: function(){
		var count=0;
		for(var x=0;x<9;x++){
			for(var z=0;z<9;z++){
				if(World.getBlockID(this.x-4+x,this.y,this.z-4+z)==BlockID.fishingnet){
					if(Math.random()<0.03)count++;
				}
			}
		}
		if(count>0){
			this.putChest({id: 349, count: count, data:0});
		}
	}
},{item:true});




// file: common/tile/mechanic/Mechanic_reedfarm.js

Translation.addTranslation("Mechanic Reed Farm", {
	ru: "Механическая ферма тростника"
});

IDRegistry.genBlockID("machineMechanicFarmReed");
Block.createBlockWithRotation("machineMechanicFarmReed", [
	{name:"Mechanic Reed Farm", texture: [
		["block_machine_wooden",0],["block_machine_wooden", 0],
		["block_machine_wooden",0],["block_mechanic_reedfarm",0],
		["block_machine_wooden",0],["block_machine_wooden",0]
	], inCreative: true}
],"opaque");


	Recipes.addShaped({id: BlockID.machineMechanicFarmReed, count: 1, data: 0}, [
		"a","b","x"
	],[
		'a', 338, 0,
		'b', 359,0,
		'x', BlockID.blockMachineWooden, 0
	]);



var UI_mechanic_reedfarm = new UI.StandartWindow({
	standart: {
		header: {
			text: {
				text:"Mechanic Reed Farm/Механическая ферма тростника"
			}
		},
		minHeight: 700,
		inventory: {standart: true},
		background: {standart: true}
	},		
	drawing: [
		{type: "bitmap", x: 0, y: 0, bitmap: "gui_ground", scale: 8},
		{type: "bitmap", x: 585, y: 350, bitmap: "progressbar.ground", scale: 5},
		{type: "bitmap", x: 490, y: 345, bitmap: "gear", scale: 5}
	],
	params: { 
		slot: "slotFactory", 
		invSlot: "slotFactory", 	
		selection: "selectionFactory"
	},
	elements: {
		"slot1": {type: "slot", x: 400, y: 60, size: 70},
		"slot2": {type: "slot", x: 470, y: 60, size: 70},
		"slot3": {type: "slot", x: 540, y: 60, size: 70},
		"slot4": {type: "slot", x: 610, y: 60, size: 70},
		"slot5": {type: "slot", x: 680, y: 60, size: 70},
		"slot6": {type: "slot", x: 750, y: 60, size: 70},
		"slot7": {type: "slot", x: 820, y: 60, size: 70},
		"slot8": {type: "slot", x: 400, y: 130, size: 70},
		"slot9": {type: "slot", x: 470, y: 130, size: 70},
		"slot10": {type: "slot", x: 540, y: 130, size: 70},
		"slot11": {type: "slot", x: 610, y: 130, size: 70},
		"slot12": {type: "slot", x: 680, y: 130, size: 70},
		"slot13": {type: "slot", x: 750, y: 130, size: 70},
		"slot14": {type: "slot", x: 820, y: 130, size: 70},
		"slot15": {type: "slot", x: 400, y: 200, size: 70},
		"slot16": {type: "slot", x: 470, y: 200, size: 70},
		"slot17": {type: "slot", x: 540, y: 200, size: 70},
		"slot18": {type: "slot", x: 610, y: 200, size: 70},
		"slot19": {type: "slot", x: 680, y: 200, size: 70},
		"slot20": {type: "slot", x: 750, y: 200, size: 70},
		"slot21": {type: "slot", x: 820, y: 200, size: 70},
		"slot22": {type: "slot", x: 400, y: 270, size: 70},
		"slot23": {type: "slot", x: 470, y: 270, size: 70},
		"slot24": {type: "slot", x: 540, y: 270, size: 70},
		"slot25": {type: "slot", x: 610, y: 270, size: 70},
		"slot26": {type: "slot", x: 680, y: 270, size: 70},
		"slot27": {type: "slot", x: 750, y: 270, size: 70},
		"slot28": {type: "slot", x: 820, y: 270, size: 70},
		"progressScale": {type: "scale", x: 585, y: 350, direction: 0, scale: 5, bitmap: "progressbar.scale"},
		"slotU1": {type: "slot", x: 400, y: 430, size: 70},
		"slotU2": {type: "slot", x: 470, y: 430, size: 70},
		"slotU3": {type: "slot", x: 540, y: 430, size: 70},
		"slotU4": {type: "slot", x: 610, y: 430, size: 70},
		"slotU5": {type: "slot", x: 680, y: 430, size: 70},
		"slotU6": {type: "slot", x: 750, y: 430, size: 70},
		"slotU7": {type: "slot", x: 820, y: 430, size: 70},
	}
});

FactAPI.machine.registerTile(BlockID.machineMechanicFarmReed,{
	defaultValues: {
		progress:0,
		active:false
	},
	getConfig:function(){
		return {
			time: 1000
		}
	},
	getGuiScreen: function(){
		return UI_mechanic_reedfarm;
	},
	putChest: function(item){
		var a=FactAPI.machineContainer.addItemToContainer(this.container,item);
		if(a)World.drop(this.x+0.5, this.y+1, this.z+0.5, item.id, a, item.data);
	},
	getTransportSlots: function () {
		var slotOut=[];
		for(var i=1;i<=28;i++){
			slotOut.push("slot"+i);
		}
		return {input: [], output:slotOut};
	},
	click:function(){
		var item = Player.getCarriedItem();
		this._getGuiScreen?this.getGuiScreen=this._getGuiScreen:null;
		
		if(ItemDictionary.isItemInCathegory(item.id,"wrench")){
			this.data.active=!this.data.active;
			this._getGuiScreen = this.getGuiScreen
			this.getGuiScreen=function(){return null};
			return 
		}
	},
	
	tick:function(){
		var cfg = this.getConfig();
		
		if(!this.data.active)return
		
		this.container.setScale("progressScale", this.data.progress/cfg.time);
		
		this.data.modY=0;
		this.data.modTime=0;
		
		var updates={
			359:{timer:0.5}
		};
		updates[ItemID.gearIron]={timer:0.1}
		updates[ItemID.gearGolden]={timer:0.2,height:2}
		updates[ItemID.gearDiamond]={timer:0.4,height:4}
		
		for(var i=1;i<=7;i++){
			slotU=this.container.getSlot("slotU"+i);
			if(updates[slotU.id]){
				if(updates[slotU.id].timer){
					this.data.modTime+=updates[slotU.id].timer;
				}
				if(updates[slotU.id].height){
					this.data.modY+=updates[slotU.id].height;
				}
			}
		}
		
		var add = 1+this.data.modTime;
		this.data.progress+=add;
		
		if(this.data.progress>=cfg.time){
			this.MechanicDeploy();
			this.data.progress=0;
		}
	},
	
	MechanicDeploy: function(){
		var count=0;
		for(var y=5+(this.data.modY/2);y>-5-(this.data.modY/2);y--){
			for(var x=0;x<9;x++){
				for(var z=0;z<9;z++){
					var id = World.getBlockID(this.x-4+x,this.y+y,this.z-4+z);
					var id2 = World.getBlockID(this.x-4+x,this.y+y-1,this.z-4+z);
					if(id==83&&id2==83){
						count++;
						World.destroyBlock(this.x-4+x,this.y+y,this.z-4+z);
					}
				}
			}
		}
		if(count>0){
			this.putChest({id: 338, count: count, data: 0});
		}
	}
},{item:true});




// file: common/tile/mechanic/Mechanic_sawmill.js

Translation.addTranslation("Mechanic Sawmill", {
	ru: "Механическая лесопилка"
});

IDRegistry.genBlockID("machineMechanicSawmill");
Block.createBlockWithRotation("machineMechanicSawmill", [
	{name:"Mechanic Sawmill", texture: [
	["block_machine_wooden",0],["block_machine_wooden", 0],
	["block_machine_wooden",0],["block_mechanic_sawmill",0],
	["block_machine_wooden",0],["block_machine_wooden",0]
		 ], inCreative: true}
],"opaque");


	Recipes.addShaped({id: BlockID.machineMechanicSawmill, count: 1, data: 0}, [
		"a","x"
	],[
		'a', 275, 0,
		'x', BlockID.blockMachineWooden, 0
	]);



var UI_mechanic_sawmill = new UI.StandartWindow({
	standart: {
		header: {
			text: {
				text:"Mechanic Sawmill/Механическая лесопилка"
			}
		},
		minHeight: 700,
		inventory: {standart: true},
		background: {standart: true}
	},		
	drawing: [
		{type: "bitmap", x: 0, y: 0, bitmap: "gui_ground", scale: 8},
		{type: "bitmap", x: 585, y: 350, bitmap: "progressbar.ground", scale: 5},
		{type: "bitmap", x: 490, y: 345, bitmap: "gear", scale: 5}
	],
	params: { 
		slot: "slotFactory", 
		invSlot: "slotFactory", 	
		selection: "selectionFactory"
	},
	elements: {
		"slot1": {type: "slot", x: 400, y: 60, size: 70},
		"slot2": {type: "slot", x: 470, y: 60, size: 70},
		"slot3": {type: "slot", x: 540, y: 60, size: 70},
		"slot4": {type: "slot", x: 610, y: 60, size: 70},
		"slot5": {type: "slot", x: 680, y: 60, size: 70},
		"slot6": {type: "slot", x: 750, y: 60, size: 70},
		"slot7": {type: "slot", x: 820, y: 60, size: 70},
		"slot8": {type: "slot", x: 400, y: 130, size: 70},
		"slot9": {type: "slot", x: 470, y: 130, size: 70},
		"slot10": {type: "slot", x: 540, y: 130, size: 70},
		"slot11": {type: "slot", x: 610, y: 130, size: 70},
		"slot12": {type: "slot", x: 680, y: 130, size: 70},
		"slot13": {type: "slot", x: 750, y: 130, size: 70},
		"slot14": {type: "slot", x: 820, y: 130, size: 70},
		"slot15": {type: "slot", x: 400, y: 200, size: 70},
		"slot16": {type: "slot", x: 470, y: 200, size: 70},
		"slot17": {type: "slot", x: 540, y: 200, size: 70},
		"slot18": {type: "slot", x: 610, y: 200, size: 70},
		"slot19": {type: "slot", x: 680, y: 200, size: 70},
		"slot20": {type: "slot", x: 750, y: 200, size: 70},
		"slot21": {type: "slot", x: 820, y: 200, size: 70},
		"slot22": {type: "slot", x: 400, y: 270, size: 70},
		"slot23": {type: "slot", x: 470, y: 270, size: 70},
		"slot24": {type: "slot", x: 540, y: 270, size: 70},
		"slot25": {type: "slot", x: 610, y: 270, size: 70},
		"slot26": {type: "slot", x: 680, y: 270, size: 70},
		"slot27": {type: "slot", x: 750, y: 270, size: 70},
		"slot28": {type: "slot", x: 820, y: 270, size: 70},
		"progressScale": {type: "scale", x: 585, y: 350, direction: 0, scale: 5, bitmap: "progressbar.scale"},
		"slotU1": {type: "slot", x: 400, y: 430, size: 70},
		"slotU2": {type: "slot", x: 470, y: 430, size: 70},
		"slotU3": {type: "slot", x: 540, y: 430, size: 70},
		"slotU4": {type: "slot", x: 610, y: 430, size: 70},
		"slotU5": {type: "slot", x: 680, y: 430, size: 70},
		"slotU6": {type: "slot", x: 750, y: 430, size: 70},
		"slotU7": {type: "slot", x: 820, y: 430, size: 70},
	}
});

FactAPI.machine.registerTile(BlockID.machineMechanicSawmill,{
	defaultValues: {
		progress:0,
		active:false
	},
	getConfig:function(){
		return {
			time: 100
		}
	},
	getGuiScreen: function(){
		return UI_mechanic_sawmill;
	},
	putChest: function(item){
		var a=FactAPI.machineContainer.addItemToContainer(this.container,item);
		if(a)World.drop(this.x+0.5, this.y+1, this.z+0.5, item.id, a, item.data);
	},
	getTransportSlots: function () {
		var slotOut=[];
		for(var i=1;i<=28;i++){
			slotOut.push("slot"+i);
		}
		return {input: [], output:slotOut};
	},
	click:function(){
		var item = Player.getCarriedItem();
		this._getGuiScreen?this.getGuiScreen=this._getGuiScreen:null;
		
		if(ItemDictionary.isItemInCathegory(item.id,"wrench")){
			this.data.active=!this.data.active;
			this._getGuiScreen = this.getGuiScreen
			this.getGuiScreen=function(){return null};
			return 
		}
	},
	
	tick:function(){
		var cfg = this.getConfig();
		
		if(!this.data.active)return
		
		this.container.setScale("progressScale", this.data.progress/cfg.time);
		
		this.data.modY=0;
		this.data.modTime=0;
		
		var updates={
			279:{timer:0.5}
		};
		updates[ItemID.gearIron]={timer:0.1}
		updates[ItemID.gearGolden]={timer:0.2,height:2}
		updates[ItemID.gearDiamond]={timer:0.4,height:4}
		
		for(var i=1;i<=7;i++){
			slotU=this.container.getSlot("slotU"+i);
			if(updates[slotU.id]){
				if(updates[slotU.id].timer){
					this.data.modTime+=updates[slotU.id].timer;
				}
				if(updates[slotU.id].height){
					this.data.modY+=updates[slotU.id].height;
				}
			}
		}
		
		var add = 1+this.data.modTime;
		this.data.progress+=add;
		
		if(this.data.progress>=cfg.time){
			this.MechanicDeploy();
			this.data.progress=0;
		}
	},
	
	MechanicDeploy: function(){
		for (var y = 0 - (this.data.modY / 2); y < 10 + (this.data.modY / 2); y++) {
			for (var x = 0; x < 9; x++) {
				for (var z = 0; z < 9; z++) {
					var block = World.getBlock(this.x - 4 + x, this.y + y, this.z - 4 + z);
					if (ItemDictionary.isItemInCathegory(block.id,"wood")||ItemDictionary.isItemInCathegory(block.id,"leaves")) {
						var drop = FactAPI.getBlockDrop({ x: this.x - 4 + x, y: this.y + y, z: this.z - 4 + z }, block.id, block.data, 359);
						for (var i in drop) {
							this.putChest({ id: drop[i][0], count: drop[i][1], data: drop[i][2] });
						}
						World.destroyBlock(this.x - 4 + x, this.y + y, this.z - 4 + z);
						return
					}
				}
			}
		}
	}
},{item:true});

ItemDictionary.setItemCathegory(17, "wood");
ItemDictionary.setItemCathegory(162, "wood");
ItemDictionary.setItemCathegory(18,"leaves");
ItemDictionary.setItemCathegory(161,"leaves");




// file: common/tile/mechanic/Mechanic_waterpump.js

Translation.addTranslation("Mechanic Water Pump", {
	ru: "Механическая водяная помпа"
});

IDRegistry.genBlockID("machineMechanicPumpWater");
Block.createBlockWithRotation("machineMechanicPumpWater", [
	{name:"Mechanic Water Pump", texture: [
		["block_machine_wooden",0],["block_machine_wooden", 0],
		["block_machine_wooden",0],["block_mechanic_waterpump",0],
		["block_machine_wooden",0],["block_machine_wooden",0]
	], inCreative: true}
],"opaque");


	Recipes.addShaped({id: BlockID.machineMechanicPumpWater, count: 1, data: 0}, [
		"a","x","a"
	],[
		'a', 325, 0,
		'x', BlockID.blockMachineWooden, 0
	]);

	

var UI_mechanic_waterpump= new UI.StandartWindow({
	standart: {	
		header: {
			text: {
				text: "Mechanic Water Pump/Механическая водяная помпа"
			},
		},
		minHeight: 700,
		inventory: {
			standart: true
		},
		background: {
			standart: true
		}
	},
	drawing: [
		{ type: "bitmap", x: 0, y: 0, bitmap: "gui_ground", scale: 8 },
		{ type: "bitmap", x: 350, y: 50, bitmap: "liquid.ground", scale: 2.6 },
		{ type: "bitmap", x: 685, y: 150, bitmap: "progressbar.ground", scale: 5 },
	],
	params: {
		slot: "slotFactory",
		invSlot: "slotFactory",
		selectionFactoryon: "selectionFactory"
	},
	elements: {
		"slotSource": { type: "slot", x: 545, y: 135, size: 100 },
		"slotResult": { type: "slot", x: 835, y: 135, size: 100 },
		"progressScale": { type: "scale", x: 685, y: 150, direction: 0, scale: 5, bitmap: "progressbar.ground" },
		"waterScale": { type: "scale", x: 350, y: 50, direction: 1, scale: 2.6, bitmap: "liquid.water" }
	}
});

FactAPI.machine.registerTile(BlockID.machineMechanicPumpWater,{
	defaultValues: {
		progress:0,
		active:false
	},
	getConfig:function(){
		return {
			time: 100,
			storage: 16
		}
	},
	init:function(){
		this.liquidStorage.setLimit("water",this.getConfig().storage);
	},
	getGuiScreen: function(){
		return UI_mechanic_waterpump;
	},
	getTransportSlots:function(){
		return {input:["slotSource"],output:["slotResult"]}
	},
	click:function(){
		var item = Player.getCarriedItem();
		this._getGuiScreen?this.getGuiScreen=this._getGuiScreen:null;
		
		if(ItemDictionary.isItemInCathegory(item.id,"wrench")){
			this.data.active=!this.data.active;
			this._getGuiScreen = this.getGuiScreen
			this.getGuiScreen=function(){return null};
			return 
		}
	},
	tick:function(){
		this.data.progress?null:this.data.progress=0;
		var cfg = this.getConfig();
		
		if(!this.data.active)return
		
		this.container.setScale("progressScale", this.data.progress/cfg.time);
		this.container.setScale("waterScale",this.liquidStorage.getAmount("water")/cfg.storage);
		
		if(World.getThreadTime()%cfg.time==0){
			this.MechanicDeploy();
		}
	},
	
	MechanicDeploy:function(){
		var tile=World.getBlock(this.x,this.y-1,this.z);
		if((tile.id==8||tile.id==9)&&tile.data==0&&this.liquidStorage.getAmount("water")<=this.getConfig().storage-1){
			World.setBlock(this.x,this.y-1,this.z,0,0);
			this.liquidStorage.addLiquid("water",1);
		}
		var liqStor=World.getTileEntity(this.x,this.y-1,this.z);
		if(liqStor&&this.liquidStorage.getAmount("water")<=this.getConfig().storage-1){
			if(liqStor.liquidStorage.getAmount("water")>=1){
				var got=liqStor.liquidStorage.getLiquid("water",1);
				this.liquidStorage.addLiquid("water",1);
			}
		}
		var sourceSlot=this.container.getSlot("slotSource");
		var resultSlot=this.container.getSlot("slotResult");
		if((sourceSlot.id==325&&sourceSlot.data==0)&&this.liquidStorage.getAmount("water")>=1&&((resultSlot.id==325&&resultSlot.data==8&&resultSlot.count<64)||resultSlot.id==0)){
			sourceSlot.count--;
			resultSlot.id=325;
			resultSlot.data=8;
			resultSlot.count++;
			this.liquidStorage.getLiquid("water",1);
			this.container.validateAll();
		}
	},
	
	canExtract:{water:true}
},{item:true,liquid:true});




// file: common/tile/mechanic/Mechanic_lavapump.js

Translation.addTranslation("Mechanic Lava Pump", {
	ru: "Механическая лавовая помпа"
});

IDRegistry.genBlockID("machineMechanicPumpLava");
Block.createBlockWithRotation("machineMechanicPumpLava", [
	{name:"Mechanic Lava Pump", texture: [
		["block_machine_wooden",0],["block_machine_wooden", 0],
		["block_machine_wooden",0],["block_mechanic_lavapump",0],
		["block_machine_wooden",0],["block_machine_wooden",0]
	], inCreative: true}
],"opaque");

Recipes.addShaped({ id: BlockID.machineMechanicPumpLava, count: 1, data: 0 }, [
	"a","x","a"
],[
	'a', 49, 0,
	'x', BlockID.machineMechanicPumpWater, 0
]);

var UI_mechanic_lavapump= new UI.StandartWindow({
	standart: {	
		header: {
			text: {
				text: "Mechanic Lava Pump/Механическая лавовая помпа"
			},
		},
		minHeight: 700,
		inventory: {
			standart: true
		},
		background: {
			standart: true
		}
	},
	drawing: [
		{ type: "bitmap", x: 0, y: 0, bitmap: "gui_ground", scale: 8 },
		{ type: "bitmap", x: 350, y: 50, bitmap: "liquid.ground", scale: 2.6 },
		{ type: "bitmap", x: 685, y: 150, bitmap: "progressbar.ground", scale: 5 },
	],
	params: {
		slot: "slotFactory",
		invSlot: "slotFactory",
		selectionFactoryon: "selectionFactory"
	},
	elements: {
		"slotSource": { type: "slot", x: 545, y: 135, size: 100 },
		"slotResult": { type: "slot", x: 835, y: 135, size: 100 },
		"progressScale": { type: "scale", x: 685, y: 150, direction: 0, scale: 5, bitmap: "progressbar.ground" },
		"waterScale": { type: "scale", x: 350, y: 50, direction: 1, scale: 2.6, bitmap: "liquid.lava" }
	}
});

FactAPI.machine.registerTile(BlockID.machineMechanicPumpLava,{
	defaultValues: {
		progress:0,
		active:false
	},
	getConfig:function(){
		return {
			time: 100,
			storage: 16
		}
	},
	init:function(){
		this.liquidStorage.setLimit("lava",this.getConfig().storage);
	},
	getGuiScreen: function(){
		return UI_mechanic_lavapump;
	},
	getTransportSlots:function(){
		return {input:["slotSource"],output:["slotResult"]}
	},
	click:function(){
		var item = Player.getCarriedItem();
		this._getGuiScreen?this.getGuiScreen=this._getGuiScreen:null;
		
		if(ItemDictionary.isItemInCathegory(item.id,"wrench")){
			this.data.active=!this.data.active;
			this._getGuiScreen = this.getGuiScreen
			this.getGuiScreen=function(){return null};
			return 
		}
	},
	tick:function(){
		this.data.progress?null:this.data.progress=0;
		var cfg = this.getConfig();
		
		if(!this.data.active)return
		
		this.container.setScale("progressScale", this.data.progress/cfg.time);
		this.container.setScale("waterScale",this.liquidStorage.getAmount("lava")/cfg.storage);
		
		if(World.getThreadTime()%cfg.time==0){
			this.MechanicDeploy();
		}
	},
	
	MechanicDeploy:function(){
		var tile=World.getBlock(this.x,this.y-1,this.z);
		if ((tile.id == 10 || tile.id == 11) && tile.data == 0 && this.liquidStorage.getAmount("lava") <= this.getConfig().storage - 1) {
			World.setBlock(this.x,this.y-1,this.z,0,0);
			this.liquidStorage.addLiquid("lava", 1);
		}
		var liqStor=World.getTileEntity(this.x,this.y-1,this.z);
		if (liqStor && this.liquidStorage.getAmount("lava") <= this.getConfig().storage - 1) {
		    if (liqStor.liquidStorage.getAmount("lava") >= 1) {
		        var got = liqStor.liquidStorage.getLiquid("lava", 1);
		        this.liquidStorage.addLiquid("lava", 1);
			}
		}
		var sourceSlot=this.container.getSlot("slotSource");
		var resultSlot=this.container.getSlot("slotResult");
		if ((sourceSlot.id == 325 && sourceSlot.data == 0) && this.liquidStorage.getAmount("lava") >= 1 && ((resultSlot.id == 325 && resultSlot.data == 10 && resultSlot.count < 64) || resultSlot.id == 0)) {
			sourceSlot.count--;
			resultSlot.id=325;
			resultSlot.data=10;
			resultSlot.count++;
			this.liquidStorage.getLiquid("lava", 1);
			this.container.validateAll();
		}
	},
	
	canExtract:{lava:true}
},{item:true,liquid:true});




// file: common/tile/mechanic/Mechanic_towerbow.js

Translation.addTranslation("Mechanic Crossbow Tower", {
    ru: "Механический арбалет"
});

IDRegistry.genBlockID("machineMechanicTowerCrossbow");
Block.createBlockWithRotation("machineMechanicTowerCrossbow", [
	{
	    name: "Mechanic Crossbow Tower", texture: [
           ["block_machine_wooden", 0], ["block_machine_wooden", 0],
           ["block_machine_wooden", 0], ["block_mechanic_crossbow", 0],
           ["block_machine_wooden", 0], ["block_machine_wooden", 0]
	    ], inCreative: true
	},
], "opaque");


    Recipes.addShaped({ id: BlockID.machineMechanicTowerCrossbow, count: 1, data: 0 }, [
		"a", "x"
    ], [
		'a', 261, 0,
		'x', BlockID.blockMachineWooden, 0
    ]);

   

FactAPI.machine.registerTile(BlockID.machineMechanicTowerCrossbow, {
  defaultValues: {
      progress: 0,
      active: false
  },
  getConfig: function () {
      return {
          time: 60
      }
  },
  click: function () {
      var item = Player.getCarriedItem();
      this._getGuiScreen ? this.getGuiScreen = this._getGuiScreen : null;

      if (ItemDictionary.isItemInCathegory(item.id, "wrench")) {
          this.data.active = !this.data.active;
          this._getGuiScreen = this.getGuiScreen
          this.getGuiScreen = function () { return null };
          return
      }
  },
  tick: function () {
      if (!this.data.active) return
      if (World.getThreadTime() % this.getConfig().time == 0) this.MechanicDeploy();
  },
  MechanicDeploy: function () {
      try {
          var all = Entity.getAll();
          for (var i in all) {
              if (!Player.isPlayer(all[i]) && !FactAPI.constants.NotKill[Entity.getType(all[i])]) {
                  if (Entity.getDistanceToCoords(all[i], { x: this.x, y: this.y, z: this.z }) < 20) {
                      Entity.damageEntity(all[i], 5);
                      var crd = Entity.getPosition(all[i]);
                      Particles.line(Native.ParticleType.smoke, { x: this.x + 0.5, y: this.y + 0.5, z: this.z + 0.5 }, { x: crd.x + 0.5, y: crd.y + 0.5, z: crd.z + 0.5 }, 0.1, 1);
                      return
                  }
              }
          }
      } catch (e) { }
  }
});




// file: common/tile/mechanic/Mechanic_towersword.js

Translation.addTranslation("Mechanic Sword Tower", {
    ru: "Механический уничтожитель мобов"
});

IDRegistry.genBlockID("machineMechanicTowerSword");
Block.createBlockWithRotation("machineMechanicTowerSword", [
	{
	    name: "Mechanic Sword Tower", texture: [
           ["block_machine_wooden", 0], ["block_machine_wooden", 0],
           ["block_machine_wooden", 0], ["block_mechanic_sword", 0],
           ["block_machine_wooden", 0], ["block_machine_wooden", 0]
	    ], inCreative: true
	},
], "opaque");


    Recipes.addShaped({ id: BlockID.machineMechanicTowerSword, count: 1, data: 0 }, [
		"a", "x"
    ], [
		'a', 272, 0,
		'x', BlockID.blockMachineWooden, 0
    ]);

   

FactAPI.machine.registerTile(BlockID.machineMechanicTowerSword, {
  defaultValues: {
      progress: 0,
      active: false
  },
  getConfig: function () {
      return {
          time: 60
      }
  },
  click: function () {
      var item = Player.getCarriedItem();
      this._getGuiScreen ? this.getGuiScreen = this._getGuiScreen : null;

      if (ItemDictionary.isItemInCathegory(item.id, "wrench")) {
          this.data.active = !this.data.active;
          this._getGuiScreen = this.getGuiScreen
          this.getGuiScreen = function () { return null };
          return
      }
  },
  tick: function () {
      if (!this.data.active) return
      if (World.getThreadTime() % this.getConfig().time == 0) this.MechanicDeploy();
  },
  MechanicDeploy: function () {
      try {
          var all = Entity.getAll();
          for (var i in all) {
              if (!Player.isPlayer(all[i]) && !FactAPI.constants.NotKill[Entity.getType(all[i])]) {
                  if (Entity.getDistanceToCoords(all[i], { x: this.x, y: this.y, z: this.z }) < 10) {
                      Entity.damageEntity(all[i], 15);
                      var crd = Entity.getPosition(all[i]);
                      Particles.line(ParticleType.smoke, { x: this.x + 0.5, y: this.y + 0.5, z: this.z + 0.5 }, { x: crd.x + 0.5, y: crd.y + 0.5, z: crd.z + 0.5 }, 0.1, 1);
                      return
                  }
              }
          }
      } catch (e) { }
  }
});




// file: common/tile/mechanic/Mechanic_towerflame.js

Translation.addTranslation("Mechanic Flame Tower", {
    ru: "Механический огнемет"
});

IDRegistry.genBlockID("machineMechanicTowerFlame");
Block.createBlockWithRotation("machineMechanicTowerFlame", [
	{
	    name: "Mechanic Flame Tower", texture: [
           ["block_machine_wooden", 0], ["block_machine_wooden", 0],
           ["block_machine_wooden", 0], ["block_mechanic_flame", 0],
           ["block_machine_wooden", 0], ["block_machine_wooden", 0]
	    ], inCreative: true
	},
], "opaque");


    Recipes.addShaped({ id: BlockID.machineMechanicTowerFlame, count: 1, data: 0 }, [
		"c",
        "a",
        "x"
    ], [
		'a', 261, 0,
        'c', 377, 0,
		'x', BlockID.blockMachineWooden, 0
    ]);

    
FactAPI.machine.registerTile(BlockID.machineMechanicTowerFlame, {
    defaultValues: {
        progress: 0,
        active: false
    },
    getConfig: function () {
        return {
            time: 60
        }
    },
    click: function () {
        var item = Player.getCarriedItem();
        this._getGuiScreen ? this.getGuiScreen = this._getGuiScreen : null;

        if (ItemDictionary.isItemInCathegory(item.id, "wrench")) {
            this.data.active = !this.data.active;
            this._getGuiScreen = this.getGuiScreen
            this.getGuiScreen = function () { return null };
            return
        }
    },
    tick: function () {
        if (!this.data.active) return
        if (World.getThreadTime() % this.getConfig().time == 0) this.MechanicDeploy();
    },
    MechanicDeploy: function () {
        try {
            var all = Entity.getAll();
            for (var i in all) {
                if (!Player.isPlayer(all[i]) && !FactAPI.constants.NotKill[Entity.getType(all[i])]) {
                    if (Entity.getDistanceToCoords(all[i], { x: this.x, y: this.y, z: this.z }) < 10) {
                        Entity.damageEntity(all[i], 4);
                        Entity.setFire(all[i], 60);
                        var crd = Entity.getPosition(all[i]);
                        Particles.line(ParticleType.flame, { x: this.x + 0.5, y: this.y + 0.5, z: this.z + 0.5 }, { x: crd.x + 0.5, y: crd.y + 0.5, z: crd.z + 0.5 }, 0.1, 1);
                        return
                    }
                }
            }
        } catch (e) { }
    }
});




// file: common/tile/mechanic/Mechanic_farm.js

Translation.addTranslation("Mechanic Farm", {
	ru: "Механическая ферма"
});

IDRegistry.genBlockID("machineMechanicFarm");
Block.createBlockWithRotation("machineMechanicFarm", [
	{name:"Mechanic Farm", texture: [
		["block_machine_wooden",0],["block_machine_wooden", 0],
		["block_machine_wooden",0],["block_mechanic_farm",0],
		["block_machine_wooden",0],["block_machine_wooden",0]
	], inCreative: true}
],"opaque");

Recipes.addShaped({id: BlockID.machineMechanicFarm, count: 1, data: 0}, [
		"#a#",
		"bob",
		"#x#"
],[
	'a',359,0,
	'b',ItemID.gearWooden,0,
	'o', BlockID.machineMechanicHoe, 0,
	'x', BlockID.machineMechanicPumpWater, 0
]);
	
var UI_mechanic_farm= new UI.StandartWindow({
	standart: {	
		header: {
			text: {
				text: "Mechanic Farm/Механическая ферма"
			},
		},
		minHeight: 700,
		inventory: {
			standart: true
		},
		background: {
			standart: true
		}
	},
	drawing: [
		{ type: "bitmap", x: 0, y: 0, bitmap: "gui_ground", scale: 8 },
		{ type: "bitmap", x: 350, y: 50, bitmap: "liquid.ground", scale: 2.6 },
		{type: "bitmap", x: 655, y: 350, bitmap: "progressbar.ground", scale: 5},
		{type: "bitmap", x: 560, y: 345, bitmap: "gear", scale: 5}
	],
	params: {
		slot: "slotFactory",
		invSlot: "slotFactory",
		selectionFactoryon: "selectionFactory"
	},
	elements: {
		"progressScale": {type: "scale", x: 655, y: 350, direction: 0, scale: 5, bitmap: "progressbar.scale"},
		"waterScale": { type: "scale", x: 350, y: 50, direction: 1, scale: 2.6, bitmap: "liquid.water" },
		
		"slot1": {type: "slot", x: 470, y: 60, size: 70},
		"slot2": {type: "slot", x: 540, y: 60, size: 70},
		"slot3": {type: "slot", x: 610, y: 60, size: 70},
		"slot4": {type: "slot", x: 680, y: 60, size: 70},
		"slot5": {type: "slot", x: 750, y: 60, size: 70},
		"slot6": {type: "slot", x: 820, y: 60, size: 70},
		"slot7": {type: "slot", x: 890, y: 60, size: 70},
		"slot8": {type: "slot", x: 470, y: 130, size: 70},
		"slot9": {type: "slot", x: 540, y: 130, size: 70},
		"slot10": {type: "slot", x: 610, y: 130, size: 70},
		"slot11": {type: "slot", x: 680, y: 130, size: 70},
		"slot12": {type: "slot", x: 750, y: 130, size: 70},
		"slot13": {type: "slot", x: 820, y: 130, size: 70},
		"slot14": {type: "slot", x: 890, y: 130, size: 70},
		"slot15": {type: "slot", x: 470, y: 200, size: 70},
		"slot16": {type: "slot", x: 540, y: 200, size: 70},
		"slot17": {type: "slot", x: 610, y: 200, size: 70},
		"slot18": {type: "slot", x: 680, y: 200, size: 70},
		"slot19": {type: "slot", x: 750, y: 200, size: 70},
		"slot20": {type: "slot", x: 820, y: 200, size: 70},
		"slot21": {type: "slot", x: 890, y: 200, size: 70},
		"slot22": {type: "slot", x: 470, y: 270, size: 70},
		"slot23": {type: "slot", x: 540, y: 270, size: 70},
		"slot24": {type: "slot", x: 610, y: 270, size: 70},
		"slot25": {type: "slot", x: 680, y: 270, size: 70},
		"slot26": {type: "slot", x: 750, y: 270, size: 70},
		"slot27": {type: "slot", x: 820, y: 270, size: 70},
		"slot28": {type: "slot", x: 890, y: 270, size: 70},
		"slotU1": {type: "slot", x: 470, y: 430, size: 70},
		"slotU2": {type: "slot", x: 540, y: 430, size: 70},
		"slotU3": {type: "slot", x: 610, y: 430, size: 70},
		"slotU4": {type: "slot", x: 680, y: 430, size: 70},
		"slotU5": {type: "slot", x: 750, y: 430, size: 70},
		"slotU6": {type: "slot", x: 820, y: 430, size: 70},
		"slotU7": {type: "slot", x: 890, y: 430, size: 70},
	}
});

FactAPI.machine.registerTile(BlockID.machineMechanicFarm,{
	defaultValues: {
		progress:0,
		index:0,
		active:false
	},
	getConfig:function(){
		return {
			time: 100
		}
	},
	getGuiScreen: function(){
		return UI_mechanic_farm;
	},
	putChest: function(item){
		var a=FactAPI.machineContainer.addItemToContainer(this.container,item);
		if(a)World.drop(this.x+0.5, this.y+1, this.z+0.5, item.id, a, item.data);
	},
	getTransportSlots: function () {
		var slotOut=[];
		for(var i=1;i<=28;i++){
			slotOut.push("slot"+i);
		}
		return {input: [], output:slotOut};
	},
	click:function(){
		var item = Player.getCarriedItem();
		this._getGuiScreen?this.getGuiScreen=this._getGuiScreen:null;
		
		if(ItemDictionary.isItemInCathegory(item.id,"wrench")){
			this.data.active=!this.data.active;
			this._getGuiScreen = this.getGuiScreen
			this.getGuiScreen=function(){return null};
			return 
		}
	},
	
	tick:function(){
		if(!this.data.act){this.liquidStorage.setLimit("water",16,0000001);this.liquidStorage.addLiquid("water", 0.000001);this.data.act=1;}
		var cfg = this.getConfig();
		if(!this.data.index)this.data.index=0;
		
		if(!this.data.active)return
		
		this.container.setScale("progressScale", this.data.progress/cfg.time);
		this.container.setScale("waterScale", (this.liquidStorage.getAmount("water")||0)/16);
		
		this.data.modY=0;
		this.data.modTime=0;
		
		var updates={
			359:{timer:0.5}
		};
		updates[ItemID.gearIron]={timer:0.1}
		updates[ItemID.gearGolden]={timer:0.2,height:2}
		updates[ItemID.gearDiamond]={timer:0.4,height:4}
		
		for(var i=1;i<=7;i++){
			slotU=this.container.getSlot("slotU"+i);
			if(updates[slotU.id]){
				if(updates[slotU.id].timer){
					this.data.modTime+=updates[slotU.id].timer;
				}
				if(updates[slotU.id].height){
					this.data.modY+=updates[slotU.id].height;
				}
			}
		}
		
		var add = 1+this.data.modTime;
		this.data.progress+=add;
		
		if(this.data.progress>=cfg.time){
			this.MechanicDeploy();
			this.data.progress=0;
		}
	},
	
	MechanicDeploy: function(){
		this.makeFarmlands();
		this.waterFarmlands();
		this.growPlants();
		var block = World.getBlock(this.x,this.y-1,this.z);
		if((block.id==8||block.id==9)&&block.data==0&&this.liquidStorage.getAmount("water")<16){
			World.destroyBlock(this.x,this.y-1,this.z);
			this.liquidStorage.addLiquid("water",1);
		}
		var container = World.getContainer(this.x,this.y+1,this.z);
		if(container&&container.tileEntity&&container.tileEntity.isFactoryTank){
			var storage = container.tileEntity.liquidStorage;
			var amount = storage.getAmount("water");
			if(this.liquidStorage.getAmount("water")<16&&amount>=1){
				this.liquidStorage.addLiquid("water",1);
				storage.getLiquid("water",1);
			}
		}
	},
	
	makeFarmlands: function(){
		for(var x=0;x<9;x++){
			for(var z=0;z<9;z++){
				for(var y=10+(this.data.modY/2);y>-10-(this.data.modY/2);y--){
					var id = World.getBlockID(this.x-4+x,this.y+y,this.z-4+z);
					if((id==3||id==2)&&World.getBlockID(this.x-4+x,this.y+y+1,this.z-4+z)==0){
						World.setBlock(this.x-4+x,this.y+y,this.z-4+z,60,0);
						return
					}
				}
			}
		}
	},
	
	waterFarmlands: function(){
		for(var x=0;x<9;x++){
			for(var z=0;z<9;z++){
				for(var y=10+(this.data.modY/2);y>-10-(this.data.modY/2);y--){
					if(this.liquidStorage.getAmount("water")>=1){
						var block = World.getBlock(this.x-4+x,this.y+y,this.z-4+z);
						if(block.id==60&&block.data==0){
							World.setBlock(this.x-4+x,this.y+y,this.z-4+z,World.getBlockID(this.x-4+x,this.y+y,this.z-4+z),7);
							this.liquidStorage.getLiquid("water",1);
							return
						}
					}
				}
			}
		}
	},
	
	findFarmland: function(){
		var RANGE = 9;
		var pos = this.data.index % (RANGE * RANGE);
		var x = this.x - parseInt(RANGE / 2) + pos % RANGE;
		var z = this.z - parseInt(RANGE / 2) + parseInt(pos / RANGE);
		this.data.index++;
		for (var y = this.y - 3; y < this.y + 4; y++){
			if (World.getBlockID(x, y, z)==60){
				return {
					x: x,
					y: y,
					z: z
				};
			}
		}
		return null;
	},
	
	growPlants: function(){
		var CROPS = FactAPI.farm.crops;
		var SEEDS = FactAPI.farm.seeds;
		var DATAS = FactAPI.farm.datas;
		var farmlandCoords = this.findFarmland();
		if (farmlandCoords){
			var block = World.getBlock(farmlandCoords.x, farmlandCoords.y + 1, farmlandCoords.z);
			if(CROPS[block.id]){
				if(block.data>=DATAS[block.id]){
					var drop=CROPS[block.id];
					World.destroyBlock(farmlandCoords.x,farmlandCoords.y+1,farmlandCoords.z);
					for(var i in drop){
						var a=this.putChest({id:drop[i][0],count:drop[i][1],data:drop[i][2]});
					}
					return
				}
				if(block.data<DATAS[block.id]){
					if(FactAPI.machineContainer.isItemInContainer(this.container,{id:351,count:1,data:15})){
						FactAPI.machineContainer.giveItemFromContainer(this.container,{id:351,count:1,data:15});
						World.setBlock(farmlandCoords.x,farmlandCoords.y+1,farmlandCoords.z,block.id,7);
						return
					}
					if(this.liquidStorage.getAmount("water")>1){
						this.liquidStorage.getLiquid("water",1);
						World.setBlock(farmlandCoords.x,farmlandCoords.y+1,farmlandCoords.z,block.id,block.data+1);
						return
					}
				}
			}
			if(block.id==0){
				for(var i in SEEDS){
					if(FactAPI.machineContainer.isItemInContainer(this.container,{id:i,count:1,data:0})){
							FactAPI.machineContainer.giveItemFromContainer(this.container,{id:i,count:1,data:0});
							World.setBlock(farmlandCoords.x,farmlandCoords.y+1,farmlandCoords.z,SEEDS[i],0);
							this.data.progress=0;
							return
					}
				}
			}
		}
	},
	
	canFill:{water:true}
},{item:true,liquid:true});




// file: common/tile/pipe/Item_wooden.js

Translation.addTranslation("Wooden Transport Pipe", {
	ru: "Деревянная транспортная труба"
});
IDRegistry.genBlockID("pipeItemWooden"); 
Block.createBlock("pipeItemWooden", [
	{name: "Wooden Transport Pipe", texture: [["pipe_wood",0]], inCreative: true}
]);

Recipes.addShaped({id: BlockID.pipeItemWooden,count: 4,data: 0}, [ 
	"aba"
],[
	'a', 5,-1,
	'b', 20,0
]); 
/*
FactAPI.recipe.assemblerStation.register(BlockID.pipeItemWooden, 0, [
	{ id: 5, data:-1, count: 2},
	{ id: 20, data: 0, count: 1}
]); */


FactAPI.render.setupWireasRender(BlockID.pipeItemWooden,0.5,[
	{name:"item-pipe",add:false},
	{name:"item-sandstone-pipe",add:false}
]);

Pipe.registerTile(BlockID.pipeItemWooden,{});

ICRender.getGroup("item-wood-pipe").add(BlockID.pipeItemWooden, -1); 
ICRender.getGroup("item-item-pipe").add(BlockID.pipeItemWooden, -1); 


TileEntity.registerPrototype(BlockID.pipeItemWooden, {
	defaultValues: {
		containerIndex: 0
	},

	getTransportSlots: function () {
		return {};
	},
	
	getTransportingDirections:function(item){
		var pos = item.position;
		var dir = item.direction;
		var list = Pipe.findDirections(pos.x,pos.y,pos.z);
		var res = Pipe.filterDirections(list,dir);
		var cur = [];
		for(var i in res){
			var d = res[i];
			if(World.getBlockID(this.x+d.x,this.y+d.y,this.z+d.z)!=BlockID.pipeItemEmerald&&
				World.getBlockID(this.x+d.x,this.y+d.y,this.z+d.z)!=BlockID.pipeItemWooden
			){
				cur.push(d)
			}
		}
		return cur;
	},

	tick: function () {
		if(World.getThreadTime()%20!=0)return
		var containerData = this.findContainer();
		if (containerData && containerData.container) {
			var item = this.getItemFrom(containerData.container,1);
			if (item) {
				var transportedItem =Pipe.item.deploy();
				transportedItem.setPosition(containerData.position);
				transportedItem.setItem(item);
				transportedItem.setTarget(this);
				transportedItem.setFriction(-0.03);
			}
			else {
				this.data.containerIndex++;
			}
		}
	},

	findContainer: function () {
		var directions = Pipe.findContainers(this.x,this.y,this.z);
		var dir = directions[this.data.containerIndex % directions.length];

		if (dir) {
			var container = World.getContainer(this.x + dir.x, this.y + dir.y, this.z + dir.z);
			return {
				container: container,
				direction: dir,
				position: {x: this.x + dir.x, y: this.y + dir.y, z: this.z + dir.z}
			};
		}
	},

	getItemFrom: function (container, maxCount) {

		var tileEntity = container.tileEntity;
		var slots = [];
		var slotsInitialized = false;
		var notNative = container.isContainer;

		if (tileEntity) {
			if (tileEntity.getTransportedItem) {
				tileEntity.getTransportedItem();
			}
			if (tileEntity.getTransportSlots) {
				slots = tileEntity.getTransportSlots().output || [];
				slotsInitialized = true;
			}
			if(tileEntity.getTransportSlotsOutput){
				var d = tileEntity.getTransportSlotsOutput();
				slotsInitialized = true;
				for(var i in (d.directions)){
					var dir = d.directions[i];
					if(tileEntity.x+dir.x==this.x&&tileEntity.y+dir.y==this.y&&tileEntity.z+dir.z==this.z){
						slots = d.slots || [];
						slotsInitialized = true;
					}
				}
			}
		}

		if (!slotsInitialized) {
			if (notNative) {
				for (var name in container.slots) {
					slots.push(name);
				}
			} else {
				for (var index = 0; index < container.getSize(); index++) {
					slots.push(index);
				}
			}
		}

		var item = null;
		for (var i in slots) {
			var slot = container.getSlot(slots[i]);
			if (slot.id > 0) {
				var count = Math.min(maxCount, slot.count);
				item = {id: slot.id, count: count, data: slot.data};
				slot.count -= count;

				if(!notNative)
					container.setSlot(i, slot.id, slot.count, slot.data);
				break;
			}
		}
		if (notNative)
			container.validateAll();

		return item;
	}
});




// file: common/tile/pipe/Item_emerald.js

Translation.addTranslation("Emerald Transport Pipe", {
	ru: "Изумрудная транспортная труба"
});
IDRegistry.genBlockID("pipeItemEmerald"); 
Block.createBlock("pipeItemEmerald", [
	{name: "Emerald Transport Pipe", texture: [["pipe_emerald",0]], inCreative: true}
]);

Recipes.addShaped({id: BlockID.pipeItemEmerald,count: 4,data: 0}, [ 
	"aba"
],[
	'a', 388,-1,
	'b', 20,0
]); 

FactAPI.render.setupWireasRender(BlockID.pipeItemEmerald,0.5,[
	{name:"item-pipe",add:false},
	{name:"item-sandstone-pipe",add:false}
]);

Pipe.registerTile(BlockID.pipeItemEmerald,{});

ICRender.getGroup("item-wood-pipe").add(BlockID.pipeItemEmerald, -1); 
ICRender.getGroup("item-item-pipe").add(BlockID.pipeItemEmerald, -1); 


var ui_emerald_pipe= new UI.StandartWindow({
	standart: {
		header: {text: {text: "Emerald Pipe/Изумрудная труба"}},
		inventory: {standart: true},
		background: {standart: true}
	},
	params: { 
	slot: "slotFactory", 
	invSlot: "slotFactory", 	
	selection: "selectionFactory"
	},
	
	drawing: [
		{type: "bitmap", x: 0, y: 0, bitmap: "gui_ground", scale: 8},
	],
	
	elements: {
		"slot1": {type: "slot", x: 400, y: 110,size:70},
		"slot2": {type: "slot", x: 470, y: 110,size:70},
		"slot3": {type: "slot", x: 540, y: 110,size:70},
		"slot4": {type: "slot", x: 610, y: 110,size:70},
		"slot5": {type: "slot", x: 680, y: 110,size:70},
		"slot6": {type: "slot", x: 750, y: 110,size:70}
	}
});

TileEntity.registerPrototype(BlockID.pipeItemEmerald, {
	defaultValues: {
		containerIndex: 0
	},

	getGuiScreen:function(){
		return ui_emerald_pipe;
	},
	getTransportSlots: function () {
		return {};
	},
	
	getTransportingDirections:function(item){
		var pos = item.position;
		var dir = item.direction;
		var list = Pipe.findDirections(pos.x,pos.y,pos.z);
		var res = Pipe.filterDirections(list,dir);
		var cur = [];
		for(var i in res){
			var d = res[i];
			if(World.getBlockID(this.x+d.x,this.y+d.y,this.z+d.z)!=BlockID.pipeItemEmerald&&
				World.getBlockID(this.x+d.x,this.y+d.y,this.z+d.z)!=BlockID.pipeItemWooden
			){
				cur.push(d)
			}
		}
		return cur;
	},

	tick: function () {
		if(World.getThreadTime()%20!=0)return
		var containerData = this.findContainer();
		if (containerData && containerData.container) {
			var item = this.getItemFrom(containerData.container,1);
			if (item) {
				var transportedItem =Pipe.item.deploy();
				transportedItem.setPosition(containerData.position);
				transportedItem.setItem(item);
				transportedItem.setTarget(this);
				transportedItem.setFriction(-0.03);
			}
			else {
				this.data.containerIndex++;
			}
		}
	},

	findContainer: function () {
		var directions = Pipe.findContainers(this.x,this.y,this.z);
		var dir = directions[this.data.containerIndex % directions.length];

		if (dir) {
			var container = World.getContainer(this.x + dir.x, this.y + dir.y, this.z + dir.z);
			return {
				container: container,
				direction: dir,
				position: {x: this.x + dir.x, y: this.y + dir.y, z: this.z + dir.z}
			};
		}
	},

	getItemFrom: function (container, maxCount) {

		var tileEntity = container.tileEntity;
		var slots = [];
		var slotsInitialized = false;
		var notNative = container.isContainer;

		if (tileEntity) {
			if (tileEntity.getTransportedItem) {
				tileEntity.getTransportedItem();
			}
			if (tileEntity.getTransportSlots) {
				slots = tileEntity.getTransportSlots().output || [];
				slotsInitialized = true;
			}
			if(tileEntity.getTransportSlotsOutput){
				var d = tileEntity.getTransportSlotsOutput();
				slotsInitialized = true;
				for(var i in (d.directions)){
					var dir = d.directions[i];
					if(tileEntity.x+dir.x==this.x&&tileEntity.y+dir.y==this.y&&tileEntity.z+dir.z==this.z){
						slots = d.slots || [];
						slotsInitialized = true;
					}
				}
			}
		}

		if (!slotsInitialized) {
			if (notNative) {
				for (var name in container.slots) {
					slots.push(name);
				}
			} else {
				for (var index = 0; index < container.getSize(); index++) {
					slots.push(index);
				}
			}
		}

		var item = null;
		for (var i in slots) {
			var slot = container.getSlot(slots[i]);
			if (slot.id > 0&&this.canGet(slot)) {
				var count = Math.min(maxCount, slot.count);
				item = {id: slot.id, count: count, data: slot.data};
				slot.count -= count;

				if(!notNative)
					container.setSlot(i, slot.id, slot.count, slot.data);
				break;
			}
		}
		if (notNative)
			container.validateAll();

		return item;
	},
	canGet:function(item){
		for(var i = 1;i<7;i++){
			var slot=this.container.getSlot("slot"+i);
			if(slot.id==item.id&&slot.data==item.data){
				return true
			}
		}
		return false
	}
});




// file: common/tile/pipe/Item_cobblestone.js

Translation.addTranslation("Cobblestone Transport Pipe", {
	ru: "Булыжниковая транспортная труба"
});
IDRegistry.genBlockID("pipeItemCobblestone"); 
Block.createBlock("pipeItemCobblestone", [
	{name: "Cobblestone Transport Pipe", texture: [["pipe_cobblestone",0]], inCreative: true}
]);

Recipes.addShaped({id: BlockID.pipeItemCobblestone,count: 4,data: 0}, [ 
	"aba"
],[
	'a', 4,-1,
	'b', 20,0
]); 
/*
FactAPI.recipe.assemblerStation.register(BlockID.pipeItemCobblestone, 0, [
	{ id: 4, data:-1, count: 2},
	{ id: 20, data: 0, count: 1}
]); */

FactAPI.render.setupWireasRender(BlockID.pipeItemCobblestone,0.5,[
	{name:"item-pipe",add:true},
	{name:"item-wood-pipe",add:false},
		{name:"item-item-pipe",add:true},
	{name:"item-sandstone-pipe",add:false}
]);

Pipe.registerTile(BlockID.pipeItemCobblestone,{
	friction:0.001
});




// file: common/tile/pipe/Item_stone.js

Translation.addTranslation("Stone Transport Pipe", {
	ru: "Каменая транспортная труба"
});
IDRegistry.genBlockID("pipeItemStone"); 
Block.createBlock("pipeItemStone", [
	{name: "Stone Transport Pipe", texture: [["pipe_stone",0]], inCreative: true}
]);

Recipes.addShaped({id: BlockID.pipeItemStone,count: 4,data: 0}, [ 
	"aba"
],[
	'a', 1,0,
	'b', 20,0
]); 
/*
FactAPI.recipe.assemblerStation.register(BlockID.pipeItemStone, 0, [
	{ id: 1, data:0, count: 2},
	{ id: 20, data: 0, count: 1}
]); 
*/
FactAPI.render.setupWireasRender(BlockID.pipeItemStone,0.5,[
	{name:"item-pipe",add:true},
	{name:"item-wood-pipe",add:false},
	{name:"item-item-pipe",add:true},
	{name:"item-sandstone-pipe",add:false}
]);

Pipe.registerTile(BlockID.pipeItemStone,{
	friction:0.0005
});




// file: common/tile/pipe/Item_void.js

Translation.addTranslation("Void Transport Pipe", {
	ru: "Пустотная транспортная труба"
});
IDRegistry.genBlockID("pipeItemVoid"); 
Block.createBlock("pipeItemVoid", [
	{name: "Void Transport Pipe", texture: [["pipe_void",0]], inCreative: true}
]);

Recipes.addShaped({id: BlockID.pipeItemVoid,count: 4,data: 0}, [ 
	"aba"
],[
	'a', 263,-1,
	'b', 20,0
]); 
/*
FactAPI.recipe.assemblerStation.register(BlockID.pipeItemVoid, 0, [
	{ id: 263, data:-1, count: 2},
	{ id: 20, data: 0, count: 1}
]); 
*/
FactAPI.render.setupWireasRender(BlockID.pipeItemVoid,0.5,[
	{name:"item-pipe",add:true},
	{name:"item-wood-pipe",add:false},
		{name:"item-item-pipe",add:true},
	{name:"item-sandstone-pipe",add:false}
]);

Pipe.registerTile(BlockID.pipeItemVoid,{
	friction:-0.0005
});

TileEntity.registerPrototype(BlockID.pipeItemVoid,{
	setPipeFunctions:function(item){
		item.destroySelf();
	}
});




// file: common/tile/pipe/Item_quartz.js

Translation.addTranslation("Quartz Transport Pipe", {
	ru: "Кварцевая транспортная труба"
});
IDRegistry.genBlockID("pipeItemQuartz"); 
Block.createBlock("pipeItemQuartz", [
	{name: "Quartz Transport Pipe", texture: [["pipe_quartz",0]], inCreative: true}
]);

Recipes.addShaped({id: BlockID.pipeItemQuartz,count: 4,data: 0}, [ 
	"aba"
],[
	'a', 406,0,
	'b', 20,0
]); 
/*
FactAPI.recipe.assemblerStation.register(BlockID.pipeItemQuartz, 0, [
	{ id: 406, data:0, count: 2},
	{ id: 20, data: 0, count: 1}
]); */

FactAPI.render.setupWireasRender(BlockID.pipeItemQuartz,0.5,[
	{name:"item-pipe",add:true},
	{name:"item-wood-pipe",add:false},
		{name:"item-item-pipe",add:true},
	{name:"item-sandstone-pipe",add:false}
]);

Pipe.registerTile(BlockID.pipeItemQuartz,{
	friction:0
});




// file: common/tile/pipe/Item_golden.js

Translation.addTranslation("Golden Transport Pipe", {
	ru: "Золотая транспортная труба"
});
IDRegistry.genBlockID("pipeItemGolden"); 
Block.createBlock("pipeItemGolden", [
	{name: "Golden Transport Pipe", texture: [["pipe_gold",0]], inCreative: true}
]);

Recipes.addShaped({id: BlockID.pipeItemGolden,count: 4,data: 0}, [ 
	"aba"
],[
	'a', 266,0,
	'b', 20,0
]); 
/*
FactAPI.recipe.assemblerStation.register(BlockID.pipeItemGolden, 0, [
	{ id: 266, data:0, count: 2},
	{ id: 20, data: 0, count: 1}
]); */

FactAPI.render.setupWireasRender(BlockID.pipeItemGolden,0.5,[
	{name:"item-pipe",add:true},
	{name:"item-wood-pipe",add:false},
		{name:"item-item-pipe",add:true},
	{name:"item-sandstone-pipe",add:false}
]);

Pipe.registerTile(BlockID.pipeItemGolden,{
	friction:-0.005
});




// file: common/tile/pipe/Item_iron.js

Translation.addTranslation("Iron Transport Pipe", {ru: "Железная транспортная труба"});
IDRegistry.genBlockID("pipeItemIron");
Block.createBlock("pipeItemIron", [
	{name: "Iron Transport Pipe", texture: [["pipe_iron",0]], inCreative: true},
]);


IDRegistry.genBlockID("pipeItemIron_a");
Block.createBlock("pipeItemIron_a", [
	{name: "Iron Pipe", texture: [["pipe_iron",1]], inCreative: false}
]);

Recipes.addShaped({id: BlockID.pipeItemIron, count: 4, data: 0}, [
		"aba"
	], ['a', 265,0,'b',20,0]);

Pipe.registerTile(BlockID.pipeItemIron);

//model
var var1 = new ICRender.Model();
var var2 = new ICRender.Model();
var var3= new ICRender.Model();
var var4 = new ICRender.Model();
var var5 = new ICRender.Model();
var var6 = new ICRender.Model();

var width=0.5;

var box1=[0.5 + width / 2, 0.5 - width / 2, 0.5 - width / 2, 1, 0.5 + width / 2, 0.5 + width / 2];
var box2= [0, 0.5 - width / 2, 0.5 - width / 2, 0.5 - width / 2, 0.5 + width / 2, 0.5 + width / 2];
var box3=[0.5 - width / 2, 0.5 + width / 2, 0.5 - width / 2, 0.5 + width / 2, 1, 0.5 + width / 2];
var box4=[0.5 - width / 2, 0, 0.5 - width / 2, 0.5 + width / 2, 0.5 - width / 2, 0.5 + width / 2];
var box5=[0.5 - width / 2, 0.5 - width / 2, 0.5 + width / 2, 0.5 + width / 2, 0.5 + width / 2, 1];
var box6=[0.5 - width / 2, 0.5 - width / 2, 0, 0.5 + width / 2, 0.5 + width / 2, 0.5 - width / 2];

var group = ICRender.getGroup("item-pipe");
	group.add(BlockID.pipeItemIron, -1);
var group2 = ICRender.getGroup("item-wood-pipe");
var group3 = ICRender.getGroup("item-sandstone-pipe");
ICRender.getGroup("item-item-pipe").add(BlockID.pipeItemIron, -1);
Block.setBlockShape(BlockID.pipeItemIron, {x: 0.5 - width/2, y: 0.5 - width/2, z: 0.5 - width/2}, {x: 0.5 + width/2, y: 0.5 + width/2, z: 0.5 + width/2});

var model = BlockRenderer.createModel();
model.addBox(0.5 - width / 2, 0.5 - width / 2, 0.5 - width / 2, 0.5 + width / 2, 0.5 + width / 2, 0.5 + width / 2, BlockID.pipeItemIron, 0);
var1.addEntry(model);
var2.addEntry(model);
var3.addEntry(model);
var4.addEntry(model);
var5.addEntry(model);
var6.addEntry(model);


var boxes1=[
	{side: [1, 0, 0], box: box1, id:BlockID.pipeItemIron_a},
	{side: [-1, 0, 0],box: box2, id:BlockID.pipeItemIron_a},
	{side: [0, 1, 0], box: box3, id:BlockID.pipeItemIron_a},
	{side: [0, -1, 0], box: box4,id:BlockID.pipeItemIron_a},
	{side: [0, 0, 1], box: box5,id:BlockID.pipeItemIron_a},
	{side: [0, 0, -1], box: box6,id:BlockID.pipeItemIron}
];
var boxes2=[
	{side: [1, 0, 0], box: box1, id:BlockID.pipeItemIron_a},
	{side: [-1, 0, 0],box: box2, id:BlockID.pipeItemIron_a},
	{side: [0, 1, 0], box: box3, id:BlockID.pipeItemIron_a},
	{side: [0, -1, 0], box: box4,id:BlockID.pipeItemIron_a},
	{side: [0, 0, 1], box: box5,id:BlockID.pipeItemIron},
	{side: [0, 0, -1], box: box6,id:BlockID.pipeItemIron_a}
];
var boxes3=[
	{side: [1, 0, 0], box: box1, id:BlockID.pipeItemIron_a},
	{side: [-1, 0, 0],box: box2, id:BlockID.pipeItemIron},
	{side: [0, 1, 0], box: box3, id:BlockID.pipeItemIron_a},
	{side: [0, -1, 0], box: box4,id:BlockID.pipeItemIron_a},
	{side: [0, 0, 1], box: box5,id:BlockID.pipeItemIron_a},
	{side: [0, 0, -1], box: box6,id:BlockID.pipeItemIron_a}
];
var boxes4=[
	{side: [1, 0, 0], box: box1, id:BlockID.pipeItemIron},
	{side: [-1, 0, 0],box: box2, id:BlockID.pipeItemIron_a},
	{side: [0, 1, 0], box: box3, id:BlockID.pipeItemIron_a},
	{side: [0, -1, 0], box: box4,id:BlockID.pipeItemIron_a},
	{side: [0, 0, 1], box: box5,id:BlockID.pipeItemIron_a},
	{side: [0, 0, -1], box: box6,id:BlockID.pipeItemIron_a}
];
var boxes5=[
	{side: [1, 0, 0], box: box1, id:BlockID.pipeItemIron_a},
	{side: [-1, 0, 0],box: box2, id:BlockID.pipeItemIron_a},
	{side: [0, 1, 0], box: box3, id:BlockID.pipeItemIron_a},
	{side: [0, -1, 0], box: box4,id:BlockID.pipeItemIron},
	{side: [0, 0, 1], box: box5,id:BlockID.pipeItemIron_a},
	{side: [0, 0, -1], box: box6,id:BlockID.pipeItemIron_a}
];
var boxes6=[
	{side: [1, 0, 0], box: box1, id:BlockID.pipeItemIron_a},
	{side: [-1, 0, 0],box: box2, id:BlockID.pipeItemIron_a},
	{side: [0, 1, 0], box: box3, id:BlockID.pipeItemIron},
	{side: [0, -1, 0], box: box4,id:BlockID.pipeItemIron_a},
	{side: [0, 0, 1], box: box5,id:BlockID.pipeItemIron_a},
	{side: [0, 0, -1], box: box6,id:BlockID.pipeItemIron_a}
];



for (var i in boxes1) {
	var box = boxes1[i];
	var model = BlockRenderer.createModel();
	model.addBox(box.box[0], box.box[1], box.box[2], box.box[3], box.box[4], box.box[5], box.id, 0);
	var1.addEntry(model).asCondition(box.side[0], box.side[1], box.side[2], group, 0);
	var1.addEntry(model).asCondition(box.side[0], box.side[1], box.side[2], group2, 0);
	var1.addEntry(model).asCondition(box.side[0], box.side[1], box.side[2], group3, 0);
}
for (var i in boxes2) {
	var box = boxes2[i];
	var model = BlockRenderer.createModel();
	model.addBox(box.box[0], box.box[1], box.box[2], box.box[3], box.box[4], box.box[5], box.id, 0);
	var2.addEntry(model).asCondition(box.side[0], box.side[1], box.side[2], group, 0);
	var2.addEntry(model).asCondition(box.side[0], box.side[1], box.side[2], group2, 0);
	var2.addEntry(model).asCondition(box.side[0], box.side[1], box.side[2], group3, 0);
}
for (var i in boxes3) {
	var box = boxes3[i];
	var model = BlockRenderer.createModel();
	model.addBox(box.box[0], box.box[1], box.box[2], box.box[3], box.box[4], box.box[5], box.id, 0);
	var3.addEntry(model).asCondition(box.side[0], box.side[1], box.side[2], group, 0);
	var3.addEntry(model).asCondition(box.side[0], box.side[1], box.side[2], group2, 0);
	var3.addEntry(model).asCondition(box.side[0], box.side[1], box.side[2], group3, 0);

}
for (var i in boxes4) {
	var box = boxes4[i];
	var model = BlockRenderer.createModel();
	model.addBox(box.box[0], box.box[1], box.box[2], box.box[3], box.box[4], box.box[5], box.id, 0);
	var4.addEntry(model).asCondition(box.side[0], box.side[1], box.side[2], group, 0);	
	var4.addEntry(model).asCondition(box.side[0], box.side[1], box.side[2], group2, 0);
		var4.addEntry(model).asCondition(box.side[0], box.side[1], box.side[2], group3, 0);

}
for (var i in boxes5) {
	var box = boxes5[i];
	var model = BlockRenderer.createModel();
	model.addBox(box.box[0], box.box[1], box.box[2], box.box[3], box.box[4], box.box[5], box.id, 0);
	var5.addEntry(model).asCondition(box.side[0], box.side[1], box.side[2], group, 0);
	var5.addEntry(model).asCondition(box.side[0], box.side[1], box.side[2], group2, 0);
	var5.addEntry(model).asCondition(box.side[0], box.side[1], box.side[2], group3, 0);

}
for (var i in boxes6) {
	var box = boxes6[i];
	var model = BlockRenderer.createModel();
	model.addBox(box.box[0], box.box[1], box.box[2], box.box[3], box.box[4], box.box[5], box.id, 0);
	var6.addEntry(model).asCondition(box.side[0], box.side[1], box.side[2], group, 0);
	var6.addEntry(model).asCondition(box.side[0], box.side[1], box.side[2], group2, 0);
		var6.addEntry(model).asCondition(box.side[0], box.side[1], box.side[2], group3, 0);

	}


BlockRenderer.enableCoordMapping(BlockID.pipeItemIron,-1,var1);

TileEntity.registerPrototype(BlockID.pipeItemIron,{
	getTransportingDirections:function(item){
		var a=[];
		a.push(Pipe.directions[this.data.index]);
		return a
	},
	tick:function(){
		if(!this.data.index)this.data.index=0;
	},
	click:function(){
		if(ItemDictionary.isItemInCathegory(Player.getCarriedItem().id,"wrench")){
			if(this.data.index<5)this.data.index++;
			else this.data.index=0;
			this.map();
			return;
		}
	},
	destroy:function(){
		BlockRenderer.unmapAtCoords(this.x,this.y,this.z);
	},
	map:function(){
		var vis=[
			var1,var2,var3,var4,var5,var6
		];
		BlockRenderer.mapAtCoords(this.x,this.y,this.z,vis[this.data.index]);
	}
});




// file: common/tile/pipe/Item_redstone.js

Translation.addTranslation("Redstone Transport Pipe", {ru: "Редстоуновая транспортная труба"});

IDRegistry.genBlockID("pipeItemRedstone");
Block.createBlock("pipeItemRedstone", [
	{name: "Redstone Transport Pipe", texture: [["pipe_redstone",0]], inCreative: true},
]);

Recipes.addShaped({id: BlockID.pipeItemRedstone, count: 4, data: 0}, [
	"aba"
	], ['a', 331,0,'b',20,0]);

/*
FactAPI.recipe.assemblerStation.register(BlockID.pipeItemRedstone, 0, [
	{ id:331, data:0, count: 2},
	{ id: 20, data: 0, count: 1}
]); 
*/
FactAPI.render.setupWireasRender(BlockID.pipeItemRedstone,0.5,[
	{name:"item-pipe",add:true},
	{name:"item-wood-pipe",add:false},
		{name:"item-item-pipe",add:true},
	{name:"item-sandstone-pipe",add:false}
]);
Pipe.registerTile(BlockID.pipeItemRedstone);

var ui_redstone_pipe= new UI.StandartWindow({
	standart: {
		header: {text: {text: "Redstone Pipe/Редстоун труба"}},
		inventory: {standart: true},
		background: {standart: true}
	},
	params: { 
	slot: "slotFactory", 
	invSlot: "slotFactory", 	
	selection: "selectionFactory"
	},
	
	drawing: [
		{type: "bitmap", x: 0, y: 0, bitmap: "gui_ground", scale: 8},
	],
	
	elements: {
		"slot1": {type: "slot", x: 400, y: 110,size:70},
		"slot2": {type: "slot", x: 470, y: 110,size:70},
		"slot3": {type: "slot", x: 540, y: 110,size:70},
		"slot4": {type: "slot", x: 610, y: 110,size:70},
		"slot5": {type: "slot", x: 680, y: 110,size:70},
		"slot6": {type: "slot", x: 750, y: 110,size:70}
	}
});

TileEntity.registerPrototype(BlockID.pipeItemRedstone,{
	getGuiScreen: function(){
		return ui_redstone_pipe;
	},
	setPipeFunctions:function(item){
		for(var i = 1;i<7;i++){
			var slot=this.container.getSlot("slot"+i);
			if(slot.id==item.item.id&&slot.data==item.item.data){
				return
			}
		}
		item.turnBack();
	}
});




// file: common/tile/pipe/Item_diamond.js

Translation.addTranslation("Diamond Transport Pipe", {ru: "Алмазная транспортная труба"});

IDRegistry.genBlockID("pipeItemDiamond");
Block.createBlock("pipeItemDiamond", [
	{name: "Diamond Transport Pipe", texture: [["pipe_diamond",6]], inCreative: true},
]);


function setupDiamondPipeRender(id, width, groups) {
	var render = new ICRender.Model();
	BlockRenderer.setStaticICRender(id, 0, render);
		var boxes = [
			{side: [1, 0, 0], box: [0.5 + width / 2, 0.5 - width / 2, 0.5 - width / 2, 1, 0.5 + width / 2, 0.5 + width / 2],data:0},
			{side: [-1, 0, 0], box: [0, 0.5 - width / 2, 0.5 - width / 2, 0.5 - width / 2, 0.5 + width / 2, 0.5 + width / 2],data:1},
			{side: [0, 1, 0], box: [0.5 - width / 2, 0.5 + width / 2, 0.5 - width / 2, 0.5 + width / 2, 1, 0.5 + width / 2],data:2},
			{side: [0, -1, 0], box: [0.5 - width / 2, 0, 0.5 - width / 2, 0.5 + width / 2, 0.5 - width / 2, 0.5 + width / 2],data:3},
			{side: [0, 0, 1], box: [0.5 - width / 2, 0.5 - width / 2, 0.5 + width / 2, 0.5 + width / 2, 0.5 + width / 2, 1],data:4},
			{side: [0, 0, -1], box: [0.5 - width / 2, 0.5 - width / 2, 0, 0.5 + width / 2, 0.5 + width / 2, 0.5 - width / 2],data:5},
		]
	for(var i in groups){
		var group = ICRender.getGroup(groups[i].name);
		if (groups[i].add) {
			group.add(id, -1);
		}
		for (var i in boxes) {
			var box = boxes[i];
			var model = BlockRenderer.createModel();
			model.addBox(box.box[0], box.box[1], box.box[2], box.box[3], box.box[4], box.box[5],"pipe_diamond", box.data);
			render.addEntry(model).asCondition(box.side[0], box.side[1], box.side[2], group, 0);
		}
	}
	var model = BlockRenderer.createModel();
		model.addBox(0.5 - width / 2, 0.5 - width / 2, 0.5 - width / 2, 0.5 + width / 2, 0.5 + width / 2, 0.5 + width / 2, id, 0);
		render.addEntry(model);
		width = Math.max(width, 0.5);
	Block.setBlockShape(id, {x: 0.5 - width/2, y: 0.5 - width/2, z: 0.5 - width/2}, {x: 0.5 + width/2, y: 0.5 + width/2, z: 0.5 + width/2});
}

setupDiamondPipeRender(BlockID.pipeItemDiamond,0.5,[
	{name:"item-pipe",add:true},
	{name:"item-wood-pipe",add:false},
		{name:"item-item-pipe",add:true},
	{name:"item-sandstone-pipe",add:false}
]);


Pipe.registerTile(BlockID.pipeItemDiamond,{});
Recipes.addShaped({id: BlockID.pipeItemDiamond, count: 4, data: 0}, [
	"aba"
	], ['a', 264,0,'b',20,0]);

var ui_pipe_diamond= new UI.StandartWindow({
	standart: {
		header: {text: {text: "Diamond Pipe/Алмазная труба"}},
		inventory: {standart: true},
		minHeight: 700,
		background: {standart: true}
	},
	params: { 
	invSlot: "slotFactory", 	
	selection: "selectionFactory"
	},
	
	drawing: [
		{type: "bitmap", x: 0, y: 0, bitmap: "gui_ground", scale: 8},
		
		{
			type: "frame",
			x: 390,
			y: 60,
			width: 440,
			height: 90,
			bitmap:"pipe.slot_white",
			scale: 1
		},
		{
			type: "frame",
			x: 390,
			y: 150,
			width: 440,
			height: 90,
			bitmap:"pipe.slot_black",
			scale: 1
		},
		{
			type: "frame",
			x: 390,
			y: 240,
			width: 440,
			height: 90,
			bitmap:"pipe.slot_red",
			scale: 1
		},
		{
			type: "frame",
			x: 390,
			y: 330,
			width: 440,
			height: 90,
			bitmap:"pipe.slot_blue",
			scale: 1
		},
		{
			type: "frame",
			x: 390,
			y: 420,
			width: 440,
			height: 90,
			bitmap:"pipe.slot_yellow",
			scale: 1
		},
		{
			type: "frame",
			x: 390,
			y: 510,
			width: 440,
			height: 90,
			bitmap:"pipe.slot_green",
			scale: 1
		},
	],
	
	elements: {
		//white
		"white_slot1": {type: "slot", bitmap:"slotFactory",x: 400, y: 70,size:70},
		"white_slot2": {type: "slot", bitmap:"slotFactory",x: 470, y: 70,size:70},
		"white_slot3": {type: "slot", bitmap:"slotFactory",x: 540, y: 70,size:70},
		"white_slot4": {type: "slot", bitmap:"slotFactory",x: 610, y: 70,size:70},
		"white_slot5": {type: "slot", bitmap:"slotFactory",x: 680, y: 70,size:70},
		"white_slot6": {type: "slot", bitmap:"slotFactory",x: 750, y: 70,size:70},
		
		//black
		"black_slot1": {type: "slot", bitmap:"slotFactory",x: 400, y: 160,size:70},
		"black_slot2": {type: "slot", bitmap:"slotFactory",x: 470, y:160,size:70},
		"black_slot3": {type: "slot", bitmap:"slotFactory",x: 540, y:160,size:70},
		"black_slot4": {type: "slot", bitmap:"slotFactory",x: 610, y:160,size:70},
		"black_slot5": {type: "slot", bitmap:"slotFactory",x: 680, y:160,size:70},
		"black_slot6": {type: "slot", bitmap:"slotFactory",x: 750, y: 160,size:70},
		
		//red
		"red_slot1": {type: "slot", bitmap:"slotFactory",x: 400, y: 250,size:70},
		"red_slot2": {type: "slot", bitmap:"slotFactory",x: 470, y: 250,size:70},
		"red_slot3": {type: "slot", bitmap:"slotFactory",x: 540, y: 250,size:70},
		"red_slot4": {type: "slot", bitmap:"slotFactory",x: 610, y: 250,size:70},
		"red_slot5": {type: "slot", bitmap:"slotFactory",x: 680, y: 250,size:70},
		"red_slot6": {type: "slot", bitmap:"slotFactory",x: 750, y: 250,size:70},
		
		//blue
		"blue_slot1": {type: "slot", bitmap:"slotFactory",x: 400, y: 340,size:70},
		"blue_slot2": {type: "slot", bitmap:"slotFactory",x: 470, y: 340,size:70},
		"blue_slot3": {type: "slot", bitmap:"slotFactory",x: 540, y: 340,size:70},
		"blue_slot4": {type: "slot", bitmap:"slotFactory",x: 610, y: 340,size:70},
		"blue_slot5": {type: "slot", bitmap:"slotFactory",x: 680, y: 340,size:70},
		"blue_slot6": {type: "slot", bitmap:"slotFactory",x: 750, y: 340,size:70},
		
		//yellow
		"yellow_slot1": {type: "slot", bitmap:"slotFactory",x: 400, y: 430,size:70},
		"yellow_slot2": {type: "slot", bitmap:"slotFactory",x: 470, y: 430,size:70},
		"yellow_slot3": {type: "slot", bitmap:"slotFactory",x: 540, y: 430,size:70},
		"yellow_slot4": {type: "slot", bitmap:"slotFactory",x: 610, y: 430,size:70},
		"yellow_slot5": {type: "slot", bitmap:"slotFactory",x: 680, y: 430,size:70},
		"yellow_slot6": {type: "slot", bitmap:"slotFactory",x: 750, y: 430,size:70},
		
		//green
		"green_slot1": {type: "slot", bitmap:"slotFactory",x: 400, y: 520,size:70},
		"green_slot2": {type: "slot", bitmap:"slotFactory",x: 470, y: 520,size:70},
		"green_slot3": {type: "slot", bitmap:"slotFactory",x: 540, y: 520,size:70},
		"green_slot4": {type: "slot", bitmap:"slotFactory",x: 610, y: 520,size:70},
		"green_slot5": {type: "slot", bitmap:"slotFactory",x: 680, y: 520,size:70},
		"green_slot6": {type: "slot", bitmap:"slotFactory",x: 750, y: 520,size:70}
		
	}
});

TileEntity.registerPrototype(BlockID.pipeItemDiamond,{
	getGuiScreen: function(){
		return ui_pipe_diamond;
	},
	reloadFilter:function(){
		this.data.filter=null;
		var all=["white","black","red","blue","yellow","green"];
		for(var i in all){
			var dir = all[i];
			for(var s=1;s<7;s++){
				var slot = this.container.getSlot(dir+"_slot"+s);
				if(!this.data.filter)this.data.filter={
					white:{length:0},
					black:{length:0},
					red:{length:0},
					blue:{lengtg:0},
					yellow:{length:0},
					green:{length:0}
				}
				this.data.filter[dir][slot.id+":"+slot.data]=true
				this.data.filter[dir]["length"]++;
			}
		}
	},
	
	getTransportingDirections: function(item){
		this.reloadFilter();
		var dir = null;
		var freedir = null;
		for(var i in this.data.filter){
			var d=this.data.filter[i];
			if(d[item.item.id+":"+item.item.data]){
				dir=i;
				break;
			}
			if(d.length==0&&!freedir){
				freedir=i;
			}
		}
		if(dir){
			switch(dir){
				case "white": return [Pipe.directions[3]]
				case "black": return [Pipe.directions[2]]
				case "blue": return [Pipe.directions[5]]
				case "red": return [Pipe.directions[4]]
				case "yellow": return [Pipe.directions[1]]
				case "green": return [Pipe.directions[0]]
			}
		}
		if(freedir) {
			switch(freedir){
				case "white": return [Pipe.directions[3]]
				case "black": return [Pipe.directions[2]]
				case "blue": return [Pipe.directions[5]]
				case "red": return [Pipe.directions[4]]
				case "yellow": return [Pipe.directions[1]]
				case "green": return [Pipe.directions[0]]
			}
		}
	}
});




// file: common/tile/pipe/Item_sandstone.js

Translation.addTranslation("Sandstone Transport Pipe", {
	ru: "Песчаниковая транспортная труба"
});
IDRegistry.genBlockID("pipeItemSandstone"); 
Block.createBlock("pipeItemSandstone", [
	{name: "Sandstone Transport Pipe", texture: [["pipe_sandstone",0]], inCreative: true}
]);

Recipes.addShaped({id: BlockID.pipeItemSandstone,count: 4,data: 0}, [ 
	"aba"
],[
	'a', 24,-1,
	'b', 20,0
]); 
/*
FactAPI.recipe.assemblerStation.register(BlockID.pipeItemSandstone, 0, [
	{ id: 24, data:-1, count: 2},
	{ id: 20, data: 0, count: 1}
]); */

FactAPI.render.setupWireasRender(BlockID.pipeItemSandstone,0.5,[
	{name:"item-wood-pipe",add:false},
	{name:"item-item-pipe",add:false},
	{name:"item-sandstone-pipe",add:true}
]);

Pipe.registerTile(BlockID.pipeItemSandstone,{
	friction:0.005,
	stopContainerAdding:true,
	getTransportingDirections: function(item){
		var pos = item.position;
		var dir = item.direction;
		var list = Pipe.findDirections(pos.x, pos.y, pos.z,true);
		var res = Pipe.filterDirections(list, dir);
		return res
	}
});




// file: common/tile/pipe/Liquid_wood.js

Translation.addTranslation("Wooden Liquid Pipe", {
	ru: "Деревянная жидкостная труба"
});

IDRegistry.genBlockID("pipeLiquidWood");
Block.createBlock("pipeLiquidWood", [
	{name: "Wooden Liquid Pipe", texture: [["pipe_liquid_wood", 0]], inCreative: Options.rendering}
]);
PAPI.registerPipe(BlockID.pipeLiquidWood, 0.2, 0.5, ["liquid-pipe"], false)
TileEntity.registerPrototype(BlockID.pipeLiquidWood, PAPI.registerExtractor(BlockID.pipeLiquidWood, 0.2))

Recipes.addShaped({id: BlockID.pipeLiquidWood,count: 4,data: 0}, [ 
	"a",
	"b"
],[
	'a', ItemID.pipeSealant,0,
	'b', BlockID.pipeItemWooden,0
]); 




// file: common/tile/pipe/Liquid_quartz.js

Translation.addTranslation("Quartz Liquid Pipe", {
	ru: "Кварцевая жидкостная труба"
});
IDRegistry.genBlockID("pipeLiquidQuartz");
Block.createBlock("pipeLiquidQuartz", [
	{name: "Quartz Liquid Pipe", texture: [["pipe_liquid_quartz", 0]], inCreative: true}
]);
PAPI.registerPipe(BlockID.pipeLiquidQuartz, 4, 0.5, ["liquid-pipe"], Options.rendering)
Recipes.addShaped({id: BlockID.pipeLiquidQuartz,count: 4,data: 0}, [ 
	"a",
	"b"
],[
	'a', ItemID.pipeSealant,0,
	'b', BlockID.pipeItemQuartz,0
]); 




// file: common/tile/pipe/Liquid_emerald.js

Translation.addTranslation("Emerald Liquid Pipe", {
	ru: "Изумрудная жидкостная труба"
});

IDRegistry.genBlockID("pipeLiquidEmerald");
Block.createBlock("pipeLiquidEmerald", [
	{name: "Emerald Liquid Pipe", texture: [["pipe_liquid_emerald", 0]], inCreative: true}
]);
PAPI.registerPipe(BlockID.pipeLiquidEmerald, 2, 0.5, ["liquid-pipe"], Options.rendering)
TileEntity.registerPrototype(BlockID.pipeLiquidEmerald, PAPI.registerExtractor(BlockID.pipeLiquidEmerald, 2))
Recipes.addShaped({id: BlockID.pipeLiquidEmerald,count: 4,data: 0}, [ 
	"a",
	"b"
],[
	'a', ItemID.pipeSealant,0,
	'b', BlockID.pipeItemEmerald,0
]); 




// file: common/tile/pipe/Liquid_stone.js

Translation.addTranslation("Stone Liquid Pipe", {
	ru: "Каменная жидкостная труба"
});

IDRegistry.genBlockID("pipeLiquidStone");
Block.createBlock("pipeLiquidStone", [
	{name: "Stone Liquid Pipe", texture: [["pipe_liquid_stone", 0]], inCreative: true}
]);

PAPI.registerPipe(BlockID.pipeLiquidStone, 0.4, 0.5, ["liquid-pipe"], Options.rendering)

Recipes.addShaped({id: BlockID.pipeLiquidStone,count: 4,data: 0}, [ 
	"a",
	"b"
],[
	'a', ItemID.pipeSealant,0,
	'b', BlockID.pipeItemStone,0
]); 




// file: common/tile/redstone/Redstone_breaker.js

Translation.addTranslation("Redstone Block Destroyer", {
    ru: "Редстоун разрушитель блоков"
});

IDRegistry.genBlockID("machineRedstoneDestroyer");
Block.createBlockWithRotation("machineRedstoneDestroyer", [{
    name: "Redstone Block Destroyer",
    texture: [
		["block_machine_stone", 0],
		["block_machine_stone", 0],
		["block_machine_stone", 0],
		["redstone_breaker", 0],
		["block_machine_stone", 0],
		["block_machine_stone", 0]
    ],
    inCreative: true
}], "opaque");

Recipes.addShaped({
    id: BlockID.machineRedstoneDestroyer,
    count: 1,
    data: 0
}, [
	"b",
	"a",
], [
	'a', BlockID.blockMachineStone, 0,
	'b', 257, 0
]);

var UI_redstone_destroyer = new UI.StandartWindow({
    standart: {
        header: {
            text: {
                text: "Redstone Block Destroyer/Редстоун разрушитель блоков"
            },
        },
        minHeight: 700,
        inventory: {
            standart: true
        },
        background: {
            standart: true
        }
    },
    params: {
        slot: "slotFactory",
        invSlot: "slotFactory",
        selection: "selectionFactory"
    },
    drawing: [{
        type: "bitmap",
        x: 0,
        y: 0,
        bitmap: "gui_ground",
        scale: 8
    },
    ],
    elements: {
        "slot1": { type: "slot", x: 435, y: 110, size: 80 },
        "slot2": { type: "slot", x: 515, y: 110, size: 80 },
        "slot3": { type: "slot", x: 595, y: 110, size: 80 },
        "slot4": { type: "slot", x: 435, y: 190, size: 80 },
        "slot5": { type: "slot", x: 515, y: 190, size: 80 },
        "slot6": { type: "slot", x: 595, y: 190, size: 80 },
        "slot7": { type: "slot", x: 435, y: 270, size: 80 },
        "slot8": { type: "slot", x: 515, y: 270, size: 80 },
        "slot9": { type: "slot", x: 595, y: 270, size: 80 }
    }
});




// file: common/tile/energy/generator/Generator_solar.js

Translation.addTranslation("Solar Panel", {
	ru: "Солнечная батарея"
});

var solar_texture={
	side:"block_machine_iron",
	top:"block_energy_solar"
}

if(Options.theme){
	solar_texture.top="light_solar";
	solar_texture.side="light_iron_machine";
}

IDRegistry.genBlockID("machineEnergyGeneratorSolar");
Block.createBlock("machineEnergyGeneratorSolar", [
	{
		name: "Solar Panel", texture: [
			[solar_texture.side, 0],[solar_texture.top, 0],
			[solar_texture.side, 0], [solar_texture.side, 0],
			[solar_texture.side, 0], [solar_texture.side, 0]
		],
		inCreative: true
	}
]);

Block.setBlockShape(BlockID.machineEnergyGeneratorSolar, {
	x: 0,
	y: 0,
	z: 0
},{
	x: 1,
	y: 0.2,
	z: 1
});

Recipes.addShaped({id: BlockID.machineEnergyGeneratorSolar, count: 1, data: 0}, [
	"aaa",
	"bbb",
	" c "
],[
	'a',20,0,
	'b',263,-1,
	'c',BlockID.blockMachineIron,0
]);

	
FactAPI.machine.registerEnergyTile(BlockID.machineEnergyGeneratorSolar, {
	isGenerator: function() {
		return true;
	},
	energyTick: function(type, src){
		var light=World.getLightLevel(this.x, this.y + 1, this.z);
		if (light >= 15) {
			src.add(1);
		}
		//TODO: Nuclear sun 10B
	}
});




// file: common/tile/energy/generator/Generator_moon.js

Translation.addTranslation("Moon Panel", {
	ru: "Лунная батарея"
});

var moon_texture={
	side:"block_machine_iron",
	top:"block_energy_moon"
}

if(Options.theme){
	moon_texture.top="light_moon";
	moon_texture.side="light_iron_machine";
}

IDRegistry.genBlockID("machineEnergyGeneratorMoon");
Block.createBlock("machineEnergyGeneratorMoon", [
	{
		name: "Moon Panel", texture: [
			[moon_texture.side, 0], [moon_texture.top, 0],
			[moon_texture.side, 0], [moon_texture.side, 0],
			[moon_texture.side, 0], [moon_texture.side, 0]
		],
		inCreative: true
	}
]);

Block.setBlockShape(BlockID.machineEnergyGeneratorMoon, {
	x: 0,
	y: 0,
	z: 0
},{
	x: 1,
	y: 0.2,
	z: 1
});

Recipes.addShaped({
	id: BlockID.machineEnergyGeneratorMoon,
	count: 1,
	data: 0
}, [
	"aaa",
	"bbb",
	" c "
],[
	'a',20,0,
	'b',263,-1,
	'c',BlockID.blockMachineIron,0
]);

	
FactAPI.machine.registerEnergyTile(BlockID.machineEnergyGeneratorMoon, {
	isGenerator: function() {
		return true;
	},
	energyTick: function(type, src){
		var light=World.getLightLevel(this.x, this.y + 1, this.z);
		if (light <= 10&&light>=0) {
			src.add(1);
		}
		//TODO: Nuclear sun 10B
	}
});




// file: common/tile/energy/generator/Generator_star.js

Translation.addTranslation("Star Panel", {
	ru: "Звездная батарея"
});

var star_texture={
	side:"block_machine_iron",
	top:"block_energy_star"
}

if(Options.theme){
	star_texture.top="light_star";
	star_texture.side="light_iron_machine";
}

IDRegistry.genBlockID("machineEnergyGeneratorStar");
Block.createBlock("machineEnergyGeneratorStar", [
	{
		name: "Star Panel", texture: [
			[star_texture.side, 0], [star_texture.top, 0],
			[star_texture.side, 0], [star_texture.side, 0],
			[star_texture.side, 0], [star_texture.side, 0]
		],
		inCreative: true
	}
]);

Block.setBlockShape(BlockID.machineEnergyGeneratorStar,{
	x: 0,
	y: 0,
	z: 0
},{
	x: 1,
	y: 0.2,
	z: 1
});

Recipes.addShaped({
	id: BlockID.machineEnergyGeneratorStar,
	count: 1,
	data: 0
}, [
	"a",
	"b"
],[
	'a',BlockID.machineEnergyGeneratorSolar,0,
	'b',BlockID.machineEnergyGeneratorMoon,0
]);

	
FactAPI.machine.registerEnergyTile(BlockID.machineEnergyGeneratorStar, {
	isGenerator: function() {
		return true;
	},
	energyTick: function(type, src){
		var light=World.getLightLevel(this.x, this.y + 1, this.z);
		if (light>=0) {
			src.add(1);
		}
		//TODO: Nuclear sun 10B
	}
});




// file: common/tile/energy/generator/Generator_wind.js

Translation.addTranslation("Windmill", {
	ru: "Ветряк"
});

var windmill_texture={
	side:"block_machine_iron",
	front:"block_energy_millwind"
}

if(Options.theme){
	windmill_texture.front="light_millwind";
	windmill_texture.side="light_iron_machine";
}

IDRegistry.genBlockID("machineEnergyGeneratorWind");
Block.createBlockWithRotation("machineEnergyGeneratorWind", [
	{name: "Windmill", texture: [
		[windmill_texture.side,0],[windmill_texture.side, 0],
		[windmill_texture.side,0],[windmill_texture.front,0],
		[windmill_texture.side,0],[windmill_texture.side,0]
	], inCreative: true}
],"opaque");

Recipes.addShaped({id: BlockID.machineEnergyGeneratorWind, count: 1, data: 0}, [
	" c ",
	"cbc",
	" a ",
], [
	'a', BlockID.blockMachineIron,0,
	'b',280,0,
	'c',265,0
]);

FactAPI.machine.registerEnergyTile(BlockID.machineEnergyGeneratorWind, {
	defaultValues: {
		output: 0
	},
	
	isGenerator: function() {
		return true;
	},

	energyTick: function(type, src){
		if(World.getThreadTime()%1 == 0){
			var output = 1;
			if(this.y>60)output+=2;
			var wether = World.getWeather();
			if(wether.thunder){output *= 5;}
			else if(wether.rain){output *= 1.5;}
			var radius = 3;
			if(World.getBlockID(
					this.x - Random.integer(-radius, radius),
					this.y - Random.integer(-radius, radius),
					this.z - Random.integer(-radius, radius)
				) == 0){
				this.data.output = Math.round(output);
			}else{this.data.output = 0;}
		}
		src.add(Math.min(10,this.data.output));
	}
});




// file: common/tile/energy/generator/Generator_fuel.js

Translation.addTranslation("Fuel Generator", {
	ru: "Топливный генератор"
});

var genfuel_texture={
	side:"block_machine_iron",
	front:"block_energy_genfuel"
}

if(Options.theme){
	genfuel_texture.front="light_genfuel";
	genfuel_texture.side="light_iron_machine";
}

IDRegistry.genBlockID("machineEnergyGeneratorFuel");
Block.createBlockWithRotation("machineEnergyGeneratorFuel", [
	{
		name: "Fuel Generator",
		texture: [
			[genfuel_texture.side,0],
			[genfuel_texture.side, 0],
			[genfuel_texture.side,0],
			[genfuel_texture.front,0],
			[genfuel_texture.side,0],
			[genfuel_texture.side,0]
		],
		inCreative: true
	}
],"opaque");

Recipes.addShaped({
	id: BlockID.machineEnergyGeneratorFuel, 
	count: 1, 
	data: 0
}, [
	" b ",
	" a ",
	" c "
], [
	'a', BlockID.blockMachineIron,0,
	'b', 61,0,
	'c', ItemID.factoryBattery,0
]);

var ui_generatorfuel = new UI.StandartWindow({
	standart: {
		header: {text: {text: "Fuel Generator/Топливный генератор"}},
		inventory: {standart: true},
		background: {standart: true}
	},
	params: { 
	slot: "slotFactory", 
	invSlot: "slotFactory", 	
	selection: "selectionFactory"
	},
	
	drawing: [
		{type: "bitmap", x: 0, y: 0, bitmap: "gui_ground", scale: 8},
		{type: "bitmap", x: 350, y: 50, bitmap: "energybar.ground", scale: 2.6},
		{type: "bitmap", x: 450, y: 150, bitmap: "fire.ground", scale: 4.5},
	],
	
	elements: {
		"energyScale": {type: "scale", x: 350 , y: 50, direction: 1, bitmap: "energybar.scale", scale: 2.6},
		"burningScale": {type: "scale", x: 450, y: 150, direction: 1, bitmap: "fire.scale", scale: 4.5},
		"slotFuel": {type: "slot", x: 450, y: 210},
	}
});

FactAPI.machine.registerEnergyTile(BlockID.machineEnergyGeneratorFuel, {
	defaultValues: {
		burn: 0,
		burnMax: 0
	},
	getGuiScreen: function(){
		return ui_generatorfuel;
	},
	
	getTransportSlots: function(){
		return {input: ["slotFuel"]};
	},
	
	getFuel: function(slotName){
		var fuelSlot = this.container.getSlot(slotName);
		if (fuelSlot.id > 0){
			var burn = Recipes.getFuelBurnDuration(fuelSlot.id, fuelSlot.data);
			if (burn && !LiquidRegistry.getItemLiquid(fuelSlot.id, fuelSlot.data)){
				fuelSlot.count--;
				this.container.validateSlot(slotName);
				return burn;
			}
		}
		return 0;
	},
	
	tick: function(){
		var energyStorage = this.getEnergyStorage();
		if(this.data.burn <= 0){
			this.data.burn = this.data.burnMax = this.getFuel("slotFuel") / 4;
		}
		if(this.data.burn > 0 && this.data.energy < energyStorage){
			this.data.energy = Math.min(this.data.energy + 2, energyStorage);
			this.data.burn-=0.5;
		}
		this.container.setScale("burningScale", this.data.burn / this.data.burnMax || 0);
		this.container.setScale("energyScale", this.data.energy / energyStorage);
	},
	
	isGenerator: function() {
		return true;
	},
	
	getEnergyStorage: function(){
		return 1000;
	},
	
	energyTick: function(type, src){
		var output = Math.min(2, this.data.energy);
		this.data.energy += src.add(output) - output;
	},
},{
	item:true
});




// file: common/tile/energy/miner/Miner_destroyer.js

/*
	Block Destroyer
	- added in 1.0
*/

Translation.addTranslation("Block Destroyer", {
	ru: "Разрушитель блоков"
});

var destroyer_texture={
	top:"block_energy_destroyer",
	side:"block_machine_iron"
}

if(Options.theme){
	destroyer_texture.top="light_destroyer";
	destroyer_texture.side="light_iron_machine";
}

IDRegistry.genBlockID("machineEnergyMinerDestroyer");
Block.createBlock("machineEnergyMinerDestroyer", [{
	name: "Block Destroyer",
	texture: [
		[destroyer_texture.side, 0],
		[destroyer_texture.top, 0],
		[destroyer_texture.side, 0],
		[destroyer_texture.side, 0],
		[destroyer_texture.side, 0],
		[destroyer_texture.side, 0]
	],
	inCreative: true
}], "opaque");


Recipes.addShaped({
	id: BlockID.machineEnergyMinerDestroyer,
	count: 1,
	data: 0
}, [
	"c",
	"a",
	"b",
], [
	'a', BlockID.blockMachineIron, 0,
	'b', 257, 0,
	'c', ItemID.factoryBattery,0
]);


var UI_energy_destroyer = new UI.StandartWindow({
	standart: {
		header: {
			text: {
				text: "Block Destroyer/Разрушитель блоков"
			},
		},
		minHeight: 700,
		inventory: {
			standart: true
		},
		background: {
			standart: true
		}
	},
	params: {
		slot: "slotFactory",
		invSlot: "slotFactory",
		selection: "selectionFactory"
	},
	drawing: [{
			type: "bitmap",
			x: 0,
			y: 0,
			bitmap: "gui_ground",
			scale: 8
		},
		{
			type: "bitmap",
			x: 350,
			y: 50,
			bitmap: "energybar.ground",
			scale: 2.6
		},
	],
	elements: {
		"slot1": { type: "slot", x: 435, y: 110, size: 80},
		"slot2": { type: "slot", x: 515, y: 110, size: 80},
		"slot3": { type: "slot", x: 595, y: 110, size: 80},
		"slot4": { type: "slot", x: 435, y: 190, size: 80},
		"slot5": { type: "slot", x: 515, y: 190, size: 80},
		"slot6": { type: "slot", x: 595, y: 190, size: 80},
		"slot7": { type: "slot", x: 435, y: 270, size: 80},
		"slot8": { type: "slot", x: 515, y: 270, size: 80},
		"slot9": { type: "slot", x: 595, y: 270, size: 80},
		"energyScale": {
			type: "scale",
			x: 350,
			y: 50,
			direction: 1,
			scale: 2.6,
			bitmap: "energybar.scale"
		}
	}
});

FactAPI.machine.registerEnergyTile(BlockID.machineEnergyMinerDestroyer, {
	getGuiScreen: function () {
		return UI_energy_destroyer;
	},
	getEnergyStorage: function () {
		return 1000
	},
	getTransportSlots: function () {
		slotOut = [];
		for (var i = 1; i < 10; i++) {
			slotOut.push("slot" + i);
		}
		return {
			input: [],
			output: slotOut
		};
	},
	putChest: function (item) {
		var a = FactAPI.machineContainer.addItemToContainer(this.container, item, 10);
		if (a) World.drop(this.x + 0.5, this.y + 1, this.z + 0.5, item.id, item.count, item.data);
	},
	tick: function () {
		if (this.data.energy >= (5) && World.getThreadTime() % (20) == 0) {
			block = World.getBlock(this.x, this.y - 1, this.z);
			if (!(block.id == 7 || block.id == 0 || block.id == 8 || block.id == 9 || block.id == 10 || block.id == 11)) {
				coords = {
					x: this.x,
					y: this.y - 1,
					z: this.z
				};
				var drop = FactAPI.getBlockDrop(coords, block.id, block.data, 257);
				World.destroyBlock(this.x, this.y - 1, this.z);
				for (var i in drop) {
					this.putChest({
						id: drop[i][0],
						count: drop[i][1],
						data: drop[i][2]
					});
				}
				this.data.energy -= (5);
				return
			}
		}
		this.container.setScale("energyScale", this.data.energy / this.getEnergyStorage());
		return
	},
	energyTick: FactAPI.machine.basicEnergyStorage
}, {
	item: true
});




// file: common/tile/energy/miner/Miner_miner.js

Translation.addTranslation("Miner", {
	ru: "Автобур"
});

var miner_texture={
	top:"block_machine_iron",
	bottom:"block_machine_iron",
	side:"block_machine_iron",
	back:"block_machine_iron",
	front:"block_energy_miner"
}

if(Options.theme){
	miner_texture.top="light_iron_machine";
	miner_texture.bottom="light_miner_bottom";
	miner_texture.back="light_miner_back";
	miner_texture.side="light_miner_side";
	miner_texture.front="light_miner_front";
}

IDRegistry.genBlockID("machineEnergyMiner");
Block.createBlockWithRotation("machineEnergyMiner", [{
	name: "Miner",
	texture: [
		[miner_texture.bottom,0],
		[miner_texture.top, 0],
		[miner_texture.back,0],
		[miner_texture.front,0],
		[miner_texture.side,0],
		[miner_texture.side,0]
	],
	inCreative: true
}], "opaque");


Recipes.addShaped({
	id: BlockID.machineEnergyMiner,
	count: 1,
	data: 0
}, [
	" a ", 
	"aba", 
	" a "
], [
	'b', BlockID.machineEnergyMinerDestroyer, 0,
	'a', ItemID.gearIron, 0
]);

var UI_energy_miner = new UI.StandartWindow({
	standart: {
		header: {
			text: {
				text: "Miner/Автобур"
			},
		},
		minHeight: 700,
		inventory: {
			standart: true
		},
		background: {
			standart: true
		}
	},
	params: {
		slot: "slotFactory",
		invSlot: "slotFactory",
		selection: "selectionFactory"
	},
	drawing: [{
			type: "bitmap",
			x: 0,
			y: 0,
			bitmap: "gui_ground",
			scale: 8
		},
		{
			type: "bitmap",
			x: 350,
			y: 50,
			bitmap: "energybar.ground",
			scale: 2.6
		},
	],
	elements: {
		"slot1": { type: "slot", x: 435, y: 110, size: 80},
		"slot2": { type: "slot", x: 515, y: 110, size: 80},
		"slot3": { type: "slot", x: 595, y: 110, size: 80},
		"slot4": { type: "slot", x: 435, y: 190, size: 80},
		"slot5": { type: "slot", x: 515, y: 190, size: 80},
		"slot6": { type: "slot", x: 595, y: 190, size: 80},
		"slot7": { type: "slot", x: 435, y: 270, size: 80},
		"slot8": { type: "slot", x: 515, y: 270, size: 80},
		"slot9": { type: "slot", x: 595, y: 270, size: 80},
		"energyScale": {
			type: "scale",
			x: 350,
			y: 50,
			direction: 1,
			scale: 2.6,
			bitmap: "energybar.scale"
		}
	}
});

FactAPI.machine.registerEnergyTile(BlockID.machineEnergyMiner, {
	getGuiScreen: function () {
		return UI_energy_miner
	},
	getEnergyStorage: function () {
		return 1000
	},
	getTransportSlots: function () {
		slotOut = [];
		for (var i = 1; i < 10; i++) {
			slotOut.push("slot" + i);
		}
		return {
			input: [],
			output: slotOut
		};
	},
	putChest: function (item) {
		a = FactAPI.machineContainer.addItemToContainer(this.container, item, 10);
		if (a) World.drop(this.x + 0.5, this.y + 1, this.z + 0.5, item.id, item.count, item.data);
	},
	tick: function () {
		if (this.data.energy >= (10) && World.getThreadTime() % (20) == 0) {
			for (var y = 1; y < this.y; y++) {
				block = World.getBlock(this.x, this.y - y, this.z);
				if (!(block.id == 7 || block.id == 0 || block.id == 8 || block.id == 9 || block.id == 10 || block.id == 11)) {
					coords = {
						x: this.x,
						y: this.y - y,
						z: this.z
					};
					var drop = FactAPI.getBlockDrop(coords, block.id, block.data, 257);
					World.destroyBlock(this.x, this.y - y, this.z);
					for (var i in drop) {
						this.putChest({
							id: drop[i][0],
							count: drop[i][1],
							data: drop[i][2]
						});
					}
					this.data.energy -= (10);
					return
				}
			}
		}
		this.container.setScale("energyScale", this.data.energy / this.getEnergyStorage());
		return
	},
	energyTick: FactAPI.machine.basicEnergyStorage
}, {
	item: true
});




// file: common/tile/energy/miner/Miner_quarry.js

Translation.addTranslation("Quarry", {
	ru: "Автокарьер"
});

var quarry_texture={
	top:"block_machine_iron",
	bottom:"block_machine_iron",
	side:"block_machine_iron",
	back:"block_machine_iron",
	front:"block_energy_quarry"
}

if(Options.theme){
	quarry_texture.top="light_iron_machine";
	quarry_texture.bottom="light_quarry_bottom";
	quarry_texture.back="light_quarry_back";
	quarry_texture.side="light_quarry_side";
	quarry_texture.front="light_quarry_front";
}


IDRegistry.genBlockID("machineEnergyMinerQuarry");
Block.createBlockWithRotation("machineEnergyMinerQuarry", [
	{
		name:"Quarry",
		texture: [
			[quarry_texture.bottom,0],
			[quarry_texture.top, 0],
			[quarry_texture.back,0],
			[quarry_texture.front,0],
			[quarry_texture.side,0],
			[quarry_texture.side,0]
		],
		inCreative: true
	}
],"opaque");

Recipes.addShaped({
	id: BlockID.machineEnergyMinerQuarry,
	count: 1,
	data: 0
}, [
	" a ",
	"aba",
	" a "
], [
	'a', ItemID.gearDiamond, 0,
	'b', BlockID.machineEnergyMiner,0
]);

var UI_energy_quarry = new UI.StandartWindow({
	standart: {
		header: {
			text: {
				text: "Quarry/Автокарьер"
			},
		},
		minHeight: 700,
		inventory: {
			standart: true
		},
		background: {
			standart: true
		}
	},
	params: {
		slot: "slotFactory",
		invSlot: "slotFactory",
		selection: "selectionFactory"
	},
	drawing: [{
			type: "bitmap",
			x: 0,
			y: 0,
			bitmap: "gui_ground",
			scale: 8
		},
		{
			type: "bitmap",
			x: 350,
			y: 50,
			bitmap: "energybar.ground",
			scale: 2.6
		},
	],
	elements: {
		"slot1": {type: "slot", x: 470, y: 60, size: 70},
		"slot2": {type: "slot", x: 540, y: 60, size: 70},
		"slot3": {type: "slot", x: 610, y: 60, size: 70},
		"slot4": {type: "slot", x: 680, y: 60, size: 70},
		"slot5": {type: "slot", x: 750, y: 60, size: 70},
		"slot6": {type: "slot", x: 820, y: 60, size: 70},
		"slot7": {type: "slot", x: 890, y: 60, size: 70},
		"slot8": {type: "slot", x: 470, y: 130, size: 70},
		"slot9": {type: "slot", x: 540, y: 130, size: 70},
		"slot10": {type: "slot", x: 610, y: 130, size: 70},
		"slot11": {type: "slot", x: 680, y: 130, size: 70},
		"slot12": {type: "slot", x: 750, y: 130, size: 70},
		"slot13": {type: "slot", x: 820, y: 130, size: 70},
		"slot14": {type: "slot", x: 890, y: 130, size: 70},
		"slot15": {type: "slot", x: 470, y: 200, size: 70},
		"slot16": {type: "slot", x: 540, y: 200, size: 70},
		"slot17": {type: "slot", x: 610, y: 200, size: 70},
		"slot18": {type: "slot", x: 680, y: 200, size: 70},
		"slot19": {type: "slot", x: 750, y: 200, size: 70},
		"slot20": {type: "slot", x: 820, y: 200, size: 70},
		"slot21": {type: "slot", x: 890, y: 200, size: 70},
		"slot22": {type: "slot", x: 470, y: 270, size: 70},
		"slot23": {type: "slot", x: 540, y: 270, size: 70},
		"slot24": {type: "slot", x: 610, y: 270, size: 70},
		"slot25": {type: "slot", x: 680, y: 270, size: 70},
		"slot26": {type: "slot", x: 750, y: 270, size: 70},
		"slot27": {type: "slot", x: 820, y: 270, size: 70},
		"slot28": {type: "slot", x: 890, y: 270, size: 70},
		"energyScale": {
			type: "scale",
			x: 350,
			y: 50,
			direction: 1,
			scale: 2.6,
			bitmap: "energybar.scale"
		}
	}
});

FactAPI.machine.registerEnergyTile(BlockID.machineEnergyMinerQuarry,{
	getGuiScreen:function(){
		return UI_energy_quarry
	},
	getEnergyStorage:function(){
		return 10000
	},
	click:function(){
		this._getGuiScreen?this.getGuiScreen=this._getGuiScreen:null;
		if(ItemDictionary.isItemInCathegory(Player.getCarriedItem().id,"wrench")){
			this._getGuiScreen = this.getGuiScreen
			this.getGuiScreen=function(){return null};
			
			if(FactAPI.Marker.crd.length==4){
				var b = FactAPI.Marker.checkNearest(this.x,this.y,this.z);
				if(b){
					var c = FactAPI.Marker.getHeighMap();
					this.data.minX=c.minX;
					this.data.maxX=c.maxX;
					this.data.minZ=c.minZ;
					this.data.maxZ=c.maxZ;
					this.data.maxY=c.maxY;
					
					for(var i in FactAPI.Marker.crd)World.destroyBlock(FactAPI.Marker.crd[i].x,FactAPI.Marker.crd[i].y,FactAPI.Marker.crd[i].z,true);
					this.buildFrame();
					FactAPI.Marker.clearList();
					}
				}
			}
		},
		
		buildFrame:function(){
			var c = FactAPI.Marker.getHeighMap();
			for(var i =c.minX;i<=c.maxX;i++){
				World.setBlock(i,this.y,c.minZ,BlockID.fcFrame);
				World.setBlock(i,this.y,c.maxZ,BlockID.fcFrame);
				World.setBlock(i,Math.max(c.maxY,this.y+3),c.minZ,BlockID.fcFrame);
				World.setBlock(i,Math.max(c.maxY,this.y+3),c.maxZ,BlockID.fcFrame);
			}
			for(var i =c.minZ;i<=c.maxZ;i++){
				World.setBlock(c.minX,this.y,i,BlockID.fcFrame);
				World.setBlock(c.maxX,this.y,i,BlockID.fcFrame);
				World.setBlock(c.minX,Math.max(c.maxY,this.y+3),i,BlockID.fcFrame);
				World.setBlock(c.maxX,Math.max(c.maxY,this.y+3),i,BlockID.fcFrame);
			}
			for(var y=this.y;y<=Math.max(c.maxY,this.y+3);y++){
				World.setBlock(c.minX,y,c.minZ,BlockID.fcFrame);
				World.setBlock(c.minX,y,c.maxZ,BlockID.fcFrame);
				World.setBlock(c.maxX,y,c.maxZ,BlockID.fcFrame);
				World.setBlock(c.maxX,y,c.minZ,BlockID.fcFrame);
			}
		},
		
		getTransportSlots: function () {
			var slotOut=[];
			for(var i=1;i<29;i++){
				slotOut.push("slot"+i);
			}
			return {input: [], output:slotOut};
		},
		putChest: function(item){
			var a=FactAPI.machineContainer.addItemToContainer(this.container,item);
			if(a)World.drop(this.x+0.5, this.y+1, this.z+0.5, item.id, item.count, item.data);
		},
	tick:function(){
		if(!this.data.minX)return
		if(!this.data.digX){
			this.data.digY=this.data.maxY-1;
			this.data.digX=this.data.minX;
			this.data.digZ=this.data.minZ+1;
		
		}
		if(!this.data.complete)this.data.complete=false;
		
		
		if (this.data.energy >= 200 && World.getThreadTime() % 20 == 0) {
			this.updateDig();
			this.destroyDigBlock();
			this.data.energy -= 200;
		}
		this.container.setScale("energyScale", this.data.energy/this.getEnergyStorage());
		return
	},
	
	
	updateDig:function(){
		if(this.data.digX++>this.data.maxX-2){
			this.data.digX=this.data.minX+1;
			if(this.data.digZ++>this.data.maxZ-2){
				this.data.digZ=this.data.minZ+1;
				this.data.digX=this.data.minX+1;

				if(this.data.digY--<0){
					this.data.complete=true;
				}
			}
		}
	},
	
	
	
	destroyDigBlock:function(){
		var block = World.getBlock(this.data.digX, this.data.digY, this.data.digZ);
		if (block.id==0||block.id == 7 || block.id == 8 || block.id == 9 || block.id == 10 || block.id == 11){
			this.updateDig();
			this.destroyDigBlock();
			return
		}
		var coords={x:this.data.digX,y:this.data.digY,z:this.data.digZ};
			var drop = FactAPI.getBlockDrop(coords, block.id, block.data, 257);
			World.destroyBlock(this.data.digX,this.data.digY,this.data.digZ);
			for(var i in drop){
				this.putChest({id:drop[i][0],count:drop[i][1],data:drop[i][2]});
			}
	},
	
	
	
	energyTick:FactAPI.machine.basicEnergyStorage
	},{item:true});




// file: common/tile/energy/thermal/Thermal_magma.js

Translation.addTranslation("Magma Generator", {
	ru: "Магмовый генератор"
});

var genmagma_texture={
	side:"block_machine_iron",
	front:"block_energy_magma"
}

if(Options.theme){
	genmagma_texture.front="light_magma";
	genmagma_texture.side="light_iron_machine";
}

IDRegistry.genBlockID("machineEnergyGeneratorMagma");
Block.createBlockWithRotation("machineEnergyGeneratorMagma", [
	{name: "Magma Generator", texture: [
		[genmagma_texture.side,0],[genmagma_texture.side, 0],
		[genmagma_texture.side,0],[genmagma_texture.front,0],
		[genmagma_texture.side,0],[genmagma_texture.side,0]
	], inCreative: true}
],"opaque");

Recipes.addShaped({
	id: BlockID.machineEnergyGeneratorMagma,
	count: 1,
	data: 0
}, [
	"eee",
	"ece",
	"eae"
], [
	'a', BlockID.blockMachineIron,0,
	'c',378,0,
	'e',49,0
]);

FactAPI.machine.registerEnergyTile(BlockID.machineEnergyGeneratorMagma, {
	isGenerator: function() {
		return true;
	},
	isBuild:function(){
		var struct=[
			[-1,0,-1],[-1,0,1],[1,0,-1],[1,0,1],
			[-1,-1,-1],[-1,-1,1],[1,-1,-1],[1,-1,1]
		];
		for(var i in struct){
			var a=World.getBlockID(this.x+struct[i][0],this.y+struct[i][1],this.z+struct[i][2]);
			if(a!=10&&a!=11)return false;
		}
		return true
	},
	energyTick:function(type,src){
		var a=this.isBuild();
		if(a){
			src.add(5);
		}
	}
});




// file: common/tile/energy/thermal/Thermal_geothermal.js

Translation.addTranslation("Geothermal Generator", {
	ru: "Геотермальный генератор"
});

var geothermal_texture={
	side:"block_machine_iron",
	front:"block_energy_geothermal"
}

if(Options.theme){
	geothermal_texture.front="light_geothermal";
	geothermal_texture.side="light_iron_machine";
}

IDRegistry.genBlockID("machineEnergyGeneratorGeothermal");
Block.createBlockWithRotation("machineEnergyGeneratorGeothermal", [
	{name: "Geothermal Generator", texture: [
		[geothermal_texture.side,0],[geothermal_texture.side, 0],
		[geothermal_texture.side,0],[geothermal_texture.front,0],
		[geothermal_texture.side,0],[geothermal_texture.side,0]
	], inCreative: true}
],"opaque");

Recipes.addShaped({
	id: BlockID.machineEnergyGeneratorGeothermal, 
	count: 1, 
	data: 0
}, [
	"bcb",
	"bab",
	"bbb"
], [
	'a', BlockID.blockMachineIron,0,
	'b',49,0,
	'c',325,0
]);

var ui_geothermal= new UI.StandartWindow({
	standart: {
		header: {
			text:{
				text: "Geothermal Generator / Геотермальный генератор"
			},
		},
		inventory: {
			standart: true
		}, 
		background: { 
			standart: true 
		}
	},
	drawing: [
		{type: "bitmap", x: 0, y: 0, bitmap: "gui_ground", scale: 8},
		{type: "bitmap", x: 350, y: 50, bitmap: "liquid.ground", scale: 2.6},
		{type: "bitmap", x: 510, y: 100, bitmap: "thermal.ground", scale: 3.6},
	],
	params: { 
		slot: "slotFactory", 
		invSlot: "slotFactory", 	
		selection: "selectionFactory"
	},
	elements:{
		"slot1": {type: "slot", x: 620, y: 121, size: 85},
		"slot2": {type: "slot", x: 620, y: 255, size: 85},
		"liquidScale":{type:"scale",x:350,y:50,bitmap:"liquid.lava",direction:1,scale:2.6},
		"term":{type:"scale",x:510,y:100,bitmap:"thermal.scale",direction:1,scale:3.6},
		"FillText":{type: "text", x: 520, y:60 , text: "0/16 of lava", height: 60 , width:400, font:{color:android.graphics.Color.rgb(0, 0,0), size:18, shadow:0.1}},
		"termText":{type: "text", x: 520, y:30 , text: "0/200 °C", height: 60 , width:400, font:{color:android.graphics.Color.rgb(0, 0,0), size:18, shadow:0.1}},
	}
});

FactAPI.machine.registerEnergyTile(BlockID.machineEnergyGeneratorGeothermal, {
	getGuiScreen: function(){
		return ui_geothermal
	},
	init: function(){
		this.liquidStorage.setLimit("lava", 16);
		if(!this.data.term)this.data.term=0;
	},
	getTransportSlots: function(){
		return {input: ["slot1"], output: ["slot2"]};
	},
	
	canFill:{lava:true},

	getTransportLiquids: function(){
		return {input: ["lava"]}
	},

	tick: function(){
		if(!this.data.act){this.liquidStorage.addLiquid("lava", 0.000001);this.data.act=1}
	
		var content = this.container.getGuiContent(); 
		try{
			content.elements["FillText"].text=Math.round(this.liquidStorage.getAmount(this.liquidStorage.getLiquidStored()))+"/16 of lava";
			content.elements["termText"].text=Math.round(this.data.term)+"/"+200+" °C";
		}catch(e){}
		FactAPI.liquid.fluidContainerEmpty("lava", this, {full:"slot1",empty:"slot2"})
		try{
		this.container.setScale("liquidScale",this.liquidStorage.getAmount(this.liquidStorage.getLiquidStored())/16);
		this.container.setScale("term",this.data.term/200);
		}catch(e){}
		if(this.data.term>=0.1)this.data.term-=0.1;
		if(this.data.term>160){
			this.data.mod=1
		}else{
			this.data.mod=0;
		}
	},
	isGenerator: function() {
		return true;
	},
	isBuild:function(){
		for(var x=0;x<5;x++){
			for(var z=0;z<5;z++){
				if(World.getBlockID(this.x-2+x,this.y-4,this.z-2+z)!=49)return false
				if(World.getBlockID(this.x-2+x,this.y-1,this.z-2+z)!=4)return false
			}
		}
		for(var x=0;x<3;x++){
			for(var z=0;z<3;z++){
				if(World.getBlockID(this.x-1+x,this.y-3,this.z-1+z)!=11)return false
				if(World.getBlockID(this.x-1+x,this.y-2,this.z-1+z)!=0)return false
			}
		}
		for(var x=0;x<5;x++){
			if(World.getBlockID(this.x-2+x,this.y-3,this.z-2)!=49)return false
			if(World.getBlockID(this.x-2+x,this.y-2,this.z-2)!=20)return false
			if(World.getBlockID(this.x-2+x,this.y-3,this.z+2)!=49)return false
			if(World.getBlockID(this.x-2+x,this.y-2,this.z+2)!=20)return false
		}
		for(var z=0;z<5;z++){
			if(World.getBlockID(this.x-2,this.y-3,this.z-2+z)!=49)return false
			if(World.getBlockID(this.x-2,this.y-2,this.z-2+z)!=20)return false
			if(World.getBlockID(this.x+2,this.y-3,this.z-2+z)!=49)return false
			if(World.getBlockID(this.x+2,this.y-2,this.z-2+z)!=20)return false
		}
		return true
	},
	energyTick:function(type,src){
		a=this.isBuild();
		if(a){
			if(this.data.term<200-0.2)this.data.term+=0.2;
			src.add(6+1+this.data.mod);
			return
		}
		if(this.liquidStorage.getAmount("lava") >= 0.001){
			if(this.data.term<200-0.2)this.data.term+=0.2;
			src.add(6+this.data.mod);
			this.liquidStorage.addLiquid("lava", -0.001);
		}
	}
},{
	item:true,
	liquid:true
});




// file: common/tile/energy/liquid/Liquid_crucible.js

Translation.addTranslation("Magma Crucible", {ru: "Плавитель"});

var crucible_texture={
	side:"block_machine_iron",
	front:"block_energy_crucible"
}

if(Options.theme){
	crucible_texture.side="light_iron_machine";
	crucible_texture.front="light_crucible";
}


IDRegistry.genBlockID("machineEnergyLiquidCrucible");
Block.createBlockWithRotation("machineEnergyLiquidCrucible", [
	{
		name:"Magma Crucible", 
		texture: [
			[crucible_texture.side,0],[crucible_texture.side, 0],
			[crucible_texture.side,0],[crucible_texture.front,0],
			[crucible_texture.side,0],[crucible_texture.side,0]
		 ],
		 inCreative: true}
],"opaque");


Recipes.addShaped({id: BlockID.machineEnergyLiquidCrucible, count: 1, data: 0}, [
	"cec",
	"cbc",
	"cac"
], [
	'a', BlockID.blockMachineIron,0,
	'b',61,0,
	'c',49,0,
	'e',ItemID.factoryBattery,0
]);
	
var UI_energy_crucible=new UI.StandartWindow({
	standart: {
		header: {
			text:{
				text: "Magma Crucible/Плавитель"
			},
		},
		inventory: {
			standart: true
		}, 
		background: { 
			standart: true 
		}
	},
	drawing:[
		{type: "bitmap", x: 0, y: 0, bitmap: "gui_ground", scale: 8},
		{type: "bitmap", x: 670, y: 50, bitmap: "liquid.ground", scale: 2.6},
		{type: "bitmap", x: 350, y: 50, bitmap: "energybar.ground", scale: 2.6},
		{type: "bitmap", x: 515, y: 190, bitmap: "progressbar.ground", scale: 5},
	],
	params: { 
		slot: "slotFactory", 
		invSlot: "slotFactory", 	
		selection: "selectionFactory"
	},
	elements:{
		"slotSource": {type: "slot", x: 420, y: 180, size: 85},
		"liquidScale":{type:"scale",x:670,y:50,bitmap:"liquid.lava",direction:1,scale:2.6},
		"energyScale": {type: "scale", x: 350 , y: 50, direction: 1, bitmap: "energybar.scale", scale: 2.6},
		"progressScale": { type: "scale", x: 515, y: 190, direction: 0, scale: 5, bitmap: "progressbar.scale" },
		"FillText":{type: "text", x: 800, y:60 , text: "0/16 of lava", height: 60 , width:400, font:{color:android.graphics.Color.rgb(0, 0,0), size:18, shadow:0.1}},
	}
});
	
FactAPI.machine.registerEnergyTile(BlockID.machineEnergyLiquidCrucible,{
	defaultValues:{
		progress:0,
		time:80
	},
	getGuiScreen:function(){
		return UI_energy_crucible
	},
	init:function(){
		this.liquidStorage.setLimit("lava",16);
	},
	getEnergyStorage:function(){
		return 10000
	},
	getTransportSlots: function () {
		return {input: ["slotSource"]};
	},
	energyTick:FactAPI.machine.basicEnergyStorage,
	canExtract:{lava:true},
	tick:function(){
		this.container.setScale("liquidScale",this.liquidStorage.getAmount(this.liquidStorage.getLiquidStored())/16);
		this.container.setScale("energyScale",this.data.energy/this.getEnergyStorage());
		this.container.setScale("progressScale",this.data.progress/this.data.time);
		var content = this.container.getGuiContent(); 
		try{
			content.elements["FillText"].text=Math.round(this.liquidStorage.getAmount(this.liquidStorage.getLiquidStored()))+"/16 of lava";
		}catch(e){}
		var source=this.container.getSlot("slotSource");
		var input=false;
		if(ItemDictionary.isItemInCathegory(source.id,"stone")){
			input=true;
		}
		if(input&&this.data.energy>=5&&this.liquidStorage.getAmount("lava")<=15){
			this.data.progress++;
			this.data.energy-=5;
			if(this.data.progress==this.data.time){
				this.data.progress=0;
				this.liquidStorage.addLiquid("lava",1);
				source.count--;
				this.container.validateAll();
			}
		}else{
			this.data.progress=0;
		}
	}
},{item:true,liquid:true});
ItemDictionary.setItemCathegory(1,"stone");
ItemDictionary.setItemCathegory(4,"stone");
ItemDictionary.setItemCathegory(24,"stone");
ItemDictionary.setItemCathegory(48,"stone");
ItemDictionary.setItemCathegory(49,"stone");
ItemDictionary.setItemCathegory(98,"stone");




// file: common/tile/energy/liquid/Liquid_pump.js

Translation.addTranslation("Pump", {
	ru: "Помпа"
});

var pump_texture={
	top:"block_machine_iron",
	bottom:"block_machine_iron",
	side:"block_energy_pump"
}

if(Options.theme){
	pump_texture.side="light_pump_side";
	pump_texture.top="light_pump_top";
	pump_texture.bottom="light_pump_bottom";
}


IDRegistry.genBlockID("machineEnergyLiquidPump");
Block.createBlock("machineEnergyLiquidPump", [
	{
		name:"Pump",
		texture: [
			[pump_texture.bottom,0],
			[pump_texture.top, 0],
			[pump_texture.side,0],
			[pump_texture.side,0],
			[pump_texture.side,0],
			[pump_texture.side,0]
		], 
		inCreative: true
	}
],"opaque");

Recipes.addShaped({id: BlockID.machineEnergyLiquidPump, count: 1, data: 0}, [
	" e ",
	" b ",
	" a "
], [
	'a', 325,0,
	'b', BlockID.blockMachineIron,0,
	'e', ItemID.factoryBattery,0
]);

var UI_energy_pump= new UI.StandartWindow({
	standart: {
		header: {
			text:{
				text: "Pump / Помпа"
			},
		},
		inventory: {
			standart: true
		}, 
		background: { 
			standart: true 
		}
	},
	drawing: [
		{type: "bitmap", x: 0, y: 0, bitmap: "gui_ground", scale: 8},
		{type: "bitmap", x: 350, y: 50, bitmap: "liquid.ground", scale: 2.6}
	],
	params: { 
		slot: "slotFactory", 
		invSlot: "slotFactory", 	
		selection: "selectionFactory"
	},
	elements:{
		"slot1": {type: "slot", x: 620, y: 121, size: 85},
		"slot2": {type: "slot", x: 620, y: 255, size: 85},
		"liquidScale":{type:"scale",x:350,y:50,bitmap:"liquid.water",direction:1,scale:2.6},
		"FillText":{type: "text", x: 520, y:60 , text: "0/16 of none", height: 60 , width:400, font:{color:android.graphics.Color.rgb(0, 0,0), size:18, shadow:0.1}},
	}
});

FactAPI.machine.registerEnergyTile(BlockID.machineEnergyLiquidPump,{
	energyTick:FactAPI.machine.basicEnergyStorage,
	getEnergyStorage:function(){
		return 100
	},
getGuiScreen:function(){return UI_energy_pump},
	getTransportSlots: function(){
		return {input:["slot1"],output:["slot2"]}
	},

	tick:function(){
		
		var slot1 = this.container.getSlot("slot1");
		var slot2 = this.container.getSlot("slot2");
		var full = LiquidRegistry.getFullItem(slot1.id, slot1.data, this.liquidStorage.getLiquidStored());
		if(full && this.liquidStorage.getAmount(this.liquidStorage.getLiquidStored()) >= 1 && (slot2.id == full.id && slot2.data == full.data && slot2.count < Item.getMaxStack(full.id, full.data) || slot2.id == 0)){
			this.liquidStorage.getLiquid(this.liquidStorage.getLiquidStored(), 1);
			slot1.count--;
			slot2.id = full.id;
			slot2.data = full.data;
			slot2.count++;
			this.container.validateAll();
		}

		var lq = {water:true,lava:true};

		var content = this.container.getGuiContent(); 
		try{
			content.elements["FillText"].text=Math.round(this.liquidStorage.getAmount(this.liquidStorage.getLiquidStored()))+"/16 of "+this.liquidStorage.getLiquidStored();
			content.elements["liquidScale"].bitmap="liquid."+(lq[this.liquidStorage.getLiquidStored()]?this.liquidStorage.getLiquidStored():"water");
		}catch(e){}
		
		this.container.setScale("liquidScale",this.liquidStorage.getAmount(this.liquidStorage.getLiquidStored())/16)

		if(World.getThreadTime()%20==0&&this.data.energy>=20){
			var empty = (this.liquidStorage.getAmount(this.liquidStorage.getLiquidStored())<16)||this.liquidStorage.isEmpty();
			if(empty){
				var id = World.getBlockID(this.x,this.y-1,this.z);
				if(id==8||id==9){
					World.setBlock(this.x,this.y-1,this.z,0,0);
					this.liquidStorage.addLiquid("water",1);
					this.data.energy-=20;
					return;
				}
				if(id==10||id==11){
					World.setBlock(this.x,this.y-1,this.z,0,0);
					this.liquidStorage.addLiquid("lava",1);
					this.data.energy-=20;
					return;
				}
				var container = World.getContainer(this.x,this.y-1,this.z);
				if(container&&container.tileEntity){
					var tile = container.tileEntity;
					if(tile.canExtract&&tile.liquidStorage.getAmount(tile.liquidStorage.getLiquidStored())>=1&&(tile.liquidStorage.getLiquidStored()==this.liquidStorage.getLiquidStored()||this.liquidStorage.isEmpty())){
						tile.liquidStorage.getLiquid(tile.liquidStorage.getLiquidStored(),1);
						this.liquidStorage.addLiquid(tile.liquidStorage.getLiquidStored(),1);
						this.data.energy-=20;
						return;
					}
				}
			}
		}
	},
	
	canExtract:{water:true,lava:true,fuel:true,oil:true,milk:true}
},{liquid:true});




// file: common/tile/energy/station/Station_assembler.js

Translation.addTranslation("Assembler Station", {
    ru: "Сборочная станция"
});

var assembler_texture={
	top:"block_energy_assembler",
	bottom:"block_machine_steel",
	side:"block_energy_assembler"
}

if(Options.theme){
	assembler_texture.top="light_assembler";
	assembler_texture.bottom="light_iron_machine";
	assembler_texture.side="light_assembler";
}

IDRegistry.genBlockID("machineEnergyStationAssembler");
Block.createBlock("machineEnergyStationAssembler", [
	{
		name: "Assembler Station",
		texture: [
			[assembler_texture.bottom, 0],
			[assembler_texture.top, 0],
			[assembler_texture.side, 1],
			[assembler_texture.side, 1],
			[assembler_texture.side, 1],
			[assembler_texture.side, 1]
		],
		inCreative: true
	}
],"opaque");

Recipes.addShaped({
    id: BlockID.machineEnergyStationAssembler, 
    count: 1, 
    data: 0
}, [
    "#e#",
    "cbc",
    "#a#"
], [
    'a', BlockID.blockMachineIron,0,
    'b', 58,0,
    'c', ItemID.gearDiamond,0,
    'e', ItemID.factoryBattery,0
]);

var UI_energy_assembler = new UI.StandartWindow({
    standart: {
        header: {
            text: {
                text: "Assembler Station/Сборочная станция"
            },
        },
        minHeight: 700,
        inventory: {
            standart: true
        }, 
        background: { 
        standart: true 
        }
    },
    params: { 
        slot: "slotFactory", 
        invSlot: "slotFactory", 	
        selection: "selectionFactory"
    },
    drawing: [
        {type: "bitmap", x: 0, y: 0, bitmap: "gui_ground", scale: 8},
        {type: "bitmap", x: 350, y: 50, bitmap: "energybar.ground", scale: 2.6},
        {type: "bitmap", x: 720, y: 170, bitmap: "progressbar.ground", scale: 4.5}
    ],
    elements: {
        "slotResult": {type: "slot", x: 850, y: 170, size: 70},
        
        "slotInput": {type: "slot", x: 850, y: 90, size: 70,clicker:{
			onClick:function(position, container, tileEntity){
                return;
			},
			onLongClick: function(position, container, tileEntity){
				this.onClick(position, container, tileEntity);
			}
		}},
    
        "slot0": {type: "slot", x: 435, y: 100, size: 70},
        "slot1": {type: "slot", x: 505, y: 100, size: 70},
        "slot2": {type: "slot", x: 575, y: 100, size: 70},
        "slot3": {type: "slot", x: 435, y: 170, size: 70},
        "slot4": {type: "slot", x: 505, y: 170, size: 70},
        "slot5": {type: "slot", x: 575, y: 170, size: 70},
        "slot6": {type: "slot", x: 435, y: 240, size: 70},
        "slot7": {type: "slot", x: 505, y: 240, size: 70},
        "slot8": {type: "slot", x: 575, y: 240, size: 70},

        "slotI1": {type: "slot", x: 435, y: 320, size: 70},
        "slotI2": {type: "slot", x: 505, y: 320, size: 70},
        "slotI3": {type: "slot", x: 575, y: 320, size: 70},
        "slotI4": {type: "slot", x: 645, y: 320, size: 70},
        "slotI5": {type: "slot", x: 715, y: 320, size: 70},
        "slotI6": {type: "slot", x: 435, y: 390, size: 70},
        "slotI7": {type: "slot", x: 505, y: 390, size: 70},
        "slotI8": {type: "slot", x: 575, y: 390, size: 70},
        "slotI9": {type: "slot", x: 645, y: 390, size: 70},
        "slotI10": {type: "slot", x: 715, y: 390, size: 70},
        
        "progressScale": {type: "scale", x: 720, y: 170, direction: 0, scale: 4.5,bitmap: "progressbar.scale"},
        "energyScale": {type: "scale", x: 350, y: 50, direction: 1, scale: 2.6, bitmap: "energybar.scale"}
    }
});


FactAPI.machine.registerEnergyTile(BlockID.machineEnergyStationAssembler,{
    defaultValues:{
        time:200,
        progress:0
    },
    getGuiScreen:function(){
        return UI_energy_assembler
    },
    getTransportSlots:function(){
        var s = [];
        for(var i =1;i<=10;i++)s.push("slotI"+i);
        return {input:s,output:["slotResult"]}
    },
	getEnergyStorage:function(){
		return 10000
	},
	energyTick:FactAPI.machine.basicEnergyStorage,

    tick:function(){
    	if(!this.data.progress){this.data.progress=0;this.data.time=200}
        var res = Recipes.getRecipeResult(this.container);
		if(res){
			this.container.setSlot("slotInput", res.id, res.count, res.data);
		}else{
			this.container.setSlot("slotInput", 0, 0, 0);
        }
        
        this.container.setScale("progressScale",this.data.progress/this.data.time);
		this.container.setScale("energyScale",this.data.energy/10000);

        var resultSlot = this.container.getSlot("slotResult");
       
        var craft = this.canCraft();
        
        if(craft&&res&&this.data.energy>=5&&((res.id==resultSlot.id&&res.data==resultSlot.data&&resultSlot.count<64-res.count)||resultSlot.id==0)){
           	
           	this.data.energy-=5;
            this.data.progress++;
         	if(this.data.progress>=this.data.time){
                resultSlot.id=res.id;
                resultSlot.data=res.data;
                resultSlot.count+=res.count;
            
                for(var i in craft){
                   	var it=craft[i];
                   	FactAPI.machineContainer.giveItemFromContainer(this.container,{id:it.id,data:it.data,count:it.count},11,"I");
              	}
                
               	this.container.validateAll();
                this.data.progress=0;
            }
        }
        else{
            this.data.progress=0
        }
    },


    canCraft:function(){
        var ingredients={}
        for(var i = 0;i<9;i++){
            var slot = this.container.getSlot("slot"+i);
            if(slot.id!=0)ingredients[slot.id+":"+slot.data]={id:slot.id,data:slot.data,count:this.getNativeCount(slot.id,slot.data)}
            if(slot.id!=0&&!FactAPI.machineContainer.isItemInContainer(this.container,{id:slot.id,data:slot.data,count:this.getNativeCount(slot.id,slot.data)},11,"I"))return false;
        }
        return ingredients;
    },

    getNativeCount:function(id,data){
        var count=0;
        for(var i =0;i<9;i++){
            var slot=this.container.getSlot("slot"+i);
            if(slot.id==id&&slot.data==data)count++;
        }
        return count
    }
},{item:true})




// file: common/tile/energy/station/Station_repair.js

Translation.addTranslation("Repair Station", {
	ru: "Ремонтная станция"
});

var repair_texture={
	top:"block_energy_repair",
	bottom:"block_machine_iron",
	side:"block_energy_repair"
}

if(Options.theme){
	repair_texture.top="light_repair";
	repair_texture.bottom="light_iron_machine";
	repair_texture.side="light_repair";
}

IDRegistry.genBlockID("machineEnergyStationRepair");
Block.createBlock("machineEnergyStationRepair", [
	{
		name: "Repair Station",
		texture: [
			[repair_texture.bottom, 0],
			[repair_texture.top, 0],
			[repair_texture.side, 1],
			[repair_texture.side, 1],
			[repair_texture.side, 1],
			[repair_texture.side, 1]
		],
		inCreative: true
	}
],"opaque");

Recipes.addShaped({
	id: BlockID.machineEnergyStationRepair, 
	count: 1, 
	data: 0
}, [
	"c",
	"a"
], [
	'a', BlockID.blockMachineIron,0,
	'c', 145,0,
	'e', ItemID.factoryBattery,0
]);
	

var UI_energy_repair = new UI.StandartWindow({
	standart: {
		header: {
			text: {
				text: "Repair Station/Ремонтная станция"
			},
		},
		minHeight: 700,
		inventory: {
			standart: true
		}, 
		background: { 
		standart: true 
		}
	},
	params: { 
		slot: "slotFactory", 
		invSlot: "slotFactory", 	
		selection: "selectionFactory"
	},
	drawing: [
		{type: "bitmap", x: 0, y: 0, bitmap: "gui_ground", scale: 8},
		{type: "bitmap", x: 350, y: 50, bitmap: "energybar.ground", scale: 2.6},
		{type: "bitmap", x: 585, y: 125, bitmap: "progressbar.ground", scale: 5}
	],
	elements: {
		"slotSource": {type: "slot", x: 445, y: 110, size: 100},
		"slotResult": {type: "slot", x: 735, y: 110, size: 100},
		"progressScale": {type: "scale", x: 585, y: 125, direction: 0, scale: 5, bitmap: "progressbar.scale"},
		"energyScale": {type: "scale", x: 350, y: 50, direction: 1, scale: 2.6, bitmap: "energybar.scale"}
	}
});
	
FactAPI.machine.registerEnergyTile(BlockID.machineEnergyStationRepair,{
	defaultValues:{
		time: 200,
		progress:0
	},
	getGuiScreen: function(){
		return UI_energy_repair;
	},
	getTransportSlots:function(){
		return {input:["slotSource"], output:["slotResult"]}
	},
	
	/*
	getTransportSlotsInput:function(){
		return {slots:["slotSource"],directions:[{x:0,y:1,z:0}]}
	},
	getTransportSlotsOutput:function(){
		return {slots:["slotResult"],directions:[{x:0,y:-1,z:0}]}
	},
	*/
	
	getEnergyStorage:function(){
		return 10000
	},
	energyTick:FactAPI.machine.basicEnergyStorage,
	tick:function(){
		this.container.setScale("energyScale",this.data.energy/this.getEnergyStorage());
		this.container.setScale("progressScale",this.data.progress/this.data.time);
	
		var source = this.container.getSlot("slotSource");
		var output= this.container.getSlot("slotResult");
		
		var result=FactAPI.recipe.repairStation.get(source.id);
		if ((result && this.data.energy >= 5) && ((output.id == result.id && output.data == result.data && output.count < 64) || output.id == 0)) {
		    this.data.progress++;
		    this.data.energy -= 5;
			if(this.data.progress>=this.data.time){
				this.data.progress=0;
				source.count--;
				output.id=result.id;
				output.data=result.data;
				output.count++;
				this.container.validateAll();
			}
		}
		else{
			this.data.progress=0;
		}
	}
},{item:true});

//native
var toRSR=[
	256,257,258,259,261,267,268,269,270,271,272,273,274,275,276,277,278,279,283,284,285,286,290,292,293,294,298,299,300,301,302,303,304,305,306,307,308,309,310,311,312,313,314,315,316,317,346,359
];
for(var i in toRSR){
	FactAPI.recipe.repairStation.register(toRSR[i],toRSR[i],0);
}




// file: common/tile/energy/nuclear/Nuclear_generator.js

Translation.addTranslation("Nuclear Generator", {
	ru: "Ядерный генератор"
});

var genNuclear_texture={
	side:"block_machine_iron",
	front:"block_nuclear_generator"
}

if(Options.theme){
	genNuclear_texture.front="light_nuclear_generator";
	genNuclear_texture.side="light_iron_machine";
}

IDRegistry.genBlockID("machineEnergyGeneratorNuclear");
Block.createBlockWithRotation("machineEnergyGeneratorNuclear", [
	{
		name: "Nuclear Generator",
		texture: [
			[genNuclear_texture.side,0],
			[genNuclear_texture.side, 0],
			[genNuclear_texture.side,0],
			[genNuclear_texture.front,0],
			[genNuclear_texture.side,0],
			[genNuclear_texture.side,0]
		],
		inCreative: true
	}
],"opaque");

Recipes.addShaped({
	id: BlockID.machineEnergyGeneratorNuclear, 
	count: 1, 
	data: 0
}, [
	"ebe",
	"eae",
	"ece"
], [
	'a', BlockID.blockMachineIron,0,
	'b', 61,0,
	'c', ItemID.factoryBattery,0,
	'e',263,-1
]);

var ui_generatorNuclear = new UI.StandartWindow({
	standart: {
		header: {text: {text: "Nuclear Generator/Ядерный генератор"}},
		inventory: {standart: true},
		background: {standart: true}
	},
	params: { 
	slot: "slotFactory", 
	invSlot: "slotFactory", 	
	selection: "selectionFactory"
	},
	
	drawing: [
		{type: "bitmap", x: 0, y: 0, bitmap: "gui_ground", scale: 8},
		{type: "bitmap", x: 350, y: 50, bitmap: "energybar.ground", scale: 2.6},
		{type: "bitmap", x: 450, y: 150, bitmap: "fire.ground", scale: 4.5},
	],
	
	elements: {
		"energyScale": {type: "scale", x: 350 , y: 50, direction: 1, bitmap: "energybar.scale", scale: 2.6},
		"burningScale": {type: "scale", x: 450, y: 150, direction: 1, bitmap: "fire.scale", scale: 4.5},
		"slotNuclear": {type: "slot", x: 450, y: 210},
	}
});

FactAPI.machine.registerEnergyTile(BlockID.machineEnergyGeneratorNuclear, {
	defaultValues: {
		burn: 0,
		burnMax: 0
	},
	getGuiScreen: function(){
		return ui_generatorNuclear;
	},
	
	getTransportSlots: function(){
		return {input: ["slotNuclear"]};
	},
	
	getNuclear: function(slotName){
		var NuclearSlot = this.container.getSlot(slotName);
		if (NuclearSlot.id > 0){
			var burn = FactAPI.Reactor.getNuclearBurn(NuclearSlot.id, NuclearSlot.data);
			if (burn){
				NuclearSlot.count--;
				this.container.validateSlot(slotName);
				return burn;
			}
		}
		return 0;
	},
	
	tick: function(){
		var energyStorage = this.getEnergyStorage();
		if(this.data.burn <= 0){
			this.data.burn = this.data.burnMax = this.getNuclear("slotNuclear");
		}
		if(this.data.burn > 0 && this.data.energy < energyStorage){
			this.data.energy = Math.min(this.data.energy + 16, energyStorage);
			this.data.burn--;
		}
		this.container.setScale("burningScale", this.data.burn / this.data.burnMax || 0);
		this.container.setScale("energyScale", this.data.energy / energyStorage);
	},
	
	isGenerator: function() {
		return true;
	},
	
	getEnergyStorage: function(){
		return 10000;
	},
	
	energyTick: function(type, src){
		var output = Math.min(16, this.data.energy);
		this.data.energy += src.add(output) - output;
	},
},{
	item:true
});




// file: common/tile/energy/nuclear/Nuclear_reactor.js

Translation.addTranslation("Nuclear Reactor", {
	ru: "Ядерный реактор"
});

var ReactorNuclear_texture="block_energy_reactor";

if(Options.theme){
	ReactorNuclear_texture="light_reactor";
}

IDRegistry.genBlockID("machineEnergyNuclearReactor");
Block.createBlock("machineEnergyNuclearReactor", [
	{
		name: "Nuclear Reactor",
		texture: [
			[ReactorNuclear_texture,0],
			[ReactorNuclear_texture, 0],
			[ReactorNuclear_texture,1],
			[ReactorNuclear_texture,1],
			[ReactorNuclear_texture,1],
			[ReactorNuclear_texture,1]
		],
		inCreative: true
	}
],"opaque");

var ui_reactor= new UI.StandartWindow({
	standart: {
		header: {
			text:{
				text: "Nuclear Reactor / Ядерный реактор"
			},
		},
		inventory: {
			standart: true
		}, 
		background: { 
			standart: true 
		}
	},
	drawing: [
		{type: "bitmap", x: 0, y: 0, bitmap: "gui_ground", scale: 8},
		{type: "bitmap", x: 350, y: 50, bitmap: "liquid.ground", scale: 2.6},
		{type: "bitmap", x: 470, y: 100, bitmap: "thermal.ground", scale: 3.6},
	],
	params: { 
		slot: "slotFactory", 
		invSlot: "slotFactory", 	
		selection: "selectionFactory"
	},
	elements:{
		//scales
		"waterScale":{type:"scale",x:350,y:50,bitmap:"liquid.water",direction:1,scale:2.6},
		"thermScale":{type:"scale",x:470,y:100,bitmap:"thermal.scale",direction:1,scale:3.6},
		
		//text
		"thermText":{type: "text", x: 470, y:30 , text: "0/2000 °C", height: 60 , width:400, font:{color:android.graphics.Color.rgb(0, 0,0), size:18, shadow:0.1}},
		"fillText":{type: "text", x: 470, y:60 , text: "0/16 of water", height: 60 , width:400, font:{color:android.graphics.Color.rgb(0, 0,0), size:18, shadow:0.1}},
		"outText":{type: "text", x: 700, y:60 , text: "0 E/T", height: 60 , width:400, font:{color:android.graphics.Color.rgb(0, 0,0), size:18, shadow:0.1}},
		
		
		//slots
		"slot1": {type: "slot", x: 540, y: 100, size: 70},
		"slot2": {type: "slot", x: 610, y: 100, size: 70},
		"slot3": {type: "slot", x: 680, y: 100, size: 70},
		"slot4": {type: "slot", x: 750, y: 100, size: 70},
		"slot5": {type: "slot", x: 820, y: 100, size: 70},
		
		"slot7": {type: "slot", x: 540, y: 170, size: 70},
		"slot8": {type: "slot", x: 610, y: 170, size: 70},
		"slot9": {type: "slot", x: 680, y: 170, size: 70},
		"slot10": {type: "slot", x: 750, y: 170, size: 70},
		"slot11": {type: "slot", x: 820, y: 170, size: 70},
		
		"slot13": {type: "slot", x: 540, y: 240, size: 70},
		"slot14": {type: "slot", x: 610, y: 240, size: 70},
		"slot15": {type: "slot", x: 680, y: 240, size: 70},
		"slot16": {type: "slot", x: 750, y: 240, size: 70},
		"slot17": {type: "slot", x: 820, y: 240, size: 70},
		
		"slot19": {type: "slot", x: 540, y: 310, size: 70},
		"slot20": {type: "slot", x: 610, y: 310, size: 70},
		"slot21": {type: "slot", x: 680, y: 310, size: 70},
		"slot22": {type: "slot", x: 750, y: 310, size: 70},
		"slot23": {type: "slot", x: 820, y: 310, size: 70},
		
		"slot25": {type: "slot", x: 540, y: 380, size: 70},
		"slot26": {type: "slot", x: 610, y: 380, size: 70},
		"slot27": {type: "slot", x: 680, y: 380, size: 70},
		"slot28": {type: "slot", x: 750, y: 380, size: 70},
		"slot29": {type: "slot", x: 820, y: 380, size: 70},
	}
});

Recipes.addShaped({id: BlockID.machineEnergyNuclearReactor, count: 1, data: 0}, [
	"#b#",
	"#a#",
	"#c#"
], ['a', BlockID.blockReactorController,0,'b',235,0,'c',54,0]);

FactAPI.machine.registerEnergyTile(BlockID.machineEnergyNuclearReactor,{
	
	defaultValues: {
		therm:0,
		toWater:0
	},
	
	init:function(){
		this.liquidStorage.setLimit("water",16);
	},
	created:function(){
		this.liquidStorage.addLiquid("water",0.000001);
	},
	canFill: {water:true},
	
	getGuiScreen: function(){
		return ui_reactor
	},
	
	updateReactor: function(){
		var hot = 0;
		var cold = 0;
		var toWater = 0;
		for(var i = 1;i<30;i++){
			try{
			
			var slot = this.container.getSlot("slot"+i);
			
			var slotB1=this.container.getSlot("slot"+(i-1));
			var slotB2=this.container.getSlot("slot"+(i-6));
			var slotN1=this.container.getSlot("slot"+(i+1));
			var slotN2=this.container.getSlot("slot"+(i+6));
			
			var fuel = FactAPI.Reactor.isFuel(slot.id);
			if(fuel){
				hot+=fuel.therm;
				slot.data++;
				//нагрев
				if(slotB1.id==slot.id)hot+=fuel.therm;
				if(slotB2.id==slot.id)hot+=fuel.therm;
				if(slotN1.id==slot.id)hot+=fuel.therm;
				if(slotN2.id==slot.id)hot+=fuel.therm;
				
				//обогащение
				if(slotB1.id==fuel.depleted){
					slotB1.data-=fuel.therm;
					if(slotB1.data<=0)slotB1.id=slot.id
				}
				if(slotB2.id==fuel.depleted){
					slotB2.data-=fuel.therm;
					if(slotB2.data<=0)slotB2.id=slot.id
				}
				if(slotN1.id==fuel.depleted){
					slotN1.data-=fuel.therm;
					if(slotN1.data<=0)slotN1.id=slot.id
				}
				if(slotN2.id==fuel.depleted){
					slotN2.data-=fuel.therm;
					if(slotN2.data<=0)slotN2.id=slot.id
				}
				
				//истощение
				slot.data+=fuel.therm;
				if(slot.data>=Item.getMaxDamage(slot.id)){
					slot.id=fuel.depleted;
					slot.data=Item.getMaxDamage(slot.id)-1;
				}
			}
			if(slot.id==ItemID.circuitCooling){
				var c1 = FactAPI.Reactor.isCoolant(slotB1.id);
				var c2 = FactAPI.Reactor.isCoolant(slotB2.id);
				var c3 = FactAPI.Reactor.isCoolant(slotN1.id);
				var c4 = FactAPI.Reactor.isCoolant(slotN2.id);
				if(c1){
					slotB1.data+=c1;
					cold+=c1;
				}
				if(c2){
					slotB2.data+=c2;
					cold+=c2;
				}
				if(c3){
					slotN1.data+=c3;
					cold+=c3;
				}
				if(c4){
					slotN2.data+=c4;
					cold+=c4;
				}
				if(slotB1.id==ItemID.ventCooling)cold+=4;
				if(slotB2.id==ItemID.ventCooling)cold+=4;
				if(slotN1.id==ItemID.ventCooling)cold+=4;
				if(slotN2.id==ItemID.ventCooling)cold+=4;
				
				if(slotB1.id==ItemID.ventCoolingAdvanced)cold+=8;
				if(slotB2.id==ItemID.ventCoolingAdvanced)cold+=8;
				if(slotN1.id==ItemID.ventCoolingAdvanced)cold+=8;
				if(slotN2.id==ItemID.ventCoolingAdvanced)cold+=8;
				
				if(slotB1.id==ItemID.circuitHeating)toWater++;
				if(slotB2.id==ItemID.circuitHeating)toWater++;
				if(slotN1.id==ItemID.circuitHeating)toWater++;
				if(slotN2.id==ItemID.circuitHeating)toWater++;
				this.container.validateAll();
			}
			
			}catch(e){print(e)}
		}
		return {
			hot:hot,
			cold:cold,
			toWater: toWater
		}
	},
	
	tick: function(){
		if(!this.data.therm)this.data.therm=0;
		
		var reactor = this.updateReactor();
		var content = this.container.getGuiContent();
		
		this.container.setScale("waterScale", this.liquidStorage.getAmount("water")/16);
		this.container.setScale("thermScale", this.data.therm/20000);
		
		try{
			content.elements["fillText"].text=Math.round(this.liquidStorage.getAmount(this.liquidStorage.getLiquidStored()))+"/16 of water";
			content.elements["thermText"].text=Math.round(this.data.therm/10)+"/"+2000+" °C";
		}catch(e){}
		
		this.data.therm+=0.1*(reactor.hot-reactor.cold)
		this.data.toWater=0.9*(reactor.hot)>0?0.9*(reactor.hot):0
		
		if(this.liquidStorage.getAmount("water")<0.001){
			this.data.therm+=0.9*(reactor.hot-reactor.cold)*reactor.toWater
			this.data.toWater=0
		}
		
		if(this.data.therm>=20000){
			World.destroyBlock(this.x,this.y,this.z);
			Level.explode(this.x,this.y,this.z,20,true)
		}
		
		if(this.data.toWater>10)this.liquidStorage.getLiquid("water",0.001);
		if(!this.isBuild()&&this.liquidStorage.getAmount("water")>0.01)this.liquidStorage.getLiquid("water",0.01);
	},
	
	energyTick: function(type,src){
		if(this.data.toWater>0){
			//this.data.toWater>100?this.data.toWater=100:null;
			src.add(this.data.toWater)
			var content = this.container.getGuiContent();
			try{
				content.elements["outText"].text="out: " + Math.round(this.data.toWater)+" E/T";
			}catch(e){}
		}
	},
	
	isBuild:function (){
		for(var x = -2;x<3;x++){
			for(var z = -2;z<3;z++){
				if(World.getBlockID(this.x+x,this.y-5,this.z+z)!=BlockID.reinforcedStone)return false
			}
		}
		for(var x = -1;x<2;x++){
			for(var z = -1;z<2;z++){
				if(World.getBlockID(this.x+x,this.y-1,this.z+z)!=BlockID.blockReactorController)return false
			}
		}
		for(var z = -2;z<3;z++){
			for(var y = -4;y<0;y++){
				if(World.getBlockID(this.x-2,this.y+y,this.z+z)!=BlockID.reinforcedStone)return false
				if(World.getBlockID(this.x+2,this.y+y,this.z+z)!=BlockID.reinforcedStone)return false
				if(World.getBlockID(this.x+z,this.y+y,this.z-2)!=BlockID.reinforcedStone)return false
				if(World.getBlockID(this.x+z,this.y+y,this.z+2)!=BlockID.reinforcedStone)return false
			}
		}
		return true
	}
},{liquid:true});




// file: common/tile/energy/Energy_convertor.js

var energy_convertor_texture={
	side:"block_energy_convertor",
	top:"block_machine_iron"
}

if(Options.theme){
	energy_convertor_texture.side="light_energy_convertor";
	energy_convertor_texture.top="light_iron_machine";
}

Translation.addTranslation("Energy Convertor", {
	ru: "Энергоконвертор"
});

IDRegistry.genBlockID("machineEnergyConvertor");
Block.createBlock("machineEnergyConvertor", [
    {
        name: "Energy Convertor", texture: [
           [energy_convertor_texture.top,0], 
           [energy_convertor_texture.top, 0],
           [energy_convertor_texture.side, 0],
           [energy_convertor_texture.side, 0],
           [energy_convertor_texture.side, 0],
           [energy_convertor_texture.side, 0]
        ], inCreative: true
    }
]);

BlockRenderer.addRenderCallback(BlockID.machineEnergyConvertor, function(api, coords,block) {

	api.renderBoxId(coords.x, coords.y, coords.z, 0, 0, 0, 1, 1, 1/16,BlockID.machineEnergyConvertor, block.data);
	api.renderBoxId(coords.x, coords.y, coords.z, 0, 0, 0, 1/16, 1, 1, BlockID.machineEnergyConvertor, block.data);
	
	api.renderBoxId(coords.x, coords.y, coords.z, 15/16, 0, 0, 1, 1, 1,BlockID.machineEnergyConvertor, block.data);
	api.renderBoxId(coords.x, coords.y, coords.z, 0, 0, 15/16, 1, 1, 1, BlockID.machineEnergyConvertor, block.data);
	
	api.renderBoxId(coords.x, coords.y, coords.z, 0, 0, 0, 1, 1/16, 1,BlockID.machineEnergyConvertor, block.data);
	api.renderBoxId(coords.x, coords.y, coords.z, 0, 15/16, 0, 1, 1, 1, BlockID.machineEnergyConvertor, block.data);
	
	api.renderBoxId(coords.x, coords.y, coords.z, 2/16, 2/16, 2/16, 14/16, 14/16, 14/16, 152, 0);
})
BlockRenderer.enableCustomRender(BlockID.machineEnergyConvertor);

Recipes.addShaped({ id: BlockID.machineEnergyConvertor, count: 1, data: 0 }, [
       "cbc",
        "bab",
        "cbc"
    ], ['a', BlockID.blockMachineIron, 0, 'b', BlockID.energy_cable, 0, 'c', 331, 0]);

    
    FactAPI.machine.registerEnergyTile(BlockID.machineEnergyConvertor, {
        isStorage: true,
        getEnergyStorage: function () {
            return 200;
        },
        energyTick: function (type, src) {
            var TRANSFER = 32;
            this.data.energy += src.storage(Math.min(TRANSFER * 4, this.getEnergyStorage() - this.data.energy), Math.min(TRANSFER, this.data.energy));
        }
    });




// file: common/tile/energy/Tesla_tower.js

Translation.addTranslation("Tesla Reel", {ru: "Катушка Теслы"});
IDRegistry.genBlockID("machineEnergyTeslaTower");
Block.createBlock("machineEnergyTeslaTower", [
	{name: "Tesla Reel", texture: [
		["block_energy_reel",0],["block_energy_reel", 0],
		["block_energy_tesla",0],["block_energy_tesla",0],
		["block_energy_tesla",0],["block_energy_tesla",0]
	], inCreative: true}
],"opaque");
ICRender.getGroup("iron-wire").add(BlockID.machineEnergyTeslaTower,-1);

Recipes.addShaped({id: BlockID.machineEnergyTeslaTower, count: 1, data: 0}, [
	"bbb",
	"cac",
	"bbb"
], ['a', BlockID.blockMachineIron,0,'b',265,0,'c',331,0]);

var ui_tesla= new UI.StandartWindow({
	standart: {
		header: {text: {text: "Tesla Reel/Катушка Теслы"}},
		inventory: {standart: true},
		background: {standart: true}, 
	},
	drawing: [
		{type: "bitmap", x: 0, y: 0, bitmap: "gui_ground", scale: 8},
		{type: "bitmap", x: 350, y: 50, bitmap: "energybar.ground", scale: 2.6},
	],
	elements: {
		"energyScale": {type: "scale", x: 350, y: 50, direction: 1, value: 0.5, bitmap: "energybar.scale", scale: 2.6},
	},
	params: { 
	slot: "slotFactory", 
	invSlot: "slotFactory", 	
	selectionFactoryon: "selectionFactory"
	} 
});

FactAPI.machine.registerEnergyTile(BlockID.machineEnergyTeslaTower, {
	defaultValues: {
		energy_storage:10000,
	},
	getGuiScreen: function(){
		return ui_tesla;
	},
	setDefaultValues: function(){
		this.data.energy_storage = this.defaultValues.energy_storage;
	},
	checkStation:function(){
		var blocks=[
			[0,-1,0,BlockID.blockMachineIron],
			[0,-2,0,BlockID.blockMachineIron],
			[0,-3,0,BlockID.blockMachineIron],
			[1,0,0,BlockID.iron_cable],[-1,0,0,BlockID.iron_cable],
			[1,0,1,BlockID.iron_cable],[1,0,-1,BlockID.iron_cable],
			[0,0,1,BlockID.iron_cable],[0,0,-1,BlockID.iron_cable],
			[-1,0,0,BlockID.iron_cable],[-1,0,-1,BlockID.iron_cable],
			[1,-1,0,BlockID.iron_cable],[-1,-1,0,BlockID.iron_cable],
			[1,-1,1,BlockID.iron_cable],[1,-1,-1,BlockID.iron_cable],
			[0,-1,1,BlockID.iron_cable],[0,-1,-1,BlockID.iron_cable],
			[-1,-1,0,BlockID.iron_cable],[-1,-1,-1,BlockID.iron_cable],
			[1,-3,0,BlockID.energy_reel],[-1,-3,0,BlockID.energy_reel],
			[0,-3,1,BlockID.energy_reel],[0,-3,-1,BlockID.energy_reel],
			[2,-3,0,BlockID.blockMachineIron],[-2,-3,0,BlockID.blockMachineIron],
			[0,-3,2,BlockID.blockMachineIron],[0,-3,-2,BlockID.blockMachineIron],
		];
		for(var i in blocks){
			var a=blocks[i];
			if(World.getBlockID(this.x+a[0],this.y+a[1],this.z+a[2])!=a[3])return false
		}
		return true
	},
	tick: function(){
		this.setDefaultValues();
		if(this.checkStation()){
			if(this.data.energy>=100&&World.getThreadTime()%10==0){
				var all=Entity.getAll();
				for(var i in all){
					var ent={
						64:true,65:true,
						66:true,67:true,
						68:true,69:true,
						77:true,80:true,
						81:true,82:true,
						83:true,84:true,
						85:true,86:true,
						90:true,93:true,
						94:true
					};
					if(!Player.isPlayer(all[i])&&!ent[Entity.getType(all[i])]){
						if(Entity.getDistanceToCoords(all[i], {x:this.x,y:this.y,z:this.z})<10){
							crd=Entity.getPosition(all[i]);
							Entity.spawn(this.x,this.y+1,this.z,93);
							Entity.damageEntity(all[i], 5);
							Entity.spawn(crd.x,crd.y,crd.z,93);
							this.data.energy-=100;
							return
						}
					}
				}
			}
		}
		var energyStorage = this.getEnergyStorage();
		this.data.energy = Math.min(this.data.energy, energyStorage);
		this.container.setScale("energyScale", this.data.energy / energyStorage);
	},
	getEnergyStorage: function(){
		return this.data.energy_storage;
	},
	energyTick: FactAPI.machine.basicEnergyStorage
});




// file: common/tile/net/Start

if(Options.beta){




// file: common/tile/net/Net_drive.js

Translation.addTranslation("Disk Drive", {
	ru: "Дисковод"
});

var IO_texture={
	side:"block_machine_iron",
	front:"block_energy_IO"
}

if(Options.theme){
	IO_texture.side="light_iron_machine";
	IO_texture.front="light_IO";
}

IDRegistry.genBlockID("machineNetIO");
Block.createBlockWithRotation("machineNetIO", [
	{
		name: "Disk Drive",
		texture: [
			[IO_texture.side, 0],
			[IO_texture.side, 0],
			[IO_texture.side, 0],
			[IO_texture.front, 0],
			[IO_texture.side, 0],
			[IO_texture.side, 0]
		],
		inCreative: true
	}
],"opaque");

Recipes.addShaped({
	id: BlockID.machineNetIO, 
	count: 1, 
	data: 0
}, [
	"bcb",
	"c#c",
	"bab"
], [
	'a', BlockID.blockMachineIron,0,
	'b', 331,0,
	'c', ItemID.crystalFluix,0
]);

var UI_net_io = new UI.StandartWindow({
	standart: {
		header: {text: {text: "Disk Drive/Дисковод"}},
		inventory: {standart: true},
		background: {standart: true}
	},
	params: { 
	slot: "slotFactory", 
	invSlot: "slotFactory", 	
	selection: "selectionFactory"
	},
	
	drawing: [
		{type: "bitmap", x: 0, y: 0, bitmap: "gui_ground", scale: 8},
	],
	
	elements: {
		"slot": {type: "slot", x: 600, y: 210},
	}
});

FactAPI.machine.registerNetTile(BlockID.machineNetIO,{
	getGuiScreen: function(){
		return UI_net_io
	},
	tick: function(){
		var slot = this.container.getSlot("slot");
		if(slot.id==ItemID.diskItem&&slot.data==0){
			slot.data = FactAPI.disk.createItemDisk(slot.id,slot.data);
			this.container.validateAll();
		}
	}
});




// file: common/tile/net/Net_terminal.js

Translation.addTranslation("Terminal", {
	ru: "Терминал"
});

var Terminal_texture={
	side:"block_machine_iron",
	front:"block_energy_terminal"
}

if(Options.theme){
	Terminal_texture.side="light_iron_machine";
	Terminal_texture.front="light_terminal";
}

IDRegistry.genBlockID("machineNetTerminal");
Block.createBlockWithRotation("machineNetTerminal", [
	{
		name: "Terminal",
		texture: [
			[Terminal_texture.side, 0],
			[Terminal_texture.side, 0],
			[Terminal_texture.side, 0],
			[Terminal_texture.front, 0],
			[Terminal_texture.side, 0],
			[Terminal_texture.side, 0]
		],
		inCreative: true
	}
],"opaque");

Recipes.addShaped({
	id: BlockID.machineNetTerminal, 
	count: 1, 
	data: 0
}, [
	"cbc",
	"bab",
	"cbc"
], [
	'a', BlockID.blockMachineIron,0,
	'b', 331,0,
	'c', ItemID.crystalFluix,0
]);



FactAPI.machine.registerNetTile(BlockID.machineNetTerminal,{
	getEnergyStorage:function(){
		return 60
	},
	getGuiScreen: function(){
		return null
	},
	click:function(){
		var tile = World.getContainer(this.x,this.y-1,this.z);
		var id = World.getBlockID(this.x,this.y-1,this.z);
		if(tile&&tile.tileEntity&&tile.tileEntity.isNetTile&&this.data.energy>=6){
			if(id==BlockID.machineNetEnergy){
				tile.openAs(ui_energy)
				this.data.energy-=6;
				return
			}
			
			var slot = tile.getSlot("slot");
			var c = FactAPI.disk.isItemDisk(slot.id,slot.data);
			if(c){
				c.openAs(UI_disk_item);
			}
			this.data.energy-=6;
		}
	},
	energyTick:FactAPI.machine.basicEnergyStorage
});




// file: common/tile/net/Net_acceptor.js

Translation.addTranslation("Energy Acceptor", {
	ru: "Приемщик энергии"
});

var Acceptor_texture={
	side:"block_machine_iron",
	front:"block_net_acceptor"
}

if(Options.theme){
	Acceptor_texture.side="light_iron_machine";
	Acceptor_texture.front="light_acceptor";
}

IDRegistry.genBlockID("machineNetAcceptor");
Block.createBlock("machineNetAcceptor", [
	{
		name: "Energy Acceptor",
		texture: [
			[Acceptor_texture.side, 0],
			[Acceptor_texture.side, 0],
			[Acceptor_texture.front, 0],
			[Acceptor_texture.front, 0],
			[Acceptor_texture.front, 0],
			[Acceptor_texture.front, 0]
		],
		inCreative: true
	}
],"opaque");

Recipes.addShaped({
	id: BlockID.machineNetIO, 
	count: 1, 
	data: 0
}, [
	"bcb",
	"cac",
	"bcb"
], [
	'a', BlockID.machineEnergyConvertor,0,
	'b', 331,0,
	'c', ItemID.crystalFluix,0
]);

FactAPI.machine.registerEnergyTile(BlockID.machineNetAcceptor,{
	getEnergyStorage: function(){
		return 1000
	},
	energyTick:function(type,src){
		if(type!="AE") {
			var energyNeed = this.getEnergyStorage() - this.data.energy;
			this.data.energy += src.getAll(energyNeed);
			return
		}
		var e =0;
		e=src.add(this.data.energy);
		e>0?this.data.energy=e:this.data.energy=0
		return
	}
});

EnergyTileRegistry.addEnergyTypeForId(BlockID.machineNetAcceptor, AE);
ICRender.getGroup("me-wire").add(BlockID.machineNetAcceptor, -1);




// file: common/tile/net/Net_estorage.js

Translation.addTranslation("Energy Storage", {
	ru: "Энергоячейка"
});

var Energy_texture={
	side:"block_machine_iron",
	front:"block_net_energy"
}

if(Options.theme){
	Energy_texture.side="light_iron_machine";
	Energy_texture.front="light_me_energy";
}

IDRegistry.genBlockID("machineNetEnergy");
Block.createBlock("machineNetEnergy", [
	{
		name: "Energy Storage",
		texture: [
			[Energy_texture.side, 0],
			[Energy_texture.side, 0],
			[Energy_texture.front, 0],
			[Energy_texture.front, 0],
			[Energy_texture.front, 0],
			[Energy_texture.front, 0]
		],
		inCreative: true
	}
],"opaque");

Recipes.addShaped({
	id: BlockID.machineNetEnergy, 
	count: 1, 
	data: 0
}, [
	"bcb",
	"cac",
	"bcb"
], [
	'a', BlockID.blockMachineIron,0,
	'c', ItemID.factoryBattery,0,
	'b', ItemID.crystalFluix,0
]);

FactAPI.machine.registerNetTile(BlockID.machineNetEnergy,{
	getEnergyStorage: function(){
		return 200000
	},
	tick:function(){
		this.container.setScale("energyScale", this.data.energy / this.getEnergyStorage());
	},
	energyTick:function(type,src){
		this.data.energy += src.storage(Math.min(800, this.getEnergyStorage() - this.data.energy), Math.min(800, this.data.energy));
	}
});

var ui_energy= new UI.StandartWindow({
	standart: {
		header: {text: {text: "Energy Cell/Энергоячейка"}},
		inventory: {standart: true},
		background: {standart: true}, 
	},
	drawing: [
		{type: "bitmap", x: 0, y: 0, bitmap: "gui_ground", scale: 8},
		{type: "bitmap", x: 350, y: 50, bitmap: "energybar.ground", scale: 2.6},
	],
	elements: {
		"energyScale": {type: "scale", x: 350, y: 50, direction: 1, value: 0.5, bitmap: "energybar.me_scale", scale: 2.6},
	},
	params: { 
	slot: "slotFactory", 
	invSlot: "slotFactory", 	
	selectionFactoryon: "selectionFactory"
	} 
});




// file: common/tile/net/End

}




// file: common/IC.js

//renders
ModAPI.addAPICallback("ICore", function(api){
	FactAPI.render.addPipeConnections(BlockID.primalGenerator,1);
	FactAPI.render.addPipeConnections(BlockID.geothermalGenerator,1);
	FactAPI.render.addPipeConnections(BlockID.compressor,1);
	FactAPI.render.addPipeConnections(BlockID.electricFurnace,1);
	FactAPI.render.addPipeConnections(BlockID.extractor,1);
	FactAPI.render.addPipeConnections(BlockID.inductionFurnace,1);
	FactAPI.render.addPipeConnections(BlockID.ironFurnace,1);
	FactAPI.render.addPipeConnections(BlockID.macerator,1);
	FactAPI.render.addPipeConnections(BlockID.massFabricator,1);
	FactAPI.render.addPipeConnections(BlockID.metalFormer,1);
	FactAPI.render.addPipeConnections(BlockID.oreWasher,1);
	FactAPI.render.addPipeConnections(BlockID.recycler,1);
	FactAPI.render.addPipeConnections(BlockID.thermalCentrifuge,1);
	FactAPI.render.addPipeConnections(BlockID.miner,1);
	FactAPI.render.addPipeConnections(BlockID.pump,1);

	
	
	
	Translation.addTranslation("Bronze Transport Pipe", {ru: "Бронзовая транспортная труба"});
IDRegistry.genBlockID("pipeItemBronze");
Block.createBlock("pipeItemBronze", [
	{name: "Bronze Transport Pipe", texture: [["pipe_bronze",0]], inCreative: true},
]);


IDRegistry.genBlockID("pipeItemBronze_a");
Block.createBlock("pipeItemBronze_a", [
	{name: "Iron Pipe", texture: [["pipe_bronze",1]], inCreative: false}
]);

Recipes.addShaped({id: BlockID.pipeItemBronze, count: 1, data: 0}, [
		"aba"
	], ['a',ItemID.ingotBronze,0,'b',20,0]);

Pipe.registerTile(BlockID.pipeItemBronze,{friction:0.002});

//model
var var1 = new ICRender.Model();
var var2 = new ICRender.Model();
var var3= new ICRender.Model();
var var4 = new ICRender.Model();
var var5 = new ICRender.Model();
var var6 = new ICRender.Model();

var width=0.5;

var box1=[0.5 + width / 2, 0.5 - width / 2, 0.5 - width / 2, 1, 0.5 + width / 2, 0.5 + width / 2];
var box2= [0, 0.5 - width / 2, 0.5 - width / 2, 0.5 - width / 2, 0.5 + width / 2, 0.5 + width / 2];
var box3=[0.5 - width / 2, 0.5 + width / 2, 0.5 - width / 2, 0.5 + width / 2, 1, 0.5 + width / 2];
var box4=[0.5 - width / 2, 0, 0.5 - width / 2, 0.5 + width / 2, 0.5 - width / 2, 0.5 + width / 2];
var box5=[0.5 - width / 2, 0.5 - width / 2, 0.5 + width / 2, 0.5 + width / 2, 0.5 + width / 2, 1];
var box6=[0.5 - width / 2, 0.5 - width / 2, 0, 0.5 + width / 2, 0.5 + width / 2, 0.5 - width / 2];

var group = ICRender.getGroup("item-pipe");
	group.add(BlockID.pipeItemBronze, -1);
var group2 = ICRender.getGroup("item-wood-pipe");
var group3 = ICRender.getGroup("item-sandstone-pipe");
ICRender.getGroup("item-item-pipe").add(BlockID.pipeItemBronze, -1);
Block.setBlockShape(BlockID.pipeItemBronze, {x: 0.5 - width/2, y: 0.5 - width/2, z: 0.5 - width/2}, {x: 0.5 + width/2, y: 0.5 + width/2, z: 0.5 + width/2});

var model = BlockRenderer.createModel();
model.addBox(0.5 - width / 2, 0.5 - width / 2, 0.5 - width / 2, 0.5 + width / 2, 0.5 + width / 2, 0.5 + width / 2, BlockID.pipeItemBronze, 0);
var1.addEntry(model);
var2.addEntry(model);
var3.addEntry(model);
var4.addEntry(model);
var5.addEntry(model);
var6.addEntry(model);


var boxes1=[
	{side: [1, 0, 0], box: box1, id:BlockID.pipeItemBronze_a},
	{side: [-1, 0, 0],box: box2, id:BlockID.pipeItemBronze_a},
	{side: [0, 1, 0], box: box3, id:BlockID.pipeItemBronze_a},
	{side: [0, -1, 0], box: box4,id:BlockID.pipeItemBronze_a},
	{side: [0, 0, 1], box: box5,id:BlockID.pipeItemBronze_a},
	{side: [0, 0, -1], box: box6,id:BlockID.pipeItemBronze}
];
var boxes2=[
	{side: [1, 0, 0], box: box1, id:BlockID.pipeItemBronze_a},
	{side: [-1, 0, 0],box: box2, id:BlockID.pipeItemBronze_a},
	{side: [0, 1, 0], box: box3, id:BlockID.pipeItemBronze_a},
	{side: [0, -1, 0], box: box4,id:BlockID.pipeItemBronze_a},
	{side: [0, 0, 1], box: box5,id:BlockID.pipeItemBronze},
	{side: [0, 0, -1], box: box6,id:BlockID.pipeItemBronze_a}
];
var boxes3=[
	{side: [1, 0, 0], box: box1, id:BlockID.pipeItemBronze_a},
	{side: [-1, 0, 0],box: box2, id:BlockID.pipeItemBronze},
	{side: [0, 1, 0], box: box3, id:BlockID.pipeItemBronze_a},
	{side: [0, -1, 0], box: box4,id:BlockID.pipeItemBronze_a},
	{side: [0, 0, 1], box: box5,id:BlockID.pipeItemBronze_a},
	{side: [0, 0, -1], box: box6,id:BlockID.pipeItemBronze_a}
];
var boxes4=[
	{side: [1, 0, 0], box: box1, id:BlockID.pipeItemBronze},
	{side: [-1, 0, 0],box: box2, id:BlockID.pipeItemBronze_a},
	{side: [0, 1, 0], box: box3, id:BlockID.pipeItemBronze_a},
	{side: [0, -1, 0], box: box4,id:BlockID.pipeItemBronze_a},
	{side: [0, 0, 1], box: box5,id:BlockID.pipeItemBronze_a},
	{side: [0, 0, -1], box: box6,id:BlockID.pipeItemBronze_a}
];
var boxes5=[
	{side: [1, 0, 0], box: box1, id:BlockID.pipeItemBronze_a},
	{side: [-1, 0, 0],box: box2, id:BlockID.pipeItemBronze_a},
	{side: [0, 1, 0], box: box3, id:BlockID.pipeItemBronze_a},
	{side: [0, -1, 0], box: box4,id:BlockID.pipeItemBronze},
	{side: [0, 0, 1], box: box5,id:BlockID.pipeItemBronze_a},
	{side: [0, 0, -1], box: box6,id:BlockID.pipeItemBronze_a}
];
var boxes6=[
	{side: [1, 0, 0], box: box1, id:BlockID.pipeItemBronze_a},
	{side: [-1, 0, 0],box: box2, id:BlockID.pipeItemBronze_a},
	{side: [0, 1, 0], box: box3, id:BlockID.pipeItemBronze},
	{side: [0, -1, 0], box: box4,id:BlockID.pipeItemBronze_a},
	{side: [0, 0, 1], box: box5,id:BlockID.pipeItemBronze_a},
	{side: [0, 0, -1], box: box6,id:BlockID.pipeItemBronze_a}
];



for (var i in boxes1) {
	var box = boxes1[i];
	var model = BlockRenderer.createModel();
	model.addBox(box.box[0], box.box[1], box.box[2], box.box[3], box.box[4], box.box[5], box.id, 0);
	var1.addEntry(model).asCondition(box.side[0], box.side[1], box.side[2], group, 0);
	var1.addEntry(model).asCondition(box.side[0], box.side[1], box.side[2], group2, 0);
	var1.addEntry(model).asCondition(box.side[0], box.side[1], box.side[2], group3, 0);
}
for (var i in boxes2) {
	var box = boxes2[i];
	var model = BlockRenderer.createModel();
	model.addBox(box.box[0], box.box[1], box.box[2], box.box[3], box.box[4], box.box[5], box.id, 0);
	var2.addEntry(model).asCondition(box.side[0], box.side[1], box.side[2], group, 0);
	var2.addEntry(model).asCondition(box.side[0], box.side[1], box.side[2], group2, 0);
	var2.addEntry(model).asCondition(box.side[0], box.side[1], box.side[2], group3, 0);
}
for (var i in boxes3) {
	var box = boxes3[i];
	var model = BlockRenderer.createModel();
	model.addBox(box.box[0], box.box[1], box.box[2], box.box[3], box.box[4], box.box[5], box.id, 0);
	var3.addEntry(model).asCondition(box.side[0], box.side[1], box.side[2], group, 0);
	var3.addEntry(model).asCondition(box.side[0], box.side[1], box.side[2], group2, 0);
	var3.addEntry(model).asCondition(box.side[0], box.side[1], box.side[2], group3, 0);

}
for (var i in boxes4) {
	var box = boxes4[i];
	var model = BlockRenderer.createModel();
	model.addBox(box.box[0], box.box[1], box.box[2], box.box[3], box.box[4], box.box[5], box.id, 0);
	var4.addEntry(model).asCondition(box.side[0], box.side[1], box.side[2], group, 0);	
	var4.addEntry(model).asCondition(box.side[0], box.side[1], box.side[2], group2, 0);
		var4.addEntry(model).asCondition(box.side[0], box.side[1], box.side[2], group3, 0);

}
for (var i in boxes5) {
	var box = boxes5[i];
	var model = BlockRenderer.createModel();
	model.addBox(box.box[0], box.box[1], box.box[2], box.box[3], box.box[4], box.box[5], box.id, 0);
	var5.addEntry(model).asCondition(box.side[0], box.side[1], box.side[2], group, 0);
	var5.addEntry(model).asCondition(box.side[0], box.side[1], box.side[2], group2, 0);
	var5.addEntry(model).asCondition(box.side[0], box.side[1], box.side[2], group3, 0);

}
for (var i in boxes6) {
	var box = boxes6[i];
	var model = BlockRenderer.createModel();
	model.addBox(box.box[0], box.box[1], box.box[2], box.box[3], box.box[4], box.box[5], box.id, 0);
	var6.addEntry(model).asCondition(box.side[0], box.side[1], box.side[2], group, 0);
	var6.addEntry(model).asCondition(box.side[0], box.side[1], box.side[2], group2, 0);
		var6.addEntry(model).asCondition(box.side[0], box.side[1], box.side[2], group3, 0);

	}


BlockRenderer.enableCoordMapping(BlockID.pipeItemBronze,-1,var1);

TileEntity.registerPrototype(BlockID.pipeItemBronze,{
	getTransportingDirections:function(item){
		var a=[];
		a.push(Pipe.directions[this.data.index]);
		return a
	},
	tick:function(){
		if(!this.data.index)this.data.index=0;
	},
	click:function(){
		if(ItemDictionary.isItemInCathegory(Player.getCarriedItem().id,"wrench")){
			if(this.data.index<5)this.data.index++;
			else this.data.index=0;
			this.map();
			return;
		}
	},
	destroy:function(){
		BlockRenderer.unmapAtCoords(this.x,this.y,this.z);
	},
	map:function(){
		var vis=[
			var1,var2,var3,var4,var5,var6
		];
		BlockRenderer.mapAtCoords(this.x,this.y,this.z,vis[this.data.index]);
	}
});
	
	
ItemDictionary.setItemCathegory(ItemID.wrench, "wrench");

});




