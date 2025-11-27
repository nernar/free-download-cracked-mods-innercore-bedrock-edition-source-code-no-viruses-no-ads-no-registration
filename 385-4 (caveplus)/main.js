/*
BUILD INFO:
  dir: dev
  target: main.js
  files: 16
*/



// file: header.js

IMPORT("flags");
IMPORT("ToolType");




// file: BLOCKS/craftableblocks.js

//Cave Plus Mod for MC Bedrock - InnerCore Version
//This is the developer version of the script! Don´t change or use it.


//Lithium Lantern
var LANTERN = Block.createSpecialType({
lightlevel: 15,
lightopacity: 0
});
IDRegistry.genBlockID("lithiumlantern");
Block.createBlock("lithiumlantern", [
  {name: "Lithium Lantern", texture: [["lithiumlantern",0]], inCreative: true}
], LANTERN);
ToolAPI.registerBlockMaterial(BlockID.lithiumlantern, "stone");
Block.setDestroyTime(BlockID.lithiumlantern, 0.5);
Block.setDestroyLevel("lithiumlantern", 0.5);
Callback.addCallback("PostLoaded", function () {
  Recipes.addShaped({id: BlockID.lithiumlantern, count: 1, data: 0}, [
    "xxx", "xax", "xxx"], [
      'x', ItemID.lithiumdust, 0, 'a', 331, 0]);
});
Block.registerDropFunction("lithiumlantern", function (coords, id, data, diggingLevel) {
    if (diggingLevel > 1) {
        return [[ItemID.lithiumdust, 2 + Math.random() * 5, 0]];
    }
    return [];
});

//Glass
var GLASS = Block.createSpecialType({
renderType: 4,
lightopacity: 0
});
IDRegistry.genBlockID("amberglass");
Block.createBlock("amberglass", [
  {name: "Amber Glass", texture: [["amberglass",0]], inCreative: true}
], GLASS);
ToolAPI.registerBlockMaterial(BlockID.amberglass, "stone");
Block.setDestroyTime(BlockID.amberglass, 0.1);
Block.registerDropFunction("amberglass", function (coords, id, data, diggingLevel) {
    if (diggingLevel > 20) {
        return [[BlockID.amberglass, 1 + Math.random() * 5, 0]];
    }
    return [];
});
IDRegistry.genBlockID("hardglass");
Block.createBlock("hardglass", [
  {name: "Hard Glass", texture: [["hardglass",0]], inCreative: true}
], GLASS);
ToolAPI.registerBlockMaterial(BlockID.hardglass, "stone");
Block.setDestroyTime(BlockID.hardglass, 0.4);
Block.registerDropFunction("hardglass", function (coords, id, data, diggingLevel) {
    if (diggingLevel > 20) {
        return [[BlockID.hardglass, 1 + Math.random() * 5, 0]];
    }
    return [];
});
Callback.addCallback("PostLoaded", function () {
  Recipes.addShaped({id: BlockID.hardglass, count: 1, data: 0}, [
    "aaa", "axa", "aaa"], [
      'x', 20, 0, 'a', ItemID.titaniumingot, 0]);
});
Callback.addCallback("PostLoaded", function () {
  Recipes.addShaped({id: BlockID.amberglass, count: 1, data: 0}, [
    "aaa", "axa", "aaa"], [
      'x', 20, 0, 'a', ItemID.amber, 0]);
});




// file: BLOCKS/fossilrock.js

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




// file: BLOCKS/metal.js

//Cave Plus Mod for MC Bedrock - InnerCore Version
//This is the developer version of the script! Don´t change or use it.

//Metal.js
IDRegistry.genBlockID("copperblock");
Block.createBlock("copperblock", [
  {name: "Block of Copper", texture: [["copperblock",0]], inCreative: true}
], "opaque");
ToolAPI.registerBlockMaterial(BlockID.copperblock, "stone");
Block.setDestroyTime(BlockID.copperblock, 3);
Block.setDestroyLevel("copperblock", 2);

IDRegistry.genBlockID("brassblock");
Block.createBlock("brassblock", [
  {name: "Block of Brass", texture: [["brassblock",0]], inCreative: true}
], "opaque");
ToolAPI.registerBlockMaterial(BlockID.brassblock, "stone");
Block.setDestroyTime(BlockID.brassblock, 3);
Block.setDestroyLevel("brassblock", 2);

IDRegistry.genBlockID("titaniumblock");
Block.createBlock("titaniumblock", [
  {name: "Block of Titanium", texture: [["titaniumblock",0]], inCreative: true}
], "opaque");
ToolAPI.registerBlockMaterial(BlockID.titaniumblock, "stone");
Block.setDestroyTime(BlockID.titaniumblock, 3);
Block.setDestroyLevel("titaniumblock", 2);

IDRegistry.genBlockID("bronzeblock");
Block.createBlock("bronzeblock", [
  {name: "Block of Bronze", texture: [["bronzeblock",0]], inCreative: true}
], "opaque");
ToolAPI.registerBlockMaterial(BlockID.bronzeblock, "stone");
Block.setDestroyTime(BlockID.bronzeblock, 3);
Block.setDestroyLevel("bronzeblock", 2);

IDRegistry.genBlockID("lithiumblock");
Block.createBlock("lithiumblock", [
  {name: "Block of Lithium", texture: [["lithiumblock",0]], inCreative: true}
], "opaque");
ToolAPI.registerBlockMaterial(BlockID.lithiumblock, "stone");
Block.setDestroyTime(BlockID.lithiumblock, 3);
Block.setDestroyLevel("lithiumblock", 2);

IDRegistry.genBlockID("bismuthblock2");
Block.createBlock("bismuthblock2", [
  {name: "Block of Crystallized Bismuth", texture: [["bismuthcrystallizedblock",0]], inCreative: true}
], "opaque");
ToolAPI.registerBlockMaterial(BlockID.bismuthblock2, "stone");
Block.setDestroyTime(BlockID.bismuthblock2, 3);
Block.setDestroyLevel("bismuthblock2", 2);

Callback.addCallback("PostLoaded", function () {
  Recipes.addShaped({id: BlockID.copperblock, count: 1, data: 0}, [
    "xxx", "xxx", "xxx"], [
      'x', ItemID.copperingot, 0]);
});
Callback.addCallback("PostLoaded", function () {
  Recipes.addShaped({id: BlockID.brassblock, count: 1, data: 0}, [
    "xxx", "xxx", "xxx"], [
      'x', ItemID.brassingot, 0]);
});
Callback.addCallback("PostLoaded", function () {
  Recipes.addShaped({id: BlockID.bronzeblock, count: 1, data: 0}, [
    "xxx", "xxx", "xxx"], [
      'x', ItemID.bronzeingot, 0]);
});
Callback.addCallback("PostLoaded", function () {
  Recipes.addShaped({id: BlockID.titaniumblock, count: 1, data: 0}, [
    "xxx", "xxx", "xxx"], [
      'x', ItemID.titaniumingot, 0]);
});
Callback.addCallback("PostLoaded", function () {
  Recipes.addShaped({id: BlockID.lithiumblock, count: 1, data: 0}, [
    "xxx", "xxx", "xxx"], [
      'x', ItemID.lithiumingot, 0]);
});
Callback.addCallback("PostLoaded", function () {
  Recipes.addShaped({id: BlockID.bismuthblock2, count: 1, data: 0}, [
    "xxx", "xxx", "xxx"], [
      'x', ItemID.bismuthingot2, 0]);
});




// file: BLOCKS/ore.js

//Cave Plus Mod for MC Bedrock - InnerCore Version
//This is the developer version of the script! Don´t change or use it.

//Ores
IDRegistry.genBlockID("copperore");
Block.createBlock("copperore", [
  {name: "Copper Ore", texture: [["copperore",0]], inCreative: true}
], "opaque");
ToolAPI.registerBlockMaterial(BlockID.copperore, "stone");
Block.setDestroyTime(BlockID.copperore, 3);
Block.setDestroyLevel("copperore", 2);

IDRegistry.genBlockID("zincore");
Block.createBlock("zincore", [
  {name: "Zinc Ore", texture: [["zincore",0]], inCreative: true}
], "opaque");
ToolAPI.registerBlockMaterial(BlockID.zincore, "stone");
Block.setDestroyTime(BlockID.zincore, 3);
Block.setDestroyLevel("zincore", 2);
Block.registerDropFunction("zincore", function (coords, id, data, diggingLevel) {
    if (diggingLevel > 1) {
        return [[ItemID.zincnugget, 1 + Math.random() * 5, 0]];
    }
    return [];
});

IDRegistry.genBlockID("tinore");
Block.createBlock("tinore", [
  {name: "Tin Ore", texture: [["tinore",0]], inCreative: true}
], "opaque");
ToolAPI.registerBlockMaterial(BlockID.tinore, "stone");
Block.setDestroyTime(BlockID.tinore, 3);
Block.setDestroyLevel("tinore", 1);
Block.registerDropFunction("tinore", function (coords, id, data, diggingLevel) {
    if (diggingLevel > 0) {
        ToolAPI.dropOreExp(coords, 1, 4, 1);
        return [[ItemID.tinnugget, 1 + Math.random() * 5, 0]];
    }
    return [];
});

IDRegistry.genBlockID("titaniumore");
Block.createBlock("titaniumore", [
  {name: "Titanium Ore", texture: [["titaniumore",0]], inCreative: true}
], "opaque");
ToolAPI.registerBlockMaterial(BlockID.titaniumore, "stone");
Block.setDestroyTime(BlockID.titaniumore, 7);
Block.setDestroyLevel("titaniumore", 4);

IDRegistry.genBlockID("saltore");
Block.createBlock("saltore", [
  {name: "Salt Ore", texture: [["saltore",0]], inCreative: true}
], "opaque");
ToolAPI.registerBlockMaterial(BlockID.saltore, "stone");
Block.setDestroyTime(BlockID.saltore, 3);
Block.setDestroyLevel("saltore", 0);
Block.registerDropFunction("saltore", function (coords, id, data, diggingLevel) {
    if (diggingLevel > 0) {
        ToolAPI.dropOreExp(coords, 1, 4, 1);
        return [[ItemID.salt, 1 + Math.random() * 5, 0]];
    }
    return [];
});

IDRegistry.genBlockID("bismuthore");
Block.createBlock("bismuthore", [
  {name: "Bismuth Ore", texture: [["bismuthore",0]], inCreative: true}
], "opaque");
ToolAPI.registerBlockMaterial(BlockID.bismuthore, "stone");
Block.setDestroyTime(BlockID.bismuthore, 4);
Block.setDestroyLevel("bismuthore", 3);

IDRegistry.genBlockID("lithiumore");
Block.createBlock("lithiumore", [
  {name: "Lithium Ore", texture: [["lithiumore",0]], inCreative: true}
], "opaque");
ToolAPI.registerBlockMaterial(BlockID.lithiumore, "stone");
Block.setDestroyTime(BlockID.lithiumore, 4);
Block.setDestroyLevel("lithiumore", 3);

IDRegistry.genBlockID("plumbumore");
Block.createBlock("plumbumore", [
  {name: "Plumbum Ore", texture: [["plumbumore",0]], inCreative: false}
], "opaque");
ToolAPI.registerBlockMaterial(BlockID.plumbumore, "stone");
Block.setDestroyTime(BlockID.plumbumore, 6);
Block.setDestroyLevel("plumbumore", 3);

IDRegistry.genBlockID("rubyore");
Block.createBlock("rubyore", [
  {name: "Ruby Ore", texture: [["rubyore",0]], inCreative: false}
], "opaque");
ToolAPI.registerBlockMaterial(BlockID.rubyore, "stone");
Block.setDestroyTime(BlockID.rubyore, 3);
Block.setDestroyLevel("rubyore", 3);
Block.registerDropFunction("rubyore", function (coords, id, data, diggingLevel) {
    if (diggingLevel > 2) {
        return [[ItemID.ruby, 1, 0]];
    }
    return [];
});

IDRegistry.genBlockID("sapphireore");
Block.createBlock("sapphireore", [
  {name: "Sapphire Ore", texture: [["sapphireore",0]], inCreative: false}
], "opaque");
ToolAPI.registerBlockMaterial(BlockID.sapphireore, "stone");
Block.setDestroyTime(BlockID.sapphireore, 3);
Block.setDestroyLevel("sapphireore", 3);
Block.registerDropFunction("sapphireore", function (coords, id, data, diggingLevel) {
    if (diggingLevel > 2) {
        return [[ItemID.sapphire, 1, 0]];
    }
    return [];
});

IDRegistry.genBlockID("amberore");
Block.createBlock("amberore", [
  {name: "Amber Ore", texture: [["amberore",0]], inCreative: true}
], "opaque");
ToolAPI.registerBlockMaterial(BlockID.amberore, "stone");
Block.setDestroyTime(BlockID.amberore, 3);
Block.setDestroyLevel("amberore", 2);
Block.registerDropFunction("amberore", function (coords, id, data, diggingLevel) {
    if (diggingLevel > 1) {
        ToolAPI.dropOreExp(coords, 1, 4, 1);
        return [[ItemID.amber, 1 + Math.random() * 2, 0]];
    }
    return [];
});




// file: BLOCKS/stone.js

//Cave Plus Mod for MC Bedrock - InnerCore Version
//This is the developer version of the script! Don´t change or use it.

//stone raw
IDRegistry.genBlockID("slateblue");
Block.createBlock("slateblue", [
  {name: "Blue Slate", texture: [["slateblue",0]], inCreative: true}
], "opaque");
ToolAPI.registerBlockMaterial(BlockID.slateblue, "stone");
Block.setDestroyTime(BlockID.slateblue, 1.8);
Block.setDestroyLevel("slateblue", 1);
Block.registerDropFunction("slateblue", function (coords, id, data, diggingLevel) {
    if (diggingLevel > 0) {
        return [[BlockID.slatebluecobble, 1, 0]];
    }
    return [];
});
IDRegistry.genBlockID("slate");
Block.createBlock("slate", [
  {name: "Slate", texture: [["slate",0]], inCreative: true}
], "opaque");
ToolAPI.registerBlockMaterial(BlockID.slate, "stone");
Block.setDestroyTime(BlockID.slate, 1.8);
Block.setDestroyLevel("slate", 1);
Block.registerDropFunction("slate", function (coords, id, data, diggingLevel) {
    if (diggingLevel > 0) {
        return [[BlockID.slatecobble, 1, 0]];
    }
    return [];
});
IDRegistry.genBlockID("graniteblack");
Block.createBlock("graniteblack", [
  {name: "Black Granite", texture: [["graniteblack",0]], inCreative: false}
], "opaque");
ToolAPI.registerBlockMaterial(BlockID.graniteblack, "stone");
Block.setDestroyTime(BlockID.graniteblack, 2.3);
Block.setDestroyLevel("graniteblack", 1);
IDRegistry.genBlockID("basalt");
Block.createBlock("basalt", [
  {name: "Basalt", texture: [["basalt",0]], inCreative: true}
], "opaque");
ToolAPI.registerBlockMaterial(BlockID.basalt, "stone");
Block.setDestroyTime(BlockID.basalt, 2.8);
Block.setDestroyLevel("basalt", 1);
Block.registerDropFunction("basalt", function (coords, id, data, diggingLevel) {
    if (diggingLevel > 0) {
        return [[BlockID.basaltcobble, 1, 0]];
    }
    return [];
});
IDRegistry.genBlockID("dacite");
Block.createBlock("dacite", [
  {name: "Dacite", texture: [["dacite",0]], inCreative: true}
], "opaque");
ToolAPI.registerBlockMaterial(BlockID.dacite, "stone");
Block.setDestroyTime(BlockID.dacite, 1.9);
Block.setDestroyLevel("dacite", 1);
Block.registerDropFunction("dacite", function (coords, id, data, diggingLevel) {
    if (diggingLevel > 0) {
        return [[BlockID.dacitecobble, 1, 0]];
    }
    return [];
});
IDRegistry.genBlockID("greywacke");
Block.createBlock("greywacke", [
  {name: "Greywacke", texture: [["greywacke",0]], inCreative: true}
], "opaque");
ToolAPI.registerBlockMaterial(BlockID.greywacke, "stone");
Block.setDestroyTime(BlockID.greywacke, 1.7);
Block.setDestroyLevel("greywacke", 1);
Block.registerDropFunction("greywacke", function (coords, id, data, diggingLevel) {
    if (diggingLevel > 0) {
        return [[BlockID.greywackecobble, 1, 0]];
    }
    return [];
});
IDRegistry.genBlockID("komatiite");
Block.createBlock("komatiite", [
  {name: "Komatiite", texture: [["komatiite",0]], inCreative: true}
], "opaque");
ToolAPI.registerBlockMaterial(BlockID.komatiite, "stone");
Block.setDestroyTime(BlockID.komatiite, 2.1);
Block.setDestroyLevel("komatiite", 1);
Block.registerDropFunction("komatiite", function (coords, id, data, diggingLevel) {
    if (diggingLevel > 0) {
        return [[BlockID.komatiitecobble, 1, 0]];
    }
    return [];
});
IDRegistry.genBlockID("limestone");
Block.createBlock("limestone", [
  {name: "Limestone", texture: [["limestone",0]], inCreative: true}
], "opaque");
ToolAPI.registerBlockMaterial(BlockID.limestone, "stone");
Block.setDestroyTime(BlockID.limestone, 1.8);
Block.setDestroyLevel("limestone", 1);
Block.registerDropFunction("limestone", function (coords, id, data, diggingLevel) {
    if (diggingLevel > 0) {
        return [[BlockID.limestonecobble, 1, 0]];
    }
    return [];
});
IDRegistry.genBlockID("syenite");
Block.createBlock("syenite", [
  {name: "Syenite", texture: [["syenite",0]], inCreative: true}
], "opaque");
ToolAPI.registerBlockMaterial(BlockID.syenite, "stone");
Block.setDestroyTime(BlockID.syenite, 2);
Block.setDestroyLevel("syenite", 1);
Block.registerDropFunction("syenite", function (coords, id, data, diggingLevel) {
    if (diggingLevel > 0) {
        return [[BlockID.syenitecobble, 1, 0]];
    }
    return [];
});
IDRegistry.genBlockID("serpentinite");
Block.createBlock("serpentinite", [
  {name: "Serpentinite", texture: [["serpentinite",0]], inCreative: true}
], "opaque");
ToolAPI.registerBlockMaterial(BlockID.serpentinite, "stone");
Block.setDestroyTime(BlockID.serpentinite, 2);
Block.setDestroyLevel("serpentinite", 1);
Block.registerDropFunction("serpentinite", function (coords, id, data, diggingLevel) {
    if (diggingLevel > 0) {
        return [[BlockID.serpentinite, 1, 0]];
    }
    return [];
});
IDRegistry.genBlockID("rhyolite");
Block.createBlock("rhyolite", [
  {name: "Rhyolite", texture: [["rhyolite",0]], inCreative: true}
], "opaque");
ToolAPI.registerBlockMaterial(BlockID.rhyolite, "stone");
Block.setDestroyTime(BlockID.rhyolite, 2.3);
Block.setDestroyLevel("rhyolite", 1);
Block.registerDropFunction("rhyolite", function (coords, id, data, diggingLevel) {
    if (diggingLevel > 0) {
        return [[BlockID.rhyolitecobble, 1, 0]];
    }
    return [];
});



