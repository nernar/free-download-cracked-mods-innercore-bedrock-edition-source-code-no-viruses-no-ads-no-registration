/*
BUILD INFO:
  dir: dev
  target: main.js
  files: 3
*/



// file: osnovavseysborki.js

IMPORT("#modpacker");
ModPack.install({name: "WFA Tech-Mage 1.5.2", mods: [22, 402, 54, 119, 43, 52, 100, 40, 51, 280, 152, 363, 39, 143, 67, 62, 146, 74, 159, 338, 331, 339], icon: __dir__ + "mod_icon.jpg"});




// file: crafts.js

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




// file: ach.js

/*var AchievementAPI;
ModAPI.addAPICallback("AchievementsAPI", function (api) {
AchievementAPI = api.AchievementAPI;
    api.AchievementAPI.registerGroup({
        unique: "stone",
        name: "Каменный век",
        width: 600,
        height: 500,
        size: 100,
        bgTexture: "stone_0",
        icon: {
            id: 4
        }
    });
    
    api.AchievementAPI.registerGroup({
        unique: "bronze",
        name: "Бронзовый век",
        width: 600,
        height: 500,
        size: 100,
        bgTexture: "block_bronze_0",
        icon: {
            id: ItemID.ingot_bronze_0
        }
    });
}); 

ModAPI.addAPICallback("AchievementsAPI", function (api) {
    api.AchievementAPI.register("stone", {
        unique: "stick",
        name: {
            text: "Палка ыаы?"
        },
        description: {
            text: "Скрафтите каменную дубину",
        },
        column: 1,
        row: 1,
        item: {
            id: ItemID.
        }
    });
    
    api.AchievementAPI.register("stone", {
        unique: "dig",
        name: {
            text: "Скрафтите первую кирку",
        },
        description: {
            text: "Скрафтите каменную кирку",
        },
        parent: {
            unique: "stick"
        },
        column: 1,
        row: 2,
        item: {
            id: ItemID.
        }
    });*/




