var RYDA = Block.createSpecialType({
	base: 87,
	solid: true,
	destroytime: 1.4,
	opaque: true
});
IDRegistry.genBlockID("lavacristall");
Block.createBlock("lavacristall", [{name: "Руда кристалла магмы", texture: [["лавовый_кристалл", 0], ["лавовый_кристалл", 0], ["лавовый_кристалл", 0], ["лавовый_кристалл", 0], ["лавовый_кристалл", 0], ["лавовый_кристалл", 0]], inCreative: true}]);
Callback.addCallback("GenerateNetherChunk", function(chunkX, chunkZ){
for(var i=0;i<50;i++){
var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 5, 300);
if(World.getBlockID(coords.x, coords.y+1, coords.z)==11)
{
GenerationUtils.generateOre(coords.x, coords.y, coords.z, BlockID.lavacristall, 0, 10);
}
}});
Callback.addCallback("GenerateNetherChunk", function(chunkX, chunkZ){
for(var i=0;i<50;i++){
    if (Config.genMagmaCrystal) {
var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 5, 300);
if(World.getBlockID(coords.x, coords.y, coords.z)==87)
{
GenerationUtils.generateOre(coords.x, coords.y, coords.z, BlockID.lavacristall, 0, 5);
}
}
}
});
IDRegistry.genItemID("lavaCrysta");
Item.createItem("lavaCrysta", "Кристалл магмы:заряженность-100(мин.)", {name: "лавовый_кристалл", meta: 5}, {});
IDRegistry.genItemID("lavaCryst");
Item.createItem("lavaCryst", "Кристалл магмы:заряженность-400", {name: "лавовый_кристалл", meta: 4}, {isTech: true});
IDRegistry.genItemID("lavaCrys");
Item.createItem("lavaCrys", "Кристалл магмы:заряженность-700", {name: "лавовый_кристалл", meta: 3}, {isTech: true});
IDRegistry.genItemID("lavaCry");
Item.createItem("lavaCry", "Кристалл магмы:заряженность-1000", {name: "лавовый_кристалл", meta: 2}, {isTech: true});
IDRegistry.genItemID("lavaCr");
Item.createItem("lavaCr", "Кристалл магмы:заряженность-1300", {name: "лавовый_кристалл", meta: 1}, {isTech: true});
IDRegistry.genItemID("lavaC");
Item.createItem("lavaC", "Кристалл магмы:заряженность-1600(сред.)", {name: "лавовый_кристалл", meta: 0}, {});
IDRegistry.genItemID("lavaa");
Item.createItem("lavaa", "Кристалл магмы:заряженность-1900", {name: "лавовый_кристалл", meta: 6}, {isTech: true});
IDRegistry.genItemID("lav");
Item.createItem("lav", "Кристалл магмы:заряженность-2200", {name: "лавовый_кристалл", meta: 7}, {isTech: true});
IDRegistry.genItemID("lavv");
Item.createItem("lavv", "Кристалл магмы:заряженность-2500", {name: "лавовый_кристалл", meta: 8}, {isTech: true});
IDRegistry.genItemID("la");
Item.createItem("la", "Кристалл магмы:заряженность-2800", {name: "лавовый_кристалл", meta: 9}, {isTech: true});
IDRegistry.genItemID("laa");
Item.createItem("laa", "Кристалл магмы:заряженность-3100(макс.)", {name: "лавовый_кристалл", meta: 10}, {});