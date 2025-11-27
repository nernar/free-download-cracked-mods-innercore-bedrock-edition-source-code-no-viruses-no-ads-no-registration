Network.addServerPacket("hl.manipulate", function (client, data) {
    var player = client.getPlayerUid();
    var item = Entity.getCarriedItem;
    var set = Entity.setOffhandItem;
    var actor = new PlayerActor(player);
    if (Entity.getOffhandItem(player).id === 0) {
        set(player, item(player).id, item(player).id, item(player).data, item(player).extra);
        actor.setInventorySlot(actor.getSelectedSlot(), 0, 0, 0, null);
    }
    else {
        var ontime = [];
        ontime.push(item(player), Entity.getOffhandItem(player));
        actor.setInventorySlot(actor.getSelectedSlot(), ontime[1].id, ontime[1].count, ontime[1].data, ontime[1].extra);
        set(player, ontime[0].id, ontime[0].count, ontime[0].data, ontime[0].extra);
        ontime = [];
    }
});
Callback.addCallback("ItemUse", function (coords, item, block, isExternal, player) {
    var hand = Entity.getOffhandItem(player);
    var carried = Entity.getCarriedItem(player).id;
    if (Entity.getSneaking(player)) {
        if ((hand.id > 255 && hand.id < 8192) || (carried < 255 && carried > 8192)) {
            return (Left.itemReplacer(VanillaItemID.water_bucket, VanillaItemID.bucket, player, coords, VanillaBlockID.water),
                Left.itemReplacer(VanillaItemID.lava_bucket, VanillaItemID.bucket, player, coords, VanillaBlockID.lava));
        }
        ;
        var rel = coords.relative;
        var region = BlockSource.getDefaultForActor(player);
        return (region.setBlock(rel.x, hand.id === 2 ? rel.y - 1 : rel.y, rel.z, hand.id, 0),
            Entity.setOffhandItem(player, hand.id, hand.count - 1, coords.side, hand.extra));
    }
});
function setButton() {
    var COORDS_Y = __config__.getFloat("button_y");
    var COORDS_X = __config__.getFloat("button_x");
    var BUTTON_SIZE = __config__.getFloat("button_size");
    var BUTTON = new UI.Window({
        location: {
            x: COORDS_X,
            y: UI.getScreenHeight() / 2 - COORDS_Y,
            width: 100,
            height: 100,
        },
        drawing: [
            {
                type: "background",
                color: android.graphics.Color.argb(0, 0, 0, 0),
            },
        ],
        elements: {
            button: {
                type: "button",
                x: 0,
                y: 0,
                bitmap: "button",
                bitmap2: "button_2",
                scale: BUTTON_SIZE,
                clicker: {
                    onClick: function (position, container) {
                        Network.sendToServer("hl.manipulate", {});
                    },
                },
            },
        },
    });
    BUTTON.setAsGameOverlay(true);
    return {
        ui: BUTTON,
        container: new UI.Container(),
    };
}
var button = setButton();
Callback.addCallback("NativeGuiChanged", function (screenName) {
    if (screenName == "in_game_play_screen") {
        button.container.openAs(button.ui);
    }
    else {
        button.container.close();
    }
});
var Left = {
    getItem: function (entity, id, data) {
        var item = Entity.getOffhandItem(entity);
        if (item.id == id && (item.data == data || 0))
            return true;
        return false;
    },
    itemPlacer: function (block, item, entity, coords) {
        var rel = coords.relative;
        var block_ = BlockSource.getDefaultForActor(entity);
        var item_ = Entity.getOffhandItem(entity);
        return (Entity.setOffhandItem(entity, item, item_.count, 0, null),
            block_.setBlock(rel.x, rel.y, rel.z, block, 0));
    },
    itemReplacer: function (item1, item2, entity, coords, block1, block2) {
        if (Entity.getCarriedItem(entity).id !== 0)
            return;
        var blockSource = BlockSource.getDefaultForActor(entity);
        var rel = coords.relative;
        if (Left.getItem(entity, item1, 0)) {
            return (Left.itemPlacer(block1, item2, entity, coords));
        }
        else if (Left.getItem(entity, item2, 0) &&
            blockSource.getBlock(rel.x, rel.y, rel.z).id === block1) {
            return (Left.itemPlacer(block2 || 0, item1, entity, coords));
        }
    },
};
ModAPI.registerAPI("HandLeftAPI", {
    Left: Left,
    requireGlobal: function (command) {
        return eval(command);
    },
});
