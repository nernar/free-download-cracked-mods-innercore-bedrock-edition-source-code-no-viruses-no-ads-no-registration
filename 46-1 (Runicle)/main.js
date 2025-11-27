/*
BUILD INFO:
  dir: dev
  target: main.js
  files: 1
*/



// file: api.js

var MobEffect = Native.PotionEffect;
var RunicleAPI = {
 addMaterial: function(name, armo, dur, lev, eff, damag){
	 //crystals
	IDRegistry.genItemID(name + "Crystal");
    Item.createItem(name + "Crystal", name + " crystal", {name: name + "Crystal", meta: 0});
    //brokenrune
	IDRegistry.genItemID(name + "BrokenRune");
    Item.createItem(name + "BrokenRune", name + " broken rune", {name: name + "BrokenRune", meta: 0});
    //rune
    IDRegistry.genItemID(name + "Rune");
    Item.createItem(name + "Rune", name + " rune", {name: name + "Rune", meta: 0});
    IDRegistry.genItemID(name + "Sword");
    Item.createItem(name + "Sword", name + " sword", {name: name + "w", meta: 0}, {stack: 1});
    IDRegistry.genItemID(name + "Pickaxe");
    Item.createItem(name + "Pickaxe", name + " pickaxe", {name: name + "Pic", meta: 0}, {stack: 1});
    IDRegistry.genItemID(name + "Axe");
    Item.createItem(name + "Axe", name + " axe", {name: name + "Axe", meta: 0}, {stack: 1});
    IDRegistry.genItemID(name + "Shovel");
    Item.createItem(name + "Shovel", name + " shovel", {name: name + "Stick", meta: 0}, {stack: 1});
    IDRegistry.genItemID(name + "Paxel");
    Item.createItem(name + "Paxel", name + " paxel", {name: name + "Paxel", meta: 0}, {stack: 1});
    Item.setToolRender(ItemID[name + "Pickaxe"], true);
        Item.setToolRender(ItemID[name + "Sword"], true);
        Item.setToolRender(ItemID[name + "Shovel"], true);
        Item.setToolRender(ItemID[name + "Paxel"], true);
        Item.setToolRender(ItemID[name + "Axe"], true);
        ToolAPI.addToolMaterial(name, {durability: dur, level: lev, efficiency: eff, damage: damag, enchantability: 15});
ToolAPI.registerTool(ItemID[name + "Sword"], name, {damage: 4});
ToolAPI.registerTool(ItemID[name + "Paxel"], name, ["stone"], {damage: 15});
ToolAPI.registerTool(ItemID[name + "Shovel"], name, ["dirt"], {damage: 3});
ToolAPI.registerTool(ItemID[name + "Pickaxe"], name, ["stone"], {damage: 4});
ToolAPI.registerTool(ItemID[name + "Axe"], name, ["wood"], {damage: 5});
    //armors
    IDRegistry.genItemID(name + "Helmet");
Item.createArmorItem(name + "Helmet", 
name + " helmet", 
{name: name + "H", meta: 0}, {
    isTech: false,
	armor: armo,
	type: "helmet",
	texture: "mobs/"+ name + "_1.png",
	durability: dur
});
IDRegistry.genItemID(name + "Chestplate");
Item.createArmorItem(name + "Chestplate", 
name + " Body", 
{name: name + "C", meta: 0}, {
    isTech: false,
	armor: armo,
	type: "chestplate",
	texture: "mobs/"+ name + "_1.png",
	durability: dur
});
IDRegistry.genItemID(name + "Leggings");
Item.createArmorItem(name + "Leggings", 
name + " legs", 
{name: name + "L", meta: 0}, {
    isTech: false,
	armor: armo,
	type: "leggings",
	texture: "mobs/"+ name + "_2.png",
	durability: dur
});
IDRegistry.genItemID(name + "Boots");
Item.createArmorItem(name + "Boots", 
name + " boots", 
{name: name + "B", meta: 0}, {
    isTech: false,
	armor: armo,
	type: "boots",
	texture: "mobs/"+ name + "_1.png",
	durability: dur
});
Callback.addCallback("PostLoaded", function(){
Recipes.addShaped({id: ItemID[name+"Sword"], count: 1, data: 0}, [
	"a",
	"a",
	"b"
], ['a', ItemID[name + "Rune"], 0, 'b', 280, 0]);

Recipes.addShaped({id: ItemID[name+"Shovel"], count: 1, data: 0}, [
	"a",
	"b",
	"b"
], ['a', ItemID[name + "Rune"], 0, 'b', 280, 0]);

Recipes.addShaped({id: ItemID[name+"Pickaxe"], count: 1, data: 0}, [
	"aaa",
	" b ",
	" b "
], ['a', ItemID[name + "Rune"], 0, 'b', 280, 0]);

Recipes.addShaped({id: ItemID[name+"Axe"], count: 1, data: 0}, [
	"aa",
	"ab",
	" b"
], ['a', ItemID[name + "Rune"], 0, 'b', 280, 0]);
Recipes.addShaped({id: ItemID[name+"Paxel"], count: 1, data: 0}, [
	"aaa",
	"aba",
	" b "
], ['a', ItemID[name + "Rune"], 0, 'b', 280, 0]);
Recipes.addShaped({id: ItemID[name+"Helmet"], count: 1, data: 0}, [
	"aaa",
	"a a"
], ['a', ItemID[name + "Rune"], 0]);

Recipes.addShaped({id: ItemID[name+"Chestplate"], count: 1, data: 0}, [
	"a a",
	"aaa",
	"aaa"
], ['a', ItemID[name + "Rune"], 0]);

Recipes.addShaped({id: ItemID[name+"Leggings"], count: 1, data: 0}, [
	"aaa",
	"a a",
	"a a"
], ['a', ItemID[name + "Rune"], 0]);

Recipes.addShaped({id: ItemID[name+"Boots"], count: 1, data: 0}, [
	"a a",
	"a a"
], ['a', ItemID[name + "Rune"], 0]);
Recipes.addShaped({id: ItemID[name+"Crystal"], count: 1, data: 0}, [
	"aa",
	"aa"
], ['a', ItemID[name + "BrokenRune"], 0]);
Recipes.addShaped({id: ItemID[name+"Rune"], count: 1, data: 0}, [
	"aaa",
	"aaa",
	"aaa"
], ['a', ItemID[name + "Crystal"], 0]);
});
    }/*,
    addArmorFuncs: function(params){
      Callback.addCallback("tick", function(){
	var helmet = Player.getArmorSlot(0);
	var chest = Player.getArmorSlot(1);
	var legs = Player.getArmorSlot(2);
	var boots = Player.getArmorSlot(3);
if (helmet.id == ItemID[params.id + "Helmet"] && chest.id == ItemID[params.id + "Chestplate"] && legs.id == ItemID[params.id + "Leggings"] && boots.id == ItemID[params.id + "Boots"]) {
	params.tick
   }
});
    }*/
}

