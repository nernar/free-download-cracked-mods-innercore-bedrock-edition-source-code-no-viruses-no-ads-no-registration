/*
BUILD INFO:
  dir: dev
  target: main.js
  files: 1
*/

IMPORT("ShootLib", "ShootLib");

var ShotType = ShootLib.ShotType;
var ButtonType = ShootLib.ButtonType;

ShootLib.init({
	crosshairGUI:{
		bitmap:{
			name:-1,
			coords:{
				x:0,
				y:0,
				width:2048,
				height:512
			},
			size:{
				width:4000,
				height:1000
			}
		}
	}
});


ShootLib.addGun({
	id:"pmm",
	name:"PMM",
	ammo:"9mmammo",
	accuracy:6,
	recoil:4,
	rate:5,
	texture:{
		name:"pmm",
		meta:0
	},
	shotType:ShotType.NORMAL,
	buttonType:ButtonType.CLICK,
	bullet:{
		speed:10,
		count:12,
		damage:10
	},
	fov:{
		level:10
	},
	sounds:{
		shot:"USPShoot.ogg",
		empty:"EmptyGun.mp3",
		reload:"reload/LugerReload.ogg"
	}
});

ShootLib.addGun({
	id:"m96",
	name:"M96",
	ammo:"915ammo",
	accuracy:6,
	recoil:4,
	rate:5,
	texture:{
		name:"m96",
		meta:0
	},
	shotType:ShotType.NORMAL,
	buttonType:ButtonType.CLICK,
	bullet:{
		speed:10,
		count:15,
		damage:15
	},
	fov:{
		level:10
	},
	sounds:{
		shot:"USPShoot.ogg",
		empty:"EmptyGun.mp3",
		reload:"reload/LugerReload.ogg"
	}
});

ShootLib.addGun({
	id:"usps",
	name:"USP-S",
	ammo:"915ammo",
	accuracy:6,
	recoil:4,
	rate:5,
	texture:{
		name:"usps",
		meta:0
	},
	shotType:ShotType.NORMAL,
	buttonType:ButtonType.CLICK,
	bullet:{
		speed:10,
		count:12,
		damage:20
	},
	fov:{
		level:10
	},
	sounds:{
		shot:"USPShoot.ogg",
		empty:"EmptyGun.mp3",
		reload:"reload/LugerReload.ogg"
	}
});

ShootLib.addGun({
	id:"g17",
	name:"Glock-17",
	ammo:"91918ammo",
	accuracy:6,
	recoil:4,
	rate:5,
	texture:{
		name:"g17",
		meta:0
	},
	shotType:ShotType.NORMAL,
	buttonType:ButtonType.CLICK,
	bullet:{
		speed:10,
		count:18,
		damage:10
	},
	fov:{
		level:10
	},
	sounds:{
		shot:"USPShoot.ogg",
		empty:"EmptyGun.mp3",
		reload:"reload/LugerReload.ogg"
	}
});

ShootLib.addGun({
	id:"gsh18",
	name:"GSh-18",
	ammo:"91918ammo",
	accuracy:6,
	recoil:4,
	rate:5,
	texture:{
		name:"gsh18",
		meta:0
	},
	shotType:ShotType.NORMAL,
	buttonType:ButtonType.CLICK,
	bullet:{
		speed:10,
		count:18,
		damage:25
	},
	fov:{
		level:10
	},
	sounds:{
		shot:"USPShoot.ogg",
		empty:"EmptyGun.mp3",
		reload:"reload/LugerReload.ogg"
	}
});

ShootLib.addGun({
	id:"pernach",
	name:"Pernach",
	ammo:"91930ammo",
	accuracy:6,
	recoil:4,
	rate:5,
	texture:{
		name:"pernach",
		meta:0
	},
	shotType:ShotType.NORMAL,
	buttonType:ButtonType.TOUCH,
	bullet:{
		speed:10,
		count:30,
		damage:10
	},
	fov:{
		level:10
	},
	sounds:{
		shot:"USPShoot.ogg",
		empty:"EmptyGun.mp3",
		reload:"reload/LugerReload.ogg"
	}
});

ShootLib.addGun({
	id:"savedoff",
	name:"Saved Off",
	ammo:"ammoshotgun",
	accuracy:11,
	recoil:26,
	rate:20/15,
	texture:{
		name:"savedoff",
		meta:0
	},
	shotType:ShotType.SHOTGUN,
	buttonType:ButtonType.CLICK,
	bullet:{
		speed:10,
		count:5,
		damage:10
	},
	fov:{
		level:10
	},
	sounds:{
		shot:"R870Shoot.ogg",
		empty:"EmptyGun.mp3",
		reload:"reload/W1200Reload.ogg"
	},
	shotgun:{
		count:8,
		degreesSpread:3,
	}
});

ShootLib.addGun({
	id:"m2t",
	name:"M 2 Tactical",
	ammo:"ammoshotgun",
	accuracy:11,
	recoil:26,
	rate:20/15,
	texture:{
		name:"m2t",
		meta:0
	},
	shotType:ShotType.SHOTGUN,
	buttonType:ButtonType.CLICK,
	bullet:{
		speed:10,
		count:12,
		damage:5
	},
	fov:{
		level:10
	},
	sounds:{
		shot:"R870Shoot.ogg",
		empty:"EmptyGun.mp3",
		reload:"reload/W1200Reload.ogg"
	},
	shotgun:{
		count:8,
		degreesSpread:3,
	}
});

ShootLib.addGun({
	id:"onebarrel",
	name:"One barrel shotgun",
	ammo:"ammoshotgun",
	accuracy:11,
	recoil:26,
	rate:20/15,
	texture:{
		name:"onebarrel",
		meta:0
	},
	shotType:ShotType.SHOTGUN,
	buttonType:ButtonType.CLICK,
	bullet:{
		speed:10,
		count:1,
		damage:25
	},
	fov:{
		level:10
	},
	sounds:{
		shot:"R870Shoot.ogg",
		empty:"EmptyGun.mp3",
		reload:"reload/W1200Reload.ogg"
	},
	shotgun:{
		count:8,
		degreesSpread:3,
	}
});


ShootLib.addGun({
	id:"aek971",
	name:"AEK-971",
	ammo:"545ammo",
	accuracy:15,
	recoil:1,
	rate:9,
	texture:{
		name:"aek971",
		meta:0
	},
	shotType:ShotType.NORMAL,
	buttonType:ButtonType.TOUCH,
	bullet:{
		speed:5,
		count:30,
		damage:20
	},
	fov:{
		level:10
	},
	sounds:{
		shot:"AK47Shoot.ogg",
		empty:"EmptyGun.mp3",
		reload:"reload/MP44Reload.ogg"
	}
});

ShootLib.addGun({
	id:"ak103",
	name:"AK-103",
	ammo:"ammoassault",
	accuracy:7,
	recoil:2,
	rate:6,
	texture:{
		name:"ak103",
		meta:0
	},
	shotType:ShotType.NORMAL,
	buttonType:ButtonType.TOUCH,
	bullet:{
		speed:10,
		count:30,
		damage:20
	},
	fov:{
		level:10
	},
	sounds:{
		shot:"AK47Shoot.ogg",
		empty:"EmptyGun.mp3",
		reload:"reload/MP44Reload.ogg"
	}
});

