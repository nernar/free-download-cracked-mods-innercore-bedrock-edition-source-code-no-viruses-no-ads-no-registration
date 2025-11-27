let RecipePureDaisy = (function () {
    const DEFAULT_TIME = 150;
    function RecipePureDaisy(input, output, time) {
        this.input = new ItemStack(input);
        this.output = new ItemStack(output);
        this.time = time || DEFAULT_TIME;
        return this;
    }
    RecipePureDaisy.prototype.matches = function (stack) {
        let input = this.input.copy();
        if (input.data == -1) {
            input.data = stack.data;
        }
        return input.equals(stack);
    };
    RecipePureDaisy.prototype.set = function (region, pos, tile) {
        region.setBlock(pos, this.output.id, this.output.data);
        return true;
    };
    RecipePureDaisy.prototype.getInput = function () {
        return this.input;
    };
    RecipePureDaisy.prototype.getOutput = function () {
        return this.output;
    };
    RecipePureDaisy.prototype.getTime = function () {
        return this.time;
    };
    return RecipePureDaisy;
}());

