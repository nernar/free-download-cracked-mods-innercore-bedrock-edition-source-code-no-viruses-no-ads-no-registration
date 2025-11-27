//Cave Plus Mod for MC Bedrock - InnerCore Version
//This is the developer version of the script! Don´t change or use it.

//fossilrock
IDRegistry.genBlockID("fossilrock");
Block.createBlock("fossilrock", [
  {name: "Fossil Rock", texture: [["fossilstone",0]], inCreative: true}
], "opaque");
ToolAPI.registerBlockMaterial(BlockID.fossilrock, "stone");
Block.setDestroyTime(BlockID.fossilrock, 9.5);
Block.setDestroyLevel("fossilrock", 1);
Block.registerDropFunction("fossilrock", function (coords, id, data, diggingLevel) {
    if (diggingLevel > 0) {
        ToolAPI.dropOreExp(coords, 1, 4, 1);
        var drop = getDropBlock();
        World.drop(coords.relative.x + 0.5, coords.relative.y + 0.1, coords.relative.z + 0.5, drop.id, 1, drop.data);
    }
    return [];
});
var fossildrop = [
  {chance: 0.2, id: 2266, data: 0},
  {chance: 0.2, id: 2264, data: 0},
  {chance: 0.2, id: 2267, data: 0},
  {chance: 0.2, id: 2265, data: 0},
  {chance: 0.2, id: 2259, data: 0},
  {chance: 2.5, id: 302, data: 0},
  {chance: 2.5, id: 303, data: 0},
  {chance: 2.5, id: 304, data: 0},
  {chance: 2.5, id: 305, data: 0},
  {chance: 25, id: ItemID.ivory, data: 0},
  {chance: 25, id: ItemID.ocremud, data: 0},
  {chance: 25, id: 367, data: 0},
  {chance: 29, id: 352, data: 0}
];
function getDropBlock(){
  var total = 0;
  for (var i in fossildrop){
    total += fossildrop[i].chance;
  }
  var random = Math.random() * total * 1.4;
  var current = 0;
  for (var i in fossildrop){
    var drop = fossildrop[i];
    if (current < random && current + drop.chance > random){
      return drop;
    }
    current += drop.chance;
  }
  return {id: 13, data: 0};
}

var FossilGenerator = {
	fossil: {
		enabled: __config__.getBool("fossilrock.enabled"),
		count: __config__.getNumber("fossilrock.count"),
		size: __config__.getNumber("fossilrock.size"),
		minHeight: __config__.getNumber("fossilrock.minHeight"),
		maxHeight: __config__.getNumber("fossilrock.maxHeight")
	},
  ocredirt: {
		enabled: __config__.getBool("ocre.enabled"),
		count: __config__.getNumber("ocre.count"),
		size: __config__.getNumber("ocre.size"),
		minHeight: __config__.getNumber("ocre.minHeight"),
		maxHeight: __config__.getNumber("ocre.maxHeight")
	},
  addFlag: function(name, flag){
		if(FossilGenerator[name].enabled){
		 FossilGenerator[name].enabled = !Flags.addFlag(flag);
		}
	}
}
FossilGenerator.addFlag("fossil", "oreGenFossil");
FossilGenerator.addFlag("ocredirt", "oreGenOcredirt");
Callback.addCallback("PostLoaded", function(){
	if(FossilGenerator.fossil.enabled){
		Callback.addCallback("GenerateChunkUnderground", function(chunkX, chunkZ){
			for(var i = 0; i < FossilGenerator.fossil.count; i++){
				var coords = GenerationUtils.randomCoords(chunkX, chunkZ, FossilGenerator.fossil.minHeight, FossilGenerator.fossil.maxHeight);
				GenerationUtils.generateOre(coords.x, coords.y, coords.z, BlockID.fossilrock, 0, FossilGenerator.fossil.size);
			}
		});
    Callback.addCallback("GenerateChunkUnderground", function(chunkX, chunkZ){
			for(var i = 0; i < FossilGenerator.ocredirt.count; i++){
				var coords = GenerationUtils.randomCoords(chunkX, chunkZ, FossilGenerator.ocredirt.minHeight, FossilGenerator.ocredirt.maxHeight);
				GenerationUtils.generateOre(coords.x, coords.y, coords.z, BlockID.ocredirt, 0, FossilGenerator.ocredirt.size);
			}
		});
	}
  });
