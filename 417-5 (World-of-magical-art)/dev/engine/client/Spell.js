const MagicSpell = new GameObject("magic_spell", {
	init: function (x, y, z, effect){
		let lookAngle = Entity.getLookAngle(Player.get()); 
		let velocity = {
			x: -Math.sin(lookAngle.yaw) * 1,
			y: Math.sin(lookAngle.pitch) * 1,
			z: Math.cos(lookAngle.yaw) * 1
		};
		
		this.position = Player.getPosition();
		this.velocity = velocity;
		this.particle = Particle.createSystem(0, 0, 0);
        this.spell = Spell.getPrototype(effect);
        this.particle.setVelocity(velocity.x, velocity.y, velocity.z);
		this.particle.emit(this.spell.effect, 0,x, y, z);
	},
	update: function (){
		var x = Math.floor(this.position.x);
		var y = Math.floor(this.position.y);
		var z = Math.floor(this.position.z);
		var block = World.getBlock(x, y, z);
		if(block.id !== 0){
			this.destroySelf();
		}
		if(this.spell.collision(this.position))
			this.destroySelf();
		
		this.move();
	},
    destroySelf: function () {
        this.particle.moveTo(-10000, 0, -10000);
		this.particle.stop();
		this.destroy();
	},
	move: function (){
		this.position.x += this.velocity.x;
		this.position.y += this.velocity.y;
		this.position.z += this.velocity.z;		
	}
});

const Spell = {
    prototype: {},
    registerPrototype: function (identifier, object){
        this.prototype[identifier] = object;
    },
    getPrototype: function (identifier){
        return this.prototype[identifier] || null;
    }
};