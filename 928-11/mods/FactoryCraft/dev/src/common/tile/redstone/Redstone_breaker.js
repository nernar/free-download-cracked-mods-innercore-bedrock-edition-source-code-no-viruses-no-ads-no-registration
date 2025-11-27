Translation.addTranslation("Redstone Block Destroyer", {
    ru: "Редстоун разрушитель блоков"
});

IDRegistry.genBlockID("machineRedstoneDestroyer");
Block.createBlockWithRotation("machineRedstoneDestroyer", [{
    name: "Redstone Block Destroyer",
    texture: [
		["block_machine_stone", 0],
		["block_machine_stone", 0],
		["block_machine_stone", 0],
		["redstone_breaker", 0],
		["block_machine_stone", 0],
		["block_machine_stone", 0]
    ],
    inCreative: true
}], "opaque");

Recipes.addShaped({
    id: BlockID.machineRedstoneDestroyer,
    count: 1,
    data: 0
}, [
	"b",
	"a",
], [
	'a', BlockID.blockMachineStone, 0,
	'b', 257, 0
]);

var UI_redstone_destroyer = new UI.StandartWindow({
    standart: {
        header: {
            text: {
                text: "Redstone Block Destroyer/Редстоун разрушитель блоков"
            },
        },
        minHeight: 700,
        inventory: {
            standart: true
        },
        background: {
            standart: true
        }
    },
    params: {
        slot: "slotFactory",
        invSlot: "slotFactory",
        selection: "selectionFactory"
    },
    drawing: [{
        type: "bitmap",
        x: 0,
        y: 0,
        bitmap: "gui_ground",
        scale: 8
    },
    ],
    elements: {
        "slot1": { type: "slot", x: 435, y: 110, size: 80 },
        "slot2": { type: "slot", x: 515, y: 110, size: 80 },
        "slot3": { type: "slot", x: 595, y: 110, size: 80 },
        "slot4": { type: "slot", x: 435, y: 190, size: 80 },
        "slot5": { type: "slot", x: 515, y: 190, size: 80 },
        "slot6": { type: "slot", x: 595, y: 190, size: 80 },
        "slot7": { type: "slot", x: 435, y: 270, size: 80 },
        "slot8": { type: "slot", x: 515, y: 270, size: 80 },
        "slot9": { type: "slot", x: 595, y: 270, size: 80 }
    }
});