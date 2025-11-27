IDRegistry.genItemID("ughastTrophy");
Item.createItem("ughastTrophy", "Ur Ghast Trophy", {name: "UrGhastTrophy", meta: 0}, {stack: 1})

Callback.addCallback("ItemUse", function (coords, item, block) {
var hp = Entity.getMaxHealth(Player.get());
if(item.id == ItemID.ughastTrophy&&block.id !==0){
Player.setCarriedItem(item.id, item.count - 1, 0);
World.setBlock(coords.x, coords.y+1, coords.z, BlockID.uk5, 0);
}}); 
//naga


IDRegistry.genItemID("nagaTrophy");
Item.createItem("nagaTrophy", "Naga Trophy", {name: "nagaTrophy", meta: 0}, {stack: 1})
Callback.addCallback("ItemUse", function (coords, item, block) {
var hp = Entity.getMaxHealth(Player.get());
if(item.id == ItemID.nagaTrophy&&block.id !==0){
Player.setCarriedItem(item.id, item.count - 1, 0);
World.setBlock(coords.x, coords.y+1, coords.z, BlockID.he, 0);
}}); 
//lich


IDRegistry.genItemID("lichTrophy");
Item.createItem("lichTrophy", "Lich Trophy", {name: "lichTrophy", meta: 0}, {stack: 1})
Callback.addCallback("ItemUse", function (coords, item, block) {
var hp = Entity.getMaxHealth(Player.get());
if(item.id == ItemID.lichTrophy&&block.id !==0){
Player.setCarriedItem(item.id, item.count - 1, 0);
World.setBlock(coords.x, coords.y+1, coords.z, BlockID.boss, 0);
}}); 
//hydra

IDRegistry.genItemID("hydraTrophy");
Item.createItem("hydraTrophy", "Hydra Trophy", {name: "hydraTrophy", meta: 0}, {stack: 1})

Callback.addCallback("ItemUse", function (coords, item, block) {
var hp = Entity.getMaxHealth(Player.get());
if(item.id == ItemID.hydraTrophy&&block.id !==0){
Player.setCarriedItem(item.id, item.count - 1, 0);
World.setBlock(coords.x, coords.y+1, coords.z, BlockID.hydra_boss_statue, 0);

}});

IDRegistry.genItemID("snowQueenTrophy");
Item.createItem("snowQueenTrophy", "snow queen Trophy", {name: "snowQueenTrophy", meta: 0}, {stack: 1})

Callback.addCallback("ItemUse", function (coords, item, block) {
var hp = Entity.getMaxHealth(Player.get());
if(item.id == ItemID.snowQueenTrophy&&block.id !==0){
Player.setCarriedItem(item.id, item.count - 1, 0);
World.setBlock(coords.x, coords.y+1, coords.z, BlockID.snowqueenboss, 0);
}});



//drop
Item.addCreativeGroup("Trophy", Translation.translate("Trophy"), [
	ItemID.ughastTrophy,
	ItemID.lichTrophy,
	ItemID.nagaTrophy,
	ItemID.snowQueenTrophy,
	ItemID.hydraTrophy,
	
]);