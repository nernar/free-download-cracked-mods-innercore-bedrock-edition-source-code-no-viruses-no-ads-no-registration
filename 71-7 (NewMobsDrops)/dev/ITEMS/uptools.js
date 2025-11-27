IDRegistry.genItemID("UP_zombie_pickaxe");
Item.createItem("UP_zombie_pickaxe", "Усиленный Кирка Зомбака", {name: "UP_zombie_pickaxe", meta: 0}, {stack: 1});
ToolAPI.setTool(ItemID.UP_zombie_pickaxe, "zombie_uppickaxe", ToolType.pickaxe);

Callback.addCallback("DestroyBlock", function(coords, player){
if(Player.getCarriedItem().id==ItemID.UP_zombie_pickaxe)
{
x = coords.x;
y = coords.y;
z = coords.z;
World.destroyBlock(x, y+1, z, true);
World.destroyBlock(x, y-1, z, true);
}
});

IDRegistry.genItemID("UP_skelet_pickaxe");
Item.createItem("UP_skelet_pickaxe", "Усиленный Кирка Скелета", {name: "UP_skelet_pickaxe", meta: 0}, {stack: 1});
ToolAPI.setTool(ItemID.UP_skelet_pickaxe, "skelet_uppickaxe", ToolType.pickaxe);

Callback.addCallback("DestroyBlock", function(coords, player){
if(Player.getCarriedItem().id==ItemID.UP_skelet_pickaxe)
{
x = coords.x;
y = coords.y;
z = coords.z;
World.destroyBlock(x+1, y, z, true);
World.destroyBlock(x-1, y, z, true);
}
});

IDRegistry.genItemID("UP_spider_pickaxe");
Item.createItem("UP_spider_pickaxe", "Усиленный Кирка Паука", {name: "UP_spider_pickaxe", meta: 0}, {stack: 1});
ToolAPI.setTool(ItemID.UP_spider_pickaxe, "spider_uppickaxe", ToolType.pickaxe);

Callback.addCallback("DestroyBlock", function(coords, player){
if(Player.getCarriedItem().id==ItemID.UP_spider_pickaxe)
{
x = coords.x;
y = coords.y;
z = coords.z;
World.destroyBlock(x+1, y, z, true);
World.destroyBlock(x-1, y, z, true);
World.destroyBlock(x, y, z+1, true);
World.destroyBlock(x, y, z-1, true);
World.destroyBlock(x+1, y, z+1, true);
World.destroyBlock(x-1, y, z-1, true);
World.destroyBlock(x+1, y, z-1, true);
World.destroyBlock(x-1, y, z+1, true);
}
});

IDRegistry.genItemID("UP_creeper_pickaxe");
Item.createItem("UP_creeper_pickaxe", "Усиленный Кирка Крипера", {name: "UP_creeper_pickaxe", meta: 0}, {stack: 1});
ToolAPI.setTool(ItemID.UP_creeper_pickaxe, "creeper_uppickaxe", ToolType.pickaxe);

Callback.addCallback("DestroyBlock", function(coords, player){
if(Player.getCarriedItem().id==ItemID.UP_creeper_pickaxe)
{
x = coords.x;
y = coords.y;
z = coords.z;
World.destroyBlock(x, y+1, z, true);
World.destroyBlock(x, y-1, z, true);
World.destroyBlock(x, y, z+1, true);
World.destroyBlock(x, y, z-1, true);
World.destroyBlock(x, y+1, z+1, true);
World.destroyBlock(x, y-1, z-1, true);
World.destroyBlock(x, y+1, z-1, true);
World.destroyBlock(x, y-1, z+1, true);
}
});

IDRegistry.genItemID("UP_sprut_pickaxe");
Item.createItem("UP_sprut_pickaxe", "Усиленный Кирка Спрута", {name: "UP_sprut_pickaxe", meta: 0}, {stack: 1});
ToolAPI.setTool(ItemID.UP_sprut_pickaxe, "sprut_uppickaxe", ToolType.pickaxe);

