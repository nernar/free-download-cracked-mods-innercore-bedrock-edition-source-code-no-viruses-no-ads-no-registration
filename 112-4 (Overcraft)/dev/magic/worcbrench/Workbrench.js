var BLOCK_TYPE_MAGIC_WORCBRENCH = Block.createSpecialType({
	base: 17,
	lightlevel: 11
});
IDRegistry.genBlockID("MagicWorbrench");
Block.createBlockWithRotation("MagicWorbrench", [
    {name: "Magic Workbench", texture: [["MagicWorkbrench_down", 0], ["MagiWorkbrench_top", 0], ["MagicWorbrench_side", 0], ["MagicWorbrench_side", 0], ["MagicWorbrench_side", 0], ["MagicWorbrench_side", 0]], inCreative: true}
], BLOCK_TYPE_MAGIC_WORCBRENCH);

Callback.addCallback("PostLoaded", function(){
	Recipes.addShaped({id: BlockID.MagicWorbrench, count: 1, data: 0}, [
		"aa ",
		"aa ",
		"   "
	], ['a', BlockID.MagicLog, 0]);
});

var guiMagicWorbrench = new UI.StandartWindow({
     standart: {
          header: {
               text: {
                    text: "Magic Workbench"
               }
          },
          inventory: {
               standart: true
          },
          background: {
               bitmap: "MagicWorcbrench_baground"
          }
     },
     drawing: [
	 {type: "bitmap", x: 650, y: 177, bitmap: "furnace_bar_background", scale: 3.2}
	 ],
     elements: {
		"slot0": {type: "slot", x: 400, y: 116, bitmap: "slot_1"},
        "slot1": {type: "slot", x: 461, y: 116, bitmap: "slot_1"},
        "slot2": {type: "slot", x: 522, y: 116, bitmap: "slot_1"},
        "slot3": {type: "slot", x: 400, y: 177, bitmap: "slot_1"},
        "slot4": {type: "slot", x: 461, y: 177, bitmap: "slot_1"},
        "slot5": {type: "slot", x: 522, y: 177, bitmap: "slot_1"},
        "slot6": {type: "slot", x: 400, y: 238, bitmap: "slot_1"},
        "slot7": {type: "slot", x: 461, y: 238, bitmap: "slot_1"},
        "slot8": {type: "slot", x: 522, y: 238,bitmap: "slot_1"},
		"resultSlot": {type: "slot", x: 781, y: 177, bitmap: "slot_1"},
		"BookSlot": {type: "slot", x: 400, y: 350, bitmap: "slot_1"},
		"button": {type: "button", x: 782, y: 310, bitmap: "worckbrench_button_0", scale: 3.5, clicker: {
			onClick: function(container, tileEntity){
				tileEntity.data.onClick = true;
			}
		}},
}
});