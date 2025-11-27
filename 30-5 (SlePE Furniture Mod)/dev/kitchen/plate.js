createFurnitureWood("plate","plate","qurtz_block",0, "Plate", ItemID.plate, BlockID.plate);
Translation.addTranslation("Plate", {ru: "Тарелка"});
Recipes.addShaped({id: IDData.item.plate, count: 1, data: 0}, ["vvv", "qvq", "vqv"], ["q",406,0]);
Block.setShape(BlockID.plate,1/8,0,1/8,7/8,1/8,7/8);

var render = new ICRender.Model();
BlockRenderer.setStaticICRender (BlockID.plate, 0, render);
var model = BlockRenderer.createModel();
var plateModel = ModelAPI.newArray();
plateModel.addBoxByID("downPlate", 2/8, 0, 2/8, 6/8, 1/16, 6/8, 155);
plateModel.addBoxByID("ledge0", 1/8, 1/16, 1/8, 2/8, 1/8, 7/8, 155);
plateModel.addBoxByID("ledge1", 2/8, 1/16, 1/8, 6/8, 1/8, 2/8, 155);
plateModel.addBoxByID("ledge2", 6/8, 1/16, 1/8, 7/8, 1/8, 7/8, 155);
plateModel.addBoxByID("ledge1", 2/8, 1/16, 6/8, 6/8, 1/8, 7/8, 155);

plateModel.compile(model);
render.addEntry(model);
var sN= ModAPI.requireGlobal("Entity.isSneaking");
TileEntity.registerPrototype(BlockID.plate, {
	defaultValues: {
		id:0,
		data:0
	},
	destroy:function(){
		if(this.animation.isLoaded)this.animation.destroy();
		if(this.data.id!=0)World.drop(this.x+.5, this.y+0.25, this.z+.5, this.data.id, 1, this.data.data);
	},
	init:function(){
		this.animation = new Animation.Item(this.x+.5, this.y+2.5/16, this.z+.5);
		this.animationSet();
	},
	animationSet:function(){
		this.animation = this.animation||new Animation.Item(this.x+.5, this.y+2.5/16, this.z+.5);
		if(this.data.id>0){
			if(this.data.id<256){
				this.animation.describeItem({
			id: this.data.id,
			count: 1,
			data: this.data.data,
			size: .5,
		});
		this.animation.setPos(this.x + .57, this.y + 0.20, this.z + .43);
			}else{
			this.animation.describeItem({
			id: this.data.id,
			count: 1,
			data: this.data.data,
			size: .5,
			rotation:[3.14/2, 0, 0]
		});
		this.animation.setPos(this.x + .5, this.y+1/16+1/64, this.z + .5);
		}
		if(!this.animation.isLoaded){
			this.animation.load();
		}
		}else{
			if(this.animation.isLoaded)this.animation.destroy();
		}
	},
	click:function(){
		if(this.data.id!=0){
			World.drop(this.x+.5, this.y+0.25, this.z+.5, this.data.id, 1, this.data.data);
		}
		if(!sN(Player.get())){
		this.data.id=Player.getCarriedItem().id;
		this.data.data=Player.getCarriedItem().data;
		Player.decreaseCarriedItem(1);
		Game.prevent();
		this.animationSet();
		}else{
			this.data.id=0;
			this.data.data=0;
			if(this.animation.isLoaded)this.animation.destroy();
		}
	}
});
