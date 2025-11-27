function SoulParadiseAI(ent) {
    EntityAI.apply(this, arguments);
    this.onLocalTick = function () {
        let pos = Entity.getPosition(ent);
        for (let i = 0; i < 5; i++) {
            Particles.addParticle(PartType.magic2, pos.x - 0.5 + Math.random(), pos.y - 0.5 + Math.random(), pos.z - 0.5 + Math.random(), 0, 0, 0);
        }
        Particles.addParticle(PartType.fire, pos.x - 0.5 + Math.random(), pos.y - 0.5 + Math.random(), pos.z - 0.5 + Math.random(), 0, 0, 0);
    };
    let attack = new StrikerRandom(1 / 500);
    const setting = {step: 0.15, powerSin: 0.3, radius: 0.5};
    this.onTick = function () {
        if (attack.canRandom() && Entity.getTarget(ent) != -1) {
            EntityAttacks.attackSpiral(PartType.rai, ent, 20, 4, setting);
            Entity.setTarget(ent, -1);
        }
    };
    this.onHurt = function (attacker) {
        Entity.setTarget(ent, attacker);
    };
}
EntityAI.register("dungeoncraft:soul_paradise", SoulParadiseAI);

