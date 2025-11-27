Callback.addCallback("PostLoaded", function () {
Recipes.addShaped({id: ItemID.Scapolitebar, count: 1, data: 0}, 
 ["ааа",
  "ааа",
  ""],
 ['а', ItemID.Scapolitepart, 0]
);

Recipes.addShaped({id: ItemID.Scapolitebardiam, count: 1, data: 0}, 
 ["",
  " а ",
  "ххх"],
 ['а', ItemID.Scapolitebar, 0, 'х', 264, 0]
);

Recipes.addShaped({id: ItemID.ScapoliteHelmet, count: 1, data: 0}, 
 ["ааа", 
  "а а", 
  ""],
 ['а', ItemID.Scapolitebar, 0]
);

Recipes.addShaped({id: ItemID.ScapoliteChestplate, count: 1, data: 0}, 
 ["а а", 
  "ааа", 
  "ааа"],
 ['а', ItemID.Scapolitebar, 0]
);

Recipes.addShaped({id:ItemID.ScapoliteLeggings, count: 1, data: 0}, 
 ["ааа", 
  "а а", 
  "а а"],
 ['а', ItemID.Scapolitebar, 0]
);

Recipes.addShaped({id:ItemID.ScapoliteBoots, count: 1, data: 0}, 
 ["", 
  "а а", 
  "а а"],
 ['а', ItemID.Scapolitebar, 0]
);

Recipes.addShaped({id: ItemID.scapolite_sword, count: 1, data: 0},
  [" a ",
         " a ", 
         " x "],
  ['x', 280, 0, 'a', ItemID.Scapolitebar, 0]
);

Recipes.addShaped({id: ItemID.scapolite_pickaxe, count: 1, data: 0},
  ["ааа",
         " х ", 
         " х "],
  ['х', 280, 0, 'а', ItemID.Scapolitebar, 0]
);

Recipes.addShaped({id: ItemID.scapolite_axe, count: 1, data: 0},
  ["аа ",
   "ах ", 
   " х "],
  ['х', 280, 0, 'а', ItemID.Scapolitebar, 0]
);

Recipes.addShaped({id: ItemID.scapolite_destroy, count: 1, data: 0},
  ["ааа",
         "аха", 
         " х "],
  ['х', 280, 0, 'а', ItemID.Scapolitebardiam, 0]
);

Recipes.addShaped({id: BlockID.latuneFurnace, count: 1, data: 0}, [
		" х ",
		"хах",
		" х "
	], ['а', 61, 0, 'х', ItemID.Latunebar, 0]);

	Recipes.addFurnace(BlockID.Latuneore, ItemID.Latunebar, 0);

Recipes.addFurnace(ItemID.Scapolitedust, ItemID.Scapolitepart, 0);

});
