/*
BUILD INFO:
  dir: dev
  target: main.js
  files: 13
*/



// file: header.js

IMPORT("EnergyNet");
IMPORT("TileRender");
IMPORT("StorageInterface");
IMPORT("EnhancedRecipes");

const Color = android.graphics.Color;
const Bitmap = android.graphics.Bitmap;
const Canvas = android.graphics.Canvas;
const Paint = android.graphics.Paint;
const ColorFilter = android.graphics.PorterDuffColorFilter;
const PorterDuff = android.graphics.PorterDuff;
const Thread = java.lang.Thread;

const setLoadingTip = ModAPI.requireGlobal("MCSystem.setLoadingTip");
const NativeAPI = ModAPI.requireGlobal("requireMethodFromNativeAPI");

const InvSource = {
    get: NativeAPI("api.mod.util.InventorySource", "getSource"),
    set: NativeAPI("api.mod.util.InventorySource", "setSource")
};

const EU = EnergyTypeRegistry.assureEnergyType("Eu", 1);
const RF = EnergyTypeRegistry.assureEnergyType("RF", 0.25);

const groupEU = ICRender.getGroup("ic-wire");
const groupRF = ICRender.getGroup("rf-wire");
const groupPipe = ICRender.getGroup("item-pipe");


let player = 0;
Callback.addCallback("LevelLoaded", function(){
    player = Player.get();
});


const Cfg = {
    eu: __config__.getBool("supportEU"),
    rf: __config__.getBool("supportRF"),
    smooth: __config__.getBool("smoothAnimation"),
    formula: __config__.getBool("displayFormula"),
    decomposer: {
        cost: __config__.getNumber("decomposer.energyPerTick"),
        speed: __config__.getNumber("decomposer.maxOutputPerTick"),
        storage: __config__.getNumber("decomposer.energyCapacity")
    },
    synthesiser: {
        cost: __config__.getNumber("synthesiser.energyPerTick"),
        time: __config__.getNumber("synthesiser.ticksPerOperation"),
        storage: __config__.getNumber("synthesiser.energyCapacity")
    },
    fission: {
        cost: __config__.getNumber("fission.energyPerTick"),
        time: __config__.getNumber("fission.ticksPerOperation"),
        storage: __config__.getNumber("fission.energyCapacity")
    },
    fusion: {
        cost: __config__.getNumber("fusion.energyPerTick"),
        time: __config__.getNumber("fusion.ticksPerOperation"),
        storage: __config__.getNumber("fusion.energyCapacity")
    }
};


const ElemMeta = {};
const MolID = {};


const createBlock = function(namedID, name, texture, isRotation){
    const id = IDRegistry.genBlockID(namedID);
    Block[isRotation ? "createBlockWithRotation" : "createBlock"](namedID, [{name: name, texture: texture, inCreative: true}]);
    Block.setDestroyTime(id, 3);
    ToolAPI.registerBlockMaterial(id, "stone");
    return id;
};


const registerMachine = function(id, prototype){
    
    prototype.energyReceive = function(type, amount){
        const ratio = EnergyTypeRegistry.getValueRatio(type, "RF");
        const add = Math.min(amount * ratio, this.getEnergyStorage() - this.data.energy);
        this.data.energy += add;
        return add / ratio | 0;
    };

    TileEntity.registerPrototype(id, prototype);
    groupPipe.add(id, -1);

    if(Cfg.eu){
        EnergyTileRegistry.addEnergyTypeForId(id, EU);
        groupEU.add(id, -1);
    }
    if(Cfg.rf){
        EnergyTileRegistry.addEnergyTypeForId(id, RF);
        groupRF.add(id, -1);
    }

};


const ValidFunc = {
    element: function(id){
        return id === ItemID.chem_element;
    },
    output: function(){
        return false;
    }
};




// file: api/IconUtil.js

const IconUtil = {

    bitmaps: {
        elem_tube: FileTools.ReadImage(__dir__ + "texture-source/elem_tube.png"),
        elem_gas: FileTools.ReadImage(__dir__ + "texture-source/elem_gas.png"),
        elem_liquid: FileTools.ReadImage(__dir__ + "texture-source/elem_liquid.png"),
        elem_solid: FileTools.ReadImage(__dir__ + "texture-source/elem_solid.png"),
        mol_tube: FileTools.ReadImage(__dir__ + "texture-source/mol_tube.png"),
        mol_inside: FileTools.ReadImage(__dir__ + "texture-source/mol_inside.png"),
        ingot: FileTools.ReadImage(__dir__ + "texture-source/ingot.png")
    },

    genElement: function(symbol, color, type){
        const path = __dir__ + "res/items-opaque/element/chem_element" + symbol + ".png";
        if(FileTools.isExists(path)){
            return;
        }
        const bmp = new Bitmap.createBitmap(16, 16, Bitmap.Config.ARGB_8888);
        const cvs = new Canvas(bmp);
        const paint = new Paint();
        const font = new UI.Font(Color.WHITE, 1, 0.5);
        paint.setColorFilter(new ColorFilter(color, PorterDuff.Mode.SRC_IN));
        cvs.drawBitmap(this.bitmaps["elem_" + type], 0, 0, paint);
        cvs.drawBitmap(this.bitmaps.elem_tube, 0, 0, null);
        font.drawText(cvs, 0, 8, symbol, 8);
        this.writeImage(path, bmp);
    },
/*
    genMolecule: function(key, color1, color2){
        const path = __dir__ + "res/items-opaque/molecule/chem_" + key + ".png";
        if(FileTools.isExists(path)){
            return;
        }
        const bmp = new Bitmap.createBitmap(16, 16, Bitmap.Config.ARGB_8888);
        const cvs = new Canvas(bmp);
        const paint = new Paint();
        if(!color1 || !color2){
            const hash = new java.lang.String(key).hashCode();
            color1 = Color.rgb(new java.util.Random(hash).nextFloat(), new java.util.Random(hash).nextFloat() * 2, new java.util.Random(hash).nextFloat() * 3);
            color2 = Color.rgb(new java.util.Random(hash).nextFloat() * 4, new java.util.Random(hash).nextFloat() * 5, new java.util.Random(hash).nextFloat() * 6);
        }
        paint.setColorFilter(new ColorFilter(color1, PorterDuff.Mode.SRC_IN));
        cvs.drawBitmap(this.bitmaps.mol_pass1, 0, 0, paint);
        paint.setColorFilter(new ColorFilter(color2, PorterDuff.Mode.SRC_IN));
        cvs.drawBitmap(this.bitmaps.mol_pass2, 0, 0, paint);
        cvs.drawBitmap(this.bitmaps.mol_tube, 0, 0, null);
        this.writeImage(path, bmp);
    },
*/

    genMolecule: function(key, color){
        const path = __dir__ + "res/items-opaque/molecule/" + key + ".png";
        if(FileTools.isExists(path)){
            return;
        }
        const bmp = new Bitmap.createBitmap(16, 16, Bitmap.Config.ARGB_8888);
        const cvs = new Canvas(bmp);
        const paint = new Paint();
        paint.setColorFilter(new ColorFilter(color, PorterDuff.Mode.SRC_IN));
        cvs.drawBitmap(this.bitmaps.mol_inside, 0, 0, paint);
        cvs.drawBitmap(this.bitmaps.mol_tube, 0, 0, null);
        this.writeImage(path, bmp);
    },

    genIngot: function(key, color){
        const path = __dir__ + "res/items-opaque/ingot/ingot" + key + ".png";
        if(FileTools.isExists(path)){
            return;
        }
        const bmp = new Bitmap.createBitmap(16, 16, Bitmap.Config.ARGB_8888);
        const cvs = new Canvas(bmp);
        const paint = new Paint();
        paint.setColorFilter(new ColorFilter(color, PorterDuff.Mode.MULTIPLY));
        cvs.drawBitmap(this.bitmaps.ingot, 0, 0, paint);
        this.writeImage(path, bmp);
    },

    writeImage: function(path, bmp){
        setLoadingTip("[Minechemistry]: generating textures...");
        const file = new java.io.File(path);
        file.getParentFile().mkdirs();
        file.createNewFile();
        FileTools.WriteImage(path, bmp);
    }

};




// file: api/DecomposeRecipe.js

const DecomposeRecipe = {

    recipe: {},
    recipe_liq: {},

    MODE_NORMAL: 0,
    MODE_RANDOM: 1,
    MODE_WEIGHTED_RANDOM: 2,

    getCodeByItem: function(id, data){
        return data === -1 ? id + "" : id + ":" + data;
    },

    getItemByCode: function(code){
        const array = code.split(":");
        return {id: array[0] - 0, data: array[1] - 0 || -1};
    },

    mapFunc: {
        normal: function(item){
            let format;
            switch(typeof item){
                case "string": format = {id: ItemID.chem_element, count: 1, data: ElemMeta[item]}; break;
                case "number": format = {id: item, count: 1, data: 0}; break;
                case "object": format = typeof item.id === "string" ?
                    {id: ItemID.chem_element, count: item.count || 1, data: ElemMeta[item.id]}:
                    {id: item.id, count: item.count || 1, data: item.data || 0};
                break;
            }
            return format;
        },
        random: function(item){
            return typeof item.id === "string" ?
                {id: ItemID.chem_element, count: item.count || 1, data: ElemMeta[item.id], weight: item.weight}:
                {id: item.id, count: item.count || 1, data: item.data || 0, weight: item.weight};
        }
    },

    add: function(source, list, option){
        option = option || {};
        const data = {
            mode: option.mode || 0,
            rolls: option.rolls || 1,
            list: list.map(this.mapFunc[option.mode ? "random" : "normal"])
        };
        if(data.mode === this.MODE_WEIGHTED_RANDOM){
            data.totalWeight = list.reduce(function(acc, item){return acc + item.weight}, 0);
        }
        switch(typeof source){
            case "object": this.recipe[this.getCodeByItem(source.id, source.data || 0)] = data; break;
            case "number": this.recipe[this.getCodeByItem(source, -1)] = data; break;
            case "string": this.recipe_liq[source] = data; break;
        }
        if(option.reversible && data.rolls === 1){
            const pattern = {};
            for(let i = 0; i < list.length; i++){
                pattern[i] = list[i];
            }
            SynthesisRecipe.add(source, pattern);
        }
    },

    addAll: function(sources, list, option){
        for(let i = 0; i < sources.length; i++){
            this.add(sources[i], list, option ? {
                mode: option.mode,
                rolls: option.rolls ? option.rolls[i] || option.rolls : undefined,
                reversible: option.reversible
            } : undefined);
        }
    },

    validLiquid: function(liquid){
        return liquid in this.recipe_liq;
    },

    getRecipe: function(id, data){
        return this.recipe[this.getCodeByItem(id, data)] || this.recipe[this.getCodeByItem(id, -1)];
    },

    getLiquidRecipe: function(liquid){
        return this.recipe_liq[liquid];
    },

    getMatchCode: function(id, data){
        let code = this.getCodeByItem(id, data);
        if(code in this.recipe)return code;
        code = this.getCodeByItem(id, -1);
        if(code in this.recipe)return code;
    },

    getResult: function(id, data){
        const recipe = typeof id === "string" ? this.getLiquidRecipe(id) : this.getRecipe(id, data);
        if(!recipe){
            return null;
        }
        if(recipe.mode !== this.MODE_NORMAL){
            const result = [];
            let j = random = current = 0;
            for(let i = 0; i < recipe.rolls; i++){
                if(recipe.mode === this.MODE_RANDOM){
                    for(j = 0; j < recipe.list.length; j++){
                        Math.random() < recipe.list[j].weight && result.push({id: recipe.list[j].id, count: recipe.list[j].count, data: recipe.list[j].data});
                    }
                    break;
                }
                random = recipe.totalWeight * Math.random();
                for(j = 0; j < recipe.list.length; j++){
                    current += recipe.list[j].weight;
                    if(random < current){
                        recipe.list[j].id !== 0 && result.push({id: recipe.list[j].id, count: recipe.list[j].count, data: recipe.list[j].data});
                        break;
                    }
                }
            }
            return result;
        }
        return recipe.list.map(function(item){
            return {id: item.id, count: item.count * recipe.rolls, data: item.data};
        });
    },

    compileRecipeForRV: function(key){
        const recipe = this.recipe[key];
        const source = this.getItemByCode(key);
        return {
            input: [{id: source.id, count: 1, data: source.data}],
            output: recipe.list,
            isRandom: recipe.mode !== this.MODE_NORMAL,
            rolls: recipe.rolls
        };
    }

};


