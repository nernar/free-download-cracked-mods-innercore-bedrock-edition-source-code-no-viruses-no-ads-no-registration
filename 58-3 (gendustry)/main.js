/*
BUILD INFO:
  dir: dev
  target: main.js
  files: 8
*/



// file: header.js

/*
┏━━┓╋╋╋╋╋┏┓╋┏━┳┓╋╋╋╋╋
┃┏━╋━┳━┳┳┛┣┳┫━┫┗┳┳┳┳┓
┃┗┓┃┻┫┃┃┃╋┃┃┣━┃┏┫┏┫┃┃
┗━━┻━┻┻━┻━┻━┻━┻━┻┛┣┓┃
╋╋╋╋╋╋╋╋╋╋╋╋╋╋╋╋╋╋┗━┛
Gendustry PE by NikuJagajaga(https://vk.com/nkjgjg)
*/

importLib("energylib", "*");
const RF = EnergyTypeRegistry.assureEnergyType("RF", .25);




// file: item.js

const regItem = function(id, name){
  IDRegistry.genItemID(id);
  Item.createItem(id, name, {name: id});
};
regItem("labware", "Genetics Labware");
regItem("upgPlain", "Plains Emulation Upgrade");
regItem("upgLight", "Light Upgrade");
regItem("upgFlower", "Flowering Upgrade (not working)");
regItem("upgWinter", "Winter Emulation Upgrade");
regItem("upgDry", "Dryer Upgrade");
regItem("upgAuto", "Automation Upgrade");
regItem("upgHumidify", "Humidifier Upgrade");
regItem("upgHell", "Hell Emulation Upgrade");
regItem("upgPollen", "Pollen Scrubber Upgrade");
regItem("upgDesert", "Desert Emulation Upgrade");
regItem("upgCool", "Cooler Upgrade");
regItem("upgLife", "Lifespan Upgrade");
regItem("upgSeal", "Seal Upgrade");
regItem("upgGen", "Genetic Stabilizer Upgrade");
regItem("upgJungle", "Jungle Emulation Upgrade");
regItem("upgTerritory", "Territory Upgrade (not working)");
regItem("upgOcean", "Ocean Emulation Upgrade");
regItem("upgSky", "Open Sky Upgrade");
regItem("upgHeat", "Heater Upgrade");
regItem("upgSieve", "Sieve Upgrade (not working)");
regItem("upgProduct", "Production Upgrade");
regItem("mutagenTank", "Mutagen Tank");
regItem("beeReceptacle", "Bee Receptacle");
regItem("powModule", "Power Module");
regItem("genProcessor", "Genetics Processor");
regItem("envProcessor", "Environmental Processor");
regItem("upgFrame", "Upgrade Frame");
regItem("climateModule", "Climate Control Module");

IDRegistry.genItemID("bucketMutagen");
Item.createItem("bucketMutagen", "Mutagen bucket", {name: "bucketMutagen"}, {stack: 1});
IDRegistry.genItemID("canMutagen");
Item.createItem("canMutagen", "Mutagen Can", {name: "canMutagen"});
LiquidRegistry.registerLiquid("mutagen", "Mutagen", ["liquid_mutagen"]);
LiquidRegistry.registerItem("mutagen", {id: 325, data: 0}, {id: ItemID.bucketMutagen, data: 0});
LiquidRegistry.registerItem("mutagen", {id: ItemID.canEmpty, data: 0}, {id: ItemID.canMutagen, data: 0});

