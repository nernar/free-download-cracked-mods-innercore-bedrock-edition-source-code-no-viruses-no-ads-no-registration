/*
BUILD INFO:
  dir: dev
  target: main.js
  files: 76
*/



// file: header.js

IMPORT("EnergyNet");
IMPORT("mod");
IMPORT("ChargeItem");
IMPORT("GUILib");
IMPORT("RelativeAPI");
IMPORT("NativeAPI")

var EU = EnergyTypeRegistry.assureEnergyType("Eu", 1);
var QE = EnergyTypeRegistry.assureEnergyType("QE", 1);

var opacityBlocks = [0, 20, 52, 65, 68, 69, 75, 76, 77, 106, 131, 160, 101, 85, 113];

var IndustrialCraftIsExist = false;

ModAPI.addAPICallback("ICore", function(api){
    opacityBlocks.push(BlockID.reinforsedGlass, BlockID.cableOptic);
    
    IDRegistry.genItemID("crushedAdamantite");
    IDRegistry.genItemID("crushedMalachite");
    //IDRegistry.genItemID("crushedMuthril");
    
    Translation.addTranslation("Crushed Adamantite", {ru: "Дроблённый Адамантит"});
    Translation.addTranslation("Crushed Malachite", {ru: "Дроблённый Малахит"});
    //Translation.addTranslation("Crushed Muthril", {ru: "Дроблённый Мифрил"});
    
    Item.createItem("crushedAdamantite", "Crushed Adamantite", {name: "crushedAdamantite"});
    Item.createItem("crushedMalachite", "Crushed Malachite", {name: "crushedMalachite"});
    //Item.createItem("crushedMuthril", "Crushed Muthril", {name: "crushedMuthril"});

    Callback.addCallback("PostLoaded", function(){
        Recipes.addFurnace(ItemID.crushedUranium, ItemID.ingotUranium, 0);
        Recipes.addFurnace(ItemID.crushedAdamantite, ItemID.ingotAdamantite, 0);
        Recipes.addFurnace(ItemID.crushedMalachite, ItemID.ingotMalachite, 0);
        //Recipes.addFurnace(ItemID.crushedMuthril, ItemID.ingotMuthril, 0);
        api.Recipe.addRecipeFor("macerator", BlockID.oreAdamantite, {id: ItemID.crushedAdamantite, count: 2, data: 0});
        api.Recipe.addRecipeFor("macerator", BlockID.oreMalachite, {id: ItemID.crushedMalachite, count: 2, data: 0});
        //api.Recipe.addRecipeFor("macerator", BlockID.oreMuthril, {id: ItemID.crushedMuthril, count: 2, data: 0});
    });

    IndustrialCraftIsExist = true;
});

var UIColor = android.graphics.Color;

var TIPS = __config__.getBool("enable_tips_in_machines");
 
ModAPI.addAPICallback("ForestryAPI", function(api){ 
    opacityBlocks.push(BlockID.forestryGlass); 
});

function random(min, max){return Math.floor(Math.random() * (max - min + 1)) + min;}

var getLightLevel = ModAPI.requireGlobal("Level.getBrightness");
var setRequiresIconOverride = ModAPI.requireGlobal("Item.setRequiresIconOverride");
Armor.preventDamaging = ModAPI.requireGlobal("Armor.preventDamaging");
/*getArmorSlot = ModAPI.requireGlobal("Player.getArmorSlot");
Player.setArmorSlot = ModAPI.requireGlobal("Player.setArmorSlot");*/

const PotionEffect = Native.PotionEffect;

function defaultItemNameOverride(color, type){
    return NameOverrider.standartItemNameOverride(color, type);
}

function defaultBlockNameOverride(color, type){
    return NameOverrider.standartBlockNameOverride(color, type);
}

function energyNameOverride(color, type, tier, mode){ 
    return {colorName: color || "f", prefix:{standart: true, itemType: type}, other: 
        function(item, name){
            if(!mode){
                return "§7"+ Translation.translate("Power tier")+": "+tier;
            }else{
                return "§7"+ Translation.translate("Input")+": "+tier+"/tick";
            }
        }
    }
} 

function chanse(chanse, max){
    return Math.floor(chanse/max*100)
}

function setupWireRender(id, width, group) {
    var render = new ICRender.Model();
    BlockRenderer.setStaticICRender(id, 0, render);
   
    var boxes = [
        {side: [1, 0, 0], box: [0.5 + width / 2, 0.5 - width / 2, 0.5 - width / 2, 1, 0.5 + width / 2, 0.5 + width / 2]},
        {side: [-1, 0, 0], box: [0, 0.5 - width / 2, 0.5 - width / 2, 0.5 - width / 2, 0.5 + width / 2, 0.5 + width / 2]},
        {side: [0, 1, 0], box: [0.5 - width / 2, 0.5 + width / 2, 0.5 - width / 2, 0.5 + width / 2, 1, 0.5 + width / 2]},
        {side: [0, -1, 0], box: [0.5 - width / 2, 0, 0.5 - width / 2, 0.5 + width / 2, 0.5 - width / 2, 0.5 + width / 2]},
        {side: [0, 0, 1], box: [0.5 - width / 2, 0.5 - width / 2, 0.5 + width / 2, 0.5 + width / 2, 0.5 + width / 2, 1]},
        {side: [0, 0, -1], box: [0.5 - width / 2, 0.5 - width / 2, 0, 0.5 + width / 2, 0.5 + width / 2, 0.5 - width / 2]},
    ]
   
    for (var i in boxes) {
        var box = boxes[i];
       
        var model = BlockRenderer.createModel();
        model.addBox(box.box[0], box.box[1], box.box[2], box.box[3], box.box[4], box.box[5], id, 0);
       
        render.addEntry(model).asCondition(box.side[0], box.side[1], box.side[2], group, 0);
    }
    
    ICRender.getGroup(group).add(id, -1)
  
    var model = BlockRenderer.createModel();
    model.addBox(0.5 - width / 2, 0.5 - width / 2, 0.5 - width / 2, 0.5 + width / 2, 0.5 + width / 2, 0.5 + width / 2, id, 0);
    render.addEntry(model);
    
    width = Math.max(width, 0.5);
    Block.setBlockShape(id, {x: 0.5 - width/2, y: 0.5 - width/2, z: 0.5 - width/2}, {x: 0.5 + width/2, y: 0.5 + width/2, z: 0.5 + width/2});
}

var GUI_BAR_STANDART_SCALE = 4.2;

var gui = {};




// file: wires.js

function wireRegistry(id, texture, special, visual, energy){
    let specialTypes = false;
    if(special) specialTypes = Block.createSpecialType(special);
    IDRegistry.genBlockID(id);
    Block.createBlock(id, [
        {
            name: energy.energyType+ " Conduct",
            texture: texture,
            inCreative: false
        }
    ], specialTypes);
    Callback.addCallback("PostLoaded", function(){
        ICRender.getGroup(visual.group).add(BlockID[id], -1);
        setupWireRender(BlockID[id], visual.size, visual.group);
        eval(energy.energyType).registerWire(BlockID[id], energy.maxVoltage);
    });
}

function itemWireRegistry(id, name, texture, wire){
    OresAPI.registerItem(id, name[0], {name: texture}, {ru: name[1]}, {}, [defaultItemNameOverride("a", "item"), false]);
    Item.registerUseFunction(id, function (coords, item, block) {
        World.setBlock(coords.relative.x, coords.relative.y, coords.relative.z, BlockID[wire]);
        Player.decreaseCarriedItem(1);
    });
    Block.registerDropFunctionForID(BlockID[wire], function(c){
        return [[ItemID[id], 1, 0]]
    });
}

wireRegistry("QEconduct", [["conduct", 0]], {lightlevel: 13}, {group: "QE-wire", size: 2/12}, {energyType: "QE", maxVoltage: 2048});
itemWireRegistry("QEconduct", ["QE cable", "QE проводник"], "QE_cable", "QEconduct");

Callback.addCallback("PostLoaded", function(){
    OresAPI.addShapedRecipe([ItemID.QEconduct, 12, 0], ["wiw", "sgs", "wdw"], ["w", 35, -1, "i", 265, 0, "s", 348, 0, "g", 20 , 0, "d", 351, 2]);
});




// file: strings.js

Translation.addTranslation("Leadstone Sоlar Panel", {ru:"Свинцовая Солнечная Панель"});
Translation.addTranslation("Hardent Sоlar Panel", {ru:"Закалённая Солнечная Панель"});
Translation.addTranslation("Redstone Sоlar Panel", {ru:"Краснокаменная Солнечная Панель"});
Translation.addTranslation("Resonant Sоlar Panel", {ru:"Резонирующая Солнечная Панель"});
Translation.addTranslation("Advanced Sоlar Panel", {ru:"Улучшенная Солнечная Панель"});
Translation.addTranslation("Ultimate Sоlar Panel", {ru:"Окончательная Солнечная Панель"});
Translation.addTranslation("Power tier", {ru: "Энергоуровень"});
Translation.addTranslation("§5Maksim Kievsky: §2detected a problem with a block drop. §114.02.2018 §9version 2.0.1", {ru: "§5Максим Киевский: §2обнаружил проблему с дропом блоков. §114.02.2018 §9версии 2.0.1"});
Translation.addTranslation("§5miron27khv: §4created 90% of texture mod. §9Was taken to the development team since version 2.2.3", {ru: "§5miron27khv: §создал 90% текстур мода. §9состоит в команде разработчиков с версии 2.2.3"});
Translation.addTranslation("§4ripemc: §6 noticed a bug with integration with IC². §214.04.2019 §9version 2.4.5.3", {ru: "§4ripemc: §6 заметил баг с интеграцией с IC². §214.04.2019 §9версии 2.4.5.3"});
Translation.addTranslation("§5BrassyFaNToM: §7 reported an error with most of the mechanisms. §C08.06.2019 §9 Versions §b3§f.§70", {ru: "§5BrassyFaNToM: §7 сообщил о баге с большинством механизмов. §C08.06.2019 §9версии §b3§f.§80"});
Translation.addTranslation("This message can be disabled by disabling the show_helpers_message parameter in the config (games/com.mojang/mods/ores/config.json)", {ru: "это сообщение можно отключить, отключив параметр show_helpers_message в конфиге (games/com.mojang/mods/ores/config.json)"});
Translation.addTranslation("Do not open the workbench items from mods - it will lead to the crash!", {ru: "Не открывать верстак предметами из модов - это приведёт к крашу!"});
Translation.addTranslation("All about Ores Mod", {ru: "Все о моде Ores Mod"});
Translation.addTranslation("About ores", {ru: "О рудах"});
Translation.addTranslation("About mechanical blocks", {ru: "О механических блоках"});
Translation.addTranslation("About other items", {ru: "О прочих предметах"});
Translation.addTranslation("To main", {ru: "На главную"});
Translation.addTranslation("Used in crafts.", {ru: "Используется в крафтах."});
Translation.addTranslation("Advantage", {ru: "Преимущество"});
Translation.addTranslation("Disadvantage", {ru: "Недостаток"});
Translation.addTranslation("not rare", {ru: "не редкий"});
Translation.addTranslation("no strengths", {ru: "нет сильных сторон"});
Translation.addTranslation("Adamantite", {ru: "Адамантит"});
Translation.addTranslation("Lead", {ru: "Свинец"});
Translation.addTranslation("Malachite", {ru: "Малахит"});
Translation.addTranslation("Muthril", {ru: "Мифрил"});
Translation.addTranslation("Uranium", {ru: "Ураниум"});
Translation.addTranslation("Sapphire", {ru: "Сапфир"});
Translation.addTranslation("very fast", {ru: "Очень быстрый"});
Translation.addTranslation("not durable", {ru: "Не долговечен"});
Translation.addTranslation("strength", {ru: "сильный"});
Translation.addTranslation("not rare, relatively durable and efficient", {ru: "не редкий, сравнительно прочный и эффективный"});
Translation.addTranslation("lower speed than malachite", {ru: "менее низкая скорость, чем у малахита"});
Translation.addTranslation("the most effective material", {ru: "самый эффективный материал"});
Translation.addTranslation("rate", {ru: "редкий"});
Translation.addTranslation("effective, has the highest damage", {ru: "эффективный, имеет самый высокий урон"});
Translation.addTranslation("rarely comes across", {ru: "редко попадается"});
Translation.addTranslation("Turns reconstructed matter into objects.", {ru: "Превращает реконструированную материю в предметы."});
Translation.addTranslation("Using molecular converters", {ru: "Использование молекулярного конвертатора"});
Translation.addTranslation("The information panel in the mechanism window displays the current state of the mechanism and helps to understand how the mechanism works.", {ru: "Информационная панель в окне механизма отображает текущее состояние механизма и помогает понять, как работает механизм."});
Translation.addTranslation("As a result, you will receive an item that was as a result of the reconstruction of matter.", {ru: "В результате вы получите предмет, который был в результате реконструкции материи."});
Translation.addTranslation("At the exit you will receive the item that was recorded in the reconstructed matter.", {ru: "На выходе вы получите предмет, который был записан в реконструированной материи."});
Translation.addTranslation("The only source of chips", {ru: "Единственный источник получения чипов"});
Translation.addTranslation("For the mechanism to work, you need to: keep the mechanism charged with energy and place the research chips in the upper slot.", {ru: "Чтобы механизм работал, вам необходимо: держать механизм заряженным энергией и поместить исследовательские чипы в верхнюю щель."});
Translation.addTranslation("Generator, for generating a new type of energy QE (Quantum Energy)", {ru: "Генератор, для генерации нового типа энергии QE(Quantum Energy)"});
Translation.addTranslation("Using a molecular generator", {ru: "Использование молекулярного генератора"});
Translation.addTranslation("Working with this mechanism is the easiest.", {ru: "Работа с этим механизмом самая простая."});
Translation.addTranslation("In the interface of the mechanism there are many slots, in these slots are placed any items that the mechanism will turn into energy.", {ru: "В интерфейсе механизма находится множество слотов, в эти слоты помещаются любые предметы, которые механизм превратит в энергию."});
Translation.addTranslation("The mechanism does not consume Eu-energy.", {ru: "Механизм не потребляет Eu-энергии."});
Translation.addTranslation("The removal of energy is carried out by attaching a special conductor to the upper side of the mechanism.", {ru: "Вывод энергии осуществляется, путем присоединения специального проводника к верхней стороне механизма."});
Translation.addTranslation("He accepts ordinary matter and any object, the data of which he will transmit to matter and will issue reconstructed matter.", {ru: "Принимает обычную материю и какой-либо предмет, данные которого он передаст в материю и выдаст реконструированную материю."});
Translation.addTranslation("Reconstructed matter is used in a molecular transducer.", {ru: "Реконструированная материя применяется в молекулярном преобразователе."});
Translation.addTranslation("Use of matter re-constructor", {ru: "Использование реконструктора материи"});
Translation.addTranslation("To understand the mechanism - just open it and look at the panel below.", {ru: "Чтобы понять, как работает механизм - посмотрите на панель снизу, в окне механизма."});
Translation.addTranslation("The red and yellow text indicates that the mechanism is lacking for work.", {ru: "Красный и желтый текст показывают, что нехватает механизму для работы."});
Translation.addTranslation("Molecular compactor compresses QE energy, turning it into matter.", {ru: "Молекулярный уплотнитель сжимает QE энергию, превращая её в материю."});
Translation.addTranslation("The use of molecular sealer.", {ru: "Использование молекулярного уплотнителя."});
Translation.addTranslation("The operation of this mechanism is fully automatic, you just need to maintain working conditions.", {ru: "Работа этого механизма полностью автоматическая, вам лишь нужно поддерживать условия работы"});
Translation.addTranslation("This is the only mechanism that consumes QE-energy.", {ru: "Это единственный механизм, который потребляет QE-энергию."});
Translation.addTranslation("In order for the mechanism to accept QE-energy, you need to connect a wire to it to the upper side.", {ru: "Чтобы механизм принимал QE-энергию - нужно подключить к нему провод к верхней стороне."});
Translation.addTranslation("The mechanism itself begins to work when the energy inside it is greater than 0.", {ru: "Механизм сам начинает работать, когда энергия внутри него больше чем 0."});
Translation.addTranslation("The redstone signal stops the operation of the mechanism, but at the same time it will still be able to absorb energy.", {ru: "Редстоун-сигнал останавливает работу механизма, но при этом он по прежнему сможет принимать в себя энергию."});
Translation.addTranslation("Generation", {ru: "Генерация"});
Translation.addTranslation("night", {ru: "ночью"});
Translation.addTranslation("Leadstone", {ru: "Свинцовая"});
Translation.addTranslation("Hardent", {ru: "Закалённая"});
Translation.addTranslation("Redstone", {ru: "Краснокаменная"});
Translation.addTranslation("Resonant", {ru: "Резонирующая"});
Translation.addTranslation("Advanced", {ru: "Улучшенная"});
Translation.addTranslation("Ultimate", {ru: "Окончательная"});
Translation.addTranslation("This mechanism will grow the tree anywhere.", {ru: "Этот механизм вырастит дерево где угодно."});
Translation.addTranslation("Use of a wood incubator", {ru: "Использование древесного инкубатора"});
Translation.addTranslation("To use a wood incubator you will need: seedling, energy and catalyst.", {ru: "Для использования древесного инкубатора понадобится: саженец, энергия и катализатор."});
Translation.addTranslation("List of supported seedlings and catalysts on the right page.", {ru: "Список поддерживаемых саженцев и катализаторов на правой странице."});
Translation.addTranslation("Before using the mechanism, you need to place a block of earth or dirt next to it.", {ru: "Перед использованием механизма вам нужно поставить рядом с ним блок земли или грязи."});
Translation.addTranslation("In the window of the mechanism, approximately in the middle, there is a red rectangle.", {ru: "В окне механизма, примерно по середине, находится красный прямоугольник."});
Translation.addTranslation("You need to work only with slots from the left of this rectangle.", {ru: "Вам нужно работать только со слотами с лева от этого прямоугольника."});
Translation.addTranslation("A sapling is placed in the top slot; in the right - the catalyst", {ru: "В верхний слот помещается саженец; в правый - катализатор"});
Translation.addTranslation("If you did everything correctly, then a sapling will appear on the dirt block, and the red rectangle will turn green.", {ru: "Если вы все сделали правильно - то на блоке грязи появится саженец, а красный прямоугольник будет становиться зелёным."});
Translation.addTranslation("I remind you that the mechanism consumes energy, nothing will work without it.", {ru: "Напоминаю, что механизм потребляет энергию, без неё ничего работать не будет."});
Translation.addTranslation("The red box is the growth progress bar. When progress is completed - you will receive a tree, seedlings and a special drop, if there is one.", {ru: "Красный прямоугольник - шкала прогресса роста. Когда прогресс завершится - вы получите дерево, саженцы и особый дроп, если таков есть."});
Translation.addTranslation("Saplings:", {ru: "Saplings:"});
Translation.addTranslation("Currently only saplings from minecraft are supported.", {ru: "В настоящий момент поддерживаются только саженцы из minecraft."});
Translation.addTranslation("Catalysts:", {ru: "Катализаторы:"});
Translation.addTranslation("Bone flour.", {ru: "Костная мука."});
Translation.addTranslation("The catalyst is used to accelerate the growth of the tree, its use is not necessary", {ru: "Катализатор используется для ускорения роста дерева, его использование не обязательно"});
Translation.addTranslation("Solar Panels", {ru: "Солнечная панель"});
Translation.addTranslation("Chips", {ru: "Чипы"});
Translation.addTranslation("Receiving:", {ru: "Получение:"});
Translation.addTranslation("Application:", {ru: "Применение:"});
Translation.addTranslation("Creating mechanisms", {ru: "Создание механизмов"});
Translation.addTranslation("Used in the creation of solar panels", {ru: "Используются в создании солнечных панелей"});
Translation.addTranslation("To find out the recipe for higher level kernels, put the core one level less in inventory and open the inventory.", {ru: "Чтобы узнать рецепт ядер более высокого уровня - положите в инвентарь ядро на один уровень меньше и откройте инвентарь."});
Translation.addTranslation("For example, to find out the recipe for the core of a hardened solar panel - take the lead core and open the workbench.", {ru: "Например, чтобы узнать рецепт для ядра закаленной солнечной панели - возьмите ядро свинцовой и откройте верстак."});
Translation.addTranslation("Cores", {ru: "Ядра"});
Translation.addTranslation("Nuggets", {ru: "Самородки"});
Translation.addTranslation("Production Station", {ru: "Производственная Станция"});
Translation.addTranslation("Nanite Collector", {ru: "Сборщик Нанитов"});
Translation.addTranslation("Nanite Training Node", {ru: "Узел Обучения Нанитов"});
Translation.addTranslation("Input", {ru: "Выход"})




