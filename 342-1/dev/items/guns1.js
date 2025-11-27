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
	name:"Пушка Ракеты \n20 урона",
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
	id:"brinathor",
	name:"Бринатхор \n35 урона",
	ammo:"luxtarbullet",
	accuracy:6,
	recoil:1,
	rate:10,
	texture:{
		name:"brinathor",
		meta:0
	},
	shotType:ShotType.NORMAL,
	buttonType:ButtonType.CLICK,
	bullet:{
		speed:10,
		count:50,
		damage:35
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
	id:"darkinathor",
	name:"Даркинатхор \n50 урона",
	ammo:"luxtarrbullet",
	accuracy:6,
	recoil:1,
	rate:10,
	texture:{
		name:"darkinathor",
		meta:0
	},
	shotType:ShotType.NORMAL,
	buttonType:ButtonType.CLICK,
	bullet:{
		speed:10,
		count:50,
		damage:50
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
	id:"dudlik",
	name:"Дудлик \n20 урона",
	ammo:"aerolitebullet",
	accuracy:6,
	recoil:1,
	rate:10,
	texture:{
		name:"dudlik",
		meta:0
	},
	shotType:ShotType.NORMAL,
	buttonType:ButtonType.CLICK,
	bullet:{
		speed:10,
		count:5,
		damage:20
	},
	fov:{
		level:20
	},
	sounds:{
		shot:"Shoot/Shoot.ogg",
		empty:"EmptyGun.ogg",
		reload:"Reload/FastReload.ogg"
	}
});


