IDRegistry.genBlockID("desh");
Block.createBlock("desh",[{name: "Desh Ore", texture: [["Desh", 0]], inCreative: true} ]);
Translation.addTranslation("Desh Ore",{
ru: "Деш"
})

Block.registerDropFunction("desh", function(coords, blockID){
    return [[ItemID.raw_desh, 1, 0]] 
});