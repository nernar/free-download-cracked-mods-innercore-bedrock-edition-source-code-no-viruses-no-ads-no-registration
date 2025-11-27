IDRegistry.genItemID("pitchfork");
Item.createItem("pitchfork", "Pitchfork", {name: "pitchfork"}, {isTech: false, stack: 1});

ToolAPI.registerTool(ItemID.pitchfork, "iron", ["fibre"], {
        damage: 4, 
        isWeapon: true,
        brokenId: 0,
    }
);
Item.setToolRender("pitchfork", true);
Item.setEnchantType("pitchfork", Native.EnchantType.weapon, 4);

Recipes.addShaped({id: ItemID.pitchfork, count: 1, data: 0},
	["i i", " s ", " s "],
	['i', VanillaItemID.iron_ingot, 0, 's', VanillaItemID.stick, 0]
); 