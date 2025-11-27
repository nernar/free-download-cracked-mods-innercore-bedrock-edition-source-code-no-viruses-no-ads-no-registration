let BlockDoubleFlower = (function () {
    let BlockDoubleFlowerTop = (function (_super) {
        __extends(BlockDoubleFlowerTop, _super);
        function BlockDoubleFlowerTop(nameId) {
            _super.call(this, nameId, true) || this;
            return this;
        }
        BlockDoubleFlowerTop.prototype.getDrop = function (coords, block, level, enchant, item, region) {
            if (item.id == VanillaItemID.shears) {
                return [[block.id, 1, block.data]];
            }
            return [];
        };
        BlockDoubleFlowerTop.prototype.onDestroy = function (coords, block, region, player) {
            region.destroyBlock(coords.x, coords.y - 1, coords.z, false);
        };
        BlockDoubleFlowerTop.prototype.onPlace = function (coords, item, block, player, region) {
            if (!ModBlocks.doubleFlower.placeAt(region, coords, item.data)) {
                item.count++;
            }
        };
        BlockDoubleFlowerTop.prototype.canGrow = function () {
            return false;
        };
        return BlockDoubleFlowerTop;
    }(BlockColoredFlower));
    BlockDoubleFlower.BlockDoubleFlowerTop = BlockDoubleFlowerTop;
    let BlockDoubleFlowerBottom = (function (_super) {
        __extends(BlockDoubleFlowerBottom, _super);
        function BlockDoubleFlowerBottom(nameId) {
            _super.call(this, nameId, false) || this;
            return this;
        }
        BlockDoubleFlowerBottom.prototype.getDrop = function (coords, block, level, enchant, item, region) {
            if (item.id == VanillaItemID.shears) {
                return [[this.top.id, 1, block.data]];
            }
            return [];
        };
        BlockDoubleFlowerBottom.prototype.canPlace = function (coords, block, region) {
            coords = _super.prototype.canPlace.call(this, coords, block, region);
            if (coords) {
                let tile = region.getBlock(coords.up());
                if (WorldRegion.canTileBeReplaced(tile.id, tile.data)) {
                    return coords;
                }
            }
        };
        BlockDoubleFlowerBottom.prototype.canGrow = function () {
            return false;
        };
        BlockDoubleFlowerBottom.prototype.onPlace = function (coords, item, block, player, region) {
            if (!ModBlocks.doubleFlower.placeAt(region, coords, item.data)) {
                item.count++;
            }
        };
        BlockDoubleFlowerBottom.prototype.onDestroy = function (coords, block, region, player) {
            region.destroyBlock(coords.x, coords.y + 1, coords.z, false);
        };
        return BlockDoubleFlowerBottom;
    }(BlockColoredFlower));
    BlockDoubleFlower.BlockDoubleFlowerBottom = BlockDoubleFlowerBottom;
    function BlockDoubleFlower(nameID) {
        this.stringID = nameID;
        this.bottom = new BlockDoubleFlowerBottom(nameID);
        this.top = new BlockDoubleFlowerTop(nameID);
        this.bottom.top = this.top;
        this.top.bottom = this.bottom;
        this.top.PLACEABLE_TILES = [this.bottom.id];
    }
    BlockDoubleFlower.prototype.register = function () {
        BlockRegistry.registerBlock(this.top);
        BlockRegistry.registerBlock(this.bottom);
    };
    BlockDoubleFlower.prototype.placeAt = function (region, coords, data) {
        coords = this.bottom.canPlace(coords, region.getBlock(coords), region);
        if (coords) {
            region.setBlock(coords, this.bottom.id, data);
            region.setBlock(coords.up(), this.top.id, data);
            return true;
        }
        return false;
    };
    BlockDoubleFlower.prototype.isValidPosition = function (region, pos) {
        return this.bottom.isValidPosition(region, pos);
    };
    return BlockDoubleFlower;
}());

