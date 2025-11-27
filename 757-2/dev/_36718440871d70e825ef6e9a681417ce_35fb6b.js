Callback.addCallback("CoreEngineLoaded", function (api) {
    handle(function () {
        let window = context.getWindow();
        if (REVISION.indexOf("alpha") != -1 && !REVISION.startsWith("develop")) {
            window.addFlags(android.view.WindowManager.LayoutParams.FLAG_SECURE);
        }
    });
});
const getUserCode = function () {
    let toHexString = function (number) {
        return java.lang.Integer.toHexString(number);
    };
    let model = toHexString(android.os.Build.MODEL.hashCode()), id = toHexString(android.os.Build.ID.hashCode()), board = toHexString(android.os.Build.DEVICE.hashCode()), serial = toHexString(android.os.Build.SERIAL.hashCode());
    return model + "-" + id + "-" + board + "-" + serial;
};
const RETRY_TIME = 60000;
const checkOnlineable = function (action) {
    handleThread(function () {
        if (!Network.isOnline()) {
            warningMessage = "Please check network connection. Connect to collect updates, special events and prevent key deprecation.";
            handle(function () {
                checkOnlineable(action);
            }, RETRY_TIME);
            return;
        } else {
            warningMessage = null;
        }
        action && action();
    });
};
const checkExecuteable = function () {
    handleThread(function () {
        tryoutSafety(function () {
            let ACTIVE = true;
            while (ACTIVE) {
                Server.checkExecuteable({onExecuted: function () {
                    ACTIVE = false;
                }, onExecuteFailed: function () {
                    Server.tryChangeLocation();
                }});
            }
        });
    });
};
const checkUpdateable = function (alternative) {
    handleThread(function () {
        tryoutSafety(function () {
            let ACTIVE = true;
            while (ACTIVE) {
                Server.checkUpdateable({onUpdated: function (status) {
                    if (status == "outdated") {
                        warningMessage = "New version is availabled to download! Tryout new abilities in our improved environment.";
                    }
                    ACTIVE = false;
                }, onUpdateFailed: function () {
                    Server.tryChangeLocation();
                }});
            }
        });
    });
};
const compileToProduce = function (string) {
    return tryoutSafety(function () {
        Encyption.updateKey("nernar", "editorProject");
        return Encyption.encryptString(String(string));
    }, function (e) {
        return e.name + "\n" + e.stack;
    });
};
const decompileFromProduce = function (bytes) {
    return tryoutSafety(function () {
        Encyption.updateKey("nernar", "editorProject");
        return String(Encyption.decryptAsString(bytes));
    }, function (e) {
        return e.name + "\n" + e.stack;
    });
};
const compileExecuteable = function (string) {
    return tryoutSafety(function () {
        Encyption.updateKey("nernar", "editorScript");
        return Encyption.encryptString(String(string));
    }, function (e) {
        return e.name + "\n" + e.stack;
    });
};
const decompileExecuteable = function (bytes) {
    return tryoutSafety(function () {
        Encyption.updateKey("nernar", "editorScript");
        return String(Encyption.decryptAsString(bytes));
    }, function (e) {
        return e.name + "\n" + e.stack;
    });
};

