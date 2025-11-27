/*
BUILD INFO:
  dir: dev
  target: main.js
  files: 7
*/



// file: header.js

IMPORT("TileRender");
IMPORT("StorageInterface");
IMPORT("EnergyNet");
IMPORT("BackpackAPI");
IMPORT("EnhancedRecipes");

const canTileBeReplaced = ModAPI.requireGlobal("canTileBeReplaced");
const Color = android.graphics.Color;
const Bitmap = android.graphics.Bitmap;
const Thread = java.lang.Thread;

const EU = EnergyTypeRegistry.assureEnergyType("Eu", 1);
const RF = EnergyTypeRegistry.assureEnergyType("RF", 0.25);


let player = 0;
Callback.addCallback("LevelLoaded", function(){
    player = Player.get();
});


let currentScreen = "";
Callback.addCallback("NativeGuiChanged", function(screen){
    currentScreen = screen;
});


const DML = {
    
    is3D: __config__.getBool("3dmodel_blocks"),
    
    createBlock: function(key, name, texture){
        const id = IDRegistry.genBlockID(key);
        Block.createBlock(key, [{name: name, texture: texture, inCreative: true}]);
        if(this.is3D){
            const render = new ICRender.Model();
            const model = BlockRenderer.createModel();
            model.addBox(00/16, 00/16, 00/16,  16/16, 01/16, 16/16, "dml_machine", 0);
            model.addBox(00/16, 01/16, 00/16,  01/16, 16/16, 01/16, "dml_machine", 0);
            model.addBox(00/16, 01/16, 15/16,  01/16, 16/16, 16/16, "dml_machine", 0);
            model.addBox(15/16, 01/16, 00/16,  16/16, 16/16, 01/16, "dml_machine", 0);
            model.addBox(15/16, 01/16, 15/16,  16/16, 16/16, 16/16, "dml_machine", 0);
            model.addBox(01/16, 15/16, 00/16,  15/16, 16/16, 01/16, "dml_machine", 0);
            model.addBox(01/16, 15/16, 15/16,  15/16, 16/16, 16/16, "dml_machine", 0);
            model.addBox(00/16, 15/16, 01/16,  01/16, 16/16, 15/16, "dml_machine", 0);
            model.addBox(15/16, 15/16, 01/16,  16/16, 16/16, 15/16, "dml_machine", 0);
            render.addEntry(model);
            BlockRenderer.setStaticICRender(id, -1, render);
        }
        else{
            TileRenderer.setStandartModel(id, texture);
            TileRenderer.registerRotationModel(id, 0, texture);
        }
        ToolAPI.registerBlockMaterial(id, "stone", 1);
        Block.setDestroyTime(id, 3);
    },
    
    model: {},
    registerInsideModel: function(id, model){
        if(!this.is3D){
            return;
        }
        this.model[id] = [];
        model.forEach(function(box){
            box.type = "box";
            box.coords.x += box.size.x / 2;
            box.coords.y += box.size.y / 2;
            box.coords.z += box.size.z / 2;
        });
        const direction = [Math.PI, 0, Math.PI / 2, -Math.PI / 2];
        let render;
        for(let i = 0; i < 4; i++){
            render = new Render();
            render.getPart("body").addPart("sub");
            render.setPart("sub", model, {rotation: {y: direction[i]}, width: 64, height: 64});
            this.model[id][i] = render.getID();
        }
    },
    
    getInsideModel: function(id, data){
        return this.model[id][data];
    },
    
    registerMachine: function(key, prototype){
        const id = BlockID[key];
        if(this.is3D){
            prototype.anim = null;
            prototype.init = function(){
                this.anim = new Animation.Base(this.x + 0.5, this.y - 0.375, this.z + 0.5);
                this.anim.describe({render: DML.getInsideModel(this.blockID, this.data.meta), skin: "model/" + key + ".png", scale: 0.875});
                this.anim.load();
            };
            prototype.destroy = function(){
                this.anim.destroy();
            };
            Block.registerPlaceFunction(id, function(coords, item, block){
                const place = canTileBeReplaced(block.id, block.data) ? coords : coords.relative;
                World.setFullBlock(place.x, place.y, place.z, item);
                World.addTileEntity(place.x, place.y, place.z).data.meta = TileRenderer.getBlockRotation();
            });
        }
        else{
            prototype.init = function(){
                TileRenderer.mapAtCoords(this.x, this.y, this.z, this.blockID, this.data.meta);
                delete this.liquidStorage;
            };
            prototype.destroy = function(){
                BlockRenderer.unmapAtCoords(this.x, this.y, this.z);
            };
            TileRenderer.setRotationPlaceFunction(id);
        }
        prototype.energyReceive = function(type, amount){
            const ratio = EnergyTypeRegistry.getValueRatio(type, "RF");
            const add = Math.min(25600, amount * ratio, this.getEnergyStorage() - this.data.energy);
            this.data.energy += add;
            return add / ratio | 0;
        };
        TileEntity.registerPrototype(id, prototype);
        EnergyTileRegistry.addEnergyTypeForId(id, EU);
        EnergyTileRegistry.addEnergyTypeForId(id, RF);
    },
    
    registerExpandImage: function(name, w, h, source){
        const bmp = FileTools.ReadImage(__dir__ + "gui-source/" + source + ".png");
        UI.TextureSource.put(name, Bitmap.createScaledBitmap(bmp, w, h, false));
    }
    
};


const validResult = function(){
    return false;
};




// file: item/resource.js

IDRegistry.genItemID("charred_redstone");
Item.createItem("charred_redstone", "Soot-covered Redstone", {name: "charred_redstone"});

Item.registerNameOverrideFunction(ItemID.charred_redstone, function(item, name){
    return name + "\n§7Crafted by crushing §c" + Item.getName(331) + " §7against a §f" + Item.getName(173) + " §7(long tap)";
});

Callback.addCallback("DestroyBlockStart", function(coords, block){
    if(block.id === 173 && Player.getCarriedItem().id === 331){
        Player.decreaseCarriedItem();
        World.drop(coords.x + 0.5, coords.y + 1, coords.z + 0.5, ItemID.charred_redstone, 1, 0);
        Particles.addParticle(Native.ParticleType.smoke, coords.x + 0.5, coords.y + 1, coords.z + 0.5, 0, 0, 0);
    }
});

IDRegistry.genItemID("charred_plate");
Item.createItem("charred_plate", "Soot-covered Plate", {name: "charred_plate"});
Recipes2.addShapeless(ItemID.charred_plate, [ItemID.charred_redstone, {id: 49, count: 3}]);

