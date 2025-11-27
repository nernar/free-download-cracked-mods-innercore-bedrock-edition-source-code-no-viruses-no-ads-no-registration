let BlockAltar = (function (_super) {
    __extends(BlockAltar, _super);
    const SHAPE = new AxisAlignedBB(0, 0, 0, 1, 1.15, 1);
    function BlockAltar(nameId, Prototype) {
        _super.call(this, nameId);
        this.setSolid(true);
        this.setExplosionResistance(5);
        this.setRenderLayer(1);
        this.setDestroyTime(2);
        this.setCategory(4);
        this.setBlockMaterial("stone", 1);
        this.setSoundType("stone");
        this.setRenderAllFaces(true);
        this.addVariation("block.botania." + this.textureName, [[this.textureName, 0]], true);
        this.addVariation("\ubc15 \ud615\uc2dd", [[this.textureName, 0]], false);
        this.addVariation("\uc548\ud134", [[this.textureName, 0]], false);
        ItemModel.getFor(this.id, 0).setModUiSpriteName(this.textureName, 1);
        let models = getModels(this.textureName);
        for (let i in models) {
            BlockRenderer.setStaticICRender(this.id, Number(i), models[i]);
        }
        TileEntity.registerPrototype(this.id, Prototype);
        return this;
    }
    BlockAltar.prototype.getDrop = function () {
        return [[this.id, 1, 0]];
    };
    function getModels(texture_name) {
        let apothecaryModel = new ICRender.Model();
        let apothecaryAndWaterModel = new ICRender.Model();
        let apothecaryAndLavaModel = new ICRender.Model();
        let apothecaryMesh = StandardMesh.importFromFile(__dir__ + "assets/models/apothecary.obj", {translate: [0.5, 0, 0.5]});
        let waterMesh = StandardMesh.newBox(11, 2, 11);
        let lavaMesh = StandardMesh.newBox(11, 2, 11);
        apothecaryMesh.setBlockTexture(texture_name, 0);
        apothecaryMesh.setLightPos(0, 2, 0);
        apothecaryMesh.rebuild();
        waterMesh.translate(8 / 16, 18 / 16, 8 / 16);
        waterMesh.setBlockTexture("water_animation", 0);
        waterMesh.setWaterTinted();
        waterMesh.setLightPos(0, 2, 0);
        waterMesh.rebuild();
        lavaMesh.translate(8 / 16, 18 / 16, 8 / 16);
        lavaMesh.setBlockTexture("lava_animation", 0);
        lavaMesh.setLightPos(0, 2, 0);
        lavaMesh.rebuild();
        apothecaryModel.addEntry(new BlockRenderer.Model(apothecaryMesh));
        apothecaryAndLavaModel.addEntry(new BlockRenderer.Model(apothecaryMesh));
        apothecaryAndLavaModel.addEntry(new BlockRenderer.Model(lavaMesh));
        apothecaryAndWaterModel.addEntry(new BlockRenderer.Model(apothecaryMesh));
        apothecaryAndWaterModel.addEntry(new BlockRenderer.Model(waterMesh));
        return [apothecaryModel, apothecaryAndWaterModel, apothecaryAndLavaModel];
    }
    BlockAltar.getModels = getModels;
    BlockAltar.prototype.getShape = function () {
        return SHAPE;
    };
    return BlockAltar;
}(BlockMod));

