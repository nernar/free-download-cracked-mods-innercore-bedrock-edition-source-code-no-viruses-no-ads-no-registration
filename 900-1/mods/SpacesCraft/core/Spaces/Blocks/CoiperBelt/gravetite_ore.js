IDRegistry.genBlockID("gravetite_ore");
Block.createBlock("gravetite_ore",[{name: "Gravetite Ore", texture: [["Gravetite Prototype", 0]], inCreative: true} ]);
Translation.addTranslation("Gravetite Ore",{
ru: "Граветитовая руда"
});
Item.registerNameOverrideFunction(BlockID.gravetite_ore, function(item, name){
    return Native.Color.BLUE + name + "\n§1" + "Эта руда образовалась очень давно,\nпосле катастроф на станциях,их структура стала из железообразной\n,в кристаллическую,а физика как будто\n стала с ними действовать неправильно";
});
Block.registerDropFunction("gravetite_ore", function(coords, blockID){
    return [[ItemID.gravetite_shard, 3, 0]] 
});

Recipes.addFurnace(ItemID.gravetite_shard, 0, ItemID.gravetite_ingot, 0);