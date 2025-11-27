var JAVA_ANIMATOR = android.animation.ValueAnimator;
var JAVA_HANDLER = android.os.Handler;
var LOOPER_THREAD = android.os.Looper;
var JAVA_HANDLER_THREAD = new JAVA_HANDLER(LOOPER_THREAD.getMainLooper());

function createAnimation(_duration, _updateFunc){
	let animation = JAVA_ANIMATOR.ofFloat([0,1]);
	animation.setDuration(_duration);
	if(_updateFunc)
		animation.addUpdateListener({
			onAnimationUpdate(updatedAnim){
				_updateFunc(updatedAnim.getAnimatedValue(), updatedAnim);
			}
		});
	JAVA_HANDLER_THREAD.post({
		run(){
			animation.start();
		}
	})
	return animation;
}
Network.addClientPacket("client.emitter", function(packet){
	if(Player.getDimension() != packet.dim)
		return;
	if(!ProjectTile.allEmitter[packet.id]){
		ProjectTile.allEmitter[packet.id] = new Particles.ParticleEmitter(packet.x, packet.y, packet.z)
		ProjectTile.allEmitter[packet.id].setEmitRelatively(true);
		ProjectTile.allEmitter[packet.id].emit(packet.part, 0, 0, 0, 0);
	}
	ProjectTile.allEmitter[packet.id] = ProjectTile.allEmitter[packet.id] || new Particles.ParticleEmitter(x, y, z)
	let emitter = ProjectTile.allEmitter[packet.id];
	emitter.moveTo(packet.pos.x,packet.pos.y,packet.pos.z);
});
Network.addClientPacket("client.emitter.end", function(p){
	if(ProjectTile.allEmitter[p.id])
		delete ProjectTile.allEmitter[p.id];
});
let ProjectTile = {
	getMilliseconds(tick){
		return (tick/20)*1000;
	},
	allEmitter: {},
	create(func){
		this.spawn = function(part, x, y, z, ax, ay, az, player, region, duration){
			let start = new Date().getTime();
			ax = ax*120;
			ay = ay*120;
			az = az*120;
			let id = Math.random()*32000
			let animation = createAnimation(ProjectTile.getMilliseconds(duration), function(v, anim){
				let pos = {
					x: x+(ax*v),
					y: y+(ay*v),
					z: z+(az*v)
				};
				Network.sendToAllClients("client.emitter", {
					dim: Entity.getDimension(player),
					id: id,
					part: part,
					pos: pos,
					x: x,
					y: y,
					z: z
				})
				if(region.getBlockId(pos.x,pos.y,pos.z)!=0)
					anim.cancel();
				func(region, pos, player, anim);
			});
			animation.addListener({
				onAnimationEnd(){
					Network.sendToAllClients("client.emitter.end", {
						id: id
					});
				}
			});
		}
	},
	spawnClient(part, x, y, z, ax, ay, az, player, region, duration){
		ax = ax*120;
		ay = ay*120;
		az = az*120;
		let emitter = new Particles.ParticleEmitter(x, y, z);
		emitter.setEmitRelatively(true);
		emitter.emit(part, 0, 0, 0, 0);
		let animation = createAnimation(duration, function(v, anim){
			let pos = {
				x: x+(ax*v),
				y: y+(ay*v),
				z: z+(az*v)
			};
			emitter.moveTo(pos.x,pos.y,pos.z);
			if(region.getBlockId(pos.x,pos.y,pos.z)!=0)
				anim.cancel();
		})
	}
};
let BulletDefault = new ProjectTile.create(function(region, pos, player){
	let ents = Entity.getAllInRange(pos, 1.5);
	for(let i in ents)
		if(player != ents[i])
			Entity.damageEntity(ents[i], 6);
});