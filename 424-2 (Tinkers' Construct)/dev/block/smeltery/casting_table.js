IDRegistry.genBlockID("casting_table");

Block.createBlock("casting_table", [
	{name: "Casting Table", texture: [["casting_table_bottom", 0], ["casting_table_top", 0], ["casting_table_side", 0]], inCreative: true}
]);

ToolAPI.registerBlockMaterial(BlockID.casting_table, "stone", 1);
Block.setDestroyTime(BlockID.casting_table, 5);
Recipes.addShaped({id: BlockID.casting_table}, ["aaa", "aoa", "aoa"], ["a", ItemID.seared_brick, 0]);

(function(){
	const render = new ICRender.Model();
	const model = BlockRenderer.createModel();
	model.addBox(00/16, 15/16, 00/16, 15/16, 16/16, 01/16, BlockID.casting_table, 0);
	model.addBox(15/16, 15/16, 00/16, 16/16, 16/16, 15/16, BlockID.casting_table, 0);
	model.addBox(01/16, 15/16, 15/16, 16/16, 16/16, 16/16, BlockID.casting_table, 0);
	model.addBox(00/16, 15/16, 01/16, 01/16, 16/16, 16/16, BlockID.casting_table, 0);
	model.addBox(00/16, 10/16, 00/16, 16/16, 15/16, 16/16, BlockID.casting_table, 0);
	model.addBox(00/16, 00/16, 00/16, 05/16, 10/16, 05/16, BlockID.casting_table, 0);
	model.addBox(00/16, 00/16, 11/16, 05/16, 10/16, 16/16, BlockID.casting_table, 0);
	model.addBox(11/16, 00/16, 00/16, 16/16, 10/16, 05/16, BlockID.casting_table, 0);
	model.addBox(11/16, 00/16, 11/16, 16/16, 10/16, 16/16, BlockID.casting_table, 0);
	render.addEntry(model);
	BlockRenderer.setStaticICRender(BlockID.casting_table, 0, render);
})();


TileEntity.registerPrototype(BlockID.casting_table, {
	anim: null,
	animItem: null,
	animCast: null,
	defaultValues: {
		progress: 0,
		height: 0
	},
	updateAnim: function(){
		const render = new Render();
		render.setPart("body", [{
			type: "box",
			uv: {x: 0, y: Tinco.getLiquidY(this.liquidStorage.getLiquidStored())},
			coords: {x: 8, y: -7 - this.data.height / 2, z: -8},
			size: {x: 14, y: this.data.height, z: 14}
		}], {width: 64, height: 448});
		this.anim.describe({skin: "model/liquid.png", render: render.getID()});
		this.anim.load();
	},
	resetLimit: function(){
		for(let key in this.liquidStorage.liquidLimits){
			delete this.liquidStorage.liquidLimits[key];
		}
		this.liquidStorage.setLimit(null, -0.0001);
	},
	setLimit: function(){
		const castData = Material.getCast(this.container.getSlot("slotCast").id);
		for(let key in Material.material){
			if(Material.material[key].isMetal && Material.material[key].type == castData.type){
				this.liquidStorage.setLimit(Material.material[key].material, castData.cost);
			}
		}
	},
	setAnim: function(name){
		const id = this.container.getSlot("slot" + name).id;
		if(id){
			const key = "anim" + name;
			this[key] = new Animation.Item(this.x + 0.5, this.y + 1, this.z + 0.5);
			this[key].describeItem({id: id, count: 1, size: name == "Cast" ? 1 : 12/16, rotation: [Math.PI/2, 0, 0]});
			this[key].load();
		}
	},
	destroyAnim: function(name){
		const key = "anim" + name;
		if(this[key]){
			this[key].destroy();
			this[key] = null;
		}
	},
	init: function(){
		this.anim = new Animation.Base(this.x, this.y - 1, this.z);
		this.updateAnim();
		this.setAnim("Item");
		this.setAnim("Cast");
		this.resetLimit();
	},
	destroy: function(){
		this.destroyAnim("");
		this.destroyAnim("Item");
		this.destroyAnim("Cast");
	},
	click: function(id){
		let castData;
		if(this.animItem){
			this.container.dropSlot("slotItem", this.x + 0.5, this.y + 1, this.z + 0.5);
			this.destroyAnim("Item");
			if(this.animCast){
				this.setLimit();
				return;
			}
			this.resetLimit();
			return;
		}
		if(this.animCast){
			this.container.dropSlot("slotCast", this.x + 0.5, this.y + 1, this.z + 0.5);
			this.destroyAnim("Cast");
			this.resetLimit();
			return;
		}
		if(Material.getShape(id)){
			this.container.setSlot("slotItem", id, 1, 0);
			this.setAnim("Item");
			this.liquidStorage.setLimit("alubrass", 0.144);
			this.liquidStorage.setLimit("gold", 0.288);
			Player.decreaseCarriedItem();
			return;
		}
		castData = Material.getCast(id);
		if(castData){
			this.container.setSlot("slotCast", id, 1, 0);
			this.setAnim("Cast");
			this.setLimit();
			Player.decreaseCarriedItem();
			return;
		}
	},
	tick: function(){
		const stored = this.liquidStorage.getLiquidStored();
		const relative = this.liquidStorage.getRelativeAmount(stored);

		this.data.height += (relative - this.data.height) * 0.1;
		this.data.height = Math.round(this.data.height * 100) / 100;

		if(stored){
			if(relative == 1 && ++this.data.progress >= 40){
				let slot = this.container.getSlot("slotCast") || {};
				let type = Material.getCast(slot.id) || {};
				this.data.progress = 0;
				this.liquidStorage.setAmount(stored, 0);
				this.resetLimit();
				let result = null;
				for(let key in Material.material){
					if(Material.material[key].isMetal && Material.material[key].material == stored && Material.material[key].type == type.type){
						result = key - 0;
					}
				}
				if(result){
					this.container.setSlot("slotItem", result, 1, 0);
					this.setAnim("Item");
				}
				else{
					slot = this.container.getSlot("slotItem") || {};
					if(slot.id){
						type = Material.getShape(slot.id);
						this.container.setSlot("slotCast", ItemID["cast_" + type], 1, 0);
						this.setAnim("Cast");
					}
				}
			}
			if(Math.abs(relative - this.data.height) > 0.1){
				this.updateAnim();
			}
		}
		else if(this.anim && this.anim.isLoaded){
			this.anim.destroy();
		}

	}
});