Callback.addCallback("PreLoaded", function(){

    DecomposeRecipe.add("water", [
        {id: MolID.water, count: 16}
    ]);

    DecomposeRecipe.add("milk", [
        {id: MolID.protein, count: 2},
        {id: MolID.water, count: 16},
        MolID.sucrose
    ]);

    DecomposeRecipe.addAll(["lava", VanillaBlockID.magma], [
        {id: "Mn", count: 2, weight: 10},
        {id: MolID.aluminum_oxide, weight: 5},
        {id: MolID.magnesium_oxide, weight: 20},
        {id: MolID.potassium_chloride, weight: 2},
        {id: MolID.silicon_dioxide, count: 2, weight: 10},
        {id: "S", count: 2, weight: 20},
        {id: MolID.iron_oxide, weight: 10},
        {id: "Pb", count: 2, weight: 8},
        {id: "F", weight: 4},
        {id: "Br", weight: 4}
    ], {mode: 2, rolls: 2});

    DecomposeRecipe.add(VanillaItemID.iron_ingot, [
        {id: "Fe", count: 16}
    ], {reversible: true});

    DecomposeRecipe.add(VanillaItemID.gold_ingot, [
        {id: "Au", count: 16}
    ], {reversible: true});

    DecomposeRecipe.addAll([VanillaBlockID.log, VanillaBlockID.log2], [
        MolID.cellulose
    ]);
    
    DecomposeRecipe.add(VanillaBlockID.planks, [
        {id: MolID.cellulose, weight: 0.25}
    ], {mode: 1});
    
    DecomposeRecipe.addAll([VanillaBlockID.leaves, VanillaBlockID.leaves2], [
        {id: MolID.cellulose, weight: 0.05}
    ], {mode: 1});
    
    DecomposeRecipe.add(VanillaBlockID.cobblestone, [
        {id: 0, weight: 700},
        {id: "Al", weight: 2},
        {id: "Fe", weight: 4},
        {id: "Au", weight: 1.5},
        {id: MolID.silicon_dioxide, weight: 10},
        {id: "Dy", weight: 1},
        {id: "Zr", weight: 1.5},
        {id: "Ni", weight: 1},
        {id: "Ga", weight: 1},
        {id: "W", weight: 1}
    ], {mode: 2});

    DecomposeRecipe.add({id: VanillaBlockID.stone}, [
        {id: 0, weight: 20},
        {id: "Al", weight: 2},
        {id: "Fe", weight: 4},
        {id: "Au", weight: 1.5},
        {id: MolID.silicon_dioxide, weight: 20},
        {id: "Dy", weight: 0.5},
        {id: "Zr", weight: 1.25},
        {id: "Ni", weight: 1},
        {id: "Ga", weight: 1},
        {id: "W", weight: 1}
    ], {mode: 2});

    DecomposeRecipe.addAll([{id: VanillaBlockID.stone, data: 1}, {id: VanillaBlockID.stone, data: 2}], [
        {id: MolID.aluminum_oxide, weight: 5},
        {id: "Fe", weight: 2},
        {id: MolID.potassium_chloride, weight: 2},
        {id: MolID.silicon_dioxide, weight: 10},
        {id: "Tc", weight: 1},
        {id: "Mn", weight: 1.5},
        {id: "Ra", weight: 1.5}
    ], {mode: 2});

    DecomposeRecipe.addAll([{id: VanillaBlockID.stone, data: 3}, {id: VanillaBlockID.stone, data: 4}], [
        {id: MolID.aluminum_oxide, weight: 4},
        {id: "Fe", weight: 2},
        {id: MolID.potassium_chloride, weight: 4},
        {id: MolID.silicon_dioxide, weight: 10},
        {id: "In", weight: 1.5},
        {id: "Mn", weight: 2},
        {id: "Os", weight: 2},
        {id: "Sn", weight: 3}
    ], {mode: 2});

    DecomposeRecipe.addAll([{id: VanillaBlockID.stone, data: 5}, {id: VanillaBlockID.stone, data: 6}], [
        {id: MolID.aluminum_oxide, weight: 4},
        {id: "Fe", weight: 3},
        {id: MolID.potassium_chloride, weight: 4},
        {id: MolID.silicon_dioxide, weight: 10},
        {id: "Pt", weight: 2},
        {id: "Ca", weight: 4}
    ], {mode: 2});

    DecomposeRecipe.add(VanillaBlockID.chest, [
        {id: MolID.cellulose, count: 2}
    ]);

    DecomposeRecipe.add(VanillaBlockID.crafting_table, [
        MolID.cellulose
    ]);

    DecomposeRecipe.add(VanillaBlockID.web, [
        {id: MolID.protein, count: 2}
    ]);

    DecomposeRecipe.add(VanillaBlockID.tallgrass, [
        {id: MolID.cellulose, weight: 0.25}
    ], {mode: 1});

    DecomposeRecipe.add(VanillaItemID.flint, [
        {id: MolID.silicon_dioxide, count: 3}
    ]);

    //cocoa
    DecomposeRecipe.add({id: VanillaItemID.dye, data: 3}, [
        {id: MolID.caffeine, weight: 1},
        {id: MolID.cellulose, weight: 0.5},
    ], {mode: 1});

    DecomposeRecipe.add(VanillaItemID.apple, [
        MolID.sucrose,
        MolID.cellulose
    ]);

    DecomposeRecipe.add(VanillaBlockID.coal_ore, [
        {id: "C", count: 32},
        {id: "S", count: 8},
    ]);

    DecomposeRecipe.addAll([VanillaItemID.coal, VanillaBlockID.coal_block], [
        {id: "C", count: 8}
    ], {rolls: [1, 9]});

    DecomposeRecipe.add(VanillaBlockID.wooden_slab, [
        {id: MolID.cellulose, weight: 0.12}
    ], {mode: 1});

    DecomposeRecipe.addAll([VanillaItemID.slime_ball, VanillaBlockID.slime], [
        {id: MolID.protein, count: 2},
        {id: MolID.sucrose, count: 2}
    ], {rolls: [1, 9], reversible: true});

    DecomposeRecipe.add(VanillaItemID.stick, [
        {id: MolID.cellulose, weight: 0.1}
    ], {mode: 1});

    DecomposeRecipe.add(VanillaItemID.ender_pearl, [
        {id: "Si", count: 16},
        {id: "Hg", count: 16},
        {id: "Nd", count: 16}
    ], {reversible: true});

    DecomposeRecipe.add(VanillaItemID.wheat_seeds, [
        {id: MolID.cellulose, weight: 0.1}
    ], {mode: 1});

    DecomposeRecipe.add(VanillaBlockID.netherrack, [
        {id: 0, weight: 15},
        {id: MolID.zinc_oxide, weight: 2},
        {id: "Au", weight: 1},
        {id: "P", weight: 1},
        {id: "S", weight: 3},
        {id: "Ge", weight: 1},
        {id: "Si", weight: 4}
    ], {mode: 2});

    DecomposeRecipe.addAll([VanillaItemID.netherbrick, VanillaBlockID.nether_brick], [
        {id: 0, weight: 5},
        {id: MolID.zinc_oxide, weight: 2},
        {id: "Au", weight: 1},
        {id: "P", weight: 1},
        {id: "S", weight: 4},
        {id: "Ge", weight: 1},
        {id: "Si", weight: 4}
    ], {mode: 2, rolls: [1, 4]});

    DecomposeRecipe.add(VanillaItemID.spider_eye, [
        {id: MolID.beta_carotene, count: 2},
        {id: MolID.protein, count: 2}
    ]);

    DecomposeRecipe.add(VanillaItemID.horsearmoriron, [
        {id: "Fe", count: 64}
    ]);

    DecomposeRecipe.add(VanillaItemID.horsearmorgold, [
        {id: "Au", count: 64}
    ]);

    DecomposeRecipe.add(VanillaItemID.horsearmordiamond, [
        {id: "C", count: 2048}
    ]);

    DecomposeRecipe.add(VanillaBlockID.wool, [
        MolID.protein,
        MolID.triglyceride
    ]);

    DecomposeRecipe.add(VanillaBlockID.carpet, [
        {id: MolID.protein, weight: 2/3},
        {id: MolID.triglyceride, weight: 2/3}
    ], {mode: 1});

    DecomposeRecipe.add({id: VanillaBlockID.anvil}, [
        {id: "Fe", count: 496}
    ]);

    DecomposeRecipe.add(VanillaBlockID.iron_door, [
        {id: "Fe", count: 32}
    ]);

    DecomposeRecipe.add(VanillaBlockID.iron_trapdoor, [
        {id: "Fe", count: 64}
    ]);

    DecomposeRecipe.addAll([VanillaItemID.emerald, VanillaBlockID.emerald_ore, VanillaBlockID.emerald_block], [
        {id: MolID.beryl, count: 8},
        {id: "Cr", count: 8},
        {id: "V", count: 4}
    ], {rolls: [1, 2, 9], reversible: true});

    DecomposeRecipe.addAll([VanillaItemID.diamond, VanillaBlockID.diamond_ore, VanillaBlockID.diamond_block], [
        {id: "C", count: 512}
    ], {rolls: [1, 2, 9]});

    DecomposeRecipe.addAll([VanillaBlockID.end_stone, VanillaBlockID.end_bricks], [
        {id: "Hg", weight: 50},
        {id: "Nd", weight: 5},
        {id: MolID.silicon_dioxide, weight: 250},
        {id: "Li", weight: 50},
        {id: "Th", weight: 2}
    ], {mode: 2});

    DecomposeRecipe.addAll([VanillaBlockID.snow, VanillaBlockID.ice], [
        {id: MolID.water, count: 16}
    ]);

    DecomposeRecipe.addAll([VanillaItemID.record_11, VanillaItemID.record_13, VanillaItemID.record_blocks, VanillaItemID.record_cat, VanillaItemID.record_chirp< VanillaItemID.record_far, VanillaItemID.record_mall, VanillaItemID.record_mellohi, VanillaItemID.record_stal, VanillaItemID.record_strad, VanillaItemID.record_wait, VanillaItemID.record_ward], [
        {id: MolID.polyvinyl_chloride, count: 64},
        {id: "Pb", count: 16},
        {id: "Cd", count: 16}
    ]);

    DecomposeRecipe.add(VanillaBlockID.jukebox, [
        {id: "C", count: 512},
        {id: MolID.cellulose, count: 2}
    ]);

    DecomposeRecipe.addAll([VanillaBlockID.dirt, VanillaBlockID.grass], [
        {id: MolID.water, weight: 30},
        {id: MolID.silicon_dioxide, weight: 50},
        {id: MolID.cellulose, weight: 10},
        {id: MolID.kaolinite, weight: 10}
    ], {mode: 2});

    DecomposeRecipe.addAll([VanillaBlockID.sapling, VanillaBlockID.vine, VanillaBlockID.waterlily], [
        {id: MolID.cellulose, weight: 0.25}
    ], {mode: 1});

    DecomposeRecipe.add(VanillaBlockID.pumpkin, [
        {id: MolID.cucurbitacin, weight: 0.5}
    ], {mode: 1});

    DecomposeRecipe.addAll([VanillaItemID.quartz, VanillaBlockID.quartz_ore, VanillaBlockID.quartz_block], [
        {id: "Ba", count: 16},
        {id: MolID.silicon_dioxide, count: 32}
    ], {rolls: [1, 2, 4], reversible: true});

    DecomposeRecipe.add(VanillaBlockID.brown_mushroom, [
        MolID.cellulose,
        MolID.psilocybin
    ], {reversible: true});

    DecomposeRecipe.add(VanillaBlockID.red_mushroom, [
        MolID.psilocybin,
        MolID.cellulose
    ], {reversible: true});

    DecomposeRecipe.add(VanillaBlockID.soul_sand, [
        "Tm",
        {id: MolID.silicon_dioxide, count: 4}
    ], {reversible: true});

    DecomposeRecipe.addAll([VanillaBlockID.reeds, VanillaItemID.sugar], [
        MolID.sucrose
    ]);

    DecomposeRecipe.addAll([{id: VanillaBlockID.sand, data: 0}, VanillaBlockID.sandstone], [
        {id: MolID.silicon_dioxide, count: 4, weight: 1},
        {id: "Au", weight: 0.01}
    ], {mode: 1, rolls: [1, 4]});

    DecomposeRecipe.addAll([{id: VanillaBlockID.sand, data: 1}, VanillaBlockID.red_sandstone], [
        {id: MolID.silicon_dioxide, count: 4, weight: 1},
        {id: MolID.iron_oxide, weight: 0.01}
    ], {mode: 1, rolls: [1, 4]});

    DecomposeRecipe.add(VanillaItemID.gunpowder, [
        {id: MolID.potassium_nitrate, count: 2},
        {id: "S", count: 8},
        {id: "C", count: 8}
    ], {reversible: true});

    DecomposeRecipe.add(VanillaItemID.blaze_powder, [
        {id: "Ge", count: 8},
        {id: "C", count: 8},
        {id: "S", count: 8}
    ], {reversible: true});

    DecomposeRecipe.addAll([VanillaBlockID.nether_wart, VanillaBlockID.nether_wart_block], [
        MolID.cellulose,
        {id: "Ge", count: 4},
        {id: "Se", count: 4}
    ], {rolls: [1, 9], reversible: true});

    DecomposeRecipe.addAll([VanillaItemID.glowstone_dust, VanillaBlockID.glowstone], [
        {id: "P", count: 4}
    ], {rolls: [1, 4], reversible: true});

    DecomposeRecipe.add(VanillaBlockID.iron_bars, [
        {id: "Fe", count: 6}
    ]);

    DecomposeRecipe.addAll([{id: VanillaItemID.dye, data: 4}, VanillaBlockID.lapis_ore, VanillaBlockID.lapis_block], [
        {id: "Na", count: 6},
        {id: "Ca", count: 2},
        {id: "Al", count: 6},
        {id: "Si", count: 6},
        {id: "O", count: 24},
        {id: "S", count: 2}
    ], {rolls: [1, 4, 9], reversible: true});

    DecomposeRecipe.add(VanillaItemID.string, [
        {id: MolID.protein, weight: 0.5}
    ], {mode: 1});

    DecomposeRecipe.addAll([VanillaBlockID.wheat, VanillaTileID.wheat], [
        {id: MolID.starch, weight: 0.05},
        {id: MolID.cellulose, weight: 0.25}
    ], {mode: 1, rolls: [1, 9]});

    DecomposeRecipe.add(VanillaBlockID.melon_block, [
        {id: MolID.cucurbitacin, weight: 0.5},
        {id: MolID.water, count: 4, weight: 0.01},
        {id: MolID.sucrose, count: 2, weight: 0.01}
    ], {mode: 1});

    DecomposeRecipe.add(VanillaBlockID.cactus, [
        {id: MolID.cellulose, weight: 1},
        {id: MolID.mescaline, weight: 0.5}
    ], {mode: 1, reversible: true});

    DecomposeRecipe.add(VanillaBlockID.gravel, [
        MolID.silicon_dioxide
    ]);

    DecomposeRecipe.addAll([VanillaItemID.potato, VanillaItemID.baked_potato], [
        {id: MolID.starch, weight: 0.1},
        {id: "K", count: 5, weight: 0.25}
    ], {mode: 1});

    DecomposeRecipe.addAll([VanillaItemID.redstone, VanillaBlockID.redstone_ore, VanillaBlockID.redstone_block], [
        MolID.iron_oxide,
        MolID.strontium_carbonate
    ], {rolls: [1, 4, 9], reversible: true});

    DecomposeRecipe.addAll([VanillaItemID.beef, VanillaItemID.cooked_beef, VanillaItemID.porkchop, VanillaItemID.cooked_porkchop, VanillaItemID.chicken, VanillaItemID.cooked_chicken, VanillaItemID.muttonraw, VanillaItemID.muttoncooked, VanillaItemID.rabbit, VanillaItemID.cooked_rabbit], [
        {id: MolID.protein, count: 4}
    ]);

    DecomposeRecipe.addAll([VanillaItemID.fish, VanillaItemID.cooked_fish, VanillaItemID.clownfish], [
        {id: MolID.protein, count: 4},
        {id: "Se", count: 2}
    ]);

    DecomposeRecipe.addAll([VanillaItemID.salmon, VanillaItemID.cooked_salmon], [
        {id: MolID.protein, count: 4},
        {id: "Se", count: 4}
    ]);

    DecomposeRecipe.add(VanillaItemID.pufferfish, [
        {id: MolID.protein, count: 4},
        {id: MolID.potassium_cyanide, count: 4}
    ]);

    DecomposeRecipe.add({id: VanillaBlockID.sponge}, [
        {id: MolID.kaolinite, count: 8},
        {id: MolID.calcium_carbonate, count: 8}
    ], {reversible: true});

    DecomposeRecipe.addAll([VanillaItemID.leather, VanillaItemID.rotten_flesh], [
        {id: MolID.protein, count: 3}
    ]);

    DecomposeRecipe.add(VanillaItemID.feather, [
        {id: MolID.protein, count: 2}
    ]);

    DecomposeRecipe.addAll([{id: VanillaItemID.dye, data: 15}, VanillaBlockID.bone_block], [
        {id: MolID.hydroxylapatite, weight: 0.5}
    ], {mode: 1, rolls: [1, 9]});

    DecomposeRecipe.add(VanillaItemID.egg, [
        {id: MolID.calcium_carbonate, count: 8},
        {id: MolID.protein, count: 2}
    ], {reversible: true});

    DecomposeRecipe.add(VanillaItemID.carrot, [
        {id: MolID.beta_carotene, weight: 0.2}
    ], {mode: 1});

    //red
    DecomposeRecipe.add({id: VanillaItemID.dye, data: 1}, [
        {id: MolID.mercury_sulfide, count: 4}
    ], {reversible: true});

    //pink
    DecomposeRecipe.add({id: VanillaItemID.dye, data: 9}, [
        {id: MolID.arsenic_sulfide, count: 4}
    ], {reversible: true});

    //green
    DecomposeRecipe.add({id: VanillaItemID.dye, data: 2}, [
        {id: MolID.nickel_chloride, count: 4}
    ], {reversible: true});

    //lime
    DecomposeRecipe.add({id: VanillaItemID.dye, data: 10}, [
        {id: MolID.cadmium_sulfide, count: 2},
        {id: MolID.chromium_oxide, count: 2}
    ], {reversible: true});

    //purple
    DecomposeRecipe.add({id: VanillaItemID.dye, data: 5}, [
        {id: MolID.potassium_permanganate, count: 4}
    ], {reversible: true});

    //yellow
    DecomposeRecipe.add({id: VanillaItemID.dye, data: 11}, [
        {id: MolID.lead_iodide, count: 4}
    ], {reversible: true});

    //orange
    DecomposeRecipe.add({id: VanillaItemID.dye, data: 14}, [
        {id: MolID.potassium_dichromate, count: 4}
    ], {reversible: true});

    //black
    DecomposeRecipe.add({id: VanillaItemID.dye, data: 0}, [
        {id: MolID.titanium_oxide, count: 4}
    ], {reversible: true});

    //gray
    DecomposeRecipe.add({id: VanillaItemID.dye, data: 8}, [
        {id: MolID.barium_sulfate, count: 4}
    ], {reversible: true});

    //magenta
    DecomposeRecipe.add({id: VanillaItemID.dye, data: 13}, [
        {id: MolID.han_purple, count: 4}
    ], {reversible: true});

    //light blue
    DecomposeRecipe.add({id: VanillaItemID.dye, data: 12}, [
        {id: MolID.cobalt_aluminate, count: 2},
        {id: MolID.antimony_trioxide, count: 2}
    ], {reversible: true});

    //light gray
    DecomposeRecipe.add({id: VanillaItemID.dye, data: 7}, [
        {id: MolID.magnesium_sulfate, count: 4}
    ], {reversible: true});

    //cyan
    DecomposeRecipe.add({id: VanillaItemID.dye, data: 6}, [
        {id: MolID.copper_chloride, count: 4}
    ], {reversible: true});

    //witheske
    DecomposeRecipe.add({id: VanillaBlockID.skull, data: 1}, [
        {id: MolID.hydroxylapatite, count: 8},
        {id: "Md", count: 32}
    ]);

    DecomposeRecipe.add(VanillaBlockID.purpur_block, [
        {id: MolID.silicon_dioxide, count: 4, weight: 1},
        {id: "Lu", weight: 0.5}
    ], {mode: 1});

    DecomposeRecipe.addAll([VanillaItemID.clay_ball, VanillaBlockID.clay], [
        MolID.kaolinite
    ], {rolls: [1, 4]});

    DecomposeRecipe.add(VanillaBlockID.beetroot, [
        {id: MolID.sucrose, weight: 1},
        {id: MolID.iron_oxide, weight: 0.5}
    ], {mode: 1});

    DecomposeRecipe.add(VanillaItemID.bone, [
        {id: MolID.hydroxylapatite, count: 3, weight: 0.5}
    ], {mode: 1, reversible: true});

    DecomposeRecipe.add(VanillaBlockID.obsidian, [
        {id: MolID.magnesium_oxide, count: 8},
        {id: MolID.potassium_chloride, count: 8},
        {id: MolID.aluminum_oxide, count: 8},
        {id: MolID.silicon_dioxide, count: 24}
    ], {reversible: true});

});