Callback.addCallback("DestroyBlock", function(coords, player){
if(Player.getCarriedItem().id==ItemID.UP_sprut_pickaxe)
{
x = coords.x;
y = coords.y;
z = coords.z;
World.destroyBlock(x, y+1, z, true);
World.destroyBlock(x, y-1, z, true);
World.destroyBlock(x, y, z+1, true);
World.destroyBlock(x, y, z-1, true);
World.destroyBlock(x, y+1, z+1, true);
World.destroyBlock(x, y-1, z-1, true);
World.destroyBlock(x, y+1, z-1, true);
World.destroyBlock(x, y-1, z+1, true);
World.destroyBlock(x, y+2, z, true);
World.destroyBlock(x, y-2, z, true);
World.destroyBlock(x, y, z+2, true);
World.destroyBlock(x, y, z-2, true);
World.destroyBlock(x, y+2, z+2, true);
World.destroyBlock(x, y-2, z-2, true);
World.destroyBlock(x, y+2, z-2, true);
World.destroyBlock(x, y-2, z+2, true);
}
});

IDRegistry.genItemID("UP_slime_pickaxe");
Item.createItem("UP_slime_pickaxe", "Усиленный Кирка Слиза", {name: "UP_slime_pickaxe", meta: 0}, {stack: 1});
ToolAPI.setTool(ItemID.UP_slime_pickaxe, "slime_uppickaxe", ToolType.pickaxe);

Callback.addCallback("DestroyBlock", function(coords, player){
if(Player.getCarriedItem().id==ItemID.UP_slime_pickaxe)
{
x = coords.x;
y = coords.y;
z = coords.z;
World.destroyBlock(x, y+1, z, true);
World.destroyBlock(x, y-1, z, true);
World.destroyBlock(x, y, z+1, true);
World.destroyBlock(x, y, z-1, true);
World.destroyBlock(x, y+2, z, true);
World.destroyBlock(x, y-2, z, true);
World.destroyBlock(x, y, z+2, true);
World.destroyBlock(x, y, z-2, true);
}
});

IDRegistry.genItemID("UP_ocelot_pickaxe");
Item.createItem("UP_ocelot_pickaxe", "Усиленный Кирка Оцелота", {name: "UP_ocelot_pickaxe", meta: 0}, {stack: 1});
ToolAPI.setTool(ItemID.UP_ocelot_pickaxe, "ocelot_uppickaxe", ToolType.pickaxe);

Callback.addCallback("DestroyBlock", function(coords, player){
if(Player.getCarriedItem().id==ItemID.UP_ocelot_pickaxe)
{
x = coords.x;
y = coords.y;
z = coords.z;
World.destroyBlock(x, y+1, z, true);
World.destroyBlock(x, y-1, z, true);
World.destroyBlock(x, y, z+1, true);
World.destroyBlock(x, y, z-1, true);
World.destroyBlock(x, y+1, z+1, true);
World.destroyBlock(x, y-1, z-1, true);
World.destroyBlock(x, y+1, z-1, true);
World.destroyBlock(x, y-1, z+1, true);
World.destroyBlock(x, y+2, z, true);
World.destroyBlock(x, y-2, z, true);
World.destroyBlock(x, y, z+2, true);
World.destroyBlock(x, y, z-2, true);
World.destroyBlock(x, y+2, z+2, true);
World.destroyBlock(x, y-2, z-2, true);
World.destroyBlock(x, y+2, z-2, true);
World.destroyBlock(x, y-2, z+2, true);
}
});

IDRegistry.genItemID("UP_blaze_pickaxe");
Item.createItem("UP_blaze_pickaxe", "Усиленный Кирка Ифрита", {name: "UP_blaze_pickaxe", meta: 0}, {stack: 1});
ToolAPI.setTool(ItemID.UP_blaze_pickaxe, "blaze_uppickaxe", ToolType.pickaxe);

Callback.addCallback("DestroyBlock", function(coords, player){
if(Player.getCarriedItem().id==ItemID.UP_blaze_pickaxe)
{
x = coords.x;
y = coords.y;
z = coords.z;
World.destroyBlock(x, y+1, z, true);
World.destroyBlock(x, y-1, z, true);
World.destroyBlock(x, y, z+1, true);
World.destroyBlock(x, y, z-1, true);
World.destroyBlock(x, y+1, z+1, true);
World.destroyBlock(x, y-1, z-1, true);
World.destroyBlock(x, y+1, z-1, true);
World.destroyBlock(x, y-1, z+1, true);
World.destroyBlock(x, y+2, z, true);
World.destroyBlock(x, y-2, z, true);
World.destroyBlock(x, y, z+2, true);
World.destroyBlock(x, y, z-2, true);
World.destroyBlock(x, y+2, z+2, true);
World.destroyBlock(x, y-2, z-2, true);
World.destroyBlock(x, y+2, z-2, true);
World.destroyBlock(x, y-2, z+2, true);
World.destroyBlock(x, y+1, z+2, true);
World.destroyBlock(x, y-1, z-2, true);
World.destroyBlock(x, y+2, z-1, true);
World.destroyBlock(x, y-1, z+2, true);
World.destroyBlock(x, y+2, z+1, true);
World.destroyBlock(x, y-2, z-1, true);
World.destroyBlock(x, y-2, z+1, true);
World.destroyBlock(x, y+1, z-2, true);
}
});

