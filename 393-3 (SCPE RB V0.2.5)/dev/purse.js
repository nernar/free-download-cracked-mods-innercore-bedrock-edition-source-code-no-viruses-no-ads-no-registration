var Backpack = {set: function (type, arg1) {
    IDRegistry.genItemID("backpack" + type);
    Item.createItem("backpack" + type, type + " Backpack", {name: "" + type, meta: 0}, {stack: 1});
    Callback.addCallback("PostLoaded", function () {
        Recipes.addShaped({id: ItemID["backpack" + type], count: 1, data: 0}, ["bbb", "bab", "bbb"], ["a", arg1.ingridient2, 0, "b", arg1.ingridient, 0]);
    });
}};
Backpack.set("Purse", {ingridient: 334, ingridient2: 287});
BackpackRegistry.register(ItemID.backpackPurse, {slots: 108, slotsCenter: true, inRow: 9});

