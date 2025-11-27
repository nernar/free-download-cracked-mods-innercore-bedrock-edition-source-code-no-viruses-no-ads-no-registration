const reportError = function (err) {
    err.time = Date.now();
    log("Error", reportError.getCode(err));
    if (reportError.isReporting) {
        reportError.stack.push(err);
        if (reportError.stack.length > 5 && err.time - reportError.stack[reportError.stack.length - 1].time < 500) {
            return reportError.stopGame();
        }
        return;
    } else {
        reportError.isReporting = true;
    }
    context.runOnUiThread(function () {
        var builder = new android.app.AlertDialog.Builder(context, android.R.style.Theme_DeviceDefault_Dialog);
        builder.setTitle("Oh nose everything broke");
        builder.setCancelable(false);
        var result = [];
        result.push("An error occurred while executing the mod. If the game process is affected, try re-entering the world. Send a screenshot of the error to our group or save the error in the internal storage.");
        result.push("<hr/>");
        result.push("<font color=\"#CCCC33\"><b>" + err.name + "</b>");
        result.push(err.message);
        result.push(new java.lang.String(err.stack).replaceAll("\n", "<br/>") + "</font>");
        if (isDevelop || isDebug) {
            result.push("Game settings");
            result.push(reportError.getDebugValues());
            result.push("<br/>" + err.fileName);
            result.push(reportError.getErrorLines(err.fileName, err.lineNumber));
        }
        builder.setMessage(android.text.Html.fromHtml(result.join("<br/>")));
        !isDebug && builder.setPositiveButton("OK", null);
        builder.setNeutralButton(reportError.getCode(err), function () {
            reportError.saveError(err);
        });
        var dialog = builder.create();
        dialog.getWindow().setLayout(Ui.Display.WIDTH / 1.4, Ui.Display.WRAP);
        dialog.setOnDismissListener(function () {
            reportError.isReporting = false;
            reportError.stack.length > 0 && reportError(reportError.stack.shift());
        });
        dialog.show();
    });
};
reportError.stack = [];
reportError.getErrorLines = function (file, number) {
    file.indexOf("$") != -1 && (file = file.split("$")[1]);
    var source = new java.io.File(__dir__ + file), result = [], lines = Files.readLines(source, number - 5, number + 2);
    if (lines && lines.length > 0) {
        var isErrorLines = false;
        for (var i = 0; i < lines.length; i++) {
            var prefix = "<small>" + (number + i - 3) + "</small> ";
            if (i == 4) {
                isErrorLines = true;
            } else {
                if (isErrorLines && lines[i].indexOf("}") != -1) {
                    isErrorLines = false;
                }
            }
            result.push(isErrorLines ? prefix + "<font color=\"#DD3333\">" + lines[i] + "</font>" : prefix + "<font color=\"#33BB33\">" + lines[i] + "</font>");
        }
    } else {
        result.push("No source code");
    }
    return "<font face=\"monospace\">" + result.join("<br/>") + "</font>";
};
reportError.getDebugValues = function () {
    var result = [];
    isCorrectWorld != null && result.push("isCorrectWorld = " + isCorrectWorld + ";");
    result.push("isCreative = " + isCreative + ";");
    result.push("Debug.logicEnabled = " + Debug.logicEnabled + ";");
    result.push("Debug.modelPlacer = " + Debug.modelPlacer + ";");
    result.push("Debug.showButton = " + Debug.showButton + ";");
    return "<font face=\"monospace\">" + result.join("<br/>") + "</font>";
};
reportError.getCode = function (err) {
    var encoded = java.lang.String(err.message + " (#" + err.lineNumber + "#)"), counter = Hashable.toMD5(encoded.getBytes()).hashCode(), code = Math.round(Math.abs(counter / 1000000));
    return "NE-" + (code < 1000 ? "0" + code : code);
};
reportError.getLaunchTime = function () {
    return new Date(launchTime).toString();
};
reportError.saveError = function (err) {
    var file = new java.io.File(__dir__ + "assets/errors.log");
    if (!file.exists()) {
        Files.write(file, reportError.getLaunchTime());
    }
    Files.addText(file, "\n" + reportError.getCode(err) + ": " + err.message + "\n" + err.stack);
};
reportError.stopGame = function () {
    isCorrectWorld = null;
    var err = reportError.stack.pop();
    reportError.stack = [];
    log("Fatal", reportError.getCode(err));
    context.runOnUiThread(function () {
        var builder = new android.app.AlertDialog.Builder(context, android.R.style.Theme_DeviceDefault_Dialog);
        builder.setTitle("Game process stopped");
        builder.setCancelable(false);
        Scene.destroy();
        Window.dismiss();
        var result = [];
        result.push("A fatal error occurred, the gameplay was stopped. You can restart the game process, as well as send us a screenshot with an error. The game was automatically saved, so don\u2019t worry about it.");
        result.push("<hr/>");
        result.push("<font color=\"#CCCC33\"><b>" + err.name + "</b>");
        result.push(err.message);
        result.push(new java.lang.String(err.stack).replaceAll("\n", "<br/>") + "</font>");
        if (isDevelop || isDebug) {
            result.push("Game settings");
            result.push(reportError.getDebugValues());
            result.push("<br/>" + err.fileName);
            result.push(reportError.getErrorLines(err.fileName, err.lineNumber));
        }
        builder.setMessage(android.text.Html.fromHtml(result.join("<br/>")));
        !isDebug && builder.setPositiveButton("OK", null);
        builder.setNeutralButton(reportError.getCode(err), function () {
            reportError.saveError(err);
        });
        if (isDevelop) {
            builder.setNegativeButton("Continue", function () {
                isCorrectWorld = true;
            });
        } else {
            builder.setNegativeButton("Restart", function () {
                NightScene.run(function () {
                    showHint("Game process restored");
                });
            });
        }
        var dialog = builder.create();
        dialog.getWindow().setLayout(Ui.Display.WUDTH / 1.4, Ui.Display.WRAP);
        dialog.show();
    });
};

