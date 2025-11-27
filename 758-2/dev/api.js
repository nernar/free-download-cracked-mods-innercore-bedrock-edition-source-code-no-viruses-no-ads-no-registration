const DISPLAY = UI.getContext().getWindow().getWindowManager().getDefaultDisplay();
const backupTime = __config__.getNumber("backupTime");
var backupTicks = backupTime * 20;
let Level = WRAP_NATIVE("BackupsModModule");
let BackupsJava = WRAP_JAVA("com.hunabis.backups.Main");
BackupsJava = new BackupsJava();
let WorldDataSaverHandler = WRAP_JAVA("com.zhekasmirnov.innercore.api.runtime.saver.world.WorldDataSaverHandler");
function getNearestNum(a) {
    let arr = [];
    for (let i in messageTime) {
        let ticks = messageTime[i];
        arr.push(a > ticks ? a - ticks : ticks - a);
    }
    return messageTime[arr.indexOf(Math.min.apply(null, arr))];
}
Translation.addTranslation("Backup completed!", {en: "The world was backed up successfully!", ru: "\u0420\u0435\u0437\u0435\u0440\u0432\u043d\u043e\u0435 \u043a\u043e\u043f\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435 \u043c\u0438\u0440\u0430 \u043f\u0440\u043e\u0448\u043b\u043e \u0443\u0441\u043f\u0435\u0448\u043d\u043e!", zh: "\u4e16\u754c\u5907\u4efd\u6210\u529f!", ja: "\u4e16\u754c\u306f\u7121\u4e8b\u306b\u30d0\u30c3\u30af\u30a2\u30c3\u30d7\u3055\u308c\u307e\u3057\u305f!", pt: "O mundo foi apoiado com sucesso!"});
Translation.addTranslation("Backup will start soon!", {en: "Backup will start soon!", ru: "\u0420\u0435\u0437\u0435\u0440\u0432\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435 \u0441\u043a\u043e\u0440\u043e \u043d\u0430\u0447\u043d\u0435\u0442\u0441\u044f!", zh: "\u5907\u4efd\u5373\u5c06\u5f00\u59cb!", ja: "\u30d0\u30c3\u30af\u30a2\u30c3\u30d7\u306f\u307e\u3082\u306a\u304f\u958b\u59cb\u3055\u308c\u307e\u3059!", pt: "O backup come\xe7ar\xe1 em breve!"});
Translation.addTranslation("Start backup...", {en: "Start backup. The server may sag a little!", ru: "\u0417\u0430\u043f\u0443\u0441\u043a \u0440\u0435\u0437\u0435\u0440\u0432\u043d\u043e\u0433\u043e \u043a\u043e\u043f\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u044f. \u0421\u0435\u0440\u0432\u0435\u0440 \u043c\u043e\u0436\u0435\u0442 \u043d\u0435\u043c\u043d\u043e\u0433\u043e \u043f\u0440\u043e\u0432\u0438\u0441\u043d\u0443\u0442\u044c!", zh: "\u5f00\u59cb\u5907\u4efd. \u670d\u52a1\u5668\u53ef\u80fd\u4f1a\u4e0b\u5782!", ja: "\u30d0\u30c3\u30af\u30a2\u30c3\u30d7\u3092\u958b\u59cb\u3057\u307e\u3059. \u30b5\u30fc\u30d0\u30fc\u304c\u5c11\u3057\u5782\u308c\u308b\u304b\u3082\u3057\u308c\u307e\u305b\u3093\uff01", pt: "Iniciar backup. O servidor pode cair um pouco!"});
Translation.addTranslation("Next scheduled backup in ", {en: "Next scheduled backup in ", ru: "\u0421\u043b\u0435\u0434\u0443\u044e\u0449\u0435\u0435 \u0437\u0430\u043f\u043b\u0430\u043d\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u043e\u0435 \u0440\u0435\u0437\u0435\u0440\u0432\u043d\u043e\u0435 \u043a\u043e\u043f\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435 \u0447\u0435\u0440\u0435\u0437 ", zh: "\u4e0b\u4e00\u6b21\u8ba1\u5212\u5907\u4efd\u5728 ", ja: "\u6b21\u306e\u30b9\u30b1\u30b8\u30e5\u30fc\u30eb\u3055\u308c\u305f\u30d0\u30c3\u30af\u30a2\u30c3\u30d7 ", pt: "Pr\xf3ximo backup agendado em "});
Translation.addTranslation("m.", {en: "m.", ru: "\u043c\u0438\u043d.", zh: "\u5206\u949f", ja: "\u5206", pt: "m."});
Translation.addTranslation("No world found", {en: "No name found", ru: "\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d\u043e", zh: "\u627e\u4e0d\u5230\u4e16\u754c", ja: "\u4e16\u754c\u304c\u898b\u3064\u304b\u308a\u307e\u305b\u3093", pt: "Nenhum mundo encontrado"});
Translation.addTranslation("Delete", {en: "Delete", ru: "\u0423\u0434\u0430\u043b\u0438\u0442\u044c", zh: "\u5220\u9664", ja: "\u524a\u9664", pt: "Excluir"});
Translation.addTranslation("Load", {en: "Load", ru: "\u041e\u0442\u043a\u0430\u0442\u0438\u0442\u044c", zh: "\u52a0\u8f7d", ja: "\u8ca0\u8377", pt: "Carregar"});
Translation.addTranslation("Creating a backup took: ", {en: "Creating a backup took: ", ru: "\u0421\u043e\u0437\u0434\u0430\u043d\u0438\u0435 \u0431\u0435\u043a\u0430\u043f\u0430 \u0437\u0430\u043d\u044f\u043b\u043e: ", zh: "\u521b\u5efa\u5907\u4efd\u9700\u8981\uff1a ", ja: "\u30d0\u30c3\u30af\u30a2\u30c3\u30d7\u306e\u4f5c\u6210\u306b\u306f\u6b21\u306e\u6642\u9593\u304c\u304b\u304b\u308a\u307e\u3057\u305f\u3002 ", pt: "Criar um backup levou: "});
Translation.addTranslation("sec.", {en: "sec.", ru: "\u0441\u0435\u043a.", zh: "\u79d2", ja: "\u79d2", pt: "seg."});
Translation.addTranslation("Folder: ", {en: "Folder: ", ru: "\u041f\u0430\u043f\u043a\u0430: ", zh: "\u6587\u4ef6\u5939\uff1a ", ja: "\u30d5\u30a9\u30eb\u30c0\uff1a ", pt: "Pasta: "});
Translation.addTranslation("The world was rolled back to the selected backup successfully", {en: "The world was rolled back to the selected backup successfully", ru: "\u041e\u0442\u043a\u0430\u0442 \u043c\u0438\u0440\u0430 \u0434\u043e \u0432\u044b\u0431\u0440\u0430\u043d\u043d\u043e\u0439 \u0440\u0435\u0437\u0435\u0440\u0432\u043d\u043e\u0439 \u043a\u043e\u043f\u0438\u0438, \u043f\u0440\u043e\u0448\u0435\u043b \u0443\u0441\u043f\u0435\u0448\u043d\u043e", zh: "\u4e16\u754c\u5df2\u6210\u529f\u56de\u6eda\u5230\u9009\u5b9a\u7684\u5907\u4efd", ja: "\u9078\u629e\u3057\u305f\u30d0\u30c3\u30af\u30a2\u30c3\u30d7\u306b\u30ef\u30fc\u30eb\u30c9\u304c\u6b63\u5e38\u306b\u30ed\u30fc\u30eb\u30d0\u30c3\u30af\u3055\u308c\u307e\u3057\u305f", pt: "O mundo foi revertido para o backup selecionado com sucesso"});
Translation.addTranslation("The backup will start in ", {en: "The backup will start in ", ru: "\u0420\u0435\u0437\u0435\u0440\u0432\u043d\u043e\u0435 \u043a\u043e\u043f\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435 \u043d\u0430\u0447\u043d\u0435\u0442\u0441\u044f \u0447\u0435\u0440\u0435\u0437 ", zh: "\u5907\u4efd\u5c06\u5728 ", ja: "\u30d0\u30c3\u30af\u30a2\u30c3\u30d7\u306f\u6b21\u306e\u6642\u9593\u306b\u958b\u59cb\u3055\u308c\u307e\u3059 ", pt: "O backup come\xe7ar\xe1 em "});
Translation.addTranslation("BackupsTab", {en: "Backups", ru: "\u0411\u0435\u043a\u0430\u043f\u044b", zh: "\u5907\u4efd", ja: "\u30d0\u30c3\u30af\u30a2\u30c3\u30d7", pt: "Backups"});
let messageTime = [72000, 54000, 36000, 18000, 12000, 6000, 1200, 600, 200, 100, 80, 60, 40, 20];
messageTime.splice(messageTime.indexOf(getNearestNum(backupTicks)), 1);
let worldName;
let isHost;
Callback.addCallback("LevelSelected", function (a, b) {
    backupTicks = backupTime * 20;
    worldName = b;
});
Callback.addCallback("ServerPlayerTick", function (p) {
    if (isHost) {
        if (backupTicks > 0) {
            let index = messageTime.indexOf(backupTicks);
            if (index !== -1) {
                let isMinute = backupTicks > 1200;
                Game[isMinute ? "message" : "tipMessage"]("\xa73" + Translation.translate("The backup will start in ") + (isMinute ? (backupTicks / 1200) + Translation.translate("m.") : backupTicks / 20 + Translation.translate("sec.")));
            }
            backupTicks--;
        } else {
            Game.message("\xa73" + Translation.translate("Start backup..."));
            Level.saveLevelData();
            WorldDataSaverHandler.getInstance().queueSave();
            let time = java.lang.System.currentTimeMillis();
            BackupsJava.copyDir(__packdir__ + "worlds", worldName);
            Game.message("\xa73" + Translation.translate("Creating a backup took: ") + (java.lang.System.currentTimeMillis() - time) + " ms");
            backupTicks = backupTime * 20;
            Game.message("\xa73" + Translation.translate("Backup completed!") + "\n" + "\xa73" + Translation.translate("Next scheduled backup in ") + Math.round(backupTicks / 1200) + Translation.translate("m."));
        }
    } else {
        isHost = Player.get() == p;
    }
});
var padding = 17;
var uisPadding = 17;
var uisSidePadding = 8.5;
var mainLocation = {x: padding, y: padding, width: 1000 - padding * 2, height: UI.getScreenHeight() - padding * 2};
var mainElements = {"upTabCloseButton": {type: "image", x: 940, y: 0, z: -10, width: 60, height: 60, bitmap: "tab_up_close_button", scale: 2}, "closeButton": {type: "button", x: 952, y: 12, z: 10, scale: 36 / 15, bitmap: "classic_close_button", bitmap2: "classic_close_button_down", clicker: {onClick: function () {
    BackupsMenu.close();
    BackupsMenuButton.open();
    BackupsListMenu.close();
    ChoiceMenu.close();
}}}, "upTabChangelog": {type: "frame", x: 0, y: 0, z: 1, width: 300, height: 56, bitmap: "classic_tab_up_light", scale: 2, onTouchEvent: function (element, event) {
}}, "upTabChangelog_text": {type: "text", x: 35 + 15 * 2, y: 56 / 2 - 11, z: 10, text: Translation.translate("BackupsTab"), font: {color: android.graphics.Color.DKGRAY, shadow: 0}}, "upTabChangelog_image": {type: "image", z: 10, x: 15, y: (56 - 35) / 2, bitmap: "backups_icon", scale: 35 / 16}, "frame": {type: "frame", x: 0, y: 50, width: 1000, height: (mainLocation.height * 1000 / mainLocation.width) - 50, bitmap: "changelog_frame", scale: 2}};
var BackupsMenu = new UI.Window({location: mainLocation, drawing: [{type: "color", color: android.graphics.Color.TRANSPARENT}], elements: mainElements});
BackupsMenu.forceRefresh();
var changelogWindowLocation = {x: padding + uisPadding + uisSidePadding, y: (padding + uisPadding + mainLocation.height / UI.getScreenHeight() * mainElements.frame.y) + (UI.getScreenHeight() * 0.02), width: 1000 - padding * 2 - uisPadding * 2 - uisSidePadding * 2, height: (UI.getScreenHeight() - padding * 3 - uisPadding * 3 - ((mainLocation.height * 1000 / mainLocation.width) / mainLocation.width * 56)) - (UI.getScreenHeight() * 0.02)};
var changelogTexts = [];
var changelogElements = {last: -1};
BackupsListMenu = new UI.Window({location: changelogWindowLocation, drawing: [{type: "color", color: android.graphics.Color.TRANSPARENT}], elements: changelogElements});
BackupsListMenu.forceRefresh();
function nextChangelog() {
    if (!goToChangelog(changelogElements.last + 1)) {
        return false;
    }
}
var selectedBackup = [];
function goToChangelog(_id) {
    if (!changelogTexts[_id]) {
        return false;
    }
    var _y = 0;
    if (_id > 0) {
        _y = changelogElements["frame" + (_id - 1)].y + changelogElements["frame" + (_id - 1)].height + 5;
    }
    changelogElements["frame" + _id] = {type: "frame", id: _id, x: 0, y: _y, z: -1, width: 1000, height: 125, bitmap: "grayFrame", scale: 3, clicker: {onClick: function () {
        ChoiceMenu.open();
        selectedBackup[0] = changelogTexts[_id].pathName;
        selectedBackup[1] = changelogTexts[_id].time;
    }}, onTouchEvent: function (element, event) {
        if (event.type == "MOVE" && !this.moving) {
            this.moving = true;
            var __id = changelogElements.last + 1;
            if (!changelogTexts[__id]) {
                return false;
            }
            var craftsThread = java.lang.Thread({run: function () {
                try {
                    for (var i = 0; i < 3; i++) {
                        nextChangelog();
                    }
                }
                catch (err) {
                    alert("Sorry, i broke :_(" + JSON.stringify(err));
                }
            }});
            craftsThread.setPriority(java.lang.Thread.MIN_PRIORITY);
            craftsThread.start();
        }
    }};
    BackupsListMenu.location.setScroll(0, BackupsListMenu.location.windowToGlobal(_y + 125));
    if (BackupsListMenu.isOpened()) {
        BackupsListMenu.updateWindowLocation();
    }
    changelogElements["versionText" + _id] = {type: "text", id: _id, x: changelogElements["frame" + _id].x + 15, y: changelogElements["frame" + _id].y + 15, text: changelogTexts[_id].name, z: 10, multiline: true, font: {color: android.graphics.Color.WHITE, size: 30, shadow: 0}};
    changelogElements["timeText" + _id] = {type: "text", id: _id, x: changelogElements["frame" + _id].x + changelogElements["frame" + _id].width - (30 * 12) - 15, y: changelogElements["frame" + _id].y + 15, text: changelogTexts[_id].time, z: 10, multiline: true, font: {color: android.graphics.Color.WHITE, size: 30, shadow: 0}};
    var descrText = changelogTexts[_id].pathName;
    changelogElements["descriptionText" + _id] = {type: "text", id: _id, x: changelogElements["frame" + _id].x + 50, y: changelogElements["frame" + _id].y + 65, text: Translation.translate("Folder: ") + descrText, z: 10, multiline: true, font: {color: android.graphics.Color.WHITE, size: 20, shadow: 0}};
    changelogElements["frame" + _id].height += (descrText.split("\n").length - 1) * (changelogElements["descriptionText" + _id].font.size * 1.1 + 2);
    changelogElements.last = _id;
    BackupsListMenu.location.setScroll(0, BackupsListMenu.location.windowToGlobal(_y + changelogElements["frame" + _id].height));
    if (BackupsListMenu.isOpened()) {
        BackupsListMenu.updateWindowLocation();
    }
    return true;
}
function initMainChangelogVersions() {
    for (var i = 0; i < 5; i++) {
        nextChangelog();
    }
}
function getBackupList() {
    let backupList = [];
    let backups = java.io.File(__packdir__ + "worlds/BACKUPS").listFiles();
    for (let i in backups) {
        let file = backups[i];
        let fullName = file.getName() + "";
        let nameAndTime = fullName.split("|");
        backupList.push({name: getNameForPathName(nameAndTime), time: nameAndTime[1], pathName: nameAndTime[0]});
    }
    return backupList;
}
function getNameForPathName(pathAndTime) {
    let txt;
    let fullPath = __packdir__ + "worlds/BACKUPS/" + pathAndTime[0] + "|" + pathAndTime[1] + "/levelname.txt";
    if (new java.io.File(fullPath).exists()) {
        txt = FileTools.ReadText(fullPath);
    } else {
        txt = Translation.translate("No world found");
    }
    return txt;
}
changelogTexts = getBackupList();
initMainChangelogVersions();
let buttonWidth = 9.5 * UI.getScreenHeight() / 100;
let buttonHeight = 20 * UI.getScreenHeight() / 100;
var BackupsMenuButton = new UI.Window({location: {x: 0, y: (UI.getScreenHeight() - buttonHeight) / 2, width: buttonWidth, height: buttonHeight}, drawing: [{type: "color", color: 0}], elements: {"button": {type: "button", x: 0, y: 0, bitmap: "backups_menu_button", bitmap2: "backups_menu_button_pressed", scale: 49, clicker: {onClick: function () {
    changelogTexts = getBackupList();
    initMainChangelogVersions();
    BackupsMenu.open();
    BackupsListMenu.open();
    BackupsMenuButton.close();
}}}}});
BackupsMenuButton.setAsGameOverlay(true);
var choiceLocation = {x: 250, y: UI.getScreenHeight() * 0.34, width: 1000 - 250 * 2, height: UI.getScreenHeight() - (UI.getScreenHeight() * 0.34) * 2};
var ChoiceMenu = new UI.Window({location: choiceLocation, drawing: [{type: "color", color: android.graphics.Color.TRANSPARENT}], elements: {"frame": {type: "frame", x: 0, y: 50, width: 1000, height: (choiceLocation.height * 1000 / choiceLocation.width) - 50, bitmap: "choice_frame", scale: 7}, "button": {type: "button", x: (1000 * 0.237) - (48 * 5 / 2), y: (UI.getScreenHeight() * 0.36) - (24 * 5 / 2), z: 2, scale: 5, bitmap: "choice_button", bitmap2: "choice_button_pressed", clicker: {onClick: function () {
    try {
        BackupsJava.restoreDir(__packdir__ + "worlds/", selectedBackup[0], selectedBackup[1]);
        alert(Translation.translate("The world was rolled back to the selected backup successfully"));
        ChoiceMenu.close();
    }
    catch (err) {
        alert("There was some kind of error: " + JSON.stringify(err));
    }
    selectedBackup = [];
}}}, "button2": {type: "button", x: (1000 * 0.73) - (48 * 5 / 2), y: (UI.getScreenHeight() * 0.36) - (24 * 5 / 2), z: 2, scale: 5, bitmap: "choice_button", bitmap2: "choice_button_pressed", clicker: {onClick: function () {
    org.apache.commons.io.FileUtils.deleteDirectory(new java.io.File(__packdir__ + "worlds/BACKUPS/" + selectedBackup[0] + "|" + selectedBackup[1]));
    changelogElements = {last: -1};
    changelogTexts = getBackupList();
    initMainChangelogVersions();
    let content = BackupsListMenu.getContent();
    content.elements = changelogElements;
    BackupsListMenu.setContent(content);
    ChoiceMenu.close();
    selectedBackup = [];
}}}, "buttonText": {type: "text", x: 1000 * 0.237 - (48 * 5 / 2) + (35 * 1.1) - 18, y: UI.getScreenHeight() * 0.36 - 35 / 2, text: Translation.translate("Load"), z: 3, multiline: true, font: {color: android.graphics.Color.rgb(0, 140, 0), size: 35, shadow: 0}}, "buttonText2": {type: "text", x: 1000 * 0.73 - (48 * 5 / 2) + 35 * 1.1 - 6, y: UI.getScreenHeight() * 0.36 - 35 / 2, text: Translation.translate("Delete"), z: 3, multiline: true, font: {color: android.graphics.Color.RED, size: 35, shadow: 0}}, "closeButton": {type: "button", x: 900, y: UI.getScreenHeight() / 100 * 13, z: 10, scale: 36 / 8, bitmap: "classic_close_button", bitmap2: "classic_close_button_down", clicker: {onClick: function () {
    ChoiceMenu.close();
    selectedBackup = [];
}}}}});
ChoiceMenu.forceRefresh();
let buttonWidth2 = 70;
let buttonHeight2 = 70;
let backupAnim = [];
for (let i = 0; i < 9; i++) {
    backupAnim.push("create_backup_" + i);
}
backupAnim.delay = 2;
var BackupCreateButton = new UI.Window({location: {x: 1000 - buttonWidth2, y: UI.getScreenHeight() - buttonHeight2, width: buttonWidth2, height: buttonHeight2}, drawing: [{type: "color", color: 0}], elements: {"button": {type: "button", x: 0, y: 0, bitmap: "NativeButton", bitmap2: "NativeButtonPressed", scale: 1000 / 111, clicker: {onClick: function () {
    backupTicks = 100;
    alert(Translation.translate("Backup will start soon!"));
}}}, "image": {type: "image", x: 250, y: 88, z: 10, scale: 600 / 22, bitmap: backupAnim}}});
BackupCreateButton.setAsGameOverlay(true);
Callback.addCallback("NativeGuiChanged", function (name, lastName, isPushEvent) {
    if (name == "play_screen - worlds") {
        BackupsMenuButton.open();
    } else {
        BackupsMenuButton.close();
    }
    if (name == "pause_screen" && isHost) {
        BackupCreateButton.open();
    } else {
        BackupCreateButton.close();
    }
});
Callback.addCallback("NativeCommand", function (cmd) {
    if (cmd == "/backup" && isHost) {
        Game.prevent();
        backupTicks = 100;
    }
});

