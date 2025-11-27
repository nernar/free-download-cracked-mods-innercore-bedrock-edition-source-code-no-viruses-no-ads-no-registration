importLib("directionBlock", "*");
importLib("chancejs", "*");
var BLOCK_TYPE_STONE = Block.createSpecialType({base: 1, solid: true, destroytime: 2, explosionres: 2}, "stone");
var BLOCK_TYPE_LEAF = Block.createSpecialType({base: 31, solid: true, destroytime: 2, explosionres: 2});
var BLOCK_TYPE_TI = Block.createSpecialType({base: 50, solid: true});
var GROUND_TILES = {2: true, 3: true};
var MobEffect = Native.PotionEffect;
var Enchantment = Native.Enchantment;
var BlockSide = Native.BlockSide;
var EntityType = Native.EntityType;
Callback.addCallback("LevelLoaded", function () {
    var myChance = new Chance("haha");
    print(myChance.integer({min: -20, max: 20}), "#FFA703");
});
var furnaceList = {};
var addFurnace = function (a, b, data) {
    Recipes.addFurnace(a, b, data);
    if (furnaceList[b]) {
        furnaceList[b].push(a);
    } else {
        furnaceList[b] = [a];
    }
};

