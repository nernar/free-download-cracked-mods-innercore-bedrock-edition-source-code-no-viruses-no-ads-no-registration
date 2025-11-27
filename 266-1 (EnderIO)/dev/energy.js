function setupConduitRender(id, groupName, width, preventSelfAdd) {
    let render = new ICRender.Model();
    BlockRenderer.setStaticICRender(id, 0, render);
    let boxes = [{side: [1, 0, 0], box: [0.5 + width / 2, 0.5 - width / 2, 0.5 - width / 2, 1, 0.5 + width / 2, 0.5 + width / 2]}, {side: [-1, 0, 0], box: [0, 0.5 - width / 2, 0.5 - width / 2, 0.5 - width / 2, 0.5 + width / 2, 0.5 + width / 2]}, {side: [0, 1, 0], box: [0.5 - width / 2, 0.5 + width / 2, 0.5 - width / 2, 0.5 + width / 2, 1, 0.5 + width / 2]}, {side: [0, -1, 0], box: [0.5 - width / 2, 0, 0.5 - width / 2, 0.5 + width / 2, 0.5 - width / 2, 0.5 + width / 2]}, {side: [0, 0, 1], box: [0.5 - width / 2, 0.5 - width / 2, 0.5 + width / 2, 0.5 + width / 2, 0.5 + width / 2, 1]}, {side: [0, 0, -1], box: [0.5 - width / 2, 0.5 - width / 2, 0, 0.5 + width / 2, 0.5 + width / 2, 0.5 - width / 2]}];
    let group = ICRender.getGroup(groupName);
    if (!preventSelfAdd) {
        group.add(id, -1);
    }
    for (let i in boxes) {
        let box = boxes[i];
        let model = BlockRenderer.createModel();
        model.addBox(box.box[0], box.box[1], box.box[2], box.box[3], box.box[4], box.box[5], id, 0);
        render.addEntry(model).asCondition(box.side[0], box.side[1], box.side[2], group, 0);
    }
    let modelOwn = BlockRenderer.createModel();
    modelOwn.addBox(0.5 - width / 2, 0.5 - width / 2, 0.5 - width / 2, 0.5 + width / 2, 0.5 + width / 2, 0.5 + width / 2, id, 0);
    render.addEntry(modelOwn);
}
IDRegistry.genBlockID("powerConduit");
Block.createBlock("powerConduit", [{name: "Conductive iron conduit", texture: [["powerConduitCore", 0]], inCreative: true}]);
RF.registerWire(BlockID.powerConduit);
setupConduitRender(BlockID.powerConduit, "rf-wire", 0.25);
Block.setBlockShape(BlockID.powerConduit, {x: 0.2, y: 0.2, z: 0.2}, {x: 0.8, y: 0.8, z: 0.8});

