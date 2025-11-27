IDRegistry.genBlockID("cookie_rye");
Block.createBlock("cookie_rye", [
	{name: "RYE",texture: [["rye_wheat_stage",0]],inCreative: false},
	{name: "RYE",texture: [["rye_wheat_stage",1]],inCreative: false},
	{name: "RYE",texture: [["rye_wheat_stage",2]],inCreative: false},
	{name: "RYE",texture: [["rye_wheat_stage",3]],inCreative: false},
	{name: "RYE",texture: [["rye_wheat_stage",4]],inCreative: false},
	{name: "RYE",texture: [["rye_wheat_stage",5]],inCreative: false},
	{name: "RYE",texture: [["rye_wheat_stage",6]],inCreative: false},
	{name: "RYE",texture: [["rye_wheat_stage",7]],inCreative: false}
	]);
	Renderer.setCropRender(BlockID.cookie_rye);
Translation.addTranslation("Cookie Seeds", {ru: "Печенюшные семена"});
	IDRegistry.genItemID("cookie_rye_seeds");
	Item.createItem("cookie_rye_seeds", "Cookie Seeds", {
			name: "cookie_rye_seeds",
			meta: 0
		}, {stack:64});
	Translation.addTranslation("Cookie Rye", {ru: "Печенюшная пшеница"});
	IDRegistry.genItemID("cookie_rye");
	Item.createItem("cookie_rye", "Cookie Rye", {
			name: "cookie_rye",
			meta: 0
		}, {stack:64});
var cookie_rye_proto={
	id:BlockID["cookie_rye"],
	endData:7,
	seed:ItemID["cookie_rye_seeds"],
	drop:ItemID["cookie_rye"],
	farms:[BlockID.cookie_farmland]
};
PlantRegistry.defineCrop(cookie_rye_proto);