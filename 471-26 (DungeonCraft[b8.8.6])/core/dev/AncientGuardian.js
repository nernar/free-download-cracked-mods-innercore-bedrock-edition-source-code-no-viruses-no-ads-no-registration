function AncientGuardianAI(ent) {
    ServerEntityAI.apply(this, arguments);
    this.onTick = function () {
        let mob = Entity.findNearest(Entity.getPosition(ent));
        let target = Entity.getTarget(ent);
        if (target != -1) {
            Entity.setMobile(ent, true);
            if (Entity.getDistanceToEntity(ent, target) >= 10) {
                Entity.setMobile(ent, false);
                Entity.setTarget(ent, -1);
            }
        } else {
            if (mob && isPlayer(mob)) {
                Entity.setTarget(ent, mob);
            }
            Entity.setMobile(ent, false);
        }
    };
    this.onHurt = function (attacker) {
        Entity.setMobile(ent, true);
    };
}
ServerEntityAIController.register("dungeoncraft:ancient_guardian", AncientGuardianAI);

