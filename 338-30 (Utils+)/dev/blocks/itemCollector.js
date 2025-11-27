var tickss = 0;

var lastCoords;
IDRegistry.genBlockID("itemCollector");

Recipes.addShaped({
    id: BlockID.itemCollector,
    count: 1,
    data: 0
}, [
    "cpc",
    "php",
    "cpc"
], ['h', 410, 0, 'p', 381, 0, 'c', 54, 0]);

Block.createBlock("itemCollector", [{
    name: "Item Collector",
    texture: [
        ["itemCollector", 0]
    ],
    inCreative: true
}], 'opaque');

var itemCollector_container = new UI.Container();

var itemColRad = 15;

TileEntity.registerPrototype(BlockID.itemCollector, {
    defaultValues: {
        coords: null,
        slot: null,
        ticks: 0
    },
    container: itemCollector_container,
    getTransportSlots: function() {
        return {
            //input: ["slot"],
            output: ["slot"]
        };
    },
    created: function() {
        this.data.coords = lastCoords;
        this.data.slot = this.container.getSlot("slot")
    },
    click: function(id, count, data) {
        if (this.data.slot.id == 0) return Game.message('Not available');
        Game.message(Item.getName(this.data.slot.id, this.data.slot.data) + ' * ' + this.data.slot.count);
    },
    tick: function() {
        this.data.ticks++
        if (this.data.ticks >= 30) {
            var x, y, z;
            x = y = z = 0;
            this.data.ticks = 0;
            x = y = z = 0;
            for (var i in sides) {
                if (World.getContainer(this.data.coords.x + sides[i][0], this.data.coords.y + sides[i][1], this.data.coords.z + sides[i][2]) || World.addTileEntity(this.data.coords.x + sides[i][0], this.data.coords.y + sides[i][1], this.data.coords.z + sides[i][2]) || World.getTileEntity(this.data.coords.x + sides[i][0], this.data.coords.y + sides[i][1], this.data.coords.z + sides[i][2])) {
                    x = sides[i][0];
                    y = sides[i][1];
                    z = sides[i][2];
                    break;
                }
            }
            if (x != 0 || y != 0 || z != 0) {
                if (this.data.slot.id != 0) {
                    if (World.getContainer(this.data.coords.x + x, this.data.coords.y + y, this.data.coords.z + z) || World.addTileEntity(this.data.coords.x + x, this.data.coords.y + y, this.data.coords.z + z) || World.getTileEntity(this.data.coords.x + x, this.data.coords.y + y, this.data.coords.z + z)) {
                        //Game.message('Что то найдено');
                        if (World.getTileEntity(this.data.coords.x + x, this.data.coords.y + y, this.data.coords.z + z) && World.getTileEntity(this.data.coords.x + x, this.data.coords.y + y, this.data.coords.z + z).getTransportSlots) {
                            //Game.message('Найдена модная хрень');
                            var size = World.getTileEntity(this.data.coords.x + x, this.data.coords.y + y, this.data.coords.z + z).getTransportSlots().input.length
                            var slot;
                            for (var l = 0; l < size; l++) {
                                if ((World.getContainer(this.data.coords.x + x, this.data.coords.y + y, this.data.coords.z + z).getSlot(World.getTileEntity(this.data.coords.x + x, this.data.coords.y + y, this.data.coords.z + z).getTransportSlots().input[l]).id == 0 || (World.getContainer(this.data.coords.x + x, this.data.coords.y + y, this.data.coords.z + z).getSlot(World.getTileEntity(this.data.coords.x + x, this.containerthis.data.coords.y + y, this.data.coords.z + z).getTransportSlots().input[l]).id == this.data.slot.id && World.getContainer(this.data.coords.x + x, this.data.coords.y + y, this.data.coords.z + z).getSlot(World.getTileEntity(this.data.coords.x + x, this.data.coords.y + y, this.data.coords.z + z).getTransportSlots().input[l]).data == this.data.slot.data)) && World.getContainer(this.data.coords.x + x, this.data.coords.y + y, this.data.coords.z + z).getSlot(World.getTileEntity(this.data.coords.x + x, this.data.coords.y + y, this.data.coords.z + z).getTransportSlots().input[l]).count != Item.getMaxStack(this.data.slot.id)) {
                                    slot = World.getTileEntity(this.data.coords.x + x, this.data.coords.y + y, this.data.coords.z + z).getTransportSlots().input[l];
                                    l = size;
                                    //Game.message('Найден подходящий слот модной хрени');
                                }
                            };
                            while (World.getContainer(this.data.coords.x + x, this.data.coords.y + y, this.data.coords.z + z).getSlot(slot).count < Item.getMaxStack(this.data.slot.id) && this.data.slot.count > 0) {
                                this.data.slot.count--;
                                World.getContainer(this.data.coords.x + x, this.data.coords.y + y, this.data.coords.z + z).setSlot(slot, this.data.slot.id, World.getContainer(this.data.coords.x + x, this.data.coords.y + y, this.data.coords.z + z).getSlot(slot).count + 1, this.data.slot.data)
                            };
                            if (this.data.slot.count <= 0) {
                                this.data.slot.id = 0;
                            }
                        } else if (World.getContainer(this.data.coords.x + x, this.data.coords.y + y, this.data.coords.z + z)) {
                            //Game.message('Найдена ванильная хрень');
                            var size = World.getContainer(this.data.coords.x + x, this.data.coords.y + y, this.data.coords.z + z).size
                            var slot;
                            for (var l = 0; l < size; l++) {
                                if ((World.getContainer(this.data.coords.x + x, this.data.coords.y + y, this.data.coords.z + z).getSlot(l).id == 0 || (World.getContainer(this.data.coords.x + x, this.data.coords.y + y, this.data.coords.z + z).getSlot(l).id == this.data.slot.id && World.getContainer(this.data.coords.x + x, this.data.coords.y + y, this.data.coords.z + z).getSlot(l).data == this.data.slot.data)) && World.getContainer(this.data.coords.x + x, this.data.coords.y + y, this.data.coords.z + z).getSlot(l).count != Item.getMaxStack(this.data.slot.id)) {
                                    slot = l;
                                    l = size;
                                    //Game.message('Найден подходящий слот ванильной хрени');
                                }
                            };
                            while (World.getContainer(this.data.coords.x + x, this.data.coords.y + y, this.data.coords.z + z).getSlot(slot).count < Item.getMaxStack(this.data.slot.id) && this.data.slot.count > 0) {
                                this.data.slot.count--;
                                World.getContainer(this.data.coords.x + x, this.data.coords.y + y, this.data.coords.z + z).setSlot(slot, this.data.slot.id, World.getContainer(this.data.coords.x + x, this.data.coords.y + y, this.data.coords.z + z).getSlot(slot).count + 1, this.data.slot.data)
                            };
                            if (this.data.slot.count <= 0) {
                                this.data.slot.id = 0;
                            }
                        }
                    }
                }
            }
            for (var i in Entity.getAllInRange(this.data.coords, itemColRad, 64)) {
                var ent = Entity.getAllInRange(this.data.coords, itemColRad, 64)[i];
                if (!ent) return;
                if (Entity.getDroppedItem(ent).id == this.data.slot.id && Entity.getDroppedItem(ent).data == this.data.slot.data) {
                    while (Entity.getDroppedItem(ent).count > 0 && this.data.slot.count < Item.getMaxStack(this.data.slot.id)) {
                        Entity.setDroppedItem(ent, Entity.getDroppedItem(ent).id, Entity.getDroppedItem(ent).count - 1, Entity.getDroppedItem(ent).data);
                        if (Entity.getDroppedItem(ent).count <= 0) {
                            Entity.remove(ent);
                        };
                        this.data.slot.count++;
                    }
                } else if (this.data.slot.id == 0) {
                    this.data.slot.id = Entity.getDroppedItem(ent).id;
                    this.data.slot.count = 1;
                    this.data.slot.data = Entity.getDroppedItem(ent).data;
                    Entity.setDroppedItem(ent, Entity.getDroppedItem(ent).id, Entity.getDroppedItem(ent).count - 1, Entity.getDroppedItem(ent).data);
                    while (Entity.getDroppedItem(ent).count > 0 && this.data.slot.count < Item.getMaxStack(this.data.slot.id)) {
                        Entity.setDroppedItem(ent, Entity.getDroppedItem(ent).id, Entity.getDroppedItem(ent).count - 1, Entity.getDroppedItem(ent).data);
                        if (Entity.getDroppedItem(ent).count <= 0) {
                            Entity.remove(ent);
                        };
                        this.data.slot.count++;
                    }
                    if (Entity.getDroppedItem(ent).count <= 0) {
                        Entity.remove(ent);
                    };
                }
                //Entity.getDroppedItem(Entity.getAllInRange(this.data.coords, 5)[i])
            }

        }
    }
});

Callback.addCallback("BuildBlock", function(coords, block, entity) {
    lastCoords = coords.relative;
});

ModAPI.addAPICallback("WailaAPI", function(api) {
    api.Waila.addExtension(BlockID.itemCollector, function(id, data, elements, tile, yPos) {
        var item = tile.container.getSlot("slot");
        item.name = Item.getName(item.id, item.data) + " * " + item.count;
        if (!Item.getName(item.id, item.data)) item.name = "Not available";
        elements["itemCollector_slot"] = {
            type: "text",
            text: "Item: " + item.name,
            x: 200,
            y: yPos,
            font: {
                color: api.Style.DEF,
                size: 40
            }
        };
        yPos += 60;

        api.Waila.requireHeight(20);
        return yPos;
    })
})