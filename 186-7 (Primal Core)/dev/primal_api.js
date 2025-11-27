importLib("ToolType", "*");
importLib("SoundAPI", "*");
var breakItem = function () {
    let item = Player.getCarriedItem();
    if (item.data <= Item.getMaxDamage(item.id)) {
        Player.setCarriedItem(item.id, 1, item.data + 1);
    } else {
        Player.decreaseCarriedItem();
    }
};
const Generator = {setItem: function (id, othr, spec) {
    if (!othr.meta) {
        othr.meta = 0;
    }
    IDRegistry.genItemID(id);
    Item.createItem(id, othr.name, {name: othr.texture, meta: othr.meta}, {stack: othr.stack});
}, setFoodItem: function (id, othr, spec) {
    if (!othr.meta) {
        othr.meta = 0;
    }
    IDRegistry.genItemID(id);
    Item.createFoodItem(id, othr.name, {name: othr.texture, meta: othr.meta}, {stack: othr.stack, food: othr.food});
}, setItems: function (id, types) {
    for (i in types) {
        this.setItem(id + types[i], {name: types[i] + " " + id, texture: id + types[i], stack: 64});
    }
}};
var DryingRack = {recipes: {}, addRecipe: function (id, time, result) {
    this.recipes[id] = {time: time, id: result};
}, getRecipe: function (id) {
    if (this.recipes[id]) {
        return this.recipes[id];
    } else {
        return 0;
    }
}, removeRecipe: function (id) {
    if (this.recipes[id]) {
        delete this.recipes[id];
    }
}};
var Cauldron = {recipes: {}, addRecipe: function (src, result) {
    this.recipes[src[0] + ":" + src[1] + ":" + src[2] + ":" + src[3]] = {id: result.id, data: result.data, liquid: {name: result.liquid.name, amount: result.liquid.amount}};
}, getRecipe: function (inp) {
    return this.recipes[inp[0] + ":" + inp[1] + ":" + inp[2] + ":" + inp[3]];
}};
ToolType.workblade = {isWeapon: true, damage: 3, baseDamage: 4, blockTypes: ["fibre", "plant"], onDestroy: function (item) {
    item.data++;
}, onBroke: function (item) {
    item.id = item.count = item.data = 0;
}, calcDestroyTime: function (item, coords, block, params, destroyTime, enchant) {
    if (block.id == 18 || block.id == 161) {
        return 0;
    } else {
        destroyTime;
    }
}};
ToolType.hatchet = {isWeapon: false, damage: 3, baseDamage: 4, blockTypes: ["wood"], onDestroy: function (item) {
    item.data++;
}, onBroke: function (item) {
    item.id = item.count = item.data = 0;
}, calcDestroyTime: function (item, coords, block, params, destroyTime, enchant) {
    if (ToolAPI.blockData[block.id].material.name == "wood") {
        return destroyTime - 0.1;
    } else {
        return destroyTime;
    }
}};
ToolType.shears = {isWeapon: false, damage: 1, baseDamage: 0, blockTypes: ["plant", "fibre", "fiber"], onDestroy: function (item) {
    item.data++;
}, onBroke: function (item) {
    item.id = item.count = item.data = 0;
}, calcDestroyTime: function (item, coords, block, params, destroyTime, enchant) {
    if (block.id == 18 || block.id == 161) {
        return 0;
    } else {
        return destroyTime;
    }
}};
var workblades = [];
var saws = [];
var gallaghers = [];
var ToolBuilder = {materials: [], addMaterial: function (name, data, lvl, eff, dam) {
    ToolAPI.addToolMaterial(name, {durability: data, level: lvl, efficiency: eff, damage: dam});
    this.materials.push(name);
}, setPickaxe: function (mater) {
    Generator.setItem(mater + "_pickaxe", {name: mater + " pickaxe", texture: mater + "_pickaxe", stack: 1});
    ToolAPI.setTool(ItemID[mater + "_pickaxe"], mater, ToolType.pickaxe);
}, setSaw: function (mater, damage) {
    Generator.setItem(mater + "_saw", {name: mater + " saw", texture: mater + "_saw", stack: 1});
    Item.setMaxDamage(ItemID[mater + "_saw"], damage);
    saws.push(ItemID[mater + "_saw"]);
    workblades.push(ItemID[mater + "_saw"]);
}, setAxe: function (mater) {
    Generator.setItem(mater + "_axe", {name: mater + " axe", texture: mater + "_axe", stack: 1});
    ToolAPI.setTool(ItemID[mater + "_axe"], mater, ToolType.axe);
    Item.registerUseFunction(mater + "_axe", function (c, item, block) {
        if (block.id == BlockID.stripped_log) {
            breakItem();
            PlaySoundFile("tool_axe_wood.ogg");
            if (Math.random() <= 0.3) {
                PlaySoundFile("split_log.ogg");
                World.destroyBlock(c.x, c.y, c.z, false);
                World.drop(c.relative.x, c.relative.y, c.relative.z, BlockID.splited_log, 4, 0);
                if (item.data <= Item.getMaxDamage(item.id)) {
                    Player.setCarriedItem(item.id, 1, item.data++);
                } else {
                    Player.decreaseCarriedItem();
                }
            }
        }
    });
}, setShovel: function (mater) {
    Generator.setItem(mater + "_shovel", {name: mater + " shovel", texture: mater + "_shovel", stack: 1});
    ToolAPI.setTool(ItemID[mater + "_shovel"], mater, ToolType.shovel);
}, setWorkblade: function (mater) {
    Generator.setItem(mater + "_workblade", {name: mater + " workblade", texture: mater + "_workblade", stack: 1});
    workblades.push(ItemID[mater + "_workblade"]);
    ToolAPI.setTool(ItemID[mater + "_workblade"], mater, ToolType.workblade);
    Item.registerUseFunction(mater + "_workblade", function (c, item, block) {
        if (block.id == 17 || block.id == 162) {
            breakItem();
            PlaySoundFile("tool_axe_wood.ogg");
            if (Math.random() <= 0.3) {
                PlaySoundFile("split_log.ogg");
                World.setBlock(c.x, c.y, c.z, BlockID.stripped_log);
                World.drop(c.relative.x + 0.5, c.relative.y + 0.5, c.relative.z + 0.5, ItemID.wood_bark, 1, 0);
                if (item.data <= Item.getMaxDamage(item.id)) {
                    Player.setCarriedItem(item.id, 1, item.data++);
                } else {
                    Player.decreaseCarriedItem();
                }
            }
        }
    });
}, setHoe: function (mater) {
    Generator.setItem(mater + "_hoe", {name: mater + " hoe", texture: mater + "_hoe", stack: 1});
    ToolAPI.setTool(ItemID[mater + "_hoe"], mater, ToolType.hoe);
}, setShears: function (mater, damage) {
    Generator.setItem(mater + "_shears", {name: mater + " shears", texture: mater + "_shears", stack: 1});
    ToolAPI.setTool(ItemID[mater + "_shears"], mater, ToolType.shears);
    Item.setMaxDamage(ItemID[mater + "_shears"], damage);
}, setGallagher: function (mater, damage) {
    Generator.setItem(mater + "_gallagher", {name: mater + " gallagher", texture: mater + "_gallagher", stack: 1});
    Item.setMaxDamage(ItemID[mater + "_gallagher"], damage);
    gallaghers.push(ItemID[mater + "_gallagher"]);
}};
ToolBuilder.setGallagher("stone", 60);
Recipes.addShaped({id: ItemID.stone_gallagher, count: 1, data: 0}, ["sts", "srs", " r "], ["s", 1, 0, "r", 280, 0, "t", ItemID.plant_twine, 0]);
ModAPI.registerAPI("primal_api", {Machine: {Cauldron: Cauldron, DryingRack: DryingRack}, CrafingTool: {workblades: workblades, saws: saws, gallaghers: gallaghers}, ToolBuilder: ToolBuilder, Generator: Generator, EvalGlobal: function (a) {
    eval(a);
}});
alert("primal_api shared!", "primal_core");

