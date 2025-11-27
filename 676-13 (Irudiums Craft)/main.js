/*
BUILD INFO:
  dir: dev
  target: main.js
  files: 13
*/



// file: blocks/irumidium_block.js

IDRegistry.genBlockID("Block");

Block.createBlock("Block", [{name:"Блок Ирумидия", texture: [["block", 0]], inCreative: true}]);

ToolAPI.registerBlockMaterial(BlockID.Block, "stone");
Block.setDestroyTime(BlockID.Block, 10);
Block.setDestroyLevel(BlockID.Block, 3);








// file: ingots/irumidium_ingot.js

IDRegistry.genItemID("ingot");

Item.createItem("ingot", "Слиток Ирумидия", {name:"ingot", meta: 0}, {stack: 64});
Item.setGlint(ItemID.ingot, false);




// file: powder.js

IDRegistry.genItemID("powder");

Item.createItem("powder", "Магический Ирумидиевый Порошок", {name:"powder", meta: 0}, {stack: 64});
Item.setGlint(ItemID.powder, true);




// file: ores/ores.js

IDRegistry.genBlockID("ore");

Block.createBlock("ore", [{name:"Ирумидиевая Руда", texture: [["ore", 0]], inCreative: true}]);

ToolAPI.registerBlockMaterial(BlockID.ore, "stone");
Block.setDestroyTime(BlockID.ore, 10);
Block.setDestroyLevel(BlockID.ore, 2);



Callback.addCallback("GenerateChunkUnderground", function (chunkX, chunkZ) {
    for(var i=0;i<5;i++){
        var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 5, 125);
            GenerationUtils.generateOre(coords.x, coords.y, coords.z, BlockID.ore, 0, 6);
    }
}
);




// file: armors/armor.js

IDRegistry.genItemID("boots");
IDRegistry.genItemID("leggings");
IDRegistry.genItemID("chestplate");
IDRegistry.genItemID("helmet");

Item.createArmorItem("helmet", "Ирумидиевый Шлем", {name: "he"}, {type: "helmet", armor: 5, durability: 600, texture: "armor/1.png"});

Item.createArmorItem("chestplate", "Ирумидиевый Нагрудник", {name: "ch"}, {type: "chestplate", armor: 15, durability: 650, texture: "armor/1.png"});

Item.createArmorItem("leggings", "Ирумидиевые Поножи", {name: "le"}, {type: "leggings", armor: 10, durability: 700, texture: "armor/2.png"});

Item.createArmorItem("boots", "Ирумидиевые Ботинки", {name: "bo"}, {type: "boots", armor: 7, durability: 575, texture: "armor/1.png"});






Armor.registerFuncs(ItemID.helmet, { 
 tick: function(slot, index, durability){ 
 if(Player.getArmorSlot(1).id == ItemID.chestplate && Player.getArmorSlot(2).id == ItemID.leggings && Player.getArmorSlot(3).id == ItemID.boots){ 

Player.setFlyingEnabled(true);

 } 
 return false;
}, 
  hurt: function(params, slot, index, durability) {
  return false;
  } 
});





// file: tool/item.js

IDRegistry.genItemID("sword");
IDRegistry.genItemID("pickaxe");
IDRegistry.genItemID("axe");
IDRegistry.genItemID("hoe");
IDRegistry.genItemID("shovel");


Item.createItem("sword", "Ирумидиевый Меч", {name: "sword_iru", meta: 0}, {stack: 1});
Item.createItem("pickaxe", "Ирумидиевая Kирка", {name: "pickaxe_iru", meta: 0}, {stack: 1});
Item.createItem("axe", "Ирумидиевый Топор", {name: "axe_iru", meta: 0}, {stack: 1});
Item.createItem("hoe", "Ирумидиевая Мотыга", {name: "hoe_iru", meta: 0}, {stack: 1});
Item.createItem("shovel", "Ирумидиевая Лопата", {name: "sho_iru", meta: 0}, {stack: 1});


IMPORT("ToolType");

ToolAPI.addToolMaterial("sw", {durability: 900, level: 4, efficiency: 3, damage: 15, enchantability: 14});
ToolAPI.addToolMaterial("pc", {durability: 900, level: 5, efficiency: 15, damage: 8, enchantability: 14});
ToolAPI.addToolMaterial("ax", {durability: 900, level: 4, efficiency: 3, damage: 13, enchantability: 14});