// file: api/SynthesisRecipe.js

const SynthesisRecipe = {

    recipe: [],

    add: function(result, pattern){
        for(let key in pattern){
            switch(typeof pattern[key]){
                case "string": pattern[key] = {id: ItemID.chem_element, count: 1, data: ElemMeta[pattern[key]]}; break;
                case "number": pattern[key] = {id: pattern[key], count: 1, data: 0}; break;
                case "object": pattern[key] = typeof pattern[key].id === "string" ?
                    {id: ItemID.chem_element, count: pattern[key].count || 1, data: ElemMeta[pattern[key].id]} :
                    {id: pattern[key].id, count: pattern[key].count || 1, data: pattern[key].data || 0};
                break;
            }
        }
        this.recipe.push({
            result: {id: result.id || result, count: result.count || 1, data: result.data || 0},
            pattern: pattern
        });
    },

    getResult: function(container){
        const find = this.recipe.find(function(recipe){
            let slot;
            for(let i = 0; i < 9; i++){
                slot = container.getSlot("slotPattern" + i);
                if(i in recipe.pattern){
                    if(slot.id !== recipe.pattern[i].id || slot.count !== recipe.pattern[i].count || slot.data !== recipe.pattern[i].data){
                        return false;
                    }
                }
                else{
                    if(slot.id !== 0){
                        return false;
                    }
                }
            }
            return true;
        });
        return find ? find.result : undefined;
    },

    getPattern: function(result){
        const find = this.recipe.find(function(recipe){
            return result.id === recipe.id && result.data === recipe.data;
        });
        return find ? find.pattern : undefined;
    },

    compileRecipeForRV: function(recipe){
        const input = [];
        for(let key in recipe.pattern){
            input[key - 0] = recipe.pattern[key];
        }
        return {
            input: input,
            output: [recipe.result]
        };
    }

};


Callback.addCallback("PreLoaded", function(){

    SynthesisRecipe.add({id: VanillaItemID.coal, data: 0}, {
        1: {id: "C", count: 8}
    });

    SynthesisRecipe.add({id: VanillaItemID.coal, data: 1}, {
        2: {id: "C", count: 8}
    });

    SynthesisRecipe.add(VanillaBlockID.glowstone, {
        1: {id: "P", count: 16}
    });

    SynthesisRecipe.add(VanillaItemID.diamond, {
        0: {id: "C", count: 64},
        1: {id: "C", count: 64},
        2: {id: "C", count: 64},
        3: {id: "C", count: 64},
        5: {id: "C", count: 64},
        6: {id: "C", count: 64},
        7: {id: "C", count: 64},
        8: {id: "C", count: 64}
    });

    SynthesisRecipe.add(VanillaBlockID.sand, {
        8: {id: MolID.silicon_dioxide, count: 4}
    });

    SynthesisRecipe.add({id: VanillaBlockID.cobblestone, count: 2}, {
        0: MolID.silicon_dioxide
    });

    SynthesisRecipe.add({id: VanillaBlockID.stone, data: 0}, {
        1: MolID.silicon_dioxide
    });

    SynthesisRecipe.add(VanillaBlockID.clay, {
        1: {id: MolID.kaolinite, count: 4}
    });

    SynthesisRecipe.add({id: VanillaBlockID.dirt, count: 4}, {
        0: MolID.water,
        1: MolID.cellulose,
        2: MolID.kaolinite
    });

    SynthesisRecipe.add({id: VanillaBlockID.mycelium, count: 4}, {
        5: MolID.psilocybin,
        6: MolID.water,
        7: MolID.cellulose,
        8: MolID.kaolinite
    });

    SynthesisRecipe.add(VanillaItemID.feather, {
        5: {id: MolID.protein, count: 2}
    });

    SynthesisRecipe.add(VanillaItemID.spider_eye, {
        1: {id: MolID.beta_carotene, count: 2},
        2: {id: MolID.protein, count: 2}
    });

    SynthesisRecipe.add(VanillaBlockID.sponge, {
        1: {id: MolID.calcium_carbonate, count: 8},
        2: {id: MolID.kaolinite, count: 8}
    });

    SynthesisRecipe.add({id: VanillaBlockID.grass, count: 4}, {
        3: MolID.water,
        4: MolID.cellulose,
        5: MolID.kaolinite
    });

    SynthesisRecipe.add(VanillaBlockID.gravel, {
        2: MolID.silicon_dioxide
    });

    //water bucket
    SynthesisRecipe.add({id: VanillaItemID.bucket, data: 8}, {
        4: {id: MolID.water, count: 16},
        7: VanillaItemID.bucket
    });

    //milk bucket
    SynthesisRecipe.add({id: VanillaItemID.bucket, data: 1}, {
        3: {id: MolID.protein, count: 2},
        4: {id: MolID.water, count: 16},
        5: MolID.sucrose,
        7: VanillaItemID.bucket
    });

    SynthesisRecipe.add(VanillaBlockID.redstone_block, {
        3: {id: MolID.iron_oxide, count: 9},
        4: {id: MolID.strontium_carbonate, count: 9}
    });

    SynthesisRecipe.add({id: VanillaItemID.string, count: 4}, {
        1: {id: MolID.protein, count: 2}
    });

    SynthesisRecipe.add(VanillaBlockID.wool, {
        6: MolID.protein,
        7: MolID.triglyceride
    });

    SynthesisRecipe.add(VanillaItemID.carrot, {
        3: MolID.cellulose,
        4: MolID.beta_carotene
    });

    SynthesisRecipe.add(VanillaBlockID.reeds, {
        3: MolID.cellulose,
        4: MolID.sucrose
    });

    //granite
    SynthesisRecipe.add({id: VanillaBlockID, data: 1}, {
        3: MolID.silicon_dioxide
    });

    //diorite
    SynthesisRecipe.add({id: VanillaBlockID, data: 3}, {
        4: MolID.silicon_dioxide
    });

    //andesite
    SynthesisRecipe.add({id: VanillaBlockID, data: 5}, {
        5: MolID.silicon_dioxide
    });

    SynthesisRecipe.add(VanillaItemID.flint, {
        7: {id: MolID.silicon_dioxide, count: 3}
    });

    SynthesisRecipe.add(VanillaItemID.potato, {
        0: MolID.starch,
        1: {id: "K", count: 4}
    });

    SynthesisRecipe.add(VanillaItemID.apple, {
        1: MolID.cellulose,
        4: MolID.sucrose
    });

    SynthesisRecipe.add(VanillaItemID.wheat_seeds, {
        1: MolID.triglyceride,
        3: MolID.cellulose
    });

    SynthesisRecipe.add(VanillaItemID.pumpkin_seeds, {
        1: MolID.triglyceride,
        4: MolID.cellulose
    });

    SynthesisRecipe.add(VanillaItemID.melon_seeds, {
        1: MolID.triglyceride,
        5: MolID.cellulose
    });

    SynthesisRecipe.add(VanillaItemID.beetroot_seeds, {
        1: MolID.triglyceride,
        6: MolID.cellulose,
        7: MolID.iron_oxide
    });

    SynthesisRecipe.add(VanillaBlockID.beetroot, {
        1: MolID.sucrose,
        2: MolID.iron_oxide
    });

    for(let i = 0; i < 6; i++){
        let pattern_sapling = {};
        let pattern_log = {};
        pattern_sapling[i] = "O";
        pattern_sapling[i + 1] = {id: MolID.cellulose, count: 2};
        pattern_log[i] = MolID.cellulose;
        SynthesisRecipe.add({id: VanillaBlockID.sapling, data: i}, pattern_sapling);
        SynthesisRecipe.add({id: i < 4 ? VanillaBlockID.log : VanillaBlockID.log2, data: i & 3}, pattern_log);
    }

    SynthesisRecipe.add(VanillaItemID.snowball, {
        6: {id: MolID.water, count: 4}
    });

    SynthesisRecipe.add(VanillaBlockID.snow, {
        7: {id: MolID.water, count: 16}
    });

    SynthesisRecipe.add(VanillaBlockID.ice, {
        8: {id: MolID.water, count: 16}
    });

    //bone meal
    SynthesisRecipe.add({id: VanillaItemID.dye, count: 3, data: 15}, {
        2: {id: MolID.hydroxylapatite, count: 2}
    });

    SynthesisRecipe.add(VanillaItemID.leather, {
        4: {id: MolID.protein, count: 3}
    });

    SynthesisRecipe.add(VanillaItemID.rotten_flesh, {
        7: {id: MolID.protein, count: 3}
    });

    SynthesisRecipe.add(VanillaItemID.netherstar, {
        0: {id: "Lu", count: 64},
        1: {id: "H", count: 64},
        2: {id: "Ti", count: 64},
        3: {id: "H", count: 64},
        4: {id: "H", count: 64},
        5: {id: "H", count: 64},
        6: {id: "Dy", count: 64},
        7: {id: "H", count: 64},
        8: {id: "Md", count: 64}
    });

});




// file: item/elements.js