IDRegistry.genBlockID("charred_machine");
Block.createBlock("charred_machine", [{name: "Soot-covered Machine Casing", texture: [["charred_machine", 0]], inCreative: true}]);
Recipes2.addShaped(BlockID.charred_machine, "aba:bcb:aba", {a: ItemID.charred_plate, b: 265, c: ItemID.charred_redstone});

IDRegistry.genItemID("polymer_clay");
Item.createItem("polymer_clay", "Polymer Clay", {name: "polymer_clay"});
Recipes2.addShaped({id: ItemID.polymer_clay, count: 16}, "abo:bcb:obd", {a: 266, b: 337, c: {id: 351, data: 4}, d: 265});


const matterXP = {};
const matterUseFunction = function(coords, item){
    const count = Entity.getSneaking(player) ? item.count : 1;
    Player.addExperience(matterXP[item.id] * count);
    Player.decreaseCarriedItem(count);
};

matterXP[IDRegistry.genItemID("matter_overworld")] = 10;
Item.createItem("matter_overworld", "Overworldian Matter", {name: "matter_overworld"});
Item.registerUseFunction("matter_overworld", matterUseFunction);

matterXP[IDRegistry.genItemID("matter_hell")] = 14;
Item.createItem("matter_hell", "Hellish Matter", {name: "matter_hell"});
Item.registerUseFunction("matter_hell", matterUseFunction);
Recipes2.addShaped(ItemID.matter_hell, "oao:aba:oao", {a: ItemID.matter_overworld, b: 87});

matterXP[IDRegistry.genItemID("matter_extra")] = 20;
Item.createItem("matter_extra", "Extraterrestrial Matter", {name: "matter_extra"});
Item.registerUseFunction("matter_extra", matterUseFunction);
Recipes2.addShaped(ItemID.matter_extra, "oao:aba:oao", {a: ItemID.matter_hell, b: 121});


Callback.addCallback("PreLoaded", function(){
    if(__config__.getBool("matter_recipe")){
        Recipes2.addShapeless({id: 30, count: 4}, [287, 341, {id: ItemID.matter_overworld, count: 2}]);
        Recipes2.addShapeless({id: 289, count: 16}, [ItemID.matter_overworld, {id: 263, data: 0}]);
        Recipes2.addShapeless({id: 375, count: 2}, [367, 260, 40, ItemID.matter_overworld]);
        Recipes2.addShapeless({id: 262, count: 12}, [280, 318, ItemID.matter_overworld]);
        Recipes2.addShapeless({id: 352, count: 22}, [ItemID.matter_overworld, {id: 351, data: 15}]);
        Recipes2.addShapeless({id: 265, count: 8}, [{id: ItemID.matter_overworld, count: 4}, 367]);
        Recipes2.addShapeless({id: 367, count: 16}, [ItemID.matter_overworld, 319]);
        Recipes2.addShapeless({id: 392, count: 2}, [ItemID.matter_overworld, 391]);
        Recipes2.addShapeless({id: 391, count: 2}, [ItemID.matter_overworld, 295]);
        Recipes2.addShapeless({id: 409, count: 2}, [ItemID.matter_overworld, 406]);
        Recipes2.addShapeless({id: 2, count: 4}, [3, 18, ItemID.matter_overworld]);
        Recipes2.addShapeless({id: 372, count: 4}, [ItemID.matter_hell, 40]);
        Recipes2.addShapeless({id: 266, count: 6}, [348, 265, ItemID.matter_hell]);
        Recipes2.addShapeless({id: 370, count: 3}, [375, 353, {id: ItemID.matter_hell, count: 2}]);
        Recipes2.addShapeless(369, [352, {id: ItemID.matter_hell, count: 2}]);
        Recipes2.addShapeless({id: 377, count: 2}, [ItemID.matter_hell, 289]);
        Recipes2.addShapeless({id: 88, count: 4}, [ItemID.matter_hell, 12]);
        Recipes2.addShapeless(432, [ItemID.matter_extra, 260]);
        Recipes2.addShaped(399, "aba:ccc:oco", {a: {id: 397, data: 1}, b: ItemID.matter_extra, c: 88});
        Recipes2.addShapeless(368, [ItemID.matter_extra, 388, 332, 341]);
        Recipes2.addShapeless({id: 121, count: 8}, [{id: 24, count: 2}, 368, ItemID.matter_extra]);  
    }
});




// file: item/datamodel.js

IDRegistry.genItemID("datamodel_blank");
Item.createItem("datamodel_blank", "Blank Data Model", {name: "datamodel_blank"});
Recipes2.addShaped(ItemID.datamodel_blank, "aba:cdc:aea", {a: {id: 351, data: 4}, b: 356, c: ItemID.charred_redstone, d: {id: 1, data: 0}, e: 266});


const extractionRecipe = {};

const DataModel = {
    
    data: {},
    
    needData: [6, 48, 300, 900],
    chance: [0.05, 0.11, 0.24, 0.42],
    dataPerKill: [1, 4, 10, 18],
    
    typeName: ["Overworldian", "Hellish", "Extraterrestrial"],//acd
    tierName: ["Faulty", "Basic", "Advanced", "Superior", "Self Aware"],//8a9d6
    
    nameOverride: function(item, name){
        const datamodel = DataModel.getData(item.id);
        const tier = DataModel.getTier(item.data);
        return name
            + "\n§fTier: " + DataModel.tierName[tier]
            + "\nData collected: " + DataModel.getCollectedData(item.data) + " / " + DataModel.needData[tier]
            + "\nData per kill: " + DataModel.dataPerKill[tier]
            + "\nSimulation cost: " + datamodel.cost + " RF/t"
            + "\nType: " + DataModel.typeName[datamodel.type];
    },
    
    registerMob: function(key, obj){
        const datamodel = IDRegistry.genItemID("datamodel_" + key);
        const pristine = IDRegistry.genItemID("pristine_" + key);
        const name = obj.name || key.charAt(0).toUpperCase() + key.slice(1);
        Item.createItem("datamodel_" + key, "§b" + name + " Data Model", {name: "datamodel_" + key}, {stack: 1});
        Item.createItem("pristine_" + key, "Pristine " + name + " Matter", {name: "pristine_" + key});
        Item.registerNameOverrideFunction(datamodel, this.nameOverride);
        Item.setGlint(pristine, true);
        const words = obj.info.split(" ");
        const textArray = [];
        let text = "";
        for(let i = 0; i < words.length; i++){
            if(text.length + words[i].length < 30){
                text += words[i] + " ";
            }
            else{
                textArray.push(text);
                text = "";
            }
        }
        text && textArray.push(text);
        this.data[datamodel] = {
            key: key,
            name: name,
            entity: obj.entity,
            type: obj.type,
            cost: obj.cost,
            life: obj.life,
            pristine: pristine,
            info: textArray.join("\n")
        };
        obj.recipeItem && Recipes2.addShapeless(datamodel, [obj.recipeItem, ItemID.datamodel_blank]);
        extractionRecipe[pristine] = obj.loot.map(function(item){
            return {id: item.id, count: item.count, data: item.data || 0};
        });
    },
    
    addLootItem: function(key){
        for(let id in this.data){
            if(this.data[id].key === key){
                for(let i = 1; i < arguments.length; i++){
                    this.data[id].loot.push(arguments[i]);
                }
                break;
            }
        }
    },
    
    getData: function(id){
        return this.data[id];
    },
    
    isDataModel: function(id){
        return id in this.data;
    },
    
    getTier: function(data){
        let total = 0;
        for(let i = 0; i < 4; i++){
            total += this.needData[i];
            if(data < total){
                return i;
            }
        }
        return 4;
    },
    
    getCollectedData: function(data){
        const tier = this.getTier(data);
        for(let i = 0; i < tier; i++){
            data -= this.needData[i];
        }
        return data;
    },
    
    matter: [ItemID.matter_overworld, ItemID.matter_hell, ItemID.matter_extra],
    getMatter: function(type){
        return this.matter[type];
    }
    
};


