/*
BUILD INFO:
  dir: dev
  target: main.js
  files: 3
*/



// file: modpack.js

IMPORT("#modpacker"); 

ModPack.install({ name: "StoneBlock",
mods: [1, 13, 22, 25, 28, 35, 40, 43, 47, 48, 52, 59, 60, 64, 71, 82, 89, 119, 120, 143, 159, 192, 204, 206, 241, 253, 261, 280, 294, 298, 302, 316, 318, 328, 330, 339, 371, 390,  399],
});











// file: lootchest.js

IDRegistry.genItemID("lootchest");
Item.createItem("lootchest", "сундук с лутом", {name: "lootchest", meta: 0}, {stack: 1});
Item.registerUseFunction("lootchest", function(coords, item, block){
         var suk = Math.round(Math.random() * 65);
         if(suk == 0){
   Player.addItemToInventory (3, 20, 0); 
    item.count--;
	if(!item.count){item.id = 0;}
	Player.setCarriedItem(item.id, item.count, 0);
}
     if(suk == 1){         
Player.addItemToInventory (264, 2, 0);
   item.count--;
	if(!item.count){item.id = 0;}
	Player.setCarriedItem(item.id, item.count, 0);
}
       if(suk == 2){
Player.addItemToInventory (348, 10, 0);  
  item.count--;
	if(!item.count){item.id = 0;}
	Player.setCarriedItem(item.id, item.count, 0);
}
     if(suk == 3){    
Player.addItemToInventory (ItemID.ingotUranium, 5, 0);
Player.addItemToInventory (ItemID.ingotUranium2, 5, 0);
Player.addItemToInventory (ItemID.ingotIridium, 3, 0);     
    item.count--;
	if(!item.count){item.id = 0;}
	Player.setCarriedItem(item.id, item.count, 0);
}
     if(suk == 4){      
Player.addItemToInventory (261, 1, 0); 
 item.count--;
	if(!item.count){item.id = 0;}
	Player.setCarriedItem(item.id, item.count, 0);
} 
     if(suk == 5){        
Player.addItemToInventory (5, 3, 0);
           Player.addItemToInventory (280, 2, 0);
           Player.addItemToInventory (6, 1, 0);
    item.count--;
	if(!item.count){item.id = 0;}
	Player.setCarriedItem(item.id, item.count, 0);
}
    if(suk == 6){         
Player.addItemToInventory (ItemID.stonepebble, 40, 0);
  item.count--;
	if(!item.count){item.id = 0;}
	Player.setCarriedItem(item.id, item.count, 0);
}
    if(suk == 7){        
Player.addItemToInventory (409, 3, 0);
    item.count--;
	if(!item.count){item.id = 0;}
	Player.setCarriedItem(item.id, item.count, 0);
}
    if(suk == 8){        
Player.addItemToInventory (364, 5, 0);
Player.addItemToInventory (366, 5, 0);
   item.count--;
	if(!item.count){item.id = 0;}
	Player.setCarriedItem(item.id, item.count, 0);
}
    if(suk == 9){         
Player.addItemToInventory (381, 4, 0);
    item.count--;
	if(!item.count){item.id = 0;}
	Player.setCarriedItem(item.id, item.count, 0);
}
if(suk == 10){         
Player.addItemToInventory (ItemID.airon, 1, 0);
    item.count--;
	if(!item.count){item.id = 0;}
	Player.setCarriedItem(item.id, item.count, 0);
}
if(suk == 11){     
Player.addItemToInventory (ItemID.asteel, 1, 0);
    item.count--;
	if(!item.count){item.id = 0;}
	Player.setCarriedItem(item.id, item.count, 0);
}
if(suk == 12){     
Player.addItemToInventory (ItemID.adiamond, 1, 0);
    item.count--;
	if(!item.count){item.id = 0;}
	Player.setCarriedItem(item.id, item.count, 0);
}
if(suk == 13){     
Player.addItemToInventory (ItemID.aemerald, 1, 0);
    item.count--;
	if(!item.count){item.id = 0;}
	Player.setCarriedItem(item.id, item.count, 0);
}
if(suk == 14){     
Player.addItemToInventory (ItemID.anether, 1, 0);
    item.count--;
	if(!item.count){item.id = 0;}
	Player.setCarriedItem(item.id, item.count, 0);
}
if(suk == 15){     
Player.addItemToInventory (BlockID.steelblock1, 1, 0);
    item.count--;
	if(!item.count){item.id = 0;}
	Player.setCarriedItem(item.id, item.count, 0);
}
if(suk == 16){     
Player.addItemToInventory (ItemID.powerUnit, 1, 0);
Player.addItemToInventory (ItemID.powerUnitSmall, 1, 0);
    item.count--;
	if(!item.count){item.id = 0;}
	Player.setCarriedItem(item.id, item.count, 0);
}
if(suk == 17){     
Player.addItemToInventory (ItemID.sunnarium, 9, 0);
Player.addItemToInventory (ItemID.sunnarium2, 9, 0);
    item.count--;
	if(!item.count){item.id = 0;}
	Player.setCarriedItem(item.id, item.count, 0);
}
if(suk == 18){     
Player.addItemToInventory (BlockID.ASP, 2, 0);
    item.count--;
	if(!item.count){item.id = 0;}
	Player.setCarriedItem(item.id, item.count, 0);
}
if(suk == 19){     
Player.addItemToInventory (BlockID.solarPanel, 1, 0);
    item.count--;
	if(!item.count){item.id = 0;}
	Player.setCarriedItem(item.id, item.count, 0);
}
if(suk == 20){     
Player.addItemToInventory (ItemID.candyCane, 1, 0);
Player.addItemToInventory (ItemID.blueBerry, 1, 0);
Player.addItemToInventory (ItemID.Orangel, 1, 0);
    item.count--;
	if(!item.count){item.id = 0;}
	Player.setCarriedItem(item.id, item.count, 0);
}
if(suk == 21){     
Player.addItemToInventory (ItemID.Ambrosium, 4, 0);
Player.addItemToInventory (ItemID.goldAmber, 4, 0);
Player.addItemToInventory (ItemID.zaniteGemstone, 4, 0);
    item.count--;
	if(!item.count){item.id = 0;}
	Player.setCarriedItem(item.id, item.count, 0);
}
if(suk == 22){     
Player.addItemToInventory (ItemID.Whiteapl, 5, 0);
    item.count--;
	if(!item.count){item.id = 0;}
	Player.setCarriedItem(item.id, item.count, 0);
}
if(suk == 23){     
Player.addItemToInventory (89, 6, 0);
    item.count--;
	if(!item.count){item.id = 0;}
	Player.setCarriedItem(item.id, item.count, 0);
}
if(suk == 24){     
Player.addItemToInventory (ItemID.manaDiamond, 2, 0);
Player.addItemToInventory (ItemID.manaPearl, 1, 0);
    item.count--;
	if(!item.count){item.id = 0;}
	Player.setCarriedItem(item.id, item.count, 0);
}
if(suk == 25){     
Player.addItemToInventory (ItemID.manasteel, 2, 0);
Player.addItemToInventory (ItemID.manaPowder, 8, 0);
    item.count--;
	if(!item.count){item.id = 0;}
	Player.setCarriedItem(item.id, item.count, 0);
}
if(suk == 26){     
Player.addItemToInventory (ItemID.awakedIngot, 7, 0);
Player.addItemToInventory (ItemID.awakedCore, 3, 0);
    item.count--;
	if(!item.count){item.id = 0;}
	Player.setCarriedItem(item.id, item.count, 0);
}
if(suk == 27){     
Player.addItemToInventory (ItemID.awakedEnergyCore, 1, 0);
Player.addItemToInventory (ItemID.draconicCore, 1, 0);
    item.count--;
	if(!item.count){item.id = 0;}
	Player.setCarriedItem(item.id, item.count, 0);
}
if(suk == 28){     
Player.addItemToInventory (ItemID.draconiumDust, 6, 0);
Player.addItemToInventory (ItemID.draconiumIngot, 3, 0);
    item.count--;
	if(!item.count){item.id = 0;}
	Player.setCarriedItem(item.id, item.count, 0);
	}
	if(suk == 29){     
Player.addItemToInventory (BlockID.draconicSolarPanel, 1, 0);
    item.count--;
	if(!item.count){item.id = 0;}
	Player.setCarriedItem(item.id, item.count, 0);
}
if(suk == 30){     
Player.addItemToInventory (BlockID.draconiumBlock, 3, 0);
    item.count--;
	if(!item.count){item.id = 0;}
	Player.setCarriedItem(item.id, item.count, 0);
}
	if(suk == 31){     
Player.addItemToInventory (BlockID.energyCollector1, 1, 0);
    item.count--;
	if(!item.count){item.id = 0;}
	Player.setCarriedItem(item.id, item.count, 0);
}
if(suk == 32){     
Player.addItemToInventory (BlockID.dmBlock, 1, 0);
Player.addItemToInventory (BlockID.rmBlock, 1, 0);
    item.count--;
	if(!item.count){item.id = 0;}
	Player.setCarriedItem(item.id, item.count, 0);
}
if(suk == 33){     
Player.addItemToInventory (ItemID.covDust1, 6, 0);
Player.addItemToInventory (ItemID.covDust2, 6, 0);
Player.addItemToInventory (ItemID.covDust3, 6, 0);
    item.count--;
	if(!item.count){item.id = 0;}
	Player.setCarriedItem(item.id, item.count, 0);
}
if(suk == 34){     
Player.addItemToInventory (ItemID.fuelAlchemical, 8, 0);
Player.addItemToInventory (ItemID.kleinStar1, 1, 0);
    item.count--;
	if(!item.count){item.id = 0;}
	Player.setCarriedItem(item.id, item.count, 0);
}
if(suk == 35){     
Player.addItemToInventory (BlockID.pipeItemCobblestone, 4, 0);
    item.count--;
	if(!item.count){item.id = 0;}
	Player.setCarriedItem(item.id, item.count, 0);
}

if(suk == 36){     
Player.addItemToInventory (BlockID.pipeItemDiamond, 3, 0);
Player.addItemToInventory (BlockID.pipeItemGolden, 3, 0);
Player.addItemToInventory (BlockID.pipeItemIron, 3, 0);
    item.count--;
	if(!item.count){item.id = 0;}
	Player.setCarriedItem(item.id, item.count, 0);
}
if(suk == 37){     
Player.addItemToInventory (BlockID.blockMachineWooden, 3, 0);
Player.addItemToInventory (BlockID.blockMachineStone, 3, 0);
Player.addItemToInventory (BlockID.blockMachineIron, 3, 0);
    item.count--;
	if(!item.count){item.id = 0;}
	Player.setCarriedItem(item.id, item.count, 0);
}
if(suk == 38){     
Player.addItemToInventory (ItemID.gearWooden, 16, 0);
    item.count--;
	if(!item.count){item.id = 0;}
	Player.setCarriedItem(item.id, item.count, 0);
}
if(suk == 39){     
Player.addItemToInventory (ItemID.crystalFluix, 2, 0);
    item.count--;
	if(!item.count){item.id = 0;}
	Player.setCarriedItem(item.id, item.count, 0);
}
if(suk == 40){     
Player.addItemToInventory (ItemID.factoryWrench, 1, 0);
    item.count--;
	if(!item.count){item.id = 0;}
	Player.setCarriedItem(item.id, item.count, 0);
}
if(suk == 41){     
Player.addItemToInventory (BlockID.energy_cable, 5, 0);
    item.count--;
	if(!item.count){item.id = 0;}
	Player.setCarriedItem(item.id, item.count, 0);
}
if(suk == 42){     
Player.addItemToInventory (BlockID.Quarry, 1, 0);
    item.count--;
	if(!item.count){item.id = 0;}
	Player.setCarriedItem(item.id, item.count, 0);
}
if(suk == 43){     
Player.addItemToInventory (BlockID.machineEnergyNuclearReactor, 1, 0);
    item.count--;
	if(!item.count){item.id = 0;}
	Player.setCarriedItem(item.id, item.count, 0);
}
if(suk == 44){     
Player.addItemToInventory (BlockID.machineEnergyGeneratorSolar, 1, 0);
Player.addItemToInventory (BlockID.machineEnergyGeneratorStar, 1, 0);
Player.addItemToInventory (BlockID.machineEnergyGeneratorMoon, 1, 0);
    item.count--;
	if(!item.count){item.id = 0;}
	Player.setCarriedItem(item.id, item.count, 0);
}
if(suk == 45){     
Player.addItemToInventory (ItemID.storageBattery, 1, 0);
    item.count--;
	if(!item.count){item.id = 0;}
	Player.setCarriedItem(item.id, item.count, 0);
}
if(suk == 46){     
Player.addItemToInventory (ItemID.circuitAdvanced, 3, 0);
Player.addItemToInventory (ItemID.circuitBasic, 3, 0);
Player.addItemToInventory (ItemID.rubber, 10, 0);
    item.count--;
	if(!item.count){item.id = 0;}
	Player.setCarriedItem(item.id, item.count, 0);
}

if(suk == 47){     
Player.addItemToInventory (ItemID.ingotCopper, 5, 0);
Player.addItemToInventory (ItemID.ingotTin, 5, 0);
Player.addItemToInventory (ItemID.ingotLead, 5, 0);
    item.count--;
	if(!item.count){item.id = 0;}
	Player.setCarriedItem(item.id, item.count, 0);
}
if(suk == 48){     
Player.addItemToInventory (ItemID.ingotBronze, 3, 0);
Player.addItemToInventory (ItemID.ingotSteel, 3, 0);
Player.addItemToInventory (ItemID.ingotSilver, 3, 0);
    item.count--;
	if(!item.count){item.id = 0;}
	Player.setCarriedItem(item.id, item.count, 0);
}
if(suk == 49){     
Player.addItemToInventory (ItemID.upgradeMFSU, 1, 0);
Player.addItemToInventory (ItemID.upgradeFluidEjector, 1, 0);
Player.addItemToInventory (ItemID.upgradeEjector, 1, 0);
    item.count--;
	if(!item.count){item.id = 0;}
	Player.setCarriedItem(item.id, item.count, 0);
}
if(suk == 50){     
Player.addItemToInventory (ItemID.upgradeEnergyStorage, 3, 0);
Player.addItemToInventory (ItemID.upgradeOverclocker, 3, 0);
Player.addItemToInventory (ItemID.upgradeRedstone, 3, 0);
    item.count--;
	if(!item.count){item.id = 0;}
	Player.setCarriedItem(item.id, item.count, 0);
}
if(suk == 51){     
Player.addItemToInventory (BlockID.storageCESU, 1, 0);
    item.count--;
	if(!item.count){item.id = 0;}
	Player.setCarriedItem(item.id, item.count, 0);
}
if(suk == 52){     
Player.addItemToInventory (BlockID.cable_block_copper, 10, 0);
    item.count--;
	if(!item.count){item.id = 0;}
	Player.setCarriedItem(item.id, item.count, 0);
}
if(suk == 53){     
Player.addItemToInventory (BlockID.electricFurnace, 1, 0);
    item.count--;
	if(!item.count){item.id = 0;}
	Player.setCarriedItem(item.id, item.count, 0);
}
if(suk == 54){     
Player.addItemToInventory (ItemID.backpackIron, 1, 0);
    item.count--;
	if(!item.count){item.id = 0;}
	Player.setCarriedItem(item.id, item.count, 0);
}
if(suk == 55){     
Player.addItemToInventory (ItemID.backpackIron, 1, 0);
    item.count--;
	if(!item.count){item.id = 0;}
	Player.setCarriedItem(item.id, item.count, 0);
}
if(suk == 56){     
Player.addItemToInventory (ItemID.wand_master, 1, 0);
    item.count--;
	if(!item.count){item.id = 0;}
	Player.setCarriedItem(item.id, item.count, 0);
}
if(suk == 57){     
Player.addItemToInventory (ItemID.rune_ignis, 1, 0);
Player.addItemToInventory (ItemID.rune_naturae, 1, 0);
Player.addItemToInventory (ItemID.rune_sol, 1, 0);
    item.count--;
	if(!item.count){item.id = 0;}
	Player.setCarriedItem(item.id, item.count, 0);
}
if(suk == 58){     
Player.addItemToInventory (ItemID.AtomicAlloy, 1, 0);
Player.addItemToInventory (ItemID.BasicControlCircuit, 1, 0);
Player.addItemToInventory (ItemID.EliteControlCircui, 1, 0);
    item.count--;
	if(!item.count){item.id = 0;}
	Player.setCarriedItem(item.id, item.count, 0);
}
if(suk == 59){     
Player.addItemToInventory (ItemID.item_adv, 1, 0);
    item.count--;
	if(!item.count){item.id = 0;}
	Player.setCarriedItem(item.id, item.count, 0);
}
if(suk == 60){     
Player.addItemToInventory (ItemID.ingotosmium, 5, 0);
Player.addItemToInventory (ItemID.ObsidianIngot, 5, 0);
Player.addItemToInventory (ItemID.GlowstoneIngot, 5, 0);
    item.count--;
	if(!item.count){item.id = 0;}
	Player.setCarriedItem(item.id, item.count, 0);
}
if(suk == 61){     
Player.addItemToInventory (ItemID.creativeBuilderWand, 1, 0);
    item.count--;
	if(!item.count){item.id = 0;}
	Player.setCarriedItem(item.id, item.count, 0);
	}
	if(suk == 62){     
Player.addItemToInventory (ItemID.minicioEssence, 10, 0);
    item.count--;
	if(!item.count){item.id = 0;}
	Player.setCarriedItem(item.id, item.count, 0);
	}
	if(suk == 63){     
Player.addItemToInventory (ItemID.diamondSeeds, 5, 0);
Player.addItemToInventory (ItemID.emeraldSeeds, 5, 0);
Player.addItemToInventory (ItemID.quartzSeeds, 5, 0);
    item.count--;
	if(!item.count){item.id = 0;}
	Player.setCarriedItem(item.id, item.count, 0);
}
if(suk == 64){     
Player.addItemToInventory (ItemID.fireSeeds, 5, 0);
Player.addItemToInventory (ItemID.glowstoneSeeds, 5, 0);
Player.addItemToInventory (ItemID.netherSeeds, 5, 0);
    item.count--;
	if(!item.count){item.id = 0;}
	Player.setCarriedItem(item.id, item.count, 0);
}
if(suk == 65){     
Player.addItemToInventory (ItemID.steelSeeds, 1, 0);
Player.addItemToInventory (ItemID.iridiumSeeds, 1, 0);
Player.addItemToInventory (ItemID.leadSeeds, 15, 0);
    item.count--;
	if(!item.count){item.id = 0;}
	Player.setCarriedItem(item.id, item.count, 0);
}
	
});





