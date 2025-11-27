//Furnace
XLRegistry.FurnaceRecipes("cheese", "cheese_puff", 0.35);
XLRegistry.FurnaceRecipes(848, "chocolate_syrup", 0.35);
XLRegistry.FurnaceRecipes("raw_chicken_wing", "cooked_chicken_wing", 0.35);
XLRegistry.FurnaceRecipes("dough", "cooked_dough", 0.35);
XLRegistry.FurnaceRecipes("raw_corn", "corn", 0.35);
XLRegistry.FurnaceRecipes(367, "flesh", 0.35);
XLRegistry.FurnaceRecipes(344, "fried_egg", 0.35);
XLRegistry.FurnaceRecipes("rice", "fried_rice", 0.35);
XLRegistry.FurnaceRecipes("pepper", "hot_sauce", 0.35);
XLRegistry.FurnaceRecipes("lemon_juice", "lemon_syrup", 0.35);
XLRegistry.FurnaceRecipes(353, "marshmallow", 0.35);
XLRegistry.FurnaceRecipes("onion", "onion_rings", 0.35);
XLRegistry.FurnaceRecipes("pineapple_juice", "pineapple_syrup", 0.35);
XLRegistry.FurnaceRecipes("marshmallow", "roasted_marshmallow", 0.35);
XLRegistry.FurnaceRecipes(-130, "seaweed", 0.35);
XLRegistry.FurnaceRecipes("strawberry_juice", "strawberry_syrup", 0.35);
XLRegistry.FurnaceRecipes("tomato", "tomato_sauce", 0.35);

