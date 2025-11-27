const ParticlesStorage = requireGlobal("ParticlesStorage");
const ParticlesCore = requireGlobal("ParticlesCore");
const RenderUtil = requireGlobal("RenderUtil");
 
const magic_particle = "_magic_particle";
ParticlesStorage.setGroup("aw")
	.add(magic_particle, Particles.registerParticleType({
		texture: "magic_particle",
		render: 3,
		size: [1, 3],
		lifetime: [80, 110], 
		animators: {
			size: {fadeOut: 1, fadeIn: 0.2, start: 0, end: 0},
			icon: {start: 0, end: 1, period: 10, fadeIn: 1}
		}
	}))
	.setGroup(null);