// file: quests.js

IMPORT("SoundAPI");

var qcSound = new Sound();
qcSound.setSource("levelup.ogg");

IDRegistry.genItemID("ach");
Item.createItem("ach", "книга квестав", {name: "ach", meta: 0}, {stack: 1});

/*
IMPORT("GUILib");
х
var container = new GUI.Container();
var overlay = new GUI.Overlay({
    location: {
        x:0,
        y:0,
        width:72,
        height:72
    },
    touchable:true,
    elements:{
        "but":{
            type:"image",
            x:0,
            y:0,
            clicker:{
                onClick:function(){
                    container.open(_window);
                }
            },
            texture:{
                name:"ach.png",
                bitmap:{
                    x:0,
                    y:0,
                    width:16,
                    height:16,
                    scale:4.5
                }
            }
        }
    }
});

var _window = new GUI.Overlay({
    texture:{
       background:new android.graphics.drawable.ColorDrawable(android.graphics.Color.DKGRAY)
    },
    location: {
        x:0,
        y:0,
        width:GUI.Size.WIDTH,
        height:GUI.Size.HEIGHT
    },
    touchable:true,
    elements:{
        "center":{
            type:"image",
            x:-GUI.getUnitsInPixels(20)+GUI.Size.WIDTH/2-426,
            y:GUI.Size.HEIGHT/2-202,
            texture:{
                name:"osnova.png",
                bitmap:{
                    x:18,
                    y:81,
                    width:213,
                    height:101,
                    scale:4
                }
            },
            clicker:{
                onClick:function(){
                    container.open(overlay);
                }
            }
        }
    }
})

Callback.addCallback("LevelLoaded", function () {
   container.open(overlay);
});

Callback.addCallback("LevelLeft", function () {
   container.close();
});*/



