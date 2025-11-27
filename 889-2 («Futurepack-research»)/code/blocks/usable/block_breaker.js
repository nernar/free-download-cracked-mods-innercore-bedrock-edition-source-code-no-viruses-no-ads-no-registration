IDRegistry.genBlockID("block_breaker");
Block.createBlockWithRotation("block_breaker", [{
    name: "Block breaker",
    texture: [
        ["push_seite_flip", 0],
        ["push_seite_flip", 0],
        ["push_unten", 0],
        ["brecher_front_off", 0],
        ["push_seite_flip", 0],
        ["push_seite_flip", 0]
    ],
    inCreative: true
}], iron_block_type);
var variations = [
            [["brecher_front_off", 0], ["push_unten", 0], ["push_seite", 0], ["push_seite", 0], ["push_seite", 0], ["push_seite", 0]],
            [["push_unten", 0], ["brecher_front_off", 0], ["push_seite_flip", 0], ["push_seite_flip", 0], ["push_seite_flip", 0], ["push_seite_flip", 0]],
            [["push_seite", 0], ["push_seite_flip", 0], ["brecher_front_off", 0], ["push_unten", 0], ["push_seite_flip3", 0], ["push_seite_flip2", 0]],
            [["push_seite_flip", 0], ["push_seite", 0], ["push_unten", 0], ["brecher_front_off", 0], ["push_seite_flip2", 0], ["push_seite_flip3", 0]],
            [["push_seite_flip3", 0], ["push_seite_flip3", 0], ["push_seite_flip2", 0], ["push_seite_flip3", 0], ["brecher_front_off", 0], ["push_unten", 0]],
            [["push_seite_flip2", 0], ["push_seite_flip2", 0], ["push_seite_flip3", 0], ["push_seite_flip2", 0], ["push_unten", 0], ["brecher_front_off", 0]]
];
for (var i = 0; i < 6; i++) {
    var render = new ICRender.Model();
		  var model = BlockRenderer.createTexturedBlock(variations[i]);
	  	render.addEntry(model);
   		BlockRenderer.enableCoordMapping(BlockID.block_breaker, i, render);
}
TileRenderer.setRotationFunction(BlockID.block_breaker, true);
		var irender = new ICRender.Model();
		var imodel = BlockRenderer.createTexturedBlock(variations[1]);
		irender.addEntry(imodel);
		ItemModel.getFor(BlockID.block_breaker, 0).setHandModel(imodel);
		ItemModel.getFor(BlockID.block_breaker, 0).setUiModel(imodel);

Recipes.addShaped({id: BlockID.block_breaker, count: 1, data: 0},
	["aaa", "ada", "opo"],
	['a', ItemID.aluminiumplatten, 0, 'd',  VanillaBlockID.dispenser, 0, 'p', VanillaItemID.iron_pickaxe, 0, 'o', VanillaBlockID.obsidian, 0]
);



var breakerUI = new UI.StandartWindow({
    standart: {
        header: {
            text: {
                text: "Block breaker"
            }
        },
        inventory: {
            standart: true
        },
        background: {
            standart: true
        }
    },
	
    drawing: [
		{
type: "bitmap", 
x: 250, 
y: 50,
bitmap: "breaker_draw",
scale: 3
}
],
	
    elements: {
        slot1: {
            type: "slot",
            bitmap: "breaker_slot",
            x: 400,
            y: 200,
            size: 52
        },
        slot2: {
            type: "slot",
            bitmap: "breaker_slot",
            x: 452,
            y: 200,
            size: 52
        },
        slot3: {
            type: "slot",
            bitmap: "breaker_slot",
            x: 504,
            y: 200,
            size: 52
        }
    }
});