const ElementRegistry = {

    maxAtomicNumber: 118,

    data: [
        {symbol: "H", name: "Hydrogen", color: Color.BLUE, type: "gas"},
        {symbol: "He", name: "Helium", color: Color.RED, type: "gas"},
        {symbol: "Li", name: "Lithium", color: Color.rgb(40, 158, 86)},
        {symbol: "Be", name: "Beryllium", color: Color.rgb(184, 199, 224)},
        {symbol: "B", name: "Boron", color: Color.rgb(154, 176, 226)},
        {symbol: "C", name: "Carbon", color: Color.rgb(59, 60, 63)},
        {symbol: "N", name: "Nitrogen", color: Color.rgb(66, 123, 214), type: "gas"},
        {symbol: "O", name: "Oxygen", color: Color.rgb(229, 220, 156), type: "gas"},
        {symbol: "F", name: "Fluorine", color: Color.rgb(204, 186, 55), type: "gas"},
        {symbol: "Ne", name: "Neon", color: Color.rgb(87, 229, 16), type: "gas"},
        {symbol: "Na", name: "Sodium", color: Color.rgb(211, 198, 131)},
        {symbol: "Mg", name: "Magnesium", color: Color.rgb(237, 178, 173)},
        {symbol: "Al", name: "Aluminum", color: Color.rgb(247, 110, 69)},
        {symbol: "Si", name: "Silicon", color: Color.rgb(173, 178, 121)},
        {symbol: "P", name: "Phosphorus", color: Color.rgb(234, 98, 132)},
        {symbol: "S", name: "Sulfur", color: Color.rgb(145, 158, 6)},
        {symbol: "Cl", name: "Chlorine", color: Color.rgb(77, 102, 28), type: "gas"},
        {symbol: "Ar", name: "Argon", color: Color.rgb(119, 117, 255), type: "gas"},
        {symbol: "K", name: "Potassium", color: Color.rgb(198, 152, 95)},
        {symbol: "Ca", name: "Calcium", color: Color.rgb(219, 210, 199)},
        {symbol: "Sc", name: "Scandium", color: Color.rgb(252, 255, 99)},
        {symbol: "Ti", name: "Titanium", color: Color.rgb(99, 255, 115)},
        {symbol: "V", name: "Vanadium", color: Color.rgb(195, 186, 242)},
        {symbol: "Cr", name: "Chromium", color: Color.rgb(236, 237, 218)},
        {symbol: "Mn", name: "Manganese", color: Color.rgb(225, 186, 242)},
        {symbol: "Fe", name: "Iron", color: Color.GRAY},
        {symbol: "Co", name: "Cobalt", color: Color.rgb(17, 114, 198)},
        {symbol: "Ni", name: "Nickel", color: Color.rgb(198, 157, 162)},
        {symbol: "Cu", name: "Copper", color: Color.rgb(255, 154, 30)},
        {symbol: "Zn", name: "Zinc", color: Color.rgb(189, 196, 141)},
        {symbol: "Ga", name: "Gallium", color: Color.rgb(122, 20, 49)},
        {symbol: "Ge", name: "Germanium", color: Color.rgb(104, 172, 255)},
        {symbol: "As", name: "Arsenic", color: Color.rgb(62, 145, 76)},
        {symbol: "Se", name: "Selenium", color: Color.rgb(116, 62, 145)},
        {symbol: "Br", name: "Bromine", color: Color.rgb(77, 160, 0), type: "liquid"},
        {symbol: "Kr", name: "Krypton", color: Color.rgb(229, 151, 50), type: "gas"},
        {symbol: "Rb", name: "Rubidium", color: Color.rgb(15, 61, 40)},
        {symbol: "Sr", name: "Strontium", color: Color.rgb(206, 88, 24)},
        {symbol: "Y", name: "Yttrium", color: Color.rgb(206, 179, 24)},
        {symbol: "Zr", name: "Zirconium", color: Color.rgb(127, 80, 22)},
        {symbol: "Nb", name: "Niobium", color: Color.rgb(2, 29, 255)},
        {symbol: "Mo", name: "Molybdenum", color: Color.rgb(39, 0, 48)},
        {symbol: "Tc", name: "Technetium", color: Color.rgb(72, 170, 63)},
        {symbol: "Ru", name: "Ruthenium", color: Color.rgb(255, 240, 86)},
        {symbol: "Rh", name: "Rhodium", color: Color.rgb(255, 0, 80)},
        {symbol: "Pd", name: "Palladium", color: Color.rgb(0, 255, 169)},
        {symbol: "Ag", name: "Silver", color: Color.rgb(226, 217, 206)},
        {symbol: "Cd", name: "Cadmium", color: Color.rgb(160, 147, 115)},
        {symbol: "In", name: "Indium", color: Color.rgb(163, 230, 255)},
        {symbol: "Sn", name: "Tin", color: Color.rgb(132, 161, 206)},
        {symbol: "Sb", name: "Antimony", color: Color.rgb(193, 40, 58)},
        {symbol: "Te", name: "Tellurium", color: Color.rgb(39, 91, 26)},
        {symbol: "I", name: "Iodine", color: Color.rgb(62, 17, 63)},
        {symbol: "Xe", name: "Xenon", color: Color.rgb(196, 51, 204), type: "gas"},
        {symbol: "Cs", name: "Cesium", color: Color.rgb(255, 148, 0)},
        {symbol: "Ba", name: "Barium", color: Color.rgb(0, 219, 179)},
        {symbol: "La", name: "Lanthanum", color: Color.rgb(188, 253, 255)},
        {symbol: "Ce", name: "Cerium", color: Color.rgb(255, 254, 211)},
        {symbol: "Pr", name: "Praseodymium", color: Color.rgb(255, 161, 0)},
        {symbol: "Nd", name: "Neodymium", color: Color.rgb(38, 28, 11)},
        {symbol: "Pm", name: "Promethium", color: Color.rgb(105, 175, 123)},
        {symbol: "Sm", name: "Samarium", color: Color.rgb(73, 69, 73)},
        {symbol: "Eu", name: "Europium", color: Color.rgb(27, 211, 45)},
        {symbol: "Gd", name: "Gadolinium", color: Color.rgb(123, 50, 208)},
        {symbol: "Tb", name: "Terbium", color: Color.rgb(3, 37, 118)},
        {symbol: "Dy", name: "Dysprosium", color: Color.rgb(73, 0, 219)},
        {symbol: "Ho", name: "Holmium", color: Color.rgb(62, 255, 56)},
        {symbol: "Er", name: "Erbium", color: Color.rgb(194, 214, 215)},
        {symbol: "Tm", name: "Thulium", color: Color.rgb(234, 178, 178)},
        {symbol: "Yb", name: "Ytterbium", color: Color.rgb(255, 76, 219)},
        {symbol: "Lu", name: "Lutetium", color: Color.rgb(175, 0, 219)},
        {symbol: "Hf", name: "Hafnium", color: Color.rgb(69, 81, 233)},
        {symbol: "Ta", name: "Tantalum", color: Color.rgb(108, 142, 110)},
        {symbol: "W", name: "Tungsten", color: Color.rgb(120, 128, 140)},
        {symbol: "Re", name: "Rhenium", color: Color.rgb(199, 226, 89)},
        {symbol: "Os", name: "Osmium", color: Color.rgb(102, 129, 173)},
        {symbol: "Ir", name: "Iridium", color: Color.rgb(215, 242, 238)},
        {symbol: "Pt", name: "Platinum", color: Color.rgb(114, 202, 229)},
        {symbol: "Au", name: "Gold", color: Color.YELLOW},
        {symbol: "Hg", name: "Mercury", color: Color.rgb(160, 159, 157), type: "liquid"},
        {symbol: "Tl", name: "Thallium", color: Color.rgb(103, 50, 25)},
        {symbol: "Pb", name: "Lead", color: Color.rgb(186, 135, 193)},
        {symbol: "Bi", name: "Bismuth", color: Color.rgb(252, 171, 40)},
        {symbol: "Po", name: "Polonium", color: Color.rgb(138, 87, 85)},
        {symbol: "At", name: "Astatine", color: Color.rgb(120, 128, 213)},
        {symbol: "Rn", name: "Radon", color: Color.rgb(76, 66, 179), type: "gas"},
        {symbol: "Fr", name: "Francium", color: Color.rgb(81, 114, 198)},
        {symbol: "Ra", name: "Radium", color: Color.rgb(255, 181, 221)},
        {symbol: "Ac", name: "Actinium", color: Color.rgb(14, 182, 145)},
        {symbol: "Th", name: "Thorium", color: Color.rgb(56, 79, 75)},
        {symbol: "Pa", name: "Protactinium", color: Color.rgb(204, 233, 2)},
        {symbol: "U", name: "Uranium", color: Color.rgb(93, 178, 19)},
        {symbol: "Np", name: "Neptunium", color: Color.rgb(32, 20, 158)},
        {symbol: "Pu", name: "Plutonium", color: Color.rgb(211, 211, 209)},
        {symbol: "Am", name: "Americium", color: Color.rgb(237, 124, 75)},
        {symbol: "Cm", name: "Curium", color: Color.rgb(229, 110, 149)},
        {symbol: "Bk", name: "Berkelium", color: Color.rgb(44, 66, 49)},
        {symbol: "Cf", name: "Californium", color: Color.rgb(175, 182, 16)},
        {symbol: "Es", name: "Einsteinium", color: Color.rgb(192, 210, 95)},
        {symbol: "Fm", name: "Fermium", color: Color.rgb(74, 226, 83)},
        {symbol: "Md", name: "Mendelevium", color: Color.rgb(175, 176, 249)},
        {symbol: "No", name: "Nobelium", color: Color.rgb(94, 44, 52)},
        {symbol: "Lr", name: "Lawrencium", color: Color.rgb(216, 45, 92)},
        {symbol: "Rf", name: "Rutherfordium", color: Color.rgb(240, 61, 22)},
        {symbol: "Db", name: "Dubnium",  color: Color.rgb(11, 112, 108)},
        {symbol: "Sg", name: "Seaborgium", color: Color.rgb(158, 49, 74)},
        {symbol: "Bh", name: "Bohrium", color: Color.rgb(166, 251, 51)},
        {symbol: "Hs", name: "Hassium", color: Color.rgb(78, 5, 51)},
        {symbol: "Mt", name: "Meitnerium", color: Color.rgb(169, 138, 37)},
        {symbol: "Ds", name: "Darmstadtium", color: Color.rgb(14, 144, 190)},
        {symbol: "Rg", name: "Roentgenium", color: Color.rgb(150,90,90)},
        {symbol: "Cn", name: "Copernicium", color: Color.rgb(160,40,240)},
        {symbol: "Nh", name: "Nihonium", color: Color.rgb(220,250,180)},
        {symbol: "Fl", name: "Flerovium", color: Color.rgb(200,180,254)},
        {symbol: "Mc", name: "Moscovium", color: Color.rgb(250,180,200)},
        {symbol: "Lv", name: "Livermorium", color: Color.rgb(250,250,200)},
        {symbol: "Ts", name: "Tennessine", color: Color.rgb(150,250,250)},
        {symbol: "Og", name: "Oganesson", color: Color.rgb(250,150,250)}
    ],

    getData: function(meta){
        return this.data[meta - 1];
    },

    isExist: function(meta){
        return !!this.getData(meta);
    },

    setupItem: function(){

        IDRegistry.genItemID("chem_element");
        Item.createItem("chem_element", "element", {name: "chem_element"}, {isTech: true});
        //Item.addCreativeGroup("chem_element", "Elements", [ItemID.chem_element]);
        Item.setStackedByData(ItemID.chem_element, true);
        
        Item.registerNameOverrideFunction("chem_element", function(item){
            const data = ElementRegistry.getData(item.data) || {name: "Error"};
            return data.name + " [" + item.data + "]";
        });
        
        Item.registerIconOverrideFunction("chem_element", function(item){
            const data = ElementRegistry.getData(item.data);
            return {name: data ? "chem_element" + data.symbol : "stick", meta: 0};
        });

        for(let i = 1; i <= this.data.length; i++){
            Item.addToCreative(ItemID.chem_element, 64, i);
        }

        const invalidIngots = [1, 2, 6, 7, 8, 9, 10, 15, 16, 17, 18, 26, 35, 36, 53, 54, 79, 80, 86];
        let elem;
        let id = 0;

        for(let i = 0; i < this.data.length; i++){
            elem = this.data[i];
            ElemMeta[elem.symbol] = i + 1;
            IconUtil.genElement(elem.symbol, elem.color, elem.type || "solid");
            if(invalidIngots.indexOf(i + 1) === -1){
                id = IDRegistry.genItemID("ingot" + elem.name);
                Item.createItem("ingot" + elem.name, elem.name + " Ingot", {name: "ingot" + elem.name});
                Item.addCreativeGroup("chem_ingot", "Ingots", [id]);
                IconUtil.genIngot(elem.name, elem.color);
                DecomposeRecipe.add(id, [{id: elem.symbol, count: 16}], {reversible: true});
            }
        }

    }

};


ElementRegistry.setupItem();




// file: item/molecules.js

const MoleculeRegistry = {

    nameFunc: function(item, name){
        return name  + "\n§3" + MoleculeRegistry.getFormula(item.id);
    },

    register: function(key, color, components, option){
        option = option || {};
        const chem_key = "chem_" + key;
        const id = IDRegistry.genItemID(chem_key);
        Item.createItem(chem_key, key.split("_").map(function(text){
            switch(text){
                case "i": return "(I)";
                case "ii": return "(II)";
                case "iii": return "(III)";
                default: return text.charAt(0).toUpperCase() + text.slice(1);
            }
        }).join(" "), {name: chem_key});
        option.burn && Recipes.getFuelBurnDuration(id, option.burn);
        Item.addCreativeGroup("chem_molecule", "Molecules", [id]);
        Cfg.formula && Item.registerNameOverrideFunction(id, this.nameFunc);
        IconUtil.genMolecule(chem_key, Color.rgb(color[0], color[1], color[2]));
        MolID[key] = id;
        DecomposeRecipe.add(id, components);
        if(!option.noRecipe){
            const pattern = {};
            for(let i = 0; i < components.length; i++){
                pattern[i + (option.shift || 0)] = components[i];
            }
            SynthesisRecipe.add(id, pattern);
        }
    },

    isMolecule: function(id){
        for(let key in MolID){
            if(id === MolID[key]){
                return true;
            }
        }
        return false;
    },

    getFormula: function(id){
        const recipe = DecomposeRecipe.getRecipe(id);
        if(!recipe){
            return "";
        }
        return recipe.list.reduce(function(acc, item){
            let string = "";
            if(item.id === ItemID.chem_element){
                const data = ElementRegistry.getData(item.data);
                string = data ? data.symbol : "Error";
            }
            else if(MoleculeRegistry.isMolecule(item.id)){
                string = "(" + MoleculeRegistry.getFormula(item.id) + ")";
            }
            if(item.count > 1){
                string += item.count;
            }
            return acc + string;
        }, "");
    }

};


MoleculeRegistry.register("carbon_dioxide", [50, 200, 50], [
    "C",
    {id: "O", count: 2}
]);

MoleculeRegistry.register("cellulose", [121, 186, 88], [
    {id: "C", count: 6},
    {id: "H", count: 10},
    {id: "O", count: 5}
]);

MoleculeRegistry.register("silicon_dioxide", [165, 138, 45], [
    "Si",
    {id: "O", count: 2}
]);

MoleculeRegistry.register("nitrate", [198, 152, 95], [
    "N",
    {id: "O", count: 3}
]);

MoleculeRegistry.register("potassium_nitrate", [198, 152, 95], [
    "K",
    MolID.nitrate
]);

MoleculeRegistry.register("aluminum_oxide", [210, 226, 166], [
    {id: "Al", count: 2},
    {id: "O", count: 3}
]);

MoleculeRegistry.register("magnesium_oxide", [237, 178, 173], [
    "Mg",
    "O"
]);

MoleculeRegistry.register("potassium_chloride", [198, 152, 95], [
    "K",
    "Cl"
]);

MoleculeRegistry.register("sodium_chloride", [211, 198, 131], [
    "Na",
    "Cl"
]);

MoleculeRegistry.register("water", [17, 94, 192], [
    {id: "H", count: 2},
    "O"
]);

MoleculeRegistry.register("kaolinite", [164, 159, 218], [
    MolID.aluminum_oxide,
    {id: MolID.silicon_dioxide, count: 2},
    {id: MolID.water, count: 2}
]);

MoleculeRegistry.register("protein", [144, 108, 21], [
    {id: "C", count: 3},
    {id: "H", count: 7},
    "N",
    {id: "O", count: 2},
    "S"
]);

MoleculeRegistry.register("iron_oxide", [128, 128, 128], [
    {id: "Fe", count: 2},
    {id: "O", count: 3}
]);

MoleculeRegistry.register("sucrose", [224, 213, 210], [
    {id: "C", count: 12},
    {id: "H", count: 22},
    {id: "O", count: 11}
], {shift: 3});

MoleculeRegistry.register("carbonate", [97, 113, 90], [
    "C",
    {id: "O", count: 3}
]);

MoleculeRegistry.register("calcium_carbonate", [219, 210, 199], [
    "Ca",
    MolID.carbonate
]);

MoleculeRegistry.register("phosphate", [214, 210, 89], [
    "P",
    {id: "O", count: 4}
]);

MoleculeRegistry.register("hydroxide", [255, 174, 0], [
    "O",
    "H"
]);

MoleculeRegistry.register("hydroxylapatite", [255, 255, 255], [
    {id: "Ca", count: 5},
    {id: MolID.phosphate, count: 6},
    {id: MolID.hydroxide, count: 2}
]);

MoleculeRegistry.register("strontium_carbonate", [206, 88, 24], [
    "Sr",
    MolID.carbonate
]);

MoleculeRegistry.register("beryl", [177, 214, 191], [
    {id: "Be", count: 3},
    {id: "Al", count: 2},
    {id: "Si", count: 6},
    {id: "O", count: 18}
]);

MoleculeRegistry.register("starch", [252, 239, 166], [
    {id: "C", count: 12},
    {id: "H", count: 20},
    {id: "O", count: 10}
], {shift: 6});

MoleculeRegistry.register("cucurbitacin", [255, 200, 0], [
    {id: "C", count: 32},
    {id: "H", count: 44},
    {id: "O", count: 8}
], {noRecipe: true});

MoleculeRegistry.register("psilocybin", [80, 255, 80], [
    {id: "C", count: 12},
    {id: "H", count: 17},
    {id: "N", count: 2},
    {id: "O", count: 4},
    "P"
]);

MoleculeRegistry.register("zinc_oxide", [189, 196, 141], [
    "Zn",
    "O"
]);

MoleculeRegistry.register("cobalt_aluminate", [17, 114, 198], [
    "Co",
    {id: "Al", count: 2},
    {id: "O", count: 4}
]);

MoleculeRegistry.register("triglyceride", [200, 200, 90], [
    {id: "C", count: 18},
    {id: "H", count: 32},
    {id: "O", count: 2}
], {noRecipe: true});

MoleculeRegistry.register("lead_iodide", [186, 135, 193], [
    "Pb",
    {id: "I", count: 2}
]);

MoleculeRegistry.register("ethanol", [210, 250, 150], [
    {id: "C", count: 2},
    {id: "H", count: 5},
    MolID.hydroxide
], {burn: 520});

MoleculeRegistry.register("amide", [210, 250, 250], [
    "N",
    {id: "H", count: 2}
]);

MoleculeRegistry.register("urea", [230, 240, 180], [
    "C",
    "O",
    {id: MolID.amide, count: 2}
]);

MoleculeRegistry.register("ammonium", [180, 250, 250], [
    "N",
    {id: "H", count: 4}
], {shift: 1});

MoleculeRegistry.register("diammonium_phosphate", [210, 250, 150], [
    {id: MolID.ammonium, count: 2},
    "H",
    "P"
]);

MoleculeRegistry.register("potassium_carbonate", [198, 152, 95], [
    {id: "K", count: 2},
    "C"
]);

MoleculeRegistry.register("mescaline", [30, 30, 30], [
    {id: "C", count: 11},
    {id: "H", count: 17},
    "N",
    {id: "O", count: 3}
], {shift: 1});

MoleculeRegistry.register("mullite", [110, 110, 150], [
    {id: MolID.aluminum_oxide, count: 2},
    MolID.silicon_dioxide
]);

MoleculeRegistry.register("methane", [200, 30, 180], [
    "C",
    {id: "H", count: 4}
], {shift: 1, burn: 280});

MoleculeRegistry.register("ethane", [200, 30, 50], [
    {id: "C", count: 2},
    {id: "H", count: 6}
], {shift: 2, burn: 280});

MoleculeRegistry.register("propane", [100, 30, 50], [
    {id: "C", count: 3},
    {id: "H", count: 8}
], {shift: 3, burn: 280});

MoleculeRegistry.register("butane", [111, 150, 180], [
    {id: "C", count: 4},
    {id: "H", count: 10}
], {shift: 4, burn: 280});

MoleculeRegistry.register("pentane", [111, 150, 85], [
    {id: "C", count: 5},
    {id: "H", count: 12}
], {shift: 5, burn: 280});

MoleculeRegistry.register("hexane", [111, 205, 50], [
    {id: "C", count: 6},
    {id: "H", count: 14}
], {shift: 6, burn: 280});

MoleculeRegistry.register("potassium_dichromate", [198, 152, 95], [
    {id: "K", count: 2},
    {id: "Cr", count: 2},
    {id: "O", count: 7}
]);

