importLib("ToolType", "*");

Callback.addCallback("EntityDeath", function(entity){
if(Entity.getType(entity) == 32){
  if(Math.random() < 0.10){
 var coords = Entity.getPosition(entity);
 World.drop(coords.x, coords.y, coords.z, ItemID.toocoin, 1, 0);
        }
      }
});

Callback.addCallback("EntityAdded", function (entity) {
var sword = [267, 268, 272, 276, 283, 258, 271, 275, 279, 286];
var helm = [298, 302, 306, 310, 314];
var chest = [299, 303, 307, 311, 315];
var legg = [300, 304, 308, 312, 316];
var boot = [301, 305, 309, 313, 317];
var mob = [32, 36, 44, 47, 48];
for(var i=0; i<6; i++)
if(Entity.getType(entity) == mob[i]&&Math.random() < 0.20)
{
var rnd1 = Math.floor(Math.random()*(sword.length));
var rnd2 = Math.floor(Math.random()*(helm.length));
var rnd3 = Math.floor(Math.random()*(chest.length));
var rnd4 = Math.floor(Math.random()*(legg.length));
var rnd5 = Math.floor(Math.random()*(boot.length));
Entity.setCarriedItem(entity, sword[rnd1], 1, 0);
Entity.setArmorSlot(entity,0, helm[rnd2], 1);
Entity.setArmorSlot(entity,1, chest[rnd3], 1);
Entity.setArmorSlot(entity,2, legg[rnd4], 1);
Entity.setArmorSlot(entity,3, boot[rnd5], 1);
}});

Callback.addCallback("EntityAdded", function (entity) {
var helm = [298, 302, 306, 310, 314];
var chest = [299, 303, 307, 311, 315];
var legg = [300, 304, 308, 312, 316];
var boot = [301, 305, 309, 313, 317];
var mob = [34, 46];
for(var i=0; i<6; i++)
if(Entity.getType(entity) == mob[i]&&Math.random() < 0.1)
{
var rnd2 = Math.floor(Math.random()*(helm.length));
var rnd3 = Math.floor(Math.random()*(chest.length));
var rnd4 = Math.floor(Math.random()*(legg.length));
var rnd5 = Math.floor(Math.random()*(boot.length));

Entity.setArmorSlot(entity,0, helm[rnd2], 1);
Entity.setArmorSlot(entity,1, chest[rnd3], 1);
Entity.setArmorSlot(entity,2, legg[rnd4], 1);
Entity.setArmorSlot(entity,3, boot[rnd5], 1);
}});
//buy
Recipes.addShaped({id: ItemID.toofs, count: 20, data: 0}, 
["   ", 
 "aa ",
 "aaa"],
["a", ItemID.toocoin, 0]);
Recipes.addShaped({id: ItemID.toosword, count: 1, data: 0}, 
[" a ", 
 "aaa",
 "aaa"],
["a", ItemID.toocoin, 0]);
Recipes.addShaped({id: ItemID.toowsword, count: 1, data: 0}, 
["   ", 
 " aa",
 "aaa"],
["a", ItemID.toocoin, 0]);
Recipes.addShaped({id: ItemID.toohelmet, count: 1, data: 0}, 
["a  ", 
 "aa ",
 "   "],
["a", ItemID.toocoin, 0]);
Recipes.addShaped({id: ItemID.toolongboots, count: 1, data: 0}, 
["   ", 
 "aa ",
 "   "],
["a", ItemID.toocoin, 0]);
Recipes.addShaped({id: ItemID.tooshield, count: 1, data: 0}, 
["aaa", 
 "aaa",
 "aaa"],
["a", ItemID.toocoin, 0]);
Recipes.addShaped({id: ItemID.toowshield, count: 1, data: 0}, 
[" aa", 
 "aaa",
 "aaa"],
["a", ItemID.toocoin, 0]);
Recipes.addShaped({id: ItemID.toowanklet, count: 1, data: 0}, 
["   ", 
 " aa",
 "   "],
["a", ItemID.toocoin, 0]);
Recipes.addShaped({id: ItemID.tooanklet, count: 1, data: 0}, 
["  a", 
 " aa",
 "   "],
["a", ItemID.toocoin, 0]);
