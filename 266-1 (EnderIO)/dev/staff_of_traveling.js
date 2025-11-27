IDRegistry.genItemID("itemTravelStaff");
Item.createItem("itemTravelStaff", "Staff of traveling", {name: "itemTravelStaff"}, {stack: 1});
ChargeItemRegistry.registerItem(ItemID.itemTravelStaff, RF, 250000, 0);
Item.registerNameOverrideFunction(ItemID.itemTravelStaff, function (item, name) {
    return name + "\n" + "\xa77RF:" + ChargeItemRegistry.getEnergyStored(item) + "/" + (Item.getMaxDamage(item.id) - 1);
});
Item.registerNoTargetUseFunction("itemTravelStaff", function (item) {
    if (ChargeItemRegistry.getEnergyStored(item) >= 1500) {
        let pos = Player.getPosition();
        let vec = Entity.getLookVector(Player.get());
        let crd = {};
        for (let t = 0; t <= 64; t++) {
            crd.x = pos.x + vec.x * t;
            crd.y = pos.y + vec.y * t;
            crd.z = pos.z + vec.z * t;
            if (!GenerationUtils.isTransparentBlock(World.getBlockID(crd.x, crd.y, crd.z))) {
                Game.tipMessage("X: " + Math.round(crd.x) + " Y: " + Math.round(crd.y + 2) + " Z: " + Math.round(crd.z));
                Entity.setPosition(Player.get(), crd.x, crd.y + 2, crd.z);
                Player.setCarriedItem(ItemID.itemTravelStaff, 1, item.data + 1500);
                break;
            }
        }
    }
});

