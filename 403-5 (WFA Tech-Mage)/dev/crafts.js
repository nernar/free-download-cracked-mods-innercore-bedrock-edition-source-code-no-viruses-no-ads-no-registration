Recipes.deleteRecipe({id: 268, count: 1, data: 0})
Recipes.deleteRecipe({id: 269, count: 1, data: 0})
Recipes.deleteRecipe({id: 270, count: 1, data: 0})
Recipes.deleteRecipe({id: 271, count: 1, data: 0})
Recipes.deleteRecipe({id: 290, count: 1, data: 0})
Recipes.deleteRecipe({id: 272, count: 1, data: 0})
Recipes.deleteRecipe({id: 273, count: 1, data: 0})
Recipes.deleteRecipe({id: 274, count: 1, data: 0})
Recipes.deleteRecipe({id: 275, count: 1, data: 0})
Recipes.deleteRecipe({id: 291, count: 1, data: 0})
Recipes.deleteRecipe({id: 276, count: 1, data: 0})
Recipes.deleteRecipe({id: 277, count: 1, data: 0})
Recipes.deleteRecipe({id: 278, count: 1, data: 0})
Recipes.deleteRecipe({id: 279, count: 1, data: 0})
Recipes.deleteRecipe({id: 293, count: 1, data: 0})
Recipes.deleteRecipe({id: 267, count: 1, data: 0})
Recipes.deleteRecipe({id: 256, count: 1, data: 0})
Recipes.deleteRecipe({id: 257, count: 1, data: 0})
Recipes.deleteRecipe({id: 258, count: 1, data: 0})
Recipes.deleteRecipe({id: 292, count: 1, data: 0})

Recipes.deleteRecipe({id: 280, count: 4, data: 0})

Recipes.deleteRecipe({id: 61, count: 1, data: 0})
Recipes.deleteRecipe({id: 54, count: 1, data: 0})

	Recipes.addShaped({id: 280, count: 1, data: 0}, [
		"opo",
		"opo",
		"opo"
    ], ['p', 5, 0]);

    Recipes.addShaped({id: 272, count: 1, data: 0}, [
		"nsn",
		"ppp",
		"npn"
    ], ['n', 287, 0, 'p', 280, 0, 's', 4, 0]);

    Recipes.addShaped({id: 273, count: 1, data: 0}, [
		"nsn",
		"opo",
		"opo"
    ], ['p', 280, 0, 's', 4, 0, 'n', 287, 0]);

    Recipes.addShaped({id: 274, count: 1, data: 0}, [
		"nsd",
		"psn",
		"opo"
    ], ['n', 287, 0, 'p', 280, 0, 's', 4, 0, 'd', 5, 0]);

    Recipes.addShaped({id: 275, count: 1, data: 0}, [
		"sns",
		"pnp",
		"npn"
    ], ['n', 287, 0, 'p', 280, 0, 's', 4, 0]);

    Recipes.addShaped({id: 291, count: 1, data: 0}, [
		"snp",
		"opo",
		"npn"
    ], ['n', 287, 0, 'p', 280, 0, 's', 4, 0]);

    Recipes.addShaped({id: 267, count: 1, data: 0}, [
		"oio",
		"pip",
		"opo"
    ], ['i', 265, 0, 'p', 280, 0]);

    Recipes.addShaped({id: 256, count: 1, data: 0}, [
		"nin",
		"opo",
		"opo"
    ], ['n', 287, 0, 'p', 280, 0, 'i', 265, 0]);

    Recipes.addShaped({id: 257, count: 1, data: 0}, [
		"isi",
		"isi",
		"opo"
    ], ['i', 265, 0, 'p', 280, 0, 's', 4, 0]);

    Recipes.addShaped({id: 258, count: 1, data: 0}, [
		"iis",
		"ips",
		"opo"
    ], ['i', 265, 0, 'p', 280, 0, 's', 4, 0]);

     Recipes.addShaped({id: 292, count: 1, data: 0}, [
		"oik",
		"ipo",
		"opo"
    ], ['i', 265, 0, 'p', 280, 0, 'k', 4, 0]);



    Recipes.addShaped({id: 61, count: 1, data: 0}, [
		"kpk",
		"kvk",
		"kkk"
    ], ['k', 4, 0, 'v', 58, 0, 'p', 280, 0]);

    Recipes.addShaped({id: 54, count: 1, data: 0}, [
		"ddd",
		"ddd",
		"ooo"
    ], ['d', 17, 0]);



     IDRegistry.genItemID("palka");
     Item.createItem("palka", "Палка копалка", {name: "palka"}, {stack: 1});

Recipes.addShaped({id: ItemID.palka, count: 1, data: 0}, [
	"ppp",
	"ppp",
	"ppp"
], ['p', 280, 0]);