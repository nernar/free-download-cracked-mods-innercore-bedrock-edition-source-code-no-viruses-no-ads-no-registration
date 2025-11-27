Item.addCreativeGroup("Ores", Translation.translate("Руда"), [
    BlockID.arkanite_ore,
    BlockID.gravetite_ore,
    BlockID.coldgravetite_ore,
    BlockID.coiper_ore,
    BlockID.desh,
    BlockID.moonore_cheese,
    BlockID.moonore_sapphire,
    BlockID.ore_aluminum,
    BlockID.ore_aluminum_venus,
    BlockID.ore_aluminum_asteroids,
    BlockID.ore_copper,
    BlockID.ore_copper_mars,
    BlockID.ore_copper_moon,
    BlockID.ore_copper_venus,
    BlockID.ore_galena,
    BlockID.ore_ilmenite,
    BlockID.ore_iron_asteroids,
    BlockID.ore_iron_mars,
    BlockID.ore_quartz_venus,
    BlockID.ore_silicon,
    BlockID.ore_silicon_venus,
    BlockID.ore_solar,
    BlockID.ore_tin,
    BlockID.ore_tin_mars,
    BlockID.ore_tin_moon,
    BlockID.ore_tin_venus,
]);

Item.addCreativeGroup("block ores",
    Translation.translate("Блоки руды"), [
        BlockID.gravetite_block,
        BlockID.coldgravetite_block,
        BlockID.arkanite_block,
        BlockID.coiper_block,
        BlockID.block_aluminum_sc,
        BlockID.block_copper_sc,
        BlockID.block_iron_steel,
        BlockID.block_lead,
        BlockID.block_tin_sc,
        BlockID.block_titanium,
        BlockID.decoration_desh,
        BlockID.iron_steel_block,
        BlockID.steel_block,
        BlockID.bronze_block
    ]);

Item.addCreativeGroup("block ingots",
    Translation.translate("Слитки руд"), [
        ItemID.ingot_titanium,
        ItemID.ingot_aluminum_sc,
        ItemID.meteoric_iron_ingot,
        ItemID.ingot_copper_sc,
        ItemID.ingot_desh,
        ItemID.ingot_lead,
        ItemID.ingot_tin_sc,
        ItemID.coldgravetite_ingot,
        ItemID.gravetite_ingot,
        ItemID.ingot_coiper,
        ItemID.arkanite_ingot,
        ItemID.iron_steel_ingot,
        ItemID.bronze_ingot,
        ItemID.ingot_steel_spacescraft,
    ]);

Item.addCreativeGroup("Planets",
    Translation.translate("Планеты"), [
        BlockID.charged_moon,
        BlockID.charged_mars,
        BlockID.charged_sun,
        BlockID.charged_venus,
    ]);

Item.addCreativeGroup("Batteries",
    Translation.translate("Батарейки"), [
        ItemID.battery,
        ItemID.battery_infinity,
        /* ModAPI.addAPICallback("FuturepackAPI", function(api){
  	ItemID.retium_battery,
  	ItemID.glowtite_batterika,
  	ItemID.neon_battery,
  	ItemID.wakurum_battery,
  	ItemID.quantanium_battery,
   ItemID.bioterium_battery,
  });*/
    ]);



Item.addCreativeGroup("Vic A - 1",
    Translation.translate("Предметы Vic A - 1"), [
        BlockID.vic_a1_sand,
        BlockID.vic_a1_stonesand,
        BlockID.vic_a1_stone,
        BlockID.vic_coal,
        ItemID.burned_coal,
        BlockID.vic_iron,
        BlockID.marble_sc,
        ItemID.bush_vic_1
    ]);

Item.addCreativeGroup("Vic A - 2",
    Translation.translate("Предметы Vic A - 2"), [
        BlockID.marble_sc,
        BlockID.vic_tantros_grass,
        BlockID.vic_tantros_sand,
        BlockID.vic_a2_stone,
        ItemID.vic_a2_coal,
        BlockID.vic_a2_iron,
        BlockID.vic_a2_gold,
        BlockID.vic_a2_emerald,
        BlockID.vic_a2_diamond,
        BlockID.vic_a2_torantiy,
        BlockID.vic_a2_redstone,
        BlockID.vic_a2_lapiz,
        BlockID.vic_a2_turao,
        BlockID.turao_planks,
        BlockID.vic_a2_turao_leaves,
        ItemID.tantros_short_grass_1,
        ItemID.tantros__grass_1,
        ItemID.tantros_cane_1,
        ItemID.blue_sugar_sc,
        BlockID.tantros_berry,
        ItemID.tantros_berry_1,
        BlockID.blue_stones
    ]);

