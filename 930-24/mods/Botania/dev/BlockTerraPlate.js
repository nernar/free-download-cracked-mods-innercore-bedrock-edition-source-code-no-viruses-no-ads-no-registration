let BlockTerraPlate = (function (_super) {
    __extends(BlockTerraPlate, _super);
    const SHAPE = new AxisAlignedBB(0, 0, 0, 1, 3 / 16, 1);
    function BlockTerraPlate(nameID, Prototype) {
        _super.call(this, nameID);
        this.setSolid(true);
        this.setRenderAllFaces(true);
        BlockRenderer.setStaticICRender(this.id, 0, getModels(this.textureName)[0]);
        BlockRenderer.setCustomCollisionShape(this.id, 0, getCollisions()[0]);
        TileEntity.registerPrototype(this.id, Prototype);
        return this;
    }
    function getModels(texture_name) {
        let plateRender = new ICRender.Model();
        let plateModel = BlockRenderer.createModel();
        plateModel.addBox(0 / 16, 0 / 16, 0 / 16, 16 / 16, 3 / 16, 16 / 16, [[texture_name + "_bottom", 0], [texture_name + "_top", 0], [texture_name + "_side", 0]]);
        plateRender.addEntry(plateModel);
        return [plateRender];
    }
    BlockTerraPlate.getModels = getModels;
    function getCollisions() {
        let plateCollision = new ICRender.CollisionShape();
        let plateEntry = plateCollision.addEntry();
        plateEntry.addBox(0, 0, 0, 1, 3 / 16, 1);
        return [plateCollision];
    }
    BlockTerraPlate.getCollisions = getCollisions;
    BlockTerraPlate.prototype.getShape = function () {
        return SHAPE;
    };
    return BlockTerraPlate;
}(BlockMod));

