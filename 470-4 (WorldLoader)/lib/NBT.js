LIBRARY({name: "NBT", version: "1", api: "CoreEngine", dependencies: ["FileAPI"]});
IMPORT("FileAPI");
var NBT = function (file) {
    if (typeof file == "string") {
        file = new File(file);
    }
    var header = [0, 0], valid = true;
    this.name = "";
    this.value = {};
    function fail() {
        valid = false;
        file.close();
    }
    var readValue = function (t) {
        var v;
        switch (t) {
          case 1:
            v = file.readByte();
            break;
          case 2:
            v = file.readShort();
            break;
          case 3:
            v = file.readInt();
            break;
          case 4:
            v = file.readLong();
            break;
          case 5:
            v = file.readFloat();
            break;
          case 6:
            v = file.readDouble();
            break;
          case 8:
            v = file.readString();
            break;
          case 9:
            t = file.readByte();
            if (t === false) {
                valid = false;
                break;
            }
            s = file.readInt();
            if (s === false) {
                valid = false;
                break;
            }
            v = [];
            if (s > 0) {
                for (var i = 0; i < s; i++) {
                    v.push(readValue(t).value);
                }
            }
            break;
          case 10:
            var v = {get: function (a) {
                return this[a].value;
            }};
            while ((t = file.readByte()) != 0) {
                s = file.readString();
                if (s === false) {
                    valid = false;
                    break;
                }
                v[s] = readValue(t);
                if (v[s] === false) {
                    valid = false;
                    break;
                }
            }
            t = 10;
            break;
        }
        if (v === false) {
            valid = false;
            return false;
        }
        return {type: t, value: v};
    };
    file.openRead();
    try {
        header[0] = file.readInt();
        if (header[0] === false) {
            fail();
        }
        header[1] = file.readInt();
        if (header[1] === false) {
            fail();
        }
        if (file.readByte() != 10) {
            fail();
        }
        this.name = file.readString();
        if (this.name === false) {
            fail();
        }
        var type, name;
        while ((type = file.readByte()) && valid) {
            name = file.readString();
            if (name === false) {
                fail();
            }
            switch (type) {
              case 1:
              case 2:
              case 3:
              case 4:
              case 5:
              case 6:
              case 8:
              case 9:
              case 10:
                this.value[name] = readValue(type);
                break;
            }
        }
        file.close();
    }
    catch (e) {
        alert("FAIL! File is not valid!");
    }
    function writeBasicValue(t, v) {
        switch (t) {
          case 1:
            file.writeByte(v);
            break;
          case 2:
            file.writeShort(v);
            break;
          case 3:
            file.writeInt(v);
            break;
          case 4:
            file.writeLong(v);
            break;
          case 5:
            file.writeFloat(v);
            break;
          case 6:
            file.writeDouble(v);
            break;
          case 8:
            file.writeString(v);
            break;
        }
    }
    function writeValue(name, t, v) {
        Logger.Log(name + ":" + t + ":" + v, "NBT WRITEVALUE");
        if (typeof v == "object" && !(v instanceof java.lang.String)) {
            if (t == 10) {
                file.writeByte(10);
                file.writeString(name);
                for (var i in v) {
                    if (typeof v[i] == "function") {
                        return;
                    }
                    writeValue(i, v[i].type, v[i].value);
                }
                file.writeByte(0);
            } else {
                file.writeByte(9);
                file.writeString(name);
                file.writeByte(t);
                var s = isNaN(v.length) ? v.length() : v.length;
                file.writeInt(s);
                for (var i = 0; i < s; i++) {
                    writeBasicValue(t, v[i]);
                }
            }
        } else {
            file.writeByte(t);
            file.writeString(name);
            writeBasicValue(t, v);
        }
    }
    this.isValid = function () {
        return valid;
    };
    this.get = function (name) {
        return this.value[name].value;
    };
    this.set = function (name, value, type) {
        if (!valid) {
            return;
        }
        if (!this.value[name]) {
            if (!type) {
                throw "Value \"" + name + "\" not found!";
            }
            this.value[name] = {};
        }
        this.value[name].value = value;
        if (type) {
            this.value[name].type = type;
        }
    };
    this.write = function () {
        if (!valid) {
            return;
        }
        try {
            file.openWrite();
            file.writeInt(header[0]);
            file.writeInt(header[1]);
            file.writeByte(10);
            file.writeString(this.name);
            for (var name in this.value) {
                writeValue(name, this.value[name].type, this.value[name].value);
            }
            file.writeByte(0);
            file.close();
        }
        catch (e) {
            alert("NBT Write: " + e);
        }
    };
};
EXPORT("NBT", NBT);

