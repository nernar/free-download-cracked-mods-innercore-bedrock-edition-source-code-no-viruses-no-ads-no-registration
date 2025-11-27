/*
BUILD INFO:
  dir: source
  target: main.js
  files: 68
*/



// file: header.js

/***
 *      ___      _                 _                    _    _            _     _ 
 *     / _ \    | |               | |                  | |  | |          | |   | |
 *    / /_\ \ __| |_   _____ _ __ | |_ _   _ _ __ ___  | |  | | ___  _ __| | __| |
 *    |  _  |/  ` \ \ / / _ \ '_ \| __| | | | '__/ _ \ | |/\| |/ _ \| '__| |/ _` |
 *    | | | | (_| |\ V /  __/ | | | |_| |_| | | |  __/ \  /\  / (_) | |  | | (_| |
 *    \_| |_/\__,_| \_/ \___|_| |_|\__|\__,_|_|  \___|  \/  \/ \___/|_|  |_|\__,_|
 *                                                                                
 *    by @MeduiIthron                                                                            
 */

IMPORT("ItemDictionary");
IMPORT("ToolLib");
IMPORT("EntityState");
IMPORT("ScalesRPG");
IMPORT("ThirstLib");

let __OBJECT_BLOCK_TYPE =  Block.createSpecialType({
    lightopacity: 2
})

String.prototype.rsplit = function (sep, maxsplit) {
    var split = this.split(sep);
    return maxsplit ? [split.slice(0, -maxsplit).join(sep)].concat(split.slice(-maxsplit)) : split;
}

const ChatColor = ModAPI.requireGlobal("ChatColor");
const Level = ModAPI.requireGlobal("Level");

/**
 * Возвращает дроп с блока
 * @param {*} position координаты блока
 * @param {*} id ID блока
 * @param {*} data data блока
 * @param {*} tool инструмент
 */
Block.getBlockDrop = function (position, id, data, tool) {
    var dropFunc = Block.dropFunctions[id];
    if (dropFunc) {
        return dropFunc(position, id, data, ToolAPI.getToolLevel(tool), {});
    }
    return [[id, 1, data]];
};

/**
 * Устанавливает уровень разрушения блоку
 * @param {*} id ID блока
 * @param {*} level уровень разрушения
 */
Block.setDestroyLevel = function (id, level) {
    Block.registerDropFunction(id, function (position, blockID, blockData, lvl, enchant) {
        if (lvl >= level) {
            return [[blockID, 1, 0]];
        }
        return [];
    }, level);
};

ItemDictionary.setItemCategory(17, "minecraft:wood");
ItemDictionary.setItemCategory(162, "minecraft:wood");

ItemDictionary.setItemCategory(50, "minecraft:tool.fire");
ItemDictionary.setItemCategory(259, "minecraft:tool.fire");

var Graphics = {};




// file: controller/options.js

var Options = {
    DEBUG_MODE: __config__.getBool("debug_mode"),
    DISABLE_LEAVES_SHAPE: __config__.getBool("disable_leaves_shape"),
    DISABLE_WOODEN_TOOLS: __config__.getBool("disable_wooden_tools")
};

Callback.addCallback("LevelLoaded", function () {
    Options.DEBUG_MODE = __config__.getBool("debug_mode");
    Options.DISABLE_LEAVES_SHAPE = __config__.getBool("disable_leaves_shape");
    Options.DISABLE_WOODEN_TOOLS = __config__.getBool("disable_wooden_tools");
});




// file: controller/random.js

/**
 * Simplifies pseudo random numbers
 */
const Random = {

    /**
     * Returns a double random number
     * @param {number} minimum minimum possible value
     * @param {number} maximum maximum possible value
     */
    randomDouble: function (minimum, maximum) {
        return Math.random() * (maximum - minimum) + minimum;
    },

    /**
      * Returns a integer random number
      * @param {number} minimum minimum possible value
      * @param {number} maximum maximum possible value
      */
    randomInteger: function (minimum, maximum) {
        return Math.floor(this.randomDouble(minimum, maximum));
    }
};




// file: controller/particle.js

const Particle = {

    createSystem: function (x, y, z) {
        let system = new Particles.ParticleEmitter(x, y, z);
        return system;
    },

    effectExplode: function (identifier, x, y, z, power, count) {
        count ? null : count = 25;
        power ? null : power = 0.3;

        let system = this.createSystem(0, 0, 0);

        for (var i = 0; i < count; i++) {
            system.emit(identifier, 0, x + 0.5, y + 0.5, z + 0.5, (Math.random() - 0.5) * power, (Math.random() - 0.5) * power, (Math.random() - 0.5) * power);
        }
    },

    effectHighSpiral: function (identifier, x, y, z, diameter, height, velX, velY, velZ) {
        diameter /= 2;
        velX ? null : velX = 0;
        velY ? null : velY = 0;
        velZ ? null : velZ = 0;

        let system = this.createSystem(0, 0, 0);

        for (var i = 0; i < height * 2; i = i + 0.05) {
            system.emit(identifier, 0, x + 0.5 + Math.sin(i) * diameter, y + (i / 2), z + 0.5 + Math.cos(i) * diameter, velX, velY, velZ);
        }
    },

    effectRound: function (identifier, x, y, z, diameter, velX, velY, velZ) {
        diameter /= 2;
        velX ? null : velX = 0;
        velY ? null : velY = 0;
        velZ ? null : velZ = 0;

        let system = this.createSystem(0, 0, 0);

        for (var i = 0; i < 2 * (Math.PI * diameter); i = i + 0.1) {
            system.emit(identifier, 0, x + 0.5 + Math.sin(i) * diameter, y, z + 0.5 + Math.cos(i) * diameter, velX, velY, velZ);
        }
    },

    effectLine: function (identifier, x, y, z, X, Y, Z, step, velX, velY, velZ) {
        velX ? null : velX = 0;
        velY ? null : velY = 0;
        velZ ? null : velZ = 0;
        step ? null : step = 0.1;
        let xDistance = X - x;
        let yDistance = Y - y;
        let zDistance = Z - z;
        let distance = Math.sqrt(xDistance * xDistance + yDistance * yDistance + zDistance * zDistance)
        xDistance /= distance;
        yDistance /= distance;
        zDistance /= distance;

        let system = this.createSystem(0, 0, 0);

        for (var i = 0; i < distance; i += step) {
            let X = x + xDistance * i;
            let Y = y + yDistance * i;
            let Z = z + zDistance * i;
            system.emit(identifier, 0, X, Y, Z, velX, velY, velZ);
        }
    },

    effectSpiral: function (identifier, x, y, z, diameter, velX, velY, velZ) {
        diameter /= 2;
        velX ? null : velX = 0;
        velY ? null : velY = 0;
        velZ ? null : velZ = 0;
        var rad = diameter;

        let system = this.createSystem(0, 0, 0);

        for (var i = 0; i < Math.PI * (Math.PI * rad); i = i + 0.1) {
            system.emit(identifier, x + 0.5 + Math.sin(i) * diameter, y + 0.1, z + 0.5 + Math.cos(i) * diameter, velX, velY, velZ);
            diameter -= 0.01;
        }
    },

    effectEllipse: function (identifier, x, y, z, x_diameter, z_diameter, step, velX, velY, velZ) {
        x_diameter = x_diameter / 2;
        z_diameter = z_diameter / 2;
        velX ? null : velX = 0;
        velY ? null : velY = 0;
        velZ ? null : velZ = 0;

        let system = this.createSystem(0, 0, 0);

        for (var i = 0; i < Math.PI * (Math.pow(x_diameter + z_diameter, 2)); i += 0.05) {
            system.emit(identifier, 0, x + 0.5 + Math.sin(i) * x_diameter, y + 0.1, z + 0.5 + Math.cos(i) * z_diameter, velX, velY, velZ);
        }
    }
};




// file: controller/recipe.js

/**
 * Recipe and craft module
 */

var Recipe = {

    /**
     * Creates a recipe with a tool in a workbench slot
     * @param {object} result - native shapeless craft `result` param
     * @param {object} data - native shapeless craft `data` param
     * @param {number} tool - Tool ID
     * @param {function} - on recipe craft function callback
     */
    registerRecipeWithTool: function (result, data, tool, onCraftEvent) {
        data.push({ id: tool, data: -1 });
        Recipes.addShapeless(result, data, function (api, field, result) {
            onCraftEvent(api, data, field);
            for (var i in field) {
                if (field[i].id == tool) {
                    field[i].data++;
                    if (field[i].data >= Item.getMaxDamage(tool)) {
                        field[i].id = field[i].count = field[i].data = 0;
                    }
                }
                else {
                    api.decreaseFieldSlot(i);
                }
            }
        })
    }
};




// file: controller/model_render.js

const ModelRender = {

    setBlockEmptyShape: function(blockID, blockData){
        let render = new ICRender.CollisionShape();
        render.addEntry().addBox(1, 1, 1, 0, 0, 0);
        BlockRenderer.setCustomCollisionShape(blockID, blockData, render);
    },

    importBlockRenderFromMesh: function(modelFile){
        let model = new RenderMesh();
        model.importFromFile(__dir__ + "assets/models/blocks/" + modelFile, "obj", {
            scale: [1 / 16, 1 / 16, 1 / 16],
            translate: [0.5, 0.5, 0.5]
        });
        return model;
    }
};




// file: controller/shared.js

ModAPI.registerAPI("TerraCore", {
    ModelRender: ModelRender,
    Options: Options,
    Particle: Particle,
    Random: Random,
    Recipe: Recipe,
    Graphics: Graphics,

	requireGlobal: function(command){
		return eval(command);
	}
});

Logger.Log("AdventureWorld API shared with name TerraCore.", "API");




// file: controller/recipe_craft/craft_blast_furnace.js

/**
 * Blast Furnace craft controller
 */

Recipe.__blast_recipes_liquid = {};
Recipe.__blast_recipes_form = {};

/**
 * Creates a liquid recipe for a blast furnace
 * @param {number} sourceItem - ID of the source item
 * @param {object} resultLiquid - Result liquid
 */
Recipe.registerBlastLiquidRecipe = function (sourceItem, resultLiquid) {
    this.__blast_recipes_liquid[sourceItem] = resultLiquid;
};

/**
 * Creates a recipe for a blast furnace
 * @param {number} sourceForm - ID of the source item
 * @param {string} sourceLiquid - ID of the source liquid
 * @param {object} resultItem - Result item
 */
Recipe.registerBlastFormRecipe = function (sourceForm, sourceLiquid, resultItem) {
    let key = sourceForm + ":" + sourceLiquid;
    this.__blast_recipes_form[key] = resultItem;
};

/**
 * Returns the liquid recipe for a blast furnace
 * @param {number} sourceItem - ID of the source item
 */
Recipe.getBlastLiquidRecipe = function (sourceItem) {
    return this.__blast_recipes_liquid[sourceItem] || null;
};

/**
 * Returns the recipe for a blast furnace
 * @param {number} sourceItem - ID of the source item
 * @param {string} sourceLiquid - ID of the source liquid
 */
Recipe.getBlastFormRecipe = function (sourceItem, sourceLiquid) {
    let key = sourceItem + ":" + sourceLiquid;
    return this.__blast_recipes_form[key] || null;
};

/**
 * Remove the liquid recipe for a blast furnace
 * @param {number} sourceItem - ID of the source item
 */
Recipe.removeBlastLiquidRecipe = function (sourceItem) {
    if (this.__blast_recipes_liquid[sourceItem])
        delete this.__blast_recipes_liquid[sourceItem];
};

/**
 * Remove the recipe for a blast furnace
 * @param {number} sourceItem - ID of the source item
 * @param {string} sourceLiquid - ID of the source liquid
 */
Recipe.removeBlastFormRecipe = function (sourceItem, sourceLiquid) {
    let key = sourceItem + ":" + sourceLiquid;
    if (this.__blast_recipes_form[key])
        delete this.__blast_recipes_form[key];
};

Recipe.registerBlastLiquidRecipe(265, { type: "iron", count: 1 });
Recipe.registerBlastLiquidRecipe(15, { type: "iron", count: 1 });
Recipe.registerBlastLiquidRecipe(42, { type: "iron", count: 9 });

Recipe.registerBlastLiquidRecipe(266, { type: "gold", count: 1 });
Recipe.registerBlastLiquidRecipe(14, { type: "gold", count: 1 });
Recipe.registerBlastLiquidRecipe(41, { type: "gold", count: 9 });




// file: controller/recipe_craft/craft_sieve.js

/**
 * Sieve craft controller
 */

Recipe.__sieve_recipes = {};

/**
 * Creates a recipe for a sieve
 * @param {number} sourceItem - ID of the source item
 * @param {number} randomChance - Random chance
 */
Recipe.registerSieveRecipe = function (sourceItem, randomChance) {
    this.__sieve_recipes[sourceItem] = function (randomValue) {
        if (randomValue < randomChance && Random.randomDouble(0, 10) < randomChance) {
            return sourceItem;
        }
        return null;
    };
};

/**
 * Returns the recipe for a sieve
 * @param {number} randomChance - Random chance
 */
Recipe.getSieveRecipe = function (randomChance) {
    let result = [];
    for (var i in this.__sieve_recipes) {
        if (this.__sieve_recipes[i]) {
            let resultItem = this.__sieve_recipes[i](randomChance);
            if (resultItem) {
                result.push(resultItem);
            }
        }
    }
    let randomIndex = Random.randomInteger(0, result.length);
    return result[randomIndex];
};

/**
 * Remove the recipe for a sieve
 * @param {number} sourceItem - ID of the source item
 */
Recipe.removeSieveRecipe = function (sourceItem) {
    if (this.__sieve_recipes[sourceItem])
        delete this.__sieve_recipes[sourceItem];
};

ItemDictionary.setItemCategory(12, "minecraft:rock.flushed");
ItemDictionary.setItemCategory(13, "minecraft:rock.flushed");




// file: controller/recipe_craft/craft_campfire.js

/**
 * Campfire craft controller
 */

Recipe.__campfire_recipes = {};

/**
 * Creates a recipe for roasting in a bonfire
 * @param {object} sourceItem { id, count, data } source item
 * @param {object} resultItem { id, count, data } source item
 */
Recipe.registerCampfireRecipe = function (sourceItem, resultItem) {
    let key1 = sourceItem.id;
    let key2 = sourceItem.count ? sourceItem.count : 1;
    let key3 = sourceItem.data ? sourceItem.data : 0;
    this.__campfire_recipes[key1 + ":" + key2 + ":" + key3] = resultItem;
};

/**
 * Returns the recipe for the original item *
 * @param {object} sourceItem { id, count, data } source item
 */
Recipe.getCampfireRecipe = function (sourceItem) {
    let key1 = sourceItem.id;
    let key2 = sourceItem.count ? sourceItem.count : 1;
    let key3 = sourceItem.data || sourceItem.data > 0 ? sourceItem.data : 0;
    return this.__campfire_recipes[key1 + ":" + key2 + ":" + key3] || null
};

Callback.addCallback("PreLoaded", function () {
    for (var i in ItemDictionary.getCategory("minecraft:wooden_log")) {
        Recipe.registerCampfireRecipe({ id: i }, { id: 263, data: 1 });
    }
    Recipe.registerCampfireRecipe({ id: 319, data: 0 }, { id: 320, data: 0 });
    Recipe.registerCampfireRecipe({ id: 349, data: 0 }, { id: 350, data: 0 });
    Recipe.registerCampfireRecipe({ id: 349, data: 1 }, { id: 350, data: 1 });
    Recipe.registerCampfireRecipe({ id: 365, data: 0 }, { id: 366, data: 0 });
    Recipe.registerCampfireRecipe({ id: 363, data: 0 }, { id: 364, data: 0 });
    Recipe.registerCampfireRecipe({ id: 280, data: 0 }, { id: 50, data: 0 });
});




// file: controller/recipe_craft/craft_composter.js

/**
 * Compost system
 */
Recipe.__compost_recipes = {};

/**
 * Creates an operation in the composter
 * @param { number } id item ID
 * @param { number } chance chance to increase filling level
 */
Recipe.registerComposterRecipe = function (id, chance) {
    this.__compost_recipes[id] = chance;
};

/**
 * Returns the chance of operation in the composter
 * @param { number } id item ID
 */
Recipe.getComposterRecipe = function (id) {
    return this.__compost_recipes[id] || null;
};

