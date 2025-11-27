tcToolAPI.EnchantTypes.drain = new Enchant("drain", Translation.translate("drain"), {
    frequency: 3,
    in_trade: true,
    in_table: true,
    is_treasure: false,
    level: [1, 5],
    cost: [16, 32, 48, 64],
    mask: EnchantSlot.addGroup("sword", EnchantSlotTypes.SWORD)
});
tcToolAPI.EnchantTypes.batch = new Enchant("batch", Translation.translate("batch"), {
    frequency: 3,
    in_trade: true,
    in_table: true,
    is_treasure: false,
    level: [1, 3],
    cost: [16, 32, 48, 64],
    mask: EnchantSlot.addGroup("tool", EnchantSlotTypes.SHOVEL, EnchantSlotTypes.PICKAXE, EnchantSlotTypes.AXE)
});