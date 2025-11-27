let ArtemOnComputerItems = ["coppercoil","diamandteile","drone_engine","eisenteile","fibers","filter","gold_coil","goldteile","iron_coil","iron_stick","kupferteile","lasercutter","laserdiode","neon_coil","neonteile","polymer","prismid","quantanium_coil","quarzteile","verbuntmetall","silizium"];
let tranlateComputerItems = ["Copper coil","Diamondtaile","Drone engine","Eisenteile","Fibers","Filter","Gold coil","Goldteile","Iron coil","Iron stick","Kupferteile","Lasercutter","Laserdiode","Neon coil","Neonteile","Polymer","Prismid","Quantanium coil","Quarz teile","Verbunt metall","Silicon plate"];
for(let i in ArtemOnComputerItems){let AOCI = ArtemOnComputerItems[i];
let TCI = tranlateComputerItems[i];
IDRegistry.genItemID(AOCI); 
Item.createItem(AOCI, TCI, {name: AOCI, meta: 0}, {stack: 64});
};
IDRegistry.genItemID("tank_lack0"); 
Item.createItem("tank_lack0", "Empty tank", {name: "tank_lack0", meta: 0}, {stack: 64});
for(var i = 1; i < 16; i++) {
 IDRegistry.genItemID("tank_lack"+i); 
 Item.createItem("tank_lack"+i, "tank with "+bcolors[i-1]+" lack", {name: "tank_lack"+i, meta: 0}, {stack: 64});
}

Recipes.addShaped({id: ItemID.coppercoil, count: 2, data: 0},
	["i*i", "cpc", "i*i"],
	['i', 265, 0, 'p', ItemID.eisenteile, 0, 'c', ItemID.kupferbarren, 0]
);
Recipes.addShaped({id: ItemID.iron_coil, count: 2, data: 0},
	["i*i", "ipi", "i*i"],
	['i', 265, 0, 'p', ItemID.eisenteile, 0, 'c', ItemID.kupferbarren, 0]
);
Recipes.addShaped({id: ItemID.gold_coil, count: 2, data: 0},
	["i*i", "gpg", "i*i"],
	['i', 265, 0, 'p', ItemID.eisenteile, 0, 'g', 266, 0]
);
Recipes.addShaped({id: ItemID.neon_coil, count: 2, data: 0},
	["i*i", "cpc", "i*i"],
	['i', 265, 0, 'p', ItemID.eisenteile, 0, 'c', ItemID.neon_ingot, 0]
);
Recipes.addShaped({id: ItemID.iron_stick, count: 8, data: 0},
	["i", "i"],
	['i', 265, 0]
);
Recipes.addShaped({id: BlockID.glowtite_brick, count: 1, data: 0},
	["gg", "gg"],
	['g', ItemID.glowtit_ingot, 0]
);
Recipes.addShaped({id: BlockID.neon_brick, count: 1, data: 0},
	["gg", "gg"],
	['g', ItemID.neon_ingot, 0]
);
Recipes.addShaped({id: BlockID.bioterium_brick, count: 1, data: 0},
	["gg", "gg"],
	['g', ItemID.bioterium_ingot, 0]
);
Recipes.addShaped({id: BlockID.retium_brick, count: 1, data: 0},
	["gg", "gg"],
	['g', ItemID.retium_ingot, 0]
);
Recipes.addShaped({id: ItemID.tank_lack0, count: 2, data: 0},
	["*k*", "g*g","ggg"],
	['g', VanillaBlockID.glass_pane, 0, 'k', ItemID.kupferbarren, 0]
);
