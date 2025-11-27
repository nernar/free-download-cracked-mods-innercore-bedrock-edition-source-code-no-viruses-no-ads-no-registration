IDRegistry.genItemID("pixi");
IDRegistry.genItemID("ocean");
IDRegistry.genItemID("otear");
IDRegistry.genItemID("oceanium");
IDRegistry.genItemID("siren_bok");
IDRegistry.genItemID("pixi_iron");
IDRegistry.genItemID("pixi_pickaxe");
IDRegistry.genItemID("pixi_shovel");
IDRegistry.genItemID("pixi_axe");
IDRegistry.genItemID("pixi_hoe");
IDRegistry.genItemID("bulatsword");
IDRegistry.genItemID("shardwings");
IDRegistry.genBlockID("pixiore")

Block.createBlock("pixiore", [
{name: "Magick stone", texture: [["pixi_ore", 0]], inCreative: true}
] );
Item.createItem("pixi", "Pixie Dust", {name: "pixi", meta: 0});
Item.createItem("oceanium", "Oceanium", {name: "oceanium", meta: 0});
Item.createItem("ocean", "Ocean breath", {name: "ocean", meta: 0});
Item.createItem("otear", "Ocean tear", {name: "otear", meta: 0});
Item.createItem("pixi_iron", "Pixie iron", {name: "Ipixi", meta: 0});
Item.createItem("pixi_pickaxe", "Pixie pickaxe", {name: "ppixi", meta: 0}, {stack: 1});
Item.createItem("siren_bok", "Sirenix books", {name: "sirenix", meta: 0});
Item.setGlint(ItemID.siren_bok, true);
Item.createItem("pixi_shovel", "Pixie shovel", {name: "spixi", meta: 0}, {stack: 1});
Item.createItem("pixi_axe", "Pixie axe", {name: "apixi", meta: 0}, {stack: 1});
Item.createItem("pixi_hoe", "Pixie hoe", {name: "hpixi", meta: 0}, {stack: 1});
Item.createItem("bulatsword", "Bulat beam", {name: "bulatsword", meta: 0}, {stack: 1});
Item.createItem("shardwings", "Shard of Fairy wings", {name: "shardwings", meta: 0}, {stack: 64});
ChargeItemRegistry.registerItem(ItemID.siren_bok, 6000, 0, true, true);
var SIRENIX_DURABILITY = 6001;
		
Item.registerUseFunctionForID(ItemID.siren_bok, function(coords, item, block){ 
if(item.data + 5999 <= Item.getMaxDamage(ItemID.siren_bok)){
Game.message(Native.Color.AQUA + "Who summon me?");
 Entity.spawnCustom("fairy", coords.x + 1, coords.y + 1.5, coords.z + .5);
         item.data = Math.min(item.data+6000, SIRENIX_DURABILITY);
		Player.setCarriedItem(item.id, 1, item.data);
}} );

ToolAPI.registerBlockMaterial(BlockID.pixiore, "stone", 2);
Block.registerDropFunction("pixiore", function(coords, id, data, diggingLevel, toolLevel){
			if (diggingLevel > 2) return [[ItemID.pixi, 1, 0]];
			return [];
	}, 2);
Callback.addCallback("GenerateChunkUnderground", function(chunkX, chunkZ){
  var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 3, 60);
for (var q = 0; q < 15;q++){
  if (Math.random() < 7/10) GenerationUtils.genMinable(coords.x, coords.y, coords.z, {
   id: BlockID.pixiore,
   data: 0,
   size: 6,
   ratio: .3,
   checkerTile: 1,
   checkerMode: false
   });
}
});

ToolAPI.addToolMaterial("pixi", {durability: 10, level: 40, efficiency: 24, damage: 2, enchantability: 14});
ToolAPI.setTool(ItemID.bulatsword, "pixi", ToolType.sword);
ToolAPI.setTool(ItemID.pixi_shovel, "pixi", ToolType.shovel);
ToolAPI.setTool(ItemID.pixi_pickaxe, "pixi", ToolType.pickaxe);
ToolAPI.setTool(ItemID.pixi_axe, "pixi", ToolType.axe);
ToolAPI.setTool(ItemID.pixi_hoe, "pixi", ToolType.hoe);
