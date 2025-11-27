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