var isGen = false;
Saver.addSavesScope("isGen", function read(scope){
    if(scope && scope.isGen) isGen = scope.isGen;
},
function save(){
    return {isGen: isGen};
});              
Callback.addCallback("NativeCommand", function (str) {
    if(isGen== false){
        if(str=="/qb"){
            Player.addItemToInventory (ItemID.ach, 1, 0);
         
        }
    }
});      

var container = new UI.Container();
var osn = new UI.StandartWindow({
	background: {color: android.graphics.Color.rgb(179, 179, 179)}, inventory: {standart: true},
	drawing: [],
	elements: {
		"image_0": {type: "image", x: 0, y: 0, bitmap: "osnova", scale: 0.9999999999999983},
		"button_0": {type: "button", x: 50, y: 474, scale: 3.2, bitmap: "help", bitmap2: "help"},
		"button_1": {type: "button", x: 286, y: 474, scale: 3.2, bitmap: "bug", bitmap2: "bug"},
		"button_2": {type: "button", x: 519, y: 474, scale: 3.2, bitmap: "quests", bitmap2: "quests", 
		clicker:{
onClick: function(position, container, tileEntity, window, canvas, scale){
container.openAs(sp);
}}},
		"closeButton_0": {type: "closeButton", x: 750, y: 474, global: true, bitmap: "exit", bitmap2: "exit", scale: 3.2},
		}});

