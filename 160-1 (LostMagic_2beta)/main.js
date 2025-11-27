/*
BUILD INFO:
  dir: dev
  target: main.js
  files: 17
*/



// file: header.js

importLib("ToolType","*")

IMPORT("dimensions");
Callback.addCallback("LevelLoaded", function(){ 
	Game.message("LostMagic от KidBaxa, иди и познай силу магий!");
});




// file: rune.js

IDRegistry.genItemID("rune_karkas");
Item.createItem("rune_karkas", "Каркас рун", {name: "rune_karkas", meta: 0}, {stack: 64});
IDRegistry.genItemID("rune_aqua");
Item.createItem("rune_aqua", "Руна воды", {name: "rune_aqua", meta: 0}, {stack: 16});
Recipes.addShaped({id: ItemID.rune_aqua, count: 1, data: 0}, [
    " b ",
    "bab",
    " b "
], ['a', ItemID.rune_karkas, 0,'b', 373, 0]);
IDRegistry.genItemID("rune_ignis");
Item.createItem("rune_ignis", "Руна огня", {name: "rune_ignis", meta: 0}, {stack: 16});
Recipes.addShaped({id: ItemID.rune_ignis, count: 1, data: 0}, [
    " b ",
    "bab",
    " b "
], ['a', ItemID.rune_karkas, 0,'b', 377, 0]);
IDRegistry.genItemID("rune_naturae");
Item.createItem("rune_naturae", "Руна природы", {name: "rune_naturae", meta: 0}, {stack: 16});
Recipes.addShaped({id: ItemID.rune_naturae, count: 1, data: 0}, [
    " b ",
    "bab",
    " b "
], ['a', ItemID.rune_karkas, 0,'b', 296, 0]);
IDRegistry.genItemID("rune_sol");
Item.createItem("rune_sol", "Руна солнце", {name: "rune_sol", meta: 0}, {stack: 16});
Recipes.addShaped({id: ItemID.rune_sol, count: 1, data: 0}, [
    " b ",
    "bab",
    " b "
], ['a', ItemID.rune_karkas, 0,'b', 348, 0]);




// file: guide_book.js

IDRegistry.genItemID("basic_guide_book"); 
Item.createItem("basic_guide_book", "basic_guide_book", {name: "basic_guide_book", meta: 0}, {stack: 1});
		
ModAPI.addAPICallback("GuideAPI", function(api){ 
const GuideAPI = api.GuideAPI; 
const GuideHelper = api.GuideHelper; 
const PageControllers = api.PageControllers;
		
GuideAPI.registerGuide("basic_guide_book", { 
item: ItemID.basic_guide_book, 
debug: false, 
textures: { 
background: "guide_background_basic", 
nextLink: "next_page", 
preLink: "pre_page", 
close: "btn_close", 
}, 

				
pages: {
 
			"default": {
				nextLink: "test",
				left: {
					controller: PageControllers.BASIC_PAGE,
					elements: [
						{text: "LostMagic", size: 30},
						{text: "Здравствуй друг! Я буду твоим путеводителем по моду LostMagic. LostMagic - мод который добавить в игру затерянные магий. В этом моде вы сможете стать волшебником, и открывать многие секреты как и обычного до другого измерения. Но для начало ты должен изучить ее.", size: 20},
					]
				},
				
				right: {
					controller: PageControllers.BASIC_PAGE,
					elements: [
					    {text: "Основы", size: 26, link: "basics"},
						{text: "Блоки", size: 26, link: "blocks"},
						{text: "Броня", size: 26, link: "armor"},
						{text: "Оружие  и инструменты", size: 26, link: "weapons_and_instruments"},
						{text: "Начальные ритуалы", size: 26, link: "basics_rituals"},
						{text: "Ритуалы", size: 26, link: "rituals"},
						{text: "Рассказы", size: 26, link: "istories"},
						{text: "Другое", size: 26, link: "other"},
						
					]
				}
			},
			
						
//basics
			"basics": {
				preLink: "default",
				nextLink: "default",
			left: {
					controller: PageControllers.BASIC_PAGE,
					elements: [
						{text: "Основы", size: 30},
						{text: "Основы состоят с подготовки. Для подготовки нам нужны предметы для магий.", size: 23},
					]
				},			
				
		right: {
					controller: PageControllers.BASIC_PAGE,
					elements: [
					    {text: "предметы для основы:", size: 29, link: "items_for_basics"},
						{text: "Начальная палочка заклинаний", size: 25, link: "wand"},
						{text: "Алтарь ритуалов", size: 25, link: "altar"},
						{text: "Книга заклинаний", size: 25, link: "book_of_spells"},						
					]
				}
			},
			
//magic wand

	"wand": {
				preLink: "basics",
				nextLink: "basics",
			left: {
 controller: PageControllers.ITEM_PAGE,
 items: [ 
     {id: ItemID.basic_magic_wand, data: 0, clicker: {onClick: function(){alert("Магическая палочка");}}},

 ],
 elements: [
 {text: "Магическая палочка нужна чтобы управлять магией. Магическая палочка создается обычной палки и камнем созвездий. В игре есть несколько видов магических палочек: Начальная для более легких ритуалов, Средняя для более трудных для начальной и легкий для Мастерской, Мастерская магическая палочка - оно очень трудно крафтится, но оно очень мощное", size: 18}
 ]
 }
	},
}

})
});




