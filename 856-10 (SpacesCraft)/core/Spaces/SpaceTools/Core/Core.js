IMPORT("TileRender");
IMPORT("EnergyNet");
IMPORT("StorageInterface");
IMPORT("ScrutinyAPI");
IMPORT("ItemAnimHelper");
IMPORT("BlockEngine");
IMPORT("SoundAPI");
var RV = ModAPI.requireAPI("RecipeViewer")

let sj = EnergyTypeRegistry.assureEnergyType("spacejoule", 0.25);
//Космическая энергия
let ob = EnergyTypeRegistry.assureEnergyType("oxygenbar", 0.25);
let stj = EnergyTypeRegistry.assureEnergyType("strengthjoule", 1);
var EU = EnergyTypeRegistry.assureEnergyType("Eu", 1);

var RF = EnergyTypeRegistry.assureEnergyType("Rf", 0.25);
var ft = EnergyTypeRegistry.assureEnergyType("FutureTock", 0.25);
//Кислород

 Callback.addCallback('LevelDisplayed', function () {
    Game.message("§l§6Мод SpacesCraft был успешно загружен!")
});

var SpacesConfiguration = {Экипировка: {coords: __config__.getFloat('Экипировка.coords'), twocoords: __config__.getFloat('Экипировка.twocoords'), threecoords: __config__.getFloat('Экипировка.threecoords')}};

let Snariadjenie = new UI.Container();
let O2UI = new UI.Container();
var Equi = new UI.Container();
Callback.addCallback("NativeGuiChanged", function(screenName){ 
    if(screenName == "survival_inventory_screen" || screenName == "creative_inventory_screen" || screenName == "inventory_screen" || screenName == "inventory_screen_pocket"){ 
        Snariadjenie.openAs(openEquip);
   //     O2UI.openAs(OxygenInformation);
    } else {
        Snariadjenie.close();
        //O2UI.close();
    } 
});

let openEquip = new UI.Window({
    location: {
        x: 0,
        y: UI.getScreenHeight() / 2 - 150,
        width: 52,
        height: 52
    },

    drawing: [
        {type: "color", color: android.graphics.Color.argb(0, 0, 0, 0)}
    ],

    elements: {
        "btn": {
            type: "button", x: 0, y: 0, bitmap: "SPC.SPC_but", scale: 55, clicker: {
                onClick: function () {
                    Equi.openAs(EquipMent);
                    Snariadjenie.close();
                }
            }
        }
    }
});

var EquipMent = new UI.Window({
	location: {
    	x: SpacesConfiguration.Экипировка.coords / SpacesConfiguration.Экипировка.twocoords - SpacesConfiguration.Экипировка.threecoords,
        y: 60,
        width: 900,
        height: 417
    },
    drawing: [{type: "color", color: android.graphics.Color.argb(0, 0, 0, 0)}, 	{type: "frame", bitmap: "classic_frame_bg_light", scale: 2, width: 900, height: 417, y: 0},{type: "bitmap",bitmap:"arrow_bar_1",scale: 3,x: 140,y: 110}],
    elements: {
        "Head": {
        	type: "slot", 
			x: 30, 
			y: 30, 
			size: 50,
			bitmap:"SPC.SPC_Head"
		},
		"Body": {
			type: "slot",
			x:30,
			y:80,
			size:50,
			bitmap: "SPC.SPC_Body"
		},
		"Legs": {
			type: "slot",
			x:30,
			y:130,
			size:50,
			bitmap: "SPC.SPC_Legs"
		},
		"Boots" : {
			type: "slot",
			x:30,
			y:180,
			size:50,
			bitmap: "SPC.SPC_LegTwoS"
		},
		"Ballone1" : {
			type: "slot",
			x:30,
			y:270,
			size:50,
			bitmap: "SPC.SPC_Tank"
		},
		"Ballone2": {
		type: "slot",
			x:80,
			y:270,
			size:50,
			bitmap: "SPC.SPC_Tank"
		},
		        "AntiDamage": {
        	type: "slot", 
			x: 160, 
			y: 270, 
			size: 50,
			bitmap:"SPC.SPC_AntiDamage"
		},
		"1Armor": {
        	type: "invSlot", 
			x: 210, 
			y: 30, 
			size: 50,
			index: 103
		},
				"2Armor": {
        	type: "invSlot", 
			x: 210, 
			y: 80, 
			size: 50,
			index: 102
		},
				"3Armor": {
        	type: "invSlot", 
			x: 210, 
			y: 130, 
			size: 50,
			index: 101
		},
				"4Armor": {
        	type: "invSlot", 
			x: 210, 
			y: 180, 
			size: 50,
			index: 100
		},
			   "Glass": {
        	type: "slot", 
			x: 80, 
			y: 30, 
			size: 50,
			bitmap:"SPC.SPC_Glass"
			 },
			 "Module": {
        	type: "slot", 
			x: 80, 
			y: 130, 
			size: 50,
			bitmap:"SPC.SPC_Module"
		},
		 "Frequency": {
        	type: "slot", 
			x: 80, 
			y: 80, 
			size: 50,
			bitmap:"SPC.SPC_Frequency"
		},
		 "Parachute": {
        	type: "slot", 
			x: 80, 
			y: 180, 
			size: 50,
			bitmap:"SPC.SPC_Parachute"
		},
			"Inv1": {
        	type: "invSlot", 
			x: 250, 
			y:340, 
			size: 50,
			index: 0
	},	"Inv2": {
        	type: "invSlot", 
			x: 300, 
			y:340, 
			size: 50,
			index: 1
	},	"Inv3": {
        	type: "invSlot", 
			x: 350, 
			y:340, 
			size: 50,
			index: 2
		},
			"Inv4": {
        	type: "invSlot", 
			x: 400, 
			y:340, 
			size: 50,
			index: 3
		},			"Inv5": {
        	type: "invSlot", 
			x: 450, 
			y:340, 
			size: 50,
			index: 4
		},
					"Inv6": {
        	type: "invSlot", 
			x: 500, 
			y:340, 
			size: 50,
			index: 5
		},
					"Inv7": {
        	type: "invSlot", 
			x: 550, 
			y:340, 
			size: 50,
			index: 6
		},
					"Inv8": {
        	type: "invSlot", 
			x: 600, 
			y:340, 
			size: 50,
			index: 7
		},
							"Inv9": {
        	type: "invSlot", 
			x: 650, 
			y:340, 
			size: 50,
			index: 8
		},
		/*"Info": {
        	type: "button", 
			x: 20, 
			y: 340, 
			scale: 5,
			bitmap:"PKOn",
			clicker: {
            onClick: function(player){
            ScrutinyAPI.open(player, "SpacesCraftTab");
            }
		}
		},	*/
		"Clousing": {
        	type: "button", 
			x: 20, 
			y: 340, 
			scale: 5,
			bitmap:"PKOf",
			clicker: {
            onClick: function(){
     Snariadjenie.openAs(openEquip);
     Equi.close();
            }
		}
		},
     }
  }
);


