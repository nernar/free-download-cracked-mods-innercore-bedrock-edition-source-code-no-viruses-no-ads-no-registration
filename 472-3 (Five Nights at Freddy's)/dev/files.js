const Dirs = {worlds: "/games/com.mojang/innercoreWorlds", options: "/games/com.mojang/minecraftpe/options.txt", external: android.os.Environment.getExternalStorageDirectory()};
const Files = {createFile: function (path, name) {
    var file = new java.io.File(path, name);
    if (!file.exists()) {
        file.createNewFile();
    }
}, createNewWithParent: function (path, name) {
    var file = new java.io.File(path, name);
    file.getParentFile().mkdirs();
    file.createNewFile();
}, exists: function (path) {
    return new java.io.File(path).exists();
}, createDir: function (path) {
    new java.io.File(path).mkdirs();
}, listFiles: function (path) {
    return new java.io.File(path).list();
}, filesCount: function (path) {
    return new java.io.File(path).list().length;
}, deleteFile: function (path) {
    new java.io.File(path)["delete"]();
}, deleteDir: function (path) {
    var file = new java.io.File(path);
    if (file.isDirectory()) {
        var list = file.listFiles();
        for (var i = 0; i < list.length; i++) {
            this.deleteDir(list[i].getPath());
        }
    }
    file["delete"]();
}, getFromAssets: function (name) {
    var assets = context.getAssets();
    return assets.open(name);
}, readKey: function (a, b) {
    b = b || "=";
    var d = this.read(a, true), e = {};
    for (var f = 0; f < d.length; f++) {
        var g = d[f].split(b);
        2 == g.length && (e[g[0]] = g[1]);
    }
    return e;
}, writeKey: function (a, b, c) {
    c = c || "=";
    var d = [];
    for (var e in b) {
        d.push(e + c + b[e]);
    }
    this.write(a, d.join("\n"));
}, read: function (file, massive) {
    if (!file.exists()) {
        return massive ? [] : undefined;
    }
    var reader = java.io.BufferedReader(new java.io.FileReader(file)), result = [];
    while (line = reader.readLine()) {
        result.push(line);
    }
    return massive ? result : result.join("\n");
}, readLine: function (file, index) {
    if (!file.exists()) {
        return;
    }
    var reader = java.io.BufferedReader(new java.io.FileReader(file)), count = -1;
    while (count < index && (line = reader.readLine())) {
        count++;
    }
    return count == index ? line : undefined;
}, readLines: function (file, startInd, endInd) {
    if (!file.exists()) {
        return;
    }
    var reader = java.io.BufferedReader(new java.io.FileReader(file)), count = -1, result = [];
    while (count <= endInd && (line = reader.readLine())) {
        if (count >= startInd) {
            result.push(line);
        }
        count++;
    }
    return result.length > 0 ? result : undefined;
}, readBytes: function (file) {
    if (!file.exists()) {
        return;
    }
    var stream = new java.io.FileInputStream(file);
    var output = new java.io.ByteArrayOutputStream();
    var arr = java.lang.reflect.Array.newInstance(java.lang.Byte.TYPE, 1024);
    while (true) {
        var read = stream.read(arr);
        if (read < 0) {
            return output.toByteArray();
        }
        output.write(arr, 0, read);
    }
}, writeBytes: function (file, bytes) {
    file.createNewFile();
    var stream = new java.io.FileOutputStream(file);
    stream.write(bytes);
    stream.close();
}, write: function (file, text) {
    Files.writeBytes(file, java.lang.String(text).getBytes());
}, addText: function (file, text) {
    Files.write(file, Files.read(file) + text);
}, sendMail: function (file) {
    var intent = new android.content.Intent("android.intent.action.SEND");
    intent.setType("text/plain");
    intent.putExtra("android.intent.extra.TEXT", Files.read(file));
    context.startActivity(intent);
}, linesCount: function (file) {
    return Files.read(file, true).length;
}, runScript: function (file) {
    eval(Files.read(file));
}, copy: function (file, path) {
    var result = new java.io.File(result), exists = result.exists();
    if (!exists) {
        result.createNewFile();
    }
    Files.write(result, Files.read(file));
}, cut: function (file, path) {
    Files.copy(file, path);
    file["delete"]();
}, createFromBase64: function (file, code) {
    file.createNewFile();
    Files.writeBytes(file, android.util.Base64.decode(code, 0));
}};

