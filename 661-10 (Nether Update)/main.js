/*
BUILD INFO:
  dir: dev
  target: main.js
  files: nil
*/

// file: header.js

/*
░█▄─░█ █▀▀ ▀▀█▀▀ █──█ █▀▀ █▀▀█ 
░█░█░█ █▀▀ ──█── █▀▀█ █▀▀ █▄▄▀ 
░█──▀█ ▀▀▀ ──▀── ▀──▀ ▀▀▀ ▀─▀▀ 

░█─░█ █▀▀█ █▀▀▄ █▀▀█ ▀▀█▀▀ █▀▀ 
░█─░█ █──█ █──█ █▄▄█ ──█── █▀▀ 
─▀▄▄▀ █▀▀▀ ▀▀▀─ ▀──▀ ──▀── ▀▀▀

build 9
This code is a copyright, do not distribute.
*/
importLib("ToolType", "*")

let BlockSide = Native.BlockSide;
const Color = android.graphics.Color;

function randomInt(min, max){ 
return Math.floor(Math.random() * (max - min + 1)) + min; 
}
// file: translation.js

Translation.addTranslation("Ancient Debris", {
    ru_RU: "Древний обломок", zh_CN: "远古残骸", zh_TW: "古代碎片"
});
Translation.addTranslation("Nether Gold Ore", {
    ru_RU: "Незераковая золотая руда", zh_CN: "下界金矿石", zh_TW: "地獄金礦"
});
Translation.addTranslation("Basalt", {
    ru_RU: "Базальт", zh_CN: "玄武岩", zh_TW: "玄武岩"
});
Translation.addTranslation("Polished Basalt", {
    ru_RU: "Полированный базальт", zh_CN: "磨制玄武岩", zh_TW: "拋光玄武岩"
});
Translation.addTranslation("Netherite Scrap", {
    ru_RU: "Незеритовый лом", zh_CN: "下界合金碎片", zh_TW: "獄髓廢料"
});
Translation.addTranslation("Netherite Ingot", {
    ru_RU: "Незеритовый слиток", zh_CN: "下界合金锭", zh_TW: "獄髓錠塊"
});
Translation.addTranslation("Netherite Block", {
    ru_RU: "Незеритовый блок", zh_CN: "下界合金块", zh_TW: "獄髓方塊"
});
Translation.addTranslation("Smithing Table", {
    ru_RU: "Кузнечный станок", zh_CN: "锻造台", zh_TW: "打鐵台"
});
Translation.addTranslation("Upgrade  Gear..", {
    ru_RU: "Модернизировать..", zh_CN: "升级装备", zh_TW: "升級裝備"
});

Translation.addTranslation("Netherite Helmet", {
    ru_RU: "Незеритовый шлем", zh_CN: "下界合金头盔", zh_TW: "獄髓頭盔"
});
Translation.addTranslation("Netherite Chestplate", {
    ru_RU: "Незеритовая кираса", zh_CN: "下界合金胸甲", zh_TW: "獄髓胸板"
});
Translation.addTranslation("Netherite Leggings", {
    ru_RU: "Незеритовые поножи", zh_CN: "下界合金护腿",zh_TW: "獄髓護腿"
});
Translation.addTranslation("Netherite Boots", {
    ru_RU: "Незеритовые ботинки", zh_CN: "下界合金靴子", zh_TW: "獄髓靴"
});

Translation.addTranslation("Netherite Sword", {
    ru_RU: "Незеритовый меч", zh_CN: "下界合金剑", zh_TW: "獄髓劍"
});
Translation.addTranslation("Netherite Axe", {
    ru_RU: "Незеритовый топор", zh_CN: "下界合金斧头", zh_TW: "獄髓斧"
});
Translation.addTranslation("Netherite Pickaxe", {
    ru_RU: "Незеритовая кирка", zh_CN: "下界合金镐", zh_TW: "獄髓鎬"
});
Translation.addTranslation("Netherite Shovel", {
    ru_RU: "Незеритовая лопата", zh_CN: "下界合金锹", zh_TW: "獄髓鏟"
});
Translation.addTranslation("Netherite Hoe", {
    ru_RU: "Незеритовая мотыга", zh_CN: "下界合金锄头", zh_TW: "獄髓鋤頭"
});

// file: core/TileRender.js

