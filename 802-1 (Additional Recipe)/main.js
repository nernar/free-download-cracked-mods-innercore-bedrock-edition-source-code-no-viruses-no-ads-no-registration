/*
BUILD INFO:
  dir: dev
  target: main.js
  files: 6
*/



// file: main.js

/*
    la: English
*/
//

IMPORT("ToolLib");
//

Callback.addCallback(
    'ModsLoaded', function() {
        alert(
            "Additional Recipe was created by JenCuthbert >/<"
        )
    }
);

//

Callback.addCallback(
    'LevelCreated', function() {
        alert(
            "The world is loading, good luck! :>"
        )
    }
);




// file: Book/DevBook.js

IDRegistry.genItemID("devbook");
Item.createItem(
    "devbook", 
    "§1Dev Book§r\n§4can't craft§r", {
        name: "devbook", meta: 0
    }, {stack: 1}
);
//

ToolAPI.addToolMaterial(
    "devbook", {
        durability: 999999, 
        level: 4, 
        efficiency: 50, 
        damage: 999999, 
        enchantability: 30
    }
);
//
ToolAPI.setTool(
    ItemID.devbook, 
    "devbook", 
    ToolType.sword
);
//
ToolAPI.setTool(
    ItemID.devbook, 
    "devbook", 
    ToolType.pickaxe
);
//
ToolAPI.setTool(
    ItemID.devbook, 
    "devbook", 
    ToolType.shovel
);
//
ToolAPI.setTool(
    ItemID.devbook, 
    "devbook", 
    ToolType.axe
);




// file: Additional_Recipe/TinyFuel.js

IDRegistry.genItemID("tiny_coal");
IDRegistry.genItemID("tiny_charcoal");

// create item

Item.createItem(
    "tiny_coal", 
    "Tiny Coal\n§1Additional Recipe§r", {
        name: "tiny_coal", 
        meta: 0
    }, {stack: 64}
);
Item.createItem(
    "tiny_charcoal", 
    "Tiny Charcoal\n§1Additional Recipe§r", {
        name: "tiny_charcoal", 
        meta: 0
    }, {stack: 64}
);

// recipes

Recipes.addShaped({
    id: ItemID.tiny_coal, 
    count: 9, 
    data: 0
 }, ["", " c ", ""], ['c', 263, 0]
);

Recipes.addShaped({
    id: ItemID.tiny_charcoal, 
    count: 9, 
    data: 0
 }, ["", " c ", ""], ['c', 263, 1]
);

Recipes.addShaped({
    id: 50, 
    count: 2, 
    data: 0
}, ["", " t ", " s "], [
    't', ItemID.tiny_coal, 0
    ,'s', 280, 0
 ]
);




// file: Additional_Recipe/QuickCrafting.js

Recipes.addShaped({
    id: 280, 
    count: 16, 
    data: 0
}, [
    "   ", " l ", " l "
 ], ['l', 17, 0]
);
Recipes.addShaped({
    id: 280, 
    count: 16, 
    data: 0
}, [
    "   ", " l ", " l "
 ], ['l', 17, 1]
);
Recipes.addShaped({
    id: 280, 
    count: 16, 
    data: 0
}, [
    "   ", " l ", " l "
 ], ['l', 17, 2]
);
Recipes.addShaped({
    id: 280, 
    count: 16, 
    data: 0
}, [
    "   ", " l ", " l "
 ], ['l', 17, 3]
);

Recipes.addShaped({
    id: 54, 
    count: 24, 
    data: 0
}, [
    "lll", "l l", "lll"
 ], ['l', 17, 0]
);
Recipes.addShaped({
    id: 54, 
    count: 24, 
    data: 0
}, [
    "lll", "l l", "lll"
 ], ['l', 17, 1]
);
Recipes.addShaped({
    id: 54, 
    count: 24, 
    data: 0
}, [
    "lll", "l l", "lll"
 ], ['l', 17, 2]
);
Recipes.addShaped({
    id: 54, 
    count: 24, 
    data: 0
}, [
    "lll", "l l", "lll"
 ], ['l', 17, 3]
);




// file: Additional_Recipe/DiamondNugget.js

IDRegistry.genItemID(
    "diamond_nugget"
);
//

Item.createItem(
    "diamond_nugget", 
    "Diamond Nugget\n§1Additional Recipe§r", {
        name: "diamond_nugget", 
        meta: 0
    }, {stack: 64}
);
//

Recipes.addShaped({
    id: ItemID.diamond_nugget, 
    count: 3, 
    data: 0
}, ["", " d ", ""], ['d', 264, 0]
);
//

Recipes.addShaped({
    id: 278, 
    count: 1, 
    data: 0
}, ["ddd", " s ", " s "], [
    'd', ItemID.diamond_nugget, 0,
    's', 280, 0
 ]
);




// file: Additional_Recipe/StoneStick.js

IDRegistry.genItemID(
    "stone_stick"
);
//

Item.createItem(
    "stone_stick", 
    "Stone Stick\n§1Additional Recipe§r", {
        name: "stone_stick", 
        meta: 0
    }, {stack: 64}
);
//

Recipes.addShaped({
    id: 50, 
    count: 4, 
    data: 0
}, [
    "", " c ", " s "
 ], [
    'c', 263, 0,'s', ItemID.stone_stick, 0
 ]
);




