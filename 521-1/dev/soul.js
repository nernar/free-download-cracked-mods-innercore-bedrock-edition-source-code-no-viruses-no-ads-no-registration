Block.createSpecialType({
	base: 1,
	solid: true,
	destroytime: 3,
	explosionres: 15,
	lightopacity: 15,
	renderlayer: 2,
	translucency: 0
}, "soul");



IDRegistry.genItemID("pili_soul");
Item.createItem("pili_soul", "soulirim", {name: "pili_soul", meta: 0}); 
Recipes.addShaped({id:
ItemID.pili_soul, count: 1, data: 0}, 
["aba",
 "bcb",
 "aba"], 
 ['a', 266, -1, 'b', 388, -1, 'c', 152, -1]); 
 
Callback.addCallback("PlayerAttack",function(player,victim){

var mobId = [10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118];
for(var i=0; i<120; i++)
{
item=Player.getCarriedItem(true);


if(item.id==ItemID.pili_soul&&Entity.getType(victim)==mobId[i])
{
var coords = Entity.getPosition(victim);
Entity.damageEntity(victim, 1000);
Player.decreaseCarriedItem(1);
World.drop(coords.x, coords.y, coords.z, 383, 1, mobId[i]);}}});


IDRegistry.genBlockID("mobSpawners");
Block.createBlock("mobSpawners", [{name: "mob spawner", texture: [["mspawner", 0], ["mspawner", 0], ["mspawner", 0], ["mspawner", 0], ["mspawner", 0], ["mspawner", 0]], inCreative: true}]);

Recipes.addShaped({id: BlockID.mobSpawners, count: 1, data: 0}, [
"xxx","xax","xxx"], ['x', 101, -1, 'a', 383, -1]);

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



 
 IDRegistry.genBlockID("piligrinder");
Block.createBlock("piligrinder", [{name: "grinder", texture: [["weapon_box_top", 0]], inCreative: true}], "soul");

Recipes.addShaped({id: BlockID.piligrinder, count: 1, data: 0}, [
"cxc",
"xax",
"bxb"], 
['x', 331, -1, 'a', 41, -1, 'c', 267, -1, 'b', 318, -1]);





var evilMobs = [10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118];

TileEntity.registerPrototype(BlockID.piligrinder,{
	defaultValues: {
  damage: 100,
  range: 5
  },
redstone: function(params){ 
if(params.power >1){
for(let i in evilMobs){
let ent = Entity.findNearest({x: this.x, y: this.y, z: this.z}, evilMobs[i], this.data.range);
if(ent){
Entity.damageEntity(ent, 100);
}}}}});


 
