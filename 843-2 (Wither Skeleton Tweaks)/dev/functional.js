Callback.addCallback("EntityDeath", function (victim, attacker) {
    let getItem = Entity.getCarriedItem(attacker);
    if (Entity.getType(victim) == 48) {
        let witherSkeletonPosition = Entity.getPosition(victim);
        if (getItem.id == ItemID.blazingImmolationBlade || getItem.id == ItemID.immolationBlade) {
            World.drop(witherSkeletonPosition.x, witherSkeletonPosition.y, witherSkeletonPosition.z, 397, 1, 1);
        } else {
            World.drop(witherSkeletonPosition.x, witherSkeletonPosition.y, witherSkeletonPosition.z, ItemID.witherSkullFragment, 1, 0);
        }
    }
});
Callback.addCallback("PlayerAttack", function (attacker, victim) {
    let getItem = Entity.getCarriedItem(attacker);
    if (getItem.id == ItemID.blazingImmolationBlade || getItem.id == ItemID.immolationBlade) {
        Entity.setFire(victim, 200, true);
    }
});
Callback.addCallback("EntityAdded", function (entity) {
    if (Entity.getDimension(entity) == 1 && Entity.getType(entity) == 34) {
        let skeletonPosition = Entity.getPosition(entity);
        Entity.remove(entity);
        Entity.spawn(skeletonPosition.x, skeletonPosition.y, skeletonPosition.z, 48, null);
    }
});