ShootLib.addGun({
	id:"ak15",
	name:"AK-15",
	ammo:"ammoassault",
	accuracy:15,
	recoil:1,
	rate:9,
	texture:{
		name:"ak15",
		meta:0
	},
	shotType:ShotType.NORMAL,
	buttonType:ButtonType.TOUCH,
	bullet:{
		speed:10,
		count:30,
		damage:30
	},
	fov:{
		level:10
	},
	sounds:{
		shot:"AK47Shoot.ogg",
		empty:"EmptyGun.mp3",
		reload:"reload/MP44Reload.ogg"
	}
});

ShootLib.addGun({
	id:"ak74n",
	name:"AK-74N",
	ammo:"545ammo",
	accuracy:7,
	recoil:2,
	rate:6,
	texture:{
		name:"ak74n",
		meta:0
	},
	shotType:ShotType.NORMAL,
	buttonType:ButtonType.TOUCH,
	bullet:{
		speed:10,
		count:30,
		damage:20
	},
	fov:{
		level:10
	},
	sounds:{
		shot:"AK47Shoot.ogg",
		empty:"EmptyGun.mp3",
		reload:"reload/MP44Reload.ogg"
	}
});

ShootLib.addGun({
	id:"akmn",
	name:"AKMN",
	ammo:"ammoassault",
	accuracy:7,
	recoil:3,
	rate:6,
	texture:{
		name:"akmn",
		meta:0
	},
	shotType:ShotType.NORMAL,
	buttonType:ButtonType.TOUCH,
	bullet:{
		speed:10,
		count:30,
		damage:25
	},
	fov:{
		level:10
	},
	sounds:{
		shot:"AK47Shoot.ogg",
		empty:"EmptyGun.mp3",
		reload:"reload/MP44Reload.ogg"
	}
});

ShootLib.addGun({
	id:"ak308",
	name:"AK 308",
	ammo:"ammoassault",
	accuracy:10,
	recoil:3,
	rate:6,
	texture:{
		name:"ak308",
		meta:0
	},
	shotType:ShotType.NORMAL,
	buttonType:ButtonType.TOUCH,
	bullet:{
		speed:10,
		count:30,
		damage:35
	},
	fov:{
		level:10
	},
	sounds:{
		shot:"AK47Shoot.ogg",
		empty:"EmptyGun.mp3",
		reload:"reload/MP44Reload.ogg"
	}
});

ShootLib.addGun({
	id:"aks74u",
	name:"AKS 74 U",
	ammo:"545ammo",
	accuracy:7,
	recoil:3,
	rate:6,
	texture:{
		name:"aks74u",
		meta:0
	},
	shotType:ShotType.NORMAL,
	buttonType:ButtonType.TOUCH,
	bullet:{
		speed:10,
		count:30,
		damage:20
	},
	fov:{
		level:10
	},
	sounds:{
		shot:"AK47Shoot.ogg",
		empty:"EmptyGun.mp3",
		reload:"reload/MP44Reload.ogg"
	}
});

ShootLib.addGun({
	id:"tishina",
	name:"Tishina",
	ammo:"545ammo",
	accuracy:7,
	recoil:3,
	rate:6,
	texture:{
		name:"tishina",
		meta:0
	},
	shotType:ShotType.NORMAL,
	buttonType:ButtonType.TOUCH,
	bullet:{
		speed:10,
		count:30,
		damage:25
	},
	fov:{
		level:10
	},
	sounds:{
		shot:"AK47Shoot.ogg",
		empty:"EmptyGun.mp3",
		reload:"reload/MP44Reload.ogg"
	}
});

ShootLib.addGun({
	id:"asval",
	name:"AS VAL",
	ammo:"939ammo",
	accuracy:7,
	recoil:3,
	rate:6,
	texture:{
		name:"asval",
		meta:0
	},
	shotType:ShotType.NORMAL,
	buttonType:ButtonType.TOUCH,
	bullet:{
		speed:10,
		count:20,
		damage:45
	},
	fov:{
		level:10
	},
	sounds:{
		shot:"AK47Shoot.ogg",
		empty:"EmptyGun.mp3",
		reload:"reload/MP44Reload.ogg"
	}
});

ShootLib.addGun({
	id:"an94",
	name:"AN 94 Abakan",
	ammo:"545ammo",
	accuracy:20,
	recoil:3,
	rate:6,
	texture:{
		name:"an94",
		meta:0
	},
	shotType:ShotType.NORMAL,
	buttonType:ButtonType.TOUCH,
	bullet:{
		speed:10,
		count:30,
		damage:32
	},
	fov:{
		level:10
	},
	sounds:{
		shot:"AK47Shoot.ogg",
		empty:"EmptyGun.mp3",
		reload:"reload/MP44Reload.ogg"
	}
});

ShootLib.addGun({
	id:"g28",
	name:"G-28",
	ammo:"ammoassault",
	accuracy:15,
	recoil:2,
	rate:3,
	texture:{
		name:"g28",
		meta:0
	},
	shotType:ShotType.NORMAL,
	buttonType:ButtonType.TOUCH,
	bullet:{
		speed:10,
		count:30,
		damage:50
	},
	fov:{
		level:15
	},
	sounds:{
		shot:"AK47Shoot.ogg",
		empty:"EmptyGun.mp3",
		reload:"reload/MP44Reload.ogg"
	}
});

ShootLib.addGun({
	id:"groza",
	name:"OC 14 Groza",
	ammo:"939ammo30",
	accuracy:8,
	recoil:1,
	rate:8,
	texture:{
		name:"groza",
		meta:0
	},
	shotType:ShotType.NORMAL,
	buttonType:ButtonType.TOUCH,
	bullet:{
		speed:10,
		count:30,
		damage:35
	},
	fov:{
		level:10
	},
	sounds:{
		shot:"AK47Shoot.ogg",
		empty:"EmptyGun.mp3",
		reload:"reload/MP44Reload.ogg"
	}
});

 ShootLib.addGun({
	id:"rpk17",
	name:"RPK-17",
	ammo:"bammo",
	accuracy:13,
	recoil:2,
	rate:9,
	texture:{
		name:"rpk17",
		meta:0
	},
	shotType:ShotType.NORMAL,
	buttonType:ButtonType.TOUCH,
	bullet:{
		speed:10,
		count:75,
		damage:30
	},
	fov:{
		level:10
	},
	sounds:{
		shot:"AK47Shoot.ogg",
		empty:"EmptyGun.mp3",
		reload:"reload/MP44Reload.ogg"
	}
});

ShootLib.addGun({
	id:"grom",
	name:"OC 14 Grom",
	ammo:"545ammo",
	accuracy:10,
	recoil:4,
	rate:6,
	texture:{
		name:"grom",
		meta:0
	},
	shotType:ShotType.NORMAL,
	buttonType:ButtonType.TOUCH,
	bullet:{
		speed:10,
		count:30,
		damage:25
	},
	fov:{
		level:10
	},
	sounds:{
		shot:"AK47Shoot.ogg",
		empty:"EmptyGun.mp3",
		reload:"reload/MP44Reload.ogg"
	}
});