DataModel.registerMob("zombie", {
    entity: Native.EntityType.ZOMBIE || 32,
    type: 0,
    cost: 80,
    life: 10,
    loot: [{id: 367, count: 64}, {id: 265, count: 16}, {id: 391, count: 32}, {id: 392, count: 32}],
    info: "They go moan in the night. Does not understand the need for personal space",
    recipeItem: 367
});

DataModel.registerMob("skeleton", {
    entity: Native.EntityType.SKELETON || 34,
    type: 0,
    cost: 80,
    life: 10,
    loot: [{id: 352, count: 64}, {id: 262, count: 64}, {id: 397, count: 6}],
    info: "A formidable archer, which seem to be running some sort of cheat engine A shield could prove useful",
    recipeItem: 352
});

DataModel.registerMob("creeper", {
    entity: Native.EntityType.CREEPER || 33,
    type: 0,
    cost: 80,
    life: 10,
    loot: [{id: 289, count: 64}, {id: 397, count: 6, data: 4}],
    info: "Will blow up your base if left unattended.",
    recipeItem: 289
});

DataModel.registerMob("spider", {
    entity: Native.EntityType.SPIDER || 35,
    type: 0,
    cost: 80,
    life: 8,
    loot: [{id: 375, count: 16}, {id: 287, count: 64}, {id: 30, count: 8}],
    info: "Nocturnal douchebags, beware Drops strands of string for some reason..",
    recipeItem: 375
});

DataModel.registerMob("slime", {
    entity: Native.EntityType.SLIME || 37,
    type: 0,
    cost: 150,
    life: 8,
    loot: [{id: 341, count: 32}],
    info: "The bounce bounce his bounce squish - \"A slime haiku\"",
    recipeItem: 341
});

DataModel.registerMob("witch", {
    entity: Native.EntityType.WITCH || 45,
    type: 0,
    cost: 120,
    life: 13,
    loot: [{id: 331, count: 32}, {id: 348, count: 32}, {id: 353, count: 64}],
    info: "Affinity with potions and concoctions Beware!",
    recipeItem: 374
});

DataModel.registerMob("blaze", {
    entity: Native.EntityType.BLAZE || 43,
    type: 1,
    cost: 256,
    life: 10,
    loot: [{id: 369, count: 22}],
    info: "Bring buckets, and watch in despair as it evaporates, and everything is on fire You are on fire",
    recipeItem: 377
});

DataModel.registerMob("ghast", {
    entity: Native.EntityType.GHAST || 41,
    type: 1,
    cost: 372,
    life: 5,
    loot: [{id: 370, count: 8}],
    info: "If you hear something that sounds like a crying llama, you're probably hearing a ghast",
    recipeItem: 370
});

DataModel.registerMob("skeleton2", {
    name: "Wither Skeleton",
    entity: Native.EntityType.WITHER_SKELETON || 48,
    type: 1,
    cost: 880,
    life: 10,
    loot: [{id: 397, count: 18, data: 1}, {id: 263, count: 64}],
    info: "Inflicts the wither effect Bring milk",
    recipeItem: {id: 397, data: 1}
});

DataModel.registerMob("enderman", {
    entity: Native.EntityType.ENDERMAN || 38,
    type: 2,
    cost: 512,
    life: 20,
    loot: [{id: 368, count: 6}, {id: 426, count: 1}],
    info: "Friendly unless provoked, dislikes rain. Teleports short distances",
    recipeItem: 368
});

DataModel.registerMob("wither", {
    entity: Native.EntityType.WITHER || 52,
    type: 2,
    cost: 2048,
    life: 150,
    loot: [{id: 399, count: 3}],
    info: "Do not approach this enemy. Run! I mean it has 3 heads, what could possibly go wrong?",
    recipeItem: 399
});

DataModel.registerMob("dragon", {
    name: "Ender Dragon",
    entity: Native.EntityType.ENDER_DRAGON || 53,
    type: 2,
    cost: 2560,
    life: 100,
    loot: [{id: 437, count: 32}, {id: 122, count: 1}],
    info: "Resides in the end, does not harbor treasure Destroy it's crystals, break the cycle.",
    recipeItem: 122
});

DataModel.registerMob("shulker", {
    entity: Native.EntityType.SHULKER || 54,
    type: 2,
    cost: 256,
    life: 15,
    loot: [{id: 445, count: 18}, {id: 264, count: 2}],
    info: "Found in End cities Sneaky little buggers",
    recipeItem: 445
});

DataModel.registerMob("guardian", {
    entity: Native.EntityType.GUARDIAN || 49,
    type: 0,
    cost: 340,
    life: 15,
    loot: [{id: 409, count: 32}, {id: 422, count: 32}, {id: 349, count: 64}],
    info: "Lurking in the oceans. Uses some sort of sonar beam as a means of attack",
    recipeItem: 409
});




// file: item/learner.js

IDRegistry.genItemID("deep_learner");
Item.createItem("deep_learner", "Deep Learner", {name: "deep_learner"}, {stack: 1});
Recipes2.addShaped(ItemID.deep_learner, "aba:bcb:ada", {a: ItemID.charred_plate, b: 356, c: 102, d: ItemID.charred_redstone});


const fontPopup = {color: Color.WHITE, size: 80, shadow: 0.5};
const fontPopupSmall = {color: Color.WHITE, size: 60, shadow: 0.5};
DML.registerExpandImage("dml_scale.xp", 87, 10, "progress");


const validDataModel = function(id){
    return DataModel.isDataModel(id);
};

