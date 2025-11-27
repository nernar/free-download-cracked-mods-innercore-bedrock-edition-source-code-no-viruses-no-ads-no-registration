/*OresAPI.toolRegister({
    material:{
        mi: "ingotMalachite",
        uid: "malachite",
        name: "Malachite",
        color: "a"
    },
    tool:{
        name: "malachite",
        durability: 300,
        damage: 1,
        breakingSpeed: 15,
        enchamentability: 4,
        level: 2
    },
    recipes:{},
    translation:{
        material: "Малахитовый слиток",
        sword: "Малахитовый меч",
        pickaxe: "Малахитовая кирка",
        shovel: "Малахитовая лопата",
        axe: "Малахитовый топор",
        hoe: "Малахитовая мотыга"
    }
});

OresAPI.createCustomOre({
    params:{
        material: "Malachite",
        ToolLevel: 2,
        genChunk: 7,
        randomSize: true,
        genSize: [4, 10],
        min: 1,
        max: 20,
        drop:{},
        color: "a"
    },
    translate: {
        ore: "Малахитовая руда",
        ore_block: "Малахитовый блок"
    }
});

OresAPI.defineArmorSet({
    material: "malachite",
    durability: 600,
    color: "a",
    defense:{
        helmet: 0.5,
        chestplate: 0.5,
        leggings: 0.5,
        boots: 0.5
    },
    craftID: ItemID.ingotMalachite,
    translate:{
        helmet: "Малахитовый шлем",
        chestplate: "Малахитовый нагрудник",
        leggings: "Малахитовые поножи",
        boots: "Малахитовые боты"
    }
});*/

OresAPI.registerOre({
    source:{material: "malachite"},
    ore:{
        requiredToolLevel: 2,
        veinSize: {max: 4},
        veinsInChunk: 17,
        depthGeneration: {min: 1, max: 52}
    },
    translations:{
        source: {ru: "Малахитовый Слиток"},
        ore: [{ru: "Малахитовая Руда"}],
        oreBlock: [{ru: "Малахитовый Блок"}]
    },
    overrideNames:{
        itemColor: "a",
        source: {standart: true},
        ore: {standart: true},
        oreBlock: {standart: true}
    }
})

OresAPI.registerTools({
    toolMaterial:{
        material: "malachite",
        durability: 800,
        efficiency: 17,
        level: 2,
        damage: 1
    },
    recipes: {primary: ItemID.ingotMalachite},
    translations:{
        sword: {ru: "Малахитовый Меч"},
        pickaxe: {ru: "Малахитовая Кирка"},
        shovel: {ru: "Малахитовая Лопата"},
        axe: {ru: "Махалитовый Топор"},
        hoe: {ru: "Малахитовая Мотыга"}
    },
    overrideNames:{
        standart: true,
        itemsColor: "a"
    }
});

OresAPI.registerArmor({
    material: "malachite",
    properties:{
       durability: 800,
        helmet: {armor: 0.5},
        chestplate: {armor: 0.5},
        leggings: {armor: 0.5},
        boots: {armor: 0.5}
    },
    translations:{
        helmet: {ru: "Малахитовый Шлем"},
        chestplate: {ru: "Малахитовый Нагрудник"},
        leggings: {ru: "Малахитовые Поножи"},
        boots: {ru: "Малахитовые Ботинки"}
    },
    overrideNames:{
        standart: true,
        itemsColor: "a"
    }
});








