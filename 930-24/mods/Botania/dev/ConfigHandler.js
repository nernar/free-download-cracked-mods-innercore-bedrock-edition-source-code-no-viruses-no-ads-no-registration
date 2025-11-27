let ConfigHandler = (function (ConfigHandler) {
    let Client = (function () {
        function Client(builder) {
            builder.push("rendering");
            this.useShaders = builder.comment("Set this to false to disable the use of shaders for some of the mod's renders. (Requires game restart)").define("shaders", true);
            this.boundBlockWireframe = builder.comment("Set this to false to disable the wireframe when looking a block bound to something (spreaders, flowers, etc).").define("boundBlockWireframe", true);
            this.renderAccessories = builder.comment("Set this to false to disable rendering of accessories in the player.").define("accessories", true);
            this.manaBarHeight = builder.comment("The height of the mana display bar in above the XP bar. You can change this if you have a mod that changes where the XP bar is.").defineInRange("manaBarHeight", 29, 0, Number.MAX_VALUE);
            this.staticFloaters = builder.comment("Set this to true if you use lots of floating flowers and are experiencing rendering lag. Will disable the floating flowers' animations and render them statically for a major performance boost. Hit F3+A in-world after toggling this.").define("staticFloaters", false);
            builder.push("fancySkybox");
            this.enableFancySkybox = builder.comment("Set this to false to disable the fancy skybox in Garden of Glass").define("enabled", true);
            this.enableFancySkyboxInNormalWorlds = builder.comment("Set this to true to enable the fancy skybox in non Garden of Glass worlds. (Does not require Garden of Glass loaded to use, needs 'fancySkybox.enabled' to be true as well)").define("normalWorlds", false);
            builder.pop();
            builder.push("lexicon");
            this.lexiconRotatingItems = builder.comment("Set this to false to disable the rotating items in the petal and rune entries in the Lexica Botania.").define("rotatingItems", true);
            this.lexicon3dModel = builder.comment("Set this to false to disable the animated 3D render for the Lexica Botania.").define("render_3d", true);
            builder.pop(2);
            builder.push("particles");
            this.subtlePowerSystem = builder.comment("Set this to true to set the power system's particles to be a lot more subtle. Good for low-end systems, if the particles are causing lag.").define("powerSystem", false);
            this.staticWandBeam = builder.comment("Set this to true to use a static wand beam that shows every single position of the burst, similar to the way it used to work on old Botania versions. Warning: Disabled by default because it may be laggy.").define("staticWandBeam", false);
            this.flowerParticleFrequency = builder.comment("The frequency in which particles spawn from normal (worldgen) mystical flowers").defineInRange("flowerFrequency", 0.75, Number.MIN_VALUE, Number.MAX_VALUE);
            this.elfPortalParticlesEnabled = builder.comment("Set this to false to disable the particles in the elven portal.").define("elvenPortal", true);
            builder.pop();
            this.enableSeasonalFeatures = builder.comment("Set this to false to disable seasonal features, such as halloween and christmas.").define("seasonalFeatures", true);
            this.debugInfo = builder.comment("Set to false to disable Botania's messages in the F3 debug screen").define("debugInfo", true);
            this.referencesEnabled = builder.comment("Set this to false to disable the references in the flower tooltips. (You monster D:)").define("references", true);
            this.splashesEnabled = builder.comment("Set this to false to disable Botania's splashes in the main menu.").define("splashes", true);
            builder.writeConfig(__dir__);
            return this;
        }
        return Client;
    }());
    ConfigHandler.Client = Client;
    const CLIENT = new ConfigSpec.Builder().configure(Client);
    ConfigHandler.CLIENT = CLIENT;
    let Common = (function () {
        function Common(builder) {
            builder.push("blockBreakingParticles");
            this.blockBreakParticles = builder.comment("Set this to false to remove the block breaking particles from the flowers and other items in the mod.").define("enabled", true);
            this.blockBreakParticlesTool = builder.comment("Set this to false to remove the block breaking particles from the Terra Shatterer, as there can be a good amount in higher levels.").define("toolEnabled", true);
            builder.pop();
            builder.push("manaSpreaders");
            this.silentSpreaders = builder.comment("Set this to true to disable the mana spreader shooting sound").define("silent", false);
            this.spreaderTraceTime = builder.comment("How many ticks into the future will mana spreaders attempt to predict where mana bursts go? Setting this lower will improve spreader performance, but will cause them to not fire at targets that are too far away.").defineInRange("traceTime", 400, 1, Number.MAX_VALUE);
            builder.pop();
            builder.push("harvestLevels");
            this.harvestLevelWeight = builder.comment("The harvest level of the Mana Lens: Weight. 3 is diamond level. Defaults to 2 (iron level)").defineInRange("weightLens", 2, 0, Number.MAX_VALUE);
            this.harvestLevelBore = builder.comment("The harvest level of the Mana Lens: Bore. 3 is diamond level. Defaults to 3").defineInRange("boreLens", 3, 0, Number.MAX_VALUE);
            builder.pop();
            this.chargingAnimationEnabled = builder.comment("Set this to false to disable the animation when an item is charging on top of a mana pool").define("chargeAnimation", true);
            this.flowerForceCheck = builder.comment("Turn this off ONLY IF you're on an extremely large world with an exaggerated count of Mana Spreaders/Mana Pools and are experiencing TPS lag. This toggles whether flowers are strict with their checking for connecting to pools/spreaders or just check whenever possible.").define("flowerBindingForceCheck", true);
            this.enderPickpocketEnabled = builder.comment("Set to false to disable the ability for the Hand of Ender to pickpocket other players' ender chests").define("enderPickpocket", true);
            this.enchanterEnabled = builder.comment("Set this to false to disable the Mana Enchanter. Since some people find it OP or something. This only disables the entry and creation. Old ones that are already in the world will stay.").define("manaEnchanter", true);
            this.fluxfieldEnabled = builder.comment("Set this to false to disable the Mana Fluxfield (generates FE from mana). This only disables the entry and creation. Old ones that are already in the world will stay.").define("manaFluxfield", true);
            this.relicsEnabled = builder.comment("Set this to false to disable the Relic System. This only disables the entries, drops and achievements. Old ones that are already in the world will stay.").define("relics", true);
            this.invertMagnetRing = builder.comment("Set this to true to invert the Ring of Magnetization's controls (from shift to stop to shift to work)").define("invertMagnetRing", false);
            this.gogSpawnWithLexicon = builder.comment("Set this to false to disable spawning with a Lexica Botania in Garden of Glass worlds, if you are modifying the modpack's progression to not start with Botania.").define("gardenOfGlass.spawnWithLexicon", true);
            this.gogIslandScaleMultiplier = builder.comment("The multiplier for island distances for multiplayer Garden of Glass worlds.\n" + "Islands are placed on a grid with 256 blocks between points, with the spawn island always being placed on 256, 256.\n" + "By default, the scale is 8, putting each island on points separated by 2048 blocks.\n" + "Values below 4 (1024 block spacing) are not recommended due to Nether portal collisions.").defineInRange("gardenOfGlass.islandScaleMultiplier", 8, 1, 512);
            this.worldgenEnabled = builder.comment("Set this to false to disable mystical flower and mushroom worldgen. More fine-tuned customization should be done with datapacks.").define("worldgen", true);
            builder.writeConfig(__dir__);
        }
        return Common;
    }());
    ConfigHandler.Common = Common;
    const COMMON = new ConfigSpec.Builder().configure(Common);
    ConfigHandler.COMMON = COMMON;
    return ConfigHandler;
}({}));

