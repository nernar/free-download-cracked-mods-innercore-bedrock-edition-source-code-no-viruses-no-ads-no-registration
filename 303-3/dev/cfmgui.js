var cfmTitle = function () {
    if (Translation.getLanguage() === "ch") {
        return "\u5496\u5561\u673a";
    } else {
        return "Coffee Machine";
    }
};
var cfmGui = new UI.StandartWindow({standart: {header: {text: {text: cfmTitle()}}, inventory: {standart: true}, background: {standart: true}}, drawing: [{type: "bitmap", x: 590, y: 146, bitmap: "furnace_bar_background", scale: GUI_BAR_STANDART_SCALE}, {type: "bitmap", x: 520, y: 150, bitmap: "ping", scale: GUI_BAR_STANDART_SCALE}], elements: {"progressScale": {type: "scale", x: 590, y: 146, direction: 0, value: 0.5, bitmap: "furnace_bar_scale", scale: GUI_BAR_STANDART_SCALE}, "slotSource": {type: "slot", x: 450, y: 150}, "slotResult": {type: "slot", x: 685, y: 150}}});