Callback.addCallback("ItemUse", function (coords, item) {
if(item.id==ItemID.ach){
	container.openAs(osn);
	}
});

var sp = new UI.StandartWindow({
	background: {color: android.graphics.Color.rgb(179, 179, 179)}, inventory: {standart: true},
	drawing: [],
	elements: {
		"image_0": {type: "image", x: 0, y: 0, bitmap: "sp", scale: 0.9999999999999983},
		"button_0": {type: "button", x: 140, y: 80, scale: 3.2, bitmap: "sb", bitmap2: "sb", clicker:{
onClick: function(position, container, tileEntity, window, canvas, scale){
container.openAs(SBquest);
}}},
		"button_1": {type: "button", x: 140, y: 140, scale: 3.2, bitmap: "mek", bitmap2: "mek"},
		"button_2": {type: "button", x: 140, y: 200, scale: 3.2, bitmap: "mc", bitmap2: "mc"},
		"button_3": {type: "button", x: 140, y: 260, scale: 3.2, bitmap: "lm", bitmap2: "lm"},
		"button_4": {type: "button", x: 140, y: 320, scale: 3.2, bitmap: "if", bitmap2: "if"},
		"button_5": {type: "button", x: 140, y: 380, scale: 3.2, bitmap: "ic", bitmap2: "ic"},
		"button_6": {type: "button", x: 650, y: 80, scale: 3.2, bitmap: "fc", bitmap2: "fc"},
		"button_7": {type: "button", x: 650, y: 140, scale: 3.2, bitmap: "equ", bitmap2: "equ"},
		"button_8": {type: "button", x: 650, y: 200, scale: 3.2, bitmap: "de", bitmap2: "de"},
		"button_9": {type: "button", x: 650, y: 260, scale: 3.2, bitmap: "bot", bitmap2: "bot"},
		"button_10": {type: "button", x: 650, y: 320, scale: 3.2, bitmap: "aet", bitmap2: "aet"},
		/*"button_11": {type: "button", x: 395, y: 510, scale: 3.2, bitmap: "exit", bitmap2: "exit", clicker:{
onClick: function(position, container, tileEntity, window, canvas, scale){
container.close(sp);
container.close(osn);
}}},*/
		"closeButton_0": {type: "closeButton", x: 420, y: 450, global: true, bitmap: "backed", bitmap2: "backed", scale: 3.2,
	clicker:{
onClick: function(position, container, tileEntity, window, canvas, scale){
container.close(sp);
}}},
		}
});     

