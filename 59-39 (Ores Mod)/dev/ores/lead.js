/*OresAPI.toolRegister({
    material:{
        mi: "ingotLead",
        uid: "lead",
        name: "Lead",
        color: "7"
    },
    tool:{
        name: "lead",
        durability: 900,
        breakingSpeed: 6,
        enchamentability: 4,
        level: 3,
        damage: 2
    },
    recipes:{},
    translation:{
        material: "Свинцовый слиток",
        sword: "Свинцовый меч",
        pickaxe: "Свинцовая кирка",
        shovel: "Свинцовая лопата",
        axe: "Свинцовый топор",
        hoe: "Свинцовая мотыга"
    }
});

OresAPI.createCustomOre({
    params:{
        material: "Lead",
        ToolLevel: 2,
        genChunk: 17,
        randomSize: true,
        genSize: [2, 7],
        min: 1,
        max: 60,
        drop:{},
        color: 7
    },
    translate:{
        ore: "Свинцовая руда",
        ore_block: "Свинцовый блок"
    }
});

OresAPI.defineArmorSet({
    material: "lead",
    durability: 900,
    color: "7",
    defense:{
        helmet: 1,
        chestplate: 2,
        leggings: 1,
        boots: 1
    },
    craftID: ItemID.ingotLead,
    translate:{
        helmet: "Свинцовый шлем",
        chestplate: "Свинцовый нагрудник",
        leggings: "Свинцовые поножи",
        boots: "Свинцовые боты"
    }
});*/

OresAPI.registerOre({
    source:{material: "lead"},
    ore:{
        requiredToolLvl: 2,
        veinSize:{min: 2, max: 7},
        veinsInChunk: 17,
        depthGeneration:{min: 1, max: 60}
    },
    translations:{
        source: {ru: "Свинцовый Слиток"},
        ore: [{ru: "Свинцовая Руда"}],
        oreBlock: [{ru: "Свинцовый Блок"}]
    },
    overrideNames:{
        itemColor: 9,
        source:{standart: true},
        ore:{standart: true},
        oreBlock:{standart: true}
    }
});

OresAPI.registerTools({
    toolMaterial:{
        material: "lead",
        durability: 900,
        efficiency: 7,
        level: 5,
        damage: 3
    },
    recipes:{primary: ItemID.ingotLead},
    translations:{
        sword: {ru: "Свинцовый Меч"},
        pickaxe: {ru: "Свинцовая Кирка"},
        axe: {ru: "Свинцовый Топор"},
        hoe: {ru: "Свинцовая Мотыга"},
        shovel: {ru: "Свинцовая Лопата"}
    },
    overrideNames:{
        standart: true,
        itemsColor: 9
    }
}); 

OresAPI.registerArmor({
    material: "lead",
    properties:{
        durability: 900,
        helmet:{armor: 0.5},
        chestplate:{armor: 1},
        leggings:{armor: 1},
        boots:{armor: 0.5}
    },
    translations:{
        helmet: {ru: "Свинцовый Шлем"},
        chestplate: {ru: "Свинцовый Нагрудник"},
        leggings: {ru: "Свинцовые Поножи"},
        boots: {ru: "Свинцовые Ботинки"}
    },
    overrideNames:{
        standart: true,
        itemsColor: 9
    }
});