//SHAPE
Callback.addCallback("LevelLoaded", function(){
    Recipes.addShaped({id: ItemID.baguette, count: 1, data: 0}, [
        "W  ",
        " D ",
        "  W"
    ], ['W', 296, 0, 'D', ItemID.cooked_dough, 0]);
    Recipes.addShaped({id: ItemID.baguette, count: 1, data: 0}, [
        "  W",
        " D ",
        "W  "
    ], ['W', 296, 0, 'D', ItemID.cooked_dough, 0]);
    Recipes.addShaped({id: ItemID.beef_stew, count: 1, data: 0}, [
        "ACO",
        " B "
    ], ['A', 391, 0, 'C', 364, 0, 'O', ItemID.onion, 0, 'B', ItemID.bowl, 0]);
    Recipes.addShaped({id: ItemID.beer, count: 1, data: 0}, [
        "R",
        "F",
        "G"
    ], ['R', ItemID.rice, 0, 'F', 376, 0, 'G', ItemID.glass_mug, 0]);
    Recipes.addShaped({id: ItemID.blt_sandwich, count: 1, data: 0}, [
        "DDD",
        "BLT",
        "DDD"
    ], ['D', ItemID.cooked_dough, 0, 'B', ItemID.bacon, 0, 'L', ItemID.lettuce, 0, 'T', ItemID.tomato, 0]);
    Recipes.addShaped({id: ItemID.bottom_bun, count: 1, data: 0}, [
        "W W",
        " D "
    ], ['W', 296, 0, 'D', ItemID.cooked_dough, 0]);
    Recipes.addShaped({id: ItemID.bourbon_biscuit, count: 1, data: 0}, [
        "C",
        "B", 
        "C"
    ], ['C', ItemID.chocolate, 0, 'B', ItemID.chocolate_ice_cream_ball, 0]);
    Recipes.addShaped({id: ItemID.bowl, count: 8, data: 0}, [
        "S S",
        " I "
    ], ['S', 280, 0, 'I', 265, 0]);
    Recipes.addShaped({id: ItemID.breakfast_sandwich, count: 1, data: 0}, [
        "DDD",
        "BCE",
        "DDD"
    ], ['D', ItemID.cooked_dough, 0, 'B', ItemID.bacon, 0, 'C', ItemID.cheese, 0, 'E', ItemID.fried_egg, 0]);
    Recipes.addShaped({id: ItemID.burrito, count: 1, data: 0}, [
        " O ",
        "TGC",
        " O "
    ], ['C', ItemID.cheese, 0, 'T', ItemID.tomato, 0, 'G', ItemID.ground_beef, 0, 'O', ItemID.tortilla, 0]);
    Recipes.addShaped({id: ItemID.butter, count: 2, data: 0}, [
        "MMM",
        "MSM"
    ], ['M', 876, 0, 'S', ItemID.salt, 0], function(api, field, result){
        for(var i in field){
            api.decreaseFieldSlot(i);
        }
    Player.addItemToInventory(325, 5, 0)});
    Recipes.addShaped({id: ItemID.caesar_salad, count: 1, data: 0}, [
        "LP ",
        "HCE",
        " B "
    ], ['L', ItemID.lettuce, 0, 'P', ItemID.pepper_seeds, 0, 'H', ItemID.cheese, 0, 'C', ItemID.crouton, 0, 'E', 344, 0, 'B', ItemID.bowl, 0]);
    Recipes.addShaped({id: ItemID.caramel_apple, count: 1, data: 0}, [
        "SSS",
        "SAS", 
        "SSS"
    ], ['S', 353, 0, 'A', 260, 0]);
    Recipes.addShaped({id: ItemID.cheese_cake, count: 1, data: 0}, [
        "MMM",
        "SCS",
        "WWW"
    ], ['M', 850, 0, 'S', 353, 0, 'C', ItemID.cheese, 0, 'W', 296, 0], function(api, field, result){
        for(var i in field){
            api.decreaseFieldSlot(i);
        }
    Player.addItemToInventory(325, 3, 0)});
    Recipes.addShaped({id: ItemID.cheese, count: 4, data: 0}, [
        "MM",
        "MM",
        "MM"
    ], ['M', 876, 0], function(api, field, result){
        for(var i in field){
            api.decreaseFieldSlot(i);
        }
    Player.addItemToInventory(325, 6, 0)});
    Recipes.addShaped({id: ItemID.cheeseburger, count: 1, data: 0}, [
        " T ",
        "CGP",
        " B "
    ], ['T', ItemID.top_bun, 0, 'P', ItemID.cucumber, 0, 'G', ItemID.ground_beef, 0, 'C', ItemID.cheese, 0, 'B', ItemID.bottom_bun, 0]);
    Recipes.addShaped({id: ItemID.chicken_salad, count: 1, data: 0}, [
        "OU ",
        "PCE",
        " B "
    ], ['O', ItemID.onion, 0, 'U', ItemID.cucumber, 0, 'P', ItemID.pepper_seeds, 0, 'C', 366, 0, 'E', 344, 0, 'B', ItemID.bowl, 0]);
    Recipes.addShaped({id: ItemID.chicken_sandwich, count: 1, data: 0}, [
        "DDD",
        "LCL",
        "DDD"
    ], ['D', ItemID.cooked_dough, 0, 'L', ItemID.lettuce, 0, 'C', 366, 0]);
    Recipes.addShaped({id: ItemID.chicken_soup, count: 1, data: 0}, [
        "A",
        "C",
        "B"
    ], ['A', 391, 0, 'C', 366, 0, 'B', ItemID.bowl, 0]);
    Recipes.addShaped({id: ItemID.chickenburger, count: 1, data: 0}, [
        " T ",
        "HCL",
        " B "
    ], ['T', ItemID.top_bun, 0, 'H', ItemID.hot_sauce, 0, 'C', 366, 0, 'L', ItemID.lettuce, 0, 'B', ItemID.bottom_bun, 0]);
    Recipes.addShaped({id: ItemID.chocolate_cake, count: 1, data: 0}, [
        "MMM",
        "SCS",
        "WWW"
    ], ['M', 850, 0, 'S', 353, 0, 'C', ItemID.chocolate, 0, 'W', 296, 0], function(api, field, result){
        for(var i in field){
            api.decreaseFieldSlot(i);
        }
    Player.addItemToInventory(325, 3, 0)});
    Recipes.addShaped({id: ItemID.chocolate_cookie_cake, count: 1, data: 0}, [
        "MMM",
        "SCS",
        "WWW"
    ], ['M', 850, 0, 'S', 353, 0, 'C', ItemID.chocolate_cookie, 0, 'W', 296, 0], function(api, field, result){
        for(var i in field){
            api.decreaseFieldSlot(i);
        }
    Player.addItemToInventory(325, 3, 0)});
    Recipes.addShaped({id: ItemID.chocolate_cookie_cupcake, count: 1, data: 0}, [
        "O",
        "D",
        "P"
    ], ['O', ItemID.chocolate_cookie, 0, 'D', ItemID.cooked_dough, 0, 'P', ItemID.paper_cup, 0]);
    Recipes.addShaped({id: ItemID.chocolate_cookie, count: 1, data: 0}, [
        "SCS",
        " M ",
        "SCS"
    ], ['S', ItemID.chocolate_syrup, 0, 'C', 357, 0, 'M', ItemID.marshmallow, 0]);
    Recipes.addShaped({id: ItemID.chocolate_cupcake, count: 1, data: 0}, [
        "C",
        "D",
        "P"
    ], ['C', ItemID.chocolate, 0, 'D', ItemID.cooked_dough, 0, 'P', ItemID.paper_cup, 0]);
    Recipes.addShaped({id: ItemID.chocolate, count: 1, data: 0}, [
        "CCC",
        "CDC",
        "CCC"
    ], ['C', ItemID.chocolate_syrup, 0, 'D', 848, 0]);
    Recipes.addShaped({id: ItemID.coffee_cup, count: 4, data: 0}, [
        "II ",
        "IIS",
        "II "
    ], ['I', 265, 0, 'S', 280, 0]);
    Recipes.addShaped({id: ItemID.crescent_roll, count: 1, data: 0}, [
        "D D",
        " D "
    ], ['D', ItemID.cooked_dough, 0]);
    Recipes.addShaped({id: ItemID.cucumber_soup, count: 1, data: 0}, [
        "P",
        "C",
        "B"
    ], ['P', 393, 0, 'C', ItemID.cucumber, 0, 'B', ItemID.bowl, 0]);
    Recipes.addShaped({id: ItemID.deadly_energy_drink, count: 1, data: 0}, [
        "RE",
        "WF",
        "S "
    ], ['R', ItemID.rice, 0, 'E', ItemID.empty_can, 0, 'W', 850, 0, 'F', 376, 0, 'S', 375, 0], function(api, field, result){
        for(var i in field){
            api.decreaseFieldSlot(i);
        }
    Player.addItemToInventory(325, 1, 0)});
    Recipes.addShaped({id: ItemID.donut, count: 4, data: 0}, [
        "DDD",
        "D D",
        "DDD"
    ], ['D', ItemID.cooked_dough, 0]);
    Recipes.addShaped({id: ItemID.dough, count: 8, data: 0}, [
        "WW",
        "WW",
        " A"
    ], ['W', 296, 0, 'A', 850, 0], function(api, field, result){
        for(var i in field){
            api.decreaseFieldSlot(i);
        }
    Player.addItemToInventory(325, 1, 0)});
    Recipes.addShaped({id: ItemID.empty_can, count: 4, data: 0}, [
        "I I",
        "I I",
        "I I"
    ], ['I', 265, 0]);
    Recipes.addShaped({id: ItemID.enchilada, count: 1, data: 0}, [
        "RTC",
        "MGO",
        " T "
    ], ['R', ItemID.rice, 0, 'C', ItemID.cheese, 0, 'M', ItemID.tomato_sauce, 0, 'G', ItemID.ground_beef, 0, 'O', ItemID.onion, 0, 'T', ItemID.tortilla, 0]);
    Recipes.addShaped({id: ItemID.futomaki, count: 1, data: 0}, [
        "SSS",
        "RCR",
        "SSS"
    ], ['S', ItemID.seaweed, 0, 'R', ItemID.rice, 0, 'C', ItemID.cucumber, 0]);
    Recipes.addShaped({id: ItemID.garden_salad, count: 1, data: 0}, [
        " L ",
        "HTC",
        " B "
    ], ['L', ItemID.lettuce, 0, 'H', ItemID.cheese, 0, 'T', ItemID.tomato, 0, 'C', ItemID.cucumber, 0, 'B', ItemID.bowl, 0]);
    Recipes.addShaped({id: ItemID.glass_mug, count: 2, data: 0}, [
        "GG ",
        "GGG",
        "GG "
    ], ['G', 20, 0]);
    Recipes.addShaped({id: ItemID.grilled_cheese_sandwich, count: 1, data: 0}, [
        "DDD",
        "CCC",
        "DDD"
    ], ['D', ItemID.cooked_dough, 0, 'C', ItemID.cheese, 0]);
    Recipes.addShaped({id: ItemID.hamburger, count: 1, data: 0}, [
        " T ",
        "OGP",
        " B "
    ], ['T', ItemID.top_bun, 0, 'O', ItemID.tomato, 0, 'G', ItemID.ground_beef, 0, 'P', ItemID.cucumber, 0, 'B', ItemID.bottom_bun, 0]);
    Recipes.addShaped({id: ItemID.healthy_energy_drink, count: 1, data: 0}, [
        "GR",
        "EW",
        "L "
    ], ['G', 370, 0, 'R', ItemID.rice, 0, 'E', ItemID.empty_can, 0, 'W', 850, 0, 'L', 382, 0], function(api, field, result){
        for(var i in field){
            api.decreaseFieldSlot(i);
        }
    Player.addItemToInventory(325, 1, 0)});
    Recipes.addShaped({id: ItemID.hot_dog, count: 1, data: 0}, [
        " C ",
        "CSC",
        " C "
    ], ['C', ItemID.cooked_dough, 0, 'S', ItemID.sausage, 0]);
    Recipes.addShaped({id: ItemID.ice_cream_cone, count: 1, data: 0}, [
        "W W",
        "W W",
        " W "
    ], ['W', 296, 0]);
    Recipes.addShaped({id: ItemID.ice_cream_sandwich, count: 1, data: 0}, [
        "HCH",
        "III",
        "HCH"
    ], ['H', ItemID.chocolate_syrup, 0, 'C', 357, 0, 'I', ItemID.vanilla_ice_cream_ball, 0]);
    Recipes.addShaped({id: ItemID.jambon_beurre, count: 1, data: 0}, [
        "P",
        "U",
        "B"
    ], ['P', 320, 0, 'U', ItemID.butter, 0, 'B', ItemID.baguette, 0]);
    Recipes.addShaped({id: ItemID.kebab, count: 1, data: 0}, [
        " T ",
        "LGN",
        " O "
    ], ['T', ItemID.tomato, 0, 'L', ItemID.lettuce, 0, 'G', ItemID.ground_beef, 0, 'N', ItemID.onion, 0, 'O', ItemID.tortilla, 0]);
    Recipes.addShaped({id: ItemID.lasagne, count: 1, data: 0}, [
        "DDD",
        "GTC",
        "DDD"
    ], ['D', ItemID.cooked_dough, 0, 'G', ItemID.ground_beef, 0, 'T', ItemID.tomato_sauce, 0, 'C', ItemID.cheese, 0]);
    Recipes.addShaped({id: ItemID.macaroni_and_cheese, count: 1, data: 0}, [
        " C ",
        "DDD",
        " B "
    ], ['C', ItemID.cheese, 0, 'D', ItemID.cooked_dough, 0, 'B', ItemID.bowl, 0]);
    Recipes.addShaped({id: ItemID.nether_cake, count: 1, data: 0}, [
        "MMM",
        "SBS",
        "WWW"
    ], ['M', 850, 0, 'S', 353, 0, 'B', 377, 0, 'W', 296, 0], function(api, field, result){
        for(var i in field){
            api.decreaseFieldSlot(i);
        }
    Player.addItemToInventory(325, 3, 0)});
    Recipes.addShaped({id: ItemID.onion_salad, count: 1, data: 0}, [
        "LOT",
        " B "
    ], ['L', ItemID.lettuce, 0, 'O', ItemID.onion, 0, 'T', ItemID.tomato, 0, 'B', ItemID.bowl, 0]);
    Recipes.addShaped({id: ItemID.oshizushi, count: 1, data: 0}, [
        "RSR",
        "RRR"
    ], ['R', ItemID.rice, 0, 'S', 463, 0]);
    Recipes.addShaped({id: ItemID.pancake, count: 1, data: 0}, [
        "DDD"
    ], ['D', ItemID.cooked_dough, 0]);
    Recipes.addShaped({id: ItemID.paper_cup, count: 3, data: 0}, [
        "P P",
        " P "
    ], ['P', 339, 0]);
    Recipes.addShaped({id: ItemID.pie_shell, count: 1, data: 0}, [
        "C C",
        " C "
    ], ['C', ItemID.dough, 0]);
    Recipes.addShaped({id: ItemID.pizza, count: 1, data: 0}, [
        "DDD",
        "DCD",
        "DDD"
    ], ['D', ItemID.cooked_dough, 0, 'C', ItemID.cheese, 0]);
    Recipes.addShaped({id: ItemID.potato_bread, count: 1, data: 0}, [
        "WPW"
    ], ['W', 296, 0, 'P', 393, 0]);
    Recipes.addShaped({id: ItemID.pumpkin_cake, count: 1, data: 0}, [
        "MMM",
        "SPS",
        "WWW"
    ], ['M', 850, 0, 'S', 353, 0, 'P', 86, 0, 'W', 296, 0], function(api, field, result){
        for(var i in field){
            api.decreaseFieldSlot(i);
        }
    Player.addItemToInventory(325, 3, 0)});
    Recipes.addShaped({id: ItemID.pumpkin_stew, count: 1, data: 0}, [
        " E ",
        "OGC",
        " P "
    ], ['E', ItemID.pepper, 0, 'O', 392, 0, 'G', ItemID.ground_beef, 0, 'C', 391, 0, 'P', 86, 0]);
    Recipes.addShaped({id: ItemID.rice_bread, count: 1, data: 0}, [
        "WRW"
    ], ['W', 296, 0, 'R', ItemID.rice, 0]);
    Recipes.addShaped({id: ItemID.sausage_roll, count: 1, data: 0}, [
        "D",
        "S",
        "D"
    ], ['D', ItemID.cooked_dough, 0, 'S', ItemID.sausage, 0]);
    Recipes.addShaped({id: ItemID.sausage, count: 3, data: 0}, [
        "C  ",
        " C ",
        "  C"
    ], ['C', 320, 0]);
    Recipes.addShaped({id: ItemID.sausage, count: 3, data: 0}, [
        "  C",
        " C ",
        "C  "
    ], ['C', 320, 0]);
    Recipes.addShaped({id: ItemID.spaghetti, count: 1, data: 0}, [
        " G ",
        "DTD",
        " B "
    ], ['G', ItemID.ground_beef, 0, 'D', ItemID.cooked_dough, 0, 'T', ItemID.tomato_sauce, 0, 'B', ItemID.bowl, 0]);
    Recipes.addShaped({id: ItemID.speedy_energy_drink, count: 1, data: 0}, [
        "SR",
        "EW"
    ], ['S', 353, 0, 'R', ItemID.rice, 0, 'E', ItemID.empty_can, 0, 'W', 850, 0], function(api, field, result){
        for(var i in field){
            api.decreaseFieldSlot(i);
        }
    Player.addItemToInventory(325, 1, 0)});
    Recipes.addShaped({id: ItemID.stealthy_energy_drink, count: 1, data: 0}, [
        "RE",
        "WS",
        "G "
    ], ['R', ItemID.rice, 0, 'E', ItemID.empty_can, 0, 'W', 850, 0, 'S', 353, 0, 'G', 396, 0], function(api, field, result){
        for(var i in field){
            api.decreaseFieldSlot(i);
        }
    Player.addItemToInventory(325, 1, 0)});
    Recipes.addShaped({id: ItemID.strawberry_cake, count: 1, data: 0}, [
        "MMM",
        "STS",
        "WWW"
    ], ['M', 850, 0, 'S', 353, 0, 'T', ItemID.strawberry, 0, 'W', 296, 0], function(api, field, result){
        for(var i in field){
            api.decreaseFieldSlot(i);
        }
    Player.addItemToInventory(325, 3, 0)});
    Recipes.addShaped({id: ItemID.strawberry_cupcake, count: 1, data: 0}, [
        "S",
        "D",
        "P"
    ], ['S', ItemID.strawberry, 0, 'D', ItemID.cooked_dough, 0, 'P', ItemID.paper_cup, 0]);
    Recipes.addShaped({id: ItemID.strong_energy_drink, count: 1, data: 0}, [
        "RE",
        "WM",
        "B "
    ], ['R', ItemID.rice, 0, 'E', ItemID.empty_can, 0, 'W', 850, 0, 'M', 378, 0, 'B', 377, 0], function(api, field, result){
        for(var i in field){
            api.decreaseFieldSlot(i);
        }
    Player.addItemToInventory(325, 1, 0)});
    Recipes.addShaped({id: ItemID.super_energy_drink, count: 1, data: 0}, [
        "SH",
        "PT",
        "D "
    ], ['S', ItemID.stealthy_energy_drink, 0, 'H', ItemID.healthy_energy_drink, 0, 'P', ItemID.speedy_energy_drink, 0, 'T', ItemID.strong_energy_drink, 0, 'D', 264, 0]);
    Recipes.addShaped({id: ItemID.taco_salad, count: 1, data: 0}, [
        " L ",
        "HTO",
        " B "
    ], ['L', ItemID.lettuce, 0, 'H', ItemID.cheese, 0, 'T', ItemID.tortilla, 0, 'O', ItemID.tomato, 0, 'B', ItemID.bowl, 0]);
    Recipes.addShaped({id: ItemID.taco, count: 1, data: 0}, [
        "N L",
        "TGH",
        " O "
    ], ['N', ItemID.onion, 0, 'L', ItemID.lettuce, 0, 'H', ItemID.cheese, 0, 'T', ItemID.tomato, 0, 'G', ItemID.ground_beef, 0, 'O', ItemID.tortilla, 0]);
    Recipes.addShaped({id: ItemID.tomato_soup, count: 1, data: 0}, [
        "T",
        "B"
    ], ['T', ItemID.tomato, 0, 'B', ItemID.bowl, 0]);
    Recipes.addShaped({id: ItemID.top_bun, count: 1, data: 0}, [
        " D ",
        "W W"
    ], ['D', 296, 0, 'W', ItemID.cooked_dough, 0]);
    Recipes.addShaped({id: ItemID.tortilla, count: 1, data: 0}, [
        "DDD",
        "DCD",
        "DDD"
    ], ['D', ItemID.cooked_dough, 0, 'C', ItemID.corn, 0]);
    Recipes.addShaped({id: ItemID.uramaki, count: 1, data: 0}, [
        "RRR",
        "ASC",
        "RRR"
    ], ['R', ItemID.rice, 0, 'A', 391, 0, 'S', ItemID.seaweed, 0, 'C', ItemID.cucumber, 0]);
    Recipes.addShaped({id: ItemID.vanilla_cookie, count: 1, data: 0}, [
        "CVC",
        " C "
    ], ['C', ItemID.cooked_dough, 0, 'V', ItemID.vanilla_cream, 0]);
    Recipes.addShaped({id: ItemID.vanilla_cupcake, count: 1, data: 0}, [
        "V",
        "D",
        "P"
    ], ['V', ItemID.vanilla_cream, 0, 'D', ItemID.cooked_dough, 0, 'P', ItemID.paper_cup, 0]);
    Recipes.addShaped({id: ItemID.vegetable_soup, count: 1, data: 0}, [
        "CAE",
        "TOP",
        " B "
    ], ['C', ItemID.cucumber, 0, 'A', 391, 0, 'E', ItemID.pepper, 0, 'T', ItemID.tomato, 0, 'O', ItemID.onion, 0, 'P', 392, 0, 'B', ItemID.bowl, 0]);
    Recipes.addShaped({id: ItemID.waffle, count: 1, data: 0}, [
        "DD",
        "DD"
    ], ['D', ItemID.dough, 0]);
});

