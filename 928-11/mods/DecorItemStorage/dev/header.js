IMPORT("RenderUtil");
IMPORT("AnimationAPI");

const ItemStack = com.zhekasmirnov.apparatus.adapter.innercore.game.item.ItemStack
function isGlint(id, data, extra){
	return new ItemStack(id, 1, data, extra).isGlint() == 1;
}

ItemModel.setCurrentCacheGroup("DecorItemStorage", "alpha 1.0");