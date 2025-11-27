IDRegistry.genItemID("ex_silkWorm");
Item.createItem("ex_silkWorm", "Silkworm", {
	name: "enr_SilkWorm",
	meta: 0
});
IDRegistry.genItemID("ex_cookedSilkWorm");
Item.createFoodItem("ex_cookedSilkWorm", "Cooked Silkworm", {
	name: "enr_CookedSilkWorm",
	meta: 0
},
{
	food: 1
});
IAHelper.makeAdvancedAnim(ItemID.ex_silkWorm, "enr_SilkWorm", 10, [0, 1, 2, 3, 4, 5, 6, 7]);
Item.registerUseFunction("ex_silkWorm", function (coords, item, block, player) {
    var id = block.id;
    var blockSource = BlockSource.getDefaultForActor(player);
var data = blockSource.getBlock(coords.x, coords.y, coords.z).getNamedStatesScriptable().old_leaf_type||0;
    switch (id) {
        case 18:
        switch (data) {
		case 0:
		case 1:
		case 2:
		case 3:
		case 4:
		case 5:
		case 6:
		case 7:
		case 8:
		case 9:
		case 10:
		case 11:
		case 12:
		case 13:
		case 14:
		case 15:
            decreasCarriedItem(item.id, item.count, item.data, player, 1);
            blockSource.setBlock(coords.x, coords.y, coords.z, LeafGroup[18][data] || 0);
            TileEntity.addTileEntity(coords.x, coords.y, coords.z);
            break;
        };
        break;
        case 161:
        switch (data) {
		case 0:
		case 1:
		case 4:
		case 5:
		case 8:
		case 9:
		case 12:
		case 13:
            decreasCarriedItem(item.id, item.count, item.data, player, 1);
            blockSource.setBlock(coords.x, coords.y, coords.z, LeafGroup[161][data]);
            TileEntity.addTileEntity(coords.x, coords.y, coords.z);

        };
        break;
    }
});
