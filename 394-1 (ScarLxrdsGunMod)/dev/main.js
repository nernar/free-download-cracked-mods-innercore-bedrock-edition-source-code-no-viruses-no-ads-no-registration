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

ShootLib.addGun({
    id:"mp5",
    name:"MP5",
    ammo:"mp5ammo",
    accuracy:2,
    recoil:0,
    rate:4,
    texture:{
        name:"mp5",
        meta:0
    },
    shotType:ShotType.NORMAL,
    buttonType:ButtonType.TOUCH,
    bullet:{
        speed:4,
        count:30,
        damage:4
    },
    fov:{
        level:10
    },
    sounds:{
        shot:"Mp5Shoot.ogg",
        empty:"EmptyGun.mp3",
        reload:"reload/MP44Reload.ogg"
    }
});

ShootLib.addAmmos([{
    id:"mp5ammo",
    name:"MP5 Clip",
    texture:{
        name:"mp5ammo",
        meta:0
    }
},]);