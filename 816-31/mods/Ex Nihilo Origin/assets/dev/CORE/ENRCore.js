ItemModel.setCurrentCacheGroup("Ex Nihilo Rebirth", "2.0 β-5.2.3");

function setDrop(block, it) {
	Block.registerDropFunctionForID(block,
	function(id, data) {
		return [[it, 1, 0]]
	})
};

var ClientSend = function(desc) {
	desc.client && desc.client.send(desc.name, desc.pack);
};

var decreasCarriedItem = function(id, count, data, player, number) {
	if (!player) return;
	Entity.setCarriedItem(player, id, count-number, data);
};

var Gravel_TYPE_ = Block.createSpecialType({
	sound: "gravel"
});
var Sand_TYPE_ = Block.createSpecialType({
	sound: "sand"
});

let BlocksTypes = {
	gravel: [],
	dust: [],
	sand: [],
	crushed: [],
	broken: [],
	Powdered: []
}

function addBlockType(type, blocks){
	for(let i in blocks)
        BlocksTypes[type].push(blocks[i]);
}

var base_1_register = function(metal) {
	IDRegistry.genBlockID("ex_" + metal + "gravel");
	Block.createBlock("ex_" + metal + "gravel", [{
		name: metal + " Ore Gravel",
		texture: [["ex_" + metal + "gravel", 0]],
		inCreative: true
	}], Gravel_TYPE_);
	ToolAPI.registerBlockMaterial(BlockID["ex_" + metal + "gravel"], "stone");
	EXCore.Hammer[eval("BlockID.ex_" + metal + "gravel")] = {
		output: "crushed",
		data: metal
	}
	EXCore._transformation(eval("BlockID.ex_" + metal + "gravel"));
	IDRegistry.genItemID("ex_" + metal + "broken");
	Item.createItem("ex_" + metal + "broken", "Broken " + metal + " Ore", {
		name: "ex_" + metal + "broken",
		meta: 0
	});
	IDRegistry.genBlockID("ex_" + metal + "sand");
	Block.createBlock("ex_" + metal + "sand", [{
		name: metal + " Ore Sand",
		texture: [["ex_" + metal + "sand", 0]],
		inCreative: true
	}], Sand_TYPE_);
	ToolAPI.registerBlockMaterial(BlockID["ex_" + metal + "sand"], "stone");
	EXCore.Hammer[eval("BlockID.ex_" + metal + "sand")] = {
		output: "Powdered",
		data: metal
	}
	EXCore._transformation(eval("BlockID.ex_" + metal + "sand"));
	IDRegistry.genItemID("ex_" + metal + "crushed");
	Item.createItem("ex_" + metal + "crushed", "Crushed " + metal + " Ore", {
		name: "ex_" + metal + "crushed",
		meta: 0
	});
	IDRegistry.genBlockID("ex_" + metal + "dust");
	Block.createBlock("ex_" + metal + "dust", [{
		name: metal + " Ore Dust",
		texture: [["ex_" + metal + "dust", 0]],
		inCreative: true
	}], Sand_TYPE_);
	ToolAPI.registerBlockMaterial(BlockID["ex_" + metal + "dust"], "stone");
	IDRegistry.genItemID("ex_" + metal + "Powdered");
	Item.createItem("ex_" + metal + "Powdered", "Powdered " + metal + " Ore", {
		name: "ex_" + metal + "powdered",
		meta: 0
	});
	IDRegistry.genBlockID("ex_nether" + metal + "gravel");
	Block.createBlock("ex_nether" + metal + "gravel", [{
		name: "Nether " + metal + " Ore Gravel",
		texture: [["ex_nether" + metal + "gravel", 0]],
		inCreative: true
	}], Gravel_TYPE_);
	ToolAPI.registerBlockMaterial(BlockID["ex_nether" + metal + "gravel"], "stone");
	IDRegistry.genItemID("ex_nether" + metal + "broken");
	Item.createItem("ex_nether" + metal + "broken", "Nether Broken " + metal + " Ore", {
		name: "ex_nether" + metal + "broken",
		meta: 0
	});
	IDRegistry.genBlockID("ex_ender" + metal + "gravel");
	Block.createBlock("ex_ender" + metal + "gravel", [{
		name: "Ender " + metal + " Ore Gravel",
		texture: [["ex_ender" + metal + "gravel", 0]],
		inCreative: true
	}], Gravel_TYPE_);
	ToolAPI.registerBlockMaterial(BlockID["ex_ender" + metal + "gravel"], "stone");
	IDRegistry.genItemID("ex_ender" + metal + "broken");
	Item.createItem("ex_ender" + metal + "broken", "Ender Broken " + metal + " Ore", {
		name: "ex_ender" + metal + "broken",
		meta: 0
	});
	
	addBlockType("gravel", [BlockID["ex_" + metal + "gravel"], BlockID["ex_ender" + metal + "gravel"], BlockID["ex_nether" + metal + "gravel"]]);
	addBlockType("sand", [BlockID["ex_" + metal + "sand"]]);
	addBlockType("dust", [BlockID["ex_" + metal + "dust"]]);
	
	Item.addCreativeGroup("Ore Gravel", Translation.translate("Ore Gravel"), [BlockID["ex_" + metal + "gravel"], BlockID["ex_ender" + metal + "gravel"], BlockID["ex_nether" + metal + "gravel"]]);
	Item.addCreativeGroup("Ore Broken", Translation.translate("Broken Ore"), [ItemID["ex_" + metal + "broken"], ItemID["ex_ender" + metal + "broken"], ItemID["ex_nether" + metal + "broken"]]);
	Item.addCreativeGroup("Ore Sand", Translation.translate("Ore Sand"), [BlockID["ex_" + metal + "sand"]]);
	Item.addCreativeGroup("Ore Crushed", Translation.translate("Crushed Ore"), [ItemID["ex_" + metal + "crushed"]]);
	Item.addCreativeGroup("Ore Dust", Translation.translate("Ore Dust"), [BlockID["ex_" + metal + "dust"]]);
	Item.addCreativeGroup("Ore Powdered", Translation.translate("Powdered Ore"), [ItemID["ex_" + metal + "Powdered"]]);
	Recipes.addShaped({
		id: BlockID["ex_ender" + metal + "gravel"],
		count: 1,
		data: 0
	},
	["nn", "nn", ""], ["n", ItemID["ex_ender" + metal + "broken"], -1]);
	Recipes.addShaped({
		id: BlockID["ex_nether" + metal + "gravel"],
		count: 1,
		data: 0
	},
	["nn", "nn", ""], ["n", ItemID["ex_nether" + metal + "broken"], -1]);
	Recipes.addShaped({
		id: BlockID["ex_" + metal + "dust"],
		count: 1,
		data: 0
	},
	["nn", "nn", ""], ["n", ItemID["ex_" + metal + "Powdered"], -1]);
	Recipes.addShaped({
		id: BlockID["ex_" + metal + "sand"],
		count: 1,
		data: 0
	},
	["nn", "nn", ""], ["n", ItemID["ex_" + metal + "crushed"], -1]);
	Recipes.addShaped({
		id: BlockID["ex_" + metal + "gravel"],
		count: 1,
		data: 0
	},
	["nn", "nn", ""], ["n", ItemID["ex_" + metal + "broken"], -1]);

};

