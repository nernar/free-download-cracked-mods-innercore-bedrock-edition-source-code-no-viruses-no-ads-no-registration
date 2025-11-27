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