const BlockList = {modById: {}, init: function () {
    let classLoader = UI.getContext().getClass().getClassLoader();
    let LoadingUI = java.lang.Class.forName("zhekasmirnov.launcher.ui.LoadingUI", true, classLoader).newInstance();
    let bgViewDrawableField = LoadingUI.getClass().getDeclaredField("backgroundViewDrawable");
    bgViewDrawableField.setAccessible(true);
    this.bgViewDrawable = bgViewDrawableField.get(LoadingUI);
    this.textField = this.bgViewDrawable.getClass().getDeclaredField("text");
    this.textField.setAccessible(true);
    let ModLoader = java.lang.Class.forName("zhekasmirnov.launcher.mod.build.ModLoader", true, classLoader).newInstance().instance;
    this.modsList = ModLoader.modsList;
}, onIDRegistered: function (stringId) {
    let loadingText = String(this.textField.get(this.bgViewDrawable));
    let modId = parseInt(loadingText.substr(14, loadingText.length).split("/")[0]) - 1;
    this.modById[BlockID[stringId]] = this.modsList.get(modId).getName();
}, getModName: function (id) {
    return this.modById[id] || "Minecraft";
}};
if (WailaConfig.extModName) {
    BlockList.init();
    let _genBlockID = IDRegistry.genBlockID;
    IDRegistry.genBlockID = function (a) {
        _genBlockID(a);
        BlockList.onIDRegistered(a);
    };
}

