importLib("ToolType","*");//工具库
IMPORT("WheatAPI");
IMPORT("EnergyNet");
IMPORT("ChargeItem");
IMPORT("TileRender");
IMPORT("Bow");
IMPORT("工作台修改版");
IMPORT("BackpackAPI");
/*

by @ILY_op
and @CuiZhenhang 

*/
Callback.addCallback('LevelPreLoaded', function () {
//Entity.remove(Player.get());
//在预载世界时调用
Game.message("本模组由 ILY_op和CuiZhenhang大佬制作!");


});


ToolType.puls = {
	 isWeapon: true,
  	damage: 0,
	 baseDamage: 0,
	 blockTypes: ["wood","stone","plant","fibre","dirt"],
	 onDestroy: function(item){
    item.data=0;
  },
  onBroke: function(item){
    return true;
  },
  onAttack: function(item, mob){
    item.data=0;
  }
};


IDRegistry.genBlockID("Anvil");
Block.createBlock("Anvil", [{name: "Anvil",texture: [["crafting_manaita",0],["crafting_manaita",0],
["crafting_manaita",1],["crafting_manaita",1],["crafting_manaita",2],["crafting_manaita",2]], inCreative: true}],
Block.createSpecialType({base: 1, renderallfaces: true, renderlayer: 4}));
Block.setBlockShape(BlockID.Anvil, {x: 1/16, y: 0, z: 3/16}, {x: 15/16, y: 3/16, z: 13/16});

var allMobs = [Native.EntityType.BAT, Native.EntityType.CHICKEN, Native.EntityType.COW, Native.EntityType.MUSHROOM_COW, Native.EntityType.OCELOT, Native.EntityType.PIG, Native.EntityType.RABBIT, Native.EntityType.SHEEP, Native.EntityType.SNOW_GOLEM, Native.EntityType.SQUID, Native.EntityType.VILLAGER, Native.EntityType.WOLF, 23, 24, 25, 26, 27, Native.EntityType.BLAZE, Native.EntityType.CAVE_SPIDER, Native.EntityType.CREEPER, Native.EntityType.ENDERMAN, Native.EntityType.GHAST, Native.EntityType.IRON_GOLEM, Native.EntityType.LAVA_SLIME, Native.EntityType.PIG_ZOMBIE, Native.EntityType.SILVERFISH, Native.EntityType.SKELETON, Native.EntityType.SLIME, Native.EntityType.SPIDER, Native.EntityType.ZOMBIE, Native.EntityType.ZOMBIE_VILLAGER, 45, 46, 47, 48, 49, 55];

//设置剑和其他工具(剑sword 斧axe 镐pickaxe 铲shovel 锄hoe)

ToolAPI.addToolMaterial("puls_sword", {durability:2147483647,level:6,efficiency:99999,damage:2147483647,enchantability:999});
IDRegistry.genItemID ("puls_sword");
Item.createItem("puls_sword", "puls_sword",{name:"puls_sword",meta:0},{stack:1});

ToolAPI.addToolMaterial("puls_sword_god", {durability:999999,level:6,efficiency:99999,damage:2147483647,enchantability:999});
IDRegistry.genItemID ("puls_sword_god");
Item.createItem("puls_sword_god", "puls_sword_god",{name:"puls_sword_god",meta:0},{stack:1});

ToolAPI.addToolMaterial("puls_bow", {durability:99999,level:6,efficiency:99999,damage:2147483647,enchantability:999});
IDRegistry.genItemID ("puls_bow");
Item.createItem("puls_bow", "puls_bow",{name:"puls_bow",meta:0},{stack:1});

ToolAPI.addToolMaterial("puls_pickaxe", {durability:99999,level:6,efficiency:99999,damage:2147483647,enchantability:999});
IDRegistry.genItemID ("puls_pickaxe");
Item.createItem("puls_pickaxe", "puls_pickaxe",{name:"puls_pickaxe",meta:0},{stack:1});

