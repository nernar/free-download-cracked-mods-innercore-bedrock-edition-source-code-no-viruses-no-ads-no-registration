IMPORT("FileAPI");
IMPORT("ZIP");
IMPORT("NBT");
var Runtime = java.lang.Runtime;
var WorldLoader = {worldsDir: File.Path.mojang + "innercoreWorlds/", worlds: [], selectWorld: null, selectGameMode: 0, init: function () {
    var isOnline = false;
    var runtime = Runtime.getRuntime();
    try {
        var ipProcess = runtime.exec("/system/bin/ping -c 1 8.8.8.8");
        var exitValue = ipProcess.waitFor();
        isOnline = (exitValue == 0);
    }
    catch (e) {
        e.printStackTrace();
    }
    delete (WorldLoader.worlds);
    WorldLoader.worlds = [];
    var mod_dirs = FileTools.GetListOfDirs(FileTools.moddir);
    for (var i in mod_dirs) {
        WorldLoader.readMod(mod_dirs[i]);
    }
    var elements = {};
    for (var i = 0, l = WorldLoader.worlds.length; i < l; i++) {
        if (!isOnline && WorldLoader.worlds[i].not_loaded) {
            continue;
        }
        elements["world_" + i] = {type: "worlditem", y: 140 * i, x: 0, world: WorldLoader.worlds[i]};
    }
    delete (WorldLoaderUI.list);
    WorldLoaderUI.list = new GUI.Window({header: {title: "WorldLoader", onClickExitButton: function (container, element) {
        container.open(WorldLoaderUI.buttonMenu);
    }}, location: {width: GUI.Size.MATCH_PARENT, height: GUI.Size.MATCH_PARENT, x: 0, y: 0, gravity: GUI.Gravity.CENTER}, elements: {"s": {type: "scroll", x: 15, y: 110, width: GUI.Size.WIDTH - 40, height: GUI.Size.HEIGHT - 135, elements: elements}}});
    WorldLoaderUI.customLoading("Post Initialization...");
}, readMod: function (mod_dir) {
    if (!FileTools.isExists(mod_dir + "/worlds")) {
        return false;
    }
    if (!FileTools.ReadJSON(mod_dir + "/config.json").enabled) {
        return false;
    }
    var mod_name = mod_dir.getName();
    if (FileTools.isExists(mod_dir + "/mod.info")) {
        mod_name = FileTools.ReadJSON(mod_dir + "/mod.info").name || mod_name;
    }
    WorldLoaderUI.customLoading("[WorldLoader] Reading worlds.", mod_name);
    var world_dirs = FileTools.GetListOfDirs(mod_dir + "/worlds");
    for (var j in world_dirs) {
        if (!FileTools.isExists(world_dirs[j] + "/world.info")) {
            continue;
        }
        var world = FileTools.ReadJSON(world_dirs[j] + "/world.info");
        if (!world.name) {
            continue;
        }
        if (FileTools.isExists(world_dirs[j] + "/level.dat")) {
            if (!(new NBT(world_dirs[j] + "/level.dat")).isValid()) {
                continue;
            }
        } else {
            if (FileTools.isExists(world_dirs[j] + "/level.dat_old")) {
                if (!(new NBT(world_dirs[j] + "/level.dat_old")).isValid()) {
                    continue;
                }
            } else {
                if (world.link) {
                    if (!new RegExp("^http(s?)://").test(world.link)) {
                        continue;
                    }
                    world.not_loaded = true;
                } else {
                    continue;
                }
            }
        }
        world.mod = mod_name;
        world.dir = world_dirs[j];
        if (FileTools.isExists(world_dirs[j] + "/icon.png")) {
            world["icon"] = "../../" + mod_dir.getName() + "/worlds/" + world_dirs[j].getName() + "/icon.png";
        } else {
            world["icon"] = "../mod_icon.png";
        }
        var i = this.worlds.push(world);
    }
}, copy: function (sourceDirName, targetSourceDir, event, old) {
    event = event || function () {
    };
    old = old || "";
    var a = new File(targetSourceDir);
    if (!a.exists()) {
        a.createDirectory();
    }
    var folder = new File(sourceDirName);
    var files = folder.listFiles(File.FILE);
    for (var i = 0, l = files.length; i < l; i++) {
        files[i].copy(targetSourceDir + "/" + files[i].getName());
        event("copy_file", files[i].getName());
    }
    files = folder.listFiles(File.DIR);
    for (var i = 0, l = files.length; i < l; i++) {
        var file_name = files[i].getName();
        event("copy_dir", old + file_name + "/");
        WorldLoader.copy(sourceDirName + "/" + file_name, targetSourceDir + "/" + file_name, event, old + file_name + "/");
    }
    event("final", "");
}, generateWorldNameFolder: function (name) {
    if (FileTools.isExists(WorldLoader.worldsDir + name)) {
        var chars = "qwertyuiopasdfghjklzxcvbnm=0123456789QWERTYUIOPASDFGHJKLZXCVBNM";
        name = "";
        for (var i = 0; i < 12; i++) {
            name += chars[Math.round(62 * Math.random())];
        }
        return WorldLoader.generateWorldNameFolder(name);
    }
    return name;
}};
var WorldLoaderUI = {c: new GUI.Container(), buttonMenu: new GUI.Overlay({touchable: true, location: {x: 10, y: 10, width: 88, height: 88, gravity: GUI.Gravity.TOP | GUI.Gravity.RIGHT}, elements: {"W": {type: "button", text: {content: "W", size: GUI.getUnitsInPixels(32)}, clicker: {onClick: function (container, element) {
    container.open(WorldLoaderUI.list);
}}}}}), openButtonMenu: function (s) {
    if (s == "play_screen - worlds" && WorldLoader.worlds.length > 0) {
        WorldLoaderUI.c.open(WorldLoaderUI.buttonMenu);
    } else {
        if (WorldLoaderUI.c.isOpened()) {
            WorldLoaderUI.c.close();
        }
    }
}, list: null, createWorld: new GUI.Window({header: {title: "WorldLoader - Create", onClickExitButton: function (container, element) {
    WorldLoader.selectWorld = null;
    container.open(WorldLoaderUI.list);
}}, focus: true, location: {width: GUI.Size.MATCH_PARENT, height: GUI.Size.MATCH_PARENT, x: 0, y: 0, gravity: GUI.Gravity.CENTER}, elements: {"icon": {type: "image", x: 20, y: 115, texture: GUI.getScaledBitmap(GUI.getBitmap("../mod_icon.png"), 200, 200)}, "t1": {type: "text", x: 240, y: 115, text: {content: "Name World in Mod", size: 45}}, "t2": {type: "text", x: 240, y: 170, text: "Mod name"}, "t3": {type: "text", x: 240, y: 212, text: "Author"}, "t4": {type: "text", x: 20, y: 335, text: "Name world:"}, "name": {type: "edittext", x: 20, y: 377, width: GUI.Size.WIDTH - 52}, "survival": {type: "button", x: 20, y: 453, width: 300, text: "Survival", texture: GUI.DefaultTextures.button, clicker: {onClick: function (c, e) {
    e.setBackground(GUI.DefaultTextures.button.pressed);
    e.getWindow().getElement("creative").setBackground(GUI.DefaultTextures.button.normal);
    WorldLoader.selectGameMode = 0;
}}}, "creative": {type: "button", width: 320, x: 330, y: 453, text: "Creative", texture: GUI.DefaultTextures.button.normal, clicker: {onClick: function (c, e) {
    e.setBackground(GUI.DefaultTextures.button.pressed);
    e.getWindow().getElement("survival").setBackground(GUI.DefaultTextures.button.normal);
    WorldLoader.selectGameMode = 1;
}}}, "create": {type: "button", x: 20, y: 560, text: "Create", clicker: {onClick: function (c, e) {
    try {
        var nameWorld = c.getWindow().getElement("name").getText();
        if (nameWorld == "") {
            return alert(Translation.translate("Enter the name of the world!"));
        }
        c.open(WorldLoaderUI.progressWindow);
        c.getWindow().getElement("title").setText("\u0421reation");
        var progress = c.getWindow().getElement("progress");
        progress.setValue(0);
        var worldDir = WorldLoader.worldsDir + WorldLoader.generateWorldNameFolder(nameWorld);
        var i = 0, all = new File(WorldLoader.selectWorld.dir).countAllFiles();
        function p(act) {
            if (act != "copy_file") {
                return;
            }
            progress.setValue(Math.round(i * 90 / all));
            i++;
        }
        WorldLoader.copy(WorldLoader.selectWorld.dir, worldDir, p);
        var nbtLevelDat = new NBT(worldDir + "/level.dat");
        nbtLevelDat.set("LevelName", nameWorld);
        if (WorldLoader.selectWorld.gamemode !== undefined && [0, 1].indexOf(WorldLoader.selectWorld.gamemode) != -1) {
            nbtLevelDat.set("GameType", WorldLoader.selectWorld.gamemode);
        } else {
            alert(nbtLevelDat.get("GameType") + " : " + WorldLoader.selectGameMode);
            nbtLevelDat.set("GameType", WorldLoader.selectGameMode);
            WorldLoaderUI.createWorld.getElement("survival").setBackground(GUI.DefaultTextures.button.pressed);
            WorldLoaderUI.createWorld.getElement("creative").setBackground(GUI.DefaultTextures.button.normal);
            WorldLoader.selectGameMode = 0;
        }
        nbtLevelDat.write();
        progress.setValue(95);
        var a = new File(worldDir, "levelname.txt");
        a.rewrite(nameWorld);
        progress.setValue(100);
        WorldLoader.selectWorld = null;
        WorldLoaderUI.openButtonMenu("play_screen - worlds");
    }
    catch (e) {
        alert("FF:" + e);
    }
}}}}}), progressWindow: new GUI.Overlay({touchable: true, location: {width: GUI.Size.MATCH_PARENT, height: GUI.Size.MATCH_PARENT, x: 0, y: 0, gravity: GUI.Gravity.CENTER}, texture: {background: GUI.DefaultTextures.panel}, elements: {"title": {type: "text", text: "Download", gravity: GUI.Gravity.CENTER, y: GUI.Size.HEIGHT / 2 - 32, width: GUI.Size.MATCH_PARENT}, "progress": {type: "scale", texture: {background: {name: "worldloader_scale.png", assets: false, bitmap: {x: 0, y: 0, width: 1, height: 1}}, scale: {name: "worldloader_scale.png", assets: false, bitmap: {x: 1, y: 0, width: 30, height: 1, scale: 10}}}, y: GUI.Size.HEIGHT / 2 + 20, x: GUI.Size.WIDTH / 2 - 150, maxValue: 100, value: 0, dir: GUI.Direction.RIGHT}}}), Events: {progress: function (c, a, b) {
    var v = Math.round(a * 100 / b);
    WorldLoaderUI.c.getWindow().getElement("progress").setValue(v);
    WorldLoaderUI.c.getWindow().getElement("title").setText(c + " " + v + "%");
}, progressLoad: function (a, b) {
    WorldLoaderUI.Events.progress(Translation.translate("Downloading"), a, b);
}, progressExtract: function (a, b) {
    WorldLoaderUI.Events.progress(Translation.translate("Extraction"), a, b);
}, unzip: function (WLZ) {
    WorldLoaderUI.Events.progressExtract(0, 1);
    var a = WLZ.getList().getCount(), dir = WorldLoader.selectWorld.dir;
    if (a < 1) {
        return alert("Error extract");
    }
    if (a == 1) {
        dir += "/../";
    }
    WLZ.unzip(dir, {progress: WorldLoaderUI.Events.progressExtract, end: WorldLoaderUI.Events.end});
    WLZ.delete();
}, end: function () {
    WorldLoader.init();
    WorldLoaderUI.c.open(WorldLoaderUI.list);
}}, customLoading: function (text, tips) {
    var clazz = java.lang.Class.forName("zhekasmirnov.launcher.ui.LoadingUI", true, UI.getContext().getClass().getClassLoader());
    clazz.getMethod("setText", new java.lang.String().getClass()).invoke(null, new java.lang.String(text));
    if (tips) {
        clazz.getMethod("setTip", new java.lang.String().getClass()).invoke(null, new java.lang.String(tips));
    }
}};
Callback.addCallback("PostLoaded", WorldLoader.init);
Callback.addCallback("NativeGuiChanged", WorldLoaderUI.openButtonMenu);

