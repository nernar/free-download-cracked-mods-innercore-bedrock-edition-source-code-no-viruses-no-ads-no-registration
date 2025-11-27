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