var groups = {
	last: 0
};
var ignored = {}

IDRegistry.genBlockID("utilsWire");
Block.createBlock("utilsWire", [{
	name: "Pipe",
	texture: [
		["utilsWire", 0]
	],
	inCreative: false
}]);
IDRegistry.genItemID("utilsWire_item");
Item.createItem("utilsWire_item", "Item pipe", {
	name: "pipe_item"
}, {
	stack: 64
});
Recipes.addShaped({
	id: ItemID.utilsWire_item,
	count: 16,
	data: 0
}, [
	"sss",
	"iii",
	"sss"
], ['i', 265, 0, 's', 1, 0]);

IDRegistry.genBlockID("utilsItemGetter");
Block.createBlock("utilsItemGetter", [{
		name: "Extraction pipe",
		texture: [
			["stone", 0]
		],
		inCreative: false
	}, //left
	{
		name: "Extraction pipe",
		texture: [
			["stone", 0]
		],
		inCreative: false
	}, //right
	{
		name: "Extraction pipe",
		texture: [
			["stone", 0]
		],
		inCreative: false
	}, //forward
	{
		name: "Extraction pipe",
		texture: [
			["stone", 0]
		],
		inCreative: false
	}, //back
	{
		name: "Extraction pipe",
		texture: [
			["stone", 0]
		],
		inCreative: false
	}, //up
	{
		name: "Extraction pipe",
		texture: [
			["stone", 0]
		],
		inCreative: false
	} //down
]);
IDRegistry.genItemID("utilsItemGetter_item");
Item.createItem("utilsItemGetter_item", "Extraction pipe", {
	name: "Epipe_item"
}, {
	stack: 64
});
Recipes.addShaped({
	id: ItemID.utilsItemGetter_item,
	count: 1,
	data: 0
}, [
	"ssi",
	"iih",
	"ssi"
], ['i', 265, 0, 's', 1, 0, 'h', 410, 0]);

var lastBlockUtilsItemGetterId;
var blacklist = {};

Saver.addSavesScope("UtilsWire",
	function read(scope) {
		if (typeof (scope) != 'object')groups = JSON.parse(scope);
		if (!groups || typeof (scope) == 'object') {
			groups = {
				last: 0
			};
		}
	},
	function save() {
		return JSON.stringify(groups);
	}
);

function getDataOnSide(side) {
	var blockDaata = [4, 5, 1, 0, 2, 3];
	return blockDaata[side];
}

Callback.addCallback("LevelLoaded", function() {
	for (var i in groups) {
		if (i == 'last') continue;
		var splited = i.split(",");
		var coords = {
			x: splited[0],
			y: splited[1],
			z: splited[2]
		};
		if (groups[i].not) {
			for (var d in groups[i].not) {
				ICRender.getGroup("not" + coords.x + "," + coords.y + "," + coords.z + ":" + groups[i].not[d].x + "," + groups[i].not[d].y + "," + groups[i].not[d].z + "utilsWire").add(World.getBlock(groups[i].not[d].x, groups[i].not[d].y, groups[i].not[d].z).id, -1);
			}
		};
		mapGetter(coords, groups[i].i, groups[i].meta, true);
	}
});

Callback.addCallback("LevelLeft", function () {
	groups = {last:0};
});

Item.registerUseFunction("utilsItemGetter_item", function(coords, item, block) {
	var relBlock = World.getBlock(coords.relative.x, coords.relative.y, coords.relative.z);
	if (relBlock.id != 0 && relBlock.id != 9 && relBlock.id != 11) return;
	lastBlockUtilsItemGetterId = getDataOnSide(coords.side);
	World.setBlock(coords.relative.x, coords.relative.y, coords.relative.z, BlockID.utilsItemGetter, lastBlockUtilsItemGetterId);
	World.addTileEntity(coords.relative.x, coords.relative.y, coords.relative.z);
	groups.last++;
	groups[coords.relative.x + "," + coords.relative.y + "," + coords.relative.z] = {
		i: groups.last,
		meta: lastBlockUtilsItemGetterId
	};
	mapGetter(coords.relative, groups.last, lastBlockUtilsItemGetterId);
	Player.decreaseCarriedItem(1);
});

