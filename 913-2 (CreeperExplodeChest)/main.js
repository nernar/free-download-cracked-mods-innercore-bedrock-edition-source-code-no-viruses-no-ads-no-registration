const Setting = {
	enabled: true,
	search_mod_chest: true,
	
	radius: 6,
	skipped_tick: 20,
	
	explode: {
		power: 5,
		fire: true
	},
	
	animation: {
		enabled: true,
		
		time: 120,
		value: 2000
	}
};
__config__.checkAndRestore(Setting);

function explodeCreeper(){}

function explodeCreeperNotAnimation(ent){
	let region = BlockSource.getDefaultForActor(ent);
	let pos = Entity.getPosition(ent);

	let explode = Setting.explode;
	region.explode(pos.x, pos.y, pos.z, explode.power, explode.fire);
	Entity.setHealth(ent, 0);
}

let cache = {};
function explodeCreeperAndAnimation(ent){
	if(cache[ent]) return;
	let region = BlockSource.getDefaultForActor(ent);
	Entity.setMobile(ent, false);
	
	let animation = Setting.animation;
	let explode = Setting.explode;
	
	cache[ent] = true;
	creeper_animation(ent, animation.time, animation.value, function(){
		delete cache[ent];
		if(!Entity.isExist(ent))
			return;
		
		let pos = Entity.getPosition(ent);
		region.explode(pos.x, pos.y, pos.z, explode.power, explode.fire);
		Entity.setHealth(ent, 0);
	});
}

function updateSetting(cfg){
	if(cfg){
		Setting.enabled = cfg.enabled;
		Setting.radius = cfg.radius;
		Setting.skipped_tick = cfg.skipped_tick;
		
		Setting.explode.power = cfg.power;
		Setting.explode.fire = cfg.fire;
		
		Setting.animation.enabled = cfg.animation;
		Setting.animation.time = cfg.time;
		Setting.animation.value = cfg.value;
	}else{
		Setting.enabled = true;
		
		Setting.radius = __config__.getInteger("radius");
		Setting.skipped_tick = __config__.getInteger("skipped_tick");
		
		Setting.explode.power = __config__.getInteger("explode.power");
		Setting.explode.fire = __config__.getBool("explode.fire");
		
		Setting.animation.enabled = __config__.getBool("animation.enabled");
		Setting.animation.time = __config__.getInteger("animation.time");
		Setting.animation.value = __config__.getInteger("animation.value");
	}
	
	if(Setting.animation.enabled)
		explodeCreeper = explodeCreeperAndAnimation;
	else
		explodeCreeper = explodeCreeperNotAnimation;
	
	if(!Setting.enabled)
		explodeCreeper = function(){};
}

updateSetting();

ModAPI.addAPICallback("RuntimeSetting", function(api){
	with(api){
		let config = new ConfigStorage(__dir__+"cfg.json")
			.put("enabled", true)
			.put("radius", 6)
			.put("skipped_tick", 20)
			
			.put("power", 5)
			.put("fire", true)
			
			.put("animation", true)
			.put("time", 120)
			.put("value", 2000);
		
		let builder = new BuilderConfig(config)
			.addCheckBox("Mod enabled", "enabled")
			.addSlider("Radius", "radius", 2, 15, 1)
			.addSlider("Skipped tick", "skipped_tick", 1, 40, 1)
			
			.addSectionDivider("Explode")
			.addSlider("Power", "power", 1, 15, 1)
			.addCheckBox("Fire", "fire")
			
			.addSectionDivider("Animation")
			.addCheckBox("Enabled", "animation")
			.addSlider("Time", "time", 40, 200, 5)
			.addSlider("Value", "value", 100, 3000, 100);
		
		updateSetting(config.build());
		
		new Setting(__dir__)
			.setChangeSetting(updateSetting)
			.setBuilderConfig(builder);
	}
});

let cache_move = {};
function move(ent, coords){
	let update = cache_move[ent];
	if(cache_move[ent]) 
		return update;
	
	update = {
		update(){
			if(!Entity.isExist(ent)){
				this.remove = true;
				return;
			}
			Entity.moveToTarget(ent, coords, {});
			Entity.lookAtCoords(ent, coords);
		}
	};
	
	cache_move[ent] = update;
	Updatable.addUpdatable(update);
	return update
}

let chests = [VanillaBlockID.chest, VanillaBlockID.trapped_chest, VanillaBlockID.barrel];

Callback.addCallback("CreeperTick", function(ctr, creeper){
	if(World.getThreadTime() % Setting.skipped_tick == 0){
		let ent = NativeAPI.getActorID(creeper);
		let pos = Entity.getPosition(ent);
		let radius = Setting.radius;
		
		pos.x = Math.floor(pos.x);
		pos.y = Math.floor(pos.y);
		pos.z = Math.floor(pos.z);
		
		let region = BlockSource.getDefaultForActor(ent);
		if(!region) return;
		
		for(let x = pos.x - radius;x < pos.x + radius;x++)
			for(let y = pos.y - radius;y < pos.y + radius;y++)
				for(let z = pos.z - radius;z < pos.z + radius;z++){
					let id = region.getBlockId(x,y,z);
					if(chests.indexOf(id) != -1){
						let coords = {x:x,y:y,z:z};
						move(ent, coords);
						
						if(Entity.getDistanceBetweenCoords(pos, coords) < 1.5)
							explodeCreeper(ent);
						return;
					}
				}
	}
});

Callback.addCallback("PostLoaded", function(){
	if(__config__.getBool("search_mod_chest")){
		Logger.Log("Search chest for mods", "CreeperExplodeChest");
		for(let key in BlockID)
			if(key.toLowerCase().includes("chest")){
				Logger.Log("Added chest "+key+" "+BlockID[key], "CreeperExplodeChest");
				chests.push(BlockID[key]);
			}
	}else
		Logger.Log("Search chest for mods disabled", "CreeperExplodeChest");
}, -1);

ModAPI.registerAPI("CreeperExplodeChest", {
	addChest(id){
		if(chests.indexOf(id) == -1)
			chests.push(id);
	},
	requireGlobal(cmd){
		return eval(cmd);
	}
});