Item.setEnchantType(ItemID.soulHelmet, Native.EnchantType.helmet, 25);
Item.setEnchantType(ItemID.soulChestplate, Native.EnchantType.chestplate, 25);
Item.setEnchantType(ItemID.soulLeggings, Native.EnchantType.leggings, 25);
Item.setEnchantType(ItemID.soulBoots, Native.EnchantType.boots, 25);

Item.addRepairItemIds(ItemID.soulHelmet, [ItemID.pili_soul]);
Item.addRepairItemIds(ItemID.soulChestplate, [ItemID.pili_soul]);
Item.addRepairItemIds(ItemID.soulLeggings, [ItemID.pili_soul]);
Item.addRepairItemIds(ItemID.soulBoots, [ItemID.pili_soul]);

Item.setEnchantType(ItemID.heaDripper, Native.EnchantType.weapon, 14);
Item.addRepairItemIds(ItemID.heaDripper, [ItemID.spawnerchunk]);

Item.addRepairItemIds(ItemID.wither_staff, [ItemID.pili_soul]);
Item.addRepairItemIds(ItemID.dragon_staff, [ItemID.pili_soul]);
Item.addRepairItemIds(ItemID.ender_staff, [ItemID.pili_soul]);
Item.addRepairItemIds(ItemID.tnt_staff, [ItemID.pili_soul]);
Item.addRepairItemIds(ItemID.ghast_staff, [ItemID.pili_soul]);
Item.addRepairItemIds(ItemID.ifrit_staff, [ItemID.pili_soul]);
Item.addRepairItemIds(ItemID.phantom_staff, [ItemID.pili_soul]);



Item.addCreativeGroup("ripper", Translation.translate("ripper"), [
	ItemID.heaDripper,
	ItemID.spawnerchunk,
	ItemID.pili_soul,
	ItemID.bedbre,
ItemID.soulHelmet,
ItemID.soulChestplate,
ItemID.soulLeggings,
ItemID.soulBoots,
ItemID.wither_staff,
ItemID.dragon_staff,
ItemID.tnt_staff,
ItemID.ghast_staff,
ItemID.ifrit_staff,
ItemID.ender_staff,
ItemID.phantom_staff,
BlockID.pilimob_grinder

]);


