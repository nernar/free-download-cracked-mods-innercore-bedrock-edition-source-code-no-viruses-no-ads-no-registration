Translation.addTranslation("Chisel", {
	ru: "Стамеска"
});
IDRegistry.genItemID("chisel");
Item.createItem("chisel", "Chisel", {name: "chisel", meta: 0});

Translation.addTranslation("Hammer", {
	ru: "Молот"
});
IDRegistry.genItemID("hammer");
Item.createItem("hammer", "Hammer", {name: "hammer", meta: 0});

Item.registerUseFunction(ItemID.chisel, function(pos, item, block, player){
	if(block.id == BlockID.full_frame){
		let region = BlockSource.getDefaultForActor(player);
		let tile = TileEntity.getTileEntity(pos.x, pos.y, pos.z, region);
		if(!tile) tile = TileEntity.addTileEntity(pos.x, pos.y, pos.z, region);
		if(tile){
			tile.dropItem();
			tile.data.id = 0;
			tile.data.data = 0;
			tile.updateModel();
		}
	}
});
Item.registerUseFunction(ItemID.hammer, function(pos, item, block, player){
	if(block.id == BlockID.full_frame){
		let region = BlockSource.getDefaultForActor(player);
		let tile = TileEntity.getTileEntity(pos.x, pos.y, pos.z, region);
		if(!tile) tile = TileEntity.addTileEntity(pos.x, pos.y, pos.z, region);
		if(tile){
			tile.data.model++;
			if(tile.data.model >= COUNT)
				tile.data.model = 0;
			tile.data.side = pos.side;
			tile.updateModel();
		}
	}
});

Recipes.addShaped({id: ItemID.chisel, count: 1, data: 0}, [
	"   ",
	" b ",
	" a "
], [
	'a', BlockID.full_frame,0,
	'b', VanillaItemID.iron_ingot, 0
]);
Recipes.addShaped({id: ItemID.hammer, count: 1, data: 0}, [
	"bb ",
	" ab",
	" a "
], [
	'a', BlockID.full_frame,0,
	'b', VanillaItemID.iron_ingot, 0
]);