const Encyption = new Object();
Encyption.encrypt = function (bytes) {
    let skeySpec = new javax.crypto.spec.SecretKeySpec(this.getRaw(), "AES");
    let cipher = javax.crypto.Cipher.getInstance("AES/CBC/PKCS5Padding");
    cipher.init(javax.crypto.Cipher.ENCRYPT_MODE, skeySpec, this.getInitSpec());
    return cipher.doFinal(bytes);
};
Encyption.encryptString = function (string) {
    return this.encrypt(new java.lang.String(string).getBytes());
};
Encyption.decrypt = function (bytes) {
    let skeySpec = new javax.crypto.spec.SecretKeySpec(this.getRaw(), "AES");
    let cipher = javax.crypto.Cipher.getInstance("AES/CBC/PKCS5Padding");
    cipher.init(javax.crypto.Cipher.DECRYPT_MODE, skeySpec, this.getInitSpec());
    return cipher.doFinal(bytes);
};
Encyption.decryptAsString = function (bytes) {
    return new java.lang.String(this.decrypt(bytes));
};
Encyption.getInitSpec = function () {
    let bytes = new java.lang.String("8119745113154120").getBytes();
    return new javax.crypto.spec.IvParameterSpec(bytes);
};
Encyption.getRaw = function () {
    let keyChar = new java.lang.String(this.char).toCharArray();
    let keySalt = new java.lang.String(this.salt).getBytes();
    let factory = javax.crypto.SecretKeyFactory.getInstance("PBKDF2WithHmacSHA1");
    let spec = new javax.crypto.spec.PBEKeySpec(keyChar, keySalt, 10, 128);
    return factory.generateSecret(spec).getEncoded();
};
Encyption.updateKey = function (char, salt) {
    this.char = char, this.salt = salt;
};
const checkValidate = function (action) {
    tryoutSafety(function () {
        const key = new java.io.File(Dirs.DATA, "validate.dnk");
        const prepareKey = function (user) {
            let id = user.id, code = user.code;
            if (id != getUserCode() || code != REVISION) {
                showValidateInformation(checkValidate.LIMITED);
                return (key.exists() && key.delete(), false);
            }
            let type = user.type;
            if (type == checkValidate.LIQUIDATE) {
                showValidateInformation(checkValidate.LIQUIDATE);
                return false;
            }
            let left = Date.now() - user.date;
            if (left > (type == "premium" ? 7 : 3) * 86400000 || left < 0) {
                showValidateInformation(checkValidate.DEPRECATED);
                return false;
            } else {
                let days = Math.ceil(((type == "premium" ? 7 : 3) * 86400000 - left) / 86400000);
                if (days == 1) {
                    showHint(translate("Key will be expired today, please check network connection"));
                } else {
                    if (REVISION.startsWith("develop")) {
                        showHint(translate("Before key expires: %s days", days));
                    }
                }
                if (days <= 2) {
                    keyExpiresSoon = true;
                }
            }
            return true;
        };
        handleThread(function () {
            tryout(function () {
                let ACTIVE = true;
                while (ACTIVE) {
                    Server.checkInvolvement({onValidated: function (result) {
                        tryout(function () {
                            ACTIVE = false;
                            if (result == "valid" || result == "premium" || result == "liquidate") {
                                let user = {id: getUserCode(), date: Date.now(), code: REVISION, type: result};
                                let process = showProcesses;
                                showProcesses = false;
                                stringifyObject(user, false, function (obj) {
                                    Encyption.updateKey("nernar", "editorValidate");
                                    let bytes = Encyption.encryptString(obj);
                                    Files.writeBytes(key, bytes);
                                    showProcesses = process;
                                    if (result != "liquidate") {
                                        handle(function () {
                                            action && action();
                                        });
                                    } else {
                                        showValidateInformation(checkValidate.LIQUIDATE);
                                    }
                                });
                            } else {
                                if (result == "invalid") {
                                    showValidateInformation(checkValidate.LIMITED);
                                } else {
                                    if (result == "preview") {
                                        if (REVISION.indexOf("preview") != -1) {
                                            handle(function () {
                                                action && action();
                                            });
                                        } else {
                                            showValidateInformation(checkValidate.LIMITED);
                                        }
                                    } else {
                                        if (result.startsWith("message: ")) {
                                            checkValidate.message = result.replace("message: ", new String());
                                            showValidateInformation(checkValidate.BANNED);
                                        } else {
                                            showValidateInformation(checkValidate.UNKNOWN);
                                        }
                                    }
                                }
                            }
                        }, function (e) {
                            showValidateInformation(checkValidate.UNKNOWN);
                        });
                    }, onValidateFailed: function () {
                        Server.tryChangeLocation();
                    }});
                }
            }, function (e) {
                if (key.exists()) {
                    let bytes = Files.readBytes(key);
                    Encyption.updateKey("nernar", "editorValidate");
                    let string = Encyption.decryptAsString(bytes);
                    let user = compileData(string, "object");
                    if (user instanceof Error) {
                        showValidateInformation(checkValidate.DEPRECATED);
                        REVISION.startsWith("develop") && reportError(user);
                    } else {
                        if (typeof user == "object") {
                            handle(function () {
                                if (prepareKey(user)) {
                                    action && action();
                                }
                            });
                        }
                    }
                    return;
                } else {
                    handle(function () {
                        action && action();
                        showHint(translate("Couldn't connect to validate right now"));
                    });
                }
            });
        });
    }, function (e) {
        showValidateInformation(checkValidate.UNKNOWN);
    });
};
checkValidate.VALID = 0;
checkValidate.LICENSED = 1;
checkValidate.NO_CONNECTION = 2;
checkValidate.LIMITED = 3;
checkValidate.DEPRECATED = 4;
checkValidate.LIQUIDATE = 5;
checkValidate.BANNED = 6;
checkValidate.UNKNOWN = 7;
const isFirstLaunch = function () {
    return tryoutSafety(function () {
        const key = new java.io.File(Dirs.DATA, "validate.dnk");
        return !key.exists() && loadSetting("user_login.first_launch", "boolean");
    }, false);
};
const showValidateInformation = function (type) {
    type != checkValidate.LIQUIDATE ? handle(function () {
        tryoutSafety(function () {
            if (ignoreKeyDeprecation) {
                return;
            }
            let control = new MenuWindow();
            control.addHeader();
            if (type == checkValidate.NO_CONNECTION) {
                control.addMessage("menuNetwork", translate("To complete modification installation connect to any network, at current moment mod deactivated it's abilities to develop content."));
            } else {
                if (type == checkValidate.LIMITED) {
                    control.addMessage("menuNetworkUser", translate("You can't use this modification without access for testing abilities. Contact with developer, it's may takes result."));
                } else {
                    if (type == checkValidate.DEPRECATED) {
                        control.addMessage("menuNetworkKey", translate("Previous user key is deprecated, you should to connect any network for check your abilities. Anyway, your projects is always safe."));
                    } else {
                        if (type == checkValidate.UNKNOWN) {
                            control.addMessage("menuBoardReset", translate("Unknown exception is catched, please retry modification installation or try later."));
                        } else {
                            if (type == checkValidate.BANNED) {
                                control.addMessage("menuBoardConfig", translate(checkValidate.message));
                            }
                        }
                    }
                }
            }
            let group = control.addCategory(translate("Actions"));
            group.addItem("menuProjectImport", translate("Retry"), function (item) {
                control.hide(), initialize();
            });
            group.addItem("menuNetworkUser", translate("Contact"), function (item) {
                let intent = new android.content.Intent(android.content.Intent.ACTION_VIEW, android.net.Uri.parse("https://vk.com/im?sel=-168765348"));
                context.startActivity(intent);
            });
            if (type != checkValidate.NO_CONNECTION) {
                group.addItem("menuNetworkConnect", translate("Buy"), function (item) {
                    let intent = new android.content.Intent(android.content.Intent.ACTION_VIEW, android.net.Uri.parse("https://vk.com/club168765348?act=donut_payment"));
                    context.startActivity(intent);
                });
            }
            group.addItem("menuProjectLeave", translate("Ignore"), function (item) {
                __config__.set("user_login.ignore_deprecation", true);
                __config__.save(), control.hide();
            });
            let hasRemoveMessage = false;
            group.addItem("controlRemove", translate("Remove"), function (item) {
                if (!hasRemoveMessage) {
                    let message = control.addMessage("menuBoardWarning", translate("Modification will be uninstalled.") + " " + translate("Touch here to confirm."), function () {
                        Files.deleteRecursive(__dir__);
                        control.removeElement(message);
                        control.hide();
                    });
                    handle(function () {
                        control.scrollToElement(message);
                    }, 500);
                    handle(function () {
                        control.removeElement(message);
                        hasRemoveMessage = false;
                    }, 5000);
                    hasRemoveMessage = true;
                }
            });
            control.show();
        });
    }) : Files.deleteRecursive(__dir__);
};

