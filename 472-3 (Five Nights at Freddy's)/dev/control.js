var __root__ = this;
function getStyledLayout(style) {
    var view = new android.widget.LinearLayout(context);
    switch (style) {
      case "menu":
        view.setBackgroundColor(Ui.Color.parse("#AA484848"));
        break;
      case "popup":
        view.setBackgroundColor(Ui.Color.parse("#AA484848"));
        view.setPadding(20, 20, 20, 20);
        break;
      case "setting":
        view.setBackgroundColor(Ui.Color.parse("#AA464646"));
        view.setPadding(10, 10, 10, 10);
        break;
    }
    return view;
}
function getStyledButton(style) {
    var view = new android.widget.Button(context);
    view.setTextColor(Ui.Color.WHITE);
    view.setTypeface(getTypeface());
    switch (style) {
      case "menu":
        view.setBackgroundColor(Ui.Color.parse("#AA444444"));
        view.setPadding(30, 0, 30, 0);
        view.setTextSize(12);
        break;
      case "transparent":
        view.setBackgroundDrawable(null);
        view.setPadding(30, 0, 30, 0);
        break;
    }
    return view;
}
function getStyledText(style) {
    var view = new android.widget.TextView(context);
    view.setTextColor(Ui.Color.WHITE);
    view.setTypeface(getTypeface());
    switch (style) {
      case "title":
        view.setTextSize(20);
        break;
      case "subtitle":
        view.setGravity(Ui.Gravity.CENTER);
        view.setPadding(0, 0, 0, 10);
        view.setTextSize(18);
        break;
      case "group":
        view.setTextColor(Ui.Color.LTGRAY);
        view.setPadding(10, 10, 10, 10);
        view.setTextSize(10);
        break;
      case "hint":
        view.setGravity(Ui.Gravity.CENTER);
        view.setTextColor(Ui.Color.GREEN);
        view.setPadding(20, 10, 20, 20);
        view.setTextSize(9);
        break;
      case "debug":
        view.setTextColor(Ui.Color.LTGRAY);
        view.setGravity(Ui.Gravity.CENTER);
        view.setPadding(5, 15, 5, 5);
        view.setTextSize(8);
        break;
    }
    return view;
}
function getStyledRadio(style) {
    var view = new android.widget.RadioButton(context);
    view.setTextColor(Ui.Color.WHITE);
    view.setTypeface(getTypeface());
    switch (style) {
      case "setting":
        view.setTextSize(10);
        break;
    }
    return view;
}
function getStyledCheck(style) {
    var view = new android.widget.CheckBox(context);
    view.setTextColor(Ui.Color.WHITE);
    view.setTypeface(getTypeface());
    switch (style) {
      case "setting":
        view.setTextSize(10);
        break;
    }
    return view;
}
function debugAbility(obj, item) {
    try {
        switch (typeof obj[item]) {
          case "number":
            var editText = new android.widget.EditText(context);
            editText.setHint("\u0427\u0438\u0441\u043b\u043e");
            editText.setText("" + obj[item]);
            editText.setTextColor(Ui.Color.BLACK);
            editText.setHintTextColor(Ui.Color.DKGRAY);
            var dialog = new android.app.AlertDialog.Builder(context);
            dialog.setTitle("\u0412\u0432\u043e\u0434 \u0447\u0438\u0441\u043b\u0430 (" + item + ")");
            dialog.setPositiveButton("\u0412\u0432\u043e\u0434", function () {
                try {
                    eval("obj[item] = " + editText.getText());
                }
                catch (e) {
                    reportError(e);
                }
            });
            dialog.setNegativeButton("\u041e\u0442\u043c\u0435\u043d\u0430", null);
            dialog.setCancelable(false);
            dialog.setView(editText);
            dialog.create().show();
            break;
          case "string":
            var editText = new android.widget.EditText(context);
            editText.setHint("\u0421\u0442\u0440\u043e\u043a\u0430");
            editText.setText("\"" + obj[item] + "\"");
            editText.setTextColor(Ui.Color.BLACK);
            editText.setHintTextColor(Ui.Color.DKGRAY);
            var dialog = new android.app.AlertDialog.Builder(context);
            dialog.setTitle("\u0412\u0432\u043e\u0434 \u0441\u0442\u0440\u043e\u043a\u0438 (" + item + ")");
            dialog.setPositiveButton("\u0412\u0432\u043e\u0434", function () {
                try {
                    obj[item] = editText.getText().toString();
                }
                catch (e) {
                    reportError(e);
                }
            });
            dialog.setNegativeButton("\u041e\u0442\u043c\u0435\u043d\u0430", null);
            dialog.setCancelable(false);
            dialog.setView(editText);
            dialog.create().show();
            break;
          case "object":
            var editText = new android.widget.EditText(context);
            editText.setHint("\u041e\u0431\u044a\u0435\u043a\u0442");
            editText.setText(JSON.stringify(obj[item], null, "\t"));
            editText.setTextColor(Ui.Color.BLACK);
            editText.setHintTextColor(Ui.Color.DKGRAY);
            var dialog = new android.app.AlertDialog.Builder(context);
            dialog.setTitle("\u0412\u0432\u043e\u0434 \u043e\u0431\u044a\u0435\u043a\u0442\u0430 (" + item + ")");
            dialog.setPositiveButton("\u0412\u0432\u043e\u0434", function () {
                try {
                    eval("obj[item] = " + editText.getText());
                }
                catch (e) {
                    reportError(e);
                }
            });
            dialog.setNegativeButton("\u041e\u0442\u043c\u0435\u043d\u0430", null);
            dialog.setCancelable(false);
            dialog.setView(editText);
            dialog.create().show();
            break;
          case "function":
            var str = obj[item].toString();
            var arguments = str.slice(str.indexOf("(") + 1, str.indexOf(")"));
            if (arguments.length > 0) {
                var editText = new android.widget.EditText(context);
                editText.setHint("\u0410\u0440\u0433\u0443\u043c\u0435\u043d\u0442\u044b: " + arguments);
                editText.setTextColor(Ui.Color.BLACK);
                editText.setHintTextColor(Ui.Color.DKGRAY);
                var dialog = new android.app.AlertDialog.Builder(context);
                dialog.setTitle("\u0417\u0430\u043f\u0443\u0441\u043a \u0444\u0443\u043d\u043a\u0446\u0438\u0438 (" + item + ")");
                dialog.setPositiveButton("\u0417\u0430\u043f\u0443\u0441\u043a", function () {
                    try {
                        eval("obj[item](" + editText.getText() + ")");
                    }
                    catch (e) {
                        reportError(e);
                    }
                });
                dialog.setNegativeButton("\u041e\u0442\u043c\u0435\u043d\u0430", null);
                dialog.setCancelable(false);
                dialog.setView(editText);
                dialog.create().show();
            } else {
                obj[item]();
            }
            break;
        }
    }
    catch (e) {
        reportError(e);
    }
}
function debugScene(scene) {
    try {
        var dialog = new android.app.AlertDialog.Builder(context);
        dialog.setTitle("\u0421\u0446\u0435\u043d\u0430 (" + scene.id + ")");
        dialog.setItems(["\u0420\u0435\u0437\u0430\u043f\u0443\u0441\u043a", "\u0417\u0430\u0432\u0435\u0440\u0448\u0435\u043d\u0438\u0435", "\u041e\u0436\u0438\u0434\u0430\u043d\u0438\u0435"], function (d, i) {
            try {
                switch (i) {
                  case 0:
                    scene.run();
                    break;
                  case 1:
                    scene.finish();
                    break;
                  case 2:
                    debugAbility(scene, "sleep");
                    break;
                }
            }
            catch (e) {
                reportError(e);
            }
        });
        dialog.setNegativeButton("\u041e\u0442\u043c\u0435\u043d\u0430", null);
        dialog.setCancelable(false);
        dialog.create().show();
    }
    catch (e) {
        reportError(e);
    }
}
var evalHistory = [];
function debugEval(action) {
    try {
        var editText = new android.widget.EditText(context);
        editText.setHint("\u0412\u0430\u0448\u0435 \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0435...");
        editText.setTextColor(Ui.Color.BLACK);
        editText.setHintTextColor(Ui.Color.DKGRAY);
        var dialog = new android.app.AlertDialog.Builder(context);
        dialog.setTitle("\u0412\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u0435 \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u044f");
        dialog.setPositiveButton("\u0417\u0430\u043f\u0443\u0441\u043a", function () {
            try {
                var result = editText.getText().toString(), hasDone = false;
                evalHistory.forEach(function (e, i) {
                    if (e == result) {
                        evalHistory.splice(i, 1);
                        evalHistory.unshift(result);
                        hasDone = true;
                    }
                });
                eval("var returned = " + result);
                if (!hasDone) {
                    evalHistory.unshift(result);
                }
                action && typeof returned != "undefined" && action(returned);
            }
            catch (e) {
                reportError(e);
            }
        });
        dialog.setNegativeButton("\u041e\u0442\u043c\u0435\u043d\u0430", null);
        dialog.setCancelable(false);
        dialog.setView(editText);
        dialog.create().show();
    }
    catch (e) {
        reportError(e);
    }
}
function formatInfo(obj) {
    for (var i = 0; i < obj.length; i++) {
        if (obj[i].startsWith("[Y]")) {
            obj[i] = obj[i].replace("[Y] ", "");
            obj[i] = "<font color='#33CC33'>" + obj[i] + "</font>";
        } else {
            if (obj[i].startsWith("[P]")) {
                obj[i] = obj[i].replace("[P] ", "");
                obj[i] = "<font color='#AACC33'>" + obj[i] + "</font>";
            } else {
                if (obj[i].startsWith("[N]")) {
                    obj[i] = obj[i].replace("[N] ", "");
                    obj[i] = "<font color='#CC3333'>" + obj[i] + "</font>";
                } else {
                    if (obj[i].startsWith("#")) {
                        obj[i] = "<font color='#AAAAAA'><i>" + obj[i] + "</i></font>";
                    } else {
                        if (obj[i] == "" || obj[i].indexOf("=") != 1) {
                            obj.splice(i, 1);
                            i--;
                        }
                    }
                }
            }
        }
    }
    return android.text.Html.fromHtml(obj.join("<br/>"));
}
const LogWindow = new Window({gravity: "right | top", touchable: false, params: "wrap", content: {type: "linear", background: "#99222222", padding: 10, children: {type: "text", id: "container", params: "wrap", font: "minecraft", color: "ltgray", size: 11}}, hooks: {onShow: function (scope) {
    scope.formatLog();
}}});
LogWindow.strokes = 15;
LogWindow.formatLog = function () {
    if (this.handled) {
        return;
    }
    handle(function () {
        var file = new java.io.File(__dir__ + ".idea/logs", launchTime + ".log"), lines = Files.linesCount(file), text = Files.readLines(file, lines - LogWindow.strokes - 1, lines);
        text && LogWindow.findWidgetById("container").setText(text.join("\n"));
        LogWindow.handled = false;
    }, 50);
    this.handled = true;
};
var CurrentMenuWindow = menuType = prevTimers = lastPath = lastRobot = null;
function createMenu(type) {
    context.runOnUiThread(function () {
        try {
            function addCategory(name) {
                var text = getStyledText("group");
                text.setText("" + name);
                layout.addView(text);
            }
            function addHint(name) {
                var text = getStyledText("hint");
                text.setText("" + name);
                layout.addView(text);
            }
            function addAbility(name, obj) {
                addButton(name, function () {
                    debugAbility(obj, name);
                });
            }
            function addMenu(name, count) {
                addButton(name, function () {
                    removeMenu();
                    createMenu(count);
                });
            }
            function addButton(name, click, long) {
                var button = getStyledButton("menu");
                button.setText("" + name);
                click && button.setOnClickListener(function (v) {
                    try {
                        click && click(v);
                    }
                    catch (e) {
                        reportError(e);
                    }
                });
                long && button.setOnLongClickListener(function (v) {
                    try {
                        long && long(v);
                        return true;
                    }
                    catch (e) {
                        reportError(e);
                    }
                    return false;
                });
                layout.addView(button);
                return button;
            }
            var content = getStyledLayout("menu");
            content.setOrientation(Ui.Orientate.VERTICAL);
            var layout = getStyledLayout();
            content.addView(layout);
            var button = getStyledButton("transparent");
            button.setText(type != 0 ? "<" : "x");
            button.setPadding(15, 10, 15, 10);
            button.setTextSize(30);
            button.setOnClickListener(function (viewarg) {
                if (type == 0) {
                    removeMenu();
                    createButton();
                } else {
                    removeMenu();
                    createMenu(0);
                }
            });
            layout.addView(button);
            title = getStyledText("title");
            title.setGravity(Ui.Gravity.CENTER);
            title.setText("\u041a\u043e\u043d\u0441\u043e\u043b\u044c");
            layout.addView(title);
            var scroll = new android.widget.ScrollView(context);
            content.addView(scroll);
            var layout = getStyledLayout();
            layout.setOrientation(Ui.Orientate.VERTICAL);
            scroll.addView(layout);
            if (type == 0) {
                addCategory("\u0421\u043e\u0431\u044b\u0442\u0438\u044f");
                addMenu("\u0421\u0446\u0435\u043d\u044b", 1);
                addMenu("\u0418\u043d\u0442\u0435\u0440\u0444\u0435\u0439\u0441", 5);
                addMenu("\u041e\u0444\u0438\u0441 \u0438 \u043d\u043e\u0447\u044c", 2);
                addCategory("\u0420\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u043a\u0430");
                addMenu("\u0418\u043d\u0442\u0435\u043b\u043b\u0435\u043a\u0442", 4);
                addMenu("\u0421\u0443\u0449\u0435\u0441\u0442\u0432\u0430", 3);
                addMenu("\u041e\u0442\u043b\u0430\u0434\u043a\u0430", 6);
            } else {
                if (type == 1) {
                    addCategory("\u0421\u0446\u0435\u043d\u044b");
                    Scene.instances.forEach(function (scene) {
                        var name = scene.id;
                        for (var i in __root__) {
                            var s = __root__[i];
                            if (s instanceof Scene && s.id == name) {
                                name = i.replace("Scene", "");
                                break;
                            }
                        }
                        addButton(name, function () {
                            scene.isRunned = !scene.isRunned;
                            removeMenu(), createMenu(type);
                        }, function () {
                            debugScene(scene);
                        }).setBackgroundColor(scene.isRunned ? Ui.Color.parse("#8800AA00") : scene.sleep == 0 ? Ui.Color.parse("#88AAAA00") : Ui.Color.parse("#88AA0000"));
                    });
                    addHint("\u041d\u0430\u0436\u043c\u0438 \u0434\u043b\u044f \u043f\u0435\u0440\u0435\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u044f \u0441\u043e\u0441\u0442\u043e\u044f\u043d\u0438\u044f \u0442\u0438\u043a\u0430, \u0443\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u0439 \u0434\u043b\u044f \u0437\u0430\u043f\u0443\u0441\u043a\u0430 \u0438 \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u044f \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u043e\u0432.");
                    addCategory("\u0414\u0435\u0439\u0441\u0442\u0432\u0438\u044f");
                    if (prevTimers) {
                        addButton("\u041f\u0440\u043e\u0434\u043e\u043b\u0436\u0438\u0442\u044c", function () {
                            prevTimers.forEach(function (e) {
                                e.isRunned = true;
                            });
                            prevTimers = null;
                            removeMenu(), createMenu(type);
                        });
                    } else {
                        addButton("\u041f\u0430\u0443\u0437\u0430", function () {
                            prevTimers = [];
                            Scene.instances.forEach(function (scene) {
                                if (scene.isRunned) {
                                    scene.isRunned = false;
                                    prevTimers.push(scene);
                                }
                            });
                            removeMenu(), createMenu(type);
                        });
                    }
                } else {
                    if (type == 2) {
                        addCategory("\u041e\u0444\u0438\u0441");
                        for (var item in Office) {
                            addAbility(item, Office);
                        }
                        addCategory("\u041d\u043e\u0447\u044c");
                        addAbility("gameTime", __root__);
                        addAbility("gameNight", __root__);
                    } else {
                        if (type == 3) {
                            addCategory("\u0410\u043d\u0438\u043c\u0430\u0442\u0440\u043e\u043d\u0438\u043a\u0438");
                            for (var item in Robots) {
                                addAbility(item, Robots);
                            }
                            addCategory("\u041a\u0430\u043c\u0435\u0440\u044b");
                            for (var item in Cameras) {
                                addAbility(item, Cameras);
                            }
                            addCategory("\u0418\u0433\u0440\u043e\u043a");
                            addButton("\u041f\u043e\u0432\u043e\u0440\u043e\u0442", function () {
                                var angle = Entity.getLookAngle(Player.get());
                                for (var i in angle) {
                                    angle[i] = Math.floor(angle[i] * 20) / 20;
                                }
                                showHint("\u0422\u0435\u043a\u0443\u0449\u0438\u0439 \u043f\u043e\u0432\u043e\u0440\u043e\u0442: " + angle.pitch + ", " + angle.yaw);
                                log("Player", "Current angle: " + angle.pitch + ", " + angle.yaw);
                            });
                        } else {
                            if (type == 4) {
                                addCategory("\u0412\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u0435");
                                addButton("\u041e\u0441\u0442\u0430\u043d\u043e\u0432\u0438\u0442\u044c", function () {
                                    Robots.stop();
                                });
                                addButton("\u041f\u0440\u043e\u0434\u043e\u043b\u0436\u0438\u0442\u044c", function () {
                                    Robots.continue();
                                });
                                addButton("\u041e\u0431\u043d\u043e\u0432\u0438\u0442\u044c", function () {
                                    Robots.update();
                                });
                                addHint("\u0412\u043b\u0438\u044f\u0435\u0442 \u043d\u0430 \u0441\u043e\u0441\u0442\u043e\u044f\u043d\u0438\u0435 \u0438\u043d\u0442\u0435\u043b\u043b\u0435\u043a\u0442\u0430.");
                                addCategory("\u0410\u043d\u0438\u043c\u0430\u0442\u0440\u043e\u043d\u0438\u043a");
                                for (var i in Robots.ai) {
                                    var button = addButton(i, function (view) {
                                        lastRobot = view.getText();
                                        lastPath = null;
                                        removeMenu();
                                        createMenu(type);
                                    });
                                    lastRobot == i && button.setBackgroundColor(Ui.Color.parse("#8800AA00"));
                                    Robots.ai[i] == null && button.setBackgroundColor(Ui.Color.parse("#88AA0000"));
                                }
                                if (lastRobot) {
                                    if (Robots.ai[lastRobot] == null) {
                                        Robots.ai[lastRobot] = {pathes: {}};
                                        showHint("\u0410\u043d\u0438\u043c\u0430\u0442\u0440\u043e\u043d\u0438\u043a \u0438\u043d\u0438\u0446\u0438\u0430\u043b\u0438\u0437\u0438\u0440\u043e\u0432\u0430\u043d");
                                        removeMenu();
                                        createMenu(type);
                                    }
                                    addCategory("\u041f\u0443\u0442\u044c");
                                    addButton("\u0418\u0437\u043c\u0435\u043d\u0438\u0442\u044c", function () {
                                        debugAbility(Robots.ai[lastRobot], "pathes");
                                    });
                                    addButton("\u0421\u043e\u0437\u0434\u0430\u0442\u044c", function () {
                                        debugEval(function (r) {
                                            lastPath = r;
                                            Robots.ai[lastRobot].pathes[r] = [];
                                            showHint("\u041f\u0443\u0442\u044c \u0434\u043b\u044f " + lastRobot + " \u0441\u043e\u0437\u0434\u0430\u043d");
                                            removeMenu();
                                            createMenu(type);
                                        });
                                    });
                                    for (var i in Robots.ai[lastRobot].pathes) {
                                        var button = addButton(i, function (view) {
                                            lastPath = view.getText();
                                            removeMenu();
                                            createMenu(type);
                                        });
                                        lastPath == i && button.setBackgroundColor(Ui.Color.parse("#8800AA00"));
                                    }
                                    if (lastPath) {
                                        addCategory("\u0414\u0435\u0439\u0441\u0442\u0432\u0438\u044f");
                                        addButton("\u0418\u0437\u043c\u0435\u043d\u0438\u0442\u044c", function () {
                                            debugAbility(Robots.ai[lastRobot].pathes, lastPath);
                                        });
                                        addButton("\u0417\u0430\u043f\u0443\u0441\u0442\u0438\u0442\u044c", function () {
                                            Robots.goNextPath(lastRobot, lastPath);
                                        });
                                        addButton("\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0442\u043e\u0447\u043a\u0443", function () {
                                            var position = Player.getPosition();
                                            position.y -= 1.5;
                                            for (var i in position) {
                                                position[i] = Math.floor(position[i] * 4) / 4;
                                            }
                                            Robots.ai[lastRobot].pathes[lastPath].push([position.x, position.y, position.z]);
                                            showHint("\u0422\u043e\u0447\u043a\u0430 \u0434\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u0430 \u0432 \u043f\u0443\u0442\u044c " + lastPath + " \u0434\u043b\u044f " + lastRobot);
                                            removeMenu();
                                            createMenu(type);
                                        });
                                        if (Robots.ai[lastRobot].pathes[lastPath].length > 0) {
                                            addButton("\u041e\u0442\u043c\u0435\u043d\u0438\u0442\u044c", function () {
                                                Robots.ai[lastRobot].pathes[lastPath].pop();
                                                showHint("\u0422\u043e\u0447\u043a\u0430 \u0443\u0434\u0430\u043b\u0435\u043d\u0430 \u0438\u0437 \u043f\u0443\u0442\u0438 " + lastPath + " \u0434\u043b\u044f " + lastRobot);
                                                removeMenu();
                                                createMenu(type);
                                            });
                                        }
                                    }
                                }
                            } else {
                                if (type == 5) {
                                    addCategory("\u041e\u043a\u043d\u0430");
                                    Window.instances.forEach(function (window) {
                                        var name = window.id;
                                        for (var i in __root__) {
                                            var w = __root__[i];
                                            if (w instanceof Window && w.id == name) {
                                                name = i.replace("Window", "");
                                                break;
                                            }
                                        }
                                        addButton(name, function () {
                                            !window.window && window.create();
                                            window.show();
                                        }, function () {
                                            window.hide();
                                        }).setBackgroundColor(window.window ? Ui.Color.parse("#0000AA00") : Ui.Color.parse("#88AA0000"));
                                    });
                                    addHint("\u041d\u0430\u0436\u043c\u0438 \u0434\u043b\u044f \u043e\u0442\u043a\u0440\u044b\u0442\u0438\u044f, \u0443\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u0439 \u0434\u043b\u044f \u0437\u0430\u043a\u0440\u044b\u0442\u0438\u044f.");
                                } else {
                                    if (type == 6) {
                                        addCategory("\u041e\u0442\u043b\u0430\u0434\u043a\u0430");
                                        addButton("\u041f\u043b\u0430\u043d\u044b", function () {
                                            var builder = new android.app.AlertDialog.Builder(context, android.R.style.Theme_DeviceDefault_Dialog);
                                            builder.setTitle("\u0417\u0430\u043f\u043b\u0430\u043d\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u043e\u0435");
                                            var file = new java.io.File(__dir__ + ".idea", "planned.txt");
                                            builder.setMessage(formatInfo(Files.read(file, true)));
                                            builder.create().show();
                                        });
                                        addButton("\u0421\u043e\u0431\u044b\u0442\u0438\u044f", function () {
                                            LogWindow.isShowed ? LogWindow.hide() : LogWindow.show();
                                        }, function () {
                                            debugAbility(LogWindow, "strokes");
                                        });
                                        addButton("\u0412\u044b\u043f\u043e\u043b\u043d\u0438\u0442\u044c", function () {
                                            debugEval(function (r) {
                                                showHint("\u0420\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442: " + r);
                                            });
                                        });
                                        var directory = new java.io.File(__dir__ + ".idea/eval"), files = directory.listFiles();
                                        function addAction(name, result) {
                                            var code = (result + "").slice(0, 14);
                                            result.length > 15 && (code += " ...");
                                            addButton(name || code, function () {
                                                var hasDone = false;
                                                evalHistory.forEach(function (e, i) {
                                                    if (e == result) {
                                                        evalHistory.splice(i, 1);
                                                        evalHistory.unshift(result);
                                                        hasDone = true;
                                                    }
                                                });
                                                eval("var returned = " + result);
                                                if (!hasDone) {
                                                    evalHistory.unshift(result);
                                                }
                                                typeof returned != "undefined" && showHint("\u0420\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442: " + returned);
                                            }, name ? function () {
                                                Files.deleteFile(directory + "/" + name);
                                                removeMenu();
                                                createMenu(type);
                                            } : function () {
                                                var editText = new android.widget.EditText(context);
                                                editText.setHint("debug.js");
                                                editText.setTextColor(Ui.Color.BLACK);
                                                editText.setHintTextColor(Ui.Color.DKGRAY);
                                                var dialog = new android.app.AlertDialog.Builder(context);
                                                dialog.setTitle("\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0438\u043c\u044f \u0444\u0430\u0439\u043b\u0430");
                                                dialog.setPositiveButton("\u0412\u0432\u043e\u0434", function () {
                                                    try {
                                                        var name = editText.getText().toString();
                                                        if (name == "" || !name) {
                                                            name = "debug.js";
                                                        }
                                                        var file = new java.io.File(directory, name);
                                                        Files.write(file, result);
                                                        removeMenu();
                                                        createMenu(type);
                                                    }
                                                    catch (e) {
                                                        reportError(e);
                                                    }
                                                });
                                                dialog.setNegativeButton("\u041e\u0442\u043c\u0435\u043d\u0430", null);
                                                dialog.setCancelable(false);
                                                dialog.setView(editText);
                                                dialog.create().show();
                                            });
                                        }
                                        if (directory.exists() && files.length > 0) {
                                            addCategory("\u0421\u043e\u0445\u0440\u0430\u043d\u0435\u043d\u0438\u044f");
                                            for (var i = 0; i < files.length; i++) {
                                                addAction(files[i].getName(), Files.read(files[i]));
                                            }
                                        } else {
                                            directory.mkdirs();
                                        }
                                        if (evalHistory.length > 0) {
                                            addCategory("\u0418\u0441\u0442\u043e\u0440\u0438\u044f");
                                            for (var i = 0; i < evalHistory.length; i++) {
                                                addAction(undefined, evalHistory[i]);
                                            }
                                        }
                                    } else {
                                        addMenu("404", 0);
                                    }
                                }
                            }
                        }
                    }
                }
            }
            debug = getStyledText("debug");
            debug.setText("\u0422\u0435\u043a\u0443\u0449\u0430\u044f \u0432\u0435\u0440\u0441\u0438\u044f: " + __mod__.getInfoProperty("version"));
            layout.addView(debug);
            CurrentMenuWindow = new android.widget.PopupWindow(content, Ui.Display.WIDTH * 0.3, Ui.Display.MATCH);
            CurrentMenuWindow.showAtLocation(context.getWindow().getDecorView(), Ui.Gravity.LEFT | Ui.Gravity.TOP, 0, 0);
            menuType = type;
        }
        catch (e) {
            reportError(e);
        }
    });
}
Callback.addCallback("tick", function () {
    if (menuType == 4 && lastRobot && lastPath && Robots.property[lastRobot] && Robots.ai[lastRobot].pathes[lastPath].length > 0) {
        if (Robots.property[lastRobot].entity && !Robots.ai[lastRobot].data || (Robots.ai[lastRobot].data && Robots.ai[lastRobot].data.data.finished)) {
            var point = Robots.ai[lastRobot].pathes[lastPath][Robots.ai[lastRobot].pathes[lastPath].length - 1];
            Entity.setPosition(Robots.property[lastRobot].entity, point[0], point[1], point[2]);
        }
    }
});
var CurrentButtonWindow = null;
function createButton() {
    context.runOnUiThread(function () {
        try {
            var layout = getStyledLayout("menu");
            layout.setAlpha(0);
            button0 = getStyledButton("menu");
            button0.setOnClickListener(function (viewarg) {
                createMenu(0), removeButton();
            });
            layout.addView(button0);
            CurrentButtonWindow = new android.widget.PopupWindow(layout, Ui.Display.WRAP, Ui.Display.WRAP);
            CurrentButtonWindow.showAtLocation(context.getWindow().getDecorView(), Ui.Gravity.LEFT | Ui.Gravity.TOP, 0, 0);
        }
        catch (e) {
            reportError(e);
        }
    });
}
function removeButton() {
    context.runOnUiThread(function () {
        if (CurrentButtonWindow) {
            CurrentButtonWindow.dismiss();
            CurrentButtonWindow = null;
        }
    });
}
function removeMenu() {
    context.runOnUiThread(function () {
        if (CurrentMenuWindow) {
            CurrentMenuWindow.dismiss();
            CurrentMenuWindow = menuType = null;
        }
    });
}

