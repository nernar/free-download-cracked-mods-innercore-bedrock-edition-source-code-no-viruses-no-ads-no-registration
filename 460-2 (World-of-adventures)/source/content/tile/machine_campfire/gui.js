const UI_CAMPFIRE = new UI.StandartWindow({
    standart: {
        header: { text: { text: Translation.translate("Campfire") } },
        inventory: { standart: true },
        background: { standart: true }
    },

    drawing: [
        { type: "bitmap", x: 530, y: 155, bitmap: "arrow_bar_background", scale: 3.2 },
        { type: "bitmap", x: 450, y: 155, bitmap: "fire_background", scale: 3.2 }
    ],

    elements: {
        "progressScale": { type: "scale", x: 530, y: 155, direction: 0, value: 0.5, bitmap: "arrow_bar_scale", scale: 3.2 },
        "burningScale": { type: "scale", x: 450, y: 155, direction: 1, value: 0.5, bitmap: "fire_scale", scale: 3.2 },
        "slotSource": { type: "slot", x: 441, y: 79 },
        "slotFuel": {
            type: "slot", x: 441, y: 218,
            isValid: function (id, count, data) {
                return Recipes.getFuelBurnDuration(id, data) > 0;
            }
        },
        "slotResult": { type: "slot", x: 625, y: 148, isValid: function () { return false; } },
    }
});