
ITEM.Item("mob_soul1", "mob_soul", "mob soul", 1);
Item.setMaxDamage(ItemID.mob_soul1, 300);
Translation.addTranslation("mob soul", {ru: "душа моба"});

ITEM.Item("soul_capture", "soul_capture", "soul invader", 1);
Translation.addTranslation("soul invader", {ru: "захватчик душ"});
Recipes.addShaped({id: ItemID.soul_capture, count: 1, data: 0}, [
        "aba",
        "bcb",
        "aba"
        ], ["a", 41, -1, "b", 264, -1, "c", 334, -1]);
        
        




Callback.addCallback("PlayerAttack",function(player,victim){
var mobV=Entity.getType(victim);
{
item=Player.getCarriedItem(true);
if(item.id==ItemID.soul_capture&&mobV!=52|item.id==ItemID.soul_capture&&mobV!=53){

Game.prevent();
Entity.remove(victim);
Player.setCarriedItem(ItemID.mob_soul1, 1, mobV);
Game.prevent();

}}});



ITEM.Item("head_ripper", "heaDripper", "head ripper", 1);
Item.setToolRender(ItemID.head_ripper, true);
ToolAPI.registerTool(ItemID.head_ripper, "stone", ["plant"], {damage: 10});
Item.setEnchantType(ItemID.head_ripper, Native.EnchantType.weapon, 15);
Translation.addTranslation("head ripper", {ru: "головорез"});


Callback.addCallback("PlayerAttack",function(player,victim){
var rnd = Math.floor((Math.random()*100)+0);
var mobId = [34,48,32,45,33];
var dropDt = [0,1,2,3,4];
for(var i=0; i<12; i++)
{
item=Player.getCarriedItem(true);
if(item.id==ItemID.head_ripper&&Entity.getType(victim)==mobId[i]&&rnd<=20)
{
var coords = Entity.getPosition(victim);
Entity.remove(victim);
World.drop(coords.x, coords.y, coords.z, 397, 1, dropDt[i]);}}});