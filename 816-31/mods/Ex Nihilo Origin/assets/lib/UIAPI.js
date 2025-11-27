LIBRARY({
    name: "UIAPI",
    version: 3,
    shared: false,
    api: "CoreEngine"
});
//作者CuiZhenhang
Translation.addTranslation("Inventory", {
    zh: "物品栏",
    ru: "Инвентарь"
});
var base = UI.getScreenHeight();

var color = android.graphics.Color.rgb(197, 197, 197);

var UIRegistry = function(state) {
    var TEXT = state.standart.header.text || " "
    var DRAWING = state.drawing || []
    var element = state.elements || []
    var drawing = [{
        type: "background",
        color: android.graphics.Color.TRANSPARENT
    }, {
        type: "frame",
        bitmap: "classic_frame_bg_light",
        scale: 3,
        x: 500 - ((base - 24) * 1.05) * 0.5,
        y: 12,
        width: (base - 24) * 1.05,
        height: base - 24,
        color: color
    }, {
        type: "text",
        x: 500 - ((base - 24) * 1.05) + (base / 11) * 5.9,
        y: (base / 11),
        text: TEXT,
        font: {
            color: android.graphics.Color.rgb(74, 74, 74),
            size: 15
        }
    }, {
        type: "text",
        x: 500 - ((base - 24) * 1.05) + (base / 11) * 5.9,
        y: (base / 11) * 6,
        text: Translation.translate("Inventory"),
        font: {
            color: android.graphics.Color.rgb(74, 74, 74),
            size: 15
        }
    }];
    for (i = 0; i < DRAWING.length; i++) {
        drawing.push(DRAWING[i])
    };
    element["close"] = {
        type: "closeButton",
        global: true,
        scale: 2,
        bitmap: "classic_close_button",
        bitmap2: "classic_close_button_down",
        x: 500 - ((base - 24) * 1.05) + 15.5 * (base / 11),
        y: (base / 11) * 0.5
    };
    for (var i = 9; i < 45; i++) {
        element["invSlot" + i] = {
            type: "invSlot",
            x: (510 - base * 0.49) + (i % 9) * (base / 12) + (base / 12),
            y: base - (base / 12) * 6 + Math.floor(i / 9) * (base / 12) + (i >= 36 ? 4 : 0),
            size: (base / 12),
            index: i >= 36 ? (i - 36) : i
        };
    };
    var ClassicalUi = new UI.StandartWindow({
        params: {
            slot: "classic_slot",
            invSlot: "classic_slot"
        },
        standart: {
            inventory: {
                width: 300,
                padding: 600
            }
        },
        drawing: drawing,
        elements: element
    });
    ClassicalUi.setBlockingBackground(true);
    return ClassicalUi;
}

EXPORT("UIRegistry", UIRegistry);