let TileRender = {
    setLogTypeRender: function (blockID) {
        Callback.addCallback("ItemUse", function (coords, item, block) {
            let place = coords.relative;
            let tile1 = World.getBlock(place.x, place.y, place.z);
            if (World.canTileBeReplaced(tile1.id, tile1.data) && item.id === blockID) {
                Game.prevent();
                if (coords.side == BlockSide.DOWN || coords.side == BlockSide.UP) {
                    World.setBlock(coords.relative.x, coords.relative.y, coords.relative.z, item.id, 0);
                }
                else if (coords.side == BlockSide.NORTH || coords.side == BlockSide.SOUTH) {
                    World.setBlock(coords.relative.x, coords.relative.y, coords.relative.z, item.id, 1);
                }
                else if (coords.side == BlockSide.WEST || coords.side == BlockSide.EAST) {
                    World.setBlock(coords.relative.x, coords.relative.y, coords.relative.z, item.id, 2);
                }
            }
            return true;
        })
    },
    setSlabTypeRender: function (blockID, fullBlockID) {
        Callback.addCallback("ItemUse", function (position, item, block) {
            if (item.id == blockID) {
                Game.prevent();
                if (block.id == item.id && block.data == 0 && position.side == BlockSide.UP) {
                    World.setBlock(position.x, position.y, position.z, fullBlockID, 0);
                    return true;
                }
                if (block.id == item.id && block.data == 1 && position.side == BlockSide.DOWN) {
                    World.setBlock(position.x, position.y, position.z, fullBlockID, 0);
                    return true;
                }
                let place = World.canTileBeReplaced(block.id, block.data) ? position : position.relative;
                let tileID = World.getBlockID(place.x, place.y, place.z);
                let tileDATA = World.getBlockData(place.x, place.y, place.z);

                if (position.vec.y - place.y < 0.5) {
                    if (tileID == blockID && tileDATA == 1) {
                        World.setBlock(place.x, place.y, place.z, fullBlockID, 0);
                        return true;
                    }
                    World.setBlock(place.x, place.y, place.z, item.id, item.data);
                }
                else {
                    if (tileID == blockID && tileDATA == 0) {
                        World.setBlock(place.x, place.y, place.z, fullBlockID, 0);
                        return true;
                    }
                    World.setBlock(place.x, place.y, place.z, item.id, 1);
                }
                return true;
            }
        })
        Block.setBlockShape(blockID, { x: 0, y: 0, z: 0 }, { x: 1, y: 0.5, z: 1 }, 0);
        Block.setBlockShape(blockID, { x: 0, y: 0.5, z: 0 }, { x: 1, y: 1, z: 1 }, 1);
    }
}

// file: block/ancient_debris.js

IDRegistry.genBlockID("ancient_debris");

Block.createBlock("ancient_debris", [
     {name: "Ancient Debris", 
     texture: 
     [["ancient_debris_top", 0], 
     ["ancient_debris_top", 0], 
     ["ancient_debris_side", 0], 
     ["ancient_debris_side", 0], 
     ["ancient_debris_side", 0], 
     ["ancient_debris_side", 0]], inCreative: true, }
], {explosionres: 6000, destroytime: 7});
ToolAPI.registerBlockMaterial(BlockID.ancient_debris, "stone", 4, true);
Block.setDestroyLevel("ancient_debris", 4);

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

// file: block/nether_gold_ore.js

IDRegistry.genBlockID("nether_gold_ore");

Block.createBlock("nether_gold_ore", [
     {name: "Nether Gold Ore", 
     texture: 
     [["nether_gold_ore", 0]], inCreative: true, }
]);
ToolAPI.registerBlockMaterial(BlockID.nether_gold_ore, "stone", 1, true);
Block.setDestroyLevel("nether_gold_ore", 1);

