let blocks = {
	coal: [VanillaBlockID.coal_block, VanillaBlockID.coal_block],
	iron: [VanillaBlockID.iron_block, VanillaBlockID.iron_block],
	gold: [VanillaBlockID.gold_block, VanillaBlockID.gold_block],
	diamond: [VanillaBlockID.diamond_block, VanillaBlockID.diamond_block],
	emerald: [VanillaBlockID.emerald_block, VanillaBlockID.emerald_block],
	lapis: [VanillaBlockID.lapis_block, VanillaBlockID.lapis_block],
	netherite: ["netherite_block", VanillaBlockID.netherite_block]
};
for(let key in blocks)
	regiserStorage(key+"_item_storage", [[["glass_item_storage", 1],["glass_item_storage", 1],["glass_item_storage", 0]], 0], [blocks[key][0], 0], ["glass", 0], 1, {
		drop: blocks[key][1],
		glass: VanillaBlockID.glass,
		base: blocks[key][1]
	});