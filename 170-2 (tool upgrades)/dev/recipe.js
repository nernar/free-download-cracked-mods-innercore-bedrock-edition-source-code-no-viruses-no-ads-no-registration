Callback.addCallback("PostLoaded", function(){
  Recipes.addShaped({id: ItemID.tu_circuit}, ["aba", "bcb", "aba"], ["a", 265, 0, "b", 331, 0, "c", 76, 0]);
  Recipes.addShapeless({id: ItemID.tu_circuitEnc}, [{id: ItemID.tu_circuit}, {id: 403}]);
  Recipes.addShaped({id: ItemID.tu_blank}, ["oao", "aba", "oao"], ["a", 264, 0, "b", ItemID.tu_circuitEnc, 0]);
  Recipes.addShaped({id: ItemID.tu_advCircuit}, ["aba", "bcb", "aba"], ["a", 266, 0, "b", 331, 0, "c", 76, 0]);
  Recipes.addShapeless({id: ItemID.tu_advCircuit}, [{id: ItemID.tu_circuit}, {id: 266}]);
  Recipes.addShapeless({id: ItemID.tu_advCircuitEnc}, [{id: ItemID.tu_advCircuit}, {id: 403}]);
  Recipes.addShaped({id: ItemID.tu_advBlank}, ["oao", "aba", "oao"], ["a", 264, 0, "b", ItemID.tu_advCircuitEnc, 0]);
  Recipes.addShaped({id: ItemID.tu_pasteBlaze}, ["aba", "bcb", "aba"], ["a", 372, 0, "b", 377, 0, "c", 325, 8], bucketFunc);
  Recipes.addShaped({id: ItemID.tu_pasteGrowstone}, ["aba", "bcb", "aba"], ["a", 372, 0, "b", 348, 0, "c", 325, 8], bucketFunc);
  Recipes.addShaped({id: ItemID.tu_pasteGunpowder}, ["aba", "bcb", "aba"], ["a", 372, 0, "b", 289, 0, "c", 325, 8], bucketFunc);
  Recipes.addShaped({id: ItemID.tu_pasteSugar}, ["aba", "bcb", "aba"], ["a", 372, 0, "b", 353, 0, "c", 325, 8], bucketFunc);
  Recipes.addShaped({id: ItemID.tu_pasteInc}, ["aba", "bcb", "aba"], ["a", 372, 0, "b", 351, 0, "c", 325, 8], bucketFunc);
  Recipes.addShaped({id: ItemID.tu_pasteLapis}, ["aba", "bcb", "aba"], ["a", 372, 0, "b", 351, 4, "c", 325, 8], bucketFunc);
  Recipes.addShaped({id: ItemID.tu_pasteClay}, ["aba", "bcb", "aba"], ["a", 372, 0, "b", 337, 0, "c", 325, 8], bucketFunc);
  Recipes.addShaped({id: ItemID.tu_pasteSlime}, ["aba", "bcb", "aba"], ["a", 372, 0, "b", 341, 0, "c", 325, 8], bucketFunc);
});