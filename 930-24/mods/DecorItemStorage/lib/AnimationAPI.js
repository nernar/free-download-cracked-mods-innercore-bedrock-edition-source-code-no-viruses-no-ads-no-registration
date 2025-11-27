/*
Автор: Reider ___
Внимание! Запрещено:
    1.Распространение библиотеки на сторонних источниках без указание ссылки на официальное сообщество
    2.Изменение кода
    3.Явное копирование кода
    4.Явное копирование правил 

    Используя библиотеку вы автоматически соглашаетесь с этими правилами.
*/
LIBRARY({
	name: "AnimationAPI",
	version: 2,
	shared: true,
	api: "CoreEngine"
});

function uptPos(self, start, end, value){
	self.setPos(self.coords.x, start+((end-start)*value), self.coords.z);
	if(self.coords.y == end) self.restart = !self.restart;
}
let AnimationType = {
	VANILLA(obj){
		obj = obj || {};
		let time = obj.time || 130;
		let pos = obj.pos || .05;
		let funcs = [function(){
			this._tick_ = (this._tick_||0)+1;
			if(this._tick_ > time)
				this._tick_ = 0;
		}];
		if(obj.isRotation === undefined || obj.isRotation)
			funcs.push(function(){
				this.setItemRotation(0, (Math.PI * (360*(this._tick_ / time))) / 180, 0); 
			});
		if((obj.isPosition === undefined || obj.isPosition) && pos != 0)
			funcs.push(function(){
				this.start = this.start || this.coords.y-pos;
				this.end = this.end || this.coords.y+pos;
				let value = (this._tick_/2) / (time/2);
				if(this.restart)
					uptPos(this, this.end, this.start, value);
				else
					uptPos(this, this.start, this.end, value);
			});
		obj.tick = obj.tick || function(){};
		return function(){
			obj.tick.call(this);
			for(let i in funcs)
				funcs[i].call(this);
			this.refresh();
		};
	}
};

Callback.addCallback("LevelDisplayed", function(){
	Network.addClientPacket("api.particle", function(data){
		if(Entity.getDimesion(Player.get()) != data.d) return;
		Particles.addParticle(data.p, data.x, data.y, data.z, data.vx||0, data.vy||0, data.vz||0);
	});
	Network.addClientPacket("api.particle_array", function(packet){
		if(Entity.getDimension(Player.get()) != packet.d) return;
		for(let i in packet.arr){
			let data = packet.arr[i];
			Particles.addParticle(data.type, data.x, data.y, data.z, data.vx||0, data.vy||0, data.vz||0);
		}
	});
});

let ParticlesCore = {
	spawnParticle(region, type, x, y, z, vx, vy, vz){
		Network.sendToAllClients("api.particle", {
			p: type, d: region.getDimension(),
			x: x, y: y, z: z,
			vx: vx, vy: vy, vz: vz
		})
	},
	spawnParticles(region, arr){
		Network.sendToAllClients("api.particle_array", {
			d: region.getDimension(),
			arr: arr
		})
	},
	Group(){
		let particles = [];
		this.add = function(type, x, y, z, vx, vy, vz){
			particles.push({type: type, x: x, y: y, z: z, vx: vx, vy: vy, vz: vz});
			return this;
		}
		this.send = function(region){
			ParticlesCore.spawnParticles(region, particles);
		}
	},
	spawnLine(region, type, x1, y1, z1, x2, y2, z2, count){
		let group = new ParticlesCore.Group();
		for(let i = 0;i<=count;i++)
			group.add(type, x1 + (x2-x1) * (i / count), y1 + (y2-y1) * (i / count), z1 + (z2-z1) * (i / count));
    group.send(region);
	},
	GroupLine(){
		let particles = [];
		let pre;
		this.addPoint = function(x, y, z){
			pre = [x, y, z];
			return this;
		}
		this.add = function(type, count, x, y, z, vx, vy, vz){
			if(pre == undefined)
				return this;
			for(let i = 0;i<=count;i++)
				particles.push({type: type, x: pre[0] + (x-pre[0]) * (i / count), y: pre[1] + (y-pre[1]) * (i / count), z: pre[2] + (z-pre[2]) * (i / count), vx: vx, vy: vy, vz: vz});
			pre = undefined;
			return this
		}
		this.addLine = function(type, count, x, y, z, vx, vy, vz){
			this.add.apply(this, arguments);
			this.addPoint.apply(this, [x, y, z]);
			return this;
		}
		this.send = function(region){
			ParticlesCore.spawnParticles(region, particles);
		}
	}
};

EXPORT("AnimationType", AnimationType);
EXPORT("ParticlesCore", ParticlesCore);