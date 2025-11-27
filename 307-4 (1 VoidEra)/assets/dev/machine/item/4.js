IDRegistry.genItemID("advWrench");
Item.createItem("advWrench", "advWrench", {name: "advWrench", meta: 0}, {stack: 1});
ChargeItemRegistry.registerItem(ItemID.advWrench, "Eu", 20000, 0);

Item.registerNameOverrideFunction(ItemID.advWrench, ENERGY_ITEM_NAME);

Recipes.addShaped({id: ItemID.advWrench, count: 1, data: Item.getMaxDamage(ItemID.advWrench)}, [
	"a p",
	" gx",
	"pxc"
], ['a', ItemID.iridiumChunk, 0, 'p', ItemID.voidingot, 0, 'g', ItemID.electricWrench, -1, 'x', ItemID.circuitAdvanced, 0, 'c', ItemID.hbrcore, -1]);



Callback.addCallback("DestroyBlockStart", function(coords, block){
	if(MachineRegistry.machineIDs[block.id]){
		var item = Player.getCarriedItem();
		if(item.id==ItemID.wrenchBronze || item.id==ItemID.advWrench && item.data + 500 <= Item.getMaxDamage(item.id)){
			Block.setTempDestroyTime(block.id, 0);
		}
	}
});
