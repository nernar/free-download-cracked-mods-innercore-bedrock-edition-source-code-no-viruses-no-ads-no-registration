/*
BUILD INFO:
  dir: dev
  target: main.js
  files: 5
*/



// file: header.js

IMPORT("RenderAPI");
IMPORT("SoundAPI");

const SoundPool = new SoundAPI("Guns");
const FOLDER_SOUNDS = __dir__ + "assets/sounds/";




// file: models/deserteagle.js

//create Reider ___ size - 32
let deserteagle = (function(obj, texture_default, data_default){
	obj = obj || {};
	const texture = texture_default || 1, data = data_default || 0;
	let model = new RenderUtil.Model();
	model.addBoxByBlock("cube", 0.4375, 0, 0.09375, 0.5625, 0.25, 0.25, obj["cube"] ? obj["cube"].texture : texture, obj["cube"] ? obj["cube"].data : data);
	model.addBoxByBlock("cube_2", 0.40625, 0.28125, 0.0625, 0.59375, 0.34375, 0.78125, obj["cube_2"] ? obj["cube_2"].texture : texture, obj["cube_2"] ? obj["cube_2"].data : data);
	model.addBoxByBlock("cube_3", 0.40625, 0.34375, 0.09375, 0.59375, 0.375, 0.78125, obj["cube_3"] ? obj["cube_3"].texture : texture, obj["cube_3"] ? obj["cube_3"].data : data);
	model.addBoxByBlock("cube_4", 0.40625, 0.375, 0.125, 0.59375, 0.40625, 0.78125, obj["cube_4"] ? obj["cube_4"].texture : texture, obj["cube_4"] ? obj["cube_4"].data : data);
	model.addBoxByBlock("cube_5", 0.40625, 0.25, 0.0625, 0.59375, 0.28125, 0.75, obj["cube_5"] ? obj["cube_5"].texture : texture, obj["cube_5"] ? obj["cube_5"].data : data);
	model.addBoxByBlock("cube_6", 0.46875, 0.21875, 0.03125, 0.53125, 0.25, 0.625, obj["cube_6"] ? obj["cube_6"].texture : texture, obj["cube_6"] ? obj["cube_6"].data : data);
	model.addBoxByBlock("cube_7", 0.46875, 0.40625, 0.15625, 0.53125, 0.4375, 0.75, obj["cube_7"] ? obj["cube_7"].texture : texture, obj["cube_7"] ? obj["cube_7"].data : data);
	model.addBoxByBlock("cube_8", 0.46875, 0.40625, 0.15625, 0.53125, 0.4375, 0.75, obj["cube_8"] ? obj["cube_8"].texture : texture, obj["cube_8"] ? obj["cube_8"].data : data);
	model.addBoxByBlock("cube_9", 0.4375, 0.28125, 0.78125, 0.5625, 0.375, 0.8125, obj["cube_9"] ? obj["cube_9"].texture : texture, obj["cube_9"] ? obj["cube_9"].data : data);
	model.addBoxByBlock("cube_10", 0.46875, 0.125, 0.25, 0.53125, 0.15625, 0.34375, obj["cube_10"] ? obj["cube_10"].texture : texture, obj["cube_10"] ? obj["cube_10"].data : data);
	model.addBoxByBlock("cube_11", 0.46875, 0.15625, 0.34375, 0.53125, 0.21875, 0.375, obj["cube_11"] ? obj["cube_11"].texture : texture, obj["cube_11"] ? obj["cube_11"].data : data);
	model.addBoxByBlock("cube_12", 0.46875, 0.15625, 0.28125, 0.53125, 0.1875, 0.3125, obj["cube_12"] ? obj["cube_12"].texture : texture, obj["cube_12"] ? obj["cube_12"].data : data);
	model.addBoxByBlock("cube_13", 0.46875, 0.1875, 0.25, 0.53125, 0.21875, 0.28125, obj["cube_13"] ? obj["cube_13"].texture : texture, obj["cube_13"] ? obj["cube_13"].data : data);
	return model;
})();//boxes - 13




// file: api/ProjectTile.js

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




// file: api/GunAPI.js

Network.addServerPacket("gun.reload", function(client, packet){
	GunAPI.reload(client.getPlayerUid());
});
let GunUI = new UI.Window({
	location: {
		height: 90,
		width: 200,
		y: 30
	},
	drawing: [
		{type: "color", color: android.graphics.Color.argb(0, 0, 0, 0)},
	],
	elements: {
		"ammons": {type: "text", text: "8/8", font: {size: 150}, clicker: {
			onClick(){
				Network.sendToServer("gun.reload", {});
			}
		}}
	},
});

let open_name = "";

