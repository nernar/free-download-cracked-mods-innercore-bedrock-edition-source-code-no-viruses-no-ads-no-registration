IDRegistry.genItemID("dustevil");
Item.createItem("dustevil", "dust evil", {name: "dustvile", meta: 0}); 

Recipes.addShaped({id: ItemID.dustevil, count: 1, data: 0}, 
["aba",
 "aca",
 "ada"], 
 ['a', 88, -1, 'b', 289, -1, 'c', 331, -1, 'd', 348, -1]);

IDRegistry.genItemID("evilflint");
Item.createItem("evilflint", "evil flint", {name: "soulflint", meta: 0}); 

Recipes.addShaped({id: ItemID.evilflint, count: 1, data: 0}, 
["aaa",
 "aba",
 "aaa"], 
 ['a', 88, -1, 'b', 318, -1]);
 
 
IDRegistry.genItemID("demonicdust");
Item.createItem("demonicdust", "demonic dust", {name: "demonicdust", meta: 0}); 

Recipes.addShaped({id: ItemID.demonicdust, count: 1, data: 0}, 
["a  ",
 " b ",
 "  a"], 
 ['a', ItemID.dustevil, -1, 'b', ItemID.evilflint, -1]);
 
 
IDRegistry.genItemID("soulingot");
Item.createItem("soulingot", "soul ingot", {name: "soulingot", meta: 0}); 
Recipes.addShaped({id: ItemID.soulingot, count: 1, data: 0}, 
["aaa",
 "aba",
 "aaa"], 
 ['a', 266, -1, 'b', ItemID.demonicdust, -1]); 
 
 
 
IDRegistry.genItemID("swordsoul");
Item.createItem("swordsoul", "sword soul", {name: "swordsoul", meta: 0}); 
Recipes.addShaped({id:
ItemID.swordsoul, count: 1, data: 0}, 
["a",
 "a",
 "b"], 
 ['a', ItemID.soulingot, -1, 'b', ItemID.demonicdust, -1]); 
 
Callback.addCallback("PlayerAttack",function(player,victim){

var mobId = [10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 55, 57, 104, 105];
for(var i=0; i<106; i++)
{
item=Player.getCarriedItem(true);


if(item.id==ItemID.swordsoul&&Entity.getType(victim)==mobId[i]&&Math.random() < 0.01)
{
var coords = Entity.getPosition(victim);
Entity.damageEntity(victim, 9);
World.drop(coords.x, coords.y, coords.z, 383, 1, mobId[i]);}}});

Callback.addCallback("PlayerAttack",function(player,victim){
item=Player.getCarriedItem(true);
if(item.id==ItemID.swordsoul&&Entity.getType(victim)!==0){
Entity.damageEntity(victim, 9);
}});

 
IDRegistry.genBlockID("mobSpawners");
Block.createBlockWithRotation("mobSpawners", [{name: "mob spawner", texture: [["mspawner", 0], ["mspawner", 0], ["mspawner", 0], ["mspawner", 0], ["mspawner", 0], ["mspawner", 0]], inCreative: true}]);

Recipes.addShaped({id: BlockID.mobSpawners, count: 1, data: 0}, [
"xxx","xax","xxx"], ['x', ItemID.soulingot, -1, 'a', 383, -1]);

var guiSpawn = new UI.StandartWindow({
	standart: {
		header: {text: {text: "mob spawner"}},
		inventory: {standart: true},
		background: {standart: true}},
drawing: [{type: "bitmap", x: 530, y: 146, bitmap: "furnace_bar_background", scale: 3.2}],
elements: {"slotGlass": {type: "slot", x: 441, y: 75},
"textInfo4": {type: "text", x: 441, y: 50, width: 300, height: 28, text: "spawn egg"},
"textInfo5": {type: "text", x: 800, y: 230, width: 300, height: 30, text: "redstoune:"},
		"textInfo7": {type: "text", x: 930, y: 230, width: 300, height: 30}
}});
TileEntity.registerPrototype(BlockID.mobSpawners,{
	defaultValues:{
	work:0
	},
	getGuiScreen: function(){return guiSpawn;},
	redstone: function(params){ 
if(this.data.work == 1&&params.power >1)
{
this.data.work = 0;
}
else{
if(this.data.work == 0&&params.power >1)
{
this.data.work = 1;
}}},
tick: function(){
this.container.setText("textInfo7", parseInt(this.data.work));
var glassId = this.container.getSlot("slotGlass");
var crisId = this.container.getSlot("slotCris");
if(World.getThreadTime()%100== 0&&this.data.work==1){
if(glassId.id == 383&&glassId.data==glassId.data&&this.data.work==1){

Entity.spawn(this.x+0.5, this.y+2, this.z+0.5, glassId.data)}}}});



 
 
 