// file: Machine/MachineAPI/MachineRegistry.js

//Основа взята из IC2
var MachineRegistry = {
    machineIDs: {},

    isMachine: function(id){
        return this.machineIDs[id];
    },
    
    // Machine Base
    registerPrototype: function(id, Prototype){
        // register ID
        this.machineIDs[id] = true;
        Prototype.id = id;
        
        // click fix
        Prototype.onItemClick = function(id, count, data, coords){
            if (id == ItemID.debugItem) return false;
            if (this.click(id, count, data, coords)) return true;
            if (Entity.getSneaking(Player.get())) return false;
            var gui = this.getGuiScreen();
            if (gui){
                this.container.openAs(gui);
                return true;
            }
        }; 
        
        ToolAPI.registerBlockMaterial(id, "stone", 1);
        Block.setDestroyTime(id, 3);
        TileEntity.registerPrototype(id, Prototype);
    },
    
    registerElectricMachine: function(id, Prototype){
        if (Prototype.defaultValues){
            Prototype.defaultValues.energy = 0;
            Prototype.defaultValues.meta = 0;
            Prototype.defaultValues.progress = 0;
        }
        else{
            Prototype.defaultValues = {
                energy: 0,
                meta: 0,
                progress: 0
            };
        }
        
        Prototype.getTier = Prototype.getTier || function(){
            return 1;
        }
        
        Prototype.getProgress = function(){
            return Math.floor(100*this.data.progress/1);
        }
        
        if(!Prototype.getEnergyStorage){
            Prototype.getEnergyStorage = function(){
                return 0;
            };
        }
        
        Prototype.energyTick = Prototype.energyTick || this.basicEnergyReceiveFunc;
        
        if (!Prototype.getMaxPacketSize) {
            Prototype.getMaxPacketSize = function(tier){
                return Math.pow(2, 3 + this.getTier()*2);
            }
        }
        
        if(!Prototype.energyReceive){
            Prototype.energyReceive =  MachineRegistry.basicEnergyReceiveFunc
        }
        
        this.registerPrototype(id, Prototype);
    },
    
    
    registerGenerator:function(id, Prototype){
        Prototype.canReceiveEnergy = function(){
            return false;
        },
    
        Prototype.isEnergySource = function(){
            return true;
        },
      
        Prototype.energyReceive = Prototype.energyReceive||this.basicEnergyReceiveFunc
        
        Prototype.energyTick = Prototype.energyTick||this.basicEnergyOutFunc
        
        this.registerElectricMachine(id, Prototype);
    },
    
    registerEUStorage:function(id, Prototype){
        Prototype.isEnergySource = function(){
            return true;
        },
        
        Prototype.energyReceive = Prototype.energyReceive || this.basicEnergyReceiveFunc;
        
        Prototype.energyTick = Prototype.energyTick || this.basicEnergyOutFunc;
        
        Prototype.isTeleporterCompatible = true;
        
        this.registerElectricMachine(id, Prototype);
    }, 
    
    setFacing: function(coords){
        if(Entity.getSneaking(player)){
            var facing = coords.side + Math.pow(-1, coords.side);
        }else{
            var facing = coords.side;
        }
        if(facing != this.data.meta){
            this.data.meta = facing;
            return true;
        }
        return false;
    },
    
    basicEnergyOutFunc: function(type, src){
        let output = transferByTier[this.getTier()];
        if(this.data.energy >= output){
            this.data.energy += src.add(output) - output;
        }
    },
    
    basicEnergyReceiveFunc: function(type, amount, voltage) {
        var maxVoltage = this.getMaxPacketSize();
        if(voltage > maxVoltage){
            /*if(voltageEnabled){
                World.explode(this.x + 0.5, this.y + 0.5, this.z + 0.5, 0.5, true);
                this.selfDestroy();
                return 0;
            }*/
            var add = Math.min(maxVoltage, this.getEnergyStorage() - this.data.energy);
        }else{
            var add = Math.min(amount, this.getEnergyStorage() - this.data.energy);
        }
        this.data.energy += add;
        return add;
    },
    
    isValidEUItem: function(id, count, data, energyType){
        if(!energyType) energyType = "Eu"
        var level = container.tileEntity.getTier();
        return ChargeItemRegistry.isValidItem(id, energyType,  level);
    },
    
    isValidEUStorage: function(id, count, data, energyType){
        if(!energyType) energyType = "Eu"
        var level = container.tileEntity.getTier();
        return ChargeItemRegistry.isValidStorage(id, energyType,  level);
    }
}

var transferByTier = {
    1: 32,
    2: 256,
    3: 2048,
    4: 8192
}




// file: Machine/RecipesAPI/MachineRecipeRegistry.js

var MachineRecipeRegistry = {
    recipeData: {},
    
    registerRecipesFor: function(name, data, validateKeys){
        if(validateKeys){
            var newData = {};
            for(var key in data){
                var newKey = key;
                if(key.split(":").length < 2){
                    newKey = eval(key);
                }
                newData[newKey] = data[key];
            }
            data = newData;
        }
        this.recipeData[name] = data;
    },
    
    addRecipeFor: function(name, source, result){
        this.requireRecipesFor(name, true)[source] = result;
    },
    
    requireRecipesFor: function(name, createIfNotFound){
        if(!this.recipeData[name] && createIfNotFound){
            this.recipeData[name] = {};
        }
        return this.recipeData[name];
    },
    
    getRecipeResult: function(name, key1, key2){
        var data = this.requireRecipesFor(name);
        if(data){
            return data[key1] || data[key1+":"+key2];
        }
    }
}




// file: ores/sapphire.js

/*OresAPI.toolRegister({
    material:{
        type: "crystal",
        uid: "sapphire",
        color: "b"
    },
    tool:{
        durability: 5000,
        breakingSpeed: 14,
        enchamentability: 30,
        level: 5,
        damage: 5
    },
        translation:{
            material: "Сапфировый кристал",
            sword: "Сапфировый меч",
            pickaxe: "Сапфировая кирка",
            shovel: "Сапфировая лопата",
            axe: "Сапфировый топор",
            hoe: "Сапфировая мотыга"
        }
});
    
OresAPI.defineArmorSet({
    material: "sapphire",
    durability: 5000,
    color: "b",
    defense:{
        helmet: 4,
        chestplate: 7,
        leggings: 3,
        boots: 3
    },
    craftID: ItemID.crystalSapphire,
    translate:{
        helmet: "Сапфировый шлем",
        chestplate: "Сапфировый нагрудник",
        leggings: "Сапфировые поножи",
        boots: "Сапфировые боты"
    }
});

OresAPI.createCustomOre({
    params: {
        material: "Sapphire",
        ToolLevel: 4,
        genChunk: 3,
        randomSize: true,
        genSize: [2, 4],
        min: 1,
        max: 15,
        drop:{
            ore:[[ItemID.crystalSapphire, 2, 0]]
        },
        color: "b"
    },
    translate:{
        ore: "Сапфировая руда",
        ore_block: "Сапфировый блок"
    }
});*/


OresAPI.registerOre({
    source:{material: "sapphire", sourceType: "crystal"},
    ore:{
        requiredToolLvl: 4,
        veinSize:{min: 2, max: 3},
        veinsInChunk: 3,
        depthGeneration:{min: 1, max: 17},
        oreDrop: [[ItemID.crystalSapphire, 2, 0]]
    },
    translations:{
        source: {ru: "Сапфировый Кристалл"},
        ore: [{ru: "Сапфировая Руда"}],
        oreBlock: [{ru: "Сапфировый Блок"}]
    },
    overrideNames:{
        itemColor: 1,
        source:{standart: true},
        ore:{standart: true},
        oreBlock:{standart: true}
    }
});

OresAPI.registerTools({
    toolMaterial:{
        material: "sapphire",
        durability: 2000,
        efficiency: 14,
        level: 5,
        damage: 5
    },
    recipes:{primary: ItemID.crystalSapphire},
    translations:{
        sword: {ru: "Сапфировый Меч"},
        pickaxe: {ru: "Сапфировая Кирка"},
        axe: {ru: "Сапфировый Топор"},
        hoe: {ru: "Сапфировая Мотыга"},
        shovel: {ru: "Сапфировая Лопата"}
    },
    overrideNames:{
        standart: true,
        itemsColor: 1
    }
}); 

OresAPI.registerArmor({
    material: "sapphire",
    materialID: "crystalSapphire",
    properties:{
        durability: 2000,
        helmet:{armor: 2},
        chestplate:{armor: 3},
        leggings:{armor: 3},
        boots:{armor: 2}
    },
    translations:{
        helmet: {ru: "Сапфировый Шлем"},
        chestplate: {ru: "Сапфировый Нагрудник"},
        leggings: {ru: "Сапфировые Поножи"},
        boots: {ru: "Сапфировые Ботинки"}
    },
    overrideNames:{
        standart: true,
        itemsColor: 1
    }
});




// file: ores/malachite.js

/*OresAPI.toolRegister({
    material:{
        mi: "ingotMalachite",
        uid: "malachite",
        name: "Malachite",
        color: "a"
    },
    tool:{
        name: "malachite",
        durability: 300,
        damage: 1,
        breakingSpeed: 15,
        enchamentability: 4,
        level: 2
    },
    recipes:{},
    translation:{
        material: "Малахитовый слиток",
        sword: "Малахитовый меч",
        pickaxe: "Малахитовая кирка",
        shovel: "Малахитовая лопата",
        axe: "Малахитовый топор",
        hoe: "Малахитовая мотыга"
    }
});

OresAPI.createCustomOre({
    params:{
        material: "Malachite",
        ToolLevel: 2,
        genChunk: 7,
        randomSize: true,
        genSize: [4, 10],
        min: 1,
        max: 20,
        drop:{},
        color: "a"
    },
    translate: {
        ore: "Малахитовая руда",
        ore_block: "Малахитовый блок"
    }
});

OresAPI.defineArmorSet({
    material: "malachite",
    durability: 600,
    color: "a",
    defense:{
        helmet: 0.5,
        chestplate: 0.5,
        leggings: 0.5,
        boots: 0.5
    },
    craftID: ItemID.ingotMalachite,
    translate:{
        helmet: "Малахитовый шлем",
        chestplate: "Малахитовый нагрудник",
        leggings: "Малахитовые поножи",
        boots: "Малахитовые боты"
    }
});*/

OresAPI.registerOre({
    source:{material: "malachite"},
    ore:{
        requiredToolLevel: 2,
        veinSize: {max: 4},
        veinsInChunk: 17,
        depthGeneration: {min: 1, max: 52}
    },
    translations:{
        source: {ru: "Малахитовый Слиток"},
        ore: [{ru: "Малахитовая Руда"}],
        oreBlock: [{ru: "Малахитовый Блок"}]
    },
    overrideNames:{
        itemColor: "a",
        source: {standart: true},
        ore: {standart: true},
        oreBlock: {standart: true}
    }
})

OresAPI.registerTools({
    toolMaterial:{
        material: "malachite",
        durability: 800,
        efficiency: 17,
        level: 2,
        damage: 1
    },
    recipes: {primary: ItemID.ingotMalachite},
    translations:{
        sword: {ru: "Малахитовый Меч"},
        pickaxe: {ru: "Малахитовая Кирка"},
        shovel: {ru: "Малахитовая Лопата"},
        axe: {ru: "Махалитовый Топор"},
        hoe: {ru: "Малахитовая Мотыга"}
    },
    overrideNames:{
        standart: true,
        itemsColor: "a"
    }
});

OresAPI.registerArmor({
    material: "malachite",
    properties:{
       durability: 800,
        helmet: {armor: 0.5},
        chestplate: {armor: 0.5},
        leggings: {armor: 0.5},
        boots: {armor: 0.5}
    },
    translations:{
        helmet: {ru: "Малахитовый Шлем"},
        chestplate: {ru: "Малахитовый Нагрудник"},
        leggings: {ru: "Малахитовые Поножи"},
        boots: {ru: "Малахитовые Ботинки"}
    },
    overrideNames:{
        standart: true,
        itemsColor: "a"
    }
});












// file: ores/adamantite.js

/*OresAPI.toolRegister({
    material:{
        uid: "adamantite",
        color: "4"
    },
    tool:{
        breakinSpeed: 9,
        level: 5,
        enchamentability: 10,
        damage: 4,
        durability: 3000
    },
    translation:{
        material: "Адамантитовый слиток",
        sword: "Адамантитовый меч",
        pickaxe: "Адамтитовая кирка",
        shovel: "Адамантитовая лопата",
        axe: "Адамантитовый топор",
        hoe: "Адамантитовая мотыга"
    }
});

OresAPI.createCustomOre({
    params:{
        material: "Adamantite",
        ToolLevel: 3,
        genChunk: 3,
        randomSize: true,
        genSize: [1, 5],
        min: 1,
        max: 10,
        drop:{},
        color: 4
    },
    translate:{
        ore: "Адамантитовая руда",
        ore_block: "Адамантитовый блок"
    }
});

OresAPI.defineArmorSet({
    material: "adamantite",
    durability: 4000,
    color: "4",
    defense:{
        helmet: 4,
        chestplate: 7,
        leggings: 4,
        boots: 4
    },
    craftID: ItemID.ingotAdamantite,
    translate:{
        helmet: "Адамантитовый шлем",
        chestplate: "Адамантитовый нагрудник",
        leggings: "Адамантитовые поножи",
        boots: "Адамантитовые боты"
    }
});*/

OresAPI.registerOre({
    source:{material: "adamantite"},
    ore:{
        requiredToolLvl: 3,
        veinSize:{max: 4},
        veinsInChunk: 3,
        depthGeneration:{min: 1, max: 10}
    },
    translations:{
        source: {ru: "Адамантитовый Слиток"},
        ore: [{ru: "Адамантитовая Руда"}],
        oreBlock: [{ru: "Адамантитовый Блок"}]
    },
    overrideNames:{
        itemColor: 4,
        source:{standart: true},
        ore:{standart: true},
        oreBlock:{standart: true}
    }
});

OresAPI.registerTools({
    toolMaterial:{
        material: "adamantite",
        durability: 3000,
        efficiency: 5,
        level: 5,
        damage: 3
    },
    recipes:{primary: ItemID.ingotAdamantite},
    translations:{
        sword: {ru: "Адамантитовый Меч"},
        pickaxe: {ru: "Адамантитовая Кирка"},
        axe: {ru: "Адамантитовый Топор"},
        hoe: {ru: "Адамантитовая Мотыга"},
        shovel: {ru: "Адамантитовая Лопата"}
    },
    overrideNames:{
        standart: true,
        itemsColor: 4
    }
}); 

OresAPI.registerArmor({
    material: "adamantite",
    properties:{
        durability: 3000,
        helmet:{armor: 2},
        chestplate:{armor: 3},
        leggings:{armor: 3},
        boots:{armor: 2}
    },
    translations:{
        helmet: {ru: "Адамантитовый Шлем"},
        chestplate: {ru: "Адамантитовый Нагрудник"},
        leggings: {ru: "Адамантитовые Поножи"},
        boots: {ru: "Адамантитовые Ботинки"}
    },
    overrideNames:{
        standart: true,
        itemsColor: 4
    }
});




// file: ores/lead.js

/*OresAPI.toolRegister({
    material:{
        mi: "ingotLead",
        uid: "lead",
        name: "Lead",
        color: "7"
    },
    tool:{
        name: "lead",
        durability: 900,
        breakingSpeed: 6,
        enchamentability: 4,
        level: 3,
        damage: 2
    },
    recipes:{},
    translation:{
        material: "Свинцовый слиток",
        sword: "Свинцовый меч",
        pickaxe: "Свинцовая кирка",
        shovel: "Свинцовая лопата",
        axe: "Свинцовый топор",
        hoe: "Свинцовая мотыга"
    }
});

OresAPI.createCustomOre({
    params:{
        material: "Lead",
        ToolLevel: 2,
        genChunk: 17,
        randomSize: true,
        genSize: [2, 7],
        min: 1,
        max: 60,
        drop:{},
        color: 7
    },
    translate:{
        ore: "Свинцовая руда",
        ore_block: "Свинцовый блок"
    }
});

OresAPI.defineArmorSet({
    material: "lead",
    durability: 900,
    color: "7",
    defense:{
        helmet: 1,
        chestplate: 2,
        leggings: 1,
        boots: 1
    },
    craftID: ItemID.ingotLead,
    translate:{
        helmet: "Свинцовый шлем",
        chestplate: "Свинцовый нагрудник",
        leggings: "Свинцовые поножи",
        boots: "Свинцовые боты"
    }
});*/

