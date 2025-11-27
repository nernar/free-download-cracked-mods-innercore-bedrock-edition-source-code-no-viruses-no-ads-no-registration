LIBRARY({
	name: "EntityTypeUtil",
	version: 1,
	shared: false,
	api: "CoreEngine"
});


Native.EntityType.STRAY = 46;
Native.EntityType.HUSK = 47;
Native.EntityType.WITHER_SKELETON = 48;
Native.EntityType.WITHER = 52;
Native.EntityType.ENDER_DRAGON = 53;
Native.EntityType.ENDERMITE = 55;

Entity.abiosis = {};
Entity.arthropod = {};
Entity.undead = {};
Entity.headMeta = [
	Native.EntityType.SKELETON,
	Native.EntityType.WITHER_SKELETON,
	Native.EntityType.ZOMBIE,
	Native.EntityType.PLAYER,
	Native.EntityType.CREEPER,
	Native.EntityType.ENDER_DRAGON
];

let abiosis = [
	"ARROW",
	"BOAT",
	"EGG",
	"EXPERIENCE_ORB",
	"EXPERIENCE_POTION",
	"FALLING_BLOCK",
	"FIREBALL",
	"FISHING_HOOK",
	"ITEM",
	"LIGHTNING_BOLT",
	"MINECART",
	"PAINTING",
	"PLAYER",
	"PRIMED_TNT",
	"SMALL_FIREBALL",
	"SNOWBALL",
	"THROWN_POTION"
];

let arthropod = [
	"SPIDER",
	"CAVE_SPIDER",
	"SILVERFISH",
	"ENDERMITE"
];

let undead = [
	"SKELETON",
	"STRAY",
	"WITHER_SKELETON",
	"WITHER",
	"ZOMBIE",
	"HUSK",
	"PIG_ZOMBIE",
	"ZOMBIE_VILLAGER"
];


let i = 0;

for(i = abiosis.length; i--;){
	Entity.abiosis[Native.EntityType[abiosis[i]]] = true;
}

for(i = arthropod.length; i--;){
	Entity.arthropod[Native.EntityType[arthropod[i]]] = true;
}

for(i = undead.length; i--;){
	Entity.undead[Native.EntityType[undead[i]]] = true;
}


Entity.isAbiosis = function(ent){
	const type = this.getType(ent);
	return this.abiosis[type];
};

Entity.isArthropod = function(ent){
	const type = this.getType(ent);
	return this.arthropod[type];
};

Entity.isUndead = function(ent){
	const type = this.getType(ent);
	return this.undead[type];
};

Entity.getHeadMeta = function(ent){
	const type = this.getType(ent);
	return this.headMeta.indexOf(type);
};