ToolAPI.addToolMaterial("puls_shovel", {durability:99999,level:6,efficiency:99999,damage:2147483647,enchantability:999});
IDRegistry.genItemID ("puls_shovel");
Item.createItem("puls_shovel", "puls_shovel",{name:"puls_shovel",meta:0},{stack:1});

ToolAPI.addToolMaterial("puls_hoe", {durability:99999,level:6,efficiency:99999,damage:2147483647,enchantability:999});
IDRegistry.genItemID ("puls_hoe");
Item.createItem("puls_hoe", "puls_hoe",{name:"puls_hoe",meta:0},{stack:1});

ToolAPI.addToolMaterial("puls_axe", {durability:99999,level:6,efficiency:99999,damage:2147483647,enchantability:999});
IDRegistry.genItemID ("puls_axe");
Item.createItem("puls_axe", "puls_axe",{name:"puls_axe",meta:0},{stack:1});

ToolAPI.addToolMaterial("puls_shovel", {durability:99999,level:6,efficiency:99999,damage:2147483647,enchantability:999});
IDRegistry.genItemID ("puls_shovel");
Item.createItem("puls_shovel", "puls_shovel",{name:"puls_shovel",meta:0},{stack:1});

ToolAPI.addToolMaterial("puls_wunx", {durability:99999,level:6,efficiency:99999,damage:2147483647,enchantability:999});
IDRegistry.genItemID ("puls_wunx");
Item.createItem("puls_wunx", "puls_wunx",{name:"puls_wunx",meta:0},{stack:1});




IDRegistry.genItemID ("puls_wj");
Item.createItem("puls_wj", "puls_wj",{name:"puls_wj",meta:0},{stack:64});


IDRegistry.genItemID ("puls_Anvil");
Item.createItem("puls_Anvil", "puls_Anvil",{name:"puls_Anvil",meta:0},{stack:64});


IDRegistry.genItemID ("Anvil_Ring");
Item.createItem("Anvil_Ring", "Anvil_Ring",{name:"Anvil_Ring",meta:0},{stack:64});


IDRegistry.genItemID ("Anvil");
Item.createItem("Anvil", "Anvil",{name:"Anvil",meta:0},{stack:64});


IDRegistry.genItemID ("fixed_hook");
Item.createItem("fixed_hook", "fixed_hook",{name:"fixed_hook",meta:0},{stack:64});


IDRegistry.genItemID("puls_t");
IDRegistry.genItemID("puls_x");
IDRegistry.genItemID("puls_k");
IDRegistry.genItemID("puls_xz");
//IDRegistry.genItemID("fff");

Item.createArmorItem("puls_t",
"puls_t",{name:"puls_t"},{type: "helmet",armor:null,durability:1111110,texture: "armor/Anvil_s.png"});
Item.createArmorItem("puls_x",
"puls_x",{name:"puls_x"},{type: "chestplate",armor:null,durability:1111110,texture: "armor/Anvil_s.png"});
Item.createArmorItem("puls_k",
"puls_k",{name:"puls_k"},{type: "leggings",armor:null,durability:11111100,texture: "armor/Anvil_x.png"});
Item.createArmorItem("puls_xz",
"puls_xz",{name:"puls_xz"},{type: "boots",armor:null,durability:11111100,texture: "armor/Anvil_s.png"});


Recipes.addFurnace(ItemID.Anvil,ItemID.puls_wj,0);
Recipes.addFurnaceFuel(ItemID.puls_wj,0,9999*9999);


ToolAPI.setTool(ItemID.puls_pickaxe, "puls_pickaxe",ToolType.pickaxe,["wood","stone","plant","dirt"]);
ToolAPI.setTool(ItemID.puls_axe, "puls_axe",ToolType.axe,["wood","stone","plant","dirt"]);
ToolAPI.setTool(ItemID.puls_shovel, "puls_shovel",ToolType.shovel,["wood","stone","plant","dirt"]);
ToolAPI.setTool(ItemID.puls_hoe, "puls_hoe",ToolType.hoe,["wood","stone","plant","dirt"]);
ToolAPI.setTool(ItemID.puls_wunx, "puls_wunx",ToolType.puls,["wood","stone","plant","dirt"]);