OresAPI.registerOre({
    source:{material: "lead"},
    ore:{
        requiredToolLvl: 2,
        veinSize:{min: 2, max: 7},
        veinsInChunk: 17,
        depthGeneration:{min: 1, max: 60}
    },
    translations:{
        source: {ru: "Свинцовый Слиток"},
        ore: [{ru: "Свинцовая Руда"}],
        oreBlock: [{ru: "Свинцовый Блок"}]
    },
    overrideNames:{
        itemColor: 9,
        source:{standart: true},
        ore:{standart: true},
        oreBlock:{standart: true}
    }
});

OresAPI.registerTools({
    toolMaterial:{
        material: "lead",
        durability: 900,
        efficiency: 7,
        level: 5,
        damage: 3
    },
    recipes:{primary: ItemID.ingotLead},
    translations:{
        sword: {ru: "Свинцовый Меч"},
        pickaxe: {ru: "Свинцовая Кирка"},
        axe: {ru: "Свинцовый Топор"},
        hoe: {ru: "Свинцовая Мотыга"},
        shovel: {ru: "Свинцовая Лопата"}
    },
    overrideNames:{
        standart: true,
        itemsColor: 9
    }
}); 

OresAPI.registerArmor({
    material: "lead",
    properties:{
        durability: 900,
        helmet:{armor: 0.5},
        chestplate:{armor: 1},
        leggings:{armor: 1},
        boots:{armor: 0.5}
    },
    translations:{
        helmet: {ru: "Свинцовый Шлем"},
        chestplate: {ru: "Свинцовый Нагрудник"},
        leggings: {ru: "Свинцовые Поножи"},
        boots: {ru: "Свинцовые Ботинки"}
    },
    overrideNames:{
        standart: true,
        itemsColor: 9
    }
});




// file: ores/uranium.js

/*OresAPI.toolRegister({
    material:{
        mi: "ingotUranium",
        uid: "uranium",
        name: "Uranium",
        color: "a"
    },
    tool:{
        name: "uran",
        durability: 1000,
        breakingSpeed: 10,
        enchamentability: 9,
        level: 4,
        damage: 6
    },
    recipes:{},
    translation:{
        material: "Урановый слиток",
        sword: "Урановый меч",
        pickaxe: "Урановая кирка",
        shovel: "Урановая лопата",
        axe: "Урановый топор",
        hoe: "Урановая мотыга"
    }
});

OresAPI.createCustomOre({
    params:{
        material: "Uranium",
        ToolLevel: 3,
        genChunk: 8,
        randomSize: true,
        genSize: [2, 6],
        min: 30,
        max: 70,
        drop:{},
        color: "a"
    },
    translate:{
        ore: "Урановая руда",
        ore_block: "Урановый блок"
    }
});

OresAPI.defineArmorSet({
    material: "uranium",
    durability: 1000,
    color: "a",
    defense:{
        helmet: 3,
        chestplate: 3,
        leggings: 3,
        boots: 2
    },
    craftID: ItemID.ingotUranium,
    translate:{
        helmet: "Урановый шлем",
        chestplate: "Урановый нагрудник",
        leggings: "Урановые поножи",
        boots: "Урановые боты"
    }
});*/

OresAPI.registerOre({
    source:{material: "uranium"},
    ore:{
        requiredToolLvl: 3,
        veinSize:{max: 4},
        veinsInChunk: 3,
        depthGeneration:{min: 1, max: 10}
    },
    translations:{
        source: {ru: "Ураниумовый Слиток"},
        ore: [{ru: "Ураниумовая Руда"}],
        oreBlock: [{ru: "Ураниумовый Блок"}]
    },
    overrideNames:{
        itemColor: 2,
        source:{standart: true},
        ore:{standart: true},
        oreBlock:{standart: true}
    }
});

OresAPI.registerTools({
    toolMaterial:{
        material: "uranium",
        durability: 1000,
        efficiency: 10,
        level: 5,
        damage: 7
    },
    recipes:{primary: ItemID.ingotUranium},
    translations:{
        sword: {ru: "Ураниумовый Меч"},
        pickaxe: {ru: "Ураниумовая Кирка"},
        axe: {ru: "Ураниумовый Топор"},
        hoe: {ru: "Ураниумовая Мотыга"},
        shovel: {ru: "Ураниумовая Лопата"}
    },
    overrideNames:{
        standart: true,
        itemsColor: 2
    }
}); 

OresAPI.registerArmor({
    material: "uranium",
    properties:{
        durability: 1000,
        helmet:{armor: 1},
        chestplate:{armor: 2},
        leggings:{armor: 2},
        boots:{armor: 1}
    },
    translations:{
        helmet: {ru: "Ураниумовый Шлем"},
        chestplate: {ru: "Ураниумовый Нагрудник"},
        leggings: {ru: "Ураниумовые Поножи"},
        boots: {ru: "Ураниумовые Ботинки"}
    },
    overrideNames:{
        standart: true,
        itemsColor: 2
    }
});




// file: items/matter.js

OresAPI.registerItem("Oresmatter", "Matter", {name: "mattery"}, {ru: "Материя"}, {}, [defaultItemNameOverride("e", "item"), false]);
OresAPI.registerItem("rebuiltMatter", "Rebuilt Matter", {name: "mattery", data: 1}, {ru: "Реконструированная Материя"}, {stack: 1, isTech: true, glint: true}, [{
    colorName: "5",
    prefix:{
        standart: true,
        itemType: "item"
    },
    other:function(item, name){
        if(item.extra){
            return "§7item: "+ Translation.translate(Item.getName(item.extra.getInt("id")))/*+ " data: "+ item.extra.getInt("data")*/;
        }
    }
}, true]);




// file: items/chips.js

OresAPI.registerItem("researchChip", "Research Chip", {name: "researchChip"}, {ru: "Исследовательская Микросхема"}, {}, [defaultItemNameOverride("a", "item"), false]);
OresAPI.registerItem("burntChip", "Burnt Chip", {name: "burntChip"}, {ru: "Прожжённая Микросхема"}, {isTech: true}, [defaultItemNameOverride("c", "item"), false]);
OresAPI.registerItem("splitterChip", 'Chip "Quantum Splitter"', {name: "splitter"}, {ru: "Микросхема \"Квантовый Расщипитель\""}, {}, [defaultItemNameOverride(5, "item"), false]);
OresAPI.registerItem("quantomDetectorChip", 'Chip "Quantom Detector"', {name: "detector"}, {ru: 'Микросхема "Квантовый Детектор"'}, {}, [defaultItemNameOverride(4, "item"), false]);
OresAPI.registerItem("densityControllerChip", 'Chip "Density Controller"', {name: "densityTransformer"}, {ru: "Микросхема \"Контроллер Плотности\""}, {}, [defaultItemNameOverride(3, "item"), false]);
OresAPI.registerItem("matteryDrive", "Drive Quantum Energy", {name: "drive"}, {ru: "Накопитель Квантовой Энергии"}, {}, [defaultItemNameOverride(1, "item"), false]);

Callback.addCallback("PostLoaded", function(){
    OresAPI.addShapedRecipe([ItemID.researchChip, 4, 0], ["trt", "rsr", "trt"], ["t", ItemID.ingotLead, -1, "r", 331, 0, "s", 265, 0]);
});




// file: items/book.js

OresAPI.registerItem("oresModGuideBook", "Guide Book", {name: "guide"}, {ru: "Книга-руководитель"}, {stack: 1}, [{
    colorName: "b",
    prefix:{standart:true, itemType: "item"},
    other:function(){
        return (GuideAPI)?"":"§8Нужен GuideAPI!";
    }
}, false]);




// file: machines/solar/api.js

var SolarPanel = {
    machine:function(id, type){  
        const conf = type+"_solar_panel.";
        MachineRegistry.registerGenerator(BlockID["solarPanel"+id], {
            created: function(){
                let x = this.x, y = this.y+1, z = this.z;
                while(opacityBlocks.indexOf(World.getBlockID(x, y, z)) > -1 && y < 256){
                    y++;
                }
                if(y > 255){
                    this.data.isActive = true;
                }
                this.data.lastY = y;
            },
            checkSky: function(){
                let y = this.data.lastY;
                if(opacityBlocks.indexOf(World.getBlockID(this.x, y, this.z)) == -1){
                    this.data.isActive = false;
                }else{
                    if(y >= 255){
                        this.data.isActive = true;
                        this.data.lastY = this.y;
                    }
                    this.data.lastY++;
                }
                return this.data.isActive;
            },
            getValue: OresAPI.getConfigValue,
            getGuiScreen:function(){return gui[type]},
            getEnergyStorage:function(){return this.getValue(conf+"storage")},
            tick:function(){
                //try {
                this.container.setText("energyText", parseInt(this.data.energy)+"");
                this.container.setScale("energyScale", this.data.energy/this.getEnergyStorage());
                
                this.data.energy -= ChargeItemRegistry.addEnergyTo(this.container.getSlot("slot1"), "Eu", this.data.energy, this.getValue(conf+"output"), this.getValue(conf+"tier"));
                this.data.energy -= ChargeItemRegistry.addEnergyTo(this.container.getSlot("slot2"), "Eu", this.data.energy, this.getValue(conf+"output"), this.getValue(conf+"tier"));
                this.data.energy -= ChargeItemRegistry.addEnergyTo(this.container.getSlot("slot3"), "Eu", this.data.energy, this.getValue(conf+"output"), this.getValue(conf+"tier"));
                this.data.energy -= ChargeItemRegistry.addEnergyTo(this.container.getSlot("slot4"), "Eu", this.data.energy, this.getValue(conf+"output"), this.getValue(conf+"tier"));
                this.data.energy -= ChargeItemRegistry.addEnergyTo(this.container.getSlot("slot5"), "Eu", this.data.energy, this.getValue(conf+"output"), this.getValue(conf+"tier"));
                
                if(this.getEnergyStorage() > this.data.energy&&this.checkSky()){
                     let time = World.getWorldTime()%24000;
                     if((time >= 23500 || time < 12550) && (!World.getWeather().rain || World.getLightLevel(this.x, this.y+1, this.z) > 14)){
                        this.data.energy = Math.min(this.getEnergyStorage(), this.data.energy+this.getValue(conf+"gen_day"));
                     }else if(this.getValue(conf+"gen_night") > 0){
                        this.data.energy = Math.min(this.getEnergyStorage(), this.data.energy+this.getValue(conf+"gen_night"));
                     }
                }
                /*}catch(e){
                    Debug.error(e);
                    Logger.Log(e);
                }*/
            },
            canExtractEnergy:function(side){
                return side == 0
            },
            energyTick:function(type, src){
                //try{
                var output = Math.min(this.getValue(conf+"output"), this.data.energy);
                this.data.energy += src.add(output) - output;
                /*}catch(e){
                    Debug.error(e);
                    Logger.Log("energyTick: "+e)
                }*/
            }
        });
        ICRender.getGroup("ic-wire").add(BlockID["solarPanel"+id], -1);
        EnergyTileRegistry.addEnergyTypeForId(BlockID["solarPanel"+id], EU);
    },
    window:function(p){
        GUI.createObject(p[0]);
        GUI.editStyles({
            slot: p[1][0],
            invSlot: p[1][0],
            selection: p[1][1],
            background: p[1][2]
        });
        GUI.addDrawableObject.bitmap(p[2], {x: 560, y: 200}, 3.6);
        GUI.addElement.scale("energyScale", {x: 560+3.6*4, y: 200}, 0, p[3], 3.6);
        for(var i = 1; i <= 5; i++){
            GUI.addElement.slot("slot"+i, {x: 463+(50*i), y: 273});
        }
        GUI.addElement.text("energyText", {x: 570, y: 168}, 1, 1, "0", {color: p[4]});
        return GUI.importScreen();
    },
    shape:function(id, q, w, e){
        var render = new ICRender.Model();
        BlockRenderer.setStaticICRender(id, -1, render);
        var model = BlockRenderer.createModel();
        model.addBox(1, 0, 1, 0, 0.1, 0, q, 0);
        model.addBox(0.4, 0.1, 0.4, 0.6, 0.6, 0.6, q, 0);
        model.addBox(0.6, 0.1, 0.3, 0.7, 0.6, 0.4, w, 0);
        model.addBox(0.6, 0.1, 0.6, 0.7, 0.6, 0.7, w, 0);
        model.addBox(0.3, 0.1, 0.3, 0.4, 0.6, 0.4, w, 0);
        model.addBox(0.3, 0.1, 0.6, 0.4, 0.6, 0.7, w, 0);
        model.addBox(1, 0.6, 1, 0, 0.8, 0, [[q, 0], [e, 0], [q, 0], [q, 0], [q, 0], [q, 0], [q, 0]]);
        render.addEntry(model);
        //ICRender.getGroup("ic-wire").add(id, 0);
    }
}




// file: machines/solar/components/another.js

OresAPI.registerItem("shardLapis", "Lapis Shard", {name: "lapisShard"}, {ru: "Лазуритовый осколок"}, {}, [defaultItemNameOverride(1, "item"), false]);
OresAPI.registerItem("nuggetIron", "Iron Nugget", {name: "nugget", data: 4}, {ru: "Железный Самородок"}, {}, [defaultItemNameOverride("f", "item"), false]);
OresAPI.registerItem("cellPhotovailtaic", "Photovailtaic Cell", {name: "cell"}, {ru: "Фотоэллектрический Провод"}, {}, [defaultItemNameOverride(1, "item"), false]);

Callback.addCallback("PostLoaded", function(){
  OresAPI.addShapedRecipe([ItemID.shardLapis, 9, 0], ["ooo", "olo", "ooo"], ["l", 351, 4]);
  OresAPI.addShapedRecipe([351, 1, 4], ["nnn", "nnn", "nnn"], ["n", ItemID.shardLapis, -1]);
  OresAPI.addShapedRecipe([ItemID.nuggetIron, 9, 0], ["ooo", "oio", "ooo"], ["i", 265, 0]);
  OresAPI.addShapedRecipe([265, 1, 0], ["nnn", "nnn", "nnn"], ["n", ItemID.nuggetIron, -1]);
  OresAPI.addShapedRecipe([ItemID.cellPhotovailtaic, 1, 0], ["ggg", "lll", "iii"], ["g", 102, 0, "l", ItemID.shardLapis, -1, "n", ItemID.nuggetIron,  -1]);
  
  OresAPI.addShapedRecipe([265, 1, 0], ["aaa", "aaa", "aaa"], ["a", ItemID.nuggetIron, -1]);
});




// file: machines/solar/components/nuggets.js

Callback.addCallback("PostLoaded", function(){
    OresAPI.addShapedRecipe([ItemID.nuggetLead, 9, 0], ["ooo", "oao", "ooo"], ["a", ItemID.ingotLead, -1]);
    OresAPI.addShapedRecipe([ItemID.nuggetElectrum, 1, 0], ["ogo", "rsr", "ogo"], ["s", ItemID.nuggetLead, -1, "r", 331, 0, "g", 371, 0]);
    OresAPI.addShapedRecipe([ItemID.nuggetUranium, 9, 0], ["ogo", "gug", "ogo"], ["g", 348, 0, "u", ItemID.ingotUranium, -1]);
    OresAPI.addShapedRecipe([ItemID.nuggetMistery, 1, 0], ["oeo", "dsd", "oeo"], ["o", 49, 0, "d", 264, 0, "s", ItemID.crystalSapphire, -1, "e", ItemID.nuggetElectrum, -1]);
    
    OresAPI.addShapedRecipe([ItemID.ingotLead, 1, 0], ["aaa", "aaa", "aaa"], ["a", ItemID.nuggetLead, -1]);
    OresAPI.addShapedRecipe([ItemID.ingotUranium, 1, 0], ["aaa", "aaa", "aaa"], ["a", ItemID.nuggetUranium, -1]);
});

OresAPI.registerItem("nuggetLead", "Lead Nugget", {name: "nugget", data: 0}, {ru: "Свинцовый Самородок"}, {}, [defaultItemNameOverride(8, "item")]);

OresAPI.registerItem("nuggetElectrum", "Electrum Nugget", {name: "nugget", data: 1}, {ru: "Электроумовый Самородок"}, {}, ["e", "item"]);

OresAPI.registerItem("nuggetUranium", "Uranium Nugget", {name: "nugget", data: 2}, {ru: "Ураниумовый Самородок"}, {}, [defaultItemNameOverride("a", "item")]);

OresAPI.registerItem("nuggetMistery", "Mistery Nugget", {name: "nugget", data: 3}, {ru:  "Загадочный Самородок"}, {}, [defaultItemNameOverride(5, "item")]);




// file: machines/solar/components/cores.js

Callback.addCallback("PostLoaded", function(){
  OresAPI.addShapedRecipe([ItemID.solarCoreLeadstone, 1, 0], ["ono", "nin", "ono"], ["i", 265, 0, "n", ItemID.nuggetLead, -1]);
  OresAPI.addShapedRecipe([ItemID.solarCoreHardent, 1, 0], ["ono", "ncn", "ono"], ["c", ItemID.solarCoreLeadstone, 0, "n", ItemID.nuggetLead, 0]);
  OresAPI.addShapedRecipe([ItemID.solarCoreRedstone, 1, 0], ["ono", "ncn", "ono"], ["c", ItemID.solarCoreHardent, -1, "n", ItemID.nuggetElectrum, -1]);
  OresAPI.addShapedRecipe([ItemID.solarCoreResonant, 1, 0], ["olo", "lcl", "olo"], ["c", ItemID.solarCoreResonant, -1, "n", 351, 4]);
  OresAPI.addShapedRecipe([ItemID.solarCoreAdvanced, 1, 0], ["olo", "lcl", "olo"], ["c", ItemID.solarCoreResonant, -1, "n", 351, 4]);
  OresAPI.addShapedRecipe([ItemID.solarCoreUltimate, 1, 0], ["ono", "ncn", "ono"], ["c", ItemID.solarCoreAdvanced, -1, "n", ItemID.nuggetMistery, -1]);
});

OresAPI.registerItem("solarCoreLeadstone", "Leadstone Solar Core", {name: "core", data: 0}, {ru: "Свинцовое Солнечное Ядро"}, {}, [defaultItemNameOverride(8, "item"), false]);
OresAPI.registerItem("solarCoreHardent", "Hardend Solar Core", {name: "core", data: 1}, {ru: "Закалённое Солнечное Ядро"}, {}, [defaultItemNameOverride(7, "item"), false]);
OresAPI.registerItem("solarCoreRedstone", "Redstone Solar Core", {name: "core", data: 2}, {ru: "Краснокаменное Солнечное Ядро"}, {}, [defaultItemNameOverride("e", "item"), false]);
OresAPI.registerItem("solarCoreResonant", "Resonant Solar Core", {name: "core", data: 3}, {ru: "Резонирующее Солнечное Ядро"}, {}, [defaultItemNameOverride(2, "item"), false]);
OresAPI.registerItem("solarCoreAdvanced", "Advanced Solar Core", {name: "core", data: 4}, {ru: "Продвинутое Солнечное Ядро"}, {}, [defaultItemNameOverride(1, "item"), false]);
OresAPI.registerItem("solarCoreUltimate", "Ultimate Solar Core", {name: "core", data: 5}, {ru: "Идеальное Солнечное Ядро"}, {}, [defaultItemNameOverride(5, "item"), false]);




