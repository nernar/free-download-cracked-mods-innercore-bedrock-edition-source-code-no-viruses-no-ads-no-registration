IDRegistry.genBlockID("venus_quartz");
Block.createBlock("venus_quartz",[{name: "Venus Quartz", texture: [["Ore Quartz Venus", 0]], inCreative: true} ]);
Translation.addTranslation("Venus Quartz",{
ru: "Венерианский кварц"
})

Recipes.addFurnace(BlockID.venus_quartz, VanillaItemID.quartz, 0);