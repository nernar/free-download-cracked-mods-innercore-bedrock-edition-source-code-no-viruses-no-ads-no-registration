ConfigureMultiplayer({isClientOnly: true});
Logger.Log("reminder for developers: this client will be reconnected if mods or pack version do not matches server", "WARNING");
const $ = new JavaImporter();
$.importPackage(com.zhekasmirnov.apparatus.modloader);
$.importPackage(com.zhekasmirnov.apparatus.adapter.innercore);
$.importPackage(com.zhekasmirnov.apparatus.multiplayer.client);
$.importPackage(com.zhekasmirnov.apparatus.multiplayer.server);
const excludeString = function (str, match) {
    if (str == null) {
        return null;
    }
    let index = str.indexOf(match);
    if (index == -1) {
        return null;
    }
    return [str.substring(0, index), str.substring(index + match.length)];
};
const setOfArraysToPrintable = function (setOfArrays) {
    let printable = "" + setOfArrays.toString();
    printable = printable.replace("{", "{\n\t");
    printable = printable.replace("}", "\n}");
    printable = printable.replace(/\],\s/g, "],\n\t");
    return printable;
};
const printSetOfArraysField = function (clazz, field, instance) {
    try {
        let declaredSetField = $[clazz].__javaObject__.getDeclaredField(field);
        declaredSetField.setAccessible(true);
        let declaredSet = declaredSetField.get(instance);
        Logger.Log(clazz + "." + field + ": " + setOfArraysToPrintable(declaredSet), __name__);
    }
    catch (e) {
        Logger.Log(clazz + "." + field + ": " + e, "WARNING");
    }
};
let preferredPackName, prefferedPackVersionName, prefferedPackVersionCode;
const analyzeMultiplayerPackVersion = function (message) {
    let lines = message.split("\n");
    for (let i = 0, l = lines.length; i < l; i++) {
        if (lines[i].substring(0, 16) != "server version: ") {
            continue;
        }
        let content = excludeString(lines[i].substring(16), " (code=");
        if (content == null) {
            Logger.Log("analyzeMultiplayerPackVersion: (code=) construction cannot be transpiled!", "WARNING");
            continue;
        }
        let indexOfEnclosingBracket = content[1].indexOf(")");
        if (indexOfEnclosingBracket == -1) {
            Logger.Log("analyzeMultiplayerPackVersion: enclosing packVersionCode bracket not found!", "WARNING");
            continue;
        }
        let indexOfVersion = content[0].search(/\s\d+\.\d+/);
        if (indexOfVersion == -1) {
            indexOfVersion = content[0].search(/\sv\d+/);
            if (indexOfVersion == -1) {
                Logger.Log("analyzeMultiplayerPackVersion: packVersionName digit not found, using last part!", "WARNING");
                indexOfVersion = content[0].lastIndexOf(" ") + 1;
            }
        }
        preferredPackName = content[0].substring(0, indexOfVersion - 1);
        prefferedPackVersionName = content[0].substring(indexOfVersion);
        prefferedPackVersionCode = parseInt(content[1].substring(indexOfEnclosingBracket));
        return true;
    }
    return false;
};
const createMultiplayerPackVersion = function () {
    let packInfo = new org.json.JSONObject();
    packInfo.put("name", preferredPackName || $.PackInfo.getPackName());
    packInfo.put("versionName", prefferedPackVersionName || $.PackInfo.getPackVersionName());
    packInfo.put("versionCode", prefferedPackVersionCode || $.PackInfo.getPackVersionCode());
    return packInfo;
};
let prefferedMissingMods, prefferedExcessMods, prefferedIncompatibleMods;
const analyzeMultiplayerModList = function (message) {
    let token = 0, prefferedTokenList, successfully = false;
    prefferedMissingMods = {};
    prefferedExcessMods = {};
    prefferedIncompatibleMods = {};
    let lines = message.split("\n");
    for (let i = 0, l = lines.length; i < l; i++) {
        if (lines[i] == "{{loc: multiplayer_mod_missing}}") {
            token = 1;
            prefferedTokenList = prefferedMissingMods;
        } else {
            if (lines[i] == "{{loc: multiplayer_mod_excess}}") {
                token = 2;
                prefferedTokenList = prefferedExcessMods;
            } else {
                if (lines[i] == "{{loc: multiplayer_mod_different_version}}") {
                    token = 3;
                    prefferedTokenList = prefferedIncompatibleMods;
                } else {
                    if (lines[i].substring(0, 7) == "{{loc: ") {
                        Logger.Log("analyzeMultiplayerModList: unsupported token " + lines[i] + ", it will be ignored!", "WARNING");
                    } else {
                        let content = lines[i];
                        if (token == 0 || content.trim() == "") {
                            continue;
                        }
                        let version;
                        if (token == 3) {
                            let requiredVersionDelimited = excludeString(content, ", server version: ");
                            if (requiredVersionDelimited == null) {
                                Logger.Log("analyzeMultiplayerModList: unsupported 'incompatible' target " + content + ", it will be ignored!", "WARNING");
                                continue;
                            }
                            content = requiredVersionDelimited[0];
                            version = requiredVersionDelimited[1];
                        }
                        let indexOfSeparator = content.lastIndexOf(":");
                        if (indexOfSeparator == -1) {
                            Logger.Log("analyzeMultiplayerModList: unsupported mod structure " + content + ", it will be ignored!", "WARNING");
                            continue;
                        }
                        let name = content.substring(0, indexOfSeparator);
                        if (token != 3) {
                            version = content.substring(indexOfSeparator + 1);
                        }
                        if (prefferedTokenList.hasOwnProperty(name)) {
                            Logger.Log("analyzeMultiplayerModList: duplicated mod name " + name + ", it will be overwrited!", "WARNING");
                        }
                        successfully = true;
                        prefferedTokenList[name] = version;
                    }
                }
            }
        }
    }
    return successfully;
};
const createMultiplayerModList = function () {
    let packet = new org.json.JSONObject();
    let modList = new org.json.JSONArray();
    packet.put("list", modList);
    if (prefferedMissingMods) {
        for (let modName in prefferedMissingMods) {
            let modJson = new org.json.JSONObject();
            modJson.put("name", modName);
            modJson.put("version", prefferedMissingMods[modName]);
            modList.put(modJson);
        }
    }
    let mods = $.ApparatusModLoader.getSingleton().getAllMods();
    for (let i = 0, l = mods.size(); i < l; i++) {
        let modInfo = mods.get(i).getInfo();
        if (modInfo.getBoolean("client_only")) {
            continue;
        }
        let modName = modInfo.getString("name");
        if (prefferedExcessMods && prefferedExcessMods.hasOwnProperty(modName)) {
            continue;
        }
        let modJson = new org.json.JSONObject();
        modJson.put("name", modName);
        let modVersion = modInfo.getString("version");
        if (prefferedIncompatibleMods && prefferedIncompatibleMods.hasOwnProperty(modName)) {
            modJson.put("version", prefferedIncompatibleMods[modName]);
        } else {
            modJson.put("version", modVersion);
        }
        modList.put(modJson);
    }
    return packet;
};
const analyzeDisconnectReason = function (reason) {
    let messages = excludeString(reason, ": ");
    if (messages == null) {
        return false;
    }
    if (messages[1].length > 0) {
        let trimmed = messages[1].trim();
        Logger.Log(trimmed, "DEBUG");
        try {
            $.UserDialog.dialog(null, $.UserDialogLocalization.localize(trimmed));
        }
        catch (e) {
            alert(trimmed);
        }
    }
    let packet = messages[0].substring(22, messages[0].length - 9);
    if (packet == "system.inner_core_build") {
        return analyzeMultiplayerPackVersion(messages[1]);
    } else {
        if (packet == "system.mod_list") {
            return analyzeMultiplayerModList(messages[1]);
        } else {
            Logger.Log("unsupported packet " + packet + " received, aborting reconnection!", "WARNING");
            return false;
        }
    }
    return true;
};
const resetPrefferedOptions = function () {
    prefferedMissingMods = null;
    prefferedExcessMods = null;
    prefferedIncompatibleMods = null;
    preferredPackName = null;
    prefferedPackVersionName = null;
    prefferedPackVersionCode = null;
    prefferedHost = null;
    prefferedRetryings = 0;
};
let prefferedRetryings = 0;
Network.getClient().addOnDisconnectedListener(function (reason) {
    if (!analyzeDisconnectReason(reason)) {
        return;
    }
    if (prefferedRetryings >= 2) {
        Logger.Log("reconnecting cancelled, too many attempts!", "WARNING");
        return;
    }
    Logger.Log("reconnecting after disconnect analyzing", "DEBUG");
    Network.getNetworkInstance().startClient(prefferedHost);
    prefferedRetryings++;
});
let prefferedHost;
Callback.addCallback("ConnectingToHost", function (host, minecraftPort, moddedPort) {
    resetPrefferedOptions();
    prefferedHost = host;
});
Callback.addCallback("LocalLevelPreLeft", function () {
    resetPrefferedOptions();
});
(function (client) {
    try {
        let onRequestingConnectionListenersField = $.ModdedClient.__javaObject__.getDeclaredField("onRequestingConnectionListeners");
        onRequestingConnectionListenersField.setAccessible(true);
        let onDisconnectedListenersField = $.ModdedClient.__javaObject__.getDeclaredField("onDisconnectedListeners");
        onDisconnectedListenersField.setAccessible(true);
        let onRequestingConnectionListeners = onRequestingConnectionListenersField.get(client);
        for (let i = 1, l = onRequestingConnectionListeners.size(); i < l; i++) {
            let listener = onRequestingConnectionListeners.get(i);
            try {
                let packetField = getClass(listener).__javaObject__.getDeclaredField("f$1");
                packetField.setAccessible(true);
                let packet = "" + packetField.get(listener);
                if (packet == "system.inner_core_build") {
                    if (!__config__.getBool("override_pack")) {
                        continue;
                    }
                    client.addOnRequestingConnectionListener(function () {
                        client.send("system.inner_core_build", createMultiplayerPackVersion());
                    });
                } else {
                    if (packet == "system.mod_list") {
                        client.addOnRequestingConnectionListener(function () {
                            client.send("system.mod_list", createMultiplayerModList());
                        });
                    } else {
                        continue;
                    }
                }
                onRequestingConnectionListeners.remove(i--);
                l--;
            }
            catch (e) {
                Logger.Log("requesting connection listener cannot be replaced: " + e, "WARNING");
            }
        }
        onDisconnectedListenersField.get(client).remove(0);
    }
    catch (e) {
        Logger.Log("no such field onDisconnectedListeners/onRequestingConnectionListeners, your version is not supported!", "ERROR");
    }
})(Network.getClient());

