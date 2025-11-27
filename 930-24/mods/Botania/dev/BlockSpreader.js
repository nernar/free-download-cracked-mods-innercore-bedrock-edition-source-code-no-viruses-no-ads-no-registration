let BlockSpreader = (function (_super) {
    __extends(BlockSpreader, _super);
    __implements(BlockSpreader, IWandable);
    const SHAPE = new AxisAlignedBB(1 / 16, 1 / 16, 1 / 16, 15 / 16, 15 / 16, 15 / 16);
    let coreBlock = new BlockBase("spreaderCore");
    coreBlock.addVariation("\u3131\u3131\u3131\u3131\u3131\u3131", [["spreader_core", 0]], false);
    BlockRegistry.registerBlock(coreBlock);
    let coreRender = new ICRender.Model();
    let coreModel = BlockRenderer.createModel();
    coreModel.addBox(5 / 16, 5 / 16, 5 / 16, 11 / 16, 11 / 16, 11 / 16, [["spreader_core", 0]]);
    coreRender.addEntry(coreModel);
    BlockRenderer.setStaticICRender(coreBlock.id, 0, coreRender);
    function BlockSpreader(nameId, Prototype) {
        let _this = _super.call(this, nameId) || this;
        _this.setSolid(true);
        _this.setExplosionResistance(5);
        _this.setDestroyTime(1);
        _this.setRenderLayer(2);
        _this.setCategory(4);
        _this.setBlockMaterial("wood");
        _this.setSoundType("wood");
        _this.setRenderAllFaces(true);
        BlockRenderer.setStaticICRender(_this.id, 0, getModels(this.textureName)[0]);
        BlockRenderer.enableCoordMapping(_this.id, 0, emptyModel);
        TileEntity.registerPrototype(_this.id, Prototype);
        return _this;
    }
    function getModels(texture_name) {
        let spreaderRender = new ICRender.Model();
        let spreaderModel = BlockRenderer.createModel();
        spreaderModel.addBox(1 / 16, 1 / 16, 1 / 16, 15 / 16, 2 / 16, 15 / 16, [["livingwood", 0]]);
        spreaderModel.addBox(1 / 16, 2 / 16, 14 / 16, 15 / 16, 14 / 16, 15 / 16, [["livingwood", 0]]);
        spreaderModel.addBox(1 / 16, 14 / 16, 1 / 16, 15 / 16, 15 / 16, 15 / 16, [["livingwood", 0]]);
        spreaderModel.addBox(1 / 16, 2 / 16, 2 / 16, 2 / 16, 14 / 16, 14 / 16, [["livingwood", 0]]);
        spreaderModel.addBox(14 / 16, 2 / 16, 2 / 16, 15 / 16, 14 / 16, 14 / 16, [["livingwood", 0]]);
        spreaderModel.addBox(6 / 16, 2 / 16, 1 / 16, 10 / 16, 6 / 16, 2 / 16, [["livingwood", 0]]);
        spreaderModel.addBox(6 / 16, 10 / 16, 1 / 16, 10 / 16, 14 / 16, 2 / 16, [["livingwood", 0]]);
        spreaderModel.addBox(1 / 16, 2 / 16, 1 / 16, 6 / 16, 14 / 16, 2 / 16, [["livingwood", 0]]);
        spreaderModel.addBox(10 / 16, 2 / 16, 1 / 16, 15 / 16, 14 / 16, 2 / 16, [["livingwood", 0]]);
        spreaderRender.addEntry(spreaderModel);
        return [spreaderRender];
    }
    BlockSpreader.getModels = getModels;
    BlockSpreader.prototype.getShape = function () {
        return SHAPE;
    };
    BlockSpreader.prototype.onUsedByWand = function (player, stack, region, pos) {
        region.getTileEntity(pos).onWanded(player, stack);
        return true;
    };
    return BlockSpreader;
}(BlockMod));