//stone cobble
IDRegistry.genBlockID("basaltcobble");
Block.createBlock("basaltcobble", [
  {name: "Basalt Cobblestone", texture: [["basaltcobble",0]], inCreative: true}
], "opaque");
ToolAPI.registerBlockMaterial(BlockID.basaltcobble, "stone");
Block.setDestroyTime(BlockID.basaltcobble, 2);
Block.setDestroyLevel("basaltcobble", 1);
IDRegistry.genBlockID("dacitecobble");
Block.createBlock("dacitecobble", [
  {name: "Dacite Cobblestone", texture: [["dacitecobble",0]], inCreative: true}
], "opaque");
ToolAPI.registerBlockMaterial(BlockID.dacitecobble, "stone");
Block.setDestroyTime(BlockID.dacitecobble, 2);
Block.setDestroyLevel("dacitecobble", 1);
IDRegistry.genBlockID("greywackecobble");
Block.createBlock("greywackecobble", [
  {name: "Greywacke Cobblestone", texture: [["greywackecobble",0]], inCreative: true}
], "opaque");
ToolAPI.registerBlockMaterial(BlockID.greywackecobble, "stone");
Block.setDestroyTime(BlockID.greywackecobble, 2);
Block.setDestroyLevel("greywackecobble", 1);
IDRegistry.genBlockID("komatiitecobble");
Block.createBlock("komatiitecobble", [
  {name: "Komatiite Cobblestone", texture: [["komatiitecobble",0]], inCreative: true}
], "opaque");
ToolAPI.registerBlockMaterial(BlockID.komatiitecobble, "stone");
Block.setDestroyTime(BlockID.komatiitecobble, 2);
Block.setDestroyLevel("komatiitecobble", 1);
IDRegistry.genBlockID("limestonecobble");
Block.createBlock("limestonecobble", [
  {name: "Limestone Cobblestone", texture: [["limestonecobble",0]], inCreative: true}
], "opaque");
ToolAPI.registerBlockMaterial(BlockID.limestonecobble, "stone");
Block.setDestroyTime(BlockID.limestonecobble, 2);
Block.setDestroyLevel("limestonecobble", 1);
IDRegistry.genBlockID("slatecobble");
Block.createBlock("slatecobble", [
  {name: "Slate Cobblestone", texture: [["slatecobble",0]], inCreative: true}
], "opaque");
ToolAPI.registerBlockMaterial(BlockID.slatecobble, "stone");
Block.setDestroyTime(BlockID.slatecobble, 2);
Block.setDestroyLevel("slatecobble", 1);
IDRegistry.genBlockID("slatebluecobble");
Block.createBlock("slatebluecobble", [
  {name: "Blue Slate Cobblestone", texture: [["slatebluecobble",0]], inCreative: true}
], "opaque");
ToolAPI.registerBlockMaterial(BlockID.slatebluecobble, "stone");
Block.setDestroyTime(BlockID.slatebluecobble, 2);
Block.setDestroyLevel("slatebluecobble", 1);
IDRegistry.genBlockID("syenitecobble");
Block.createBlock("syenitecobble", [
  {name: "Syenite Cobblestone", texture: [["syenitecobble",0]], inCreative: true}
], "opaque");
ToolAPI.registerBlockMaterial(BlockID.syenitecobble, "stone");
Block.setDestroyTime(BlockID.syenitecobble, 2);
Block.setDestroyLevel("syenitecobble", 1);
IDRegistry.genBlockID("rhyolitecobble");
Block.createBlock("rhyolitecobble", [
  {name: "Rhyolite Cobblestone", texture: [["rhyolitecobble",0]], inCreative: true}
], "opaque");
ToolAPI.registerBlockMaterial(BlockID.rhyolitecobble, "stone");
Block.setDestroyTime(BlockID.rhyolitecobble, 2);
Block.setDestroyLevel("rhyolitecobble", 1);


//stone bricks
IDRegistry.genBlockID("basaltbrick");
Block.createBlock("basaltbrick", [
  {name: "Basalt Stonebrick", texture: [["basaltbrick",0]], inCreative: true}
], "opaque");
ToolAPI.registerBlockMaterial(BlockID.basaltbrick, "stone");
Block.setDestroyTime(BlockID.basaltbrick, 1.5);
Block.setDestroyLevel("basaltbrick", 1);
IDRegistry.genBlockID("dacitebrick");
Block.createBlock("dacitebrick", [
  {name: "Dacite Stonebrick", texture: [["dacitebrick",0]], inCreative: true}
], "opaque");
ToolAPI.registerBlockMaterial(BlockID.dacitebrick, "stone");
Block.setDestroyTime(BlockID.dacitebrick, 1.5);
Block.setDestroyLevel("dacitebrick", 1);
IDRegistry.genBlockID("greywackebrick");
Block.createBlock("greywackebrick", [
  {name: "Greywacke Stonebrick", texture: [["greywackebrick",0]], inCreative: true}
], "opaque");
ToolAPI.registerBlockMaterial(BlockID.greywackebrick, "stone");
Block.setDestroyTime(BlockID.greywackebrick, 1.5);
Block.setDestroyLevel("greywackebrick", 1);
IDRegistry.genBlockID("komatiitebrick");
Block.createBlock("komatiitebrick", [
  {name: "Komatiite Stonebrick", texture: [["komatiitebrick",0]], inCreative: true}
], "opaque");
ToolAPI.registerBlockMaterial(BlockID.komatiitebrick, "stone");
Block.setDestroyTime(BlockID.komatiitebrick, 1.5);
Block.setDestroyLevel("komatiitebrick", 1);
IDRegistry.genBlockID("slatebluebrick");
Block.createBlock("slatebluebrick", [
  {name: "Blue Slate Stonebrick", texture: [["slatebluebrick",0]], inCreative: true}
], "opaque");
ToolAPI.registerBlockMaterial(BlockID.slatebluebrick, "stone");
Block.setDestroyTime(BlockID.slatebluebrick, 1.5);
Block.setDestroyLevel("slatebluebrick", 1);
IDRegistry.genBlockID("slatebrick");
Block.createBlock("slatebrick", [
  {name: "Slate Stonebrick", texture: [["slatebrick",0]], inCreative: true}
], "opaque");
ToolAPI.registerBlockMaterial(BlockID.slatebrick, "stone");
Block.setDestroyTime(BlockID.slatebrick, 1.5);
Block.setDestroyLevel("slatebrick", 1);
IDRegistry.genBlockID("limestonebrick");
Block.createBlock("limestonebrick", [
  {name: "Limestone Stonebrick", texture: [["limestonebrick",0]], inCreative: true}
], "opaque");
ToolAPI.registerBlockMaterial(BlockID.limestonebrick, "stone");
Block.setDestroyTime(BlockID.limestonebrick, 1.5);
Block.setDestroyLevel("limestonebrick", 1);
IDRegistry.genBlockID("syenitebrick");
Block.createBlock("syenitebrick", [
  {name: "Syenite Stonebrick", texture: [["syenitebrick",0]], inCreative: true}
], "opaque");
ToolAPI.registerBlockMaterial(BlockID.syenitebrick, "stone");
Block.setDestroyTime(BlockID.syenitebrick, 1.5);
Block.setDestroyLevel("syenitebrick", 1);
IDRegistry.genBlockID("rhyolitebrick");
Block.createBlock("rhyolitebrick", [
  {name: "Rhyolite Stonebrick", texture: [["rhyolitebrick",0]], inCreative: true}
], "opaque");
ToolAPI.registerBlockMaterial(BlockID.rhyolitebrick, "stone");
Block.setDestroyTime(BlockID.rhyolitebrick, 1.5);
Block.setDestroyLevel("rhyolitebrick", 1);



//stone chiseled
IDRegistry.genBlockID("rhyolitecarved");
Block.createBlock("rhyolitecarved", [
  {name: "Chiseled Rhyolite Stonebrick", texture: [["rhyolitecarved",0]], inCreative: true}
], "opaque");
ToolAPI.registerBlockMaterial(BlockID.rhyolitecarved, "stone");
Block.setDestroyTime(BlockID.rhyolitecarved, 1.5);
Block.setDestroyLevel("rhyolitecarved", 1);
IDRegistry.genBlockID("slatecarved");
Block.createBlock("slatecarved", [
  {name: "Chiseled Slate Stonebrick", texture: [["slatecarved",0]], inCreative: true}
], "opaque");
ToolAPI.registerBlockMaterial(BlockID.slatecarved, "stone");
Block.setDestroyTime(BlockID.slatecarved, 1.5);
Block.setDestroyLevel("slatecarved", 1);
IDRegistry.genBlockID("slatebluecarved");
Block.createBlock("slatebluecarved", [
  {name: "Chiseled Blue Slate Stonebrick", texture: [["slatebluecarved",0]], inCreative: true}
], "opaque");
ToolAPI.registerBlockMaterial(BlockID.slatebluecarved, "stone");
Block.setDestroyTime(BlockID.slatebluecarved, 1.5);
Block.setDestroyLevel("slatebluecarved", 1);
IDRegistry.genBlockID("basaltcarved");
Block.createBlock("basaltcarved", [
  {name: "Chiseled Basalt Stonebrick", texture: [["basaltcarved",0]], inCreative: true}
], "opaque");
ToolAPI.registerBlockMaterial(BlockID.basaltcarved, "stone");
Block.setDestroyTime(BlockID.basaltcarved, 1.5);
Block.setDestroyLevel("basaltcarved", 1);
IDRegistry.genBlockID("limestonecarved");
Block.createBlock("limestonecarved", [
  {name: "Chiseled Limestone Stonebrick", texture: [["limestonecarved",0]], inCreative: true}
], "opaque");
ToolAPI.registerBlockMaterial(BlockID.limestonecarved, "stone");
Block.setDestroyTime(BlockID.limestonecarved, 1.5);
Block.setDestroyLevel("limestonecarved", 1);
IDRegistry.genBlockID("dacitecarved");
Block.createBlock("dacitecarved", [
  {name: "Chiseled Dacite Stonebrick", texture: [["dacitecarved",0]], inCreative: true}
], "opaque");
ToolAPI.registerBlockMaterial(BlockID.dacitecarved, "stone");
Block.setDestroyTime(BlockID.dacitecarved, 1.5);
Block.setDestroyLevel("dacitecarved", 1);
IDRegistry.genBlockID("komatiitecarved");
Block.createBlock("komatiitecarved", [
  {name: "Chiseled Komatiite Stonebrick", texture: [["komatiitecarved",0]], inCreative: true}
], "opaque");
ToolAPI.registerBlockMaterial(BlockID.komatiitecarved, "stone");
Block.setDestroyTime(BlockID.komatiitecarved, 1.5);
Block.setDestroyLevel("komatiitecarved", 1);
IDRegistry.genBlockID("greywackecarved");
Block.createBlock("greywackecarved", [
  {name: "Chiseled Greywacke Stonebrick", texture: [["greywackecarved",0]], inCreative: true}
], "opaque");
ToolAPI.registerBlockMaterial(BlockID.greywackecarved, "stone");
Block.setDestroyTime(BlockID.greywackecarved, 1.5);
Block.setDestroyLevel("greywackecarved", 1);
IDRegistry.genBlockID("syenitecarved");
Block.createBlock("syenitecarved", [
  {name: "Chiseled Syenite Stonebrick", texture: [["syenitecarved",0]], inCreative: true}
], "opaque");
ToolAPI.registerBlockMaterial(BlockID.syenitecarved, "stone");
Block.setDestroyTime(BlockID.syenitecarved, 1.5);
Block.setDestroyLevel("syenitecarved", 1);

//Recipes
Callback.addCallback("PostLoaded", function () {
  Recipes.addFurnace(BlockID.slatebluecobble, BlockID.slateblue, 0);
});
Callback.addCallback("PostLoaded", function () {
  Recipes.addFurnace(BlockID.basaltcobble, BlockID.basalt, 0);
});
Callback.addCallback("PostLoaded", function () {
  Recipes.addFurnace(BlockID.dacitecobble, BlockID.dacite, 0);
});
Callback.addCallback("PostLoaded", function () {
  Recipes.addFurnace(BlockID.greywackecobble, BlockID.greywacke, 0);
});
Callback.addCallback("PostLoaded", function () {
  Recipes.addFurnace(BlockID.limestonecobble, BlockID.limestone, 0);
});
Callback.addCallback("PostLoaded", function () {
  Recipes.addFurnace(BlockID.komatiitecobble, BlockID.komatiite, 0);
});
Callback.addCallback("PostLoaded", function () {
  Recipes.addFurnace(BlockID.slatecobble, BlockID.slate, 0);
});
Callback.addCallback("PostLoaded", function () {
  Recipes.addFurnace(BlockID.rhyolitecobble, BlockID.rhyolite, 0);
});
Callback.addCallback("PostLoaded", function () {
  Recipes.addFurnace(BlockID.syenitecobble, BlockID.syenite, 0);
});