ShootLib.addGun({
	id:"rainbowgun",
	name:"Радужная Пушка \n25 урона",
	ammo:"luxtarrbullet",
	accuracy:6,
	recoil:1,
	rate:10,
	texture:{
		name:"rainbowgun",
		meta:0
	},
	shotType:ShotType.NORMAL,
	buttonType:ButtonType.CLICK,
	bullet:{
		speed:10,
		count:10,
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
	id:"goodgun",
	name:"Хорошая Пушка \n30 урона",
	ammo:"darkhambullet",
	accuracy:6,
	recoil:1,
	rate:10,
	texture:{
		name:"goodgun",
		meta:0
	},
	shotType:ShotType.NORMAL,
	buttonType:ButtonType.CLICK,
	bullet:{
		speed:10,
		count:50,
		damage:30
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
	id:"minigun",
	name:"Минигатхор \n17 урона",
	ammo:"luxtarrbullet",
	accuracy:6,
	recoil:1,
	rate:10,
	texture:{
		name:"minigun",
		meta:0
	},
	shotType:ShotType.NORMAL,
	buttonType:ButtonType.CLICK,
	bullet:{
		speed:15,
		count:50,
		damage:17
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
	id:"rocketlauncher",
	name:"Ракетопускатель \n60 урона",
	ammo:"rocket",
	accuracy:6,
	recoil:1,
	rate:10,
	texture:{
		name:"rocketlauncher",
		meta:0
	},
	shotType:ShotType.NORMAL,
	buttonType:ButtonType.CLICK,
	bullet:{
		speed:10,
		count:1,
		damage:60
	},
	fov:{
		level:10
	},
	sounds:{
		shot:"Shoot/Shoot.ogg",
		empty:"EmptyGun.ogg",
		reload:"Reload/LongReload.ogg"
	}
});



ShootLib.addGun({
	id:"stormbow",
	name:"Штормовой лук \n55 урона",
	ammo:"skylitearrow",
	accuracy:6,
	recoil:1,
	rate:10,
	texture:{
		name:"stormbow",
		meta:0
	},
	shotType:ShotType.NORMAL,
	buttonType:ButtonType.CLICK,
	bullet:{
		speed:10,
		count:1,
		damage:55
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
	id:"VioletDrobovik",
	name:"Фиолетовый дробовик \n66 урона",
	ammo:"luxtarrbullet",
	accuracy:6,
	recoil:1,
	rate:10,
	texture:{
		name:"VioletDrobovik",
		meta:0
	},
	shotType:ShotType.SHOTGUN,
	buttonType:ButtonType.CLICK,
	bullet:{
		speed:10,
		count:50,
		damage:66
	},
	fov:{
		level:10
	},
	sounds:{
		shot:"Shoot/Shoot.ogg",
		empty:"EmptyGun.ogg",
		reload:"Reload/FastReload.ogg"
	},
    shotgun:{ //Только при gun.shotType:ShotType.SHOTGUN
        count:6, //Кол-во дробинок
        degreesSpread:3, //Разброс дроби
    }
});



ShootLib.addGun({
	id:"gigathor",
	name:"Гигатхор \n70 урона",
	ammo:"energybullet",
	accuracy:6,
	recoil:1,
	rate:10,
	texture:{
		name:"gigathor",
		meta:0
	},
	shotType:ShotType.NORMAL,
	buttonType:ButtonType.CLICK,
	bullet:{
		speed:10,
		count:3,
		damage:70
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
	id:"firegun",
	name:"Огнемёт \n100 урона",
	ammo:"luxtarrbullet",
	accuracy:6,
	recoil:1,
	rate:10,
	texture:{
		name:"firegun",
		meta:0
	},
	shotType:ShotType.NORMAL,
	buttonType:ButtonType.CLICK,
	bullet:{
		speed:10,
		count:100,
		damage:100
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
	id:"RedDrobovik",
	name:"Красный дробовик \n100 урона",
	ammo:"luxtarrbullet",
	accuracy:6,
	recoil:1,
	rate:10,
	texture:{
		name:"RedDrobovik",
		meta:0
	},
	shotType:ShotType.SHOTGUN,
	buttonType:ButtonType.CLICK,
	bullet:{
		speed:10,
		count:86,
		damage:100
	},
	fov:{
		level:46
	},
	sounds:{
		shot:"Shoot/Shoot.ogg",
		empty:"EmptyGun.ogg",
		reload:"Reload/FastReload.ogg"
	},
    shotgun:{ //Только при gun.shotType:ShotType.SHOTGUN
        count:8, //Кол-во дробинок
        degreesSpread:3, //Разброс дроби
    }
});











ShootLib.addGun({
	id:"skullcrossbow",
	name:"Черепной арбалет \n35 урона",
	ammo:"bolt",
	accuracy:6,
	recoil:1,
	rate:10,
	texture:{
		name:"skullcrossbow",
		meta:0
	},
	shotType:ShotType.NORMAL,
	buttonType:ButtonType.CLICK,
	bullet:{
		speed:15,
		count:1,
		damage:35
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
	id:"wildbow",
	name:"Хищный лук \n72 урона",
	ammo:"bloodarrow",
	accuracy:6,
	recoil:1,
	rate:10,
	texture:{
		name:"wildbow",
		meta:0
	},
	shotType:ShotType.NORMAL,
	buttonType:ButtonType.CLICK,
	bullet:{
		speed:10,
		count:1,
		damage:70
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
	id:"stonerifle",
	name:"Каменная винтовка \n100 урона",
	ammo:"luxtarrbullet",
	accuracy:6,
	recoil:1,
	rate:10,
	texture:{
		name:"stonerifle",
		meta:0
	},
	shotType:ShotType.NORMAL,
	buttonType:ButtonType.CLICK,
	bullet:{
		speed:10,
		count:100,
		damage:100
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
	id:"wildminigun",
	name:"Хищноминигатхор \n30 урона",
	ammo:"luxtarrbullet",
	accuracy:6,
	recoil:1,
	rate:10,
	texture:{
		name:"wildminigun",
		meta:0
	},
	shotType:ShotType.NORMAL,
	buttonType:ButtonType.CLICK,
	bullet:{
		speed:15,
		count:62,
		damage:30
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
	id:"bloodbow",
	name:"Лук с артериальной тетевой \n82 урона",
	ammo:"bloodarrow",
	accuracy:6,
	recoil:1,
	rate:10,
	texture:{
		name:"bloodbow",
		meta:0
	},
	shotType:ShotType.NORMAL,
	buttonType:ButtonType.CLICK,
	bullet:{
		speed:10,
		count:1,
		damage:82
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
	id:"bloodgun",
	name:"Багряный бластер \n78 урона",
	ammo:"luxtarrbullet",
	accuracy:6,
	recoil:1,
	rate:10,
	texture:{
		name:"bloodgun",
		meta:0
	},
	shotType:ShotType.NORMAL,
	buttonType:ButtonType.CLICK,
	bullet:{
		speed:10,
		count:50,
		damage:78
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
	id:"shadowbow",
	name:"Теневой лук \n87 урона",
	ammo:"bloodarrow",
	accuracy:6,
	recoil:1,
	rate:10,
	texture:{
		name:"shadowbow",
		meta:0
	},
	shotType:ShotType.NORMAL,
	buttonType:ButtonType.CLICK,
	bullet:{
		speed:10,
		count:1,
		damage:87
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
	id:"redlightning",
	name:"Красная молния \n93 урона",
	ammo:"bloodarrow",
	accuracy:6,
	recoil:1,
	rate:10,
	texture:{
		name:"redlightning",
		meta:0
	},
	shotType:ShotType.NORMAL,
	buttonType:ButtonType.CLICK,
	bullet:{
		speed:10,
		count:1,
		damage:93
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




















ShootLib.addAmmos([
{
	id:"luxtarrbullet",
	name:"Пуля",
	texture:{
		name:"luxtarrbullet",
		meta:0
	}
},
{
	id:"darkhambullet",
	name:"Пушечное ядро",
	texture:{
		name:"darkhambullet",
		meta:0
	}
}, 
{
	id:"redpowerbullet",
	name:"Красная пуля",
	texture:{
		name:"redpowerbullet",
		meta:0
	}
}, 
{
	id:"energybullet",
	name:"Энергитическая пуля",
	texture:{
		name:"energybullet",
		meta:0
	}
}, 
{
	id:"rocket",
	name:"Ракета",
	texture:{
		name:"rocket",
		meta:0
	}
}, 
{
	id:"aerolitebullet",
	name:"Аэролитовая пуля",
	texture:{
		name:"aerolitebullet",
		meta:0
	}
}, 
{
	id:"skylitearrow",
	name:"Скайлитовая стрела",
	texture:{
		name:"skylitearrow",
		meta:0
	}
}, 

{
	id:"bloodarrow",
	name:"Кровавая стрела",
	texture:{
		name:"bloodarrow",
		meta:0
	}
}, 

{
	id:"bolt",
	name:"Арбалетный болт",
	texture:{
		name:"bolt",
		meta:0
	}
}, 

 ]);
 
 
 
 
 
 
 
 