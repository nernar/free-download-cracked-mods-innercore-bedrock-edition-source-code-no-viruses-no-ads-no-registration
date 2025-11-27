var curLink;
var linking = "none";
IDRegistry.genItemID("forestWand");
Item.createItem("forestWand", "Forest Wand", {name: "forestWand"});
Callback.addCallback("ItemUse", function (coords, item, block) {
    if (item.id == ItemID.forestWand) {
        if (block.id == BlockID.manaSpreader && linking == "none") {
            alert("spreader");
            curLink = World.getTileEntity(coords.x, coords.y, coords.z);
            linking = "spreader";
        } else {
            if (block.id == BlockID.manaPool && linking == "spreader") {
                alert("storage linked");
                curLink.data.link = World.getTileEntity(coords.x, coords.y, coords.z);
                linking = "none";
            } else {
                if (isGenerator(block.id) && linking == "none") {
                    alert("flower");
                    curLink = World.getTileEntity(coords.x, coords.y, coords.z);
                    linking = "flower";
                } else {
                    if (block.id == BlockID.manaSpreader && linking == "flower") {
                        alert("flower linked");
                        World.getTileEntity(coords.x, coords.y, coords.z).data.flowers.push(curLink);
                        linking = "none";
                    } else {
                        if (World.getTileEntity(coords.x, coords.y, coords.z)) {
                            linking = "none";
                            alert("Current Mana: " + World.getTileEntity(coords.x, coords.y, coords.z).data.curMana);
                        } else {
                            linking = "none";
                            alert("none");
                        }
                    }
                }
            }
        }
    }
});

