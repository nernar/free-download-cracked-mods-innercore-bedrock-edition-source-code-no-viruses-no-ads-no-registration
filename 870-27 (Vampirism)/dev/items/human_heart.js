IDRegistry.genItemID("humanHeart");
Item.createItem("humanHeart", "Human Heart", {name: "humanHeart"});

 Callback.addCallback('EntityDeath', function(entity, attacker, damageType) {
    entityTypes = [Native.EntityType.VILLAGER, Native.EntityType.VILLAGER_V2, Native.EntityType.VINDICATOR, Native.EntityType.WANDERING_TRADER, Native.EntityType.WHITCH];
    if (entityTypes.indexOf(Entity.getType(entity)) == 1) {
        let coords = Entity.getPosition(entity);
        World.drop(coords.x, coords.y, coords.z, ItemID.humanHeart, 1);
    }
});