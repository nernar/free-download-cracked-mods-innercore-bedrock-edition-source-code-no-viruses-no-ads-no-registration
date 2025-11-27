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
    id:"Ak47",
    name:"AK-47",
    ammo:"Akpatron",
    accuracy:5,
    recoil:3,
    rate:6,
    texture:{
        name:"Ak47",
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
        shot:"ShootAK.ogg",
        empty:"EmptyAK.ogg",
        reload:"ReloadAK.ogg"
    }
});
ShootLib.addGun({
    id:"Ppsh",
    name:"SGS",
    ammo:"Ppshpatron",
    accuracy:5,
    recoil:1,
    rate:6,
    texture:{
        name:"Ppsh",
        meta:0
    },
    shotType:ShotType.NORMAL,
    buttonType:ButtonType.TOUCH,
    bullet:{
        speed:20,
        count:71,
        damage:30
    },
    fov:{
        level:10
    },
    sounds:{
        shot:"ShootAK.ogg",
        empty:"EmptyAK.ogg",
        reload:"ReloadAK.ogg"
    }
});
ShootLib.addAmmos([{
    id:"Akpatron",
    name:"AK Bullets",
    texture:{
        name:"akpatron",
        meta:0
    }
},{
    id:"Ppshpatron",
    name:"SGS Bullets",
    texture:{
        name:"Ppshpatron",
        meta:0
    }
},]);
IDRegistry.genItemID("Ak47")

Recipes.addShaped({id: ItemID.Ak47, count: 1, data: 0}, [
	"abb",
	" cb",
	" aa"
], ['a', 265 , 0, 'b', 5, 0, 'c', 331, 0]);
IDRegistry.genItemID("Ppsh")

Recipes.addShaped({id: ItemID.Ppsh, count: 1, data: 0}, [
	"abb",
	"aac",
	" aa"
], ['a', 265 , 0, 'b', 356, 0, 'c', ItemID.Plast, 0]);
IDRegistry.genItemID("Akpatron")

Recipes.addShaped({id: ItemID.Akpatron, count: 1, data: 0}, [
	"",
	"cb",
	"ac"
], ['a', 265 , 0, 'b', 331, 0, 'c', 289, 0]);
IDRegistry.genItemID("Ppshpatron")

Recipes.addShaped({id: ItemID.Ppshpatron, count: 1, data: 0}, [
	"bbb",
	"cac",
	"bbb"
], ['a', 265 , 0, 'b', 331, 0, 'c', 289, 0]);