importLib("ENV", "*");



ToolAPI.addToolMaterial("red", {durability: 700, level: 5, efficiency: 4, damage: 5, enchantability: 13});

IDRegistry.genItemID("wideBoreDrill");
Item.createItem("wideBoreDrill", "wide Bore Drill", {name: "wideBoreDrill", meta: 0}, {stack: 1});
ToolAPI.setTool(ItemID.wideBoreDrill, "red", ToolType.pickaxe);


Recipes.addShaped({id: ItemID.wideBoreDrill, count: 1, data: 0}, [
		"xaa",
		"xxx",
		"xbb"
	], ['x', 265, -1, 'b', 280, -1, 'a', 331, -1]);



IDRegistry.genItemID("shaftDrill");
Item.createItem("shaftDrill", "shaft Drill", {name: "shaftDrill", meta: 0}, {stack: 1});
ToolAPI.setTool(ItemID.shaftDrill, "red", ToolType.pickaxe);

Recipes.addShaped({id: ItemID.shaftDrill, count: 1, data: 0}, [
		" aa",
		"xxx",
		" bb"
	], ['x', 265, -1, 'b', 280, -1, 'a', 331, -1]);


IDRegistry.genItemID("chainsaw");
Item.createItem("chainsaw", "chainsaw", {name: "chainsaw", meta: 0}, {stack: 1});
ToolAPI.setTool(ItemID.chainsaw, "red", ToolType.axe);
Recipes.addShaped({id: ItemID.chainsaw, count: 1, data: 0}, [
		"a x",
		"ax ",
		"bb "
	], ['x', 265, -1, 'b', 280, -1, 'a', 331, -1]);


IDRegistry.genItemID("jackhammer");
Item.createItem("jackhammer", "jackhammer", {name: "jackhammer", meta: 0}, {stack: 1});

Recipes.addShaped({id: ItemID.jackhammer, count: 1, data: 0}, [
		"bbb",
		"axa",
		" x "
	], ['x', 265, -1, 'b', 280, -1, 'a', 331, -1]);



Callback.addCallback("DestroyBlock", function(coords, block, player){

var side = coords.side;

var X = 1;
var Y = 1;
var Z = 1;

if(side==4 || side==5){
            X = 0;}
            if(side==1 || side==6){
            Y = 0;}
            if(side==2 || side==3){
            Z = 0;}
for(var xx = coords.x - X; xx <= coords.x + X; xx++){
                for(var yy = coords.y - Y; yy <= coords.y + Y; yy++){
                    for(var zz = coords.z - Z; zz <= coords.z + Z; zz++){
item=Player.getCarriedItem(true);
if(World.getBlockID(xx, yy, zz) !== 7&&item.id==ItemID.wideBoreDrill){
World.destroyBlock(xx, yy, zz, true);}}}};});


Callback.addCallback("DestroyBlock", function(coords, block, player){
item=Player.getCarriedItem(true);
if(item.id==ItemID.shaftDrill)
{
World.destroyBlock(coords.x, coords.y-1, coords.z, true)
}});


Callback.addCallback("DestroyBlockStart", function (coords, block, player) { 
item=Player.getCarriedItem(true);
if(item.id==ItemID.jackhammer&&block.id==49)
{
World.destroyBlock(coords.x, coords.y, coords.z, true);

}});


Callback.addCallback("DestroyBlock", function(coords, block, player){
var getBlock = World.getBlockID(coords.x, coords.y, coords.z);
item=Player.getCarriedItem(true);
if(item.id==ItemID.chainsaw&&getBlock==17||item.id==ItemID.chainsaw&&getBlock==162){
for(var xx = -1; xx <=1; xx++){
for(var yy = -1; yy <=20; yy++){
for(var zz = -1; zz <=1; zz++){
if(World.getBlockID(coords.x + xx, coords.y + yy, coords.z + zz) == 17||World.getBlockID(coords.x + xx, coords.y + yy, coords.z + zz) == 162) {
World.destroyBlock(coords.x + xx, coords.y + yy, coords.z + zz, true);}}}};}});
