var Color = android.graphics.Color;
var Utils = /** @class */ (function () {
    function Utils() {
    }
    Utils.merge = function (arg1, arg2) {
        for (var merge in arg2) {
            arg1[merge] = arg2[merge];
        }
        return arg1;
    };
    Utils.cutText = function (text, count) {
        return (text.trim().length > count) ? text.substring(0, count - 3).trim() + "..." : text.trim();
    };
    return Utils;
}());
var UIHelper = /** @class */ (function () {
    function UIHelper() {
    }
    UIHelper.updateWaypoints = function (action) {
        var offset = Math.floor((UI.getScreenHeight() - 440) / 2);
        var iterationArray = Waypoints.getMap().entrySet().toArray();
        var elements = {};
        var _loop_1 = function (i) {
            var element = iterationArray[i].key;
            var value = Waypoints.get(element);
            elements["waypoint" + element] = {
                type: "button",
                bitmap: "button_borderless_light",
                bitmap2: "button_borderless_lightpressed",
                scale: 14,
                x: 80,
                y: offset + 80,
                clicker: {
                    onClick: function () {
                        switch (action) {
                            case "edit":
                                WaypointsUI.data.currentWaypoint = element;
                                WaypointsUI.data.waypointData = Waypoints.get(WaypointsUI.data.currentWaypoint);
                                WaypointsUI.data.anotherData.oldName = WaypointsUI.data.currentWaypoint;
                                WaypointsUI.UIGroup.close();
                                WaypointsUI.UIGroup.getWindow("mainUI").open();
                                WaypointsUI.UIGroup.getWindow("editUI").open();
                                break;
                            case "remove":
                                WaypointsUI.data.currentWaypoint = element;
                                WaypointsUI.UIGroup.close();
                                WaypointsUI.UIGroup.getWindow("mainUI").open();
                                WaypointsUI.UIGroup.getWindow("removeUI").open();
                                break;
                            case "teleport":
                                WaypointsUI.UIGroup.close();
                                Waypoints.teleport(element);
                                Game.message("You are teleported to ".concat(element, " waypoint"));
                                break;
                        }
                    }
                }
            };
            elements["text" + element] = {
                type: "text",
                x: 500,
                y: offset + 120,
                z: 1,
                text: "".concat(Utils.cutText(String(element), 25)),
                font: {
                    color: Color.GRAY,
                    bold: true,
                    size: 40,
                    alignment: 1
                },
            };
            elements["coords" + element] = {
                type: "text",
                x: 500,
                y: offset + 180,
                z: 1,
                text: "".concat(Utils.cutText(String(Math.round(value.coords.x)), 8), " ").concat(Utils.cutText(String(Math.round(value.coords.y)), 8), " ").concat(Utils.cutText(String(Math.round(value.coords.z)), 8)),
                font: {
                    color: Color.BLACK,
                    size: 35,
                    alignment: 1
                },
            };
            offset += 250;
        };
        for (var i = 0; i < iterationArray.length; i++) {
            _loop_1(i);
        }
        return { elements: elements, offset: offset };
    };
    return UIHelper;
}());
/// <reference path="../utils.ts" />
var Waypoints = /** @class */ (function () {
    function Waypoints() {
    }
    /* CRUD OPERATIONS */
    Waypoints.add = function (name, color) {
        var playerPosition = Player.getPosition();
        if (this.get(name))
            return;
        this.waypointsMap.put(name, {
            color: color,
            dimension: Player.getDimension(),
            coords: {
                x: playerPosition.x || 0,
                y: playerPosition.y || 80,
                z: playerPosition.z || 0
            }
        });
    };
    Waypoints.get = function (name) {
        if (!this.waypointsMap.get(name))
            return;
        return this.waypointsMap.get(name);
    };
    Waypoints.update = function (nname, params) {
        this.waypointsMap.put(nname, params);
    };
    Waypoints.remove = function (name) {
        this.waypointsMap.remove(name);
    };
    Waypoints.getMap = function () {
        return this.waypointsMap;
    };
    Waypoints.setMap = function (scope) {
        for (var key in scope) {
            this.waypointsMap.put(key, scope[key]);
        }
    };
    /* MAIN  */
    Waypoints.teleport = function (name) {
        var waypoint = this.waypointsMap.get(name);
        if (!waypoint)
            return;
        Dimensions.transfer(Player.get(), waypoint.dimension || 0);
        Player.setPosition(waypoint.coords.x, waypoint.coords.y, waypoint.coords.z);
    };
    Waypoints.waypointsMap = new java.util.HashMap();
    return Waypoints;
}());
Saver.addSavesScope("waypointsMap", function read(scope) {
    try {
        if (!scope)
            return;
        Waypoints.setMap(scope);
    }
    catch (e) {
        alert("Read scope error: ".concat(e));
    }
}, function save() {
    try {
        var iterationArray = Waypoints.getMap().entrySet().toArray();
        var obj = {};
        for (var i = 0; i < iterationArray.length; i++) {
            var key = iterationArray[i].key;
            var value = Waypoints.get(key);
            obj[key] = value;
        }
        return obj;
    }
    catch (e) {
        alert("Save scope error: ".concat(e));
        return {};
    }
});
var WaypointsUI = /** @class */ (function () {
    function WaypointsUI() {
    }
    WaypointsUI.nativeGuiChanged = function (screen) {
        var showUIConditions = {
            in_game_play_screen: true
        };
        showUIConditions[screen] ? this.buttonUI.open() : this.buttonUI.close();
    };
    var _a;
    _a = WaypointsUI;
    WaypointsUI.offset = Math.floor((UI.getScreenHeight() - 440) / 2);
    WaypointsUI.action = "menu";
    WaypointsUI.data = {
        currentWaypoint: "Name",
        waypointData: {},
        anotherData: {}
    };
    WaypointsUI.updateWaypoints = (function (mainText) {
        var window = _a.UIGroup.getWindow("waypointsUI");
        var waypoints = UIHelper.updateWaypoints(_a.action);
        window.setContent({
            elements: Utils.merge(waypoints.elements, { waypointsText: { type: "text", x: 490, y: _a.offset - 4, z: 1, text: mainText, font: { color: Color.WHITE, size: 45, alignment: 1 } } }),
            drawing: [{ type: "background", color: Color.argb(0, 0, 0, 0) }],
            location: { x: 298, y: _a.offset + 30, width: 430, height: 380, scrollY: new UI.WindowLocation(window.getContent().location).windowToGlobal(waypoints.offset + 105) }
        });
        _a.UIGroup.close();
        _a.UIGroup.getWindow("mainUI").open();
        window.open();
    });
    WaypointsUI.buttonUI = (function () {
        var location = { x: 0, y: 100, width: 64, height: 64 };
        var drawing = [{ type: "background", color: Color.argb(0, 0, 0, 0) }];
        var elements = {
            textOnButton: { type: "text", x: 210, y: 155, z: 1, text: "W", font: { color: Color.WHITE, size: 600, shadow: 0.1 } },
            openButton: { type: "button", bitmap: "default_button_up", bitmap2: "default_button_down", scale: 50, x: 0, y: 100, clicker: {
                    onClick: function () {
                        _a.UIGroup.getWindow("mainUI").open();
                        _a.UIGroup.getWindow("mainUIButtons").open();
                    }
                } }
        };
        var window = new UI.Window({
            location: location,
            drawing: drawing,
            elements: elements
        });
        window.setAsGameOverlay(true);
        return window;
    })();
    WaypointsUI.mainUI = (function () {
        var location = { x: 0, y: 0, width: 1000, height: UI.getScreenHeight() };
        var drawing = [{ type: "background", color: Color.argb(0, 0, 0, 0) }, {
                type: "frame",
                x: 255,
                y: _a.offset + 20,
                width: 450,
                height: 400,
                bitmap: "classic_frame_bg_dark",
                scale: 1.3,
                color: Color.argb(70, 0, 0, 0)
            }
        ];
        var elements = {
            closeButton: { type: "closeButton", bitmap: "classic_close_button", bitmap2: "classic_close_button_down", scale: 4, x: 702, y: _a.offset - 12 }
        };
        var window = new UI.Window({
            location: location,
            drawing: drawing,
            elements: elements
        });
        window.setCloseOnBackPressed(true);
        return window;
    })();
    WaypointsUI.mainUIButtons = (function () {
        var location = { x: 298, y: _a.offset + 30, width: 430, height: 380, scrollY: 480 };
        var drawing = [{ type: "background", color: Color.argb(0, 0, 0, 0) }];
        var elements = {
            addButton: { type: "button", bitmap: "button_borderless_light", bitmap2: "button_borderless_lightpressed", scale: 14, x: 80, y: _a.offset + 80, clicker: {
                    onClick: function () {
                        _a.action = "create";
                        WaypointsUI.UIGroup.close();
                        WaypointsUI.UIGroup.getWindow("mainUI").open();
                        WaypointsUI.UIGroup.getWindow("createUI").open();
                    }
                } },
            editButton: { type: "button", bitmap: "button_borderless_light", bitmap2: "button_borderless_lightpressed", scale: 14, x: 80, y: _a.offset + 340, clicker: {
                    onClick: function () {
                        _a.action = "edit";
                        _a.updateWaypoints("Edit");
                    }
                } },
            removeButton: { type: "button", bitmap: "button_borderless_light", bitmap2: "button_borderless_lightpressed", scale: 14, x: 80, y: _a.offset + 600, clicker: {
                    onClick: function () {
                        _a.action = "remove";
                        _a.updateWaypoints("Remove");
                    }
                } },
            waypointsButton: { type: "button", bitmap: "button_borderless_light", bitmap2: "button_borderless_lightpressed", scale: 14, x: 80, y: _a.offset + 860, clicker: {
                    onClick: function () {
                        _a.action = "teleport";
                        _a.updateWaypoints("Teleport");
                    }
                } },
            addText: { type: "text", x: 435, y: _a.offset + 140, z: 1, text: "Add", font: { color: Color.GRAY, size: 65 } },
            editText: { type: "text", x: 438, y: _a.offset + 400, z: 1, text: "Edit", font: { color: Color.GRAY, size: 65 } },
            removeText: { type: "text", x: 360, y: _a.offset + 660, z: 1, text: "Remove", font: { color: Color.GRAY, size: 65 } },
            waypointsText: { type: "text", x: 320, y: _a.offset + 920, z: 1, text: "Waypoints", font: { color: Color.GRAY, size: 65 } },
            mainText: { type: "text", x: 188, y: _a.offset, z: 1, text: "Waypoints: Rebedrocked", font: { color: Color.WHITE, size: 45 } },
        };
        var window = new UI.Window({
            location: location,
            drawing: drawing,
            elements: elements
        });
        window.setCloseOnBackPressed(true);
        return window;
    })();
    WaypointsUI.createUI = (function () {
        var location = { x: 298, y: _a.offset + 30, width: 430, height: 380 };
        var drawing = [{ type: "background", color: Color.argb(0, 0, 0, 0) }];
        var elements = {
            nameInputButton: { type: "button", bitmap: "text_label_box", scale: 14, x: 80, y: _a.offset + 80, clicker: {
                    onClick: function () {
                        var Context = UI.getContext();
                        var text = new android.widget.EditText(Context);
                        text.setHint("Name");
                        new android.app.AlertDialog.Builder(Context)
                            .setTitle("Please, enter a waypoint name")
                            .setView(text)
                            .setPositiveButton("Sumbit", new android.content.DialogInterface.OnClickListener({
                            onClick: function () {
                                var elements = _a.createUI.getElements();
                                _a.data.currentWaypoint = text.getText() + "";
                                elements.get("nameInputText").setBinding("text", _a.data.currentWaypoint.length ? Utils.cutText(_a.data.currentWaypoint, 15) : "Name");
                            }
                        })).show();
                    }
                } },
            addButton: { type: "button", bitmap: "button_borderless_light", bitmap2: "button_borderless_lightpressed", scale: 14, x: 80, y: _a.offset + 340, clicker: {
                    onClick: function () {
                        if (_a.data.currentWaypoint === "Name" || _a.data.currentWaypoint.trim().length <= 0)
                            return alert("Please, enter a waypoint name");
                        if (Waypoints.get(_a.data.currentWaypoint))
                            return alert("Please, enter another waypoint name or edit waypoint with this name");
                        Waypoints.add(_a.data.currentWaypoint, "");
                        var waypoint = Waypoints.get(_a.data.currentWaypoint);
                        Game.message("Waypoint ".concat(_a.data.currentWaypoint, " created.\n\nPostion: ").concat(Math.round(waypoint.coords.x), ", ").concat(Math.round(waypoint.coords.y), ", ").concat(Math.round(waypoint.coords.z)));
                        _a.UIGroup.close();
                    }
                } },
            cancelButton: { type: "button", bitmap: "button_borderless_light", bitmap2: "button_borderless_lightpressed", scale: 14, x: 80, y: _a.offset + 600, clicker: {
                    onClick: function () {
                        _a.UIGroup.close();
                        _a.UIGroup.getWindow("mainUI").open();
                        _a.UIGroup.getWindow("mainUIButtons").open();
                    }
                } },
            nameInputText: { type: "text", x: +155, y: _a.offset + 150, z: 1, text: "Name", font: { color: Color.LTGRAY, size: 60 } },
            addText: { type: "text", x: +500, y: _a.offset + 380, z: 1, text: "Sumbit", font: { color: Color.GRAY, size: 60, alignment: 1 } },
            cancelText: { type: "text", x: +508, y: _a.offset + 630, z: 1, text: "Chancel", font: { color: Color.GRAY, size: 60, alignment: 1 } },
            mainText: { type: "text", x: 490, y: _a.offset - 10, z: 1, text: "Add new Waypoint", font: { color: Color.WHITE, size: 45, alignment: 1 } },
        };
        var window = new UI.Window({
            location: location,
            drawing: drawing,
            elements: elements
        });
        window.setCloseOnBackPressed(true);
        return window;
    })();
    WaypointsUI.editUI = (function () {
        var location = { x: 298, y: _a.offset + 30, width: 430, height: 380, scrollY: 465 };
        var drawing = [{ type: "background", color: Color.argb(0, 0, 0, 0) }];
        var elements = {
            nameInputButton: { type: "button", bitmap: "text_label_box", scale: 14, x: 80, y: _a.offset + 80, clicker: {
                    onClick: function () {
                        var Context = UI.getContext();
                        var text = new android.widget.EditText(Context);
                        text.setHint("Name");
                        new android.app.AlertDialog.Builder(Context)
                            .setTitle("Please, enter a waypoint name")
                            .setView(text)
                            .setPositiveButton("Sumbit", new android.content.DialogInterface.OnClickListener({
                            onClick: function () {
                                var elements = _a.createUI.getElements();
                                _a.data.currentWaypoint = text.getText() + "";
                                elements.get("nameInputText").setBinding("text", _a.data.currentWaypoint.length ? Utils.cutText(_a.data.currentWaypoint, 15) : "Name");
                            }
                        })).show();
                    }
                } },
            updateCoordsButton: { type: "button", bitmap: "button_borderless_light", bitmap2: "button_borderless_lightpressed", scale: 14, x: 80, y: _a.offset + 330, clicker: {
                    onClick: function () {
                        var playerPosition = Player.getPosition();
                        _a.data.waypointData.coords.x = playerPosition.x;
                        _a.data.waypointData.coords.y = playerPosition.y;
                        _a.data.waypointData.coords.z = playerPosition.z;
                        alert("Position updated to current");
                    }
                } },
            editButton: { type: "button", bitmap: "button_borderless_light", bitmap2: "button_borderless_lightpressed", scale: 14, x: 80, y: _a.offset + 580, clicker: {
                    onClick: function () {
                        var merge = Utils.merge(Waypoints.get(_a.data.anotherData.oldName), _a.data.waypointData);
                        Waypoints.update(_a.data.currentWaypoint, merge);
                        Game.message("Waypoint ".concat(_a.data.anotherData.oldName, " | ").concat(_a.data.currentWaypoint, " edited."));
                        _a.UIGroup.close();
                    }
                } },
            cancelButton: { type: "button", bitmap: "button_borderless_light", bitmap2: "button_borderless_lightpressed", scale: 14, x: 80, y: _a.offset + 830, clicker: {
                    onClick: function () {
                        _a.UIGroup.close();
                        _a.UIGroup.getWindow("mainUI").open();
                        _a.UIGroup.getWindow("mainUIButtons").open();
                    }
                } },
            nameInputText: { type: "text", x: +155, y: _a.offset + 150, z: 1, text: _a.data.currentWaypoint, font: { color: Color.LTGRAY, size: 60 } },
            updateCoordtext: { type: "text", x: +500, y: _a.offset + 360, z: 1, text: "Update coordinates", font: { color: Color.GRAY, size: 60, alignment: 1 } },
            editText: { type: "text", x: +502, y: _a.offset + 605, z: 1, text: "Sumbit changes", font: { color: Color.GRAY, size: 60, alignment: 1 } },
            cancelText: { type: "text", x: +508, y: _a.offset + 870, z: 1, text: "Chancel", font: { color: Color.GRAY, size: 60, alignment: 1 } },
            mainText: { type: "text", x: 480, y: _a.offset - 10, z: 1, text: "Edit Waypoint", font: { color: Color.WHITE, size: 45, alignment: 1 } },
        };
        var window = new UI.Window({
            location: location,
            drawing: drawing,
            elements: elements
        });
        window.setCloseOnBackPressed(true);
        return window;
    })();
    WaypointsUI.removeUI = (function () {
        var location = { x: 298, y: _a.offset + 30, width: 430, height: 380 };
        var drawing = [{ type: "background", color: Color.argb(0, 0, 0, 0) }];
        var elements = {
            consentButton: { type: "button", bitmap: "button_borderless_light", bitmap2: "button_borderless_lightpressed", scale: 14, x: 80, y: _a.offset + 200, clicker: {
                    onClick: function () {
                        Waypoints.remove(_a.data.currentWaypoint);
                        _a.UIGroup.close();
                        Game.message("Waypoint \"".concat(_a.data.currentWaypoint, "\" has been removed"));
                    }
                } },
            rejectButton: { type: "button", bitmap: "button_borderless_light", bitmap2: "button_borderless_lightpressed", scale: 14, x: 80, y: _a.offset + 460, clicker: {
                    onClick: function () {
                        _a.UIGroup.close();
                        _a.UIGroup.getWindow("mainUI").open();
                        _a.UIGroup.getWindow("mainUIButtons").open();
                    }
                } },
            consentText: { type: "text", x: 510, y: _a.offset + 230, z: 1, text: "Yes", font: { color: Color.RED, size: 65, alignment: 1 } },
            rejectText: { type: "text", x: 515, y: _a.offset + 490, z: 1, text: "No", font: { color: Color.rgb(50, 205, 50), size: 65, alignment: 1 } },
            mainText: { type: "text", x: 490, y: _a.offset, z: 1, text: "Are you sure?", font: { color: Color.WHITE, size: 45, alignment: 1 } },
        };
        var window = new UI.Window({
            location: location,
            drawing: drawing,
            elements: elements
        });
        window.setCloseOnBackPressed(true);
        return window;
    })();
    WaypointsUI.waypointsUI = (function () {
        var location = { x: 298, y: _a.offset + 30, width: 430, height: 380, scrollY: 0 };
        var drawing = [{ type: "background", color: Color.argb(0, 0, 0, 0) }];
        var elements = {};
        var window = new UI.Window({
            location: location,
            drawing: drawing,
            elements: elements
        });
        window.setCloseOnBackPressed(true);
        return window;
    })();
    WaypointsUI.UIGroup = (function () {
        var UIGroup = new UI.WindowGroup();
        UIGroup.addWindowInstance("mainUI", _a.mainUI);
        UIGroup.addWindowInstance("mainUIButtons", _a.mainUIButtons);
        UIGroup.addWindowInstance("createUI", _a.createUI);
        UIGroup.addWindowInstance("editUI", _a.editUI);
        UIGroup.addWindowInstance("removeUI", _a.removeUI);
        UIGroup.addWindowInstance("waypointsUI", _a.waypointsUI);
        return UIGroup;
    })();
    return WaypointsUI;
}());
Callback.addCallback("NativeGuiChanged", function (screen) {
    WaypointsUI.nativeGuiChanged(screen);
});
