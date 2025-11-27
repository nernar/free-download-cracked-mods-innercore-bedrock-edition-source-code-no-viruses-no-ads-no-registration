IDRegistry.genItemID("vampireFang");
Item.createItem("vampireFang", "Vampire Fang", {name: "vampireFang"});

Item.registerUseFunction("vampireFang", function(coords, item, block, player) {
    if (VM.players[player]['infected']) {
        VM.sendClientMessage(player, "tip", Native.Color.RED + Translation.translate('You are already infected!'));
    } else {
        decreaseCarriedItem(1, player);
        VM.playerInfection(player, true);
    }
});

Callback.addCallback('EntityDeath', function(entity, attacker, damageType) {
    if (Entity.getType(entity) == Native.EntityType.BAT) {
      let coords = Entity.getPosition(entity);
      World.drop(coords.x, coords.y, coords.z, ItemID.vampireFang, 1);
    }
});