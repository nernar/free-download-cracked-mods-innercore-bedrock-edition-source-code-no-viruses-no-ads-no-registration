IDRegistry.genBlockID("block_placer");
let bpsp = [
        ["placer_seite_flip", 0],
        ["placer_seite_flip", 0],
        ["push_oben", 0],
        ["placer_vorne", 0],
        ["placer_seite_flip", 0],
        ["placer_seite_flip", 0]
    ]
Block.createBlockWithRotation("block_placer", [{
    name: "Block placer",
    texture: bpsp,
    inCreative: true
}], iron_block_type);
var variations = [
            [[bpsp[3][0], 0], [bpsp[2][0], 0], ["placer_seite", 0], ["placer_seite", 0], ["placer_seite", 0], ["placer_seite", 0]],
            [[bpsp[2][0], 0], [bpsp[3][0], 0], [bpsp[0][0], 0], [bpsp[0][0], 0], [bpsp[0][0], 0], [bpsp[0][0], 0]],
            [["placer_seite", 0], [bpsp[0][0], 0], [bpsp[3][0], 0], [bpsp[2][0], 0], ["placer_seite_flip3", 0], ["placer_seite_flip2", 0]],
            [[bpsp[0][0], 0], ["placer_seite", 0], [bpsp[2][0], 0], [bpsp[3][0], 0], ["placer_seite_flip2", 0], ["placer_seite_flip3", 0]],
            [["placer_seite_flip3", 0], ["placer_seite_flip3", 0], ["placer_seite_flip2", 0], ["placer_seite_flip3", 0], [bpsp[3][0], 0], [bpsp[2][0], 0]],
            [["placer_seite_flip2", 0], ["placer_seite_flip2", 0], ["placer_seite_flip3", 0], ["placer_seite_flip2", 0], [bpsp[2][0], 0], [bpsp[3][0], 0]]
];
for (var i = 0; i < 6; i++) {
    var prender = new ICRender.Model();
		  var pmodel = BlockRenderer.createTexturedBlock(variations[i]);
	  	prender.addEntry(pmodel);
   		BlockRenderer.enableCoordMapping(BlockID.block_placer, i, prender);
}
TileRenderer.setRotationFunction(BlockID.block_placer, true);
		var pirender = new ICRender.Model();
		var pimodel = BlockRenderer.createTexturedBlock(variations[1]);
		pirender.addEntry(pimodel);
		ItemModel.getFor(BlockID.block_placer, 0).setHandModel(pimodel);
		ItemModel.getFor(BlockID.block_placer, 0).setUiModel(pimodel);

Recipes.addShaped({id: BlockID.block_placer, count: 1, data: 0},
	["awa", "rdr", "apa"],
	['a', ItemID.aluminiumplatten, 0, 'd',  VanillaBlockID.dispenser, 0, 'p', VanillaBlockID.piston, 0, 'r', VanillaItemID.redstone, 0, 'w', VanillaBlockID.chest, 0]
);




var placerUI = new UI.StandartWindow({
    standart: {
        header: {
            text: {
                text: "Block placer"
            }
        },
        inventory: {
            standart: true
        },
        background: {
            standart: true
        }
    },
	
    drawing: [],
	
    elements: {
        slot1: {
            type: "slot",
            x: 350,
            y: 200,
            size: 52
        },
        slot2: {
            type: "slot",
            x: 402,
            y: 200,
            size: 52
        },
        slot3: {
            type: "slot",
            x: 454,
            y: 200,
            size: 52
        },
        slot4: {
            type: "slot",
            x: 506,
            y: 200,
            size: 52
        },
        slot5: {
            type: "slot",
            x: 558,
            y: 200,
            size: 52
        },
        slot6: {
            type: "slot",
            x: 610,
            y: 200,
            size: 52
        },
        slot7: {
            type: "slot",
            x: 662,
            y: 200,
            size: 52
        },
        slot8: {
            type: "slot",
            x: 714,
            y: 200,
            size: 52
        },
        slot9: {
            type: "slot",
            x: 766,
            y: 200,
            size: 52
        }
    }
});


