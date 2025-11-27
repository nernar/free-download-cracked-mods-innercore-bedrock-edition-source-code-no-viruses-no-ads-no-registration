ModAPI.addAPICallback("ClassicUI", function (api) {
    api.registerAllHandler({onOpen(id, group, tile) {
        let setting = api.getBlockFunctions(id);
        if (!setting.disableJeiMobile) {
            let size = api.getSizeClassicUi(id, group);
            Jei.open(setting.jeiSetting || {name: id, x: size.x + size.width, line: 6});
        }
    }, onClose() {
        Jei.close();
    }});
});
ModAPI.registerAPI("Jei-mobile", {Jei: Jei, requireGlobal(cmd) {
    return eval(cmd);
}});

