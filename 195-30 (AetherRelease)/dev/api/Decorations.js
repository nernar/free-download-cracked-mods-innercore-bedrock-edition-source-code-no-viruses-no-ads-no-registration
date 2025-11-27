var FixedRotateble = function(id, data, texture, mesh, render) {
    mesh.variable.setBlockTexture(texture.texture, texture.meta);
    mesh.variable.importFromFile(__dir__ + "models/" + mesh.name + ".obj", "obj", {
        translate: [Math.random() - .1, 0, Math.random() - .1]
    });
    for (var i in data) {
        var current = data[i];
            let datas_mesh = mesh.variable.clone();
            let step = (Math.PI * 2) / current;
            datas_mesh.rotate(0, current * step, 0);
            render.addEntry(new BlockRenderer.Model(datas_mesh));
            BlockRenderer.setStaticICRender(id, current, render);
            var shape = new ICRender.CollisionShape();
            BlockRenderer.setCustomCollisionShape(id, data, shape);      
    }
}