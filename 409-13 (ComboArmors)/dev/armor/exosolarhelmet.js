IDRegistry.genItemID("exosolar_helmet");
Item.createArmorItem("exosolar_helmet", "Solar helmet", {name: "exosolar"}, {type: "helmet", armor: 0, durability: 1893, texture: "armor/exosolar_1.png", isTech: false});

Recipes.addShaped({id: ItemID.exosolar_helmet, count: 1, data: Item.getMaxDamage(ItemID.exosolar_helmet)}, [
		"bbb",
		"bab"
	], ['a', ItemID.solar_helmet, -1, 'b', ItemID.Exo, 0]);

ChargeItemRegistry.registerItem(ItemID.exosolar_helmet, "Eu", -1, 3);

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
registerHELMET("exosolar_helmet", 3, 1);