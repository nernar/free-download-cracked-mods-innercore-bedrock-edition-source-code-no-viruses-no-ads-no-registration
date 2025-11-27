var handCanShowGui = __config__.access("hand_can_show_gui");
var alertDebugValues = __config__.access("alert_debug_values");
var Waypoint = {waypoints: {}, container: new UI.Container(), UIWindow: new UI.Window({location: {x: 520, y: 0, width: 40, height: 40}, drawing: [{type: "background", color: 0}], elements: {"init": {type: "button", x: 0, y: 0, bitmap: "init", bitmap2: "init1", scale: 63, clicker: {onClick: function (container, tileEntity, position, window, canvas, scale) {
    Waypoint.container.openAs(guiWaypoints);
}}}}}), reset: function () {
    this.waypoints = {};
    this.container = new UI.Container();
}, exist: function (name) {
    if (this.waypoints[name]) {
        return this.waypoints[name];
    } else {
        return false;
    }
}, add: function (name, coord) {
    this.waypoints[name] = coord;
    if (alertDebugValues) {
        alert("Waypoint created: " + name);
    }
}, del: function (name) {
    if (this.waypoints[name]) {
        this.waypoints[name] = null;
        if (alertDebugValues) {
            alert("Waypoint deleted: " + name);
        }
    } else {
        if (alertDebugValues) {
            alert("Waypoint is not defined: " + name);
        }
    }
}, teleport: function (name) {
    for (var i in this.waypoints) {
        if (name == i) {
            var point = this.waypoints[i];
            Player.setPosition(point.x, point.y, point.z);
            if (alertDebugValues) {
                alert("You are teleported to " + name);
                alert("x: " + point.x + " ,y: " + point.y + " ,z: " + point.z);
            }
            break;
        }
    }
}, alertAll: function () {
    for (var i in this.waypoints) {
        var point = this.waypoints[i];
        if (point) {
            alert("Name: " + i + " ,x: " + point.x + " ,y: " + point.y + " ,z: " + point.z);
        }
    }
}};
Saver.addSavesScope("WayPoints", function read(data) {
    if (!data.points || !data.UII) {
        Waypoint.reset();
        if (alertDebugValues) {
            alert("Waypoints: RESET");
        }
    } else {
        Waypoint.waypoints = data.points;
        Waypoint.container = data.UII;
        if (alertDebugValues) {
            alert("Waypoints: data readed");
        }
    }
}, function save() {
    return {points: Waypoint.waypoints, UII: Waypoint.container};
    if (alertDebugValues) {
        alert("Waypoints: data saved");
    }
});

