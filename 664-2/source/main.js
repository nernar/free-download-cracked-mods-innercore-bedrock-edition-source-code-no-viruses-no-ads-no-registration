Item.registerNameOverrideFunctionForID = function (id, func) {
    Item.nameOverrideFunctions[id] = func;
    Item.setItemNameOverrideCallbackForced(id, true);
};
function preventItemSpending(item) {
    if (Game.isItemSpendingAllowed()) {
        item.count++;
    }
}
var AnimationHolder = /** @class */ (function () {
    function AnimationHolder(isItem, descriptionFactory) {
        this.isItem = isItem || false;
        this.animation = null;
        this.pos = { x: 0, y: 0, z: 0 };
        this.descriptionFactory = descriptionFactory;
        this.state = {};
    }
    AnimationHolder.prototype.setState = function (newState) {
        var changed = false;
        for (var key in newState) {
            if (newState[key] != this.state[key]) {
                this.state[key] = newState[key];
                changed = true;
            }
        }
        if (changed) {
            this.refresh();
        }
        return this;
    };
    AnimationHolder.prototype.setPos = function (x, y, z) {
        this.pos = { x: x, y: y, z: z };
        if (this.animation) {
            this.animation.setPos(x, y, z);
        }
        return this;
    };
    AnimationHolder.prototype.setTransform = function (transformApplier) {
        this.transformApplier = transformApplier;
    };
    AnimationHolder.prototype.refresh = function () {
        if (this.animation && this.descriptionFactory) {
            var description = this.descriptionFactory(this.state);
            if (this.isItem) {
                this.animation.describeItem(description);
            }
            else {
                this.animation.describe(description);
            }
            if (this.transformApplier) {
                var transform = this.animation.transform();
                if (transform) {
                    transform.lock().clear();
                    this.transformApplier(transform);
                    transform.unlock();
                }
            }
        }
        return this;
    };
    AnimationHolder.prototype.load = function () {
        if (!this.animation) {
            var that = this;
            this.animation = this.isItem ? new Animation.Item(this.pos.x, this.pos.y, this.pos.z) : new Animation.Base(this.pos.x, this.pos.y, this.pos.z);
            this.animation.load();
        }
        this.refresh();
        return this;
    };
    AnimationHolder.prototype.unload = function () {
        if (this.animation) {
            this.animation.destroy();
            this.animation = null;
        }
        return this;
    };
    return AnimationHolder;
}());
var MeshBuilder = /** @class */ (function () {
    function MeshBuilder(useBufferedMesh) {
        this.mesh = new RenderMesh();
        this.bufferedMesh = useBufferedMesh ? new RenderMesh() : null;
        this.setNormal(0, 1, 0);
        this.setColor(1, 1, 1, 1);
    }
    MeshBuilder.prototype.setNormal = function (x, y, z) {
        this.mesh.setNormal(x, y, z);
        return this;
    };
    MeshBuilder.prototype.setColor = function (r, g, b, a) {
        this.mesh.setColor(r, g, b, a);
        return this;
    };
    MeshBuilder.prototype.rebuildNormals = function () {
        this.mesh.rebuild();
        return this;
    };
    MeshBuilder.prototype.addVertex = function (x, y, z, u, v) {
        this.mesh.addVertex(x, y, z, u, v);
        return this;
    };
    MeshBuilder.prototype.addVertexObj = function (v) {
        return this.addVertex(v.x, v.y, v.z, v.u || 0, v.v || 0);
    };
    MeshBuilder.prototype.addPoly = function () {
        for (var i = 0; i < arguments.length - 2; i++) {
            this.addVertexObj(arguments[0]);
            this.addVertexObj(arguments[i + 1]);
            this.addVertexObj(arguments[i + 2]);
        }
        return this;
    };
    MeshBuilder.prototype.addRect = function (v1, v2) {
        if (Math.abs(v1.x - v2.x) < 0.001) {
            this.addPoly(v1, { x: v1.x, y: v2.y, z: v1.z, u: v1.u, v: v2.v }, v2, { x: v1.x, y: v1.y, z: v2.z, u: v2.u, v: v1.v });
        }
        else if (Math.abs(v1.y - v2.y) < 0.001) {
            this.addPoly(v1, { x: v1.x, y: v1.y, z: v2.z, u: v1.u, v: v2.v }, v2, { x: v2.x, y: v1.y, z: v1.z, u: v2.u, v: v1.v });
        }
        else if (Math.abs(v1.z - v2.z) < 0.001) {
            this.addPoly(v1, { x: v1.x, y: v2.y, z: v1.z, u: v1.u, v: v2.v }, v2, { x: v2.x, y: v1.y, z: v1.z, u: v2.u, v: v1.v });
        }
        else {
            throw "non axis-aligned rect";
        }
        return this;
    };
    MeshBuilder.prototype.addCustomBox = function (x, y, z, sx, sy, sz, sides, resolution) {
        var rx = ((resolution && resolution.x) || 64) / 16;
        var ry = ((resolution && resolution.y) || 64) / 16;
        if (sides[0]) { // +y
            this.addRect({ x: x, y: y + sy, z: z, u: sides[0].u / rx, v: sides[0].v / ry }, { x: x + sx, y: y + sy, z: z + sz, u: (sides[0].u + sx) / rx, v: (sides[0].v + sz) / ry });
        }
        if (sides[1]) { // -y
            this.addRect({ x: x, y: y, z: z, u: sides[1].u / rx, v: sides[1].v / ry }, { x: x + sx, y: y, z: z + sz, u: (sides[1].u + sx) / rx, v: (sides[1].v + sz) / ry });
        }
        if (sides[2]) { // +x
            this.addRect({ x: x + sx, y: y, z: z, u: sides[2].u / rx, v: (sides[2].v + sy) / ry }, { x: x + sx, y: y + sy, z: z + sz, u: (sides[2].u + sz) / rx, v: (sides[3].v) / ry });
        }
        if (sides[3]) { // -x
            this.addRect({ x: x, y: y, z: z, u: sides[3].u / rx, v: (sides[3].v + sy) / ry }, { x: x, y: y + sy, z: z + sz, u: (sides[3].u + sz) / rx, v: (sides[3].v) / ry });
        }
        if (sides[4]) { // +z
            this.addRect({ x: x, y: y, z: z + sz, u: sides[4].u / rx, v: (sides[4].v + sy) / ry }, { x: x + sx, y: y + sy, z: z + sz, u: (sides[4].u + sx) / rx, v: (sides[4].v) / ry });
        }
        if (sides[5]) { // -z
            this.addRect({ x: x, y: y, z: z, u: sides[5].u / rx, v: (sides[5].v + sy) / ry }, { x: x + sx, y: y + sy, z: z, u: (sides[5].u + sx) / rx, v: (sides[5].v) / ry });
        }
        return this;
    };
    MeshBuilder.prototype.addBox = function (x, y, z, sx, sy, sz, u, v, resolution) {
        var rx = ((resolution && resolution.x) || 64) / 16;
        var ry = ((resolution && resolution.y) || 64) / 16;
        this.addCustomBox(x, y, z, sx, sy, sz, [
            { u: u, v: v },
            { u: u + sx, v: v },
            { u: u, v: v + sz },
            { u: u + sz + sx, v: v + sz },
            { u: u + sz, v: v + sz },
            { u: u + sz * 2 + sx, v: v + sz } // 5
        ], resolution);
    };
    MeshBuilder.prototype.addMirroredBox = function (x, y, z, sx, sy, sz, u, v, resolution) {
        var rx = ((resolution && resolution.x) || 64) / 16;
        var ry = ((resolution && resolution.y) || 64) / 16;
        this.addCustomBox(x, y, z, sx, sy, sz, [
            { u: u, v: v },
            { u: u, v: v },
            { u: u, v: v + sz },
            { u: u, v: v + sz },
            { u: u + sz, v: v + sz },
            { u: u + sz, v: v + sz } // 5
        ], { x: rx, y: ry });
    };
    MeshBuilder.prototype.addSingleTextureBox = function (x, y, z, sx, sy, sz, u, v, resolution) {
        var rx = (resolution && resolution.x) || 64;
        var ry = (resolution && resolution.y) || 64;
        this.addCustomBox(x, y, z, sx, sy, sz, [
            { u: u, v: v },
            { u: u, v: v },
            { u: u, v: v },
            { u: u, v: v },
            { u: u, v: v },
            { u: u, v: v } // 5
        ], { x: rx, y: ry });
    };
    MeshBuilder.prototype.clear = function () {
        this.mesh.clear();
        return this;
    };
    MeshBuilder.prototype.build = function () {
        this.mesh.invalidate();
        if (this.bufferedMesh) {
            var tmp = this.bufferedMesh;
            this.bufferedMesh = this.mesh;
            this.mesh = tmp;
            return this.bufferedMesh;
        }
        else {
            return this.mesh;
        }
    };
    return MeshBuilder;
}());
var BeverageEffect = {
    alcoholAmount: 0,
    drink: function (name, amount) {
        var TICKS_PER_POWER_UNIT = 6000;
        var beverage = BeverageRegistry.get(name);
        if (beverage && beverage.power) {
            BeverageEffect.alcoholAmount += beverage.power * amount * TICKS_PER_POWER_UNIT;
            var effectPower = parseInt(BeverageEffect.alcoholAmount / 200);
            var effectDuration = BeverageEffect.alcoholAmount * 15;
            if (effectPower > 0) {
                Entity.addEffect(Player.get(), 9, effectPower, effectDuration);
                Entity.addEffect(Player.get(), 10, effectPower, effectDuration);
                Entity.addEffect(Player.get(), 5, effectPower, effectDuration);
            }
            return 20;
        }
        return 0;
    }
};
Callback.addCallback("tick", function () {
    if (BeverageEffect.alcoholAmount > 0) {
        BeverageEffect.alcoholAmount--;
    }
});
var BeverageRegistry = {
    beverageMap: {},
    register: function (name, data) {
        this.beverageMap[name] = data;
    },
    get: function (name) {
        return this.beverageMap[name];
    },
    getColor: function (name) {
        var beverage = this.get(name);
        return (beverage && beverage.color) || { r: 1, g: 1, b: 1, a: 1 };
    },
    getDisplayedName: function (name) {
        var beverage = this.get(name);
        return (beverage && beverage.name) || "beverage:" + name;
    },
    recipeMap: {},
    /*
        {
            inputBeverage: {name: "name", volume: 1},
            inputItem: null | {id:, count:, data:},
            outputBeverage: {name: "name", volume: 1},
            duration: in ticks
        }
    */
    addRecipe: function (recipe) {
        this.recipeMap[recipe.inputBeverage.name] = recipe;
    },
    getRecipe: function (beverage) {
        return this.recipeMap[beverage];
    }
};
// REGISTRATION
BeverageRegistry.register("water", {
    name: "Water",
    color: { r: 0.2, g: 0.6, b: 0.9, a: 1 }
});
BeverageRegistry.register("beer", {
    name: "Beer",
    power: 0.075,
    color: { r: 0.9, g: 0.7, b: 0.2, a: 1 }
});
BeverageRegistry.addRecipe({
    inputBeverage: { name: "water", volume: 2 },
    inputItem: { id: 296, count: 1, data: -1 },
    duration: 6000,
    outputBeverage: { name: "beer", volume: 2 }
});
var BeverageStorage = /** @class */ (function () {
    function BeverageStorage(data, refreshFunc) {
        this.data = data || {};
        this.refreshFunc = refreshFunc;
        this.maxVolume = 1;
    }
    BeverageStorage.prototype.setMaxVolume = function (v) {
        this.maxVolume = v;
        return this;
    };
    BeverageStorage.prototype.setSealed = function (sealed) {
        this.data.sealed = sealed;
    };
    BeverageStorage.prototype.isSealed = function () {
        return this.data.sealed;
    };
    BeverageStorage.prototype.startRecipe = function (recipe, units) {
        this.data.remainingProgress = this.data.maxDuration = recipe.duration;
        this.data.resultName = recipe.outputBeverage.name;
        this.data.resultVolume = recipe.outputBeverage.volume * units;
        this.setSealed(true);
    };
    BeverageStorage.prototype.updateRecipe = function () {
        if (this.data.maxDuration > -1) {
            if (this.data.remainingProgress-- <= 0) {
                this.data.volume = this.data.resultVolume;
                this.data.beverage = this.data.resultName;
                this.data.maxDuration = -1;
                this.data.resultName = null;
                this.data.resultVolume = 0;
                this.setSealed(false);
                this.refresh();
            }
        }
    };
    BeverageStorage.prototype.getRecipeProgress = function () {
        if (this.data.maxDuration > 0) {
            return (1 - this.data.remainingProgress / this.data.maxDuration) || 0;
        }
    };
    BeverageStorage.prototype.refresh = function () {
        if (this.refreshFunc) {
            this.refreshFunc({
                maxVolume: this.maxVolume,
                volume: this.data.volume,
                beverage: this.data.beverage
            });
        }
    };
    BeverageStorage.prototype.getBeverageType = function () {
        return this.data.beverage;
    };
    BeverageStorage.prototype.addBeverage = function (type, amount) {
        if (this.isSealed()) {
            return amount;
        }
        if (!this.data.beverage) {
            this.data.beverage = type;
        }
        else if (this.data.beverage != type) {
            return amount;
        }
        var vol = this.data.volume;
        vol += amount;
        if (vol > this.maxVolume) {
            this.data.volume = this.maxVolume;
            this.refresh();
            return vol - this.maxVolume;
        }
        else {
            this.data.volume = vol;
            this.refresh();
            return 0;
        }
    };
    BeverageStorage.prototype.getBeverage = function (type, amount) {
        if (this.isSealed()) {
            return 0;
        }
        if (type != this.data.beverage) {
            return 0;
        }
        var vol = this.data.volume;
        vol -= amount;
        if (vol <= 0) {
            this.data.volume = 0;
            this.data.beverage = null;
            this.refresh();
            return -vol;
        }
        else {
            this.data.volume = vol;
            this.refresh();
            return amount;
        }
    };
    BeverageStorage.prototype.asItemExtra = function () {
        var extra = new ItemExtraData();
        extra.putFloat("bev_volume", this.data.volume || 0);
        extra.putString("bev_type", this.data.beverage || null);
        extra.putBoolean("bev_sealed", this.data.sealed || false);
        if (this.data.maxDuration > 0) {
            extra.putFloat("bev_max_duration", this.data.maxDuration || 0);
            extra.putFloat("bev_rem_duration", this.data.remainingProgress || 0);
            extra.putString("bev_result_name", this.data.resultName || null);
            extra.putFloat("bev_result_vol", this.data.resultVolume || 0);
        }
        return extra;
    };
    BeverageStorage.prototype.fromItemExtra = function (extra) {
        if (extra != null) {
            this.data.volume = extra.getFloat("bev_volume", this.data.volume || 0);
            this.data.beverage = extra.getString("bev_type", this.data.beverage || null);
            this.data.sealed = extra.getBoolean("bev_sealed", this.data.sealed || false);
            if (extra.getFloat("bev_max_duration", -1) > 0) {
                this.data.maxDuration = extra.getFloat("bev_max_duration", 1);
                this.data.remainingProgress = extra.getFloat("bev_rem_duration", 0);
                this.data.resultName = extra.getString("bev_result_name", null);
                this.data.resultVolume = extra.getFloat("bev_result_vol", 0);
            }
            this.refresh();
        }
    };
    BeverageStorage.prototype.getTooltip = function () {
        if (!this.data.beverage || (!this.data.volume || this.data.volume <= 0)) {
            return "Empty";
        }
        return Math.round(this.data.volume * 2 * 100) / 100 + " pints of " + BeverageRegistry.getDisplayedName(this.data.beverage);
    };
    return BeverageStorage;
}());
function setupItemWithBeverageStorageSupport(item, callbacks) {
    callbacks = callbacks || {};
    Item.registerNameOverrideFunctionForID(item, function (item, name, translation) {
        var bevStorage = new BeverageStorage();
        bevStorage.fromItemExtra(item.extra);
        return (callbacks.getName ? callbacks.getName(item, name, translation) : translation) + "\n" + bevStorage.getTooltip();
    });
    Block.registerPlaceFunctionForID(item, function (coords, item, block) {
        var relCoords = coords.relative;
        if (callbacks.place) {
            relCoords = callbacks.place(coords, item, block);
        }
        else {
            if (World.canTileBeReplaced(World.getBlockID(relCoords.x, relCoords.y, relCoords.z))) {
                World.setBlock(relCoords.x, relCoords.y, relCoords.z, item.id, item.data);
            }
            else {
                relCoords = null;
            }
        }
        if (relCoords && item.extra) {
            runOnMainThread(function () {
                var te = World.getTileEntity(relCoords.x, relCoords.y, relCoords.z);
                if (te && te.bevStorage) {
                    te.bevStorage.fromItemExtra(item.extra);
                }
            });
        }
        if (!relCoords) {
            preventItemSpending(item);
        }
        return relCoords;
    });
}
IDRegistry.genBlockID("beverageTable");
Block.createBlock("beverageTable", [
    { name: "Beverage Table", texture: [["beverage_barrel_top", 0]], inCreative: true }
]);
Block.setDestroyTime("beverageTable", 0.25);
IDRegistry.genBlockID("beverageBarrel");
Block.createBlock("beverageBarrel", [
    { name: "Barrel", texture: [["beverage_barrel_top", 0], ["beverage_barrel_bottom", 0], ["beverage_barrel_side", 0], ["beverage_barrel_side", 0], ["beverage_barrel_side", 0]], inCreative: true }
]);
Block.setDestroyTime("beverageBarrel", 0.25);
Block.setBlockShape(BlockID.beverageBarrel, { x: 0.001, y: 0.001, z: 0.001 }, { x: 0.999, y: 0.999, z: 0.999 });
setupItemWithBeverageStorageSupport(BlockID.beverageBarrel);
Block.registerDropFunctionForID(BlockID.beverageBarrel, function () { return []; });
//
(function () {
    var barrelBlockModel = BlockRenderer.createModel();
    barrelBlockModel.addBox(0, 0, 1 / 8, 1, 1, 7 / 8, BlockID.beverageBarrel, 0);
    barrelBlockModel.addBox(1 / 8, 0, 0, 7 / 8, 1, 1, BlockID.beverageBarrel, 0);
    var barrelIcRender = new ICRender.Model();
    barrelIcRender.addEntry(barrelBlockModel);
    BlockRenderer.setStaticICRender(BlockID.beverageBarrel, -1, barrelIcRender);
})();
TileEntity.registerPrototype(BlockID.beverageBarrel, {
    defaultValues: {
        beverage: null,
        volume: 0
    },
    init: function () {
        var that = this;
        this.bevStorage = new BeverageStorage(this.data, function (data) {
            that.animation.setState({
                volume: data.volume / data.maxVolume,
                beverage: data.beverage
            });
        }).setMaxVolume(16);
        var mesh = new MeshBuilder(true);
        this.animation = new AnimationHolder(false, function (state) {
            var e = 0.001;
            mesh.clear().setNormal(0, 0, 1);
            if (state.volume > 0) {
                var color = BeverageRegistry.getColor(state.beverage);
                mesh.setColor(color.r, color.g, color.b, color.a);
                mesh.addSingleTextureBox(e, e, 1 / 8 + e, 1 - 2 * e, state.volume * (1 - 2 * e), 6 / 8 - 2 * e, 0, state.volume);
                mesh.addSingleTextureBox(1 / 8 + e, e, e, 6 / 8 - 2 * e, state.volume * (1 - 2 * e), 1 - 2 * e, 0, state.volume);
            }
            return {
                mesh: mesh.build(),
                skin: "bar/beverage_liquid.png"
            };
        });
        this.bevStorage.refresh();
        this.animation.setPos(this.x, this.y, this.z);
    },
    load: function () {
        this.animation.load();
    },
    unload: function () {
        this.animation.unload();
    },
    destroy: function () {
        this.animation.unload();
        World.drop(this.x + .5, this.y + .5, this.z + .5, BlockID.beverageBarrel, 1, 0, this.bevStorage.asItemExtra());
    },
    tick: function () {
        this.bevStorage.updateRecipe();
    },
    message: function (msg) {
        Game.message(msg);
    },
    click: function () {
        if (Entity.getSneaking(Player.get())) {
            return false;
        }
        var playerItem = Player.getCarriedItem();
        if (playerItem.id == BlockID.beverageDrain) {
            return false;
        }
        if (!this.bevStorage.isSealed() && LiquidRegistry.getItemLiquid(playerItem.id, playerItem.data) == "water") {
            var emptyItem = LiquidRegistry.getEmptyItem(playerItem.id, playerItem.data);
            if (this.bevStorage.addBeverage("water", 1) < 1) {
                if (Game.isItemSpendingAllowed()) {
                    if (playerItem.count == 1) {
                        Player.setCarriedItem(emptyItem.id, playerItem.count, emptyItem.data, playerItem.extra);
                    }
                    else {
                        Player.setCarriedItem(playerItem.id, playerItem.count - 1, playerItem.data, playerItem.extra);
                        Player.addItemToInventory(emptyItem.id, 1, emptyItem.data);
                    }
                }
            }
            else {
                this.message("barrel is full");
            }
            return true;
        }
        var slot = this.container.getSlot("main");
        var recipe = BeverageRegistry.getRecipe(this.bevStorage.getBeverageType());
        if (recipe != null) {
            if (!this.data.sealed) {
                if (recipe.inputItem != null &&
                    recipe.inputItem.id == playerItem.id &&
                    (recipe.inputItem.data == -1 || recipe.inputItem.data == playerItem.data)) {
                    if (slot.id == 0 || slot.id == playerItem.id && slot.data == playerItem.data) {
                        slot.count++;
                        slot.id = playerItem.id;
                        slot.data = playerItem.data;
                        if (Game.isItemSpendingAllowed()) {
                            if (playerItem.count > 1) {
                                Player.setCarriedItem(playerItem.id, playerItem.count - 1, playerItem.data, playerItem.extra);
                            }
                            else {
                                Player.setCarriedItem(0, 0, 0);
                            }
                        }
                    }
                }
                if (recipe.inputItem == null || recipe.inputItem.id == slot.id && (recipe.inputItem.data == -1 || recipe.inputItem.data == slot.data)) {
                    if (this.data.volume >= recipe.inputBeverage.volume) {
                        var units = parseInt(this.data.volume / recipe.inputBeverage.volume);
                        var itemCount = units * recipe.inputItem.count;
                        if (slot.count >= itemCount) {
                            slot.count -= itemCount;
                            if (slot.count == 0) {
                                slot.id = slot.count = slot.data = 0;
                                slot.extra = null;
                            }
                            this.bevStorage.startRecipe(recipe, units);
                            this.message("started brewing " + BeverageRegistry.getDisplayedName(recipe.outputBeverage.name));
                            return;
                        }
                        else {
                            this.message("required " + (itemCount - slot.count) + "x of " + Item.getName(recipe.inputItem.id, recipe.inputItem.data) + " more to brew " + BeverageRegistry.getDisplayedName(recipe.outputBeverage.name));
                        }
                    }
                    else {
                        this.message("at least " + recipe.inputBeverage.volume + " pints of " + BeverageRegistry.getDisplayedName(recipe.inputBeverage.name) + " required");
                    }
                }
            }
            else {
                this.message("barrel is sealed, progress: " + parseInt(this.bevStorage.getRecipeProgress() * 100) + "%");
            }
        }
        return true;
    }
});
IDRegistry.genBlockID("beverageCup");
Block.createBlock("beverageCup", [
    { name: "Cup", texture: [["cup_bottom", 0], ["cup_bottom", 0], ["cup_side", 0]], inCreative: true }
]);
Block.setDestroyTime("beverageCup", 0.1);
Block.setShape(BlockID.beverageCup, 0.25, 0, 0.25, 0.75, 0.5, 0.75);
setupItemWithBeverageStorageSupport(BlockID.beverageCup, {
    place: function (coords) {
        if (World.getBlockID(coords.relative.x, coords.relative.y - 1, coords.relative.z) == BlockID.beverageTable) {
            World.setBlock(coords.relative.x, coords.relative.y, coords.relative.z, BlockID.beverageCup, 0);
            return coords.relative;
        }
        else {
            Game.message("you can only place cup on a table");
        }
    }
});
Block.registerDropFunctionForID(BlockID.beverageCup, function () { return []; });
Block.registerNeighbourChangeFunctionForID(BlockID.beverageCup, function (coords) {
    if (World.getBlockID(coords.x, coords.y - 1, coords.z) == 0) {
        World.removeTileEntity(coords.x, coords.y, coords.z);
        World.destroyBlock(coords.x, coords.y, coords.z, true);
    }
});
(function () {
    var data = 0;
    var cupModel = BlockRenderer.createModel();
    cupModel.addBox(5 / 16, 0, 4 / 16, 13 / 16, 12 / 16, 5 / 16, BlockID.beverageCup, data);
    cupModel.addBox(5 / 16, 0, 11 / 16, 13 / 16, 12 / 16, 12 / 16, BlockID.beverageCup, data);
    cupModel.addBox(5 / 16, 0, 4 / 16, 6 / 16, 12 / 16, 12 / 16, BlockID.beverageCup, data);
    cupModel.addBox(12 / 16, 0, 4 / 16, 13 / 16, 12 / 16, 12 / 16, BlockID.beverageCup, data);
    cupModel.addBox(5 / 16, 0, 4 / 16, 13 / 16, 1 / 16, 12 / 16, BlockID.beverageCup, data);
    cupModel.addBox(1 / 16, 3 / 16, 7 / 16, 5 / 16, 4 / 16, 9 / 16, "cup_handle", 0);
    cupModel.addBox(1 / 16, 8 / 16, 7 / 16, 5 / 16, 9 / 16, 9 / 16, "cup_handle", 0);
    cupModel.addBox(1 / 16, 3 / 16, 7 / 16, 2 / 16, 9 / 16, 9 / 16, "cup_handle", 0);
    var cupIcRender = new ICRender.Model();
    cupIcRender.addEntry(cupModel);
    ItemModel.getFor(BlockID.beverageCup, data).setModel(cupModel);
    BlockRenderer.setStaticICRender(BlockID.beverageCup, -1, new ICRender.Model());
})();
TileEntity.registerPrototype(BlockID.beverageCup, {
    defaultValues: {
        beverage: null,
        volume: 0,
        yaw: 0,
        offsetX: -1,
        offsetZ: -1,
        size: 0.7,
        cooldown: 0
    },
    init: function () {
        if (!this.data.yaw) {
            this.data.offsetX = 0.45 + Math.random() * 0.1;
            this.data.offsetZ = 0.45 + Math.random() * 0.1;
            this.data.yaw = Math.random() * 6.28;
        }
        var that = this;
        this.bevStorage = new BeverageStorage(this.data, function (data) {
            that.liquidAnimation.setState({
                volume: data.volume / data.maxVolume,
                beverage: data.beverage
            });
        }).setMaxVolume(0.5);
        var mesh = new MeshBuilder(true);
        this.liquidAnimation = new AnimationHolder(false, function (state) {
            var e = 0.001;
            mesh.clear().setNormal(0, 0, 1);
            if (state.volume > 0 && state.volume) {
                var s = that.data.size;
                var color = BeverageRegistry.getColor(state.beverage);
                mesh.setColor(color.r, color.g, color.b, color.a);
                mesh.addSingleTextureBox(-s * 2 / 16, 0, -s * 3 / 16, s * 6 / 16, state.volume * s * 11 / 16, s * 6 / 16, 0, state.volume);
            }
            return {
                mesh: mesh.build(),
                skin: "bar/beverage_liquid.png"
            };
        });
        this.cupAnimation = new AnimationHolder(true, function (state) {
            return {
                id: BlockID.beverageCup, count: 1, data: 0,
                size: that.data.size,
                rotation: [0, that.data.yaw, 0]
            };
        });
        var transform = function (t) {
            t.rotate(0, that.data.yaw, 0);
        };
        this.liquidAnimation.setPos(this.x + this.data.offsetX, this.y, this.z + this.data.offsetZ);
        this.liquidAnimation.setTransform(transform);
        this.cupAnimation.setPos(this.x + this.data.offsetX, this.y + this.data.size / 2, this.z + this.data.offsetZ);
        this.bevStorage.refresh();
    },
    load: function () {
        this.liquidAnimation.load();
        this.cupAnimation.load();
    },
    unload: function () {
        this.liquidAnimation.unload();
        this.cupAnimation.unload();
    },
    tick: function () {
        if (this.data.cooldown > 0) {
            this.data.cooldown--;
        }
    },
    destroy: function () {
        this.liquidAnimation.unload();
        this.cupAnimation.unload();
        World.drop(this.x + .5, this.y + .5, this.z + .5, BlockID.beverageCup, 1, 0, this.bevStorage.asItemExtra());
    },
    click: function () {
        if (this.data.cooldown > 0) {
        }
        else {
            var beverage = this.bevStorage.getBeverageType();
            if (beverage) {
                var amount = this.bevStorage.getBeverage(beverage, 0.167);
                this.data.cooldown = BeverageEffect.drink(beverage, amount);
            }
        }
    }
});
IDRegistry.genBlockID("beverageDrain");
Block.createBlock("beverageDrain", [
    { name: "Drain", texture: [["drain_texture", 0]], inCreative: true }
]);
Block.setDestroyTime("beverageDrain", 0.1);
Block.setShape(BlockID.beverageDrain, 0.25, 0.25, 0.25, 0.75, 0.75, 0.75);
Block.registerPlaceFunctionForID(BlockID.beverageDrain, function (coords, item) {
    var _a;
    var validPlacementBlocks = (_a = {},
        _a[BlockID.beverageBarrel] = true,
        _a);
    if (coords.side >= 2) {
        var block = World.getBlockID(coords.x, coords.y, coords.z);
        if (validPlacementBlocks[block] && World.canTileBeReplaced(World.getBlockID(coords.relative.x, coords.relative.y, coords.relative.z))) {
            World.setBlock(coords.relative.x, coords.relative.y, coords.relative.z, BlockID.beverageDrain, coords.side - 2);
            return coords.relative;
        }
    }
    preventItemSpending(item);
});
Block.registerDropFunctionForID(BlockID.beverageDrain, function () { return [[BlockID.beverageDrain, 1, 0]]; });
Block.registerNeighbourChangeFunctionForID(BlockID.beverageDrain, function (coords) {
    var data = World.getBlockData(coords.x, coords.y, coords.z);
    data = Math.min(3, data);
    var relative = World.getRelativeCoords(coords.x, coords.y, coords.z, (data + 2) ^ 1);
    if (World.getBlockID(relative.x, relative.y, relative.z) == 0) {
        World.removeTileEntity(coords.x, coords.y, coords.z);
        World.destroyBlock(coords.x, coords.y, coords.z, true);
    }
});
(function () {
    var registerModelForRotation = function (data, yaw) {
        var drainMesh = new RenderMesh("bar/drain_model.obj", "obj");
        drainMesh.setBlockTexture("drain_texture", 0);
        drainMesh.translate(0, 2 / 16, 0 / 16);
        drainMesh.rotate(0.5, 0.5, 0.5, 0, yaw, 0);
        var drainIcRender = new ICRender.Model();
        drainIcRender.addEntry(drainMesh);
        BlockRenderer.setStaticICRender(BlockID.beverageDrain, data, drainIcRender);
        ItemModel.getFor(BlockID.beverageDrain, data).setModUiSpriteName("drain_placeholder", 0);
    };
    registerModelForRotation(0, 0);
    registerModelForRotation(1, Math.PI);
    registerModelForRotation(2, -Math.PI / 2);
    registerModelForRotation(3, Math.PI / 2);
})();
TileEntity.registerPrototype(BlockID.beverageDrain, {
    defaultValues: {
        open: false,
        stream: 0
    },
    init: function () {
        var mesh = new MeshBuilder(true);
        this.liquidAnimation = new AnimationHolder(false, function (state) {
            mesh.clear().setNormal(0, 0, 1);
            if (state.stream > 0) {
                var w = state.stream * (1 / 16 - 0.001) * 0.8;
                var h = state.streamHeight;
                var color = BeverageRegistry.getColor(state.beverage);
                mesh.setColor(color.r, color.g, color.b, color.a);
                mesh.addSingleTextureBox(-w, -h, -w, w * 2, h, w * 2, 0, 0);
            }
            return {
                mesh: mesh.build(),
                skin: "bar/beverage_liquid.png"
            };
        });
        this.liquidAnimation.setPos(this.x + 0.5, this.y + 0.5, this.z + 0.5);
        this.liquidAnimation.setState({
            beverage: null,
            stream: 0,
            streamHeight: 0
        });
    },
    load: function () {
        this.liquidAnimation.load();
    },
    unload: function () {
        this.liquidAnimation.unload();
    },
    destroy: function () {
        this.liquidAnimation.unload();
    },
    tick: function () {
        var targetStream = 0;
        if (this.data.open) {
            if (!this.source) {
                var srcCoords = World.getRelativeCoords(this.x, this.y, this.z, (Math.min(3, World.getBlockData(this.x, this.y, this.z)) + 2) ^ 1);
                var te = World.getTileEntity(srcCoords.x, srcCoords.y, srcCoords.z);
                if (te != null && te.bevStorage) {
                    this.source = te;
                }
                else {
                    this.data.open = false;
                    this.target = null;
                }
            }
            else if (this.source.remove) {
                this.data.open = false;
                this.source = null;
                this.target = null;
            }
            if (!this.target) {
                for (var sy = 1; sy < 5; sy++) {
                    var target = World.getTileEntity(this.x, this.y - sy, this.z);
                    if (target && target.bevStorage) {
                        this.target = target;
                        this.streamHeight = this.y - target.y;
                        break;
                    }
                }
                if (!this.target) {
                    this.data.open = false;
                }
            }
            else if (this.target.remove) {
                this.target = null;
                this.data.open = false;
            }
            if (this.target && this.source) {
                var sourceBev = this.source.bevStorage.getBeverageType();
                var targetBev = this.target.bevStorage.getBeverageType();
                if (targetBev == sourceBev || targetBev == null) {
                    targetStream = 1;
                    var beverage = sourceBev;
                    this.lastBeverage = beverage;
                    var flow = 0.0125;
                    var amount = this.source.bevStorage.getBeverage(beverage, flow);
                    if (amount < flow) {
                        this.data.open = false;
                    }
                    var left = this.target.bevStorage.addBeverage(beverage, amount);
                    //alert(beverage + " " + amount + " " + left);
                    if (left > 0) {
                        this.data.open = false;
                        this.source.bevStorage.addBeverage(beverage, left);
                    }
                    if (!this.data.open) {
                        this.target = null;
                    }
                }
                else {
                    this.target = null;
                    this.data.open = false;
                }
            }
        }
        var change = 0.1;
        var stream = this.data.stream || 0;
        if (Math.abs(stream - targetStream) < change) {
            stream = targetStream;
        }
        else if (stream < targetStream) {
            stream += change;
        }
        else {
            stream -= change;
        }
        this.data.stream = stream;
        this.liquidAnimation.setState({
            stream: stream,
            beverage: this.lastBeverage,
            streamHeight: (this.streamHeight || 1) + 0.5
        });
    },
    click: function () {
        this.data.open = !this.data.open;
        this.target = null;
        return true;
    }
});
Recipes.addShaped({ id: BlockID.beverageBarrel, count: 1, data: 0 }, [
    "xxx",
    "x x",
    "xxx"
], ['x', 17, -1]);
Recipes.addShaped({ id: BlockID.beverageTable, count: 1, data: 0 }, [
    "xxx",
    " # ",
    "###"
], ['x', 17, -1, '#', 5, -1]);
Recipes.addShaped({ id: BlockID.beverageDrain, count: 1, data: 0 }, [
    " # ",
    "###",
    "#  "
], ['#', 265, -1]);
Recipes.addShaped({ id: BlockID.beverageCup, count: 1, data: 0 }, [
    "x##",
    " ##"
], ['x', 265, -1, "#", 5, -1]);
