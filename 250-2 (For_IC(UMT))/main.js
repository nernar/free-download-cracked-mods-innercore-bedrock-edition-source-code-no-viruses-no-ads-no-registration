importLib("UMTCore", "*");

IDRegistry.genItemID("dustCopper")
IDRegistry.genItemID("dustTin")
IDRegistry.genItemID("dustLead")
	
IDRegistry.genItemID("ingotCopper")
IDRegistry.genItemID("ingotTin")
IDRegistry.genItemID("ingotLead")
	
IDRegistry.genItemID("rubberSapling")
IDRegistry.genItemID("uraniumChunk")
	
IDRegistry.genItemID("um_铜碎矿");
Item.createItem("um_铜碎矿","Copper Debris",
{name:"um_铜矿碎片", meta:   0  });

IDRegistry.genItemID("um_锡碎矿");
Item.createItem("um_锡碎矿","Tin Debris",
{name:"um_锡矿碎片", meta:   0  });

IDRegistry.genItemID("um_铅碎矿");
Item.createItem("um_铅碎矿","Lead Debris",
{name:"um_铅矿碎片", meta:   0  });

IDRegistry.genItemID("um_铜矿渣");
Item.createItem("um_铜矿渣","Copper Slag",
{name:"um_铜矿渣", meta:   0  });

IDRegistry.genItemID("um_锡矿渣");
Item.createItem("um_锡矿渣","Tin Slag",
{name:"um_锡矿渣", meta:   0  });

IDRegistry.genItemID("um_铅矿渣");
Item.createItem("um_铅矿渣","Lead Slag",
{name:"um_铅矿渣", meta:   0  });

Sieve.gravel(ItemID.um_铜碎矿,2.5,40);
Sieve.gravel(ItemID.um_锡碎矿,3.3,30);
Sieve.gravel(ItemID.um_铅碎矿,5,35);

Sieve.sand(ItemID.rubberSapling,10,20);

Sieve.dust(ItemID.uraniumChunk,10,3);


Hammer.setBlock("um_铜矿砂","Copper Gravel","um_铜矿砂");
Hammer.setBlock("um_锡矿砂","Tin Gravel","um_锡矿砂");
Hammer.setBlock("um_铅矿砂","Lead Gravel","um_铅矿砂");

Hammer.destroy(BlockID.um_铜矿砂,ItemID.um_铜矿渣,40,30,BlockID.um_铜矿砂);
Hammer.destroy(BlockID.um_锡矿砂,ItemID.um_锡矿渣,30,30,BlockID.um_锡矿砂);
Hammer.destroy(BlockID.um_铅矿砂,ItemID.um_铅矿渣,30,25,BlockID.um_铅矿砂);

Debris.workbench(ItemID.um_铜碎矿,BlockID.um_铜矿砂);
Debris.workbench(ItemID.um_锡碎矿,BlockID.um_锡矿砂);
Debris.workbench(ItemID.um_铅碎矿,BlockID.um_铅矿砂);

Debris.workbench(ItemID.um_铜矿渣,ItemID.dustCopper);
Debris.workbench(ItemID.um_锡矿渣,ItemID.dustTin);
Debris.workbench(ItemID.um_铅矿渣,ItemID.dustLead);

Recipes.addFurnace(BlockID.um_铜矿砂,ItemID.ingotCopper, 0);
Recipes.addFurnace(BlockID.um_锡矿砂,ItemID.ingotTin, 0);
Recipes.addFurnace(BlockID.um_铅矿砂,ItemID.ingotLead, 0);
