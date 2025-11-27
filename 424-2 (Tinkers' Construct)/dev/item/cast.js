IDRegistry.genItemID("ingot_copper");
Item.createItem("ingot_copper", "Copper Ingot", {name: "ingot_copper"});

IDRegistry.genItemID("ingot_tin");
Item.createItem("ingot_tin", "Tin Ingot", {name: "ingot_tin"});

IDRegistry.genItemID("ingot_aluminum");
Item.createItem("ingot_aluminum", "Aluminum Ingot", {name: "ingot_aluminum"});

IDRegistry.genItemID("ingot_ardite");
Item.createItem("ingot_ardite", "Ardite Ingot", {name: "ingot_ardite"});

IDRegistry.genItemID("ingot_cobalt");
Item.createItem("ingot_cobalt", "Cobalt Ingot", {name: "ingot_cobalt"});

IDRegistry.genItemID("ingot_obsidian");
Item.createItem("ingot_obsidian", "Obsidian Ingot", {name: "ingot_obsidian"});

IDRegistry.genItemID("ingot_bronze");
Item.createItem("ingot_bronze", "Bronze Ingot", {name: "ingot_bronze"});

IDRegistry.genItemID("ingot_alubrass");
Item.createItem("ingot_alubrass", "Aluminum Brass Ingot", {name: "ingot_alubrass"});

IDRegistry.genItemID("ingot_alumite");
Item.createItem("ingot_alumite", "Alumite Ingot", {name: "ingot_alumite"});

IDRegistry.genItemID("seared_brick");
Item.createItem("seared_brick", "Seared Brick", {name: "seared_brick"});

Material.registerShape("ingot", 265, 266, 336, 405, ItemID.ingot_copper, ItemID.ingot_tin, ItemID.ingot_aluminum, ItemID.ingot_ardite, ItemID.ingot_cobalt, ItemID.ingot_obsidian, ItemID.ingot_bronze, ItemID.ingot_alubrass, ItemID.ingot_alumite, ItemID.seared_brick);


IDRegistry.genItemID("nugget_iron");
Item.createItem("nugget_iron", "Iron Nugget", {name: "nugget_iron"});

IDRegistry.genItemID("nugget_copper");
Item.createItem("nugget_copper", "Copper Nugget", {name: "nugget_copper"});

IDRegistry.genItemID("nugget_tin");
Item.createItem("nugget_tin", "Tin Nugget", {name: "nugget_tin"});

IDRegistry.genItemID("nugget_aluminum");
Item.createItem("nugget_aluminum", "Aluminum Nugget", {name: "nugget_aluminum"});

IDRegistry.genItemID("nugget_ardite");
Item.createItem("nugget_ardite", "Ardite Nugget", {name: "nugget_ardite"});

IDRegistry.genItemID("nugget_cobalt");
Item.createItem("nugget_cobalt", "Cobalt Nugget", {name: "nugget_cobalt"});

IDRegistry.genItemID("nugget_obsidian");
Item.createItem("nugget_obsidian", "Obsidian Nugget", {name: "nugget_obsidian"});

IDRegistry.genItemID("nugget_bronze");
Item.createItem("nugget_bronze", "Bronze Nugget", {name: "nugget_bronze"});

IDRegistry.genItemID("nugget_alubrass");
Item.createItem("nugget_alubrass", "Aluminum Brass Nugget", {name: "nugget_alubrass"});

IDRegistry.genItemID("nugget_alumite");
Item.createItem("nugget_alumite", "Alumite Nugget", {name: "nugget_alumite"});

Material.registerShape("nugget", 371, ItemID.nugget_iron, ItemID.nugget_copper, ItemID.nugget_tin, ItemID.nugget_aluminum, ItemID.nugget_ardite, ItemID.nugget_cobalt, ItemID.nugget_obsidian, ItemID.nugget_bronze, ItemID.nugget_alubrass, ItemID.nugget_alumite);


IDRegistry.genItemID("grout");
Item.createItem("grout", "Grout", {name: "grout"});

Recipes.addShapeless({id: ItemID.grout, count: 2}, [{id: 12, data: -1}, {id: 13}, {id: 337}]);
Recipes.addShapeless({id: ItemID.grout, count: 8}, [{id: 12, data: -1}, {id: 13}, {id: 82}]);
Recipes.addFurnace(ItemID.grout, ItemID.seared_brick);

Tinco.addNuggetRecipe(265, ItemID.nugget_iron);
Tinco.addNuggetRecipe(ItemID.ingot_copper, ItemID.nugget_copper);
Tinco.addNuggetRecipe(ItemID.ingot_tin, ItemID.nugget_tin);
Tinco.addNuggetRecipe(ItemID.ingot_aluminum, ItemID.nugget_aluminum);
Tinco.addNuggetRecipe(ItemID.ingot_ardite, ItemID.nugget_ardite);
Tinco.addNuggetRecipe(ItemID.ingot_cobalt, ItemID.nugget_cobalt);
Tinco.addNuggetRecipe(ItemID.ingot_obsidian, ItemID.nugget_obsidian);
Tinco.addNuggetRecipe(ItemID.ingot_bronze, ItemID.nugget_bronze);
Tinco.addNuggetRecipe(ItemID.ingot_alubrass, ItemID.nugget_alubrass);
Tinco.addNuggetRecipe(ItemID.ingot_alumite, ItemID.nugget_alumite);


Material.createCast("ingot", 1, "Ingot", true);
Material.createCast("rod", 0.5, "Tool Rod", true);
Material.createCast("pickaxe", 1, "Pickaxe Head", true);
Material.createCast("shovel", 1, "Shovel Head", true);
Material.createCast("hatchet", 1, "Axe Head", true);
Material.createCast("sword", 1, "Sword Blade", true);
Material.createCast("guard", 0.5, "Wide Guard", true);
Material.createCast("binding", 0.5, "Tool Binding", true);
Material.createCast("rod2", 3, "Tough Rod", true);
Material.createCast("binding2", 3, "Tough Binding", true);
Material.createCast("plate", 8, "Large Plate", true);
Material.createCast("lumberaxe", 8, "Broad Axe Head", true);
Material.createCast("scythe", 8, "Scythe Head", true);
Material.createCast("excavator", 8, "Excavator Head", true);
Material.createCast("hammer", 8, "Hammer Head", true);
Material.createCast("nugget", 1/9, "Nugget", true);


Material.registerMaterial(265, -1, "iron", 1, "ingot", true);
Material.registerMaterial(266, -1, "gold", 1, "ingot", true);
Material.registerMaterial(ItemID.ingot_copper, -1, "copper", 1, "ingot", true);
Material.registerMaterial(ItemID.ingot_cobalt, -1, "cobalt", 1, "ingot", true);
Material.registerMaterial(ItemID.ingot_ardite, -1, "ardite", 1, "ingot", true);
Material.registerMaterial(ItemID.ingot_bronze, -1, "bronze", 1, "ingot", true);
Material.registerMaterial(ItemID.ingot_manyullyn, -1, "manyullyn", 1, "ingot", true);
Material.registerMaterial(ItemID.ingot_alumite, -1, "alumite", 1, "ingot", true);
Material.registerMaterial(ItemID.ingot_tin, -1, "tin", 1, "ingot", true);
Material.registerMaterial(ItemID.ingot_aluminum, -1, "aluminum", 1, "ingot", true);
Material.registerMaterial(ItemID.ingot_alubrass, -1, "alubrass", 1, "ingot", true);

Material.registerMaterial(ItemID.nugget_iron, -1, "iron", 1, "nugget", true);
Material.registerMaterial(266, -1, "gold", 1, "nugget", true);
Material.registerMaterial(ItemID.nugget_copper, -1, "copper", 1, "nugget", true);
Material.registerMaterial(ItemID.nugget_cobalt, -1, "cobalt", 1, "nugget", true);
Material.registerMaterial(ItemID.nugget_ardite, -1, "ardite", 1, "nugget", true);
Material.registerMaterial(ItemID.nugget_bronze, -1, "bronze", 1, "nugget", true);
Material.registerMaterial(ItemID.nugget_manyullyn, -1, "manyullyn", 1, "nugget", true);
Material.registerMaterial(ItemID.nugget_alumite, -1, "alumite", 1, "nugget", true);
Material.registerMaterial(ItemID.nugget_tin, -1, "tin", 1, "nugget", true);
Material.registerMaterial(ItemID.nugget_aluminum, -1, "aluminum", 1, "nugget", true);
Material.registerMaterial(ItemID.nugget_alubrass, -1, "alubrass", 1, "nugget", true);