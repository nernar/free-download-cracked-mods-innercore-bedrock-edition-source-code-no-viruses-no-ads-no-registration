var filingCabinetObj = {standart: {header: {text: {text: "Filing Cabinet"}}, inventory: {standart: true}, background: {standart: true}}, drawing: [], elements: {}};
var slotsInRow = 0;
var xp = 340;
var yp = 40;
for (var i = 0; i < 36; i++) {
    filingCabinetObj.elements["slot" + i] = {type: "slot", x: xp, y: yp};
    xp += 61;
    slotsInRow++;
    if (slotsInRow == 9) {
        xp = 340;
        yp += 61;
        slotsInRow = 0;
    }
}
var UIFilCab = new UI.StandartWindow(filingCabinetObj);
IDRegistry.genBlockID("filingCabinet");
Block.createBlockWithRotation("filingCabinet", [{name: "Filing Cabinet", texture: [["filingcabinet_back", 0], ["filingcabinet_back", 0], ["filingcabinet_side", 0], ["filingcabinet", 0], ["filingcabinet_side", 0], ["filingcabinet_side", 0]], inCreative: true}]);
MachineRegistry.register(BlockID.filingCabinet, {INPUT_SLOTS: [], getGuiScreen: function () {
    return UIFilCab;
}, getTransportSlots: function () {
    return {input: this.INPUT_SLOTS};
}});

