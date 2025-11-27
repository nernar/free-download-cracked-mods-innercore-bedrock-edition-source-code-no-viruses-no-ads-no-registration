Translation.addTranslation("Emerald Transport Pipe", {ru: "\u0418\u0437\u0443\u043c\u0440\u0443\u0434\u043d\u0430\u044f \u0442\u0440\u0430\u043d\u0441\u043f\u043e\u0440\u0442\u043d\u0430\u044f \u0442\u0440\u0443\u0431\u0430"});
IDRegistry.genBlockID("pipeItemEmerald");
Block.createBlock("pipeItemEmerald", [{name: "Emerald Transport Pipe", texture: [["pipe_emerald", 0]], inCreative: true}]);
Recipes.addShaped({id: BlockID.pipeItemEmerald, count: 1, data: 0}, ["aba"], ["a", 388, -1, "b", 20, 0]);
FactAPI.render.setupWireasRender(BlockID.pipeItemEmerald, 0.5, [{name: "item-pipe", add: false}, {name: "item-sandstone-pipe", add: false}]);
Pipe.registerTile(BlockID.pipeItemEmerald, {});
ICRender.getGroup("item-wood-pipe").add(BlockID.pipeItemEmerald, -1);
ICRender.getGroup("item-item-pipe").add(BlockID.pipeItemEmerald, -1);
var ui_emerald_pipe = new UI.StandartWindow({standart: {header: {text: {text: "Emerald Pipe/\u0418\u0437\u0443\u043c\u0440\u0443\u0434\u043d\u0430\u044f \u0442\u0440\u0443\u0431\u0430"}}, inventory: {standart: true}, background: {standart: true}}, params: {slot: "slotFactory", invSlot: "slotFactory", selection: "selectionFactory"}, drawing: [{type: "bitmap", x: 0, y: 0, bitmap: "gui_ground", scale: 8}], elements: {"slot1": {type: "slot", x: 400, y: 110, size: 70}, "slot2": {type: "slot", x: 470, y: 110, size: 70}, "slot3": {type: "slot", x: 540, y: 110, size: 70}, "slot4": {type: "slot", x: 610, y: 110, size: 70}, "slot5": {type: "slot", x: 680, y: 110, size: 70}, "slot6": {type: "slot", x: 750, y: 110, size: 70}}});
TileEntity.registerPrototype(BlockID.pipeItemEmerald, {defaultValues: {containerIndex: 0}, getGuiScreen: function () {
    return ui_emerald_pipe;
}, getTransportSlots: function () {
    return {};
}, getTransportingDirections: function (item) {
    var pos = item.position;
    var dir = item.direction;
    var list = Pipe.findDirections(pos.x, pos.y, pos.z);
    var res = Pipe.filterDirections(list, dir);
    var cur = [];
    for (var i in res) {
        var d = res[i];
        if (World.getBlockID(this.x + d.x, this.y + d.y, this.z + d.z) != BlockID.pipeItemEmerald && World.getBlockID(this.x + d.x, this.y + d.y, this.z + d.z) != BlockID.pipeItemWooden) {
            cur.push(d);
        }
    }
    return cur;
}, tick: function () {
    if (World.getThreadTime() % 20 != 0) {
        return;
    }
    var containerData = this.findContainer();
    if (containerData && containerData.container) {
        var item = this.getItemFrom(containerData.container, 1);
        if (item) {
            var transportedItem = Pipe.item.deploy();
            transportedItem.setPosition(containerData.position);
            transportedItem.setItem(item);
            transportedItem.setTarget(this);
            transportedItem.setFriction(-0.03);
        } else {
            this.data.containerIndex++;
        }
    }
}, findContainer: function () {
    var directions = Pipe.findContainers(this.x, this.y, this.z);
    var dir = directions[this.data.containerIndex % directions.length];
    if (dir) {
        var container = World.getContainer(this.x + dir.x, this.y + dir.y, this.z + dir.z);
        return {container: container, direction: dir, position: {x: this.x + dir.x, y: this.y + dir.y, z: this.z + dir.z}};
    }
}, getItemFrom: function (container, maxCount) {
    var tileEntity = container.tileEntity;
    var slots = [];
    var slotsInitialized = false;
    var notNative = container.isContainer;
    if (tileEntity) {
        if (tileEntity.getTransportedItem) {
            tileEntity.getTransportedItem();
        }
        if (tileEntity.getTransportSlots) {
            slots = tileEntity.getTransportSlots().output || [];
            slotsInitialized = true;
        }
    }
    if (!slotsInitialized) {
        if (notNative) {
            for (var name in container.slots) {
                slots.push(name);
            }
        } else {
            for (var index = 0; index < container.getSize(); index++) {
                slots.push(index);
            }
        }
    }
    var item = null;
    for (var i in slots) {
        var slot = container.getSlot(slots[i]);
        if (slot.id > 0 && this.canGet(slot)) {
            var count = Math.min(maxCount, slot.count);
            item = {id: slot.id, count: count, data: slot.data};
            slot.count -= count;
            if (!notNative) {
                container.setSlot(i, slot.id, slot.count, slot.data);
            }
            break;
        }
    }
    if (notNative) {
        container.validateAll();
    }
    return item;
}, canGet: function (item) {
    for (var i = 1; i < 7; i++) {
        var slot = this.container.getSlot("slot" + i);
        if (slot.id == item.id && slot.data == item.data) {
            return true;
        }
    }
    return false;
}});

