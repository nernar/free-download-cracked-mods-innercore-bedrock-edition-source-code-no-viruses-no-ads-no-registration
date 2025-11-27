var guiTanningGUI = new UI.StandartWindow({standart: {header: {text: {text: "Tanning machine"}}, inventory: {standart: true}, background: {color: android.graphics.Color.rgb(0, 0, 0)}}, params: {slot: "skyrim_gui_slot", selection: "skyrim_gui_frame"}, drawing: [{type: "bitmap", x: 628, y: 228, bitmap: "skyrim_arrow_bg", scale: GUI_SCALE}], elements: {"SkyProgressScale": {type: "scale", x: 628, y: 228, direction: 0, value: 0.5, bitmap: "skyrim_arrow_scale", scale: GUI_SCALE}, "slotSource": {type: "slot", x: 500, y: 228}, "slotResult": {type: "slot", x: 756, y: 228}}});
TileEntity.registerPrototype(BlockID.tanning, {defaultValues: {active: false, progress: 0, work_time: 120}, tick: function () {
    if (World.getThreadTime() % 20 <= 10) {
        let source = this.container.getSlot("slotSource");
        let result = this.container.getSlot("slotResult");
        if (source.id == 334 && (result.id == ItemID.leatherStrips || result.id == 0)) {
            this.data.progress += 1 / this.data.work_time;
            if (this.data.progress >= 1) {
                source.count--;
                result.id = ItemID.leatherStrips;
                result.count += 4;
                result.data = 0;
                this.container.validateSlot("slotSource");
                this.data.progress = 0;
            }
        }
        this.container.setScale("SkyProgressScale", this.data.progress);
    }
}, getGuiScreen: function () {
    return guiTanningGUI;
}});

