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