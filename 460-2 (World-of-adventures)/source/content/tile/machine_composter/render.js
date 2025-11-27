{
    let mesh = new RenderMesh();
    mesh.setBlockTexture("composter_void", 0);
    mesh.importFromFile(__dir__ + "assets/models/blocks/model_composter_void.obj", "obj", {
        translate: [0.5, 0.5, 0.5],
        scale: [1 / 16, 1 / 16, 1 / 16]
    });
    let blockModel = new BlockRenderer.Model(mesh);
    let blockRender = new ICRender.Model();
    blockRender.addEntry(blockModel);
    BlockRenderer.setStaticICRender(BlockID.composter, -1, blockRender);
    BlockRenderer.enableCoordMapping(BlockID.composter, -1, blockRender);
}

let _create_compost_model = function (size) {
    let blockModel = new BlockRenderer.Model();
    let mesh = new RenderMesh();
    mesh.setBlockTexture("composter_void", 0);
    mesh.importFromFile(__dir__ + "assets/models/blocks/model_composter_void.obj", "obj", {
        translate: [0.5, 0.5, 0.5],
        scale: [1 / 16, 1 / 16, 1 / 16]
    });

    if (size < 7) blockModel.addBox(2 / 16, 2 / 16, 2 / 16, 14 / 16, 2 / 16 + size * 2 / 16, 14 / 16, "compost", 0);
    else blockModel.addBox(2 / 16, 2 / 16, 2 / 16, 14 / 16, 1, 14 / 16, "compost_ready", 0);

    let blockRender = new ICRender.Model();
    blockRender.addEntry(blockModel);
    blockRender.addEntry(mesh);
    return blockRender;
}