ShootLib.addGun({
    id:"ak47",
    name:"AK-47",
    ammo:"ammoassault",
    accuracy:5,
    recoil:3,
    rate:5,
    texture:{
        name:"ak47",
        meta:0
    },
    shotType:ShotType.NORMAL,
    buttonType:ButtonType.TOUCH,
    bullet:{
        speed:10,
        count:30,
        damage:8
    },
    fov:{
        level:4
    },
    sounds:{
        shot:"ak47/shot.ogg",
        empty:"EmptyGun.mp3",
        reload:"ak47/reload.ogg"
    }
});

Callback.addCallback("GunsDefined", function(){
    RecipeTE.addGridRecipe("guns_workbench", "ak47", ["ip"], {i:{id:265}, "p":{id:ItemID["rifle_base"]}}, GUN_PRODUCTION_TIME);
});