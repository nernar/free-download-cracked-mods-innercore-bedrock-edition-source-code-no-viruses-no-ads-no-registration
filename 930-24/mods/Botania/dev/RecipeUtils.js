let RecipeUtils;
(function (RecipeUtils) {
    function matches(inputs, inv, usedSlots) {
        usedSlots = usedSlots || [];
        let ingredientsMissing = [];
        for (let i in inputs) {
            if (!inputs[i].isEmpty()) {
                ingredientsMissing.push(inputs[i].copy());
            }
        }
        for (let i = 0; i < 32; i++) {
            let input = new ItemStack(inv.getSlot("slot" + i));
            if (input.isEmpty()) {
                break;
            }
            let stackIndex = -1;
            for (let j = 0; j < ingredientsMissing.length; j++) {
                let ingr = ingredientsMissing[j];
                if (ingr.equals(input)) {
                    stackIndex = j;
                    usedSlots.push(i);
                    break;
                }
            }
            if (stackIndex != -1) {
                ingredientsMissing.splice(stackIndex, 1);
            } else {
                return false;
            }
        }
        return ingredientsMissing.length == 0;
    }
    RecipeUtils.matches = matches;
}(RecipeUtils || (RecipeUtils = {})));

