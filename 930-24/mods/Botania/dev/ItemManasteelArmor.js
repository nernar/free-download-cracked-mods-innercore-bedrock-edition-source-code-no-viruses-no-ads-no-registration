let ItemManasteelArmor = (function (_super) {
    __extends(ItemManasteelArmor, ItemArmor);
    __implements(ItemManasteelArmor, IManaUsingItem, IPhantomInkable);
    const MANA_PER_DAMAGE = 70;
    const TAG_PHANTOM_INK = "phantomInk";
    Object.defineProperty(ItemManasteelArmor, "armorSet", {get() {
        return [new ItemStack(ModItems.manasteelHelm), new ItemStack(ModItems.manasteelChest), new ItemStack(ModItems.manasteelLegs), new ItemStack(ModItems.manasteelBoots)];
    }});
    const model;
    function ItemManasteelArmor(nameID, type, props) {
        _super.call(this, nameID, type, new ItemArmorParams(props).setMaterial(BotaniaAPI.ArmorMaterial.MANASTEEL));
        return this;
    }
    ItemManasteelArmor.prototype.onTick = function (player, slot, stack) {
        if (stack.getDamage() > 0 && ManaItemHandler.requestManaExact(stack, player, MANA_PER_DAMAGE * 2, true)) {
            stack.setDamage(stack.getDamage() - 1);
        }
    };
    ItemManasteelArmor.prototype.usesMana = function (stack) {
        return true;
    };
    ItemManasteelArmor.prototype.addInformation = function (stack, world, list, flags) {
    };
    ItemManasteelArmor.prototype.addInformationAfterShift = function (stack, world, list, flags) {
    };
    ItemManasteelArmor.prototype.getArmorSetStacks = function () {
        return armorSet;
    };
    ItemManasteelArmor.prototype.hasArmorSet = function (player) {
        return this.hasArmorSetItem(player, EArmorType.HELMET) && this.hasArmorSetItem(player, EArmorType.CHESTPLATE) && this.hasArmorSetItem(player, EArmorType.LEGGINGS) && this.hasArmorSetItem(player, EArmorType.BOOTS);
    };
    ItemManasteelArmor.prototype.hasArmorSetItem = function (player, slot) {
        if (!player) {
            return false;
        }
        let stack = player.getArmorSlot(slot);
        if (stack.isEmpty()) {
            return false;
        }
        switch (slot) {
          case EArmorType.HELMET:
            return stack.getItem() == ModItems.manasteelHelm;
          case EArmorType.CHESTPLATE:
            return stack.getItem() == ModItems.manasteelChest;
          case EArmorType.LEGGINGS:
            return stack.getItem() == ModItems.manasteelLegs;
          case EArmorType.BOOTS:
            return stack.getItem() == ModItems.manasteelBoots;
        }
        return false;
    };
    ItemManasteelArmor.prototype.getSetPiecesEquipped = function (player) {
        let pieces = 0;
        for (let i = 0; i < 4; i++) {
            if (this.hasArmorSetItem(player, i)) {
                pieces++;
            }
        }
        return pieces;
    };
    ItemManasteelArmor.prototype.getArmorSetName = function () {
        return "botania.armorset.manasteel.name";
    };
    ItemManasteelArmor.prototype.getArmorSetTitle = function (player) {
    };
    ItemManasteelArmor.prototype.addArmorSetDescription = function (stack, list) {
    };
    ItemManasteelArmor.prototype.hasPhantomInk = function (stack) {
        return ItemNBTHelper.getBoolean(stack, TAG_PHANTOM_INK, false);
    };
    ItemManasteelArmor.prototype.setPhantomInk = function (stack, ink) {
        ItemNBTHelper.setBoolean(stack, TAG_PHANTOM_INK, ink);
    };
    return ItemManasteelArmor;
}(ArmorMod));

