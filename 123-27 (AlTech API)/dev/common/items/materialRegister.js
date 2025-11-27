var stones = {isLittleOre: true, isDust:true, isTinyDust: true, isSmallDust:true, generateRecipes:true}
var iron = {isGear: true, isDust:true, isPlate:true, isNugget:true, isChunk:true, isTinyDust:true, isSmallDust:true, isBolt:true, isScrew: true, isMachineBlock: true, isRing: true,  isModule:true, isRod:true, isLongRod:true, isWire:true, isCasing:true, isCrushed: true, isCrushedPurified: true, isCrushedCentrifuged:true, isImpureDust:true, isPureDust: true}
var gold = {isGear: true, isDust:true, isPlate:true, isNugget:true, isChunk: true, isTinyDust: true, isSmallDust: true, isBolt:true, isScrew: true, isMachineBlock: true, isRing: true,  isModule:true, isRod:true, isLongRod:true, isWire:true, isCasing:true, isCrushed: true, isCrushedPurified: true, isCrushedCentrifuged:true, isImpureDust:true, isPureDust: true}

const GetNaturalMetallsParams = function(){
	return {isTools: true, isModule: true, isBolt: true, isScrew: true, isGear: true, isRing: true, isMachineBlock: true, isImpureDust:true, isPureDust: true, isDust:true, isIngot:true, isPlate:true, isNugget:true, isChunk: true, isTinyDust: true, isSmallDust: true, isRod:true, isLongRod:true, isBlock: true, isWire:true, isCasing:true, isCrushed: true, isCrushedPurified: true, isCrushedCentrifuged:true}
}
const GetRadMetallsParams = function(){
	return {isTools: true, isImpureDust:true, isPureDust: true, isDust:true, isIngot:true, isPlate:true, isNugget:true, isChunk: true, isTinyDust: true, isSmallDust: true, isBlock: true, isCasing:true, isCrushed: true, isCrushedPurified: true, isCrushedCentrifuged:true}
}
const GetNoMetallsParams = function(par){
    return {isGem: par, isBlock: true, isDust:true, isImpureDust: true, isPureDust: true, isChunk: true, isTinyDust: true, isSmallDust: true, isCrushed: true, isCrushedPurified: true, isCrushedCentrifuged:true}
}
const GetAlloyParams = function(){
	return {isTools: true, isModule: true, isBolt: true, isScrew: true, isGear: true, isRing: true, isMachineBlock: true, isDust:true, isIngot:true, isPlate:true, isNugget:true, isChunk: true, isTinyDust: true, isSmallDust: true, isRod:true, isLongRod:true, isBlock: true, isWire:true, isCasing:true}
}
const GetGemsParams = function(par){
	return {isDust: true, isTinyDust: true, isSmallDust: true, generateRecipes:true, isImpureDust:true, isPureDust: true, isCrushed: true, isCrushedPurified: true, isCrushedCentrifuged:true, isGem: par}
}
const GetCompoundParams = function(arr, par){
	return {isIngot: true, isDust: true, isTinyDust: true, isSmallDust: true, isImpureDust: true, isPureDust: true, generateRecipes:true, isCrushed: true, isCrushedPurified: true, isCrushedCentrifuged:true}
}

//Callback.addCallback("PostLoaded", function(){
ATMat.MaterialRegister("Stone", stones, {lvl:2, temp: 1000, long: 10}, "#FF9B9B9B")
ATMat.MaterialRegister("Red_Granit", stones, {lvl:2, temp: 1000, long: 10}, "#FF2A272B")
ATMat.MaterialRegister("Black_Granit", stones, {lvl:3, temp: 1000, long: 10}, "#FF700000")

//ATMat.MaterialRegister("Test_No_Metall", GetNoMetallsParams(0, []), {temp: 0, long: 0, lvl: 0})
//ATMat.MaterialRegister("Test_Alloy", GetAlloyParams(), {temp: 0, long: 0, lvl: 0})
//ATMat.MaterialRegister("Test_Metall", GetNaturalMetallsParams([]), {temp: 0, long: 0, lvl: 0})
//ATMat.MaterialRegister("Test_Gem", GetGemsParams([], true), {temp: 0, long: 0, lvl: 0})
//ATMat.MaterialRegister("Test_Compound", GetCompoundParams([], false), {temp: 0, long: 0, lvl: 0})
//ATMat.MaterialRegister("Test_Rad_Metall", GetRadMetallsParams([]), {temp: 0, long: 0, lvl: 0})

