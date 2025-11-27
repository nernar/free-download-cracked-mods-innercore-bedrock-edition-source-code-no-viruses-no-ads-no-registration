/*OresAPI.toolRegister({
    material:{
        mi: "ingotUranium",
        uid: "uranium",
        name: "Uranium",
        color: "a"
    },
    tool:{
        name: "uran",
        durability: 1000,
        breakingSpeed: 10,
        enchamentability: 9,
        level: 4,
        damage: 6
    },
    recipes:{},
    translation:{
        material: "Урановый слиток",
        sword: "Урановый меч",
        pickaxe: "Урановая кирка",
        shovel: "Урановая лопата",
        axe: "Урановый топор",
        hoe: "Урановая мотыга"
    }
});

OresAPI.createCustomOre({
    params:{
        material: "Uranium",
        ToolLevel: 3,
        genChunk: 8,
        randomSize: true,
        genSize: [2, 6],
        min: 30,
        max: 70,
        drop:{},
        color: "a"
    },
    translate:{
        ore: "Урановая руда",
        ore_block: "Урановый блок"
    }
});

OresAPI.defineArmorSet({
    material: "uranium",
    durability: 1000,
    color: "a",
    defense:{
        helmet: 3,
        chestplate: 3,
        leggings: 3,
        boots: 2
    },
    craftID: ItemID.ingotUranium,
    translate:{
        helmet: "Урановый шлем",
        chestplate: "Урановый нагрудник",
        leggings: "Урановые поножи",
        boots: "Урановые боты"
    }
});*/

OresAPI.registerOre({
    source:{material: "uranium"},
    ore:{
        requiredToolLvl: 3,
        veinSize:{max: 4},
        veinsInChunk: 3,
        depthGeneration:{min: 1, max: 10}
    },
    translations:{
        source: {ru: "Ураниумовый Слиток"},
        ore: [{ru: "Ураниумовая Руда"}],
        oreBlock: [{ru: "Ураниумовый Блок"}]
    },
    overrideNames:{
        itemColor: 2,
        source:{standart: true},
        ore:{standart: true},
        oreBlock:{standart: true}
    }
});

OresAPI.registerTools({
    toolMaterial:{
        material: "uranium",
        durability: 1000,
        efficiency: 10,
        level: 5,
        damage: 7
    },
    recipes:{primary: ItemID.ingotUranium},
    translations:{
        sword: {ru: "Ураниумовый Меч"},
        pickaxe: {ru: "Ураниумовая Кирка"},
        axe: {ru: "Ураниумовый Топор"},
        hoe: {ru: "Ураниумовая Мотыга"},
        shovel: {ru: "Ураниумовая Лопата"}
    },
    overrideNames:{
        standart: true,
        itemsColor: 2
    }
}); 

OresAPI.registerArmor({
    material: "uranium",
    properties:{
        durability: 1000,
        helmet:{armor: 1},
        chestplate:{armor: 2},
        leggings:{armor: 2},
        boots:{armor: 1}
    },
    translations:{
        helmet: {ru: "Ураниумовый Шлем"},
        chestplate: {ru: "Ураниумовый Нагрудник"},
        leggings: {ru: "Ураниумовые Поножи"},
        boots: {ru: "Ураниумовые Ботинки"}
    },
    overrideNames:{
        standart: true,
        itemsColor: 2
    }
});