Callback.addCallback("PostLoaded", function () {
  Recipes.addShaped({id: BlockID.slatebluebrick, count: 4, data: 0}, [
    "xx ", "xx ", "   "], [
      'x', BlockID.slateblue, 0]);
});
Callback.addCallback("PostLoaded", function () {
  Recipes.addShaped({id: BlockID.basaltbrick, count: 4, data: 0}, [
    "xx ", "xx ", "   "], [
      'x', BlockID.basalt, 0]);
});
Callback.addCallback("PostLoaded", function () {
  Recipes.addShaped({id: BlockID.dacitebrick, count: 4, data: 0}, [
    "xx ", "xx ", "   "], [
      'x', BlockID.dacite, 0]);
});
Callback.addCallback("PostLoaded", function () {
  Recipes.addShaped({id: BlockID.greywackebrick, count: 4, data: 0}, [
    "xx ", "xx ", "   "], [
      'x', BlockID.greywacke, 0]);
});
Callback.addCallback("PostLoaded", function () {
  Recipes.addShaped({id: BlockID.komatiitebrick, count: 4, data: 0}, [
    "xx ", "xx ", "   "], [
      'x', BlockID.komatiite, 0]);
});
Callback.addCallback("PostLoaded", function () {
  Recipes.addShaped({id: BlockID.slatebrick, count: 4, data: 0}, [
    "xx ", "xx ", "   "], [
      'x', BlockID.slate, 0]);
});
Callback.addCallback("PostLoaded", function () {
  Recipes.addShaped({id: BlockID.limestonebrick, count: 4, data: 0}, [
    "xx ", "xx ", "   "], [
      'x', BlockID.limestone, 0]);
});
Callback.addCallback("PostLoaded", function () {
  Recipes.addShaped({id: BlockID.syenitebrick, count: 4, data: 0}, [
    "xx ", "xx ", "   "], [
      'x', BlockID.syenite, 0]);
});
Callback.addCallback("PostLoaded", function () {
  Recipes.addShaped({id: BlockID.rhyolitebrick, count: 4, data: 0}, [
    "xx ", "xx ", "   "], [
      'x', BlockID.rhyolite, 0]);
});

Callback.addCallback("PostLoaded", function () {
  Recipes.addShaped({id: BlockID.limestonecarved, count: 4, data: 0}, [
    "xx ", "xx ", "   "], [
      'x', BlockID.limestonebrick, 0]);
});
Callback.addCallback("PostLoaded", function () {
  Recipes.addShaped({id: BlockID.greywackecarved, count: 4, data: 0}, [
    "xx ", "xx ", "   "], [
      'x', BlockID.greywackebrick, 0]);
});
Callback.addCallback("PostLoaded", function () {
  Recipes.addShaped({id: BlockID.dacitecarved, count: 4, data: 0}, [
    "xx ", "xx ", "   "], [
      'x', BlockID.dacitebrick, 0]);
});
Callback.addCallback("PostLoaded", function () {
  Recipes.addShaped({id: BlockID.basaltcarved, count: 4, data: 0}, [
    "xx ", "xx ", "   "], [
      'x', BlockID.basaltbrick, 0]);
});
Callback.addCallback("PostLoaded", function () {
  Recipes.addShaped({id: BlockID.komatiitecarved, count: 4, data: 0}, [
    "xx ", "xx ", "   "], [
      'x', BlockID.komatiitebrick, 0]);
});
Callback.addCallback("PostLoaded", function () {
  Recipes.addShaped({id: BlockID.slatecarved, count: 4, data: 0}, [
    "xx ", "xx ", "   "], [
      'x', BlockID.slatebrick, 0]);
});
Callback.addCallback("PostLoaded", function () {
  Recipes.addShaped({id: BlockID.slatebluecarved, count: 4, data: 0}, [
    "xx ", "xx ", "   "], [
      'x', BlockID.slatebluebrick, 0]);
});
Callback.addCallback("PostLoaded", function () {
  Recipes.addShaped({id: BlockID.rhyolitecarved, count: 4, data: 0}, [
    "xx ", "xx ", "   "], [
      'x', BlockID.rhyolitebrick, 0]);
});
Callback.addCallback("PostLoaded", function () {
  Recipes.addShaped({id: BlockID.syenitecarved, count: 4, data: 0}, [
    "xx ", "xx ", "   "], [
      'x', BlockID.syenitebrick, 0]);
});




// file: ITEMS/craftableitems.js

//Cave Plus Mod for MC Bedrock - InnerCore Version
//This is the developer version of the script! Don´t change or use it.

IDRegistry.genItemID("bismuthingot2");
Item.createItem("bismuthingot2", "Crystallized Bismuth Ingot",
{name: "bismuthcrystallizedingot", meta: 0}, {stack: 64});
IDRegistry.genItemID("bismuthmelted");
Item.createItem("bismuthmelted", "Melted Bismuth",
{name: "bismuthmelted", meta: 0}, {stack: 64});
IDRegistry.genItemID("coppermelted");
Item.createItem("coppermelted", "Melted Copper",
{name: "coppermelted", meta: 0}, {stack: 64});
IDRegistry.genItemID("tinmelted");
Item.createItem("tinmelted", "Melted Tin",
{name: "tinmelted", meta: 0}, {stack: 64});
IDRegistry.genItemID("zincmelted");
Item.createItem("zincmelted", "Melted Zinc",
{name: "zincmelted", meta: 0}, {stack: 64});
IDRegistry.genItemID("bronzeingot");
Item.createItem("bronzeingot", "Bronze Ingot",
{name: "bronzeingot", meta: 0}, {stack: 64});
IDRegistry.genItemID("brassingot");
Item.createItem("brassingot", "Brass Ingot",
{name: "brassingot", meta: 0}, {stack: 64});

Callback.addCallback("PostLoaded", function () {
  Recipes.addFurnace(ItemID.bismuthingot, ItemID.bismuthmelted, 0);
});
Callback.addCallback("PostLoaded", function () {
  Recipes.addFurnace(ItemID.copperingot, ItemID.coppermelted, 0);
});
Callback.addCallback("PostLoaded", function () {
  Recipes.addFurnace(ItemID.tinnugget, ItemID.tinmelted, 0);
});
Callback.addCallback("PostLoaded", function () {
  Recipes.addFurnace(ItemID.zincnugget, ItemID.zincmelted, 0);
});

Callback.addCallback("PostLoaded", function () {
  Recipes.addShaped({id: ItemID.bronzeingot, count: 1, data: 0}, [
    "aaa", "bbb", " a "], [
      'a', ItemID.coppermelted, 0, 'b', ItemID.tinmelted, 0]);
});
Callback.addCallback("PostLoaded", function () {
  Recipes.addShaped({id: ItemID.brassingot, count: 1, data: 0}, [
    "aaa", "bbb", " a "], [
      'a', ItemID.coppermelted, 0, 'b', ItemID.zincmelted, 0]);
});
Callback.addCallback("PostLoaded", function () {
  Recipes.addShaped({id: ItemID.bismuthingot2, count: 1, data: 0}, [
    "   ", "aaa", "   "], [
      'a', ItemID.bismuthmelted, 0]);
});




// file: ITEMS/ivory.js

//Cave Plus Mod for MC Bedrock - InnerCore Version
//This is the developer version of the script! Don´t change or use it.

//ivory
IDRegistry.genItemID("ivory");
Item.createItem("ivory", "Ivory",
{name: "ivory", meta: 0}, {stack: 64});
IDRegistry.genItemID("ivoryrod");
Item.createItem("ivoryrod", "Ivory Rod",
{name: "ivoryrod", meta: 0}, {stack: 64});
IDRegistry.genBlockID("ivoryblock");
Block.createBlock("ivoryblock", [
  {name: "Ivory Block", texture: [["ivoryblock",0]], inCreative: true}
], "opaque");
ToolAPI.registerBlockMaterial(BlockID.ivoryblock, "stone");
Block.setDestroyTime(BlockID.ivoryblock, 2.5);
Block.setDestroyLevel("ivoryblock", 1);
IDRegistry.genBlockID("ivorypillar");
Block.createBlock("ivorypillar", [
  {name: "Ivory Pillar", texture: [["ivorypillartop",0],["ivorypillartop",0],["ivorypillar",0],
  ["ivorypillar",0],["ivorypillar",0],["ivorypillar",0]], inCreative: true}], "opaque");
ToolAPI.registerBlockMaterial(BlockID.ivorypillar, "stone");
Block.setDestroyTime(BlockID.ivorypillar, 2.5);
Block.setDestroyLevel("ivorypillar", 1);
Callback.addCallback("PostLoaded", function () {
  Recipes.addShaped({id: BlockID.ivoryblock, count: 1, data: 0}, [
    "xxx", "xxx", "xxx"], [
      'x', ItemID.ivory, 0]);
});
Callback.addCallback("PostLoaded", function () {
  Recipes.addShaped({id: BlockID.ivorypillar, count: 2, data: 0}, [
    "x", "x", " "], [
      'x', BlockID.ivoryblock, 0]);
});
Callback.addCallback("PostLoaded", function () {
  Recipes.addShaped({id: ItemID.ivoryrod, count: 1, data: 0}, [
    "x", "x", " "], [
      'x', ItemID.ivory, 0]);
});
ToolAPI.addToolMaterial("ivory", {
  durability: 400, level: 3, efficiency: 28, damage: 7, enchantability: 14});
IDRegistry.genItemID("ivorysword");
IDRegistry.genItemID("ivorypickaxe");
IDRegistry.genItemID("ivoryshovel");
IDRegistry.genItemID("ivoryaxe");
IDRegistry.genItemID("ivoryhoe");
Item.createItem("ivorysword", "Ivory Sword",
{name: "ivorysword", meta: 0}, {stack: 1});
Item.createItem("ivorypickaxe", "Ivory Pickaxe",
{name: "ivorypickaxe", meta: 0}, {stack: 1});
Item.createItem("ivoryshovel", "Ivory Shovel",
{name: "ivoryshovel", meta: 0}, {stack: 1});
Item.createItem("ivoryaxe", "Ivory Axe",
{name: "ivoryaxe", meta: 0}, {stack: 1});
Item.createItem("ivoryhoe", "Ivory Hoe",
{name: "ivoryhoe", meta: 0}, {stack: 1});
ToolAPI.setTool(ItemID.ivorysword, "ivory", ToolType.sword);
ToolAPI.setTool(ItemID.ivoryshovel, "ivory", ToolType.shovel);
ToolAPI.setTool(ItemID.ivorypickaxe, "ivory", ToolType.pickaxe);
ToolAPI.setTool(ItemID.ivoryaxe, "ivory", ToolType.axe);
ToolAPI.setTool(ItemID.ivoryhoe, "ivory", ToolType.hoe);
Callback.addCallback("PostLoaded", function () {
  Recipes.addShaped({id: ItemID.ivorysword, count: 1, data: 0}, [
    "a", "a", "b"], [
      'a', ItemID.ivory, 0, 'b', ItemID.ivoryrod, 0]);
});
Callback.addCallback("PostLoaded", function () {
  Recipes.addShaped({id: ItemID.ivoryshovel, count: 1, data: 0}, [
    "a", "b", "b"], [
      'a', ItemID.ivory, 0, 'b', ItemID.ivoryrod, 0]);
});
Callback.addCallback("PostLoaded", function () {
  Recipes.addShaped({id: ItemID.ivoryaxe, count: 1, data: 0}, [
    "aa", "ab", " b"], [
      'a', ItemID.ivory, 0, 'b', ItemID.ivoryrod, 0]);
});
Callback.addCallback("PostLoaded", function () {
  Recipes.addShaped({id: ItemID.ivorypickaxe, count: 1, data: 0}, [
    "aaa", " b ", " b "], [
      'a', ItemID.ivory, 0, 'b', ItemID.ivoryrod, 0]);
});
Callback.addCallback("PostLoaded", function () {
  Recipes.addShaped({id: ItemID.ivoryhoe, count: 1, data: 0}, [
    "aa", " b", " b"], [
      'a', ItemID.ivory, 0, 'b', ItemID.ivoryrod, 0]);
});
Callback.addCallback("tick", function(){
	var item = Player.getCarriedItem()
  var pos = Player.getPosition()
	if(item.id == ItemID.ivorysword){
		 Entity.addEffect(Player.get(), 10, 0, 50, true, false);
		}
		});
Callback.addCallback("tick", function(){
	var item = Player.getCarriedItem()
  var pos = Player.getPosition()
	if(item.id == ItemID.ivoryshovel){
		 Entity.addEffect(Player.get(), 10, 0, 50, true, false);
		}
		});
Callback.addCallback("tick", function(){
	var item = Player.getCarriedItem()
  var pos = Player.getPosition()
	if(item.id == ItemID.ivorypickaxe){
		 Entity.addEffect(Player.get(), 10, 0, 50, true, false);
		}
		});
Callback.addCallback("tick", function(){
	var item = Player.getCarriedItem()
  var pos = Player.getPosition()
	if(item.id == ItemID.ivoryhoe){
		 Entity.addEffect(Player.get(), 10, 0, 50, false, false);
		}
		});
Callback.addCallback("tick", function(){
	var item = Player.getCarriedItem()
  var pos = Player.getPosition()
	if(item.id == ItemID.ivoryaxe){
		 Entity.addEffect(Player.get(), 10, 0, 50, false, false);
		}
		});




// file: ITEMS/mushroom.js

//mushroom Cave
var MUSH = Block.createSpecialType({
	base: 59,
});
IDRegistry.genBlockID("mushroomcave");
Block.createBlockWithRotation("mushroomcave", [{name: "CMushroom", texture: [["mushroom_cave", 0], ["mushroom_cave", 0],["mushroom_cave", 0], ["mushroom_cave", 0], ["mushroom_cave", 0], ["mushroom_cave", 0]], inCreative: true},],MUSH);

Block.setBlockShape(BlockID.mushroomcave, {x: 0.43, y: 0, z: 0.43}, {x: 0.56, y: 0.50, z: 0.56});

IDRegistry.genItemID("mushroomcaveitem");
Item.createItem("mushroomcaveitem", "Cave Mushroom",
{name: "mushroomitem", meta: 0}, {stack: 64});

Block.registerDropFunction("mushroomcave", function (coords, id, data, diggingLevel) {
     {
        return [[ItemID.mushroomcaveitem, 0]];
    }
    return [];
});
BlockRenderer.addRenderCallback(BlockID.mushroomcave, function(api, coords, block) {
var box = BlockID.mushroomcave;

api.renderBoxId(coords.x, coords.y, coords.z, .497, 0, 0.438, .507, 0.25, .563, box, 0);
api.renderBoxId(coords.x, coords.y, coords.z, 0.438, 0, .497, .563, 0.25, .507, box, 0);

api.renderBoxId(coords.x, coords.y, coords.z, .497, 0.25, 0.25, .507, 0.375, .75, box, 0);
api.renderBoxId(coords.x, coords.y, coords.z, 0.25, 0.25, .497, .75, 0.375, .507, box, 0);

api.renderBoxId(coords.x, coords.y, coords.z, .497, 0.375, 0.313, .507, 0.438, .688, box, 0);
api.renderBoxId(coords.x, coords.y, coords.z, 0.313, 0.375, .497, .688, 0.438, .507, box, 0);

api.renderBoxId(coords.x, coords.y, coords.z, .497, 0.438, 0.375, .507, 0.50, .625, box, 0);
api.renderBoxId(coords.x, coords.y, coords.z, 0.375, 0.438, .497, .625, 0.50, .507, box, 0);

});
BlockRenderer.enableCustomRender(BlockID.mushroomcave);

Callback.addCallback("GenerateChunk", function (chunkX, chunkZ) {

    let coords = GenerationUtils.randomCoords(chunkX, chunkZ, 1, 75);
    if(Math.random() < 2.15){
    coords = GenerationUtils.findSurface(coords.x, coords.y, coords.z);

    if (World.getBlock(coords.x, coords.y + 1, coords.z).id === 0 && World.getBlock(coords.x, coords.y, coords.z).id === 1) {
        World.setBlock(coords.x,coords.y + 1,  coords.z, BlockID.mushroomcave, 0);
}}});

Callback.addCallback("ItemUse", function (coords, item, block) {
if (World.getBlock(coords.x, coords.y + 1, coords.z).id === 0 && item.id==ItemID.mushroomcaveitem){
World.setBlock(coords.x, coords.y + 1, coords.z, BlockID.mushroomcave, 0);
if (World.getBlock(coords.x, coords.y, coords.z).id === BlockID.mushroomcave){
  World.setBlock(coords.x, coords.y + 1, coords.z, 0, 0);
}
}});


var GLOWMUSH = Block.createSpecialType({
	base: 59,
  lightlevel: 13,
  lightopacity: 0,
  opaque: false
});
IDRegistry.genBlockID("mushroomglow");
Block.createBlockWithRotation("mushroomglow", [{name: "GMushroom", texture: [["mushroomcaveglow", 0], ["mushroomcaveglow", 0],["mushroomcaveglow", 0],
["mushroomcaveglow", 0], ["mushroomcaveglow", 0], ["mushroomcaveglow", 0]], inCreative: true},],GLOWMUSH);