const Learner = {
    
    page: 0,
    
    window: new UI.StandartWindow({
        standart: {
            header: {text: {text: "Deep Learner"}},
            inventory: {width: 240, paddind: 20},
            background: {standart: true}
        },
        params: {slot: "dml_slot.dark"},
        drawing: [
            {type: "bitmap", x: 300, y: 40, bitmap: "deep_learner_back", scale: 2},
            {type: "frame", x: 460, y: 40, width: 512, height: 280, bitmap: "dml_frame.blue", bg: Color.parseColor("#111111"), scale: 2},//256,140
        ],
        elements: {
            slot0: {type: "slot", x: 890, y: 238, size: 36, isValid: validDataModel},
            slot1: {type: "slot", x: 926, y: 238, size: 36, isValid: validDataModel},
            slot2: {type: "slot", x: 890, y: 274, size: 36, isValid: validDataModel},
            slot3: {type: "slot", x: 926, y: 274, size: 36, isValid: validDataModel},
            imageMob: {type: "image", x: 300, y: 40, width: 150, height: 202, bitmap: "_default_slot_empty"},
            textInfo: {type: "text", x: 470, y: 50, multiline: true, font: {color: Color.WHITE, size: 24}},
            buttonL: {type: "button", x: 330, y: 250, bitmap: "dml_button.left", scale: 2, clicker: {
                onClick: function(container){
                    for(let i = 0; i < 4; i++){
                        Learner.page++;
                        Learner.page &= 3;
                        if(DataModel.isDataModel(container.getSlot("slot" + Learner.page).id)){
                            Learner.refreshWindow(container);
                            break;
                        }
                    }
                }
            }},
            buttonR: {type: "button", x: 380, y: 250, bitmap: "dml_button.right", scale: 2, clicker: {
                onClick: function(container){
                    for(let i = 0; i < 4; i++){
                        Learner.page--;
                        Learner.page &= 3;
                        if(DataModel.isDataModel(container.getSlot("slot" + Learner.page).id)){
                            Learner.refreshWindow(container);
                            break;
                        }
                    }
                }
            }},
        }
    }),
    
    refreshWindow: function(container){
        const content = this.window.getContent();
        const elements = this.window.getElements();
        const slot = container.getSlot("slot" + this.page);
        const chip = DataModel.getData(slot.id);
        const tier = DataModel.getTier(slot.data);
        const collected = DataModel.getCollectedData(slot.data) / DataModel.dataPerKill[tier] | 0;
        content.elements.imageMob.bitmap = chip ? "dml_mob." + chip.key : "_default_slot_empty";
        elements.get("textInfo").onBindingUpdated("text", chip ? "Name\nThe " + chip.name + "\nInformation\n" + chip.info + "\n\nModel Tier: " + DataModel.tierName[tier] + "\n" + chip.name + "s defeated: " + collected + (tier === 4 ? "Maximum tier achieved" : "\nDefeat " + (DataModel.needData[tier] / DataModel.dataPerKill[tier] - collected) + " more to reach " + DataModel.tierName[tier + 1]) : "");
    },
    
    popupWindow: new UI.Window({
        location: {x: 0, y: 0, width: 240, height: 240},
        params: {slot: "_default_slot_empty"},
        drawing: [{type: "background", color: Color.TRANSPARENT}],
        elements: {
            textTier0: {type: "text", x: 40, y: 0, font: fontPopup},
            textTier1: {type: "text", x: 40, y: 240, font: fontPopup},
            textTier2: {type: "text", x: 40, y: 480, font: fontPopup},
            textTier3: {type: "text", x: 40, y: 720, font: fontPopup},
            slot0: {type: "slot", x: -20, y: 50, visual: true, isDarkenAtZero: false, needClean: true, size: 240},
            slot1: {type: "slot", x: -20, y: 290, visual: true, isDarkenAtZero: false, needClean: true, size: 240},
            slot2: {type: "slot", x: -20, y: 530, visual: true, isDarkenAtZero: false, needClean: true, size: 240},
            slot3: {type: "slot", x: -20, y: 770, visual: true, isDarkenAtZero: false, needClean: true, size: 240},
            scaleBack0: {type: "image", x: 220, y: 120, bitmap: "dml_scale.xp_back", scale: 8},
            scaleBack1: {type: "image", x: 220, y: 360, bitmap: "dml_scale.xp_back", scale: 8},
            scaleBack2: {type: "image", x: 220, y: 600, bitmap: "dml_scale.xp_back", scale: 8},
            scaleBack3: {type: "image", x: 220, y: 840, bitmap: "dml_scale.xp_back", scale: 8},
            scaleXp0: {type: "scale", x: 228, y: 128, z: 1, bitmap: "dml_scale.xp", scale: 8},
            scaleXp1: {type: "scale", x: 228, y: 368, z: 1, bitmap: "dml_scale.xp", scale: 8},
            scaleXp2: {type: "scale", x: 228, y: 608, z: 1, bitmap: "dml_scale.xp", scale: 8},
            scaleXp3: {type: "scale", x: 228, y: 848, z: 1, bitmap: "dml_scale.xp", scale: 8},
            textNext0:  {type: "text", x: 240, y: 130, z: 2, font: fontPopupSmall},
            textNext1:  {type: "text", x: 240, y: 370, z: 2, font: fontPopupSmall},
            textNext2:  {type: "text", x: 240, y: 610, z: 2, font: fontPopupSmall},
            textNext3:  {type: "text", x: 240, y: 850, z: 2, font: fontPopupSmall}
        }
    })
    
};


Learner.window.getWindow("main").setEventListener({onOpen: function(window){
    Learner.refreshWindow(window.getContainer());
}});

Learner.popupWindow.setAsGameOverlay(true);


BackpackRegistry.register(ItemID.deep_learner, {
    slots: 4,
    gui: Learner.window
});


Callback.addCallback("EntityDeath", function(entity, attacker){
    if(!Player.isPlayer(attacker)){
        return;
    }
    const entityType = Entity.getType(entity);
    let i = j = tier = tier2 = 0;
    let inv, container, slot, chip;
    for(i = 9; i <= 44; i++){
        inv = Player.getInventorySlot(i);
        if(inv.id === ItemID.deep_learner){
            container = BackpackRegistry.containers["d" + inv.data];
            if(container){
                for(j = 0; j < 4; j++){
                    slot = container.getSlot("slot" + j);
                    chip = DataModel.getData(slot.id);
                    tier = DataModel.getTier(slot.data);
                    if(chip && chip.entity === entityType && tier < 4){
                        slot.data += DataModel.dataPerKill[tier];
                        tier2 = DataModel.getTier(slot.data);
                        tier !== tier2 && Game.message(chip.name + " Data Model reached the " + DataModel.tierName[tier2] + " tier");
                    }
                }
            }
        }
    }
});


