IDRegistry.genItemID("dn_real");
Item.createItem("dn_real", "Мини-квест лист", {name: "listok", meta: 0}, {stack: 1});
IDRegistry.genItemID("djunglestring");

Item.createItem("djunglestring", "Нить Джунгли", {name: "Djunglestring", meta: 0}, {stack: 64});
Block.registerDropFunctionForID(18, function(coords, blockID, blockData, level){
if (blockData == 3){
var drop = [];
if(Math.random()<3.0)
drop.push([ItemID.djunglestring, 1, 0]);
return drop;
}
});

IDRegistry.genItemID("jungle_key");
Item.createItem("jungle_key", "Ключ к вратам затерянных джунглей", {name: "junglekey", meta: 0}, {stack: 64});
Recipes.addShaped({id: ItemID.jungle_key, count: 1, data: 0}, [
    "  x",
    "xa ",
    "xx "
], ['a', ItemID.djunglestring, 0, 'x', 266, 0]);