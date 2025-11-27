ModAPI.addAPICallback("ICore", function(api){
//Тут собраны соединения проводов,совместимость энергий и рецепты с блоками для интеграции
IDRegistry.genBlockID("enclosed_copper_cable");
Block.createBlockWithRotation("enclosed_copper_cable",[{name: "Enclosed Copper Cable", texture: [["Oxygentile 3", 0],["Oxygentile 3", 0],["Enclosed Copper Cable", 0],["Enclosed Copper Cable", 0],["Enclosed Copper Cable", 0],["Enclosed Copper Cable", 0]], inCreative: true} ]);
Translation.addTranslation("Enclosed Copper Cable",{
ru: "Герметичный медный кабель §6(IC2)"
});
EU.registerWire(BlockID.enclosed_copper_cable, 128);

IDRegistry.genBlockID("enclosed_gold_cable");
Block.createBlockWithRotation("enclosed_gold_cable",[{name: "Enclosed Gold Cable", texture: [["Oxygentile 3", 0],["Oxygentile 3", 0],["Enclosed Gold Cable", 0],["Enclosed Gold Cable", 0],["Enclosed Gold Cable", 0],["Enclosed Gold Cable", 0]], inCreative: true} ]);
Translation.addTranslation("Enclosed Gold Cable",{
ru: "Герметичный золотой кабель §6(IC2)"
});
EU.registerWire(BlockID.enclosed_gold_cable, 512);

IDRegistry.genBlockID("enclosed_lv_cable");
Block.createBlockWithRotation("enclosed_lv_cable",[{name: "Enclosed LV Cable", texture: [["Oxygentile 3", 0],["Oxygentile 3", 0],["Enclosed LV Cable", 0],["Enclosed LV Cable", 0],["Enclosed LV Cable", 0],["Enclosed LV Cable", 0]], inCreative: true} ]);
Translation.addTranslation("Enclosed LV Cable",{
ru: "Герметичный lv кабель §6(IC2)"
});

EU.registerWire(BlockID.enclosed_lv_cable, 2048);
var group = ICRender.getGroup("ic-wire");
group.add(BlockID.oxygen_storage_module, -1);
group.add(BlockID.collector_sc, -1);
group.add(BlockID.enclosed_copper_cable, -1);
group.add(BlockID.enclosed_gold_cable, -1);
group.add(BlockID.coal_generator, -1);
group.add(BlockID.oxygen_compressor, -1);
group.add(BlockID.oxygen_decompressor, -1);
group.add(BlockID.compressor_sj, -1);
group.add(BlockID.enclosed_lv_cable, -1);
group.add(BlockID.refinery_sc, -1);
cableAPI.addGroup(BlockID.semifluidGenerator);
cableAPI.addGroup(BlockID.solarPanel);
cableAPI.addGroup(BlockID.primalGenerator);
cableAPI.addGroup(BlockID.electricHeatGenerator);

cableAPI.addGroup(BlockID.fluidHeatGenerator);
cableAPI.addGroup(BlockID.enclosed_aluminum_wire);
cableAPI.addGroup(BlockID.rtHeatGenerator);
cableAPI.addGroup(BlockID.solidHeatGenerator -1);

cableAPI.addGroup(BlockID.recycler);
cableAPI.addGroup(BlockID.metalFormer);
cableAPI.addGroup(BlockID.oreWasher);
cableAPI.addGroup(BlockID.thermalCentrifuge);
cableAPI.addGroup(BlockID.blastFurnace);
cableAPI.addGroup(BlockID.icFermenter);
cableAPI.addGroup(BlockID.massFabricator);
cableAPI.addGroup(BlockID.stirlingGenerator);

cableAPI.addGroup(BlockID.ironFurnace);
cableAPI.addGroup(BlockID.nuclearReactor);
cableAPI.addGroup(BlockID.reactorChamber);
cableAPI.addGroup(BlockID.storageBatBox);

cableAPI.addGroup(BlockID.storageCESU);
cableAPI.addGroup(BlockID.storageMFE);
cableAPI.addGroup(BlockID.storageMFSU);
cableAPI.addGroup(BlockID.transformerLV);
cableAPI.addGroup(BlockID.transformerHV);
cableAPI.addGroup(BlockID.transformerEV);

cableAPI.addGroup(BlockID.electricFurnace);
cableAPI.addGroup(BlockID.inductionFurnace);
cableAPI.addGroup(BlockID.macerator);
cableAPI.addGroup(BlockID.compressor);
cableAPI.addGroup(BlockID.extractor);
cableAPI.addGroup(BlockID.solidCanner);
cableAPI.addGroup(BlockID.canner);

    EnergyTileRegistry.addEnergyTypeForId(BlockID.semifluidGenerator, sj);
        EnergyTileRegistry.addEnergyTypeForId(BlockID.solarPanel, sj);
            EnergyTileRegistry.addEnergyTypeForId(BlockID.primalGenerator, sj);
                EnergyTileRegistry.addEnergyTypeForId(BlockID.electricHeatGenerator, sj);
    EnergyTileRegistry.addEnergyTypeForId(BlockID.rtGenerator, sj);
    EnergyTileRegistry.addEnergyTypeForId(BlockID.solidHeatGenerator, sj);
        EnergyTileRegistry.addEnergyTypeForId(BlockID.recycler, sj);
            EnergyTileRegistry.addEnergyTypeForId(BlockID.metalFormer, sj);
                EnergyTileRegistry.addEnergyTypeForId(BlockID.oreWasher, sj);
                    EnergyTileRegistry.addEnergyTypeForId(BlockID.thermalCentrifuge, sj);
    EnergyTileRegistry.addEnergyTypeForId(BlockID.blastFurnace, sj);
    EnergyTileRegistry.addEnergyTypeForId(BlockID.icFermenter, sj);
    EnergyTileRegistry.addEnergyTypeForId(BlockID.massFabricator, sj);
    EnergyTileRegistry.addEnergyTypeForId(BlockID.stirlingGenerator, sj);
        EnergyTileRegistry.addEnergyTypeForId(BlockID.ironFurnace, sj);
        EnergyTileRegistry.addEnergyTypeForId(BlockID.nuclearReactor, sj);
        EnergyTileRegistry.addEnergyTypeForId(BlockID.storageBatBox, sj);
        EnergyTileRegistry.addEnergyTypeForId(BlockID.storageCESU, sj);
        EnergyTileRegistry.addEnergyTypeForId(BlockID.storageMFE, sj);
        EnergyTileRegistry.addEnergyTypeForId(BlockID.storageMFSU, sj);
    EnergyTileRegistry.addEnergyTypeForId(BlockID.transformerHV, sj);
            EnergyTileRegistry.addEnergyTypeForId(BlockID.transformerLV, sj);
            EnergyTileRegistry.addEnergyTypeForId(BlockID.transformerEV, sj);
            EnergyTileRegistry.addEnergyTypeForId(BlockID.electricFurnace, sj);
            EnergyTileRegistry.addEnergyTypeForId(BlockID.inductionFurnace, sj);
            EnergyTileRegistry.addEnergyTypeForId(BlockID.macerator, sj);
            EnergyTileRegistry.addEnergyTypeForId(BlockID.compressor, sj);
            EnergyTileRegistry.addEnergyTypeForId(BlockID.extractor, sj);
            EnergyTileRegistry.addEnergyTypeForId(BlockID.canner, sj);
            EnergyTileRegistry.addEnergyTypeForId(BlockID.solidCanner, sj);
        
   cableAPI.addGroup(BlockID.pump);
    group.add(BlockID.fuel_loader, -1);
        
Callback.addCallback("LevelCreated", function() {

Recipes.addShaped({id: ItemID.ingotCopper, count: 1, data: 0}, [
    "",
    " a ",
    ""
], ['a', ItemID.copper_ingot_sc, 0]);

Recipes.addShaped({id: ItemID.ingotCopper, count: 1, data: 0}, [
    "",
    " a ",
    ""
], ['a', ItemID.ingot_copper_sc, 0]);

Recipes.addShaped({id: ItemID.canister_copper, count: 1, data: 0}, [
    "a a",
    "a a",
    "aaa"
], ['a', ItemID.ingotCopper, 0]);
//канистра из меди
Recipes.addShaped({id: ItemID.canister_tin, count: 1, data: 0}, [
    "a a",
    "a a",
    "aaa"
], ['a', ItemID.ingotTin, 0]);

Recipes.addShaped({id: ItemID.canister_tin, count: 1, data: 0}, [
    "a a",
    "a a",
    "aaa"
], ['a', ItemID.plateTin, 0]);

Recipes.addShaped({id: ItemID.canister_copper, count: 1, data: 0}, [
    "a a",
    "a a",
    "aaa"
], ['a', ItemID.plateCopper, 0]);

Recipes.addShaped({id: BlockID.block_tin_sc, count: 1, data: 0}, [
    "aaa",
    "aaa",
    "aaa"
], ['a', ItemID.plateTin, 0]);
Recipes.addShaped({id: BlockID.block_copper_sc, count: 1, data: 0}, [
    "aaa",
    "aaa",
    "aaa"
], ['a', ItemID.plateCopper]);

Recipes.addShaped({id: ItemID.ingotTin, count: 1, data: 0}, [
    "",
    " a ",
    ""
], ['a', ItemID.ingot_tin_sc, 0]);

Recipes.addShaped({id: ItemID.ingot_tin_sc, count: 1, data: 0}, [
    "",
    " a ",
    ""
], ['a', ItemID.ingotTin, 0]);

Recipes.addShaped({id: ItemID.compressed_iron, count: 1, data: 0}, [
    "",
    " a ",
    ""
], ['a', ItemID.plateIron, 0]);

Recipes.addShaped({id: ItemID.plateIron, count: 1, data: 0}, [
    "",
    " a ",
    ""
], ['a', ItemID.compressed_iron, 0]);

Recipes.addShaped({id: ItemID.plateTin, count: 1, data: 0}, [
    "",
    " a ",
    ""
], ['a', ItemID.compressed_tin, 0]);

Recipes.addShaped({id: ItemID.compressed_tin, count: 1, data: 0}, [
    "",
    " a ",
    ""
], ['a', ItemID.plateTin, 0]);

Recipes.addShaped({id: ItemID.compressed_copper, count: 1, data: 0}, [
    "",
    " a ",
    ""
], ['a', ItemID.plateCopper, 0]);

Recipes.addShaped({id: ItemID.plateCopper, count: 1, data: 0}, [
    "",
    " a ",
    ""
], ['a', ItemID.compressed_copper, 0]);

Recipes.addShaped({id: ItemID.compressed_bronze, count: 1, data: 0}, [
    "",
    " a ",
    ""
], ['a', ItemID.plateBronze, 0]);

Recipes.addShaped({id: ItemID.plateBronze, count: 1, data: 0}, [
    "",
    " a ",
    ""
], ['a', ItemID.compressed_bronze, 0]);

Recipes.addShaped({id: ItemID.iron_steel_ingot, count: 1, data: 0}, [
    "",
    "ab",
    ""
], ['a', ItemID.ingotSteel, 0, 'b', VanillaItemID.iron_ingot, 0]);

Recipes.addShaped({ id: BlockID.primalGenerator, count: 1, data: 0 }, [
        " x ",
        "###",
        " a "
    ], ['#', ItemID.compressed_iron, 0, 'a', BlockID.ironFurnace, -1, 'x', ItemID.storageBattery, -1]);
    
    Recipes.addShaped({ id: BlockID.geothermalGenerator, count: 1, data: 0 }, [

        "xax",

        "xax",

        "b#b"

    ], ['#', BlockID.coal_generator, -1, 'a', ItemID.cellEmpty, 0, 'b', ItemID.casingIron, 0, 'x', 20, -1]);
    
    Recipes.addShaped({ id: BlockID.genWindmill, count: 1, data: 0 }, [

        "x x",

        " # ",

        "xcx"

    ], ['#', BlockID.coal_generator, -1, 'x', ItemID.compressed_steel, 0, 'c', ItemID.coil, 0]);
    
    Recipes.addShaped({ id: BlockID.genWindmill, count: 1, data: 0 }, [

        "x x",

        " # ",

        "xcx"

    ], ['#', BlockID.coal_generator, -1, 'x', ItemID.plateSteel, 0, 'c', ItemID.coil, 0]);
    
    Recipes.addShaped({ id: BlockID.genWindmill, count: 1, data: 0 }, [

        "x x",

        " # ",

        "xcx"

    ], ['#', BlockID.primalGenerator, -1, 'x', ItemID.compressed_steel, 0, 'c', ItemID.coil, 0]);
    
    Recipes.addShaped({ id: BlockID.genWatermill, count: 1, data: 0 }, [

        "x x",

        "a#a",

        "xcx"

    ], ['#', BlockID.coal_generator, -1, 'x', ItemID.compressed_steel, 0, 'a', ItemID.casingSteel, 0, 'c', ItemID.coil, 0]);
    
    Recipes.addShaped({ id: BlockID.genWatermill, count: 1, data: 0 }, [

        "x x",

        "a#a",

        "xcx"

    ], ['#', BlockID.coal_generator, -1, 'x', ItemID.plateSteel, 0, 'a', ItemID.casingSteel, 0, 'c', ItemID.coil, 0]);
    
    Recipes.addShaped({ id: BlockID.genWatermill, count: 1, data: 0 }, [

        "x x",

        "a#a",

        "xcx"

    ], ['#', BlockID.primalGenerator, -1, 'x', ItemID.plateSteel, 0, 'a', ItemID.compressed_steel, 0, 'c', ItemID.coil, 0]);
    
    Recipes.addShaped({ id: BlockID.rtGenerator, count: 1, data: 0 }, [

        "ccc",

        "c#c",

        "cxc"

    ], ['#', BlockID.reactorChamber, 0, 'x', BlockID.coal_generator, 0, 'c', ItemID.casingIron, 0]);
    
    Recipes.addShaped({ id: BlockID.stirlingGenerator, count: 1, data: 0 }, [

        "cxc",

        "c#c",

        "ccc"

    ], ['#', BlockID.coal_generator, 0, 'c', ItemID.casingIron, 0, 'x', ItemID.heatConductor, 0]);

Recipes.addShaped({ id: BlockID.electricHeatGenerator, count: 1, data: 0 }, [

        "xbx",

        "x#x",

        "xax"

    ], ['#', ItemID.circuitBasic, 0, 'x', ItemID.casingIron, 0, 'a', ItemID.heatConductor, 0, 'b', ItemID.battery, -1]);
    
    Recipes.addShaped({ id: BlockID.nuclearReactor, count: 1, data: 0 }, [

        "xcx",

        "aaa",

        "x#x"

    ], ['#', BlockID.coal_generator, 0, 'a', BlockID.reactorChamber, 0, 'x', ItemID.densePlateLead, 0, 'c', ItemID.circuitAdvanced, 0]);
    
    Recipes.addShaped({ id: BlockID.storageBatBox, count: 1, data: 0 }, [

        "xax",

        "bbb",

        "xxx"

    ], ['a', ItemID.cableTin1, 0, 'x', 5, -1, 'b', ItemID.battery, -1]);
    
    Recipes.addShaped({ id: BlockID.storageCESU, count: 1, data: 0 }, [

        "bxb",

        "aaa",

        "bbb"

    ], ['x', ItemID.cableCopper1, 0, 'a', ItemID.storageAdvBattery, -1, 'b', ItemID.compressed_bronze, 0]);
    
    Recipes.addShaped({ id: BlockID.storageCESU, count: 1, data: 0 }, [

        "bxb",

        "aaa",

        "bbb"

    ], ['x', BlockID.CopperWire, 0, 'a', ItemID.storageAdvBattery, -1, 'b', ItemID.plateBronze, 0]);
    
    Recipes.addShaped({ id: BlockID.storageCESU, count: 1, data: 0 }, [

        "bxb",

        "aaa",

        "bbb"

    ], ['x', BlockID.CopperWire, 0, 'a', ItemID.storageAdvBattery, -1, 'b', ItemID.compressed_bronze, 0]);
    
    Recipes.addShaped({ id: BlockID.transformerMV, count: 1, data: 0 }, [

        "b",

        "x",

        "b"

    ], ['x', BlockID.machineBlockBasic, 0, 'b', BlockID.CopperWire, 0]);
    
    Recipes.addShaped({ id: BlockID.ironFurnace, count: 1, data: 0 }, [

        " x ",

        "x x",

        "x#x"

    ], ['#', 61, -1, 'x', ItemID.compressed_iron, 0]);
    
    Recipes.addShaped({ id: BlockID.inductionFurnace, count: 1, data: 0 }, [

        "xxx",

        "x#x",

        "xax"

    ], ['#', BlockID.electricFurnace, -1, 'x', ItemID.copper_ingot_sc, 0, 'a', BlockID.machineBlockAdvanced, 0]);
    
    Recipes.addShaped({ id: BlockID.solidCanner, count: 1, data: 0 }, [

        "c#c",

        "cxc",

        "ccc"

    ], ['#', BlockID.machineBlockBasic, 0, 'x', ItemID.circuitBasic, 0, 'c', ItemID.canister_tin, 0]);
    
    Recipes.addShaped({ id: BlockID.recycler, count: 1, data: 0 }, [

        " a ",

        "x#x",

        "bxb"

    ], ['#', BlockID.compressor, -1, 'x', 3, -1, 'a', 348, 0, 'b', ItemID.compressed_steel, 0]);
    
    Recipes.addShaped({ id: BlockID.oreWasher, count: 1, data: 0 }, [

        "aaa",

        "b#b",

        "xcx"

    ], ['#', BlockID.machineBlockBasic, 0, 'x', ItemID.electricMotor, 0, 'a', ItemID.compressed_iron, 0, 'b', 325, 0, 'c', ItemID.circuitBasic, 0]);
    
    Recipes.addShaped({ id: BlockID.cropHarvester, count: 1, data: 0 }, [

        "zcz",

        "s#s",

        "pap"

    ], ['#', BlockID.machineBlockBasic, 0, 'z', ItemID.circuitBasic, 0, 'c', 54, -1, 'a', ItemID.agriculturalAnalyzer, 0, 'p', ItemID.compressed_iron, 0, 's', 359, 0]);

Recipes.addShaped({ id: ItemID.ingotAlloy, count: 2, data: 0 }, [

        "aaa",

        "bbb",

        "ccc"

    ], ['a', ItemID.compressed_iron, -1, 'b', ItemID.plateBronze, -1, 'c', ItemID.plateTin, -1]);
    
    Recipes.addShaped({ id: ItemID.ingotAlloy, count: 2, data: 0 }, [

        "aaa",

        "bbb",

        "ccc"

    ], ['a', ItemID.ironPlate, -1, 'b', ItemID.compressed_bronze, -1, 'c', ItemID.plateTin, -1]);
    
    Recipes.addShaped({ id: ItemID.ingotAlloy, count: 2, data: 0 }, [

        "aaa",

        "bbb",

        "ccc"

    ], ['a', ironPlate, -1, 'b', ItemID.plateBronze, -1, 'c', ItemID.compressed_tin, -1]);
    
    Recipes.addShaped({ id: ItemID.ingotAlloy, count: 2, data: 0 }, [

        "aaa",

        "bbb",

        "ccc"

    ], ['a', compressed_iron, -1, 'b', ItemID.compressed_bronze, -1, 'c', ItemID.compressed_tin, -1]);
    
    Recipes.addShaped({ id: ItemID.ingotAlloy, count: 2, data: 0 }, [

        "aaa",

        "bbb",

        "ccc"

    ], ['a', compressed_iron, -1, 'b', ItemID.compressed_bronze, -1, 'c', ItemID.plateTin, -1]);
    
    Recipes.addShaped({ id: ItemID.ingotAlloy, count: 2, data: 0 }, [

        "aaa",

        "bbb",

        "ccc"

    ], ['a', ironPlate, -1, 'b', ItemID.compressed_bronze, -1, 'c', ItemID.compressed_tin, -1]);
    
    Recipes.addShaped({ id: 66, count: 12, data: 0 }, [

        "a a",

        "axa",

        "a a"

    ], ['x', 280, -1, 'a', ItemID.compressed_bronze, -1]);
    
    Recipes.addShaped({ id: 33, count: 1, data: 0 }, [

        "ppp",

        "cbc",

        "cxc"

    ], ['x', 331, -1, 'b', ItemID.compressed_bronze, -1, 'c', 4, -1, 'p', 5, -1]);
    
    Recipes.addShaped({ id: ItemID.cellEmpty, count: 1, data: 0 }, [

    " x ",

    "xgx",

    " x "

], ['x', ItemID.canister_tin, 0, 'g', 102, 0]);

Recipes.addShaped({ id: ItemID.circuitBasic, count: 1, data: 0 }, [

        "xxx",

        "a#a",

        "xxx"

    ], ['x', ItemID.cableCopper1, 0, 'a', 331, 0, '#', ItemID.compressed_iron, 0]);
    
    Recipes.addShaped({ id: ItemID.coil, count: 1, data: 0 }, [

        "aaa",

        "axa",

        "aaa"

    ], ['x', 265, 0, 'a', BlockID.CopperWire, 0]);
    
    Recipes.addShaped({ id: ItemID.electricMotor, count: 1, data: 0 }, [

        " b ",

        "axa",

        " b "

    ], ['x', 265, 0, 'a', ItemID.coil, 0, 'b', ItemID.canister_tin, 0]);
    
    Recipes.addShaped({ id: ItemID.powerUnit, count: 1, data: 0 }, [

        "acs",

        "axe",

        "acs"

    ], ['x', ItemID.circuitBasic, 0, 'e', ItemID.electricMotor, 0, 'a', ItemID.battery, -1, 's', ItemID.casingIron, 0, 'c',BlockID.CopperWire, 0]);
    
    Recipes.addShaped({ id: ItemID.powerUnit, count: 1, data: 0 }, [

        "acs",

        "axe",

        "acs"

    ], ['x', ItemID.circuitBasic, 0, 'e', ItemID.electricMotor, 0, 'a', ItemID.battery, -1, 's', ItemID.casingIron, 0, 'c', ItemID.cableCopper0, 0]);
    
    Recipes.addShaped({ id: ItemID.powerUnit, count: 1, data: 0 }, [

        "acs",

        "axe",

        "acs"

    ], ['x', ItemID.circuitBasic, 0, 'e', ItemID.electricMotor, 0, 'a', ItemID.storageBattery, -1, 's', ItemID.casingIron, 0, 'c', BlockID.CopperWire, 0]);
    
    Recipes.addShaped({ id: ItemID.heatConductor, count: 1, data: 0 }, [

        "aсa",

        "aсa",

        "aсa"

    ], ['с', ItemID.compressed_copper, 0, 'a', ItemID.rubber, 0]);
    
    Recipes.addShaped({ id: ItemID.battery, count: 1, data: Item.getMaxDamage(ItemID.battery) }, [

        " x ",

        "c#c",

        "c#c"

    ], ['x', ItemID.cableTin1, 0, 'c', ItemID.casingTin, 0, '#', 331, 0]);
    
    Recipes.addShaped({ id: ItemID.upgradeEnergyStorage, count: 1, data: 0 }, [

        "aaa",

        "x#x",

        "aca"

    ], ['#', ItemID.battery, -1, 'x', ItemID.cableCopper1, -1, 'a', 5, -1, 'c', ItemID.circuitBasic, -1]);
    
    Recipes.addShaped({ id: ItemID.upgradeRedstone, count: 1, data: 0 }, [

        "x x",

        " # ",

        "x x",

    ], ['x', ItemID.compressed_tin, -1, '#', 69, -1]);
    
    Recipes.addShaped({ id: ItemID.upgradeEjector, count: 1, data: 0 }, [

        "aba",

        "x#x",

    ], ['#', ItemID.circuitBasic, -1, 'x', BlockID.ImprovedCopperWire, -1, 'a', 33, -1, 'b', 410, 0]);
    
    Recipes.addShaped({ id: ItemID.upgradePulling, count: 1, data: 0 }, [

        "aba",

        "x#x",

    ], ['#', ItemID.circuitBasic, -1, 'x', BlockID.ImprovedCopperWire, -1, 'a', 29, -1, 'b', 410, 0]);
    
    Recipes.addShaped({ id: ItemID.upgradeFluidEjector, count: 1, data: 0 }, [

        "x x",

        " # ",

        "x x",

    ], ['x', ItemID.compressed_tin, -1, '#', ItemID.electricMotor, -1]);
    
    Recipes.addShaped({ id: ItemID.upgradeFluidPulling, count: 1, data: 0 }, [

        "xcx",

        " # ",

        "x x",

    ], ['x', ItemID.compressed_tin, -1, '#', ItemID.electricMotor, -1, 'c', ItemID.treetap, 0]);
    
    Recipes.addShaped({ id: ItemID.fuelRodUranium2, count: 1, data: 0 }, [

    "fxf"

], ['x', ItemID.compressed_iron, 0, 'f', ItemID.fuelRodUranium, 0]);

Recipes.addShaped({ id: ItemID.fuelRodUranium4, count: 1, data: 0 }, [

    " f ",

    "bab",

    " f "

], ['a', ItemID.compressed_iron, 0, 'b', ItemID.compressed_copper, 0, 'f', ItemID.fuelRodUranium2, 0]);

Recipes.addShaped({ id: ItemID.fuelRodUranium4, count: 1, data: 0 }, [

    " f ",

    "bab",

    " f "

], ['a', ItemID.compressed_iron, 0, 'b', ItemID.plateCopper, 0, 'f', ItemID.fuelRodUranium2, 0]);

Recipes.addShaped({ id: ItemID.fuelRodUranium4, count: 1, data: 0 }, [

    " f ",

    "bab",

    " f "

], ['a', ItemID.plateIron, 0, 'b', ItemID.compressed_copper, 0, 'f', ItemID.fuelRodUranium2, 0]);

Recipes.addShaped({ id: ItemID.fuelRodUranium4, count: 1, data: 0 }, [

    "faf",

    "bab",

    "faf"

], ['a', ItemID.compressed_iron, 0, 'b', ItemID.compressed_copper, 0, 'f', ItemID.fuelRodUranium, 0]);

Recipes.addShaped({ id: ItemID.fuelRodUranium4, count: 1, data: 0 }, [

    "faf",

    "bab",

    "faf"

], ['a', ItemID.compressed_iron, 0, 'b', ItemID.plateCopper, 0, 'f', ItemID.fuelRodUranium, 0]);

Recipes.addShaped({ id: ItemID.fuelRodUranium4, count: 1, data: 0 }, [

    "faf",

    "bab",

    "faf"

], ['a', ItemID.plateIron, 0, 'b', ItemID.compressed_copper, 0, 'f', ItemID.fuelRodUranium, 0]);

Recipes.addShaped({ id: ItemID.fuelRodMOX2, count: 1, data: 0 }, [

    "fxf"

], ['x', ItemID.compressed_iron, 0, 'f', ItemID.fuelRodMOX, 0]);

Recipes.addShaped({ id: ItemID.fuelRodMOX4, count: 1, data: 0 }, [

    " f ",

    "bab",

    " f "

], ['a', ItemID.compressed_iron, 0, 'b', ItemID.compressed_copper, 0, 'f', ItemID.fuelRodMOX2, 0]);

Recipes.addShaped({ id: ItemID.fuelRodMOX4, count: 1, data: 0 }, [

    " f ",

    "bab",

    " f "

], ['a', ItemID.compressed_iron, 0, 'b', ItemID.plateCopper, 0, 'f', ItemID.fuelRodMOX2, 0]);

Recipes.addShaped({ id: ItemID.fuelRodMOX4, count: 1, data: 0 }, [

    " f ",

    "bab",

    " f "

], ['a', ItemID.plateIron, 0, 'b', ItemID.compressed_copper, 0, 'f', ItemID.fuelRodMOX2, 0]);

Recipes.addShaped({ id: ItemID.reactorPlatingHeat, count: 1, data: 0 }, [

    "aaa",

    "axa",

    "aaa"

], ['x', ItemID.reactorPlating, 0, 'a', ItemID.compressed_copper, 0]);

Recipes.addShaped({ id: ItemID.neutronReflector, count: 1, data: 0 }, [

    "bab",

    "axa",

    "bab"

], ["x", ItemID.compressed_copper, 0, 'a', ItemID.dustCoal, 0, 'b', ItemID.dustTin, 0]);

Recipes.addShaped({ id: ItemID.neutronReflectorThick, count: 1, data: 0 }, [

    "axa",

    "xax",

    "axa"

], ["x", ItemID.neutronReflector, 0, 'a', ItemID.compressed_copper, 0]);

Recipes.addShaped({ id: ItemID.coolantCell, count: 1, data: 1 }, [

    " a ",

    "axa",

    " a ",

], ['x', ItemID.cellCoolant, 0, 'a', ItemID.compressed_tin, 0]);

Recipes.addShaped({ id: ItemID.coolantCell3, count: 1, data: 1 }, [

    "axa",

    "axa",

    "axa",

], ['x', ItemID.coolantCell, 1, 'a', ItemID.compressed_tin, 0]);

Recipes.addShaped({ id: ItemID.coolantCell3, count: 1, data: 1 }, [

    "aaa",

    "xxx",

    "aaa",

], ['x', ItemID.coolantCell, 1, 'a', ItemID.compressed_tin, 0]);

Recipes.addShaped({ id: ItemID.coolantCell6, count: 1, data: 1 }, [

    "aaa",

    "xbx",

    "aaa",

], ['x', ItemID.coolantCell3, 1, 'a', ItemID.compressed_tin, 0, 'b', ItemID.compressed_iron, 0]);

Recipes.addShaped({ id: ItemID.coolantCell6, count: 1, data: 1 }, [

    "aaa",

    "xbx",

    "aaa",

], ['x', ItemID.coolantCell3, 1, 'a', ItemID.plateTin, 0, 'b', ItemID.compressed_iron, 0]);

Recipes.addShaped({ id: ItemID.coolantCell6, count: 1, data: 1 }, [

    "aaa",

    "xbx",

    "aaa",

], ['x', ItemID.coolantCell3, 1, 'a', ItemID.compressed_tin, 0, 'b', ItemID.plateIron, 0]);

Recipes.addShaped({ id: ItemID.coolantCell6, count: 1, data: 1 }, [

    "axa",

    "aba",

    "axa",

], ['x', ItemID.coolantCell3, 1, 'a', ItemID.compressed_tin, 0, 'b', ItemID.compressed_iron, 0]);

Recipes.addShaped({ id: ItemID.coolantCell6, count: 1, data: 1 }, [

    "axa",

    "aba",

    "axa",

], ['x', ItemID.coolantCell3, 1, 'a', ItemID.plateTin, 0, 'b', ItemID.compressed_iron, 0]);

Recipes.addShaped({ id: ItemID.coolantCell6, count: 1, data: 1 }, [

    "axa",

    "aba",

    "axa",

], ['x', ItemID.coolantCell3, 1, 'a', ItemID.compressed_tin, 0, 'b', ItemID.plateIron, 0]);

Recipes.addShaped({ id: ItemID.heatExchangerReactor, count: 1, data: 1 }, [

    "aaa",

    "axa",

    "aaa"

], ['x', ItemID.heatExchanger, 1, 'a', ItemID.compressed_copper, 0]);

Recipes.addShaped({ id: ItemID.heatVent, count: 1, data: 1 }, [

    "bab",

    "axa",

    "bab"

], ['x', ItemID.electricMotor, 0, 'a', ItemID.compressed_iron, 0, 'b', 101, -1]);

Recipes.addShaped({ id: ItemID.heatVentComponent, count: 1, data: 0 }, [

    "bab",

    "axa",

    "bab"

], ['x', ItemID.heatVent, 1, 'a', ItemID.compressed_tin, 0, 'b', 101, -1]);

Recipes.addShaped({ id: ItemID.bronzeHelmet, count: 1, data: 0 }, [

    "xxx",

    "x x"

], ['x', ItemID.compressed_bronze, 0]);

Recipes.addShaped({ id: ItemID.bronzeChestplate, count: 1, data: 0 }, [

    "x x",

    "xxx",

    "xxx"

], ['x', ItemID.compressed_bronze, 0]);

Recipes.addShaped({ id: ItemID.bronzeLeggings, count: 1, data: 0 }, [

    "xxx",

    "x x",

    "x x"

], ['x', ItemID.compressed_bronze, 0]);

Recipes.addShaped({ id: ItemID.bronzeBoots, count: 1, data: 0 }, [

    "x x",

    "x x"

], ['x', ItemID.compressed_bronze, 0]);

Recipes.addShaped({ id: ItemID.jetpack, count: 1, data: ELECTRIC_ITEM_MAX_DAMAGE }, [

    "bcb",

    "bab",

    "d d"

], ['a', BlockID.battery, -1, 'b', ItemID.casingIron, 0, 'c', ItemID.circuitAdvanced, 0, 'd', 348, 0]);

Recipes.addShaped({ id: ItemID.advBatpack, count: 1, data: ELECTRIC_ITEM_MAX_DAMAGE }, [

    "bcb",

    "bab",

    "b b"

], ['a', ItemID.compressed_bronze, 0, 'b', ItemID.storageAdvBattery, -1, 'c', ItemID.circuitBasic, 0], ChargeItemRegistry.transferEnergy);

Recipes.addShaped({ id: ItemID.solarHelmet, count: 1, data: 0 }, [

    "aaa",

    "axa",

    "ccc"

], ['x', BlockID.solarPanel, -1, 'a', VanillaItemID.iron_ingot, 0, 'c', BlockID.ImprovedCopperWire, 0]);

Recipes.addShaped({ id: ItemID.cutter, count: 1, data: 0 }, [

        "x x",

        " x ",

        "a a"

    ], ['a', 265, 0, 'x', ItemID.compressed_iron, 0]);
    
    Recipes.addShaped({ id: ItemID.bronzeSword, count: 1, data: 0 }, [

        "a",

        "a",

        "b"

    ], ['a', ItemID.compressed_bronze, 0, 'b', 280, 0]);
    
    Recipes.addShaped({ id: ItemID.bronzeShovel, count: 1, data: 0 }, [

        "a",

        "b",

        "b"

    ], ['a', ItemID.compressed_bronze, 0, 'b', 280, 0]);
    
    Recipes.addShaped({ id: ItemID.bronzePickaxe, count: 1, data: 0 }, [

        "aaa",

        " b ",

        " b "

    ], ['a', ItemID.compressed_bronze, 0, 'b', 280, 0]);
    
    Recipes.addShaped({ id: ItemID.bronzeAxe, count: 1, data: 0 }, [

        "aa",

        "ab",

        " b"

    ], ['a', ItemID.compressed_bronze, 0, 'b', 280, 0]);
    
    Recipes.addShaped({ id: ItemID.bronzeHoe, count: 1, data: 0 }, [

        "aa",

        " b",

        " b"

    ], ['a', ItemID.compressed_bronze, 0, 'b', 280, 0]);

Recipes.addShaped({ id: ItemID.EUMeter, count: 1, data: 0 }, [

        " g ",

        "xcx",

        "x x"

    ], ['c', ItemID.circuitBasic, 0, 'x', BlockID.ImprovedCopperWire, 0, 'g', 348, -1]);
    
    Recipes.addShaped({ id: ItemID.freqTransmitter, count: 1, data: 0 }, [

        "x",

        "#",

        "b"

    ], ['#', ItemID.circuitBasic, 0, 'x', BlockID.ImprovedCopperWire, 0, 'b', ItemID.casingIron, 0]);
    
    Recipes.addShaped({ id: ItemID.scanner, count: 1, data: 27 }, [

        "gdg",

        "cbc",

        "xxx"

    ], ['x', ItemID.cableCopper1, -1, 'b', ItemID.battery, -1, 'c', ItemID.circuitBasic, -1, 'd', 348, 0, 'g', ItemID.casingGold, -1], ChargeItemRegistry.transferEnergy);
    
    Recipes.addShaped({ id: ItemID.scanner, count: 1, data: 27 }, [

        "gdg",

        "cbc",

        "xxx"

    ], ['x', BlockID.ImprovedCopperWire, -1, 'b', ItemID.storageBattery, -1, 'c', ItemID.circuitBasic, -1, 'd', 348, 0, 'g', ItemID.casingGold, -1], ChargeItemRegistry.transferEnergy);
    
    Recipes.addShaped({ id: ItemID.scanner, count: 1, data: 27 }, [

        "gdg",

        "cbc",

        "xxx"

    ], ['x', BlockID.ImprovedCopperWire, -1, 'b', ItemID.battery, -1, 'c', ItemID.circuitBasic, -1, 'd', 348, 0, 'g', ItemID.casingGold, -1], ChargeItemRegistry.transferEnergy);
    
    Recipes.addShaped({ id: ItemID.bronzeWrench, count: 1, data: 0 }, [

        "a a",

        "aaa",

        " a "

    ], ['a', ItemID.compressed_bronze, 0]);
    
    Recipes.addShaped({ id: ItemID.electricHoe, count: 1, data: 27 }, [

        "pp",

        " p",

        " x"

    ], ['x', ItemID.powerUnitSmall, 0, 'p', compressed_iron, 0]);
    
    Recipes.addShaped({ id: ItemID.chainsaw, count: 1, data: 27 }, [

        " pp",

        "ppp",

        "xp "

    ], ['x', ItemID.powerUnit, 0, 'p', compressed_iron, 0]);
    
    Recipes.addShaped({ id: ItemID.drill, count: 1, data: 27 }, [

        " p ",

        "ppp",

        "pxp"

    ], ['x', ItemID.powerUnit, 0, 'p', compressed_iron, 0]);
    
    Recipes.addShaped({ id: ItemID.agriculturalAnalyzer, count: 1, data: 0 }, [

        "xx ",

        "rgr",

        "rcr"

    ], ['x', BlockID.ImprovedCopperWire, 0, 'r', 331, 0, 'g', 20, 0, "c", ItemID.circuitBasic, 0]);
    
    Recipes.addShaped({ id: BlockID.blockBronze, count: 1, data: 0 }, [

        "xxx",

        "xxx",

        "xxx"

    ], ['x', ItemID.compressed_bronze, 0]);
    
    Recipes.addShaped({ id: BlockID.machineBlockBasic, count: 1, data: 0 }, [

        "xxx",

        "x x",

        "xxx"

    ], ['x', ItemID.compressed_iron, -1]);
    
    Recipes.addShaped({ id: BlockID.machineBlockAdvanced, count: 1, data: 0 }, [

        "scs",

        "a#a",

        "scs"

    ], ['#', BlockID.machineBlockBasic, -1, 'c', ItemID.carbonPlate, -1, 'a', ItemID.plateAlloy, -1, 's', ItemID.compressed_steel, -1]);
    
    Recipes.addShaped({ id: BlockID.miningPipe, count: 8, data: 0 }, [

        "p p",

        "p p",

        "pxp",

    ], ['x', ItemID.treetap, 0, 'p', ItemID.compressed_iron, 0]);
});
/*








*/


ChargeItemRegistry.registerItem(ItemID.storageBattery, " sj", 10000, 20,0, true)
	ChargeItemRegistry.registerItem(ItemID.storageAdvBattery, "sj", 100000, 20, 0, true);
	ChargeItemRegistry.registerItem(ItemID.storageCrystal, "sj", 1000000, 20,0, true);
	ChargeItemRegistry.registerItem(ItemID.storageLapotronCrystal, "sj", 10000000, 20, 0, true);
	battery.setVoid(ItemID.storageBattery, {storage: 10000});
battery.setVoid(ItemID.storageAdvBattery, {storage: 100000});
battery.setVoid(ItemID.storageCrystal, {storage: 1000000});
battery.setVoid(ItemID.storageLapotronCrystal, {storage: 10000000});
});

