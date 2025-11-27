let RecipePetals = (function () {
    function RecipePetals(output) {
        this.output = new ItemStack(output);
        this.inputs = [];
        for (let i = 1; i < 17; i++) {
            if (arguments[i]) {
                this.inputs.push(new ItemStack(arguments[i]));
            }
        }
        return this;
    }
    RecipePetals.prototype.matches = function (inv) {
        return RecipeUtils.matches(this.inputs, inv);
    };
    RecipePetals.prototype.getRecipeOutput = function () {
        return this.output;
    };
    RecipePetals.prototype.getCraftingResult = function () {
        return this.output.copy();
    };
    RecipePetals.prototype.getInputs = function () {
        return this.inputs;
    };
    RecipePetals.prototype.getIngredients = function () {
        let ingredients = [];
        for (let i in this.inputs) {
            ingredients.push(this.inputs[i].copy());
        }
        return ingredients;
    };
    return RecipePetals;
}());

