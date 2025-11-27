IDRegistry.genItemID("itemShelf");
Item.createItem("itemShelf", "Item Shelf", {name: "itemshelf", meta: 0}, {stack: 64});
Translation.addTranslation("Item Shelf", {ru: "Полка для предметов"});
Recipes.addShaped({id: ItemID.itemShelf, count: 1, data: 0}, ["bbb", "bsb", "bbb"], ["b",5,-1, "s", 280,0]);
var itemShelfModel = ModelAPI.newArray();
itemShelfModel.addBoxByID("left", 0/16, 1/16, 0/16, 1/16, 15/16, 6/16, 5,0);
itemShelfModel.addBoxByID("right", 15/16, 1/16, 0/16, 16/16, 15/16, 6/16, 5,0);
itemShelfModel.addBoxByID("center", 7.5/16, 1/16, 0/16, 8.5/16, 15/16, 6/16, 5,0);
itemShelfModel.addBoxByID("top", 0/16, 15/16, 0/16, 16/16, 16/16, 6/16, 5,0);
itemShelfModel.addBoxByID("bottom", 0/16, 0/16, 0/16, 16/16, 1/16, 6/16, 5,0);
itemShelfModel.addBoxByID("center1", 1/16, 7.5/16, 0/16, 7.5/16, 8.5/16, 6/16, 5,0);
itemShelfModel.addBoxByID("center2", 8.5/16, 7.5/16, 0/16, 15/16, 8.5/16, 6/16, 5,0);

Furniture.placeUnifiedEntity(BlockID.woodFurniture, ItemID.itemShelf,itemShelfModel,{gui:storageGUI, created:function(tile){
	tile.data.slot0={id:0, data:0};
	tile.data.slot1={id:0, data:0};
	tile.data.slot2={id:0, data:0};
	tile.data.slot3={id:0, data:0};
	tile.gRC=function(x,z){
		var deg=this.data.orientation*90;
		return {x:(x-.5)*Math.cos(deg),z:(z-.5)*Math.sin(deg)};
	};
	tile.updateAnimation=function(tile){
		var slot0=this.container.getSlot("itemShelf0");
		var slot1=this.container.getSlot("itemShelf1");
		var slot2=this.container.getSlot("itemShelf2");
		var slot3=this.container.getSlot("itemShelf3");
		if(Item.getNumericId(slot0.id)>=256){
			this.itemAnimation0.describeItem({
				id: slot0.id,
				data: slot0.data,
				size: .25,
				count:1,
				rotation:[0,0,Math.PI/2]
			});
			this.itemAnimation0.setPos(this.x + .2, this.y + 1+1/32, this.z + .5);
		}else{
			this.itemAnimation0.describeItem({
				id: slot0.id,
				data: slot0.data,
				size: 0.4,
				count:1,
				//rotation:[0,0,Math.PI/2]
			});
			coord=this.gRC(13/16,3/16);
			this.itemAnimation0.setPos(coord.x+this.x, this.y + .7, this.z + coord.z);
		}
		if(Item.getNumericId(slot0.id)!=0){
		if(!this.itemAnimation0.isLoaded){
			this.itemAnimation0.load();
		}
		}else{
			if(this.itemAnimation0.isLoaded)this.itemAnimation0.destroy();
		}
	};
}, destroy:function(tile){
	tile.itemAnimation0.destroy();
}, init:function(tile){
	tile.itemAnimation0 =new Animation.Item(tile.x + .2, tile.y + 1.12, tile.z + .43);
}, tick:function(tile){
	//Debug.m(tile);
	var slot0=tile.container.getSlot("itemShelf0");
	var slot1=tile.container.getSlot("itemShelf1");
	var slot2=tile.container.getSlot("itemShelf2");
	var slot3=tile.container.getSlot("itemShelf3");
	if(slot0.id!=tile.data.slot0.id||slot0.data!=tile.data.slot0.data){
		tile.data.slot0=slot0;
		tile.updateAnimation(tile);
	}
}});