ShootLib.addGun({
	id:"oc12",
	name:"OC 12 Tis",
	ammo:"939ammo",
	accuracy:10,
	recoil:4,
	rate:6,
	texture:{
		name:"oc12",
		meta:0
	},
	shotType:ShotType.NORMAL,
	buttonType:ButtonType.TOUCH,
	bullet:{
		speed:10,
		count:20,
		damage:40
	},
	fov:{
		level:10
	},
	sounds:{
		shot:"AK47Shoot.ogg",
		empty:"EmptyGun.mp3",
		reload:"reload/MP44Reload.ogg"
	}
});

ShootLib.addGun({
	id:"xm1012",
	name:"XM-1012",
	ammo:"556ammo",
	accuracy:8,
	recoil:3,
	rate:6,
	texture:{
		name:"xm1012",
		meta:0
	},
	shotType:ShotType.NORMAL,
	buttonType:ButtonType.TOUCH,
	bullet:{
		speed:10,
		count:30,
		damage:25
	},
	fov:{
		level:10
	},
	sounds:{
		shot:"AK47Shoot.ogg",
		empty:"EmptyGun.mp3",
		reload:"reload/MP44Reload.ogg"
	}
});

ShootLib.addGun({
	id:"ar15a3",
	name:"AR 15 A3",
	ammo:"556ammo",
	accuracy:8,
	recoil:3,
	rate:6,
	texture:{
		name:"ar15a3",
		meta:0
	},
	shotType:ShotType.NORMAL,
	buttonType:ButtonType.TOUCH,
	bullet:{
		speed:10,
		count:20,
		damage:31
	},
	fov:{
		level:10
	},
	sounds:{
		shot:"AK47Shoot.ogg",
		empty:"EmptyGun.mp3",
		reload:"reload/MP44Reload.ogg"
	}
});

ShootLib.addGun({
	id:"hka2",
	name:"H&K A2",
	ammo:"556ammo",
	accuracy:9,
	recoil:2,
	rate:6,
	texture:{
		name:"hka2",
		meta:0
	},
	shotType:ShotType.NORMAL,
	buttonType:ButtonType.TOUCH,
	bullet:{
		speed:10,
		count:30,
		damage:25
	},
	fov:{
		level:10
	},
	sounds:{
		shot:"AK47Shoot.ogg",
		empty:"EmptyGun.mp3",
		reload:"reload/MP44Reload.ogg"
	}
});

ShootLib.addGun({
	id:"c7a2",
	name:"SSG C7A2",
	ammo:"556ammo",
	accuracy:8,
	recoil:3,
	rate:6,
	texture:{
		name:"c7a2",
		meta:0
	},
	shotType:ShotType.NORMAL,
	buttonType:ButtonType.TOUCH,
	bullet:{
		speed:10,
		count:30,
		damage:25
	},
	fov:{
		level:20
	},
	sounds:{
		shot:"AK47Shoot.ogg",
		empty:"EmptyGun.mp3",
		reload:"reload/MP44Reload.ogg"
	}
});

ShootLib.addGun({
	id:"ssg552",
	name:"SSG 552",
	ammo:"556ammo",
	accuracy:8,
	recoil:5,
	rate:6,
	texture:{
		name:"ssg552",
		meta:0
	},
	shotType:ShotType.NORMAL,
	buttonType:ButtonType.TOUCH,
	bullet:{
		speed:10,
		count:30,
		damage:25
	},
	fov:{
		level:25
	},
	sounds:{
		shot:"AK47Shoot.ogg",
		empty:"EmptyGun.mp3",
		reload:"reload/MP44Reload.ogg"
	}
});

ShootLib.addGun({
	id:"g24p",
	name:"G 24P",
	ammo:"556ammo",
	accuracy:10,
	recoil:3,
	rate:6,
	texture:{
		name:"g24p",
		meta:0
	},
	shotType:ShotType.NORMAL,
	buttonType:ButtonType.TOUCH,
	bullet:{
		speed:10,
		count:30,
		damage:27
	},
	fov:{
		level:25
	},
	sounds:{
		shot:"AK47Shoot.ogg",
		empty:"EmptyGun.mp3",
		reload:"reload/MP44Reload.ogg"
	}
});

ShootLib.addGun({
	id:"g36",
	name:"G-36",
	ammo:"556ammo",
	accuracy:8,
	recoil:3,
	rate:6,
	texture:{
		name:"g36",
		meta:0
	},
	shotType:ShotType.NORMAL,
	buttonType:ButtonType.TOUCH,
	bullet:{
		speed:10,
		count:30,
		damage:25
	},
	fov:{
		level:10
	},
	sounds:{
		shot:"AK47Shoot.ogg",
		empty:"EmptyGun.mp3",
		reload:"reload/MP44Reload.ogg"
	}
});

ShootLib.addGun({
	id:"g36a",
	name:"G-36A",
	ammo:"556ammo",
	accuracy:8,
	recoil:3,
	rate:6,
	texture:{
		name:"g36a",
		meta:0
	},
	shotType:ShotType.NORMAL,
	buttonType:ButtonType.TOUCH,
	bullet:{
		speed:10,
		count:30,
		damage:25
	},
	fov:{
		level:10
	},
	sounds:{
		shot:"AK47Shoot.ogg",
		empty:"EmptyGun.mp3",
		reload:"reload/MP44Reload.ogg"
	}
});

ShootLib.addGun({
	id:"g36c",
	name:"G-36C",
	ammo:"556ammo",
	accuracy:8,
	recoil:3,
	rate:6,
	texture:{
		name:"g36c",
		meta:0
	},
	shotType:ShotType.NORMAL,
	buttonType:ButtonType.TOUCH,
	bullet:{
		speed:10,
		count:30,
		damage:25
	},
	fov:{
		level:10
	},
	sounds:{
		shot:"AK47Shoot.ogg",
		empty:"EmptyGun.mp3",
		reload:"reload/MP44Reload.ogg"
	}
});

ShootLib.addGun({
	id:"scarc",
	name:"FN Scar C",
	ammo:"556ammo",
	accuracy:15,
	recoil:3,
	rate:6,
	texture:{
		name:"scarc",
		meta:0
	},
	shotType:ShotType.NORMAL,
	buttonType:ButtonType.TOUCH,
	bullet:{
		speed:15,
		count:30,
		damage:25
	},
	fov:{
		level:10
	},
	sounds:{
		shot:"AK47Shoot.ogg",
		empty:"EmptyGun.mp3",
		reload:"reload/MP44Reload.ogg"
	}
});

