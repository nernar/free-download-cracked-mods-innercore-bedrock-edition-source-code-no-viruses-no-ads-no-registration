IDRegistry.genItemID("exostaticboots");
Item.createArmorItem("exostaticboots", "Static boots", {name: "exostatic"}, {type: "boots", armor: 0, durability: 625, texture: "armor/exostatic_1.png", isTech: false});
ChargeItemRegistry.registerItem(ItemID.exostaticboots, "Eu", -1, 3);

Recipes.addShaped({id: ItemID.exostaticboots, count: 1, data: Item.getMaxDamage(ItemID.exostaticboots)}, ["bab","b b"], ['a', ItemID.staticboots, -1, 'b', ItemID.Exo, 0],ChargeItemRegistry.transportEnergy);

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
registerBOOTS("exostaticboots", 3, 1);