IDRegistry.genBlockID("coiper_ore");
Block.createBlock("coiper_ore",[{name: "Coiper Ore", texture: [["Coiper Ore", 0]], inCreative: true} ]);
Translation.addTranslation("Coiper Ore",{
ru: "Руда Койпера"
});
Item.registerNameOverrideFunction(BlockID.coiper_ore, function(item, name){
    return Native.Color.BLUE + name + "\n§1" + "Руда, которой лет больше чем вселенной...";
});
Block.registerDropFunction("coiper_ore", function(coords, blockID){
    return [[ItemID.coiper_shard, 3, 0]] 
});