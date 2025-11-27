var ovenMachine=(function(){
         var recipe ={
//	"4_0": 1,
//	"12_0": 20,
//	"14_0": 266,
//	"15_0": 265,
// "17_0": 263,
//	"19_0": 19,
//	"81_0": 351,
//	"82_0": 172,
//	"87_0": 405,
//	"98_0": 98,
//	"162_0": 263,
	"319_0": 320,
//	"337_0": 336,
	"349_0": 350,
	"363_0": 364,
	"365_0": 366,
	"392_0": 393,
	"411_0": 412,
	"423_0": 424,
	"432_0": 433,
	"460_0": 463
};
         var translate = {};
        var ovenModelArray = [
             [0, 0, 0, 1, 12/16,1/16 ,[
                 ["红粘土",0],
                 ["红粘土",0],
                 ["红粘土",0],
                 ["白粘土",0],
                 ["红粘土",0]
                 ["红粘土",0]         
             ]],
             [
            0, 11/16, 0, 1, 12/16,10/16 ,[
            ["白粘土",0],
            ["红粘土",0],
            ["红粘土",0],
            ["红粘土",0],
            ["红粘土",0],
            ["红粘土",0]                                         
            ]],
             [0, 0, 0, 1/16, 12/16,10/16 ,[["红粘土",0],["红粘土",0],["红粘土",0],["红粘土",0],["红粘土",0],["白粘土",0]]],
             
             [15/16, 0, 0, 1, 12/16,10/16 ,[["红粘土",0],["红粘土",0],["红粘土",0],["红粘土",0],["白粘土",0],["红粘土",0]]],
[0, 0, 0, 1, 1/16,10/16 ,[["红粘土",0],["白粘土",0],["红粘土",0],["红粘土",0],["红粘土",0],["红粘土",0]]],
[0-1/16, 1/16, 1/16, 0, 11/16,9/16 ,[["红粘土",0],["红粘土",0],["红粘土",0],
["红粘土",0],
["红粘土",0],
["红粘土",0]
]],
[1, 1/16, 1/16, 17/16, 11/16,9/16 ,[["红粘土",0],
["红粘土",0],
["红粘土",0],
["红粘土",0],
["红粘土",0],
["红粘土",0]
]],
[0, 11/16, 10/16, 1, 12/16,12/16 ,[["白粘土",0],
["白粘土",0],
["白粘土",0],
["白粘土",0],
["白粘土",0],
["白粘土",0]
]],
[0, 0, 10/16, 1, 1/16,12/16 ,[["白粘土",0],
["白粘土",0],
["白粘土",0],
["白粘土",0],
["白粘土",0],
["白粘土",0]
]],
[0, 0, 10/16, 1/16, 12/16,12/16 ,[["白粘土",0],
["白粘土",0],
["白粘土",0],
["白粘土",0],
["白粘土",0],
["白粘土",0]
]],
[15/16, 0, 10/16, 1, 12/16,12/16 ,[["白粘土",0],
["白粘土",0],
["白粘土",0],
["白粘土",0],
["白粘土",0],
["白粘土",0]
]],
[13/16, 0, 10/16, 15/16, 11/16,12/16 ,[["白粘土",0],
["白粘土",0],
["白粘土",0],
["白粘土",0],
["白粘土",0],
["白粘土",0]
]],
[13/16, 1/16, 1/16, 15/16, 11/16,11/16 ,[["白粘土",0],
["白粘土",0],
["白粘土",0],
["白粘土",0],
["白粘土",0],
["白粘土",0]
]],
[1/16, 1/16, 11/16, 13/16, 11/16,11.5/16 ,[["红玻璃",0],
["红玻璃",0],
["红玻璃",0],
["红玻璃",0],
["红玻璃",0],
["红玻璃",0]
]],
[1/16, 1/16, 12/16, 13/16, 11/16, 12.2/16 ,[["玻璃",0],
["玻璃",0],
["玻璃",0],
["玻璃",0],
["玻璃",0],
["玻璃",0]
]]
         ];
         IDRegistry.genItemID("coffeeworkshop$oven");
         Item.createItem("coffeeworkshop$oven", "小型烤箱", {name:"oven"}, {inTech: true,stack: 64});
        directionBlockAPI.creatBlock("coffeeworkshop$oven", "小型烤箱", false);
         directionBlockAPI.createModel1("coffeeworkshop$oven", ovenModelArray);
         directionBlockAPI.bundItem(ItemID.coffeeworkshop$oven, "coffeeworkshop$oven", true);

for (var grindi = 0;grindi <= 3;grindi += 1){
TileEntity.registerPrototype(BlockID["coffeeworkshop$oven" + grindi], {

     defaultValues: {
         progress:0,
		burn:0,
		id:0,
		burnmax:0,
		size:0.5
},
	initAnimation: function(id){
	     var that = this;
    var slotSource = that.container.getSlot("slotSource");
		this.animation1 = new Animation.Item(this.x + .5, this.y + this.data.size / 2 - .02, this.z + .5);
		//this.animation2 = new Animation.Item(this.x + .5, this.y + this.data.size / 2 - .02, this.z + .5);
		this.animation1.describeItem({
			id: id,
			count: 1,
			data: 0,
			size: 0.5
		});
		this.animation1.load();
	},
	
	destroyAnimation: function(){
		if (this.animation1){
			this.animation1.destroy();
		}
		
	},
	
	updateAnimation: function(){
		//this.destroyAnimation();
		//this.initAnimation();
	},
	
	init: function(){
		//this.initAnimation();
	},
	
	destroy: function(){
		this.destroyAnimation();
	},
     tick:function(){
  var that = this;
    var slotSource = that.container.getSlot("slotSource");
    //this.animation1 = new Animation.Item(this.x + .5, this.y + this.data.size / 2 - .02, this.z + .5);
  // this.animation1.describeItem({
//			id: slotSource.id,
	//		count: 1,
//			data: 0,
	//		rotation: "x",
			//(function(){if (grindi === 0||1){return "x";}else{return "z";}}()),
	//		size: this.data.size
//		});
//this.updateAnimation();
		  //this.animation2 = new Animation.Item(this.x + .5, this.y + this.data.size / 2 - .02, this.z + .5);
        
     var slotFuel = that.container.getSlot("slotFuel");
     
         var slotResult= that.container.getSlot("slotResult");
         var burn = Recipes.getFuelBurnDuration(slotFuel.id, slotFuel.data);
   this.container.setScale("burningScale", this.data.burn / this.data.burnmax || 0);
		this.container.setScale("progressScale", this.data.progress / 160);
   if(slotFuel.count < 1)
{
that.container.clearSlot("slotFuel");
}
if(slotSource.count < 1)
{
that.container.clearSlot("slotSource");
}
     if ( that.data.burn === 0){
        if(burn && slotFuel.count >= 1){
               that.data.burn += burn;
           that.data.burnmax = burn;
            if(LiquidRegistry.getItemLiquid(slotFuel.id, slotFuel.data)){
					var empty = LiquidRegistry.getEmptyItem(slotFuel.id, slotFuel.data);
					slotFuel.id = empty.id;
					slotFuel.data = empty.data;
              }
           else{ that.container.setSlot("slotFuel", slotFuel.id, slotFuel.count-1, 0);
        }
           }
       }
       else if (that.data.burn >= 1){
           that.data.burn -= 1;
           if(!machine.ovenMachine.getRecipe(slotSource.id)){
              if(that.data.progress >= 1){
                  that.data.progress -= 1;
               }
            }
            else{
                 if(that.data.progress <= 159){
                     that.data.progress += 1;
                     if(this.data.progress === 1){
            this.destroyAnimation();
            this.initAnimation(that.container.getSlot("slotSource").id);
           }
               //      if(!that.data.id){
                 //    that.data.id = slotSource.id;
                //    that.updateAnimation(); 
                  //   }
                     
                     
                     }
                 else if(that.data.progress === 160){
                     that.changeItem();
                     this.destroyAnimation();
                     }
           }
           }
           if(that.data.burn === 0 && that.data.progress >= 1){
               that.data.progress -= 1;
               }
   
     },
     changeItem :function(){
         var that = this;
     var slotFuel = that.container.getSlot("slotFuel");
     var slotSource = that.container.getSlot("slotSource");
     var slotResult= that.container.getSlot("slotResult");
      if(!slotResult.id){
         that.container.setSlot("slotSource", slotSource.id, slotSource.count-1, 0);
         that.container.setSlot("slotResult", machine.ovenMachine.getRecipe(slotSource.id), 1, 0);
         that.data.progress = 0;
         }
         else if(slotResult.id === machine.ovenMachine.getRecipe(slotSource.id)){
             that.container.setSlot("slotSource", slotSource.id, slotSource.count-1, 0);
             that.container.setSlot("slotResult", slotResult.id, slotResult.count+1, 0);
             that.data.progress = 0;
             }
     },
     click:function(){
     //this.updateAnimation();
    // var that = this;
//Game.message(World.getBlockData(this.x, this.y, this.z));
    },
    getGuiScreen: function(){
    return ovenGui; 
}
});
}

return {
             registerRecipe: function(a, b, data) {
                 if (data) {
                     recipe[a + "_" + data] = b;
                 } else {
                     recipe[a + "_" + 0] = b;
                 }
                 return this;
             },
             getRecipe: function(a, data) {
                 if (data) {
                     return recipe[a + "_" + data];
                 } else {
                     return recipe[a + "_" + 0];
                 }
             },
             getRoot: function(a) {
                 var arr = [];
                 var iid;
                for (iid in recipe){
	if ( recipe[iid] === a){
		arr[arr.length]=iid.split('_');
	}
}
return arr;
             },
             registerTranslate: function(stringid, json) {
                 translate[stringid] = json;
                 return this;
             },
             getTranslate: function(id, lang) {
                 return translate[id][lang] ? translate[id][lang] : translate[id]["en"];
             }
         };           
     }());