Callback.addCallback("PreLoaded", function () {
    Recipe.registerComposterRecipe(18, 30);
    Recipe.registerComposterRecipe(6, 30);
    Recipe.registerComposterRecipe(295, 30);
    Recipe.registerComposterRecipe(361, 30);
    Recipe.registerComposterRecipe(362, 30);
    Recipe.registerComposterRecipe(458, 30);

    Recipe.registerComposterRecipe(175, 50);
    Recipe.registerComposterRecipe(106, 50);
    Recipe.registerComposterRecipe(31, 50);
    Recipe.registerComposterRecipe(338, 50);
    Recipe.registerComposterRecipe(360, 50);
    Recipe.registerComposterRecipe(81, 50);

    Recipe.registerComposterRecipe(103, 65);
    Recipe.registerComposterRecipe(86, 65);
    Recipe.registerComposterRecipe(91, 65);
    Recipe.registerComposterRecipe(39, 65);
    Recipe.registerComposterRecipe(40, 65);
    Recipe.registerComposterRecipe(392, 65);
    Recipe.registerComposterRecipe(391, 65);
    Recipe.registerComposterRecipe(111, 65);
    Recipe.registerComposterRecipe(296, 65);
    Recipe.registerComposterRecipe(457, 65);
    Recipe.registerComposterRecipe(260, 65);
    Recipe.registerComposterRecipe(37, 65);
    Recipe.registerComposterRecipe(38, 65);
    Recipe.registerComposterRecipe(ItemID.plantStraw, 65);
    Recipe.registerComposterRecipe(ItemID.fiberPlant, 65);
    Recipe.registerComposterRecipe(ItemID.cordagePlant, 65);

    Recipe.registerComposterRecipe(393, 85);
    Recipe.registerComposterRecipe(357, 85);
    Recipe.registerComposterRecipe(297, 85);
    Recipe.registerComposterRecipe(170, 85);
    Recipe.registerComposterRecipe(BlockID.plantStrawBlock, 85);
    Recipe.registerComposterRecipe(BlockID.plantStrawBlockDense, 85);

    Recipe.registerComposterRecipe(354, 100);
    Recipe.registerComposterRecipe(400, 100);
});




// file: controller/recipe_craft/craft_stone.js

let __processing_stone_chunk = {
    __recipes: {},
    __registerStoneRecipe: function(item, form){
        let key = "";
        for(var i in form)key+=form[i];
        this.__recipes[key] = item;
    },
    __graphics: {
        __create_processing_ui: function(){
            let __stone_cutter_ui = {
                location: {
                    x: 0,
                    y: 0,
                    width: 1000,
                    height: 1000
                },        
                drawing: [
                    { type: "background", color: 0 },
                    { type: "bitmap", x: 218, y: 50, bitmap: "background_classic", scale: 3.2 },
                    { type: "bitmap", x: 580, y: 228, bitmap: "arrow_bar_background", scale: 4 },
                ],
                elements: {
                    "closeButton": {
                        type: "button", x: 727, y: 60, bitmap: "close_button_small", scale: 3.2, clicker: {
                            onClick: function (container) {
                                container.close();
                            }
                        }
                    },
                    "resultSlot": {
                        type: "slot", "bitmap": "default_slot", x: 680, y: 220, size: 80, clicker: {
                            onClick: function(container){
                                let content = container.getGuiContent();
                                let slot = container.getSlot("resultSlot");
                                if(slot.id > 0 && slot.count > 0){
                                    World.drop(Player.getPosition().x, Player.getPosition().y, Player.getPosition().z, slot.id, slot.count, slot.data);                        
                                    for(var i = 0; i < 5; i ++){
                                        for(var j = 0; j < 5; j ++){
                                            content.elements["stoneSlot" + i + "x" + j] = null;
                                        }
                                    }                                    
                                    container.clearSlot("resultSlot");
                                }                                
                            }
                        }
                    }
                }
            };
            let use_stone = false;
            for(var i = 0; i < 5; i ++){
                for(var j = 0; j < 5; j ++){
                    let id = "stoneSlot" + i + "x" + j;
                    __stone_cutter_ui.elements[id] = {
                        type: "slot", 
                        bitmap: "bitmap_stone",
                        x: 250 + j * 65,
                        y: 100 + i * 65,
                        size: 65,
                        clicker: {
                            onClick: function(container){
                                var content = container.getGuiContent();
                                content.elements[id] = null;
        
                                let key = "";                        
                                for(var i = 0; i < 5; i ++){
                                    for(var j = 0; j < 5; j ++){
                                        content.elements["stoneSlot" + i + "x" + j] ? key += 1: key += 0;
                                    }
                                }

                                if(__processing_stone_chunk.__recipes[key]){
                                    let item = __processing_stone_chunk.__recipes[key];
                                    container.setSlot("resultSlot", item.id, item.count, item.data);
                                }
                                else {
                                    container.clearSlot("resultSlot");
                                }
        
                                if(!use_stone){
                                    use_stone = true;
                                    Player.decreaseCarriedItem(1);
                                }
                            }
                        }
                    }
                }
            }            
            return  new UI.Window(__stone_cutter_ui);    
        }
    }
}

/**
  * Creates a stone crafting recipe
  * @param { object } item { id, count, data } result
  * @param { object } form[] recipe form
  */
Recipe.registerStoneProcessingRecipe = function (item, form) {
    __processing_stone_chunk.__registerStoneRecipe(item, form);
};

/**
 * Creates a stone processing window
 */
Graphics.createStoneProcessingUI = function () {
    return __processing_stone_chunk.__graphics.__create_processing_ui();
};




// file: controller/recipe_craft/craft_clay.js

let __processing_clay_chunk = {
    __recipes: {},
    __registerClayRecipe: function(item, form){
        let key = "";
        for(var i in form)key+=form[i];
        this.__recipes[key] = item;
    },
    __graphics: {
        __create_processing_ui: function(){
            let __clay_cutter_ui = {
                location: {
                    x: 0,
                    y: 0,
                    width: 1000,
                    height: 1000
                },        
                drawing: [
                    { type: "background", color: 0 },
                    { type: "bitmap", x: 218, y: 50, bitmap: "background_classic", scale: 3.2 },
                    { type: "bitmap", x: 580, y: 228, bitmap: "arrow_bar_background", scale: 4 },
                ],
                elements: {
                    "closeButton": {
                        type: "button", x: 727, y: 60, bitmap: "close_button_small", scale: 3.2, clicker: {
                            onClick: function (container) {
                                container.close();
                            }
                        }
                    },
                    "resultSlot": {
                        type: "slot", "bitmap": "default_slot", x: 680, y: 220, size: 80, clicker: {
                            onClick: function(container){
                                let content = container.getGuiContent();
                                let slot = container.getSlot("resultSlot");
                                if(slot.id > 0 && slot.count > 0){
                                    World.drop(Player.getPosition().x, Player.getPosition().y, Player.getPosition().z, slot.id, slot.count, slot.data);                        
                                    for(var i = 0; i < 5; i ++){
                                        for(var j = 0; j < 5; j ++){
                                            content.elements["claySlot" + i + "x" + j] = null;
                                        }
                                    }                                    
                                    container.clearSlot("resultSlot");
                                }                                
                            }
                        }
                    }
                }
            };
            let use_clay = false;
            for(var i = 0; i < 5; i ++){
                for(var j = 0; j < 5; j ++){
                    let id = "claySlot" + i + "x" + j;
                    __clay_cutter_ui.elements[id] = {
                        type: "slot", 
                        bitmap: "bitmap_clay",
                        x: 250 + j * 65,
                        y: 100 + i * 65,
                        size: 65,
                        clicker: {
                            onClick: function(container){
                                var content = container.getGuiContent();
                                content.elements[id].bitmap = "bitmap_clay_dark";
        
                                let key = "";                        
                                for(var i = 0; i < 5; i ++){
                                    for(var j = 0; j < 5; j ++){
                                        content.elements["claySlot" + i + "x" + j].bitmap == "bitmap_clay" ? key += 1: key += 0;
                                    }
                                }

                                if(__processing_clay_chunk.__recipes[key]){
                                    let item = __processing_clay_chunk.__recipes[key];
                                    container.setSlot("resultSlot", item.id, item.count, item.data);
                                }
                                else {
                                    container.clearSlot("resultSlot");
                                }
        
                                if(!use_clay){
                                    use_clay = true;
                                    Player.decreaseCarriedItem(1);
                                }
                            }
                        }
                    }
                }
            }            
            return  new UI.Window(__clay_cutter_ui);    
        }
    }
}

/**
 * Creates a clay processing recipe
 * @param {object} item { id, count, data } result
 * @param {object} form[] recipe form
 */
Recipe.registerClayProcessingRecipe = function (item, form) {
    __processing_clay_chunk.__registerClayRecipe(item, form);
};

/**
 * Creates a clay processing window
 */
Graphics.createClayProcessingUI = function(){
    return __processing_clay_chunk.__graphics.__create_processing_ui();
};

Item.registerUseFunction(337, function (coords, item, block) {
    if (item.count >= 5) {
        new UI.Container().openAs(Graphics.createClayProcessingUI());
    }
});




// file: controller/recipe_craft/craft_ceramic.js

/**
 * Ceramic firing system
 */
Recipe.__ceramic_recipes = {};

/**
 * Creates a recipe for kiln firing
 * @param {*} sourceItem { id, count, data } source item
 * @param {*} resultItem { id, count, data } source item
 */
Recipe.registerCeramicFurnaceRecipe = function (sourceItem, resultItem) {
    let key1 = sourceItem.id;
    let key2 = sourceItem.count ? sourceItem.count : 1;
    let key3 = sourceItem.data && sourceItem.data > 0 ? sourceItem.data : 0;
    this.__ceramic_recipes[key1 + ":" + key2 + ":" + key3] = resultItem;
};

/**
 * Returns the recipe for the original item *
 * @param {*} sourceItem { id, count, data } source item
 */
Recipe.getCeramicFurnaceRecipe = function (sourceItem) {
    let key1 = sourceItem.id;
    let key2 = sourceItem.count ? sourceItem.count : 1;
    let key3 = sourceItem.data && sourceItem.data > 0 ? sourceItem.data : 0;
    return this.__ceramic_recipes[key1 + ":" + key2 + ":" + key3] || null
};




// file: controller/recipe_craft/craft_barrel.js

/**
 * Barrel system
 */
Recipe.__barrel_recipes = {};

/**
 * Creates a recipe for barrel
 * @param {object} sourceItem { id, data } source item
 * @param {object} resultItem { id, data } result item
 */
Recipe.registerBarrelRecipe = function (resultItem, sourceItem) {
    let key1 = sourceItem.id;
    let key3 = sourceItem.data;
    this.__barrel_recipes[key1 + ":" + key3] = resultItem;
};

/**
 * Returns the recipe for the original item
 * @param {object} sourceItem { id, data } source item
 */
Recipe.getBarrelRecipe = function (sourceItem) {
    let key1 = sourceItem.id;
    let key3 = sourceItem.data;
    return this.__barrel_recipes[key1 + ":" + key3] || null
};




// file: controller/game/leaves_controller.js

ItemDictionary.setItemCategory(18, "minecraft:leaves");
ItemDictionary.setItemCategory(161, "minecraft:leaves");

if (Options.DISABLE_LEAVES_SHAPE) {
    for (var i in ItemDictionary.getCategory("minecraft:leaves")) {
        ModelRender.setBlockEmptyShape(i, -1);
    }
}

Callback.addCallback("DestroyBlock", function (position, block, player) {
    if (ItemDictionary.isItemInCategory(block.id, "minecraft:leaves")) {
        if (Random.randomInteger(0, 10) < 5) {
            World.drop(position.x, position.y, position.z, 280, Random.randomInteger(0, 2), 0);
        }
    }
});




// file: controller/game/generation_controller.js

let __ground_generation_find_surface = function (x, y, z, block) {
    for (var i = 50; i < 250; i++) {
        let blockID1 = World.getBlockID(x, i, z);
        let blockID2 = World.getBlockID(x, i + 1, z);
        if (block[blockID1] && blockID2 == 0) {
            return { x: x, y: i, z: z };
        }
    }
    return null;
};

IDRegistry.genBlockID("groundStick");
Block.createBlock("groundStick", [{ name: "Stick", texture: [["planks", 0]], inCreative: false }]);

Callback.addCallback("ItemUse", function (position, item, block) {
    if (block.id == BlockID.groundStick) {
        World.destroyBlock(position.x, position.y, position.z, true);
    }
});
Block.registerDropFunction(BlockID.groundStick, function () {
    return [[280, 1, 0]];
}, 0);
Callback.addCallback("GenerateChunk", function (chunkX, chunkZ) {
    for (var i = 0; i < Random.randomInteger(0, 4); i++) {
        if (Random.randomInteger(0, 10) < 5) {
            var position = GenerationUtils.randomCoords(chunkX, chunkZ, 50, 128);
            position = __ground_generation_find_surface(position.x, position.y, position.z, { 2: true });
            if (position) {
                World.setBlock(position.x, position.y + 1, position.z, BlockID.groundStick, 0)
            }
        }
    }
});

{
    let __ground_stick_graphics_render = function () {
        let modelMesh = new RenderMesh();
        modelMesh.setBlockTexture("ground_stick", 0);
        modelMesh.importFromFile(__dir__ + "assets/models/blocks/model_ground_stick.obj", "obj", {
            scale: [1 / 16, 1 / 16, 1 / 16],
            translate: [0.5, 0.5, 0.5]
        });
        let blockModel = new BlockRenderer.Model(modelMesh);
        let render = new ICRender.Model();
        render.addEntry(blockModel);
        return render;
    };
    BlockRenderer.setStaticICRender(BlockID.groundStick, -1, __ground_stick_graphics_render());
    ModelRender.setBlockEmptyShape(BlockID.groundStick, -1);
}

IDRegistry.genBlockID("groundStone");
Block.createBlock("groundStone", [{ name: "Stone", texture: [["stone", 0]], inCreative: false }]);

Callback.addCallback("ItemUse", function (position, item, block) {
    if (block.id == BlockID.groundStone) {
        World.destroyBlock(position.x, position.y, position.z, true);
    }
});
Block.registerDropFunction(BlockID.groundStone, function () {
    return [[ItemID.chunkStone, 1, 0]];
}, 0);
Callback.addCallback("GenerateChunk", function (chunkX, chunkZ) {
    for (var i = 0; i < Random.randomInteger(0, 4); i++) {
        if (Random.randomInteger(0, 10) < 5) {
            var position = GenerationUtils.randomCoords(chunkX, chunkZ, 50, 128);
            position = __ground_generation_find_surface(position.x, position.y, position.z, { 1: true, 2: true });
            if (position) {
                World.setBlock(position.x, position.y + 1, position.z, BlockID.groundStone, 0)
            }
        }
    }
});

{
    let __ground_stone_graphics_render = function () {
        let modelMesh = new RenderMesh();
        modelMesh.setBlockTexture("ground_stone", 0);
        modelMesh.importFromFile(__dir__ + "assets/models/blocks/model_ground_stone.obj", "obj", {
            scale: [1 / 16, 1 / 16, 1 / 16],
            translate: [0.5, 0.5, 0.5]
        });
        let blockModel = new BlockRenderer.Model(modelMesh);
        let render = new ICRender.Model();
        render.addEntry(blockModel);
        return render;
    };
    BlockRenderer.setStaticICRender(BlockID.groundStone, -1, __ground_stone_graphics_render());
    ModelRender.setBlockEmptyShape(BlockID.groundStone, -1);
}




// file: controller/game/wooden_log.js

Block.registerDropFunctionForID(162, function (coords, blockID, blockData, lvl, enchant) {
    if ((blockData == 0 || blockData == 4 || blockData == 8) && lvl >= 1) {
        return [[blockID, 1, 0]];
    }
    else if ((blockData == 1 || blockData == 5 || blockData == 9) && lvl >= 1) {
        return [[blockID, 1, 0]];
    }
    return [];
});

