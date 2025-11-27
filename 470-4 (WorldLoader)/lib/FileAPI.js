LIBRARY({name: "FileAPI", version: "1", api: "CoreEngine"});
var FileReader = java.io.FileReader, BufferedReader = java.io.BufferedReader, InputStreamReader = java.io.InputStreamReader, FIS = java.io.FileInputStream, FOS = java.io.FileOutputStream, _String = java.lang.String, StringBuilder = java.lang.StringBuilder, ByteBuffer = java.nio.ByteBuffer, ByteOrder = java.nio.ByteOrder, URL = java.net.URL, HttpURLConnection = java.net.HttpURLConnection, _f = java.io.File;
var Bytes = function (length) {
    var bytes = java.lang.reflect.Array.newInstance(java.lang.Byte.TYPE, length);
    this.get = function () {
        return bytes;
    };
    this.array = function () {
        return bytes;
    };
    this.toString = function () {
        var str = "null";
        if (this.length) {
            str = bytes[0];
            for (var i = 1; i < this.length; i++) {
                str += "," + bytes[i];
            }
        }
        return "[" + str + "]";
    };
    this.length = length;
};
var File = function (dir, name) {
    var file, stream = null;
    if (typeof (name) != "string") {
        file = new _f(dir);
    } else {
        file = new _f(dir, name);
    }
    this.isDirectory = function () {
        return file.isDirectory();
    };
    this.isFile = function () {
        return file.isFile();
    };
    this.getAbsolutePath = function () {
        return file.getAbsolutePath();
    };
    this.getJavaFile = function () {
        return file;
    };
    if (this.isDirectory()) {
        this.path = this.getAbsolutePath();
    } else {
        if (this.isFile()) {
            var a = this.getAbsolutePath().split("/");
            a.length = a.length - 1;
            this.path = a.join("/");
        }
    }
    this.create = function () {
        return file.createNewFile();
    };
    this.createDirectory = function () {
        return file.mkdirs();
    };
    this.delete = function () {
        return file.delete();
    };
    this.exists = function () {
        return file.exists();
    };
    this.getName = function () {
        return file.getName();
    };
    this.getPath = function () {
        return file.getPath();
    };
    this.list = function () {
        return file.list();
    };
    this.listFiles = function (a, b) {
        var list = this.list();
        if (!a) {
            a = File.ALL;
        }
        if (!b) {
            b = -1;
        }
        var files = [];
        for (var i = 0; i < list.length; i++) {
            var _ff = new File(this.path + "/" + list[i]);
            switch (a) {
              case File.ALL:
                if (b == -1) {
                    files.push(_ff);
                } else {
                    if (_ff.getName().endsWith(b)) {
                        files.push(_ff);
                    }
                }
                break;
              case File.DIR:
                if (_ff.isDirectory()) {
                    if (b == -1) {
                        files.push(_ff);
                    } else {
                        if (_ff.getName().endsWith(b)) {
                            files.push(_ff);
                        }
                    }
                }
                break;
              case File.FILE:
                if (_ff.isFile()) {
                    if (b == -1) {
                        files.push(_ff);
                    } else {
                        if (_ff.getName().endsWith(b)) {
                            files.push(_ff);
                        }
                    }
                }
                break;
            }
        }
        return files;
    };
    this.countAllFiles = function () {
        var a = this.listFiles(File.FILE).length;
        var l = this.listFiles(File.DIR);
        for (var i in l) {
            a += l[i].countAllFiles();
        }
        return a;
    };
    this.readLines = function () {
        return this.read().split("\n");
    };
    this.read = function () {
        var readed = (new BufferedReader(new FileReader(file)));
        var data = new StringBuilder();
        var string, i = false;
        while ((string = readed.readLine()) !== null) {
            if (i) {
                data.append("\n");
            }
            data.append(string);
            i = true;
        }
        return data.toString();
    };
    this.readLine = function (line) {
        var read = this.read().split("\n");
        return read[line - 1];
    };
    this.readLineText = function (text, sp) {
        if (typeof (sp) != "string") {
            sp = ":";
        }
        var readerRLT = new BufferedReader(new InputStreamReader(new FIS(file)));
        var readRLT;
        var textRLT;
        while ((readRLT = readerRLT.readLine()) != null) {
            if (readRLT.split(sp)[0] == text) {
                textRLT = readRLT.split(sp)[1];
                return textRLT;
                break;
            }
        }
        readerRLT.close();
        return false;
    };
    this.rewrite = function (text) {
        var writeFOS = new FOS(file);
        writeFOS.write(new _String(text).getBytes());
    };
    this.write = function (text) {
        this.rewrite(this.read() + text);
    };
    this.copy = function (target) {
        if (typeof target == "string") {
            target = new File(target);
        }
        var buf, l, bytes = new Bytes(1024);
        this.openRead();
        target.openWrite();
        while ((l = this.readBytes(bytes)) > 0) {
            target.writeBytes(bytes, l);
        }
        this.close();
        target.close();
    }, this.openRead = function () {
        if (this.isOpen()) {
            return false;
        }
        stream = new FIS(file);
        return true;
    }, this.openWrite = function () {
        if (this.isOpen()) {
            return false;
        }
        stream = new FOS(file);
        return true;
    }, this.close = function () {
        if (stream) {
            stream.close();
        }
        stream = null;
    }, this.isOpenForRead = function () {
        return stream instanceof FIS;
    }, this.isOpenForWrite = function () {
        return stream instanceof FOS;
    }, this.isOpen = function () {
        return stream != null;
    }, this.readInt = function () {
        var a = new Bytes(4);
        if (!this.readBytes(a)) {
            return false;
        }
        var b = ByteBuffer.wrap(a.get()).order(ByteOrder.LITTLE_ENDIAN);
        return b.getInt();
    }, this.readByte = function () {
        var a = new Bytes(1);
        if (!this.readBytes(a)) {
            return false;
        }
        var b = ByteBuffer.wrap(a.get()).order(ByteOrder.LITTLE_ENDIAN);
        return b.get();
    }, this.readDouble = function () {
        var a = new Bytes(8);
        if (!this.readBytes(a)) {
            return false;
        }
        var b = ByteBuffer.wrap(a.get()).order(ByteOrder.LITTLE_ENDIAN);
        return b.getDouble();
    }, this.readFloat = function () {
        var a = new Bytes(4);
        if (!this.readBytes(a)) {
            return false;
        }
        var b = ByteBuffer.wrap(a.get()).order(ByteOrder.LITTLE_ENDIAN);
        return b.getFloat();
    }, this.readLong = function () {
        var a = new Bytes(8);
        if (!this.readBytes(a)) {
            return false;
        }
        var b = ByteBuffer.wrap(a.get()).order(ByteOrder.LITTLE_ENDIAN);
        return b.getLong();
    }, this.readShort = function () {
        var a = new Bytes(2);
        if (!this.readBytes(a)) {
            return false;
        }
        var b = ByteBuffer.wrap(a.get()).order(ByteOrder.LITTLE_ENDIAN);
        return b.getShort();
    }, this.readString = function () {
        var s = this.readShort();
        if (s === false) {
            return false;
        }
        if (s < 1) {
            return new _String("");
        }
        var a = java.lang.reflect.Array.newInstance(java.lang.Byte.TYPE, s);
        for (var i = 0; i < s; i++) {
            a[i] = this.readByte();
            if (a[i] === false) {
                return false;
            }
        }
        a = new _String(a);
        return a;
    }, this.writeInt = function (i) {
        this.writeBytes(ByteBuffer.allocate(4).order(ByteOrder.LITTLE_ENDIAN).putInt(i), 4);
    }, this.writeDouble = function (d) {
        this.writeBytes(ByteBuffer.allocate(8).order(ByteOrder.LITTLE_ENDIAN).putDouble(d), 8);
    }, this.writeFloat = function (d) {
        this.writeBytes(ByteBuffer.allocate(4).order(ByteOrder.LITTLE_ENDIAN).putFloat(d), 4);
    }, this.writeLong = function (d) {
        this.writeBytes(ByteBuffer.allocate(8).order(ByteOrder.LITTLE_ENDIAN).putLong(d), 8);
    }, this.writeShort = function (d) {
        this.writeBytes(ByteBuffer.allocate(2).order(ByteOrder.LITTLE_ENDIAN).putShort(d), 2);
    }, this.writeByte = function (d) {
        this.writeBytes(ByteBuffer.allocate(1).order(ByteOrder.LITTLE_ENDIAN).put(d), 1);
    }, this.writeString = function (s) {
        s = new _String(s);
        var a = s.length();
        this.writeShort(a);
        this.writeBytes(s.getBytes(), a);
    }, this.readBytes = function (bytes) {
        if (!this.isOpenForRead()) {
            return false;
        }
        return stream.read(bytes.get());
    };
    this.writeBytes = function (bytes, length) {
        if (!this.isOpenForWrite()) {
            return false;
        }
        if (bytes instanceof Bytes || bytes instanceof ByteBuffer) {
            bytes = bytes.array();
        }
        stream.write(bytes, 0, length);
    };
    this.getStream = function () {
        return stream;
    };
};
File.FILE = "file";
File.DIR = "dir";
File.ALL = "all";
File.readAssets = function (file) {
    var readerRLT = new BufferedReader(new InputStreamReader(ModPE.openInputStreamFromTexturePack(file)));
    var readRLT;
    var text = "";
    while ((readRLT = readerRLT.readLine()) != null) {
        text = text + readRLT + "\n";
    }
    return text;
};
File.download = function (url, file, events) {
    if (typeof events != "object") {
        events = {};
    }
    events.progress = events.progress || function () {
    };
    events.end = events.end || function () {
    };
    function task() {
        try {
            url = new URL(url);
            var httpURLConnection = url.openConnection();
            httpURLConnection.setDoOutput(false);
            httpURLConnection.connect();
            if (typeof file == "string") {
                file = new File(file);
            }
            var inputStream = httpURLConnection.getInputStream();
            file.openWrite();
            var totalSize = httpURLConnection.getContentLength();
            var downloadSize = 0;
            var buf = new Bytes(1024);
            while ((bufferLength = inputStream.read(buf.get())) > 0) {
                file.writeBytes(buf, bufferLength);
                downloadSize += bufferLength;
                events.progress(downloadSize, totalSize);
            }
            file.close();
            inputStream.close();
            events.end(file);
        }
        catch (e) {
            alert("DL:" + e);
        }
    }
    Threading.initThread("download_" + url, task, 10);
};
File.Path = {};
File.Path.sdcard = android.os.Environment.getExternalStorageDirectory() + "/";
File.Path.mojang = File.Path.sdcard + "games/com.mojang/";
File.Path.minecraft = File.Path.mojang + "minecraftpe/";
EXPORT("File", File);
EXPORT("Bytes", Bytes);

