IMPORT("RecipeTileEntityLib")
importLib("ToolType", "*")

function randomInt(min, max){ 
return Math.floor(Math.random() * (max - min + 1)) + min; 
}
//Blocks
//Blocks
//Blocks
IDRegistry.genBlockID("ancient_debris");
IDRegistry.genBlockID("nether_gold_ore");
IDRegistry.genBlockID("basalt");
IDRegistry.genBlockID("polished_basalt");
IDRegistry.genItemID("netherite_scrap");
IDRegistry.genItemID("netherite_ingot");
IDRegistry.genBlockID("netherite_block");
IDRegistry.genBlockID("smithing_table_mod");

IDRegistry.genItemID("netherite_helmet");
IDRegistry.genItemID("netherite_chestplate");
IDRegistry.genItemID("netherite_leggings");
IDRegistry.genItemID("netherite_boots");

IDRegistry.genItemID("netherite_sword");
IDRegistry.genItemID("netherite_axe");
IDRegistry.genItemID("netherite_pickaxe");
IDRegistry.genItemID("netherite_shovel");
IDRegistry.genItemID("netherite_hoe");

Item.createItem("netherite_sword", "Netherite Sword", {name: "netherite_sword", meta: 0}, {stack: 1});
ToolAPI.addToolMaterial("netherite_sword", {durability: 2031, level: 0, efficiency: 5, damage: 10, enchantability: 14});
ToolAPI.setTool(ItemID.netherite_sword, "netherite_sword", ToolType.sword);

Item.createItem("netherite_axe", "Netherite Axe", {name: "netherite_axe", meta: 0}, {stack: 1});
ToolAPI.addToolMaterial("netherite_axe", {durability: 2031, level: 0, efficiency: 5, damage: 7, enchantability: 14});
ToolAPI.setTool(ItemID.netherite_axe, "netherite_axe", ToolType.axe);

Item.createItem("netherite_pickaxe", "Netherite Pickaxe", {name: "netherite_pickaxe", meta: 0}, {stack: 1});
ToolAPI.addToolMaterial("netherite_pickaxe", {durability: 2031, level: 5, efficiency: 5, damage: 7, enchantability: 14});
ToolAPI.setTool(ItemID.netherite_pickaxe, "netherite_pickaxe", ToolType.pickaxe);

Item.createItem("netherite_shovel", "Netherite Shovel", {name: "netherite_shovel", meta: 0}, {stack: 1});
ToolAPI.addToolMaterial("netherite_shovel", {durability: 2031, level: 0, efficiency: 5, damage: 10, enchantability: 14});
ToolAPI.setTool(ItemID.netherite_shovel, "netherite_shovel", ToolType.shovel);

Item.createItem("netherite_hoe", "Netherite Hoe", {name: "netherite_hoe", meta: 0}, {stack: 1});
ToolAPI.addToolMaterial("netherite_hoe", {durability: 2031, level: 0, efficiency: 5, damage: 5, enchantability: 14});
ToolAPI.setTool(ItemID.netherite_hoe, "netherite_hoe", ToolType.hoe);

Item.createArmorItem("netherite_helmet", "Netherite Helmet", {name: "netherite_helmet"}, {type: "helmet", armor: 3, durability: 407, texture: "armor/netherite_layer_1.png"});
Item.createArmorItem("netherite_chestplate", "Netherite Chestplate", {name: "netherite_chestplate"}, {type: "chestplate", armor: 3, durability: 407, texture: "armor/netherite_layer_1.png"});
Item.createArmorItem("netherite_leggings", "Netherite Leggings", {name: "netherite_leggings"}, {type: "leggings", armor: 3, durability: 407, texture: "armor/netherite_layer_2.png"});
Item.createArmorItem("netherite_boots", "Netherite Boots", {name: "netherite_boots"}, {type: "boots", armor: 3, durability: 407, texture: "armor/netherite_layer_2.png"});

