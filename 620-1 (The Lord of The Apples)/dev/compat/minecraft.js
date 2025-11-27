// [石砖]Bricks
Apple.registerStoneBricks(98,2,0);
Apple.registerStoneBricks(98,2,1);
Apple.registerStoneBricks(98,2,2);
Apple.registerStoneBricks(98,2,3);

// [苹果]Apple
Apple.registerApple(260,20);

// [金苹果]Golden Apple
Apple.registerApple(322,40);
Apple.registerApple(466,360);
Recipes.deleteRecipe({id:322,count:1,data:0});
Recipes.deleteRecipe({id:466,count:1,data:0});

Recipe.addRecipe("ApgemAltar",[{id:266,count:1,data:0}],[{id:322,count:1,data:0}],{energy:400 });
Recipe.addRecipe("ApgemAltar",[{id:41 ,count:1,data:0}],[{id:466,count:1,data:0}],{energy:3600});

// [紫颂果]Chorus Fruit
Recipe.addRecipe("ApgemAltar",[{id:432,count:1,data:0}],[{id:260,count:1,data:0}],{energy:100});