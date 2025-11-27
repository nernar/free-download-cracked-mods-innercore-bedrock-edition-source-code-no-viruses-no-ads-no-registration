




IDRegistry.genBlockID("g1")
Block.createBlock("g1", [
    {name: " Sunset tiles", texture: [["g", 0], ["g", 0], ["g", 0], ["g", 0], ["g", 0], ["g", 0]], inCreative: false}
]);




IDRegistry.genBlockID("k1")
Block.createBlock("k1", [
    {name: " Sunset tiles1", texture: [["k", 0], ["k", 0], ["k", 0], ["k", 0], ["k", 0], ["k", 0]], inCreative: false}
]);

IDRegistry.genBlockID("may2")
Block.createBlock("may2", [
    {name: "maz stone", texture: [["may", 0], ["may", 0], ["may", 0], ["may", 0], ["may", 0], ["may", 0]], inCreative: false}
]);

IDRegistry.genBlockID("may1"); 
Block.createBlock("may1", [
    {name: "may stone", texture: 
[["may3", 0], ["may3",0], 
["may3", 0], ["may3", 0], 
["may3", 0], ["may3", 0]], inCreative: false}
]) ;












IDRegistry.genBlockID("lo")
Block.createBlock("lo", [
    {name: "maze", texture: [["may5", 1], ["may5", 1], ["may4", 1], ["may4", 1], ["may4", 1], ["may4", 1]], inCreative: false}
]);

IDRegistry.genBlockID("lo1")
Block.createBlock("lo1", [
    {name: "maze forever", texture: [["may5", 1], ["may5", 1], ["may6", 1], ["may6", 1], ["may6", 1], ["may6", 1]], inCreative: false}
]);

IDRegistry.genBlockID("toto1")
Block.createBlock("toto1", [
    {name: "stone TW", texture: [["toto1", 0], ["toto1", 0], ["toto1", 0], ["toto1", 0], ["toto1", 0], ["toto1", 0]], inCreative: false}
]);






IDRegistry.genBlockID("goden")
Block.createBlock("goden", [
    {name: " towerwood alt", texture: [["go", 0], ["go", 0], ["go", 0], ["go", 0], ["go", 0], ["go", 0]], inCreative: false}
]);

IDRegistry.genBlockID("oh")
Block.createBlock("oh", [
    {name: " towerwood encased", texture: [["go1", 0], ["go1", 0], ["go1", 0], ["go1", 0], ["go1", 0], ["go1", 0]], inCreative: false}
]);

IDRegistry.genBlockID("uk1")
Block.createBlock("uk1", [
    {name: " towerwood mossy", texture: [["go2", 0], ["go2", 0], ["go2", 0], ["go2", 0], ["go2", 0], ["go2", 0]], inCreative: false}
]);

IDRegistry.genBlockID("uk2")
Block.createBlock("uk2", [
    {name: " towerwood infested", texture: [["go3", 0], ["go3", 0], ["go3", 0], ["go3", 0], ["go3", 0], ["go3", 0]], inCreative: false}
]);

IDRegistry.genBlockID("uk3")
Block.createBlock("uk3", [
    {name: " towerdev reappearing off", texture: [["go4", 0], ["go4", 0], ["go4", 0], ["go4", 0], ["go4", 0], ["go4", 0]], inCreative: false}
]);

IDRegistry.genBlockID("uk4")
Block.createBlock("uk4", [
    {name: " towerdev reappearing on", texture: [["go5", 0], ["go5", 0], ["go5", 0], ["go5", 0], ["go5", 0], ["go5", 0]], inCreative: false}
]);








IDRegistry.genBlockID("twBlockPortal")
Block.createBlock("twBlockPortal", [
    {name: "twilight forest block portal", texture: [["dirt_day", 1], ["tw_top", 1], ["tw", 0], ["tw", 0], ["tw", 0], ["tw", 0]], inCreative: true}
]);
Recipes.addShaped({id: BlockID.twBlockPortal, count: 1, data: 0}, [
		"ooo",
		"oxo",
		"ooo"
	], ['o', 3, 0, 'h', 326, 0]);