Translation.addTranslation("Item storage", {
	ru: "Хранилище предмета"
});
Translation.addTranslation("Storage of items", {
	ru: "Хранилища предметов"
});
function regiserStorage(nameId, glass, base, texture, level, obj){
	IDRegistry.genBlockID(nameId);
	Block.createBlock(nameId, [
		{
			name: "Item storage",
			texture: [
				[texture[0], texture[1]]
			],
			inCreative: true
		}
	],{
		baseBlock: obj.base,
		destroyTime: 30,
		explosionResistance: 300,
		renderLayer: 1
	});
	
	const id = BlockID[nameId];
	Recipes.addShaped({id: id, count: 1, data: 0}, [
		"ggg",
		"ggg",
		"gbg"
	], ["g", obj.glass, 0, "b", obj.base, 0]);
	
	Item.addCreativeGroup("item_storage", Translation.translate("Storage of items"), [
	  id
	]);
	
	ToolAPI.registerBlockMaterial(id, "stone", level, true);
	Block.registerDropFunction(id, function(coords, id, data, diggingLevel, enchant, item, region){
		if(diggingLevel >= level)
			return [[id, 1, 0]];
		return [[obj.drop, 1, 0]];
	});
	
	let model = new RenderUtil.Model();
	model.addBoxByBlock(null, 0, 0, 0, 1, 2/16, 1, base[0], base[1]);
	model.addBoxByBlock(null, 1/16, 1/16, 1/16, 15/16, 15/16, 15/16, glass[0], glass[1]);
	model.setBlockModel(id);
	
	TileEntity.registerPrototype(id, {
		defaultValues: {
			item: {
				id: 0,
				data: 0,
				extra: 0
			}
		},
		init(){
			this.isItem();
			this.animation(this.data.item);
    },
    client: {
    	updateModel(){
    		this.model.describeItem({
    			id: Network.serverToLocalId(this.networkData.getInt("itemId")),
    			count: 1,
    			data: this.networkData.getInt("itemData"), 
    			size: .475,
    			material: this.networkData.getBoolean("isGlint") == 1 ? "decor_item_storage" : undefined 
				});
			},
			load(){
				this.model = new Animation.Item(this.x + .5, this.y + .55, this.z + .5);
				this.updateModel();
				this.model.loadCustom(AnimationType.VANILLA({
					tick(){
						try{
							this.getShaderUniforms().setUniformValue("DECORITEMSTORAGE", "tick", World.getThreadTime());
						}catch(e){}
					}
				}));
				let that = this;
				this.networkData.addOnDataChangedListener(function(data, isExternal){
					that.updateModel();
				});
			},
			unload(){
				this.model.destroy();
			}
		},
		send(item){
			this.networkData.putInt("itemId", item.id);
    	this.networkData.putInt("itemData", item.data);
    	this.networkData.putBoolean("isGlint", isGlint(item.id, item.data, item.extra||new ItemExtraData()));
    	this.networkData.sendChanges();
		},
		animation(item){
    	this.data.item = {
    		id: item.id,
    		data: item.data,
    		extra: item.extra||null
			};
			this.send(this.data.item)
		}, 
    drop(player){
    	this.blockSource.spawnDroppedItem(this.x, this.y+1,this.z, this.data.item.id, 1, this.data.item.data, this.data.item.extra||null);
    	this.destroyAnimation();
		}, 
    destroyAnimation(){
    	this.data.item = {
    		id: 0,
    		data: 0,
    		extra: null
			};
			this.send(this.data.item);
		}, 
    isItem(){
    	if(!this.data.item) this.data.item = {id: 0, data: 0, extra: null};
    	if(!this.data.item.id) this.data.item.id = 0;
    	if(!this.data.item.data) this.data.item.data = 0;
    	if(!this.data.item.extra) this.data.item.extra = null;
		},
    click(id, count, data, coords, player, extra){
    	Game.prevent();
    	this.isItem();
    	if(this.data.item.id != 0) this.drop(player);
      else{
      	Entity.setCarriedItem(player, id, count-1, data, extra);
      	this.animation({id: id, data: data, count: 1, extra: extra});
			}
		},
    destroyBlock(coords, player){
    	this.drop();
    }
	});
}