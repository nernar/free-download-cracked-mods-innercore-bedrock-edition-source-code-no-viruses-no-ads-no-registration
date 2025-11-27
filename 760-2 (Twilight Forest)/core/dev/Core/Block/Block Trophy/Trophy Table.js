//naga

IDRegistry.genBlockID("na1")
Block.createBlock("na1", [{name: "§a  NAGA ON", texture: [["p1", 1], ["p1", 1], ["na1", 0], ["na1", 0], ["na1", 0], ["na1", 0]], inCreative: true}]);


//lich

IDRegistry.genBlockID("o")
Block.createBlock("o", [{name: "§a LICH ON", texture: [["p1", 1], ["p1", 1], ["o1", 0], ["o1", 0], ["o1", 0], ["o1", 0]], inCreative: true}]);

//hydra 



IDRegistry.genBlockID("hydraOn")
Block.createBlock("hydraOn", [{name: "§a HYDRA ON", texture: [["p1", 1], ["p1", 1], ["hydra", 1], ["hydra", 1], ["hydra", 1], ["hydra", 1]], inCreative: true}]);

//snow queen



IDRegistry.genBlockID("snowQueenOn")
Block.createBlock("snowQueenOn", [{name: "§a SNOW QUEEN ON", texture: [["p1", 1], ["p1", 1], ["snowqueen", 1], ["snowqueen", 1], ["snowqueen", 1], ["snowqueen", 1]], inCreative: true}]);

//ughast
IDRegistry.genBlockID("ughastOn")
Block.createBlock("ughastOn", [
    {name: "§a UGHAST ON", texture: [["p1", 1], ["p1", 1], ["ugh", 2], ["ugh", 2], ["ugh", 2], ["ugh", 2]], inCreative: true}]);





//group 
Item.addCreativeGroup("temple summoning", Translation.translate("temple summoning"), [
	 BlockID.na1,
	 BlockID.o,
	 BlockID.ughastOn,
	 
	 BlockID.snowQueenOn,
	 
	 BlockID.hydraOn,
	 
]);

