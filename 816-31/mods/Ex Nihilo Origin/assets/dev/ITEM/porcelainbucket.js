IDRegistry.genItemID("ex_bucketPorcelainRaw");
Item.createItem("ex_bucketPorcelainRaw", "Unfired Bucket", {
	name: "enr_bucketPorcelainRaw",
	meta: 0
},
{
	stack: 16
});
IDRegistry.genItemID("ex_bucketPorcelainEmpty");
Item.createItem("ex_bucketPorcelainEmpty", "Bucket", {
	name: "enr_bucketPorcelainEmpty",
	meta: 0
},
{
	stack: 16
});
IDRegistry.genItemID("ex_bucketPorcelainWater");
Item.createItem("ex_bucketPorcelainWater", "Water Bucket", {
	name: "enr_bucketPorcelainWater",
	meta: 0
},
{
	stack: 1
});
IDRegistry.genItemID("ex_bucketPorcelainLava");
Item.createItem("ex_bucketPorcelainLava", "Lava Bucket", {
	name: "enr_bucketPorcelainLava",
	meta: 0
},
{
	stack: 1
});
LiquidRegistry.registerItem("water", {
	id: ItemID.ex_bucketPorcelainEmpty,
	data: 0
},
{
	id: ItemID.ex_bucketPorcelainWater,
	data: 0
});
LiquidRegistry.registerItem("lava", {
	id: ItemID.ex_bucketPorcelainEmpty,
	data: 0
},
{
	id: ItemID.ex_bucketPorcelainLava,
	data: 0
});
Item.setLiquidClip(ItemID.ex_bucketPorcelainEmpty, true);

Callback.addCallback("ItemUse",
function(coords, item, block, isExternal, player) {
	var x = coords.relative.x;
	var y = coords.relative.y;
	var z = coords.relative.z;
	var client = Network.getClientForPlayer(player);
	var blockSource = BlockSource.getDefaultForActor(player);
	var blockID = blockSource.getBlock(x, y, z).id;
	var tile = TileEntity.getTileEntity(coords.x, coords.y, coords.z, blockSource);

	if (item.id == ItemID.ex_bucketPorcelainLava) {
		if (!tile || Entity.getSneaking(player)) {
			if (blockID == 0 || blockID > 7 && blockID < 12) {
				blockSource.setBlock(x, y, z, 10);
				decreasCarriedItem(item.id, item.count, item.data, player, 1);
(new PlayerActor(player)).addItemToInventory(ItemID.ex_bucketPorcelainEmpty, 1, 0, null, true);
			}
		}
	}
	if (item.id == ItemID.ex_bucketPorcelainWater) {
		if (!tile || Entity.getSneaking(player)) {
			if (blockID == 0 || blockID > 7 && blockID < 12) {
				blockSource.setBlock(x, y, z, 8);
				decreasCarriedItem(item.id, item.count, item.data, player, 1);
(new PlayerActor(player)).addItemToInventory(ItemID.ex_bucketPorcelainEmpty, 1, 0, null, true);
			}
		}
	}
	if (item.id == ItemID.ex_bucketPorcelainEmpty) {
		if (block.id == 8 || (block.id == 9 && block.data == 0)) {
			if (Item.count == 1) {
				blockSource.setBlock(coords.x, coords.y, coords.z, 0);
(new PlayerActor(player)).addItemToInventory(ItemID.ex_bucketPorcelainWater, 1, 0, null, true);
			} else {
				blockSource.setBlock(coords.x, coords.y, coords.z, 0);
				decreasCarriedItem(item.id, item.count, item.data, player, 1);
			
(new PlayerActor(player)).addItemToInventory(ItemID.ex_bucketPorcelainWater, 1, 0, null, true);
			}
		}
		if (block.id == 10 || (block.id == 11 && block.data == 0)) {
			if (Item.count == 1) {
				blockSource.setBlock(coords.x, coords.y, coords.z, 0);
Entity.setCarriedItem(player, ItemID.ex_bucketPorcelainLava, 1, 0);
			} else {
				blockSource.setBlock(coords.x, coords.y, coords.z, 0);
				decreasCarriedItem(item.id, item.count, item.data, player, 1);
 (new PlayerActor(player)).addItemToInventory(ItemID.ex_bucketPorcelainLava, 1, 0, null, true);
			}
		}
	}
});
