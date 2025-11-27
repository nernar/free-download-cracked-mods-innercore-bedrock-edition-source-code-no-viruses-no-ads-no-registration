{
    let mesh = new RenderMesh();
    mesh.setBlockTexture("bellows", 0);
    mesh.importFromFile(__dir__ + "assets/models/blocks/model_bellows.obj", "obj", {
        translate: [0.5, 0.5, 0.5],
        scale: [1 / 16, 1 / 16, 1 / 16]
    });
    let blockModel = new BlockRenderer.Model(mesh);
    let blockRender = new ICRender.Model();
    blockRender.addEntry(blockModel);
    BlockRenderer.setStaticICRender(BlockID.bellows, 1, blockRender);
}

{
    let mesh = new RenderMesh();
    mesh.setBlockTexture("bellows", 0);
    mesh.importFromFile(__dir__ + "assets/models/blocks/model_bellows_1.obj", "obj", {
        translate: [0.5, 0.5, 0.5],
        scale: [1 / 16, 1 / 16, 1 / 16]
    });
    let blockModel = new BlockRenderer.Model(mesh);
    let blockRender = new ICRender.Model();
    blockRender.addEntry(blockModel);
    BlockRenderer.setStaticICRender(BlockID.bellows, 3, blockRender);
}

{
    let mesh = new RenderMesh();
    mesh.setBlockTexture("bellows", 0);
    mesh.importFromFile(__dir__ + "assets/models/blocks/model_bellows_2.obj", "obj", {
        translate: [0.5, 0.5, 0.5],
        scale: [1 / 16, 1 / 16, 1 / 16]
    });
    let blockModel = new BlockRenderer.Model(mesh);
    let blockRender = new ICRender.Model();
    blockRender.addEntry(blockModel);
    BlockRenderer.setStaticICRender(BlockID.bellows, 0, blockRender);
}

{
    let mesh = new RenderMesh();
    mesh.setBlockTexture("bellows", 0);
    mesh.importFromFile(__dir__ + "assets/models/blocks/model_bellows_3.obj", "obj", {
        translate: [0.5, 0.5, 0.5],
        scale: [1 / 16, 1 / 16, 1 / 16]
    });
    let blockModel = new BlockRenderer.Model(mesh);
    let blockRender = new ICRender.Model();
    blockRender.addEntry(blockModel);
    BlockRenderer.setStaticICRender(BlockID.bellows, 2, blockRender);
}