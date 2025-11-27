IDRegistry.genItemID("staticboots");
Item.createArmorItem("staticboots", "Static Boots", {name: "rubber_boots"}, {type: "boots", armor: 4, durability: 625, texture: "armor/rubber_1.png", isTech: false});
ChargeItemRegistry.registerItem(ItemID.staticboots, "Eu", -1, 10);

Recipes.addShaped({id: ItemID.staticboots, count: 1, data: Item.getMaxDamage(ItemID.staticboots)}, [
	" a ",
	" b ",
    "xxx"
], ['a', 309, 0, 'b', 35, 0, 'x', ItemID.cableCopper1, 0],
ChargeItemRegistry.transportEnergy);

function registerBOOTS(id, level, tranfer){
 Armor.registerFuncs(id, {
  hurt: function(){
   return false;
  },
  tick: function(slot, index, maxDamage){
   return STATIC_BOOTS(slot, maxDamage, level, tranfer);
  }
 });
}

 var STATIC_BOOTS = function(slot, maxDamage, level, transfer){
 if(World.getThreadTime()%20==0){
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
registerBOOTS("staticboots", 3, 1);