//SHAPELESS
Callback.addCallback("LevelLoaded", function(){
    Recipes.addShapeless({id: ItemID.apple_pie, count: 1, data: 0}, [{id: ItemID.pie_shell, data: 0}, {id: 260, data: 0}]);
    Recipes.addShapeless({id: ItemID.bacon_pie, count: 1, data: 0}, [{id: ItemID.pie_shell, data: 0}, {id: ItemID.bacon, data: 0}]);
    Recipes.addShapeless({id: ItemID.bacon, count: 4, data: 0}, [{id: 320, data: 0}]);
    Recipes.addShapeless({id: ItemID.beef_jerky, count: 4, data: 0}, [{id: ItemID.salt, data: 0}, {id: 364, data: 0}, {id: ItemID.salt, data: 0}]);
    Recipes.addShapeless({id: ItemID.brownie, count: 1, data: 0}, [{id: ItemID.chocolate, data: 0}, {id: ItemID.chocolate_syrup, data: 0}]);
    Recipes.addShapeless({id: ItemID.bucket_of_fried_chicken, count: 1, data: 0}, [{id: 325, data: 0}, {id: 366, data: 0}]);
    Recipes.addShapeless({id: ItemID.butter_rice, count: 1, data: 0}, [{id: ItemID.rice, data: 0}, {id: ItemID.butter, data: 0}]);
    Recipes.addShapeless({id: ItemID.cappuccino, count: 1, data: 0}, [{id: ItemID.coffee, data: 0}, {id: 876, data: 0}], function(api, field, result){
        for(var i in field){
            api.decreaseFieldSlot(i);
        }
    Player.addItemToInventory(325, 1, 0)});
    Recipes.addShapeless({id: ItemID.cheese_pie, count: 1, data: 0}, [{id: ItemID.pie_shell, data: 0}, {id: ItemID.cheese, data: 0}]);
    Recipes.addShapeless({id: ItemID.cheesy_bread, count: 1, data: 0}, [{id: 297, data: 0}, {id: ItemID.cheese, data: 0}]);
    Recipes.addShapeless({id: ItemID.chicken_pot_pie, count: 1, data: 0}, [{id: ItemID.pie_shell, data: 0}, {id: 366, data: 0}]);
    Recipes.addShapeless({id: ItemID.chips, count: 8, data: 0}, [{id: ItemID.cooked_dough, data: 0}, {id: ItemID.salt, data: 0}]);
    Recipes.addShapeless({id: ItemID.chocolate_donut, count: 1, data: 0}, [{id: ItemID.chocolate_syrup, data: 0}, {id: ItemID.donut, data: 0}]);
    Recipes.addShapeless({id: ItemID.chocolate_ice_cream_ball, count: 1, data: 0}, [{id: ItemID.chocolate, data: 0}, {id: 332, data: 0}, {id: 876, data: 0}], function(api, field, result){
        for(var i in field){
            api.decreaseFieldSlot(i);
        }
    Player.addItemToInventory(325, 1, 0)});
    Recipes.addShapeless({id: ItemID.chocolate_ice_cream, count: 1, data: 0}, [{id: ItemID.chocolate_ice_cream_ball, data: 0}, {id: ItemID.ice_cream_cone, data: 0}]);
    Recipes.addShapeless({id: ItemID.chocolate_pie, count: 1, data: 0}, [{id: ItemID.pie_shell, data: 0}, {id: ItemID.chocolate, data: 0}, {id: ItemID.chocolate_syrup, data: 0}]);
    Recipes.addShapeless({id: ItemID.coffee, count: 1, data: 0}, [{id: ItemID.coffee_cup, data: 0}, {id: 848, data: 0}]);
    Recipes.addShapeless({id: ItemID.corn_bread, count: 1, data: 0}, [{id: 297, data: 0}, {id: ItemID.corn, data: 0}]);
    Recipes.addShapeless({id: ItemID.corn_seeds, count: 1, data: 0}, [{id: ItemID.raw_corn, data: 0}]);
    Recipes.addShapeless({id: ItemID.crouton, count: 4, data: 0}, [{id: 297, data: 0}, {id: ItemID.butter, data: 0}]);
    Recipes.addShapeless({id: ItemID.cucumber_seeds, count: 1, data: 0}, [{id: ItemID.cucumber, data: 0}]);
    Recipes.addShapeless({id: ItemID.fish_pie, count: 1, data: 0}, [{id: ItemID.pie_shell, data: 0}, {id: 877, data: 0}]);
    Recipes.addShapeless({id: ItemID.golden_apple_pie, count: 1, data: 0}, [{id: ItemID.pie_shell, data: 0}, {id: 322, data: 0}]);
    Recipes.addShapeless({id: ItemID.ground_beef, count: 2, data: 0}, [{id: 364, data: 0}]);
    Recipes.addShapeless({id: ItemID.ham, count: 1, data: 0}, [{id: 320, data: 0}, {id: ItemID.salt, data: 0}, {id: ItemID.salt, data: 0}]);
    Recipes.addShapeless({id: ItemID.lemon_juice, count: 1, data: 0}, [{id: ItemID.lemon, data: 0}, {id: 374, data: 0}]);
    Recipes.addShapeless({id: ItemID.lemon_seeds, count: 1, data: 0}, [{id: ItemID.lemon, data: 0}]);
    Recipes.addShapeless({id: ItemID.lemon_slushie, count: 1, data: 0}, [{id: ItemID.lemon_syrup, data: 0}, {id: 374, data: 0}, {id: 332, data: 0}]);
    Recipes.addShapeless({id: ItemID.lettuce_seeds, count: 1, data: 0}, [{id: ItemID.lettuce, data: 0}]);
    Recipes.addShapeless({id: ItemID.pepper_seeds, count: 1, data: 0}, [{id: ItemID.pepper, data: 0}]);
    Recipes.addShapeless({id: ItemID.pineapple_juice, count: 1, data: 0}, [{id: ItemID.pineapple, data: 0}, {id: 374, data: 0}]);
    Recipes.addShapeless({id: ItemID.pineapple_seeds, count: 1, data: 0}, [{id: ItemID.pineapple, data: 0}]);
    Recipes.addShapeless({id: ItemID.pineapple_slushie, count: 1, data: 0}, [{id: ItemID.pineapple_syrup, data: 0}, {id: 374, data: 0}, {id: 332, data: 0}]);
    Recipes.addShapeless({id: ItemID.raw_chicken_wing, count: 2, data: 0}, [{id: 365, data: 0}]);
    Recipes.addShapeless({id: ItemID.salty_chips, count: 1, data: 0}, [{id: ItemID.chips, data: 0}, {id: ItemID.salt, data: 0}]);
    Recipes.addShapeless({id: ItemID.slice_of_pizza, count: 2, data: 0}, [{id: ItemID.pizza, data: 0}]);
    Recipes.addShapeless({id: ItemID.spicy_chicken_wing, count: 1, data: 0}, [{id: ItemID.cooked_chicken_wing, data: 0}, {id: ItemID.hot_sauce, data: 0}]);
    Recipes.addShapeless({id: ItemID.spicy_chips, count: 1, data: 0}, [{id: ItemID.chips, data: 0}, {id: ItemID.hot_sauce, data: 0}]);
    Recipes.addShapeless({id: ItemID.strawberry_ice_cream_ball, count: 1, data: 0}, [{id: ItemID.strawberry, data: 0}, {id: 332, data: 0}, {id: 876, data: 0}], function(api, field, result){
        for(var i in field){
            api.decreaseFieldSlot(i);
        }
    Player.addItemToInventory(325, 1, 0)});
    Recipes.addShapeless({id: ItemID.strawberry_ice_cream, count: 1, data: 0}, [{id: ItemID.strawberry_ice_cream_ball, data: 0}, {id: ItemID.ice_cream_cone, data: 0}]);
    Recipes.addShapeless({id: ItemID.strawberry_juice, count: 1, data: 0}, [{id: ItemID.strawberry, data: 0}, {id: 374, data: 0}]);
    Recipes.addShapeless({id: ItemID.strawberry_pie, count: 1, data: 0}, [{id: ItemID.pie_shell, data: 0}, {id: ItemID.strawberry, data: 0}]);
    Recipes.addShapeless({id: ItemID.strawberry_seeds, count: 1, data: 0}, [{id: ItemID.strawberry, data: 0}]);
    Recipes.addShapeless({id: ItemID.strawberry_slushie, count: 1, data: 0}, [{id: ItemID.strawberry_syrup, data: 0}, {id: 374, data: 0}, {id: 332, data: 0}]);
    Recipes.addShapeless({id: ItemID.sugar_donut, count: 1, data: 0}, [{id: 353, data: 0}, {id: ItemID.donut, data: 0}]);
    Recipes.addShapeless({id: ItemID.tomato_seeds, count: 1, data: 0}, [{id: ItemID.tomato, data: 0}]);
    Recipes.addShapeless({id: ItemID.vanilla_cream, count: 1, data: 0}, [{id: ItemID.vanilla_extract, data: 0}, {id: 353, data: 0}, {id: 353, data: 0}]);
    Recipes.addShapeless({id: ItemID.vanilla_donut, count: 1, data: 0}, [{id: ItemID.vanilla_cream, data: 0}, {id: ItemID.donut, data: 0}]);
    Recipes.addShapeless({id: ItemID.vanilla_extract, count: 1, data: 0}, [{id: ItemID.vanilla_flower, data: 0}, {id: 374, data: 0}]);
    Recipes.addShapeless({id: ItemID.vanilla_ice_cream_ball, count: 1, data: 0}, [{id: ItemID.vanilla_cream, data: 0}, {id: 332, data: 0}, {id: 876, data: 0}], function(api, field, result){
        for(var i in field){
            api.decreaseFieldSlot(i);
        }
    Player.addItemToInventory(325, 1, 0)});
    Recipes.addShapeless({id: ItemID.vanilla_ice_cream, count: 1, data: 0}, [{id: ItemID.vanilla_ice_cream_ball, data: 0}, {id: ItemID.ice_cream_cone, data: 0}]);
    Recipes.addShapeless({id: ItemID.waffle, count: 1, data: 0}, [{id: 876, data: 0}, {id: ItemID.cooked_dough, data: 0}], function(api, field, result){
        for(var i in field){
            api.decreaseFieldSlot(i);
        }
    Player.addItemToInventory(325, 1, 0)});
});