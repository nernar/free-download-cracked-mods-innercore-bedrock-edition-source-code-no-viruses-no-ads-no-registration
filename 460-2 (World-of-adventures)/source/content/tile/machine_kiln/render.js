{
    let mesh = new RenderMesh();
    mesh.setBlockTexture("furnace_ceramic", 0);
    mesh.importFromFile(__dir__ + "assets/models/blocks/model_furnace_ceramic.obj", "obj", {
        translate: [0.5, 0.5, 0.5],
        scale: [1 / 16, 1 / 16, 1 / 16]
    });
    let blockModel = new BlockRenderer.Model(mesh);
    let blockRender = new ICRender.Model();
    blockRender.addEntry(blockModel);
    BlockRenderer.setStaticICRender(BlockID.kiln, 1, blockRender);
}

{
    let mesh = new RenderMesh();
    mesh.setBlockTexture("furnace_ceramic", 0);
    mesh.importFromFile(__dir__ + "assets/models/blocks/model_furnace_ceramic_1.obj", "obj", {
        translate: [0.5, 0.5, 0.5],
        scale: [1 / 16, 1 / 16, 1 / 16]
    });
    let blockModel = new BlockRenderer.Model(mesh);
    let blockRender = new ICRender.Model();
    blockRender.addEntry(blockModel);
    BlockRenderer.setStaticICRender(BlockID.kiln, 3, blockRender);
}

{
    let mesh = new RenderMesh();
    mesh.setBlockTexture("furnace_ceramic", 0);
    mesh.importFromFile(__dir__ + "assets/models/blocks/model_furnace_ceramic_2.obj", "obj", {
        translate: [0.5, 0.5, 0.5],
        scale: [1 / 16, 1 / 16, 1 / 16]
    });
    let blockModel = new BlockRenderer.Model(mesh);
    let blockRender = new ICRender.Model();
    blockRender.addEntry(blockModel);
    BlockRenderer.setStaticICRender(BlockID.kiln, 0, blockRender);
}

{
    let mesh = new RenderMesh();
    mesh.setBlockTexture("furnace_ceramic", 0);
    mesh.importFromFile(__dir__ + "assets/models/blocks/model_furnace_ceramic_3.obj", "obj", {
        translate: [0.5, 0.5, 0.5],
        scale: [1 / 16, 1 / 16, 1 / 16]
    });
    let blockModel = new BlockRenderer.Model(mesh);
    let blockRender = new ICRender.Model();
    blockRender.addEntry(blockModel);
    BlockRenderer.setStaticICRender(BlockID.kiln, 2, blockRender);
}