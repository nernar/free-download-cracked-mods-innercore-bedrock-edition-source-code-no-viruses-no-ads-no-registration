IDRegistry.genItemID("ocharm");
Item.createItem("ocharm", "Eye of Ocean", {name: "ocharm", meta: 0}, {stack: 1});
  Item.setGlint(ItemID.ocharm, true);
ChargeItemRegistry.registerItem(ItemID.ocharm, 2500, 0, true, true);
var OCEANCHARM_DURABILITY = 2501;
		
Item.registerUseFunctionForID(ItemID.ocharm, function(coords, item, block){ 
if(item.data + 99 <= Item.getMaxDamage(ItemID.ocharm)){
  Entity.addEffect(Player.get(), 13, 1, 2500, false, false);
         item.data = Math.min(item.data+100, OCEANCHARM_DURABILITY);
		Player.setCarriedItem(item.id, 1, item.data);
}} );
