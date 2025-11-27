function UndeadAI(ent) {
    ServerEntityAI.apply(this, arguments);
    Entity.addEffect(ent, Native.PotionEffect.regeneration, 2, 9999999, true, false);
    this.onHurt = function () {
        Entity.addEffect(ent, 15, 1, 100, false, false);
        Entity.addEffect(ent, 15, 1, 120, false, false);
    };
    this.onDeath = function () {
        let region = BlockSource.getDefaultForActor(ent);
        let pos = Entity.getPosition(ent);
        if (Math.random() <= 0.8) {
            region.spawnDroppedItem(pos.x, pos.y + 1, pos.z, BlockID.statua, 1, 0, null);
        }
        if (Math.random() <= 0.05) {
            region.spawnDroppedItem(pos.x, pos.y + 1, pos.z, ItemID.clitok1, Math.floor(Math.random() * 2), 0, null);
        }
    };
}
ServerEntityAIController.register("dungeoncraft:undead", UndeadAI);