Block.registerDropFunctionForID(17, function (coords, blockID, blockData, lvl, enchant) {
    if ((blockData == 0 || blockData == 4 || blockData == 8) && lvl >= 1) {
        return [[blockID, 1, 0]];
    }
    else if ((blockData == 1 || blockData == 5 || blockData == 9) && lvl >= 1) {
        return [[blockID, 1, 0]];
    }
    else if ((blockData == 2 || blockData == 6 || blockData == 10) && lvl >= 1) {
        return [[blockID, 1, 0]];
    }
    else if ((blockData == 3 || blockData == 7 || blockData == 11) && lvl >= 1) {
        return [[blockID, 1, 0]];
    }
    return [];
});




// file: content/translation.js

Translation.addTranslation("Copper Nugget", { ru: "Медный самородок" });
Translation.addTranslation("Iron Nugget", { ru: "Железный самородок" });
Translation.addTranslation("Copper Ingot", { ru: "Медный слиток" });

Translation.addTranslation("Plant Fiber", { ru: "Растительное волокно" });
Translation.addTranslation("Plant Cordage", { ru: "Растительный шпагат" });
Translation.addTranslation("Leather Strip", { ru: "Кожанная лента" });
Translation.addTranslation("Leather Cordage", { ru: "Кожанный шпагат" });
Translation.addTranslation("Rope", { ru: "Веревка" });

Translation.addTranslation("Straw", { ru: "Солома" });
Translation.addTranslation("Dense Straw", { ru: "Плотная солома" });

Translation.addTranslation("Ceramic Bowl", { ru: "Керамическая миска" });
Translation.addTranslation("Clay Bowl", { ru: "Глиняная миска" });
Translation.addTranslation("Ceramic Jug", { ru: "Керамический кувшин" });
Translation.addTranslation("Clay Jug", { ru: "Глиняный кувшин" });
Translation.addTranslation("Ceramic Pot", { ru: "Керамический горшок" });
Translation.addTranslation("Clay Pot", { ru: "Глиняный горшок" });
Translation.addTranslation("Ceramic Vessel", { ru: "Керамический сосуд" });
Translation.addTranslation("Clay Vessel", { ru: "Глиняный сосуд" });
Translation.addTranslation("Clay Axe Mold", { ru: "Глиняная форма топора" });
Translation.addTranslation("Clay Hoe Mold", { ru: "Глиняная форма мотыги" });
Translation.addTranslation("Clay Shovel Mold", { ru: "Глиняная форма лопаты" });
Translation.addTranslation("Clay Sword Mold", { ru: "Глиняная форма меча" });
Translation.addTranslation("Clay Pickaxe Mold", { ru: "Глиняная форма кирки" });
Translation.addTranslation("Clay Knife Mold", { ru: "Глиняная форма ножа" });
Translation.addTranslation("Clay Spear Mold", { ru: "Глиняная форма копья" });
Translation.addTranslation("Clay Ingot Mold", { ru: "Глиняная форма слитка" });
Translation.addTranslation("Ceramic Axe Mold", { ru: "Керамическая форма топора" });
Translation.addTranslation("Ceramic Hoe Mold", { ru: "Керамическая форма мотыги" });
Translation.addTranslation("Ceramic Shovel Mold", { ru: "Керамическая форма лопаты" });
Translation.addTranslation("Ceramic Sword Mold", { ru: "Керамическая форма меча" });
Translation.addTranslation("Ceramic Pickaxe Mold", { ru: "Керамическая форма кирки" });
Translation.addTranslation("Ceramic Knife Mold", { ru: "Керамическая форма ножа" });
Translation.addTranslation("Ceramic Spear Mold", { ru: "Керамическая форма копья" });
Translation.addTranslation("Ceramic Ingot Mold", { ru: "Керамическая форма слитка" });

Translation.addTranslation("Wooden Geat", { ru: "Деревянная шестерня" });

Translation.addTranslation("Stone Axe Blade", { ru: "Каменное лезвие топора" });
Translation.addTranslation("Stone Hoe Blade", { ru: "Каменное лезвие мотыги" });
Translation.addTranslation("Stone Shovel Bayonet", { ru: "Каменный штык лопаты" });
Translation.addTranslation("Stone Spear Tip", { ru: "Каменный наконечник копья" });
Translation.addTranslation("Stone Knife Blade", { ru: "Каменное лезвие ножа" });

Translation.addTranslation("Copper Axe Blade", { ru: "Медное лезвие топора" });
Translation.addTranslation("Copper Hoe Blade", { ru: "Медное лезвие мотыги" });
Translation.addTranslation("Copper Shovel Bayonet", { ru: "Медный штык лопаты" });
Translation.addTranslation("Copper Sword Blade", { ru: "Медное лезвие меча" });
Translation.addTranslation("Copper Pickaxe Head", { ru: "Медный обух кирки" });
Translation.addTranslation("Copper Knife Blade", { ru: "Медное лезвие ножа" });
Translation.addTranslation("Copper Spear Tip", { ru: "Медный наконечник копья" });

Translation.addTranslation("Iron Axe Blade", { ru: "Железное лезвие топора" });
Translation.addTranslation("Iron Hoe Blade", { ru: "Железное лезвие мотыги" });
Translation.addTranslation("Iron Shovel Bayonet", { ru: "Железный штык лопаты" });
Translation.addTranslation("Iron Sword Blade", { ru: "Железное лезвие меча" });
Translation.addTranslation("Iron Pickaxe Head", { ru: "Железный обух кирки" });
Translation.addTranslation("Iron Knife Blade", { ru: "Железное лезвие ножа" });
Translation.addTranslation("Iron Spear Tip", { ru: "Железный наконечник копья" });

Translation.addTranslation("Gold Axe Blade", { ru: "Золотое лезвие топора" });
Translation.addTranslation("Gold Hoe Blade", { ru: "Золотое лезвие мотыги" });
Translation.addTranslation("Gold Shovel Bayonet", { ru: "Золотой штык лопаты" });
Translation.addTranslation("Gold Sword Blade", { ru: "Золотое лезвие меча" });
Translation.addTranslation("Gold Pickaxe Head", { ru: "Золотой обух кирки" });
Translation.addTranslation("Gold Knife Blade", { ru: "Золотое лезвие ножа" });
Translation.addTranslation("Gold Spear Tip", { ru: "Золотой наконечник копья" });

Translation.addTranslation("Stone Axe", { ru: "Каменный топор" });
Translation.addTranslation("Stone Hoe", { ru: "Каменная мотыга" });
Translation.addTranslation("Stone Shovel", { ru: "Каменная лопата" });
Translation.addTranslation("Stone Knife", { ru: "Каменный нож" });
Translation.addTranslation("Stone Spear", { ru: "Каменное копье" });

Translation.addTranslation("Copper Axe", { ru: "Медный топор" });
Translation.addTranslation("Copper Hoe", { ru: "Медная мотыга" });
Translation.addTranslation("Copper Shovel", { ru: "Медная лопата" });
Translation.addTranslation("Copper Sword", { ru: "Медный меч" });
Translation.addTranslation("Copper Pickaxe", { ru: "Медная кирка" });
Translation.addTranslation("Copper Knife", { ru: "Медный нож" });
Translation.addTranslation("Copper Spear", { ru: "Медное копье" });

Translation.addTranslation("Iron Knife", { ru: "Железный нож" });
Translation.addTranslation("Iron Spear", { ru: "Железное копье" });

Translation.addTranslation("Gold Knife", { ru: "Золотой нож" });
Translation.addTranslation("Gold Spear", { ru: "Золотое копье" });

Translation.addTranslation("Igniter", { ru: "Воспламенитель" });

Translation.addTranslation("Stone", { ru: "Камень" });
Translation.addTranslation("Salt", { ru: "Соль" });
Translation.addTranslation("Salted Cod", { ru: "Соленая треска" });
Translation.addTranslation("Salted Salmon", { ru: "Соленый лосось" });
Translation.addTranslation("Salted Puffer", { ru: "Соленый иглобрюх" });

Translation.addTranslation("Ceramic Jug [Water]", { ru: "Керамический кувшин [Вода]" });
Translation.addTranslation("Ceramic Pot [Water]", { ru: "Керамический горшок [Вода]" });
Translation.addTranslation("Ceramic Vessel [Water]", { ru: "Керамический сосуд [Вода]" });
Translation.addTranslation("Wooden Bucket [Water]", { ru: "Деревянное ведро [Вода]" });
Translation.addTranslation("Wooden Bucket", { ru: "Деревянное ведро" });

Translation.addTranslation("Copper Ore", { ru: "Медная руда" });
Translation.addTranslation("Salt Ore", { ru: "Каменная соль" });

Translation.addTranslation("Copper Block", { ru: "Медный блок" });
Translation.addTranslation("Salt Block", { ru: "Блок соли" });

Translation.addTranslation("Campfire", { ru: "Костер" });
Translation.addTranslation("Composter", { ru: "Компостер" });
Translation.addTranslation("Sieve", { ru: "Просеиватель" });
Translation.addTranslation("Kiln", { ru: "Печь для обжига" });
Translation.addTranslation("Bellows", { ru: "Меха" });
Translation.addTranslation("Blast Furnace", { ru: "Доменная печь" });
Translation.addTranslation("Barrel", { ru: "Бочка" });




// file: content/item/resource/ore_nugget.js

IDRegistry.genItemID("nuggetCopper");
Item.createItem("nuggetCopper", "Copper Nugget", { name: "copper_nugget" });

Callback.addCallback("PreLoaded", function () {
    Recipe.registerBlastLiquidRecipe(ItemID.nuggetCopper, { type: "copper", count: 0.25 });
    Recipe.registerSieveRecipe(ItemID.nuggetCopper, 0.5);
});

IDRegistry.genItemID("nuggetIron");
Item.createItem("nuggetIron", "Iron Nugget", { name: "iron_nugget" });

Callback.addCallback("PreLoaded", function () {
    Recipe.registerBlastLiquidRecipe(ItemID.nuggetIron, { type: "iron", count: 0.25 });
    Recipe.registerSieveRecipe(ItemID.nuggetIron, 0.5);
});

Callback.addCallback("PreLoaded", function () {
    Recipe.registerBlastLiquidRecipe(371, { type: "gold", count: 0.25 });
    Recipe.registerSieveRecipe(371, 0.5);
});




// file: content/item/resource/ore_ingot.js

IDRegistry.genItemID("ingotCopper");
Item.createItem("ingotCopper", "Copper Ingot", { name: "ingot_copper" });

Callback.addCallback("PreLoaded", function () {
    Recipe.registerBlastLiquidRecipe(ItemID.ingotCopper, { type: "copper", count: 1 });
    Recipe.registerBlastFormRecipe(ItemID.ceramicMoldIngot, "copper", { id: ItemID.ingotCopper, data: 0, count: 1 });
});

Callback.addCallback("PreLoaded", function () {
    Recipe.registerBlastFormRecipe(ItemID.ceramicMoldIngot, "iron", { id: ItemID.ingotIron, data: 0, count: 1 });
    Recipe.registerBlastFormRecipe(ItemID.ceramicMoldIngot, "gold", { id: ItemID.ingotGold, data: 0, count: 1 });
});




// file: content/item/resource/fiber_leather.js

IDRegistry.genItemID("stripLeather");
IDRegistry.genItemID("cordageLeather");

Item.createItem("stripLeather", "Leather Strip", { name: "leather_strip" });
Item.createItem("cordageLeather", "Leather Cordage", { name: "cordage_leather" });

ItemDictionary.setItemCategory(ItemID.cordageLeather, "minecraft:cordage");

Callback.addCallback("PreLoaded", function () {
    for (var i in ItemDictionary.getCategory("minecraft:tool.knife"))
        Recipe.registerRecipeWithTool({ id: ItemID.stripLeather, count: 3, data: 0 }, [{ id: 334, data: 0 }], parseInt(i));
    Recipes.addShaped({ id: ItemID.cordageLeather, count: 1, data: 0 }, [
        "aa",
        "aa"
    ], ['a', ItemID.stripLeather, -1]);
});

Item.registerUseFunction(ItemID.stripLeather, function (coords, item, block) {
    let condition1 = Entity.getSneaking(Player.get());
    let condition2 = item.count >= 4;

    if (condition1 && condition2) {
        let position = Player.getPosition();
        World.drop(position.x, position.y, position.z, ItemID.cordageLeather, 1);
        Player.decreaseCarriedItem(4);
    }
});




// file: content/item/resource/fiber_plant.js

IDRegistry.genItemID("fiberPlant");
IDRegistry.genItemID("cordagePlant");

Item.createItem("fiberPlant", "Plant Fiber", { name: "fiber_plant" });
Item.createItem("cordagePlant", "Plant Cordage", { name: "cordage_plant" });

ItemDictionary.setItemCategory(ItemID.cordagePlant, "minecraft:cordage");

Callback.addCallback("PreLoaded", function () {
    Recipes.addShaped({ id: ItemID.cordagePlant, count: 1, data: 0 }, [
        "aa",
        "aa"
    ], ['a', ItemID.fiberPlant, -1]);
});

Block.registerDropFunction(106, function (coords, blockID, blockData, lvl, enchant) {
    if (!ItemDictionary.isItemInCategory(Player.getCarriedItem().id, "minecraft:tool.knife")) {
        return [[ItemID.fiberPlant, 1, 0]]
    }
    return [];
});

Item.registerUseFunction(ItemID.fiberPlant, function (coords, item, block) {
    let condition1 = Entity.getSneaking(Player.get());
    let condition2 = item.count >= 4;

    if(condition1 && condition2){
        let position = Player.getPosition();
        World.drop(position.x, position.y, position.z, ItemID.cordagePlant, 1);
        Player.decreaseCarriedItem(4);
    }
});




// file: content/item/resource/fiber_rope.js

IDRegistry.genItemID("rope");
Item.createItem("rope", "Rope", { name: "rope" });

ItemDictionary.setItemCategory(ItemID.rope, "minecraft:cordage");

Callback.addCallback("PreLoaded", function () {
    Recipes.addShaped({ id: ItemID.rope, count: 1, data: 0 }, [
        "aa",
        "aa"
    ], ['a', ItemID.cordagePlant, -1]);
    Recipes.addShaped({ id: ItemID.rope, count: 1, data: 0 }, [
        "aa",
        "aa"
    ], ['a', ItemID.cordageLeather, -1]);
});




// file: content/item/resource/plant_straw.js

IDRegistry.genItemID("plantStraw");
Item.createItem("plantStraw", "Straw", { name: "straw" });

Block.registerDropFunction(31, function (coords, blockID, blockData, lvl, enchant) {
    if (!ItemDictionary.isItemInCategory(Player.getCarriedItem().id, "minecraft:tool.knife")) {
        if(Random.randomDouble(0, 1) <= 0.8){
            return [[ItemID.fiberPlant, 1, 0]]
        }
    }
    else if(Random.randomDouble(0, 1) <= 0.8) {
        return [[ItemID.plantStraw, 1, 0]]
    }
    return [];
});

IDRegistry.genBlockID("plantStrawBlock");
Block.createBlock("plantStrawBlock", [
    { name: "Straw", texture: [["block_straw", 0]], inCreative: true }
], __OBJECT_BLOCK_TYPE);

Callback.addCallback("PreLoaded", function () {
    Recipes.addShaped({ id: BlockID.plantStrawBlock, count: 1, data: 0 }, [
        "aaa",
        "aaa",
        "aaa"
    ], ['a', ItemID.plantStraw, -1]);
});

{
    let render = new ICRender.CollisionShape();
    render.addEntry().addBox(1, 1, 1, 0, 0, 0);
    BlockRenderer.setCustomCollisionShape(BlockID.plantStrawBlock, -1, render);
}

IDRegistry.genBlockID("plantStrawBlockDense");
Block.createBlock("plantStrawBlockDense", [
    {
        name: "Dense Straw",
        texture: [
            ["block_straw_dense", 0]
        ],
        inCreative: true
    }
], "opaque");

Callback.addCallback("PreLoaded", function () {
    Recipes.addShaped({ id: BlockID.plantStrawBlockDense, count: 1, data: 0 }, [
        "aaa",
        "aba",
        "aaa"
    ], ['a', ItemID.plantStraw, -1, 'b', BlockID.plantStrawBlock, -1]);
});




// file: content/item/resource/salt_items.js

IDRegistry.genItemID("salt");
Item.createItem("salt", "Salt", { name: "salt" });
ItemDictionary.setItemCategory(ItemID.salt, "minecraft:salt");




// file: content/item/resource/gears_items.js

IDRegistry.genItemID("gearWooden");
Item.createItem("gearWooden", "Wooden Gear", { name: "gear_wood", meta: 0 });

