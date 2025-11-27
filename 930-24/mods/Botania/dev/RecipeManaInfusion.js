let RecipeManaInfusion = (function () {
    function RecipeManaInfusion(output, input, mana, catalyst) {
        this.output = new ItemStack(output);
        this.input = new ItemStack(input);
        this.mana = MathHelper.clamp(mana, 0, 1000000);
        this.catalyst = catalyst ? new ItemStack(catalyst) : null;
        return this;
    }
    RecipeManaInfusion.prototype.matches = function (stack) {
        return this.input.equals(stack);
    };
    RecipeManaInfusion.prototype.getCatalyst = function () {
        return this.catalyst;
    };
    RecipeManaInfusion.prototype.getManaToConsume = function () {
        return this.mana;
    };
    RecipeManaInfusion.prototype.getRecipeOutput = function () {
        return this.output;
    };
    return RecipeManaInfusion;
}());

