var GrillGUI = new UI.StandartWindow({
	standart: {
   		header: {text: {text: "Grill"}},
	   	inventory: {standart: true},
	   	background: {standart: true}
	 },
	 drawing: [
    {type: "bitmap", x: 500, y: 200, bitmap: "fire_scale0", scale: 3.2},
  ],
		elements: {
     "slotSource": {type: "slot", x: 400, y: 200},
     "slotResult": {type: "slot", x: 600, y: 200},
     "progress": {type: "scale", x: 500, y: 200, bitmap: "fire_scale1", direction: 1, scale: 3.2},
     "text": {type: "text", x: 500, y: 100, width: 100, height: 30, text: " "}
	 }
});

TileEntity.registerPrototype(BlockID.grill, {
  defaultValues: {
    progress: 0,
  },
  initAnimation: function(){
		this.animation = new Animation.Item(this.x + .5, this.y+.2, this.z + .65);
		if(this.container.getSlot("slotSource").id!=0){
		  this.animation.describeItem({
		    	id: this.container.getSlot("slotSource").id,
			   count: 1,
			   data: this.container.getSlot("slotSource").data,
			   rotation: [3.14/2,0,0],
			   size: 0.3
	   	});
		    this.animation.load();
		  }
	 },
	 updateAnimation: function(){
	  	this.animation.destroy();
		 this.initAnimation();
	 },
	 init: function(){
	  	 this.initAnimation();
	 },
	 destroy: function(){
		  this.animation.destroy();
  	},
  	getGuiScreen: function(){
  	  return GrillGUI;
  	},
  	tick: function(){
  	  if(World.getThreadTime()%30==0){
  	    this.updateAnimation();
  	    this.container.setText("text", " ");
  	    if(World.getBlockID(this.x,this.y-1,this.z)==51) World.setBlock(this.x,this.y-1,this.z,51);
  	  }
  	  
  	  this.container.setScale("progress", this.data.progress/400);
  	  
  	  let src = this.container.getSlot("slotSource");
  	  let result = this.container.getSlot("slotResult");
  	  let recipe = Recipes.getFurnaceRecipeResult(src.id, "iron");
  	  
  	  if(recipe&&(result.id==recipe.id&&result.data==recipe.data&&result.count<64||result.id==0)){
  	    if(World.getBlockID(this.x,this.y-1,this.z)==51){
  	      this.data.progress++;
  	    } else this.container.setText("text", TranslateText("This needs fire under block.", "Блоку нужен огонь снизу."));
  	    if(this.data.progress>=400){
  	      this.data.progress=0;
  	      result.id = recipe.id;
  	      result.count++;
  	      result.data = recipe.data;
  	      
  	      src.count--;
  	      this.container.validateAll();
  	    }
  	  }
  	}
});