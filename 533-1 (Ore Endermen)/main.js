IDRegistry.genItemID("CoalPearl");
Item.createItem("CoalPearl", "Coal Pearl", {name: "CoalPearl", meta: 0}, {stack: 16});

Recipes.addFurnace(ItemID.CoalPearl, 263, 0);

IDRegistry.genItemID("DiamondPearl");
Item.createItem("DiamondPearl", "Diamond Pearl", {name: "DiamondPearl", meta: 0}, {stack: 16});

Recipes.addFurnace(ItemID.DiamondPearl, 264, 0);

IDRegistry.genItemID("IronPearl");
Item.createItem("IronPearl", "Iron Pearl", {name: "IronPearl", meta: 0}, {stack: 16});

Recipes.addFurnace(ItemID.IronPearl, 265, 0);

IDRegistry.genItemID("GoldPearl");
Item.createItem("GoldPearl", "Gold Pearl", {name: "GoldPearl", meta: 0}, {stack: 16});

Recipes.addFurnace(ItemID.GoldPearl, 266, 0);

IDRegistry.genItemID("EmeraldPearl");
Item.createItem("EmeraldPearl", "Emerald Pearl", {name: "EmeraldPearl", meta: 0}, {stack: 16});

Recipes.addFurnace(ItemID.EmeraldPearl, 388, 0);

IDRegistry.genItemID("LapisPearl");
Item.createItem("LapisPearl", "Lapis Pearl", {name: "LapisPearl", meta: 0}, {stack: 16});

Recipes.addFurnace(ItemID.LapisPearl, 351, 4);

IDRegistry.genItemID("RedstonePearl");
Item.createItem("RedstonePearl", "Redstone Pearl", {name: "RedstonePearl", meta: 0}, {stack: 16});

Recipes.addFurnace(ItemID.RedstonePearl, 331, 0);

IMPORT("MobLib");


var CoalEnderman = new Mob({ 
 sid:"CoalEnderman", 
 name:"Coal Enderman", 
 health:40, 
 render:26, 
 hitbox:{ 
 w: .3, 
 h: 1.8 
 }, 
 skin:"mob/Coal_Enderman.png", 
 spawn:{ 
 chance:5, 
 biomes:9, 
 time:[{start:0,end:23999}]}, 
 loot:[{
     id: ItemID.CoalPearl,
     count: 1,
     data: 0
 }],
 ai:38
});

var DiamondEnderman = new Mob({ 
 sid:"DiamondEnderman", 
 name:"Diamond Enderman", 
 health:40, 
 render:26, 
 hitbox:{ 
 w: .3, 
 h: 1.8 
 }, 
 skin:"mob/Diamond_Enderman.png", 
 spawn:{ 
 chance:5, 
 biomes:9, 
 time:[{start:0,end:23999}]}, 
 loot:[{
     id: ItemID.DiamondPearl,
     count: 1,
     data: 0
 }],
 ai:38
});

var EmeraldEnderman = new Mob({ 
 sid:"EmeraldEnderman", 
 name:"Emerald Enderman", 
 health:40, 
 render:26, 
 hitbox:{ 
 w: .3, 
 h: 1.8 
 }, 
 skin:"mob/Emerald_Enderman.png", 
 spawn:{ 
 chance:5, 
 biomes:9, 
 time:[{start:0,end:23999}]}, 
 loot:[{
     id: ItemID.EmeraldPearl,
     count: 1,
     data: 0
 }],
 ai:38
});

var IronEnderman = new Mob({ 
 sid:"IronEnderman", 
 name:"Iron Enderman", 
 health:40, 
 render:26, 
 hitbox:{ 
 w: .3, 
 h: 1.8 
 }, 
 skin:"mob/Iron_Enderman.png", 
 spawn:{ 
 chance:5, 
 biomes:9, 
 time:[{start:0,end:23999}]}, 
 loot:[{
     id: ItemID.IronPearl,
     count: 1,
     data: 0
 }],
 ai:38
});

var GoldEnderman = new Mob({ 
 sid:"GoldEnderman", 
 name:"Gold Enderman", 
 health:40, 
 render:26, 
 hitbox:{ 
 w: .3, 
 h: 1.8 
 }, 
 skin:"mob/Gold_Enderman.png", 
 spawn:{ 
 chance:5, 
 biomes:9, 
 time:[{start:0,end:23999}]}, 
 loot:[{
     id: ItemID.GoldPearl,
     count: 1,
     data: 0
 }],
 ai:38
});

var LapisEnderman = new Mob({ 
 sid:"LapisEnderman", 
 name:"Lapis Enderman", 
 health:40, 
 render:26, 
 hitbox:{ 
 w: .3, 
 h: 1.8 
 }, 
 skin:"mob/Lapis_Enderman.png", 
 spawn:{ 
 chance:5, 
 biomes:9, 
 time:[{start:0,end:23999}]}, 
 loot:[{
     id: ItemID.LapisPearl,
     count: 1,
     data: 0
 }],
 ai:38
});

var RedstoneEnderman = new Mob({ 
 sid:"RedstoneEnderman", 
 name:"Redstone Enderman", 
 health:40, 
 render:26, 
 hitbox:{ 
 w: .3, 
 h: 1.8 
 }, 
 skin:"mob/Redstone_Enderman.png", 
 spawn:{ 
 chance:5, 
 biomes:9, 
 time:[{start:0,end:23999}]}, 
 loot:[{
     id: ItemID.RedstonePearl,
     count: 1,
     data: 0
 }],
 ai:38
});