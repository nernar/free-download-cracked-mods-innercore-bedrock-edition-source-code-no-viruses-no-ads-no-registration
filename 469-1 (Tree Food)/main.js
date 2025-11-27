IDRegistry.genItemID("orangetf");
Item.createFoodItem("orangetf", "Orange", {name: "orangetf", meta: 0}, {food: 4});

IDRegistry.genItemID("romeappletf");
Item.createFoodItem("romeappletf", "Rome Apple", {name: "romeappletf", meta: 0}, {food: 5});

IDRegistry.genItemID("nuttf");
Item.createFoodItem("nuttf", "Nut", {name: "nuttf", meta: 0}, {food: 3});

IDRegistry.genItemID("acaciaseedtf");
Item.createFoodItem("acaciaseedtf", "Acacia Seeds", {name: "acaciaseedtf", meta: 0}, {food: 2});

Recipes.addShaped({id: ItemID.orangetf, count: 1, data: 0}, [
        "aaa",
        "aaa",
        "aaa"
    ], ['a', 18, 2]); 
    
Recipes.addShaped({id: ItemID.nuttf, count: 1, data: 0}, [
        "aaa",
        "aaa",
        "aaa"
    ], ['a', 18, 1]); 
    
Recipes.addShaped({id: ItemID.acaciaseedtf, count: 1, data: 0}, [
        "aaa",
        "aaa",
        "aaa"
    ], ['a', 161, 0]); 
Recipes.addShaped({id: ItemID.romeappletf, count: 1, data: 0}, [
        "aaa",
        "aaa",
        "aaa"
    ], ['a', 161, 1]);