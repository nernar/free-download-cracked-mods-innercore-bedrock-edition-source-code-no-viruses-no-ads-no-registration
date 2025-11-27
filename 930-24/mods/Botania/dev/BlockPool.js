let BlockPool = (function (_super) {
    __extends(BlockPool, _super);
    const SHAPE = new AxisAlignedBB(0, 0, 0, 1, 0.5, 1);
    let manaBlock = new BlockBase("manaAnimation");
    manaBlock.addVariation("\ud55c\uadf8\ub8e8", [["mana_animation", 0]], false);
    BlockRegistry.registerBlock(manaBlock);
    let manaRender = new ICRender.Model();
    let manaModel = BlockRenderer.createModel();
    manaModel.addBox(0.99 / 16, 0 / 16, 0.99 / 16, 15.01 / 16, 0.1 / 16, 15.01 / 16, [["empty", 0], ["mana_animation", 0], ["empty", 0]]);
    manaRender.addEntry(manaModel);
    BlockRenderer.setStaticICRender(manaBlock.id, 0, manaRender);
    function BlockPool(nameId, Prototype) {
        _super.call(this, nameId);
        this.setSolid(true);
        this.setExplosionResistance(5);
        this.setDestroyTime(2);
        this.setRenderLayer(2);
        this.setCategory(4);
        this.setSoundType("stone");
        this.setRenderAllFaces(true);
        this.createGroup("botaniamisc.item_group." + this.textureName);
        BlockRenderer.setStaticICRender(this.id, 0, getModels(this.textureName)[0]);
        BlockRenderer.setCustomCollisionShape(this.id, 0, getCollisions()[0]);
        TileEntity.registerPrototype(this.id, Prototype);
        return this;
    }
    __implements(BlockPool, IWandable);
    function getModels(texture_name) {
        let poolRender = new ICRender.Model();
        let poolModel = BlockRenderer.createModel();
        poolModel.addBox(0 / 16, 0 / 16, 0 / 16, 16 / 16, 1 / 16, 16 / 16, [[texture_name, 0]]);
        poolModel.addBox(0 / 16, 1 / 16, 15 / 16, 16 / 16, 8 / 16, 16 / 16, [[texture_name, 0]]);
        poolModel.addBox(0 / 16, 1 / 16, 0 / 16, 16 / 16, 8 / 16, 1 / 16, [[texture_name, 0]]);
        poolModel.addBox(15 / 16, 1 / 16, 1 / 16, 16 / 16, 8 / 16, 15 / 16, [[texture_name, 0]]);
        poolModel.addBox(0 / 16, 1 / 16, 1 / 16, 1 / 16, 8 / 16, 15 / 16, [[texture_name, 0]]);
        poolRender.addEntry(poolModel);
        return [poolRender];
    }
    BlockPool.getModels = getModels;
    function getCollisions() {
        let poolCollision = new ICRender.CollisionShape();
        let poolEntry = poolCollision.addEntry();
        poolEntry.addBox(0 / 16, 0, 0 / 16, 1, 1 / 16, 1);
        poolEntry.addBox(0 / 16, 0, 0 / 16, 1 / 16, 8 / 16, 1);
        poolEntry.addBox(0 / 16, 0, 0 / 16, 1, 8 / 16, 1 / 16);
        poolEntry.addBox(15 / 16, 0, 0 / 16, 1, 8 / 16, 1);
        poolEntry.addBox(0 / 16, 0, 15 / 16, 1, 8 / 16, 1);
        return [poolCollision];
    }
    BlockPool.getCollisions = getCollisions;
    BlockPool.prototype.getShape = function () {
        return SHAPE;
    };
    BlockPool.prototype.onUsedByWand = function (player, stack, region, pos) {
        region.getTileEntity(pos).onWanded(player, stack);
        return true;
    };
    return BlockPool;
}(BlockMod));

