if (__config__.getBool("beta")) {
    Ace3.addItem("radish_seeds", "Radish Seeds", {name: "RadishSeed", meta: 0}, {isTech: false});
    Ace3.addItem("brocolli_seeds", "Brocolli Seeds", {name: "BrocolliSeed", meta: 0}, {isTech: false});
    Ace3.addItem("peanut_seeds", "Peanut Seeds", {name: "PeanutSeed", meta: 0}, {isTech: false});
    Ace3.addItem("kale_seeds", "Kale Seeds", {name: "KaleSeed", meta: 0}, {isTech: false});
    Ace3.addItem("cauliflower_seeds", "Cauliflower Seeds", {name: "CauliflowerSeed", meta: 0}, {isTech: false});
    Ace3.addItem("cabbage_seeds", "Cabbage Seeds", {name: "CabbageSeed", meta: 0}, {isTech: false});
    Ace3.addItem("chilli_seeds", "Chilli Seeds", {name: "ChilliSeed", meta: 0}, {isTech: false});
    Ace3.addPlant({blockID: "Radishcrop", name: "radishcrop", texture: "radish_stage", type: BLOCK_TYPE_CROP, render: "crop", seed: ItemID.radish_seeds, drop: ItemID.tomato});
    Ace3.addPlant({blockID: "Brocollicrop", name: "brocollicrop", texture: "brocolli_stage", type: BLOCK_TYPE_CROP, render: "crop", seed: ItemID.brocolli_seeds, drop: ItemID.brocolli});
    Ace3.addPlant({blockID: "Peanutcrop", name: "peanutcrop", texture: "peanut_stage", type: BLOCK_TYPE_CROP, render: "crop", seed: ItemID.peanut_seeds, drop: ItemID.peanut});
    Ace3.addPlant({blockID: "Kalecrop", name: "kalecrop", texture: "kale_stage", type: BLOCK_TYPE_CROP, render: "crop", seed: ItemID.kale_seeds, drop: ItemID.kale});
    Ace3.addPlant({blockID: "Cauliflowercrop", name: "cauliflowercrop", texture: "cauliflower_stage", type: BLOCK_TYPE_CROP, render: "crop", seed: ItemID.cauliflower_seeds, drop: ItemID.cauliflower});
    Ace3.addPlant({blockID: "Cabbagecrop", name: "cabbagecrop", texture: "cabbage_stage", type: BLOCK_TYPE_CROP, render: "crop", seed: ItemID.cabbage_seeds, drop: ItemID.cabbage});
    Ace3.addPlant({blockID: "Chillicrop", name: "chillicrop", texture: "chilli_stage", type: BLOCK_TYPE_CROP, render: "crop", seed: ItemID.chilli_seeds, drop: ItemID.chilli});
}

