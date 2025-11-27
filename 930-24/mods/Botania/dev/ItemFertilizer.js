let ItemFertilizer = (function (_super) {
    __extends(ItemFertilizer, _super);
    function ItemFertilizer() {
        _super.apply(this, arguments);
        return this;
    }
    ItemFertilizer.prototype.onItemUse = function (coords, item, block, player) {
        let region = WorldRegion.getForActor(player);
        coords = coords.relative;
        if (block.id == 2) {
            item.decrease(1);
            for (let partCount = 0; partCount < 11; partCount++) {
                let partCoordsX = coords.x - Math.ceil((Math.random() - 0.5) * 8);
                let partCoordsZ = coords.z - Math.ceil((Math.random() - 0.5) * 8);
                let partCoords = region.findSurface(partCoordsX, coords.y, partCoordsZ);
                region.addParticle(WispParticleType.getFromData([0, 2], randomInt(15), [4, 10]), partCoords.x + 0.5, partCoords.y + 1, partCoords.z + 0.5, 0, Math.random() * 0.07, 0);
            }
            for (let count = 0; count < randomInt(3, 8); count++) {
                let data = randomInt(15);
                let flowCoordsX = coords.x + randomInt(-4, 4);
                let flowCoordsZ = coords.z + randomInt(-4, 4);
                let flowCoords = region.findSurface(flowCoordsX, coords.y, flowCoordsZ);
                if (Math.abs(flowCoords.y - coords.y) <= 2) {
                    if (ModBlocks.doubleFlower.isValidPosition(region, flowCoords)) {
                        region.playSound(flowCoords, "dig.grass", 1, 0.8);
                        if (Math.random() < 0.8) {
                            region.setBlock(flowCoords.x, flowCoords.y + 1, flowCoords.z, BlockID.mysticalFlower, data);
                        } else {
                            region.setBlock(flowCoords.x, flowCoords.y + 1, flowCoords.z, BlockID.doubleFlowerBottom, data);
                            region.setBlock(flowCoords.x, flowCoords.y + 2, flowCoords.z, BlockID.doubleFlowerTop, data);
                        }
                    }
                }
            }
        }
    };
    return ItemFertilizer;
}(ItemMod));