Callback.addCallback("PreLoaded", function () {
    Recipes.addShaped({ id: ItemID.gearWooden, count: 1, data: 0 }, [
        "#a#",
        "a#a",
        "#a#"
    ], [ 'a', 280, 0 ]);
});




// file: content/item/resource/ceramic_items.js

IDRegistry.genItemID("ceramicBowl");
IDRegistry.genItemID("clayBowl");

Item.createItem("ceramicBowl", "Ceramic Bowl", { name: "bowl_ceramic" });
Item.createItem("clayBowl", "Clay Bowl", { name: "bowl_clay" });

Callback.addCallback("PreLoaded", function () {
    Recipe.registerCeramicFurnaceRecipe({ id: ItemID.clayBowl }, { id: ItemID.ceramicBowl });
    Recipe.registerClayProcessingRecipe({ id: ItemID.clayBowlRaw, count: 1, data: 0 }, [
        "00000",
        "00000",
        "00000",
        "10001",
        "01110"
    ]);
});

IDRegistry.genItemID("ceramicJug");
IDRegistry.genItemID("clayJug");

Item.createItem("ceramicJug", "Ceramic Jug", { name: "jug_ceramic" });
Item.createItem("clayJug", "Clay Jug", { name: "jug_clay" });

Callback.addCallback("PreLoaded", function () {
    Recipe.registerCeramicFurnaceRecipe({ id: ItemID.clayJug }, { id: ItemID.ceramicJug });
    Recipe.registerClayProcessingRecipe({ id: ItemID.clayJug, count: 1, data: 0 }, [
        "00010",
        "01111",
        "10111",
        "01111",
        "00111"
    ]);
});

IDRegistry.genItemID("ceramicPot");
IDRegistry.genItemID("clayPot");

Item.createItem("ceramicPot", "Ceramic Pot", { name: "pot_ceramic" });
Item.createItem("clayPot", "Clay Pot", { name: "pot_clay" });

Callback.addCallback("PreLoaded", function () {
    Recipe.registerCeramicFurnaceRecipe({ id: ItemID.clayPot }, { id: ItemID.ceramicPot });
    Recipe.registerClayProcessingRecipe({ id: ItemID.clayPot, count: 1, data: 0 }, [
        "10001",
        "10001",
        "10001",
        "10001",
        "11111"
    ]);
});

IDRegistry.genItemID("clayVessel");
IDRegistry.genItemID("ceramicVessel");

Item.createItem("ceramicVessel", "Ceramic Vessel", { name: "vessel_ceramic" });
Item.createItem("clayVessel", "Clay Vessel", { name: "vessel_clay" });

Callback.addCallback("PreLoaded", function () {
    Recipe.registerCeramicFurnaceRecipe({ id: ItemID.clayVessel }, { id: ItemID.ceramicVessel });
    Recipe.registerClayProcessingRecipe({ id: ItemID.clayVessel, count: 1, data: 0 }, [
        "01110",
        "11111",
        "11111",
        "11111",
        "01110"
    ]);
});




// file: content/item/resource/ceramic_mold.js

IDRegistry.genItemID("ceramicMoldAxe");
IDRegistry.genItemID("ceramicMoldHoe");
IDRegistry.genItemID("ceramicMoldSpear");
IDRegistry.genItemID("ceramicMoldKnife");
IDRegistry.genItemID("ceramicMoldPickaxe");
IDRegistry.genItemID("ceramicMoldSword");
IDRegistry.genItemID("ceramicMoldShovel");
IDRegistry.genItemID("ceramicMoldIngot");

IDRegistry.genItemID("clayMoldAxe");
IDRegistry.genItemID("clayMoldHoe");
IDRegistry.genItemID("clayMoldSpear");
IDRegistry.genItemID("clayMoldKnife");
IDRegistry.genItemID("clayMoldPickaxe");
IDRegistry.genItemID("clayMoldSword");
IDRegistry.genItemID("clayMoldShovel");
IDRegistry.genItemID("clayMoldIngot");

Item.createItem("ceramicMoldAxe", "Ceramic Axe Mold", { name: "mold_ceramic_axe" });
Item.createItem("ceramicMoldHoe", "Ceramic Hoe Mold", { name: "mold_ceramic_hoe" });
Item.createItem("ceramicMoldSpear", "Ceramic Spear Mold", { name: "mold_ceramic_spear" });
Item.createItem("ceramicMoldKnife", "Ceramic Knife Mold", { name: "mold_ceramic_knife" });
Item.createItem("ceramicMoldPickaxe", "Ceramic Pickaxe Mold", { name: "mold_ceramic_pickaxe" });
Item.createItem("ceramicMoldSword", "Ceramic Sword Mold", { name: "mold_ceramic_sword" });
Item.createItem("ceramicMoldShovel", "Ceramic Shovel Mold", { name: "mold_ceramic_shovel" });
Item.createItem("ceramicMoldIngot", "Ceramic Ingot Mold", { name: "mold_ceramic_ingot" });

Item.createItem("clayMoldAxe", "Clay Axe Mold", { name: "mold_clay_axe" });
Item.createItem("clayMoldHoe", "Clay Hoe Mold", { name: "mold_clay_hoe" });
Item.createItem("clayMoldSpear", "Clay Spear Mold", { name: "mold_clay_spear" });
Item.createItem("clayMoldKnife", "Clay Knife Mold", { name: "mold_clay_knife" });
Item.createItem("clayMoldPickaxe", "Clay Pickaxe Mold", { name: "mold_clay_pickaxe" });
Item.createItem("clayMoldSword", "Clay Sword Mold", { name: "mold_clay_sword" });
Item.createItem("clayMoldShovel", "Clay Shovel Mold", { name: "mold_clay_shovel" });
Item.createItem("clayMoldIngot", "Clay Ingot Mold", { name: "mold_clay_ingot" });

Callback.addCallback("PreLoaded", function () {
    Recipe.registerCeramicFurnaceRecipe({ id: ItemID.clayMoldAxe }, { id: ItemID.ceramicMoldAxe });
    Recipe.registerCeramicFurnaceRecipe({ id: ItemID.clayMoldHoe }, { id: ItemID.ceramicMoldHoe });
    Recipe.registerCeramicFurnaceRecipe({ id: ItemID.clayMoldSpear }, { id: ItemID.ceramicMoldSpear });
    Recipe.registerCeramicFurnaceRecipe({ id: ItemID.clayMoldKnife }, { id: ItemID.ceramicMoldKnife });
    Recipe.registerCeramicFurnaceRecipe({ id: ItemID.clayMoldPickaxe }, { id: ItemID.ceramicMoldPickaxe });
    Recipe.registerCeramicFurnaceRecipe({ id: ItemID.clayMoldSword }, { id: ItemID.ceramicMoldSword });
    Recipe.registerCeramicFurnaceRecipe({ id: ItemID.clayMoldShovel }, { id: ItemID.ceramicMoldShovel });
    Recipe.registerCeramicFurnaceRecipe({ id: ItemID.clayMoldIngot }, { id: ItemID.ceramicMoldIngot });

    Recipe.registerClayProcessingRecipe({ id: ItemID.clayMoldAxe, count: 1, data: 0 }, [
        "10111",
        "00001",
        "00000",
        "00001",
        "10111"
    ]);
    Recipe.registerClayProcessingRecipe({ id: ItemID.clayMoldAxe, count: 1, data: 0 }, [
        "11101",
        "10000",
        "00000",
        "10000",
        "11101"
    ]);

    Recipe.registerClayProcessingRecipe({ id: ItemID.clayMoldHoe, count: 1, data: 0 }, [
        "11111",
        "00000",
        "11100",
        "11111",
        "11111"
    ]);
    Recipe.registerClayProcessingRecipe({ id: ItemID.clayMoldHoe, count: 1, data: 0 }, [
        "11111",
        "00000",
        "00111",
        "11111",
        "11111"
    ]);

    Recipe.registerClayProcessingRecipe({ id: ItemID.clayMoldSpear, count: 1, data: 0 }, [
        "00011",
        "00001",
        "00000",
        "10001",
        "11011"
    ]);
    Recipe.registerClayProcessingRecipe({ id: ItemID.clayMoldSpear, count: 1, data: 0 }, [
        "11000",
        "10000",
        "00000",
        "10001",
        "11011"
    ]);

    Recipe.registerClayProcessingRecipe({ id: ItemID.clayMoldKnife, count: 1, data: 0 }, [
        "11011",
        "11001",
        "11001",
        "11001",
        "11001"
    ]);
    Recipe.registerClayProcessingRecipe({ id: ItemID.clayMoldKnife, count: 1, data: 0 }, [
        "11011",
        "10011",
        "10011",
        "10011",
        "10011"
    ]);

    Recipe.registerClayProcessingRecipe({ id: ItemID.clayMoldPickaxe, count: 1, data: 0 }, [
        "11111",
        "10001",
        "01110",
        "11111",
        "11111"
    ]);

    Recipe.registerClayProcessingRecipe({ id: ItemID.clayMoldSword, count: 1, data: 0 }, [
        "11100",
        "11000",
        "10001",
        "10011",
        "01111"
    ]);
    Recipe.registerClayProcessingRecipe({ id: ItemID.clayMoldSword, count: 1, data: 0 }, [
        "00111",
        "00011",
        "10001",
        "11001",
        "11110"
    ]);

    Recipe.registerClayProcessingRecipe({ id: ItemID.clayMoldSword, count: 1, data: 0 }, [
        "10001",
        "10001",
        "10001",
        "10001",
        "11011"
    ]);

    Recipe.registerClayProcessingRecipe({ id: ItemID.clayMoldIngot, count: 1, data: 0 }, [
        "11111",
        "10011",
        "10011",
        "10011",
        "11111"
    ]);
    Recipe.registerClayProcessingRecipe({ id: ItemID.clayMoldIngot, count: 1, data: 0 }, [
        "11111",
        "11001",
        "11001",
        "11001",
        "11111"
    ]);
});




// file: content/item/resource/stone_chunk.js

IDRegistry.genItemID("chunkStone");
Item.createItem("chunkStone", "Stone", { name: "chunk_stone" });

Block.registerDropFunction(1, function (coords, blockID, blockData, lvl, enchant) {
    if (lvl >= 1) {
        return [[ItemID.chunkStone, Random.integer(0, 5), 0]];
    }
    return [];
}, 1);

Item.registerUseFunction("chunkStone", function (coords, item, block) {
    if (item.count >= 2) {
        new UI.Container().openAs(Graphics.createStoneProcessingUI());
    }
});

Callback.addCallback("PreLoaded", function () {
    Recipes.addShaped({ id: 4, count: 1, data: 0 }, [
        "aa",
        "aa"
    ], ['a', ItemID.chunkStone, -1]);
});




// file: content/item/resource/stone_head.js

IDRegistry.genItemID("headAxeStone");
IDRegistry.genItemID("headHoeStone");
IDRegistry.genItemID("headSpearStone");
IDRegistry.genItemID("headShovelStone");
IDRegistry.genItemID("headKnifeStone");

Item.createItem("headAxeStone", "Stone Axe Blade", { name: "head_axe_stone" });
Item.createItem("headHoeStone", "Stone Hoe Blade", { name: "head_hoe_stone" });
Item.createItem("headSpearStone", "Stone Spear Tip", { name: "head_spear_stone" });
Item.createItem("headShovelStone", "Stone Shovel Bayonet", { name: "head_shovel_stone" });
Item.createItem("headKnifeStone", "Stone Knife Blade", { name: "head_knife_stone" });

Callback.addCallback("PreLoaded", function () {
    Recipe.registerStoneProcessingRecipe({ id: ItemID.headAxeStone, count: 1, data: 0 }, [
        "01000",
        "11110",
        "11111",
        "11110",
        "01000"
    ]);

    Recipe.registerStoneProcessingRecipe({ id: ItemID.headHoeStone, count: 1, data: 0 }, [
        "11111",
        "00011",
        "00000",
        "00000",
        "00000"
    ]);

    Recipe.registerStoneProcessingRecipe({ id: ItemID.headSpearStone, count: 1, data: 0 }, [
        "11100",
        "11110",
        "11111",
        "01110",
        "00100"
    ]);

    Recipe.registerStoneProcessingRecipe({ id: ItemID.headShovelStone, count: 1, data: 0 }, [
        "01110",
        "01110",
        "01110",
        "01110",
        "00100"
    ]);

    Recipe.registerStoneProcessingRecipe({ id: ItemID.bladeKnifeStone, count: 1, data: 0 }, [
        "10000",
        "11000",
        "11000",
        "11000",
        "11000"
    ]);

    Recipe.registerStoneProcessingRecipe({ id: ItemID.headKnifeStone, count: 2, data: 0 }, [
        "10001",
        "11011",
        "11011",
        "11011",
        "11011"
    ]);
});




// file: content/item/resource/copper_head.js

IDRegistry.genItemID("headAxeCopper");
Item.createItem("headAxeCopper", "Copper Axe Blade", { name: "head_copper_axe" });

IDRegistry.genItemID("headHoeCopper");
Item.createItem("headHoeCopper", "Copper Hoe Blade", { name: "head_copper_hoe" });

IDRegistry.genItemID("headSpearCopper");
Item.createItem("headSpearCopper", "Copper Spear Tip", { name: "head_copper_spear" });

IDRegistry.genItemID("headKnifeCopper");
Item.createItem("headKnifeCopper", "Copper Knife Blade", { name: "head_copper_knife" });

IDRegistry.genItemID("headPickaxeCopper");
Item.createItem("headPickaxeCopper", "Copper Pickaxe Head", { name: "head_copper_pickaxe" });

IDRegistry.genItemID("headSwordCopper");
Item.createItem("headSwordCopper", "Copper Sword Blade", { name: "head_copper_sword" });

IDRegistry.genItemID("headShovelCopper");
Item.createItem("headShovelCopper", "Copper Shovel Bayonet", { name: "head_copper_shovel" });

Callback.addCallback("PreLoaded", function () {
    Recipe.registerBlastFormRecipe(ItemID.ceramicMoldAxe, "copper", { id: ItemID.headAxeCopper, data: 0, count: 1 });
    Recipe.registerBlastFormRecipe(ItemID.ceramicMoldHoe, "copper", { id: ItemID.headHoeCopper, data: 0, count: 1 });
    Recipe.registerBlastFormRecipe(ItemID.ceramicMoldSpear, "copper", { id: ItemID.headSpearCopper, data: 0, count: 1 });
    Recipe.registerBlastFormRecipe(ItemID.ceramicMoldKnife, "copper", { id: ItemID.headKnifeCopper, data: 0, count: 1 });
    Recipe.registerBlastFormRecipe(ItemID.ceramicMoldPickaxe, "copper", { id: ItemID.headPickaxeCopper, data: 0, count: 1 });
    Recipe.registerBlastFormRecipe(ItemID.ceramicMoldSword, "copper", { id: ItemID.headSwordCopper, data: 0, count: 1 });
    Recipe.registerBlastFormRecipe(ItemID.ceramicMoldIngot, "copper", { id: ItemID.ingotCopper, data: 0, count: 1 });
});




// file: content/item/resource/iron_head.js

IDRegistry.genItemID("headAxeIron");
Item.createItem("headAxeIron", "Iron Axe Blade", { name: "head_iron_axe" });

IDRegistry.genItemID("headHoeIron");
Item.createItem("headHoeIron", "Iron Hoe Blade", { name: "head_iron_hoe" });

IDRegistry.genItemID("headSpearIron");
Item.createItem("headSpearIron", "Iron Spear Tip", { name: "head_iron_spear" });

IDRegistry.genItemID("headKnifeIron");
Item.createItem("headKnifeIron", "Iron Knife Blade", { name: "head_iron_knife" });

IDRegistry.genItemID("headPickaxeIron");
Item.createItem("headPickaxeIron", "Iron Pickaxe Head", { name: "head_iron_pickaxe" });

IDRegistry.genItemID("headSwordIron");
Item.createItem("headSwordIron", "Iron Sword Blade", { name: "head_iron_sword" });

IDRegistry.genItemID("headShovelIron");
Item.createItem("headShovelIron", "Iron Shovel Bayonet", { name: "head_iron_shovel" });

