{
    let mesh = new RenderMesh();
    mesh.setBlockTexture("sieve_void", 0);
    mesh.importFromFile(__dir__ + "assets/models/blocks/model_sieve.obj", "obj", {
        translate: [0.5, 0.5, 0.5],
        scale: [1 / 16, 1 / 16, 1 / 16]
    });
    let blockModel = new BlockRenderer.Model(mesh);
    let blockRender = new ICRender.Model();
    blockRender.addEntry(blockModel);
    BlockRenderer.setStaticICRender(BlockID.sieve, -1, blockRender);
}