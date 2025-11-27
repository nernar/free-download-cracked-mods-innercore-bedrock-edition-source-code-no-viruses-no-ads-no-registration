var boxGUI = new UI.StandartWindow({standart: {header: {text: {text: "Box"}}, inventory: {standart: true}, background: {color: android.graphics.Color.rgb(0, 0, 0)}}, drawing: [], elements: {}});
TileEntity.registerPrototype(BlockID.box, {defaultValues: {}, getTransportSlots: function () {
    var out = ["slotoutput"];
    var inp = ["slot1", "slot2", "slot3"];
    var sl1 = this.container.getSlot("slot1");
    return {input: inp, output: out};
}, init: function () {
}, tick: function () {
    var temp = 0;
    var content = this.container.getGuiContent();
    if (content && !content.elements["slotInput0"]) {
        for (var i = 0; i < 8; i++) {
            for (var j = 0; j < 11; j++) {
                var slot_size = 55;
                var x = 355 + (j * slot_size);
                var y = 40 + (i * slot_size);
                content.elements["slotInput" + temp] = {type: "slot", x: x, y: y};
                temp++;
            }
        }
    }
}, getGuiScreen: function () {
    return boxGUI;
}});