Item.addCreativeGroup("Machines",
    Translation.translate("Приборы"), [
        BlockID.coal_generator,
        BlockID.refinery_sc,
        BlockID.oxygen_storage_module,
        BlockID.oxygen_compressor,
        BlockID.oxygen_decompressor,
        BlockID.compressed_drill,
        BlockID.fuel_loader,
        BlockID.compressor_sj,
        BlockID.electric_compressor_sj,
        BlockID.circuit_fabricator
    ]);

Item.addCreativeGroup("Moon",
    Translation.translate("Луна"), [
        BlockID.lunar_stone,
        BlockID.lunar_middle,
        BlockID.moon_top_side,
        BlockID.moonore_sapphire,
        BlockID.moonore_cheese,
        BlockID.lunar_stone_slab,
        BlockID.lunar_middle_slab,
        BlockID.moon_top_side_slab,
        BlockID.ore_tin_moon,
        BlockID.ore_copper_moon
    ]);

Item.addCreativeGroup("Venus",
    Translation.translate("Венера"), [
        BlockID.venus_rock_0,
        BlockID.venus_rock_1,
        BlockID.venus_rock_2,
        BlockID.venus_rock_0_slab,
        BlockID.venus_rock_1_slab,
        BlockID.venus_rock_2_slab,
        BlockID.venus_rock_0_fence,
        BlockID.venus_rock_1_fence,
        BlockID.venus_rock_2_fence,
        BlockID.ore_quartz_venus,
        BlockID.ore_tin_venus,
        BlockID.ore_silicon_venus,
        BlockID.ore_aluminum_venus,
        BlockID.ore_copper_venus,
    ]);

Item.addCreativeGroup("Mars",
    Translation.translate("Марс"), [
        BlockID.mars_cobblestone_fence,
        BlockID.mars_top_stone,
        BlockID.mars_middle_stone,
        BlockID.mars_bottom_stone,
        BlockID.mars_top_stone_slab,
        BlockID.mars_middle_stone_slab,
        BlockID.mars_bottom_stone_slab,
        BlockID.cobblestone_mars,
        BlockID.ore_copper_mars,
        BlockID.ore_tin_mars,
        BlockID.ore_iron_mars,
        BlockID.desh
    ]);
    
    Item.addCreativeGroup("Asteroids",
    Translation.translate("Астероиды"), [
        BlockID.asteroid_stones,
        BlockID.asteroid_stones_0,
        BlockID.asteroid_stones_1,
        BlockID.ore_iron_asteroids,
        BlockID.ore_aluminum_asteroids,
        ItemID.meteoric_iron_raw
    ]);
    
SpacesCraft.addGroup(
    BlockID.lunar_stone, 
    Translation.translate("Moon")
)

SpacesCraft.addGroup(
    BlockID.lunar_middle, 
    Translation.translate("Moon")
)

SpacesCraft.addGroup(
    BlockID.lunar_stone_slab, 
    Translation.translate("Moon")
)

SpacesCraft.addGroup(
    BlockID.lunar_middle_slab, 
    Translation.translate("Moon")
)

SpacesCraft.addGroup(
    BlockID.moon_top_side, 
    Translation.translate("Moon")
)

SpacesCraft.addGroup(
    BlockID.moon_top_side_slab,
    Translation.translate("Moon")
)

SpacesCraft.addGroup(
    BlockID.moonore_sapphire,
    Translation.translate("Moon")
)

SpacesCraft.addGroup(
    BlockID.moonore_cheese,
    Translation.translate("Moon")
)

SpacesCraft.addGroup(
    BlockID.ore_tin_moon,
    Translation.translate("Moon")
)

SpacesCraft.addGroup(
    BlockID.ore_copper_moon,
    Translation.translate("Moon")
)

SpacesCraft.addGroup(
    BlockID.lapiz_moon,
    Translation.translate("Moon")
)




SpacesCraft.addGroup(
    BlockID.cobblestone_mars,
    Translation.translate
    ("Mars")
)

SpacesCraft.addGroup(
    BlockID.mars_stone_fence,
    Translation.translate("Mars")
)

SpacesCraft.addGroup(
    BlockID.dense_ice,
    Translation.translate("Mars")
)

SpacesCraft.addGroup(
    BlockID.mars_top_stone,
    Translation.translate("Mars")
)

SpacesCraft.addGroup(
    BlockID.mars_middle_stone,
    Translation.translate("Mars")
)

SpacesCraft.addGroup(
    BlockID.mars_bottom_stone,
    Translation.translate("Mars")
)

SpacesCraft.addGroup(
    BlockID.mars_top_stone_slab,
    Translation.translate("Mars")
)

SpacesCraft.addGroup(
    BlockID.mars_middle_stone_slab,
    Translation.translate("Mars")
)