Block.createBlock("ancient_debris", [
     {name: "Ancient Debris", 
     texture: 
     [["ancient_debris_top", 0], 
     ["ancient_debris_top", 0], 
     ["ancient_debris_side", 0], 
     ["ancient_debris_side", 0], 
     ["ancient_debris_side", 0], 
     ["ancient_debris_side", 0]], inCreative: true, }
], {explosionres: 6000, destroytime: 150});
ToolAPI.registerBlockMaterial(BlockID.ancient_debris, "stone", 4, true);
Block.setDestroyLevel("ancient_debris", 4);

Block.createBlock("smithing_table_mod", [
     {name: "Smithing Table", 
     texture: 
     [["smithing_table_bottom", 0], 
     ["smithing_table_top", 0], 
     ["smithing_table_front", 0], 
     ["smithing_table_side", 0], 
     ["smithing_table_front", 0], 
     ["smithing_table_side", 0]], inCreative: true, }
], {destroytime: 5.65});
ToolAPI.registerBlockMaterial(BlockID.smithing_table_mod, "wood", 0, true);
Block.setDestroyLevel("smithing_table_mod", 0);

Block.createBlock("netherite_block", [
     {name: "Netherite Block", 
     texture: 
     [["netherite_block", 0]], inCreative: true, }
], {explosionres: 6000, destroytime: 65});
ToolAPI.registerBlockMaterial(BlockID.netherite_block, "stone", 4, true);
Block.setDestroyLevel("netherite_block", 4);

Block.createBlockWithRotation("basalt", [
     {name: "Basalt", 
     texture: 
     [["basalt_top", 0], 
     ["basalt_top", 0], 
     ["basalt_side", 0], 
     ["basalt_side", 0], 
     ["basalt_side", 0], 
     ["basalt_side", 0]], inCreative: true, }
], {explosionres: 5, destroytime: 1.25});
ToolAPI.registerBlockMaterial(BlockID.basalt, "stone", 1, true);
Block.setDestroyLevel("basalt", 1);

Block.createBlockWithRotation("polished_basalt", [
     {name: "Polished Basalt", 
     texture: 
     [["polished_basalt_top", 0], 
     ["polished_basalt_top", 0], 
     ["polished_basalt_side", 0], 
     ["polished_basalt_side", 0], 
     ["polished_basalt_side", 0], 
     ["polished_basalt_side", 0]], inCreative: true, }
], {explosionres: 5, destroytime: 1.25});
ToolAPI.registerBlockMaterial(BlockID.polished_basalt, "stone", 1, true);
Block.setDestroyLevel("polished_basalt", 1);


Block.createBlock("nether_gold_ore", [
     {name: "Nether Gold Ore", 
     texture: 
     [["nether_gold_ore", 0]], inCreative: true, }
]);
ToolAPI.registerBlockMaterial(BlockID.nether_gold_ore, "stone", 1, true);
Block.setDestroyLevel("nether_gold_ore", 1);

Item.createItem("netherite_scrap", "Netherite Scrap", {name: "netherite_scrap", meta: 0}, {});

Item.createItem("netherite_ingot", "Netherite Ingot", {name: "netherite_ingot", meta: 0}, {});
//callbacks
//callbacks
//callbacks

Callback.addCallback("GenerateNetherChunk", function(chunkX, chunkZ){
    for(var i = 0; i < 8; i++){
        var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 8, 22);
        GenerationUtils.generateOre(coords.x, coords.y, coords.z, BlockID.ancient_debris, 0, 3, false);
        //Debug.message("Ancient Debris generated - X:" + coords.x + " Y:" + coords.y + " Z:" + coords.z) 
    }
});

Callback.addCallback("GenerateNetherChunk", function(chunkX, chunkZ){
    for(var i = 0; i < 8; i++){
        var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 22, 119);
        GenerationUtils.generateOre(coords.x, coords.y, coords.z, BlockID.ancient_debris, 0, 2, false);
        //Debug.message("Ancient Debris generated - X:" + coords.x + " Y:" + coords.y + " Z:" + coords.z) 
    }
});

