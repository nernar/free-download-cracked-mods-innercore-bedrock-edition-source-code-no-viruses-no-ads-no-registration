IDRegistry.genItemID("accioFurnace");
Item.createItem("accioFurnace", "Accio Furnace", {name: "accioFurnace", meta: 0});
IDRegistry.genItemID("crucioFurnace");
Item.createItem("crucioFurnace", "Crucio Furnace", {name: "crucioFurnace", meta: 0});
IDRegistry.genItemID("imperioFurnace");
Item.createItem("imperioFurnace", "Imperio Furnace", {name: "imperioFurnace", meta: 0});
IDRegistry.genItemID("zivicioFurnace");
Item.createItem("zivicioFurnace", "Zivicio Furnace", {name: "zivicioFurnace", meta: 0});
IDRegistry.genItemID("ultimateFurnace");
Item.createItem("ultimateFurnace", "Mass Zivicio Furnace", {name: "ultimateFurnace", meta: 0});
IDRegistry.genBlockID("accioFurnace");
Block.createBlock("accioFurnace", [{name: "Accio Furnace", texture: [["accioFurnace", 0]], inCreative: false}]);
PlantModel.tree(BlockID.accioFurnace, 0);
ToolAPI.registerBlockMaterial(BlockID.accioFurnace, "stone", 2, true);
Block.setDestroyLevel("accioFurnace", 2);
IDRegistry.genBlockID("crucioFurnace");
Block.createBlock("crucioFurnace", [{name: "Crucio Furnace", texture: [["crucioFurnace", 0]], inCreative: false}]);
PlantModel.tree(BlockID.crucioFurnace, 0);
ToolAPI.registerBlockMaterial(BlockID.crucioFurnace, "stone", 2, true);
Block.setDestroyLevel("crucioFurnace", 2);
IDRegistry.genBlockID("imperioFurnace");
Block.createBlock("imperioFurnace", [{name: "Imperio Furnace", texture: [["imperioFurnace", 0]], inCreative: false}]);
PlantModel.tree(BlockID.imperioFurnace, 0);
ToolAPI.registerBlockMaterial(BlockID.imperioFurnace, "stone", 2, true);
Block.setDestroyLevel("imperioFurnace", 2);
IDRegistry.genBlockID("zivicioFurnace");
Block.createBlock("zivicioFurnace", [{name: "Zivicio Furnace", texture: [["zivicioFurnace", 0]], inCreative: false}]);
PlantModel.tree(BlockID.zivicioFurnace, 0);
ToolAPI.registerBlockMaterial(BlockID.zivicioFurnace, "stone", 2, true);
Block.setDestroyLevel("zivicioFurnace", 2);
IDRegistry.genBlockID("ultimateFurnace");
Block.createBlock("ultimateFurnace", [{name: "Ultimate Furnace", texture: [["ultimateFurnace", 0]], inCreative: false}]);
PlantModel.tree(BlockID.ultimateFurnace, 0);
ToolAPI.registerBlockMaterial(BlockID.ultimateFurnace, "stone", 2, true);
Block.setDestroyLevel("ultimateFurnace", 2);
Block.registerDropFunction("accioFurnace", function () {
    return [[ItemID.accioFurnace, 1, 0]];
});
Block.registerDropFunction("crucioFurnace", function () {
    return [[ItemID.crucioFurnace, 1, 0]];
});
Block.registerDropFunction("imperioFurnace", function () {
    return [[ItemID.imperioFurnace, 1, 0]];
});
Block.registerDropFunction("zivicioFurnace", function () {
    return [[ItemID.zivicioFurnace, 1, 0]];
});
Block.registerDropFunction("ultimateFurnace", function () {
    return [[ItemID.ultimateFurnace, 1, 0]];
});
Item.registerUseFunction("accioFurnace", function (coords, item, block) {
    var place = coords.relative;
    if (GenerationUtils.isTransparentBlock(World.getBlockID(place.x, place.y, place.z))) {
        World.setBlock(place.x, place.y, place.z, BlockID.accioFurnace);
        Player.setCarriedItem(item.id, item.count - 1, item.data);
    }
});
Item.registerUseFunction("crucioFurnace", function (coords, item, block) {
    var place = coords.relative;
    if (GenerationUtils.isTransparentBlock(World.getBlockID(place.x, place.y, place.z))) {
        World.setBlock(place.x, place.y, place.z, BlockID.crucioFurnace);
        Player.setCarriedItem(item.id, item.count - 1, item.data);
    }
});
Item.registerUseFunction("imperioFurnace", function (coords, item, block) {
    var place = coords.relative;
    if (GenerationUtils.isTransparentBlock(World.getBlockID(place.x, place.y, place.z))) {
        World.setBlock(place.x, place.y, place.z, BlockID.imperioFurnace);
        Player.setCarriedItem(item.id, item.count - 1, item.data);
    }
});
Item.registerUseFunction("zivicioFurnace", function (coords, item, block) {
    var place = coords.relative;
    if (GenerationUtils.isTransparentBlock(World.getBlockID(place.x, place.y, place.z))) {
        World.setBlock(place.x, place.y, place.z, BlockID.zivicioFurnace);
        Player.setCarriedItem(item.id, item.count - 1, item.data);
    }
});
Item.registerUseFunction("ultimateFurnace", function (coords, item, block) {
    var place = coords.relative;
    if (GenerationUtils.isTransparentBlock(World.getBlockID(place.x, place.y, place.z))) {
        World.setBlock(place.x, place.y, place.z, BlockID.ultimateFurnace);
        Player.setCarriedItem(item.id, item.count - 1, item.data);
    }
});
var accioFurnaceGui = new UI.StandartWindow({standart: {header: {text: {text: "Accio Furnace"}}, inventory: {standart: true}, background: {standart: true}}, drawing: [{type: "bitmap", x: 546, y: 220, bitmap: "furnaceBarBackground", scale: 4.2}, {type: "bitmap", x: 436, y: 221, bitmap: "fireBackground", scale: 4.2}], elements: {"progressScale": {type: "scale", x: 546, y: 220, direction: 0, value: 0.5, bitmap: "furnaceBarScale", scale: 4.2}, "burningScale": {type: "scale", x: 436, y: 221, direction: 1, value: 0.5, bitmap: "fireScale", scale: 4.2}, "slotSource": {type: "slot", x: 426, y: 121, size: 80}, "slotFuel": {type: "slot", x: 426, y: 299, size: 80}, "slotResult": {type: "slot", x: 673, y: 203, size: 100}}});
var crucioFurnaceGui = new UI.StandartWindow({standart: {header: {text: {text: "Crucio Furnace"}}, inventory: {standart: true}, background: {standart: true}}, drawing: [{type: "bitmap", x: 546, y: 220, bitmap: "furnaceBarBackground", scale: 4.2}, {type: "bitmap", x: 436, y: 221, bitmap: "fireBackground", scale: 4.2}], elements: {"progressScale": {type: "scale", x: 546, y: 220, direction: 0, value: 0.5, bitmap: "furnaceBarScale", scale: 4.2}, "burningScale": {type: "scale", x: 436, y: 221, direction: 1, value: 0.5, bitmap: "fireScale", scale: 4.2}, "slotSource": {type: "slot", x: 426, y: 121, size: 80}, "slotFuel": {type: "slot", x: 426, y: 299, size: 80}, "slotResult": {type: "slot", x: 673, y: 203, size: 100}}});
var imperioFurnaceGui = new UI.StandartWindow({standart: {header: {text: {text: "Imperio Furnace"}}, inventory: {standart: true}, background: {standart: true}}, drawing: [{type: "bitmap", x: 546, y: 220, bitmap: "furnaceBarBackground", scale: 4.2}, {type: "bitmap", x: 436, y: 221, bitmap: "fireBackground", scale: 4.2}], elements: {"progressScale": {type: "scale", x: 546, y: 220, direction: 0, value: 0.5, bitmap: "furnaceBarScale", scale: 4.2}, "burningScale": {type: "scale", x: 436, y: 221, direction: 1, value: 0.5, bitmap: "fireScale", scale: 4.2}, "slotSource": {type: "slot", x: 426, y: 121, size: 80}, "slotFuel": {type: "slot", x: 426, y: 299, size: 80}, "slotResult": {type: "slot", x: 673, y: 203, size: 100}}});
var zivicioFurnaceGui = new UI.StandartWindow({standart: {header: {text: {text: "Zivicio Furnace"}}, inventory: {standart: true}, background: {standart: true}}, drawing: [{type: "bitmap", x: 546, y: 220, bitmap: "furnaceBarBackground", scale: 4.2}, {type: "bitmap", x: 436, y: 221, bitmap: "fireBackground", scale: 4.2}], elements: {"progressScale": {type: "scale", x: 546, y: 220, direction: 0, value: 0.5, bitmap: "furnaceBarScale", scale: 4.2}, "burningScale": {type: "scale", x: 436, y: 221, direction: 1, value: 0.5, bitmap: "fireScale", scale: 4.2}, "slotSource": {type: "slot", x: 426, y: 121, size: 80}, "slotFuel": {type: "slot", x: 426, y: 299, size: 80}, "slotResult": {type: "slot", x: 673, y: 203, size: 100}}});
var ultimateFurnaceGui = new UI.StandartWindow({standart: {header: {text: {text: "Ultimate Furnace"}}, inventory: {standart: true}, background: {standart: true}}, drawing: [{type: "bitmap", x: 546, y: 220, bitmap: "furnaceBarBackground", scale: 4.2}, {type: "bitmap", x: 436, y: 221, bitmap: "fireBackground", scale: 4.2}], elements: {"progressScale": {type: "scale", x: 546, y: 220, direction: 0, value: 0.5, bitmap: "furnaceBarScale", scale: 4.2}, "burningScale": {type: "scale", x: 436, y: 221, direction: 1, value: 0.5, bitmap: "fireScale", scale: 4.2}, "slotSource": {type: "slot", x: 426, y: 121, size: 80}, "slotFuel": {type: "slot", x: 426, y: 299, size: 80}, "slotResult": {type: "slot", x: 673, y: 203, size: 100}}});
TileEntity.registerPrototype(BlockID.accioFurnace, {defaultValues: {progress: 0, burn: 0, burnMax: 0}, getGuiScreen: function () {
    return accioFurnaceGui;
}, tick: function () {
    var sourceSlot = this.container.getSlot("slotSource");
    var result = Recipes.getFurnaceRecipeResult(sourceSlot.id);
    if (result && this.data.burn > 0) {
        var resultSlot = this.container.getSlot("slotResult");
        if ((resultSlot.id == result.id && resultSlot.data == result.data && resultSlot.count < 64 || resultSlot.id == 0) && this.data.progress++ >= 160) {
            sourceSlot.count--;
            resultSlot.id = result.id;
            resultSlot.data = result.data;
            resultSlot.count++;
            this.container.validateAll();
            this.data.progress = 0;
        }
    } else {
        this.data.progress = 0;
    }
    if (this.data.burn > 0) {
        if (config.particle_on_furnace) {
            for (let i = Math.random() * 1 + 0.1 | 0; i--; ) {
                Particles.addParticle(Native.ParticleType.lava, this.x + Math.random(), this.y + Math.random() + 0.5, this.z + Math.random(), 0, -0.5, 0);
            }
        }
        this.data.burn--;
    } else {
        if (result) {
            this.data.burn = this.data.burnMax = this.getFuel("slotFuel");
        }
    }
    this.container.setScale("burningScale", this.data.burn / this.data.burnMax || 0);
    this.container.setScale("progressScale", this.data.progress / 160);
}, getFuel: function (slotName) {
    var fuelSlot = this.container.getSlot(slotName);
    if (fuelSlot.id > 0) {
        var burn = Recipes.getFuelBurnDuration(fuelSlot.id, fuelSlot.data);
        if (burn) {
            if (LiquidRegistry.getItemLiquid(fuelSlot.id, fuelSlot.data) == "lava") {
                var empty = LiquidRegistry.getEmptyItem(fuelSlot.id, fuelSlot.data);
                fuelSlot.id = empty.id;
                fuelSlot.data = empty.data;
                return burn;
            }
            fuelSlot.count--;
            this.container.validateSlot(slotName);
            return burn;
        }
    }
    return 0;
}});
TileEntity.registerPrototype(BlockID.crucioFurnace, {defaultValues: {progress: 0, burn: 0, burnMax: 0}, getGuiScreen: function () {
    return crucioFurnaceGui;
}, tick: function () {
    var sourceSlot = this.container.getSlot("slotSource");
    var result = Recipes.getFurnaceRecipeResult(sourceSlot.id);
    if (result && this.data.burn > 0) {
        var resultSlot = this.container.getSlot("slotResult");
        if ((resultSlot.id == result.id && resultSlot.data == result.data && resultSlot.count < 64 || resultSlot.id == 0) && this.data.progress++ >= 80) {
            sourceSlot.count--;
            resultSlot.id = result.id;
            resultSlot.data = result.data;
            resultSlot.count++;
            this.container.validateAll();
            this.data.progress = 0;
        }
    } else {
        this.data.progress = 0;
    }
    if (this.data.burn > 0) {
        if (config.particle_on_furnace) {
            for (let i = Math.random() * 1 + 0.1 | 0; i--; ) {
                Particles.addParticle(Native.ParticleType.lava, this.x + Math.random(), this.y + Math.random() + 0.5, this.z + Math.random(), 0, -0.5, 0);
            }
        }
        this.data.burn--;
    } else {
        if (result) {
            this.data.burn = this.data.burnMax = this.getFuel("slotFuel");
        }
    }
    this.container.setScale("burningScale", this.data.burn / this.data.burnMax || 0);
    this.container.setScale("progressScale", this.data.progress / 80);
}, getFuel: function (slotName) {
    var fuelSlot = this.container.getSlot(slotName);
    if (fuelSlot.id > 0) {
        var burn = Recipes.getFuelBurnDuration(fuelSlot.id, fuelSlot.data);
        if (burn) {
            if (LiquidRegistry.getItemLiquid(fuelSlot.id, fuelSlot.data) == "lava") {
                var empty = LiquidRegistry.getEmptyItem(fuelSlot.id, fuelSlot.data);
                fuelSlot.id = empty.id;
                fuelSlot.data = empty.data;
                return burn;
            }
            fuelSlot.count--;
            this.container.validateSlot(slotName);
            return burn;
        }
    }
    return 0;
}});
TileEntity.registerPrototype(BlockID.imperioFurnace, {defaultValues: {progress: 0, burn: 0, burnMax: 0}, getGuiScreen: function () {
    return imperioFurnaceGui;
}, tick: function () {
    var sourceSlot = this.container.getSlot("slotSource");
    var result = Recipes.getFurnaceRecipeResult(sourceSlot.id);
    if (result && this.data.burn > 0) {
        var resultSlot = this.container.getSlot("slotResult");
        if ((resultSlot.id == result.id && resultSlot.data == result.data && resultSlot.count < 64 || resultSlot.id == 0) && this.data.progress++ >= 40) {
            sourceSlot.count--;
            resultSlot.id = result.id;
            resultSlot.data = result.data;
            resultSlot.count++;
            this.container.validateAll();
            this.data.progress = 0;
        }
    } else {
        this.data.progress = 0;
    }
    if (this.data.burn > 0) {
        if (config.particle_on_furnace) {
            for (let i = Math.random() * 1 + 0.1 | 0; i--; ) {
                Particles.addParticle(Native.ParticleType.lava, this.x + Math.random(), this.y + Math.random() + 0.5, this.z + Math.random(), 0, -0.5, 0);
            }
        }
        this.data.burn--;
    } else {
        if (result) {
            this.data.burn = this.data.burnMax = this.getFuel("slotFuel");
        }
    }
    this.container.setScale("burningScale", this.data.burn / this.data.burnMax || 0);
    this.container.setScale("progressScale", this.data.progress / 40);
}, getFuel: function (slotName) {
    var fuelSlot = this.container.getSlot(slotName);
    if (fuelSlot.id > 0) {
        var burn = Recipes.getFuelBurnDuration(fuelSlot.id, fuelSlot.data);
        if (burn) {
            if (LiquidRegistry.getItemLiquid(fuelSlot.id, fuelSlot.data) == "lava") {
                var empty = LiquidRegistry.getEmptyItem(fuelSlot.id, fuelSlot.data);
                fuelSlot.id = empty.id;
                fuelSlot.data = empty.data;
                return burn;
            }
            fuelSlot.count--;
            this.container.validateSlot(slotName);
            return burn;
        }
    }
    return 0;
}});
TileEntity.registerPrototype(BlockID.zivicioFurnace, {defaultValues: {progress: 0, burn: 0, burnMax: 0}, getGuiScreen: function () {
    return zivicioFurnaceGui;
}, tick: function () {
    var sourceSlot = this.container.getSlot("slotSource");
    var result = Recipes.getFurnaceRecipeResult(sourceSlot.id);
    if (result && this.data.burn > 0) {
        var resultSlot = this.container.getSlot("slotResult");
        if ((resultSlot.id == result.id && resultSlot.data == result.data && resultSlot.count < 64 || resultSlot.id == 0) && this.data.progress++ >= 20) {
            sourceSlot.count--;
            resultSlot.id = result.id;
            resultSlot.data = result.data;
            resultSlot.count++;
            this.container.validateAll();
            this.data.progress = 0;
        }
    } else {
        this.data.progress = 0;
    }
    if (this.data.burn > 0) {
        if (config.particle_on_furnace) {
            for (let i = Math.random() * 1 + 0.1 | 0; i--; ) {
                Particles.addParticle(Native.ParticleType.lava, this.x + Math.random(), this.y + Math.random() + 0.5, this.z + Math.random(), 0, -0.5, 0);
            }
        }
        this.data.burn--;
    } else {
        if (result) {
            this.data.burn = this.data.burnMax = this.getFuel("slotFuel");
        }
    }
    this.container.setScale("burningScale", this.data.burn / this.data.burnMax || 0);
    this.container.setScale("progressScale", this.data.progress / 20);
}, getFuel: function (slotName) {
    var fuelSlot = this.container.getSlot(slotName);
    if (fuelSlot.id > 0) {
        var burn = Recipes.getFuelBurnDuration(fuelSlot.id, fuelSlot.data);
        if (burn) {
            if (LiquidRegistry.getItemLiquid(fuelSlot.id, fuelSlot.data) == "lava") {
                var empty = LiquidRegistry.getEmptyItem(fuelSlot.id, fuelSlot.data);
                fuelSlot.id = empty.id;
                fuelSlot.data = empty.data;
                return burn;
            }
            fuelSlot.count--;
            this.container.validateSlot(slotName);
            return burn;
        }
    }
    return 0;
}});
TileEntity.registerPrototype(BlockID.ultimateFurnace, {defaultValues: {progress: 0, burn: 0, burnMax: 0}, getGuiScreen: function () {
    return ultimateFurnaceGui;
}, tick: function () {
    var sourceSlot = this.container.getSlot("slotSource");
    var result = Recipes.getFurnaceRecipeResult(sourceSlot.id);
    if (result && this.data.burn > 0) {
        var resultSlot = this.container.getSlot("slotResult");
        if ((resultSlot.id == result.id && resultSlot.data == result.data && resultSlot.count < 64 || resultSlot.id == 0) && this.data.progress++ >= 1.6) {
            sourceSlot.count--;
            resultSlot.id = result.id;
            resultSlot.data = result.data;
            resultSlot.count++;
            this.container.validateAll();
            this.data.progress = 0;
        }
    } else {
        this.data.progress = 0;
    }
    if (this.data.burn > 0) {
        if (config.particle_on_furnace) {
            for (let i = Math.random() * 1 + 0.1 | 0; i--; ) {
                Particles.addParticle(Native.ParticleType.lava, this.x + Math.random(), this.y + Math.random() + 0.5, this.z + Math.random(), 0, -0.5, 0);
            }
        }
        this.data.burn--;
    } else {
        if (result) {
            this.data.burn = this.data.burnMax = this.getFuel("slotFuel");
        }
    }
    this.container.setScale("burningScale", this.data.burn / this.data.burnMax || 0);
    this.container.setScale("progressScale", this.data.progress / 1.6);
}, getFuel: function (slotName) {
    var fuelSlot = this.container.getSlot(slotName);
    if (fuelSlot.id > 0) {
        var burn = Recipes.getFuelBurnDuration(fuelSlot.id, fuelSlot.data);
        if (burn) {
            if (LiquidRegistry.getItemLiquid(fuelSlot.id, fuelSlot.data) == "lava") {
                var empty = LiquidRegistry.getEmptyItem(fuelSlot.id, fuelSlot.data);
                fuelSlot.id = empty.id;
                fuelSlot.data = empty.data;
                return burn;
            }
            fuelSlot.count--;
            this.container.validateSlot(slotName);
            return burn;
        }
    }
    return 0;
}});