Item.registerUseFunction("utilsWire_item", function(coords, item, block) {
	var relBlock = World.getBlock(coords.relative.x, coords.relative.y, coords.relative.z);
	if (relBlock.id != 0 && relBlock.id != 9 && relBlock.id != 11) return;
	World.setBlock(coords.relative.x, coords.relative.y, coords.relative.z, BlockID.utilsWire, 0);
	groups.last++;
	groups[coords.relative.x + "," + coords.relative.y + "," + coords.relative.z] = {
		i: groups.last
	};
	mapGetter(coords.relative, groups.last);
	Player.decreaseCarriedItem(1);
});

Block.registerDropFunction("utilsWire", function(coords, id, data, diggingLevel, toolLevel) {
	groups[coords.x + "," + coords.y + "," + coords.z] = undefined;
	BlockRenderer.unmapAtCoords(coords.x, coords.y, coords.z);
	return [[ItemID.utilsWire_item, 1, 0]];
});

Block.registerDropFunction("utilsItemGetter", function(coords, id, data, diggingLevel, toolLevel) {
	groups[coords.x + "," + coords.y + "," + coords.z] = undefined;
	BlockRenderer.unmapAtCoords(coords.x, coords.y, coords.z);
	return [[ItemID.utilsItemGetter_item, 1, 0]];
});