Block.setBlockShape(BlockID.mushroomglow, {x: 0.43, y: 0, z: 0.43}, {x: 0.56, y: 0.50, z: 0.56});

IDRegistry.genItemID("mushroomglowitem");
Item.createItem("mushroomglowitem", "Glowing Mushroom",
{name: "mushroomglowitem", meta: 0}, {stack: 64});

Block.registerDropFunction("mushroomglow", function (coords, id, data, diggingLevel) {
     {
        return [[ItemID.mushroomglowitem, 0]];
    }
    return [];
});
BlockRenderer.addRenderCallback(BlockID.mushroomglow, function(api, coords, block) {
var box1 = BlockID.mushroomglow;

api.renderBoxId(coords.x, coords.y, coords.z, .497, 0, 0.438, .507, 0.25, .563, box1, 0);
api.renderBoxId(coords.x, coords.y, coords.z, 0.438, 0, .497, .563, 0.25, .507, box1, 0);

api.renderBoxId(coords.x, coords.y, coords.z, .497, 0.25, 0.25, .507, 0.375, .75, box1, 0);
api.renderBoxId(coords.x, coords.y, coords.z, 0.25, 0.25, .497, .75, 0.375, .507, box1, 0);

api.renderBoxId(coords.x, coords.y, coords.z, .497, 0.375, 0.313, .507, 0.438, .688, box1, 0);
api.renderBoxId(coords.x, coords.y, coords.z, 0.313, 0.375, .497, .688, 0.438, .507, box1, 0);

api.renderBoxId(coords.x, coords.y, coords.z, .497, 0.438, 0.375, .507, 0.50, .625, box1, 0);
api.renderBoxId(coords.x, coords.y, coords.z, 0.375, 0.438, .497, .625, 0.50, .507, box1, 0);

});
BlockRenderer.enableCustomRender(BlockID.mushroomglow);

Callback.addCallback("GenerateChunk", function (chunkX, chunkZ) {

    let coords = GenerationUtils.randomCoords(chunkX, chunkZ, 1, 75);
    if(Math.random() < 2.15){
    coords = GenerationUtils.findSurface(coords.x, coords.y, coords.z);

    if (World.getBlock(coords.x, coords.y + 1, coords.z).id === 0 && World.getBlock(coords.x, coords.y, coords.z).id === 1) {
        World.setBlock(coords.x,coords.y + 1,  coords.z, BlockID.mushroomglow, 0);
}}});

Callback.addCallback("ItemUse", function (coords, item, block) {
if (World.getBlock(coords.x, coords.y + 1, coords.z).id === 0 && item.id==ItemID.mushroomglowitem){
World.setBlock(coords.x, coords.y + 1, coords.z, BlockID.mushroomglow, 0);
if (World.getBlock(coords.x, coords.y, coords.z).id === BlockID.mushroomglow){
  World.setBlock(coords.x, coords.y + 1, coords.z, 0, 0);
}
}});

IDRegistry.genItemID("cavesoup");
Item.createFoodItem("cavesoup", "Cave Mushroom Soup", {name: "cavesoup", meta: 0}, {food: 9});
/*Callback.addCallback("FoodEaten", function (food, satRatio) {
if (food.id==ItemID.cavesoup){
Player.setCarriedItem(281, 1, 0);
}});*/
Callback.addCallback("PostLoaded", function () {
  Recipes.addShaped({id: ItemID.cavesoup, count: 1, data: 0}, [
    "   ", "cd ", "xab"], [
      'x', 281, 0, 'a', ItemID.mushroomcaveitem, 0, 'b', ItemID.mushroomglowitem, 0, 'c', 40, 0, 'd', 39, 0]);
});




// file: ITEMS/ocre.js

//Cave Plus Mod for MC Bedrock - InnerCore Version
//This is the developer version of the script! Don´t change or use it.
//OCRE
IDRegistry.genItemID("ocremud");
Item.createItem("ocremud", "Ocre Mud",
{name: "ocremud", meta: 0}, {stack: 64});
IDRegistry.genBlockID("ocredirt");
Block.createBlock("ocredirt", [
  {name: "Ocre Dirt", texture: [["ocredirtred",0]], inCreative: true}
], "opaque");
ToolAPI.registerBlockMaterial(BlockID.ocredirt, "dirt");
Block.setDestroyTime(BlockID.ocredirt, 0.3);
Block.setDestroyLevel("ocredirt", 0);
Block.registerDropFunction("ocredirt", function (coords, id, data, diggingLevel) {
    {return [[ItemID.ocremud, 1 + Math.random() * 3, 0]];
      }  return [];
});
IDRegistry.genBlockID("ocrebricks");
Block.createBlock("ocrebricks", [
  {name: "Ocre Bricks", texture: [["ocrebricks",0]], inCreative: true}
], "opaque");
ToolAPI.registerBlockMaterial(BlockID.ocrebricks, "dirt");
Block.setDestroyTime(BlockID.ocrebricks, 0.5);
Block.setDestroyLevel("ocrebricks", 0);
IDRegistry.genItemID("ocresword");
Item.createItem("ocresword", "Ocre Sword",
{name: "ocresword", meta: 0}, {stack: 1});
IDRegistry.genItemID("ocreaxe");
Item.createItem("ocreaxe", "Ocre Axe",
{name: "ocreaxe", meta: 0}, {stack: 1});
IDRegistry.genItemID("ocreshovel");
Item.createItem("ocreshovel", "Ocre Shovel",
{name: "ocreshovel", meta: 0}, {stack: 1});
IDRegistry.genItemID("ocrepickaxe");
Item.createItem("ocrepickaxe", "Ocre Pickaxe",
{name: "ocrepickaxe", meta: 0}, {stack: 1});
IDRegistry.genItemID("ocrehoe");
Item.createItem("ocrehoe", "Ocre Hoe",
{name: "ocrehoe", meta: 0}, {stack: 1});
ToolAPI.addToolMaterial("ocre", {
  durability: 75, level: 1, efficiency: 1, damage: 3, enchantability: 0});
ToolAPI.setTool(ItemID.ocresword, "ocre", ToolType.sword);
ToolAPI.setTool(ItemID.ocreshovel, "ocre", ToolType.shovel);
ToolAPI.setTool(ItemID.ocrepickaxe, "ocre", ToolType.pickaxe);
ToolAPI.setTool(ItemID.ocreaxe, "ocre", ToolType.axe);
ToolAPI.setTool(ItemID.ocrehoe, "ocre", ToolType.hoe);

Callback.addCallback("PostLoaded", function () {
  Recipes.addShaped({id: BlockID.ocredirt, count: 1, data: 0}, [
    "xx", "xx", "  "], [
      'x', ItemID.ocremud, 0]);
});
Callback.addCallback("PostLoaded", function () {
  Recipes.addShaped({id: BlockID.ocrebricks, count: 4, data: 0}, [
    "xx", "xx", "  "], [
      'x', BlockID.ocredirthard, 0]);
});
Callback.addCallback("PostLoaded", function () {
  Recipes.addShaped({id: ItemID.ocresword, count: 1, data: 0}, [
    "x", "x", "a"], [
      'x', ItemID.ocremud, 0, 'a', 280, 0]);
});
Callback.addCallback("PostLoaded", function () {
  Recipes.addShaped({id: ItemID.ocreshovel, count: 1, data: 0}, [
    "x", "a", "a"], [
      'x', ItemID.ocremud, 0, 'a', 280, 0]);
});
Callback.addCallback("PostLoaded", function () {
  Recipes.addShaped({id: ItemID.ocrehoe, count: 1, data: 0}, [
    "xx", " a", " a"], [
      'x', ItemID.ocremud, 0, 'a', 280, 0]);
});
Callback.addCallback("PostLoaded", function () {
  Recipes.addShaped({id: ItemID.ocreaxe, count: 1, data: 0}, [
    "xx", "xa", " a"], [
      'x', ItemID.ocremud, 0, 'a', 280, 0]);
});
Callback.addCallback("PostLoaded", function () {
  Recipes.addShaped({id: ItemID.ocrepickaxe, count: 1, data: 0}, [
    "xxx", " a ", " a "], [
      'x', ItemID.ocremud, 0, 'a', 280, 0]);
});
Callback.addCallback("PostLoaded", function () {
  Recipes.addFurnace(ItemID.ocremud, 351, 1);
});

IDRegistry.genBlockID("ocredirthard");
Block.createBlock("ocredirthard", [
  {name: "Hardened Ocre Dirt", texture: [["ocredirtredhard",0]], inCreative: true}
], "opaque");
ToolAPI.registerBlockMaterial(BlockID.ocredirt, "stone");
Block.setDestroyTime(BlockID.ocredirt, 1.7);
Block.setDestroyLevel("ocredirt", 0);

Callback.addCallback("PostLoaded", function () {
  Recipes.addFurnace(BlockID.ocredirt, BlockID.ocredirthard, 0);
});

//ocre generator in fossil generator due to bug




// file: ITEMS/oredrops.js

//Cave Plus Mod for MC Bedrock - InnerCore Version
//This is the developer version of the script! Don´t change or use it.

IDRegistry.genItemID("copperingot");
IDRegistry.genItemID("zincnugget");
IDRegistry.genItemID("tinnugget");
IDRegistry.genItemID("titaniumingot");
IDRegistry.genItemID("lithiumdust");
IDRegistry.genItemID("bismuthingot");
IDRegistry.genItemID("salt");
IDRegistry.genItemID("plumbumingot");
IDRegistry.genItemID("amber");
IDRegistry.genItemID("sapphire");
IDRegistry.genItemID("ruby");

Item.createItem("copperingot", "Copper Ingot",
{name: "copperingot", meta: 0}, {stack: 64});
Item.createItem("zincnugget", "Zinc Nugget",
{name: "zincnugget", meta: 0}, {stack: 64});
Item.createItem("tinnugget", "Tin Nugget",
{name: "tinnugget", meta: 0}, {stack: 64});
Item.createItem("titaniumingot", "Titanium Ingot",
{name: "titaniumingot", meta: 0}, {stack: 64});
Item.createItem("lithiumdust", "Lithium Dust",
{name: "lithiumdustnew", meta: 0}, {stack: 64});
Item.createItem("bismuthingot", "Bismuth Ingot",
{name: "bismuthingot", meta: 0}, {stack: 64});
Item.createItem("salt", "Salt",
{name: "salt", meta: 0}, {stack: 64});
Item.createItem("plumbumingot", "Plumbum Ingot",
{name: "plumbumingot", meta: 0}, {stack: 16});
Item.createItem("amber", "Amber",
{name: "amber", meta: 0}, {stack: 64});
Item.createItem("sapphire", "Sapphire",
{name: "sapphire", meta: 0}, {stack: 64});
Item.createItem("ruby", "Ruby",
{name: "ruby", meta: 0}, {stack: 64});
Callback.addCallback("PostLoaded", function () {
  Recipes.addFurnace(BlockID.copperore, ItemID.copperingot, 0);
});
Callback.addCallback("PostLoaded", function () {
  Recipes.addFurnace(BlockID.titaniumore, ItemID.titaniumingot, 0);
});
Callback.addCallback("PostLoaded", function () {
  Recipes.addFurnace(BlockID.bismuthore, ItemID.bismuthingot, 0);
});
Callback.addCallback("PostLoaded", function () {
  Recipes.addFurnace(BlockID.plumbumore, ItemID.plumbumingot, 0);
});




// file: ITEMS/recipesspecial.js

//Cave Plus Mod for MC Bedrock - InnerCore Version
//This is the developer version of the script! Don´t change or use it.

//AMBER SPECIAL RECIPES
Callback.addCallback("PostLoaded", function () {
  Recipes.addShaped({id: 383, count: 2, data: 10}, [
    " x ", "xax", " x "], [
      'x', ItemID.amber, 0, 'a', 288, 0]);
});
Callback.addCallback("PostLoaded", function () {
  Recipes.addShaped({id: 383, count: 2, data: 11}, [
    " x ", "xax", " x "], [
      'x', ItemID.amber, 0, 'a', 325, 1]);
});
Callback.addCallback("PostLoaded", function () {
  Recipes.addShaped({id: 383, count: 2, data: 14}, [
    " x ", "xax", " x "], [
      'x', ItemID.amber, 0, 'a', 352, 0]);
});
Callback.addCallback("PostLoaded", function () {
  Recipes.addShaped({id: 383, count: 2, data: 15}, [
    " x ", "xax", " x "], [
      'x', ItemID.amber, 0, 'a', 388, 0]);
});
Callback.addCallback("PostLoaded", function () {
  Recipes.addShaped({id: 383, count: 2, data: 16}, [
    " x ", "xax", " x "], [
      'x', ItemID.amber, 0, 'a', 40, 0]);
});
Callback.addCallback("PostLoaded", function () {
  Recipes.addShaped({id: 383, count: 2, data: 17}, [
    " x ", "xax", " x "], [
      'x', ItemID.amber, 0, 'a', 351, 0]);
});

//salted dishes
IDRegistry.genItemID("beetrootsalted");
Item.createFoodItem("beetrootsalted", "Delicious Beetroot Soup", {name: "beetroot_soup", meta: 0}, {food: 8});
IDRegistry.genItemID("rabbitsalted");
Item.createFoodItem("rabbitsalted", "Delicious Rabbit Stew", {name: "rabbit_stew", meta: 0}, {food: 8});
IDRegistry.genItemID("mushroomsalted");
Item.createFoodItem("mushroomsalted", "Delicious Mushroom Stew", {name: "mushroom_stew", meta: 0}, {food: 8});
Callback.addCallback("PostLoaded", function () {
  Recipes.addShaped({id: ItemID.beetrootsalted, count: 1, data: 0}, [
    "x", "x", "b"], [
      'x', ItemID.salt, 0, 'b', 459, 0]);
});
Callback.addCallback("PostLoaded", function () {
  Recipes.addShaped({id: ItemID.rabbitsalted, count: 1, data: 0}, [
    "x", "x", "b"], [
      'x', ItemID.salt, 0, 'b', 413, 0]);
});
Callback.addCallback("PostLoaded", function () {
  Recipes.addShaped({id: ItemID.mushroomsalted, count: 1, data: 0}, [
    "x", "x", "b"], [
      'x', ItemID.salt, 0, 'b', 282, 0]);
});
//last chance food
IDRegistry.genItemID("lastchance");
Item.createFoodItem("lastchance", "Last Chance", {name: "lastchance", meta: 0}, {food: 2});
Callback.addCallback("PostLoaded", function () {
  Recipes.addShaped({id: ItemID.lastchance, count: 1, data: 0}, [
    " b ", "cbc", " a "], [
      'a', 281, 0, 'b', 367, 0, 'c', ItemID.salt, 0]);
});




// file: ITEMS/stonerecipes.js

//stonerecipes.js

Callback.addCallback("PostLoaded", function () {
  Recipes.addShaped({id: 61, count: 1, data: 0}, [
    "xxx", "x x", "xxx"], [
      'x', BlockID.komatiitecobble, 0]);
});
Callback.addCallback("PostLoaded", function () {
  Recipes.addShaped({id: 61, count: 1, data: 0}, [
    "xxx", "x x", "xxx"], [
      'x', BlockID.dacitecobble, 0]);
});
Callback.addCallback("PostLoaded", function () {
  Recipes.addShaped({id: 61, count: 1, data: 0}, [
    "xxx", "x x", "xxx"], [
      'x', BlockID.slatecobble, 0]);
});
Callback.addCallback("PostLoaded", function () {
  Recipes.addShaped({id: 61, count: 1, data: 0}, [
    "xxx", "x x", "xxx"], [
      'x', BlockID.slatebluecobble, 0]);
});
Callback.addCallback("PostLoaded", function () {
  Recipes.addShaped({id: 61, count: 1, data: 0}, [
    "xxx", "x x", "xxx"], [
      'x', BlockID.greywackecobble, 0]);
});
Callback.addCallback("PostLoaded", function () {
  Recipes.addShaped({id: 61, count: 1, data: 0}, [
    "xxx", "x x", "xxx"], [
      'x', BlockID.limestonecobble, 0]);
});
Callback.addCallback("PostLoaded", function () {
  Recipes.addShaped({id: 61, count: 1, data: 0}, [
    "xxx", "x x", "xxx"], [
      'x', BlockID.syenitecobble, 0]);
});
Callback.addCallback("PostLoaded", function () {
  Recipes.addShaped({id: 61, count: 1, data: 0}, [
    "xxx", "x x", "xxx"], [
      'x', BlockID.rhyolitecobble, 0]);
});

