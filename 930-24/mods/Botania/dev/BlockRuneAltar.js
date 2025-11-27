let BlockRuneAltar = (function (_super) {
    __extends(BlockRuneAltar, _super);
    __implements(BlockRuneAltar, IWandable);
    const SHAPE = new AxisAlignedBB(0, 0, 0, 1, 12 / 16, 1);
    function BlockRuneAltar(nameId, Prototype) {
        _super.call(this, nameId);
        this.setSolid(true);
        this.setExplosionResistance(5);
        this.setDestroyTime(2);
        this.setRenderLayer(2);
        this.setCategory(4);
        this.setSoundType("stone");
        this.setRenderAllFaces(true);
        BlockRenderer.setStaticICRender(this.id, 0, getModels(this.textureName)[0]);
        TileEntity.registerPrototype(this.id, Prototype);
        return this;
    }
    function getModels(texture_name) {
        let renderRuneAltar = new ICRender.Model();
        let modelRuneAltar = BlockRenderer.createModel();
        modelRuneAltar.addBox(0 / 16, 6 / 16, 0 / 16, 16 / 16, 12 / 16, 16 / 16, [[texture_name + "_bottom", 0], [texture_name + "_top", 0], [texture_name + "_side", 0], [texture_name + "_side", 0], [texture_name + "_side", 0], [texture_name + "_side", 0]]);
        modelRuneAltar.addBox(4 / 16, 4 / 16, 4 / 16, 12 / 16, 6 / 16, 12 / 16, [[texture_name + "_side", 0], [texture_name + "_side", 0], [texture_name + "_side", 0], [texture_name + "_side", 0]]);
        modelRuneAltar.addBox(2 / 16, 0 / 16, 2 / 16, 14 / 16, 4 / 16, 14 / 16, [[texture_name + "_bottom", 0], [texture_name + "_bottom", 0], [texture_name + "_side", 0], [texture_name + "_side", 0], [texture_name + "_side", 0], [texture_name + "_side", 0]]);
        renderRuneAltar.addEntry(modelRuneAltar);
        return [renderRuneAltar];
    }
    BlockRuneAltar.getModels = getModels;
    BlockRuneAltar.prototype.getShape = function () {
        return SHAPE;
    };
    BlockRuneAltar.prototype.onUsedByWand = function (player, stack, region, pos) {
        region.getTileEntity(pos).onWanded(player, stack);
    };
    return BlockRuneAltar;
}(BlockMod));

