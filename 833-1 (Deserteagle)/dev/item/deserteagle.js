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