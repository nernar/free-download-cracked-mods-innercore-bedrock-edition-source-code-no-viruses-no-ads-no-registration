function getNativeBlock(region, x, y, z){
	let injector = new Injector(region.getPointer()).setArgsType(["ptr"]);
	let pos = new BlockPos(x, y, z);
	let block = injector.getPointerResult("_ZNK11BlockSource8getBlockERK8BlockPos", [
		Parameter.getPointer(pos) 
	]);
	injector.free();
	pos.free();
	return block;
}
function getNativeEntity(region, x, y, z){
	let injector = new Injector(region.getPointer()).setArgsType(["int", "int", "int"])
	let actor = injector.getPointerResult("_ZN11BlockSource14getBlockEntityEiii", [
		Parameter.getInt(x),
		Parameter.getInt(y),
		Parameter.getInt(z) 
	]); 
	injector.free();
	return actor;
}
function _randomTick(block, x, y, z, region){
	let injector = new Injector(block).setArgsType(["ptr", "ptr", "ptr"]);
	let pos = new BlockPos(x, y, z);
	injector.call("_ZNK5Block10randomTickER11BlockSourceRK8BlockPosR6Random", [
		Parameter.getPointer(region.getPointer()),
		Parameter.getPointer(pos), 
		Parameter.getPointer(GlobalContext.getServerLevel().getRandom()) 
	]);
	pos.free();
	injector.free();
}
function randomTick(region, x, y, z){
	_randomTick(getNativeBlock(region, x, y, z), x, y, z, region);
}
function tick(actor, region){
	let injector = new Injector(actor).setArgsType(["ptr"]); 
	injector.call("_ZN10BlockActor4tickER11BlockSource", [ 
		Parameter.getPointer(region.getPointer()) 
	], "_ZTV10BlockActor"); 
	injector.free();
}
function boost(region, pos){
	if(Math.random() < .2)
		randomTick(region, pos.x, pos.y, pos.z);
	let actor = getNativeEntity(region, pos.x, pos.y, pos.z);
	if(actor != 0)
		for(let i = 0;i < 20;i++)
			tick(actor, region);
	let tile = TileEntity.getTileEntity(pos.x, pos.y, pos.z, region);
	if(tile && tile.tick)
		for(let i = 0;i < 20;i++)
			tile.tick();
}

Translation.addTranslation("Time wand", {
	ru: "Ускорения времени"
});
IDRegistry.genItemID("time_wand"); 
Item.createItem("time_wand", "Time wand", {name: "time_wand", meta: 0}, {stack: 1});
Item.setMaxDamage(ItemID.time_wand, 512);

Callback.addCallback("ItemUse", function(pos, item, block, isExter, player){
	if(item.id == ItemID.time_wand){
		boost(BlockSource.getDefaultForActor(player), pos);
		item.data++;
		if(Item.getMaxDamage(ItemID.time_wand) <= item.data){
			item = {id: 0, count: 0, data: 0};
			World.playSoundAtEntity(player, "random.break", 1);
		}
		Entity.setCarriedItem(player, item.id, item.count, item.data);
	}
});

Recipes.addShaped({id: ItemID.time_wand, count: 1, data: 0}, [
	" nc",
	" gn",
	"g  ",
], ["g", VanillaItemID.gold_ingot, 0, "n", VanillaItemID.netherite_scrap, 0, "c", VanillaItemID.clock, 0]);

ModAPI.addAPICallback("AncientWondersAPI", function(api){
	Translation.addTranslation("Scroll: time boost", {
		ru: "Свиток: ускорения времени"
	});
	
	IDRegistry.genItemID("sroll_time_wand"); 
	Item.createItem("sroll_time_wand", "Scroll: time boost", {name: "sroll", meta: 4}, {stack: 1});
	Item.setGlint(ItemID.sroll_time_wand, true);
	Item.addCreativeGroup("sroll", Translation.translate("aw.creative_group.sroll"), [
		ItemID.sroll_time_wand
	]);
	
	api.Wands.setPrototype(ItemID.sroll_time_wand, {
		type: "function",
		compatibility: [ItemID.sroll2, ItemID.sroll3], 
		activate: {
			magic: 30,
			aspects: 15
		},
		setFunction(packet){
			boost(BlockSource.getDefaultForActor(packet.player), packet.coords);
		},
		installation(player, item){
			api.delItem(player, item);
		}
	});
	
	api.RitualAPI.addRecipe("ritual_2", "sroll_time_wand", [VanillaItemID.netherite_ingot, VanillaItemID.netherite_ingot, VanillaItemID.netherite_ingot, VanillaItemID.gold_ingot, VanillaItemID.gold_ingot, VanillaItemID.gold_ingot, ItemID.rune_greed, VanillaItemID.clock], {
		id: ItemID.sroll_time_wand,
		data: 0,
		count: 1,
		extra: null
	}, {
		aspects: 500,
		magic: 10
	});
});