Callback.addCallback("PostLoaded", function(){
  Recipes.addShaped({id: ItemID.genProcessor},
    ["aba", "bcb", "aba"], [
    "a", 264, 0,
    "b", 406, 0,
    "c", 368, 0
  ]);
  Recipes.addShaped({id: ItemID.envProcessor},
    ["aba", "bcb", "aba"], [
    "a", 264, 0,
    "b", 351, 4,
    "c", 266, 0
  ]);
  Recipes.addShaped({id: ItemID.mutagenTank},
    ["aba", "aba", "aba"], [
    "a", ItemID.ingotTin, 0,
    "b", 102, 0
  ]);
  Recipes.addShaped({id: ItemID.powModule},
    ["aba", "cdc", "aba"], [
    "a", ItemID.gearBronze, 0,
    "b", 266, 0,
    "c", 33, -1,
    "d", 331, 0
  ]);
  Recipes.addShaped({id: ItemID.beeReceptacle},
    ["aaa", "aba", "cdc"], [
    "a", ItemID.ingotBronze, 0,
    "b", 102, 0,
    "c", 331, 0,
    "d", 147, 0
  ]);
  Recipes.addShaped({id: ItemID.climateModule},
    ["aba", "aca", "aba"], [
    "a", ItemID.ingotBronze, 0,
    "b", 331, 0,
    "c", ItemID.gearBronze, 0
  ]);
  Recipes.addShaped({id: ItemID.labware, count: 16},
    ["aoa", "aoa", "obo"], [
    "a", 102, 0,
    "b", 264, 0
  ]);
  Recipes.addShaped({id: ItemID.upgFrame},
    ["aba", "coc", "aba"], [
    "a", ItemID.ingotTin, 0,
    "b", 371, 0,
    "c", 331, 0
  ]);
  Recipes.addShaped({id: ItemID.upgLight},
    ["aba", "bcb", "aba"], [
    "a", 348, 0,
    "b", 20, 0,
    "c", ItemID.upgFrame, 0
  ]);
  Recipes.addShaped({id: ItemID.upgFlower},
    ["abc", "ded", "fff"], [
    "a", 351, 1,
    "b", 351, 4,
    "c", 351, 2,
    "d", 351, 11,
    "e", ItemID.upgFrame, 0,
    "f", 20, 0
  ]);
  Recipes.addShaped({id: ItemID.upgAuto},
    ["oao", "bcb", "odo"], [
    "a", ItemID.gearBronze, 0,
    "b", 331, 0,
    "c", ItemID.upgFrame, 0,
    "d", 33, -1
  ]);
  Recipes.addShaped({id: ItemID.upgSeal},
    ["aba", "bcb", "aba"], [
    "a", ItemID.beeswax, 0,
    "b", 20, 0,
    "c", ItemID.upgFrame, 0
  ]);
  Recipes.addShaped({id: ItemID.upgLife},
    ["aba", "bcb"], [
    "a", 376, 0,
    "b", 20, 0,
    "c", ItemID.upgFrame, 0
  ]);
  Recipes.addShaped({id: ItemID.upgSky},
    ["aaa", "bcb", "bbb"], [
    "a", 351, 4,
    "b", 20, 0,
    "c", ItemID.upgFrame, 0
  ]);
  Recipes.addShaped({id: ItemID.upgTerritory},
    ["aoa", "obo", "aoa"], [
    "a", 265, 0,
    "b", ItemID.upgFrame, 0
  ]);
  Recipes.addShaped({id: ItemID.upgSieve},
    ["aaa", "aba", "aca"], [
    "a", ItemID.silkWisp, 0,
    "b", ItemID.upgFrame, 0,
    "c", ItemID.gearBronze, 0
  ]);
  Recipes.addShaped({id: ItemID.upgProduct},
    ["aba", "cdc", "aea"], [
    "a", ItemID.ingotBronze, 0,
    "b", ItemID.royalJelly, 0,
    "c", 353, 0,
    "d", ItemID.upgFrame, 0,
    "e", ItemID.gearBronze, 0
  ]);
  Recipes.addShaped({id: ItemID.upgGen},
    ["aba", "bcb", "aba"], [
    "a", ItemID.gearBronze, 0,
    "b", ItemID.silkWisp, 0,
    "c", ItemID.upgFrame, 0
  ]);
  Recipes.addShaped({id: ItemID.upgPollen},
    ["oao", "bcb", "obo"], [
    "a", ItemID.genProcessor, 0,
    "b", 331, 0,
    "c", ItemID.upgFrame, 0
  ]);
  Recipes.addShaped({id: ItemID.upgDry},
    ["aaa", "bcb", "bdb"], [
    "a", 12, -1,
    "b", ItemID.ingotBronze, 0,
    "c", ItemID.upgFrame, 0,
    "d", ItemID.climateModule, 0
  ]);
  Recipes.addShaped({id: ItemID.upgHumidify},
    ["aaa", "bcb", "bdb"], [
    "a", 338, 0,
    "b", ItemID.ingotBronze, 0,
    "c", ItemID.upgFrame, 0,
    "d", ItemID.climateModule, 0
  ]);
  Recipes.addShaped({id: ItemID.upgHeat},
    ["aaa", "bcb", "bdb"], [
    "a", 87, 0,
    "b", ItemID.ingotBronze, 0,
    "c", ItemID.upgFrame, 0,
    "d", ItemID.climateModule, 0
  ]);
  Recipes.addShaped({id: ItemID.upgCool},
    ["aaa", "bcb", "bdb"], [
    "a", 332, 0,
    "b", ItemID.ingotBronze, 0,
    "c", ItemID.upgFrame, 0,
    "d", ItemID.climateModule, 0
  ]);
  Recipes.addShaped({id: ItemID.upgHell},
    ["aba", "cdc", "aea"], [
    "a", ItemID.gearBronze, 0,
    "b", ItemID.climateModule, 0,
    "c", 377, 0,
    "d", ItemID.upgFrame, 0,
    "e", ItemID.envProcessor, 0
  ]);
  Recipes.addShaped({id: ItemID.upgPlain},
    ["aba", "cdc", "aea"], [
    "a", ItemID.gearBronze, 0,
    "b", ItemID.climateModule, 0,
    "c", 2, 0,
    "d", ItemID.upgFrame, 0,
    "e", ItemID.envProcessor, 0
  ]);
  Recipes.addShaped({id: ItemID.upgJungle},
    ["aba", "cdc", "aea"], [
    "a", ItemID.gearBronze, 0,
    "b", ItemID.climateModule, 0,
    "c", 106, 0,
    "d", ItemID.upgFrame, 0,
    "e", ItemID.envProcessor, 0
  ]);
  Recipes.addShaped({id: ItemID.upgDesert},
    ["aba", "cdc", "aea"], [
    "a", ItemID.gearBronze, 0,
    "b", ItemID.climateModule, 0,
    "c", 12, -1,
    "d", ItemID.upgFrame, 0,
    "e", ItemID.envProcessor, 0
  ]);
  Recipes.addShaped({id: ItemID.upgWinter},
    ["aba", "cdc", "aea"], [
    "a", ItemID.gearBronze, 0,
    "b", ItemID.climateModule, 0,
    "c", 80, 0,
    "d", ItemID.upgFrame, 0,
    "e", ItemID.envProcessor, 0
  ]);
  Recipes.addShaped({id: ItemID.upgOcean},
    ["aba", "cdc", "aea"], [
    "a", ItemID.gearBronze, 0,
    "b", ItemID.climateModule, 0,
    "c", 325, 8,
    "d", ItemID.upgFrame, 0,
    "e", ItemID.envProcessor, 0
  ]);
});