Callback.addCallback("PreLoaded", function () {
    Recipe.registerBlastFormRecipe(ItemID.ceramicMoldAxe, "iron", { id: ItemID.headAxeIron, data: 0, count: 1 });
    Recipe.registerBlastFormRecipe(ItemID.ceramicMoldHoe, "iron", { id: ItemID.headHoeIron, data: 0, count: 1 });
    Recipe.registerBlastFormRecipe(ItemID.ceramicMoldSpear, "iron", { id: ItemID.headSpearIron, data: 0, count: 1 });
    Recipe.registerBlastFormRecipe(ItemID.ceramicMoldKnife, "iron", { id: ItemID.headKnifeIron, data: 0, count: 1 });
    Recipe.registerBlastFormRecipe(ItemID.ceramicMoldPickaxe, "iron", { id: ItemID.headPickaxeIron, data: 0, count: 1 });
    Recipe.registerBlastFormRecipe(ItemID.ceramicMoldSword, "iron", { id: ItemID.headSwordIron, data: 0, count: 1 });
    Recipe.registerBlastFormRecipe(ItemID.ceramicMoldIngot, "iron", { id: 265, data: 0, count: 1 });
});




// file: content/item/resource/gold_head.js

IDRegistry.genItemID("headAxeGold");
Item.createItem("headAxeGold", "Gold Axe Blade", { name: "head_gold_axe" });

IDRegistry.genItemID("headHoeGold");
Item.createItem("headHoeGold", "Gold Hoe Blade", { name: "head_gold_hoe" });

IDRegistry.genItemID("headSpearGold");
Item.createItem("headSpearGold", "Gold Spear Tip", { name: "head_gold_spear" });

IDRegistry.genItemID("headKnifeGold");
Item.createItem("headKnifeGold", "Gold Knife Blade", { name: "head_gold_knife" });

IDRegistry.genItemID("headPickaxeGold");
Item.createItem("headPickaxeGold", "Gold Pickaxe Head", { name: "head_gold_pickaxe" });

IDRegistry.genItemID("headSwordGold");
Item.createItem("headSwordGold", "Gold Sword Blade", { name: "head_gold_sword" });

IDRegistry.genItemID("headShovelGold");
Item.createItem("headShovelGold", "Gold Shovel Bayonet", { name: "head_gold_shovel" });

Callback.addCallback("PreLoaded", function () {
    Recipe.registerBlastFormRecipe(ItemID.ceramicMoldAxe, "gold", { id: ItemID.headAxeGold, data: 0, count: 1 });
    Recipe.registerBlastFormRecipe(ItemID.ceramicMoldHoe, "gold", { id: ItemID.headHoeGold, data: 0, count: 1 });
    Recipe.registerBlastFormRecipe(ItemID.ceramicMoldSpear, "gold", { id: ItemID.headSpearGold, data: 0, count: 1 });
    Recipe.registerBlastFormRecipe(ItemID.ceramicMoldKnife, "gold", { id: ItemID.headKnifeGold, data: 0, count: 1 });
    Recipe.registerBlastFormRecipe(ItemID.ceramicMoldPickaxe, "gold", { id: ItemID.headPickaxeGold, data: 0, count: 1 });
    Recipe.registerBlastFormRecipe(ItemID.ceramicMoldSword, "gold", { id: ItemID.headSwordGold, data: 0, count: 1 });
    Recipe.registerBlastFormRecipe(ItemID.ceramicMoldIngot, "gold", { id: 266, data: 0, count: 1 });
});




// file: content/item/tool/stone_tool.js

ToolAPI.addToolMaterial("factory:stone.header", {
    durability: 10,
    level: 1,
    efficiency: 10,
    damage: 1,
    enchantability: 14
});

ToolAPI.addToolMaterial("factory:stone", {
    durability: 20,
    level: 1,
    efficiency: 10,
    damage: 1,
    enchantability: 14
});

ToolType.stoneBlade = {
    enchantType: Native.EnchantType.weapon,
    damage: 2,
    blockTypes: ["fibre", "plant", "wood"]
};

ToolAPI.setTool(ItemID.headAxeStone, "factory:stone.header", ToolType.stoneBlade);
ToolAPI.setTool(ItemID.headSpearStone, "factory:stone.header", ToolType.stoneBlade);
ToolAPI.setTool(ItemID.headKnifeStone, "factory:stone.header", ToolType.stoneBlade);

ItemDictionary.setItemCategory(ItemID.headAxeStone, "minecraft:tool.axe");
ItemDictionary.setItemCategory(ItemID.headSpearStone, "minecraft:tool.axe");
ItemDictionary.setItemCategory(ItemID.headKnifeStone, "minecraft:tool.axe");

ToolType.knife = {
    enchantType: Native.EnchantType.weapon,
    damage: 4,
    blockTypes: ["fibre", "plant", "wood"]
};

IDRegistry.genItemID("knifeStone");
Item.createItem("knifeStone", "Stone Knife", { name: "knife_stone" });
ToolAPI.setTool(ItemID.knifeStone, "factory:stone", ToolType.knife);
ItemDictionary.setItemCategory(ItemID.knifeStone, "minecraft:tool.axe");
ItemDictionary.setItemCategory(ItemID.knifeStone, "minecraft:tool.knife");
Callback.addCallback("PreLoaded", function () {
    Recipes.addShaped({ id: ItemID.knifeStone, count: 1, data: 0 }, [
        "a",
        "b",
        "c"
    ], ['a', ItemID.headKnifeStone, -1, 'b', ItemID.rope, -1, 'c', 280, 0]);
});

IDRegistry.genItemID("axeStone");
Item.createItem("axeStone", "Stone Axe", { name: "axe_stone" });
ToolAPI.setTool(ItemID.axeStone, "factory:stone", ToolType.axe);
ItemDictionary.setItemCategory(ItemID.axeStone, "minecraft:tool.axe");
Callback.addCallback("PreLoaded", function () {
    Recipes.addShaped({ id: ItemID.axeStone, count: 1, data: 0 }, [
        "a",
        "b",
        "c"
    ], ['a', ItemID.headAxeStone, -1, 'b', ItemID.rope, -1, 'c', 280, 0]);
});

IDRegistry.genItemID("hoeStone");
Item.createItem("hoeStone", "Stone Hoe", { name: "hoe_stone" });
ToolAPI.setTool(ItemID.hoeStone, "factory:stone", ToolType.hoe);
Callback.addCallback("PreLoaded", function () {
    Recipes.addShaped({ id: ItemID.hoeStone, count: 1, data: 0 }, [
        "a",
        "b",
        "c"
    ], ['a', ItemID.headHoeStone, -1, 'b', ItemID.rope, -1, 'c', 280, 0]);
});

IDRegistry.genItemID("spearStone");
Item.createItem("spearStone", "Stone Spear", { name: "spear_stone" });
ToolAPI.setTool(ItemID.spearStone, "factory:stone", ToolType.sword);
Callback.addCallback("PreLoaded", function () {
    Recipes.addShaped({ id: ItemID.spearStone, count: 1, data: 0 }, [
        "a",
        "b",
        "c"
    ], ['a', ItemID.headSpearStone, -1, 'b', ItemID.rope, -1, 'c', 280, 0]);
});

IDRegistry.genItemID("shovelStone");
Item.createItem("shovelStone", "Stone Shovel", { name: "shovel_stone" });
ToolAPI.setTool(ItemID.shovelStone, "factory:stone", ToolType.shovel);
Callback.addCallback("PreLoaded", function () {
    Recipes.addShaped({ id: ItemID.shovelStone, count: 1, data: 0 }, [
        "a",
        "b",
        "c"
    ], ['a', ItemID.headShovelStone, -1, 'b', ItemID.rope, -1, 'c', 280, 0]);
});

Recipes.deleteRecipe({ id: 272, count: 1, data: -1 });
Recipes.deleteRecipe({ id: 273, count: 1, data: -1 });
Recipes.deleteRecipe({ id: 274, count: 1, data: -1 });
Recipes.deleteRecipe({ id: 275, count: 1, data: -1 });
Recipes.deleteRecipe({ id: 291, count: 1, data: -1 });




// file: content/item/tool/copper_tool.js

ToolAPI.addToolMaterial("copper", {
    durability: 225,
    level: 2,
    efficiency: 6,
    damage: 2,
    enchantability: 14
});

IDRegistry.genItemID("axeCopper");
Item.createItem("axeCopper", "Copper Axe", { name: "axe_copper" });
ToolAPI.setTool(ItemID.axeCopper, "copper", ToolType.axe);
ItemDictionary.setItemCategory(ItemID.axeCopper, "minecraft:tool.axe");
ItemDictionary.setItemCategory(ItemID.axeCopper, "minecraft:tool.knife");
Callback.addCallback("PreLoaded", function () {
    Recipes.addShaped({ id: ItemID.axeCopper, count: 1, data: 0 }, [
        "a",
        "b",
        "c"
    ], ['a', ItemID.headAxeCopper, -1, 'b', ItemID.rope, -1, 'c', 280, 0]);
});

IDRegistry.genItemID("hoeCopper");
Item.createItem("hoeCopper", "Copper Hoe", { name: "hoe_copper" });
ToolAPI.setTool(ItemID.hoeCopper, "copper", ToolType.hoe);
Callback.addCallback("PreLoaded", function () {
    Recipes.addShaped({ id: ItemID.hoeCopper, count: 1, data: 0 }, [
        "a",
        "b",
        "c"
    ], ['a', ItemID.headHoeCopper, -1, 'b', ItemID.rope, -1, 'c', 280, 0]);
});

IDRegistry.genItemID("spearCopper");
Item.createItem("spearCopper", "Copper Spear", { name: "spear_copper" });
ToolAPI.setTool(ItemID.spearCopper, "copper", ToolType.sword);
Callback.addCallback("PreLoaded", function () {
    Recipes.addShaped({ id: ItemID.spearCopper, count: 1, data: 0 }, [
        "a",
        "b",
        "c"
    ], ['a', ItemID.headSpearCopper, -1, 'b', ItemID.rope, -1, 'c', 280, 0]);
});

IDRegistry.genItemID("knifeCopper");
Item.createItem("knifeCopper", "Copper Knife", { name: "knife_copper" });
ToolAPI.setTool(ItemID.knifeCopper, "copper", ToolType.sword);
ItemDictionary.setItemCategory(ItemID.knifeCopper, "minecraft:tool.axe");
ItemDictionary.setItemCategory(ItemID.knifeCopper, "minecraft:tool.knife");
Callback.addCallback("PreLoaded", function () {
    Recipes.addShaped({ id: ItemID.knifeCopper, count: 1, data: 0 }, [
        "a",
        "b",
        "c"
    ], ['a', ItemID.headKnifeCopper, -1, 'b', ItemID.rope, -1, 'c', 280, 0]);
});

IDRegistry.genItemID("pickaxeCopper");
Item.createItem("pickaxeCopper", "Copper Pickaxe", { name: "pickaxe_copper" });
ToolAPI.setTool(ItemID.pickaxeCopper, "copper", ToolType.pickaxe);
Callback.addCallback("PreLoaded", function () {
    Recipes.addShaped({ id: ItemID.pickaxeCopper, count: 1, data: 0 }, [
        "a",
        "b",
        "c"
    ], ['a', ItemID.headPickaxeCopper, -1, 'b', ItemID.rope, -1, 'c', 280, 0]);
});

IDRegistry.genItemID("swordCopper");
Item.createItem("swordCopper", "Copper Sword", { name: "sword_copper" });
ToolAPI.setTool(ItemID.swordCopper, "copper", ToolType.sword);
Callback.addCallback("PreLoaded", function () {
    Recipes.addShaped({ id: ItemID.swordCopper, count: 1, data: 0 }, [
        "a",
        "b",
        "c"
    ], ['a', ItemID.headSwordCopper, -1, 'b', ItemID.rope, -1, 'c', 280, 0]);
});

IDRegistry.genItemID("shovelCopper");
Item.createItem("shovelCopper", "Copper Shovel", { name: "shovel_copper" });
ToolAPI.setTool(ItemID.shovelCopper, "copper", ToolType.shovel);
Callback.addCallback("PreLoaded", function () {
    Recipes.addShaped({ id: ItemID.shovelCopper, count: 1, data: 0 }, [
        "a",
        "b",
        "c"
    ], ['a', ItemID.headShovelCopper, -1, 'b', ItemID.rope, -1, 'c', 280, 0]);
});




// file: content/item/tool/iron_tool.js

Recipes.deleteRecipe({ id: 256, count: 1, data: -1 });
Recipes.deleteRecipe({ id: 257, count: 1, data: -1 });
Recipes.deleteRecipe({ id: 258, count: 1, data: -1 });
Recipes.deleteRecipe({ id: 267, count: 1, data: -1 });
Recipes.deleteRecipe({ id: 292, count: 1, data: -1 });

ItemDictionary.setItemCategory(258, "minecraft:tool.axe");
ItemDictionary.setItemCategory(258, "minecraft:tool.knife");
Callback.addCallback("PreLoaded", function () {
    Recipes.addShaped({ id: 258, count: 1, data: 0 }, [
        "a",
        "b",
        "c"
    ], ['a', ItemID.headAxeIron, -1, 'b', ItemID.rope, -1, 'c', 280, 0]);
});

Callback.addCallback("PreLoaded", function () {
    Recipes.addShaped({ id: 292, count: 1, data: 0 }, [
        "a",
        "b",
        "c"
    ], ['a', ItemID.headHoeIron, -1, 'b', ItemID.rope, -1, 'c', 280, 0]);
});

IDRegistry.genItemID("spearIron");
Item.createItem("spearIron", "Iron Spear", { name: "spear_iron" });
ToolAPI.setTool(ItemID.spearIron, "iron", ToolType.sword);
Callback.addCallback("PreLoaded", function () {
    Recipes.addShaped({ id: ItemID.spearIron, count: 1, data: 0 }, [
        "a",
        "b",
        "c"
    ], ['a', ItemID.headSpearIron, -1, 'b', ItemID.rope, -1, 'c', 280, 0]);
});

IDRegistry.genItemID("knifeIron");
Item.createItem("knifeIron", "Iron Knife", { name: "knife_iron" });
ToolAPI.setTool(ItemID.knifeIron, "iron", ToolType.sword);
ItemDictionary.setItemCategory(ItemID.knifeIron, "minecraft:tool.axe");
ItemDictionary.setItemCategory(ItemID.knifeIron, "minecraft:tool.knife");
Callback.addCallback("PreLoaded", function () {
    Recipes.addShaped({ id: ItemID.knifeIron, count: 1, data: 0 }, [
        "a",
        "b",
        "c"
    ], ['a', ItemID.headKnifeIron, -1, 'b', ItemID.rope, -1, 'c', 280, 0]);
});

Callback.addCallback("PreLoaded", function () {
    Recipes.addShaped({ id: 257, count: 1, data: 0 }, [
        "a",
        "b",
        "c"
    ], ['a', ItemID.headPickaxeIron, -1, 'b', ItemID.rope, -1, 'c', 280, 0]);
});

Callback.addCallback("PreLoaded", function () {
    Recipes.addShaped({ id: 267, count: 1, data: 0 }, [
        "a",
        "b",
        "c"
    ], ['a', ItemID.headSwordIron, -1, 'b', ItemID.rope, -1, 'c', 280, 0]);
});

Callback.addCallback("PreLoaded", function () {
    Recipes.addShaped({ id: 251, count: 1, data: 0 }, [
        "a",
        "b",
        "c"
    ], ['a', ItemID.headShovelIron, -1, 'b', ItemID.rope, -1, 'c', 280, 0]);
});




// file: content/item/tool/gold_tool.js

Recipes.deleteRecipe({ id: 286, count: 1, data: -1 });
Recipes.deleteRecipe({ id: 294, count: 1, data: -1 });
Recipes.deleteRecipe({ id: 283, count: 1, data: -1 });
Recipes.deleteRecipe({ id: 284, count: 1, data: -1 });
Recipes.deleteRecipe({ id: 285, count: 1, data: -1 });

ItemDictionary.setItemCategory(286, "minecraft:tool.axe");
ItemDictionary.setItemCategory(286, "minecraft:tool.knife");
Callback.addCallback("PreLoaded", function () {
    Recipes.addShaped({ id: 286, count: 1, data: 0 }, [
        "a",
        "b",
        "c"
    ], ['a', ItemID.headAxeGold, -1, 'b', ItemID.rope, -1, 'c', 280, 0]);
});