Callback.addCallback("GenerateNetherChunk", function(chunkX, chunkZ){
    for(var i = 0; i < 20; i++){
        var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 8, 119);
        GenerationUtils.generateOre(coords.x, coords.y, coords.z, BlockID.nether_gold_ore, 0, 8, false);
        //Debug.message("Nether Gold Ore generated - X:" + coords.x + " Y:" + coords.y + " Z:" + coords.z) 
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

// file: block/basalt.js

IDRegistry.genBlockID("basalt");
IDRegistry.genBlockID("polished_basalt");

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

Block.createBlock("polished_basalt", [
    {
        name: "Polished Basalt",
        texture: [
            ["polished_basalt_top", 0], ["polished_basalt_top", 0],
            ["polished_basalt_side", 0], ["polished_basalt_side", 0],
            ["polished_basalt_side", 0], ["polished_basalt_side", 0]
        ],
        inCreative: true
    },
    {
        name: "Polished Basalt",
        texture: [
            ["polished_basalt_side", 0], ["polished_basalt_side", 0],
            ["polished_basalt_top", 0], ["polished_basalt_top", 0],
            ["polished_basalt_side_rotated", 0], ["polished_basalt_side_rotated", 0]
        ],
        inCreative: false
    },
    {
        name: "Polished Basalt",
        texture: [
            ["polished_basalt_side_rotated", 0], ["polished_basalt_side_rotated", 0],
            ["polished_basalt_side_rotated", 0], ["polished_basalt_side_rotated", 0],
            ["polished_basalt_top", 0], ["polished_basalt_top", 0]
        ],
        inCreative: false
    }
], {explosionres: 5, destroytime: 1.25});
ToolAPI.registerBlockMaterial(BlockID.polished_basalt, "stone", 1, true);
Block.setDestroyLevel("polished_basalt", 1);
TileRender.setLogTypeRender(BlockID.polished_basalt);

Callback.addCallback("GenerateNetherChunk", function(chunkX, chunkZ){
    for(var i = 0; i < 15; i++){
        var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 32, 119);
        GenerationUtils.generateOre(coords.x, coords.y, coords.z, BlockID.basalt, 0, 25, false);
        //Debug.message("Basalt generated - X:" + coords.x + " Y:" + coords.y + " Z:" + coords.z) 
    }
});

// file: block/netherite_block.js

IDRegistry.genBlockID("netherite_block");

Block.createBlock("netherite_block", [
     {name: "Netherite Block", 
     texture: 
     [["netherite_block", 0]], inCreative: true, }
], {explosionres: 6000, destroytime: 7});
ToolAPI.registerBlockMaterial(BlockID.netherite_block, "stone", 4, true);
Block.setDestroyLevel("netherite_block", 4);


// file: armor/netherite_armor.js

IDRegistry.genItemID("netherite_boots");
Item.createArmorItem("netherite_boots", "Netherite Boots", {name: "netherite_boots"}, {type: "boots", armor: 6, durability: 407, texture: "armor/netherite_layer_1.png"});

IDRegistry.genItemID("netherite_chestplate");
Item.createArmorItem("netherite_chestplate", "Netherite Chestplate", {name: "netherite_chestplate"}, {type: "chestplate", armor: 16, durability: 407, texture: "armor/netherite_layer_1.png"});

IDRegistry.genItemID("netherite_helmet");
Item.createArmorItem("netherite_helmet", "Netherite Helmet", {name: "netherite_helmet"}, {type: "helmet", armor: 6, durability: 407, texture: "armor/netherite_layer_1.png"});

IDRegistry.genItemID("netherite_leggings");
Item.createArmorItem("netherite_leggings", "Netherite Leggings", {name: "netherite_leggings"}, {type: "leggings", armor: 12, durability: 407, texture: "armor/netherite_layer_2.png"});

// file: item/items.js

IDRegistry.genItemID("netherite_ingot");
Item.createItem("netherite_ingot", "Netherite Ingot", {name: "netherite_ingot", meta: 0}, {});

IDRegistry.genItemID("netherite_scrap");
Item.createItem("netherite_scrap", "Netherite Scrap", {name: "netherite_scrap", meta: 0}, {});

// file: tools/netherite_tools.js

IDRegistry.genItemID("netherite_sword");
IDRegistry.genItemID("netherite_axe");
IDRegistry.genItemID("netherite_pickaxe");
IDRegistry.genItemID("netherite_shovel");
IDRegistry.genItemID("netherite_hoe");

Item.createItem("netherite_sword", "Netherite Sword", {name: "netherite_sword", meta: 0}, {stack: 1});
ToolAPI.addToolMaterial("netherite_sword", {durability: 2031, level: 0, efficiency: 5, damage: 10, enchantability: 15});
ToolAPI.setTool(ItemID.netherite_sword, "netherite_sword", ToolType.sword);

Item.createItem("netherite_axe", "Netherite Axe", {name: "netherite_axe", meta: 0}, {stack: 1});
ToolAPI.addToolMaterial("netherite_axe", {durability: 2031, level: 0, efficiency: 5, damage: 7, enchantability: 15});
ToolAPI.setTool(ItemID.netherite_axe, "netherite_axe", ToolType.axe);

Item.createItem("netherite_pickaxe", "Netherite Pickaxe", {name: "netherite_pickaxe", meta: 0}, {stack: 1});
ToolAPI.addToolMaterial("netherite_pickaxe", {durability: 2031, level: 5, efficiency: 5, damage: 7, enchantability: 15});
ToolAPI.setTool(ItemID.netherite_pickaxe, "netherite_pickaxe", ToolType.pickaxe);

Item.createItem("netherite_shovel", "Netherite Shovel", {name: "netherite_shovel", meta: 0}, {stack: 1});
ToolAPI.addToolMaterial("netherite_shovel", {durability: 2031, level: 0, efficiency: 5, damage: 10, enchantability: 15});
ToolAPI.setTool(ItemID.netherite_shovel, "netherite_shovel", ToolType.shovel);

Item.createItem("netherite_hoe", "Netherite Hoe", {name: "netherite_hoe", meta: 0}, {stack: 1});
ToolAPI.addToolMaterial("netherite_hoe", {durability: 2031, level: 0, efficiency: 5, damage: 5, enchantability: 15});
ToolAPI.setTool(ItemID.netherite_hoe, "netherite_hoe", ToolType.hoe);

// file: block/smithing_table_mod.js

IDRegistry.genBlockID("smithing_table_mod");

Block.createBlock("smithing_table_mod", [
     {name: "Smithing Table", 
     texture: 
     [["smithing_table_bottom", 0], 
     ["smithing_table_top", 0], 
     ["smithing_table_front", 0], 
     ["smithing_table_front", 0], 
     ["smithing_table_side", 0], 
     ["smithing_table_side", 0]], inCreative: true, }
], {destroytime: 5.65, sound: "wood"});
ToolAPI.registerBlockMaterial(BlockID.smithing_table_mod, "wood", 0, true);
Block.setDestroyLevel("smithing_table_mod", 0);

var smithing_table = new UI.StandartWindow({
    standart: {
        header: {text: {text: Translation.translate("Smithing Table")}},
        inventory: {standart:true},
        background: {standart: true},
    },
    drawing: [{
        type: "bitmap",
        bitmap: "plus",
        x: 450,
        y: 170,
        scale: 4
    },{
    	type: "bitmap",
        bitmap: "arrow",
        x: 640,
        y: 170,
        scale: 4
   },{
   	type: "bitmap",
       bitmap: "hammer",
       x: 350,
       y: 90,
       scale: 2
    },{
       type: "text",
       text: Translation.translate("Upgrade  Gear.."),
       x: 435,
       y: 130,
       font: {color: Color.BLACK},
       scale: 1
    }],
    elements:{
        "inputSlot0":{x:350, y:170, type:"slot"},
        "inputSlot1":{x:550, y:170, type:"slot"/*, bitmap: "ingotplace"*/},

        "outputSlot":{x:750, y:170, type:"slot"}
    }
});

TileEntity.registerPrototype(BlockID.smithing_table_mod, {
	useNetworkItemContainer: true,
	
	getScreenName: function(player, coords) {
        return "main";
    },
    getScreenByName: function(screenName) {
        return smithing_table;
    },
    
    init: function () {
    	this.container.setSlotAddTransferPolicy("outputSlot", function(container, name, id, amount, data, extra, playerUid){return 0;})//result slot
    
        this.container.setSlotAddTransferPolicy("inputSlot0", function(container, name, id, amount, data, extra, playerUid)
		{
			if (container.getSlot("inputSlot0").count == 1) {
				return 0;
			}else{
				return 1;
			}
		}) //base slot
		
		this.container.setSlotAddTransferPolicy("inputSlot1", function(container, name, id, amount, data, extra, playerUid)
		{
			if (container.getSlot("inputSlot1").count == 1) {
				return 0;
			}else{
				return 1;
			}
		}) //netherite slot
		
		this.container.setSlotGetTransferPolicy("outputSlot", function(container, name, id, amount, data, extra, playerUid)
		{
			container.getSlot("inputSlot1").id = 0
			container.getSlot("inputSlot1").count = 0
			container.getSlot("inputSlot0").id = 0
			container.getSlot("inputSlot0").count = 0
			return 1;
		})
    },
    
    destroy: function(){
    	this.container.getSlot("outputSlot").id = 0
		this.container.getSlot("outputSlot").count = 0
    },
	
	tick: function(){
		var baseSlot = this.container.getSlot("inputSlot0");
		var netheriteSlot = this.container.getSlot("inputSlot1");
		var resultSlot = this.container.getSlot("outputSlot");
		var extraTemp;
		var extraData;
		
		//netherite_helmet
		if(baseSlot.id == 310 && IDRegistry.getNameByID(netheriteSlot.id) == "netherite_ingot") {
			extraTemp = baseSlot.extra
			extraData = baseSlot.data
			resultSlot.id = ItemID.netherite_helmet
			resultSlot.count = 1;
			this.container.setSlot("outputSlot", this.container.getSlot("outputSlot").id, 1, extraData, extraTemp);
			//netherite chestplate
		} else if(baseSlot.id == 311 && IDRegistry.getNameByID(netheriteSlot.id) == "netherite_ingot") {
			extraTemp = baseSlot.extra
			extraData = baseSlot.data
			resultSlot.id = ItemID.netherite_chestplate
			resultSlot.count = 1;
			this.container.setSlot("outputSlot", this.container.getSlot("outputSlot").id, 1, extraData, extraTemp);
			//netherite leggings
		} else if(baseSlot.id == 312 && IDRegistry.getNameByID(netheriteSlot.id) == "netherite_ingot") {
			extraTemp = baseSlot.extra
			extraData = baseSlot.data
			resultSlot.id = ItemID.netherite_leggings
			resultSlot.count = 1;
			this.container.setSlot("outputSlot", this.container.getSlot("outputSlot").id, 1, extraData, extraTemp);
			//netherite boots
		} else if(baseSlot.id == 313 && IDRegistry.getNameByID(netheriteSlot.id) == "netherite_ingot") {
			extraTemp = baseSlot.extra
			extraData = baseSlot.data
			resultSlot.id = ItemID.netherite_boots
			resultSlot.count = 1;
			this.container.setSlot("outputSlot", this.container.getSlot("outputSlot").id, 1, extraData, extraTemp);
			//netherite sword
		} else if(baseSlot.id == 276 && IDRegistry.getNameByID(netheriteSlot.id) == "netherite_ingot") {
			extraTemp = baseSlot.extra
			extraData = baseSlot.data
			resultSlot.id = ItemID.netherite_sword
			resultSlot.count = 1;
			this.container.setSlot("outputSlot", this.container.getSlot("outputSlot").id, 1, extraData, extraTemp);
			//netherite axe
		} else if(baseSlot.id == 279 && IDRegistry.getNameByID(netheriteSlot.id) == "netherite_ingot") {
			extraTemp = baseSlot.extra
			extraData = baseSlot.data
			resultSlot.id = ItemID.netherite_axe
			resultSlot.count = 1;
			this.container.setSlot("outputSlot", this.container.getSlot("outputSlot").id, 1, extraData, extraTemp);
			//netherite pickaxe
		} else if(baseSlot.id == 278 && IDRegistry.getNameByID(netheriteSlot.id) == "netherite_ingot") {
			extraTemp = baseSlot.extra
			extraData = baseSlot.data
			resultSlot.id = ItemID.netherite_pickaxe
			resultSlot.count = 1;
			this.container.setSlot("outputSlot", this.container.getSlot("outputSlot").id, 1, extraData, extraTemp);
			//netherite shovel
		} else if(baseSlot.id == 277 && IDRegistry.getNameByID(netheriteSlot.id) == "netherite_ingot") {
			extraTemp = baseSlot.extra
			extraData = baseSlot.data
			resultSlot.id = ItemID.netherite_shovel
			resultSlot.count = 1;
			this.container.setSlot("outputSlot", this.container.getSlot("outputSlot").id, 1, extraData, extraTemp);
			//netherite hoe
		} else if(baseSlot.id == 293 && IDRegistry.getNameByID(netheriteSlot.id) == "netherite_ingot") {
			extraTemp = baseSlot.extra
			extraData = baseSlot.data
			resultSlot.id = ItemID.netherite_hoe
			resultSlot.count = 1;
			this.container.setSlot("outputSlot", this.container.getSlot("outputSlot").id, 1, extraData, extraTemp);
		}else{
			resultSlot.id = 0
			resultSlot.count = 0;
			this.container.setSlot("outputSlot", this.container.getSlot("outputSlot").id, 0, 0);
		}
		
		//visual final
		if (baseSlot.count == 0) {
			this.container.setSlot("inputSlot0", 0, 0, 0);
		}
		if (netheriteSlot.count == 0) {
			this.container.setSlot("inputSlot1", 0, 0, 0);
		}
		this.container.validateAll()
	}
});

// file: recipes.js

Recipes.addFurnace(BlockID.nether_gold_ore, 266, 0);
Recipes.addFurnace(BlockID.ancient_debris, ItemID.netherite_scrap, 0);
Recipes.addShaped({id: BlockID.polished_basalt, count: 4, data: 0}, /* Результат крафта */
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