// file: machine/producer/gui.js

const producerGUI = new UI.StandartWindow({
  standart: {
    header: {text: {text: "Mutagen Producer"}},
    inventory: {standart: true},
    background: {standart: true}
  },
  drawing: [
    {type: "bitmap", x: 400, y: 80, bitmap: "gd_energy_0", scale: 3.2},
    {type: "bitmap", x: 630, y: 155, bitmap: "gd_progress_0", scale: 3.2},
    {type: "bitmap", x: 800, y: 80, bitmap: "liquid_background", scale: 3.2}
  ],
  elements: {
    "energy": {type: "scale", x: 403, y: 84, direction: 1, value: 0, bitmap: "gd_energy_1", scale: 3.2},
    "progress": {type: "scale", x: 630, y: 155, value: 0, bitmap: "gd_progress_1", scale: 3.2},
    "liquid": {type: "scale", x: 803, y: 84, direction: 1, value: 0, bitmap: "liqued_background_2", scale: 3.2},
    "slot": {type: "slot", x: 530, y: 150}
  }
});




// file: machine/producer/tile.js

IDRegistry.genBlockID("producer");
Block.createBlock("producer", [{name: "Mutagen Producer", texture: [["gdmachine", 0], ["producer", 0], ["producer", 1]], inCreative: true}]);
ToolAPI.registerBlockMaterial(BlockID.producer, "stone");
ICRender.getGroup("rf-wire").add(BlockID.producer, -1);

