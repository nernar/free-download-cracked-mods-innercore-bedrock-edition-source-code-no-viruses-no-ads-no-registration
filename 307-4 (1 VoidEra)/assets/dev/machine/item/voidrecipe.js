Callback.addCallback("PreLoaded", function(){
MachineRecipeRegistry.registerRecipesFor("vajraMacerator", {
"BlockID.oreTin": {storage: [ItemID.disoreed, 1], result: [ItemID.dustTin, 8, 0]},
"BlockID.oreCopper": {storage: [ItemID.disoreed, 1], result: [ItemID.dustCopper, 8, 0]},
"BlockID.oreLead": {storage: [ItemID.disoreed, 1], result: [ItemID.dustLead, 8, 0]},
"15": {storage: [ItemID.disoreed, 1], result: [ItemID.dustIron, 8, 0]},
"14": {storage: [ItemID.disoreed, 1], result: [ItemID.dustGold, 8, 0]},
"ItemID.voidshard": {storage: [ItemID.rediant, 1], result: [ItemID.voidingot, 2, 0]},
"ItemID.voidingot": {storage: [ItemID.disoreed, 1], result: [ItemID.voiddust, 4, 0]},
"BlockID.oreTin": {storage: [ItemID.rediant, 1], result: [ItemID.ingotTin, 4, 0]},
"BlockID.oreCopper": {storage: [ItemID.rediant, 1], result: [ItemID.ingotCopper, 4, 0]},
"BlockID.oreLead": {storage: [ItemID.rediant, 1], result: [ItemID.ingotLead, 4, 0]},
"15": {storage: [ItemID.rediant, 1], result: [265, 4, 0]},
"14": {storage: [ItemID.rediant, 1], result: [266, 4, 0]},
"ItemID.iridiumChunk": {storage: [ItemID.rediant, 1], result: [ItemID.iridiumingot, 2, 0]},
"ItemID.uranium": {storage: [ItemID.rediant, 1], result: [ItemID.uraniumingot, 2, 0]},
}, true);

MachineRecipeRegistry.registerRecipesFor("malecularTransformer", {
"ItemID.disoreed": {id: ItemID.molecule, count: 1, data: 0},
"ItemID.rediant": {id: ItemID.molecule, count: 1, data: 0},
"ItemID.refirus": {id: ItemID.molecule, count: 1, data: 0},
"ItemID.voidingot": {id: ItemID.molecule, count: 2, data: 0},
"ItemID.voidshard": {id: ItemID.molecule, count: 3, data: 0},
"ItemID.voidstick": {id: ItemID.molecule, count: 1, data: 0},
"ItemID.eyse": {id: ItemID.molecule, count: 1, data: 0},
"ItemID.voidplate": {id: ItemID.molecule, count: 2, data: 0},
"ItemID.voiddust": {id: ItemID.molecule, count: 1, data: 0},
}, true);

Recipes.addFurnace(ItemID.voidshard, ItemID.voidingot, 0);
});
