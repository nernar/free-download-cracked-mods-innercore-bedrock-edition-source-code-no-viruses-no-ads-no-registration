IDRegistry.genItemID("essenceHexical");
Item.createItem("essenceHexical", "Hexical Essence", {name: "hexessence", meta: 0});

IDRegistry.genItemID("hexibiscusItem");
Item.createItem("hexibiscusItem", "Hexibiscus", {name: "hexibiscus", meta: 0});

IDRegistry.genItemID("diamondHexical");
Item.createItem("diamondHexical", "Hexical Diamond", {name: "hexdiamond", meta: 0});

IDRegistry.genBlockID("hexibiscus");
Block.createBlock("hexibiscus", [
	{name: "Hexibiscus", texture: [["ghostblock", 0], ["ghostblock", 0], ["hexibiscus", 0]], inCreative: false}
]);

Recipes.addShaped({id: ItemID.diamondHexical, count: 1, data: 0}, [
	" b ",
	"bab",
	" b "
], ['a', 264, 0, 'b', ItemID.essenceHexical, 0]);

Block.setBlockShape(BlockID.hexibiscus, {x: 0.1, y: 0, z: 0.1}, {x: 0.9, y: 0.05, z: 0.9});

Item.registerUseFunction("hexibiscusItem", function(coords, item, block){
	var place = coords.relative;
	if(GenerationUtils.isTransparentBlock(World.getBlockID(place.x, place.y, place.z))){
		World.setBlock(place.x, place.y, place.z, BlockID.hexibiscus);
		Player.setCarriedItem(item.id, item.count - 1, item.data);
		World.addTileEntity(place.x, place.y, place.z);
	}
});

Block.registerDropFunction("hexibiscus", function(){
return [[ItemID.essenceHexical, 1, 0]];});

BlockRenderer.addRenderCallback(BlockID.hexibiscus, function(api, coords, block) {

var box = BlockID.hexibiscus;

api.renderBoxId(coords.x, coords.y, coords.z, .499, 0, 0, .501, 0.90, 1, box, 0);
api.renderBoxId(coords.x, coords.y, coords.z, 0, 0, .499, 1, 0.90, .501, box, 0);

                 
});
BlockRenderer.enableCustomRender(BlockID.hexibiscus);


Callback.addCallback("GenerateChunk", function (chunkX, chunkZ) {

    let coords = GenerationUtils.randomCoords(chunkX, chunkZ, 1, 512);
    if(Math.random() < 0.1){
    coords = GenerationUtils.findSurface(coords.x, coords.y, coords.z);

    if (World.getBlock(coords.x, coords.y + 1, coords.z).id === 0 && GenerationUtils.canSeeSky(coords.x, coords.y + 1, coords.z)) {
        World.setBlock(coords.x,coords.y + 1,  coords.z, BlockID.hexibiscus, 0);
        }}
});