MoleculeRegistry.register("nickel_chloride", [198, 157, 162], [
    "Ni",
    {id: "Cl", count: 2}
]);

MoleculeRegistry.register("potassium_permanganate", [198, 152, 95], [
    "K",
    "Mn",
    {id: "O", count: 4}
]);

MoleculeRegistry.register("magnesium_sulfate", [237, 178, 173], [
    "Mg",
    "S",
    {id: "O", count: 4}
]);

MoleculeRegistry.register("copper_chloride", [255, 154, 30], [
    "Cu",
    {id: "Cl", count: 2}
]);

MoleculeRegistry.register("cadmium_sulfide", [160, 147, 115], [
    "Cd",
    "S"
]);

MoleculeRegistry.register("chromium_oxide", [236, 237, 218], [
    {id: "Cr", count: 2},
    {id: "O", count: 3}
]);

MoleculeRegistry.register("antimony_trioxide", [250, 255, 200], [
    {id: "Sb", count: 2},
    {id: "O", count: 3}
]);

MoleculeRegistry.register("titanium_oxide", [50, 30, 50], [
    {id: "Ti", count: 2},
    {id: "O", count: 3}
]);

MoleculeRegistry.register("han_purple", [220, 100, 255], [
    "Ba",
    "Cu",
    {id: "Si", count: 2},
    {id: "O", count: 6}
]);

MoleculeRegistry.register("arsenic_sulfide", [250, 100, 130], [
    {id: "As", count: 4},
    {id: "S", count: 4}
]);

MoleculeRegistry.register("barium_sulfate", [0, 219, 179], [
    "Ba",
    "S",
    {id: "O", count: 4}
]);

MoleculeRegistry.register("beta_carotene", [255, 140, 40], [
    {id: "C", count: 40},
    {id: "H", count: 56}
]);

MoleculeRegistry.register("polyvinyl_chloride", [95, 49, 40], [
    {id: "C", count: 2},
    {id: "H", count: 3},
    "Cl"
]);

MoleculeRegistry.register("potassium_cyanide", [198, 152, 95], [
    "K",
    "C",
    "N"
], {shift: 1});

MoleculeRegistry.register("epinephrine", [230, 160, 120], [
    {id: "C", count: 9},
    {id: "H", count: 13},
    "N",
    {id: "O", count: 3}
], {shift: 2});

MoleculeRegistry.register("cocaine", [210, 210, 255], [
    {id: "C", count: 17},
    {id: "H", count: 21},
    "N",
    {id: "O", count: 4}
], {shift: 3});

MoleculeRegistry.register("acetylsalicylic_acid", [130, 190, 255], [
    {id: "C", count: 9},
    {id: "H", count: 8},
    {id: "O", count: 4}
], {shift: 5});

MoleculeRegistry.register("penicillin", [255, 210, 210], [
    {id: "C", count: 16},
    {id: "H", count: 18},
    {id: "N", count: 2},
    {id: "O", count: 5},
    "S"
], {shift: 1});

MoleculeRegistry.register("caffeine", [100, 100, 20], [
    {id: "C", count: 8},
    {id: "H", count: 10},
    {id: "N", count: 4},
    {id: "O", count: 2}
], {shift: 4});

MoleculeRegistry.register("mercury_sulfide", [160, 159, 157], [
    "Hg",
    "S"
], {shift: 4});

MoleculeRegistry.register("sodium_hydroxide", [211, 198, 131], [
    "Na",
    MolID.hydroxide
]);

MoleculeRegistry.register("calcium_oxide", [219, 210, 199], [
    "Ca",
    "O"
]);

MoleculeRegistry.register("calcium_hydroxide", [219, 210, 199], [
    "Ca",
    {id: MolID.hydroxide, count: 2}
]);

MoleculeRegistry.register("calcium_chloride", [219, 210, 199], [
    "Ca",
    {id: "Cl", count: 2}
]);

MoleculeRegistry.register("sodium_carbonate", [211, 198, 131], [
    {id: "Na", count: 2},
    MolID.carbonate
]);

MoleculeRegistry.register("hydrochloric_acid", [0, 0, 255], [
    "H",
    "Cl"
]);

MoleculeRegistry.register("magnesium_carbonate", [237, 178, 173], [
    "Mg",
    MolID.carbonate
]);

MoleculeRegistry.register("lead_oxide", [186, 135, 193], [
    "Pb",
    "O"
]);

MoleculeRegistry.register("sulfur_dioxide", [155, 155, 50], [
    "S",
    {id: "O", count: 2}
]);

MoleculeRegistry.register("lead_sulfide", [186, 135, 193], [
    "Pb",
    "S"
]);

MoleculeRegistry.register("zinc_sulfide", [189, 196, 141], [
    "Zn",
    "S"
]);

MoleculeRegistry.register("iron_disulfide", [128, 128, 128], [
    "Fe",
    {id: "S", count: 2}
]);

MoleculeRegistry.register("tin_oxide", [132, 161, 206], [
    "Sn",
    {id: "O", count: 2}
]);

MoleculeRegistry.register("manganese_oxide", [225, 186, 242], [
    "Mn",
    {id: "O", count: 2}
]);

MoleculeRegistry.register("strontium_oxide", [206, 88, 24], [
    "Sr",
    "O"
]);

MoleculeRegistry.register("iron_ii_oxide", [128, 128, 128], [
    "Fe",
    "O"
]);

MoleculeRegistry.register("sulfuric_acid", [150, 160, 10], [
    {id: "H", count: 2},
    "S",
    {id: "O", count: 4}
]);

MoleculeRegistry.register("nitric_acid", [66, 123, 214], [
    "H",
    "N",
    {id: "O", count: 3}
]);

MoleculeRegistry.register("nitrogen_dioxide", [65, 120, 200], [
    "N",
    {id: "O", count: 2}
]);

MoleculeRegistry.register("sodium_bisulfate", [211, 198, 131], [
    "Na",
    "H",
    "S",
    {id: "O", count: 4}
]);

MoleculeRegistry.register("ammonia", [60, 120, 250], [
    "N",
    {id: "H", count: 3}
]);

MoleculeRegistry.register("ammonium_chloride", [60, 120, 220], [
    "N",
    {id: "H", count: 4},
    "Cl"
]);

MoleculeRegistry.register("phosphoric_acid", [225, 100, 135], [
    {id: "H", count: 3},
    "P",
    {id: "O", count: 4}
]);

MoleculeRegistry.register("calcium_sulfate", [219, 210, 199], [
    "Ca",
    "S",
    {id: "O", count: 4}
]);

MoleculeRegistry.register("copper_i_oxide", [255, 154, 30], [
    {id: "Cu", count: 2},
    "O"
]);

MoleculeRegistry.register("copper_i_sulfide", [255, 154, 30], [
    {id: "Cu", count: 2},
    "S"
]);

MoleculeRegistry.register("hydrogen_sulfide", [240, 220, 30], [
    {id: "H", count: 2},
    "S"
]);

MoleculeRegistry.register("acetylene", [150, 230, 30], [
    {id: "C", count: 2},
    {id: "H", count: 2}
], {burn: 440});

MoleculeRegistry.register("acetic_acid", [200, 240, 100], [
    {id: "C", count: 2},
    {id: "H", count: 4},
    {id: "O", count: 2}
]);

MoleculeRegistry.register("nickel_sulfide", [198, 157, 162], [
    "Ni",
    "S"
]);

MoleculeRegistry.register("antimony_trisulfide", [193, 150, 58], [
    {id: "Sb", count: 2},
    {id: "S", count: 3}
]);

MoleculeRegistry.register("nickel_oxide", [198, 157, 162], [
    "Ni",
    "O"
]);

MoleculeRegistry.register("carbon_monoxide", [69, 70, 83], [
    "C",
    "O"
]);

MoleculeRegistry.register("lithium_hydroxide", [40, 158, 86], [
    "Li",
    MolID.hydroxide
]);

MoleculeRegistry.register("potassium_hydroxide", [198, 152, 95], [
    "K",
    MolID.hydroxide
]);

MoleculeRegistry.register("rubidium_hydroxide", [15, 61, 40], [
    "Rb",
    MolID.hydroxide
]);

MoleculeRegistry.register("cesium_hydroxide", [255, 148, 0], [
    "Cs",
    MolID.hydroxide
]);

MoleculeRegistry.register("beryllium_hydroxide", [184, 199, 224], [
    "Be",
    {id: MolID.hydroxide, count: 2}
]);

MoleculeRegistry.register("magnesium_hydroxide", [237, 178, 173], [
    "Mg",
    {id: MolID.hydroxide, count: 2}
]);

MoleculeRegistry.register("strontium_hydroxide", [206, 88, 24], [
    "Sr",
    {id: MolID.hydroxide, count: 2}
]);

MoleculeRegistry.register("barium_hydroxide", [0, 219, 179], [
    "Ba",
    {id: MolID.hydroxide, count: 2}
]);

MoleculeRegistry.register("aluminum_hydroxide", [237, 100, 59], [
    "Al",
    {id: MolID.hydroxide, count: 3}
]);

MoleculeRegistry.register("zinc_hydroxide", [189, 196, 141], [
    "Zn",
    {id: MolID.hydroxide, count: 2}
]);

MoleculeRegistry.register("manganese_hydroxide", [225, 186, 242], [
    "Mn",
    {id: MolID.hydroxide, count: 2}
]);

MoleculeRegistry.register("cadmium_hydroxide", [160, 147, 115], [
    "Cd",
    {id: MolID.hydroxide, count: 2}
]);

MoleculeRegistry.register("copper_ii_hydroxide", [255, 154, 30], [
    "Cu",
    {id: MolID.hydroxide, count: 2}
]);

MoleculeRegistry.register("lithium_chloride", [40, 158, 86], [
    "Li",
    "Cl"
]);

MoleculeRegistry.register("rubidium_chloride", [15, 61, 40], [
    "Rb",
    "Cl"
]);

MoleculeRegistry.register("cesium_chloride", [255, 148, 0], [
    "Cs",
    "Cl"
]);

MoleculeRegistry.register("beryllium_chloride", [184, 199, 224], [
    "Be",
    {id: "Cl", count: 2}
]);

MoleculeRegistry.register("magnesium_chloride", [237, 178, 173], [
    "Mg",
    {id: "Cl", count: 2}
]);

MoleculeRegistry.register("strontium_chloride", [206, 88, 24], [
    "Sr",
    {id: "Cl", count: 2}
]);

MoleculeRegistry.register("barium_chloride", [0, 219, 179], [
    "Ba",
    {id: "Cl", count: 2}
]);

MoleculeRegistry.register("lithium_oxide", [40, 158, 86], [
    {id: "Li", count: 2},
    "O"
]);

MoleculeRegistry.register("sodium_oxide", [211, 198, 131], [
    {id: "Na", count: 2},
    "O"
]);

MoleculeRegistry.register("potassium_oxide", [198, 152, 95], [
    {id: "K", count: 2},
    "O"
]);

MoleculeRegistry.register("rubidium_oxide", [15, 61, 40], [
    {id: "Rb", count: 2},
    "O"
]);

MoleculeRegistry.register("beryllium_oxide", [184, 199, 224], [
    "Be",
    "O"
]);

MoleculeRegistry.register("barium_oxide", [0, 219, 179], [
    "Ba",
    "O"
]);

MoleculeRegistry.register("lithium_carbonate", [40, 158, 86], [
    {id: "Li", count: 2},
    MolID.carbonate
]);

MoleculeRegistry.register("rubidium_carbonate", [15, 61, 40], [
    {id: "Rb", count: 2},
    MolID.carbonate
]);

MoleculeRegistry.register("cesium_carbonate", [255, 148, 0], [
    {id: "Cs", count: 2},
    MolID.carbonate
]);

MoleculeRegistry.register("beryllium_carbonate", [184, 199, 224], [
    "Be",
    MolID.carbonate
]);

MoleculeRegistry.register("barium_carbonate", [0, 219, 179], [
    "Ba",
    MolID.carbonate
]);

MoleculeRegistry.register("manganese_carbonate", [225, 186, 242], [
    "Mn",
    MolID.carbonate
]);

MoleculeRegistry.register("iron_carbonate", [128, 128, 128], [
    "Fe",
    MolID.carbonate
]);

MoleculeRegistry.register("cobalt_carbonate", [17, 114, 198], [
    "Co",
    MolID.carbonate
]);

MoleculeRegistry.register("nickel_carbonate", [198, 157, 162], [
    "Ni",
    MolID.carbonate
]);

MoleculeRegistry.register("copper_carbonate", [255, 154, 30], [
    "Cu",
    MolID.carbonate
]);

MoleculeRegistry.register("zinc_carbonate", [189, 196, 141], [
    "Zn",
    MolID.carbonate
]);

MoleculeRegistry.register("cadmium_carbonate", [160, 147, 115], [
    "Cd",
    MolID.carbonate
]);

MoleculeRegistry.register("lead_carbonate", [186, 135, 193], [
    "Pb",
    MolID.carbonate
]);

MoleculeRegistry.register("lithium_sulfate", [40, 158, 86], [
    {id: "Li", count: 2},
    "S",
    {id: "O", count: 4}
]);

MoleculeRegistry.register("sodium_sulfate", [211, 198, 131], [
    {id: "Na", count: 2},
    "S",
    {id: "O", count: 4}
]);

MoleculeRegistry.register("potassium_sulfate", [198, 152, 95], [
    {id: "K", count: 2},
    "S",
    {id: "O", count: 4}
]);

MoleculeRegistry.register("rubidium_sulfate", [15, 61, 40], [
    {id: "Rb", count: 2},
    "S",
    {id: "O", count: 4}
]);

MoleculeRegistry.register("cesium_sulfate", [255, 148, 0], [
    {id: "Cs", count: 2},
    "S",
    {id: "O", count: 4}
]);

MoleculeRegistry.register("beryllium_sulfate", [184, 199, 224], [
    "Be",
    "S",
    {id: "O", count: 4}
]);

MoleculeRegistry.register("strontium_sulfate", [206, 88, 24], [
    "Sr",
    "S",
    {id: "O", count: 4}
]);

MoleculeRegistry.register("manganese_sulfate", [225, 186, 242], [
    "Mn",
    "S",
    {id: "O", count: 4}
]);

MoleculeRegistry.register("cobalt_sulfate", [17, 114, 198], [
    "Co",
    "S",
    {id: "O", count: 4}
]);

MoleculeRegistry.register("nickel_sulfate", [198, 157, 162], [
    "Ni",
    "S",
    {id: "O", count: 4}
]);

MoleculeRegistry.register("iron_ii_sulfate", [128, 128, 128], [
    "Fe",
    "S",
    {id: "O", count: 4}
]);

MoleculeRegistry.register("copper_ii_sulfate", [255, 154, 30], [
    "Cu",
    "S",
    {id: "O", count: 4}
]);

MoleculeRegistry.register("zinc_sulfate", [189, 196, 141], [
    "Zn",
    "S",
    {id: "O", count: 4}
]);

MoleculeRegistry.register("cadmium_sulfate", [160, 147, 115], [
    "Cd",
    "S",
    {id: "O", count: 4}
]);

MoleculeRegistry.register("lead_sulfate", [186, 135, 193], [
    "Pb",
    "S",
    {id: "O", count: 4}
]);

MoleculeRegistry.register("tin_sulfate", [132, 161, 206], [
    "Sn",
    "S",
    {id: "O", count: 4}
]);

MoleculeRegistry.register("lithium_nitrate", [40, 158, 86], [
    "Li",
    MolID.nitrate
]);

MoleculeRegistry.register("sodium_nitrate", [211, 198, 131], [
    "Na",
    MolID.nitrate
]);

MoleculeRegistry.register("rubidium_nitrate", [15, 61, 40], [
    "Rb",
    MolID.nitrate
]);

MoleculeRegistry.register("cesium_nitrate", [255, 148, 0], [
    "Cs",
    MolID.nitrate
]);

MoleculeRegistry.register("beryllium_nitrate", [184, 199, 224], [
    "Be",
    {id: MolID.nitrate, count: 2}
]);

