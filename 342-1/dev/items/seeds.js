IDRegistry.genItemID("fireleavpetal");
Item.createItem("fireleavpetal", "Лепестки огнецвета", {name: "fireleavpetal", meta: 0}, {stack: 64});


IDRegistry.genItemID("fireleavseeds");
Item.createItem("fireleavseeds", "Семена огнецвета", {name: "fireleavseeds", meta: 0}, {stack: 64});



Callback.addCallback("ItemUse", function (coords, item, block) {
if (item.id==ItemID.fireleavseeds)
{
World.setBlock (coords.relative.x, coords.relative.y, coords.relative.z, BlockID.fireleav4, 0);
Player.decreaseCarriedItem (1);
}
});