// file: ores.js

IDRegistry.genBlockID("respherite_ore");
Block.createBlock("respherite_ore", [{name: "Руда респерита", texture: [["respherite_ore", 0], ["respherite_ore", 0], ["respherite_ore", 0], ["respherite_ore", 0], ["respherite_ore", 0], ["respherite_ore", 0]], inCreative: true}]);
ToolAPI.registerBlockMaterial(BlockID.respherite_ore, "stone"); 
Block.setDestroyTime(BlockID.respherite_ore, 4.3); 
Block.setDestroyLevel("respherite_ore", 3);
IDRegistry.genBlockID("Hellite_ore");
Block.createBlock("Hellite_ore", [{name: "Руда хеллита", texture: [["hellite_ore", 0], ["hellite_ore", 0], ["hellite_ore", 0], ["hellite_ore", 0], ["hellite_ore", 0], ["hellite_ore", 0]], inCreative: true}]);
ToolAPI.registerBlockMaterial(BlockID.Hellite_ore, "stone"); 
Block.setDestroyTime(BlockID.Hellite_ore, 4.3); 
Block.setDestroyLevel("Hellite_ore", 3);
IDRegistry.genBlockID("ruby_ore");
Block.createBlock("ruby_ore", [{name: "Рубиновая руда", texture: [["ruby_ore", 0], ["ruby_ore", 0], ["ruby_ore", 0], ["ruby_ore", 0], ["ruby_ore", 0], ["ruby_ore", 0]], inCreative: true}]);
ToolAPI.registerBlockMaterial(BlockID.ruby_ore, "stone"); 
Block.setDestroyTime(BlockID.ruby_ore, 4.3); 
Block.setDestroyLevel("ruby_ore", 3);
IDRegistry.genBlockID("mishril_ore");
Block.createBlock("mishril_ore", [{name: "Мишриловая руда", texture: [["mishril_ore", 0], ["mishril_ore", 0], ["mishril_ore", 0], ["mishril_ore", 0], ["mishril_ore", 0], ["mishril_ore", 0]], inCreative: true}]);
ToolAPI.registerBlockMaterial(BlockID.mishril_ore, "stone"); 
Block.setDestroyTime(BlockID.mishril_ore, 4.4); 




// file: ores_generation.js

Callback.addCallback("GenerateChunkUnderground", function (chunkX, chunkZ) {
    for(var i=0;i<5;i++){
        var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 1, 34);
            GenerationUtils.generateOre(coords.x, coords.y, coords.z, BlockID.respherite_ore, 0, 7);
    }
}
)
Callback.addCallback("GenerateChunkUnderground", function (chunkX, chunkZ) {
    for(var i=0;i<5;i++){
        var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 1, 34);
            GenerationUtils.generateOre(coords.x, coords.y, coords.z, BlockID.hellite_ore, 0, 7);
    }
}
)
Callback.addCallback("GenerateEndChunk", function (chunkX, chunkZ) {
    for(var i=0;i<3;i++){
        var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 3, 130);
            GenerationUtils.generateOre(coords.x, coords.y, coords.z, BlockID.mishril_ore, 0, 8);
    }
}
)
Callback.addCallback("GenerateChunkUnderground", function (chunkX, chunkZ) {
    for(var i=0;i<1;i++){
        var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 1, 34);
            GenerationUtils.generateOre(coords.x, coords.y, coords.z, BlockID.ruby_ore, 0, 4);
    }
}
)