MoleculeRegistry.register("magnesium_nitrate", [237, 178, 173], [
    "Mg",
    {id: MolID.nitrate, count: 2}
]);

MoleculeRegistry.register("calcium_nitrate", [219, 210, 199], [
    "Ca",
    {id: MolID.nitrate, count: 2}
]);

MoleculeRegistry.register("strontium_nitrate", [206, 88, 24], [
    "Sr",
    {id: MolID.nitrate, count: 2}
]);

MoleculeRegistry.register("barium_nitrate", [0, 219, 179], [
    "Ba",
    {id: MolID.nitrate, count: 2}
]);

MoleculeRegistry.register("manganese_nitrate", [255, 186, 242], [
    "Mn",
    {id: MolID.nitrate, count: 2}
]);

MoleculeRegistry.register("iron_iii_nitrate", [128, 128, 128], [
    "Fe",
    {id: MolID.nitrate, count: 2}
]);

MoleculeRegistry.register("cobalt_nitrate", [17, 114, 198], [
    "Co",
    {id: MolID.nitrate, count: 2}
]);

MoleculeRegistry.register("nickel_nitrate", [198, 157, 162], [
    "Ni",
    {id: MolID.nitrate, count: 2}
]);

MoleculeRegistry.register("copper_nitrate", [255, 154, 30], [
    "Cu",
    {id: MolID.nitrate, count: 2}
]);

MoleculeRegistry.register("zinc_nitrate", [189, 196, 141], [
    "Zn",
    {id: MolID.nitrate, count: 2}
]);

MoleculeRegistry.register("lead_nitrate", [186, 135, 193], [
    "Pb",
    {id: MolID.nitrate, count: 2}
]);

MoleculeRegistry.register("cadmium_nitrate", [160, 147, 115], [
    "Cd",
    {id: MolID.nitrate, count: 2}
]);

MoleculeRegistry.register("aluminum_nitrate", [247, 110, 69], [
    "Al",
    {id: MolID.nitrate, count: 2}
]);

MoleculeRegistry.register("nitric_oxide", [65, 120, 200], [
    "N",
    "O"
]);

MoleculeRegistry.register("carbon_disulfide", [200, 120, 200], [
    "C",
    {id: "S", count: 2}
]);

MoleculeRegistry.register("potassium_ethyl_xanthate", [200, 120, 200], [
    {id: "C", count: 3},
    {id: "H", count: 5},
    "K",
    "O",
    {id: "S", count: 2}
]);

MoleculeRegistry.register("sulfur_trioxide", [130, 160, 50], [
    "S",
    {id: "O", count: 3}
]);

MoleculeRegistry.register("barium_sulfide", [0, 219, 179], [
    "Ba",
    "S"
]);




// file: item/utils.js

IDRegistry.genItemID("obsidian_breaker");
Item.createItem("obsidian_breaker", "Obsidian Breaker", {name: "obsidian_breaker"});
Recipes2.addShaped(ItemID.obsidian_breaker, "ab:ba", {a: {id: ItemID.chem_element, data: ElemMeta.S}, b: {id: ItemID.chem_element, data: ElemMeta.K}});

Item.registerUseFunction("obsidian_breaker", function(coords, item, block){
    if(block.id === VanillaBlockID.obsidian){
        World.destroyBlock(coords.x, coords.y, coords.z, true);
        Player.decreaseCarriedItem();
    }
});




// file: recipe_viewer.js

let RV;

ModAPI.addAPICallback("RecipeViewer", function(api){

    IDRegistry.genItemID("icon_decomposer");
    IDRegistry.genItemID("icon_synthesiser");
    Item.createItem("icon_decomposer", "decomposer", {name: "icon_decomposer"}, {isTech: true});
    Item.createItem("icon_synthesiser", "synthesiser", {name: "icon_synthesiser"}, {isTech: true});

    RV = api.Core;

    const array = [];
    for(let i = 0; i < ElementRegistry.maxAtomicNumber; i++){
        array.push(i + 1);
    }

    RV.addListByData(ItemID.chem_element, array, "item");

    RV.registerRecipeType("chemical_decomposer", {
        title: "Chemical Decompose",
        contents: {
            //icon: BlockID.chemical_decomposer,
            icon: ItemID.icon_decomposer,
            params: {slot: "_default_slot_light"},
            drawing: [
                {type: "bitmap", x: 460, y: 140, bitmap: "minechemistry.arrow_down", scale: 5}
            ],
            elements: {
                input0: {x: 440, y: 0, size: 120},
                output0: {x: 200, y: 270, size: 120},
                output1: {x: 320, y: 270, size: 120},
                output2: {x: 440, y: 270, size: 120},
                output3: {x: 560, y: 270, size: 120},
                output4: {x: 680, y: 270, size: 120},
                output5: {x: 200, y: 390, size: 120},
                output6: {x: 320, y: 390, size: 120},
                output7: {x: 440, y: 390, size: 120},
                output8: {x: 560, y: 390, size: 120},
                output9: {x: 680, y: 390, size: 120},
                textRoll: {type: "text", x: 580, y: 30, font: {size: 40}},
                textMode: {type: "text", x: 820, y: 420, font: {size: 40}},
            },
            moveItems: {x: 820, y: 462, slots: ["slotSource"]}
        },
        getList: function(id, data, isUsage){
            if(isUsage){
                const code = DecomposeRecipe.getMatchCode(id, data);
                return code ? [DecomposeRecipe.compileRecipeForRV(code)] : [];
            }
            const list = [];
            let recipe;
            for(let key in DecomposeRecipe.recipe){
                recipe = DecomposeRecipe.recipe[key];
                recipe.list.some(function(item){
                    return id === item.id && (data === item.data || data === -1);
                }) && list.push(DecomposeRecipe.compileRecipeForRV(key));
            }
            return list;
        },
        getAllList: function(){
            const list = [];
            for(let key in DecomposeRecipe.recipe){
                list.push(DecomposeRecipe.compileRecipeForRV(key));
            }
            return list;
        },
        onOpen: function(elements, data){
            elements.get("textRoll").onBindingUpdated("text", data ? "Rolls: " + data.rolls : "");
            elements.get("textMode").onBindingUpdated("text", data && data.isRandom ? "Random" : "");
        }
    });

    RV.registerRecipeType("chemical_synthesiser", {
        title: "Chemical Synthesis",
        contents: {
            //icon: BlockID.chemical_synthesiser,
            icon: ItemID.icon_synthesiser,
            params: {slot: "_default_slot_light"},
            drawing: [
                {type: "bitmap", x: 596, y: 135, bitmap: "minechemistry.triangle_right", scale: 6}
            ],
            elements: {
                input0: {x: 200, y: 0, size: 120},
                input1: {x: 320, y: 0, size: 120},
                input2: {x: 440, y: 0, size: 120},
                input3: {x: 200, y: 120, size: 120},
                input4: {x: 320, y: 120, size: 120},
                input5: {x: 440, y: 120, size: 120},
                input6: {x: 200, y: 240, size: 120},
                input7: {x: 320, y: 240, size: 120},
                input8: {x: 440, y: 240, size: 120},
                output0: {x: 680, y: 120, size: 120}
            },
            moveItems: {x: 820, y: 192, slots: ["slotPattern0", "slotPattern1", "slotPattern2", "slotPattern3", "slotPattern4", "slotPattern5", "slotPattern6", "slotPattern7", "slotPattern8"], isPattern: true}
        },
        getList: function(id, data, isUsage){
            return SynthesisRecipe.recipe.filter(isUsage ?
                function(recipe){
                    for(let key in recipe.pattern){
                        if(!recipe.pattern[key]){
                            alert(key);
                            continue;
                        }
                        if(recipe.pattern[key].id === id && (data === -1 || recipe.pattern[key].data === data)){
                            return true;
                        }
                    }
                    return false;
                }:
                function(recipe){
                    return recipe.result.id === id && (data === -1 || recipe.result.data === data);
                }
            ).map(function(recipe){
                return SynthesisRecipe.compileRecipeForRV(recipe);
            });
        },
        getAllList: function(){
            return SynthesisRecipe.recipe.map(function(recipe){
                return SynthesisRecipe.compileRecipeForRV(recipe);
            });
        }
    });

    const numToElem = function(num){
        return {id: ItemID.chem_element, count: 1, data: num};
    };

    const compileRecipe = function(recipe){
        return {
            input: recipe.input.map(numToElem),
            output: recipe.output.map(numToElem)
        };
    };

    RV.registerRecipeType("chemical_fission", {
        title: "Chemical Fission",
        contents: {
            icon: {id: BlockID.fission_controller},
            description: "fission",
            params: {slot: "_default_slot_light"},
            drawing: [
                {type: "bitmap", x: 370, y: 157, bitmap: "minechemistry.progress", scale: 5}
            ],
            elements: {
                input0: {x: 220, y: 120, size: 120},
                output0: {x: 540, y: 120, size: 120},
                output1: {x: 660, y: 120, size: 120}
            },
            moveItems: {x: 800, y: 192, slots: ["slotSource"]}
        },
        getList: function(id, data, isUsage){
            if(id !== ItemID.chem_element){
                return [];
            }
            const list = [];
            if(isUsage){
                const half = data >> 1;
                half > 0 && list.push({
                    input: [data],
                    output: [half, half + (data & 1)]
                });
            }
            else{
                const double = data << 1;
                for(let i = double - 1; i <= double + 1; i++){
                    2 <= i && i <= ElementRegistry.maxAtomicNumber && list.push({
                        input: [i],
                        output: [data, i - data]
                    });
                }
            }
            return list.map(compileRecipe);
        },
        getAllList: function(){
            const list = [];
            let half = 0;
            for(let i = 2; i < ElementRegistry.maxAtomicNumber; i++){
                half = i >> 1;
                list.push({
                    input: [i],
                    output: [half, half + (i & 1)]
                });
            }
            return list.map(compileRecipe);
        }
    });

    RV.registerRecipeType("chemical_fusion", {
        title: "Chemical Fusion",
        contents: {
            icon: {id: BlockID.fusion_controller},
            description: "fusion",
            params: {slot: "_default_slot_light"},
            drawing: [
                {type: "bitmap", x: 490, y: 157, bitmap: "minechemistry.progress", scale: 5}
            ],
            elements: {
                input0: {x: 220, y: 120, size: 120},
                input1: {x: 340, y: 120, size: 120},
                output0: {x: 660, y: 120, size: 120}
            },
            moveItems: {x: 800, y: 192, slots: ["slotSource1", "slotSource2"]}
        },
        getList: function(id, data, isUsage){
            if(id !== ItemID.chem_element){
                return [];
            }
            const list = [];
            if(isUsage){
                for(let i = data + 1; i <= ElementRegistry.maxAtomicNumber - 1; i++){
                    list.push({
                        input: [data, i - data],
                        output: [i]
                    });
                }
            }
            else{
                const half = data >> 1;
                for(let i = 1; i <= half; i++){
                    list.push({
                        input: [i, data - i],
                        output: [data]
                    });
                }
            }
            return list.map(compileRecipe);
        },
        getAllList: function(){
            const list = [];
            let j = half = 0;
            for(let i = 2; i < ElementRegistry.maxAtomicNumber; i++){
                half = i >> 1;
                for(j = 1; j <= half; j++){
                    list.push({
                        input: [j, i - j],
                        output: [i]
                    });
                }
            }
            return list.map(compileRecipe);
        }
    });

});




// file: block/decomposer.js

createBlock("chemical_decomposer", "Chemical Decomposer", [["block_minechemistry", 0]]);
Recipes2.addShaped(BlockID.chemical_decomposer, "aba:aca:aba", {a: VanillaItemID.iron_ingot, b: VanillaBlockID.piston, c: VanillaBlockID.magma});

(function(){
    const mesh = new RenderMesh();
    const model = new BlockRenderer.Model(mesh);
    const render = new ICRender.Model();
    mesh.setBlockTexture("chemical_decomposer", 0);
    mesh.importFromFile(__dir__ + "res/model/decomposer.obj", "obj", null);
    render.addEntry(model);
    BlockRenderer.setStaticICRender(BlockID.chemical_decomposer, -1, render);
    ItemModel.getFor(BlockID.chemical_decomposer, -1).setModel(render);
})();

const modelMill = [
    {type: "box", uv: {x: 12, y: 0}, coords: {x: 0, y: 4.5, z: 0}, size: {x: 1, y: 1, z: 6}},
    {type: "box", uv: {x: 12, y: 7}, coords: {x: 0, y: 4.5, z: 0}, size: {x: 6, y: 1, z: 1}},
    {type: "box", uv: {x: 12, y: 9}, coords: {x: 0, y: 4.5, z: 4}, size: {x: 4, y: 2, z: 2}},
    {type: "box", uv: {x: 12, y: 9}, coords: {x: 0, y: 4.5, z: -4}, size: {x: 4, y: 2, z: 2}},
    {type: "box", uv: {x: 12, y: 13}, coords: {x: 4, y: 4.5, z: 0}, size: {x: 2, y: 2, z: 4}},
    {type: "box", uv: {x: 12, y: 13}, coords: {x: -4, y: 4.5, z: 0}, size: {x: 2, y: 2, z: 4}}
];


let windowDecomposer;

(function(){

    const elements = {
        scaleEnergy: {type: "scale", x: 403, y: 53, bitmap: "minechemistry.energy", scale: 3, direction: 1},
        scaleLiquid: {type: "scale", x: 563, y: 53, width: 42, height: 105, overlay: "minechemistry.liquid_line", scale: 3, direction: 1},
        slotSource: {type: "slot", x: 640, y: 50},
        buttonClear: {type: "button", x: 520, y: 50, bitmap: "close_button_up", bitmap2: "close_button_down", scale: 2, clicker: {
            onClick: function(container, tile){
                for(let key in tile.liquidStorage.liquidAmounts){
                    delete tile.liquidStorage.liquidAmounts[key];
                }
            }
        }},
        buttonExport: {type: "button", x: 520, y: 330, bitmap: "_button_prev_48x24", bitmap2: "_button_prev_48x24p", scale: 2, clicker: {
            onClick: function(container){
                let i = j = 0;
                let slot, inv;
                for(i = 0; i < 10; i++){
                    slot = container.getSlot("slotBuffer" + i);
                    if(slot.id === 0){
                        continue;
                    }
                    for(j = 0; j < 36; j++){
                        inv = InvSource.get(j);
                        StorageInterface.addItemToSlot(slot, inv);
                        InvSource.set(j, inv.id, inv.count, inv.data);
                        if(slot.id === 0){
                            break;
                        }
                    }
                }
            }
        }},
        arrow: {type: "image", x: 645, y: 120, bitmap: "minechemistry.arrow_down", scale: 3, clicker: {
            onClick: function(container){
                RV && RV.openRecipePage("chemical_decomposer", container);
            }
        }}
    };

    for(let i = 0; i < 10; i++){
        elements["slotBuffer" + i] = {
            type: "slot",
            x: (i % 5) * 60 + 520,
            y: (i / 5 | 0) * 60 + 200,
            isValid: ValidFunc.output
        };
    }

    windowDecomposer = new UI.StandartWindow({
        standart: {
            header: {text: {text: "Chemical Decomposer"}},
            inventory: {standart: true},
            background: {standart: true}
        },
        drawing: [
            {type: "frame", x: 400, y: 50, width: 54, height: 186, bitmap: "classic_frame_slot", scale: 3},
            {type: "frame", x: 560, y: 50, width: 48, height: 111, bitmap: "classic_frame_slot", scale: 3}
        ],
        elements: elements
    });

})();