Callback.addCallback("PreLoaded", function () {
    Recipes.addShaped({ id: 294, count: 1, data: 0 }, [
        "a",
        "b",
        "c"
    ], ['a', ItemID.headHoeGold, -1, 'b', ItemID.rope, -1, 'c', 280, 0]);
});

IDRegistry.genItemID("spearGold");
Item.createItem("spearGold", "Gold Spear", { name: "spear_gold" });
ToolAPI.setTool(ItemID.spearGold, "golden", ToolType.sword);
Callback.addCallback("PreLoaded", function () {
    Recipes.addShaped({ id: ItemID.spearGold, count: 1, data: 0 }, [
        "a",
        "b",
        "c"
    ], ['a', ItemID.headSpearGold, -1, 'b', ItemID.rope, -1, 'c', 280, 0]);
});

IDRegistry.genItemID("knifeGold");
Item.createItem("knifeGold", "Gold Knife", { name: "knife_gold" });
ToolAPI.setTool(ItemID.knifeGold, "golden", ToolType.sword);
ItemDictionary.setItemCategory(ItemID.knifeGold, "minecraft:tool.axe");
ItemDictionary.setItemCategory(ItemID.knifeGold, "minecraft:tool.knife");
Callback.addCallback("PreLoaded", function () {
    Recipes.addShaped({ id: ItemID.knifeGold, count: 1, data: 0 }, [
        "a",
        "b",
        "c"
    ], ['a', ItemID.headKnifeGold, -1, 'b', ItemID.rope, -1, 'c', 280, 0]);
});

Callback.addCallback("PreLoaded", function () {
    Recipes.addShaped({ id: 285, count: 1, data: 0 }, [
        "a",
        "b",
        "c"
    ], ['a', ItemID.headPickaxeGold, -1, 'b', ItemID.rope, -1, 'c', 280, 0]);
});

Callback.addCallback("PreLoaded", function () {
    Recipes.addShaped({ id: 283, count: 1, data: 0 }, [
        "a",
        "b",
        "c"
    ], ['a', ItemID.headSwordGold, -1, 'b', ItemID.rope, -1, 'c', 280, 0]);
});

Callback.addCallback("PreLoaded", function () {
    Recipes.addShaped({ id: 284, count: 1, data: 0 }, [
        "a",
        "b",
        "c"
    ], ['a', ItemID.headShovelGold, -1, 'b', ItemID.rope, -1, 'c', 280, 0]);
});




// file: content/item/tool/fire_igniter.js

IDRegistry.genItemID("fireIgniter");
Item.createItem("fireIgniter", "Igniter", { name: "fire_igniter" });

Callback.addCallback("PreLoaded", function () {
    Recipes.addShaped({ id: ItemID.fireIgniter, count: 1, data: 0 }, [
        "a#",
        "#a",
    ], ['a', 280, -1]);
});

ItemDictionary.setItemCategory(ItemID.fireIgniter, "minecraft:tool.fire");

Item.setMaxDamage(ItemID.fireIgniter, 20);
Item.registerUseFunction("fireIgniter", function (coords, item, block) {
    var place = coords.relative;
    if (World.getBlockID(place.x, place.y, place.z) == 0) {
        World.setBlock(place.x, place.y, place.z, 51, 0);
        ToolAPI.breakCarriedTool(1);
    }
});




// file: content/item/food/fish_salted.js

IDRegistry.genItemID("fishCodSalted");
IDRegistry.genItemID("fishSalmonSalted");
IDRegistry.genItemID("fishPufferSalted");

Item.createFoodItem("fishCodSalted", "Salted Cod", { name: "fish_cod_salted" }, { stack: 64, food: 1 });
Item.createFoodItem("fishSalmonSalted", "Salted Salmon", { name: "fish_salmon_salted" }, { stack: 64, food: 1 });
Item.createFoodItem("fishPufferSalted", "Salted Puffer", { name: "fish_puffer_salted" }, { stack: 64, food: 1 });

Callback.addCallback("PreLoaded", function () {
    Recipe.registerBarrelRecipe({ id: ItemID.fishCodSalted, data: 0, count: 1 }, { id: 349, data: 0, count: 1 });
    Recipe.registerBarrelRecipe({ id: ItemID.fishSalmonSalted, data: 0, count: 1 }, { id: 349, data: 1, count: 1 });
    Recipe.registerBarrelRecipe({ id: ItemID.fishPufferSalted, data: 0, count: 1 }, { id: 349, data: 3, count: 1 });
});




// file: content/item/food/water_items.js

IDRegistry.genItemID("waterJug");
Item.createItem("waterJug", "Ceramic Jug [Water]", { name: "jug_water" });

IDRegistry.genItemID("waterPot");
Item.createItem("waterPot", "Ceramic Pot [Water]", { name: "pot_water" });

IDRegistry.genItemID("waterVessel");
Item.createItem("waterVessel", "Ceramic Vessel [Water]", { name: "vessel_water" });

IDRegistry.genItemID("bucketWooden");
Item.createItem("bucketWooden", "Wooden Bucket", { name: "bucket_wooden" });

Callback.addCallback("PreLoaded", function () {
    Recipes.addShaped({ id: ItemID.bucketWooden, count: 1, data: 0 }, [
        "###",
        "a#a",
        "#a#",
    ], ['a', 280, -1]);
});

IDRegistry.genItemID("bucketWaterWooden");
Item.createItem("bucketWaterWooden", "Wooden Bucket [Water]", { name: "bucket_wooden_water" });

Item.setLiquidClip(ItemID.ceramicJug, true);
Item.setLiquidClip(ItemID.ceramicPot, true);
Item.setLiquidClip(ItemID.ceramicVessel, true)
Item.setLiquidClip(ItemID.bucketWooden, true)

Callback.addCallback("ItemUse", function (coords, item, block) {
    if (item.id == ItemID.ceramicJug && (block.id == 8 || block.id == 9)) {
        Player.decreaseCarriedItem(1);
        Player.addItemToInventory(ItemID.waterJug, 1, 0);
    }
    else if (item.id == ItemID.waterJug) {
        let thirst = ThirstScale.getPlayerThirst();
        if (thirst < 20) {
            Player.decreaseCarriedItem(1);
            Player.addItemToInventory(ItemID.ceramicJug, 1, 0);

            thirst += ThirstScale.THIRST_WATER_RESTORES;
            if (thirst > 20) thirst = 20;
            ThirstScale.setPlayerThirst(thirst);
        }
    }
});

Callback.addCallback("ItemUse", function (coords, item, block) {
    if (item.id == 0 && Entity.getSneaking(Player.get())) {
        let thirst = ThirstScale.getPlayerThirst();
        if (thirst < 20) {
            thirst += ThirstScale.THIRST_WATER_RESTORES;
            if (thirst > 20) thirst = 20;
            ThirstScale.setPlayerThirst(thirst);
        }
    }
});

Callback.addCallback("ItemUse", function (coords, item, block) {
    if (item.id == ItemID.ceramicPot && (block.id == 8 || block.id == 9)) {
        Player.decreaseCarriedItem(1);
        Player.addItemToInventory(ItemID.waterPot, 1, 0);
    }
    else if (item.id == ItemID.waterPot) {
        let thirst = ThirstScale.getPlayerThirst();
        if (thirst < 20) {
            Player.decreaseCarriedItem(1);
            Player.addItemToInventory(ItemID.ceramicPot, 1, 0);

            thirst += ThirstScale.THIRST_WATER_RESTORES;
            if (thirst > 20) thirst = 20;
            ThirstScale.setPlayerThirst(thirst);
        }
    }
});

Callback.addCallback("ItemUse", function (coords, item, block) {
    if (item.id == ItemID.ceramicVessel && (block.id == 8 || block.id == 9)) {
        Player.decreaseCarriedItem(1);
        Player.addItemToInventory(ItemID.waterVessel, 1, 0);
    }
    else if (item.id == ItemID.waterVessel) {
        let thirst = ThirstScale.getPlayerThirst();
        if (thirst < 20) {
            Player.decreaseCarriedItem(1);
            Player.addItemToInventory(ItemID.ceramicVessel, 1, 0);

            thirst += ThirstScale.THIRST_WATER_RESTORES;
            if (thirst > 20) thirst = 20;
            ThirstScale.setPlayerThirst(thirst);
        }
    }
});

Callback.addCallback("ItemUse", function (coords, item, block) {
    if (item.id == ItemID.bucketWooden && (block.id == 8 || block.id == 9)) {
        Player.decreaseCarriedItem(1);
        Player.addItemToInventory(ItemID.bucketWaterWooden, 1, 0);
    }
    else if (item.id == ItemID.bucketWaterWooden) {
        let thirst = ThirstScale.getPlayerThirst();
        if (thirst < 20) {
            Player.decreaseCarriedItem(1);
            Player.addItemToInventory(ItemID.bucketWooden, 1, 0);

            thirst += ThirstScale.THIRST_WATER_RESTORES;
            if (thirst > 20) thirst = 20;
            ThirstScale.setPlayerThirst(thirst);
        }
    }
});




// file: content/block/resource/generation_ore.js

IDRegistry.genBlockID("oreCopper");
Block.createBlock("oreCopper", [
    { name: "Copper Ore", texture: [["ore_copper", 0]], inCreative: true }
], "opaque");
ToolAPI.registerBlockMaterial(BlockID.oreCopper, "stone");
Block.setDestroyLevel(BlockID.oreCopper, 1);

Callback.addCallback("PreLoaded", function () {
    Recipe.registerBlastLiquidRecipe(BlockID.oreCopper, { type: "copper", count: 1 });
});

Callback.addCallback("GenerateChunk", function (chunkX, chunkZ) {
    for (var i = 0; i < 15; i++) {
        var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 3, 64);
        GenerationUtils.generateOre(coords.x, coords.y, coords.z, BlockID.oreCopper, 0, 15);
    }
});

IDRegistry.genBlockID("oreSalt");
Block.createBlock("oreSalt", [
    { name: "Salt Ore", texture: [["ore_salt", 0]], inCreative: true }
], "opaque");
ToolAPI.registerBlockMaterial(BlockID.oreSalt, "stone");
Block.registerDropFunction(BlockID.oreSalt, function (coords, blockID, blockData, level, enchant) {
    if (level >= 1) {
        return [[ItemID.salt, 1, 0]];
    }
    return [];
}, 1);

Callback.addCallback("GenerateChunk", function (chunkX, chunkZ) {
    for (var i = 0; i < 15; i++) {
        var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 3, 64);
        GenerationUtils.generateOre(coords.x, coords.y, coords.z, BlockID.oreSalt, 0, 15);
    }
});

Callback.addCallback("GenerateChunk", function (chunkX, chunkZ) {
    for (var i = 0; i < 15; i++) {
        var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 3, 64);
        GenerationUtils.generateOre(coords.x, coords.y, coords.z, 82, 0, 15);
    }
});




// file: content/block/decoration/decoration_block.js

IDRegistry.genBlockID("blockCopper");
Block.createBlock("blockCopper", [
    { name: "Copper Block", texture: [["block_copper", 0]], inCreative: true }
], "opaque");

Callback.addCallback("PreLoaded", function () {
    Recipe.registerBlastLiquidRecipe(BlockID.blockCopper, { type: "copper", count: 9 });
    Recipes.addShaped({ id: BlockID.blockCopper, count: 1, data: 0 }, [
        "aaa",
        "aaa",
        "aaa"
    ], ['a', ItemID.ingotCopper, -1]);
    Recipes.addShaped({ id: ItemID.ingotCopper, count: 9, data: 0 }, [
        "a"
    ], ['a', BlockID.blockCopper, -1]);
});

IDRegistry.genBlockID("blockSalt");
Block.createBlock("blockSalt", [
    { name: "Salt Block", texture: [["block_salt", 0]], inCreative: true }
], "opaque");

Callback.addCallback("PreLoaded", function () {
    Recipe.registerBlastLiquidRecipe(BlockID.blockSalt, { type: "copper", count: 9 });
    Recipes.addShaped({ id: BlockID.blockSalt, count: 1, data: 0 }, [
        "aaa",
        "aaa",
        "aaa"
    ], ['a', ItemID.salt, -1]);
    Recipes.addShaped({ id: ItemID.salt, count: 9, data: 0 }, [
        "a"
    ], ['a', BlockID.blockSalt, -1]);
});




// file: content/tile/machine_campfire/block.js

IDRegistry.genBlockID("furnaceCampfireBlock");
Block.createBlockWithRotation("furnaceCampfireBlock", [
    {
        name: "Campfire",
        texture: [["empty", 0]],
        inCreative: false
    }
]);

Block.registerDropFunction(BlockID.furnaceCampfireBlock, function (coords, blockID, blockData, lvl, enchant) {
    return [[280, Random.randomInteger(0, 3), 0], [263, Random.randomInteger(0, 3)]];
});

Block.setShape(BlockID.furnaceCampfireBlock, 0, 0, 0, 1, 0.5, 1);




// file: content/tile/machine_campfire/render.js

{
    let mesh = new RenderMesh();
    mesh.setBlockTexture("campfire_void", 0);
    mesh.importFromFile(__dir__ + "assets/models/blocks/model_campfire_void.obj", "obj", {
        translate: [0.5, 0.5, 0.5],
        scale: [1 / 16, 1 / 16, 1 / 16]
    });
    let blockModel = new BlockRenderer.Model(mesh);
    let blockRender = new ICRender.Model();
    blockRender.addEntry(blockModel);
    BlockRenderer.setStaticICRender(BlockID.furnaceCampfireBlock, -1, blockRender);
    BlockRenderer.enableCoordMapping(BlockID.furnaceCampfireBlock, -1, blockRender);
}

{
    let mesh = new RenderMesh();
    mesh.setBlockTexture("campfire_void", 0);
    mesh.importFromFile(__dir__ + "assets/models/blocks/model_campfire_void.obj", "obj", {
        translate: [0.5, 0.5, 0.5],
        scale: [1 / 16, 1 / 16, 1 / 16]
    });
    let blockModel = new BlockRenderer.Model(mesh);
    var CampfireEFFECTRENDER = new ICRender.Model();
    CampfireEFFECTRENDER.addEntry(blockModel);

    let effect = [
        [0.15, 0, 0.15, 1, 1],
        [0.85, 0, 0.85, 0, 1],
        [0.85, 1, 0.85, 0, 0],
        [0.15, 0, 0.15, 1, 1],
        [0.15, 1, 0.15, 1, 0],
        [0.85, 1, 0.85, 0, 0],
        [0.15, 0, 0.85, 1, 1],
        [0.85, 0, 0.15, 0, 1],
        [0.85, 1, 0.15, 0, 0],
        [0.15, 0, 0.85, 1, 1],
        [0.15, 1, 0.85, 1, 0],
        [0.85, 1, 0.15, 0, 0]
    ]
    let effectMesh = new RenderMesh();
    effectMesh.setBlockTexture("campfire_effect",  0);
    for (var i = 0; i < 12; i++) {
        var poly = effect[i];
        effectMesh.addVertex(poly[0], poly[1], poly[2], poly[3], poly[4]);
    }
    for (var i = 11; i >= 0; i--) {
        var poly = effect[i];
        effectMesh.addVertex(poly[0], poly[1], poly[2], poly[3], poly[4]);
    }
    CampfireEFFECTRENDER.addEntry(effectMesh);
}




// file: content/tile/machine_campfire/item.js

IDRegistry.genItemID("campfire");
Item.createItem("campfire", "Campfire", { name: "spawn_campfire" });

Callback.addCallback("PreLoaded", function () {
    for (var i in ItemDictionary.getCategory("minecraft:wood")) {
        Recipes.addShaped({ id: ItemID.campfire, count: 1, data: 0 }, [
            "#b#",
            "bcb",
            "aaa"
        ], ['a', parseInt(i), -1, 'b', 280, -1, 'c', 263, -1]);
    }
});

Item.registerUseFunction("campfire", function (coords, item, block) {
    var place = coords.relative;
    if (World.getBlockID(place.x, place.y, place.z) == 0) {
        World.setBlock(place.x, place.y, place.z, BlockID.furnaceCampfireBlock, 0);
        Player.decreaseCarriedItem(1);
        World.addTileEntity(place.x, place.y, place.z);
    }
});




// file: content/tile/machine_campfire/gui.js