const elementsPopup = Learner.popupWindow.getElements();
Callback.addCallback("LevelLoaded", function(){
    Updatable.addUpdatable({update: function(){
        const carried = Player.getCarriedItem();
        if((currentScreen === "hud_screen" || currentScreen === "in_game_play_screen") && carried.id === ItemID.deep_learner){
            const container = BackpackRegistry.containers["d" + carried.data];
            if(container){
                let slot;
                let flag = false;
                let tier = corrected = need = 0;
                Learner.popupWindow.open();
                for(let i = 0; i < 4; i++){
                    slot = container.getSlot("slot" + i);
                    flag = DataModel.isDataModel(slot.id);
                    tier = DataModel.getTier(slot.data);
                    corrected = DataModel.getCollectedData(slot.data) / DataModel.dataPerKill[tier] | 0;
                    need = DataModel.needData[tier] / DataModel.dataPerKill[tier];
                    elementsPopup.get("textTier" + i).onBindingUpdated("text", flag ? DataModel.tierName[DataModel.getTier(slot.data)] + " Model" : "");
                    elementsPopup.get("slot" + i).onBindingUpdated("source", {id: flag ? slot.id : 0, count: 0, data: 0});
                    elementsPopup.get("scaleBack" + i).setPosition(220, flag ? i * 240 + 120 : -200);
                    elementsPopup.get("scaleXp" + i).onBindingUpdated("value", flag ? tier === 4 ? 1 : corrected / need : 0);
                    elementsPopup.get("textNext" + i).onBindingUpdated("text", flag && tier < 4 ? (need - corrected) + " to go" : "");
                }
                return;
            }
        }
        Learner.popupWindow.close();
    }});
});




// file: block/simulation.js

DML.createBlock("simulation_chamber", "Simulation Chamber", [
    ["dml_machine", 0],
    ["dml_machine", 0],
    ["dml_machine", 1],
    ["simulation_chamber", 0],
    ["dml_machine", 1],
    ["dml_machine", 1]
]);

Recipes2.addShaped(BlockID.simulation_chamber, "oao:bcb:ded", {a: 102, b: 368, c: BlockID.charred_machine, d: {id: 351, data: 4}, e: 404});


DML.registerInsideModel(BlockID.simulation_chamber, [
    {uv: {x: 0, y: 0}, coords: {x: -8, y: 0, z: -8}, size: {x: 16, y: 16, z: 16}},
    {uv: {x: 0, y: 32}, coords: {x: -7, y: 1, z: -9}, size: {x: 14, y: 1, z: 1}},
    {uv: {x: 0, y: 32}, coords: {x: -7, y: 2, z: -9}, size: {x: 1, y: 13, z: 1}},
    {uv: {x: 0, y: 48}, coords: {x: 6, y: 2, z: -9}, size: {x: 1, y: 13, z: 1}},
    {uv: {x: 0, y: 48}, coords: {x: -6, y: 14, z: -9}, size: {x: 12, y: 1, z: 1}},
    {uv: {x: 32, y: 62}, coords: {x: -5, y: 12, z: -9}, size: {x: 7, y: 1, z: 1}},
    {uv: {x: 48, y: 62}, coords: {x: 3, y: 12, z: -9}, size: {x: 2, y: 1, z: 1}},
    {uv: {x: 32, y: 32}, coords: {x: -9, y: 3, z: 2}, size: {x: 1, y: 1, z: 3}},
    {uv: {x: 32, y: 48}, coords: {x: -9, y: 3, z: -5}, size: {x: 1, y: 1, z: 4}},
    {uv: {x: 43, y: 32}, coords: {x: 8, y: 3, z: -5}, size: {x: 1, y: 1, z: 3}},
    {uv: {x: 43, y: 48}, coords: {x: 8, y: 3, z: 1}, size: {x: 1, y: 1, z: 4}},
    {uv: {x: 54, y: 32}, coords: {x: 2, y: 3, z: 8}, size: {x: 3, y: 1, z: 1}},
    {uv: {x: 54, y: 48}, coords: {x: -5, y: 3, z: 8}, size: {x: 4, y: 1, z: 1}}
]);


DML.registerExpandImage("dml_scale.energy_simulation", 7, 87, "energy");
DML.registerExpandImage("dml_scale.progress_simulation", 7, 87, "progress");

const windowSimulation = new UI.StandartWindow({
    standart: {
        header: {text: {text: "Simulation Chamber"}},
        inventory: {width: 240, paddind: 20},
        background: {standart: true}
    },
    drawing: [
        {type: "frame", x: 340, y: 40, width: 648, height: 423, bitmap: "dml_frame.blue", bg: Color.parseColor("#111111"), scale: 3},//216,141
        {type: "frame", x: 355, y: 55, width: 462, height: 120, bitmap: "dml_frame.dark", bg: Color.BLACK, scale: 3},//5,5, 154,40
        {type: "frame", x: 355, y: 181, width: 27, height: 267, bitmap: "dml_frame.dark", bg: Color.BLACK, scale: 3},//5,47, 9,89
        {type: "frame", x: 388, y: 181, width: 549, height: 267, bitmap: "dml_frame.dark", bg: Color.BLACK, scale: 3},//16,47, 183,89
        {type: "frame", x: 946, y: 181, width: 27, height: 267, bitmap: "dml_frame.dark", bg: Color.BLACK, scale: 3},//202,47, 9,89
    ],
    elements: {
        scaleData: {type: "scale", x: 358, y: 184, direction: 1, bitmap: "dml_scale.energy_simulation", scale: 3},
        scaleEnergy: {type: "scale", x: 949, y: 184, direction: 1, bitmap: "dml_scale.progress_simulation", scale: 3},
        slotChip: {type: "slot", x: 277, y: 40, size: 54, bitmap: "dml_slot.blue", isValid: function(id){return DataModel.isDataModel(id);}},
        slotSource: {type: "slot", x: 841, y: 58, size: 54, bitmap: "dml_slot.i", isValid: function(id){return id === ItemID.polymer_clay;}},//167,6
        slotResult: {type: "slot", x: 901, y: 58, size: 54, bitmap: "dml_slot.dark", isValid: validResult},//187,6
        slotPristine: {type: "slot", x: 871, y: 118, size: 54, bitmap: "dml_slot.E", isValid: validResult},//177,26
        textInfo: {type: "text", x: 365, y: 65, multiline: true, font: {color: Color.WHITE, size: 24}},
        textSimulation: {type: "text", x: 398, y: 191, multiline: true, font: {color: Color.WHITE, size: 24}},
        textProgress: {type: "text", x: 920, y: 410, font: {color: Color.parseColor("#00AAAA"), size: 24, alignment: 2}}
    }
});


