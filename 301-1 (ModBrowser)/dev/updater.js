var Environment = android.os.Environment;
var Scanner = java.util.Scanner;
var File = java.io.File;
var StringBuilder = java.lang.StringBuilder;
var BufferedWriter = java.io.BufferedWriter;
var FileWriter = java.io.FileWriter;
var version_file = Environment.getExternalStorageDirectory().getAbsolutePath() + "/games/com.mojang/mods/versions.json";
var updates = [];
var fontTitle = {size: 40, color: android.graphics.Color.WHITE, shadow: 0.5, alignment: 1, bold: true};
var updatesWindow = {drawing: [{type: "background", color: android.graphics.Color.TRANSPARENT}], elements: {seeUpdatesButton: {type: "button", x: 0, y: 0, scale: 2.5, bitmap: "mod_browser_update", bitmap2: "mod_browser_update_down", clicker: {onClick: updates_click}}, detailsText: {type: "text", x: 500, y: 0, z: 10, text: locale.update_found1, font: fontTitle}, detailsText2: {type: "text", x: 500, y: 80, z: 10, text: locale.update_found2, font: fontTitle}}, location: {x: 300, y: 0, width: 400, height: 80}};
function getAllVersions() {
    var file = new File(version_file);
    if (!file.exists()) {
        return {};
    }
    var sc = new Scanner(file);
    var builder = new StringBuilder();
    while (sc.hasNextLine()) {
        builder.append(sc.nextLine());
    }
    try {
        var str = builder.toString();
        var obj = JSON.parse(str);
        if (typeof obj === "object") {
            return obj;
        } else {
            return {};
        }
    }
    catch (e) {
        log(e);
        return {};
    }
}
function writeVersions(versions) {
    var writer = new BufferedWriter(new FileWriter(version_file));
    writer.write(JSON.stringify(versions));
    writer.close();
}
var containerUpdateFound = new UI.Container();
Callback.addCallback("PostLoaded", function () {
    var versions = getAllVersions();
    updates = [];
    if (versions) {
        for (var id in versions) {
            var version = versions[id];
            var current = getCurrentVersion(id);
            if (parseInt(current) > version) {
                log("update found to mod " + id);
                updates.push(id);
            }
        }
        if (updates.length > 0) {
            var window = new UI.Window(updatesWindow);
            window.setAsGameOverlay(true);
            containerUpdateFound.openAs(window);
        }
    }
});
Callback.addCallback("NativeGuiChanged", function (name) {
    if (name != "start_screen" && containerUpdateFound.isOpened()) {
        containerUpdateFound.close();
    }
});
function updates_click() {
    containerUpdateFound.close();
    BrowserUI.open(true);
}
function getCurrentVersion(id) {
    return parseInt(Network.getURLContents("https://icmods.mineprogramming.org/api/version.php?id=" + id));
}

