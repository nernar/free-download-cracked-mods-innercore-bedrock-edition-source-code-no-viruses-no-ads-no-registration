let RecipeRuneAltar = (function () {
    function RecipeRuneAltar(output, mana) {
        this.output = new ItemStack(output);
        this.mana = mana;
        this.inputs = [];
        for (let i = 2; i < arguments.length; i++) {
            if (arguments[i]) {
                this.inputs.push(new ItemStack(arguments[i]));
            }
        }
        return this;
    }
    RecipeRuneAltar.prototype.matches = function (inv) {
        return RecipeUtils.matches(this.inputs, inv);
    };
    RecipeRuneAltar.prototype.getRecipeOutput = function () {
        return this.output;
    };
    RecipeRuneAltar.prototype.getCraftingResult = function () {
        return this.output.copy();
    };
    RecipeRuneAltar.prototype.getInputs = function () {
        return this.inputs;
    };
    RecipeRuneAltar.prototype.getIngredients = function () {
        let ingredients = [];
        for (let i in this.inputs) {
            ingredients.push(this.inputs[i].copy());
        }
        return ingredients;
    };
    RecipeRuneAltar.prototype.getManaUsage = function () {
        return this.mana;
    };
    return RecipeRuneAltar;
}());