DML.registerMachine("simulation_chamber", {
    
    defaultValues: {
        meta: 0,
        energy: 0,
        progress: -1,
        pristine: false
    },
    
    textString: "",
    textPosition: 0,
    
    getGuiScreen: function(){
        return windowSimulation;
    },
    
    animateText: function(key, string){
        if(this.data.progress === -1 && !this.container.isOpened()){
            this.textPosition = 0;
            return;
        }
        if(this.textString === string){
            const array = string.split("\n");
            let position = ++this.textPosition;
            let text = ""
            for(let i = 0; i < array.length; i++){
                if(position <= array[i].length){
                    text += array[i].slice(0, position);
                    break;
                }
                position -= array[i].length;
                text += array[i] + "\n";
            }
            this.container.setText(key, text);
        }
        else{
            this.textString = string;
            this.textPosition = 0;
        }
    },
    
    hasSpace: function(slot, id){
        return slot.id === 0 || slot.id === id && slot.count < 64;
    },
    
    tick: function(){
        
        const slotChip = this.container.getSlot("slotChip");
        const slotResult = this.container.getSlot("slotResult");
        const slotPristine = this.container.getSlot("slotPristine");
        const chip = DataModel.getData(slotChip.id);
        const tier = DataModel.getTier(slotChip.data);
        const result = chip ? DataModel.getMatter(chip.type) : 0;
        
        startSimulation:
        if(this.data.progress === -1){
            const slotSource = this.container.getSlot("slotSource");
            this.container.setText("textProgress", "");
            if(!chip){
                this.animateText("textInfo", "Please insert a data model\nto bigin the simulation");
                this.container.setText("textSimulation", "");
                break startSimulation;
            }
            if(tier === 0){
                this.animateText("textInfo", "Insufficient data in model\nplease insert a basic model\nor better");
                this.container.setText("textSimulation", "");
                break startSimulation;
            }
            this.container.setText("textInfo",
                "Tier: " + DataModel.tierName[tier] +
                "\nIterations: " + slotChip.data +
                "\nPristine chance: " + (DataModel.chance[tier] * 100) + "%"
            );
            if(slotSource.id !== ItemID.polymer_clay){
                this.animateText("textSimulation", "Cannot begin simulation\nMissing polymer clay");
                break startSimulation;
            }
            if(this.data.energy < chip.cost * 300){
                this.animateText("textSimulation", "Cannot begin simulation\nSystem energy levels critical");
                break startSimulation;
            }
            if(!this.hasSpace(slotResult, result) || !this.hasSpace(slotPristine, chip.pristine)){
                this.animateText("textSimulation", "Cannot begin simulation\nOutput or pristine buffer is full");
                break startSimulation;
            }
            slotSource.count--;
            this.container.validateSlot("slotSource");
            this.data.progress = 0;
            this.data.pristine = Math.random() < DataModel.chance[tier];
        }
        else{
            this.container.setText("textInfo",
                "Tier: " + DataModel.tierName[tier] +
                "\nIterations: " + slotChip.data +
                "\nPristine chance: " + (DataModel.chance[tier] * 100) + "%"
            );
            this.animateText("textSimulation", "> Launching runtime v1.4.7    \n> Iteration #" + (slotChip.data + 1) + " started    \n> Loading model from chip memory    \n> Assessing threat level    \n> Engaged enemy    \n> Pristine procurement " + (this.data.pristine ? "succeeded" : "failed") + "    \n> Processing results    \n...");
            this.container.setText("textProgress", (this.data.progress / 3 | 0) + "%");
            if(!chip || tier === 0 || this.data.energy < chip.cost){
                this.data.progress = -1;
            }
            else{
                this.data.progress++;
                this.data.energy -= chip.cost;
                if(this.data.progress >= 300){
                    slotResult.id = result;
                    slotResult.count++;
                    if(this.data.pristine){
                        slotPristine.id = chip.pristine;
                        slotPristine.count++;
                    }
                    slotChip.data++;
                    this.data.progress = -1;
                }
            }
        }
        
        this.container.setScale("scaleData", tier === 4 ? 1 : DataModel.getCollectedData(slotChip.data) / DataModel.needData[tier]);
        this.container.setScale("scaleEnergy", this.data.energy / this.getEnergyStorage());
        
        StorageInterface.checkHoppers(this);
        
    },
    
    getEnergyStorage: function(){
        return 2e6;
    }

});


StorageInterface.createInterface(BlockID.simulation_chamber, {
    slots: {
        slotSource: {input: true},
        slotResult: {output: true},
        slotLoot: {output: true}
    },
    isValidInput: function(item){
        return item.id === ItemID.polymer_clay;
    }
});




// file: block/extraction.js

DML.createBlock("extraction_chamber", "Loot Fabricator", [
    ["dml_machine", 0],
    ["dml_machine", 0],
    ["dml_machine", 2],
    ["extraction_chamber", 0],
    ["dml_machine", 2],
    ["dml_machine", 2]
]);

Recipes2.addShaped(BlockID.extraction_chamber, "oao:bcb:ded", {a: 266, b: 264, c: BlockID.charred_machine, d: {id: 351, data: 11}, e: 404});


DML.registerInsideModel(BlockID.extraction_chamber, [
    {uv: {x: 0, y: 0}, coords: {x: -8, y: 0, z: -8}, size: {x: 16, y: 16, z: 16}},
    {uv: {x: 0, y: 32}, coords: {x: -6, y: 2, z: -9}, size: {x: 4, y: 1, z: 1}},
    {uv: {x: 0, y: 32}, coords: {x: 2, y: 2, z: -9}, size: {x: 4, y: 1, z: 1}},
    {uv: {x: 0, y: 32}, coords: {x: -6, y: 13, z: -9}, size: {x: 4, y: 1, z: 1}},
    {uv: {x: 0, y: 32}, coords: {x: 2, y: 13, z: -9}, size: {x: 4, y: 1, z: 1}},
    {uv: {x: 0, y: 32}, coords: {x: -6, y: 3, z: -9}, size: {x: 1, y: 3, z: 1}},
    {uv: {x: 0, y: 32}, coords: {x: 5, y: 3, z: -9}, size: {x: 1, y: 3, z: 1}},
    {uv: {x: 0, y: 32}, coords: {x: -6, y: 10, z: -9}, size: {x: 1, y: 3, z: 1}},
    {uv: {x: 0, y: 32}, coords: {x: 5, y: 10, z: -9}, size: {x: 1, y: 3, z: 1}},
    {uv: {x: 32, y: 32}, coords: {x: -9, y: 3, z: 2}, size: {x: 1, y: 1, z: 3}},
    {uv: {x: 32, y: 48}, coords: {x: -9, y: 3, z: -5}, size: {x: 1, y: 1, z: 4}},
    {uv: {x: 43, y: 32}, coords: {x: 8, y: 3, z: -5}, size: {x: 1, y: 1, z: 3}},
    {uv: {x: 43, y: 48}, coords: {x: 8, y: 3, z: 1}, size: {x: 1, y: 1, z: 4}},
    {uv: {x: 54, y: 32}, coords: {x: 2, y: 3, z: 8}, size: {x: 3, y: 1, z: 1}},
    {uv: {x: 54, y: 48}, coords: {x: -5, y: 3, z: 8}, size: {x: 4, y: 1, z: 1}}
]);


