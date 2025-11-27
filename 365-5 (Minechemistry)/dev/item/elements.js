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