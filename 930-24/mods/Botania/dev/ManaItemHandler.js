let ManaItemHandler = (function (ManaItemHandler) {
    function getManaItems(player) {
        if (!player) {
            return [];
        }
        let toReturn = [];
        let inventory = player.inventory;
        inventory = inventory.mainInventory.concat(inventory.offhandInventory).concat(inventory.armorInventory);
        for (let i = 0; i < inventory.length; i++) {
            if (!stackInSlot.isEmpty() && stackInSlot.getItem() instanceof IManaItem) {
                toReturn.add(stackInSlot);
            }
        }
        Callback.invokeCallback("ManaItemEvent", player, toReturn);
        return toReturn;
    }
    ManaItemHandler.getManaItems = getManaItems;
    function getManaAccesories(player) {
        if (!player) {
            return [];
        }
        let acc = BotaniaAPI.getAccessoriesInventory(player);
        let toReturn = [];
        for (let slot = 0; slot < acc.getSizeInventory(); slot++) {
            let stackInSlot = acc.getStackInSlot(slot);
            if (!stackInSlot.isEmpty() && __instanceOf(stackInSlot.getItem(), IManaItem)) {
                toReturn.push(stackInSlot);
            }
        }
        return toReturn;
    }
    ManaItemHandler.getManaAccesories = getManaAccesories;
    function requestMana(stack, player, manaToGet, remove) {
        if (stack.isEmpty()) {
            return 0;
        }
        let items = getManaItems(player);
        let acc = [];
        let allItems = items.concat(acc);
        for (let i = 0; i < allItems.length; i++) {
            let stackInSlot = allItems[i];
            if (stackInSlot == stack) {
                continue;
            }
            let manaItem = stackInSlot.getItem();
            if (manaItem.canExportManaToItem(stackInSlot, stack) && manaItem.getMana(stackInSlot) > 0) {
                if (__instanceOf(stack.getItem(), IManaItem) && !stack.getItem().canReceiveManaFromItem(stack, stackInSlot)) {
                    continue;
                }
                let mana = Math.min(manaToGet, manaItem.getMana(stackInSlot));
                if (remove) {
                    manaItem.addMana(stackInSlot, -mana);
                }
                return mana;
            }
        }
        return 0;
    }
    ManaItemHandler.requestMana = requestMana;
    function requestManaExact(stack, player, manaToGet, remove) {
        if (stack.isEmpty()) {
            return false;
        }
        let items = getManaItems(player);
        let acc = [];
        let allItems = items.concat(acc);
        for (let i = 0; i < allItems.length; i++) {
            let stackInSlot = allItems[i];
            if (stackInSlot == stack) {
                continue;
            }
            let manaItemSlot = stackInSlot.getItem();
            if (manaItemSlot.canExportManaToItem(stackInSlot, stack) && manaItemSlot.getMana(stackInSlot) > manaToGet) {
                if (__instanceOf(stack.getItem(), IManaItem) && !stack.getItem().canReceiveManaFromItem(stack, stackInSlot)) {
                    continue;
                }
                if (remove) {
                    manaItemSlot.addMana(stackInSlot, -manaToGet);
                }
                return true;
            }
        }
        return false;
    }
    ManaItemHandler.requestManaExact = requestManaExact;
    function dispatchMana(stack, player, manaToSend, add) {
        if (stack.isEmpty()) {
            return 0;
        }
        let items = getManaItems(player);
        let acc = [];
        let allItems = items.concat(acc);
        for (let i = 0; i < allItems.length; i++) {
            let stackInSlot = allItems[i];
            if (stackInSlot == stack) {
                continue;
            }
            let manaItemSlot = stackInSlot.getItem();
            if (manaItemSlot.canReceiveManaFromItem(stackInSlot, stack)) {
                if (__instanceOf(stack.getItem(), IManaItem) && !stack.getItem().canExportManaToItem(stack, stackInSlot)) {
                    continue;
                }
                let received;
                if (manaItemSlot.getMana(stackInSlot) + manaToSend <= manaItemSlot.getMaxMana(stackInSlot)) {
                    received = manaToSend;
                } else {
                    received = manaToSend - (manaItemSlot.getMana(stackInSlot) + manaToSend - manaItemSlot.getMaxMana(stackInSlot));
                }
                if (add) {
                    manaItemSlot.addMana(stackInSlot, manaToSend);
                }
                return received;
            }
        }
        return 0;
    }
    ManaItemHandler.dispatchMana = dispatchMana;
    function dispatchManaExact(stack, player, manaToSend, add) {
        if (stack.isEmpty()) {
            return false;
        }
        let items = getManaItems(player);
        let acc = [];
        for (let i = 0; i < allItems.length; i++) {
            let stackInSlot = allItems[i];
            if (stackInSlot == stack) {
                continue;
            }
            let manaItemSlot = stackInSlot.getItem();
            if (manaItemSlot.getMana(stackInSlot) + manaToSend <= manaItemSlot.getMaxMana(stackInSlot) && manaItemSlot.canReceiveManaFromItem(stackInSlot, stack)) {
                if (__instanceOf(stack.getItem(), IManaItem) && !stack.getItem().canExportManaToItem(stack, stackInSlot)) {
                    continue;
                }
                if (add) {
                    manaItemSlot.addMana(stackInSlot, manaToSend);
                }
                return true;
            }
        }
        return false;
    }
    ManaItemHandler.dispatchManaExact = dispatchManaExact;
    function discountManaForTool(stack, player, inCost) {
        let multiplier = Math.max(0, 1 - getFullDiscountForTools(player, stack));
        return inCost * multiplier;
    }
    ManaItemHandler.discountManaForTool = discountManaForTool;
    function requestManaForTool(stack, player, manaToGet, remove) {
        let cost = discountManaForTool(stack, player, manaToGet);
        return requestMana(stack, player, cost, remove);
    }
    ManaItemHandler.requestManaForTool = requestManaForTool;
    function requestManaExactForTool(stack, player, manaToGet, remove) {
        let cost = discountManaForTool(stack, player, manaToGet);
        return requestManaExact(stack, player, cost, remove);
    }
    ManaItemHandler.requestManaExactForTool = requestManaExactForTool;
    function getInvocationCountForTool(stack, player, manaToGet) {
        if (stack.isEmpty()) {
            return 0;
        }
        let cost = discountManaForTool(stack, player, manaToGet);
        let invocations = 0;
        let items = getManaItems(player);
        let acc = [];
        for (let i = 0; i < allItems.length; i++) {
            let stackInSlot = allItems[i];
            if (stackInSlot == stack) {
                continue;
            }
            let manaItemSlot = stackInSlot.getItem();
            let availableMana = manaItemSlot.getMana(stackInSlot);
            if (manaItemSlot.canExportManaToItem(stackInSlot, stack) && availableMana > cost) {
                if (__instanceOf(stack.getItem(), IManaItem) && !stack.getItem().canReceiveManaFromItem(stack, stackInSlot)) {
                    continue;
                }
                invocations += availableMana / cost;
            }
        }
        return invocations;
    }
    ManaItemHandler.getInvocationCountForTool = getInvocationCountForTool;
    function getFullDiscountForTools(player, tool) {
        let discount = 0;
        let inventory = player.inventory;
        for (let i = 0; i < inventory.armorInventory.length; i++) {
            let armor = inventory.armorInventory[i];
            if (!armor.isEmpty() && __instanceOf(armor.getItem(), IManaDiscountArmor)) {
                discount += armor.getItem().getDiscount(armor, i, player, tool);
            }
        }
        let unbreaking = tool.getEnchantLevel(EEnchantment.UNBREAKING);
        discount += unbreaking * 0.05;
        Callback.invokeCallback("ManaDiscountEvent", player, discount, tool);
        return discount;
    }
    ManaItemHandler.getFullDiscountForTools = getFullDiscountForTools;
    return ManaItemHandler;
}(ManaItemHandler || (ManaItemHandler = {})));

