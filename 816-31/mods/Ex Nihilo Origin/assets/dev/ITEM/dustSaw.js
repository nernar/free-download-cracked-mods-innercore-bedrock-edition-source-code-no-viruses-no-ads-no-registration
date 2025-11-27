IDRegistry.genItemID("ex_dustSaw");
Item.createItem("ex_dustSaw", "Saw Dust", {
	name: "enr_dustSaw",
	meta: 0
});
Barrel.dataAdd("null", ItemID.ex_dustSaw, 0, {
	addworktime: 125,
volume: 100,
	texture: [["ex_13", 0]]
});