var base_2_register = function(metal, outid, outdata) {
	Recipes.addFurnace(BlockID["ex_" + metal + "gravel"], outid, outdata);
	Recipes.addFurnace(BlockID["ex_" + metal + "sand"], outid, outdata);
	Recipes.addFurnace(BlockID["ex_" + metal + "dust"], outid, outdata);
	Recipes.addFurnace(BlockID["ex_nether" + metal + "gravel"], outid, outdata);
	Recipes.addFurnace(BlockID["ex_ender" + metal + "gravel"], outid, outdata);
};
let ICore; 
ModAPI.addAPICallback("ICore", function(api){
ICore = api;
});
var registerFUNC = function(metal, outid, outdata) {
	base_1_register(metal);
	base_2_register(metal, outid, outdata);
Callback.addCallback("ModsLoaded", function(){
if(!ICore)
return;
ICore.Recipe.addRecipeFor("macerator", BlockID["ex_" + metal + "gravel"], {
		id: outid,
		data: outdata,
		count: 2
	});
ICore.Recipe.addRecipeFor("macerator", BlockID["ex_nether" + metal + "gravel"], {
		id: outid,
		data: outdata,
		count: 2
	});
ICore.Recipe.addRecipeFor("macerator", BlockID["ex_ender" + metal + "gravel"], {
		id: outid,
		data: outdata,
		count: 2
	});
ICore.Recipe.addRecipeFor("macerator", BlockID["ex_" + metal + "sand"], {
		id: outid,
		data: outdata,
		count: 2
	});
ICore.Recipe.addRecipeFor("macerator", BlockID["ex_" + metal + "dust"], {
		id: outid,
		data: outdata,
		count: 2
	});
});
};
var EXCore = {
	isHammer: {},
	Hammer: {},
	Mesh: {},
	sieve: {},
	registerIngot: function(nameID, name) {
		IDRegistry.genItemID(nameID);
		Item.createItem(nameID, name, {
			name: "ex_" + nameID,
			meta: 0
		});
		Item.addCreativeGroup("Ingots", Translation.translate("Ingots"), [ItemID[nameID]]);
	},
	registerMesh: function(metal, number1, number2) {
		IDRegistry.genItemID("ex_mesh" + metal);
		Item.createItem("ex_mesh" + metal, metal + " Mesh", {
			name: "ex_" + metal + "Mesh",
			meta: 0
		});
		this.Mesh[[ItemID["ex_mesh" + metal]]] = {
			data: metal,
			dropchance: number1,
			brokechance: number2
		}
		Item.addCreativeGroup("mesh", Translation.translate("Mesh"), [ItemID["ex_mesh" + metal], ]);
	},
	register: function(metal, outid, outdata) {
		registerFUNC(metal, outid, outdata);
	},
	register_1: function(metal) {
		base_1_register(metal);
	},
	register_2: function(metal, outid, outdata) {
		base_2_register(metal, outid, outdata);
	},
	defineAllSalts: function(metal, texture) {
		IDRegistry.genBlockID("ex_oreSalts" + metal);
		Block.createBlock("ex_oreSalts" + metal, [{
			name: metal + " Ore Salts",
			texture: [[texture, 0]],
			inCreative: true
		}]);
		Item.addCreativeGroup("oreSalts", Translation.translate("Ore Salts"), [BlockID["ex_oreSalts" + metal]]);
		IDRegistry.genItemID("ex_" + metal + "DustSalts");
		Item.createItem("ex_" + metal + "DustSalts", metal + " Dust Salts", {
			name: "ex_" + metal + "DustSalts",
			meta: 0
		});
		Item.addCreativeGroup("Salts", Translation.translate("Dust Salts"), [ItemID["ex_" + metal + "DustSalts"]]);
		var render = new ICRender.CollisionShape();
		var entry = render.addEntry();
		entry.addBox(1, 1, 1, 0, 0, 0);
		BlockRenderer.setCustomCollisionShape(BlockID["ex_oreSalts" + metal], 0, render);
		var render = new ICRender.Model();
		var model = BlockRenderer.Model();
		model.addBox(c7, c0, c7, c9, c4, c9, BlockID["ex_oreSalts" + metal], 0);
		model.addBox(c7, c0, c8, c8, c6, c9, BlockID["ex_oreSalts" + metal], 0);
		model.addBox(c8, c1, c7, c9, c7, c8, BlockID["ex_oreSalts" + metal], 0);
		model.addBox(c7, c1, c7, c8, c7, c8, BlockID["ex_oreSalts" + metal], 0);
		model.addBox(c8, c1, c8, c9, c7, c9, BlockID["ex_oreSalts" + metal], 0);
		model.addBox(c7, c0, c7, c9, c5, c9, BlockID["ex_oreSalts" + metal], 0);
		model.addBox(c7, c2, c11, c8, c8, c12, BlockID["ex_oreSalts" + metal], 0);
		model.addBox(c8, c2, c5, c9, c8, c6, BlockID["ex_oreSalts" + metal], 0);
		model.addBox(c10, c2, c8, c11, c9, c9, BlockID["ex_oreSalts" + metal], 0);
		model.addBox(c4, c3, c7, c5, c8, c8, BlockID["ex_oreSalts" + metal], 0);
		render.addEntry(model);
		BlockRenderer.setStaticICRender(BlockID["ex_oreSalts" + metal], 0, render);
		Recipes.addShaped({
			id: BlockID["ex_oreSalts" + metal],
			count: 1,
			data: 0
		},
		["ooo", "ooo", "ooo"], ["o", ItemID["ex_" + metal + "DustSalts"], -1]);
	},
	registerHammer: function(ore, texture, meta) {
		IDRegistry.genItemID("ex_hammers" + ore);
		Item.createItem("ex_hammers" + ore, ore + " Hammer", {
			name: texture,
			meta: meta
		},
		{
			stack: 1
		});
		this.isHammer[ItemID["ex_hammers" + ore]] = {}
		Item.addCreativeGroup("Hammer", Translation.translate("Hammer"), [ItemID["ex_hammers" + ore]]);
	},
	addHammer: function(id) {
		this.isHammer[id] = {}
		Item.addCreativeGroup("Hammer", Translation.translate("Hammer"), [id]);
	},
	transformation: function(blockid, id, count, data) {
		Block.registerDropFunctionForID(blockid,
		function(coords, i, d, level, e, item) {
			if (item && EXCore.isHammer[item.id]) {
				return [[id, count, data]]
			} else {
				if (Block.isNativeTile(i)) {
					return [[i, 1, d]];
				}
				return [[i, 1, d]];
			}
		})
	},
	_transformation: function(blockID) {
		Block.registerDropFunctionForID(blockID,
		function(coords, id, data, level, e, item) {
			if (EXCore.isHammer[item.id]) {
				if (EXCore.Hammer[blockID].output) {
					var chance = Math.random() * 100
					if (chance < 3) {
						return [[eval("ItemID.ex_" + EXCore.Hammer[blockID].data + EXCore.Hammer[blockID].output), 7, 0]]
					} else {
						if (chance < 15) {
							return [[eval("ItemID.ex_" + EXCore.Hammer[blockID].data + EXCore.Hammer[blockID].output), 6, 0]]
						} else {
							if (chance < 35) {
								return [[eval("ItemID.ex_" + EXCore.Hammer[blockID].data + EXCore.Hammer[blockID].output), 5, 0]]
							} else {
								return [[eval("ItemID.ex_" + EXCore.Hammer[blockID].data + EXCore.Hammer[blockID].output), 4, 0]]
							}
						}
					}
				}
			} else if (Block.isNativeTile(i)) {
				return [[id, 1, data]];
			}
			return [[Block.convertBlockToItemId(i), 1, d]];
		})
	}
};

var threadHelper = {
	setTimeout: function(func, time) {
		var Thread = new java.lang.Thread(new java.lang.Runnable({
			run: function() {
				Thread.sleep(time);
				try {
					java.lang.Thread.yield();
					func();
				} catch(e) {
					Logger.Log("Thread is wrong.", "ERROR");
					Logger.LogError(e);
				}
			}
		}));
		Thread.start();
	}
};

var Crucible = {
	types: {},
	dataSet: function(data, object) {
		this.types[data] = object;
	},
	dataGet: function(data, id, data1) {
		return eval(this.types[data][id + ":" + data1]);
	},
	dataAdd: function(data, id, data1, object) {
		this.types[data][id + ":" + data1] = object;
	}
};
