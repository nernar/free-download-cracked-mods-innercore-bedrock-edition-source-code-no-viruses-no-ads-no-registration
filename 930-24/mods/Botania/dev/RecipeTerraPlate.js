let RecipeTerraPlate = (function () {
    function RecipeTerraPlate(mana, output) {
        this.mana = mana;
        this.output = new ItemStack(output);
        this.inputs = [];
        for (let i = 2; i < arguments.length; i++) {
            this.inputs.push(new ItemStack(arguments[i]));
        }
        return this;
    }
    RecipeTerraPlate.prototype.getMana = function () {
        return this.mana;
    };
    RecipeTerraPlate.prototype.matches = function (inv) {
        return RecipeUtils.matches(this.inputs, inv);
    };
    RecipeTerraPlate.prototype.getCraftingResult = function () {
        return this.output.copy();
    };
    RecipeTerraPlate.prototype.getRecipeOutput = function () {
        return this.output;
    };
    RecipeTerraPlate.prototype.getInputs = function () {
        return this.inputs;
    };
    RecipeTerraPlate.prototype.getIngredients = function () {
        let ingredients = [];
        for (let i in this.inputs) {
            ingredients.push(this.inputs[i].copy());
        }
        return ingredients;
    };
    return RecipeTerraPlate;
}());

