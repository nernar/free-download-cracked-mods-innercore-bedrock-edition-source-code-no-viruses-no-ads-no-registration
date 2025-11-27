let ModItems = (function (ModItems) {
    let twigWand = ModItems.twigWand = new ItemTwigWand("twigWand", unstackable().setRarity(Rarity.UNCOMMON));
    let petal = ModItems.petal = new ItemPetal("petal", ModBlocks.buriedPetals, defaultBuilder());
    let blackLotus = ModItems.blackLotus = new ItemBlackLotus("blackLotus", defaultBuilder().setRarity(Rarity.RARE));
    let blackerLotus = ModItems.blackerLotus = new ItemBlackLotus("blackerLotus", defaultBuilder().setRarity(Rarity.EPIC));
    let fertilizer = ModItems.fertilizer = new ItemFertilizer("fertilizer", defaultBuilder());
    let debug = ModItems.debug = new ItemDebug("debug", defaultBuilder());
    let overgrowthSeed = ModItems.overgrowthSeed = new ItemOvergrowthSeed("overgrowthSeed", defaultBuilder().setRarity(Rarity.RARE));
    let flowerBag = ModItems.flowerBag = new ItemFlowerBag("flowerBag", unstackable());
    let flowerPollen = ModItems.flowerPollen = new ItemFlowerPollen("flowerPollen", defaultBuilder());
    let pestleAndMortar = ModItems.pestleAndMortar = new ItemSelfReturning("pestleAndMortar", unstackable());
    let lexicon = ModItems.lexicon = new ItemLexicon("lexicon", unstackable().setRarity(Rarity.UNCOMMON));
    let manaTablet = ModItems.manaTablet = new ItemManaTablet("manaTablet", unstackable());
    let spark = ModItems.spark = new ItemSpark("spark", defaultBuilder());
    let rune = ModItems.rune = new ItemRune("rune", defaultBuilder());
    let livingwoodTwig = ModItems.livingwoodTwig = new ItemMod("livingwoodTwig", defaultBuilder());
    let manasteel = ModItems.manasteel = new ItemMod("manasteel", defaultBuilder());
    let manaPearl = ModItems.manaPearl = new ItemMod("manaPearl", defaultBuilder());
    let manaDiamond = ModItems.manaDiamond = new ItemMod("manaDiamond", defaultBuilder());
    let lifeEssence = ModItems.lifeEssence = new ItemMod("lifeEssence", defaultBuilder().setRarity(Rarity.UNCOMMON));
    let redstoneRoot = ModItems.redstoneRoot = new ItemMod("redstoneRoot", defaultBuilder());
    let redString = ModItems.redString = new ItemMod("redString", defaultBuilder());
    let dreamwoodTwig = ModItems.dreamwoodTwig = new ItemMod("dreamwoodTwig", defaultBuilder());
    let manaString = ModItems.manaString = new ItemMod("manaString", defaultBuilder());
    let manasteelNugget = ModItems.manasteelNugget = new ItemMod("manasteelNugget", defaultBuilder());
    let terrasteelNugget = ModItems.terrasteelNugget = new ItemMod("terrasteelNugget", defaultBuilder().setRarity(Rarity.UNCOMMON));
    let elementiumNugget = ModItems.elementiumNugget = new ItemMod("elementiumNugget", defaultBuilder());
    let pebble = ModItems.pebble = new ItemMod("pebble", defaultBuilder());
    let manaweaveCloth = ModItems.manaweaveCloth = new ItemMod("manaweaveCloth", defaultBuilder());
    let manaPowder = ModItems.manaPowder = new ItemMod("manaPowder", defaultBuilder());
    let terrasteel = ModItems.terrasteel = new ItemManaResource("terrasteel", defaultBuilder().setRarity(Rarity.UNCOMMON));
    let gaiaIngot = ModItems.gaiaIngot = new ItemManaResource("gaiaIngot", defaultBuilder().setRarity(Rarity.RARE));
    let livingroot = ModItems.livingroot = new ItemManaResource("livingroot", defaultBuilder());
    let elementium = ModItems.elementium = new ItemElven("elementium", defaultBuilder());
    let pixieDust = ModItems.pixieDust = new ItemElven("pixieDust", defaultBuilder());
    let dragonstone = ModItems.dragonstone = new ItemElven("dragonstone", defaultBuilder());
    let sparkUpgradeDispersive = ModItems.sparkUpgradeDispersive = new ItemSparkUpgrade("sparkUpgradeDispersive", defaultBuilder(), SparkUpgradeType.DISPERSIVE);
    let sparkUpgradeDominant = ModItems.sparkUpgradeDominant = new ItemSparkUpgrade("sparkUpgradeDominant", defaultBuilder(), SparkUpgradeType.DOMINANT);
    let sparkUpgradeRecessive = ModItems.sparkUpgradeRecessive = new ItemSparkUpgrade("sparkUpgradeRecessive", defaultBuilder(), SparkUpgradeType.RECESSIVE);
    let sparkUpgradeIsolated = ModItems.sparkUpgradeIsolated = new ItemSparkUpgrade("sparkUpgradeIsolated", defaultBuilder(), SparkUpgradeType.ISOLATED);
    let manasteelHelm = new ItemManasteelHelm("manasteelHelm", unstackable());
    let manasteelChest = new ItemManasteelArmor("manasteelChest", EArmorType.CHESTPLATE, unstackable());
    let manasteelLegs = new ItemManasteelArmor("manasteelLegs", EArmorType.LEGGINGS, unstackable());
    let manasteelBoots = new ItemManasteelArmor("manasteelBoots", EArmorType.BOOTS, unstackable());
    function registerItems() {
        register(twigWand);
        register(petal);
        register(blackLotus);
        register(blackerLotus);
        register(fertilizer);
        register(debug);
        register(overgrowthSeed);
        register(flowerBag);
        register(flowerPollen);
        register(pestleAndMortar);
        register(lexicon);
        register(manaTablet);
        register(spark);
        register(rune);
        register(livingwoodTwig);
        register(manasteel);
        register(manaPearl);
        register(manaDiamond);
        register(lifeEssence);
        register(redstoneRoot);
        register(redString);
        register(dreamwoodTwig);
        register(manaString);
        register(manasteelNugget);
        register(terrasteelNugget);
        register(elementiumNugget);
        register(pebble);
        register(manaweaveCloth);
        register(manaPowder);
        register(terrasteel);
        register(gaiaIngot);
        register(livingroot);
        register(elementium);
        register(pixieDust);
        register(dragonstone);
        register(sparkUpgradeDispersive);
        register(sparkUpgradeDominant);
        register(sparkUpgradeRecessive);
        register(sparkUpgradeIsolated);
        register(manasteelHelm);
        register(manasteelChest);
        register(manasteelLegs);
        register(manasteelBoots);
    }
    ModItems.registerItems = registerItems;
    function register(item) {
        if (item.register) {
            item.register();
        } else {
            ItemRegistry.registerItem(item);
        }
    }
    ModItems.register = register;
    function defaultBuilder() {
        return new ItemParams();
    }
    function unstackable() {
        return defaultBuilder().setMaxStack(1);
    }
    return ModItems;
}(ModItems || (ModItems = {})));