// file: machines/solar/panels.js

OresAPI.registerBlock("solarPanelLeadstone", false, [
    {name: "Leadstone Sоlar Panel", texture:[["leadstone", 0], ["Ltop", 0], ["leadstone", 0], ["leadstone", 0], ["leadstone", 0], ["leadstone", 0]], inCreative: true}
], false, [{ru: "Свинцовая Солнечная Панель"}], energyNameOverride(8, "machine",OresAPI.getConfigValue("leadstone_solar_panel.output"), 1), "stone", 1);
OresAPI.registerBlock("solarPanelHardent", false, [
    {name: "Hardent Sоlar Panel", texture:[["hardent", 0], ["Htop", 0], ["hardent", 0], ["hardent", 0], ["hardent", 0], ["hardent", 0]], inCreative: true}
], false, [{ru: "Закалённая Солнечная Панель"}], energyNameOverride(7, "machine", OresAPI.getConfigValue("hardent_solar_panel.output"), 1), "stone", 1);
OresAPI.registerBlock("solarPanelRedstone", false, [
    {name: "Redstone Sоlar Panel", texture:[["redstone", 0], ["RDtop", 0], ["redstone", 0], ["redstone", 0], ["redstone", 0], ["redstone", 0]], inCreative: true}
], false, [{ru: "Краснокаменная Солнечная Панель"}], energyNameOverride("e", "machine", OresAPI.getConfigValue("redstone_solar_panel.output"), 1), "stone", 1);
OresAPI.registerBlock("solarPanelResonant", false, [
    {name: "Resonant Sоlar Panel", texture: [["resonant", 0], ["RStop", 0], ["resonant", 0], ["resonant", 0], ["resonant", 0], ["resonant", 0]], inCreative: true}
], false, [{ru: "Резонирующая Солнечная Панель"}], energyNameOverride(2, "machine", OresAPI.getConfigValue("resonant_solar_panel.output"), 1), "stone", 1);
OresAPI.registerBlock("solarPanelAdvanced", false, [
    {name: "Advanced Sоlar Panel", texture:[["advanced", 0], ["Atop", 0], ["advanced", 0], ["advanced", 0], ["advanced", 0], ["advanced", 0]], inCreative: true}
], false, [{ru: "Продвинутая Солнечная Панель"}], energyNameOverride(1, "machine", OresAPI.getConfigValue("advanced_solar_panel.output"), 1), "stone", 1);
OresAPI.registerBlock("solarPanelUltimate", false, [
    {name: "Ultimate Sоlar Panel", texture:[["ultimate", 0], ["Utop", 0], ["ultimate", 0], ["ultimate", 0], ["ultimate", 0], ["ultimate", 0]], inCreative: true}
], false, [{ru: "Совершенная Солнечная Панель"}], energyNameOverride(5, "machine", OresAPI.getConfigValue("ultimate_solar_panel.output"), 1), "stone", 1);

Callback.addCallback("PostLoaded", function(){
  Recipes.addShaped({id: BlockID.solarPanelLeadstone, count: 1, data: 0}, ["lll", "rcr", "nnn"], ["l", ItemID.cellPhotovailtaic, -1, "r", ItemID.ingotLead, -1, "c", ItemID.solarCoreLeadstone, -1, "n", ItemID.nuggetIron, -1]);
  Recipes.addShaped({id: BlockID.solarPanelHardent, count: 1, data: 0}, ["rlr", "cpc", "nrn"], ["p", BlockID.solarPanelLeadstone, -1, "c", ItemID.solarCoreHardent, -1, "r", ItemID.ingotLead, -1, "l", ItemID.cellPhotovailtaic, -1, "n", ItemID.nuggetLead, -1]);
  Recipes.addShaped({id: BlockID.solarPanelRedstone, count: 1, data: 0}, ["rlr", "cpc", "nnn"], ["p", BlockID.solarPanelHardent, -1, "c", ItemID.solarCoreRedstone, -1, "l", ItemID.cellPhotovailtaic, -1, "r", 266, 0, "n", ItemID.nuggetElectrum, -1]);
  Recipes.addShaped({id: BlockID.solarPanelResonant, count: 1, data: 0}, ["rlr", "cpc", "rrr"], ["p", BlockID.solarPanelRedstone, -1, "c", ItemID.solarCoreResonant, -1, "r", 351, 4, "l", ItemID.cellPhotovailtaic, -1]);
  Recipes.addShaped({id: BlockID.solarPanelAdvanced, count: 1, data: 0}, ["rlr", "cpc", "sss"], ["p", BlockID.solarPanelResonant, -1, "c", ItemID.solarCoreAdvanced, -1, "r", 266, 0, "l", ItemID.cellPhotovailtaic, -1, "s", ItemID.crystalSapphire, -1]);
  Recipes.addShaped({id: BlockID.solarPanelUltimate, count: 1, data: 0}, ["rlr", "cpc", "rcr"], ["p", BlockID.solarPanelAdvanced, -1, "c", ItemID.solarCoreUltimate, -1, "r", ItemID.nuggetMistery, -1, "l", ItemID.cellPhotovailtaic, -1]);
});

Callback.addCallback("DestroyBlockStart", function(coords, block, player){
    const blocks = [BlockID.solarPanelLeadstone, BlockID.solarPanelHardent, BlockID.solarPanelRedstone, BlockID.solarPanelResonant, BlockID.solarPanelAdvanced, BlockID.solarPanelUltimate]
    if(blocks.indexOf(block.id) > -1){
        World.destroyBlock(coords.x, coords.y, coords.z, true);
    }
});




// file: machines/solar/shape.js

SolarPanel.shape(BlockID.solarPanelLeadstone, "leadstone", "coal_block", "Ltop");
SolarPanel.shape(BlockID.solarPanelHardent, "hardent", "iron_block", "Htop");
SolarPanel.shape(BlockID.solarPanelRedstone, "redstone", "gold_block", "RDtop");
SolarPanel.shape(BlockID.solarPanelResonant, "resonant", "uranium_block", "RStop");
SolarPanel.shape(BlockID.solarPanelAdvanced, "advanced", "SB", "Atop");
SolarPanel.shape(BlockID.solarPanelUltimate, "ultimate", "obsidian", "Utop");




// file: machines/solar/gui.js

gui.leadstone = SolarPanel.window([Translation.translate("Leadstone Solar Panel"), ["lslot", "lsslot", [119, 136, 153]], "lbg", "ls", UIColor.parseColor("#D2B48C")]);
gui.hardent = SolarPanel.window([Translation.translate("Hardent Solar Panel"), ["hslot", "hsslot", [105, 105, 105]], "hsbg", "hs", UIColor.parseColor("#D2B48C")]);
gui.redstone = SolarPanel.window([Translation.translate("Redstone Solar Panel"), ["rdslot", "rdsslot", [189, 183, 107]], "rdsbg", "rds", UIColor.parseColor("#800000")]);
gui.resonant = SolarPanel.window([Translation.translate("Resonant Solar Panel"), ["rsslot", "rssslot", [85, 107, 47]], "rssbg", "rss", UIColor.parseColor("#006400")]);
gui.advanced = SolarPanel.window([Translation.translate("Advanced Solar Panel"), ["aslot", "asslot", [65, 105, 225]], "asbg", "as", UIColor.parseColor("#00BFFF")]);
gui.ultimate = SolarPanel.window([Translation.translate("Ultimate Solar Panel"), ["uslot", "usslot", [148, 0, 211]], "usbg", "us", UIColor.parseColor("#4B0082")]);




// file: machines/solar/machine.js

SolarPanel.machine("Hardent", "hardent");
SolarPanel.machine("Leadstone", "leadstone");
SolarPanel.machine("Redstone", "redstone");
SolarPanel.machine("Resonant", "resonant");
SolarPanel.machine("Advanced", "advanced");
SolarPanel.machine("Ultimate", "ultimate");




// file: machines/woodIncubator/incubator.js

var WoodIncubatorRecipes = {
    data:{},
    sapling:{},
    registerSpecialDrop:function(id, count, data, result){
        WoodIncubatorRecipes.data[id+":"+data] = {id: result.id, data: result.data, count:{standart: count.standart, withEngine: count.withEngine}};
    },
    getSpecialDrop:function(id, data){
        if(WoodIncubatorRecipes.data[id+":"+data]){
            return WoodIncubatorRecipes.data[id+":"+data];
        }
        return false
    }, 
    getDropCount:function(id, data, bool){
        const p = WoodIncubatorRecipes.data[id+":"+data].count;
        if(bool){
            return random(p.withEngine[0], p.withEngine[1]);
        }else{
            return random(p.standart[0], p.standart[1]);
        }
    },
    registerSapling:function(a, b){
        WoodIncubatorRecipes.sapling[a.id+":"+a.data] = b;
    },
    getSapling:function(id, data){
        return WoodIncubatorRecipes.sapling[id+":"+data] || {id: 6, data: 0}
    }
}

/*OresAPI.block("woodIncubator");

Block.createBlockWithRotation("woodIncubator", [{
    name: "Wood Incubator",
    texture: [["woodBot", 0], ["woodTop", 0], ["MBot", 0], ["woodFront", 0], ["MBot", 0], ["woodSide", 0]],
    inCreative: true
}], "opaque");

OresAPI.override.block(BlockID.woodIncubator, new energyNameOverride(6, "machine", 2));*/

OresAPI.registerBlock("woodIncubator", true, [
    {name: "Wood Incubator", texture: [["woodBot", 0], ["woodTop", 0], ["MBot", 0], ["woodFront", 0], ["MBot", 0], ["woodSide", 0]], inCreative: true}
], "opaque", [{ru: "Древесный Инкубатор"}], energyNameOverride(6, "machine", 2));

Callback.addCallback("PostLoaded", function(){
    OresAPI.addShapedRecipe([BlockID.woodIncubator, 1, 0], ["tdt", "rgr", "ttt"], ["t", BlockID.blockLead, -1, "d", 3, 0, "g", 266, 0, "r", 331, 0]);
});

Callback.addCallback("PostLoaded", function(){
    MachineRecipeRegistry.registerRecipesFor("woodIncubator", {
        "6:0":{id: 17, count: 20, data: 0},
        "6:1":{id: 17, count: 20, data: 1},
        "6:2":{id: 17, count: 20, data: 2},
        "6:3":{id: 17, count: 20, data: 3},
        "6:4":{id: 17, count: 20, data: 4},
        "6:5":{id: 17, count: 20, data: 5}
    });
    for(var i = 0; i <= 5; i++){
        WoodIncubatorRecipes.registerSapling({id: 6, data: i}, {id: 6, data: i});
    }
    WoodIncubatorRecipes.registerSpecialDrop(6, {standart: [1, 2], withEngine:[3, 6]}, 0, {id: 260, data: 0});
});
ModAPI.addAPICallback("ICore", function(){
    Callback.addCallback("PostLoaded", function(){
        MachineRecipeRegistry.addRecipeFor("woodIncubator", ItemID.rubberSapling, {id: BlockID.rubberTreeLog, count: 20, data: 0});
        WoodIncubatorRecipes.registerSpecialDrop(ItemID.rubberSapling, {standart: [2, 5], withEngine: [10, 15]}, 0, {id: ItemID.latex, data: 0});
    });
});




// file: machines/woodIncubator/gui.js

GUI.createObject(Translation.translate("Wood incubator"));

GUI.addDrawableObject.bitmap("red_scale", {x: 564, y: 154}, 4.2);
GUI.addDrawableObject.bitmap("energy_scale_bg", {x: 563, y: 112}, 3.2);
GUI.addElement.scale("processScale", {x: 564, y: 154}, 0, "green_scale",4.2);
GUI.addElement.scale("energyScale", {x: 563, y: 112}, 1, "energy_scale", 3.2);
GUI.addElement.slot("materialSlot", {x: 500, y: 137}, 50);
GUI.addElement.slot("engineSlot", {x: 500, y: 187}, 50);
GUI.addElement.slot("inputSlot", {x: 723, y: 164}, 50);
GUI.addElement.slot("saplingSlot", {x: 723, y: 114}, 50);
GUI.addElement.slot("specialSlot", {x: 723, y: 214}, 50);

gui.woodIncubator = GUI.importScreen();






// file: machines/woodIncubator/machine.js

MachineRegistry.registerElectricMachine(BlockID.woodIncubator, {
    defaultValues:{
        bd: null,
        active: false,
        block: false,
        blockCoords: null,
        sourceData: null,
        work_time: 12000,
        Sapling: null,
        boost: false,
        wood: [4, 20],
        sapling: [0, 1],
        consumption: 3
    },
    getGuiScreen:function(){
        return gui.woodIncubator
    },
    getTier:function(){
        return 2
    },
    getEnergyStorage:function(){
        return 36000
    },
    tick:function(){
        this.updateData();
        if(this.data.block){
            if(this.checkBlock()){
                if(this.processCondition()){
                    if(!this.data.active){
                        this.startProcessing();
                    }else{
                        if(this.data.energy >= this.data.consumption){
                            if(this.checkSapling()) this.data.progress += 1/this.data.work_time;
                        }
                    }
                    if(this.engine.id == 351&&this.engine.data == 15){
                        if(!this.data.boost) this.boostValues();
                    }else if(this.data.boost){
                        this.returnValues();
                    }
                    if(this.data.progress >= 1){
                        const c = this.data.blockCoords;
                        var special = WoodIncubatorRecipes.getSpecialDrop(this.data.sourceData[0], this.data.sourceData[1]);
                        this.resultSlot.id = this.result.id;
                        this.resultSlot.data = this.result.data;
                        this.resultSlot.count += random(this.data.wood[0], this.data.wood[1]);
                        this.sapling.id = this.data.sourceData[0];
                        this.sapling.data = this.data.sourceData[1];
                        this.sapling.count += random(this.data.sapling[0], this.data.sapling[1]);
                        this.container.validateSlot("saplingSlot");
                        if(special){
                            var count = WoodIncubatorRecipes.getDropCount(this.data.sourceData[0], this.data.sourceData[1], this.data.boost)
                            if(this.special.id == special.id&&this.special.data == special.data||this.special.id == 0){
                                this.special.id = special.id;
                                this.special.count += count;
                                this.special.data = special.data;        
                            }else{
                                World.drop(c[0], c[1]+1, c[2], special.id, count, special.data);
                            }
                        }
                        if(this.data.boost){
                            this.engine.count--;
                            this.container.validateSlot("engineSlot");
                            this.data.boost = false;
                        }
                        this.data.progress = 0;
                        this.data.active = false;
                        World.setBlock(c[0], c[1]+1, c[2], 0);
                    }
                }
            }
        }else{
            this.searchBlock();
        }
    },
    canReceiveEnergy:function(side){
        return side == RelativeAPI.getRelativeSide(World.getBlock(this.x, this.y, this.z).data, 1);
    },
    searchBlock:function(){
        if(!this.data.blockCoords){
            //const data = World.getBlock(this.x, this.y, this.z);   
            this.data.blockCoords = RelativeAPI.getRelativeCoordsArray({x: this.x, y: this.y, z: this.z}, 3);  
        }
        c = this.data.blockCoords;
        if([2, 3].indexOf(World.getBlockID(c[0], c[1], c[2])) > -1){
            this.data.block = true;
            //Debug.message("зачекал!");
        }
    },
    checkBlock:function(){
        if(Math.random() < 0.03){
            const c = this.data.blockCoords;
            b = World.getBlockID(c[0], c[1], c[2]);
            if([2, 3].indexOf(b) > -1){
                return true
            }else{
                this.data.blockCoords = this.data.block = this.data.active = false;
                this.data.progress = 0;
                //Debug.error("проебал");
            }
        }
    },
    updateData:function(){
        this.source =  this.container.getSlot("materialSlot");
        this.engine = this.container.getSlot("engineSlot");
        this.resultSlot = this.container.getSlot("inputSlot");
        this.sapling = this.container.getSlot("saplingSlot");
        this.special = this.container.getSlot("specialSlot");
        if(!this.data.active)this.result = MachineRecipeRegistry.getRecipeResult("woodIncubator", this.source.id, this.source.data);
        else this.result = MachineRecipeRegistry.getRecipeResult("woodIncubator", this.data.sourceData[0], this.data.sourceData[1]);
        this.container.setScale("processScale", this.data.progress);
        this.container.setScale("energyScale", this.data.energy/this.getEnergyStorage());
    },
    processCondition:function(){
         if((this.result&&(this.result.id == this.resultSlot.id&&this.result.data == this.resultSlot.data||this.resultSlot.id == 0))||this.data.active) return true
    },
    startProcessing:function(){
        const c = this.data.blockCoords, data = this.source.data;
        const block = WoodIncubatorRecipes.getSapling(this.source.id, data);
        NativeAPI.setTileUpdateAllowed(false);
        World.setBlock(c[0], c[1]+1, c[2], block.id, block.data);
        NativeAPI.setTileUpdateAllowed(true);
        const blockId = World.getBlockID(c[0], c[1], c[2]);
        World.setBlock(c[0], c[1], c[2], blockId, 0);
        this.data.Sapling = block.id;
        this.data.sourceData = [this.source.id, data];
        this.source.count--;
        this.container.validateSlot("materialSlot");
        this.data.active = true;
        //Debug.message("стартануло");
        this.data.progress += 1/this.data.work_time;
    },
    checkSapling:function(){
        const c = this.data.blockCoords;
        const b = World.getBlock(c[0], c[1]+1, c[2]);
        if(b.id == this.data.Sapling) return true
        //Debug.warning("пиздец");
        this.data.progress = 0;
        this.data.active = false;
        return false
    },
    boostValues:function(){
        this.data.work_time = 6000;
        this.data.wood = [30, 60];
        this.data.sapling = [1, 3];
        this.data.consumption = 5;
        this.data.boost = true;
        //Debug.message("забустил!");
    } ,
    returnValues:function(){
        this.data.work_time = 12000;
        this.data.wood = [4, 20];
        this.data.sapling = [0, 1];
        this.data.consumption = 3;
        //Debug.message("буст нахуй");
        this.data.boost = false;
    }
});
ICRender.getGroup("ic-wire").add(BlockID.woodIncubator, -1);
EnergyTileRegistry.addEnergyTypeForId(BlockID.woodIncubator, EU);




// file: machines/molecularGenerator/generator.js