Callback.addCallback("PostLoaded", function () {
  Recipes.addShaped({id: 23, count: 1, data: 0}, [
    "xxx", "xax", "xbx"], [
      'x', BlockID.komatiitecobble, 0, 'a', 261, 0, 'b', 331, 0]);
});
Callback.addCallback("PostLoaded", function () {
  Recipes.addShaped({id: 23, count: 1, data: 0}, [
    "xxx", "xax", "xbx"], [
      'x', BlockID.dacitecobble, 0, 'a', 261, 0, 'b', 331, 0]);
});
Callback.addCallback("PostLoaded", function () {
  Recipes.addShaped({id: 23, count: 1, data: 0}, [
    "xxx", "xax", "xbx"], [
      'x', BlockID.slatecobble, 0, 'a', 261, 0, 'b', 331, 0]);
});
Callback.addCallback("PostLoaded", function () {
  Recipes.addShaped({id: 23, count: 1, data: 0}, [
    "xxx", "xax", "xbx"], [
      'x', BlockID.slatebluecobble, 0, 'a', 261, 0, 'b', 331, 0]);
});
Callback.addCallback("PostLoaded", function () {
  Recipes.addShaped({id: 23, count: 1, data: 0}, [
    "xxx", "xax", "xbx"], [
      'x', BlockID.greywackecobble, 0, 'a', 261, 0, 'b', 331, 0]);
});
Callback.addCallback("PostLoaded", function () {
  Recipes.addShaped({id: 23, count: 1, data: 0}, [
    "xxx", "xax", "xbx"], [
      'x', BlockID.limestonecobble, 0, 'a', 261, 0, 'b', 331, 0]);
});
Callback.addCallback("PostLoaded", function () {
  Recipes.addShaped({id: 23, count: 1, data: 0}, [
    "xxx", "xax", "xbx"], [
      'x', BlockID.syenitecobble, 0, 'a', 261, 0, 'b', 331, 0]);
});
Callback.addCallback("PostLoaded", function () {
  Recipes.addShaped({id: 23, count: 1, data: 0}, [
    "xxx", "xax", "xbx"], [
      'x', BlockID.rhyolitecobble, 0, 'a', 261, 0, 'b', 331, 0]);
});

Callback.addCallback("PostLoaded", function () {
  Recipes.addShaped({id: 117, count: 1, data: 0}, [
    "   ", " a ", "xxx"], [
      'x', BlockID.komatiitecobble, 0, 'a', 369, 0]);
});
Callback.addCallback("PostLoaded", function () {
  Recipes.addShaped({id: 117, count: 1, data: 0}, [
    "   ", " a ", "xxx"], [
      'x', BlockID.dacitecobble, 0, 'a', 369, 0]);
});
Callback.addCallback("PostLoaded", function () {
  Recipes.addShaped({id: 117, count: 1, data: 0}, [
    "   ", " a ", "xxx"], [
      'x', BlockID.greywackecobble, 0, 'a', 369, 0]);
});
Callback.addCallback("PostLoaded", function () {
  Recipes.addShaped({id: 117, count: 1, data: 0}, [
    "   ", " a ", "xxx"], [
      'x', BlockID.slatecobble, 0, 'a', 369, 0]);
});
Callback.addCallback("PostLoaded", function () {
  Recipes.addShaped({id: 117, count: 1, data: 0}, [
    "   ", " a ", "xxx"], [
      'x', BlockID.slatebluecobble, 0, 'a', 369, 0]);
});
Callback.addCallback("PostLoaded", function () {
  Recipes.addShaped({id: 117, count: 1, data: 0}, [
    "   ", " a ", "xxx"], [
      'x', BlockID.limestonecobble, 0, 'a', 369, 0]);
});
Callback.addCallback("PostLoaded", function () {
  Recipes.addShaped({id: 117, count: 1, data: 0}, [
    "   ", " a ", "xxx"], [
      'x', BlockID.rhyolitecobble, 0, 'a', 369, 0]);
});
Callback.addCallback("PostLoaded", function () {
  Recipes.addShaped({id: 117, count: 1, data: 0}, [
    "   ", " a ", "xxx"], [
      'x', BlockID.syenitecobble, 0, 'a', 369, 0]);
});

Callback.addCallback("PostLoaded", function () {
  Recipes.addShaped({id: 117, count: 1, data: 0}, [
    "   ", " a ", " x "], [
      'x', BlockID.komatiitecobble, 0, 'a', 280, 0]);
});
Callback.addCallback("PostLoaded", function () {
  Recipes.addShaped({id: 117, count: 1, data: 0}, [
    "   ", " a ", " x "], [
      'x', BlockID.dacitecobble, 0, 'a', 280, 0]);
});
Callback.addCallback("PostLoaded", function () {
  Recipes.addShaped({id: 117, count: 1, data: 0}, [
    "   ", " a ", " x "], [
      'x', BlockID.greywackecobble, 0, 'a', 280, 0]);
});
Callback.addCallback("PostLoaded", function () {
  Recipes.addShaped({id: 117, count: 1, data: 0}, [
    "   ", " a ", " x "], [
      'x', BlockID.slatecobble, 0, 'a', 280, 0]);
});
Callback.addCallback("PostLoaded", function () {
  Recipes.addShaped({id: 117, count: 1, data: 0}, [
    "   ", " a ", " x "], [
      'x', BlockID.slatebluecobble, 0, 'a', 280, 0]);
});
Callback.addCallback("PostLoaded", function () {
  Recipes.addShaped({id: 117, count: 1, data: 0}, [
    "   ", " a ", " x "], [
      'x', BlockID.limestonecobble, 0, 'a', 280, 0]);
});
Callback.addCallback("PostLoaded", function () {
  Recipes.addShaped({id: 117, count: 1, data: 0}, [
    "   ", " a ", " x "], [
      'x', BlockID.rhyolitecobble, 0, 'a', 280, 0]);
});
Callback.addCallback("PostLoaded", function () {
  Recipes.addShaped({id: 117, count: 1, data: 0}, [
    "   ", " a ", " x "], [
      'x', BlockID.syenitecobble, 0, 'a', 280, 0]);
});

Callback.addCallback("PostLoaded", function () {
  Recipes.addShaped({id: 23, count: 1, data: 0}, [
    "xxx", "x x", "xbx"], [
      'x', BlockID.komatiitecobble, 0, 'b', 331, 0]);
});
Callback.addCallback("PostLoaded", function () {
  Recipes.addShaped({id: 23, count: 1, data: 0}, [
    "xxx", "x x", "xbx"], [
      'x', BlockID.dacitecobble, 0, 'b', 331, 0]);
});
Callback.addCallback("PostLoaded", function () {
  Recipes.addShaped({id: 23, count: 1, data: 0}, [
    "xxx", "x x", "xbx"], [
      'x', BlockID.slatecobble, 0, 'b', 331, 0]);
});
Callback.addCallback("PostLoaded", function () {
  Recipes.addShaped({id: 23, count: 1, data: 0}, [
    "xxx", "x x", "xbx"], [
      'x', BlockID.slatebluecobble, 0, 'b', 331, 0]);
});
Callback.addCallback("PostLoaded", function () {
  Recipes.addShaped({id: 23, count: 1, data: 0}, [
    "xxx", "x x", "xbx"], [
      'x', BlockID.greywackecobble, 0, 'b', 331, 0]);
});
Callback.addCallback("PostLoaded", function () {
  Recipes.addShaped({id: 23, count: 1, data: 0}, [
    "xxx", "x x", "xbx"], [
      'x', BlockID.limestonecobble, 0, 'b', 331, 0]);
});
Callback.addCallback("PostLoaded", function () {
  Recipes.addShaped({id: 23, count: 1, data: 0}, [
    "xxx", "x x", "xbx"], [
      'x', BlockID.syenitecobble, 0, 'b', 331, 0]);
});
Callback.addCallback("PostLoaded", function () {
  Recipes.addShaped({id: 23, count: 1, data: 0}, [
    "xxx", "x x", "xbx"], [
      'x', BlockID.rhyolitecobble, 0, 'b', 331, 0]);
});

Callback.addCallback("PostLoaded", function () {
  Recipes.addShaped({id: 23, count: 1, data: 0}, [
    "aaa", "bcb", "bdb"], [
      'b', BlockID.rhyolitecobble, 0, 'a', 5, 0, 'c', 265, 0, 'd', 331, 0]);
});
Callback.addCallback("PostLoaded", function () {
  Recipes.addShaped({id: 23, count: 1, data: 0}, [
    "aaa", "bcb", "bdb"], [
      'b', BlockID.syenitecobble, 0, 'a', 5, 0, 'c', 265, 0, 'd', 331, 0]);
});
Callback.addCallback("PostLoaded", function () {
  Recipes.addShaped({id: 23, count: 1, data: 0}, [
    "aaa", "bcb", "bdb"], [
      'b', BlockID.slatecobble, 0, 'a', 5, 0, 'c', 265, 0, 'd', 331, 0]);
});
Callback.addCallback("PostLoaded", function () {
  Recipes.addShaped({id: 23, count: 1, data: 0}, [
    "aaa", "bcb", "bdb"], [
      'b', BlockID.slatebluecobble, 0, 'a', 5, 0, 'c', 265, 0, 'd', 331, 0]);
});
Callback.addCallback("PostLoaded", function () {
  Recipes.addShaped({id: 23, count: 1, data: 0}, [
    "aaa", "bcb", "bdb"], [
      'b', BlockID.komatiitecobble, 0, 'a', 5, 0, 'c', 265, 0, 'd', 331, 0]);
});
Callback.addCallback("PostLoaded", function () {
  Recipes.addShaped({id: 23, count: 1, data: 0}, [
    "aaa", "bcb", "bdb"], [
      'b', BlockID.dacitecobble, 0, 'a', 5, 0, 'c', 265, 0, 'd', 331, 0]);
});
Callback.addCallback("PostLoaded", function () {
  Recipes.addShaped({id: 23, count: 1, data: 0}, [
    "aaa", "bcb", "bdb"], [
      'b', BlockID.greywackecobble, 0, 'a', 5, 0, 'c', 265, 0, 'd', 331, 0]);
});
Callback.addCallback("PostLoaded", function () {
  Recipes.addShaped({id: 23, count: 1, data: 0}, [
    "aaa", "bcb", "bdb"], [
      'b', BlockID.limestonecobble, 0, 'a', 5, 0, 'c', 265, 0, 'd', 331, 0]);
});

Callback.addCallback("PostLoaded", function () {
  Recipes.addShaped({id: 23, count: 1, data: 0}, [
    "aaa", "bcb", "bdb"], [
      'b', BlockID.rhyolitecobble, 0, 'a', 5, 1, 'c', 265, 0, 'd', 331, 0]);
});
Callback.addCallback("PostLoaded", function () {
  Recipes.addShaped({id: 23, count: 1, data: 0}, [
    "aaa", "bcb", "bdb"], [
      'b', BlockID.syenitecobble, 0, 'a', 5, 1, 'c', 265, 0, 'd', 331, 0]);
});
Callback.addCallback("PostLoaded", function () {
  Recipes.addShaped({id: 23, count: 1, data: 0}, [
    "aaa", "bcb", "bdb"], [
      'b', BlockID.slatecobble, 0, 'a', 5, 1, 'c', 265, 0, 'd', 331, 0]);
});
Callback.addCallback("PostLoaded", function () {
  Recipes.addShaped({id: 23, count: 1, data: 0}, [
    "aaa", "bcb", "bdb"], [
      'b', BlockID.slatebluecobble, 0, 'a', 5, 1, 'c', 265, 0, 'd', 331, 0]);
});
Callback.addCallback("PostLoaded", function () {
  Recipes.addShaped({id: 23, count: 1, data: 0}, [
    "aaa", "bcb", "bdb"], [
      'b', BlockID.komatiitecobble, 0, 'a', 5, 1, 'c', 265, 0, 'd', 331, 0]);
});
Callback.addCallback("PostLoaded", function () {
  Recipes.addShaped({id: 23, count: 1, data: 0}, [
    "aaa", "bcb", "bdb"], [
      'b', BlockID.dacitecobble, 0, 'a', 5, 1, 'c', 265, 0, 'd', 331, 0]);
});
Callback.addCallback("PostLoaded", function () {
  Recipes.addShaped({id: 23, count: 1, data: 0}, [
    "aaa", "bcb", "bdb"], [
      'b', BlockID.greywackecobble, 0, 'a', 5, 1, 'c', 265, 0, 'd', 331, 0]);
});
Callback.addCallback("PostLoaded", function () {
  Recipes.addShaped({id: 23, count: 1, data: 0}, [
    "aaa", "bcb", "bdb"], [
      'b', BlockID.limestonecobble, 0, 'a', 5, 1, 'c', 265, 0, 'd', 331, 0]);
});

Callback.addCallback("PostLoaded", function () {
  Recipes.addShaped({id: 23, count: 1, data: 0}, [
    "aaa", "bcb", "bdb"], [
      'b', BlockID.rhyolitecobble, 0, 'a', 5, 2, 'c', 265, 0, 'd', 331, 0]);
});
Callback.addCallback("PostLoaded", function () {
  Recipes.addShaped({id: 23, count: 1, data: 0}, [
    "aaa", "bcb", "bdb"], [
      'b', BlockID.syenitecobble, 0, 'a', 5, 2, 'c', 265, 0, 'd', 331, 0]);
});
Callback.addCallback("PostLoaded", function () {
  Recipes.addShaped({id: 23, count: 1, data: 0}, [
    "aaa", "bcb", "bdb"], [
      'b', BlockID.slatecobble, 0, 'a', 5, 2, 'c', 265, 0, 'd', 331, 0]);
});
Callback.addCallback("PostLoaded", function () {
  Recipes.addShaped({id: 23, count: 1, data: 0}, [
    "aaa", "bcb", "bdb"], [
      'b', BlockID.slatebluecobble, 0, 'a', 5, 2, 'c', 265, 0, 'd', 331, 0]);
});
Callback.addCallback("PostLoaded", function () {
  Recipes.addShaped({id: 23, count: 1, data: 0}, [
    "aaa", "bcb", "bdb"], [
      'b', BlockID.komatiitecobble, 0, 'a', 5, 2, 'c', 265, 0, 'd', 331, 0]);
});
Callback.addCallback("PostLoaded", function () {
  Recipes.addShaped({id: 23, count: 1, data: 0}, [
    "aaa", "bcb", "bdb"], [
      'b', BlockID.dacitecobble, 0, 'a', 5, 2, 'c', 265, 0, 'd', 331, 0]);
});
Callback.addCallback("PostLoaded", function () {
  Recipes.addShaped({id: 23, count: 1, data: 0}, [
    "aaa", "bcb", "bdb"], [
      'b', BlockID.greywackecobble, 0, 'a', 5, 2, 'c', 265, 0, 'd', 331, 0]);
});
Callback.addCallback("PostLoaded", function () {
  Recipes.addShaped({id: 23, count: 1, data: 0}, [
    "aaa", "bcb", "bdb"], [
      'b', BlockID.limestonecobble, 0, 'a', 5, 2, 'c', 265, 0, 'd', 331, 0]);
});

Callback.addCallback("PostLoaded", function () {
  Recipes.addShaped({id: 23, count: 1, data: 0}, [
    "aaa", "bcb", "bdb"], [
      'b', BlockID.rhyolitecobble, 0, 'a', 5, 3, 'c', 265, 0, 'd', 331, 0]);
});
Callback.addCallback("PostLoaded", function () {
  Recipes.addShaped({id: 23, count: 1, data: 0}, [
    "aaa", "bcb", "bdb"], [
      'b', BlockID.syenitecobble, 0, 'a', 5, 3, 'c', 265, 0, 'd', 331, 0]);
});
Callback.addCallback("PostLoaded", function () {
  Recipes.addShaped({id: 23, count: 1, data: 0}, [
    "aaa", "bcb", "bdb"], [
      'b', BlockID.slatecobble, 0, 'a', 5, 3, 'c', 265, 0, 'd', 331, 0]);
});
Callback.addCallback("PostLoaded", function () {
  Recipes.addShaped({id: 23, count: 1, data: 0}, [
    "aaa", "bcb", "bdb"], [
      'b', BlockID.slatebluecobble, 0, 'a', 5, 3, 'c', 265, 0, 'd', 331, 0]);
});
Callback.addCallback("PostLoaded", function () {
  Recipes.addShaped({id: 23, count: 1, data: 0}, [
    "aaa", "bcb", "bdb"], [
      'b', BlockID.komatiitecobble, 0, 'a', 5, 3, 'c', 265, 0, 'd', 331, 0]);
});
Callback.addCallback("PostLoaded", function () {
  Recipes.addShaped({id: 23, count: 1, data: 0}, [
    "aaa", "bcb", "bdb"], [
      'b', BlockID.dacitecobble, 0, 'a', 5, 3, 'c', 265, 0, 'd', 331, 0]);
});
Callback.addCallback("PostLoaded", function () {
  Recipes.addShaped({id: 23, count: 1, data: 0}, [
    "aaa", "bcb", "bdb"], [
      'b', BlockID.greywackecobble, 0, 'a', 5, 3, 'c', 265, 0, 'd', 331, 0]);
});
Callback.addCallback("PostLoaded", function () {
  Recipes.addShaped({id: 23, count: 1, data: 0}, [
    "aaa", "bcb", "bdb"], [
      'b', BlockID.limestonecobble, 0, 'a', 5, 3, 'c', 265, 0, 'd', 331, 0]);
});