// file: metals.js

IDRegistry.genItemID("respherite_ingot");
Item.createItem("respherite_ingot", "Респеритовый слиток", {name: "respherite_ingot", meta: 0}, {stack: 64});
IDRegistry.genItemID("hellite_ingot");
Item.createItem("hellite_ingot", "Хеллитовый слиток", {name: "hellite_ingot", meta: 0}, {stack: 64});
IDRegistry.genItemID("rubin");
Item.createItem("rubin", "Рубин", {name: "rubin", meta: 0}, {stack: 64});
IDRegistry.genItemID("mishril");
Item.createItem("mishril", "Мишрил", {name: "mishril", meta: 0}, {stack: 64});




// file: armor.js

IDRegistry.genItemID("hellite_helmet");
IDRegistry.genItemID("hellite_chestplate");
IDRegistry.genItemID("hellite_leggings");
IDRegistry.genItemID("hellite_boots");

Item.createArmorItem("hellite_helmet", "Хеллитовый шлем", {name: "hellite_helmet", meta: 0}, {type: "helmet", armor: 4, durability: 600, texture: "armor/hellite_armor1.png"});
Item.createArmorItem("hellite_chestplate", "Хеллитовая кираса", {name: "hellite_chestplate", meta: 0}, {type: "chestplate", armor: 5, durability: 700, texture: "armor/hellite_armor1.png"});
Item.createArmorItem("hellite_leggings", "Хеллитовые поножи", {name: "hellite_leggings", meta: 0}, {type: "leggings", armor: 4.5, durability: 650, texture: "armor/hellite_armor2.png"});
Item.createArmorItem("hellite_boots", "Хеллитовые ботинки", {name: "hellite_boots", meta: 0}, {type: "boots", armor: 4, durability: 600, texture: "armor/hellite_armor1.png"});
IDRegistry.genItemID("respherite_helmet");
IDRegistry.genItemID("respherite_chestplate");
IDRegistry.genItemID("respherite_leggings");
IDRegistry.genItemID("respherite_boots");

Item.createArmorItem("respherite_helmet", "Респеритовый шлем", {name: "respherite_helmet", meta: 0}, {type: "helmet", armor: 4, durability: 600, texture: "armor/respherite_armor1.png"});
Item.createArmorItem("respherite_chestplate", "Респеритовый нагрудник", {name: "respherite_chestplate", meta: 0}, {type: "chestplate", armor: 5, durability: 650, texture: "armor/respherite_armor1.png"});
Item.createArmorItem("respherite_leggings", "Нано поножи", {name: "respherite_leggings", meta: 0}, {type: "leggings", armor: 4.5, durability: 600, texture: "armor/respherite_armor2.png"});
Item.createArmorItem("respherite_boots", "Респеритовые ботинки", {name: "respherite_boots", meta: 0}, {type: "boots", armor: 4, durability: 550, texture: "armor/respherite_armor1.png"});




// file: instruments.js

IDRegistry.genItemID("hellite_Sword");
IDRegistry.genItemID("hellite_Shovel");
IDRegistry.genItemID("hellite_Pickaxe");
IDRegistry.genItemID("hellite_Axe");
Item.createItem("hellite_Sword", "Хеллитовый меч", {name: "hellite_Sword", meta: 0}, {stack: 1});
Item.createItem("hellite_Shovel", "Хеллитовая лопата", {name: "hellite_Shovel", meta: 0}, {stack: 1});
Item.createItem("hellite_Pickaxe", "Хеллитовая кирка", {name: "hellite_Pickaxe", meta: 0}, {stack: 1});
Item.createItem("hellite_Axe", "Хеллитовый топор", {name: "hellite_Axe", meta: 0}, {stack: 1});

