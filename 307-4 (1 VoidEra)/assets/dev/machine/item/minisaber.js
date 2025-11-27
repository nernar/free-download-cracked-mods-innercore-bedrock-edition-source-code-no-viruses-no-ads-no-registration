IDRegistry.genItemID("minisaber");
Item.createItem("minisaber", "minisaber", {name: "minisaber", data: 0}, {stack: 1});
Item.setMaxDamage(ItemID.minisaber, 7);

Item.registerUseFunction("minisaber", function(coords, item, block){
	if(block.id == BlockID.voidlogeyse && block.data == coords.side - 1){
		World.setBlock(coords.x, coords.y, coords.z, BlockID.voidlogeyse, 0);
		Player.setCarriedItem(item.id, ++item.data < 7 ? item.count : 0, item.data);
		Entity.setVelocity(
			World.drop(
				coords.relative.x + 0.5,
				coords.relative.y + 0.5,
				coords.relative.z + 0.5,
				ItemID.eyse, 1 + parseInt(Math.random() * 1), 0
			),
			(coords.relative.x - coords.x) * 0.25,
			(coords.relative.y - coords.y) * 0.25,
			(coords.relative.z - coords.z) * 0.25
		);
	}
});

Recipes.addShaped({id: ItemID.minisaber, count: 1, data: 0}, [
	" a ",
	" a ",
	" x "
], ['x', ItemID.voidstick, 0, 'a', ItemID.voidshard, 0]);