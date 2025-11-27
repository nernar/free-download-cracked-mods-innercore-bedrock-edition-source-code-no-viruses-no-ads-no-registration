var Debug = {showButton: false, logicEnabled: !isCreative, modelPlacer: false, showLog: false};
function getTypeface() {
    return AssetFactory.createFont();
}
function coordsSave(block, coords) {
    try {
        var file = new java.io.File(__dir__ + ".idea", "coords.js");
        var text = Files.read(file, true), index = 0;
        if (text.length > 0) {
            index = text.length;
        }
        for (var i in BlockID) {
            if (BlockID[i] == block.id) {
                block.id = i;
                break;
            }
        }
        if (typeof block.id == "string") {
            block.id = "BlockID." + block.id;
        }
        var str = coords.x + ", " + coords.y + ", " + coords.z + ", " + block.id + ", " + block.data;
        var builder = new android.app.AlertDialog.Builder(context);
        builder.setTitle("Saving " + (typeof block.id == "string" ? "custom" : "vanilla") + " block coords");
        builder.setMessage(android.text.Html.fromHtml(text.slice(text.length - 10).join("<br/>") + "<br/><font color=\"#33AA33\">// current define is " + str));
        builder.setNegativeButton("Cancel", null);
        builder.setNeutralButton("Coords", function () {
            text.push("// " + str);
            Files.write(file, text.join("\n"));
            showHint("Commented as coords");
        });
        builder.setPositiveButton("Block", function () {
            text.push("World.setBlock(" + str + ");");
            Files.write(file, text.join("\n"));
            showHint("Saved as block");
        });
        builder.create().show();
    }
    catch (e) {
        reportError(e);
    }
}
var lastModel = null;
function placeModel(block, coords) {
    try {
        var items = [], variations = [];
        for (var i in DERenderer.rendered) {
            for (var v in DERenderer.rendered[i]) {
                variations.push([i, v]);
                var variant = DERenderer.rendered[i][v];
                items.push(i + ", " + v + " (" + variant.length + " sides)");
            }
        }
        if (items.length == 0) {
            return coordsSave(block, coords);
        }
        var builder = new android.app.AlertDialog.Builder(context);
        builder.setTitle("Select one of " + items.length + " models");
        builder.setItems(items, function (d, i) {
            try {
                if (coords.side == 0) {
                    coords.y--;
                } else {
                    coords.y++;
                }
                lastModel = variations[i].slice();
                DERenderer.buildParts(variations[i][0], coords, variations[i][1]);
            }
            catch (e) {
                reportError(e);
            }
        });
        builder.setPositiveButton("Save", function () {
            coordsSave(block, coords);
        });
        if (lastModel) {
            builder.setNeutralButton("Rebuild", function () {
                try {
                    if (coords.side == 0) {
                        coords.y--;
                    } else {
                        coords.y++;
                    }
                    DERenderer.buildParts(lastModel[0], coords, lastModel[1]);
                }
                catch (e) {
                    reportError(e);
                }
            });
        }
        builder.setNegativeButton("Cancel", null);
        builder.create().show();
    }
    catch (e) {
        reportError(e);
    }
}
function getTime() {
    return Date.now() - launchTime;
}
function log(tag, msg) {
    if (isDevelop || isDebug) {
        Files.createDir(__dir__ + ".idea/logs");
        var file = new java.io.File(__dir__ + ".idea/logs", launchTime + ".log");
        if (!file.exists()) {
            Files.write(file, reportError.getLaunchTime());
        }
        Files.addText(file, "\n" + getTime() + " " + tag + " " + msg);
        if (LogWindow && LogWindow.isShowed) {
            context.runOnUiThread(function () {
                try {
                    LogWindow.formatLog();
                }
                catch (e) {
                    reportError(e);
                }
            });
        }
    }
}
Callback.addCallback("ItemUse", function (coords, item, block) {
    context.runOnUiThread(function () {
        try {
            if (isDevelop && isCorrectWorld && Debug.modelPlacer) {
                if (coords.side < 2) {
                    placeModel(block, coords);
                } else {
                    coordsSave(block, coords);
                }
            }
        }
        catch (e) {
            reportError(e);
        }
    });
});

