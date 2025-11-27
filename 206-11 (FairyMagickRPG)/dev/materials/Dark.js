IDRegistry.genItemID("corpl");
IDRegistry.genItemID("gencor");
IDRegistry.genItemID("darkshard");
IDRegistry.genBlockID("dore");
IDRegistry.genItemID("drod");

Item.createItem("drod", "Dark Rod", {name: "drod", meta: 0}, {stack: 64});
Item.createItem("corpl", "Dark Plate", {name: "corpl", meta: 0}, {stack: 64});
Item.createItem("gencor", "Generator Core", {name: "gencor", meta: 0}, {stack: 1});
Item.createItem("darkshard", "Dark Shard", {name: "darkshard", meta: 0}, {stack: 64});
Block.createBlock("dore", [
{name: "Dark Ore", texture: [["dore", 0]], inCreative: true}
] );
ToolAPI.registerBlockMaterial(BlockID.dore, "stone", 2);
Block.registerDropFunction("dore", function(coords, id, data, diggingLevel, toolLevel){
			if (diggingLevel > 2) return [[ItemID.darkshard, 1, 0]];
			return [];
	}, 2);
Callback.addCallback("GenerateChunkUnderground", function(chunkX, chunkZ){
  var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 3, 60);
for (var q = 0; q < 15;q++){
  if (Math.random() < 7/10) GenerationUtils.genMinable(coords.x, coords.y, coords.z, {
   id: BlockID.dore,
   data: 0,
   size: 6,
   ratio: .3,
   checkerTile: 1,
   checkerMode: false
   });
}
});
Recipes.addShaped({id: ItemID.corpl, count: 1, data: 0}, [
"cbc",
"bcb",
"cbc"
], ["b", ItemID.darkshard, 0, "c", 265, 0] );

Recipes.addShaped({id: ItemID.gencor, count: 1, data: 0}, [
"cbc",
"bxb",
"cbc"
], ["b", ItemID.corpl, 0, "c", 265, 0, "x", 152, 0] );
