ShootLib.addGun({
    id:"m16a4",
    name:"M16A4",
    ammo:"ammoassault",
    accuracy:2.5,
    recoil:2,
    rate:5,
    texture:{
        name:"m16a4",
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
        shot:"m16a4/shot.ogg",
        empty:"EmptyGun.mp3",
        reload:"ak47/reload.ogg"
    }
});

Callback.addCallback("GunsDefined", function(){
    RecipeTE.addGridRecipe("guns_workbench", "m16a4", ["pi"], {i:{id:265}, "p":{id:ItemID["rifle_base"]}}, GUN_PRODUCTION_TIME);
});