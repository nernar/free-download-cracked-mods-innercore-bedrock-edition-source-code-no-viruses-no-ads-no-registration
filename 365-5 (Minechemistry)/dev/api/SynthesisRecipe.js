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