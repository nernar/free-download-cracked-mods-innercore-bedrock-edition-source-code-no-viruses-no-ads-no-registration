importLib("ToolType", "*");
importLib("SoundAPI", "*");
Item.breakCarried = function (val) {
    if (!val) {
        val = 1;
    }
    let item = Player.getCarriedItem();
    if (Item.getMaxDamage(item.id)) {
        Player.setCarriedItem(item.id, item.count, item.data + val);
    }
    if (item.data >= Item.getMaxDamage(item.id)) {
        Player.decreaseCarriedItem(item.count);
    }
};
const anyDamage = function (id) {
    for (i = 0; i < Item.getMaxDamage(id); i++) {
        return i;
    }
};
ToolType.workblade = {isWeapon: true, damage: 3, baseDamage: 4, blockTypes: ["fiber", "plant"], onDestroy: function (item) {
    item.data++;
}, onBroke: function (item) {
    item.id = item.count = item.data = 0;
}, calcDestroyTime: function (item, coords, block, params, destroyTime, enchant) {
    if (block.id == 18 || block.id == 161) {
        return 0;
    }
}, onAttack: function (item, mob) {
    item.data++;
}};
var ToolBuilder = {material: {}, addMaterial: function (name, data, lvl, eff, dam) {
    ToolAPI.addToolMaterial(name, {durability: data, level: lvl, efficiency: eff, damage: dam});
}, createAxe: function (arg) {
    IDRegistry.genItemID("axe" + arg.material);
    Item.createItem("axe" + arg.material, arg.material + " axe", {name: "axe" + arg.material, meta: 0}, {stack: 1});
    ToolAPI.setTool(ItemID["axe" + arg.material], arg.material, ToolType.axe);
}, createPickaxe: function (arg) {
    IDRegistry.genItemID("pickaxe" + arg.material);
    Item.createItem("pickaxe" + arg.material, arg.material + " pickaxe", {name: "pickaxe" + arg.material, meta: 0}, {stack: 1});
    ToolAPI.setTool(ItemID["pickaxe" + arg.material], arg.material, ToolType.pickaxe);
}, createShovel: function (arg) {
    IDRegistry.genItemID("shovel" + arg.material);
    Item.createItem("shovel" + arg.material, arg.material + " shovel", {name: "shovel" + arg.material, meta: 0}, {stack: 1});
    ToolAPI.setTool(ItemID["shovel" + arg.material], arg.material, ToolType.shovel);
}, createWorkblade: function (arg) {
    IDRegistry.genItemID("workblade" + arg.material);
    Item.createItem("workblade" + arg.material, arg.material + " workblade", {name: "workblade" + arg.material, meta: 0}, {stack: 1});
    ToolAPI.setTool(ItemID["workblade" + arg.material], arg.material, ToolType.workblade);
}, createSword: function (arg) {
    IDRegistry.genItemID("sword" + arg.material);
    Item.createItem("sword" + arg.material, arg.material + " sword", {name: "sword" + arg.material, meta: 0}, {stack: 1});
    ToolAPI.setTool(ItemID["sword" + arg.material], arg.material, ToolType.sword);
}, createHoe: function (arg) {
    IDRegistry.genItemID("hoe" + arg.material);
    Item.createItem("hoe" + arg.material, arg.material + " hoe", {name: "hoe" + arg.material, meta: 0}, {stack: 1});
    ToolAPI.setTool(ItemID["hoe" + arg.material], arg.material, ToolType.hoe);
}};
ToolBuilder.addMaterial("Stone", 66, 2, 2, 3);
ToolBuilder.createAxe({material: "Stone"});
ToolBuilder.createPickaxe({material: "Stone"});
ToolBuilder.addMaterial("Flint", 83, 2, 2, 3);
ToolBuilder.createAxe({material: "Flint"});
ToolBuilder.createPickaxe({material: "Flint"});
ToolBuilder.createShovel({material: "Flint"});
ToolBuilder.createWorkblade({material: "Flint"});
ToolBuilder.createHoe({material: "Flint"});
ToolBuilder.addMaterial("Iron", 340, 3, 4, 6);
ToolBuilder.createAxe({material: "Iron"});
ToolBuilder.createPickaxe({material: "Iron"});
ToolBuilder.createShovel({material: "Iron"});
ToolBuilder.createSword({material: "Iron"});
ToolBuilder.createHoe({material: "Iron"});
ToolBuilder.addMaterial("Cobalt", 890, 5, 7, 7);
ToolBuilder.createAxe({material: "Cobalt"});
ToolBuilder.createPickaxe({material: "Cobalt"});
ToolBuilder.createShovel({material: "Cobalt"});
ToolBuilder.createSword({material: "Cobalt"});
ToolBuilder.createHoe({material: "Cobalt"});
ToolBuilder.addMaterial("Dirium", 1250, 5, 8, 8);
ToolBuilder.createAxe({material: "Dirium"});
ToolBuilder.createPickaxe({material: "Dirium"});
ToolBuilder.createShovel({material: "Dirium"});
ToolBuilder.createSword({material: "Dirium"});
ToolBuilder.createHoe({material: "Dirium"});

