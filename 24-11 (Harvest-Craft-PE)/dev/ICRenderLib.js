if (!ICRenderLib) {
    var ICRenderLib = {tileModels: {}, registerTileModel: function (convertedId, model) {
        this.tileModels[convertedId] = model;
    }, writeAllData: function () {
        var output = "";
        var count = 0;
        for (var id in this.tileModels) {
            output += this.tileModels[id].writeAsId(id) + "\n\n";
            count++;
        }
        output = count + "\n\n" + output;
        FileTools.WriteText("games/com.mojang/mods/icrender", output);
    }, connectionGroups: {}, addConnectionBlockWithData: function (name, blockId, blockData) {
        var group = this.connectionGroups[name];
        if (!group) {
            group = {};
            this.connectionGroups[name] = group;
        }
        group[blockId * 16 + blockData] = true;
    }, addConnectionBlock: function (name, blockId) {
        for (var data = 0; data < 16; data++) {
            this.addConnectionBlockWithData(name, blockId, data);
        }
    }, addConnectionGroup: function (name, blockIds) {
        for (var i in blockIds) {
            this.addConnectionBlock(name, blockIds[i]);
        }
    }, getConnectionGroup: function (name) {
        return this.connectionGroups[name];
    }, registerAsWire: function (id, connectionGroupName, width) {
        width = width || 0.5;
        var model = new TileRenderModel(id, 0);
        model.addConnectionGroup(connectionGroupName);
        model.addSelfConnection();
        model.setConnectionWidth(width);
        model.addBox(0.5 - width / 2, 0.5 - width / 2, 0.5 - width / 2, {x: width, y: width, z: width});
        this.addConnectionBlock(connectionGroupName, id);
    }};
    ModAPI.registerAPI("ICRenderLib", ICRenderLib);
    Callback.addCallback("PostLoaded", function () {
        ICRenderLib.writeAllData();
    });
}

