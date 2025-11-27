var Cake_TYPE_ = Block.createSpecialType({
	base: 92,
	sound: "cloth",
	destroytime: 0.2
});
IDRegistry.genBlockID("ex_endCake");
Block.createBlockWithRotation("ex_endCake", [{
	name: "End Cake",
	texture: [["enr_endCake", 0], ["enr_endCake", 1], ["enr_endCake", 2], ["enr_endCake", 2], ["enr_endCake", 2], ["enr_endCake", 2]],
	inCreative: true
}], Cake_TYPE_);

var render = new ICRender.Model();
var model = BlockRenderer.Model();
model.addBox(c1, c0, c1, c15, c8, c15, BlockID.ex_endCake, 0);
render.addEntry(model);
BlockRenderer.enableCoordMapping(BlockID.ex_endCake, 0, render);

var Collision = new ICRender.CollisionShape();
Collision.addEntry().addBox(c1, c0, c1, c15, c8, c15);
BlockRenderer.setCustomCollisionShape(BlockID.ex_endCake, 0, Collision);

Block.registerDropFunctionForID(BlockID.ex_endCake,
function(id, data) {
	return [];
});

var BuildEndCake = function(shape, x, y, z) {
	let model = BlockRenderer.Model();
	let render = new ICRender.Model();
	model.addBox(c1, c0, c1, c15, c8, shape / 16, BlockID.ex_endCake, 0);
	Collision.addEntry().addBox(c1, c0, c1, c15, c8, shape / 16);
	render.addEntry(model);
	BlockRenderer.setCustomCollisionShape(BlockID.ex_endCake, 0, Collision);
	BlockRenderer.mapAtCoords(x, y, z, render);
};

TileEntity.registerPrototype(BlockID.ex_endCake, {
	useNetworkItemContainer: true,
	defaultValues: {
		data: 15,
		shape: 15,
		transfer: false,
		BuildEndCakeOnce: false
	},
	client: {
		tileEntityPrototype: TileEntity.getPrototype(BlockID.ex_endCake),
		renderModel: function() {
			let shape = this.networkData.getInt("shape");
			if (this.tileEntityPrototype && this.tileEntityPrototype.defaultValues.BuildEndCakeOnce != false) {
				BuildEndCake(shape, this.x, this.y, this.z);
			}
		},
		load: function() {
			this.renderModel();
			var self = this;
			this.networkData.addOnDataChangedListener(function(data, isExternal) {
				self.renderModel();
			});
		}
	},
	show: function() {
		this.data.BuildEndCakeOnce = true;
		this.networkData.putInt("shape", this.data.shape);
		BuildEndCake(this.data.shape, this.x, this.y, this.z);
	},
	tick: function() {
		if (this.data.data != this.data.shape) {
			this.data.shape = this.data.data;
			this.show();
		}
		this.data.shape <= 4 && this.blockSource.setBlock(this.x, this.y, this.z, 0, 0);
	},
	click: function(id, count, data, coords, player) {
		this.data.data -= 2;
		this.data.transfer = true;
		if (this.data.transfer == true && Entity.getDimension(player) == 0) {
			this.data.transfer = false;
			Dimensions.transfer(player, 2);
		}
	},
	destroy: function() {
		BlockRenderer.unmapAtCoords(this.x, this.y, this.z);
	}
});

Callback.addCallback("CustomDimensionTransfer", function (entity, from, to) {
    if (to == 2) {
        let player = entity;
        let dimensionId = to;
        threadHelper.setTimeout(function(){
            Callback.invokeCallback("GenerateAndSetPos", player, dimensionId);
        }, 1300);
    };
});
Callback.addCallback("GenerateAndSetPos", function(playerUid, dimensionId) {
	let blockSource = BlockSource.getDefaultForDimension(dimensionId);
	for (let coords_X = 99; coords_X <= 101; coords_X++) {
		for (let coords_Z = -1; coords_Z <= 1; coords_Z++) {
			for (let coords_Y = 49; coords_Y <= 51; coords_Y++) {
				blockSource.setBlock(coords_X, coords_Y, coords_Z, 0, 0);
			};
			blockSource.setBlock(coords_X, 48, coords_Z, VanillaTileID.obsidian, 0);
		};
	};
	Entity.setPosition(playerUid, 100 + 0.5, 53, 0 + 0.5);
});