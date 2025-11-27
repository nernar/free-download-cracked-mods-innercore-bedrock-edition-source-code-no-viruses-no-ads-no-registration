var BLOCK_TYPE_LOW_LIGHT = Block.createSpecialType({
lightlevel: 5,
lightopacity: 15 });

IDRegistry.genBlockID("luckyIc"); Block.createBlock("luckyIc", [ {name: "Lucky cube IC", texture: [["Lucky_IC", 0]], inCreative: true} ], BLOCK_TYPE_LOW_LIGHT);

Recipes.addShaped({id: BlockID.luckyIc, count: 1, data: 0}, [ "aaa", "ada", "bcb" ], ['a', ItemID.plateGold, 0, 'b', ItemID.cableOptic, 0, 'c', 54, 0, 'd', BlockID.machineBlockAdvanced, 0]);

Block.registerDropFunction("luckyIc", function(coords, blockID, blockData, level){
	var drop = getDropBlock();
	World.drop(coords.relative.x + 0.5, coords.relative.y + 0.1, coords.relative.z + 0.5, drop.id, 1, drop.data);
	return [];
});

var LUCKY_IC_RANDOM_DROP = [
	{chance: 23, id: BlockID.machineBlockBasic, data: 0},
	{chance: 11, id: BlockID.machineBlockAdvanced, data: 0},
	{chance: 34, id: BlockID.cableCopper, data: 0},
	{chance: 9, id: BlockID.blockCopper, data: 0},
	{chance: 8, id: BlockID.blockTin, data: 0},
	{chance: 6, id: BlockID.blockBronze, data: 0},
	{chance: 7, id: BlockID.blockLead, data: 0},
	{chance: 8, id: BlockID.blockSteel, data: 0},
	{chance: 37, id: BlockID.oreCopper, data: 0},
	{chance: 36, id: BlockID.oreTin, data: 0},
	{chance: 36, id: BlockID.oreLead, data: 0},
	{chance: 7, id: BlockID.oreUranium, data: 0},
	{chance: 3, id: BlockID.oreIridium, data: 0},
	{chance: 2, id: ItemID.iridiumChunk, data: 0},
	{chance: 17, id: BlockID.reinforcedStone, data: 0},
	{chance: 19, id: BlockID.reinforcedGlass, data: 0},
	{chance: 78, id: BlockID.rubberTreeLog, data: 0},
	{chance: 16, id: ItemID.bronzeHelmet, data: 0},
	{chance: 15, id: ItemID.bronzeChestplate, data: 0},
	{chance: 15, id: ItemID.bronzeLeggings, data: 0},
	{chance: 16, id: ItemID.bronzeBoots, data: 0},
	{chance: 9, id: ItemID.batpack, data: 0},
	{chance: 8, id: ItemID.advBatpack, data: 0},
	{chance: 3, id: ItemID.energypack, data: 0},
	{chance: 0.80, id: ItemID.lappack, data: 0},
	{chance: 4, id: ItemID.nanoHelmet, data: 0},
	{chance: 2, id: ItemID.nanochestplate, data: 0},
	{chance: 2, id: ItemID.nanoLeggings, data: 0},
	{chance: 4, id: ItemID.nanoBoots, data: 0},
	{chance: 8, id: ItemID.nightvisionGoggles, data: 0},
	{chance: 0.40, id: ItemID.quantumHelmet, data: 0},
	{chance: 0.20, id: ItemID.quantumChestplate, data: 0},
	{chance: 0.20, id: ItemID.quantumLeggings, data: 0},
	{chance: 0.40, id: ItemID.quantumBoots, data: 0},
	{chance: 7, id: ItemID.cableOptic, data: 0},
	{chance: 25, id: ItemID.storageBattery, data: 0},
	{chance: 9, id: ItemID.storageAdvBattery, data: 0},
	{chance: 4, id: ItemID.storageCrystal, data: 0},
	{chance: 1, id: ItemID.storageLapotronCrystal, data: 0},
	{chance: 31, id: ItemID.cellEmpty, data: 0},
	{chance: 29, id: ItemID.cellWater, data: 0},
	{chance: 28, id: ItemID.cellLava, data: 0},
	{chance: 8, id: ItemID.upgradeTransformer, data: 0},
	{chance: 13, id: ItemID.bronzeSword, data: 0},
	{chance: 12, id: ItemID.bronzeAxe, data: 0},
	{chance: 11, id: ItemID.bronzePickaxe, data: 0},
	{chance: 13, id: ItemID.bronzeShovel, data: 0},
	{chance: 6, id: ItemID.chainsaw, data: 0},
	{chance: 21, id: ItemID.craftingHammer, data: 0},
	{chance: 19, id: ItemID.craftingCutter, data: 0},
	{chance: 4, id: ItemID.drill, data: 0},
	{chance: 1.50, id: ItemID.diamondDrill, data: 0},
	{chance: 0.90, id: ItemID.iridiumDrill, data: 0},
	{chance: 7, id: ItemID.electricHoe, data: 0},
	{chance: 6, id: ItemID.electricTreetap, data: 0},
	{chance: 2, id: ItemID.miningLaser, data: 0},
	{chance: 7, id: ItemID.nanoSaber, data: 0},
	{chance: 18, id: ItemID.wrench, data: 0},
	{chance: 4, id: ItemID.electricWrench, data: 0},
	{chance: 7, id: BlockID.primalGenerator, data: 0},
	{chance: 6, id: BlockID.geothermalGenerator, data: 0},
	{chance: 5, id: BlockID.solarPanel, data: 0},
	{chance: 13, id: BlockID.genWaterMill, data: 0},
	{chance: 11, id: BlockID.genWindMill, data: 0},
	{chance: 39, id: ItemID.rubberSapling, data: 0},
	{chance: 7, id: BlockID.compressor, data: 0},
	{chance: 8, id: BlockID.electricFurnace, data: 0},
	{chance: 8, id: BlockID.extractor, data: 0},
	{chance: 3, id: BlockID.inductionFurnace, data: 0},
	{chance: 8.15, id: BlockID.ironFurnace, data: 0},
	{chance: 4, id: BlockID.macerator, data: 0},
	{chance: 0.25, id: BlockID.massFabricator, data: 0},
	{chance: 4.26, id: BlockID.metalFormer, data: 0},
	{chance: 7, id: BlockID.recycler, data: 0},
	{chance: 1.70, id: BlockID.miner, data: 0},
	{chance: 2, id: BlockID.storageMFE, data: 0},
	{chance: 0.95, id: BlockID.storageMFSU, data: 0},
	{chance: 80, id: 5, data: 0},
	{chance: 78, id: 3, data: 0}
	];
	
function getDropBlock(){
	var total = 0;
	for (var i in LUCKY_IC_RANDOM_DROP){
		total += LUCKY_IC_RANDOM_DROP[i].chance;
	}
	var random = Math.random() * total * 1.4;
	var current = 0;
	for (var i in LUCKY_IC_RANDOM_DROP){
		var drop = LUCKY_IC_RANDOM_DROP[i];
		if (current < random && current + drop.chance > random){
			return drop;
		}
		current += drop.chance;
	}
	return {id: 0, data: 0};
}

Callback.addCallback("GenerateChunk", function (chunkX, chunkZ) {

    let coords = GenerationUtils.randomCoords(chunkX, chunkZ, 1, 512);
    if(Math.random() < 0.1){
    coords = GenerationUtils.findSurface(coords.x, coords.y, coords.z);

    if (World.getBlock(coords.x, coords.y + 1, coords.z).id === 0 && GenerationUtils.canSeeSky(coords.x, coords.y + 1, coords.z)) {
        World.setBlock(coords.x,coords.y,  coords.z, BlockID.luckyIc, 0);
        }}});