Callback.addCallback("NativeGuiChanged", function(name){
	open_name = name;
});

Callback.addCallback("LocalTick", function(){
	if(!GunAPI.client_container)
		GunAPI.client_container = new UI.Container();
	if(World.getThreadTime() % 5 != 0)
		return;
	if(open_name != "in_game_play_screen"){
		if(GunAPI.client_container.isOpened())
			GunAPI.client_container.close();
		return;
	}
	let item = Entity.getCarriedItem(Player.get());
	if(GunAPI.isGun(item.id) && !GunAPI.client_container.isOpened())
		GunAPI.client_container.openAs(GunUI);
	else if(!GunAPI.isGun(item.id))
		GunAPI.client_container.close();
	if(GunAPI.isGun(item.id)){
		
		let extra = item.extra || new ItemExtraData();
		let ammon = extra.getInt("ammon", 8);
		GunAPI.client_container.setText("ammons", ammon+"/"+GunAPI.guns[item.id].max)
	}
});

let GunAPI = {
	createShootType(obj){
		obj = obj || {};
		this.getCound = obj.getCound || function(item, player){return 1};
		this.getVector = obj.getVector || function(item, player, i){return {x: 0, y: 0, z: 0}}
	},
	ammons: {},
	isAmmon(){
		return this.ammons[id];
	},
	registerAmmon(id, max){
		max = max || 8;
		this.ammons[id] = true;
		Item.registerNameOverrideFunction(id, function(item, translation){
			let extra = item.extra || new ItemExtraData();
			return translation + "\n" + extra.getInt("ammon", max) +"/"+max;
		});
	},
	guns: {},
	isGun(id){
		return !!this.guns[id];
	},
	client_container: null,
	reload(player){
		let item = Entity.getCarriedItem(player);
		let gun = this.guns[item.id];
		let actor = new PlayerActor(player);
		
		let sound = SoundPool.select(gun.projectTile.sound.noy_ammon)
		.at(player)
		.distance(gun.projectTile.sound.noy_ammon_distance)
		.sync(false);
		sound.play()
		
    Updatable.addUpdatable({
    	ticks: 0,
    	update(){
    		this.ticks++;
    		let gun_item = Entity.getCarriedItem(player);
    		let value = false;
    		for(let i = 0;i < 36;i++){
					let slot = actor.getInventorySlot(i);
					let extra = slot.extra || new ItemExtraData();
					if(slot.id == gun.ammon && extra.getInt("ammon", gun.max) > 0)
						value = true;
				}
    		if(gun_item.id != item.id || !value){
    			sound.stop();
    			this.remove = true;
    			return;
    		}
    		if(this.ticks >= gun.reload_time){
    			this.reload();
    			this.remove = true;
				}
    	},
    	reload(){
				let extra = item.extra || new ItemExtraData();
		
				for(let i = 0;i < 36;i++){
					let slot = actor.getInventorySlot(i);
					slot.extra = slot.extra || new ItemExtraData();
					if(slot.id == gun.ammon && slot.extra.getInt("ammon", gun.max) > 0){
						let ammon = new ItemExtraData();
						ammon.putInt("ammon", extra.getInt("ammon", gun.max));
						actor.addItemToInventory(gun.ammon, 1, 0, ammon, true)
						extra.putInt("ammon", slot.extra.getInt("ammon", gun.max));
						actor.setInventorySlot(i, slot.id, slot.count-1, slot.data, slot.extra);
						break;
					}
				}
		
				Entity.setCarriedItem(player, item.id, item.count, item.data, extra);
    	}
    });
	},
	register(obj){
		obj.time = obj.time || 20;
		obj.ShootType = obj.ShootType || ShootType.DEFAULT;
		obj.projectTile.time = obj.projectTile.time || 200;
		obj.projectTile.speed = obj.projectTile.speed || .1;
		obj.projectTile.sound = obj.projectTile.sound || {};
		obj.max = obj.max || 8;
		obj.reload_time = obj.reload_time || 10;
		obj.pos = obj.pos || {};
		
		this.guns[obj.item] = obj;
		
		Item.setMaxUseDuration(obj.item, obj.time);
		Item.setUseAnimation(obj.item, 3);
		Item.setToolRender(obj.item, true);
		Particles.getParticleTypeById(obj.projectTile.particle)
			.setLifetime(obj.projectTile.time, obj.projectTile.time);
		
		/*let model = ItemModel.getForWithFallback(obj.item, 0)
			//.setModel(obj.model.getBlockRender());
		//let mesh = model.getItemRenderMesh(1, false);
		let mesh = obj.model.getRenderMesh();
		mesh.rotate(obj.pos.rotX||0, obj.pos.rotY||0, obj.pos.rotZ||0);
		mesh.translate(obj.pos.x||0, obj.pos.y||0, obj.pos.z||0);
		model.setHandModel(mesh, model.getWorldTextureName());*/
		
		Callback.addCallback("ItemUsingComplete", function(item, player){
			if(item.id != obj.item)
				return;
			let extra = item.extra || new ItemExtraData();
			let ammon = extra.getInt("ammon", 8);
			if(ammon <= 0){
				if(obj.projectTile.sound.reload)
					SoundPool.select(obj.projectTile.sound.reload)
						.at(player)
						.distance(obj.projectTile.sound.reload_distance)
						.sync(false)
						.play();
				return;
			}
			extra.putInt("ammon", ammon-1);
			Entity.setCarriedItem(player, item.id, item.count, item.data, extra);
			
			let pos = Entity.getPosition(player);
			pos.dimension = Entity.getDimension(player);
			let vector = Entity.getLookVectorByAngle(Entity.getLookAngle(player));
			let count = obj.ShootType.getCound(item, player);
			if(obj.projectTile.sound.shot)
				SoundPool.select(obj.projectTile.sound.shot)
					.at(player)
					.distance(obj.projectTile.sound.distance)
					.sync(false)
					.play();
			for(let i = 0;i < count;i++){
				let add = obj.ShootType.getVector(item, player, i);
				obj.projectTile.type.spawn(obj.projectTile.particle, pos.x, pos.y, pos.z, vector.x*obj.projectTile.speed+add.x, vector.y*obj.projectTile.speed+add.y, vector.z*obj.projectTile.speed+add.z, player, BlockSource.getDefaultForActor(player), obj.projectTile.time);
			}
		});
	}
};

