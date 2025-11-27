IDRegistry.genItemID("divine_sword");
Item.createItem("divine_sword", "dc.item.divine_sword", {name: "divine_sword", meta: 0}, {stack: 1});
IDRegistry.genItemID("divine_pickaxe");
Item.createItem("divine_pickaxe", "dc.item.divine_pickaxe", {name: "divine_pickaxe", meta: 0}, {stack: 1});
Item.addRepairItemIds(ItemID.divine_sword, [ItemID.god_ingot]);
Item.addRepairItemIds(ItemID.divine_pickaxe, [ItemID.god_ingot]);
Item.setEnchantType(ItemID.divine_sword, Native.EnchantType.weapon, 14);
Item.setEnchantType(ItemID.divine_pickaxe, Native.EnchantType.pickaxe, 14);
ToolAPI.addToolMaterial("divine", {durability: 2220, level: 5, efficiency: 6, damage: 6, enchantability: 14});
ToolAPI.setTool(ItemID.divine_sword, "divine", ToolType.sword);
ToolAPI.setTool(ItemID.divine_pickaxe, "divine", ToolType.pickaxe);
Item.addCreativeGroup("sword", Translation.translate("dc.tab.sword"), [ItemID.divine_sword]);
Item.addCreativeGroup("pickaxe", Translation.translate("dc.tab.pickaxe"), [ItemID.divine_pickaxe]);
Callback.addCallback("PlayerAttack", function (player, victim) {
    if (Entity.getCarriedItem(player).id == ItemID.divine_sword) {
        if (Math.random() <= 0.1) {
            let coords = Entity.getPosition(victim);
            Entity.spawn(coords.x, coords.y, coords.z, 93);
            World.playSoundAtEntity(victim, "ambient.weather.thunder", 50);
            Entity.damageEntity(victim, 20);
        }
    }
});