(function() {

	var group = ICRender.getGroup("utilsWire");
	group.add(BlockID.utilsItemGetter, -1);
	group.add(BlockID.utilsWire, -1);

	var boxes = [
		[
			[0.2, 0.2, 0.001, 0.8, 0.8, 0.03] //left
		],
		[
			[0.8, 0.8, 0.97, 0.2, 0.2, 0.999] //right
		],
		[
			[0.97, 0.8, 0.8, 0.999, 0.2, 0.2] //forward
		],
		[
			[0.001, 0.2, 0.2, 0.03, 0.8, 0.8] //back
		],
		[
			[0.8, 0.97, 0.8, 0.2, 0.999, 0.2] //up
		],
		[
			[0.2, 0.001, 0.2, 0.8, 0.03, 0.8] //down
		]
	];

	var width = 0.2;
	var centerWidth = 0.3;

	var boxesWire = [
		[0.5 - width / 2, 0.5 - width / 2, 0, 0.5 + width / 2, 0.5 + width / 2, 0.5 - width / 2], //left
		[0.5 - width / 2, 0.5 - width / 2, 0.5 + width / 2, 0.5 + width / 2, 0.5 + width / 2, 1], //right
		[0.5 + width / 2, 0.5 - width / 2, 0.5 - width / 2, 1, 0.5 + width / 2, 0.5 + width / 2], //forward
		[0, 0.5 - width / 2, 0.5 - width / 2, 0.5 - width / 2, 0.5 + width / 2, 0.5 + width / 2], //back
		[0.5 - width / 2, 0.5 + width / 2, 0.5 - width / 2, 0.5 + width / 2, 1, 0.5 + width / 2], //up
		[0.5 - width / 2, 0, 0.5 - width / 2, 0.5 + width / 2, 0.5 - width / 2, 0.5 + width / 2] //down
	];

	for (var meta = 0; meta < 6; meta++) {
		var boxe = boxes[meta];
		var wire = boxesWire[meta]

		var Dmodel = new ICRender.CollisionShape();
		var render = new ICRender.Model();
		BlockRenderer.enableCoordMapping(BlockID.utilsItemGetter, meta, render);
		var model = BlockRenderer.createModel();
		model.addBox(wire[0], wire[1], wire[2], wire[3], wire[4], wire[5], BlockID.utilsWire, 0);
		model.addBox(0.5 - centerWidth / 2, 0.5 - centerWidth / 2, 0.5 - centerWidth / 2, 0.5 + centerWidth / 2, 0.5 + centerWidth / 2, 0.5 + centerWidth / 2, BlockID.utilsWire, 0);
		render.addEntry(model);

		var boxes1 = [{
				side: [1, 0, 0],
				box: [0.5 + width / 2, 0.5 - width / 2, 0.5 - width / 2, 1, 0.5 + width / 2, 0.5 + width / 2]
			},
			{
				side: [-1, 0, 0],
				box: [0, 0.5 - width / 2, 0.5 - width / 2, 0.5 - width / 2, 0.5 + width / 2, 0.5 + width / 2]
			},
			{
				side: [0, 1, 0],
				box: [0.5 - width / 2, 0.5 + width / 2, 0.5 - width / 2, 0.5 + width / 2, 1, 0.5 + width / 2]
			},
			{
				side: [0, -1, 0],
				box: [0.5 - width / 2, 0, 0.5 - width / 2, 0.5 + width / 2, 0.5 - width / 2, 0.5 + width / 2]
			},
			{
				side: [0, 0, 1],
				box: [0.5 - width / 2, 0.5 - width / 2, 0.5 + width / 2, 0.5 + width / 2, 0.5 + width / 2, 1]
			},
			{
				side: [0, 0, -1],
				box: [0.5 - width / 2, 0.5 - width / 2, 0, 0.5 + width / 2, 0.5 + width / 2, 0.5 - width / 2]
			},
		]
		var entry = Dmodel.addEntry();
		entry.addBox(0.2, 0.2, 0.2, 0.8, 0.8, 0.8);
		BlockRenderer.setCustomCollisionShape(BlockID.utilsItemGetter, meta, Dmodel)
	}
	var Dmodel = new ICRender.CollisionShape();
	var render = new ICRender.Model();
	var model = BlockRenderer.createModel();
	model.addBox(0.5 - centerWidth / 2, 0.5 - centerWidth / 2, 0.5 - centerWidth / 2, 0.5 + centerWidth / 2, 0.5 + centerWidth / 2, 0.5 + centerWidth / 2, BlockID.utilsWire, 0);
	render.addEntry(model);
	var entry = Dmodel.addEntry();
	entry.addBox(0.2, 0.2, 0.2, 0.8, 0.8, 0.8);
	BlockRenderer.setCustomCollisionShape(BlockID.utilsWire, -1, Dmodel);
	BlockRenderer.enableCoordMapping(BlockID.utilsWire, -1, render);
})()