ToolAPI.setTool(ItemID.sword, "sw", ToolType.sword);

ToolAPI.setTool(ItemID.pickaxe, "pc", ToolType.pickaxe);

ToolAPI.setTool(ItemID.axe, "ax", ToolType.axe);
ToolAPI.setTool(ItemID.hoe, "pc", ToolType.hoe);
ToolAPI.setTool(ItemID.shovel, "pc", ToolType.shovel);


Callback.addCallback("PostLoaded", function() {
Recipes.addShaped({id: ItemID.axe, count: 1, data: 0}, [
    "aa ", 
    "as ", 
    " s "
    ], ['a', ItemID.ingot,0, 's', 280,0]);
});


Callback.addCallback("PostLoaded", function() {
Recipes.addShaped({id: ItemID.hoe, count: 1, data: 0}, [
    "aa ", 
    "bs ", 
    " s "
    ], ['a', ItemID.ingot,0, 's', 280,0, 'b', 371,0]);
});

Callback.addCallback("PostLoaded", function() {
Recipes.addShaped({id: ItemID.shovel, count: 1, data: 0}, [
    " a ", 
    " s ", 
    " s "
    ], ['a', ItemID.ingot,0, 's', 280,0, 'b', 371,0]);
});




// file: tool/pix.js

Callback.addCallback('EntityDeath', function (entity, attacker, damageType) { Player.getScore

});




// file: ingots/ingots_upgread.js

IDRegistry.genItemID("ingot_upgr");

Item.createItem("ingot_upgr", "Улучшеный Слиток Ирумидия", {name:"ingot_upgr", meta: 0}, {stack: 64});
Item.setGlint(ItemID.ingot_upgr, true);




// file: blocks/irumidium_block_upgr.js

IDRegistry.genBlockID("Block_upgr");

Block.createBlock("Block_upgr", [{name:"Улучшеный Блок Ирумидия", texture: [["block_upgr", 0]], inCreative: true}]);

ToolAPI.registerBlockMaterial(BlockID.Block_upgr, "stone");
Block.setDestroyTime(BlockID.Block_upgr, 10);
Block.setDestroyLevel(BlockID.Block_upgr, 4);




Callback.addCallback("ItemUse", function(coords, item, block) {
  if (item.id==ItemID.powder && block.id== BlockID.Block) {
  World.setBlock(coords.x, coords.y, coords.z, 0, 0) 
  World.setBlock(coords.x, coords.y, coords.z, BlockID.Block_upgr, 0)
  Player.decreaseCarriedItem(1)
  Particles.addParticle(Native.ParticleType.hugeexplosion, coords.x + 0.5, coords.y + 0.5, coords.z + 0.5, 0, 0.1, 0, 0);
  World.playSound(coords.x, coords.y, coords.z, "random.explode", 3)
  World.drop(coords.x, coords.y, coords.z, BlockID.Block_upgr, 1, 0)
  World.destroyBlock(coords.x, coords.y, coords.z, 1)
}
});




// file: ingots/nagetts.js

IDRegistry.genItemID("nagetts");

Item.createItem("nagetts", "Кусочек Ирумидия", {name:"nagg", meta: 0}, {stack: 64});
Item.setGlint(ItemID.nagetts, false);




// file: groups.js

Translation.addTranslation("Iridium Armor", {ru: "Ирумидиевая Броня"});
Translation.addTranslation("Iridium Blocks", {ru: "Ирумидиевые Блоки"});
Translation.addTranslation("Iridium Tool", {ru: "Ирумидиевые Инструменты"});
Translation.addTranslation("Iridium Items", {ru: "Слитки и тд."});

//Ирумидиевая Броня



Callback.addCallback("PostLoaded", function () { 
Item.addCreativeGroup("Armor_Iridium", Translation.translate("Iridium Armor"), [
		ItemID.boots,
		ItemID.leggings,
		ItemID.chestplate,
		ItemID.helmet
	]);
});

//Ирумидиевые Блоки


