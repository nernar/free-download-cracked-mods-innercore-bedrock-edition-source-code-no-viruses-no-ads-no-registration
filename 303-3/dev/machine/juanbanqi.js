IDRegistry.genBlockID("coffeeworkshop$ju");
Block.createBlock("coffeeworkshop$ju", [
{name: "火力卷板器", texture: [["wood", 0],["wood", 0],["anvil_base", 0]], inCreative: false}]);

IDRegistry.genItemID("coffeeworkshop$ju");
Item.createItem("coffeeworkshop$ju", "火力卷板器", {name:"ju"}, {inTech: true,stack: 64});

bundBlockToItem(ItemID.coffeeworkshop$ju,BlockID.coffeeworkshop$ju,true);
//下个版本内容暂时不做
