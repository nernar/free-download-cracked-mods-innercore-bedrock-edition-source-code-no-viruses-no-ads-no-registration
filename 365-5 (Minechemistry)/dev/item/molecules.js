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