ShootLib.addAmmos([{
    id:"ammohandgun",
    name:"Handgun Ammo",
    texture:{
        name:"ammohandgun",
        meta:0
    }
}]);
ShootLib.addAmmos([{
    id:"ammoassault",
    name:"Assault Rifle Ammo",
    texture:{
        name:"ammoassault",
        meta:0
    }
}]);
Callback.addCallback("GunsDefined", function(){
    RecipeTE.addGridRecipe("guns_workbench", {id:"ammohandgun", count:4}, ["p", "i", "i"], {p:{id:289},i:{id:265}}, GUN_COMPONENT_PRODUCTION_TIME);
    RecipeTE.addGridRecipe("guns_workbench", {id:"ammoassault", count:4}, [" p", " i", " i", "i "], {p:{id:289},i:{id:265}}, GUN_COMPONENT_PRODUCTION_TIME);
});