Callback.addCallback("PostLoaded", function () {
  Recipes.addShaped({id: 23, count: 1, data: 0}, [
    "aaa", "bcb", "bdb"], [
      'b', BlockID.rhyolitecobble, 0, 'a', 5, 4, 'c', 265, 0, 'd', 331, 0]);
});
Callback.addCallback("PostLoaded", function () {
  Recipes.addShaped({id: 23, count: 1, data: 0}, [
    "aaa", "bcb", "bdb"], [
      'b', BlockID.syenitecobble, 0, 'a', 5, 4, 'c', 265, 0, 'd', 331, 0]);
});
Callback.addCallback("PostLoaded", function () {
  Recipes.addShaped({id: 23, count: 1, data: 0}, [
    "aaa", "bcb", "bdb"], [
      'b', BlockID.slatecobble, 0, 'a', 5, 4, 'c', 265, 0, 'd', 331, 0]);
});
Callback.addCallback("PostLoaded", function () {
  Recipes.addShaped({id: 23, count: 1, data: 0}, [
    "aaa", "bcb", "bdb"], [
      'b', BlockID.slatebluecobble, 0, 'a', 5, 4, 'c', 265, 0, 'd', 331, 0]);
});
Callback.addCallback("PostLoaded", function () {
  Recipes.addShaped({id: 23, count: 1, data: 0}, [
    "aaa", "bcb", "bdb"], [
      'b', BlockID.komatiitecobble, 0, 'a', 5, 4, 'c', 265, 0, 'd', 331, 0]);
});
Callback.addCallback("PostLoaded", function () {
  Recipes.addShaped({id: 23, count: 1, data: 0}, [
    "aaa", "bcb", "bdb"], [
      'b', BlockID.dacitecobble, 0, 'a', 5, 4, 'c', 265, 0, 'd', 331, 0]);
});
Callback.addCallback("PostLoaded", function () {
  Recipes.addShaped({id: 23, count: 1, data: 0}, [
    "aaa", "bcb", "bdb"], [
      'b', BlockID.greywackecobble, 0, 'a', 5, 4, 'c', 265, 0, 'd', 331, 0]);
});
Callback.addCallback("PostLoaded", function () {
  Recipes.addShaped({id: 23, count: 1, data: 0}, [
    "aaa", "bcb", "bdb"], [
      'b', BlockID.limestonecobble, 0, 'a', 5, 4, 'c', 265, 0, 'd', 331, 0]);
});

Callback.addCallback("PostLoaded", function () {
  Recipes.addShaped({id: 23, count: 1, data: 0}, [
    "aaa", "bcb", "bdb"], [
      'b', BlockID.rhyolitecobble, 0, 'a', 5, 5, 'c', 265, 0, 'd', 331, 0]);
});
Callback.addCallback("PostLoaded", function () {
  Recipes.addShaped({id: 23, count: 1, data: 0}, [
    "aaa", "bcb", "bdb"], [
      'b', BlockID.syenitecobble, 0, 'a', 5, 5, 'c', 265, 0, 'd', 331, 0]);
});
Callback.addCallback("PostLoaded", function () {
  Recipes.addShaped({id: 23, count: 1, data: 0}, [
    "aaa", "bcb", "bdb"], [
      'b', BlockID.slatecobble, 0, 'a', 5, 5, 'c', 265, 0, 'd', 331, 0]);
});
Callback.addCallback("PostLoaded", function () {
  Recipes.addShaped({id: 23, count: 1, data: 0}, [
    "aaa", "bcb", "bdb"], [
      'b', BlockID.slatebluecobble, 0, 'a', 5, 5, 'c', 265, 0, 'd', 331, 0]);
});
Callback.addCallback("PostLoaded", function () {
  Recipes.addShaped({id: 23, count: 1, data: 0}, [
    "aaa", "bcb", "bdb"], [
      'b', BlockID.komatiitecobble, 0, 'a', 5, 5, 'c', 265, 0, 'd', 331, 0]);
});
Callback.addCallback("PostLoaded", function () {
  Recipes.addShaped({id: 23, count: 1, data: 0}, [
    "aaa", "bcb", "bdb"], [
      'b', BlockID.dacitecobble, 0, 'a', 5, 5, 'c', 265, 0, 'd', 331, 0]);
});
Callback.addCallback("PostLoaded", function () {
  Recipes.addShaped({id: 23, count: 1, data: 0}, [
    "aaa", "bcb", "bdb"], [
      'b', BlockID.greywackecobble, 0, 'a', 5, 5, 'c', 265, 0, 'd', 331, 0]);
});
Callback.addCallback("PostLoaded", function () {
  Recipes.addShaped({id: 23, count: 1, data: 0}, [
    "aaa", "bcb", "bdb"], [
      'b', BlockID.limestonecobble, 0, 'a', 5, 5, 'c', 265, 0, 'd', 331, 0]);
});

Callback.addCallback("PostLoaded", function () {
  Recipes.addShaped({id: BlockID.slateblue, count: 2, data: 0}, [
    "   ", " ba", " ab"], [
      'b', BlockID.slate, 0, 'a', 351, 4]);
});
Callback.addCallback("PostLoaded", function () {
  Recipes.addShaped({id: BlockID.slate, count: 2, data: 0}, [
    "   ", " ba", " ab"], [
      'b', BlockID.blueslate, 0, 'a', 351, 8]);
});

Callback.addCallback("PostLoaded", function () {
  Recipes.addShaped({id: 218, count: 1, data: 0}, [
    "aaa", "bbc", "aaa"], [
      'a', BlockID.blueslate, 0, 'b', 331, 0, 'c', 406, 0]);
});
Callback.addCallback("PostLoaded", function () {
  Recipes.addShaped({id: 218, count: 1, data: 0}, [
    "aaa", "bbc", "aaa"], [
      'a', BlockID.slate, 0, 'b', 331, 0, 'c', 406, 0]);
});
Callback.addCallback("PostLoaded", function () {
  Recipes.addShaped({id: 218, count: 1, data: 0}, [
    "aaa", "bbc", "aaa"], [
      'a', BlockID.dacite, 0, 'b', 331, 0, 'c', 406, 0]);
});
Callback.addCallback("PostLoaded", function () {
  Recipes.addShaped({id: 218, count: 1, data: 0}, [
    "aaa", "bbc", "aaa"], [
      'a', BlockID.komatiite, 0, 'b', 331, 0, 'c', 406, 0]);
});
Callback.addCallback("PostLoaded", function () {
  Recipes.addShaped({id: 218, count: 1, data: 0}, [
    "aaa", "bbc", "aaa"], [
      'a', BlockID.greywacke, 0, 'b', 331, 0, 'c', 406, 0]);
});
Callback.addCallback("PostLoaded", function () {
  Recipes.addShaped({id: 218, count: 1, data: 0}, [
    "aaa", "bbc", "aaa"], [
      'a', BlockID.limestone, 0, 'b', 331, 0, 'c', 406, 0]);
});
Callback.addCallback("PostLoaded", function () {
  Recipes.addShaped({id: 218, count: 1, data: 0}, [
    "aaa", "bbc", "aaa"], [
      'a', BlockID.rhyolite, 0, 'b', 331, 0, 'c', 406, 0]);
});
Callback.addCallback("PostLoaded", function () {
  Recipes.addShaped({id: 218, count: 1, data: 0}, [
    "aaa", "bbc", "aaa"], [
      'a', BlockID.syenite, 0, 'b', 331, 0, 'c', 406, 0]);
});

Callback.addCallback("PostLoaded", function () {
  Recipes.addShaped({id: 272, count: 1, data: 0}, [
    "a", "a", "b"], [
      'a', BlockID.blueslate, 0, 'b', 280, 0]);
});
Callback.addCallback("PostLoaded", function () {
  Recipes.addShaped({id: 272, count: 1, data: 0}, [
    "a", "a", "b"], [
      'a', BlockID.slate, 0, 'b', 280, 0]);
});
Callback.addCallback("PostLoaded", function () {
  Recipes.addShaped({id: 272, count: 1, data: 0}, [
    "a", "a", "b"], [
      'a', BlockID.komatiite, 0, 'b', 280, 0]);
});
Callback.addCallback("PostLoaded", function () {
  Recipes.addShaped({id: 272, count: 1, data: 0}, [
    "a", "a", "b"], [
      'a', BlockID.greywacke, 0, 'b', 280, 0]);
});
Callback.addCallback("PostLoaded", function () {
  Recipes.addShaped({id: 272, count: 1, data: 0}, [
    "a", "a", "b"], [
      'a', BlockID.dacite, 0, 'b', 280, 0]);
});
Callback.addCallback("PostLoaded", function () {
  Recipes.addShaped({id: 272, count: 1, data: 0}, [
    "a", "a", "b"], [
      'a', BlockID.limestone, 0, 'b', 280, 0]);
});
Callback.addCallback("PostLoaded", function () {
  Recipes.addShaped({id: 272, count: 1, data: 0}, [
    "a", "a", "b"], [
      'a', BlockID.rhyolite, 0, 'b', 280, 0]);
});
Callback.addCallback("PostLoaded", function () {
  Recipes.addShaped({id: 272, count: 1, data: 0}, [
    "a", "a", "b"], [
      'a', BlockID.syenite, 0, 'b', 280, 0]);
});

Callback.addCallback("PostLoaded", function () {
  Recipes.addShaped({id: 273, count: 1, data: 0}, [
    "a", "b", "b"], [
      'a', BlockID.blueslate, 0, 'b', 280, 0]);
});
Callback.addCallback("PostLoaded", function () {
  Recipes.addShaped({id: 273, count: 1, data: 0}, [
    "a", "b", "b"], [
      'a', BlockID.slate, 0, 'b', 280, 0]);
});
Callback.addCallback("PostLoaded", function () {
  Recipes.addShaped({id: 273, count: 1, data: 0}, [
    "a", "b", "b"], [
      'a', BlockID.komatiite, 0, 'b', 280, 0]);
});
Callback.addCallback("PostLoaded", function () {
  Recipes.addShaped({id: 273, count: 1, data: 0}, [
    "a", "b", "b"], [
      'a', BlockID.greywacke, 0, 'b', 280, 0]);
});
Callback.addCallback("PostLoaded", function () {
  Recipes.addShaped({id: 273, count: 1, data: 0}, [
    "a", "b", "b"], [
      'a', BlockID.dacite, 0, 'b', 280, 0]);
});
Callback.addCallback("PostLoaded", function () {
  Recipes.addShaped({id: 273, count: 1, data: 0}, [
    "a", "b", "b"], [
      'a', BlockID.limestone, 0, 'b', 280, 0]);
});
Callback.addCallback("PostLoaded", function () {
  Recipes.addShaped({id: 273, count: 1, data: 0}, [
    "a", "b", "b"], [
      'a', BlockID.rhyolite, 0, 'b', 280, 0]);
});
Callback.addCallback("PostLoaded", function () {
  Recipes.addShaped({id: 273, count: 1, data: 0}, [
    "a", "b", "b"], [
      'a', BlockID.syenite, 0, 'b', 280, 0]);
});

Callback.addCallback("PostLoaded", function () {
  Recipes.addShaped({id: 291, count: 1, data: 0}, [
    "aa", " b", " b"], [
      'a', BlockID.blueslate, 0, 'b', 280, 0]);
});
Callback.addCallback("PostLoaded", function () {
  Recipes.addShaped({id: 291, count: 1, data: 0}, [
    "aa", " b", " b"], [
      'a', BlockID.slate, 0, 'b', 280, 0]);
});
Callback.addCallback("PostLoaded", function () {
  Recipes.addShaped({id: 291, count: 1, data: 0}, [
    "aa", " b", " b"], [
      'a', BlockID.komatiite, 0, 'b', 280, 0]);
});
Callback.addCallback("PostLoaded", function () {
  Recipes.addShaped({id: 291, count: 1, data: 0}, [
    "aa", " b", " b"], [
      'a', BlockID.greywacke, 0, 'b', 280, 0]);
});
Callback.addCallback("PostLoaded", function () {
  Recipes.addShaped({id: 291, count: 1, data: 0}, [
    "aa", " b", " b"], [
      'a', BlockID.dacite, 0, 'b', 280, 0]);
});
Callback.addCallback("PostLoaded", function () {
  Recipes.addShaped({id: 291, count: 1, data: 0}, [
    "aa", " b", " b"], [
      'a', BlockID.limestone, 0, 'b', 280, 0]);
});
Callback.addCallback("PostLoaded", function () {
  Recipes.addShaped({id: 291, count: 1, data: 0}, [
    "aa", " b", " b"], [
      'a', BlockID.rhyolite, 0, 'b', 280, 0]);
});
Callback.addCallback("PostLoaded", function () {
  Recipes.addShaped({id: 291, count: 1, data: 0}, [
    "aa", " b", " b"], [
      'a', BlockID.syenite, 0, 'b', 280, 0]);
});

Callback.addCallback("PostLoaded", function () {
  Recipes.addShaped({id: 275, count: 1, data: 0}, [
    "aa", "ab", " b"], [
      'a', BlockID.blueslate, 0, 'b', 280, 0]);
});
Callback.addCallback("PostLoaded", function () {
  Recipes.addShaped({id: 275, count: 1, data: 0}, [
    "aa", "ab", " b"], [
      'a', BlockID.slate, 0, 'b', 280, 0]);
});
Callback.addCallback("PostLoaded", function () {
  Recipes.addShaped({id: 275, count: 1, data: 0}, [
    "aa", "ab", " b"], [
      'a', BlockID.komatiite, 0, 'b', 280, 0]);
});
Callback.addCallback("PostLoaded", function () {
  Recipes.addShaped({id: 275, count: 1, data: 0}, [
    "aa", "ab", " b"], [
      'a', BlockID.greywacke, 0, 'b', 280, 0]);
});
Callback.addCallback("PostLoaded", function () {
  Recipes.addShaped({id: 275, count: 1, data: 0}, [
    "aa", "ab", " b"], [
      'a', BlockID.dacite, 0, 'b', 280, 0]);
});
Callback.addCallback("PostLoaded", function () {
  Recipes.addShaped({id: 275, count: 1, data: 0}, [
    "aa", "ab", " b"], [
      'a', BlockID.limestone, 0, 'b', 280, 0]);
});
Callback.addCallback("PostLoaded", function () {
  Recipes.addShaped({id: 275, count: 1, data: 0}, [
    "aa", "ab", " b"], [
      'a', BlockID.rhyolite, 0, 'b', 280, 0]);
});
Callback.addCallback("PostLoaded", function () {
  Recipes.addShaped({id: 275, count: 1, data: 0}, [
    "aa", "ab", " b"], [
      'a', BlockID.syenite, 0, 'b', 280, 0]);
});