registerMachine(BlockID.chemical_decomposer, {

    render: null,
    anim: null,
    animLoaded: false,

    defaultValues: {
        energy: 0
    },

    itemBuffer: [],

    getGuiScreen: function(){
        return windowDecomposer;
    },

    init: function(){
        this.render = new Render();
        this.render.getPart("head").addPart("mill");
        this.render.setPart("mill", modelMill, {width: 128, height: 64});
        this.anim = new Animation.Base(this.x + 0.5, this.y - 0.5, this.z + 0.5);
        this.anim.isActive = false;
        this.anim.rotationY = 0;
        this.anim.describe({render: this.render.getID(), skin: "terrain-atlas/chemical_decomposer.png"});
        this.anim.load();
        this.anim.setSkylightMode();
        this.liquidStorage.setLimit(null, 5);
    },

    destroy: function(){
        this.anim.destroy();
    },

    click: function(id, count, data){
        const stored = this.liquidStorage.getLiquidStored();
        const amount = this.liquidStorage.getAmount(stored);
        const liquid = LiquidRegistry.getItemLiquid(id, data);
        if(DecomposeRecipe.validLiquid(liquid) && (!stored || stored === liquid && amount + 1 <= this.liquidStorage.getLimit(stored))){
            const empty = LiquidRegistry.getEmptyItem(id, data);
            this.liquidStorage.addLiquid(liquid, 1);
            Player.decreaseCarriedItem();
            Player.addItemToInventory(empty.id, 1, empty.data);
            return true;
        }
        return false;
    },

    tick: function(){

        const liquid = this.liquidStorage.getLiquidStored();
        let isActive = false;

        process: {

            if(this.data.energy < Cfg.decomposer.cost){
                break process;
            }
    
            if(this.itemBuffer.length === 0){

                let result;

                checkLiquid:
                if(liquid && this.liquidStorage.getAmount(liquid) >= 1){
                    result = DecomposeRecipe.getResult(liquid);
                    if(!result){
                        break checkLiquid;
                    }
                    this.liquidStorage.getLiquid(liquid, 1);
                    if(result.length === 0){
                        isActive = true;
                        break process;
                    }
                    this.itemBuffer = result;
                }

                const slotSource = this.container.getSlot("slotSource");
                result = DecomposeRecipe.getResult(slotSource.id, slotSource.data);
                if(!result){
                    break process;
                }
                slotSource.count--;
                this.container.validateSlot("slotSource");
                if(result.length === 0){
                    isActive = true;
                    break process;
                }
                this.itemBuffer = result;

            }

            const item = this.itemBuffer[0];
            let count = Math.min(item.count, Cfg.decomposer.speed);
            let add = 0;
            for(let i = 0; i < 10; i++){
                add = StorageInterface.addItemToSlot(item, this.container.getSlot("slotBuffer" + i), count);
                if(add > 0){
                    count -= add;
                    isActive = true;
                    if(count <= 0){
                        break;
                    }
                }
            }
    
            item.count <= 0 && this.itemBuffer.shift();

        }

        if(isActive){
            this.data.energy -= Cfg.decomposer.cost;
            if(!Cfg.smooth){
                this.anim.rotationY += Math.PI / 4;
                if(this.anim.rotationY >= Math.PI){
                    this.anim.rotationY = 0;
                }
                this.render.getPart("mill").setRotation(0, this.anim.rotationY, 0);
                this.anim.refresh();
            }
        }

        this.anim.isActive = isActive;
        this.container.setScale("scaleEnergy", this.data.energy / this.getEnergyStorage());
        this.liquidStorage.updateUiScale("scaleLiquid", liquid);
        StorageInterface.checkHoppers(this);

    },

    getEnergyStorage: function(){
        return Cfg.decomposer.storage;
    }

});


Cfg.smooth && Block.setAnimateTickCallback(BlockID.chemical_decomposer, function(x, y, z){
    const tile = World.getTileEntity(x, y, z);
    if(tile && !tile.animLoaded){
        tile.animLoaded = true;
        new Thread(function(){
            while(tile.isLoaded){
                if(tile.anim.isActive){
                    tile.anim.rotationY += Math.PI / 16;
                    if(tile.anim.rotationY >= Math.PI){
                        tile.anim.rotationY = 0;
                    }
                    tile.render.getPart("mill").setRotation(0, tile.anim.rotationY, 0);
                    tile.anim.refresh();
                }
                Thread.sleep(20);
            }
        }).start();
    }
});


StorageInterface.createInterface(BlockID.chemical_decomposer, {
    slots: {
        slotSource: {input: true},
        slotBuffer0: {output: true},
        slotBuffer1: {output: true},
        slotBuffer2: {output: true},
        slotBuffer3: {output: true},
        slotBuffer4: {output: true},
        slotBuffer5: {output: true},
        slotBuffer6: {output: true},
        slotBuffer7: {output: true},
        slotBuffer8: {output: true},
        slotBuffer9: {output: true}
    },
    canReceiveLiquid: function(liquid){
        return DecomposeRecipe.validLiquid(liquid);
    }
});




// file: block/synthesiser.js

createBlock("chemical_synthesiser", "Chemical Synthesiser", [["block_minechemistry", 0], ["block_minechemistry", 0], ["block_minechemistry", 0], ["block_minechemistry", 0], ["block_minechemistry", 0], ["block_minechemistry", 0]], true);
Recipes2.addShaped(BlockID.chemical_synthesiser, "aba:aca:ada", {a: VanillaItemID.iron_ingot, b: VanillaItemID.diamond, c: VanillaBlockID.obsidian, d: VanillaBlockID.piston});

(function(){
    let mesh, model, render;
    for(let i = 0; i < 4; i++){
        mesh = new RenderMesh();
        model = new BlockRenderer.Model(mesh);
        render = new ICRender.Model();
        mesh.setBlockTexture("chemical_synthesiser", 0);
        mesh.importFromFile(__dir__ + "res/model/synthesiser_" + i + ".obj", "obj", null);
        render.addEntry(model);
        BlockRenderer.setStaticICRender(BlockID.chemical_synthesiser, i, render);
        ItemModel.getFor(BlockID.chemical_synthesiser, i).setModel(render);
    }
})();

const modelArm = [
    {type: "box", uv: {x: 0, y: 17}, coords: {x: -4.5, y: 4, z: -1.5}, size: {x: 3, y: 2, z: 13}},
    {type: "box", uv: {x: 32, y: 23}, coords: {x: -4.5, y: 9, z: -4.5}, size: {x: 1, y: 8, z: 1}}
];


let windowSynthesiser;

(function(){

    const elements = {
        scaleEnergy: {type: "scale", x: 403, y: 53, bitmap: "minechemistry.energy", scale: 3, direction: 1},
        slotResult: {type: "slot", x: 800, y: 110, isValid: ValidFunc.output},
        slotTarget: {type: "slot", x: 800, y: 50, bitmap: "_default_slot_empty", visual: true, needClean: true},
        buttonClear: {type: "button", x: 540, y: 50, bitmap: "close_button_up", bitmap2: "close_button_down", scale: 2, clicker: {
            onClick: function(container, tile){
                tile.clearTarget();
            }
        }},
        buttonImport: {type: "button", x: 410, y: 276, bitmap: "_button_next_48x24", bitmap2: "_button_next_48x24p", scale: 2, clicker: {
            onClick: function(container){
                const list = {};
                let i = j = 0;
                let slot, inv;
                for(i = 0; i < 9; i++){
                    slot = container.getSlot("slotPattern" + i);
                    if(slot.id !== 0){
                        list[slot.id + ":" + slot.data] = true;
                    }
                }
                for(i = 0; i < 36; i++){
                    inv = InvSource.get(i);
                    if(!((inv.id + ":" + inv.data) in list)){
                        continue;
                    }
                    for(j = 0; j < 10; j++){
                        slot = container.getSlot("slotBuffer" + j);
                        StorageInterface.addItemToSlot(inv, slot);
                        if(inv.count === 0){
                            InvSource.set(i, 0, 0, 0);
                            break;
                        }
                        InvSource.set(i, inv.id, inv.count, inv.data);
                    }
                }
            }
        }},
        buttonExport: {type: "button", x: 410, y: 336, bitmap: "_button_prev_48x24", bitmap2: "_button_prev_48x24p", scale: 2, clicker: {
            onClick: function(container){
                let i = j = 0;
                let slot, inv;
                for(i = 0; i < 10; i++){
                    slot = container.getSlot("slotBuffer" + i);
                    if(slot.id === 0){
                        continue;
                    }
                    for(j = 0; j < 36; j++){
                        inv = InvSource.get(j);
                        StorageInterface.addItemToSlot(slot, inv);
                        InvSource.set(j, inv.id, inv.count, inv.data);
                        if(slot.id === 0){
                            break;
                        }
                    }
                }
            }
        }},
        arrow: {type: "image", x: 770, y: 118, bitmap: "minechemistry.triangle_right", scale: 3, clicker: {
            onClick: function(container){
                RV && RV.openRecipePage("chemical_synthesiser", container);
            }
        }}
    };

    for(let i = 0; i < 9; i++){
        let key = "slotPattern" + i;
        elements[key] = {
            type: "slot",
            x: (i % 3) * 60 + 580,
            y: (i / 3 | 0) * 60 + 50,
            isDarkenAtZero: false,
            isValid: function(id, count, data, container){
                const tile = container.getParent();
                const slot = container.getSlot(key);
                slot.id = id;
                slot.count = Math.min(64, slot.count + 1);
                slot.data = data;
                tile.updateTarget();
                return false;
            },
            clicker: {
                onClick: function(container, tile){
                    const elem = container.getElement(key);
                    const field = elem.getClass().getDeclaredField("currentSelectedSlot");
                    field.setAccessible(true);
                    field.set(elem, elem);
                    container.getSlot(key).count--;
                    container.validateSlot(key);
                    tile.updateTarget();
                },
                onLongClick: function(container, tile){
                    const elem = container.getElement(key);
                    const field = elem.getClass().getDeclaredField("currentSelectedSlot");
                    field.setAccessible(true);
                    field.set(elem, elem);
                    container.clearSlot(key);
                    tile.updateTarget();
                }
            }
        };
    }

    for(let i = 0; i < 10; i++){
        elements["slotBuffer" + i] = {
            type: "slot",
            x: (i % 5) * 60 + 520,
            y: (i / 5 | 0) * 60 + 270
        };
    }

    windowSynthesiser = new UI.StandartWindow({
        standart: {
            header: {text: {text: "Chemical Synthesiser"}},
            inventory: {standart: true},
            background: {standart: true}
        },
        drawing: [
            {type: "frame", x: 400, y: 50, width: 54, height: 186, bitmap: "classic_frame_slot", scale: 3},
            {type: "bitmap", x: 648, y: 240, bitmap: "minechemistry.triangle_up", scale: 3}
        ],
        elements: elements
    });

})();


registerMachine(BlockID.chemical_synthesiser, {

    render: null,
    anim: null,
    animLoaded: false,

    defaultValues: {
        energy: 0,
        progress: 0
    },

    requiredItem: [],

    getGuiScreen: function(){
        return windowSynthesiser;
    },

    init: function(){
        this.render = new Render();
        this.render.getPart("head").addPart("arm");
        this.render.setPart("arm", modelArm, {width: 128, height: 64});
        this.render.getPart("arm").setRotation(0, [0, Math.PI, -Math.PI / 2, Math.PI / 2][World.getBlock(this.x, this.y, this.z).data], 0);
        this.anim = new Animation.Base(this.x + 0.5, this.y - 0.5, this.z + 0.5);
        this.anim.isActive = false;
        this.anim.armTimer = 0;
        this.anim.armX = -4.5;
        this.anim.armY = 9;
        this.anim.describe({render: this.render.getID(), skin: "terrain-atlas/chemical_synthesiser.png"});
        this.anim.load();
        this.anim.setSkylightMode();
        delete this.liquidStorage;
    },

    destroy: function(){
        this.clearTarget();
        this.anim.destroy();
    },

    armPosition: function(timer, start, end, v1, v2){
        return v1 + (timer - start) / (end - start) * (v2 - v1);
    },

    moveArm: function(increase){
        this.anim.armTimer += increase;
        switch(true){
            case this.anim.armTimer <= 5: this.anim.armY = this.armPosition(this.anim.armTimer, 00, 5, 9, 7.2); break;
            case this.anim.armTimer <= 20: this.anim.armX = this.armPosition(this.anim.armTimer, 5, 20, -4.5, 0); break;
            case this.anim.armTimer <= 25: this.anim.armY = this.armPosition(this.anim.armTimer, 20, 25, 7.2, 9); break;
            case this.anim.armTimer <= 30: this.anim.armY = this.armPosition(this.anim.armTimer, 25, 30, 9, 7.2); break;
            case this.anim.armTimer <= 45: this.anim.armX = this.armPosition(this.anim.armTimer, 30, 45, 0, 4.5); break;
            case this.anim.armTimer <= 50: this.anim.armY = this.armPosition(this.anim.armTimer, 45, 50, 7.2, 9); break;
            case this.anim.armTimer <= 55: this.anim.armY = this.armPosition(this.anim.armTimer, 50, 55, 9, 7.2); break;
            case this.anim.armTimer <= 70: this.anim.armX = this.armPosition(this.anim.armTimer, 55, 70, 4.5, 0); break;
            case this.anim.armTimer <= 75: this.anim.armY = this.armPosition(this.anim.armTimer, 70, 75, 7.2, 9); break;
            case this.anim.armTimer <= 80: this.anim.armY = this.armPosition(this.anim.armTimer, 75, 80, 9, 7.2); break;
            case this.anim.armTimer <= 95: this.anim.armX = this.armPosition(this.anim.armTimer, 80, 95, 0, -4.5); break;
            case this.anim.armTimer <= 100: this.anim.armY = this.armPosition(this.anim.armTimer, 95, 100, 7.2, 9); break;
            default: this.anim.armTimer = 0;
        }
        this.render.setPart("arm", [
            {type: "box", uv: {x: 0, y: 17}, coords: {x: this.anim.armX, y: 4, z: -1.5}, size: {x: 3, y: 2, z: 13}},
            {type: "box", uv: {x: 32, y: 23}, coords: {x: this.anim.armX, y: this.anim.armY, z: -4.5}, size: {x: 1, y: 8, z: 1}}
        ], {width: 128, height: 64});
        this.anim.refresh();
    },

    updateTarget: function(){
        const result = SynthesisRecipe.getResult(this.container);
        result?
            this.container.setSlot("slotTarget", result.id, result.count, result.data):
            this.container.clearSlot("slotTarget");
    },

    onMoveItems: function(){
        this.updateTarget();
    },

    clearTarget: function(){
        for(let i = 0; i < 9; i++){
            this.container.clearSlot("slotPattern" + i);
        }
        this.container.clearSlot("slotTarget");
    },

    tick: function(){

        process: {

            if(World.getThreadTime() % Cfg.synthesiser.time !== 0){
                break process;
            }

            if(this.data.energy < Cfg.synthesiser.cost * Cfg.synthesiser.time){
                this.anim.isActive = false;
                break process;
            }

            const result = this.container.getSlot("slotTarget");
            if(result.id === 0){
                this.anim.isActive = false;
                break process;
            }

            const slotResult = this.container.getSlot("slotResult");
            if(slotResult.id !== 0 && (slotResult.id !== result.id || slotResult.data !== result.data || slotResult.count + result.count > 64)){
                this.anim.isActive = false;
                break process;
            }

            const require = {};
            const stock = {};
            let i = 0;
            let slot;
            let key = "";

            for(i = 0; i < 9; i++){
                slot = this.container.getSlot("slotPattern" + i);
                if(slot.id !== 0){
                    key = slot.id + ":" + slot.data;
                    require[key] = (key in require ? require[key] : 0) + slot.count;
                }
            }

            for(i = 0; i < 10; i++){
                slot = this.container.getSlot("slotBuffer" + i);
                if(slot.id !== 0){
                    key = slot.id + ":" + slot.data;
                    stock[key] = (key in stock ? stock[key] : 0) + slot.count;
                }
            }

            for(key in require){
                if(!(key in stock) || stock[key] < require[key]){
                    this.anim.isActive = false;
                    break process;
                }
            }

            let item;
            let decrease = 0;

            for(key in require){
                item = key.split(":");
                item[0] -= 0;
                item[1] -= 0;
                for(i = 0; i < 10; i++){
                    slot = this.container.getSlot("slotBuffer" + i);
                    if(slot.id === item[0] && slot.data === item[1]){
                        decrease = Math.min(slot.count, require[key]);
                        slot.count -= decrease;
                        require[key] -= decrease;
                        this.container.validateSlot("slotBuffer" + i);
                    }
                    if(require[key] === 0){
                        break;
                    }
                }
            }

            slotResult.id = result.id;
            slotResult.data = result.data;
            slotResult.count++;
            this.data.energy -= Cfg.synthesiser.cost * Cfg.synthesiser.time;
            this.anim.isActive = true;

            if(Cfg.smooth){
                break process;
            }

            this.moveArm(5);

        }

        this.container.setScale("scaleEnergy", this.data.energy / this.getEnergyStorage());
        StorageInterface.checkHoppers(this);
        
    },

    getEnergyStorage: function(){
        return Cfg.synthesiser.storage;
    }

});