function mapGetter(coords, i, meta, atach) {
	coords.x = Number(coords.x);
	coords.y = Number(coords.y);
	coords.z = Number(coords.z);

	var boxes = [
		[
			[0.2, 0.2, 0.001, 0.8, 0.8, 0.03] //left
		],
		[
			[0.8, 0.8, 0.97, 0.2, 0.2, 0.999] //right
		],
		[
			[0.97, 0.8, 0.8, 0.999, 0.2, 0.2] //forward
		],
		[
			[0.001, 0.2, 0.2, 0.03, 0.8, 0.8] //back
		],
		[
			[0.8, 0.97, 0.8, 0.2, 0.999, 0.2] //up
		],
		[
			[0.2, 0.001, 0.2, 0.8, 0.03, 0.8] //down
		]
	];

	var width = 0.2;
	var centerWidth = 0.3;

	var boxesWire = [
		[0.5 - width / 2, 0.5 - width / 2, 0, 0.5 + width / 2, 0.5 + width / 2, 0.5 - width / 2], //left
		[0.5 - width / 2, 0.5 - width / 2, 0.5 + width / 2, 0.5 + width / 2, 0.5 + width / 2, 1], //right
		[0.5 + width / 2, 0.5 - width / 2, 0.5 - width / 2, 1, 0.5 + width / 2, 0.5 + width / 2], //forward
		[0, 0.5 - width / 2, 0.5 - width / 2, 0.5 - width / 2, 0.5 + width / 2, 0.5 + width / 2], //back
		[0.5 - width / 2, 0.5 + width / 2, 0.5 - width / 2, 0.5 + width / 2, 1, 0.5 + width / 2], //up
		[0.5 - width / 2, 0, 0.5 - width / 2, 0.5 + width / 2, 0.5 - width / 2, 0.5 + width / 2] //down
	];

	var boxe = [];
	if (meta >= 0) {
		boxe = boxes[meta];
		var wire = boxesWire[meta]
	}

	var render = new ICRender.Model();

	for (var n in boxe) {
		var box = boxe[n];
		var model = BlockRenderer.createModel();

		model.addBox(box[0], box[1], box[2], box[3], box[4], box[5], "quartz_block_side", 0);
		render.addEntry(model);
	}
	var model = BlockRenderer.createModel();
	if (meta >= 0) model.addBox(wire[0], wire[1], wire[2], wire[3], wire[4], wire[5], BlockID.utilsWire, 0);
	model.addBox(0.5 - centerWidth / 2, 0.5 - centerWidth / 2, 0.5 - centerWidth / 2, 0.5 + centerWidth / 2, 0.5 + centerWidth / 2, 0.5 + centerWidth / 2, BlockID.utilsWire, 0);
	render.addEntry(model);

	var boxes1 = [{
			side: [1, 0, 0],
			box: [0.5 + width / 2, 0.5 - width / 2, 0.5 - width / 2, 1, 0.5 + width / 2, 0.5 + width / 2]
		},
		{
			side: [-1, 0, 0],
			box: [0, 0.5 - width / 2, 0.5 - width / 2, 0.5 - width / 2, 0.5 + width / 2, 0.5 + width / 2]
		},
		{
			side: [0, 1, 0],
			box: [0.5 - width / 2, 0.5 + width / 2, 0.5 - width / 2, 0.5 + width / 2, 1, 0.5 + width / 2]
		},
		{
			side: [0, -1, 0],
			box: [0.5 - width / 2, 0, 0.5 - width / 2, 0.5 + width / 2, 0.5 - width / 2, 0.5 + width / 2]
		},
		{
			side: [0, 0, 1],
			box: [0.5 - width / 2, 0.5 - width / 2, 0.5 + width / 2, 0.5 + width / 2, 0.5 + width / 2, 1]
		},
		{
			side: [0, 0, -1],
			box: [0.5 - width / 2, 0.5 - width / 2, 0, 0.5 + width / 2, 0.5 + width / 2, 0.5 - width / 2]
		},
	]
	for (var l in boxes1) {
		var box = boxes1[l];
		var blockg = groups[(coords.x + box.side[0]) + "," + (coords.y + box.side[1]) + "," + (coords.z + box.side[2])];
		if (!atach && blockg) {
			BlockRenderer.unmapAtCoords(coords.x + box.side[0], coords.y + box.side[1], coords.z + box.side[2]);
			var crds = {
				x: coords.x + box.side[0],
				y: coords.y + box.side[1],
				z: coords.z + box.side[2]
			}
			mapGetter(crds, blockg.i, blockg.meta, true)
		}
		var model = BlockRenderer.createModel();
		model.addBox(box.box[0], box.box[1], box.box[2], box.box[3], box.box[4], box.box[5], BlockID.utilsWire, 0);
		var gp = "not" + coords.x + "," + coords.y + "," + coords.z + ":" + (coords.x + box.side[0]) + "," + (coords.y + box.side[1]) + "," + (coords.z + box.side[2]) + "utilsWire";
		var gp2 = "not" + (coords.x + box.side[0]) + "," + (coords.y + box.side[1]) + "," + (coords.z + box.side[2]) + ":" + coords.x + "," + coords.y + "," + coords.z + "utilsWire";
		render.addEntry(model).setCondition(ICRender.AND(ICRender.BLOCK(box.side[0], box.side[1], box.side[2], ICRender.getGroup(gp + (ignored[gp] >= 0 ? ignored[gp] : '')), true), ICRender.BLOCK(box.side[0], box.side[1], box.side[2], ICRender.getGroup("utilsWire"), false)));
	}
	BlockRenderer.mapAtCoords(coords.x, coords.y, coords.z, render);
}