const UI_CAMPFIRE = new UI.StandartWindow({
    standart: {
        header: { text: { text: Translation.translate("Campfire") } },
        inventory: { standart: true },
        background: { standart: true }
    },

    drawing: [
        { type: "bitmap", x: 530, y: 155, bitmap: "arrow_bar_background", scale: 3.2 },
        { type: "bitmap", x: 450, y: 155, bitmap: "fire_background", scale: 3.2 }
    ],

    elements: {
        "progressScale": { type: "scale", x: 530, y: 155, direction: 0, value: 0.5, bitmap: "arrow_bar_scale", scale: 3.2 },
        "burningScale": { type: "scale", x: 450, y: 155, direction: 1, value: 0.5, bitmap: "fire_scale", scale: 3.2 },
        "slotSource": { type: "slot", x: 441, y: 79 },
        "slotFuel": {
            type: "slot", x: 441, y: 218,
            isValid: function (id, count, data) {
                return Recipes.getFuelBurnDuration(id, data) > 0;
            }
        },
        "slotResult": { type: "slot", x: 625, y: 148, isValid: function () { return false; } },
    }
});




// file: content/tile/machine_campfire/tile.js

TileEntity.registerPrototype(BlockID.furnaceCampfireBlock, {
	defaultValues: {
		meta: 0,
		progress: 0,
		burn: 0,
		burnMax: 0,
		isActive: false
	},

    getGuiScreen: function () {
        return UI_CAMPFIRE;
    },
	
	addTransportedItem: function(self, item, direction){
		var slot = this.container.getSlot("slotSource");
		if(slot.id==0 || slot.id==item.id && slot.data==item.data && slot.count < 64){
			var add = Math.min(item.count, 64 - slot.count);
			item.count -= add;
			slot.id = item.id;
			slot.data = item.data;
			slot.count += add;
			if(!item.count){return;}
		}
		
		var slot = this.container.getSlot("slotFuel");
		if(Recipes.getFuelBurnDuration(item.id, item.data) && (slot.id==0 || slot.id==item.id && slot.data==item.data && slot.count < 64)){
			var add = Math.min(item.count, 64 - slot.count);
			item.count -= add;
			slot.id = item.id;
			slot.data = item.data;
			slot.count += add;
		}
	},
	
	getTransportSlots: function(){
		return {input: ["slotSource", "slotFuel"], output: ["slotResult"]};
	},

    init: function () {
        if (this.data.isActive) {
            BlockRenderer.mapAtCoords(this.x, this.y, this.z, CampfireEFFECTRENDER);
        }
    },

    click: function (id, count, data) {
        if (ItemDictionary.isItemInCategory(id, "minecraft:tool.fire") && !this.data.isActive) {
            Game.prevent();
            this.getGuiScreen = function () {
                return null;
            };
            this.data.isActive = true;
            BlockRenderer.mapAtCoords(this.x, this.y, this.z, CampfireEFFECTRENDER);

            if (id == 50) Player.decreaseCarriedItem(1);
            if (id == 259) ToolAPI.breakCarriedTool(1);
            if (id == ItemID.fireIgniter) ToolAPI.breakCarriedTool(1);
        }
        else if (id == 325 && data == 0 && this.data.isActive) {
            Game.prevent();
            this.getGuiScreen = function () {
                return null;
            }
            this.data.isActive = false;
            BlockRenderer.unmapAtCoords(this.x, this.y, this.z);
            Player.setCarriedItem(325, 1, 0);
        }
        else {
            this.getGuiScreen = function () { return UI_CAMPFIRE; };
        }
    },

	tick: function(){
		var sourceSlot = this.container.getSlot("slotSource");
		var result = Recipe.getCampfireRecipe(sourceSlot);
		
		if(this.data.burn == 0 && result){
			this.data.burn = this.data.burnMax = this.getFuel("slotFuel");
		}
		
		if(this.data.burn > 0 && result){
			var resultSlot = this.container.getSlot("slotResult");
			if((resultSlot.id == result.id && resultSlot.data == result.data && resultSlot.count < 64 || resultSlot.id == 0) && this.data.progress++ >= 160){
				sourceSlot.count--;
				resultSlot.id = result.id;
				resultSlot.data = result.data || 0;
				resultSlot.count++;
				this.container.validateAll();
				this.data.progress = 0;
			}
		}
		else{
			this.data.progress = 0;
		}
		
		if(this.data.burn > 0){
			this.data.burn--;
		}
		
		this.container.setScale("burningScale", this.data.burn / this.data.burnMax || 0);
		this.container.setScale("progressScale", this.data.progress / 160);
	},
	
	getFuel: function(slotName){
		var fuelSlot = this.container.getSlot(slotName);
		if(fuelSlot.id > 0){
			var burn = Recipes.getFuelBurnDuration(fuelSlot.id, fuelSlot.data);
            if (burn) {
                if (!LiquidRegistry.getItemLiquid(fuelSlot.id, fuelSlot.data)) {
                    fuelSlot.count--;
                    this.container.validateSlot(slotName);
                    return burn;
                }
			}
		}
		return 0;
	}
});




// file: content/tile/machine_composter/block.js

IDRegistry.genBlockID("composter");
Block.createBlockWithRotation("composter", [
    {
        name: "Composter",
        texture: [
            ["composter_bottom", 0], ["composter_top", 0],
            ["composter_side", 0], ["composter_side", 0],
            ["composter_side", 0], ["composter_side", 0]
        ],
        inCreative: true
    }
], __OBJECT_BLOCK_TYPE);

Callback.addCallback("PreLoaded", function () {
    Recipes.addShaped({ id: BlockID.composter, count: 1, data: 0 }, [
        "b#b",
        "b#b",
        "aaa"
    ], ['a', 5, -1, 'b', 85, -1]);
});




// file: content/tile/machine_composter/render.js

{
    let mesh = new RenderMesh();
    mesh.setBlockTexture("composter_void", 0);
    mesh.importFromFile(__dir__ + "assets/models/blocks/model_composter_void.obj", "obj", {
        translate: [0.5, 0.5, 0.5],
        scale: [1 / 16, 1 / 16, 1 / 16]
    });
    let blockModel = new BlockRenderer.Model(mesh);
    let blockRender = new ICRender.Model();
    blockRender.addEntry(blockModel);
    BlockRenderer.setStaticICRender(BlockID.composter, -1, blockRender);
    BlockRenderer.enableCoordMapping(BlockID.composter, -1, blockRender);
}

let _create_compost_model = function (size) {
    let blockModel = new BlockRenderer.Model();
    let mesh = new RenderMesh();
    mesh.setBlockTexture("composter_void", 0);
    mesh.importFromFile(__dir__ + "assets/models/blocks/model_composter_void.obj", "obj", {
        translate: [0.5, 0.5, 0.5],
        scale: [1 / 16, 1 / 16, 1 / 16]
    });

    if (size < 7) blockModel.addBox(2 / 16, 2 / 16, 2 / 16, 14 / 16, 2 / 16 + size * 2 / 16, 14 / 16, "compost", 0);
    else blockModel.addBox(2 / 16, 2 / 16, 2 / 16, 14 / 16, 1, 14 / 16, "compost_ready", 0);

    let blockRender = new ICRender.Model();
    blockRender.addEntry(blockModel);
    blockRender.addEntry(mesh);
    return blockRender;
}




// file: content/tile/machine_composter/tile.js

TileEntity.registerPrototype(BlockID.composter, {
    defaultValues: {
        state: 0
    },
    init: function () {
        BlockRenderer.mapAtCoords(this.x, this.y, this.z, _create_compost_model(this.data.state));
    },
    click: function (id, count, data) {
        let result = Recipe.getComposterRecipe(id);
        if (result) {
            Game.prevent();
            if (Random.randomDouble(1, 100) < result && this.data.state < 7) {
                this.data.state++;
                BlockRenderer.mapAtCoords(this.x, this.y, this.z, _create_compost_model(this.data.state));
            }
            Player.decreaseCarriedItem(1);
            return;
        }
        if (this.data.state == 7) {
            World.drop(this.x + 0.5, this.y + 0.5, this.z + 0.5, 351, 1, 15);
            this.data.state = 0;
            BlockRenderer.unmapAtCoords(this.x, this.y, this.z);
        }
    }
});




// file: content/tile/machine_sieve/block.js

IDRegistry.genBlockID("sieve");
Block.createBlockWithRotation("sieve", [
    {
        name: "Sieve",
        texture: [
            ["barrel_bottom", 0], ["sieve_top", 0],
            ["barrel_side", 0], ["barrel_side", 0],
            ["barrel_side", 0], ["barrel_side", 0]
        ],
        inCreative: true
    }
], __OBJECT_BLOCK_TYPE);

Callback.addCallback("PreLoaded", function () {
    Recipes.addShaped({ id: BlockID.sieve, count: 1, data: 0 }, [
        "ccc",
        "a#a",
        "aaa"
    ], ['a', 5, -1, 'c', ItemID.rope, -1]);
});




// file: content/tile/machine_sieve/render.js

{
    let mesh = new RenderMesh();
    mesh.setBlockTexture("sieve_void", 0);
    mesh.importFromFile(__dir__ + "assets/models/blocks/model_sieve.obj", "obj", {
        translate: [0.5, 0.5, 0.5],
        scale: [1 / 16, 1 / 16, 1 / 16]
    });
    let blockModel = new BlockRenderer.Model(mesh);
    let blockRender = new ICRender.Model();
    blockRender.addEntry(blockModel);
    BlockRenderer.setStaticICRender(BlockID.sieve, -1, blockRender);
}




// file: content/tile/machine_sieve/tile.js

TileEntity.registerPrototype(BlockID.sieve, {
    click: function (id, count, data) {
        Game.prevent();
        if (ItemDictionary.isItemInCategory(id, "minecraft:rock.flushed")) {
            let result = Recipe.getSieveRecipe(Random.randomDouble(0, 1));
            if (result) {
                Player.decreaseCarriedItem(1);
                World.drop(this.x + 0.5, this.y + 0.5, this.z + 0.5, result, 1, 0);
                return;
            }
        }
    }
});




// file: content/tile/machine_kiln/block.js

IDRegistry.genBlockID("kiln");
Block.createBlockWithRotation("kiln", [
    {
        name: "Kiln",
        texture: [
            ["furnace_ceramic_side", 0], ["furnace_ceramic_side", 0],
            ["furnace_ceramic_side", 0], ["furnace_ceramic_front", 0],
            ["furnace_ceramic_side", 0], ["furnace_ceramic_side", 0]
        ],
        inCreative: true
    }
], __OBJECT_BLOCK_TYPE);

Callback.addCallback("PreLoaded", function () {
    Recipes.addShaped({ id: BlockID.kiln, count: 1, data: 0 }, [
        "aaa",
        "a#a",
        "aaa"
    ], ['a', 336, -1]);
 });




// file: content/tile/machine_kiln/render.js

{
    let mesh = new RenderMesh();
    mesh.setBlockTexture("furnace_ceramic", 0);
    mesh.importFromFile(__dir__ + "assets/models/blocks/model_furnace_ceramic.obj", "obj", {
        translate: [0.5, 0.5, 0.5],
        scale: [1 / 16, 1 / 16, 1 / 16]
    });
    let blockModel = new BlockRenderer.Model(mesh);
    let blockRender = new ICRender.Model();
    blockRender.addEntry(blockModel);
    BlockRenderer.setStaticICRender(BlockID.kiln, 1, blockRender);
}

{
    let mesh = new RenderMesh();
    mesh.setBlockTexture("furnace_ceramic", 0);
    mesh.importFromFile(__dir__ + "assets/models/blocks/model_furnace_ceramic_1.obj", "obj", {
        translate: [0.5, 0.5, 0.5],
        scale: [1 / 16, 1 / 16, 1 / 16]
    });
    let blockModel = new BlockRenderer.Model(mesh);
    let blockRender = new ICRender.Model();
    blockRender.addEntry(blockModel);
    BlockRenderer.setStaticICRender(BlockID.kiln, 3, blockRender);
}

{
    let mesh = new RenderMesh();
    mesh.setBlockTexture("furnace_ceramic", 0);
    mesh.importFromFile(__dir__ + "assets/models/blocks/model_furnace_ceramic_2.obj", "obj", {
        translate: [0.5, 0.5, 0.5],
        scale: [1 / 16, 1 / 16, 1 / 16]
    });
    let blockModel = new BlockRenderer.Model(mesh);
    let blockRender = new ICRender.Model();
    blockRender.addEntry(blockModel);
    BlockRenderer.setStaticICRender(BlockID.kiln, 0, blockRender);
}

{
    let mesh = new RenderMesh();
    mesh.setBlockTexture("furnace_ceramic", 0);
    mesh.importFromFile(__dir__ + "assets/models/blocks/model_furnace_ceramic_3.obj", "obj", {
        translate: [0.5, 0.5, 0.5],
        scale: [1 / 16, 1 / 16, 1 / 16]
    });
    let blockModel = new BlockRenderer.Model(mesh);
    let blockRender = new ICRender.Model();
    blockRender.addEntry(blockModel);
    BlockRenderer.setStaticICRender(BlockID.kiln, 2, blockRender);
}




// file: content/tile/machine_kiln/gui.js

const UI_CERAMIC_FURNACE = new UI.StandartWindow({
	standart: {
		header: {text: {text: Translation.translate("Kiln")}},
		inventory: {standart: true},
		background: {standart: true}
	},
	
	drawing: [
		{type: "bitmap", x: 530, y: 155, bitmap: "arrow_bar_background", scale: 3.2},
		{type: "bitmap", x: 450, y: 155, bitmap: "fire_background", scale: 3.2}
	],
	
	elements: {
		"progressScale": {type: "scale", x: 530, y: 155, direction: 0, value: 0.5, bitmap: "arrow_bar_scale", scale: 3.2},
		"burningScale": {type: "scale", x: 450, y: 155, direction: 1, value: 0.5, bitmap: "fire_scale", scale: 3.2},
		"slotSource": {type: "slot", x: 441, y: 79},
		"slotFuel": {type: "slot", x: 441, y: 218,
			isValid: function(id, count, data){
				return Recipes.getFuelBurnDuration(id, data) > 0;
			}
		},
		"slotResult": {type: "slot", x: 625, y: 148, isValid: function(){return false;}},
	}
});




// file: content/tile/machine_kiln/tile.js

TileEntity.registerPrototype(BlockID.kiln, {
	defaultValues: {
		meta: 0,
        progress: 0,
		burn: 0,
		burnMax: 0,
		isActive: false
	},

	getGuiScreen: function(){
		return UI_CERAMIC_FURNACE;
	},
	
	addTransportedItem: function(self, item, direction){
		var slot = this.container.getSlot("slotSource");
		if(slot.id==0 || slot.id==item.id && slot.data==item.data && slot.count < 64){
			var add = Math.min(item.count, 64 - slot.count);
			item.count -= add;
			slot.id = item.id;
			slot.data = item.data;
			slot.count += add;
			if(!item.count){return;}
		}
		
		var slot = this.container.getSlot("slotFuel");
		if(Recipes.getFuelBurnDuration(item.id, item.data) && (slot.id==0 || slot.id==item.id && slot.data==item.data && slot.count < 64)){
			var add = Math.min(item.count, 64 - slot.count);
			item.count -= add;
			slot.id = item.id;
			slot.data = item.data;
			slot.count += add;
		}
	},
	
	getTransportSlots: function(){
		return {input: ["slotSource", "slotFuel"], output: ["slotResult"]};
	},
	
	tick: function(){
		var sourceSlot = this.container.getSlot("slotSource");
		var result = Recipe.getCeramicFurnaceRecipe(sourceSlot);
		
		if(this.data.burn == 0 && result){
			this.data.burn = this.data.burnMax = this.getFuel("slotFuel");
		}
		
		if(this.data.burn > 0 && result){
			var resultSlot = this.container.getSlot("slotResult");
			if((resultSlot.id == result.id && resultSlot.data == result.data && resultSlot.count < 64 || resultSlot.id == 0) && this.data.progress++ >= 160){
				sourceSlot.count--;
				resultSlot.id = result.id;
				resultSlot.data = result.data || 0;
				resultSlot.count++;
				this.container.validateAll();
				this.data.progress = 0;
			}
		}
		else{
			this.data.progress = 0;
		}
		
		if(this.data.burn > 0){
			this.data.burn--;
		}
		
		this.container.setScale("burningScale", this.data.burn / this.data.burnMax || 0);
		this.container.setScale("progressScale", this.data.progress / 160);
	},
	
	getFuel: function(slotName){
		var fuelSlot = this.container.getSlot(slotName);
		if(fuelSlot.id > 0){
			var burn = Recipes.getFuelBurnDuration(fuelSlot.id, fuelSlot.data);
			if(burn){
				if(LiquidRegistry.getItemLiquid(fuelSlot.id, fuelSlot.data)){
					var empty = LiquidRegistry.getEmptyItem(fuelSlot.id, fuelSlot.data);
					fuelSlot.id = empty.id;
					fuelSlot.data = empty.data;
					return burn;
				}
				fuelSlot.count--;
				this.container.validateSlot(slotName);
				return burn;
			}
		}
		return 0;
	}
});