RunicleAPI.addMaterial("wind", 6, 3000, 4, 12, 4);
RunicleAPI.addMaterial("water", 6, 3500, 4, 15, 5);
RunicleAPI.addMaterial("forest", 6, 3700, 4, 18, 6);
RunicleAPI.addMaterial("fire", 6, 3900, 4, 23, 7);
RunicleAPI.addMaterial("speed", 6, 4100, 4, 67, 8);
RunicleAPI.addMaterial("thunder", 6, 4200, 4, 23, 9);
RunicleAPI.addMaterial("teleport", 60, 7000, 4, 25, 10);

/*RunicleAPI.addArmorFuncs({
   id: "speed", 
   tick: if(nameoname > 0){Entity.addEffect(Player.get(), MobEffect.movementSpeed, 5, 3);}
});
RunicleAPI.addArmorFuncs({
  id: "fire",
  tick: if(nameoname > 0){Entity.addEffect(Player.get(), MobEffect.fireResistance, 5, 3);}
});
RunicleAPI.addArmorFuncs({
  id: "water",
  tick: if(nameoname > 0){Entity.addEffect(Player.get(), MobEffect.waterBreathing, 5, 3);}
});
RunicleAPI.addArmorFuncs({
 id: "forest",
 tick: if(nameoname > 0){Entity.addEffect(Player.get(), MobEffect.jump, 2, 3);}
});
RunicleAPI.addArmorFuncs({
   id: "thunder",
   tick: if(nameoname > 0){Entity.addEffect(Player.get(), MobEffect.healthBoost, 5, 3);}
});*/

