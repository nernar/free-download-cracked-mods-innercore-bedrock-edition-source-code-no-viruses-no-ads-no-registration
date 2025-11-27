/*
BUILD INFO:
  dir: dev
  target: main.js
  files: 1
*/



// file: header.js

const GLASS_WIDTH = 0.06;

function bakeModel(id, data, texture) {
    let render = new ICRender.Model();
    BlockRenderer.setStaticICRender(id, data, render);

    let group = ICRender.getGroup("__glass_" + id + "_" + data);
    group.add(id, data);

    let GLASS_RENDER = [
        //BORDER
        {side: ICRender.AND(ICRender.BLOCK(0, 1, 0, group, true), ICRender.BLOCK(0, 0, -1, group, true)),
            box: [0, 1 - GLASS_WIDTH, 0, 1, 1, GLASS_WIDTH]},
        {side: ICRender.AND(ICRender.BLOCK(0, 1, 0, group, true), ICRender.BLOCK(0, 0, 1, group, true)),
            box: [0, 1 - GLASS_WIDTH, 1 - GLASS_WIDTH, 1, 1, 1]},

        {side: ICRender.AND(ICRender.BLOCK(0, 1, 0, group, true), ICRender.BLOCK(-1, 0, 0, group, true)),
            box: [0, 1 - GLASS_WIDTH, 0, GLASS_WIDTH, 1, 1]},
        {side: ICRender.AND(ICRender.BLOCK(0, 1, 0, group, true), ICRender.BLOCK(1, 0, 0, group, true)),
            box: [1 - GLASS_WIDTH, 1 - GLASS_WIDTH, 0, 1, 1, 1]},

        {side: ICRender.AND(ICRender.BLOCK(-1, 0, 0, group, true), ICRender.BLOCK(0, 0, -1, group, true)),
            box: [0, 0, 0, GLASS_WIDTH, 1, GLASS_WIDTH]},
        {side: ICRender.AND(ICRender.BLOCK(-1, 0, 0, group, true), ICRender.BLOCK(0, 0, 1, group, true)),
            box: [0, 0, 1 - GLASS_WIDTH, GLASS_WIDTH, 1, 1]},

        {side: ICRender.AND(ICRender.BLOCK(1, 0, 0, group, true), ICRender.BLOCK(0, 0, -1, group, true)),
            box: [1 - GLASS_WIDTH, 0, 0, 1, 1, GLASS_WIDTH]},
        {side: ICRender.AND(ICRender.BLOCK(1, 0, 0, group, true), ICRender.BLOCK(0, 0, 1, group, true)),
            box: [1 - GLASS_WIDTH, 0, 1 - GLASS_WIDTH, 1, 1, 1]},

        {side: ICRender.AND(ICRender.BLOCK(0, -1, 0, group, true), ICRender.BLOCK(0, 0, -1, group, true)),
            box: [0, 0, 0, 1, GLASS_WIDTH, GLASS_WIDTH]},
        {side: ICRender.AND(ICRender.BLOCK(0, -1, 0, group, true), ICRender.BLOCK(0, 0, 1, group, true)),
            box: [0, 0, 1 - GLASS_WIDTH, 1, GLASS_WIDTH, 1]},

        {side: ICRender.AND(ICRender.BLOCK(0, -1, 0, group, true), ICRender.BLOCK(-1, 0, 0, group, true)),
            box: [0, 0, 0, GLASS_WIDTH, GLASS_WIDTH, 1]},
        {side: ICRender.AND(ICRender.BLOCK(0, -1, 0, group, true), ICRender.BLOCK(1, 0, 0, group, true)),
            box: [1 - GLASS_WIDTH, 0, 0, 1, GLASS_WIDTH, 1]},

        //PANELS
        {side: ICRender.BLOCK(0, 1, 0, group, true),
            box: [0, 1 - GLASS_WIDTH, 0, 1, 1, 1], textureIndex: 1},
        {side: ICRender.BLOCK(0, -1, 0, group, true),
            box: [0, 0, 0, 1, GLASS_WIDTH, 1], textureIndex: 1},

        {side: ICRender.BLOCK(0, 0, -1, group, true),
            box: [0, 0, 0, 1, 1, GLASS_WIDTH], textureIndex: 1},
        {side: ICRender.BLOCK(0, 0, 1, group, true),
            box: [0, 0, 1 - GLASS_WIDTH, 1, 1, 1], textureIndex: 1},

        {side: ICRender.BLOCK(-1, 0, 0, group, true),
            box: [0, 0, 0, GLASS_WIDTH, 1, 1], textureIndex: 1},
        {side: ICRender.BLOCK(1, 0, 0, group, true),
            box: [1 - GLASS_WIDTH, 0, 0, 1, 1, 1], textureIndex: 1}
    ];

    for(let i in GLASS_RENDER) {
        let condition = GLASS_RENDER[i];
        let model2 = BlockRenderer.createModel();
        let box = condition.box;

        model2.addBox(box[0], box[1], box[2], box[3], box[4], box[5], texture, condition.textureIndex || 0);
        render.addEntry(model2).setCondition(condition.side);
    }

}

bakeModel(20, 0, "glass");

ModAPI.registerAPI("FancyGlass", {
    bakeModel: bakeModel
});




