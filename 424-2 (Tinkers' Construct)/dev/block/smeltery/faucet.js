IDRegistry.genBlockID("seared_faucet");

Block.createBlockWithRotation("seared_faucet", [
	{name: "Seared Faucet", texture: [["seared_faucet", 0], ["seared_faucet", 0], ["seared_faucet", 0], ["seared_faucet", 0], ["seared_faucet", 0], ["seared_faucet", 0]], inCreative: true}
]);

ToolAPI.registerBlockMaterial(BlockID.seared_faucet, "stone");
Block.setDestroyTime(BlockID.seared_faucet, 5);
Recipes.addShaped({id: BlockID.seared_faucet}, ["aoa", "oao"], ["a", ItemID.seared_brick, 0]);

(function(){
	const render = [], model = [];
	let i = 0;
	for(i = 0; i < 4; i++){
		render.push(new ICRender.Model());
		model.push(BlockRenderer.createModel());
	}
	const addBox = function(x1, x2, z1, z2, y1, y2){
		model[0].addBox(x1 / 16, y1 / 16, z1 / 16, x2 / 16, y2 / 16, z2 / 16, "seared_faucet", 0);
		model[1].addBox(x1 / 16, y1 / 16, (16-z2) / 16, x2 / 16, y2 / 16, (16-z1) / 16, "seared_faucet", 0);
		model[2].addBox(z1 / 16, y1 / 16, x1 / 16, z2 / 16, y2 / 16, x2 / 16, "seared_faucet", 0);
		model[3].addBox((16-z2) / 16, y1 / 16, x1 / 16, (16-z1) / 16, y2 / 16, x2 / 16, "seared_faucet", 0);
	};
	addBox(04,12, 00,06, 04,06);
	addBox(04,06, 00,06, 06,10);
	addBox(10,12, 00,06, 06,10);
	for(i = 0; i < 4; i++){
		render[i].addEntry(model[i]);
		BlockRenderer.setStaticICRender(BlockID.seared_faucet, i, render[i]);
	}
})();

Block.setShape(BlockID.seared_faucet, 04/16, 04/16, 00/16, 12/16, 10/16, 06/16, 0);
Block.setShape(BlockID.seared_faucet, 04/16, 04/16, 10/16, 12/16, 10/16, 16/16, 1);
Block.setShape(BlockID.seared_faucet, 00/16, 04/16, 04/16, 06/16, 10/16, 12/16, 2);
Block.setShape(BlockID.seared_faucet, 10/16, 04/16, 04/16, 16/16, 10/16, 12/16, 3);


TileEntity.registerPrototype(BlockID.seared_faucet, {
	anim: null,
	defaultValues: {
		currentLiquid: null
	},
	init: function(){
		delete this.liquidStorage;
	},
	destroyAnim: function(){
		if(this.anim){
			this.anim.destroy();
			this.anim = null;
		}
	},
	destroy: function(){
		this.destroyAnim();
	},
	click: function(){
		const xz = [[0, -1], [0, 1], [-1, 0], [1, 0]][World.getBlock(this.x, this.y, this.z).data];
		const that = World.getTileEntity(this.x + xz[0], this.y, this.z + xz[1]);
		if(!that || !that.liquidStorage){
			this.destroyAnim();
			return;
		}
		this.liquidStorage = that.liquidStorage;
		this.data.currentLiquid = that.data.currentLiquid || null;
		const liquid = this.data.currentLiquid || this.liquidStorage.getLiquidStored();
		if(liquid){
			this.anim = new Animation.Base(this.x, this.y - 1, this.z);
			const render = new Render();
			const liquidY = Tinco.getLiquidY(liquid);
			render.setPart("body", [{
				type: "box",
				uv: {x: 0, y: liquidY},
				coords: {x: 8 + xz[0] * 5, y: 0, z: -8 - xz[1] * 5},
				size: {x: xz[0] ? 6 : 4, y: 4, z: xz[1] ? 6 : 4}
			}, {
				type: "box",
				uv: {x: 0, y: liquidY},
				coords: {x: 8 + xz[0], y: 3, z: -8 - xz[1]},
				size: {x: xz[0] ? 2 : 4, y: 10, z: xz[1] ? 2 : 4}
			}], {width: 64, height: 448});
			this.anim.describe({skin: "model/liquid.png", render: render.getID()});
			this.anim.load();
		}
	},
	tick: function(){
		if(this.anim){
			if(!(ThreadTime % 20)){
				const stored = this.data.currentLiquid || this.liquidStorage.getLiquidStored();
				if(stored){
					const that = World.getTileEntity(this.x, this.y - 1, this.z);
					if(that && that.liquidStorage){
						const stored2 = that.liquidStorage.getLiquidStored();
						const storage = that.liquidStorage.getLimit(stored) - that.liquidStorage.getAmount(stored);
						if((!stored2 || stored == stored2) && storage > 0){
							that.liquidStorage.addLiquidMilli(stored, this.liquidStorage.getLiquidMilli(stored, Math.min(0.144, this.liquidStorage.getAmount(stored), storage)));
							return;
						}
					}
				}
				this.destroyAnim();
			}
		}
	},
});