var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
IMPORT("EnergyNet");
IMPORT("ChargeItem");
IMPORT("flags");
IMPORT("StorageInterface");
IMPORT("TileRender");
IMPORT("BlockEngine");
var startTime = Debug.sysTime();
var J = EnergyTypeRegistry.assureEnergyType("J", 0.1);
var EU = EnergyTypeRegistry.assureEnergyType("Eu", 1);
var RF = EnergyTypeRegistry.assureEnergyType("RF", 0.25);
var Color = android.graphics.Color;
var JString = java.lang.String;
var Integer = java.lang.Integer;
var Random = java.util.Random;
var File = java.io.File;
function jToRF(j) {
    return j / 2.5;
}
// const TILE_RENDERER_CONNECTION_GROUP = "ic-wire";
// const TILE_RENDERER_CONNECTION_GROUP_FUEL = "ic-wire_fuel";
// const FLUID_PIPE_CONNECTION_MACHINE = "bc-fluid";
// const PIPE_BLOCK_WIDTH = 0.25;
// const FLUID_PIPE_CONNECTION_ANY = "bc-fluid-pipe-any";
// const FLUID_PIPE_CONNECTION_STONE = "bc-fluid-pipe-stone";
// const FLUID_PIPE_CONNECTION_COBBLE = "bc-fluid-pipe-cobble";
// const FLUID_PIPE_CONNECTION_SANDSTONE = "bc-fluid-pipe-sandstone";
// const BLOCK_TYPE_LIQUID_PIPE = Block.createSpecialType({
// 	base: 20,
// 	renderlayer: 3
// }, "bc-liquid-pipe");
var CABLE_BLOCK_WIDTH = 0.25;
var GUI_BAR_STANDARD_SCALE = 3.2;
var GUI_SCALE = 3.2;
// RECIPE VIEWER SUPPORT
var RV;
var TankMode;
(function (TankMode) {
    TankMode[TankMode["IDLE"] = 0] = "IDLE";
    TankMode[TankMode["DUMPING_EXCESS"] = 1] = "DUMPING_EXCESS";
    TankMode[TankMode["DUMPING"] = 2] = "DUMPING";
})(TankMode || (TankMode = {}));
var MathHelper;
(function (MathHelper) {
    function randomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    MathHelper.randomInt = randomInt;
    function clamp(value, minValue, maxValue) {
        return Math.min(Math.max(value, minValue), maxValue);
    }
    MathHelper.clamp = clamp;
    function degreeToRadian(degree) {
        return (degree * Math.PI) / 180;
    }
    MathHelper.degreeToRadian = degreeToRadian;
    MathHelper.EPSILON = 9.99999997E-7;
})(MathHelper || (MathHelper = {}));
var randomInt = MathHelper.randomInt;
/// <reference path="IWrench.ts" />
var Machine;
(function (Machine) {
    var _a;
    _a = BlockEngine.Decorators, Machine.ClientSide = _a.ClientSide, Machine.NetworkEvent = _a.NetworkEvent, Machine.ContainerEvent = _a.ContainerEvent;
    var MachineBase = /** @class */ (function (_super) {
        __extends(MachineBase, _super);
        function MachineBase() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        //configData = {};
        MachineBase.prototype.onInit = function () {
            this.networkData.putInt("blockId", this.blockID);
            this.networkData.putInt("facing", this.getFacing());
            this.networkData.sendChanges();
            this.setupContainer();
            delete this.liquidStorage;
        };
        MachineBase.prototype.setupContainer = function () { };
        MachineBase.prototype.addLiquidTank = function (name, limit, liquids) {
            var tank = new BlockEngine.LiquidTank(this, name, limit, liquids);
            var liquid = this.liquidStorage.getLiquidStored();
            if (liquid) {
                var amount = this.liquidStorage.getLiquid(liquid, tank.getLimit() / 1000);
                tank.addLiquid(liquid, Math.round(amount * 1000));
            }
            return tank;
        };
        MachineBase.prototype.addGasTank = function (name, limit, gass) {
            var tank = new BlockEngine.GasTank(this, name, limit, gass);
            var gas = this.liquidStorage.getLiquidStored();
            if (gas.includes("_gas")) {
                var amount = this.liquidStorage.getLiquid(gas, tank.getLimit() / 1000);
                tank.addGas(gas, Math.round(amount * 1000));
            }
            return tank;
        };
        MachineBase.prototype.canRotate = function (side) {
            return false;
        };
        MachineBase.prototype.onItemUse = function (coords, item, player) {
            var side = coords.side;
            if (Entity.getSneaking(player)) {
                side ^= 1;
            }
            if (this.canRotate(side) && MekTool.isUseableWrench(item, 1)) {
                MekTool.rotateMachine(this, side, item, player);
                return true;
            }
            return false;
        };
        MachineBase.prototype.setActive = function (isActive) {
            if (this.networkData.getBoolean("active") !== isActive) {
                this.networkData.putBoolean("active", isActive);
                this.networkData.sendChanges();
            }
        };
        MachineBase.prototype.isActive = function () {
            return this.networkData.getBoolean("active");
        };
        MachineBase.prototype.renderModel = function () {
            if (this.networkData.getBoolean("active")) {
                var blockId = Network.serverToLocalId(this.networkData.getInt("blockId"));
                var facing = this.networkData.getInt("facing");
                TileRenderer.mapAtCoords(this.x, this.y, this.z, blockId, facing);
            }
            else {
                BlockRenderer.unmapAtCoords(this.x, this.y, this.z);
            }
        };
        MachineBase.prototype.clientLoad = function () {
            var _this = this;
            this.renderModel();
            this.networkData.addOnDataChangedListener(function (data, isExternal) {
                _this.renderModel();
            });
        };
        MachineBase.prototype.clientUnload = function () {
            BlockRenderer.unmapAtCoords(this.x, this.y, this.z);
        };
        MachineBase.prototype.getFacing = function () {
            return this.blockSource.getBlockData(this.x, this.y, this.z);
        };
        MachineBase.prototype.setFacing = function (side) {
            if (this.getFacing() != side) {
                this.blockSource.setBlock(this.x, this.y, this.z, this.blockID, side);
                this.networkData.putInt("blockData", side);
                this.networkData.sendChanges();
                return true;
            }
            return false;
        };
        MachineBase.prototype.decreaseSlot = function (slot, count) {
            slot.count -= count;
            slot.markDirty();
            slot.validate();
        };
        MachineBase.prototype.destroyBlock = function (coords, player) {
            var _region = BlockSource.getDefaultForActor(player);
            var extra = new ItemExtraData();
            extra.putSerializable("container", this.container);
            var slots = this.container.slots;
            for (var i in slots)
                this.container.clearSlot(i);
            _region.spawnDroppedItem(coords.x, coords.y, coords.z, this.blockID, 1, 0, extra);
        };
        MachineBase.prototype.getDefaultDrop = function () {
            var _a;
            return (_a = this.defaultDrop) !== null && _a !== void 0 ? _a : this.blockID;
        };
        MachineBase.prototype.adjustDrop = function (item) {
            return item;
        };
        MachineBase.prototype.destroyWithWrench = function (coords, player) {
            var _region = BlockSource.getDefaultForActor(player);
            var extra = new ItemExtraData();
            extra.putSerializable("container", this.container);
            var slots = this.container.slots;
            for (var i in slots)
                this.container.clearSlot(i);
            _region.spawnDroppedItem(coords.x, coords.y, coords.z, this.blockID, 1, 0, extra);
        };
        __decorate([
            Machine.ClientSide
        ], MachineBase.prototype, "renderModel", null);
        return MachineBase;
    }(TileEntityBase));
    Machine.MachineBase = MachineBase;
})(Machine || (Machine = {}));
/// <reference path="Base.ts" /> 
var Machine;
(function (Machine) {
    var ProgressingMachine = /** @class */ (function (_super) {
        __extends(ProgressingMachine, _super);
        function ProgressingMachine() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.defaultValues = {
                energy: 0
            };
            return _this;
        }
        //tier: number;
        ProgressingMachine.prototype.getTier = function () {
            return 1;
        };
        ProgressingMachine.prototype.getEnergyStorage = function () {
            return 0;
        };
        ProgressingMachine.prototype.chargeSlot = function (slotName) {
            this.data.energy -= ChargeItemRegistry.addEnergyToSlot(this.container.getSlot(slotName), "Rf", this.data.energy, this.getTier());
        };
        ProgressingMachine.prototype.dischargeSlot = function (slotName) {
            var amount = this.getEnergyStorage() - this.data.energy;
            this.data.energy += ChargeItemRegistry.getEnergyFromSlot(this.container.getSlot(slotName), "Rf", amount, this.getTier());
        };
        ProgressingMachine.prototype.onItemUse = function (coords, item, player) {
            return _super.prototype.onItemUse.call(this, coords, item, player);
        };
        ProgressingMachine.prototype.energyTick = function (type, src) { };
        ProgressingMachine.prototype.energyReceive = function (type, amount, voltage) {
            var maxVoltage = this.basePower || 20;
            if (voltage > maxVoltage) {
                amount = Math.min(amount, maxVoltage);
            }
            var add = Math.min(amount, this.getEnergyStorage() - this.data.energy);
            this.data.energy += add;
            return add;
        };
        ProgressingMachine.prototype.canReceiveEnergy = function (side, type) {
            return true;
        };
        ProgressingMachine.prototype.canExtractEnergy = function (side, type) {
            return false;
        };
        ProgressingMachine.prototype.rebuildGrid = function () {
            this.energyNode.resetConnections();
            EnergyGridBuilder.buildGridForTile(this);
        };
        ProgressingMachine.prototype.getRelativeEnergy = function () {
            return this.data.energy / this.getEnergyStorage() || 0;
        };
        ProgressingMachine.prototype.isConductor = function (type) {
            return false;
        };
        ProgressingMachine.prototype.destroyBlock = function (coords, player) {
            var _region = BlockSource.getDefaultForActor(player);
            var extra = new ItemExtraData();
            if (this.data.energy > 0) {
                extra.putInt("energy", this.data.energy);
            }
            extra.putSerializable("container", this.container);
            var slots = this.container.slots;
            for (var i in slots)
                this.container.clearSlot(i);
            _region.spawnDroppedItem(coords.x, coords.y, coords.z, this.blockID, 1, 0, extra);
        };
        ProgressingMachine.prototype.destroyWithWrench = function (coords, player) {
            var _region = BlockSource.getDefaultForActor(player);
            var extra = new ItemExtraData();
            if (this.data.energy > 0) {
                extra.putInt("energy", this.data.energy);
            }
            extra.putSerializable("container", this.container);
            var slots = this.container.slots;
            for (var i in slots)
                this.container.clearSlot(i);
            _region.spawnDroppedItem(coords.x, coords.y, coords.z, this.blockID, 1, 0, extra);
        };
        ProgressingMachine.prototype.setGasScale = function (container, window, content, data) {
            var gui = container.getUiAdapter();
            if (gui) {
                var size = gui.getBinding(data.scale, "element_rect");
                if (!size)
                    return;
                var texture = LiquidRegistry.getLiquidUITexture(data.gas, size.width(), size.height());
                gui.setBinding(data.scale, "texture", texture);
                gui.setBinding(data.scale, "value", data.amount);
            }
        };
        __decorate([
            Machine.ContainerEvent(Side.Client)
        ], ProgressingMachine.prototype, "setGasScale", null);
        return ProgressingMachine;
    }(Machine.MachineBase));
    Machine.ProgressingMachine = ProgressingMachine;
})(Machine || (Machine = {}));
/// <reference path="ProgressingMachine.ts" /> 
var Machine;
(function (Machine) {
    var ConfigMachine = /** @class */ (function (_super) {
        __extends(ConfigMachine, _super);
        function ConfigMachine() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return ConfigMachine;
    }(Machine.ProgressingMachine));
    Machine.ConfigMachine = ConfigMachine;
})(Machine || (Machine = {}));
var Machine;
(function (Machine) {
    var BasicHeatCapacitor = /** @class */ (function () {
        function BasicHeatCapacitor(heatCapacity, inverseConductionCoefficient, inverseInsulationCoefficient, ambientTempSupplier) {
            // set to ambient * heat capacity by default
            this.storedHeat = -1;
            this.heatCapacity = heatCapacity;
            this.inverseConductionCoefficient = inverseConductionCoefficient;
            this.inverseInsulationCoefficient = inverseInsulationCoefficient;
            this.ambientTempSupplier = ambientTempSupplier;
        }
        BasicHeatCapacitor.prototype.initStoredHeat = function () {
            if (this.storedHeat == -1) {
                //If the stored heat hasn't been initialized yet, update the stored heat based on initial capacity
                this.storedHeat = this.heatCapacity * this.getAmbientTemperature();
            }
        };
        BasicHeatCapacitor.prototype.getAmbientTemperature = function () {
            return this.ambientTempSupplier == null ? 300 : this.ambientTempSupplier;
        };
        BasicHeatCapacitor.prototype.getTemperature = function () {
            return this.getHeat() / this.getHeatCapacity();
        };
        BasicHeatCapacitor.prototype.getInverseConduction = function () {
            return this.inverseConductionCoefficient;
        };
        BasicHeatCapacitor.prototype.getInverseInsulation = function () {
            return this.inverseInsulationCoefficient;
        };
        BasicHeatCapacitor.prototype.getHeatCapacity = function () {
            return this.heatCapacity;
        };
        BasicHeatCapacitor.prototype.handleHeat = function (transfer) {
            this.heatToHandle += transfer;
        };
        BasicHeatCapacitor.prototype.getHeat = function () {
            this.initStoredHeat();
            return this.storedHeat;
        };
        BasicHeatCapacitor.prototype.setHeat = function (heat) {
            if (this.getHeat() != heat) {
                this.storedHeat = heat;
            }
        };
        BasicHeatCapacitor.prototype.setHeatCapacity = function (newCapacity, updateHeat) {
            if (updateHeat && this.storedHeat != -1) {
                this.setHeat(this.getHeat() + (newCapacity - this.getHeatCapacity()) * this.getAmbientTemperature());
            }
            this.heatCapacity = newCapacity;
        };
        BasicHeatCapacitor.prototype.setHeatCapacityFromPacket = function (newCapacity) {
            this.heatCapacity = newCapacity;
        };
        BasicHeatCapacitor.prototype.update = function () {
            if (this.heatToHandle != 0 && Math.abs(this.heatToHandle) > MathHelper.EPSILON) {
                this.initStoredHeat();
                this.storedHeat += this.heatToHandle;
                // reset our handling heat
                this.heatToHandle = 0;
            }
        };
        return BasicHeatCapacitor;
    }());
    Machine.BasicHeatCapacitor = BasicHeatCapacitor;
})(Machine || (Machine = {}));
var InfuserRecipe;
(function (InfuserRecipe) {
    InfuserRecipe.recipes = {};
    function add(recipe) {
        var RecipeArray = InfuserRecipe.recipes[recipe.type] || [];
        RecipeArray.push(recipe);
        InfuserRecipe.recipes[recipe.type] = RecipeArray;
    }
    InfuserRecipe.add = add;
    function get(type, input) {
        var recipe_a = InfuserRecipe.recipes[type];
        recipe_a.forEach(function (recipe) {
            if (recipe.input.id == input.id && recipe.input.data == input.data && input.count >= recipe.input.count) {
                return recipe;
            }
            ;
        });
        return null;
    }
    InfuserRecipe.get = get;
    function isValidInput(item, type) {
        if (type)
            return !!get(type, item);
        else {
            for (var index in InfuserRecipe.recipes) {
                var recipe_a = InfuserRecipe.recipes[index];
                recipe_a.forEach(function (recipe) {
                    if (recipe.input.id == item.id && recipe.input.data == item.data) {
                        return recipe;
                    }
                    ;
                });
            }
        }
    }
    InfuserRecipe.isValidInput = isValidInput;
})(InfuserRecipe || (InfuserRecipe = {}));
var EnrichRecipe;
(function (EnrichRecipe) {
    EnrichRecipe.recipes = [];
    function add(recipe) {
        if (!recipe.input)
            return;
        EnrichRecipe.recipes.push(recipe);
        return;
    }
    EnrichRecipe.add = add;
    function get(input) {
        for (var _i = 0, recipes_1 = EnrichRecipe.recipes; _i < recipes_1.length; _i++) {
            var recipe = recipes_1[_i];
            if (recipe.input == input) {
                return recipe;
            }
        }
        return null;
    }
    EnrichRecipe.get = get;
    function isValidInput(item) {
        return !!get(item);
    }
    EnrichRecipe.isValidInput = isValidInput;
})(EnrichRecipe || (EnrichRecipe = {}));
var CrusherRecipe;
(function (CrusherRecipe) {
    CrusherRecipe.recipes = [];
    function add(recipe) {
        if (!recipe.input)
            return;
        CrusherRecipe.recipes.push(recipe);
        return;
    }
    CrusherRecipe.add = add;
    function get(input) {
        for (var _i = 0, recipes_2 = CrusherRecipe.recipes; _i < recipes_2.length; _i++) {
            var recipe = recipes_2[_i];
            if (recipe.input == input) {
                return recipe;
            }
        }
        return null;
    }
    CrusherRecipe.get = get;
    function isValidInput(item) {
        return !!get(item);
    }
    CrusherRecipe.isValidInput = isValidInput;
})(CrusherRecipe || (CrusherRecipe = {}));
var PRCRecipe;
(function (PRCRecipe) {
    PRCRecipe.recipes = [];
    function add(recipe) {
        if (!recipe.input)
            return;
        PRCRecipe.recipes.push(recipe);
        return;
    }
    PRCRecipe.add = add;
    function get(input) {
        for (var _i = 0, recipes_3 = PRCRecipe.recipes; _i < recipes_3.length; _i++) {
            var recipe = recipes_3[_i];
            if (recipe.input == input) {
                return recipe;
            }
        }
        return null;
    }
    PRCRecipe.get = get;
    function isValidInput(item) {
        return !!get(item);
    }
    PRCRecipe.isValidInput = isValidInput;
})(PRCRecipe || (PRCRecipe = {}));
var SeparatorRecipe;
(function (SeparatorRecipe) {
    SeparatorRecipe.recipes = [];
    function add(recipe) {
        if (!recipe.liqIn)
            return;
        recipe.energyMult = recipe.energyMult || 1;
        SeparatorRecipe.recipes.push(recipe);
        return;
    }
    SeparatorRecipe.add = add;
    function get(liqIn, amount) {
        if (amount === void 0) { amount = 10; }
        for (var _i = 0, recipes_4 = SeparatorRecipe.recipes; _i < recipes_4.length; _i++) {
            var recipe = recipes_4[_i];
            if (recipe.liqIn.liquid == liqIn && amount >= recipe.liqIn.amount) {
                return recipe;
            }
        }
        return null;
    }
    SeparatorRecipe.get = get;
    function isValidInput(liqIn) {
        return !!get(liqIn);
    }
    SeparatorRecipe.isValidInput = isValidInput;
    function getLiqIn() {
        var arr = [];
        for (var _i = 0, recipes_5 = SeparatorRecipe.recipes; _i < recipes_5.length; _i++) {
            var recipe = recipes_5[_i];
            arr.push(recipe.liqIn.liquid);
        }
        return arr;
    }
    SeparatorRecipe.getLiqIn = getLiqIn;
    function getGasLeft() {
        var arr = [];
        for (var _i = 0, recipes_6 = SeparatorRecipe.recipes; _i < recipes_6.length; _i++) {
            var recipe = recipes_6[_i];
            arr.push(recipe.gasOut1.gas);
        }
        return arr;
    }
    SeparatorRecipe.getGasLeft = getGasLeft;
    function getGasRight() {
        var arr = [];
        for (var _i = 0, recipes_7 = SeparatorRecipe.recipes; _i < recipes_7.length; _i++) {
            var recipe = recipes_7[_i];
            arr.push(recipe.gasOut2.gas);
        }
        return arr;
    }
    SeparatorRecipe.getGasRight = getGasRight;
})(SeparatorRecipe || (SeparatorRecipe = {}));
var RecipeManager;
(function (RecipeManager) {
    function getInfuseRecipe() {
        return InfuserRecipe;
    }
    RecipeManager.getInfuseRecipe = getInfuseRecipe;
    function getEnrichRecipe() {
        return EnrichRecipe;
    }
    RecipeManager.getEnrichRecipe = getEnrichRecipe;
    function getCrusherRecipe() {
        return CrusherRecipe;
    }
    RecipeManager.getCrusherRecipe = getCrusherRecipe;
})(RecipeManager || (RecipeManager = {}));
var GasRegister;
(function (GasRegister) {
    var gases = {};
    function registerGas(key, name, canCondenser, uiTextures, modelTextures) {
        if (canCondenser) {
            var liquidTexture = "".concat(key, "_liquid");
            LiquidRegistry.registerLiquid(key, "".concat(name, " Liquid"), [liquidTexture], modelTextures);
        }
        if (key.includes("_gen"))
            key = "".concat(key, "_gas");
        LiquidRegistry.registerLiquid(key, name, uiTextures, modelTextures);
        gases[key] = {
            name: name,
            textures: uiTextures,
            modelTextures: modelTextures || null,
            conderser: canCondenser
        };
    }
    GasRegister.registerGas = registerGas;
    function getGasData(key) {
        return gases[key];
    }
    GasRegister.getGasData = getGasData;
    function getLiquidUITexture(key, width, height) {
        return LiquidRegistry.getLiquidUITexture(key, width, height);
    }
    GasRegister.getLiquidUITexture = getLiquidUITexture;
})(GasRegister || (GasRegister = {}));
var TileEntityInterfaceWithGas = /** @class */ (function () {
    function TileEntityInterfaceWithGas(tileEntity) {
        this.liquidUnitRatio = 1;
        this.gasUnitRatio = 1;
        this.isNativeContainer = false;
        this.tileEntity = tileEntity;
        this.gasStorage = new BlockEngine.GasTank(this.tileEntity, "gas_tank", 1);
        this.container = tileEntity.container;
        var storagePrototype = StorageInterface.getData(tileEntity.blockID);
        if (storagePrototype) {
            for (var key in storagePrototype) {
                this[key] = storagePrototype[key];
            }
        }
    }
    TileEntityInterfaceWithGas.prototype.getSlot = function (name) {
        return this.container.getSlot(name);
    };
    TileEntityInterfaceWithGas.prototype.setSlot = function (name, id, count, data, extra) {
        if (extra === void 0) { extra = null; }
        this.container.setSlot(name, id, count, data, extra);
    };
    TileEntityInterfaceWithGas.prototype.getSlotData = function (name) {
        if (this.slots) {
            return this.slots[name];
        }
        return null;
    };
    TileEntityInterfaceWithGas.prototype.getSlotMaxStack = function (name) {
        var data = this.getSlotData(name);
        return data && data.maxStack || 64;
    };
    TileEntityInterfaceWithGas.prototype.isValidSlotSide = function (slotSide, side) {
        if (slotSide == undefined || side == -1)
            return true;
        if (typeof slotSide == "number")
            return slotSide == side;
        switch (slotSide) {
            case "horizontal": return side > 1;
            case "verctical": return side <= 1;
            case "down": return side == 0;
            case "up": return side == 1;
        }
        return false;
    };
    TileEntityInterfaceWithGas.prototype.isValidSlotInput = function (name, item, side) {
        var slotData = this.getSlotData(name);
        return !slotData || !slotData.isValid || slotData.isValid(item, side, this.tileEntity);
    };
    TileEntityInterfaceWithGas.prototype.getContainerSlots = function () {
        return Object.keys(this.slots || this.container.slots);
    };
    TileEntityInterfaceWithGas.prototype.getDefaultSlots = function (type) {
        if (this.tileEntity.getTransportSlots) { // old standard compatibility
            return this.tileEntity.getTransportSlots()[type];
        }
        return this.getContainerSlots();
    };
    TileEntityInterfaceWithGas.prototype.getInputSlots = function (side) {
        if (side === void 0) { side = -1; }
        if (!this.slots) {
            return this.getDefaultSlots("input");
        }
        var slotNames = [];
        for (var name in this.slots) {
            var slotData = this.getSlotData(name);
            if (slotData.input && this.isValidSlotSide(slotData.side, side)) {
                slotNames.push(name);
            }
        }
        return slotNames;
    };
    TileEntityInterfaceWithGas.prototype.getReceivingItemCount = function (item, side) {
        if (side === void 0) { side = -1; }
        if (!this.isValidInput(item, side, this.tileEntity))
            return 0;
        var slots = this.getInputSlots(side);
        var count = 0;
        for (var _i = 0, slots_1 = slots; _i < slots_1.length; _i++) {
            var name = slots_1[_i];
            if (!this.isValidSlotInput(name, item, side))
                continue;
            var slot = this.getSlot(name);
            if (slot.id == 0 || slot.id == item.id && slot.data == item.data) {
                var maxStack = Math.min(Item.getMaxStack(item.id), this.getSlotMaxStack(name));
                count += maxStack - slot.count;
                if (count >= item.count)
                    break;
            }
        }
        return Math.min(item.count, count);
    };
    TileEntityInterfaceWithGas.prototype.isValidInput = function (item, side, tileEntity) {
        return true;
    };
    TileEntityInterfaceWithGas.prototype.addItemToSlot = function (name, item, maxCount) {
        if (maxCount === void 0) { maxCount = 64; }
        var slot = this.getSlot(name);
        var maxStack = this.getSlotMaxStack(name);
        var added = StorageInterface.addItemToSlot(item, slot, Math.min(maxCount, maxStack));
        if (added > 0) {
            this.setSlot(name, slot.id, slot.count, slot.data, slot.extra);
        }
        return added;
    };
    TileEntityInterfaceWithGas.prototype.addItem = function (item, side, maxCount) {
        if (side === void 0) { side = -1; }
        if (maxCount === void 0) { maxCount = 64; }
        if (!this.isValidInput(item, side, this.tileEntity))
            return 0;
        var count = 0;
        var slots = this.getInputSlots(side);
        for (var _i = 0, slots_2 = slots; _i < slots_2.length; _i++) {
            var name = slots_2[_i];
            if (this.isValidSlotInput(name, item, side)) {
                count += this.addItemToSlot(name, item, maxCount - count);
                if (item.count == 0 || count >= maxCount)
                    break;
            }
        }
        return count;
    };
    TileEntityInterfaceWithGas.prototype.getOutputSlots = function (side) {
        if (side === void 0) { side = -1; }
        if (!this.slots) {
            return this.getDefaultSlots("output");
        }
        var slotNames = [];
        for (var name in this.slots) {
            var slotData = this.slots[name];
            if (slotData.output) {
                var item = this.container.getSlot(name);
                if (this.isValidSlotSide(slotData.side, side) && (!slotData.canOutput || slotData.canOutput(item, side, this.tileEntity))) {
                    slotNames.push(name);
                }
            }
        }
        return slotNames;
    };
    TileEntityInterfaceWithGas.prototype.clearContainer = function () {
        for (var name in this.container.slots) {
            this.container.clearSlot(name);
        }
    };
    TileEntityInterfaceWithGas.prototype.canReceiveLiquid = function (liquid, side) {
        return this.getInputTank(side).getLimit(liquid) < 99999999;
    };
    TileEntityInterfaceWithGas.prototype.canTransportLiquid = function (liquid, side) {
        return true;
    };
    TileEntityInterfaceWithGas.prototype.receiveLiquid = function (liquidStorage, liquid, amount) {
        var storedLiquid = liquidStorage.getLiquidStored();
        if (!storedLiquid || storedLiquid == liquid) {
            return amount - liquidStorage.addLiquid(liquid, amount / this.liquidUnitRatio) * this.liquidUnitRatio;
        }
        return 0;
    };
    TileEntityInterfaceWithGas.prototype.extractLiquid = function (liquidStorage, liquid, amount) {
        return liquidStorage.getLiquid(liquid, amount / this.liquidUnitRatio) * this.liquidUnitRatio;
    };
    TileEntityInterfaceWithGas.prototype.getInputTank = function (side) {
        return this.tileEntity.liquidStorage;
    };
    TileEntityInterfaceWithGas.prototype.getOutputTank = function (side) {
        return this.tileEntity.liquidStorage;
    };
    // For Gas Tank
    TileEntityInterfaceWithGas.prototype.canReceiveGas = function (gas, side) {
        return this.getInputGasTank(side).getLimit(gas) < 99999999;
    };
    TileEntityInterfaceWithGas.prototype.canTransportGas = function (gas, side) {
        return true;
    };
    TileEntityInterfaceWithGas.prototype.receiveGas = function (gasStorage, gas, amount) {
        var storedGas = gasStorage.getGasStored();
        if (!storedGas || storedGas == gas) {
            return amount - gasStorage.addGas(gas, amount / this.gasUnitRatio) * this.gasUnitRatio;
        }
        return 0;
    };
    TileEntityInterfaceWithGas.prototype.extractGas = function (gasStorage, gas, amount) {
        return gasStorage.getGas(gas, amount / this.gasUnitRatio) * this.gasUnitRatio;
    };
    TileEntityInterfaceWithGas.prototype.getInputGasTank = function (side) {
        return this.tileEntity.gasStorage;
    };
    TileEntityInterfaceWithGas.prototype.getOutputGasTank = function (side) {
        return this.tileEntity.gasStorage;
    };
    return TileEntityInterfaceWithGas;
}());
var GasItemRegister;
(function (GasItemRegister) {
    GasItemRegister.EmptyByFull = {};
    GasItemRegister.FullByEmpty = {};
    /**
    * Registers gas storage item.
    * @param gas gas name
    * @param emptyId empty item id
    * @param fullId id of item with luquid
    * @param storage capacity of gas in mB
    */
    function registerItem(gas, emptyId, fullId, storage) {
        GasItemRegister.EmptyByFull[fullId] = { id: emptyId, gas: gas, storage: storage };
        GasItemRegister.FullByEmpty[emptyId + ":" + gas] = { id: fullId, storage: storage };
        Item.setMaxDamage(fullId, storage);
        //if (storage == 1000) LiquidRegistry.registerItem(gas, { id: emptyId, data: 0 }, { id: fullId, data: 0 });
    }
    GasItemRegister.registerItem = registerItem;
    /**
    * Return gas type stored in item
    * @param id item id
    * @param data item data
    * @returns gas type
    */
    function getItemLiquid(id, data) {
        var empty = GasItemRegister.EmptyByFull[id];
        if (empty) {
            return empty.gas;
        }
        return null;
    }
    GasItemRegister.getItemLiquid = getItemLiquid;
    /**
    * Returns empty item and stored gas data for item that contains gas,
    * null otherwise.
    * @param id item id
    * @param data item data
    * @returns object that contains empty item and stored gas.
    */
    function getEmptyItem(id, data) {
        var emptyData = GasItemRegister.EmptyByFull[id];
        if (emptyData) {
            var amount = emptyData.storage - data;
            return { id: emptyData.id, data: 0, gas: emptyData.gas, amount: amount, storage: emptyData.storage };
        }
        return null;
    }
    GasItemRegister.getEmptyItem = getEmptyItem;
    /**
    * Returns full item and free gas capacity for item that can be filled with gas,
    * null otherwise.
    * @param id item id
    * @param data item data
    * @param gas gas type
    * @returns object that contains full item and free gas capacity
    */
    function getFullItem(id, data, gas) {
        var emptyData = GasItemRegister.EmptyByFull[id];
        if (emptyData && emptyData.gas == gas && data > 0) {
            return { id: id, data: 0, amount: data, storage: emptyData.storage };
        }
        var fullData = GasItemRegister.FullByEmpty[id + ":" + gas];
        if (fullData) {
            return { id: fullData.id, data: 0, amount: fullData.storage, storage: fullData.storage };
        }
        return null;
    }
    GasItemRegister.getFullItem = getFullItem;
})(GasItemRegister || (GasItemRegister = {}));
// Fork From Block Engine
var BlockEngine;
(function (BlockEngine) {
    /**
     * Class to store and manipulate gases in TileEntity.
     */
    var GasTank = /** @class */ (function () {
        /**
         * Creates new instance of `GasTank` and binds it to TileEntity.
         * @param tileEntity TileEntity instance
         * @param name gas tank name
         * @param limit max gas amount
         * @param gases types of valid gases
         */
        function GasTank(tileEntity, name, limit, gases) {
            this.name = name;
            this.limit = limit;
            if (gases)
                this.setValidGass(gases);
            this.setParent(tileEntity);
        }
        /**
         * Binds gas tank to TileEntity.
         * @param tileEntity TileEntity instance
         */
        GasTank.prototype.setParent = function (tileEntity) {
            this.tileEntity = tileEntity;
            var gasData = tileEntity.data[this.name] || {
                gas: null,
                amount: 0
            };
            tileEntity.data[this.name] = this.data = gasData;
        };
        /**
         * Gets type of gas stored in tank.
         * @returns gas type
         */
        GasTank.prototype.getGasStored = function () {
            return this.data.gas;
        };
        /**
         * Gets max amount of gas in tank.
         * @returns amount of gas
         */
        GasTank.prototype.getLimit = function () {
            return this.limit;
        };
        /**
         * @param gas gas type
         * @returns true if gas can be stored in tank, false otherwise.
         */
        GasTank.prototype.isValidGas = function (gas) {
            if (!this.gases) {
                return true;
            }
            return this.gases[gas] || false;
        };
        /**
         * Sets gases that can be stored in tank (replace old!).
         * @param gases arrays of gas types
         */
        GasTank.prototype.setValidGass = function (gases) {
            this.gases = {};
            for (var _i = 0, gases_1 = gases; _i < gases_1.length; _i++) {
                var name = gases_1[_i];
                this.gases[name] = true;
            }
        };
        /**
         * Gets amount of gas in tank. If `gas` parameter is set,
         * returns amount of the specified gas.
         * @param gas gas type
         * @returns amount of gas
         */
        GasTank.prototype.getAmount = function (gas) {
            if (!gas || this.data.gas == gas) {
                return this.data.amount;
            }
            return 0;
        };
        /**
         * Sets gas to tank.
         * @param gas gas type
         * @param amount amount of gas
         */
        GasTank.prototype.setAmount = function (gas, amount) {
            this.data.gas = gas;
            this.data.amount = amount;
        };
        /**
         * Gets amount of gas divided by max amount.
         * @returns scalar value from 0 to 1
         */
        GasTank.prototype.getRelativeAmount = function () {
            return this.data.amount / this.limit;
        };
        /**
         * Adds gas to tank.
         * @param gas gas type
         * @param amount amount of gas to add
         * @returns amount of gas that wasn't added
         */
        GasTank.prototype.addGas = function (gas, amount) {
            if (!this.data.gas || this.data.gas == gas) {
                this.data.gas = gas;
                var add = Math.min(amount, this.limit - this.data.amount);
                this.data.amount += add;
                return amount - add;
            }
            return 0;
        };
        GasTank.prototype.getGas = function (gas, amount) {
            if (amount == undefined) {
                amount = gas;
                gas = null;
            }
            if (!gas || this.data.gas == gas) {
                var got = Math.min(amount, this.data.amount);
                this.data.amount -= got;
                if (this.data.amount == 0) {
                    this.data.gas = null;
                }
                return got;
            }
            return 0;
        };
        /**
         * @returns true if tank is full, false otherwise
         */
        GasTank.prototype.isFull = function () {
            return this.data.amount >= this.limit;
        };
        /**
         * @returns true if tank is empty, false otherwise
         */
        GasTank.prototype.isEmpty = function () {
            return this.data.amount <= 0;
        };
        /**
         * Tries to fill item with gas from tank.
         * @param inputSlot slot for empty item
         * @param outputSlot slot for full item
         * @returns true if gas was added, false otherwise.
         */
        GasTank.prototype.addGasToItem = function (inputSlot, outputSlot) {
            var gas = this.getGasStored();
            if (!gas)
                return false;
            var amount = this.getAmount(gas);
            if (amount > 0) {
                var full = GasItemRegister.getFullItem(inputSlot.id, inputSlot.data, gas);
                if (full && (outputSlot.id == full.id && outputSlot.data == full.data && outputSlot.count < Item.getMaxStack(full.id) || outputSlot.id == 0)) {
                    if (amount >= full.amount) {
                        this.getGas(full.amount);
                        inputSlot.setSlot(inputSlot.id, inputSlot.count - 1, inputSlot.data);
                        inputSlot.validate();
                        outputSlot.setSlot(full.id, outputSlot.count + 1, full.data);
                        return true;
                    }
                    if (inputSlot.count == 1 && full.storage) {
                        if (inputSlot.id == full.id) {
                            amount = this.getGas(full.amount);
                            inputSlot.setSlot(inputSlot.id, 1, inputSlot.data - amount);
                        }
                        else {
                            amount = this.getGas(full.storage);
                            inputSlot.setSlot(full.id, 1, full.storage - amount);
                        }
                        return true;
                    }
                }
            }
            return false;
        };
        /**
         * Tries to fill tank with gas from item.
         * @param inputSlot slot for full item
         * @param outputSlot slot for empty item
         * @returns true if gas was extracted, false otherwise.
         */
        GasTank.prototype.getGasFromItem = function (inputSlot, outputSlot) {
            var gas = this.getGasStored();
            var empty = GasItemRegister.getEmptyItem(inputSlot.id, inputSlot.data);
            if (empty && (!gas && this.isValidGas(empty.gas) || empty.gas == gas) && !this.isFull()) {
                if (outputSlot.id == empty.id && outputSlot.data == empty.data && outputSlot.count < Item.getMaxStack(empty.id) || outputSlot.id == 0) {
                    var freeAmount = this.getLimit() - this.getAmount();
                    if (freeAmount >= empty.amount) {
                        this.addGas(empty.gas, empty.amount);
                        inputSlot.setSlot(inputSlot.id, inputSlot.count - 1, inputSlot.data);
                        inputSlot.validate();
                        outputSlot.setSlot(empty.id, outputSlot.count + 1, empty.data);
                        return true;
                    }
                    if (inputSlot.count == 1 && empty.storage) {
                        var amount = Math.min(freeAmount, empty.amount);
                        this.addGas(empty.gas, amount);
                        inputSlot.setSlot(inputSlot.id, 1, inputSlot.data + amount);
                        return true;
                    }
                }
            }
            return false;
        };
        /**
         * Updates UI bar of gas.
         * Warning: Only support new container !
         * Note: add setGasScale event to your Tile Entity
         * @param scale name of gas bar
         */
        GasTank.prototype.updateUiScale = function (scale) {
            var container = this.tileEntity.container;
            container.sendEvent("setGasScale", { scale: scale, gas: this.data.gas, amount: this.getRelativeAmount() });
        };
        return GasTank;
    }());
    BlockEngine.GasTank = GasTank;
})(BlockEngine || (BlockEngine = {}));
var StorageInterface;
(function (StorageInterface) {
    StorageInterface.data_with_gas = {};
    function createInterfaceWithGas(id, descriptor) {
        StorageInterface.createInterface(id, descriptor);
        StorageInterface.data_with_gas[id] = descriptor;
    }
    StorageInterface.createInterfaceWithGas = createInterfaceWithGas;
    /** Returns storage interface for TileEntity with gas storage */
    function getGasStorage(region, x, y, z) {
        var tileEntity = World.getTileEntity(x, y, z, region);
        if (tileEntity && tileEntity.__initialized) {
            return new TileEntityInterfaceWithGas(tileEntity);
        }
        return null;
    }
    StorageInterface.getGasStorage = getGasStorage;
    /** Returns storage interface for neighbour TileEntity with gas storage on specified side */
    function getNeighbourGasStorage(region, coords, side) {
        var dir = StorageInterface.getRelativeCoords(coords, side);
        return getGasStorage(region, dir.x, dir.y, dir.z);
    }
    StorageInterface.getNeighbourGasStorage = getNeighbourGasStorage;
    function getNearestGasStorages(coords, region) {
        var side = -1;
        if (typeof region == "number") { // reverse compatibility
            region = null;
            side = region;
        }
        var storages = {};
        for (var i = 0; i < 6; i++) {
            if (side >= 0 && side != i)
                continue;
            var storage = getNeighbourGasStorage(region, coords, i);
            if (storage)
                storages[i] = storage;
        }
        return storages;
    }
    StorageInterface.getNearestGasStorages = getNearestGasStorages;
    /**
 * Extract gas from one storage to another
 * @gas gas to extract. If null, will extract gas stored in output storage
 * @maxAmount max amount of gas that can be transfered
 * @inputStorage storage to input gas
 * @outputStorage storage to extract gas
 * @inputSide block side of input storage which is receiving
 * @returns left gas amount
*/
    function extractGas(gas, maxAmount, inputStorage, outputStorage, inputSide) {
        if (!(inputStorage instanceof TileEntityInterfaceWithGas)) { // reverse compatibility
            inputStorage = new TileEntityInterfaceWithGas(inputStorage);
        }
        var outputSide = inputSide ^ 1;
        var inputTank = inputStorage.getInputTank(inputSide);
        var outputTank = outputStorage.getOutputTank(outputSide);
        if (!inputTank || !outputTank)
            return 0;
        if (!gas)
            gas = outputTank.getLiquidStored();
        if (gas && outputStorage.canTransportLiquid(gas, outputSide) && inputStorage.canReceiveLiquid(gas, inputSide) && !inputTank.isFull()) {
            var amount = Math.min(outputTank.getAmount(gas) * outputStorage.gasUnitRatio, maxAmount);
            amount = inputStorage.receiveLiquid(inputTank, gas, amount);
            outputStorage.extractLiquid(outputTank, gas, amount);
            return amount;
        }
        return 0;
    }
    StorageInterface.extractGas = extractGas;
    /** Similar to StorageInterface.extractLiquid, but gas must be specified */
    function transportGas(gas, maxAmount, outputStorage, inputStorage, outputSide) {
        if (!(outputStorage instanceof TileEntityInterfaceWithGas)) { // reverse compatibility
            outputStorage = new TileEntityInterfaceWithGas(outputStorage);
        }
        var inputSide = outputSide ^ 1;
        var inputTank = inputStorage.getInputTank(inputSide);
        var outputTank = outputStorage.getOutputTank(outputSide);
        if (!inputTank || !outputTank)
            return 0;
        if (inputStorage.canReceiveLiquid(gas, inputSide) && !inputTank.isFull()) {
            var amount = Math.min(outputTank.getAmount(gas) * outputStorage.gasUnitRatio, maxAmount);
            amount = inputStorage.receiveLiquid(inputTank, gas, amount);
            outputStorage.extractLiquid(outputTank, gas, amount);
            return amount;
        }
        return 0;
    }
    StorageInterface.transportGas = transportGas;
})(StorageInterface || (StorageInterface = {}));
var MachineRegistry;
(function (MachineRegistry) {
    var machineIDs = {};
    function isMachine(id) {
        return !!machineIDs[id];
    }
    MachineRegistry.isMachine = isMachine;
    function registerPrototype(id, Prototype) {
        var _a, _b, _c, _d, _e, _f;
        // setup legacy prototypes
        if (!(Prototype instanceof Machine.MachineBase)) {
            var BasePrototype = Machine.MachineBase.prototype;
            Prototype.id = id;
            (_a = Prototype.getDefaultDrop) !== null && _a !== void 0 ? _a : (Prototype.getDefaultDrop = BasePrototype.getDefaultDrop);
            (_b = Prototype.adjustDrop) !== null && _b !== void 0 ? _b : (Prototype.adjustDrop = BasePrototype.adjustDrop);
            (_c = Prototype.destroyWithWrench) !== null && _c !== void 0 ? _c : (Prototype.destroyWithWrench = BasePrototype.destroyWithWrench);
            (_d = Prototype.setActive) !== null && _d !== void 0 ? _d : (Prototype.setActive = function (isActive) {
                if (this.data.isActive != isActive) {
                    this.data.isActive = isActive;
                    TileRenderer.mapAtCoords(this.x, this.y, this.z, this.blockID, this.data.meta + (isActive ? 4 : 0));
                }
            });
            (_e = Prototype.activate) !== null && _e !== void 0 ? _e : (Prototype.activate = function () {
                this.setActive(true);
            });
            (_f = Prototype.deactivate) !== null && _f !== void 0 ? _f : (Prototype.deactivate = function () {
                this.setActive(false);
            });
        }
        // register prototype
        machineIDs[id] = true;
        TileEntity.registerPrototype(id, Prototype);
        //setMachineDrop(id, Prototype.defaultDrop);
        BlockRegistry.setBlockMaterial(id, "stone");
        if (Prototype instanceof Machine.ProgressingMachine) {
            // wire connection
            ICRender.getGroup("rf-wire").add(id, -1);
            // register for energy net
            EnergyTileRegistry.addEnergyTypeForId(id, RF);
        }
    }
    MachineRegistry.registerPrototype = registerPrototype;
    function createStorageInterface(blockID, descriptor) {
        var _a, _b, _c, _d;
        descriptor.liquidUnitRatio = 0.001;
        (_a = descriptor.getInputTank) !== null && _a !== void 0 ? _a : (descriptor.getInputTank = function () {
            return this.tileEntity.liquidTank;
        });
        (_b = descriptor.getOutputTank) !== null && _b !== void 0 ? _b : (descriptor.getOutputTank = function () {
            return this.tileEntity.liquidTank;
        });
        (_c = descriptor.canReceiveLiquid) !== null && _c !== void 0 ? _c : (descriptor.canReceiveLiquid = function (liquid) {
            return this.getInputTank().isValidLiquid(liquid);
        });
        (_d = descriptor.canTransportLiquid) !== null && _d !== void 0 ? _d : (descriptor.canTransportLiquid = function () { return true; });
        StorageInterface.createInterface(blockID, descriptor);
    }
    MachineRegistry.createStorageInterface = createStorageInterface;
    function createMachineStorageInterface(blockID, descriptor) {
        // descriptor.slots["slotAugment1"] = {
        //    input: false
        // }
        // descriptor.slots["slotAugment2"] = {
        //    input: false
        // }
        // descriptor.slots["slotAugment3"] = {
        //    input: false
        // }
        StorageInterface.createInterface(blockID, descriptor);
    }
    MachineRegistry.createMachineStorageInterface = createMachineStorageInterface;
    /*
      export function setStoragePlaceFunction(blockID: string | number, hasVerticalRotation ? : boolean) {
        Block.registerPlaceFunction(blockID, function(coords, item, block, player, blockSource) {
          const region = new WorldRegion(blockSource);
          const place = World.canTileBeReplaced(block.id, block.data) ? coords : coords.relative;
          const rotation = TileRenderer.getBlockRotation(player, hasVerticalRotation);
          region.setBlock(place, item.id, rotation);
          const tile = region.addTileEntity(place);
          if (item.extra) {
            tile.data.energy = item.extra.getInt("energy");
          }
        });
      }
    */
    function setStoragePlaceFunction(blockID, hasVerticalRotation) {
        Block.registerPlaceFunction(blockID, function (coords, item, block, player, blockSource) {
            var region = new WorldRegion(blockSource);
            var place = World.canTileBeReplaced(block.id, block.data) ? coords : coords.relative;
            var rotation = TileRenderer.getBlockRotation(player, hasVerticalRotation);
            region.setBlock(place, item.id, rotation);
            var tile = region.addTileEntity(place);
            if (item.extra) {
                if (item.extra.getInt("energy"))
                    tile.data.energy = item.extra.getInt("energy");
                tile.container = item.extra.getSerializable("container");
            }
        });
    }
    MachineRegistry.setStoragePlaceFunction = setStoragePlaceFunction;
    function getThermalMachineID() {
        var machine_id = [];
        for (var key in machineIDs) {
            var input = key.split(":");
            machine_id.push(input[0]);
        }
        return machine_id;
    }
    MachineRegistry.getThermalMachineID = getThermalMachineID;
    function setMachineDrop(blockID, dropID) {
        dropID !== null && dropID !== void 0 ? dropID : (dropID = Block.getNumericId(blockID));
        BlockRegistry.registerDrop(blockID, function (coords, blockID, blockData, level) {
            var drop = [];
            if (level >= ToolAPI.getBlockDestroyLevel(blockID)) {
                drop.push([dropID, 1, 0]);
            }
            return drop;
        });
    }
    MachineRegistry.setMachineDrop = setMachineDrop;
    function fillTankOnClick(tank, item, playerUid) {
        var liquid = tank.getLiquidStored();
        var empty = LiquidItemRegistry.getEmptyItem(item.id, item.data);
        if (empty && (!liquid && tank.isValidLiquid(empty.liquid) || empty.liquid == liquid) && !tank.isFull()) {
            var player = new PlayerEntity(playerUid);
            var liquidLimit = tank.getLimit();
            var storedAmount = tank.getAmount(liquid);
            var count = Math.min(item.count, Math.floor((liquidLimit - storedAmount) / empty.amount));
            if (count > 0) {
                tank.addLiquid(empty.liquid, empty.amount * count);
                player.addItemToInventory(new ItemStack(empty.id, count, empty.data));
                item.count -= count;
                player.setCarriedItem(item);
            }
            else if (item.count == 1 && empty.storage) {
                var amount = Math.min(liquidLimit - storedAmount, empty.amount);
                tank.addLiquid(empty.liquid, amount);
                item.data += amount;
                player.setCarriedItem(item);
            }
            return true;
        }
        return false;
    }
    MachineRegistry.fillTankOnClick = fillTankOnClick;
    function updateGuiHeader(gui, text) {
        var header = gui.getWindow("header");
        header.contentProvider.drawing[2].text = Translation.translate(text);
    }
    MachineRegistry.updateGuiHeader = updateGuiHeader;
})(MachineRegistry || (MachineRegistry = {}));
BlockRegistry.createBlockType("machine", {
    extends: "stone",
    destroyTime: 3
});
BlockRegistry.createBlockType("other-machine", {
    extends: "machine",
    solid: false
});
var SpeedMultiplier = [1, 1.33, 1.78, 2.37, 3.16, 4.22, 5.62, 7.5, 10.0]; // ((Math.pow(1*(1+ 0.33), 3)))
var UpgradesAPI;
(function (UpgradesAPI) {
    UpgradesAPI.EnergyMultiplier = 10.0;
    var data = {};
    function getUpgrade(id) {
        return data[id];
    }
    UpgradesAPI.getUpgrade = getUpgrade;
    function isUpgrade(id) {
        return !!data[id];
    }
    UpgradesAPI.isUpgrade = isUpgrade;
    function isValidUpgrade(id, machine) {
        var upgrade = getUpgrade(id);
        var validUpgrade = machine["upgrades"];
        if (upgrade && (!validUpgrade || validUpgrade.indexOf(upgrade.type) != -1)) {
            return true;
        }
        return false;
    }
    UpgradesAPI.isValidUpgrade = isValidUpgrade;
    function registerUpgrade(id, upgrade) {
        data[id] = upgrade;
    }
    UpgradesAPI.registerUpgrade = registerUpgrade;
    function useUpgrade(machine) {
        return new UpgradeSet(machine);
    }
    UpgradesAPI.useUpgrade = useUpgrade;
    var UpgradeSet = /** @class */ (function () {
        function UpgradeSet(tileEntity) {
            this.tileEntity = tileEntity;
            this.resetRates();
            this.useUpgrade();
        }
        UpgradeSet.prototype.resetRates = function () {
            this.speedModifier = 1;
            this.energyModifier = 1;
        };
        UpgradeSet.prototype.useUpgrade = function () {
            var container = this.tileEntity.container;
            for (var slotName in container.slots) {
                if (slotName.match(/Upgrade/)) {
                    var slot = container.getSlot(slotName);
                    var upgrade = getUpgrade(slot.id);
                    if (upgrade && this.isValidUpgrade(upgrade)) {
                        this.executeUprade(upgrade, slot);
                    }
                }
            }
        };
        UpgradeSet.prototype.isValidUpgrade = function (upgrade) {
            var validUpgrade = this.tileEntity["upgrades"];
            return (!validUpgrade || validUpgrade.indexOf(upgrade.type) != -1);
        };
        UpgradeSet.prototype.executeUprade = function (upgrade, stack) {
            if (upgrade.type == "speed") {
                this.speedModifier = stack.count;
            }
            if (upgrade.type == "energy") {
                this.energyModifier = stack.count;
            }
            if ("onTick" in upgrade) {
                upgrade.onTick(stack, this.tileEntity);
            }
        };
        // get data from Tile Entity
        UpgradeSet.prototype.getEnergyUsage = function (defaultUse) {
            var powerUse = defaultUse * Math.pow(UpgradesAPI.EnergyMultiplier, (2 * this.speedModifier - this.energyModifier) / 8);
            return powerUse;
        };
        UpgradeSet.prototype.getEnergyCapacity = function (defaultEnergyCapacity) {
            var energyCapacity = Math.floor(defaultEnergyCapacity * Math.pow(UpgradesAPI.EnergyMultiplier, this.energyModifier / 8));
            var tileData = this.tileEntity.data;
            tileData.energy = Math.min(tileData.energy, energyCapacity);
            return energyCapacity;
        };
        UpgradeSet.prototype.getSpeed = function (defaultSpeed) {
            return defaultSpeed * SpeedMultiplier[this.speedModifier];
        };
        UpgradeSet.prototype.getSpeedMultiplier = function () {
            return this.speedModifier;
        };
        return UpgradeSet;
    }());
    UpgradesAPI.UpgradeSet = UpgradeSet;
})(UpgradesAPI || (UpgradesAPI = {}));
var MaterialRegistry;
(function (MaterialRegistry) {
    MaterialRegistry.oreName = [];
    MaterialRegistry.ingotData = [];
    MaterialRegistry.dustData = [];
    function registerIngot(id) {
        var name = "item.mekanism.ingot_" + id; // item.mekanism.ingot_
        var _id = id.charAt(0).toUpperCase() + id.slice(1);
        ItemRegistry.createItem("ingot" + _id, { name: name, icon: "ingot_" + id });
    }
    MaterialRegistry.registerIngot = registerIngot;
    function registerNugget(id, disabledRecipe) {
        if (disabledRecipe === void 0) { disabledRecipe = false; }
        var name = "item.mekanism.nugget" + id;
        var _id = id.charAt(0).toUpperCase() + id.slice(1);
        ItemRegistry.createItem("nugget" + _id, { name: name, icon: "nugget_" + id });
        if (!disabledRecipe) {
            Recipes.addShaped({ id: ItemID["ingot" + _id], count: 1, data: 0 }, [
                "fff",
                "fff",
                "fff",
            ], ['f', ItemID["nugget" + _id], 0]);
            Recipes.addShapeless({ id: ItemID["nugget" + _id], count: 9, data: 0 }, [{ id: ItemID["ingot" + _id], data: 0 }]);
        }
    }
    MaterialRegistry.registerNugget = registerNugget;
    function registerDust(id) {
        var name = "item.mekanism.dust_" + id;
        var _id = id.charAt(0).toUpperCase() + id.slice(1);
        ItemRegistry.createItem("dust" + _id, { name: name, icon: "dust_" + id });
    }
    MaterialRegistry.registerDust = registerDust;
    // raw, shard, crystal, clump, dirty dust not ready
    function registerOre(id, time, level) {
        var BlockOre = /** @class */ (function (_super) {
            __extends(BlockOre, _super);
            function BlockOre(id, time, miningLevel) {
                var _this = this;
                var _id = "ore" + id.charAt(0).toUpperCase() + id.slice(1);
                _this = _super.call(this, _id, "ore") || this;
                var name = "block.mekanism." + id + "_ore"; //  block.mekanism.lead_ore
                var textureName = id = "_ore";
                _this.addVariation(name, [[textureName, 0]], true);
                _this.setBlockMaterial("stone", miningLevel);
                _this.setDestroyTime(time);
                return _this;
            }
            return BlockOre;
        }(BlockBase));
        BlockRegistry.registerBlock(new BlockOre(id, time, level));
    }
    MaterialRegistry.registerOre = registerOre;
    function registerStorage(id, time, level) {
        var BlockResource = /** @class */ (function (_super) {
            __extends(BlockResource, _super);
            function BlockResource(id, time, miningLevel) {
                var _this = this;
                var _id = "block" + id.charAt(0).toUpperCase() + id.slice(1);
                _this = _super.call(this, _id, "stone") || this;
                var name = "block.mekanism.block_" + id; // block.mekanism.block_
                var textureName = "block_" + id;
                _this.addVariation(name, [[textureName, 0]], true);
                _this.setBlockMaterial("stone", miningLevel);
                _this.setDestroyTime(time);
                return _this;
            }
            return BlockResource;
        }(BlockBase));
        BlockRegistry.registerBlock(new BlockResource(id, time, level));
    }
    MaterialRegistry.registerStorage = registerStorage;
    function registerResource(id, level, time) {
        if (id.indexOf("_") > -1) {
            var i = id.indexOf("_");
            id = id.slice(0, i + 1) + id.charAt(i + 1).toUpperCase() + id.slice(i + 2);
            id = id.split('_').join('');
        }
        MaterialRegistry.oreName.push(id);
        MaterialRegistry.ingotData.push(id);
        MaterialRegistry.dustData.push(id);
        registerOre(id, time, level);
        registerDust(id);
        registerIngot(id);
        registerNugget(id, false);
        registerStorage(id, time, level);
    }
    MaterialRegistry.registerResource = registerResource;
    function registerAlloy(id, level, time, disabledFurnace) {
        if (disabledFurnace === void 0) { disabledFurnace = false; }
        if (id.indexOf("_") > -1) {
            var i = id.indexOf("_");
            id = id.slice(0, i + 1) + id.charAt(i + 1).toUpperCase() + id.slice(i + 2);
            id = id.split('_').join('');
        }
        if (!disabledFurnace)
            MaterialRegistry.dustData.push(id);
        MaterialRegistry.ingotData.push(id);
        registerIngot(id);
        registerNugget(id, false);
        registerDust(id);
        registerStorage(id, time, level);
    }
    MaterialRegistry.registerAlloy = registerAlloy;
    function addBlockRecipe() {
        for (var _i = 0, ingotData_1 = MaterialRegistry.ingotData; _i < ingotData_1.length; _i++) {
            var id = ingotData_1[_i];
            var _id = id.charAt(0).toUpperCase() + id.slice(1);
            Recipes.addShaped({ id: BlockID["block" + _id], count: 1, data: 0 }, [
                "fff",
                "fff",
                "fff",
            ], ['f', ItemID["ingot" + _id], 0]);
            Recipes.addShapeless({ id: ItemID["ingot" + _id], count: 9, data: 0 }, [{ id: BlockID["block" + _id], data: 0 }]);
        }
    }
    MaterialRegistry.addBlockRecipe = addBlockRecipe;
    function cookDust() {
        for (var _i = 0, dustData_1 = MaterialRegistry.dustData; _i < dustData_1.length; _i++) {
            var id = dustData_1[_i];
            var _id = id.charAt(0).toUpperCase() + id.slice(1);
            Recipes.addFurnace(ItemID["dust" + _id], 0, ItemID["ingot" + _id], 0);
        }
    }
    MaterialRegistry.cookDust = cookDust;
})(MaterialRegistry || (MaterialRegistry = {}));
Callback.addCallback("PreLoaded", function () {
    MaterialRegistry.addBlockRecipe();
    MaterialRegistry.cookDust();
});
var Infuser_Type;
(function (Infuser_Type) {
    Infuser_Type.types = [];
    Infuser_Type.item_type = {};
    function registerType(id, texture, needPerfix) {
        if (needPerfix === void 0) { needPerfix = false; }
        var textures = [];
        textures.push(texture || id);
        var type = needPerfix ? "infuser_".concat(id) : id;
        LiquidRegistry.registerLiquid(type, "Infuser ".concat(id), textures);
        Infuser_Type.types.push(type);
    }
    Infuser_Type.registerType = registerType;
    function registerItem(type, id, value) {
        if (isExist(type))
            registerType(type);
        Infuser_Type.item_type[id] = { type: type, value: value };
    }
    Infuser_Type.registerItem = registerItem;
    function isExist(type) {
        return Infuser_Type.types.indexOf(type) != -1;
    }
    Infuser_Type.isExist = isExist;
    function isInfuserType(item) {
        return !!Infuser_Type.item_type[item.id];
    }
    Infuser_Type.isInfuserType = isInfuserType;
    function getTypeFromItem(id) {
        return Infuser_Type.item_type[id];
    }
    Infuser_Type.getTypeFromItem = getTypeFromItem;
})(Infuser_Type || (Infuser_Type = {}));
Infuser_Type.registerType("redstone", "infuser_redstone");
Infuser_Type.registerType("coal", "infuser_coal");
Infuser_Type.registerType("diamond", "infuser_diamond");
Infuser_Type.registerType("fungi", "fungi");
Infuser_Type.registerItem("infuser_coal", VanillaItemID.coal, 10);
Infuser_Type.registerItem("infuser_coal", VanillaItemID.charcoal, 10);
Infuser_Type.registerItem("infuser_redstone", VanillaItemID.redstone, 10);
Infuser_Type.registerItem("infuser_diamond", VanillaItemID.diamond, 10);
Infuser_Type.registerItem("infuser_gold", VanillaItemID.gold_ingot, 10);
Infuser_Type.registerItem("infuser_coal", ItemID.dustCoal, 10);
Infuser_Type.registerItem("infuser_coal", ItemID.dustCharcoal, 10);
Infuser_Type.registerItem("infuser_gold", ItemID.dustGold, 10);
Infuser_Type.registerItem("infuser_diamond", ItemID.dustDiamond, 10);
Infuser_Type.registerItem("infuser_coal", VanillaBlockID.coal_block, 90);
Infuser_Type.registerItem("infuser_redstone", VanillaBlockID.redstone_block, 90);
Infuser_Type.registerItem("infuser_diamond", VanillaBlockID.diamond_block, 90);
Infuser_Type.registerItem("infuser_coal", ItemID.enrichedCoal, 80);
Infuser_Type.registerItem("infuser_redstone", ItemID.enrichedRedstone, 80);
Infuser_Type.registerItem("infuser_diamond", ItemID.enrichedDiamond, 80);
Infuser_Type.registerItem("infuser_gold", ItemID.enrichedGold, 80);
Infuser_Type.registerItem("infuser_tin", ItemID.enrichedTin, 80);
Infuser_Type.registerItem("infuser_obsidian", ItemID.enrichedObsidian, 80);
// Fungi
var mushroom = [VanillaBlockID.warped_fungus, VanillaBlockID.crimson_fungus, VanillaBlockID.red_mushroom, VanillaBlockID.brown_mushroom];
mushroom.forEach(function (item) {
    Infuser_Type.registerItem("fungi", item, 10);
});
var MekTool;
(function (MekTool) {
    var wrenchData = {};
    function registerWrench(id, properties) {
        wrenchData[id] = properties;
    }
    MekTool.registerWrench = registerWrench;
    function getWrenchData(id) {
        return wrenchData[id];
    }
    MekTool.getWrenchData = getWrenchData;
    function isWrench(id) {
        return !!getWrenchData(id);
    }
    MekTool.isWrench = isWrench;
    function isUseableWrench(item, damage) {
        if (damage === void 0) { damage = 1; }
        var wrench = getWrenchData(item.id);
        return wrench === null || wrench === void 0 ? void 0 : wrench.isUseable(item, damage);
    }
    MekTool.isUseableWrench = isUseableWrench;
    function useWrench(item, damage, player) {
        var wrench = getWrenchData(item.id);
        wrench === null || wrench === void 0 ? void 0 : wrench.useItem(item, damage, player);
    }
    MekTool.useWrench = useWrench;
    function rotateMachine(tileEntity, side, item, player) {
        if (tileEntity.setFacing(side)) {
            useWrench(item, 1, player);
        }
    }
    MekTool.rotateMachine = rotateMachine;
    function addRecipe(result, data, tool) {
        data.push({ id: tool, data: -1 });
        Recipes.addShapeless(result, data, function (api, field, result) {
            for (var i = 0; i < field.length; i++) {
                if (field[i].id == tool) {
                    field[i].data++;
                    if (field[i].data >= Item.getMaxDamage(tool)) {
                        field[i].id = field[i].count = field[i].data = 0;
                    }
                }
                else {
                    api.decreaseFieldSlot(i);
                }
            }
        });
    }
    MekTool.addRecipe = addRecipe;
    function dischargeItem(item, consume, player) {
        var energyGot = 0;
        var itemTier = ChargeItemRegistry.getItemData(item.id).tier;
        var armor = Entity.getArmorSlot(player, 1);
        var armorEnergy = ChargeItemRegistry.getEnergyStored(armor);
        var armorData = ChargeItemRegistry.getItemData(armor.id);
        if (armorEnergy > 0 && armorData.energy == RF.name && armorData.tier >= itemTier) {
            energyGot = Math.min(armorEnergy, consume);
        }
        var energyStored = ChargeItemRegistry.getEnergyStored(item) + energyGot;
        if (energyStored >= consume) {
            if (energyGot > 0) {
                ChargeItemRegistry.setEnergyStored(armor, armorEnergy - energyGot);
                Entity.setArmorSlot(player, 1, armor.id, 1, armor.data, armor.extra);
            }
            ChargeItemRegistry.setEnergyStored(item, energyStored - consume);
            return true;
        }
        return false;
    }
    MekTool.dischargeItem = dischargeItem;
    function useElectricItem(item, consume, player) {
        if (dischargeItem(item, consume, player)) {
            Entity.setCarriedItem(player, item.id, 1, item.data, item.extra);
            return true;
        }
        return false;
    }
    MekTool.useElectricItem = useElectricItem;
    Callback.addCallback("DestroyBlockStart", function (coords, block) {
        if (MachineRegistry.isMachine(block.id)) {
            var item = Player.getCarriedItem();
            if (MekTool.isUseableWrench(item, 10)) {
                Network.sendToServer("Mek.demontageMachine", { x: coords.x, y: coords.y, z: coords.z });
            }
        }
    });
    Network.addServerPacket("Mek.demontageMachine", function (client, data) {
        var player = client.getPlayerUid();
        var region = WorldRegion.getForActor(player);
        var blockID = region.getBlockId(data);
        if (MachineRegistry.isMachine(blockID)) {
            var item = new ItemStack(Entity.getCarriedItem(player));
            if (MekTool.isUseableWrench(item, 10)) {
                var tileEntity = (region.getTileEntity(data) || region.addTileEntity(data));
                if (!tileEntity)
                    return;
                //const drop = tileEntity.adjustDrop(new ItemStack(tileEntity.blockID, 1, 0));
                tileEntity.destroyWithWrench(data, player);
                TileEntity.destroyTileEntity(tileEntity);
                region.setBlock(data, 0, 0);
                //region.dropAtBlock(data.x, data.y, data.z, drop);
                MekTool.useWrench(item, 10, player);
            }
        }
    });
})(MekTool || (MekTool = {}));
var MekModel;
(function (MekModel) {
    function renderModel(model, import_params) {
        var mesh = new RenderMesh();
        mesh.importFromFile(__dir__ + "resources/res/models/" + model + ".obj", "obj", import_params || null);
        return mesh;
    }
    MekModel.renderModel = renderModel;
    function setHandModel(item, model_name, texture, import_params) {
        var model = ItemModel.getForWithFallback(item.id, 0);
        model.setHandModel(renderModel(model_name, import_params), "models/" + texture);
    }
    MekModel.setHandModel = setHandModel;
    function setItemModel(item, model_name, texture, import_params) {
        var model = ItemModel.getForWithFallback(item.id, 0);
        model.setModel(renderModel(model_name, import_params), "models/" + texture);
    }
    MekModel.setItemModel = setItemModel;
    function setInventoryModel(item, model_name, texture, import_params, rotation) {
        if (rotation === void 0) { rotation = [0, 0, 0]; }
        var mesh = renderModel(model_name, import_params);
        mesh.rotate(MathHelper.degreeToRadian(rotation[0]), MathHelper.degreeToRadian(rotation[1]), MathHelper.degreeToRadian(rotation[2]));
        var model = ItemModel.getForWithFallback(item.id, 0);
        model.setUiModel(mesh, "models/" + texture);
    }
    MekModel.setInventoryModel = setInventoryModel;
    function generateMesh(dir, x, y, z, importParams) {
        if (importParams === void 0) { importParams = {
            scale: [0, 0, 0],
            translate: [0, 0, 0],
            noRebuild: false,
            invertV: false,
        }; }
        var mesh = new RenderMesh();
        mesh.importFromFile(__dir__ + dir + ".obj", "obj", {
            noRebuild: false,
            invertV: false,
            scale: importParams.scale,
            translate: importParams.translate
        });
        mesh.rotate(x, y, z);
        return mesh;
    }
    MekModel.generateMesh = generateMesh;
    MekModel.rotate = [
        [0, 180, 0],
        [0, 0, 0],
        [0, 90, 0],
        [0, 270, 0]
    ];
    function registerModelWithRotation(block, dir, importParams) {
        var mesh, model, render;
        for (var i = 2; i <= 5; i++) {
            mesh = generateMesh(dir, MathHelper.degreeToRadian(MekModel.rotate[i - 2][0]), MathHelper.degreeToRadian(MekModel.rotate[i - 2][1]), MathHelper.degreeToRadian(MekModel.rotate[i - 2][2]), importParams);
            model = new BlockRenderer.Model(mesh);
            render = new ICRender.Model();
            render.addEntry(model);
            BlockRenderer.setStaticICRender(block, i, render);
        }
    }
    MekModel.registerModelWithRotation = registerModelWithRotation;
})(MekModel || (MekModel = {}));
var UpgradeModule = /** @class */ (function (_super) {
    __extends(UpgradeModule, _super);
    function UpgradeModule(stringID, name, type) {
        var _this = _super.call(this, stringID, "".concat("item.mekanism.upgrade_", name), "".concat("upgrade_", name)) || this;
        if (type)
            _this.type = type;
        UpgradesAPI.registerUpgrade(_this.id, _this);
        return _this;
    }
    return UpgradeModule;
}(ItemCommon));
/// <reference path="base.ts" />
var SpeedUpgrade = /** @class */ (function (_super) {
    __extends(SpeedUpgrade, _super);
    function SpeedUpgrade() {
        var _this = _super.call(this, "mekSpeedUpgrade", "speed", "speed") || this;
        _this.type = "speed";
        _this.setMaxStack(8);
        return _this;
    }
    SpeedUpgrade.prototype.onNameOverride = function (item, name) {
        return name;
    };
    return SpeedUpgrade;
}(UpgradeModule));
ItemRegistry.registerItem(new SpeedUpgrade());
/// <reference path="base.ts" />
var EnergyUpgrade = /** @class */ (function (_super) {
    __extends(EnergyUpgrade, _super);
    function EnergyUpgrade() {
        var _this = _super.call(this, "mekEnergyUpgrade", "energy", "energy") || this;
        _this.type = "energy";
        _this.setMaxStack(8);
        return _this;
    }
    EnergyUpgrade.prototype.onNameOverride = function (item, name) {
        return name;
    };
    return EnergyUpgrade;
}(UpgradeModule));
ItemRegistry.registerItem(new EnergyUpgrade());
MaterialRegistry.registerDust("sulfur");
MaterialRegistry.registerDust("dimond");
MaterialRegistry.registerDust("emerald");
MaterialRegistry.registerDust("coal");
MaterialRegistry.registerDust("charcoal");
MaterialRegistry.registerDust("fluorite");
MaterialRegistry.registerDust("lapis_lazuli");
MaterialRegistry.registerDust("lithium");
MaterialRegistry.registerDust("obsidian");
MaterialRegistry.registerDust("quartz");
MaterialRegistry.registerDust("gold");
MaterialRegistry.registerDust("iron");
MaterialRegistry.registerDust("netherite");
MaterialRegistry.registerAlloy("steel", MiningLevel.IRON, 4);
MaterialRegistry.registerAlloy("bronze", MiningLevel.IRON, 4);
MaterialRegistry.registerAlloy("refined_obsidian", MiningLevel.OBSIDIAN, 4);
MaterialRegistry.registerResource("osmium", MiningLevel.STONE, 2);
MaterialRegistry.registerResource("copper", MiningLevel.STONE, 2);
MaterialRegistry.registerResource("tin", MiningLevel.STONE, 3);
MaterialRegistry.registerResource("lead", MiningLevel.STONE, 3);
MaterialRegistry.registerResource("uranium", MiningLevel.IRON, 4);
var MaterialRegistry;
(function (MaterialRegistry) {
    function registerInfuserAlloy(id) {
        var name = "item.mekanism.alloy_" + id; // item.mekanism.alloy_
        var _id = id.charAt(0).toUpperCase() + id.slice(1);
        ItemRegistry.createItem("alloy" + _id, { name: name, icon: "alloy_" + id });
    }
    MaterialRegistry.registerInfuserAlloy = registerInfuserAlloy;
    function registerCircuit(id) {
        var name = "item.mekanism.".concat(id, "_control_circuit"); // item.mekanism.{$advanced}_control_circuit
        var _id = id.charAt(0).toUpperCase() + id.slice(1);
        ItemRegistry.createItem("circuit" + _id, { name: name, icon: "".concat(id, "_control_circuit") });
    }
    MaterialRegistry.registerCircuit = registerCircuit;
    function registerEnrich(id) {
        var name = "item.mekanism.enriched_" + id; // item.mekanism.{$advanced}_control_circuit
        var _id = id.charAt(0).toUpperCase() + id.slice(1);
        ItemRegistry.createItem("enriched" + _id, { name: name, icon: "enriched_" + id });
    }
    MaterialRegistry.registerEnrich = registerEnrich;
})(MaterialRegistry || (MaterialRegistry = {}));
// alloy
MaterialRegistry.registerInfuserAlloy("infused");
MaterialRegistry.registerInfuserAlloy("reinforced");
MaterialRegistry.registerInfuserAlloy("atomic");
// circuit
MaterialRegistry.registerCircuit("basic");
MaterialRegistry.registerCircuit("advanced");
MaterialRegistry.registerCircuit("elite");
MaterialRegistry.registerCircuit("ultimate");
// enrich
MaterialRegistry.registerEnrich("iron"); // dust
MaterialRegistry.registerEnrich("redstone");
MaterialRegistry.registerEnrich("coal");
MaterialRegistry.registerEnrich("diamond");
MaterialRegistry.registerEnrich("tin");
MaterialRegistry.registerEnrich("gold");
MaterialRegistry.registerEnrich("osidian");
//
ItemRegistry.createItem("bioFuel", {
    name: "item.mekanism.bio_fuel", icon: "bio_fuel"
});
SeparatorRecipe.add({
    liqIn: { liquid: "water", amount: 2 },
    gasOut1: { gas: "hydrogen_gas", amount: 2 },
    gasOut2: { gas: "oxygen_gas", amount: 1 }
});
Callback.addCallback("PreLoaded", function () {
    // redstone
    InfuserRecipe.add({
        type: "redstone",
        infuser_use: 10,
        input: { id: VanillaItemID.redstone, count: 1, data: 0 },
        output: { id: ItemID.alloyInfused, count: 1, data: 0 }
    });
    InfuserRecipe.add({
        type: "redstone",
        infuser_use: 20,
        input: { id: ItemID.ingotOsmium, count: 1, data: 0 },
        output: { id: ItemID.circuitBasic, count: 1, data: 0 }
    });
    // coal 
    InfuserRecipe.add({
        type: "coal",
        infuser_use: 10,
        input: { id: VanillaItemID.iron_ingot, count: 1, data: 0 },
        output: { id: ItemID.enrichedIron, count: 1, data: 0 }
    });
    InfuserRecipe.add({
        type: "coal",
        infuser_use: 10,
        input: { id: ItemID.enrichedIron, count: 1, data: 0 },
        output: { id: ItemID.dustSteel, count: 1, data: 0 }
    });
    // diamond 
    InfuserRecipe.add({
        type: "diamond",
        infuser_use: 20,
        input: { id: ItemID.alloyInfused, count: 1, data: 0 },
        output: { id: ItemID.alloyReinforced, count: 1, data: 0 }
    });
    InfuserRecipe.add({
        type: "diamond",
        infuser_use: 10,
        input: { id: ItemID.dustObsidian, count: 1, data: 0 },
        output: { id: ItemID.dustRefinedObsidian, count: 1, data: 0 }
    });
    // obsidian
    InfuserRecipe.add({
        type: "obsidian",
        infuser_use: 40,
        input: { id: ItemID.alloyReinforced, count: 1, data: 0 },
        output: { id: ItemID.alloyAtomic, count: 1, data: 0 }
    });
    // Tin
    InfuserRecipe.add({
        type: "tin",
        infuser_use: 10,
        input: { id: ItemID.dustCopper, count: 3, data: 0 },
        output: { id: ItemID.dustBronze, count: 4, data: 0 }
    });
    InfuserRecipe.add({
        type: "tin",
        infuser_use: 10,
        input: { id: ItemID.ingotCopper, count: 3, data: 0 },
        output: { id: ItemID.ingotBronze, count: 4, data: 0 }
    });
    //  Fungi
    InfuserRecipe.add({
        type: "fungi",
        infuser_use: 10,
        input: { id: VanillaBlockID.crimson_nylium, count: 1, data: 0 },
        output: { id: VanillaBlockID.warped_nylium, count: 1, data: 0 }
    });
    InfuserRecipe.add({
        type: "fungi",
        infuser_use: 10,
        input: { id: VanillaBlockID.netherrack, count: 1, data: 0 },
        output: { id: VanillaBlockID.crimson_nylium, count: 1, data: 0 }
    });
    // Bio
});
GasRegister.registerGas("oxygen", "Oxygen", true, ["oxygen_gas"]);
GasRegister.registerGas("hydrogen", "Hydrogen", true, ["hydrogen_gas"]);
GasRegister.registerGas("chlorine", "Clorine", true, ["chlorine_gas"]);
GasRegister.registerGas("sulfur_dioxide", "Sulfur Dioxide", true, ["sulfur_dioxide_gas"]);
GasRegister.registerGas("sulfur_trioxide", "Sulfur Trioxide", true, ["sulfur_trioxide_gas"]);
// WTF
GasRegister.registerGas("sodium", "Sodium", true, ["sodium"]);
//
BlockRegistry.createBlock("steelCasing", [
    { name: "block.mekanism.steel_casing", texture: [["steel_casing", 0]], inCreative: true }
]);
Callback.addCallback("PreLoaded", function () {
    Recipes.addShaped({ id: BlockID.steelCasing, count: 1, data: 0 }, [
        "sgs",
        "gog",
        "sgs"
    ], ['s', ItemID.ingotSteel, 0, 'o', ItemID.ingotOsmium, 0, 'g', 20, 0]);
});
BlockRegistry.createBlock("metallurgicInfuser", [
    { name: "Metallurgic Infuser", texture: [["MID", 0], ["MIT", 0], ["MIB", 0], ["MIF", 0], ["MIR1", 0], ["MIR", 0]], inCreative: true }
]);
BlockRegistry.setBlockMaterial(BlockID.metallurgicInfuser, "stone", 1);
// TileRenderer.setHandAndUiModel(BlockID.metallurgicInfuser, 0, [["MID", 0], ["MIT", 0], ["MIB", 0], ["MIF", 0], ["MIR1", 0], ["MIR", 0]])
// TileRenderer.setStandardModelWithRotation(BlockID.metallurgicInfuser, 2, [["MID", 0], ["MIT", 0], ["MIB", 0], ["MIF", 0], ["MIR1", 0], ["MIR", 0]])
// TileRenderer.registerModelWithRotation(BlockID.metallurgicInfuser, 2, [["MID", 0], ["MIT", 0], ["MIB", 0], ["MIF", 0], ["MIR1", 0], ["MIR", 0]])
// TileRenderer.setRotationFunction(BlockID.metallurgicInfuser);
MekModel.setInventoryModel(new ItemStack(BlockID["metallurgicInfuser"], 1, 0), "metallurgic_infuser", "metallurgic_infuser", {
    translate: [0.25, 0, 0], scale: [1.50, 1.50, 1.50], invertV: false, noRebuild: false
}, [0, 0, -15]);
MekModel.setHandModel(new ItemStack(BlockID["metallurgicInfuser"], 1, 0), "metallurgic_infuser", "metallurgic_infuser", {
    translate: [0.25, 0, 0], scale: [2.5, 2.5, 2.5], invertV: false, noRebuild: false
});
MekModel.registerModelWithRotation(BlockID["metallurgicInfuser"], "resources/res/models/metallurgic_infuser");
Callback.addCallback("PreLoaded", function () {
    Recipes.addShaped({ id: BlockID.metallurgicInfuser, count: 1, data: 0 }, ["ese",
        "pgp",
        "ese"], ['e', VanillaItemID.iron_ingot, 0, 's', VanillaBlockID.furnace, 0, 'p', VanillaItemID.redstone, 0, 'g', ItemID.ingotOsmium, 0]);
});
var GuiMetallurgicInfuser = new UI.Window({
    location: { x: 0, y: 0, width: 1000, height: UI.getScreenHeight() },
    drawing: [
        { type: "background", color: Color.argb(90, 0, 0, 0) },
        { type: "bitmap", x: 350, y: 150, bitmap: "BarBg", scale: GUI_BAR_STANDARD_SCALE },
        { type: "bitmap", x: 950, y: 150, bitmap: "BarBg", scale: GUI_BAR_STANDARD_SCALE },
        { type: "bitmap", x: 555, y: 245, bitmap: "GuiProgress", scale: GUI_BAR_STANDARD_SCALE },
    ],
    elements: (function () {
        var offset = (UI.getScreenHeight() - 415) / 2;
        var elems = {
            "fuelScale": { type: "scale", x: 350 + GUI_BAR_STANDARD_SCALE, y: 150 + GUI_BAR_STANDARD_SCALE, direction: 1, value: 0, bitmap: "ScaleCoal", scale: GUI_BAR_STANDARD_SCALE },
            "energyScale": { type: "scale", x: 950 + GUI_BAR_STANDARD_SCALE, y: 150 + GUI_BAR_STANDARD_SCALE, direction: 1, value: 0, bitmap: "GuiPowerBarScale", scale: GUI_BAR_STANDARD_SCALE },
            "progressScale": { type: "scale", x: 555, y: 245, direction: 0, value: 0, bitmap: "GuiProgressScale", scale: GUI_BAR_STANDARD_SCALE },
            "slotEnergy": { type: "slot", x: 820, y: 150 },
            "slotFuel": { type: "slot", x: 380, y: 150 },
            "slotInput": { type: "slot", x: 480, y: 220 },
            "slotResult": { type: "slot", x: 720, y: 220 },
            "slotUpgrade1": { type: "slot", x: 880, y: 50 + 2 * GUI_SCALE },
            "slotUpgrade2": { type: "slot", x: 880, y: 50 + 21 * GUI_SCALE },
            "dump": {
                type: "button",
                x: 380,
                y: 300,
                bitmap: "dump",
                scale: 2.2,
                clicker: {
                    onClick: function (_, container) {
                        container.sendEvent("dump", {});
                    }
                }
            }
        };
        for (var i = 9; i < 36; i++)
            elems["slotInv".concat(i)] = { type: "invSlot", x: 296.5 + (i % 9) * 45, y: offset + 207 + Math.floor((i - 9) / 9) * 45, index: i, size: 47 };
        for (var i = 0; i < 9; i++)
            elems["slotInv".concat(i)] = { type: "invSlot", x: 296.5 + i * 45, y: offset + 352, index: i, size: 47 };
        return elems;
    })()
});
GuiMetallurgicInfuser.setInventoryNeeded(true);
GuiMetallurgicInfuser.setCloseOnBackPressed(true);
var Machine;
(function (Machine) {
    var Infuser = /** @class */ (function (_super) {
        __extends(Infuser, _super);
        function Infuser() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.defaultValues = {
                energy: 0,
                progress: 0
            };
            _this.defaultEnergyStorage = 20000;
            _this.defaultEnergyConsume = 20;
            _this.defaultSpeed = 1;
            _this.processTime = 200;
            _this.upgrades = ["speed", "energy"];
            return _this;
        }
        Infuser.prototype.getScreenByName = function (screenName, container) {
            return GuiMetallurgicInfuser;
        };
        Infuser.prototype.useUpgrade = function () {
            var upgrades = UpgradesAPI.useUpgrade(this);
            this.energyConsume = upgrades.getEnergyUsage(this.defaultEnergyConsume);
            this.energyStorage = upgrades.getEnergyCapacity(this.defaultEnergyStorage);
            this.speed = upgrades.getSpeed(this.defaultSpeed);
            return upgrades;
        };
        Infuser.prototype.setupContainer = function () {
            var _this = this;
            this.infuserTank = this.addLiquidTank("infuser_tank", 10000, ["infuser_coal", "infuser_redstone"]);
            StorageInterface.setGlobalValidatePolicy(this.container, function (name, id, amount, data) {
                if (name.startsWith("slotUpgrade"))
                    return UpgradesAPI.isValidUpgrade(id, _this);
                if (name == "slotInput")
                    return InfuserRecipe.isValidInput(new ItemStack(id, amount, data), _this.infuserTank.getLiquidStored());
                if (name.startsWith("slotFuel"))
                    return Infuser_Type.isInfuserType(new ItemStack(id, amount, data));
                if (name == "slotEnergy")
                    return ChargeItemRegistry.isValidStorage(id, "Rf", 1);
                return false;
            });
        };
        Infuser.prototype.initFuel = function () {
            var fuelSlot = this.container.getSlot("slotFuel");
            var fuel = Infuser_Type.getTypeFromItem(fuelSlot.id);
            // check storage
            if (this.infuserTank.getLiquidStored() != fuel.type) {
                return;
            }
            // is full ?
            if (this.infuserTank.getAmount(fuel.type) >= (10000 - fuel.value)) {
                return;
            }
            // FILL TIME
            this.infuserTank.addLiquid(fuel.type, fuel.value);
            fuelSlot.count--;
            fuelSlot.validate();
            fuelSlot.markDirty();
            this.infuserTank.updateUiScale("fuelScale");
            this.container.sendChanges();
        };
        Infuser.prototype.onTick = function () {
            this.useUpgrade();
            this.initFuel();
            var type = this.infuserTank.getLiquidStored();
            var slotInput = this.container.getSlot("slotInput");
            var recipe = InfuserRecipe.get(type, slotInput);
            var newActive = false;
            if (recipe && this.infuserTank.getAmount(recipe.type) >= recipe.infuser_use) {
                var slotResult = this.container.getSlot("slotResult");
                if ((slotResult.id == recipe.output.id && slotResult.data == recipe.output.data || 0 && slotResult.count <= Item.getMaxStack(slotResult.id) - recipe.output.count) || !slotResult.id) {
                    if (this.data.energy >= this.energyConsume) {
                        newActive = true;
                        this.data.progress += this.speed;
                        this.data.energy -= this.energyConsume;
                        // } else {
                        // not enough energy
                    }
                    if (this.data.progress >= this.processTime) {
                        slotInput.count--;
                        slotInput.markDirty();
                        slotResult.id = recipe.output.id;
                        slotResult.data = recipe.output.data;
                        slotResult.count += recipe.output.count;
                        slotResult.extra = recipe.output.extra;
                        slotResult.markDirty();
                        this.infuserTank.getLiquid(recipe.type, recipe.infuser_use);
                    }
                    // } else {
                    //    // Error_Log[OUTPUT ERROR]
                }
            }
            else if (!slotInput.id) {
                this.data.progress = 0;
            }
            //re-fill
            this.initFuel();
            this.dischargeSlot("slotEnergy");
            this.container.setScale("progressScale", this.data.progress / this.processTime || 0);
            this.container.setScale("energyScale", this.getRelativeEnergy());
            this.container.sendChanges();
        };
        Infuser.prototype.getEnergyStorage = function () {
            return this.energyStorage;
        };
        Infuser.prototype.dump = function () {
            var taken_amount = this.infuserTank.isEmpty() ? this.infuserTank.getLiquid(this.infuserTank.getAmount(this.infuserTank.getLiquidStored())) : 0;
            if (taken_amount)
                this.initFuel();
            this.data.progress = 0;
        };
        __decorate([
            Machine.ContainerEvent(Side.Server)
        ], Infuser.prototype, "dump", null);
        return Infuser;
    }(Machine.ConfigMachine));
    Machine.Infuser = Infuser;
    MachineRegistry.registerPrototype(BlockID.metallurgicInfuser, new Infuser());
    StorageInterface.createInterface(BlockID.metallurgicInfuser, {
        slots: {
            "slotFuel": { input: true },
            "slotInput": { input: true },
            "slotResult": { output: true }
        }
    });
})(Machine || (Machine = {}));
BlockRegistry.createBlock("enrichmentChamber", [
    { name: "Enrichment Chamber", texture: [["enrichBottom", 0], ["enrichTop", 0], ["enrichBack", 0], ["enrichFront", 0], ["enrichLeft", 0], ["enrichRight", 0]] }
]);
BlockRegistry.setBlockMaterial(BlockID.enrichmentChamber, "stone", 1);
TileRenderer.setHandAndUiModel(BlockID.enrichmentChamber, 0, [["enrichBottom", 0], ["enrichTop", 0], ["enrichBack", 0], ["enrichFront", 0], ["enrichLeft", 0], ["enrichRight", 0]]);
TileRenderer.setStandardModelWithRotation(BlockID.enrichmentChamber, 2, [["enrichBottom", 0], ["enrichTop", 0], ["enrichBack", 0], ["enrichFront", 0], ["enrichLeft", 0], ["enrichRight", 0]]);
TileRenderer.registerModelWithRotation(BlockID.enrichmentChamber, 2, [["enrichBottom", 0], ["enrichTop", 0], ["enrichBack", 0], ["enrichFront_active", 0], ["enrichLeft", 0], ["enrichRight", 0]]);
TileRenderer.setRotationFunction(BlockID.enrichmentChamber);
var guiEnrichmentChamber = new UI.StandardWindow({
    standard: {
        header: { text: { text: "Enrichment Chamber" } },
        inventory: { standard: true },
        background: { standard: true }
    },
    drawing: [{ type: "bitmap", x: 950, y: 150, bitmap: "BarBg", scale: GUI_BAR_STANDARD_SCALE },
        { type: "bitmap", x: 630, y: 230, bitmap: "GuiProgressC", scale: GUI_BAR_STANDARD_SCALE },
        { type: "bitmap", x: 538, y: 230, bitmap: "GuiArrowUP", scale: GUI_BAR_STANDARD_SCALE }],
    elements: {
        "energyScale": { type: "scale", x: 950 + GUI_BAR_STANDARD_SCALE, y: 150 + GUI_BAR_STANDARD_SCALE, direction: 1, value: 0, bitmap: "GuiPowerBarScale", scale: GUI_BAR_STANDARD_SCALE },
        "progressScale": { type: "scale", x: 633, y: 233, direction: 0, value: 0, bitmap: "GuiProgressCScale", scale: GUI_BAR_STANDARD_SCALE },
        "slotEnergy": { type: "slot", x: 520, y: 283 },
        "slotInput": { type: "slot", x: 520, y: 165 },
        "slotResult": { type: "slot", x: 750, y: 195, size: 100 }
    }
});
var Machine;
(function (Machine) {
    var EnrichmentChamber = /** @class */ (function (_super) {
        __extends(EnrichmentChamber, _super);
        function EnrichmentChamber() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.defaultValues = {
                energy: 0,
                progress: 0
            };
            _this.defaultEnergyStorage = 20000;
            _this.defaultEnergyConsume = 20;
            _this.defaultSpeed = 1;
            _this.processTime = 200;
            _this.upgrades = ["speed", "energy"];
            return _this;
        }
        EnrichmentChamber.prototype.getScreenByName = function (screenName, container) {
            return guiEnrichmentChamber;
        };
        EnrichmentChamber.prototype.useUpgrade = function () {
            var upgrades = UpgradesAPI.useUpgrade(this);
            this.energyConsume = upgrades.getEnergyUsage(this.defaultEnergyConsume);
            this.energyStorage = upgrades.getEnergyCapacity(this.defaultEnergyStorage);
            this.speed = upgrades.getSpeed(this.defaultSpeed);
            return upgrades;
        };
        EnrichmentChamber.prototype.setupContainer = function () {
            var _this = this;
            StorageInterface.setGlobalValidatePolicy(this.container, function (name, id, amount, data) {
                if (name.startsWith("slotUpgrade"))
                    return UpgradesAPI.isValidUpgrade(id, _this);
                if (name == "slotInput")
                    return true;
                return false;
            });
        };
        EnrichmentChamber.prototype.onTick = function () {
            this.useUpgrade();
            var slotInput = this.container.getSlot("slotInput");
            var recipe = EnrichRecipe.get(slotInput);
            var newActive = false;
            if (recipe) {
                var slotResult = this.container.getSlot("slotResult");
                if ((slotResult.id == recipe.output.id && slotResult.data == recipe.output.data || 0 && slotResult.count <= Item.getMaxStack(slotResult.id) - recipe.output.count) || !slotResult.id) {
                    if (this.data.energy >= this.energyConsume) {
                        newActive = true;
                        this.data.progress += this.speed;
                        this.data.energy -= this.energyConsume;
                        // } else {
                        // not enough energy
                    }
                    if (this.data.progress >= this.processTime) {
                        slotInput.count--;
                        slotInput.markDirty();
                        slotResult.id = recipe.output.id;
                        slotResult.data = recipe.output.data;
                        slotResult.count += recipe.output.count;
                        slotResult.extra = recipe.output.extra;
                        slotResult.markDirty();
                    }
                    // } else {
                    //    // Error_Log[OUTPUT ERROR]
                }
            }
            else if (!slotInput.id) {
                this.data.progress = 0;
            }
            this.container.setScale("progressScale", this.data.progress / this.processTime || 0);
            this.container.setScale("energyScale", this.getRelativeEnergy());
            this.container.sendChanges();
        };
        EnrichmentChamber.prototype.getEnergyStorage = function () {
            return this.energyStorage;
        };
        return EnrichmentChamber;
    }(Machine.ConfigMachine));
    Machine.EnrichmentChamber = EnrichmentChamber;
    MachineRegistry.registerPrototype(BlockID.enrichmentChamber, new EnrichmentChamber());
})(Machine || (Machine = {}));
BlockRegistry.createBlock("energizedSmelter", [
    { name: "Energized Smelter", texture: [["melterBottom", 0], ["melterTop", 0], ["melterBack", 0], ["melterFront", 0], ["melterSide", 0], ["melterSide", 0]], inCreative: true }
]);
BlockRegistry.setBlockMaterial(BlockID.energizedSmelter, "stone", 1);
TileRenderer.setHandAndUiModel(BlockID.energizedSmelter, 0, [["melterBottom", 0], ["melterTop", 0], ["melterBack", 0], ["melterFront", 0], ["melterSide", 0], ["melterSide", 0]]);
TileRenderer.setStandardModelWithRotation(BlockID.energizedSmelter, 2, [["melterBottom", 0], ["melterTop", 0], ["melterBack", 0], ["melterFront", 0], ["melterSide", 0], ["melterSide", 0]]);
TileRenderer.registerModelWithRotation(BlockID.energizedSmelter, 2, [["melterBottom", 0], ["melterTop_active", 0], ["melterBack", 0], ["melterFront_active", 0], ["melterSide", 0], ["melterSide", 0]]);
TileRenderer.setRotationFunction(BlockID.energizedSmelter);
var guiEnergizedSmelter = new UI.StandardWindow({
    standard: {
        header: { text: { text: "Energized Smelter" } },
        inventory: { standard: true },
        background: { standard: true }
    },
    drawing: [
        { type: "bitmap", x: 950, y: 150, bitmap: "BarBg", scale: GUI_BAR_STANDARD_SCALE },
        { type: "bitmap", x: 538, y: 230, bitmap: "GuiArrowUP", scale: GUI_BAR_STANDARD_SCALE },
        { type: "bitmap", x: 630, y: 230, bitmap: "GuiProgressC", scale: GUI_BAR_STANDARD_SCALE },
    ],
    elements: {
        "energyScale": { type: "scale", x: 950 + GUI_BAR_STANDARD_SCALE, y: 150 + GUI_BAR_STANDARD_SCALE, direction: 1, value: 0, bitmap: "GuiPowerBarScale", scale: GUI_BAR_STANDARD_SCALE },
        "progressScale": { type: "scale", x: 633, y: 233, direction: 0, value: 0, bitmap: "GuiProgressCScale", scale: GUI_BAR_STANDARD_SCALE },
        "slotEnergy": { type: "slot", x: 525, y: 275 },
        "slotInput": { type: "slot", x: 525, y: 155 },
        "slotResult": { type: "slot", x: 750, y: 195, size: 100 }
    }
});
var Machine;
(function (Machine) {
    var Furnace = /** @class */ (function (_super) {
        __extends(Furnace, _super);
        function Furnace() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.defaultValues = {
                energy: 0,
                progress: 0
            };
            _this.defaultEnergyStorage = 20000;
            _this.defaultEnergyConsume = 20;
            _this.defaultSpeed = 1;
            _this.processTime = 200;
            _this.upgrades = ["speed", "energy"];
            return _this;
        }
        Furnace.prototype.getScreenByName = function (screenName, container) {
            return GuiMetallurgicInfuser;
        };
        Furnace.prototype.useUpgrade = function () {
            var upgrades = UpgradesAPI.useUpgrade(this);
            this.energyConsume = upgrades.getEnergyUsage(this.defaultEnergyConsume);
            this.energyStorage = upgrades.getEnergyCapacity(this.defaultEnergyStorage);
            this.speed = upgrades.getSpeed(this.defaultSpeed);
            return upgrades;
        };
        Furnace.prototype.setupContainer = function () {
            var _this = this;
            StorageInterface.setGlobalValidatePolicy(this.container, function (name, id, amount, data) {
                if (name.startsWith("slotUpgrade"))
                    return UpgradesAPI.isValidUpgrade(id, _this);
                if (name == "slotInput")
                    return !!Recipes.getFurnaceRecipeResult(id, data, "iron");
                if (name.startsWith("slotFuel"))
                    return Infuser_Type.isInfuserType(new ItemStack(id, amount, data));
                if (name == "slotEnergy")
                    return ChargeItemRegistry.isValidStorage(id, "Rf", 1);
                return false;
            });
        };
        Furnace.prototype.onTick = function () {
            this.useUpgrade();
            var slotInput = this.container.getSlot("slotInput");
            var result = Recipes.getFurnaceRecipeResult(slotInput.id, slotInput.data, "iron");
            var newActive = false;
            if (result) {
                var resultSlot = this.container.getSlot("slotResult");
                if (resultSlot.id == result.id && resultSlot.count + result.count <= 64 || !resultSlot.id) {
                    if (this.data.energy >= this.energyConsume) {
                        this.data.energy -= this.energyConsume;
                        this.data.progress += this.energyConsume;
                        newActive = true;
                    }
                    if (this.data.progress >= this.processTime) {
                        slotInput.setSlot(slotInput.id, slotInput.count - 1, slotInput.data);
                        slotInput.validate();
                        resultSlot.setSlot(result.id, resultSlot.count + 1, result.data);
                        this.container.validateAll();
                        this.data.progress = 0;
                    }
                }
            }
            else {
                this.data.progress = 0;
            }
            this.dischargeSlot("slotEnergy");
            this.container.setScale("progressScale", this.data.progress / this.processTime || 0);
            this.container.setScale("energyScale", this.getRelativeEnergy());
            this.container.sendChanges();
        };
        Furnace.prototype.getEnergyStorage = function () {
            return this.energyStorage;
        };
        return Furnace;
    }(Machine.ConfigMachine));
    Machine.Furnace = Furnace;
    MachineRegistry.registerPrototype(BlockID.energizedSmelter, new Furnace());
})(Machine || (Machine = {}));
BlockRegistry.createBlock("electricPump", [
    { name: "Electric Pump", texture: [["steel_casing", 0]] }
]);
BlockRegistry.setBlockMaterial(BlockID.electricPump, "stone", 1);
TileRenderer.setRotationFunction(BlockID["electricPump"]);
(function () {
    var mesh, model, render;
    for (var i = 0; i < 4; i++) {
        mesh = new RenderMesh();
        model = new BlockRenderer.Model(mesh);
        render = new ICRender.Model();
        mesh.setBlockTexture("electric_pump", 0);
        mesh.importFromFile(__dir__ + "resources/res/models/electricPump_" + i + ".obj", "obj", null);
        render.addEntry(model);
        BlockRenderer.setStaticICRender(BlockID.electricPump, i, render);
        ItemModel.getFor(BlockID.electricPump, i).setModel(render);
    }
})();
var guiPump = new UI.StandardWindow({
    standard: {
        header: { text: { text: "Pump" } },
        inventory: { standard: true },
        background: { standard: true }
    },
    drawing: [
        { type: "bitmap", x: 950, y: 150, bitmap: "BarBg", scale: GUI_BAR_STANDARD_SCALE },
        { type: "bitmap", x: 400, y: 88, bitmap: "BigFuelBG", scale: GUI_SCALE },
    ],
    elements: {
        "energyScale": { type: "scale", x: 950 + GUI_BAR_STANDARD_SCALE, y: 150 + GUI_BAR_STANDARD_SCALE, direction: 1, value: 0, bitmap: "GuiPowerBarScale", scale: GUI_BAR_STANDARD_SCALE },
        "liquidScale": { type: "scale", x: 400, y: 88, direction: 1, bitmap: "BigFuelBG", overlay: "OverBGFuel", scale: GUI_SCALE },
        "slotLiquid1": { type: "slot", x: 400 + 91 * GUI_SCALE, y: 50 + 12 * GUI_SCALE },
        "slotLiquid2": { type: "slot", x: 400 + 91 * GUI_SCALE, y: 50 + 39 * GUI_SCALE },
    }
});
var Machine;
(function (Machine) {
    var ElectricPump = /** @class */ (function (_super) {
        __extends(ElectricPump, _super);
        function ElectricPump() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.defaultValues = {
                energy: 0,
                progress: 0
            };
            _this.defaultEnergyStorage = 20000;
            _this.defaultEnergyConsume = 20;
            _this.processTime = 200;
            _this.upgrades = ["speed", "energy"];
            return _this;
        }
        ElectricPump.prototype.getScreenByName = function (screenName, container) {
            return guiPump;
        };
        ElectricPump.prototype.useUpgrade = function () {
            var upgrades = UpgradesAPI.useUpgrade(this);
            this.energyConsume = upgrades.getEnergyUsage(this.defaultEnergyConsume);
            this.energyStorage = upgrades.getEnergyCapacity(this.defaultEnergyStorage);
            this.speed = upgrades.getSpeedMultiplier();
            return upgrades;
        };
        ElectricPump.prototype.setupContainer = function () {
            var _this = this;
            this.liquidTank = this.addLiquidTank("fluid", 10000, ["water"]);
            StorageInterface.setGlobalValidatePolicy(this.container, function (name, id, amount, data) {
                if (name.startsWith("slotUpgrade"))
                    return UpgradesAPI.isValidUpgrade(id, _this);
                if (name == "slotLiquid1")
                    return true;
                return false;
            });
        };
        ElectricPump.prototype.onTick = function () {
            this.useUpgrade();
            var newActive = false;
            this.pumpLiquid();
            var slot1 = this.container.getSlot("slotLiquid1");
            var slot2 = this.container.getSlot("slotLiquid2");
            this.liquidTank.addLiquidToItem(slot1, slot2);
            this.liquidTank.updateUiScale("liquidScale");
            this.container.setScale("progressScale", this.data.progress / this.processTime || 0);
            this.container.setScale("energyScale", this.getRelativeEnergy());
            this.container.sendChanges();
        };
        ElectricPump.prototype.tickReq = function () {
            var speedUp = this.speed || 0;
            var tick_need = 10 * Math.pow(UpgradesAPI.EnergyMultiplier, -(speedUp) / 8);
            return Math.floor(tick_need); //floor(10*max -x/8)
        };
        ElectricPump.prototype.calcAmount = function () {
            var baseTick = 10;
            var baseAmount = 100;
            return Math.floor(baseTick / this.tickReq() * baseAmount);
        };
        ElectricPump.prototype.checkLiquid = function () {
            return this.region.getBlock(this.x, this.y - 1, this.z).id == VanillaBlockID.water;
        };
        ElectricPump.prototype.pumpLiquid = function () {
            var newActive = false;
            if (this.y > 0 && this.liquidTank.getAmount("water") <= 10000 - this.calcAmount() && this.data.energy >= this.energyConsume && this.checkLiquid()) {
                this.data.progress++;
            }
            if (this.data.progress >= this.tickReq()) {
                this.liquidTank.addLiquid("water", this.calcAmount());
                this.data.progress = 0;
            }
            this.setActive(newActive);
        };
        ElectricPump.prototype.getEnergyStorage = function () {
            return this.energyStorage;
        };
        ElectricPump.prototype.canReceiveEnergy = function (side, type) {
            return;
        };
        return ElectricPump;
    }(Machine.ConfigMachine));
    Machine.ElectricPump = ElectricPump;
    MachineRegistry.registerPrototype(BlockID.electricPump, new ElectricPump());
    MachineRegistry.createStorageInterface(BlockID.electricPump, {
        // slots: {
        // 	"slot1": {input: true},
        // 	"slot2": {output: true}
        // },
        // isValidInput: (item: ItemInstance) => {
        // 	return !!LiquidItemRegistry.getFullItem(item.id, item.data, "water")
        // },
        canTransportLiquid: function (liquid, side) {
            return side === EBlockSide.UP;
        }
    });
})(Machine || (Machine = {}));
BlockRegistry.createBlock("mekCrusher", [
    { name: "Crusher", texture: [["crusherBottom", 0], ["crusherTop", 0], ["crusherBack", 0], ["crusherFront", 0], ["crusherSide", 0], ["crusherSide", 0]], inCreative: true }
]);
BlockRegistry.setBlockMaterial(BlockID.mekCrusher, "stone", 1);
TileRenderer.setHandAndUiModel(BlockID.mekCrusher, 0, [["crusherBottom", 0], ["crusherTop", 0], ["crusherBack", 0], ["crusherFront", 0], ["crusherSide", 0], ["crusherSide", 0]]);
TileRenderer.setStandardModelWithRotation(BlockID.mekCrusher, 2, [["crusherBottom", 0], ["crusherTop", 0], ["crusherBack", 0], ["crusherFront", 0], ["crusherSide", 0], ["crusherSide", 0]]);
TileRenderer.registerModelWithRotation(BlockID.mekCrusher, 2, [["crusherBottom", 0], ["crusherTop_active", 0], ["crusherBack", 0], ["crusherFront", 0], ["crusherSide", 0], ["crusherSide", 0]]);
TileRenderer.setRotationFunction(BlockID.mekCrusher);
var guiCrusher = new UI.StandardWindow({
    standard: {
        header: { text: { text: "Crusher" } },
        inventory: { standard: true },
        background: { standard: true }
    },
    drawing: [
        { type: "bitmap", x: 565, y: 190, bitmap: "GuiProgressC", scale: GUI_BAR_STANDARD_SCALE },
        { type: "bitmap", x: 950, y: 150, bitmap: "GuiPowerBar", scale: GUI_BAR_STANDARD_SCALE },
        { type: "bitmap", x: 500, y: 190, bitmap: "GuiArrowUP", scale: GUI_BAR_STANDARD_SCALE },
    ],
    elements: {
        "energyScale": { type: "scale", x: 950 + GUI_BAR_STANDARD_SCALE, y: 150 + GUI_BAR_STANDARD_SCALE, direction: 1, value: 0, bitmap: "GuiPowerBarScale", scale: GUI_BAR_STANDARD_SCALE },
        "slotEnergy": { type: "slot", x: 480, y: 240 },
        "slotInput": { type: "slot", x: 480, y: 120 },
        "slotResult": { type: "slot", x: 680, y: 150, size: 100 },
        "progressScale": { type: "scale", x: 568, y: 193, direction: 0, value: 0, bitmap: "GuiProgressCScale", scale: GUI_BAR_STANDARD_SCALE },
    }
});
Callback.addCallback("PreLoaded", function () {
    Recipes.addShaped({ id: BlockID.mekCrusher, count: 1, data: 0 }, [
        "rbr",
        "lsl",
        "rbr"
    ], ['b', ItemID.circuitAdvanced, 0, 'r', 331, 0, 's', BlockID.steelCasing, 0, 'l', 325, 10]);
});
var Machine;
(function (Machine) {
    var Crusher = /** @class */ (function (_super) {
        __extends(Crusher, _super);
        function Crusher() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.defaultValues = {
                energy: 0,
                progress: 0
            };
            _this.defaultEnergyStorage = 20000;
            _this.defaultEnergyConsume = 20;
            _this.defaultSpeed = 1;
            _this.processTime = 200;
            _this.upgrades = ["speed", "energy"];
            return _this;
        }
        Crusher.prototype.getScreenByName = function (screenName, container) {
            return guiCrusher;
        };
        Crusher.prototype.useUpgrade = function () {
            var upgrades = UpgradesAPI.useUpgrade(this);
            this.energyConsume = upgrades.getEnergyUsage(this.defaultEnergyConsume);
            this.energyStorage = upgrades.getEnergyCapacity(this.defaultEnergyStorage);
            this.speed = upgrades.getSpeed(this.defaultSpeed);
            return upgrades;
        };
        Crusher.prototype.setupContainer = function () {
            var _this = this;
            StorageInterface.setGlobalValidatePolicy(this.container, function (name, id, amount, data) {
                if (name.startsWith("slotUpgrade"))
                    return UpgradesAPI.isValidUpgrade(id, _this);
                if (name == "slotInput")
                    return true;
                return false;
            });
        };
        Crusher.prototype.onTick = function () {
            this.useUpgrade();
            var slotInput = this.container.getSlot("slotInput");
            var recipe = CrusherRecipe.get(slotInput);
            var newActive = false;
            if (recipe) {
                var slotResult = this.container.getSlot("slotResult");
                if ((slotResult.id == recipe.output.id && slotResult.data == recipe.output.data || 0 && slotResult.count <= Item.getMaxStack(slotResult.id) - recipe.output.count) || !slotResult.id) {
                    if (this.data.energy >= this.energyConsume) {
                        newActive = true;
                        this.data.progress += this.speed;
                        this.data.energy -= this.energyConsume;
                        // } else {
                        // not enough energy
                    }
                    if (this.data.progress >= this.processTime) {
                        slotInput.count--;
                        slotInput.markDirty();
                        slotResult.id = recipe.output.id;
                        slotResult.data = recipe.output.data;
                        slotResult.count += recipe.output.count;
                        slotResult.extra = recipe.output.extra;
                        slotResult.markDirty();
                    }
                    // } else {
                    //    // Error_Log[OUTPUT ERROR]
                }
            }
            else if (!slotInput.id) {
                this.data.progress = 0;
            }
            this.container.setScale("progressScale", this.data.progress / this.processTime || 0);
            this.container.setScale("energyScale", this.getRelativeEnergy());
            this.container.sendChanges();
        };
        Crusher.prototype.getEnergyStorage = function () {
            return this.energyStorage;
        };
        return Crusher;
    }(Machine.ConfigMachine));
    Machine.Crusher = Crusher;
    MachineRegistry.registerPrototype(BlockID.mekCrusher, new Crusher());
})(Machine || (Machine = {}));
BlockRegistry.createBlock("electrolyticSeparator", [
    { name: "Electrolytic Separator", texture: [["ESD", 0], ["EST", 0], ["ESB", 0], ["ESF", 0], ["ESR", 0], ["ESL", 0]], inCreative: true }
]);
BlockRegistry.setBlockMaterial(BlockID.electrolyticSeparator, "stone", 1);
(function () {
    var mesh = new RenderMesh();
    mesh.importFromFile(__dir__ + "resources/res/models/" + "separator" + ".obj", "obj", null);
    ItemModel.getForWithFallback(BlockID["electrolyticSeparator"], 0).setModel(mesh, "res/terrain-atlas/models/item/electrolytic_separator");
})();
var guiElectrolyticSeparator = new UI.StandardWindow({
    standard: {
        header: { text: { text: "Electrolytic Separator" } },
        inventory: { standard: true },
        background: { standard: true }
    },
    drawing: [
        { type: "bitmap", x: 950, y: 150, bitmap: "GuiPowerBar", scale: GUI_BAR_STANDARD_SCALE },
        { type: "bitmap", x: 330, y: 150, bitmap: "MediumFuelBG", scale: GUI_BAR_STANDARD_SCALE },
        { type: "bitmap", x: 550, y: 180, bitmap: "SmallFuelBG", scale: GUI_BAR_STANDARD_SCALE },
        { type: "bitmap", x: 710, y: 180, bitmap: "SmallFuelBG", scale: GUI_BAR_STANDARD_SCALE },
        { type: "bitmap", x: 640, y: 210, bitmap: "GuiProgressD", scale: GUI_BAR_STANDARD_SCALE },
    ],
    elements: {
        "energyScale": { type: "scale", x: 950 + GUI_BAR_STANDARD_SCALE, y: 150 + GUI_BAR_STANDARD_SCALE, direction: 1, value: 0, bitmap: "GuiPowerBarScale", scale: GUI_BAR_STANDARD_SCALE },
        "liquidScale": { type: "scale", x: 330 + GUI_BAR_STANDARD_SCALE, y: 151 + GUI_BAR_STANDARD_SCALE, direction: 1, value: 0, bitmap: "WaterMediumScale", overlay: "OverMediumFuelBG", overlayOffset: { x: -GUI_BAR_STANDARD_SCALE, y: -GUI_BAR_STANDARD_SCALE }, scale: GUI_BAR_STANDARD_SCALE },
        "gasScale1": { type: "scale", x: 550 + GUI_BAR_STANDARD_SCALE, y: 180 + GUI_BAR_STANDARD_SCALE, direction: 1, value: 0, bitmap: "WaterSmallScale", overlay: "OverSmallFuelBG", overlayOffset: { x: -GUI_BAR_STANDARD_SCALE, y: -GUI_BAR_STANDARD_SCALE }, scale: GUI_BAR_STANDARD_SCALE },
        "gasScale2": { type: "scale", x: 710 + GUI_BAR_STANDARD_SCALE, y: 180 + GUI_BAR_STANDARD_SCALE, direction: 1, value: 0, bitmap: "WaterSmallScale", overlay: "OverSmallFuelBG", overlayOffset: { x: -GUI_BAR_STANDARD_SCALE, y: -GUI_BAR_STANDARD_SCALE }, scale: GUI_BAR_STANDARD_SCALE },
        "slotEnergy": { type: "slot", x: 880, y: 200 },
        "slotLiquid": { type: "slot", x: 400, y: 200 },
        "slotGas1": { type: "slot", x: 550, y: 290 },
        "slotGas2": { type: "slot", x: 710, y: 290 },
        "progressScale": { type: "scale", x: 640, y: 210, direction: 3, value: 0, bitmap: "GuiProgressDS", scale: GUI_BAR_STANDARD_SCALE },
        "textGas1": {
            type: "text", font: { size: 20, color: Color.YELLOW }, x: 550 + GUI_BAR_STANDARD_SCALE, y: 50, width: 100, height: 30, text: "", clicker: {
                onClick: function (_, container) {
                    container.sendEvent("switchMode", { tank: "left" });
                }
            }
        },
        "textGas2": {
            type: "text", font: { size: 20, color: Color.YELLOW }, x: 710 + GUI_BAR_STANDARD_SCALE, y: 50, width: 100, height: 30, text: "", clicker: {
                onClick: function (_, container) {
                    container.sendEvent("switchMode", { tank: "right" });
                }
            }
        },
    }
});
var Machine;
(function (Machine) {
    var ElectrolyticSeparator = /** @class */ (function (_super) {
        __extends(ElectrolyticSeparator, _super);
        function ElectrolyticSeparator() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.defaultValues = {
                energy: 0,
                progress: 0,
                mode: {
                    left: 0,
                    right: 0
                }
            };
            _this.defaultEnergyStorage = 20000;
            _this.defaultEnergyConsume = 400;
            _this.defaultSpeed = 1;
            _this.processTime = 200;
            _this.upgrades = ["speed", "energy"];
            return _this;
        }
        ElectrolyticSeparator.prototype.getScreenByName = function (screenName, container) {
            return guiElectrolyticSeparator;
        };
        ElectrolyticSeparator.prototype.useUpgrade = function () {
            var upgrades = UpgradesAPI.useUpgrade(this);
            this.energyConsume = upgrades.getEnergyUsage(this.defaultEnergyConsume);
            this.energyStorage = upgrades.getEnergyCapacity(this.defaultEnergyStorage);
            this.speed = upgrades.getSpeed(this.defaultSpeed);
            return upgrades;
        };
        ElectrolyticSeparator.prototype.setupContainer = function () {
            var _this = this;
            this.liquidTank = this.addLiquidTank("fuel_tank", 24000, SeparatorRecipe.getLiqIn());
            this.gasTank1 = this.addGasTank("result_tank_1", 2400, SeparatorRecipe.getGasLeft());
            this.gasTank2 = this.addGasTank("result_tank_2", 2400, SeparatorRecipe.getGasRight());
            StorageInterface.setGlobalValidatePolicy(this.container, function (name, id, amount, data) {
                if (name.startsWith("slotUpgrade"))
                    return UpgradesAPI.isValidUpgrade(id, _this);
                if (name == "slotEnergy")
                    return ChargeItemRegistry.isValidStorage(id, "Rf", 1);
                return false;
            });
        };
        ElectrolyticSeparator.prototype.onTick = function () {
            this.useUpgrade();
            var recipe = SeparatorRecipe.get(this.liquidTank.getLiquidStored(), this.liquidTank.getAmount());
            if (recipe && this.data.energy >= this.energyConsume && this.gasTank1.getAmount() <= 2400 - recipe.gasOut1.amount && this.gasTank2.getAmount() <= 2400 - recipe.gasOut2.amount) {
                this.data.energy -= this.energyConsume;
                this.liquidTank.getLiquid(recipe.liqIn.amount);
                this.gasTank1.addGas(recipe.gasOut1.gas, recipe.gasOut1.amount);
                this.gasTank2.addGas(recipe.gasOut2.gas, recipe.gasOut2.amount);
                this.liquidTank.updateUiScale("liquidScale");
            }
            this.updateTankStore("left");
            this.updateTankStore("right");
            this.liquidTank.getLiquidFromItem(this.container.getSlot("slotLiquid"), this.container.getSlot("slotLiquid"));
            this.gasTank1.addGasToItem(this.container.getSlot("slotGas1"), this.container.getSlot("slotGas1"));
            this.gasTank2.addGasToItem(this.container.getSlot("slotGas2"), this.container.getSlot("slotGas2"));
            this.dischargeSlot("slotEnergy");
            this.container.setScale("progressScale", this.data.progress / this.processTime || 0);
            this.container.setScale("energyScale", this.getRelativeEnergy());
            this.container.sendChanges();
        };
        ElectrolyticSeparator.prototype.getEnergyStorage = function () {
            return this.energyStorage;
        };
        ElectrolyticSeparator.prototype.updateTankStore = function (type) {
            var tank = type == "left" ? this.gasTank1 : this.gasTank2;
            var mode = this.data.mode[type];
            if (mode != TankMode.IDLE) {
                var current = tank.getGasStored();
                if (current != null) {
                    if (mode == TankMode.DUMPING) {
                        tank.getGas(tank.getAmount() / 400);
                    }
                    else { //mode == GasMode.DUMPING_EXCESS
                        var target = Math.floor(tank.getLimit() * 0.9);
                        var stored = tank.getAmount();
                        if (target < stored) {
                            //Dump excess that we need to get to the target (capping at our eject rate for how much we can dump at once)
                            tank.getGas(Math.min(stored - target, 250));
                        }
                    }
                }
            }
            this.gasTank1.updateUiScale("gasScale1");
            this.gasTank2.updateUiScale("gasScale2");
        };
        ElectrolyticSeparator.prototype.switchMode = function (container, window, windowContent, eventData) {
            var mode = this.data.mode[eventData.tank];
            mode = (mode + 1) % 2;
            this.updateTankStore(eventData.tank);
            switch (eventData.tank) {
                case "left":
                    this.gasTank1.updateUiScale("gasScale1");
                    break;
                case "right":
                    this.gasTank2.updateUiScale("gasScale2");
                    break;
            }
        };
        __decorate([
            Machine.ContainerEvent(Side.Server)
        ], ElectrolyticSeparator.prototype, "switchMode", null);
        return ElectrolyticSeparator;
    }(Machine.ConfigMachine));
    Machine.ElectrolyticSeparator = ElectrolyticSeparator;
    MachineRegistry.registerPrototype(BlockID.electrolyticSeparator, new ElectrolyticSeparator());
    StorageInterface.createInterface(BlockID.electrolyticSeparator, {
        slots: {}
    });
})(Machine || (Machine = {}));
BlockRegistry.createBlock("pressurizedReactionChamber", [
    { name: "Pressurized Reaction Chamber", texture: [["PRCD", 0], ["PRCT", 0], ["PRCB", 0], ["PRCF", 0], ["PRCL", 0], ["PRCR", 0]], inCreative: true }
]);
BlockRegistry.setBlockMaterial(BlockID.pressurizedReactionChamber, "stone", 1);
(function () {
    var mesh = new RenderMesh();
    mesh.importFromFile(__dir__ + "resources/res/models/" + "pressurized_reaction_chamber" + ".obj", "obj", null);
    ItemModel.getForWithFallback(BlockID["pressurizedReactionChamber"], 0).setModel(mesh, "res/terrain-atlas/models/item/pressurized_reaction_chamber");
})();
var Machine;
(function (Machine) {
    var BaseGenerator = /** @class */ (function (_super) {
        __extends(BaseGenerator, _super);
        function BaseGenerator() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        BaseGenerator.prototype.getMaxOutput = function () {
            return this.maxOutput || 0;
        };
        BaseGenerator.prototype.updateMaxOutputRaw = function (maxOutput) {
            this.maxOutput = maxOutput * 2;
        };
        BaseGenerator.prototype.energyTick = function (type, src) {
            var output = Math.min(this.data.energy, this.maxOutput);
            this.data.energy += src.add(output) - output;
        };
        BaseGenerator.prototype.powerNeed = function () {
            return this.getEnergyStorage() - this.data.energy;
        };
        return BaseGenerator;
    }(Machine.ProgressingMachine));
    Machine.BaseGenerator = BaseGenerator;
})(Machine || (Machine = {}));
// not ready not
// not ready not
var guiHeatGenerator = new UI.StandardWindow({
    standard: {
        header: { text: { text: "Heat Generator" } },
        inventory: { standard: true },
        background: { standard: true }
    },
    drawing: [
        { type: "bitmap", x: 530, y: 150, bitmap: "BigFuelBG", scale: GUI_BAR_STANDARD_SCALE },
        { type: "bitmap", x: 950, y: 150, bitmap: "BarBg", scale: GUI_BAR_STANDARD_SCALE },
    ],
    elements: {
        "fuelScale": { type: "scale", x: 530 + GUI_BAR_STANDARD_SCALE, y: 150 + GUI_BAR_STANDARD_SCALE, direction: 1, value: 0, bitmap: "BigEnergyScale", overlay: "OverBGFuel", overlayOffset: { x: -GUI_BAR_STANDARD_SCALE, y: -GUI_BAR_STANDARD_SCALE }, scale: GUI_BAR_STANDARD_SCALE },
        "energyScale": { type: "scale", x: 950 + GUI_BAR_STANDARD_SCALE, y: 150 + GUI_BAR_STANDARD_SCALE, direction: 1, value: 0, bitmap: "GuiPowerBarScale", scale: GUI_BAR_STANDARD_SCALE },
        "slotEnergy": { type: "slot", x: 780, y: 200 },
        "slotFuel": { type: "slot", x: 441, y: 200 },
        "textInfo1": { type: "text", x: 600, y: 330, width: 300, height: 30, text: "0/" },
        "textInfo2": { type: "text", x: 600, y: 360, width: 300, height: 30, text: "25000 mB" },
    }
});
var Machine;
(function (Machine) {
    var HeatGenerator = /** @class */ (function (_super) {
        __extends(HeatGenerator, _super);
        function HeatGenerator() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.defaultValues = {
                energy: 0
            };
            _this.THERMAL_EFFICIENCY = 0.5;
            _this.MAX_PRODUCTION = 200;
            return _this;
        }
        HeatGenerator.prototype.getScreenByName = function (screenName, container) {
            return guiHeatGenerator;
        };
        HeatGenerator.prototype.onInit = function () {
            this.lavaTank = this.addLiquidTank("lava", 24000, ["lava"]);
            this.heatCapacitor = new Machine.BasicHeatCapacitor(10, 5, 100, this.region.getBiomeTemperatureAt(this.x, this.y, this.z));
            if (this.region.getDimension() == EDimension.NETHER) {
                this.MAX_PRODUCTION += 100;
            }
            return _super.prototype.onInit.call(this);
        };
        HeatGenerator.prototype.getLava = function () {
            var lava_count = 0;
            if (this.region.getBlock(this.x, this.y + 1, this.z).id == VanillaBlockID.lava || VanillaBlockID.flowing_lava) {
                lava_count++;
            }
            else if (this.region.getBlock(this.x, this.y - 1, this.z).id == VanillaBlockID.lava || VanillaBlockID.flowing_lava) {
                lava_count++;
            }
            else if (this.region.getBlock(this.x, this.y, this.z + 1).id == VanillaBlockID.lava || VanillaBlockID.flowing_lava) {
                lava_count++;
            }
            else if (this.region.getBlock(this.x, this.y, this.z - 1).id == VanillaBlockID.lava || VanillaBlockID.flowing_lava) {
                lava_count++;
            }
            else if (this.region.getBlock(this.x + 1, this.y, this.z).id == VanillaBlockID.lava || VanillaBlockID.flowing_lava) {
                lava_count++;
            }
            else if (this.region.getBlock(this.x - 1, this.y, this.z).id == VanillaBlockID.lava || VanillaBlockID.flowing_lava) {
                lava_count++;
            }
            return lava_count;
        };
        HeatGenerator.prototype.fillOrBurn = function (slot) {
            if (slot.id) {
                if (LiquidItemRegistry.getItemLiquid(slot.id, slot.data) == "lava") {
                    var empty = LiquidItemRegistry.getEmptyItem(slot.id, slot.data);
                    slot.id = empty.id;
                    slot.data = empty.data;
                    this.lavaTank.addLiquid("lava", 1000);
                }
                else if (Recipes.getFuelBurnDuration(slot.id, slot.data) > 0) {
                    var amount = (Recipes.getFuelBurnDuration(slot.id, slot.data) * 1000) / Recipes.getFuelBurnDuration(VanillaItemID.lava_bucket, 0);
                    this.lavaTank.addLiquid("lava", amount);
                    slot.count--;
                    slot.markDirty();
                }
            }
        };
        HeatGenerator.prototype.onTick = function () {
            this.heatCapacitor.update();
            this.MAX_PRODUCTION += this.getLava() * 50;
            this.updateMaxOutputRaw(this.MAX_PRODUCTION);
            var fuelSlot = this.container.getSlot("slotFuel");
            this.fillOrBurn(fuelSlot);
            var prev = this.data.energy;
            this.heatCapacitor.handleHeat(this.getBoost());
            if (this.powerNeed() > 0) {
                var fluidRate = 10;
                if (this.lavaTank.getLiquid(fluidRate) == fluidRate) {
                    this.setActive(true);
                    this.heatCapacitor.handleHeat(200);
                }
                else {
                    this.setActive(false);
                }
            }
            else {
                this.setActive(false);
            }
            var loss = this.simulate();
            // let lastTransferLoss = loss.adjacentTransfer();
            // let lastEnvironmentLoss = loss.environmentTransfer();
            var producingEnergy = this.data.energy - prev;
            this.heatCapacitor.update();
            this.container.setText("textInfo1", this.lavaTank.getAmount() + "/");
            this.lavaTank.updateUiScale("fuelScale");
            this.container.setScale("energyScale", this.data.energy / this.getEnergyStorage());
        };
        HeatGenerator.prototype.getEnergyStorage = function () {
            return jToRF(160000);
        };
        HeatGenerator.prototype.getBoost = function () {
            if (!this.isLoaded) {
                return 0;
            }
            var boost = 0;
            var passiveLavaAmount = 50;
            if (!passiveLavaAmount) {
                //If neighboring lava blocks produce no energy, don't bother checking the sides for them
                boost = 0;
            }
            else {
                //Otherwise, calculate boost to apply from lava
                var lavaSides = this.getLava();
                // if (getBlockState().getFluidState().is(FluidTags.LAVA)) {
                //     //If the heat generator is lava-logged then add it as another side that is adjacent to lava for the heat calculations
                //     lavaSides++;
                // }
                boost = passiveLavaAmount * (lavaSides);
                if (this.region.getDimension() == EDimension.NETHER) {
                    boost += 100;
                }
            }
            return boost;
        };
        HeatGenerator.prototype.simulate = function () {
            var ambientTemp = this.region.getBiomeTemperatureAt(this.x, this.y, this.z);
            var temp = this.heatCapacitor.storedHeat; // Cant Port
            // 1 - Qc / Qh
            var carnotEfficiency = 1 - Math.min(ambientTemp, temp) / Math.max(ambientTemp, temp);
            var heatLost = this.THERMAL_EFFICIENCY * (temp - ambientTemp);
            this.heatCapacitor.handleHeat(-heatLost);
            var energyFromHeat = (Math.abs(heatLost) * carnotEfficiency);
            this.data.energy += Math.min(energyFromHeat, this.MAX_PRODUCTION);
            return Math.min(energyFromHeat, this.MAX_PRODUCTION);
        };
        return HeatGenerator;
    }(Machine.BaseGenerator));
    Machine.HeatGenerator = HeatGenerator;
})(Machine || (Machine = {}));
// not ready not
BlockRegistry.createBlock("solarGeneratorMek", [
    { name: "Solar Generator", texture: [["steel_casing", 0]] }
]);
BlockRegistry.setBlockMaterial(BlockID.solarGeneratorMek, "stone", 1);
MekModel.setInventoryModel(new ItemStack(BlockID["solarGeneratorMek"], 1, 0), "solar_generator", "solar_generator", {
    translate: [0.25, 0, 0.5], scale: [1.50, 1.50, 1.50], invertV: false, noRebuild: false
}, [0, 0, -15]);
MekModel.setHandModel(new ItemStack(BlockID["solarGeneratorMek"], 1, 0), "solar_generator", "solar_generator", {
    translate: [0.25, 0, 0], scale: [2.5, 2.5, 2.5], invertV: false, noRebuild: false
});
MekModel.registerModelWithRotation(BlockID["solarGeneratorMek"], "resources/res/models/solar_generator");
var Machine;
(function (Machine) {
    var SolarGenerator = /** @class */ (function (_super) {
        __extends(SolarGenerator, _super);
        function SolarGenerator() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.defaultValues = {
                energy: 0,
                canSeeSky: false
            };
            return _this;
        }
        SolarGenerator.prototype.onInit = function () {
            this.data.canSeeSky = this.region.canSeeSky(this.x, this.y + 1, this.z);
            return _super.prototype.onInit.call(this);
        };
        SolarGenerator.prototype.onTick = function () {
            if (this.solarCheck == null) {
                this.recheckSettings();
            }
            // ChargeItemRegistry.addEnergyToSlot()
            // Sort out if the generator can see the sun; we no longer check if it's raining here,
            // since under the new rules, we can still generate power when it's raining, albeit at a
            // significant penalty.
            var seesSun = this.checkCanSeeSun();
            if (seesSun && this.powerNeed() > 0) {
                this.setActive(true);
                var production = this.getProduction();
                this.data.energy += production;
            }
            else {
                this.setActive(false);
            }
        };
        SolarGenerator.prototype.recheckSettings = function () {
            if (!this.isLoaded) {
                return;
            }
            this.solarCheck = new SolarCheck(this.region, new Vector3(this.x, this.y, this.z));
            this.updateMaxOutputRaw(30 * this.solarCheck.getPeakMultiplier());
        };
        SolarGenerator.prototype.checkCanSeeSun = function () {
            if (this.solarCheck) {
                return false;
            }
            this.solarCheck.recheckCanSeeSun();
            return this.solarCheck.isSeeSun();
        };
        SolarGenerator.prototype.getProduction = function () {
            if (!this.region || !this.solarCheck) {
                return 0;
            }
            var brightness = this.getBrightnessMultiplier();
            //Production is a function of the peak possible output in this biome and sun's current brightness
            return 50 * (brightness * this.solarCheck.getGenerationMultiplier());
        };
        SolarGenerator.prototype.getBrightnessMultiplier = function () {
            return this.region.getLightLevel(this.x, this.y + 1, this.z);
        };
        SolarGenerator.prototype.getEnergyStorage = function () {
            return jToRF(96000);
        };
        return SolarGenerator;
    }(Machine.BaseGenerator));
    Machine.SolarGenerator = SolarGenerator;
    MachineRegistry.registerPrototype(BlockID.solarGeneratorMek, new SolarGenerator());
})(Machine || (Machine = {}));
var SolarCheck = /** @class */ (function () {
    function SolarCheck(world, pos) {
        this.world = world;
        this.pos = pos;
        // Consider the best temperature to be 0.8; biomes that are higher than that
        // will suffer an efficiency loss (semiconductors don't like heat); biomes that are cooler
        // get a boost. We scale the efficiency to around 30% so that it doesn't totally dominate
        var tempEff = 0.3 * (0.8 - this.world.getBiomeTemperatureAt(this.pos));
        // Treat rainfall as a proxy for humidity; any humidity works as a drag on overall efficiency.
        // As with temperature, we scale it so that it doesn't overwhelm production. Note the signedness
        // on the scaling factor. Also note that we only use rainfall as a proxy if it CAN rain; some dimensions
        // (like the End) have rainfall set, but can't actually support rain.
        var humidityEff = -0.3;
        this.peakMultiplier = 1.0 + tempEff + humidityEff;
    }
    SolarCheck.prototype.recheckCanSeeSun = function () {
        this.canSeeSun = this.world.canSeeSky(this.pos.x, this.pos.y + 1, this.pos.z);
    };
    SolarCheck.prototype.isSeeSun = function () {
        return this.canSeeSun;
    };
    SolarCheck.prototype.getPeakMultiplier = function () {
        return this.peakMultiplier;
    };
    SolarCheck.prototype.getGenerationMultiplier = function () {
        if (!this.canSeeSun) {
            return 0;
        }
        if ((World.getWeather().rain > 0 || World.getWeather().thunder > 0)) {
            //If the generator is in a biome where it can rain, and it's raining penalize production by 80%
            return this.peakMultiplier * 0.2;
        }
        return this.peakMultiplier;
    };
    return SolarCheck;
}());
// not ready not
BlockRegistry.createBlock("windGeneratorMek", [
    { name: "Wind Generator", texture: [["steel_casing", 0]] }
]);
BlockRegistry.setBlockMaterial(BlockID.windGeneratorMek, "stone", 1);
MekModel.setInventoryModel(new ItemStack(BlockID["windGeneratorMek"], 1, 0), "item/wind_generator_item", "wind_generator/wind_generator_item", {
    translate: [0.25, 0, 0.5], scale: [1.50, 1.50, 1.50], invertV: false, noRebuild: false
}, [0, 0, -15]);
MekModel.setHandModel(new ItemStack(BlockID["windGeneratorMek"], 1, 0), "item/wind_generator_item", "wind_generator/wind_generator_item", {
    translate: [0.25, 0, 0], scale: [2.5, 2.5, 2.5], invertV: false, noRebuild: false
});
MekModel.registerModelWithRotation(BlockID["windGeneratorMek"], "resources/res/models/wind/wind_base");
Block.setShape(BlockID["windGeneratorMek"], 0, 0, 0, 1, 3, 1, -1);
var Machine;
(function (Machine) {
    var WindGenerator = /** @class */ (function (_super) {
        __extends(WindGenerator, _super);
        function WindGenerator() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.defaultValues = {
                energy: 0,
                currentMultiplier: 0,
                angle: 0
            };
            _this.maxOutput = jToRF(960);
            _this.SPEED = 32;
            //SPEED_SCALED = 256 / this.SPEED;
            _this.maxY = 256 - 4;
            _this.minY = 24;
            return _this;
        }
        WindGenerator.prototype.getMultiplier = function () {
            if (this.isLoaded) {
                if (this.region.canSeeSky(this.x, this.y + 4, this.z)) {
                    var minY = Math.max(this.minY, 0);
                    var maxY = Math.min(this.maxY, 256);
                    var clampedY = MathHelper.clamp(this.y + 5, minY, maxY);
                    var minG = jToRF(60);
                    var maxG = jToRF(480);
                    var slope = (maxG - minG) / (maxY - minY);
                    var toGen = (minG + slope) * (clampedY - minY);
                    return toGen / minG;
                }
                else if (this.region.getBlockId(this.x, this.y + 4, this.z) || this.region.getBlockId(this.x, this.y + 5, this.z)) {
                    return 0;
                }
            }
            return 0;
        };
        WindGenerator.prototype.getAngle = function () {
            return this.data.angle;
        };
        WindGenerator.prototype.isBlackList = function (dim) {
            return false; // not ready
        };
        WindGenerator.prototype.onInit = function () {
            if (this.isBlackList(this.dimension)) {
                this.setActive(false);
            }
            _super.prototype.onInit.call(this);
        };
        WindGenerator.prototype.onTick = function () {
            // Update Angle
            if (this.isActive()) {
                this.data.angle = (this.data.angle + this.getHeightSpeedRatio()) % 360;
            }
            // If we're in a blacklisted dimension, there's nothing more to do
            if (this.isBlackList(this.dimension)) {
                return;
            }
            if (World.getThreadTime() % 20 == 0) {
                // Recalculate the current multiplier once a second
                this.data.currentMultiplier = this.getMultiplier();
                this.setActive(this.data.currentMultiplier != 0);
            }
            if (this.data.currentMultiplier != 0 && this.powerNeed() != 0) {
                this.data.energy += 60 * this.data.currentMultiplier;
            }
        };
        WindGenerator.prototype.getHeightSpeedRatio = function () {
            var height = this.y + 4;
            if (!this.isLoaded) {
                //Fallback to default values, but in general this is not going to happen
                return this.SPEED * height / 384;
            }
            //Shift so that a wind generator at the min build height acts as if it was at a height of zero
            var minBuildHeight = 1;
            height -= minBuildHeight;
            return this.SPEED * height / (256 - minBuildHeight);
        };
        WindGenerator.prototype.getEnergyStorage = function () {
            return jToRF(200000);
        };
        WindGenerator.prototype.defineRotate = function () {
            var data = this.blockSource.getBlockData(this.x, this.y, this.z);
            return { x: MathHelper.degreeToRadian(MekModel.rotate[data - 2][0]), y: MathHelper.degreeToRadian(MekModel.rotate[data - 2][1]), z: MathHelper.degreeToRadian(MekModel.rotate[data - 2][2]) };
        };
        WindGenerator.prototype.clientLoad = function () {
            // blade
            var blades = this.blades = new Animation.Base(this.x + WindGenerator.PIVOT_POINT.x, this.y + WindGenerator.PIVOT_POINT.y, this.z + WindGenerator.PIVOT_POINT.z);
            var mesh = new RenderMesh();
            mesh.importFromFile(__dir__ + "resources/res/models/wind_generator/wind_blade.obj", "obj", {
                scale: [5, 5, 5],
                translate: [0.5, 0.5, 0.5],
                invertV: false,
                noRebuild: false
            });
            var rotation = this.defineRotate();
            mesh.rotate(rotation.x, rotation.y, rotation.z);
            blades.describe({ mesh: mesh, skin: "models/wind_generator/wind_blade.png" });
            blades.load();
            // base
        };
        ;
        WindGenerator.prototype.clientUnload = function () {
            var blades = this.blades;
            blades && blades.destroy();
        };
        ;
        WindGenerator.prototype.destroy = function () {
            var blades = this.blades;
            blades && blades.destroy();
            return false;
        };
        ;
        WindGenerator.prototype.rotate = function () {
            var data = this.blockSource.getBlockData(this.x, this.y, this.z);
            var blades = this.blades;
            blades.load();
            switch (data) {
                case 2:
                case 3:
                    blades && blades.transform().rotate(this.getHeightSpeedRatio() / 100, 0, 0);
                    break;
                case 4:
                case 5:
                    blades && blades.transform().rotate(0, 0, this.getHeightSpeedRatio() / 100);
                    break;
            }
        };
        ;
        WindGenerator.PIVOT_POINT = { x: 0, y: 4, z: 0 };
        __decorate([
            BlockEngine.Decorators.NetworkEvent(Side.Client)
        ], WindGenerator.prototype, "rotate", null);
        return WindGenerator;
    }(Machine.BaseGenerator));
    Machine.WindGenerator = WindGenerator;
    MachineRegistry.registerPrototype(BlockID.windGeneratorMek, new WindGenerator());
})(Machine || (Machine = {}));
// // not ready not
// BlockRegistry.createBlock("windGeneratorMek", [
//     { name: "Wind Generator", texture: [["steel_casing", 0]] }]);
// BlockRegistry.setBlockMaterial(BlockID.windGeneratorMek, "stone", 1);
// MekModel.setInventoryModel(new ItemStack(BlockID["windGeneratorMek"], 1, 0), "item/wind_generator_item", "wind_generator/wind_generator_item", {
//     translate: [0.25, 0, 0.5], scale: [1.50, 1.50, 1.50], invertV: false, noRebuild: false
// }, [0, 0, -15])
// MekModel.setHandModel(new ItemStack(BlockID["windGeneratorMek"], 1, 0), "item/wind_generator_item", "wind_generator/wind_generator_item", {
//     translate: [0.25, 0, 0], scale: [2.5, 2.5, 2.5], invertV: false, noRebuild: false
// })
// MekModel.registerModelWithRotation(BlockID["windGeneratorMek"], "resources/res/models/wind/wind_base")
/*
 * ```js
 * texture: [
 *   ["название1", индекс1], // bottom (Y: -1)
 *   ["название2", индекс2], // top (Y: +1)
 *   ["название3", индекс3], // back (X: -1) West
 *   ["название4", индекс4], // front (X: +1) East
 *   ["название5", индекс5], // left (Z: -1) North
 *   ["название6", индекс6]  // right (Z: +1) South
 * ]
 * ```
 */
