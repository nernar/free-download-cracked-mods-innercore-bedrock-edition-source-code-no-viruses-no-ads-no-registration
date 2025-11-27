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
	id:"rocketgun",
	name:"Rocket Gun",
	ammo:"energybullet",
	accuracy:6,
	recoil:1,
	rate:10,
	texture:{
		name:"rocketgun",
		meta:0
	},
	shotType:ShotType.NORMAL,
	buttonType:ButtonType.CLICK,
	bullet:{
		speed:10,
		count:50,
		damage:20
	},
	fov:{
		level:10
	},
	sounds:{
		shot:"Shoot/Shoot.ogg",
		empty:"EmptyGun.ogg",
		reload:"Reload/FastReload.ogg"
	}
});









ShootLib.addGun({
	id:"kreegun",
	name:"Kree Gun",
	ammo:"energybullet",
	accuracy:4, //точность
	recoil:1, //отдача
	rate:10, //темп 
	texture:{
		name:"kreegun",
		meta:0
	},
	shotType:ShotType.NORMAL,
	buttonType:ButtonType.CLICK,
	bullet:{
		speed:10,
		count:45,
		damage:15
	},
	fov:{
		level:10
	},
	sounds:{
		shot:"Shoot/Shoot.ogg",
		empty:"EmptyGun.ogg",
		reload:"Reload/FastReload.ogg"
	}
});



ShootLib.addGun({
	id:"kylngun",
	name:"Kyln Gun",
	ammo:"energybullet",
	accuracy:4, //точность
	recoil:1, //отдача
	rate:10, //темп 
	texture:{
		name:"kylngun",
		meta:0
	},
	shotType:ShotType.NORMAL,
	buttonType:ButtonType.CLICK,
	bullet:{
		speed:10,
		count:45,
		damage:15
	},
	fov:{
		level:10
	},
	sounds:{
		shot:"Shoot/Shoot.ogg",
		empty:"EmptyGun.ogg",
		reload:"Reload/FastReload.ogg"
	}
});



ShootLib.addGun({
	id:"starlordgun",
	name:"Star Lord Gun",
	ammo:"energybullet",
	accuracy:6, //точность
	recoil:1, //отдача
	rate:10, //темп 
	texture:{
		name:"starlordgun",
		meta:0
	},
	shotType:ShotType.NORMAL,
	buttonType:ButtonType.CLICK,
	bullet:{
		speed:10,
		count:50,
		damage:15
	},
	fov:{
		level:10
	},
	sounds:{
		shot:"Shoot/Shoot.ogg",
		empty:"EmptyGun.ogg",
		reload:"Reload/FastReload.ogg"
	}
});



ShootLib.addGun({
	id:"greenarrowbow",
	name:"Green Arrow bow",
	ammo:"greenarrow",
	accuracy:7, //точность
	recoil:0, //отдача
	rate:10, //темп 
	texture:{
		name:"greenarrowbow",
		meta:0
	},
	shotType:ShotType.NORMAL,
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
		shot:"Shoot/Shoot.ogg",
		empty:"EmptyGun.ogg",
		reload:"Reload/FastReload.ogg"
	}
});



ShootLib.addGun({
	id:"gun",
	name:"Gun",
	ammo:"bullet",
	accuracy:7, //точность
	recoil:1, //отдача
	rate:10, //темп 
	texture:{
		name:"gun",
		meta:0
	},
	shotType:ShotType.NORMAL,
	buttonType:ButtonType.CLICK,
	bullet:{
		speed:10,
		count:40,
		damage:20
	},
	fov:{
		level:10
	},
	sounds:{
		shot:"Shoot/Shoot.ogg",
		empty:"EmptyGun.ogg",
		reload:"Reload/FastReload.ogg"
	}
});



ShootLib.addAmmos([{
	id:"energybullet",
	name:"Energy Bullet",
	texture:{
		name:"energiccharge",
		meta:0
	}
},
{
	id:"greenarrow",
	name:"Green Arrow",
	texture:{
		name:"greenarrow",
		meta:0
	}
},
{
	id:"bullet",
	name:"Bullet",
	texture:{
		name:"bullet",
		meta:0
	}
}, ]);