ToolAPI.addToolMaterial("hellite", {durability: 820, level: 4, efficiency: 8, damage: 9, enchantability: 14});
ToolAPI.setTool(ItemID.hellite_Sword, "hellite", ToolType.sword);
ToolAPI.setTool(ItemID.hellite_Shovel, "hellite", ToolType.shovel);
ToolAPI.setTool(ItemID.hellite_Pickaxe, "hellite", ToolType.pickaxe);
ToolAPI.setTool(ItemID.hellite_Axe, "hellite", ToolType.axe);
Recipes.addShaped({id: ItemID.hellite_Pickaxe, count: 1, data: 0}, [
    "aaa",
    " b ",
    " a "
], ['a', ItemID.hellite_ingot, 0, 'b', 280, 0]);
Recipes.addShaped({id: ItemID.hellite_Shovel, count: 1, data: 0}, [
    " a ",
    " b ",
    " a "
], ['a', ItemID.hellite_ingot, 0, 'b', 280, 0]);
Recipes.addShaped({id: ItemID.hellite_Sword, count: 1, data: 0}, [
    " a ",
    " a ",
    " b "
], ['a', ItemID.hellite_ingot, 0, 'b', 280, 0]);
Recipes.addShaped({id: ItemID.hellite_Axe, count: 1, data: 0}, [
    "aa",
    "ab ",
    " a "
], ['a', ItemID.hellite_ingot, 0, 'b', 280, 0]);
IDRegistry.genItemID("respherite_Sword");
IDRegistry.genItemID("respherite_Shovel");
IDRegistry.genItemID("respherite_Pickaxe");
IDRegistry.genItemID("respherite_Axe");
Item.createItem("respherite_Sword", "Респеритовый меч", {name: "respherite_Sword", meta: 0}, {stack: 1});
Item.createItem("respherite_Shovel", "Респепитовая лопата", {name: "respherite_Shovel", meta: 0}, {stack: 1});
Item.createItem("respherite_Pickaxe", "Респеритовая кирка", {name: "respherite_Pickaxe", meta: 0}, {stack: 1});
Item.createItem("respherite_Axe", "Респеритовый топор", {name: "respherite_Axe", meta: 0}, {stack: 1});

ToolAPI.addToolMaterial("respherite", {durability: 805, level: 4, efficiency: 9, damage: 8, enchantability: 14});
ToolAPI.setTool(ItemID.respherite_Sword, "respherite", ToolType.sword);
ToolAPI.setTool(ItemID.respherite_Shovel, "respherite", ToolType.shovel);
ToolAPI.setTool(ItemID.respherite_Pickaxe,"respherite", ToolType.pickaxe);
ToolAPI.setTool(ItemID.respherite_Axe, "respherite", ToolType.axe);
Recipes.addShaped({id: ItemID.respherite_Pickaxe, count: 1, data: 0}, [
    "aaa",
    " b ",
    " a "
], ['a', ItemID.respherite_ingot, 0, 'b', 280, 0]);
Recipes.addShaped({id: ItemID.respherite_Shovel, count: 1, data: 0}, [
    " a ",
    " b ",
    " a "
], ['a', ItemID.respherite_ingot, 0, 'b', 280, 0]);
Recipes.addShaped({id: ItemID.respherite_Sword, count: 1, data: 0}, [
    " a ",
    " a ",
    " b "
], ['a', ItemID.respherite_ingot, 0, 'b', 280, 0]);
Recipes.addShaped({id: ItemID.respherite_Axe, count: 1, data: 0}, [
    "aa",
    "ab ",
    " a "
], ['a', ItemID.respherite_ingot, 0, 'b', 280, 0]);
IDRegistry.genItemID("mishril_Pickaxe");
Item.createItem("mishril_Pickaxe", "Мишриловая кирка", {name: "mishril_Pickaxe", meta: 0}, {stack: 1});
ToolAPI.addToolMaterial("mishril", {durability: 1200, level: 6, efficiency: 10, damage: 9.5, enchantability: 14});
ToolAPI.setTool(ItemID.mishril_Pickaxe, "mishril", ToolType.pickaxe);
Recipes.addShaped({id: ItemID.mishril_Pickaxe, count: 1, data: 0}, [
    "aaa",
    " b ",
    " b "
], ['a', ItemID.mishril, 0, 'b', 280, 0]);




// file: magic_items.js

