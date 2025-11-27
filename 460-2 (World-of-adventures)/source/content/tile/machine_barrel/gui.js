const UI_BARREL = new UI.StandartWindow({
    standart: {
        header: { text: { text: Translation.translate("Barrel") } },
        inventory: { standart: true },
        background: { standart: true }
    },

    drawing: [
        { type: "bitmap", x: 530, y: 155, bitmap: "arrow_bar_background", scale: 3.2 }
    ],

    elements: {
        "progressScale": { type: "scale", x: 530, y: 155, direction: 0, value: 0.5, bitmap: "arrow_bar_scale", scale: 3.2 },
        "slotSource": { type: "slot", x: 441, y: 148 },
        "slotFuel": { type: "slot", x: 380, y: 148 },
        "slotResult": { type: "slot", x: 625, y: 148, isValid: function () { return false; } },
    }
});