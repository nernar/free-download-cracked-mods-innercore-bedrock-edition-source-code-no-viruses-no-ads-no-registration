Callback.addCallback("PostLoaded", function(){

Recipes.addShaped({id: BlockID.super_tnt, count: 1,data:0}, [
		"aaa",
		"aba",
		"aaa"
	], ['a', 289, 0,'b', 46,0]);
	
	
Recipes.addShaped({id: BlockID.mega_tnt, count: 1, data: 0}, [
		"aaa",
		"aba",
		"aaa"
	], ['a', BlockID.super_tnt, 0,'b', 46,0]);
	
Recipes.addShaped({id: BlockID.water_tnt, count: 1, data: 0}, [
		"aaa",
		"aba",
		"aaa"
	], ['a', 325, 8,'b', 46,0]);
	
Recipes.addShaped({id: BlockID.lava_tnt, count: 1, data: 0}, [
		"aaa",
		"aba",
		"aaa"
	], ['a', 325, 10,'b', 46,0]);
	
	
Recipes.addShaped({id: BlockID.atom_tnt, count: 1, data: 0}, [
		"aaa",
		"aaa",
		"aaa"
	], ['a', BlockID.super_tnt, 0]);
	
	
Recipes.addShaped({id: BlockID.fire_tnt, count: 1, data: 0}, [
		"aaa",
		"aba",
		"aaa"
	], ['a', 385, 0,'b', 46,0]);
	
    }
);