Callback.addCallback("PlayerAttack", function (/*攻*/player,/*受*/victim) {
let item = Player.getCarriedItem();
if (item.id == ItemID.puls_sword_god){
Entity.setHealth(victim, 0);
}
if (item.id == ItemID.puls_sword){
Entity.setHealth(victim, 0);
var pos = Entity.getPosition(Player.get());
    for(m in allMobs){
      var mobs = Entity.getAllInRange(pos, 6, allMobs[m]);
      for(i in mobs){
        var mob = mobs[i];
        Entity.setHealth(mob, 0);
        }
        }
}
if (item.id == ItemID.puls_wunx){
Entity.setHealth(victim, 0);
}
});




Recipes.addShaped ({id:ItemID.fixed_hook, count:1,data:0},[" a "," b ","   "], ['a',5,0,'b',280,0]);
Recipes.addShaped ({id:ItemID.Anvil, count:1,data:0},["aaa","b b","aaa"], ['a',4,0,'b',58,0]);
Recipes.addShaped ({id:ItemID.Anvil, count:1,data:0},["aaa","b b","aaa"], ['a',57,0,'b',58,0]);
Recipes.addShaped ({id:ItemID.puls_Anvil, count:1,data:0},["ab ","   ","   "], ['a',ItemID.fixed_hook,0,'b',ItemID.Anvil,0]);
Recipes.addShaped ({id:ItemID.Anvil_Ring, count:1,data:0},["ab ","bb ","   "], ['a',ItemID.puls_Anvil,0,'b',264,0]);
Recipes.addShaped ({id:ItemID.puls_sword, count:1,data:0},[" a "," a "," b "], ['a',ItemID.Anvil,0,'b',ItemID.fixed_hook,0]);
Recipes.addShaped ({id:ItemID.puls_pickaxe, count:1,data:0},["aaa"," b "," b "], ['a',ItemID.Anvil,0,'b',280,0]);
Recipes.addShaped ({id:ItemID.puls_shovel, count:1,data:0},[" a "," b "," b "], ['a',ItemID.Anvil,0,'b',280,0]);
Recipes.addShaped ({id:ItemID.puls_axe, count:1,data:0},["aa ","ab "," b "], ['a',ItemID.Anvil,0,'b',280,0]);
Recipes.addShaped ({id:ItemID.puls_hoe, count:1,data:0},["aa "," b "," b "], ['a',ItemID.Anvil,0,'b',280,0]);
Recipes.addShaped ({id:ItemID.puls_bow, count:1,data:0},[" ab","a b"," ab"], ['a',ItemID.Anvil,0,'b',ItemID.fixed_hook,0]);
Recipes.addShaped ({id:ItemID.puls_t, count:1,data:0},["aaa","a a","   "], ['a',ItemID.Anvil,0]);
Recipes.addShaped ({id:ItemID.puls_x, count:1,data:0},["a a","aaa","aaa"], ['a',ItemID.Anvil,0]);
Recipes.addShaped ({id:ItemID.puls_k, count:1,data:0},["aaa","a a","a a"], ['a',ItemID.Anvil,0]);
Recipes.addShaped ({id:ItemID.puls_xz, count:1,data:0},["   ","a a","a a"], ['a',ItemID.Anvil,0]);

Recipes.addShaped ({id:ItemID.puls_wunx, count:1,data:0},["abc"," d "," e "], ['a',ItemID.puls_shovel,0,'b',ItemID.puls_pickaxe,0,'c',ItemID.puls_axe,0,'d',ItemID.fixed_hook,0,'e',ItemID.puls_sword,0]);

