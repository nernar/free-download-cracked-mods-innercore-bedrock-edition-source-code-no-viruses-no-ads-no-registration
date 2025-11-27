ModAPI.registerAPI("CivCore", {Tool: ToolBuilder, Recipe: RecipeSystem, FuelRegistry: Fuel, requireGlobal: function (command) {
    return eval(command);
}});

