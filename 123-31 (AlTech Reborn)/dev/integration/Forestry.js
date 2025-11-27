ModAPI.addAPICallback("ForestryAPI", function(api){
	RegisterOre("Copper", {id: ItemID.ingotCopper}, 90, {color: "#99220D", type: "METALL", level:Base.Ores.Vanila.Iron.level});
    RegisterOre("Tin", {id: ItemID.ingotTin}, 90, {color: "#B3B3B3", type: "METALL", level:Base.Ores.Vanila.Iron.level});
	RegisterOre("Apatite", {id: ItemID.apatite, count: [0, 1], data: 0, exp: [16, ]}, 150, {color: "#00E5FF", type: "COAL", level:Base.Ores.Vanila.Coal.level});
});