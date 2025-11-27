/*OresAPI.toolRegister({
    material:{
        type: "crystal",
        uid: "sapphire",
        color: "b"
    },
    tool:{
        durability: 5000,
        breakingSpeed: 14,
        enchamentability: 30,
        level: 5,
        damage: 5
    },
        translation:{
            material: "Сапфировый кристал",
            sword: "Сапфировый меч",
            pickaxe: "Сапфировая кирка",
            shovel: "Сапфировая лопата",
            axe: "Сапфировый топор",
            hoe: "Сапфировая мотыга"
        }
});
    
OresAPI.defineArmorSet({
    material: "sapphire",
    durability: 5000,
    color: "b",
    defense:{
        helmet: 4,
        chestplate: 7,
        leggings: 3,
        boots: 3
    },
    craftID: ItemID.crystalSapphire,
    translate:{
        helmet: "Сапфировый шлем",
        chestplate: "Сапфировый нагрудник",
        leggings: "Сапфировые поножи",
        boots: "Сапфировые боты"
    }
});

OresAPI.createCustomOre({
    params: {
        material: "Sapphire",
        ToolLevel: 4,
        genChunk: 3,
        randomSize: true,
        genSize: [2, 4],
        min: 1,
        max: 15,
        drop:{
            ore:[[ItemID.crystalSapphire, 2, 0]]
        },
        color: "b"
    },
    translate:{
        ore: "Сапфировая руда",
        ore_block: "Сапфировый блок"
    }
});*/


OresAPI.registerOre({
    source:{material: "sapphire", sourceType: "crystal"},
    ore:{
        requiredToolLvl: 4,
        veinSize:{min: 2, max: 3},
        veinsInChunk: 3,
        depthGeneration:{min: 1, max: 17},
        oreDrop: [[ItemID.crystalSapphire, 2, 0]]
    },
    translations:{
        source: {ru: "Сапфировый Кристалл"},
        ore: [{ru: "Сапфировая Руда"}],
        oreBlock: [{ru: "Сапфировый Блок"}]
    },
    overrideNames:{
        itemColor: 1,
        source:{standart: true},
        ore:{standart: true},
        oreBlock:{standart: true}
    }
});

OresAPI.registerTools({
    toolMaterial:{
        material: "sapphire",
        durability: 2000,
        efficiency: 14,
        level: 5,
        damage: 5
    },
    recipes:{primary: ItemID.crystalSapphire},
    translations:{
        sword: {ru: "Сапфировый Меч"},
        pickaxe: {ru: "Сапфировая Кирка"},
        axe: {ru: "Сапфировый Топор"},
        hoe: {ru: "Сапфировая Мотыга"},
        shovel: {ru: "Сапфировая Лопата"}
    },
    overrideNames:{
        standart: true,
        itemsColor: 1
    }
}); 

OresAPI.registerArmor({
    material: "sapphire",
    materialID: "crystalSapphire",
    properties:{
        durability: 2000,
        helmet:{armor: 2},
        chestplate:{armor: 3},
        leggings:{armor: 3},
        boots:{armor: 2}
    },
    translations:{
        helmet: {ru: "Сапфировый Шлем"},
        chestplate: {ru: "Сапфировый Нагрудник"},
        leggings: {ru: "Сапфировые Поножи"},
        boots: {ru: "Сапфировые Ботинки"}
    },
    overrideNames:{
        standart: true,
        itemsColor: 1
    }
});