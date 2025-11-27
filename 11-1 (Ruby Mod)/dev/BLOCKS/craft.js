Recipes.addShaped({id: BlockID.rubyblock, count: 1, data: 0}, [
	"aaa",
	"aaa",
	"aaa"
], ['a', ItemID.ruby, 0]);



Recipes.addFurnace(ItemID.ruby, ItemID.hardenedruby, 0);
Recipes.addFurnace(BlockID.rubyblock, BlockID.hardenedrubyblock, 0);



Recipes.addShaped({id: ItemID.ruby, count: 9, data: 0}, [
	"   ",
	" a ",
	"   "
], ['a', BlockID.rubyblock, 0]);



Recipes.addShaped({id: ItemID.hardenedruby, count: 9, data: 0}, [
	"   ",
	" a ",
	"   "
], ['a', BlockID.hardenedrubyblock, 0]);



Recipes.addShaped({id: ItemID.ulruby, count: 1, data: 0}, [
	"aaa",
	"aaa",
	"aaa"
], ['a', BlockID.hardenedrubyblock, 0]);

Recipes.addShaped({id: BlockID.hardenedrubyblock, count: 1, data: 0}, [
	"aaa",
	"aaa",
	"aaa"
], ['a', ItemID.hardenedruby, 0]);