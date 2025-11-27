ModAPI.registerAPI("ATCore", {
	MAPI:MAPI,
    ATMech:ATMech,
    ATGen:ATGen,
    ATMat:ATMat,
    
    CTR:CTR,
    CreateRecipeWithTool: CreateRecipeWithTool,
    ReplaceRecipeWithTool: ReplaceRecipeWithTool,
    CreateShapelessRecipeWithTool: CreateShapelessRecipeWithTool,
    ReplaceShapelessRecipeWithTool: ReplaceShapelessRecipeWithTool,
    
    DeleteOre:DeleteOre,
    
    CreateHelmetRecipe:CreateHelmetRecipe,
    CreateChestplateRecipe:CreateChestplateRecipe,
    CreateLeggingsRecipe:CreateLeggingsRecipe,
    CreateBootsRecipe:CreateBootsRecipe,

    CreatePickaxeRecipe:CreatePickaxeRecipe,
    CreateAxeRecipe:CreateAxeRecipe,
    CreateHoeRecipe:CreateHoeRecipe,
    CreateSwordRecipe:CreateSwordRecipe,
    CreateHelmetRecipe:CreateHelmetRecipe,
    
    Config: Config,
    
    GetNaturalMetallsParams: GetNaturalMetallsParams,
    GetRadMetallsParams: GetRadMetallsParams,
    GetNoMetallsParams: GetNoMetallsParams,    
    GetAlloyParams: GetAlloyParams,
    GetGemsParams: GetGemsParams,
    GetCompoundParams: GetCompoundParams,
    
    requireGlobal: function (command) {
        return eval(command);
    }
});
Logger.Log("GregTechAPI shared", "API");