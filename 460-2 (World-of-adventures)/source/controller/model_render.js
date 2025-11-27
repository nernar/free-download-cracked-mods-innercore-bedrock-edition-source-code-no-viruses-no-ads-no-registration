const ModelRender = {

    setBlockEmptyShape: function(blockID, blockData){
        let render = new ICRender.CollisionShape();
        render.addEntry().addBox(1, 1, 1, 0, 0, 0);
        BlockRenderer.setCustomCollisionShape(blockID, blockData, render);
    },

    importBlockRenderFromMesh: function(modelFile){
        let model = new RenderMesh();
        model.importFromFile(__dir__ + "assets/models/blocks/" + modelFile, "obj", {
            scale: [1 / 16, 1 / 16, 1 / 16],
            translate: [0.5, 0.5, 0.5]
        });
        return model;
    }
};