OresAPI.registerBlock("molecularGenerator", true, [
    {
        name: "Molecular Generator", 
        texture: [["MBot", 0], ["sealantTop", 0], ["MBot", 0], ["MGfront", 0], ["MBot", 0], ["MBot", 0]], 
        inCreative: true
    }
], "opaque", [{ru: "Молекулярный Генератор"}], energyNameOverride(null, "machine§f", 2));

Callback.addCallback("PostLoaded", function(){
    OresAPI.addShapedRecipe([BlockID.molecularGenerator, 1, 0], ["tdt", "rcr", "tst"], ["t", BlockID.blockLead, -1, "d", ItemID.matteryDrive, 0, "r", 331, 0, "c", ItemID.splitterChip, 0, "s", ItemID.crystalSapphire, -1]);
});

var itemsPrice = {
    commonGroup:{items:[1, 2, 3, 4, 5, 6, 12, 18, 21, 33, 37, 38, 39, 40, 44, 45, 47, 50, 61, 65, 66, 67, 69, 70, 72, 77, 79, 80, 96, 261, 262, 263, 268, 269, 270, 271, 287, 288, ItemID.ingotMalachite, ItemID.ingotMuthril], price:[30, 70]},
    uncommonGroup:{items:[14, 15, 16, 17, 20, 22, 23, 24, 27, 28, 29, 35, 48, 54, 73, 76, 81, 82, 85, 86, 87, 93, 98, 99, 100, 101, 102, 123, 256, 257, 258, 259, 260, 267, ItemID.ingotLead, BlockID.blockMalachite, BlockID.blockMuthril], price:[50, 70]},
    rateGroup:{items:[19, 25, 41, 42, 46, 52, 56, 88, 89, 91, 121, 265, 266, 283, 284, 285, 286, 298, 299, 300, 301, BlockID.blockLead], price:[80, 100]},
    insaneGroup:{items:[49, 57, 120, 129, 130, 133, 264, 276, 277, 278, 279, 289, 302, 303, 304, 305, 306, 307, 308, 309, 310, 311, 312, 313, 314, 315, 316, 317, ItemID.burntChip, ItemID.ingotAdamantite, ItemID.ingotUranium, ItemID.crystalSapphire], price:[135, 245]},
    ultimateGroup:{items:[122, 116, 138, BlockID.blockAdamantite, BlockID.blockUranium, BlockID.blockSapphire], price:[500, 800]}
}

ModAPI.addAPICallback("ICore", function(){
    itemsPrice.commonGroup.items.push(ItemID.coil);
    itemsPrice.uncommonGroup.items.push(BlockID.machineBlockBasic, ItemID.circuitBasic, ItemID.electricMotor, ItemID.powerUnit, ItemID.powerUnitSmall);
    itemsPrice.insaneGroup.items.push(BlockID.machineBlockAdvanced, ItemID.upgradeOverclocker, ItemID.upgradeTransformer, ItemID.upgradeEnergyStorage, ItemID.upgradeRedstone, ItemID.upgradeEjector, ItemID.upgradePulling, ItemID.upgradeFluidEjector, ItemID.upgradeFluidPulling);
    itemsPrice.rateGroup.items.push(BlockID.reinforcedStone, BlockID.reinforcedGlass, ItemID.circuitAdvanced, ItemID.storageBattery, ItemID.storageAdvBattery, ItemID.storageCrystal, ItemID.storageLapotronCrystal);
    itemsPrice.ultimateGroup.items.push(ItemID.iridiumChunk, ItemID.plateReinforcedIridium);
});




// file: machines/molecularGenerator/gui.js

let slotCount = 1;

GUI.createObject(Translation.translate("Molecular Generator"));
GUI.addDrawableObject.bitmap("moleuclar_background", {x: 543, y: 240}, 3.2);
GUI.addElement.scale("molecularScale", {x: 543+3.2*4, y: 240}, 0, "molecularScale", 3.2);
GUI.addElement.text("molecularText", {x: 543, y: 291}, 1, 1, "0/10000 Me", {color: android.graphics.Color.parseColor("#00FFFF"), shadow: 0.6});
for(var w = 0; w < 3; w++){
    for(var i = 1; i < 11; i++){
        GUI.addElement.slot("slot"+slotCount, {x: 300+(60*i), y: 1+(60*(w+1))}, 55);
        slotCount++;
    }
}
if(TIPS){
    GUI.addDrawableObject.frame({x: 336, y: 383}, "classic_frame_input", 630, 100, 3.6);
    GUI.addDrawableObject.text("__DEBUG console__", {x: ((630+336)/2)+70, y: 400}, {size: 14, color: UIColor.WHITE});
    GUI.addDrawableObject.text("Состояние:", {x: 340, y: 443}, {size: 14, color: UIColor.WHITE});
    GUI.addElement.text("input", {x: ((630+336)/2)+70, y: 431}, 0, 0, "Производство: 0QE", {color: UIColor.YELLOW, size: 14});
}
gui.MG = GUI.importScreen();




// file: machines/molecularGenerator/machine.js

MachineRegistry.registerGenerator(BlockID.molecularGenerator, {
    defaultValues:{
        power: true
    },
    redstone:function(params){
        this.data.power = !params.power
    },
    getEnergyStorage:function(){return 100000},//100к
    getInput:function(slot){
        for(var i in itemsPrice){
            for(var d in itemsPrice[i].items){
                if(slot.id == itemsPrice[i].items[d]){
                    return random(itemsPrice[i].price[0], itemsPrice[i].price[1]);
                }
            }
        }
        this.input = random(2, 20);
        return this.input
    },
    canExtractEnergy:function(t){
        return t == 1
    },
    input: 0,
    tick:function(){
        if(TIPS){
            var container = this.container.getGuiContent();
            if(container){
                container.elements.input.text = "Производство: "+this.input+"QE";
                if(this.input > 0){
                    container.elements.input.font.color = UIColor.GREEN;
                }else{
                    container.elements.input.font.color = UIColor.YELLOW
                }
                this.input = 0
            }
        }
        this.container.setText("molecularText", parseInt(this.data.energy)+"/100000 Qe");
        this.container.setScale("molecularScale", this.data.energy/100000);
        var slot = null;
        var num;
        if((this.data.power&&this.data.energy < this.getEnergyStorage())&&[10, 15, 0].indexOf(World.getThreadTime()%20)){
            for(var i = 1; i <= 30; i++){
                if(this.container.getSlot("slot"+i).id > 0){
                    slot = this.container.getSlot("slot"+i);
                    num = i;
                }
            }
            if(slot){
                this.data.energy = Math.min(this.getEnergyStorage(), this.data.energy+this.getInput(slot));
                slot.count--;
                if(slot.count == 0) this.container.validateSlot("slot"+num);
            }
        }
    },
    getTier:function(){
        return 2
    },
    getGuiScreen:function(){return gui.MG},
    energyTick:function(type, src){
        var output = Math.min(this.data.energy, 28);
        this.data.energy += src.add(output) - output;
    },
    click:function(){
        if(Player.getCarriedItem().id == ItemID.QEconduct&&World.getBlockID(this.x, this.y+1, this.z) == 0){
            World.setBlock(this.x, this.y+1, this.z, BlockID.QEconduct);
            Player.decreaseCarriedItem(1);
            return true
        }
    }
});
ICRender.getGroup("QE-wire").add(BlockID.molecularGenerator, -1);
EnergyTileRegistry.addEnergyTypeForId(BlockID.molecularGenerator, QE);




// file: machines/molecularSealant/sealant.js

OresAPI.registerBlock("molecularSealant", true, [
    {
        name: "Molecular Sealer",
        texture: [["MBot", 0], ["sealantTop", 0], ["MBot", 0], ["sealantFront", 0], ["MBot", 0], ["MBot", 0]],
        inCreative: true
    }
], "opaque", [{ru: "Молекулярный Уплотнитель"}], energyNameOverride("b", "machine", 3));

Callback.addCallback("PostLoaded", function(){
    OresAPI.addShapedRecipe([BlockID.molecularSealant, 1, 0], ["tst", "rdr", "tst"], ["t", BlockID.blockLead, -1, "s", ItemID.crystalSapphire, -1, "r", 331, 0, "d", ItemID.quantomDetectorChip, 0])
});




// file: machines/molecularSealant/gui.js

GUI.createObject(Translation.translate("Molecular sealant"));
GUI.addDrawableObject.bitmap("moleuclar_background", {x: 523, y: 240}, 3.2);
GUI.addDrawableObject.bitmap("arrow_bg", {x: 543, y: 153}, 3.2);
GUI.addElement.scale("molecularScale", {x: 523+3.2*4, y: 240}, 0, "molecularScale", 3.2);
GUI.addElement.text("molecularText", {x: 523, y: 291}, 1, 1, "0/50000 Qe", {color: UIColor.rgb(0, 255, 255), shadow: .6});
GUI.addElement.slot("matterySlot", {x: 643, y: 149});
GUI.addElement.slot("batterySlot", {x: 450, y: 149});
GUI.addElement.scale("processScale", {x: 543, y: 153}, 0, "arrow_scale", 3.2);
if(TIPS){
    GUI.addDrawableObject.frame({x: 336, y: 383}, "classic_frame_input", 630, 100, 3.6);
    GUI.addDrawableObject.text("__DEBUG console__", {x: ((630+336)/2)+70, y: 400}, {size: 14, color: UIColor.WHITE});
    GUI.addDrawableObject.text("Состояние:", {x: 340, y: 423}, {size: 14, color: UIColor.WHITE});
    GUI.addElement.text("mode", {x: ((630+336)/2)+70, y: 411}, 0, 0, "Простаивает", {color: UIColor.YELLOW, size: 14});
}
gui.molecularSealant = GUI.importScreen();




// file: machines/molecularSealant/machine.js

MachineRegistry.registerElectricMachine(BlockID.molecularSealant, {
    defaultValues: {
        work_time: OresAPI.getConfigValue("molecular_sealant.work_time"),
        progress: 0,
        energyEated: 0,
        signal: true
    },
    
    redstone:function(params){
        this.data.signal = !params.power;
    },

    tick: function(){
            if(TIPS){
                var container = this.container.getGuiContent();
                if(container){
                    if(this.data.energy > 0&&this.data.signal){
                        container.elements.mode.text = "Работает "+this.getProgress()+"% ("+Math.floor(100*this.data.energyEated/OresAPI.getConfigValue("molecular_sealant.magic_value"))+"%)";
                        container.elements.mode.font.color = UIColor.GREEN;
                    }else{
                        if(this.data.progress > 0){
                            container.elements.mode.text = "Простаивает "+this.getProgress()+"% ("+Math.floor(100*this.data.energyEated/OresAPI.getConfigValue("molecular_sealant.magic_value"))+"%)";
                        }else container.elements.mode.text = "Простаивает";
                        container.elements.mode.font.color = UIColor.YELLOW;
                    }
                }
            }
        
            if(this.data.signal){
                if(this.data.energyEated < OresAPI.getConfigValue("molecular_sealant.magic_value")){
                    if(this.data.energy > 0){
                        this.data.energy--;
                        this.data.energyEated++;
                    }
               }else{
                   this.data.energyEated = 0;
                   this.data.progress += 1/this.data.work_time;
               }
            }
            
            if(this.data.progress >= 1){
                    var resultSlot = this.container.getSlot("matterySlot");
                    resultSlot.id = ItemID.Oresmatter;
                    resultSlot.count++;
                    this.data.progress = 0; 
            }
        
            var energyStorage = this.getEnergyStorage();
            var tier = this.getTier();
            this.data.energy = Math.min(this.data.energy, energyStorage);
            this.data.energy += ChargeItemRegistry.getEnergyFrom(this.container.getSlot("batterySlot"), "Qe", energyStorage - this.data.energy, transferByTier[tier], tier);
            
            this.container.setScale("processScale", this.data.progress);
            this.container.setScale("molecularScale", this.data.energy / OresAPI.getConfigValue("molecular_sealant.energy_storage"));
            this.container.setText("molecularText", parseInt(this.data.energy)+"/"+this.getEnergyStorage()+" QE");
    },
        
    getTier:function(){
        return 3
    }, 
    
    canReceiveEnergy:function(side){
        return side == 1
    },
    
    getEnergyStorage:function(){
        return OresAPI.getConfigValue("molecular_sealant.energy_storage")    
    },
    
    getGuiScreen:function(){return gui.molecularSealant},
    
    click:function(){
        if(Player.getCarriedItem().id == ItemID.QEconduct&&World.getBlockID(this.x, this.y+1, this.z) == 0){
            World.setBlock(this.x, this.y+1, this.z, BlockID.QEconduct);
            Player.decreaseCarriedItem(1);
            return true
        }
    }
});
ICRender.getGroup("QE-wire").add(BlockID.molecularSealant, -1);
EnergyTileRegistry.addEnergyTypeForId(BlockID.molecularSealant, QE);




// file: machines/matterReenactor/reenactor.js

OresAPI.registerBlock("matterReenactor", true, [
    {
        name: "Matter Reenactor", 
        texture: [["MBot", 0], ["MBot", 0], ["MBot", 0], ["reenactorFront", 0], ["MBot", 0], ["MBot", 0]], 
        inCreative: true
    }
], "opaque", [{ru: "Реконструктор Материи"}], energyNameOverride("a", "machine", 4));

Callback.addCallback("PostLoaded", function(){
    OresAPI.addShapedRecipe([BlockID.matterReenactor, 1, 0], ["tdt", "rcr", "tst"], ["t", BlockID.blockLead, -1, "d", ItemID.quantomDetectorChip, 0, "r", 331, 0, "c", ItemID.splitterChip, 0, "s", ItemID.crystalSapphire, -1]);
});




// file: machines/matterReenactor/gui.js

GUI.createObject(Translation.translate("Matter Reenactor"));

GUI.addDrawableObject.bitmap("arrow_bg", {x: 533, y: 153}, 3.2);
GUI.addDrawableObject.bitmap("background", {x: 523, y: 220}, 3.2);

GUI.addElement.scale("processScale", {x: 533, y: 153}, 0, "arrow_scale", 3.2);
GUI.addElement.slot("matterySlot", {x: 450, y: 151}, 50);
GUI.addElement.slot("itemSlot", {x: 534, y: 80}, 50);
GUI.addElement.slot("outSlot", {x: 632, y: 151}, 50);
GUI.addElement.scale("energyScale", {x: 523+3.2*4, y: 220}, 0, "scale", 3.2);

if(TIPS){
    GUI.addDrawableObject.frame({x: 336, y: 383}, "classic_frame_input", 630, 100, 3.6);
    GUI.addDrawableObject.text("__DEBUG console__", {x: ((630+336)/2)+70, y: 400}, {size: 14, color: UIColor.WHITE});
    GUI.addDrawableObject.text("Состояние:", {x: 350, y: 423}, {size: 14, color: UIColor.WHITE});
        

    GUI.addElement.text("mode", {x: ((630+336)/2)+70, y: 411}, 1, 1, "Простаивает", {color: UIColor.YELLOW, size: 14});
    GUI.addElement.text("topSlot", {x: 350, y: 430}, 1, 1, "В слоте сверху должен быть предмет", {color: UIColor.RED, size: 14});
    GUI.addElement.text("leftSlot", {x: 350, y: 455}, 1, 1, "В слоте слева должна быть материя", {color: UIColor.RED, size: 14});
}

gui.reenactor = GUI.importScreen();




// file: machines/matterReenactor/machine.js

MachineRegistry.registerElectricMachine(BlockID.matterReenactor, {
    defaultValues:{
        work_time: OresAPI.getConfigValue("matter_reenactor.work_time"),
        consumption: OresAPI.getConfigValue("matter_reenactor.energy_consumption")
    },
    getGuiScreen:function(){
        return gui.reenactor
    },
    getEnergyStorage:function(){
        return OresAPI.getConfigValue("matter_reenactor.energy_storage")
    },
    getTier:function(){
        return OresAPI.getConfigValue("matter_reenactor.tier")
    },
    canReceiveEnergy:function(side){
        return side != RelativeAPI.getRelativeSide(World.getBlock(this.x, this.y, this.z).data, 0);
    },
    tick:function(){
        var matter = this.container.getSlot("matterySlot");
        var item = this.container.getSlot("itemSlot");
        var result = this.container.getSlot("outSlot");
        if(TIPS){
            var container = this.container.getGuiContent();
            if(container){
                if(matter.id > 0){
                    if(matter.id != ItemID.Oresmatter){
                        container.elements["leftSlot"].text = "Но это не материя._.";
                        container.elements["leftSlot"].font.color = UIColor.YELLOW;
                    }else{
                        container.elements["leftSlot"].text = "";
                    }
                }else{
                    container.elements["leftSlot"].text = "В слоте слева должна быть материя";
                    container.elements["leftSlot"].font.color = UIColor.RED;
                }
                if(item.id > 0){
                    if(item.id == ItemID.Oresmatter||item.id == ItemID.rebuiltMatter){
                        container.elements["topSlot"].text = "Материю низя!!!";
                        container.elements["topSlot"].font.color = UIColor.YELLOW;
                    }else{
                        container.elements["topSlot"].text = "";
                    }
                }else{
                    container.elements["topSlot"].text = "В слоте сверху должен быть предмет";
                    container.elements["topSlot"].font.color = UIColor.RED;
                }
                if(matter.id == ItemID.Oresmatter&&(item.id > 0&&(item.id != ItemID.Oresmatter&&item.id != ItemID.rebuiltMatter))&&this.data.energy >= this.data.consumption){
                    container.elements["mode"].text = "Работает "+this.getProgress()+"%";
                    container.elements["mode"].font.color = UIColor.GREEN
                    //container.elements["mode"].x = 513;
                }else if(matter.id == ItemID.Oresmatter&&(item.id > 0&&(item.id != ItemID.Oresmatter&&item.id != ItemID.rebuiltMatter))&&this.data.energy < this.data.consumption){
                    container.elements["mode"].text = "Нет энергии";
                    container.elements["mode"].font.color = UIColor.RED;
                    //container.elements["mode"].x = 492;
                }else{
                    container.elements["mode"].text = "Простаивает";
                    container.elements["mode"].font.color = UIColor.YELLOW;
                    //container.elements["mode"].x = 492;
                }
            }
        }
        this.container.setScale("energyScale", this.data.energy/this.getEnergyStorage());
        this.container.setScale("processScale", this.data.progress);
        /*Game.message("§1"+ItemID.Oresmatter)
        Game.message("§1"+matter.id)
        Game.message("§2"+item.id != ItemID.Oresmatter)
        Game.message("§3"+this.data.energy)
        Game.message("§3"+this.data.energy >= 35)*/
        if(matter.id == ItemID.Oresmatter&&item.id != ItemID.Oresmatter&&item.id != ItemID.rebuiltMatter&&item.id > 0){
            if(this.data.energy >= this.data.consumption){//НУ КАК, №№№№№, 30К МОЖЕТ БЫТЬ МЕНЬШЕ 35-ТИ?! ПОЧЕМУ ТЫ ТУТ ЗАРАБОТАЛО, А ТАМ НЕТ?!!
                this.data.energy -= this.data.consumption;//20:59 ПО МСК НА ЧАСАХ - ЗНАЮ, ЧТО НЕ МНОГО, НО ВСЕ ТАКИ - Я УЖЕ СПАТЬ ХОЧУ, А ТЫ МНЕ МОЗГ ВЫНОСИШЬ, КАКОГО ХРЕНА?!
                this.data.progress += 1/this.data.work_time;
            }
            if(this.data.progress >= 1){
                result.id = ItemID.rebuiltMatter;
                result.count++;
                result.data = 0;
                result.extra = new ItemExtraData();
                result.extra.putInt("id", item.id);
                result.extra.putInt("data", item.data);
                item.count--;
                matter.count--;
                this.container.validateAll();
                this.data.progress = 0;
            }
        }else{
            this.data.progress = 0;
        }
    }
});

