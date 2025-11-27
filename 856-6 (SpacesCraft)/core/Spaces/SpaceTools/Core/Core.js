IMPORT("TileRender");
IMPORT("EnergyNet");
IMPORT("StorageInterface");
IMPORT("ScrutinyAPI");
IMPORT("ItemAnimHelper");
IMPORT("BlockEngine");

let sj = EnergyTypeRegistry.assureEnergyType("spacejoule", 0.25);
//Космическая энергия
let ob = EnergyTypeRegistry.assureEnergyType("oxygenbar", 0.25);
let stj = EnergyTypeRegistry.assureEnergyType("strengthjoule", 1);
var EU = EnergyTypeRegistry.assureEnergyType("Eu", 1);

var RF = EnergyTypeRegistry.assureEnergyType("Rf", 0.25);
//Кислород
/*Mod by SpacesCraftTeam - ArtemOn,Demerror,Arsenilay,Temp0zz
 Moderator of pablic in vkontakte is Nikita - Temp0ss/Никита Киркоров
 ArtemOn)Артём Борисенков
 Demerror - Дима (фамилию размещать не буду т.к он врядли будет за)
 Arsenilay - Арсений Заусайлов
 ArtemOn - texture,code,idea.Demerror - more texture.Arsenilay - 3D models obj.(don't  more).
 Based on Inner core под Horizon...
 */
 Callback.addCallback('LevelDisplayed', function () {
    Game.message("§l§6Мод SpacesCraft был успешно загружен!")
});

var SpacesConfiguration = {Экипировка: {coords: __config__.getFloat('Экипировка.coords'), twocoords: __config__.getFloat('Экипировка.twocoords'), threecoords: __config__.getFloat('Экипировка.threecoords')}};

var EquipMent = new UI.Window({
	location: {
    	x: SpacesConfiguration.Экипировка.coords / SpacesConfiguration.Экипировка.twocoords - SpacesConfiguration.Экипировка.threecoords,
        y: 60,
        width: 145,
        height: 347
    },
    drawing: [{type: "bitmap", bitmap:"SPC.gray", scale: 700 ,x: 0,y: 0}, 	{type: "frame", bitmap: "classic_frame_bg_light", scale: 10, width: 1000, height: 2400, y: 0}],
    elements: {
        "Head": {
        	type: "slot", 
			x: 60, 
			y: 80, 
			size: 300,
			bitmap:"SPC.SPC_Head"
		},
		"Body": {
			type: "slot",
			x:60,
			y:380,
			size:300,
			bitmap: "SPC.SPC_Body"
		},
		"Legs": {
			type: "slot",
			x:60,
			y:680,
			size:300,
			bitmap: "SPC.SPC_Legs"
		},
		"Boots" : {
			type: "slot",
			x:60,
			y:980,
			size:300,
			bitmap: "SPC.SPC_LegTwoS"
		},
		"Ballone1" : {
			type: "slot",
			x:60,
			y:1430,
			size:300,
			bitmap: "SPC.SPC_Tank"
		},
		"Ballone2": {
		type: "slot",
			x: 480,
			y:1430,
			size:300,
			bitmap: "SPC.SPC_Tank"
		},
     }
  }
);



let Snariadjenie = new UI.Container();

Callback.addCallback("NativeGuiChanged", function(screenName){ 
    if(screenName == "survival_inventory_screen" || screenName == "creative_inventory_screen" || screenName == "inventory_screen" || screenName == "inventory_screen_pocket"){ 
        Snariadjenie.openAs(EquipMent);
    } else {
        Snariadjenie.close();
    } 
});

Item.registerUseFunction("extra_oxygen_tank", function(coords, item, block, player){
	this.container.getSlot("Ballone1").id;
	this.container.setSlot("Ballone1", ItemID.extra_oxygen_tank, 1 ,0);
	         //Entity.setCarriedItem(player, item.id, item.count - 1, item.data);
}); 

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