Callback.addCallback("GenerateNetherChunk", function(chunkX, chunkZ){
    for(var i = 0; i < 20; i++){
        var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 8, 119);
        GenerationUtils.generateOre(coords.x, coords.y, coords.z, BlockID.nether_gold_ore, 0, 8, false);
        //Debug.message("Nether Gold Ore generated - X:" + coords.x + " Y:" + coords.y + " Z:" + coords.z) 
    }
});

Callback.addCallback("GenerateNetherChunk", function(chunkX, chunkZ){
    for(var i = 0; i < 15; i++){
        var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 32, 119);
        GenerationUtils.generateOre(coords.x, coords.y, coords.z, BlockID.basalt, 0, 25, false);
        //Debug.message("Basalt generated - X:" + coords.x + " Y:" + coords.y + " Z:" + coords.z) 
    }
});


Block.registerDropFunction("nether_gold_ore", function(coords, blockID, blockData, level, enchant){ 
//Debug.message("BlockID: "+blockID+", BlockData: "+blockData+", Level: "+level+", Enchant: "+enchant)
if(level>=1){
 if(enchant.silk){ 
 return [[blockID, 1, 0]]; 
 } 
 //371
 var drop = [[371,  randomInt(2,6), 0]]; 
 if(Math.random() < enchant.fortune/3 - 1/3){drop.push(drop[0]);} 
 ToolAPI.dropOreExp(coords, 2, 5, enchant.experience); 
 return drop; 
 }
});

//translation
//translation
//translation
Translation.addTranslation("Ancient Debris", {
    ru: "Древний обломок"
});
Translation.addTranslation("Nether Gold Ore", {
    ru: "Незераковая золотая руда"
});
Translation.addTranslation("Basalt", {
    ru: "Базальт"
});
Translation.addTranslation("Polished Basalt", {
    ru: "Полированный базальт"
});
Translation.addTranslation("Netherite Scrap", {
    ru: "Незеритовый лом"
});
Translation.addTranslation("Netherite Ingot", {
    ru: "Незеритовый слиток"
});
Translation.addTranslation("Netherite Block", {
    ru: "Незеритовый блок"
});
Translation.addTranslation("Smithing Table", {
    ru: "Кузнечный станок"
});
Translation.addTranslation("Upgrade  Gear", {
    ru: "Улучшить предмет"
});

Translation.addTranslation("Netherite Helmet", {
    ru: "Незеритовый шлем"
});
Translation.addTranslation("Netherite Chestplate", {
    ru: "Незеритовая кираса"
});
Translation.addTranslation("Netherite Leggings", {
    ru: "Незеритовые поножи"
});
Translation.addTranslation("Netherite Boots", {
    ru: "Незеритовые ботинки"
});

Translation.addTranslation("Netherite Sword", {
    ru: "Незеритовый меч"
});
Translation.addTranslation("Netherite Axe", {
    ru: "Незеритовый топор"
});
Translation.addTranslation("Netherite Pickaxe", {
    ru: "Незеритовая кирка"
});
Translation.addTranslation("Netherite Shovel", {
    ru: "Незеритовая лопата"
});
Translation.addTranslation("Netherite Hoe", {
    ru: "Незеритовая мотыга"
});
//recipes
//recipes
//recipes
Recipes.addFurnace(BlockID.nether_gold_ore, 266, 0);
Recipes.addFurnace(BlockID.ancient_debris, ItemID.netherite_scrap, 0);
Recipes.addShaped({id: BlockID.polished_basalt, count: 1, data: 0}, /* Результат крафта */
	["aa", "aa"],
	['a', BlockID.basalt, 0]
); 
Recipes.addShaped({id: ItemID.netherite_ingot, count: 1, data: 0}, /* Результат крафта */
	[" aa", "aax", "xxx"],
	['a', ItemID.netherite_scrap, 0, 'x', 266, 0]
); 
Recipes.addShaped({id: BlockID.netherite_block, count: 1, data: 0}, /* Результат крафта */
	["aaa", "aaa", "aaa"],
	['a', ItemID.netherite_ingot, 0]
); 
Recipes.addShaped({id: ItemID.netherite_ingot, count: 9, data: 0}, /* Результат крафта */
	["a"],
	['a', BlockID.netherite_block, 0]
); 
Recipes.addShaped({id: BlockID.smithing_table_mod, count: 1, data: 0}, /* Результат крафта */
	["aa", "xx", "xx"],
	['a', 265, 0, 'x', 5, 0]
); 