const rec = {
  331: .1,
  152: .9,
  348: .2,
  89: .8,
};
rec[ItemID.uraniumChunk] = .5;
rec[BlockID.blockUranium] = 4.5;

TileEntity.registerPrototype(BlockID.producer, {
  defaultValues: {
    energy: 0,
    progress: 0
  },
  energyTick: function(type, src){
    this.data.energy += src.get(5e6-this.data.energy);
  },
  getGuiScreen: function(){
    const empty = Player.getCarriedItem();
    if(empty.id == 325 && !empty.data || empty.id == ItemID.canEmpty){
      if(this.liquidStorage.getAmount("mutagen") >= 1){
        const full = LiquidRegistry.getFullItem(empty.id, empty.data, "mutagen");
        this.liquidStorage.getLiquid("mutagen", 1);
        Player.decreaseCarriedItem();
        Player.addItemToInventory(full.id, 1, full.data);
      }
    }
    else return producerGUI;
  },
  getTransportSlots: function(){
    return {input: ["slot"]};
  },
  init: function(){
    this.liquidStorage.setLimit(null, 10);
  },
  tick: function(){
    const slot = this.container.getSlot("slot");
    const result = rec[slot.id];
    if(result && this.data.energy >= 500){
      this.data.energy -= 500;
      this.data.progress++;
      if(this.data.progress >= 2e3 && this.liquidStorage.getAmount("mutagen")+result <= 10){
        slot.count--;
        this.container.validateSlot("slot");
        this.liquidStorage.addLiquid("mutagen", result);
        this.data.progress = 0;
      }
    }
    else this.data.progress = 0;
    this.container.setScale("energy", this.data.energy/5e6);
    this.container.setScale("progress", this.data.progress/2e3);
    this.liquidStorage.updateUiScale("liquid", "mutagen");
  }
});

EnergyTileRegistry.addEnergyTypeForId(BlockID.producer, RF);

Callback.addCallback("PostLoaded", function(){
  Recipes.addShaped({id: BlockID.producer},
    ["aba", "cdc", "efe"], [
    "a", ItemID.ingotBronze, 0,
    "b", 410, 0,
    "c", ItemID.powModule, 0,
    "d", ItemID.sturdyMachine, 0,
    "e", ItemID.gearBronze, 0,
    "f", ItemID.mutagenTank, 0
  ]);
});




// file: machine/mutatron/gui.js

const mutatronGUI = new UI.StandartWindow({
  standart: {
    header: {text: {text: "Mutatron"}},
    inventory: {standart: true},
    background: {standart: true}
  },
  drawing: [
    {type: "bitmap", x: 400, y: 80, bitmap: "gd_energy_0", scale: 3.2},
    {type: "bitmap", x: 480, y: 80, bitmap: "liquid_background", scale: 3.2},
    {type: "bitmap", x: 690, y: 155, bitmap: "gd_progress_0", scale: 3.2}
  ],
  elements: {
    "energy": {type: "scale", x: 403, y: 84, direction: 1, value: 0, bitmap: "gd_energy_1", scale: 3.2},
    "liquid": {type: "scale", x: 483, y: 84, direction: 1, value: 0, bitmap: "liqued_background_2", scale: 3.2},
    "progress": {type: "scale", x: 690, y: 155, value: 0, bitmap: "gd_progress_1", scale: 3.2},
    "slotLabware": {type: "slot", x: 710, y: 80, bitmap: "slot_labware"},
    "slot1": {type: "slot", x: 600, y: 110, bitmap: "slot_princess"},
    "slot2": {type: "slot", x: 600, y: 190, bitmap: "slot_drone"},
    "slotQueen": {type: "slot", x: 850, y: 150}
  }
});




// file: machine/mutatron/tile.js

IDRegistry.genBlockID("mutatron");
Block.createBlock("mutatron", [{name: "Mutatron", texture: [["gdmachine", 0], ["mutatron", 0], ["mutatron", 1]], inCreative: true}]);
ToolAPI.registerBlockMaterial(BlockID.mutatron, "stone");
ICRender.getGroup("rf-wire").add(BlockID.mutatron, -1); 

