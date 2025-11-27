IDRegistry.genBlockID("seared_tank");

Block.createBlock("seared_tank", [
	{name: "Seared Tank", texture: [["seared_tank_top", 0], ["seared_tank_top", 0], ["seared_tank_side", 0]], inCreative: true},
	{name: "Seared Glass", texture: [["seared_glass_bottom", 0], ["seared_glass_top", 0], ["seared_glass_side", 0]], inCreative: true},
	{name: "Seared Window", texture: [["seared_window_bottom", 0], ["seared_window_top", 0], ["seared_window_side", 0]], inCreative: true}
]);

ToolAPI.registerBlockMaterial(BlockID.seared_tank, "stone", 1);
Block.setDestroyTime(BlockID.seared_tank, 5);

Block.registerDropFunction("seared_tank", function(){
	return [];
});

Item.registerNameOverrideFunction(BlockID.seared_tank, function(item, name){
	item = Player.getCarriedItem();
	if(item.extra){
		return name + "\n§7" + LiquidRegistry.getLiquidName(item.extra.getString("stored")) + ": " + (item.extra.getFloat("amount") * 1000) + " mB";
	}
	return name;
});

Block.registerPlaceFunction(BlockID.seared_tank, function(coords, item){
	Game.prevent();
	const c = coords.relative;
	if(GenerationUtils.isTransparentBlock(World.getBlockID(c.x, c.y, c.z))){
		World.setBlock(c.x, c.y, c.z, item.id, item.data);
		const tileEntity = World.addTileEntity(c.x, c.y, c.z);
		tileEntity.data.meta = item.data;
		if(item.extra){
			tileEntity.liquidStorage.addLiquid(item.extra.getString("stored"), item.extra.getFloat("amount"));
		}
	}
});

Recipes.addShaped({id: BlockID.seared_tank, data: 0}, ["aaa", "aba", "aaa"], ["a", ItemID.seared_brick, 0, "b", 20, 0]);
Recipes.addShaped({id: BlockID.seared_tank, data: 1}, ["aba", "aba", "aba"], ["a", ItemID.seared_brick, 0, "b", 20, 0]);
Recipes.addShaped({id: BlockID.seared_tank, data: 2}, ["aba", "bbb", "aba"], ["a", ItemID.seared_brick, 0, "b", 20, 0]);


(function(){
	const render = new ICRender.Model();
	const model = BlockRenderer.createModel();
	model.addBox(0, 0, 0, 1, 1, 1, BlockID.seared_tank, 0);
	model.addBox(02/16, 16/16, 02/16, 14/16, 18/16, 14/16, BlockID.seared_tank, 0);
	render.addEntry(model);
	BlockRenderer.setStaticICRender(BlockID.seared_tank, 0, render);
})();


TileEntity.registerPrototype(BlockID.seared_tank, {
	anim: null,
	defaultValues: {
		meta: 0,
		height: 0
	},

	updateAnim: function(){
		const render = new Render();
		render.setPart("body", [{
			type: "box",
			uv: {x: 0, y: Tinco.getLiquidY(this.liquidStorage.getLiquidStored())},
			coords: {x: 0, y: -this.data.height / 2, z: 0},
			size: {x: 15, y: this.data.height * 0.9375, z: 15}
		}], {width: 64, height: 448});
		this.anim.describe({skin: "model/liquid.png", render: render.getID()});
		this.anim.load();
	},

	init: function(){
		this.anim = new Animation.Base(this.x + 0.5, this.y - 1.5, this.z + 0.5);
		this.updateAnim();
		this.liquidStorage.setLimit(null, 4);
	},

	destroy: function(){
		if(this.anim){
			this.anim.destroy();
			this.anim = null;
		}
	},

	click: function(id, count, data){
		const stored = this.liquidStorage.getLiquidStored();
		const amount = this.liquidStorage.getAmount(stored);
		const liquid = LiquidRegistry.getItemLiquid(id, data);
		Game.prevent();
		if(liquid){
			if(!stored || stored == liquid && amount <= 3){
				const empty = LiquidRegistry.getEmptyItem(id, data);
				this.liquidStorage.addLiquid(liquid, 1);
				Player.decreaseCarriedItem();
				Player.addItemToInventory(empty.id, 1, empty.data);
			}
			return;
		}
		const full = LiquidRegistry.getFullItem(id, data, stored);
		if(full && amount >= 1){
			this.liquidStorage.getLiquid(stored, 1);
			Player.decreaseCarriedItem();
			Player.addItemToInventory(full.id, 1, full.data);
		}
	},

	tick: function(){
		const stored = this.liquidStorage.getLiquidStored();
		const amount = this.liquidStorage.getAmount(stored);

		this.data.height += (amount * 4 - this.data.height) * 0.1;
		this.data.height = Math.round(this.data.height * 100) / 100;

		if(stored){
			if(Math.abs(amount * 4 - this.data.height) > 0.1){
				this.updateAnim();
			}
		}
		else if(this.anim && this.anim.isLoaded){
			this.anim.destroy();
		}

	},

	destroyBlock: function(){
		const stored = this.liquidStorage.getLiquidStored();
		if(stored){
			const extra = new ItemExtraData();
			extra.putString("stored", stored);
			extra.putFloat("amount", this.liquidStorage.getAmount(stored));
			nativeDropItem(this.x + 0.5, this.y, this.z + 0.5, 0, BlockID.seared_tank, 1, this.data.meta, extra);
		}
		else{
			World.drop(this.x + 0.5, this.y, this.z + 0.5, BlockID.seared_tank, 1, this.data.meta);
		}
	}

});