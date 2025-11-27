ModAPI.addAPICallback("ICore", function(api){
    RegisterOre("Copper", {id: ItemID.ingotCopper}, 90, {color: "#99220D", type: "METALL", level:Base.Ores.Vanila.Iron.level});
    RegisterOre("Tin", {id: ItemID.ingotTin}, 90, {color: "#B3B3B3", type: "METALL", level:Base.Ores.Vanila.Iron.level});
    RegisterOre("Lead", {id: ItemID.ingotLead}, 180, {color: "#232329", type: "METALL", level:Base.Ores.Vanila.Iron.level});
    RegisterOre("Uranium", false, 800, {color: "#59B000", type: "METALL", level:Base.Ores.Vanila.Iron.level});
    RegisterOre("Iridium", {id: ItemID.iridiumChunk, count: [1, 1], data: 0, exp: [16, 32]}, 32000, {color: "#FFE0E0E0", type: "METALL", level:Base.Ores.Vanila.Diamond.level});
    
    Callback.addCallback("PostLoaded", function(){
    	for(var k in Base.Ores){
    	    if(k == "Vanila") continue;
            var b = Base.Ores[k];
            for(var i in b.ids){
            	var id = b.ids[i];
    	        if(ItemID["crushed"+k]){
                    api.Recipe.addRecipeFor("macerator", id, {id: ItemID["crushed"+k], count: 2, data: 0});
                }else if(ItemID["dust"+k]){
                    api.Recipe.addRecipeFor("macerator", id, {id: ItemID["dust"+k], count: 2, data: 0});
                }
            }
        }
    });
});