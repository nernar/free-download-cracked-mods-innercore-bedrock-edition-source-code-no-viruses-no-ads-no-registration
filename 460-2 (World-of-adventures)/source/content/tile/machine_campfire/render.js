{
    let mesh = new RenderMesh();
    mesh.setBlockTexture("campfire_void", 0);
    mesh.importFromFile(__dir__ + "assets/models/blocks/model_campfire_void.obj", "obj", {
        translate: [0.5, 0.5, 0.5],
        scale: [1 / 16, 1 / 16, 1 / 16]
    });
    let blockModel = new BlockRenderer.Model(mesh);
    let blockRender = new ICRender.Model();
    blockRender.addEntry(blockModel);
    BlockRenderer.setStaticICRender(BlockID.furnaceCampfireBlock, -1, blockRender);
    BlockRenderer.enableCoordMapping(BlockID.furnaceCampfireBlock, -1, blockRender);
}

{
    let mesh = new RenderMesh();
    mesh.setBlockTexture("campfire_void", 0);
    mesh.importFromFile(__dir__ + "assets/models/blocks/model_campfire_void.obj", "obj", {
        translate: [0.5, 0.5, 0.5],
        scale: [1 / 16, 1 / 16, 1 / 16]
    });
    let blockModel = new BlockRenderer.Model(mesh);
    var CampfireEFFECTRENDER = new ICRender.Model();
    CampfireEFFECTRENDER.addEntry(blockModel);

    let effect = [
        [0.15, 0, 0.15, 1, 1],
        [0.85, 0, 0.85, 0, 1],
        [0.85, 1, 0.85, 0, 0],
        [0.15, 0, 0.15, 1, 1],
        [0.15, 1, 0.15, 1, 0],
        [0.85, 1, 0.85, 0, 0],
        [0.15, 0, 0.85, 1, 1],
        [0.85, 0, 0.15, 0, 1],
        [0.85, 1, 0.15, 0, 0],
        [0.15, 0, 0.85, 1, 1],
        [0.15, 1, 0.85, 1, 0],
        [0.85, 1, 0.15, 0, 0]
    ]
    let effectMesh = new RenderMesh();
    effectMesh.setBlockTexture("campfire_effect",  0);
    for (var i = 0; i < 12; i++) {
        var poly = effect[i];
        effectMesh.addVertex(poly[0], poly[1], poly[2], poly[3], poly[4]);
    }
    for (var i = 11; i >= 0; i--) {
        var poly = effect[i];
        effectMesh.addVertex(poly[0], poly[1], poly[2], poly[3], poly[4]);
    }
    CampfireEFFECTRENDER.addEntry(effectMesh);
}