IDRegistry.genItemID("UP_end_pickaxe");
Item.createItem("UP_end_pickaxe", "Усиленный Кирка Эндермена", {name: "UP_end_pickaxe", meta: 0}, {stack: 1});
ToolAPI.setTool(ItemID.UP_end_pickaxe, "end_uppickaxe", ToolType.pickaxe);

Callback.addCallback("DestroyBlock", function(coords, player){
if(Player.getCarriedItem().id==ItemID.UP_end_pickaxe)
{
x = coords.x;
y = coords.y;
z = coords.z;
World.destroyBlock(x+1, y, z, true);
World.destroyBlock(x-1, y, z, true);
World.destroyBlock(x, y, z+1, true);
World.destroyBlock(x, y, z-1, true);
World.destroyBlock(x+1, y, z+1, true);
World.destroyBlock(x-1, y, z-1, true);
World.destroyBlock(x+1, y, z-1, true);
World.destroyBlock(x-1, y, z+1, true);
World.destroyBlock(x+2, y, z, true);
World.destroyBlock(x-2, y, z, true);
World.destroyBlock(x, y, z+2, true);
World.destroyBlock(x, y, z-2, true);
World.destroyBlock(x+2, y, z+2, true);
World.destroyBlock(x-2, y, z-2, true);
World.destroyBlock(x+2, y, z-2, true);
World.destroyBlock(x-2, y, z+2, true);
World.destroyBlock(x+1, y, z+2, true);
World.destroyBlock(x-1, y, z-2, true);
World.destroyBlock(x+2, y, z-1, true);
World.destroyBlock(x-1, y, z+2, true);
World.destroyBlock(x+2, y, z+1, true);
World.destroyBlock(x-2, y, z-1, true);
World.destroyBlock(x-2, y, z+1, true);
World.destroyBlock(x+1, y, z-2, true);
}
});

IDRegistry.genItemID("UP_zombie_axe");
Item.createItem("UP_zombie_axe", "Усиленный Топор Зомбака", {name: "UP_zombie_axe", meta: 0}, {stack: 1});
ToolAPI.setTool(ItemID.UP_zombie_axe, "zombie_upaxe", ToolType.axe);

Callback.addCallback("DestroyBlock", function(coords, player){
if(Player.getCarriedItem().id==ItemID.UP_zombie_axe)
{
x = coords.x;
y = coords.y;
z = coords.z;
World.destroyBlock(x, y+1, z, true);
}
});

IDRegistry.genItemID("UP_skelet_axe");
Item.createItem("UP_skelet_axe", "Усиленный Топор Скелета", {name: "UP_skelet_axe", meta: 0}, {stack: 1});
ToolAPI.setTool(ItemID.UP_skelet_axe, "skelet_upaxe", ToolType.axe);

Callback.addCallback("DestroyBlock", function(coords, player){
if(Player.getCarriedItem().id==ItemID.UP_skelet_axe)
{
x = coords.x;
y = coords.y;
z = coords.z;
World.destroyBlock(x, y+1, z, true);
}
});

IDRegistry.genItemID("UP_spider_axe");
Item.createItem("UP_spider_axe", "Усиленный Топор Паука", {name: "UP_spider_axe", meta: 0}, {stack: 1});
ToolAPI.setTool(ItemID.UP_spider_axe, "spider_upaxe", ToolType.axe);

Callback.addCallback("DestroyBlock", function(coords, player){
if(Player.getCarriedItem().id==ItemID.UP_spider_axe)
{
x = coords.x;
y = coords.y;
z = coords.z;
World.destroyBlock(x, y+1, z, true);
World.destroyBlock(x, y-1, z, true);
}
});