var smithing_table = new UI.StandartWindow({
    standart: {
        header: {text: {text: Translation.translate("Smithing Table")}},
        inventory: {standart:true},
        background: {standart: true},
        RV: true
    },
    drawing: [{
        type: "bitmap",
        bitmap: "plus",
        x: 450,
        y: 170,
        RV: true,
        scale: 4
    },{
    	type: "bitmap",
        bitmap: "arrow",
        x: 650,
        y: 170,
        RV: true,
        scale: 2
   },{
   	type: "bitmap",
       bitmap: "hammer",
       x: 350,
       y: 90,
       RV: true,
       scale: 2
    },{
       type: "text",
       text: Translation.translate("Upgrade  Gear"),
       x: 420,
       y: 130,
       RV: true,
       scale: 1
    }],
    elements:{
        "inputSlot0":{x:350, y:170, type:"slot"},
        "inputSlot1":{x:550, y:170, type:"slot", bitmap: "ingotplace"},

        "outputSlot":{x:750, y:170, type:"slot"}
    }
});

RecipeTE.registerWorkbench("smithing_table_mod",//SID блока
{
   rows:1,//Кол-во строк сетки
   cols:2,//Кол-во столбцов сетки
    GuiScreen: smithing_table//Интерфейс верстака
    //Так же тут можно(И нужно) описать поля TileEntity
});
RecipeTE.addShapeRecipe("smithing_table_mod", {
    id:ItemID.netherite_helmet,
    count:1
    }, [
    "ax"
    ], {
    a:{
        id:310
    },x:{
        id: ItemID.netherite_ingot
    }
});
RecipeTE.addShapeRecipe("smithing_table_mod", {
    id:ItemID.netherite_chestplate,
    count:1
    }, [
    "ax"
    ], {
    a:{
        id:311
    },x:{
        id: ItemID.netherite_ingot
    }
});
RecipeTE.addShapeRecipe("smithing_table_mod", {
    id:ItemID.netherite_leggings,
    count:1
    }, [
    "ax"
    ], {
    a:{
        id:312
    },x:{
        id: ItemID.netherite_ingot
    }
});
RecipeTE.addShapeRecipe("smithing_table_mod", {
    id:ItemID.netherite_boots,
    count:1
    }, [
    "ax"
    ], {
    a:{
        id:313
    },x:{
        id: ItemID.netherite_ingot
    }
});
RecipeTE.addShapeRecipe("smithing_table_mod", {
    id:ItemID.netherite_sword,
    count:1
    }, [
    "ax"
    ], {
    a:{
        id: 276
    },x:{
        id: ItemID.netherite_ingot
    }
});
RecipeTE.addShapeRecipe("smithing_table_mod", {
    id:ItemID.netherite_shovel,
    count:1
    }, [
    "ax"
    ], {
    a:{
        id: 277
    },x:{
        id: ItemID.netherite_ingot
    }
});
RecipeTE.addShapeRecipe("smithing_table_mod", {
    id:ItemID.netherite_axe,
    count:1
    }, [
    "ax"
    ], {
    a:{
        id: 279
    },x:{
        id: ItemID.netherite_ingot
    }
});
RecipeTE.addShapeRecipe("smithing_table_mod", {
    id:ItemID.netherite_pickaxe,
    count:1
    }, [
    "ax"
    ], {
    a:{
        id: 278
    },x:{
        id: ItemID.netherite_ingot
    }
});
RecipeTE.addShapeRecipe("smithing_table_mod", {
    id:ItemID.netherite_hoe,
    count:1
    }, [
    "ax"
    ], {
    a:{
        id: 293
    },x:{
        id: ItemID.netherite_ingot
    }
});