Cfg.smooth && Block.setAnimateTickCallback(BlockID.chemical_synthesiser, function(x, y, z){
    const tile = World.getTileEntity(x, y, z);
    if(tile && !tile.animLoaded){
        tile.animLoaded = true;
        new Thread(function(){
            while(tile.isLoaded){
                tile.anim.isActive && tile.moveArm(1);
                Thread.sleep(20);
            }
        }).start();
    }
});


StorageInterface.createInterface(BlockID.chemical_synthesiser, {
    slots: {
        slotBuffer0: {input: true},
        slotBuffer1: {input: true},
        slotBuffer2: {input: true},
        slotBuffer3: {input: true},
        slotBuffer4: {input: true},
        slotBuffer5: {input: true},
        slotBuffer6: {input: true},
        slotBuffer7: {input: true},
        slotBuffer8: {input: true},
        slotBuffer9: {input: true},
        slotResult: {output: true}
    }
});




// file: block/fission.js

createBlock("fission_casing", "Fission Casing", [["fission_casing", 0]]);
createBlock("fission_core", "Fission Core", [["fission_casing", 0], ["fission_casing", 0], ["fission_core", 0]]);

createBlock("fission_controller", "Fission Controller", [["fission_casing", 0], ["fission_casing", 0], ["fission_casing", 0], ["chem_controller", 0], ["fission_casing", 0], ["fission_casing", 0]]);
TileRenderer.setStandartModel(BlockID.fission_controller, [["fission_casing", 0], ["fission_casing", 0], ["fission_casing", 0], ["chem_controller", 0], ["fission_casing", 0], ["fission_casing", 0]]);
TileRenderer.registerRotationModel(BlockID.fission_controller, 0, [["fission_casing", 0], ["fission_casing", 0], ["fission_casing", 0], ["chem_controller", 0], ["fission_casing", 0], ["fission_casing", 0]]);
TileRenderer.registerRotationModel(BlockID.fission_controller, 4, [["fission_casing", 0], ["fission_casing", 0], ["fission_casing", 0], ["chem_controller", 1], ["fission_casing", 0], ["fission_casing", 0]]);
TileRenderer.registerRotationModel(BlockID.fission_controller, 8, [["fission_casing", 0], ["fission_casing", 0], ["fission_casing", 0], ["chem_controller", 2], ["fission_casing", 0], ["fission_casing", 0]]);

Recipes2.addShaped({id: BlockID.fission_casing, count: 4}, "aba:bcb:aba", {a: ItemID.ingotBarium, b: ItemID.ingotMagnesium, c: VanillaItemID.blaze_powder});
Recipes2.addShaped(BlockID.fission_core, "aba:aba:aba", {a: ItemID.ingotChromium, b: VanillaItemID.blaze_rod});
Recipes2.addShaped(BlockID.fission_controller, "aba:cda:aba", {a: ItemID.ingotBeryllium, b: BlockID.fission_casing, c: VanillaBlockID.glass, d: VanillaItemID.blaze_rod});


const windowFission = new UI.StandartWindow({
    standart: {
        header: {text: {text: "Fission"}},
        inventory: {standart: true},
        background: {standart: true}
    },
    drawing: [
        {type: "frame", x: 400, y: 50, width: 54, height: 186, bitmap: "classic_frame_slot", scale: 3}
    ],
    elements: {
        scaleEnergy: {type: "scale", x: 403, y: 53, bitmap: "minechemistry.energy", scale: 3, direction: 1},
        scaleProgress: {type: "scale", x: 608, y: 126, z: 1, bitmap: "minechemistry.progress", scale: 3},
        backProgress: {type: "image", x: 608, y: 126, bitmap: "minechemistry.progress_bg", scale: 3, clicker: {
            onClick: function(container){
                RV && RV.openRecipePage("chemical_fission", container);
            }
        }},
        slotSource: {type: "slot", x: 540, y: 110, isValid: ValidFunc.element},
        slotResult1: {type: "slot", x: 700, y: 110, isValid: ValidFunc.output},
        slotResult2: {type: "slot", x: 760, y: 110, isValid: ValidFunc.output}
    }
});


registerMachine(BlockID.fission_controller, {

    defaultValues: {
        meta: 0,
        energy: 0,
        progress: 0,
        condition: 0
    },

    getGuiScreen: function(){
        return windowFission;
    },

    setModel: function(){
        TileRenderer.mapAtCoords(this.x, this.y, this.z, this.blockID, this.data.meta + this.data.condition * 4);
    },

    setCondition: function(condition){
        if(this.data.condition != condition){
            this.data.condition = condition;
            this.setModel();
        }
    },

    checkStructure: function(){
        const dir = StorageInterface.directionsBySide[this.data.meta + 2];
        let isValid = true;
        let x = y = z = xx = yy = zz = 0;
        loop:
        for(x = -2; x <= 2; x++){
        for(y = -2; y <= 2; y++){
        for(z = -2; z <= 2; z++){
            xx = this.x - dir.x * 3 + x;
            yy = this.y + 2 + y;
            zz = this.z - dir.z * 3 + z;
            if(Math.abs(x) === 2 || Math.abs(y) === 2 || Math.abs(z) === 2){
                if(World.getBlockID(xx, yy, zz) !== BlockID.fission_casing){
                    isValid = false;
                    break loop;
                }
            }
            else if(x === 0 && z === 0){
                if(World.getBlockID(xx, yy, zz) !== BlockID.fission_core){
                    isValid = false;
                    break loop;
                }
            }
        }
        }
        }
        this.setCondition(isValid ? 1 : 0);
        return isValid;
    },

    init: function(){
        this.checkStructure();
        this.setModel();
        delete this.liquidStorage;
    },

    destroy: function(){
        BlockRenderer.unmapAtCoords();
    },

    outputResult: function(num){
        const slotResult1 = this.container.getSlot("slotResult1");
        const half = num >> 1;
        const surplus = num & 1;
        if(surplus === 0){
            if(slotResult1.id === 0 || slotResult1.id === ItemID.chem_element && slotResult1.data === half && slotResult1.count <= 62){
                slotResult1.id = ItemID.chem_element;
                slotResult1.data = half;
                slotResult1.count += 2;
                return true;
            }
        }
        else{
            const slotResult2 = this.container.getSlot("slotResult2");
            if((slotResult1.id === 0 || slotResult1.id === ItemID.chem_element && slotResult1.data === half && slotResult1.count < 64) && (slotResult2.id === 0 || slotResult2.id === ItemID.chem_element && slotResult2.data === half + 1 && slotResult2.count < 64)){
                slotResult1.id = ItemID.chem_element;
                slotResult1.data = half;
                slotResult1.count++;
                slotResult2.id = ItemID.chem_element;
                slotResult2.data = half + 1;
                slotResult2.count++;
                return true;
            }
        }
        return false;
    },

    tick: function(){

        const slotSource = this.container.getSlot("slotSource");

        if(this.data.condition === 0){
            World.getThreadTime() % 40 === 0 && this.checkStructure();
        }
        else if(slotSource.id === ItemID.chem_element && slotSource.data > 1){
            if(this.data.condition === 1){
                if(this.checkStructure()){
                    this.setCondition(2);
                }
            }
            else{
                if(this.data.energy >= Cfg.fission.cost){
                    this.data.energy -= Cfg.fission.cost;
                    this.data.progress++;
                }
                if(this.data.progress >= Cfg.fission.time && this.outputResult(slotSource.data)){
                    slotSource.count--;
                    this.container.validateSlot("slotSource");
                    this.data.progress = 0;
                    this.setCondition(1);
                }
            }
        }
        else{
            this.data.progress = 0;
            this.setCondition(1);
        }

        this.container.setScale("scaleEnergy", this.data.energy / this.getEnergyStorage());
        this.container.setScale("scaleProgress", this.data.progress / Cfg.fission.time);
        StorageInterface.checkHoppers(this);

    },

    getEnergyStorage: function(){
        return Cfg.fission.storage;
    }

});

TileRenderer.setRotationPlaceFunction(BlockID.fission_controller);


StorageInterface.createInterface(BlockID.fission_controller, {
    slots: {
        slotSource: {input: true},
        slotResult1: {output: true},
        slotResult2: {output: true}
    }
});




// file: block/fusion.js

createBlock("fusion_casing", "Fusion Casing", [["fusion_casing", 0]]);
createBlock("fusion_core", "Fusion Core", [["fusion_casing", 0], ["fusion_casing", 0], ["fusion_core", 0]]);

createBlock("fusion_controller", "Fusion Controller", [["fusion_casing", 0], ["fusion_casing", 0], ["fusion_casing", 0], ["chem_controller", 0], ["fusion_casing", 0], ["fusion_casing", 0]]);
TileRenderer.setStandartModel(BlockID.fusion_controller, [["fusion_casing", 0], ["fusion_casing", 0], ["fusion_casing", 0], ["chem_controller", 0], ["fusion_casing", 0], ["fusion_casing", 0]]);
TileRenderer.registerRotationModel(BlockID.fusion_controller, 0, [["fusion_casing", 0], ["fusion_casing", 0], ["fusion_casing", 0], ["chem_controller", 0], ["fusion_casing", 0], ["fusion_casing", 0]]);
TileRenderer.registerRotationModel(BlockID.fusion_controller, 4, [["fusion_casing", 0], ["fusion_casing", 0], ["fusion_casing", 0], ["chem_controller", 1], ["fusion_casing", 0], ["fusion_casing", 0]]);
TileRenderer.registerRotationModel(BlockID.fusion_controller, 8, [["fusion_casing", 0], ["fusion_casing", 0], ["fusion_casing", 0], ["chem_controller", 2], ["fusion_casing", 0], ["fusion_casing", 0]]);

Recipes2.addShaped({id: BlockID.fusion_casing, count: 4}, "aba:bcb:aba", {a: ItemID.ingotTungsten, b: ItemID.ingotNeodymium, c: VanillaItemID.ender_pearl});
Recipes2.addShaped(BlockID.fusion_core, "aba:aca:aba", {a: ItemID.ingotThorium, b: BlockID.fusion_casing, c: VanillaItemID.netherstar});
Recipes2.addShaped(BlockID.fusion_controller, "aba:cda:aba", {a: ItemID.ingotSelenium, b: BlockID.fusion_casing, c: VanillaBlockID.glass, d: VanillaItemID.ender_pearl});


const windowFusion = new UI.StandartWindow({
    standart: {
        header: {text: {text: "Fusion"}},
        inventory: {standart: true},
        background: {standart: true}
    },
    drawing: [
        {type: "frame", x: 400, y: 50, width: 54, height: 186, bitmap: "classic_frame_slot", scale: 3}
    ],
    elements: {
        scaleEnergy: {type: "scale", x: 403, y: 53, bitmap: "minechemistry.energy", scale: 3, direction: 1},
        scaleProgress: {type: "scale", x: 668, y: 126, z: 1, bitmap: "minechemistry.progress", scale: 3},
        backProgress: {type: "image", x: 668, y: 126, bitmap: "minechemistry.progress_bg", scale: 3, clicker: {
            onClick: function(container){
                RV && RV.openRecipePage("chemical_fusion", container);
            }
        }},
        slotSource1: {type: "slot", x: 540, y: 110, isValid: ValidFunc.element},
        slotSource2: {type: "slot", x: 600, y: 110, isValid: ValidFunc.element},
        slotResult: {type: "slot", x: 760, y: 110, isValid: ValidFunc.output}
    }
});


registerMachine(BlockID.fusion_controller, {

    defaultValues: {
        meta: 0,
        energy: 0,
        progress: 0,
        condition: 0
    },

    getGuiScreen: function(){
        return windowFusion;
    },

    setModel: function(){
        TileRenderer.mapAtCoords(this.x, this.y, this.z, this.blockID, this.data.meta + this.data.condition * 4);
    },

    setCondition: function(condition){
        if(this.data.condition != condition){
            this.data.condition = condition;
            this.setModel();
        }
    },

    checkStructure: function(){
        const dir = StorageInterface.directionsBySide[this.data.meta + 2];
        let isValid = true;
        let x = y = z = xx = yy = zz = 0;
        loop:
        for(x = -2; x <= 2; x++){
        for(y = -2; y <= 2; y++){
        for(z = -2; z <= 2; z++){
            xx = this.x - dir.x * 3 + x;
            yy = this.y + 2 + y;
            zz = this.z - dir.z * 3 + z;
            if(Math.abs(x) === 2 || Math.abs(y) === 2 || Math.abs(z) === 2){
                if(World.getBlockID(xx, yy, zz) !== BlockID.fusion_casing){
                    isValid = false;
                    break loop;
                }
            }
            else if(x === 0 && z === 0){
                if(World.getBlockID(xx, yy, zz) !== BlockID.fusion_core){
                    isValid = false;
                    break loop;
                }
            }
        }
        }
        }
        this.setCondition(isValid ? 1 : 0);
        return isValid;
    },

    init: function(){
        this.checkStructure();
        this.setModel();
        delete this.liquidStorage;
    },

    destroy: function(){
        BlockRenderer.unmapAtCoords();
    },

    tick: function(){

        const slotSource1 = this.container.getSlot("slotSource1");
        const slotSource2 = this.container.getSlot("slotSource2");
        const sum = slotSource1.data + slotSource2.data;

        if(this.data.condition === 0){
            World.getThreadTime() % 40 === 0 && this.checkStructure();
        }
        else if(slotSource1.id === ItemID.chem_element && slotSource2.id === ItemID.chem_element && sum <= ElementRegistry.maxAtomicNumber){
            if(this.data.condition === 1){
                if(this.checkStructure()){
                    this.setCondition(2);
                }
            }
            else{
                if(this.data.energy >= Cfg.fusion.cost){
                    this.data.energy -= Cfg.fusion.cost;
                    this.data.progress++;
                }
                if(this.data.progress >= Cfg.fusion.time){
                    const slotResult = this.container.getSlot("slotResult");
                    if(slotResult.id === 0 || slotResult.id === ItemID.chem_element && slotResult.data === sum && slotResult.count < 64){
                        slotResult.id = ItemID.chem_element;
                        slotResult.data = sum;
                        slotResult.count++;
                        slotSource1.count--;
                        slotSource2.count--;
                        this.container.validateSlot("slotSource1");
                        this.container.validateSlot("slotSource2");
                        this.data.progress = 0;
                        this.setCondition(1);
                    }
                }
            }
        }
        else{
            this.data.progress = 0;
            this.setCondition(1);
        }

        this.container.setScale("scaleEnergy", this.data.energy / this.getEnergyStorage());
        this.container.setScale("scaleProgress", this.data.progress / Cfg.fusion.time);
        StorageInterface.checkHoppers(this);

    },

    getEnergyStorage: function(){
        return Cfg.fusion.storage;
    }

});

TileRenderer.setRotationPlaceFunction(BlockID.fusion_controller);


StorageInterface.createInterface(BlockID.fusion_controller, {
    slots: {
        slotSource1: {input: true},
        slotSource2: {input: true},
        slotResult: {output: true}
    }
});




// file: footer.js

ModAPI.registerAPI("ChemCore", {
    ElemMeta: ElemMeta,
    MolID: MolID,
    //Element: ElementRegistry,
    Molecule: MoleculeRegistry,
    Decompose: DecomposeRecipe,
    Synthesis: SynthesisRecipe
});




