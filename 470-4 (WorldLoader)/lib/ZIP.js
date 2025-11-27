LIBRARY({name: "ZIP", version: "1", api: "CoreEngine", dependencies: ["FileAPI"]});
IMPORT("FileAPI");
var ZipInputStream = java.util.zip.ZipInputStream, BufferedInputStream = java.io.BufferedInputStream;
var ZIP = function () {
    File.apply(this, arguments);
    var stream = null;
    this.open = function () {
        if (this.isOpenForWrite()) {
            return false;
        }
        if (!this.isOpenForRead()) {
            this.openRead();
        }
        stream = new ZipInputStream(new BufferedInputStream(this.getStream()));
        return true;
    };
    this._close = this.close;
    this.close = function () {
        if (stream) {
            stream.close();
        }
        this._close();
    };
    this.getList = function () {
        if (!this.open()) {
            this.close();
            this.open();
        }
        var trees = new Folder("Root"), ze;
        while ((ze = stream.getNextEntry()) != null) {
            var name = ze.getName().split("/");
            var l = name.length - 1;
            subF = trees;
            if (name.length > 1) {
                for (var i = 0; i < l; i++) {
                    subF = subF.getFolder(name[i]);
                }
            }
            if (ze.isDirectory()) {
                subF.addFolder(name[l]);
            } else {
                subF.addFile(name[l]);
            }
            stream.closeEntry();
        }
        this.close();
        return trees;
    };
    this.getListFiles = function () {
        if (!this.open()) {
            return false;
        }
        var a = [];
        while ((ze = stream.getNextEntry()) != null) {
            if (!ze.isDirectory()) {
                a.push(ze.getName());
            }
            stream.closeEntry();
        }
        this.close();
        return a;
    };
    this.unzip = function (path, events) {
        path += "/";
        if (typeof events != "object") {
            events = {};
        }
        events.progress = events.progress || function () {
        };
        events.end = events.end || function () {
        };
        try {
            var all = this.getListFiles().length, i = 0;
            if (all < 1) {
                return false;
            }
            if (!this.open()) {
                return false;
            }
            var filename, ze, buffer = new Bytes(1024), count;
            var folder = new File(path);
            if (folder.isFile()) {
                return false;
            }
            folder.createDirectory();
            while ((ze = stream.getNextEntry()) != null) {
                filename = ze.getName();
                var new_file = new File(path + filename);
                if (ze.isDirectory()) {
                    new_file.createDirectory();
                    continue;
                }
                events.progress(i++, all);
                new_file.openWrite();
                while ((count = stream.read(buffer.get())) != -1) {
                    new_file.writeBytes(buffer, count);
                }
                new_file.close();
                stream.closeEntry();
            }
            this.close();
            events.end();
        }
        catch (e) {
            alert("ZIP:" + e);
            return false;
        }
        return true;
    };
};
var Folder = function (name) {
    this.name = name;
    this.folders = {};
    this.files = [];
    this.addFolder = function (name) {
        this.folders[name] = (new Folder(name));
    };
    this.addFile = function (name) {
        this.files.push(name);
    };
    this.getFolder = function (name) {
        if (!this.folders[name]) {
            return false;
        }
        return this.folders[name];
    };
    this.getCount = function () {
        var a = this.files.length || 0;
        for (var i in this.folders) {
            a++;
        }
        return a;
    };
};
ZIP.prototype = Object.create(File.prototype);
EXPORT("ZIP", ZIP);

