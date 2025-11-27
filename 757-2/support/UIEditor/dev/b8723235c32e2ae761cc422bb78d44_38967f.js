function exportElement(e, name) {
    var props = "\n\t\t\"" + name + "\"" + ": {", count = 0, cur = 0;
    for (let i in e) {
        count++;
    }
    for (let u in e) {
        cur++;
        let i = u;
        if (cur != count) {
            if (i != "clicker" && i != "onClick" && i != "onLongClick" && i != "overlay" && i != "overlayScale" && i != "overlayOffset" && i != "invert") {
                if (i == "type") {
                    props += i + ": \"" + e[i] + "\"";
                } else {
                    if (i == "bitmap" || i == "bitmap2" || i == "text") {
                        props += ", " + i + ": \"" + e[i] + "\"";
                    } else {
                        props += ", " + i + ": " + e[i];
                    }
                }
            }
        } else {
            props += "},";
        }
    }
    return props;
}
function exportUI(rewrite, newPRJ) {
    Widgets.run(function () {
        FileAPI.checkDir(["guis", "projects"]);
        let files = FileAPI.list(["guis/"]), count1 = FileAPI.getFilesCount(files[0]), ui = editorUI.main.Window.content, elements = ui.elements;
        if (newPRJ == true) {
            editorUI.project = ("CUI_" + (count1 + 1) + ".js");
        }
        if (rewrite == true && editorUI.project != null) {
            var fileGUI = editorUI.project;
            var filePRJ = fileGUI + "on";
        } else {
            if (rewrite == true && editorUI.project == null) {
                if (FileAPI.getGuiItems(ui) == true) {
                    alert("No projects imported last, saving one new");
                }
                var fileGUI = "CUI_" + (count1 + 1) + ".js";
                var filePRJ = "CUI_" + (count1 + 1) + ".json";
            } else {
                if (!rewrite) {
                    var fileGUI = "CUI_" + (count1 + 1) + ".js";
                    var filePRJ = "CUI_" + (count1 + 1) + ".json";
                }
            }
        }
        let exporting = "var custom_UI = new UI.StandartWindow({\n\tstandart: {header: {text: {text: \"Created With UIEditor\"}},\n\tbackground: {color: android.graphics.Color.parseColor(\"#b3b3b3\")}, inventory: {standart: true}},\n\tdrawing: [],\n\telements: {";
        var json = {"elements": elements};
        for (let u in elements) {
            let i = u, el = "";
            if (elements[i] != null) {
                exporting += exportElement(elements[i], i);
            }
        }
        exporting += "\n\t}\n});";
        if (FileAPI.getGuiItems(ui) == true) {
            FileTools.WriteText(__dir__ + "guis/" + fileGUI, exporting);
        }
        if (FileAPI.getGuiItems(ui) == true) {
            FileTools.WriteJSON(__dir__ + "projects/" + filePRJ, json, true);
        }
        if (FileAPI.getGuiItems(ui) == true) {
            alert("Saved to guis/" + fileGUI + " and to projects/" + filePRJ);
        } else {
            alert("Nothing to save...");
        }
    });
}
function importUI(item) {
    Widgets.run(function () {
        var c = FileTools.ReadJSON(__dir__ + "projects/" + item);
        for (let u in c["elements"]) {
            let i = u;
            let cei = c["elements"][i];
            edit(["add", i, cei]);
            if (cei != null || cei != undefined) {
                cei.clicker = {onClick: function () {
                    edit(["select", i]);
                }};
            }
        }
        if (c != undefined) {
            alert("Loaded [" + item + "]");
        } else {
            alert("Error loading [" + item + "], undefined");
        }
    });
}