TileEntity.registerPrototype(BlockID.mutatron, {
  defaultValues: {
    energy: 0,
    progress: 0
  },
  energyTick: function(type, src){
    this.data.energy += src.get(1e6-this.data.energy);
  },
  getGuiScreen: function(){
    const full = Player.getCarriedItem();
    if(LiquidRegistry.getItemLiquid(full.id, full.data) == "mutagen"){
      if(this.liquidStorage.getAmount("mutagen") <= 9){
        const empty = LiquidRegistry.getEmptyItem(full.id, full.data);
        this.liquidStorage.addLiquid("mutagen", 1);
        Player.decreaseCarriedItem();
        Player.addItemToInventory(empty.id, 1, empty.data);
      }
    }
    else return mutatronGUI;
  },
  getTransportSlots: function(){
    return {output: ["slotQueen"]};
  },
  init: function(){
    this.liquidStorage.setLimit(null, 10);
  },
  tick: function(){
    const labware = this.container.getSlot("slotLabware");
    const queen = this.container.getSlot("slotQueen");
    if(labware.id == ItemID.labware && !queen.id){
      if(this.liquidStorage.getAmount("mutagen") >= 1){
        const slot1 = this.container.getSlot("slot1");
        const slot2 = this.container.getSlot("slot2");
        const type1 = !FAPI.BeeRegistry.getBeeTypeByID(slot1.id)?FAPI.BeeRegistry.getTypeByID(slot1.id):0;
        const type2 = FAPI.BeeRegistry.getBeeTypeByID(slot2.id)==1?FAPI.BeeRegistry.getTypeByID(slot2.id):0;
        const com= FAPI.BeeRegistry.getMutations(type1, type2);
        const len = com.length;
        if(len && this.data.energy >= 200){
          this.data.energy -= 200;
          this.data.progress++;
          if(this.data.progress >= 100){
            labware.count--;
            this.container.validateSlot("slotLabware");
            slot1.id = slot1.count = 0;
            slot2.id = slot2.count = 0;
            this.liquidStorage.getLiquid("mutagen", 1);
            const i = FAPI.Util.random(0, len);
            queen.id = FAPI.BeeRegistry.getQueenByType(com[i].result);
            queen.count = 1;
            this.data.progress = 0;
          }
        }
      }
    }
    this.container.setScale("energy", this.data.energy/1e6);
    this.container.setScale("progress", this.data.progress/100);
    this.liquidStorage.updateUiScale("liquid", "mutagen");
  }
});

EnergyTileRegistry.addEnergyTypeForId(BlockID.mutatron, RF);

Callback.addCallback("PostLoaded", function(){
  Recipes.addShaped({id: BlockID.mutatron},
    ["abc", "dea", "afc"], [
    "a", ItemID.beeReceptacle, 0,
    "b", ItemID.genProcessor, 0,
    "c", ItemID.ingotBronze, 0,
    "d", ItemID.powModule, 0,
    "e", ItemID.sturdyMachine, 0,
    "f", ItemID.mutagenTank, 0
  ]);
});




// file: machine/apiary/gui.js

const apiaryGUI = new UI.StandartWindow({
  standart: {
    header: {text: {text: "Industrial Apiary"}},
    inventory: {standart: true},
    background: {standart: true}
  },
  drawing: [
    {type: "bitmap", x: 350, y: 80, bitmap: "gd_energy_0", scale: 3.2},
    {type: "bitmap", x: 580, y: 90, bitmap: "gd_progress_0", scale: 3.2}
  ],
  elements: {
    "energy": {type: "scale", x: 353, y: 84, direction: 1, bitmap: "gd_energy_1", scale: 3.2},
    "progress": {type: "scale", x: 580, y: 90, bitmap: "gd_progress_1", scale: 3.2},
    "slot1": {type: "slot", x: 470, y: 110, bitmap: "slot_princess"},
    "slot2": {type: "slot", x: 470, y: 190, bitmap: "slot_drone"},
    "slotUpg0": {type: "slot", x: 580, y: 160, bitmap: "slot_upg"},
    "slotUpg1": {type: "slot", x: 640, y: 160, bitmap: "slot_upg"},
    "slotUpg2": {type: "slot", x: 580, y: 220, bitmap: "slot_upg"},
    "slotUpg3": {type: "slot", x: 640, y: 220, bitmap: "slot_upg"},
    "slotProduct0": {type: "slot", x: 750, y: 100},
    "slotProduct1": {type: "slot", x: 810, y: 100},
    "slotProduct2": {type: "slot", x: 870, y: 100},
    "slotProduct3": {type: "slot", x: 750, y: 160},
    "slotProduct4": {type: "slot", x: 810, y: 160},
    "slotProduct5": {type: "slot", x: 870, y: 160},
    "slotProduct6": {type: "slot", x: 750, y: 220},
    "slotProduct7": {type: "slot", x: 810, y: 220},
    "slotProduct8": {type: "slot", x: 870, y: 220},
    "text1": {type: "text", x: 345, y: 320, width: 500, height: 30},
    "text2": {type: "text", x: 345, y: 360, width: 500, height: 30}
  }
});