function coordsOnBlockData(blockData, coords) {
	var retCoords = [{
			x: coords.x,
			y: coords.y,
			z: coords.z - 1
		},
		{
			x: coords.x,
			y: coords.y,
			z: coords.z + 1
		},
		{
			x: coords.x + 1,
			y: coords.y,
			z: coords.z
		},
		{
			x: coords.x - 1,
			y: coords.y,
			z: coords.z
		},
		{
			x: coords.x,
			y: coords.y + 1,
			z: coords.z
		},
		{
			x: coords.x,
			y: coords.y - 1,
			z: coords.z
		}
	]

	return retCoords[blockData];
}

Callback.addCallback("BuildBlock", function(coords, block, entity) {
	var coordss = {};
	for (var i in sides) {
		coordss.x = coords.x + sides[i][0]
		coordss.y = coords.y + sides[i][1]
		coordss.z = coords.z + sides[i][2]
		var bck = World.getBlock(coordss.x, coordss.y, coordss.z);
		if (bck.id == BlockID.utilsWire || bck.id == BlockID.utilsItemGetter) {
			searchContainers(coordss, coordss)
		}
	}
});

function searchContainers(coordsf, outCoordsf) {
	var containers = [];
	var outCoords = [];
	var started = [];

	function asdds(coords) {
		if (started.indexOf(cts(coords)) != -1) return;
		started.push(cts(coords));
		//devLog("Поиск контейнера на " + coords.x + " " + coords.y + " " + coords.z);
		var tc;
		var coordss = {};
		for (var i in sides) {

			var bonus;

			coordss.x = coords.x + sides[i][0];
			coordss.y = coords.y + sides[i][1];
			coordss.z = coords.z + sides[i][2];

			if (World.getBlock(coords.x, coords.y, coords.z).id == BlockID.utilsItemGetter && World.getTileEntity(coords.x, coords.y, coords.z)) bonus = World.getTileEntity(coords.x, coords.y, coords.z).data.target;
			var not = false;
			if (groups && groups[cts(coords)] && groups[cts(coords)].not && groups[cts(coords)].not.map(function(d) {
					return d.x + ',' + d.y + ',' + d.z
				}).indexOf(cts(coordss)) != -1) not = true;
			if (outCoords.indexOf(cts(coordss)) == -1 && cts(coords) != cts(bonus) && !not) {
				var cont = World.getContainer(coordss.x, coordss.y, coordss.z);
				var tile = World.addTileEntity(coordss.x, coordss.y, coordss.z) || World.getTileEntity(coordss.x, coordss.y, coordss.z);
				if (cont) {
					//devLog("Что то найдено");
					tc = {
						container: cont,
						type: "vanilla"
					};
					if (!tile) {
						//devLog("Найден ванильный контейнер");
						tc.size = World.getContainer(coordss.x, coordss.y, coordss.z).size;
						tc.slots = [];
						for (var k = 0; k < tc.size; k++) {
							tc.slots.push(k);
						}
					} else if (tile && tile.getTransportSlots && tile.getTransportSlots().input) {
						//devLog("Найден контейнер из мода");
						tc.size = tile.getTransportSlots().input.length;
						tc.type = "modded";
						tc.TileEntity = tile;
						tc.slots = tile.getTransportSlots().input;
					} else if (tile && !tile.getTransportSlots) {
						//devLog("У контейнера не указаны слоты");
						tc = false;
					}
				}
				if (tc && (containers && !containers.find(function(element, index, array) {
						if (element.x == coordss.x && element.y == coordss.y && element.z == coordss.z) return index;
					}))) {
					tc.x = coordss.x;
					tc.y = coordss.y;
					tc.z = coordss.z;
					if (tc.size != 0) {
						ICRender.getGroup("utilsWire").add(World.getBlock(coordss.x, coordss.y, coordss.z).id, -1);
					}
					//devLog("pushed");
					containers.push(tc);
					/*if (World.getBlock(coords.x, coords.y, coords.z).id == BlockID.utilsWire) World.setBlock(coords.x, coords.y, coords.z, BlockID.utilsWire, 0);*/
					tc = false;
				}
				if (World.getBlock(coordss.x, coordss.y, coordss.z).id == BlockID.utilsWire || World.getBlock(coordss.x, coordss.y, coordss.z).id == BlockID.utilsItemGetter) {
					outCoords.push(cts(coords));
					asdds(coordss);
				}
			}
		}

	}
	outCoords.push(cts(outCoordsf));
	asdds(coordsf);
	//devLog('Поиск окончен');
	/*devLog(containers.map(function (d) {
		return d.x + ',' + d.y + ',' + d.z
	}));*/
	/*var _containers = [];
	for (var i = containers.length - 1; i >= 0; i--) {
		_containers.push(containers[i]);
	}*/
	return containers;

}

