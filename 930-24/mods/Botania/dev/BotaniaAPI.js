let BotaniaAPI = (function () {
    function BotaniaAPI() {
        return this;
    }
    let ArmorMaterial = BotaniaAPI.ArmorMaterial = (function () {
        __extends(ArmorMaterial, IArmorMaterial);
        __implements(ArmorMaterial, IArmorMaterial);
        __enum(ArmorMaterial, "manasteel", 16, [2, 5, 6, 2], 18, function () {
            return ModItems.manasteel;
        }, 0), __enum(ArmorMaterial, "manaweave", 5, [1, 2, 2, 1], 18, function () {
            return ModItems.manaweaveCloth;
        }, 0), __enum(ArmorMaterial, "elementium", 18, [2, 5, 6, 2], 18, function () {
            return ModItems.elementium;
        }, 0), __enum(ArmorMaterial, "terrasteel", 34, [3, 6, 8, 3], 26, function () {
            return ModItems.terrasteel;
        }, 3);
        const MAX_DAMAGE_ARRAY = [13, 15, 16, 11];
        function ArmorMaterial(durabilityMultiplier, damageReduction, enchantability, repairItemGetter) {
            this.durabilityMultiplier = durabilityMultiplier;
            this.damageReduction = damageReduction;
            this.enchantability = enchantability;
            this.repairItemGetter = repairItemGetter;
        }
        ArmorMaterial.prototype.getDurability = function (slot) {
            return this.durabilityMultiplier * MAX_DAMAGE_ARRAY[slot];
        };
        ArmorMaterial.prototype.getDamageReductionAmount = function (slot) {
            return this.damageReduction[slot];
        };
        ArmorMaterial.prototype.getEnchantability = function () {
            return this.enchantability;
        };
        ArmorMaterial.prototype.getRepairMaterial = function () {
            return this.repairItemGetter();
        };
        ArmorMaterial.prototype.getKnockbackResistance = function () {
            return 0;
        };
        return ArmorMaterial;
    }());
    BotaniaAPI.prototype.getManaNetworkInstance = function () {
        return ManaNetworkHandler.instance;
    };
    BotaniaAPI.prototype.shouldForceCheck = function () {
        return ConfigHandler.COMMON.flowerForceCheck.get();
    };
    BotaniaAPI.instance = new BotaniaAPI();
    return BotaniaAPI;
}());

