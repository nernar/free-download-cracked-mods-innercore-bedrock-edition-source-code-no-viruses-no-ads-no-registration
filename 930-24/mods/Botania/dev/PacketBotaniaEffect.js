const EBotaniaParticleEffect = {PAINT_LENS: 1, ARENA_INDICATOR: 2, ITEM_SMOKE: 3, SPARK_NET_INDICATOR: 4, SPARK_MANA_FLOW: 5, ENCHANTER_DESTROY: 6, BLACK_LOTUS_DISSOLVE: 7, TERRA_PLATE: 8, FLUGEL_EFFECT: 9, PARTICLE_BEAM: 10, DIVA_EFFECT: 11, HALO_CRAFT: 12, AVATAR_TORNADO_JUMP: 13, AVATAR_TORNADO_BOOST: 14};
function BotaniaParticleEffect(packet) {
    switch (packet.type) {
      case EBotaniaParticleEffect.PAINT_LENS:
      case EBotaniaParticleEffect.ARENA_INDICATOR:
      case EBotaniaParticleEffect.ITEM_SMOKE:
      case EBotaniaParticleEffect.SPARK_NET_INDICATOR:
      case EBotaniaParticleEffect.SPARK_MANA_FLOW:
        let rc = 0.45;
        let color = packet.color || 16777215;
        let r = ((color >> 16) & 255) / 255;
        let g = ((color >> 8) & 255) / 255;
        let b = (color & 255) / 255;
        let thisVec = new Vec3d(packet.coords.x + (Math.random() - 0.5) * rc, packet.coords.y + (Math.random() - 0.5) * rc, packet.coords.z + (Math.random() - 0.5) * rc);
        let receiverVec = new Vec3d(packet.coords2.x + (Math.random() - 0.5) * rc, packet.coords2.y + (Math.random() - 0.5) * rc, packet.coords2.z + (Math.random() - 0.5) * rc);
        let motion = receiverVec.subtract(thisVec).mul(0.04, 0.04, 0.04);
        let data = new WispParticleData([0.125, 0.25], r, g, b, null, 1, false, true);
        ParticleManager.addParticle(packet.dimension, new WispParticleType(data), thisVec.x, thisVec.y, thisVec.z, motion.x, motion.y, motion.z);
        break;
      case EBotaniaParticleEffect.ENCHANTER_DESTROY:
      case EBotaniaParticleEffect.BLACK_LOTUS_DISSOLVE:
      case EBotaniaParticleEffect.TERRA_PLATE:
        let percentage = packet.percentage;
        let ticks = 100 * percentage;
        let totalSpiritCount = 3;
        let tickIncrement = 360 / totalSpiritCount;
        let speed = 5;
        let wticks = ticks * speed - tickIncrement;
        let r = Math.sin((ticks - 100) / 10) * 2;
        let g = Math.sin(wticks * Math.PI / 180 * 0.55);
        for (let i = 0; i < totalSpiritCount; i++) {
            let x = packet.x + Math.sin(wticks * Math.PI / 180) * r + 0.5;
            let y = packet.y + 0.25 + Math.abs(r) * 0.7;
            let z = packet.z + Math.cos(wticks * Math.PI / 180) * r + 0.5;
            wticks += tickIncrement;
            ParticleManager.addParticle(packet.dimension, ModParticles.TerraPlate[0][Math.floor(ticks / 2)], x, y, z, 0, (-g * 0.03), 0);
            ParticleManager.addParticle(packet.dimension, ModParticles.TerraPlate[1][Math.floor(ticks / 2)], x, y, z, (Math.random() - 0.5) * 0.05, (Math.random() - 0.5) * 0.05, (Math.random() - 0.5) * 0.05);
            if (ticks == 100) {
                for (let j = 0; j < 15; j++) {
                    ParticleManager.addParticle(packet.dimension, ModParticles.TerraPlate[1][49], packet.x + 0.5, packet.y + 0.5, packet.z + 0.5, (Math.random() - 0.5) * 0.125, (Math.random() - 0.5) * 0.125, (Math.random() - 0.5) * 0.125);
                }
            }
        }
        break;
      case EBotaniaParticleEffect.FLUGEL_EFFECT:
      case EBotaniaParticleEffect.PARTICLE_BEAM:
      case EBotaniaParticleEffect.DIVA_EFFECT:
      case EBotaniaParticleEffect.HALO_CRAFT:
      case EBotaniaParticleEffect.AVATAR_TORNADO_JUMP:
      case EBotaniaParticleEffect.AVATAR_TORNADO_BOOST:
    }
}

