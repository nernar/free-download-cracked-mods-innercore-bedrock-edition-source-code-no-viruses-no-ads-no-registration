var rnd = function (min, max) {
    return Math.floor((Math.random() * max) + min);
};
var RecipeSystem = {workbench: [], kiln: [], anvil: [], grinder: {}, addRecipeToWorkbench: function (resId, resCount, resData, ing, tool, canDamage, level, code) {
    if (!tool) {
        tool = 0;
    }
    if (!canDamage) {
        canDamage = true;
    }
    if (!level) {
        level = 0;
    }
    this.workbench.push({resId: resId, resCount: resCount, resData: resData, ing0: ing[0][0], ingData0: ing[0][1], ing1: ing[1][0], ingData1: ing[1][1], ing2: ing[2][0], ingData2: ing[2][1], ing3: ing[3][0], ingData3: ing[3][1], ing4: ing[4][0], ingData4: ing[4][1], ing5: ing[5][0], ingData5: ing[5][1], ing6: ing[6][0], ingData6: ing[6][1], ing7: ing[7][0], ingData7: ing[7][1], ing8: ing[8][0], ingData8: ing[8][1], toolId: tool, canDamage: canDamage, level: level, code: code});
}, getWorkbenchRecipe: function () {
    return this.workbench;
}, addRecipeToKiln: function (resId, resCount, resData, ing) {
    this.kiln.push({resId: resId, resCount: resCount, resData: resData, ing0: ing[0][0], ingCount0: ing[0][1], ingData0: ing[0][2], ing1: ing[1][0], ingCount1: ing[1][1], ingData1: ing[1][2]});
}, getKilnRecipe: function () {
    return this.kiln;
}, addAnvilRecipe: function (res, item, tool) {
    this.anvil.push({resId: res.id, resCount: res.count, resData: res.data, item: item, tool: tool});
}, getAnvilRecipe: function () {
    return this.anvil;
}, addGrinderRecipe: function (ing, res) {
    this.grinder[ing.id + ":" + ing.data] = {id: res.id, data: res.data, count: res.count};
}, getGrinderRecipe: function (id, data) {
    return this.grinder[id + ":" + data];
}};
var RecipePattern = {metalBlock: function (res, ing) {
    RecipeSystem.addRecipeToWorkbench(res.id, 1, res.data, [[ing.id, ing.data], [ing.id, ing.data], [ing.id, ing.data], [ing.id, ing.data], [ing.id, ing.data], [ing.id, ing.data], [ing.id, ing.data], [ing.id, ing.data], [ing.id, ing.data]]);
    RecipeSystem.addRecipeToWorkbench(ing.id, 9, ing.data, [[res.id, res.data], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]]);
}, smallRecipe: function (res, ing) {
    RecipeSystem.addRecipeToWorkbench(res.id, 1, res.data, [[ing.id, ing.data], [ing.id, ing.data], [0, 0], [ing.id, ing.data], [ing.id, ing.data], [0, 0], [0, 0], [0, 0], [0, 0]]);
    RecipeSystem.addRecipeToWorkbench(ing.id, 4, ing.data, [[res.id, res.data], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]]);
}, withToolRecipe: function (res, ing, tool, canDamage) {
    if (canDamage == null) {
        canDamage = true;
    }
    RecipeSystem.addRecipeToWorkbench(res.id, res.count, res.data, [[ing.id, ing.data], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]], tool, canDamage);
}, pickaxeRecipe: function (res, ing) {
    for (i in craftingFiles) {
        RecipeSystem.addRecipeToWorkbench(res.id, res.count, res.data, [[ing.plate, 0], [ing.ingot, 0], [ing.ingot, 0], [0, 0], [ing.binding, 0], [0, 0], [0, 0], [280, 0], [0, 0]], craftingFiles[i]);
    }
}, axeRecipe: function (res, ing) {
    for (i in craftingFiles) {
        RecipeSystem.addRecipeToWorkbench(res.id, res.count, res.data, [[ing.plate, 0], [ing.ingot, 0], [ing.binding, 0], [ing.plate, 0], [280, 0], [ing.ingot, 0], [0, 0], [280, 0], [0, 0]], craftingFiles[i]);
    }
}, shovelRecipe: function (res, ing) {
    for (i in craftingFiles) {
        RecipeSystem.addRecipeToWorkbench(res.id, res.count, res.data, [[0, 0], [ing.plate, 0], [ing.binding, 0], [0, 0], [280, 0], [ing.plate, 0], [280, 0], [0, 0], [0, 0]], craftingFiles[i]);
    }
}, swordRecipe: function (res, ing) {
    for (i in craftingFiles) {
        RecipeSystem.addRecipeToWorkbench(res.id, res.count, res.data, [[0, 0], [ing.plate, 0], [ing.plate, 0], [ing.plate, 0], [ing.binding, 0], [ing.plate, 0], [280, 0], [ing.plate, 0], [0, 0]], craftingFiles[i]);
    }
}, hoeRecipe: function (res, ing) {
    for (i in craftingFiles) {
        RecipeSystem.addRecipeToWorkbench(res.id, res.count, res.data, [[ing.plate, 0], [ing.binding, 0], [0, 0], [0, 0], [280, 0], [0, 0], [0, 0], [280, 0], [0, 0]], craftingFiles[i]);
    }
}, helmetRecipe: function (res, ing) {
    for (i in craftingHammers) {
        RecipeSystem.addRecipeToWorkbench(res.id, res.count, res.data, [[ing.ingot, 0], [ing.plate, 0], [ing.ingot, 0], [ing.plate, 0], [0, 0], [ing.plate, 0], [0, 0], [ItemID.leatherBelt, 0], [0, 0]], craftingHammers[i]);
    }
}};
Callback.addCallback("PostLoaded", function () {
    for (let d = 0; d <= 3; d++) {
        RecipeSystem.addRecipeToWorkbench(5, 6, d, [[17, d], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]], ItemID.axeFlint, true, 0, function () {
            World.drop(this.x, this.y + 1, this.z, ItemID.bark_oak, 1, 0);
        });
    }
    for (let d = 0; d <= 1; d++) {
        RecipeSystem.addRecipeToWorkbench(5, 6, d, [[162, d], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]], ItemID.axeFlint);
    }
    RecipeSystem.addRecipeToWorkbench(ItemID.pickaxeFlint, 1, 0, [[318, 0], [ItemID.plantRope, 0], [318, 0], [ItemID.flakedFlint, 0], [280, 0], [ItemID.flakedFlint, 0], [0, 0], [280, 0], [0, 0]], 0);
    RecipeSystem.addRecipeToWorkbench(ItemID.workbladeFlint, 1, 0, [[0, 0], [ItemID.flakedFlint, 0], [318, 0], [ItemID.flakedFlint, 0], [ItemID.plantRope, 0], [ItemID.flakedFlint, 0], [280, 0], [ItemID.flakedFlint, 0], [0, 0]], 0);
    RecipePattern.metalBlock({id: 41, data: 0}, {id: 266, data: 0});
    RecipePattern.metalBlock({id: 42, data: 0}, {id: 265, data: 0});
    RecipePattern.metalBlock({id: 57, data: 0}, {id: 264, data: 0});
    RecipePattern.metalBlock({id: 152, data: 0}, {id: 331, data: 0});
    RecipePattern.metalBlock({id: 133, data: 0}, {id: 388, data: 0});
    RecipePattern.metalBlock({id: 22, data: 0}, {id: 351, data: 4});
    RecipeSystem.addRecipeToWorkbench(ItemID.axeFlint, 1, 0, [[ItemID.flakedFlint, 0], [318, 0], [ItemID.plantRope, 0], [ItemID.flakedFlint, 0], [280, 0], [ItemID.flakedFlint, 0], [0, 0], [280, 0], [0, 0]], 0);
    RecipeSystem.addRecipeToWorkbench(ItemID.shovelFlint, 1, 0, [[0, 0], [ItemID.flakedFlint, 0], [318, 0], [0, 0], [ItemID.plantRope, 0], [ItemID.flakedFlint, 0], [280, 0], [0, 0], [0, 0]], 0);
    RecipeSystem.addRecipeToWorkbench(ItemID.plantRope, 1, 0, [[ItemID.plantFiber, 0], [ItemID.plantFiber, 0], [0, 0], [ItemID.plantFiber, 0], [ItemID.plantFiber, 0], [0, 0], [0, 0], [0, 0], [0, 0]], 0);
    RecipeSystem.addRecipeToWorkbench(4, 1, 0, [[ItemID.rockStone, 0], [ItemID.rockStone, 0], [0, 0], [ItemID.rockStone, 0], [ItemID.rockStone, 0], [0, 0], [0, 0], [0, 0], [0, 0]], 0);
    RecipeSystem.addRecipeToWorkbench(BlockID.kilnBricks, 2, 0, [[337, 0], [24, 0], [337, 0], [24, 0], [337, 0], [24, 0], [337, 0], [24, 0], [337, 0]], 0);
    RecipeSystem.addRecipeToWorkbench(BlockID.alloyKilnController, 1, 0, [[BlockID.kilnBricks, 0], [BlockID.kilnBricks, 0], [BlockID.kilnBricks, 0], [BlockID.kilnBricks, 0], [0, 0], [BlockID.kilnBricks, 0], [BlockID.kilnBricks, 0], [BlockID.kilnBricks, 0], [BlockID.kilnBricks, 0]], 0);
});
var Fuel = {getBurnTime: function (id, data) {
    return Recipes.getFuelBurnDuration(id, data);
}};
Callback.addCallback("PostLoaded", function () {
    for (d = 0; d < 4; d++) {
        RecipeSystem.addRecipeToKiln(263, 2, 1, [[17, 1, d], [17, 1, d]]);
    }
    RecipeSystem.addRecipeToKiln(263, 2, 1, [[161, 1, 0], [161, 1, 0]]);
    RecipeSystem.addRecipeToKiln(263, 2, 1, [[161, 1, 1], [161, 1, 1]]);
    RecipeSystem.addRecipeToKiln(20, 1, 0, [[12, 1, 0], [0, 0, 0]]);
    RecipeSystem.addRecipeToKiln(20, 2, 0, [[12, 1, 0], [12, 1, 0]]);
    RecipeSystem.addRecipeToKiln(20, 1, 0, [[12, 1, 1], [0, 0, 0]]);
    RecipeSystem.addRecipeToKiln(20, 2, 0, [[12, 1, 1], [12, 1, 1]]);
    RecipeSystem.addRecipeToKiln(ItemID.ingotDirium, 1, 0, [[ItemID.dustDirium, 1, 0], [0, 0, 0]]);
    RecipeSystem.addRecipeToKiln(ItemID.ingotDowniron, 1, 0, [[ItemID.dustDowniron, 1, 0], [0, 0, 0]]);
    RecipeSystem.addRecipeToKiln(ItemID.ingotCobalt, 1, 0, [[ItemID.dustCobalt, 1, 0], [0, 0, 0]]);
    RecipeSystem.addRecipeToKiln(ItemID.ingotCopper, 1, 0, [[ItemID.dustCopper, 1, 0], [0, 0, 0]]);
    RecipeSystem.addRecipeToKiln(265, 1, 0, [[ItemID.dustIron, 1, 0], [0, 0, 0]]);
    RecipeSystem.addRecipeToKiln(266, 1, 0, [[ItemID.dustGold, 1, 0], [0, 0, 0]]);
    RecipeSystem.addRecipeToKiln(ItemID.ingotTin, 1, 0, [[ItemID.dustTin, 1, 0], [0, 0, 0]]);
    RecipeSystem.addRecipeToKiln(1, 2, 0, [[4, 1, 0], [4, 1, 0]]);
    RecipeSystem.addRecipeToKiln(1, 1, 0, [[4, 1, 0], [0, 0, 0]]);
    RecipeSystem.addRecipeToKiln(350, 1, 0, [[349, 1, 0], [0, 0, 0]]);
    RecipeSystem.addRecipeToKiln(350, 1, 1, [[349, 1, 1], [0, 0, 0]]);
    RecipeSystem.addRecipeToKiln(364, 1, 0, [[363, 1, 0], [0, 0, 0]]);
    RecipeSystem.addRecipeToKiln(366, 1, 0, [[365, 1, 0], [0, 0, 0]]);
    RecipeSystem.addRecipeToKiln(393, 1, 0, [[392, 1, 0], [0, 0, 0]]);
    RecipeSystem.addRecipeToKiln(320, 1, 0, [[319, 1, 0], [0, 0, 0]]);
});