ShootLib.addGun({
	id:"scarh",
	name:"FN Scar H",
	ammo:"ammoassault",
	accuracy:15,
	recoil:3,
	rate:6,
	texture:{
		name:"scarh",
		meta:0
	},
	shotType:ShotType.NORMAL,
	buttonType:ButtonType.TOUCH,
	bullet:{
		speed:10,
		count:30,
		damage:30
	},
	fov:{
		level:10
	},
	sounds:{
		shot:"AK47Shoot.ogg",
		empty:"EmptyGun.mp3",
		reload:"reload/MP44Reload.ogg"
	}
});

ShootLib.addGun({
	id:"uzi",
	name:"UZI",
	ammo:"91930ammo",
	accuracy:5,
	recoil:3,
	rate:6,
	texture:{
		name:"uzi",
		meta:0
	},
	shotType:ShotType.NORMAL,
	buttonType:ButtonType.TOUCH,
	bullet:{
		speed:10,
		count:30,
		damage:10
	},
	fov:{
		level:10
	},
	sounds:{
		shot:"MiniUziShoot.ogg",
		empty:"EmptyGun.mp3",
		reload:"reload/MP44Reload.ogg"
	}
});

ShootLib.addGun({
	id:"kedr",
	name:"PP Kedr",
	ammo:"91930ammo",
	accuracy:6,
	recoil:2,
	rate:6,
	texture:{
		name:"kedr",
		meta:0
	},
	shotType:ShotType.NORMAL,
	buttonType:ButtonType.TOUCH,
	bullet:{
		speed:10,
		count:30,
		damage:10
	},
	fov:{
		level:10
	},
	sounds:{
		shot:"MiniUziShoot.ogg",
		empty:"EmptyGun.mp3",
		reload:"reload/MP44Reload.ogg"
	}
});

ShootLib.addGun({
	id:"kiparis",
	name:"PP Kiparis",
	ammo:"9mm20ammo",
	accuracy:6,
	recoil:2,
	rate:6,
	texture:{
		name:"kiparis",
		meta:0
	},
	shotType:ShotType.NORMAL,
	buttonType:ButtonType.TOUCH,
	bullet:{
		speed:10,
		count:20,
		damage:15
	},
	fov:{
		level:10
	},
	sounds:{
		shot:"MiniUziShoot.ogg",
		empty:"EmptyGun.mp3",
		reload:"reload/MP44Reload.ogg"
	}
});

ShootLib.addGun({
	id:"pp19",
	name:"PP 19 Bizon",
	ammo:"bizammo",
	accuracy:6,
	recoil:4,
	rate:6,
	texture:{
		name:"pp19",
		meta:0
	},
	shotType:ShotType.NORMAL,
	buttonType:ButtonType.TOUCH,
	bullet:{
		speed:10,
		count:64,
		damage:15
	},
	fov:{
		level:10
	},
	sounds:{
		shot:"DesertEagleShoot.ogg",
		empty:"EmptyGun.mp3",
		reload:"reload/MP44Reload.ogg"
	}
});

ShootLib.addGun({
	id:"pp1901",
	name:"PP 19_01 Vitaz",
	ammo:"91930ammo",
	accuracy:6,
	recoil:4,
	rate:6,
	texture:{
		name:"pp1901",
		meta:0
	},
	shotType:ShotType.NORMAL,
	buttonType:ButtonType.TOUCH,
	bullet:{
		speed:10,
		count:30,
		damage:17
	},
	fov:{
		level:10
	},
	sounds:{
		shot:"MiniUziShoot.ogg",
		empty:"EmptyGun.mp3",
		reload:"reload/MP44Reload.ogg"
	}
});

ShootLib.addGun({
	id:"pp1901sn",
	name:"PP 19_01 Vitaz SN",
	ammo:"91930ammo",
	accuracy:6,
	recoil:4,
	rate:6,
	texture:{
		name:"pp1901sn",
		meta:0
	},
	shotType:ShotType.NORMAL,
	buttonType:ButtonType.TOUCH,
	bullet:{
		speed:10,
		count:30,
		damage:18
	},
	fov:{
		level:10
	},
	sounds:{
		shot:"MiniUziShoot.ogg",
		empty:"EmptyGun.mp3",
		reload:"reload/MP44Reload.ogg"
	}
});

ShootLib.addGun({
	id:"sscout",
	name:"Steyr Scout",
	ammo:"ammosniper",
	accuracy:2,
	recoil:10,
	rate:1,
	texture:{
		name:"scout",
		meta:0
	},
	shotType:ShotType.NORMAL,
	buttonType:ButtonType.CLICK,
	bullet:{
		speed:10,
		count:10,
		damage:ShootLib.MAX_DAMAGE
	},
	fov:{
		level:40,
		link:"crosshair/s1"
	},
	sounds:{
		shot:"BarrettShoot.ogg",
		empty:"EmptyGun.mp3",
		reload:"reload/BARReload.ogg"
	}
});

ShootLib.addGun({
	id:"vss",
	name:"VSS VINTOREZ",
	ammo:"ammosniper",
	accuracy:2,
	recoil:2,
	rate:5,
	texture:{
		name:"vss",
		meta:0
	},
	shotType:ShotType.NORMAL,
	buttonType:ButtonType.TOUCH,
	bullet:{
		speed:10,
		count:10,
		damage:ShootLib.MAX_DAMAGE
	},
	fov:{
		level:40,
		link:"crosshair/dragunov"
	},
	sounds:{
		shot:"BarrettShoot.ogg",
		empty:"EmptyGun.mp3",
		reload:"reload/BARReload.ogg"
	}
});

ShootLib.addAmmos([{
	id:"ammohandgun",
	name:"Handgun Ammo",
	texture:{
		name:"ammohandgun",
		meta:0
	}
},{
	id:"ammoshotgun",
	name:"Shotgun Ammo",
	texture:{
		name:"ammoshotgun",
		meta:0
	}
},{
	id:"ammoassault",
	name:"7.62x39 Ammo",
	texture:{
		name:"ammoassault",
		meta:0
	}
},{
	id:"545ammo",
	name:"5.45x39 Ammo",
	texture:{
		name:"545ammo",
		meta:0
	}
},{
	id:"bammo",
	name:"Baraban of ammo",
	texture:{
		name:"bammo",
		meta:0
	}
},{
	id:"556ammo",
	name:"5.56x54 ammo",
	texture:{
		name:"556ammo",
		meta:0
	}
},{
	id:"91930ammo",
	name:"9-30 ammo",
	texture:{
		name:"919x30ammo",
		meta:0
	}
},{
	id:"91918ammo",
	name:"9-18 ammo",
	texture:{
		name:"919x18ammo",
		meta:0
	}
},{
	id:"915ammo",
	name:"9-15 ammo",
	texture:{
		name:"915ammo",
		meta:0
	}
},{
	id:"9mmammo",
	name:"9-12 ammo",
	texture:{
		name:"9mmammo",
		meta:0
	}
},{
	id:"9mm20ammo",
	name:"9-20 ammo",
	texture:{
		name:"9mm20ammo",
		meta:0
	}
},{
	id:"bizammo",
	name:"9-64 ammo",
	texture:{
		name:"bizammo",
		meta:0
	}
},{
	id:"939ammo",
	name:"9*39 20 ammo",
	texture:{
		name:"939ammo",
		meta:0
	}
},{
	id:"939ammo30",
	name:"9*39 30 ammo",
	texture:{
		name:"939ammo",
		meta:0
	}
},{
	id:"ammosniper",
	name:"Sniper Rifle Ammo",
	texture:{
		name:"ammosniper",
		meta:0
	}
},]);

