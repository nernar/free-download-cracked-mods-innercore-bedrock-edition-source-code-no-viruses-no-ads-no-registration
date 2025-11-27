ModAPI.addAPICallback("SpacesAPI", function(api){
	EnergyTileRegistry.addEnergyTypeForId(BlockID.fuel_loader, ft);
	EnergyTileRegistry.addEnergyTypeForId(BlockID.coal_generator, ft);
	ft.registerWire(BlockID.enclosed_heavy_aluminum_wire, 400);
	    EnergyTileRegistry.addEnergyTypeForId(BlockID.refinery_sc, ft);
	var componentspaces = ["spacescraft_core","spacescraft_ram","spacescraft_chip"];
	var translateSpaces = ["Spaces Core","Spaces RAM","Spaces Chip"];
	var descriptio = ["Core: 4\nMax Temp: 800.0","Ram: 4.0\nCorepower: 1\nMax. Temp:650.0","Chip: Spaces..."]
	for(var i in componentspaces){let a = componentspaces[i];
	let b = translateSpaces[i];
	let c = descriptio[i];
	IDRegistry.genItemID(a); 
Item.createItem(a, b, {name: a, meta: 0}, {stack: 1});
Item.registerNameOverrideFunction(ItemID[a], function(item,name){return Native.Color.GOLD+ name + "\n§7" + c});
};
Translation.addTranslation("Spaces Chip", {
ru: "Космический чип"
});
Translation.addTranslation("Spaces RAM", {
ru: "Космическая оперативная память"
});
Translation.addTranslation("Spaces Core", {
ru: "Космический процессор"
});
});

ModAPI.addAPICallback("ICore", function(api){
	EnergyTileRegistry.addEnergyTypeForId(BlockID.semifluidGenerator, ft);
        EnergyTileRegistry.addEnergyTypeForId(BlockID.solarPanel, ft);
            EnergyTileRegistry.addEnergyTypeForId(BlockID.primalGenerator, ft);
                EnergyTileRegistry.addEnergyTypeForId(BlockID.electricHeatGenerator, ft);
    EnergyTileRegistry.addEnergyTypeForId(BlockID.rtGenerator, ft);
    EnergyTileRegistry.addEnergyTypeForId(BlockID.solidHeatGenerator, ft);
        EnergyTileRegistry.addEnergyTypeForId(BlockID.recycler, ft);
            EnergyTileRegistry.addEnergyTypeForId(BlockID.metalFormer, ft);
                EnergyTileRegistry.addEnergyTypeForId(BlockID.oreWasher, ft);
                    EnergyTileRegistry.addEnergyTypeForId(BlockID.thermalCentrifuge, ft);
    EnergyTileRegistry.addEnergyTypeForId(BlockID.blastFurnace, ft);
    EnergyTileRegistry.addEnergyTypeForId(BlockID.icFermenter, ft);
    EnergyTileRegistry.addEnergyTypeForId(BlockID.massFabricator, ft);
    EnergyTileRegistry.addEnergyTypeForId(BlockID.stirlingGenerator, ft);
        EnergyTileRegistry.addEnergyTypeForId(BlockID.ironFurnace, ft);
        EnergyTileRegistry.addEnergyTypeForId(BlockID.nuclearReactor, ft);
        EnergyTileRegistry.addEnergyTypeForId(BlockID.storageBatBox, ft);
        EnergyTileRegistry.addEnergyTypeForId(BlockID.storageCESU, ft);
        EnergyTileRegistry.addEnergyTypeForId(BlockID.storageMFE, ft);
        EnergyTileRegistry.addEnergyTypeForId(BlockID.storageMFSU, ft);
    EnergyTileRegistry.addEnergyTypeForId(BlockID.transformerHV, ft);
            EnergyTileRegistry.addEnergyTypeForId(BlockID.transformerLV, ft);
            EnergyTileRegistry.addEnergyTypeForId(BlockID.transformerEV, ft);
            EnergyTileRegistry.addEnergyTypeForId(BlockID.electricFurnace, ft);
            EnergyTileRegistry.addEnergyTypeForId(BlockID.inductionFurnace, ft);
            EnergyTileRegistry.addEnergyTypeForId(BlockID.macerator, ft);
            EnergyTileRegistry.addEnergyTypeForId(BlockID.compressor, ft);
            EnergyTileRegistry.addEnergyTypeForId(BlockID.extractor, ft);
            EnergyTileRegistry.addEnergyTypeForId(BlockID.canner, ft);
            EnergyTileRegistry.addEnergyTypeForId(BlockID.solidCanner, ft);
            var componentic2 = ["industrialcraft2_core","industrialcraft2_ram","industrialcraft2_chip"];
	var translateIc2= ["Industrialization Core","Industrialization RAM","Industrialization Chip"];
	var descriptio2 = ["Core: 1\nMax Temp: 450.0","Ram: 1.0\nCorepower: 1\nMax. Temp:470.0","Chip: Industrial"]
	for(var i in componentic2){let a = componentic2[i];
	let b = translateIc2[i];
	let c = descriptio2[i];
	IDRegistry.genItemID(a); 
Item.createItem(a, b, {name: a, meta: 0}, {stack: 1});
Item.registerNameOverrideFunction(ItemID[a], function(item,name){return Native.Color.GOLD+ name + "\n§7" + c});
};
Translation.addTranslation("Industrialization CHIP", {
ru: "Индустриальный чип"
});
Translation.addTranslation("Industrialization RAM", {
ru: "Индустриальная оперативная память"
});
Translation.addTranslation("Industrialization Core", {
ru: "Индустриальный процессор"
});
        });
        ModAPI.addAPICallback("ClassicUI", function(api){
api.registerUiConfig("scaner",{
			"x": 0,
			"y": -30,
			"scale": 0.20000000000000018,
			"theme": "dark"});});