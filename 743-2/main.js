Entity.getYaw = ModAPI.requireGlobal("Entity.getYaw");
var chestCarriers = {chest: 1, containers: {}};
Saver.addSavesScope("ChestCarrierScope", function read(scope) {
    if (scope) {
        chestCarriers = scope || {};
    }
}, function save() {
    return chestCarriers || {};
});
Translation.addTranslation("Chest Carrier", {zh: "\u642c\u7bb1\u5668", ru: "\u042f\u0449\u0438\u043a \u043f\u0435\u0440\u0435\u0432\u043e\u0437\u0447\u0438\u043a"});
IDRegistry.genItemID("chestCarrier");
Item.createItem("chestCarrier", "Chest Carrier", {name: "chest_carrier", meta: 0}, {stack: 1});
Item.setToolRender(ItemID.chestCarrier, true);
Recipes.addShaped({id: ItemID.chestCarrier, data: 0, count: 1}, ["x x", " x ", " x "], ["x", 280, 0]);
Item.registerIconOverrideFunction("chestCarrier", function (item, name) {
    return {name: "chest_carrier", meta: item.data ? 1 : 0};
});
Callback.addCallback("ItemUse", function (coords, item, block, is, player) {
    if (item.id == ItemID.chestCarrier) {
        Game.prevent();
        let region = BlockSource.getDefaultForActor(player);
        if (Entity.getSneaking(player) && !item.extra) {
            let chest = region.getBlockEntity(coords.x, coords.y, coords.z);
            if (chest) {
                let chestSize = chest.getSize();
                let pairlead = chest.getCompoundTag().contains("pairlead");
                if (pairlead) {
                    chestSize /= 2;
                }
                let container = [];
                for (let i = 0; i < chestSize; i++) {
                    slotItem = chest.getSlot(i);
                    container.push({"id": slotItem.id, "count": slotItem.count, "data": slotItem.data, "extra": slotItem.extra});
                    chest.setSlot(i, 0, 0, 0);
                }
                region.setBlock(coords.x, coords.y, coords.z, 0, 0);
                this.chestCarriers.containers["chest" + this.chestCarriers.chest] = container;
                let chestContainer = new ItemExtraData();
                chestContainer.putInt("block", block.id);
                chestContainer.putInt("chestSize", chestSize);
                chestContainer.putInt("container", this.chestCarriers.chest++);
                Entity.setCarriedItem(player, item.id, 1, 1, chestContainer);
            }
        } else {
            if (item.extra) {
                let size1 = item.extra.getInt("chestSize");
                let rotation = Math.floor((Entity.getYaw(player) - 45) % 360 / 90);
                if (rotation < 0) {
                    rotation += 4;
                }
                region.setBlock(coords.relative.x, coords.relative.y, coords.relative.z, item.extra.getInt("block"), [5, 3, 4, 2][rotation]);
                let chest = region.getBlockEntity(coords.relative.x, coords.relative.y, coords.relative.z);
                let size2 = chest.getSize();
                if (size2 == size1) {
                    for (let i = 0; i < size1; i++) {
                        let slotItem = this.chestCarriers.containers["chest" + item.extra.getInt("container")][i];
                        chest.setSlot(i, slotItem.id, slotItem.count, slotItem.data, slotItem.extra);
                    }
                    Entity.setCarriedItem(player, item.id, 1, 0);
                } else {
                    region.setBlock(coords.relative.x, coords.relative.y, coords.relative.z, 0);
                }
            }
        }
    }
});

