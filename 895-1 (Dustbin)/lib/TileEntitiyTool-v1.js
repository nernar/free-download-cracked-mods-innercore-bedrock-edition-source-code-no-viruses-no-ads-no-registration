/*
made by @桃乐丝
*/
LIBRARY({
    name: "TileEntityTool",
    version: 1,
    shared: true,
    api: "CoreEngine"
});
var TileEntityTool;
(function (TileEntityTool) {
    var tileEntitys = {};
    function register(id) {
        tileEntitys[id] = {};
    }
    TileEntityTool.register = register;
    function get(id) {
        return tileEntitys[id];
    }
    TileEntityTool.get = get;
    function setup() {
        for (var i in tileEntitys) {
            TileEntity.registerPrototype(Number(i), tileEntitys[i]);
        }
    }
    TileEntityTool.setup = setup;
})(TileEntityTool || (TileEntityTool = {}));
Callback.addCallback("LevelSelected", function () {
    TileEntityTool.setup();
});
EXPORT("TileEntityTool", TileEntityTool);
