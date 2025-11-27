IDRegistry.genItemID("arrowrod");
Item.createItem("arrowrod", "Wand of Arrow fury", {name: "arrow_rod", meta: 0}, {stack: 1});
Item.setGlint(ItemID.arrowrod, true);
ChargeItemRegistry.registerItem(ItemID.arrowrod, 2000, 0, true, true);
var FIREBALLWAN_DURABILITY = 2001;
		
Item.registerUseFunctionForID(ItemID.arrowrod, function(coords, item, block){ 
if(item.data + 50 <= Item.getMaxDamage(ItemID.arrowrod)){
 var arrow = Entity.spawn(coords.x, coords.y + 2, coords.z, Native.EntityType.ARROW);
 var arrow2 = Entity.spawn(coords.x - 1, coords.y + 2, coords.z, Native.EntityType.ARROW);
 var arrow3 = Entity.spawn(coords.x + 1, coords.y + 2, coords.z, Native.EntityType.ARROW);
         Entity.moveToAngle(arrow, Entity.getLookAngle(Player.get()), {speed: 5.5});
         Entity.moveToAngle(arrow2, Entity.getLookAngle(Player.get()), {speed: 5.5});
         Entity.moveToAngle(arrow3, Entity.getLookAngle(Player.get()), {speed: 5.5});
         item.data = Math.min(item.data+200, FIREBALLWAN_DURABILITY);
		Player.setCarriedItem(item.id, 1, item.data);
}} );
