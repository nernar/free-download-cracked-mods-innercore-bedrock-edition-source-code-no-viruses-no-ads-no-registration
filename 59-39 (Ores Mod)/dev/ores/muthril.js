OresAPI.toolRegister({
    material:{
        mi: "ingotMuthril",
        uid: "muthril",
        name: "Muthril",
        color: "2"
    },
    tool:{
        name: "muthril",
        durability: 400,
        breakingLevel: 10,
        damage: 3,
        enchamentability: 9,
        level: 3
    },
    recipes:{},
    translation:{
        material: "Мифриловый слиток",
        sword: "Мифриловый меч",
        pickaxe: "Мифриловая кирка",
        shovel: "Мифриловая лопата",
        axe: "Мифриловый топор",
        hoe: "Мифриловая мотыга"
    }
});

OresAPI.createCustomOre({
    params:{
        material: "Muthril",
        ToolLevel: 2,
        genChunk: 5,
        randomSize: true,
        genSize: [1, 6],
        min: 1,
        max: 40,
        drop:{},
        color: 2
    },
    translate:{
        ore: "Мифриловая руда",
        ore_block: "Мифриловый блок"
    }
});

OresAPI.defineArmorSet({
    material: "muthril",
    durability: 400,
    color: "2",
    defense:{
        helmet: 1,
        chestplate: 4,
        leggings: 2,
        boots: 1
    },
    craftID: ItemID.ingotMuthril,
    translate:{
        helmet: "Мифриловый шлем",
        chestplate: "Мифриловый нагрудник",
        leggings: "Мифриловые поножи",
        boots: "Мифриловые боты"
    }
});