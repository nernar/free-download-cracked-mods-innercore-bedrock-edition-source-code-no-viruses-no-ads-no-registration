/*OresAPI.toolRegister({
    material:{
        uid: "adamantite",
        color: "4"
    },
    tool:{
        breakinSpeed: 9,
        level: 5,
        enchamentability: 10,
        damage: 4,
        durability: 3000
    },
    translation:{
        material: "Адамантитовый слиток",
        sword: "Адамантитовый меч",
        pickaxe: "Адамтитовая кирка",
        shovel: "Адамантитовая лопата",
        axe: "Адамантитовый топор",
        hoe: "Адамантитовая мотыга"
    }
});

OresAPI.createCustomOre({
    params:{
        material: "Adamantite",
        ToolLevel: 3,
        genChunk: 3,
        randomSize: true,
        genSize: [1, 5],
        min: 1,
        max: 10,
        drop:{},
        color: 4
    },
    translate:{
        ore: "Адамантитовая руда",
        ore_block: "Адамантитовый блок"
    }
});

OresAPI.defineArmorSet({
    material: "adamantite",
    durability: 4000,
    color: "4",
    defense:{
        helmet: 4,
        chestplate: 7,
        leggings: 4,
        boots: 4
    },
    craftID: ItemID.ingotAdamantite,
    translate:{
        helmet: "Адамантитовый шлем",
        chestplate: "Адамантитовый нагрудник",
        leggings: "Адамантитовые поножи",
        boots: "Адамантитовые боты"
    }
});*/

OresAPI.registerOre({
    source:{material: "adamantite"},
    ore:{
        requiredToolLvl: 3,
        veinSize:{max: 4},
        veinsInChunk: 3,
        depthGeneration:{min: 1, max: 10}
    },
    translations:{
        source: {ru: "Адамантитовый Слиток"},
        ore: [{ru: "Адамантитовая Руда"}],
        oreBlock: [{ru: "Адамантитовый Блок"}]
    },
    overrideNames:{
        itemColor: 4,
        source:{standart: true},
        ore:{standart: true},
        oreBlock:{standart: true}
    }
});

OresAPI.registerTools({
    toolMaterial:{
        material: "adamantite",
        durability: 3000,
        efficiency: 5,
        level: 5,
        damage: 3
    },
    recipes:{primary: ItemID.ingotAdamantite},
    translations:{
        sword: {ru: "Адамантитовый Меч"},
        pickaxe: {ru: "Адамантитовая Кирка"},
        axe: {ru: "Адамантитовый Топор"},
        hoe: {ru: "Адамантитовая Мотыга"},
        shovel: {ru: "Адамантитовая Лопата"}
    },
    overrideNames:{
        standart: true,
        itemsColor: 4
    }
}); 

OresAPI.registerArmor({
    material: "adamantite",
    properties:{
        durability: 3000,
        helmet:{armor: 2},
        chestplate:{armor: 3},
        leggings:{armor: 3},
        boots:{armor: 2}
    },
    translations:{
        helmet: {ru: "Адамантитовый Шлем"},
        chestplate: {ru: "Адамантитовый Нагрудник"},
        leggings: {ru: "Адамантитовые Поножи"},
        boots: {ru: "Адамантитовые Ботинки"}
    },
    overrideNames:{
        standart: true,
        itemsColor: 4
    }
});