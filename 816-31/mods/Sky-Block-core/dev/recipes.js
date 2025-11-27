let ICore
ModAPI.addAPICallback("ICore", function(api){
	TileEntity.getPrototype(BlockID.thermalCentrifuge).getRecipeResult = function(id){
		let recipe = JSON.parse(JSON.stringify(api.Recipe.getRecipeResult("thermalCentrifuge", id)));
		if(recipe)
			for(let i = 0;i < recipe.result.length / 2;i++){
				let v = recipe.result[i * 2 + 1];
				if(typeof v != "number")
					if(Math.random() <= v[1])
						recipe.result[i * 2 + 1] = v[0];
					else
						recipe.result[i * 2 + 1] = 0;
			}
		return recipe;
	};
	
	let putResult = TileEntity.getPrototype(BlockID.thermalCentrifuge).putResult;
	TileEntity.getPrototype(BlockID.thermalCentrifuge).putResult = function(){
		putResult.apply(this, arguments);
		this.container.validateAll();
	}
	
	ICore=api;
Callback.addCallback("PreEmcLoad", function(){
	Recipes.removeWorkbenchRecipe(ItemID.philosophersStone, 1, 0);
	Recipes.removeWorkbenchRecipe(BlockID.energyCondenser1, 1, 0);
	Recipes.addShaped({id: BlockID.energyCondenser1, count: 1, data: 0 }, [
	"#a#",
	"aba",
	"#a#"
],[
	'a', ItemID.iridiumChunk, 0,
	'b', ItemID.philosophersStone, 0
]);
	api.Recipe.addRecipeFor("molecularTransformer", ItemID.storageLapotronCrystal, {
		id: ItemID.philosophersStone,
		count: 1,
		data: 0,
		energy: 50e6
	});
});
});
Callback.addCallback("PostEmcLoad", function(api){
	api.Core.setItemEmc(1, 0, 1);
 api.Core.deleteItemEmc(ItemID.philosophersStone, 0);
});
Callback.addCallback("ModsLoaded", function(){
	if(ICore){
	
	ICore.Recipe.addRecipeFor("thermalCentrifuge", BlockID.oreUranium, {
		result: [BlockID.oreBoron, [1, .4], BlockID.oreThorium, [1, .3], BlockID.oreLihium, [1, .3]],
		heat: 500
	});
	
	ICore.Recipe.addRecipeFor("thermalCentrifuge", VanillaBlockID.iron_ore, {
		result: [BlockID.oreLithium, 1, BlockID.oreMagnesium, [1, .8]],
		heat: 500
	});
	
	ICore.Recipe.addRecipeFor("extractor", VanillaItemID.redstone, {
		id: ItemID.nikolite,
		data: 0,
		count: 1
	});
	ICore.Recipe.addRecipeFor("molecularTransformer", ItemID.ingotLead, {
		id: BlockID.oreUranium,
		count: 1,
		data: 0,
		energy: 1000
	});
	}
});
let AvaritiaAPI;
ModAPI.addAPICallback("AvaritiaAPI", function(api){
AvaritiaAPI = api;
});
/*Callback.addCallback("PostLoaded", function(){
AvaritiaAPI.addExtremeShapedRecipe("test", {id: VanillaBlockID.end_portal_frame, count: 1, data: 0}, [
"iiddiddii",
"idsssssdi",
"dsssssssd",
"dsssnsssd",
"issnnnssi",
"dsssnsssd",
"dsssssssd",
"idsssssdi",
"iiddiddii",
], ["i", ItemID.infinity_ingot, 0, "n", ItemID.neutronium_ingot, 0, "s", VanillaBlockID.sand, 0, "d", BlockID.dmBlock, 0]);
});*/
