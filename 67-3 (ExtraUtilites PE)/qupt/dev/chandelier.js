var LampType = Block.createSpecialType({lightlevel: 15, lightopacity: true});
IDRegistry.genBlockID("chandelier");
Block.createBlock("chandelier", [{name: "Chandelier", texture: [["chandelier", 0]], inCreative: true}], LampType);
BlockRenderer.addRenderCallback(BlockID.chandelier, function (api, coords, block) {
    var box = BlockID.chandelier;
    api.renderBoxId(coords.x, coords.y, coords.z, 0.497, 0.1, 0.1, 0.507, 0.9, 0.9, box, 0);
    api.renderBoxId(coords.x, coords.y, coords.z, 0.1, 0.1, 0.497, 0.9, 0.9, 0.507, box, 0);
});
BlockRenderer.enableCustomRender(BlockID.chandelier);
IDRegistry.genBlockID("magnumTorch");
Block.createBlock("magnumTorch", [{name: "Magnum Torch", texture: [["magnumTorchBase", 0], ["magnumTorchTop", 0], ["magnumTorch", 0]], inCreative: true}], LampType);
Block.setShape(BlockID.magnumTorch, 0.4, 0, 0.4, 0.6, 1, 0.6);

