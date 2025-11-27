/*
BUILD INFO:
  dir: dev
  target: main.js
  files: 51
*/



// file: Header.js

/**
     _    _            _     _          __                         _           _              _   
    | |  | |          | |   | |        / _|                       (_)         | |            | |  
    | |  | | ___  _ __| | __| |   ___ | |_   _ __ ___   __ _  __ _ _  ___ __ _| |   __ _ _ __| |_ 
    | |/\| |/ _ \| '__| |/ _` |  / _ \|  _| | '_ ` _ \ / _` |/ _` | |/ __/ _` | |  / _` | '__| __|
    \  /\  / (_) | |  | | (_| | | (_) | |   | | | | | | (_| | (_| | | (_| (_| | | | (_| | |  | |_ 
     \/  \/ \___/|_|  |_|\__,_|  \___/|_|   |_| |_| |_|\__,_|\__, |_|\___\__,_|_|  \__,_|_|   \__|
                                                              __/ |                               
                                                             |___/                                
    by @MeduiIthron
**/

IMPORT("ChargeItem");
IMPORT("MobHelper");
IMPORT("StorageInterface");




// file: engine/Manifest.js

const Manifest = {
    get APIVersion() {
        return FileTool.ReadJSON(__dir__ + "mod.info").engine;
    },
    get Version() {
        return FileTool.ReadJSON(__dir__ + "mod.info").version;
    }
};




// file: engine/Random.js

const Random = {
    randomDouble: function (minimal, maximal) {
        return Math.random() * (maximal - mimimal) + minimal;
    },
    randomInteger: function (minimal, maximal) {
        return Math.floor(this.randomDouble(minimal, maximal));
    }
};




// file: engine/Block.js

Block.getBlockDrop = function (coords, id, data, tool) {
    var dropFunc = Block.dropFunctions[id];
    if (dropFunc) {
        return dropFunc(coords, id, data, ToolAPI.getToolLevel(tool), {});
    }
    return [[id, 1, data]];
};

Block.setDestroyLevel = function (id, lvl) {
    Block.registerDropFunction(id, function (coords, blockID, blockData, level, enchant) {
        if (level >= lvl) {
            return [[blockID, 1, 0]];
        }
        return [];
    }, lvl);
};




