var x1 = 0;
var y1 = 0;
var z1 = 0;


Saver.addSavesScope("SaverBD",
	function read(scope){
		x1 = scope.xo1 || 0;
		y1 = scope.yo1 || 0;
		z1 = scope.zo1 || 0;
		
		 
	
	}, function save(){
		return {
			xo1: x1,
			yo1: y1,
			zo1: z1
			
			
		}
	}
);





IDRegistry.genItemID("stonespear");
Item.createItem("stonespear",  "stone spear"+"\n§9"+"4-8 dmg", {name:"stonespear", meta: 0}, {stack: 1});

IDRegistry.genItemID("stonespearr");
Item.createItem("stonespearr",  "stoneHh", {name:"stonespear", meta: 0}, {stack: 1});







Callback.addCallback('ItemUse', function (coords, item, block) {
let pos = Player.getPosition();
if(item.id==ItemID.stonespear&&block.id==1){

x1=pos.x;
y1=pos.y;
z1=pos.z;

}});



Callback.addCallback('ItemUse', function (coords, item, block) {
let pos = Player.getPosition();
if(item.id==ItemID.stonespearr&&block.id==1){

Entity.setPosition(Player.get(), x1, y1, z1);

}});



/*
Callback.addCallback("PlayerAttack",function(player,victim){
var rndd = Math.floor((Math.random()*4)+0);
var dmg = [1,2,3];
var rnd = [1,2,3];
for(var i=0; i<4; i++)
{
item=Player.getCarriedItem(true);
var mobV = Entity.getType(victim);
var mobHp = Entity.getHealth(victim);
if(item.id==ItemID.stonespear&&mobV==mobV&&rndd==rnd[i]){


Entity.setHealth(victim, (mobHp)-dmg[i])
//Entity.damageEntity(mobV, rnd);

}}});

*/