SpacesCraft.addGroup(
    BlockID.mars_bottom_stone_slab,
    Translation.translate("Mars")
)

SpacesCraft.addGroup(
    BlockID.ore_copper_mars,
    Translation.translate("Mars")
)

SpacesCraft.addGroup(
    BlockID.ore_tin_mars,
    Translation.translate("Mars")
)

SpacesCraft.addGroup(
    BlockID.ore_iron_mars,
    Translation.translate("Mars")
)

SpacesCraft.addGroup(
    BlockID.desh,
    Translation.translate("Mars")
)






SpacesCraft.addGroup(
    BlockID.venus_rock_0,
    Translation.translate("Venus")
)

SpacesCraft.addGroup(
    BlockID.venus_rock_0_slab,
    Translation.translate("Venus")
)

SpacesCraft.addGroup(
    BlockID.venus_rock_1,
    Translation.translate("Venus")
)

SpacesCraft.addGroup(
    BlockID.venus_rock_1_slab,
    Translation.translate("Venus")
)

SpacesCraft.addGroup(
    BlockID.venus_rock_2,
    Translation.translate("Venus")
)

SpacesCraft.addGroup(
    BlockID.venus_rock_2_slab,
    Translation.translate("Venus")
)

SpacesCraft.addGroup(
    BlockID.venus_rock_0_fence,
    Translation.translate("Venus")
)

SpacesCraft.addGroup(
    BlockID.venus_rock_1_fence,
    Translation.translate("Venus")
)

SpacesCraft.addGroup(
    BlockID.venus_rock_2_fence,
    Translation.translate("Venus")
)

/*SpacesCraft.addGroup(
    BlockID.ore_quartz_venus,
    Translation.translate("Venus")
)

SpacesCraft.addGroup(
    BlockID.ore_tin_venus,
    Translation.translate("Venus")
)

SpacesCraft.addGroup(
    BlockID.ore_silicon_venus,
    Translation.translate("Venus")
)

SpacesCraft.addGroup(
    BlockID.ore_aluminum_venus,
    Translation.translate("Venus")
)

SpacesCraft.addGroup(
    BlockID.ore_copper_venus,
    Translation.translate("Venus")
)


*/

SpacesCraft.addGroup(
    BlockID.asteroid_stones_1,
    Translation.translate("Asteroids")
)

SpacesCraft.addGroup(
    BlockID.asteroid_stones_0,
    Translation.translate("Asteroids")
)

SpacesCraft.addGroup(
    BlockID.asteroid_stones,
    Translation.translate("Asteroids")
)

SpacesCraft.addGroup(
    BlockID.ore_aluminum_asteroids,
    Translation.translate("Asteroids")
)

SpacesCraft.addGroup(
    BlockID.ore_iron_asteroids,
    Translation.translate("Asteroids")
)




    

SpacesCraft.addGroup(
    BlockID.vic_a1_sand,
    Translation.translate("Vic A - 1")
)

SpacesCraft.addGroup(
    BlockID.vic_a1_stonesand,
    Translation.translate("Vic A - 1")
)

SpacesCraft.addGroup(
    BlockID.vic_a1_stone,
    Translation.translate("Vic A - 1")
)

SpacesCraft.addGroup(
    BlockID.vic_coal,
    Translation.translate("Vic A - 1")
)

SpacesCraft.addGroup(
    ItemID.burned_coal,
    Translation.translate("Vic A - 1")
)

SpacesCraft.addGroup(
    BlockID.vic_iron,
    Translation.translate("Vic A - 1")
)

SpacesCraft.addGroup(
    BlockID.marble_sc,
    Translation.translate("Vic A - 1")
)

SpacesCraft.addGroup(
    ItemID.bush_vic_1,
    Translation.translate("Vic A - 1")
)







SpacesCraft.addElectroLevel(BlockID.coal_generator, "1");

SpacesCraft.addElectroLevel(BlockID.fuel_loader, "3");

SpacesCraft.addElectroLevel(BlockID.refinery_sc, "3");

SpacesCraft.addElectroLevel(BlockID.compressor_sj, "0");

SpacesCraft.addElectroLevel(BlockID.electric_compressor_sj, "3");

SpacesCraft.addElectroLevel(BlockID.collector_sc, "3");

SpacesCraft.addElectroLevel(BlockID.oxygen_compressor, "5");

SpacesCraft.addElectroLevel(BlockID.oxygen_decompressor, "5");

SpacesCraft.addElectroLevel(BlockID.compressed_drill, "?");

SpacesCraft.addElectroLevel(BlockID.circuit_fabricator, "3");

SpacesCraft.addElectroLevel(BlockID.oxygen_storage_module, "4");