// file: engine/client/Particle.js

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
    effectSpiral: function (part, x, y, z, diameter, velX, velY, velZ) {
        diameter /= 2;
        velX ? null : velX = 0;
        velY ? null : velY = 0;
        velZ ? null : velZ = 0;
        var rad = diameter;

        let system = this.createSystem(0, 0, 0);

        for (var i = 0; i < Math.PI * (Math.PI * rad); i = i + 0.1) {
            Level.addParticle(part, x + 0.5 + Math.sin(i) * diameter, y + 0.1, z + 0.5 + Math.cos(i) * diameter, velX, velY, velZ);
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




// file: engine/client/Geometry.js

var Geometry = {
    geometry_block: {},

    loadBlockGeometry: function (filePath) {
        var jsonSource = FileTools.ReadJSON(filePath);
        if (!(jsonSource && jsonSource.identifier)) {
            return false;
        }
        else {
            var identifier = jsonSource.identifier;
            var extendsObject = jsonSource.extendsObject;
            var customCollision = jsonSource.customCollision;
            var boxes = jsonSource.boxes;
            this.geometry_block[identifier] = { extendsObject: extendsObject, customCollision: customCollision, boxes: boxes };
            return true;
        }
    },
    getBlockGeometry: function (geometryIdentifier) {
        if (!this.geometry_block[geometryIdentifier]) {
            Logger.log("Unknown block geometry: " + geometryIdentifier, "ERROR");
            return null;
        }
        else {
            var result = this.geometry_block[geometryIdentifier];
            var extendsObject = result.extendsObject;
            if (extendsObject) {
                extendsObject = this.getBlockGeometry(extendsObject);
                result.boxes = result.boxes.concat(extendsObject.boxes);
            }
            return result;
        }
    },
    createSimpleStaticBlockRender: function (geometryIdentifier) {
        var geometry = this.getBlockGeometry(geometryIdentifier);
        if (!geometry) {
            return null;
        }
        else {
            var customCollision = geometry.customCollision;
            var boxes = geometry.boxes;
            var visual_render = new ICRender.Model();
            var collision_render = new ICRender.CollisionShape();

            var visual_model = BlockRenderer.createModel();
            visual_render.addEntry(visual_model);
            var collision_model = collision_render.addEntry();

            for (let i in boxes) {
                let box = boxes[i];

                let startx = box.position.x / 16;
                let starty = box.position.y / 16;
                let startz = box.position.z / 16;

                let endx = startx + box.size.x / 16;
                let endy = starty + box.size.y / 16;
                let endz = startz + box.size.z / 16;

                let block = box.block ? box.block : box.texture;
                let shape = block.shape;
                let textures = block.textures;

                if (!textures) {
                    visual_model.addBox(startx, starty, startz, endx, endy, endz, block.identifier || "stone", block.data || 0);
                }
                else {
                    visual_model.addBox(startx, starty, startz, endx, endy, endz, textures);
                }

                if (customCollision && shape) {
                    collision_model.addBox(startx, starty, startz, endx, endy, endz);
                }
            }
            return {
                visualRender: visual_render,
                collisionRender: customCollision ? collision_render : null
            };
        }
    }
};

try {
    let dirs = FileTools.GetListOfDirs(__dir__ + "assets/models/blocks");
    let files = FileTools.GetListOfFiles(__dir__ + "assets/models/blocks", "json");
    for (let i in files) {
        Geometry.loadBlockGeometry(files[i]);
    }
    for (let i in dirs) {
        let files = FileTools.GetListOfFiles(dirs[i], "json");
        for (let i in files) {
            Geometry.loadBlockGeometry(files[i]);
        }
    }
}
catch (exception) {
    alert(excepton);
}




// file: engine/client/Recipe.js

var Recipe = {
    recipe_achemical_crucible: {},
    recipe_rune_enchanter: {},
    recipe_staff_enchanter: {},

    addAlchemicalCrucibleRecipe: function (sourceItem, resultItem) {
        let recipeKey = sourceItem.id + ":" + sourceItem.data;
        this.recipe_achemical_crucible[recipeKey] = resultItem;
    },
    getAlchemicalCrucibleRecipe: function (sourceItem) {
        let recipeKey = sourceItem.id + ":" + sourceItem.data;
        return this.recipe_achemical_crucible[recipeKey] || null;
    },
    deleteAlchemicalCrucibleRecipe: function (sourceItem) {
        let recipeKey = sourceItem.id + ":" + sourceItem.data;
        this.recipe_achemical_crucible[recipeKey] ? delete this.recipe_achemical_crucible[recipeKey] : null;
    },

    addRuneEnchanterRecipe: function (sourceItem, resultItem, effectRune) {
        let key = sourceItem.id + ":" + sourceItem.data + ":[rune=" + effectRune + "]";
        this.recipe_rune_enchanter[key] = resultItem;
    },
    getRuneEnchanterRecipe: function (sourceItem, effectRune) {
        let key = sourceItem.id + ":" + sourceItem.data + ":[rune=" + effectRune + "]";
        return this.recipe_rune_enchanter[key] || null;
    },
    deleteRuneEnchanterRecipe: function (sourceItem, effectRune) {
        let recipeKey = sourceItem.id + ":" + sourceItem.data + ":[rune=" + effectRune + "]";
        this.recipe_rune_enchanter[recipeKey] ? delete this.recipe_rune_enchanter[recipeKey] : null;
    },
    
    addStaffEnchanterRecipe: function (sourceItem, resultItem, effectRune) {
        let key = sourceItem.id + ":" + sourceItem.data + ":[rune=" + effectRune + "]";
        this.recipe_staff_enchanter[key] = resultItem;
    },
    getStaffEnchanterRecipe: function (sourceItem, effectRune) {
        let key = sourceItem.id + ":" + sourceItem.data + ":[rune=" + effectRune + "]";
        return this.recipe_staff_enchanter[key] || null;
    },
    deleteStaffEnchanterRecipe: function (sourceItem, effectRune) {
        let recipeKey = sourceItem.id + ":" + sourceItem.data + ":[rune=" + effectRune + "]";
        this.recipe_staff_enchanter[recipeKey] ? delete this.recipe_staff_enchanter[recipeKey] : null;
    }
};




// file: engine/client/Effect.js

const Effect = {
    /**
     * Particle effects that are used in addition
     */

    poisonedFog: Particles.registerParticleType({
        texture: "poisoned_fog",
        size: [10, 20],
        lifetime: [20, 20],
        render: 2
    }),
    bubble: Particles.registerParticleType({
        texture: "bubble",
        size: [1, 1],
        lifetime: [10, 10],
        render: 2
    }),
    snow: Particles.registerParticleType({
        texture: "snow",
        size: [10, 10],
        lifetime: [10, 10],
        render: 2
    }),
    mana: Particles.registerParticleType({
        texture: "mana",
        size: [1, 1],
        lifetime: [10, 10],
        render: 2
    }),
    flame: Native.ParticleType.flame,
    cloud: Native.ParticleType.cloud,
    portal: Native.ParticleType.portal,
    fire: Native.ParticleType.fire,
    redstone: Native.ParticleType.redstone,
    splash: Native.ParticleType.splash,
    
    /**
     * Spell particles that are used in addition
     */
       
    earth_orb: Particles.registerParticleType({
        texture: "effect_earth",
        size: [10, 10],
        lifetime: [60, 120],
        render: 2,
        animators: {
            size: {
                period: 120,
                fadeIn: 1,
                fadeOut: 0,
                start: 0.2,
                end: 1
            }
        }
    }),
    lightning_orb: Particles.registerParticleType({
        texture: "effect_lightning",
        size: [10, 10],
        lifetime: [400, 400],
        render: 2,
        animators: {
            size: {
                period: 120,
                fadeIn: 1,
                fadeOut: 0,
                start: 0.2,
                end: 1
            }
        }
    }),
    fire_orb: Particles.registerParticleType({
        texture: "effect_fire",
        size: [10, 10],
        lifetime: [400, 400],
        render: 2,
        animators: {
            size: {
                period: 120,
                fadeIn: 1,
                fadeOut: 0,
                start: 0.2,
                end: 1
            }
        }
    }),
    darkness_orb: Particles.registerParticleType({
        texture: "effect_darkness",
        size: [10, 10],
        lifetime: [400, 400],
        render: 2,
        animators: {
            size: {
                period: 120,
                fadeIn: 1,
                fadeOut: 0,
                start: 0.2,
                end: 1
            }
        }
    }),
    ice_orb: Particles.registerParticleType({
        texture: "effect_ice",
        size: [10, 10],
        lifetime: [400, 400],
        render: 2,
        animators: {
            size: {
                period: 120,
                fadeIn: 1,
                fadeOut: 0,
                start: 0.2,
                end: 1
            }
        }
    })    
};




// file: engine/client/Ritual.js

var Ritual = {
    valueList: {},
    registerPrototype: function (identifier, prototypeObject) {
        this.valueList[identifier] = prototypeObject;
    }
};




// file: engine/client/Spell.js

const MagicSpell = new GameObject("magic_spell", {
	init: function (x, y, z, effect){
		let lookAngle = Entity.getLookAngle(Player.get()); 
		let velocity = {
			x: -Math.sin(lookAngle.yaw) * 1,
			y: Math.sin(lookAngle.pitch) * 1,
			z: Math.cos(lookAngle.yaw) * 1
		};
		
		this.position = Player.getPosition();
		this.velocity = velocity;
		this.particle = Particle.createSystem(0, 0, 0);
        this.spell = Spell.getPrototype(effect);
        this.particle.setVelocity(velocity.x, velocity.y, velocity.z);
		this.particle.emit(this.spell.effect, 0,x, y, z);
	},
	update: function (){
		var x = Math.floor(this.position.x);
		var y = Math.floor(this.position.y);
		var z = Math.floor(this.position.z);
		var block = World.getBlock(x, y, z);
		if(block.id !== 0){
			this.destroySelf();
		}
		if(this.spell.collision(this.position))
			this.destroySelf();
		
		this.move();
	},
    destroySelf: function () {
        this.particle.moveTo(-10000, 0, -10000);
		this.particle.stop();
		this.destroy();
	},
	move: function (){
		this.position.x += this.velocity.x;
		this.position.y += this.velocity.y;
		this.position.z += this.velocity.z;		
	}
});

const Spell = {
    prototype: {},
    registerPrototype: function (identifier, object){
        this.prototype[identifier] = object;
    },
    getPrototype: function (identifier){
        return this.prototype[identifier] || null;
    }
};




// file: engine/client/__execute__.js

var Level = ModAPI.requireGlobal("Level");
var player = Player.get();
var player_max_health = Entity.getMaxHealth(player);
var particle = new Particles.ParticleEmitter(0, 0, 0);

var manastorage = {
    items: {},
    registerItem: function (identifier, storage) {
        this.items[identifier] = storage;
    },
    getItem: function (identifier) {
        return this.items[identifier] || null;
    }
};




// file: game/Translation.js

Translation.addTranslation("Air Rune", { ru: "Руна ветра"});
Translation.addTranslation("Blood Rune", { ru: "Руна крови"});
Translation.addTranslation("Earth Rune", { ru: "Руна земли"});
Translation.addTranslation("Essence Rune", { ru: "Руна сущности"});
Translation.addTranslation("Fire Rune", { ru: "Руна огня"});
Translation.addTranslation("Mana Rune", { ru: "Руна маны"});
Translation.addTranslation("Space Rune", { ru: "Руна пространства"});
Translation.addTranslation("Water Rune", { ru: "Руна воды"});
Translation.addTranslation("Runestone", { ru: "Камень рун" });

Translation.addTranslation("Altar", { ru: "Алтарь"});
Translation.addTranslation("Alchemical Crucible", { ru: "Алхимический тигель"});
Translation.addTranslation("Rune Enchanter", { ru: "Зачарователь рун"});
Translation.addTranslation("Staff Enchanter", { ru: "Зачарователь жезлов" });
Translation.addTranslation("Mana Extractor", { ru: "Извлекатель маны" });
Translation.addTranslation("Mana Storage", { ru: "Ячейка маны" });

Translation.addTranslation("Magic Wand [Darkness]", { ru: "Магический жезл [Тьма]" });
Translation.addTranslation("Magic Wand [Earth]", { ru: "Магический жезл [Земля]" });
Translation.addTranslation("Magic Wand [Fire]", { ru: "Магический жезл [Огонь]" });
Translation.addTranslation("Magic Wand [Ice]", { ru: "Магический жезл [Лёд]" });
Translation.addTranslation("Magic Wand [Lightning]", { ru: "Магический жезл [Электричество]" });
Translation.addTranslation("Magic Wand [Empty]", { ru: "Магический жезл" });

Translation.addTranslation("Blood Orb", { ru: "Кровавая сфера" });
Translation.addTranslation("Explosive Orb", { ru: "Взрывная сфера" });
Translation.addTranslation("Flame Orb", { ru: "Огненая сфера" });
Translation.addTranslation("Jungle Orb", { ru: "Ядовитая сфера" });
Translation.addTranslation("Lightning Orb", { ru: "Электрическая сфера" });

Translation.addTranslation("Mana Dust", { ru: "Мана" });
Translation.addTranslation("Magic Staff", { ru: "Магический посох" });




// file: game/machine/crucible.js

IDRegistry.genBlockID("machineAlchemicalCrucible");
Block.createBlock("machineAlchemicalCrucible", [
    {
        name: "Alchemical Crucible", texture: [
            ["crucible_bottom", 0],
            ["crucible_top", 0],
            ["crucible_side", 0],
            ["crucible_side", 0],
            ["crucible_side", 0],
            ["crucible_side", 0]
        ], inCreative: true
    }
]);

Callback.addCallback("PostLoaded", function () {
    Recipes.addShaped({ id: BlockID.machineAlchemicalCrucible, count: 1, data: 0 }, [
        "b#b",
        "bcb",
        "aaa"
    ], ['a', 331, -1, 'b', 265, 0, 'c', 380, 0]);
});

var machineAlchemicalCrucibleRender = {
    water: null,
    lava: null
};

(function () {
    try {
        var render = Geometry.createSimpleStaticBlockRender("geometry.crucible");
        if (render) {
            var visual_model = render.visualRender;
        }
        BlockRenderer.setStaticICRender(BlockID.machineAlchemicalCrucible, -1, visual_model);
        BlockRenderer.enableCoordMapping(BlockID.machineAlchemicalCrucible, -1, visual_model);

        machineAlchemicalCrucibleRender.water = Geometry.createSimpleStaticBlockRender("geometry.crucible_water").visualRender;
        machineAlchemicalCrucibleRender.lava = Geometry.createSimpleStaticBlockRender("geometry.crucible_lava").visualRender;

    } catch (exception) {
        alert(exception);
    }
})();

var UIScreenAlchemicalCrucible = new UI.StandartWindow({
    standart: {
        header: { text: { text: Translation.translate("Alchemical Crucible") } },
        inventory: { standart: true },
        background: { standart: true }
    },

    drawing: [
        { type: "bitmap", x: 530, y: 79, bitmap: "arrow_bar_background", scale: 3.3 },
        { type: "bitmap", x: 450, y: 155, bitmap: "fire_background", scale: 3.3 }
    ],

    elements: {
        "progressScale": { type: "scale", x: 530, y: 79, direction: 0, value: 0.5, bitmap: "arrow_bar_scale", scale: 3.3 },
        "burningScale": { type: "scale", x: 450, y: 155, direction: 1, value: 0.5, bitmap: "fire_scale", scale: 3.3 },
        "slotSource": { type: "slot", x: 441, y: 79 },
        "slotResult": { type: "slot", x: 625, y: 79, isValid: function () { return false; } }
    }
});

TileEntity.registerPrototype(BlockID.machineAlchemicalCrucible, {
    defaultValues: {
        liquidTemperature: 0,
        liquidCurrent: null,
        recipeProgress: 0
    },
    init: function () {
        this.data.liquidCurrent === "water" ? BlockRenderer.mapAtCoords(this.x, this.y, this.z, machineAlchemicalCrucibleRender.water) : null;
        this.data.liquidCurrent === "lava" ? BlockRenderer.mapAtCoords(this.x, this.y, this.z, machineAlchemicalCrucibleRender.lava) : null;
    },
    explode: function () {
        BlockRenderer.unmapAtCoords(this.x, this.y, this.z);
        World.destroyBlock(this.x, this.y, this.z, true);
        Level.explode(this.x, this.y, this.z, 1, false);
        Particle.effectExplode(Effect.cloud, this.x, this.y, this.z, 0.5, 100);
    },
    clearData: function () {
        this.data.liquidCurrent = null;
        BlockRenderer.unmapAtCoords(this.x, this.y, this.z);
    },
    setLiquid: function (identifier) {
        this.data.liquidCurrent = identifier;
        BlockRenderer.mapAtCoords(this.x, this.y, this.z, machineAlchemicalCrucibleRender[identifier]);
    },
    trySetLiquid: function (identifier) {
        if ((identifier === "lava" && this.data.liquidCurrent === "water") || (identifier === "water" && this.data.liquidCurrent === "lava")) {
            this.explode();
            return true;
        }
        else if (identifier !== this.data.liquidCurrent) {
            this.setLiquid(identifier);
            return true;
        }
        else {
            return false;
        }
    },
    fillLiquid: function (id, count, data) {
        if (id === 325 && data === 8) {
            if (this.trySetLiquid("water")){
                Player.setCarriedItem(id, 1, 0);
                return true;
            }
        }
        else if (id === 325 && data === 10) {
            if (this.trySetLiquid("lava")) {
                Player.setCarriedItem(id, 1, 0);
                return true;
            }
        }
        return false;
    },
    getLiquid: function (id, count, data) {
        if (id === 325 && data === 0) {
            if (this.data.liquidCurrent === "water") {
                Player.setCarriedItem(id, count - 1, data);
                World.drop(this.x, this.y + 0.5, this.z, 325, 1, 8);
                this.clearData();
                return true;
            }
            else if (this.data.liquidCurrent === "lava") {
                Player.setCarriedItem(id, count - 1, data);
                World.drop(this.x, this.y + 0.5, this.z, 325, 1, 10);
                this.clearData();
                return true;
            }
        }
        return false;
    },
    click: function (id, count, data, coords) {
        if (this.getLiquid(id, count, data) || this.fillLiquid(id, count, data)) {
            Game.prevent();
        }
    },
    getGuiScreen: function () {
        return UIScreenAlchemicalCrucible;
    },
    getTransportSlots: function () {
        return { input: ["slotSource"], output: ["slotResult"] };
    },

    tick: function () {
        let block = World.getBlock(this.x, this.y - 1, this.z);
        if (block.id === 10 || block.id === 11 || block.id === 51) {
            if (this.data.liquidCurrent === "water") {
                this.data.liquidTemperature <= 100 ? this.data.liquidTemperature += 1 : null;
            }
            else {
                this.data.liquidTemperature = 0;
            }
        }
        else {
            this.data.liquidCurrent === "water" && this.data.liquidTemperature >= 1 ? this.data.liquidTemperature -= 1 : this.data.liquidTemperature = 0;
        }
        if (this.data.liquidTemperature >= 100) {
            let rndx = Math.random() * 0.4 - 0.2;
            let rndz = Math.random() * 0.4 - 0.2;

            particle.emit(Effect.bubble, 0, this.x + 0.5 + rndx, this.y + 0.9, this.z + 0.5 + rndz, 0, 0.01, 0);
        }

        var sourceSlot = this.container.getSlot("slotSource");
        var result = Recipe.getAlchemicalCrucibleRecipe(sourceSlot);

        if (this.data.liquidTemperature >= 100 && result) {
            var resultSlot = this.container.getSlot("slotResult");
            if ((resultSlot.id === result.id && resultSlot.data === result.data && resultSlot.count < 64 || resultSlot.id === 0) && this.data.recipeProgress++ >= 160) {
                sourceSlot.count--;
                resultSlot.id = result.id;
                resultSlot.data = result.data;
                resultSlot.count++;
                this.container.validateAll();
                this.data.recipeProgress = 0;
            }
        }
        else {
            this.data.recipeProgress = 0;
        }

        this.container.setScale("burningScale", this.data.liquidTemperature / 100);
        this.container.setScale("progressScale", this.data.recipeProgress / 160);
    }
});




// file: game/machine/rune_enchanter.js

IDRegistry.genBlockID("machineRuneEnchanter");
Block.createBlock("machineRuneEnchanter", [{
    name: "Rune Enchanter", texture: [
        ["rune_enchanter_bottom", 0],
        ["rune_enchanter_top", 0],
        ["rune_enchanter_side", 0],
        ["rune_enchanter_side", 0],
        ["rune_enchanter_side", 0],
        ["rune_enchanter_side", 0]
    ], inCreative: true
}], "opaque");

Callback.addCallback("PostLoaded", function () {
    Recipes.addShaped({ id: BlockID.machineRuneEnchanter, count: 1, data: 0 }, [
        "bbb",
        "bcb",
        "aaa"
    ], ['a', 331, -1, 'b', 4, 0, 'c', 58, 0]);
});

var UIScreenRuneEnchanter = new UI.StandartWindow({
    standart: {
        header: { text: { text: Translation.translate("Rune Enchanter") } },
        inventory: { standart: true },
        background: { standart: true }
    },

    drawing: [
        { type: "bitmap", x: 530, y: 155, bitmap: "arrow_bar_background", scale: 3.3 },
        { type: "bitmap", x: 450, y: 155, bitmap: "fire_background", scale: 3.3 }
    ],

    elements: {
        "progressScale": { type: "scale", x: 530, y: 155, direction: 0, value: 0.5, bitmap: "arrow_bar_scale", scale: 3.3 },
        "burningScale": { type: "scale", x: 450, y: 155, direction: 1, value: 0.5, bitmap: "fire_scale", scale: 3.3 },
        "slotSource": { type: "slot", x: 441, y: 79 },
        "slotFuel": {
            type: "slot", x: 441, y: 218,
            isValid: function (id, count, data) {
                return manastorage.getItem(id) && true;
            }
        },
        "slotResult": { type: "slot", x: 625, y: 148, isValid: function () { return false; } },

        "imageRune": { type: "image", x: 760, y: 144, scale: 4, bitmap: "rune.air" },
        "buttonPreviousRune": {
            type: "button", bitmap: "small_arrow_up", bitmap2: "small_arrow_up_down",  x: 760, y: 90, scale: 4.1, clicker: {
                onClick: function (container) { container && container.tileEntity ? container.tileEntity.changeRune(-1) : null; }
            }
        },
        "buttonNextRune": {
            type: "button", bitmap: "small_arrow_bottom", bitmap2: "small_arrow_bottom_down", x: 760, y: 220, scale: 4.1, clicker: {
                onClick: function (container) { container && container.tileEntity ? container.tileEntity.changeRune(1) : null; }
            }
        }
    }
});

TileEntity.registerPrototype(BlockID.machineRuneEnchanter, {
    defaultValues: {
        progress: 0,
        burn: 0,
        burnMax: 0,
        current_rune: 0,
        default_runes: [
            "rune.air",
            "rune.blood",
            "rune.earth",
            "rune.essence",
            "rune.fire",
            "rune.mana",
            "rune.space",
            "rune.water"
        ]
    },

    getGuiScreen: function () {
        return UIScreenRuneEnchanter;
    },
    addTransportedItem: function (self, item, direction) {
        var slot;
        slot = this.container.getSlot("slotSource");
        if (slot.id === 0 || slot.id === item.id && slot.data === item.data && slot.count < 64) {
            let add = Math.min(item.count, 64 - slot.count);
            item.count -= add;
            slot.id = item.id;
            slot.data = item.data;
            slot.count += add;
            if (!item.count) { return; }
        }

        slot = this.container.getSlot("slotFuel");
        if (manastorage.getItem(item.id) && (slot.id === 0 || slot.id === item.id && slot.data === item.data && slot.count < 64)) {
            let add = Math.min(item.count, 64 - slot.count);
            item.count -= add;
            slot.id = item.id;
            slot.data = item.data;
            slot.count += add;
        }
    },
    getTransportSlots: function () {
        return { input: ["slotSource", "slotFuel"], output: ["slotResult"] };
    },


    changeRune: function (index) {
        this.data.current_rune += index;
        this.data.current_rune === this.data.default_runes.length ? this.data.current_rune = 0 : null;
        this.data.current_rune === -1 ? this.data.current_rune = this.data.default_runes.length - 1 : null;
        let content = this.container.getGuiContent();
        content.elements["imageRune"].bitmap = this.data.default_runes[this.data.current_rune];
    },
       
    tick: function () {
        var sourceSlot = this.container.getSlot("slotSource");
        var result = Recipe.getRuneEnchanterRecipe(sourceSlot, this.data.default_runes[this.data.current_rune]);

        if (this.data.burn === 0 && result) {
            this.data.burn = this.data.burnMax = this.getFuel("slotFuel");
        }
        if (this.data.burn > 0 && result) {
            var resultSlot = this.container.getSlot("slotResult");
            if ((resultSlot.id === result.id && resultSlot.data === result.data && resultSlot.count < 64 || resultSlot.id === 0) && this.data.progress++ >= 160) {
                sourceSlot.count--;
                resultSlot.id = result.id;
                resultSlot.data = result.data;
                resultSlot.count++;
                this.container.validateAll();
                this.data.progress = 0;
            }
        }
        else {
            this.data.progress = 0;
        }
        if (this.data.burn > 0) {
            this.data.burn--;
        }

        this.container.setScale("burningScale", this.data.burn / this.data.burnMax || 0);
        this.container.setScale("progressScale", this.data.progress / 160);
    },
    getFuel: function (slotName) {
        var fuelSlot = this.container.getSlot(slotName);
        if (fuelSlot.id > 0) {
            var burn = manastorage.getItem(fuelSlot.id);
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




// file: game/machine/staff_enchanter.js

IDRegistry.genBlockID("machineStaffEnchanter");
Block.createBlock("machineStaffEnchanter", [{
    name: "Staff Enchanter", texture: [
        ["staff_enchanter_bottom", 0],
        ["staff_enchanter_top", 0],
        ["staff_enchanter_side", 0],
        ["staff_enchanter_side", 0],
        ["staff_enchanter_side", 0],
        ["staff_enchanter_side", 0]
    ], inCreative: true
}], "opaque");

Callback.addCallback("PostLoaded", function () {
    Recipes.addShaped({ id: BlockID.machineStaffEnchanter, count: 1, data: 0 }, [
        "bbb",
        "bcb",
        "aaa"
    ], ['a', 331, -1, 'b', 4, 0, 'c', BlockID.machineRuneEnchanter, 0]);
});

var UIScreenStaffEnchanter = new UI.StandartWindow({
    standart: {
        header: { text: { text: Translation.translate("Staff Enchanter") } },
        inventory: { standart: true },
        background: { standart: true }
    },

    drawing: [
        { type: "bitmap", x: 530, y: 155, bitmap: "arrow_bar_background", scale: 3.3 },
        { type: "bitmap", x: 450, y: 155, bitmap: "fire_background", scale: 3.3 }
    ],

    elements: {
        "progressScale": { type: "scale", x: 530, y: 155, direction: 0, value: 0.5, bitmap: "arrow_bar_scale", scale: 3.3 },
        "burningScale": { type: "scale", x: 450, y: 155, direction: 1, value: 0.5, bitmap: "fire_scale", scale: 3.3 },
        "slotSource": { type: "slot", x: 441, y: 79 },
        "slotFuel": {
            type: "slot", x: 441, y: 218,
            isValid: function (id, count, data) {
                return manastorage.getItem(id) && true;
            }
        },
        "slotResult": { type: "slot", x: 625, y: 148, isValid: function () { return false; } },

        "imageRune": { type: "image", x: 760, y: 144, scale: 4, bitmap: "rune.air" },
        "buttonPreviousRune": {
            type: "button", bitmap: "small_arrow_up", bitmap2: "small_arrow_up_down",  x: 760, y: 90, scale: 4.1, clicker: {
                onClick: function (container) { container && container.tileEntity ? container.tileEntity.changeRune(-1) : null; }
            }
        },
        "buttonNextRune": {
            type: "button", bitmap: "small_arrow_bottom", bitmap2: "small_arrow_bottom_down", x: 760, y: 220, scale: 4.1, clicker: {
                onClick: function (container) { container && container.tileEntity ? container.tileEntity.changeRune(1) : null; }
            }
        }
    }
});

TileEntity.registerPrototype(BlockID.machineStaffEnchanter, {
    defaultValues: {
        progress: 0,
        burn: 0,
        burnMax: 0,
        current_rune: 0,
        default_runes: [
            "rune.fire",
            "rune.mana",
            "rune.essence",
            "rune.earth"
        ]
    },

    getGuiScreen: function () {
        return UIScreenStaffEnchanter;
    },
    addTransportedItem: function (self, item, direction) {
        var slot;
        slot = this.container.getSlot("slotSource");
        if (slot.id === 0 || slot.id === item.id && slot.data === item.data && slot.count < 64) {
            let add = Math.min(item.count, 64 - slot.count);
            item.count -= add;
            slot.id = item.id;
            slot.data = item.data;
            slot.count += add;
            if (!item.count) { return; }
        }

        slot = this.container.getSlot("slotFuel");
        if (manastorage.getItem(item.id) && (slot.id === 0 || slot.id === item.id && slot.data === item.data && slot.count < 64)) {
            let add = Math.min(item.count, 64 - slot.count);
            item.count -= add;
            slot.id = item.id;
            slot.data = item.data;
            slot.count += add;
        }
    },
    getTransportSlots: function () {
        return { input: ["slotSource", "slotFuel"], output: ["slotResult"] };
    },


    changeRune: function (index) {
        this.data.current_rune += index;
        this.data.current_rune === this.data.default_runes.length ? this.data.current_rune = 0 : null;
        this.data.current_rune === -1 ? this.data.current_rune = this.data.default_runes.length - 1 : null;
        let content = this.container.getGuiContent();
        content.elements["imageRune"].bitmap = this.data.default_runes[this.data.current_rune];
    },
       
    tick: function () {
        var sourceSlot = this.container.getSlot("slotSource");
        var result = Recipe.getStaffEnchanterRecipe(sourceSlot, this.data.default_runes[this.data.current_rune]);

        if (this.data.burn === 0 && result) {
            this.data.burn = this.data.burnMax = this.getFuel("slotFuel");
        }
        if (this.data.burn > 0 && result) {
            var resultSlot = this.container.getSlot("slotResult");
            if ((resultSlot.id === result.id && resultSlot.data === result.data && resultSlot.count < 64 || resultSlot.id === 0) && this.data.progress++ >= 160) {
                sourceSlot.count--;
                resultSlot.id = result.id;
                resultSlot.data = result.data;
                resultSlot.count++;
                this.container.validateAll();
                this.data.progress = 0;
            }
        }
        else {
            this.data.progress = 0;
        }
        if (this.data.burn > 0) {
            this.data.burn--;
        }

        this.container.setScale("burningScale", this.data.burn / this.data.burnMax || 0);
        this.container.setScale("progressScale", this.data.progress / 160);
    },
    getFuel: function (slotName) {
        var fuelSlot = this.container.getSlot(slotName);
        if (fuelSlot.id > 0) {
            var burn = manastorage.getItem(fuelSlot.id);
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




// file: game/machine/altar.js

IDRegistry.genBlockID("machineAltar");
Block.createBlock("machineAltar", [{
    name: "Altar", texture: [
        ["altar_top", 0],
        ["altar_top", 0],
        ["altar_side", 0],
        ["altar_side", 0],
        ["altar_side", 0],
        ["altar_side", 0]
    ], inCreative: true
}], "opaque");

Callback.addCallback("PostLoaded", function () {
    Recipes.addShaped({ id: BlockID.machineAltar, count: 1, data: 0 }, [
        "bbb",
        "aca",
        "aaa"
    ], ['a', 331, 0, 'b', 4, 0, 'c', 58, 0]);
});

TileEntity.registerPrototype(BlockID.machineAltar, {
    defaultValues: {
        currentRitual: null
    },
    click: function (id, count, data) {
        Game.prevent();
        if (this.data.currentRitual) {
            var ritualClick = Ritual.valueList[this.data.currentRitual].click || function () { };
            var ritualCheck = Ritual.valueList[this.data.currentRitual].check || function () { };
            if (ritualCheck(this)) {
                ritualClick(id, count, data, this);
            }
        }
        else {
            for (var i in Ritual.valueList) {
                var testForRitual = Ritual.valueList[i];
                var testResult = testForRitual.activate(id, count, data, this);
                if (testResult && data + 50 <= Item.getMaxDamage(id)) {
                    this.data.currentRitual = i;
                    Player.setCarriedItem(id, count, data + 50);
                }
            }
        }
    },
    tick: function () {
        if (this.data.currentRitual) {
            var ritualTick = Ritual.valueList[this.data.currentRitual].tick || function () { };
            var ritualCheck = Ritual.valueList[this.data.currentRitual].check || function () { };
            if (ritualCheck(this)) {
                ritualTick(this);
            }
        }
    }
});




// file: game/decoration/rune_air.js

IDRegistry.genBlockID("runeAir");
Block.createBlock("runeAir", [
    { name: "Air Rune", texture: [["runestone_air", 0]], inCreative: true }
]);
ToolAPI.registerBlockMaterial(BlockID.runeAir, "stone", 2);




// file: game/decoration/rune_blood.js

IDRegistry.genBlockID("runeBlood");
Block.createBlock("runeBlood", [
    { name: "Blood Rune", texture: [["runestone_blood", 0]], inCreative: true }
]);
ToolAPI.registerBlockMaterial(BlockID.runeBlood, "stone", 2);




// file: game/decoration/rune_earth.js

IDRegistry.genBlockID("runeEarth");
Block.createBlock("runeEarth", [
    { name: "Earth Rune", texture: [["runestone_earth", 0]], inCreative: true }
]);
ToolAPI.registerBlockMaterial(BlockID.runeEarth, "stone", 2);




// file: game/decoration/rune_essence.js

IDRegistry.genBlockID("runeEssence");
Block.createBlock("runeEssence", [
    { name: "Essence Rune", texture: [["runestone_essence", 0]], inCreative: true }
]);
ToolAPI.registerBlockMaterial(BlockID.runeEssence, "stone", 2);




// file: game/decoration/rune_fire.js

IDRegistry.genBlockID("runeFire");
Block.createBlock("runeFire", [
    { name: "Fire Rune", texture: [["runestone_fire", 0]], inCreative: true }
]);
ToolAPI.registerBlockMaterial(BlockID.runeFire, "stone", 2);




// file: game/decoration/rune_mana.js

IDRegistry.genBlockID("runeMana");
Block.createBlock("runeMana", [
    { name: "Mana Rune", texture: [["runestone_mana", 0]], inCreative: true }
]);
ToolAPI.registerBlockMaterial(BlockID.runeMana, "stone", 2);




// file: game/decoration/rune_space.js

IDRegistry.genBlockID("runeSpace");
Block.createBlock("runeSpace", [
    { name: "Space Rune", texture: [["runestone_space", 0]], inCreative: true }
]);
ToolAPI.registerBlockMaterial(BlockID.runeSpace, "stone", 2);




// file: game/decoration/rune_water.js

IDRegistry.genBlockID("runeWater");
Block.createBlock("runeWater", [
    { name: "Water Rune", texture: [["runestone_water", 0]], inCreative: true }
]);
ToolAPI.registerBlockMaterial(BlockID.runeWater, "stone", 2);




// file: game/decoration/rune_empty.js

IDRegistry.genBlockID("runeEmpty");
Block.createBlock("runeEmpty", [
    { name: "Runestone", texture: [["runestone_empty", 0]], inCreative: true }
]);
ToolAPI.registerBlockMaterial(BlockID.runeEmpty, "stone", 2);

Callback.addCallback("PostLoaded", function () {
    Recipes.addShaped({ id: BlockID.runeEmpty, count: 4, data: 0 }, [
        "#a#",
        "aba",
        "#a#"
    ], ['a', 331, -1, 'b', 4, 0]);

    Recipe.addRuneEnchanterRecipe({ id: BlockID.runeEmpty, data: 0 }, { id: BlockID.runeAir, data: 0 }, "rune.air");
    Recipe.addRuneEnchanterRecipe({ id: BlockID.runeEmpty, data: 0 }, { id: BlockID.runeBlood, data: 0 }, "rune.blood");
    Recipe.addRuneEnchanterRecipe({ id: BlockID.runeEmpty, data: 0 }, { id: BlockID.runeEarth, data: 0 }, "rune.earth");
    Recipe.addRuneEnchanterRecipe({ id: BlockID.runeEmpty, data: 0 }, { id: BlockID.runeEssence, data: 0 }, "rune.essence");
    Recipe.addRuneEnchanterRecipe({ id: BlockID.runeEmpty, data: 0 }, { id: BlockID.runeFire, data: 0 }, "rune.fire");
    Recipe.addRuneEnchanterRecipe({ id: BlockID.runeEmpty, data: 0 }, { id: BlockID.runeMana, data: 0 }, "rune.mana");
    Recipe.addRuneEnchanterRecipe({ id: BlockID.runeEmpty, data: 0 }, { id: BlockID.runeSpace, data: 0 }, "rune.space");
    Recipe.addRuneEnchanterRecipe({ id: BlockID.runeEmpty, data: 0 }, { id: BlockID.runeWater, data: 0 }, "rune.water");
});




// file: game/entity/summoned_zombie.js

var entitySummonedZombie = new MobHelper.Creature(20, {
    HP: 20,
    IDm: "summonedZombie",
    Renderr: new Render(3),
    Skin: "entity/zombie.png",
    Name: "Summoned Zombie",
    Hitbox: { w: 0.8, h: 1.4 },
    Loot: [{ id: 367, count: 1, data: 0 }],
    SpawnChance: 0.0
});




// file: game/entity/summoned_golems.js

var entitySummonedGolemDiamond = new MobHelper.Creature(20, {
    HP: 200,
    IDm: "summonedGolemDiamond",
    Renderr: new Render(47),
    Skin: "entity/diamond_golem.png",
    Name: "Summoned Diamond Golem",
    Hitbox: { w: 1.4, h: 2 },
    Loot: [{ id: 264, count: 1, data: 0 }],
    SpawnChance: 0.0
});

var entitySummonedGolemGold = new MobHelper.Creature(20, {
    HP: 50,
    IDm: "summonedGolemGold",
    Renderr: new Render(47),
    Skin: "entity/gold_golem.png",
    Name: "Summoned Gold Golem",
    Hitbox: { w: 1.4, h: 2 },
    Loot: [{ id: 266, count: 1, data: 0 }],
    SpawnChance: 0.0
});

var entitySummonedGolemQuartz = new MobHelper.Creature(20, {
    HP: 400,
    IDm: "summonedGolemQuartz",
    Renderr: new Render(47),
    Skin: "entity/quartz_golem.png",
    Name: "Summoned Quartz Golem",
    Hitbox: { w: 1.4, h: 2 },
    Loot: [{ id: 406, count: 1, data: 0 }],
    SpawnChance: 0.0
});

var entitySummonedGolemWooden = new MobHelper.Creature(20, {
    HP: 20,
    IDm: "summonedGolemWooden",
    Renderr: new Render(47),
    Skin: "entity/wooden_golem.png",
    Name: "Summoned Wooden Golem",
    Hitbox: { w: 1.4, h: 2 },
    Loot: [{ id: 280, count: 1, data: 0 }],
    SpawnChance: 0.0
});

var entitySummonedGolemStone = new MobHelper.Creature(20, {
    HP: 40,
    IDm: "summonedGolemStone",
    Renderr: new Render(47),
    Skin: "entity/stone_golem.png",
    Name: "Summoned Stone Golem",
    Hitbox: { w: 1.4, h: 2 },
    Loot: [{ id: 337, count: 1, data: 0 }],
    SpawnChance: 0.0
});




// file: game/item/dust_mana.js

IDRegistry.genItemID("dustMana");
Item.createItem("dustMana", "Mana Dust", { name: "dust_mana" });

Callback.addCallback("PostLoaded", function () {
    Recipe.addAlchemicalCrucibleRecipe({ id: 331, data: 0 }, { id: ItemID.dustMana, count: 2, data: 0 });
    manastorage.registerItem(ItemID.dustMana, 1000);
});




// file: game/item/staff_magic.js

IDRegistry.genItemID("staffMagic");
Item.createItem("staffMagic", "Magic Staff", { name: "staff_magic" });

ChargeItemRegistry.registerItem(ItemID.staffMagic, "Mana", 10000, 1);

Callback.addCallback("PostLoaded", function () {
    Recipes.addShaped({ id: ItemID.staffMagic, count: 1, data: 0 }, [
        "aba",
        "#c#",
        "#c#"
    ], ['a', 331, -1, 'b', 265, 0, 'c', 280, 0]);
});




// file: game/item/wand/wand_empty.js

IDRegistry.genItemID("wandEmpty");
Item.createItem("wandEmpty", "Magic Wand [Empty]", { name: "wand_empty" });

Callback.addCallback("PostLoaded", function () {
    Recipes.addShaped({ id: ItemID.wandEmpty, count: 1, data: 0 }, [
        "#a#",
        "aba",
        "#a#"
    ], ['a', 331, -1, 'b', ItemID.staffMagic, 0]);
});




// file: game/item/wand/wand_fire.js

IDRegistry.genItemID("wandFire");
Item.createItem("wandFire", "Magic Wand [Fire]", { name: "wand_fire" });

ChargeItemRegistry.registerItem(ItemID.wandFire, "Mana", 10000, 1);

Item.registerNoTargetUseFunction("wandFire", function(item){
    if(item.data + 50 <= Item.getMaxDamage(item.id)) {
        Player.setCarriedItem(item.id, item.count, item.data + 50);
        let position = Player.getPosition();
        let spell = MagicSpell.deploy(position.x, position.y, position.z, "fire_bolt");
    }
});
Item.registerUseFunction("wandFire", function(coords, item, block){
    if(item.data + 50 <= Item.getMaxDamage(item.id)) {
        Player.setCarriedItem(item.id, item.count, item.data + 50);
        let position = Player.getPosition();
        let spell = MagicSpell.deploy(position.x, position.y, position.z, "fire_bolt");
    }
});

Callback.addCallback("PostLoaded", function () {
    Recipe.addStaffEnchanterRecipe({ id: ItemID.wandEmpty, data: 0 }, { id: ItemID.wandFire, data: 0 }, "rune.fire");
});

Spell.registerPrototype("fire_bolt", {
    effect: Effect.fire_orb,
    collision: function (position){
        let explode = false;
        let entity = {
            64: true, 65: true,
            66: true, 67: true,
            68: true, 69: true,
            77: true, 80: true,
            81: true, 82: true,
            83: true, 84: true,
            85: true, 86: true,
            90: true, 93: true,
            94: true
        };
        let all = Entity.getAll();
        for (let i in all) {
            if (!Player.isPlayer(all[i]) && !entity[Entity.getType(all[i])]) {
                if (Entity.getDistanceToCoords(all[i], position) < 4) {
                    Entity.damageEntity(all[i], 4);
                    Entity.setFire(all[i], 60);
                    explode=true;
                }
            }
        }
        if(explode){
            Particle.effectExplode(Effect.flame, position.x, position.y, position.z, 0.3, 50);
            return true;
        }
        return false;
    }
});




// file: game/item/wand/wand_lightning.js

IDRegistry.genItemID("wandLightning");
Item.createItem("wandLightning", "Magic Wand [Lightning]", { name: "wand_lightning" });

ChargeItemRegistry.registerItem(ItemID.wandLightning, "Mana", 10000, 1);

Item.registerNoTargetUseFunction("wandLightning", function(item){
    if(item.data + 50 <= Item.getMaxDamage(item.id)) {
        Player.setCarriedItem(item.id, item.count, item.data + 50);
        let position = Player.getPosition();
        let spell = MagicSpell.deploy(position.x, position.y, position.z, "lightning_bolt");
    }
});
Item.registerUseFunction("wandLightning", function(coords, item, block){
    if(item.data + 50 <= Item.getMaxDamage(item.id)) {
        Player.setCarriedItem(item.id, item.count, item.data + 50);
        let position = Player.getPosition();
        let spell = MagicSpell.deploy(position.x, position.y, position.z, "lightning_bolt");
    }
});

Callback.addCallback("PostLoaded", function () {
    Recipe.addStaffEnchanterRecipe({ id: ItemID.wandEmpty, data: 0 }, { id: ItemID.wandLightning, data: 0 }, "rune.mana");
});

Spell.registerPrototype("lightning_bolt", {
    effect: Effect.lightning_orb,
    collision: function (position){
        let explode = false;
        let entity = {
            64: true, 65: true,
            66: true, 67: true,
            68: true, 69: true,
            77: true, 80: true,
            81: true, 82: true,
            83: true, 84: true,
            85: true, 86: true,
            90: true, 93: true,
            94: true
        };
        let all = Entity.getAll();
        for (let i in all) {
            if (!Player.isPlayer(all[i]) && !entity[Entity.getType(all[i])]) {
                if (Entity.getDistanceToCoords(all[i], position) < 4) {
                    Entity.damageEntity(all[i], 5);
                    Entity.spawn(position.x, position.y, position.z, 93);
                    explode=true;
                }
            }
        }
        if(explode){
            Particle.effectExplode(Effect.cloud, position.x, position.y, position.z, 0.3, 50);
            return true;
        }
        return false;
    }
});




// file: game/item/wand/wand_darkness.js

IDRegistry.genItemID("wandDarkness");
Item.createItem("wandDarkness", "Magic Wand [Darkness]", { name: "wand_darkness" });

ChargeItemRegistry.registerItem(ItemID.wandDarkness, "Mana", 10000, 1);

Item.registerNoTargetUseFunction("wandDarkness", function(item){
    if(item.data + 50 <= Item.getMaxDamage(item.id)) {
        Player.setCarriedItem(item.id, item.count, item.data + 50);
        let position = Player.getPosition();
        let spell = MagicSpell.deploy(position.x, position.y, position.z, "darkness_bolt");
    }
});
Item.registerUseFunction("wandDarkness", function(coords, item, block){
    if(item.data + 50 <= Item.getMaxDamage(item.id)) {
        Player.setCarriedItem(item.id, item.count, item.data + 50);
        let position = Player.getPosition();
        let spell = MagicSpell.deploy(position.x, position.y, position.z, "darkness_bolt");
    }
});

Callback.addCallback("PostLoaded", function () {
    Recipe.addStaffEnchanterRecipe({ id: ItemID.wandEmpty, data: 0 }, { id: ItemID.wandDarkness, data: 0 }, "rune.essence");
});

Spell.registerPrototype("darkness_bolt", {
    effect: Effect.darkness_orb,
    collision: function (position){
        let explode = false;
        let entity = {
            64: true, 65: true,
            66: true, 67: true,
            68: true, 69: true,
            77: true, 80: true,
            81: true, 82: true,
            83: true, 84: true,
            85: true, 86: true,
            90: true, 93: true,
            94: true
        };
        let all = Entity.getAll();
        for (let i in all) {
            if (!Player.isPlayer(all[i]) && !entity[Entity.getType(all[i])]) {
                if (Entity.getDistanceToCoords(all[i], position) < 4) {
                    Entity.damageEntity(all[i], 10);
                    explode=true;
                }
            }
        }
        if(explode){
            Particle.effectExplode(Effect.cloud, position.x, position.y, position.z, 0.3, 50);
            return true;
        }
        return false;
    }
});




// file: game/item/wand/wand_earth.js

IDRegistry.genItemID("wandEarth");
Item.createItem("wandEarth", "Magic Wand [Earth]", { name: "wand_earth" });

ChargeItemRegistry.registerItem(ItemID.wandEarth, "Mana", 10000, 1);

Item.registerNoTargetUseFunction("wandEarth", function(item){
    if(item.data + 50 <= Item.getMaxDamage(item.id)) {
        Player.setCarriedItem(item.id, item.count, item.data + 50);
        let position = Player.getPosition();
        let spell = MagicSpell.deploy(position.x, position.y, position.z, "earth_bolt");
    }
});
Item.registerUseFunction("wandEarth", function(coords, item, block){
    if(item.data + 50 <= Item.getMaxDamage(item.id)) {
        Player.setCarriedItem(item.id, item.count, item.data + 50);
        let position = Player.getPosition();
        let spell = MagicSpell.deploy(position.x, position.y, position.z, "earth_bolt");
    }
});

Callback.addCallback("PostLoaded", function () {
    Recipe.addStaffEnchanterRecipe({ id: ItemID.wandEmpty, data: 0 }, { id: ItemID.wandEarth, data: 0 }, "rune.earth");
});

Spell.registerPrototype("earth_bolt", {
    effect: Effect.earth_orb,
    collision: function (position){
        let explode = false;
        let entity = {
            64: true, 65: true,
            66: true, 67: true,
            68: true, 69: true,
            77: true, 80: true,
            81: true, 82: true,
            83: true, 84: true,
            85: true, 86: true,
            90: true, 93: true,
            94: true
        };
        let all = Entity.getAll();
        for (let i in all) {
            if (!Player.isPlayer(all[i]) && !entity[Entity.getType(all[i])]) {
                if (Entity.getDistanceToCoords(all[i], position) < 4) {
                    Entity.damageEntity(all[i], 5);
                    explode=true;
                }
            }
        }
        if(explode){
            Particle.effectExplode(Effect.poisonedFog, position.x, position.y, position.z, 0.3, 50);
            return true;
        }
        return false;
    }
});




// file: game/item/wand/wand_ice.js

IDRegistry.genItemID("wandIce");
Item.createItem("wandIce", "Magic Wand [Ice]", { name: "wand_ice" });

ChargeItemRegistry.registerItem(ItemID.wandIce, "Mana", 10000, 1);

Item.registerNoTargetUseFunction("wandIce", function(item){
    if(item.data + 50 <= Item.getMaxDamage(item.id)) {
        Player.setCarriedItem(item.id, item.count, item.data + 50);
        let position = Player.getPosition();
        let spell = MagicSpell.deploy(position.x, position.y, position.z, "ice_bolt");
    }
});
Item.registerUseFunction("wandIce", function(coords, item, block){
    if(item.data + 50 <= Item.getMaxDamage(item.id)) {
        Player.setCarriedItem(item.id, item.count, item.data + 50);
        let position = Player.getPosition();
        let spell = MagicSpell.deploy(position.x, position.y, position.z, "ice_bolt");
    }
});

Callback.addCallback("PostLoaded", function () {
    Recipe.addStaffEnchanterRecipe({ id: ItemID.wandEmpty, data: 0 }, { id: ItemID.wandIce, data: 0 }, "rune.water");
});

Spell.registerPrototype("ice_bolt", {
    effect: Effect.ice_orb,
    collision: function (position){
        let explode = false;
        let entity = {
            64: true, 65: true,
            66: true, 67: true,
            68: true, 69: true,
            77: true, 80: true,
            81: true, 82: true,
            83: true, 84: true,
            85: true, 86: true,
            90: true, 93: true,
            94: true
        };
        let all = Entity.getAll();
        for (let i in all) {
            if (!Player.isPlayer(all[i]) && !entity[Entity.getType(all[i])]) {
                if (Entity.getDistanceToCoords(all[i], position) < 4) {
                    Entity.damageEntity(all[i], 10);
                    explode=true;
                }
            }
        }
        if(explode){
            Particle.effectExplode(Effect.snow, position.x, position.y, position.z, 0.3, 100);
            return true;
        }
        return false;
    }
});




// file: game/rituals/ritual_aria_of_fire.js

var ritual_aria_of_fire = {
    activate: function (id, count, data, altar) {
        if (id === ItemID.staffMagic && this.check(altar)) {
            Particle.effectHighSpiral(Effect.flame, altar.x, altar.y, altar.z, 1.5, 3, 0, 0.1, 0);
            return true;
        }
        else {
            return false;
        }
    },
    tick: function (tile) {
        let distance = 10;

        if (World.getThreadTime() % 20 === 0) {
            let entity = {
                64: true, 65: true,
                66: true, 67: true,
                68: true, 69: true,
                77: true, 80: true,
                81: true, 82: true,
                83: true, 84: true,
                85: true, 86: true,
                90: true, 93: true,
                94: true
            };
            let value = false;
            let all = Entity.getAll();
            for (let i in all) {
                if (!Player.isPlayer(all[i]) && !entity[Entity.getType(all[i])]) {
                    if (Entity.getDistanceToCoords(all[i], { x: tile.x, y: tile.y, z: tile.z }) < distance) {
                        let coords = Entity.getPosition(all[i]);
                        Entity.damageEntity(all[i], 4);
                        Entity.setFire(all[i], 60);
                        Particle.effectExplode(Effect.flame, coords.x, coords.y, coords.z, 0.3, 100);
                        value = true;
                    }
                }
            }
            if (value) {
                Particle.effectHighSpiral(Effect.flame, tile.x, tile.y, tile.z, 1.5, 3, 0, 0.1, 0);
            }
        }
    },
    check: function (altar) {
        var block1 = World.getBlockID(altar.x + 1, altar.y, altar.z + 1);
        var block2 = World.getBlockID(altar.x - 1, altar.y, altar.z + 1);
        var block3 = World.getBlockID(altar.x - 1, altar.y, altar.z + 1);
        var block4 = World.getBlockID(altar.x - 1, altar.y, altar.z - 1);
        if (block1 === BlockID.runeFire && block2 === BlockID.runeFire && block3 === BlockID.runeFire && block4 === BlockID.runeFire) {
            return true;
        }
        else {
            return false;
        }
    }
};

Ritual.registerPrototype("aria_of_fire", ritual_aria_of_fire);




// file: game/rituals/ritual_aria_of_water.js

var ritual_aria_of_water = {
    activate: function (id, count, data, altar) {
        if (id === ItemID.staffMagic && this.check(altar)) {
            Particle.effectHighSpiral(Effect.cloud, altar.x, altar.y, altar.z, 1.5, 3, 0, 0.1, 0);
            return true;
        }
        else {
            return false;
        }
    },
    tick: function (tile) {
        let xdistance = 4;
        let ydistance = 4;
        let zdistance = 4;

        if (World.getThreadTime() % 20 === 0) {
            let container = World.getTileEntity(tile.x, tile.y + 1, tile.z);
            if (container && container.liquidStorage.getLimit("water") < 99999  && ((container.liquidStorage.getLiquidStored() === "water" && container.liquidStorage.getAmount("water") < container.liquidStorage.getLimit("water")) || container.liquidStorage.getAmount(container.liquidStorage.getLiquidStored()) === 0)) {
                container.liquidStorage.addLiquid("water", 1);
                Particle.effectHighSpiral(Effect.cloud, tile.x, tile.y + 1, tile.z, 1, 2);
            }
            for (var x = -xdistance; x <= xdistance; x++) {
                for (var y = -ydistance; y <= ydistance; y++) {
                    for (var z = -zdistance; z <= zdistance; z++) {
                        let block = World.getBlock(tile.x + x, tile.y + y, tile.z + z);
                        if (block.id === 60 && block.data === 0) {
                            World.setBlock(tile.x + x, tile.y + y, tile.z + z, 60, 7);
                            return;
                        }
                    }
                }
            }
        }
    },
    click: function (id, count, data, tile) {
        if (id === 325 && data === 0) {
            Player.setCarriedItem(id, count - 1, data);
            World.drop(tile.x, tile.y + 0.5, tile.z, 325, 1, 8);
        }
    },
    check: function (altar) {
        let block1 = World.getBlockID(altar.x + 1, altar.y, altar.z + 1);
        let block2 = World.getBlockID(altar.x - 1, altar.y, altar.z + 1);
        let block3 = World.getBlockID(altar.x - 1, altar.y, altar.z + 1);
        let block4 = World.getBlockID(altar.x - 1, altar.y, altar.z - 1);
        if (block1 === BlockID.runeWater && block2 === BlockID.runeWater && block3 === BlockID.runeWater && block4 === BlockID.runeWater) {
            return true;
        }
        else {
            return false;
        }
    }
};

Ritual.registerPrototype("aria_of_water", ritual_aria_of_water);




// file: game/rituals/ritual_of_the_green_grove.js

var ritual_of_the_green_grove = {
    activate: function (id, count, data, altar) {
        if (id === ItemID.staffMagic && this.check(altar)) {
            Particle.effectHighSpiral(Native.ParticleType.cloud, altar.x, altar.y, altar.z, 1.5, 3, 0, 0.1, 0);
            return true;
        }
        else {
            return false;
        }
    },
    check: function (altar) {
        let block1 = World.getBlockID(altar.x + 1, altar.y, altar.z + 1);
        let block2 = World.getBlockID(altar.x - 1, altar.y, altar.z + 1);
        let block3 = World.getBlockID(altar.x - 1, altar.y, altar.z + 1);
        let block4 = World.getBlockID(altar.x - 1, altar.y, altar.z - 1);

        let block11 = World.getBlockID(altar.x + 2, altar.y, altar.z);
        let block22 = World.getBlockID(altar.x - 2, altar.y, altar.z);
        let block33 = World.getBlockID(altar.x, altar.y, altar.z + 2);
        let block44 = World.getBlockID(altar.x, altar.y, altar.z - 2);
        if (block1 === BlockID.runeEarth && block2 === BlockID.runeEarth && block3 === BlockID.runeEarth && block4 === BlockID.runeEarth && block11 === BlockID.runeWater && block22 === BlockID.runeWater && block33 === BlockID.runeWater && block44 === BlockID.runeWater) {
            return true;
        }
        else {
            return false;
        }
    },
    tick: function (tile) {
        tile.data.index ? null : tile.data.index = 0;
        let radius = 9;
        
        if (World.getThreadTime() % 20 === 0) {
            ritual_of_the_green_grove.waterFarmlands(tile, radius);
            ritual_of_the_green_grove.growFarmlands(tile, radius);
        }
    },
    waterFarmlands: function (tile, radius) {
        for (var x = 0; x < radius; x++) {
            for (var z = 0; z < radius; z++) {
                for (var y = radius; y > 0; y--) {
                    var block = World.getBlock(tile.x - parseInt(radius / 2) + x, tile.y - parseInt(radius / 2) + y, tile.z - parseInt(radius / 2) + z);
                    if (block.id === 60 && block.data === 0) {
                        World.setBlock(tile.x - parseInt(radius / 2) + x, tile.y - parseInt(radius / 2) + y, tile.z - parseInt(radius / 2) + z, 60, 7);
                        return;
                    }
                }
            }
        }
    },
    growFarmlands: function (tile, radius) {
        for (var x = 0; x < radius; x++) {
            for (var z = 0; z < radius; z++) {
                for (var y = radius; y > 0; y--) {
                    var block = World.getBlock(tile.x - parseInt(radius / 2) + x, tile.y - parseInt(radius / 2) + y + 1, tile.z - parseInt(radius / 2) + z);
                    if (block.id === 59 || block.id === 141 || block.id === 142 || block.id === 244) {
                        if (block.data < 7) {
                            World.setBlock(tile.x - parseInt(radius / 2) + x, tile.y - parseInt(radius / 2) + y + 1, tile.z - parseInt(radius / 2) + z, block.id, block.data + 1);
                            Particle.effectExplode(Effect.splash, tile.x - parseInt(radius / 2) + x, tile.y - parseInt(radius / 2) + y + 1, tile.z - parseInt(radius / 2) + z, 0.3, 100);
                            return;
                        }
                    }
                }
            }
        }
    }
};

Ritual.registerPrototype("ritual_of_the_green_grove", ritual_of_the_green_grove);




// file: game/rituals/ritual_serenade_of_perun.js

var ritual_serenade_of_perun = {
    activate: function (id, count, data, altar) {
        if (id === ItemID.staffMagic && this.check(altar)) {
            Particle.effectHighSpiral(Effect.cloud, altar.x, altar.y, altar.z, 1.5, 3, 0, 0.1, 0);
            return true;
        }
        else {
            return false;
        }
    },
    tick: function (tile) {
        let radius = 10;

        if (World.getThreadTime() % 20 === 0) {
            let entity = {
                64: true, 65: true,
                66: true, 67: true,
                68: true, 69: true,
                77: true, 80: true,
                81: true, 82: true,
                83: true, 84: true,
                85: true, 86: true,
                90: true, 93: true,
                94: true
            };
            let all = Entity.getAll();
            for (var i in all) {
                if (!Player.isPlayer(all[i]) && !entity[Entity.getType(all[i])]) {
                    if (Entity.getDistanceToCoords(all[i], { x: tile.x, y: tile.y, z: tile.z }) < radius) {
                        let coords = Entity.getPosition(all[i]);
                        Entity.damageEntity(all[i], 8);
                        Entity.spawn(coords.x, coords.y, coords.z, 93);
                    }
                }
            }
        }
    },
    check: function (altar) {
        let block1 = World.getBlockID(altar.x + 1, altar.y, altar.z + 1);
        let block2 = World.getBlockID(altar.x - 1, altar.y, altar.z + 1);
        let block3 = World.getBlockID(altar.x - 1, altar.y, altar.z + 1);
        let block4 = World.getBlockID(altar.x - 1, altar.y, altar.z - 1);

        let block11 = World.getBlockID(altar.x + 2, altar.y, altar.z);
        let block22 = World.getBlockID(altar.x - 2, altar.y, altar.z);
        let block33 = World.getBlockID(altar.x, altar.y, altar.z + 2);
        let block44 = World.getBlockID(altar.x, altar.y, altar.z - 2);
        if (block1 === BlockID.runeAir && block2 === BlockID.runeAir && block3 === BlockID.runeAir && block4 === BlockID.runeAir && block11 === BlockID.runeWater && block22 === BlockID.runeWater && block33 === BlockID.runeWater && block44 === BlockID.runeWater) {
            return true;
        }
        else {
            return false;
        }
    }
};

Ritual.registerPrototype("serenade_of_perun", ritual_serenade_of_perun);




// file: game/rituals/ritual_serenade_of_the_nether.js

var ritual_serenade_of_the_nether = {
    activate: function (id, count, data, altar) {
        if (id === ItemID.staffMagic && this.check(altar)) {
            Particle.effectHighSpiral(Effect.flame, altar.x, altar.y, altar.z, 1.5, 3, 0, 0.1, 0);
            return true;
        }
        else {
            return false;
        }
    },
    tick: function (tile) {
        if (World.getThreadTime() % 20 === 0) {
            if (World.getBlockID(tile.x, tile.y + 1, tile.z) === 0) {
                World.setBlock(tile.x, tile.y + 1, tile.z, 10, 0);
            }
            else {
                let container = World.getTileEntity(tile.x, tile.y + 1, tile.z);
                if (container && container.liquidStorage.getLimit("lava") < 99999 && ((container.liquidStorage.getLiquidStored() === "lava" && container.liquidStorage.getAmount("lava") < container.liquidStorage.getLimit("lava")) || container.liquidStorage.getAmount(container.liquidStorage.getLiquidStored()) === 0)) {
                    container.liquidStorage.addLiquid("lava", 1);
                    Particle.effectHighSpiral(Effect.cloud, tile.x, tile.y + 1, tile.z, 1, 2);
                }
            }
        }
    },
    click: function (id, count, data, tile) {
        if (id === 325 && data === 0) {
            Player.setCarriedItem(id, count - 1, data);
            World.drop(tile.x, tile.y + 0.5, tile.z, 325, 1, 10);
        }
    },
    check: function (altar) {
        let block1 = World.getBlockID(altar.x + 1, altar.y, altar.z);
        let block2 = World.getBlockID(altar.x - 1, altar.y, altar.z);
        let block3 = World.getBlockID(altar.x, altar.y, altar.z + 1);
        let block4 = World.getBlockID(altar.x, altar.y, altar.z - 1);
        if (block1 === BlockID.runeFire && block2 === BlockID.runeFire && block3 === BlockID.runeFire && block4 === BlockID.runeFire) {
            return true;
        }
        else {
            return false;
        }
    }
};

Ritual.registerPrototype("serenade_of_the_nether", ritual_serenade_of_the_nether);




// file: game/rituals/ritual_of_the_crusher.js

var ritual_of_the_crusher = {
    activate: function (id, count, data, tile) {
        if (id === ItemID.staffMagic && this.check(tile)) {
            Particle.effectHighSpiral(Effect.cloud, tile.x, tile.y, tile.z, 1.5, 3, 0, 0.1, 0);
            return true;
        }
        else {
            return false;
        }
    },
    check: function (tile) {
        let earthRune1 = World.getBlock(tile.x + 1, tile.y, tile.z + 1).id === BlockID.runeEarth;
        let earthRune2 = World.getBlock(tile.x + 1, tile.y, tile.z - 1).id === BlockID.runeEarth;
        let earthRune3 = World.getBlock(tile.x - 1, tile.y, tile.z + 1).id === BlockID.runeEarth;
        let earthRune4 = World.getBlock(tile.x - 1, tile.y, tile.z - 1).id === BlockID.runeEarth;
        if (!(earthRune1 && earthRune2 && earthRune3 && earthRune4)) {
            return false;
        }

        let manaRune1 = World.getBlock(tile.x + 2, tile.y, tile.z).id === BlockID.runeMana;
        let manaRune2 = World.getBlock(tile.x - 2, tile.y, tile.z).id === BlockID.runeMana;
        let manaRune3 = World.getBlock(tile.x, tile.y, tile.z + 2).id === BlockID.runeMana;
        let manaRune4 = World.getBlock(tile.x, tile.y, tile.z - 2).id === BlockID.runeMana;
        if (!(manaRune1 && manaRune2 && manaRune3 && manaRune4)) {
            return false;
        }

        let emptyRune1 = World.getBlock(tile.x + 2, tile.y, tile.z + 2).id === BlockID.runeEmpty;
        let emptyRune2 = World.getBlock(tile.x + 2, tile.y, tile.z - 2).id === BlockID.runeEmpty;
        let emptyRune3 = World.getBlock(tile.x - 2, tile.y, tile.z + 2).id === BlockID.runeEmpty;
        let emptyRune4 = World.getBlock(tile.x - 2, tile.y, tile.z - 2).id === BlockID.runeEmpty;
        if (!(emptyRune1 && emptyRune2 && emptyRune3 && emptyRune4)) {
            return false;
        }

        let spaceRune1 = World.getBlock(tile.x + 2, tile.y + 1, tile.z + 2).id === BlockID.runeSpace;
        let spaceRune2 = World.getBlock(tile.x + 2, tile.y + 1, tile.z - 2).id === BlockID.runeSpace;
        let spaceRune3 = World.getBlock(tile.x - 2, tile.y + 1, tile.z + 2).id === BlockID.runeSpace;
        let spaceRune4 = World.getBlock(tile.x - 2, tile.y + 1, tile.z - 2).id === BlockID.runeSpace;
        if (!(spaceRune1 && spaceRune2 && spaceRune3 && spaceRune4)) {
            return false;
        }
        return true;
    },
    tick: function (tile) {
        if (!tile.data.digX) {
            tile.data.digY = tile.y - 2;
            tile.data.digX = tile.x - 5;
            tile.data.digZ = tile.z - 4;
        }

        if (!tile.data.complete && World.getThreadTime() % 10 === 0) {
            var range = 4;
            if (tile.data.digX++ > tile.x + range - 1) {
                tile.data.digX = tile.x - range;
                if (tile.data.digZ++ > tile.z + range - 1) {
                    tile.data.digZ = tile.z - range;
                    tile.data.digX = tile.x - range;
                    if (tile.data.digY-- < tile.y - 31) {
                        tile.data.complete = true;
                    }
                }
            }
            var block = World.getBlock(tile.data.digX, tile.data.digY, tile.data.digZ);
            if (block.id === 7 || block.id === 8 || block.id === 9 || block.id === 10 || block.id === 11) {
                return null;
            }
            ritual_of_the_crusher.mineBlock(tile, tile.data.digX, tile.data.digY, tile.data.digZ, block, 278);
        }
        return null;
    },

    mineBlock: function (tile, x, y, z, block, level) {
        var drop = Block.getBlockDrop({ x: x, y: y, z: z }, block.id, block.data, level);
        var items = [];
        for (let i in drop) {
            items.push({ id: drop[i][0], count: drop[i][1], data: drop[i][2] });
        }
        var container = World.getContainer(x, y, z);
        if (container) {
            slots = StorageInterface.getContainerSlots(container);
            for (let i in slots) {
                var slot = container.getSlot(slots[i]);
                if (slot.id > 0) {
                    items.push({ id: slot.id, count: slot.count, data: slot.data, extra: slot.extra });
                    if (container.slots) {
                        slot.id = slot.count = slot.data = 0;
                    } else {
                        container.setSlot(i, 0, 0, 0);
                    }
                }
            }
        }
        World.setBlock(x, y, z, 0);
        ritual_of_the_crusher.drop(tile, items);
    },

    drop: function (tile, items) {
        var containers = StorageInterface.getNearestContainers(tile, 1, false);
        if (containers) {
            StorageInterface.putItems(items, containers);
        }
        for (var i in items) {
            var item = items[i];
            if (item.count > 0) {
                Level.dropItem(tile.x + 0.5, tile.y + 1, tile.z + 0.5, 2, item.id, item.count, item.data, item.extra);
            }
        }
    }
};

Ritual.registerPrototype("ritual_of_the_crusher", ritual_of_the_crusher);




// file: game/rituals/ritual_awakening_from_hell.js

var ritual_awakening_from_hell = {
    activate: function (id, count, data, altar) {
        if (id === ItemID.staffMagic && this.check(altar)) {
            Particle.effectHighSpiral(Effect.flame, altar.x, altar.y, altar.z, 1.5, 3, 0, 0.1, 0);
            return true;
        }
        else {
            return false;
        }
    },
    check: function (tile) {
        let bloodRune1 = World.getBlock(tile.x + 1, tile.y, tile.z + 1).id === BlockID.runeBlood;
        let bloodRune2 = World.getBlock(tile.x - 1, tile.y, tile.z + 1).id === BlockID.runeBlood;
        let bloodRune3 = World.getBlock(tile.x - 1, tile.y, tile.z - 1).id === BlockID.runeBlood;
        let bloodRune4 = World.getBlock(tile.x - 1, tile.y, tile.z - 1).id === BlockID.runeBlood;
        if (!(bloodRune1 && bloodRune2 && bloodRune3 && bloodRune4)) {
            return false;
        }

        let manaRune1 = World.getBlock(tile.x + 2, tile.y, tile.z).id === BlockID.runeMana;
        let manaRune2 = World.getBlock(tile.x - 2, tile.y, tile.z).id === BlockID.runeMana;
        let manaRune3 = World.getBlock(tile.x, tile.y, tile.z + 2).id === BlockID.runeMana;
        let manaRune4 = World.getBlock(tile.x, tile.y, tile.z - 2).id === BlockID.runeMana;
        if (!(manaRune1 && manaRune2 && manaRune3 && manaRune4)) {
            return false;
        }

        let emptyRune1 = World.getBlock(tile.x + 2, tile.y, tile.z + 2).id === BlockID.runeEmpty;
        let emptyRune2 = World.getBlock(tile.x + 2, tile.y, tile.z - 2).id === BlockID.runeEmpty;
        let emptyRune3 = World.getBlock(tile.x - 2, tile.y, tile.z + 2).id === BlockID.runeEmpty;
        let emptyRune4 = World.getBlock(tile.x - 2, tile.y, tile.z - 2).id === BlockID.runeEmpty;
        if (!(emptyRune1 && emptyRune2 && emptyRune3 && emptyRune4)) {
            return false;
        }

        let spaceRune1 = World.getBlock(tile.x + 2, tile.y + 1, tile.z + 2).id === BlockID.runeSpace;
        let spaceRune2 = World.getBlock(tile.x + 2, tile.y + 1, tile.z - 2).id === BlockID.runeSpace;
        let spaceRune3 = World.getBlock(tile.x - 2, tile.y + 1, tile.z + 2).id === BlockID.runeSpace;
        let spaceRune4 = World.getBlock(tile.x - 2, tile.y + 1, tile.z - 2).id === BlockID.runeSpace;
        if (!(spaceRune1 && spaceRune2 && spaceRune3 && spaceRune4)) {
            return false;
        }
        return true;
    },
    click: function (id, count, data, tile) {
        if (id === 319) {
            Player.setCarriedItem(id, count - 1, data);
            Entity.spawn(tile.x + 0.5, tile.y + 1, tile.z + 0.5, 12);
            Particle.effectExplode(Effect.flame, tile.x , tile.y + 1, tile.z, 0.3, 100);
             Particle.effectRound(Effect.flame, tile.x, tile.y + 1.5, tile.z, 4);
        }
        else if (id === 363) {
            Player.setCarriedItem(id, count - 1, data);
            Entity.spawn(tile.x + 0.5, tile.y + 1, tile.z + 0.5, 11);
            Particle.effectExplode(Effect.flame, tile.x , tile.y + 1, tile.z, 0.3, 100);
             Particle.effectRound(Effect.flame, tile.x, tile.y + 1.5, tile.z, 4);
        }
        else if (id === 365) {
            Player.setCarriedItem(id, count - 1, data);
            Entity.spawn(tile.x + 0.5, tile.y + 1, tile.z + 0.5, 10);
            Particle.effectExplode(Effect.flame, tile.x , tile.y + 1, tile.z, 0.3, 100);
             Particle.effectRound(Effect.flame, tile.x, tile.y + 1.5, tile.z, 4);
        }
        else if (id === 423) {
            Player.setCarriedItem(id, count - 1, data);
            Entity.spawn(tile.x + 0.5, tile.y + 1, tile.z + 0.5, 13);
            Particle.effectExplode(Effect.flame, tile.x , tile.y + 1, tile.z, 0.3, 100);
             Particle.effectRound(Effect.flame, tile.x, tile.y + 1.5, tile.z, 4);
        }
        else if (id === 367) {
            Player.setCarriedItem(id, count - 1, data);
            Entity.spawnCustom("summonedZombie", tile.x + 0.5, tile.y + 1, tile.z + 0.5);
            Particle.effectExplode(Effect.flame, tile.x , tile.y + 1, tile.z, 0.3, 100);
             Particle.effectRound(Effect.flame, tile.x, tile.y + 1.5, tile.z, 4);
        }
    }
};

Ritual.registerPrototype("ritual_awakening_from_hell", ritual_awakening_from_hell);




// file: game/rituals/ritual_essence_of_the_magical_call.js

var ritual_essence_of_the_magical_call = {
    activate: function (id, count, data, altar) {
        if (id === ItemID.staffMagic && this.check(altar)) {
            Particle.effectHighSpiral(Effect.flame, altar.x, altar.y, altar.z, 1.5, 3, 0, 0.1, 0);
            return true;
        }
        else {
            return false;
        }
    },
    check: function (tile) {
        let bloodRune1 = World.getBlock(tile.x + 1, tile.y, tile.z + 1).id === BlockID.runeBlood;
        let bloodRune2 = World.getBlock(tile.x - 1, tile.y, tile.z + 1).id === BlockID.runeBlood;
        let bloodRune3 = World.getBlock(tile.x + 1, tile.y, tile.z - 1).id === BlockID.runeBlood;
        let bloodRune4 = World.getBlock(tile.x - 1, tile.y, tile.z - 1).id === BlockID.runeBlood;
        if (!(bloodRune1 && bloodRune2 && bloodRune3 && bloodRune4)) {
            return false;
        }

        let manaRune1 = World.getBlock(tile.x + 2, tile.y, tile.z).id === BlockID.runeMana;
        let manaRune2 = World.getBlock(tile.x - 2, tile.y, tile.z).id === BlockID.runeMana;
        let manaRune3 = World.getBlock(tile.x, tile.y, tile.z + 2).id === BlockID.runeMana;
        let manaRune4 = World.getBlock(tile.x, tile.y, tile.z - 2).id === BlockID.runeMana;
        if (!(manaRune1 && manaRune2 && manaRune3 && manaRune4)) {
            return false;
        }

        let emptyRune1 = World.getBlock(tile.x + 2, tile.y, tile.z + 2).id === BlockID.runeEmpty;
        let emptyRune2 = World.getBlock(tile.x + 2, tile.y, tile.z - 2).id === BlockID.runeEmpty;
        let emptyRune3 = World.getBlock(tile.x - 2, tile.y, tile.z + 2).id === BlockID.runeEmpty;
        let emptyRune4 = World.getBlock(tile.x - 2, tile.y, tile.z - 2).id === BlockID.runeEmpty;
        if (!(emptyRune1 && emptyRune2 && emptyRune3 && emptyRune4)) {
            return false;
        }

        let essenceRune1 = World.getBlock(tile.x + 2, tile.y + 1, tile.z + 2).id === BlockID.runeEssence;
        let essenceRune2 = World.getBlock(tile.x + 2, tile.y + 1, tile.z - 2).id === BlockID.runeEssence;
        let essenceRune3 = World.getBlock(tile.x - 2, tile.y + 1, tile.z + 2).id === BlockID.runeEssence;
        let essenceRune4 = World.getBlock(tile.x - 2, tile.y + 1, tile.z - 2).id === BlockID.runeEssence;
        if (!(essenceRune1 && essenceRune2 && essenceRune3 && essenceRune4)) {
            return false;
        }
        return true;
    },
    click: function (id, count, data, tile) {
        if (id === 264) {
            Player.setCarriedItem(id, count - 1, data);
            Entity.spawnCustom("summonedGolemDiamond", tile.x + 0.5, tile.y + 1, tile.z + 0.5);
            Particle.effectExplode(Effect.portal, tile.x + 0.5, tile.y + 1, tile.z + 0.5, 0.3, 100);
            Particle.effectRound(Effect.portal, tile.x, tile.y + 1.5, tile.z, 4);
        }
        else if (id === 265) {
            Player.setCarriedItem(id, count - 1, data);
            Entity.spawn(tile.x + 0.5, tile.y + 1, tile.z + 0.5, 20);
            Particle.effectExplode(Effect.portal, tile.x + 0.5, tile.y + 1, tile.z + 0.5, 0.3, 100);
            Particle.effectRound(Effect.portal, tile.x, tile.y + 1.5, tile.z, 4);
        }
        else if (id === 266) {
            Player.setCarriedItem(id, count - 1, data);
            Entity.spawnCustom("summonedGolemGold", tile.x + 0.5, tile.y + 1, tile.z + 0.5);
            Particle.effectExplode(Effect.portal, tile.x + 0.5, tile.y + 1, tile.z + 0.5, 0.3, 100);
            Particle.effectRound(Effect.portal, tile.x, tile.y + 1.5, tile.z, 4);
        }
        else if (id === 406) {
            Player.setCarriedItem(id, count - 1, data);
            Entity.spawnCustom("summonedGolemQuartz", tile.x + 0.5, tile.y + 1, tile.z + 0.5);
            Particle.effectExplode(Effect.portal, tile.x + 0.5, tile.y + 1, tile.z + 0.5, 0.3, 100);
            Particle.effectRound(Effect.portal, tile.x, tile.y + 1.5, tile.z, 4);
        }
        else if (id === 280) {
            Player.setCarriedItem(id, count - 1, data);
            Entity.spawnCustom("summonedGolemWooden", tile.x + 0.5, tile.y + 1, tile.z + 0.5);
            Particle.effectExplode(Effect.portal, tile.x + 0.5, tile.y + 1, tile.z + 0.5, 0.3, 100);
            Particle.effectRound(Effect.portal, tile.x, tile.y + 1.5, tile.z, 4);
        }
        else if (id === 337) {
            Player.setCarriedItem(id, count - 1, data);
            Entity.spawnCustom("summonedGolemStone", tile.x + 0.5, tile.y + 1, tile.z + 0.5);
            Particle.effectExplode(Effect.portal, tile.x + 0.5, tile.y + 1, tile.z + 0.5, 0.3, 100);
            Particle.effectRound(Effect.portal, tile.x, tile.y + 1.5, tile.z, 4);
        }
    }
};

Ritual.registerPrototype("ritual_essence_of_the_magical_call", ritual_essence_of_the_magical_call);




// file: game/rituals/ritual_gifts_of_neptune.js

var ritual_gifts_of_neptune = {
    activate: function (id, count, data, tile) {
        if (id === ItemID.staffMagic && this.check(tile)) {
            Particle.effectHighSpiral(Effect.cloud, tile.x, tile.y, tile.z, 1.5, 3, 0, 0.1, 0);
            return true;
        }
        else {
            return false;
        }
    },
    click: function (id, count, data, tile) {
        if (Math.random() < 0.5) {
            World.drop(tile.x, tile.y + 0.5, tile.z, 349, 1, 0);
            Particle.effectExplode(Effect.splash, tile.x + 0.5, tile.y + 1, tile.z + 0.5, 0.3, 100);
        }
    },
    check: function (altar) {
        let block1 = World.getBlock(altar.x + 1, altar.y, altar.z + 1).id === BlockID.runeWater;
        let block2 = World.getBlock(altar.x + 1, altar.y, altar.z - 1).id === BlockID.runeWater;
        let block3 = World.getBlock(altar.x - 1, altar.y, altar.z + 1).id === BlockID.runeWater;
        let block4 = World.getBlock(altar.x - 1, altar.y, altar.z - 1).id === BlockID.runeWater;

        if (!(block1 && block2 && block3 && block4)) {
            return false;
        }

        let spaceRune1 = World.getBlock(altar.x + 2, altar.y, altar.z).id === BlockID.runeSpace;
        let spaceRune2 = World.getBlock(altar.x - 2, altar.y, altar.z).id === BlockID.runeSpace;
        let spaceRune3 = World.getBlock(altar.x, altar.y, altar.z + 2).id === BlockID.runeSpace;
        let spaceRune4 = World.getBlock(altar.x, altar.y, altar.z - 2).id === BlockID.runeSpace;

        if (!(spaceRune1 && spaceRune2 && spaceRune3 && spaceRune4)) {
            return false;
        }

        return true;
    }
};

Ritual.registerPrototype("ritual_gifts_of_neptune", ritual_gifts_of_neptune);




// file: game/rituals/ritual_death_rage.js

var ritual_death_rage = {
    activate: function (id, count, data, tile) {
        if (id === ItemID.staffMagic && this.check(tile)) {
            Particle.effectHighSpiral(Effect.poisonedFog, tile.x, tile.y, tile.z, 1.5, 3, 0, 0.1, 0);
            return true;
        }
        else {
            return false;
        }
    },
    check: function (tile) {
        let block1 = World.getBlock(tile.x + 1, tile.y, tile.z + 1).id === BlockID.runeAir;
        let block2 = World.getBlock(tile.x + 1, tile.y, tile.z - 1).id === BlockID.runeAir;
        let block3 = World.getBlock(tile.x - 1, tile.y, tile.z + 1).id === BlockID.runeAir;
        let block4 = World.getBlock(tile.x - 1, tile.y, tile.z - 1).id === BlockID.runeAir;

        if (!(block1 && block2 && block3 && block4)) {
            return false;
        }

        let spaceRune1 = World.getBlock(tile.x + 2, tile.y, tile.z).id === BlockID.runeBlood;
        let spaceRune2 = World.getBlock(tile.x - 2, tile.y, tile.z).id === BlockID.runeBlood;
        let spaceRune3 = World.getBlock(tile.x, tile.y, tile.z + 2).id === BlockID.runeBlood;
        let spaceRune4 = World.getBlock(tile.x, tile.y, tile.z - 2).id === BlockID.runeBlood;

        if (!(spaceRune1 && spaceRune2 && spaceRune3 && spaceRune4)) {
            return false;
        }
    },
    tick: function (tile) {
        let distance = 10;

        if (World.getThreadTime() % 20 === 0) {
            let entity = {
                64: true, 65: true,
                66: true, 67: true,
                68: true, 69: true,
                77: true, 80: true,
                81: true, 82: true,
                83: true, 84: true,
                85: true, 86: true,
                90: true, 93: true,
                94: true
            };
            let value = false;
            let all = Entity.getAll();
            for (let i in all) {
                if (!Player.isPlayer(all[i]) && !entity[Entity.getType(all[i])]) {
                    if (Entity.getDistanceToCoords(all[i], { x: tile.x, y: tile.y, z: tile.z }) < distance) {
                        let coords = Entity.getPosition(all[i]);
                        Entity.damageEntity(all[i], 5);
                        Particle.effectExplode(Effect.poisonedFog, coords.x, coords.y, coords.z, 0.3, 100);
                        value = true;
                    }
                }
            }
            if (value) {
                Particle.effectHighSpiral(Effect.poisonedFog, tile.x, tile.y, tile.z, 1.5, 3, 0, 0.1, 0);
            }
        }
    }
};

Ritual.registerPrototype("ritual_death_rage", ritual_death_rage);




// file: game/rituals/ritual_transition_gate.js

var portalX = null;
var portalY = null;
var portalZ = null;

var ritual_transition_gate = {
    activate: function (id, count, data, tile) {
        if (id === ItemID.staffMagic && this.check(tile)) {
            if (portalX || portalY || portalZ) {
                var tile2 = World.getTileEntity(portalX, portalY, portalZ);
                if (tile2) {
                    tile.data.portalX = portalX;
                    tile.data.portalY = portalY;
                    tile.data.portalZ = portalZ;

                    tile2.data.portalX = tile.x;
                    tile2.data.portalY = tile.y;
                    tile2.data.portalZ = tile.z;

                    Particle.effectHighSpiral(Effect.portal, tile.x, tile.y, tile.z, 1.5, 3, 0, 0.1, 0);
                    Particle.effectHighSpiral(Effect.portal, tile2.x, tile2.y, tile2.z, 1.5, 3, 0, 0.1, 0);
                }
            }
            else {
                portalX = tile.x;
                portalY = tile.y;
                portalZ = tile.z;
                Particle.effectHighSpiral(Effect.portal, tile.x, tile.y, tile.z, 1.5, 3, 0, 0.1, 0);
            }
            return true;
        }
        else {
            return false;
        }
    },
    check: function (tile) {
        let block1 = World.getBlock(tile.x + 1, tile.y, tile.z + 1).id === BlockID.runeSpace;
        let block2 = World.getBlock(tile.x + 1, tile.y, tile.z - 1).id === BlockID.runeSpace;
        let block3 = World.getBlock(tile.x - 1, tile.y, tile.z + 1).id === BlockID.runeSpace;
        let block4 = World.getBlock(tile.x - 1, tile.y, tile.z - 1).id === BlockID.runeSpace;

        if (!(block1 && block2 && block3 && block4)) {
            return false;
        }

        let spaceRune1 = World.getBlock(tile.x + 2, tile.y, tile.z).id === BlockID.runeMana;
        let spaceRune2 = World.getBlock(tile.x - 2, tile.y, tile.z).id === BlockID.runeMana;
        let spaceRune3 = World.getBlock(tile.x, tile.y, tile.z + 2).id === BlockID.runeMana;
        let spaceRune4 = World.getBlock(tile.x, tile.y, tile.z - 2).id === BlockID.runeMana;

        if (!(spaceRune1 && spaceRune2 && spaceRune3 && spaceRune4)) {
            return false;
        }

        return true;
    },
    click: function (id, count, data, tile) {
        if (tile.data.portalX && manastorage.getItem(id)) {
            Player.setCarriedItem(id, count - 1, data);
            Player.setPosition(tile.data.portalX + 0.5, tile.data.portalY + 1, tile.data.portalZ + 0.5);
            Particle.effectHighSpiral(Effect.portal, tile.x, tile.y, tile.z, 1.5, 3, 0, 0.1, 0);
            Particle.effectHighSpiral(Effect.portal, tile.data.portalX, tile.data.portalY, tile.data.portalZ, 1.5, 3, 0, 0.1, 0);
        }
    }
};

Ritual.registerPrototype("ritual_transition_gate", ritual_transition_gate);




// file: game/item/grenade/grenade_blood.js

IDRegistry.genItemID("grenadeBlood");
Item.createThrowableItem("grenadeBlood", "Blood Orb", { name: "grenade_blood" });

Callback.addCallback("PostLoaded", function () {
    Recipes.addShaped({ id: ItemID.grenadeBlood, count: 1, data: 0 }, [
        "cbc",
        "bab",
        "cbc"
    ], ['a', 265, 0, 'b', 352, 0, 'c', ItemID.dustMana, 0]);
});

Callback.addCallback("ProjectileHit", function (projectile, item, target) {
    if (item.id === ItemID.grenadeBlood) {
        let entity = {
            64: true, 65: true,
            66: true, 67: true,
            68: true, 69: true,
            77: true, 80: true,
            81: true, 82: true,
            83: true, 84: true,
            85: true, 86: true,
            90: true, 93: true,
            94: true
        };
        Particle.effectExplode(Native.ParticleType.cloud, target.x, target.y, target.z, 0.3, 100);
        let all = Entity.getAll();
        for (let i in all) {
            if (!Player.isPlayer(all[i]) && !entity[Entity.getType(all[i])]) {
                if (Entity.getDistanceToCoords(all[i], { x: target.x, y: target.y, z: target.z }) < 10) {
                    let coords = Entity.getPosition(all[i]);
                    let health = Entity.getHealth(all[i]);

                    if (health >= 5) {
                        health -= 5;
                        Entity.setHealth(all[i], health);
                        Entity.setHealth(player, Entity.getHealth(player) + 20);
                    }
                    else {
                        Entity.setHealth(all[i], 0);
                        Entity.setHealth(all[i], health);
                        Entity.setHealth(player, Entity.getHealth(player) + 20);
                    }
                    Particle.effectExplode(Native.ParticleType.redstone, coords.x, coords.y, coords.z, 0.3, 100);
                }
            }
        }
    }
});




// file: game/item/grenade/grenade_explosive.js

IDRegistry.genItemID("grenadeExplosive");
Item.createThrowableItem("grenadeExplosive", "Explosive Orb", { name: "grenade_explosive" });

Callback.addCallback("PostLoaded", function () {
    Recipes.addShaped({ id: ItemID.grenadeExplosive, count: 1, data: 0 }, [
        "cbc",
        "bab",
        "cbc"
    ], ['a', 265, 0, 'b', 289, 0, 'c', ItemID.dustMana, 0]);
});

Callback.addCallback("ProjectileHit", function (projectile, item, target) {
    if (item.id === ItemID.grenadeExplosive) {
        let entity = {
            64: true, 65: true,
            66: true, 67: true,
            68: true, 69: true,
            77: true, 80: true,
            81: true, 82: true,
            83: true, 84: true,
            85: true, 86: true,
            90: true, 93: true,
            94: true
        };
        Particle.effectExplode(Native.ParticleType.cloud, target.x, target.y, target.z, 0.3, 100);
        let all = Entity.getAll();
        for (let i in all) {
            if (!Player.isPlayer(all[i]) && !entity[Entity.getType(all[i])]) {
                if (Entity.getDistanceToCoords(all[i], { x: target.x, y: target.y, z: target.z }) < 10) {
                    let coords = Entity.getPosition(all[i]);
                    Level.explode(coords.x, coords.y, coords.z, 1, true);
                }
            }
        }
    }
});




// file: game/item/grenade/grenade_flame.js

IDRegistry.genItemID("grenadeFlame");
Item.createThrowableItem("grenadeFlame", "Flame Orb", { name: "grenade_flame" });

Callback.addCallback("PostLoaded", function () {
    Recipes.addShaped({ id: ItemID.grenadeFlame, count: 1, data: 0 }, [
        "cbc",
        "bab",
        "cbc"
    ], ['a', 265, 0, 'b', 378, 0, 'c', ItemID.dustMana, 0]);
});

Callback.addCallback("ProjectileHit", function (projectile, item, target) {
    if (item.id === ItemID.grenadeFlame) {
        let entity = {
            64: true, 65: true,
            66: true, 67: true,
            68: true, 69: true,
            77: true, 80: true,
            81: true, 82: true,
            83: true, 84: true,
            85: true, 86: true,
            90: true, 93: true,
            94: true
        };
        Particle.effectExplode(Effect.cloud, target.x, target.y, target.z, 0.3, 50);
        let all = Entity.getAll();
        for (let i in all) {
            if (!Player.isPlayer(all[i]) && !entity[Entity.getType(all[i])]) {
                if (Entity.getDistanceToCoords(all[i], { x: target.x, y: target.y, z: target.z }) < 10) {
                    let coords = Entity.getPosition(all[i]);
                    Entity.damageEntity(all[i], 4);
                    Entity.setFire(all[i], 60);
                    Particle.effectExplode(Native.ParticleType.flame, coords.x, coords.y, coords.z, 0.3, 100);
                }
            }
        }
    }
});




// file: game/item/grenade/grenade_jungle.js

IDRegistry.genItemID("grenadeJungle");
Item.createThrowableItem("grenadeJungle", "Jungle Orb", { name: "grenade_jungle" });

Callback.addCallback("PostLoaded", function () {
    Recipes.addShaped({ id: ItemID.grenadeJungle, count: 1, data: 0 }, [
        "cbc",
        "bab",
        "cbc"
    ], ['a', 265, 0, 'b', 295, 0, 'c', ItemID.dustMana, 0]);
});

Callback.addCallback("ProjectileHit", function (projectile, item, target) {
    if (item.id === ItemID.grenadeJungle) {
        let entity = {
            64: true, 65: true,
            66: true, 67: true,
            68: true, 69: true,
            77: true, 80: true,
            81: true, 82: true,
            83: true, 84: true,
            85: true, 86: true,
            90: true, 93: true,
            94: true
        };
        Particle.effectExplode(Effect.cloud, target.x, target.y, target.z, 0.3, 100);
        let all = Entity.getAll();
        for (let i in all) {
            if (!Player.isPlayer(all[i]) && !entity[Entity.getType(all[i])]) {
                if (Entity.getDistanceToCoords(all[i], { x: target.x, y: target.y, z: target.z }) < 10) {
                    let coords = Entity.getPosition(all[i]);
                    Entity.damageEntity(all[i], 4);
                    Entity.addEffect(all[i], 19, 400, 4, true, true);
                    Particle.effectExplode(Effect.poisonedFog, coords.x, coords.y, coords.z, 0.3, 50);
                }
            }
        }
    }
});




// file: game/item/grenade/grenade_lightning.js

IDRegistry.genItemID("grenadeLightning");
Item.createThrowableItem("grenadeLightning", "Lightning Orb", { name: "grenade_lightning" });

Callback.addCallback("PostLoaded", function () {
    Recipes.addShaped({ id: ItemID.grenadeLightning, count: 1, data: 0 }, [
        "cbc",
        "bab",
        "cbc"
    ], ['a', 265, 0, 'b', 331, 0, 'c', ItemID.dustMana, 0]);
});

Callback.addCallback("ProjectileHit", function (projectile, item, target) {
    if (item.id === ItemID.grenadeLightning) {
        let entity = {
            64: true, 65: true,
            66: true, 67: true,
            68: true, 69: true,
            77: true, 80: true,
            81: true, 82: true,
            83: true, 84: true,
            85: true, 86: true,
            90: true, 93: true,
            94: true
        };
        Particle.effectExplode(Native.ParticleType.cloud, target.x, target.y, target.z, 0.3, 100);
        let all = Entity.getAll();
        for (var i in all) {
            if (!Player.isPlayer(all[i]) && !entity[Entity.getType(all[i])]) {
                if (Entity.getDistanceToCoords(all[i], { x: target.x, y: target.y, z: target.z }) < 10) {
                    let coords = Entity.getPosition(all[i]);
                    Entity.damageEntity(all[i], 5);
                    Entity.spawn(coords.x, coords.y, coords.z, 93);
                }
            }
        }
    }
});




