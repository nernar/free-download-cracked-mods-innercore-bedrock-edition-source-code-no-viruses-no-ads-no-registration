let ModRecipes;
(function (ModRecipes) {
    const MANA_INFUSION = [];
    const ELVEN_TRADE = [];
    const PURE_DAISY = [];
    const BREW = [];
    const PETAL = [];
    const RUNE = [];
    const TERRA_PLATE = [];
    const MANA_INFUSION_TYPE = "mana_infusion";
    const ELVEN_TRADE_TYPE = "elven_trade";
    const PURE_DAISY_TYPE = "pure_daisy";
    const BREW_TYPE = "brew";
    const PETAL_TYPE = "petal_apothecary";
    const RUNE_TYPE = "runic_altar";
    const TERRA_PLATE_TYPE = "terra_plate";
    ModRecipes.MANA_INFUSION = MANA_INFUSION;
    ModRecipes.ELVEN_TRADE = ELVEN_TRADE;
    ModRecipes.PURE_DAISY = PURE_DAISY;
    ModRecipes.BREW = BREW;
    ModRecipes.PETAL = PETAL;
    ModRecipes.RUNE = RUNE;
    ModRecipes.TERRA_PLATE = TERRA_PLATE;
    ModRecipes.MANA_INFUSION_TYPE = MANA_INFUSION_TYPE;
    ModRecipes.ELVEN_TRADE_TYPE = ELVEN_TRADE_TYPE;
    ModRecipes.PURE_DAISY_TYPE = PURE_DAISY_TYPE;
    ModRecipes.BREW_TYPE = BREW_TYPE;
    ModRecipes.PETAL_TYPE = PETAL_TYPE;
    ModRecipes.RUNE_TYPE = RUNE_TYPE;
    ModRecipes.TERRA_PLATE_TYPE = TERRA_PLATE_TYPE;
    function getRecipes(type) {
        switch (type) {
          case MANA_INFUSION_TYPE:
            return MANA_INFUSION;
          case ELVEN_TRADE_TYPE:
            return ELVEN_TRADE;
          case PURE_DAISY_TYPE:
            return PURE_DAISY;
          case BREW_TYPE:
            return BREW;
          case PETAL_TYPE:
            return PETAL;
          case RUNE_TYPE:
            return RUNE;
          case TERRA_PLATE_TYPE:
            return TERRA_PLATE;
        }
    }
    ModRecipes.getRecipes = getRecipes;
    function getRecipe(type, input) {
        let recipes = getRecipes(type);
        for (let i in recipes) {
            let recipe = recipes[i];
            if (recipe.matches(input)) {
                return recipe;
            }
        }
        return null;
    }
    ModRecipes.getRecipe = getRecipe;
    function register(type, recipe) {
        getRecipes(type).push(recipe);
    }
    ModRecipes.register = register;
    function registerRecipes() {
        const costTier1 = 5200;
        const costTier2 = 8000;
        const costTier3 = 12000;
        const livingwood = ModBlocks.livingwood;
        const manasteel = new ItemStack(ItemID.manasteel);
        const manaDiamond = new ItemStack(ItemID.manaDiamond);
        const manaString = new ItemStack(ItemID.manaString);
        const manaPowder = new ItemStack(ItemID.manaPowder);
        const manaPearl = new ItemStack(ItemID.manaPearl);
        const pixieDust = new ItemStack(ItemID.pixieDust);
        const redstoneRoot = new ItemStack(ItemID.redstoneRoot);
        const gaiaSpirit = new ItemStack(ItemID.gaiaSpirit);
        const water = new ItemStack(ItemID.rune, 1, 0);
        const earth = new ItemStack(ItemID.rune, 1, 1);
        const air = new ItemStack(ItemID.rune, 1, 2);
        const fire = new ItemStack(ItemID.rune, 1, 3);
        const spring = new ItemStack(ItemID.rune, 1, 4);
        const summer = new ItemStack(ItemID.rune, 1, 5);
        const autumn = new ItemStack(ItemID.rune, 1, 6);
        const winter = new ItemStack(ItemID.rune, 1, 7);
        const mana = new ItemStack(ItemID.rune, 1, 8);
        const envy = new ItemStack(ItemID.rune, 1, 9);
        const gluttony = new ItemStack(ItemID.rune, 1, 10);
        const greed = new ItemStack(ItemID.rune, 1, 11);
        const lust = new ItemStack(ItemID.rune, 1, 12);
        const pride = new ItemStack(ItemID.rune, 1, 13);
        const sloth = new ItemStack(ItemID.rune, 1, 14);
        const wrath = new ItemStack(ItemID.rune, 1, 15);
        const white = new ItemStack(ItemID.petal, 1, 0);
        const orange = new ItemStack(ItemID.petal, 1, 1);
        const magenta = new ItemStack(ItemID.petal, 1, 2);
        const lightBlue = new ItemStack(ItemID.petal, 1, 3);
        const yellow = new ItemStack(ItemID.petal, 1, 4);
        const lime = new ItemStack(ItemID.petal, 1, 5);
        const pink = new ItemStack(ItemID.petal, 1, 6);
        const gray = new ItemStack(ItemID.petal, 1, 7);
        const lightGray = new ItemStack(ItemID.petal, 1, 8);
        const cyan = new ItemStack(ItemID.petal, 1, 9);
        const purple = new ItemStack(ItemID.petal, 1, 10);
        const blue = new ItemStack(ItemID.petal, 1, 11);
        const brown = new ItemStack(ItemID.petal, 1, 12);
        const green = new ItemStack(ItemID.petal, 1, 13);
        const red = new ItemStack(ItemID.petal, 1, 14);
        const black = new ItemStack(ItemID.petal, 1, 15);
        register(MANA_INFUSION_TYPE, new RecipeManaInfusion(manasteel, new ItemStack(VanillaItemID.iron_ingot), 3000));
        register(MANA_INFUSION_TYPE, new RecipeManaInfusion(manaDiamond, new ItemStack(VanillaItemID.diamond), 10000));
        register(MANA_INFUSION_TYPE, new RecipeManaInfusion(manaPearl, new ItemStack(368), 6000));
        register(MANA_INFUSION_TYPE, new RecipeManaInfusion(manaPowder, new ItemStack(289), 500));
        register(MANA_INFUSION_TYPE, new RecipeManaInfusion(manaPowder, new ItemStack(348), 500));
        register(MANA_INFUSION_TYPE, new RecipeManaInfusion(manaPowder, new ItemStack(331), 500));
        register(MANA_INFUSION_TYPE, new RecipeManaInfusion(manaPowder, new ItemStack(353), 500));
        register(MANA_INFUSION_TYPE, new RecipeManaInfusion(manaString, new ItemStack(287), 5000));
        register(PETAL_TYPE, new RecipePetals(new ItemStack(BlockID.pureDaisy), white, white, white, white));
        register(PETAL_TYPE, new RecipePetals(new ItemStack(BlockID.endoflame), red, brown, brown, lightGray));
        register(PETAL_TYPE, new RecipePetals(new ItemStack(BlockID.hydroangeas), blue, blue, cyan, cyan));
        register(PETAL_TYPE, new RecipePetals(new ItemStack(BlockID.fallenKanade), spring, white, white, yellow, yellow, orange));
        register(PETAL_TYPE, new RecipePetals(new ItemStack(BlockID.jiyuulia), water, air, pink, pink, lightGray, purple));
        register(PETAL_TYPE, new RecipePetals(new ItemStack(BlockID.medumone), redstoneRoot, earth, gray, gray, brown, brown));
        register(PETAL_TYPE, new RecipePetals(new ItemStack(BlockID.tangleberrie), earth, air, cyan, cyan, lightGray, gray));
        register(PETAL_TYPE, new RecipePetals(new ItemStack(BlockID.thermalily), red, orange, orange, fire, earth));
        register(PETAL_TYPE, new RecipePetals(new ItemStack(BlockID.arcaneRose), pink, pink, purple, purple, lime, mana));
        register(PETAL_TYPE, new RecipePetals(new ItemStack(BlockID.clayconia), lightGray, lightGray, gray, cyan, earth));
        register(PETAL_TYPE, new RecipePetals(new ItemStack(BlockID.munchdew), lime, lime, red, red, green, gluttony));
        register(PETAL_TYPE, new RecipePetals(new ItemStack(BlockID.entropinnyum), red, red, gray, gray, white, white, wrath, fire));
        register(PETAL_TYPE, new RecipePetals(new ItemStack(BlockID.kekimurus), pixieDust, white, white, orange, orange, brown, brown, gluttony));
        register(PETAL_TYPE, new RecipePetals(new ItemStack(BlockID.gourmaryllis), lightGray, lightGray, yellow, yellow, red, fire, summer));
        register(PETAL_TYPE, new RecipePetals(new ItemStack(BlockID.narslimmus), lime, lime, green, green, black, summer, water));
        register(PETAL_TYPE, new RecipePetals(new ItemStack(BlockID.spectrolus), pixieDust, red, red, green, green, blue, blue, white, white, air, winter));
        register(PETAL_TYPE, new RecipePetals(new ItemStack(BlockID.rafflowsia), purple, purple, green, green, black, earth, pride, pixieDust));
        register(PETAL_TYPE, new RecipePetals(new ItemStack(BlockID.shulkMeNot), purple, purple, magenta, magenta, lightGray, gaiaSpirit, envy, wrath));
        register(PETAL_TYPE, new RecipePetals(new ItemStack(BlockID.orechid), gray, gray, yellow, green, red, pride, greed, redstoneRoot, pixieDust));
        register(PETAL_TYPE, new RecipePetals(new ItemStack(BlockID.orechidIgnem), red, red, white, white, pink, pride, greed, redstoneRoot, pixieDust));
        register(RUNE_TYPE, new RecipeRuneAltar(earth, costTier1, manasteel, manaPowder, new ItemStack(173), new ItemStack(1), new ItemStack(39)));
        register(RUNE_TYPE, new RecipeRuneAltar(earth, costTier1, manasteel, manaPowder, new ItemStack(173), new ItemStack(1), new ItemStack(40)));
        register(RUNE_TYPE, new RecipeRuneAltar(water, costTier1, manasteel, manaPowder, new ItemStack(346), new ItemStack(858), new ItemStack(338)));
        register(RUNE_TYPE, new RecipeRuneAltar(air, costTier1, manasteel, manaPowder, new ItemStack(171), new ItemStack(288), new ItemStack(287)));
        register(RUNE_TYPE, new RecipeRuneAltar(fire, costTier1, manasteel, manaPowder, new ItemStack(405), new ItemStack(372), new ItemStack(289)));
        register(RUNE_TYPE, new RecipeRuneAltar(spring, costTier2, water, fire, new ItemStack(296), new ItemStack(6), new ItemStack(6), new ItemStack(6)));
        register(RUNE_TYPE, new RecipeRuneAltar(summer, costTier2, earth, air, new ItemStack(12), new ItemStack(12), new ItemStack(360), new ItemStack(341)));
        register(RUNE_TYPE, new RecipeRuneAltar(autumn, costTier2, air, fire, new ItemStack(375), new ItemStack(18), new ItemStack(18), new ItemStack(18)));
        register(RUNE_TYPE, new RecipeRuneAltar(winter, costTier2, water, earth, new ItemStack(35), new ItemStack(80), new ItemStack(80), new ItemStack(354)));
        register(RUNE_TYPE, new RecipeRuneAltar(mana, costTier2, manaPearl, manasteel, manasteel, manasteel, manasteel, manasteel));
        register(RUNE_TYPE, new RecipeRuneAltar(envy, costTier3, water, winter, manaDiamond, manaDiamond));
        register(RUNE_TYPE, new RecipeRuneAltar(greed, costTier3, spring, water, manaDiamond, manaDiamond));
        register(RUNE_TYPE, new RecipeRuneAltar(lust, costTier3, air, summer, manaDiamond, manaDiamond));
        register(RUNE_TYPE, new RecipeRuneAltar(pride, costTier3, fire, summer, manaDiamond, manaDiamond));
        register(RUNE_TYPE, new RecipeRuneAltar(sloth, costTier3, air, autumn, manaDiamond, manaDiamond));
        register(RUNE_TYPE, new RecipeRuneAltar(wrath, costTier3, earth, winter, manaDiamond, manaDiamond));
        register(TERRA_PLATE_TYPE, new RecipeTerraPlate(500000, new ItemStack(ItemID.terrasteel), manasteel, manaDiamond, manaPearl));
        register(ELVEN_TRADE_TYPE, new RecipeElvenTrade(new ItemStack(ModItems.elementium), new ItemStack(manasteel.id, 2)));
        register(ELVEN_TRADE_TYPE, new RecipeElvenTrade(pixieDust, manaPearl));
        register(ELVEN_TRADE_TYPE, new RecipeElvenTrade(new ItemStack(ModItems.dragonstone), manaDiamond));
        register(PURE_DAISY_TYPE, new RecipePureDaisy(new ItemStack(VanillaBlockID.stone), new ItemStack(BlockID.livingrock)));
        register(PURE_DAISY_TYPE, new RecipePureDaisy(new ItemStack(VanillaBlockID.log, 1, -1), new ItemStack(BlockID.livingwood)));
        register(PURE_DAISY_TYPE, new RecipePureDaisy(new ItemStack(VanillaBlockID.log2, 1, -1), new ItemStack(BlockID.livingwood)));
        for (let i = 0; i < 16; i++) {
            Recipes.addShaped({id: 241, count: 8, data: i}, ["xxx", "xax", "xxx"], ["x", 20, 0, "a", ItemID.flowerPollen, i]);
            Recipes.addShaped({id: 159, count: 8, data: i}, ["xxx", "xax", "xxx"], ["x", 172, 0, "a", ItemID.flowerPollen, i]);
            Recipes.addShaped({id: 237, count: 8, data: i}, ["xxx", "xab", "bbb"], ["x", 13, 0, "a", ItemID.flowerPollen, i, "b", 12, -1]);
            Recipes.addShapeless({id: ItemID.flowerPollen, count: 1, data: i}, [{id: ItemID.petal, data: i}, {id: ItemID.pestleAndMortar, data: -1}]);
            Recipes.addShapeless({id: 35, count: 1, data: i}, [{id: 35, data: 0}, {id: ItemID.flowerPollen, data: i}]);
            Recipes.addShapeless({id: 355, count: 1, data: i}, [{id: 355, data: 0}, {id: ItemID.flowerPollen, data: i}]);
            Recipes.addShapeless({id: ItemID.petal, count: 2, data: i}, [{id: BlockID.mysticalFlower, data: i}]);
            Recipes.addShapeless({id: ItemID.petal, count: 4, data: i}, [{id: BlockID.doubleFlowerTop, data: i}]);
        }
        Recipes.addShaped({id: ItemID.twigWand0, count: 1, data: 0}, [" ac", " cb", "c  "], ["c", ItemID.livingwoodTwig, 0, "a", ItemID.petal, -1, "b", ItemID.petal, -1], function (api, items, result) {
            result.id = ItemID["twigWand" + items[1].data];
            result.data = items[5].data;
            result.extra = (new ItemExtraData()).putBoolean(ItemTwigWand.TAG_BIND_MODE, false);
            for (let i in items) {
                api.decreaseFieldSlot(i);
            }
        });
        Recipes.addShaped({id: ItemID.pestleAndMortar, count: 1, data: 0}, [" a ", "b  ", "c  "], ["a", 280, 0, "b", 5, -1, "c", 281, 0]);
        Recipes.addShapeless({id: ItemID.lexicon, count: 1, data: 0}, [{id: VanillaBlockID.sapling, data: -1}, {id: VanillaItemID.book, data: 0}]);
        Recipes.addShapeless({id: ItemID.redstoneRoot, count: 1, data: 0}, [{id: VanillaItemID.redstone, data: 0}, {id: VanillaBlockID.tallgrass, data: 0}]);
        Recipes.addShapeless({id: BlockID.livingwoodGlimmering, count: 1, data: 0}, [{id: BlockID.livingwood, data: -1}, {id: VanillaItemID.glowstone_dust, data: 0}]);
        Recipes.addShaped({id: ItemID.livingwoodTwig, count: 1, data: 0}, ["a", "a"], ["a", BlockID.livingwood, 0]);
        Recipes.addShaped({id: ItemID.flowerBag, count: 1, data: 0}, ["aba", "a a", " a "], ["a", VanillaBlockID.wool, -1, "b", ItemID.petal, -1]);
        Recipes.addShaped({id: BlockID.apothecaryDefault, count: 1, data: 0}, ["aca", " b ", "bbb"], ["a", 44, 3, "b", 4, 0, "c", ItemID.petal, -1]);
        Recipes.addShaped({id: BlockID.spreaderMana, count: 1, data: 0}, ["aaa", "bc ", "aaa"], ["a", BlockID.livingwood, 0, "b", VanillaItemID.gold_ingot, 0, "c", ItemID.petal, -1]);
        Recipes.addShaped({id: BlockID.manaPool, count: 1, data: 0}, ["", "b b", "bbb"], ["b", BlockID.livingrock, 0]);
        Recipes.addShaped({id: BlockID.runicAltar, count: 1, data: 0}, ["bbb", "bab"], ["b", BlockID.livingrock, 0, "a", ItemID.manaPearl, 0]);
        Recipes.addShaped({id: BlockID.runicAltar, count: 1, data: 0}, ["bbb", "bab"], ["b", BlockID.livingrock, 0, "a", ItemID.manaDiamond, 0]);
        Recipes.addShaped({id: ItemID.fertilizer, count: 1, data: 0}, ["b b", " a ", "b b"], ["b", ItemID.flowerPollen, -1, "a", 858, 0]);
        recipesRegistered();
    }
    ModRecipes.registerRecipes = registerRecipes;
    function recipesRegistered() {
        loadCraftFunctions();
    }
    function loadCraftFunctions() {
        for (let i in ModItems) {
            let v = ModItems[i];
            if (__instanceOf(v, ItemMod)) {
                if (v.onWorkbenchIngredientCraft) {
                    let recipes = Recipes.getWorkbenchRecipesByIngredient(v.id, -1);
                    for (let i = 0; i < recipes.size(); i++) {
                        let recipe = recipes.get(i);
                        let callback = recipe.getCallback();
                        recipe.setCallback(function (api, slots, result, player) {
                            v.onWorkbenchIngredientCraft(api, slots, result, player);
                            if (callback) {
                                callback(api, slots, result, player);
                            }
                        });
                    }
                }
                if (v.onWorkbenchResultCraft) {
                    let recipes = Recipes.getWorkbenchRecipesByResult(v.id, -1);
                    for (let i = 0; i < recipes.size(); i++) {
                        let recipe = recipes.get(i);
                        let callback = recipe.getCallback();
                        recipe.setCallback(function (api, slots, result, player) {
                            v.onWorkbenchResultCraft(api, slots, result, player);
                            if (callback) {
                                callback(api, slots, result, player);
                            }
                        });
                    }
                }
            }
        }
        for (let i in ModBlocks) {
            let v = ModBlocks[i];
            if (__instanceOf(v, BlockMod)) {
                if (v.onWorkbenchIngredientCraft) {
                    let recipes = Recipes.getWorkbenchRecipesByIngredient(v.id, -1);
                    for (let i = 0; i < recipes.size(); i++) {
                        let recipe = recipes.get(i);
                        let callback = recipe.getCallback();
                        recipe.setCallback(function (api, slots, result, player) {
                            v.onWorkbenchIngredientCraft(api, slots, result, player);
                            if (callback) {
                                callback(api, slots, result, player);
                            }
                        });
                    }
                }
                if (v.onWorkbenchResultCraft) {
                    let recipes = Recipes.getWorkbenchRecipesByResult(v.id, -1);
                    for (let i = 0; i < recipes.size(); i++) {
                        let recipe = recipes.get(i);
                        let callback = recipe.getCallback();
                        recipe.setCallback(function (api, slots, result, player) {
                            v.onWorkbenchResultCraft(api, slots, result, player);
                            if (callback) {
                                callback(api, slots, result, player);
                            }
                        });
                    }
                }
            }
        }
    }
    function giveInputItems(type, player, index) {
        player = player || Player.get();
        let recipes = getRecipes(type);
        index = MathHelper.clamp(0, index, recipes.length - 1) || randomInt(0, recipes.length - 1);
        let recipe = recipes[index];
        let inputs = recipe.input ? [recipe.inputs] : recipe.inputs;
        inputs.forEach(function (input) {
            new PlayerEntity(player).addItemToInventory(input);
        });
    }
    ModRecipes.giveInputItems = giveInputItems;
    return ModRecipes;
}(ModRecipes || (ModRecipes = {})));

