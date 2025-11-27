var AlertDialog = android.app.AlertDialog;
var DialogInterface = android.content.DialogInterface;
var ScrollView = android.widget.ScrollView;
var LinearLayout = android.widget.LinearLayout;
var Button = android.widget.Button;
var OnClickListener = android.view.View.OnClickListener;
var File = java.io.File;
var activity = UI.getContext();
var ModData = {positions: [], containerUI: new UI.Container(), windowUI: new UI.Window({location: {x: 960, y: 100, width: 40, height: 40}, drawing: [{type: "background", color: 0}], elements: {"open": {type: "button", x: 0, y: 0, bitmap: "start_1", bitmap2: "start_2", scale: 55, clicker: {onClick: function (container, tileEntity, position, window, canvas, scale) {
    ModData.containerUI.openAs(waypointGUI);
}}}}}), input: function (con, pos) {
    this.container = con;
    this.positions = pos;
    alert("Waypoints was readed");
}, reset: function () {
    this.positions = [];
    this.container = new UI.Container();
}, get: function (index) {
    return this.positions[index];
}, add: function (name, pos) {
    this.positions[this.positions.length] = {id: name, coords: pos};
    alert(name + " was created");
}, remove: function (index) {
    let prim = [];
    for (var i in this.positions) {
        if (i != index) {
            prim.push(this.positions[i]);
        }
    }
    this.positions = prim;
    alert("Waypoint was removed");
}, tp: function (index) {
    var point = this.positions[index];
    Player.setPosition(point.coords.x, point.coords.y, point.coords.z);
    alert("You are teleported to: " + point.id);
    alert("x: " + point.coords.x + " ,y: " + point.coords.y + " ,z: " + point.coords.z);
}};
Saver.addSavesScope("WayPoints", function read(data) {
    if (!data.containerUI || !data.positions) {
        ModData.reset();
        alert("WayPoints was reseted");
    } else {
        alert("Waypoints sending...");
        ModData.input(data.containerUI, data.positions);
    }
}, function save() {
    return {containerUI: ModData.containerUI, positions: ModData.positions};
    alert("Waypoints was saved");
});
const AddNewWaypoint = function () {
    var coords = Player.getPosition();
    coords.x = Math.floor(coords.x);
    coords.y = Math.floor(coords.y + 1);
    coords.z = Math.floor(coords.z);
    var alert = new AlertDialog.Builder(activity);
    alert.setTitle("Creating new waypoint");
    userInput = new android.widget.EditText(activity);
    userInput.setText(coords.x + "," + coords.y + "," + coords.z);
    alert.setView(userInput);
    alert.setPositiveButton("Save", new DialogInterface.OnClickListener() {onClick: function () {
        ModData.add(userInput.getText(), coords);
    }});
    alert.setNegativeButton("Cancel", new DialogInterface.OnClickListener() {onClick: function () {
    }});
    alert.show();
};
var lists = [];
var paints = [];
lists["add"] = {type: "button", x: 475, y: 30, bitmap: "add", bitmap2: "add2", scale: 5, clicker: {onClick: function (container, tileEntity, position, window, canvas, scale) {
    if (ModData.positions.length < 10) {
        AddNewWaypoint();
    } else {
        alert("You cannot created more Waypoints");
    }
}}};
for (let i = 0; i < 10; i++) {
    lists["name" + i] = {}, lists["tp" + i] = {}, lists["remove" + i] = {};
}
var waypointGUI = new UI.StandartWindow({standart: {header: {text: {text: "Waypoints"}}, background: {standart: true}}, elements: {"add": {type: "button", x: 475, y: 30, bitmap: "add_1", bitmap2: "add_2", scale: 4, clicker: {onClick: function (container, tileEntity, position, window, canvas, scale) {
    if (ModData.positions.length < 10) {
        AddNewWaypoint();
    } else {
        alert("You cannot created more Waypoints");
    }
}}}}, getGuiScreen: function () {
    return waypointGUI;
}});
var Elements = {name: function (txt, i) {
    return {type: "text", text: txt, x: 325, y: 115 + 42.5 * i, font: {size: 15, color: android.graphics.Color.rgb(255, 255, 255), shadow: 0}};
}, remove: function (i) {
    return {type: "button", x: 700, y: 100 + 42.5 * i, bitmap: "del_1", bitmap2: "del_2", index: i, scale: 2.5, clicker: {onClick: function (container, tileEntity, position, window, canvas, scale) {
        ModData.remove(this.index);
    }}};
}, tp: function (i) {
    return {type: "button", x: 650, y: 100 + 42.5 * i, bitmap: "tp_1", bitmap2: "tp_2", index: i, scale: 2.5, clicker: {onClick: function (container, tileEntity, position, window, canvas, scale) {
        ModData.tp(this.index);
        container.close();
    }}};
}};
var tick = 0, content, temp;
Callback.addCallback("tick", function () {
    tick++;
    if (tick >= 30) {
        tick = 0;
        content = ModData.containerUI.getGuiContent();
        if (content) {
            for (let i = 0; i < 10; i++) {
                if (i < ModData.positions.length) {
                    temp = ModData.get(i);
                    content.elements["name" + i] = Elements.name(temp.id, i);
                    content.elements["tp" + i] = Elements.tp(i);
                    content.elements["remove" + i] = Elements.remove(i);
                } else {
                    content.elements["name" + i] = null;
                    content.elements["tp" + i] = null;
                    content.elements["remove" + i] = null;
                }
            }
        }
        content = null;
    }
});
Callback.addCallback("LevelLoaded", function () {
    tick = 10;
});
Callback.addCallback("EntityDeath", function (e) {
    if (e == Player.get()) {
        var coords = Player.getPosition();
        coords.x = Math.floor(coords.x);
        coords.z = Math.floor(coords.z);
        if (ModData.positions.length < 10) {
            ModData.add("Latest Death", coords);
        } else {
            alert("Cannot create Death Waypoint");
        }
    }
});
var windowUI;
Callback.addCallback("NativeGuiChanged", function (screenName) {
    if (screenName == "hud_screen" || screenName == "in_game_play_screen") {
        ModData.windowUI.setAsGameOverlay(true);
        windowUI = new UI.Container();
        windowUI.openAs(ModData.windowUI);
    } else {
        if (windowUI) {
            windowUI.close();
            windowUI = null;
        }
    }
});