/*Callback.addCallback('tick', function () {
	Game.tipMessage(cts(getPointed().pos));
});*/

function targetIsContainer(coords) {
	var tc = false;
	var coordss = coords;
	if (World.getContainer(coordss.x, coordss.y, coordss.z)) {
		//devLog("target Что то найдено");
		tc = {
			container: World.getContainer(coordss.x, coordss.y, coordss.z),
			type: "vanilla"
		};
		if (!World.getTileEntity(coordss.x, coordss.y, coordss.z)) {
			//devLog("target Найдена ванильная хрень");
			tc.size = World.getContainer(coordss.x, coordss.y, coordss.z).size;
			tc.slots = [];
			for (var k = 0; k < tc.size; k++) {
				tc.slots.push(k);
			}
		} else if ((World.addTileEntity(coordss.x, coordss.y, coordss.z) || World.getTileEntity(coordss.x, coordss.y, coordss.z)) && World.getTileEntity(coordss.x, coordss.y, coordss.z).getTransportSlots && World.getTileEntity(coordss.x, coordss.y, coordss.z).getTransportSlots().output) {
			//devLog("target Найдена модная хрень");
			tc.size = World.getTileEntity(coordss.x, coordss.y, coordss.z).getTransportSlots().output.length;
			tc.type = "modded";
			tc.TileEntity = World.getTileEntity(coordss.x, coordss.y, coordss.z);
			tc.slots = World.getTileEntity(coordss.x, coordss.y, coordss.z).getTransportSlots().output;
		} else if (World.getTileEntity(coordss.x, coordss.y, coordss.z) && !World.getTileEntity(coordss.x, coordss.y, coordss.z).getTransportSlots) {
			tc = false;
		}
	}

	return tc;
}

function searchExportSlot(container, slots, slot) {
	if (container.getSlot(slots[slot]).id != 0) {
		//devLog("True slot: " + slot);
		return slots[slot];
	} else if (slot < slots.length - 1) {
		return searchExportSlot(container, slots, slot + 1);
	} else {
		//devLog("Slot not found");
		return "Slot not found";
	}
}

