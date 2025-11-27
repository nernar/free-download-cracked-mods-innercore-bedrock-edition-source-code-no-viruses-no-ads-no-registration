const Options = {};
Options.getValue = function (key) {
    var file = new java.io.File(Dirs.external + Dirs.options), stream = new java.io.InputStreamReader(new java.io.FileInputStream(file)), reader = new java.io.BufferedReader(stream), result;
    while ((line = reader.readLine()) != null) {
        if (line.split(":")[0] == key) {
            result = line.split(":")[1];
            break;
        }
    }
    reader.close();
    return result;
};
Options.setValue = function (name, key) {
    var file = new java.io.File(Dirs.external + Dirs.options), stream = new java.io.InputStreamReader(new java.io.FileInputStream(file)), reader = new java.io.BufferedReader(stream), result = [];
    while ((line = reader.readLine()) != null) {
        if (line.split(":")[0] == name) {
            result.push(name + ":" + key);
        } else {
            result.push(line);
        }
    }
    Files.write(file, result.join("\n"));
};
const Preferences = {unknown: {night: isDevelop ? "3" : "1"}, loaded: {}};
Preferences.load = function () {
    var file = new java.io.File(__dir__ + "assets/.game");
    if (!file.exists()) {
        file.createNewFile();
    }
    var text = Files.read(file), saved = text.split("\n");
    this.loaded = {};
    for (var i = 0; i < saved.length; i++) {
        var g = saved[i].split("=");
        this.loaded[g[0]] = g[1] || "";
    }
};
Preferences.get = function (name) {
    return this.loaded[name] || this.unknown[name];
};
Preferences.save = function (name, str) {
    this.loaded[name] = "" + str;
    var file = new java.io.File(__dir__ + "assets/.game"), allocated = [], loaded = this.loaded;
    for (var i in loaded) {
        allocated.push(i + "=" + loaded[i]);
    }
    Files.write(file, allocated.join("\n"));
};