/*cableAPI.addGroup(BlockID.geothermalGenerator);
cableAPI.addGroup(BlockID.genWindMill);*/
ModAPI.addAPICallback("ClassicUI", function(api){
	api.registerUiConfig("coal_generator",{
       		"x": 0,
			"y": 75,
			"scale": -0.19999999999999996
	});
	api.registerUiConfig("oxygen_storage_module",{
			"x": -25,
			"y": 50,
			"scale": -0.19999999999999996
	});
	
	api.registerUiConfig("workbench_nasa",{
			"x": 0,
			"y": 30,
			"scale": -0.19999999999999996
	});
	
	api.registerUiConfig("refinery_sc",{
			"x": 0,
			"y": -35,
			"scale": 0.20000000000000018
	});
	api.registerUiConfig("workbench_rocket",{
			"x": 0,
			"y": -30,
			"scale": 0.10000000000000009
	});
	api.registerUiConfig("Pad_Normal",{
			"x": 0,
			"y": -10,
			"scale": 0.10000000000000009
		
	});
		api.registerUiConfig("Padding1lvl",{
			"x": 0,
			"y": -10,
			"scale": 0,
	});
     	api.registerUiConfig("fuel_loader",{
			"x": -170,
			"y": -40,
			"scale": 0.20000000000000018
    });
	api.registerTheme("Dark_SpacesCraft", {
				"slot":	"_default_slot",
			"invSlot": "_default_slot",
			"selected_slot": "_selection",
			"selected_invSlot": "_selection",
			"frame": "workbench_frame3",
			"color_inventory": "#ffffff",
			"color_title": "#ffffff",
})
 api.registerAllHandler({
  updateUi(id, window, tile){
   let content = window.getContent();
   
   let config = api.getConfig(id);
   let theme = api.getTheme(id);
   
   if(config.theme == "Dark_SpacesCraft")
    for(let key in content.elements){
     let element = content.elements[key];
     
     if(element.bitmap == "SPC.SPC_Canister"){
        element.bitmap = "SPC_Canister_Dark"};
        
     if(element.bitmap == "Others.en_slot"){
        element.bitmap = "en_slot_dark"};
        
     if(element.bitmap == "RocketSlots"){
        element.bitmap = "RocketSlots_dark"};
        
     if(element.bitmap == "trashslot"){
        element.bitmap = "dark_trashslot"};
        
     if(element.bitmap == "ChestableSlot"){
        element.bitmap = "ChestableSlot_dark"};
        
     if(element.bitmap == "Others.O2Slot"){
        element.bitmap = "O2Slot_dark"};
        if(element.bitmap == "coalslot"){
        element.bitmap = "coalslot_dark"};
        
        if(element.bitmap == "energy_small_background"){
        element.bitmap = "energy_small_dark"};
        if(element.bitmap == "arrow_bar_background"){
        element.bitmap = "arrow_bar_dark"};
    }
  }
 });
	});
	
