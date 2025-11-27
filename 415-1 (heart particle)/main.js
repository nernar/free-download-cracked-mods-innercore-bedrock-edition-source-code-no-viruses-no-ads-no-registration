const config = __config__.getBool("onlyPlayerAttack");

const Heart = {
	1: Particles.registerParticleType({
		texture: "heart_harf",
		size: [2, 2],
		lifetime: [20, 20]
	}),
	2: Particles.registerParticleType({
		texture: "heart",
		size: [2, 2],
		lifetime: [20, 20]
	}),
	20: Particles.registerParticleType({
		texture: "heart_10",
		size: [4, 4],
		lifetime: [20, 20]
	})
};


const Emit = function(emitter, type){
	emitter.emit(Heart[type], 0, 0, 0, 0, Math.random() / 2 - 0.25, Math.random() / 2, Math.random() / 2 - 0.25, 0, -0.1, 0);
};


Callback.addCallback("EntityHurt", function(attacker, victim, damage){

	if(config && attacker == Player.get()){
		return;
	}

	const pos = Entity.getPosition(victim);
	const emitter = new Particles.ParticleEmitter(pos.x, pos.y, pos.z);
	emitter.setEmitRelatively(true);

	let i = 0;

	for(i = damage / 20 | 0; i--;){
		Emit(emitter, 20);
	}
	damage %= 20;

	for(i = damage >> 1; i--;){
		Emit(emitter, 2);
	}

	if(damage & 1){
		Emit(emitter, 1);
	}

});