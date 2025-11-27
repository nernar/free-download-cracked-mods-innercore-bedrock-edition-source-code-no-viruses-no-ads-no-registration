IDRegistry.genItemID("injection");
Item.createItem("injection", "Injection", {name: "injection"});

Item.registerUseFunction("injection", function(coords, item, block, player) {
    if (VM.players[player]['level']) {
        VM.playerReset(player);
        decreaseCarriedItem(1, player);
        Entity.damageEntity(player, Entity.getHealth(player));
    } else {
        VM.sendClientMessage(player, "tip", Native.Color.RED + Translation.translate('You’re not a vampire!'));
    }
});

Recipes.addShaped({id: ItemID.injection, count: 1, data: 0},
	[" si", "sgs", "is "],
	['s', VanillaBlockID.glass, 0, 'i', VanillaItemID.iron_ingot, 0, 'g', ItemID.garlic, 0]
);