let ClassicUI;
ModAPI.addAPICallback("ClassicUI", function(api){
ClassicUI = api;
});
function getWindow(id, ui){
if(ClassicUI)
return ClassicUI.getWindow(id, ui, {});
return ui;
}



ModAPI.addAPICallback("RecipeViewer", function(api) {var RV = api.Core;
	RV.registerRecipeType("refinery", {
      title: "Рецепты очистительного завода",
      contents: {
         icon: BlockID.refinery_sc,
         drawing: [
    {type: "bitmap",x: 268,y: 190, bitmap: "Liquid_null",scale: 3.8},
    {type: "bitmap",x: 769,y: 190, bitmap: "Liquid_null",scale: 3.8}, {type: "bitmap", x:667 ,y: 190, bitmap:"Liquid_null",scale : 3.8},{type: "bitmap", x:565 ,y: 190, bitmap:"Liquid_null",scale : 3.8},
     {type: "bitmap", x:500 ,y: 70, bitmap:"slace_en_0",scale : 3}, {type: "bitmap", x:640 ,y: 70, bitmap:"en_noy",scale : 3}, 
			],
         elements: {
      input0:
    	{type:"slot",x:355,y:120,size:70, bitmap:"SPC.SPC_Canister"},input1:
    	{type:"slot",x:445,y:120,size:70, bitmap:"SPC.SPC_Canister"},
    output0:    	{type:"slot",x:455,y:260,size:70,bitmap: "Others.en_slot"}, 
    
    	output1:
    	{type:"slot",x:855,y:120,size:70, bitmap:"SPC.SPC_Canister"},
    	output2: {type:"slot",x:755,y:120,size:70, bitmap:"SPC.SPC_Canister"}, output3: {type:"slot",x:651,y:120,size:70, bitmap:"SPC.SPC_Canister"}
            //slotAxe: { type: "slot", x: 430, y: 140 },
            //slotShears: { type: "slot", x: 490, y: 140 },
         }
         /*
               moveItems: {
                 x: 730,
                 y: 375,
                 slots: ["ingredient"]
               }*/
      },getList: function(id, data, isUsage) {         let list = [];
         if (isUsage) {
            var rec = RecipeRegistry.refinery
            for (let i in rec) {}}}});
});

