IDRegistry.genItemID("reaper");
Item.createItem("reaper", "Reaper", {name: "reaper"}, {stack: 1});
ToolAPI.registerTool(ItemID.reaper, "iron", ["fibre"], {
        damage: 2, 
        isWeapon: true,
        brokenId: 0,
    }
);
Item.setToolRender("reaper", true);

Callback.addCallback('EntityDeath', function(victum, attacker, damageType) {
    let tool = Entity.getCarriedItem(attacker);
    if (tool.id == ItemID.reaper && VM.players[attacker]['level'] && Network.getConnectedPlayers().indexOf(attacker) != -1) {
        for (let slot=0; slot < 36; slot++) {
            let item = new PlayerActor(attacker).getInventorySlot(slot);
            if (item.id == ItemID.bloodBottle && item.data < 3) {
                VM.BM.bloodBottleDataUp(item, 1, attacker, slot);
                break;
            }
        }
    }
});

Recipes.addShaped({id: ItemID.reaper, count: 1, data: 0},
	["fif", "fif", " s "],
	['f', ItemID.vampireFang, 0, 'i', VanillaItemID.iron_ingot, 0, 's', VanillaItemID.stick, 0]
);