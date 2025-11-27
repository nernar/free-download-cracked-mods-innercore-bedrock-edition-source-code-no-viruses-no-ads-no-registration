LIBRARY({name: "Retention", version: 4, shared: false, api: "AdaptedScript"});
let launchTime = Date.now();
EXPORT("launchTime", launchTime);
let context = UI.getContext();
EXPORT("context", context);
let version = MCSystem.getInnerCoreVersion();
let code = parseInt(version.toString()[0]);
let isHorizon = code >= 2;
EXPORT("isHorizon", isHorizon);
let tryout = function (action, report, basic) {
    try {
        if (typeof action == "function") {
            return action.call(this);
        }
    }
    catch (e) {
        if (typeof report == "function") {
            let result = report.call(this, e);
            if (result !== undefined) {
                return result;
            }
        } else {
            reportError(e);
            if (typeof report !== "undefined") {
                return report;
            }
        }
    }
    return basic;
};
EXPORT("tryout", tryout);
let handle = function (action, time) {
    context.runOnUiThread(function () {
        new android.os.Handler().postDelayed(function () {
            if (action !== undefined) {
                tryout(action);
            }
        }, time >= 0 ? time : 0);
    });
};
EXPORT("handle", handle);
let handleThread = function (action, priority) {
    let thread = new java.lang.Thread(function () {
        if (action !== undefined) {
            tryout(action);
        }
        let index = handleThread.stack.indexOf(thread);
        if (index != -1) {
            handleThread.stack.splice(index, 1);
        }
    });
    handleThread.stack.push(thread);
    if (priority !== undefined) {
        thread.setPriority(priority);
    }
    return (thread.start(), thread);
};
handleThread.MIN_PRIORITY = java.lang.Thread.MIN_PRIORITY;
handleThread.NORM_PRIORITY = java.lang.Thread.NORM_PRIORITY;
handleThread.MAX_PRIORITY = java.lang.Thread.MAX_PRIORITY;
handleThread.stack = new Array();
handleThread.interruptAll = function () {
    handleThread.stack.forEach(function (thread) {
        if (thread && !thread.isInterrupted()) {
            thread.interrupt();
        }
    });
    handleThread.stack = new Array();
};
EXPORT("handleThread", handleThread);
let random = function (min, max) {
    max == undefined && (max = min - 1, min = 0);
    return Math.floor(Math.random() * (max - min + 1) + min);
};
EXPORT("random", random);
let getTime = function () {
    return Date.now() - launchTime;
};
EXPORT("getTime", getTime);
let translate = function (str, args) {
    return tryout(function () {
        str = Translation.translate(str);
        if (args !== undefined) {
            if (!Array.isArray(args)) {
                args = [args];
            }
            args = args.map(function (value) {
                return String(value);
            });
            str = java.lang.String.format(str, args);
        }
        return String(str);
    }, String(str));
};
translate.isVerb = function (count) {
    if (count < 0) {
        count = Math.abs(count);
    }
    return count % 10 == 1 && count % 100 != 11;
};
translate.isMany = function (count) {
    if (count < 0) {
        count = Math.abs(count);
    }
    return count % 10 == 0 || count % 10 >= 5 || count % 100 - count % 10 == 10;
};
translate.asCounter = function (count, empty, verb, little, many, args) {
    return tryout(function () {
        if (args !== undefined) {
            if (!Array.isArray(args)) {
                args = [args];
            }
        } else {
            args = [count];
        }
        let much = translate.isMany(count);
        if (count != 0 && !much) {
            let stroke = String(count);
            stroke = stroke.substring(0, stroke.length - 2);
            args = args.map(function (value) {
                if (value == count) {
                    return stroke;
                }
                return value;
            });
        }
        return translate(count == 0 ? empty : translate.isVerb(count) ? verb : much ? many : little, args);
    }, translate(empty, args));
};
EXPORT("translate", translate);
EXPORT("translateCounter", translate.asCounter);
let Interface = {Display: {FILL: android.view.ViewGroup.LayoutParams.FILL_PARENT, MATCH: android.view.ViewGroup.LayoutParams.MATCH_PARENT, WRAP: android.view.ViewGroup.LayoutParams.WRAP_CONTENT}, Orientate: {HORIZONTAL: android.widget.LinearLayout.HORIZONTAL, VERTICAL: android.widget.LinearLayout.VERTICAL}, Scale: {CENTER: android.widget.ImageView.ScaleType.CENTER, CENTER_CROP: android.widget.ImageView.ScaleType.CENTER_CROP, CENTER_INSIDE: android.widget.ImageView.ScaleType.CENTER_INSIDE, FIT_CENTER: android.widget.ImageView.ScaleType.FIT_CENTER, FIT_END: android.widget.ImageView.ScaleType.FIT_END, FIT_START: android.widget.ImageView.ScaleType.FIT_START, FIT_XY: android.widget.ImageView.ScaleType.FIT_XY, MATRIX: android.widget.ImageView.ScaleType.MATRIX}, Gravity: {BOTTOM: android.view.Gravity.BOTTOM, CENTER: android.view.Gravity.CENTER, FILL: android.view.Gravity.FILL, RIGHT: android.view.Gravity.RIGHT, LEFT: android.view.Gravity.LEFT, TOP: android.view.Gravity.TOP, NONE: android.view.Gravity.NO_GRAVITY}, Color: {BLACK: android.graphics.Color.BLACK, WHITE: android.graphics.Color.WHITE, RED: android.graphics.Color.RED, GREEN: android.graphics.Color.GREEN, BLUE: android.graphics.Color.BLUE, YELLOW: android.graphics.Color.YELLOW, CYAN: android.graphics.Color.CYAN, MAGENTA: android.graphics.Color.MAGENTA, GRAY: android.graphics.Color.GRAY, LTGRAY: android.graphics.Color.LTGRAY, DKGRAY: android.graphics.Color.DKGRAY, TRANSPARENT: android.graphics.Color.TRANSPARENT}, Direction: {INHERIT: android.view.View.LAYOUT_DIRECTION_INHERIT, LOCALE: android.view.View.LAYOUT_DIRECTION_LOCALE, LTR: android.view.View.LAYOUT_DIRECTION_LTR, RTL: android.view.View.LAYOUT_DIRECTION_RTL}, Visibility: {VISIBLE: android.view.View.VISIBLE, INVISIBLE: android.view.View.INVISIBLE, GONE: android.view.View.GONE}, Choice: {NONE: android.widget.ListView.CHOICE_MODE_NONE, SINGLE: android.widget.ListView.CHOICE_MODE_SINGLE, MULTIPLE: android.widget.ListView.CHOICE_MODE_MULTIPLE, MODAL: android.widget.ListView.CHOICE_MODE_MULTIPLE_MODAL}, TileMode: {CLAMP: android.graphics.Shader.TileMode.CLAMP, REPEAT: android.graphics.Shader.TileMode.REPEAT, MIRROR: android.graphics.Shader.TileMode.MIRROR}};
Interface.Gravity.parse = function (str) {
    for (let item in this) {
        if (typeof this[item] == "number") {
            eval(item + " = this[i]");
        }
    }
    return eval(str.toUpperCase());
};
Interface.Color.parse = function (str) {
    return android.graphics.Color.parseColor(str);
};
Interface.updateDisplay = function () {
    let display = context.getWindowManager().getDefaultDisplay();
    this.Display.WIDTH = display.getWidth();
    this.Display.HEIGHT = display.getHeight();
    let metrics = context.getResources().getDisplayMetrics();
    this.Display.DENSITY = metrics.density;
};
Interface.updateDisplay();
Interface.getFontSize = function (size) {
    return Math.round(this.getX(size) / this.Display.DENSITY);
};
Interface.getFontMargin = function () {
    return this.getY(7);
};
Interface.getX = function (x) {
    return x > 0 ? Math.round(this.Display.WIDTH / 1000 * x) : x;
};
Interface.getY = function (y) {
    return y > 0 ? Math.round(this.Display.HEIGHT / 1000 * y) : y;
};
Interface.getDecorView = function () {
    return context.getWindow().getDecorView();
};
Interface.getEmptyDrawable = function () {
    return new android.graphics.drawable.ColorDrawable();
};
Interface.setActorName = function (view, name) {
    android.support.v4.view.ViewCompat.setTransitionName(view, String(name));
};
Interface.vibrate = function (time) {
    let service = android.content.Context.VIBRATOR_SERVICE;
    context.getSystemService(service).vibrate(time);
};
Interface.getViewRect = function (view) {
    let rect = new android.graphics.Rect();
    view.getGlobalVisibleRect(rect);
    return rect || null;
};
Interface.getLayoutParams = function (width, height, direction, margins) {
    width = this.getX(width), height = this.getY(height);
    let params = android.view.ViewGroup.LayoutParams(width, height != null ? height : width);
    margins && params.setMargins(this.getX(margins[0]), this.getY(margins[1]), this.getX(margins[2]), this.getY(margins[3]));
    direction && params.setLayoutDirection(direction);
    return params;
};
Interface.makeViewId = function () {
    return android.view.View.generateViewId();
};
Interface.sleepMilliseconds = function (ms) {
    java.util.concurrent.TimeUnit.MILLISECONDS.sleep(ms);
};
Interface.getInnerCoreVersion = function () {
    return {name: version, code: code};
};
EXPORT("Interface", Interface);
let Hashable = new Object();
Hashable.toMD5 = function (bytes) {
    let digest = java.security.MessageDigest.getInstance("md5");
    digest.update(bytes);
    let byted = digest.digest(), sb = new java.lang.StringBuilder();
    for (let i = 0; i < byted.length; i++) {
        sb.append(java.lang.Integer.toHexString(255 & byted[i]));
    }
    return sb.toString();
};
EXPORT("Hashable", Hashable);
let reportError = function (err) {
    if (typeof err != "object" || err === null) {
        return;
    }
    err.date = Date.now();
    if (reportError.isReporting) {
        if (reportError.stack.length < 16) {
            reportError.stack.push(err);
        }
        return;
    } else {
        reportError.isReporting = true;
    }
    context.runOnUiThread(function () {
        let builder = new android.app.AlertDialog.Builder(context, android.R.style.Theme_DeviceDefault_DialogWhenLarge);
        builder.setTitle(reportError.title || translate("Oh nose everything broke"));
        builder.setCancelable(false);
        reportError.__report && reportError.__report(err);
        let result = new Array(), message = reportError.message;
        message && result.push(message + "<br/>");
        result.push("<font color=\"#CCCC33\"><b>" + err.name + "</b>");
        result.push(err.stack ? err.message : err.message + "</font>");
        err.stack && result.push(new java.lang.String(err.stack).replaceAll("\n", "<br/>") + "</font>");
        let values = reportError.getDebugValues();
        if (values != null) {
            result.push(translate("Development debug values"));
            result.push(values + "<br/>");
        }
        if (err.fileName && typeof err.lineNumber != "undefined") {
            let source = reportError.getErrorLines(err.fileName, err.lineNumber);
            source != null && result.push(err.fileName + "<br/>" + source);
        }
        builder.setMessage(android.text.Html.fromHtml(result.join("<br/>")));
        builder.setPositiveButton(translate("Understand"), null);
        builder.setNeutralButton(translate("Leave"), function () {
            reportError.stack = new Array();
        });
        builder.setNegativeButton(reportError.getCode(err), function () {
            reportError.__stack && reportError.__stack(err);
        });
        let dialog = builder.create();
        dialog.getWindow().setLayout(Interface.Display.WIDTH / 1.5, Interface.Display.HEIGHT / 1.2);
        dialog.setOnDismissListener(function () {
            reportError.isReporting = false;
            if (reportError.stack.length > 0) {
                reportError(reportError.stack.shift());
            }
        });
        dialog.show();
    });
};
reportError.setTitle = function (title) {
    title && (this.title = title);
};
reportError.setInfoMessage = function (html) {
    html && (this.message = html);
};
reportError.setStackAction = function (action) {
    this.__stack = function (err) {
        tryout(function () {
            action && action(err);
        });
    };
};
reportError.setReportAction = function (action) {
    this.__report = function (err) {
        tryout(function () {
            action && action(err);
        });
    };
};
reportError.readLines = function (file, start, end) {
    if (!file.exists()) {
        return null;
    }
    let scanner = new java.io.FileReader(file), reader = java.io.BufferedReader(scanner), result = new Array(), count = -1, line;
    while (count <= end && (line = reader.readLine())) {
        if (count >= start) {
            result.push(line);
        }
        count++;
    }
    return result.length > 0 ? result : null;
};
reportError.stack = new Array();
reportError.getErrorLines = function (file, number) {
    if (file.indexOf("$") != -1) {
        file = file.split("$")[1];
    }
    let source = new java.io.File(__dir__ + file), result = new Array(), lines = this.readLines(source, number - 5, number + 2);
    if (lines && lines.length > 0) {
        let isErrorLines = false;
        for (let i = 0; i < lines.length; i++) {
            let prefix = "<small>" + (number + i - 3) + "</small> ";
            if (i == 4) {
                isErrorLines = true;
            } else {
                if (isErrorLines && lines[i].indexOf("}") != -1) {
                    isErrorLines = false;
                }
            }
            result.push(!isErrorLines ? prefix + "<font face=\"monospace\">" + lines[i] + "</font>" : prefix + "<font face=\"monospace\" color=\"#DD3333\">" + lines[i] + "</font>");
        }
    } else {
        return null;
    }
    return result.join("<br/>");
};
reportError.values = new Array();
reportError.addDebugValue = function (name, value) {
    this.values.push({name: name, value: value});
};
reportError.getDebugValues = function () {
    let result = new Array();
    for (let index = 0; index < this.values.length; index++) {
        let value = this.values[index];
        result.push(value.name + " = " + value.value + ";");
    }
    return result.length > 0 ? "<font face=\"monospace\">" + result.join("<br/>") + "</font>" : null;
};
reportError.getStack = function (err) {
    return err.message + "\n" + err.stack;
};
reportError.getCode = function (err) {
    let encoded = java.lang.String(this.getStack(err)), counter = Hashable.toMD5(encoded.getBytes());
    return "NE-" + Math.round(Math.abs(counter.hashCode() / 10000));
};
reportError.getLaunchTime = function () {
    return new Date(launchTime).toString();
};
EXPORT("reportError", reportError);
Translation.addTranslation("Oh nose everything broke", {ru: "\u041e \u043d\u0435\u0442, \u0432\u0441\u0435 \u0441\u043b\u043e\u043c\u0430\u043b\u043e\u0441\u044c"});
Translation.addTranslation("Development debug values", {ru: "\u041e\u0442\u043b\u0430\u0434\u043e\u0447\u043d\u044b\u0435 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044f \u0440\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u0447\u0438\u043a\u0430"});
Translation.addTranslation("Understand", {ru: "\u041f\u043e\u043d\u044f\u0442\u043d\u043e"});
Translation.addTranslation("Leave", {ru: "\u0412\u044b\u0445\u043e\u0434"});

