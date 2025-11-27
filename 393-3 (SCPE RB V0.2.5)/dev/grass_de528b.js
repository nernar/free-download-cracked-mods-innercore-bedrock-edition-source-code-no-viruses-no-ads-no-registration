IDRegistry.genBlockID("CrimsonNirnroot");
Block.createBlock("CrimsonNirnroot", [{name: "CrimsonNirnroot", texture: [["", 0]], inCreative: false}]);
ToolAPI.registerBlockMaterial(BlockID.CrimsonNirnroot, "plant");
function createCrimsonNirnrootRender(id, idMaterial, dataMaterial) {
    var render = new ICRender.Model();
    BlockRenderer.setStaticICRender(id, 0, render);
    var model = BlockRenderer.createModel();
    model.addBox(0, 0, 8 / 16, 1, 1, 8 / 16, "CrimsonNirnroot", 0);
    model.addBox(8 / 16, 0, 1, 8 / 16, 1, 0, "CrimsonNirnroot", 0);
    render.addEntry(model);
}
createCrimsonNirnrootRender(BlockID.CrimsonNirnroot, 49, 0);
Item.registerUseFunction(ItemID.CrimsonNirnroot, function (coords, item, block) {
    World.setBlock(coords.relative.x, coords.relative.y, coords.relative.z, BlockID.CrimsonNirnroot);
    Player.decreaseCarriedItem(1);
});
Block.registerDropFunction("CrimsonNirnroot", function (coords, id, data, diggingLevel, toolLevel) {
    return [[ItemID.CrimsonNirnroot, 1, data]];
});
IDRegistry.genBlockID("SwampFungalPod");
Block.createBlock("SwampFungalPod", [{name: "SwampFungalPod", texture: [["", 0]], inCreative: false}]);
ToolAPI.registerBlockMaterial(BlockID.SwampFungalPod, "plant");
function createSwampFungalPodRender(id, idMaterial, dataMaterial) {
    var render = new ICRender.Model();
    BlockRenderer.setStaticICRender(id, 0, render);
    var model = BlockRenderer.createModel();
    model.addBox(0, 0, 8 / 16, 1, 1, 8 / 16, "ThistleBranch", 0);
    model.addBox(8 / 16, 0, 1, 8 / 16, 1, 0, "ThistleBranch", 0);
    render.addEntry(model);
}
createSwampFungalPodRender(BlockID.SwampFungalPod, 49, 0);
Item.registerUseFunction(ItemID.SwampFungalPod, function (coords, item, block) {
    World.setBlock(coords.relative.x, coords.relative.y, coords.relative.z, BlockID.SwampFungalPod);
    Player.decreaseCarriedItem(1);
});
Block.registerDropFunction("SwampFungalPod", function (coords, id, data, diggingLevel, toolLevel) {
    return [[ItemID.SwampFungalPod, 1, data]];
});
IDRegistry.genBlockID("HangingMoss");
Block.createBlock("HangingMoss", [{name: "HangingMoss", texture: [["", 0]], inCreative: false}]);
ToolAPI.registerBlockMaterial(BlockID.HangingMoss, "plant");
function createHangingMossRender(id, idMaterial, dataMaterial) {
    var render = new ICRender.Model();
    BlockRenderer.setStaticICRender(id, 0, render);
    var model = BlockRenderer.createModel();
    model.addBox(0, 0, 8 / 16, 1, 1, 8 / 16, "HangingMoss", 0);
    model.addBox(8 / 16, 0, 1, 8 / 16, 1, 0, "HangingMoss", 0);
    render.addEntry(model);
}
createHangingMossRender(BlockID.HangingMoss, 49, 0);
Item.registerUseFunction(ItemID.HangingMoss, function (coords, item, block) {
    World.setBlock(coords.relative.x, coords.relative.y, coords.relative.z, BlockID.HangingMoss);
    Player.decreaseCarriedItem(1);
});
Block.registerDropFunction("HangingMoss", function (coords, id, data, diggingLevel, toolLevel) {
    return [[ItemID.HangingMoss, 1, data]];
});
IDRegistry.genBlockID("ThistleBranch");
Block.createBlock("ThistleBranch", [{name: "ThistleBranch", texture: [["", 0]], inCreative: false}]);
ToolAPI.registerBlockMaterial(BlockID.ThistleBranch, "plant");
function createThistleBranchRender(id, idMaterial, dataMaterial) {
    var render = new ICRender.Model();
    BlockRenderer.setStaticICRender(id, 0, render);
    var model = BlockRenderer.createModel();
    model.addBox(0, 0, 8 / 16, 1, 1, 8 / 16, "ThistleBranch", 0);
    model.addBox(8 / 16, 0, 1, 8 / 16, 1, 0, "ThistleBranch", 0);
    render.addEntry(model);
}
createThistleBranchRender(BlockID.ThistleBranch, 49, 0);
Item.registerUseFunction(ItemID.ThistleBranch, function (coords, item, block) {
    World.setBlock(coords.relative.x, coords.relative.y, coords.relative.z, BlockID.ThistleBranch);
    Player.decreaseCarriedItem(1);
});
Block.registerDropFunction("ThistleBranch", function (coords, id, data, diggingLevel, toolLevel) {
    return [[ItemID.ThistleBranch, 1, data]];
});
IDRegistry.genBlockID("JazbayGrapes");
Block.createBlock("JazbayGrapes", [{name: "JazbayGrapes", texture: [["", 0]], inCreative: false}]);
ToolAPI.registerBlockMaterial(BlockID.JazbayGrapes, "plant");
function createJazbayGrapesRender(id, idMaterial, dataMaterial) {
    var render = new ICRender.Model();
    BlockRenderer.setStaticICRender(id, 0, render);
    var model = BlockRenderer.createModel();
    model.addBox(2 / 16, 0 / 16, 2 / 16, 3 / 16, 16 / 16, 3 / 16, "24", 0);
    model.addBox(13 / 16, 0 / 16, 13 / 16, 14 / 16, 16 / 16, 14 / 16, "24", 0);
    model.addBox(2 / 16, 0 / 16, 13 / 16, 3 / 16, 16 / 16, 14 / 16, "24", 0);
    model.addBox(13 / 16, 0 / 16, 2 / 16, 14 / 16, 16 / 16, 3 / 16, "24", 0);
    model.addBox(3 / 32, 0 / 16, 3 / 32, 29 / 32, 16 / 16, 29 / 31, [["notx", 0], ["notx", 0], ["38", 0], ["38", 0], ["38", 0], ["38", 0]]);
    model.addBox(5 / 32, 0 / 16, 5 / 32, 27 / 32, 16 / 16, 27 / 31, "38", 0);
    model.addBox(6 / 32, 1 / 32, 6 / 32, 26 / 32, 31 / 32, 26 / 31, "40", 0);
    model.addBox(7 / 32, 2 / 32, 7 / 32, 25 / 32, 30 / 32, 25 / 31, "41", 0);
    render.addEntry(model);
}
createJazbayGrapesRender(BlockID.JazbayGrapes, 49, 0);
Item.registerUseFunction(ItemID.JazbayGrapes, function (coords, item, block) {
    World.setBlock(coords.relative.x, coords.relative.y, coords.relative.z, BlockID.JazbayGrapes);
    Player.decreaseCarriedItem(1);
});
Block.registerDropFunction("JazbayGrapes", function (coords, id, data, diggingLevel, toolLevel) {
    return [[ItemID.JazbayGrapes, 1, data]];
});
IDRegistry.genBlockID("JazbayGrapes1");
Block.createBlock("JazbayGrapes1", [{name: "JazbayGrapes", texture: [["", 0]], inCreative: false}]);
ToolAPI.registerBlockMaterial(BlockID.JazbayGrapes1, "plant");
function createJazbayGrapes1Render(id, idMaterial, dataMaterial) {
    var render = new ICRender.Model();
    BlockRenderer.setStaticICRender(id, 0, render);
    var model = BlockRenderer.createModel();
    model.addBox(2 / 16, 0 / 16, 2 / 16, 3 / 16, 16 / 16, 3 / 16, "24", 0);
    model.addBox(13 / 16, 0 / 16, 13 / 16, 14 / 16, 16 / 16, 14 / 16, "24", 0);
    model.addBox(2 / 16, 0 / 16, 13 / 16, 3 / 16, 16 / 16, 14 / 16, "24", 0);
    model.addBox(13 / 16, 0 / 16, 2 / 16, 14 / 16, 16 / 16, 3 / 16, "24", 0);
    model.addBox(3 / 32, 0 / 16, 3 / 32, 29 / 32, 16 / 16, 29 / 31, [["notx", 0], ["notx", 0], ["39", 0], ["39", 0], ["39", 0], ["39", 0]]);
    model.addBox(5 / 32, 0 / 16, 5 / 32, 27 / 32, 16 / 16, 27 / 31, "39", 0);
    model.addBox(6 / 32, 1 / 32, 6 / 32, 26 / 32, 31 / 32, 26 / 31, "40", 0);
    model.addBox(7 / 32, 2 / 32, 7 / 32, 25 / 32, 30 / 32, 25 / 31, "41", 0);
    render.addEntry(model);
}
createJazbayGrapes1Render(BlockID.JazbayGrapes1, 49, 0);
Block.registerDropFunction("JazbayGrapes1", function (coords, id, data, diggingLevel, toolLevel) {
    return [[ItemID.JazbayGrapes, 3, 0]];
});
Block.setRandomTickCallback(BlockID.JazbayGrapes, function (x, y, z, id, data) {
    const rarity = __config__.access("plant_growth_time");
    if (Math.random() < rarity) {
        World.setBlock(x, y, z, BlockID.JazbayGrapes1, 0);
    }
});
Callback.addCallback("ItemUse", function (coords, item, block) {
    if (block.id == BlockID.JazbayGrapes1 && item.id == ItemID.secateurs) {
        const c = Player.getPosition();
        World.drop(c.x + 0.5, c.y, c.z + 0.5, ItemID.JazbayGrapes, random(5, 9));
        World.setBlock(coords.x, coords.y, coords.z, BlockID.JazbayGrapes, 0);
        if (item.data + 1 >= Item.getMaxDamage(item.id)) {
            Player.decreaseCarriedItem(1);
        } else {
            Player.setCarriedItem(item.id, item.count, item.data + 1);
        }
    }
});
IDRegistry.genBlockID("GiantLichen");
Block.createBlock("GiantLichen", [{name: "GiantLichen", texture: [["", 0]], inCreative: false}]);
ToolAPI.registerBlockMaterial(BlockID.GiantLichen, "plant");
function createGiantLichenRender(id, idMaterial, dataMaterial) {
    var render = new ICRender.Model();
    BlockRenderer.setStaticICRender(id, 0, render);
    var model = BlockRenderer.createModel();
    model.addBox(0, 0, 8 / 16, 1, 1, 8 / 16, "GiantLichen", 0);
    model.addBox(8 / 16, 0, 1, 8 / 16, 1, 0, "GiantLichen", 0);
    render.addEntry(model);
}
createGiantLichenRender(BlockID.GiantLichen, 49, 0);
Item.registerUseFunction(ItemID.GiantLichen, function (coords, item, block) {
    World.setBlock(coords.relative.x, coords.relative.y, coords.relative.z, BlockID.GiantLichen);
    Player.decreaseCarriedItem(1);
});
Block.registerDropFunction("GiantLichen", function (coords, id, data, diggingLevel, toolLevel) {
    return [[ItemID.GiantLichen, 1, data]];
});
IDRegistry.genBlockID("Tomato");
Block.createBlock("Tomato", [{name: "Tomato", texture: [["", 0]], inCreative: false}]);
ToolAPI.registerBlockMaterial(BlockID.tomato, "plant");
function createTomatoRender(id, idMaterial, dataMaterial) {
    var render = new ICRender.Model();
    BlockRenderer.setStaticICRender(id, 0, render);
    var model = BlockRenderer.createModel();
    model.addBox(2 / 16, 0 / 16, 2 / 16, 3 / 16, 16 / 16, 3 / 16, "24", 0);
    model.addBox(13 / 16, 0 / 16, 13 / 16, 14 / 16, 16 / 16, 14 / 16, "24", 0);
    model.addBox(2 / 16, 0 / 16, 13 / 16, 3 / 16, 16 / 16, 14 / 16, "24", 0);
    model.addBox(13 / 16, 0 / 16, 2 / 16, 14 / 16, 16 / 16, 3 / 16, "24", 0);
    model.addBox(3 / 32, 0 / 16, 3 / 32, 29 / 32, 16 / 16, 29 / 31, [["notx", 0], ["notx", 0], ["42", 0], ["42", 0], ["42", 0], ["42", 0]]);
    model.addBox(5 / 32, 0 / 16, 5 / 32, 27 / 32, 16 / 16, 27 / 31, "42", 0);
    model.addBox(6 / 32, 1 / 32, 6 / 32, 26 / 32, 31 / 32, 26 / 31, "40", 0);
    model.addBox(7 / 32, 2 / 32, 7 / 32, 25 / 32, 30 / 32, 25 / 31, "41", 0);
    render.addEntry(model);
}
createTomatoRender(BlockID.Tomato, 49, 0);
Item.registerUseFunction(ItemID.tomato, function (coords, item, block) {
    World.setBlock(coords.relative.x, coords.relative.y, coords.relative.z, BlockID.Tomato);
    Player.decreaseCarriedItem(1);
});
Block.registerDropFunction("Tomato", function (coords, id, data, diggingLevel, toolLevel) {
    return [[ItemID.tomato, 1, data]];
});
IDRegistry.genBlockID("Tomato1");
Block.createBlock("Tomato1", [{name: "Tomato1", texture: [["", 0]], inCreative: false}]);
ToolAPI.registerBlockMaterial(BlockID.Tomato1, "plant");
function createTomato1Render(id, idMaterial, dataMaterial) {
    var render = new ICRender.Model();
    BlockRenderer.setStaticICRender(id, 0, render);
    var model = BlockRenderer.createModel();
    model.addBox(2 / 16, 0 / 16, 2 / 16, 3 / 16, 16 / 16, 3 / 16, "24", 0);
    model.addBox(13 / 16, 0 / 16, 13 / 16, 14 / 16, 16 / 16, 14 / 16, "24", 0);
    model.addBox(2 / 16, 0 / 16, 13 / 16, 3 / 16, 16 / 16, 14 / 16, "24", 0);
    model.addBox(13 / 16, 0 / 16, 2 / 16, 14 / 16, 16 / 16, 3 / 16, "24", 0);
    model.addBox(3 / 32, 0 / 16, 3 / 32, 29 / 32, 16 / 16, 29 / 31, [["notx", 0], ["notx", 0], ["43", 0], ["43", 0], ["43", 0], ["43", 0]]);
    model.addBox(5 / 32, 0 / 16, 5 / 32, 27 / 32, 16 / 16, 27 / 31, "43", 0);
    model.addBox(6 / 32, 1 / 32, 6 / 32, 26 / 32, 31 / 32, 26 / 31, "40", 0);
    model.addBox(7 / 32, 2 / 32, 7 / 32, 25 / 32, 30 / 32, 25 / 31, "41", 0);
    render.addEntry(model);
}
createTomato1Render(BlockID.Tomato1, 49, 0);
Block.registerDropFunction("Tomato1", function (coords, id, data, diggingLevel, toolLevel) {
    return [[ItemID.tomato, 3, 0]];
});
Block.setRandomTickCallback(BlockID.Tomato, function (x, y, z, id, data) {
    const rarity = __config__.access("plant_growth_time");
    if (Math.random() < rarity) {
        World.setBlock(x, y, z, BlockID.Tomato1, 0);
    }
});
Callback.addCallback("ItemUse", function (coords, item, block) {
    if (block.id == BlockID.Tomato1 && item.id == ItemID.secateurs) {
        const c = Player.getPosition();
        World.drop(c.x + 0.5, c.y, c.z + 0.5, ItemID.tomato, random(5, 9));
        World.setBlock(coords.x, coords.y, coords.z, BlockID.Tomato, 0);
        if (item.data + 1 >= Item.getMaxDamage(item.id)) {
            Player.decreaseCarriedItem(1);
        } else {
            Player.setCarriedItem(item.id, item.count, item.data + 1);
        }
    }
});

