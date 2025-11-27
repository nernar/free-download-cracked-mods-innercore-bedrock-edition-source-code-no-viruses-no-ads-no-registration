IDRegistry.genBlockID("arkanite_ore");
Block.createBlock("arkanite_ore",[{name: "Arkanite Ore",texture: [["Arkanite Ore", 0]], inCreative: true} ]);
Translation.addTranslation("Arkanite Ore",{
ru: "Арканитная порода"
});
Item.registerNameOverrideFunction(BlockID.arkanite_ore, function(item, name){
    return Native.Color.GOLD + name + "\n§4" + "Когда-то это был замерзший\n граветит,пока §o§7***************\n,************\n*****************\n§r §4не проникло внутрь,и не расплавило\n этот металл до температуры магмы";
});
Block.registerDropFunction("arkanite_ore", function(coords, blockID){
    return [[ItemID.arkanite_shard, 3, 0]] 
});

Recipes.addFurnace(ItemID.arkanite_shard, 0, ItemID.arkanite_ingot, 0);