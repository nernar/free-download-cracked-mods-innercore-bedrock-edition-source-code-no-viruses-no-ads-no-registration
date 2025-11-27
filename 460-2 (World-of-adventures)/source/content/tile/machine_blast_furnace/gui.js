const UI_BLAST_FURNACE = new UI.StandartWindow({
    standart: {
        header: { text: { text: Translation.translate("Blast Furnace") } },
        inventory: { standart: true },
        background: { standart: true }
    },

    drawing: [
        { type: "bitmap", x: 592, y: 155, bitmap: "fire_background", scale: 4 },
        { type: "bitmap", x: 740, y: 155, bitmap: "arrow_bar_background", scale: 3.2 },

        { type: "bitmap", x: 416, y: 50, bitmap: "liquid.background", scale: 3.2},
        { type: "bitmap", x: 350, y: 50, bitmap: "background_air", scale: 3.2 },
        { type: "bitmap", x: 651, y: 79, bitmap: "background_heat", scale: 1.9 },
    ],

    elements: {
        "airScale": { type: "scale", x: 350, y: 50, direction: 1, bitmap: "scale_air", scale: 3.2 },
        "liquidScale": { type: "scale", x: 416, y: 50, direction: 1, bitmap: "liquid.background", scale: 3.2 },
        "heatScale": { type: "scale", x: 651, y: 79, direction: 1, bitmap: "scale_heat", scale: 1.9 },

        "progressScale": { type: "scale", x: 740, y: 155, direction: 0, bitmap: "arrow_bar_scale", scale: 3.2 },
        "burningScale": { type: "scale", x: 592, y: 155, direction: 1, bitmap: "fire_scale", scale: 4 },

        "slotRawSource": { type: "slot", x: 591, y: 79 },
        "slotFuel": {
            type: "slot", x: 591, y: 218,
            isValid: function (id, count, data) {
                return Recipes.getFuelBurnDuration(id, data) > 0;
            }
        },


        "slotSource": { type: "slot", x: 675, y: 148 },
        "slotResult": { type: "slot", x: 825, y: 148, isValid: function () { return false; } },
    }
});