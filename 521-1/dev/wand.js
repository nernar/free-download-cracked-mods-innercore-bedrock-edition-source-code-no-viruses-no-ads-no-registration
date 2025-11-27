
//______padenie_______\\



//_____________________\\
//посохи


IDRegistry.genItemID("tntStuff");
Item.createItem("tntStuff", "staff of tnt", {name: "tntWand", meta:0}, {stack: 1}, {damage: 234});
Item.setMaxDamage(ItemID.tntStuff, 234);

IDRegistry.genItemID("regStuff");
Item.createItem("regStuff", "sraff of regeneration", {name: "regenWand", meta:0}, {stack: 1}, {damage: 234});
Item.setMaxDamage(ItemID.regStuff, 234);

IDRegistry.genItemID("shuStuff");
Item.createItem("shuStuff", "staff of shulker", {name: "shulkerWand", meta:0}, {stack: 1}, {damage: 234});
Item.setMaxDamage(ItemID.shuStuff, 234);

IDRegistry.genItemID("arrStuff");
Item.createItem("arrStuff", "staff of arrow",{name: "arrowWand", meta:0}, {stack: 1}, {damage: 234});
Item.setMaxDamage(ItemID.arrStuff, 234);

IDRegistry.genItemID("fiStuff");
Item.createItem("fiStuff", "staff of fire", {name: "fireWand", meta:0}, {stack: 1}, {damage: 234});
Item.setMaxDamage(ItemID.fiStuff, 234);

IDRegistry.genItemID("wiStuff");
Item.createItem("wiStuff", "staff of wither", {name: "witherWand", meta:0}, {stack: 1}, {damage: 234});
Item.setMaxDamage(ItemID.wiStuff, 234);


//крафт посохов
IDRegistry.genItemID("goldStickL");
Item.createItem("goldStickL", "gold stick", {name: "blaze_rod", meta:0}, {stack: 64});

Recipes.addShaped({id: ItemID.goldStickL, count: 1, data: 0}, [
	"aba",
	"bcb",
	"aba "
], ['a', 348, -1, 'b', 266, -1,'c',280,-1]);

//



Recipes.addShaped({id: ItemID.tntStuff, count: 1, data: 0}, [
	" ba",
	" ab",
	"a  "
], ['a', ItemID.goldStickL, -1, 'b', 46, -1]);

Recipes.addShaped({id: ItemID.regStuff, count: 1, data: 0}, [
	" ba",
	" ab",
	"a  "
], ['a', ItemID.goldStickL, -1, 'b', 322, -1]);

Recipes.addShaped({id: ItemID.arrStuff, count: 1, data: 0}, [
	" ba",
	" ab",
	"a  "
], ['a', ItemID.goldStickL, -1, 'b', 262, -1]);

Recipes.addShaped({id: ItemID.shuStuff, count: 1, data: 0}, [
	" ba",
	" ab",
	"a  "
], ['a', ItemID.goldStickL, -1, 'b', 445, -1]);

Recipes.addShaped({id: ItemID.fiStuff, count: 1, data: 0}, [
	" ba",
	" ab",
	"a  "
], ['a', ItemID.goldStickL, -1, 'b', 259, -1]);

Recipes.addShaped({id: ItemID.wiStuff, count: 1, data: 0}, [
	" ba",
	" ab",
	"a  "
], ['a', ItemID.goldStickL, -1, 'b', 288, -1]);


//функции 




Item.registerNoTargetUseFunction("tntStuff", function(item){
  if(item.id == ItemID.tntStuff){
    let pos = Player.getPosition();
let vec = Entity.getLookVector(Player.get());
var mob = Entity.spawn(pos.x+0.5, pos.y+1, pos.z+0.5, 65); 
{
Entity.setVelocity(mob, 3*vec.x, 3*vec.y, 3*vec.z);   
ToolAPI.breakCarriedTool(1);       
}}}); 


Item.registerNoTargetUseFunction("regStuff", function(item){
  if(item.id == ItemID.regStuff){
  Entity.addEffect(Player.get(), 10, 2, 234, false);
  ToolAPI.breakCarriedTool(1);
  }});
 
 
 Item.registerNoTargetUseFunction("arrStuff", function(item){
if(item.id == ItemID.arrStuff){
let pos = Player.getPosition();
let vec = Entity.getLookVector(Player.get());
var mob = Entity.spawn(pos.x+0.5, pos.y+1, pos.z+0.5, 80); 
{
Entity.setVelocity(mob, 3*vec.x, 3*vec.y, 3*vec.z);    
ToolAPI.breakCarriedTool(1);     
}}}); 


 Item.registerNoTargetUseFunction("shuStuff", function(item){
if(item.id == ItemID.shuStuff){
let pos = Player.getPosition();
let vec = Entity.getLookVector(Player.get());
var mob = Entity.spawn(pos.x, pos.y+1, pos.z, 76); 
{
Entity.setVelocity(mob, 3*vec.x, 3*vec.y, 3*vec.z);
ToolAPI.breakCarriedTool(1);          
}}}); 


 Item.registerNoTargetUseFunction("fiStuff", function(item){
if(item.id == ItemID.fiStuff){
let pos = Player.getPosition();
let vec = Entity.getLookVector(Player.get());
var mob = Entity.spawn(pos.x, pos.y+1, pos.z, 85); 
{
Entity.setVelocity(mob, 3*vec.x, 3*vec.y, 3*vec.z);
ToolAPI.breakCarriedTool(1);          
}}}); 


 Item.registerNoTargetUseFunction("wiStuff", function(item){
if(item.id == ItemID.wiStuff){
let pos = Player.getPosition();
let vec = Entity.getLookVector(Player.get());
var mob = Entity.spawn(pos.x, pos.y+1, pos.z, 89); 
{
Entity.setVelocity(mob, 3*vec.x, 3*vec.y, 3*vec.z);   
ToolAPI.breakCarriedTool(1);       
}}}); 