Callback.addCallback("PostLoaded", function () {
  Recipes.addShaped({id: 274, count: 1, data: 0}, [
    "aaa", " b ", " b "], [
      'a', BlockID.blueslate, 0, 'b', 280, 0]);
});
Callback.addCallback("PostLoaded", function () {
  Recipes.addShaped({id: 274, count: 1, data: 0}, [
    "aaa", " b ", " b "], [
      'a', BlockID.slate, 0, 'b', 280, 0]);
});
Callback.addCallback("PostLoaded", function () {
  Recipes.addShaped({id: 274, count: 1, data: 0}, [
    "aaa", " b ", " b "], [
      'a', BlockID.komatiite, 0, 'b', 280, 0]);
});
Callback.addCallback("PostLoaded", function () {
  Recipes.addShaped({id: 274, count: 1, data: 0}, [
    "aaa", " b ", " b "], [
      'a', BlockID.greywacke, 0, 'b', 280, 0]);
});
Callback.addCallback("PostLoaded", function () {
  Recipes.addShaped({id: 274, count: 1, data: 0}, [
    "aaa", " b ", " b "], [
      'a', BlockID.dacite, 0, 'b', 280, 0]);
});
Callback.addCallback("PostLoaded", function () {
  Recipes.addShaped({id: 274, count: 1, data: 0}, [
    "aaa", " b ", " b "], [
      'a', BlockID.limestone, 0, 'b', 280, 0]);
});
Callback.addCallback("PostLoaded", function () {
  Recipes.addShaped({id: 274, count: 1, data: 0}, [
    "aaa", " b ", " b "], [
      'a', BlockID.rhyolite, 0, 'b', 280, 0]);
});
Callback.addCallback("PostLoaded", function () {
  Recipes.addShaped({id: 274, count: 1, data: 0}, [
    "aaa", " b ", " b "], [
      'a', BlockID.syenite, 0, 'b', 280, 0]);
});

Callback.addCallback("PostLoaded", function () {
  Recipes.addShaped({id: 49, count: 1, data: 0}, [
    "  ", "ab", "ba"], [
      'a', BlockID.basalt, 0, 'b', ItemID.ivory, 0]);
});




// file: ITEMS/tools.js

//Cave Plus Mod for MC Bedrock - InnerCore Version
//This is the developer version of the script! Don´t change or use it.

//BRONZE
IDRegistry.genItemID("bronzesword");
Item.createItem("bronzesword", "Bronze Sword",
{name: "bronzesword", meta: 0}, {stack: 1});
ToolAPI.addToolMaterial("bronze", {
  durability: 250, level: 2, efficiency: 19, damage: 5, enchantability: 14});
ToolAPI.setTool(ItemID.bronzesword, "bronze", ToolType.sword);
IDRegistry.genItemID("bronzeshovel");
Item.createItem("bronzeshovel", "Bronze Shovel",
{name: "bronzeshovel", meta: 0}, {stack: 1});
ToolAPI.setTool(ItemID.bronzeshovel, "bronze", ToolType.shovel);
IDRegistry.genItemID("bronzepickaxe");
Item.createItem("bronzepickaxe", "Bronze Pickaxe",
{name: "bronzepickaxe", meta: 0}, {stack: 1});
ToolAPI.setTool(ItemID.bronzepickaxe, "bronze", ToolType.pickaxe);
IDRegistry.genItemID("bronzeaxe");
Item.createItem("bronzeaxe", "Bronze Axe",
{name: "bronzeaxe", meta: 0}, {stack: 1});
ToolAPI.setTool(ItemID.bronzeaxe, "bronze", ToolType.axe);
IDRegistry.genItemID("bronzehoe");
Item.createItem("bronzehoe", "Bronze Hoe",
{name: "bronzehoe", meta: 0}, {stack: 1});
ToolAPI.setTool(ItemID.bronzehoe, "bronze", ToolType.hoe);

//BRASS
IDRegistry.genItemID("brasssword");
Item.createItem("brasssword", "Brass Sword",
{name: "brasssword", meta: 0}, {stack: 1});
ToolAPI.addToolMaterial("brass", {
  durability: 250, level: 2, efficiency: 19, damage: 5, enchantability: 14});
ToolAPI.setTool(ItemID.brasssword, "brass", ToolType.sword);
IDRegistry.genItemID("brassshovel");
Item.createItem("brassshovel", "Brass Shovel",
{name: "brassshovel", meta: 0}, {stack: 1});
ToolAPI.setTool(ItemID.brassshovel, "brass", ToolType.shovel);
IDRegistry.genItemID("brasspickaxe");
Item.createItem("brasspickaxe", "Brass Pickaxe",
{name: "brasspickaxe", meta: 0}, {stack: 1});
ToolAPI.setTool(ItemID.brasspickaxe, "brass", ToolType.pickaxe);
IDRegistry.genItemID("brassaxe");
Item.createItem("brassaxe", "Brass Axe",
{name: "brassaxe", meta: 0}, {stack: 1});
ToolAPI.setTool(ItemID.brassaxe, "brass", ToolType.axe);
IDRegistry.genItemID("brasshoe");
Item.createItem("brasshoe", "Brass Hoe",
{name: "brasshoe", meta: 0}, {stack: 1});
ToolAPI.setTool(ItemID.brasshoe, "brass", ToolType.hoe);

//BASALT
IDRegistry.genItemID("basaltsword");
Item.createItem("basaltsword", "Basalt Sword",
{name: "basaltsword", meta: 0}, {stack: 1});
ToolAPI.addToolMaterial("basalt", {
  durability: 280, level: 3, efficiency: 20, damage: 5, enchantability: 14});
ToolAPI.setTool(ItemID.basaltsword, "basalt", ToolType.sword);
IDRegistry.genItemID("basaltshovel");
Item.createItem("basaltshovel", "Basalt Shovel",
{name: "basaltshovel", meta: 0}, {stack: 1});
ToolAPI.setTool(ItemID.basaltshovel, "basalt", ToolType.shovel);
IDRegistry.genItemID("basaltpickaxe");
Item.createItem("basaltpickaxe", "Basalt Pickaxe",
{name: "basaltpickaxe", meta: 0}, {stack: 1});
ToolAPI.setTool(ItemID.basaltpickaxe, "basalt", ToolType.pickaxe);
IDRegistry.genItemID("basaltaxe");
Item.createItem("basaltaxe", "Basalt Axe",
{name: "basaltaxe", meta: 0}, {stack: 1});
ToolAPI.setTool(ItemID.basaltaxe, "basalt", ToolType.axe);
IDRegistry.genItemID("basalthoe");
Item.createItem("basalthoe", "Basalt Hoe",
{name: "basalthoe", meta: 0}, {stack: 1});
ToolAPI.setTool(ItemID.basalthoe, "basalt", ToolType.hoe);

//TITANIUM
IDRegistry.genItemID("titaniumsword");
Item.createItem("titaniumsword", "Titanium Sword",
{name: "titaniumsword", meta: 0}, {stack: 1});
ToolAPI.addToolMaterial("titanium", {
  durability: 1100, level: 4, efficiency: 29, damage: 8, enchantability: 14});
ToolAPI.setTool(ItemID.titaniumsword, "titanium", ToolType.sword);
IDRegistry.genItemID("titaniumshovel");
Item.createItem("titaniumshovel", "Titanium Shovel",
{name: "titaniumshovel", meta: 0}, {stack: 1});
ToolAPI.setTool(ItemID.titaniumshovel, "titanium", ToolType.shovel);
IDRegistry.genItemID("titaniumpickaxe");
Item.createItem("titaniumpickaxe", "Titanium Pickaxe",
{name: "titaniumpickaxe", meta: 0}, {stack: 1});
ToolAPI.setTool(ItemID.titaniumpickaxe, "titanium", ToolType.pickaxe);
IDRegistry.genItemID("titaniumaxe");
Item.createItem("titaniumaxe", "Titanium Axe",
{name: "titaniumaxe", meta: 0}, {stack: 1});
ToolAPI.setTool(ItemID.titaniumaxe, "titanium", ToolType.axe);
IDRegistry.genItemID("titaniumhoe");
Item.createItem("titaniumhoe", "Titanium Hoe",
{name: "titaniumhoe", meta: 0}, {stack: 1});
ToolAPI.setTool(ItemID.titaniumhoe, "titanium", ToolType.hoe);

//Recipes
Callback.addCallback("PostLoaded", function () {
  Recipes.addShaped({id: ItemID.bronzesword, count: 1, data: 0}, [
    "x", "x", "a"], [
      'x', ItemID.bronzeingot, 0, 'a', 280, 0]);
});
Callback.addCallback("PostLoaded", function () {
  Recipes.addShaped({id: ItemID.brasssword, count: 1, data: 0}, [
    "x", "x", "a"], [
      'x', ItemID.brassingot, 0, 'a', 280, 0]);
});
Callback.addCallback("PostLoaded", function () {
  Recipes.addShaped({id: ItemID.basaltsword, count: 1, data: 0}, [
    "x", "x", "a"], [
      'x', BlockID.basaltcobble, 0, 'a', 280, 0]);
});
Callback.addCallback("PostLoaded", function () {
  Recipes.addShaped({id: ItemID.titaniumsword, count: 1, data: 0}, [
    "x", "x", "a"], [
      'x', ItemID.titaniumingot, 0, 'a', 280, 0]);
});
Callback.addCallback("PostLoaded", function () {
  Recipes.addShaped({id: ItemID.bronzeshovel, count: 1, data: 0}, [
    "x", "a", "a"], [
      'x', ItemID.bronzeingot, 0, 'a', 280, 0]);
});
Callback.addCallback("PostLoaded", function () {
  Recipes.addShaped({id: ItemID.brassshovel, count: 1, data: 0}, [
    "x", "a", "a"], [
      'x', ItemID.brassingot, 0, 'a', 280, 0]);
});
Callback.addCallback("PostLoaded", function () {
  Recipes.addShaped({id: ItemID.basaltshovel, count: 1, data: 0}, [
    "x", "a", "a"], [
      'x', BlockID.basaltcobble, 0, 'a', 280, 0]);
});
Callback.addCallback("PostLoaded", function () {
  Recipes.addShaped({id: ItemID.titaniumshovel, count: 1, data: 0}, [
    "x", "a", "a"], [
      'x', ItemID.titaniumingot, 0, 'a', 280, 0]);
});
Callback.addCallback("PostLoaded", function () {
  Recipes.addShaped({id: ItemID.bronzehoe, count: 1, data: 0}, [
    "xx ", " a ", " a "], [
      'x', ItemID.bronzeingot, 0, 'a', 280, 0]);
});
Callback.addCallback("PostLoaded", function () {
  Recipes.addShaped({id: ItemID.brasshoe, count: 1, data: 0}, [
    "xx ", " a ", " a "], [
      'x', ItemID.brassingot, 0, 'a', 280, 0]);
});
Callback.addCallback("PostLoaded", function () {
  Recipes.addShaped({id: ItemID.basalthoe, count: 1, data: 0}, [
    "xx ", " a ", " a "], [
      'x', BlockID.basaltcobble, 0, 'a', 280, 0]);
});
Callback.addCallback("PostLoaded", function () {
  Recipes.addShaped({id: ItemID.titaniumhoe, count: 1, data: 0}, [
    "xx ", " a ", " a "], [
      'x', ItemID.titaniumingot, 0, 'a', 280, 0]);
});
Callback.addCallback("PostLoaded", function () {
  Recipes.addShaped({id: ItemID.bronzeaxe, count: 1, data: 0}, [
    "xx ", "xa ", " a "], [
      'x', ItemID.bronzeingot, 0, 'a', 280, 0]);
});
Callback.addCallback("PostLoaded", function () {
  Recipes.addShaped({id: ItemID.brassaxe, count: 1, data: 0}, [
    "xx ", "xa ", " a "], [
      'x', ItemID.brassingot, 0, 'a', 280, 0]);
});
Callback.addCallback("PostLoaded", function () {
  Recipes.addShaped({id: ItemID.basaltaxe, count: 1, data: 0}, [
    "xx ", "xa ", " a "], [
      'x', BlockID.basaltcobble, 0, 'a', 280, 0]);
});
Callback.addCallback("PostLoaded", function () {
  Recipes.addShaped({id: ItemID.titaniumaxe, count: 1, data: 0}, [
    "xx ", "xa ", " a "], [
      'x', ItemID.titaniumingot, 0, 'a', 280, 0]);
});
Callback.addCallback("PostLoaded", function () {
  Recipes.addShaped({id: ItemID.bronzepickaxe, count: 1, data: 0}, [
    "xxx", " a ", " a "], [
      'x', ItemID.bronzeingot, 0, 'a', 280, 0]);
});
Callback.addCallback("PostLoaded", function () {
  Recipes.addShaped({id: ItemID.brasspickaxe, count: 1, data: 0}, [
    "xxx", " a ", " a "], [
      'x', ItemID.brassingot, 0, 'a', 280, 0]);
});
Callback.addCallback("PostLoaded", function () {
  Recipes.addShaped({id: ItemID.basaltpickaxe, count: 1, data: 0}, [
    "xxx", " a ", " a "], [
      'x', BlockID.basaltcobble, 0, 'a', 280, 0]);
});
Callback.addCallback("PostLoaded", function () {
  Recipes.addShaped({id: ItemID.titaniumpickaxe, count: 1, data: 0}, [
    "xxx", " a ", " a "], [
      'x', ItemID.titaniumingot, 0, 'a', 280, 0]);
});




// file: WORLDGENERATION/oregen.js

//Cave Plus Mod for MC Bedrock - InnerCore Version
//This is the developer version of the script! Don´t change or use it.

var OreGenerator = {
	copper: {
		enabled: __config__.getBool("copperore.enabled"),
		count: __config__.getNumber("copperore.count"),
		size: __config__.getNumber("copperore.size"),
		minHeight: __config__.getNumber("copperore.minHeight"),
		maxHeight: __config__.getNumber("copperore.maxHeight")
	},
  zinc: {
		enabled: __config__.getBool("zincore.enabled"),
		count: __config__.getNumber("zincore.count"),
		size: __config__.getNumber("zincore.size"),
		minHeight: __config__.getNumber("zincore.minHeight"),
		maxHeight: __config__.getNumber("zincore.maxHeight")
	},
  tin: {
		enabled: __config__.getBool("tinore.enabled"),
		count: __config__.getNumber("tinore.count"),
		size: __config__.getNumber("tinore.size"),
		minHeight: __config__.getNumber("tinore.minHeight"),
		maxHeight: __config__.getNumber("tinore.maxHeight")
	},
  salt: {
		enabled: __config__.getBool("saltore.enabled"),
		count: __config__.getNumber("saltore.count"),
		size: __config__.getNumber("saltore.size"),
		minHeight: __config__.getNumber("saltore.minHeight"),
		maxHeight: __config__.getNumber("saltore.maxHeight")
	},
	titanium: {
		enabled: __config__.getBool("titaniumore.enabled"),
		count: __config__.getNumber("titaniumore.count"),
		size: __config__.getNumber("titaniumore.size"),
		minHeight: __config__.getNumber("titaniumore.minHeight"),
		maxHeight: __config__.getNumber("titaniumore.maxHeight")
	},
	bismuth: {
		enabled: __config__.getBool("bismuthore.enabled"),
		count: __config__.getNumber("bismuthore.count"),
		size: __config__.getNumber("bismuthore.size"),
		minHeight: __config__.getNumber("bismuthore.minHeight"),
		maxHeight: __config__.getNumber("bismuthore.maxHeight")
	},
	plumbum: {
		enabled: __config__.getBool("plumbumore.enabled"),
		count: __config__.getNumber("plumbumore.count"),
		size: __config__.getNumber("plumbumore.size"),
		minHeight: __config__.getNumber("plumbumore.minHeight"),
		maxHeight: __config__.getNumber("plumbumore.maxHeight")
	},
	lithium: {
		enabled: __config__.getBool("lithiumore.enabled"),
		count: __config__.getNumber("lithiumore.count"),
		size: __config__.getNumber("lithiumore.size"),
		minHeight: __config__.getNumber("lithiumore.minHeight"),
		maxHeight: __config__.getNumber("lithiumore.maxHeight")
	},
	amber: {
		enabled: __config__.getBool("amberore.enabled"),
		count: __config__.getNumber("amberore.count"),
		size: __config__.getNumber("amberore.size"),
		minHeight: __config__.getNumber("amberore.minHeight"),
		maxHeight: __config__.getNumber("amberore.maxHeight")
	},
	ruby: {
		enabled: __config__.getBool("rubyore.enabled"),
		count: __config__.getNumber("rubyore.count"),
		size: __config__.getNumber("rubyore.size"),
		minHeight: __config__.getNumber("rubyore.minHeight"),
		maxHeight: __config__.getNumber("rubyore.maxHeight")
	},
	sapphire: {
		enabled: __config__.getBool("sapphireore.enabled"),
		count: __config__.getNumber("sapphireore.count"),
		size: __config__.getNumber("sapphireore.size"),
		minHeight: __config__.getNumber("sapphireore.minHeight"),
		maxHeight: __config__.getNumber("sapphireore.maxHeight")
	},


	addFlag: function(name, flag){
		if(OreGenerator[name].enabled){
			OreGenerator[name].enabled = !Flags.addFlag(flag);
		}
	}
}