DML.registerExpandImage("dml_scale.energy_extraction", 7, 53, "energy");
DML.registerExpandImage("dml_scale.progress_extraction", 6, 35, "progress");

const selectRecipeFunc = function(container, tile, elem){
    container.setSlot("slotSample", elem.source.id, 0, elem.source.data);
};

const windowExtraction = new UI.StandartWindow({
    standart: {
        header: {text: {text: "Loot Fabricator"}},
        inventory: {standart: true},
        background: {standart: true}
    },
    params: {slot: "dml_slot.dark"},
    drawing: [
        {type: "frame", x: 400, y: 40, width: 528, height: 249, bitmap: "dml_frame.blue", bg: Color.parseColor("#111111"), scale: 3},//176,83
        {type: "frame", x: 415, y: 67, width: 27, height: 165, bitmap: "dml_frame.dark", bg: Color.BLACK, scale: 3},//5,9, 9,55
        {type: "frame", x: 439, y: 55, width: 186, height: 186, bitmap: "dml_frame.dark", bg: Color.parseColor("#303030"), scale: 3},//13,5, 62,62
        {type: "frame", x: 652, y: 106, width: 24, height: 111, bitmap: "dml_frame.dark", bg: Color.BLACK, scale: 3},//83,22, 8,37
    ],
    elements: {
        scaleEnergy: {type: "scale", x: 418, y: 70, direction: 1, bitmap: "dml_scale.energy_extraction", scale: 3},
        scaleProgress: {type: "scale", x: 655, y: 109, direction: 1, bitmap: "dml_scale.progress_extraction", scale: 3},
        slotSelect0: {type: "slot", x: 442, y: 58, bitmap: "_default_slot_empty", visual: true, needClean: true, source: {id: 0, count: 0, data: 0}, clicker: {onClick: selectRecipeFunc}},
        slotSelect1: {type: "slot", x: 502, y: 58, bitmap: "_default_slot_empty", visual: true, needClean: true, source: {id: 0, count: 0, data: 0}, clicker: {onClick: selectRecipeFunc}},
        slotSelect2: {type: "slot", x: 562, y: 58, bitmap: "_default_slot_empty", visual: true, needClean: true, source: {id: 0, count: 0, data: 0}, clicker: {onClick: selectRecipeFunc}},
        slotSelect3: {type: "slot", x: 442, y: 118, bitmap: "_default_slot_empty", visual: true, needClean: true, source: {id: 0, count: 0, data: 0}, clicker: {onClick: selectRecipeFunc}},
        slotSelect4: {type: "slot", x: 502, y: 118, bitmap: "_default_slot_empty", visual: true, needClean: true, source: {id: 0, count: 0, data: 0}, clicker: {onClick: selectRecipeFunc}},
        slotSelect5: {type: "slot", x: 562, y: 118, bitmap: "_default_slot_empty", visual: true, needClean: true, source: {id: 0, count: 0, data: 0}, clicker: {onClick: selectRecipeFunc}},
        slotSelect6: {type: "slot", x: 442, y: 178, bitmap: "_default_slot_empty", visual: true, needClean: true, source: {id: 0, count: 0, data: 0}, clicker: {onClick: selectRecipeFunc}},
        slotSelect7: {type: "slot", x: 502, y: 178, bitmap: "_default_slot_empty", visual: true, needClean: true, source: {id: 0, count: 0, data: 0}, clicker: {onClick: selectRecipeFunc}},
        slotSelect8: {type: "slot", x: 562, y: 178, bitmap: "_default_slot_empty", visual: true, needClean: true, source: {id: 0, count: 0, data: 0}, clicker: {onClick: selectRecipeFunc}},
        slotSample: {type: "slot", x: 634, y: 45, bitmap: "_default_slot_empty", visual: true, needClean: true, isDarkenAtZero: false, clicker: {
            onClick: function(container){
                container.clearSlot("slotSample");
            }
        }},
        slotSource: {type: "slot", x: 637, y: 226, size: 54, isValid: function(id){return isPristine[id] || false;}},//79,62
        slotResult0: {type: "slot", x: 710, y: 55, size: 50, isValid: validResult},
        slotResult1: {type: "slot", x: 760, y: 55, size: 50, isValid: validResult},
        slotResult2: {type: "slot", x: 810, y: 55, size: 50, isValid: validResult},
        slotResult3: {type: "slot", x: 860, y: 55, size: 50, isValid: validResult},
        slotResult4: {type: "slot", x: 710, y: 105, size: 50, isValid: validResult},
        slotResult5: {type: "slot", x: 760, y: 105, size: 50, isValid: validResult},
        slotResult6: {type: "slot", x: 810, y: 105, size: 50, isValid: validResult},
        slotResult7: {type: "slot", x: 860, y: 105, size: 50, isValid: validResult},
        slotResult8: {type: "slot", x: 710, y: 155, size: 50, isValid: validResult},
        slotResult9: {type: "slot", x: 760, y: 155, size: 50, isValid: validResult},
        slotResult10: {type: "slot", x: 810, y: 155, size: 50, isValid: validResult},
        slotResult11: {type: "slot", x: 860, y: 155, size: 50, isValid: validResult},
        slotResult12: {type: "slot", x: 710, y: 205, size: 50, isValid: validResult},
        slotResult13: {type: "slot", x: 760, y: 205, size: 50, isValid: validResult},
        slotResult14: {type: "slot", x: 810, y: 205, size: 50, isValid: validResult},
        slotResult15: {type: "slot", x: 860, y: 205, size: 50, isValid: validResult}
    }
});

const elementsExtraction = windowExtraction.getWindow("main").getElements();