TileEntity.registerPrototype(BlockID.block_breaker, {
   useNetworkItemContainer: true,
   defaultValues: {
    status: 0
   },

 redstone: function (params) {
    let arry = [this.y-1,this.y+1,this.y,this.y,this.y,this.y,this.y+1,this.y-1,this.y,this.y,this.y,this.y];
    let arrz = [this.z,this.z,this.z-1,this.z+1,this.z,this.z,this.z,this.z,this.z+1,this.z-1,this.z,this.z];
    let arrx = [this.x,this.x,this.x,this.x,this.x-1,this.x+1,this.x,this.x,this.x,this.x,this.x+1,this.x-1];
     this.data.status = 0;
     let s = this.blockSource.getBlockData(this.x, this.y, this.z);
     this.data.sig = 1;
     let bid = this.blockSource.getBlockID(arrx[s], arry[s], arrz[s])||0;
     let bdata = this.blockSource.getBlockData(arrx[s], arry[s], arrz[s])||0;
     var bloca = 0;
     let eslot1 = (this.container.getSlot("slot1") || {}).extra || 0;
     let eslot2 = (this.container.getSlot("slot2") || {}).extra || 0;
     let eslot3 = (this.container.getSlot("slot3") || {}).extra || 0;
     if(bid != 0 && bid != 7 && bid != 8 && bid != 9 && bid != 10 && bid != 11 && bid != 120 && bid != 416) {
      if(eslot1 != 0 || eslot2 != 0 || eslot3 != 0) {
       let slevel = 0;
       if(eslot1 && slevel == 0) {
        slevel = eslot1.getEnchantLevel(16);
       }
       if(eslot2 && slevel == 0) {
        slevel = eslot2.getEnchantLevel(16);
       }
       if(eslot3 && slevel == 0) {
        slevel = eslot3.getEnchantLevel(16);
       }
       if(slevel != 0) {
        var enchant = {
         silk: slevel
        }
        bloca = ToolLib.getBlockDrop({x: arrx[s], y: arry[s], z: arrz[s]}, bid, bdata, 4, enchant);
         this.blockSource.spawnDroppedItem(arrx[s+6], arry[s+6], arrz[s+6], bloca[0][0], bloca[0][1], bloca[0][2]);
        this.blockSource.destroyBlock(arrx[s], arry[s], arrz[s], false);
        this.data.status = 1;
       }
      }
      if((eslot1 != 0 || eslot2 != 0 || eslot3 != 0) && this.data.status == 0) {
       let flevel = 0;
       if(eslot1 && flevel == 0) {
        flevel = eslot1.getEnchantLevel(18);
       }
       if(eslot2 && flevel == 0) {
        flevel = eslot2.getEnchantLevel(18);
       }
       if(eslot3 && flevel == 0) {
        flevel = eslot3.getEnchantLevel(18);
       }
       bloca = ToolLib.getBlockDrop({x: arrx[s], y: arry[s], z: arrz[s]}, bid, bdata, 4, 0);
       var fcount = 1;
       if(bid == 20 || bid == 56 || bid == 129 || bid == 153) {
        var fcount = Math.round(1+Math.random()*flevel);
       }
       if(bid == 21) {
        var fcount = Math.round(4+Math.random()*flevel*4);
       }
       if(bid == 73) {
        var fcount = Math.round(4+Math.random()*flevel*4);
       }
       if(bid == 511) {
        var fcount = Math.round(2+Math.random()*flevel*8);
       }
       for(var i = 0; i < fcount; i++) {
this.blockSource.spawnDroppedItem(arrx[s+6], arry[s+6], arrz[s+6], bloca[0][0], bloca[0][1], bloca[0][2]);
       }
       this.blockSource.destroyBlock(arrx[s], arry[s], arrz[s], false);
       this.data.status = 1;
      }

      if(this.data.status == 0) {
       bloca = ToolLib.getBlockDrop({x: arrx[s], y: arry[s], z: arrz[s]}, bid, bdata, 4, 0);
       var fcount = 1
       if(bid == 21) {
        var fcount = Math.round(4+Math.random()*4);
       }
       if(bid == 73) {
        var fcount = Math.round(4+Math.random()*2);
       }
       if(bid == 511) {
        var fcount = Math.round(2+Math.random()*6);
       }
       for(var g = 0; g < fcount; g++) {
        this.blockSource.spawnDroppedItem(arrx[s+6], arry[s+6], arrz[s+6], bloca[0][0], bloca[0][1], bloca[0][2]);
       }
       this.blockSource.destroyBlock(arrx[s], arry[s], arrz[s], false);
       this.data.status = 1;
      }
     }
 },

   tick: function(container, window, content, data) {
this.container.sendChanges();
   },
   getScreenName(){
return "main";
},
   getScreenByName(){
return breakerUI;
},
});