// ID предметов

IDRegistry.genItemID("vhelmet");//создаем новый ID для шлема
IDRegistry.genItemID("vchestplate");//создаем новый ID для нагрудника
IDRegistry.genItemID("vleggings");//создаем новый ID для понож
IDRegistry.genItemID("vboots");//создаем новый ID для ботинок
IDRegistry.genItemID("spetsnazhelmet");//создаем новый ID для шлема
IDRegistry.genItemID("spetsnazchestplate");//создаем новый ID для нагрудника
IDRegistry.genItemID("spetsnazleggings");//создаем новый ID для понож
IDRegistry.genItemID("spetsnazboots");//создаем новый ID для ботинок

IDRegistry.genItemID("s545b");
IDRegistry.genItemID("s762b");
IDRegistry.genItemID("556b");
IDRegistry.genItemID("akbase");
IDRegistry.genItemID("akbase100");
IDRegistry.genItemID("akbaset");
IDRegistry.genItemID("cakbase");
IDRegistry.genItemID("ccak");
IDRegistry.genItemID("vpak");
IDRegistry.genItemID("gtak");
IDRegistry.genItemID("gtak100");
IDRegistry.genItemID("gtakt");
IDRegistry.genItemID("zak");
IDRegistry.genItemID("zrak");
IDRegistry.genItemID("zrak2");
IDRegistry.genItemID("rak");
IDRegistry.genItemID("rak100");
IDRegistry.genItemID("rakt");
IDRegistry.genItemID("pak");
IDRegistry.genItemID("pak100");
IDRegistry.genItemID("pakt");
IDRegistry.genItemID("psn2");
IDRegistry.genItemID("lh");

IDRegistry.genItemID("steel");
IDRegistry.genItemID("gsteel");
IDRegistry.genItemID("ccoal");
IDRegistry.genItemID("case7");



//Перевод
Translation.addTranslation("Case Core", {ru: "Основа кейса"});
Translation.addTranslation("Barrel 5.45", {ru: "Ствол 5.45"});
Translation.addTranslation("Barrel 7.62", {ru: "Ствол 7.62"});
Translation.addTranslation("Barrel 5.56", {ru: "Ствол 5.56"});
Translation.addTranslation("Base AK", {ru: "База АК"});
Translation.addTranslation("Base AK 100", {ru: "База АК 100"});
Translation.addTranslation("Tactical Base AK", {ru: "Тактическая база АК"});
Translation.addTranslation("Receiver AK", {ru: "База ствольной коробки АК"});
Translation.addTranslation("The cover of the receiver AK", {ru: "Крышка ствольной коробки АК"});
Translation.addTranslation("Return spring AK", {ru: "Возвратная пружина АК"});
Translation.addTranslation("Gas tube AK", {ru: "Газовая трубка АК"});
Translation.addTranslation("Gas tube AK 100", {ru: "Газовая трубка АК 100"});
Translation.addTranslation("Tactical gas tube AK", {ru: "Такическая газовая трубка АК"});
Translation.addTranslation("Bolt AK", {ru: "Затвор АК"});
Translation.addTranslation("Bolt carrier AK", {ru: "Затворная рама АК"});
Translation.addTranslation("Bolt carrier with bolt AK", {ru: "Затворная рама с затвором АК"});
Translation.addTranslation("Handle AK", {ru: "Рукоятка АК"});
Translation.addTranslation("Plastic handle AK", {ru: "Пластиковая рукоятка АК"});
Translation.addTranslation("Tactical handle AK", {ru: "Тактическая рукоятка АК"});
Translation.addTranslation("Butt AK", {ru: "Приклад АК"});
Translation.addTranslation("Plastic butt AK", {ru: "Пластиковый приклад АК"});
Translation.addTranslation("Tactical butt AK", {ru: "Тактический приклад АК"});
Translation.addTranslation("PSN-2", {ru: "ПСН-2"});
Translation.addTranslation("LH АК", {ru: "Ласточкин хвост"});
Translation.addTranslation("Steel ingot", {ru: "Слиток стали"});
Translation.addTranslation("Coke", {ru: "Кокс"});
Translation.addTranslation("Spetsnaz helmet", {ru: "Шлем спецназа"});
Translation.addTranslation("Spetsnaz vest", {ru: "Бронежилет спецназа"});
Translation.addTranslation("Spetsnaz pants", {ru: "Штаны спецназа"});
Translation.addTranslation("Spetsnaz boots", {ru: "Керзаки спецназа"});





// Броня

Item.createArmorItem("vhelmet", "Пилотка", {name: "v_helmet"}, {type: "helmet", armor: 2, durability: 149, texture: "armor/v_1.png"});//применяем наш ID helmet, добавляем имя Helmet, задаем текстуру предмета и объект описания.
Item.createArmorItem("vchestplate", "Гимнастёрка", {name: "v_chestplate"}, {type: "chestplate", armor: 6, durability: 216, texture: "armor/v_1.png"});//применяем наш ID chestplate, добавляем имя ChestPlate, задаем текстуру предмета и объект описания.
Item.createArmorItem("vleggings", "Штаны", {name: "v_leggings"}, {type: "leggings", armor: 5, durability: 203, texture: "armor/v_2.png"});//применяем наш ID leggins, добавляем имя Leggins, задаем текстуру предмета и объект описания.
Item.createArmorItem("vboots", "Керзаки", {name: "v_boots"}, {type: "boots", armor: 2, durability: 176, texture: "armor/v_1.png"});//применяем наш ID boots, добавляем имя Boots, задаем текстуру предмета и объект описания.
Item.createArmorItem("spetsnazhelmet", "Spetsnaz helmet", {name: "spetsnaz_helmet"}, {type: "helmet", armor: 2, durability: 1500, texture: "armor/spetsnaz_1.png"});//применяем наш ID helmet, добавляем имя Helmet, задаем текстуру предмета и объект описания.
Item.createArmorItem("spetsnazchestplate", "Spetsnaz vest", {name: "spetsnaz_chestplate"}, {type: "chestplate", armor: 6, durability: 1500, texture: "armor/spetsnaz_1.png"});//применяем наш ID chestplate, добавляем имя ChestPlate, задаем текстуру предмета и объект описания.
Item.createArmorItem("spetsnazleggings", "Spetsnaz pants", {name: "spetsnaz_leggings"}, {type: "leggings", armor: 5, durability: 1500, texture: "armor/spetsnaz_2.png"});//применяем наш ID leggins, добавляем имя Leggins, задаем текстуру предмета и объект описания.
Item.createArmorItem("spetsnazboots", "Spetsnaz boots", {name: "spetsnaz_boots"}, {type: "boots", armor: 2, durability: 1500, texture: "armor/spetsnaz_1.png"});//применяем наш ID boots, добавляем имя Boots, задаем текстуру предмета и объект описания.