Callback.addCallback("tick", function(){
	var helmet = Player.getArmorSlot(0);
	var chest = Player.getArmorSlot(1);
	var legs = Player.getArmorSlot(2);
	var boots = Player.getArmorSlot(3);
	var pos = Player.getPosition();
if (helmet.id == ItemID.windHelmet && chest.id == ItemID.windChestplate && legs.id == ItemID.windLeggings && boots.id == ItemID.windBoots) {
	Player.setFlying(true); 
}
if (helmet.id == ItemID.fireHelmet && chest.id == ItemID.fireChestplate && legs.id == ItemID.fireLeggings && boots.id == ItemID.fireBoots) {
	Entity.addEffect(Player.get(), MobEffect.fireResistance, 25, 3);
	  if (World.getBlock(pos.x, pos.y-2, pos.z).id ==8||World.getBlock(pos.x, pos.y-2, pos.z).id ==9) {
		World.setBlock(pos.x, pos.y-2, pos.z, 4);
	  }
   }
if (helmet.id == ItemID.waterHelmet && chest.id == ItemID.waterChestplate && legs.id == ItemID.waterLeggings && boots.id == ItemID.waterBoots) {
	Entity.addEffect(Player.get(), MobEffect.waterBreathing, 25, 3);
	  if (World.getBlock(pos.x, pos.y-2, pos.z).id == 10 || World.getBlock(pos.x, pos.y-2, pos.z).id == 11) {
		World.setBlock(pos.x, pos.y-2, pos.z, 49);
	  }
   }
if (helmet.id == ItemID.forestHelmet && chest.id == ItemID.forestChestplate && legs.id == ItemID.forestLeggings && boots.id == ItemID.forestBoots) {
	Entity.addEffect(Player.get(), MobEffect.jump, 25, 3);
   }
if (helmet.id == ItemID.speedHelmet && chest.id == ItemID.speedChestplate && legs.id == ItemID.speedLeggings && boots.id == ItemID.speedBoots) {
	Entity.addEffect(Player.get(), MobEffect.movementSpeed, 25, 3);
   }
if (helmet.id == ItemID.thunderHelmet && chest.id == ItemID.thunderChestplate && legs.id == ItemID.thunderLeggings && boots.id == ItemID.thunderBoots) {
	Entity.addEffect(Player.get(), MobEffect.jump, 25, 3);
	Entity.addEffect(Player.get(), MobEffect.movementSpeed, 25, 3);
	Entity.addEffect(Player.get(), MobEffect.regeneration, 25, 3);
	Entity.addEffect(Player.get(), MobEffect.healthBoost, 25, 3);
   }
});

Callback.addCallback("ItemUse", function(coords, item, block){
var helmet = Player.getArmorSlot(0);
var chest = Player.getArmorSlot(1);
var legs = Player.getArmorSlot(2);
var boots = Player.getArmorSlot(3);
    if(helmet.id == ItemID.teleportHelmet && chest.id == ItemID.teleportChestplate && legs.id == ItemID.teleportLeggings && boots.id == ItemID.teleportBoots){
        Player.setPosition(coords.relative.x, coords.relative.y+2, coords.relative.z);
    }
});

Callback.addCallback("EntityDeath", function(entity){
if(Entity.getType(entity) == 32){
  if(Math.random() < 0.100){
 var coords = Entity.getPosition(entity);
 World.drop(coords.x, coords.y, coords.z, ItemID.fireBrokenRune, 1, 0);
  World.drop(coords.x, coords.y, coords.z, ItemID.waterBrokenRune, 1, 0);
   World.drop(coords.x, coords.y, coords.z, ItemID.teleportBrokenRune, 1, 0);
    World.drop(coords.x, coords.y, coords.z, ItemID.thunderBrokenRune, 1, 0);
     World.drop(coords.x, coords.y, coords.z, ItemID.speedBrokenRune, 1, 0);
      World.drop(coords.x, coords.y, coords.z, ItemID.forestBrokenRune, 1, 0);
       World.drop(coords.x, coords.y, coords.z, ItemID.windBrokenRune, 1, 0);
        }
      }
});




