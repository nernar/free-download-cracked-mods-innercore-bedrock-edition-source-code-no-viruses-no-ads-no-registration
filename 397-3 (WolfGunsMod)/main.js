/*
BUILD INFO:
  dir: dev
  target: main.js
  files: 11
*/



// file: header.js

/**
* __        __     _  __  ____                   __  __           _ 
* \ \      / /___ | |/ _|/ ___|_   _ _ __   ____|  \/  | ___   __| |
*  \ \ /\ / // _ \| | |_| |  _| | | | '_ \ / ___| |\/| |/ _ \ / _` |
*   \ V  V /| (_) | |  _| |_| | |_| | | | |\__ \| |  | | (_) | (_| |
*    \_/\_/  \___/|_|_|  \____|\__,_|_| |_|____/|_|  |_|\___/ \__,_|
*                                                                                      
**/

IMPORT("ShootLib", "ShootLib");

var ShotType = ShootLib.ShotType;
var ButtonType = ShootLib.ButtonType;

ShootLib.init({
    fire:{
       bitmap:{ //Объект графики
            name:"guns_ui_buttons", //Имя битмапа в папке gui/ (Смотрите ваш build.config)
            coords:{ //Координаты битмапа
                x:544, //Начальная координата X
                y:0, //Начальная координата Y
                width:544, //Ширина битмапа
                height:544 //Высота битмапа
            },
            size:{ //Размер объекта в юнитах
                width:90, //Ширина объекта
                height:90 //Высота объекта
            }
        }
    },
    aim:{
        bitmap:{
            name:"guns_ui_buttons",
            coords:{
                x:0,
                y:0,
                width:544,
                height:544
            },
            size:{
                width:90,
                height:90
            }
        }
    },
    crosshair:{
        bitmap:{name:"guns_ui_buttons"}
    },
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

IMPORT("RecipeTileEntityLib");

const GUN_PRODUCTION_TIME = 6;// Production weapon time
const GUN_COMPONENT_PRODUCTION_TIME = 3;// Production time of weapon components
const ENERGY_CONSUMPTION = 5;//Energy consumption
const TICKS_IN_SECOND = 20;

//Initialization EnergyNet
var supportEnergy = false, energyEU;

IMPORT("EnergyNet");
Callback.addCallback("PostLoaded", function(){
    energyEU = EnergyTypeRegistry.getEnergyType("Eu");
    if(energyEU != undefined && __config__.access("useOnlyRedstone") == false){
        supportEnergy = true;
    }else{
        supportEnergy = false;
        if(__config__.access("useOnlyRedstone") == false)
            alert(Translation.translate("Use Redstone to power the gun workbench."));
    }
});




// file: craft_table.js

var CraftTableWindow = new UI.StandartWindow({
    standart: {
        header: {text: {text: "Guns Workbench"}},
        inventory: {standart:true},
        background: {standart: true}
    },
    drawing: [{ type: "bitmap", bitmap: "gun_workbanch_bg", x: 600, y: 170, scale: 4 }],
    elements:{
        "inputSlot0":{x:350, y:80, type:"slot"},
        "inputSlot1":{x:410, y:80, type:"slot"},
        "inputSlot2":{x:470, y:80, type:"slot"},
        "inputSlot3":{x:530, y:80, type:"slot"},
        
        "inputSlot4":{x:350, y:140, type:"slot"},
        "inputSlot5":{x:410, y:140, type:"slot"},
        "inputSlot6":{x:470, y:140, type:"slot"},
        "inputSlot7":{x:530, y:140, type:"slot"},
        
        "inputSlot8":{x:350, y:200, type:"slot"},
        "inputSlot9":{x:410, y:200, type:"slot"},
        "inputSlot10":{x:470, y:200, type:"slot"},
        "inputSlot11":{x:530, y:200, type:"slot"},
        
        "inputSlot12":{x:350, y:260, type:"slot"},
        "inputSlot13":{x:410, y:260, type:"slot"},
        "inputSlot14":{x:470, y:260, type:"slot"},
        "inputSlot15":{x:530, y:260, type:"slot"},
        
        "outputSlot":{x:698, y:170, type:"slot", isValid:RecipeTE.outputSlotValid},
        
        "progressScale":{x: 600, y: 170, type:"scale",  bitmap: "gun_workbanch_scale", scale:4}
    }
});

IDRegistry.genBlockID("gun_craft_table");
Block.createBlock("gun_craft_table", [{
    name: "Guns Workbench", 
    texture: [
        ["work_table_bottom", 0], // bottom
        ["work_table_top", 0], // top
        ["work_table_side", 0], // back
        ["work_table_side", 1], // front
        ["work_table_side", 0], // left
        ["work_table_side", 0]  // right
    ], 
    inCreative: true 
}]) 

RecipeTE.registerGridCraftTable({
    name:"guns_workbench",
    rows:4,
    cols:4,
    timer:TICKS_IN_SECOND
});

TileEntity.registerPrototype(BlockID["gun_craft_table"], {
    defaultValues:{
        power:false
    },
    
    getGuiScreen: function(){
        return CraftTableWindow;
    },
    
    tick:function(){
        RecipeTE.getTickRecipes("guns_workbench", this, function(TE){
            return TE.data.power;
        });
    },
    
    redstone: function(params){
        if(supportEnergy == true) return;
        
        if(params.power < 10)
            this.data.power = false;
        else
            this.data.power = true;
    },
    
    /* For EnergyNet */
    energyReceive:function(energy, amount){
        if(amount >= ENERGY_CONSUMPTION){
            this.data.power = true;
            return ENERGY_CONSUMPTION;
        }else{
            this.data.power = false;
            return amount;
        }
    },
    
    canReceiveEnergy:function(s,t){
        return s != 1 && s != 0;
    }
});

Callback.addCallback("PostLoaded", function(){
    Recipes.addShaped({id: BlockID["gun_craft_table"], count: 1, data: 0}, [
        "sis",
        "ibi",
        "sis"
    ], ['s', 287, 0,'i', 265, 0, 'b', 42, 0]); 
    
    if(supportEnergy){
        ICRender.getGroup("ic-wire").add(BlockID["gun_craft_table"], -1);
        EnergyTileRegistry.addEnergyTypeForId(BlockID["gun_craft_table"], energyEU);
    }
});




// file: guns/components.js

IDRegistry.genItemID("pistol_base");
Item.createItem("pistol_base", "Pistol Base", {name:"pistol_base"}, {stack: 16})

RecipeTE.addGridRecipe("guns_workbench", "pistol_base", ["iii", "  i"], {i:{id:265}}, GUN_COMPONENT_PRODUCTION_TIME);

IDRegistry.genItemID("rifle_base");
Item.createItem("rifle_base", "Rifle Base", {name:"rifle_base"}, {stack: 16})

RecipeTE.addGridRecipe("guns_workbench", "rifle_base", ["iiii", "  i "], {i:{id:265}}, GUN_COMPONENT_PRODUCTION_TIME);




// file: guns/pm.js

ShootLib.addGun({
    id:"pm",
    name:"PM",
    ammo:"ammohandgun",
    accuracy:6,
    recoil:4,
    rate:10,
    texture:{
        name:"pm",
        meta:0
    },
    shotType:ShotType.NORMAL,
    buttonType:ButtonType.CLICK,
    bullet:{
        speed:10,
        count:8,
        damage:5
    },
    fov:{
        level:2
    },
    sounds:{
        shot:"pm/shot.ogg",
        empty:"EmptyGun.mp3",
        reload:"pm/reload.ogg"
    }
});
Callback.addCallback("GunsDefined", function(){
    RecipeTE.addGridRecipe("guns_workbench", "pm", ["ip"], {i:{id:265}, "p":{id:ItemID["pistol_base"]}}, GUN_PRODUCTION_TIME);
})




// file: guns/m9.js

ShootLib.addGun({
    id:"m9",
    name:"M9",
    ammo:"ammohandgun",
    accuracy:6,
    recoil:4,
    rate:10,
    texture:{
        name:"m9",
        meta:0
    },
    shotType:ShotType.NORMAL,
    buttonType:ButtonType.CLICK,
    bullet:{
        speed:10,
        count:15,
        damage:5
    },
    fov:{
        level:2
    },
    sounds:{
        shot:"m9/shot.ogg",
        empty:"EmptyGun.mp3",
        reload:"pm/reload.ogg"
    }
});

Callback.addCallback("GunsDefined", function(){
    RecipeTE.addGridRecipe("guns_workbench", "m9", ["i", "p"], {i:{id:265}, "p":{id:ItemID["pistol_base"]}}, GUN_PRODUCTION_TIME);
});




// file: guns/deserteagle.js

ShootLib.addGun({
    id:"deserteagle",
    name:"Desert Eagle",
    ammo:"ammohandgun",
    accuracy:6,
    recoil:4,
    rate:1,
    texture:{
        name:"deserteagle",
        meta:0
    },
    shotType:ShotType.NORMAL,
    buttonType:ButtonType.CLICK,
    bullet:{
        speed:10,
        count:7,
        damage:10
    },
    fov:{
        level:2
    },
    sounds:{
        shot:"deserteagle/shot.ogg",
        empty:"EmptyGun.mp3",
        reload:"deserteagle/reload.ogg"
    }
});

Callback.addCallback("GunsDefined", function(){
    RecipeTE.addGridRecipe("guns_workbench", "deserteagle", [" i", "ip"], {i:{id:265}, "p":{id:ItemID["pistol_base"]}}, GUN_PRODUCTION_TIME);
});




// file: guns/sigp226.js


ShootLib.addGun({
    id:"sigp226",
    name:"SIGP226",
    ammo:"ammohandgun",
    accuracy:6,
    recoil:3,
    rate:1,
    texture:{
        name:"sigp226",
        meta:0
    },
    shotType:ShotType.NORMAL,
    buttonType:ButtonType.CLICK,
    bullet:{
        speed:10,
        count:10,
        damage:6
    },
    fov:{
        level:2
    },
    sounds:{
        shot:"sigp/shot.ogg",
        empty:"EmptyGun.mp3",
        reload:"deserteagle/reload.ogg"
    }
});
Callback.addCallback("GunsDefined", function(){
    RecipeTE.addGridRecipe("guns_workbench", "sigp226", ["pi"], {i:{id:265}, "p":{id:ItemID["pistol_base"]}}, GUN_PRODUCTION_TIME);
})




// file: guns/ak47.js

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




// file: guns/m16a4.js

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




// file: ammos.js

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




// file: translate.js

//ammos.js
Translation.addTranslation("Handgun Ammo",{
    ru:"Патроны к пистолету",
    en:"Handgun Ammo"
});
Translation.addTranslation("Assault Rifle Ammo",{
    ru:"Патроны к штурмовой винтовке",
    en:"Assault Rifle Ammo"
});

//guns
Translation.addTranslation("PM",{
    ru:"ПМ",
    en:"PM"
});
Translation.addTranslation("Desert Eagle",{
    ru:"Пустынный Орёл",
    en:"Desert Eagle"
});

//guns/components
Translation.addTranslation("Pistol Base",{
    ru:"Основа для пистолета",
    en:"Pistol Base"
});

//craft_table
Translation.addTranslation("Guns Workbench",{
    ru:"Оружейный верстак",
    en:"Guns Workbench"
});

//header

Translation.addTranslation("Use Redstone to power the gun workbench.",{
    ru:"Используйте редстоун для питания оружейного верстака.",
    en:"Use Redstone to power the gun workbench."
})




