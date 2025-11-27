IDRegistry.genBlockID("hellstone");
Block.createBlock("hellstone", [
{name: "Flaming stone", texture: [["hellstone", 0]], inCreative: true}
] );

ToolAPI.registerBlockMaterial(BlockID.hellstone, "stone", 3);
Block.registerDropFunction("hellstone", function(coords, id, data, diggingLevel, toolLevel){
			if (diggingLevel > 3) return [[ItemID.hellore, 2, 0]];
			return [];
	}, 3);
	
Callback.addCallback("GenerateNetherChunk", function(chunkX, chunkZ){
	if (Math.random() < 2){
	for (var k = 0; k < 7; k++){
	var coords = GenerationUtils.randomCoords(chunkX, chunkZ, -30, 250);	GenerationUtils.genMinable(coords.x, coords.y, coords.z, {
			id: BlockID.hellstone,
			data: 0,
			size: 2,
			ratio: 3,
			checkerTile: 87,
			checkerMode: false
		});
	}	
}
});

IDRegistry.genItemID("hellstonebar");
Item.createItem("hellstonebar", "Flaming Bar", {name: "hellbar", meta: 0}, {stack: 64});

IDRegistry.genItemID("hellore");
Item.createItem("hellore", "Flaming Ore", {name: "hellore", meta: 0}, {stack: 64});


IDRegistry.genItemID("moltenstick");
Item.createItem("moltenstick", "Flaming Rod", {name: "moltenstick", meta: 0}, {stack: 1});
Recipes.addShaped({id: ItemID.moltenstick, count: 1, data: 0},
 ["   ",
 " a ",
 " a "], ["a", ItemID.hellstonebar, 0]);

IDRegistry.genItemID("hellsword");
Item.createItem("hellsword", "Flaming Sword", {name: "hellsword", meta: 0}, {stack: 1});
Recipes.addShaped({id: ItemID.hellsword, count: 1, data: 0},
 [" a",
 " a",
 " x"], ["a", ItemID.hellstonebar, 0, "x", ItemID.moltenstick, 0]);

IDRegistry.genItemID("hellbar");
Item.createItem("hellbar", "Chunk of flaming stone", {name: "hellstonebar", meta: 0}, {stack: 64});
Recipes.addShaped({id: ItemID.hellbar, count: 1, data: 0},
 [" a ",
 "aaa",
 " a "], ["a", ItemID.hellore, 0]);
 
IDRegistry.genItemID("hellhelmet");
Item.createArmorItem("hellhelmet", "Flaming Helmet", {name: "hellhelmet"}, {type: "helmet", armor: 3, durability: 1256, texture: "armor/hell_1.png"});
Recipes.addShaped({id: ItemID.hellhelmet, count: 1, data: 0},
 ["   ",
 "aaa",
 "a a"], ["a", ItemID.hellstonebar, 0]);

IDRegistry.genItemID("hellchestplate");
Item.createArmorItem("hellchestplate", "Flaming Chestplate", {name: "hellchestplate"}, {type: "chestplate", armor: 5, durability: 1256, texture: "armor/hell_1.png"});
Recipes.addShaped({id: ItemID.hellchestplate, count: 1, data: 0},
 ["a a",
 "aaa",
 "aaa"], ["a", ItemID.hellstonebar, 0]);

IDRegistry.genItemID("hellleggings");
Item.createArmorItem("hellleggings", "Flaming Leggings", {name: "hellleggings"}, {type: "leggings", armor: 4, durability: 1256, texture: "armor/hell_2.png"});
Recipes.addShaped({id: ItemID.hellleggings, count: 1, data: 0},
 ["aaa",
 "a a",
 "a a"], ["a", ItemID.hellstonebar, 0]);

IDRegistry.genItemID("hellboots");
Item.createArmorItem("hellboots", "Flaming Boots", {name: "hellboots"}, {type: "boots", armor: 3, durability: 1256, texture: "armor/hell_1.png"});
Recipes.addShaped({id: ItemID.hellboots, count: 1, data: 0},
 ["   ",
 "a a",
 "a a"], ["a", ItemID.hellstonebar, 0]);

Callback.addCallback("tick", function()
{
    var helmet = Player.getArmorSlot(0);
    var chest = Player.getArmorSlot(1);
    var legs = Player.getArmorSlot(2);
    var boots = Player.getArmorSlot(3);
    var pos = Player.getPosition();
if (helmet.id == ItemID.hellhelmet && chest.id == ItemID.hellchestplate && legs.id == ItemID.hellleggings && boots.id == ItemID.hellboots){
    Entity.addEffect(Player.get(), 12, 25, 3, false, false);
   }
});


ToolAPI.registerSword(ItemID.hellsword, {level: 0, durability: 1564, damage: 8},
 {
	damage: 0,
	 onAttack: function(carriedItem, victim){
		Entity.setFire(victim, 1000) }
});