ModAPI.addAPICallback("FuturepackAPI", function(api){
	ChargeItemRegistry.registerItem(ItemID.battery_I, " sj", 300, 20, 0, true)
	ChargeItemRegistry.registerItem(ItemID.battery_n, "sj", 420, 20, 0, true);
	ChargeItemRegistry.registerItem(ItemID.neon_battery, "sj", 1000, 20, 0, true);
	ChargeItemRegistry.registerItem(ItemID.energie_zelle, "sj", 760, 20, 0, true);
	ChargeItemRegistry.registerItem(ItemID.compact_energie_zelle, "sj", 760, 20, 0, true);
	ChargeItemRegistry.registerItem(ItemID.kristall_energie_zelle, "sj", 860, 20, 0, true);
    battery.setVoid(ItemID.battery_I, {storage: 300});
    battery.setVoid(ItemID.battery_n, {storage: 420});
	battery.setVoid(ItemID.neon_battery, {storage: 1000});
	battery.setVoid(ItemID.energie_zelle, {storage: 760});
	battery.setVoid(ItemID.compact_energie_zelle, {storage: 760});
	battery.setVoid(ItemID.kristall_energie_zelle, {storage: 860});
	var batCryst = ["bioterium_battery","glowtite_batareika","wakurum_battery","neon_battery","quantanium_battery","retium_battery"]
	var batTranslat = ["Bioterium Battery","Glowtite Battery","Wakurum Battery","Neon Battery","Quantanium Battery","Retium Battery"]
	var energa = [550,320,575,800,765,590]
	for(var crystal in batCryst){var bat = batCryst[crystal];
		var bt = batTranslat[crystal];
		var en = energa[crystal];
		IDRegistry.genItemID(bat); 
Item.createItem(bat, bt, {name: bat, meta: 0}, {stack: 1, inCreative:false});
		ChargeItemRegistry.registerItem(ItemID[bat], "sj", en, 20, 0, true);
		ChargeItemRegistry.registerItem(ItemID[bat], "ft", en, 20, 0, true);
	};
		
		battery.setVoid(ItemID.bioterium_battery, {storage: 550});
		battery.setVoid(ItemID.glowtite_batareika, {storage: 320});
		battery.setVoid(ItemID.wakurum_battery, {storage: 575});
		battery.setVoid(ItemID.neon_battery, {storage: 800});
		battery.setVoid(ItemID.quantanium_battery, {storage: 765});
		battery.setVoid(ItemID.retium_battery, {storage: 590});
    Callback.addCallback("PostLoaded", function() {
			var Futurepack = api.Futurepack;
		Futurepack.addFuturetock(ItemID.bioterium_battery, {futock: 550});
		Futurepack.addFuturetock(ItemID.glowtite_batareika, {futock: 320});
		Futurepack.addFuturetock(ItemID.wakurum_battery, {futock: 575});
		Futurepack.addFuturetock(ItemID.neon_battery, {futock: 800});
		Futurepack.addFuturetock(ItemID.quantanium_battery, {futock: 765});
		Futurepack.addFuturetock(ItemID.retium_battery, {futock: 590});});
		Callback.addCallback("LevelCreated", function() {
		Recipes.addShaped({id: ItemID.bioterium_battery, count: 1, data: 0}, [
    " g ",
    "gbg",
    "gag"
], ['a', ItemID.crystal_bioterium_1, 0, 'b', ItemID.dust_bioterium, 0, 'g', ItemID.compressed_tin, 0]);

Recipes.addShaped({id: ItemID.neon_battery, count: 1, data: 0}, [
    " g ",
    "gbg",
    "gag"
], ['a', ItemID.crystal_neon_1, 0, 'b', ItemID.dust_neon, 0, 'g', ItemID.compressed_tin, 0]);

Recipes.addShaped({id: ItemID.glowtite_batareika, count: 1, data: 0}, [
    " g ",
    "gbg",
    "gag"
], ['a', ItemID.crystal_glowtite_1, 0, 'b', ItemID.dust_glowtite, 0, 'g', ItemID.compressed_tin, 0]);

Recipes.addShaped({id: ItemID.retium_battery, count: 1, data: 0}, [
    " g ",
    "gbg",
    "gag"
], ['a', ItemID.crystal_retium_1, 0, 'b', ItemID.dust_retium, 0, 'g', ItemID.compressed_tin, 0]);

Recipes.addShaped({id: ItemID.quantanium_battery, count: 1, data: 0}, [
    " g ",
    "gbg",
    "gag"
], ['a', ItemID.ingot_quantanium, 0, 'b', ItemID.dust_quantanium, 0, 'g', ItemID.compressed_tin, 0]);

Recipes.addShaped({id: ItemID.wakurum_battery, count: 1, data: 0}, [
    " g ",
    "gbg",
    "gag"
], ['a', ItemID.ingot_wakurum, 0, 'b', ItemID.dust_wakurum, 0, 'g', ItemID.compressed_tin, 0]);});

Translation.addTranslation("Bioterium Battery",{
ru: "Биотериумовая батарейка"
})

Translation.addTranslation("Retium Battery",{
ru: "Ретиумовая батарейка"
})

Translation.addTranslation("Wakurum Battery",{
ru: "Вакурумовая батарейка "
})

Translation.addTranslation("Neon Battery",{
ru: "Неоновая батарейка"
})

Translation.addTranslation("Glowtite Battery",{
ru: "Светящаяся батарейка"
})

Translation.addTranslation("Quantanium Battery",{
ru: "Квантаниумовая батарейка"
})


});