let ShootType = {
	DEFAULT: new GunAPI.createShootType(),
	SHOOT: new GunAPI.createShootType({
		getCound(item, player){
			return Math.floor(Math.random() * 10) + 5;
		},
		getVector(item, player, index){
			return {
				x: (Math.random() - Math.random()) / 40,
				y: (Math.random() - Math.random()) / 40,
				z: (Math.random() - Math.random()) / 40
			};
		}
	})
};




// file: item/deserteagle.js

IDRegistry.genItemID("deserteagle"); 
Item.createItem("deserteagle", "deserteagle", {name: "deserteagle", meta: 0}, {stack: 1});

IDRegistry.genItemID("ammohandgun"); 
Item.createItem("ammohandgun", "ammohand gun", {name: "ammohandgun", meta: 0}, {stack: 64});

Recipes.addShaped({id: ItemID.ammohandgun, count: 1, data: 0}, [
	"a",
	"b",
	""
], ["a", VanillaItemID.iron_ingot, 0, "b", 289, 0]);

Recipes.addShaped({id: ItemID.deserteagle, count: 1, data: 0}, [
	"   ",
	"aar",
	"  c"
], ["a", VanillaItemID.iron_ingot, 0, "b", 289, 0, "c", ItemID.ammohandgun, 0, "r", VanillaItemID.redstone, 0]);

let bullet = Particles.registerParticleType({
	texture: "gun_bullet",
	render: 2,
	size: [2, 2],
	animators: {
		size: {fadeOut: .5, fadeln:.2, start: 0, end: 1}
	}
});

SoundPool.registerSound("empty", {
	source: FOLDER_SOUNDS + "EmptyGun.mp3",
	type: SoundAPI.Type.SOUND,
	defaultVolume: .5,
	muteInSolidBlock: false
});

SoundPool.registerSound("shot", {
	source: FOLDER_SOUNDS + "DesertEagleShoot.ogg",
	type: SoundAPI.Type.SOUND,
	defaultVolume: .5,
	muteInSolidBlock: false
});

SoundPool.registerSound("reload", {
	source: FOLDER_SOUNDS + "reload/ThompsonReload.ogg",
	type: SoundAPI.Type.SOUND,
	defaultVolume: .5,
	muteInSolidBlock: false
});

GunAPI.registerAmmon(ItemID.ammohandgun, 8);

GunAPI.register({
	item: ItemID.deserteagle,
	ammon: ItemID.ammohandgun,
	
	max: 8,
	time: 20,
	reload_time: 40,
	
	/*pos: {
		rotY: 60 * Math.PI / 180,
		y: 1,
		z: 0,
		x: .5
	},*/
	projectTile: {
		type: BulletDefault,
		particle: bullet,
		time: 50,
		speed: 0.5, 
		sound: {
			distance: 40,
			shot: "shot",
			reload_distance: 5,
			reload: "empty",
			noy_ammon_distance: 3,
			noy_ammon: "reload"
		}
	}
});




