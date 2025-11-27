IDRegistry.genBlockID("oreLead");
Block.createBlock("oreLead", [
    {name: "Lead ore", texture: [["ore_lead", 0]], inCreative: true}
]);

IDRegistry.genBlockID("oreAdamantium");
Block.createBlock("oreAdamantium", [
    {name: "Adamantium ore", texture: [["ore_adamantium", 0]], inCreative: true}
]);

IDRegistry.genBlockID("oreOryhalk");
Block.createBlock("oreOryhalk", [
    {name: "Oryhalk ore", texture: [["ore_oryhalk", 0]], inCreative: true}
]);

IDRegistry.genBlockID("oreTitanium");
Block.createBlock("oreTitanium", [
    {name: "Titanium ore", texture: [["ore_titanium", 0]], inCreative: true}
]);

IDRegistry.genBlockID("oreMithril");
Block.createBlock("oreMithril", [
    {name: "Mithril ore", texture: [["ore_mithril", 0]], inCreative: true}
]);

IDRegistry.genBlockID("orePlatinum");
Block.createBlock("orePlatinum", [
    {name: "Platinum ore", texture: [["ore_platinum", 0]], inCreative: true}
]);

IDRegistry.genBlockID("oreSilver");
Block.createBlock("oreSilver", [
    {name: "Silver ore", texture: [["ore_silver", 0]], inCreative: true}
]);

IDRegistry.genBlockID("oreTin");
Block.createBlock("oreTin", [
    {name: "Tin ore", texture: [["ore_tin", 0]], inCreative: true}
]);

IDRegistry.genBlockID("oreCopper");
Block.createBlock("oreCopper", [
    {name: "Copper ore", texture: [["ore_copper", 0]], inCreative: true}
]);

IDRegistry.genBlockID("SynolOre");
Block.createBlock("SynolOre", [
    {name: "Synol ore", texture: [["senol", 0]], inCreative: true}
]);

ToolAPI.registerBlockMaterialAsArray("stone", [BlockID.oreLead, BlockID.oreMithil, BlockID.orePlatinum, BlockID.oreSilver, BlockID.oreTin, BlockID.oreCopper, BlockID.oreAdamantium, BlockID.oreTitanium, BlockID.oreOryhalk, BlockID.SynolOre, BlockID.oreOvermaz]);
ToolAPI.registerBlockDiggingLevel(BlockID.SynolOre, 1);
ToolAPI.registerBlockDiggingLevel(BlockID.oreLead, 2);
ToolAPI.registerBlockDiggingLevel(BlockID.oreMithil, 3);
ToolAPI.registerBlockDiggingLevel(BlockID.orePlatinum, 3);
ToolAPI.registerBlockDiggingLevel(BlockID.oreAdamantium, 4);
ToolAPI.registerBlockDiggingLevel(BlockID.oreSilver, 2);
ToolAPI.registerBlockDiggingLevel(BlockID.oreTin, 1);
ToolAPI.registerBlockDiggingLevel(BlockID.oreCopper, 1);
ToolAPI.registerBlockDiggingLevel(BlockID.oreTitanium, 4);
ToolAPI.registerBlockDiggingLevel(BlockID.oreOryhalk, 3);

Block.registerDropFunction("SynolOre", function(coords, blockID, blockData, level, enchant){
        return [[ItemID.Synol, 1, 0]]
		Player.addExperience(2);
    return [];
	
});

var OreGenerator = {
    random: function (min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    },

    generate: function (x, y, z, maxCount) {
        if (World.getBlock(x, y, z).id === 1) {
            GenerationUtils.setLockedBlock(x, y, z);
            for (var i = 1; i < this.random(1, maxCount); i++) {
                GenerationUtils.setLockedBlock(x + this.random(-1, 1), y + this.random(-1, 1), z + this.random(-1, 1));
            }
        }
    }
};

Callback.addCallback("GenerateChunkUnderground", function (chunkX, chunkZ) {

    if (Config.genSinol) {
   
GenerationUtils.lockInBlock(BlockID.SynolOre, 0);
            for (var i = 0; i < 9; i++) {
                var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 56, 85);
                OreGenerator.generate(coords.x, coords.y, coords.z, 10);
            }
}            

        if (Config.genCopper) {
            GenerationUtils.lockInBlock(BlockID.oreCopper, 0);
            for (var i = 0; i < 10; i++) {
                var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 40, 75);
                OreGenerator.generate(coords.x, coords.y, coords.z, 10);
            }
        }

        if (Config.genTin) {
            GenerationUtils.lockInBlock(BlockID.oreTin, 0);
            for (var i = 0; i < 8; i++) {
                var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 20, 55);
                OreGenerator.generate(coords.x, coords.y, coords.z, 8);
            }
        }
		
		if (Config.genOvermaz) {
            GenerationUtils.lockInBlock(BlockID.oreOvermaz, 0);
            for (var i = 0; i < 8; i++) {
                var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 19, 54);
                OreGenerator.generate(coords.x, coords.y, coords.z, 5);
            }
        }

        if (Config.genLead) {
            GenerationUtils.lockInBlock(BlockID.oreLead, 0);
            for (var i = 0; i < 8; i++) {
                var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 10, 35);
                OreGenerator.generate(coords.x, coords.y, coords.z, 8);
            }
        }
    

    if (Config.genSilver) {
        GenerationUtils.lockInBlock(BlockID.oreSilver, 0);
        for (var i = 0; i < 6; i++) {
            var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 5, 30);
            OreGenerator.generate(coords.x, coords.y, coords.z, 6);
        }
    }

    if (Config.genPlatinum) {
        GenerationUtils.lockInBlock(BlockID.orePlatinum, 0);
        for (var i = 0; i < 8; i++) {
            var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 5, 30);
            OreGenerator.generate(coords.x, coords.y, coords.z, 1);
        }
    }


});

Callback.addCallback("GenerateNetherChunk", function (chunkX, chunkZ) {
    if (Config.genMithril) {
        GenerationUtils.lockInBlock(BlockID.oreMithril, 0);
        for (var i = 0; i < 6; i++) {
            var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 3, 123);
            OreGenerator.generate(coords.x, coords.y, coords.z, 3);
        }
    }
    
if (Config.genAdamantium) {
        GenerationUtils.lockInBlock(BlockID.oreAdamantium, 0);
        for (var i = 0; i < 6; i++) {
            var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 3, 123);
            OreGenerator.generate(coords.x, coords.y, coords.z, 2);
        }
    }
});

Callback.addCallback("GenerateEndChunk", function (chunkX, chunkZ) {
    if (Config.genTitanium) {
        GenerationUtils.lockInBlock(BlockID.oreTitanium, 0);
        for (var i = 0; i < 6; i++) {
            var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 3, 123);
            OreGenerator.generate(coords.x, coords.y, coords.z, 3);
        }
    }
    
if (Config.genOryhalk) {
        GenerationUtils.lockInBlock(BlockID.oreOryhalk, 0);
        for (var i = 0; i < 6; i++) {
            var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 3, 123);
            OreGenerator.generate(coords.x, coords.y, coords.z, 4);
        }
    }
});