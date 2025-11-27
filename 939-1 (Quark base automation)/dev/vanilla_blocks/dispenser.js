
TileEntity.registerPrototype(VanillaBlockID.dispenser, {
    defaultValues: {
        customValue: 0,
    },

    init: function() {
    },

    tick: function() {
        let slot = this.container.getSlot(0);

        if (slot.id > 0) {
            Game.message("Slot item ID: " + slot.id);
        }

        if (placeableBlocks.includes(slot.id)) {
            Game.message("Item is placeable!");
            this.placeBlock(slot.id);
        }
    },

    placeBlock: function(blockId) {
        let direction = World.getBlockData(this.x, this.y, this.z);
        Game.message("Dispenser direction: " + direction);

        let x = this.x;
        let y = this.y;
        let z = this.z;

        switch (direction) {
            case 0:
                z += 1; // Sud
                break;
            case 1:
                x -= 1; // Vest
                break;
            case 2:
                z -= 1; // Nord
                break;
            case 3:
                x += 1; // Est
                break;
        }

        if (World.getBlockID(x, y, z) === 0) {
            World.setBlock(x, y, z, blockId, 0);
            Game.message("Block placed at: " + x + ", " + y + ", " + z);
        } else {
            Game.message("Position occupied. Cannot place block.");
        }

        this.container.setSlot(0, 0, 0, 0);
    }
});

Callback.addCallback("ItemDispensed", function(itemCoor, item, dispenser, slot) {
    Game.message("io");

});

Callback.addCallback("ItemDispensed", function(){
    Game.message("io");
});

/*
Callback.addCallback("ItemDispensed", function(itemCoor, item, dispenser, slot) {
    let tileEntity = World.getTileEntity(dispenser.x, dispenser.y, dispenser.z);

    if (tileEntity) {
        Game.message("Item dispensed at: " + dispenser.x + ", " + dispenser.y + ", " + dispenser.z);
        if (placeableBlocks.includes(item.id)) {
            // Folosim funcția din TileEntity pentru a plasa blocul
            tileEntity.placeBlock(item.id);
        }
    }
});
*/