Recipes.addShaped ({id:ItemID.puls_sword_god, count:1,data:0},["abc","def","ghj"], ['a',ItemID.puls_sword,0,'b',ItemID.puls_wunx,0,'c',ItemID.puls_bow,0,'d',ItemID.puls_wj,0,'e',ItemID.Anvil,0,'f',ItemID.puls_t,0,'g',ItemID.puls_x,0,'h',ItemID.puls_k,0,'j',ItemID.puls_xz,0]);




Item.registerNoTargetUseFunction("puls_sword_god", function(item){
if(item.id == ItemID.puls_sword_god){
 var pos = Entity.getPosition(Player.get());
    for(m in allMobs){
      var mobs = Entity.getAllInRange(pos, 512, allMobs[m]);
      for(i in mobs){
        var mob = mobs[i];
        Entity.setHealth(mob, 0)
Entity.spawn(mob.x,mob.y,mob.z,93);
}}}});

Callback.addCallback('EntityHurt', function (attacker, victim, damageValue, damageType, someBool1, someBool2) {
//任何实体时被攻击时调用。
let item = Player.getCarriedItem();
if(victim== Player.get()){
if(item.id==ItemID.puls_sword_god){
Game.prevent();
  }
 }
 if(victim== Player.get()){
   if(Entity.getArmorSlot(Player.get(), 0).id == ItemID.puls_t &&Entity.getArmorSlot(Player.get(), 1).id == ItemID.puls_x &&Entity.getArmorSlot(Player.get(), 2).id == ItemID.puls_k &&Entity.getArmorSlot(Player.get(), 3).id == ItemID.puls_xz){
  Game.prevent();
  }
}});



Callback.addCallback('tick', function () {
let item = Player.getCarriedItem();
if(item.id == ItemID.puls_sword_god){
Player.setFlyingEnabled(true);
  }
  if(Entity.getArmorSlot(Player.get(), 0).id == ItemID.puls_t &&Entity.getArmorSlot(Player.get(), 1).id == ItemID.puls_x &&Entity.getArmorSlot(Player.get(), 2).id == ItemID.puls_k &&Entity.getArmorSlot(Player.get(), 3).id == ItemID.puls_xz){
  Player.setFlyingEnabled(true);
  }
});




Callback.addCallback('ProjectileHitEntity', function (projectile, entity) {
//当抛出的实体击中生物时调用。
let item = Player.getCarriedItem();
if(item.id == ItemID.puls_bow){
Entity.setHealth(entity, 0);
Game.prevent();
}});




Item.registerNoTargetUseFunction("puls_bow", function(item){
if(item.id == ItemID.puls_bow){
 let 子弹 = Player.getPosition();
let 力量 = Entity.getLookVector(Player.get());
//发射的实体
var 子弹1 = Entity.spawn(子弹.x,子弹.y,子弹.z,80);
Entity.setVelocity(子弹1,8*力量.x,8*力量.y,8*力量.z);
}});









/*

Callback.addCallback("ItemUse", function(coords, item, block){
let item = Player.getCarriedItem();
if(item.id==0){打开工作台改()}
});


*/

Callback.addCallback("ItemUse", function(coords, item, block){
if(item.id==ItemID.Anvil_Ring||item.id==ItemID.puls_Anvil){
打开工作台改();
}
});

Callback.addCallback("ItemUse", function(c, item, block){
if(item.id==ItemID.Anvil){
World.setBlock(c.x, c.y+1, c.z, BlockID.Anvil, 0);
}
if(World.getBlock(c.x, c.y, c.z).ID == BlockID.Anvil){
打开工作台改();
}
});



Item.setGlint(ItemID.Anvil_Ring,true);
Item.setGlint(ItemID.puls_sword_god,true);
Item.setGlint(ItemID.puls_wj,true);
Item.setGlint(ItemID.puls_Anvil,true);

