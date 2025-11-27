let __ground_generation_find_surface = function (x, y, z, block) {
    for (var i = 50; i < 250; i++) {
        let blockID1 = World.getBlockID(x, i, z);
        let blockID2 = World.getBlockID(x, i + 1, z);
        if (block[blockID1] && blockID2 == 0) {
            return { x: x, y: i, z: z };
        }
    }
    return null;
};

IDRegistry.genBlockID("groundStick");
Block.createBlock("groundStick", [{ name: "Stick", texture: [["planks", 0]], inCreative: false }]);

Callback.addCallback("ItemUse", function (position, item, block) {
    if (block.id == BlockID.groundStick) {
        World.destroyBlock(position.x, position.y, position.z, true);
    }
});
Block.registerDropFunction(BlockID.groundStick, function () {
    return [[280, 1, 0]];
}, 0);
Callback.addCallback("GenerateChunk", function (chunkX, chunkZ) {
    for (var i = 0; i < Random.randomInteger(0, 4); i++) {
        if (Random.randomInteger(0, 10) < 5) {
            var position = GenerationUtils.randomCoords(chunkX, chunkZ, 50, 128);
            position = __ground_generation_find_surface(position.x, position.y, position.z, { 2: true });
            if (position) {
                World.setBlock(position.x, position.y + 1, position.z, BlockID.groundStick, 0)
            }
        }
    }
});

{
    let __ground_stick_graphics_render = function () {
        let modelMesh = new RenderMesh();
        modelMesh.setBlockTexture("ground_stick", 0);
        modelMesh.importFromFile(__dir__ + "assets/models/blocks/model_ground_stick.obj", "obj", {
            scale: [1 / 16, 1 / 16, 1 / 16],
            translate: [0.5, 0.5, 0.5]
        });
        let blockModel = new BlockRenderer.Model(modelMesh);
        let render = new ICRender.Model();
        render.addEntry(blockModel);
        return render;
    };
    BlockRenderer.setStaticICRender(BlockID.groundStick, -1, __ground_stick_graphics_render());
    ModelRender.setBlockEmptyShape(BlockID.groundStick, -1);
}

IDRegistry.genBlockID("groundStone");
Block.createBlock("groundStone", [{ name: "Stone", texture: [["stone", 0]], inCreative: false }]);

Callback.addCallback("ItemUse", function (position, item, block) {
    if (block.id == BlockID.groundStone) {
        World.destroyBlock(position.x, position.y, position.z, true);
    }
});
Block.registerDropFunction(BlockID.groundStone, function () {
    return [[ItemID.chunkStone, 1, 0]];
}, 0);
Callback.addCallback("GenerateChunk", function (chunkX, chunkZ) {
    for (var i = 0; i < Random.randomInteger(0, 4); i++) {
        if (Random.randomInteger(0, 10) < 5) {
            var position = GenerationUtils.randomCoords(chunkX, chunkZ, 50, 128);
            position = __ground_generation_find_surface(position.x, position.y, position.z, { 1: true, 2: true });
            if (position) {
                World.setBlock(position.x, position.y + 1, position.z, BlockID.groundStone, 0)
            }
        }
    }
});

{
    let __ground_stone_graphics_render = function () {
        let modelMesh = new RenderMesh();
        modelMesh.setBlockTexture("ground_stone", 0);
        modelMesh.importFromFile(__dir__ + "assets/models/blocks/model_ground_stone.obj", "obj", {
            scale: [1 / 16, 1 / 16, 1 / 16],
            translate: [0.5, 0.5, 0.5]
        });
        let blockModel = new BlockRenderer.Model(modelMesh);
        let render = new ICRender.Model();
        render.addEntry(blockModel);
        return render;
    };
    BlockRenderer.setStaticICRender(BlockID.groundStone, -1, __ground_stone_graphics_render());
    ModelRender.setBlockEmptyShape(BlockID.groundStone, -1);
}