IDRegistry.genItemID("basic_magic_wand");
Item.createItem("basic_magic_wand", "Basic magic wand", {name: "basic_magic_wand", meta: 0}, {stack: 64});
Recipes.addShaped({id: ItemID.basic_magic_wand, count: 1, data: 0}, [
    "a  ",
    " b ",
    "  b"
], ['a', ItemID.YellowStoneShard, 0, 'b', 280, 0]);
IDRegistry.genItemID("wand_master");
Item.createItem("wand_master", "wand master", {name: "wand_master", meta: 0}, {stack: 64});
IDRegistry.genItemID("YellowStoneShard");
Item.createItem("YellowStoneShard", "YellowStoneShard", {name: "YellowStoneShard", meta: 0}, {stack: 64});




// file: magic_blocks.js

IDRegistry.genBlockID("yellow_stone");
Block.createBlock("yellow_stone", [{name: "Камень созвездии", texture: [["yellow_stone", 0], ["yellow_stone", 0], ["yellow_stone", 0], ["yellow_stone", 0], ["yellow_stone", 0], ["yellow_stone", 0]], inCreative: true}]);
Block.setBlockShape(BlockID.yellow_stone, {x: 1/16, y: 0, z: 2/16}, {x: 6/16, y: 1/16, z: 7/16})
var YellowStoneShard = [1,2,35,37,4,18,27,28,13,243];
Callback.addCallback("GenerateChunk", function(chunkX, chunkZ){
		var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 64, 128);
		coords = GenerationUtils.findSurface(coords.x, coords.y, coords.z);
		for(var id in YellowStoneShard ){
			if((World.getBiome((chunkX + 0.5) * 20, (chunkZ + 0.5) * 20)==id)&&(World.getBlockID(coords.x, coords.y, coords.z) == 2 && 243)){
				World.setBlock(coords.x, coords.y + 1, coords.z, BlockID.yellow_stone, 0);
				World.addTileEntity(coords.x, coords.y + 1, coords.z);
						
		}
	}
});
Callback.addCallback("ItemUse", function(coords, item, block){
if(block.id == BlockID.yellow_stone) 
{
Game.prevent();
}});




// file: dimension.js

var Aether = new Dimension({
    name: "magic world",
    
    generation: {
        layers: [
            // major islands
            { 
                range: [0, 150],
                noise: {
                    octaves: {
                        count: 4,
                        weight: 0.9,
                        scale: [.015, .02752, .015]
                    }
                },
                
                gradient: [[0, -3], [.1, -.2], [0.5, .1], [.9, -.2], [2, -1]],
                
                terrain: {
                    base: BlockID.magic_world_coblestone,
                    cover: {
                        height: 4,
                        top: BlockID.magic_world_dirt,
                        block: 3
                    }
                }
            },
        ],
        
        decoration: {
            
        }
    },
    
    environment: {
        
    },
    
    callbacks: {
        tick: function() {
            Aether.getWrappedObject().(Math.random(), Math.random(), Math.random());
        }
    }
});


var AetherTransferSequence = new TransferSequence(Aether);
AetherTransferSequence.setPortalTimeout(40);

AetherTransferSequence.setPortalOverlay(new PortalOverlayWindow({
    frames: 32, 
    rate: 20, 
    fade: 1, 
    texture: "aether_portal_overlay_animation"
}));

AetherTransferSequence.setLoadingScreenParams({
    texture: "default_dimension_loading_screen"
});

PortalRegistry.newPortalBlock("aetherPortall", ["aether_portall", 0], AetherTransferSequence.getPortal(), {type: "u-plane", frameId: 4}, false);
AetherTransferSequence.setPortalTiles(BlockID.aetherPortall);





var shape = new PortalShape();
shape.setPortalId(BlockID.aetherPortall);
shape.setFrameIds(BlockID.green_piece);
shape.setMinSize(2, 3);

AetherTransferSequence.setPortalBuilder(shape.getBuilder());

Callback.addCallback("ItemUse", function(coords, item) {
    if (item.id == ItemID.basic_magic_wand) {
        var rect = shape.findPortal(coords.relative.x, coords.relative.y, coords.relative.z);
        if (rect) {
            shape.buildPortal(rect, false);
        }
    }
});

Callback.addCallback("DestroyBlock", function(pos, block){
    if (block.id == 4 || block.id == BlockID.aetherPortall) {
        DimensionHelper.eliminateIncorrectPlacedPortals(pos, BlockID.aetherPortall, [4]);
    }
});

