Callback.addCallback("PostLoaded", function () { 
Item.addCreativeGroup("Iridium_Blocks", Translation.translate("Iridium Blocks"), [
		BlockID.Block,
		BlockID.Block_upgr
	]);
});


Callback.addCallback("PostLoaded", function () { 
Item.addCreativeGroup("Iridium_tool", Translation.translate("Iridium Tool"), [
		ItemID.sword,
		ItemID.pickaxe,
		ItemID.axe,
		ItemID.hoe, 
		ItemID.shovel
	]);
});



Callback.addCallback("PostLoaded", function () { 
Item.addCreativeGroup("Iridium_Items", Translation.translate("Iridium Items"), [
		ItemID.ingot,
		ItemID.ingot_upgr,
		ItemID.nagetts,
		ItemID.powder
	]);
});




// file: crafts/furnace.js

//Ирумидиевый Слиток

Recipes.addFurnace(BlockID.ore, 0, ItemID.nagetts, 0);




// file: crafts/shaped.js

    // Ирумидиевый Блок

Recipes.addShaped({id: BlockID.Block, count: 1, data: 0}, [
    "aaa", 
    "aaa", 
    "aaa"
    ], ['a', ItemID.ingot,0]);
    
    //Шлем Ирумидиевый
    
    Recipes.addShaped({id: ItemID.helmet, count: 1, data: 0}, [
    "aaa", 
    "a a", 
    "   "
    ], ['a', ItemID.ingot,0]);
    
    //Нагрудник Ирумидиевый
    
    Recipes.addShaped({id: ItemID.chestplate, count: 1, data: 0}, [
    "a a", 
    "aaa", 
    "aaa"
    ], ['a', ItemID.ingot,0]);
    
    //Поножи Ирумидиевые
    
    Recipes.addShaped({id: ItemID.leggings, count: 1, data: 0}, [
    "aaa", 
    "a a", 
    "a a"
    ], ['a', ItemID.ingot,0]);
    
    //Ботинки Ирумидиевые
    
    Recipes.addShaped({id: ItemID.boots, count: 1, data: 0}, [
    "   ", 
    "a a", 
    "a a"
    ], ['a', ItemID.ingot,0]);
    
    //Ирумидиевый Меч
    
    Recipes.addShaped({id: ItemID.sword, count: 1, data: 0}, [
    " a ", 
    " a ", 
    " s "
    ], ['a', ItemID.ingot,0, 's', 280,0]);
   
   
   //Слитки из Улучшеного Блока
   
   Recipes.addShaped({id: ItemID.ingot_upgr, count: 9, data: 0}, [
    "   ", 
    " a ", 
    "   "
    ], ['a', BlockID.Block_upgr,0]);
    
    
    //Слитки из Блока
    
    
    Recipes.addShaped({id: ItemID.ingot, count: 9, data: 0}, [
    "   ", 
    " a ", 
    "   "
    ], ['a', BlockID.Block,0]);
    
    
   //Улучшеный Блок
   
   
   Recipes.addShaped({id: BlockID.Block_upgr, count: 1, data: 0}, [
    "aaa", 
    "aaa", 
    "aaa"
    ], ['a', ItemID.ingot_upgr,0]); 
    
    //кусочки из слитка
    
    Recipes.addShaped({id: ItemID.nagetts, count: 9, data: 0}, [
    "   ", 
    " a ", 
    "   "
    ], ['a', ItemID.ingot,0]);
    
    //слиток из кусочков
    
    Recipes.addShaped({id: ItemID.ingot, count: 1, data: 0}, [
    "aaa", 
    "aaa", 
    "aaa"
    ], ['a', ItemID.nagetts,0]); 
    
    //магический порошок
    
    Recipes.addShaped({id: ItemID.powder, count: 1, data: 0}, [
    "ada", 
    "cbc", 
    "ada"
    ], ['a', ItemID.nagetts,0, 'b', 377,0, 'c', 351,5, 'd', ItemID.ingot,0]); 
   
   
   //кирка ирумидевая
   
   
   Recipes.addShaped({id: ItemID.pickaxe, count: 1, data: 0}, [
    "aaa", 
    " s ", 
    " s "
    ], ['a', ItemID.ingot,0, 's', 280,0]);




