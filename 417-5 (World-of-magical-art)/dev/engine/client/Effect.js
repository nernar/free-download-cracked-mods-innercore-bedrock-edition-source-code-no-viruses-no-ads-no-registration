const Effect = {
    /**
     * Particle effects that are used in addition
     */

    poisonedFog: Particles.registerParticleType({
        texture: "poisoned_fog",
        size: [10, 20],
        lifetime: [20, 20],
        render: 2
    }),
    bubble: Particles.registerParticleType({
        texture: "bubble",
        size: [1, 1],
        lifetime: [10, 10],
        render: 2
    }),
    snow: Particles.registerParticleType({
        texture: "snow",
        size: [10, 10],
        lifetime: [10, 10],
        render: 2
    }),
    mana: Particles.registerParticleType({
        texture: "mana",
        size: [1, 1],
        lifetime: [10, 10],
        render: 2
    }),
    flame: Native.ParticleType.flame,
    cloud: Native.ParticleType.cloud,
    portal: Native.ParticleType.portal,
    fire: Native.ParticleType.fire,
    redstone: Native.ParticleType.redstone,
    splash: Native.ParticleType.splash,
    
    /**
     * Spell particles that are used in addition
     */
       
    earth_orb: Particles.registerParticleType({
        texture: "effect_earth",
        size: [10, 10],
        lifetime: [60, 120],
        render: 2,
        animators: {
            size: {
                period: 120,
                fadeIn: 1,
                fadeOut: 0,
                start: 0.2,
                end: 1
            }
        }
    }),
    lightning_orb: Particles.registerParticleType({
        texture: "effect_lightning",
        size: [10, 10],
        lifetime: [400, 400],
        render: 2,
        animators: {
            size: {
                period: 120,
                fadeIn: 1,
                fadeOut: 0,
                start: 0.2,
                end: 1
            }
        }
    }),
    fire_orb: Particles.registerParticleType({
        texture: "effect_fire",
        size: [10, 10],
        lifetime: [400, 400],
        render: 2,
        animators: {
            size: {
                period: 120,
                fadeIn: 1,
                fadeOut: 0,
                start: 0.2,
                end: 1
            }
        }
    }),
    darkness_orb: Particles.registerParticleType({
        texture: "effect_darkness",
        size: [10, 10],
        lifetime: [400, 400],
        render: 2,
        animators: {
            size: {
                period: 120,
                fadeIn: 1,
                fadeOut: 0,
                start: 0.2,
                end: 1
            }
        }
    }),
    ice_orb: Particles.registerParticleType({
        texture: "effect_ice",
        size: [10, 10],
        lifetime: [400, 400],
        render: 2,
        animators: {
            size: {
                period: 120,
                fadeIn: 1,
                fadeOut: 0,
                start: 0.2,
                end: 1
            }
        }
    })    
};