TileEntity.registerPrototype(BlockID.block_placer, {
   useNetworkItemContainer: true,

 redstone: function (params) {
    let arry = [this.y-1,this.y+1,this.y,this.y,this.y,this.y,this.y+1,this.y-1,this.y,this.y,this.y,this.y];
    let arrz = [this.z,this.z,this.z-1,this.z+1,this.z,this.z,this.z,this.z,this.z+1,this.z-1,this.z,this.z];
    let arrx = [this.x,this.x,this.x,this.x,this.x-1,this.x+1,this.x,this.x,this.x,this.x,this.x+1,this.x-1];
    let s = this.blockSource.getBlockData(this.x, this.y, this.z);
    let bid = this.blockSource.getBlockID(arrx[s], arry[s], arrz[s])||0;
    let slot1 = this.container.getSlot("slot1") || {id: 0};
    let slot2 = this.container.getSlot("slot2") || {id: 0};
    let slot3 = this.container.getSlot("slot3") || {id: 0};
    let slot4 = this.container.getSlot("slot4") || {id: 0};
    let slot5 = this.container.getSlot("slot5") || {id: 0};
    let slot6 = this.container.getSlot("slot6") || {id: 0};
    let slot7 = this.container.getSlot("slot7") || {id: 0};
    let slot8 = this.container.getSlot("slot8") || {id: 0};
    let slot9 = this.container.getSlot("slot9") || {id: 0};
    var sis = slot1.id + slot2.id + slot3.id + slot4.id + slot5.id + slot6.id + slot7.id + slot8.id + slot9.id
    if(bid == 0 && sis != 0) {
      if(slot1.id != 0 && IDRegistry.getIdInfo(slot1.id).startsWith("block") == true) {
       this.blockSource.setBlock(arrx[s], arry[s], arrz[s], slot1.id, slot1.data)
       this.container.setSlot("slot1", slot1.id, slot1.count - 1, slot1.data);
      } else if(slot2.id != 0 && IDRegistry.getIdInfo(slot2.id).startsWith("block") == true) {
       this.blockSource.setBlock(arrx[s], arry[s], arrz[s], slot2.id, slot2.data)
       this.container.setSlot("slot2", slot2.id, slot2.count - 1, slot2.data);
      } else if(slot3.id != 0 && IDRegistry.getIdInfo(slot3.id).startsWith("block") == true) {
       this.blockSource.setBlock(arrx[s], arry[s], arrz[s], slot3.id, slot3.data)
       this.container.setSlot("slot3", slot3.id, slot3.count - 1, slot3.data);
      } else if(slot4.id != 0 && IDRegistry.getIdInfo(slot4.id).startsWith("block") == true) {
       this.blockSource.setBlock(arrx[s], arry[s], arrz[s], slot4.id, slot4.data)
       this.container.setSlot("slot4", slot4.id, slot4.count - 1, slot4.data);
      } else if(slot5.id != 0 && IDRegistry.getIdInfo(slot5.id).startsWith("block") == true) {
       this.blockSource.setBlock(arrx[s], arry[s], arrz[s], slot5.id, slot5.data)
       this.container.setSlot("slot5", slot5.id, slot5.count - 1, slot5.data);
      } else if(slot6.id != 0 && IDRegistry.getIdInfo(slot6.id).startsWith("block") == true) {
       this.blockSource.setBlock(arrx[s], arry[s], arrz[s], slot6.id, slot6.data)
       this.container.setSlot("slot6", slot6.id, slot6.count - 1, slot6.data);
      } else if(slot7.id != 0 && IDRegistry.getIdInfo(slot7.id).startsWith("block") == true) {
       this.blockSource.setBlock(arrx[s], arry[s], arrz[s], slot7.id, slot7.data)
       this.container.setSlot("slot7", slot7.id, slot7.count - 1, slot7.data);
      } else if(slot8.id != 0 && IDRegistry.getIdInfo(slot8.id).startsWith("block") == true) {
       this.blockSource.setBlock(arrx[s], arry[s], arrz[s], slot8.id, slot8.data)
       this.container.setSlot("slot8", slot8.id, slot8.count - 1, slot8.data);
      } else if(slot9.id != 0 && IDRegistry.getIdInfo(slot9.id).startsWith("block") == true) {
       this.blockSource.setBlock(arrx[s], arry[s], arrz[s], slot9.id, slot9.data)
       this.container.setSlot("slot9", slot9.id, slot9.count - 1, slot9.data);
      }
     }
 },

   tick: function(container, window, content, data) {
this.container.validateAll();
this.container.sendChanges();
   },
   getScreenName(){
return "main";
},
   getScreenByName(){
return placerUI;
},
});
