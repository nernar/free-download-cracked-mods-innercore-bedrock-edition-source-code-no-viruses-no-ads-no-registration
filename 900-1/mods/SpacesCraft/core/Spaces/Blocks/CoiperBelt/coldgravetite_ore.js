IDRegistry.genBlockID("coldgravetite_ore");
Block.createBlock("coldgravetite_ore",[{name: "Coldgravetite Ore", texture: [["Coldgravetite Prototype 1", 0],["Coldgravetite Prototype 2", 0],["Coldgravetite Prototype 3", 0],["Coldgravetite Prototype 4", 0],["Coldgravetite Prototype 5", 0],["Coldgravetite Prototype 6", 0]],
inCreative: true} ]);
Translation.addTranslation("Coldgravetite Ore",{
ru: "Замерзшая граветитовая руда"
});
Item.registerNameOverrideFunction(BlockID.coldgravetite_ore, function(item, name){
    return Native.Color.BLUE + name + "\n§1" + "С веками,гравитационная руда замерзала\nи теперь она прочная как стекло,\nи ничто не сможет растопить её";
});
Block.registerDropFunction("coldgravetite_ore", function(coords, blockID){
    return [[ItemID.coldgravetite_shard, 3, 0]] 
});

Recipes.addFurnace(ItemID.coldgravetite_shard, 0, ItemID.coldgravetite_ingot, 0);