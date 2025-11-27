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