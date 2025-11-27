var setfood = function (item, cn, stack, food) {
    IDRegistry.genItemID("coffeeworkshop$" + item);
    Item.createFoodItem("coffeeworkshop$" + item, cn, {name: item}, {inTech: true, stack: stack, food: food});
};
var fastAo = function (a, b, c) {
    Recipes.addShaped({id: c, count: 1, data: 0}, ["b"], ["b", b, 0], function (api, field, result) {
        for (var i in field) {
            api.decreaseFieldSlot(i);
        }
        Player.addItemToInventory(ItemID.coffeeworkshop$Cakemodel, 1);
    });
    machine.ovenMachine.registerRecipe(a, b, 0);
};
IDRegistry.genBlockID("machineBlockBasic");
Block.createBlock("machineBlockBasic", [{name: "Machine Block", texture: [["machine_top", 0]], inCreative: true}], "opaque");
ToolAPI.registerBlockMaterial(BlockID.machineBlockBasic, "stone", 1, true);
Block.setDestroyLevel("machineBlockBasic", 1);
Block.setDestroyTime(BlockID.machineBlockBasic, 3);
IDRegistry.genItemID("plateIron");
Item.createItem("plateIron", "Iron Plate", {name: "plate_iron"});
IDRegistry.genItemID("coffeeworkshop$Rawc");
Item.createItem("coffeeworkshop$Rawc", "\u5496\u5561\u751f\u8c46", {name: "rawc"}, {inTech: true, stack: 64});
IDRegistry.genItemID("coffeeworkshop$Cb");
Item.createItem("coffeeworkshop$Cb", "\u70d8\u57f9\u5496\u5561\u8c46", {name: "cb"}, {inTech: true, stack: 64});
addFurnace(ItemID.coffeeworkshop$Rawc, ItemID.coffeeworkshop$Cb, 0);
IDRegistry.genItemID("coffeeworkshop$Cocoabean");
Item.createItem("coffeeworkshop$Cocoabean", "\u70d8\u57f9\u53ef\u53ef\u8c46", {name: "cocoabean"}, {inTech: true, stack: 64});
addFurnace(351, ItemID.coffeeworkshop$Cocoabean, 0);
IDRegistry.genItemID("butter");
Item.createItem("butter", "\u9ec4\u6cb9", {name: "butter"}, {inTech: true, stack: 64});
setfood("baguette", "\u6cd5\u68cd", 64, 6);
Item.setUseAnimation(ItemID.coffeeworkshop$baguette, 1);
IDRegistry.genItemID("coffeeworkshop$Brownie");
Item.createItem("coffeeworkshop$Brownie", "\u5e03\u6717\u5c3c", {name: "brownie"}, {inTech: true, stack: 64});
IDRegistry.genItemID("coffeeworkshop$Brownieraw");
Item.createItem("coffeeworkshop$Brownieraw", "\u5e03\u6717\u5c3c\u86cb\u7cd5\u7cca", {name: "brownieraw"}, {inTech: true, stack: 64});
IDRegistry.genItemID("coffeeworkshop$Browniemodel");
Item.createItem("coffeeworkshop$Browniemodel", "\u5e03\u6717\u5c3c\u6a21\u5177", {name: "browniemodel"}, {inTech: true, stack: 64});
IDRegistry.genItemID("coffeeworkshop$Cakecarrot");
Item.createItem("coffeeworkshop$Cakecarrot", "\u80e1\u841d\u535c\u86cb\u7cd5", {name: "cakecarrot"}, {inTech: true, stack: 64});
IDRegistry.genItemID("coffeeworkshop$Cakecarrotmodel");
Item.createItem("coffeeworkshop$Cakecarrotmodel", "\u80e1\u841d\u535c\u86cb\u7cd5\u6a21\u5177", {name: "cakecarrotmodel"}, {inTech: true, stack: 64});
IDRegistry.genItemID("coffeeworkshop$Cakecarrotraw");
Item.createItem("coffeeworkshop$Cakecarrotraw", "\u80e1\u841d\u535c\u86cb\u7cd5\u7cca", {name: "cakecarrotraw"}, {inTech: true, stack: 64});
IDRegistry.genItemID("coffeeworkshop$Cakecheese");
Item.createItem("coffeeworkshop$Cakecheese", "\u829d\u58eb\u86cb\u7cd5", {name: "cakecheese"}, {inTech: true, stack: 64});
IDRegistry.genItemID("coffeeworkshop$Cakecheesemodel");
Item.createItem("coffeeworkshop$Cakecheesemodel", "\u829d\u58eb\u86cb\u7cd5\u6a21\u5177", {name: "cakecheesemodel"}, {inTech: true, stack: 64});
IDRegistry.genItemID("coffeeworkshop$Cakecheeseraw");
Item.createItem("coffeeworkshop$Cakecheeseraw", "\u829d\u58eb\u86cb\u7cd5\u7cca", {name: "cakecheeseraw"}, {inTech: true, stack: 64});
IDRegistry.genItemID("coffeeworkshop$Cakesponge");
Item.createItem("coffeeworkshop$Cakesponge", "\u6d77\u7ef5\u86cb\u7cd5", {name: "cakesponge"}, {inTech: true, stack: 64});
IDRegistry.genItemID("coffeeworkshop$Cakespongemodel");
Item.createItem("coffeeworkshop$Cakespongemodel", "\u6d77\u7ef5\u86cb\u7cd5\u6a21\u5177", {name: "cakespongemodel"}, {inTech: true, stack: 64});
IDRegistry.genItemID("coffeeworkshop$Cakespongeraw");
Item.createItem("coffeeworkshop$Cakespongeraw", "\u6d77\u7ef5\u86cb\u7cd5\u7cca", {name: "cakespongeraw"}, {inTech: true, stack: 64});
IDRegistry.genItemID("coffeeworkshop$Cakeredvelvet");
Item.createItem("coffeeworkshop$Cakeredvelvet", "\u7ea2\u4e1d\u7ed2\u86cb\u7cd5", {name: "cakeredvelvet"}, {inTech: true, stack: 64});
IDRegistry.genItemID("coffeeworkshop$Cakeredvelvetmodel");
Item.createItem("coffeeworkshop$Cakeredvelvetmodel", "\u7ea2\u4e1d\u7ed2\u86cb\u7cd5\u6a21\u5177", {name: "cakeredvelvetmodel"}, {inTech: true, stack: 64});
IDRegistry.genItemID("coffeeworkshop$Cakeredvelvetraw");
Item.createItem("coffeeworkshop$Cakeredvelvetraw", "\u7ea2\u4e1d\u7ed2\u86cb\u7cd5\u7cca", {name: "cakeredvelvetraw"}, {inTech: true, stack: 64});
IDRegistry.genItemID("coffeeworkshop$Cakeschwarzwald");
Item.createItem("coffeeworkshop$Cakeschwarzwald", "\u9ed1\u68ee\u6797\u86cb\u7cd5", {name: "cakeschwarzwald"}, {inTech: true, stack: 64});
IDRegistry.genItemID("coffeeworkshop$Cakemodel");
Item.createItem("coffeeworkshop$Cakemodel", "\u5706\u5f62\u86cb\u7cd5\u6a21\u5177", {name: "cakemodel"}, {inTech: true, stack: 64});
IDRegistry.genItemID("coffeeworkshop$Cakemodelsquare");
Item.createItem("coffeeworkshop$Cakemodelsquare", "\u65b9\u5f62\u86cb\u7cd5\u6a21\u5177", {name: "cakemodelsquare"}, {inTech: true, stack: 64});
IDRegistry.genItemID("coffeeworkshop$Cakespongechocolate");
Item.createItem("coffeeworkshop$Cakespongechocolate", "\u5de7\u514b\u529b\u6d77\u7ef5\u86cb\u7cd5", {name: "cakespongechocolate"}, {inTech: true, stack: 64});
IDRegistry.genItemID("coffeeworkshop$Cakespongechocolatemodel");
Item.createItem("coffeeworkshop$Cakespongechocolatemodel", "\u5de7\u514b\u529b\u6d77\u7ef5\u86cb\u7cd5\u6a21\u5177", {name: "cakespongechocolatemodel"}, {inTech: true, stack: 64});
IDRegistry.genItemID("coffeeworkshop$Cakespongechocolateraw");
Item.createItem("coffeeworkshop$Cakespongechocolateraw", "\u5de7\u514b\u529b\u6d77\u7ef5\u86cb\u7cd5\u7cca", {name: "cakespongechocolateraw"}, {inTech: true, stack: 64});
IDRegistry.genItemID("cheese");
Item.createItem("cheese", "\u5976\u916a", {name: "cheese"}, {inTech: true, stack: 64});
IDRegistry.genItemID("coffeeworkshop$Chocolatebar");
Item.createItem("coffeeworkshop$Chocolatebar", "\u5de7\u514b\u529b\u677f", {name: "chocolatebar"}, {inTech: true, stack: 64});
Recipes.addShaped({id: ItemID.coffeeworkshop$Chocolatebar, count: 1, data: 0}, ["aa", "c"], ["a", ItemID.coffeeworkshop$Cocoabatter, 0, "c", 353, 0], function (api, field, result) {
    for (var i in field) {
        api.decreaseFieldSlot(i);
    }
});
IDRegistry.genItemID("coffeeworkshop$Chocolatechip");
Item.createItem("coffeeworkshop$Chocolatechip", "\u5de7\u514b\u529b\u788e", {name: "chocolatechip"}, {inTech: true, stack: 64});
IDRegistry.genItemID("coffeeworkshop$Cocoabatter");
Item.createItem("coffeeworkshop$Cocoabatter", "\u53ef\u53ef\u7cca", {name: "cocoabatter"}, {inTech: true, stack: 64});
IDRegistry.genItemID("coffeeworkshop$Cocoapowder");
Item.createItem("coffeeworkshop$Cocoapowder", "\u53ef\u53ef\u7c89", {name: "cocoapowder"}, {inTech: true, stack: 64});
var setItem = function (item, cn) {
    if (item === "dough" || item === "cheese" || item === "butter" || item === "flour" || item === "yeast" || item === "mixing_bowl") {
        IDRegistry.genItemID(item);
        Item.createItem(item, cn, {name: item}, {inTech: true, stack: 64});
    } else {
        IDRegistry.genItemID("coffeeworkshop$" + item);
        Item.createItem("coffeeworkshop$" + item, cn, {name: item}, {inTech: true, stack: 64});
    }
};
var setfood1 = function (item, cn, stack, food) {
    IDRegistry.genItemID("coffeeworkshop$" + item);
    Item.createFoodItem("coffeeworkshop$" + item, cn, {name: item}, {inTech: true, stack: stack, food: food});
    Recipes.addShaped({id: ItemID["coffeeworkshop$cookie_" + item], count: 1, data: 0}, ["xa"], ["x", ItemID["coffeeworkshop$" + item], 0, "a", 357, 0]);
};
setItem("coffeepowder", "\u5496\u5561\u7c89");
setfood("cookie_icecream_apple", "\u82f9\u679c\u997c\u5e72\u5723\u4ee3", 64, 5);
Item.setUseAnimation(ItemID.coffeeworkshop$cookie_icecream_apple, 1);
setfood("cookie_icecream_berry", "\u6df7\u5408\u8393\u679c\u997c\u5e72\u5723\u4ee3", 64, 5);
Item.setUseAnimation(ItemID.coffeeworkshop$cookie_icecream_berry, 1);
setfood("cookie_icecream_coffee", "\u5496\u5561\u997c\u5e72\u5723\u4ee3", 64, 5);
Item.setUseAnimation(ItemID.coffeeworkshop$cookie_icecream_coffee, 1);
setfood("cookie_icecream_lemon", "\u67e0\u6aac\u997c\u5e72\u5723\u4ee3", 64, 5);
Item.setUseAnimation(ItemID.coffeeworkshop$cookie_icecream_lemon, 1);
setfood("cookie_icecream_melon", "\u897f\u74dc\u997c\u5e72\u5723\u4ee3", 64, 5);
Item.setUseAnimation(ItemID.coffeeworkshop$cookie_icecream_melon, 1);
setfood("cookie_icecream_vanilla", "\u9999\u8349\u997c\u5e72\u5723\u4ee3", 64, 5);
Item.setUseAnimation(ItemID.coffeeworkshop$cookie_icecream_vanilla, 1);
setItem("cream_milk", "\u9c9c\u5976\u6cb9");
Recipes.addShaped({id: ItemID.coffeeworkshop$cream_milk, count: 1, data: 0}, ["aa", "c"], ["a", 325, 1, "c", 353, 0], function (api, field, result) {
    for (var i in field) {
        api.decreaseFieldSlot(i);
    }
    Player.addItemToInventory(325, 2);
});
setItem("cream_chocolate", "\u5de7\u514b\u529b\u5976\u6cb9");
setItem("cream_coffee", "\u5496\u5561\u5976\u6cb9");
setItem("cream_apple", "\u82f9\u679c\u5976\u6cb9");
setItem("cream_berry", "\u6df7\u5408\u8393\u679c\u5976\u6cb9");
setItem("cream_lemon", "\u67e0\u6aac\u5976\u6cb9");
setItem("cream_melon", "\u897f\u74dc\u5976\u6cb9");
var fastAddr = function (a, d, c) {
    Recipes.addShaped({id: c, count: 1, data: 0}, ["a", "c"], ["a", a, 0, "c", d, 0]);
};
fastAddr(ItemID.coffeeworkshop$cream_milk, 360, ItemID.coffeeworkshop$cream_melon);
fastAddr(ItemID.coffeeworkshop$cream_milk, ItemID.coffeeworkshop$Cocoapowder, ItemID.coffeeworkshop$cream_chocolate);
fastAddr(ItemID.coffeeworkshop$cream_milk, 260, ItemID.coffeeworkshop$cream_apple);
fastAddr(ItemID.coffeeworkshop$cream_milk, ItemID.coffeeworkshop$coffeepowder, ItemID.coffeeworkshop$cream_coffee);
setItem("croissant", "\u53ef\u9882");
setItem("croissant_chocolate", "\u5de7\u514b\u529b\u53ef\u9882");
setItem("croissant_raw", "\u53ef\u9882\u9762\u56e2");
addFurnace(ItemID.coffeeworkshop$croissant_raw, ItemID.coffeeworkshop$croissant, 0);
Recipes.addShaped({id: ItemID.coffeeworkshop$croissant_raw, count: 2, data: 0}, ["xa", "sr"], ["x", ItemID.dough, 0, "a", ItemID.butter, 0, "s", 344, 0, "r", 353, 0]);
setItem("croissant_chocolate_raw", "\u5de7\u514b\u529b\u53ef\u9882\u9762\u56e2");
Recipes.addShaped({id: ItemID.coffeeworkshop$croissant_chocolate_raw, count: 2, data: 0}, ["xa", "srh"], ["x", ItemID.dough, 0, "a", ItemID.butter, 0, "s", 344, 0, "r", 353, 0, "h", ItemID.coffeeworkshop$Chocolatebar, 0]);
setItem("d_bar", "D\u578b\u6218\u6597\u519b\u7cae");
setItem("dough", "\u9762\u56e2");
Recipes.addShaped({id: ItemID.dough, count: 1, data: 0}, ["a", "cc"], ["a", 325, 8, "c", ItemID.coffeeworkshop$flour, 0], function (api, field, result) {
    for (var i in field) {
        api.decreaseFieldSlot(i);
    }
    Player.addItemToInventory(325, 1);
});
setItem("dough_baguette", "\u6cd5\u68cd\u9762\u56e2");
addFurnace(ItemID.coffeeworkshop$dough_baguette, ItemID.coffeeworkshop$baguette, 0);
Recipes.addShaped({id: ItemID.coffeeworkshop$dough_baguette, count: 1, data: 0}, ["xx"], ["x", ItemID.dough, 0]);
setItem("dough_cookie", "\u66f2\u5947\u9762\u56e2");
addFurnace(ItemID.coffeeworkshop$dough_cookie, 357, 0);
Recipes.addShaped({id: ItemID.coffeeworkshop$dough_cookie, count: 1, data: 0}, ["xa"], ["x", ItemID.dough, 0, "a", ItemID.coffeeworkshop$Chocolatechip, 0]);
setItem("flour", "\u9762\u7c89");
setItem("ice_slag", "\u51b0\u6e23");
setfood1("icecream_apple", "\u82f9\u679c\u51b0\u6dc7\u6dcb", 64, 1);
Item.setUseAnimation(ItemID.coffeeworkshop$icecream_apple, 1);
setfood1("icecream_berry", "\u6df7\u5408\u8393\u679c\u51b0\u6dc7\u6dcb", 64, 1);
Item.setUseAnimation(ItemID.coffeeworkshop$icecream_berry, 1);
setfood("icecream_chocolate", "\u5de7\u514b\u529b\u51b0\u6dc7\u6dcb", 64, 1);
Item.setUseAnimation(ItemID.coffeeworkshop$icecream_chocolate, 1);
setfood1("icecream_coffee", "\u5496\u5561\u51b0\u6dc7\u6dcb", 64, 1);
Item.setUseAnimation(ItemID.coffeeworkshop$icecream_coffee, 1);
setfood1("icecream_lemon", "\u67e0\u6aac\u51b0\u6dc7\u6dcb", 64, 1);
Item.setUseAnimation(ItemID.coffeeworkshop$icecream_lemon, 1);
setfood1("icecream_melon", "\u897f\u74dc\u51b0\u6dc7\u6dcb", 64, 1);
Item.setUseAnimation(ItemID.coffeeworkshop$icecream_melon, 1);
setfood1("icecream_vanilla", "\u9999\u8349\u51b0\u6dc7\u6dcb", 64, 1);
Item.setUseAnimation(ItemID.coffeeworkshop$icecream_vanilla, 1);
setItem("milk_foam", "\u5976\u6ce1");
setItem("mixing_bowl", "\u6405\u62cc\u76c6");
setItem("muffin", "\u739b\u82ac");
setItem("muffin_raw", "\u739b\u82ac\u86cb\u7cd5\u7cca");
addFurnace(ItemID.coffeeworkshop$muffin_raw, ItemID.coffeeworkshop$muffin, 0);
setItem("muffin_berry", "\u6df7\u5408\u8393\u679c\u739b\u82ac");
setItem("muffin_berry_raw", "\u6df7\u5408\u8393\u679c\u739b\u82ac\u86cb\u7cd5\u7cca");
addFurnace(ItemID.coffeeworkshop$muffin_berry_raw, ItemID.coffeeworkshop$muffin_berry, 0);
setItem("muffin_chocolate", "\u5de7\u514b\u529b\u739b\u82ac");
setItem("muffin_chocolate_raw", "\u5de7\u514b\u529b\u739b\u82ac\u86cb\u7cd5\u7cca");
addFurnace(ItemID.coffeeworkshop$muffin_chocolate_raw, ItemID.coffeeworkshop$muffin_chocolate, 0);
setItem("tiramisu", "\u63d0\u62c9\u7c73\u82cf");
setItem("tiramisu_model", "\u63d0\u62c9\u7c73\u82cf\u6a21\u5177");
setItem("yeast", "\u9175\u6bcd");

