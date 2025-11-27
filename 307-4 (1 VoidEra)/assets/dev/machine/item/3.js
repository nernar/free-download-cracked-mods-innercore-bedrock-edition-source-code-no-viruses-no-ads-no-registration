IDRegistry.genItemID("advHoe");
IDRegistry.genItemID("advTreetap");
Item.createItem("advHoe", "advHoe", {name: "advHoe", meta: 0}, {stack: 1});
Item.createItem("advTreetap", "advTreetap", {name: "advTreetap", meta: 0}, {stack: 1});
ChargeItemRegistry.registerItem(ItemID.advHoe, "Eu", 20000, 0);
ChargeItemRegistry.registerItem(ItemID.advTreetap, "Eu", 20000, 0);
Item.setToolRender(ItemID.advHoe, true);

Item.registerNameOverrideFunction(ItemID.advHoe, ENERGY_ITEM_NAME);
Item.registerNameOverrideFunction(ItemID.advTreetap, ENERGY_ITEM_NAME);

Recipes.addShaped({id: ItemID.advHoe, count: 1, data: Item.getMaxDamage(ItemID.advHoe)}, [
	"a p",
	" gx",
	"pxc"
], ['a', ItemID.iridiumChunk, 0, 'p', ItemID.voidingot, 0, 'g', ItemID.electricHoe, -1, 'x', ItemID.circuitAdvanced, 0, 'c', ItemID.hbrcore, -1]);

Recipes.addShaped({id: ItemID.advTreetap, count: 1, data: Item.getMaxDamage(ItemID.advTreetap)}, [
	"a p",
	" gx",
	"pxc"
], ['a', ItemID.iridiumChunk, 0, 'p', ItemID.voidingot, 0, 'g', ItemID.electricTreetap, -1, 'x', ItemID.circuitAdvanced, 0, 'c', ItemID.hbrcore, -1]);


Item.registerUseFunction("advHoe", function(coords, item, block){
	if(item.data + 50 <= Item.getMaxDamage(ItemID.advHoe) && (block.id==2 || block.id==3 || block.id==110 || block.id==243) && coords.side==1){ 
		World.setBlock(coords.x, coords.y, coords.z, 60);
		World.playSoundAtEntity(Player.get(), "step.grass", 0.5, 0.75);
		Player.setCarriedItem(item.id, 1, item.data + 50);
	}
});
Item.registerUseFunction("advTreetap", function(coords, item, block){
	if(item.data + 50 <= Item.getMaxDamage(ItemID.advTreetap) && block.id == BlockID.rubberTreeLogLatex && block.data == coords.side - 1){
		World.setBlock(coords.x, coords.y, coords.z, BlockID.rubberTreeLogLatex, 0);
		Player.setCarriedItem(item.id, 1, item.data + 50);
		Entity.setVelocity(
			World.drop(
				coords.relative.x + 0.5,
				coords.relative.y + 0.5,
				coords.relative.z + 0.5,
				ItemID.latex, 1 + parseInt(Math.random() * 5), 0
			),
			(coords.relative.x - coords.x) * 0.25,
			(coords.relative.y - coords.y) * 0.25,
			(coords.relative.z - coords.z) * 0.25
		);
	}
});