Item.setToolRender(ItemID.puls_sword_god,true);
Item.setToolRender(ItemID.puls_sword,true);
Item.setToolRender(ItemID.puls_pickaxe,true);
Item.setToolRender(ItemID.puls_wunx,true);
Item.setToolRender(ItemID.puls_axe,true);
Item.setToolRender(ItemID.puls_hoe,true);
Item.setToolRender(ItemID.puls_bow,true);
Item.setToolRender(ItemID.puls_shovel,true);



Translation.addTranslation("puls_sword",{zh:"§5砧板之刃",en:"§5Cutting Board Sword",ru:"§5Cutting Board Sword"});
Translation.addTranslation("puls_shovel",{zh:"§5砧板铲子",en:"§5Cutting Board Shovel",ru:"§5Cutting Board Shovel"});
Translation.addTranslation("puls_hoe",{zh:"§5砧板锄头",en:"§5Cutting Board Hoe",ru:"§5Cutting Board Hoe"});
Translation.addTranslation("puls_axe",{zh:"§5砧板斧头",en:"§5Cutting Board Axe",ru:"§5Cutting Board Axe"});
Translation.addTranslation("puls_bow",{zh:"§5砧板弓",en:"§5Cutting Board Bow",ru:"§5Cutting Board Bow"});
Translation.addTranslation("puls_pickaxe",{zh:"§5砧板镐",en:"§5Cutting Board Pickaxe",ru:"§5Cutting Board Pickaxe"});
Translation.addTranslation("puls_sword_god",{zh:"§4砧§6板§e之§a刃 §3[§1神§4]",en:"§5Cutting Board Sword[God]",ru:"§5Cutting Board Sword[God]"});
Translation.addTranslation("puls_wj",{zh:"§5无尽能源",en:"§5Source of All"});
Translation.addTranslation("puls_Anvil",{zh:"§5便携式砧板工作台",en:"§5Portable Crafting Cutting Board",ru:"§5Portable Crafting Cutting Board"});
Translation.addTranslation("Anvil_Ring",{zh:"§5砧板工作台戒指",en:"§5Crafting Cutting Board Ring",ru:"§5Crafting Cutting Board Ring"});
Translation.addTranslation("Anvil",{zh:"砧板",us:"Crafting Cutting Board",ru:"Crafting Cutting Board"});
Translation.addTranslation("fixed_hook",{zh:"木质钩子",en:"Cutting Board Hook",ru:"Cutting Board Hook"});
Translation.addTranslation("puls_t",{zh:"§5砧板头盔",en:"§5Cutting Board Helmet",ru:"§5Cutting Board Helmet"});
Translation.addTranslation("puls_x",{zh:"§5砧板胸甲",en:"§5Cutting Board Chestplate",ru:"§5Cutting Board Chestplate"});
Translation.addTranslation("puls_k",{zh:"§5砧板裤子",en:"§5Cutting Board Leggins",ru:"§5Cutting Board Leggins"});
Translation.addTranslation("puls_xz",{zh:"§5砧板鞋子",en:"§5Cutting Board Boots",ru:"§5Cutting Board Boots"});
Translation.addTranslation("puls_wunx",{zh:"§5砧板多功能工具",en:"§5Cutting Board Paxel",ru:"§5Cutting Board Paxel"});


Item.addCreativeGroup("砧板武器",Translation.translate("砧板武器"),[
ItemID.puls_bow,
ItemID.puls_sword,
ItemID.puls_sword_god
]);
Item.addCreativeGroup("砧板工具",Translation.translate("砧板工具"),[
ItemID.puls_hoe,
ItemID.puls_axe,
ItemID.puls_wunx,
ItemID.puls_pickaxe,
ItemID.puls_shovel
]);

Item.addCreativeGroup("砧板盔甲",Translation.translate("砧板盔甲"),[
ItemID.puls_t,
ItemID.puls_x,
ItemID.puls_k,
ItemID.puls_xz

]);
Item.addCreativeGroup("砧板",Translation.translate("砧板"),[
ItemID.puls_wj,
ItemID.puls_Anvil,
ItemID.Anvil,
ItemID.Anvil_Ring,
ItemID.fixed_hook
]);

