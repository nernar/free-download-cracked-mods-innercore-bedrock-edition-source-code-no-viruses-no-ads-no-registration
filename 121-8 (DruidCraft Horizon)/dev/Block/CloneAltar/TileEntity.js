TileEntity.registerPrototype(BlockID.cloneAltar,{
    defaultValues: {
        item: null
    },
	
	init:function(){
		this.animationItem = new Animation.Item(this.x+.5, this.y+1.02, this.z+.5);
	},
	
	animation: function (){
		
		 var Item = Player.getCarriedItem();
		 
	  if ((Item.id > 0) && (Item.count > 0) && (!this.animationItem.load())){
		  if (Item.id != ItemID.fullcolorRing){
		  this.data.item = Item.id;
		Player.setCarriedItem(Item.id, Item.count-1, 0);
		 
				this.animationItem.describeItem({		
			id: this.data.item,
			count: 1,
			data: 0,
			size: .7,
			rotation:[3.14/2, 0, 0]
		});
		
		this.animationItem.load();
		  }
		}
		
	},
	
	drop: function (){
			World.drop(this.x-1, this.y, this.z, this.data.item, 1);
			this.data.item = null;
			this.animationItem.destroy();
	},
	
	ret: function (){
			World.drop(this.x-1, this.y, this.z, this.data.item, 1);
			this.data.item = null;
			this.animationItem.destroy();
	},
	
	destroyBlock: function(){
		this.drop();
	},
	
	result: function (){
		let item = Player.getCarriedItem();
           if (item.id == ItemID.fullcolorRing){
			   if ((Infernos >= 2000) && (Aeris >= 2000) && (Terros >= 2000)){
			   Infernos-= 2000;
			   Aeris-= 2000;
			   Terros-= 2000;
			     World.drop(this.x+.5, this.y+1.1, this.z+.5, this.data.item, 1);
                   World.drop(this.x+.5, this.y+1.1, this.z+.5, this.data.item, 1);
             this.data.item = null;
			 this.animationItem.destroy();
			   }
           }
	},
  
    click: function (){
		this.animation();
		this.result();
		var Item = Player.getCarriedItem();
		if (Item.id <= 0){
		this.ret();
		}
     }
});