/*
container.setText("имя элемента текста", строка)
*/



var SBquest = new UI.StandartWindow({
	background: {color: android.graphics.Color.rgb(179, 179, 179)}, inventory: {standart: true},
	drawing: [],
	elements: {
		"image_0": {type: "image", x: -6, y: 0, bitmap: "sbquest", scale: 3.900000000000001},
		"closeButton_0": {type: "closeButton", x: 420, y: 531, global: true, bitmap: "назад", bitmap2: "назад", scale: 3.2},
		//-10 по у
		"button_1": {type: "button", x: 87, y: 80, scale: 0.9999999999999983, bitmap: "qkam", bitmap2: "qkam", 
		clicker:{
onClick: function(position, container, tileEntity, window, canvas, scale){
container.setSlot("slot_0", ItemID.stonepebble, 16, 0);
container.setText("text_1", "Начало!");
container.setText("text_0", "Получите 16 камушков ломая блок камня рукой");
container.setText("text_2", "");
}}},
		"button_2": {type: "button", x: 159, y: 80, scale: 0.9999999999999983, bitmap: "qtable", bitmap2: "qtable",
		clicker:{
onClick: function(position, container, tileEntity, window, canvas, scale){
container.setText("text_1", "Увеличение возможностей....");
container.setSlot("slot_0", BlockID.craftingtable, 1, 0);
container.setText("text_0", "Скрафтите каменный верстак из 4 блоков булыжника");
container.setText("text_2", "");
}}},
		"button_3": {type: "button", x: 230, y: 80, scale: 0.9999999999999983, bitmap: "qdirt", bitmap2: "qdirt",
		clicker:{
onClick: function(position, container, tileEntity, window, canvas, scale){
container.setText("text_1", "Земля?");
container.setSlot("slot_0", 3, 10, 0);
container.setText("text_0", "Получите 10 блоков земли, скрафтив молот и ломая");
container.setText("text_2", "им камень>булыжник>гравий>земля");
}}},
		"button_4": {type: "button", x: 300, y: 80, scale: 0.9999999999999983, bitmap: "qhook", bitmap2: "qhook",
	clicker:{
onClick: function(position, container, tileEntity, window, canvas, scale){
container.setText("text_1", "Странная палка(-_-)");
container.setSlot("slot_0", ItemID.stonehook, 1, 0);
container.setText("text_0", "Скрафтите каменный крюк из каменных палок");
container.setText("text_2", "");
}}},
		"button_6": {type: "button", x: 370, y: 80, scale: 0.9999999999999983, bitmap: "qsapling", bitmap2: "qsapling",
		clicker:{
onClick: function(position, container, tileEntity, window, canvas, scale){
container.setText("text_1", "Типа дерево?");
container.setSlot("slot_0", 6, 8, 0);
container.setText("text_0", "Получите 8 сажанцев ломая блок земли крюком");
container.setText("text_2", "");
}}},
		"button_7": {type: "button", x: 340, y: 150, scale: 0.9999999999999983, bitmap: "qcomposter", bitmap2: "qcomposter",
		clicker:{
onClick: function(position, container, tileEntity, window, canvas, scale){
container.setText("text_1", "Бочка муки;)");
container.setSlot("slot_0", ItemID.composter, 1, 0);
container.setText("text_0", "Скрафтите компостер из каменных плит");
container.setText("text_2", "");
}}},
		"button_8": {type: "button", x: 310, y: 220, scale: 0.9999999999999983, bitmap: "qbonedust", bitmap2: "qbonedust",
		clicker:{
onClick: function(position, container, tileEntity, window, canvas, scale){
container.setText("text_1", "Без скелета?!!");
container.setSlot("slot_0", 351, 4, 15);
container.setText("text_0", "Получите 4 костных муки из компостератпо рецепту ");
container.setText("text_2", "");
}}},
		"button_9": {type: "button", x: 440, y: 80, scale: 0.9999999999999983, bitmap: "qwood", bitmap2: "qwood",
		clicker:{
onClick: function(position, container, tileEntity, window, canvas, scale){
container.setText("text_1", "Наконецто!!!!");
container.setSlot("slot_0", 17, 15, 0);
container.setText("text_0", "Выростите дерево и добудьте 15 блоков древесины");
container.setText("text_2", "");
}}},
		"button_10": {type: "button", x: 430, y: 150, scale: 0.9999999999999983, bitmap: "qchest", bitmap2: "qchest",
		clicker:{
onClick: function(position, container, tileEntity, window, canvas, scale){
container.setText("text_1", "Увеличим инвентарь?");
container.setSlot("slot_0", 54, 2, 0);
container.setText("text_0", "Скрафть два сундука");
container.setText("text_2", "");
}}},
		"button_11": {type: "button", x: 420, y: 220, scale: 0.9999999999999983, bitmap: "qdrawer", bitmap2: "qdrawer",
		clicker:{
onClick: function(position, container, tileEntity, window, canvas, scale){
container.setText("text_1", "Мне надо ещееее!");
container.setSlot("slot_0", BlockID.stoneDrawer, 9, 0);
container.setText("text_0", "Скрафть 9 большых каменных ящиков из компресованого");
container.setText("text_2", "булыжника");
}}},
		"button_12": {type: "button", x: 510, y: 80, scale: 0.9999999999999983, bitmap: "qstring", bitmap2: "qstring",
		clicker:{
onClick: function(position, container, tileEntity, window, canvas, scale){
container.setText("text_1", " паук?¿");
container.setSlot("slot_0", 287, 16, 0);
container.setText("text_0", "Добудьте 16 ниток ломая, зараженые шелкопрядом,");
container.setText("text_2", "листья");
}}},
		"button_13": {type: "button", x: 510, y: 150, scale: 0.9999999999999983, bitmap: "qplot", bitmap2: "qplot",
		clicker:{
onClick: function(position, container, tileEntity, window, canvas, scale){
container.setText("text_1", "Мозгиии!!!...");
container.setSlot("slot_0", 367, 7, 0);
container.setText("text_0", "Получи гнилую плоть, 7 шт, убив зомби");
container.setText("text_2", "");
}}},
		"button_14": {type: "button", x: 580, y: 80, scale: 0.9999999999999983, bitmap: "qsieve", bitmap2: "qsieve",
	clicker:{
onClick: function(position, container, tileEntity, window, canvas, scale){
container.setText("text_1", "Что-то новенькое");
container.setSlot("slot_0", ItemID.itpustoe, 1, 0);
container.setText("text_0", "Сделай каркас сита из досок  палок");
container.setText("text_2", "");
}}},
		"button_15": {type: "button", x: 590, y: 150, scale: 0.9999999999999983, bitmap: "qsetoch", bitmap2: "qsetoch",
		clicker:{
onClick: function(position, container, tileEntity, window, canvas, scale){
container.setText("text_1", "Чего-то не хватает..");
container.setSlot("slot_0", ItemID.setoch, 1, 0);
container.setText("text_0", "сплети сетку для сита с ниток");
container.setText("text_2", "");
}}},
		"button_16": {type: "button", x: 600, y: 220, scale: 0.9999999999999983, bitmap: "qsetirn", bitmap2: "qsetirn",
		clicker:{
onClick: function(position, container, tileEntity, window, canvas, scale){
container.setText("text_1", "Лучше!");
container.setSlot("slot_0", ItemID.setiron, 1, 0);
container.setText("text_0", "Сделай железную сетку из слитков и ниток");
container.setText("text_2", "");
}}},
		"button_17": {type: "button", x: 610, y: 290, scale: 0.9999999999999983, bitmap: "qsetdia", bitmap2: "qsetdia",
		clicker:{
onClick: function(position, container, tileEntity, window, canvas, scale){
container.setText("text_1", "Еще лучше!!!");
container.setSlot("slot_0", ItemID.setdiam, 1, 0);
container.setText("text_0", "Сделай алмазную сетку из алмазов и ниток");
container.setText("text_2", "");
}}},
		"button_18": {type: "button", x: 620, y: 360, scale: 0.9999999999999983, bitmap: "qelsi", bitmap2: "qelsi", 
		clicker:{
onClick: function(position, container, tileEntity, window, canvas, scale){
container.setText("text_1", "Чертовски лучше");
container.setSlot("slot_0", ItemID.ielsi, 1, 0);
container.setText("text_0", "Сделай електрическое авто-сито");
container.setText("text_2", "");
}}},
		"button_19": {type: "button", x: 650, y: 80, scale: 0.9999999999999983, bitmap: "qstbucket", bitmap2: "qstbucket",
		clicker:{
onClick: function(position, container, tileEntity, window, canvas, scale){
container.setText("text_1", "Опять компостер?!");
container.setSlot("slot_0", ItemID.sbuc, 1, 0);
container.setText("text_0", "Сделай каменую бочку");
container.setText("text_2", "");
}}},
		"button_20": {type: "button", x: 670, y: 150, scale: 0.9999999999999983, bitmap: "qwaterbucket", bitmap2: "qwaterbucket",
		clicker:{
onClick: function(position, container, tileEntity, window, canvas, scale){
container.setText("text_1", "Пора попить:-D");
container.setSlot("slot_0", 325, 1, 8);
container.setText("text_0", "Сделай железное ведро из осколков и наполни его ");
container.setText("text_2", "водой");
}}},
		"button_21": {type: "button", x: 690, y: 220, scale: 0.9999999999999983, bitmap: "qclay", bitmap2: "qclay",
		clicker:{
onClick: function(position, container, tileEntity, window, canvas, scale){
container.setText("text_1", "Нужный материал");
container.setSlot("slot_0", 82, 2, 0);
container.setText("text_0", "Получи 2 блока глины вмочив порошок в бочку с водой");
container.setText("text_2", "");
}}},
		"button_22": {type: "button", x: 720, y: 80, scale: 0.9999999999999983, bitmap: "qtigel", bitmap2: "qtigel",
		clicker:{
onClick: function(position, container, tileEntity, window, canvas, scale){
container.setText("text_1", "Жарковато!");
container.setSlot("slot_0", ItemID.icrucib, 1, 0);
container.setText("text_0", "Получи 7 кусочков глины ломая ее блок, скрафть с");
container.setText("text_2", "них и костной муки фарфор, а с него сделай тигель");
}}},
		"button_23": {type: "button", x: 750, y: 150, scale: 0.9999999999999983, bitmap: "qgen", bitmap2: "qgen",
		clicker:{
onClick: function(position, container, tileEntity, window, canvas, scale){
container.setText("text_1", "Булыжниковый колекционер");
container.setSlot("slot_0", BlockID.cobblegen_block, 1, 0);
container.setText("text_0", "Сделай генератор булыжника, чтоб обеспечить себе");
container.setText("text_2", "спокойную старость:O");
}}},
		"button_24": {type: "button", x: 780, y: 220, scale: 0.9999999999999983, bitmap: "qgenir", bitmap2: "qgenir",
		clicker:{
onClick: function(position, container, tileEntity, window, canvas, scale){
container.setText("text_1", "Булыжниковый фермер");
container.setSlot("slot_0", BlockID.cobblegen_block2, 1, 0);
container.setText("text_0", "Прокачай свой генератор до уровня Железный");
container.setText("text_2", "");
}}},
		"button_25": {type: "button", x: 810, y: 290, scale: 0.9999999999999983, bitmap: "qgendi", bitmap2: "qgendi",
		clicker:{
onClick: function(position, container, tileEntity, window, canvas, scale){
container.setText("text_1", "Булыжниковый магнат!");
container.setSlot("slot_0", BlockID.cobblegen_block3, 1, 0);
container.setText("text_0", "Улудши генератор до уровня Алмазный");
container.setText("text_2", "");
}}},
		"button_26": {type: "button", x: 840, y: 360, scale: 0.9999999999999983, bitmap: "qgenif", bitmap2: "qgenif",
		clicker:{
onClick: function(position, container, tileEntity, window, canvas, scale){
container.setText("text_1", "Булыжниковый царь!!");
container.setSlot("slot_0", BlockID.cobblegen_block4, 1, 0);
container.setText("text_0", "Повись уровень свего генератора до Ифритовый");
container.setText("text_2", "");
}}},
		"button_27": {type: "button", x: 870, y: 430, scale: 0.9999999999999983, bitmap: "qgenru", bitmap2: "qgenru",
		clicker:{
onClick: function(position, container, tileEntity, window, canvas, scale){
container.setText("text_1", "Булыжниковый Бог!!!");
container.setSlot("slot_0", BlockID.cobblegen_block5, 1, 0);
container.setText("text_0", "Апгрейдни свой генератор до уровня Изумрудный");
container.setText("text_2", "");
}}},
		"button_28": {type: "button", x: 790, y: 80, scale: 0.9999999999999983, bitmap: "qobsidian", bitmap2: "qobsidian",
		clicker:{
onClick: function(position, container, tileEntity, window, canvas, scale){
container.setText("text_1", "Гарячая штучка");
container.setSlot("slot_0", 49, 10, 0);
container.setText("text_0", "Сделай 10 блоков обсидиана для будуещего портала");
container.setText("text_2", "");
}}},
		"button_29": {type: "button", x: 860, y: 100, scale: 0.9999999999999983, bitmap: "qendstone", bitmap2: "qendstone",
		clicker:{
onClick: function(position, container, tileEntity, window, canvas, scale){
container.setText("text_1", "Юный химик");
container.setSlot("slot_0", 121, 4, 0);
container.setText("text_0", "Сделай камень енда в бочке по тайному рецепту");
container.setText("text_2", "");
}}},
		"button_30": {type: "button", x: 880, y: 170, scale: 0.9999999999999983, bitmap: "qend", bitmap2: "qend",
		clicker:{
onClick: function(position, container, tileEntity, window, canvas, scale){
container.setText("text_1", "Конец?");
container.setSlot("slot_0", ItemID.end, 1, 0);
container.setText("text_0", "Скрафть портал в енд из обсидиана, глаз эндера, и ");
container.setText("text_2", "жемчужин эндера");
}}},
		  "text_1": {type: "text", x: 140, y: 415, width: 120, height: 16, text: "", font:{color: 000000, shadow: 1, size: 30}},
		  "slot_0": {type: "slot", x: 70, y: 410, size: 60, visual: true, needClean: false, isTransparentBackground: false},
		  "text_0": {type: "text", x: 50, y: 465, width: 120, height: 64, text: "", font:{color: 000000, shadow: 1, size: 18}},
	      "text_2": {type: "text", x: 50, y: 485, width: 120, height: 64, text: "", font:{color: 000000, shadow: 1, size: 18}},
}
});

