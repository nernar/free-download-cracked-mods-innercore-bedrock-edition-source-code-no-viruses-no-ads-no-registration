IDRegistry.genItemID("ammohandgun")
IDRegistry.genItemID("deserteagle")
IDRegistry.genItemID("ammoshotgun")
IDRegistry.genItemID("r870")
IDRegistry.genItemID("ammoassault")
IDRegistry.genItemID("ak47")
IDRegistry.genItemID("aa12")
IDRegistry.genItemID("ammosniper")
IDRegistry.genItemID("barrett")
IDRegistry.genItemID("ammolauncher")
IDRegistry.genItemID("rpg")

Recipes.addShaped({id: ItemID.ammohandgun, count: 8, data: 0}, [
	"aba",
	"aba",
	"aaa"
], ['a', 265 , 0, 'b', 452, 0]);

Recipes.addShaped({id: ItemID.deserteagle, count: 1, data: 0}, [
	"aaa",
	"dba",
	"d"
], ['a', 265 , 0, 'b', 452, 0, 'd', 331, 0]);

Recipes.addShaped({id: ItemID.ammoshotgun, count: 2, data: 0}, [
	"bbb",
	"aaa",
	"aaa"
], ['a', 265 , 0, 'b', 452, 0]);

Recipes.addShaped({id: ItemID.r870, count: 1, data: 0}, [
	"bbb",
	"acd",
	""
], ['a', 265 , 0, 'b', 331 , 0, 'c' , 42, 0, 'd', 17, 0]);

Recipes.addShaped({id: ItemID.ammoassault, count: 4, data: 0}, [
	"aba",
	"aba",
	"aa"
], ['a', 265 , 0, 'b', 452, 0]);

Recipes.addShaped({id: ItemID.ak47, count: 1, data: 0}, [
	"bbb",
	"acd",
	"ee"
], ['a', 265 , 0, 'b', 331, 0, 'c', 42,0, 'd', 17, 0, 'e', 280, 0]);

Recipes.addShaped({id: ItemID.aa12, count: 1, data: 0}, [
	"ddd",
	"bac",
	" c "
], ['a', ItemID.r870 , 0, 'b', 265, 0, 'c', 42, 0, 'd', 331, 0]);

Recipes.addShaped({id: ItemID.ammosniper, count: 1, data: 0}, [
	"",
	"aba",
	"aaa"
], ['a', 265 , 0, 'b', 452, 0]);

Recipes.addShaped({id: ItemID.barrett, count: 1, data: 0}, [
	" c ",
	"abb",
	" de"
], ['a', 265 , 0, 'b', 42, 0, 'c', 20, 0, 'd', ItemID.ammosniper, 0, 'e', 331, 0]);

Recipes.addShaped({id: ItemID.ammolauncher, count: 1, data: 0}, [
	"aaa",
	"aba",
	"aca"
], ['a', 265 , 0, 'b', 46, 0, 'c', 289, 0]);

Recipes.addShaped({id: ItemID.rpg, count: 1, data: 0}, [
	"ccc",
	"bbd",
	"a a"
], ['a', 265 , 0, 'b', 42, 0, 'c', 331, 0, 'd', 17, 0]);