ICRender.getGroup("ic-wire").add(BlockID.matterReenactor, -1);
EnergyTileRegistry.addEnergyTypeForId(BlockID.matterReenactor, EU);






















// file: machines/molecularConverter/converter.js

OresAPI.registerBlock("molecularConverter", true, [
    {
        name: "Molecular Converter", 
        texture: [["MBot", 0], ["MBot", 0], ["MBot", 0], ["converterFront", 0], ["MBot", 0], ["MBot", 0]], 
        inCreative: true
    }
], "opaque", [{ru: "Молекулярный Преобразователь"}], energyNameOverride("b", "machine", 4));

Callback.addCallback("PostLoaded", function(){
    OresAPI.addShapedRecipe([BlockID.molecularConverter, 1, 0], ["tst", "rcr", "tdt"], ["t", BlockID.blockLead, -1, "s", ItemID.crystalSapphire, -1, "r", 331, 0, "c", ItemID.densityControllerChip, -1, "d", 264, 0]);
});




// file: machines/molecularConverter/gui.js

GUI.createObject(Translation.translate("Molecular Converter"));

GUI.addDrawableObject.bitmap("arrow_bg", {x: 533, y: 153}, 3.2);
GUI.addDrawableObject.bitmap("background", {x: 523, y: 220}, 3.2);

GUI.addElement.scale("processScale", {x: 533, y: 153}, 0, "arrow_scale", 3.2);
GUI.addElement.slot("matterySlot", {x: 450, y: 151}, 50);
GUI.addElement.slot("rebuiltMatter", {x: 534, y: 80}, 50);
GUI.addElement.slot("outSlot", {x: 632, y: 151}, 50);
GUI.addElement.scale("energyScale", {x: 523+3.2*4, y: 220}, 0, "scale", 3.2);

if(TIPS){
    GUI.addDrawableObject.frame({x: 336, y: 383}, "classic_frame_input", 630, 100, 3.6);
    GUI.addDrawableObject.text("__DEBUG console__", {x: ((630+336)/2)+70, y: 400}, {size: 14, color: UIColor.WHITE});
    GUI.addDrawableObject.text("Состояние:", {x: 350, y: 423}, {size: 14, color: UIColor.WHITE});
        

    GUI.addElement.text("mode", {x: ((630+336)/2)+70, y: 411}, 1, 1, "Простаивает", {color: UIColor.YELLOW, size: 14});
    GUI.addElement.text("topSlot", {x: 350, y: 430}, 1, 1, "В слоте сверху должна быть реконструированная материя", {color: UIColor.RED, size: 14});
    GUI.addElement.text("leftSlot", {x: 350, y: 455}, 1, 1, "В слоте слева должна быть материя", {color: UIColor.RED, size: 14});
}

gui.converter = GUI.importScreen();




// file: machines/molecularConverter/machine.js

MachineRegistry.registerElectricMachine(BlockID.molecularConverter, {
    defaultValues:{
        work_time: OresAPI.getConfigValue("molecular_converter.work_time"),
    }, 
    updateValues:function(){
      this.matterySlot = this.container.getSlot("matterySlot");
      this.result = this.container.getSlot("outSlot");
      this.itemSlot = this.container.getSlot("rebuiltMatter"); 
     
      this.container.setScale("processScale", this.data.progress);
      this.container.setScale("energyScale", this.data.energy/this.getEnergyStorage()); 
      
      if(TIPS){
        var container = this.container.getGuiContent();
        if(container){
            if(this.itemSlot.id > 0){
                if(this.itemSlot.id == ItemID.rebuiltMatter){
                    container.elements["topSlot"].text = "";
                }else{
                    container.elements["topSlot"].text = "В слоте сверху не реконструированная материя";
                    container.elements["topSlot"].font.color = UIColor.YELLOW;
                }
            }else{
                container.elements["topSlot"].text = "В слоте сверху должна быть реконструированная материя";
                container.elements["topSlot"].font.color = UIColor.RED;
            }
            if(this.matterySlot.id > 0){
                if(this.matterySlot.id == ItemID.Oresmatter){
                    container.elements["leftSlot"].text = "";
                }else{
                    container.elements["leftSlot"].text = "В слоте слева не материя"
                    container.elements["leftSlot"].font.color = UIColor.YELLOW;
                }
            }else{
                container.elements["leftSlot"].text = "В слоте слева должна быть материя";
                container.elements["leftSlot"].font.color = UIColor.RED;
            }
            if(this.condition()){
                if(this.data.energy >= OresAPI.getConfigValue("molecular_converter.energy_consumption")){
                    container.elements["mode"].text = "Работает "+this.getProgress()+"%";
                    container.elements["mode"].font.color = UIColor.GREEN
                }else{
                    container.elements["mode"].text = "Нет энергии";
                    container.elements["mode"].font.color = UIColor.RED;
                }
            }else{
                container.elements["mode"].text = "Простаивает";
                container.elements["mode"].font.color = UIColor.YELLOW;
            }
        }
      }
    },
    
    condition:function(){
        if((this.itemSlot.id == ItemID.rebuiltMatter&&this.matterySlot.id == ItemID.Oresmatter)&&
        (this.result.id == 0||(this.result.id == this.itemSlot.extra.getInt("id")&&result.data == itemSlot.extra.getInt("data"))&&result.count+1 <= Item.getMaxStack(result.id))) return true
    },
    
    tick:function(){
        this.updateValues();
        if(this.condition()){
            if(this.data.energy >= OresAPI.getConfigValue("molecular_converter.energy_consumption")){
                this.data.energy -= OresAPI.getConfigValue("molecular_converter.energy_consumption");
                this.data.progress += 1/this.data.work_time;
            }   
            if(this.data.progress >= 1){
                this.matterySlot.count--;  
                this.itemSlot.count--;        
                this.result.id = this.itemSlot.extra.getInt("id")
                this.result.count += random(64, 120);
                this.result.data = this.itemSlot.extra.getInt("data");  
                this.data.progress = 0; 
                this.container.validateAll();
            }
        }else{
            this.data.progress = 0;
        }
    },
    
    getEnergyStorage:function(){
        return OresAPI.getConfigValue("molecular_converter.energy_storage")
    },
    
    canReceiveEnergy:function(side){
        return side != RelativeAPI.getRelativeSide(World.getBlock(this.x, this.y, this.z).data, 0);
    },
    
    getTier:function(){
        return OresAPI.getConfigValue("molecular_converter.tier")
    },
    
    getGuiScreen:function(){return gui.converter}
});
ICRender.getGroup("ic-wire").add(BlockID.molecularConverter, -1);
EnergyTileRegistry.addEnergyTypeForId(BlockID.molecularConverter, EU);




















// file: machines/laboratory/lab.js

OresAPI.registerBlock("labBlock", true, [
    {
        name: "Laboratory Block",
        texture:[["MBot", 0], ["labTop", 0], ["MBot", 0], ["labFront", 0], ["MBot", 0], ["MBot", 0]],
        inCreative: true
    }
], "opaque", [{ru: "Лабораторный Блок"}], energyNameOverride(4, "machine", 3));

Callback.addCallback("PostLoaded", function(){
    OresAPI.addShapedRecipe([BlockID.labBlock, 1, 0], ["sgs", "iri", "rdr"], ["s", ItemID.crystalSapphire, -1, "d", 54, 0, "i", 42, 0, "r", 152, 0, "g", 20, 0]);
});

var labItems = [ItemID.splitterChip, ItemID.quantomDetectorChip, ItemID.densityControllerChip, ItemID.matteryDrive];

function tryResearch(c, c1){
    if(!c1){c1 = c; c = 1;}
    if(random(0, 100) <= c1){
        return labItems[random(0, labItems.length-1)];
    }
    return ItemID.burntChip;
}




// file: machines/laboratory/machine.js

MachineRegistry.registerElectricMachine(BlockID.labBlock, {
    defaultValues:{
        work_time: OresAPI.getConfigValue("laboratory.work_time"),
        consumption: OresAPI.getConfigValue("laboratory.energy_consumption")
    },
    getTier:function(){
        return OresAPI.getConfigValue("laboratory.tier")
    },
    canExtractEnergy:function(side){
        return [RelativeAPI.getRelativeSide(World.getBlock(this.x, this.y, this.z).data, 0), 1].indexOf > -1;
    },
    updateValues:function(){
        this.source = this.container.getSlot("chipSlot");
        this.splitter = this.container.getSlot("splitterChipSlot");
        this.quantomDetector = this.container.getSlot("quantomDetectorChipSlot");
        this.densityController = this.container.getSlot("densityControllerChipSlot");
        this.matterDrive = this.container.getSlot("matterDriveChip");
        this.burnt = this.container.getSlot("burntChipSlot");
        
        this.container.setScale("energyScale", this.data.energy/3000);
        this.container.setScale("researchScale", this.data.progress);
        
        if(TIPS){
            var container = this.container.getGuiContent();
            if(container){
                if(this.source.id == 0){
                    container.elements["chipListener"].text = "В слоте сверху должна быть исследовательская микросхема";
                    container.elements["chipListener"].font = {color: UIColor.RED, size: 15};
                    container.elements["mode"].text = "Простаивает";
                    container.elements["mode"].font.color = UIColor.YELLOW;
                }else if(this.source.id == ItemID.researchChip&&this.data.energy >= this.data.consumption){
                    container.elements["chipListener"].text = "";
                    container.elements["mode"].text = "Работает "+this.getProgress()+"%";
                    container.elements["mode"].font.color = UIColor.GREEN;
                }else if(this.source.id == ItemID.researchChip&&this.data.energy < this.data.consumption){
                    container.elements["chipListener"].text = "";
                    container.elements["mode"].text = "Нет энергии";
                    container.elements["mode"].font.color = UIColor.RED;
                }else{
                    container.elements["chipListener"].text = "В слоте сверху находится не исследовательская микросхема";
                    container.elements["chipListener"].font = {color: UIColor.YELLOW, size: 15};
                    container.elements["mode"].text = "Простаивает";
                    container.elements["mode"].font.color = UIColor.YELLOW;
                }
            }
        }
    },
    
    condition:function(){
        return (this.source.id == ItemID.researchChip&&this.data.energy >= this.data.consumption)
    },
    
    tick:function(){
        this.updateValues();
        if(this.condition()){
            this.data.energy -= this.data.consumption;
            this.data.progress += 1/this.data.work_time;
            if(this.data.progress >= 1){
                this.data.progress = 0;
                this.source.count--;
                let result = tryResearch(OresAPI.getConfigValue("laboratory.rate_of_success_research")), slot = this.selectSlot(result);
                this[slot].id = result;
                this[slot].count++;
                this.container.validateSlot("chipSlot");
            }
        }else{
            this.data.progress = 0;
        }
    },
    
     selectSlot:function(id){
        switch(id){
            case ItemID.splitterChip:
                return "splitter"
            break;
            case ItemID.quantomDetectorChip:
                return "quantomDetector"
            break;
            case ItemID.densityControllerChip:
                return "densityController"
            break;
            case ItemID.matteryDrive:
                return "matterDrive"
            break;
            case ItemID.burntChip:
                return "burnt"
            break; 
        }
        
    },
    
    getGuiScreen:function(){
        return gui.laboratory
    },
    
    getEnergyStorage:function(){
        return 3000
    }
});
ICRender.getGroup("ic-wire").add(BlockID.labBlock, -1);
EnergyTileRegistry.addEnergyTypeForId(BlockID.labBlock, EU);











// file: machines/laboratory/gui.js

GUI.createObject(Translation.translate("Laboratory Block"));

GUI.addDrawableObject.bitmap("research", {x: 533, y: 153}, 3.6);
GUI.addDrawableObject.bitmap("arrow_bg_bottom", {x: 573, y: 107}, 2);
GUI.addDrawableObject.bitmap("arrow_bg_bottom", {x: 573, y: 271}, 2);
GUI.addDrawableObject.bitmap("background", {x: 662, y: 143/2}, 3.6);

GUI.addElement.slot("chipSlot", {x: 564, y: 56})

GUI.addElement.slot("burntChipSlot", {x: 464, y: 316});
GUI.addElement.slot("splitterChipSlot", {x: 514, y: 316});
GUI.addElement.slot("quantomDetectorChipSlot", {x: 564, y: 316});
GUI.addElement.slot("densityControllerChipSlot", {x: 614, y: 316});
GUI.addElement.slot("matterDriveChip", {x: 664, y: 316});

GUI.addElement.scale("researchScale", {x: 533, y: 153}, 3, "research_full", 3.6);
GUI.addElement.scale("energyScale", {x: 662+3.6*4, y: 143/2}, 0,"scale", 3.6);

if(TIPS){
    GUI.addDrawableObject.frame({x: 336, y: 383}, "classic_frame_input", 630, 100, 3.6);
    GUI.addDrawableObject.text("__DEBUG console__", {x: ((630+336)/2)+70, y: 400}, {size: 14, color: UIColor.WHITE});
    GUI.addDrawableObject.text("Состояние:", {x: 340, y: 423}, {size: 14, color: UIColor.WHITE});

    GUI.addElement.text("chipListener", {x: 350, y: 450}, 300, 20, "В слоте сверху должна быть исследовательская микросхема", {color: UIColor.RED, size: 15});
    GUI.addElement.text("mode", {x: ((630+336)/2)+70, y: 411}, 0, 0, "Простаивает", {color: UIColor.YELLOW, size: 14});
}

gui.laboratory = GUI.importScreen();




// file: guide/book.js

var GuideAPI = false;
var GuideHelper, Ctrl = null;
var pages = {};

const Lcolor = UIColor.rgb(0, 0, 128);
const Ncolor = UIColor.rgb(128, 0, 128);

var String = {
    toMain:Translation.translate("To main"),
    usedInCrafts:Translation.translate("Used in crafts."),
    adv:function(str){
        return Translation.translate("Advantage")+": "+Translation.translate(str);
    },
    disAdv:function(str){
        return Translation.translate("Disadvantage")+": "+Translation.translate(str);
    },
    t:Translation.translate,
    solar:function(type){
        return Translation.translate("Generation")+": " +OresAPI.getConfigValue(type+"_solar_panel.gen_day")+" ("+OresAPI.getConfigValue(type+"_solar_panel.gen_night")+" "+Translation.translate("night")+")";
    },
    ore:function(id){
        lang = (Item.getName(280) == "Stick")?false:true;
        let a, b;
        switch(id){
            case 1:
                a = "Адамантит";
                b = "Adamantite";
            break;
            case 2:
               a = "Свинец";
               b = "Tin";
            break; 
            case 3:
                a = "Малахит";
                b = "Malachite";
            break;
            case 4:
                a = "Мифрил";
                b = "Muthril";
            break;
            case 5:
                a = "Сапфир";
                b = "Sapphire";
            break;
            case 6:
                a = "Ураниум";
                b = "Uranium";
            break;
        }
        return (lang)?a:b;
    }
}

ModAPI.addAPICallback("GuideAPI", function(api){
    GuideAPI = api.GuideAPI;
    GuideHelper = api.GudeHelper;
    Ctrl = api.PageControllers;
    Callback.addCallback("PostLoaded", function(){
        GuideAPI.registerGuide("oresModGuide", {
            item: ItemID.oresModGuideBook,
            pages: pages,
            textures:{
                background: "blue_background",
                nextLink: "next",
                preLink: "pre",
                close: "btn"
            }
        });
    });
});




// file: guide/pages/default.js

ModAPI.addAPICallback("GuideAPI", function(){
    pages["default"] = {
        left:{
            controller:Ctrl.ITEM_PAGE,
            items:[
                {id: ItemID.crystalSapphire, data: 0}
            ],
            elements:[
                {text: Translation.translate("All about Ores Mod"), size: 30, color: UIColor.CYAN}
            ]
        },
        right:{
            controller:Ctrl.BASIC_PAGE,
            elements:[
                {text: Translation.translate("About ores"), size: 15, color: Lcolor, link: "ores_main", underline: true, bold: true},
                {text: Translation.translate("About mechanical blocks"), size: 15, color: Lcolor, link: "mechanic_main", underline: true, bold: true},
                {text: Translation.translate("About other items"), size: 15, color: Lcolor, link: "items_main", underline: true, bold: true}
            ]
        }
    }
});




// file: guide/pages/ores/main.js

ModAPI.addAPICallback("GuideAPI", function(){
    pages["ores_main"] = {
        left:{
            controller:Ctrl.BASIC_PAGE,
            elements:[
                {text: String.ore(1), size: 20, color: Lcolor, link: "adamantite", underline: true},
                {text: String.ore(2), size: 20, color: Lcolor, link: "lead", underline: true},
                {text: String.ore(3), size: 20, color: Lcolor, link: "malachite", underline: true},
                {text: String.ore(4), size: 20, color: Lcolor, link: "muthril", underline: true},
                {text: String.ore(5), size: 20, color: Lcolor, link: "uranium", underline: true},
                {text: String.ore(6), size: 20, color: Lcolor, link: "sapphire", underline: true}
            ]
        },
        preLink: "default"
    }
});




// file: guide/pages/ores/adamantite.js

ModAPI.addAPICallback("GuideAPI", function(){
    pages["adamantite"] = {
        preLink: "ores_main",
        left:{
            controller:Ctrl.ITEM_PAGE,
            items:[
                {id: ItemID.ingotAdamantite, data: 0},
                {id: BlockID.oreAdamantite, data: 0},
                {id: BlockID.blockAdamantite, data: 0}
            ],
            elements:[
                {text: Translation.translate("To main"), side: 20, color: Lcolor, underline: true, link: "default"}
            ]
        },
        right:{
            controller:Ctrl.BASIC_PAGE,
            elements:[
                {text: Translation.translate("Used in craft."), size: 15, color: Ncolor},
                {text: String.adv("strength"), size: 15, color: UIColor.rgb(25, 25, 112)},
                {text: String.disAdv("low speed"), size: 15, color: UIColor.RED}
            ]
        }
    }
});




