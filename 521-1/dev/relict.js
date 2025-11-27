IDRegistry.genItemID("endStaff");
Item.createItem("endStaff", "sraff of ender", {name: "ender_staff", meta:0}, {stack: 1}, {damage: 500});
Item.setMaxDamage(ItemID.endStaff, 500);


Recipes.addShaped({id: ItemID.endStaff, count: 1, data: 0}, [
	" bc",
	" ab",
	"a  "
], ['a', 369, -1, 'b', 381, -1, 'c', ItemID.endPortal, -1]);


Item.registerNoTargetUseFunction("endStaff", function(item){
  if(item.id == ItemID.endStaff){
    let pos = Player.getPosition();
    let vec = Entity.getLookVector(Player.get());
    let crd = {};
    for(let t = 0; t <= 64; t++){
      crd.x = pos.x + vec.x * t;
      crd.y = pos.y + vec.y * t;
      crd.z = pos.z + vec.z * t;
        if(!GenerationUtils.isTransparentBlock(World.getBlockID(crd.x, crd.y, crd.z))){
          Game.tipMessage("X: "+Math.round(crd.x)+" Y: "+Math.round(crd.y+2)+" Z: "+Math.round(crd.z));
          Entity.setPosition(Player.get(), crd.x, crd.y+2, crd.z);
ToolAPI.breakCarriedTool(1);          
        break;
      }
    }
  }
});

//_______________\\

IDRegistry.genItemID("airWand");
Item.createItem("airWand", "rending gale", {name: "rending_gale", meta:0}, {stack: 1}, {damage: 500});
Item.setMaxDamage(ItemID.airWand, 500);

Recipes.addShaped({id: ItemID.airWand, count: 1, data: 0}, [
	" bc",
	" ab",
	"a  "
], ['a', 369, -1, 'b', 288, -1, 'c', 41, -1]);


Item.registerNoTargetUseFunction("airWand", function(item){
  if(item.id == ItemID.airWand){
    let pos = Player.getPosition();
let vec = Entity.getLookVector(Player.get());
{
Entity.setVelocity(Player.get(), 5*vec.x, 5*vec.y, 5*vec.z);   
ToolAPI.breakCarriedTool(1);       
}}}); 


//_______\\

IDRegistry.genItemID("witherless_rose"); Item.createItem("witherless_rose", "witherless rose", {name: "witherless_rose", meta: 0}, {stack: 1}); 
	Recipes.addShaped({id: ItemID.witherless_rose, count: 1, data: 0}, [
	"aba",
	"bcb",
	"aba"
], ['a', 399, -1,'b',266,-1,'c',175,4]);


Callback.addCallback("tick", function () { 
for(var s=0;s<40;s++){
var slot = Player.getInventorySlot(s);
if(slot.id==ItemID.witherless_rose){
Entity.clearEffect(Player.get(), 20);
Entity.clearEffect(Player.get(), 19);
Entity.clearEffect(Player.get(), 2);

}}});


//________$_________\\


/*
Callback.addCallback('EntityHurt', function (attacker, victim, damageValue, damageType, someBool1, someBool2) {

var vertical = Entity.getVelocity(Player.get()).y;
if(Entity.getType(victim)==63&&vertical<-0.5){

Game.prevent();
}});

*/

IDRegistry.genItemID("angelic_feather"); Item.createItem("angelic_feather", "angelic feather", {name: "angelic_feather", meta: 0}, {stack: 1}); 
	Recipes.addShaped({id: ItemID.angelic_feather, count: 1, data: 0}, [
	"aba",
	"bcb",
	"aba"
], ['a', 41, -1,'b',89,-1,'c',288,-1]);


var rrr = 0;
Callback.addCallback("tick", function () { 
var coords = Entity.getPosition(Player.get());
var vertical = Entity.getVelocity(Player.get()).y;
var pl = Player.get();
for(var s=0;s<40;s++){
var slot = Player.getInventorySlot(s);
if(vertical<-0.5&&World.getBlockID(coords.x, coords.y-5, coords.z) !== 0&&rrr==0&&slot.id==ItemID.angelic_feather){
	rrr=1;
	
var sss =	Entity.spawn(coords.x, coords.y-1, coords.z, 10);
	Entity.rideAnimal(pl, sss);
	}
	}
	if(rrr==1){
		Entity.remove(sss);
		Entity.setVelocity(pl, 0, 0.1, 0);   
		rrr=0
		
		
	}});
	
	
	
	//____________
	
	
	IDRegistry.genItemID("glowing_bread");
Item.createFoodItem("glowing_bread", "glowing bread", {name:"glowing_bread"}, {food:30});

	Recipes.addShaped({id: ItemID.glowing_bread, count: 1, data: 0},["aba","bcb","aba"],['a', 348, -1, 'b', 371, -1, 'c', ItemID.fbread, -1]);
	
	
	Callback.addCallback('FoodEaten', function (food, satRatio) {
	
	item=Player.getCarriedItem(true);
if(item.id==ItemID.glowing_bread){
	Entity.addEffect(Player.get(), 29, 2, 3000, false);
	Entity.addEffect(Player.get(), 10, 1, 100, false);
	}});
	
	
	//____________
	
	
	IDRegistry.genItemID("mercy_cross"); Item.createItem("mercy_cross", "mercy cross", {name: "mercy_cross", meta: 0}, {stack: 1}); 
	Recipes.addShaped({id: ItemID.mercy_cross, count: 1, data: 0}, [
	" a ",
	"aba",
	" a "
], ['a', 41, -1,'b',399,-1]);
	
	
	
	Callback.addCallback("EntityHurt", function (attacker, victim, damage) { 
var rnd = Math.floor((Math.random()*100)+1)
for(var s=0;s<40;s++){
var slot = Player.getInventorySlot(s);
if(slot.id==ItemID.mercy_cross&&Entity.getType(attacker)!==63&&Entity.getType(victim)==63&&rnd<=101){
Game.prevent();
}}});

	
	