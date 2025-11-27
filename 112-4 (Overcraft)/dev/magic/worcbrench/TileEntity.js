TileEntity.registerPrototype(BlockID.MagicWorbrench, {
	defaultValues: {
		onClick: false
	},
	
	
	getGuiScreen: function(){
		return guiMagicWorbrench;
	},
	
	init:function(){
		this.animationBook = new Animation.Item(this.x+.5, this.y+1.02, this.z+.5);
	},
	
	
	tick: function(){
		var slot0 = this.container.getSlot("slot0");
		var slot1 = this.container.getSlot("slot1");
		var slot2 = this.container.getSlot("slot2");
		var slot3 = this.container.getSlot("slot3");
		var slot4 = this.container.getSlot("slot4");
		var slot5 = this.container.getSlot("slot5");
		var slot6 = this.container.getSlot("slot6");
		var slot7 = this.container.getSlot("slot7");
		var slot8 = this.container.getSlot("slot8");
		var resultSlot = this.container.getSlot("resultSlot");
		var BookSlot = this.container.getSlot("BookSlot");
		
		if(World.getWorldTime()%2==0){
			if(BookSlot.id > 0){
				this.animationBook.describeItem({
			id: BookSlot.id,
			count: 1,
			data: BookSlot.data,
			size: .6,
			rotation:[3.14/2, 0, 0]
		});
		this.animationBook.load();
			}else {
				this.animationBook.destroy();
			}
		}
		
		
		//Vanila Recipes Registry()	
		if (this.data.onClick == true){
		if (this.container.isOpened()){
			var res = Recipes.getRecipeResult(this.container);
			if (res && resultSlot.id == 0){
				this.container.setSlot("resultSlot", res.id, res.count, res.data);	
            if (resultSlot.id > 0){				
		slot0.count--;
		slot1.count--;
		slot2.count--;
		slot3.count--;
		slot4.count--;
		slot5.count--;
		slot6.count--;
		slot7.count--;
		slot8.count--;
		this.container.validateAll();
		this.data.onClick = false;
		}
			}
		}
		
		this.RegistryRecipes({
slot0: 265,          slot1: 0,            slot2: 0,

slot3: 0,            slot4: 0,            slot5: 0,

slot6: 0,              slot7: 0,            slot8: 0,

BookSlot: ItemID.infobook,

resultSlotID: ItemID.BaseCap,
resultSlotData: 0, 
resultSlotCount: 1
});

this.RegistryRecipes({
slot0: 0,          slot1: 0,            slot2: ItemID.BaseCap,

slot3: 0,            slot4: 280,            slot5: 0,

slot6: ItemID.BaseCap,              slot7: 0,            slot8: 0,

BookSlot: ItemID.infobook,

resultSlotID: ItemID.BaseCap,
resultSlotData: 0, 
resultSlotCount: 1
});
		
		
 }
this.container.validateAll();
},

RegistryRecipes: function (r){
var slot0 = this.container.getSlot("slot0");
		var slot1 = this.container.getSlot("slot1");
		var slot2 = this.container.getSlot("slot2");
		var slot3 = this.container.getSlot("slot3");
		var slot4 = this.container.getSlot("slot4");
		var slot5 = this.container.getSlot("slot5");
		var slot6 = this.container.getSlot("slot6");
		var slot7 = this.container.getSlot("slot7");
		var slot8 = this.container.getSlot("slot8");
		var resultSlot = this.container.getSlot("resultSlot");
		var BookSlot = this.container.getSlot("BookSlot");
	
	
	if ((slot0.id == [r.Slot0]) && (slot1.id == [r.Slot1]) && (slot2.id == [r.Slot2]) && (slot3.id == [r.Slot3]) && (slot4.id == [r.Slot4]) && (slot5.id == [r.Slot5]) && (slot6.id == [r.Slot6]) && (slot7.id == [r.Slot7]) && (slot8.id == [r.Slot8]) && BookSlot.id == [r.BookSlot]){
	if (resultSlot.id == 0){
		slot0.count--;
		slot1.count--;
		slot2.count--;
		slot3.count--;
		slot4.count--;
		slot5.count--;
		slot6.count--;
		slot7.count--;
		slot8.count--;
		resultSlot.id = [r.resultSlotID];
		resultSlot.data = [r.resultSlotData];
		resultSlot.count = [r.resultSlotCount];
		this.data.onClick = false;
	      }	
	}
}	

});