let RecipeElvenTrade = (function () {
    function RecipeElvenTrade(outputs) {
        this.outputs = Array.isArray(outputs) ? outputs : [new ItemStack(outputs)];
        this.inputs = [];
        for (let i = 1; i < 17; i++) {
            if (arguments[i]) {
                this.inputs.push(new ItemStack(arguments[i]));
            }
        }
        return this;
    }
    RecipeElvenTrade.prototype.match = function (stacks) {
        let inputsMissing = [];
        let stacksToRemove = [];
        for (let i in this.inputs) {
            inputsMissing.push(this.inputs[i]);
        }
        for (let j in stacks) {
            let stack = stacks[j];
            if (stack.isEmpty()) {
                continue;
            }
            if (inputsMissing.length == 0) {
                break;
            }
            let stackIndex = -1;
            for (let i = 0; i < inputsMissing.length; i++) {
                let ingr = inputsMissing[i];
                if (ingr.equals(stack)) {
                    if (!stacksToRemove[stack]) {
                        stacksToRemove.push(stack);
                    }
                    stackIndex = i;
                    break;
                }
            }
            if (stackIndex != -1) {
                inputsMissing.splice(stackIndex, 1);
            }
        }
        return inputsMissing.length == 0 ? stacksToRemove : [];
    };
    RecipeElvenTrade.prototype.containsItem = function (stack) {
        for (let i in this.inputs) {
            let input = this.inputs[i];
            if (input.equals(stack)) {
                return true;
            }
        }
        return false;
    };
    RecipeElvenTrade.prototype.getIngredients = function () {
        return this.inputs;
    };
    RecipeElvenTrade.prototype.getOutputs = function () {
        return this.outputs;
    };
    return RecipeElvenTrade;
}());

