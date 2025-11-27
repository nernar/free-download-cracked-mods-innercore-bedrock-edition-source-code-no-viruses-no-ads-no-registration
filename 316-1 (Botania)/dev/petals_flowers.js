var colors = ["Black", "Blue", "Brown", "Cyan", "Green", "Grey", {start: "Light", end: "Blue"}, {start: "Light", end: "Grey"}, "Lime", "Magenta", "Orange", "Pink", "Purple", "Red", "White", "Yellow"];
var colorsRu = ["\u0427\u0451\u0440\u043d\u044b\u0439", "\u0421\u0438\u043d\u0438\u0439", "\u041a\u043e\u0440\u0438\u0447\u043d\u0435\u0432\u044b\u0439", "\u0411\u0438\u0440\u044e\u0437\u043e\u0432\u044b\u0439", "\u0417\u0435\u043b\u0451\u043d\u044b\u0439", "\u0421\u0435\u0440\u044b\u0439", "\u0413\u043e\u043b\u0443\u0431\u043e\u0439", "\u0421\u0432\u0435\u0442\u043b\u043e-\u0441\u0435\u0440\u044b\u0439", "\u041b\u0430\u0439\u043c\u043e\u0432\u044b\u0439", "\u041b\u0438\u043b\u043e\u0432\u044b\u0439", "\u041e\u0440\u0430\u043d\u0436\u0435\u0432\u044b\u0439", "\u0420\u043e\u0437\u043e\u0432\u044b\u0439", "\u0424\u0438\u043e\u043b\u0435\u0442\u043e\u0432\u044b\u0439", "\u041a\u0440\u0430\u0441\u043d\u044b\u0439", "\u0411\u0435\u043b\u044b\u0439", "\u0416\u0451\u043b\u0442\u044b\u0439"];
for (i = 0; i < colors.length; i++) {
    if (colors[i].start) {
        petalStrID = "petal" + colors[i].start + colors[i].end;
        petalName = colors[i].start + " " + colors[i].end + " Petal";
        manaPetalStrID = "manaPetal" + colors[i].start + colors[i].end;
        manaPetalName = colors[i].start + " " + colors[i].end + " Mana Petal";
        flowerStrID = "flower" + colors[i].start + colors[i].end;
        flowerName = colors[i].start + " " + colors[i].end + " Mystical Flower";
    } else {
        petalStrID = "petal" + colors[i];
        petalName = colors[i] + " Mystical Petal";
        manaPetalStrID = "manaPetal" + colors[i];
        manaPetalName = colors[i] + " Mana Petal";
        flowerStrID = "flower" + colors[i];
        flowerName = colors[i] + " Mystical Flower";
    }
    petalNumID = ItemID[petalStrID];
    manaPetalNumID = ItemID[manaPetalStrID];
    flowerBlockNumID = BlockID[flowerStrID];
    flowerItemNumID = ItemID[flowerStrID];
    ingredients.push(petalNumID * 100);
    ingredients.push(manaPetalNumID * 100);
    IDRegistry.genItemID(flowerStrID);
    Item.createItem(flowerStrID, flowerName, {name: flowerStrID});
    IDRegistry.genBlockID(flowerStrID);
    Block.createBlock(flowerStrID, [{name: flowerName, texture: [["flower", 0]], inCreative: false}]);
    Block.setBlockShape(flowerBlockNumID, {x: 0.001, y: 0.001, z: 0.001}, {x: 0.999, y: 0.1, z: 0.999});
    IDRegistry.genItemID(petalStrID);
    Item.createItem(petalStrID, petalName, {name: petalStrID});
    IDRegistry.genItemID(manaPetalStrID);
    Item.createItem(manaPetalStrID, manaPetalName, {name: manaPetalStrID});
    addManapoolRecipe({id: petalNumID}, 25, {id: manaPetalNumID});
    setBasicFlower(flowerItemNumID, flowerBlockNumID);
    addFlowerGeneration(flowerBlockNumID, {min: 1, max: 8}, 1 / 64);
}
petalCraft(ItemID.flowerBlack, ItemID.petalBlack);
petalCraft(ItemID.flowerBlue, ItemID.petalBlue);
petalCraft(ItemID.flowerBrown, ItemID.petalBrown);
petalCraft(ItemID.flowerCyan, ItemID.petalCyan);
petalCraft(ItemID.flowerGreen, ItemID.petalGreen);
petalCraft(ItemID.flowerGrey, ItemID.petalGrey);
petalCraft(ItemID.flowerLightBlue, ItemID.petalLightBlue);
petalCraft(ItemID.flowerLightGrey, ItemID.petalLightGrey);
petalCraft(ItemID.flowerLime, ItemID.petalLime);
petalCraft(ItemID.flowerMagenta, ItemID.petalMagenta);
petalCraft(ItemID.flowerOrange, ItemID.petalOrange);
petalCraft(ItemID.flowerPink, ItemID.petalPink);
petalCraft(ItemID.flowerPurple, ItemID.petalPurple);
petalCraft(ItemID.flowerRed, ItemID.petalRed);
petalCraft(ItemID.flowerWhite, ItemID.petalWhite);
petalCraft(ItemID.flowerYellow, ItemID.petalYellow);
function petalCraft(flower, petal) {
    Callback.addCallback("PostLoaded", function () {
        Recipes.addShaped({id: petal, count: 2, data: 0}, ["a"], ["a", flower, 0]);
        Recipes.addShaped({id: ItemID.forestWand, count: 1, data: 0}, [" ps", " sp", "s  "], ["s", ItemID.livingwoodStick, 0, "p", petal, 0]);
        Recipes.addShaped({id: ItemID.petalApothecary, count: 1, data: 0}, ["sps", " c ", "ccc"], ["c", 4, 0, "s", 44, 3, "p", petal, 0]);
    });
}

