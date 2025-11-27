Callback.addCallback("EntityAdded", function (entity) {
    if (moon.isInDimension() == true) {
        if (Entity.getType(entity) != Native.EntityType.ITEM && Entity.getType(entity) != Native.EntityType.BOAT && Entity.getType(entity) != Native.EntityType.EXPERIENCE_ORB && Entity.getType(entity) != Native.EntityType.EXPERIENCE_POTION && Entity.getType(entity) != Native.EntityType.ARROW && Entity.getType(entity) != Native.EntityType.EGG && Entity.getType(entity) != Native.EntityType.FALLING_BLOCK && Entity.getType(entity) != Native.EntityType.FIREBALL && Entity.getType(entity) != Native.EntityType.SMALL_FIREBALL && Entity.getType(entity) != Native.EntityType.FISHING_HOOK && Entity.getType(entity) != Native.EntityType.MINECART && Entity.getType(entity) != Native.EntityType.PAINTING && Entity.getType(entity) != Native.EntityType.PRIMED_TNT && Entity.getType(entity) != Native.EntityType.PLAYER && Entity.getType(entity) != Native.EntityType.SNOWBALL && Entity.getType(entity) != Native.EntityType.THROWN_POTION) {
            Entity.remove(entity);
            if (DEV_MODE == true) {
                Debug.warning("Removed 1 entity");
            }
        }
    }
});

