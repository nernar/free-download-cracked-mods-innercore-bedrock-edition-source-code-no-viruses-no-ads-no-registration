let ModEntities = (function (ModEntities) {
    let MANA_BURST = EntityType.create(EntityManaBurst);
    let SPARK = EntityType.create(EntitySpark);
    function register(type) {
        type.register();
    }
    ModEntities.register = register;
    function registerEntities() {
        register(MANA_BURST);
        register(SPARK);
    }
    ModEntities.registerEntities = registerEntities;
    return ModEntities;
}(ModEntities || (ModEntities = {})));

