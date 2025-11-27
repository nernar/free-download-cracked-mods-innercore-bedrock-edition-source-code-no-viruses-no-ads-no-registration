Math.sign = Math.sign || function (x) {
    x = +x;
    if (x === 0) {
        return x;
    }
    return x > 0 ? -0.1 : 0.1;
};
var ParticlesAPI = {particles: Particles.registerParticleType({texture: "mana", render: 2, size: [2, 2], lifetime: [50, 50], animators: {alpha: {fadeIn: 0.4, fadeOut: 0.4}, size: {fadeOut: 0.5, fadeIn: 0.2, start: 0, end: 0}}}), forest: Particles.registerParticleType({texture: "EnchantedForest_particle", render: 2, size: [2, 2], lifetime: [50, 50], animators: {alpha: {fadeIn: 0.4, fadeOut: 0.4}, size: {fadeOut: 0.5, fadeIn: 0.2, start: 0, end: 0}}}), rai: Particles.registerParticleType({texture: "rai_particle", render: 2, size: [10, 10], lifetime: [40, 40], animators: {alpha: {fadeIn: 0.4, fadeOut: 0.4}, size: {fadeOut: 0.5, fadeIn: 0.2, start: 0, end: 0}}}), getVector: function (pos1, pos2) {
    let vector = {x: Math.sign(pos1.x - pos2.x), y: Math.sign(pos1.y - pos2.y), z: Math.sign(pos1.z - pos2.z)};
    return vector;
}, coords: function (part, x1, y1, z1, x2, y2, z2, time) {
    time = time || 50;
    var vx = -((x1 + 0.5) - (x2 + 0.5)) / time;
    var vy = -((y1 + 0.5) - (y2 + 0.5)) / time;
    var vz = -((z1 + 0.5) - (z2 + 0.5)) / time;
    Mp.spawnParticle(part, x1 + 0.5, y1 + 0.5, z1 + 0.5, vx, vy, vz);
}, spawnLine: function (particles, x1, y1, z1, x2, y2, z2, count) {
    for (i = 0; i <= count; i++) {
        var x = x1 + (-(x1 - x2)) * (i / count);
        var y = y1 + (-(y1 - y2)) * (i / count);
        var z = z1 + (-(z1 - z2)) * (i / count);
        Mp.spawnParticle(particles, x + 0.5, y + 0.5, z + 0.5, 0, 0, 0);
    }
}, spawnCircle: function (particles, x, y, z, radius, count, rotation) {
    let angle = 0;
    let step = 360 / count;
    if (rotation == 0) {
        for (i = 0; i < 360; i += step) {
            let x1 = x + radius * Math.cos(i);
            let y1 = y - radius * Math.sin(i);
            Mp.spawnParticle(particles, x1 + 0.5, y1 + 0.5, z + 0.5, 0, 0, 0);
        }
    }
    if (rotation == 1) {
        for (i = 0; i < 360; i += step) {
            let z1 = z + radius * Math.cos(i);
            let y1 = y - radius * Math.sin(i);
            Mp.spawnParticle(particles, x + 0.5, y1 + 0.5, z1 + 0.5, 0, 0, 0);
        }
    }
    if (rotation == 2) {
        for (i = 0; i < 360; i += step) {
            let x1 = x + radius * Math.cos(i);
            let z1 = z - radius * Math.sin(i);
            Mp.spawnParticle(particles, x1 + 0.5, y + 0.5, z1 + 0.5, 0, 0, 0);
        }
    }
}, spawnCircleVector: function (time, particle, x, y, z, radius, count) {
    let angle = 0;
    let step = 360 / count;
    for (i = 0; i < 360; i += step) {
        let x1 = x + radius * Math.cos(i);
        let z1 = z - radius * Math.sin(i);
        Mp.spawnParticle(particle, x1 + 0.5, y + 0.5, z1 + 0.5, -Math.sign(x1 - x), 0, -Math.sign(z1 - z));
    }
}, spawnShellEnt: function (part, ent, distante, damage) {
    let pos = Entity.getPosition(ent);
    let vel = Entity.getLookVectorByAngle(Entity.getLookAngle(ent));
    for (let i = 0; i < distante; i++) {
        let coord = {x: pos.x + (i * vel.x / 2), y: pos.y + 0.5 + (i * vel.y / 2), z: pos.z + (i * vel.z / 2)};
        let ent3 = Entity.getAllInRange(coord, 2);
        for (let i1 in ent3) {
            if (ent3[i1] != ent) {
                Entity.damageEntity(ent3[i1], 5);
            }
        }
        if (BlockSource.getDefaultForActor(ent).getBlockId(coord.x, coord.y, coord.z) != 0) {
            break;
        }
        Mp.spawnParticle(part, coord.x, coord.y, coord.z);
    }
}, spawnShellCoords: function (part, x1, y1, z1, x2, y2, z2, damage) {
    let count = ((-(x1 - x2)) + (-(y1 - y2)) + (-(z1 - z2))) / 3 * 10;
    for (let i = 0; i <= count; i++) {
        let x = x1 + (-(x1 - x2)) * (i / count);
        let y = y1 + (-(y1 - y2)) * (i / count);
        let z = z1 + (-(z1 - z2)) * (i / count);
        Mp.spawnParticle(part, x + 0.5, y + 0.5, z + 0.5, 0, 0, 0);
        let ent = Entity.getAllInRange({x: x, y: y, z: z}, 2);
        let en = false;
        for (let i1 in ent) {
            Entity.damageEntity(ent[i1], damage);
            en = true;
        }
        if (en) {
            break;
        }
        if (World.getBlockID(x, y, z) != 0) {
            break;
        }
    }
}, spawnShellEnt2: function (part, ent, distante, damage) {
    let pos = Entity.getPosition(ent);
    let vel = Entity.getLookVectorByAngle(Entity.getLookAngle(ent));
    let x = 0;
    let y = 0;
    let z = 0;
    for (let i = 0; i < distante; i++) {
        if (x >= 2) {
            x -= 0.1;
        } else {
            if (x <= -2) {
                x += 0.1;
            } else {
                x += (Math.random() / 2) - (Math.random() / 2);
            }
        }
        if (y >= 2) {
            y -= 0.1;
        } else {
            if (y <= -2) {
                y += 0.1;
            } else {
                y += (Math.random() / 2) - (Math.random() / 2);
            }
        }
        if (z >= 2) {
            z -= 0.1;
        } else {
            if (z <= -2) {
                z += 0.1;
            } else {
                z += (Math.random() / 2) - (Math.random() / 2);
            }
        }
        let coord = {x: pos.x + x + (i * vel.x / 2), y: pos.y + y + 0.5 + (i * vel.y / 2), z: pos.z + z + (i * vel.z / 2)};
        let ent3 = Entity.getAllInRange(coord, 2);
        for (let i1 in ent3) {
            if (ent3[i1] != ent) {
                Entity.damageEntity(ent3[i1], damage);
            }
        }
        if (BlockSource.getDefaultForActor(ent).getBlockId(coord.x, coord.y, coord.z) != 0) {
            break;
        }
        Mp.spawnParticle(part, coord.x, coord.y, coord.z);
    }
}};