ATMat.MaterialRegister("Sulfur", GetNoMetallsParams(true), {block: "no_metall", adRes: ["Manganese", "Lignite"], gemType: "metallic", fuel: 800, temp:200, long:10, lvl:1}, "#FE9D9F00")
ATMat.MaterialRegister("Lignite", GetNoMetallsParams(true), {block: "no_metall", adRes: ["Lignite", "Coal"], gemType:"lignite", fuel: 1000, temp:200, long:10, lvl:1}, "#FF563C3C")
ATMat.MaterialRegister("Lapis", {isDust: true, isSmallDust:true, isCrushed: true,  isCrushedPurified: true, isCrushedCentrifuged:true, isImpureDust: true, isPureDust: true}, {block: "no_metall", adRes: ["Nickel", "Saphire"], compound: ["Aluminium", "Manganese", "Saphire"], temp:600, long:10, lvl:1}, "#FF1F50B8")
ATMat.MaterialRegister("Redstone", {isCrushed: true, isCrushedPurified: true, isCrushedCentrifuged:true, isImpureDust: true, isPureDust: true}, {block: "no_metall", block: "no_metall", adRes: ["Tetrahedrite", "Ruby"], temp:600, long:10, lvl:1}, "#FF0018")
ATMat.MaterialRegister("Coal", {isCrushed: true, isCrushedPurified: true, isCrushedCenrifuged:true, isSmallDust:true, isDust:true, isImpureDust:true, isPureDust: true}, {adRes: ["Lignite", "Graphite"], fuel: 1600, lvl:1, temp:200, long:10}, "#FF363636")

ATMat.MaterialRegister("Rubber", {isGear: true, isDust:true, isSmallDust:true, isIngot:true, isRod:true, isLongRod:true, isNugget:true, isPlate:true, isRing:true, generateRecipes:true, isWire:true}, {temp:200, long:10, lvl:1}, "#FF000000")

ATMat.MaterialRegister("Steel", GetAlloyParams(), {block: "metall", tool: {durability: 400, level: 3, efficiency:5.2, damage: 4, enchantability: 32, def: 12}, temp:steelTemp, long:steelLong, lvl:2}, "#FF585766")
ATMat.MaterialRegister("Bronze", GetAlloyParams(), {block: "metall", tool: {durability: 250, level: 2, efficiency:4.8, damage: 3, enchantability: 32}, temp:1100, long:10, lvl:2}, "#FFCF752D")
ATMat.MaterialRegister("Stainless", GetAlloyParams(), {block: "metall", tool: {durability: 625, level: 5, efficiency:6, damage: 5, enchantability: 32, def: 16}, temp:1800, long:260, lvl:3}, "#FFDDDDDD")
ATMat.MaterialRegister("Electrum", GetAlloyParams(), {block: "metall", tool: {durability: 300, level: 2, efficiency:4.2, damage: 2, enchantability: 32, def: 8}, temp: 1108, long: 10, lvl: 2}, "#FFD36B")
ATMat.MaterialRegister("Invar", GetAlloyParams(), {block: "metall", tool: {durability: 320, level: 2, efficiency:4.5, damage: 2, enchantability: 32, def: 9}, temp: 1513, long: 34, lvl: 2}, "#FF9B9376")

