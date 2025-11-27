Callback.addCallback("EntityHurt", function (attacker, victim, damage) {
    if (victim == Player.get() && (Entity.getHealth(Player.get()) < damage)) {
        Entity.setHealth(Player.get(), -10000);
    }
});
Callback.addCallback("PostLoaded", function () {
    Recipes.addShaped({id: 14, count: 1, data: 0}, ["ab"], ["a", 1, 0, "b", 266, 0]);
    Recipes.addShaped({id: 15, count: 1, data: 0}, ["ab"], ["a", 1, 0, "b", 265, 0]);
    Recipes.addShaped({id: 56, count: 1, data: 0}, ["ab"], ["a", 1, 0, "b", 264, 0]);
    Recipes.addShaped({id: 16, count: 1, data: 0}, ["ab"], ["a", 1, 0, "b", 263, 0]);
    Recipes.addShaped({id: 73, count: 1, data: 0}, ["ab"], ["a", 1, 0, "b", 331, 0]);
    Recipes.addShaped({id: 21, count: 1, data: 0}, ["ab"], ["a", 1, 0, "b", 351, 4]);
    Recipes.addShaped({id: 2, count: 4, data: 0}, ["ab"], ["a", 3, 0, "b", 18, 0]);
    Recipes.addShaped({id: 388, count: 1, data: 0}, ["aaa", "aba", "aaa"], ["a", ItemID.colorCristal, 0, "b", 264, 0]);
    Recipes.addShaped({id: 264, count: 2, data: 0}, ["aaa", "aba", "aaa"], ["a", ItemID.colorCristal, 0, "b", 266, 0]);
    Recipes.addShaped({id: 266, count: 3, data: 0}, ["aaa", "aba", "aaa"], ["a", ItemID.colorCristal, 0, "b", 265, 0]);
    Recipes.addShaped({id: 265, count: 4, data: 0}, ["aaa", "aba", "aaa"], ["a", ItemID.colorCristal, 0, "b", 263, 0]);
});
var TecGuiAPI = {ClassicGUI: function (guineme, GuiTexture) {
    if (GuiTexture.closeButton === undefined) {
        GuiTexture.closeButton = "close_b";
    }
    if (GuiTexture.closeButton2 === undefined) {
        GuiTexture.closeButton2 = "close_b2";
    }
    if (GuiTexture.backgroundBitmap === undefined) {
        GuiTexture.backgroundBitmap = null;
    }
    if (GuiTexture.backgroundColor === undefined) {
        GuiTexture.backgroundColor = {a: 255, r: 174, g: 174, b: 174};
    }
    if (GuiTexture.frame === undefined) {
        GuiTexture.frame = "frame";
    }
    if (GuiTexture.closeButtonScale === undefined) {
        GuiTexture.closeButtonScale = 2;
    }
    if (GuiTexture.textColor === undefined) {
        GuiTexture.textColor = {r: 1, g: 1, b: 1};
    }
    if (GuiTexture.background === undefined) {
        GuiTexture.background = null;
    }
    guineme.content.drawing.push({type: "background", color: android.graphics.Color.argb(90, 1, 1, 1), bitmap: "background_tecGUI"}, {type: "bitmap", x: 198, y: 152, width: 600, height: 318, bitmap: GuiTexture.background}, {type: "frame", x: 198, y: 152, width: 600, height: 318, bitmap: GuiTexture.frame, bg: android.graphics.Color.argb(GuiTexture.backgroundColor.a, GuiTexture.backgroundColor.r, GuiTexture.backgroundColor.g, GuiTexture.backgroundColor.b)}, {type: "text", x: 203, y: 166, text: GuiTexture.text, size: 12, color: android.graphics.Color.rgb(GuiTexture.textColor.r, GuiTexture.textColor.g, GuiTexture.textColor.b)});
    guineme.content.elements["CloseButton_tec"] = {type: "closeButton", x: 763, y: 155, bitmap: GuiTexture.closeButton, bitmap2: GuiTexture.closeButton2, scale: GuiTexture.closeButtonScale};
    if (GuiTexture.inventory === undefined) {
        GuiTexture.inventory = true;
    }
    if (GuiTexture.ScaleInvSlot === undefined) {
        GuiTexture.ScaleInvSlot = 2.001;
    }
    if (GuiTexture.invCoordsY === undefined) {
        GuiTexture.invCoordsY = 0;
    }
    if (GuiTexture.invCoordsX === undefined) {
        GuiTexture.invCoordsX = 0;
    }
    if (GuiTexture.invSlot === undefined) {
        GuiTexture.invSlot = "invSlot_t";
    }
    if (GuiTexture.inventory) {
        guineme.content.elements["invSlot1"] = {type: "image", x: GuiTexture.invCoordsX + 220, y: 172 + GuiTexture.invCoordsY, scale: GuiTexture.ScaleInvSlot, bitmap: GuiTexture.invSlot};
        guineme.content.elements["invSlot2"] = {type: "image", x: GuiTexture.invCoordsX + 252, y: 172 + GuiTexture.invCoordsY, scale: GuiTexture.ScaleInvSlot, bitmap: GuiTexture.invSlot, visual: true, index: 10};
        guineme.content.elements["invSlot3"] = {type: "image", x: GuiTexture.invCoordsX + 284, y: 172 + GuiTexture.invCoordsY, scale: GuiTexture.ScaleInvSlot, bitmap: GuiTexture.invSlot, visual: true, index: 11};
        guineme.content.elements["invSlot4"] = {type: "image", x: GuiTexture.invCoordsX + 316, y: 172 + GuiTexture.invCoordsY, scale: GuiTexture.ScaleInvSlot, bitmap: GuiTexture.invSlot, visual: true, index: 12};
        guineme.content.elements["invSlot5"] = {type: "image", x: GuiTexture.invCoordsX + 220, y: 204 + GuiTexture.invCoordsY, scale: GuiTexture.ScaleInvSlot, bitmap: GuiTexture.invSlot, visual: true, index: 13};
        guineme.content.elements["invSlot6"] = {type: "image", x: GuiTexture.invCoordsX + 252, y: 204 + GuiTexture.invCoordsY, scale: GuiTexture.ScaleInvSlot, bitmap: GuiTexture.invSlot, visual: true, index: 14};
        guineme.content.elements["invSlot7"] = {type: "image", x: GuiTexture.invCoordsX + 284, y: 204 + GuiTexture.invCoordsY, scale: GuiTexture.ScaleInvSlot, bitmap: GuiTexture.invSlot, visual: true, index: 15};
        guineme.content.elements["invSlot8"] = {type: "image", x: GuiTexture.invCoordsX + 316, y: 204 + GuiTexture.invCoordsY, scale: GuiTexture.ScaleInvSlot, bitmap: GuiTexture.invSlot, visual: true, index: 16};
        guineme.content.elements["invSlot9"] = {type: "image", x: GuiTexture.invCoordsX + 220, y: 236 + GuiTexture.invCoordsY, scale: GuiTexture.ScaleInvSlot, bitmap: GuiTexture.invSlot, visual: true, index: 17};
        guineme.content.elements["invSlot10"] = {type: "image", x: GuiTexture.invCoordsX + 252, y: 236 + GuiTexture.invCoordsY, scale: GuiTexture.ScaleInvSlot, bitmap: GuiTexture.invSlot, visual: true, index: 18};
        guineme.content.elements["invSlot11"] = {type: "image", x: GuiTexture.invCoordsX + 284, y: 236 + GuiTexture.invCoordsY, scale: GuiTexture.ScaleInvSlot, bitmap: GuiTexture.invSlot, visual: true, index: 19};
        guineme.content.elements["invSlot12"] = {type: "image", x: GuiTexture.invCoordsX + 316, y: 236 + GuiTexture.invCoordsY, scale: GuiTexture.ScaleInvSlot, bitmap: GuiTexture.invSlot, visual: true, index: 20};
        guineme.content.elements["invSlot13"] = {type: "image", x: GuiTexture.invCoordsX + 220, y: 268 + GuiTexture.invCoordsY, scale: GuiTexture.ScaleInvSlot, bitmap: GuiTexture.invSlot, visual: true, index: 21};
        guineme.content.elements["invSlot14"] = {type: "image", x: GuiTexture.invCoordsX + 252, y: 268 + GuiTexture.invCoordsY, scale: GuiTexture.ScaleInvSlot, bitmap: GuiTexture.invSlot, visual: true, index: 22};
        guineme.content.elements["invSlot16"] = {type: "image", x: GuiTexture.invCoordsX + 284, y: 268 + GuiTexture.invCoordsY, scale: GuiTexture.ScaleInvSlot, bitmap: GuiTexture.invSlot, visual: true, index: 23};
        guineme.content.elements["invSlot17"] = {type: "image", x: GuiTexture.invCoordsX + 316, y: 268 + GuiTexture.invCoordsY, scale: GuiTexture.ScaleInvSlot, bitmap: GuiTexture.invSlot, visual: true, index: 24};
        guineme.content.elements["invSlot18"] = {type: "image", x: GuiTexture.invCoordsX + 220, y: 300 + GuiTexture.invCoordsY, scale: GuiTexture.ScaleInvSlot, bitmap: GuiTexture.invSlot, visual: true, index: 25};
        guineme.content.elements["invSlot19"] = {type: "image", x: GuiTexture.invCoordsX + 252, y: 300 + GuiTexture.invCoordsY, scale: GuiTexture.ScaleInvSlot, bitmap: GuiTexture.invSlot, visual: true, index: 26};
        guineme.content.elements["invSlot20"] = {type: "image", x: GuiTexture.invCoordsX + 284, y: 300 + GuiTexture.invCoordsY, scale: GuiTexture.ScaleInvSlot, bitmap: GuiTexture.invSlot, visual: true, index: 27};
        guineme.content.elements["invSlot21"] = {type: "image", x: GuiTexture.invCoordsX + 316, y: 300 + GuiTexture.invCoordsY, scale: GuiTexture.ScaleInvSlot, bitmap: GuiTexture.invSlot, visual: true, index: 28};
        guineme.content.elements["invSlot22"] = {type: "image", x: GuiTexture.invCoordsX + 220, y: 332 + GuiTexture.invCoordsY, scale: GuiTexture.ScaleInvSlot, bitmap: GuiTexture.invSlot, visual: true, index: 29};
        guineme.content.elements["invSlot23"] = {type: "image", x: GuiTexture.invCoordsX + 252, y: 332 + GuiTexture.invCoordsY, scale: GuiTexture.ScaleInvSlot, bitmap: GuiTexture.invSlot, visual: true, index: 30};
        guineme.content.elements["invSlot24"] = {type: "image", x: GuiTexture.invCoordsX + 284, y: 332 + GuiTexture.invCoordsY, scale: GuiTexture.ScaleInvSlot, bitmap: GuiTexture.invSlot, visual: true, index: 31};
        guineme.content.elements["invSlot25"] = {type: "image", x: GuiTexture.invCoordsX + 316, y: 332 + GuiTexture.invCoordsY, scale: GuiTexture.ScaleInvSlot, bitmap: GuiTexture.invSlot, visual: true, index: 32};
        guineme.content.elements["invSlot26"] = {type: "image", x: GuiTexture.invCoordsX + 220, y: 364 + GuiTexture.invCoordsY, scale: GuiTexture.ScaleInvSlot, bitmap: GuiTexture.invSlot, visual: true, index: 33};
        guineme.content.elements["invSlot27"] = {type: "image", x: GuiTexture.invCoordsX + 252, y: 364 + GuiTexture.invCoordsY, scale: GuiTexture.ScaleInvSlot, bitmap: GuiTexture.invSlot, visual: true, index: 34};
        guineme.content.elements["invSlot28"] = {type: "image", x: GuiTexture.invCoordsX + 284, y: 364 + GuiTexture.invCoordsY, scale: GuiTexture.ScaleInvSlot, bitmap: GuiTexture.invSlot, visual: true, index: 35};
        guineme.content.elements["invSlot30"] = {type: "image", x: GuiTexture.invCoordsX + 316, y: 364 + GuiTexture.invCoordsY, scale: GuiTexture.ScaleInvSlot, bitmap: GuiTexture.invSlot, visual: true, index: 36};
        guineme.content.elements["invSlot31"] = {type: "image", x: GuiTexture.invCoordsX + 220, y: 396 + GuiTexture.invCoordsY, scale: GuiTexture.ScaleInvSlot, bitmap: GuiTexture.invSlot, visual: true, index: 37};
        guineme.content.elements["invSlot32"] = {type: "image", x: GuiTexture.invCoordsX + 252, y: 396 + GuiTexture.invCoordsY, scale: GuiTexture.ScaleInvSlot, bitmap: GuiTexture.invSlot, visual: true, index: 38};
        guineme.content.elements["invSlot33"] = {type: "image", x: GuiTexture.invCoordsX + 284, y: 396 + GuiTexture.invCoordsY, scale: GuiTexture.ScaleInvSlot, bitmap: GuiTexture.invSlot, visual: true, index: 39};
        guineme.content.elements["invSlot34"] = {type: "image", x: GuiTexture.invCoordsX + 316, y: 396 + GuiTexture.invCoordsY, scale: GuiTexture.ScaleInvSlot, bitmap: GuiTexture.invSlot, visual: true, index: 40};
        guineme.content.elements["invSlot35"] = {type: "image", x: GuiTexture.invCoordsX + 220, y: 428 + GuiTexture.invCoordsY, scale: GuiTexture.ScaleInvSlot, bitmap: GuiTexture.invSlot, visual: true, index: 41};
        guineme.content.elements["invSlot36"] = {type: "image", x: GuiTexture.invCoordsX + 252, y: 428 + GuiTexture.invCoordsY, scale: GuiTexture.ScaleInvSlot, bitmap: GuiTexture.invSlot, visual: true, index: 42};
        guineme.content.elements["invSlot37"] = {type: "image", x: GuiTexture.invCoordsX + 284, y: 428 + GuiTexture.invCoordsY, scale: GuiTexture.ScaleInvSlot, bitmap: GuiTexture.invSlot, visual: true, index: 43};
        guineme.content.elements["invSlot38"] = {type: "image", x: GuiTexture.invCoordsX + 316, y: 428 + GuiTexture.invCoordsY, scale: GuiTexture.ScaleInvSlot, bitmap: GuiTexture.invSlot, visual: true, index: 44};
        guineme.content.elements["invSlot1T"] = {type: "invSlot", x: GuiTexture.invCoordsX + 216, y: 168 + GuiTexture.invCoordsY, size: 38, bitmap: "background_t", isTransparentBackground: true, index: 9};
        guineme.content.elements["invSlot2T"] = {type: "invSlot", x: GuiTexture.invCoordsX + 248, y: 168 + GuiTexture.invCoordsY, size: 38, bitmap: "background_t", isTransparentBackground: true, index: 10};
        guineme.content.elements["invSlot3T"] = {type: "invSlot", x: GuiTexture.invCoordsX + 280, y: 168 + GuiTexture.invCoordsY, size: 38, bitmap: "background_t", isTransparentBackground: true, index: 11};
        guineme.content.elements["invSlot4T"] = {type: "invSlot", x: GuiTexture.invCoordsX + 312, y: 168 + GuiTexture.invCoordsY, size: 38, bitmap: "background_t", isTransparentBackground: true, index: 12};
        guineme.content.elements["invSlot5T"] = {type: "invSlot", x: GuiTexture.invCoordsX + 216, y: 200 + GuiTexture.invCoordsY, size: 38, bitmap: "background_t", isTransparentBackground: true, index: 13};
        guineme.content.elements["invSlot6T"] = {type: "invSlot", x: GuiTexture.invCoordsX + 248, y: 200 + GuiTexture.invCoordsY, size: 38, bitmap: "background_t", isTransparentBackground: true, index: 14};
        guineme.content.elements["invSlot7T"] = {type: "invSlot", x: GuiTexture.invCoordsX + 280, y: 200 + GuiTexture.invCoordsY, size: 38, bitmap: "background_t", isTransparentBackground: true, index: 15};
        guineme.content.elements["invSlot8T"] = {type: "invSlot", x: GuiTexture.invCoordsX + 312, y: 200 + GuiTexture.invCoordsY, size: 38, bitmap: "background_t", isTransparentBackground: true, index: 16};
        guineme.content.elements["invSlot9T"] = {type: "invSlot", x: GuiTexture.invCoordsX + 216, y: 232 + GuiTexture.invCoordsY, size: 38, bitmap: "background_t", isTransparentBackground: true, index: 17};
        guineme.content.elements["invSlot10T"] = {type: "invSlot", x: GuiTexture.invCoordsX + 248, y: 232 + GuiTexture.invCoordsY, size: 38, bitmap: "background_t", isTransparentBackground: true, index: 18};
        guineme.content.elements["invSlot11T"] = {type: "invSlot", x: GuiTexture.invCoordsX + 280, y: 232 + GuiTexture.invCoordsY, size: 38, bitmap: "background_t", isTransparentBackground: true, index: 19};
        guineme.content.elements["invSlot12T"] = {type: "invSlot", x: GuiTexture.invCoordsX + 312, y: 232 + GuiTexture.invCoordsY, size: 38, bitmap: "background_t", isTransparentBackground: true, index: 20};
        guineme.content.elements["invSlot13T"] = {type: "invSlot", x: GuiTexture.invCoordsX + 216, y: 264 + GuiTexture.invCoordsY, size: 38, bitmap: "background_t", isTransparentBackground: true, index: 21};
        guineme.content.elements["invSlot14T"] = {type: "invSlot", x: GuiTexture.invCoordsX + 248, y: 264 + GuiTexture.invCoordsY, size: 38, bitmap: "background_t", isTransparentBackground: true, index: 22};
        guineme.content.elements["invSlot16T"] = {type: "invSlot", x: GuiTexture.invCoordsX + 280, y: 264 + GuiTexture.invCoordsY, size: 38, bitmap: "background_t", isTransparentBackground: true, index: 23};
        guineme.content.elements["invSlot17T"] = {type: "invSlot", x: GuiTexture.invCoordsX + 312, y: 264 + GuiTexture.invCoordsY, size: 38, bitmap: "background_t", isTransparentBackground: true, index: 24};
        guineme.content.elements["invSlot18T"] = {type: "invSlot", x: GuiTexture.invCoordsX + 216, y: 296 + GuiTexture.invCoordsY, size: 38, bitmap: "background_t", isTransparentBackground: true, index: 25};
        guineme.content.elements["invSlot19T"] = {type: "invSlot", x: GuiTexture.invCoordsX + 248, y: 296 + GuiTexture.invCoordsY, size: 38, bitmap: "background_t", isTransparentBackground: true, index: 26};
        guineme.content.elements["invSlot20T"] = {type: "invSlot", x: GuiTexture.invCoordsX + 280, y: 296 + GuiTexture.invCoordsY, size: 38, bitmap: "background_t", isTransparentBackground: true, index: 27};
        guineme.content.elements["invSlot21T"] = {type: "invSlot", x: GuiTexture.invCoordsX + 312, y: 296 + GuiTexture.invCoordsY, size: 38, bitmap: "background_t", isTransparentBackground: true, index: 28};
        guineme.content.elements["invSlot22T"] = {type: "invSlot", x: GuiTexture.invCoordsX + 216, y: 328 + GuiTexture.invCoordsY, size: 38, bitmap: "background_t", isTransparentBackground: true, index: 29};
        guineme.content.elements["invSlot23T"] = {type: "invSlot", x: GuiTexture.invCoordsX + 248, y: 328 + GuiTexture.invCoordsY, size: 38, bitmap: "background_t", isTransparentBackground: true, index: 30};
        guineme.content.elements["invSlot24T"] = {type: "invSlot", x: GuiTexture.invCoordsX + 280, y: 328 + GuiTexture.invCoordsY, size: 38, bitmap: "background_t", isTransparentBackground: true, index: 31};
        guineme.content.elements["invSlot25T"] = {type: "invSlot", x: GuiTexture.invCoordsX + 312, y: 328 + GuiTexture.invCoordsY, size: 38, bitmap: "background_t", isTransparentBackground: true, index: 32};
        guineme.content.elements["invSlot26T"] = {type: "invSlot", x: GuiTexture.invCoordsX + 216, y: 360 + GuiTexture.invCoordsY, size: 38, bitmap: "background_t", isTransparentBackground: true, index: 33};
        guineme.content.elements["invSlot27T"] = {type: "invSlot", x: GuiTexture.invCoordsX + 248, y: 360 + GuiTexture.invCoordsY, size: 38, bitmap: "background_t", isTransparentBackground: true, index: 34};
        guineme.content.elements["invSlot28T"] = {type: "invSlot", x: GuiTexture.invCoordsX + 280, y: 360 + GuiTexture.invCoordsY, size: 38, bitmap: "background_t", isTransparentBackground: true, index: 35};
        guineme.content.elements["invSlot30T"] = {type: "invSlot", x: GuiTexture.invCoordsX + 312, y: 360 + GuiTexture.invCoordsY, size: 38, bitmap: "background_t", isTransparentBackground: true, index: 36};
        guineme.content.elements["invSlot31T"] = {type: "invSlot", x: GuiTexture.invCoordsX + 216, y: 392 + GuiTexture.invCoordsY, size: 38, bitmap: "background_t", isTransparentBackground: true, index: 37};
        guineme.content.elements["invSlot32T"] = {type: "invSlot", x: GuiTexture.invCoordsX + 248, y: 392 + GuiTexture.invCoordsY, size: 38, bitmap: "background_t", isTransparentBackground: true, index: 38};
        guineme.content.elements["invSlot33T"] = {type: "invSlot", x: GuiTexture.invCoordsX + 280, y: 392 + GuiTexture.invCoordsY, size: 38, bitmap: "background_t", isTransparentBackground: true, index: 39};
        guineme.content.elements["invSlot34T"] = {type: "invSlot", x: GuiTexture.invCoordsX + 312, y: 392 + GuiTexture.invCoordsY, size: 38, bitmap: "background_t", isTransparentBackground: true, index: 40};
        guineme.content.elements["invSlot35T"] = {type: "invSlot", x: GuiTexture.invCoordsX + 216, y: 424 + GuiTexture.invCoordsY, size: 38, bitmap: "background_t", isTransparentBackground: true, index: 41};
        guineme.content.elements["invSlot36T"] = {type: "invSlot", x: GuiTexture.invCoordsX + 248, y: 424 + GuiTexture.invCoordsY, size: 38, bitmap: "background_t", isTransparentBackground: true, index: 42};
        guineme.content.elements["invSlot37T"] = {type: "invSlot", x: GuiTexture.invCoordsX + 280, y: 424 + GuiTexture.invCoordsY, size: 38, bitmap: "background_t", isTransparentBackground: true, index: 43};
        guineme.content.elements["invSlot38T"] = {type: "invSlot", x: GuiTexture.invCoordsX + 312, y: 424 + GuiTexture.invCoordsY, size: 38, bitmap: "background_t", isTransparentBackground: true, index: 44};
    }
}};
ModAPI.registerAPI("TecMod-ClassicGuiAPI", {CriarClassicUI: TecGuiAPI});
var updatableTerminalTec = {update: function () {
    if (TerminalTec.temp && TerminalTec.openedUI && !TerminalTec.openedUI.isOpened()) {
        TerminalTec.openedUI = 0;
        TerminalTec.temp = false;
    }
}};
Callback.addCallback("LevelLoaded", function () {
    Updatable.addUpdatable(updatableTerminalTec);
});
Saver.addSavesScope("TecTerminalSave", function read(scope) {
    TerminalTec.save = scope;
}, function save() {
    return TerminalTec.save;
});
var TerminalTec = {save: {uniqueID: 0, containers: {}}, prototypes: {}, temp: false, openedUI: null, guis: {}, onBackpackUse: function (item) {
    if (!this.save["containers"]) {
        this.save["containers"] = {};
    }
    if (typeof this.save.uniqueID === "undefined") {
        this.save.uniqueID = 0;
    }
    if (item.data === 0 || !this.save["containers"]["b" + item.data]) {
        var u = ++this.save.uniqueID;
        this.save["containers"]["b" + u] = new UI.Container();
        Player.setCarriedItem(item.id, 1, u);
        item.data = u;
        this.onBackpackUse(item);
    } else {
        this.openedUI = this.save["containers"]["b" + item.data];
        this.openedUI.openAs(this.guis[this.prototypes[item.id].slots]);
        this.temp = true;
    }
}, register: function (arg) {
    var TerminalGUI = new UI.StandartWindow({standart: {inventory: {standart: true, padding: 1000}}, params: {selection: "selection_wood2"}, drawing: [], elements: {}});
    var xp = 1;
    var yp = 1;
    var TerminalElements = {};
    for (var i = 1; i <= arg.slots; i++) {
        TerminalElements["slot" + i] = {type: "slot", x: xp, y: yp, size: 100, bitmap: "slot_invTerminal"};
        xp += 100;
        if (i % 10 === 0) {
            xp = 1;
            yp += 100;
        }
    }
    this.guis[arg.slots] = TerminalGUI;
    ModAPI.addAPICallback("TecMod-ClassicGuiAPI", function (api) {
        api.CriarClassicUI.ClassicGUI(TerminalGUI, {invSlot: "invSlot_t", frame: "frame", closeButton: "close_b", closeButton2: "close_b2", text: "Terminal", backgroundBitmap: null, backgroundColor: {a: 255, r: 174, g: 174, b: 174}, textColor: {r: 1, g: 1, b: 1}});
    });
    TerminalGUI.addWindow("TerminalslotsSouce", {location: {x: 370, y: 180, width: 400, height: 280, scrollHeight: arg.height}, params: {selection: "selection_wood2"}, drawing: [{type: "background", color: android.graphics.Color.argb(1, 1, 1, 1), bitmap: null}], elements: TerminalElements});
    arg.id = ItemID[arg.ItemID];
    Item.registerUseFunctionForID(arg.id, function (coords, item) {
        TerminalTec.openedBackpack = item.id;
        TerminalTec.onBackpackUse(item);
    });
    this.prototypes[arg.id] = arg;
}};
ModAPI.registerAPI("TecMod-Create API", {Terminal: TerminalTec});