// Предметы
Item.createItem("steel","Steel ingot", {name: "ingot_steel", meta:0},{stack:64});
Item.createItem("gsteel","Gun steel ingot", {name: "ingot_gsteel", meta:0},{stack:64});
Item.createItem("ccoal","Coke", {name: "ccoal", meta:0},{stack:64});

Item.createItem("s545b","Barrel 5.45", {name: "545b", meta:0},{stack:64});
Item.createItem("556b","Barrel 5.56", {name: "556b", meta:0},{stack:64});
Item.createItem("s762b","Barrel 7.62", {name: "762b", meta:0},{stack:64});
Item.createItem("akbase","Base AK", {name: "akbase", meta:0},{stack:64});
Item.createItem("akbase100","Base AK 100", {name: "akbase100", meta:0},{stack:64});
Item.createItem("akbaset","Tactical Base AK", {name: "akbaset", meta:0},{stack:64});
Item.createItem("cakbase","Receiver AK", {name: "cakbase", meta:0},{stack:64});
Item.createItem("ccak","The cover of the receiver AK", {name: "ccak", meta:0},{stack:64});
Item.createItem("vpak","Return spring AK", {name: "vpak", meta:0},{stack:64});
Item.createItem("gtak","Gas tube AK", {name: "gtak", meta:0},{stack:64});
Item.createItem("gtak100","Gas tube AK 100", {name: "gtak100", meta:0},{stack:64});
Item.createItem("gtakt","Tactical gas tube AK", {name: "gtakt", meta:0},{stack:64});
Item.createItem("zak","Bolt AK", {name: "zak", meta:0},{stack:64});
Item.createItem("zrak","Bolt carrier AK", {name: "zrak", meta:0},{stack:64});
Item.createItem("zrak2","Bolt carrier with bolt AK", {name: "zrak2", meta:0},{stack:64});
Item.createItem("rak","Handle AK", {name: "rak", meta:0},{stack:64});
Item.createItem("rak100","Plastic handle AK", {name: "rak100", meta:0},{stack:64});
Item.createItem("rakt","Tactical handle AK", {name: "rakt", meta:0},{stack:64});
Item.createItem("pak","Butt AK", {name: "pak", meta:0},{stack:64});
Item.createItem("pak100","Plastic butt AK", {name: "pak100", meta:0},{stack:64});
Item.createItem("pakt","Tactical butt AK", {name: "pakt", meta:0},{stack:64});
Item.createItem("psn2","PSN-2", {name: "psn2", meta:0},{stack:64});
Item.createItem("lh","LH АК", {name: "lh", meta:0},{stack:64});

Item.createItem("case7","Case Core", {name: "case7", meta:0},{stack:64});





// Рецепты
Recipes.addFurnace(263, ItemID.ccoal, 0); // переплавка кости в уголь
// Recipes.addFurnace(336, 405, 0); // переплавка кирпича в кирпич нижнего мира
// Recipes.addFurnace(378, 385, 0); // переплавка сгустка магмы в огненный шар
// Recipes.addFurnace(371, 348, 0); // переплавка золотого самородка в светопыль
// Recipes.addFurnace(24, 121, 0); // переплавка песчанника в камень края 

Recipes.addShaped({id: ItemID.akbase, count: 1, data: 0}, [ 
"*k*", 
"*xv", 
"*ar" 
], ['x', ItemID.zrak2, 0, 'a', ItemID.cakbase, 0, 'k', ItemID.ccak, 0, 'v', ItemID.vpak, 0, 'r', ItemID.rak, 0]);

Recipes.addShaped({id: ItemID.zrak2, count: 1, data: 0}, [ 
"", 
"", 
"*xa" 
], ['x', ItemID.zak, 0, 'a', ItemID.zrak, 0]);


Recipes.addShaped({id: ItemID.case7, count: 1, data: 0}, [ 
"xxx", 
"xax", 
"xxx" 
], ['x', 265, 0, 'a', 102, 0]);


// IDRegistry.genItemID("akmn");
// Item.createItem("akmn", "AKMN", {name: "akmn", meta: 0}, {stack: 1});


