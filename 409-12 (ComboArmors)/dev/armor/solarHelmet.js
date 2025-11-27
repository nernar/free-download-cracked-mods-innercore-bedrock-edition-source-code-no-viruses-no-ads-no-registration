IDRegistry.genItemID("solar_helmet");
Item.createArmorItem("solar_helmet", "Solar Helmet", {name: "solar_helmet"}, {type: "helmet", armor: 0, durability: 1893, texture: "armor/solar_1.png", isTech: false});

Recipes.addShaped({id: ItemID.solar_helmet, count: 1, data: Item.getMaxDamage(ItemID.solar_helmet)}, [
		"aaa",
		"axa",
		"ccc"
	], ['a', 265, 0, 'x', BlockID.solarPanel, 0, 'c', ItemID.cableCopper1, 0]);

ChargeItemRegistry.registerItem(ItemID.solar_helmet, "Eu", -1, 3);

function registerHELMET(id, level, tranfer){
 Armor.registerFuncs(id, {
  hurt: function(){
   return false;
  },
  tick: function(slot, index, maxDamage){
   return SOLAR_HELMET(slot, maxDamage, level, tranfer);
  }
 });
}

var getLightLevel = ModAPI.requireGlobal("Level.getBrightness");
 var SOLAR_HELMET = function(slot, maxDamage, level, transfer){
var pos = Player.getPosition();
var light = getLightLevel(Math.floor(pos.x), Math.floor(pos.y+1), Math.floor(pos.z));

var isSunny = World.getWeather().rain < 1 && World.getWeather().thunder < 1;
 if(World.getThreadTime()%20==0 && isSunny && canSeeSky(pos.x, pos.y, pos.z)){
     var item = 
     Player.getArmorSlot(1);
     var energyAdd = ChargeItemRegistry.addEnergyTo(item, "Eu", item.data - 1, transfer*1, level);
     if(energyAdd > 0){
         slot.data += energyAdd;

Player.setArmorSlot(1, item.id, 1, item.data, item.extra);
         return true;
  }
    }
    return false;
}

function canSeeSky(x, y, z){while(y < 127){if(World.getBlockID(x, y, z) > 0) return false; y++;
}
return true;
}
registerHELMET("solar_helmet", 3, 1);