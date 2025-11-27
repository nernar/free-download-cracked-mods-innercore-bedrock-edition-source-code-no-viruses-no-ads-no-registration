const isEqualCoords = function (sourceCoords, targetCoords) {
    for (let key in sourceCoords) {
        if (sourceCoords[key] !== targetCoords[key]) {
            return false;
        }
    }
    return true;
};
const FastHopper = {hoppers: [], placeHopper: function (coords, dimension) {
    this.hoppers.push({coords: coords, dimension: dimension});
}, destroyHopper: function (coords, dimension) {
    this.hoppers = this.hoppers.filter(function (x) {
        return !(isEqualCoords(coords, x.coords) && dimension === x.dimension);
    });
}};
Saver.addSavesScope("FastHopper", function read(scope) {
    FastHopper.hoppers = scope || [];
}, function save() {
    return FastHopper.hoppers;
});
World.registerBlockChangeCallback(VanillaTileID.hopper, function (coords, oldBlock, newBlock, region) {
    coords = {x: coords.x, y: coords.y, z: coords.z};
    let dimension = region.getDimension();
    if (newBlock.id === VanillaTileID.hopper) {
        FastHopper.placeHopper(coords, dimension);
    }
    if (oldBlock.id === VanillaTileID.hopper) {
        FastHopper.destroyHopper(coords, dimension);
    }
});
Callback.addCallback("LevelLeft", function () {
    FastHopper.hoppers = [];
    enableUpdatable = false;
});
Callback.addCallback("LevelLoaded", function () {
    let enableUpdatable = true;
    Updatable.addUpdatable({remove: function () {
        return !enableUpdatable;
    }, update: function () {
        for (let i in FastHopper.hoppers) {
            let hopper = FastHopper.hoppers[i];
            if (!hopper) {
                continue;
            }
            let coords = hopper.coords;
            let region = BlockSource.getDefaultForDimension(hopper.dimension);
            let tileEntity = region.getBlockEntity(coords.x, coords.y, coords.z);
            if (!tileEntity) {
                continue;
            }
            let compoundTag = tileEntity.getCompoundTag();
            let transferCooldown = compoundTag.getInt("TransferCooldown");
            if (transferCooldown <= 0) {
                continue;
            }
            compoundTag.putInt("TransferCooldown", 0);
            tileEntity.setCompoundTag(compoundTag);
        }
    }});
});
try {
    IMPORT("StorageInterface");
    StorageInterface.checkHoppers = function (tile) {
        var region = tile.blockSource;
        var storage = StorageInterface.getInterface(tile);
        for (var side = 1; side < 6; side++) {
            var dir = StorageInterface.getRelativeCoords(tile, side);
            var block = region.getBlock(dir.x, dir.y, dir.z);
            if (block.id == 154 && block.data == side + Math.pow(-1, side)) {
                var hopper = StorageInterface.getStorage(region, dir.x, dir.y, dir.z);
                StorageInterface.extractItemsFromStorage(storage, hopper, side, 1);
            }
        }
        if (region.getBlockId(tile.x, tile.y - 1, tile.z) == 154) {
            var hopper = StorageInterface.getStorage(region, tile.x, tile.y - 1, tile.z);
            StorageInterface.extractItemsFromStorage(hopper, storage, 0, 1);
        }
    };
}
catch (e) {
}

