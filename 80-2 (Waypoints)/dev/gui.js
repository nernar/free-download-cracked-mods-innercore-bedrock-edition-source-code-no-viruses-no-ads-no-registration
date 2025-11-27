var colors = ["red", "blue", "yellow", "orange", "white", "purple", "black", "dark", "green", "silver", "emerald", "gold"];
var elmts = {};
var drawngs = [];
var index = 0;
for (var yy = 0; yy < 315; yy += 157) {
    for (xx = 0; xx < 661; xx += 330) {
        drawngs.push({type: "bitmap", x: 10 + xx, y: 25 + yy, bitmap: "smallwindow", scale: 25});
        elmts["name" + index] = {type: "text", text: colors[index], x: 38 + xx, y: 50 + yy, font: {size: 15, color: android.graphics.Color.rgb(255, 255, 255), shadow: 0}};
        elmts["changeName" + index] = {type: "button", x: 20 + xx, y: 105 + yy, bitmap: "name", bitmap2: "name2", scale: 6, canChange: true, index: index, clicker: {onClick: function (container, tileEntity, position, window, canvas, scale) {
            var content = container.getGuiContent();
            var targetIndex = colors.indexOf(content.elements["name" + this.index].text) + 1;
            if (!colors[targetIndex]) {
                targetIndex = 0;
            }
            if (this.canChange) {
                content.elements["name" + this.index].text = colors[targetIndex];
            }
        }}};
        elmts["del" + index] = {type: "button", x: 100 + xx, y: 105 + yy, bitmap: "del", bitmap2: "del2", scale: 6, index: index, clicker: {onClick: function (container, tileEntity, position, window, canvas, scale) {
            var content = container.getGuiContent();
            var pointName = content.elements["name" + this.index].text;
            Waypoint.del(pointName);
            content.elements["changeName" + this.index].canChange = true;
        }}};
        elmts["teleport" + index] = {type: "button", x: 180 + xx, y: 105 + yy, bitmap: "tp", bitmap2: "tp2", scale: 6, index: index, clicker: {onClick: function (container, tileEntity, position, window, canvas, scale) {
            var content = container.getGuiContent();
            var pointName = content.elements["name" + this.index].text;
            Waypoint.teleport(pointName);
        }}};
        elmts["add" + index] = {type: "button", x: 260 + xx, y: 105 + yy, bitmap: "add", bitmap2: "add2", scale: 6, index: index, clicker: {onClick: function (container, tileEntity, position, window, canvas, scale) {
            var coords = Player.getPosition();
            var content = container.getGuiContent();
            var pointName = content.elements["name" + this.index].text;
            Waypoint.add(pointName, coords);
            content.elements["changeName" + this.index].canChange = false;
        }}};
        index++;
    }
}
var guiWaypoints = new UI.StandartWindow({standart: {header: {text: {text: "Waypoints"}}, background: {standart: true}}, drawing: drawngs, elements: elmts});

