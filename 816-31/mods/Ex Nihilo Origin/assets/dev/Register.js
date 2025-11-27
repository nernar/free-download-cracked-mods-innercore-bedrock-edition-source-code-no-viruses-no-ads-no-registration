var mesh = [["Wood", 1, 64], ["Silk", 2, 248], ["Flint", 3, 128], ["Iron", 5, 512], ["Diamond", 9, 2048]];
for (var i = 0; i < mesh.length; i++) {
	if (i < mesh.length) {
		EXCore.registerMesh(mesh[i][0], mesh[i][1], mesh[i][2], mesh[i][3])
	}
}

EXCore.register("Iron", 265, 0, 4);
EXCore.register("Gold", 266, 0, 4);
EXCore.register_1("Nickel");
EXCore.register_1("Platinum");
EXCore.register_1("Aluminum");
EXCore.registerIngot("ingotPlatinum", "Platinum Ingot");
EXCore.registerIngot("ingotAluminum", "Aluminum Ingot");
EXCore.registerIngot("ingotNickel", "Nickel Ingot");
EXCore.registerIngot("ingotCopper", "Copper Ingot");
EXCore.registerIngot("ingotLead", "Lead Ingot");
EXCore.registerIngot("ingotOsmium", "Osmium Ingot");
EXCore.registerIngot("ingotSilver", "Silver Ingot");
EXCore.registerIngot("ingotTin", "Tin Ingot");
EXCore.register("Copper", ItemID.ingotCopper, 0, 4);
EXCore.register("Tin", ItemID.ingotTin, 0, 4);
EXCore.register("Lead", ItemID.ingotLead, 0, 4);
EXCore.register("Silver", ItemID.ingotSilver, 0, 4);

LiquidRegistry.registerLiquid("waterwitch", "Witch Water", ["ex_waterwitch_0"]);
LiquidRegistry.registerLiquid("waterslime", "Slime Water", ["ex_waterslime_0"]);