// file: guide/pages/ores/lead.js

ModAPI.addAPICallback("GuideAPI", function(){
    pages["lead"] = {
        preLink: "ores_main",
        left:{
            controller:Ctrl.ITEM_PAGE,
            items:[
                {id: ItemID.ingotLead, data: 0},
                {id: BlockID.oreLead, data: 0},
                {id: BlockID.blockLead, data: 0}
            ],
            elements:[
                {text: String.toMain, side: 20, color: Lcolor, underline: true, link: "default"}
            ]
        },
        right:{
            controller:Ctrl.BASIC_PAGE,
            elements:[
                {text: String.usedInCrafts, size: 15, color: Ncolor},
                {text: String.adv("not rare"), size: 15, color: UIColor.rgb(25, 25, 112)},
                {text: String.disAdv("no strengths"), size: 15, color: UIColor.RED}
            ]
        }
    }
});




// file: guide/pages/ores/malachite.js

ModAPI.addAPICallback("GuideAPI", function(){
    pages["malachite"] = {
        preLink: "ores_main",
        left:{
            controller:Ctrl.ITEM_PAGE,
            items:[
                {id: ItemID.ingotMalachite, data: 0},
                {id: BlockID.oreMalachite, data: 0},
                {id: BlockID.blockMalachite, data: 0}
            ],
            elements:[
                {text: String.toMain, side: 20, color: Lcolor, underline: true, link: "default"}
            ]
        },
        right:{
            controller:Ctrl.BASIC_PAGE,
            elements:[
                {text: String.usedInCrafts, size: 15, color: Ncolor},
                {text: String.adv("very fast"), size: 15, color: UIColor.rgb(25, 25, 112)},
                {text: String.disAdv("not durable"), size: 15, color: UIColor.RED}
            ]
        }
    }
});




// file: guide/pages/ores/muthril.js

ModAPI.addAPICallback("GuideAPI", function(){
    pages["muthril"] = {
        preLink: "ores_main",
        left:{
            controller:Ctrl.ITEM_PAGE,
            items:[
                {id: ItemID.ingotMuthril, data: 0},
                {id: BlockID.oreMuthril, data: 0},
                {id: BlockID.blockMuthril, data: 0}
            ],
            elements:[
                {text: String.toMain, side: 20, color: Lcolor, underline: true, link: "default"} 
            ]
        },
        right:{
            controller:Ctrl.BASIC_PAGE,
            elements:[
                {text: String.usedInCrafts, size: 15, color: Ncolor},
                {text: String.adv("not rare, relatively durable and efficient"), size: 14, color: UIColor.rgb(25, 25, 112)},
                {text: String.disAdv("lower speed than malachite"), size: 14, color: UIColor.RED}
            ]
        }
    }
});




// file: guide/pages/ores/uranium.js

ModAPI.addAPICallback("GuideAPI", function(){
    pages["uranium"] = {
        preLink: "ores_main",
        left:{
            controller:Ctrl.ITEM_PAGE,
            items:[
                {id: ItemID.ingotUranium, data: 0},
                {id: BlockID.oreUranium, data: 0},
                {id: BlockID.blockUranium, data: 0}
            ],
            elements:[
                {text: String.toMain, side: 20, color: Lcolor, underline: true, link: "default"}
            ]
        },
        right:{
            controller:Ctrl.BASIC_PAGE,
            elements:[
                {text: String.usedInCrafts, size: 15, color: Ncolor},
                {text: String.adv("effective, has the highest damage"), size: 14, color: UIColor.rgb(25, 25, 112)},
                {text: String.disAdv("rarely comes across"), size: 15, color: UIColor.RED}
            ]
        }
    }
});




// file: guide/pages/ores/sapphire.js

ModAPI.addAPICallback("GuideAPI", function(){
    pages["sapphire"] = {
        preLink: "ores_main",
        left:{
            controller:Ctrl.ITEM_PAGE,
            items:[
                {id: ItemID.crystalSapphire, data: 0},
                {id: BlockID.oreSapphire, data: 0},
                {id: BlockID.blockSapphire, data: 0}
            ],
            elements:[
                {text: String.toMain, side: 20, color: Lcolor, underline: true, link: "default"}
            ]
        },
        right:{
            controller:Ctrl.BASIC_PAGE,
            elements:[
                {text: String.usedInCrafts, size: 15, color: Ncolor},
                {text: String.adv("the most effective material"), size: 15, color: UIColor.rgb(25, 25, 112)},
                {text: String.disAdv("rate"), size: 15, color: UIColor.RED}
            ]
        }
    }
});




// file: guide/pages/mechanic/main.js

ModAPI.addAPICallback("GuideAPI", function(){
    pages["mechanic_main"] = {
        left:{
            controller:Ctrl.BASIC_PAGE,
            elements:[
                {text: String.t("Solar Panels"), size: 20, color: Lcolor, link: "solar_main", underline: true},
                {text: String.t("Wood Incubator"), size: 20, color: Lcolor, link: "wim", underline: true},
                {text: String.t("Molecular Generator"), size: 20, color: Lcolor, link: "mgm", underline: true},
                {text: String.t("Molecular Sealant"), size: 20, color: Lcolor, link: "msm", underline: true},
                {text: String.t("Matter Reenactor"),  size: 20, color: Lcolor, link: "mrm", underline: true},
                {text: String.t("Molecular Converter"), size: 20, color: Lcolor, link: "mcm", underline: true},
                {text: String.t("Laboratory Block"), size: 20, color: Lcolor, link: "lbm", underline: true}
            ]
        },
        preLink: "default"
    }
}); 




// file: guide/pages/mechanic/solar/main.js

ModAPI.addAPICallback("GuideAPI", function(){
    pages["solar_main"] = {
        left:{
           controller: Ctrl.BASIC_PAGE,
           elements:[
              {text: String.t("Leadstone"), color: Lcolor, link: "leadstone", underline: true, size: 20},
              {text: String.t("Hardent"), color: Lcolor, size: 20, link: "hardent", underline: true, size: 20},
              {text: String.t("Redstone"), color: Lcolor, size: 20, link: "redstone", underline: true, size: 20},
              {text: String.t("Resonant"), color: Lcolor, size: 20, link: "resonant", underline: true},
              {text: String.t("Advanced"), color: Lcolor, size: 20, link: "advanced", underline: true},
              {text: String.t("Ultimate"), color: Lcolor, size: 20, link: "ultimate", underline: true}
           ]
        },
       preLink: "mechanic_main",
       nextLink: "leadstone"
    }
});




// file: guide/pages/mechanic/solar/leadstone.js

ModAPI.addAPICallback("GuideAPI", function(){
    pages["leadstone"] = {
        left:{
            controller: Ctrl.ITEM_PAGE,
            items:[
                {id: BlockID.solarPanelLeadstone, data: 0}
            ],
            elements:[
                {color: Ncolor, text: String.solar("leadstone"), size: 15}
            ]
        },
        right:{
            controller: Ctrl.GRID_3x3_PAGE,
            title: Translation.translate("Leadstone Solar Panel"),
            recipes:[
                {
                    grid:[
                        ["l", "l", "l"],
                        ["r", "c", "r"],
                        ["n", "n", "n"]
                    ],
                    materials:{
                        "l":{id: ItemID.cellPhotovailtaic, data: 0},
                        "r":{id: 266, data: 0},
                        "c":{id: ItemID.solarCoreHardent, data: 0},
                        "n":{id: ItemID.nuggetLead, data: 0}
                    },
                    result:{id: BlockID.solarPanelLeadstone, data: 0},
                }
            ],
            elements:[
                {color: Ncolor, text: String.toMain, size: 20, underline: true, link: "default"}
            ]
        },
        preLink: "solar_main",
        nextLink: "hardent"
    }
});




// file: guide/pages/mechanic/solar/hardent.js

ModAPI.addAPICallback("GuideAPI", function(){
    pages["hardent"] = {
        right:{
            controller: Ctrl.GRID_3x3_PAGE,
            title: Translation.translate("Hardent Solar Panel"),
            recipes:[{
                grid:[
                    ["r", "l", "r"],
                    ["c", "p", "c"],
                    ["n", "r", "n"]
                ],
                materials:{
                    "p":{id: BlockID.solarPanelLeadstone, data: 0},
                    "c":{id: ItemID.solarCoreHardent, data: 0},
                    "r":{id: 266, data: 0},
                    "l":{id: ItemID.cellPhotovailtaic, data: 0},
                    "n":{id: ItemID.nuggetLead, data: 0}
                },
                result:{id: BlockID.solarPanelHardent, data: 0}
            }],
            elements:[
                {text: String.toMain, size: 20, underline: true, link: "default", color: Ncolor}
            ]
        },
        left:{
            elements:[
                {color: Ncolor, text: String.solar("hardent"), size: 15}
            ],
            controller: Ctrl.ITEM_PAGE,
            items:[
                {id: BlockID.solarPanelHardent, data: 0}
            ]
        },
        preLink: "leadstone",
        nextLink: "redstone"
    }
});




// file: guide/pages/mechanic/solar/redstone.js

ModAPI.addAPICallback("GuideAPI", function(){
    pages["redstone"] = {
        right:{
            controller: Ctrl.GRID_3x3_PAGE,
            title: Translation.translate("Redstone Solar Panel"),
            recipes:[{
                grid:[
                    ["r", "l", "r"],
                    ["c", "p", "c"],
                    ["n", "n", "n"]
                ],
                materials:{
                    "p":{id: BlockID.solarPanelHardent, data: 0},
                    "c":{id: ItemID.solarCoreRedstone, data: 0},
                    "l":{id: ItemID.cellPhotovailtaic, data: 0},
                    "n":{id: ItemID.nuggetLead, data: 0}
                },
                result:{id: BlockID.solarPanelRedstone, data: 0}
            }],
            elements:[
                {color: Ncolor, text: String.toMain, size: 20, underline: true, link: "default"}
            ]
        },
        left:{
            elements:[
                {color: Ncolor, text: String.solar("redstone"), size: 15}
            ],
            controller: Ctrl.ITEM_PAGE,
            items:[
                {id: BlockID.solarPanelRedstone, data: 0}
            ]
        },
        preLink: "hardent",
        nextLink: "resonant"
    }
});




// file: guide/pages/mechanic/solar/resonant.js

ModAPI.addAPICallback("GuideAPI", function(){
    pages["resonant"] = {
        right:{
            controller: Ctrl.GRID_3x3_PAGE,
            title: Translation.translate("Resonant Solar Panel"),
            recipes:[{
                grid:[
                    ["r", "l", "r"],
                    ["c", "p", "c"],
                    ["r", "r", "r"]
                ],
                materials:{
                    "p":{id: BlockID.solarPanelRedstone, data: 0},
                    "c":{id: ItemID.solarCoreResonant, data: 0},
                    "l":{id: ItemID.cellPhotovailtaic, data: 0},
                    "r":{id: 351, data: 4}
                },
                result:{id: BlockID.solarPanelResonant, data: 0}
            }],
            elements:[
                {color: Ncolor, text: String.toMain, size: 20, underline: true, link: "default"}
            ]
        },
        left:{
            elements:[
                {color: Ncolor, text: String.solar("resonant"), size: 15}
            ],
            controller: Ctrl.ITEM_PAGE,
            items:[
                {id: BlockID.solarPanelResonant, data: 0}
            ]
        },
        preLink: "redstone",
        nextLink: "advanced"
    }
});




// file: guide/pages/mechanic/solar/advanced.js

ModAPI.addAPICallback("GuideAPI", function(){
    pages["advanced"] = {
        right:{
            controller: Ctrl.GRID_3x3_PAGE,
            title: Translation.translate("Advanced Solar Panel"),
            recipes:[{
                grid:[
                    ["r", "l", "r"],
                    ["c", "p", "c"],
                    ["s", "s", "s"]
                ],
                materials:{
                    "p":{id: BlockID.solarPanelAdvanced, data: 0},
                    "c":{id: ItemID.solarCoreAdvanced, data: 0},
                    "l":{id: ItemID.cellPhotovailtaic, data: 0},
                    "r":{id: 266, data: 0},
                    "s":{id: ItemID.crystalSapphire, data: 0}
                },
                result:{id: BlockID.solarPanelAdvanced, data: 0}
            }],
            elements:[
                {text: String.toMain, size: 20, underline: true, link: "default", color: Ncolor}
            ]
        },
        left:{
            elements:[
                {text: String.solar("advanced"), size: 15, color: Ncolor}
            ],
            controller: Ctrl.ITEM_PAGE,
            items:[
                {id: BlockID.solarPanelAdvanced, data: 0}
            ]
        },
        preLink: "resonant",
        nextLink: "ultimate"                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    
    }
});




// file: guide/pages/mechanic/solar/ultimate.js

ModAPI.addAPICallback("GuideAPI", function(){
    pages["ultimate"] = {
        left:{
            controller: Ctrl.ITEM_PAGE,
            items:[
                {id: BlockID.solarPanelUltimate, data: 0}
            ],
            elements:[
                {color: Ncolor, text: String.solar("ultimate"), size: 15}
            ]
        },
        right:{
            controller: Ctrl.GRID_3x3_PAGE,
            title: Translation.translate("Ultimate Solar Panel"),
            recipes:[
                {
                    grid:[
                        ["r", "l", "r"],
                        ["c", "p", "c"],
                        ["r", "c", "r"]
                    ],
                    materials:{
                        "l":{id: ItemID.cellPhotovailtaic, data: 0},
                        "r":{id: ItemID.nuggetMistery, data: 0},
                        "c":{id: ItemID.solarCoreUltimate, data: 0},
                        "p":{id: BlockID.solarPanelAdvanced, data: 0}
                    },
                    result:{id: BlockID.solarPanelUltimate, data: 0},
                }
            ],
            elements:[
                {color: Ncolor, text: String.toMain, size: 20, underline: true, link: "default"}
            ]
        },
        preLink: "advanced",
        nextLink: "solar_main"
    }
});




// file: guide/pages/mechanic/wood/1.js

ModAPI.addAPICallback("GuideAPI", function(){
    pages["wim"] = {
        left:{
            controller: Ctrl.ITEM_PAGE,
            items:[
                {id: BlockID.woodIncubator}
            ],
            elements:[
                {color: Ncolor, text: Translation.translate("This mechanism will grow the tree anywhere."), size: 20}
            ]
        },
        right:{
            controller: Ctrl.GRID_3x3_PAGE,
            title: Translation.translate("Wood Incubator"),
            recipes:[
                {
                    result:{id: BlockID.woodIncubator, data: 0},
                    grid:[
                        ["t", "d", "t"],["r", "g", "r"],["t", "t", "t"]
                    ],
                    materials:{
                        "t":{id: BlockID.blockLead},
                        "d":{id: 3, data: 0},
                        "g":{id: 266, data: 0},
                        "r":{id: 331, data: 0}
                    }
                }
            ]
        },
        preLink: "mechanic_main",
        nextLink: "wig"
    }
});




// file: guide/pages/mechanic/wood/2.js

ModAPI.addAPICallback("GuideAPI", function(){
    pages["wig"] = {
        left:{
            controller: Ctrl.BASIC_PAGE,
            elements:[
                {text: String.t("Use of a wood incubator"), size: 21, color: UIColor.CYAN},
                {color: Ncolor, text: String.t("To use a wood incubator you will need: seedling, energy and catalyst."), size: 14},
                {color: Ncolor, text: String.t("List of supported seedlings and catalysts on the right page."), underline: true, size: 14},
                {color: Ncolor, text: String.t("Before using the mechanism, you need to place a block of earth or dirt next to it."), size: 14},
                {color: Ncolor, text: String.t("In the window of the mechanism, approximately in the middle, there is a red rectangle."), size: 14},
                {color: Ncolor, text: String.t("You need to work only with slots from the left of this rectangle."), underline: true, size: 14},
                {color: Ncolor, text: String.t("A sapling is placed in the top slot; in the right - the catalyst"), size: 14},
                {color: Ncolor, text: String.t("If you did everything correctly, then a sapling will appear on the dirt block, and the red rectangle will turn green."), size: 14},
                {color: Ncolor, text: String.t("I remind you that the mechanism consumes energy, nothing will work without it."), size: 14},
                {color: Ncolor, text: String.t("The red box is the growth progress bar. When progress is completed - you will receive a tree, seedlings and a special drop, if there is one."), size: 14}
            ]
        },
        right:{
            controller: Ctrl.BASIC_PAGE,
            elements:[
                {color: Ncolor, text: String.t("Saplings:"), size: 20, bold: true},
                {color: Ncolor, text: String.t("Currently only saplings from minecraft are supported."), size: 14},
                {color: Ncolor, text: String.t("Catalysts:"), size: 20, bold: true},
                {color: Ncolor, text: String.t("Bone flour."), size: 14, bold: true},
                {text: String.t("The catalyst is used to accelerate the growth of the tree, its use is not necessary"), size: 14, color: UIColor.RED, underline: true, bold: true}
            ]
        },
        nextLink: "mechanic_main",
        preLink: "wim"
    } 
});




// file: guide/pages/mechanic/mGen/1.js

ModAPI.addAPICallback("GuideAPI", function(){
    pages["mgm"] = {
        left:{
            controller: Ctrl.ITEM_PAGE,
            items:[
                {id: BlockID.molecularGenerator, data: 0}
            ],
            elements:[
                {text: String.t("Generator, for generating a new type of energy QE (Quantum Energy)"), size: 18, color: Ncolor}
            ]
        },
        right:{
            controller: Ctrl.GRID_3x3_PAGE,
            recipes:[{
                result:{id: BlockID.molecularGenerator, data: 0},
                grid:[["t", "d", "t"], ["r", "c", "r"], ["t", "s", "t"]],
                materials:{
                    "t":{id: BlockID.blockLead, data: 0},
                    "d":{id: ItemID.matteryDrive, data: 0},
                    "r":{id: 331, data: 0},
                    "s":{id: ItemID.splitterChip, data: 0},
                    "c":{id: ItemID.crystalSapphire, data: 0}
                }
            }],
            title: Translation.translate("Molecular Generator")
        },
        preLink: "mechanic_main",
        nextLink: "mgg"
    }
});




// file: guide/pages/mechanic/mGen/2.js

