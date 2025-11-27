LIBRARY({name: "Network", version: 2, shared: false, api: "AdaptedScript", dependencies: ["Retention:4"]});
IMPORT("Retention:4");
let Network = function (address) {
    this.callback = new Object();
    address && this.setAddress(address);
};
Network.prototype.getUrl = function () {
    return this.url || null;
};
Network.prototype.setUrl = function (url) {
    if (String(url) === url) {
        Logger.Log("You should use Network.setAddress(address) instead of Network.setUrl(url) for string values", "WARNING");
        this.setAddress(url);
        return;
    }
    if (this.callback.hasOwnProperty("onUrlChanged")) {
        this.callback.onUrlChanged.call(this, url);
    }
    this.url = url;
};
Network.prototype.setAddress = function (address) {
    this.setUrl(new java.net.URL(address));
};
Network.prototype.setCallback = function (callback) {
    if (callback && callback instanceof Object) {
        this.callback = callback;
        return;
    }
    this.callback = new Object();
};
Network.prototype.getStream = function () {
    return this.url ? this.url.openStream() : null;
};
Network.prototype.validateConnection = function () {
    if (this.connection === null || this.connection === undefined) {
        this.connection = this.url ? this.url.openConnection() : null;
        if (this.callback.hasOwnProperty("onCreateConnection")) {
            this.callback.onCreateConnection.call(this, this.connection);
        }
    }
};
Network.prototype.getConnection = function (force) {
    if (!force) {
        this.validateConnection();
    }
    return this.connection || null;
};
Network.prototype.hasConnection = function () {
    return this.getConnection(true) !== null;
};
Network.prototype.connect = function () {
    let connection = this.getConnection();
    if (connection) {
        connection.connect();
    } else {
        MCSystem.throwException("Can't find any opened connection to connect");
    }
    if (this.callback.hasOwnProperty("onConnect")) {
        this.callback.onConnect.call(this, connection);
    }
};
Network.prototype.disconnect = function () {
    let connection = this.getConnection();
    if (!connection) {
        return;
    }
    connection.disconnect();
    delete this.connection;
    if (this.callback.hasOwnProperty("onDisconnect")) {
        this.callback.onDisconnect.call(this, connection);
    }
};
Network.prototype.getLength = function () {
    let connected = this.hasConnection();
    if (!connected) {
        this.connect();
    }
    let connection = this.getConnection(), length = connection ? connection.getContentLength() : -1;
    if (this.callback.hasOwnProperty("getLength")) {
        this.callback.getLength.call(this, length);
    }
    connected && this.disconnect();
    return length;
};
Network.isOnline = function () {
    let service = context.getSystemService("connectivity");
    if (service === null) {
        return false;
    }
    let network = service.getActiveNetworkInfo();
    if (network === null || !network.isConnectedOrConnecting()) {
        return false;
    }
    return true;
};
Network.Reader = function (address) {
    address && this.setAddress(address);
};
Network.Reader.prototype = new Network();
Network.Reader.prototype.charset = "UTF-8";
Network.Reader.prototype.getCharset = function () {
    return this.charset || null;
};
Network.Reader.prototype.setCharset = function (charset) {
    if (charset) {
        this.charset = charset;
    } else {
        delete this.charset;
    }
    if (this.callback.hasOwnProperty("onCharsetChanged")) {
        this.callback.onCharsetChanged.call(this, this.charset);
    }
};
Network.Reader.prototype.getStreamReader = function () {
    let stream = this.getStream();
    if (!stream) {
        return null;
    }
    let charset = this.getCharset();
    if (!charset) {
        return new java.io.InputStreamReader(stream);
    }
    return new java.io.InputStreamReader(stream, charset);
};
Network.Reader.prototype.inProcess = function () {
    return !!this.processing;
};
Network.Reader.prototype.getCurrentlyReaded = function () {
    return this.result || null;
};
Network.Reader.prototype.getReadedCount = function () {
    let readed = this.getCurrentlyReaded();
    return readed ? readed.length : -1;
};
Network.Reader.prototype.getResult = function () {
    let readed = this.getCurrentlyReaded();
    if (!readed) {
        return null;
    }
    return readed.join("\n");
};
Network.Reader.prototype.read = function () {
    let stream = this.getStreamReader();
    if (!stream) {
        MCSystem.throwException("Can't read stream, because one of params is missing");
    }
    let result = this.result = new Array(), reader = new java.io.BufferedReader(stream);
    this.processing = true;
    if (this.callback.hasOwnProperty("onPrepare")) {
        this.callback.onPrepare.call(this);
    }
    while (this.inProcess()) {
        let line = reader.readLine();
        if (line == null) {
            break;
        } else {
            result.push(line);
        }
        if (this.callback.hasOwnProperty("onReadLine")) {
            this.callback.onReadLine.call(this, result, line);
        }
    }
    if (this.callback.hasOwnProperty("onComplete")) {
        this.callback.onComplete.call(this);
    }
    delete this.processing;
    reader.close();
    return this.getResult();
};
Network.Writer = function (address) {
    address && this.setAddress(address);
};
Network.Writer.prototype = new Network();
Network.Writer.prototype.size = 8192;
Network.Writer.prototype.getBufferSize = function () {
    return this.size || -1;
};
Network.Writer.prototype.setBufferSize = function (size) {
    if (size) {
        this.size = size;
    } else {
        delete this.size;
    }
};
Network.Writer.prototype.getReadedCount = function () {
    return this.count ? this.count : this.inProcess() ? 0 : -1;
};
Network.Writer.prototype.getStreamReader = function () {
    let stream = this.getStream();
    if (!stream) {
        return null;
    }
    let size = this.getBufferSize();
    if (!size) {
        return new java.io.BufferedInputStream(stream);
    }
    return new java.io.BufferedInputStream(stream, size);
};
Network.Writer.prototype.getOutputStream = function () {
    MCSystem.throwException("You must overwrite a method getOutputStream()");
};
Network.Writer.prototype.inProcess = function () {
    return !!this.processing;
};
Network.Writer.prototype.download = function () {
    let stream = this.getStreamReader(), output = this.getOutputStream();
    if (!stream) {
        MCSystem.throwException("Can't download stream, because input stream is missing");
    }
    if (!output) {
        MCSystem.throwException("Can't download stream, because output stream is missing");
    }
    this.connect(), this.count = 0;
    this.processing = true;
    let size = this.getLength();
    if (this.callback.hasOwnProperty("onPrepare")) {
        this.callback.onPrepare.call(this, size);
    }
    let data = java.lang.reflect.Array.newInstance(java.lang.Byte.TYPE, 1024);
    while (this.inProcess()) {
        let count = stream.read(data);
        if (count == -1) {
            break;
        } else {
            output.write(data, 0, count);
            if (this.callback.hasOwnProperty("onProgress")) {
                this.callback.onProgress.call(this, count, size);
            }
            this.count += count;
        }
    }
    if (this.callback.hasOwnProperty("onComplete")) {
        this.callback.onComplete.call(this, size);
    }
    this.processing = false;
    this.disconnect();
    output.flush();
    output.close();
    stream.close();
};
Network.Downloader = function (address, path) {
    address && this.setAddress(address);
    path && this.setPath(path);
};
Network.Downloader.prototype = new Network.Writer();
Network.Downloader.prototype.getFile = function () {
    return this.file || null;
};
Network.Downloader.prototype.setFile = function (file) {
    if (file) {
        this.file = file;
    } else {
        delete this.file;
    }
    if (this.callback.hasOwnProperty("onFileChanged")) {
        this.callback.onFileChanged.call(this, file);
    }
};
Network.Downloader.prototype.getPath = function () {
    let file = this.getFile();
    return file ? file.getPath() : null;
};
Network.Downloader.prototype.setPath = function (path) {
    let file = new java.io.File(path);
    if (file) {
        this.setFile(file);
    }
};
Network.Downloader.prototype.getOutputStream = function () {
    let file = this.getFile();
    if (!file) {
        return null;
    }
    if (!file.exists()) {
        file.getParentFile().mkdirs();
        file.createNewFile();
    }
    let stream = new java.io.FileOutputStream(file);
    if (!stream) {
        return null;
    }
    return new java.io.BufferedOutputStream(stream);
};
Network.handle = function (action, callback, connect) {
    if (!(action instanceof Function)) {
        MCSystem.throwException("Nothing to network handle");
    }
    handleThread(function () {
        tryout(function () {
            action();
        }, function (e) {
            tryout(function () {
                if (callback && callback instanceof Object) {
                    if (callback.hasOwnProperty("onFail")) {
                        callback.onFail.call(connect);
                        return;
                    }
                } else {
                    if (callback instanceof Function) {
                        callback.call(connect);
                    }
                }
                Logger.Log("Failed to read network data from a server", "WARNING");
            }, function (t) {
                Logger.Log("A fatal error occurred while trying to network connect", "ERROR");
            });
            reportError(e);
        });
    });
};
Network.lengthUrl = function (address, callback) {
    if (!Network.isOnline()) {
        if (callback && callback instanceof Object) {
            if (callback.hasOwnProperty("isNotConnected")) {
                callback.isNotConnected();
            }
        }
        return false;
    }
    let connect = new Network.Connect(address);
    if (callback && callback instanceof Object) {
        callback && connect.setCallback(callback);
    }
    this.handle(function () {
        if (callback) {
            if (callback instanceof Object) {
                connect.getLength();
            } else {
                callback(connect.getLength());
            }
        } else {
            Logger.Log("Network action after doing stream length is missed", "WARNING");
            connect.getLength();
        }
    }, callback, connect);
    return true;
};
Network.readUrl = function (address, callback) {
    if (!Network.isOnline()) {
        if (callback && callback instanceof Object) {
            if (callback.hasOwnProperty("isNotConnected")) {
                callback.isNotConnected();
            }
        }
        return false;
    }
    let reader = new Network.Reader(address);
    if (callback && callback instanceof Object) {
        callback && reader.setCallback(callback);
    }
    this.handle(function () {
        if (callback) {
            if (callback instanceof Object) {
                reader.read();
            } else {
                callback(reader.read());
            }
        } else {
            Logger.Log("Network action after doing stream reading is missed", "WARNING");
            reader.read();
        }
    }, callback, reader);
    return true;
};
Network.downloadUrl = function (address, path, callback) {
    if (!Network.isOnline()) {
        if (callback && callback instanceof Object) {
            if (callback.hasOwnProperty("isNotConnected")) {
                callback.isNotConnected();
            }
        }
        return false;
    }
    let writer = new Network.Downloader(address, path);
    if (callback && callback instanceof Object) {
        callback && writer.setCallback(callback);
    }
    this.handle(function () {
        if (callback instanceof Function) {
            callback(writer.download());
            return;
        }
        writer.download();
    }, callback, writer);
    return true;
};
EXPORT("Network", Network);

