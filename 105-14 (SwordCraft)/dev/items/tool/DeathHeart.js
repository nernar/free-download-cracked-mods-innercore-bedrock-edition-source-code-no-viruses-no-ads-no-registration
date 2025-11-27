IDRegistry.genItemID("DeathHeart");
Item.createItem("DeathHeart", "Сердце", {name: "DeathHeart", meta: 0});
Callback.addCallback("ItemUse", function (coords, item, block) {
var hp = Entity.getMaxHealth(Player.get());
if(item.id == ItemID.DeathHeart&&block.id !==0&&hp <=70){
Player.setCarriedItem(item.id, item.count - 1, 0);
Entity.setMaxHealth(Player.get(), hp+1)}}); 