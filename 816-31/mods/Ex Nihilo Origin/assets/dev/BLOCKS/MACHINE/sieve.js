Sieve.addSievedBlock(3, {
	data: "dirt",
	texture: "dirt"
});
Sieve.addSievedBlock(13, {
	data: "gravel",
	texture: "gravel"
});
Sieve.addSievedBlock(12, {
	data: "sand",
	texture: "sand"
});
Sieve.addSievedBlock(BlockID.ex_dust, {
	data: "dust",
	texture: "ex_dust"
});
Sieve.addSievedBlock(88, {
	data: "soulsand",
	texture: "soul_sand"
});
Sieve.addSievedBlock(BlockID.ex_gravelNether, {
	data: "netherGravel",
	texture: "ex_gravelNether"
});
Sieve.addSievedBlock(BlockID.ex_gravelEnder, {
	data: "enderGravel",
	texture: "ex_gravelEnder"
});
Sieve.addSievedBlock(BlockID.ex_saltcoarse, {
	data: "coarsesalt",
	texture: "ex_coarsesalt"
});
for (var i = 0; i < gravel.length; i++) {
	if (i < gravel.length) {
		Sieve.addSieved(13, gravel[i][0], gravel[i][1], gravel[i][2], gravel[i][3], gravel[i][4])
	}
}
for (var i = 0; i < dirt.length; i++) {
	if (i < dirt.length) {
		Sieve.addSieved(3, dirt[i][0], dirt[i][1], dirt[i][2], dirt[i][3], dirt[i][4])
	}
}
for (var i = 0; i < sand.length; i++) {
	if (i < sand.length) {
		Sieve.addSieved(12, sand[i][0], sand[i][1], sand[i][2], sand[i][3], sand[i][4])
	}
}
for (var i = 0; i < dust.length; i++) {
	if (i < dust.length) {
		Sieve.addSieved(BlockID.ex_dust, dust[i][0], dust[i][1], dust[i][2], dust[i][3], dust[i][4])
	}
}
for (var i = 0; i < soulsand.length; i++) {
	if (i < soulsand.length) {
		Sieve.addSieved(88, soulsand[i][0], soulsand[i][1], soulsand[i][2], soulsand[i][3], soulsand[i][4])
	}
}
for (var i = 0; i < netherGravel.length; i++) {
	if (i < netherGravel.length) {
		Sieve.addSieved(BlockID.ex_gravelNether, netherGravel[i][0], netherGravel[i][1], netherGravel[i][2], netherGravel[i][3], netherGravel[i][4])
	}
}
for (var i = 0; i < enderGravel.length; i++) {
	if (i < enderGravel.length) {
		Sieve.addSieved(BlockID.ex_gravelEnder, enderGravel[i][0], enderGravel[i][1], enderGravel[i][2], enderGravel[i][3], enderGravel[i][4])
	}
}
for (var i = 0; i < coarsesalt.length; i++) {
	if (i < coarsesalt.length) {
		Sieve.addSieved(BlockID.ex_saltcoarse, coarsesalt[i][0], coarsesalt[i][1], coarsesalt[i][2], coarsesalt[i][3], coarsesalt[i][4])
	}
}
var SieveType = Block.createSpecialType({
	sound: "wood"
});
var sieveSounds = new Sound("sieve.ogg", __config__.get("sound_volume"));
var breakSounds = new Sound("meshbreak.ogg", __config__.get("sound_volume"));
function randomNum(minNum, maxNum, q) {
	var i;
	var n;
	var m = maxNum - minNum + 1,
	a = function(k) {
		return ((q - 1) * (k - 1) / (m - 1) + 1) * 2 / (m * (q + 1))
	},
	s = function(k) {
		return (a(1) + a(k)) * k / 2
	};
	for (i = minNum; i <= maxNum; i += 1) {
		n = i - minNum + 1;
		if (Math.random() >= s(n - 1) && Math.random() < s(n)) {
			return i
		}
	}
	return maxNum ? maxNum: 0
}
IDRegistry.genBlockID("ex_sieve");
Block.createBlock("ex_sieve", [{
	name: "Sieve",
	texture: [["ex_sieve", 2], ["ex_sieve", 0], ["ex_sieve", 1]],
	inCreative: true
}], SieveType);
var boxes_1 = [[c0, c8, c0, c16, c12, c1], [c0, c8, c15, c16, c12, c16], [c0, c8, c1, c1, c12, c15], [c15, c8, c1, c16, c12, c15], [c1, c0, c1, c2, c9, c2], [c14, c0, c14, c15, c9, c15], [c14, c0, c1, c15, c9, c2], [c1, c0, c14, c2, c9, c15]];
var boxes_2 = [[c1, c0, c1, c15, c12, c15], [c0, c8, c15, c16, c12, c16], [c0, c8, c1, c1, c12, c15], [c15, c8, c1, c16, c12, c15], [c1, c0, c1, c2, c9, c2], [c14, c0, c14, c15, c9, c15], [c14, c0, c1, c15, c9, c2], [c1, c0, c14, c2, c9, c15]];
var model = BlockRenderer.Model();
for (var box in boxes_1) {
	var array = boxes_1[box];
	model.addBox(array[0], array[1], array[2], array[3], array[4], array[5], [["planks", 0]])
};
var render = new ICRender.Model();
render.addEntry(model);
BlockRenderer.enableCoordMapping(BlockID.ex_sieve, 0, render);
var Collision = new ICRender.CollisionShape();
for (var box in boxes_2) {
	var array = boxes_2[box];
	Collision.addEntry().addBox(array[0], array[1], array[2], array[3], array[4], array[5])
};
BlockRenderer.setCustomCollisionShape(BlockID.ex_sieve, 0, Collision);
var sieveModelFUNC = function(metal, texture, x, y, z, click) {
	var model = BlockRenderer.createModel();
	for (var box in boxes_1) {
		var array = boxes_1[box];
		model.addBox(array[0], array[1], array[2], array[3], array[4], array[5], [["planks", 0]])
	};
	model.addBox(c1, 11 / 16, c1, c15, 15 / 16 - (0.25 / 14) * click, c15, [[texture, 0]]);
	model.addBox(c1, 0.55, c1, c15, 0.6, c15, [["ex_sieve" + metal + "Mesh", 0]]);
	var render = new ICRender.Model();
	render.addEntry(model);
	BlockRenderer.mapAtCoords(x, y, z, render, false);
	var Collision = new ICRender.CollisionShape();
	for (var box in boxes_2) {
		var array = boxes_2[box];
		Collision.addEntry().addBox(array[0], array[1], array[2], array[3], array[4], array[5])
	};
	Collision.addEntry().addBox(c1, 11 / 16, c1, c15, 15 / 16 - (0.25 / 14) * click, c15);
	Collision.addEntry().addBox(c1, 0.55, c1, c15, 0.6, c15);
	BlockRenderer.setCustomCollisionShape(BlockID.ex_sieve, 0, Collision)
};
var prototype = {
	useNetworkItemContainer: true,
	defaultValues: {
		dropChance: 0,
		brokeChance: 0,
		click: 0,
		_break: 0,
		SieveOnce: false
	},
	init: function() {
		var meshSlot = this.container.getSlot("meshSlot");
		var inPutSlot = this.container.getSlot("inPutSlot");
		if (EXCore.Mesh[meshSlot.id] && EXCore.Mesh[meshSlot.id].data) {
			if (inPutSlot.count > 0) {
				this.sieveModel(EXCore.Mesh[meshSlot.id].data, Sieve.sieve[inPutSlot.id].texture)
			} else {
				this.sieveModel(EXCore.Mesh[meshSlot.id].data, "air")
			}
		}
	},
	client: {
		renderModel: function() {
			let metal = this.networkData.getString("mesh");
			let texture = this.networkData.getString("texture");
			let click = this.networkData.getInt("click");
			if (prototype.defaultValues.SieveOnce != false) sieveModelFUNC(metal, texture, this.x, this.y, this.z, click)
		},
		load: function() {
			this.renderModel();
			var self = this;
			this.networkData.addOnDataChangedListener(function(data, isExternal) {
				self.renderModel()
			})
		}
	},
	sieveModel: function(metal, texture) {
		var meshSlot = this.container.getSlot("meshSlot");
		this.data.SieveOnce = true;
		if (metal) {
			this.networkData.putString("mesh", metal)
		} else {
			this.networkData.putString("mesh", EXCore.Mesh[meshSlot.id].data)
		}
		if (texture) {
			this.networkData.putString("texture", texture)
		} else {
			this.networkData.putString("texture", "air")
		}
		this.networkData.putInt("click", this.data.click);
		sieveModelFUNC(metal, texture, this.x, this.y, this.z, this.data.click)
	},
	click: function(id, count, data, croods, player) {
Game.prevent();
		var inPutSlot = this.container.getSlot("inPutSlot");
		var meshSlot = this.container.getSlot("meshSlot");
		if (!EXCore.Mesh[meshSlot.id]) {
			if (EXCore.Mesh[id]) {
				meshSlot.setSlot(id, 1, data);
				this.data.dropChance = EXCore.Mesh[id].dropchance;
				this.data.brokeChance = EXCore.Mesh[id].brokechance;
				decreasCarriedItem(id, count, data, player, 1);
				this.sieveModel(EXCore.Mesh[meshSlot.id].data, "air")
			}
		}
		if (EXCore.Mesh[meshSlot.id]) {
			if (inPutSlot.id <= 0 && Sieve.sieve[id]) {
				Game.prevent();
				inPutSlot.setSlot(id, 1, data);
				decreasCarriedItem(id, count, data, player, 1)
			}
			if (inPutSlot.count > 0 && this.data.click < 14) {
				sieveSounds.play();
				this.data.click++;
				this.sieveModel(EXCore.Mesh[meshSlot.id].data, Sieve.sieve[inPutSlot.id].texture, player);
				Game.prevent()
			} else {
				Game.prevent()
			}
			if (this.data.click >= 14) {
				this.sieveModel(EXCore.Mesh[meshSlot.id].data, "air");
				this.data._break += 1;
try{
				for (let i in Sieve[inPutSlot.id]) {
					if (Math.random() * 100 <= Sieve[inPutSlot.id][i].chance + this.data.dropChance) {
						ScrutinyAPI_V1.giveScrutiny(player, "skyblock", "gl", "sieve", true);
						this.blockSource.spawnDroppedItem(this.x + 0.5, this.y + 0.9, this.z + 0.5, i, randomNum(Sieve[inPutSlot.id][i].dropmin, Sieve[inPutSlot.id][i].dropmax, 1 / 4), Sieve[inPutSlot.id][i].data)
					}
				}
}catch(e){
}
				if (Config.meshBreak) {
					if (this.data._break >= this.data.brokeChance) {
						breakSounds.play();
						this.data._break = 0;
						meshSlot.setSlot(0, 0, 0);
						BlockRenderer.unmapAtCoords(this.x, this.y, this.z)
					}
				}
				inPutSlot.setSlot(0, 0, 0);
				this.data.click = 0
			}
		}
	},
	tick(){
		StorageInterface.checkHoppers(this);
	},
	destroy: function() {
		BlockRenderer.unmapAtCoords(this.x, this.y, this.z);
		this.container.getSlot("inPutSlot").count = 0
	}
};
TileEntity.registerPrototype(BlockID.ex_sieve, prototype);
Sieve.addSieved("dirt", ItemID.ex_seedsBamboo, 0, 1, 1, 2);
Sieve.addSieved("dirt", ItemID.ex_seedsBerries, 0, 1, 1, 3);
StorageInterface.createInterface(BlockID.ex_sieve, {
	slots: {
		"inPutSlot": {input: true, output: false, maxStack: 1, isValid(item, side, tileEntity){
			var inPutSlot = tileEntity.container.getSlot("inPutSlot");
			return inPutSlot.id <= 0 && Sieve.sieve[item.id];
		}}
	},
	getSlotMaxStack(name){
		return 1;
	}
});
