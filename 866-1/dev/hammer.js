
var hammers = {
	addItem: function(id, material, i1, i2){
IDRegistry.genItemID(id + "hammer");
Item.createItem(id + "hammer", id + " hammer", {name: id + "hammer", meta: 0}, {stack: 1});

Item.setToolRender(ItemID[id + "hammer"], true);

ToolAPI.registerTool(ItemID[id + "hammer"], material, ["stone"], {damage: 2});


Item.setEnchantType(ItemID[id + "hammer"], Native.EnchantType.pickaxe, 15);

Item.addCreativeGroup("Hammer", Translation.translate("Hammer"), [
	ItemID[id + "hammer"]
]);


Item.addRepairItemIds(ItemID[id + "hammer"], [ItemID[id + "hammer"],i1]);

Item.setAllowedInOffhand(ItemID[id + "hammer"], true);

Item.setGlint(ItemID[id + "hammer"], false);

Callback.addCallback("DestroyBlock", function(coords, block, player){
var side = coords.side;
var X = 1;
var Y = 1;
var Z = 1;
if(side==4 || side==5){X = 0;}
if(side==1 || side==6){Y = 0;}
if(side==2 || side==3){Z = 0;}
for(var xx = coords.x - X; xx <= coords.x + X; xx++){
for(var yy = coords.y - Y; yy <= coords.y + Y; yy++){
for(var zz = coords.z - Z; zz <= coords.z + Z; zz++){
item=Player.getCarriedItem(true);
if(World.getBlockID(xx, yy, zz) !== 7&&item.id==ItemID[id + "hammer"] ){
World.destroyBlock(xx, yy, zz, true);}}}};});



Callback.addCallback("PostLoaded", function(){
Recipes.addShaped({id: ItemID[id + "hammer"], count: 1, data: 0}, [
	"aaa",
	"aba",
	" b "
], ['a', i1, 0, 'b', i2, -1]);});
	}
}

ToolAPI.addToolMaterial("gold", {
      durability: 1360, 
      level: 10, 
      efficiency: 20, 
      damage: 15, 
      enchantability: 15
});



hammers.addItem("wood", "wood", 17, 280);
hammers.addItem("stone", "stone", 4, 280);
hammers.addItem("gold", "gold", 41, 280);
hammers.addItem("iron", "iron", 42, 280);
hammers.addItem("diamond", "diamond", 57, 280);



Translation.addTranslation("wood hammer", {ru: "Деревянный молот"});

Translation.addTranslation("stone hammer", {ru: "Каменный молот"});

Translation.addTranslation("iron hammer", {ru: "Железный молот"});

Translation.addTranslation("gold hammer", {ru: "Золотой молот"});

Translation.addTranslation("diamond hammer", {ru: "Алмазный молот"});