var quest = {
 questcomplete : false,
 craftingtable : false,
 zem : false,
 hook : false,
 sapling : false,
 composter : false,
 km : false,
 wood : false,
 chest : false,
 drawer : false,
 string : false,
 plott : false,
 sito : false,
 setoch : false,
 setiro : false,
 sedia : false,
 ielsi : false,
 sbuc : false,
 vzv : false,
 clay : false,
 icrucib : false,
 gen : false,
 gen2 : false,
 gen3 : false,
 gen4 : false,
 gen5 : false,
 obs : false,
 es : false,
 end : false,
};

function getItemInPlayerInventory(id, count, data){
  var total = 0;
  for(var i = 9; i < 45; i++){
    var slot = Player.getInventorySlot(i);
    if(slot.id == id && (slot.data == data || data == -1)) total += slot.count;
  }
  return total >= count;
}

Callback.addCallback("tick", function () {
	if(getItemInPlayerInventory(ItemID.stonepebble, 16, 0) && !quest.questcomplete ||
	getItemInPlayerInventory(BlockID.craftingtable, 1, 0) && !quest.craftingtable ||
	getItemInPlayerInventory(3, 10, 0) && !quest.zem ||
    getItemInPlayerInventory(ItemID.stonehook, 1, 0) && !quest.hook ||
	getItemInPlayerInventory(6, 8, 0) && !quest.sapling ||
	getItemInPlayerInventory(ItemID.composter, 1, 0) && !quest.composter ||
	getItemInPlayerInventory(351, 4, 15) && !quest.km ||
	getItemInPlayerInventory(17, 15, 0) && !quest.wood ||
	getItemInPlayerInventory(54, 2, 0) && !quest.chest ||
	getItemInPlayerInventory(ItemID.stoneDrawer, 9, 0) && !quest.drawer ||
	getItemInPlayerInventory(287, 16, 0) && !quest.string ||
	getItemInPlayerInventory(367, 7, 0) && !quest.plott ||
	getItemInPlayerInventory(ItemID.sieve, 1, 0) && !quest.sito ||
	getItemInPlayerInventory(ItemID.setoch, 1, 0) && !quest.setoch ||
	getItemInPlayerInventory(ItemID.setdia, 1, 0) && !quest.setdia ||
	getItemInPlayerInventory(ItemID.setiro, 1, 0) && !quest.setiro ||
	getItemInPlayerInventory(ItemID.ielsi, 1, 0) && !quest.ielsi ||
	getItemInPlayerInventory(ItemID.sbuc, 1, 0) && !quest.sbuc ||
	getItemInPlayerInventory(325, 1, 8) && !quest.vzv ||
	getItemInPlayerInventory(82, 2, 0) && !quest.clay ||
	getItemInPlayerInventory(ItemID.icrucib, 1, 0) && !quest.icrucib ||
	getItemInPlayerInventory(ItemID.cobblegen_block, 1, 0) && !quest.gen ||
	getItemInPlayerInventory(ItemID.cobblegen_block2, 1, 0) && !quest.gen2 ||
	getItemInPlayerInventory(ItemID.cobblegen_block3, 1, 0) && !quest.gen3 ||
	getItemInPlayerInventory(ItemID.cobblegen_block4, 1, 0) && !quest.gen4 ||
	getItemInPlayerInventory(ItemID.cobblegen_block5, 1, 0) && !quest.gen5 ||
	getItemInPlayerInventory(49, 10, 0) && !quest.obs ||
	getItemInPlayerInventory(121, 4, 0) && !quest.es ||
	getItemInPlayerInventory(ItemID.end, 1, 0) && !quest.end 
	){ 
if(getItemInPlayerInventory(ItemID.stonepebble, 16, 0)){
	quest.questcomplete = true;
	/*var container = new UI.Container();
    container.openAs(SBquest);
    container = container.getGuiScreen(SBquest);
	container.elements["gal1"] = {type: "bitmap", bitmap: "complate", x: 87, y: 80, scale: 0.9999999999999983};*/
}
if(getItemInPlayerInventory(BlockID.craftingtable, 1, 0)){quest.craftingtable = true;}
if(getItemInPlayerInventory(3, 10, 0)){quest.zem = true;}
if(getItemInPlayerInventory(ItemID.stonehook, 1, 0) ){quest.hook = true;}
if(getItemInPlayerInventory(6, 8, 0)){quest.sapling = true;}
if(getItemInPlayerInventory(ItemID.composter, 1, 0)){quest.composter = true;}
if(getItemInPlayerInventory(351, 4, 15)){quest.km = true;}
if(getItemInPlayerInventory(17, 15, 0)){quest.wood = true;}
if(getItemInPlayerInventory(54, 2, 0)){quest.chest = true;}
if(getItemInPlayerInventory(ItemID.stoneDrawer, 9, 0)){quest.drawer = true;}
if(getItemInPlayerInventory(287, 16, 0)){quest.string = true;}
if(getItemInPlayerInventory(367, 7, 0)){quest.plott = true;}
if(getItemInPlayerInventory(ItemID.sieve, 1, 0)){quest.sito = true;}
if(getItemInPlayerInventory(ItemID.setoch, 1, 0)){quest.setoch = true;}
if(getItemInPlayerInventory(ItemID.setdia, 1, 0)){quest.setdia = true;}
if(getItemInPlayerInventory(ItemID.setiro, 1, 0)){quest.setiro = true;}
if(getItemInPlayerInventory(ItemID.ielsi, 1, 0)){quest.ielsi = true;}
if(getItemInPlayerInventory(ItemID.sbuc, 1, 0)){quest.sbuc = true;}
if(getItemInPlayerInventory(325, 1, 8)){quest.vzv = true;}
if(getItemInPlayerInventory(82, 2, 0)){quest.clay = true;}
if(getItemInPlayerInventory(ItemID.icrucib, 1, 0)){quest.icrucibb= true;}
if(getItemInPlayerInventory(ItemID.cobblegen_block, 1, 0)){quest.gen = true;}
if(getItemInPlayerInventory(ItemID.cobblegen_block2, 1, 0)){quest.gen2 = true;}
if(getItemInPlayerInventory(ItemID.cobblegen_block3, 1, 0)){quest.gen3 = true;}
if(getItemInPlayerInventory(ItemID.cobblegen_block4, 1, 0)){quest.gen4 = true;}
if(getItemInPlayerInventory(ItemID.cobblegen_block5, 1, 0)){quest.gen5 = true;}
if(getItemInPlayerInventory(49, 10, 0)){quest.obs = true;}
if(getItemInPlayerInventory(121, 4, 0)){quest.es = true;}
if(getItemInPlayerInventory(ItemID.end, 1, 0)){quest.end = true;}



qcSound.play();
Game.message( '§a§l§nКВЕСТ ВЫПОЛНЕН!');
Player.addItemToInventory (ItemID.lootchest, 1, 0);
}
});


