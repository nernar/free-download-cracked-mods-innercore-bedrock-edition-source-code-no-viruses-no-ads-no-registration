IDRegistry.genBlockID("corundumOre");
Block.createBlock("corundumOre", [{name: "Corundum ore", texture: [["corundumOre", 0]], inCreative: true}]);
ToolAPI.registerBlockMaterial(BlockID.corundumOre, "stone");
Callback.addCallback("GenerateChunk", function (x, z) {
    let generator = function (inChunk, block, minY, maxY, size) {
        for (var i = 0; i < inChunk; i++) {
            let c = GenerationUtils.randomCoords(x, z, minY, maxY);
            GenerationUtils.generateOre(c.x, c.y, c.z, BlockID[block], 0, Math.floor(Math.random() * (size - 1 + 1)) + 1);
        }
    };
    generator(10, "corundumOre", 1, 64, 6);
});
IDRegistry.genBlockID("ebonyOre");
Block.createBlock("ebonyOre", [{name: "Ebony ore", texture: [["ebonyOre", 0]], inCreative: true}]);
ToolAPI.registerBlockMaterial(BlockID.ebonyOre, "stone");
Callback.addCallback("GenerateChunk", function (x, z) {
    let generator = function (inChunk, block, minY, maxY, size) {
        for (var i = 0; i < inChunk; i++) {
            let c = GenerationUtils.randomCoords(x, z, minY, maxY);
            GenerationUtils.generateOre(c.x, c.y, c.z, BlockID[block], 0, Math.floor(Math.random() * (size - 1 + 1)) + 1);
        }
    };
    generator(10, "ebonyOre", 1, 64, 6);
});
IDRegistry.genBlockID("malachiteOre");
Block.createBlock("malachiteOre", [{name: "Malachite ore", texture: [["malachiteOre", 0]], inCreative: true}]);
ToolAPI.registerBlockMaterial(BlockID.malachiteOre, "stone");
Callback.addCallback("GenerateChunk", function (x, z) {
    let generator = function (inChunk, block, minY, maxY, size) {
        for (var i = 0; i < inChunk; i++) {
            let c = GenerationUtils.randomCoords(x, z, minY, maxY);
            GenerationUtils.generateOre(c.x, c.y, c.z, BlockID[block], 0, Math.floor(Math.random() * (size - 1 + 1)) + 1);
        }
    };
    generator(10, "malachiteOre", 1, 64, 6);
});
IDRegistry.genBlockID("moonstoneOre");
Block.createBlock("moonstoneOre", [{name: "Moonstone ore", texture: [["moonstoneOre", 0]], inCreative: true}]);
ToolAPI.registerBlockMaterial(BlockID.moonstoneOre, "stone");
Callback.addCallback("GenerateChunk", function (x, z) {
    let generator = function (inChunk, block, minY, maxY, size) {
        for (var i = 0; i < inChunk; i++) {
            let c = GenerationUtils.randomCoords(x, z, minY, maxY);
            GenerationUtils.generateOre(c.x, c.y, c.z, BlockID[block], 0, Math.floor(Math.random() * (size - 1 + 1)) + 1);
        }
    };
    generator(10, "moonstoneOre", 1, 64, 6);
});
IDRegistry.genBlockID("orichalcumOre");
Block.createBlock("orichalcumOre", [{name: "Orichalcum ore", texture: [["orichalcumOre", 0]], inCreative: true}]);
ToolAPI.registerBlockMaterial(BlockID.orichalcumOre, "stone");
Callback.addCallback("GenerateChunk", function (x, z) {
    let generator = function (inChunk, block, minY, maxY, size) {
        for (var i = 0; i < inChunk; i++) {
            let c = GenerationUtils.randomCoords(x, z, minY, maxY);
            GenerationUtils.generateOre(c.x, c.y, c.z, BlockID[block], 0, Math.floor(Math.random() * (size - 1 + 1)) + 1);
        }
    };
    generator(10, "orichalcumOre", 1, 64, 6);
});
IDRegistry.genBlockID("quicksilverOre");
Block.createBlock("quicksilverOre", [{name: "Quicksilver ore", texture: [["quicksilverOre", 0]], inCreative: true}]);
ToolAPI.registerBlockMaterial(BlockID.quicksilverOre, "stone");
Callback.addCallback("GenerateChunk", function (x, z) {
    let generator = function (inChunk, block, minY, maxY, size) {
        for (var i = 0; i < inChunk; i++) {
            let c = GenerationUtils.randomCoords(x, z, minY, maxY);
            GenerationUtils.generateOre(c.x, c.y, c.z, BlockID[block], 0, Math.floor(Math.random() * (size - 1 + 1)) + 1);
        }
    };
    generator(10, "quicksilverOre", 1, 64, 6);
});
IDRegistry.genBlockID("silverOre");
Block.createBlock("silverOre", [{name: "Silver ore", texture: [["silverOre", 0]], inCreative: true}]);
ToolAPI.registerBlockMaterial(BlockID.silverOre, "stone");
Callback.addCallback("GenerateChunk", function (x, z) {
    let generator = function (inChunk, block, minY, maxY, size) {
        for (var i = 0; i < inChunk; i++) {
            let c = GenerationUtils.randomCoords(x, z, minY, maxY);
            GenerationUtils.generateOre(c.x, c.y, c.z, BlockID[block], 0, Math.floor(Math.random() * (size - 1 + 1)) + 1);
        }
    };
    generator(10, "silverOre", 1, 64, 6);
});
IDRegistry.genBlockID("crystalOre");
Block.createBlock("crystalOre", [{name: "Crystal ore", texture: [["cristalOre", 0]], inCreative: true}]);
ToolAPI.registerBlockMaterial(BlockID.cristalOre, "stone");
Callback.addCallback("GenerateChunk", function (x, z) {
    let generator = function (inChunk, block, minY, maxY, size) {
        for (var i = 0; i < inChunk; i++) {
            let c = GenerationUtils.randomCoords(x, z, minY, maxY);
            GenerationUtils.generateOre(c.x, c.y, c.z, BlockID[block], 0, Math.floor(Math.random() * (size - 1 + 1)) + 1);
        }
    };
    generator(10, "crystalOre", 1, 64, 6);
});

