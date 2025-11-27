IDRegistry.genItemID("fireballwand");
Item.createItem("fireballwand", "Wand of Fireball", {name: "fireballwand", meta: 0}, {stack: 1});
Item.setGlint(ItemID.fireballwand, true);
ChargeItemRegistry.registerItem(ItemID.fireballwand, 2000, 0, true, true);
var FIREBALLWAND_DURABILITY = 2001;
		
Item.registerUseFunctionForID(ItemID.fireballwand, function(coords, item, block){ 
if(item.data + 50 <= Item.getMaxDamage(ItemID.fireballwand)){
 var fireball = Entity.spawn(coords.x, coords.y + 2, coords.z, Native.EntityType.FIREBALL);
         Entity.moveToAngle(fireball, Entity.getLookAngle(Player.get()), {speed: 0.5});
         item.data = Math.min(item.data+200, FIREBALLWAND_DURABILITY);
		Player.setCarriedItem(item.id, 1, item.data);
}} );