function searchImportSlot(containers, slot, cont, item) {
	var item2 = containers[cont].container.getSlot(containers[cont].slots[slot]);
	if (item2.id == 0 || (item2.id == item.id && item2.data == item.data && item2.count < Item.getMaxStack(item.id) && !item.extra)) {
		devLog('cont: ' + cont);
		return {
			slot: containers[cont].slots[slot],
			container: containers[cont].container
		};
	} else if (slot < containers[cont].slots.length - 1) {
		return searchImportSlot(containers, slot + 1, cont, item);
	} else if (cont < containers.length - 1) {
		return searchImportSlot(containers, 0, cont + 1, item);
	} else {
		//devLog("Error on export((");
		return false;
	}
}

function pay(container1, container2, slot1, slot2, item) {
	//devLog("pay");
	var item1 = container1.getSlot(slot1);
	if (item1.count != item.count) return;
	var item2 = container2.getSlot(slot2);
	var count = Math.min(item2.count + item.count, 64);
	var other = Math.max(item2.count + item.count - 64, 0);
	container2.setSlot(slot2, item.id, count, item.data);
	container1.setSlot(slot1, item1.id, other, item1.data)
	if (container1.validateSlot) container1.validateSlot(slot1);
	if (container2.validateSlot) container2.validateSlot(slot2);
}

function apply(ths) {
	var target = targetIsContainer(ths.data.target);
	if (!target) return devLog("!target");
	var containers = searchContainers(ths, ths.data.target);
	if (containers.length == 0) return devLog("no containers");
	var exportSlot = searchExportSlot(target.container, target.slots, 0)
	if (exportSlot == "Slot not found") return devLog("export slot not found");
	var exportItem = target.container.getSlot(exportSlot);
	var importData = searchImportSlot(containers, 0, 0, target.container.getSlot(exportSlot));
	if (!importData) return devLog("no import slot");
	pay(target.container, importData.container, exportSlot, importData.slot, target.container.getSlot(exportSlot));
}

var containerWIRE = new UI.Container();
var wireGUI = new UI.StandartWindow({
	standart: {
		header: {
			text: {
				text: Translation.translate('Extraction pipe')
			}
		},
		background: {
			standart: true
		}
	},
	drawing: [],
	elements: {
		"DellayScroll": {
			type: "scroll",
			x: 100,
			y: 200,
			length: 800,
			min: 1,
			max: 120,
			isInt: true,
			value: 0
		},
		"text": {
			type: "text",
			x: 300,
			y: 150,
			text: "Частота обновления (в тиках) : 0"
		},
		"text2": {
			type: "text",
			x: 425,
			y: 450,
			font: {
				color: android.graphics.Color.WHITE,
				shadow: 0.5,
				size: 15
			},
			text: Translation.translate("1 second = 20 ticks")
		}
	}
})

TileEntity.registerPrototype(BlockID.utilsItemGetter, {
	defaultValues: {
		blockData: null,
		target: null,
		slot: null,
		ticks: 0,
		updateFreq: 60,
		value: 0
	},
	getGuiScreen: function() {
		if (Player.getCarriedItem().id == ItemID.utilsWrench) return;
		Game.prevent();
		this.container.openAs(wireGUI);
		var content = this.container.getGuiContent();
		var ths = this;
		content.elements.DellayScroll.onNewValue = function(value, container, element) {
			ths.data.updateFreq = value;
			content.elements.text.text = Translation.translate("Update frequency (in ticks)") + " : " + ths.data.updateFreq;
		}
		content.elements.DellayScroll.value = this.data.updateFreq;
		content.elements.text.text = Translation.translate("Update frequency (in ticks)") + " : " + this.data.updateFreq;
	},
	created: function() {
		this.data.blockData = lastBlockUtilsItemGetterId;
		this.data.target = coordsOnBlockData(this.data.blockData, this);
	},
	tick: function() {
		this.data.ticks++;
		if (this.data.ticks >= this.data.updateFreq) {
			this.data.ticks = 0;
			try {
				eval("apply(this)");
			} catch (err) {
				devLog(err);
			};
		}
	},
	init: function() {
		searchContainers(this, this.data.target);
	}
})