let ModParticles = (function (ModParticles) {
    function registerParticles() {
        for (let i = 1; i <= 360; i += 4) {
            let color = MathHelper.hsvToRGB(i % 360 / 360, 1, 1);
            let data = new SparkleParticleData([0, 1], color[0] / 255, color[1] / 255, color[2] / 255, null, [5, 15]);
            RainbowSparkle.push(data);
            data = new WispParticleData([1, 3], color[0] / 255, color[1] / 255, color[2] / 255, null, [10, 50]);
            RainbowWisp.push(data);
        }
        for (let i = 0; i < 50; i++) {
            let colorsfx = [0, i * 2 / 100, 1 - i * 2 / 100];
            let data = new WispParticleData(0.85, colorsfx[0], colorsfx[1], colorsfx[2], null, 0.25).setAnimators({size: {start: 1, end: 0}});
            TerraPlate[0].push(new WispParticleType(data).getId());
            data = new WispParticleData([0.1, 0.2], colorsfx[0], colorsfx[1], colorsfx[2], null, 1);
            TerraPlate[1].push(new WispParticleType(data).getId());
        }
        for (let i in DyeColor.values()) {
            let dyeColor = DyeColor.values()[i];
            let color = dyeColor.getColorComponentValues();
            SparkEntity.push(new ParticleType({texture: "spark", render: 2, size: [3, 3], lifetime: [15, 15], color: color.concat(0.5), animators: {icon: {start: 0, end: 1, period: 12, fadeIn: 1}}}));
        }
        ParticleManager.registerParticleEffect("fx_sparkle", function (packet) {
            new FXSparkle(packet.data, packet.x, packet.y, packet.z, packet.vx || 0, packet.vy || 0, packet.vz || 0, packet.ax || 0, packet.ay || 0, packet.az || 0);
        });
        ParticleManager.registerParticleEffect("fx_wisp", function (packet) {
            new FXWisp(packet.data, packet.x, packet.y, packet.z, packet.vx || 0, packet.vy || 0, packet.vz || 0, packet.ax || 0, packet.ay || 0, packet.az || 0);
        });
        ParticleManager.registerParticleEffect("breaking_pacticle", function (packet, isRemote) {
            if (!isRemote) {
                packet.id = Network.serverToLocalId(packet.id);
            }
            ParticlesHelper.addBreakingItemParticle(packet.x, packet.y, packet.z, packet.id, packet.data);
        });
        ParticleManager.registerParticleEffect("breaking_pacticles", function (packet, isRemote) {
            if (!isRemote) {
                packet.id = Network.serverToLocalId(packet.id);
            }
            for (let i = 0; i < packet.count; i++) {
                ParticlesHelper.addBreakingItemParticle(packet.x, packet.y, packet.z, packet.id, packet.data);
            }
        });
        ParticleManager.registerParticleEffect("twig_wand.do_particle_beam", function (packet, isRemote) {
            let orig = new Vec3d(packet.orig);
            let end = new Vec3d(packet.end);
            let diff = end.subtract(orig);
            let movement = diff.normalize().multiply(0.05);
            let iters = diff.mag() / movement.mag();
            let huePer = 1 / iters;
            let currentPos = orig;
            for (let i = 0; i < iters; i++) {
                let hue = i * huePer;
                let color = MathHelper.hsvToRGB(MathHelper.frac(hue), 1, 1);
                let r = color[0] / 255;
                let g = color[1] / 255;
                let b = color[2] / 255;
                let data = SparkleParticleData.noClip(0.5, r, g, b, null, 4);
                ParticleManager.addParticle(new SparkleParticleType(data), currentPos.x, currentPos.y, currentPos.z, 0, 0, 0);
                currentPos = currentPos.add(movement);
            }
        });
    }
    ModParticles.registerParticles = registerParticles;
    let TerraPlate = ModParticles.TerraPlate = [[], []];
    let RainbowSparkle = ModParticles.RainbowSparkle = [];
    let RainbowWisp = ModParticles.RainbowWisp = [];
    let SparkEntity = ModParticles.SparkEntity = [];
    return ModParticles;
}({}));