// file: content/tile/machine_bellows/block.js

IDRegistry.genBlockID("bellows");
Block.createBlockWithRotation("bellows", [
    {
        name: "Bellows",
        texture: [
            ["bellows_top", 0], ["bellows_top", 0],
            ["bellows_side", 0], ["bellows_side", 0],
            ["bellows_side", 0], ["bellows_side", 0]
        ],
        inCreative: true
    }
], __OBJECT_BLOCK_TYPE);

Callback.addCallback("PreLoaded", function () {
    Recipes.addShaped({ id: BlockID.bellows, count: 1, data: 0 }, [
        "ccc",
        "b#b",
        "dad"
    ], ['a', 33, 0, 'b', 334, 0, 'c', 5, -1, 'd', ItemID.gearWooden, -1]);
});




// file: content/tile/machine_bellows/render.js

{
    let mesh = new RenderMesh();
    mesh.setBlockTexture("bellows", 0);
    mesh.importFromFile(__dir__ + "assets/models/blocks/model_bellows.obj", "obj", {
        translate: [0.5, 0.5, 0.5],
        scale: [1 / 16, 1 / 16, 1 / 16]
    });
    let blockModel = new BlockRenderer.Model(mesh);
    let blockRender = new ICRender.Model();
    blockRender.addEntry(blockModel);
    BlockRenderer.setStaticICRender(BlockID.bellows, 1, blockRender);
}

{
    let mesh = new RenderMesh();
    mesh.setBlockTexture("bellows", 0);
    mesh.importFromFile(__dir__ + "assets/models/blocks/model_bellows_1.obj", "obj", {
        translate: [0.5, 0.5, 0.5],
        scale: [1 / 16, 1 / 16, 1 / 16]
    });
    let blockModel = new BlockRenderer.Model(mesh);
    let blockRender = new ICRender.Model();
    blockRender.addEntry(blockModel);
    BlockRenderer.setStaticICRender(BlockID.bellows, 3, blockRender);
}

{
    let mesh = new RenderMesh();
    mesh.setBlockTexture("bellows", 0);
    mesh.importFromFile(__dir__ + "assets/models/blocks/model_bellows_2.obj", "obj", {
        translate: [0.5, 0.5, 0.5],
        scale: [1 / 16, 1 / 16, 1 / 16]
    });
    let blockModel = new BlockRenderer.Model(mesh);
    let blockRender = new ICRender.Model();
    blockRender.addEntry(blockModel);
    BlockRenderer.setStaticICRender(BlockID.bellows, 0, blockRender);
}

{
    let mesh = new RenderMesh();
    mesh.setBlockTexture("bellows", 0);
    mesh.importFromFile(__dir__ + "assets/models/blocks/model_bellows_3.obj", "obj", {
        translate: [0.5, 0.5, 0.5],
        scale: [1 / 16, 1 / 16, 1 / 16]
    });
    let blockModel = new BlockRenderer.Model(mesh);
    let blockRender = new ICRender.Model();
    blockRender.addEntry(blockModel);
    BlockRenderer.setStaticICRender(BlockID.bellows, 2, blockRender);
}




// file: content/tile/machine_bellows/tile.js

TileEntity.registerPrototype(BlockID.bellows, {
    click: function (item_id, item_count, item_data) {
        Game.prevent();
        let data = World.getBlock(this.x, this.y, this.z).data;
        let direction = {};
        if (data == 0) direction = { x: 0, z: 1 };
        if (data == 2) direction = { x: 1, z: 0 };
        if (data == 1) direction = { x: 0, z: -1 };
        if (data == 3) direction = { x: -1, z: 0 };

        var tile = World.getTileEntity(this.x + direction.x, this.y, this.z + direction.z);

        if (!(tile && tile.onAIRGet))
            alert(World.getBlock(this.x, this.y, this.z).data);

        if (tile && tile.onAIRGet)
            tile.onAIRGet(this);
    },
});




// file: content/tile/machine_blast_furnace/block.js

IDRegistry.genBlockID("furnaceBlast");
Block.createBlockWithRotation("furnaceBlast", [
    {
        name: "Blast Furnace",
        texture: [
            ["blast_furnace_top", 0], ["blast_furnace_top", 0],
            ["blast_furnace_side", 0], ["blast_furnace_front_off", 0],
            ["blast_furnace_side", 0], ["blast_furnace_side", 0]
        ],
        inCreative: true
    }
], "opaque");

Callback.addCallback("PreLoaded", function () {
    Recipes.addShaped({ id: BlockID.furnaceBlast, count: 1, data: 0 }, [
        "aaa",
        "aba",
        "ccc"
    ], ['a', ItemID.chunkStone, 0, 'b', 61, 0, 'c', 4, -1]);
});




// file: content/tile/machine_blast_furnace/gui.js

const UI_BLAST_FURNACE = new UI.StandartWindow({
    standart: {
        header: { text: { text: Translation.translate("Blast Furnace") } },
        inventory: { standart: true },
        background: { standart: true }
    },

    drawing: [
        { type: "bitmap", x: 592, y: 155, bitmap: "fire_background", scale: 4 },
        { type: "bitmap", x: 740, y: 155, bitmap: "arrow_bar_background", scale: 3.2 },

        { type: "bitmap", x: 416, y: 50, bitmap: "liquid.background", scale: 3.2},
        { type: "bitmap", x: 350, y: 50, bitmap: "background_air", scale: 3.2 },
        { type: "bitmap", x: 651, y: 79, bitmap: "background_heat", scale: 1.9 },
    ],

    elements: {
        "airScale": { type: "scale", x: 350, y: 50, direction: 1, bitmap: "scale_air", scale: 3.2 },
        "liquidScale": { type: "scale", x: 416, y: 50, direction: 1, bitmap: "liquid.background", scale: 3.2 },
        "heatScale": { type: "scale", x: 651, y: 79, direction: 1, bitmap: "scale_heat", scale: 1.9 },

        "progressScale": { type: "scale", x: 740, y: 155, direction: 0, bitmap: "arrow_bar_scale", scale: 3.2 },
        "burningScale": { type: "scale", x: 592, y: 155, direction: 1, bitmap: "fire_scale", scale: 4 },

        "slotRawSource": { type: "slot", x: 591, y: 79 },
        "slotFuel": {
            type: "slot", x: 591, y: 218,
            isValid: function (id, count, data) {
                return Recipes.getFuelBurnDuration(id, data) > 0;
            }
        },


        "slotSource": { type: "slot", x: 675, y: 148 },
        "slotResult": { type: "slot", x: 825, y: 148, isValid: function () { return false; } },
    }
});




// file: content/tile/machine_blast_furnace/tile.js

TileEntity.registerPrototype(BlockID.furnaceBlast, {
    defaultValues: {
        meta: 0,
        progress: 0,
        progressHeat: 0,
        burn: 0,
        burnMax: 0,
        airValue: 0,
        liquidValue: 0,
        liquidType: null,
        isActive: false
    },
    
    getGuiScreen: function () {
        return UI_BLAST_FURNACE;
    },

    addTransportedItem: function (self, item, direction) {
        var slot = this.container.getSlot("slotRawSource");
        if (slot.id == 0 || slot.id == item.id && slot.data == item.data && slot.count < 64) {
            var add = Math.min(item.count, 64 - slot.count);
            item.count -= add;
            slot.id = item.id;
            slot.data = item.data;
            slot.count += add;
            if (!item.count) { return; }
        }

        var slot = this.container.getSlot("slotFuel");
        if (Recipes.getFuelBurnDuration(item.id, item.data) && (slot.id == 0 || slot.id == item.id && slot.data == item.data && slot.count < 64)) {
            var add = Math.min(item.count, 64 - slot.count);
            item.count -= add;
            slot.id = item.id;
            slot.data = item.data;
            slot.count += add;
        }
    },

    getTransportSlots: function () {
        return { input: ["slotRawSource", "slotFuel"], output: ["slotResult"] };
    },

    onAIRGet: function () {
        this.data.airValue = Math.min(this.data.airValue + 1, 20);
    },

    tick: function () {

        if (this.container.isOpened()) {
            let content = this.container.getGuiContent();
            content.elements.liquidScale.bitmap == "liquid." + this.data.liquidType ? null : content.elements.liquidScale.bitmap = "liquid." + this.data.liquidType;
        }

        let sourceRawSlot = this.container.getSlot("slotRawSource");
        let sourceSlot = this.container.getSlot("slotSource");
        let resultSlot = this.container.getSlot("slotResult");

        let recipe1 = Recipe.getBlastLiquidRecipe(sourceRawSlot.id);
        let recipe2 = Recipe.getBlastFormRecipe(sourceSlot.id, this.data.liquidType);

        if (this.data.burn == 0 && (recipe1 || recipe2) && this.data.airValue > 0) {
            this.data.burn = this.data.burnMax = this.getFuel("slotFuel");
        }

        if (this.data.liquidValue <= 0)
            this.data.liquidType = null;

        if (this.data.airValue > 0 && this.data.burn > 0 && recipe1) {
            if (((recipe1.type == this.data.liquidType && this.data.liquidValue + recipe1.count <= 16) || this.data.liquidValue == 0) && this.data.progressHeat++ >= 160) {
                this.data.liquidType = recipe1.type;
                this.data.liquidValue += recipe1.count;
                this.data.progressHeat = 0;
                sourceRawSlot.count--;
                this.data.airValue--;
                this.container.validateAll();
            }
        }
        else {
            this.data.progressHeat = 0;
        }

        if (this.data.airValue > 0 && this.data.burn > 0 && recipe2) {
            if (this.data.liquidValue > 0 && (resultSlot.id == recipe2.id && resultSlot.data == recipe2.data && resultSlot.count < 64 || resultSlot.id == 0) && this.data.progress++ >= 160) {
                resultSlot.id = recipe2.id;
                resultSlot.data = recipe2.data || 0;
                resultSlot.count++;
                this.container.validateAll();
                this.data.progress = 0;
                this.data.airValue--;
                this.data.liquidValue--;
            }
        }
        else {
            this.data.progress = 0;
        }

        if (this.data.burn > 0) {
            this.data.burn--;
        }

        this.container.setScale("progressScale", this.data.progress / 160);
        this.container.setScale("burningScale", this.data.burn / this.data.burnMax || 0);
        this.container.setScale("liquidScale", this.data.liquidValue / 20);
        this.container.setScale("airScale", this.data.airValue / 20);
        this.container.setScale("heatScale", this.data.progressHeat / 160);
    },

    getMaximalProgressValue: function () {
        return 160;
    },
    getMaximalAirValue: function () {
        return 20;
    },
    getMaximalLiquidValue: function () {
        return 16;
    },
    
    getFuel: function (slotName) {
        var fuelSlot = this.container.getSlot(slotName);
        if (fuelSlot.id > 0) {
            var burn = Recipes.getFuelBurnDuration(fuelSlot.id, fuelSlot.data);
            if (burn) {
                if (LiquidRegistry.getItemLiquid(fuelSlot.id, fuelSlot.data)) {
                    var empty = LiquidRegistry.getEmptyItem(fuelSlot.id, fuelSlot.data);
                    fuelSlot.id = empty.id;
                    fuelSlot.data = empty.data;
                    return burn;
                }
                fuelSlot.count--;
                this.container.validateSlot(slotName);
                return burn;
            }
        }
        return 0;
    }
});




// file: content/tile/machine_barrel/block.js

IDRegistry.genBlockID("barrel");
Block.createBlockWithRotation("barrel", [
    {
        name: "Barrel",
        texture: [
            ["barrel_bottom", 0], ["barrel_top", 0],
            ["barrel_side", 0], ["barrel_side", 0],
            ["barrel_side", 0], ["barrel_side", 0]
        ],
        inCreative: true
    }
], "opaque");

Callback.addCallback("PreLoaded", function () {
    Recipes.addShaped({ id: BlockID.barrel, count: 1, data: 0 }, [
        "aba",
        "a#a",
        "aaa"
    ], ['a', 5, -1, 'b', 158, -1]);
});




// file: content/tile/machine_barrel/gui.js

const UI_BARREL = new UI.StandartWindow({
    standart: {
        header: { text: { text: Translation.translate("Barrel") } },
        inventory: { standart: true },
        background: { standart: true }
    },

    drawing: [
        { type: "bitmap", x: 530, y: 155, bitmap: "arrow_bar_background", scale: 3.2 }
    ],

    elements: {
        "progressScale": { type: "scale", x: 530, y: 155, direction: 0, value: 0.5, bitmap: "arrow_bar_scale", scale: 3.2 },
        "slotSource": { type: "slot", x: 441, y: 148 },
        "slotFuel": { type: "slot", x: 380, y: 148 },
        "slotResult": { type: "slot", x: 625, y: 148, isValid: function () { return false; } },
    }
});




// file: content/tile/machine_barrel/tile.js

TileEntity.registerPrototype(BlockID.barrel, {
    defaultValues: {
        progress: 0
    },

    getGuiScreen: function () {
        return UI_BARREL;
    },

    addTransportedItem: function (self, item, direction) {
        var slot = this.container.getSlot("slotFuel");
        if (item.id == ItemID.salt && (slot.id == 0 || slot.id == item.id && slot.data == item.data && slot.count < 64)) {
            var add = Math.min(item.count, 64 - slot.count);
            item.count -= add;
            slot.id = item.id;
            slot.data = item.data;
            slot.count += add;
            if (!item.count) { return; }
        }

        var slot = this.container.getSlot("slotSource");
        if (slot.id == 0 || slot.id == item.id && slot.data == item.data && slot.count < 64) {
            var add = Math.min(item.count, 64 - slot.count);
            item.count -= add;
            slot.id = item.id;
            slot.data = item.data;
            slot.count += add;
            if (!item.count) { return; }
        }
    },

    getTransportSlots: function () {
        return { input: ["slotSource", "slotFuel"], output: ["slotResult"] };
    },

    tick: function () {
        var sourceSlot = this.container.getSlot("slotSource");
        var fuelSlot = this.container.getSlot("slotFuel");
        var result = Recipe.getBarrelRecipe(sourceSlot);
                        
        if (fuelSlot.id == ItemID.salt && fuelSlot.count > 0 && result) {
            var resultSlot = this.container.getSlot("slotResult");
            if ((resultSlot.id == result.id && resultSlot.data == result.data && resultSlot.count < 64 || resultSlot.id == 0) && this.data.progress++ >= 160) {
                sourceSlot.count--;
                fuelSlot.count--;
                resultSlot.id = result.id;
                resultSlot.data = result.data || 0;
                resultSlot.count++;
                this.container.validateAll();
                this.data.progress = 0;
            }
        }
        else {
            this.data.progress = 0;
        }

        this.container.setScale("progressScale", this.data.progress / 160);
    }
});




// file: debug/tps_view.js

Callback.addCallback("LevelLoaded", function () {
    if (Options.DEBUG_MODE) {
        let currentColor = ChatColor.GREEN;
        let lasttime = -1;
        let frame = 0;

        Callback.addCallback("tick", function () {
            if (Options.DEBUG_MODE) {
                let t = java.lang.System.currentTimeMillis();
                if (frame++ % 20 == 0) {
                    if (lasttime != -1) {
                        tps = 1000 / (t - lasttime) * 20;
                        let currentTps = Math.round(tps * 10) / 10;
                        currentColor = currentTps < 10 ? ChatColor.RED : currentTps < 15 ? ChatColor.YELLOW : ChatColor.GREEN;
                        Game.tipMessage(currentColor + currentTps + " tps");
                    }
                    lasttime = t;
                }
            }
        });
    }
});




