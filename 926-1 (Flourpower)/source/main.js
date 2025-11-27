/*
BUILD INFO:
  dir: core/script
  target: main.js
  files: 5
*/



// file: item/flour.js

IDRegistry.genItemID("flour");
Item.createItem("flour", "Flour", {name:  "flour"}, {stack: 64});




// file: item/flour_paste.js

IDRegistry.genItemID("flour_paste");
Item.createItem("flour_paste", "Flour Paste", {name:  "flour_paste"}, {stack: 64});




// file: item/smoked_bread.js

IDRegistry.genItemID("smoked_bread");
Item.createFoodItem("smoked_bread", "Smoked Bread", { name: "smoked_bread", meta: 0 }, { food: 1 });




// file: craft.js

Callback.addCallback("PreLoaded", function () {
    
    Recipes.removeWorkbenchRecipe(VanillaItemID.bread, 1);
    Recipes.removeWorkbenchRecipe(VanillaItemID.cookie, 8);
    Recipes.removeWorkbenchRecipe(VanillaBlockID.cake, 1);


    Recipes.addShapeless({id: ItemID.flour, count: 1, data: 0}, [{id: 296, data: 0}])

    Recipes.addShapeless({id: ItemID.flour_paste, count: 2, data: 0}, [{id: ItemID.flour, data: 0}, {id: VanillaItemID.water_bucket, data: 0}], function(api, field, result) {
        for(let i in field) {
            field[i].count--;
        };
        Player.addItemToInventory(VanillaItemID.bucket, 1);
    });


    Recipes.addFurnace(ItemID.flour, 297, 0);
    Recipes.addFurnace(297, ItemID.smoked_bread, 0);

    Recipes.addShaped({id: VanillaItemID.cookie, count: 8, data: 0},
        ["xax"],
        ["x", ItemID.flour, 0, "a", VanillaItemID.cocoa_beans, 0]
    );

    Recipes.addShaped({id: VanillaBlockID.sticky_piston, count: 1, data: 0},
        [
            " s ",
            " p "
        ],
        ["s", ItemID.flour_paste, 0, "p", VanillaBlockID.piston, 0]
    );

    Recipes.addShaped({id: VanillaItemID.lead, count: 2, data: 0},
        [
            "ss ",
            "sf ",
            "  s"
        ],
        ["s", VanillaItemID.string, 0, "f", ItemID.flour_paste, 0]
    );

    Recipes.addShapeless({id: VanillaItemID.magma_cream, count: 1, data: 0}, [{id: ItemID.flour_paste, data: 0}, {id: VanillaItemID.blaze_powder, data: 0}])


    Recipes.addShaped({id: VanillaBlockID.cake, count: 1, data: 0},
        [
            "xxx",
            "ses",
            "fff"
        ],
        ["f", ItemID.flour, 0, "x", VanillaItemID.milk_bucket, 0, "s", VanillaItemID.sugar, 0, "e", VanillaItemID.egg, 0], function(api, field, result) {
            for(let i in field) {
                field[i].count--;
            };
            Player.addItemToInventory(VanillaItemID.bucket, 3);
        }
    );
});




// file: lang/ru.js

Translation.addTranslation("Flour", {ru: "Мука"});
Translation.addTranslation("Flour Paste", {ru: "Мучной Клейстер"});
Translation.addTranslation("Smoked Bread", {ru: "Копченый Хлеб"});




