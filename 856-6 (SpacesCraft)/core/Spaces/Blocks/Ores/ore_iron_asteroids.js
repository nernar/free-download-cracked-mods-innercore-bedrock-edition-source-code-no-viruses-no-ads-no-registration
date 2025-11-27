IDRegistry.genBlockID("ore_iron_asteroids");
Block.createBlock("ore_iron_asteroids",[{name: "Ore Iron Asteroids", texture: [["Ore Iron Asteroids", 0]], inCreative: true} ]);
Translation.addTranslation("Ore Iron Asteroids",{
ru: "Железная руда из астероида"
})

Block.registerDropFunction("ore_iron_asteroids", function(coords, blockID){
    return [[ItemID.shard_iron, 1, 0]] 
});