DML.registerMachine("extraction_chamber", { 
    
    defaultValues: {
        meta: 0,
        energy: 0,
        progress: 0
    },
    
    getGuiScreen: function(){
        return windowExtraction;
    },
    
    hasSpace: function(item){
        const stack = Item.getMaxStack(item.id, item.data);
        let slot;
        let space = 0;
        for(let i = 0; i < 16; i++){
            slot = this.container.getSlot("slotResult" + i);
            if(slot.id === 0 || slot.id === item.id && slot.data === item.data){
                space += stack - slot.count;
            }
        }
        return slot.count <= space;
    },
    
    tick: function(){
        
        const slotSource = this.container.getSlot("slotSource");
        const slotSample = this.container.getSlot("slotSample");
        const recipe = extractionRecipe[slotSource.id] || [];
        
        if(this.container.isOpened()){
            for(let i = 0; i < 9; i++){
                elementsExtraction.get("slotSelect" + i).onBindingUpdated("source", recipe[i] || {id: 0, count: 0, data: 0});
            }
        }
        
        if(slotSample.id !== 0){
            const result = recipe.find(function(item){
                return item.id === slotSample.id && item.data === slotSample.data;
            });
            if(result){
                if(this.data.progress > 0 || this.data.energy >= 256 * 50){
                    this.data.energy -= 256;
                    if(++this.data.progress >= 50 && this.hasSpace(result)){
                        const stack = Item.getMaxStack(result.id, result.data);
                        let count = result.count;
                        let slot;
                        let add = 0;
                        for(let i = 0; i < 16; i++){
                            slot = this.container.getSlot("slotResult" + i);
                            if(slot.id === 0 || slot.id === result.id && slot.data === result.data){
                                add = Math.min(count, stack - slot.count);
                                slot.id = result.id;
                                slot.data = result.data;
                                slot.count += add;
                                count -= add;
                            }
                            if(count === 0){
                                break;
                            }
                        }
                        slotSource.count--;
                        this.container.validateSlot("slotSource");
                        this.data.progress = 0;
                    }
                }
            }
            else{
                this.data.progress = 0;
            }
        }
        
        this.container.setScale("scaleEnergy", this.data.energy / this.getEnergyStorage());
        this.container.setScale("scaleProgress", this.data.progress / 50);
        
        StorageInterface.checkHoppers(this);
        
    },
    
    getEnergyStorage: function(){
        return 1e6;
    }

});


StorageInterface.createInterface(BlockID.extraction_chamber, {
    slots: {
        slotSource: {input: true},
        slotResult0: {output: true},
        slotResult1: {output: true},
        slotResult2: {output: true},
        slotResult3: {output: true},
        slotResult4: {output: true},
        slotResult5: {output: true},
        slotResult6: {output: true},
        slotResult7: {output: true},
        slotResult8: {output: true},
        slotResult9: {output: true},
        slotResult10: {output: true},
        slotResult11: {output: true},
        slotResult12: {output: true},
        slotResult13: {output: true},
        slotResult14: {output: true},
        slotResult15: {output: true}
    },
    isValidInput: function(item){
        return item.id in extractionRecipe;
    }
});




// file: footer.js

ModAPI.registerAPI("DMLCore", {
    DataModel: DataModel
});


DML.registerExpandImage("dml_scale.progress_rv", 36, 6, "progress");

ModAPI.addAPICallback("RecipeViewer", function(api){
    
    const utilSimulation = function(id){
        const chip = DataModel.getData(id);
        return {
            input: [{id: id - 0, count: 1, data: 0}, {id: ItemID.polymer_clay, count: 1, data: 0}],
            output: [{id: DataModel.getMatter(chip.type), count: 1, data: 0}, {id: chip.pristine, count: 1, data: 0}]
        };
    };
    
    api.Core.registerRecipeType("simulation_chamber", {
        contents: {
            icon: BlockID.simulation_chamber,
            params: {slot: "dml_slot.dark"},
            drawing: [
                {type: "frame", x: 180, y: 100, width: 640, height: 160, bitmap: "dml_frame.blue", bg: Color.parseColor("#111111"), scale: 6},
                {type: "frame", x: 386, y: 156, width: 228, height: 48, bitmap: "dml_frame.dark", bg: Color.BLACK, scale: 6},
                {type: "bitmap", x: 392, y: 162, bitmap: "dml_scale.progress_rv", scale: 6}
            ],
            elements: {
                input0: {type: "slot", x: 50, y: 120, bitmap: "dml_slot.blue", size: 120},
                input1: {type: "slot", x: 230, y: 120, size: 120},
                output0: {type: "slot", x: 654, y: 120, size: 120},
                output1: {type: "slot", x: 510, y: 270, size: 120}
            }
        },
        getList: function(id, data, isUsage){
            const list = [];
            let key = "";
            if(isUsage){
                if(DataModel.isDataModel(id)){
                    return [utilSimulation(id)];
                }
                if(id === ItemID.polymer_clay){
                    for(key in DataModel.data){
                        list.push(utilSimulation(key));
                    }
                    return list;
                }
                return list;
            }
            if(id in matterXP){
                for(key in DataModel.data){
                    if(DataModel.getMatter(DataModel.data.type) === id){
                        list.push(utilSimulation(key));
                    }
                }
                return list;
            }
            if(id in extractionRecipe){
                for(key in DataModel.data){
                    if(DataModel.data[key].pristine === id){
                        return [utilSimulation(key)];
                    }
                }
            }
            return list;
        }
    });
    
    
    api.Core.registerRecipeType("extraction_chamber", {
        contents: {
            icon: BlockID.extraction_chamber,
            drawing: [
                {type: "frame", x: 180, y: 100, width: 640, height: 160, bitmap: "dml_frame.blue", bg: Color.parseColor("#111111"), scale: 6},
                {type: "frame", x: 386, y: 156, width: 228, height: 48, bitmap: "dml_frame.dark", bg: Color.BLACK, scale: 6},
                {type: "bitmap", x: 392, y: 162, bitmap: "dml_scale.progress_rv", scale: 6}
            ],
            elements: {
                input0: {type: "slot", x: 230, y: 120, bitmap: "dml_slot.dark", size: 120},
                output0: {type: "slot", x: 654, y: 120, bitmap: "dml_slot.dark", size: 120}
            }
        },
        getList: function(id, data, isUsage){
            const list = [];
            let i = 0;
            if(isUsage){
                if(id in extractionRecipe){
                    for(i = 0; i < extractionRecipe[id].length; i++){
                        list.push({
                            input: [{id: id, count: 1, data: 0}],
                            output: [{id: extractionRecipe[id][i].id, count: extractionRecipe[id][i].count, data: extractionRecipe[id][i].data || 0}]
                        });
                    }
                    return list;
                }
            }
            for(let key in extractionRecipe){
            for(i = 0; i < extractionRecipe[key].length; i++){
                if(extractionRecipe[key][i].id === id && (extractionRecipe[key][i].data || 0) === (data === -1 ? 0 : data)){
                    list.push({
                        input: [{id: key - 0, count: 1, data: 0}],
                        output: [{id: id, count: extractionRecipe[key][i].count, data: data}]
                    });
                }
            }
            }
            return list;
        }
    });
    
});