IDRegistry.genItemID("UP_creeper_axe");
Item.createItem("UP_creeper_axe", "Усиленный Топор Крипера", {name: "UP_creeper_axe", meta: 0}, {stack: 1});
ToolAPI.setTool(ItemID.UP_creeper_axe, "creeper_upaxe", ToolType.axe);

Callback.addCallback("DestroyBlock", function(coords, player){
if(Player.getCarriedItem().id==ItemID.UP_creeper_axe)
{
x = coords.x;
y = coords.y;
z = coords.z;
World.destroyBlock(x, y+1, z, true);
World.destroyBlock(x, y-1, z, true);
}
});

IDRegistry.genItemID("UP_sprut_axe");
Item.createItem("UP_sprut_axe", "Усиленный Топор Спрута", {name: "UP_sprut_axe", meta: 0}, {stack: 1});
ToolAPI.setTool(ItemID.UP_sprut_axe, "sprut_upaxe", ToolType.axe);

Callback.addCallback("DestroyBlock", function(coords, player){
if(Player.getCarriedItem().id==ItemID.UP_sprut_axe)
{
x = coords.x;
y = coords.y;
z = coords.z;
World.destroyBlock(x, y+1, z, true);
World.destroyBlock(x, y-1, z, true);
World.destroyBlock(x, y+2, z, true);
World.destroyBlock(x, y+3, z, true);
}
});

IDRegistry.genItemID("UP_slime_axe");
Item.createItem("UP_slime_axe", "Усиленный Топор Слиза", {name: "UP_slime_axe", meta: 0}, {stack: 1});
ToolAPI.setTool(ItemID.UP_slime_axe, "slime_upaxe", ToolType.axe);

Callback.addCallback("DestroyBlock", function(coords, player){
if(Player.getCarriedItem().id==ItemID.UP_slime_axe)
{
x = coords.x;
y = coords.y;
z = coords.z;
World.destroyBlock(x, y+1, z, true);
World.destroyBlock(x, y-1, z, true);
World.destroyBlock(x, y+2, z, true);
World.destroyBlock(x, y+3, z, true);
}
});

IDRegistry.genItemID("UP_ocelot_axe");
Item.createItem("UP_ocelot_axe", "Усиленный Топор Оцелота", {name: "UP_ocelot_axe", meta: 0}, {stack: 1});
ToolAPI.setTool(ItemID.UP_ocelot_axe, "ocelot_upaxe", ToolType.axe);

Callback.addCallback("DestroyBlock", function(coords, player){
if(Player.getCarriedItem().id==ItemID.UP_ocelot_axe)
{
x = coords.x;
y = coords.y;
z = coords.z;
World.destroyBlock(x, y+1, z, true);
World.destroyBlock(x, y-1, z, true);
World.destroyBlock(x, y+2, z, true);
World.destroyBlock(x, y+3, z, true);
}
});

IDRegistry.genItemID("UP_blaze_axe");
Item.createItem("UP_blaze_axe", "Усиленный Топор Ифрита", {name: "UP_blaze_axe", meta: 0}, {stack: 1});
ToolAPI.setTool(ItemID.UP_blaze_axe, "blaze_upaxe", ToolType.axe);

Callback.addCallback("DestroyBlock", function(coords, player){
if(Player.getCarriedItem().id==ItemID.UP_blaze_axe)
{
x = coords.x;
y = coords.y;
z = coords.z;
World.destroyBlock(x, y+1, z, true);
World.destroyBlock(x, y-1, z, true);
World.destroyBlock(x, y+2, z, true);
World.destroyBlock(x, y+3, z, true);
}
});

IDRegistry.genItemID("UP_end_axe");
Item.createItem("UP_end_axe", "Усиленный Топор Эндермена", {name: "UP_end_axe", meta: 0}, {stack: 1});
ToolAPI.setTool(ItemID.UP_end_axe, "end_upaxe", ToolType.axe);

Callback.addCallback("DestroyBlock", function(coords, player){
if(Player.getCarriedItem().id==ItemID.UP_end_axe)
{
x = coords.x;
y = coords.y;
z = coords.z;
World.destroyBlock(x, y+1, z, true);
World.destroyBlock(x, y-1, z, true);
World.destroyBlock(x, y+2, z, true);
World.destroyBlock(x, y+3, z, true);
}
});