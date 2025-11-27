const EntityAttacks = {damageRadius(x, y, z, ent, r) {
    r = r || 2;
    let dimension = Entity.getDimension(ent);
    let ents = Entity.getAllInRange(coord, r);
    for (let i in ents) {
        let mob = ents[i];
        if (mob != ent && Entity.getDimension(mob) == dimension) {
            Entity.damageEntity(mob, damage);
        }
    }
}, attackSpiral(part, ent, distante, damage, setting) {
    setting = setting || {};
    let step = setting.step || 1;
    let powerSin = setting.powerSin || 1;
    let radius = setting.radius || 2;
    let pos = Entity.getPosition(ent);
    let vel = Entity.getLookVectorByAngle(Entity.getLookAngle(ent));
    let region = BlockSource.getDefaultForActor(ent);
    let group = new ParticlesCore.Group();
    for (let i = 0; i < distante; i += step) {
        let coord = {x: pos.x + (i * vel.x / 2) + Math.sin(i) * powerSin, y: pos.y + (i * vel.y / 2) + Math.sin(i) * powerSin, z: pos.z + (i * vel.z / 2) + Math.sin(i) * powerSin};
        this.damageRadius(coord.x, coord.y, coord.z, ent, radius);
        if (region.getBlockId(coord.x, coord.y, coord.z) != 0) {
            break;
        }
        group.add(part, coord.x, coord.y, coord.z);
    }
    group.send(region);
}};

