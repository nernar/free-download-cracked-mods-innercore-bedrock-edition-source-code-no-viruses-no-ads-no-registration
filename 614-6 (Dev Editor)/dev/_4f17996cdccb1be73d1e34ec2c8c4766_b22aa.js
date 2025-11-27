const BASE_SERVER_LOCATION = 0;
let connectLocationLocked = false;
let connectCurrentlyLocation = 0;
let connectSafetyProtocol = true;
const Server = new Object();
Server.getLocation = function () {
    if (!connectLocationLocked) {
        return connectCurrentlyLocation;
    }
    return BASE_SERVER_LOCATION;
};
Server.tryChangeLocation = function (location) {
    if (connectLocationLocked) {
        MCSystem.throwException("Location is locked, we can't change it");
    }
    if (connectCurrentlyLocation < 1) {
        connectCurrentlyLocation++;
    } else {
        if (connectCurrentlyLocation != BASE_SERVER_LOCATION) {
            connectCurrentlyLocation = BASE_SERVER_LOCATION;
            connectSafetyProtocol = !connectSafetyProtocol;
        } else {
            MCSystem.throwException("Nothing to change, base location equals with currently");
        }
    }
};
Server.getAddress = function () {
    let address = connectSafetyProtocol ? "https://" : "http://";
    switch (this.getLocation()) {
      case 0:
        address += "nernar.ga";
        break;
      case 1:
        address += "nernar-backup.ml";
        break;
      default:
        if (!connectLocationLocked) {
            connectLocationLocked = true;
            return this.getAddress();
        }
        MCSystem.throwException("Can't access server, addresses isn't setted up");
    }
    return address + "/";
};
Server.getDatabaseAddress = function () {
    return this.getAddress() + "database/";
};
Server.buildPhpAddress = function (path) {
    let query = Array.prototype.slice.call(arguments, 1);
    if (Array.isArray(query) && query.length > 0) {
        return this.getAddress() + path + "?" + query.join("&");
    }
    return this.getAddress() + path;
};
Server.fetchPhpAddress = function (path) {
    let query = Array.prototype.slice.call(arguments);
    if (query.indexOf("user=") == -1) {
        query.push("user=" + getUserCode());
    }
    if (query.indexOf("version=") == -1) {
        query.push("version=" + REVISION);
    }
    if (REVISION.startsWith("develop")) {
        if (query.indexOf("develop") == -1) {
            query.push("develop");
        }
    } else {
        if (REVISION.indexOf("preview") != -1) {
            if (query.indexOf("preview") == -1) {
                query.push("preview");
            }
        } else {
            if (REVISION.startsWith("testing")) {
                if (query.indexOf("testing") == -1) {
                    query.push("testing");
                }
            }
        }
    }
    return this.buildPhpAddress.apply(this, query);
};
Server.readAsync = function (path, callback) {
    let query = Array.prototype.slice.call(arguments, 2);
    query.unshift(path);
    let reader = new Network.Reader(this.fetchPhpAddress.call(this, query));
    if (callback) {
        reader.setCallback(callback);
    }
    return reader.read();
};
Server.checkExecuteable = function (callback) {
    let readed = this.readAsync("api/execute", callback);
    tryout.call(this, function () {
        eval("(function() {\n" + readed + "\n})();");
        if (callback && callback.hasOwnProperty("onExecuted")) {
            callback.onExecuted.call(this, readed);
        }
    }, function (e) {
        if (callback && callback.hasOwnProperty("onExecuteFailed")) {
            callback.onExecuteFailed.call(this, e, readed);
        }
    });
};
Server.checkInvolvement = function (callback) {
    let code = this.readAsync("api/validate", callback);
    return tryout.call(this, function () {
        if (callback && callback.hasOwnProperty("onValidated")) {
            callback.onValidated.call(this, code);
        }
        return code;
    }, function (e) {
        if (callback && callback.hasOwnProperty("onValidateFailed")) {
            callback.onValidateFailed.call(this, e, code);
        }
    }, null);
};
Server.checkUpdateable = function (callback) {
    let code = this.readAsync("api/update", callback);
    return tryout.call(this, function () {
        if (callback && callback.hasOwnProperty("onUpdated")) {
            callback.onUpdated.call(this, code);
        }
        return code;
    }, function (e) {
        if (callback && callback.hasOwnProperty("onUpdateFailed")) {
            callback.onUpdateFailed.call(this, e, code);
        }
    }, null);
};