IDRegistry.genBlockID("block_destroyer");
Block.createBlockWithRotation("block_destroyer", [{
    name: "Block destroyer §l§9(CREATIVE)",
    texture: [
        ["push_seite_flip", 0],
        ["push_seite_flip", 0],
        ["push_unten", 0],
        ["brecher_front_off", 0],
        ["push_seite_flip", 0],
        ["push_seite_flip", 0]
    ],
    inCreative: true
}], iron_block_type);
var variations = [
            [["brecher_front_off", 0], ["push_unten", 0], ["push_seite", 0], ["push_seite", 0], ["push_seite", 0], ["push_seite", 0]],
            [["push_unten", 0], ["brecher_front_off", 0], ["push_seite_flip", 0], ["push_seite_flip", 0], ["push_seite_flip", 0], ["push_seite_flip", 0]],
            [["push_seite", 0], ["push_seite_flip", 0], ["brecher_front_off", 0], ["push_unten", 0], ["push_seite_flip3", 0], ["push_seite_flip2", 0]],
            [["push_seite_flip", 0], ["push_seite", 0], ["push_unten", 0], ["brecher_front_off", 0], ["push_seite_flip2", 0], ["push_seite_flip3", 0]],
            [["push_seite_flip3", 0], ["push_seite_flip3", 0], ["push_seite_flip2", 0], ["push_seite_flip3", 0], ["brecher_front_off", 0], ["push_unten", 0]],
            [["push_seite_flip2", 0], ["push_seite_flip2", 0], ["push_seite_flip3", 0], ["push_seite_flip2", 0], ["push_unten", 0], ["brecher_front_off", 0]]
];
for (var i = 0; i < 6; i++) {
    var drender = new ICRender.Model();
		  var dmodel = BlockRenderer.createTexturedBlock(variations[i]);
	  	drender.addEntry(dmodel);
   		BlockRenderer.enableCoordMapping(BlockID.block_destroyer, i, drender);
}
TileRenderer.setRotationFunction(BlockID.block_destroyer, true);
		var dirender = new ICRender.Model();
		var dimodel = BlockRenderer.createTexturedBlock(variations[1]);
		dirender.addEntry(dimodel);
		ItemModel.getFor(BlockID.block_destroyer, 0).setHandModel(dimodel);
		ItemModel.getFor(BlockID.block_destroyer, 0).setUiModel(dimodel);


var destroyerUI = new UI.StandartWindow({
    standart: {
        header: {
            text: {
                text: "Block destroyer"
            }
        },
        inventory: {
            standart: true
        },
        background: {
            standart: true
        }
    },
	
    drawing: [
		{
type: "bitmap", 
x: 250, 
y: 50,
bitmap: "breaker_draw",
scale: 3
}
],
	
    elements: {
        slot1: {
            type: "slot",
            bitmap: "breaker_slot",
            x: 300,
            y: 100,
            size: 52
        },
        slot2: {
            type: "slot",
            bitmap: "breaker_slot",
            x: 352,
            y: 100,
            size: 52
        },
        slot3: {
            type: "slot",
            bitmap: "breaker_slot",
            x: 404,
            y: 100,
            size: 52
        }
    }
});


