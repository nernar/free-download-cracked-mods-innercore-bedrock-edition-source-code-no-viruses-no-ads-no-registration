/*
BUILD INFO:
  dir: dev
  target: main.js
  files: 90
*/



// file: header.js

/*
  
    ._______.. .__. .__.  ._______.. .______..   ._____.. .__.   .__.. .________.. ._______..  .______.. .__.. .__..
    |  .____|| |  \\|  || |  .____|| |  .__. \\ / .____|| |  \\  /  || |__.  .__|| |  .____|| /  .____|| |  ||_|  ||
    |  ||___.. |   \|  || |  ||___.. |  |__| || | ||._..   \  \\/  //     |  ||    |  ||___.. |  ||      |        ||
    |  .____|| |  ..   || |  .____|| |  .____/  | |||_.\\   \.   .//      |  ||    |  .____|| |  ||      |  .__.  ||
    |  ||___.. |  ||\  || |  ||___.. |  |\  \\  | ||__|||    |   ||       |  ||    |  ||___.. |  ||___.  |  || |  ||
    |_______|| |__|| \_|| |_______|| |__||\__\\ \______//    |___||       |__||    |_______|| \_______|| |__|| |__||

    ================================================== * V3.0.0 * ==================================================
    
*/

// lib
IMPORT("ToolLib");
IMPORT("SoundAPI");
IMPORT("EnergyNet");
IMPORT("ChargeItem");
IMPORT("TileRender");
IMPORT("UsefulTool");
IMPORT("StorageInterface");

if(getCoreAPILevel() < 10){
    Item.addCreativeGroup = function(uid,name,item){
        
    }

    Item.addRepairItemIds = function(id,item){

    }

    ToolAPI.addBlockDropOnExplosion = function(uid){

    }
} else {
    ToolAPI.addBlockDropOnExplosion = ToolLib.addBlockDropOnExplosion;
}

// API
World.drop = ModAPI.requireGlobal("Level.dropItem");
canTileBeReplaced = ModAPI.requireGlobal("canTileBeReplaced");
Player.setInventorySlot = ModAPI.requireGlobal("Player.setInventorySlot");

var EU = EnergyTypeRegistry.assureEnergyType("Eu",1);

var GUI_SCALE = 3.2;
var TEXT_SIZE = __config__.getNumber("text_size");
var GUI_TEXT = {size:TEXT_SIZE / 2,color:android.graphics.Color.parseColor("#96dcdc")}

var ChunkRegistry = {
    chunk:{},
    
    getChunk:function(x,z,dimension){
        var chunk = this.chunk[dimension + ":" + x + ":" + z];
        if(chunk) return chunk;
        return null;
    }
},network = {}

var Tooltip = {
    energyStored:function(item,name,tooltip){
        return name + tooltip + "\n§7" + Translation.translate("Energy: ") + ChargeItemRegistry.getEnergyStored(item) + "Eu"; 
    },

    tier:function(id,tier){
        Item.addTooltip(id,Translation.translate("Power Tier: ") + tier);
        Item.addTooltip(id,Translation.translate("Max Voltage: ") + power(tier) + "Eu");
    },

    info:function(id,info){
        Item.addTooltip(id,Translation.translate("Info: ") + Translation.translate(info));
    }
}

function power(tier){
    return 32 * Math.pow(4,tier - 1);
}

function random(min,max){
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

Saver.addSavesScope("EnergyTech",
    function read(scope){
        network = scope.network || {};
        ChunkRegistry.chunk = scope.chunk || {};
    },
    
    function save(){
        return {
            network:network,
            chunk:ChunkRegistry.chunk
        }
    }
);

LiquidRegistry.registerLiquid("steam","Steam",["liquid_steam"]);
LiquidRegistry.registerLiquid("helium","Helium",["liquid_helium"]);
LiquidRegistry.registerLiquid("plasmaHelium","Plasma Helium",["helium_plasma"]);
LiquidRegistry.registerLiquid("helium3","Helium-3",["liquid_helium3"]);
LiquidRegistry.registerLiquid("lithium6","Lithium-6",["liquid_lithium6"]);
LiquidRegistry.registerLiquid("lithium7","Lithium-7",["liquid_lithium7"]);
LiquidRegistry.registerLiquid("uranium235","Uranium-235",["liquid_uranium235"]);
LiquidRegistry.registerLiquid("uranium238","Uranium-238",["liquid_uranium238"]);
LiquidRegistry.registerLiquid("tritium","Tritium",["liquid_tritium"]);
LiquidRegistry.registerLiquid("deuterium","Deuterium",["liquid_deuterium"]);
LiquidRegistry.registerLiquid("heavyWater","Heavy Water",["liquid_heavy_water"]);
LiquidRegistry.registerLiquid("distilledWater","Distilled Water",["liquid_distilled_water"]);




// file: translation.js

// Material
Translation.addTranslation("Small Stone",{zh:"石子"});
Translation.addTranslation("Rubber Tree Log",{zh:"橡胶树原木"});
Translation.addTranslation("Rubber Tree Leaves",{zh:"橡胶树树叶"});
Translation.addTranslation("Slag",{zh:"矿渣"});
Translation.addTranslation("Resin",{zh:"树脂"});
Translation.addTranslation("String Mesh",{zh:"线网"});
Translation.addTranslation("Tiny Coal",{zh:"小块煤炭"});
Translation.addTranslation("Tiny Charcoal",{zh:"小块木炭"});
Translation.addTranslation("Vacuum Tube",{zh:"真空管",ru:"Вакуумная труба"});
Translation.addTranslation("Electric Motor" ,{zh:"电动马达",ru:"Электромотор"});
Translation.addTranslation("Electric Piston",{zh:"电动活塞",ru:"Электрический поршень"});
Translation.addTranslation("Machine Casing",{zh:"机器外壳"});
Translation.addTranslation("Blast Furnace Brick",{zh:"高炉砖"});

// Reactor
Translation.addTranslation("Lithium-6",{zh:"锂-6",ru:"Литий-6"});
Translation.addTranslation("Lithium-7",{zh:"锂-7",ru:"Литий-7"});
Translation.addTranslation("Uranium-235",{zh:"铀-235",ru:"Уран-235"});
Translation.addTranslation("Uranium-238",{zh:"铀-238",ru:"Уран-238"});
Translation.addTranslation("Small Pile of Lithium-6",{zh:"小堆锂-6",ru:"Небольшая кучка Лития-6"});
Translation.addTranslation("Small Pile of Lithium-7",{zh:"小堆锂-7",ru:"Небольшая кучка Лития-7"});
Translation.addTranslation("Small Pile of Uranium-235",{zh:"小堆铀-235",ru:"Небольшая кучка Урана-235"});
Translation.addTranslation("Small Pile of Uranium-238",{zh:"小堆铀-238",ru:"Небольшая кучка Урана-238"});
Translation.addTranslation("Depleted Enriched Uranium",{zh:"贫化浓缩铀"});
Translation.addTranslation("Refined Enriched Uranium",{zh:"精炼浓缩铀"});
Translation.addTranslation("Reactor Casing",{zh:"反应堆外壳"});
Translation.addTranslation("Heat Sink",{zh:"散热片",ru:"Радиатор"});
Translation.addTranslation("Neutron Reflector",{zh:"中子反射板",ru:"Отражатель нейтронов"});
Translation.addTranslation("Fuel Rod(Uranium)",{zh:"燃料棒(铀)",ru:"Топливный стержень(Уран)"});
Translation.addTranslation("Dual Fuel Rod(Uranium)",{zh:"双联燃料棒(铀)"});
Translation.addTranslation("Quad Fuel Rod(Uranium)",{zh:"四联燃料棒(铀)"});
Translation.addTranslation("Fuel Rod(Depleted Uranium)",{zh:"燃料棒(枯竭铀)"});
Translation.addTranslation("Dual Fuel Rod(Depleted Uranium)",{zh:"双联燃料棒(枯竭铀)"});
Translation.addTranslation("Quad Fuel Rod(Depleted Uranium)",{zh:"四联燃料棒(枯竭铀)"});
Translation.addTranslation("Coolant Cell (Water)",{zh:"冷却单元(水)"});
Translation.addTranslation("Dual Coolant Cell (Water)",{zh:"双联冷却单元(水)"});
Translation.addTranslation("Quad Coolant Cell (Water)",{zh:"四联冷却单元(水)"});
Translation.addTranslation("Coolant Cell (Helium)",{zh:"冷却单元(氦)"});
Translation.addTranslation("Dual Coolant Cell (Helium)",{zh:"双联冷却单元(氦)"});
Translation.addTranslation("Quad Coolant Cell (Helium)",{zh:"四联冷却单元(氦)"});

// Item Pipe
Translation.addTranslation("Item Pipe (Input)",{zh:"物品管道 (输入)"});
Translation.addTranslation("Item Pipe (Transport)",{zh:"物品管道 (传输)"});
Translation.addTranslation("Item Pipe (Output)",{zh:"物品管道 (输出)"});

// Block
Translation.addTranslation("Copper Block",{zh:"铜块",ru:"Медный блок"});
Translation.addTranslation("Tin Block",{zh:"锡块",ru:"Оловянный блок"});
Translation.addTranslation("Lead Block",{zh:"铅块",ru:"Свинцовый блок"});
Translation.addTranslation("Wrought Iron Block",{zh:"锻铁块",ru:"Блок кованого железа"});
Translation.addTranslation("Steel Block",{zh:"钢块",ru:"Стальной блок"});
Translation.addTranslation("Antimony Block",{zh:"锑块",ru:"Блок сурьмы"});
Translation.addTranslation("Lithium Block",{zh:"锂块",ru:"Литиевый блок"});
Translation.addTranslation("Carbon Block",{zh:"碳块",ru:"Графитовый блок"});
Translation.addTranslation("Tungsten Block",{zh:"钨块",ru:"Вольфрамовый блок"});
Translation.addTranslation("Uranium Block",{zh:"铀块",ru:"Урановый блок"});
Translation.addTranslation("Silver Block",{zh:"银块",ru:"Серебряный блок"});
Translation.addTranslation("Aluminium Block",{zh:"铝块",ru:"Алюминиевый блок"});
Translation.addTranslation("Lead-Antimony Alloy Block",{zh:"铅锑合金块",ru:"Блок стибий-свинцового сплава"});


// Glass Tank
Translation.addTranslation("Glass Tank",{zh:"玻璃储罐",ru:"Стеклянный бак"});

// Scaffold
Translation.addTranslation("Wood Scaffold",{zh:"木脚手架",ru:"Деревянные строительные леса"});
Translation.addTranslation("Iron Scaffold",{zh:"铁脚手架",ru:"Железные строительные леса"});

// Stone
Translation.addTranslation("Marble",{zh:"大理石"});
Translation.addTranslation("Marble Cobble",{zh:"大理石圆石"});
Translation.addTranslation("Polished Marble",{zh:"磨制大理石"});
Translation.addTranslation("Andesite Cobble",{zh:"安山岩圆石"});
Translation.addTranslation("Diorite Cobble",{zh:"闪长岩圆石"});
Translation.addTranslation("Granite Cobble",{zh:"花岗岩圆石"});
Translation.addTranslation("Concrete Block",{zh:"混凝土块"});

// Ore
Translation.addTranslation("Copper Ore",{zh:"铜矿石",ru:"Медная руда"});
Translation.addTranslation("Tetrahedrite Ore",{zh:"黝铜矿石",ru:"Тетраэдритовая руда"});
Translation.addTranslation("Cassiterite Ore",{zh:"锡石矿石"});
Translation.addTranslation("Galena Ore",{zh:"方铅矿石"});
Translation.addTranslation("Spodumene Ore",{zh:"锂辉石矿石"});
Translation.addTranslation("Graphite Ore",{zh:"石墨矿石",ru:"Графитовая руда"});
Translation.addTranslation("Tungsten Ore",{zh:"钨矿石",ru:"Вольфрамовая руда"});
Translation.addTranslation("Uranium Ore",{zh:"铀矿石",ru:"Урановая руда"});
Translation.addTranslation("Silver Ore",{zh:"银矿石",ru:"Серебряная руда"});
Translation.addTranslation("Bauxite Ore",{zh:"铝土矿石",ru:"Алюминиевая руда"});
Translation.addTranslation("Ruby Ore",{zh:"红宝石矿石"});

Translation.addTranslation("Crushed Copper Ore",{zh:"粉碎铜矿石",ru:"Измельченная медная руда"});
Translation.addTranslation("Crushed Cassiterite Ore",{zh:"粉碎锡石矿石"});
Translation.addTranslation("Crushed Galena Ore",{zh:"粉碎方铅矿石"});
Translation.addTranslation("Crushed Iron Ore",{zh:"粉碎铁矿石",ru:"Измельченная железная руда"});
Translation.addTranslation("Crushed Gold Ore",{zh:"粉碎金矿石",ru:"Измельченная золотая руда"});
Translation.addTranslation("Crushed Spodumene Ore",{zh:"粉碎锂辉石矿石"});
Translation.addTranslation("Crushed Tungsten Ore",{zh:"粉碎钨矿石",ru:"Измельченная вольфрамовая руда"});
Translation.addTranslation("Crushed Uranium Ore",{zh:"粉碎铀矿石",ru:"Измельченная урановая руда"});
Translation.addTranslation("Crushed Silver Ore",{zh:"粉碎银矿石",ru:"Измельченная серебряная руда"});
Translation.addTranslation("Crushed Bauxite Ore",{zh:"粉碎铝土矿石"});
Translation.addTranslation("Crushed Tetrahedrite Ore",{zh:"粉碎黝铜矿石",ru:"Измельченная тетраэдритовая руда"});

Translation.addTranslation("Purified Crushed Copper Ore",{zh:"纯净的粉碎铜矿石",ru:"Очищенная измельченная медная руда"});
Translation.addTranslation("Purified Crushed Cassiterite Ore",{zh:"纯净的粉碎锡石矿石"});
Translation.addTranslation("Purified Crushed Galena Ore",{zh:"纯净的粉碎方铅矿石"});
Translation.addTranslation("Purified Crushed Iron Ore",{zh:"纯净的粉碎铁矿石",ru:"Очищенная измельченная железная руда"});
Translation.addTranslation("Purified Crushed Gold Ore",{zh:"纯净的粉碎金矿石",ru:"Очищенная измельченная золотая руда"});
Translation.addTranslation("Purified Crushed Spodumene Ore",{zh:"纯净的粉碎锂辉石矿石"});
Translation.addTranslation("Purified Crushed Tungsten Ore",{zh:"纯净的粉碎钨矿石",ru:"Очищенная измельченная вольфрамовая руда"});
Translation.addTranslation("Purified Crushed Uranium Ore",{zh:"纯净的粉碎铀矿石",ru:"Очищенная измельченная урановая руда"});
Translation.addTranslation("Purified Crushed Silver Ore",{zh:"纯净的粉碎银矿石",ru:"Очищенная измельченная серебряная руда"});
Translation.addTranslation("Purified Crushed Bauxite Ore",{zh:"纯净的粉碎铝土矿石"});
Translation.addTranslation("Purified Crushed Tetrahedrite Ore",{zh:"纯净的粉碎黝铜矿石",ru:"Очищенная измельченная тетраэдритовая руда"});

Translation.addTranslation("Impure Copper Dust",{zh:"含杂铜粉",ru:"Неочищенная медная пыль"});
Translation.addTranslation("Impure Cassiterite Dust",{zh:"含杂锡石粉"});
Translation.addTranslation("Impure Galena Dust",{zh:"含杂方铅粉"});
Translation.addTranslation("Impure Iron Dust",{zh:"含杂铁粉",ru:"Неочищенная железная пыль"});
Translation.addTranslation("Impure Gold Dust",{zh:"含杂金粉",ru:"Неочищенная золотая пыль"});
Translation.addTranslation("Impure Spodumene Dust",{zh:"含杂锂辉石粉"});
Translation.addTranslation("Impure Tungsten Dust",{zh:"含杂钨粉",ru:"Неочищенная вольфрамовая пыль"});
Translation.addTranslation("Impure Uranium Dust",{zh:"含杂铀粉",ru:"Неочищенная урановая пыль"});
Translation.addTranslation("Impure Silver Dust",{zh:"含杂银粉",ru:"Неочищенная серебряная пыль"});
Translation.addTranslation("Impure Bauxite Dust",{zh:"含杂铝土粉"});
Translation.addTranslation("Impure Tetrahedrite Dust",{zh:"含杂黝铜粉",ru:"Неочищенная тетраэдритовая пыль"});

Translation.addTranslation("Flint Dust",{zh:"燧石粉"});
Translation.addTranslation("Stone Dust",{zh:"石粉",ru:"Каменная пыль"});
Translation.addTranslation("Copper Dust",{zh:"铜粉",ru:"Медная пыль"});
Translation.addTranslation("Tin Dust",{zh:"锡粉",ru:"Оловянная пыль"});
Translation.addTranslation("Lead Dust",{zh:"铅粉",ru:"Свинцовая пыль"});
Translation.addTranslation("Iron Dust",{zh:"铁粉",ru:"Железная пыль"});
Translation.addTranslation("Steel Dust",{zh:"钢粉",ru:"Стальная пыль"});
Translation.addTranslation("Gold Dust",{zh:"金粉",ru:"Золотая пыль"});
Translation.addTranslation("Antimony Dust",{zh:"锑粉",ru:"Сурьмяная пыль"});
Translation.addTranslation("Lithium Dust",{zh:"锂粉",ru:"Литиевая пыль"});
Translation.addTranslation("Carbon Dust",{zh:"碳粉",ru:"Графитовая пыль"});
Translation.addTranslation("Tungsten Dust",{zh:"钨粉",ru:"Вольфрамовая пыль"});
Translation.addTranslation("Uranium Dust",{zh:"铀粉",ru:"Урановая пыль"});
Translation.addTranslation("Silver Dust",{zh:"银粉",ru:"Серебряная пыль"});
Translation.addTranslation("Aluminium Dust",{zh:"铝粉",ru:"Алюминиевая пыль"});
Translation.addTranslation("Ender Dust",{zh:"末影粉",ru:"Пыль Края"});
Translation.addTranslation("Diamond Dust",{zh:"钻石粉",ru:"Алмазная пыль"});
Translation.addTranslation("Silicon Dioxide Dust",{zh:"二氧化硅粉"});
Translation.addTranslation("Enete Alloy Dust",{zh:"恩奈特合金粉"});
Translation.addTranslation("Lead-Antimony Alloy Dust",{zh:"铅锑合金粉",ru:"Стибий-свинцовая пыль"});
Translation.addTranslation("Salt Dust",{zh:"盐粉"});
Translation.addTranslation("Energium Dust",{zh:"能量水晶粉"});
Translation.addTranslation("Ruby Dust",{zh:"红宝石粉"});
Translation.addTranslation("Silicon Dust",{zh:"硅粉"});

Translation.addTranslation("Small Pile of Flint Dust",{zh:"小堆燧石粉"});
Translation.addTranslation("Small Pile of Stone Dust",{zh:"小堆石粉",ru:"Небольшая кучка каменной пыли"});
Translation.addTranslation("Small Pile of Copper Dust",{zh:"小堆铜粉",ru:"Небольшая кучка медной пыли"});
Translation.addTranslation("Small Pile of Tin Dust",{zh:"小堆锡粉",ru:"Небольшая кучка оловянной пыли"});
Translation.addTranslation("Small Pile of Lead Dust",{zh:"小堆铅粉",ru:"Небольшая кучка свинцовой пыли"});
Translation.addTranslation("Small Pile of Iron Dust",{zh:"小堆铁粉",ru:"Небольшая кучка железной пыли"});
Translation.addTranslation("Small Pile of Steel Dust",{zh:"小堆钢粉",ru:"Небольшая кучка стальной пыли"});
Translation.addTranslation("Small Pile of Gold Dust",{zh:"小堆金粉",ru:"Небольшая кучка золотой пыли"});
Translation.addTranslation("Small Pile of Antimony Dust",{zh:"小堆锑粉",ru:"Небольшая кучка сурьмяной пыли"});
Translation.addTranslation("Small Pile of Lithium Dust",{zh:"小堆锂粉",ru:"Небольшая кучка литиевой пыли"});
Translation.addTranslation("Small Pile of Carbon Dust",{zh:"小堆碳粉",ru:"Небольшая кучка графитовой пыли"});
Translation.addTranslation("Small Pile of Tungsten Dust",{zh:"小堆钨粉",ru:"Небольшая кучка вольфрамовой пыли"});
Translation.addTranslation("Small Pile of Uranium Dust",{zh:"小堆铀粉",ru:"Небольшая кучка урановой пыли"});
Translation.addTranslation("Small Pile of Silver Dust",{zh:"小堆银粉",ru:"Небольшая кучка серебряной пыли"});
Translation.addTranslation("Small Pile of Aluminium Dust",{zh:"小堆铝粉",ru:"Небольшая кучка алюминиевой пыли"});
Translation.addTranslation("Small Pile of Ender Dust",{zh:"小堆末影粉",ru:"Небольшая кучка пыли Края"});
Translation.addTranslation("Small Pile of Diamond Dust",{zh:"小堆钻石粉",ru:"Небольшая кучка алмазной пыли"});
Translation.addTranslation("Small Pile of Silicon Dioxide Dust",{zh:"二氧化硅粉"});
Translation.addTranslation("Small Pile of Enete Alloy Dust",{zh:"小堆恩奈特合金粉"});
Translation.addTranslation("Small Pile of Lead-Antimony Alloy Dust",{zh:"小堆铅锑合金粉",ru:"Небольшая кучка стибий-свинцовой пыли"});
Translation.addTranslation("Small Pile of Salt Dust",{zh:"小堆盐粉"});
Translation.addTranslation("Small Pile of Energium Dust",{zh:"小堆能量水晶粉"});
Translation.addTranslation("Small Pile of Redstone Dust",{zh:"小堆能量红石粉"});
Translation.addTranslation("Small Pile of Ruby Dust",{zh:"小堆红宝石粉"});
Translation.addTranslation("Small Pile of Silicon Dust",{zh:"小堆硅粉"});

// Gear
Translation.addTranslation("Iron Gear",{zh:"铁齿轮",ru:"Железная шестерня"});
Translation.addTranslation("Steel Gear",{zh:"钢齿轮",ru:"Стальная шестерня"});

// Ingot
Translation.addTranslation("Ruby",{zh:"红宝石"});
Translation.addTranslation("Copper Ingot",{zh:"铜锭",ru:"Медная шестерня"});
Translation.addTranslation("Tin Ingot",{zh:"锡锭",ru:"Оловянная шестерня"});
Translation.addTranslation("Lead Ingot",{zh:"铅锭",ru:"Свинцовая шестерня"});
Translation.addTranslation("Wrought Iron Ingot",{zh:"锻铁锭",ru:"Шестерня из кованого железа"});
Translation.addTranslation("Steel Ingot",{zh:"钢锭",ru:"Стальной слиток"});
Translation.addTranslation("Antimony Ingot",{zh:"锑锭",ru:"Сурьмяный слиток"});
Translation.addTranslation("Lithium Ingot",{zh:"锂锭",ru:"Литиевый слиток"});
Translation.addTranslation("Tungsten Ingot",{zh:"钨锭",ru:"Вольфрамовый слиток"});
Translation.addTranslation("Uranium Ingot",{zh:"铀锭",ru:"Урановый слиток"});
Translation.addTranslation("Silver Ingot",{zh:"银锭",ru:"Серебряный слиток"});
Translation.addTranslation("Aluminium Ingot",{zh:"铝锭",ru:"Алюминиевый слиток"});
Translation.addTranslation("Silicon Ingot",{zh:"硅锭"});
Translation.addTranslation("Enete Alloy Ingot",{zh:"恩奈特合金锭"});
Translation.addTranslation("Lead-Antimony Alloy Ingot",{zh:"铅锑合金锭",ru:"Слиток стибий-свинцового сплава"});

// Part
Translation.addTranslation("Iron Part",{zh:"铁制零件",ru:"Железная деталь"});
Translation.addTranslation("Tin Part",{zh:"锡制零件",ru:"Оловянная деталь"});
Translation.addTranslation("Copper Part",{zh:"铜制零件",ru:"Медная деталь"});
Translation.addTranslation("Gold Part",{zh:"金制零件",ru:"Золотая деталь"});
Translation.addTranslation("Steel Part",{zh:"钢制零件",ru:"Стальная деталь"});
Translation.addTranslation("Enete Alloy Part",{zh:"恩奈特特制零件"});
Translation.addTranslation("Lead-Antimony Alloy Part",{zh:"铅锑特制零件",ru:"Деталь из стибий-свинцового сплава"});

// Plate
Translation.addTranslation("Tin Plate",{zh:"锡板",ru:"Оловянная пластина"});
Translation.addTranslation("Iron Plate",{zh:"铁板",ru:"Железная пластина"});
Translation.addTranslation("Gold Plate",{zh:"金板",ru:"Золотая пластина"});
Translation.addTranslation("Carbon Plate",{zh:"碳板",ru:"Графитовая пластина"});
Translation.addTranslation("Steel Plate",{zh:"钢板",ru:"Стальная пластина"});
Translation.addTranslation("Copper Plate",{zh:"铜板",ru:"Медная пластина"});
Translation.addTranslation("Tungsten Plate",{zh:"钨板",ru:"Вольфрамовая пластина"});
Translation.addTranslation("Lapis Plate",{zh:"青金石板",ru:"Лазуритовая пластина"});
Translation.addTranslation("Lead Plate",{zh:"铅板",ru:"Свинцовая пластина"});
Translation.addTranslation("Aluminium Plate",{zh:"铝板",ru:"Алюминиевая пластина"});
Translation.addTranslation("Antimony Plate",{zh:"锑板"});
Translation.addTranslation("Circuit Plate",{zh:"电路板"});
Translation.addTranslation("Plastic Plate",{zh:"塑料板"});
Translation.addTranslation("Enete Alloy Plate",{zh:"恩奈特合金板"});
Translation.addTranslation("Lead-Antimony Alloy Plate",{zh:"铅锑合金板",ru:"Пластина из стибий-свинцового сплава"});

// Ring
Translation.addTranslation("Bronze Ring",{zh:"青铜环"});
Translation.addTranslation("Iron Ring",{zh:"铁环",ru:"Железное кольцо"});
Translation.addTranslation("Tin Ring",{zh:"锡环",ru:"Оловянное кольцо"});
Translation.addTranslation("Steel Ring",{zh:"钢环",ru:"Стальное кольцо"});

// Stick
Translation.addTranslation("Copper Stick",{zh:"铜棍",ru:"Медная палка"});
Translation.addTranslation("Tin Stick",{zh:"锡棍",ru:"Оловянная палка"});
Translation.addTranslation("Bronze Stick",{zh:"青铜棍"});
Translation.addTranslation("Iron Stick",{zh:"铁棍",ru:"Железная палка"});
Translation.addTranslation("Gold Stick",{zh:"金棍",ru:"Золотая палка"});
Translation.addTranslation("Steel Stick",{zh:"钢棍",ru:"Стальная палка"});
Translation.addTranslation("Tungsten Stick",{zh:"钨棍",ru:"Вольфрамовая палка"});
Translation.addTranslation("Enete Alloy Stick",{zh:"恩奈特合金棍",ru:"Палка из сплава Шерлока"});
Translation.addTranslation("Lead-Antimony Alloy Stick",{zh:"铅锑合金棍",ru:"Палка из стибий-свинцового сплава"});
Translation.addTranslation("Lapis Stick",{zh:"青金石棍"});

// Circuit
Translation.addTranslation("Circuit",{zh:"电路板",ru:"Электросхема"});
Translation.addTranslation("Circuit (Energy Storage Upgrade)",{zh:"电路板(储能升级)",ru:"Электросхема(Улучшение Энергохранилище)"});
Translation.addTranslation("Circuit (Muffler Upgrade)",{zh:"电路板(消音升级)"});
Translation.addTranslation("Circuit (Overclocker Upgrade)",{zh:"电路板(超频升级)",ru:"Электросхема(Улучшение Ускоритель)"});
Translation.addTranslation("Circuit (Transformer Upgrade)",{zh:"电路板(高压升级)",ru:"Электросхема(Улучшение Трансформатор)"});

// Cell
Translation.addTranslation("Liquid Cell (Empty)",{zh:"液体单元 (空)",ru:"Жидкостная капсула (Пустая)"});
Translation.addTranslation("Liquid Cell (Steam)",{zh:"液体单元 (蒸汽)"});
Translation.addTranslation("Liquid Cell (Water)",{zh:"液体单元 (水)",ru:"Жидкостная капсула (Вода)"});
Translation.addTranslation("Liquid Cell (Lava)",{zh:"液体单元 (岩浆)",ru:"Жидкостная капсула (Лава)"});
Translation.addTranslation("Liquid Cell (Uranium-235)",{zh:"液体单元 (铀-235)",ru:"Жидкостная капсула (Уран-235)"});
Translation.addTranslation("Liquid Cell (Uranium-238)",{zh:"液体单元 (铀-238)",ru:"Жидкостная капсула (Уран-238)"});
Translation.addTranslation("Liquid Cell (Lithium-6)",{zh:"液体单元 (锂-6)",ru:"Жидкостная капсула (Литий-6)"});
Translation.addTranslation("Liquid Cell (Lithium-7)",{zh:"液体单元 (锂-7)",ru:"Жидкостная капсула (Литий-7)"});
Translation.addTranslation("Liquid Cell (Tritium)",{zh:"液体单元 (氚)"});
Translation.addTranslation("Liquid Cell (Deuterium)",{zh:"液体单元 (氘)"});
Translation.addTranslation("Liquid Cell (Helium)",{zh:"液体单元 (氦)"});
Translation.addTranslation("Liquid Cell (Helium-3)",{zh:"液体单元 (氦-3)"});
Translation.addTranslation("Liquid Cell (Heavy Water)",{zh:"液体单元 (重水)"});
Translation.addTranslation("Liquid Cell (Distilled Water)",{zh:"液体单元 (蒸馏水)"});

// Coil
Translation.addTranslation("Tin Coil",{zh:"锡线圈",ru:"Оловянная катушка"});
Translation.addTranslation("Copper Coil",{zh:"铜线圈",ru:"Медная катушка"});
Translation.addTranslation("Gold Coil",{zh:"金线圈",ru:"Золотая катушка"});
Translation.addTranslation("Steel Coil",{zh:"钢线圈",ru:"Стальная катушка"});
Translation.addTranslation("Tungsten Coil",{zh:"钨线圈",ru:"Вольфрамовая катушка"});

// Tool
Translation.addTranslation("Drill",{zh:"钻头"});

Translation.addTranslation("Powered Helmet",{zh_CN:"动力装甲头盔"});
Translation.addTranslation("Powered Chestplate",{zh_CN:"动力装甲胸甲"});
Translation.addTranslation("Powered Leggings",{zh_CN:"动力装甲护腿"});
Translation.addTranslation("Powered Boots",{zh_CN:"动力装甲靴子"});

Translation.addTranslation("Antimony Sword",{zh:"锑剑",ru:"Сурьмяный меч"});
Translation.addTranslation("Antimony Shovel",{zh:"锑铲",ru:"Сурьмяная лопата"});
Translation.addTranslation("Antimony Pickaxe",{zh:"锑镐",ru:"Сурьмяная кирка"});
Translation.addTranslation("Antimony Axe",{zh:"锑斧",ru:"Сурьмяный топор"});
Translation.addTranslation("Antimony Hoe",{zh:"锑锄",ru:"Сурьмяная мотыга"});
Translation.addTranslation("Copper Sword",{zh:"铜剑",ru:"Медный меч"});
Translation.addTranslation("Copper Shovel",{zh:"铜铲",ru:"Медная лопата"});
Translation.addTranslation("Copper Pickaxe",{zh:"铜镐",ru:"Медная кирка"});
Translation.addTranslation("Copper Axe",{zh:"铜斧",ru:"Медный топор"});
Translation.addTranslation("Copper Hoe",{zh:"铜锄",ru:"Медная мотыга"});
Translation.addTranslation("Flint Sword",{zh:"燧石剑"});
Translation.addTranslation("Flint Shovel",{zh:"燧石铲"});
Translation.addTranslation("Flint Pickaxe",{zh:"燧石镐"});
Translation.addTranslation("Flint Axe",{zh:"燧石斧"});
Translation.addTranslation("Flint Hoe",{zh:"燧石锄"});
Translation.addTranslation("Iron Wrench",{zh:"铁扳手",ru:"Железный ключ"});
Translation.addTranslation("Iron Hammer",{zh:"铁锤",ru:"Железный молот"});
Translation.addTranslation("Iron Cutter",{zh:"铁剪线钳",ru:"Железный резак"});
Translation.addTranslation("Iron Mortar",{zh:"铁研钵",ru:"Пестик и ступка из железа"});
Translation.addTranslation("Iron File",{zh:"铁锉刀",ru:"Железная пилочка"});
Translation.addTranslation("Iron Lighter",{zh:"铁火机"});
Translation.addTranslation("Lead Sword",{zh:"铅剑",ru:"Свинцовый меч"});
Translation.addTranslation("Lead Shovel",{zh:"铅铲",ru:"Свинцовая лопата"});
Translation.addTranslation("Lead Pickaxe",{zh:"铅镐",ru:"Свинцовая кирка"});
Translation.addTranslation("Lead Axe",{zh:"铅斧",ru:"Свинцовый топор"});
Translation.addTranslation("Lead Hoe",{zh:"铅锄",ru:"Свинцовая мотыга"});
Translation.addTranslation("Steel Sword",{zh:"钢剑",ru:"Стальной меч"});
Translation.addTranslation("Steel Shovel",{zh:"钢铲",ru:"Стальная лопата"});
Translation.addTranslation("Steel Pickaxe",{zh:"钢镐",ru:"Стальная кирка"});
Translation.addTranslation("Steel Axe",{zh:"钢斧",ru:"Стальной топор"});
Translation.addTranslation("Steel Hoe",{zh:"钢锄",ru:"Стальная мотыга"});
Translation.addTranslation("Steel Wrench",{zh:"钢扳手",ru:"Стальной ключ"});
Translation.addTranslation("Steel Hammer",{zh:"钢锤",ru:"Стальной молот"});
Translation.addTranslation("Steel Cutter",{zh:"钢剪线钳",ru:"Стальной резак"});
Translation.addTranslation("Steel Mortar",{zh:"钢研钵",ru:"Пестик и ступка из стали"});
Translation.addTranslation("Steel File",{zh:"钢锉刀",ru:"Стальная пилочка"});
Translation.addTranslation("Steel Lighter",{zh:"钢火机"});
Translation.addTranslation("Tin Sword",{zh:"锡剑",ru:"Оловянный меч"});
Translation.addTranslation("Tin Shovel",{zh:"锡铲",ru:"Оловянная лопата"});
Translation.addTranslation("Tin Pickaxe",{zh:"锡镐",ru:"Оловянная кирка"});
Translation.addTranslation("Tin Axe",{zh:"锡斧",ru:"Оловянный топор"});
Translation.addTranslation("Tin Hoe",{zh:"锡锄",ru:"Оловянная мотыга"});
Translation.addTranslation("Tin Wrench",{zh:"锡扳手",ru:"Оловянный ключ"});
Translation.addTranslation("Tin Hammer",{zh:"锡锤",ru:"Оловянный молот"});
Translation.addTranslation("Tin Cutter",{zh:"锡剪线钳",ru:"Оловянный резак"});
Translation.addTranslation("Tin Mortar",{zh:"锡研钵",ru:"Пестик и ступка из олова"});
Translation.addTranslation("Tin File",{zh:"锡锉刀",ru:"Оловянная пилочка"});
Translation.addTranslation("Tungsten Sword",{zh:"钨剑",ru:"Вольфрамовый меч"});
Translation.addTranslation("Tungsten Shovel",{zh:"钨铲",ru:"Вольфрамовая лопата"});
Translation.addTranslation("Tungsten Pickaxe",{zh:"钨镐",ru:"Вольфрамовая кирка"});
Translation.addTranslation("Tungsten Axe",{zh:"钨斧",ru:"Вольфрамовый топор"});
Translation.addTranslation("Tungsten Hoe",{zh:"钨锄",ru:"Вольфрамовая мотыга"});
Translation.addTranslation("Bronze Sword",{zh:"青铜剑"});
Translation.addTranslation("Bronze Shovel",{zh:"青铜铲"});
Translation.addTranslation("Bronze Pickaxe",{zh:"青铜镐"});
Translation.addTranslation("Bronze Axe",{zh:"青铜斧"});
Translation.addTranslation("Bronze Hoe",{zh:"青铜锄"});
Translation.addTranslation("Bronze Wrench",{zh:"青铜扳手"});
Translation.addTranslation("Bronze Hammer",{zh:"青铜锤"});
Translation.addTranslation("Bronze Cutter",{zh:"青铜剪线钳"});
Translation.addTranslation("Bronze Mortar",{zh:"青铜研钵"});
Translation.addTranslation("Bronze File",{zh:"青铜锉刀"});
Translation.addTranslation("Bronze Lighter",{zh:"青铜火机"});

// Machine
Translation.addTranslation("Bronze Boiler",{zh:"青铜锅炉"});
Translation.addTranslation("Crude Blast Furnace",{zh:"粗制高炉",ru:"Доменная печь"});
Translation.addTranslation("Assembly Table",{zh:"装配台"});
Translation.addTranslation("Auto Sieve",{zh:"自动筛子"});
Translation.addTranslation("Autoclave",{zh:"高压釜",ru:"Автоклав"});
Translation.addTranslation("Blast Furnace",{zh:"高炉"});
Translation.addTranslation("Canning Machine",{zh:"装罐机"});
Translation.addTranslation("Centrifuge",{zh:"离心机",ru:"Центрифуга"});
Translation.addTranslation("Compressor",{zh:"压缩机",ru:"Сжиматель"});
Translation.addTranslation("Crusher",{zh:"破碎机",ru:"Дробитель"});
Translation.addTranslation("Cutting",{zh:"切割机",ru:"Резак"});
Translation.addTranslation("Distillery",{zh:"蒸馏室"});
Translation.addTranslation("Electric Furnace",{zh:"电炉",ru:"Электрическая печь"});
Translation.addTranslation("Electrolyzer",{zh:"电解机"});
Translation.addTranslation("Farming Station",{zh:"种植站",ru:"Фермерская станция"});
Translation.addTranslation("Macerator",{zh:"打粉机",ru:"Измельчитель"});
Translation.addTranslation("Ore Washer",{zh:"洗矿机",ru:"Рудопромывочный механизм"});
Translation.addTranslation("Wiremill",{zh:"线缆轧制机",ru:"Автоматический проволочный стан"});

// Generator
Translation.addTranslation("Fire Generator",{zh:"火力发电机",ru:"Генератор внутреннего сгорания"});
Translation.addTranslation("Fusion Reactor",{zh:"核聚变反应堆"});
Translation.addTranslation("Nuclear Reactor",{zh:"核反应堆",ru:"Ядерный реактор"});
Translation.addTranslation("Solar Generator",{zh:"太阳能发电机",ru:"Солнечный генератор"});
Translation.addTranslation("Steam Turbine",{zh:"蒸汽轮机"});

// Cover
Translation.addTranslation("Energy Display Cover",{zh:"能量显示面板",ru:"Крышка энергетического дисплея"});
Translation.addTranslation("Progress Display Cover",{zh:"进度显示面板",ru:"Крышка дисплея процесса"});

// Transformer
Translation.addTranslation("LV Transformer",{zh:"低压变压器",ru:"Трансформатор НН"});
Translation.addTranslation("MV Transformer",{zh:"中压变压器",ru:"Трансформатор СН"});
Translation.addTranslation("HV Transformer",{zh:"高压变压器",ru:"Трансформатор ВН"});
Translation.addTranslation("EV Transformer",{zh:"超高压变压器",ru:"Трансформатор СВН"});

// Network
Translation.addTranslation("Energy Card",{zh:"能源卡"});
Translation.addTranslation("Network Terminal",{zh:"网络终端"});
Translation.addTranslation("Superconductor",{zh:"超导体"});

// Battery
Translation.addTranslation("Lithium Battery",{zh:"锂电池",ru:"Литиевая батарея"});
Translation.addTranslation("Enete Battery",{zh:"恩奈特电池"});
Translation.addTranslation("Energy Crystal",{zh:"能量水晶"});
Translation.addTranslation("Lapotron Crystal",{zh:"兰波顿水晶"});
Translation.addTranslation("Lithium Battery Box",{zh:"锂电池盒",ru:"Литиевая аккумуляторная коробка"});
Translation.addTranslation("Enete Battery Box",{zh:"恩奈特电池盒"});

// Info
Translation.addTranslation("Info: ",{zh:"信息: "});
Translation.addTranslation("Load: ",{zh:"负载: "});
Translation.addTranslation("Heat: ",{zh:"热量: ",ru:"Нагрев: "});
Translation.addTranslation("Fuel: ",{zh:"燃料: ",ru:"Топливо: "});
Translation.addTranslation("Range: ",{zh:"范围: "});
Translation.addTranslation("Top Side",{zh:"顶部",ru:"Верхняя сторона"});
Translation.addTranslation("Energy: ",{zh:"能量: ",ru:"Энергия: "});
Translation.addTranslation("Voltage: ",{zh:"电压: ",ru:"Напряжение: "});
Translation.addTranslation("Coolant: ",{zh:"冷却: ",ru:"Хладагент: "});
Translation.addTranslation("Bottom Side",{zh:"底部",ru:"Нижняя сторона"});
Translation.addTranslation("Durability: ",{zh:"耐久: ",ru:"Прочность: "});
Translation.addTranslation("Network IP: ",{zh:"网络IP: "});
Translation.addTranslation("Hard Level: ",{zh:"坚硬程度: ",ru:"Уровень сложности: "});
Translation.addTranslation("Power Tier: ",{zh:"能量等级: ",ru:"Энергоуровень: "});
Translation.addTranslation("Max Voltage: ",{zh:"最大电压: ",ru:"Макс.напряжение: "});
Translation.addTranslation("Energy Input: ",{zh:"能量输入: ",ru:"Вход энергии: "});
Translation.addTranslation("Energy Output: ",{zh:"能量输出: ",ru:"Выход энергии: "});
Translation.addTranslation("Energy Storage: ",{zh:"储能: ",ru:"Энергохранилище: "});
Translation.addTranslation("Machine Energy: ",{zh:"机器能量: "});
Translation.addTranslation("Network Energy: ",{zh:"网络能量: "});
Translation.addTranslation("Destroy Tool Type: ",{zh:"破坏工具类型: "});

// Info
Translation.addTranslation("You can use it to connect to the Network Terminal to transmit energy.",{zh:"你可以用他连接网络终端来传输能量."});




// file: core/api/machine.js

var MachineRegistry = {
    machineIDs:{},

    isMachine:function(id){
        return this.machineIDs[id];
    },

    registerPrototype:function(id,state){
        this.machineIDs[id] = true;
        state.id = id;

        state.playSound = state.playSound || function(name){
            var dimension = Player.getDimension();
            if((!this.__sound || !this.__sound.isPlaying()) && this.dimension == dimension){
                this.__sound = SoundAPI.playSoundAt(this,name,true,this.data.sound_volume || 16);
            }
        }

        state.stopSound = state.stopSound || function(){
            if(this.__sound && this.__sound.isPlaying()){
                this.__sound.stop();
                this.__sound = null;
            }
        }

        if(state.defaultValues && state.defaultValues.isActive !== undefined){
            state.renderer = state.renderer || function(){
                TileRenderer.mapAtCoords(this.x,this.y,this.z,this.id,this.data.meta + (this.data.isActive?4:0));
            }

            state.setActive = state.setActive || function(isActive){
                if(this.data.isActive != isActive){
                    this.data.isActive = isActive;
                    this.renderer();
                }
            }

            state.activate = state.activate || function(sound){
                this.setActive(true);
                if(this.__sound){
                    this.playSound(sound);
                }
            }

            state.deactive = state.deactive || function(){
                this.setActive(false);
                if(this.__sound){
                    this.stopSound();
                }
            }

            state.destroy = state.destroy || function(){
                this.deactive();
                BlockRenderer.unmapAtCoords(this.x,this.y,this.z);
            }
		}

		if(!state.init && state.renderer){
			state.init = state.renderer;
        }
        
        state.setOutputSlot = state.setOutputSlot || function(name,id,count,data){
            var slot = this.container.getSlot(name);
            if(slot.id == 0 || slot.id == id && slot.data == data && slot.count < 64){
                slot.id = id,slot.data = data,slot.count += count; 
                this.container.validateSlot(name);
            } else {
                World.drop(this.x + 0.5,this.y + 1.5,this.z + 0.5,id,count,data);
            }
    
            if(slot.count > 64){
                World.drop(this.x + 0.5,this.y + 1.5,this.z + 0.5,slot.id,1,slot.data),slot.count--;
                this.container.validateSlot(name);
            }
        }
    
        state.getSlotBurnDuration = state.getSlotBurnDuration || function(name){
            var slot = this.container.getSlot(name);
            var burn = Recipes.getFuelBurnDuration(slot.id,slot.data);
            if(burn){
                if(Liquid.getItemLiquid(slot.id,slot.data)){
                    var empty = Liquid.getEmptyItem(slot.id,slot.data);
                    slot.id = empty.id,slot.data = empty.data;
                    return burn;
                } slot.count--;
                this.container.validateSlot(name);
                return burn;
            }
            return 0;
        }

        ToolAPI.registerBlockMaterial(id,"stone",1,true);
        TileEntity.registerPrototype(id,state);
    },
    
    registerMachine:function(id,state,type){
        if(state.defaultValues){
            state.defaultValues.tier = state.defaultValues.tier || 1;
            state.defaultValues.energy = 0;
            state.defaultValues.voltage = 0;
            state.defaultValues.last_voltage = 0;
            state.defaultValues.energy_storage = state.defaultValues.energy_storage || 16384;
		} else {
			state.defaultValues = {
                tier:1,
                energy:0,
                voltage:0,
                last_voltage:0,
                energy_storage:16384
			}
        }
        
        state.getTier = state.getTier || function(){
            return this.data.tier;
        }

        state.getMaxVoltage = state.getMaxVoltage || function(){
            return power(this.getTier() + 1);
        }

        state.getEnergyStorage = state.getEnergyStorage || function(){
            return this.data.energy_storage;
        }

        state.energyTick = state.energyTick || function(){
            this.data.last_voltage = this.data.voltage;
            this.data.voltage = 0;
        }

        Tooltip.tier(id,state.defaultValues.tier);
        Item.addTooltip(id,Translation.translate("Destroy Tool Type: ") + Translation.translate("Wrench"));
        
        this.registerPrototype(id,state);
        EnergyTileRegistry.addEnergyTypeForId(id,type || EU);
    },

    registerGenerator:function(id,state,type){
        state.isEnergySource = function(){return true;}
        state.canReceiveEnergy = function(){return false;}

        state.energyTick = state.energyTick || this.energyOutput;

        this.registerMachine(id,state,type || EU);
    },

    registerEnergyStorage:function(id,state,type){
        state.isEnergySource = function(){return true;}
        
        state.energyTick = state.energyTick || this.energyOutput;
        state.energyReceive = state.energyReceive || this.energyReceive;
        
        this.registerMachine(id,state,type || EU);
    },

    registerEUMachine:function(id,state){
        ICRender.getGroup("eu-wire").add(id,-1);

        this.registerMachine(id,state,EU);
    },

    registerEUGenerator:function(id,state){
        ICRender.getGroup("eu-wire").add(id,-1);

        this.registerGenerator(id,state,EU);
    },

    registerEUEnergyStorage:function(id,state){
        ICRender.getGroup("eu-wire").add(id,-1);

        this.registerEnergyStorage(id,state,EU);
    },

    energyReceive:function(type,amount,voltage){
        var voltage_max = this.getMaxVoltage();
        if(voltage > voltage_max){
            var enabled = __config__.getBool("machine.voltage_enabled");
            if(enabled){
                World.explode(this.x + 0.5,this.y + 0.5,this.z + 0.5,0.5,true);
                World.setBlock(this.x,this.y,this.z,0);
                this.selfDestroy();
                return 1;
            }
            var add = Math.min(voltage_max,this.getEnergyStorage() - this.data.energy);
        } else {
			var add = Math.min(amount,this.getEnergyStorage() - this.data.energy);
        }

        this.data.energy += add;
        this.data.voltage = Math.max(this.data.voltage,voltage);
        return add;
    },

    energyOutput:function(type,src){
        this.data.last_voltage = this.data.voltage;
        this.data.voltage = 0;

		var output = this.getMaxVoltage();
		if(this.data.energy >= output){
			this.data.energy += src.add(output) - output;
        }
    },
    
    setDrop:function(name,dropID,dropData){
        Block.registerDropFunction(name,function(coords,id,data,level){
            BlockRenderer.unmapAtCoords(coords.x,coords.y,coords.z);
            var item = Player.getCarriedItem();
            if(Tool.isTool(item.id,"Wrench")){
                World.setBlock(coords.x,coords.y,coords.z,0);
                return [[id,1,data]];
            }

            var block = ToolAPI.getBlockDestroyLevel(id);
            if(level >= block) return [[dropID,1,dropData || 0]];
            return [];
        });
    },

    isValidEUItem:function(id,count,data,container){
		return ChargeItemRegistry.isValidItem(id,"Eu",container.tileEntity.getTier());
	},
	
	isValidEUStorage:function(id,count,data,container){
		return ChargeItemRegistry.isValidStorage(id,"Eu",container.tileEntity.getTier());
    },
    
    wireIDs:{},

    isWire:function(id){
        return this.wireIDs[id];
    },
    
    registerEUWire:function(id,volt){
        this.wireIDs[id] = true;

        EU.registerWire(id,volt,function(voltage){
            for(let key in this.wireMap){
                var coords = key.split(':'),x = Math.floor(coords[0]),y = Math.floor(coords[1]),z = Math.floor(coords[2]);
                World.setBlock(x,y,z,0);
                for(let i = 0;i < 32;i++){
                    var px = x + Math.random(),pz = z + Math.random(),py = y + Math.random();
                    Particles.addFarParticle(ParticleType.smoke,px,py,pz,0,0.01,0);
                }
            }
            EnergyNetBuilder.removeNet(this);
        });
    }
}

Callback.addCallback("DestroyBlockStart",function(coords,block){
    var item = Player.getCarriedItem();
    if(MachineRegistry.isMachine(block.id) && Tool.isTool(item.id,"Wrench")){
        Block.setTempDestroyTime(block.id,0);
        SoundAPI.playSound("tool/wrench.ogg");
        ToolAPI.breakCarriedTool(8);
    }
});




// file: core/api/recipe.js

var RecipeRegistry = {
    addShapedRecipe:function(output,recipe,data,extra){
        Recipes.addShaped(output,recipe,data,function(api,field,result){
            for(let i in field){
                if(extra[i] >= 1){
                    field[i].data += extra[i];
                    if(field[i].data >= Item.getMaxDamage(field[i].id)) field[i].id = field[i].count = field[i].data = 0;
                } else {
                    api.decreaseFieldSlot(i);
                }
            }
        });
    },
    
    addShapeless:function(output,data,tool){
		data.push({id:tool,data:-1});
		Recipes.addShapeless(output,data,function(api,field,output){
			for (var i in field){
				if(field[i].id == tool){
					field[i].data++;
					if (field[i].data >= Item.getMaxDamage(tool)) field[i].id = field[i].count = field[i].data = 0;
				} else {
					api.decreaseFieldSlot(i);
				}
			}
		});
    },

    recipes:{},

    getRecipe:function(name){
		if(!this.recipes[name]) this.recipes[name] = {};
		return this.recipes[name];
	},

    getRecipeResult:function(name,data){
		var recipe = this.getRecipe(name);
		if(recipe){
			if(data[2]) return recipe[data[0] + ":-1:" + data[2] + ":" + data[3]] || recipe[data[2] + ":-1:" + data[0] + ":" + data[1]] || recipe[data[0] + ":" + data[1] + ":" + data[2] + ":-1"] || recipe[data[2] + ":" + data[3] + ":" + data[0] + ":-1"] || recipe[data[0] + ":" + data[1] + ":" + data[2] + ":" + data[3]] || recipe[data[2] + ":" + data[3] + ":" + data[0] + ":" + data[1]]
			return recipe[data[0] + ":-1"] || recipe[data[0] + ":" + data[1]];
		}
	},

	addMaceratorRecipe:function(input,output){
		var recipe = this.getRecipe("Macerator");
		recipe[input.id + ":" + input.data] = output;
	},

	addCompressorRecipe:function(input,output){
		var recipe = this.getRecipe("Compressor");
		recipe[input.id + ":" + input.data] = output;
	},

	addBlastFurnaceRecipe:function(input,output){
		var recipe = this.getRecipe("BlastFurnace");
		recipe[input.id + ":" + input.data] = output;
	},

	addCrusherRecipe:function(input,output){
		var recipe = this.getRecipe("Crusher");
		recipe[input.id + ":" + input.data] = output;
	},

	addCentrifugeRecipe:function(input,output){
		var recipe = this.getRecipe("Centrifuge");
		recipe[input.id + ":" + input.data] = {output:output,count:input.count};
	},
	
	addCuttingRecipe:function(input,output){
		var recipe = this.getRecipe("Cutting");
		recipe[input.id + ":" + input.data] = output;
	},

	addOreWasherRecipe:function(input,output){
		var recipe = this.getRecipe("OreWasher");
		recipe[input.id + ":" + input.data] = output;
	},

	addCanningMachineRecipe:function(input,output,cell){
		var recipe = this.getRecipe("CanningMachine");
		recipe[input.id + ":" + input.data + ":" + cell.id + ":" + cell.data] = output;
	},

	addFarmingStationRecipe:function(input,output,dirt){
		var recipe = this.getRecipe("FarmingStation");
		recipe[input.id + ":" + input.data] = {output:output,dirt:dirt};
	},

	addWiremillRecipe:function(input,output){
		var recipe = this.getRecipe("Wiremill");
		recipe[input.id + ":" + input.data] = {output:output,count:input.count};
	},

	addAutoclaveRecipe:function(input,output){
		var recipe = this.getRecipe("Autoclave");
		recipe[input.id + ":" + input.data] = {output:output,count:input.count};
	},

	addDistilleryRecipe:function(input,output){
		var recipe = this.getRecipe("Distillery");
		recipe[input.id + ":" + input.data] = {output:output,count:input.count};
	},

	addElectrolyzerRecipe:function(input,output){
		var recipe = this.getRecipe("Electrolyzer");
		recipe[input.id + ":" + input.data] = {output:output,count:input.count};
	},

	addAutoSaieveRecipe:function(input,output){
		var recipe = this.getRecipe("AutoSaieve");
		if(!recipe[input.id + ":" + input.data]) recipe[input.id + ":" + input.data] = [];
		for(let key in output) recipe[input.id + ":" + input.data].push(output[key]);
	},
	
	addFusionReactorRecipe:function(input,output){
		var recipe = this.getRecipe("FusionReactor");
		recipe[input[0].liquid + ":" + input[1].liquid] = {input:[input[0].mB,input[1].mB],output:output};
		recipe[input[1].liquid + ":" + input[0].liquid] = {input:[input[1].mB,input[0].mB],output:output};
	},

	addAssemblyTableRecipe:function(input,output){
		var recipe = this.getRecipe("AssemblyTable");
		recipe[input[0].id + ":" + input[0].data + ":" + input[1].id + ":" + input[1].data] = {output:output,input:[input[0].count,input[1].count]};
		recipe[input[1].id + ":" + input[1].data + ":" + input[0].id + ":" + input[0].data] = {output:output,input:[input[1].count,input[0].count]};
	}
}




// file: core/api/structure.js

var StructureRegistry = {
    structures:{},

    dir:__dir__ + "res/structures/",

    read:function(name){
		if(!this.structures[name]){
			if(FileTools.isExists(this.dir + name + ".str")){
				this.structures[name] = JSON.parse(FileTools.ReadText(this.dir + name + ".str"));
			} else {
				return false;
			}
        }
        
		return this.structures[name];
    },

    save:function(name,struct){
		if(!FileTools.isExists(this.dir)) FileTools.mkdir(this.dir);
		
		for(let i = 0;i < struct.length;i++){
			struct[i][3].id = (IDRegistry.getNameByID(struct[i][3].id) || struct[i][3].id);
			
			if(struct[i][3].data == 0) struct[i][3] = struct[i][3].id;
		}
		
		this.structures[name] = struct;
		FileTools.WriteText(this.dir + name + ".str",JSON.stringify(struct));
    },

    getStructure:function(name,x,y,z,isRotate){
        var struct = this.read(name);
        if(struct){
            var rotates = (isRotate?[[0,0,1,0,1,0,-1,0,0],[0,0,-1,0,1,0,1,0,0],[0,0,1,0,1,0,1,0,0],[1,0,0,0,1,0,0,0,1]]:[[1,0,0,0,-1,0,0,0,-1],[0,0,1,0,1,0,1,0,0],[-1,0,0,0,-1,0,0,0,1],[1,0,0,0,0,1,0,-1,0],[0,0,-1,0,1,0,1,0,0],[0,1,0,-1,0,0,0,0,1],[1,0,0,0,0,-1,0,1,0],[0,0,1,0,1,0,-1,0,0],[0,-1,0,1,0,0,0,0,1],[1,0,0,0,1,0,0,0,1]]);
            for(var i = 0; i < rotates.length; i++){
                var rotate = rotates[i];
                for(var k = 0;k < struct.length;k++){
                    var id = 0,data = 0;

                    if(typeof struct[k][3] == "number"){
                        id = struct[k][3];
                    } else if(typeof struct[k][3] == "string"){
                        id = BlockID[struct[k][3]];
                    } else {
                        id = struct[k][3].id;
                        data = struct[k][3].data;
                    }
                    
                    var coords = {
                        x:struct[k][0] * rotate[0] + struct[k][1] * rotate[1] + struct[k][2] * rotate[2],
                        y:struct[k][0] * rotate[3] + struct[k][1] * rotate[4] + struct[k][2] * rotate[5],
                        z:struct[k][0] * rotate[6] + struct[k][1] * rotate[7] + struct[k][2] * rotate[8]
                    };
                    var block = World.getBlock(x + coords.x,y + coords.y,z + coords.z);
                    if(block.id != id || block.data != data) break;
                    if(block.id == id && block.data == data && k == struct.length - 1) return true;
                }
            }
        }

        return false;
    }
}




// file: core/api/tool.js

var Tool = {
    tool:{},
    
    registerTool:function(id,type){
        if(!this.tool[type]) this.tool[type] = [];
        this.tool[type].push(id);
    },
    
    getAllTool:function(type){
        if(!this.tool[type]) this.tool[type] = [];
        return this.tool[type];
    },
    
    isTool:function(id,type){
        var tool = this.getAllTool(type);
        for(let count in tool){
            if(tool[count] == id) return true;
        }
        return false;
    },
    
    HAMMER_RECIOE:{},
    
    getHammerRecioe:function(block){
        return this.HAMMER_RECIOE[block];
    },

    setHammerDestroyDrop:function(blockID,dropID,maxCount,dropData,minCount){
        if(!minCount) minCount = maxCount;
        
        this.HAMMER_RECIOE[blockID] = {id:dropID,count:[minCount,maxCount],data:dropData || 0}

        Block.registerDropFunctionForID(blockID,function(coords,id,data){
            var drop = Tool.getHammerRecioe(id);
            if(Tool.isTool(Player.getCarriedItem().id,"Hammer")){
                return [[drop.id,random(drop.count[0],drop.count[1]),drop.data]];
            }
            return [[id,1,data]];
        });
    }
}

ToolType.lighter = {
    useItem:function(coords,item,block){
        var x = coords.relative.x,y = coords.relative.y,z = coords.relative.z;
        if(World.isAirBlock(x,y,z)){
            World.setBlock(x,y,z,51);
            World.playSoundAtEntity(Player.get(),"fire.ignite",1,0.8);
            ToolAPI.breakCarriedTool(1);
        }
    }
}

ToolType.hammer = {
    enchantType:Native.EnchantType.pickaxe,
    damage:2,
    blockTypes:["dirt","stone"]
}




// file: core/api/upgrade.js

var UpgradeRegistry = {
	data: {},
	
	getUpgradeData:function(id){
		return this.data[id];
	},
	
	isValidUpgrade:function(id,count,data,container){
		var upgrades = container.tileEntity.upgrades,upgradeData = UpgradeRegistry.getUpgradeData(id);
		if(upgradeData && (!upgrades || upgrades.indexOf(upgradeData.type) != true)){
			return true;
		}
		return false;
	},

	registerUpgrade:function(id,type,func){
		this.data[id] = {type:type,func:func};
	},

	callUpgrade:function(item,machine,container,data,coords){
		var upgrades = container.tileEntity.upgrades;
		var upgrade = this.getUpgradeData(item.id);
		if(upgrade && (!upgrades || upgrades.indexOf(upgrade.type) != true)){
			upgrade.func(item,machine,container,data,coords);
		}
	},
	
	getUpgrades:function(machine,container){
		var upgrades = [];
		for(let slotName in container.slots){
			if(slotName.match(/Upgrade/)){
				var slot = container.getSlot(slotName);
				if(slot.id){
					var find = false;
					for(let i in upgrades){
						var item = upgrades[i];
						if(item.id == slot.id && item.data == slot.data){
							find = true;
							item.count += slot.count;
						}
					}
					if(!find){
						item = {id:slot.id,count:slot.count,data:slot.data};
						upgrades.push(item);
					}
				}
			}
		}
		return upgrades;
	},

	executeUpgrades:function(machine){
		if(machine.initValues){machine.initValues();}
		
		var container = machine.container,data = machine.data,coords = {x:machine.x,y:machine.y,z:machine.z},upgrades = this.getUpgrades(machine,container);
		for(let i in upgrades){
			this.callUpgrade(upgrades[i],machine,container,data,coords);
		}
		StorageInterface.checkHoppers(machine);
	}
}




// file: machine/bronze_boiler.js

// [青铜锅炉]Bronze Boiler
IDRegistry.genBlockID("bronzeBoiler");
Block.createBlock("bronzeBoiler",[
    {name:"Bronze Boiler",texture:[["machine_bottom",0],["machine_bottom",0],["machine_side",0],["bronze_boiler",0],["machine_side",0],["machine_side",0]],inCreative:true}
],"machine");
TileRenderer.setStandartModel(BlockID.bronzeBoiler,[["machine_bottom",0],["machine_bottom",0],["machine_side",0],["bronze_boiler",0],["machine_side",0],["machine_side",0]]);
TileRenderer.registerRotationModel(BlockID.bronzeBoiler,0,[["machine_bottom",0],["machine_bottom",0],["machine_side",0],["bronze_boiler",0],["machine_side",0],["machine_side",0]]);
TileRenderer.registerRotationModel(BlockID.bronzeBoiler,4,[["machine_bottom",0],["machine_bottom",0],["machine_side",0],["bronze_boiler",1],["machine_side",0],["machine_side",0]]);

MachineRegistry.setDrop("bronzeBoiler",BlockID.machineCasing,0);
Callback.addCallback("PreLoaded",function(){
	Recipes.addShaped({id:BlockID.bronzeBoiler,count:1,data:0},[
        "a",
        "b",
        "c"
    ],["a",ItemID.plateBronze,0,"b",BlockID.machineCasing,0,"c",61,0]);
});

var GuiBronzeBoiler = new UI.StandartWindow({
	standart:{
		header:{text:{text:Translation.translate("Bronze Boiler")}},
		inventory:{standart:true},
		background:{standart:true}
    },

    drawing:[
        {type:"bitmap",x:450 + GUI_SCALE * 3,y:75 + GUI_SCALE * 2,bitmap:"fireBackground",scale:GUI_SCALE},
        {type:"bitmap",x:900 - GUI_SCALE * 3,y:175 - GUI_SCALE * 6,bitmap:"liquidBackground",scale:GUI_SCALE}
    ],
    
	elements:{
        "scaleBurn":{type:"scale",x:450 + GUI_SCALE * 3,y:75 + GUI_SCALE * 2,direction:1,value:0.5,bitmap:"fireScale",scale:GUI_SCALE},
		"slotFuel":{type:"slot",x:450,y:150,bitmap:"slot_fuel",isValid:function(id,count,data){return Recipes.getFuelBurnDuration(id,data) > 0;}},

        "scaleLiquid":{type:"scale",x:900 + GUI_SCALE * 3,y:175,direction:1,value:0.5,bitmap:"liquidScale",overlay:"liquidScale",scale:GUI_SCALE},

        "slotLiquid1":{type:"slot",x:720,y:325,bitmap:"slot_cell",isValid:function(id,count,data){return Liquid.getItemLiquid(id,data) == "water";}},
        "slotLiquid2":{type:"slot",x:780,y:325,bitmap:"slot_cell",isValid:function(){return false;}}
	}
});

MachineRegistry.registerPrototype(BlockID.bronzeBoiler,{
    defaultValues:{
        meta:0,
        burn:0,
        burnMax:0,
        isActive:false
    },
    
    init:function(){
		this.liquidStorage.setLimit("water",8);
		this.renderer();
    },

    tick:function(){
        StorageInterface.checkHoppers(this);

        if(World.getBlockID(this.x,this.y + 1,this.z) == BlockID.ironTank){
            if(this.data.burn <= 0) this.data.burn = this.data.burnMax = this.getSlotBurnDuration("slotFuel");

            if(this.data.burn > 0){
                this.activate();
                this.data.burn--;
                
                if(World.getThreadTime()%20 == 0){
                    if(this.liquidStorage.getAmount("water") >= (8 / 1000)){
                        this.liquidStorage.getLiquid("water",8 / 1000);
                        
                        var tile = World.getTileEntity(this.x,this.y + 1,this.z);
                        var stored = tile.liquidStorage.getLiquidStored();
                        var amount = tile.liquidStorage.getAmount(stored);
                        
                        if(tile && (!stored || stored == "steam" && amount < 16)){
                            tile.liquidStorage.addLiquid("steam",16 / 1000);
                        }
                    }
                }
            } else {this.deactive();}
        }

        var liquid1 = this.container.getSlot("slotLiquid1"),liquid2 = this.container.getSlot("slotLiquid2");
        var empty = Liquid.getEmptyItem(liquid1.id,liquid1.data);
        if(empty && empty.liquid == "water"){
            var storage = Liquid.getItemStorage(liquid1.id,liquid1.data);
            if(this.liquidStorage.getAmount("water") + storage <= 8 && (liquid2.id == empty.id && liquid2.data == empty.data && liquid2.count < Item.getMaxStack(empty.id) || liquid2.id == 0)){
                this.liquidStorage.addLiquid("water",storage);
                liquid1.count--;
                liquid2.id = empty.id;
                liquid2.data = empty.data;
                liquid2.count++;
                this.container.validateAll();
            }
        }

        this.liquidStorage.updateUiScale("scaleLiquid","water");
        this.container.setScale("scaleBurn",parseInt(this.data.burn / this.data.burnMax * 14) / 14 || 0);
    },

    getGuiScreen:function(){
        return GuiBronzeBoiler;
    }
});
TileRenderer.setRotationPlaceFunction(BlockID.bronzeBoiler);
StorageInterface.createInterface(BlockID.bronzeBoiler,{
	slots:{
		"slotFuel":{input:true}
    },
    
	isValidInput:function(item){
        return Recipes.getFuelBurnDuration(item.id,item.data) > 0;
	}
});




// file: machine/crude_blast_furnace.js

// [高炉砖]Blast Furnace Brick
IDRegistry.genBlockID("blastFurnaceBrick");
Block.createBlock("blastFurnaceBrick",[
    {name:"Blast Furnace Brick",texture:[["blast_furnace_brick",0]],inCreative:true}
],"stone");

// [粗制高炉]Crude Blast Furnace
IDRegistry.genBlockID("crudeBlastFurnace");
Block.createBlock("crudeBlastFurnace",[
    {name:"Crude Blast Furnace",texture:[["blast_furnace_brick",0],["blast_furnace_brick",0],["blast_furnace_brick",0],["crude_blast_furnace",0],["blast_furnace_brick",0],["blast_furnace_brick",0]],inCreative:true}
],{solid:true,destroytime:3,explosionres:12});
TileRenderer.setStandartModel(BlockID.crudeBlastFurnace,[["blast_furnace_brick",0],["blast_furnace_brick",0],["blast_furnace_brick",0],["crude_blast_furnace",0],["blast_furnace_brick",0],["blast_furnace_brick",0]]);
TileRenderer.registerRotationModel(BlockID.crudeBlastFurnace,0,[["blast_furnace_brick",0],["blast_furnace_brick",0],["blast_furnace_brick",0],["crude_blast_furnace",0],["blast_furnace_brick",0],["blast_furnace_brick",0]]);
TileRenderer.registerRotationModel(BlockID.crudeBlastFurnace,4,[["blast_furnace_brick",0],["blast_furnace_brick",0],["blast_furnace_brick",0],["crude_blast_furnace",1],["blast_furnace_brick",0],["blast_furnace_brick",0]]);

Callback.addCallback("PreLoaded",function(){
    Recipes.addShaped({id:BlockID.blastFurnaceBrick,count:4,data:0},[
        "aba",
        "b b",
        "aba"
    ],["a",337,0,"b",45,0]);

	Recipes.addShaped({id:BlockID.crudeBlastFurnace,count:1,data:0},[
        "aba",
        "bcb",
        "aba"
    ],["a",ItemID.plateIron,0,"b",45,0,"c",61,0]);
});

var GuiCrudeBlastFurnace = new UI.StandartWindow({
	standart:{
		header:{text:{text:Translation.translate("Blast Furnace")}},
		inventory:{standart:true},
		background:{standart:true}
    },

    drawing:[
        {type:"bitmap",x:900,y:325,bitmap:"logo",scale:GUI_SCALE},
        {type:"bitmap",x:525,y:225 + GUI_SCALE,bitmap:"arrow_background",scale:GUI_SCALE},
        {type:"bitmap",x:425 + GUI_SCALE * 4,y:225 + GUI_SCALE * 2,bitmap:"fireBackground",scale:GUI_SCALE}
    ],
    
	elements:{
        "slotInput":{type:"slot",x:425,y:150,bitmap:"slot_empty",scale:GUI_SCALE},
        "scaleArrow":{type:"scale",x:525,y:225 + GUI_SCALE,direction:0,value:0.5,bitmap:"arrow_scale",scale:GUI_SCALE},
        "slotOutput":{type:"slot",x:625,y:225,bitmap:"slot_empty",scale:GUI_SCALE,isValid:function(){return false;}},
		"scaleBurn":{type:"scale",x:425 + GUI_SCALE * 3,y:225 + GUI_SCALE * 2,direction:1,value:0.5,bitmap:"fireScale",scale:GUI_SCALE},
        "slotFuel":{type:"slot",x:425,y:300,bitmap:"slot_fuel",isValid:function(id,count,data){return Recipes.getFuelBurnDuration(id,data) > 0;}}
	}
});

MachineRegistry.registerPrototype(BlockID.crudeBlastFurnace,{
    defaultValues:{
        meta:0,
        burn:0,
        burnMax:0,
        progress:0,
        isActive:false
    },
    
    tick:function(){
        if(StructureRegistry.getStructure("crude_blast_furnace",this.x,this.y,this.z,true)){
            StorageInterface.checkHoppers(this);
        
            var input = this.container.getSlot("slotInput");
            var recipe = RecipeRegistry.getRecipeResult("BlastFurnace",[input.id,input.data]);
            
            if(this.data.burn > 0) this.data.burn -= 1;
            if(this.data.burn == 0 && recipe) this.data.burn = this.data.burnMax = this.getSlotBurnDuration("slotFuel");
            
            if(recipe){if(this.data.burn > 0){
                this.activate();
                this.data.progress += 1 / 6000;
                
                if(this.data.progress.toFixed(3) >= 1){
                    this.setOutputSlot("slotOutput",recipe[0].id,recipe[0].count,recipe[0].data),input.count--;
                    this.container.validateAll();
                    this.data.progress = 0;
                }
            } else {this.deactive();}} else {this.deactive(),this.data.progress = 0;}
        } else {this.deactive(),this.data.progress = 0;}
        
        this.container.setScale("scaleArrow",parseInt(this.data.progress / 1 * 22) / 22);
        this.container.setScale("scaleBurn",parseInt(this.data.burn / this.data.burnMax * 14) / 14 || 0);
    },

    getGuiScreen:function(){
        return GuiCrudeBlastFurnace;
    }
});
TileRenderer.setRotationPlaceFunction(BlockID.crudeBlastFurnace);
StorageInterface.createInterface(BlockID.crudeBlastFurnace,{
	slots:{
		"slotInput":{input:true},
        "slotOutput":{output:true}
    },
    
	isValidInput:function(item){
		return RecipeRegistry.getRecipeResult("BlastFurnace",[item.id,item.data])?true:false;
	}
});




// file: machine/transformer/LV.js

// 低压变压器
IDRegistry.genBlockID("transformerLV");
Block.createBlock("transformerLV",[
    {name:"LV Transformer",texture:[["transformer_side",0],["transformer_side",0],["transformer_side",0],["transformer",0],["transformer_side",0],["transformer_side",0]],inCreative:true}
],"machine");
TileRenderer.setStandartModel(BlockID.transformerLV,[["transformer_side",0],["transformer_side",0],["transformer_side",0],["transformer",0],["transformer_side",0],["transformer_side",0]]);
TileRenderer.registerFullRotationModel(BlockID.transformerLV,0,[["transformer_side",0],["transformer_side",0],["transformer_side",0],["transformer",0],["transformer_side",0],["transformer_side",0]]);

Callback.addCallback("PreLoaded",function(){
    Item.addCreativeGroup("transformer",Translation.translate("Transformer"),[BlockID.transformerLV]);
    Recipes.addShaped({id:BlockID.transformerLV,count:1,data:0},[
        "dcd",
        "aba",
        "dcd"
    ],["a",BlockID.coilTin,0,"b",BlockID.machineCasing,1,"c",ItemID.partTin,0,"d",ItemID.stickTin,0]);
});

MachineRegistry.registerEUMachine(BlockID.transformerLV,{
	defaultValues:{
        meta:0,
        tier:1,
        mode:false
    },

    redstone:function(signal){
        var mode = signal.power > 0;
        if(mode != this.data.mode){
            this.data.mode = mode;
            EnergyNetBuilder.rebuildTileNet(this);
        }
    },

    energyTick:function(type,src){
        this.data.last_voltage = this.data.voltage;
        this.data.voltage = 0;
    
        var voltage_max = this.getMaxVoltage();
        if(this.data.mode){
            if(this.data.energy >= voltage_max) this.data.energy += src.add(voltage_max,voltage_max) - voltage_max;
        } else {
            if(this.data.energy >= voltage_max / 4){
                var output = this.data.energy;
                this.data.energy += src.add(output,voltage_max / 4) - output;
            }
        }
    },

    destroy:function(){
        BlockRenderer.unmapAtCoords(this.x,this.y,this.z);
    },

    renderer:function(){
        TileRenderer.mapAtCoords(this.x,this.y,this.z,this.id,this.data.meta);
    },

    isEnergySource:function(){
        return true;
    },

    canReceiveEnergy:function(side){
        if(side == this.data.meta) return !this.data.mode;
        return this.data.mode;
    },
    
    canExtractEnergy:function(side){
        if(side == this.data.meta) return this.data.mode;
        return !this.data.mode;
    },

    energyReceive:MachineRegistry.energyReceive
});

Block.registerPlaceFunction("transformerLV",function(coords,item,block){
    var place = canTileBeReplaced(block.id,block.data)?coords:coords.relative;
    World.setBlock(place.x,place.y,place.z,item.id,item.data);
    var rotation = TileRenderer.getBlockRotation(true);
    var tile = World.addTileEntity(place.x,place.y,place.z);
    tile.data.meta = rotation;
    TileRenderer.mapAtCoords(place.x,place.y,place.z,item.id,rotation);
});




// file: machine/transformer/MV.js

// [中压变压器]MV Transformer
IDRegistry.genBlockID("transformerMV");
Block.createBlock("transformerMV",[
    {name:"MV Transformer",texture:[["transformer_side",1],["transformer_side",1],["transformer_side",1],["transformer",1],["transformer_side",1],["transformer_side",1]],inCreative:true}
],"machine");
TileRenderer.setStandartModel(BlockID.transformerMV,[["transformer_side",1],["transformer_side",1],["transformer_side",1],["transformer",1],["transformer_side",1],["transformer_side",1]]);
TileRenderer.registerFullRotationModel(BlockID.transformerMV,0,[["transformer_side",1],["transformer_side",1],["transformer_side",1],["transformer",1],["transformer_side",1],["transformer_side",1]]);

Callback.addCallback("PreLoaded",function(){
    Item.addCreativeGroup("transformer",Translation.translate("Transformer"),[BlockID.transformerMV]);
    Recipes.addShaped({id:BlockID.transformerMV,count:1,data:0},[
        "dcd",
        "aba",
        "dcd"
    ],["a",BlockID.coilCopper,0,"b",BlockID.machineCasing,1,"c",ItemID.partCopper,0,"d",ItemID.stickCopper,0]);
});

MachineRegistry.registerEUMachine(BlockID.transformerMV,{
	defaultValues:{
        meta:0,
        tier:2,
        mode:false
    },

    redstone:function(signal){
        var mode = signal.power > 0;
        if(mode != this.data.mode){
            this.data.mode = mode;
            EnergyNetBuilder.rebuildTileNet(this);
        }
    },

    energyTick:function(type,src){
        this.data.last_voltage = this.data.voltage;
        this.data.voltage = 0;
    
        var voltage_max = this.getMaxVoltage();
        if(this.data.mode){
            if(this.data.energy >= voltage_max) this.data.energy += src.add(voltage_max,voltage_max) - voltage_max;
        } else {
            if(this.data.energy >= voltage_max / 4){
                var output = this.data.energy;
                this.data.energy += src.add(output,voltage_max / 4) - output;
            }
        }
    },

    destroy:function(){
        BlockRenderer.unmapAtCoords(this.x,this.y,this.z);
    },

    renderer:function(){
        TileRenderer.mapAtCoords(this.x,this.y,this.z,this.id,this.data.meta);
    },

    isEnergySource:function(){
        return true;
    },

    canReceiveEnergy:function(side){
        if(side == this.data.meta) return !this.data.mode;
        return this.data.mode;
    },
    
    canExtractEnergy:function(side){
        if(side == this.data.meta) return this.data.mode;
        return !this.data.mode;
    },

    energyReceive:MachineRegistry.energyReceive
});

Block.registerPlaceFunction("transformerMV",function(coords,item,block){
    var place = canTileBeReplaced(block.id,block.data)?coords:coords.relative;
    World.setBlock(place.x,place.y,place.z,item.id,item.data);
    var rotation = TileRenderer.getBlockRotation(true);
    var tile = World.addTileEntity(place.x,place.y,place.z);
    tile.data.meta = rotation;
    TileRenderer.mapAtCoords(place.x,place.y,place.z,item.id,rotation);
});




// file: machine/transformer/HV.js

// [高压变压器]HV Transformer
IDRegistry.genBlockID("transformerHV");
Block.createBlock("transformerHV",[
    {name:"HV Transformer",texture:[["transformer_side",2],["transformer_side",2],["transformer_side",2],["transformer",2],["transformer_side",2],["transformer_side",2]],inCreative:true}
],"machine");
TileRenderer.setStandartModel(BlockID.transformerHV,[["transformer_side",2],["transformer_side",2],["transformer_side",2],["transformer",2],["transformer_side",2],["transformer_side",2]]);
TileRenderer.registerFullRotationModel(BlockID.transformerHV,0,[["transformer_side",2],["transformer_side",2],["transformer_side",2],["transformer",2],["transformer_side",2],["transformer_side",2]]);

Callback.addCallback("PreLoaded",function(){
    Item.addCreativeGroup("transformer",Translation.translate("Transformer"),[BlockID.transformerHV]);
    Recipes.addShaped({id:BlockID.transformerHV,count:1,data:0},[
        "dcd",
        "aba",
        "dcd"
    ],["a",BlockID.coilGold,0,"b",BlockID.machineCasing,2,"c",ItemID.partGold  ,0,"d",ItemID.stickGold  ,0]);
});

MachineRegistry.registerEUMachine(BlockID.transformerHV,{
	defaultValues:{
        meta:0,
        tier:3,
        mode:false
    },

    redstone:function(signal){
        var mode = signal.power > 0;
        if(mode != this.data.mode){
            this.data.mode = mode;
            EnergyNetBuilder.rebuildTileNet(this);
        }
    },

    energyTick:function(type,src){
        this.data.last_voltage = this.data.voltage;
        this.data.voltage = 0;
    
        var voltage_max = this.getMaxVoltage();
        if(this.data.mode){
            if(this.data.energy >= voltage_max) this.data.energy += src.add(voltage_max,voltage_max) - voltage_max;
        } else {
            if(this.data.energy >= voltage_max / 4){
                var output = this.data.energy;
                this.data.energy += src.add(output,voltage_max / 4) - output;
            }
        }
    },

    destroy:function(){
        BlockRenderer.unmapAtCoords(this.x,this.y,this.z);
    },

    renderer:function(){
        TileRenderer.mapAtCoords(this.x,this.y,this.z,this.id,this.data.meta);
    },

    isEnergySource:function(){
        return true;
    },

    canReceiveEnergy:function(side){
        if(side == this.data.meta) return !this.data.mode;
        return this.data.mode;
    },
    
    canExtractEnergy:function(side){
        if(side == this.data.meta) return this.data.mode;
        return !this.data.mode;
    },

    energyReceive:MachineRegistry.energyReceive
});

Block.registerPlaceFunction("transformerHV",function(coords,item,block){
    var place = canTileBeReplaced(block.id,block.data)?coords:coords.relative;
    World.setBlock(place.x,place.y,place.z,item.id,item.data);
    var rotation = TileRenderer.getBlockRotation(true);
    var tile = World.addTileEntity(place.x,place.y,place.z);
    tile.data.meta = rotation;
    TileRenderer.mapAtCoords(place.x,place.y,place.z,item.id,rotation);
});




// file: machine/transformer/EV.js

// [特高压变压器]EV Transformer
IDRegistry.genBlockID("transformerEV");
Block.createBlock("transformerEV",[
    {name:"EV Transformer",texture:[["transformer_side",3],["transformer_side",3],["transformer_side",3],["transformer",3],["transformer_side",3],["transformer_side",3]],inCreative:true}
],"machine");
TileRenderer.setStandartModel(BlockID.transformerEV,[["transformer_side",3],["transformer_side",3],["transformer_side",3],["transformer",3],["transformer_side",3],["transformer_side",3]]);
TileRenderer.registerFullRotationModel(BlockID.transformerEV,0,[["transformer_side",3],["transformer_side",3],["transformer_side",3],["transformer",3],["transformer_side",3],["transformer_side",3]]);

Callback.addCallback("PreLoaded",function(){
    Item.addCreativeGroup("transformer",Translation.translate("Transformer"),[BlockID.transformerEV]);
    Recipes.addShaped({id:BlockID.transformerEV,count:1,data:0},[
        "dcd",
        "aba",
        "dcd"
    ],["a",BlockID.coilSteel,0,"b",BlockID.machineCasing,2,"c",ItemID.partSteel,0,"d",ItemID.stickSteel,0]);
});

MachineRegistry.registerEUMachine(BlockID.transformerEV,{
	defaultValues:{
        meta:0,
        tier:4,
        mode:false
    },

    redstone:function(signal){
        var mode = signal.power > 0;
        if(mode != this.data.mode){
            this.data.mode = mode;
            EnergyNetBuilder.rebuildTileNet(this);
        }
    },

    energyTick:function(type,src){
        this.data.last_voltage = this.data.voltage;
        this.data.voltage = 0;
    
        var voltage_max = this.getMaxVoltage();
        if(this.data.mode){
            if(this.data.energy >= voltage_max) this.data.energy += src.add(voltage_max,voltage_max) - voltage_max;
        } else {
            if(this.data.energy >= voltage_max / 4){
                var output = this.data.energy;
                this.data.energy += src.add(output,voltage_max / 4) - output;
            }
        }
    },

    destroy:function(){
        BlockRenderer.unmapAtCoords(this.x,this.y,this.z);
    },

    renderer:function(){
        TileRenderer.mapAtCoords(this.x,this.y,this.z,this.id,this.data.meta);
    },

    isEnergySource:function(){
        return true;
    },

    canReceiveEnergy:function(side){
        if(side == this.data.meta) return !this.data.mode;
        return this.data.mode;
    },
    
    canExtractEnergy:function(side){
        if(side == this.data.meta) return this.data.mode;
        return !this.data.mode;
    },

    energyReceive:MachineRegistry.energyReceive
});

Block.registerPlaceFunction("transformerEV",function(coords,item,block){
    var place = canTileBeReplaced(block.id,block.data)?coords:coords.relative;
    World.setBlock(place.x,place.y,place.z,item.id,item.data);
    var rotation = TileRenderer.getBlockRotation(true);
    var tile = World.addTileEntity(place.x,place.y,place.z);
    tile.data.meta = rotation;
    TileRenderer.mapAtCoords(place.x,place.y,place.z,item.id,rotation);
});




// file: machine/network/energy_card.js

// 能源卡
IDRegistry.genItemID("energyCard");
Item.createItem("energyCard","Energy Card",{name:"energy_card"},{stack:1});
Tool.registerTool(ItemID.energyCard,"EnergyCard");

Item.setItemName(ItemID.energyCard,function(item,name,tooltip){
    if(item.extra){
        var x = Math.abs(item.extra.getInt("x")),y = Math.abs(item.extra.getInt("y")),z = Math.abs(item.extra.getInt("z"));
        return name + tooltip + "\n§7" + Translation.translate("Network IP: ") + x + "." + y + "." + z;
    }
    return name + tooltip;
});

Callback.addCallback("PreLoaded",function(){
    Recipes.addShaped({id:ItemID.energyCard,count:1,data:0},[
        "aba",
        "cdc"
    ],["a",ItemID.plateIron,0,"b",ItemID.circuit,0,"c",ItemID.plateGold,0,"d",331,0]);
});




// file: machine/network/network_terminal.js

// [网络终端]Network Terminal
IDRegistry.genBlockID("networkTerminal");
Block.createBlock("networkTerminal",[
    {name:"Network Terminal",texture:[["machine_bottom",2],["machine_top",2],["machine_side",2],["network_terminal",0],["machine_side",2],["machine_side",2]],inCreative:true}
],"machine");
TileRenderer.setStandartModel(BlockID.networkTerminal,[["machine_bottom",2],["machine_top",2],["machine_side",2],["network_terminal",0],["machine_side",2],["machine_side",2]]);
TileRenderer.registerRotationModel(BlockID.networkTerminal,0,[["machine_bottom",2],["machine_top",2],["machine_side",2],["network_terminal",0],["machine_side",2],["machine_side",2]]);

MachineRegistry.setDrop("networkTerminal",BlockID.machineCasing,2);
Callback.addCallback("PreLoaded",function(){
	Recipes.addShaped({id:BlockID.networkTerminal,count:1,data:0},[
        "aab",
        "cdb",
        "aab"
    ],["a",ItemID.plateIron,0,"b",20,0,"c",ItemID.wireGold,0,"d",BlockID.machineCasing,2]);
});

var GuiNetworkTerminal = new UI.StandartWindow({
    standart:{
        header:{text:{text:Translation.translate("Network Terminal")}},
        inventory:{standart:true},
        background:{standart:true}
    },
    
    drawing:[
        {type:"bitmap",x:350,y:50,bitmap:"energy_background",scale:GUI_SCALE},
        {type:"bitmap",x:450,y:50,bitmap:"energy_background",scale:GUI_SCALE},
		{type:"bitmap",x:700 - GUI_SCALE * 4,y:75 - GUI_SCALE * 4,bitmap:"info",scale:GUI_SCALE}
    ],

    elements:{
        "textNetwork":{type:"text",font:GUI_TEXT,x:700,y:75,width:300,height:TEXT_SIZE,text:Translation.translate("Network IP: ") + "0.0.0"},
        "textLoad":{type:"text",font:GUI_TEXT,x:700,y:105,width:300,height:TEXT_SIZE,text:Translation.translate("Load: ") + "0/0"},
        "textEnergy1":{type:"text",font:GUI_TEXT,x:700,y:135,width:300,height:TEXT_SIZE,text:Translation.translate("Machine Energy: ") + "0/0Et"},
        "textEnergy2":{type:"text",font:GUI_TEXT,x:700,y:165,width:300,height:TEXT_SIZE,text:Translation.translate("Network Energy: ") + "0/0Et"},
        "textRange":{type:"text",font:GUI_TEXT,x:700,y:195,width:300,height:TEXT_SIZE,text:Translation.translate("Range: ") + "0"},
        "textVoltage":{type:"text",font:GUI_TEXT,x:700,y:225,width:300,height:TEXT_SIZE,text:Translation.translate("Voltage: ") + "0"},

        "scaleEnergy1":{type:"scale",x:350 + GUI_SCALE * 6,y:50 + GUI_SCALE * 6,direction:1,value:0.5,bitmap:"energy_scale",scale:GUI_SCALE},
        "scaleEnergy2":{type:"scale",x:450 + GUI_SCALE * 6,y:50 + GUI_SCALE * 6,direction:1,value:0.5,bitmap:"energy_scale_network",scale:GUI_SCALE},
        "slotCard":{type:"slot",x:350 + GUI_SCALE * 3 - GUI_SCALE / 2,y:275,bitmap:"slot_card",scale:GUI_SCALE,isValid:function(id){return Tool.isTool(id,"EnergyCard");}}
    }
});

MachineRegistry.registerEUMachine(BlockID.networkTerminal,{
    defaultValues:{
        meta:0,
        load:0,
        tier:3,
        range:64,
        load_limit:16,
        energy_storage:16384
    },

    getNetwork:function(x,y,z){
        return network[x + ":" + y + ":" + z];
    },

    init:function(){
		if(!this.getNetwork(this.x,this.y,this.z)){
			network[this.x + ":" + this.y + ":" + this.z] = {
                range:this.data.range,
                load:this.data.load,
                load_limit:this.data.load_limit,
                voltage:power(this.data.tier),
                energy:this.data.energy,
                energy_storage:this.getEnergyStorage(),
                machine:{}
            };
        }
    },

    initValues:function(net){
        net.range = this.defaultValues.range;
        net.voltage = power(this.data.tier);
        net.energy_storage = this.defaultValues.energy_storage;
        net.load = this.defaultValues.load;
        net.load_limit = this.defaultValues.load_limit;
    },

    getCard:function(){
        var card = this.container.getSlot("slotCard");
        if(Tool.isTool(card.id,"EnergyCard")){
            if(!card.extra) card.extra = new ItemExtraData();
            card.extra.putInt("x",this.x);
            card.extra.putInt("y",this.y);
            card.extra.putInt("z",this.z);
        }
    },

    tick:function(){
        this.getCard();

        var net = this.getNetwork(this.x,this.y,this.z);
    	if(net){
            this.initValues(net);
            for(let i in net.machine){
                var machine = net.machine[i];
                net.load++;
    
                if(net.load > net.load_limit){
                    World.explode(this.x + 0.5,this.y + 0.5,this.z + 0.5,0.5,true);
                    World.setBlock(this.x,this.y,this.z,0);
                    this.selfDestroy();
                }
    
                var enabled = __config__.getBool("machine.voltage_enabled");
                if(enabled && machine.voltage && machine.voltage > net.voltage){
                    World.explode(this.x + 0.5,this.y + 0.5,this.z + 0.5,0.5,true);
                    World.setBlock(this.x,this.y,this.z,0);
                    this.selfDestroy();
                }
            }
    
            var voltage = power(this.data.tier);
            if(this.data.energy >= voltage && net.energy + voltage < net.energy_storage){
                this.data.energy -= voltage;
                net.energy += voltage;
            }
    
            if(net.energy < 0) net.energy = 0;
            if(net.energy > net.energy_storage) net.energy = net.energy_storage;

            this.container.setText("textRange",Translation.translate("Range: ") + net.range);
            this.container.setText("textVoltage",Translation.translate("Voltage: ") + net.voltage);
            this.container.setText("textLoad",Translation.translate("Load: ") + net.load + "/" + net.load_limit);
            this.container.setText("textEnergy2",Translation.translate("Network Energy: ") + net.energy + "/" + net.energy_storage + "Eu");

            this.container.setScale("scaleEnergy2",parseInt(net.energy / net.energy_storage * 47) / 47);
        } else {
            this.container.setText("textRange",Translation.translate("Range: ") + "0");
            this.container.setText("textVoltage",Translation.translate("Voltage: ") + "0");
            this.container.setText("textLoad",Translation.translate("Load: ") + "0/0");
            this.container.setText("textEnergy2",Translation.translate("Network Energy: ") + "0/0Eu");

            this.container.setScale("scaleEnergy2",0);
        }
        
        this.container.setScale("scaleEnergy1",parseInt(this.data.energy / this.getEnergyStorage() * 47) / 47);
        this.container.setText("textEnergy1",Translation.translate("Machine Energy: ") + this.data.energy + "/" + this.getEnergyStorage() + "Eu");
        this.container.setText("textNetwork",Translation.translate("Network IP: ") + Math.abs(this.x) + "." + Math.abs(this.y) + "." + Math.abs(this.z));
    },

    destroy:function(){
        if(this.getNetwork(this.x,this.y,this.z)){
            delete network[this.x + ":" + this.y + ":" + this.z];
        }
    },

    energyReceive:MachineRegistry.energyReceive,
    getGuiScreen:function(){return GuiNetworkTerminal;}
});
TileRenderer.setRotationPlaceFunction(BlockID.networkTerminal);




// file: machine/network/superconductor.js

Block.createSpecialType({
    base:1,
    solid:true,
    opaque:true,
    destroytime:5,
    explosionres:16
},"superconductor");

// [超导体]Superconductor
IDRegistry.genBlockID("superconductor");
Block.createBlock("superconductor",[
    {name:"Superconductor",texture:[["superconductor",0]],inCreative:true},
    {name:"Superconductor",texture:[["superconductor",0]],inCreative:false}
],"superconductor");

Block.setBlockShape(BlockID.superconductor,{x:0.375,y:0.375,z:0},{x:0.625,y:0.625,z:1},0);
TileRenderer.setupWireModel(BlockID.superconductor,1,0.25,"eu-wire",true);

Tooltip.info(BlockID.superconductor,"You can use it to connect to the Network Terminal to transmit energy.");

Callback.addCallback("PreLoaded",function(){
    Recipes.addShaped({id:BlockID.superconductor,count:1,data:0},[
        "dcd",
        "aba",
        "dcd"
    ],["a",ItemID.wireTungsten,0,"b",ItemID.circuitTransformer,0,"c",ItemID.plateSteel,0,"d",ItemID.partSteel,0]);
});

MachineRegistry.setDrop("superconductor",BlockID.superconductor);
Block.registerPlaceFunction("superconductor",function(coords,item,block){
    var place = coords;
    if(!canTileBeReplaced(block.id,block.data)){
        place = coords.relative;
        block = World.getBlock(place.x,place.y,place.z);
        if(!canTileBeReplaced(block.id,block.data)) return;
    }
    
    World.setBlock(place.x,place.y,place.z,item.id,1);
    World.addTileEntity(place.x,place.y,place.z);
    Player.decreaseCarriedItem(1);
});

var GuiSuperconductorCoil = new UI.StandartWindow({
    standart:{
        header:{text:{text:Translation.translate("Superconductor")}},
        inventory:{standart:true},
        background:{standart:true}
    },

    drawing:[
        {type:"bitmap",x:350,y:50,bitmap:"energy_background",scale:GUI_SCALE},
        {type:"bitmap",x:700 - GUI_SCALE * 4,y:75 - GUI_SCALE * 4,bitmap:"info",scale:GUI_SCALE}
    ],

    elements:{
        "textNetwork":{type:"text",font:GUI_TEXT,x:700,y:75,width:300,height:TEXT_SIZE,text:Translation.translate("Network IP: ") + "0.0.0"},
        "scaleEnergy":{type:"scale",x:350 + GUI_SCALE * 6,y:50 + GUI_SCALE * 6,direction:1,value:0.5,bitmap:"energy_scale",scale:GUI_SCALE},
        "slotCard":{type:"slot",x:350 + GUI_SCALE * 3 - GUI_SCALE / 2,y:250,bitmap:"slot_card",scale:GUI_SCALE,isValid:function(id){return Tool.isTool(id,"EnergyCard");}},

        "slotUpgrade1":{type:"slot",x:370,y:325,bitmap:"slot_circuit",isValid:UpgradeRegistry.isValidUpgrade},
        "slotUpgrade2":{type:"slot",x:430,y:325,bitmap:"slot_circuit",isValid:UpgradeRegistry.isValidUpgrade},
        "slotUpgrade3":{type:"slot",x:490,y:325,bitmap:"slot_circuit",isValid:UpgradeRegistry.isValidUpgrade},
        "slotUpgrade4":{type:"slot",x:550,y:325,bitmap:"slot_circuit",isValid:UpgradeRegistry.isValidUpgrade}
    }
});

MachineRegistry.registerEUGenerator(BlockID.superconductor,{
    defaultValues:{x:0,y:0,z:0},

    destroyMachine:function(){
        var net = network[this.data.x + ":" + this.data.y + ":" + this.data.z];
        if(net) delete net.machine[this.x + ":" + this.y + ":" + this.z];
    },

    upgrades:["energyStorage","transformer"],

    initValues:function(){
        this.data.tier = this.defaultValues.tier;
		this.data.energy_storage = this.defaultValues.energy_storage;
	},
    
    getCard:function(){
        var slot = this.container.getSlot("slotCard");
        
        if(Tool.isTool(slot.id,"EnergyCard")){
            if(slot.extra){
                this.destroyMachine();
                this.data.x = slot.extra.getInt("x");
                this.data.y = slot.extra.getInt("y");
                this.data.z = slot.extra.getInt("z");
    
                var net = network[this.data.x + ":" + this.data.y + ":" + this.data.z];
                if(net && this.getRange() < net.range){
                    network[this.data.x + ":" + this.data.y + ":" + this.data.z].machine[this.x + ":" + this.y + ":" + this.z] = {
                        voltage:power(this.data.tier)
                    };
                }
            }
        }
    },

    getRange:function(){
        return Math.abs(this.data.x - this.x) + Math.abs(this.data.y - this.y) + Math.abs(this.data.z - this.z);
    },

    

	tick:function(){
        UpgradeRegistry.executeUpgrades(this);

        this.getCard();

        var net = network[this.data.x + ":" + this.data.y + ":" + this.data.z];
		if(net && this.getRange() <= net.range){
            if(net.energy >= power(this.data.tier) && this.data.energy + power(this.data.tier) < this.data.energy_storage){
                this.data.energy += power(this.data.tier);
                net.energy -= power(this.data.tier);
            }
		} else {
			this.destroyMachine();
			this.data.x = 0,this.data.y = 0,this.data.z = 0;
        }

        this.container.setScale("scaleEnergy",this.data.energy / this.data.energy_storage);
        this.container.setText("textNetwork",Translation.translate("Network IP: ") + Math.abs(this.data.x) + "." + Math.abs(this.data.y) + "." + Math.abs(this.data.z));
    },
    
    energyTick:function(type,src){
		var output = Math.min(this.getMaxVoltage(),this.data.energy);
		this.data.energy += src.add(output) - output;
	},

    destroy:function(){this.destroyMachine();},
    getGuiScreen:function(){return GuiSuperconductorCoil;}
});




// file: machine/generator/fire_generator.js

// [火力发电机]Fire Generator
IDRegistry.genBlockID("fireGenerator");
Block.createBlock("fireGenerator",[
	{name:"Fire Generator",texture:[["machine_bottom",1],["machine_top",1],["machine_side",1],["fire_generator",0],["machine_side",1],["machine_side",1]],inCreative:true}
],"machine");

TileRenderer.setStandartModel(BlockID.fireGenerator,[["machine_bottom",1],["machine_top",1],["machine_side",1],["fire_generator",0],["machine_side",1],["machine_side",1]]);
TileRenderer.registerRotationModel(BlockID.fireGenerator,0,[["machine_bottom",1],["machine_top",1],["machine_side",1],["fire_generator",0],["machine_side",1],["machine_side",1]]);
TileRenderer.registerRotationModel(BlockID.fireGenerator,4,[["machine_bottom",1],["machine_top",1],["machine_side",1],["fire_generator",1],["machine_side",1],["machine_side",1]]);

MachineRegistry.setDrop("fireGenerator",BlockID.machineCasing,1);
Callback.addCallback("PreLoaded",function(){
	Recipes.addShaped({id:BlockID.fireGenerator,count:1,data:0},[
		"dad",
		"dbd",
		"ece"
	],["a",ItemID.lithiumBattery,-1,"b",BlockID.machineCasing,1,"c",BlockID.bronzeBoiler,0,"d",ItemID.stickIron,0,"e",ItemID.partIron,0]);
});

var GuiFireGenerator = new UI.StandartWindow({
	standart:{
		header:{text:{text:Translation.translate("Fire Generator")}},
		inventory:{standart:true},
		background:{standart:true}
	},
	
    drawing:[
		{type:"bitmap",x:900,y:325,bitmap:"logo",scale:GUI_SCALE},
		{type:"bitmap",x:350,y:50,bitmap:"energy_background",scale:GUI_SCALE},
		{type:"bitmap",x:450 + GUI_SCALE * 3,y:75 + GUI_SCALE * 2,bitmap:"fireBackground",scale:GUI_SCALE},
		{type:"bitmap",x:700 - GUI_SCALE * 4,y:75 - GUI_SCALE * 4,bitmap:"infoSmall",scale:GUI_SCALE}
	],
	
	elements:{
		"textEnergy":{type:"text",font:GUI_TEXT,x:700,y:75,width:300,height:TEXT_SIZE,text:Translation.translate("Energy: ") + "0/0Eu"},
		"textEnergyOutput":{type:"text",font:GUI_TEXT,x:700,y:105,width:300,height:TEXT_SIZE,text:Translation.translate("Energy Output: ") + "0Eu"},

		"scaleBurn":{type:"scale",x:450 + GUI_SCALE * 3,y:75 + GUI_SCALE * 2,direction:1,value:0.5,bitmap:"fireScale",scale:GUI_SCALE},
		"scaleEnergy":{type:"scale",x:350 + GUI_SCALE * 6,y:50 + GUI_SCALE * 6,direction:1,value:0.5,bitmap:"energy_scale",scale:GUI_SCALE},
		
		"slotFuel":{type:"slot",x:450,y:150,bitmap:"slot_fuel",isValid:function(id,count,data){return Recipes.getFuelBurnDuration(id,data) > 0;}},

		"slotUpgrade1":{type:"slot",x:370,y:325,bitmap:"slot_circuit",isValid:UpgradeRegistry.isValidUpgrade},
		"slotUpgrade2":{type:"slot",x:430,y:325,bitmap:"slot_circuit",isValid:UpgradeRegistry.isValidUpgrade},
		"slotUpgrade3":{type:"slot",x:490,y:325,bitmap:"slot_circuit",isValid:UpgradeRegistry.isValidUpgrade},
        "slotUpgrade4":{type:"slot",x:550,y:325,bitmap:"slot_circuit",isValid:UpgradeRegistry.isValidUpgrade}
	}
});

MachineRegistry.registerEUGenerator(BlockID.fireGenerator,{
	defaultValues:{
		meta:0,
		burn:0,
		burnMax:0,
		isActive:false,
		sound_volume:16
	},

	upgrades:["energyStorage","muffler","transformer"],

	initValues:function(){
		this.data.tier = this.defaultValues.tier;
		this.data.sound_volume = this.defaultValues.sound_volume;
		this.data.energy_storage = this.defaultValues.energy_storage;
	},
	
	tick:function(){
		UpgradeRegistry.executeUpgrades(this);
		StorageInterface.checkHoppers(this);

		if(World.getThreadTime()%20 == 0){
			var output = Math.min(this.data.isActive?random(1,this.data.burn / 20):0,this.getMaxVoltage());

			if(this.data.burn <= 0 && this.data.energy + output < this.getEnergyStorage()) this.data.burn = this.data.burnMax = this.getSlotBurnDuration("slotFuel");

			if(this.data.burn > 0 && this.data.energy + output < this.getEnergyStorage()){
				this.data.energy += output;
				this.data.burn -= 1;
				this.activate("generator/fire_generator.ogg");
			} else {this.deactive();}

			this.container.setText("textEnergyOutput",Translation.translate("Energy Output: ") + output + "Eu");
		}

		this.container.setScale("scaleEnergy",this.data.energy / this.getEnergyStorage());
		this.container.setScale("scaleBurn",parseInt(this.data.burn / this.data.burnMax * 14) / 14 || 0);
		this.container.setText("textEnergy",Translation.translate("Energy: ") + this.data.energy + "/" + this.getEnergyStorage() + "Eu");
	},
	
	energyTick:function(type,src){
		var output = Math.min(this.getMaxVoltage(),this.data.energy);
		this.data.energy += src.add(output) - output;
	},

	getGuiScreen:function(){return GuiFireGenerator;}
});
TileRenderer.setRotationPlaceFunction(BlockID.fireGenerator);
StorageInterface.createInterface(BlockID.fireGenerator,{
	slots:{
		"slotFuel":{input:true}
	},
	isValidInput:function(item){
		return Recipes.getFuelBurnDuration(item.id,item.data) > 0;
	}
});




// file: machine/generator/fusion_reactor.js

// [核聚变反应堆]Fusion Reactor
IDRegistry.genBlockID("fusionReactor");
Block.createBlock("fusionReactor",[
    {name:"Fusion Reactor",texture:[["fusion_reactor_bottom",0],["fusion_reactor_top",0],["fusion_reactor_behind",0],["fusion_reactor",0],["machine_side",2],["machine_side",2]],inCreative:true}
],"machine");
TileRenderer.setStandartModel(BlockID.fusionReactor,[["fusion_reactor_bottom",0],["fusion_reactor_top",0],["fusion_reactor_behind",0],["fusion_reactor",0],["machine_side",2],["machine_side",2]]);
TileRenderer.registerRotationModel(BlockID.fusionReactor,0,[["fusion_reactor_bottom",0],["fusion_reactor_top",0],["fusion_reactor_behind",0],["fusion_reactor",0],["machine_side",2],["machine_side",2]]);

MachineRegistry.setDrop("fusionReactor",BlockID.machineCasing,2);
Callback.addCallback("PreLoaded",function(){
	Recipes.addShaped({id:BlockID.fusionReactor,count:1,data:0},[
        "bcb",
        "ada",
        "beb"
    ],["a",BlockID.coilSteel,0,"b",ItemID.circuitEnergyStorage,0,"c",BlockID.superconductor,0,"d",BlockID.networkTerminal,0,"e",BlockID.nuclearReactor,0]);
});

var GuiFusionReactor = new UI.StandartWindow({
    standart:{
        header:{text:{text:Translation.translate("Fusion Reactor")}},
        inventory:{standart:true},
        background:{standart:true}
    },

    drawing:[
        {type:"bitmap",x:350,y:50,bitmap:"energy_background",scale:GUI_SCALE},
        {type:"bitmap",x:700 - GUI_SCALE * 4,y:75 - GUI_SCALE * 4,bitmap:"info",scale:GUI_SCALE},

        {type:"bitmap",x:455 - GUI_SCALE * 3,y:75 - GUI_SCALE * 6,bitmap:"liquidBackground",scale:GUI_SCALE},
        {type:"bitmap",x:515 - GUI_SCALE * 3,y:75 - GUI_SCALE * 6,bitmap:"liquidBackground",scale:GUI_SCALE},
        {type:"bitmap",x:585 - GUI_SCALE * 3,y:75 - GUI_SCALE * 6,bitmap:"liquidBackground",scale:GUI_SCALE},
    ],

    elements:{
        "scaleLiquid1":{type:"scale",x:455 + GUI_SCALE * 3,y:75,direction:1,value:0.5,bitmap:"liquidScale",overlay:"liquidScale",scale:GUI_SCALE},
        "slotLiquid1":{type:"slot",x:450,y:260,bitmap:"slot_cell",isValid:function(id,count,data){return Liquid.isItemLiquid(id,data);}},
        "slotLiquid2":{type:"slot",x:450,y:320,bitmap:"slot_cell",isValid:function(){return false;}},

        "scaleLiquid2":{type:"scale",x:515 + GUI_SCALE * 3,y:75,direction:1,value:0.5,bitmap:"liquidScale",overlay:"liquidScale",scale:GUI_SCALE},
        "slotLiquid3":{type:"slot",x:510,y:260,bitmap:"slot_cell",isValid:function(id,count,data){return Liquid.isItemLiquid(id,data);}},
        "slotLiquid4":{type:"slot",x:510,y:320,bitmap:"slot_cell",isValid:function(){return false;}},

        "scaleLiquid3":{type:"scale",x:585 + GUI_SCALE * 3,y:75,direction:1,value:0.5,bitmap:"liquidScale",overlay:"liquidScale",scale:GUI_SCALE},
        "slotLiquid5":{type:"slot",x:585,y:260,bitmap:"slot_cell",isValid:function(id,count,data){return id == ItemID.cellEmpty;}},
        "slotLiquid6":{type:"slot",x:585,y:320,bitmap:"slot_cell",isValid:function(){return false;}},

        "textEnergy":{type:"text",font:GUI_TEXT,x:700,y:75,width:300,height:30,text:Translation.translate("Energy: ") + "0/0Eu"},
        "scaleEnergy":{type:"scale",x:350 + GUI_SCALE * 6,y:50 + GUI_SCALE * 6,direction:1,value:0.5,bitmap:"energy_scale",scale:GUI_SCALE}
    }
});

MachineRegistry.registerMachine(BlockID.fusionReactor,{
    defaultValues:{
        meta:0,
        tier:4,
        progress:0,
        work_time:1200,
        energy_consumption:2048
    },

    init:function(){
        this.inputLiquid1 = new TileLiquidExtra(this,"input1",8);
        this.inputLiquid2 = new TileLiquidExtra(this,"input2",8);
        this.outputLiquid1 = new TileLiquidExtra(this,"output",8);
    },
    
    getLiquidInputSlot1:function(){
        var input1 = this.container.getSlot("slotLiquid1");
        var empty = Liquid.getEmptyItem(input1.id,input1.data);
        if(empty){
            var stored = this.inputLiquid1.getLiquidStored();
            var liquid = Liquid.getItemLiquid(input1.id,input1.data);
            var storage = Liquid.getItemStorage(input1.id,input1.data);
            if(!stored || stored == liquid && this.inputLiquid1.getAmount(stored) + storage <= 8){
                this.inputLiquid1.addLiquid(liquid,storage),input1.count--;
                this.setOutputSlot("slotLiquid2",empty.id,1,empty.data);
                this.container.validateAll();
            }
        }
    },

    getLiquidInputSlot2:function(){
        var input1 = this.container.getSlot("slotLiquid3");
        var empty = Liquid.getEmptyItem(input1.id,input1.data);
        if(empty){
            var stored = this.inputLiquid2.getLiquidStored();
            var liquid = Liquid.getItemLiquid(input1.id,input1.data);
            var storage = Liquid.getItemStorage(input1.id,input1.data);
    		if(!stored || stored == liquid && this.inputLiquid2.getAmount(stored) + storage <= 8){
                this.inputLiquid2.addLiquid(liquid,storage),input1.count--;
                this.setOutputSlot("slotLiquid4",empty.id,1,empty.data);
                this.container.validateAll();
            }
        }
    },

    getLiquidOutputSlot:function(){
        var stored = this.outputLiquid1.getLiquidStored();
        var input1 = this.container.getSlot("slotLiquid5");
        var full = Liquid.getFullItem(input1.id,input1.data,stored);
        if(full){
            var amount = this.outputLiquid1.getAmount(stored);
            if(stored && amount >= full.amount){
                this.outputLiquid1.getLiquid(liquid,full.amount),input1.count--;
                this.setOutputSlot("slotLiquid6",empty.id,1,empty.data);
                this.container.validateAll();
            }
        }
    },
    
    tick:function(){
        this.getLiquidInputSlot1();
        this.getLiquidInputSlot2();
        this.getLiquidOutputSlot();
        
        if(StructureRegistry.getStructure("fusion_reactor",this.x,this.y,this.z,true)){
            var stored1 = this.inputLiquid1.getLiquidStored();
            var stored2 = this.inputLiquid2.getLiquidStored();
            var recipe = RecipeRegistry.getRecipeResult("FusionReactor",[stored1,stored2]);
            if(recipe){
                if(this.data.energy >= this.data.energy_consumption){
                    this.data.energy -= this.data.energy_consumption;
                    this.data.progress += 1 / this.data.work_time;

                    if(this.data.progress.toFixed(3) >= 1){
                        this.inputLiquid1.getLiquid(stored1,recipe.input[0] / 1000);
                        this.inputLiquid2.getLiquid(stored2,recipe.input[1] / 1000);
                        this.outputLiquid1.addLiquid(recipe.output.liquid,recipe.output.mB / 1000);
                        this.data.progress = 0;
                    }
                }
            } else {this.data.progress = 0;}
        }
        
        this.inputLiquid1.updateUiScale("scaleLiquid1");
        this.inputLiquid2.updateUiScale("scaleLiquid2");
        this.outputLiquid1.updateUiScale("scaleLiquid3");
        this.container.setScale("scaleEnergy",parseInt(this.data.energy / this.getEnergyStorage() * 47) / 47);
        this.container.setText("textEnergy",Translation.translate("Energy: ") + this.data.energy + "/" + this.getEnergyStorage() + "Eu");
    },

    getGuiScreen:function(){
        return GuiFusionReactor;
    },

    energyReceive:MachineRegistry.energyReceive
});
TileRenderer.setRotationPlaceFunction(BlockID.fusionReactor);




// file: machine/generator/solar_generator.js

// [太阳能发电机]solar Generator
IDRegistry.genBlockID("solarGenerator");
Block.createBlock("solarGenerator",[
	{name:"Solar Generator",texture:[["machine_bottom",1],["solar_generator",0],["machine_side",1]],inCreative:true}
],"machine");

MachineRegistry.setDrop("solarGenerator",BlockID.machineCasing,1);
Callback.addCallback("PreLoaded",function(){
	Recipes.addShaped({id:BlockID.solarGenerator,count:1,data:0},[
		"aaa",
		"bcb",
		"ded"
	],["a",102,0,"b",ItemID.plateTungsten,0,"c",ItemID.plateCarbon,0,"d",ItemID.circuit,0,"e",BlockID.machineCasing,1]);
});

var GuiSolarGenerator = new UI.StandartWindow({
	standart:{
		header:{text:{text:Translation.translate("Solar Generator")}},
		inventory:{standart:true},
		background:{standart:true}
	},
	
    drawing:[
		{type:"bitmap",x:900,y:325,bitmap:"logo",scale:GUI_SCALE},
		{type:"bitmap",x:350,y:50,bitmap:"energy_background",scale:GUI_SCALE},
		{type:"bitmap",x:700 - GUI_SCALE * 4,y:75 - GUI_SCALE * 4,bitmap:"infoSmall",scale:GUI_SCALE}
	],
	
	elements:{
		"textEnergy":{type:"text",font:GUI_TEXT,x:700,y:75,width:300,height:TEXT_SIZE,text:Translation.translate("Energy: ") + "0/0Eu"},
		"textEnergyOutput":{type:"text",font:GUI_TEXT,x:700,y:105,width:300,height:TEXT_SIZE,text:Translation.translate("Energy Output: ") + "0Eu"},
		"scaleEnergy":{type:"scale",x:350 + GUI_SCALE * 6,y:50 + GUI_SCALE * 6,direction:1,value:0.5,bitmap:"energy_scale",scale:GUI_SCALE}
	}
});

MachineRegistry.registerEUGenerator(BlockID.solarGenerator,{
	tick:function(){
		if(World.getThreadTime()%20 == 0){
			var output = Math.min(random(1,World.getLightLevel(this.x,this.y + 1,this.z)),this.getMaxVoltage());
			if(GenerationUtils.canSeeSky(this.x,this.y + 1,this.z) && this.data.energy + output < this.getEnergyStorage()){
				this.data.energy += output;
			}

			this.container.setText("textEnergyOutput",Translation.translate("Energy Output: ") + output + "Eu");
		}

		this.container.setScale("scaleEnergy",this.data.energy / this.getEnergyStorage());
		this.container.setText("textEnergy",Translation.translate("Energy: ") + this.data.energy + "/" + this.getEnergyStorage() + "Eu");
	},

	energyTick:function(type,src){
		var output = Math.min(this.getMaxVoltage(),this.data.energy);
		this.data.energy += src.add(output) - output;
	},
	
	getGuiScreen:function(){return GuiSolarGenerator;}
});




// file: machine/generator/steam_turbine.js

// [蒸汽轮机]Steam Turbine
IDRegistry.genBlockID("steamTurbine");
Block.createBlock("steamTurbine",[
	{name:"Steam Turbine",texture:[["machine_bottom",1],["machine_top",1],["machine_side",1],["steam_turbine",0],["machine_side",1],["machine_side",1]],inCreative:true}
],"machine");
TileRenderer.setStandartModel(BlockID.steamTurbine,[["machine_bottom",1],["machine_top",1],["machine_side",1],["steam_turbine",0],["machine_side",1],["machine_side",1]]);
TileRenderer.registerRotationModel(BlockID.steamTurbine,0,[["machine_bottom",1],["machine_top",1],["machine_side",1],["steam_turbine",0],["machine_side",1],["machine_side",1]]);
TileRenderer.registerRotationModel(BlockID.steamTurbine,4,[["machine_bottom",1],["machine_top",1],["machine_side",1],["steam_turbine",1],["machine_side",1],["machine_side",1]]);

MachineRegistry.setDrop("steamTurbine",BlockID.machineCasing,1);
Callback.addCallback("PreLoaded",function(){
	Recipes.addShaped({id:BlockID.steamTurbine,count:1,data:0},[
        "cdc",
        "dbd",
        "cac"
    ],["a",ItemID.wireTin,0,"b",BlockID.machineCasing,1,"c",ItemID.stickIron,0,"d",ItemID.plateIron,0]);
});

var GuiSteamTurbine = new UI.StandartWindow({
	standart:{
		header:{text:{text:Translation.translate("Steam Turbine")}},
		inventory:{standart:true},
		background:{standart:true}
    },

    drawing:[
        {type:"bitmap",x:350,y:50,bitmap:"energy_background",scale:GUI_SCALE},
        {type:"bitmap",x:700 - GUI_SCALE * 4,y:75 - GUI_SCALE * 4,bitmap:"infoSmall",scale:GUI_SCALE},
        {type:"bitmap",x:900 - GUI_SCALE * 3,y:175 - GUI_SCALE * 6,bitmap:"liquidBackground",scale:GUI_SCALE}
    ],
    
	elements:{
        "textEnergy":{type:"text",font:GUI_TEXT,x:700,y:75,width:300,height:TEXT_SIZE,text:Translation.translate("Energy: ") + "0/0Eu"},
		"textEnergyOutput":{type:"text",font:GUI_TEXT,x:700,y:105,width:300,height:TEXT_SIZE,text:Translation.translate("Energy Output: ") + "0Eu"},
        "scaleEnergy":{type:"scale",x:350 + GUI_SCALE * 6,y:50 + GUI_SCALE * 6,direction:1,value:0.5,bitmap:"energy_scale",scale:GUI_SCALE},
        
        "scaleLiquid":{type:"scale",x:900 + GUI_SCALE * 3,y:175,direction:1,value:0.5,bitmap:"liquidScale",overlay:"liquidScale",scale:GUI_SCALE},
        "slotLiquid1":{type:"slot",x:720,y:325,bitmap:"slot_cell",isValid:function(id,count,data){return Liquid.getItemLiquid(id,data) == "steam";}},
        "slotLiquid2":{type:"slot",x:780,y:325,bitmap:"slot_cell",isValid:function(){return false;}}
	}
});

MachineRegistry.registerEUGenerator(BlockID.steamTurbine,{
    defaultValues:{
        meta:0,
        isActive:false
    },

    init:function(){
		this.liquidStorage.setLimit("steam",4);
		this.renderer();
    },

    tick:function(){
        this.renderer();
        
        if(World.getThreadTime()%20 == 0){
            if(this.liquidStorage.getAmount("steam") >= (25 / 1000)){
                this.liquidStorage.getLiquid("steam",(25 / 1000));
                this.data.energy += 20;
                this.activate();
            } else {
                this.deactive();
            }
        }

        var liquid1 = this.container.getSlot("slotLiquid1");
        var liquid2 = this.container.getSlot("slotLiquid2");
        var empty = Liquid.getEmptyItem(liquid1.id,liquid1.data);
        if(empty && empty.liquid == "steam"){
            var storage = Liquid.getItemStorage(liquid1.id,liquid1.data);
            if(this.liquidStorage.getAmount("steam") + storage <= 4 && (liquid2.id == empty.id && liquid2.data == empty.data && liquid2.count < Item.getMaxStack(empty.id) || liquid2.id == 0)){
                this.liquidStorage.addLiquid("steam",storage),liquid1.count--;
                liquid2.id = empty.id,liquid2.data = empty.data,liquid2.count++;
                this.container.validateAll();
            }
        }

        this.liquidStorage.updateUiScale("scaleLiquid","steam");
        this.container.setText("textEnergyOutput",Translation.translate("Energy Output: ") + 20 + "Eu");
        this.container.setScale("scaleEnergy",parseInt(this.data.energy / this.getEnergyStorage() * 47) / 47);
		this.container.setText("textEnergy",Translation.translate("Energy: ") + this.data.energy + "/" + this.getEnergyStorage() + "Eu");
    },

    renderer:function(){
        var amount = this.liquidStorage.getAmount("steam");
        TileRenderer.mapAtCoords(this.x,this.y,this.z,this.id,this.data.meta + (this.data.isActive?4 * (parseInt(amount / Math.ceil(amount) * 2) % 2):0));
    },
    
    energyTick:function(type,src){
		var output = Math.min(this.getMaxVoltage(),this.data.energy);
		this.data.energy += src.add(output) - output;
    },
    
	getGuiScreen:function(){
        return GuiSteamTurbine;
    }
});
TileRenderer.setRotationPlaceFunction(BlockID.steamTurbine);




// file: machine/generator/nuclear_reactor/reactor_api.js

function Reactor(){
    this.isDestroy = true;

    this.getHeat = function(side,slot,coords){
        return 0;
    }

    this.getEnergyOutput = function(side,slot,coords){
        return 0;
    }
    
    this.getCooling = function(side,slot,coords){
        return 0;
    }

    this.getDurability = function(){
        return 10000;
    }

    this.breakDurability = function(side,slot,coords){
        return 1;
    }

    this.destroy = function(side,slot,coords){

    }
}

var ReactorRegistry = {
	prototypes:{},

    registerPrototype:function(id,state){
        if(!this.isPrototype(id)){
            var reactor = new Reactor();
            for(let i in state) reactor[i] = state[i];
            this.prototypes[id] = reactor;
            
            Item.setMaxDamage(id,state.getDurability());
        }
    },

    isPrototype:function(id){
        return this.prototypes[id]?true:false;
    },

    getPrototype:function(id){
        if(this.isPrototype(id)) return this.prototypes[id];
    },

    isValid:function(id,count,data){
        return ReactorRegistry.isPrototype(id);
    },

    getType:function(id){
        return this.getPrototype(id).type || "empty";
    }
}




// file: machine/generator/nuclear_reactor/nuclear_reactor.js

// [核反应堆]Nuclear Reactor
IDRegistry.genBlockID("nuclearReactor");
Block.createBlock("nuclearReactor",[
    {name:"Nuclear Reactor",texture:[["machine_bottom",1],["machine_top",1],["nuclear_reactor",0]],inCreative:true}
],"machine");

MachineRegistry.setDrop("nuclearReactor",BlockID.machineCasing,2);
Callback.addCallback("PreLoaded",function(){
	Recipes.addShaped({id:BlockID.nuclearReactor,count:1,data:0},[
        "aba",
        "cdc",
        "aea"
    ],["a",ItemID.plateLead,0,"b",ItemID.electricPiston,0,"c",ItemID.circuit,0,"d",BlockID.fireGenerator,0,"e",ItemID.plateLapis,0]);
});

var GuiNuclearReactor = new UI.StandartWindow({
    standart:{
        header:{text:{text:Translation.translate("Nuclear Reactor")}},
        inventory:{standart:true},
        background:{standart:true}
    },
    
    drawing:[
        {type:"bitmap",x:330,y:330,bitmap:"heatBackground",scale:GUI_SCALE},
		{type:"bitmap",x:700 - GUI_SCALE * 4,y:75 - GUI_SCALE * 4,bitmap:"info",scale:GUI_SCALE}
    ],

    elements:{
        "slot1:1":{type:"slot",x:350,y:30,bitmap:"slot_empty",scale:GUI_SCALE,isValid:ReactorRegistry.isValid},
        "slot1:2":{type:"slot",x:350,y:90,bitmap:"slot_empty",scale:GUI_SCALE,isValid:ReactorRegistry.isValid},
        "slot1:3":{type:"slot",x:350,y:150,bitmap:"slot_empty",scale:GUI_SCALE,isValid:ReactorRegistry.isValid},
        "slot1:4":{type:"slot",x:350,y:210,bitmap:"slot_empty",scale:GUI_SCALE,isValid:ReactorRegistry.isValid},
        "slot1:5":{type:"slot",x:350,y:270,bitmap:"slot_empty",scale:GUI_SCALE,isValid:ReactorRegistry.isValid},

        "slot2:1":{type:"slot",x:410,y:30,bitmap:"slot_empty",scale:GUI_SCALE,isValid:ReactorRegistry.isValid},
        "slot2:2":{type:"slot",x:410,y:90,bitmap:"slot_empty",scale:GUI_SCALE,isValid:ReactorRegistry.isValid},
        "slot2:3":{type:"slot",x:410,y:150,bitmap:"slot_empty",scale:GUI_SCALE,isValid:ReactorRegistry.isValid},
        "slot2:4":{type:"slot",x:410,y:210,bitmap:"slot_empty",scale:GUI_SCALE,isValid:ReactorRegistry.isValid},
        "slot2:5":{type:"slot",x:410,y:270,bitmap:"slot_empty",scale:GUI_SCALE,isValid:ReactorRegistry.isValid},

        "slot3:1":{type:"slot",x:470,y:30,bitmap:"slot_empty",scale:GUI_SCALE,isValid:ReactorRegistry.isValid},
        "slot3:2":{type:"slot",x:470,y:90,bitmap:"slot_empty",scale:GUI_SCALE,isValid:ReactorRegistry.isValid},
        "slot3:3":{type:"slot",x:470,y:150,bitmap:"slot_empty",scale:GUI_SCALE,isValid:ReactorRegistry.isValid},
        "slot3:4":{type:"slot",x:470,y:210,bitmap:"slot_empty",scale:GUI_SCALE,isValid:ReactorRegistry.isValid},
        "slot3:5":{type:"slot",x:470,y:270,bitmap:"slot_empty",scale:GUI_SCALE,isValid:ReactorRegistry.isValid},

        "slot4:1":{type:"slot",x:530,y:30,bitmap:"slot_empty",scale:GUI_SCALE,isValid:ReactorRegistry.isValid},
        "slot4:2":{type:"slot",x:530,y:90,bitmap:"slot_empty",scale:GUI_SCALE,isValid:ReactorRegistry.isValid},
        "slot4:3":{type:"slot",x:530,y:150,bitmap:"slot_empty",scale:GUI_SCALE,isValid:ReactorRegistry.isValid},
        "slot4:4":{type:"slot",x:530,y:210,bitmap:"slot_empty",scale:GUI_SCALE,isValid:ReactorRegistry.isValid},
        "slot4:5":{type:"slot",x:530,y:270,bitmap:"slot_empty",scale:GUI_SCALE,isValid:ReactorRegistry.isValid},

        "slot5:1":{type:"slot",x:590,y:30,bitmap:"slot_empty",scale:GUI_SCALE,isValid:ReactorRegistry.isValid},
        "slot5:2":{type:"slot",x:590,y:90,bitmap:"slot_empty",scale:GUI_SCALE,isValid:ReactorRegistry.isValid},
        "slot5:3":{type:"slot",x:590,y:150,bitmap:"slot_empty",scale:GUI_SCALE,isValid:ReactorRegistry.isValid},
        "slot5:4":{type:"slot",x:590,y:210,bitmap:"slot_empty",scale:GUI_SCALE,isValid:ReactorRegistry.isValid},
        "slot5:5":{type:"slot",x:590,y:270,bitmap:"slot_empty",scale:GUI_SCALE,isValid:ReactorRegistry.isValid},

        "scaleBurn":{type:"scale",x:330 + GUI_SCALE * 4,y:330 + GUI_SCALE * 4,direction:0,value:0.5,bitmap:"heatScale",scale:GUI_SCALE},

        "textEnergy":{type:"text",font:GUI_TEXT,x:700,y:75,width:300,height:TEXT_SIZE,text:Translation.translate("Energy: ") + "0/0Eu"},
        "textEnergyOutput":{type:"text",font:GUI_TEXT,x:700,y:105,width:300,height:TEXT_SIZE,text:Translation.translate("Energy Output: ") + "0Eu"},
        "textCooling":{type:"text",font:GUI_TEXT,x:700,y:135,width:300,height:TEXT_SIZE,text:Translation.translate("Cooling: ") + "0"},
        "textHeat":{type:"text",font:GUI_TEXT,x:700,y:165,width:300,height:TEXT_SIZE,text:Translation.translate("Heat: ") + "0Hu"}
    }
});

MachineRegistry.registerEUGenerator(BlockID.nuclearReactor,{
    defaultValues:{
        tier:3,
        heat:0,
        cooling:0,
        maxHeat:10000,
        isEnabled:false,
        energy_output:0
    },

    getEnergyOutput:function(){
        return this.data.energy_output;
    },

    getHeat:function(){
        return this.data.heat;
    },

    getMaxHeat:function(){
        return this.data.maxHeat;
    },

    getCooling:function(){
        return this.data.cooling;
    },

    getSlotFor4Side:function(x,y){
        var side = [],pos = [[x + 1,y],[x - 1,y],[x,y + 1],[x,y - 1]];
        for(let i in pos){
            var slot = this.container.getSlot("slot" + pos[i][0] + ":" + pos[i][1]);
            if(slot && slot.id != 0) side.push(slot);
        }
        return side;
    },
    
    initValues:function(){
        this.data.cooling = this.defaultValues.cooling;
        this.data.energy_output = this.defaultValues.energy_output;
	},

    tick:function(){
        if(World.getThreadTime()%20 == 0){
            this.initValues();
            if(this.data.isEnabled){
                for(let x = 1;x <= 5;x++){for(let y = 1;y <= 5;y++){
                    var slot = this.container.getSlot("slot" + x + ":" + y),side = this.getSlotFor4Side(x,y);
                    if(ReactorRegistry.isPrototype(slot.id)){
                        var reactor = ReactorRegistry.getPrototype(slot.id);
                        
                        this.data.heat += reactor.getHeat(side,slot,{x:x,y:y});
                        if(this.data.heat > 0) this.data.heat -= Math.min(reactor.getCooling(side,slot,{x:x,y:y}),this.getHeat());
                        this.data.cooling += reactor.getCooling(side,slot,{x:x,y:y});
                        this.data.energy_output += reactor.getEnergyOutput(side,slot,{x:x,y:y});

                        if(slot.data >= Item.getMaxDamage(slot.id)){
                            if(reactor.isDestroy){
                                reactor.destroy(side,slot,{x:x,y:y});
                                this.container.validateSlot("slot" + x + ":" + y);
                            }
                        } else {
                            slot.data += reactor.breakDurability(side,slot,{x:x,y:y});
                        }
                    }
                }}

                this.data.energy += this.getEnergyOutput();
            } else if(this.data.heat > 0){
                this.data.heat -= Math.min(this.data.heat,this.getMaxHeat() / 1000);
            }
        }

        if(this.data.heat > this.getMaxHeat()){
            World.explode(this.x + 0.5,this.y + 0.5,this.z + 0.5,(this.getMaxHeat() / 1000) / 4,true);
            World.setBlock(this.x,this.y,this.z,0);
            this.selfDestroy();
        }

        this.container.setScale("scaleBurn",this.data.heat / this.getMaxHeat());
        this.container.setText("textEnergy",Translation.translate("Energy: ") + this.data.energy + "/" + this.getEnergyStorage() + "Eu");
        this.container.setText("textEnergyOutput",Translation.translate("Energy Output: ") + this.getEnergyOutput() + "Eu");
        this.container.setText("textCooling",Translation.translate("Cooling: ") + this.data.cooling);
        this.container.setText("textHeat",Translation.translate("Heat: ") + this.data.heat + "Hu");
    },

    redstone:function(params){
        this.data.isEnabled = params.power > 0?true:false;
    },

    energyTick:function(type,src){
		var output = Math.min(this.getMaxVoltage(),this.data.energy);
		this.data.energy += src.add(output) - output;
    },

    getGuiScreen:function(){
        return GuiNuclearReactor;
    }
});




// file: machine/energy_storage/lithium_battery_box.js

// [锂电池盒]Lithium Battery Box
IDRegistry.genBlockID("lithiumBatteryBox");
Block.createBlock("lithiumBatteryBox",[
    {name:"Lithium Battery Box",texture:[["battery_bottom",0],["battery_top",0],["lithiumBattery",0]],inCreative:true}
],"machine");
TileRenderer.setStandartModel(BlockID.lithiumBatteryBox,[["battery_bottom",0],["battery_top",0],["lithiumBattery",0],["lithiumBattery",0],["lithiumBattery",0],["lithiumBattery",0]]);
for(let i = 0;i < 9;i++){
    TileRenderer.registerRenderModel(BlockID.lithiumBatteryBox,i,[["battery_bottom",0],["battery_top",0],["lithiumBattery",i],["lithiumBattery",i],["lithiumBattery",i],["lithiumBattery",i]]);
}

Item.addTooltip(BlockID.lithiumBatteryBox,Translation.translate("Energy Input: ") + Translation.translate("Top Side"));
Item.addTooltip(BlockID.lithiumBatteryBox,Translation.translate("Energy Output: ") + Translation.translate("Bottom Side"));
Item.addTooltip(BlockID.lithiumBatteryBox,Translation.translate("Energy Storage: ") + 65536 + "Eu");

MachineRegistry.setDrop("lithiumBatteryBox",BlockID.machineCasing,1);
Callback.addCallback("PreLoaded",function(){
	Recipes.addShaped({id:BlockID.lithiumBatteryBox,count:1,data:0},[
        "aba",
        "bcb",
        "aba"
    ],["a",ItemID.partIron,0,"b",ItemID.lithiumBattery,-1,"c",ItemID.wireTin,0]);
});

var GuiLithiumBatteryBox = new UI.StandartWindow({
	standart:{
		header:{text:{text:Translation.translate("Lithium Battery Box")}},
		inventory:{standart:true},
		background:{standart:true}
    },

    drawing:[
		{type:"bitmap",x:350,y:50,bitmap:"energy_background",scale:GUI_SCALE},
		{type:"bitmap",x:900,y:325,bitmap:"logo",scale:GUI_SCALE},
		{type:"bitmap",x:700 - GUI_SCALE * 4,y:75 - GUI_SCALE * 4,bitmap:"infoSmall",scale:GUI_SCALE}
    ],
    
	elements:{
        "textEnergy":{type:"text",font:GUI_TEXT,x:700,y:75,width:300,height:TEXT_SIZE,text:Translation.translate("Energy: ") + "0/0Eu"},
        "scaleEnergy":{type:"scale",x:350 + GUI_SCALE * 6,y:50 + GUI_SCALE * 6,direction:1,value:0.5,bitmap:"energy_scale",scale:GUI_SCALE},
        "slotBatteryInput":{type:"slot",x:510,y:300,bitmap:"slot_battery_input",scale:GUI_SCALE,isValid:MachineRegistry.isValidEUItem},
        "slotBatteryOutput":{type:"slot",x:450,y:300,bitmap:"slot_battery_output",scale:GUI_SCALE,isValid:MachineRegistry.isValidEUStorage}
	}
});

MachineRegistry.registerEUEnergyStorage(BlockID.lithiumBatteryBox,{
    defaultValues:{tier:1,energy_storage:65536},

    tick:function(){
        this.renderer();

        this.data.energy -= ChargeItemRegistry.addEnergyTo(this.container.getSlot("slotBatteryInput"),"Eu",this.data.energy,1);
        this.data.energy += ChargeItemRegistry.getEnergyFrom(this.container.getSlot("slotBatteryOutput"),"Eu",this.getEnergyStorage() - this.data.energy,1);

        this.container.setScale("scaleEnergy",parseInt(this.data.energy / this.getEnergyStorage() * 47) / 47);
        this.container.setText("textEnergy",Translation.translate("Energy: ") + this.data.energy + "/" + this.getEnergyStorage() + "Eu");
    },
    
    getGuiScreen:function(){return GuiLithiumBatteryBox;},
    canReceiveEnergy:function(side){return side == BlockSide.UP;},
    canExtractEnergy:function(side){return side == BlockSide.DOWN;},
    renderer:function(){TileRenderer.mapAtCoords(this.x,this.y,this.z,this.id,parseInt(this.data.energy / this.getEnergyStorage() * 8));}
});




// file: machine/energy_storage/enete_battery_box.js

// [恩奈特电池盒]Enete Battery Box
IDRegistry.genBlockID("eneteBatteryBox");
Block.createBlock("eneteBatteryBox",[
    {name:"Enete Battery Box",texture:[["machine_bottom",1],["machine_top",1],["enete_battery_box",0]],inCreative:true}
],"machine");

Item.addTooltip(BlockID.eneteBatteryBox,Translation.translate("Energy Storage: ") + 589824 + "Eu");
MachineRegistry.setDrop("eneteBatteryBox",BlockID.machineCasing,2);

var render = new ICRender.Model(),model = new BlockRenderer.Model();
model.addBox(0,0,0,1,0.3125,1,BlockID.eneteBatteryBox,0);
model.addBox(0,0.6875,0,1,1,1,BlockID.eneteBatteryBox,0);
model.addBox(0,0.3125,0,0.3125,0.6875,0.3125,BlockID.eneteBatteryBox,0);
model.addBox(0,0.3125,0.6875,0.3125,0.6875,1,BlockID.eneteBatteryBox,0);
model.addBox(0.6875,0.3125,0,1,0.6875,0.3125,BlockID.eneteBatteryBox,0);
model.addBox(0.6875,0.3125,0.6875,1,0.6875,1,BlockID.eneteBatteryBox,0);
model.addBox(0.0625,0.0625,0.0625,0.9375,0.9375,0.9375,BlockID.eneteBatteryBox,0);
render.addEntry(model);
BlockRenderer.enableCoordMapping(BlockID.eneteBatteryBox,-1,render);

Callback.addCallback("PreLoaded",function(){
	Recipes.addShaped({id:BlockID.eneteBatteryBox,count:1,data:0},[
        "aba",
        "bcb",
        "aba"
    ],["a",ItemID.partIron,0,"b",ItemID.eneteBattery,-1,"c",ItemID.wireCopper,0]);
});

var GuiEneteBatteryBox = new UI.StandartWindow({
	standart:{
		header:{text:{text:Translation.translate("Enete Battery Box")}},
		inventory:{standart:true},
		background:{standart:true}
    },

    drawing:[
        {type:"bitmap",x:900,y:325,bitmap:"logo",scale:GUI_SCALE},
		{type:"bitmap",x:350,y:50,bitmap:"energy_background",scale:GUI_SCALE},
		{type:"bitmap",x:700 - GUI_SCALE * 4,y:75 - GUI_SCALE * 4,bitmap:"infoSmall",scale:GUI_SCALE}
    ],
    
	elements:{
        "textEnergy":{type:"text",font:GUI_TEXT,x:700,y:75,width:300,height:TEXT_SIZE,text:Translation.translate("Energy: ") + "0/0Eu"},
        "scaleEnergy":{type:"scale",x:350 + GUI_SCALE * 6,y:50 + GUI_SCALE * 6,direction:1,value:0.5,bitmap:"energy_scale",scale:GUI_SCALE},
        "slotBatteryInput":{type:"slot",x:510,y:300,bitmap:"slot_battery_input",scale:GUI_SCALE,isValid:MachineRegistry.isValidEUItem},
        "slotBatteryOutput":{type:"slot",x:450,y:300,bitmap:"slot_battery_output",scale:GUI_SCALE,isValid:MachineRegistry.isValidEUStorage}
	}
});

MachineRegistry.registerEUEnergyStorage(BlockID.eneteBatteryBox,{
    defaultValues:{tier:2,energy_storage:589824},

    tick:function(){
        this.data.energy -= ChargeItemRegistry.addEnergyTo(this.container.getSlot("slotBatteryInput"),"Eu",this.data.energy,2);
        this.data.energy += ChargeItemRegistry.getEnergyFrom(this.container.getSlot("slotBatteryOutput"),"Eu",this.getEnergyStorage() - this.data.energy,2);
        
        this.container.setScale("scaleEnergy",parseInt(this.data.energy / this.getEnergyStorage() * 47) / 47);
        this.container.setText("textEnergy",Translation.translate("Energy: ") + this.data.energy + "/" + this.getEnergyStorage() + "Eu");
    },
    
    getGuiScreen:function(){return GuiEneteBatteryBox;}
});




// file: machine/electric/assembly_table.js

// [装配台]Assembly Table
IDRegistry.genBlockID("assemblyTable");
Block.createBlock("assemblyTable",[
    {name:"Assembly Table",texture:[["machine_bottom",1],["assembly_table_top",0],["assembly_table_side",0]],inCreative:true}
],{base:1,solid:true,opaque:true,destroytime:5,explosionres:16});

MachineRegistry.setDrop("assemblyTable",BlockID.machineCasing,1);
Callback.addCallback("PreLoaded",function(){
    Recipes.addShaped({id:BlockID.assemblyTable,count:1,data:0},[
        "a",
        "b",
        "c"
    ],["a",ItemID.circuit,0,"b",BlockID.machineCasing,1,"c",58,0]);
});

var render = new ICRender.Model(),model = new BlockRenderer.Model();
model.addBox(0,0,0,1,0.0625,1,BlockID.assemblyTable,0);
model.addBox(0,0.1875,0,1,0.5625,1,BlockID.assemblyTable,0);
model.addBox(0.125,0.0625,0.125,0.875,0.1875,0.875,BlockID.assemblyTable,0);
model.addBox(0.1875,0.0625,0.0625,0.25,0.1875,0.125,[["azure",0]]);
model.addBox(0.0625,0.0625,0.625,0.125,0.1875,0.6875,[["azure",0]]);
model.addBox(0.0625,0.0625,0.75,0.125,0.1875,0.8125,[["azure",0]]);
model.addBox(0.625,0.0625,0.875,0.6875,0.1875,0.9375,[["azure",0]]);
model.addBox(0.75,0.0625,0.875,0.8125,0.1875,0.9375,[["azure",0]]);
model.addBox(0.875,0.0625,0.1875,0.9375,0.1875,0.25,[["azure",0]]);
model.addBox(0.875,0.0625,0.3125,0.9375,0.1875,0.375,[["azure",0]]);
model.addBox(0.3125,0.0625,0.0625,0.375,0.1875,0.125,[["azure",0]]);
render.addEntry(model);
BlockRenderer.enableCoordMapping(BlockID.assemblyTable,-1,render);
Block.setBlockShape(BlockID.assemblyTable,{x:0,y:0,z:0},{x:1,y:0.5,z:1});

var GuiAssemblyTable = new UI.StandartWindow({
    standart:{
        header:{text:{text:Translation.translate("Assembly Table")}},
        inventory:{standart:true},
        background:{standart:true}
    },
    
    drawing:[
        {type:"bitmap",x:900,y:325,bitmap:"logo",scale:GUI_SCALE},
        {type:"bitmap",x:350,y:50,bitmap:"energy_background",scale:GUI_SCALE},
        {type:"bitmap",x:615,y:170 + GUI_SCALE * 2,bitmap:"arrow_background",scale:GUI_SCALE},
		{type:"bitmap",x:700 - GUI_SCALE * 4,y:75 - GUI_SCALE * 4,bitmap:"infoSmall",scale:GUI_SCALE}
    ],

    elements:{
        "slotInput1":{type:"slot",x:460,y:170,bitmap:"slot_circuit",scale:GUI_SCALE},
        "slotInput2":{type:"slot",x:520,y:170,bitmap:"slot_empty",scale:GUI_SCALE},
        "scaleArrow":{type:"scale",x:615,y:170 + GUI_SCALE * 2,direction:0,value:0.5,bitmap:"arrow_scale",scale:GUI_SCALE},
        "slotOutput":{type:"slot",x:720,y:170,bitmap:"slot_empty",scale:GUI_SCALE,isValid:function(){return false;}},

        "textEnergy":{type:"text",font:GUI_TEXT,x:700,y:75,width:300,height:TEXT_SIZE,text:Translation.translate("Energy: ") + "0/0Eu"},
        "scaleEnergy":{type:"scale",x:350 + GUI_SCALE * 6,y:50 + GUI_SCALE * 6,direction:1,value:0.5,bitmap:"energy_scale",scale:GUI_SCALE},

        "slotUpgrade1":{type:"slot",x:370,y:325,bitmap:"slot_circuit",isValid:UpgradeRegistry.isValidUpgrade},
		"slotUpgrade2":{type:"slot",x:430,y:325,bitmap:"slot_circuit",isValid:UpgradeRegistry.isValidUpgrade},
		"slotUpgrade3":{type:"slot",x:490,y:325,bitmap:"slot_circuit",isValid:UpgradeRegistry.isValidUpgrade},
        "slotUpgrade4":{type:"slot",x:550,y:325,bitmap:"slot_circuit",isValid:UpgradeRegistry.isValidUpgrade}
    }
});

MachineRegistry.registerEUMachine(BlockID.assemblyTable,{
    defaultValues:{
        meta:0,
        tier:1,
        progress:0,
        work_time:320,
        energy_consumption:4
    },

    upgrades:["energyStorage","overclocker","transformer"],

	initValues:function(){
        this.data.tier = this.defaultValues.tier;
        this.data.work_time = this.defaultValues.work_time;
		this.data.energy_storage = this.defaultValues.energy_storage;
		this.data.energy_consumption = this.defaultValues.energy_consumption;
	},
	
	tick:function(){
		UpgradeRegistry.executeUpgrades(this);
        StorageInterface.checkHoppers(this);
        
        var input1 = this.container.getSlot("slotInput1");
        var input2 = this.container.getSlot("slotInput2");    
        var recipe = RecipeRegistry.getRecipeResult("AssemblyTable",[input1.id,input1.data,input2.id,input2.data]);

        if(recipe && input1.count >= recipe.input[0] && input2.count >= recipe.input[1]){if(this.data.energy >= this.data.energy_consumption){
                this.data.energy -= this.data.energy_consumption;
                this.data.progress += 1 / this.data.work_time;
                if(this.data.progress.toFixed(3) >= 1){
                    this.setOutputSlot("slotOutput",recipe.output.id,recipe.output.count,recipe.output.data);
                    input1.count -= recipe.input[0];
                    input2.count -= recipe.input[1];
                    this.container.validateAll();
                    this.data.progress = 0;
                }
            }
        } else {this.data.progress = 0;}

        this.container.setScale("scaleArrow",parseInt(this.data.progress / 1 * 22) / 22);
        this.container.setScale("scaleEnergy",parseInt(this.data.energy / this.getEnergyStorage() * 47) / 47);
        this.container.setText("textEnergy",Translation.translate("Energy: ") + this.data.energy + "/" + this.getEnergyStorage() + "Eu");
    },

    getGuiScreen:function(){
        return GuiAssemblyTable;
    },

    energyReceive:MachineRegistry.energyReceive
});
TileRenderer.setRotationPlaceFunction(BlockID.assemblyTable);
StorageInterface.createInterface(BlockID.assemblyTable,{
	slots:{
        "slotInput1":{input:true},
        "slotInput2":{input:true},
        "slotOutput":{output:true}
	},
	isValidInput:function(item){return RecipeRegistry.getRecipeResult("AssemblyTable",[item.id,item.data])?true:false;}
});




// file: machine/electric/autoclave.js

// [高压釜]Autoclave
IDRegistry.genBlockID("autoclave");
Block.createBlock("autoclave",[
    {name:"Autoclave",texture:[["machine_bottom",2],["machine_top",2],["machine_side",2],["autoclave",0],["machine_side",2],["machine_side",2]],inCreative:true}
],"machine");
TileRenderer.setStandartModel(BlockID.autoclave,[["machine_bottom",2],["machine_top",2],["machine_side",2],["autoclave",0],["machine_side",2],["machine_side",2]]);
TileRenderer.registerRotationModel(BlockID.autoclave,0,[["machine_bottom",2],["machine_top",2],["machine_side",2],["autoclave",0],["machine_side",2],["machine_side",2]]);
TileRenderer.registerRotationModel(BlockID.autoclave,4,[["machine_bottom",2],["machine_top",2],["machine_side",2],["autoclave",1],["machine_side",2],["machine_side",2]]);

MachineRegistry.setDrop("autoclave",BlockID.machineCasing,2);
Callback.addCallback("PreLoaded",function(){
	Recipes.addShaped({id:BlockID.autoclave,count:1,data:0},[
        "aba",
        "bcb",
        "aba"
    ],["a",ItemID.partIron,0,"b",ItemID.plateIron,0,"c",BlockID.machineCasing,1]);
});

var GuiAutoclave = new UI.StandartWindow({
    standart:{
        header:{text:{text:Translation.translate("Autoclave")}},
        inventory:{standart:true},
        background:{standart:true}
    },
    
    drawing:[
        {type:"bitmap",x:350,y:50,bitmap:"energy_background",scale:GUI_SCALE},
        {type:"bitmap",x:620,y:175 + GUI_SCALE * 2,bitmap:"arrow_background",scale:GUI_SCALE},
        {type:"bitmap",x:700 - GUI_SCALE * 4,y:75 - GUI_SCALE * 4,bitmap:"infoSmall",scale:GUI_SCALE},
        {type:"bitmap",x:900 - GUI_SCALE * 3,y:175 - GUI_SCALE * 6,bitmap:"liquidBackground",scale:GUI_SCALE}
    ],

    elements:{
        "slotInput":{type:"slot",x:350 + GUI_SCALE * 43,y:175,bitmap:"slot_empty",scale:GUI_SCALE},
        "slotOutput":{type:"slot",x:720,y:175,bitmap:"slot_empty",scale:GUI_SCALE,isValid:function(){return false;}},
        "scaleArrow":{type:"scale",x:620,y:175 + GUI_SCALE * 2,direction:0,value:0.5,bitmap:"arrow_scale",scale:GUI_SCALE},
        "textEnergy":{type:"text",font:GUI_TEXT,x:700,y:75,width:300,height:TEXT_SIZE,text:Translation.translate("Energy: ") + "0/0Eu"},
        "scaleEnergy":{type:"scale",x:350 + GUI_SCALE * 6,y:50 + GUI_SCALE * 6,direction:1,value:0.5,bitmap:"energy_scale",scale:GUI_SCALE},

        "scaleLiquid":{type:"scale",x:900 + GUI_SCALE * 3,y:175,direction:1,value:0.5,bitmap:"liquidScale",overlay:"liquidScale",scale:GUI_SCALE},
        "slotLiquid1":{type:"slot",x:720,y:325,bitmap:"slot_cell",isValid:function(id,count,data){return Liquid.getItemLiquid(id,data) == "steam";}},
        "slotLiquid2":{type:"slot",x:780,y:325,bitmap:"slot_cell",isValid:function(){return false;}},

        "slotUpgrade1":{type:"slot",x:370,y:325,bitmap:"slot_circuit",isValid:UpgradeRegistry.isValidUpgrade},
        "slotUpgrade2":{type:"slot",x:430,y:325,bitmap:"slot_circuit",isValid:UpgradeRegistry.isValidUpgrade},
        "slotUpgrade3":{type:"slot",x:490,y:325,bitmap:"slot_circuit",isValid:UpgradeRegistry.isValidUpgrade},
        "slotUpgrade4":{type:"slot",x:550,y:325,bitmap:"slot_circuit",isValid:UpgradeRegistry.isValidUpgrade},
    }
});

MachineRegistry.registerEUMachine(BlockID.autoclave,{
    defaultValues:{
        meta:0,
        tier:3,
        progress:0,
        work_time:320,
        isActive:false,
        sound_volume:16,
        energy_consumption:4
    },

    upgrades:["energyStorage","muffler","overclocker","transformer"],

    init:function(){
		this.liquidStorage.setLimit("steam",4);
		this.renderer();
    },

	initValues:function(){
        this.data.tier = this.defaultValues.tier;
        this.data.work_time = this.defaultValues.work_time;
        this.data.sound_volume = this.defaultValues.sound_volume;
        this.data.energy_storage = this.defaultValues.energy_storage;
		this.data.energy_consumption = this.defaultValues.energy_consumption;
	},
	
	tick:function(){
		UpgradeRegistry.executeUpgrades(this);
        StorageInterface.checkHoppers(this);
        
        var input = this.container.getSlot("slotInput");
        var amount = this.liquidStorage.getAmount("steam");
        var recipe = RecipeRegistry.getRecipeResult("Autoclave",[input.id,input.data]);
        
        if(recipe && input.count >= recipe.count && amount >= 1){if(this.data.energy >= this.data.energy_consumption){
            this.activate("machine/autoclave.ogg");
            this.data.energy -= this.data.energy_consumption;
            this.data.progress += 1 / this.data.work_time;
            
            if(this.data.progress.toFixed(3) >= 1){
                this.setOutputSlot("slotOutput",recipe.output.id,recipe.output.count,recipe.output.data);
                this.liquidStorage.getLiquid("steam",0.014),input.count -= recipe.count;
                this.container.validateAll();
                this.data.progress = 0;
            }
        } else {this.deactive();}} else {this.deactive(),this.data.progress = 0;}
        
        var liquid1 = this.container.getSlot("slotLiquid1");
        var liquid2 = this.container.getSlot("slotLiquid2");
        var empty = Liquid.getEmptyItem(liquid1.id,liquid1.data);
        if(empty && empty.liquid == "steam"){
            var storage = Liquid.getItemStorage(liquid1.id,liquid1.data);
            if(this.liquidStorage.getAmount("steam") + storage <= 4 && (liquid2.id == empty.id && liquid2.data == empty.data && liquid2.count < Item.getMaxStack(empty.id) || liquid2.id == 0)){
                this.liquidStorage.addLiquid("steam",storage);
                liquid1.count--;
                liquid2.id = empty.id;
                liquid2.data = empty.data;
                liquid2.count++;
                this.container.validateAll();
            }
        }

        this.liquidStorage.updateUiScale("scaleLiquid","steam");
        this.container.setScale("scaleArrow",parseInt(this.data.progress / 1 * 22) / 22);
        this.container.setScale("scaleEnergy",parseInt(this.data.energy / this.getEnergyStorage() * 47) / 47);
        this.container.setText("textEnergy",Translation.translate("Energy: ") + this.data.energy + "/" + this.getEnergyStorage() + "Eu");
    },
    
    getGuiScreen:function(){
        return GuiAutoclave;
    },

    energyReceive:MachineRegistry.energyReceive
});
TileRenderer.setRotationPlaceFunction(BlockID.autoclave);
StorageInterface.createInterface(BlockID.autoclave,{
	slots:{
		"slotInput":{input:true},
        "slotOutput":{output:true}
	},
	isValidInput:function(item){return RecipeRegistry.getRecipeResult("Autoclave",[item.id,item.data])?true:false;}
});




// file: machine/electric/auto_saieve.js

// 自动筛子
IDRegistry.genBlockID("autoSaieve");
Block.createBlock("autoSaieve",[
    {name:"Auto Sieve",texture:[["auto_sieve_bottom",0],["auto_sieve_top",0],["auto_sieve_side",0]],inCreative:true}
],{base:1,solid:true,opaque:true,destroytime:5,explosionres:16});

var render = new ICRender.Model();
var model = new BlockRenderer.Model();
model.addBox(0.0625,0,0.0625,0.125,1,0.125,BlockID.autoSaieve,0);
model.addBox(0.0625,0,0.875,0.125,1,0.9375,BlockID.autoSaieve,0);
model.addBox(0.875,0,0.0625,0.9375,1,0.125,BlockID.autoSaieve,0);
model.addBox(0.875,0,0.875,0.9375,1,0.9375,BlockID.autoSaieve,0);
model.addBox(0,0.5,0,1,1,0.0625,BlockID.autoSaieve,0);
model.addBox(0,0.5,0.9375,1,1,1,BlockID.autoSaieve,0);
model.addBox(0,0.5,0.0625,0.0625,1,0.9375,BlockID.autoSaieve,0);
model.addBox(0.9375,0.5,0.0625,1,1,0.9375,BlockID.autoSaieve,0);
model.addBox(0.0625,0.5625,0.0625,0.9375,0.625,0.9375,[["string_mesh",0]]);
render.addEntry(model);
BlockRenderer.enableCoordMapping(BlockID.autoSaieve,-1,render);

MachineRegistry.setDrop("autoSaieve",BlockID.machineCasing,1);
Callback.addCallback("PreLoaded",function(){
    Recipes.addShaped({id:BlockID.autoSaieve,count:1,data:0},[
        "ada",
        "aca",
        "b b"
    ],["a",ItemID.plateIron,0,"b",ItemID.stickIron,0,"c",ItemID.gearIron,0,"d",BlockID.mesh,0]);
});

var GuiAutoSaieve = new UI.StandartWindow({
    standart:{
        header:{text:{text:Translation.translate("Auto Sieve")}},
        inventory:{standart:true},
        background:{standart:true}
    },

    drawing:[
        {type:"bitmap",x:900,y:325,bitmap:"logo",scale:GUI_SCALE},
        {type:"bitmap",x:350,y:50,bitmap:"energy_background",scale:GUI_SCALE},
        {type:"bitmap",x:600,y:175,bitmap:"arrow_background",scale:GUI_SCALE}
    ],

    elements:{
        "slotInput":{type:"slot",x:500,y:175,bitmap:"slot_empty",scale:GUI_SCALE},
        "scaleArrow":{type:"scale",x:600,y:175,direction:0,value:0.5,bitmap:"arrow_scale",scale:GUI_SCALE},
        "slotOutput1":{type:"slot",x:700,y:75,bitmap:"slot_empty",scale:GUI_SCALE,isValid:function(){return false;}},
        "slotOutput2":{type:"slot",x:760,y:75,bitmap:"slot_empty",scale:GUI_SCALE,isValid:function(){return false;}},
        "slotOutput3":{type:"slot",x:820,y:75,bitmap:"slot_empty",scale:GUI_SCALE,isValid:function(){return false;}},
        "slotOutput4":{type:"slot",x:880,y:75,bitmap:"slot_empty",scale:GUI_SCALE,isValid:function(){return false;}},
        "slotOutput5":{type:"slot",x:700,y:135,bitmap:"slot_empty",scale:GUI_SCALE,isValid:function(){return false;}},
        "slotOutput6":{type:"slot",x:760,y:135,bitmap:"slot_empty",scale:GUI_SCALE,isValid:function(){return false;}},
        "slotOutput7":{type:"slot",x:820,y:135,bitmap:"slot_empty",scale:GUI_SCALE,isValid:function(){return false;}},
        "slotOutput8":{type:"slot",x:880,y:135,bitmap:"slot_empty",scale:GUI_SCALE,isValid:function(){return false;}},
        "slotOutput9":{type:"slot",x:700,y:195,bitmap:"slot_empty",scale:GUI_SCALE,isValid:function(){return false;}},
        "slotOutput10":{type:"slot",x:760,y:195,bitmap:"slot_empty",scale:GUI_SCALE,isValid:function(){return false;}},
        "slotOutput11":{type:"slot",x:820,y:195,bitmap:"slot_empty",scale:GUI_SCALE,isValid:function(){return false;}},
        "slotOutput12":{type:"slot",x:880,y:195,bitmap:"slot_empty",scale:GUI_SCALE,isValid:function(){return false;}},
        "slotOutput13":{type:"slot",x:700,y:255,bitmap:"slot_empty",scale:GUI_SCALE,isValid:function(){return false;}},
        "slotOutput14":{type:"slot",x:760,y:255,bitmap:"slot_empty",scale:GUI_SCALE,isValid:function(){return false;}},
        "slotOutput15":{type:"slot",x:820,y:255,bitmap:"slot_empty",scale:GUI_SCALE,isValid:function(){return false;}},
        "slotOutput16":{type:"slot",x:880,y:255,bitmap:"slot_empty",scale:GUI_SCALE,isValid:function(){return false;}},

        "scaleEnergy":{type:"scale",x:350 + GUI_SCALE * 6,y:50 + GUI_SCALE * 6,direction:1,value:0.5,bitmap:"energy_scale",scale:GUI_SCALE},

        "slotUpgrade1":{type:"slot",x:370,y:325,bitmap:"slot_circuit",isValid:UpgradeRegistry.isValidUpgrade},
        "slotUpgrade2":{type:"slot",x:430,y:325,bitmap:"slot_circuit",isValid:UpgradeRegistry.isValidUpgrade},
        "slotUpgrade3":{type:"slot",x:490,y:325,bitmap:"slot_circuit",isValid:UpgradeRegistry.isValidUpgrade},
        "slotUpgrade4":{type:"slot",x:550,y:325,bitmap:"slot_circuit",isValid:UpgradeRegistry.isValidUpgrade},
    }
});

MachineRegistry.registerEUMachine(BlockID.autoSaieve,{
    defaultValues:{
        tier:2,
        progress:0,
        work_time:160,
        energy_consumption:8
    },

    upgrades:["energyStorage","overclocker","transformer"],

    initValues:function(){
        this.data.tier = this.defaultValues.tier;
        this.data.work_time = this.defaultValues.work_time;
		this.data.energy_storage = this.defaultValues.energy_storage;
		this.data.energy_consumption = this.defaultValues.energy_consumption;
    },
    
    tick:function(){
		UpgradeRegistry.executeUpgrades(this);
        StorageInterface.checkHoppers(this);

        var input = this.container.getSlot("slotInput"),recipe = RecipeRegistry.getRecipeResult("AutoSaieve",[input.id,input.data]);
        if(recipe){if(this.data.energy >= this.data.energy_consumption){
            this.data.energy -= this.data.energy_consumption;
            this.data.progress += 1 / this.data.work_time;
            if(this.data.progress.toFixed(3) >= 1){
                input.count--;
                var output = recipe[Math.floor(Math.random() * recipe.length)];
                if(Math.random() * 25 <= output.random){
                    this.setOutputSlot(output.id,random(output.minCount,output.maxCount),output.data);
                }
                this.container.validateAll();
                this.data.progress = 0;
            }
        }} else {this.data.progress = 0;}

        this.container.setScale("scaleArrow",parseInt(this.data.progress / 1 * 22) / 22);
        this.container.setScale("scaleEnergy",parseInt(this.data.energy / this.getEnergyStorage() * 47) / 47);
    },
    
    setOutput:function(id,count,data){
        for(let slot = 1;slot < 17;slot++){
            var output = this.container.getSlot("slotOutput" + slot);
            if(output.id == 0 || output.id == id && output.data == data && output.count < 64){
                if(output.count + count > 64){
                    var output_count = 64 - output.count;
                    output.id = id,output.data = data,output.count += output_count;
                    this.setOutputSlot(id,(output.count + count - 64) - output_count,data);
                } else {
                    output.id = id,output.data = data,output.count += count;
                }
                return true;
            }
        }
        World.drop(this.x + 0.5,this.y + 1.5,this.z + 0.5,id,count,data);
    },

    energyReceive:MachineRegistry.energyReceive,
    getGuiScreen:function(){return GuiAutoSaieve;}
});
StorageInterface.createInterface(BlockID.autoSaieve,{
	slots:{
		"slotInput":{input:true},
        "slotOutput1":{output:true},
        "slotOutput2":{output:true},
        "slotOutput3":{output:true},
        "slotOutput4":{output:true},
        "slotOutput5":{output:true},
        "slotOutput6":{output:true},
        "slotOutput7":{output:true},
        "slotOutput8":{output:true},
        "slotOutput9":{output:true},
        "slotOutput10":{output:true},
        "slotOutput11":{output:true},
        "slotOutput12":{output:true},
        "slotOutput13":{output:true},
        "slotOutput14":{output:true},
        "slotOutput15":{output:true},
        "slotOutput16":{output:true}
    },
    
	isValidInput:function(item){return RecipeRegistry.getRecipeResult("AutoSaieve",[item.id,item.data])?true:false;}
});




// file: machine/electric/blast_furnace.js

// [高炉]Blast Furnace
IDRegistry.genBlockID("blastFurnace");
Block.createBlock("blastFurnace",[
    {name:"Blast Furnace",texture:[["machine_bottom",1],["machine_top",1],["machine_side",1],["blastFurnace",0],["machine_side",1],["machine_side",1]],inCreative:true}
],"machine");
TileRenderer.setStandartModel(BlockID.blastFurnace,[["machine_bottom",1],["machine_top",1],["machine_side",1],["blastFurnace",0],["machine_side",1],["machine_side",1]]);
TileRenderer.registerRotationModel(BlockID.blastFurnace,0,[["machine_bottom",1],["machine_top",1],["machine_side",1],["blastFurnace",0],["machine_side",1],["machine_side",1]]);
TileRenderer.registerRotationModel(BlockID.blastFurnace,4,[["machine_bottom",1],["machine_top",1],["machine_side",1],["blastFurnace",1],["machine_side",1],["machine_side",1]]);

MachineRegistry.setDrop("blastFurnace",BlockID.machineCasing,1);
Callback.addCallback("PreLoaded",function(){
    Recipes.addShaped({id:BlockID.blastFurnace,count:1,data:0},[
        "dcd",
        "dbd",
        "dad"
    ],["a",BlockID.crudeBlastFurnace,0,"b",BlockID.machineCasing,1,"c",ItemID.circuit,0,"d",ItemID.plateIron,0]);
});

var GuiBlastFurnace = new UI.StandartWindow({
    standart:{
        header:{text:{text:Translation.translate("Blast Furnace")}},
        inventory:{standart:true},
        background:{standart:true}
    },
    
    drawing:[
        {type:"bitmap",x:900,y:325,bitmap:"logo",scale:GUI_SCALE},
        {type:"bitmap",x:350,y:50,bitmap:"energy_background",scale:GUI_SCALE},
        {type:"bitmap",x:620,y:175 + GUI_SCALE * 2,bitmap:"arrow_background",scale:GUI_SCALE},
		{type:"bitmap",x:700 - GUI_SCALE * 4,y:75 - GUI_SCALE * 4,bitmap:"infoSmall",scale:GUI_SCALE}
    ],

    elements:{
        "slotInput":{type:"slot",x:350 + GUI_SCALE * 43,y:175,bitmap:"slot_empty",scale:GUI_SCALE},
        "slotOutput0":{type:"slot",x:720,y:175,bitmap:"slot_empty",scale:GUI_SCALE,isValid:function(){return false;}},
        "slotOutput1":{type:"slot",x:780,y:175,bitmap:"slot_empty",scale:GUI_SCALE,isValid:function(){return false;}},
        "scaleArrow":{type:"scale",x:620,y:175 + GUI_SCALE * 2,direction:0,value:0.5,bitmap:"arrow_scale",scale:GUI_SCALE},
        "textEnergy":{type:"text",font:GUI_TEXT,x:700,y:75,width:300,height:TEXT_SIZE,text:Translation.translate("Energy: ") + "0/0Eu"},
        "scaleEnergy":{type:"scale",x:350 + GUI_SCALE * 6,y:50 + GUI_SCALE * 6,direction:1,value:0.5,bitmap:"energy_scale",scale:GUI_SCALE},

        "slotUpgrade1":{type:"slot",x:370,y:325,bitmap:"slot_circuit",isValid:UpgradeRegistry.isValidUpgrade},
		"slotUpgrade2":{type:"slot",x:430,y:325,bitmap:"slot_circuit",isValid:UpgradeRegistry.isValidUpgrade},
		"slotUpgrade3":{type:"slot",x:490,y:325,bitmap:"slot_circuit",isValid:UpgradeRegistry.isValidUpgrade},
        "slotUpgrade4":{type:"slot",x:550,y:325,bitmap:"slot_circuit",isValid:UpgradeRegistry.isValidUpgrade},
    }
});

MachineRegistry.registerEUMachine(BlockID.blastFurnace,{
    defaultValues:{
        meta:0,
        tier:1,
        progress:0,
        work_time:3000,
        isActive:false,
        sound_volume:16,
        energy_consumption:4
    },

    upgrades:["energyStorage","muffler","overclocker","transformer"],
    
	initValues:function(){
        this.data.tier = this.defaultValues.tier;
        this.data.work_time = this.defaultValues.work_time;
        this.data.sound_volume = this.defaultValues.sound_volume;
		this.data.energy_storage = this.defaultValues.energy_storage;
		this.data.energy_consumption = this.defaultValues.energy_consumption;
	},
	
	tick:function(){
        StorageInterface.checkHoppers(this);
        UpgradeRegistry.executeUpgrades(this);

        if(StructureRegistry.getStructure("blast_furnace",this.x,this.y,this.z,true)){
            
            var input = this.container.getSlot("slotInput");
            var recipe = RecipeRegistry.getRecipeResult("BlastFurnace",[input.id,input.data]);
    
            if(recipe){
                if(this.data.energy >= this.data.energy_consumption){
                    this.activate("machine/blast_furnace.ogg");
                    this.data.energy -= this.data.energy_consumption;
                    this.data.progress += 1 / this.data.work_time;
                    
                    if(this.data.progress.toFixed(3) >= 1){
                        for(let i = 0;i < 2;i++){
                            if(recipe[i]) this.setOutputSlot("slotOutput" + i,recipe[i].id,recipe[i].count,recipe[i].data);
                        } input.count--;
                        this.container.validateAll();
                        this.data.progress = 0;
                    }
                } else {
                    this.deactive();
                }
            } else {
                this.deactive();
                this.data.progress = 0;
            }
        }

        this.container.setScale("scaleArrow",parseInt(this.data.progress / 1 * 22) / 22);
        this.container.setScale("scaleEnergy",parseInt(this.data.energy / this.getEnergyStorage() * 47) / 47);
        this.container.setText("textEnergy",Translation.translate("Energy: ") + this.data.energy + "/" + this.getEnergyStorage() + "Eu");
    },
    
    energyReceive:MachineRegistry.energyReceive,
    getGuiScreen:function(){return GuiBlastFurnace;}
});
TileRenderer.setRotationPlaceFunction(BlockID.blastFurnace);
StorageInterface.createInterface(BlockID.blastFurnace,{
	slots:{
		"slotInput":{input:true},
        "slotOutput0":{output:true},
        "slotOutput1":{output:true}
	},
	isValidInput:function(item){return RecipeRegistry.getRecipeResult("BlastFurnace",[item.id,item.data])?true:false;}
});




// file: machine/electric/canning_machine.js

// [装罐机]Canning Machine
IDRegistry.genBlockID("canningMachine");
Block.createBlock("canningMachine",[
    {name:"Canning Machine",texture:[["machine_bottom",1],["machine_top",1],["machine_side",1],["canningMachine",0],["machine_side",1],["machine_side",1]],inCreative:true}
],"machine");
TileRenderer.setStandartModel(BlockID.canningMachine,[["machine_bottom",1],["machine_top",1],["machine_side",1],["canningMachine",0],["machine_side",1],["machine_side",1]]);
TileRenderer.registerRotationModel(BlockID.canningMachine,0,[["machine_bottom",1],["machine_top",1],["machine_side",1],["canningMachine",0],["machine_side",1],["machine_side",1]]);

MachineRegistry.setDrop("canningMachine",BlockID.machineCasing,1);
Callback.addCallback("PreLoaded",function(){
    Recipes.addShaped({id:BlockID.canningMachine,count:1,data:0},[
        "dcd",
        "dcd",
        "aba"
    ],["a",ItemID.circuit,0,"b",BlockID.machineCasing,1,"c",ItemID.cellEmpty,0,"d",ItemID.plateIron,0]);
});

var GuiCanningMachine = new UI.StandartWindow({
    standart:{
        header:{text:{text:Translation.translate("Canning Machine")}},
        inventory:{standart:true},
        background:{standart:true}
    },
    
    drawing:[
        {type:"bitmap",x:900,y:325,bitmap:"logo",scale:GUI_SCALE},
        {type:"bitmap",x:350,y:50,bitmap:"energy_background",scale:GUI_SCALE},
        {type:"bitmap",x:600,y:175 + GUI_SCALE * 2,bitmap:"arrow_background",scale:GUI_SCALE},
		{type:"bitmap",x:700 - GUI_SCALE * 4,y:75 - GUI_SCALE * 4,bitmap:"infoSmall",scale:GUI_SCALE}
    ],

    elements:{
        "slotCell":{type:"slot",x:350 + GUI_SCALE * 43,y:220,bitmap:"slot_cell",scale:GUI_SCALE},
        "slotInput":{type:"slot",x:350 + GUI_SCALE * 43,y:135,bitmap:"slot_empty",scale:GUI_SCALE},
        "scaleArrow":{type:"scale",x:600,y:175 + GUI_SCALE * 2,direction:0,value:0.5,bitmap:"arrow_scale",scale:GUI_SCALE},
        "slotOutput":{type:"slot",x:720,y:170,bitmap:"slot_empty",scale:GUI_SCALE,isValid:function(){return false;}},

        "textEnergy":{type:"text",font:GUI_TEXT,x:700,y:75,width:300,height:TEXT_SIZE,text:Translation.translate("Energy: ") + "0/0Eu"},
        "scaleEnergy":{type:"scale",x:350 + GUI_SCALE * 6,y:50 + GUI_SCALE * 6,direction:1,value:0.5,bitmap:"energy_scale",scale:GUI_SCALE},

        "slotUpgrade1":{type:"slot",x:370,y:325,bitmap:"slot_circuit",isValid:UpgradeRegistry.isValidUpgrade},
		"slotUpgrade2":{type:"slot",x:430,y:325,bitmap:"slot_circuit",isValid:UpgradeRegistry.isValidUpgrade},
		"slotUpgrade3":{type:"slot",x:490,y:325,bitmap:"slot_circuit",isValid:UpgradeRegistry.isValidUpgrade},
        "slotUpgrade4":{type:"slot",x:550,y:325,bitmap:"slot_circuit",isValid:UpgradeRegistry.isValidUpgrade}
    }
});

MachineRegistry.registerEUMachine(BlockID.canningMachine,{
    defaultValues:{
        meta:0,
        tier:2,
        progress:0,
        work_time:320,
        energy_consumption:4
    },

    upgrades:["energyStorage","overclocker","transformer"],

	initValues:function(){
        this.data.tier = this.defaultValues.tier;
        this.data.work_time = this.defaultValues.work_time;
		this.data.energy_storage = this.defaultValues.energy_storage;
		this.data.energy_consumption = this.defaultValues.energy_consumption;
	},
	
	tick:function(){
		UpgradeRegistry.executeUpgrades(this);
        StorageInterface.checkHoppers(this);

        var input1 = this.container.getSlot("slotInput1");
        var input2 = this.container.getSlot("slotInput2");    
        var recipe = RecipeRegistry.getRecipeResult("CanningMachine",[input1.id,input1.data,input2.id,input2.data]);
        
        if(recipe){if(this.data.energy >= this.data.energy_consumption){
            this.data.energy -= this.data.energy_consumption;
            this.data.progress += 1 / this.data.work_time;
            if(this.data.progress.toFixed(3) >= 1){
                this.setOutputSlot("slotOutput",recipe.output.id,recipe.output.count,recipe.output.data),input1.count--,input2.count--;
                this.container.validateAll();
                this.data.progress = 0;
            }
        }} else {this.data.progress = 0;}

        this.container.setScale("scaleEnergy",parseInt(this.data.energy / this.getEnergyStorage() * 47) / 47);
        this.container.setScale("scaleArrow",parseInt(this.data.progress / 1 * 22) / 22);
        this.container.setText("textEnergy",Translation.translate("Energy: ") + this.data.energy + "/" + this.getEnergyStorage() + "Eu");
    },

    getGuiScreen:function(){
        return GuiCanningMachine;
    },

    energyReceive:MachineRegistry.energyReceive
});
TileRenderer.setRotationPlaceFunction(BlockID.canningMachine);
StorageInterface.createInterface(BlockID.canningMachine,{
	slots:{
        "slotInput1":{input:true},
        "slotInput2":{input:true},
        "slotOutput":{output:true}
	},
	isValidInput:function(item){return RecipeRegistry.getRecipeResult("CanningMachine",[item.id,item.data])?true:false;}
});




// file: machine/electric/centrifuge.js

// [离心机]Centrifuge
IDRegistry.genBlockID("centrifuge");
Block.createBlock("centrifuge",[
    {name:"Centrifuge",texture:[["machine_bottom",2],["centrifuge_top",0],["machine_side",2],["centrifuge",0],["machine_side",2],["machine_side",2]],inCreative:true}
],"machine");
TileRenderer.setStandartModel(BlockID.centrifuge,[["machine_bottom",2],["centrifuge_top",0],["machine_side",2],["centrifuge",0],["machine_side",2],["machine_side",2]]);
TileRenderer.registerRotationModel(BlockID.centrifuge,0,[["machine_bottom",2],["centrifuge_top",0],["machine_side",2],["centrifuge",0],["machine_side",2],["machine_side",2]]);
TileRenderer.registerRotationModel(BlockID.centrifuge,4,[["machine_bottom",2],["centrifuge_top",1],["machine_side",2],["centrifuge",0],["machine_side",2],["machine_side",2]]);
TileRenderer.registerRotationModel(BlockID.centrifuge,8,[["machine_bottom",2],["centrifuge_top",1],["machine_side",2],["centrifuge",1],["machine_side",2],["machine_side",2]]);

MachineRegistry.setDrop("centrifuge",BlockID.machineCasing,2);
Callback.addCallback("PreLoaded",function(){
	Recipes.addShaped({id:BlockID.centrifuge,count:1,data:0},[
        "cec",
        "cdc",
        "aba"
    ],["a",ItemID.wireCopper,0,"b",ItemID.electricMotor,0,"c",ItemID.plateIron,0,"d",BlockID.machineCasing,2,"e",ItemID.circuit,0]);
});

var GuiCentrifuge = new UI.StandartWindow({
    standart:{
        header:{text:{text:Translation.translate("Centrifuge")}},
        inventory:{standart:true},
        background:{standart:true}
    },

    drawing:[
        {type:"bitmap",x:900,y:325,bitmap:"logo",scale:GUI_SCALE},
        {type:"bitmap",x:350,y:50,bitmap:"energy_background",scale:GUI_SCALE},
        {type:"bitmap",x:600,y:200 + GUI_SCALE * 2,bitmap:"arrow_background",scale:GUI_SCALE},
		{type:"bitmap",x:700 - GUI_SCALE * 4,y:75 - GUI_SCALE * 4,bitmap:"infoSmall",scale:GUI_SCALE}
    ],
    
    elements:{
        "slotInput":{type:"slot",x:350 + GUI_SCALE * 43,y:200,bitmap:"slot_empty",scale:GUI_SCALE},
        "scaleArrow":{type:"scale",x:600,y:200 + GUI_SCALE * 2,direction:0,value:0.5,bitmap:"arrow_scale",scale:GUI_SCALE},
        "slotOutput0":{type:"slot",x:720,y:175,bitmap:"slot_empty",scale:GUI_SCALE,isValid:function(){return false;}},
        "slotOutput1":{type:"slot",x:780,y:175,bitmap:"slot_empty",scale:GUI_SCALE,isValid:function(){return false;}},
        "slotOutput2":{type:"slot",x:720,y:235,bitmap:"slot_empty",scale:GUI_SCALE,isValid:function(){return false;}},
        "slotOutput3":{type:"slot",x:780,y:235,bitmap:"slot_empty",scale:GUI_SCALE,isValid:function(){return false;}},
        "textEnergy":{type:"text",font:GUI_TEXT,x:700,y:75,width:300,height:TEXT_SIZE,text:Translation.translate("Energy: ") + "0/0Eu"},
        "scaleEnergy":{type:"scale",x:350 + GUI_SCALE * 6,y:50 + GUI_SCALE * 6,direction:1,value:0.5,bitmap:"energy_scale",scale:GUI_SCALE},

        "slotUpgrade1":{type:"slot",x:370,y:325,bitmap:"slot_circuit",isValid:UpgradeRegistry.isValidUpgrade},
		"slotUpgrade2":{type:"slot",x:430,y:325,bitmap:"slot_circuit",isValid:UpgradeRegistry.isValidUpgrade},
		"slotUpgrade3":{type:"slot",x:490,y:325,bitmap:"slot_circuit",isValid:UpgradeRegistry.isValidUpgrade},
        "slotUpgrade4":{type:"slot",x:550,y:325,bitmap:"slot_circuit",isValid:UpgradeRegistry.isValidUpgrade}
    }
});

MachineRegistry.registerEUMachine(BlockID.centrifuge,{
    defaultValues:{
        meta:0,
        tier:3,
        progress:0,
        work_time:1200,
        isActive:false,
        energy_consumption:4
    },

    upgrades:["energyStorage","overclocker","transformer"],

	initValues:function(){
        this.data.tier = this.defaultValues.tier;
        this.data.work_time = this.defaultValues.work_time;
		this.data.energy_storage = this.defaultValues.energy_storage;
		this.data.energy_consumption = this.defaultValues.energy_consumption;
	},
	
	tick:function(){
        this.renderer();
		UpgradeRegistry.executeUpgrades(this);
        StorageInterface.checkHoppers(this);
        
        var input = this.container.getSlot("slotInput");
        var recipe = RecipeRegistry.getRecipeResult("Centrifuge",[input.id,input.data]);

        if(recipe){if(this.data.energy >= this.data.energy_consumption){
            this.activate();
            this.data.energy -= this.data.energy_consumption;
            this.data.progress += 1 / this.data.work_time;
            
            if(this.data.progress.toFixed(3) >= 1){
                for(let i = 0;i < 4;i++){
                    if(recipe[i]){
                        this.setOutputSlot("slotOutput" + i,recipe[i].id,recipe[i].count,recipe[i].data);
                    }
                } input.count--;
                this.container.validateAll();
                this.data.progress = 0;
            }
        } else {this.deactive();}} else {this.deactive(),this.data.progress = 0;}
        
        this.container.setScale("scaleArrow",parseInt(this.data.progress / 1 * 22) / 22);
        this.container.setScale("scaleEnergy",parseInt(this.data.energy / this.getEnergyStorage() * 47) / 47);
        this.container.setText("textEnergy",Translation.translate("Energy: ") + this.data.energy + "/" + this.getEnergyStorage() + "Eu");
    },

    renderer:function(){
        var count = 2;
        TileRenderer.mapAtCoords(this.x,this.y,this.z,this.id,this.data.meta + (this.data.isActive?4 * (parseInt(this.data.progress / 1 * count * 10) % count) + 4:0));
    },

    energyReceive:MachineRegistry.energyReceive,
    getGuiScreen:function(){return GuiCentrifuge;}
});
TileRenderer.setRotationPlaceFunction(BlockID.centrifuge);
StorageInterface.createInterface(BlockID.centrifuge,{
	slots:{
		"slotInput":{input:true},
        "slotOutput1":{output:true},
        "slotOutput2":{output:true},
        "slotOutput3":{output:true},
        "slotOutput4":{output:true}
	},
	isValidInput:function(item){
        return RecipeRegistry.getRecipeResult("Centrifuge",[item.id,item.data])?true:false;
	}
});




// file: machine/electric/compressor.js

// [压缩机]Compressor
IDRegistry.genBlockID("compressor");
Block.createBlock("compressor",[
    {name:"Compressor",texture:[["machine_bottom",1],["compressor_top",0],["machine_side",1],["compressor",0],["machine_side",1],["machine_side",1]],inCreative:true}
],"machine");
TileRenderer.setStandartModel(BlockID.compressor,[["machine_bottom",1],["compressor_top",0],["machine_side",1],["compressor",0],["machine_side",1],["machine_side",1]]);
TileRenderer.registerRotationModel(BlockID.compressor,0,[["machine_bottom",1],["compressor_top",0],["machine_side",1],["compressor",0],["machine_side",1],["machine_side",1]]);
for(var i = 1;i < 4;i++){TileRenderer.registerRotationModel(BlockID.compressor,i * 4,[["machine_bottom",1],["compressor_top",1],["machine_side",1],["compressor",i],["machine_side",1],["machine_side",1]]);}

MachineRegistry.setDrop("compressor",BlockID.machineCasing,1);
Callback.addCallback("PreLoaded",function(){
	Recipes.addShaped({id:BlockID.compressor,count:1,data:0},[
        "a a",
        "bdb",
        "aca"
    ],["a",ItemID.plateIron,0,"b",ItemID.electricPiston,0,"c",ItemID.circuit,0,"d",BlockID.machineCasing,1]);
});

var GuiCompressor = new UI.StandartWindow({
    standart:{
        header:{text:{text:Translation.translate("Compressor")}},
        inventory:{standart:true},
        background:{standart:true}
    },
    
    drawing:[
        {type:"bitmap",x:900,y:325,bitmap:"logo",scale:GUI_SCALE},
        {type:"bitmap",x:350,y:50,bitmap:"energy_background",scale:GUI_SCALE},
        {type:"bitmap",x:600,y:175 + GUI_SCALE * 2,bitmap:"arrow_background",scale:GUI_SCALE},
		{type:"bitmap",x:700 - GUI_SCALE * 4,y:75 - GUI_SCALE * 4,bitmap:"infoSmall",scale:GUI_SCALE}
    ],

    elements:{
        "slotInput":{type:"slot",x:350 + GUI_SCALE * 43,y:175,bitmap:"slot_empty",scale:GUI_SCALE},
        "scaleArrow":{type:"scale",x:600,y:175 + GUI_SCALE * 2,direction:0,value:0.5,bitmap:"arrow_scale",scale:GUI_SCALE},
        "slotOutput":{type:"slot",x:720,y:175,bitmap:"slot_empty",scale:GUI_SCALE,isValid:function(){return false;}},
        "textEnergy":{type:"text",font:GUI_TEXT,x:700,y:75,width:300,height:TEXT_SIZE,text:Translation.translate("Energy: ") + "0/0Eu"},
        "scaleEnergy":{type:"scale",x:350 + GUI_SCALE * 6,y:50 + GUI_SCALE * 6,direction:1,value:0.5,bitmap:"energy_scale",scale:GUI_SCALE},

        "slotUpgrade1":{type:"slot",x:370,y:325,bitmap:"slot_circuit",isValid:UpgradeRegistry.isValidUpgrade},
		"slotUpgrade2":{type:"slot",x:430,y:325,bitmap:"slot_circuit",isValid:UpgradeRegistry.isValidUpgrade},
		"slotUpgrade3":{type:"slot",x:490,y:325,bitmap:"slot_circuit",isValid:UpgradeRegistry.isValidUpgrade},
        "slotUpgrade4":{type:"slot",x:550,y:325,bitmap:"slot_circuit",isValid:UpgradeRegistry.isValidUpgrade}
    }
});

MachineRegistry.registerEUMachine(BlockID.compressor,{
    defaultValues:{
        meta:0,
        tier:2,
        progress:0,
        work_time:320,
        isActive:false,
        sound_volume:16,
        energy_consumption:4
    },

    upgrades:["energyStorage","muffler","overclocker","transformer"],
    
	initValues:function(){
        this.data.tier = this.defaultValues.tier;
        this.data.work_time = this.defaultValues.work_time;
        this.data.sound_volume = this.defaultValues.sound_volume;
        this.data.energy_storage = this.defaultValues.energy_storage;
		this.data.energy_consumption = this.defaultValues.energy_consumption;
	},

	tick:function(){
        this.renderer();
		UpgradeRegistry.executeUpgrades(this);
        StorageInterface.checkHoppers(this);

        var input = this.container.getSlot("slotInput");
        var recipe = RecipeRegistry.getRecipeResult("Compressor",[input.id,input.data]);
        
        if(recipe){
            if(this.data.energy >= this.data.energy_consumption){
                this.data.energy -= this.data.energy_consumption;
                this.data.progress += 1 / this.data.work_time;
                this.activate("machine/compressor.ogg");
                if(this.data.progress.toFixed(3) >= 1){
                    this.setOutputSlot("slotOutput",recipe.id,recipe.count,recipe.data),input.count--;
                    this.container.validateAll();
                    this.data.progress = 0;
                }
            } else {
                this.deactive();
            }
        } else {
            this.data.progress = 0;
            this.deactive();
        }
        
        this.container.setScale("scaleEnergy",parseInt(this.data.energy / this.getEnergyStorage() * 47) / 47);
        this.container.setScale("scaleArrow",parseInt(this.data.progress / 1 * 22) / 22);
        this.container.setText("textEnergy",Translation.translate("Energy: ") + this.data.energy + "/" + this.getEnergyStorage() + "Eu");
    },

    renderer:function(){
        var count = 4;
        TileRenderer.mapAtCoords(this.x,this.y,this.z,this.id,this.data.meta + (this.data.isActive?4 * (parseInt(this.data.progress / 1 * count * 10) % count) + 4:0));
    },

    getGuiScreen:function(){
        return GuiCompressor;
    },

    energyReceive:MachineRegistry.energyReceive
});
TileRenderer.setRotationPlaceFunction(BlockID.compressor);
StorageInterface.createInterface(BlockID.compressor,{
	slots:{
		"slotInput":{input:true},
        "slotOutput":{output:true}
	},
	isValidInput:function(item){
		return RecipeRegistry.getRecipeResult("Compressor",[item.id,item.data])?true:false;
	}
});




// file: machine/electric/crusher.js

// [破碎机]Crusher
IDRegistry.genBlockID("crusher");
Block.createBlock("crusher",[
    {name:"Crusher",texture:[["machine_bottom",1],["crusher_top",0],["machine_side",1],["crusher",0],["machine_side",1],["machine_side",1]],inCreative:true}
],"machine");
TileRenderer.setStandartModel(BlockID.crusher,[["machine_bottom",1],["crusher_top",0],["machine_side",1],["crusher",0],["machine_side",1],["machine_side",1]]);
TileRenderer.registerRotationModel(BlockID.crusher,0,[["machine_bottom",1],["crusher_top",0],["machine_side",1],["crusher",0],["machine_side",1],["machine_side",1]]);
TileRenderer.registerRotationModel(BlockID.crusher,4,[["machine_bottom",1],["crusher_top",1],["machine_side",1],["crusher",0],["machine_side",1],["machine_side",1]]);
TileRenderer.registerRotationModel(BlockID.crusher,8,[["machine_bottom",1],["crusher_top",1],["machine_side",1],["crusher",1],["machine_side",1],["machine_side",1]]);
TileRenderer.registerRotationModel(BlockID.crusher,12,[["machine_bottom",1],["crusher_top",1],["machine_side",1],["crusher",2],["machine_side",1],["machine_side",1]]);
TileRenderer.registerRotationModel(BlockID.crusher,16,[["machine_bottom",1],["crusher_top",1],["machine_side",1],["crusher",3],["machine_side",1],["machine_side",1]]);

MachineRegistry.setDrop("crusher",BlockID.machineCasing,1);
Callback.addCallback("PreLoaded",function(){
	Recipes.addShaped({id:BlockID.crusher,count:1,data:0},[
        "aba",
        "aca",
        "ded"
    ],["a",ItemID.stickIron,0,"b",ItemID.electricMotor,0,"c",ItemID.circuit,0,"d",ItemID.plateIron,0,"e",BlockID.machineCasing,1]);
});

var GuiCrusher = new UI.StandartWindow({
    standart:{
        header:{text:{text:Translation.translate("Crusher")}},
        inventory:{standart:true},
        background:{standart:true}
    },

    drawing:[
        {type:"bitmap",x:900,y:325,bitmap:"logo",scale:GUI_SCALE},
        {type:"bitmap",x:350,y:50,bitmap:"energy_background",scale:GUI_SCALE},
        {type:"bitmap",x:600,y:175 + GUI_SCALE * 2,bitmap:"arrow_background",scale:GUI_SCALE},
		{type:"bitmap",x:700 - GUI_SCALE * 4,y:75 - GUI_SCALE * 4,bitmap:"infoSmall",scale:GUI_SCALE}
    ],
    
    elements:{
        "slotInput":{type:"slot",x:350 + GUI_SCALE * 43,y:175,bitmap:"slot_empty",scale:GUI_SCALE},
        "scaleArrow":{type:"scale",x:600,y:175 + GUI_SCALE * 2,direction:0,value:0.5,bitmap:"arrow_scale",scale:GUI_SCALE},
        "slotOutput":{type:"slot",x:720,y:175,bitmap:"slot_empty",scale:GUI_SCALE,isValid:function(){return false;}},
        "textEnergy":{type:"text",font:GUI_TEXT,x:700,y:75,width:300,height:TEXT_SIZE,text:Translation.translate("Energy: ") + "0/0Eu"},
        "scaleEnergy":{type:"scale",x:350 + GUI_SCALE * 6,y:50 + GUI_SCALE * 6,direction:1,value:0.5,bitmap:"energy_scale",scale:GUI_SCALE},

        "slotUpgrade1":{type:"slot",x:370,y:325,bitmap:"slot_circuit",isValid:UpgradeRegistry.isValidUpgrade},
		"slotUpgrade2":{type:"slot",x:430,y:325,bitmap:"slot_circuit",isValid:UpgradeRegistry.isValidUpgrade},
		"slotUpgrade3":{type:"slot",x:490,y:325,bitmap:"slot_circuit",isValid:UpgradeRegistry.isValidUpgrade},
        "slotUpgrade4":{type:"slot",x:550,y:325,bitmap:"slot_circuit",isValid:UpgradeRegistry.isValidUpgrade}
    }
});

MachineRegistry.registerEUMachine(BlockID.crusher,{
    defaultValues:{
        meta:0,
        tier:2,
        progress:0,
        work_time:320,
        isActive:false,
        energy_consumption:4
    },

    upgrades:["energyStorage","overclocker","transformer"],

	initValues:function(){
        this.data.tier = this.defaultValues.tier;
        this.data.work_time = this.defaultValues.work_time;
		this.data.energy_storage = this.defaultValues.energy_storage;
		this.data.energy_consumption = this.defaultValues.energy_consumption;
	},
	
	tick: function(){
        this.renderer();
		UpgradeRegistry.executeUpgrades(this);
        StorageInterface.checkHoppers(this);

        var input = this.container.getSlot("slotInput");
        var recipe = RecipeRegistry.getRecipeResult("Crusher",[input.id,input.data]);
        if(recipe){if(this.data.energy >= this.data.energy_consumption){
            this.activate();    
            this.data.energy -= this.data.energy_consumption;
            this.data.progress += 1 / this.data.work_time;
            
            if(this.data.progress.toFixed(3) >= 1){
                this.setOutputSlot("slotOutput",recipe.id,recipe.count,recipe.data),input.count--;
                this.container.validateAll();
                this.data.progress = 0;
            }
        } else {this.deactive();}} else {this.deactive(),this.data.progress = 0;}

        this.container.setScale("scaleEnergy",parseInt(this.data.energy / this.getEnergyStorage() * 47) / 47);
        this.container.setScale("scaleArrow",parseInt(this.data.progress / 1 * 22) / 22);
        this.container.setText("textEnergy",Translation.translate("Energy: ") + this.data.energy + "/" + this.getEnergyStorage() + "Eu");
    },

    renderer:function(){
        TileRenderer.mapAtCoords(this.x,this.y,this.z,this.id,this.data.meta + (this.data.isActive?4 * (parseInt(this.data.progress / 1 * 4 * 10) % 4) + 4:0));
    },
    
    getGuiScreen:function(){
        return GuiCrusher;
    },

    energyReceive:MachineRegistry.energyReceive
});

TileRenderer.setRotationPlaceFunction(BlockID.crusher);
StorageInterface.createInterface(BlockID.crusher,{
	slots:{
		"slotInput":{input:true},
        "slotOutput":{output:true}
	},
	isValidInput:function(item){
		return RecipeRegistry.getRecipeResult("Crusher",[item.id,item.data])?true:false;
	}
});




// file: machine/electric/cutting.js

// [切割机]Cutting
IDRegistry.genBlockID("cutting");
Block.createBlock("cutting",[
    {name:"Cutting",texture:[["machine_bottom",1],["cutting_top",0],["machine_side",1],["cutting",0],["machine_side",1],["machine_side",1]],inCreative:true}
],"machine");
TileRenderer.setStandartModel(BlockID.cutting,[["machine_bottom",1],["cutting_top",0],["machine_side",1],["cutting",0],["machine_side",1],["machine_side",1]]);
TileRenderer.registerRotationModel(BlockID.cutting,0,[["machine_bottom",1],["cutting_top",0],["machine_side",1],["cutting",0],["machine_side",1],["machine_side",1]]);
for(let i = 1;i < 6;i++){TileRenderer.registerRotationModel(BlockID.cutting,i * 4,[["machine_bottom",1],["cutting_top",1],["machine_side",1],["cutting",i],["machine_side",1],["machine_side",1]]);}

MachineRegistry.setDrop("cutting",BlockID.machineCasing,1);
Callback.addCallback("PreLoaded",function(){
	Recipes.addShaped({id:BlockID.cutting,count:1,data:0},["fef","cac","bdb"],["a",BlockID.machineCasing,1,"b",ItemID.electricMotor,0,"c",ItemID.plateIron,0,"d",ItemID.stickIron,0,"e",ItemID.circuit,0,"f",ItemID.partIron,0]);
});

var GuiCutting = new UI.StandartWindow({
    standart:{
        header:{text:{text:Translation.translate("Cutting")}},
        inventory:{standart:true},
        background:{standart:true}
    },
    
    drawing:[
        {type:"bitmap",x:900,y:325,bitmap:"logo",scale:GUI_SCALE},
        {type:"bitmap",x:350,y:50,bitmap:"energy_background",scale:GUI_SCALE},
        {type:"bitmap",x:600,y:175 + GUI_SCALE * 2,bitmap:"arrow_background",scale:GUI_SCALE},
		{type:"bitmap",x:700 - GUI_SCALE * 4,y:75 - GUI_SCALE * 4,bitmap:"infoSmall",scale:GUI_SCALE}
    ],

    elements:{
        "slotInput":{type:"slot",x:350 + GUI_SCALE * 43,y:175,bitmap:"slot_empty",scale:GUI_SCALE},
        "scaleArrow":{type:"scale",x:600,y:175 + GUI_SCALE * 2,direction:0,value:0.5,bitmap:"arrow_scale",scale:GUI_SCALE},
        "slotOutput":{type:"slot",x:720,y:175,bitmap:"slot_empty",scale:GUI_SCALE,isValid:function(){return false;}},
        "textEnergy":{type:"text",font:GUI_TEXT,x:700,y:75,width:300,height:TEXT_SIZE,text:Translation.translate("Energy: ") + "0/0Eu"},
        "scaleEnergy":{type:"scale",x:350 + GUI_SCALE * 6,y:50 + GUI_SCALE * 6,direction:1,value:0.5,bitmap:"energy_scale",scale:GUI_SCALE},

        "slotUpgrade1":{type:"slot",x:370,y:325,bitmap:"slot_circuit",isValid:UpgradeRegistry.isValidUpgrade},
		"slotUpgrade2":{type:"slot",x:430,y:325,bitmap:"slot_circuit",isValid:UpgradeRegistry.isValidUpgrade},
		"slotUpgrade3":{type:"slot",x:490,y:325,bitmap:"slot_circuit",isValid:UpgradeRegistry.isValidUpgrade},
        "slotUpgrade4":{type:"slot",x:550,y:325,bitmap:"slot_circuit",isValid:UpgradeRegistry.isValidUpgrade}
    }
});

MachineRegistry.registerEUMachine(BlockID.cutting,{
    defaultValues:{
        meta:0,
        tier:2,
        progress:0,
        work_time:320,
        isActive:false,
        sound_volume:16,
        energy_consumption:4
    },

    upgrades:["energyStorage","muffler","overclocker","transformer"],
    
	initValues:function(){
        this.data.tier = this.defaultValues.tier;
        this.data.work_time = this.defaultValues.work_time;
        this.data.sound_volume = this.defaultValues.sound_volume;
		this.data.energy_storage = this.defaultValues.energy_storage;
		this.data.energy_consumption = this.defaultValues.energy_consumption;
	},
	
	tick:function(){
        this.renderer();
		UpgradeRegistry.executeUpgrades(this);
        StorageInterface.checkHoppers(this);

        var input = this.container.getSlot("slotInput");
        var recipe = RecipeRegistry.getRecipeResult("Cutting",[input.id,input.data]);
        if(recipe){if(this.data.energy >= this.data.energy_consumption){
            this.activate("machine/cutting.ogg");
            this.data.energy -= this.data.energy_consumption;
            this.data.progress += 1 / this.data.work_time;
            
            if(this.data.progress.toFixed(3) >= 1){
                this.setOutputSlot("slotOutput",recipe.id,recipe.count,recipe.data),input.count--;
                this.container.validateAll();
                this.data.progress = 0;
            }
        } else {this.deactive();}} else {this.deactive(),this.data.progress = 0;}

        this.container.setScale("scaleEnergy",parseInt(this.data.energy / this.getEnergyStorage() * 47) / 47);
        this.container.setScale("scaleArrow",parseInt(this.data.progress / 1 * 22) / 22);
        this.container.setText("textEnergy",Translation.translate("Energy: ") + this.data.energy + "/" + this.getEnergyStorage() + "Eu");
    },

    renderer:function(){
        TileRenderer.mapAtCoords(this.x,this.y,this.z,this.id,this.data.meta + (this.data.isActive?4 * (parseInt(this.data.progress / 1 * 6 * 10) % 6) + 4:0));
    },
    
    getGuiScreen:function(){
        return GuiCutting;
    },

    energyReceive:MachineRegistry.energyReceive
});
TileRenderer.setRotationPlaceFunction(BlockID.cutting);
StorageInterface.createInterface(BlockID.cutting,{
	slots:{
		"slotInput":{input:true},
        "slotOutput":{output:true}
	},
	isValidInput:function(item){
		return RecipeRegistry.getRecipeResult("Cutting",[item.id,item.data])?true:false;
	}
});




// file: machine/electric/distillery.js

// [蒸馏室]Distillery
IDRegistry.genBlockID("distillery");
Block.createBlock("distillery",[
    {name:"Distillery",texture:[["machine_bottom",1],["machine_top",1],["machine_side",1],["distillery",0],["machine_side",1],["machine_side",1]],inCreative:true}
],"machine");
TileRenderer.setStandartModel(BlockID.distillery,[["machine_bottom",1],["machine_top",1],["machine_side",1],["distillery",0],["machine_side",1],["machine_side",1]]);
TileRenderer.registerRotationModel(BlockID.distillery,0,[["machine_bottom",1],["machine_top",1],["machine_side",1],["distillery",0],["machine_side",1],["machine_side",1]]);
TileRenderer.registerRotationModel(BlockID.distillery,4,[["machine_bottom",1],["machine_top",1],["machine_side",1],["distillery",1],["machine_side",1],["machine_side",1]]);

MachineRegistry.setDrop("distillery",BlockID.machineCasing,1);
Callback.addCallback("PreLoaded",function(){
	Recipes.addShaped({id:BlockID.distillery,count:1,data:0},[
        "ebe",
        "dad",
        "ece"
    ],["a",BlockID.machineCasing,1,"b",BlockID.glassTank,0,"c",BlockID.itemPipeTransport,0,"d",369,0,"e",ItemID.plateIron,0]);
});

var GuiDistillery = new UI.StandartWindow({
    standart:{
        header:{text:{text:Translation.translate("Distillery")}},
        inventory:{standart:true},
        background:{standart:true}
    },
    
    drawing:[
        {type:"bitmap",x:900,y:325,bitmap:"logo",scale:GUI_SCALE},
        {type:"bitmap",x:350,y:50,bitmap:"energy_background",scale:GUI_SCALE},
        {type:"bitmap",x:600,y:200 + GUI_SCALE * 2,bitmap:"arrow_background",scale:GUI_SCALE},
		{type:"bitmap",x:700 - GUI_SCALE * 4,y:75 - GUI_SCALE * 4,bitmap:"infoSmall",scale:GUI_SCALE}
    ],

    elements:{
        "slotInput":{type:"slot",x:350 + GUI_SCALE * 43,y:200,bitmap:"slot_empty",scale:GUI_SCALE},
        "scaleArrow":{type:"scale",x:600,y:200 + GUI_SCALE * 2,direction:0,value:0.5,bitmap:"arrow_scale",scale:GUI_SCALE},
        "slotOutput0":{type:"slot",x:720,y:175,bitmap:"slot_empty",scale:GUI_SCALE,isValid:function(){return false;}},
        "slotOutput1":{type:"slot",x:780,y:175,bitmap:"slot_empty",scale:GUI_SCALE,isValid:function(){return false;}},
        "slotOutput2":{type:"slot",x:720,y:235,bitmap:"slot_empty",scale:GUI_SCALE,isValid:function(){return false;}},
        "slotOutput3":{type:"slot",x:780,y:235,bitmap:"slot_empty",scale:GUI_SCALE,isValid:function(){return false;}},
        "textEnergy":{type:"text",font:GUI_TEXT,x:700,y:75,width:300,height:TEXT_SIZE,text:Translation.translate("Energy: ") + "0/0Eu"},
        "scaleEnergy":{type:"scale",x:350 + GUI_SCALE * 6,y:50 + GUI_SCALE * 6,direction:1,value:0.5,bitmap:"energy_scale",scale:GUI_SCALE},

        "slotUpgrade1":{type:"slot",x:370,y:325,bitmap:"slot_circuit",isValid:UpgradeRegistry.isValidUpgrade},
		"slotUpgrade2":{type:"slot",x:430,y:325,bitmap:"slot_circuit",isValid:UpgradeRegistry.isValidUpgrade},
		"slotUpgrade3":{type:"slot",x:490,y:325,bitmap:"slot_circuit",isValid:UpgradeRegistry.isValidUpgrade},
        "slotUpgrade4":{type:"slot",x:550,y:325,bitmap:"slot_circuit",isValid:UpgradeRegistry.isValidUpgrade}
    }
});

MachineRegistry.registerEUMachine(BlockID.distillery,{
    defaultValues:{
        meta:0,
        tier:2,
        progress:0,
        work_time:320,
        isActive:false,
        energy_consumption:4
    },

    upgrades:["energyStorage","overclocker","transformer"],

	initValues:function(){
        this.data.tier = this.defaultValues.tier;
        this.data.work_time = this.defaultValues.work_time;
		this.data.energy_storage = this.defaultValues.energy_storage;
		this.data.energy_consumption = this.defaultValues.energy_consumption;
	},
    
	tick:function(){
        this.renderer();
		UpgradeRegistry.executeUpgrades(this);
        StorageInterface.checkHoppers(this);

        var input = this.container.getSlot("slotInput");
        var recipe = RecipeRegistry.getRecipeResult("Distillery",[input.id,input.data]);
        if(recipe && input.count >= recipe.count){if(this.data.energy >= this.data.energy_consumption){
            this.activate();
            this.data.energy -= this.data.energy_consumption;
            this.data.progress += 1 / this.data.work_time;
            
            if(this.data.progress.toFixed(3) >= 1){
                for(let i = 0;i < 4;i++){
                    if(recipe.output[i]){
                        this.setOutputSlot("slotOutput" + i,recipe.output[i].id,recipe.output[i].count,recipe.output[i].data);
                    }
                } input.count -= recipe.count;
                this.container.validateAll();
                this.data.progress = 0;
            }
        } else {this.deactive();}} else {this.deactive(),this.data.progress = 0;}

        this.container.setScale("scaleEnergy",parseInt(this.data.energy / this.getEnergyStorage() * 47) / 47);
        this.container.setScale("scaleArrow",parseInt(this.data.progress / 1 * 22) / 22);
        this.container.setText("textEnergy",Translation.translate("Energy: ") + this.data.energy + "/" + this.getEnergyStorage() + "Eu");
    },

    energyReceive:MachineRegistry.energyReceive,
    getGuiScreen:function(){return GuiDistillery;}
});
TileRenderer.setRotationPlaceFunction(BlockID.distillery);
StorageInterface.createInterface(BlockID.distillery,{
	slots:{
		"slotInput":{input:true},
        "slotOutput1":{output:true},
        "slotOutput2":{output:true},
        "slotOutput3":{output:true},
        "slotOutput4":{output:true}
	},
	isValidInput:function(item){return RecipeRegistry.getRecipeResult("Distillery",[item.id,item.data])?true:false;}
});




// file: machine/electric/electric_furnace.js

// [电炉]Electric Furnace
IDRegistry.genBlockID("electricFurnace");
Block.createBlock("electricFurnace",[
    {name:"Electric Furnace",texture:[["machine_bottom",1],["machine_top",1],["machine_side",1],["electric_furnace",0],["machine_side",1],["machine_side",1]],inCreative:true}
],"machine");
TileRenderer.setStandartModel(BlockID.electricFurnace,[["machine_bottom",1],["machine_top",1],["machine_side",1],["electric_furnace",0],["machine_side",1],["machine_side",1]]);
TileRenderer.registerRotationModel(BlockID.electricFurnace,0,[["machine_bottom",1],["machine_top",1],["machine_side",1],["electric_furnace",0],["machine_side",1],["machine_side",1]]);
TileRenderer.registerRotationModel(BlockID.electricFurnace,4,[["machine_bottom",1],["machine_top",1],["machine_side",1],["electric_furnace",1],["machine_side",1],["machine_side",1]]);

MachineRegistry.setDrop("electricFurnace",BlockID.machineCasing,1);
Callback.addCallback("PreLoaded",function(){
	Recipes.addShaped({id:BlockID.electricFurnace,count:1,data:0},["bcb","cac","cdc"],["a",ItemID.circuit,0,"b",ItemID.stickIron,0,"c",ItemID.plateIron,0,"d",61,0]);
});

var GuiElectricFurnace = new UI.StandartWindow({
    standart:{
        header:{text:{text:Translation.translate("Electric Furnace")}},
        inventory:{standart:true},
        background:{standart:true}
    },
    
    drawing:[
        {type:"bitmap",x:900,y:325,bitmap:"logo",scale:GUI_SCALE},
        {type:"bitmap",x:350,y:50,bitmap:"energy_background",scale:GUI_SCALE},
        {type:"bitmap",x:600,y:175 + GUI_SCALE,bitmap:"arrow_background",scale:GUI_SCALE},
        {type:"bitmap",x:700 - GUI_SCALE * 4,y:75 - GUI_SCALE * 4,bitmap:"infoSmall",scale:GUI_SCALE}
    ],

    elements:{
        "slotInput":{type:"slot",x:350 + GUI_SCALE * 43,y:175,bitmap:"slot_empty",scale:GUI_SCALE},
        "scaleArrow":{type:"scale",x:600,y:175 + GUI_SCALE,direction:0,value:0.5,bitmap:"arrow_scale",scale:GUI_SCALE},
        "slotOutput":{type:"slot",x:720,y:175,bitmap:"slot_empty",scale:GUI_SCALE,isValid:function(){return false;}},
        "textEnergy":{type:"text",font:GUI_TEXT,x:700,y:75,width:300,height:TEXT_SIZE,text:Translation.translate("Energy: ") + "0/0Eu"},
        "scaleEnergy":{type:"scale",x:350 + GUI_SCALE * 6,y:50 + GUI_SCALE * 6,direction:1,value:0.5,bitmap:"energy_scale",scale:GUI_SCALE},

        "slotUpgrade1":{type:"slot",x:370,y:325,bitmap:"slot_circuit",isValid:UpgradeRegistry.isValidUpgrade},
		"slotUpgrade2":{type:"slot",x:430,y:325,bitmap:"slot_circuit",isValid:UpgradeRegistry.isValidUpgrade},
		"slotUpgrade3":{type:"slot",x:490,y:325,bitmap:"slot_circuit",isValid:UpgradeRegistry.isValidUpgrade},
        "slotUpgrade4":{type:"slot",x:550,y:325,bitmap:"slot_circuit",isValid:UpgradeRegistry.isValidUpgrade}
    }
});

MachineRegistry.registerEUMachine(BlockID.electricFurnace,{
    defaultValues: {
        meta:0,
        progress:0,
        work_time:130,
        isActive:false,
        sound_volume:16,
        energy_consumption:3,
    },
    
    upgrades:["energyStorage","muffler","overclocker","transformer"],
    
	initValues:function(){
        this.data.tier = this.defaultValues.tier;
        this.data.work_time = this.defaultValues.work_time;
        this.data.sound_volume = this.defaultValues.sound_volume;
		this.data.energy_storage = this.defaultValues.energy_storage;
		this.data.energy_consumption = this.defaultValues.energy_consumption;
	},
	
	tick:function(){
		UpgradeRegistry.executeUpgrades(this);
        StorageInterface.checkHoppers(this);

        var input = this.container.getSlot("slotInput");
        var recipe = Recipes.getFurnaceRecipeResult(input.id,"iron");
        if(recipe){if(this.data.energy >= this.data.energy_consumption){
            this.activate("machine/electro_furnace.ogg");
            this.data.energy -= this.data.energy_consumption;
            this.data.progress += 1 / this.data.work_time;
            
            if(this.data.progress.toFixed(3) >= 1){
                this.setOutputSlot("slotOutput",recipe.id,1,recipe.data),input.count--;
                this.container.validateAll();
                this.data.progress = 0;
            }
        } else {this.deactive();}} else {this.deactive(),this.data.progress = 0;}

        this.container.setScale("scaleEnergy",parseInt(this.data.energy / this.getEnergyStorage() * 47) / 47);
        this.container.setScale("scaleArrow",parseInt(this.data.progress / 1 * 22) / 22);
        this.container.setText("textEnergy",Translation.translate("Energy: ") + this.data.energy + "/" + this.getEnergyStorage() + "Eu");
    },

    getGuiScreen:function(){
        return GuiElectricFurnace;
    },

    energyReceive:MachineRegistry.energyReceive
});
TileRenderer.setRotationPlaceFunction(BlockID.electricFurnace);
StorageInterface.createInterface(BlockID.electricFurnace,{
	slots:{
		"slotInput":{input:true},
        "slotOutput":{output:true}
	},
	isValidInput:function(item){return Recipes.getFurnaceRecipeResult(item.id,"iron")?true:false;}
});




// file: machine/electric/electrolyzer.js

// [电解机]Electrolyzer
IDRegistry.genBlockID("electrolyzer");
Block.createBlock("electrolyzer",[
    {name:"Electrolyzer",texture:[["machine_bottom",2],["machine_top",2],["machine_side",2],["electrolyzer",0],["machine_side",2],["machine_side",2]],inCreative:true}
],"machine");
TileRenderer.setStandartModel(BlockID.electrolyzer,[["machine_bottom",2],["machine_top",2],["machine_side",2],["electrolyzer",0],["machine_side",2],["machine_side",2]]);
TileRenderer.registerRotationModel(BlockID.electrolyzer,0,[["machine_bottom",2],["machine_top",2],["machine_side",2],["electrolyzer",0],["machine_side",2],["machine_side",2]]);
for(let i = 1;i < 8;i++) TileRenderer.registerRotationModel(BlockID.electrolyzer,i * 4,[["machine_bottom",2],["machine_top",2],["machine_side",2],["electrolyzer",i],["machine_side",2],["machine_side",2]]);

MachineRegistry.setDrop("electrolyzer",BlockID.machineCasing,2);
Callback.addCallback("PreLoaded",function(){
	Recipes.addShaped({id:BlockID.electrolyzer,count:1,data:0},[
        "aba",
        "aca",
        "ded"
    ],["a",ItemID.wireGold,0,"b",BlockID.glassTank,0,"c",BlockID.machineCasing,2,"d",ItemID.circuit,0,"e",BlockID.coilTin,0]);
});

var GuiElectrolyzer = new UI.StandartWindow({
    standart:{
        header:{text:{text:Translation.translate("Electrolyzer")}},
        inventory:{standart:true},
        background:{standart:true}
    },

    drawing:[
        {type:"bitmap",x:900,y:325,bitmap:"logo",scale:GUI_SCALE},
        {type:"bitmap",x:350,y:50,bitmap:"energy_background",scale:GUI_SCALE},
        {type:"bitmap",x:600,y:200 + GUI_SCALE,bitmap:"arrow_background",scale:GUI_SCALE},
		{type:"bitmap",x:700 - GUI_SCALE * 4,y:75 - GUI_SCALE * 4,bitmap:"infoSmall",scale:GUI_SCALE}
    ],
    
    elements:{
        "slotInput":{type:"slot",x:350 + GUI_SCALE * 43,y:200,bitmap:"slot_empty",scale:GUI_SCALE},
        "scaleArrow":{type:"scale",x:600,y:200 + GUI_SCALE,direction:0,value:0.5,bitmap:"arrow_scale",scale:GUI_SCALE},
        "slotOutput0":{type:"slot",x:720,y:150,bitmap:"slot_empty",scale:GUI_SCALE,isValid:function(){return false;}},
        "slotOutput1":{type:"slot",x:780,y:150,bitmap:"slot_empty",scale:GUI_SCALE,isValid:function(){return false;}},
        "slotOutput2":{type:"slot",x:720,y:210,bitmap:"slot_empty",scale:GUI_SCALE,isValid:function(){return false;}},
        "slotOutput3":{type:"slot",x:780,y:210,bitmap:"slot_empty",scale:GUI_SCALE,isValid:function(){return false;}},
        "textEnergy":{type:"text",font:GUI_TEXT,x:700,y:75,width:300,height:TEXT_SIZE,text:Translation.translate("Energy: ") + "0/0Eu"},
        "scaleEnergy":{type:"scale",x:350 + GUI_SCALE * 6,y:50 + GUI_SCALE * 6,direction:1,value:0.5,bitmap:"energy_scale",scale:GUI_SCALE},

        "slotUpgrade1":{type:"slot",x:370,y:325,bitmap:"slot_circuit",isValid:UpgradeRegistry.isValidUpgrade},
		"slotUpgrade2":{type:"slot",x:430,y:325,bitmap:"slot_circuit",isValid:UpgradeRegistry.isValidUpgrade},
		"slotUpgrade3":{type:"slot",x:490,y:325,bitmap:"slot_circuit",isValid:UpgradeRegistry.isValidUpgrade},
        "slotUpgrade4":{type:"slot",x:550,y:325,bitmap:"slot_circuit",isValid:UpgradeRegistry.isValidUpgrade}
    }
});

MachineRegistry.registerEUMachine(BlockID.electrolyzer,{
    defaultValues:{
        meta:0,
        tier:3,
        progress:0,
        work_time:320,
        isActive:false,
        energy_consumption:4
    },

    upgrades:["energyStorage","overclocker","transformer"],

	initValues:function(){
        this.data.tier = this.defaultValues.tier;
        this.data.work_time = this.defaultValues.work_time;
		this.data.energy_storage = this.defaultValues.energy_storage;
		this.data.energy_consumption = this.defaultValues.energy_consumption;
	},
	
	tick:function(){
        this.renderer();
        StorageInterface.checkHoppers(this);
		UpgradeRegistry.executeUpgrades(this);

        var input = this.container.getSlot("slotInput");
        var recipe = RecipeRegistry.getRecipeResult("Electrolyzer",[input.id,input.data]);
        if(recipe && input.count >= recipe.count){
            if(this.data.energy >= this.data.energy_consumption){
                this.activate();
                this.data.energy -= this.data.energy_consumption;
                this.data.progress += 1 / this.data.work_time;

                if(this.data.progress.toFixed(3) >= 1){
                    for(let i = 0;i < 4;i++){
                        if(recipe.output[i]) this.setOutputSlot("slotOutput" + i,recipe.output[i].id,recipe.output[i].count,recipe.output[i].data);
                    } input.count -= recipe.count;
                    this.container.validateAll();
                    this.data.progress = 0;
                }
            } else {
                this.deactive();
            }
        } else {
            this.data.progress = 0,this.deactive();
        }
        
        this.container.setScale("scaleEnergy",parseInt(this.data.energy / this.getEnergyStorage() * 47) / 47);
        this.container.setScale("scaleArrow",parseInt(this.data.progress / 1 * 22) / 22);
        this.container.setText("textEnergy",Translation.translate("Energy: ") + this.data.energy + "/" + this.getEnergyStorage() + "Eu");
    },

    renderer:function(){
        TileRenderer.mapAtCoords(this.x,this.y,this.z,this.id,this.data.meta + (this.data.isActive?4 * (parseInt(this.data.progress / 1 * 8 * 10) % 8) + 4:0));
    },

    getGuiScreen:function(){
        return GuiElectrolyzer;
    },

    energyReceive:MachineRegistry.energyReceive
});
TileRenderer.setRotationPlaceFunction(BlockID.electrolyzer);
StorageInterface.createInterface(BlockID.electrolyzer,{
	slots:{
		"slotInput":{input:true},
        "slotOutput1":{output:true},
        "slotOutput2":{output:true},
        "slotOutput3":{output:true},
        "slotOutput4":{output:true}
	},
	isValidInput:function(item){
        return RecipeRegistry.getRecipeResult("Electrolyzer",[item.id,item.data])?true:false;
	}
});




// file: machine/electric/farming_station.js

// [种植站]Farming Station
IDRegistry.genBlockID("farmingStation");
Block.createBlock("farmingStation",[
    {name:"Farming Station",texture:[["machine_bottom",1],["farming_station_top",0],["machine_side",1],["farming_station",0],["machine_side",1],["machine_side",1]],inCreative:true}
],"machine");
TileRenderer.setStandartModel(BlockID.farmingStation,[["machine_bottom",1],["farming_station_top",0],["machine_side",1],["farming_station",0],["machine_side",1],["machine_side",1]]);
TileRenderer.registerRotationModel(BlockID.farmingStation,0 ,[["machine_bottom",1],["farming_station_top",0],["machine_side",1],["farming_station",0],["machine_side",1],["machine_side",1]]);
for(let i = 1;i < 9;i++){TileRenderer.registerRotationModel(BlockID.farmingStation,i * 4,[["machine_bottom",1],["farming_station_top",1],["machine_side",1],["farming_station",i],["machine_side",1],["machine_side",1]]);}

MachineRegistry.setDrop("farmingStation",BlockID.machineCasing,1);
Callback.addCallback("PreLoaded",function(){
	Recipes.addShaped({id:BlockID.farmingStation,count:1,data:0},["ada","beb","cfc"],["a",ItemID.partIron,0,"b",ItemID.plateIron,0,"c",ItemID.cellWater,0,"d",292,0,"e",BlockID.machineCasing,1,"f",ItemID.circuit,0]);
});

var GuiFarmingStation = new UI.StandartWindow({
    standart:{
        header:{text:{text:Translation.translate("Farming Station")}},
        inventory:{standart:true},
        background:{standart:true}
    },
    
    drawing:[
        {type:"bitmap",x:900,y:325,bitmap:"logo",scale:GUI_SCALE},
        {type:"bitmap",x:350,y:50,bitmap:"energy_background",scale:GUI_SCALE},
        {type:"bitmap",x:600,y:200 + GUI_SCALE,bitmap:"arrow_background",scale:GUI_SCALE},
		{type:"bitmap",x:700 - GUI_SCALE * 4,y:75 - GUI_SCALE * 4,bitmap:"infoSmall",scale:GUI_SCALE}
    ],

    elements:{
        "slotDirt":{type:"slot",x:350 + GUI_SCALE * 43,y:220,bitmap:"slot_empty",scale:GUI_SCALE},
        "slotInput":{type:"slot",x:350 + GUI_SCALE * 43,y:135,bitmap:"slot_empty",scale:GUI_SCALE},
        "scaleArrow":{type:"scale",x:600,y:200 + GUI_SCALE,direction:0,value:0.5,bitmap:"arrow_scale",scale:GUI_SCALE},
        "slotOutput0":{type:"slot",x:720,y:170,bitmap:"slot_empty",scale:GUI_SCALE,isValid:function(){return false;}},
        "slotOutput1":{type:"slot",x:780,y:170,bitmap:"slot_empty",scale:GUI_SCALE,isValid:function(){return false;}},
        "slotOutput2":{type:"slot",x:720,y:230,bitmap:"slot_empty",scale:GUI_SCALE,isValid:function(){return false;}},
        "slotOutput3":{type:"slot",x:780,y:230,bitmap:"slot_empty",scale:GUI_SCALE,isValid:function(){return false;}},
        "textEnergy":{type:"text",font:GUI_TEXT,x:700,y:75,width:300,height:TEXT_SIZE,text:Translation.translate("Energy: ") + "0/0Eu"},
        "scaleEnergy":{type:"scale",x:350 + GUI_SCALE * 6,y:50 + GUI_SCALE * 6,direction:1,value:0.5,bitmap:"energy_scale",scale:GUI_SCALE},

        "slotUpgrade1":{type:"slot",x:370,y:325,bitmap:"slot_circuit",isValid:UpgradeRegistry.isValidUpgrade},
		"slotUpgrade2":{type:"slot",x:430,y:325,bitmap:"slot_circuit",isValid:UpgradeRegistry.isValidUpgrade},
		"slotUpgrade3":{type:"slot",x:490,y:325,bitmap:"slot_circuit",isValid:UpgradeRegistry.isValidUpgrade},
        "slotUpgrade4":{type:"slot",x:550,y:325,bitmap:"slot_circuit",isValid:UpgradeRegistry.isValidUpgrade}
    }
});

MachineRegistry.registerEUMachine(BlockID.farmingStation,{
    defaultValues:{
        meta:0,
        tier:2,
        progress:0,
        work_time:320,
        isActive:false,
        energy_consumption:4
    },

    upgrades:["energyStorage","overclocker","transformer"],

	initValues:function(){
        this.data.tier = this.defaultValues.tier;
        this.data.work_time = this.defaultValues.work_time;
		this.data.energy_storage = this.defaultValues.energy_storage;
		this.data.energy_consumption = this.defaultValues.energy_consumption;
	},
	
	tick:function(){
        this.renderer();
		UpgradeRegistry.executeUpgrades(this);
        StorageInterface.checkHoppers(this);

        var input = this.container.getSlot("slotInput");
        var recipe = RecipeRegistry.getRecipeResult("FarmingStation",[input.id,input.data]),dirt = this.container.getSlot("slotDirt");
        
        if(recipe && (recipe.dirt.id == -1 || recipe.dirt.id == dirt.id) && (recipe.dirt.data == -1 || recipe.dirt.data == dirt.data)){if(this.data.energy >= this.data.energy_consumption){
            this.activate();
            this.data.energy -= this.data.energy_consumption;
            this.data.progress += 1 / this.data.work_time;
            
            if(this.data.progress.toFixed(3) >= 1){
                if(Math.random() <= 0.25) dirt.count--;
                for(let i = 0;i < 4;i++){
                    var output = recipe.output[i];
                    if(output && Math.random() <= 1.00 / i){
                        this.setOutputSlot("slotOutput" + i,output.id,output.count,output.data);
                    }
                } input.count--;
                this.container.validateAll();
                this.data.progress = 0;
            }
        } else {this.deactive();}} else {this.data.progress = 0,this.deactive();}

        this.container.setScale("scaleEnergy",parseInt(this.data.energy / this.getEnergyStorage() * 47) / 47);
        this.container.setScale("scaleArrow",parseInt(this.data.progress / 1 * 22) / 22);
        this.container.setText("textEnergy",Translation.translate("Energy: ") + this.data.energy + "/" + this.getEnergyStorage() + "Eu");
    },

    renderer:function(){
        TileRenderer.mapAtCoords(this.x,this.y,this.z,this.id,this.data.meta+(this.data.isActive?4*parseInt(this.data.progress/1*9)+4:0));
    },

    energyReceive:MachineRegistry.energyReceive,
    getGuiScreen:function(){return GuiFarmingStation;}
});
TileRenderer.setRotationPlaceFunction(BlockID.farmingStation);
StorageInterface.createInterface(BlockID.farmingStation,{
	slots:{
		"slotInput":{input:true},
        "slotOutput1":{output:true},
        "slotOutput2":{output:true},
        "slotOutput3":{output:true},
        "slotOutput4":{output:true}
	},
	isValidInput:function(item){return RecipeRegistry.getRecipeResult("FarmingStation",[item.id,item.data])?true:false;}
});




// file: machine/electric/macerator.js

// [打粉机]Macerator
IDRegistry.genBlockID("macerator");
Block.createBlock("macerator",[
    {name:"Macerator",texture:[["machine_bottom",1],["machine_top",1],["machine_side",1],["macerator",0],["machine_side",1],["machine_side",1]],inCreative:true}
],"machine");
TileRenderer.setStandartModel(BlockID.macerator,[["machine_bottom",1],["machine_top",1],["machine_side",1],["macerator",0],["machine_side",1],["machine_side",1]]);
TileRenderer.registerRotationModel(BlockID.macerator,0 ,[["machine_bottom",1],["machine_top",1],["machine_side",1],["macerator",0],["machine_side",1],["machine_side",1]]);
TileRenderer.registerRotationModel(BlockID.macerator,4 ,[["machine_bottom",1],["machine_top",2],["machine_side",1],["macerator",0],["machine_side",1],["machine_side",1]]);
TileRenderer.registerRotationModel(BlockID.macerator,8 ,[["machine_bottom",1],["machine_top",2],["machine_side",1],["macerator",1],["machine_side",1],["machine_side",1]]);
TileRenderer.registerRotationModel(BlockID.macerator,12,[["machine_bottom",1],["machine_top",2],["machine_side",1],["macerator",2],["machine_side",1],["machine_side",1]]);
TileRenderer.registerRotationModel(BlockID.macerator,16,[["machine_bottom",1],["machine_top",2],["machine_side",1],["macerator",3],["machine_side",1],["machine_side",1]]);

MachineRegistry.setDrop("macerator",BlockID.machineCasing,2);
Callback.addCallback("PreLoaded",function(){
	Recipes.addShaped({id:BlockID.macerator,count:1,data:0},["aba","cdc","efe"],["a",ItemID.electricMotor,0,"b",ItemID.electricPiston,0,"c",ItemID.plateIron,0,"d",BlockID.crusher,0,"e",ItemID.stickIron,0,"f",ItemID.circuit,0]);
});

var GuiMacerator = new UI.StandartWindow({
    standart:{
        header:{text:{text:Translation.translate("Macerator")}},
        inventory:{standart:true},
        background:{standart:true}
    },
    
    drawing:[
        {type:"bitmap",x:900,y:325,bitmap:"logo",scale:GUI_SCALE},
        {type:"bitmap",x:350,y:50,bitmap:"energy_background",scale:GUI_SCALE},
        {type:"bitmap",x:600,y:175 + GUI_SCALE * 2,bitmap:"arrow_background",scale:GUI_SCALE},
		{type:"bitmap",x:700 - GUI_SCALE * 4,y:75 - GUI_SCALE * 4,bitmap:"infoSmall",scale:GUI_SCALE}
    ],

    elements:{
        "slotInput":{type:"slot",x:350 + GUI_SCALE * 43,y:175,bitmap:"slot_empty",scale:GUI_SCALE},
        "scaleArrow":{type:"scale",x:600,y:175 + GUI_SCALE * 2,direction:0,value:0.5,bitmap:"arrow_scale",scale:GUI_SCALE},
        "slotOutput":{type:"slot",x:720,y:175,bitmap:"slot_empty",scale:GUI_SCALE,isValid:function(){return false;}},
        "textEnergy":{type:"text",font:GUI_TEXT,x:700,y:75,width:300,height:TEXT_SIZE,text:Translation.translate("Energy: ") + "0/0Eu"},
        "scaleEnergy":{type:"scale",x:350 + GUI_SCALE * 6,y:50 + GUI_SCALE * 6,direction:1,value:0.5,bitmap:"energy_scale",scale:GUI_SCALE},

        "slotUpgrade1":{type:"slot",x:370,y:325,bitmap:"slot_circuit",isValid:UpgradeRegistry.isValidUpgrade},
		"slotUpgrade2":{type:"slot",x:430,y:325,bitmap:"slot_circuit",isValid:UpgradeRegistry.isValidUpgrade},
		"slotUpgrade3":{type:"slot",x:490,y:325,bitmap:"slot_circuit",isValid:UpgradeRegistry.isValidUpgrade},
        "slotUpgrade4":{type:"slot",x:550,y:325,bitmap:"slot_circuit",isValid:UpgradeRegistry.isValidUpgrade}
    }
});

MachineRegistry.registerEUMachine(BlockID.macerator,{
    defaultValues:{
        meta:0,
        tier:2,
        progress:0,
        work_time:320,
        isActive:false,
        sound_volume:16,
        energy_consumption:4
    },

    upgrades:["energyStorage","muffler","overclocker","transformer"],
    
	initValues:function(){
        this.data.tier = this.defaultValues.tier;
        this.data.work_time = this.defaultValues.work_time;
        this.data.sound_volume = this.defaultValues.sound_volume;
		this.data.energy_storage = this.defaultValues.energy_storage;
		this.data.energy_consumption = this.defaultValues.energy_consumption;
	},
	
	tick:function(){
        this.renderer();
		UpgradeRegistry.executeUpgrades(this);
        StorageInterface.checkHoppers(this);

        var input = this.container.getSlot("slotInput");
        var recipe = RecipeRegistry.getRecipeResult("Macerator",[input.id,input.data]);
        
        if(recipe){if(this.data.energy >= this.data.energy_consumption){
            this.activate("machine/macerator.ogg");
            this.data.energy -= this.data.energy_consumption;
            this.data.progress += 1 / this.data.work_time;

            if(this.data.progress.toFixed(3) >= 1){
                this.setOutputSlot("slotOutput",recipe.id,recipe.count,recipe.data),input.count--;
                this.container.validateAll();
                this.data.progress = 0;
            }
        } else {this.deactive();}} else {this.data.progress = 0,this.deactive();}

        this.container.setScale("scaleEnergy",parseInt(this.data.energy / this.getEnergyStorage() * 47) / 47);
        this.container.setScale("scaleArrow",parseInt(this.data.progress / 1 * 22) / 22);
        this.container.setText("textEnergy",Translation.translate("Energy: ") + this.data.energy + "/" + this.getEnergyStorage() + "Eu");
    },

    renderer:function(){
        var count = 4;
        TileRenderer.mapAtCoords(this.x,this.y,this.z,this.id,this.data.meta + (this.data.isActive?4 * (parseInt(this.data.progress / 1 * count * 10) % count) + 4:0));
    },

    energyReceive:MachineRegistry.energyReceive,
    getGuiScreen:function(){return GuiMacerator;}
});
TileRenderer.setRotationPlaceFunction(BlockID.macerator);
StorageInterface.createInterface(BlockID.macerator,{
	slots:{
		"slotInput":{input:true},
        "slotOutput":{output:true}
	},
	isValidInput:function(item){return RecipeRegistry.getRecipeResult("Macerator",[item.id,item.data])?true:false;}
});




// file: machine/electric/ore_washer.js

// [洗矿机]Ore Washer
IDRegistry.genBlockID("oreWasher");
Block.createBlock("oreWasher",[
    {name:"Ore Washer",texture:[["machine_bottom",1],["oreWasherTop",0],["machine_side",1],["oreWasher",0],["oreWasherSide",0],["oreWasherSide",0]],inCreative:true}
],"machine");
TileRenderer.setStandartModel(BlockID.oreWasher,[["machine_bottom",1],["oreWasherTop",0],["machine_side",1],["oreWasher",0],["oreWasherSide",0],["oreWasherSide",0]]);
TileRenderer.registerRotationModel(BlockID.oreWasher,0 ,[["machine_bottom",1],["oreWasherTop",0],["machine_side",1],["oreWasher",0 ],["oreWasherSide",0],["oreWasherSide",0]]);
TileRenderer.registerRotationModel(BlockID.oreWasher,4 ,[["machine_bottom",1],["oreWasherTop",1],["machine_side",1],["oreWasher",0 ],["oreWasherSide",0],["oreWasherSide",0]]);
TileRenderer.registerRotationModel(BlockID.oreWasher,8 ,[["machine_bottom",1],["oreWasherTop",1],["machine_side",1],["oreWasher",1 ],["oreWasherSide",0],["oreWasherSide",0]]);
TileRenderer.registerRotationModel(BlockID.oreWasher,12,[["machine_bottom",1],["oreWasherTop",1],["machine_side",1],["oreWasher",2 ],["oreWasherSide",1],["oreWasherSide",1]]);
TileRenderer.registerRotationModel(BlockID.oreWasher,16,[["machine_bottom",1],["oreWasherTop",1],["machine_side",1],["oreWasher",3 ],["oreWasherSide",1],["oreWasherSide",1]]);
TileRenderer.registerRotationModel(BlockID.oreWasher,20,[["machine_bottom",1],["oreWasherTop",1],["machine_side",1],["oreWasher",4 ],["oreWasherSide",2],["oreWasherSide",2]]);
TileRenderer.registerRotationModel(BlockID.oreWasher,24,[["machine_bottom",1],["oreWasherTop",1],["machine_side",1],["oreWasher",5 ],["oreWasherSide",2],["oreWasherSide",2]]);
TileRenderer.registerRotationModel(BlockID.oreWasher,28,[["machine_bottom",1],["oreWasherTop",1],["machine_side",1],["oreWasher",6 ],["oreWasherSide",3],["oreWasherSide",3]]);
TileRenderer.registerRotationModel(BlockID.oreWasher,32,[["machine_bottom",1],["oreWasherTop",1],["machine_side",1],["oreWasher",7 ],["oreWasherSide",3],["oreWasherSide",3]]);
TileRenderer.registerRotationModel(BlockID.oreWasher,36,[["machine_bottom",1],["oreWasherTop",1],["machine_side",1],["oreWasher",8 ],["oreWasherSide",4],["oreWasherSide",4]]);
TileRenderer.registerRotationModel(BlockID.oreWasher,40,[["machine_bottom",1],["oreWasherTop",1],["machine_side",1],["oreWasher",9 ],["oreWasherSide",4],["oreWasherSide",4]]);
TileRenderer.registerRotationModel(BlockID.oreWasher,44,[["machine_bottom",1],["oreWasherTop",1],["machine_side",1],["oreWasher",10],["oreWasherSide",5],["oreWasherSide",5]]);
TileRenderer.registerRotationModel(BlockID.oreWasher,48,[["machine_bottom",1],["oreWasherTop",1],["machine_side",1],["oreWasher",11],["oreWasherSide",5],["oreWasherSide",5]]);

MachineRegistry.setDrop("oreWasher",BlockID.machineCasing,1);
Callback.addCallback("PreLoaded",function(){
	Recipes.addShaped({id:BlockID.oreWasher,count:1,data:0},[
        "aaa",
        "bcb",
        "ded"
    ],["a",ItemID.plateIron,0,"b",ItemID.cellWater,0,"c",BlockID.machineCasing,1,"d",ItemID.electricMotor,0,"e",ItemID.circuit,0]);
});

var GuiOreWasher = new UI.StandartWindow({
    standart:{
        header:{text:{text:Translation.translate("Ore Washer")}},
        inventory:{standart:true},
        background:{standart:true}
    },
    
    drawing:[
        {type:"bitmap",x:350,y:50,bitmap:"energy_background",scale:GUI_SCALE},
        {type:"bitmap",x:600,y:200 + GUI_SCALE,bitmap:"arrow_background",scale:GUI_SCALE},
        {type:"bitmap",x:900 - GUI_SCALE * 3,y:175 - GUI_SCALE * 6,bitmap:"liquidBackground",scale:GUI_SCALE},
		{type:"bitmap",x:700 - GUI_SCALE * 4,y:75 - GUI_SCALE * 4,bitmap:"infoSmall",scale:GUI_SCALE}
    ],

    elements:{
        "slotInput":{type:"slot",x:350 + GUI_SCALE * 43,y:200,bitmap:"slot_empty",scale:GUI_SCALE},
        "scaleArrow":{type:"scale",x:600,y:200 + GUI_SCALE,direction:0,value:0.5,bitmap:"arrow_scale",scale:GUI_SCALE},
        "slotOutput0":{type:"slot",x:720,y:175,bitmap:"slot_empty",scale:GUI_SCALE,isValid:function(){return false;}},
        "slotOutput1":{type:"slot",x:780,y:175,bitmap:"slot_empty",scale:GUI_SCALE,isValid:function(){return false;}},
        "slotOutput2":{type:"slot",x:720,y:235,bitmap:"slot_empty",scale:GUI_SCALE,isValid:function(){return false;}},
        "slotOutput3":{type:"slot",x:780,y:235,bitmap:"slot_empty",scale:GUI_SCALE,isValid:function(){return false;}},
        "textEnergy":{type:"text",font:GUI_TEXT,x:700,y:75,width:300,height:TEXT_SIZE,text:Translation.translate("Energy: ") + "0/0Eu"},
        "scaleEnergy":{type:"scale",x:350 + GUI_SCALE * 6,y:50 + GUI_SCALE * 6,direction:1,value:0.5,bitmap:"energy_scale",scale:GUI_SCALE},
        "scaleLiquid":{type:"scale",x:900 + GUI_SCALE * 3,y:175,direction:1,value:0.5,bitmap:"liquidScale",overlay:"liquidScale",scale:GUI_SCALE},

        "slotLiquid1":{type:"slot",x:720,y:325,bitmap:"slot_cell",isValid:function(id,count,data){return Liquid.getItemLiquid(id,data) == "water";}},
        "slotLiquid2":{type:"slot",x:780,y:325,bitmap:"slot_cell",isValid:function(){return false;}},
        
        "slotUpgrade1":{type:"slot",x:370,y:325,bitmap:"slot_circuit",isValid:UpgradeRegistry.isValidUpgrade},
		"slotUpgrade2":{type:"slot",x:430,y:325,bitmap:"slot_circuit",isValid:UpgradeRegistry.isValidUpgrade},
		"slotUpgrade3":{type:"slot",x:490,y:325,bitmap:"slot_circuit",isValid:UpgradeRegistry.isValidUpgrade},
        "slotUpgrade4":{type:"slot",x:550,y:325,bitmap:"slot_circuit",isValid:UpgradeRegistry.isValidUpgrade}
    }
});

MachineRegistry.registerEUMachine(BlockID.oreWasher,{
    defaultValues:{
        meta:0,
        tier:2,
        progress:0,
        work_time:320,
        isActive:false,
        energy_consumption:4
    },

    upgrades:["energyStorage","overclocker","transformer"],

	initValues:function(){
        this.data.tier = this.defaultValues.tier;
        this.data.work_time = this.defaultValues.work_time;
		this.data.energy_storage = this.defaultValues.energy_storage;
		this.data.energy_consumption = this.defaultValues.energy_consumption;
	},
    
    init:function(){
		this.liquidStorage.setLimit("water",8);
		this.renderer();
    },
    
	tick:function(){
        this.renderer();
		UpgradeRegistry.executeUpgrades(this);
        StorageInterface.checkHoppers(this);
        
        var liquid1 = this.container.getSlot("slotLiquid1");
		var liquid2 = this.container.getSlot("slotLiquid2");
		var empty = Liquid.getEmptyItem(liquid1.id,liquid1.data);
		if(empty && empty.liquid == "water"){
			if(this.liquidStorage.getAmount("water") < 8 && (liquid2.id == empty.id && liquid2.data == empty.data && liquid2.count < Item.getMaxStack(empty.id) || liquid2.id == 0)){
				this.liquidStorage.addLiquid("water",1);
				liquid1.count--;
				liquid2.id = empty.id;
				liquid2.data = empty.data;
				liquid2.count++;
				this.container.validateAll();
			}
		}

        var input = this.container.getSlot("slotInput");
        var recipe = RecipeRegistry.getRecipeResult("OreWasher",[input.id,input.data]);
        
        if(recipe && this.liquidStorage.getAmount("water") > 0){if(this.data.energy >= this.data.energy_consumption){
            this.activate();
            this.data.energy -= this.data.energy_consumption;
            this.data.progress += 1 / this.data.work_time;
            
            if(this.data.progress.toFixed(3) >= 1){
                this.liquidStorage.getLiquid("water",1);
                for(let i = 0;i < 4;i++){
                    if(recipe[i]){
                        this.setOutputSlot("slotOutput" + i,recipe[i].id,recipe[i].count,recipe[i].data);
                    }
                } input.count--;
                this.container.validateAll();
                this.data.progress = 0;
            }
        } else {this.deactive();}} else {this.deactive(),this.data.progress = 0;}

        this.liquidStorage.updateUiScale("scaleLiquid","water");
        this.container.setScale("scaleArrow",parseInt(this.data.progress / 1 * 22) / 22);
        this.container.setScale("scaleEnergy",parseInt(this.data.energy / this.getEnergyStorage() * 47) / 47);
        this.container.setText("textEnergy",Translation.translate("Energy: ") + this.data.energy + "/" + this.getEnergyStorage() + "Eu");
    },

    renderer:function(){
        TileRenderer.mapAtCoords(this.x,this.y,this.z,this.id,this.data.meta + (this.data.isActive?4 * (count - parseInt(this.data.progress / 1 * 12 * 10)%12) + 4:0));
    },

    getGuiScreen:function(){
        return GuiOreWasher;
    },

    energyReceive:MachineRegistry.energyReceive
});
TileRenderer.setRotationPlaceFunction(BlockID.oreWasher);
StorageInterface.createInterface(BlockID.oreWasher,{
	slots:{
		"slotInput":{input:true},
        "slotOutput1":{output:true},
        "slotOutput2":{output:true},
        "slotOutput3":{output:true},
        "slotOutput4":{output:true}
	},
	isValidInput:function(item){return RecipeRegistry.getRecipeResult("OreWasher",[item.id,item.data])?true:false;}
});




// file: machine/electric/wiremill.js

// [线缆轧制机]Wiremill
IDRegistry.genBlockID("wiremill");
Block.createBlock("wiremill",[
    {name:"Wiremill",texture:[["machine_bottom",1],["wiremill_top",0],["machine_side",1],["wiremill",0],["machine_side",1],["machine_side",1]],inCreative:true}
],"machine");
TileRenderer.setStandartModel(BlockID.wiremill,[["machine_bottom",1],["wiremill_top",0],["machine_side",1],["wiremill",0],["machine_side",1],["machine_side",1]]);
TileRenderer.registerRotationModel(BlockID.wiremill,0,[["machine_bottom",1],["wiremill_top",0],["machine_side",1],["wiremill",0],["machine_side",1],["machine_side",1]]);
for(let i = 1;i < 22;i++){TileRenderer.registerRotationModel(BlockID.wiremill,i * 4,[["machine_bottom",1],["wiremill_top",1],["machine_side",1],["wiremill",i],["machine_side",1],["machine_side",1]]);}

MachineRegistry.setDrop("wiremill",BlockID.machineCasing,1);
Callback.addCallback("PreLoaded",function(){
	Recipes.addShaped({id:BlockID.wiremill,count:1,data:0},["aba","cdc"],["a",ItemID.partIron,0,"b",ItemID.gearIron,0,"c",ItemID.circuit,0,"d",BlockID.machineCasing,1]);
});

var GuiWiremill = new UI.StandartWindow({
    standart:{
        header:{text:{text:Translation.translate("Wiremill")}},
        inventory:{standart:true},
        background:{standart:true}
    },
    
    drawing:[
        {type:"bitmap",x:900,y:325,bitmap:"logo",scale:GUI_SCALE},
        {type:"bitmap",x:350,y:50,bitmap:"energy_background",scale:GUI_SCALE},
        {type:"bitmap",x:600,y:175 + GUI_SCALE * 2,bitmap:"arrow_background",scale:GUI_SCALE},
		{type:"bitmap",x:700 - GUI_SCALE * 4,y:75 - GUI_SCALE * 4,bitmap:"infoSmall",scale:GUI_SCALE}
    ],

    elements:{
        "slotInput":{type:"slot",x:350 + GUI_SCALE * 43,y:175,bitmap:"slot_empty",scale:GUI_SCALE},
        "slotOutput":{type:"slot",x:720,y:175,bitmap:"slot_empty",scale:GUI_SCALE,isValid:function(){return false;}},
        "scaleArrow":{type:"scale",x:600,y:175 + GUI_SCALE * 2,direction:0,value:0.5,bitmap:"arrow_scale",scale:GUI_SCALE},
        "textEnergy":{type:"text",font:GUI_TEXT,x:700,y:75,width:300,height:TEXT_SIZE,text:Translation.translate("Energy: ") + "0/0Eu"},
        "scaleEnergy":{type:"scale",x:350 + GUI_SCALE * 6,y:50 + GUI_SCALE * 6,direction:1,value:0.5,bitmap:"energy_scale",scale:GUI_SCALE},

        "slotUpgrade1":{type:"slot",x:370,y:325,bitmap:"slot_circuit",isValid:UpgradeRegistry.isValidUpgrade},
		"slotUpgrade2":{type:"slot",x:430,y:325,bitmap:"slot_circuit",isValid:UpgradeRegistry.isValidUpgrade},
		"slotUpgrade3":{type:"slot",x:490,y:325,bitmap:"slot_circuit",isValid:UpgradeRegistry.isValidUpgrade},
        "slotUpgrade4":{type:"slot",x:550,y:325,bitmap:"slot_circuit",isValid:UpgradeRegistry.isValidUpgrade}
    }
});

MachineRegistry.registerEUMachine(BlockID.wiremill,{
    defaultValues:{
        tier:2,
        meta:0,
        progress:0,
        work_time:320,
        isActive:false,
        sound_volume:16,
        energy_consumption:4
    },
    
    upgrades:["energyStorage","muffler","overclocker","transformer"],
    
	initValues:function(){
        this.data.tier = this.defaultValues.tier;
        this.data.work_time = this.defaultValues.work_time;
        this.data.sound_volume = this.defaultValues.sound_volume;
		this.data.energy_storage = this.defaultValues.energy_storage;
		this.data.energy_consumption = this.defaultValues.energy_consumption;
    },

	tick:function(){
        this.renderer();
		UpgradeRegistry.executeUpgrades(this);
        StorageInterface.checkHoppers(this);

        var input = this.container.getSlot("slotInput");
        var recipe = RecipeRegistry.getRecipeResult("Wiremill",[input.id,input.data]);
        
        if(recipe && input.count >= recipe.count){if(this.data.energy >= this.data.energy_consumption){
            this.activate("machine/wiremill.ogg");
            this.data.energy -= this.data.energy_consumption;
            this.data.progress += 1 / this.data.work_time;

            if(this.data.progress.toFixed(3) >= 1){
                this.setOutputSlot("slotOutput",recipe.output.id,recipe.output.count,recipe.output.data),input.count -= recipe.count;
                this.container.validateAll();
                this.data.progress = 0;
            }
        } else {this.deactive();}} else {this.deactive(),this.data.progress = 0;}
        
        this.container.setScale("scaleArrow",parseInt(this.data.progress / 1 * 22) / 22);
        this.container.setScale("scaleEnergy",parseInt(this.data.energy / this.getEnergyStorage() * 47) / 47);
        this.container.setText("textEnergy",Translation.translate("Energy: ") + this.data.energy + "/" + this.getEnergyStorage() + "Eu");
    },

    renderer:function(){
        TileRenderer.mapAtCoords(this.x,this.y,this.z,this.id,this.data.meta + (this.data.isActive?4 * (parseInt(this.data.progress / 1 * 22 * 10)%22) + 4:0));
    },

    getGuiScreen:function(){
        return GuiWiremill;
    },

    energyReceive:MachineRegistry.energyReceive
});
TileRenderer.setRotationPlaceFunction(BlockID.wiremill);
StorageInterface.createInterface(BlockID.wiremill,{
	slots:{
		"slotInput":{input:true},
        "slotOutput":{output:true}
	},
	isValidInput:function(item){
        return RecipeRegistry.getRecipeResult("Wiremill",[item.id,item.data])?true:false;
    }
});




// file: machine/cover/cover.js

Renderer.registerCoverModel = function(id,data,texture){
    var size = [[0,0.9375,0,1,1,1],[0,0,0,1,0.0625,1],[0,0,0.9375,1,1,1],[0,0,0,1,1,0.0625],[0.9375,0,0,1,1,1],[0,0,0,0.0625,1,1]];
    
    for(let i = 0;i < 6;i++){
        var render = new ICRender.Model(),model = new BlockRenderer.Model();
        model.addBox(size[i][0],size[i][1],size[i][2],size[i][3],size[i][4],size[i][5],texture);
		render.addEntry(model);
        Renderer.registerRenderModel(id,data + i,render);

        Block.setBlockShape(id,{x:size[i][0],y:size[i][1],z:size[i][2]},{x:size[i][3],y:size[i][4],z:size[i][5]},i);
    }

    Item.addCreativeGroup("cover",Translation.translate("Cover"),[id]);
}

Renderer.setCoverRotationPlace = function(id){
    Item.registerUseFunction(id,function(coords,item,block){
        if(World.isAirBlock(coords.relative.x,coords.relative.y,coords.relative.z)){
            var x = coords.relative.x,y = coords.relative.y,z = coords.relative.z;
            World.setBlock(x,y,z,BlockID[id],coords.side);
            var tile = World.addTileEntity(x,y,z);
            tile.data.meta = coords.side;
            Renderer.mapAtCoords(x,y,z,BlockID[id],coords.side);
            Player.decreaseCarriedItem(1);
        }
    });

    Block.registerDropFunction(id,function(coords,id,data,level,enchant){
        return [[ItemID[id],1,0]];
    });
}

Block.createSpecialType({
    opaque:false,
    destroytime:5,
    explosionres:1
},"cover");




// file: machine/cover/cover_energy_display.js

// [能量显示面板]Energy Display Cover
IDRegistry.genItemID("coverEnergyDisplay");
Item.createItem("coverEnergyDisplay","Energy Display Cover",{name:"cover_energy_display",meta:0});

IDRegistry.genBlockID("coverEnergyDisplay");
Block.createBlock("coverEnergyDisplay",[
    {name:"Energy Display Cover",texture:[["cover_energy_display",0]],inCreative:false},
    {name:"Energy Display Cover",texture:[["cover_energy_display",0]],inCreative:false},
    {name:"Energy Display Cover",texture:[["cover_energy_display",0]],inCreative:false},
    {name:"Energy Display Cover",texture:[["cover_energy_display",0]],inCreative:false},
    {name:"Energy Display Cover",texture:[["cover_energy_display",0]],inCreative:false},
    {name:"Energy Display Cover",texture:[["cover_energy_display",0]],inCreative:false}
],"cover");
for(let i = 0;i <= 10;i++){
    Renderer.registerCoverModel(BlockID.coverEnergyDisplay,i * 6,[["cover_energy_display",i],["cover_energy_display",i],["cover_energy_display",i],["cover_energy_display",i],["cover_energy_display",i],["cover_energy_display",i]]);
}

Callback.addCallback("PreLoaded",function(){
    var wrench = Tool.getAllTool("Wrench");
    for(let i = 0;i < wrench.length;i++){
        RecipeRegistry.addShapedRecipe({id:ItemID.coverEnergyDisplay,count:1,data:0},[
            "ea ",
            "dbd",
            " c "
        ],["a",ItemID.stickIron,0,"b",ItemID.plateAluminium,0,"c",ItemID.circuitEnergyStorage,0,"d",ItemID.wireTin,0,"e",wrench[i],-1],{0:1});
    }
});

MachineRegistry.registerPrototype(BlockID.coverEnergyDisplay,{
    defaultValues:{
        meta:0
    },

    tick:function(){
        var coords = World.getRelativeCoords(this.x,this.y,this.z,this.data.meta),tile = World.getTileEntity(coords.x,coords.y,coords.z);
        if(tile && tile.data.energy && tile.getEnergyStorage()){
            Renderer.mapAtCoords(this.x,this.y,this.z,this.id,this.data.meta + (parseInt(tile.data.energy / tile.getEnergyStorage() * 10) * 6));
        }
    },

    destroy:function(){
        BlockRenderer.unmapAtCoords(this.x,this.y,this.z);
    }
});
Renderer.setCoverRotationPlace("coverEnergyDisplay");




// file: machine/cover/cover_progress_display.js

// [进度显示面板]Progress Display Cover
IDRegistry.genItemID("coverProgressDisplay");
Item.createItem("coverProgressDisplay","Progress Display Cover",{name:"cover_progress_display",meta:0});

IDRegistry.genBlockID("coverProgressDisplay");
Block.createBlock("coverProgressDisplay",[
    {name:"Progress Display Cover",texture:[["cover_progress_display",0]],inCreative:false},
    {name:"Progress Display Cover",texture:[["cover_progress_display",0]],inCreative:false},
    {name:"Progress Display Cover",texture:[["cover_progress_display",0]],inCreative:false},
    {name:"Progress Display Cover",texture:[["cover_progress_display",0]],inCreative:false},
    {name:"Progress Display Cover",texture:[["cover_progress_display",0]],inCreative:false},
    {name:"Progress Display Cover",texture:[["cover_progress_display",0]],inCreative:false}
],"cover");
for(let i = 0;i <= 11;i++){
    Renderer.registerCoverModel(BlockID.coverProgressDisplay,i * 6,[["cover_progress_display",i],["cover_progress_display",i],["cover_progress_display",i],["cover_progress_display",i],["cover_progress_display",i],["cover_progress_display",i]]);
}

Callback.addCallback("PreLoaded",function(){
    var wrench = Tool.getAllTool("Wrench");
    for(let i = 0;i < wrench.length;i++){
        RecipeRegistry.addShapedRecipe({id:ItemID.coverProgressDisplay,count:1,data:0},[
            "ea ",
            "dbd",
            " c "
        ],["a",ItemID.stickIron,0,"b",ItemID.plateAluminium,0,"c",ItemID.circuitOverclocker,0,"d",ItemID.wireTin,0,"e",wrench[i],-1],{0:1});
    }
});

MachineRegistry.registerPrototype(BlockID.coverProgressDisplay,{
    defaultValues:{
        meta:0
    },

    tick:function(){
        var coords = World.getRelativeCoords(this.x,this.y,this.z,this.data.meta),tile = World.getTileEntity(coords.x,coords.y,coords.z);
        if(tile && tile.data.progress){
            Renderer.mapAtCoords(this.x,this.y,this.z,this.id,this.data.meta + (tile.data.isActive?(parseInt(tile.data.progress / 1 * 11) * 6):0));
        }
    },

    destroy:function(){
        BlockRenderer.unmapAtCoords(this.x,this.y,this.z);
    }
});
Renderer.setCoverRotationPlace("coverProgressDisplay");




// file: item/cell.js

IDRegistry.genItemID("cellEmpty");
Item.createItem("cellEmpty","Liquid Cell (Empty)",{name:"empty_cell"});
Item.setLiquidClip(ItemID.cellEmpty,true);

IDRegistry.genItemID("cellSteam");
Item.createItem("cellSteam","Liquid Cell (Steam)",{name:"steam_cell"});
Liquid.registerItem("steam",ItemID.cellEmpty,ItemID.cellSteam,1000);

IDRegistry.genItemID("cellWater");
Item.createItem("cellWater","Liquid Cell (Water)",{name:"water_cell"});
Liquid.registerItem("water",ItemID.cellEmpty,ItemID.cellWater,1000);

IDRegistry.genItemID("cellLava");
Item.createItem("cellLava","Liquid Cell (Lava)",{name:"lava_cell"});
Liquid.registerItem("lava",ItemID.cellEmpty,ItemID.cellLava,1000);

IDRegistry.genItemID("cellUranium235");
Item.createItem("cellUranium235","Liquid Cell (Uranium-235)",{name:"uranium235_cell"});
Liquid.registerItem("uranium235",ItemID.cellEmpty,ItemID.cellUranium235,1000);

IDRegistry.genItemID("cellUranium238");
Item.createItem("cellUranium238","Liquid Cell (Uranium-238)",{name:"uranium238_cell"});
Liquid.registerItem("uranium238",ItemID.cellEmpty,ItemID.cellUranium238,1000);

IDRegistry.genItemID("cellLithium6");
Item.createItem("cellLithium6","Liquid Cell (Lithium-6)",{name:"lithium6_cell"});
Liquid.registerItem("lithium6",ItemID.cellEmpty,ItemID.cellLithium6,1000);

IDRegistry.genItemID("cellLithium7");
Item.createItem("cellLithium7","Liquid Cell (Lithium-7)",{name:"lithium7_cell"});
Liquid.registerItem("lithium7",ItemID.cellEmpty,ItemID.cellLithium7,1000);

IDRegistry.genItemID("cellTritium");
Item.createItem("cellTritium","Liquid Cell (Tritium)",{name:"tritium_cell"});
Liquid.registerItem("tritium",ItemID.cellEmpty,ItemID.cellTritium,1000);

IDRegistry.genItemID("cellDeuterium");
Item.createItem("cellDeuterium","Liquid Cell (Deuterium)",{name:"deuterium_cell"});
Liquid.registerItem("deuterium",ItemID.cellEmpty,ItemID.cellDeuterium,1000);

IDRegistry.genItemID("cellHelium");
Item.createItem("cellHelium","Liquid Cell (Helium)",{name:"helium_cell"});
Liquid.registerItem("helium",ItemID.cellEmpty,ItemID.cellHelium,1000);

IDRegistry.genItemID("cellHelium3");
Item.createItem("cellHelium3","Liquid Cell (Helium-3)",{name:"helium3_cell"});
Liquid.registerItem("helium3",ItemID.cellEmpty,ItemID.cellHelium3,1000);

IDRegistry.genItemID("cellDistilledWater");
Item.createItem("cellDistilledWater","Liquid Cell (Distilled Water)",{name:"distilled_water_cell"});
Liquid.registerItem("distilledWater",ItemID.cellEmpty,ItemID.cellDistilledWater,1000);

IDRegistry.genItemID("cellHeavyWater");
Item.createItem("cellHeavyWater","Liquid Cell (Heavy Water)",{name:"heavy_water_cell"});
Liquid.registerItem("heavyWater",ItemID.cellEmpty,ItemID.cellHeavyWater,1000);

Item.registerUseFunction("cellEmpty",function(coords,item,block){
	if(block.id > 7 && block.id < 12 && block.data == 0){
		World.setBlock(coords.x,coords.y,coords.z,0);
		if(block.id == 8 || block.id == 9){
			Player.addItemToInventory(ItemID.cellWater,1);
		} else {
			Player.addItemToInventory(ItemID.cellLava,1);
		}
		Player.decreaseCarriedItem(1);
	}
});

Item.registerUseFunction("cellWater",function(coords){
	var x = coords.relative.x,y = coords.relative.y,z = coords.relative.z;
	var tile = World.getTileEntity(coords.x,coords.y,coords.z),id = World.getBlockID(x,y,z);
	if(!tile && (id == 0 || id > 7 && id < 12)){
		World.setBlock(x,y,z,8);
		Player.addItemToInventory(ItemID.cellEmpty,1);
		Player.decreaseCarriedItem(1);
	}
});

Item.registerUseFunction("cellLava",function(coords){
	var x = coords.relative.x,y = coords.relative.y,z = coords.relative.z;
	var tile = World.getTileEntity(coords.x,coords.y,coords.z),id = World.getBlockID(x,y,z);
	if(!tile && (id == 0 || id > 7 && id < 12)){
		World.setBlock(x,y,z,10);      
		Player.addItemToInventory(ItemID.cellEmpty,1);
		Player.decreaseCarriedItem(1);
	}
});

Callback.addCallback("PreLoaded",function(){
	Item.addCreativeGroup("cell",Translation.translate("Cell"),[
		ItemID.cellEmpty,
		ItemID.cellSteam,
		ItemID.cellWater,
		ItemID.cellLava,
		ItemID.cellUranium,
		ItemID.cellUranium235,
		ItemID.cellUranium238,
		ItemID.cellLithium6,
		ItemID.cellLithium7,
		ItemID.cellTritium,
		ItemID.cellDeuterium,
		ItemID.cellHelium,
		ItemID.cellHelium3,
		ItemID.cellDistilledWater,
		ItemID.cellHeavyWater
	]);
	
	Recipes.addShaped({id:ItemID.cellEmpty,count:1,data:0},[
		"a",
		"b",
		"a"
	],["a",ItemID.plateTin,0,"b",102,0]);

	RecipeRegistry.addDistilleryRecipe({id:ItemID.cellWater,count:1,data:0},[{id:ItemID.cellDistilledWater,count:1,data:0}]);
	RecipeRegistry.addDistilleryRecipe({id:ItemID.cellDistilledWater,count:1,data:0},[{id:ItemID.cellHeavyWater,count:1,data:0}]);

    RecipeRegistry.addCanningMachineRecipe({id:ItemID.lithium6,data:0},{id:ItemID.cellLithium6,count:1,data:0},{id:ItemID.cellEmpty,data:0});
    RecipeRegistry.addCanningMachineRecipe({id:ItemID.lithium7,data:0},{id:ItemID.cellLithium7,count:1,data:0},{id:ItemID.cellEmpty,data:0});
    RecipeRegistry.addCanningMachineRecipe({id:ItemID.uranium235,data:0},{id:ItemID.cellUranium235,count:1,data:0},{id:ItemID.cellEmpty,data:0});
    RecipeRegistry.addCanningMachineRecipe({id:ItemID.uranium238,data:0},{id:ItemID.cellUranium238,count:1,data:0},{id:ItemID.cellEmpty,data:0});
	RecipeRegistry.addCanningMachineRecipe({id:ItemID.enrichedUraniumDepleted,data:0},{id:ItemID.fuelRodUranium,count:1,data:0},{id:ItemID.cellEmpty,data:0});

	RecipeRegistry.addFusionReactorRecipe([{liquid:"helium3",mB:125},{liquid:"deuterium",mB:125}],{liquid:"plasmaHelium",mB:125});
	RecipeRegistry.addFusionReactorRecipe([{liquid:"tritium",mB:125},{liquid:"deuterium",mB:125}],{liquid:"plasmaHelium",mB:125});

	RecipeRegistry.addElectrolyzerRecipe({id:ItemID.cellHeavyWater,count:40,data:0},[{id:ItemID.cellDeuterium,count:40,data:0},{id:ItemID.cellTritium,count:1,data:0}]);
	RecipeRegistry.addElectrolyzerRecipe({id:ItemID.cellDeuterium,count:50,data:0},[{id:ItemID.cellHelium3,count:20,data:0},{id:ItemID.cellTritium,count:20,data:0}]);
});




// file: item/circuit.js

// [电路板]Circuit
IDRegistry.genItemID("circuit");
Item.createItem("circuit","Circuit",{name:"circuit",meta:0},{stack:64});

Callback.addCallback("PreLoaded",function(){
    Item.addCreativeGroup("circuit",Translation.translate("Circuit"),[ItemID.circuit]);

    Recipes.addShaped({id:ItemID.circuit,count:1,data:0},["aaa","bcb","aaa"],["a",ItemID.wireCopper,0,"b",ItemID.vacuumTube,0,"c",ItemID.plateCarbon,0]);
    Recipes.addShaped({id:ItemID.circuit,count:1,data:0},["aaa","bcb","aaa"],["a",ItemID.wireCopper,0,"b",ItemID.vacuumTube,0,"c",ItemID.plateCircuit,0]);
});

// [电路板(储能升级)]Circuit (Energy Storage Upgrade)
IDRegistry.genItemID("circuitEnergyStorage");
Item.createItem("circuitEnergyStorage","Circuit (Energy Storage Upgrade)",{name:"circuit_energy_storage"},{stack:4});

UpgradeRegistry.registerUpgrade(ItemID.circuitEnergyStorage,"energyStorage",function(item,machine,container,data,coords){
    data.energy_storage += 16384 * item.count;
});

Callback.addCallback("PreLoaded",function(){
    Item.addCreativeGroup("circuit",Translation.translate("Circuit"),[ItemID.circuitEnergyStorage]);

    RecipeRegistry.addAssemblyTableRecipe([{id:ItemID.circuit,count:1,data:0},{id:ItemID.lithiumBattery,count:1,data:0}],{id:ItemID.circuitEnergyStorage,count:1,data:0});
    RecipeRegistry.addAssemblyTableRecipe([{id:ItemID.circuit,count:1,data:0},{id:ItemID.eneteBattery,count:1,data:0}],{id:ItemID.circuitEnergyStorage,count:2,data:0});
    RecipeRegistry.addAssemblyTableRecipe([{id:ItemID.circuit,count:1,data:0},{id:ItemID.energyCrystal,count:1,data:0}],{id:ItemID.circuitEnergyStorage,count:3,data:0});
    RecipeRegistry.addAssemblyTableRecipe([{id:ItemID.circuit,count:1,data:0},{id:ItemID.lapotronCrystal,count:1,data:0}],{id:ItemID.circuitEnergyStorage,count:4,data:0});
});

// [电路板(消音升级)]Circuit (Muffler Upgrade)
IDRegistry.genItemID("circuitMuffler");
Item.createItem("circuitMuffler","Circuit (Muffler Upgrade)",{name:"circuit_muffler"},{stack:4});

UpgradeRegistry.registerUpgrade(ItemID.circuitMuffler,"muffler",function(item,machine,container,data,coords){
    if(data.sound_volume) data.sound_volume -= item.count * 8;
});

Callback.addCallback("PreLoaded",function(){
    Item.addCreativeGroup("circuit",Translation.translate("Circuit"),[ItemID.circuitMuffler]);
    
    RecipeRegistry.addAssemblyTableRecipe([{id:ItemID.circuit,count:1,data:0},{id:35,count:1,data:-1}],{id:ItemID.circuitMuffler,count:1,data:0});
});

// [电路板(超频升级)]Circuit(Overclocker Upgrade)
IDRegistry.genItemID("circuitOverclocker");
Item.createItem("circuitOverclocker","Circuit (Overclocker Upgrade)",{name:"circuit_overclocker"},{stack:4});

UpgradeRegistry.registerUpgrade(ItemID.circuitOverclocker,"overclocker",function(item,machine,container,data,coords){
    if(data.work_time){
        data.energy_consumption = parseInt(data.energy_consumption * Math.pow(1.5,item.count));
        data.work_time = parseInt(data.work_time * Math.pow(0.75,item.count));
    }
});

Callback.addCallback("PreLoaded",function(){
    Item.addCreativeGroup("circuit",Translation.translate("Circuit"),[ItemID.circuitOverclocker]);

    RecipeRegistry.addAssemblyTableRecipe([{id:ItemID.circuit,count:1,data:0},{id:ItemID.cellWater,count:1,data:0}],{id:ItemID.circuitOverclocker,count:1,data:0});
});

// [电路板(高压升级)]Circuit(Transformer Upgrade)
IDRegistry.genItemID("circuitTransformer");
Item.createItem("circuitTransformer","Circuit (Transformer Upgrade)",{name:"circuit_transformer"},{stack:4});

UpgradeRegistry.registerUpgrade(ItemID.circuitTransformer,"transformer",function(item,machine,container,data,coords){
    data.tier += item.count;
});

Callback.addCallback("PreLoaded",function(){
    Item.addCreativeGroup("circuit",Translation.translate("Circuit"),[ItemID.circuitTransformer  ]);
    
    RecipeRegistry.addAssemblyTableRecipe([{id:ItemID.circuit,count:1,data:0},{id:BlockID.transformerLV,count:1,data:-1}],{id:ItemID.circuitTransformer,count:1,data:0});
    RecipeRegistry.addAssemblyTableRecipe([{id:ItemID.circuit,count:1,data:0},{id:BlockID.transformerMV,count:1,data:-1}],{id:ItemID.circuitTransformer,count:2,data:0});
    RecipeRegistry.addAssemblyTableRecipe([{id:ItemID.circuit,count:1,data:0},{id:BlockID.transformerHV,count:1,data:-1}],{id:ItemID.circuitTransformer,count:3,data:0});
    RecipeRegistry.addAssemblyTableRecipe([{id:ItemID.circuit,count:1,data:0},{id:BlockID.transformerEV,count:1,data:-1}],{id:ItemID.circuitTransformer,count:4,data:0});
});




// file: item/drill.js

ToolType.drill = {
    enchantType:Native.EnchantType.pickaxe,

    damage:0,

    blockTypes:["stone"],

    onDestroy:function(item,coords,block){
        var damage = 16;
        for(let x = 0;x < 3;x++){
            for(let y = 0;y < 3;y++){
                for(let z = 0;z < 3;z++){
                    var id = World.getBlockID(coords.x - 1 + x,coords.y - 1 + y,coords.z - 1 + z);
                    var level = ToolAPI.getBlockDestroyLevel(id);
                    var material = ToolAPI.getBlockMaterialName(id);
                    if(this.toolMaterial.level >= level && material == "stone") damage += 16;
                }
            }
        }

		if(Block.getDestroyTime(block.id) > 0){
            var max_damage = Item.getMaxDamage(item.id);
            if(item.data + damage < max_damage){
                item.data += damage;
                return true;
            } else if(item.data + damage > max_damage){
                item.data = (max_damage - 1);
                return false;
            }
        }
        
		return false;
    },
    
    destroyBlock:function(coords,side,item,block){
        var damage = Item.getMaxDamage(item.id);
        if(item.data < damage){
            for(let x = 0;x < 3;x++){for(let y = 0;y < 3;y++){for(let z = 0;z < 3;z++){
                var id = World.getBlock(coords.x - 1 + x,coords.y - 1 + y,coords.z - 1 + z).id;
                var level = ToolAPI.getBlockDestroyLevel(id),material = ToolAPI.getBlockMaterialName(id);
                if(this.toolMaterial.level >= level && material == "stone") World.destroyBlock(coords.x - 1 + x,coords.y - 1 + y,coords.z - 1 + z,true);
            }}}
        }
    },

    onBroke:function(item){
        return true;
    }
}

// 钻头
IDRegistry.genItemID("drill");
Item.createItem("drill","Drill",{name:"drill"},{stack:1,isTech:true});
Tool.registerTool(ItemID.drill,"Drill");
ToolAPI.setTool(ItemID.drill,"iron",ToolType.drill);
ChargeItemRegistry.registerItem(ItemID.drill,"Eu",16384,power(1),1,"tool",true);

Tooltip.tier(ItemID.drill,1);
Item.setItemName(ItemID.drill,Tooltip.energyStored);

Callback.addCallback("PreLoaded",function(){
    Recipes.addShaped({id:ItemID.drill,count:1,data:Item.getMaxDamage(ItemID.drill)},[
        "bc ",
        "cbc",
        " ca"
    ],["a",ItemID.electricMotor,0,"b",ItemID.plateIron,0,"c",ItemID.gearIron,0]);
});




// file: item/wire.js

Block.createSpecialType({
    opaque:false,
    destroytime:1
},"wire");

Item.registerUseFunctionForID(171,function(coords,item,block){
    if(MachineRegistry.isWire(block.id) && item.data == 15 && block.data == 0){
        Game.prevent();
        World.setBlock(coords.x,coords.y,coords.z,block.id,1);
        Player.decreaseCarriedItem(1);
    }
});

Callback.addCallback("DestroyBlockStart",function(coords,block){
    var item = Player.getCarriedItem();
    if(MachineRegistry.isWire(block.id) && Tool.isTool(item.id,"Cutter")){
        Block.setTempDestroyTime(block.id,0);
        SoundAPI.playSound("tool/wrench.ogg");
        ToolAPI.breakCarriedTool(4);
    }
});

// 锡导线
IDRegistry.genItemID("wireTin");
Item.createItem("wireTin","Tin Coil",{name:"tin_wire"});

IDRegistry.genBlockID("wireTin");
Block.createBlock("wireTin",[
    {name:"Tin Coil",texture:[["tin_wire",0]],inCreative:false},
    {name:"Tin Coil",texture:[["tin_wire",1]],inCreative:false}
],"wire");

Tooltip.tier(ItemID.wireTin,1);
MachineRegistry.registerEUWire(BlockID.wireTin,power(1));
TileRenderer.setupWireModel(BlockID.wireTin,0,0.25,"eu-wire");
TileRenderer.setupWireModel(BlockID.wireTin,1,0.3125,"eu-wire");

Item.registerUseFunction("wireTin",function(coords,item,block){
    var place = coords;
    if(!canTileBeReplaced(block.id,block.data)){
        place = coords.relative;
        block = World.getBlock(place.x,place.y,place.z);
        if(!canTileBeReplaced(block.id,block.data)) return;
    }
    
    World.setBlock(place.x,place.y,place.z,BlockID.wireTin,0);
    Player.decreaseCarriedItem(1);
    EnergyTypeRegistry.onWirePlaced(place.x,place.y,place.z);
});

Block.registerDropFunction("wireTin",function(coords,id,data){
    if(data == 1) return [[ItemID.wireTin,1,0],[171,1,15]];
    return [[ItemID.wireTin,1,0]];
});

// 铜导线
IDRegistry.genItemID("wireCopper");
Item.createItem("wireCopper","Copper Coil",{name:"copper_wire"});

IDRegistry.genBlockID("wireCopper");
Block.createBlock("wireCopper",[
    {name:"Copper Coil",texture:[["copper_wire",0]],inCreative:false},
    {name:"Copper Coil",texture:[["copper_wire",1]],inCreative:false}
],"wire");

Tooltip.tier(ItemID.wireCopper,2);
MachineRegistry.registerEUWire(BlockID.wireCopper,power(2));
TileRenderer.setupWireModel(BlockID.wireCopper,0,0.25,"eu-wire");
TileRenderer.setupWireModel(BlockID.wireCopper,1,0.3125,"eu-wire");

Item.registerUseFunction("wireCopper",function(coords,item,block){
    var place = coords;
    if(!canTileBeReplaced(block.id,block.data)){
        place = coords.relative;
        block = World.getBlock(place.x,place.y,place.z);
        if(!canTileBeReplaced(block.id,block.data)) return;
    }
    
    World.setBlock(place.x,place.y,place.z,BlockID.wireCopper,0);
    Player.decreaseCarriedItem(1);
    EnergyTypeRegistry.onWirePlaced(place.x,place.y,place.z);
});

Block.registerDropFunction("wireCopper",function(coords,id,data){
    if(data == 1) return [[ItemID.wireCopper,1,0],[171,1,15]];
    return [[ItemID.wireCopper,1,0]];
});

// 金导线
IDRegistry.genItemID("wireGold");
Item.createItem("wireGold","Gold Coil",{name:"gold_wire"});

IDRegistry.genBlockID("wireGold");
Block.createBlock("wireGold",[
    {name:"Gold Coil",texture:[["gold_wire",0]],inCreative:false},
    {name:"Gold Coil",texture:[["gold_wire",1]],inCreative:false}
],"wire");

Tooltip.tier(ItemID.wireGold,3);
MachineRegistry.registerEUWire(BlockID.wireGold,power(3));
TileRenderer.setupWireModel(BlockID.wireGold,0,0.375,"eu-wire");
TileRenderer.setupWireModel(BlockID.wireGold,1,0.4375,"eu-wire");

Item.registerUseFunction("wireGold",function(coords,item,block){
    var place = coords;
    if(!canTileBeReplaced(block.id,block.data)){
        place = coords.relative;
        block = World.getBlock(place.x,place.y,place.z);
        if(!canTileBeReplaced(block.id,block.data)) return;
    }

    World.setBlock(place.x,place.y,place.z,BlockID.wireGold,0);
    Player.decreaseCarriedItem(1);
    EnergyTypeRegistry.onWirePlaced(place.x,place.y,place.z);
});

Block.registerDropFunction("wireGold",function(coords,id,data){
    if(data == 1) return [[ItemID.wireGold,1,0],[171,1,15]];
    return [[ItemID.wireGold,1,0]];
});

// 钢导线
IDRegistry.genItemID("wireSteel");
Item.createItem("wireSteel","Steel Coil",{name:"steel_wire"});

IDRegistry.genBlockID("wireSteel");
Block.createBlock("wireSteel",[
    {name:"Steel Coil",texture:[["steel_wire",0]],inCreative:false},
    {name:"Steel Coil",texture:[["steel_wire",1]],inCreative:false}
],"wire");

Tooltip.tier(ItemID.wireSteel,4);
MachineRegistry.registerEUWire(BlockID.wireSteel,power(4));
TileRenderer.setupWireModel(BlockID.wireSteel,0,0.375,"eu-wire");
TileRenderer.setupWireModel(BlockID.wireSteel,1,0.4375,"eu-wire");

Item.registerUseFunction("wireSteel",function(coords,item,block){
    var place = coords;
    if(!canTileBeReplaced(block.id,block.data)){
        place = coords.relative;
        block = World.getBlock(place.x,place.y,place.z);
        if(!canTileBeReplaced(block.id,block.data)) return;
    }
    
    World.setBlock(place.x,place.y,place.z,BlockID.wireSteel,0);
    Player.decreaseCarriedItem(1);
    EnergyTypeRegistry.onWirePlaced(place.x,place.y,place.z);
});

Block.registerDropFunction("wireSteel",function(coords,id,data){
    if(data == 1) return [[ItemID.wireSteel,1,0],[171,1,15]];
    return [[ItemID.wireSteel,1,0]];
});

// 钨导线
IDRegistry.genItemID("wireTungsten");
Item.createItem("wireTungsten","Tungsten Coil",{name:"tungsten_wire"});

IDRegistry.genBlockID("wireTungsten");
Block.createBlock("wireTungsten",[
    {name:"Tungsten Coil",texture:[["tungsten_wire",0]],inCreative:false},
    {name:"Tungsten Coil",texture:[["tungsten_wire",1]],inCreative:false}
],"wire");

Tooltip.tier(ItemID.wireTungsten,5);
MachineRegistry.registerEUWire(BlockID.wireTungsten,power(5));
TileRenderer.setupWireModel(BlockID.wireTungsten,0,0.5,"eu-wire");
TileRenderer.setupWireModel(BlockID.wireTungsten,1,0.5625,"eu-wire");

Item.registerUseFunction("wireTungsten",function(coords,item,block){
    var place = coords;
    if(!canTileBeReplaced(block.id,block.data)){
        place = coords.relative;
        block = World.getBlock(place.x,place.y,place.z);
        if(!canTileBeReplaced(block.id,block.data)) return;
    }
    
    World.setBlock(place.x,place.y,place.z,BlockID.wireTungsten,0);
    Player.decreaseCarriedItem(1);
    EnergyTypeRegistry.onWirePlaced(place.x,place.y,place.z);
});

Block.registerDropFunction("wireTungsten",function(coords,id,data){
    if(data == 1) return [[ItemID.wireTungsten,1,0],[171,1,15]];
    return [[ItemID.wireTungsten,1,0]];
});

Callback.addCallback("PreLoaded",function(){
    Item.addCreativeGroup("wire",Translation.translate("Wire"),[
        ItemID.wireTin,
        ItemID.wireCopper,
        ItemID.wireGold,
        ItemID.wireSteel,
        ItemID.wireTungsten
    ]);

    RecipeRegistry.addWiremillRecipe({id:ItemID.plateTin,count:1,data:0},{id:ItemID.wireTin,count:2,data:0});
    RecipeRegistry.addWiremillRecipe({id:ItemID.plateCopper,count:1,data:0},{id:ItemID.wireCopper,count:2,data:0});
    RecipeRegistry.addWiremillRecipe({id:ItemID.plateGold,count:1,data:0},{id:ItemID.wireGold,count:2,data:0});
    RecipeRegistry.addWiremillRecipe({id:ItemID.plateSteel,count:1,data:0},{id:ItemID.wireSteel,count:2,data:0});
    RecipeRegistry.addWiremillRecipe({id:ItemID.plateTungsten,count:1,data:0},{id:ItemID.wireTungsten,count:2,data:0});

    Recipes.addShaped({id:ItemID.wireTin,count:2,data:0},[" a ","aba"," a "],["a",ItemID.stickTin,0,"b",5,-1]);
    Recipes.addShaped({id:ItemID.wireCopper,count:2,data:0},[" a ","aba"," a "],["a",ItemID.stickCopper,0,"b",5,-1]);
    Recipes.addShaped({id:ItemID.wireGold,count:2,data:0},[" a ","aba"," a "],["a",ItemID.stickGold,0,"b",5,-1]);
    Recipes.addShaped({id:ItemID.wireSteel,count:2,data:0},[" a ","aba"," a "],["a",ItemID.stickSteel,0,"b",5,-1]);
    Recipes.addShaped({id:ItemID.wireTungsten,count:2,data:0},[" a ","aba"," a "],["a",ItemID.stickTungsten,0,"b",5,-1]);
});




// file: item/armor/powered.js

var POWERED_FUNCS = {
    hurt:function(params,slot,index,maxDamage){
        if(slot.data < maxDamage){
            Player.addEffect(10,params.damage,20);
            Player.addEffect(11,params.damage,20);

            var health = Player.getHealth();
            if(health <= 20) Player.setHealth(Math.min(20 - health,params.damage + health));
            
            var data = Math.min(slot.data + (params.damage * 16),maxDamage);
            Player.setArmorSlot(index,slot.id,slot.count,data,slot.extra);
        }

        return false;
    },

    tick:function(slot,index,maxDamage){
        if(World.getThreadTime()%20 == 0){
            var item = Player.getCarriedItem();
            if(ChargeItemRegistry.isValidItem(item.id,"Eu",1,"tool")){
                var energy = ChargeItemRegistry.addEnergyTo(item,"Eu",maxDamage - slot.data,power(2),1);
                if(energy > 0){
                    Player.setCarriedItem(item.id,1,item.data,item.extra);
                    Player.setArmorSlot(index,slot.id,1,slot.data + energy,slot.extra);
                }
            }
        }

        return false;
    }
}

IDRegistry.genItemID("helmetPowered");
IDRegistry.genItemID("chestplatePowered");
IDRegistry.genItemID("leggingsPowered");
IDRegistry.genItemID("bootsPowered");

Item.createArmorItem("helmetPowered","Powered Helmet",{name:"powered_helmet"},{type:"helmet",armor:10,durability:262144,texture:"armor/powered_1.png",isTech:true});
Item.createArmorItem("chestplatePowered","Powered Chestplate",{name:"powered_chestplate"},{type:"chestplate",armor:13,durability:262144,texture:"armor/powered_1.png",isTech:true});
Item.createArmorItem("leggingsPowered","Powered Leggings",{name:"powered_leggings"},{type:"leggings",armor:12,durability:262144,texture:"armor/powered_2.png",isTech:true});
Item.createArmorItem("bootsPowered","Powered Boots",{name:"powered_boots"},{type:"boots",armor:9,durability:262144,texture:"armor/powered_1.png",isTech:true});

ChargeItemRegistry.registerItem(ItemID.helmetPowered,"Eu",262144,power(2),2,"armor",true);
ChargeItemRegistry.registerItem(ItemID.chestplatePowered,"Eu",262144,power(2),2,"armor",true);
ChargeItemRegistry.registerItem(ItemID.leggingsPowered,"Eu",262144,power(2),2,"armor",true);
ChargeItemRegistry.registerItem(ItemID.bootsPowered,"Eu",262144,power(2),2,"armor",true);

Armor.registerFuncs("helmetPowered"    ,POWERED_FUNCS);
Armor.registerFuncs("chestplatePowered",POWERED_FUNCS);
Armor.registerFuncs("leggingsPowered"  ,POWERED_FUNCS);
Armor.registerFuncs("bootsPowered"     ,POWERED_FUNCS);

Item.setItemName(ItemID.chestplatePowered,Tooltip.energyStored);
Item.setItemName(ItemID.helmetPowered    ,Tooltip.energyStored);
Item.setItemName(ItemID.leggingsPowered  ,Tooltip.energyStored);
Item.setItemName(ItemID.bootsPowered     ,Tooltip.energyStored);




// file: item/battery/lithium_battery.js

// [锂电池]Lithium Battery
IDRegistry.genItemID("lithiumBattery");
Item.createItem("lithiumBattery","Lithium Battery",{name:"lithium_battery"},{stack:1,isTech:true});
ChargeItemRegistry.registerItem(ItemID.lithiumBattery,"Eu",16384,power(1),1,"storage",true);
Tool.registerTool(ItemID.lithiumBattery,"Battery");

Tooltip.tier(ItemID.lithiumBattery,1);
Item.setItemName(ItemID.lithiumBattery,Tooltip.energyStored);

Item.registerIconOverrideFunction(ItemID.lithiumBattery,function(item,name){
	var capacity = Item.getMaxDamage(item.id) - 1,energy = capacity - item.data + 1;
	return {name:"lithium_battery",meta:parseInt(energy / capacity * 6)}
});

Callback.addCallback("PreLoaded",function(){
    Item.addCreativeGroup("battery",Translation.translate("Battery"),[ItemID.lithiumBattery]);

    Recipes.addShaped({id:ItemID.lithiumBattery,count:1,data:Item.getMaxDamage(ItemID.lithiumBattery)},[
		" a ",
		"bcb",
		"bcb"
	],["a",ItemID.wireTin,0,"b",ItemID.plateLeadAntimony,0,"c",ItemID.dustLithium,0]);
});




// file: item/battery/enete_battery.js

// [恩奈特电池]Enete Battery
IDRegistry.genItemID("eneteBattery");
Item.createItem("eneteBattery","Enete Battery",{name:"enete_battery"},{stack:1,isTech:true});
ChargeItemRegistry.registerItem(ItemID.eneteBattery,"Eu",262144,power(2),2,"storage",true);
Tool.registerTool(ItemID.eneteBattery,"Battery");

Tooltip.tier(ItemID.eneteBattery,2);
Item.setItemName(ItemID.eneteBattery,Tooltip.energyStored);

Item.registerIconOverrideFunction(ItemID.eneteBattery,function(item,name){
	var capacity = Item.getMaxDamage(item.id) - 1,energy = capacity - item.data + 1;
	return {name:"enete_battery",meta:parseInt(energy / capacity * 9)}
});

Callback.addCallback("PreLoaded",function(){
    Item.addCreativeGroup("battery",Translation.translate("Battery"),[ItemID.eneteBattery]);

    Recipes.addShaped({id:ItemID.eneteBattery,count:1,data:Item.getMaxDamage(ItemID.eneteBattery)},[
		"bab",
		"cdc",
		"bab"
	],["a",ItemID.partEnete,0,"b",ItemID.plateEnete,0,"c",ItemID.stickEnete,0,"d",ItemID.dustEnete,0]);
});




// file: item/battery/energy_crystal.js

// [能量水晶]Energy Crystal
IDRegistry.genItemID("energyCrystal");
Item.createItem("energyCrystal","Energy Crystal",{name:"energy_crystal"},{stack:1,isTech:true});
ChargeItemRegistry.registerItem(ItemID.energyCrystal,"Eu",4194304,power(3),3,"storage",true);
Tool.registerTool(ItemID.energyCrystal,"Battery");

Tooltip.tier(ItemID.energyCrystal,3);
Item.setItemName(ItemID.energyCrystal,Tooltip.energyStored);

Callback.addCallback("PreLoaded",function(){
    Item.addCreativeGroup("battery",Translation.translate("Battery"),[ItemID.energyCrystal]);

    RecipeRegistry.addAutoclaveRecipe({id:ItemID.dustEnergium,count:9,data:0},{id:ItemID.energyCrystal,count:1,data:Item.getMaxDamage(ItemID.energyCrystal)});
});




// file: item/battery/lapotron_crystal.js

// [兰波顿水晶]Lapotron Crystal
IDRegistry.genItemID("lapotronCrystal");
Item.createItem("lapotronCrystal","Lapotron Crystal",{name:"lapotron_crystal"},{stack:1,isTech:true});
ChargeItemRegistry.registerItem(ItemID.lapotronCrystal,"Eu",67108864,power(4),4,"storage",true);
Tool.registerTool(ItemID.lapotronCrystal,"Battery");

Tooltip.tier(ItemID.lapotronCrystal,4);
Item.setItemName(ItemID.lapotronCrystal,Tooltip.energyStored);

Callback.addCallback("PreLoaded",function(){
	Item.addCreativeGroup("battery",Translation.translate("Battery"),[ItemID.lapotronCrystal]);

	Recipes.addShaped({id:ItemID.lapotronCrystal,count:1,data:Item.getMaxDamage(ItemID.lapotronCrystal)},[
		"bab",
		"cdc",
		"bab"
	],["a",ItemID.circuitEnergyStorage,0,"b",ItemID.plateLapis,0,"c",ItemID.stickLapis,0,"d",ItemID.energyCrystal,0]);
});




// file: item/reactor/coolant_cell_helium.js

// 冷却单元(氦)
IDRegistry.genItemID("coolantCellHelium");
Item.createItem("coolantCellHelium","Coolant Cell (Helium)",{name:"coolant_cell_helium",meta:0});

Callback.addCallback("PreLoaded",function(){
    Item.addCreativeGroup("reactor",Translation.translate("Reactor"),[ItemID.coolantCellHelium]);

    Recipes.addShaped({id:ItemID.coolantCellHelium,count:1,data:0},[
        " a ",
        "aba",
        " a "
    ],["a",ItemID.plateTin,0,"b",ItemID.cellHelium,0]);
});

ReactorRegistry.registerPrototype(ItemID.coolantCellHelium,{
    getDurability:function(){
        return 40000;
    },

    breakDurability:function(side){
        var damage = 0;
        for(let i in side){
            if(ReactorRegistry.getType(side[i].id) == "fuel-rod") damage += 40;
        }
        return damage;
    },

    getCooling:function(side){
        var cooling = 0;
        for(let i in side){
            if(ReactorRegistry.getType(side[i].id) == "fuel-rod") cooling += 40;
        }
        return cooling;
    },

    type:"coolant-cell"
});

// 二联冷却单元(氦)
IDRegistry.genItemID("coolantCellDualHelium");
Item.createItem("coolantCellDualHelium","Dual Coolant Cell (Helium)",{name:"coolant_cell_helium",meta:1});

Callback.addCallback("PreLoaded",function(){
    Item.addCreativeGroup("reactor",Translation.translate("Reactor"),[ItemID.coolantCellDualHelium]);

    Recipes.addShaped({id:ItemID.coolantCellDualHelium,count:1,data:0},[
        "aba"
    ],["a",ItemID.coolantCellHelium,0,"b",ItemID.plateTin,0]);
});

ReactorRegistry.registerPrototype(ItemID.coolantCellDualHelium,{
    getDurability:function(){
        return 80000;
    },

    breakDurability:function(side){
        var damage = 0;
        for(let i in side){
            if(ReactorRegistry.getType(side[i].id) == "fuel-rod") damage += 80;
        }
        return damage;
    },

    getCooling:function(side){
        var cooling = 0;
        for(let i in side){
            if(ReactorRegistry.getType(side[i].id) == "fuel-rod") cooling += 80;
        }
        return cooling;
    },

    type:"coolant-cell"
});

// 四联冷却单元(氦)
IDRegistry.genItemID("coolantCellQuadHelium");
Item.createItem("coolantCellQuadHelium","Quad Coolant Cell (Helium)",{name:"coolant_cell_helium",meta:2});

Callback.addCallback("PreLoaded",function(){
    Item.addCreativeGroup("reactor",Translation.translate("Reactor"),[ItemID.coolantCellQuadHelium]);

    Recipes.addShaped({id:ItemID.coolantCellQuadHelium,count:1,data:0},[
        "aba",
        "cbc",
        "aba"
    ],["a",ItemID.coolantCellHelium,0,"b",ItemID.plateTin,0,"c",ItemID.plateCopper,0]);

    Recipes.addShaped({id:ItemID.coolantCellQuadHelium,count:1,data:0},[
        " a ",
        "cbc",
        " a "
    ],["a",ItemID.coolantCellDualHelium,0,"b",ItemID.plateTin,0,"c",ItemID.plateCopper,0]);
});

ReactorRegistry.registerPrototype(ItemID.coolantCellQuadHelium,{
    getDurability:function(){
        return 160000;
    },

    breakDurability:function(side){
        var damage = 0;
        for(let i in side){
            if(ReactorRegistry.getType(side[i].id) == "fuel-rod") damage += 160;
        }
        return damage;
    },

    getCooling:function(side){
        var cooling = 0;
        for(let i in side){
            if(ReactorRegistry.getType(side[i].id) == "fuel-rod") cooling += 160;
        }
        return cooling;
    },

    type:"coolant-cell"
});




// file: item/reactor/coolant_cell_water.js

// 冷却单元(水)
IDRegistry.genItemID("coolantCellWater");
Item.createItem("coolantCellWater","Coolant Cell (Water)",{name:"coolant_cell_water",meta:0});

Callback.addCallback("PreLoaded",function(){
    Item.addCreativeGroup("reactor",Translation.translate("Reactor"),[ItemID.coolantCellWater]);

    Recipes.addShaped({id:ItemID.coolantCellWater,count:1,data:0},[
        " a ",
        "aba",
        " a "
    ],["a",ItemID.plateTin,0,"b",ItemID.cellWater,0]);
});

ReactorRegistry.registerPrototype(ItemID.coolantCellWater,{
    getDurability:function(){
        return 10000;
    },

    breakDurability:function(side){
        var damage = 0;
        for(let i in side){
            if(ReactorRegistry.getType(side[i].id) == "fuel-rod") damage += 10;
        }
        return damage;
    },

    getCooling:function(side){
        var cooling = 0;
        for(let i in side){
            if(ReactorRegistry.getType(side[i].id) == "fuel-rod") cooling += 10;
        }
        return cooling;
    },

    type:"coolant-cell"
});

// 二联冷却单元(水)
IDRegistry.genItemID("coolantCellDualWater");
Item.createItem("coolantCellDualWater","Dual Coolant Cell (Water)",{name:"coolant_cell_water",meta:1});

Callback.addCallback("PreLoaded",function(){
    Item.addCreativeGroup("reactor",Translation.translate("Reactor"),[ItemID.coolantCellDualWater]);

    Recipes.addShaped({id:ItemID.coolantCellDualWater,count:1,data:0},[
        "aba"
    ],["a",ItemID.coolantCellWater,0,"b",ItemID.plateTin,0]);
});

ReactorRegistry.registerPrototype(ItemID.coolantCellDualWater,{
    getDurability:function(){
        return 20000;
    },

    breakDurability:function(side){
        var damage = 0;
        for(let i in side){
            if(ReactorRegistry.getType(side[i].id) == "fuel-rod") damage += 20;
        }
        return damage;
    },

    getCooling:function(side){
        var cooling = 0;
        for(let i in side){
            if(ReactorRegistry.getType(side[i].id) == "fuel-rod") cooling += 20;
        }
        return cooling;
    },

    type:"coolant-cell"
});

// 四联冷却单元(水)
IDRegistry.genItemID("coolantCellQuadWater");
Item.createItem("coolantCellQuadWater","Quad Coolant Cell (Water)",{name:"coolant_cell_water",meta:2});

Callback.addCallback("PreLoaded",function(){
    Item.addCreativeGroup("reactor",Translation.translate("Reactor"),[ItemID.coolantCellQuadWater]);

    Recipes.addShaped({id:ItemID.coolantCellQuadWater,count:1,data:0},[
        "aba",
        "cbc",
        "aba"
    ],["a",ItemID.coolantCellWater,0,"b",ItemID.plateTin,0,"c",ItemID.plateCopper,0]);

    Recipes.addShaped({id:ItemID.coolantCellQuadWater,count:1,data:0},[
        " a ",
        "cbc",
        " a "
    ],["a",ItemID.coolantCellDualWater,0,"b",ItemID.plateTin,0,"c",ItemID.plateCopper,0]);
});

ReactorRegistry.registerPrototype(ItemID.coolantCellQuadWater,{
    getDurability:function(){
        return 40000;
    },

    breakDurability:function(side){
        var damage = 0;
        for(let i in side){
            if(ReactorRegistry.getType(side[i].id) == "fuel-rod") damage += 40;
        }
        return damage;
    },

    getCooling:function(side){
        var cooling = 0;
        for(let i in side){
            if(ReactorRegistry.getType(side[i].id) == "fuel-rod") cooling += 40;
        }
        return cooling;
    },

    type:"coolant-cell"
});




// file: item/reactor/fuel_rod_uranium.js

// 燃料棒(铀)
IDRegistry.genItemID("fuelRodUranium");
Item.createItem("fuelRodUranium","Fuel Rod(Uranium)",{name:"fuel_rod_uranium",meta:0});

Callback.addCallback("PreLoaded",function(){
    Item.addCreativeGroup("reactor",Translation.translate("Reactor"),[ItemID.fuelRodUranium]);
});

ReactorRegistry.registerPrototype(ItemID.fuelRodUranium,{
    getDurability:function(){
        return 10000;
    },

    getHeat:function(side){
        var heat = 5,pulse = 1;
        for(let i in side){
            if(ReactorRegistry.getType(side[i].id) == "fuel-rod") pulse++;
        }
        return heat * pulse;
    },

    getEnergyOutput:function(side){
        var output = 5,pulse = 1;
        for(let i in side){
            if(ReactorRegistry.getType(side[i].id) == "fuel-rod") pulse++;
        }
        return output * pulse;
    },

    destroy:function(side,slot){
        slot.id = ItemID.fuelRodDepletedUranium;
    },

    type:"fuel-rod"
});

// 双联燃料棒(铀)
IDRegistry.genItemID("fuelRodDualUranium");
Item.createItem("fuelRodDualUranium","Dual Fuel Rod(Uranium)",{name:"fuel_rod_uranium",meta:1});

Callback.addCallback("PreLoaded",function(){
    Item.addCreativeGroup("reactor",Translation.translate("Reactor"),[ItemID.fuelRodDualUranium]);

    Recipes.addShaped({id:ItemID.fuelRodDualUranium,count:1,data:0},[
        "aba"
    ],["a",ItemID.fuelRodUranium,0,"b",ItemID.plateIron,0]);
});

ReactorRegistry.registerPrototype(ItemID.fuelRodDualUranium,{
    getDurability:function(){
        return 20000;
    },

    getHeat:function(side){
        var heat = 10,pulse = 1;
        for(let i in side){
            if(ReactorRegistry.getType(side[i].id) == "fuel-rod") pulse++;
        }
        return heat * pulse;
    },

    getEnergyOutput:function(side){
        var output = 10,pulse = 1;
        for(let i in side){
            if(ReactorRegistry.getType(side[i].id) == "fuel-rod") pulse++;
        }
        return output * pulse;
    },

    destroy:function(side,slot){
        slot.id = ItemID.fuelRodDualDepletedUranium;
    },

    type:"fuel-rod"
});

// 四联燃料棒(铀)
IDRegistry.genItemID("fuelRodQuadUranium");
Item.createItem("fuelRodQuadUranium","Quad Fuel Rod(Uranium)",{name:"fuel_rod_uranium",meta:2});

Callback.addCallback("PreLoaded",function(){
    Item.addCreativeGroup("reactor",Translation.translate("Reactor"),[ItemID.fuelRodQuadUranium]);

    Recipes.addShaped({id:ItemID.fuelRodQuadUranium,count:1,data:0},[
        "aba",
        "cbc",
        "aba"
    ],["a",ItemID.fuelRodUranium,0,"b",ItemID.plateIron,0,"c",ItemID.plateCopper,0]);

    Recipes.addShaped({id:ItemID.fuelRodQuadUranium,count:1,data:0},[
        " a ",
        "cbc",
        " a "
    ],["a",ItemID.fuelRodDualUranium,0,"b",ItemID.plateIron,0,"c",ItemID.plateCopper,0]);
});

ReactorRegistry.registerPrototype(ItemID.fuelRodQuadUranium,{
    getDurability:function(){
        return 40000;
    },

    getHeat:function(side){
        var heat = 20;
        for(let i in side){
            if(ReactorRegistry.getType(side[i].id) == "fuel-rod") heat += 20;
        }
        return heat;
    },

    getEnergyOutput:function(side){
        var output = 20;
        for(let i in side){
            if(ReactorRegistry.getType(side[i].id) == "fuel-rod") output += 20;
        }
        return output;
    },

    destroy:function(side,slot){
        slot.id = ItemID.fuelRodQuadDepletedUranium;
    },

    type:"fuel-rod"
});

IDRegistry.genItemID("fuelRodDepletedUranium");
Item.createItem("fuelRodDepletedUranium","Fuel Rod(Depleted Uranium)",{name:"fuel_rod_depleted_uranium",meta:0});

IDRegistry.genItemID("fuelRodDualDepletedUranium");
Item.createItem("fuelRodDualDepletedUranium","Dual Fuel Rod(Depleted Uranium)",{name:"fuel_rod_depleted_uranium",meta:1});

IDRegistry.genItemID("fuelRodQuadDepletedUranium");
Item.createItem("fuelRodQuadDepletedUranium","Quad Fuel Rod(Depleted Uranium)",{name:"fuel_rod_depleted_uranium",meta:2});

Callback.addCallback("PreLoaded",function(){
    Item.addCreativeGroup("reactor",Translation.translate("Reactor"),[
        ItemID.fuelRodDepletedUranium,
        ItemID.fuelRodDualDepletedUranium,
        ItemID.fuelRodQuadDepletedUranium
    ]);
});




// file: item/reactor/heat_sink.js

// [散热片]Heat Sink
IDRegistry.genItemID("heatSink");
Item.createItem("heatSink","Heat Sink",{name:"heat_sink"});

Callback.addCallback("PreLoaded",function(){
    Item.addCreativeGroup("reactor",Translation.translate("Reactor"),[ItemID.heatSink]);

	Recipes.addShaped({id:ItemID.heatSink,count:1,data:0},[
        "aba",
        "bcb",
        "aba"
    ],["a",ItemID.stickIron,0,"b",ItemID.plateIron,0,"c",ItemID.electricMotor,0]);
});

ReactorRegistry.registerPrototype(ItemID.heatSink,{
    getDurability:function(){
        return 10000;
    },

    breakDurability:function(side){
        var heat = 0;
        for(let i in side){
            var type = ReactorRegistry.getType(side[i].id);
            if(type == "fuel-rod") heat += 5;
        }
        return heat;
    },

    getCooling:function(side){
        var heat = 0;
        for(let i in side){
            var type = ReactorRegistry.getType(side[i].id);
            if(type == "fuel-rod") heat += 5;
        }
        return heat;
    },

    type:"heat-sink"
});




// file: item/reactor/neutron_reflector.js

// 中子反射板
IDRegistry.genItemID("neutronReflector");
Item.createItem("neutronReflector","Neutron Reflector",{name:"neutron_reflector"});

Callback.addCallback("PreLoaded",function(){
    Item.addCreativeGroup("reactor",Translation.translate("Reactor"),[ItemID.neutronReflector]);

	Recipes.addShaped({id:ItemID.neutronReflector,count:1,data:0},[
        "aba",
        "bcb",
        "aba"
    ],["a",ItemID.dustTin,0,"b",ItemID.dustCarbon,0,"c",ItemID.plateCopper,0]);
});

ReactorRegistry.registerPrototype(ItemID.neutronReflector,{
    getDurability:function(){
        return 1000;
    },

    breakDurability:function(side){
        var damage = 0;
        for(let i in side){
            if(ReactorRegistry.getType(side[i].id) == "fuel-rod") damage += 1;
        }
        return damage;
    },

    getEnergyOutput:function(side,slot){
        var output = 0;
        for(let i in side){
            if(ReactorRegistry.getType(side[i].id) == "fuel-rod"){
                var reactor = ReactorRegistry.getPrototype(side[i].id);
                output += reactor.getEnergyOutput(side);
            }
        }
        return output;
    },

    type:"neutron-reflector"
});




// file: item/resource/crushed.js

// 粉碎铜矿石
IDRegistry.genItemID("crushedCopper");
IDRegistry.genItemID("crushedPurifiedCopper");
Item.createItem("crushedCopper","Crushed Copper Ore",{name:"crushed_copper"});
Item.createItem("crushedPurifiedCopper","Purified Crushed Copper Ore",{name:"purified_copper"});

// 粉碎锡石矿石
IDRegistry.genItemID("crushedCassiterite");
IDRegistry.genItemID("crushedPurifiedCassiterite");
Item.createItem("crushedCassiterite","Crushed Cassiterite Ore",{name:"crushed_cassiterite"});
Item.createItem("crushedPurifiedCassiterite","Purified Crushed Cassiterite Ore",{name:"purified_cassiterite"});

//粉碎方铅矿石
IDRegistry.genItemID("crushedGalena");
IDRegistry.genItemID("crushedPurifiedGalena");
Item.createItem("crushedGalena","Crushed Galena Ore",{name:"crushed_galena"});
Item.createItem("crushedPurifiedGalena","Purified Crushed Galena Ore",{name:"purified_galena"});

// 粉碎铁矿石
IDRegistry.genItemID("crushedIron");
IDRegistry.genItemID("crushedPurifiedIron");
Item.createItem("crushedIron","Crushed Iron Ore",{name:"crushed_iron"});
Item.createItem("crushedPurifiedIron","Purified Crushed Iron Ore",{name:"purified_iron"});

// 粉碎金矿石
IDRegistry.genItemID("crushedGold");
IDRegistry.genItemID("crushedPurifiedGold");
Item.createItem("crushedGold","Crushed Gold Ore",{name:"crushed_gold"});
Item.createItem("crushedPurifiedGold","Purified Crushed Gold Ore",{name:"purified_gold"});

// 粉碎锂辉石矿石
IDRegistry.genItemID("crushedSpodumene");
IDRegistry.genItemID("crushedPurifiedSpodumene");
Item.createItem("crushedSpodumene","Crushed Spodumene Ore",{name:"crushed_spodumene"});
Item.createItem("crushedPurifiedSpodumene","Purified Crushed Spodumene Ore",{name:"purified_spodumene"});

// 粉碎钨矿石
IDRegistry.genItemID("crushedTungsten");
IDRegistry.genItemID("crushedPurifiedTungsten");
Item.createItem("crushedTungsten","Crushed Tungsten Ore",{name:"crushed_tungsten"});
Item.createItem("crushedPurifiedTungsten","Purified Crushed Tungsten Ore",{name:"purified_tungsten"});

// 粉碎铀矿石
IDRegistry.genItemID("crushedUranium");
IDRegistry.genItemID("crushedPurifiedUranium");
Item.createItem("crushedUranium","Crushed Uranium Ore",{name:"crushed_uranium"});
Item.createItem("crushedPurifiedUranium","Purified Crushed Uranium Ore",{name:"purified_uranium"});

// 粉碎银矿石
IDRegistry.genItemID("crushedSilver");
IDRegistry.genItemID("crushedPurifiedSilver");
Item.createItem("crushedSilver","Crushed Silver Ore",{name:"crushed_silver"});
Item.createItem("crushedPurifiedSilver","Purified Crushed Silver Ore",{name:"purified_silver"});

// 粉碎黝铜矿石
IDRegistry.genItemID("crushedTetrahedrite");
IDRegistry.genItemID("crushedPurifiedTetrahedrite");
Item.createItem("crushedTetrahedrite","Crushed Tetrahedrite Ore",{name:"crushed_tetrahedrite"});
Item.createItem("crushedPurifiedTetrahedrite","Purified Crushed Tetrahedrite Ore",{name:"purified_tetrahedrite"});

// 粉碎铝土矿石
IDRegistry.genItemID("crushedBauxite");
IDRegistry.genItemID("crushedPurifiedBauxite");
Item.createItem("crushedBauxite","Crushed Bauxite Ore",{name:"crushed_bauxite"});
Item.createItem("crushedPurifiedBauxite","Purified Crushed Bauxite Ore",{name:"purified_bauxite"});

Callback.addCallback("PreLoaded",function(){
    Item.addCreativeGroup("crushed",Translation.translate("Crushed Ore"),[
        ItemID.crushedCopper,
        ItemID.crushedCassiterite,
        ItemID.crushedGalena,
        ItemID.crushedIron,
        ItemID.crushedGold,
        ItemID.crushedSpodumene,
        ItemID.crushedTungsten,
        ItemID.crushedUranium,
        ItemID.crushedSilver,
        ItemID.crushedTetrahedrite,
        ItemID.crushedBauxite
    ]);

    Item.addCreativeGroup("purified",Translation.translate("Purified Crushed Ore"),[
        ItemID.crushedPurifiedCopper,
        ItemID.crushedPurifiedCassiterite,
        ItemID.crushedPurifiedGalena,
        ItemID.crushedPurifiedIron,
        ItemID.crushedPurifiedGold,
        ItemID.crushedPurifiedSpodumene,
        ItemID.crushedPurifiedTungsten,
        ItemID.crushedPurifiedUranium,
        ItemID.crushedPurifiedSilver,
        ItemID.crushedPurifiedTetrahedrite,
        ItemID.crushedPurifiedBauxite
    ]);

    Recipes.addFurnace(ItemID.crushedCopper,ItemID.ingotCopper);
    Recipes.addFurnace(ItemID.crushedCassiterite,ItemID.ingotTin);
    Recipes.addFurnace(ItemID.crushedGalena,ItemID.ingotLead);
    Recipes.addFurnace(ItemID.crushedIron,265);
    Recipes.addFurnace(ItemID.crushedGold,266);
    Recipes.addFurnace(ItemID.crushedUranium,ItemID.ingotUranium);
    Recipes.addFurnace(ItemID.crushedSilver,ItemID.ingotSilver);
    Recipes.addFurnace(ItemID.crushedTetrahedrite,ItemID.ingotCopper);
    Recipes.addFurnace(ItemID.crushedBauxite,ItemID.ingotAluminium);

    Recipes.addFurnace(ItemID.crushedPurifiedCopper,ItemID.ingotCopper);
    Recipes.addFurnace(ItemID.crushedPurifiedCassiterite,ItemID.ingotTin);
    Recipes.addFurnace(ItemID.crushedPurifiedGalena,ItemID.ingotLead);
    Recipes.addFurnace(ItemID.crushedPurifiedIron,265);
    Recipes.addFurnace(ItemID.crushedPurifiedGold,266);
    Recipes.addFurnace(ItemID.crushedPurifiedUranium,ItemID.ingotUranium);
    Recipes.addFurnace(ItemID.crushedPurifiedSilver,ItemID.ingotSilver);
    Recipes.addFurnace(ItemID.crushedPurifiedTetrahedrite,ItemID.ingotCopper);
    Recipes.addFurnace(ItemID.crushedPurifiedBauxite,ItemID.ingotAluminium);

    RecipeRegistry.addAutoSaieveRecipe({id:13,data:0},[
        {id:ItemID.crushedCopper,minCount:1,maxCount:1,data:0,random:16},
        {id:ItemID.crushedCassiterite,minCount:1,maxCount:1,data:0,random:16},
        {id:ItemID.crushedGalena,minCount:1,maxCount:1,data:0,random:16},
        {id:ItemID.crushedIron,minCount:1,maxCount:1,data:0,random:16},
        {id:ItemID.crushedGold,minCount:1,maxCount:1,data:0,random:16},
        {id:ItemID.crushedSpodumene,minCount:1,maxCount:1,data:0,random:16},
        {id:ItemID.crushedTungsten,minCount:1,maxCount:1,data:0,random:16},
        {id:ItemID.crushedUranium,minCount:1,maxCount:1,data:0,random:16},
        {id:ItemID.crushedSilver,minCount:1,maxCount:1,data:0,random:16},
        {id:ItemID.crushedTetrahedrite,minCount:1,maxCount:1,data:0,random:16},
        {id:ItemID.crushedBauxite,minCount:1,maxCount:1,data:0,random:16}
    ]);

    RecipeRegistry.addCrusherRecipe({id:BlockID.oreCopper,data:0},{id:ItemID.crushedCopper,count:2,data:0});
    RecipeRegistry.addCrusherRecipe({id:BlockID.oreCassiterite,data:0},{id:ItemID.crushedCassiterite,count:2,data:0});
    RecipeRegistry.addCrusherRecipe({id:BlockID.oreGalena,data:0},{id:ItemID.crushedGalena,count:2,data:0});
    RecipeRegistry.addCrusherRecipe({id:15,data:0},{id:ItemID.crushedIron,count:2,data:0});
    RecipeRegistry.addCrusherRecipe({id:14,data:0},{id:ItemID.crushedGold,count:2,data:0});
    RecipeRegistry.addCrusherRecipe({id:BlockID.oreSpodumene,data:0},{id:ItemID.crushedSpodumene,count:2,data:0});
    RecipeRegistry.addCrusherRecipe({id:BlockID.oreTungsten,data:0},{id:ItemID.crushedTungsten,count:2,data:0});
    RecipeRegistry.addCrusherRecipe({id:BlockID.oreUranium,data:0},{id:ItemID.crushedUranium,count:2,data:0});
    RecipeRegistry.addCrusherRecipe({id:BlockID.oreSilver,data:0},{id:ItemID.crushedSilver,count:2,data:0});
    RecipeRegistry.addCrusherRecipe({id:BlockID.oreTetrahedrite,data:0},{id:ItemID.crushedTetrahedrite,count:2,data:0});
    RecipeRegistry.addCrusherRecipe({id:BlockID.oreBauxite,data:0},{id:ItemID.crushedBauxite,count:2,data:0});

    var hammer = Tool.getAllTool("Hammer");
    for(let i in hammer){
        RecipeRegistry.addShapeless({id:ItemID.crushedCopper,count:1,data:0},[{id:BlockID.oreCopper,data:0}],hammer[i]);
        RecipeRegistry.addShapeless({id:ItemID.crushedCassiterite,count:1,data:0},[{id:BlockID.oreCassiterite,data:0}],hammer[i]);
        RecipeRegistry.addShapeless({id:ItemID.crushedGalena,count:1,data:0},[{id:BlockID.oreGalena,data:0}],hammer[i]);
        RecipeRegistry.addShapeless({id:ItemID.crushedIron,count:1,data:0},[{id:15,data:0}],hammer[i]);
        RecipeRegistry.addShapeless({id:ItemID.crushedGold,count:1,data:0},[{id:14,data:0}],hammer[i]);
        RecipeRegistry.addShapeless({id:ItemID.crushedSpodumene,count:1,data:0},[{id:BlockID.oreSpodumene,data:0}],hammer[i]);
        RecipeRegistry.addShapeless({id:ItemID.crushedTungsten,count:1,data:0},[{id:BlockID.oreTungsten,data:0}],hammer[i]);
        RecipeRegistry.addShapeless({id:ItemID.crushedUranium,count:1,data:0},[{id:BlockID.oreUranium,data:0}],hammer[i]);
        RecipeRegistry.addShapeless({id:ItemID.crushedSilver,count:1,data:0},[{id:BlockID.oreSilver,data:0}],hammer[i]);
        RecipeRegistry.addShapeless({id:ItemID.crushedTetrahedrite,count:1,data:0},[{id:BlockID.oreTetrahedrite,data:0}],hammer[i]);
        RecipeRegistry.addShapeless({id:ItemID.crushedBauxite,count:1,data:0},[{id:BlockID.oreBauxite,data:0}],hammer[i]);
    }

    RecipeRegistry.addBlastFurnaceRecipe({id:ItemID.crushedTungsten,data:0},[{id:ItemID.ingotTungsten,count:1,data:0},{id:ItemID.slag,count:1,data:0}]);
    RecipeRegistry.addBlastFurnaceRecipe({id:ItemID.crushedPurifiedTungsten,data:0},[{id:ItemID.ingotTungsten,count:1,data:0},{id:ItemID.slag,count:1,data:0}]);
    
    RecipeRegistry.addOreWasherRecipe({id:ItemID.crushedCopper,data:0},[{id:ItemID.crushedPurifiedCopper,count:1,data:0},{id:ItemID.dustSmallTin,count:1,data:0},{id:ItemID.dustStone,count:1,data:0}]);
    RecipeRegistry.addOreWasherRecipe({id:ItemID.crushedCassiterite,data:0},[{id:ItemID.crushedPurifiedCassiterite,count:1,data:0},{id:ItemID.dustSmallIron,count:1,data:0},{id:ItemID.dustStone,count:1,data:0}]);
    RecipeRegistry.addOreWasherRecipe({id:ItemID.crushedGalena,data:0},[{id:ItemID.crushedPurifiedGalena,count:1,data:0},{id:ItemID.dustSmallCopper,count:1,data:0},{id:ItemID.dustStone,count:1,data:0}]);
    RecipeRegistry.addOreWasherRecipe({id:ItemID.crushedIron,data:0},[{id:ItemID.crushedPurifiedIron,count:1,data:0},{id:ItemID.dustSmallGold,count:1,data:0},{id:ItemID.dustStone,count:1,data:0}]);
    RecipeRegistry.addOreWasherRecipe({id:ItemID.crushedGold,data:0},[{id:ItemID.crushedPurifiedGold,count:1,data:0},{id:ItemID.dustSmallSilver,count:1,data:0},{id:ItemID.dustStone,count:1,data:0}]);
    RecipeRegistry.addOreWasherRecipe({id:ItemID.crushedSpodumene,data:0},[{id:ItemID.crushedPurifiedSpodumene,count:1,data:0},{id:ItemID.dustSmallLithium,count:1,data:0},{id:ItemID.dustStone,count:1,data:0}]);
    RecipeRegistry.addOreWasherRecipe({id:ItemID.crushedTungsten,data:0},[{id:ItemID.crushedPurifiedTungsten,count:1,data:0},{id:ItemID.dustSmallTin,count:1,data:0},{id:ItemID.dustStone,count:1,data:0}]);
    RecipeRegistry.addOreWasherRecipe({id:ItemID.crushedUranium,data:0},[{id:ItemID.crushedPurifiedUranium,count:1,data:0},{id:ItemID.dustSmallUranium,count:1,data:0},{id:ItemID.dustStone,count:1,data:0}]);
    RecipeRegistry.addOreWasherRecipe({id:ItemID.crushedSilver,data:0},[{id:ItemID.crushedPurifiedSilver,count:1,data:0},{id:ItemID.dustSmallGold,count:1,data:0},{id:ItemID.dustStone,count:1,data:0}]);
    RecipeRegistry.addOreWasherRecipe({id:ItemID.crushedTetrahedrite,data:0},[{id:ItemID.crushedPurifiedTetrahedrite,count:1,data:0},{id:ItemID.dustSmallAntimony,count:1,data:0},{id:ItemID.dustStone,count:1,data:0}]);
    RecipeRegistry.addOreWasherRecipe({id:ItemID.crushedBauxite,data:0},[{id:ItemID.crushedPurifiedBauxite,count:1,data:0},{id:ItemID.dustSmallAntimony,count:1,data:0},{id:ItemID.dustStone,count:1,data:0}]);
    
    RecipeRegistry.addCentrifugeRecipe({id:ItemID.crushedCopper,count:1,data:0},[{id:ItemID.dustCopper,count:1,data:0},{id:ItemID.dustSmallTin,count:1,data:0},{id:ItemID.dustStone,count:1,data:0}]);
    RecipeRegistry.addCentrifugeRecipe({id:ItemID.crushedCassiterite,count:1,data:0},[{id:ItemID.dustTin,count:1,data:0},{id:ItemID.dustSmallIron,count:1,data:0},{id:ItemID.dustStone,count:1,data:0}]);
    RecipeRegistry.addCentrifugeRecipe({id:ItemID.crushedGalena,count:1,data:0},[{id:ItemID.dustLead,count:1,data:0},{id:ItemID.dustSmallCopper,count:1,data:0},{id:ItemID.dustStone,count:1,data:0}]);
    RecipeRegistry.addCentrifugeRecipe({id:ItemID.crushedIron,count:1,data:0},[{id:ItemID.dustIron,count:1,data:0},{id:ItemID.dustSmallGold,count:1,data:0},{id:ItemID.dustStone,count:1,data:0}]);
    RecipeRegistry.addCentrifugeRecipe({id:ItemID.crushedGold,count:1,data:0},[{id:ItemID.dustGold,count:1,data:0},{id:ItemID.dustSmallSilver,count:1,data:0},{id:ItemID.dustStone,count:1,data:0}]);
    RecipeRegistry.addCentrifugeRecipe({id:ItemID.crushedSpodumene,count:1,data:0},[{id:ItemID.smallLithium6,count:1,data:0},{id:ItemID.lithium7,count:1,data:0},{id:ItemID.dustStone,count:1,data:0}]);
    RecipeRegistry.addCentrifugeRecipe({id:ItemID.crushedTungsten,count:1,data:0},[{id:ItemID.dustTungsten,count:1,data:0},{id:ItemID.dustSmallTin,count:1,data:0},{id:ItemID.dustStone,count:1,data:0}]);
    RecipeRegistry.addCentrifugeRecipe({id:ItemID.crushedUranium,count:1,data:0},[{id:ItemID.smallUranium235,count:1,data:0},{id:ItemID.uranium238,count:4,data:0},{id:ItemID.dustStone,count:1,data:0}]);
    RecipeRegistry.addCentrifugeRecipe({id:ItemID.crushedSilver,count:1,data:0},[{id:ItemID.dustSilver,count:1,data:0},{id:ItemID.dustSmallGold,count:1,data:0},{id:ItemID.dustStone,count:1,data:0}]);
    RecipeRegistry.addCentrifugeRecipe({id:ItemID.crushedTetrahedrite,count:1,data:0},[{id:ItemID.dustCopper,count:1,data:0},{id:ItemID.dustSmallAntimony,count:1,data:0},{id:ItemID.dustStone,count:1,data:0}]);
    RecipeRegistry.addCentrifugeRecipe({id:ItemID.crushedBauxite,count:1,data:0},[{id:ItemID.dustAluminium,count:1,data:0},{id:ItemID.dustSmallAluminium,count:1,data:0},{id:ItemID.dustStone,count:1,data:0}]);

    RecipeRegistry.addCentrifugeRecipe({id:ItemID.crushedPurifiedCopper,count:1,data:0},[{id:ItemID.dustCopper,count:1,data:0},{id:ItemID.dustSmallTin,count:1,data:0}]);
    RecipeRegistry.addCentrifugeRecipe({id:ItemID.crushedPurifiedCassiterite,count:1,data:0},[{id:ItemID.dustTin,count:1,data:0},{id:ItemID.dustSmallIron,count:1,data:0}]);
    RecipeRegistry.addCentrifugeRecipe({id:ItemID.crushedPurifiedGalena,count:1,data:0},[{id:ItemID.dustLead,count:1,data:0},{id:ItemID.dustSmallCopper,count:1,data:0}]);
    RecipeRegistry.addCentrifugeRecipe({id:ItemID.crushedPurifiedIron,count:1,data:0},[{id:ItemID.dustIron,count:1,data:0},{id:ItemID.dustSmallGold,count:1,data:0}]);
    RecipeRegistry.addCentrifugeRecipe({id:ItemID.crushedPurifiedGold,count:1,data:0},[{id:ItemID.dustGold,count:1,data:0},{id:ItemID.dustSmallSilver,count:1,data:0}]);
    RecipeRegistry.addCentrifugeRecipe({id:ItemID.crushedPurifiedSpodumene,count:1,data:0},[{id:ItemID.smallLithium6,count:2,data:0},{id:ItemID.lithium7,count:2,data:0}]);
    RecipeRegistry.addCentrifugeRecipe({id:ItemID.crushedPurifiedTungsten,count:1,data:0},[{id:ItemID.dustTungsten,count:1,data:0},{id:ItemID.dustSmallTin,count:1,data:0}]);
    RecipeRegistry.addCentrifugeRecipe({id:ItemID.crushedPurifiedUranium,count:1,data:0},[{id:ItemID.smallUranium235,count:2,data:0},{id:ItemID.uranium238,count:5,data:0}]);
    RecipeRegistry.addCentrifugeRecipe({id:ItemID.crushedPurifiedSilver,count:1,data:0},[{id:ItemID.dustSilver,count:1,data:0},{id:ItemID.dustSmallGold,count:1,data:0}]);
    RecipeRegistry.addCentrifugeRecipe({id:ItemID.crushedPurifiedTetrahedrite,count:1,data:0},[{id:ItemID.dustCopper,count:1,data:0},{id:ItemID.dustSmallAntimony ,count:1,data:0}]);
    RecipeRegistry.addCentrifugeRecipe({id:ItemID.crushedPurifiedBauxite,count:1,data:0},[{id:ItemID.dustAluminium,count:1,data:0},{id:ItemID.dustSmallAluminium,count:1,data:0}]);
});




// file: item/resource/dust.js

// 含杂铜粉
IDRegistry.genItemID("dustImpureCopper");
Item.createItem("dustImpureCopper","Impure Copper Dust",{name:"impure_copper_dust"});

// 含杂锡石粉
IDRegistry.genItemID("dustImpureCassiterite");
Item.createItem("dustImpureCassiterite","Impure Cassiterite Dust",{name:"impure_cassiterite_dust"});

// 含杂铅粉
IDRegistry.genItemID("dustImpureGalena");
Item.createItem("dustImpureGalena","Impure Galena Dust",{name:"impure_galena_dust"});

// 含杂铁粉
IDRegistry.genItemID("dustImpureIron");
Item.createItem("dustImpureIron","Impure Iron Dust",{name:"impure_iron_dust"});

// 含杂金粉
IDRegistry.genItemID("dustImpureGold");
Item.createItem("dustImpureGold","Impure Gold Dust",{name:"impure_gold_dust"});

// 含杂锂辉石粉
IDRegistry.genItemID("dustImpureSpodumene");
Item.createItem("dustImpureSpodumene","Impure Spodumene Dust",{name:"impure_lithium_dust"});

// 含杂钨粉
IDRegistry.genItemID("dustImpureTungsten");
Item.createItem("dustImpureTungsten","Impure Tungsten Dust",{name:"impure_tungsten_dust"});

// 含杂铀粉
IDRegistry.genItemID("dustImpureUranium");
Item.createItem("dustImpureUranium","Impure Uranium Dust",{name:"impure_uranium_dust"});

// 含杂银粉
IDRegistry.genItemID("dustImpureSilver");
Item.createItem("dustImpureSilver","Impure Silver Dust",{name:"impure_silver_dust"});

// 含杂黝铜粉
IDRegistry.genItemID("dustImpureTetrahedrite");
Item.createItem("dustImpureTetrahedrite","Impure Tetrahedrite Dust",{name:"impure_tetrahedrite_dust"});

// 含杂铝粉
IDRegistry.genItemID("dustImpureBauxite");
Item.createItem("dustImpureBauxite","Impure Bauxite Dust",{name:"impure_bauxite_dust"});

Callback.addCallback("PreLoaded",function(){
    Item.addCreativeGroup("dustImpure",Translation.translate("Impure Dust"),[
        ItemID.dustImpureCopper,
        ItemID.dustImpureCassiterite,
        ItemID.dustImpureGalena,
        ItemID.dustImpureIron,
        ItemID.dustImpureGold,
        ItemID.dustImpureSpodumene,
        ItemID.dustImpureTungsten,
        ItemID.dustImpureUranium,
        ItemID.dustImpureSilver,
        ItemID.dustImpureTetrahedrite,
        ItemID.dustImpureBauxite     
    ]);

    RecipeRegistry.addAutoSaieveRecipe({id:12,data:0},[
        {id:ItemID.dustImpureCopper,minCount:1,maxCount:1,data:0,random:16},
        {id:ItemID.dustImpureCassiterite,minCount:1,maxCount:1,data:0,random:16},
        {id:ItemID.dustImpureGalena,minCount:1,maxCount:1,data:0,random:16},
        {id:ItemID.dustImpureIron,minCount:1,maxCount:1,data:0,random:16},
        {id:ItemID.dustImpureGold,minCount:1,maxCount:1,data:0,random:16},
        {id:ItemID.dustImpureSpodumene,minCount:1,maxCount:1,data:0,random:16},
        {id:ItemID.dustImpureTungsten,minCount:1,maxCount:1,data:0,random:16},
        {id:ItemID.dustImpureUranium,minCount:1,maxCount:1,data:0,random:16},
        {id:ItemID.dustImpureSilver,minCount:1,maxCount:1,data:0,random:16},
        {id:ItemID.dustImpureTetrahedrite,minCount:1,maxCount:1,data:0,random:16},
        {id:ItemID.dustImpureBauxite,minCount:1,maxCount:1,data:0,random:16}
    ]);

    Recipes.addFurnace(ItemID.dustImpureCopper,ItemID.ingotCopper);
    Recipes.addFurnace(ItemID.dustImpureCassiterite,ItemID.ingotTin);
    Recipes.addFurnace(ItemID.dustImpureGalena,ItemID.ingotLead);
    Recipes.addFurnace(ItemID.dustImpureIron,265);
    Recipes.addFurnace(ItemID.dustImpureGold,266);
    Recipes.addFurnace(ItemID.dustImpureUranium,ItemID.ingotUranium);
    Recipes.addFurnace(ItemID.dustImpureSilver,ItemID.ingotSilver);
    Recipes.addFurnace(ItemID.dustImpureTetrahedrite,ItemID.ingotCopper);
    Recipes.addFurnace(ItemID.dustImpureBauxite,ItemID.ingotAluminium);
    
    RecipeRegistry.addBlastFurnaceRecipe({id:ItemID.dustImpureTungsten,data:0},[{id:ItemID.ingotTungsten,count:1,data:0}]);

    RecipeRegistry.addOreWasherRecipe({id:ItemID.dustImpureCopper,data:0},[{id:ItemID.dustCopper,count:1,data:0},{id:ItemID.dustSmallTin,count:1,data:0},{id:ItemID.dustSmallStone,count:1,data:0}]);
    RecipeRegistry.addOreWasherRecipe({id:ItemID.dustImpureCassiterite,data:0},[{id:ItemID.dustTin,count:1,data:0},{id:ItemID.dustSmallIron,count:1,data:0},{id:ItemID.dustSmallStone,count:1,data:0}]);
    RecipeRegistry.addOreWasherRecipe({id:ItemID.dustImpureGalena,data:0},[{id:ItemID.dustLead,count:1,data:0},{id:ItemID.dustSmallCopper,count:1,data:0},{id:ItemID.dustSmallStone,count:1,data:0}]);
    RecipeRegistry.addOreWasherRecipe({id:ItemID.dustImpureIron,data:0},[{id:ItemID.dustIron,count:1,data:0},{id:ItemID.dustSmallGold,count:1,data:0},{id:ItemID.dustSmallStone,count:1,data:0}]);
    RecipeRegistry.addOreWasherRecipe({id:ItemID.dustImpureGold,data:0},[{id:ItemID.dustGold,count:1,data:0},{id:ItemID.dustSmallSilver,count:1,data:0},{id:ItemID.dustSmallStone,count:1,data:0}]);
    RecipeRegistry.addOreWasherRecipe({id:ItemID.dustImpureSpodumene,data:0},[{id:ItemID.dustLithium,count:1,data:0},{id:ItemID.dustSmallLithium,count:1,data:0},{id:ItemID.dustSmallStone,count:1,data:0}]);
    RecipeRegistry.addOreWasherRecipe({id:ItemID.dustImpureTungsten,data:0},[{id:ItemID.dustTungsten,count:1,data:0},{id:ItemID.dustSmallTin,count:1,data:0},{id:ItemID.dustSmallStone,count:1,data:0}]);
    RecipeRegistry.addOreWasherRecipe({id:ItemID.dustImpureUranium,data:0},[{id:ItemID.dustUranium,count:1,data:0},{id:ItemID.dustSmallUranium,count:1,data:0},{id:ItemID.dustSmallStone,count:1,data:0}]);
    RecipeRegistry.addOreWasherRecipe({id:ItemID.dustImpureSilver,data:0},[{id:ItemID.dustSilver,count:1,data:0},{id:ItemID.dustSmallGold,count:1,data:0},{id:ItemID.dustSmallStone,count:1,data:0}]);
    RecipeRegistry.addOreWasherRecipe({id:ItemID.dustImpureTetrahedrite,data:0},[{id:ItemID.dustTetrahedrite,count:1,data:0},{id:ItemID.dustSmallAntimony,count:1,data:0},{id:ItemID.dustSmallStone,count:1,data:0}]);
    RecipeRegistry.addOreWasherRecipe({id:ItemID.dustImpureBauxite,data:0},[{id:ItemID.dustAluminium,count:1,data:0},{id:ItemID.dustSmallAntimony,count:1,data:0},{id:ItemID.dustSmallStone,count:1,data:0}]);
    
    RecipeRegistry.addCentrifugeRecipe({id:ItemID.dustImpureCopper,count:1,data:0},[{id:ItemID.dustCopper,count:1,data:0},{id:ItemID.dustSmallTin,count:1,data:0},{id:ItemID.dustSmallStone,count:1,data:0}]);
    RecipeRegistry.addCentrifugeRecipe({id:ItemID.dustImpureCassiterite,count:1,data:0},[{id:ItemID.dustTin,count:1,data:0},{id:ItemID.dustSmallIron,count:1,data:0},{id:ItemID.dustSmallStone,count:1,data:0}]);
    RecipeRegistry.addCentrifugeRecipe({id:ItemID.dustImpureGalena,count:1,data:0},[{id:ItemID.dustLead,count:1,data:0},{id:ItemID.dustSmallCopper,count:1,data:0},{id:ItemID.dustSmallStone,count:1,data:0}]);
    RecipeRegistry.addCentrifugeRecipe({id:ItemID.dustImpureIron,count:1,data:0},[{id:ItemID.dustIron,count:1,data:0},{id:ItemID.dustSmallGold,count:1,data:0},{id:ItemID.dustSmallStone,count:1,data:0}]);
    RecipeRegistry.addCentrifugeRecipe({id:ItemID.dustImpureGold,count:1,data:0},[{id:ItemID.dustGold,count:1,data:0},{id:ItemID.dustSmallSilver,count:1,data:0},{id:ItemID.dustSmallStone,count:1,data:0}]);
    RecipeRegistry.addCentrifugeRecipe({id:ItemID.dustImpureSpodumene,count:1,data:0},[{id:ItemID.dustLithium,count:1,data:0},{id:ItemID.dustSmallLithium,count:1,data:0},{id:ItemID.dustSmallStone,count:1,data:0}]);
    RecipeRegistry.addCentrifugeRecipe({id:ItemID.dustImpureTungsten,count:1,data:0},[{id:ItemID.dustTungsten,count:1,data:0},{id:ItemID.dustSmallTin,count:1,data:0},{id:ItemID.dustSmallStone,count:1,data:0}]);
    RecipeRegistry.addCentrifugeRecipe({id:ItemID.dustImpureUranium,count:1,data:0},[{id:ItemID.smallUranium235,count:1,data:0},{id:ItemID.uranium238,count:4,data:0},{id:ItemID.dustSmallStone,count:1,data:0}]);
    RecipeRegistry.addCentrifugeRecipe({id:ItemID.dustImpureSilver,count:1,data:0},[{id:ItemID.dustSilver,count:1,data:0},{id:ItemID.dustSmallGold,count:1,data:0},{id:ItemID.dustSmallStone,count:1,data:0}]);
    RecipeRegistry.addCentrifugeRecipe({id:ItemID.dustImpureTetrahedrite,count:1,data:0},[{id:ItemID.dustCopper,count:1,data:0},{id:ItemID.dustSmallAntimony,count:1,data:0},{id:ItemID.dustSmallStone,count:1,data:0}]);
    RecipeRegistry.addCentrifugeRecipe({id:ItemID.dustImpureBauxite,count:1,data:0},[{id:ItemID.dustAluminium,count:1,data:0},{id:ItemID.dustSmallAluminium,count:1,data:0},{id:ItemID.dustSmallStone,count:1,data:0}]);
    
    var mortar = Tool.getAllTool("Mortar");
    for(let i in mortar){
        RecipeRegistry.addShapeless({id:ItemID.dustImpureCopper,count:1,data:0},[{id:ItemID.crushedCopper,count:1,data:0}],mortar[i]);
        RecipeRegistry.addShapeless({id:ItemID.dustImpureCassiterite,count:1,data:0},[{id:ItemID.crushedCassiterite,count:1,data:0}],mortar[i]);
        RecipeRegistry.addShapeless({id:ItemID.dustImpureGalena,count:1,data:0},[{id:ItemID.crushedGalena,count:1,data:0}],mortar[i]);
        RecipeRegistry.addShapeless({id:ItemID.dustImpureIron,count:1,data:0},[{id:ItemID.crushedIron,count:1,data:0}],mortar[i]);
        RecipeRegistry.addShapeless({id:ItemID.dustImpureGold,count:1,data:0},[{id:ItemID.crushedGold,count:1,data:0}],mortar[i]);
        RecipeRegistry.addShapeless({id:ItemID.dustImpureSpodumene,count:1,data:0},[{id:ItemID.crushedSpodumene,count:1,data:0}],mortar[i]);
        RecipeRegistry.addShapeless({id:ItemID.dustImpureTungsten,count:1,data:0},[{id:ItemID.crushedTungsten,count:1,data:0}],mortar[i]);
        RecipeRegistry.addShapeless({id:ItemID.dustImpureUranium,count:1,data:0},[{id:ItemID.crushedUranium,count:1,data:0}],mortar[i]);
        RecipeRegistry.addShapeless({id:ItemID.dustImpureSilver,count:1,data:0},[{id:ItemID.crushedSilver,count:1,data:0}],mortar[i]);
        RecipeRegistry.addShapeless({id:ItemID.dustImpureTetrahedrite,count:1,data:0},[{id:ItemID.crushedTetrahedrite,count:1,data:0}],mortar[i]);
        RecipeRegistry.addShapeless({id:ItemID.dustImpureBauxite,count:1,data:0},[{id:ItemID.crushedBauxite,count:1,data:0}],mortar[i]);
    }
    
    RecipeRegistry.addMaceratorRecipe({id:BlockID.oreCopper,data:0},{id:ItemID.dustImpureCopper,count:2,data:0});
    RecipeRegistry.addMaceratorRecipe({id:BlockID.oreCassiterite,data:0},{id:ItemID.dustImpureCassiterite,count:2,data:0});
    RecipeRegistry.addMaceratorRecipe({id:BlockID.oreGalena,data:0},{id:ItemID.dustImpureGalena,count:2,data:0});
    RecipeRegistry.addMaceratorRecipe({id:15,data:0},{id:ItemID.dustImpureIron,count:2,data:0});
    RecipeRegistry.addMaceratorRecipe({id:14,data:0},{id:ItemID.dustImpureGold,count:2,data:0});
    RecipeRegistry.addMaceratorRecipe({id:BlockID.oreSpodumene,data:0},{id:ItemID.dustImpureSpodumene,count:2,data:0});
    RecipeRegistry.addMaceratorRecipe({id:BlockID.oreTungsten,data:0},{id:ItemID.dustImpureTungsten,count:2,data:0});
    RecipeRegistry.addMaceratorRecipe({id:BlockID.oreUranium,data:0},{id:ItemID.dustImpureUranium,count:2,data:0});
    RecipeRegistry.addMaceratorRecipe({id:BlockID.oreSilver,data:0},{id:ItemID.dustImpureSilver,count:2,data:0});
    RecipeRegistry.addMaceratorRecipe({id:BlockID.oreTetrahedrite,data:0},{id:ItemID.dustImpureTetrahedrite,count:2,data:0});
    RecipeRegistry.addMaceratorRecipe({id:BlockID.oreBauxite,data:0},{id:ItemID.dustImpureBauxite,count:2,data:0});

    RecipeRegistry.addMaceratorRecipe({id:ItemID.crushedCopper,data:0},{id:ItemID.dustImpureCopper,count:2,data:0});
    RecipeRegistry.addMaceratorRecipe({id:ItemID.crushedCassiterite,data:0},{id:ItemID.dustImpureCassiterite,count:2,data:0});
    RecipeRegistry.addMaceratorRecipe({id:ItemID.crushedGalena,data:0},{id:ItemID.dustImpureGalena,count:2,data:0});
    RecipeRegistry.addMaceratorRecipe({id:ItemID.crushedIron,data:0},{id:ItemID.dustImpureIron,count:2,data:0});
    RecipeRegistry.addMaceratorRecipe({id:ItemID.crushedGold,data:0},{id:ItemID.dustImpureGold,count:2,data:0});
    RecipeRegistry.addMaceratorRecipe({id:ItemID.crushedSpodumene,data:0},{id:ItemID.dustImpureSpodumene,count:2,data:0});
    RecipeRegistry.addMaceratorRecipe({id:ItemID.crushedTungsten,data:0},{id:ItemID.dustImpureTungsten,count:2,data:0});
    RecipeRegistry.addMaceratorRecipe({id:ItemID.crushedUranium,data:0},{id:ItemID.dustImpureUranium,count:2,data:0});
    RecipeRegistry.addMaceratorRecipe({id:ItemID.crushedSilver,data:0},{id:ItemID.dustImpureSilver,count:2,data:0});
    RecipeRegistry.addMaceratorRecipe({id:ItemID.crushedTetrahedrite,data:0},{id:ItemID.dustImpureTetrahedrite,count:2,data:0});
    RecipeRegistry.addMaceratorRecipe({id:ItemID.crushedBauxite,data:0},{id:ItemID.dustImpureBauxite,count:2,data:0});
});

// ==================================================================================================== //

// 石粉
IDRegistry.genItemID("dustStone");
IDRegistry.genItemID("dustSmallStone");
Item.createItem("dustStone","Stone Dust",{name:"stone_dust"});
Item.createItem("dustSmallStone","Small Pile of Stone Dust",{name:"small_stone_dust"});

// 末影粉
IDRegistry.genItemID("dustEnder");
IDRegistry.genItemID("dustSmallEnder");
Item.createItem("dustEnder","Ender Dust",{name:"ender_dust"});
Item.createItem("dustSmallEnder","Small Pile of Ender Dust",{name:"small_ender_dust"});

// 燧石粉
IDRegistry.genItemID("dustFlint");
IDRegistry.genItemID("dustSmallFlint");
Item.createItem("dustFlint","Flint Dust",{name:"flint_dust"});
Item.createItem("dustSmallFlint","Small Pile of Flint Dust",{name:"small_flint_dust"});

// 铜粉
IDRegistry.genItemID("dustCopper");
IDRegistry.genItemID("dustSmallCopper");
Item.createItem("dustCopper","Copper Dust",{name:"copper_dust"});
Item.createItem("dustSmallCopper","Small Pile of Copper Dust",{name:"small_copper_dust"});

// 锡粉
IDRegistry.genItemID("dustTin");
IDRegistry.genItemID("dustSmallTin");
Item.createItem("dustTin","Tin Dust",{name:"tin_dust"});
Item.createItem("dustSmallTin","Small Pile of Tin Dust",{name:"small_tin_dust"});

// 青铜粉
IDRegistry.genItemID("dustBronze");
IDRegistry.genItemID("dustSmallBronze");
Item.createItem("dustBronze","Bronze Dust",{name:"bronze_dust"});
Item.createItem("dustSmallBronze","Small Pile of Bronze Dust",{name:"small_bronze_dust"});

// 铅粉
IDRegistry.genItemID("dustLead");
IDRegistry.genItemID("dustSmallLead");
Item.createItem("dustLead","Lead Dust",{name:"lead_dust"});
Item.createItem("dustSmallLead","Small Pile of Lead Dust",{name:"small_lead_dust"});

// 铁粉
IDRegistry.genItemID("dustIron");
IDRegistry.genItemID("dustSmallIron");
Item.createItem("dustIron","Iron Dust",{name:"iron_dust"});
Item.createItem("dustSmallIron","Small Pile of Iron Dust",{name:"small_iron_dust"});

// 钢粉
IDRegistry.genItemID("dustSteel");
IDRegistry.genItemID("dustSmallSteel");
Item.createItem("dustSteel","Steel Dust",{name:"steel_dust"});
Item.createItem("dustSmallSteel","Small Pile of Steel Dust",{name:"small_steel_dust"});

// 金粉
IDRegistry.genItemID("dustGold");
IDRegistry.genItemID("dustSmallGold");
Item.createItem("dustGold","Gold Dust",{name:"gold_dust"});
Item.createItem("dustSmallGold","Small Pile of Gold Dust",{name:"small_gold_dust"});

// 锑粉
IDRegistry.genItemID("dustAntimony");
IDRegistry.genItemID("dustSmallAntimony");
Item.createItem("dustAntimony","Antimony Dust",{name:"antimony_dust"});
Item.createItem("dustSmallAntimony","Small Pile of Antimony Dust",{name:"small_antimony_dust"});

// 锂粉
IDRegistry.genItemID("dustLithium");
IDRegistry.genItemID("dustSmallLithium");
Item.createItem("dustLithium","Lithium Dust",{name:"lithium_dust"});
Item.createItem("dustSmallLithium","Small Pile of Lithium Dust",{name:"small_lithium_dust"});

// 碳粉
IDRegistry.genItemID("dustCarbon");
IDRegistry.genItemID("dustSmallCarbon");
Item.createItem("dustCarbon","Carbon Dust",{name:"carbon_dust"});
Item.createItem("dustSmallCarbon","Small Pile of Carbon Dust",{name:"small_carbon_dust"});

// 钨粉
IDRegistry.genItemID("dustTungsten");
IDRegistry.genItemID("dustSmallTungsten");
Item.createItem("dustTungsten","Tungsten Dust",{name:"tungsten_dust"});
Item.createItem("dustSmallTungsten","Small Pile of Tungsten Dust",{name:"small_tungsten_dust"});

// 铀粉
IDRegistry.genItemID("dustUranium");
IDRegistry.genItemID("dustSmallUranium");
Item.createItem("dustUranium","Uranium Dust",{name:"uranium_dust"});
Item.createItem("dustSmallUranium","Small Pile of Uranium Dust",{name:"small_uranium_dust"});

// 银粉
IDRegistry.genItemID("dustSilver");
IDRegistry.genItemID("dustSmallSilver");
Item.createItem("dustSilver","Silver Dust",{name:"silver_dust"});
Item.createItem("dustSmallSilver","Small Pile of Silver Dust",{name:"small_silver_dust"});

// 黝铜粉
IDRegistry.genItemID("dustTetrahedrite");
IDRegistry.genItemID("dustSmallTetrahedrite");
Item.createItem("dustTetrahedrite","Tetrahedrite Dust",{name:"tetrahedrite_dust"});
Item.createItem("dustSmallTetrahedrite","Small Pile of Tetrahedrite Dust",{name:"small_tetrahedrite_dust"});

// 铝粉
IDRegistry.genItemID("dustAluminium");
IDRegistry.genItemID("dustSmallAluminium");
Item.createItem("dustAluminium","Aluminium Dust",{name:"aluminium_dust"});
Item.createItem("dustSmallAluminium","Small Pile of Aluminium Dust",{name:"small_aluminium_dust"});

// 钻石粉
IDRegistry.genItemID("dustDiamond");
IDRegistry.genItemID("dustSmallDiamond");
Item.createItem("dustDiamond","Diamond Dust",{name:"diamond_dust"});
Item.createItem("dustSmallDiamond","Small Pile of Diamond Dust",{name:"small_diamond_dust"});

// 恩奈特合金粉
IDRegistry.genItemID("dustEnete");
IDRegistry.genItemID("dustSmallEnete");
Item.createItem("dustEnete","Enete Alloy Dust",{name:"enete_dust"});
Item.createItem("dustSmallEnete","Small Pile of Enete Alloy Dust",{name:"small_enete_dust"});

// 铅锑合金粉
IDRegistry.genItemID("dustLeadAntimony");
IDRegistry.genItemID("dustSmallLeadAntimony");
Item.createItem("dustLeadAntimony","Lead-Antimony Alloy Dust",{name:"lead_antimony_dust"});
Item.createItem("dustSmallLeadAntimony","Small Pile of Lead-Antimony Alloy Dust",{name:"small_lead_antimony_dust"});

// 二氧化硅粉
IDRegistry.genItemID("dustSiliconDioxide");
IDRegistry.genItemID("dustSmallSiliconDioxide");
Item.createItem("dustSiliconDioxide","Silicon Dioxide Dust",{name:"silicon_dioxide_dust"});
Item.createItem("dustSmallSiliconDioxide","Small Pile of Silicon Dioxide Dust",{name:"small_silicon_dioxide_dust"});

// 盐粉
IDRegistry.genItemID("dustSalt");
IDRegistry.genItemID("dustSmallSalt");
Item.createItem("dustSalt","Salt Dust",{name:"salt_dust"});
Item.createItem("dustSmallSalt","Small Pile of Salt Dust",{name:"small_salt_dust"});

// 能量水晶粉
IDRegistry.genItemID("dustEnergium");
IDRegistry.genItemID("dustSmallEnergium");
Item.createItem("dustEnergium","Energium Dust",{name:"energium_dust"});
Item.createItem("dustSmallEnergium","Small Pile of Energium Dust",{name:"small_energium_dust"});

// 红石粉
IDRegistry.genItemID("dustSmallRedstone");
Item.createItem("dustSmallRedstone","Small Pile of Redstone Dust",{name:"small_redstone_dust"});

// 红宝石粉
IDRegistry.genItemID("dustRuby");
IDRegistry.genItemID("dustSmallRuby");
Item.createItem("dustRuby","Ruby Dust",{name:"ruby_dust"});
Item.createItem("dustSmallRuby","Small Pile of Ruby Dust",{name:"small_ruby_dust"});

// 硅粉
IDRegistry.genItemID("dustSilicon");
IDRegistry.genItemID("dustSmallSilicon");
Item.createItem("dustSilicon","Silicon Dust",{name:"silicon_dust"});
Item.createItem("dustSmallSilicon","Small Pile of Silicon Dust",{name:"small_silicon_dust"});

Callback.addCallback("PreLoaded",function(){
    Item.addCreativeGroup("dust",Translation.translate("Dust"),[
        ItemID.dustStone,
        ItemID.dustEnder,
        ItemID.dustFlint,
        ItemID.dustCopper,
        ItemID.dustTin,
        ItemID.dustBronze,
        ItemID.dustLead,
        ItemID.dustIron,
        ItemID.dustSteel,
        ItemID.dustGold,
        ItemID.dustAntimony,
        ItemID.dustLithium,
        ItemID.dustCarbon,
        ItemID.dustTungsten,
        ItemID.dustUranium,
        ItemID.dustSilver,
        ItemID.dustTetrahedrite,
        ItemID.dustAluminium,
        ItemID.dustEnete,
        ItemID.dustDiamond,
        ItemID.dustLeadAntimony,
        ItemID.dustSiliconDioxide,
        ItemID.dustSalt,
        ItemID.dustEnergium,
        ItemID.dustRuby,
        ItemID.dustSilicon
    ]);

    Item.addCreativeGroup("dustSmall",Translation.translate("Small Dust"),[
        ItemID.dustSmallStone,
        ItemID.dustSmallEnder,
        ItemID.dustSmallFlint,
        ItemID.dustSmallCopper,
        ItemID.dustSmallTin,
        ItemID.dustSmallBronze,
        ItemID.dustSmallLead,
        ItemID.dustSmallIron,
        ItemID.dustSmallSteel,
        ItemID.dustSmallGold,
        ItemID.dustSmallAntimony,
        ItemID.dustSmallLithium,
        ItemID.dustSmallCarbon,
        ItemID.dustSmallTungsten,
        ItemID.dustSmallUranium,
        ItemID.dustSmallSilver,
        ItemID.dustSmallTetrahedrite,
        ItemID.dustSmallAluminium,
        ItemID.dustSmallEnete,
        ItemID.dustSmallDiamond,
        ItemID.dustSmallLeadAntimony,
        ItemID.dustSmallSiliconDioxide,
        ItemID.dustSmallSalt,
        ItemID.dustSmallEnergium,
        ItemID.dustSmallRedstone,
        ItemID.dustSmallRuby,
        ItemID.dustSmallSilicon
    ]);
    
    Recipes.addShapeless({id:ItemID.dustSmallStone,count:9,data:0},[{id:ItemID.dustStone,data:0}]);
    Recipes.addShaped({id:ItemID.dustStone,count:1,data:0},["aaa","aaa","aaa"],["a",ItemID.dustSmallStone,0]);
    
    Recipes.addShapeless({id:ItemID.dustSmallEnder,count:9,data:0},[{id:ItemID.dustEnder,data:0}]);
    Recipes.addShaped({id:ItemID.dustEnder,count:1,data:0},["aaa","aaa","aaa"],["a",ItemID.dustSmallEnder,0]);
    
    Recipes.addShapeless({id:ItemID.dustSmallFlint,count:9,data:0},[{id:ItemID.dustFlint,data:0}]);
    Recipes.addShaped({id:ItemID.dustFlint,count:1,data:0},["aaa","aaa","aaa"],["a",ItemID.dustSmallFlint,0]);

    Recipes.addShapeless({id:ItemID.dustSmallCopper,count:9,data:0},[{id:ItemID.dustCopper,data:0}]);
    Recipes.addShaped({id:ItemID.dustCopper,count:1,data:0},["aaa","aaa","aaa"],["a",ItemID.dustSmallCopper,0]);
    
    Recipes.addShapeless({id:ItemID.dustSmallTin,count:9,data:0},[{id:ItemID.dustTin,data:0}]);
    Recipes.addShaped({id:ItemID.dustTin,count:1,data:0},["aaa","aaa","aaa"],["a",ItemID.dustSmallTin,0]);
    
    Recipes.addShapeless({id:ItemID.dustSmallBronze,count:9,data:0},[{id:ItemID.dustBronze,data:0}]);
    Recipes.addShaped({id:ItemID.dustBronze,count:1,data:0},["aaa","aaa","aaa"],["a",ItemID.dustSmallBronze,0]);

    Recipes.addShapeless({id:ItemID.dustSmallLead,count:9,data:0},[{id:ItemID.dustLead,data:0}]);
    Recipes.addShaped({id:ItemID.dustLead,count:1,data:0},["aaa","aaa","aaa"],["a",ItemID.dustSmallLead,0]);
    
    Recipes.addShapeless({id:ItemID.dustSmallIron,count:9,data:0},[{id:ItemID.dustIron,data:0}]);
    Recipes.addShaped({id:ItemID.dustIron,count:1,data:0},["aaa","aaa","aaa"],["a",ItemID.dustSmallIron,0]);
    
    Recipes.addShapeless({id:ItemID.dustSmallSteel,count:9,data:0},[{id:ItemID.dustSteel,data:0}]);
    Recipes.addShaped({id:ItemID.dustSteel,count:1,data:0},["aaa","aaa","aaa"],["a",ItemID.dustSmallSteel,0]);
    
    Recipes.addShapeless({id:ItemID.dustSmallGold,count:9,data:0},[{id:ItemID.dustGold,data:0}]);
    Recipes.addShaped({id:ItemID.dustGold,count:1,data:0},["aaa","aaa","aaa"],["a",ItemID.dustSmallGold,0]);
    
    Recipes.addShapeless({id:ItemID.dustSmallAntimony,count:9,data:0},[{id:ItemID.dustAntimony,data:0}]);
    Recipes.addShaped({id:ItemID.dustAntimony,count:1,data:0},["aaa","aaa","aaa"],["a",ItemID.dustSmallAntimony,0]);
    
    Recipes.addShapeless({id:ItemID.dustSmallLithium,count:9,data:0},[{id:ItemID.dustLithium,data:0}]);
    Recipes.addShaped({id:ItemID.dustLithium,count:1,data:0},["aaa","aaa","aaa"],["a",ItemID.dustSmallLithium,0]);
    
    Recipes.addShapeless({id:ItemID.dustSmallCarbon,count:9,data:0},[{id:ItemID.dustCarbon,data:0}]);
    Recipes.addShaped({id:ItemID.dustCarbon,count:1,data:0},["aaa","aaa","aaa"],["a",ItemID.dustSmallCarbon,0]);
    
    Recipes.addShapeless({id:ItemID.dustSmallTungsten,count:9,data:0},[{id:ItemID.dustTungsten,data:0}]);
    Recipes.addShaped({id:ItemID.dustTungsten,count:1,data:0},["aaa","aaa","aaa"],["a",ItemID.dustSmallTungsten,0]);

    Recipes.addShapeless({id:ItemID.dustSmallUranium,count:9,data:0},[{id:ItemID.dustUranium,data:0}]);
    Recipes.addShaped({id:ItemID.dustUranium,count:1,data:0},["aaa","aaa","aaa"],["a",ItemID.dustSmallUranium,0]);
    
    Recipes.addShapeless({id:ItemID.dustSmallSilver,count:9,data:0},[{id:ItemID.dustSilver,data:0}]);
    Recipes.addShaped({id:ItemID.dustSilver,count:1,data:0},["aaa","aaa","aaa"],["a",ItemID.dustSmallSilver,0]);
    
    Recipes.addShapeless({id:ItemID.dustSmallTetrahedrite,count:9,data:0},[{id:ItemID.dustTetrahedrite,data:0}]);
    Recipes.addShaped({id:ItemID.dustTetrahedrite,count:1,data:0},["aaa","aaa","aaa"],["a",ItemID.dustSmallTetrahedrite,0]);
    
    Recipes.addShapeless({id:ItemID.dustSmallAluminium,count:9,data:0},[{id:ItemID.dustAluminium,data:0}]);
    Recipes.addShaped({id:ItemID.dustAluminium,count:1,data:0},["aaa","aaa","aaa"],["a",ItemID.dustSmallAluminium,0]);
    
    Recipes.addShapeless({id:ItemID.dustSmallDiamond,count:9,data:0},[{id:ItemID.dustDiamond,data:0}]);
    Recipes.addShaped({id:ItemID.dustDiamond,count:1,data:0},["aaa","aaa","aaa"],["a",ItemID.dustSmallDiamond,0]);    

    Recipes.addShapeless({id:ItemID.dustSmallLeadAntimony,count:9,data:0},[{id:ItemID.dustLeadAntimony,data:0}]);
    Recipes.addShaped({id:ItemID.dustLeadAntimony,count:1,data:0},["aaa","aaa","aaa"],["a",ItemID.dustSmallLeadAntimony,0]);

    Recipes.addShapeless({id:ItemID.dustSmallSiliconDioxide,count:9,data:0},[{id:ItemID.dustSiliconDioxide,data:0}]);
    Recipes.addShaped({id:ItemID.dustSiliconDioxide,count:1,data:0},["aaa","aaa","aaa"],["a",ItemID.dustSmallSiliconDioxide,0]);

    Recipes.addShapeless({id:ItemID.dustSmallSalt,count:9,data:0},[{id:ItemID.dustSalt,data:0}]);
    Recipes.addShaped({id:ItemID.dustSalt,count:1,data:0},["aaa","aaa","aaa"],["a",ItemID.dustSmallSalt,0]);
    
    Recipes.addShapeless({id:ItemID.dustSmallEnergium,count:9,data:0},[{id:ItemID.dustEnergium,data:0}]);
    Recipes.addShaped({id:ItemID.dustEnergium,count:1,data:0},["aaa","aaa","aaa"],["a",ItemID.dustSmallEnergium,0]);
    
    Recipes.addShapeless({id:ItemID.dustSmallRedstone,count:9,data:0},[{id:331,data:0}]);
    Recipes.addShaped({id:331,count:1,data:0},["aaa","aaa","aaa"],["a",ItemID.dustSmallRedstone,0]);

    Recipes.addShapeless({id:ItemID.dustSmallRuby,count:9,data:0},[{id:ItemID.dustRuby,data:0}]);
    Recipes.addShaped({id:ItemID.dustRuby,count:1,data:0},["aaa","aaa","aaa"],["a",ItemID.dustSmallRuby,0]);

    Recipes.addShapeless({id:ItemID.dustSmallSilicon,count:9,data:0},[{id:ItemID.dustSilicon,data:0}]);
    Recipes.addShaped({id:ItemID.dustSilicon,count:1,data:0},["aaa","aaa","aaa"],["a",ItemID.dustSmallSilicon,0]);

    Recipes.addShaped({id:ItemID.dustEnergium,count:1,data:0},["aba","bab","aba"],["a",331,0,"b",ItemID.dustRuby,0]);
    Recipes.addShaped({id:ItemID.dustEnete,count:3,data:0},["bca","cdc","acb"],["a",348,0,"b",331,0,"c",ItemID.dustEnder,0,"d",ItemID.dustIron,0]);
    
    Recipes.addShapeless({id:ItemID.dustLeadAntimony,count:2,data:0},[{id:ItemID.dustLead,data:0},{id:ItemID.dustAntimony,data:0}]);
    Recipes.addShapeless({id:ItemID.dustBronze,count:9,data:0},[{id:ItemID.dustTin,data:0},{id:ItemID.dustCopper,data:0},{id:ItemID.dustCopper,data:0},{id:ItemID.dustCopper,data:0}]);

    var mortar = Tool.getAllTool("Mortar");
    for(let i in mortar){
        RecipeRegistry.addShapeless({id:ItemID.dustFlint,count:1,data:0},[{id:318,count:1,data:0}],mortar[i]);
        RecipeRegistry.addShapeless({id:ItemID.dustCopper,count:1,data:0},[{id:ItemID.ingotCopper,count:1,data:0}],mortar[i]);
        RecipeRegistry.addShapeless({id:ItemID.dustTin,count:1,data:0},[{id:ItemID.ingotTin,count:1,data:0}],mortar[i]);
        RecipeRegistry.addShapeless({id:ItemID.dustLead,count:1,data:0},[{id:ItemID.ingotLead,count:1,data:0}],mortar[i]);
        RecipeRegistry.addShapeless({id:ItemID.dustIron,count:1,data:0},[{id:265,count:1,data:0}],mortar[i]);
        RecipeRegistry.addShapeless({id:ItemID.dustGold,count:1,data:0},[{id:266,count:1,data:0}],mortar[i]);
        RecipeRegistry.addShapeless({id:ItemID.dustAntimony,count:1,data:0},[{id:ItemID.ingotAntimony,count:1,data:0}],mortar[i]);
        RecipeRegistry.addShapeless({id:ItemID.dustLithium,count:1,data:0},[{id:ItemID.ingotLithium,count:1,data:0}],mortar[i]);
        RecipeRegistry.addShapeless({id:ItemID.dustTungsten,count:1,data:0},[{id:ItemID.ingotTungsten,count:1,data:0}],mortar[i]);
        RecipeRegistry.addShapeless({id:ItemID.dustUranium,count:1,data:0},[{id:ItemID.ingotUranium,count:1,data:0}],mortar[i]);
        RecipeRegistry.addShapeless({id:ItemID.dustSilver,count:1,data:0},[{id:ItemID.ingotSilver,count:1,data:0}],mortar[i]);
        RecipeRegistry.addShapeless({id:ItemID.dustAluminium,count:1,data:0},[{id:ItemID.ingotAluminium,count:1,data:0}],mortar[i]);
        RecipeRegistry.addShapeless({id:ItemID.dustRuby,count:1,data:0},[{id:ItemID.ruby,count:1,data:0}],mortar[i]);
        RecipeRegistry.addShapeless({id:ItemID.dustSilicon,count:1,data:0},[{id:ItemID.ingotSilicon,count:1,data:0}],mortar[i]);
        RecipeRegistry.addShapeless({id:ItemID.dustEnergium,count:9,data:0},[{id:ItemID.energyCrystal,count:1,data:0}],mortar[i]);
    }
    
    Recipes.addFurnace(ItemID.dustCopper,ItemID.ingotCopper);
    Recipes.addFurnace(ItemID.dustTin,ItemID.ingotTin);
    Recipes.addFurnace(ItemID.dustLead,ItemID.ingotLead);
    Recipes.addFurnace(ItemID.dustBronze,ItemID.ingotBronze);
    Recipes.addFurnace(ItemID.dustIron,265);
    Recipes.addFurnace(ItemID.dustGold,266);
    Recipes.addFurnace(ItemID.dustAntimony,ItemID.ingotAntimony);
    Recipes.addFurnace(ItemID.dustLithium,ItemID.ingotLithium);
    Recipes.addFurnace(ItemID.dustUranium,ItemID.ingotUranium);
    Recipes.addFurnace(ItemID.dustSilver,ItemID.ingotSilver);
    Recipes.addFurnace(ItemID.dustAluminium,ItemID.ingotAluminium);
    Recipes.addFurnace(ItemID.dustEnete,ItemID.ingotEnete);
    Recipes.addFurnace(ItemID.dustLeadAntimony,ItemID.ingotLeadAntimony);
    Recipes.addFurnace(ItemID.dustSiliconDioxide,20);
    
    RecipeRegistry.addMaceratorRecipe({id:318,data:0},{id:ItemID.dustFlint,count:1,data:0});
    RecipeRegistry.addMaceratorRecipe({id:368,data:0},{id:ItemID.dustEnder,count:1,data:0});
    RecipeRegistry.addMaceratorRecipe({id:264,data:0},{id:ItemID.dustDiamond,count:1,data:0});
    RecipeRegistry.addMaceratorRecipe({id:ItemID.ingotCopper,data:0},{id:ItemID.dustCopper,count:1,data:0});
    RecipeRegistry.addMaceratorRecipe({id:ItemID.ingotTin,data:0},{id:ItemID.dustTin,count:1,data:0});
    RecipeRegistry.addMaceratorRecipe({id:ItemID.ingotBronze,data:0},{id:ItemID.dustBronze,count:1,data:0});
    RecipeRegistry.addMaceratorRecipe({id:ItemID.ingotLead,data:0},{id:ItemID.dustLead,count:1,data:0});
    RecipeRegistry.addMaceratorRecipe({id:265,data:0},{id:ItemID.dustIron,count:1,data:0});
    RecipeRegistry.addMaceratorRecipe({id:ItemID.ingotSteel,data:0},{id:ItemID.dustSteel,count:1,data:0});
    RecipeRegistry.addMaceratorRecipe({id:266,data:0},{id:ItemID.dustGold,count:1,data:0});
    RecipeRegistry.addMaceratorRecipe({id:ItemID.ingotAntimony,data:0},{id:ItemID.dustAntimony,count:1,data:0});
    RecipeRegistry.addMaceratorRecipe({id:ItemID.ingotLithium,data:0},{id:ItemID.dustLithium,count:1,data:0});
    RecipeRegistry.addMaceratorRecipe({id:ItemID.ingotTungsten,data:0},{id:ItemID.dustTungsten,count:1,data:0});
    RecipeRegistry.addMaceratorRecipe({id:ItemID.ingotUranium,data:0},{id:ItemID.dustUranium,count:1,data:0});
    RecipeRegistry.addMaceratorRecipe({id:ItemID.ingotSilver,data:0},{id:ItemID.dustSilver,count:1,data:0});
    RecipeRegistry.addMaceratorRecipe({id:ItemID.ingotAluminium,data:0},{id:ItemID.dustAluminium,count:1,data:0});
    RecipeRegistry.addMaceratorRecipe({id:ItemID.energyCrystal,data:0},{id:ItemID.dustEnergium,count:9,data:0});
    RecipeRegistry.addMaceratorRecipe({id:ItemID.crushedPurifiedCopper,data:0},{id:ItemID.dustCopper,count:2,data:0});
    RecipeRegistry.addMaceratorRecipe({id:ItemID.crushedPurifiedCassiterite,data:0},{id:ItemID.dustTin,count:2,data:0});
    RecipeRegistry.addMaceratorRecipe({id:ItemID.crushedPurifiedGalena,data:0},{id:ItemID.dustLead,count:2,data:0});
    RecipeRegistry.addMaceratorRecipe({id:ItemID.crushedPurifiedIron,data:0},{id:ItemID.dustIron,count:2,data:0});
    RecipeRegistry.addMaceratorRecipe({id:ItemID.crushedPurifiedGold,data:0},{id:ItemID.dustGold,count:2,data:0});
    RecipeRegistry.addMaceratorRecipe({id:ItemID.crushedPurifiedAntimony,data:0},{id:ItemID.dustAntimony,count:2,data:0});
    RecipeRegistry.addMaceratorRecipe({id:ItemID.crushedPurifiedSpodumene,data:0},{id:ItemID.dustLithium,count:2,data:0});
    RecipeRegistry.addMaceratorRecipe({id:ItemID.crushedPurifiedTungsten,data:0},{id:ItemID.dustTungsten,count:2,data:0});
    RecipeRegistry.addMaceratorRecipe({id:ItemID.crushedPurifiedUranium,data:0},{id:ItemID.dustUranium,count:2,data:0});
    RecipeRegistry.addMaceratorRecipe({id:ItemID.crushedPurifiedSilver,data:0},{id:ItemID.dustSilver,count:2,data:0});
    RecipeRegistry.addMaceratorRecipe({id:ItemID.crushedPurifiedTetrahedrite,data:0},{id:ItemID.dustTetrahedrite,count:2,data:0});
    RecipeRegistry.addMaceratorRecipe({id:ItemID.crushedPurifiedAluminium,data:0},{id:ItemID.dustAluminium,count:2,data:0});

    RecipeRegistry.addBlastFurnaceRecipe({id:ItemID.dustSilicon,data:0},[{id:ItemID.ingotSilicon,count:1,data:0}]);
    RecipeRegistry.addBlastFurnaceRecipe({id:ItemID.dustTungsten,data:0},[{id:ItemID.ingotTungsten,count:1,data:0}]);

    RecipeRegistry.addElectrolyzerRecipe({id:ItemID.dustDiamond,count:1,data:0},[{id:ItemID.dustCarbon,count:64,data:0}]);
    RecipeRegistry.addElectrolyzerRecipe({id:ItemID.dustSiliconDioxide,count:3,data:0},[{id:ItemID.dustSilicon,count:1,data:0}]);

    RecipeRegistry.addCentrifugeRecipe({id:ItemID.dustFlint,data:0},[{id:ItemID.dustSmallSiliconDioxide,count:3,data:0}]);
    RecipeRegistry.addCentrifugeRecipe({id:ItemID.dustTetrahedrite,data:0},[{id:ItemID.dustCopper,count:1,data:0},{id:ItemID.dustSmallAntimony,count:1,data:0}]);
});




// file: item/resource/gear.js

// 青铜齿轮
IDRegistry.genItemID("gearBronze");
Item.createItem("gearBronze","Bronze Gear",{name:"bronze_gear"});

// 铁齿轮
IDRegistry.genItemID("gearIron");
Item.createItem("gearIron","Iron Gear",{name:"iron_gear"});

// 钢齿轮
IDRegistry.genItemID("gearSteel");
Item.createItem("gearSteel","Steel Gear",{name:"steel_gear"});

Callback.addCallback("PreLoaded",function(){
    Item.addCreativeGroup("gear",Translation.translate("Gear"),[
        ItemID.gearBronze,
        ItemID.gearIron,
        ItemID.gearSteel
    ]);

    var wrench = Tool.getAllTool("Wrench");
    for(let i = 0;i < wrench.length;i++){
        RecipeRegistry.addShapedRecipe({id:ItemID.gearBronze,count:1,data:0},[
            "aba",
            "bcb",
            "aba"
        ],["a",ItemID.stickBronze,0,"b",ItemID.plateBronze,0,"c",wrench[i],-1],{4:1});
        
        RecipeRegistry.addShapedRecipe({id:ItemID.gearIron,count:1,data:0},[
            "aba",
            "bcb",
            "aba"
        ],["a",ItemID.stickIron,0,"b",ItemID.plateIron,0,"c",wrench[i],-1],{4:1});

        RecipeRegistry.addShapedRecipe({id:ItemID.gearSteel,count:1,data:0},[
            "aba",
            "bcb",
            "aba"
        ],["a",ItemID.stickSteel,0,"b",ItemID.plateSteel,0,"c",wrench[i],-1],{4:1});
    }
});




// file: item/resource/ingot.js

Block.createSpecialType({
    base:1,
    solid:true,
	destroytime:1,
	explosionres:12
},"block");

// 铜块
IDRegistry.genBlockID("blockCopper");
Block.createBlock("blockCopper",[
    {name:"Copper Block",texture:[["copper_block",0]],inCreative:true}
],"block");
ToolAPI.registerBlockMaterial(BlockID.blockCopper,"stone",1,true);
Block.setDestroyLevel("blockCopper",1);

// 锡块
IDRegistry.genBlockID("blockTin");
Block.createBlock("blockTin",[
    {name:"Tin Block",texture:[["tin_block",0]],inCreative:true}
],"block");
ToolAPI.registerBlockMaterial(BlockID.blockTin,"stone",1,true);
Block.setDestroyLevel("blockTin",1);

// 青铜块
IDRegistry.genBlockID("blockBronze");
Block.createBlock("blockBronze",[
    {name:"Bronze Block",texture:[["bronze_block",0]],inCreative:true}
],"block");
ToolAPI.registerBlockMaterial(BlockID.blockBronze,"stone",1,true);
Block.setDestroyLevel("blockBronze",1);

// 铅块
IDRegistry.genBlockID("blockLead");
Block.createBlock("blockLead",[
    {name:"Lead Block",texture:[["lead_block",0]],inCreative:true}
],"block");
ToolAPI.registerBlockMaterial(BlockID.blockLead,"stone",1,true);
Block.setDestroyLevel("blockLead",1);

// 锻铁块
IDRegistry.genBlockID("blockWroughtIron");
Block.createBlock("blockWroughtIron",[
    {name:"Wrought Iron Block",texture:[["wrought_iron_block",0]],inCreative:true}
],"block");
ToolAPI.registerBlockMaterial(BlockID.blockWroughtIron,"stone",1,true);
Block.setDestroyLevel("blockWroughtIron",1);

// 钢块
IDRegistry.genBlockID("blockSteel");
Block.createBlock("blockSteel",[
    {name:"Steel Block",texture:[["steel_block",0]],inCreative:true}
],"block");
ToolAPI.registerBlockMaterial(BlockID.blockSteel,"stone",1,true);
Block.setDestroyLevel("blockSteel",1);

// 锑块
IDRegistry.genBlockID("blockAntimony");
Block.createBlock("blockAntimony",[
    {name:"Antimony Block",texture:[["antimony_block",0]],inCreative:true}
],"block");
ToolAPI.registerBlockMaterial(BlockID.blockAntimony,"stone",1,true);
Block.setDestroyLevel("blockAntimony",1);

// 锂块
IDRegistry.genBlockID("blockLithium");
Block.createBlock("blockLithium",[
    {name:"Lithium Block",texture:[["lithium_block",0]],inCreative:true}
],"block");
ToolAPI.registerBlockMaterial(BlockID.blockLithium,"stone",1,true);
Block.setDestroyLevel("blockLithium",1);

// 碳块
IDRegistry.genBlockID("blockCarbon");
Block.createBlock("blockCarbon",[
    {name:"Carbon Block",texture:[["carbon_block",0]],inCreative:true}
],"block");
ToolAPI.registerBlockMaterial(BlockID.blockCarbon,"stone",1,true);
Block.setDestroyLevel("blockCarbon",1);

// 钨块
IDRegistry.genBlockID("blockTungsten");
Block.createBlock("blockTungsten",[
    {name:"Tungsten Block",texture:[["tungsten_block",0]],inCreative:true}
],"block");
ToolAPI.registerBlockMaterial(BlockID.blockTungsten,"stone",1,true);
Block.setDestroyLevel("blockTungsten",1);

// 铀块
IDRegistry.genBlockID("blockUranium");
Block.createBlock("blockUranium",[
    {name:"Uranium Block",texture:[["uranium_block",0]],inCreative:true}
],"block");
ToolAPI.registerBlockMaterial(BlockID.blockUranium,"stone",1,true);
Block.setDestroyLevel("blockUranium",1);

// 银块
IDRegistry.genBlockID("blockSilver");
Block.createBlock("blockSilver",[
    {name:"Silver Block",texture:[["silver_block",0]],inCreative:true}
],"block");
ToolAPI.registerBlockMaterial(BlockID.blockSilver,"stone",1,true);
Block.setDestroyLevel("blockSilver",1);

// 铝块
IDRegistry.genBlockID("blockAluminium");
Block.createBlock("blockAluminium",[
    {name:"Aluminium Block",texture:[["aluminium_block",0]],inCreative:true}
],"block");
ToolAPI.registerBlockMaterial(BlockID.blockAluminium,"stone",1,true);
Block.setDestroyLevel("blockAluminium",1);

// 铅锑合金块
IDRegistry.genBlockID("blockLeadAntimony");
Block.createBlock("blockLeadAntimony",[
    {name:"Lead-Antimony Alloy Block",texture:[["lead_antimony_block",0]],inCreative:true}
],"block");
ToolAPI.registerBlockMaterial(BlockID.blockLeadAntimony,"stone",1,true);
Block.setDestroyLevel("blockLeadAntimony",1);

Callback.addCallback("PreLoaded",function(){
    Item.addCreativeGroup("block",Translation.translate("Block"),[
        BlockID.blockCopper,
        BlockID.blockTin,
        BlockID.blockBronze,
        BlockID.blockLead,
        BlockID.blockWroughtIron,
        BlockID.blockSteel,
        BlockID.blockAntimony,
        BlockID.blockLithium,
        BlockID.blockCarbon,
        BlockID.blockTungsten,
        BlockID.blockUranium,
        BlockID.blockSilver,
        BlockID.blockAluminium,
        BlockID.blockLeadAntimony
    ]);
    
    Recipes.addShapeless({id:ItemID.ingotCopper,count:9,data:0},[{id:BlockID.blockCopper,data:0}]);
    Recipes.addShaped({id:BlockID.blockCopper,count:1,data:0},["aaa","aaa","aaa"],["a",ItemID.ingotCopper,0]);

    Recipes.addShapeless({id:ItemID.ingotTin,count:9,data:0},[{id:BlockID.blockTin,data:0}]);
    Recipes.addShaped({id:BlockID.blockTin,count:1,data:0},["aaa","aaa","aaa"],["a",ItemID.ingotTin,0]);

    Recipes.addShapeless({id:ItemID.ingotBronze,count:9,data:0},[{id:BlockID.blockBronze,data:0}]);
    Recipes.addShaped({id:BlockID.blockBronze,count:1,data:0},["aaa","aaa","aaa"],["a",ItemID.ingotBronze,0]);

    Recipes.addShapeless({id:ItemID.ingotLead,count:9,data:0},[{id:BlockID.blockLead,data:0}]);
    Recipes.addShaped({id:BlockID.blockLead,count:1,data:0},["aaa","aaa","aaa"],["a",ItemID.ingotLead,0]);

    Recipes.addShapeless({id:ItemID.ingotWroughtIron,count:9,data:0},[{id:BlockID.blockWroughtIron,data:0}]);
    Recipes.addShaped({id:BlockID.blockWroughtIron,count:1,data:0},["aaa","aaa","aaa"],["a",ItemID.ingotWroughtIron,0]);

    Recipes.addShapeless({id:ItemID.ingotSteel,count:9,data:0},[{id:BlockID.blockSteel,data:0}]);
    Recipes.addShaped({id:BlockID.blockSteel,count:1,data:0},["aaa","aaa","aaa"],["a",ItemID.ingotSteel,0]);

    Recipes.addShapeless({id:ItemID.ingotAntimony,count:9,data:0},[{id:BlockID.blockAntimony,data:0}]);
    Recipes.addShaped({id:BlockID.blockAntimony,count:1,data:0},["aaa","aaa","aaa"],["a",ItemID.ingotAntimony,0]);

    Recipes.addShapeless({id:ItemID.ingotLithium,count:9,data:0},[{id:BlockID.blockLithium,data:0}]);
    Recipes.addShaped({id:BlockID.blockLithium,count:1,data:0},["aaa","aaa","aaa"],["a",ItemID.ingotLithium,0]);

    Recipes.addShapeless({id:ItemID.dustCarbon,count:9,data:0},[{id:BlockID.blockCarbon,data:0}]);
    Recipes.addShaped({id:BlockID.blockCarbon,count:1,data:0},["aaa","aaa","aaa"],["a",ItemID.dustCarbon,0]);

    Recipes.addShapeless({id:ItemID.ingotTungsten,count:9,data:0},[{id:BlockID.blockTungsten,data:0}]);
    Recipes.addShaped({id:BlockID.blockTungsten,count:1,data:0},["aaa","aaa","aaa"],["a",ItemID.ingotTungsten,0]);

    Recipes.addShapeless({id:ItemID.ingotUranium,count:9,data:0},[{id:BlockID.blockUranium,data:0}]);
    Recipes.addShaped({id:BlockID.blockUranium,count:1,data:0},["aaa","aaa","aaa"],["a",ItemID.ingotUranium,0]);

    Recipes.addShapeless({id:ItemID.ingotSilver,count:9,data:0},[{id:BlockID.blockSilver,data:0}]);
    Recipes.addShaped({id:BlockID.blockSilver,count:1,data:0},["aaa","aaa","aaa"],["a",ItemID.ingotSilver,0]);

    Recipes.addShapeless({id:ItemID.ingotAluminium,count:9,data:0},[{id:BlockID.blockAluminium,data:0}]);
    Recipes.addShaped({id:BlockID.blockAluminium,count:1,data:0},["aaa","aaa","aaa"],["a",ItemID.ingotAluminium,0]);

    Recipes.addShapeless({id:ItemID.ingotLeadAntimony,count:9,data:0},[{id:BlockID.blockLeadAntimony,data:0}]);
    Recipes.addShaped({id:BlockID.blockLeadAntimony,count:1,data:0},["aaa","aaa","aaa"],["a",ItemID.ingotLeadAntimony,0]);
});

// ==================================================================================================== //

// 铜锭
IDRegistry.genItemID("ingotCopper");
Item.createItem("ingotCopper","Copper Ingot",{name:"copper_ingot"});

// 锡锭
IDRegistry.genItemID("ingotTin");
Item.createItem("ingotTin","Tin Ingot",{name:"tin_ingot"});

// 铅锭
IDRegistry.genItemID("ingotLead");
Item.createItem("ingotLead","Lead Ingot",{name:"lead_ingot"});

// 青铜锭
IDRegistry.genItemID("ingotBronze");
Item.createItem("ingotBronze","Bronze Ingot",{name:"bronze_ingot"});

// 锻铁锭
IDRegistry.genItemID("ingotWroughtIron");
Item.createItem("ingotWroughtIron","Wrought Iron Ingot",{name:"wrought_iron_ingot"});

// 钢锭
IDRegistry.genItemID("ingotSteel");
Item.createItem("ingotSteel","Steel Ingot",{name:"steel_ingot"});

// 锑锭
IDRegistry.genItemID("ingotAntimony");
Item.createItem("ingotAntimony","Antimony Ingot",{name:"antimony_ingot"});

// 锂锭
IDRegistry.genItemID("ingotLithium");
Item.createItem("ingotLithium","Lithium Ingot",{name:"lithium_ingot"});

// 钨锭
IDRegistry.genItemID("ingotTungsten");
Item.createItem("ingotTungsten","Tungsten Ingot",{name:"tungsten_ingot"});

// 铀锭
IDRegistry.genItemID("ingotUranium");
Item.createItem("ingotUranium","Uranium Ingot",{name:"uranium_ingot"});

// 银锭
IDRegistry.genItemID("ingotSilver");
Item.createItem("ingotSilver","Silver Ingot",{name:"silver_ingot"});

// 铝锭
IDRegistry.genItemID("ingotAluminium");
Item.createItem("ingotAluminium","Aluminium Ingot",{name:"aluminium_ingot"});

// 硅锭
IDRegistry.genItemID("ingotSilicon");
Item.createItem("ingotSilicon","Silicon Ingot",{name:"silicon_ingot"});

// 恩奈特合金
IDRegistry.genItemID("ingotEnete");
Item.createItem("ingotEnete","Enete Alloy Ingot",{name:"enete_ingot"});

// 铅锑合金锭
IDRegistry.genItemID("ingotLeadAntimony");
Item.createItem("ingotLeadAntimony","Lead-Antimony Alloy Ingot",{name:"lead_antimony_ingot"});

// 红宝石
IDRegistry.genItemID("ruby");
Item.createItem("ruby","Ruby",{name:"ruby"});

Callback.addCallback("PreLoaded",function(){
    Item.addCreativeGroup("ingot",Translation.translate("Ingot"),[
        ItemID.ingotCopper,
        ItemID.ingotTin,
        ItemID.ingotLead,
        ItemID.ingotBronze,
        ItemID.ingotWroughtIron,
        ItemID.ingotSteel,
        ItemID.ingotAntimony,
        ItemID.ingotLithium,
        ItemID.ingotTungsten,
        ItemID.ingotUranium,
        ItemID.ingotSilver,
        ItemID.ingotAluminium,
        ItemID.ingotSilicon,
        ItemID.ingotEnete,
        ItemID.ingotLeadAntimony
    ]);

    RecipeRegistry.addBlastFurnaceRecipe({id:265,data:0},[{id:ItemID.ingotWroughtIron,count:1,data:0},{id:ItemID.slag,count:1,data:0}]);
    RecipeRegistry.addBlastFurnaceRecipe({id:ItemID.ingotWroughtIron,data:0},[{id:ItemID.ingotSteel,count:1,data:0},{id:ItemID.slag,count:1,data:0}]);
});




// file: item/resource/material.js

// 矿渣
IDRegistry.genItemID("slag");
Item.createItem("slag","Slag",{name:"slag"});

// 树脂
IDRegistry.genItemID("resin");
Item.createItem("resin","Resin",{name:"resin"});

// 小块煤炭
IDRegistry.genItemID("tinyCoal");
Item.createItem("tinyCoal","Tiny Coal",{name:"tiny_coal"});
Recipes.addFurnaceFuel(ItemID.tinyCoal,0,200);

// 小块木炭
IDRegistry.genItemID("tinyCharcoal");
Item.createItem("tinyCharcoal","Tiny Charcoal",{name:"tiny_charcoal"});
Recipes.addFurnaceFuel(ItemID.tinyCharcoal,0,200);

Callback.addCallback("PreLoaded",function(){
    Recipes.addShapeless({id:ItemID.tinyCoal,count:9,data:0},[{id:263,data:0}]);
	Recipes.addShaped({id:263,count:1,data:0},["aaa","aaa","aaa"],["a",ItemID.tinyCoal,0]);
    
    Recipes.addShapeless({id:ItemID.tinyCharcoal,count:9,data:0},[{id:263,data:1}]);
    Recipes.addShaped({id:263,count:1,data:0},["aaa","aaa","aaa"],["a",ItemID.tinyCharcoal,0]);
});

// 电动马达
IDRegistry.genItemID("electricMotor");
Item.createItem("electricMotor","Electric Motor",{name:"electric_motor"});

// 电动活塞
IDRegistry.genItemID("electricPiston");
Item.createItem("electricPiston","Electric Piston",{name:"electric_piston"});

// 真空管
IDRegistry.genItemID("vacuumTube");
Item.createItem("vacuumTube","Vacuum Tube",{name:"vacuum_tube"});

Callback.addCallback("PreLoaded",function(){
    Recipes.addShaped({id:ItemID.electricMotor,count:1,data:0},[
        " ab",
        "aca",
        "da "
    ],["a",ItemID.partTin,0,"b",ItemID.stickIron,0,"c",ItemID.wireCopper,0,"d",ItemID.wireTin,0]);

    Recipes.addShaped({id:ItemID.electricPiston,count:1,data:0},[
        "eae",
        "aca",
        "bdb"
    ],["a",ItemID.plateIron,0,"b",ItemID.stickIron,0,"c",ItemID.electricMotor,0,"d",ItemID.ringIron,0,"e",ItemID.partIron,0]);

    Recipes.addShaped({id:ItemID.vacuumTube,count:1,data:0},[
        " c ",
        "aba",
        " d "
    ],["a",ItemID.wireCopper,0,"b",ItemID.dustCarbon,0,"c",20,0,"d",331,0]);
});

Block.createSpecialType({
    base:1,
    solid:true,
    destroyTime:5
},"machine");

// 机器外壳
IDRegistry.genBlockID("machineCasing");
Block.createBlock("machineCasing",[
    // 青铜
    {name:"Machine Casing",texture:[["machine_bottom",0],["machine_top",0],["machine_side",0]],inCreative:true},
    // 基础 (铁)
    {name:"Machine Casing",texture:[["machine_bottom",1],["machine_top",1],["machine_side",1]],inCreative:true},
    // 高级 (钢)
    {name:"Machine Casing",texture:[["machine_bottom",2],["machine_top",2],["machine_side",2]],inCreative:true}
],"machine");
ToolAPI.registerBlockMaterial(BlockID.machineCasing,"stone",1,true);
Block.setDestroyLevel("machineCasing",1);

Callback.addCallback("PreLoaded",function(){
    Recipes.addShaped({id:BlockID.machineCasing,count:1,data:0},[
        "abb",
        "bcb",
        "bba"
    ],["a",ItemID.stickBronze,0,"b",ItemID.plateBronze,0,"c",ItemID.gearBronze,0]);
    
    Recipes.addShaped({id:BlockID.machineCasing,count:1,data:1},[
        "abb",
        "bcb",
        "bba"
    ],["a",ItemID.stickIron,0,"b",ItemID.plateIron,0,"c",ItemID.gearIron,0]);
    
    Recipes.addShaped({id:BlockID.machineCasing,count:1,data:2},[
        "abb",
        "bcb",
        "bba"
    ],["a",ItemID.stickSteel,0,"b",ItemID.plateSteel,0,"c",ItemID.gearSteel,0]);
});

// 反应堆外壳
IDRegistry.genBlockID("reactorCasing");
Block.createBlock("reactorCasing",[
    {name:"Reactor Casing",texture:[["machine_top",1]],inCreative:true}
],"machine");

Callback.addCallback("PreLoaded",function(){
    Item.addCreativeGroup("reactor",Translation.translate("Reactor"),[BlockID.reactorCasing]);

    Recipes.addShaped({id:BlockID.reactorCasing,count:1,data:0},[
        "aa",
        "aa"
    ],["a",ItemID.plateLead,0]);
});

// 锂-6
IDRegistry.genItemID("lithium6");
IDRegistry.genItemID("smallLithium6");
Item.createItem("lithium6","Lithium-6",{name:"lithium6"});
Item.createItem("smallLithium6","Small Pile of Lithium-6",{name:"small_lithium6"});

// 锂-7
IDRegistry.genItemID("lithium7");
IDRegistry.genItemID("smallLithium7");
Item.createItem("lithium7","Lithium-7",{name:"lithium7"});
Item.createItem("smallLithium7","Small Pile of Lithium-7",{name:"small_lithium7"});

// 铀-235
IDRegistry.genItemID("uranium235");
IDRegistry.genItemID("smallUranium235");
Item.createItem("uranium235","Uranium-235",{name:"uranium235"});
Item.createItem("smallUranium235","Small Pile of Uranium-235",{name:"small_uranium235"});

// 铀-238
IDRegistry.genItemID("uranium238");
IDRegistry.genItemID("smallUranium238");
Item.createItem("uranium238","Uranium-238",{name:"uranium238"});
Item.createItem("smallUranium238","Small Pile of Uranium-238",{name:"small_uranium238"});

Callback.addCallback("PreLoaded",function(){
    Item.addCreativeGroup("reactor",Translation.translate("Reactor"),[
        ItemID.lithium6,
        ItemID.smallLithium6,
        ItemID.lithium7,
        ItemID.smallLithium7,
        ItemID.uranium235,
        ItemID.smallUranium235,
        ItemID.uranium238,
        ItemID.smallUranium238
    ]);

    Recipes.addShapeless({id:ItemID.smallLithium6,count:9,data:0},[{id:ItemID.lithium6,data:0}]);
    Recipes.addShaped({id:ItemID.lithium6,count:1,data:0},["aaa","aaa","aaa"],["a",ItemID.smallLithium6,0]);

    Recipes.addShapeless({id:ItemID.smallLithium7,count:9,data:0},[{id:ItemID.lithium7,data:0}]);
    Recipes.addShaped({id:ItemID.lithium7,count:1,data:0},["aaa","aaa","aaa"],["a",ItemID.smallLithium7,0]);

    Recipes.addShapeless({id:ItemID.smallUranium235,count:9,data:0},[{id:ItemID.uranium235,data:0}]);
    Recipes.addShaped({id:ItemID.uranium235,count:1,data:0},["aaa","aaa","aaa"],["a",ItemID.smallUranium235,0]);

    Recipes.addShapeless({id:ItemID.smallUranium238,count:9,data:0},[{id:ItemID.uranium238,data:0}]);
    Recipes.addShaped({id:ItemID.uranium238,count:1,data:0},["aaa","aaa","aaa"],["a",ItemID.smallUranium238,0]);

    RecipeRegistry.addCentrifugeRecipe({id:ItemID.dustLithium,count:1,data:0},[{id:ItemID.lithium7,count:1,data:0},{id:ItemID.smallLithium6,count:1,data:0}]);
    RecipeRegistry.addCentrifugeRecipe({id:ItemID.dustUranium,count:1,data:0},[{id:ItemID.uranium238,count:4,data:0},{id:ItemID.smallUranium235,count:1,data:0}]);
});

// 贫化浓缩铀
IDRegistry.genItemID("enrichedUraniumDepleted");
Item.createItem("enrichedUraniumDepleted","Depleted Enriched Uranium",{name:"enriched_uranium",meta:0});

// 精炼浓缩铀
IDRegistry.genItemID("enrichedUraniumRefined");
Item.createItem("enrichedUraniumRefined","Refined Enriched Uranium",{name:"enriched_uranium",meta:1});

Callback.addCallback("PreLoaded",function(){
    Item.addCreativeGroup("reactor",Translation.translate("Reactor"),[
        ItemID.enrichedUraniumDepleted,
        ItemID.enrichedUraniumRefined
    ]);
    
    Recipes.addShaped({id:ItemID.enrichedUraniumDepleted,count:1,data:0},[
        "aaa",
        "bbb",
        "aaa"
    ],["a",ItemID.uranium238,0,"b",ItemID.smallUranium235,0]);

    Recipes.addShaped({id:ItemID.enrichedUraniumRefined,count:1,data:0},[
        "aaa",
        "bbb",
        "aaa"
    ],["a",ItemID.smallUranium235,0,"b",ItemID.uranium238,0]);
});




// file: item/resource/part.js

// 铁制零件
IDRegistry.genItemID("partIron");
Item.createItem("partIron","Iron Part",{name:"iron_part"});

// 锡制零件
IDRegistry.genItemID("partTin");
Item.createItem("partTin","Tin Part",{name:"tin_part"});

// 铜制零件
IDRegistry.genItemID("partCopper");
Item.createItem("partCopper","Copper Part",{name:"copper_part"});

// 金制零件
IDRegistry.genItemID("partGold");
Item.createItem("partGold","Gold Part",{name:"gold_part"});

// 钢制零件
IDRegistry.genItemID("partSteel");
Item.createItem("partSteel","Steel Part",{name:"steel_part"});

// 恩奈特特制零件
IDRegistry.genItemID("partEnete");
Item.createItem("partEnete","Enete Alloy Part",{name:"enete_part"});

// 铅锑特制零件
IDRegistry.genItemID("partLeadAntimony");
Item.createItem("partLeadAntimony","Lead-Antimony Alloy Part",{name:"lead_antimony_part"});

Callback.addCallback("PreLoaded",function(){
    Item.addCreativeGroup("part",Translation.translate("Part"),[
        ItemID.partIron,
        ItemID.partTin,
        ItemID.partCopper,
        ItemID.partGold,
        ItemID.partSteel,
        ItemID.partEnete,
        ItemID.partLeadAntimony
    ]);

    Recipes.addShaped({id:ItemID.partIron,count:1,data:0},[
        "ab",
        "ba"
    ],["a",ItemID.plateIron,0,"b",ItemID.stickIron,0]);
    
    Recipes.addShaped({id:ItemID.partTin,count:1,data:0},[
        "ab",
        "ba"
    ],["a",ItemID.plateTin,0,"b",ItemID.stickTin,0]);

    Recipes.addShaped({id:ItemID.partCopper,count:1,data:0},[
        "ab",
        "ba"
    ],["a",ItemID.plateCopper,0,"b",ItemID.stickCopper,0]);

    Recipes.addShaped({id:ItemID.partGold,count:1,data:0},[
        "ab",
        "ba"
    ],["a",ItemID.plateGold,0,"b",ItemID.stickGold,0]);

    Recipes.addShaped({id:ItemID.partSteel,count:1,data:0},[
        "ab",
        "ba"
    ],["a",ItemID.plateSteel,0,"b",ItemID.stickSteel,0]);

    Recipes.addShaped({id:ItemID.partEnete,count:1,data:0},[
        "ab",
        "ba"
    ],["a",ItemID.plateEnete,0,"b",ItemID.stickEnete,0]);

    Recipes.addShaped({id:ItemID.partLeadAntimony,count:1,data:0},[
        "ab",
        "ba"
    ],["a",ItemID.plateLeadAntimony,0,"b",ItemID.stickLeadAntimony,0]);
});




// file: item/resource/plate.js

// 铜板
IDRegistry.genItemID("plateCopper");
Item.createItem("plateCopper","Copper Plate",{name:"copper_plate"});

// 锡板
IDRegistry.genItemID("plateTin");
Item.createItem("plateTin","Tin Plate",{name:"tin_plate"});

// 青铜板
IDRegistry.genItemID("plateBronze");
Item.createItem("plateBronze","Bronze Plate",{name:"bronze_plate"});

// 铁板
IDRegistry.genItemID("plateIron");
Item.createItem("plateIron","Iron Plate",{name:"iron_plate"});

// 钢板
IDRegistry.genItemID("plateSteel");
Item.createItem("plateSteel","Steel Plate",{name:"steel_plate"});

// 金板
IDRegistry.genItemID("plateGold");
Item.createItem("plateGold","Gold Plate",{name:"gold_plate"});

// 碳板
IDRegistry.genItemID("plateCarbon");
Item.createItem("plateCarbon","Carbon Plate",{name:"carbon_plate"});

// 钨板
IDRegistry.genItemID("plateTungsten");
Item.createItem("plateTungsten","Tungsten Plate",{name:"tungsten_plate"});

// 青金石板
IDRegistry.genItemID("plateLapis");
Item.createItem("plateLapis","Lapis Plate",{name:"lapis_plate"});

// 铅板
IDRegistry.genItemID("plateLead");
Item.createItem("plateLead","Lead Plate",{name:"lead_plate"});

// 铝板
IDRegistry.genItemID("plateAluminium");
Item.createItem("plateAluminium","Aluminium Plate",{name:"aluminium_plate"});

// 锑板
IDRegistry.genItemID("plateAntimony");
Item.createItem("plateAntimony","Antimony Plate",{name:"antimony_plate"});

// 恩奈特合金板
IDRegistry.genItemID("plateEnete");
Item.createItem("plateEnete","Enete Alloy Plate",{name:"enete_plate"});

// 铅锑合金板
IDRegistry.genItemID("plateLeadAntimony");
Item.createItem("plateLeadAntimony","Lead-Antimony Alloy Plate",{name:"lead_antimony_plate"});

// 电路板
IDRegistry.genItemID("plateCircuit");
Item.createItem("plateCircuit","Circuit Plate",{name:"circuit_plate"});

// 塑料板
IDRegistry.genItemID("platePlastic");
Item.createItem("platePlastic","Plastic Plate",{name:"plastic_plate"});

Callback.addCallback("PreLoaded",function(){
    Item.addCreativeGroup("plate",Translation.translate("Plate"),[
        ItemID.plateCopper,
        ItemID.plateTin,
        ItemID.plateBronze,
        ItemID.plateIron,
        ItemID.plateSteel,
        ItemID.plateGold,
        ItemID.plateCarbon,
        ItemID.plateTungsten,
        ItemID.plateLapis,
        ItemID.plateLead,
        ItemID.plateAluminium,
        ItemID.plateAntimony,
        ItemID.plateEnete,
        ItemID.plateLeadAntimony,
        ItemID.plateCircuit,
        ItemID.platePlastic
    ]);

    Recipes.addFurnace(ItemID.resin,ItemID.platePlastic);

    RecipeRegistry.addCompressorRecipe({id:ItemID.ingotCopper,data:0},{id:ItemID.plateCopper,count:1,data:0});
    RecipeRegistry.addCompressorRecipe({id:ItemID.ingotTin,data:0},{id:ItemID.plateTin,count:1,data:0});
    RecipeRegistry.addCompressorRecipe({id:ItemID.ingotBronze,data:0},{id:ItemID.plateBronze,count:1,data:0});
    RecipeRegistry.addCompressorRecipe({id:265,data:0},{id:ItemID.plateIron,count:1,data:0});
    RecipeRegistry.addCompressorRecipe({id:ItemID.ingotSteel,data:0},{id:ItemID.plateSteel,count:1,data:0});
    RecipeRegistry.addCompressorRecipe({id:266,data:0},{id:ItemID.plateGold,count:1,data:0});
    RecipeRegistry.addCompressorRecipe({id:ItemID.dustCarbon,data:0},{id:ItemID.plateCarbon,count:1,data:0});
    RecipeRegistry.addCompressorRecipe({id:ItemID.ingotTungsten,data:0},{id:ItemID.plateTungsten,count:1,data:0});
    RecipeRegistry.addCompressorRecipe({id:351,data:4},{id:ItemID.plateLapis,count:1,data:0});
    RecipeRegistry.addCompressorRecipe({id:ItemID.ingotLead,data:0},{id:ItemID.plateLead,count:1,data:0});
    RecipeRegistry.addCompressorRecipe({id:ItemID.ingotAluminium,data:0},{id:ItemID.plateAluminium,count:1,data:0});
    RecipeRegistry.addCompressorRecipe({id:ItemID.ingotLeadAntimony,data:0},{id:ItemID.plateLeadAntimony,count:1,data:0});
    RecipeRegistry.addCompressorRecipe({id:ItemID.ingotAntimony,data:0},{id:ItemID.plateAntimony,count:1,data:0});

    var hammer = Tool.getAllTool("Hammer");
    for(let i in hammer){
        RecipeRegistry.addShapeless({id:ItemID.plateCopper,count:1,data:0},[{id:ItemID.ingotCopper,data:0},{id:ItemID.ingotCopper,data:0}],hammer[i]);
        RecipeRegistry.addShapeless({id:ItemID.plateTin,count:1,data:0},[{id:ItemID.ingotTin,data:0},{id:ItemID.ingotTin,data:0}],hammer[i]);
        RecipeRegistry.addShapeless({id:ItemID.plateBronze,count:1,data:0},[{id:ItemID.ingotBronze,data:0},{id:ItemID.ingotBronze,data:0}],hammer[i]);
        RecipeRegistry.addShapeless({id:ItemID.plateIron,count:1,data:0},[{id:265,data:0},{id:265,data:0}],hammer[i]);
        RecipeRegistry.addShapeless({id:ItemID.plateSteel,count:1,data:0},[{id:ItemID.ingotSteel,data:0},{id:ItemID.ingotSteel,data:0}],hammer[i]);
        RecipeRegistry.addShapeless({id:ItemID.plateGold,count:1,data:0},[{id:266,data:0},{id:266,data:0}],hammer[i]);
        RecipeRegistry.addShapeless({id:ItemID.plateCarbon,count:1,data:0},[{id:ItemID.dustCarbon,data:0},{id:ItemID.dustCarbon,data:0}],hammer[i]);
        RecipeRegistry.addShapeless({id:ItemID.plateTungsten,count:1,data:0},[{id:ItemID.ingotTungsten,data:0},{id:ItemID.ingotTungsten,data:0}],hammer[i]);
        RecipeRegistry.addShapeless({id:ItemID.plateLapis,count:1,data:0},[{id:351,data:4},{id:351,data:4}],hammer[i]);
        RecipeRegistry.addShapeless({id:ItemID.plateLead,count:1,data:0},[{id:ItemID.ingotLead,data:0},{id:ItemID.ingotLead,data:0}],hammer[i]);
        RecipeRegistry.addShapeless({id:ItemID.plateAluminium,count:1,data:0},[{id:ItemID.ingotAluminium,data:0},{id:ItemID.ingotAluminium,data:0}],hammer[i]);
        RecipeRegistry.addShapeless({id:ItemID.plateLeadAntimony,count:1,data:0},[{id:ItemID.ingotLeadAntimony,data:0},{id:ItemID.ingotLeadAntimony,data:0}],hammer[i]);
        RecipeRegistry.addShapeless({id:ItemID.plateAntimony,count:1,data:0},[{id:ItemID.ingotAntimony,data:0},{id:ItemID.ingotAntimony,data:0}],hammer[i]);
        RecipeRegistry.addShapeless({id:ItemID.plateEnete,count:1,data:0},[{id:ItemID.ingotEnete,data:0},{id:ItemID.ingotEnete,data:0}],hammer[i]);
        RecipeRegistry.addShapeless({id:ItemID.plateCircuit,count:1,data:0},[{id:ItemID.platePlastic,data:0},{id:ItemID.dustSiliconDioxide,data:0}],hammer[i]);
    }
});




// file: item/resource/ring.js

// 铁环
IDRegistry.genItemID("ringIron");
Item.createItem("ringIron","Iron Ring",{name:"iron_ring"});

// 锡环
IDRegistry.genItemID("ringTin");
Item.createItem("ringTin","Tin Ring",{name:"tin_ring"});

// 钢环
IDRegistry.genItemID("ringSteel");
Item.createItem("ringSteel","Steel Ring",{name:"steel_ring"});

// 青铜环
IDRegistry.genItemID("ringBronze");
Item.createItem("ringBronze","Bronze Ring",{name:"bronze_ring"});

Callback.addCallback("PreLoaded",function(){
    Item.addCreativeGroup("ring",Translation.translate("Ring"),[
        ItemID.ringIron,
        ItemID.ringTin,
        ItemID.ringSteel,
        ItemID.ringBronze
    ]);

    var hammer = Tool.getAllTool("Hammer");
    for(let i in hammer){
        RecipeRegistry.addShapeless({id:ItemID.ringIron,count:1,data:0},[{id:ItemID.stickIron,data:0}],hammer[i]);
        RecipeRegistry.addShapeless({id:ItemID.ringTin,count:1,data:0},[{id:ItemID.stickTin,data:0}],hammer[i]);
        RecipeRegistry.addShapeless({id:ItemID.ringSteel,count:1,data:0},[{id:ItemID.stickSteel,data:0}],hammer[i]);
        RecipeRegistry.addShapeless({id:ItemID.ringBronze,count:1,data:0},[{id:ItemID.stickBronze,data:0}],hammer[i]);
    }
});




// file: item/resource/stick.js

// 铜棍
IDRegistry.genItemID("stickCopper");
Item.createItem("stickCopper","Copper Stick",{name:"copper_stick"});

// 锡棍
IDRegistry.genItemID("stickTin");
Item.createItem("stickTin","Tin Stick",{name:"tin_stick"});

// 青铜棍
IDRegistry.genItemID("stickBronze");
Item.createItem("stickBronze","Bronze Stick",{name:"bronze_stick"});

// 铁棍
IDRegistry.genItemID("stickIron");
Item.createItem("stickIron","Iron Stick",{name:"iron_stick"});

// 钢棍
IDRegistry.genItemID("stickSteel");
Item.createItem("stickSteel","Steel Stick",{name:"steel_stick"});

// 金棍
IDRegistry.genItemID("stickGold");
Item.createItem("stickGold","Gold Stick",{name:"gold_stick"});

// 钨棍
IDRegistry.genItemID("stickTungsten");
Item.createItem("stickTungsten","Tungsten Stick",{name:"tungsten_stick"});

// 恩奈特合金棍
IDRegistry.genItemID("stickEnete");
Item.createItem("stickEnete","Enete Alloy Stick",{name:"enete_stick"});

// 铅锑合金棍
IDRegistry.genItemID("stickLeadAntimony");
Item.createItem("stickLeadAntimony","Lead-Antimony Alloy Stick",{name:"lead_antimony_stick"});

// 青金石棍
IDRegistry.genItemID("stickLapis");
Item.createItem("stickLapis","Lapis Stick",{name:"lapis_stick"});

Callback.addCallback("PreLoaded",function(){
    Item.addCreativeGroup("stick",Translation.translate("Stick"),[
        ItemID.stickCopper,
        ItemID.stickTin,
        ItemID.stickBronze,
        ItemID.stickIron,
        ItemID.stickSteel,
        ItemID.stickGold,
        ItemID.stickTungsten,
        ItemID.stickEnete,
        ItemID.stickLeadAntimony,
        ItemID.stickLapis
    ]);

    RecipeRegistry.addCuttingRecipe({id:ItemID.plateCopper,data:0},{id:ItemID.stickCopper,count:4,data:0});
    RecipeRegistry.addCuttingRecipe({id:ItemID.plateTin,data:0},{id:ItemID.stickTin,count:4,data:0});
    RecipeRegistry.addCuttingRecipe({id:ItemID.plateBronze,data:0},{id:ItemID.stickBronze,count:4,data:0});
    RecipeRegistry.addCuttingRecipe({id:ItemID.plateIron,data:0},{id:ItemID.stickIron,count:4,data:0});
    RecipeRegistry.addCuttingRecipe({id:ItemID.plateSteel,data:0},{id:ItemID.stickSteel,count:4,data:0});
    RecipeRegistry.addCuttingRecipe({id:ItemID.plateGold,data:0},{id:ItemID.stickGold,count:4,data:0});
    RecipeRegistry.addCuttingRecipe({id:ItemID.plateTungsten,data:0},{id:ItemID.stickTungsten,count:4,data:0});
    RecipeRegistry.addCuttingRecipe({id:ItemID.plateEnete,data:0},{id:ItemID.stickEnete,count:4,data:0});
    RecipeRegistry.addCuttingRecipe({id:ItemID.plateLeadAntimony,data:0},{id:ItemID.stickLeadAntimony,count:4,data:0});
    RecipeRegistry.addCuttingRecipe({id:ItemID.plateLapis,data:0},{id:ItemID.stickLapis,count:4,data:0});

    var cutter = Tool.getAllTool("Cutter");
    for(let i in cutter){
        RecipeRegistry.addShapeless({id:ItemID.stickCopper,count:4,data:0},[{id:ItemID.plateCopper,data:0},{id:ItemID.plateCopper,data:0}],cutter[i]);
        RecipeRegistry.addShapeless({id:ItemID.stickTin,count:4,data:0},[{id:ItemID.plateTin,data:0},{id:ItemID.plateTin,data:0}],cutter[i]);
        RecipeRegistry.addShapeless({id:ItemID.stickBronze,count:4,data:0},[{id:ItemID.plateBronze,data:0},{id:ItemID.plateBronze,data:0}],cutter[i]);
        RecipeRegistry.addShapeless({id:ItemID.stickIron,count:4,data:0},[{id:ItemID.plateIron,data:0},{id:ItemID.plateIron,data:0}],cutter[i]);
        RecipeRegistry.addShapeless({id:ItemID.stickSteel,count:4,data:0},[{id:ItemID.plateSteel,data:0},{id:ItemID.plateSteel,data:0}],cutter[i]);
        RecipeRegistry.addShapeless({id:ItemID.stickGold,count:4,data:0},[{id:ItemID.plateGold,data:0},{id:ItemID.plateGold,data:0}],cutter[i]);
        RecipeRegistry.addShapeless({id:ItemID.stickTungsten,count:4,data:0},[{id:ItemID.plateTungsten,data:0},{id:ItemID.plateTungsten,data:0}],cutter[i]);
        RecipeRegistry.addShapeless({id:ItemID.stickLeadAntimony,count:4,data:0},[{id:ItemID.plateLeadAntimony,data:0},{id:ItemID.plateLeadAntimony,data:0}],cutter[i]);
        RecipeRegistry.addShapeless({id:ItemID.stickLapis,count:4,data:0},[{id:ItemID.plateLapis,data:0},{id:ItemID.plateLapis,data:0}],cutter[i]);
    }
});




// file: item/tool/antimony.js

ToolAPI.addToolMaterial("antimony",{durability:104,level:2,efficiency:4,damage:4,enchantability:20});

IDRegistry.genItemID("swordAntimony");
IDRegistry.genItemID("shovelAntimony");
IDRegistry.genItemID("pickaxeAntimony");
IDRegistry.genItemID("axeAntimony");
IDRegistry.genItemID("hoeAntimony");

Item.createItem("swordAntimony","Antimony Sword",{name:"antimony_sword"},{stack:1});
Item.createItem("shovelAntimony","Antimony Shovel",{name:"antimony_shovel"},{stack:1});
Item.createItem("pickaxeAntimony","Antimony Pickaxe",{name:"antimony_pickaxe"},{stack:1});
Item.createItem("axeAntimony","Antimony Axe",{name:"antimony_axe"},{stack:1});
Item.createItem("hoeAntimony","Antimony Hoe",{name:"antimony_hoe"},{stack:1});

Tool.registerTool(ItemID.swordAntimony,"Sword");
Tool.registerTool(ItemID.shovelAntimony,"Shovel");
Tool.registerTool(ItemID.pickaxeAntimony,"Pickaxe");
Tool.registerTool(ItemID.axeAntimony,"Axe");
Tool.registerTool(ItemID.hoeAntimony,"Hoe");

ToolAPI.setTool(ItemID.swordAntimony,"antimony",ToolType.sword);
ToolAPI.setTool(ItemID.shovelAntimony,"antimony",ToolType.shovel);
ToolAPI.setTool(ItemID.pickaxeAntimony,"antimony",ToolType.pickaxe);
ToolAPI.setTool(ItemID.axeAntimony,"antimony",ToolType.axe);
ToolAPI.setTool(ItemID.hoeAntimony,"antimony",ToolType.hoe);

Callback.addCallback("PreLoaded",function(){
    Item.addRepairItemIds(ItemID.swordAntimony,[ItemID.ingotAntimony]);
    Item.addRepairItemIds(ItemID.shovelAntimony,[ItemID.ingotAntimony]);
    Item.addRepairItemIds(ItemID.pickaxeAntimony,[ItemID.ingotAntimony]);
    Item.addRepairItemIds(ItemID.axeAntimony,[ItemID.ingotAntimony]);
    Item.addRepairItemIds(ItemID.hoeAntimony,[ItemID.ingotAntimony]);

    Item.addCreativeGroup("sword",Translation.translate("Sword"),[ItemID.swordAntimony]);
    Item.addCreativeGroup("shovel",Translation.translate("Shovel"),[ItemID.shovelAntimony]);
    Item.addCreativeGroup("pickaxe",Translation.translate("Pickaxe"),[ItemID.pickaxeAntimony]);
    Item.addCreativeGroup("axe",Translation.translate("Axe"),[ItemID.axeAntimony]);
    Item.addCreativeGroup("hoe",Translation.translate("Hoe"),[ItemID.hoeAntimony]);

    var file = Tool.getAllTool("File"),hammer = Tool.getAllTool("Hammer");
    for(let i = 0;i < file.length;i++){
        for(let ii = 0;ii < hammer.length;ii++){
            RecipeRegistry.addShapedRecipe({id:ItemID.swordAntimony,count:1,data:0},["cad"," a "," b "],["a",ItemID.plateAntimony,0,"b",280,0,"c",file[i],0,"d",hammer[ii],0],{0:1,2:1});
            RecipeRegistry.addShapedRecipe({id:ItemID.shovelAntimony,count:1,data:0},["cad"," b "," b "],["a",ItemID.plateAntimony,0,"b",280,0,"c",file[i],0,"d",hammer[ii],0],{0:1,2:1});
            RecipeRegistry.addShapedRecipe({id:ItemID.pickaxeAntimony,count:1,data:0},["aca","dbe"," b "],["a",ItemID.plateAntimony,0,"b",280,0,"c",ItemID.ingotAntimony,0,"d",file[i],0,"e",hammer[ii],0],{3:1,5:1});
            RecipeRegistry.addShapedRecipe({id:ItemID.axeAntimony,count:1,data:0},["acd","abe"," b "],["a",ItemID.plateAntimony,0,"b",280,0,"c",ItemID.ingotAntimony,0,"d",file[i],0,"e",hammer[ii],0],{2:1,5:1});
            RecipeRegistry.addShapedRecipe({id:ItemID.hoeAntimony,count:1,data:0},["aac","db "," b "],["a",ItemID.plateAntimony,0,"b",280,0,"c",file[i],0,"d",hammer[ii],0],{2:1,3:1});
        }
    }
});




// file: item/tool/bronze.js

ToolAPI.addToolMaterial("bronze",{durability:80,level:2,efficiency:6,damage:4,enchantability:6});

IDRegistry.genItemID("swordBronze");
IDRegistry.genItemID("shovelBronze");
IDRegistry.genItemID("pickaxeBronze");
IDRegistry.genItemID("axeBronze");
IDRegistry.genItemID("hoeBronze");
IDRegistry.genItemID("hammerBronze");
IDRegistry.genItemID("wrenchBronze");
IDRegistry.genItemID("cutterBronze");
IDRegistry.genItemID("mortarBronze");
IDRegistry.genItemID("fileBronze");
IDRegistry.genItemID("lighterBronze");

Item.createItem("swordBronze","Bronze Sword",{name:"bronze_sword"},{stack:1});
Item.createItem("shovelBronze","Bronze Shovel",{name:"bronze_shovel"},{stack:1});
Item.createItem("pickaxeBronze","Bronze Pickaxe",{name:"bronze_pickaxe"},{stack:1});
Item.createItem("axeBronze","Bronze Axe",{name:"bronze_axe"},{stack:1});
Item.createItem("hoeBronze","Bronze Hoe",{name:"bronze_hoe"},{stack:1});
Item.createItem("hammerBronze","Bronze Hammer",{name:"bronze_hammer"},{stack:1});
Item.createItem("wrenchBronze","Bronze Wrench",{name:"bronze_wrench"},{stack:1});
Item.createItem("cutterBronze","Bronze Cutter",{name:"bronze_cutter"},{stack:1});
Item.createItem("mortarBronze","Bronze Mortar",{name:"bronze_mortar"},{stack:1});
Item.createItem("fileBronze","Bronze File",{name:"bronze_file"},{stack:1});
Item.createItem("lighterBronze","Bronze Lighter",{name:"bronze_lighter"},{stack:1});

Tool.registerTool(ItemID.swordBronze,"Sword");
Tool.registerTool(ItemID.shovelBronze,"Shovel");
Tool.registerTool(ItemID.pickaxeBronze,"Pickaxe");
Tool.registerTool(ItemID.axeBronze,"Axe");
Tool.registerTool(ItemID.hoeBronze,"Hoe");
Tool.registerTool(ItemID.hammerBronze,"Hammer");
Tool.registerTool(ItemID.wrenchBronze,"Wrench");
Tool.registerTool(ItemID.cutterBronze,"Cutter");
Tool.registerTool(ItemID.mortarBronze,"Mortar");
Tool.registerTool(ItemID.fileBronze,"File");
Tool.registerTool(ItemID.lighterBronze,"Lighter");

ToolAPI.setTool(ItemID.swordBronze,"bronze",ToolType.sword);
ToolAPI.setTool(ItemID.shovelBronze,"bronze",ToolType.shovel);
ToolAPI.setTool(ItemID.pickaxeBronze,"bronze",ToolType.pickaxe);
ToolAPI.setTool(ItemID.axeBronze,"bronze",ToolType.axe);
ToolAPI.setTool(ItemID.hoeBronze,"bronze",ToolType.hoe);
ToolAPI.setTool(ItemID.hammerBronze,"bronze",ToolType.hammer);
ToolAPI.setTool(ItemID.lighterBronze,"bronze",ToolType.lighter);

Item.setMaxDamage(ItemID.wrenchBronze,ToolAPI.getToolMaterial("bronze").durability);
Item.setMaxDamage(ItemID.cutterBronze,ToolAPI.getToolMaterial("bronze").durability);
Item.setMaxDamage(ItemID.mortarBronze,ToolAPI.getToolMaterial("bronze").durability);
Item.setMaxDamage(ItemID.fileBronze,ToolAPI.getToolMaterial("bronze").durability);

Callback.addCallback("PreLoaded",function(){
    Item.addRepairItemIds(ItemID.swordBronze,[ItemID.ingotBronze]);
    Item.addRepairItemIds(ItemID.shovelBronze,[ItemID.ingotBronze]);
    Item.addRepairItemIds(ItemID.pickaxeBronze,[ItemID.ingotBronze]);
    Item.addRepairItemIds(ItemID.axeBronze,[ItemID.ingotBronze]);
    Item.addRepairItemIds(ItemID.hoeBronze,[ItemID.ingotBronze]);
    Item.addRepairItemIds(ItemID.hammerBronze,[ItemID.ingotBronze]);
    Item.addRepairItemIds(ItemID.wrenchBronze,[ItemID.ingotBronze]);
    Item.addRepairItemIds(ItemID.cutterBronze,[ItemID.ingotBronze]);
    Item.addRepairItemIds(ItemID.mortarBronze,[ItemID.ingotBronze]);
    Item.addRepairItemIds(ItemID.fileBronze,[ItemID.ingotBronze]);
    Item.addRepairItemIds(ItemID.lighterBronze,[ItemID.ingotBronze]);

    Item.addCreativeGroup("sword",Translation.translate("Sword"),[ItemID.swordBronze]);
    Item.addCreativeGroup("shovel",Translation.translate("Shovel"),[ItemID.shovelBronze]);
    Item.addCreativeGroup("pickaxe",Translation.translate("Pickaxe"),[ItemID.pickaxeBronze]);
    Item.addCreativeGroup("axe",Translation.translate("Axe"),[ItemID.axeBronze]);
    Item.addCreativeGroup("hoe",Translation.translate("Hoe"),[ItemID.hoeBronze]);
    Item.addCreativeGroup("hammer",Translation.translate("Hammer"),[ItemID.hammerBronze]);
    Item.addCreativeGroup("wrench",Translation.translate("Wrench"),[ItemID.wrenchBronze]);
    Item.addCreativeGroup("cutter",Translation.translate("Cutter"),[ItemID.cutterBronze]);
    Item.addCreativeGroup("mortar",Translation.translate("Mortar"),[ItemID.mortarBronze]);
    Item.addCreativeGroup("file",Translation.translate("File"),[ItemID.fileBronze]);
    Item.addCreativeGroup("lighter",Translation.translate("Lighter"),[ItemID.lighterBronze]);

    var file = Tool.getAllTool("File"),hammer = Tool.getAllTool("Hammer");
    for(let i = 0;i < file.length;i++){
        for(let ii = 0;ii < hammer.length;ii++){
            RecipeRegistry.addShapedRecipe({id:ItemID.swordBronze,count:1,data:0},["cad"," a "," b "],["a",ItemID.plateBronze,0,"b",280,0,"c",file[i],0,"d",hammer[ii],0],{0:1,2:1});
            RecipeRegistry.addShapedRecipe({id:ItemID.shovelBronze,count:1,data:0},["cad"," b "," b "],["a",ItemID.plateBronze,0,"b",280,0,"c",file[i],0,"d",hammer[ii],0],{0:1,2:1});
            RecipeRegistry.addShapedRecipe({id:ItemID.pickaxeBronze,count:1,data:0},["aca","dbe"," b "],["a",ItemID.plateBronze,0,"b",280,0,"c",ItemID.ingotBronze,0,"d",file[i],0,"e",hammer[ii],0],{3:1,5:1});
            RecipeRegistry.addShapedRecipe({id:ItemID.axeBronze,count:1,data:0},["acd","abe"," b "],["a",ItemID.plateBronze,0,"b",280,0,"c",ItemID.ingotBronze,0,"d",file[i],0,"e",hammer[ii],0],{2:1,5:1});
            RecipeRegistry.addShapedRecipe({id:ItemID.hoeBronze,count:1,data:0},["aac","db "," b "],["a",ItemID.plateBronze,0,"b",280,0,"c",file[i],0,"d",hammer[ii],0],{2:1,3:1});
        }
        RecipeRegistry.addShapedRecipe({id:ItemID.wrenchBronze,count:1,data:0},[" ac","eba","de "],["a",ItemID.plateBronze,0,"b",ItemID.ingotBronze,0,"c",file[i],-1,"d",ItemID.ringBronze,0,"e",ItemID.stickBronze,0],{2:1});
    }

    Recipes.addShaped({id:ItemID.hammerBronze,count:1,data:0},[" ab"," ca","c  "],["a",ItemID.ingotBronze,0,"b",287,0,"c",280,0]);
    Recipes.addShaped({id:ItemID.cutterBronze,count:1,data:0},["a a","aba","b b"],["a",ItemID.plateBronze,0,"b",ItemID.ingotBronze,0]);
    Recipes.addShaped({id:ItemID.mortarBronze,count:1,data:0},["  c","aba"," a "],["a",ItemID.plateBronze,0,"b",318,0,"c",280,0]);
    Recipes.addShaped({id:ItemID.fileBronze,count:1,data:0},[ "a" , "a" , "b" ],["a",ItemID.plateBronze,0,"b",280,0]);
    Recipes.addShaped({id:ItemID.lighterBronze,count:1,data:0},["aba"],["a",ItemID.plateBronze,0,"b",318,0]);
});




// file: item/tool/copper.js

ToolAPI.addToolMaterial("copper",{durability:250,level:2,efficiency:4,damage:4,enchantability:6});

IDRegistry.genItemID("swordCopper");
IDRegistry.genItemID("shovelCopper");
IDRegistry.genItemID("pickaxeCopper");
IDRegistry.genItemID("axeCopper");
IDRegistry.genItemID("hoeCopper");

Item.createItem("swordCopper","Copper Sword",{name:"copper_sword"},{stack:1});
Item.createItem("shovelCopper","Copper Shovel",{name:"copper_shovel"},{stack:1});
Item.createItem("pickaxeCopper","Copper Pickaxe",{name:"copper_pickaxe"},{stack:1});
Item.createItem("axeCopper","Copper Axe",{name:"copper_axe"},{stack:1});
Item.createItem("hoeCopper","Copper Hoe",{name:"copper_hoe"},{stack:1});

Tool.registerTool(ItemID.swordCopper,"Sword");
Tool.registerTool(ItemID.shovelCopper,"Shovel");
Tool.registerTool(ItemID.pickaxeCopper,"Pickaxe");
Tool.registerTool(ItemID.axeCopper,"Axe");
Tool.registerTool(ItemID.hoeCopper,"Hoe");

ToolAPI.setTool(ItemID.swordCopper,"copper",ToolType.sword);
ToolAPI.setTool(ItemID.shovelCopper,"copper",ToolType.shovel);
ToolAPI.setTool(ItemID.pickaxeCopper,"copper",ToolType.pickaxe);
ToolAPI.setTool(ItemID.axeCopper,"copper",ToolType.axe);
ToolAPI.setTool(ItemID.hoeCopper,"copper",ToolType.hoe);

Callback.addCallback("PreLoaded",function(){
    Item.addRepairItemIds(ItemID.swordCopper,[ItemID.ingotCopper]);
    Item.addRepairItemIds(ItemID.shovelCopper,[ItemID.ingotCopper]);
    Item.addRepairItemIds(ItemID.pickaxeCopper,[ItemID.ingotCopper]);
    Item.addRepairItemIds(ItemID.axeCopper,[ItemID.ingotCopper]);
    Item.addRepairItemIds(ItemID.hoeCopper,[ItemID.ingotCopper]);

    Item.addCreativeGroup("sword",Translation.translate("Sword"),[ItemID.swordCopper]);
    Item.addCreativeGroup("shovel",Translation.translate("Shovel"),[ItemID.shovelCopper]);
    Item.addCreativeGroup("pickaxe",Translation.translate("Pickaxe"),[ItemID.pickaxeCopper]);
    Item.addCreativeGroup("axe",Translation.translate("Axe"),[ItemID.axeCopper]);
    Item.addCreativeGroup("hoe",Translation.translate("Hoe"),[ItemID.hoeCopper]);

    var file = Tool.getAllTool("File"),hammer = Tool.getAllTool("Hammer");
    for(let i = 0;i < file.length;i++){
        for(let ii = 0;ii < hammer.length;ii++){
            RecipeRegistry.addShapedRecipe({id:ItemID.swordCopper,count:1,data:0},["cad"," a "," b "],["a",ItemID.plateCopper,0,"b",280,0,"c",file[i],0,"d",hammer[ii],0],{0:1,2:1});
            RecipeRegistry.addShapedRecipe({id:ItemID.shovelCopper,count:1,data:0},["cad"," b "," b "],["a",ItemID.plateCopper,0,"b",280,0,"c",file[i],0,"d",hammer[ii],0],{0:1,2:1});
            RecipeRegistry.addShapedRecipe({id:ItemID.pickaxeCopper,count:1,data:0},["aca","dbe"," b "],["a",ItemID.plateCopper,0,"b",280,0,"c",ItemID.ingotCopper,0,"d",file[i],0,"e",hammer[ii],0],{3:1,5:1});
            RecipeRegistry.addShapedRecipe({id:ItemID.axeCopper,count:1,data:0},["acd","abe"," b "],["a",ItemID.plateCopper,0,"b",280,0,"c",ItemID.ingotCopper,0,"d",file[i],0,"e",hammer[ii],0],{2:1,5:1});
            RecipeRegistry.addShapedRecipe({id:ItemID.hoeCopper,count:1,data:0},["aac","db "," b "],["a",ItemID.plateCopper,0,"b",280,0,"c",file[i],0,"d",hammer[ii],0],{2:1,3:1});
        }
    }
});




// file: item/tool/flint.js

ToolAPI.addToolMaterial("flint",{durability:190,level:2,efficiency:4,damage:2,enchantability:4});

IDRegistry.genItemID("swordFlint");
IDRegistry.genItemID("shovelFlint");
IDRegistry.genItemID("pickaxeFlint");
IDRegistry.genItemID("axeFlint");
IDRegistry.genItemID("hoeFlint");

Item.createItem("swordFlint","Flint Sword",{name:"flint_sword"},{stack:1});
Item.createItem("shovelFlint","Flint Shovel",{name:"flint_shovel"},{stack:1});
Item.createItem("pickaxeFlint","Flint Pickaxe",{name:"flint_pickaxe"},{stack:1});
Item.createItem("axeFlint","Flint Axe",{name:"flint_axe"},{stack:1});
Item.createItem("hoeFlint","Flint Hoe",{name:"flint_hoe"},{stack:1});

Tool.registerTool(ItemID.swordFlint,"Sword");
Tool.registerTool(ItemID.shovelFlint,"Shovel");
Tool.registerTool(ItemID.pickaxeFlint,"Pickaxe");
Tool.registerTool(ItemID.axeFlint,"Axe");
Tool.registerTool(ItemID.hoeFlint,"Hoe");

ToolAPI.setTool(ItemID.swordFlint,"flint",ToolType.sword);
ToolAPI.setTool(ItemID.shovelFlint,"flint",ToolType.shovel);
ToolAPI.setTool(ItemID.pickaxeFlint,"flint",ToolType.pickaxe);
ToolAPI.setTool(ItemID.axeFlint,"flint",ToolType.axe);
ToolAPI.setTool(ItemID.hoeFlint,"flint",ToolType.hoe);

Callback.addCallback("PreLoaded",function(){
    Item.addRepairItemIds(ItemID.swordFlint,[318]);
    Item.addRepairItemIds(ItemID.shovelFlint,[318]);
    Item.addRepairItemIds(ItemID.pickaxeFlint,[318]);
    Item.addRepairItemIds(ItemID.axeFlint,[318]);
    Item.addRepairItemIds(ItemID.hoeFlint,[318]);

    Item.addCreativeGroup("sword",Translation.translate("Sword"),[ItemID.swordFlint]);
    Item.addCreativeGroup("shovel",Translation.translate("Shovel"),[ItemID.shovelFlint]);
    Item.addCreativeGroup("pickaxe",Translation.translate("Pickaxe"),[ItemID.pickaxeFlint]);
    Item.addCreativeGroup("axe",Translation.translate("Axe"),[ItemID.axeFlint]);
    Item.addCreativeGroup("hoe",Translation.translate("Hoe"),[ItemID.hoeFlint]);

    Recipes.addShaped({id:ItemID.swordFlint,count:1,data:0},["a","a","b"],["a",318,0,"b",280,0]);
    Recipes.addShaped({id:ItemID.shovelFlint,count:1,data:0},["a","b","b"],["a",318,0,"b",280,0]);
    Recipes.addShaped({id:ItemID.pickaxeFlint,count:1,data:0},["aaa"," b "," b "],["a",318,0,"b",280,0]);
    Recipes.addShaped({id:ItemID.axeFlint,count:1,data:0},["aa ","ab "," b "],["a",318,0,"b",280,0]);
    Recipes.addShaped({id:ItemID.hoeFlint,count:1,data:0},["aa "," b "," b "],["a",318,0,"b",280,0]);
});




// file: item/tool/iron.js

IDRegistry.genItemID("hammerIron");
IDRegistry.genItemID("wrenchIron");
IDRegistry.genItemID("cutterIron");
IDRegistry.genItemID("mortarIron");
IDRegistry.genItemID("fileIron");
IDRegistry.genItemID("lighterIron");

Item.createItem("hammerIron","Iron Hammer",{name:"iron_hammer"},{stack:1});
Item.createItem("wrenchIron","Iron Wrench",{name:"iron_wrench"},{stack:1});
Item.createItem("cutterIron","Iron Cutter",{name:"iron_cutter"},{stack:1});
Item.createItem("mortarIron","Iron Mortar",{name:"iron_mortar"},{stack:1});
Item.createItem("fileIron","Iron File",{name:"iron_file"},{stack:1});
Item.createItem("lighterIron","Iron Lighter",{name:"iron_lighter"},{stack:1});

Tool.registerTool(ItemID.hammerIron,"Hammer");
Tool.registerTool(ItemID.wrenchIron,"Wrench");
Tool.registerTool(ItemID.cutterIron,"Cutter");
Tool.registerTool(ItemID.mortarIron,"Mortar");
Tool.registerTool(ItemID.fileIron,"File");
Tool.registerTool(ItemID.lighterIron,"Lighter");

ToolAPI.setTool(ItemID.hammerIron,"iron",ToolType.hammer);
ToolAPI.setTool(ItemID.lighterIron,"iron",ToolType.lighter);

Item.setMaxDamage(ItemID.wrenchIron,ToolAPI.getToolMaterial("iron").durability);
Item.setMaxDamage(ItemID.cutterIron,ToolAPI.getToolMaterial("iron").durability);
Item.setMaxDamage(ItemID.mortarIron,ToolAPI.getToolMaterial("iron").durability);
Item.setMaxDamage(ItemID.fileIron,ToolAPI.getToolMaterial("iron").durability);

Callback.addCallback("PreLoaded",function(){
    Item.addRepairItemIds(ItemID.wrenchIron,[265]);
    Item.addRepairItemIds(ItemID.cutterIron,[265]);
    Item.addRepairItemIds(ItemID.mortarIron,[265]);
    Item.addRepairItemIds(ItemID.fileIron,[265]);
    Item.addRepairItemIds(ItemID.lighterIron,[265]);

    Item.addCreativeGroup("hammer",Translation.translate("Hammer"),[ItemID.hammerIron]);
    Item.addCreativeGroup("wrench",Translation.translate("Wrench"),[ItemID.wrenchIron]);
    Item.addCreativeGroup("cutter",Translation.translate("Cutter"),[ItemID.cutterIron]);
    Item.addCreativeGroup("mortar",Translation.translate("Mortar"),[ItemID.mortarIron]);
    Item.addCreativeGroup("file",Translation.translate("File"),[ItemID.fileIron]);
    Item.addCreativeGroup("lighter",Translation.translate("Lighter"),[ItemID.lighterIron]);

    var file = Tool.getAllTool("File");
    for(let i = 0;i < file.length;i++){
        RecipeRegistry.addShapedRecipe({id:ItemID.wrenchIron,count:1,data:0},[" ac","eba","de "],["a",ItemID.plateIron,0,"b",265,0,"c",file[i],-1,"d",ItemID.ringIron,0,"e",ItemID.stickIron,0],{2:1});
    }
    Recipes.addShaped({id:ItemID.hammerIron,count:1,data:0},[" ab"," ca","c  "],["a",265,0,"b",287,0,"c",280,0]);
    Recipes.addShaped({id:ItemID.cutterIron,count:1,data:0},["a a","aba","b b"],["a",ItemID.plateIron,0,"b",265,0]);
    Recipes.addShaped({id:ItemID.mortarIron,count:1,data:0},["  c","aba"," a "],["a",ItemID.plateIron,0,"b",318,0,"c",280,0]);
    Recipes.addShaped({id:ItemID.fileIron,count:1,data:0},["a","a","b"],["a",ItemID.plateIron,0,"b",280,0]);
    Recipes.addShaped({id:ItemID.lighterIron,count:1,data:0},["aba"],["a",ItemID.plateIron,0,"b",318,0]);
});




// file: item/tool/lead.js

ToolAPI.addToolMaterial("lead",{durability:474,level:2,efficiency:5,damage:4,enchantability:14});

IDRegistry.genItemID("swordLead");
IDRegistry.genItemID("shovelLead");
IDRegistry.genItemID("pickaxeLead");
IDRegistry.genItemID("axeLead");
IDRegistry.genItemID("hoeLead");

Item.createItem("swordLead","Lead Sword",{name:"lead_sword"},{stack:1});
Item.createItem("shovelLead","Lead Shovel",{name:"lead_shovel"},{stack:1});
Item.createItem("pickaxeLead","Lead Pickaxe",{name:"lead_pickaxe"},{stack:1});
Item.createItem("axeLead","Lead Axe",{name:"lead_axe"},{stack:1});
Item.createItem("hoeLead","Lead Hoe",{name:"lead_hoe"},{stack:1});

Tool.registerTool(ItemID.swordLead,"Sword");
Tool.registerTool(ItemID.shovelLead,"Shovel");
Tool.registerTool(ItemID.pickaxeLead,"Pickaxe");
Tool.registerTool(ItemID.axeLead,"Axe");
Tool.registerTool(ItemID.hoeLead,"Hoe");

ToolAPI.setTool(ItemID.swordLead,"lead",ToolType.sword);
ToolAPI.setTool(ItemID.shovelLead,"lead",ToolType.shovel);
ToolAPI.setTool(ItemID.pickaxeLead,"lead",ToolType.pickaxe);
ToolAPI.setTool(ItemID.axeLead,"lead",ToolType.axe);
ToolAPI.setTool(ItemID.hoeLead,"lead",ToolType.hoe);

Callback.addCallback("PreLoaded",function(){
    Item.addRepairItemIds(ItemID.swordLead,[ItemID.ingotLead]);
    Item.addRepairItemIds(ItemID.shovelLead,[ItemID.ingotLead]);
    Item.addRepairItemIds(ItemID.pickaxeLead,[ItemID.ingotLead]);
    Item.addRepairItemIds(ItemID.axeLead,[ItemID.ingotLead]);
    Item.addRepairItemIds(ItemID.hoeLead,[ItemID.ingotLead]);

    Item.addCreativeGroup("sword",Translation.translate("Sword"),[ItemID.swordLead]);
    Item.addCreativeGroup("shovel",Translation.translate("Shovel"),[ItemID.shovelLead]);
    Item.addCreativeGroup("pickaxe",Translation.translate("Pickaxe"),[ItemID.pickaxeLead]);
    Item.addCreativeGroup("axe",Translation.translate("Axe"),[ItemID.axeLead]);
    Item.addCreativeGroup("hoe",Translation.translate("Hoe"),[ItemID.hoeLead]);
    
    var file = Tool.getAllTool("File"),hammer = Tool.getAllTool("Hammer");
    for(let i = 0;i < file.length;i++){
        for(let ii = 0;ii < hammer.length;ii++){
            RecipeRegistry.addShapedRecipe({id:ItemID.swordLead,count:1,data:0},["cad"," a "," b "],["a",ItemID.plateLead,0,"b",280,0,"c",file[i],0,"d",hammer[ii],0],{0:1,2:1});
            RecipeRegistry.addShapedRecipe({id:ItemID.shovelLead,count:1,data:0},["cad"," b "," b "],["a",ItemID.plateLead,0,"b",280,0,"c",file[i],0,"d",hammer[ii],0],{0:1,2:1});
            RecipeRegistry.addShapedRecipe({id:ItemID.pickaxeLead,count:1,data:0},["aca","dbe"," b "],["a",ItemID.plateLead,0,"b",280,0,"c",ItemID.ingotLead,0,"d",file[i],0,"e",hammer[ii],0],{3:1,5:1});
            RecipeRegistry.addShapedRecipe({id:ItemID.axeLead,count:1,data:0},["acd","abe"," b "],["a",ItemID.plateLead,0,"b",280,0,"c",ItemID.ingotLead,0,"d",file[i],0,"e",hammer[ii],0],{2:1,5:1});
            RecipeRegistry.addShapedRecipe({id:ItemID.hoeLead,count:1,data:0},["aac","db "," b "],["a",ItemID.plateLead,0,"b",280,0,"c",file[i],0,"d",hammer[ii],0],{2:1,3:1});
        }
    }
});




// file: item/tool/steel.js

ToolAPI.addToolMaterial("steel",{durability:490,level:3,efficiency:7,damage:6,enchantability:10});

IDRegistry.genItemID("swordSteel");
IDRegistry.genItemID("shovelSteel");
IDRegistry.genItemID("pickaxeSteel");
IDRegistry.genItemID("axeSteel");
IDRegistry.genItemID("hoeSteel");
IDRegistry.genItemID("hammerSteel");
IDRegistry.genItemID("wrenchSteel");
IDRegistry.genItemID("cutterSteel");
IDRegistry.genItemID("mortarSteel");
IDRegistry.genItemID("fileSteel");
IDRegistry.genItemID("lighterSteel");

Item.createItem("swordSteel","Steel Sword",{name:"steel_sword"},{stack:1});
Item.createItem("shovelSteel","Steel Shovel",{name:"steel_shovel"},{stack:1});
Item.createItem("pickaxeSteel","Steel Pickaxe",{name:"steel_pickaxe"},{stack:1});
Item.createItem("axeSteel","Steel Axe",{name:"steel_axe"},{stack:1});
Item.createItem("hoeSteel","Steel Hoe",{name:"steel_hoe"},{stack:1});
Item.createItem("hammerSteel","Steel Hammer",{name:"steel_hammer"},{stack:1});
Item.createItem("wrenchSteel","Steel Wrench",{name:"steel_wrench"},{stack:1});
Item.createItem("cutterSteel","Steel Cutter",{name:"steel_cutter"},{stack:1});
Item.createItem("mortarSteel","Steel Mortar",{name:"steel_mortar"},{stack:1});
Item.createItem("fileSteel","Steel File",{name:"steel_file"},{stack:1});
Item.createItem("lighterSteel","Steel Lighter",{name:"steel_lighter"},{stack:1});

Tool.registerTool(ItemID.swordSteel,"Sword");
Tool.registerTool(ItemID.shovelSteel,"Shovel");
Tool.registerTool(ItemID.pickaxeSteel,"Pickaxe");
Tool.registerTool(ItemID.axeSteel,"Axe");
Tool.registerTool(ItemID.hoeSteel,"Hoe");
Tool.registerTool(ItemID.hammerSteel,"Hammer");
Tool.registerTool(ItemID.wrenchSteel,"Wrench");
Tool.registerTool(ItemID.cutterSteel,"Cutter");
Tool.registerTool(ItemID.mortarSteel,"Mortar");
Tool.registerTool(ItemID.fileSteel,"File");
Tool.registerTool(ItemID.lighterSteel,"Lighter");

ToolAPI.setTool(ItemID.swordSteel,"steel",ToolType.sword);
ToolAPI.setTool(ItemID.shovelSteel,"steel",ToolType.shovel);
ToolAPI.setTool(ItemID.pickaxeSteel,"steel",ToolType.pickaxe);
ToolAPI.setTool(ItemID.axeSteel,"steel",ToolType.axe);
ToolAPI.setTool(ItemID.hoeSteel,"steel",ToolType.hoe);
ToolAPI.setTool(ItemID.hammerSteel,"steel",ToolType.hammer);
ToolAPI.setTool(ItemID.lighterSteel,"steel",ToolType.lighter);

Item.setMaxDamage(ItemID.wrenchSteel,ToolAPI.getToolMaterial("steel").durability);
Item.setMaxDamage(ItemID.cutterSteel,ToolAPI.getToolMaterial("steel").durability);
Item.setMaxDamage(ItemID.mortarSteel,ToolAPI.getToolMaterial("steel").durability);
Item.setMaxDamage(ItemID.fileSteel,ToolAPI.getToolMaterial("steel").durability);

Callback.addCallback("PreLoaded",function(){
    Item.addRepairItemIds(ItemID.swordSteel,[ItemID.ingotSteel]);
    Item.addRepairItemIds(ItemID.shovelSteel,[ItemID.ingotSteel]);
    Item.addRepairItemIds(ItemID.pickaxeSteel,[ItemID.ingotSteel]);
    Item.addRepairItemIds(ItemID.axeSteel,[ItemID.ingotSteel]);
    Item.addRepairItemIds(ItemID.hoeSteel,[ItemID.ingotSteel]);
    Item.addRepairItemIds(ItemID.hammerSteel,[ItemID.ingotSteel]);
    Item.addRepairItemIds(ItemID.wrenchSteel,[ItemID.ingotSteel]);
    Item.addRepairItemIds(ItemID.cutterSteel,[ItemID.ingotSteel]);
    Item.addRepairItemIds(ItemID.mortarSteel,[ItemID.ingotSteel]);
    Item.addRepairItemIds(ItemID.fileSteel,[ItemID.ingotSteel]);
    Item.addRepairItemIds(ItemID.lighterSteel,[ItemID.ingotSteel]);

    Item.addCreativeGroup("sword",Translation.translate("Sword"),[ItemID.swordSteel]);
    Item.addCreativeGroup("shovel",Translation.translate("Shovel"),[ItemID.shovelSteel]);
    Item.addCreativeGroup("pickaxe",Translation.translate("Pickaxe"),[ItemID.pickaxeSteel]);
    Item.addCreativeGroup("axe",Translation.translate("Axe"),[ItemID.axeSteel]);
    Item.addCreativeGroup("hoe",Translation.translate("Hoe"),[ItemID.hoeSteel]);
    Item.addCreativeGroup("hammer",Translation.translate("Hammer"),[ItemID.hammerSteel]);
    Item.addCreativeGroup("wrench",Translation.translate("Wrench"),[ItemID.wrenchSteel]);
    Item.addCreativeGroup("cutter",Translation.translate("Cutter"),[ItemID.cutterSteel]);
    Item.addCreativeGroup("mortar",Translation.translate("Mortar"),[ItemID.mortarSteel]);
    Item.addCreativeGroup("file",Translation.translate("File"),[ItemID.fileSteel]);
    Item.addCreativeGroup("lighter",Translation.translate("Lighter"),[ItemID.lighterSteel]);

    var file = Tool.getAllTool("File"),hammer = Tool.getAllTool("Hammer");
    for(let i = 0;i < file.length;i++){
        for(let ii = 0;ii < hammer.length;ii++){
            RecipeRegistry.addShapedRecipe({id:ItemID.swordSteel,count:1,data:0},["cad"," a "," b "],["a",ItemID.plateSteel,0,"b",280,0,"c",file[i],0,"d",hammer[ii],0],{0:1,2:1});
            RecipeRegistry.addShapedRecipe({id:ItemID.shovelSteel,count:1,data:0},["cad"," b "," b "],["a",ItemID.plateSteel,0,"b",280,0,"c",file[i],0,"d",hammer[ii],0],{0:1,2:1});
            RecipeRegistry.addShapedRecipe({id:ItemID.pickaxeSteel,count:1,data:0},["aca","dbe"," b "],["a",ItemID.plateSteel,0,"b",280,0,"c",ItemID.ingotSteel,0,"d",file[i],0,"e",hammer[ii],0],{3:1,5:1});
            RecipeRegistry.addShapedRecipe({id:ItemID.axeSteel,count:1,data:0},["acd","abe"," b "],["a",ItemID.plateSteel,0,"b",280,0,"c",ItemID.ingotSteel,0,"d",file[i],0,"e",hammer[ii],0],{2:1,5:1});
            RecipeRegistry.addShapedRecipe({id:ItemID.hoeSteel,count:1,data:0},["aac","db "," b "],["a",ItemID.plateSteel,0,"b",280,0,"c",file[i],0,"d",hammer[ii],0],{2:1,3:1});
        }
        RecipeRegistry.addShapedRecipe({id:ItemID.wrenchSteel,count:1,data:0},[" ac","eba","de "],["a",ItemID.plateSteel,0,"b",ItemID.ingotSteel,0,"c",file[i],-1,"d",ItemID.ringSteel,0,"e",ItemID.stickSteel,0],{2:1});
    }

    Recipes.addShaped({id:ItemID.hammerSteel,count:1,data:0},[" ab"," ca","c  "],["a",ItemID.ingotSteel,0,"b",287,0,"c",280,0]);
    Recipes.addShaped({id:ItemID.cutterSteel,count:1,data:0},["a a","aba","b b"],["a",ItemID.plateSteel,0,"b",ItemID.ingotSteel,0]);
    Recipes.addShaped({id:ItemID.mortarSteel,count:1,data:0},["  c","aba"," a "],["a",ItemID.plateSteel,0,"b",318,0,"c",280,0]);
    Recipes.addShaped({id:ItemID.fileSteel,count:1,data:0},[ "a" , "a" , "b" ],["a",ItemID.plateSteel,0,"b",280,0]);
    Recipes.addShaped({id:ItemID.lighterSteel,count:1,data:0},["aba"],["a",ItemID.plateSteel,0,"b",318,0]);
});




// file: item/tool/tin.js

ToolAPI.addToolMaterial("tin",{durability:235,level:2,efficiency:5,damage:4,enchantability:7});

IDRegistry.genItemID("swordTin");
IDRegistry.genItemID("shovelTin");
IDRegistry.genItemID("pickaxeTin");
IDRegistry.genItemID("axeTin");
IDRegistry.genItemID("hoeTin");
IDRegistry.genItemID("hammerTin");
IDRegistry.genItemID("wrenchTin");
IDRegistry.genItemID("cutterTin");
IDRegistry.genItemID("mortarTin");
IDRegistry.genItemID("fileTin");

Item.createItem("swordTin","Tin Sword",{name:"tin_sword"},{stack:1});
Item.createItem("shovelTin","Tin Shovel",{name:"tin_shovel"},{stack:1});
Item.createItem("pickaxeTin","Tin Pickaxe",{name:"tin_pickaxe"},{stack:1});
Item.createItem("axeTin","Tin Axe",{name:"tin_axe"},{stack:1});
Item.createItem("hoeTin","Tin Hoe",{name:"tin_hoe"},{stack:1});
Item.createItem("hammerTin","Tin Hammer",{name:"tin_hammer"},{stack:1});
Item.createItem("wrenchTin","Tin Wrench",{name:"tin_wrench"},{stack:1});
Item.createItem("cutterTin","Tin Cutter",{name:"tin_cutter"},{stack:1});
Item.createItem("mortarTin","Tin Mortar",{name:"tin_mortar"},{stack:1});
Item.createItem("fileTin","Tin File",{name:"tin_file"},{stack:1});

Tool.registerTool(ItemID.swordTin,"Sword");
Tool.registerTool(ItemID.shovelTin,"Shovel");
Tool.registerTool(ItemID.pickaxeTin,"Pickaxe");
Tool.registerTool(ItemID.axeTin,"Axe");
Tool.registerTool(ItemID.hoeTin,"Hoe");
Tool.registerTool(ItemID.hammerTin,"Hammer");
Tool.registerTool(ItemID.wrenchTin,"Wrench");
Tool.registerTool(ItemID.cutterTin,"Cutter");
Tool.registerTool(ItemID.mortarTin,"Mortar");
Tool.registerTool(ItemID.fileTin,"File");

ToolAPI.setTool(ItemID.swordTin,"tin",ToolType.sword);
ToolAPI.setTool(ItemID.shovelTin,"tin",ToolType.shovel);
ToolAPI.setTool(ItemID.pickaxeTin,"tin",ToolType.pickaxe);
ToolAPI.setTool(ItemID.axeTin,"tin",ToolType.axe);
ToolAPI.setTool(ItemID.hoeTin,"tin",ToolType.hoe);
ToolAPI.setTool(ItemID.hammerTin,"tin",ToolType.hammer);

Item.setMaxDamage(ItemID.wrenchTin,ToolAPI.getToolMaterial("tin").durability);
Item.setMaxDamage(ItemID.cutterTin,ToolAPI.getToolMaterial("tin").durability);
Item.setMaxDamage(ItemID.mortarTin,ToolAPI.getToolMaterial("tin").durability);
Item.setMaxDamage(ItemID.fileTin,ToolAPI.getToolMaterial("tin").durability);

Callback.addCallback("PreLoaded",function(){
    Item.addRepairItemIds(ItemID.swordTin,[ItemID.ingotTin]);
    Item.addRepairItemIds(ItemID.shovelTin,[ItemID.ingotTin]);
    Item.addRepairItemIds(ItemID.pickaxeTin,[ItemID.ingotTin]);
    Item.addRepairItemIds(ItemID.axeTin,[ItemID.ingotTin]);
    Item.addRepairItemIds(ItemID.hoeTin,[ItemID.ingotTin]);
    Item.addRepairItemIds(ItemID.hammerTin,[ItemID.ingotTin]);
    Item.addRepairItemIds(ItemID.wrenchTin,[ItemID.ingotTin]);
    Item.addRepairItemIds(ItemID.cutterTin,[ItemID.ingotTin]);
    Item.addRepairItemIds(ItemID.mortarTin,[ItemID.ingotTin]);
    Item.addRepairItemIds(ItemID.fileTin,[ItemID.ingotTin]);

    Item.addCreativeGroup("sword",Translation.translate("Sword"),[ItemID.swordTin]);
    Item.addCreativeGroup("shovel",Translation.translate("Shovel"),[ItemID.shovelTin]);
    Item.addCreativeGroup("pickaxe",Translation.translate("Pickaxe"),[ItemID.pickaxeTin]);
    Item.addCreativeGroup("axe",Translation.translate("Axe"),[ItemID.axeTin]);
    Item.addCreativeGroup("hoe",Translation.translate("Hoe"),[ItemID.hoeTin]);
    Item.addCreativeGroup("hammer",Translation.translate("Hammer"),[ItemID.hammerTin]);
    Item.addCreativeGroup("wrench",Translation.translate("Wrench"),[ItemID.wrenchTin]);
    Item.addCreativeGroup("cutter",Translation.translate("Cutter"),[ItemID.cutterTin]);
    Item.addCreativeGroup("mortar",Translation.translate("Mortar"),[ItemID.mortarTin]);
    Item.addCreativeGroup("file",Translation.translate("File"),[ItemID.fileTin]);

    var file = Tool.getAllTool("File"),hammer = Tool.getAllTool("Hammer");
    for(let i = 0;i < file.length;i++){
        for(let ii = 0;ii < hammer.length;ii++){
            RecipeRegistry.addShapedRecipe({id:ItemID.swordTin,count:1,data:0},["cad"," a "," b "],["a",ItemID.plateTin,0,"b",280,0,"c",file[i],0,"d",hammer[ii],0],{0:1,2:1});
            RecipeRegistry.addShapedRecipe({id:ItemID.shovelTin,count:1,data:0},["cad"," b "," b "],["a",ItemID.plateTin,0,"b",280,0,"c",file[i],0,"d",hammer[ii],0],{0:1,2:1});
            RecipeRegistry.addShapedRecipe({id:ItemID.pickaxeTin,count:1,data:0},["aca","dbe"," b "],["a",ItemID.plateTin,0,"b",280,0,"c",ItemID.ingotTin,0,"d",file[i],0,"e",hammer[ii],0],{3:1,5:1});
            RecipeRegistry.addShapedRecipe({id:ItemID.axeTin,count:1,data:0},["acd","abe"," b "],["a",ItemID.plateTin,0,"b",280,0,"c",ItemID.ingotTin,0,"d",file[i],0,"e",hammer[ii],0],{2:1,5:1});
            RecipeRegistry.addShapedRecipe({id:ItemID.hoeTin,count:1,data:0},["aac","db "," b "],["a",ItemID.plateTin,0,"b",280,0,"c",file[i],0,"d",hammer[ii],0],{2:1,3:1});
        }
        RecipeRegistry.addShapedRecipe({id:ItemID.wrenchTin,count:1,data:0},[" ac","eba","de "],["a",ItemID.plateTin,0,"b",ItemID.ingotTin,0,"c",file[i],-1,"d",ItemID.ringTin,0,"e",ItemID.stickTin,0],{2:1});
    }
    
    Recipes.addShaped({id:ItemID.hammerTin,count:1,data:0},[" ab"," ca","c  "],["a",ItemID.ingotTin,0,"b",287,0,"c",280,0]);
    Recipes.addShaped({id:ItemID.cutterTin,count:1,data:0},["a a","aba","b b"],["a",ItemID.plateTin,0,"b",ItemID.ingotTin,0]);
    Recipes.addShaped({id:ItemID.mortarTin,count:1,data:0},["  c","aba"," a "],["a",ItemID.plateTin,0,"b",318,0,"c",280,0]);
    Recipes.addShaped({id:ItemID.fileTin,count:1,data:0},[ "a" , "a" , "b" ],["a",ItemID.plateTin,0,"b",280,0]);
});




// file: block/coil.js

// 锡线圈
IDRegistry.genBlockID("coilTin");
Block.createBlock("coilTin",[
    {name:"Tin Coil",texture:[["tin_coil_bottom",0],["tin_coil_top",0],["tin_coil",0]],inCreative:true}
],"machine");

Callback.addCallback("PreLoaded",function(){
    Recipes.addShaped({id:BlockID.coilTin,count:1,data:0},[
        "aaa",
        "aaa",
        "aaa"
    ],["a",ItemID.wireTin,0]);
});

// 铜线圈
IDRegistry.genBlockID("coilCopper");
Block.createBlock("coilCopper",[
    {name:"Copper Coil",texture:[["copper_coil_bottom",0],["copper_coil_top",0],["copper_coil",0]],inCreative:true}
],"machine");

Callback.addCallback("PreLoaded",function(){
    Recipes.addShaped({id:BlockID.coilCopper,count:1,data:0},[
        "aaa",
        "aaa",
        "aaa"
    ],["a",ItemID.wireCopper,0]);
});

// 金线圈
IDRegistry.genBlockID("coilGold");
Block.createBlock("coilGold",[
    {name:"Gold Coil",texture:[["gold_coil_bottom",0],["gold_coil_top",0],["gold_coil",0]],inCreative:true}
],"machine");

Callback.addCallback("PreLoaded",function(){
    Recipes.addShaped({id:BlockID.coilGold,count:1,data:0},[
        "aaa",
        "aaa",
        "aaa"
    ],["a",ItemID.wireGold,0]);
});

// 钢线圈
IDRegistry.genBlockID("coilSteel");
Block.createBlock("coilSteel",[
    {name:"Steel Coil",texture:[["steel_coil_bottom",0],["steel_coil_top",0],["steel_coil",0]],inCreative:true}
],"machine");

Callback.addCallback("PreLoaded",function(){
    Recipes.addShaped({id:BlockID.coilSteel,count:1,data:0},[
        "aaa",
        "aaa",
        "aaa"
    ],["a",ItemID.wireSteel,0]);
});




// file: block/mesh.js

// [筛网]String Mesh
IDRegistry.genBlockID("mesh");
Block.createBlock("mesh",[
    {name:"String Mesh",texture:[["string_mesh",0]],inCreative:true}
],{opaque:true});

Block.setBlockShape(BlockID.mesh,{x:0.0625,y:0,z:0.0625},{x:0.9375,y:0.0625,z:0.9375},0);
Callback.addCallback("PreLoaded",function(){
    Recipes.addShaped({id:BlockID.mesh,count:1,data:0},[
        "aaa",
        "aaa",
        "aaa"
    ],["a",287,0]);
});

Block.registerPlaceFunction("mesh",function(coords,item,block){
    Game.prevent();
});




// file: block/ore.js

Block.createSpecialType({
    base:1,
    solid:true,
    destroytime:3,
    explosionres:3
},"ore");

// 铜矿石
IDRegistry.genBlockID("oreCopper");
Block.createBlock("oreCopper",[
    {name:"Copper Ore",texture:[["copper_ore",0]],inCreative:true}
],"ore");
ToolAPI.registerBlockMaterial(BlockID.oreCopper,"stone",2,true);
ToolAPI.addBlockDropOnExplosion("oreCopper");
Block.setDestroyLevel("oreCopper",2);

// 黝铜矿石
IDRegistry.genBlockID("oreTetrahedrite");
Block.createBlock("oreTetrahedrite",[
    {name:"Tetrahedrite Ore",texture:[["tetrahedrite_ore",0]],inCreative:true}
],"ore");
ToolAPI.registerBlockMaterial(BlockID.oreTetrahedrite,"stone",2,true);
ToolAPI.addBlockDropOnExplosion("oreTetrahedrite");
Block.setDestroyLevel("oreTetrahedrite",2);

// 锡石矿石
IDRegistry.genBlockID("oreCassiterite");
Block.createBlock("oreCassiterite",[
    {name:"Cassiterite Ore",texture:[["cassiterite_ore",0]],inCreative:true}
],"ore");
ToolAPI.registerBlockMaterial(BlockID.oreCassiterite,"stone",2,true);
ToolAPI.addBlockDropOnExplosion("oreCassiterite");
Block.setDestroyLevel("oreCassiterite",2);

// 方铅矿石
IDRegistry.genBlockID("oreGalena");
Block.createBlock("oreGalena",[
    {name:"Galena Ore",texture:[["galena_ore",0]],inCreative:true}
],"ore");
ToolAPI.registerBlockMaterial(BlockID.oreGalena,"stone",2,true);
Block.setDestroyLevel("oreGalena",2);

// 锂辉石矿石
IDRegistry.genBlockID("oreSpodumene");
Block.createBlock("oreSpodumene",[
    {name:"Spodumene Ore",texture:[["spodumene_ore",0]],inCreative:true}
],"ore");
ToolAPI.registerBlockMaterial(BlockID.oreSpodumene,"stone",2,true);
ToolAPI.addBlockDropOnExplosion("oreSpodumene");
Block.setDestroyLevel("oreSpodumene",2);

// 石墨矿石
IDRegistry.genBlockID("oreGraphite");
Block.createBlock("oreGraphite",[
    {name:"Graphite Ore",texture:[["graphite_ore",0]],inCreative:true}
],"ore");
ToolAPI.registerBlockMaterial(BlockID.oreGraphite,"stone",2,true);
ToolAPI.addBlockDropOnExplosion("oreGraphite");
Block.setDestroyLevel("oreGraphite",2);

Block.registerDropFunction("oreGraphite",function(coords,id,data,level,enchant){
	if(level >= 2){
        if(enchant.silk){return [[id,1,data]];}
        return [[ItemID.dustCarbon,random(1 * (enchant.fortune + 1),4 * (enchant.fortune + 1)),0]];
    }
    return [];
},2);

// 钨矿石
IDRegistry.genBlockID("oreTungsten");
Block.createBlock("oreTungsten",[
    {name:"Tungsten Ore",texture:[["tungsten_ore",0]],inCreative:true}
],"ore");
ToolAPI.registerBlockMaterial(BlockID.oreTungsten,"stone",3,true);
ToolAPI.addBlockDropOnExplosion("oreTungsten");
Block.setDestroyLevel("oreTungsten",3);

// 铀矿石
IDRegistry.genBlockID("oreUranium");
Block.createBlock("oreUranium",[
    {name:"Uranium Ore",texture:[["uranium_ore",0]],inCreative:true}
],"ore");
ToolAPI.registerBlockMaterial(BlockID.oreUranium,"stone",3,true);
ToolAPI.addBlockDropOnExplosion("oreUranium");
Block.setDestroyLevel("oreUranium",3);

// 银矿石
IDRegistry.genBlockID("oreSilver");
Block.createBlock("oreSilver",[
    {name:"Silver Ore",texture:[["silver_ore",0]],inCreative:true}
],"ore");
ToolAPI.registerBlockMaterial(BlockID.oreSilver,"stone",2,true);
ToolAPI.addBlockDropOnExplosion("oreSilver");
Block.setDestroyLevel("oreSilver",2);

// 铝土矿石
IDRegistry.genBlockID("oreBauxite");
Block.createBlock("oreBauxite",[
    {name:"Bauxite Ore",texture:[["bauxite_ore",0]],inCreative:true}
],"ore");
ToolAPI.registerBlockMaterial(BlockID.oreBauxite,"stone",2,true);
ToolAPI.addBlockDropOnExplosion("oreBauxite");
Block.setDestroyLevel("oreBauxite",2);

// 盐矿石
IDRegistry.genBlockID("oreSalt");
Block.createBlock("oreSalt",[
    {name:"Salt Ore",texture:[["salt_ore",0]],inCreative:true}
],"ore");
ToolAPI.registerBlockMaterial(BlockID.oreSalt,"stone",1,true);
ToolAPI.addBlockDropOnExplosion("oreSalt");
Block.setDestroyLevel("oreSalt",1);

Block.registerDropFunction("oreSalt",function(coords,id,data,level,enchant){
	if(level >= 1){
        if(enchant.silk) return [[id,1,data]];
        return [[ItemID.dustSalt,random(1 * (enchant.fortune + 1),4 * (enchant.fortune + 1)),0]];
    }
    return [];
},1);

// 红宝石矿石
IDRegistry.genBlockID("oreRuby");
Block.createBlock("oreRuby",[
    {name:"Ruby Ore",texture:[["ruby_ore",0]],inCreative:true}
],"ore");
ToolAPI.registerBlockMaterial(BlockID.oreRuby,"stone",3,true);
ToolAPI.addBlockDropOnExplosion("oreRuby");
Block.setDestroyLevel("oreRuby",3);

Block.registerDropFunction("oreRuby",function(coords,id,data,level,enchant){
	if(level >= 3){
        if(enchant.silk) return [[id,1,data]];
        return [[ItemID.ruby,Math.floor(Math.random() * enchant.fortune + 1),0]];
    }
    return [];
},3);

var OreVein = {
    VEIN:{
        OVERWORLD_VEIN:[

        ],

        NETHER_VEIN:[

        ],
        
        ENDER_VEIN:[

        ]
    },

    OVERWORLD_VEIN:[  

    ],

    NETHER_VEIN:[

    ],

    ENDER_VEIN:[

    ],

    SMALL_STONE:{
        
    },
    
    registerOreVein:function(name,random,ores,min,max,size,stone){
        var ore = [];
        for(let i in ores){
            var item = ores[i];
            for(let n = 0;n < item.count;n++) ore.push({id:item.id,data:item.data});
        }

        for(let i = 0;i < random;i++) this.OVERWORLD_VEIN.push({name:name,ore:ore,minHeight:min,maxHeight:max,size:size});

        if(stone) this.SMALL_STONE[name] = stone;

        this.VEIN.OVERWORLD_VEIN.push({name:name,ore:ores,minHeight:min,maxHeight:max,size:size});
    },

    registerOreVeinNether:function(name,random,ores,min,max,size,stone){
        var ore = [];
        for(let i in ores){
            var item = ores[i];
            for(let n = 0;n < item.count;n++) ore.push({id:item.id,data:item.data});
        }
        
        for(let i = 0;i < random;i++) this.NETHER_VEIN.push({name:name,ore:ore,minHeight:min,maxHeight:max,size:size});

        if(stone) this.SMALL_STONE[name] = stone;

        this.VEIN.NETHER_VEIN.push({name:name,ore:ores,minHeight:min,maxHeight:max,size:size});
    },

    registerOreVeinEnder:function(name,random,ores,min,max,size,stone){
        var ore = [];
        for(let i in ores){
            var item = ores[i];
            for(let n = 0;n < item.count;n++) ore.push({id:item.id,data:item.data});
        }

        for(let i = 0;i < random;i++) this.ENDER_VEIN.push({name:name,ore:ore,minHeight:min,maxHeight:max,size:size});

        if(stone) this.SMALL_STONE[name] = stone;

        this.VEIN.ENDER_VEIN.push({name:name,ore:ores,minHeight:min,maxHeight:max,size:size});
    }
}

Callback.addCallback("PreLoaded",function(){
    // 煤炭矿脉
    OreVein.registerOreVein("Coal",80,[{id:16,count:64,data:0}],48,80,16,{id:ItemID.tinyCoal,count:1,data:0});
    
    // 铝土矿脉
    OreVein.registerOreVein("Bauxite",80,[{id:BlockID.oreBauxite,count:64,data:0}],48,96,16,{id:ItemID.dustSmallAluminium,count:1,data:0});
    
    // 黝铜矿脉
    OreVein.registerOreVein("Tetrahedrite",150,[{id:BlockID.oreTetrahedrite,count:48,data:0},{id:BlockID.oreCopper,count:24,data:0}],64,128,30,{id:ItemID.dustSmallTetrahedrite,count:1,data:0});
    
    // 钻石矿脉
    OreVein.registerOreVein("Diamonds",60,[{id:56,count:6,data:0},{id:16,count:64,data:0},{id:BlockID.oreGraphite,count:48,data:0}],0,16,12,{id:ItemID.dustSmallDiamond,count:1,data:0});
    
    // 沥青铀矿脉
    OreVein.registerOreVein("Pitchblende",40,[{id:BlockID.oreUranium,count:12,data:0}],8,32,8,{id:ItemID.dustSmallUranium,count:1,data:0});
    
    // 锡石矿脉
    OreVein.registerOreVein("Cassiterite",170,[{id:BlockID.oreCassiterite,count:24,data:0},{id:BlockID.oreTungsten,count:6,data:0}],32,96,34,{id:ItemID.dustSmallTin,count:1,data:0});
    
    // 铁矿脉
    OreVein.registerOreVein("Iron",120,[{id:15,count:48,data:0}],16,32,24,{id:ItemID.dustSmallIron,count:1,data:0});
    
    // 方铅矿脉
    OreVein.registerOreVein("Galena",40,[{id:BlockID.oreGalena,count:48,data:0},{id:BlockID.oreSilver,count:12,data:0}],32,64,8,{id:ItemID.dustSmallLead,count:1,data:0});
    
    // 岩盐矿脉
    OreVein.registerOreVein("Salt",30,[{id:BlockID.oreSalt,count:48,data:0},{id:BlockID.oreSpodumene,count:64,data:0}],48,64,8,{id:ItemID.dustSmallSalt,count:1,data:0});
    
    // 红石矿脉
    OreVein.registerOreVein("Redstone",60,[{id:73,count:48,data:0},{id:BlockID.oreRuby,count:6,data:0}],16,48,12,{id:ItemID.dustSmallRedstone,count:1,data:0});

    Callback.addCallback("GenerateChunkUnderground",function(chunkX,chunkZ){
        var vein = OreVein.OVERWORLD_VEIN[Math.floor(Math.random() * OreVein.OVERWORLD_VEIN.length)];
        if(vein){
            var coords = {
                x:chunkX * 16 + (UsefulTool.isNegative(chunkX * 16)?-8:8),
                y:random(vein.minHeight,vein.maxHeight),
                z:chunkZ * 16 + (UsefulTool.isNegative(chunkZ * 16)?-8:8)
            }

            if(chunkX%4 == 0 && chunkZ%4 == 0){
                for(let x = 0;x < vein.size;x++){
                    for(let y = 0;y < vein.size;y++){
                        for(let z = 0;z < vein.size;z++){
                            var pointed = {
                                x:Math.floor(coords.x - (vein.size / 2) + x),
                                y:Math.floor(coords.y - (vein.size / 2) + y),
                                z:Math.floor(coords.z - (vein.size / 2) + z)
                            }
                        
                            if(Math.random() < 0.5 && World.getBlockID(pointed.x,pointed.y,pointed.z) == 1){
                                var ore = vein.ore[Math.floor(Math.random() * vein.ore.length)];
                                World.setBlock(pointed.x,pointed.y,pointed.z,ore.id,ore.data);
                                ChunkRegistry.chunk["0:" + chunkX + ":" + chunkZ] = vein.name;
                            }
                        }
                    }
                }
    
                if(__config__.getBool("debug")) Debug.message("Ore Vein: " + coords.x + " " + coords.y + " " + coords.z);
            }
        }
    });

    Callback.addCallback("GenerateNetherChunk",function(chunkX,chunkZ){
        var vein = OreVein.NETHER_VEIN[Math.floor(Math.random() * OreVein.NETHER_VEIN.length)];
        if(vein){
            var coords = {
                x:chunkX * 16 + (UsefulTool.isNegative(chunkX * 16)?-8:8),
                y:random(vein.minHeight,vein.maxHeight),
                z:chunkZ * 16 + (UsefulTool.isNegative(chunkZ * 16)?-8:8)
            }

            if(chunkX%4 == 0 && chunkZ%4 == 0){
                for(let x = 0;x < vein.size;x++){
                    for(let y = 0;y < vein.size;y++){
                        for(let z = 0;z < vein.size;z++){
                            var pointed = {
                                x:Math.floor(coords.x - (vein.size / 2) + x),
                                y:Math.floor(coords.y - (vein.size / 2) + y),
                                z:Math.floor(coords.z - (vein.size / 2) + z)
                            }

                            if(Math.random() < 0.75 && World.getBlockID(pointed.x,pointed.y,pointed.z) == 87){
                                var ore = vein.ore[Math.floor(Math.random() * vein.ore.length)];
                                World.setBlock(pointed.x,pointed.y,pointed.z,ore.id,ore.data);
                                ChunkRegistry.chunk["1:" + chunkX + ":" + chunkZ] = vein.name;
                            }
                        }
                    }
                }
                
                if(__config__.getBool("debug")) Debug.message("Ore Vein: " + coords.x + " " + coords.y + " " + coords.z);
            }
        }
    });

    Callback.addCallback("GenerateEndChunk",function(chunkX,chunkZ){
        var vein = OreVein.ENDER_VEIN[Math.floor(Math.random() * OreVein.ENDER_VEIN.length)];
        if(vein){
            var coords = {
                x:chunkX * 16 + (UsefulTool.isNegative(chunkX * 16)?-8:8),
                y:random(vein.minHeight,vein.maxHeight),
                z:chunkZ * 16 + (UsefulTool.isNegative(chunkZ * 16)?-8:8)
            }

            if(chunkX%4 == 0 && chunkZ%4 == 0){
                for(let x = 0;x < vein.size;x++){
                    for(let y = 0;y < vein.size;y++){
                        for(let z = 0;z < vein.size;z++){
                            var pointed = {
                                x:Math.floor(coords.x - (vein.size / 2) + x),
                                y:Math.floor(coords.y - (vein.size / 2) + y),
                                z:Math.floor(coords.z - (vein.size / 2) + z)
                            }
                        
                            if(Math.random() < 0.75 && World.getBlockID(pointed.x,pointed.y,pointed.z) == 121){
                                var ore = vein.ore[Math.floor(Math.random() * vein.ore.length)];
                                World.setBlock(pointed.x,pointed.y,pointed.z,ore.id,ore.data);
                                ChunkRegistry.chunk["2:" + chunkX + ":" + chunkZ] = vein.name;
                            }
                        }
                    }
                }

                if(__config__.getBool("debug")) Debug.message("Ore Vein: " + coords.x + " " + coords.y + " " + coords.z);
            }
        }
    });

    Item.addCreativeGroup("ore",Translation.translate("Ore"),[
        BlockID.oreCopper,
        BlockID.oreTetrahedrite,
        BlockID.oreCassiterite,
        BlockID.oreGalena,
        BlockID.oreSpodumene,
        BlockID.oreGraphite,
        BlockID.oreTungsten,
        BlockID.oreUranium,
        BlockID.oreSilver,
        BlockID.oreBauxite,
        BlockID.oreSalt,
        BlockID.oreRuby
    ]);

    Recipes.addFurnace(BlockID.oreCopper,ItemID.ingotCopper);
    Recipes.addFurnace(BlockID.oreTetrahedrite,ItemID.ingotCopper);
    Recipes.addFurnace(BlockID.oreGalena,ItemID.ingotLead);
    Recipes.addFurnace(BlockID.oreGraphite,ItemID.dustCarbon);
    Recipes.addFurnace(BlockID.oreUranium,ItemID.ingotUranium);
    Recipes.addFurnace(BlockID.oreSilver,ItemID.ingotSilver);
    Recipes.addFurnace(BlockID.oreBauxite,ItemID.ingotAluminium);
    Recipes.addFurnace(BlockID.oreRuby,ItemID.ruby);

    Tool.setHammerDestroyDrop(BlockID.oreCopper,ItemID.crushedCopper,1,0);
    Tool.setHammerDestroyDrop(BlockID.oreTetrahedrite,ItemID.crushedTetrahedrite,1,0);
    Tool.setHammerDestroyDrop(BlockID.oreCassiterite,ItemID.crushedCassiterite,1,0);
    Tool.setHammerDestroyDrop(BlockID.oreGalena,ItemID.crushedGalena,1,0);
    Tool.setHammerDestroyDrop(BlockID.oreSpodumene,ItemID.crushedSpodumene,1,0);
    Tool.setHammerDestroyDrop(BlockID.oreTungsten,ItemID.crushedTungsten,1,0);
    Tool.setHammerDestroyDrop(BlockID.oreUranium,ItemID.crushedUranium,1,0);
    Tool.setHammerDestroyDrop(BlockID.oreSilver,ItemID.crushedSilver,1,0);
    Tool.setHammerDestroyDrop(BlockID.oreBauxite,ItemID.crushedBauxite,1,0);

    RecipeRegistry.addBlastFurnaceRecipe({id:BlockID.oreTungsten,data:0},[{id:ItemID.ingotTungsten,count:1,data:0},{id:ItemID.slag,count:1,data:0}]);
});




// file: block/scaffold.js

Block.createSpecialType({
    base:5,
    solid:true,
    opaque:false,
    destroytime:1
},"scaffold");

Renderer.renderScaffoldModel = function(id,data){
    var render = new ICRender.Model(),model = new BlockRenderer.Model();
    model.addBox(0,0.8125,0,1,1,1,id,data);
    model.addBox(0.0625,0.1875,0.0625,0.9375,0.8125,0.9375,id,data);
    model.addBox(0,0,0,1,0.1875,1,id,data);
    render.addEntry(model);
    Renderer.registerRenderModel(id,0,render);

    var render = new ICRender.Model(),model = new BlockRenderer.Model();
    model.addBox(0,0.8125,0,1,1,1,id,data);
    model.addBox(0.0625,0,0.0625,0.9375,0.8125,0.9375,id,data);
    render.addEntry(model);
    Renderer.registerRenderModel(id,1,render);
    
    var render = new ICRender.Model(),model = new BlockRenderer.Model();
    model.addBox(0.0625,0,0.0625,0.9375,1,0.9375,id,data);
    render.addEntry(model);
    Renderer.registerRenderModel(id,2,render);
    
    var render = new ICRender.Model(),model = new BlockRenderer.Model();
    model.addBox(0.0625,0.1875,0.0625,0.9375,1,0.9375,id,data);
    model.addBox(0,0,0,1,0.1875,1,id,data);
    render.addEntry(model);
    Renderer.registerRenderModel(id,3,render);

    Item.addCreativeGroup("scaffold",Translation.translate("Scaffold"),[id]);
}

// 木脚手架
IDRegistry.genBlockID("scaffoldWood");
Block.createBlock("scaffoldWood",[
    {name:"Wood Scaffold",texture:[["wood_scaffold_bottom",0],["wood_scaffold_top",0],["wood_scaffold_side",0]],inCreative:true}
],"scaffold");
Renderer.renderScaffoldModel(BlockID.scaffoldWood,0);

MachineRegistry.registerPrototype(BlockID.scaffoldWood,{
    defaultValues:{
        meta:0
    },

    tick:function(){
        this.renderer();
        if(World.isAirBlock(this.x,this.y - 1,this.z)) World.destroyBlock(this.x,this.y,this.z,true);
    },

    renderer:function(){
        var top = World.getBlockID(this.x,this.y + 1,this.z),bot = World.getBlockID(this.x,this.y - 1,this.z);
        if(top != this.id && bot != this.id) this.data.meta = 0;
        if(top != this.id && bot == this.id) this.data.meta = 1;
        if(top == this.id && bot == this.id) this.data.meta = 2;
        if(top == this.id && bot != this.id) this.data.meta = 3;
        Renderer.mapAtCoords(this.x,this.y,this.z,this.id,this.data.meta);
    },

    destroy:function(){
        BlockRenderer.unmapAtCoords(this.x,this.y,this.z);
    }
});

// 铁脚手架
IDRegistry.genBlockID("scaffoldIron");
Block.createBlock("scaffoldIron",[
    {name:"Iron Scaffold",texture:[["iron_scaffold_bottom",0],["iron_scaffold_top",0],["iron_scaffold_side",0]],inCreative:true}
],"scaffold");
Renderer.renderScaffoldModel(BlockID.scaffoldIron,0);

MachineRegistry.registerPrototype(BlockID.scaffoldIron,{
    defaultValues:{
        meta:0
    },

    tick:function(){
        this.renderer();
        if(World.isAirBlock(this.x,this.y - 1,this.z)) World.destroyBlock(this.x,this.y,this.z,true);
    },

    renderer:function(){
        var top = World.getBlockID(this.x,this.y + 1,this.z),bot = World.getBlockID(this.x,this.y - 1,this.z);
        if(top != this.id && bot != this.id) this.data.meta = 0;
        if(top != this.id && bot == this.id) this.data.meta = 1;
        if(top == this.id && bot == this.id) this.data.meta = 2;
        if(top == this.id && bot != this.id) this.data.meta = 3;
        Renderer.mapAtCoords(this.x,this.y,this.z,this.id,this.data.meta);
    },

    destroy:function(){
        BlockRenderer.unmapAtCoords(this.x,this.y,this.z);
    }
});

Callback.addCallback("PreLoaded",function(){
    Recipes.addShaped({id:BlockID.scaffoldWood,count:8,data:0},[
        "aaa",
        "bbb",
        "aaa"
    ],["a",5,-1,"b",280,0]);
    
    Recipes.addShaped({id:BlockID.scaffoldIron,count:8,data:0},[
        "aaa",
        "bbb",
        "aaa"
    ],["a",ItemID.plateIron,0,"b",ItemID.stickIron,0]);
});




// file: block/stone.js

Block.createSpecialType({
    base:1,
    solid:true,
	destroytime:1,
	explosionres:6
},"stone");

// 混凝土块
IDRegistry.genBlockID("blockConcrete");
Block.createBlock("blockConcrete",[
    {name:"Concrete Block",texture:[["concrete_block",0]],inCreative:true}
],"stone");
ToolAPI.registerBlockMaterial(BlockID.blockConcrete,"stone",1,true);
Block.setDestroyLevel("blockConcrete",1);

// 磨制大理石
IDRegistry.genBlockID("polishedMarble");
Block.createBlock("polishedMarble",[
    {name:"Polished Marble",texture:[["polished_marble",0]],inCreative:true}
],"stone");
ToolAPI.registerBlockMaterial(BlockID.polishedMarble,"stone",1,true);
Block.setDestroyLevel("polishedMarble",1);

// 大理石
IDRegistry.genBlockID("marble");
Block.createBlock("marble",[
    {name:"Marble",texture:[["marble",0]],inCreative:true}
],"stone");
ToolAPI.registerBlockMaterial(BlockID.marble,"stone",1,true);
Block.setDestroyLevel("marble",1);

Block.registerDropFunction("marble",function(coords,id,data,level,enchant){
	if(level >= 1) return [[BlockID.cobbleMarble,1,0]];
	return [];
},1);

Callback.addCallback("GenerateChunkUnderground",function(chunkX,chunkZ){
    for(let i = 0;i < 6;i++){
        var coords = GenerationUtils.randomCoords(chunkX,chunkZ,0,255);
        GenerationUtils.generateOre(coords.x,coords.y,coords.z,BlockID.marble,0,32);
    }
});

// 大理石圆石
IDRegistry.genBlockID("cobbleMarble");
Block.createBlock("cobbleMarble",[
    {name:"Marble Cobble",texture:[["marble_cobble",0]],inCreative:true}
],"stone");
ToolAPI.registerBlockMaterial(BlockID.cobbleMarble,"stone",1,true);
Block.setDestroyLevel("cobbleMarble",1);

// 安山岩圆石
IDRegistry.genBlockID("cobbleAndesite");
Block.createBlock("cobbleAndesite",[
    {name:"Andesite Cobble",texture:[["andesite_cobble",0]],inCreative:true}
],"stone");
ToolAPI.registerBlockMaterial(BlockID.cobbleAndesite,"stone",1,true);
Block.setDestroyLevel("cobbleAndesite",1);

// 闪长岩圆石
IDRegistry.genBlockID("cobbleDiorite");
Block.createBlock("cobbleDiorite",[
    {name:"Diorite Cobble",texture:[["diorite_cobble",0]],inCreative:true}
],"stone");
ToolAPI.registerBlockMaterial(BlockID.cobbleDiorite,"stone",1,true);
Block.setDestroyLevel("cobbleDiorite",1);

// 花岗岩圆石
IDRegistry.genBlockID("cobbleGranite");
Block.createBlock("cobbleGranite",[
    {name:"Granite Cobble",texture:[["granite_cobble",0]],inCreative:true}
],"stone");
ToolAPI.registerBlockMaterial(BlockID.cobbleGranite,"stone",1,true);
Block.setDestroyLevel("cobbleGranite",1);

Block.registerDropFunctionForID(1,function(coords,id,data,level,enchant){
	if(level >= 1){
		if(data == 0){
			if(enchant.silk) return [[id,1,data]];
			return [[4,1,0]];
		}
		
		if(data == 1){
			if(enchant.silk) return [[id,1,data]];
			return [[BlockID.cobbleGranite,1,0]];
		}

		if(data == 3){
			if(enchant.silk) return [[id,1,data]];
			return [[BlockID.cobbleDiorite,1,0]];
		}

		if(data == 5){
			if(enchant.silk) return [[id,1,data]];
			return [[BlockID.cobbleAndesite,1,0]];
		}
	}
	return [];
},1);

Callback.addCallback("PreLoaded",function(){
	Recipes.addFurnace(BlockID.cobbleMarble,BlockID.marble,0);
	Recipes.addFurnace(BlockID.cobbleGranite,1,1);
	Recipes.addFurnace(BlockID.cobbleDiorite,1,3);
	Recipes.addFurnace(BlockID.cobbleAndesite,1,5);

	Recipes.addShaped({id:BlockID.polishedMarble,count:4,data:0},[
		"aa",
		"aa"
	],["a",BlockID.marble,0]);
	
	Recipes.addShaped({id:BlockID.blockConcrete,count:3,data:0},[
		"aba",
		"bcb",
		"aba"
	],["a",12,-1,"b",13,0,"c",ItemID.slag,0]);
});

// [小石子]Small Stone
IDRegistry.genBlockID("smallStone");
Block.createBlock("smallStone",[
    {name:"Small Stone",texture:[["small_stone",0]],inCreative:false}
],{base:0,solid:false,opaque:true,destroytime:0});

var shape = new ICRender.CollisionShape();
shape.addEntry().addBox(1,1,1,0,0,0);
BlockRenderer.setCustomCollisionShape(BlockID.smallStone,-1,shape);
Block.setBlockShape(BlockID.smallStone,{x:0.0625,y:0,z:0.0625},{x:0.9375,y:0.0625,z:0.9375},0);

IDRegistry.genItemID("smallStone");
Item.createItem("smallStone","Small Stone",{name:"small_stone"});

Block.registerDropFunction("smallStone",function(coords){
	var stone = OreVein.SMALL_STONE[ChunkRegistry.getChunk(Math.floor(coords.x / 16),Math.floor(coords.z / 16),0)];
	if(stone) return [[stone.id,stone.count,stone.data]];
	if(Math.random() < 0.25) return [[318,1,0]];
	return [[ItemID.smallStone,1,0]];
});

Callback.addCallback("PreLoaded",function(){
    Callback.addCallback("GenerateChunk",function(chunkX,chunkZ){
		for(let i = 0;i < 128;i++){
			var coords = GenerationUtils.randomCoords(chunkX,chunkZ,64,128);
			if(!GenerationUtils.isTransparentBlock(World.getBlockID(coords.x,coords.y - 1,coords.z))){
				if(World.isAirBlock(coords.x,coords.y,coords.z)) World.setBlock(coords.x,coords.y,coords.z,BlockID.smallStone,0);
			}
		}
    });
});




// file: block/tree/rubber.js

Block.createSpecialType({
    base:17,
    solid:true,
    destroytime:2,
    explosionres:10
},"log");

IDRegistry.genBlockID("rubberTreeLog");
Block.createBlock("rubberTreeLog",[
    {name:"Rubber Tree Log",texture:[["rubber_tree_log_bottom",0],["rubber_tree_log_top",0],["rubber_tree_log",0]],inCreative:true},
    {name:"Rubber Tree Log",texture:[["rubber_tree_log_bottom",0],["rubber_tree_log_top",0],["rubber_tree_log",0]],inCreative:false}
],"log");
ToolAPI.registerBlockMaterial(BlockID.rubberTreeLog,"wood",true);

Block.registerDropFunction("rubberTreeLog",function(coords,id,data,level,enchant){
    if(data == 0){
        return [[id,1,0]];
    }
    
    if(data == 1){
        return [[id,1,0],[ItemID.resin,1,0]];
    }
});

Block.createSpecialType({
    base:16,
    destroytime:0.2,
    explosionres:1
},"leaves");

IDRegistry.genBlockID("rubberTreeLeaves");
Block.createBlock("rubberTreeLeaves",[
    {name:"Rubber Tree Leaves",texture:[["rubber_tree_leaves",0]],inCreative:true}
],"leaves");
ToolAPI.registerBlockMaterial(BlockID.rubberTreeLeaves,"plant",true);




// file: block/tank/glass_tank.js

// 玻璃储罐
IDRegistry.genBlockID("glassTank");
Block.createBlock("glassTank",[
    {name:"Glass Tank",texture:[["glass_tank_bottom",0],["glass_tank_top",0],["glass_tank",0]],inCreative:true}
],{opaque:true,destroytime:3});
Block.setBlockShape(BlockID.glassTank,{x:0.0625,y:0,z:0.0625},{x:0.9375,y:1,z:0.9375},-1);

ICRender.addGroupFor(BlockID.glassTank,["input-liquid-pipe","output-liquid-pipe","transport-liquid-pipe"]);

Callback.addCallback("PreLoaded",function(){
    Recipes.addShaped({id:BlockID.glassTank,count:1,data:0},["ABA","B B","ABA"],["A",102,0,"B",20,0]);
});

MachineRegistry.registerPrototype(BlockID.glassTank,{
    defaultValues:{
        height:0
    },

    updateAnim:function(){
        if(this.anim){
            var stored = this.liquidStorage.getLiquidStored();
            var render = new Render();
            render.setPart("body",[{type:"box",uv:{x:0,y:0},coords:{x:0,y:-this.data.height / 2,z:0},size:{x:13,y:this.data.height * 0.9375,z:13}}],{});
            this.anim.describe({skin:"models/liquid/" + stored + ".png",render:render.getID()});
            this.anim.load();
        }
    },

    init:function(){
        this.anim = new Animation.Base(this.x + 0.5,this.y - 1.5,this.z + 0.5);
        this.updateAnim();

        this.liquidStorage.setLimit(null,16);
    },

    destroy:function(){
        if(this.anim){
            this.anim.destroy();
            this.anim = null;
        }
    },

    click:function(id,count,data){
        var stored = this.liquidStorage.getLiquidStored();
        var amount = this.liquidStorage.getAmount(stored);
        var liquid = Liquid.getItemLiquid(id,data);
        var storage = Liquid.getItemStorage(id,data);

        if(liquid){
            if(!stored || stored == liquid && amount + storage <= 16){
                this.liquidStorage.addLiquid(liquid,storage);
                Player.decreaseCarriedItem(1);

                var empty = Liquid.getEmptyItem(id,data);
                Player.addItemToInventory(empty.id,1,empty.data);
            }
            return true;
        }

        var full = Liquid.getFullItem(id,data,stored);
        if(full && amount >= full.amount){
            this.liquidStorage.getLiquid(stored,full.amount);
            Player.addItemToInventory(full.id,1,full.data);
            Player.decreaseCarriedItem(1);
        }

        Game.message(LiquidRegistry.getLiquidName(stored) + " - " + parseInt(amount * 1000) + "mB");
    },
    
    tick:function(){
        var stored = this.liquidStorage.getLiquidStored();
        var amount = this.liquidStorage.getAmount(stored);

        this.data.height += ((amount / 4) * 4 - this.data.height) * 0.1;
        this.data.height = parseInt(this.data.height * 100) / 100;

        if(stored){
            if(World.getBlockID(this.x,this.y - 1,this.z) == this.id){
                var tile = World.getTileEntity(this.x,this.y - 1,this.z);
                if(tile){
                    var tile_stored = tile.liquidStorage.getLiquidStored();
                    var tile_amount = tile.liquidStorage.getAmount(tile_stored);
                    if(!tile_stored || tile_stored == stored && tile_amount < 16){
                        this.liquidStorage.getLiquid(stored,1);
                        tile.liquidStorage.addLiquid(stored,1);
                    }
                }
            }
            if(Math.abs(amount / 4 - this.data.height) > 0.1) {this.updateAnim();}
        } else if(this.anim) {this.anim.destroy();}
    }
});




// file: block/tank/iron_tank.js

// [铁储罐]Iron Tank
IDRegistry.genBlockID("ironTank");
Block.createBlock("ironTank",[
    {name:"Iron Tank",texture:[["iron_tank_bottom",0],["iron_tank_top",0],["iron_tank",0]],inCreative:true}
],{opaque:true,destroytime:3});
Block.setBlockShape(BlockID.ironTank,{x:0.0625,y:0,z:0.0625},{x:0.9375,y:1,z:0.9375},-1);

Callback.addCallback("PreLoaded",function(){
    Recipes.addShaped({id:BlockID.ironTank,count:1,data:0},["AAA","BCB","AAA"],["A",20,0,"B",ItemID.plateIron,0,"C",BlockID.glassTank,0]);
});

MachineRegistry.registerPrototype(BlockID.ironTank,{
    init:function(){
        this.liquidStorage.setLimit(null,32);
    },

    click:function(id,count,data){
        var stored = this.liquidStorage.getLiquidStored();
        var amount = this.liquidStorage.getAmount(stored);
        var liquid = Liquid.getItemLiquid(id,data);
        var storage = Liquid.getItemStorage(id,data);

        if(liquid){
            if(!stored || stored == liquid && amount + storage <= 32){
                this.liquidStorage.addLiquid(liquid,storage);
                Player.decreaseCarriedItem(1);

                var empty = Liquid.getEmptyItem(id,data);
                Player.addItemToInventory(empty.id,1,empty.data);
            }
            return true;
        }

        var full = Liquid.getFullItem(id,data,stored);
        if(full && amount >= full.amount){
            this.liquidStorage.getLiquid(stored,full.amount);
            Player.addItemToInventory(full.id,1,full.data);
            Player.decreaseCarriedItem(1);
        }

        Game.message(LiquidRegistry.getLiquidName(stored) + " - " + parseInt(amount * 1000) + "mB");
    },
    
    tick:function(){
        var stored = this.liquidStorage.getLiquidStored();

        if(stored){
            if(World.getBlockID(this.x,this.y - 1,this.z) == this.id){
                var tile = World.getTileEntity(this.x,this.y - 1,this.z);
                var tile_stored = tile.liquidStorage.getLiquidStored();
                var tile_amount = tile.liquidStorage.getAmount(tile_stored);
                if(tile && (!tile_stored || tile_stored == stored && tile_amount < 32)){
                    this.liquidStorage.getLiquid(stored,1);
                    tile.liquidStorage.addLiquid(stored,1);
                }
            }
        }
    }
});




// file: block/item_pipe/item_pipe.js

var ItemPipe = {
    item:new GameObject("item_pipe",{
        init:function (){
            this.position = {x:0,y:0,z:0};
            this.target = {x:0,y:0,z:0};
            this.item = {id:0,data:0,count:0,extra:{}};
            this.direction = {x:0,y:0,z:0};
            this.velocity = 0.2;
            this.friction = 0;
        },

        update:function(){
            if(this.move()) this.pathfinder();

            var x = Math.floor(this.position.x);
            var y = Math.floor(this.position.y);
            var z = Math.floor(this.position.z);

            var container = World.getContainer(x,y,z);
            if(container && container.tileEntity && container.tileEntity.setPipeFunctions) container.tileEntity.setPipeFunctions(this);

            this.moveAnimation();
            if(this.item.count < 1) this.destroySelf();
            
            if(World.isAirBlock(x,y,z)){
                World.drop(this.position.x,this.position.y,this.position.z,this.item.id,this.item.count,this.item.data);
                this.destroySelf();
            }
        },

        destroySelf:function(){
            this.animation.destroy()
            this.destroy();
        },

        setFriction:function(vel){
            this.friction = vel;
        },

        setVelocity:function(vel){
            this.velocity = vel;
        },

        turnBack:function(){
            this.target = {
                x: Math.floor(this.position.x) - this.direction.x,
                y: Math.floor(this.position.y) - this.direction.y,
                z: Math.floor(this.position.z) - this.direction.z
            }
        },

        setItem:function(item){
            this.item = item;
            this.animate();
        },

        setPosition:function(pos){
            this.position = pos;
            this.direction = {x:0,y:0,z:0}
        },

        setTarget:function(pos){
            this.target = pos;
        },

        animate:function(){
            if(this.animation) this.animation.destroy(),this.animation = null;
            this.animation = new Animation.Item(this.position.x + 0.5, this.position.y + 0.5, this.position.z + 0.5);
            this.animation.describeItem({id:this.item.id,count:1,data:this.item.data,size:0.25,rotation:"x"},{x:-0.5,y:-0.5,z:-0.5,});
            this.animation.load();
        },

        moveAnimation:function(){
           if(this.animation) this.animation.setPos(this.position.x + 0.5,this.position.y + 0.5,this.position.z + 0.5);
        },

        move:function(){
            var dvelocity = Math.min(0.5,Math.max(0.2,this.velocity - this.friction || 0)) / 10;
            if(this.target && dvelocity){
                var delta = {
                    x:this.target.x - this.position.x,
                    y:this.target.y - this.position.y,
                    z:this.target.z - this.position.z,
                };
                var dis = Math.sqrt(delta.x * delta.x + delta.y * delta.y + delta.z * delta.z);
                this.direction = {
                    x:Math.floor(delta.x / dis + 0.5) || 0,
                    y:Math.floor(delta.y / dis + 0.5) || 0,
                    z:Math.floor(delta.z / dis + 0.5) || 0,
                };
                var move = Math.min(dis,dvelocity) / dis || 0;
                this.position.x += delta.x * move;
                this.position.y += delta.y * move;
                this.position.z += delta.z * move;
                return dis <= dvelocity;
            }
            return true;
        },

        pathfinder:function(){
            var containers = ItemPipe.findContainers(this.position.x,this.position.y,this.position.z);
            var resC = ItemPipe.filterDirections(containers,this.direction);
			var cpipe = ItemPipe.isPipe(World.getBlockID(this.position.x,this.position.y,this.position.z)) || {};
            if(resC){
                var dir = resC[parseInt(Math.random() * resC.length)]
                if(dir){
                    var container = World.getContainer(Math.floor(this.position.x) + dir.x,Math.floor(this.position.y) + dir.y,Math.floor(this.position.z) + dir.z);
                    if(container && !cpipe.stopContainerAdding) this.addToContainer(container);
                }
            }

            var dir,path = ItemPipe.findPath(this);
            if(path){
                dir = path[parseInt(Math.random() * path.length)];
            } else {
                dir = this.direction
            }

            try {
                this.target = {
                    x:Math.floor(this.position.x) + dir.x,
                    y:Math.floor(this.position.y) + dir.y,
                    z:Math.floor(this.position.z) + dir.z
                }
            } catch(e) {}
        },

        addToContainer:function(container){
            var tileEntity = container.tileEntity;
            var slots = [];
            var slotsInitialized = false;
            var notNative = container.isContainer;
            if(tileEntity){
                if(tileEntity.addTransportedItem){
                    tileEntity.addTransportedItem(this, this.item, this.direction);
                    return;
                }
                if(tileEntity.getTransportSlots){
                    slots = tileEntity.getTransportSlots().input || [];
                    slotsInitialized = true;
                }
            }

            if(!slotsInitialized){
                if(notNative){
                    for(let name in container.slots) slots.push(name);
                } else {
                    for(let i = 0; i < container.getSize();i++) slots.push(i);
                }
            }

            for(let i in slots){
                var slot = container.getSlot(slots[i]);
                if (this.item.count <= 0) break;
                if (slot.id == 0 || slot.id == this.item.id && slot.data == this.item.data) {
                    var add = Math.min((slot.id > 0?Item.getMaxStack(slot.id):64) - slot.count,this.item.count);
                    this.item.count -= add;
                    slot.count += add;
                    slot.id = this.item.id;
                    slot.data = this.item.data;
                    if (!notNative) container.setSlot(i,slot.id,slot.count,slot.data);
                }
            }
            
            if(notNative) container.validateAll();
        }
    }),

    pipes:{},

    register:function(id,friction){
        this.pipes[id] = {
            friction:friction || 0
        }
    },

    isPipe:function(id){
        return this.pipes[id]?true:false;
    },

    canUseTile:function(tile){
        if (tile.getTransportSlots || tile.addTransportedItem || tile.getTransportedItem) return true;
        return false;
    },

    canConnectTo:function(x,y,z,side){
        var container = World.getContainer(x,y,z);
        var native = {54:true,61:true,62:true,154:true};

        if (this.isPipe(World.getBlockID(x,y,z))) return true;
        if (!side && native[World.getBlockID(x,y,z)]) return true;
        if (!side && container && container.tileEntity && this.canUseTile(container.tileEntity)) return true;

        return false;
    },

    findDirections:function(x,y,z,side){
        var possible = [];
        var directions = [{x:0,y:0,z:-1},{x:0,y:0,z:1},{x:-1,y:0,z:0},{x:1,y:0,z:0},{x:0,y:-1,z:0},{x:0,y:1,z:0}];

        for(let i in directions){
            var dir = directions[i];
            if (this.canConnectTo(x + dir.x,y + dir.y,z + dir.z,side)) possible.push(dir);
        }

        return possible
    },

    findContainers: function (x, y, z,side) {
        var possible = [];
        var directions = [{x:0,y:0,z:-1},{x:0,y:0,z:1},{x:-1,y:0,z:0},{x:1,y:0,z:0},{x:0,y:-1,z:0},{x:0,y:1,z:0}];

        for(let i in directions){
            var dir = directions[i];
            if (!this.isPipe(World.getBlockID(x + dir.x,y + dir.y,z + dir.z)) && this.canConnectTo(x + dir.x,y + dir.y,z + dir.z,side)) possible.push(dir);
        }

        return possible
    },

    filterDirections:function(list,dir){
        var possible = [];

        for(let i in list){
            var current = list[i];
            if(!(current.x == -dir.x && current.y == -dir.y && current.z == -dir.z)) possible.push(current);
        }

        return possible;
    },

    findPath:function(item){
        var pipe = this.isPipe(World.getBlockID(item.position.x,item.position.y,item.position.z));
        
        this.setupNativePipeFunctions(item);
        var dirs = this.findDirections(item.position.x,item.position.y,item.position.z);
        var res = this.filterDirections(dirs,item.direction);
        var container = World.getContainer(item.position.x,item.position.y,item.position.z);

        if(container && container.tileEntity && container.tileEntity.getTransportingDirections) res = container.tileEntity.getTransportingDirections(item);
        if(pipe && pipe.getTransportingDirections) res = pipe.getTransportingDirections(item);

        return res
    },

    setupNativePipeFunctions:function(item){
        var pipe = this.isPipe(World.getBlockID(item.position.x,item.position.y,item.position.z));
        if(pipe) item.setFriction(Math.min(0,item.friction + pipe.friction));
    }
}

Callback.addCallback("PreLoaded",function(){
	for(let i in BlockID){
		var tile = TileEntity.getPrototype(BlockID[i]);
		if(tile && tile.getTransportSlots) ICRender.addGroupFor(BlockID[i],[
            "input-item-pipe",
            "output-item-pipe",
            "transport-item-pipe"
        ]);
	}
});

Block.createSpecialType({
    opaque:true,
    destroytime:1
},"pipe");

ICRender.addGroupFor(54,["input-item-pipe","output-item-pipe","transport-item-pipe"]);
ICRender.addGroupFor(61,["input-item-pipe","output-item-pipe","transport-item-pipe"]);
ICRender.addGroupFor(62,["input-item-pipe","output-item-pipe","transport-item-pipe"]);
ICRender.addGroupFor(154,["input-item-pipe","output-item-pipe","transport-item-pipe"]);




// file: block/item_pipe/input_item_pipe.js

IDRegistry.genBlockID("itemPipeInput");
Block.createBlock("itemPipeInput",[
	{name:"Item Pipe (Input)",texture:[["input_item_pipe",0]],inCreative:true},
	{name:"Item Pipe (Input)",texture:[["input_item_pipe",0]],inCreative:false}
],"pipe");

Tooltip.info(BlockID.itemPipeInput,"Input item into pipeline.");

ItemPipe.register(BlockID.itemPipeInput,0);
TileRenderer.setupWireModel(BlockID.itemPipeInput,1,0.5,"input-item-pipe",true);
Block.setBlockShape(BlockID.itemPipeInput,{x:0.25,y:0.25,z:0},{x:0.75,y:0.75,z:1},0);
ICRender.addGroupFor(BlockID.itemPipeInput,[
	"classify-item-pipe",
	"transport-item-pipe",
	"output-item-pipe"
]);

MachineRegistry.setDrop("itemPipeInput",BlockID.itemPipeInput);
Callback.addCallback("PreLoaded",function(){
	RecipeRegistry.addAssemblyTableRecipe([{id:BlockID.itemPipeTransport,count:1,data:0},{id:54,count:1,data:0}],{id:BlockID.itemPipeInput,count:1,data:0});
});

Block.registerPlaceFunction("itemPipeInput",function(coords,item,block){
	var place = coords;
	if(!canTileBeReplaced(block.id,block.data)){
		place = coords.relative;
		block = World.getBlock(place.x,place.y,place.z);
		if(!canTileBeReplaced(block.id,block.data)) return;
	}
	
    World.setBlock(place.x,place.y,place.z,item.id,1);
    World.addTileEntity(place.x,place.y,place.z);
    Player.decreaseCarriedItem(1);
});

MachineRegistry.registerPrototype(BlockID.itemPipeInput,{
	defaultValues:{
		index:0
	},
	
	getTransportingDirections:function(item){
		var output = [],res = ItemPipe.filterDirections(ItemPipe.findDirections(item.position.x,item.position.y,item.position.z),item.direction);
		for(let i in res) if(World.getBlockID(this.x + res[i].x,this.y + res[i].y,this.z + res[i].z) != this.id) output.push(res[i]);
		return output;
	},

	tick:function(){
		if(World.getThreadTime()%20 == 0){
            var containerData = this.findContainer();
            if(containerData && containerData.container){
                var item = this.getItemFrom(containerData.container,1);
                if(item){
                    var trans = ItemPipe.item.deploy();
                    trans.setPosition(containerData.position);
                    trans.setItem(item);
                    trans.setTarget(this);
                    trans.setFriction(-0.3);
                } else {
                    this.data.index++;
                }
            }
        }
	},

	findContainer:function(){
		var directions = ItemPipe.findContainers(this.x,this.y,this.z),dir = directions[this.data.index % directions.length];
		if(dir) return {
			direction:dir,
			position:{x:this.x + dir.x,y:this.y + dir.y,z:this.z + dir.z},
			container:World.getContainer(this.x + dir.x,this.y + dir.y,this.z + dir.z)
		};
	},

	getItemFrom:function(container,maxCount){
		var slots = [],slotsInitialized = false;

		if(container.tileEntity){
			if(container.tileEntity.getTransportedItem) container.tileEntity.getTransportedItem();
			if(container.tileEntity.getTransportSlots){
				slots = container.tileEntity.getTransportSlots().output || [];
				slotsInitialized = true;
			}
		}

		if(!slotsInitialized){
			if(container.isContainer){
				for(let name in container.slots) slots.push(name);
			} else {
				for(let index = 0;index < container.getSize();index++) slots.push(index);
			}
		}

		var item = null;
		for(let i in slots){
			var slot = container.getSlot(slots[i]);
			if(slot.id > 0){
				var count = Math.min(maxCount,slot.count);
				item = {id:slot.id,count:count,data:slot.data};
				slot.count -= count;

				if(!container.isContainer) container.setSlot(i,slot.id,slot.count,slot.data);
					
				break;
			}
        }
        
		if(container.isContainer) container.validateAll();

		return item;
	}
});




// file: block/item_pipe/output_item_pipe.js

Renderer.registerPipeOutputRenderModel = function(id,data,texture,groups){
	var textures = [
		[texture[0],texture[0],texture[0],texture[0],texture[0],texture[1]],
		[texture[0],texture[0],texture[0],texture[0],texture[1],texture[0]],
		[texture[0],texture[1],texture[0],texture[0],texture[0],texture[0]],
		[texture[1],texture[0],texture[0],texture[0],texture[0],texture[0]],
		[texture[0],texture[0],texture[0],texture[1],texture[0],texture[0]],
		[texture[0],texture[0],texture[1],texture[0],texture[0],texture[0]]
	];
	
	var boxes = [
		{side:[1,0,0],box:[0.75,0.25,0.25,1,0.75,0.75]},
		{side:[-1,0,0],box:[0,0.25,0.25,0.25,0.75,0.75]},
		{side:[0,1,0],box:[0.25,0.75,0.25,0.75,1,0.75]},
		{side:[0,-1,0],box:[0.25,0,0.25,0.75,0.25,0.75]},
		{side:[0,0,1],box:[0.25,0.25,0.75,0.75,0.75,1]},
		{side:[0,0,-1],box:[0.25,0.25,0,0.75,0.75,0.25]}
	];

	for(let count = 0;count < 6;count++){
		var render = new ICRender.Model(),model = BlockRenderer.createModel();
		model.addBox(0.25,0.25,0.25,0.75,0.75,0.75,id,0);
		render.addEntry(model);

		for(let i in boxes){
			model = BlockRenderer.createModel();
			model.addBox(boxes[i].box[0],boxes[i].box[1],boxes[i].box[2],boxes[i].box[3],boxes[i].box[4],boxes[i].box[5],[textures[count][i]]);
			
			if(groups){
				for(let n in groups){
					var group = groups[n];
					render.addEntry(model).asCondition(boxes[i].side[0],boxes[i].side[1],boxes[i].side[2],ICRender.getGroup(group),0);
				}
			}

			ICRender.addGroupFor(id,groups,data);
			Renderer.registerRenderModel(id,data + count,render);
		}
	}
	
	Block.setBlockShape(id,{x:0.25,y:0.25,z:0.25},{x:0.75,y:0.75,z:0.75},data);
}

IDRegistry.genBlockID("itemPipeOutput");
Block.createBlock("itemPipeOutput",[
    {name:"Item Pipe (Output)",texture:[["output_item_pipe",0]],inCreative:true},
    {name:"Item Pipe (Output)",texture:[["output_item_pipe",0]],inCreative:false}
],"pipe");

Tooltip.info(BlockID.itemPipeOutput,"Output item to specified direction.");

ItemPipe.register(BlockID.itemPipeOutput,0);
Block.setBlockShape(BlockID.itemPipeOutput,{x:0.25,y:0.25,z:0},{x:0.75,y:0.75,z:1},0);
Renderer.registerPipeOutputRenderModel(BlockID.itemPipeOutput,1,[["input_item_pipe",0],["output_item_pipe",0]],[
	"classify-item-pipe",
	"input-item-pipe",
	"output-item-pipe",
	"transport-item-pipe"
]);

MachineRegistry.setDrop("itemPipeOutput",BlockID.itemPipeOutput);
Callback.addCallback("PreLoaded",function(){
	RecipeRegistry.addAssemblyTableRecipe([{id:BlockID.itemPipeTransport,count:1,data:0},{id:410,count:1,data:0}],{id:BlockID.itemPipeOutput,count:1,data:0});
});

Block.registerPlaceFunction("itemPipeOutput",function(coords,item,block){
	var place = coords;
	if(!canTileBeReplaced(block.id,block.data)){
		place = coords.relative;
		block = World.getBlock(place.x,place.y,place.z);
		if(!canTileBeReplaced(block.id,block.data)) return;
	}
	
    World.setBlock(place.x,place.y,place.z,item.id,1);
    World.addTileEntity(place.x,place.y,place.z);
    Player.decreaseCarriedItem(1);
});

MachineRegistry.registerPrototype(BlockID.itemPipeOutput,{
	defaultValues:{
        meta:0
	},
	
	click:function(id,count,data){
		if(Tool.isTool(id,"Wrench")){
			if(this.data.meta < 5){
				this.data.meta++;
			} else {
				this.data.meta = 0;
			}
		}

		this.renderer();
	},

	getTransportingDirections:function(item){
		var output = [],directions = [{x:0,y:0,z:-1},{x:0,y:0,z:1},{x:-1,y:0,z:0},{x:1,y:0,z:0},{x:0,y:-1,z:0},{x:0,y:1,z:0}];
		output.push(directions[this.data.meta]);
		return output;
	},

	renderer:function(){
		Renderer.mapAtCoords(this.x,this.y,this.z,this.id,this.data.meta + 1);
	}
});




// file: block/item_pipe/transport_item_pipe.js

IDRegistry.genBlockID("itemPipeTransport");
Block.createBlock("itemPipeTransport",[
    {name:"Item Pipe (Transport)",texture:[["transport_item_pipe",0]],inCreative:true},
    {name:"Item Pipe (Transport)",texture:[["transport_item_pipe",0]],inCreative:false}
],"pipe");

ItemPipe.register(BlockID.itemPipeTransport,0.1);
TileRenderer.setupWireModel(BlockID.itemPipeTransport,1,0.375,"transport-item-pipe");
ICRender.addGroupFor(BlockID.itemPipeTransport,[
    "classify-item-pipe",
    "input-item-pipe",
    "output-item-pipe",
    "transport-item-pipe"
]);
Block.setBlockShape(BlockID.itemPipeTransport,{x:0.25,y:0.25,z:0},{x:0.75,y:0.75,z:1},0);

MachineRegistry.setDrop("itemPipeTransport",BlockID.itemPipeTransport);
Callback.addCallback("PreLoaded",function(){
    Recipes.addShaped({id:BlockID.itemPipeTransport,count:4,data:0},["aba"],["a",ItemID.ingotTin,0,"b",20,0]);
});

Block.registerPlaceFunction("itemPipeTransport",function(coords,item,block){
    var place = coords;
    if(!canTileBeReplaced(block.id,block.data)){
        place = coords.relative;
        block = World.getBlock(place.x,place.y,place.z);
        if(!canTileBeReplaced(block.id,block.data)) return;
    }
    
    World.setBlock(place.x,place.y,place.z,item.id,1);
    World.addTileEntity(place.x,place.y,place.z);
    Player.decreaseCarriedItem(1);
});




// file: support/minecraft.js

Callback.addCallback("PreLoaded",function(){
    Tool.setHammerDestroyDrop(15,BlockID.gravelIron,1,0);
    Tool.setHammerDestroyDrop(14,BlockID.gravelGold,1,0);

    RecipeRegistry.addCuttingRecipe({id:17,count:1,data:0},{id:5,count:6,data:0});
    RecipeRegistry.addCuttingRecipe({id:17,count:1,data:1},{id:5,count:6,data:1});
    RecipeRegistry.addCuttingRecipe({id:17,count:1,data:2},{id:5,count:6,data:2});
    RecipeRegistry.addCuttingRecipe({id:17,count:1,data:3},{id:5,count:6,data:3});
    RecipeRegistry.addCuttingRecipe({id:162,count:1,data:0},{id:5,count:6,data:4});
    RecipeRegistry.addCuttingRecipe({id:162,count:1,data:1},{id:5,count:6,data:5});
    RecipeRegistry.addCuttingRecipe({id:5,count:1,data:0},{id:158,count:2,data:0});
    RecipeRegistry.addCuttingRecipe({id:5,count:1,data:1},{id:158,count:2,data:1});
    RecipeRegistry.addCuttingRecipe({id:5,count:1,data:2},{id:158,count:2,data:2});
    RecipeRegistry.addCuttingRecipe({id:5,count:1,data:3},{id:158,count:2,data:3});
    RecipeRegistry.addCuttingRecipe({id:5,count:1,data:4},{id:158,count:2,data:4});
    RecipeRegistry.addCuttingRecipe({id:5,count:1,data:5},{id:158,count:2,data:5});

    RecipeRegistry.addAutoclaveRecipe({id:ItemID.dustEnder,count:1,data:0},{id:368,count:1,data:0});
    RecipeRegistry.addAutoclaveRecipe({id:ItemID.dustDiamond,count:1,data:0},{id:264,count:1,data:0});

    RecipeRegistry.addFarmingStationRecipe({id:6,data:0},[{id:17,count:4,data:0},{id:6,count:1,data:0},{id:260,count:1,data:0}],{id:3,data:0});
    RecipeRegistry.addFarmingStationRecipe({id:6,data:1},[{id:17,count:4,data:1},{id:6,count:1,data:1}],{id:3,data:0});
    RecipeRegistry.addFarmingStationRecipe({id:6,data:2},[{id:17,count:4,data:2},{id:6,count:1,data:2}],{id:3,data:0});
    RecipeRegistry.addFarmingStationRecipe({id:6,data:3},[{id:17,count:4,data:3},{id:6,count:1,data:3}],{id:3,data:0});
    RecipeRegistry.addFarmingStationRecipe({id:6,data:4},[{id:162,count:4,data:0},{id:6,count:1,data:4}],{id:3,data:0});
    RecipeRegistry.addFarmingStationRecipe({id:6,data:5},[{id:162,count:4,data:1},{id:6,count:1,data:5}],{id:3,data:0});
    RecipeRegistry.addFarmingStationRecipe({id:81,data:0},[{id:81,count:2,data:0}],{id:12,data:-1});
    RecipeRegistry.addFarmingStationRecipe({id:83,data:0},[{id:83,count:2,data:0}],{id:12,data:-1});
    RecipeRegistry.addFarmingStationRecipe({id:295,data:0},[{id:296,count:1,data:0},{id:295,count:1,data:0}],{id:3,data:0});
    RecipeRegistry.addFarmingStationRecipe({id:361,data:0},[{id:86,count:1,data:0}],{id:3,data:0});
    RecipeRegistry.addFarmingStationRecipe({id:362,data:0},[{id:103,count:1,data:0}],{id:3,data:0});
    RecipeRegistry.addFarmingStationRecipe({id:372,data:0},[{id:372,count:2,data:0}],{id:88,data:0});
    RecipeRegistry.addFarmingStationRecipe({id:391,data:0},[{id:391,count:1,data:0}],{id:3,data:0});
    RecipeRegistry.addFarmingStationRecipe({id:392,data:0},[{id:392,count:1,data:0},{id:394,count:1,data:0}],{id:3,data:0});
    RecipeRegistry.addFarmingStationRecipe({id:435,data:0},[{id:434,count:1,data:0},{id:435,count:1,data:0}],{id:3,data:0});

    Tool.registerTool(256,"Shovel");
    Tool.registerTool(257,"Pickaxe");
    Tool.registerTool(258,"Axe");
    Tool.registerTool(267,"Sword");
    Tool.registerTool(268,"Sword");
    Tool.registerTool(269,"Shovel");
    Tool.registerTool(270,"Pickaxe");
    Tool.registerTool(271,"Axe");
    Tool.registerTool(272,"Sword");
    Tool.registerTool(273,"Shovel");
    Tool.registerTool(274,"Pickaxe");
    Tool.registerTool(275,"Axe");
    Tool.registerTool(276,"Sword");
    Tool.registerTool(277,"Shovel");
    Tool.registerTool(278,"Pickaxe");
    Tool.registerTool(279,"Axe");
    Tool.registerTool(283,"Sword");
    Tool.registerTool(284,"Shovel");
    Tool.registerTool(285,"Pickaxe");
    Tool.registerTool(286,"Axe");
    Tool.registerTool(290,"Hoe");
    Tool.registerTool(291,"Hoe");
    Tool.registerTool(292,"Hoe");
    Tool.registerTool(293,"Hoe");
    Tool.registerTool(294,"Hoe");

    Recipes.deleteRecipeFor([
        {id:256,count:1,data:0},
        {id:257,count:1,data:0},
        {id:258,count:1,data:0},
        {id:267,count:1,data:0},
        {id:268,count:1,data:0},
        {id:269,count:1,data:0},
        {id:270,count:1,data:0},
        {id:271,count:1,data:0},
        {id:272,count:1,data:0},
        {id:273,count:1,data:0},
        {id:274,count:1,data:0},
        {id:275,count:1,data:0},
        {id:276,count:1,data:0},
        {id:277,count:1,data:0},
        {id:278,count:1,data:0},
        {id:279,count:1,data:0},
        {id:283,count:1,data:0},
        {id:284,count:1,data:0},
        {id:285,count:1,data:0},
        {id:286,count:1,data:0},
        {id:290,count:1,data:0},
        {id:292,count:1,data:0},
        {id:293,count:1,data:0},
        {id:294,count:1,data:0},
        {id:302,count:1,data:0},
        {id:303,count:1,data:0},
        {id:304,count:1,data:0},
        {id:305,count:1,data:0},
        {id:306,count:1,data:0},
        {id:307,count:1,data:0},
        {id:308,count:1,data:0},
        {id:309,count:1,data:0},
        {id:310,count:1,data:0},
        {id:311,count:1,data:0},
        {id:312,count:1,data:0},
        {id:313,count:1,data:0},
        {id:314,count:1,data:0},
        {id:315,count:1,data:0},
        {id:316,count:1,data:0},
        {id:317,count:1,data:0},
        {id:325,count:1,data:0},
        {id:380,count:1,data:0},
        {id:410,count:1,data:0}
    ]);

    Recipes.removeFurnaceRecipe(12);
    Recipes.removeFurnaceRecipe(17);
    Recipes.removeFurnaceRecipe(162);

    Recipes.addShapeless({id:4,count:1,data:0},[{id:ItemID.smallStone,data:0},{id:ItemID.smallStone,data:0},{id:ItemID.smallStone,data:0},{id:ItemID.smallStone,data:0}]);
    Recipes.addShapeless({id:5,count:4,data:1},[{id:BlockID.rubberTreeLog,data:-1}]);

    var file = Tool.getAllTool("File"),hammer = Tool.getAllTool("Hammer");
    for(let hi = 0;hi < hammer.length;hi++){
        RecipeRegistry.addShapedRecipe({id:325,count:1,data:0},["   ","aba"," a "],["a",ItemID.plateIron,0,"b",hammer[hi],-1],{4:1});
        RecipeRegistry.addShapedRecipe({id:380,count:1,data:0},["a a","aba","aaa"],["a",ItemID.plateIron,0,"b",hammer[hi],-1],{4:1});
        RecipeRegistry.addShapedRecipe({id:410,count:1,data:0},["aca","aba"," a "],["a",ItemID.plateIron,0,"b",54,0,"c",hammer[hi],-1],{1:1});
        
        RecipeRegistry.addShapedRecipe({id:302,count:1,data:0},["aaa","aba","   "],["a",ItemID.ringSteel,0,"b",hammer[hi],-1],{1:1});
        RecipeRegistry.addShapedRecipe({id:303,count:1,data:0},["aba","aaa","aaa"],["a",ItemID.ringSteel,0,"b",hammer[hi],-1],{1:1});
        RecipeRegistry.addShapedRecipe({id:304,count:1,data:0},["aaa","aba","a a"],["a",ItemID.ringSteel,0,"b",hammer[hi],-1],{1:1});
        RecipeRegistry.addShapedRecipe({id:305,count:1,data:0},["aba","a a","   "],["a",ItemID.ringSteel,0,"b",hammer[hi],-1],{1:1});

        RecipeRegistry.addShapedRecipe({id:306,count:1,data:0},["aaa","aba","   "],["a",ItemID.plateIron,0,"b",hammer[hi],-1],{1:1});
        RecipeRegistry.addShapedRecipe({id:307,count:1,data:0},["aba","aaa","aaa"],["a",ItemID.plateIron,0,"b",hammer[hi],-1],{1:1});
        RecipeRegistry.addShapedRecipe({id:308,count:1,data:0},["aaa","aba","a a"],["a",ItemID.plateIron,0,"b",hammer[hi],-1],{1:1});
        RecipeRegistry.addShapedRecipe({id:309,count:1,data:0},["aba","a a","   "],["a",ItemID.plateIron,0,"b",hammer[hi],-1],{1:1});

        RecipeRegistry.addShapedRecipe({id:314,count:1,data:0},["aaa","aba","   "],["a",ItemID.plateGold,0,"b",hammer[hi],-1],{1:1});
        RecipeRegistry.addShapedRecipe({id:315,count:1,data:0},["aba","aaa","aaa"],["a",ItemID.plateGold,0,"b",hammer[hi],-1],{1:1});
        RecipeRegistry.addShapedRecipe({id:316,count:1,data:0},["aaa","aba","a a"],["a",ItemID.plateGold,0,"b",hammer[hi],-1],{1:1});
        RecipeRegistry.addShapedRecipe({id:317,count:1,data:0},["aba","a a","   "],["a",ItemID.plateGold,0,"b",hammer[hi],-1],{1:1});

        for(let fi = 0;fi < file.length;fi++){
            RecipeRegistry.addShapedRecipe({id:256,count:1,data:0},["cad"," b "," b "],["a",ItemID.plateIron,0,"b",280,0,"c",file[fi],-1,"d",hammer[hi],-1],{0:1,2:1});
            RecipeRegistry.addShapedRecipe({id:257,count:1,data:0},["aca","dbe"," b "],["a",ItemID.plateIron,0,"b",280,0,"c",265,0,"d",file[fi],-1,"e",hammer[hi],-1],{3:1,5:1});
            RecipeRegistry.addShapedRecipe({id:258,count:1,data:0},["acd","abe"," b "],["a",ItemID.plateIron,0,"b",280,0,"c",265,0,"d",file[fi],-1,"e",hammer[hi],-1],{2:1,5:1});
            RecipeRegistry.addShapedRecipe({id:267,count:1,data:0},["cad"," a "," b "],["a",ItemID.plateIron,0,"b",280,0,"c",file[fi],-1,"d",hammer[hi],-1],{0:1,2:1});
            RecipeRegistry.addShapedRecipe({id:283,count:1,data:0},["cad"," a "," b "],["a",ItemID.plateGold,0,"b",280,0,"c",file[fi],-1,"d",hammer[hi],-1],{0:1,2:1});
            RecipeRegistry.addShapedRecipe({id:284,count:1,data:0},["cad"," b "," b "],["a",ItemID.plateGold,0,"b",280,0,"c",file[fi],-1,"d",hammer[hi],-1],{0:1,2:1});
            RecipeRegistry.addShapedRecipe({id:285,count:1,data:0},["aca","dbe"," b "],["a",ItemID.plateGold,0,"b",280,0,"c",266,0,"d",file[fi],-1,"e",hammer[hi],-1],{3:1,5:1});
            RecipeRegistry.addShapedRecipe({id:286,count:1,data:0},["acd","abe"," b "],["a",ItemID.plateGold,0,"b",280,0,"c",266,0,"d",file[fi],-1,"e",hammer[hi],-1],{2:1,5:1});
            RecipeRegistry.addShapedRecipe({id:292,count:1,data:0},["aac","db "," b "],["a",ItemID.plateIron,0,"b",280,0,"c",file[fi],-1,"d",hammer[hi],-1],{2:1,3:1});
            RecipeRegistry.addShapedRecipe({id:294,count:1,data:0},["aac","db "," b "],["a",ItemID.plateGold,0,"b",280,0,"c",file[fi],-1,"d",hammer[hi],-1],{2:1,3:1});
        }
    }
});




// file: support/recipe_viewer.js

ModAPI.addAPICallback("RecipeViewer",function(api){
    let Core = api.Core;

    // [粗制高炉]Crude Blast Furnace
    Core.registerRecipeType("ET-CrudeBlastFurnace",{
		contents:{
            icon:BlockID.crudeBlastFurnace,
            
			drawing:[
				{type:"bitmap",x:430,y:200,scale:6,bitmap:"arrow_background"},
				{type:"bitmap",x:775,y:450,scale:6,bitmap:"logo"}
            ],
            
			elements:{
				"input0":{type:"slot",x:280,y:190,bitmap:"slot_empty",size:120},
				"output0":{type:"slot",x:600,y:190,bitmap:"slot_empty",size:120}
			}
        },
        
		getList:function(id,data,isUsage){
            if(isUsage){
                let result = RecipeRegistry.getRecipeResult("BlastFurnace",[id,data]);
                return result?[{input:[{id:id,count:1,data:data}],output:result}]:[];
            }

            let item,list = [],recipe = RecipeRegistry.getRecipe("BlastFurnace");
            for(let key in recipe){
                result = recipe[key];
                if(result[0].id == id && (result[0].data == data || data == -1)){
                    item = key.split(":");
                    list.push({input:[{id:parseInt(item[0]),count:1,data:parseInt(item[1] || 0)}],output:result});
                }
            }

            return list;
		}
    });

    // [高炉]Blast Furnace
    Core.registerRecipeType("ET-BlastFurnace",{
		contents:{
            icon:BlockID.blastFurnace,
            
			drawing:[
				{type:"bitmap",x:430,y:200,scale:6,bitmap:"arrow_background"},
				{type:"bitmap",x:775,y:450,scale:6,bitmap:"logo"}
            ],
            
			elements:{
				"input0":{type:"slot",x:280,y:190,bitmap:"slot_empty",size:120},
                "output0":{type:"slot",x:600,y:190,bitmap:"slot_empty",size:120},
                "output1":{type:"slot",x:720,y:190,bitmap:"slot_empty",size:120}
			}
        },
        
		getList:function(id,data,isUsage){
            if(isUsage){
                let result = RecipeRegistry.getRecipeResult("BlastFurnace",[id,data]);
                return result?[{input:[{id:id,count:1,data:data}],output:result}]:[];
            }

            let item,list = [],recipe = RecipeRegistry.getRecipe("BlastFurnace");
            for(let key in recipe){
                result = recipe[key];
                for(let i in result){
                    if(result[i].id == id && (result[i].data == data || data == -1)){
                        item = key.split(":");
                        list.push({input:[{id:parseInt(item[0]),count:1,data:parseInt(item[1] || 0)}],output:result});
                    }
                }
            }

            return list;
		}
    });

    // [压缩机]Compressor
    Core.registerRecipeType("ET-Compressor",{
		contents:{
            icon:BlockID.compressor,
            
			drawing:[
				{type:"bitmap",x:430,y:200,scale:6,bitmap:"arrow_background"},
				{type:"bitmap",x:775,y:450,scale:6,bitmap:"logo"}
            ],
            
			elements:{
				"input0":{type:"slot",x:280,y:190,bitmap:"slot_empty",size:120},
				"output0":{type:"slot",x:600,y:190,bitmap:"slot_empty",size:120}
			}
        },
        
		getList:function(id,data,isUsage){
            if(isUsage){
                let result = RecipeRegistry.getRecipeResult("Compressor",[id,data]);
                return result?[{input:[{id:id,count:1,data:data}],output:[result]}]:[];
            }

            let item,list = [],recipe = RecipeRegistry.getRecipe("Compressor");
            for(let key in recipe){
                result = recipe[key];
                if(result.id == id && (result.data == data || data == -1)){
                    item = key.split(":");
                    list.push({input:[{id:parseInt(item[0]),count:1,data:parseInt(item[1] || 0)}],output:[result]});
                }
            }

            return list;
		}
    });

    // [破碎机]Crusher
    Core.registerRecipeType("ET-Crusher",{
		contents:{
            icon:BlockID.crusher,
            
			drawing:[
				{type:"bitmap",x:430,y:200,scale:6,bitmap:"arrow_background"},
				{type:"bitmap",x:775,y:450,scale:6,bitmap:"logo"}
            ],
            
			elements:{
				"input0":{type:"slot",x:280,y:190,bitmap:"slot_empty",size:120},
				"output0":{type:"slot",x:600,y:190,bitmap:"slot_empty",size:120}
			}
        },
        
		getList:function(id,data,isUsage){
            if(isUsage){
                let result = RecipeRegistry.getRecipeResult("Crusher",[id,data]);
                return result?[{input:[{id:id,count:1,data:data}],output:[result]}]:[];
            }

            let list = [],recipe = RecipeRegistry.getRecipe("Crusher");
            for(let key in recipe){
                result = recipe[key];
                if(result.id == id && (result.data == data || data == -1)){
                    item = key.split(":");
                    list.push({input:[{id:parseInt(item[0]),count:1,data:parseInt(item[1] || 0)}],output:[result]});
                }
            }

            return list;
		}
	});

    // [打粉机]Macerator
    Core.registerRecipeType("ET-Macerator",{
		contents:{
            icon:BlockID.macerator,
            
			drawing:[
				{type:"bitmap",x:430,y:200,scale:6,bitmap:"arrow_background"},
				{type:"bitmap",x:775,y:450,scale:6,bitmap:"logo"}
            ],
            
			elements:{
				"input0":{type:"slot",x:280,y:190,bitmap:"slot_empty",size:120},
				"output0":{type:"slot",x:600,y:190,bitmap:"slot_empty",size:120}
			}
        },
        
		getList:function(id,data,isUsage){
            if(isUsage){
                let result = RecipeRegistry.getRecipeResult("Macerator",[id,data]);
                return result?[{input:[{id:id,count:1,data:data}],output:[result]}]:[];
            }

            let item,list = [],recipe = RecipeRegistry.getRecipe("Macerator");
            for(let key in recipe){
                result = recipe[key];
                if(result.id == id && (result.data == data || data == -1)){
                    item = key.split(":");
                    list.push({
                        input:[{id:parseInt(item[0]),count:1,data:parseInt(item[1] || 0)}],
                        output:[result]
                    });
                }
            }

            return list;
		}
    });

    // [切割机]Cutting
    Core.registerRecipeType("ET-Cutting",{
		contents:{
            icon:BlockID.cutting,
            
			drawing:[
				{type:"bitmap",x:430,y:200,scale:6,bitmap:"arrow_background"},
				{type:"bitmap",x:775,y:450,scale:6,bitmap:"logo"}
            ],
            
			elements:{
				"input0":{type:"slot",x:280,y:190,bitmap:"slot_empty",size:120},
				"output0":{type:"slot",x:600,y:190,bitmap:"slot_empty",size:120}
			}
        },
        
		getList:function(id,data,isUsage){
            if(isUsage){
                let result = RecipeRegistry.getRecipeResult("Cutting",[id,data]);
                return result?[{input:[{id:id,count:1,data:data}],output:[result]}]:[];
            }

            let item,list = [],recipe = RecipeRegistry.getRecipe("Cutting");
            for(let key in recipe){
                result = recipe[key];
                if(result.id == id && (result.data == data || data == -1)){
                    item = key.split(":");
                    list.push({
                        input:[{id:parseInt(item[0]),count:1,data:parseInt(item[1] || 0)}],
                        output:[result]
                    });
                }
            }

            return list;
		}
    });
    
    // [离心机]Centrifuge
    Core.registerRecipeType("ET-Centrifuge",{
		contents:{
            icon:BlockID.centrifuge,
            
			drawing:[
				{type:"bitmap",x:430,y:200,scale:6,bitmap:"arrow_background"},
				{type:"bitmap",x:775,y:450,scale:6,bitmap:"logo"}
            ],
            
			elements:{
				"input0":{type:"slot",x:280,y:190,bitmap:"slot_empty",size:120},
                "output0":{type:"slot",x:600,y:130,bitmap:"slot_empty",size:120},
                "output1":{type:"slot",x:720,y:130,bitmap:"slot_empty",size:120},
                "output2":{type:"slot",x:600,y:250,bitmap:"slot_empty",size:120},
                "output3":{type:"slot",x:720,y:250,bitmap:"slot_empty",size:120}
			}
        },
        
		getList:function(id,data,isUsage){
            if(isUsage){
                let result = RecipeRegistry.getRecipeResult("Centrifuge",[id,data]);
                return result?[{input:[{id:id,count:result.count,data:data}],output:result.output}]:[];
            }

            let item,list = [],recipe = RecipeRegistry.getRecipe("Centrifuge");
            for(let key in recipe){
                result = recipe[key];
                for(let i = 0;i <= 4;i++){
                    output = result.output[i];
                    if(output && output.id == id && (output.data == data || data == -1)){
                        item = key.split(":");
                        list.push({input:[{id:parseInt(item[0]),count:recipe.count,data:parseInt(item[1] || 0)}],output:result.output});
                    }
                }
            }

            return list;
		}
	});

    // [洗矿机]Ore Washer
    Core.registerRecipeType("ET-OreWasher",{
		contents:{
            icon:BlockID.oreWasher,
            
			drawing:[
				{type:"bitmap",x:430,y:200,scale:6,bitmap:"arrow_background"},
				{type:"bitmap",x:775,y:450,scale:6,bitmap:"logo"}
            ],
            
			elements:{
				"input0":{type:"slot",x:280,y:190,bitmap:"slot_empty",size:120},
                "output0":{type:"slot",x:600,y:130,bitmap:"slot_empty",size:120},
                "output1":{type:"slot",x:720,y:130,bitmap:"slot_empty",size:120},
                "output2":{type:"slot",x:600,y:250,bitmap:"slot_empty",size:120},
                "output3":{type:"slot",x:720,y:250,bitmap:"slot_empty",size:120}
			}
        },
        
		getList:function(id,data,isUsage){
            if(isUsage){
                let result = RecipeRegistry.getRecipeResult("OreWasher",[id,data]);
                return result?[{input:[{id:id,count:1,data:data}],output:result}]:[];
            }

            let item,list = [],recipe = RecipeRegistry.getRecipe("OreWasher");
            for(let key in recipe){
                result = recipe[key];
                for(let i = 0;i <= 4;i++){
                    if(result[i] && result[i].id == id && (result[i].data == data || data == -1)){
                        item = key.split(":");
                        list.push({input:[{id:parseInt(item[0]),count:1,data:parseInt(item[1] || 0)}],output:result});
                    }
                }
            }

            return list;
		}
	});
	
	// [种植站]Farming Station
    Core.registerRecipeType("ET-FarmingStation",{
		contents:{
            icon:BlockID.farmingStation,
            
			drawing:[
				{type:"bitmap",x:430,y:200,scale:6,bitmap:"arrow_background"},
				{type:"bitmap",x:775,y:450,scale:6,bitmap:"logo"}
            ],
            
			elements:{
                "input0":{type:"slot",x:280,y:190,bitmap:"slot_empty",size:120},
                "input1":{type:"slot",x:280,y:310,bitmap:"slot_empty",size:120},
                "output0":{type:"slot",x:600,y:130,bitmap:"slot_empty",size:120},
                "output1":{type:"slot",x:720,y:130,bitmap:"slot_empty",size:120},
                "output2":{type:"slot",x:600,y:250,bitmap:"slot_empty",size:120},
                "output3":{type:"slot",x:720,y:250,bitmap:"slot_empty",size:120}
			}
        },
        
		getList:function(id,data,isUsage){
            if(isUsage){
                let result = RecipeRegistry.getRecipeResult("FarmingStation",[id,data]);
                return result?[{input:[{id:id,count:1,data:data},{id:recipe.dirt.id,count:1,data:recipe.dirt.data}],output:result.output}]:[];
            }

            let item,list = [],recipe = RecipeRegistry.getRecipe("FarmingStation");
            for(let key in recipe.output){
                result = recipe.output[key];
                for(let i = 0;i <= 4;i++){
                    if(result[i] && result[i].id == id && (result[i].data == data || data == -1)){
                        item = key.split(":");
                        list.push({input:[{id:parseInt(item[0]),count:1,data:parseInt(item[1] || 0)},{id:recipe.dirt.id,count:1,data:recipe.dirt.data}],output:result});
                    }
                }
            }

            return list;
		}
    });
    
    // [锤子]Hammer
    Core.registerRecipeType("ET-Hammer",{
		contents:{
            icon:ItemID.hammerIron,
            
			drawing:[
				{type:"bitmap",x:430,y:200,scale:6,bitmap:"arrow_background"},
				{type:"bitmap",x:775,y:450,scale:6,bitmap:"logo"}
            ],
            
			elements:{
				"input0":{type:"slot",x:280,y:190,bitmap:"slot_empty",size:120},
				"output0":{type:"slot",x:600,y:190,bitmap:"slot_empty",size:120}
			}
        },
        
		getList:function(id,data,isUsage){
            if(isUsage){
                let result = Tool.HAMMER_RECIOE[id];
                return result?[{input:[{id:id,count:1,data:data}],output:[{id:result.id,count:result.count[0],data:result.data}]}]:[];
            }

            let item,list = [],recipe = Tool.HAMMER_RECIOE;
            for(let key in recipe){
                result = recipe[key];
                if(result.id == id && (result.data == data || data == -1)){
                    item = key.split(":");
                    list.push({
                        input:[{id:parseInt(item[0]),count:1,data:parseInt(item[1] || 0)}],
                        output:[{id:result.id,count:result.count[0],data:result.data}]
                    });
                }
            }

            return list;
		}
    });

    // [线缆轧制机]Wiremill
    Core.registerRecipeType("ET-Wiremill",{
		contents:{
            icon:BlockID.wiremill,
            
			drawing:[
				{type:"bitmap",x:430,y:200,scale:6,bitmap:"arrow_background"},
				{type:"bitmap",x:775,y:450,scale:6,bitmap:"logo"}
            ],
            
			elements:{
				"input0":{type:"slot",x:280,y:190,bitmap:"slot_empty",size:120},
				"output0":{type:"slot",x:600,y:190,bitmap:"slot_empty",size:120}
			}
        },
        
		getList:function(id,data,isUsage){
            if(isUsage){
                let result = RecipeRegistry.getRecipeResult("Wiremill",[id,data]);
                return result?[{input:[{id:id,count:result.count,data:data}],output:[result.output]}]:[];
            }

            let item,list = [],recipe = RecipeRegistry.getRecipe("Wiremill");
            for(let key in recipe.output){
                result = recipe.output[key];
                if(result.id == id && (result.data == data || data == -1)){
                    item = key.split(":");
                    list.push({input:[{id:parseInt(item[0]),count:result.count,data:parseInt(item[1] || 0)}],output:[result.output]});
                }
            }

            return list;
		}
    });

    // [高压釜]Autoclave
    Core.registerRecipeType("ET-Autoclave",{
		contents:{
            icon:BlockID.autoclave,
            
			drawing:[
				{type:"bitmap",x:430,y:200,scale:6,bitmap:"arrow_background"},
				{type:"bitmap",x:775,y:450,scale:6,bitmap:"logo"}
            ],
            
			elements:{
				"input0":{type:"slot",x:280,y:190,bitmap:"slot_empty",size:120},
				"output0":{type:"slot",x:600,y:190,bitmap:"slot_empty",size:120}
			}
        },
        
		getList:function(id,data,isUsage){
            if(isUsage){
                let result = RecipeRegistry.getRecipeResult("Autoclave",[id,data]);
                return result?[{input:[{id:id,count:result.count,data:data}],output:[result.output]}]:[];
            }

            let item,list = [],recipe = RecipeRegistry.getRecipe("Autoclave");
            for(let key in recipe.output){
                result = recipe.output[key];
                if(result.id == id && (result.data == data || data == -1)){
                    item = key.split(":");
                    list.push({input:[{id:parseInt(item[0]),count:result.count,data:parseInt(item[1] || 0)}],output:[result.output]});
                }
            }

            return list;
		}
    });

    // [电解机]Electrolyzer
    Core.registerRecipeType("ET-Electrolyzer",{
    	contents:{
    		icon:BlockID.electrolyzer,
        
    		drawing:[
    			{type:"bitmap",x:430,y:200,scale:6,bitmap:"arrow_background"},
    			{type:"bitmap",x:775,y:450,scale:6,bitmap:"logo"}
    		],
        
    		elements:{
    			"input0":{type:"slot",x:280,y:190,bitmap:"slot_empty",size:120},
                "output0":{type:"slot",x:600,y:130,bitmap:"slot_empty",size:120},
                "output1":{type:"slot",x:720,y:130,bitmap:"slot_empty",size:120},
                "output2":{type:"slot",x:600,y:250,bitmap:"slot_empty",size:120},
                "output3":{type:"slot",x:720,y:250,bitmap:"slot_empty",size:120}
    		}
    	},
    
    	getList:function(id,data,isUsage){
    		if(isUsage){
    			let result = RecipeRegistry.getRecipeResult("Electrolyzer",[id,data]);
    			return result?[{input:[{id:id,count:result.count,data:data}],output:result.output}]:[];
    		}
        
    		let item,list = [],recipe = RecipeRegistry.getRecipe("Electrolyzer");
    		for(let key in recipe.output){
    			result = recipe.output[key];
    			if(result.id == id && (result.data == data || data == -1)){
    				item = key.split(":");
    				list.push({input:[{id:parseInt(item[0]),count:result.count,data:parseInt(item[1] || 0)}],output:result.output});
    			}
    		}
        
    		return list;
    	}
    });
    
    // [蒸馏室]Distillery
    Core.registerRecipeType("ET-Distillery",{
    	contents:{
    		icon:BlockID.distillery,
        
    		drawing:[
    			{type:"bitmap",x:430,y:200,scale:6,bitmap:"arrow_background"},
    			{type:"bitmap",x:775,y:450,scale:6,bitmap:"logo"}
    		],
        
    		elements:{
    			"input0":{type:"slot",x:280,y:190,bitmap:"slot_empty",size:120},
                "output0":{type:"slot",x:600,y:130,bitmap:"slot_empty",size:120},
                "output1":{type:"slot",x:720,y:130,bitmap:"slot_empty",size:120},
                "output2":{type:"slot",x:600,y:250,bitmap:"slot_empty",size:120},
                "output3":{type:"slot",x:720,y:250,bitmap:"slot_empty",size:120}
    		}
    	},
    
    	getList:function(id,data,isUsage){
    		if(isUsage){
    			let result = RecipeRegistry.getRecipeResult("Distillery",[id,data]);
    			return result?[{input:[{id:id,count:result.count,data:data}],output:result.output}]:[];
    		}
        
    		let item,list = [],recipe = RecipeRegistry.getRecipe("Distillery");
    		for(let key in recipe.output){
    			result = recipe.output[key];
    			if(result.id == id && (result.data == data || data == -1)){
    				item = key.split(":");
    				list.push({input:[{id:parseInt(item[0]),count:result.count,data:parseInt(item[1] || 0)}],output:result.output});
    			}
    		}
        
    		return list;
    	}
    });

    // [装罐机]Canning Machine
    Core.registerRecipeType("ET-CanningMachine",{
		contents:{
            icon:BlockID.canningMachine,
            
			drawing:[
				{type:"bitmap",x:430,y:200,scale:6,bitmap:"arrow_background"},
				{type:"bitmap",x:775,y:450,scale:6,bitmap:"logo"}
            ],
            
			elements:{
                "input0":{type:"slot",x:280,y:190,bitmap:"slot_empty",size:120},
                "input1":{type:"slot",x:280,y:310,bitmap:"slot_cell",size:120},
                "output":{type:"slot",x:600,y:130,bitmap:"slot_empty",size:120}
			}
        },
        
		getList:function(id,data,isUsage){
            if(isUsage){
                let result = RecipeRegistry.getRecipeResult("CanningMachine",[id,data]);
                return result?[{input:[{id:id,count:1,data:data},{id:recipe.cell.id,count:1,data:recipe.cell.data}],output:[result]}]:[];
            }

            let list = [],recipe = RecipeRegistry.getRecipe("CanningMachine");
            for(let key in recipe){
                if(recipe[key] && recipe[key].id == id && (recipe[key].data == data || data == -1)){
                    let item = key.split(":");
                    list.push({input:[{id:parseInt(item[0]),count:1,data:parseInt(item[1] || 0)},{id:recipe.cell.id,count:1,data:recipe.cell.data}],output:[recipe[key]]});
                }
            }

            return list;
		}
    });

    // [装配台]Assembly Table
    Core.registerRecipeType("ET-AssemblyTable",{
    	contents:{
    		icon:BlockID.assemblyTable,
        
    		drawing:[
    			{type:"bitmap",x:430,y:200,scale:6,bitmap:"arrow_background"},
    			{type:"bitmap",x:775,y:450,scale:6,bitmap:"logo"}
    		],
        
    		elements:{
                "input0":{type:"slot",x:240,y:130,bitmap:"slot_empty",size:120},
                "input1":{type:"slot",x:240,y:250,bitmap:"slot_empty",size:120},
                
                "output0":{type:"slot",x:480,y:190,bitmap:"slot_empty",size:120}
    		}
    	},
        
    	getList:function(id,data,isUsage){
            let list = [],recipe = RecipeRegistry.getRecipe("AssemblyTable");
            
            if(isUsage){
                for(let key in recipe){
                    let item = key.split(":");
                    if(parseInt(item[0]) == id && parseInt(item[1]) == data || parseInt(item[2]) == id && parseInt(item[3]) == data){
                        let result = RecipeRegistry.getRecipeResult("AssemblyTable",[parseInt(item[0]),parseInt(item[1]),parseInt(item[2]),parseInt(item[3])]);
                        return result?[{input:[{id:parseInt(item[0]),count:result.input[0],data:parseInt(item[1])},{id:parseInt(item[2]),count:result.input[1],data:parseInt(item[3])}],output:[result.output]}]:[];
                    }
                }
            }

            for(let key in recipe.output){
                result = recipe.output[key];
                if(result.id == id && result.data == data){
                    let item = key.split(":");
                    list.push({input:[{id:parseInt(item[0]),count:1,data:parseInt(item[1])},{id:parseInt(item[2]),count:1,data:parseInt(item[3])}],output:[RecipeRegistry.getRecipeResult("AssemblyTable",[parseInt(item[0]),parseInt(item[1]),parseInt(item[2]),parseInt(item[3])]).output]});
                }
            }

    		return list;
        }
    });
});




// file: support/world_edit.js

ModAPI.addAPICallback("WorldEdit",function(api){
    let core_coords = null;
		
    Callback.addCallback("ItemUse",function(coords,item){
        if(item.id == 268){
            core_coords = coords;
            Game.message("set struct core.");
        }
    });
    
    api.addCommand({
        name:"/save",
        description:"Save structure.",
        args:"<name>",
        selectedArea:true,
        event:function(args){
            if(core_coords){
                var arr = [],pos = api.getPosition();
            
                for(let x = pos.pos1.x;x <= pos.pos2.x;x++){for(let y = pos.pos1.y;y <= pos.pos2.y;y++){for(let z = pos.pos1.z;z <= pos.pos2.z;z++){
                    if(World.isAirBlock(x,y,z)) continue;
    
                    arr.push([x - core_coords.x,y - core_coords.y,z - core_coords.z,World.getBlock(x,y,z)]);
                }}}
                
                StructureRegistry.save(args[0],arr);
                Game.message("Saved to " + StructureRegistry.dir + args[0] + ".str");
            }
        }
    });
});




// file: core/mod_api.js

ModAPI.registerAPI("ETech",{
    // lib
    ChargeItem:ChargeItemRegistry,
    TileRenderer:TileRenderer,

    // api
    Structure:StructureRegistry,
    Upgrade:UpgradeRegistry,
    Reactor:ReactorRegistry,
    Machine:MachineRegistry,
    Recipe:RecipeRegistry,
    Tool:Tool,

	requireGlobal:function(command){
		return eval(command);
	}
});

Logger.Log("ETech Shared","API");




