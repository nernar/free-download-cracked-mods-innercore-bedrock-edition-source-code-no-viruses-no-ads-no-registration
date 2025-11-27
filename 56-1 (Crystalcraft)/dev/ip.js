IDRegistry.genItemID("ip");
Item.createItem("ip", "infusion pickaxe", {name: "ip", meta: 0}, {stack: 1});

ToolAPI.addToolMaterial("ip", {durability: 15000, level: 5, efficiency: 20, damage: 5, enchantability: 2});
ToolAPI.setTool(ItemID.ip, "ip", ToolType.pickaxe);

Callback.addCallback("DestroyBlock", function(coords, player){
if(Player.getCarriedItem().id==ItemID.ip)
{
x = coords.x;
y = coords.y;
z = coords.z;
World.destroyBlock(x,y,z,true);
World.destroyBlock(x+1, y, z, true);
World.destroyBlock(x-1, y, z, true);
World.destroyBlock(x, y, z+1, true);
World.destroyBlock(x, y, z-1, true);
World.destroyBlock(x+1, y, z+1, true);
World.destroyBlock(x-1, y, z-1, true);
World.destroyBlock(x+1, y, z-1, true);
World.destroyBlock(x-1, y, z+1, true);
}//если true тогда будет дроп с руд 
});
