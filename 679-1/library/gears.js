var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spread = (this && this.__spread) || function () {
    for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));
    return ar;
};
var __values = (this && this.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/*
 ██████╗ ███████╗ █████╗ ██████╗  ██████╗  ██╗   ██╗ █████╗      ███╗
██╔════╝ ██╔════╝██╔══██╗██╔══██╗██╔════╝  ██║   ██║██╔══██╗    ████║
██║  ██╗ █████╗  ███████║██████╔╝╚█████╗   ╚██╗ ██╔╝██║  ██║   ██╔██║
██║  ╚██╗██╔══╝  ██╔══██║██╔══██╗ ╚═══██╗   ╚████╔╝ ██║  ██║   ╚═╝██║
╚██████╔╝███████╗██║  ██║██║  ██║██████╔╝    ╚██╔╝  ╚█████╔╝██╗███████╗
 ╚═════╝ ╚══════╝╚═╝  ╚═╝╚═╝  ╚═╝╚═════╝      ╚═╝    ╚════╝ ╚═╝╚══════╝
*/
LIBRARY({
    name: "Gears",
    version: 1,
    shared: true,
    api: "CoreEngine"
});
// @ts-ignore
var AdaptedLevel = ModAPI.requireGlobal("Level");
var requireMethodFromNativeAPI = ModAPI.requireGlobal("requireMethodFromNativeAPI");
// @ts-ignore
var CoreAnimation = Animation;
// @ts-ignore
var CoreLogger = Logger;
// @ts-ignore
var CoreEntity = Entity;
// @ts-ignore
var CorePlayer = Player;
// @ts-ignore
var CoreGame = Game;
// @ts-ignore
var CoreWorld = World;
// @ts-ignore
var CoreRecipes = Recipes;
// @ts-ignore
var CoreParticles = Particles;
// @ts-ignore
var CoreUpdatable = Updatable;
// @ts-ignore
var CoreBlock = Block;
// @ts-ignore
var CoreCustomBiome = CustomBiome;
var Gears;
(function (Gears) {
    var Block = /** @class */ (function () {
        function Block(id, data) {
            if (data === void 0) { data = 0; }
            if (id instanceof Block) {
                this.id = id.id;
                this.data = id.data;
            }
            else {
                this.id = id;
                this.data = data;
            }
        }
        Object.defineProperty(Block.prototype, "canBeReplaced", {
            get: function () {
                return CoreWorld.canTileBeReplaced(this.id, this.data);
            },
            enumerable: false,
            configurable: true
        });
        return Block;
    }());
    Gears.Block = Block;
})(Gears || (Gears = {}));
var Gears;
(function (Gears) {
    var Geometry;
    (function (Geometry) {
        var Vector3 = /** @class */ (function () {
            function Vector3(x, y, z) {
                var _a, _b, _c;
                if (typeof x === "number") {
                    this.x = x || 0;
                    this.y = y || 0;
                    this.z = z || 0;
                }
                else {
                    this.x = (_a = x === null || x === void 0 ? void 0 : x.x) !== null && _a !== void 0 ? _a : 0;
                    this.y = (_b = x === null || x === void 0 ? void 0 : x.y) !== null && _b !== void 0 ? _b : 0;
                    this.z = (_c = x === null || x === void 0 ? void 0 : x.z) !== null && _c !== void 0 ? _c : 0;
                }
            }
            Object.defineProperty(Vector3, "UP", {
                get: function () { return new Vector3(0, 1, 0); },
                enumerable: false,
                configurable: true
            });
            Object.defineProperty(Vector3, "DOWN", {
                get: function () { return new Vector3(0, -1, 0); },
                enumerable: false,
                configurable: true
            });
            Object.defineProperty(Vector3, "NORTH", {
                get: function () { return new Vector3(0, 0, -1); },
                enumerable: false,
                configurable: true
            });
            Object.defineProperty(Vector3, "SOUTH", {
                get: function () { return new Vector3(0, 0, 1); },
                enumerable: false,
                configurable: true
            });
            Object.defineProperty(Vector3, "EAST", {
                get: function () { return new Vector3(1, 0, 0); },
                enumerable: false,
                configurable: true
            });
            Object.defineProperty(Vector3, "WEST", {
                get: function () { return new Vector3(-1, 0, 0); },
                enumerable: false,
                configurable: true
            });
            Object.defineProperty(Vector3, "ZERO", {
                get: function () { return new Vector3(0, 0, 0); },
                enumerable: false,
                configurable: true
            });
            Object.defineProperty(Vector3, "ONE", {
                get: function () { return new Vector3(1, 1, 1); },
                enumerable: false,
                configurable: true
            });
            Vector3.random = function (randomizer) {
                if (randomizer) {
                    var x_1 = randomizer();
                    var y_1 = randomizer();
                    var z_1 = randomizer();
                    return new Vector3(x_1, y_1, z_1);
                }
                var x = Math.random();
                var y = Math.random();
                var z = Math.random();
                return new Vector3(x, y, z);
            };
            Vector3.prototype.toArray = function () {
                return [this.x, this.y, this.z];
            };
            Vector3.prototype.plus = function (value, ay, az) {
                if (arguments.length < 3) {
                    if (typeof value === "number") {
                        var x_2 = this.x + value || 0;
                        var y_2 = this.y + value || 0;
                        var z_2 = this.z + value || 0;
                        return new Vector3(x_2, y_2, z_2);
                    }
                    var x = this.x + value.x || 0;
                    var y = this.y + value.y || 0;
                    var z = this.z + value.z || 0;
                    return new Vector3(x, y, z);
                }
                else {
                    var x = this.x + value || 0;
                    var y = this.y + ay || 0;
                    var z = this.z + az || 0;
                    return new Vector3(x, y, z);
                }
            };
            Vector3.prototype.minus = function (value, ay, az) {
                if (arguments.length < 3) {
                    if (typeof value === "number") {
                        var x_3 = this.x - value || 0;
                        var y_3 = this.y - value || 0;
                        var z_3 = this.z - value || 0;
                        return new Vector3(x_3, y_3, z_3);
                    }
                    var x = this.x - value.x || 0;
                    var y = this.y - value.y || 0;
                    var z = this.z - value.z || 0;
                    return new Vector3(x, y, z);
                }
                else {
                    var x = this.x - value || 0;
                    var y = this.y - ay || 0;
                    var z = this.z - az || 0;
                    return new Vector3(x, y, z);
                }
            };
            Vector3.prototype.scale = function (value) {
                if (typeof value === "number") {
                    var x_4 = this.x * value;
                    var y_4 = this.y * value;
                    var z_4 = this.z * value;
                    return new Vector3(x_4, y_4, z_4);
                }
                var x = this.x * value.x;
                var y = this.y * value.y;
                var z = this.z * value.z;
                return new Vector3(x, y, z);
            };
            Vector3.prototype.divide = function (value) {
                return this.scale(1 / value);
            };
            Vector3.prototype.dot = function (value) {
                return this.x * value.x + this.y * value.y + this.z * value.z;
            };
            Vector3.prototype.distanceTo = function (value) {
                return new Vector3(value.x - this.x, value.y - this.y, value.z - this.z).length;
            };
            Vector3.prototype.lerp = function (value, alpha) {
                return this.plus(value.minus(this).scale(alpha));
            };
            Vector3.prototype.slerp = function (value, alpha) {
                var dot = this.dot(value);
                dot = Math.min(Math.max(dot, -1), 1);
                var theta = Math.acos(dot) * alpha;
                var relative = value.minus(this.scale(dot));
                return this.scale(Math.cos(theta)).plus(relative.normalized.scale(Math.sin(theta)));
            };
            Vector3.prototype.equals = function (value) {
                return this.x == value.x && this.y == value.y && this.z == value.z;
            };
            Vector3.prototype.isNaN = function () {
                return isNaN(this.x) || isNaN(this.y) || isNaN(this.z);
            };
            Vector3.prototype.floor = function () {
                var x = Math.floor(this.x);
                var y = Math.floor(this.y);
                var z = Math.floor(this.z);
                return new Vector3(x, y, z);
            };
            Vector3.prototype.round = function () {
                var x = Math.round(this.x);
                var y = Math.round(this.y);
                var z = Math.round(this.z);
                return new Vector3(x, y, z);
            };
            Vector3.prototype.ceil = function () {
                var x = Math.ceil(this.x);
                var y = Math.ceil(this.y);
                var z = Math.ceil(this.z);
                return new Vector3(x, y, z);
            };
            Object.defineProperty(Vector3.prototype, "inverted", {
                get: function () {
                    return new Vector3(-this.x, -this.y, -this.z);
                },
                enumerable: false,
                configurable: true
            });
            Object.defineProperty(Vector3.prototype, "length", {
                get: function () {
                    return Math.pow((Math.pow(this.x, 2) + Math.pow(this.y, 2) + Math.pow(this.z, 2)), 0.5);
                },
                enumerable: false,
                configurable: true
            });
            Object.defineProperty(Vector3.prototype, "squareLength", {
                get: function () {
                    return Math.pow(this.x, 2) + Math.pow(this.y, 2) + Math.pow(this.z, 2);
                },
                enumerable: false,
                configurable: true
            });
            Object.defineProperty(Vector3.prototype, "normalized", {
                get: function () {
                    var length = this.length;
                    return new Vector3(this.x / length, this.y / length, this.z / length);
                },
                enumerable: false,
                configurable: true
            });
            Vector3.prototype.toString = function () {
                return "x: " + this.x.toFixed(2) + ", y: " + this.y.toFixed(2) + ", z: " + this.z.toFixed(2);
            };
            return Vector3;
        }());
        Geometry.Vector3 = Vector3;
    })(Geometry = Gears.Geometry || (Gears.Geometry = {}));
})(Gears || (Gears = {}));
/// <reference path="../geometry/Vector3.ts"/>
var Gears;
(function (Gears) {
    var Vector3 = Gears.Geometry.Vector3;
    var BlockActor = /** @class */ (function () {
        function BlockActor() {
            this.position = Vector3.ZERO;
            this.tick = null;
            this.defaultValues = {};
            this._dataFields = [];
            this._globalFields = [];
            this._runtimeFields = [];
            this._globalFieldScope = {};
            // internal
            this._areClassFieldsInitialized = false;
            this._destroyPrevented = false;
            this._clickPrevented = false;
            this._redstonePostedOnLoad = null;
            this._lastRedstonePower = -1;
            this._currentRedstonePower = -1;
            this._defaultGuiScreen = null;
            this._constructorDecoratorCallback();
            if (this.isUsingRedstone()) {
                this["redstone"] = this._redstone;
            }
        }
        // field decorators
        BlockActor.prototype._constructorDecoratorCallback = function () {
        };
        BlockActor._decorate_runtime = function (target, name, descriptor, initializer_value) {
            if (descriptor === void 0) { descriptor = {}; }
            var _ = target._constructorDecoratorCallback;
            target._constructorDecoratorCallback = function () {
                _.call(this);
                var value = undefined;
                var initializer = null;
                if (initializer_value != undefined) {
                    if (typeof initializer_value === "function") {
                        initializer = initializer_value;
                    }
                    else {
                        value = initializer_value;
                    }
                }
                var field = { key: name, value: value, initializer: initializer };
                this._runtimeFields.push(field);
                if (!initializer) {
                    var _this = this;
                    Object.defineProperty(this, name, {
                        set: function (v) {
                            field.value = v;
                        },
                        configurable: true
                    });
                }
            };
        };
        BlockActor.runtime = function () {
            var initializer_args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                initializer_args[_i] = arguments[_i];
            }
            if (initializer_args.length == 1) {
                return function () {
                    var args = [];
                    for (var _i = 0; _i < arguments.length; _i++) {
                        args[_i] = arguments[_i];
                    }
                    return BlockActor._decorate_runtime(args[0], args[1], args[2], initializer_args[0]);
                };
            }
            else {
                return BlockActor._decorate_runtime(initializer_args[0], initializer_args[1], initializer_args[2], undefined);
            }
        };
        BlockActor._decorate_global = function (target, name, descriptor, initializer_value, reset_on_reenter) {
            if (descriptor === void 0) { descriptor = {}; }
            var _ = target._constructorDecoratorCallback;
            target._constructorDecoratorCallback = function () {
                _.call(this);
                var value = undefined;
                var initializer = null;
                if (initializer_value != undefined) {
                    if (typeof initializer_value === "function") {
                        initializer = initializer_value;
                    }
                    else {
                        value = initializer_value;
                    }
                }
                if (initializer) {
                    value = this._globalFieldScope[name] = initializer.call(this, this);
                }
                else {
                    this._globalFieldScope[name] = value;
                }
                var field = { key: name, value: value, initializer: initializer, reset_on_reenter: reset_on_reenter };
                this._globalFields.push(field);
                // update
                if (!initializer) {
                    var _this_1 = this;
                    Object.defineProperty(this, name, {
                        set: function (v) {
                            _this_1._globalFieldScope[name] = v;
                            field.value = v;
                            Object.defineProperty(_this_1, name, { value: v });
                        },
                        configurable: true
                    });
                }
            };
        };
        BlockActor.global = function () {
            var initializer_args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                initializer_args[_i] = arguments[_i];
            }
            if (initializer_args.length == 1) {
                return function () {
                    var args = [];
                    for (var _i = 0; _i < arguments.length; _i++) {
                        args[_i] = arguments[_i];
                    }
                    return BlockActor._decorate_global(args[0], args[1], args[2], initializer_args[0], false);
                };
            }
            else {
                return BlockActor._decorate_global(initializer_args[0], initializer_args[1], initializer_args[2], undefined, false);
            }
        };
        BlockActor.world = function () {
            var initializer_args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                initializer_args[_i] = arguments[_i];
            }
            if (initializer_args.length == 1) {
                return function () {
                    var args = [];
                    for (var _i = 0; _i < arguments.length; _i++) {
                        args[_i] = arguments[_i];
                    }
                    return BlockActor._decorate_global(args[0], args[1], args[2], initializer_args[0], true);
                };
            }
            else {
                return BlockActor._decorate_global(initializer_args[0], initializer_args[1], initializer_args[2], undefined, true);
            }
        };
        BlockActor._decorate_data = function (target, name, descriptor, initializer_value) {
            if (descriptor === void 0) { descriptor = {}; }
            var _ = target._constructorDecoratorCallback;
            target._constructorDecoratorCallback = function () {
                _.call(this);
                var value = undefined;
                var initializer = null;
                if (initializer_value != undefined) {
                    if (typeof initializer_value === "function") {
                        initializer = initializer_value;
                    }
                    else {
                        value = initializer_value;
                    }
                }
                var field = { key: name, value: value, initializer: initializer };
                this._dataFields.push(field);
                if (!initializer) {
                    var _this_2 = this;
                    Object.defineProperty(this, name, {
                        set: function (v) {
                            field.value = v;
                            Object.defineProperty(_this_2, name, { value: v });
                        },
                        configurable: true
                    });
                }
            };
        };
        BlockActor.data = function () {
            var initializer_args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                initializer_args[_i] = arguments[_i];
            }
            if (initializer_args.length == 1) {
                return function () {
                    var args = [];
                    for (var _i = 0; _i < arguments.length; _i++) {
                        args[_i] = arguments[_i];
                    }
                    return BlockActor._decorate_data(args[0], args[1], args[2], initializer_args[0]);
                };
            }
            else {
                return BlockActor._decorate_data(initializer_args[0], initializer_args[1], initializer_args[2], undefined);
            }
        };
        BlockActor.attachTo = function (blockStringId) {
            var args = [];
            for (var _i = 1; _i < arguments.length; _i++) {
                args[_i - 1] = arguments[_i];
            }
            return function (constructor) {
                Callback.addCallback("BlocksDefined", function () {
                    if (!BlockID[blockStringId]) {
                        throw "failed to register block actor for not existing block " + blockStringId;
                    }
                    var blockActorPrototype = new (constructor.bind.apply(constructor, __spread([void 0], args)))();
                    TileEntity.registerPrototype(BlockID[blockStringId], blockActorPrototype);
                });
            };
        };
        BlockActor.prototype._defineRuntimeField = function (_a) {
            var key = _a.key, value = _a.value, initializer = _a.initializer;
            if (initializer) {
                this[key] = initializer.call(this, this);
            }
            else {
                this[key] = value;
            }
        };
        BlockActor.prototype._defineDataField = function (_a) {
            var key = _a.key, value = _a.value, initializer = _a.initializer;
            if (this.data[key] == undefined) {
                if (initializer != null) {
                    this.data[key] = initializer.call(this, this);
                }
                else {
                    this.data[key] = value;
                }
            }
            var target = this;
            Object.defineProperty(this, key, {
                get: function () {
                    return target.data[key];
                },
                set: function (v) {
                    target.data[key] = v;
                }
            });
        };
        BlockActor.prototype._defineGlobalField = function (_a) {
            var key = _a.key, value = _a.value, initializer = _a.initializer, reset_on_reenter = _a.reset_on_reenter;
            var target = this;
            if (reset_on_reenter) {
                Callback.addCallback("LevelLeft", function () {
                    if (initializer) {
                        target._globalFieldScope[key] = initializer.call(target, target);
                    }
                    else {
                        target._globalFieldScope[key] = value;
                    }
                });
            }
            Object.defineProperty(this, key, {
                get: function () {
                    return target._globalFieldScope[key];
                },
                set: function (v) {
                    target._globalFieldScope[key] = v;
                }
            });
        };
        BlockActor.prototype._initClassFields = function () {
            var e_1, _a, e_2, _b, e_3, _c;
            try {
                for (var _d = __values(this._globalFields), _e = _d.next(); !_e.done; _e = _d.next()) {
                    var field = _e.value;
                    this._defineGlobalField(field);
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (_e && !_e.done && (_a = _d.return)) _a.call(_d);
                }
                finally { if (e_1) throw e_1.error; }
            }
            try {
                for (var _f = __values(this._dataFields), _g = _f.next(); !_g.done; _g = _f.next()) {
                    var field = _g.value;
                    this._defineDataField(field);
                }
            }
            catch (e_2_1) { e_2 = { error: e_2_1 }; }
            finally {
                try {
                    if (_g && !_g.done && (_b = _f.return)) _b.call(_f);
                }
                finally { if (e_2) throw e_2.error; }
            }
            try {
                for (var _h = __values(this._runtimeFields), _j = _h.next(); !_j.done; _j = _h.next()) {
                    var field = _j.value;
                    this._defineRuntimeField(field);
                }
            }
            catch (e_3_1) { e_3 = { error: e_3_1 }; }
            finally {
                try {
                    if (_j && !_j.done && (_c = _h.return)) _c.call(_h);
                }
                finally { if (e_3) throw e_3.error; }
            }
        };
        BlockActor.prototype._refreshInternal = function () {
            this.position = new Vector3(this["x"], this["y"], this["z"]);
            if (!this._areClassFieldsInitialized) {
                this._areClassFieldsInitialized = true;
                this._initClassFields();
            }
        };
        BlockActor.prototype.init = function () {
            this._refreshInternal();
            if (this["onTick"]) {
                this.tick = this["onTick"];
            }
            this.onInit();
        };
        BlockActor.prototype.load = function () {
            this._refreshInternal();
            if (this._redstonePostedOnLoad) {
                this.onRedstonePowerChanged(this._redstonePostedOnLoad);
                this._redstonePostedOnLoad = null;
            }
            this.onLoad();
        };
        BlockActor.prototype.unload = function () {
            this.onUnload();
        };
        BlockActor.prototype.created = function () {
            this._refreshInternal();
            this.onCreated();
        };
        BlockActor.prototype.preventDestroy = function () {
            this._destroyPrevented = true;
        };
        BlockActor.prototype.destroy = function () {
            this._destroyPrevented = false;
            this.onDestroy();
            if (!this._destroyPrevented) {
                this["noupdate"] = false;
                this["remove"] = true;
            }
            return this._destroyPrevented;
        };
        BlockActor.prototype.destroyBlock = function (coords, player) {
            this.onBlockDestroy(coords, player);
        };
        BlockActor.prototype.preventClick = function () {
            this._clickPrevented = true;
        };
        BlockActor.prototype.click = function (id, count, data, coords) {
            this._clickPrevented = false;
            var itemInHand = Gears.Player.carriedItem;
            if (itemInHand.id == id && itemInHand.count == count && itemInHand.data == data) {
                this.onItemUse(new Gears.ItemStack(itemInHand.id, itemInHand.count, itemInHand.data, itemInHand.extra), coords, Gears.Player);
            }
            else {
                this.onItemUse(new Gears.ItemStack(id, count, data), coords, Gears.Player);
            }
            return this._clickPrevented;
        };
        BlockActor.prototype._redstone = function (params) {
            if (this._currentRedstonePower != params.power) {
                this._lastRedstonePower = this._currentRedstonePower;
                this._currentRedstonePower = params.power;
                var redstoneData = { power: params.power, last: this._lastRedstonePower, onLoad: this._lastRedstonePower != -1 };
                if (this.__initialized && this.isLoaded) {
                    this._redstonePostedOnLoad = null;
                    this.onRedstonePowerChanged(redstoneData);
                }
                else {
                    this._redstonePostedOnLoad = redstoneData;
                }
            }
        };
        BlockActor.prototype.getCurrentRedstonePower = function () {
            return this._currentRedstonePower;
        };
        BlockActor.prototype.getLastRedstonePower = function () {
            return this._lastRedstonePower;
        };
        // callbacks
        BlockActor.prototype.onCreated = function () {
        };
        BlockActor.prototype.onInit = function () {
        };
        BlockActor.prototype.onLoad = function () {
        };
        BlockActor.prototype.onUnload = function () {
        };
        BlockActor.prototype.onCheckerTick = function (isInitialized, isLoaded, wasLoaded) {
        };
        BlockActor.prototype.onDestroy = function () {
        };
        // TODO: after entity api is added, change player parameter type
        BlockActor.prototype.onBlockDestroy = function (coords, player) {
        };
        // TODO: after entity api is added, change player parameter type
        BlockActor.prototype.onItemUse = function (item, coords, player) {
        };
        BlockActor.prototype.isUsingRedstone = function () {
            return false;
        };
        BlockActor.prototype.onRedstonePowerChanged = function (signal) {
        };
        BlockActor.prototype.getGuiScreen = function () {
            return this.getDefaultUiScreen();
        };
        BlockActor.prototype.setUiScreen = function (window) {
            this._defaultGuiScreen = window;
        };
        BlockActor.prototype.getDefaultUiScreen = function () {
            return this._defaultGuiScreen;
        };
        return BlockActor;
    }());
    Gears.BlockActor = BlockActor;
})(Gears || (Gears = {}));
var Gears;
(function (Gears) {
    var BlockInWorld = /** @class */ (function () {
        function BlockInWorld(position) {
            this.position = position;
        }
        Object.defineProperty(BlockInWorld.prototype, "id", {
            get: function () {
                if (this._id === undefined) {
                    this._id = CoreWorld.getBlockID(this.position.x | 0, this.position.y | 0, this.position.z | 0);
                }
                return this._id;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(BlockInWorld.prototype, "data", {
            get: function () {
                if (this._data === undefined) {
                    this._data = CoreWorld.getBlockData(this.position.x | 0, this.position.y | 0, this.position.z | 0);
                }
                return this._data;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(BlockInWorld.prototype, "canBeReplaced", {
            get: function () {
                return this.asBlock().canBeReplaced;
            },
            enumerable: false,
            configurable: true
        });
        BlockInWorld.prototype.asBlock = function () { return new Gears.Block(this.id, this.data); };
        return BlockInWorld;
    }());
    Gears.BlockInWorld = BlockInWorld;
})(Gears || (Gears = {}));
var Gears;
(function (Gears) {
    var Util;
    (function (Util) {
        function getValueFromFunctionable(functionable) {
            return typeof functionable === "function" ? functionable() : functionable;
        }
        Util.getValueFromFunctionable = getValueFromFunctionable;
        ;
    })(Util = Gears.Util || (Gears.Util = {}));
})(Gears || (Gears = {}));
/// <reference path="../util/Functionable.ts" />
/// <reference path="../geometry/Vector3.ts"/>
var Gears;
(function (Gears) {
    var Vector3 = Gears.Geometry.Vector3;
    var BlockRegistry;
    (function (BlockRegistry) {
        var getValueFromFunctionable = Gears.Util.getValueFromFunctionable;
        function translateTypeDescriptorToType(descriptor) {
            if (descriptor === void 0) { descriptor = {}; }
            var result = {};
            if ("base" in descriptor)
                result.base = descriptor.base;
            if ("friction" in descriptor)
                result.friction = descriptor.friction;
            if ("material" in descriptor)
                result.material = descriptor.material;
            if ("renderAllFaces" in descriptor)
                result.renderallfaces = descriptor.renderAllFaces;
            if ("solid" in descriptor)
                result.solid = descriptor.solid;
            if ("translucency" in descriptor)
                result.translucency = descriptor.translucency;
            if ("renderType" in descriptor)
                result.rendertype = descriptor.renderType;
            if ("renderLayer" in descriptor)
                result.renderlayer = descriptor.renderLayer;
            if ("destroyTime" in descriptor)
                result.destroytime = descriptor.destroyTime;
            if ("lightOpacity" in descriptor)
                result.lightopacity = descriptor.lightOpacity;
            if ("lightLevel" in descriptor)
                result.lightlevel = descriptor.lightLevel;
            if ("explosionResistance" in descriptor)
                result.explosionres = descriptor.explosionResistance;
            return result;
        }
        // #region Registration
        var types = [];
        function registerType(name, descriptor) {
            types[name] = CoreBlock.createSpecialType(translateTypeDescriptorToType(descriptor));
        }
        BlockRegistry.registerType = registerType;
        var blocks = [];
        function register(namedID, descriptor) {
            var block = {
                ID: IDRegistry.genBlockID(namedID),
                namedID: namedID,
                descriptor: descriptor
            };
            blocks.push(block);
        }
        BlockRegistry.register = register;
        // #endregion
        Callback.addCallback("BlocksDefined", function () {
            var e_4, _a;
            var _loop_1 = function (block) {
                var ID = block.ID, namedID = block.namedID, descriptor = block.descriptor;
                var variations = descriptor.variations;
                if (!Array.isArray(variations))
                    variations = [variations];
                for (var i in variations) {
                    var variation = variations[i];
                    var texture = variation.texture;
                    switch (typeof texture) {
                        case "string":
                            texture = [[texture, 0]];
                            break;
                        case "object":
                            var types_1 = texture.map(function (e) { return typeof e; });
                            if (~types_1.indexOf("number"))
                                texture = [texture];
                            else
                                texture = texture.map(function (e) { return Array.isArray(e) ? e : [e, 0]; });
                            break;
                    }
                    variation.texture = texture;
                }
                var type = (typeof descriptor.type == "string" ?
                    types[descriptor.type] :
                    CoreBlock.createSpecialType(translateTypeDescriptorToType(descriptor.type)));
                // TODO: Add block with rotation
                // @ts-ignore
                CoreBlock.createBlock(namedID, variations, type);
                for (var i = 0; i < variations.length; i++) {
                    var shape = variations[i].shape;
                    if (!shape)
                        continue;
                    var start = shape[0];
                    var end = shape[1];
                    CoreBlock.setShape(ID, start.x, start.y, start.z, end.x, end.y, end.z, i);
                }
                var callbacks = descriptor.callbacks, model = descriptor.model, collider = descriptor.collider;
                if (model)
                    BlockRenderer.setStaticICRender(ID, -1, getValueFromFunctionable(model));
                if (collider)
                    BlockRenderer.setCustomCollisionShape(ID, -1, getValueFromFunctionable(collider));
                var _a = callbacks !== null && callbacks !== void 0 ? callbacks : {}, place = _a.place, drop = _a.drop, popResources = _a.popResources, animateTick = _a.animateTick, randomTick = _a.randomTick, neighbourChanged = _a.neighbourChanged, entityInside = _a.entityInside;
                if (place) {
                    CoreBlock.registerPlaceFunction(namedID, function (coords, item, block) {
                        var pos = new Vector3(coords);
                        place(new Gears.ItemUseCoordinates(pos, coords.side), new Gears.ItemStack(item.id, item.count, item.data, item.extra), new Gears.Block(block.id, block.data));
                    });
                }
                if (drop) {
                    CoreBlock.registerDropFunction(namedID, function (coords, id, data, diggingLevel) {
                        var _a;
                        var pos = new Vector3(coords);
                        var d = drop(new Gears.ItemUseCoordinates(pos, coords.side), new Gears.Block(id, data), diggingLevel);
                        if (d instanceof Gears.ItemStack)
                            d = [d];
                        return (_a = d.map(function (e) { return [e.id, e.count, e.data]; })) !== null && _a !== void 0 ? _a : [];
                    });
                }
                if (popResources) {
                    CoreBlock.registerPopResourcesFunction(namedID, function (coords, block, f, i) {
                        popResources(new Vector3(coords), new Gears.Block(block.id, block.data), f, i);
                    });
                }
                if (animateTick) {
                    CoreBlock.setAnimateTickCallback(BlockID[namedID], function (x, y, z, id, data) {
                        animateTick(new Vector3(x, y, z), new Gears.Block(id, data));
                    });
                }
                if (randomTick) {
                    CoreBlock.setRandomTickCallback(BlockID[namedID], function (x, y, z, id, data) {
                        randomTick(new Vector3(x, y, z), new Gears.Block(id, data));
                    });
                }
                if (neighbourChanged) {
                    CoreBlock.registerNeighbourChangeFunction(BlockID[namedID], function (pos, block, changePos) {
                        neighbourChanged(new Vector3(pos), new Gears.Block(block.id, block.data), new Vector3(changePos));
                    });
                }
                if (entityInside) {
                    CoreBlock.registerEntityInsideFunctionForID(BlockID[namedID], function (coords, block, entity) {
                        entityInside(new Vector3(coords), new Gears.Block(block.id, block.data), new Gears.EntityActor(entity));
                    });
                }
            };
            try {
                for (var blocks_1 = __values(blocks), blocks_1_1 = blocks_1.next(); !blocks_1_1.done; blocks_1_1 = blocks_1.next()) {
                    var block = blocks_1_1.value;
                    _loop_1(block);
                }
            }
            catch (e_4_1) { e_4 = { error: e_4_1 }; }
            finally {
                try {
                    if (blocks_1_1 && !blocks_1_1.done && (_a = blocks_1.return)) _a.call(blocks_1);
                }
                finally { if (e_4) throw e_4.error; }
            }
        });
    })(BlockRegistry = Gears.BlockRegistry || (Gears.BlockRegistry = {}));
})(Gears || (Gears = {}));
var Gears;
(function (Gears) {
    var ChatColor = /** @class */ (function () {
        function ChatColor() {
        }
        ChatColor.BLACK = "§0";
        ChatColor.DARK_BLUE = "§1";
        ChatColor.GREEN = "§2";
        ChatColor.DARK_AQUA = "§3";
        ChatColor.RED = "§4";
        ChatColor.PURPLE = "§5";
        ChatColor.GOLD = "§6";
        ChatColor.GRAY = "§7";
        ChatColor.DARK_GRAY = "§8";
        ChatColor.BLUE = "§9";
        ChatColor.LIGHT_GREEN = "§a";
        ChatColor.AQUA = "§b";
        ChatColor.LIGHT_RED = "§c";
        ChatColor.MAGENTA = "§d";
        ChatColor.YELLOW = "§e";
        ChatColor.WHITE = "§f";
        return ChatColor;
    }());
    Gears.ChatColor = ChatColor;
    var ChatModifier = /** @class */ (function () {
        function ChatModifier() {
        }
        ChatModifier.OBFUSCATED = "§k";
        ChatModifier.BOLD = "§l";
        ChatModifier.STRIKETHROUGH = "§m";
        ChatModifier.UNDERLINED = "§n";
        ChatModifier.ITALIC = "§o";
        return ChatModifier;
    }());
    Gears.ChatModifier = ChatModifier;
})(Gears || (Gears = {}));
var Gears;
(function (Gears) {
    var ItemStack = /** @class */ (function () {
        function ItemStack(id, count, data, extra) {
            if (count === void 0) { count = 1; }
            if (data === void 0) { data = 0; }
            if (extra === void 0) { extra = new ItemExtraData(); }
            var _a;
            if (typeof id === "number" || typeof id == "string") {
                if (typeof id == "string")
                    this.sID = id;
                else
                    this._id = id;
                this.count = count;
                this.data = data;
                this.extra = extra;
                return;
            }
            this._id = id.id;
            this.count = id.count;
            this.data = id.data;
            this.extra = (_a = id.extra) !== null && _a !== void 0 ? _a : new ItemExtraData();
        }
        Object.defineProperty(ItemStack.prototype, "id", {
            get: function () {
                var _a, _b;
                if (!this._id && this.sID != null)
                    this._id = (_b = ((_a = ItemID[this.sID]) !== null && _a !== void 0 ? _a : BlockID[this.sID])) !== null && _b !== void 0 ? _b : -1;
                return this._id;
            },
            enumerable: false,
            configurable: true
        });
        ItemStack.prototype.addEnchantment = function (enchant, level) {
            throw "not implemented " + Gears.Debug.getMethodName();
        };
        Object.defineProperty(ItemStack.prototype, "descriptor", {
            get: function () { return Gears.ItemRegistry.getItemDescriptor(this.id); },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(ItemStack.prototype, "actor", {
            get: function () { return Gears.ItemActorHandler.getActorFromItemStack(this); },
            enumerable: false,
            configurable: true
        });
        ItemStack.prototype.equals = function (value, customPredicate) {
            if ((value === null || value === void 0 ? void 0 : value.id) == this.id && value.count == this.count && value.data == this.data && (!customPredicate || (customPredicate === null || customPredicate === void 0 ? void 0 : customPredicate.call({}, this, value))))
                return true;
            return false;
        };
        ItemStack.prototype.toString = function () {
            return "ItemStack(" + this.id + "," + this.count + "," + this.data + ")";
        };
        return ItemStack;
    }());
    Gears.ItemStack = ItemStack;
})(Gears || (Gears = {}));
/// <reference path="../geometry/Vector3.ts" />
/// <reference path="../items/ItemStack.ts" />
var Gears;
(function (Gears) {
    var Vector3 = Gears.Geometry.Vector3;
    var EntityActor = /** @class */ (function () {
        function EntityActor(uniqueID) {
            if (uniqueID == null)
                throw "entity is not valid";
            this._uID = uniqueID;
        }
        Object.defineProperty(EntityActor.prototype, "position", {
            get: function () { return new Vector3(CoreEntity.getPosition(this.uID)); },
            set: function (position) { CoreEntity.setPosition(this.uID, position.x, position.y, position.z); },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(EntityActor.prototype, "velocity", {
            get: function () { return new Vector3(CoreEntity.getVelocity(this.uID)); },
            set: function (position) { CoreEntity.setVelocity(this.uID, position.x, position.y, position.z); },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(EntityActor.prototype, "exists", {
            get: function () { return CoreEntity.isExist(this.uID); },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(EntityActor.prototype, "uID", {
            get: function () { return this._uID; },
            enumerable: false,
            configurable: true
        });
        return EntityActor;
    }());
    Gears.EntityActor = EntityActor;
})(Gears || (Gears = {}));
/// <reference path="EntityActor.ts"/>
var Gears;
(function (Gears) {
    var DroppedItemActor = /** @class */ (function (_super) {
        __extends(DroppedItemActor, _super);
        function DroppedItemActor() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Object.defineProperty(DroppedItemActor.prototype, "itemStack", {
            get: function () {
                var _a;
                return (_a = this._itemStackCache) !== null && _a !== void 0 ? _a : (this._itemStackCache = new Gears.ItemStack(CoreEntity.getDroppedItem(this.uID)));
            },
            enumerable: false,
            configurable: true
        });
        return DroppedItemActor;
    }(Gears.EntityActor));
    Gears.DroppedItemActor = DroppedItemActor;
})(Gears || (Gears = {}));
var Gears;
(function (Gears) {
    var EntityManager;
    (function (EntityManager) {
        function getAll() {
            var all = CoreEntity.getAll();
            return all.map(function (e) { return new Gears.EntityActor(e); });
        }
        EntityManager.getAll = getAll;
    })(EntityManager = Gears.EntityManager || (Gears.EntityManager = {}));
})(Gears || (Gears = {}));
/// <reference path="EntityActor.ts"/>
var Gears;
(function (Gears) {
    var Vector3 = Gears.Geometry.Vector3;
    var MobActor = /** @class */ (function (_super) {
        __extends(MobActor, _super);
        function MobActor() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Object.defineProperty(MobActor.prototype, "lookVector", {
            get: function () { return new Vector3(CoreEntity.getLookVector(this.uID)); },
            set: function (vector) {
                vector = vector.normalized;
                var pitch = Math.asin(vector.y);
                var yaw = -Math.asin(vector.x / Math.cos(-pitch)) || 0;
                if (vector.z < 0)
                    yaw = Math.PI - yaw;
                CoreEntity.setLookAngle(this.uID, yaw, pitch);
            },
            enumerable: false,
            configurable: true
        });
        MobActor.prototype.lookAt = function (position) { this.lookVector = position.minus(this.position).normalized; };
        Object.defineProperty(MobActor.prototype, "carriedItem", {
            get: function () {
                return new Gears.ItemStack(CorePlayer.getCarriedItem());
            },
            set: function (stack) {
                CoreEntity.setCarriedItem(this.uID, stack.id, stack.count, stack.data, stack.extra);
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(MobActor.prototype, "sneaking", {
            get: function () {
                return CoreEntity.getSneaking(this.uID);
            },
            set: function (sneaking) {
                CoreEntity.setSneaking(this.uID, sneaking);
            },
            enumerable: false,
            configurable: true
        });
        return MobActor;
    }(Gears.EntityActor));
    Gears.MobActor = MobActor;
})(Gears || (Gears = {}));
var Gears;
(function (Gears) {
    var Geometry;
    (function (Geometry) {
        var Matrix3 = /** @class */ (function () {
            function Matrix3(m11, m12, m13, m21, m22, m23, m31, m32, m33) {
                if (m11 === void 0) { m11 = 0; }
                if (m12 === void 0) { m12 = 0; }
                if (m13 === void 0) { m13 = 0; }
                if (m21 === void 0) { m21 = 0; }
                if (m22 === void 0) { m22 = 0; }
                if (m23 === void 0) { m23 = 0; }
                if (m31 === void 0) { m31 = 0; }
                if (m32 === void 0) { m32 = 0; }
                if (m33 === void 0) { m33 = 0; }
                this.elements = [];
                var e = this.elements;
                e[0] = m11;
                e[1] = m21;
                e[2] = m31;
                e[3] = m12;
                e[4] = m22;
                e[5] = m32;
                e[6] = m13;
                e[7] = m23;
                e[8] = m33;
            }
            Matrix3.fromArray = function (array) {
                if (array.length < 9)
                    throw "array " + array + " is too short to create matrix";
                var a = array;
                return new Matrix3(a[0], a[1], a[2], a[3], a[4], a[5], a[6], a[7], a[8]);
            };
            Matrix3.fromMatrix = function (matrix) {
                return Matrix3.fromArray(matrix.elements);
            };
            Object.defineProperty(Matrix3, "IDENTITY", {
                get: function () {
                    return new Matrix3(1, 0, 0, 0, 1, 0, 0, 0, 1);
                },
                enumerable: false,
                configurable: true
            });
            Object.defineProperty(Matrix3, "ZERO", {
                get: function () {
                    return new Matrix3();
                },
                enumerable: false,
                configurable: true
            });
            Matrix3.prototype.multiply = function (value) {
                var te = this.elements;
                var a11 = te[0], a12 = te[3], a13 = te[6];
                var a21 = te[1], a22 = te[4], a23 = te[7];
                var a31 = te[2], a32 = te[5], a33 = te[8];
                if (typeof value === "number") {
                    return new Matrix3(a11 * value, a12 * value, a13 * value, a21 * value, a22 * value, a23 * value, a31 * value, a32 * value, a33 * value);
                }
                var me = value.elements;
                var b11 = me[0], b12 = me[3], b13 = me[6];
                var b21 = me[1], b22 = me[4], b23 = me[7];
                var b31 = me[2], b32 = me[5], b33 = me[8];
                var r11 = a11 * b11 + a12 * b21 + a13 * b31;
                var r21 = a11 * b12 + a12 * b22 + a13 * b32;
                var r31 = a11 * b13 + a12 * b23 + a13 * b33;
                var r12 = a21 * b11 + a22 * b21 + a23 * b31;
                var r22 = a21 * b12 + a22 * b22 + a23 * b32;
                var r32 = a21 * b13 + a22 * b23 + a23 * b33;
                var r13 = a31 * b11 + a32 * b21 + a33 * b31;
                var r23 = a31 * b12 + a32 * b22 + a33 * b32;
                var r33 = a31 * b13 + a32 * b23 + a33 * b33;
                return new Matrix3(r11, r12, r13, r21, r22, r23, r31, r32, r33);
            };
            Matrix3.prototype.premultiply = function (matrix) {
                return matrix.multiply(this);
            };
            Object.defineProperty(Matrix3.prototype, "determinant", {
                get: function () {
                    var e = this.elements;
                    var n11 = e[0];
                    var n21 = e[1];
                    var n31 = e[2];
                    var n12 = e[3];
                    var n22 = e[4];
                    var n32 = e[5];
                    var n13 = e[6];
                    var n23 = e[7];
                    var n33 = e[8];
                    var t11 = n33 * n22 - n32 * n23;
                    var t12 = n32 * n13 - n33 * n12;
                    var t13 = n23 * n12 - n22 * n13;
                    return n11 * t11 + n21 * t12 + n31 * t13;
                },
                enumerable: false,
                configurable: true
            });
            Object.defineProperty(Matrix3.prototype, "inversed", {
                get: function () {
                    var det = this.determinant;
                    if (det === 0)
                        return Matrix3.ZERO;
                    var e = this.elements;
                    var n11 = e[0];
                    var n21 = e[1];
                    var n31 = e[2];
                    var n12 = e[3];
                    var n22 = e[4];
                    var n32 = e[5];
                    var n13 = e[6];
                    var n23 = e[7];
                    var n33 = e[8];
                    var t11 = n33 * n22 - n32 * n23;
                    var t12 = n32 * n13 - n33 * n12;
                    var t13 = n23 * n12 - n22 * n13;
                    var detInv = 1 / det;
                    var r11 = t11 * detInv;
                    var r21 = (n31 * n23 - n33 * n21) * detInv;
                    var r31 = (n32 * n21 - n31 * n22) * detInv;
                    var r12 = t12 * detInv;
                    var r22 = (n33 * n11 - n31 * n13) * detInv;
                    var r32 = (n31 * n12 - n32 * n11) * detInv;
                    var r13 = t13 * detInv;
                    var r23 = (n21 * n13 - n23 * n11) * detInv;
                    var r33 = (n22 * n11 - n21 * n12) * detInv;
                    return new Matrix3(r11, r12, r13, r21, r22, r23, r31, r32, r33);
                },
                enumerable: false,
                configurable: true
            });
            Object.defineProperty(Matrix3.prototype, "transposed", {
                get: function () {
                    var e = this.elements;
                    return new Matrix3(e[0], e[3], e[6], e[1], e[4], e[7], e[2], e[5], e[8]);
                },
                enumerable: false,
                configurable: true
            });
            Object.defineProperty(Matrix3.prototype, "normalized", {
                get: function () {
                    return this.inversed.transposed;
                },
                enumerable: false,
                configurable: true
            });
            Matrix3.prototype.scale = function (sx, sy) {
                var e = this.elements;
                return new Matrix3(e[0] * sx, e[1] * sy, e[2], e[3] * sx, e[4] * sy, e[5], e[6] * sx, e[7] * sy, e[8]);
            };
            Matrix3.prototype.rotated = function (theta) {
                var c = Math.cos(theta);
                var s = Math.sin(theta);
                var e = this.elements;
                var a11 = e[0], a12 = e[3], a13 = e[6];
                var a21 = e[1], a22 = e[4], a23 = e[7];
                var r11 = c * a11 + s * a21;
                var r21 = c * a12 + s * a22;
                var r31 = c * a13 + s * a23;
                var r12 = -s * a11 + c * a21;
                var r22 = -s * a12 + c * a22;
                var r32 = -s * a13 + c * a23;
                return new Matrix3(r11, r12, e[2], r21, r22, e[5], r31, r32, e[8]);
            };
            Matrix3.prototype.translate = function (tx, ty) {
                var e = this.elements;
                var r11 = e[0] + tx * e[2];
                var r21 = e[3] + tx * e[5];
                var r31 = e[6] + tx * e[8];
                var r12 = e[1] + ty * e[2];
                var r22 = e[4] + ty * e[5];
                var r32 = e[7] + ty * e[8];
                return new Matrix3(r11, r12, e[2], r21, r22, e[5], r31, r32, e[8]);
            };
            Matrix3.prototype.equals = function (matrix) {
                var te = this.elements;
                var me = matrix.elements;
                for (var i = 0; i < 9; i++) {
                    if (te[i] !== me[i])
                        return false;
                }
                return true;
            };
            Matrix3.prototype.toArray = function () {
                return this.elements;
            };
            return Matrix3;
        }());
        Geometry.Matrix3 = Matrix3;
    })(Geometry = Gears.Geometry || (Gears.Geometry = {}));
})(Gears || (Gears = {}));
var Gears;
(function (Gears) {
    var Geometry;
    (function (Geometry) {
        var Vector2 = /** @class */ (function () {
            function Vector2(x, y) {
                this.x = x;
                this.y = y;
            }
            Object.defineProperty(Vector2, "LEFT", {
                get: function () { return new Vector2(-1, 0); },
                enumerable: false,
                configurable: true
            });
            Object.defineProperty(Vector2, "RIGHT", {
                get: function () { return new Vector2(1, 0); },
                enumerable: false,
                configurable: true
            });
            Object.defineProperty(Vector2, "DOWN", {
                get: function () { return new Vector2(0, -1); },
                enumerable: false,
                configurable: true
            });
            Object.defineProperty(Vector2, "UP", {
                get: function () { return new Vector2(0, 1); },
                enumerable: false,
                configurable: true
            });
            Object.defineProperty(Vector2, "ZERO", {
                get: function () { return new Vector2(0, 0); },
                enumerable: false,
                configurable: true
            });
            Object.defineProperty(Vector2, "ONE", {
                get: function () { return new Vector2(1, 1); },
                enumerable: false,
                configurable: true
            });
            Vector2.random = function (randomizer) {
                var _a, _b;
                var x = (_a = randomizer()) !== null && _a !== void 0 ? _a : Math.random();
                var y = (_b = randomizer()) !== null && _b !== void 0 ? _b : Math.random();
                return new Vector2(x, y);
            };
            Vector2.prototype.toArray = function () {
                return [this.x, this.y];
            };
            Vector2.prototype.plus = function (value) {
                if (typeof value === "number") {
                    var x_5 = this.x + value || 0;
                    var y_5 = this.y + value || 0;
                    return new Vector2(x_5, y_5);
                }
                var x = this.x + value.x || 0;
                var y = this.y + value.y || 0;
                return new Vector2(x, y);
            };
            Vector2.prototype.minus = function (value) {
                return this.plus(typeof value === "number" ? -value : value.inverted);
            };
            Vector2.prototype.divide = function (value) {
                return this.scale(1 / value);
            };
            Vector2.prototype.dot = function (value) {
                return this.x * value.x + this.y * value.y;
            };
            Vector2.prototype.distanceTo = function (value) {
                return new Vector2(value.x - this.x, value.y - this.y).length;
            };
            Vector2.prototype.lerp = function (value, alpha) {
                return this.plus(value.minus(this).scale(alpha));
            };
            Vector2.prototype.isNaN = function () {
                return isNaN(this.x) || isNaN(this.y);
            };
            Object.defineProperty(Vector2.prototype, "inverted", {
                get: function () {
                    return new Vector2(-this.x, -this.y);
                },
                enumerable: false,
                configurable: true
            });
            Object.defineProperty(Vector2.prototype, "length", {
                get: function () {
                    return Math.pow((Math.pow(this.x, 2) + Math.pow(this.y, 2)), 0.5);
                },
                enumerable: false,
                configurable: true
            });
            Object.defineProperty(Vector2.prototype, "squareLength", {
                get: function () {
                    return Math.pow(this.x, 2) + Math.pow(this.y, 2);
                },
                enumerable: false,
                configurable: true
            });
            Vector2.prototype.floor = function () {
                var x = Math.floor(this.x);
                var y = Math.floor(this.y);
                return new Vector2(x, y);
            };
            Vector2.prototype.round = function () {
                var x = Math.round(this.x);
                var y = Math.round(this.y);
                return new Vector2(x, y);
            };
            Vector2.prototype.ceil = function () {
                var x = Math.round(this.x);
                var y = Math.round(this.y);
                return new Vector2(x, y);
            };
            Object.defineProperty(Vector2.prototype, "normalized", {
                get: function () {
                    var length = this.length;
                    return new Vector2(this.x / length, this.y / length);
                },
                enumerable: false,
                configurable: true
            });
            Vector2.prototype.scale = function (value) {
                if (typeof value === "number") {
                    this.x *= value || 0;
                    this.y *= value || 0;
                }
                else {
                    this.x *= value.x || 0;
                    this.y *= value.y || 0;
                }
                return this;
            };
            Vector2.prototype.equals = function (value) {
                return this.x == value.x && this.y == value.y;
            };
            Vector2.prototype.toString = function () {
                return "x: " + this.x.toFixed(2) + ", y: " + this.y.toFixed(2);
            };
            return Vector2;
        }());
        Geometry.Vector2 = Vector2;
    })(Geometry = Gears.Geometry || (Gears.Geometry = {}));
})(Gears || (Gears = {}));
var Gears;
(function (Gears) {
    var Graphics;
    (function (Graphics) {
        var Color = /** @class */ (function () {
            function Color(r, g, b, a) {
                if (a === void 0) { a = 1; }
                this.r = r;
                this.g = g;
                this.b = b;
                this.a = a;
            }
            Object.defineProperty(Color.prototype, "rgba", {
                get: function () { return [this.r, this.g, this.b, this.a]; },
                enumerable: false,
                configurable: true
            });
            Object.defineProperty(Color.prototype, "rgb", {
                get: function () { return [this.r, this.g, this.b]; },
                enumerable: false,
                configurable: true
            });
            Color.parse = function (hex) {
                var result = hex.match(/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})?$/i);
                var r = parseInt(result[1], 16) / 255;
                var g = parseInt(result[2], 16) / 255;
                var b = parseInt(result[3], 16) / 255;
                var a = result[4] ? parseInt(result[4], 16) / 255 : 1;
                return new Color(r, g, b, a);
            };
            Color.prototype.toString = function () {
                return "r: " + this.r.toFixed(2) + ", g: " + this.g.toFixed(2) + ", b: " + this.b.toFixed(2) + ", a: " + this.a.toFixed(2);
            };
            Object.defineProperty(Color.prototype, "negative", {
                get: function () {
                    return new Color(1 - this.r, 1 - this.g, 1 - this.b);
                },
                enumerable: false,
                configurable: true
            });
            Color.WHITE = new Color(1, 1, 1);
            Color.BLACK = new Color(0, 0, 0);
            Color.TRANSPARENT = new Color(0, 0, 0, 0);
            Color.RED = new Color(1, 0, 0);
            Color.GREEN = new Color(0, 1, 0);
            Color.BLUE = new Color(0, 0, 1);
            Color.YELLOW = new Color(1, 1, 0);
            Color.MAGENTA = new Color(1, 0, 1);
            Color.CYAN = new Color(0, 1, 1);
            return Color;
        }());
        Graphics.Color = Color;
    })(Graphics = Gears.Graphics || (Gears.Graphics = {}));
})(Gears || (Gears = {}));
var Gears;
(function (Gears) {
    var DroppedItemActorUpdatable = /** @class */ (function () {
        function DroppedItemActorUpdatable(actor, drop) {
            this.actor = actor;
            this.drop = drop;
        }
        DroppedItemActorUpdatable.prototype.update = function () {
            this.actor["tickDrop"](this.drop);
        };
        DroppedItemActorUpdatable.prototype.lazyUpdate = function () {
            if (!this.drop.exists)
                this.destroy();
        };
        DroppedItemActorUpdatable.prototype.destroy = function () {
            // TODO: maybe add some entity destruction logic to identify unloading drop from picking up by player and destruction
            this.remove = true;
        };
        return DroppedItemActorUpdatable;
    }());
    Gears.DroppedItemActorUpdatable = DroppedItemActorUpdatable;
})(Gears || (Gears = {}));
// TODO: attach basic callbacks: useOn, attack, mine, iterract, ...
var Gears;
(function (Gears) {
    var ItemActor = /** @class */ (function () {
        function ItemActor(id, uid, data) {
            if (data === void 0) { data = null; }
            this._data = {};
            this._dataInitialized = false;
            this._actorUid = null;
            this._actorUid = uid;
            if (!ItemActor.saverIdMap[id]) {
                var factory_1 = Gears.ItemActorHandler.getActorFactoryByItemID(id);
                ItemActor.saverIdMap[id] = Saver.registerObjectSaver("ItemActor" + id, {
                    read: function (data) {
                        if (data === null || data === void 0 ? void 0 : data.uid)
                            return factory_1 === null || factory_1 === void 0 ? void 0 : factory_1.instantiate(id, data.uid, data.data);
                        return null;
                    },
                    save: function (actor) {
                        return {
                            uid: actor._actorUid,
                            data: actor._data
                        };
                    }
                });
            }
            Saver.registerObject(this, ItemActor.saverIdMap[id]);
            if (data)
                this._data = data;
            this._initializeFields();
            this._dataInitialized = true;
        }
        Object.defineProperty(ItemActor.prototype, "uID", {
            get: function () {
                return this._actorUid;
            },
            enumerable: false,
            configurable: true
        });
        // --- CLASS DECORATORS ---
        ItemActor.singleton = function (constructor) {
            constructor.isSingleton = true;
            return constructor;
        };
        // --- FIELD DECORATORS ---
        ItemActor.prototype._initializeFields = function () { };
        ItemActor._decorate_data = function (target, name, descriptor, initializer_value) {
            if (descriptor === void 0) { descriptor = {}; }
            var _ = target._initializeFields;
            target._initializeFields = function () {
                var _a;
                _.call(this);
                var value = undefined;
                var initializer = null;
                if (initializer_value != undefined) {
                    if (typeof initializer_value === "function")
                        initializer = initializer_value;
                    else
                        value = initializer_value;
                }
                if (this._data[name] == undefined)
                    this._data[name] = (_a = initializer === null || initializer === void 0 ? void 0 : initializer.call(this, this)) !== null && _a !== void 0 ? _a : value;
                var self = this;
                Object.defineProperty(this, name, {
                    get: function () {
                        return self._data[name];
                    },
                    set: function (value) {
                        if (self._dataInitialized || self._data[name] == undefined)
                            self._data[name] = value;
                        return value;
                    }
                });
            };
        };
        ItemActor.data = function () {
            var initializer_args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                initializer_args[_i] = arguments[_i];
            }
            if (initializer_args.length == 1)
                return function () {
                    var args = [];
                    for (var _i = 0; _i < arguments.length; _i++) {
                        args[_i] = arguments[_i];
                    }
                    return ItemActor._decorate_data(args[0], args[1], args[2], initializer_args[0]);
                };
            return ItemActor._decorate_data(initializer_args[0], initializer_args[1], initializer_args[2], undefined);
        };
        ItemActor.saverIdMap = {};
        return ItemActor;
    }());
    Gears.ItemActor = ItemActor;
})(Gears || (Gears = {}));
var Gears;
(function (Gears) {
    var Vector3 = Gears.Geometry.Vector3;
    var ItemActorHandler;
    (function (ItemActorHandler) {
        var droppedItemActors = [];
        var itemInHandList = [];
        function onTickEntity(entity) {
            var _a, _b, _c;
            var lastItemStack = itemInHandList[entity.uID];
            var currentItemStack = entity.carriedItem;
            var currentActor = ItemActorHandler.getActorFromItemStack(currentItemStack, function (stack) {
                entity.carriedItem = stack;
                currentItemStack = stack;
            });
            // Game.message(lastItemStack?.toString() + " -> " + currentItemStack.toString())
            if (!currentItemStack.equals(lastItemStack, function (item1, item2) { var _a, _b; return ((_a = item1.extra) === null || _a === void 0 ? void 0 : _a.getString("_actorUid")) == ((_b = item2.extra) === null || _b === void 0 ? void 0 : _b.getString("_actorUid")); })) {
                var lastActor = ItemActorHandler.getActorFromItemStack(lastItemStack);
                if (lastActor)
                    (_a = lastActor["selectionChanged"]) === null || _a === void 0 ? void 0 : _a.call(lastActor, currentItemStack, lastItemStack, entity);
                if (currentActor)
                    (_b = currentActor["selectionChanged"]) === null || _b === void 0 ? void 0 : _b.call(currentActor, currentItemStack, lastItemStack, entity);
            }
            if (currentActor)
                (_c = currentActor["tickInHand"]) === null || _c === void 0 ? void 0 : _c.call(currentActor, currentItemStack, entity);
            itemInHandList[entity.uID] = currentItemStack;
        }
        Callback.addCallback("EntityAdded", function (actorId) {
            var droppedItem = new Gears.DroppedItemActor(actorId);
            var stack = droppedItem.itemStack;
            if (!(stack === null || stack === void 0 ? void 0 : stack.id))
                return;
            var actor = ItemActorHandler.getActorFromItemStack(stack);
            if (!actor || !actor["tickDrop"])
                return;
            var updatable = new Gears.DroppedItemActorUpdatable(actor, droppedItem);
            droppedItemActors[actorId] = updatable;
            Gears.Updatable.addUpdatable(updatable);
        });
        Callback.addCallback("EntityRemoved", function (actorId) {
            var updatable = droppedItemActors[actorId];
            if (updatable) {
                updatable.destroy();
                delete droppedItemActors[actorId];
            }
        });
        Callback.addCallback("tick", function () {
            // TODO: maybe call lazyUpdate from dropped items
            onTickEntity(Gears.Player);
        });
        Callback.addCallback("ItemUseNoTarget", function (item, ticks) {
            var _a;
            var stack = new Gears.ItemStack(item);
            var actor = ItemActorHandler.getActorFromItemStack(stack);
            if (!actor)
                return;
            (_a = actor["itemUseNoTarget"]) === null || _a === void 0 ? void 0 : _a.call(actor, stack, ticks);
        });
        Callback.addCallback("ItemUse", function (coords, item, block) {
            var _a;
            var stack = new Gears.ItemStack(item);
            var actor = ItemActorHandler.getActorFromItemStack(stack);
            if (!actor)
                return;
            var position = new Gears.ItemUseCoordinates(new Vector3(coords), coords.side);
            block = new Gears.Block(block);
            (_a = actor["itemUse"]) === null || _a === void 0 ? void 0 : _a.call(actor, position, stack, block);
        });
    })(ItemActorHandler = Gears.ItemActorHandler || (Gears.ItemActorHandler = {}));
})(Gears || (Gears = {}));
var Gears;
(function (Gears) {
    var ItemActorHandler;
    (function (ItemActorHandler) {
        var UID_PREFIX = "a";
        var SINGLETON_UID_PREFIX = "s";
        var nextActorUid = 1;
        var actorFactoryByItemID = [];
        var actors = [];
        Saver.registerScopeSaver("ItemActors", {
            save: function () {
                return {
                    uid: nextActorUid,
                    actors: actors
                };
            },
            read: function (data) {
                var _a;
                nextActorUid = Math.max(1, data.uid || 1);
                actors = (_a = data.actors) !== null && _a !== void 0 ? _a : [];
                // scope read method called every world load, so we can initialize singletons here
                for (var id in actorFactoryByItemID)
                    getSigletonActorForId(parseInt(id));
            }
        });
        function getSigletonActorForId(id) {
            var factory = actorFactoryByItemID[id];
            if (factory.itemActorClass.isSingleton) {
                var uid = SINGLETON_UID_PREFIX + id;
                return getActorByUid(uid, function (uid) { return factory.instantiate(id, uid); });
            }
            return null;
        }
        ItemActorHandler.getSigletonActorForId = getSigletonActorForId;
        function getActorFactoryByItemID(id) {
            return actorFactoryByItemID[id];
        }
        ItemActorHandler.getActorFactoryByItemID = getActorFactoryByItemID;
        var DefaultItemActorFactory = /** @class */ (function () {
            function DefaultItemActorFactory(itemActorClass) {
                this.itemActorClass = itemActorClass;
            }
            DefaultItemActorFactory.prototype.instantiate = function (id, uid, data) {
                return new this.itemActorClass(id, uid, data);
            };
            return DefaultItemActorFactory;
        }());
        function registerItemActorClass(id, actor) {
            if (!actor["instantiate"])
                actor = new DefaultItemActorFactory(actor); // if class is not ItemActorFactory
            actorFactoryByItemID[id] = actor;
        }
        ItemActorHandler.registerItemActorClass = registerItemActorClass;
        function getNextFreeUid() {
            var uid;
            while (actors[uid = UID_PREFIX + nextActorUid++])
                ;
            return uid;
        }
        ItemActorHandler.getNextFreeUid = getNextFreeUid;
        function getActorByUid(uid, supplier) {
            if (supplier === void 0) { supplier = null; }
            var actor = actors[uid];
            if (actor == null && supplier != null) {
                actor = supplier(uid);
                if (actor != null)
                    actors[uid] = actor;
            }
            return actor;
        }
        ItemActorHandler.getActorByUid = getActorByUid;
        function getActorFromItemStack(stack, modifier) {
            var _a;
            if (modifier === void 0) { modifier = null; }
            var factory = actorFactoryByItemID[stack === null || stack === void 0 ? void 0 : stack.id];
            if (!factory)
                return null;
            var singletonActor = actors[SINGLETON_UID_PREFIX + stack.id];
            if (singletonActor)
                return singletonActor;
            var uid = (_a = stack.extra) === null || _a === void 0 ? void 0 : _a.getString("_actorUID");
            if (uid == null) {
                uid = getNextFreeUid();
                if (modifier == null)
                    return null;
                stack = new Gears.ItemStack(stack.id, stack.count, stack.data, new ItemExtraData(stack.extra));
                stack.extra.putString("_actorUID", uid);
                modifier(stack);
            }
            return getActorByUid(uid, function (uid) { return factory.instantiate(stack.id, uid); });
        }
        ItemActorHandler.getActorFromItemStack = getActorFromItemStack;
    })(ItemActorHandler = Gears.ItemActorHandler || (Gears.ItemActorHandler = {}));
})(Gears || (Gears = {}));
/// <reference path="ItemActor.ts" />
/// <reference path="ItemStack.ts" />
/// <reference path="../blocks/Block.ts" />
var Gears;
(function (Gears) {
    var ItemRegistry;
    (function (ItemRegistry) {
        // #endregion
        // #region Registration
        var items = [];
        var NamedByNumeral = [];
        function register(namedID, actor, descriptor) {
            if (!descriptor) {
                descriptor = actor;
                actor = null;
            }
            var id = IDRegistry.genItemID(namedID);
            var item = {
                ID: id,
                descriptor: descriptor
            };
            if (actor)
                Gears.ItemActorHandler.registerItemActorClass(id, actor);
            NamedByNumeral[id] = namedID;
            items[namedID] = item;
        }
        ItemRegistry.register = register;
        // #endregion
        Callback.addCallback("BlocksDefined", function () {
            var _a, _b, _c;
            for (var namedID in items) {
                var descriptor = items[namedID].descriptor;
                var texture = descriptor.texture;
                if (typeof texture == "string")
                    texture = [texture, 0];
                texture = { name: texture[0], meta: texture[1] };
                var params = {
                    stack: (_a = descriptor.stack) !== null && _a !== void 0 ? _a : 64,
                    isTech: !((_b = descriptor.inCreative) !== null && _b !== void 0 ? _b : true)
                };
                var isArmor = descriptor.armor !== undefined;
                var isFood = descriptor.food !== undefined;
                var isThrowable = descriptor.throwable !== undefined;
                var error = [isArmor, isFood, isThrowable].filter(function (v) { return v; }).length > 1;
                if (error) {
                    throw "Error in item registration: " +
                        (isArmor ? "armor" : "not armor") + ", " +
                        (isFood ? "food" : "not food") + ", " +
                        (isThrowable ? "throwable" : "not throwable");
                }
                if (isArmor) {
                    var armor = descriptor.armor;
                    Item.createArmorItem(namedID, descriptor.name, texture, Object.assign(params, {
                        type: armor.type,
                        armor: armor.protection,
                        durability: armor.durability,
                        texture: armor.skin
                    }));
                }
                else if (isFood) {
                    Item.createFoodItem(namedID, descriptor.name, texture, Object.assign(params, {
                        food: descriptor.food
                    }));
                }
                else if (isThrowable) {
                    Item.createThrowableItem(namedID, descriptor.name, texture, Object.assign(params, {}));
                }
                else {
                    Item.createItem(namedID, descriptor.name, texture, params);
                }
                Item.setCategory(namedID, ["internal", "material", "decoration", "tool", "food"]
                    .indexOf((_c = descriptor.category) !== null && _c !== void 0 ? _c : "decoration"));
                if (descriptor.ehchant)
                    Item.setEnchantType(namedID, descriptor.ehchant.type, descriptor.ehchant.value);
                // TODO: Доделать все параметры предметов
            }
        });
        function getItemDescriptor(id) {
            var _a;
            var namedID = typeof id === "string" ? id : getNamedID(id);
            return (_a = items[namedID]) === null || _a === void 0 ? void 0 : _a.descriptor;
        }
        ItemRegistry.getItemDescriptor = getItemDescriptor;
        function getNamedID(id) {
            var _a;
            return (_a = NamedByNumeral[id]) !== null && _a !== void 0 ? _a : null;
        }
        ItemRegistry.getNamedID = getNamedID;
    })(ItemRegistry = Gears.ItemRegistry || (Gears.ItemRegistry = {}));
})(Gears || (Gears = {}));
var Gears;
(function (Gears) {
    var Vector3 = Gears.Geometry.Vector3;
    var Side;
    (function (Side) {
        Side.DOWN = 0;
        Side.UP = 1;
        Side.NORTH = 2;
        Side.SOUTH = 3;
        Side.WEST = 4;
        Side.EAST = 5;
        function all() {
            return [0, 1, 2, 3, 4, 5, 6];
        }
        Side.all = all;
        function allVectors() {
            return [
                Vector3.DOWN,
                Vector3.UP,
                Vector3.NORTH,
                Vector3.SOUTH,
                Vector3.WEST,
                Vector3.EAST
            ];
        }
        Side.allVectors = allVectors;
        function nearestToVector(vec) {
            var xn = Math.abs(vec.x);
            var yn = Math.abs(vec.y);
            var zn = Math.abs(vec.z);
            if ((xn >= yn) && (xn >= zn)) {
                return vec.x > 0 ? Side.SOUTH : Side.NORTH;
            }
            else if ((yn > xn) && (yn >= zn)) {
                return vec.y > 0 ? Side.UP : Side.DOWN;
            }
            else if ((zn > xn) && (zn > yn)) {
                return vec.z > 0 ? Side.EAST : Side.WEST;
            }
            return Side.SOUTH;
        }
        Side.nearestToVector = nearestToVector;
        function toVector(side) {
            if (!isSide(side))
                throw side + " is not side";
            return allVectors()[side];
        }
        Side.toVector = toVector;
        function invert(side) {
            if (!isSide(side))
                throw side + " is not side";
            return side ^ 1;
        }
        Side.invert = invert;
        function isSide(side) {
            return (side | 0) == side && side > -1 && side < 6;
        }
        Side.isSide = isSide;
        function random(min, max) {
            if (min === void 0) { min = 0; }
            if (max === void 0) { max = 6; }
            return Math.floor(min + Math.random() * (max - min));
        }
        Side.random = random;
        function randomVector(min, max) {
            if (min === void 0) { min = 0; }
            if (max === void 0) { max = 6; }
            return toVector(random(min, max));
        }
        Side.randomVector = randomVector;
    })(Side = Gears.Side || (Gears.Side = {}));
})(Gears || (Gears = {}));
/// <reference path="../geometry/Vector3.ts" />
/// <reference path="../util/Side.ts" />
var Gears;
(function (Gears) {
    var ItemUseCoordinates = /** @class */ (function () {
        function ItemUseCoordinates(position, side) {
            this.position = position;
            this.side = side;
        }
        Object.defineProperty(ItemUseCoordinates.prototype, "relative", {
            get: function () {
                return this.position.plus(Gears.Side.toVector(this.side));
            },
            enumerable: false,
            configurable: true
        });
        return ItemUseCoordinates;
    }());
    Gears.ItemUseCoordinates = ItemUseCoordinates;
})(Gears || (Gears = {}));
var Gears;
(function (Gears) {
    var Vector3 = Gears.Geometry.Vector3;
    var ParticleEmitter = /** @class */ (function () {
        function ParticleEmitter(position) {
            this._emitRelatively = false;
            this._velocity = Vector3.ZERO;
            this.source = new CoreParticles.ParticleEmitter(position.x, position.y, position.z);
        }
        Object.defineProperty(ParticleEmitter.prototype, "emitRelatively", {
            get: function () {
                return this._emitRelatively;
            },
            set: function (value) {
                this.source.setEmitRelatively(value);
                this._emitRelatively = true;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(ParticleEmitter.prototype, "position", {
            get: function () {
                return new Vector3(this.source.getPosition());
            },
            set: function (value) {
                this.source.moveTo(value.x, value.y, value.z);
            },
            enumerable: false,
            configurable: true
        });
        ParticleEmitter.prototype.move = function (vec) {
            this.source.move(vec.x, vec.y, vec.x);
        };
        Object.defineProperty(ParticleEmitter.prototype, "velocity", {
            get: function () {
                return this._velocity;
            },
            set: function (value) {
                this._velocity = value;
                this.source.setVelocity(value.x, value.y, value.z);
            },
            enumerable: false,
            configurable: true
        });
        ParticleEmitter.prototype.stop = function () {
            this._velocity = Vector3.ZERO;
            this.source.stop();
        };
        ParticleEmitter.prototype.emit = function (type, pos, vel, acc) {
            if (vel === void 0) { vel = Vector3.ZERO; }
            if (acc === void 0) { acc = Vector3.ZERO; }
            this.source.emit(type, 0, pos.x, pos.y, pos.z, vel.x, vel.y, vel.z, acc.x, acc.y, acc.z);
        };
        return ParticleEmitter;
    }());
    Gears.ParticleEmitter = ParticleEmitter;
})(Gears || (Gears = {}));
var Gears;
(function (Gears) {
    var ParticleRegistry;
    (function (ParticleRegistry) {
        var Vector3 = Gears.Geometry.Vector3;
        var particles = [];
        function register(name, desc) {
            var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _0, _1, _2, _3, _4, _5, _6;
            var color1 = (_b = (_a = desc.color) === null || _a === void 0 ? void 0 : _a.rgba) !== null && _b !== void 0 ? _b : [1, 1, 1, 1];
            var type = CoreParticles.registerParticleType({
                texture: desc.texture,
                size: typeof desc.size == "number" ? [desc.size, desc.size] : desc.size,
                lifetime: typeof desc.lifetime == "number" ? [desc.lifetime, desc.lifetime] : desc.lifetime,
                textureUV: (_c = desc.textureUV) !== null && _c !== void 0 ? _c : undefined,
                framesX: (_d = desc.framesX) !== null && _d !== void 0 ? _d : undefined,
                framesY: (_e = desc.framesY) !== null && _e !== void 0 ? _e : undefined,
                render: ["additive", "none", "default"].indexOf((_f = desc.blending) !== null && _f !== void 0 ? _f : "additive"),
                color: color1,
                color2: (_h = (_g = desc.color2) === null || _g === void 0 ? void 0 : _g.rgba) !== null && _h !== void 0 ? _h : color1,
                collision: (_j = desc.collision) !== null && _j !== void 0 ? _j : false,
                velocity: ((_k = desc.velocity) !== null && _k !== void 0 ? _k : Vector3.ZERO).toArray(),
                acceleration: ((_l = desc.acceleration) !== null && _l !== void 0 ? _l : Vector3.ZERO).toArray(),
                friction: (_m = desc.friction) !== null && _m !== void 0 ? _m : {},
                runtime: (_o = desc === null || desc === void 0 ? void 0 : desc.runtime) !== null && _o !== void 0 ? _o : false,
                keepVelocityAfterImpact: (_p = desc.keepVelocityAfterImpact) !== null && _p !== void 0 ? _p : false,
                addLifetimeAfterImpact: (_q = desc.reduseLifetimeAfterImpact) !== null && _q !== void 0 ? _q : 0,
                isUsingBlockLight: (_r = desc.usingBlockLight) !== null && _r !== void 0 ? _r : false,
                rebuildDelay: (_s = desc.rebuildDelay) !== null && _s !== void 0 ? _s : 10,
                animators: {
                    size: (_u = (_t = desc.animators) === null || _t === void 0 ? void 0 : _t.size) !== null && _u !== void 0 ? _u : {},
                    alpha: (_w = (_v = desc.animators) === null || _v === void 0 ? void 0 : _v.alpha) !== null && _w !== void 0 ? _w : {},
                    icon: (_y = (_x = desc.animators) === null || _x === void 0 ? void 0 : _x.icon) !== null && _y !== void 0 ? _y : {},
                    color: (_0 = (_z = desc.animators) === null || _z === void 0 ? void 0 : _z.color) !== null && _0 !== void 0 ? _0 : {}
                },
                emitters: {
                    idle: (_2 = (_1 = desc.emitters) === null || _1 === void 0 ? void 0 : _1.idle) !== null && _2 !== void 0 ? _2 : {},
                    impact: (_4 = (_3 = desc.emitters) === null || _3 === void 0 ? void 0 : _3.impact) !== null && _4 !== void 0 ? _4 : {},
                    death: (_6 = (_5 = desc.emitters) === null || _5 === void 0 ? void 0 : _5.death) !== null && _6 !== void 0 ? _6 : {}
                }
            });
            particles[name] = { type: type, descriptor: desc };
            return type;
        }
        ParticleRegistry.register = register;
        function getType(name) {
            var _a;
            return (_a = particles[name].type) !== null && _a !== void 0 ? _a : 7;
        }
        ParticleRegistry.getType = getType;
        function getDescriptor(name) {
            var _a;
            return (_a = particles[name].descriptor) !== null && _a !== void 0 ? _a : null;
        }
        ParticleRegistry.getDescriptor = getDescriptor;
    })(ParticleRegistry = Gears.ParticleRegistry || (Gears.ParticleRegistry = {}));
})(Gears || (Gears = {}));
var Gears;
(function (Gears) {
    var Particles;
    (function (Particles) {
        var Vector3 = Gears.Geometry.Vector3;
        // @ts-ignore
        var globalEmitter;
        function addParticle(type, pos, vel, acc) {
            if (vel === void 0) { vel = Vector3.ZERO; }
            if (acc === void 0) { acc = Vector3.ZERO; }
            globalEmitter === null || globalEmitter === void 0 ? void 0 : globalEmitter.emit(type, 0, pos.x, pos.y, pos.z, vel.x, vel.y, vel.z, acc.x, acc.y, acc.z);
        }
        Particles.addParticle = addParticle;
        Callback.addCallback("LevelLoaded", function () { return globalEmitter = new CoreParticles.ParticleEmitter(0, 0, 0); });
        Callback.addCallback("LevelLeft", function () { return globalEmitter = null; });
    })(Particles = Gears.Particles || (Gears.Particles = {}));
})(Gears || (Gears = {}));
/// <reference path="../entity/MobActor.ts"/>
var Gears;
(function (Gears) {
    var PlayerActor = /** @class */ (function (_super) {
        __extends(PlayerActor, _super);
        function PlayerActor() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return PlayerActor;
    }(Gears.MobActor));
    Gears.PlayerActor = PlayerActor;
})(Gears || (Gears = {}));
/// <reference path="PlayerActor.ts" />
var Gears;
(function (Gears) {
    var _player;
    Object.defineProperty(Gears, "Player", {
        get: function () { return (_player === null || _player === void 0 ? void 0 : _player.exists) ? _player : (_player = new Gears.PlayerActor(CorePlayer.get())); },
        configurable: false
    });
})(Gears || (Gears = {}));
var Gears;
(function (Gears) {
    var Updatable;
    (function (Updatable) {
        function addUpdatable(source) {
            source["update"] = source.update;
            source["lazyUpdate"] = source.lazyUpdate;
            CoreUpdatable.addUpdatable(source);
        }
        Updatable.addUpdatable = addUpdatable;
        function addAnimator(source) {
            source["update"] = source.update;
            // @ts-ignore
            CoreUpdatable.addAnimator(source);
        }
        Updatable.addAnimator = addAnimator;
        function removeUpdatable(source) {
            source.remove = true;
        }
        Updatable.removeUpdatable = removeUpdatable;
        function getSyncTime() {
            return CoreUpdatable.getSyncTime();
        }
        Updatable.getSyncTime = getSyncTime;
        function getAll() {
            // @ts-ignore
            return CoreUpdatable.getAll();
        }
        Updatable.getAll = getAll;
        function getAllWhere(predicate) {
            return Updatable.getAll().filter(function (e) { return predicate(e); });
        }
        Updatable.getAllWhere = getAllWhere;
    })(Updatable = Gears.Updatable || (Gears.Updatable = {}));
})(Gears || (Gears = {}));
var Gears;
(function (Gears) {
    var Debug;
    (function (Debug) {
        function getMethodName() {
            return /at (\S+)/.exec(new Error().stack.split('\n')[2])[1];
        }
        Debug.getMethodName = getMethodName;
    })(Debug = Gears.Debug || (Gears.Debug = {}));
})(Gears || (Gears = {}));
var Gears;
(function (Gears) {
    var World;
    (function (World) {
        var Biome = /** @class */ (function () {
            function Biome(id, name, temperature) {
                this.id = id;
                this.name = name;
                this.temperature = temperature;
                Biome.biomeByID[id] = this;
                Biome.biomeByName[name] = this;
            }
            Biome.byID = function (id) {
                var _a;
                return (_a = Biome.biomeByID[id]) !== null && _a !== void 0 ? _a : null;
            };
            Biome.byName = function (name) {
                var _a;
                return (_a = Biome.biomeByName[name]) !== null && _a !== void 0 ? _a : null;
            };
            Biome.biomeByID = [];
            Biome.biomeByName = [];
            Biome.PLAINS = new Biome(1, "Plains", 0.8);
            Biome.DESERT = new Biome(2, "Desert", 2);
            Biome.EXTREME_HILLS = new Biome(3, "Mountains", 0.2);
            Biome.FOREST = new Biome(4, "Forest", 0.7);
            Biome.TAIGA = new Biome(5, "Taiga", 0.25);
            Biome.SWAMPLAND = new Biome(6, "Swamp", 0.8);
            Biome.RIVER = new Biome(7, "River", 0.5);
            Biome.HELL = new Biome(8, "Nether Wastes", 2);
            Biome.THE_END = new Biome(9, "The End", 0.5);
            Biome.FROZEN_OCEAN = new Biome(10, "Frozen Ocean", 0);
            Biome.FROZEN_RIVER = new Biome(11, "Frozen River", 0);
            Biome.ICE_PLAINS = new Biome(12, "Snowy Tundra", 0);
            Biome.ICE_MOUNTAINS = new Biome(13, "Snowy Mountains", -0.5);
            Biome.MUSHROOM_ISLAND = new Biome(14, "Mushroom Fields", 0.9);
            Biome.MUSHROOM_ISLAND_SHORE = new Biome(15, "Mushroom Field Shore", 0.9);
            Biome.BEACH = new Biome(16, "Beach", 0.8);
            Biome.DESERT_HILLS = new Biome(17, "Desert Hills", 2);
            Biome.FOREST_HILLS = new Biome(18, "Wooded Hills", 0.7);
            Biome.TAIGA_HILLS = new Biome(19, "Taiga Hills", 0.3);
            Biome.EXTREME_HILLS_EDGE = new Biome(20, "Mountain Edge", 0.2);
            Biome.JUNGLE = new Biome(21, "Jungle", 0.95);
            Biome.JUNGLE_HILLS = new Biome(22, "Jungle Hills", 0.95);
            Biome.JUNGLE_EDGE = new Biome(23, "Jungle Edge", 0.95);
            Biome.DEEP_OCEAN = new Biome(24, "Deep Ocean", 0.5);
            Biome.STONE_BEACH = new Biome(25, "Stone Shore", 0.2);
            Biome.COLD_BEACH = new Biome(26, "Snowy Beach", 0.05);
            Biome.BIRCH_FOREST = new Biome(27, "Birch Forest", 0.6);
            Biome.BIRCH_FOREST_HILLS = new Biome(28, "Birch Forest Hills", 0.6);
            Biome.ROOFED_FOREST = new Biome(29, "Dark Forest", 0.7);
            Biome.COLD_TAIGA = new Biome(30, "Snowy Taiga", -0.5);
            Biome.COLD_TAIGA_HILLS = new Biome(31, "Snowy Taiga Hills", -0.5);
            Biome.MEGA_TAIGA = new Biome(32, "Giant Tree Taiga", 0.3);
            Biome.MEGA_TAIGA_HILLS = new Biome(33, "Giant Tree Taiga Hills", 0.3);
            Biome.EXTREME_HILLS_PLUS_TREES = new Biome(34, "Wooded Mountains", 0.2);
            Biome.SAVANNA = new Biome(35, "Savanna", 1.2);
            Biome.SAVANNA_PLATEAU = new Biome(36, "Savanna Plateau", 2);
            Biome.MESA = new Biome(37, "Badlands", 2);
            Biome.MESA_PLATEAU_STONE = new Biome(38, "Wooded Badlands Plateau", 2);
            Biome.MESA_PLATEAU = new Biome(39, "Badlands Plateau", 1);
            Biome.OCEAN = new Biome(42, "Ocean", 0.5);
            Biome.LEGACY_FROZEN_OCEAN = new Biome(43, "Legacy Frozen Ocean", 0.5);
            Biome.WARM_OCEAN = new Biome(44, "Warm Ocean", 0.5);
            Biome.LUKEWARM_OCEAN = new Biome(45, "Lukewarm Ocean", 0.5);
            Biome.COLD_OCEAN = new Biome(46, "Cold Ocean", 0.5);
            Biome.DEEP_WARM_OCEAN = new Biome(47, "Deep Warm Ocean", 0.5);
            Biome.DEEP_LUKEWARM_OCEAN = new Biome(48, "Deep Lukewarm Ocean", 0.5);
            Biome.DEEP_COLD_OCEAN = new Biome(49, "Deep Cold Ocean", 0.5);
            Biome.DEEP_FROZEN_OCEAN = new Biome(50, "Deep Frozen Ocean", 0.5);
            Biome.SUNFLOWER_PLAINS = new Biome(129, "Sunflower Plains", 0.8);
            Biome.DESERT_MUTATED = new Biome(130, "Desert Lakes", 2);
            Biome.EXTREME_HILLS_MUTATED = new Biome(131, "Gravelly Mountains", 0.2);
            Biome.FLOWER_FOREST = new Biome(132, "Flower Forest", 0.7);
            Biome.TAIGA_MUTATED = new Biome(133, "Taiga Mountains", 0.25);
            Biome.SWAMPLAND_MUTATED = new Biome(134, "Swamp Hills", 0.8);
            Biome.ICE_PLAINS_SPIKES = new Biome(140, "Ice Spikes", 0);
            Biome.JUNGLE_MUTATED = new Biome(149, "Modified Jungle", 0.95);
            Biome.JUNGLE_EDGE_MUTATED = new Biome(151, "Modified Jungle Edge", 0.95);
            Biome.BIRCH_FOREST_MUTATED = new Biome(155, "Tall Birch Forest", 0.7);
            Biome.BIRCH_FOREST_HILLS_MUTATED = new Biome(156, "Tall Birch Hills", 0.7);
            Biome.ROOFED_FOREST_MUTATED = new Biome(157, "Dark Forest Hills", 0.7);
            Biome.COLD_TAIGA_MUTATED = new Biome(158, "Snowy Taiga Mountains", -0.5);
            Biome.REDWOOD_TAIGA_MUTATED = new Biome(160, "Giant Spruce Taiga", 0.25);
            Biome.REDWOOD_TAIGA_HILLS_MUTATED = new Biome(161, "Giant Spruce Taiga Hills", 0.25);
            Biome.EXTREME_HILLS_PLUS_TREES_MUTATED = new Biome(162, "Gravelly Mountains+", 0.2);
            Biome.SAVANNA_MUTATED = new Biome(163, "Shattered Savanna", 1.1);
            Biome.SAVANNA_PLATEAU_MUTATED = new Biome(164, "Shattered Savanna Plateau", 2);
            Biome.MESA_BRYCE = new Biome(165, "Eroded Badlands", 2);
            Biome.MESA_PLATEAU_STONE_MUTATED = new Biome(166, "Modified Wooded Badlands Plateau", 2);
            Biome.MESA_PLATEAU_MUTATED = new Biome(167, "Modified Badlands Plateau", 1);
            Biome.BAMBOO_JUNGLE = new Biome(168, "Bamboo Jungle", 0.95);
            Biome.BAMBOO_JUNGLE_HILLS = new Biome(169, "Bamboo Jungle Hills", 0.95);
            Biome.SOUL_SAND_VALLEY = new Biome(178, "Soul Sand Valley", 2);
            Biome.CRIMSON_FOREST = new Biome(179, "Crimson Forest", 2);
            Biome.WARPED_FOREST = new Biome(180, "Warped Forest", 2);
            Biome.BASALT_DELTAS = new Biome(181, "Basalt Deltas", 2);
            return Biome;
        }());
        World.Biome = Biome;
    })(World = Gears.World || (Gears.World = {}));
})(Gears || (Gears = {}));
var Gears;
(function (Gears) {
    var Vector3 = Gears.Geometry.Vector3;
    var Vector2 = Gears.Geometry.Vector2;
    var Chunk = /** @class */ (function () {
        function Chunk(chunkX, chunkZ, dimension) {
            if (dimension === void 0) { dimension = Native.Dimension.NORMAL; }
            this._chunkX = Math.floor(chunkX);
            this._chunkZ = Math.floor(chunkZ);
            this._dimension = dimension;
        }
        Object.defineProperty(Chunk.prototype, "real", {
            get: function () { return new Vector3(this._chunkX * 16, 0, this._chunkZ * 16); },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Chunk.prototype, "x", {
            get: function () { return this._chunkX; },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Chunk.prototype, "z", {
            get: function () { return this._chunkZ; },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Chunk.prototype, "dimension", {
            get: function () { return this._dimension; },
            enumerable: false,
            configurable: true
        });
        Chunk.prototype.plus = function (x, z) { return new Chunk(this.x + x, this.z + z); };
        Chunk.prototype.distanceTo = function (another) {
            return new Vector2(this.x, this.z).distanceTo(new Vector2(another.x, another.z));
        };
        Chunk.prototype.toString = function () { return this.x + ":" + this.z + ":" + this.dimension; };
        Chunk.fromString = function (str) {
            var items = str.match(this.chunkExp).map(function (e) { return parseInt(e); });
            return new Chunk(items[0], items[1], items[2]);
        };
        Chunk.fromPosition = function (position, dimension) {
            position = position.divide(16).floor();
            return new Chunk(position.x, position.z, dimension !== null && dimension !== void 0 ? dimension : 0);
        };
        Chunk.prototype.equals = function (chunk) {
            return chunk != null && this.x == chunk.x && this.z == chunk.z && this.dimension == chunk.dimension;
        };
        Chunk.chunkExp = /^([0-9\-]+):([0-9\-]+):([0-9\-]+)$/.compile();
        return Chunk;
    }());
    Gears.Chunk = Chunk;
})(Gears || (Gears = {}));
var Gears;
(function (Gears) {
    var World;
    (function (World) {
        var CustomBiome = /** @class */ (function (_super) {
            __extends(CustomBiome, _super);
            function CustomBiome(name, temperature) {
                var _this = this;
                var biome = new CoreCustomBiome(name);
                _this = _super.call(this, biome.id, name, temperature) || this;
                _this._biome = biome;
                _this._biome.setTemperatureAndDownfall(temperature, 0);
                return _this;
            }
            Object.defineProperty(CustomBiome.prototype, "grassColor", {
                set: function (color) {
                    var r = color.r, g = color.g, b = color.b;
                    this._biome.setGrassColor(r, g, b);
                },
                enumerable: false,
                configurable: true
            });
            Object.defineProperty(CustomBiome.prototype, "skyColor", {
                set: function (color) {
                    var r = color.r, g = color.g, b = color.b;
                    this._biome.setSkyColor(r, g, b);
                },
                enumerable: false,
                configurable: true
            });
            Object.defineProperty(CustomBiome.prototype, "foliageColor", {
                set: function (color) {
                    var r = color.r, g = color.g, b = color.b;
                    this._biome.setFoliageColor(r, g, b);
                },
                enumerable: false,
                configurable: true
            });
            Object.defineProperty(CustomBiome.prototype, "downfall", {
                set: function (value) {
                    this._biome.setTemperatureAndDownfall(this.temperature, value);
                },
                enumerable: false,
                configurable: true
            });
            Object.defineProperty(CustomBiome.prototype, "coverBlock", {
                set: function (block) {
                    this._biome.setCoverBlock(block.id, block.data);
                },
                enumerable: false,
                configurable: true
            });
            Object.defineProperty(CustomBiome.prototype, "surfaceBlock", {
                set: function (block) {
                    this._biome.setSurfaceBlock(block.id, block.data);
                },
                enumerable: false,
                configurable: true
            });
            Object.defineProperty(CustomBiome.prototype, "fillingBlock", {
                set: function (block) {
                    this._biome.setFillingBlock(block.id, block.data);
                },
                enumerable: false,
                configurable: true
            });
            Object.defineProperty(CustomBiome.prototype, "additionalBlock", {
                set: function (block) {
                    this._biome.setAdditionalBlock(block.id, block.data);
                },
                enumerable: false,
                configurable: true
            });
            Object.defineProperty(CustomBiome.prototype, "surfaceParameter", {
                set: function (value) {
                    this._biome.setSurfaceParam(value);
                },
                enumerable: false,
                configurable: true
            });
            return CustomBiome;
        }(World.Biome));
        World.CustomBiome = CustomBiome;
    })(World = Gears.World || (Gears.World = {}));
})(Gears || (Gears = {}));
var Gears;
(function (Gears) {
    var World;
    (function (World) {
        function setBlock(position, block, data) {
            var _a, _b, _c, _d, _e;
            if (data === void 0) { data = 0; }
            var id = (_c = (_b = (_a = block) === null || _a === void 0 ? void 0 : _a.id) !== null && _b !== void 0 ? _b : BlockID[block]) !== null && _c !== void 0 ? _c : block;
            var _data = (_e = (_d = block) === null || _d === void 0 ? void 0 : _d.data) !== null && _e !== void 0 ? _e : data;
            CoreWorld.setBlock(position.x | 0, position.y | 0, position.z | 0, id, _data);
        }
        World.setBlock = setBlock;
        function getBlock(position) {
            return new Gears.BlockInWorld(position.floor());
        }
        World.getBlock = getBlock;
        function destroyBlock(position, drop) {
            if (drop === void 0) { drop = false; }
            CoreWorld.destroyBlock(position.x, position.y, position.z, drop);
        }
        World.destroyBlock = destroyBlock;
        function getBiomeAt(position) {
            return getBiome(position.x, position.z);
        }
        World.getBiomeAt = getBiomeAt;
        function getBiome(x, z) {
            return World.Biome.byID(CoreWorld.getBiome(x, z));
        }
        World.getBiome = getBiome;
        function getBiomeMapAt(position) {
            return getBiomeMap(position.x, position.z);
        }
        World.getBiomeMapAt = getBiomeMapAt;
        function getBiomeMap(x, z) {
            return World.Biome.byID(CoreWorld.getBiomeMap(x, z));
        }
        World.getBiomeMap = getBiomeMap;
    })(World = Gears.World || (Gears.World = {}));
})(Gears || (Gears = {}));
//@ts-ignore
EXPORT("Gears", Gears);