var Machine;
(function (Machine) {
    var AdvanceSolarGenerator = /** @class */ (function (_super) {
        __extends(AdvanceSolarGenerator, _super);
        function AdvanceSolarGenerator() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        AdvanceSolarGenerator.prototype.canExtractEnergy = function (side, type) {
            switch (this.region.getBlockData(this.x, this.y, this.z)) {
                case 3:
                case 0:
                    return side == EBlockSide.NORTH;
                    break;
                case 3:
                    return side == EBlockSide.SOUTH;
                    break;
                case 4:
                    return side == EBlockSide.WEST;
                    break;
                case 5:
                    return side == EBlockSide.EAST;
                    break;
                default:
                    return side == EBlockSide.DOWN;
                    break;
            }
        };
        AdvanceSolarGenerator.prototype.getEnergyStorage = function () {
            return jToRF(200000);
        };
        AdvanceSolarGenerator.prototype.recheckSettings = function () {
            if (this.region == null) {
                return;
            }
            var solarCheck = new AdvancedSolarCheck(this.region, new Vector3(this.x, this.y + 2, this.z));
            var totalPeak = solarCheck.getPeakMultiplier();
            for (var i = 0; i < 8; i++) {
                if (i < 3) {
                    this.solarChecks[i] = new AdvancedSolarCheck(this.region, new Vector3(this.x - 1, this.y + 2, this.z + (i - 1)));
                }
                else if (i == 3) {
                    this.solarChecks[i] = new AdvancedSolarCheck(this.region, new Vector3(this.x, this.y + 2, this.z - 1));
                }
                else if (i == 4) {
                    this.solarChecks[i] = new AdvancedSolarCheck(this.region, new Vector3(this.x, this.y + 2, this.z + 1));
                }
                else {
                    this.solarChecks[i] = new AdvancedSolarCheck(this.region, new Vector3(this.x + 1, this.y + 2, this.z + (i - 6)));
                }
                totalPeak += this.solarChecks[i].getPeakMultiplier();
            }
            this.updateMaxOutputRaw(300 * (totalPeak / 9));
        };
        AdvanceSolarGenerator.prototype.checkCanSeeSun = function () {
            if (this.solarCheck == null) {
                //Note: We assume if solarCheck is null then solarChecks will be filled with null, and if it isn't
                // then it won't be as they get initialized at the same time
                return false;
            }
            //Allow attempting to recheck each position, and mark that we can see the sun if at least one position can
            this.solarCheck.recheckCanSeeSun();
            var count = this.solarCheck.isSeeSun() ? 1 : 0;
            for (var _i = 0, _a = this.solarChecks; _i < _a.length; _i++) {
                var check = _a[_i];
                check.recheckCanSeeSun();
                if (check.isSeeSun()) {
                    count++;
                }
            }
            //Mark that our solar generator can "see" the sun if at least five of the nine positions
            // are able to see the sun
            return count > 4;
        };
        AdvanceSolarGenerator.prototype.getProduction = function () {
            if (this.region == null || this.solarCheck == null) {
                //Note: We assume if solarCheck is null then this.solarChecks will be filled with null, and if it isn't
                // then it won't be as they get initialized at the same time
                return 0;
            }
            var brightness = this.getBrightnessMultiplier();
            //Calculate the generation multiplier of all the solar panels together
            // any part that can't see the sun will contribute zero to the multiplier,
            // and then we take the average across all to see how much to multiply by
            var generationMultiplier = this.solarCheck.getGenerationMultiplier();
            for (var _i = 0, _a = this.solarChecks; _i < _a.length; _i++) {
                var check = _a[_i];
                generationMultiplier += check.getGenerationMultiplier();
            }
            generationMultiplier /= this.solarChecks.length + 1;
            //Production is a function of the peak possible output in this biome and sun's current brightness
            return 300 * (brightness * generationMultiplier);
        };
        AdvanceSolarGenerator.prototype.onTick = function () {
            return _super.prototype.onTick.call(this);
        };
        return AdvanceSolarGenerator;
    }(Machine.SolarGenerator));
    Machine.AdvanceSolarGenerator = AdvanceSolarGenerator;
})(Machine || (Machine = {}));
var AdvancedSolarCheck = /** @class */ (function (_super) {
    __extends(AdvancedSolarCheck, _super);
    function AdvancedSolarCheck(world, pos) {
        var _this = _super.call(this, world, pos) || this;
        //Recheck between every 10-30 ticks, to not end up checking each position each tick
        _this.recheckFrequency = MathHelper.clamp(Math.floor(Math.random() * 10), 10, 30);
        return _this;
    }
    AdvancedSolarCheck.prototype.recheckCanSeeSun = function () {
        if (!this.world.canSeeSky(this.pos.x, this.pos.y, this.pos.z) || this.world.getLightLevel(this.pos.x, this.pos.y, this.pos.z) <= 4) {
            this.canSeeSun = false;
            return;
        }
        var time = World.getWorldTime();
        if (time < this.lastCheckedSun + this.recheckFrequency) {
            return;
        }
        this.lastCheckedSun = time;
        // if (world.getFluidState(pos).isEmpty()) {
        //     //If the top isn't fluid logged we can just quickly check if the top can see the sun
        //     canSeeSun = world.canSeeSky(pos);
        // } else {
        var above = new Vector3(this.pos.x, this.pos.y, this.pos.z);
        if (this.world.canSeeSky(above)) {
            //If the spot above can see the sun, check to make sure we can see through the block there
            this.canSeeSun = this.world.getLightLevel(this.pos.x, this.pos.y, this.pos.z) >= 15;
        }
        else {
            this.canSeeSun = false;
        }
    };
    return AdvancedSolarCheck;
}(SolarCheck));
// not ready not
// not ready not
ModAPI.addAPICallback("RecipeViewer", function (api) {
    RV = api;
    var RecipeType = api.RecipeType;
    var Bitmap = android.graphics.Bitmap;
    var MetallurgicInfuserRecipe = /** @class */ (function (_super) {
        __extends(MetallurgicInfuserRecipe, _super);
        function MetallurgicInfuserRecipe() {
            var _this = _super.call(this, "Metallurgic Infuser", BlockID.metallurgicInfuser, {
                drawing: [
                    { type: "bitmap", x: 555, y: 245, bitmap: "GuiProgressScale", scale: GUI_BAR_STANDARD_SCALE }
                ],
                elements: {
                    input0: { type: "slot", x: 480, y: 220 },
                    output0: { type: "slot", x: 720, y: 220 },
                    inputLiq0: { width: 12, height: 108, x: 350 + GUI_BAR_STANDARD_SCALE, y: 150 + GUI_BAR_STANDARD_SCALE }
                }
            }) || this;
            _this.setTankLimit(1000);
            return _this;
        }
        MetallurgicInfuserRecipe.prototype.getAllList = function () {
            var list = [];
            for (var type in InfuserRecipe.recipes) {
                var recipes = InfuserRecipe.recipes[type];
                for (var _i = 0, recipes_8 = recipes; _i < recipes_8.length; _i++) {
                    var recipe = recipes_8[_i];
                    list.push({
                        input: [recipe.input],
                        output: [recipe.output],
                        inputLiq: [{ liquid: recipe.type, amount: 1000, tips: { amount: recipe.infuser_use } }]
                    });
                }
            }
            return list;
        };
        MetallurgicInfuserRecipe.prototype.tankTooltip = function (name, liquid, tips) {
            return name + ": " + tips.amount + " mB";
        };
        return MetallurgicInfuserRecipe;
    }(RecipeType));
    api.RecipeTypeRegistry.register("mek_infuser", new MetallurgicInfuserRecipe());
    var InfuserFuel = /** @class */ (function (_super) {
        __extends(InfuserFuel, _super);
        function InfuserFuel() {
            var _this = _super.call(this, Translation.translate("conversion.mekanism.infusion"), BlockID.metallurgicInfuser, {
                drawing: [
                    { type: "bitmap", x: 555, y: 245, bitmap: "GuiProgressScale", scale: GUI_BAR_STANDARD_SCALE }
                ],
                elements: {
                    input0: { type: "slot", x: 480, y: 220 },
                    outputLiq0: { width: 18, height: 60, x: 750 + GUI_BAR_STANDARD_SCALE, y: 150 + GUI_BAR_STANDARD_SCALE }
                }
            }) || this;
            _this.setTankLimit(100);
            return _this;
        }
        InfuserFuel.prototype.getAllList = function () {
            var list = [];
            for (var i in Infuser_Type.item_type) {
                var id = parseInt(i);
                if (id) {
                    list.push({
                        input: [{ id: id, count: 1, data: 0 }],
                        outputLiq: [{ liquid: Infuser_Type.item_type[i].type, amount: 1000, tips: { amount: Infuser_Type.item_type[i].value } }]
                    });
                }
            }
            return list;
        };
        InfuserFuel.prototype.tankTooltip = function (name, liquid, tips) {
            return name + ": " + tips.amount + " mB";
        };
        return InfuserFuel;
    }(RecipeType));
    api.RecipeTypeRegistry.register("mek_infuser_fuel", new InfuserFuel());
});
// from Avaritia
(function () {
    var _a;
    var _b, _c;
    var all_translation_keys = {};
    var readFile = function (name) {
        return FileTools.ReadText("".concat(__dir__, "/lang/").concat(name, ".lang"))
            .split("\n")
            .filter(function (element) { return element.length > 0 && !element.startsWith("#"); })
            .forEach(function (line) {
            var _a;
            var _b;
            var kv = line.split("=");
            (_a = all_translation_keys[_b = kv[0]]) !== null && _a !== void 0 ? _a : (all_translation_keys[_b] = {});
            all_translation_keys[kv[0]][name] = kv[1];
        });
    };
    FileTools.GetListOfFiles("".concat(__dir__, "/lang"), "lang")
        .forEach(function (file) { return readFile(new java.lang.String(file.getName()).replaceFirst("[.][^.]+$", "")); });
    for (var key in all_translation_keys) {
        (_a = (_b = all_translation_keys[key])[_c = Translation.getLanguage()]) !== null && _a !== void 0 ? _a : (_b[_c] = all_translation_keys[key].en);
        Translation.addTranslation(key, all_translation_keys[key]);
    }
})();
var MekAPI = {
    MachineRegistry: MachineRegistry,
    ModelHelper: MekModel,
    Recipe: RecipeManager,
    UpgradesAPI: UpgradesAPI,
    Machine: Machine,
    requireGlobal: function (command) {
        return eval(command);
    }
};
Logger.Log("Mekanism loading finished in ".concat((Debug.sysTime() - startTime), " ms"), "INFO");
ModAPI.registerAPI("MekAPI", MekAPI);
Logger.Log("Mekanism API was shared with name: MekAPI", "API");
