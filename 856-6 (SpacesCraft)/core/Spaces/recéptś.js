Callback.addCallback("LevelCreated", function() {
Recipes.addShaped({id: ItemID.blade, count: 1, data: 0}, [
    "a",
    "a",
    ""
], ['a', VanillaItemID.iron_ingot, 0]);
//Лезвие
Recipes.addShaped({id: ItemID.blades, count: 1, data: 0}, [
    "aaa",
    "",
    ""
], ['a', ItemID.blade, 0]);
//Лезвия
Recipes.addShaped({id: ItemID.oxygen_concentrator, count: 1, data: 0}, [
    "aba",
    "bdb",
    "aca"
], ['a', ItemID.compressed_steel, 0, 'b', ItemID.compressed_tin, 0, 'c', ItemID.air_vent, 0, 'd', ItemID.canister_tin, 0]);
//Кислородный концентратор
Recipes.addShaped({id: ItemID.oxygentank_heavyfull, count: 1, data: 0}, [
    "aaa",
    "bbb",
    "ccc"
], ['a', VanillaBlockID.wool, 14, 'b', ItemID.canister_tin, 0, 'c', ItemID.compressed_steel, 0]);
//Большой кислородный баллон
Recipes.addShaped({id: ItemID.oxygentank_lightfull, count: 1, data: 0}, [
    "c  ",
    "a  ",
    "b  "
], ['a', ItemID.canister_tin, 0, 'b', ItemID.compressed_copper, 0, 'c', VanillaBlockID.wool, 5]);
//Маленький кислородный баллон
Recipes.addShaped({id: ItemID.oxygentank_medfull, count: 1, data: 0}, [
    "aa",
    "bb",
    "cc"
], ['a', VanillaBlockID.wool, 1, 'b', ItemID.canister_tin, 0, 'c', ItemID.compressed_tin, 0]);
//Средний кислородный баллон
Recipes.addShaped({id: ItemID.extra_oxygen_tank, count: 1, data: 0}, [
    "aaa",
    "bcd",
    "eee"
], ['a', BlockID.coiper_block, 0, 'b', ItemID.gravetite_canister, 0, 'c', ItemID.iron_steel_canister, 0, 'd', ItemID.coiper_canister, 0, 'e', ItemID.compressed_coiper, 0]);
//Экстра кислородный баллон
Recipes.addShaped({id: ItemID.frequency_module, count: 1, data: 0}, [
    " b ",
    "ada",
    "ece"
], ['a', ItemID.compressed_iron, 0, 'b', ItemID.compressed_aluminum, 0, 'c', ItemID.wafer_basic, 0, 'd', VanillaItemID.repeater, 0, 'e', VanillaItemID.redstone, 0]);
//Высокочастотный модуль
Recipes.addShaped({id: ItemID.air_fan, count: 1, data: 0}, [
    "b b",
    " c ",
    "bab"
], ['a', VanillaItemID.redstone, 0, 'b', ItemID.compressed_steel, 0, 'c', ItemID.wafer_basic, 0]);
//Закончился раздел SpaceTools
//Вентилятор
Recipes.addShaped({id: ItemID.air_vent, count: 1, data: 0}, [
    "aa",
    "ab",
    ""
], ['a', ItemID.compressed_tin, 0, 'b', ItemID.compressed_steel, 0]);
//Решётка для воздуха
Recipes.addShaped({id: ItemID.battery, count: 1, data: 0}, [
    " g ",
    "gbg",
    "gag"
], ['a', VanillaItemID.coal, 0, 'b', VanillaItemID.redstone, 0, 'g', ItemID.compressed_iron, 0]);
//Батарейка
Recipes.addShaped({id: ItemID.buggymat_sit, count: 1, data: 0}, [
    "  a",
    " ba",
    "aaa"
], ['a', ItemID.compressed_steel, 0, 'b', ItemID.compressed_iron, 0]);
//Сиденье багги
Recipes.addShaped({id: ItemID.buggymat_storage, count: 1, data: 0}, [
    "bbb",
    "iai",
    "bbb"
], ['a', VanillaBlockID.chest, 0, 'b', ItemID.compressed_steel, 0, 'i', ItemID.compressed_iron, 0]);
//Хранилище багги
Recipes.addShaped({id: ItemID.buggymat_wheel, count: 1, data: 0}, [
    " a ",
    "aba",
    " a "
], ['a', VanillaItemID.leather, 0, 'b', ItemID.compressed_steel, 0]);
//Колесо багги
Recipes.addShaped({id: ItemID.canister_copper, count: 1, data: 0}, [
    "a a",
    "a a",
    "aaa"
], ['a', ItemID.ingot_copper_sc, 0]);
//Медная канистра(слитками)
Recipes.addShaped({id: ItemID.canister_copper, count: 1, data: 0}, [
    "a a",
    "a a",
    "aaa"
], ['a', ItemID.compressed_copper, 0]);
//Медная канистра(сжатками)
Recipes.addShaped({id: ItemID.oxygen_gear, count: 1, data: 0}, [
    " b ",
    "bab",
    "b b"
], ['a', ItemID.oxygen_concentrator, 0, 'b', BlockID.PipeOxygenWhite, 0]);
//Кислородное снаряжение(белый)
Recipes.addShaped({id: ItemID.oxygen_gear, count: 1, data: 0}, [
    " b ",
    "bab",
    "b b"
], ['a', ItemID.oxygen_concentrator, 0, 'b', BlockID.PipeOxygenBlack, 0]);
//Кислородное снаряжение(черный)
Recipes.addShaped({id: ItemID.oxygen_gear, count: 1, data: 0}, [
    " b ",
    "bab",
    "b b"
], ['a', ItemID.oxygen_concentrator, 0, 'b', BlockID.PipeOxygenLightBlue, 0]);
//Кислородное снаряжение(голубой)
Recipes.addShaped({id: ItemID.oxygen_gear, count: 1, data: 0}, [
    " b ",
    "bab",
    "b b"
], ['a', ItemID.oxygen_concentrator, 0, 'b', BlockID.PipeOxygenSilver, 0]);
//Кислородное снаряжение(серебрянный)
Recipes.addShaped({id: ItemID.oxygen_gear, count: 1, data: 0}, [
    " b ",
    "bab",
    "b b"
], ['a', ItemID.oxygen_concentrator, 0, 'b', BlockID.PipeOxygenGreen, 0]);
//Кислородное снаряжение(зелёный)
Recipes.addShaped({id: ItemID.oxygen_gear, count: 1, data: 0}, [
    " b ",
    "bab",
    "b b"
], ['a', ItemID.oxygen_concentrator, 0, 'b', BlockID.PipeOxygenPink, 0]);
//Кислородное снаряжение(розовый)
Recipes.addShaped({id: ItemID.oxygen_gear, count: 1, data: 0}, [
    " b ",
    "bab",
    "b b"
], ['a', ItemID.oxygen_concentrator, 0, 'b', BlockID.PipeOxygenBlue, 0]);
//Кислородное снаряжение(синий)
Recipes.addShaped({id: ItemID.oxygen_gear, count: 1, data: 0}, [
    " b ",
    "bab",
    "b b"
], ['a', ItemID.oxygen_concentrator, 0, 'b', BlockID.PipeOxygenGray, 0]);
//Кислородное снаряжение(серый)
Recipes.addShaped({id: ItemID.oxygen_gear, count: 1, data: 0}, [
    " b ",
    "bab",
    "b b"
], ['a', ItemID.oxygen_concentrator, 0, 'b', BlockID.PipeOxygenCyan, 0]);
//Кислородное снаряжение(бирюзовый)
Recipes.addShaped({id: ItemID.oxygen_gear, count: 1, data: 0}, [
    " b ",
    "bab",
    "b b"
], ['a', ItemID.oxygen_concentrator, 0, 'b', BlockID.PipeOxygenLime, 0]);
//Кислородное снаряжение(лаймовый)
Recipes.addShaped({id: ItemID.oxygen_gear, count: 1, data: 0}, [
    " b ",
    "bab",
    "b b"
], ['a', ItemID.oxygen_concentrator, 0, 'b', BlockID.PipeOxygenYellow, 0]);
//Кислородное снаряжение(жёлтый)
Recipes.addShaped({id: ItemID.oxygen_gear, count: 1, data: 0}, [
    " b ",
    "bab",
    "b b"
], ['a', ItemID.oxygen_concentrator, 0, 'b', BlockID.PipeOxygenRed, 0]);
//Кислородное снаряжение(красный)
Recipes.addShaped({id: ItemID.oxygen_gear, count: 1, data: 0}, [
    " b ",
    "bab",
    "b b"
], ['a', ItemID.oxygen_concentrator, 0, 'b', BlockID.PipeOxygenOrange, 0]);
//Кислородное снаряжение(оранжевый)
Recipes.addShaped({id: ItemID.oxygen_gear, count: 1, data: 0}, [
    " b ",
    "bab",
    "b b"
], ['a', ItemID.oxygen_concentrator, 0, 'b', BlockID.PipeOxygenBrown, 0]);
//Кислородное снаряжение(коричневый)
Recipes.addShaped({id: ItemID.oxygen_gear, count: 1, data: 0}, [
    " b ",
    "bab",
    "b b"
], ['a', ItemID.oxygen_concentrator, 0, 'b', BlockID.PipeOxygenPurple, 0]);
//Кислородное снаряжение(фиолетовый)
Recipes.addShaped({id: ItemID.oxygen_gear, count: 1, data: 0}, [
    " b ",
    "bab",
    "b b"
], ['a', ItemID.oxygen_concentrator, 0, 'b', BlockID.PipeOxygenMagenta, 0]);
//Кислородное снаряжение(пурпурный)
Recipes.addShaped({id: BlockID.PipeOxygenWhite, count: 4, data: 0}, [
    "aaa",
    "",
    "aaa"
], ['a', VanillaBlockID.glass_pane, 0]);
//Труба(белый)
Recipes.addShaped({id: BlockID.PipeOxygenBlack, count: 1, data: 0}, [
    "ab",
    "",
    ""
], ['a', BlockID.PipeOxygenWhite, 0, 'b', VanillaItemID.black_dye, 0]);
//Труба(черный)
Recipes.addShaped({id: BlockID.PipeOxygenRed, count: 1, data: 0}, [
    "ab",
    "",
    ""
], ['a', BlockID.PipeOxygenWhite, 0, 'b', VanillaItemID.red_dye, 0]);
//Труба(красный)
Recipes.addShaped({id: BlockID.PipeOxygenGreen, count: 1, data: 0}, [
    "ab",
    "",
    ""
], ['a', BlockID.PipeOxygenWhite, 0, 'b', VanillaItemID.green_dye, 0]);
//Труба(зелёный)
Recipes.addShaped({id: BlockID.PipeOxygenBrown, count: 1, data: 0}, [
    "ab",
    "",
    ""
], ['a', BlockID.PipeOxygenWhite, 0, 'b', VanillaItemID.brown_dye, 0]);
//Труба(коричневый)
Recipes.addShaped({id: BlockID.PipeOxygenBlue, count: 1, data: 0}, [
    "ab",
    "",
    ""
], ['a', BlockID.PipeOxygenWhite, 0, 'b', VanillaItemID.blue_dye, 0]);
//Труба(синий)
Recipes.addShaped({id: BlockID.PipeOxygenLightBlue, count: 1, data: 0}, [
    "abv",
    "",
    ""
], ['a', BlockID.PipeOxygenWhite, 0, 'b', VanillaItemID.blue_dye, 0, 'v', VanillaItemID.white_dye, 0]);
//Труба(голубой)
Recipes.addShaped({id: BlockID.PipeOxygenPurple, count: 1, data: 0}, [
    "ab",
    "",
    ""
], ['a', BlockID.PipeOxygenWhite, 0, 'b', VanillaItemID.purple_dye, 0]);
//Труба(фиолетовый)
Recipes.addShaped({id: BlockID.PipeOxygenCyan, count: 1, data: 0}, [
    "ab",
    "",
    ""
], ['a', BlockID.PipeOxygenWhite, 0, 'b', VanillaItemID.cyan_dye, 0]);
//Труба(бирюзовый)
Recipes.addShaped({id: BlockID.PipeOxygenGray, count: 1, data: 0}, [
    "ab",
    "",
    ""
], ['a', BlockID.PipeOxygenWhite, 0, 'b', VanillaItemID.gray_dye, 0]);
//Труба(серый)
Recipes.addShaped({id: BlockID.PipeOxygenPink, count: 1, data: 0}, [
    "ab",
    "",
    ""
], ['a', BlockID.PipeOxygenWhite, 0, 'b', VanillaItemID.pink_dye, 0]);
//Труба(розовый)
Recipes.addShaped({id: BlockID.PipeOxygenLime, count: 1, data: 0}, [
    "ab",
    "",
    ""
], ['a', BlockID.PipeOxygenWhite, 0, 'b', VanillaItemID.lime_dye, 0]);
//Труба(лаймовый)
Recipes.addShaped({id: BlockID.PipeOxygenYellow, count: 1, data: 0}, [
    "ab",
    "",
    ""
], ['a', BlockID.PipeOxygenWhite, 0, 'b', VanillaItemID.yellow_dye, 0]);
//Труба(жёлтый)
Recipes.addShaped({id: BlockID.PipeOxygenMagenta, count: 1, data: 0}, [
    "ab",
    "",
    ""
], ['a', BlockID.PipeOxygenWhite, 0, 'b', VanillaItemID.magenta_dye, 0]);
//Труба(пурпурный)
Recipes.addShaped({id: BlockID.PipeOxygenOrange, count: 1, data: 0}, [
    "ab",
    "",
    ""
], ['a', BlockID.PipeOxygenWhite, 0, 'b', VanillaItemID.orange_dye, 0]);
//Труба(оранжевый)
Recipes.addShaped({id: BlockID.PipeOxygenSilver, count: 1, data: 0}, [
    "ab",
    "",
    ""
], ['a', BlockID.PipeOxygenWhite, 0, 'b', VanillaItemID.light_gray_dye, 0]);
//Труба(Серебрянный)
Recipes.addShaped({id: BlockID.AluminumWire, count: 6, data: 0}, [
    "bbb",
    "aaa",
    "bbb"
], ['a', ItemID.ingot_aluminum, 0, 'b', VanillaBlockID.wool, 0]);
//Алюминиевый провод
Recipes.addShaped({id: BlockID.ImprovedAluminumWire, count: 6, data: 0}, [
    "b  ",
    "w  ",
    "a  "
], ['a', ItemID.ingot_aluminum, 0, 'b', VanillaBlockID.wool, 0, 'w', BlockID.AluminumWire, 0]);
//Улучшенный алюминиевый провод
Recipes.addShaped({id: ItemID.canister_tin, count: 1, data: 0}, [
    "a a",
    "a a",
    "aaa"
], ['a', ItemID.ingot_tin_sc, 0]);
//Оловяная канистра(слитками)
Recipes.addShaped({id: ItemID.canister_tin, count: 1, data: 0}, [
    "a a",
    "a a",
    "aaa"
], ['a', ItemID.compressed_tin, 0]);
//Оловяная канистра(пожатками)
Recipes.addShaped({id: ItemID.canvas, count: 1, data: 0}, [
    " ba",
    "bbb",
    "ab "
], ['a', VanillaItemID.stick, 0, 'b', VanillaItemID.string, 0]);
//Холст
Recipes.addShaped({id: ItemID.coiper_canister, count: 1, data: 0}, [
    "a a",
    "a a",
    "aaa"
], ['a', ItemID.ingot_coiper, 0]);
//Койпера канистра(слитками)
Recipes.addShaped({id: ItemID.coiper_canister, count: 1, data: 0}, [
    "a a",
    "a a",
    "aaa"
], ['a', ItemID.compressed_coiper, 0]);
//Койпера канистра(пожатками)
Recipes.addShaped({id: ItemID.engine_tier, count: 1, data: 0}, [
    " a ",
    "bob",
    "bhb"
], ['a', VanillaItemID.flint_and_steel, 0, 'b', ItemID.heavy_plating, 0, 'o', ItemID.canister_tin, 0, 'h', ItemID.air_vent, 0]);
//Двигатель ракеты
Recipes.addShaped({id: ItemID.engine_tier1_booster, count: 1, data: 0}, [
    "bab",
    "bwb",
    "jfj"
], ['a', VanillaBlockID.wool, 4, 'b', ItemID.compressed_meteoric_iron, 0, 'f', ItemID.air_vent, 0, 'j', ItemID.heavy_plating, 0, 'w', ItemID.fuel_canister_6, 0]);
//Ускоритель ракеты 

Recipes.addShaped({id: BlockID.oxygen_storage_module, count: 1, data: 0}, [
    "aaa",
    "bbb",
    "aaa"
], ['a', ItemID.compressed_steel, 0, 'b', ItemID.oxygentank_heavyfull, 0]);
//хранилище кислорода

Recipes.addShaped({id: BlockID.refinery_sc, count: 1, data: 0}, [
    " b ",
    "aba",
    "dcd"
], ['a',VanillaBlockID.stone, 0, 'b', ItemID.canister_copper, 0, 'c', VanillaBlockID.furnace, 0, 'd', ItemID.ingot_steel_spacescraft, 0]);
//Центрифуга

Recipes.addShaped({id: ItemID.steel_shards, count: 1, data: 0}, [
    "a",
], ['a', ItemID.ingot_steel_spacescraft, 0]);
//Осколки стали

Recipes.addShaped({id: ItemID.iron_steel_ingot, count: 1, data: 0}, [
    "aaa",
    "aba",
    "aaa"
], ['a', ItemID.steel_shards, 0, 'b', VanillaItemID.iron_ingot, 0]);});