/*

var UndergroundJungle = new Dimension({
    name: "undergroundJungle",
    
    generation: {
        layers: [
            // main
            { 
                range: [0, 128],
                noise: {
                    octaves: {
                        count: 4,
                        weight: 1.1,
                        scale: [.015, .0275, .015]
                    }
                },
                
                gradient: [
                    [0, 1],
                    [0.075, 1],
                    [0.125, .6],
                    [0.25, -.33],
                    [0.4, .1],
                    [0.5, .3],
                    [0.8, .3],
                    [0.925, 1],
                    [1, 1]
                ],
                
                terrain: {
                    base: BlockID.aetherDirt
                }
            },
        ],
        
        decoration: {
            biome: 4,
            features: true
        }
    },
    
    environment: {
        
    },
    
    transfer: {
        handler: {
            correctPosition: function(pos) {
                var y = 120;
                while (World.getBlockID(pos.x, y, pos.z) > 0 && y > 0) {
                    y--;
                }
                
                if (y < 10) {
                    y = 120;
                }
                
                pos.y = y;
            },
            
            buildPortal: function(pos) {
                for (var x = -1; x < 2; x++) {
                    for (var z = -1; z < 2; z++) {
                        for (var y = -2; y < 2; y++) {
                            World.setBlock(Math.floor(pos.x + x), Math.floor(pos.y + y), Math.floor(pos.z + z), y > -2 ? 0 : 1, 0);
                        }
                    }
                }
            }
        }
    },
    
    callbacks: {
        
    }
});

*/






















// file: dimension_blocks.js

IDRegistry.genBlockID("magic_world_dirt");
Block.createBlock("magic_world_dirt", [{name: "Земля магического мира", texture: [["magic_world_dirt", 2], ["magic_world_dirtt", 0], ["magic_world_dirtt", 1], ["magic_world_dirtt", 1], ["magic_world_dirtt", 1], ["magic_world_dirtt", 1]], inCreative: true}]);
IDRegistry.genBlockID("magic_world_coblestone");
Block.createBlock("magic_world_coblestone", [{name: "булыжник магического мира", texture: [["magic_world_coblestone", 0], ["magic_world_coblestone", 0], ["magic_world_coblestone", 0], ["magic_world_coblestone", 0], ["magic_world_coblestone", 0], ["magic_world_coblestone", 0]], inCreative: true}]);
IDRegistry.genBlockID("green_piece");
Block.createBlock("green_piece", [{name: "Кусок Портала", texture: [["green_piece", 0], ["green_piece", 0], ["green_piece", 0], ["green_piece", 0], ["green_piece", 0], ["green_piece", 0]], inCreative: true}]);




// file: magic_book.js





// file: light_tree.js

IDRegistry.genBlockID("light_tree_leaves");
Block.createBlock("light_tree_leaves", [{name: "листва вишни", texture: [["light_tree_leaves", 0], ["light_tree_leaves", 0], ["light_tree_leaves", 0], ["light_tree_leaves", 0], ["light_tree_leaves", 0], ["light_tree_leaves", 0]], inCreative: true}]);
IDRegistry.genBlockID("magic_tree_log");
Block.createBlock("magic_tree_log", [{name: "древесина магического дерева", texture: [["log", 1], ["log", 1], ["log", 0], ["log", 0], ["log", 0], ["log", 0]], inCreative: true}]);




// file: light_tree_generation.js





// file: drop_from_blocks.js

Block.registerDropFunction(BlockID.yellow_stone, function(coords, blockID, blockData, level){
	var drop = [];
		drop.push([ItemID.YellowStoneShard, 1, 0]);
	return drop;
});
Block.registerDropFunction(BlockID.ruby_ore, function(coords, blockID, blockData, level){
	var drop = [];
		drop.push([ItemID.rubin, 1, 0]);
	return drop;
});
Block.registerDropFunction(BlockID.mishril_ore, function(coords, blockID, blockData, level){
	var drop = [];
		drop.push([ItemID.mishril, 1, 0]);
	return drop;
});




// file: food.js

IDRegistry.genItemID("frikadelka");
Item.createFoodItem("frikadelka", "Фрикаделька", {name: "frikadelka", meta: 0}, {food: 3.5, isTech: true});
Recipes.addShaped({id: ItemID.frikadelka, count: 1, data: 0}, [
    "   ",
    "ab ",
    "   "
], ['a', 319, 0,'b', 363, 0]);




