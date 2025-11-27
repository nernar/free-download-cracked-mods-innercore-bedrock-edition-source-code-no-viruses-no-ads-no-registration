IDRegistry.genItemID("fire_sword");
Item.createItem("fire_sword", "dc.item.fire_sword", {name: "fire_sword", meta: 0}, {stack: 1});
IDRegistry.genItemID("fire_pickaxe");
Item.createItem("fire_pickaxe", "dc.item.fire_pickaxe", {name: "fire_pickaxe", meta: 0}, {stack: 1});
Item.addRepairItemIds(ItemID.fire_sword, [ItemID.fire_ingot]);
Item.addRepairItemIds(ItemID.fire_pickaxe, [ItemID.fire_ingot]);
Item.setEnchantType(ItemID.fire_sword, Native.EnchantType.weapon, 14);
Item.setEnchantType(ItemID.fire_pickaxe, Native.EnchantType.pickaxe, 14);
ToolAPI.addToolMaterial("fire", {durability: 2220, level: 5, efficiency: 6, damage: 6, enchantability: 14});
ToolAPI.setTool(ItemID.fire_sword, "fire", ToolType.sword);
ToolAPI.setTool(ItemID.fire_pickaxe, "fire", ToolType.pickaxe);
Item.addCreativeGroup("sword", Translation.translate("dc.tab.sword"), [ItemID.fire_sword]);
Item.addCreativeGroup("pickaxe", Translation.translate("dc.tab.pickaxe"), [ItemID.fire_pickaxe]);
Item.registerUseFunction("fire_sword", function (coords, item, block, player) {
    let b = BlockSource.getDefaultForActor(player);
    if (b.getBlock(coords.relative.x, coords.relative.y, coords.relative.z).id == 0) {
        b.setBlock(coords.relative.x, coords.relative.y, coords.relative.z, 51, 0);
    }
});
Callback.addCallback("PlayerAttack", function (player, victim) {
    if (Entity.getCarriedItem(player).id == ItemID.fire_sword) {
        Entity.setFire(victim, 80, true);
    }
});

