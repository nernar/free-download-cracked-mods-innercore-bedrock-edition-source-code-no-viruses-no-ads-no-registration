const PatchedJava = WRAP_JAVA("com.reider.patched.Patched");
const UISetting = {invSlot: {bitmap: "_default_slot"}, close: {bitmap: "close_button_up", bitmap2: "close_button_down"}, frame: {bitmap: "default_frame_bg_light"}};
function uiReplaced(controller) {
    let result = controller.getResult();
    if (!result || !result.getWindow) {
        return;
    }
    let header = result.getWindow("header");
    if (header) {
        let ui = header.getContent();
        ui.elements["default-close-button"].bitmap = UISetting.close.bitmap;
        ui.elements["default-close-button"].bitmap2 = UISetting.close.bitmap2;
        ui.drawing[1].bitmap = "classic_header_frame";
        ui.drawing[1].color = android.graphics.Color.rgb(115 / 255, 105 / 255, 114 / 255);
        ui.drawing[2].font.color = android.graphics.Color.rgb(1, 1, 1);
        ui.drawing[2].font.bold = true;
        ui.drawing[2].font.shadow = 1;
    }
    let inventory = result.getWindow("inventory");
    if (inventory) {
        let ui = inventory.getContent();
        let keys = Object.keys(ui.elements);
        for (let i in keys) {
            let key = keys[i];
            ui.elements[key].bitmap = UISetting.invSlot.bitmap;
        }
    }
    let main = result.getWindow("main");
    if (main) {
        let ui = main.getContent();
        ui.drawing[1].bitmap = UISetting.frame.bitmap;
        ui.drawing[1].color = android.graphics.Color.rgb(148 / 255, 134 / 255, 133 / 255);
    }
    result.refreshAll();
    controller.setResult(result);
}
TileEntity.registerPrototype = PatchedJava.getReplacedFunction(TileEntity.registerPrototype, function (ctr) {
    let args = ctr.getArguments();
    let obj = args[1];
    if (obj.getScreenByName) {
        obj.getScreenByName = PatchedJava.getReplacedFunction(obj.getScreenByName, uiReplaced, 1);
    }
    if (obj.getGuiScreen) {
        obj.getGuiScreen = PatchedJava.getReplacedFunction(obj.getGuiScreen, uiReplaced, 1);
    }
    ctr.setArguments(args);
}, 0);
ModAPI.registerAPI("UILegacy", {requireGlobal(cmd) {
    return eval(cmd);
}});

