var flowerAPI = {};
flowerAPI.setPlaceFunc = setItemPlace;
flowerAPI.createFlower = createFlower;
var apothecaryAPI = {};
apothecaryAPI.addRecipe = addApothecaryRecipe;
apothecaryAPI.addIngredient = addIngredient;
var manaAPI = {};
manaAPI.addGenerator = addGenerator;
manaAPI.isGenerator = isGenerator;
manaAPI.addStorage = addStorage;
manaAPI.isStorage = isStorage;
ModAPI.registerAPI("BotaniaAPI", {addManapoolRecipe: addManapoolRecipe, apothecary: apothecaryAPI, flower: flowerAPI, mana: manaAPI});
Logger.Log("Botania API shared with name BotaniaAPI.", "API");

