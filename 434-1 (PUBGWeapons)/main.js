/*
BUILD INFO:
  dir: dev
  target: main.js
  files: 17
*/



// file: header.js

IMPORT("ShootLib", "ShootLib");

var ShotType = ShootLib.ShotType;
var ButtonType = ShootLib.ButtonType;

ShootLib.init({
    crosshairGUI:{
        bitmap:{
            coords:{
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




// file: Weapons/weaponP.js

ShootLib.addGun({
    id:"recrent",
    name:"Revolver 1895",
    ammo:"ammo7_62",
    accuracy:1,
    recoil:4,
    rate:1,
    texture:{
        name:"recrent",
        meta:0
    },
    shotType:ShotType.NORMAL,
    buttonType:ButtonType.CLICK,
    bullet:{
        speed:10,
        count:7,
        damage:11
    },
    fov:{
        level:30
    },
    sounds:{
        shot:"DesertEagleShoot.ogg",
        empty:"EmptyGun.mp3",
        reload:"reload/LugerReload.ogg"
    }
});

ShootLib.addGun({
    id:"revolverAcp",
    name:"45Acp Revolver",
    ammo:"ammo_45Acp",
    accuracy:1,
    recoil:4,
    rate:1.6,
    texture:{
        name:"R45",
        meta:0
    },
    shotType:ShotType.NORMAL,
    buttonType:ButtonType.CLICK,
    bullet:{
        speed:10,
        count:7,
        damage:11
    },
    fov:{
        level:30
    },
    sounds:{
        shot:"DesertEagleShoot.ogg",
        empty:"EmptyGun.mp3",
        reload:"reload/LugerReload.ogg"
    }
});

ShootLib.addGun({
    id:"p1911",
    name:"P1911",
    ammo:"ammo_45Acp",
    accuracy:5,
    recoil:5,
    rate:5,
    texture:{
        name:"p1911",
        meta:0
    },
    shotType:ShotType.NORMAL,
    buttonType:ButtonType.CLICK,
    bullet:{
        speed:10,
        count:11,
        damage:8.2
    },
    fov:{
        level:0
    },
    sounds:{
        shot:"DesertEagleShoot.ogg",
        empty:"EmptyGun.mp3",
        reload:"reload/LugerReload.ogg"
    }
});

ShootLib.addGun({
    id:"p92",
    name:"P92",
    ammo:"ammo9mm",
    accuracy:5,
    recoil:5,
    rate:5,
    texture:{
        name:"p92",
        meta:0
    },
    shotType:ShotType.NORMAL,
    buttonType:ButtonType.CLICK,
    bullet:{
        speed:10,
        count:20,
        damage:7
    },
    fov:{
        level:0
    },
    sounds:{
        shot:"DesertEagleShoot.ogg",
        empty:"EmptyGun.mp3",
        reload:"reload/LugerReload.ogg"
    }
});

ShootLib.addGun({
    id:"p18c",
    name:"P18C",
    ammo:"ammo9mm",
    accuracy:6,
    recoil:6,
    rate:10,
    texture:{
        name:"p18c",
        meta:0
    },
    shotType:ShotType.NORMAL,
    buttonType:ButtonType.TOUCH,
    bullet:{
        speed:10,
        count:24,
        damage:4.6
    },
    fov:{
        level:0
    },
    sounds:{
        shot:"DesertEagleShoot.ogg",
        empty:"EmptyGun.mp3",
        reload:"reload/LugerReload.ogg"
    }
});

ShootLib.addGun({
    id:"flaregun",
    name:"Flaregun",
    ammo:"ammoFlare",
    accuracy:1,
    recoil:1,
    rate:10,
    texture:{
        name:"flaregun",
        meta:0
    },
    shotType:ShotType.NORMAL,
    buttonType:ButtonType.TOUCH,
    bullet:{
        speed:20,
        count:1,
        damage:0
    },
    fov:{
        level:0,
    },
    sounds:{
        shot:"AKM.ogg",
        empty:"EmptyGun.mp3",
        reload:"reload/AWMReload.ogg"
    },
    randomDrop:
    [{
    id:"awm",
    chance:1
    },
    {
    	id:"groza",
    	chance:1
    }
]
});




// file: Weapons/weaponPP.js

ShootLib.addGun({
    id:"ump",
    name:"UMP",
    ammo:"ammo_45Acp",
    accuracy:5,
    recoil:3,
    rate:6,
    texture:{
        name:"UMP",
        meta:0
    },
    shotType:ShotType.NORMAL,
    buttonType:ButtonType.TOUCH,
    bullet:{
        speed:7,
        count:25,
        damage:7.9
    },
    fov:{
        level:0
    },
    sounds:{
        shot:"AKM.ogg",
        empty:"EmptyGun.mp3",
        reload:"reload/MP44Reload.ogg"
    }
});

ShootLib.addGun({
    id:"vector",
    name:"Vector",
    ammo:"ammo9mm",
    accuracy:6,
    recoil:3,
    rate:10,
    texture:{
        name:"Vector",
        meta:0
    },
    shotType:ShotType.NORMAL,
    buttonType:ButtonType.TOUCH,
    bullet:{
        speed:7,
        count:33,
        damage:6.8
    },
    fov:{
        level:0
    },
    sounds:{
        shot:"AKM.ogg",
        empty:"EmptyGun.mp3",
        reload:"reload/MP44Reload.ogg"
    }
});

ShootLib.addGun({
    id:"uzi",
    name:"Micro Uzi",
    ammo:"ammo9mm",
    accuracy:8,
    recoil:6,
    rate:10,
    texture:{
        name:"uzi",
        meta:0
    },
    shotType:ShotType.NORMAL,
    buttonType:ButtonType.TOUCH,
    bullet:{
        speed:7,
        count:35,
        damage:5.2
    },
    fov:{
        level:0
    },
    sounds:{
        shot:"AKM.ogg",
        empty:"EmptyGun.mp3",
        reload:"reload/MP44Reload.ogg"
    }
});

ShootLib.addGun({
    id:"tommyGun",
    name:"Tommy Gun",
    ammo:"ammo_45Acp",
    accuracy:7,
    recoil:5,
    rate:10,
    texture:{
        name:"tommyGun",
        meta:0
    },
    shotType:ShotType.NORMAL,
    buttonType:ButtonType.TOUCH,
    bullet:{
        speed:7,
        count:50,
        damage:8
    },
    fov:{
        level:0
    },
    sounds:{
        shot:"AKM.ogg",
        empty:"EmptyGun.mp3",
        reload:"reload/MP44Reload.ogg"
    }
});




// file: Weapons/weaponAR.js

ShootLib.addGun({
    id:"akm",
    name:"AKM",
    ammo:"ammo7_62",
    accuracy:7,
    recoil:5,
    rate:5,
    texture:{
        name:"AKM",
        meta:0
    },
    shotType:ShotType.NORMAL,
    buttonType:ButtonType.TOUCH,
    bullet:{
        speed:9,
        count:40,
        damage:9.8
    },
    fov:{
        level:10
    },
    sounds:{
        shot:"AKM.ogg",
        empty:"EmptyGun.mp3",
        reload:"reload/MP44Reload.ogg"
    }
});

ShootLib.addGun({
    id:"beril",
    name:"Beril",
    ammo:"ammo7_62",
    accuracy:8,
    recoil:7,
    rate:30,
    texture:{
        name:"beril",
        meta:0
    },
    shotType:ShotType.NORMAL,
    buttonType:ButtonType.TOUCH,
    bullet:{
        speed:9,
        count:40,
        damage:9.4
    },
    fov:{
        level:10
    },
    sounds:{
        shot:"AKM.ogg",
        empty:"EmptyGun.mp3",
        reload:"reload/MP44Reload.ogg"
    }
});

ShootLib.addGun({
    id:"qbz",
    name:"QBZ",
    ammo:"ammo5_56",
    accuracy:6,
    recoil:5,
    rate:6,
    texture:{
        name:"qbz",
        meta:0
    },
    shotType:ShotType.NORMAL,
    buttonType:ButtonType.TOUCH,
    bullet:{
        speed:9,
        count:40,
        damage:8.6
    },
    fov:{
        level:10
    },
    sounds:{
        shot:"AKM.ogg",
        empty:"EmptyGun.mp3",
        reload:"reload/MP44Reload.ogg"
    }
});

ShootLib.addGun({
    id:"m16a4",
    name:"M16A4",
    ammo:"ammo5_56",
    accuracy:6,
    recoil:4,
    rate:3,
    texture:{
        name:"m16a4",
        meta:0
    },
    shotType:ShotType.NORMAL,
    buttonType:ButtonType.CLICK,
    bullet:{
        speed:9,
        count:40,
        damage:8.6
    },
    fov:{
        level:10
    },
    sounds:{
        shot:"AKM.ogg",
        empty:"EmptyGun.mp3",
        reload:"reload/MP44Reload.ogg"
    }
});

ShootLib.addGun({
    id:"mk47",
    name:"Mk47",
    ammo:"ammo7_62",
    accuracy:5,
    recoil:6,
    rate:5,
    texture:{
        name:"mk47",
        meta:0
    },
    shotType:ShotType.NORMAL,
    buttonType:ButtonType.CLICK,
    bullet:{
        speed:9,
        count:40,
        damage:9.8
    },
    fov:{
        level:60,
        link:"crosshair/scope4x"
    },
    sounds:{
        shot:"AKM.ogg",
        empty:"EmptyGun.mp3",
        reload:"reload/MP44Reload.ogg"
    }
});

ShootLib.addGun({
    id:"g36c",
    name:"G36C",
    ammo:"ammo5_56",
    accuracy:6,
    recoil:4.5,
    rate:6,
    texture:{
        name:"g36c",
        meta:0
    },
    shotType:ShotType.NORMAL,
    buttonType:ButtonType.TOUCH,
    bullet:{
        speed:9,
        count:40,
        damage:8.3
    },
    fov:{
        level:10
    },
    sounds:{
        shot:"AKM.ogg",
        empty:"EmptyGun.mp3",
        reload:"reload/MP44Reload.ogg"
    }
});

ShootLib.addGun({
    id:"aug",
    name:"AUG",
    ammo:"ammo5_56",
    accuracy:8.3,
    recoil:2,
    rate:7.2,
    texture:{
        name:"aug",
        meta:0
    },
    shotType:ShotType.NORMAL,
    buttonType:ButtonType.TOUCH,
    bullet:{
        speed:13.8,
        count:40,
        damage:16
    },
    fov:{
        level:10
    },
    sounds:{
        shot:"AKM.ogg",
        empty:"EmptyGun.mp3",
        reload:"reload/MP44Reload.ogg"
    }
});

ShootLib.addGun({
    id:"groza",
    name:"groza",
    ammo:"ammo7_62",
    accuracy:6,
    recoil:3,
    rate:10,
    texture:{
        name:"groza",
        meta:0
    },
    shotType:ShotType.NORMAL,
    buttonType:ButtonType.TOUCH,
    bullet:{
        speed:11,
        count:40,
        damage:9.8
    },
    fov:{
        level:10
    },
    sounds:{
        shot:"AKM.ogg",
        empty:"EmptyGun.mp3",
        reload:"reload/MP44Reload.ogg"
    }
});

ShootLib.addGun({
    id:"m416",
    name:"M416",
    ammo:"ammo5_56",
    accuracy:7.5,
    recoil:2.3,
    rate:7.5,
    texture:{
        name:"M416",
        meta:0
    },
    shotType:ShotType.NORMAL,
    buttonType:ButtonType.TOUCH,
    bullet:{
        speed:13,
        count:40,
        damage:8.6
    },
    fov:{
        level:10
    },
    sounds:{
        shot:"AKM.ogg",
        empty:"EmptyGun.mp3",
        reload:"reload/MP44Reload.ogg"
    }   
});




// file: Weapons/weaponMG.js

ShootLib.addGun({
    id:"dp28",
    name:"DP-28",
    ammo:"ammo7_62",
    accuracy:7,
    recoil:4,
    rate:7,
    texture:{
        name:"dp28",
        meta:0
    },
    shotType:ShotType.NORMAL,
    buttonType:ButtonType.TOUCH,
    bullet:{
        speed:13,
        count:47,
        damage:10.5
    },
    fov:{
        level:10
    },
    sounds:{
        shot:"AKM.ogg",
        empty:"EmptyGun.mp3",
        reload:"reload/MP44Reload.ogg"
    }
});

ShootLib.addGun({
    id:"m249",
    name:"M249",
    ammo:"ammo5_56",
    accuracy:9,
    recoil:5,
    rate:8,
    texture:{
        name:"m249",
        meta:0
    },
    shotType:ShotType.NORMAL,
    buttonType:ButtonType.TOUCH,
    bullet:{
        speed:18,
        count:100,
        damage:9
    },
    fov:{
        level:10
    },
    sounds:{
        shot:"AKM.ogg",
        empty:"EmptyGun.mp3",
        reload:"reload/MP44Reload.ogg"
    }
});




// file: Weapons/weaponDMR.js

ShootLib.addGun({
    id:"mini14",
    name:"Mini-14",
    ammo:"ammo5_56",
    accuracy:3,
    recoil:1,
    rate:3,
    texture:{
        name:"Mini-14",
        meta:0
    },
    shotType:ShotType.NORMAL,
    buttonType:ButtonType.CLICK,
    bullet:{
        speed:14,
        count:30,
        damage:11
    },
    fov:{
        level:60,
        link:"crosshair/scope4x"
    },
    sounds:{
        shot:"AKM.ogg",
        empty:"EmptyGun.mp3",
        reload:"reload/AWMReload.ogg"
   }
});

ShootLib.addGun({
    id:"sks",
    name:"SKS",
    ammo:"ammo7_62",
    accuracy:4,
    recoil:5,
    rate:6,
    texture:{
        name:"sks",
        meta:0
    },
    shotType:ShotType.NORMAL,
    buttonType:ButtonType.CLICK,
    bullet:{
        speed:20,
        count:20,
        damage:10.6
    },
    fov:{
        level:60,
        link:"crosshair/scope4x"
    },
    sounds:{
        shot:"AWM.ogg",
        empty:"EmptyGun.mp3",
        reload:"reload/AWMReload.ogg"
   }
});

ShootLib.addGun({
    id:"slr",
    name:"SLR",
    ammo:"ammo7_62",
    accuracy:4,
    recoil:6,
    rate:6,
    texture:{
        name:"slr",
        meta:0
    },
    shotType:ShotType.NORMAL,
    buttonType:ButtonType.CLICK,
    bullet:{
        speed:20,
        count:20,
        damage:11.6
    },
    fov:{
        level:60,
        link:"crosshair/scope4x"
    },
    sounds:{
        shot:"AWM.ogg",
        empty:"EmptyGun.mp3",
        reload:"reload/AWMReload.ogg"
   }
});

ShootLib.addGun({
    id:"vss",
    name:"VSS",
    ammo:"ammo9mm",
    accuracy:8,
    recoil:6,
    rate:8,
    texture:{
        name:"vss",
        meta:0
    },
    shotType:ShotType.NORMAL,
    buttonType:ButtonType.TOUCH,
    bullet:{
        speed:30,
        count:20,
        damage:18
    },
    fov:{
        level:10,
        link:"crosshair/dragunov"
    },
    sounds:{
        shot:"AWM.ogg",
        empty:"EmptyGun.mp3",
        reload:"reload/AWMReload.ogg"
   }
});




// file: Weapons/weaponSR.js

ShootLib.addGun({
    id:"awm",
    name:"Awm",
    ammo:"ammoAwm",
    accuracy:1,
    recoil:29,
    rate:2,
    texture:{
        name:"Awm",
        meta:0
    },
    shotType:ShotType.NORMAL,
    buttonType:ButtonType.CLICK,
    bullet:{
        speed:20,
        count:7,
        damage:ShootLib.MAX_DAMAGE
    },
    fov:{
        level:60,
        link:"crosshair/scope4x"
    },
    sounds:{
        shot:"AWM.ogg",
        empty:"EmptyGun.mp3",
        reload:"reload/AWMReload.ogg"
   }
});

ShootLib.addGun({
    id:"kar98k",
    name:"Kar98k",
    ammo:"ammo7_62",
    accuracy:2,
    recoil:1,
    rate:2,
    texture:{
        name:"Kar98k",
        meta:0
    },
    shotType:ShotType.NORMAL,
    buttonType:ButtonType.CLICK,
    bullet:{
        speed:30,
        count:5,
        damage:18
    },
    fov:{
        level:60,
        link:"crosshair/scope4x"
    },
    sounds:{
        shot:"AWM.ogg",
        empty:"EmptyGun.mp3",
        reload:"reload/AWMReload.ogg"
   }
});

ShootLib.addGun({
    id:"m24",
    name:"M24",
    ammo:"ammo7_62",
    accuracy:1,
    recoil:1,
    rate:2,
    texture:{
        name:"m24",
        meta:0
    },
    shotType:ShotType.NORMAL,
    buttonType:ButtonType.CLICK,
    bullet:{
        speed:30,
        count:7,
        damage:19
    },
    fov:{
        level:60,
        link:"crosshair/scope4x"
    },
    sounds:{
        shot:"AWM.ogg",
        empty:"EmptyGun.mp3",
        reload:"reload/AWMReload.ogg"
   }
});

ShootLib.addGun({
    id:"win94",
    name:"Win94",
    ammo:"ammo_45Acp",
    accuracy:3,
    recoil:4,
    rate:7,
    texture:{
        name:"win94",
        meta:0
    },
    shotType:ShotType.NORMAL,
    buttonType:ButtonType.CLICK,
    bullet:{
        speed:30,
        count:7,
        damage:13.2
    },
    fov:{
        level:55,
    },
    sounds:{
        shot:"AWM.ogg",
        empty:"EmptyGun.mp3",
        reload:"reload/AWMReload.ogg"
   }
});




// file: Weapons/weaponETC.js

IDRegistry.genItemID("boostPainkiller");
Item.createFoodItem("boostPainkiller","Painkiller",{name:"Painkiller"},{food:6});
IDRegistry.genItemID("boost");
Item.createFoodItem("boost","Energy Drink",{name:"EnergyDrink"},{food:4});


IDRegistry.genItemID("scopeRedDot");
Item.createItem("scopeRedDot","Red Dot",{name:"scopeRedDot"});
IDRegistry.genItemID("scope4x");
Item.createItem("scope4x","4X Scope",{name:"scope4x"});

IDRegistry.genItemID("stock");
Item.createItem("stock","Stock",{name:"Stock"});

IDRegistry.genItemID("magSmg");
Item.createItem("magSmg","Smg Magazine",{name:"magSmg"});
IDRegistry.genItemID("magAR");
Item.createItem("magAR","Auto Rifle Magazine",{name:"magAR"});
IDRegistry.genItemID("magSniper");
Item.createItem("magSniper","Sniper Mazine",{name:"magSniper"});
IDRegistry.genItemID("magP");
Item.createItem("magP","Pistol Magazine",{name:"magP"});

IDRegistry.genItemID("flashHiderSmg");
Item.createItem("flashHiderSmg","Smg Barrel",{name:"flashHiderSmg"});
IDRegistry.genItemID("compensatorAR");
Item.createItem("compensatorAR","AR Barrel",{name:"compensatorAR"});
IDRegistry.genItemID("supressorSR")
Item.createItem("supressorSR","Supressor Sniper Rifle",{name:"supressorSR"});

IDRegistry.genItemID("bandolier")
Item.createItem("bandolier","Bandolier",{name:"bandolier"});




// file: Weapons/ammo.js

ShootLib.addAmmos([{
    id:"ammo7_62",
    name:"7.62",
    texture:{
        name:"7.62",
        meta:0
    }
},{
    id:"ammo5_56",
    name:"5.56",
    texture:{
        name:"5.56",
        meta:0
    }
},{
    id:"ammo9mm",
    name:"9mm",
    texture:{
        name:"9mm",
        meta:0
    }
},{
    id:"ammo45Acp",
    name:".45ACP",
    texture:{
        name:"45Acp",
        meta:0
    }
},{
    id:"ammo20",
    name:"20 Cells",
         texture:{
         name:"20cells",
    meta:0
    }
},{
	  id:"ammoFlare",
	  name:"Flare",
	  texture:{
	   	     name:"ammoFlare",
	   	     meta:0
	   }
},{
    id:"ammoAwm",
    name:".300 Magnum",
    texture:{
         name:"300Magnum",
         meta:0
    }
},]);




// file: Recipes/recipeP.js

Callback.addCallback("GunsDefined",function(){
Recipes.addShaped({id:ItemID.recrent,count:1,data:0}, [
      "aaa",
      "aax",
      "axa"
      ], ['x',265,0,'a',266,0]);
Recipes.addShaped({id:ItemID.p18c,count:1,data:0}, [
      " xa",
      " xa",
      " m "
      ], ['x',265,0,'a',266,0,'m',ItemID.magP,0]);
Recipes.addShaped({id:ItemID.p92,count:1,data:0}, [
      " xa",
      "xaa",
      " m "
      ], ['x',265,0,'a',266,0,'m',ItemID.magP,0]);
Recipes.addShaped({id:ItemID.p1911,count:1,data:0}, [
      "xxa",
      "axa",
      " m "
      ], ['x',265,0,'a',266,0,'m',ItemID.magP,0]);
Recipes.addShaped({id:ItemID.revolverAcp,count:1,data:0}, [
      "axa",
      "xxa",
      "  a"
      ], ['x',265,0,'a',266,0]);   Recipes.addShaped({id:ItemID.flaregun,count:1,data:0}, [
      "axx",
      "xxx",
      "  x"
      ], ['x',265,0,'a',351,1]);
});




// file: Recipes/recipePP.js

Callback.addCallback("GunsDefined",function(){
Recipes.addShaped({id:ItemID.ump,count:1,data:0}, [
      "aa",
      "hx",
      " c "
      ], ['x',265,0,'a',266,0,'c',ItemID.magSmg,0,'h',ItemID.flashHiderSmg,0]);
Recipes.addShaped({id:ItemID.uzi,count:1,data:0}, [
      "axa",
      "hxa",
      " c "
      ], ['x',265,0,'a',266,0,'c',ItemID.magSmg,0,'h',ItemID.flashHiderSmg,0]);
Recipes.addShaped({id:ItemID.tommyGun,count:1,data:0}, [
      "aaa",
      "hxa",
      " c "
      ], ['x',265,0,'a',266,0,'c',ItemID.magSmg,0,'h',ItemID.flashHiderSmg,0]);
Recipes.addShaped({id:ItemID.vector,caount:1,data:0}, [
      "xax",
      "h d",
      " c"
      ], ['x',265,0,'a',266,0,'c',ItemID.magSmg,0,'d',ItemID.stock,0,'h',ItemID.flashHiderSmg,0]);
});




// file: Recipes/recipeAR.js

Callback.addCallback("GunsDefined",function(){
Recipes.addShaped({id:ItemID.m416,count:1,data:0},[
	     " s ",
      "axh",
      " d "
      ], ['x',265,0,'a',ItemID.compensatorAR,0,'h',ItemID.stock,0,'d',ItemID.magAR,0,'s',ItemID.scopeRedDot,0]);
Recipes.addShaped({id:ItemID.m249,count:1,data:0},[
	     " s ",
      "xxh",
      "xxx"
      ], ['x',264,0,'s',ItemID.scopeRedDot,0,'h',ItemID.stock,0]);
Recipes.addShaped({id:ItemID.g36c,count:1,data:0},[
	     " s ",
      "axx",
      " d "
      ], ['x',265,0,'a',ItemID.compensatorAR,0,'d',ItemID.magAR,0,'s',ItemID.scopeRedDot,0]);
Recipes.addShaped({id:ItemID.m16a4,count:1,data:0},[
	     " s ",
      "axh",
      " d "
      ], ['x',266,0,'a',ItemID.compensatorAR,0,'h',ItemID.stock,0,'d',ItemID.magAR,0,'s',ItemID.scopeRedDot,0]);
Recipes.addShaped({id:ItemID.qbz,count:1,data:0},[
	     " s ",
      "axx",
      " d "
      ], ['x',264,0,'a',ItemID.compensatorAR,0,'d',ItemID.magAR,0,'s',ItemID.scopeRedDot,0]);
Recipes.addShaped({id:ItemID.mk47,count:1,data:0},[
	     " s ",
      "axl",
      " d "
      ], ['x',266,0,'a',ItemID.compensatorAR,0,'l',264,0,'d',ItemID.magAR,0,'s',ItemID.scope4x,0]);

Recipes.addShaped({id:ItemID.akm,count:1,data:0}, [
      " s ",
      "hxa",
      " d "
      ], ['a',264,0,'x',265,0,'h',ItemID.compensatorAR,0,'d',ItemID.magAR,0,'s',ItemID.scopeRedDot,0]);
Recipes.addShaped({id:ItemID.beril,count:1,data:0}, [
      " s ",
      "haa",
      " d "
      ], ['a',264,0,'h',ItemID.compensatorAR,0,'d',ItemID.magAR,0,'s',ItemID.scopeRedDot,0]);
Recipes.addShaped({id:ItemID.dp28,count:1,data:0}, [
      " s ",
      "xax",
      "aax"
      ], ['a',264,0,'x',265,0,'s',ItemID.scopeRedDot,0]);
});




// file: Recipes/recipeMG.js

Callback.addCallback("GunsDefined",function(){
Recipes.addShaped({id:ItemID.dp28,count:1,data:0}, [
      " s ",
      "xax",
      "aax"
      ], ['a',264,0,'x',265,0,'s',ItemID.scopeRedDot,0]);
});




// file: Recipes/recipeDMR.js

Callback.addCallback("GunsDefined",function(){
Recipes.addShaped({id:ItemID.mini14,count:1,data:0}, [
      " s ",
      "hax",
      " d "
      ], ['s',ItemID.scope4x,0,'a',266,0,'d',ItemID.magSniper,0,'x',ItemID.stock,0,'h',ItemID.supressorSR,0]);
Recipes.addShaped({id:ItemID.slr,count:1,data:0}, [
      " s ",
      "hax",
      " d "
      ], ['s',ItemID.scope4x,0,'a',266,0,'d',ItemID.magSniper,0,'x',264,0,'h',ItemID.supressorSR,0]);
Recipes.addShaped({id:ItemID.sks,count:1,data:0}, [
      " s ",
      "haa",
      " d "
      ], ['s',ItemID.scope4x,0,'a',266,0,'d',ItemID.magSniper,0,'h',ItemID.supressorSR,0]);
Recipes.addShaped({id:ItemID.vss,count:1,data:0}, [
      " s ",
      "aaa",
      " d "
      ], ['s',266,0,'a',266,0,'d',ItemID.magSniper,0]);
});




// file: Recipes/recipeSR.js

Callback.addCallback("GunsDefined",function(){
Recipes.addShaped({id:ItemID.kar98k,count:1,data:0}, [
      " s ",
      "gxb",
      "aaa"
      ], ['x',265,0,'a',266,0,'s',ItemID.scope4x,0,'g',ItemID.supressorSR,0,'b',ItemID.bandolier,0]);
Recipes.addShaped({id:ItemID.m24,count:1,data:0}, [
      " s ",
      "gxx",
      "aaa"
      ], ['x',265,0,'a',266,0,'s',ItemID.scope4x,0,'g',ItemID.supressorSR,0]);
Recipes.addShaped({id:ItemID.win94,count:1,data:0}, [
      "xaa",
      "aab",
      "  a"
      ], ['x',266,0,'a',265,0,'b',ItemID.bandolier,0]);
});




// file: Recipes/recipeETC.js

Callback.addCallback("GunsDefined",function(){
Recipes.addShaped({id:ItemID.boostPainkiller,count:2,data:0}, [
      " x ",
      " c ",
      "aaa"
      ], ['x',354,0,'a',353,0,'c',ItemID.boost,0]);
Recipes.addShaped({id:ItemID.boost,count:3,data:0}, [
      " c ",
      " x ",
      "aaa"
      ], ['a',353,0,'c',357,0,'x',373,0]);
Recipes.addShaped({id:ItemID.scope4x,count:1,data:0}, [
      "axa",
      "sss",
      "xxx"
      ], ['x',265,0,'s',20,0,'a',264,0]);
Recipes.addShaped({id:ItemID.scopeRedDot,count:1,data:0}, [
      " s ",
      "sss",
      "axa"
      ], ['s',20,0,'a',264,0,'x',265,0]);
Recipes.addShaped({id:ItemID.magSmg,count:1,data:0}, [
      " xx",
      " xx",
      "xx "
      ], ['x',265,0,]);
Recipes.addShaped({id:ItemID.magSniper,count:1,data:0}, [
      "xax",
      "xax",
      " x "
      ], ['x',265,0,'a',266,0]);
Recipes.addShaped({id:ItemID.magAR,count:1,data:0}, [
      " xa",
      " xa",
      "xa "
      ], ['x',265,0,'a',266,0]);
Recipes.addShaped({id:ItemID.magP,count:1,data:0}, [
      "xa",
      "xa",
      "xa "
      ], ['x',265,0,'a',266,0]);
Recipes.addShaped({id:ItemID.flashHiderSmg,count:1,data:0}, [
      " xx",
      "xaa",
      " xx"
      ], ['x',265,0,'a',266,0]);
Recipes.addShaped({id:ItemID.compensatorAR,count:1,data:0}, [
      " xa",
      "xaa",
      " xa"
      ], ['x',265,0,'a',266,0]);
Recipes.addShaped({id:ItemID.supressorSR,count:1,data:0}, [
      "axa",
      "axa",
      ""
      ], ['x',265,0,'a',266,0]);
Recipes.addShaped({id:ItemID.stock,count:1,data:0}, [
      "xxx",
      " xx",
      "  x"
      ], ['x',265,0]);
});




// file: Recipes/recipeAmmo.js

Callback.addCallback("GunsDefined",function(){
Recipes.addShaped({id:ItemID.ammo5_56,count:32,data:0}, [
      "xa",
      "axx",
      "axa"
      ], ['x',265,0,'a',266,0]);
Recipes.addShaped({id:ItemID.ammo7_62,count:32,data:0}, [
      "xaa",
      "aax",
      "aaa"
      ], ['x',265,0,'a',266,0]);
Recipes.addShaped({id:ItemID.ammoAwm,count:20,data:0}, [
      "xax",
      "xxa",
      "xxx"
      ], ['x',265,0,'a',266,0]);
Recipes.addShaped({id:ItemID.ammo9mm,count:64,data:0}, [
      "xax",
      "aaa",
      "xxx"
      ], ['x',265,0,'a',266,0]);
Recipes.addShaped({id:ItemID.ammo45Acp,count:64,data:0}, [
      "xax",
      "aaa",
      "aaa"
      ], ['x',265,0,'a',266,0]);
Recipes.addShaped({id:ItemID.ammoFlare,count:1,data:0}, [
      "axa",
      "xax",
      "axa"
      ], ['x',264,0,'a',351,1]);
});