// file: machine/apiary/tile.js

IDRegistry.genBlockID("indApiary");
Block.createBlock("indApiary", [{name: "Industrial Apiary", texture: [["indApiary", 1], ["indApiary", 0], ["indApiary", 1]], inCreative: true}]);
ToolAPI.registerBlockMaterial(BlockID.indApiary, "stone");
ICRender.getGroup("rf-wire").add(BlockID.indApiary, -1); 

TileEntity.registerPrototype(BlockID.indApiary,{
  getGuiScreen: function(){
    return apiaryGUI;
  },
  defaultValues: {
    energy: 0,
    progress: 0,
    progressMax: 0,
    progressCycle: 0
  },
  OUTPUT: ["slotProduct0", "slotProduct1", "slotProduct2", "slotProduct3", "slotProduct4", "slotProduct5", "slotProduct6", "slotProduct7", "slotProduct8"],
  getTransportSlots: function(){
    return {
      input: ["slot2"],
      output: this.OUTPUT
    };
  },
  tick: function(){
    const x = this.x;
    const y = this.y;
    const z = this.z;
    const s1 = this.container.getSlot("slot1");
    const s2 = this.container.getSlot("slot2");
    const upg = {};
    let energy = 20;
    let slotUpg, min4, min8;
    for(let i = 4; i--;){
      slotUpg = this.container.getSlot("slotUpg" + i);
      min4 = Math.min(slotUpg.count, 4);
      min8 = Math.min(slotUpg.count, 8);
      switch(slotUpg.id){
        case ItemID.upgLight:
          upg.light = true;
          energy *= 1.05;
          break;
        case ItemID.upgFlower:
          upg.flower = min8;
          for(let j = min8; j--;)energy *= 1.1;
          break;
        case ItemID.upgAuto:
          upg.auto = true;
          energy *= 1.1;
          break;
        case ItemID.upgSeal:
          upg.seal = true;
          energy *= 1.05;
          break;
        case ItemID.upgLife:
          upg.life = min4;
          for(let j = min4; j--;)energy *= 1.05;
          break;
        case ItemID.upgSky:
          upg.sky = true;
          energy *= 1.05;
          break;
        case ItemID.upgTerritory:
          upg.territory = min4;
          for(let j = min4; j--;)energy *= 1.05;
          break;
        case ItemID.upgSieve:
          upg.sieve = true;
          energy *= 1.25;
          break;
        case ItemID.upgProduct:
          upg.product = min8;
          for(let j = min8; j--;)energy *= 1.2;
          break;
        case ItemID.upgGen:
          upg.gen = true;
          energy *= 2;
          break;
        case ItemID.upgPollen:
          upg.pollen = true;
          energy *= 1.3;
          break;
        case ItemID.upgDry:
          upg.humidity = -min8;
          for(let j = min8; j--;)energy *= 1.25;
          break;
        case ItemID.upgHumidify:
          upg.humidity = min8;
          for(let j = min8; j--;)energy *= 1.25;
          break;
        case ItemID.upgHeat:
          upg.temp = min8;
          for(let j = min8; j--;)energy *= 1.25;
          break;
        case ItemID.upgCool:
          upg.temp = -min8;
          for(let j = min8; j--;)energy *= 1.25;
          break;
        case ItemID.upgHell:
          upg.biome = 8;
          energy *= 1.5;
          break;
        case ItemID.upgPlain:
          upg.biome = 1;
          energy *= 1.2;
          break;
        case ItemID.upgJungle:
          upg.biome = 21;
          energy *= 1.2;
          break;
        case ItemID.upgDesert:
          upg.biome = 2;
          energy *= 1.2;
          break;
        case ItemID.upgWinter:
          upg.biome = 5;
          energy *= 1.2;
          break;
        case ItemID.upgOcean:
          upg.biome = 0;
          energy *= 1.2;
          break;
      }
    }
    this.data.biome_override = "biome" in upg?upg.biome:World.getBiome(this.x, this.z);
    energy = energy|0;

    this.house || (this.house = new FAPI.BeeHouse(this, {
      slotPrincess: "slot1",
      slotDrone: "slot2",
      produceSlots: this.OUTPUT,
      slotPrincessOut: this.OUTPUT,
      slotDronesOut: this.OUTPUT
    }, new FAPI.ModifierList([])));

    this.house.getHumidity = function(){
      let value = FAPI.BiomeHelper.getBiomeHumidity(this.data.biome_override);
      for(let i = upg.humidity<0?-upg.humidity:upg.humidity; i--;)value *= upg.humidity<0?0.75:1.25;
      return value|0;
    };
    this.house.getClimate = function(){
      let value = FAPI.BiomeHelper.getBiomeClimate(this.data.biome_override);
      for(let i = upg.temp<0?-upg.temp:upg.temp; i--;)value *= upg.temp<0?0.75:1.25;
      return value|0;
    };

    this.data.energy >= energy &&
      (this.data.energy -= energy)&
      this.house.tick(new FAPI.ModifierList([{
        getProductionModifier: function(){
          if(upg.pollen)return 0;
          let value = 0.5;
          for(let i = upg.product; i--;)value *= 1.2;
          return value;
        },
        getGeneticDecay: function(){
          return upg.gen?0:1;
        },
        getLifespanModifier: function(){
          let value = 1;
          for(let i = upg.life; i--;)value *= 2/3;
          return value;
        },
        isSealed: function(){
          return upg.seal;
        },
        isSelfLighted: function(){
          return (World.getLightLevel(x, y, z) >= 12 || upg.light) && (World.canSeeSky(x, y, z) || upg.sky);
        }
      }]));

    if(upg.auto && World.getThreadTime()%128 == 0){
      let slot;
      for(let i = 9; i--;){
        slot = this.container.getSlot("slotProduct" + i);
        switch(FAPI.BeeRegistry.getBeeTypeByID(slot.id)){
          case 0:
            !s1.id && (
              s1.id = slot.id,
              s1.data = slot.data,
              s1.count = 1,
              slot.id = slot.data = slot.count = 0
            );
            break;
          case 1:
            (!s2.id || s2.id == slot.id && s2.data == slot.data && s2.count+slot.count <= 64) && (
              s2.id = slot.id,
              s2.data = slot.data,
              s2.count += slot.count,
              slot.id = slot.data = slot.count = 0
            );
            break;
        }
      }
    }

    this.container.validateAll();
    this.container.getGuiContent() &&
      this.container.setScale("energy", this.data.energy / 10000) &
      this.container.setScale("progress", this.data.progress / this.data.progressMax) &
      this.container.setText("text1", "Climate: " + this.house.getClimate() + "  Humidity: " + this.house.getHumidity()) &
      this.container.setText("text2", this.house.error || "");
  },
  energyTick: function(type, src){
    this.data.energy += src.get(10000 - this.data.energy);
  }
});

EnergyTileRegistry.addEnergyTypeForId(BlockID.indApiary, RF);

Callback.addCallback("PostLoaded", function(){
  Recipes.addShaped({id: BlockID.indApiary},
    ["aba", "aca", "ded"], [
    "a", 20, 0,
    "b", ItemID.beeReceptacle, 0,
    "c", ItemID.sturdyMachine, 0,
    "d", ItemID.gearBronze, 0,
    "e", 33, -1
  ]);
});