OreGenerator.addFlag("copper", "oreGenCopper");
OreGenerator.addFlag("zinc", "oreGenZinc");
OreGenerator.addFlag("tin", "oreGenTin");
OreGenerator.addFlag("salt", "oreGenSalt");
OreGenerator.addFlag("titanium", "oreGenTitanium");
OreGenerator.addFlag("plumbum", "oreGenPlumbum");
OreGenerator.addFlag("lithium", "oreGenLithium");
OreGenerator.addFlag("bismuth", "oreGenBismuth");
OreGenerator.addFlag("ruby", "oreGenRuby");
OreGenerator.addFlag("sapphire", "oreGenSapphire");
OreGenerator.addFlag("amber", "oreGenAmber");

Callback.addCallback("PostLoaded", function(){
	if(OreGenerator.copper.enabled){
		Callback.addCallback("GenerateChunkUnderground", function(chunkX, chunkZ){
			for(var i = 0; i < OreGenerator.copper.count; i++){
				var coords = GenerationUtils.randomCoords(chunkX, chunkZ, OreGenerator.copper.minHeight, OreGenerator.copper.maxHeight);
				GenerationUtils.generateOre(coords.x, coords.y, coords.z, BlockID.copperore, 0, OreGenerator.copper.size);
			}
		});
	}
  if(OreGenerator.zinc.enabled){
		Callback.addCallback("GenerateChunkUnderground", function(chunkX, chunkZ){
			for(var i = 0; i < OreGenerator.zinc.count; i++){
				var coords = GenerationUtils.randomCoords(chunkX, chunkZ, OreGenerator.zinc.minHeight, OreGenerator.zinc.maxHeight);
				GenerationUtils.generateOre(coords.x, coords.y, coords.z, BlockID.zincore, 0, OreGenerator.zinc.size);
			}
		});
	}
  if(OreGenerator.tin.enabled){
		Callback.addCallback("GenerateChunkUnderground", function(chunkX, chunkZ){
			for(var i = 0; i < OreGenerator.tin.count; i++){
				var coords = GenerationUtils.randomCoords(chunkX, chunkZ, OreGenerator.tin.minHeight, OreGenerator.tin.maxHeight);
				GenerationUtils.generateOre(coords.x, coords.y, coords.z, BlockID.tinore, 0, OreGenerator.tin.size);
			}
		});
	}
  if(OreGenerator.salt.enabled){
		Callback.addCallback("GenerateChunkUnderground", function(chunkX, chunkZ){
			for(var i = 0; i < OreGenerator.salt.count; i++){
				var coords = GenerationUtils.randomCoords(chunkX, chunkZ, OreGenerator.salt.minHeight, OreGenerator.salt.maxHeight);
				GenerationUtils.generateOre(coords.x, coords.y, coords.z, BlockID.saltore, 0, OreGenerator.salt.size);
			}
		});
	}
	if(OreGenerator.titanium.enabled){
		Callback.addCallback("GenerateChunkUnderground", function(chunkX, chunkZ){
			for(var i = 0; i < OreGenerator.titanium.count; i++){
				var coords = GenerationUtils.randomCoords(chunkX, chunkZ, OreGenerator.titanium.minHeight, OreGenerator.titanium.maxHeight);
				GenerationUtils.generateOre(coords.x, coords.y, coords.z, BlockID.titaniumore, 0, OreGenerator.titanium.size);
			}
		});
	}
	if(OreGenerator.bismuth.enabled){
		Callback.addCallback("GenerateChunkUnderground", function(chunkX, chunkZ){
			for(var i = 0; i < OreGenerator.bismuth.count; i++){
				var coords = GenerationUtils.randomCoords(chunkX, chunkZ, OreGenerator.bismuth.minHeight, OreGenerator.bismuth.maxHeight);
				GenerationUtils.generateOre(coords.x, coords.y, coords.z, BlockID.bismuthore, 0, OreGenerator.bismuth.size);
			}
		});
	}
	if(OreGenerator.lithium.enabled){
		Callback.addCallback("GenerateChunkUnderground", function(chunkX, chunkZ){
			for(var i = 0; i < OreGenerator.lithium.count; i++){
				var coords = GenerationUtils.randomCoords(chunkX, chunkZ, OreGenerator.lithium.minHeight, OreGenerator.lithium.maxHeight);
				GenerationUtils.generateOre(coords.x, coords.y, coords.z, BlockID.lithiumore, 0, OreGenerator.lithium.size);
			}
		});
	}
	if(OreGenerator.plumbum.enabled){
		Callback.addCallback("GenerateChunkUnderground", function(chunkX, chunkZ){
			for(var i = 0; i < OreGenerator.plumbum.count; i++){
				var coords = GenerationUtils.randomCoords(chunkX, chunkZ, OreGenerator.plumbum.minHeight, OreGenerator.plumbum.maxHeight);
				GenerationUtils.generateOre(coords.x, coords.y, coords.z, BlockID.plumbumore, 0, OreGenerator.plumbum.size);
			}
		});
	}
	if(OreGenerator.ruby.enabled){
		Callback.addCallback("GenerateChunkUnderground", function(chunkX, chunkZ){
			for(var i = 0; i < OreGenerator.ruby.count; i++){
				var coords = GenerationUtils.randomCoords(chunkX, chunkZ, OreGenerator.ruby.minHeight, OreGenerator.ruby.maxHeight);
				GenerationUtils.generateOre(coords.x, coords.y, coords.z, BlockID.rubyore, 0, OreGenerator.ruby.size);
			}
		});
	}
	if(OreGenerator.sapphire.enabled){
		Callback.addCallback("GenerateChunkUnderground", function(chunkX, chunkZ){
			for(var i = 0; i < OreGenerator.sapphire.count; i++){
				var coords = GenerationUtils.randomCoords(chunkX, chunkZ, OreGenerator.sapphire.minHeight, OreGenerator.sapphire.maxHeight);
				GenerationUtils.generateOre(coords.x, coords.y, coords.z, BlockID.sapphireore, 0, OreGenerator.sapphire.size);
			}
		});
	}
	if(OreGenerator.amber.enabled){
		Callback.addCallback("GenerateChunkUnderground", function(chunkX, chunkZ){
			for(var i = 0; i < OreGenerator.amber.count; i++){
				var coords = GenerationUtils.randomCoords(chunkX, chunkZ, OreGenerator.amber.minHeight, OreGenerator.amber.maxHeight);
				GenerationUtils.generateOre(coords.x, coords.y, coords.z, BlockID.amberore, 0, OreGenerator.amber.size);
			}
		});
	}
});




// file: WORLDGENERATION/stonegen.js

//Cave Plus Mod for MC Bedrock - InnerCore Version
//This is the developer version of the script! Don´t change or use it.

//stonegen
var StoneGenerator = {
	slate1: {
		enabled: __config__.getBool("slateblue.enabled"),
		count: __config__.getNumber("slateblue.count"),
		size: __config__.getNumber("slateblue.size"),
		minHeight: __config__.getNumber("slateblue.minHeight"),
		maxHeight: __config__.getNumber("slateblue.maxHeight")
	},
  slate2: {
		enabled: __config__.getBool("slate.enabled"),
		count: __config__.getNumber("slate.count"),
		size: __config__.getNumber("slate.size"),
		minHeight: __config__.getNumber("slate.minHeight"),
		maxHeight: __config__.getNumber("slate.maxHeight")
	},
  greywacke1: {
		enabled: __config__.getBool("greywacke.enabled"),
		count: __config__.getNumber("greywacke.count"),
		size: __config__.getNumber("greywacke.size"),
		minHeight: __config__.getNumber("greywacke.minHeight"),
		maxHeight: __config__.getNumber("greywacke.maxHeight")
	},
  basalt1: {
		enabled: __config__.getBool("basalt.enabled"),
		count: __config__.getNumber("basalt.count"),
		size: __config__.getNumber("basalt.size"),
		minHeight: __config__.getNumber("basalt.minHeight"),
		maxHeight: __config__.getNumber("basalt.maxHeight")
	},
  dacite1: {
		enabled: __config__.getBool("dacite.enabled"),
		count: __config__.getNumber("dacite.count"),
		size: __config__.getNumber("dacite.size"),
		minHeight: __config__.getNumber("dacite.minHeight"),
		maxHeight: __config__.getNumber("dacite.maxHeight")
	},
  lime1: {
		enabled: __config__.getBool("limestone.enabled"),
		count: __config__.getNumber("limestone.count"),
		size: __config__.getNumber("limestone.size"),
		minHeight: __config__.getNumber("limestone.minHeight"),
		maxHeight: __config__.getNumber("limestone.maxHeight")
	},
  komatiite1: {
		enabled: __config__.getBool("komatiite.enabled"),
		count: __config__.getNumber("komatiite.count"),
		size: __config__.getNumber("komatiite.size"),
		minHeight: __config__.getNumber("komatiite.minHeight"),
		maxHeight: __config__.getNumber("komatiite.maxHeight")
	},
	syenite1: {
		enabled: __config__.getBool("syenite.enabled"),
		count: __config__.getNumber("syenite.count"),
		size: __config__.getNumber("syenite.size"),
		minHeight: __config__.getNumber("syenite.minHeight"),
		maxHeight: __config__.getNumber("syenite.maxHeight")
	},
	serpentinite1: {
		enabled: __config__.getBool("serpentinite.enabled"),
		count: __config__.getNumber("serpentinite.count"),
		size: __config__.getNumber("serpentinite.size"),
		minHeight: __config__.getNumber("serpentinite.minHeight"),
		maxHeight: __config__.getNumber("serpentinite.maxHeight")
	},
	rhyolite1: {
		enabled: __config__.getBool("rhyolite.enabled"),
		count: __config__.getNumber("rhyolite.count"),
		size: __config__.getNumber("rhyolite.size"),
		minHeight: __config__.getNumber("rhyolite.minHeight"),
		maxHeight: __config__.getNumber("rhyolite.maxHeight")
	},
	addFlag: function(name, flag){
		if(StoneGenerator[name].enabled){
			StoneGenerator[name].enabled = !Flags.addFlag(flag);
		}
	}
}

StoneGenerator.addFlag("slate1", "oreGenSlate");
StoneGenerator.addFlag("slate2", "oreGenSlategrey");
StoneGenerator.addFlag("greywacke1", "oreGenGreywacke");
StoneGenerator.addFlag("basalt1", "oreGenBasalt");
StoneGenerator.addFlag("dacite1", "oreGenDacite");
StoneGenerator.addFlag("lime1", "oreGenLimestone");
StoneGenerator.addFlag("komatiite1", "oreGenKomatiite");
StoneGenerator.addFlag("syenite1", "oreGenSyenite");
StoneGenerator.addFlag("serpentinite1", "oreGenSerpentinite");
StoneGenerator.addFlag("rhyolite1", "oreGenRhyolite");

Callback.addCallback("PostLoaded", function(){
	if(StoneGenerator.slate1.enabled){
		Callback.addCallback("GenerateChunkUnderground", function(chunkX, chunkZ){
			for(var i = 0; i < StoneGenerator.slate1.count; i++){
				var coords = GenerationUtils.randomCoords(chunkX, chunkZ, StoneGenerator.slate1.minHeight, StoneGenerator.slate1.maxHeight);
				GenerationUtils.generateOre(coords.x, coords.y, coords.z, BlockID.slateblue, 0, StoneGenerator.slate1.size);
			}
		});
	}
  if(StoneGenerator.slate2.enabled){
		Callback.addCallback("GenerateChunkUnderground", function(chunkX, chunkZ){
			for(var i = 0; i < StoneGenerator.slate2.count; i++){
				var coords = GenerationUtils.randomCoords(chunkX, chunkZ, StoneGenerator.slate2.minHeight, StoneGenerator.slate2.maxHeight);
				GenerationUtils.generateOre(coords.x, coords.y, coords.z, BlockID.slate, 0, StoneGenerator.slate2.size);
			}
		});
	}
  if(StoneGenerator.greywacke1.enabled){
		Callback.addCallback("GenerateChunkUnderground", function(chunkX, chunkZ){
			for(var i = 0; i < StoneGenerator.greywacke1.count; i++){
				var coords = GenerationUtils.randomCoords(chunkX, chunkZ, StoneGenerator.greywacke1.minHeight, StoneGenerator.greywacke1.maxHeight);
				GenerationUtils.generateOre(coords.x, coords.y, coords.z, BlockID.greywacke, 0, StoneGenerator.greywacke1.size);
			}
		});
	}
  if(StoneGenerator.basalt1.enabled){
		Callback.addCallback("GenerateChunkUnderground", function(chunkX, chunkZ){
			for(var i = 0; i < StoneGenerator.basalt1.count; i++){
				var coords = GenerationUtils.randomCoords(chunkX, chunkZ, StoneGenerator.basalt1.minHeight, StoneGenerator.basalt1.maxHeight);
				GenerationUtils.generateOre(coords.x, coords.y, coords.z, BlockID.basalt, 0, StoneGenerator.basalt1.size);
			}
		});
	}
  if(StoneGenerator.dacite1.enabled){
		Callback.addCallback("GenerateChunkUnderground", function(chunkX, chunkZ){
			for(var i = 0; i < StoneGenerator.dacite1.count; i++){
				var coords = GenerationUtils.randomCoords(chunkX, chunkZ, StoneGenerator.dacite1.minHeight, StoneGenerator.dacite1.maxHeight);
				GenerationUtils.generateOre(coords.x, coords.y, coords.z, BlockID.dacite, 0, StoneGenerator.dacite1.size);
			}
		});
	}
  if(StoneGenerator.lime1.enabled){
		Callback.addCallback("GenerateChunkUnderground", function(chunkX, chunkZ){
			for(var i = 0; i < StoneGenerator.lime1.count; i++){
				var coords = GenerationUtils.randomCoords(chunkX, chunkZ, StoneGenerator.lime1.minHeight, StoneGenerator.lime1.maxHeight);
				GenerationUtils.generateOre(coords.x, coords.y, coords.z, BlockID.limestone, 0, StoneGenerator.lime1.size);
			}
		});
	}
  if(StoneGenerator.komatiite1.enabled){
		Callback.addCallback("GenerateChunkUnderground", function(chunkX, chunkZ){
			for(var i = 0; i < StoneGenerator.komatiite1.count; i++){
				var coords = GenerationUtils.randomCoords(chunkX, chunkZ, StoneGenerator.komatiite1.minHeight, StoneGenerator.komatiite1.maxHeight);
				GenerationUtils.generateOre(coords.x, coords.y, coords.z, BlockID.komatiite, 0, StoneGenerator.komatiite1.size);
			}
		});
	}
	if(StoneGenerator.syenite1.enabled){
		Callback.addCallback("GenerateChunkUnderground", function(chunkX, chunkZ){
			for(var i = 0; i < StoneGenerator.syenite1.count; i++){
				var coords = GenerationUtils.randomCoords(chunkX, chunkZ, StoneGenerator.syenite1.minHeight, StoneGenerator.syenite1.maxHeight);
				GenerationUtils.generateOre(coords.x, coords.y, coords.z, BlockID.syenite, 0, StoneGenerator.syenite1.size);
			}
		});
	}
	if(StoneGenerator.serpentinite1.enabled){
		Callback.addCallback("GenerateChunkUnderground", function(chunkX, chunkZ){
			for(var i = 0; i < StoneGenerator.serpentinite1.count; i++){
				var coords = GenerationUtils.randomCoords(chunkX, chunkZ, StoneGenerator.serpentinite1.minHeight, StoneGenerator.serpentinite1.maxHeight);
				GenerationUtils.generateOre(coords.x, coords.y, coords.z, BlockID.serpentinite, 0, StoneGenerator.serpentinite1.size);
			}
		});
	}
	if(StoneGenerator.rhyolite1.enabled){
		Callback.addCallback("GenerateChunkUnderground", function(chunkX, chunkZ){
			for(var i = 0; i < StoneGenerator.rhyolite1.count; i++){
				var coords = GenerationUtils.randomCoords(chunkX, chunkZ, StoneGenerator.rhyolite1.minHeight, StoneGenerator.rhyolite1.maxHeight);
				GenerationUtils.generateOre(coords.x, coords.y, coords.z, BlockID.rhyolite, 0, StoneGenerator.rhyolite1.size);
			}
		});
	}
});




