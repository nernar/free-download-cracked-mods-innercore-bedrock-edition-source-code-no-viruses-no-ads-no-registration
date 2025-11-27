IDRegistry.genItemID("ingotWorlds");
Item.createItem("ingotWorlds", "Ingot three worlds", {name: "slitok_trekh_mirov", meta: 0});

Recipes.addShaped({id: ItemID.ingotWorlds, count: 2, data: 0}, [
	"abc",
	"def",
	"ghi"
], ['a', ItemID.ingotAdamantium, 0, 'b', ItemID.ingotMithril, 0, 'с', ItemID.ingotPlatinum, 0, 'd', ItemID.ingotCopper, 0, 'e', ItemID.ingotTin, 0, 'f', ItemID.ingotLead, 0, 'g', ItemID.ingotMithril, 0, 'h', ItemID.ingotSilver, 0, 'i', ItemID.ingotOryhalk, 0]);


/*
magic/dimensions/dim1.js
magic/dimensions/blockDim1.js
magic/magic item/stick 1.js 
magic/magic item/magicHammer.js 
magic/magic item/ingot_three_worlds.js
magic/magic block/MagicWorcbrench/MagicBlock.js 
magic/magic block/MagicGenerator/MagicBlock.js 
magic/magic block/MagicGenerator/Recipes.js 
*/