Callback.addCallback("GunsDefined",function(){
/* Recipes.addShaped({id: ItemID.ar15a3, count: 1, data: 0}, [ 
"xxx", 
"xxx", 
"x**" 
], ['x', 265, 0]); */

Recipes.addShaped({id: ItemID.akmn, count: 1, data: 0}, [ 
"gl*", 
"bxp", 
"" 
], ['x', ItemID.akbase, 0, 'b', ItemID.s762b, 0, 'p', ItemID.pak, 0, 'g', ItemID.gtak, 0, 'l', ItemID.lh, 0]);

Recipes.addShaped({id: ItemID.pmm, count: 1, data: 0}, [ 
"*xx", 
"**x", 
"" 
], ['x', 265, 0]);

Recipes.addShaped({id: ItemID.ak74n, count: 1, data: 0}, [ 
"gls", 
"bxp", 
"" 
], ['x', ItemID.akbase, 0, 'b', ItemID.s545b, 0, 'p', ItemID.pak, 0, 'g', ItemID.gtak, 0, 'l', ItemID.lh, 0, 's', ItemID.psn2, 0]);





//Кейсы


IDRegistry.genItemID("case1");
Item.createItem("case1", "Military case", {name: "case1", meta: 0}, {stack: 1});

Item.registerUseFunction("case1", function(coords, item, block){
         var CD = Math.round(Math.random() * 9);
         if(CD == 0){
Player.addItemToInventory (ItemID.hka2, 1, 0);
Game.message("H&K A2");
    item.count--;
	if(!item.count){item.id = 0;}
	Player.setCarriedItem(item.id, item.count, 0);
}
     if(CD == 1){
          
Player.addItemToInventory (ItemID.g36, 1, 0);
Game.message("G-36");
   item.count--;
	if(!item.count){item.id = 0;}
	Player.setCarriedItem(item.id, item.count, 0);
}
       if(CD == 2){
          
Player.addItemToInventory (ItemID.ammoassault, 5, 0);
Player.addItemToInventory (ItemID.ammosniper, 5, 0);
Player.addItemToInventory (ItemID.ammohandgun, 5, 0);
Player.addItemToInventory (ItemID.bizammo, 3, 0);
Player.addItemToInventory (ItemID.bammo, 1, 0);
   Game.message("Ammo pack");
  item.count--;
	if(!item.count){item.id = 0;}
	Player.setCarriedItem(item.id, item.count, 0);
}
     if(CD == 3){
          
Player.addItemToInventory (ItemID.ak103, 1, 0);
Player.addItemToInventory (262, 16, 0);
   Game.message("AK-103");
    item.count--;
	if(!item.count){item.id = 0;}
	Player.setCarriedItem(item.id, item.count, 0);
}
      if(CD == 4){
          
Player.addItemToInventory (ItemID.m96, 1, 0);
Game.message("M96");
 item.count--;
	if(!item.count){item.id = 0;}
	Player.setCarriedItem(item.id, item.count, 0);
} 
     if(CD == 5){
          
Player.addItemToInventory (ItemID.rpk17, 1, 0);
Game.message("RPK 17");
    item.count--;
	if(!item.count){item.id = 0;}
	Player.setCarriedItem(item.id, item.count, 0);
}
    if(CD == 6){
    
Player.addItemToInventory (ItemID.aks74u, 1, 0);
Game.message("AKS-74U");
    item.count--;
	if(!item.count){item.id = 0;}
	Player.setCarriedItem(item.id, item.count, 0);
}
    if(CD == 7){
    
Player.addItemToInventory (ItemID.sscout, 1, 0);
Game.message("Steyr Scout");
    item.count--;
	if(!item.count){item.id = 0;}
	Player.setCarriedItem(item.id, item.count, 0);
}
    if(CD == 8){
    
Player.addItemToInventory (ItemID.pp19, 1, 0);
Game.message("PP19 Bizon");
    item.count--;
	if(!item.count){item.id = 0;}
	Player.setCarriedItem(item.id, item.count, 0);
}
});


IDRegistry.genItemID("case2");
Item.createItem("case2", "Night city case", {name: "case2", meta: 0}, {stack: 1});

Item.registerUseFunction("case2", function(coords, item, block){
         var CD = Math.round(Math.random() * 9);
         if(CD == 0){
Player.addItemToInventory (ItemID.g17, 1, 0);
Game.message("Glock 17");
    item.count--;
	if(!item.count){item.id = 0;}
	Player.setCarriedItem(item.id, item.count, 0);
}
     if(CD == 1){
          
Player.addItemToInventory (ItemID.g36c, 1, 0);
Game.message("G-36C");
   item.count--;
	if(!item.count){item.id = 0;}
	Player.setCarriedItem(item.id, item.count, 0);
}
       if(CD == 2){
          
Player.addItemToInventory (ItemID.ammoassault, 5, 0);
Player.addItemToInventory (ItemID.ammosniper, 5, 0);
Player.addItemToInventory (ItemID.ammohandgun, 5, 0);
Player.addItemToInventory (ItemID.bizammo, 3, 0);
Player.addItemToInventory (ItemID.bammo, 1, 0);
   Game.message("Ammo pack");
  item.count--;
	if(!item.count){item.id = 0;}
	Player.setCarriedItem(item.id, item.count, 0);
}
     if(CD == 3){
          
Player.addItemToInventory (ItemID.uzi, 1, 0);
Game.message("UZI");
    item.count--;
	if(!item.count){item.id = 0;}
	Player.setCarriedItem(item.id, item.count, 0);
}
      if(CD == 4){
          
Player.addItemToInventory (ItemID.savedoff, 1, 0);
Game.message("Saved-off shotgun");
 item.count--;
	if(!item.count){item.id = 0;}
	Player.setCarriedItem(item.id, item.count, 0);
} 
     if(CD == 5){
          
Player.addItemToInventory (ItemID.ar15a3, 1, 0);
Game.message("AR 15 A 3");
    item.count--;
	if(!item.count){item.id = 0;}
	Player.setCarriedItem(item.id, item.count, 0);
}
    if(CD == 6){
    
Player.addItemToInventory (ItemID.onebarrel, 1, 0);
Game.message("One barrel shotgun");
    item.count--;
	if(!item.count){item.id = 0;}
	Player.setCarriedItem(item.id, item.count, 0);
}
    if(CD == 7){
    
Player.addItemToInventory (ItemID.ssg552, 1, 0);
Game.message("SSG 552");
    item.count--;
	if(!item.count){item.id = 0;}
	Player.setCarriedItem(item.id, item.count, 0);
}
    if(CD == 8){
    
Player.addItemToInventory (ItemID.pernach, 1, 0);
Game.message("Pernach");
    item.count--;
	if(!item.count){item.id = 0;}
	Player.setCarriedItem(item.id, item.count, 0);
}
});


IDRegistry.genItemID("case4");
Item.createItem("case4", "Spetsnaz case", {name: "case4", meta: 0}, {stack: 1});

Item.registerUseFunction("case4", function(coords, item, block){
         var CD = Math.round(Math.random() * 9);
         if(CD == 0){
Player.addItemToInventory (ItemID.pmm, 1, 0);
Game.message("PMM");
    item.count--;
	if(!item.count){item.id = 0;}
	Player.setCarriedItem(item.id, item.count, 0);
}
     if(CD == 1){
          
Player.addItemToInventory (ItemID.pp1901sn, 1, 0);
Game.message("PP 19_01 Vitaz SN");
   item.count--;
	if(!item.count){item.id = 0;}
	Player.setCarriedItem(item.id, item.count, 0);
}
       if(CD == 2){
          
Player.addItemToInventory (ItemID.ammoassault, 5, 0);
Player.addItemToInventory (ItemID.ammosniper, 5, 0);
Player.addItemToInventory (ItemID.ammohandgun, 5, 0);
Player.addItemToInventory (ItemID.bizammo, 3, 0);
Player.addItemToInventory (ItemID.bammo, 1, 0);
   Game.message("Ammo pack");
  item.count--;
	if(!item.count){item.id = 0;}
	Player.setCarriedItem(item.id, item.count, 0);
}
     if(CD == 3){
          
Player.addItemToInventory (ItemID.ak15, 1, 0);
Game.message("AK-15");
    item.count--;
	if(!item.count){item.id = 0;}
	Player.setCarriedItem(item.id, item.count, 0);
}
      if(CD == 4){
          
Player.addItemToInventory (ItemID.kiparis, 1, 0);
Game.message("PP Kiparis");
 item.count--;
	if(!item.count){item.id = 0;}
	Player.setCarriedItem(item.id, item.count, 0);
} 
     if(CD == 5){
          
Player.addItemToInventory (ItemID.kedr, 1, 0);
Game.message("PP Kedr");
    item.count--;
	if(!item.count){item.id = 0;}
	Player.setCarriedItem(item.id, item.count, 0);
}
    if(CD == 6){
    
Player.addItemToInventory (ItemID.groza, 1, 0);
Game.message("OC 14 Groza");
    item.count--;
	if(!item.count){item.id = 0;}
	Player.setCarriedItem(item.id, item.count, 0);
}
    if(CD == 7){
    
Player.addItemToInventory (ItemID.grom, 1, 0);
Game.message("OC 14 Grom");
    item.count--;
	if(!item.count){item.id = 0;}
	Player.setCarriedItem(item.id, item.count, 0);
}
    if(CD == 8){
    
Player.addItemToInventory (ItemID.aek971, 1, 0);
Game.message("AEK-971");
    item.count--;
	if(!item.count){item.id = 0;}
	Player.setCarriedItem(item.id, item.count, 0);
}
});


IDRegistry.genItemID("case3");
Item.createItem("case3", "Storm case", {name: "case3", meta: 0}, {stack: 1});

Item.registerUseFunction("case3", function(coords, item, block){
         var CD = Math.round(Math.random() * 9);
         if(CD == 0){
Player.addItemToInventory (ItemID.scarh, 1, 0);
Game.message("FN SCAR H");
    item.count--;
	if(!item.count){item.id = 0;}
	Player.setCarriedItem(item.id, item.count, 0);
}
     if(CD == 1){
          
Player.addItemToInventory (ItemID.pp1901, 1, 0);
Game.message("PP 19_01 Vitaz");
   item.count--;
	if(!item.count){item.id = 0;}
	Player.setCarriedItem(item.id, item.count, 0);
}
       if(CD == 2){
          
Player.addItemToInventory (ItemID.ammoassault, 5, 0);
Player.addItemToInventory (ItemID.ammosniper, 5, 0);
Player.addItemToInventory (ItemID.ammohandgun, 5, 0);
Player.addItemToInventory (ItemID.bizammo, 3, 0);
Player.addItemToInventory (ItemID.bammo, 1, 0);
   Game.message("Ammo pack");
  item.count--;
	if(!item.count){item.id = 0;}
	Player.setCarriedItem(item.id, item.count, 0);
}
     if(CD == 3){
          
Player.addItemToInventory (ItemID.xm1012, 1, 0);
Game.message("XM-1012");
    item.count--;
	if(!item.count){item.id = 0;}
	Player.setCarriedItem(item.id, item.count, 0);
}
      if(CD == 4){
          
Player.addItemToInventory (ItemID.gsh18, 1, 0);
Game.message("GSh-18");
 item.count--;
	if(!item.count){item.id = 0;}
	Player.setCarriedItem(item.id, item.count, 0);
} 
     if(CD == 5){
          
Player.addItemToInventory (ItemID.g28, 1, 0);
Game.message("G-28");
    item.count--;
	if(!item.count){item.id = 0;}
	Player.setCarriedItem(item.id, item.count, 0);
}
    if(CD == 6){
    
Player.addItemToInventory (ItemID.c7a2, 1, 0);
Game.message("SSG C7A2");
    item.count--;
	if(!item.count){item.id = 0;}
	Player.setCarriedItem(item.id, item.count, 0);
}
    if(CD == 7){
    
Player.addItemToInventory (ItemID.g24p, 1, 0);
Game.message("G-24P");
    item.count--;
	if(!item.count){item.id = 0;}
	Player.setCarriedItem(item.id, item.count, 0);
}
    if(CD == 8){
    
Player.addItemToInventory (ItemID.g36a, 1, 0);
Game.message("G-36A");
    item.count--;
	if(!item.count){item.id = 0;}
	Player.setCarriedItem(item.id, item.count, 0);
}
});

IDRegistry.genItemID("case5");
Item.createItem("case5", "Part case", {name: "case6", meta: 0}, {stack: 1});

Item.registerUseFunction("case5", function(coords, item, block){
         var CD = Math.round(Math.random() * 9);
         if(CD == 0){
Player.addItemToInventory (ItemID.lh, 10, 0);
Game.message("Lastochkin hvost");
    item.count--;
	if(!item.count){item.id = 0;}
	Player.setCarriedItem(item.id, item.count, 0);
}
     if(CD == 1){
          
Player.addItemToInventory (ItemID.zak, 1, 0);
Game.message("Bolt");
   item.count--;
	if(!item.count){item.id = 0;}
	Player.setCarriedItem(item.id, item.count, 0);
}
       if(CD == 2){
          
Player.addItemToInventory (ItemID.vpak, 5, 0);
Player.addItemToInventory (ItemID.ccak, 5, 0);
Player.addItemToInventory (ItemID.cakbase, 5, 0);
Player.addItemToInventory (ItemID.ammoassault, 3, 0);
Player.addItemToInventory (ItemID.pak, 1, 0);
Player.addItemToInventory (ItemID.lh, 1, 0);
   Game.message("Other Parts");
  item.count--;
	if(!item.count){item.id = 0;}
	Player.setCarriedItem(item.id, item.count, 0);
}
     if(CD == 3){
          
Player.addItemToInventory (ItemID.zrak, 1, 0);
Game.message("Bolt carrier");
    item.count--;
	if(!item.count){item.id = 0;}
	Player.setCarriedItem(item.id, item.count, 0);
}
      if(CD == 4){
          
Player.addItemToInventory (ItemID.rak, 1, 0);
Game.message("Handle AK");
 item.count--;
	if(!item.count){item.id = 0;}
	Player.setCarriedItem(item.id, item.count, 0);
} 
     if(CD == 5){
          
Player.addItemToInventory (ItemID.s545b, 1, 0);
Game.message("5.45 Barrel");
    item.count--;
	if(!item.count){item.id = 0;}
	Player.setCarriedItem(item.id, item.count, 0);
}
    if(CD == 6){
    
Player.addItemToInventory (ItemID.s762b, 1, 0);
Game.message("7.62 Barrel");
    item.count--;
	if(!item.count){item.id = 0;}
	Player.setCarriedItem(item.id, item.count, 0);
}
    if(CD == 7){
    
Player.addItemToInventory (ItemID.psn2, 1, 0);
Game.message("PSN-2");
    item.count--;
	if(!item.count){item.id = 0;}
	Player.setCarriedItem(item.id, item.count, 0);
}
    if(CD == 8){
    
Player.addItemToInventory (ItemID.gtak, 1, 0);
Game.message("Gas tube AK");
    item.count--;
	if(!item.count){item.id = 0;}
	Player.setCarriedItem(item.id, item.count, 0);
}
});



//Рецепты кейсов

Recipes.addShaped({id: ItemID.case5, count: 1, data: 0}, [ 
"xxx", 
"xca", 
"aaa" 
], ['x', 265, 0, 'a', 17, 0, 'c', ItemID.case7, 0]);

Recipes.addShaped({id: ItemID.case4, count: 1, data: 0}, [ 
"xxx", 
"xca", 
"aaa" 
], ['x', 265, 0, 'a', 331, 0, 'c', ItemID.case7, 0]);

Recipes.addShaped({id: ItemID.case3, count: 1, data: 0}, [ 
"xxx", 
"xca", 
"aaa" 
], ['x', 265, 0, 'a', 266, 0, 'c', ItemID.case7, 0]);

Recipes.addShaped({id: ItemID.case2, count: 1, data: 0}, [ 
"xxx", 
"xca", 
"aaa" 
], ['x', 351, 4, 'a', 152, 0, 'c', ItemID.case7, 0]);

Recipes.addShaped({id: ItemID.case1, count: 1, data: 0}, [ 
"xxx", 
"xca", 
"aaa" 
], ['x', 265, 0, 'a', 351, 2, 'c', ItemID.case7, 0]);



});


/* Recipes.addShaped({id: ItemID.aleggings, count: 1, data: 0}, [ 
"xxx", 
"x*x", 
"x*x" 
], ['x', 35, 15]);

Recipes.addShaped({id: ItemID.aboots, count: 1, data: 0}, [ 
"", 
"x*x", 
"x*x" 
], ['x', 35, 15]);

Recipes.addShaped({id: ItemID.nhelmet, count: 1, data: 0}, [ 
"xxx", 
"x*x", 
"" 
], ['x', 35, 11]); */