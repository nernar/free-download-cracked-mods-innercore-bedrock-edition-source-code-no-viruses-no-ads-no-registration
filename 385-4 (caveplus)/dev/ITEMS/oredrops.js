//Cave Plus Mod for MC Bedrock - InnerCore Version
//This is the developer version of the script! Don´t change or use it.

IDRegistry.genItemID("copperingot");
IDRegistry.genItemID("zincnugget");
IDRegistry.genItemID("tinnugget");
IDRegistry.genItemID("titaniumingot");
IDRegistry.genItemID("lithiumdust");
IDRegistry.genItemID("bismuthingot");
IDRegistry.genItemID("salt");
IDRegistry.genItemID("plumbumingot");
IDRegistry.genItemID("amber");
IDRegistry.genItemID("sapphire");
IDRegistry.genItemID("ruby");

Item.createItem("copperingot", "Copper Ingot",
{name: "copperingot", meta: 0}, {stack: 64});
Item.createItem("zincnugget", "Zinc Nugget",
{name: "zincnugget", meta: 0}, {stack: 64});
Item.createItem("tinnugget", "Tin Nugget",
{name: "tinnugget", meta: 0}, {stack: 64});
Item.createItem("titaniumingot", "Titanium Ingot",
{name: "titaniumingot", meta: 0}, {stack: 64});
Item.createItem("lithiumdust", "Lithium Dust",
{name: "lithiumdustnew", meta: 0}, {stack: 64});
Item.createItem("bismuthingot", "Bismuth Ingot",
{name: "bismuthingot", meta: 0}, {stack: 64});
Item.createItem("salt", "Salt",
{name: "salt", meta: 0}, {stack: 64});
Item.createItem("plumbumingot", "Plumbum Ingot",
{name: "plumbumingot", meta: 0}, {stack: 16});
Item.createItem("amber", "Amber",
{name: "amber", meta: 0}, {stack: 64});
Item.createItem("sapphire", "Sapphire",
{name: "sapphire", meta: 0}, {stack: 64});
Item.createItem("ruby", "Ruby",
{name: "ruby", meta: 0}, {stack: 64});
Callback.addCallback("PostLoaded", function () {
  Recipes.addFurnace(BlockID.copperore, ItemID.copperingot, 0);
});
Callback.addCallback("PostLoaded", function () {
  Recipes.addFurnace(BlockID.titaniumore, ItemID.titaniumingot, 0);
});
Callback.addCallback("PostLoaded", function () {
  Recipes.addFurnace(BlockID.bismuthore, ItemID.bismuthingot, 0);
});
Callback.addCallback("PostLoaded", function () {
  Recipes.addFurnace(BlockID.plumbumore, ItemID.plumbumingot, 0);
});