/*
Saver.addSavesScope("saveQuest", 
function read(scope){
 questcomplete = scope;  
 craftingtable = scope;  
 zem = scope;  
 hook = scope;  
 sapling = scope;  
 composter = scope;  
 km = scope;  
 wood = scope;  
 chest = scope;  
 drawer = scope;  
 string = scope;  
 plott = scope;  
 sito = scope;  
 setoch = scope;  
 setiro = scope;  
 sedia = scope;  
 ielsi = scope;  
 sbuc = scope;  
 vzv = scope;  
 clay = scope;  
 icrucib = scope;  
 gen = scope;  
 gen2 = scope;  
 gen3 = scope;  
 gen4 = scope;  
 gen5 = scope;  
 obs = scope;  
es = scope;  
end = scope;  
 }, 
 function save() { 
 return questcomplete;
 craftingtable;
 zem;
 hook,
 sapling;
 composter;
 km;
 wood;
 chest;
 drawer;
 string;
 plott;
 sito;
 setoch;
 setiro;
 sedia;
 ielsi;
 sbuc;
 vzv;
 clay;
 icrucib;
 gen;
 gen2;
 gen3;
 gen4;
 gen5;
 obs;
 es;
 end;
 } 
);*/

Saver.addSavesScope("saveQuest",
function read(scope){
    quest = scope;
},
function save(){
    return quest;
});

/*
Callback.addCallback("tick", function () {
Game.tipMessage(getItemInPlayerInventory(ItemID.stonepebble, 10, 0));
});*/






