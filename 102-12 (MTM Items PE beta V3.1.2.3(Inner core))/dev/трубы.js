function setupWireRender(id, groupName, width, widthb, idb, preventSelfAdd) {
    let render = new ICRender.Model();
    BlockRenderer.setStaticICRender(id, 0, render);
    let boxes = [
        {side: [1, 0, 0], box: [0.5 + width / 2, 0.5 - width / 2, 0.5 - width / 2, 1, 0.5 + width / 2, 0.5 + width / 2]},
        {side: [-1, 0, 0], box: [0, 0.5 - width / 2, 0.5 - width / 2, 0.5 - width / 2, 0.5 + width / 2, 0.5 + width / 2]},
        {side: [0, 1, 0], box: [0.5 - width / 2, 0.5 + width / 2, 0.5 - width / 2, 0.5 + width / 2, 1, 0.5 + width / 2]},
        {side: [0, -1, 0], box: [0.5 - width / 2, 0, 0.5 - width / 2, 0.5 + width / 2, 0.5 - width / 2, 0.5 + width / 2]},
        {side: [0, 0, 1], box: [0.5 - width / 2, 0.5 - width / 2, 0.5 + width / 2, 0.5 + width / 2, 0.5 + width / 2, 1]},
        {side: [0, 0, -1], box: [0.5 - width / 2, 0.5 - width / 2, 0, 0.5 + width / 2, 0.5 + width / 2, 0.5 - width / 2]},
    ];
    let bxes = [
        {side: [1, 0, 0], box: [0.5 + widthb / 2, 0.5 - widthb / 2, 0.5 - widthb / 2, 1, 0.5 + widthb / 2, 0.5 + widthb / 2]},
        {side: [-1, 0, 0], box: [0, 0.5 - widthb / 2, 0.5 - widthb / 2, 0.5 - widthb / 2, 0.5 + widthb / 2, 0.5 + widthb / 2]},
        {side: [0, 1, 0], box: [0.5 - widthb / 2, 0.5 + widthb / 2, 0.5 - widthb / 2, 0.5 + widthb / 2, 1, 0.5 + widthb / 2]},
        {side: [0, -1, 0], box: [0.5 - widthb / 2, 0, 0.5 - widthb / 2, 0.5 + widthb / 2, 0.5 - widthb / 2, 0.5 + widthb / 2]},
        {side: [0, 0, 1], box: [0.5 - widthb / 2, 0.5 - widthb / 2, 0.5 + widthb / 2, 0.5 + widthb / 2, 0.5 + widthb / 2, 1]},
        {side: [0, 0, -1], box: [0.5 - widthb / 2, 0.5 - widthb / 2, 0, 0.5 + widthb / 2, 0.5 + widthb / 2, 0.5 - widthb / 2]},
    ];
    let group = ICRender.getGroup(groupName);
    if (!preventSelfAdd) {
        group.add(id, -1);
    }
    for (let i in boxes) {
        let box = boxes[i];
        let model = BlockRenderer.createModel();
        model.addBox(box.box[0], box.box[1], box.box[2], box.box[3], box.box[4], box.box[5], idb, 0);
        render.addEntry(model).asCondition(box.side[0], box.side[1], box.side[2], group, 0);
        }
    for (let i in bxes) {
        let bx = bxes[i];
        let mdel = BlockRenderer.createModel();
        mdel.addBox(bx.box[0], bx.box[1], bx.box[2], bx.box[3], bx.box[4], bx.box[5], id, 0);
    render.addEntry(mdel).asCondition(bx.side[0], bx.side[1], bx.side[2], group, 0);
    }
        let modelOwn = BlockRenderer.createModel();
    modelOwn.addBox(0.5 - width / 2, 0.5 - width / 2, 0.5 - width / 2, 0.5 + width / 2, 0.5 + width / 2, 0.5 + width / 2, idb, 0);
    modelOwn.addBox(0.5 - widthb / 2, 0.5 - widthb / 2, 0.5 - widthb / 2, 0.5 + widthb / 2, 0.5 + widthb / 2, 0.5 + widthb / 2, id, 0);
    render.addEntry(modelOwn);
}
IDRegistry.genBlockID("stalnaia_tryba");
Block.createBlock("stalnaia_tryba", [{name: "Стальной провод", texture: [["стальной_провод", 0]], inCreative: true}]);
IDRegistry.genBlockID("stalnaia_obolochka");
Block.createBlock("stalnaia_obolochka", [{name: "Стальной провод", texture: [["стальная_оболочка", 0]], inCreative: false}]);
RF.registerWire(BlockID.stalnaia_tryba, 128);
setupWireRender(BlockID.stalnaia_tryba, "rf-wire", 6/16, 4/16, BlockID.stalnaia_obolochka);
Block.setBlockShape(BlockID.stalnaia_tryba, {x: 5/16, y: 5/16, z: 5/16}, {x: 11/16, y: 11/16, z: 11/16});
IDRegistry.genBlockID("rybinovaia_tryba");
Block.createBlock("rybinovaia_tryba", [{name: "Рубиновый провод", texture: [["рубиновый_провод", 0]], inCreative: false}]);
IDRegistry.genBlockID("rybinovaia_obolochka");
Block.createBlock("rybinovaia_obolochka", [{name: "Стальной провод", texture: [["рубиновая_оболочка", 0]], inCreative: false}]);
RF.registerWire(BlockID.rybinovaia_tryba, 512);
setupWireRender(BlockID.rybinovaia_tryba, "rf-wire", 6/16, 5/16, BlockID.rybinovaia_obolochka);
Block.setBlockShape(BlockID.rybinovaia_tryba, {x: 5/16, y: 5/16, z: 5/16}, {x: 11/16, y: 11/16, z: 11/16});