TileEntity.registerPrototype(BlockID.block_destroyer, {
   useNetworkItemContainer: true,
   defaultValues: {
    status: 0
   },

 redstone: function (params) {
    let arry = [this.y-1,this.y+1,this.y,this.y,this.y,this.y,this.y+1,this.y-1,this.y,this.y,this.y,this.y];
    let arrz = [this.z,this.z,this.z-1,this.z+1,this.z,this.z,this.z,this.z,this.z+1,this.z-1,this.z,this.z];
    let arrx = [this.x,this.x,this.x,this.x,this.x-1,this.x+1,this.x,this.x,this.x,this.x,this.x+1,this.x-1];
     this.data.status = 0;
     let s = this.blockSource.getBlockData(this.x, this.y, this.z);
     let bid = this.blockSource.getBlockID(arrx[s], arry[s], arrz[s])||0;
     let bdata = this.blockSource.getBlockData(arrx[s], arry[s], arrz[s])||0;
     var bloca = 0;
     let eslot1 = (this.container.getSlot("slot1") || {}).extra || 0;
     let eslot2 = (this.container.getSlot("slot2") || {}).extra || 0;
     let eslot3 = (this.container.getSlot("slot3") || {}).extra || 0;
     if(bid != 0) {
      if(eslot1 != 0 || eslot2 != 0 || eslot3 != 0) {
       let slevel = 0;
       if(eslot1 && slevel == 0) {
        slevel = eslot1.getEnchantLevel(16);
       }
       if(eslot2 && slevel == 0) {
        slevel = eslot2.getEnchantLevel(16);
       }
       if(eslot3 && slevel == 0) {
        slevel = eslot3.getEnchantLevel(16);
       }
       if(slevel != 0) {
        var enchant = {
         silk: slevel
        }
        bloca = ToolLib.getBlockDrop({x: arrx[s], y: arry[s], z: arrz[s]}, bid, bdata, 4, enchant);
         this.blockSource.spawnDroppedItem(arrx[s+6], arry[s+6], arrz[s+6], bloca[0][0], bloca[0][1], bloca[0][2]);
        this.blockSource.destroyBlock(arrx[s], arry[s], arrz[s], false);
        this.data.status = 1;
       }
      }
      if((eslot1 != 0 || eslot2 != 0 || eslot3 != 0) && this.data.status == 0) {
       let flevel = 0;
       if(eslot1 && flevel == 0) {
        flevel = eslot1.getEnchantLevel(18);
       }
       if(eslot2 && flevel == 0) {
        flevel = eslot2.getEnchantLevel(18);
       }
       if(eslot3 && flevel == 0) {
        flevel = eslot3.getEnchantLevel(18);
       }
       bloca = ToolLib.getBlockDrop({x: arrx[s], y: arry[s], z: arrz[s]}, bid, bdata, 4, 0);
       var fcount = 1;
       if(bid == 20 || bid == 56 || bid == 129 || bid == 153) {
        var fcount = Math.round(1+Math.random()*flevel);
       }
       if(bid == 21) {
        var fcount = Math.round(4+Math.random()*flevel*4);
       }
       if(bid == 73) {
        var fcount = Math.round(4+Math.random()*flevel*4);
       }
       if(bid == 511) {
        var fcount = Math.round(2+Math.random()*flevel*8);
       }
       for(var i = 0; i < fcount; i++) {
this.blockSource.spawnDroppedItem(arrx[s+6], arry[s+6], arrz[s+6], bloca[0][0], bloca[0][1], bloca[0][2]);
       }
       this.blockSource.destroyBlock(arrx[s], arry[s], arrz[s], false);
       this.data.status = 1;
      }

      if(this.data.status == 0) {
       bloca = ToolLib.getBlockDrop({x: arrx[s], y: arry[s], z: arrz[s]}, bid, bdata, 4, 0);
       var fcount = 1
       if(bid == 21) {
        var fcount = Math.round(4+Math.random()*4);
       }
       if(bid == 73) {
        var fcount = Math.round(4+Math.random()*2);
       }
       if(bid == 511) {
        var fcount = Math.round(2+Math.random()*6);
       }
       for(var g = 0; g < fcount; g++) {
        this.blockSource.spawnDroppedItem(arrx[s+6], arry[s+6], arrz[s+6], bloca[0][0], bloca[0][1], bloca[0][2]);
       }
       this.blockSource.destroyBlock(arrx[s], arry[s], arrz[s], false);
       this.data.status = 1;
      }
     }
 },

   tick: function(container, window, content, data) {
this.container.sendChanges();
},
   getScreenName(){
return "main";
},
   getScreenByName(){
return destroyerUI;
},
});
