MagicRegister.register({
codeName: "MagicHammer",
name: "Magic Hammer",
Texture: "MagicHammer",
maxEssence: 750
});
ChargeItemRegistry.registerItem(ItemID.MagicHammer, 10000, 0, true, true);

Callback.addCallback("DestroyBlock", function(coords, block, player){
if(Entity.getSneaking(Player.get())){
	item=Player.getCarriedItem(true);
	if(item.data + 50 <= Item.getMaxDamage(ItemID.MagicHammer)){
for(var xx = -1; xx <=1; xx++){
for(var yy = -1; yy <=1; yy++){
for(var zz = -1; zz <=1; zz++){
	item=Player.getCarriedItem(true);
if(World.getBlockID(coords.relative.x + xx, coords.relative.y + yy, coords.relative.z + zz) == block.id&&item.id==ItemID.MagicHammer) {
World.destroyBlock(coords.relative.x + xx, coords.relative.y + yy, coords.relative.z + zz, true);
Player.setCarriedItem(item.id, 1, item.data + 50);
}
} 
}}};
}});