ATMat.MaterialRegister("Zinc", GetNaturalMetallsParams(), {block: "metall", adRes: ["Antimony", "Manganese"], tool: {durability: 200, level: 2, efficiency:3.8, damage: 2, enchantability: 24, def: 6}, temp:1900,  long:300, lvl:3}, "#FFBDFB")
ATMat.MaterialRegister("Chrome", GetNaturalMetallsParams(), {block: "metall", adRes: ["Zinc", "Manganese"], tool: {durability: 230, level: 2, efficiency:4.125, damage: 2, enchantability: 24, def: 6}, temp:1900,  long:300, lvl:3}, "#FFF8E9FF")
ATMat.MaterialRegister("Aluminum", GetNaturalMetallsParams(), {block: "metall", adRes: ["Bauxite", "Iron"], tool: {durability: 185, level: 3, efficiency:4.4, damage: 3, enchantability: 32, def: 8}, temp:600, long:10, lvl:2}, "#FF657EEA")
ATMat.MaterialRegister("Titanium",  GetNaturalMetallsParams(), {block: "metall", adRes: ["Bauxite", "Aluminium"], tool: {durability: 2250, level: 5, efficiency:5.0, damage: 4, enchantability: 24, def: 16}, temp:1600, long:240, lvl:3}, "#FFBAC5F5")
ATMat.MaterialRegister("Tungsten", GetNaturalMetallsParams(), {block: "metall", adRes: ["Aluminium", "Manganese"], tool: {durability: 4525, level: 6, efficiency:4.75, damage: 3, enchantability: 32, def: 20}, temp:3400, long:400, lvl:4}, "#000A49") 
ATMat.MaterialRegister("Copper", GetNaturalMetallsParams(), {block: "metall", adRes: ["Malachite", "Tetrahedrite"], tool: {durability: 150, level: 1, efficiency:3.8, damage: 1, enchantability: 16, def: 6}, temp:copperTemp, long:copperLong, lvl:1}, "#FF7A3B")
ATMat.MaterialRegister("Tin", GetNaturalMetallsParams(), {block: "metall", adRes: ["Casseterute", "Iron"], tool: {durability: 120, level: 1, efficiency:3, damage: 1, enchantability: 16, def: 5}, temp:tinTemp, long:tinLong, lvl:1}, "#B1B1B1")
ATMat.MaterialRegister("Manganese", GetNaturalMetallsParams(), {block: "metall", adRes: ["Tungsten", "Zinc"], tool: {durability: 180, level: 1, efficiency:3, damage: 1, enchantability: 16, def:4}, temp:1300, long:20, lvl:2}, "#FFB969")
ATMat.MaterialRegister("Nickel",  GetNaturalMetallsParams(), {block: "metall", adRes: ["Iron", "Aluminium"], tool: {durability: 80, level: 1, efficiency:2.6, damage: 1, enchantability: 16, def: 5}, temp:1400, long:60, lvl:1}, "#FFBFC2EC")
ATMat.MaterialRegister("Antimony", GetNaturalMetallsParams(), {block: "metall", adRes: ["Chrome", "Zinc"], tool: {durability: 100, level: 1, efficiency:2.2, damage: 1, enchantability: 16, def: 3}, temp:1600, long:30, lvl:1}, "#A9C1C4")
ATMat.MaterialRegister("Silver", GetNaturalMetallsParams(), {block: "metall", adRes: ["Gold", "Platinum"], tool: {durability: 190, level: 2, efficiency:3.8, damage: 2, enchantability: 32, def: 8}, temp:900, long:10, lvl:1}, "#D3D3D3")
ATMat.MaterialRegister("Lead", GetNaturalMetallsParams(), {block: "metall", adRes: ["Galena", "Zinc"], tool: {durability: 220, level: 1, efficiency:2.75, damage: 1, enchantability: 16, def: 6}, temp:300, long:10, lvl:1}, "#360058")
ATMat.MaterialRegister("Platinum", GetNaturalMetallsParams(), {block: "metall", adRes: ["Gold", "Iridium"], tool: {durability: 400, level: 3, efficiency:4, damage: 3, enchantability: 32, def: 10}, temp: 1290, long: 20, lvl: 3}, "#D3FFFF")
ATMat.MaterialRegister("Iridium", GetNaturalMetallsParams(), {block: "metall", adRes: ["Diamond", "Platinum"], tool: {durability: 775, level: 4, efficiency:5, damage: 5, enchantability: 32, def: 12}, temp: 3400, long: 200, lvl: 4}, "#FFE0E0E0")

ATMat.MaterialRegister("Iron", iron, {adRes: ["Aluminium", "Nickel"], temp: 1000, long: 10, lvl:2}, "#A9ACA4")
ATMat.MaterialRegister("Gold", gold, {adRes: ["Silver", "Platinum"], temp: 1000, long: 10, lvl:1}, "#FFFDFF47")

