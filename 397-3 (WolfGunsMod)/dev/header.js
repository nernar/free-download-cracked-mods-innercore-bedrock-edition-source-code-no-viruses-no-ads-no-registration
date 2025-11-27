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