var OxygenInformation = new UI.Window({
	location: {
    	x: 850,
        y: 10,
        width: 145,
        height: 155
    },
    drawing: [{type: "color", color: android.graphics.Color.argb(0, 0, 0, 0)}],
    elements: {
        "O2ONE": {
        	type: "button", 
			x: 190, 
			y: 0, 
			scale: 18,
			bitmap:"SPC.OxygenTwo"
		},
		        "O2TWO": {
        	type: "button", 
			x: 570, 
			y: 0, 
			scale: 18,
			bitmap:"SPC.OxygenTwo"
		},

     }
  }
);
EquipMent.setInventoryNeeded(true);

/*var UpdateOxygen = {update: function(){Updatable.addUpdatable(OxygenWorking)}}

var OxygenWorking = { update: function(){
       /* var O2TWO = O2UI.getScale(O2ONE);
    var O2ONE = O2UI.getScale(O2ONE);
    for(var i in OS){
        
    if(
        Snariadjenie.getSlot(Ballone2).id == OS[i].id ||
    Snariadjenie.getSlot(Ballone1).id == OS[i].id
    ){
        O2UI.openAs(OxygenInformation)}}
Updatable.addUpdatable(UpdateOxygen)
}}

Callback.addCallback("LevelLoaded",function(){
    Updatable.addUpdatable(UpdateOxygen);
});*/


var BLOCK_TYPE_STAIRS_GL = Block.createSpecialType({
    lightopacity: 1,
   destroytime: .4,
    sound: "glass"
});

var BLOCK_TYPE_FENCE_GL = Block.createSpecialType({
    lightopacity: 1,
    renderlayer: 1,
    rendertype: 11,
    sound: "glass"
});

var BLOCK_TYPE_FENCEE_GL = Block.createSpecialType({
    lightopacity: 1,
    renderlayer: 1,
    rendertype: 32,
    sound: "glass"
});

var BLOCK_TYPE_GLASS = Block.createSpecialType({ 
    explosionres: 05,
    lightopacity: 1,
    destroytime: .4,
    renderlayer: 1,
    sound: "glass"
});

var BLOCK_TYPE_STAIRS = Block.createSpecialType({
    lightopacity: 1,
    destroytime: .6,
});

var BLOCK_TYPE_FENCE = Block.createSpecialType({
    lightopacity: 1,
    renderlayer: 2,
    rendertype: 11
});

var BLOCK_TYPE_FENCEE = Block.createSpecialType({
    lightopacity: 1,
    renderlayer: 2,
    rendertype: 32
});

var BLOCK_TYPE_PLANE = Block.createSpecialType({
    lightopacity: 1,
    renderlayer: 1,
    rendertype: 87,
    translucency: 1,
    sound: "glass"
});

var BLOCK_TYPE_STAIRS_WD = Block.createSpecialType({
    lightopacity: 1,
    destroytime: .4,
    sound: "wood"
});

var BLOCK_TYPE_FENCE_WD = Block.createSpecialType({
    lightopacity: 1,
    renderlayer: 2,
    rendertype: 11,
    sound: "wood"
});

const TORCH_SPACETYPE = Block.createSpecialType({ 
    destroytime: 0,
    explosionres: 0,
    renderlayer: 3, 
    rendertype: 2,
    translucency: 1,
    lightopacity: 0,
    lightlevel: 14
});

const TORCH_OFFSPACETYPE = Block.createSpecialType({ 
    destroytime: 0,
    explosionres: 0,
    renderlayer: 3, 
    rendertype: 2,
    translucency: 1,
    lightopacity: 0,
    lightlevel: 0
});

const TORCH_SPACESTYPE = Block.createSpecialType({ 
    destroytime: 0,
    explosionres: 0,
    renderlayer: 8, 
    rendertype: 2,
    translucency: 1,
    lightopacity: 0,
    lightlevel: 14
});

const WEB = Block.createSpecialType({ 
    destroytime: 4, 
    explosionres: 20,
    rendertype: 91, 
    translucency: 0.8, 
    lightopacity: 1,
    sound: "grass"
});
var SpaceRace = new Sound("spacerace_jc.ogg");

const WPPTYPE = Block.createSpecialType({ 
    destroytime: 0,
    explosionres: 0,
    translucency: 1,
    lightopacity: 0,
    lightlevel: 7
});

BlockRegistry.createBlockType("oxygentile_stairs", {
    renderLayer: 3
});