ModAPI.addAPICallback("GuideAPI", function(){
    pages["mgg"] = {
        left:{
            controller: Ctrl.BASIC_PAGE,
            elements:[
                {text: String.t("Using a molecular generator"), size: 21, color: UIColor.CYAN, bold: true},
                {text: String.t("Working with this mechanism is the easiest"), size: 14, color: Ncolor},
                {text: String.t("In the interface of the mechanism there are many slots, in these slots are placed any items that the mechanism will turn into energy."), size: 14, color: Ncolor},
                {text: String.t("The mechanism does not consume Eu-energy."), underline: true, size: 14, color: Ncolor},
                {text: String.t("The removal of energy is carried out by attaching a special conductor to the upper side of the mechanism."), color: Ncolor}
            ]
        },
        preLink: "mgm",
        nextLink: "mechanic_main"
    }
});




// file: guide/pages/mechanic/sealant/1.js

ModAPI.addAPICallback("GuideAPI", function(){
    pages["msm"] = {
        left:{
            controller: Ctrl.ITEM_PAGE,
            items:[
                {id: BlockID.molecularSealant}
            ],
            elements:[
                {text: String.t("Molecular compactor compresses QE energy, turning it into matter."), size: 20, color: Ncolor}
            ]
        },
        right:{
            controller: Ctrl.GRID_3x3_PAGE,
            title: Translation.translate("Molecular Sealant"),
            recipes:[{
                grid:[["t", "s", "t"], ["r", "d", "r"], ["t", "s", "t"]],
                materials:{
                    "t":{id: BlockID.blockLead, data: 0},
                    "s":{id: ItemID.crystalSapphire, data: 0},
                    "r":{id: 331, data: 0},
                    "d":{id: ItemID.quantomDetectorChip, data: 0}
                },
                result:{id: BlockID.molecularSealant, data: 0}
            }]
        },
        preLink: "mechanic_main",
        nextLink: "msg"
    }
});




// file: guide/pages/mechanic/sealant/2.js

ModAPI.addAPICallback("GuideAPI", function(){
    pages["msg"] = {
        left:{
            controller: Ctrl.BASIC_PAGE,
            elements:[
                {text: String.t("The use of molecular sealer."), color: UIColor.CYAN, bold: true, size: 20},
                {text: String.t("The operation of this mechanism is fully automatic, you just need to maintain working conditions."), size: 14, color: Ncolor},
                {text: String.t("This is the only mechanism that consumes QE-energy."), size: 14, color: Ncolor},
                {text: String.t("In order for the mechanism to accept QE-energy, you need to connect a wire to it to the upper side."), size: 14, underline: true, color: Ncolor},
                {text: String.t("The mechanism itself begins to work when the energy inside it is greater than 0."), size: 14, color: Ncolor}    
            ]
        },
        right:{
            controller: Ctrl.BASIC_PAGE,
            elements:[
                {text: ""},
                {text: "Редстоун-сигнал останавливает работу механизма, но при этом он по прежнему сможет принимать в себя энергию.", size: 15, color: Ncolor}
            ]
        },
        preLink: "mgm",
        nextLink: "mechanic_main"
    }
});




// file: guide/pages/mechanic/reenactor/1.js

ModAPI.addAPICallback("GuideAPI", function(){
    pages["mrm"] = {
        left:{
            controller: Ctrl.ITEM_PAGE,
            items:[
                {id: BlockID.matterReenactor, data: 0}
            ],
            elements:[
                {text: String.t("He accepts ordinary matter and any object, the data of which he will transmit to matter and will issue reconstructed matter."), size: 15, color: Ncolor},
                {text: String.t("Reconstructed matter is used in a molecular transducer."), size: 13, color: Ncolor}
            ]
        },
        right:{
            controller: Ctrl.GRID_3x3_PAGE,
            recipes:[{
                grid:[["t", "d", "t"], ["r", "c", "r"], ["t", "s", "t"]],
                materials:{
                    "t":{id: BlockID.blockLead, data: 0},
                    "d":{id: ItemID.quantomDetectorChip, data: 0},
                    "r":{id: 331, data: 0},
                    "c":{id: ItemID.splitterChip, data: 0},
                    "s":{id: ItemID.crystalSapphire, data: 0}
                },
                result:{id: BlockID.matterReenactor, data: 0}
            }],
            title: Translation.translate("Matter Reenactor")
        },
        preLink: "mechanic_main",
        nextLink: "mrg"
    }
});




// file: guide/pages/mechanic/reenactor/2.js

ModAPI.addAPICallback("GuideAPI", function(){
    pages["mrg"] = {
        left:{
            controller: Ctrl.BASIC_PAGE,
            elements:[
                {text: String.t("Use of matter re-constructor"), color: UIColor.CYAN, bold: true, size: 20},
                {text: String.t("To understand the mechanism - just open it and look at the panel below."), size: 14, color: Ncolor},
                {text: String.t("The red and yellow text indicates that the mechanism is lacking for work."), size: 14, color: Ncolor}
            ]
        },
        preLink: "mrm",
        nextLink: "mechanic_main"
    }
});




// file: guide/pages/mechanic/converter/1.js

ModAPI.addAPICallback("GuideAPI", function(){
    pages["mcm"] = {
        left:{
            controller: Ctrl.ITEM_PAGE,
            items:[
                {id: BlockID.molecularConverter, data: 0}
            ],
            elements:[
                {text: String.t("Turns reconstructed matter into objects."), size: 14, color: Ncolor}
            ]
        },
        right:{
            controller: Ctrl.GRID_3x3_PAGE,
            title: Translation.translate("Molecular Converter"),
            recipes:[{
                grid:[["t", "s", "t"], ["r", "s", "r"], ["t", "d", "t"]],
                result:{id: BlockID.molecularConverter, data: 0},
                materials:{
                    "t":{id: BlockID.blockLead, data: 0},
                    "s":{id: ItemID.crystalSapphire, data: 0},
                    "r":{id: 331, data: 0},
                    "c":{id: ItemID.densityControllerChip, data: 0},
                    "d":{id: 264, data: 0}
                }
            }]
        },
        preLink: "mechanic_main",
        nextLink: "mcg"
    }
});




// file: guide/pages/mechanic/converter/2.js

ModAPI.addAPICallback("GuideAPI", function(){
    pages["mcg"] = {
        left:{
            controller: Ctrl.BASIC_PAGE,
            elements:[
                {text: String.t("Using molecular converter"), size: 20, color: UIColor.CYAN},
                {text: String.t("The information panel in the mechanism window displays the current state of the mechanism and helps to understand how the mechanism works."), size: 14, color: Ncolor},
                {text: String.t("As a result, you will receive an item that was as a result of the reconstruction of matter."), size: 14, color: Ncolor}
            ]
        },
        right:{
            controller: Ctrl.BASIC_PAGE,
            elements:[
                {text: String.t("At the exit you will receive the item that was recorded in the reconstructed matter."), size: 15, color: Ncolor}
            ]
        },
        preLink: "mcm",
        nextLink: "mechanic_main"
    }
});




// file: guide/pages/mechanic/lab/1.js

ModAPI.addAPICallback("GuideAPI", function(){
    pages["lbm"] = {
        left:{
            controller: Ctrl.ITEM_PAGE,
            items:[
                {id: BlockID.labBlock, data: 0}
            ],
            elements:[
                {text: String.t("The only source of chips"), size: 20, color: Ncolor}
            ]
        },
        right:{
            controller: Ctrl.GRID_3x3_PAGE,
            title: Translation.translate("Laboratory Block"),
            recipes:[{
                grid:[["s", "g", "s"], ["i", "r", "i"], ["r", "d", "r"]],
                materials:{
                    "s":{id: ItemID.crystalSapphire, data: 0},
                    "d":{id: 54, data: 0},
                    "i":{id: 42, data: 0},
                    "r":{id: 152, data: 0},
                    "g":{id: 20, data: 0}
                },
                result: {id: BlockID.labBlock, data: 0}
            }]
        },
        preLink: "mechanic_main",
        nextLink: "lbg"
    }
});




// file: guide/pages/mechanic/lab/2.js

ModAPI.addAPICallback("GuideAPI", function(){
    pages["lbg"] = {
        left:{
            controller: Ctrl.BASIC_PAGE,
            elements:[
                {text: String.t("For the mechanism to work, you need to: keep the mechanism charged with energy and place the research chips in the upper slot."), size: 14, color: Ncolor}
            ]
        },
        preLink: "lbm",
        nextLink: "mechanic_main"
    }
});




// file: guide/pages/items/main.js

ModAPI.addAPICallback("GuideAPI", function(){
    pages["items_main"] = {
        left:{
            controller: Ctrl.BASIC_PAGE,
            elements:[
                {text: Translation.translate("Matter"), color: Lcolor, size: 20, link: "matter", underline: true},
                {text: String.t("Chips"), color: Lcolor, size: 20, color: Lcolor, link: "chips", underline: true},    
                {text: String.t("Cores"), color: Lcolor, size: 20, color: Lcolor, link: "cores", underline: true},
                {text: String.t("Nuggets"), color: Lcolor, size: 20, color: Lcolor, link: "nuggets", underline: true},
                {text: String.t("Photovailtaic Cell"), color: Lcolor, size: 20, color: Lcolor, link: "PhotovailtaicCell", underline: true}
            ]
        },
        preLink: "default"
    }
});




// file: guide/pages/items/matter.js

ModAPI.addAPICallback("GuideAPI", function(){
    pages["matter"] = {
        left:{
            controller: Ctrl.ITEM_PAGE,
            items:[
                {id: ItemID.Oresmatter, data: 0}
            ],
            elements:[
                {text: String.t("Matter"), color: Ncolor, size: 20, bold: true},
                {text: String.t("Receiving:"), color: Ncolor, size: 14, underline: true},
                {text: Translation.translate("Molecular Sealant"), color: Ncolor, size: 17, bold: true, link: "msm"},
                {text: String.t("Application:"), color: Ncolor, size: 14, underline: true},
                {text: Translation.translate("Matter Reenactor"), color: Ncolor, size: 17, bold: true, link: "mrm"}
            ]
        },
        right:{
            controller: Ctrl.ITEM_PAGE,
            items:[
                {id: ItemID.rebuiltMatter, data: 0}
            ],
            elements:[
                {text: String.t("Rebuilt Matter"), color: Ncolor, size: 20, bold: true},
                {text: String.t("Receiving:"), color: Ncolor, size: 14, underline: true},
                {text: Translation.translate("Matter Reenactor"), color: Ncolor, size: 17, bold: true, link: "mrm"},
                {text: String.t("Application:"), color: Ncolor, size: 14, underline: true},
                {text: Translation.translate("Molecular Converter"), color: Ncolor, size: 17, bold: true, link: "mcm"}
            ]
        },
        preLink: "items_main"
    }
});




// file: guide/pages/items/chips.js

ModAPI.addAPICallback("GuideAPI", function(){
    pages["chips"] = {
        preLink: "items_main",
        left:{
            controller: Ctrl.ITEM_PAGE,
            items:[
                {id: ItemID.researchChip, data: 0},
                {id: ItemID.burntChip, data: 0},
                {id: ItemID.splitterChip, data: 0},
                {id: ItemID.quantomDetectorChip, data: 0},
                {id: ItemID.densityControllerChip, data: 0},
                {id: ItemID.matteryDrive, data: 0}
            ],
            elements:[
                {text: String.t("Chips"), color: Ncolor, size: 20, bold: true},
                {text: String.t("Receiving:"), color: Ncolor, size: 14, underline: true},
                {text: Translation.translate("Laboratory Block"), color: Ncolor, size: 17, bold: true, link: "lbm"},
                {text: String.t("Application:"), color: Ncolor, size: 14, underline: true},
                {text: String.t("Creating mechanisms"), color: Ncolor, size: 17, bold: true}
            ]
        },
        right:{
            controller: Ctrl.GRID_3x3_PAGE,
            title: Translation.translate("Research Chip"),
            recipes:[{
                grid:[["t", "r", "t"], ["r", "s", "r"], ["t", "r", "t"]],
                materials:{
                    "t":{id: ItemID.ingotLead, data: 0},
                    "r":{id: 331, data: 0},
                    "s":{id: 265, data: 0}
                },
                result:{id: ItemID.researchChip, count: 4, data: 0}
            }]
        }
    }
});




// file: guide/pages/items/cores.js

ModAPI.addAPICallback("GuideAPI", function(){
    pages["cores"] = {
        left:{
            controller: Ctrl.ITEM_PAGE,
            items:[
                {id: ItemID.solarCoreLeadstone, data: 0},
                {id: ItemID.solarCoreHardent, data: 0},
                {id: ItemID.solarCoreRedstone, data: 0},
                {id: ItemID.solarCoreResonant, data: 0},
                {id: ItemID.solarCoreAdvanced, data: 0},
                {id: ItemID.solarCoreUltimate, data: 0}
            ],
            elements:[
                {text: String.t("Used in the creation of solar panels"), size: 15, bold: true, color: Ncolor}
            ]
        },
        right:{
            controller: Ctrl.GRID_3x3_PAGE,
            title: "",
            recipes:[{
                grid:[["o", "n", "o"], ["n", "i", "n"], ["o", "n", "o"]],
                materials:{
                    "i":{id: 265, data: 0},
                    "n":{id: ItemID.nuggetLead, data: 0}
                },
                result:{id: ItemID.solarCoreLeadstone, data: 0}
            }],
            elements:[
                {text: String.t("To find out the recipe for higher level kernels, put the core one level less in inventory and open the inventory."), color: Ncolor, size: 20, underline: true},
                {text: String.t("For example, to find out the recipe for the core of a hardened solar panel - take the lead core and open the workbench."), color: Ncolor, size: 16}
            ]
        },
        preLink: "items_main"
    }
});




// file: guide/pages/items/nuggets.js

ModAPI.addAPICallback("GuideAPI", function(){
    pages["nuggets"] = {
        left:{
            controller: Ctrl.ITEM_PAGE,
            items:[
                {id: ItemID.shardLapis, data: 0},
                {id: ItemID.nuggetLead, data: 0},
                {id: ItemID.nuggetElectrum, data: 0},
                {id: ItemID.nuggetUranium, data: 0},
                {id: ItemID.nuggetMistery, data: 0},
                {id: ItemID.nuggetIron, data: 0}
            ],
            elements:[
                {text: "Большинство самородков получаются из одноименных полноценных слитков (в случае с лазуритовым осколком - это целый лазурит), кроме неопознанного и электроумового самородков", size: 14, underline: true, color: Ncolor}
            ]
        },
        right:{
            controller: Ctrl.GRID_3x3_PAGE,
            title: "",
            recipes: [{
                grid:[["o", "g", "o"], ["r", "s", "r"], ["o", "g", "o"]],
                materials:{
                    "s":{id: ItemID.nuggetLead, data: 0},
                    "r":{id: 331, data: 0},
                    "g":{id: 371, data: 0},
                    "o":{id: 0}
                },
                result:{id: ItemID.nuggetElectrum, data: 0}
            }, {
                grid:[["o", "e", "o"], ["d", "s", "d"], ["o", "e", "o"]],
                materials:{
                    "o":{id: 49, data: 0},
                    "d":{id: 264, data: 0},
                    "s":{id: ItemID.crystalSapphire, data: 0},
                    "e":{id: ItemID.nuggetElectrum, data: 0},
                    "o":{id: 0}
                },
                result:{id: ItemID.nuggetMistery, data: 0}
            }]
        },
        preLink: "items_main"
    }
});




// file: guide/pages/items/PhotovailtaicCell.js

ModAPI.addAPICallback("GuideAPI", function(){
    pages["PhotovailtaicCell"] = {
        left:{
            controller: Ctrl.ITEM_PAGE,
            items:[
                {id: ItemID.cellPhotovailtaic, data: 0}
            ],
            elements:[
                {text: String.t("Application:"), color: Ncolor, size: 14, underline: true},
                {text: String.t("Creating mechanisms"), color: Ncolor, size: 17, bold: true}
            ]
        },
        right:{
            controller: Ctrl.GRID_3x3_PAGE,
            title: String.t("Photovailtaic Cell"),
            recipes:[{
                grid:[["g", "g", "g"], ["l", "l", "l"], ["i", "i", "i"]],
                materials:{
                    "g":{id: 102, data: 0},
                    "l":{id: ItemID.shardLapis, data: 0},
                    "i":{id: ItemID.nuggetIron, data: 0}
                },
                result: {id: ItemID.cellPhotovailtaic, data: 0}
            }]
        },
        preLink: "items_main"
    }
});




// file: message.js

var newGame = true;
Callback.addCallback("LevelLoaded", function(){
    if(newGame){
        Game.message("                               (Ores Mod v.2.5.0.1)");
        Game.message("                             отдельная благодарность");
        Game.message(Translation.translate("§5Maksim Kievsky: §2detected a problem with a block drop. §114.02.2018 §9version 2.0.1"));
        Game.message(Translation.translate("§5miron27khv: §4created 90% of texture mod. §9Was taken to the development team since version 2.2.3"));
        Game.message(Translation.translate("§4ripemc: §6 noticed a bug with integration with IC². §214.04.2019 §9version 2.4.5.3"));
        //Game.message(Translation.translate("§5BrassyFaNToM: §7 reported an error with most of the mechanisms. §C08.06.2019 §9 Versions §b3§f.§70"));
        Game.message(Translation.translate("This message can be disabled by disabling the show_helpers_message parameter in the config (games/com.mojang/mods/ores/config.json)"));
        Debug.warning(Translation.translate("Do not open the workbench items from mods - it will lead to the crash!"));
        Player.addItemToInventory(ItemID.oresModGuideBook, 1, 0);
    }
});

Saver.addSavesScope("book",
    function read(scope) {
        if(scope&&scope.amount) newGame = false;
    },
    
    function save() {
        return {amount: "Жека (не)пидор"};
    }
);




// file: shared.js

ModAPI.registerAPI("OresAPI", {
    OresAPI:OresAPI,
    solarPanelAPI:SolarPanel,
    woodIncubator:WoodIncubatorRecipes,
    reguireGlobal:function(c){
        return eval(c)
    }
});

function p(type, x, y, z, radius){
    for(var pitch = -Math.PI/2; pitch < Math.PI/2; pitch += .02){
        for(var a = 0; a < 5; a++){
            let yaw = toRadians(random(0, 360));
            let px = x + Math.sin(yaw) * Math.cos(pitch) * radius;
            let py = y + Math.abs(Math.sin(pitch) * radius);
            let pz = z + Math.cos(yaw) * Math.cos(pitch) * radius;
            Particles.addParticle(type, px, py, pz, 0, 0, 0);
        }
    }
}

var toRadians = java.lang.Math.toRadians;



Callback.addCallback("ItemUse", function(coords, item, block){
    let x = coords.relative.x;
    let y = coords.relative.y;
    let z = coords.relative.z; 
    
    //p(Native.ParticleType.flame, x, y, z, 5); 
});




