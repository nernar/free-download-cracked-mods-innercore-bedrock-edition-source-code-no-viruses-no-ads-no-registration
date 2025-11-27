IDRegistry.genItemID("infusionStoneWeak");
Item.createItem("infusionStoneWeak", "Weak Infusion Stone", {name: "infusionStoneWeak", meta: 0}, {stack: 1});
Item.setMaxDamage(ItemID.infusionStoneWeak, 256);
IDRegistry.genItemID("infusionStoneRegular");
Item.createItem("infusionStoneRegular", "Regular Infusion Stone", {name: "infusionStoneRegular", meta: 0}, {stack: 1});
Item.setMaxDamage(ItemID.infusionStoneRegular, 512);
IDRegistry.genItemID("infusionStoneStrong");
Item.createItem("infusionStoneStrong", "Strong Infusion Stone", {name: "infusionStoneStrong", meta: 0}, {stack: 1});
Item.setMaxDamage(ItemID.infusionStoneStrong, 1024);
IDRegistry.genItemID("infusionStoneExtreme");
Item.createItem("infusionStoneExtreme", "Extreme Infusion Stone", {name: "infusionStoneExtreme", meta: 0}, {stack: 1});
Item.setMaxDamage(ItemID.infusionStoneExtreme, 2048);
IDRegistry.genItemID("infusionStoneMaster");
Item.createItem("infusionStoneMaster", "Master Infusion Stone", {name: "infusionStoneMaster"}, {stack: 1});
function addRecipeInfusion(result, data, infusion) {
    data.push({id: infusion, data: -1});
    Recipes.addShapeless(result, data, function (api, field, result) {
        for (var i in field) {
            if (field[i].id == infusion) {
                field[i].data++;
                if (field[i].data <= 2048 && field[i].data >= 256) {
                    field[i].id = field[i].count = field[i].data = 0;
                }
            } else {
                api.decreaseFieldSlot(i);
            }
        }
    });
}
Callback.addCallback("PostLoaded", function () {
    Recipes.addShaped({id: ItemID.infusionStoneWeak, count: 1, data: 0}, ["xxx", "x#x", "xxx"], ["x", ItemID.minicioEssence, 0, "#", 264, 0]);
    Recipes.addShaped({id: ItemID.infusionStoneWeak, count: 1, data: 0}, ["xxx", "x#x", "xxx"], ["x", ItemID.minicioEssence, 0, "#", 388, 0]);
    Recipes.addShaped({id: ItemID.infusionStoneWeak, count: 1, data: 0}, ["xxx", "x#x", "xxx"], ["x", ItemID.minicioEssence, 0, "#", 41, 0]);
    Recipes.addShaped({id: ItemID.infusionStoneRegular, count: 1, data: 0}, ["aef", "twa", "fte"], ["a", ItemID.airEssence, 0, "w", ItemID.infusionStoneWeak, 0, "e", ItemID.earthEssence, 0, "f", ItemID.fireEssence, 0, "t", ItemID.dyeEssence, 0]);
    Recipes.addShaped({id: ItemID.infusionStoneStrong, count: 1, data: 0}, ["rcc", "swg", "gon"], ["r", ItemID.redstoneEssence, 0, "w", ItemID.infusionStoneRegular, 0, "n", ItemID.netherEssence, 0, "g", ItemID.glowstoneEssence, 0, "s", ItemID.sheepEssence, 0, "c", ItemID.cowEssence, 0, "o", ItemID.obsidianEssence, 0]);
    Recipes.addShaped({id: ItemID.infusionStoneExtreme, count: 1, data: 0}, ["mzl", "esb", "bge"], ["z", ItemID.experienceEssence, 0, "e", ItemID.enderEssence, 0, "s", ItemID.infusionStoneStrong, 0, "b", ItemID.blazeEssence, 0, "g", ItemID.goldEssence, 0, "m", ItemID.ghastEssence, 0, "l", ItemID.lapisEssence, 0]);
    Recipes.addShaped({id: ItemID.infusionStoneMaster, count: 1, data: 0}, ["dwd", "ese", "wew"], ["d", ItemID.diamondEssence, 0, "s", ItemID.infusionStoneExtreme, 0, "e", ItemID.emeraldEssence, 0, "w", ItemID.witherEssence, 0]);
    addRecipeInfusion({id: ItemID.accioEssence, count: 1, data: 0}, [{id: ItemID.minicioEssence, data: 0}, {id: ItemID.minicioEssence, data: 0}, {id: ItemID.minicioEssence, data: 0}, {id: ItemID.minicioEssence, data: 0}], ItemID.infusionStoneWeak);
    addRecipeInfusion({id: ItemID.crucioEssence, count: 1, data: 0}, [{id: ItemID.accioEssence, data: 0}, {id: ItemID.accioEssence, data: 0}, {id: ItemID.accioEssence, data: 0}, {id: ItemID.accioEssence, data: 0}], ItemID.infusionStoneRegular);
    addRecipeInfusion({id: ItemID.imperioEssence, count: 1, data: 0}, [{id: ItemID.crucioEssence, data: 0}, {id: ItemID.crucioEssence, data: 0}, {id: ItemID.crucioEssence, data: 0}, {id: ItemID.crucioEssence, data: 0}], ItemID.infusionStoneStrong);
    addRecipeInfusion({id: ItemID.zivicioEssence, count: 1, data: 0}, [{id: ItemID.imperioEssence, data: 0}, {id: ItemID.imperioEssence, data: 0}, {id: ItemID.imperioEssence, data: 0}, {id: ItemID.imperioEssence, data: 0}], ItemID.infusionStoneExtreme);
    addRecipeInfusion({id: ItemID.accioEssence, count: 1, data: 0}, [{id: ItemID.minicioEssence, data: 0}, {id: ItemID.minicioEssence, data: 0}, {id: ItemID.minicioEssence, data: 0}, {id: ItemID.minicioEssence, data: 0}], ItemID.infusionStoneMaster);
    addRecipeInfusion({id: ItemID.crucioEssence, count: 1, data: 0}, [{id: ItemID.accioEssence, data: 0}, {id: ItemID.accioEssence, data: 0}, {id: ItemID.accioEssence, data: 0}, {id: ItemID.accioEssence, data: 0}], ItemID.infusionStoneMaster);
    addRecipeInfusion({id: ItemID.imperioEssence, count: 1, data: 0}, [{id: ItemID.crucioEssence, data: 0}, {id: ItemID.crucioEssence, data: 0}, {id: ItemID.crucioEssence, data: 0}, {id: ItemID.crucioEssence, data: 0}], ItemID.infusionStoneMaster);
    addRecipeInfusion({id: ItemID.zivicioEssence, count: 1, data: 0}, [{id: ItemID.imperioEssence, data: 0}, {id: ItemID.imperioEssence, data: 0}, {id: ItemID.imperioEssence, data: 0}, {id: ItemID.imperioEssence, data: 0}], ItemID.infusionStoneMaster);
});