ATMat.MaterialRegister("Diamond", GetGemsParams(), {adRes: ["Graphite", "Chrome"], temp:4000, long:400, lvl:3}, "#00D0E9")
ATMat.MaterialRegister("Ruby", GetGemsParams(true), {gemType:"opal", compound: ["Chrome", "Aluminium"], temp:2000, long:400, lvl:3}, "#FF0200")
ATMat.MaterialRegister("Saphire", GetGemsParams(true), {gemType:"rectangle", compound: ["Aluminium", "Manganese"], temp:2300, long:400, lvl:3}, "#3200FF")
ATMat.MaterialRegister("Emerald", GetGemsParams(), {compound: ["Malachite", "Manganese"], temp:1400, long:400, lvl:3}, "#13D800")

ATMat.MaterialRegister("Bauxite", GetCompoundParams(), {compound: ["Aluminium", "Titanium"], temp:1446, long: 40, lvl:1}, "#680007")
ATMat.MaterialRegister("Magnetite", GetCompoundParams(), {compound: ["Iron", "Gold"], temp:1200, lvl:2, long:10}, "#393939")
ATMat.MaterialRegister("Tetrahedrite", GetCompoundParams(), {compound: ["Copper"], temp:copperTemp, long:copperLong, lvl:1}, "#781F1A")
ATMat.MaterialRegister("Galena", GetCompoundParams(), {compound: ["Lead", "Silver"], temp: 800, long: 10, lvl:1}, "#FF271F2E")
ATMat.MaterialRegister("Malachite", GetCompoundParams(), {compound: ["Manganese", "Emerald"], temp: 1000, long: 10, lvl: 2}, "#698C43")
ATMat.MaterialRegister("Cassiterite", GetCompoundParams(), {compound: ["Tin", "Silver"], temp: 309, long: 10, lvl: 1}, "#9F9F9F")
ATMat.MaterialRegister("Graphite", GetCompoundParams(), {compound: ["Coal", "Diamond"], temp: 1211, long: 30, lvl: 2}, "#283030")
ATMat.MaterialRegister("Brown_Limonite", GetCompoundParams(), {compound: ["Iron", "Yellow_Limonite"], temp: 1000, long: 10, lvl:2}, "#FFA55300")
ATMat.MaterialRegister("Yellow_Limonite", GetCompoundParams(), {compound: ["Iron", "Brown_Limonite"], temp: 1000, long: 10, lvl:2}, "#FFA5A500")
ATMat.MaterialRegister("Banded_Iron", GetCompoundParams(), {compound: ["Iron"], temp: 1000, long: 10, lvl:2}, "#FF513232")

ATMat.MaterialRegister("Thorium", GetRadMetallsParams(), {block: "metall", adRes: ["Palladium", "Plutonium"], tool: {durability: 350, level: 5, efficiency:4, damage: 7, enchantability: 0}, temp: 2014, long: 39, lvl: 3, def: 10, rad: 1}, "#000346")
ATMat.MaterialRegister("Uranium", GetRadMetallsParams(), {block: "metall", adRes: ["Uranium", "Plutonium"], tool: {durability: 450, level: 4, efficiency:4.2, damage: 5, enchantability: 0}, temp: 1648, long: 30, lvl: 3, def: 8, rad: 0.7}, "#59B000")
ATMat.MaterialRegister("Plutonium", GetRadMetallsParams(), {block: "metall", adRes: ["Thorium", "Palladium"], tool: {durability: 200, level: 4, efficiency:3, damage: 10, enchantability: 0}, temp: 2451, long: 46, lvl: 3, def: 6, rad: 0.8}, "#FF0008")
ATMat.MaterialRegister("Palladium", GetRadMetallsParams(), {block: "metall", adRes: ["Thorium", "Uranium"], tool: {durability: 310, level: 4, efficiency:4, damage: 6, enchantability: 0}, temp: 1894, long: 55, lvl: 3, def: 9, rad: 0.5}, "#B3BBAA")

ATMat.RegisterImpaleDust(331, [ItemID.dustNikel, 1, ItemID.dustTinyRuby, 1], ATMat.RetArg("dusts", "Redstone", "lvl"))