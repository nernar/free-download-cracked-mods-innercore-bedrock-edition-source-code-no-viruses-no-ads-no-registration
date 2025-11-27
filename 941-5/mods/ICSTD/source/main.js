WRAP_JAVA("ru.koshakmine.icstd.js.ToolAPI").init({
    addBlockMaterial: function (name, breakingMultiplier) {
        ToolAPI.addBlockMaterial(String(name), Number(breakingMultiplier));
    },
    addToolMaterial: function (name, obj) {
        for (var key in obj)
            obj[key] = Number(obj[key]);
        ToolAPI.addToolMaterial(String(name), obj);
    },
    getBlockDestroyLevel: function (id) {
        return ToolAPI.getBlockDestroyLevel(Number(id));
    },
    getBlockMaterialName: function (id) {
        return ToolAPI.getBlockMaterialName(Number(id));
    },
    getToolLevel: function (id) {
        return ToolAPI.getToolLevel(Number(id));
    },
    getToolLevelViaBlock: function (itemId, blockId) {
        return ToolAPI.getToolLevelViaBlock(Number(itemId), Number(blockId));
    },
    registerSword: function (id, material) {
        if (material instanceof java.lang.String)
            material = String(material);
        else
            for (var key in material)
                material[key] = Number(material[key]);
        ToolAPI.registerSword(Number(id), material);
    },
    registerTool: function (id, material, blocks) {
        if (material instanceof java.lang.String)
            material = String(material);
        else
            for (var key in material)
                material[key] = Number(material[key]);
        for (var i in blocks)
            blocks[i] = String(blocks[i]);
        ToolAPI.registerTool(Number(id), material, blocks);
    },
    registerBlockMaterial: function (id, material, level) {
        ToolAPI.registerBlockMaterial(Number(id), String(material), Number(level));
    },
    registerDropFunction: function (id, func, level) {
        Block.registerDropFunction(id, func, level);
    }
}, Block.dropFunctions);
var JsTickBlockEntity = WRAP_JAVA("ru.koshakmine.icstd.block.blockentity.ticking.JsTickBlockEntity");
var System = WRAP_JAVA("ru.koshakmine.icstd.block.blockentity.ticking.JsTickingSystemBlockEntity")
    .getInstance();
var Manager = WRAP_JAVA("ru.koshakmine.icstd.block.blockentity.BlockEntity").getManager();
TileEntity.createTileEntityForPrototype = function (Prototype, addToUpdate) {
    var tileEntity = {};
    for (var property in Prototype) {
        tileEntity[property] = Prototype[property];
    }
    tileEntity.data = {};
    for (var property in Prototype.defaultValues) {
        tileEntity.data[property] = Prototype.defaultValues[property];
    }
    tileEntity.networkData = new SyncedNetworkData();
    tileEntity.container = Prototype.useNetworkItemContainer ? new ItemContainer() : new UI.Container(tileEntity);
    tileEntity.container.setParent(tileEntity);
    tileEntity.liquidStorage = new LiquidRegistry.Storage(tileEntity);
    if (addToUpdate) {
        if (tileEntity.saverId && tileEntity.saverId != -1) {
            Saver.registerObject(tileEntity, tileEntity.saverId);
        }
        // Updatable.addUpdatable(tileEntity);
        tileEntity.remove = false;
        tileEntity.isLoaded = true;
    }
    return tileEntity;
};
var getTileEntityOriginal = TileEntity.getTileEntity;
TileEntity.getTileEntity = function (x, y, z, region) {
    var result = getTileEntityOriginal.apply(this, arguments);
    if (!result) {
        var tile = Manager.getBlockEntity(x, y, z, region ? region.getDimension() : Player.getDimension());
        return tile ? tile.getFakeTileEntity() : undefined;
    }
    return result;
};
function optiTile(tileEntity) {
    if (tileEntity.___optiTile___)
        return;
    tileEntity.___optiTile___ = true;
    tileEntity.update = function () {
        if (this.isLoaded) {
            if (!this.__initialized) {
                !this.tick && System.removeBlockEntity(tileEntity.___fakeBlockEntity___);
                if (!this._runInit()) {
                    this.noupdate = true;
                    return;
                }
            }
            this.tick && this.tick();
        }
    };
    tileEntity.___fakeBlockEntity___ = new JsTickBlockEntity(tileEntity.blockID, tileEntity.x, tileEntity.y, tileEntity.z, tileEntity.dimension, tileEntity);
    var fakeTile = tileEntity.___fakeBlockEntity___.getFakeTileEntity();
    for (var key in fakeTile) {
        tileEntity[key] = fakeTile[key];
    }
    // Хрен пойми откуда rhino получает add
    if (fakeTile.energyTick) {
        tileEntity.energyTick = function (name, node) {
            fakeTile.energyTick(name, node, node.add);
        };
    }
    var func = tileEntity.destroy || function () { };
    tileEntity.destroy = function () {
        System.removeBlockEntity(tileEntity.___fakeBlockEntity___);
        return func();
    };
    System.addBlockEntity(tileEntity.___fakeBlockEntity___);
}
TileEntity.addTileEntity = function (x, y, z, blockSource) {
    var tileGet = this.getTileEntity(x, y, z, blockSource);
    if (tileGet && !tileGet.___fakeTile___) {
        return null;
    }
    var tile = blockSource ? blockSource.getBlockId(x, y, z) : World.getBlockID(x, y, z);
    var Prototype = this.getPrototype(tile);
    if (Prototype) {
        var tileEntity = this.createTileEntityForPrototype(Prototype, true);
        tileEntity.x = x;
        tileEntity.y = y;
        tileEntity.z = z;
        tileEntity.dimension = blockSource ? blockSource.getDimension() : Player.getDimension();
        if (tileGet && tileGet.container) {
            tileEntity.container = tileGet.container;
        }
        optiTile(tileEntity);
        this.tileEntityList.push(tileEntity);
        this.tileEntityCacheMap[x + "," + y + "," + z + "," + tileEntity.dimension] = tileEntity;
        tileEntity.created();
        Callback.invokeCallback("TileEntityAdded", tileEntity, true);
        return tileEntity;
    }
    return tileGet;
};
TileEntity.addUpdatableAsTileEntity = function (updatable) {
    updatable.remove = false;
    updatable.isLoaded = true;
    if (updatable.saverId && updatable.saverId !== -1) {
        Saver.registerObject(updatable, updatable.saverId);
    }
    optiTile(updatable);
    this.tileEntityList.push(updatable);
    this.tileEntityCacheMap[updatable.x + "," + updatable.y + "," + updatable.z + "," + updatable.dimension] = updatable;
    Callback.invokeCallback("TileEntityAdded", updatable, false);
};
var AbobaDeclarations = TileEntity;
Saver.addSavesScope("_tiles", function read(data) {
    AbobaDeclarations.tileEntityList = data || [];
}, function save() {
    return TileEntity["tileEntityList"];
});
WRAP_JAVA("ru.koshakmine.icstd.js.LiquidRegistry").init(LiquidRegistry);
WRAP_JAVA("ru.koshakmine.icstd.js.TileEntity").init(TileEntity);
IMPORT("EnergyNet");
WRAP_JAVA("ru.koshakmine.icstd.js.EnergyNetLib")
    .init({
    assureEnergyType: function (type, value) {
        return EnergyTypeRegistry.assureEnergyType(String(type), Number(value));
    }
});
IMPORT("StorageInterface");
WRAP_JAVA("ru.koshakmine.icstd.js.StorageInterfaceLib").init(StorageInterface);
