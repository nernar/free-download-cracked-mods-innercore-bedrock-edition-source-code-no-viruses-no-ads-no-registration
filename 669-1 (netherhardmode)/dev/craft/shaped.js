Recipes.addShaped({id: BlockID.devilBlock, count: 1, data: 0}, [
    "dad",
    "ada",
    "dad"
], ['a', ItemID.satanicStone, 0, 'd', 399, 0]);

Recipes.addShaped({id: ItemID.netherInk, count: 1, data: 0}, [
    "aba",
    "ada",
    "aaa"
], ['b', 372, 0, 'd', 351, 0]);

Recipes.addShaped({id: ItemID.runeCutter, count: 1, data: 0}, [
    "ava",
    "ada",
    "ava"
], ['d', ItemID.devilIngot, 0, 'v',ItemID.netherInk, 0]);

Recipes.addShaped({id: ItemID.satanicStone, count: 1, data: 0}, [
    "ava",
    "vdv",
    "ava"
], ['d', ItemID.soulStone, 0, 'v',ItemID.runeCutter, 0]);

Recipes.addShaped({id: ItemID.theBreathOfHell, count: 1, data: 0}, [
    "bdb",
    "dsd",
    "bdb"
], ['b', 372, 0, 'd',ItemID.netherInk, 0, 's', 437, 0]);

Recipes.addShaped({id: ItemID.soulIngot, count: 1, data: 0}, [
    "bdb",
    "dsd",
    "bdb"
], ['b',ItemID.starOfNether , 0, 'd',ItemID.netherInk, 0, 's', 265, 0]);

Recipes.addShaped({id: ItemID.starOfNether, count: 1, data: 0}, [
    "bdb",
    "dsd",
    "bdb"
], ['b',ItemID.theBreathOfHell, 0, 'd',ItemID.netherInk, 0, 's', 399, 0]);

Recipes.addShaped({id: ItemID.devilIngot, count: 1, data: 0}, [
    "bsb",
    "sds",
    "bsb"
], ['b',ItemID.starOfNether, 0, 'd',ItemID.soulIngot, 0, 's', 399, 0]);