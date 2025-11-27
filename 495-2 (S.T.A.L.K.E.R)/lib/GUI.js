LIBRARY({name: "GUILib", version: 2, api: "CoreEngine"});
var Bitmap = android.graphics.Bitmap, BitmapFactory = android.graphics.BitmapFactory, Color = android.graphics.Color, Rect = android.graphics.Rect, Typeface = android.graphics.Typeface, BitmapDrawable = android.graphics.drawable.BitmapDrawable, ColorDrawable = android.graphics.drawable.ColorDrawable, Drawable = android.graphics.drawable.Drawable, NinePatchDrawable = android.graphics.drawable.NinePatchDrawable, Button = android.widget.Button, ImageView = android.widget.ImageView, EditText = android.widget.EditText, LinearLayout = android.widget.LinearLayout, PopupWindow = android.widget.PopupWindow, RelativeLayout = android.widget.RelativeLayout, TextView = android.widget.TextView, ScrollView = android.widget.ScrollView, EditorInfo = android.view.inputmethod.EditorInfo, MotionEvent = android.view.MotionEvent, View = android.view.View, ViewGroup = android.view.ViewGroup, inLevel = false;
if (!Object.assign) {
    Object.assign = function (target, obj) {
        for (var i in obj) {
            if (typeof (obj[i]) == "object") {
                target[i] = Object.assign({}, obj[i]);
            } else {
                target[i] = obj[i];
            }
        }
        return target;
    };
}
var GUI = {test: function (window) {
    (new GUI.Container()).open(window);
}, ctx: UI.getContext(), Native: {classLoader: UI.getContext().getClass().getClassLoader(), t_int: java.lang.Integer.TYPE, t_str: java.lang.String}, Gravity: {TOP: 48, LEFT: 3, BOTTOM: 80, RIGHT: 5, CENTER: 17}, Size: {MATCH_PARENT: -1, WRAP_CONTENT: -2, getHeightWindow: function () {
    return GUI.Size.HEIGHT - GUI.getUnitsInPixels(10);
}, getWidthWindow: function () {
    return GUI.Size.WIDTH - GUI.getUnitsInPixels(10);
}}, Direction: {TOP: 4, BOTTOM: 1, RIGHT: 2, LEFT: 3}, Tab: {TOP: 1, BOTTOM: 2, LEFT: 3, RIGHT: 4}, DefaultTextures: {header: {name: "GUILib.png", assets: false, bitmap: {x: 0, y: 0, width: 6, height: 6, ninePatch: {x: [2, 4], y: [2, 4], colors: [1, 1, 1, 1, 1, 1, 1, 1, 1]}, _ninePatch: [{x: 2, y: 2}, {x: 4, y: 4}], scale: 6}}, panel: {name: "GUILib.png", assets: false, bitmap: {x: 6, y: 0, width: 6, height: 6, ninePatch: {x: [2, 3], y: [2, 3], colors: [1, 1, 1, 1, 1, 1, 1, 1, 1]}, _ninePatch: [{x: 2, y: 2}, {x: 3, y: 3}], scale: 6}}, button: {normal: {name: "GUILib.png", assets: false, bitmap: {x: 6, y: 6, width: 6, height: 6, ninePatch: {x: [1, 5], y: [1, 5], colors: [1, 1, 1, 1, 1, 1, 1, 1, 1]}, _ninePatch: [{x: 1, y: 1}, {x: 5, y: 5}], scale: 6}}, pressed: {name: "GUILib.png", assets: false, bitmap: {x: 0, y: 6, width: 6, height: 6, ninePatch: {x: [1, 5], y: [1, 5], colors: [1, 1, 1, 1, 1, 1, 1, 1, 1]}, _ninePatch: [{x: 1, y: 1}, {x: 5, y: 5}], scale: 6}}}, editText: {name: "GUILib.png", bitmap: {x: 0, y: 12, width: 3, height: 5, ninePatch: {x: [1, 2], y: [2, 3], colors: [1, 1, 1, 1, 1, 1, 1, 1, 1]}, _ninePatch: [{x: 1, y: 2}, {x: 2, y: 3}], scale: 4}}, exitButton: {normal: {name: "GUILib.png", assets: false, bitmap: {x: 12, y: 0, width: 18, height: 18, scale: 4.5}}, pressed: {name: "GUILib.png", assets: false, bitmap: {x: 30, y: 0, width: 18, height: 18, scale: 4.5}}}, exitButtonDialog: {normal: {name: "GUILib.png", bitmap: {x: 0, y: 18, width: 15, height: 15, scale: 4.5}}, pressed: {name: "GUILib.png", bitmap: {x: 15, y: 18, width: 15, height: 15, scale: 4.5}}}, scales: {vertical: {empty: {name: "GUILib.png", assets: false, bitmap: {x: 57, y: 20, width: 13, height: 13, scale: 6}}, full: {name: "GUILib.png", assets: false, bitmap: {x: 70, y: 20, width: 13, height: 13, scale: 6}}}, horizontal: {empty: {name: "GUILib.png", assets: false, bitmap: {x: 84, y: 18, width: 22, height: 15, scale: 6}}, full: {name: "GUILib.png", assets: false, bitmap: {x: 106, y: 18, width: 22, height: 15, scale: 6}}}}, ok: {name: "GUILib.png", bitmap: {x: 30, y: 18, width: 15, height: 12, scale: 4.5}}, cancel: {name: "GUILib.png", bitmap: {x: 45, y: 18, width: 12, height: 12, scale: 4.5}}, tabs: {top: {pressed: {name: "GUILib.png", assets: false, bitmap: {x: 84, y: 6, width: 6, height: 6, ninePatch: {x: [2, 4], y: [2, 4], colors: [1, 1, 1, 1, 1, 1, 1, 1, 1]}, _ninePatch: [{x: 2, y: 2}, {x: 4, y: 4}], scale: 6}}, normal: {name: "GUILib.png", assets: false, bitmap: {x: 90, y: 6, width: 6, height: 6, ninePatch: {x: [2, 4], y: [2, 4], colors: [1, 1, 1, 1, 1, 1, 1, 1, 1]}, _ninePatch: [{x: 2, y: 2}, {x: 4, y: 4}], scale: 6}}}, bottom: {pressed: {name: "GUILib.png", assets: false, bitmap: {x: 108, y: 6, width: 6, height: 6, ninePatch: {x: [2, 4], y: [3, 4], colors: [1, 1, 1, 1, 1, 1, 1, 1, 1]}, _ninePatch: [{x: 2, y: 3}, {x: 4, y: 4}], scale: 6}}, normal: {name: "GUILib.png", assets: false, bitmap: {x: 114, y: 6, width: 6, height: 6, ninePatch: {x: [2, 4], y: [3, 4], colors: [1, 1, 1, 1, 1, 1, 1, 1, 1]}, _ninePatch: [{x: 2, y: 3}, {x: 4, y: 4}], scale: 6}}}}, slot: {name: "GUILib.png", bitmap: {x: 48, y: 0, width: 16, height: 16, scale: 4}}, frame_slot: {name: "GUILib.png", bitmap: {x: 64, y: 0, width: 20, height: 20, scale: 4}}}, SIZE_SLOT: 16, MARGIN_SLOT: 2, clearExtra: new ItemExtraData(), bitmaps: {}, assets: {}, run: function (f) {
    GUI.ctx.runOnUiThread(new java.lang.Runnable({run: function () {
        f();
    }}));
}, BitmapException: function (settings, error) {
    this.settings = settings;
    this.toString = function () {
        return error;
    };
}, DrawableException: function (settings, error) {
    this.settings = settings;
    this.toString = function () {
        return error;
    };
}, IElementException: function (element, error) {
    this.element = element;
    this.toString = function () {
        return error;
    };
}, IWindowExeption: function (element, error) {
    this.element = element;
    this.toString = function () {
        return error;
    };
}, getUnitsInPixels: function (units) {
    units = parseInt(units);
    if (isNaN(units)) {
        throw "units is not a number";
    }
    return GUI.Size.WIDTH / 1000 * units;
}, getFloorUnitInPixels: function (units) {
    return Math.floor(GUI.getUnitsInPixels(units));
}, getScaledBitmap: function (bitmap, width, height) {
    width = parseInt(width);
    if (isNaN(width)) {
        throw "width is not a number";
    }
    height = parseInt(height);
    if (isNaN(height)) {
        throw "height is not a number";
    }
    return Bitmap.createScaledBitmap(bitmap, width, height, false);
}, generateBitmap: function (a) {
    for (var i = 0; i < a.length; i++) {
        GUI.getBitmap(a[i].name, a[i].assets || false);
    }
}, getBitmap: function (path, assets) {
    if (!assets) {
        assets = false;
    }
    if (assets) {
        if (GUI.assets.hasOwnProperty(path)) {
            return GUI.assets[path];
        } else {
            return GUI.assets[path] = FileTools.ReadImageAsset(path);
        }
    } else {
        if (GUI.bitmaps.hasOwnProperty(path)) {
            return GUI.bitmaps[path];
        } else {
            return GUI.bitmaps[path] = new BitmapFactory.decodeFile(__dir__ + GUI.path + path);
        }
    }
}, createBitmap: function (settings, def) {
    if (settings instanceof Bitmap) {
        return settings;
    }
    if (typeof (settings) != "object") {
        if (typeof (def) != "object") {
            throw new GUI.BitmapException(settings, "settings is not object");
        }
        settings = def;
    }
    if (typeof (def) != "object") {
        def = {};
    }
    if (settings.name === undefined) {
        settings.name = def.name || "GUILib.png";
        Logger.Log("settings.name is not defined, set to \"" + settings.name + "\"", "Warning");
    }
    if (settings.assets === undefined) {
        settings.assets = def.assets || false;
        Logger.Log("settings.assets is not defined, set to " + (settings.assets ? "true" : "false"), "Warning");
    }
    if (typeof (settings.bitmap) != "object") {
        settings.bitmap = def.bitmap || {};
    }
    if (settings.bitmap.x === undefined) {
        if (!def.bitmap || !def.bitmap.x) {
            Logger.Log("No standard value found for settings.bitmap.x", "Warning");
        } else {
            settings.bitmap.x = def.bitmap.x;
        }
    }
    if (settings.bitmap.y === undefined) {
        if (!def.bitmap || !def.bitmap.y) {
            Logger.Log("No standard value found for settings.bitmap.y", "Warning");
        } else {
            settings.bitmap.y = def.bitmap.y;
        }
    }
    if (settings.bitmap.width === undefined) {
        if (!def.bitmap || !def.bitmap.width) {
            Logger.Log("No standard value found for settings.bitmap.width", "Warning");
        } else {
            settings.bitmap.width = def.bitmap.width;
        }
    }
    if (settings.bitmap.height === undefined) {
        if (!def.bitmap || !def.bitmap.height) {
            Logger.Log("No standard value found for settings.bitmap.height", "Warning");
        } else {
            settings.bitmap.height = def.bitmap.height;
        }
    }
    if (settings.bitmap.scale === undefined) {
        settings.bitmap.scale = def.bitmap ? (def.bitmap.scale || 1) : 1;
        Logger.Log("settings.bitmap.scale is not defined, set to " + settings.bitmap.scale, "Warning");
    }
    if (settings.bitmap.scale < 1) {
        throw new GUI.BitmapException(settings, "settings.bitmap.scale cannot be < 1");
    }
    var bitmap = GUI.getBitmap(settings.name, settings.assets);
    if (settings.bitmap.x != null && settings.bitmap.y != null && settings.bitmap.width != null && settings.bitmap.height != null) {
        bitmap = new Bitmap.createBitmap(bitmap, settings.bitmap.x, settings.bitmap.y, settings.bitmap.width, settings.bitmap.height);
    } else {
        if (!(settings.bitmap.x === undefined && settings.bitmap.y === undefined && settings.bitmap.width === undefined && settings.bitmap.height === undefined)) {
            if (settings.bitmap.x === undefined) {
                throw new GUI.BitmapException(settings, "No standard value found for settings.bitmap.x");
            }
            if (settings.bitmap.y === undefined) {
                throw new GUI.BitmapException(settings, "No standard value found for settings.bitmap.y");
            }
            if (settings.bitmap.width === undefined) {
                throw new GUI.BitmapException(settings, "No standard value found for settings.bitmap.width");
            }
            if (settings.bitmap.height === undefined) {
                throw new GUI.BitmapException(settings, "No standard value found for settings.bitmap.height");
            }
        } else {
            settings.bitmap.height = bitmap.getHeight();
            settings.bitmap.width = bitmap.getWidth();
        }
    }
    if (settings.bitmap.scale > 1) {
        bitmap = GUI.getScaledBitmap(bitmap, settings.bitmap.scale * settings.bitmap.width, settings.bitmap.scale * settings.bitmap.height);
    }
    return bitmap;
}, createDrawable: function (settings, def) {
    if (typeof (settings) != "object") {
        if (typeof (def) != "object") {
            throw new GUI.DrawableException(settings, "<b>settings</b> is not object");
        }
        settings = def;
    }
    if (typeof (def) != "object") {
        def = {};
    }
    if (settings instanceof Bitmap) {
        return new BitmapDrawable(settings);
    }
    if (settings instanceof Drawable) {
        return settings;
    }
    var drawable = GUI.createBitmap(settings, def);
    if (settings.bitmap && settings.bitmap.ninePatch) {
        drawable = new GUI.createNinePatchDrawable(drawable, settings.bitmap.ninePatch, settings.bitmap.scale);
    } else {
        drawable = new BitmapDrawable(drawable);
    }
    return drawable;
}, createNinePatchDrawable: function (drawable, nP, scale) {
    return new NinePatchDrawable(GUI.ctx.getResources(), drawable, GUI.createNinePatchChunk(nP.x, nP.y, nP.colors, scale), new Rect(), "");
}, createNinePatchChunk: function (x, y, c, scale) {
    if (!scale) {
        scale = 1;
    }
    let xL = x.length, yL = y.length, cL = c.length;
    var a = java.nio.ByteBuffer.allocate(32 + (xL + yL + cL) * 4).order(java.nio.ByteOrder.nativeOrder());
    a.put(1);
    a.put(xL);
    a.put(yL);
    a.put(cL);
    a.putInt(0);
    a.putInt(0);
    a.putInt(0);
    a.putInt(0);
    a.putInt(0);
    a.putInt(0);
    a.putInt(0);
    for (let i = 0; i < xL; i++) {
        a.putInt(x[i] * scale);
    }
    for (let i = 0; i < yL; i++) {
        a.putInt(y[i] * scale);
    }
    for (let i = 0; i < cL; i++) {
        a.putInt(c[i] * scale);
    }
    return a.array();
}, Container: function () {
    var container = this;
    var window = null;
    var opened = false;
    var selectedSlot = null;
    var storage = {slots: {}, other: {}};
    var popup = new PopupWindow();
    popup.setAnimationStyle(android.R.style.Animation);
    var view = new RelativeLayout(GUI.ctx);
    this.getWindow = function () {
        return window || false;
    };
    this.open = function (w) {
        if (this.isOpened()) {
            this.close();
        }
        opened = true;
        window = w;
        window.container = container;
        popup.setOnDismissListener(new PopupWindow.OnDismissListener() {onDismiss: function () {
        }});
        if (w.animation) {
            popup.setAnimationStyle(android.R.style[w.animation]);
        } else {
            popup.setAnimationStyle(android.R.style.Animation);
        }
        window.create(popup);
        GUI.run(function () {
            var _a = 0, _b = 0, _c = GUI.Size.WRAP_CONTENT;
            if (!w.location.width || w.location.width == GUI.Size.MATCH_PARENT) {
                _a = GUI.getUnitsInPixels(5);
                _c = GUI.Size.MATCH_PARENT;
            }
            if (!w.location.height || w.location.height == GUI.Size.MATCH_PARENT) {
                _b = GUI.getUnitsInPixels(5);
                _c = GUI.Size.MATCH_PARENT;
            }
            if (w.location.height == GUI.Size.HEIGHT || w.location.width == GUI.Size.WIDTH) {
                _c = GUI.Size.MATCH_PARENT;
            }
            var param = new RelativeLayout.LayoutParams(_c, _c);
            param.setMargins(_a, _b, _a, _b);
            view.addView(w.view, param);
            popup.setWidth(w.location.width || GUI.Size.MATCH_PARENT);
            popup.setHeight(w.location.height || GUI.Size.MATCH_PARENT);
            popup.setContentView(view);
            popup.setFocusable(w.focus);
            popup.showAtLocation(GUI.ctx.getWindow().getDecorView(), w.location.gravity || (GUI.Gravity.LEFT | GUI.Gravity.TOP), w.location.x || 0, w.location.y || 0);
        });
        container.refreshSlots();
    };
    this.close = function () {
        if (this.isOpened() != false) {
            var slots = this.getWindow().getElementsByType("slot");
            this.selectSlot(null);
        }
        GUI.run(function () {
            try {
                view.removeAllViews();
            }
            catch (e) {
            }
            popup.dismiss();
        });
        opened = false;
    };
    this.isOpened = function () {
        return opened;
    };
    this.setStorage = function (name, value) {
        storage.other[name] = value;
    };
    this.getStorage = function (name) {
        if (!storage.other[name]) {
            throw "Not found storage with name \"" + name + "\"";
        }
        return storage.other[name];
    };
    this.getSlotStorage = function (name) {
        return storage.slots[name] || {id: 0, count: 0, data: 0, extra: null};
    };
    this.getSlot = function (name) {
        var slots = this.getWindow().getElementsByType("slot");
        if (slots.hasOwnProperty(name)) {
            return slots[name];
        }
        return false;
    };
    this.clearSlot = function (name) {
        this.setSlot(name, 0, 0, 0, null);
    };
    this.setSlot = function (name, id, count, data, extra) {
        if (name instanceof Object) {
            id = name.id || 0;
            count = name.count == null ? 1 : name.count;
            data = name.data || 0;
            extra = name.extra || null;
            name = name.name;
        }
        if (!name) {
            return;
        }
        if (!id) {
            id = 0;
        }
        if (count == null) {
            count = 1;
        }
        if (!data) {
            data = 0;
        }
        if (!extra) {
            extra = null;
        }
        storage.slots[name] = {id: id, count: count, data: data, extra: extra};
        var slots = this.getWindow().getElementsByType("slot");
        if (slots.hasOwnProperty(name)) {
            return slots[name].setSlot(storage.slots[name]);
        }
        return false;
    };
    this.clear = function () {
        storage.slots = {};
        storage.other = {};
    };
    this.refreshSlots = function (z) {
        let window = this.getWindow();
        if (!window) {
            return;
        }
        let slots = window.getElementsByType("slot");
        for (let i in slots) {
            if (storage.slots[i]) {
                slots[i].setSlot(storage.slots[i]);
            } else {
                slots[i].setSlot(0, 0, 0, null);
            }
        }
        if (window.getInventory() !== false) {
            window.getInventory().refreshSlots();
        }
    };
    this.getSelectedSlotName = function () {
        return this.selectedSlot;
    };
    this.getSelectedSlot = function () {
        if (this.getSelectedSlotName()) {
            var slots = this.getWindow().getElementsByType("slot");
            if (slots.hasOwnProperty(this.selectedSlot)) {
                return slots[this.selectedSlot];
            }
        } else {
            return false;
        }
    };
    this.selectSlot = function (name) {
        var slots = this.getWindow().getElementsByType("slot");
        if (this.selectedSlot != null && slots.hasOwnProperty(this.selectedSlot)) {
            slots[this.selectedSlot].setSelected(false);
        }
        if (name && slots.hasOwnProperty(name)) {
            slots[name].setSelected(true);
        }
        this.selectedSlot = name;
    };
    this.save = function () {
        var _storage = {slots: {}, other: storage.other};
        for (var i in storage.slots) {
            _storage.slots[i] = {id: storage.slots[i].id, data: storage.slots[i].data, count: storage.slots[i].count};
            if (storage.slots[i].extra) {
                _storage.slots[i].extra = storage.slots[i].extra.getAllCustomData();
            }
        }
        return _storage;
    };
    this.read = function (_storage) {
        this.clear();
        storage.other = _storage.other || {};
        if (_storage.slots) {
            for (var i in _storage.slots) {
                storage.slots[i] = {id: _storage.slots[i].id, data: _storage.slots[i].data, count: _storage.slots[i].count};
                if (_storage.slots[i].extra != null) {
                    storage.slots[i].extra = new ItemExtraData();
                    storage.slots[i].extra.setAllCustomData(_storage.slots[i].extra);
                }
            }
        }
        this.refreshSlots();
    };
}, I: function () {
    this.type = null;
    this.view = null;
    this.isCreated = false;
    this.onCreate = function () {
    };
    this.onOpen = function () {
    };
    this.create = function (a) {
        if (!this.isCreated) {
            this.isCreated = true;
            this.onCreate(a);
        }
        this.onOpen(a);
    };
}, IWindow: function () {
    GUI.I.apply(this, arguments);
    this.settings = {};
    this.container = null;
    this.inventory = null;
    this.elements = {};
    this.location = {};
    this.focus = false;
    this.getContainer = function () {
        return this.container;
    };
    this.getElement = function (name) {
        return this.elements[name] || false;
    };
    this.getElementsByType = function (type) {
        var a = {};
        for (var i in this.elements) {
            if (this.elements[i].type == type) {
                a[i] = this.elements[i];
            }
        }
        return a;
    };
    this.addElement = function (name, element) {
        if (GUI.IWindow.ElementTypes.hasOwnProperty(element.type)) {
            this.elements[name] = GUI.IWindow.ElementTypes[element.type](element);
        } else {
            throw new GUI.IElementException(element, "Type <b>\"" + element.type + "\"</b> for elements not found.");
        }
        this.elements[name].window = this;
        this.elements[name].name = name;
        this.elements[name].create();
        if (element.visible != null || element.visibility != null) {
            this.elements[name].setVisibility(element.visible || element.visibility);
        }
        if (element.clicker) {
            if (element.clicker.onClick && this.elements[name].setOnClick) {
                this.elements[name].setOnClick(element.clicker.onClick);
            }
            if (element.clicker.onLongClick && this.elements[name].setOnLongClick) {
                this.elements[name].setOnLongClick(element.clicker.onLongClick);
            }
            if (element.clicker.onTouch && this.elements[name].setOnTouch) {
                this.elements[name].setOnTouch(element.clicker.onTouch);
            }
        }
        var x = 0;
        if (this.inventory) {
            x = this.inventory.getWidth() + GUI.getUnitsInPixels(10) || 0;
        }
        params = new RelativeLayout.LayoutParams(element.width || RelativeLayout.LayoutParams.WRAP_CONTENT, element.height || RelativeLayout.LayoutParams.WRAP_CONTENT);
        params.setMargins(x + (element.x || 0), element.y || 0, 0, 0);
        this.view.addView(this.elements[name].view, params);
    };
    this.onOpenEls = function (a) {
        for (var i in this.elements) {
            this.elements[i].create(this);
        }
    };
    this.create = function (a) {
        if (!this.isCreated) {
            this.isCreated = true;
            this.onCreate(a);
        }
        this.onOpen(a);
        this.onOpenEls(a);
    };
    this.getInventory = function () {
        return this.inventory || false;
    };
    this.setWidth = function (a) {
        this.location.width = a;
    };
    this.setHeight = function (a) {
        this.location.height = a;
    };
    this.setSize = function (w, h) {
        if (!h) {
            h = w;
        }
        this.setWidth(w);
        this.setHeight(h);
    };
    this.preCreate = function () {
    };
}, IElement: function () {
    GUI.I.apply(this, arguments);
    this.window = null;
    this.name = null;
    this.visible = true;
    this.getWindow = function () {
        return this.window;
    };
    this.setOnClick = function (f) {
        var container = this.getWindow().getContainer();
        var element = this;
        var view = this.view;
        GUI.run(function () {
            view.setOnClickListener(new View.OnClickListener() {onClick: function (v) {
                f(container, element);
                return true;
            }});
        });
    };
    this.setOnLongClick = function (f) {
        var container = this.getWindow().getContainer();
        var element = this;
        var view = this.view;
        GUI.run(function () {
            view.setOnLongClickListener(new View.OnLongClickListener() {onLongClick: function (v) {
                f(container, element);
                return true;
            }});
        });
    };
    this.setVisibility = function (b) {
        var view = this.view;
        GUI.run(function () {
            if (b == true) {
                view.setVisibility(View.VISIBLE);
            } else {
                view.setVisibility(View.INVISIBLE);
            }
        });
        this.visible = b;
    };
    this.getVisibility = function () {
        return this.visible;
    };
    this.getParams = function () {
        if (!this.isCreated) {
            return false;
        }
        return new RelativeLayout.LayoutParams(this.view.getLayoutParams());
    };
    this.getPosition = function () {
        params = this.getParams();
        if (!params) {
            return {x: 0, y: 0};
        }
        return {x: params.leftMargin, y: params.topMargin};
    };
    this.getX = function () {
        return this.getPosition().x;
    };
    this.getY = function () {
        return this.getPosition().y;
    };
    this.setPosition = function (x, y) {
        params = this.getParams();
        if (!params) {
            return;
        }
        params.setMargins(x < 0 ? params.leftMargin : x, y < 0 ? params.topMargin : y, 0, 0);
        this.view.setLayoutParams(params);
    };
    this.setX = function (a) {
        this.setPosition(a, -1);
    };
    this.setY = function (a) {
        this.setPosition(-1, a);
    };
    this.addPosition = function (x, y) {
        pos = this.getPosition();
        this.setPosition(pos.x + x, pos.y + y);
    };
    this.addX = function (a) {
        this.setX(this.getX() + a);
    };
    this.addY = function (a) {
        this.setY(this.getY() + a);
    };
}, IScroll: function () {
    GUI.IElement.apply(this);
    this.root = null;
    this.addElement = function (name, element) {
        name = this.name + "." + name;
        if (GUI.IWindow.ElementTypes.hasOwnProperty(element.type)) {
            this.window.elements[name] = GUI.IWindow.ElementTypes[element.type](element);
        } else {
            throw new GUI.IElementException(element, "Type <b>\"" + element.type + "\"</b> for elements not found.");
        }
        this.window.elements[name].window = this.window;
        this.window.elements[name].name = name;
        this.window.elements[name].create();
        if (element.visible != null || element.visibility != null) {
            this.window.elements[name].setVisibility(element.visible || element.visibility);
        }
        if (element.clicker) {
            if (element.clicker.onClick && this.window.elements[name].setOnClick) {
                this.window.elements[name].setOnClick(element.clicker.onClick);
            }
            if (element.clicker.onLongClick && this.window.elements[name].setOnLongClick) {
                this.window.elements[name].setOnLongClick(element.clicker.onLongClick);
            }
            if (element.clicker.onTouch && this.window.elements[name].setOnTouch) {
                this.window.elements[name].setOnTouch(element.clicker.onTouch);
            }
        }
        params = new RelativeLayout.LayoutParams(element.width || RelativeLayout.LayoutParams.WRAP_CONTENT, element.height || RelativeLayout.LayoutParams.WRAP_CONTENT);
        params.setMargins(element.x || 0, element.y || 0, 0, 0);
        this.root.addView(this.window.elements[name].view, params);
    };
}, Window: function (settings) {
    GUI.IWindow.apply(this, arguments);
    this.type = "window";
    if (!settings || typeof settings != "object") {
        settings = {};
    }
    if (!settings.header || typeof settings.header != "object") {
        settings.header = {};
    }
    if (!settings.header.title) {
        settings.header.title = "Window";
        Logger.Log("<b>settings.header.title</b> is not defined, set to <b>\"" + settings.header.title + "\"</b>", "Warning");
    }
    if (!settings.header.height) {
        settings.header.height = 107;
        Logger.Log("<b>settings.header.height</b> is not defined, set to <b>" + settings.header.height + "</b>", "Warning");
    }
    if (!settings.location) {
        settings.location = {};
    }
    if (settings.location.width === undefined) {
        settings.location.width = GUI.Size.MATCH_PARENT;
        Logger.Log("<b>settings.location.width</b> is not defined, set to <b>GUI.Size.MATCH_PARENT</b>", "Warning");
    }
    if (settings.location.height === undefined) {
        settings.location.height = GUI.Size.MATCH_PARENT;
        Logger.Log("<b>settings.location.height</b> is not defined, set to <b>GUI.Size.MATCH_PARENT</b>", "Warning");
    }
    if (settings.location.x === undefined) {
        settings.location.x = 0;
        Logger.Log("<b>settings.location.x</b> is not defined, set to <b>" + settings.location.x + "</b>", "Warning");
    }
    if (settings.location.y === undefined) {
        settings.location.y = 0;
        Logger.Log("<b>settings.location.y</b> is not defined, set to <b>" + settings.location.y + "</b>", "Warning");
    }
    if (settings.location.gravity === undefined) {
        settings.location.gravity = GUI.Gravity.CENTER;
        Logger.Log("<b>settings.location.gravity</b> is not defined, set to <b>GUI.Gravity.CENTER</b>", "Warning");
    }
    if (!settings.texture) {
        settings.texture = {};
    }
    this.location = settings.location;
    this.focus = settings.focusable || settings.focus || false;
    var onClickExitButton = settings.header.onClickExitButton || function (container) {
        container.close();
    };
    var head, headTitle, exitButton;
    this.onCreate = function (p) {
        this.view = new RelativeLayout(GUI.ctx);
        this.view.setBackgroundDrawable(GUI.createDrawable(GUI.DefaultTextures.panel));
        head = new RelativeLayout(GUI.ctx);
        head.setGravity(GUI.Gravity.TOP);
        head.setLayoutParams(new ViewGroup.LayoutParams(-1, settings.header.height));
        head.setBackgroundDrawable(GUI.createDrawable(GUI.DefaultTextures.header));
        headTitle = new GUI.Text(settings.header.title);
        headTitle.create();
        params = new RelativeLayout.LayoutParams(GUI.Size.WRAP_CONTENT, GUI.Size.WRAP_CONTENT);
        params.addRule(RelativeLayout.CENTER_IN_PARENT);
        head.addView(headTitle.view, params);
        exitButton = new GUI.ImageButton(settings.texture.exitButton || GUI.DefaultTextures.exitButton);
        exitButton.create();
        exitButton.window = this;
        exitButton.setOnClick(onClickExitButton);
        params = new RelativeLayout.LayoutParams(settings.header.height > 81 ? GUI.Size.WRAP_CONTENT : (settings.header.height - 13), settings.header.height > 81 ? GUI.Size.WRAP_CONTENT : (settings.header.height - 13));
        params.addRule(RelativeLayout.ALIGN_PARENT_RIGHT);
        params.setMargins(0, 13, 13, 0);
        head.addView(exitButton.view, params);
        this.view.addView(head);
        if (settings.inventory) {
            if (settings.inventory === true) {
                settings.inventory = {size: 4};
            }
            this.inventory = new GUI.Inventory(settings.inventory);
            this.inventory.window = this.window;
            this.inventory.create();
            params = new android.widget.RelativeLayout.LayoutParams(GUI.SIZE_SLOT * 4 * (settings.inventory.size || 4), GUI.Size.MATCH_PARENT);
            params.setMargins(GUI.getUnitsInPixels(20), settings.header.height + GUI.getUnitsInPixels(20), 0, GUI.getUnitsInPixels(20));
            this.view.addView(this.inventory.view, params);
        }
        for (var i in settings.elements) {
            this.addElement(i, settings.elements[i]);
        }
    };
    this.onOpen = function () {
        headTitle.setText(Translation.translate(settings.header.title));
    };
}, Dialog: function (settings) {
    GUI.IWindow.apply(this, arguments);
    this.type = "dialog";
    if (!settings || typeof settings != "object") {
        settings = {};
    }
    if (!settings.location) {
        settings.location = {};
    }
    if (settings.location.width === undefined) {
        settings.location.width = GUI.Size.WRAP_CONTENT;
        Logger.Log("<b>settings.location.width</b> is not defined, set to <b>GUI.Size.WRAP_CONTENT</b>", "Warning");
    }
    if (settings.location.height === undefined) {
        settings.location.height = GUI.Size.WRAP_CONTENT;
        Logger.Log("<b>settings.location.height</b> is not defined, set to <b>GUI.Size.WRAP_CONTENT</b>", "Warning");
    }
    if (settings.location.x === undefined) {
        settings.location.x = 0;
        Logger.Log("<b>settings.location.x</b> is not defined, set to <b>" + settings.location.x + "</b>", "Warning");
    }
    if (settings.location.y === undefined) {
        settings.location.y = 0;
        Logger.Log("<b>settings.location.y</b> is not defined, set to <b>" + settings.location.y + "</b>", "Warning");
    }
    if (settings.location.gravity === undefined) {
        settings.location.gravity = GUI.Gravity.CENTER;
        Logger.Log("<b>settings.location.gravity</b> is not defined, set to <b>GUI.Gravity.CENTER</b>", "Warning");
    }
    if (!settings.header || typeof settings.header != "object") {
        settings.header = {};
    }
    if (!settings.header.positive) {
        settings.header.positive = {};
    }
    if (!settings.header.positive.text) {
        settings.header.positive.text = "OK";
    }
    if (!settings.header.positive.icon) {
        settings.header.positive.icon = GUI.DefaultTextures.ok;
    }
    if (!settings.header.negative) {
        settings.header.negative = {};
    }
    if (!settings.header.negative.text) {
        settings.header.negative.text = "Cancel";
    }
    if (!settings.header.negative.icon) {
        settings.header.negative.icon = GUI.DefaultTextures.cancel;
    }
    if (!settings.texture) {
        settings.texture = {};
    }
    if (!settings.texture.panel) {
        settings.texture.panel = GUI.DefaultTextures.panel;
    }
    this.location = settings.location;
    var onClickExitButton = settings.header.onClickExitButton || function (container) {
        container.close();
    };
    var panel, exit_button, positive_button, negative_button, action = "cancel", window = this, onPositive = settings.header.positive.onClick || function () {
    }, onCancel = settings.header.onСancel || function () {
    }, onNegative = settings.header.negative.onClick || function () {
    };
    this.onCreate = function (p) {
        this.view = new RelativeLayout(GUI.ctx);
        this.view.setBackgroundDrawable(GUI.createDrawable(settings.texture.panel || GUI.DefaultTextures.panel));
        this.view.setPadding((settings.texture.panel.bitmap.ninePatch) ? (settings.texture.panel.bitmap.ninePatch.x[0] * settings.texture.panel.bitmap.scale) : GUI.getUnitsInPixels(5), (settings.texture.panel.bitmap.ninePatch) ? (settings.texture.panel.bitmap.ninePatch.y[0] * settings.texture.panel.bitmap.scale) : GUI.getUnitsInPixels(5), (settings.texture.panel.bitmap.ninePatch) ? ((settings.texture.panel.bitmap.width - settings.texture.panel.bitmap.ninePatch.x[settings.texture.window.bitmap.ninePatch.x.length - 1]) * settings.texture.panel.bitmap.scale) : GUI.getUnitsInPixels(5), (settings.texture.panel.bitmap.ninePatch) ? ((settings.texture.panel.bitmap.height - settings.texture.panel.bitmap.ninePatch.y[settings.texture.window.bitmap.ninePatch.y.length - 1]) * settings.texture.panel.bitmap.scale) : GUI.getUnitsInPixels(5));
        exit_button = new GUI.ImageButton(settings.texture.exitButton || GUI.DefaultTextures.exitButtonDialog);
        exit_button.create();
        exit_button.window = window;
        var params = new RelativeLayout.LayoutParams(GUI.Size.WRAP_CONTENT, GUI.Size.WRAP_CONTENT);
        params.addRule(RelativeLayout.ALIGN_PARENT_RIGHT);
        params.setMargins(0, 13, 13, 0);
        this.view.addView(exit_button.view, params);
        panel = new LinearLayout(GUI.ctx);
        panel.setGravity(GUI.Gravity.RIGHT);
        positive_button = new GUI.ButtonWithIcon(settings.header.positive.text, settings.header.positive.icon);
        positive_button.create();
        positive_button.window = window;
        panel.addView(positive_button.view);
        negative_button = new GUI.ButtonWithIcon(settings.header.negative.text, settings.header.negative.icon);
        negative_button.create();
        negative_button.window = window;
        params = new LinearLayout.LayoutParams(GUI.Size.WRAP_CONTENT, GUI.Size.WRAP_CONTENT);
        params.setMargins(20, 0, 0, 0);
        negative_button.view.setLayoutParams(params);
        panel.addView(negative_button.view);
        params = new RelativeLayout.LayoutParams(GUI.Size.MATCH_PARENT, GUI.Size.WRAP_CONTENT);
        params.addRule(RelativeLayout.ALIGN_PARENT_BOTTOM);
        this.view.addView(panel, params);
        for (var i in settings.elements) {
            this.addElement(i, settings.elements[i]);
        }
    };
    this.onOpen = function (p) {
        exit_button.setOnClick(onClickExitButton);
        positive_button.setOnClick(function (c) {
            action = "positive";
            c.close();
        });
        negative_button.setOnClick(function (c) {
            action = "negative";
            c.close();
        });
        p.setOnDismissListener(new PopupWindow.OnDismissListener() {onDismiss: function () {
            if (action === "positive") {
                onPositive();
            } else {
                if (action === "negative") {
                    onNegative();
                } else {
                    onCancel();
                }
            }
            action = "cancel";
        }});
    };
}, Overlay: function (settings) {
    GUI.IWindow.apply(this, arguments);
    this.type = "overlay";
    if (!settings || typeof settings != "object") {
        settings = {};
    }
    if (!settings.location) {
        settings.location = {};
    }
    if (settings.location.width === undefined) {
        settings.location.width = GUI.Size.WRAP_CONTENT;
        Logger.Log("<b>settings.location.width</b> is not defined, set to <b>GUI.Size.WRAP_CONTENT</b>", "Warning");
    }
    if (settings.location.height === undefined) {
        settings.location.height = GUI.Size.WRAP_CONTENT;
        Logger.Log("<b>settings.location.height</b> is not defined, set to <b>GUI.Size.WRAP_CONTENT</b>", "Warning");
    }
    if (settings.location.x === undefined) {
        settings.location.x = 0;
        Logger.Log("<b>settings.location.x</b> is not defined, set to <b>" + settings.location.x + "</b>", "Warning");
    }
    if (settings.location.y === undefined) {
        settings.location.y = 0;
        Logger.Log("<b>settings.location.y</b> is not defined, set to <b>" + settings.location.y + "</b>", "Warning");
    }
    if (settings.location.gravity === undefined) {
        settings.location.gravity = GUI.Gravity.TOP | GUI.Gravity.LEFT;
        Logger.Log("<b>settings.location.gravity</b> is not defined, set to <b>GUI.Gravity.TOP | GUI.Gravity.LEFT</b>", "Warning");
    }
    this.location = settings.location;
    if (!settings.texture) {
        settings.texture = {};
    }
    this.onCreate = function (p) {
        this.view = RelativeLayout(GUI.ctx);
        this.view.setGravity(GUI.Gravity.TOP || GUI.Gravity.LEFT);
        this.view.setBackgroundDrawable(GUI.createDrawable(settings.texture.background || new ColorDrawable(Color.TRANSPARENT)));
        p.setTouchable(settings.touchable || settings.touch || false);
        for (var i in settings.elements) {
            this.addElement(i, settings.elements[i]);
        }
    };
}, TabWindow: function (settings) {
    GUI.IWindow.apply(this, arguments);
    this.type = "tab";
    this.window = null;
    this.icon = null;
    if (settings.icon) {
        this.icon = settings.icon;
    }
    if (!settings || typeof settings != "object") {
        settings = {};
    }
    if (!settings.header) {
        settings.header = {id: 2};
    }
    if (!settings.location) {
        settings.location = {};
    }
    if (!settings.location.position) {
        settings.location.position = GUI.Tab.TOP;
    }
    if (!settings.texture) {
        settings.texture = {};
    }
    this.hidden = settings.hidden || false;
    this.getWindow = function () {
        return this.window;
    };
    this.getContainer = function () {
        return this.getWindow().getContainer();
    };
    this.onCreate = function () {
        this.view = new RelativeLayout(GUI.ctx);
        if (settings.inventory) {
            if (settings.inventory === true) {
                settings.inventory = {size: 4};
            }
            this.inventory = new GUI.Inventory(settings.inventory);
            this.inventory.window = this.getWindow();
            this.inventory.create();
            params = new android.widget.RelativeLayout.LayoutParams(GUI.SIZE_SLOT * 4 * (settings.inventory.size || 4), GUI.Size.MATCH_PARENT);
            this.view.addView(this.inventory.view, params);
        }
        for (var i in settings.elements) {
            this.addElement(i, settings.elements[i]);
        }
    };
}, TabsWindow: function (settings) {
    GUI.IWindow.apply(this, arguments);
    this.type = "tabs";
    if (!settings || typeof settings != "object") {
        settings = {};
    }
    if (settings.tabs && typeof settings.tabs != "string" && settings.tabs.length != null) {
        if (settings.tabs.length <= 0) {
            return new GUI.IWindowExeption(this, "Not tabs");
        } else {
            if (settings.tabs.length > 17) {
                return new GUI.IWindowExeption(this, "Very mach tabs");
            }
        }
    } else {
        return new GUI.IWindowExeption(settings, "<b>settings.tabs</b> mast be array");
    }
    if (!settings.texture) {
        settings.texture = {};
    }
    if (!settings.texture.window) {
        settings.texture.window = GUI.DefaultTextures.panel;
    }
    if (!settings.texture.tabs) {
        settings.texture.tabs = GUI.DefaultTextures.tabs;
    }
    if (!settings.texture.exitButton) {
        settings.texture.exitButton = GUI.DefaultTextures.exitButton;
    }
    var tabsPadding = {};
    var padding = {top: (settings.texture.window.bitmap.ninePatch.y[0] * settings.texture.window.bitmap.scale), bottom: ((settings.texture.window.bitmap.height - settings.texture.window.bitmap.ninePatch.y[settings.texture.window.bitmap.ninePatch.y.length - 1]) * settings.texture.window.bitmap.scale), left: (settings.texture.window.bitmap.ninePatch.x[0] * settings.texture.window.bitmap.scale), right: ((settings.texture.window.bitmap.width - settings.texture.window.bitmap.ninePatch.x[settings.texture.window.bitmap.ninePatch.x.length - 1]) * settings.texture.window.bitmap.scale)};
    if (settings.padding) {
        if (typeof settings.padding != "object") {
            padding.right = padding.bottom = padding.left = padding.top = settings.padding;
        } else {
            padding.left = settings.padding.left || 0;
            padding.right = settings.padding.right || padding.left || 0;
            padding.top = settings.padding.top || 0;
            padding.bottom = settings.padding.bottom || padding.top || 0;
        }
    }
    var contentPadding = settings.contentPadding || GUI.getUnitsInPixels(10);
    var top, bottom, content, tab_exit, tabs = [], selected = -1, exitButton, window = this, _tabs = settings.tabs, hiddenTabs = [], sizeTabs = settings.sizeTab || GUI.getUnitsInPixels(100);
    this.openTab = function (index) {
        if (index < 0) {
            return;
        }
        this.getContainer().selectSlot(null);
        if (selected > -1) {
            if (selected < 8) {
                tabs[selected].setBackgroundDrawable(GUI.createDrawable(settings.texture.tabs.top.normal || GUI.DefaultTextures.tabs.top.normal));
            } else {
                tabs[selected].setBackgroundDrawable(GUI.createDrawable(settings.texture.tabs.bottom.normal || GUI.DefaultTextures.tabs.bottom.normal));
            }
            content.removeView(settings.tabs[selected].view);
        }
        if (index < 8) {
            tabs[index].setBackgroundDrawable(GUI.createDrawable(settings.texture.tabs.top.pressed || GUI.DefaultTextures.tabs.top.pressed));
        } else {
            tabs[index].setBackgroundDrawable(GUI.createDrawable(settings.texture.tabs.bottom.pressed || GUI.DefaultTextures.tabs.bottom.pressed));
        }
        content.addView(settings.tabs[index].view);
        selected = index;
        this.getContainer().refreshSlots();
    };
    this.showTab = function (index) {
        _tabs[index].hidden = false;
        if (this.isCreated) {
            renderTabs();
            this.openTab(selected);
        }
    };
    this.hideTab = function (index) {
        _tabs[index].hidden = true;
        if (this.isCreated) {
            renderTabs();
            this.openTab(selected);
        }
    };
    this.isHidden = function (index) {
        return hiddenTabs.indexOf(index) != -1;
    };
    this.getElement = function (name) {
        if (_tabs[selected].elements.hasOwnProperty(name)) {
            return _tabs[selected].elements[name];
        } else {
            return false;
        }
    };
    this.getElementsByType = function (type) {
        if (!_tabs[selected]) {
            return;
        }
        var a = {};
        for (var i in _tabs[selected].elements) {
            if (_tabs[selected].elements[i].type == type) {
                a[i] = _tabs[selected].elements[i];
            }
        }
        return a;
    };
    this.getInventory = function () {
        return _tabs[selected].inventory || false;
    };
    var view_height = 0;
    var renderTabs = function () {
        var margin_left = padding.left || GUI.getUnitsInPixels(3);
        var margin_right = padding.right || GUI.getUnitsInPixels(3);
        top.removeAllViews();
        bottom.removeAllViews();
        let params = new RelativeLayout.LayoutParams(sizeTabs, sizeTabs);
        params.addRule(RelativeLayout.ALIGN_PARENT_RIGHT);
        params.setMargins(0, 0, margin_right, 0);
        top.addView(tab_exit, params);
        let n = 0;
        for (let i = 0, l = _tabs.length; i < l; i++) {
            if (_tabs.hidden) {
                continue;
            }
            params = new RelativeLayout.LayoutParams(sizeTabs, sizeTabs);
            if (n < 8) {
                tabs[i].setBackgroundDrawable(GUI.createDrawable(settings.texture.tabs.top.normal || GUI.DefaultTextures.tabs.top.normal));
                params.setMargins(margin_left + (n * (sizeTabs + GUI.getUnitsInPixels(5))), 0, 0, 0);
                top.addView(tabs[i], params);
            } else {
                tabs[i].setBackgroundDrawable(GUI.createDrawable(settings.texture.tabs.bottom.normal || GUI.DefaultTextures.tabs.bottom.normal));
                params.setMargins(margin_left + ((n - 8) * (sizeTabs + GUI.getUnitsInPixels(5))), 0, 0, 0);
                bottom.addView(tabs[i], params);
            }
            n++;
        }
    };
    this.getHeight = function () {
        return view_height;
    };
    this.onCreate = function () {
        this.view = new RelativeLayout(GUI.ctx);
        top = new RelativeLayout(GUI.ctx);
        content = new RelativeLayout(GUI.ctx);
        content.setBackgroundDrawable(GUI.createDrawable(settings.texture.window));
        bottom = new RelativeLayout(GUI.ctx);
        var margin_top = padding.top || GUI.getUnitsInPixels(3);
        var margin_bottom = padding.bottom || GUI.getUnitsInPixels(3);
        var margin_left = padding.left || GUI.getUnitsInPixels(3);
        var margin_right = padding.right || GUI.getUnitsInPixels(3);
        content.setPadding(margin_left + contentPadding, margin_top + contentPadding, margin_right + contentPadding, margin_bottom + contentPadding);
        var _h = (sizeTabs - margin_top);
        if (_tabs.length > 8) {
            _h += (sizeTabs - margin_bottom);
        }
        params = new RelativeLayout.LayoutParams(GUI.Size.MATCH_PARENT, view_height = GUI.Size.getHeightWindow() - _h);
        params.setMargins(0, sizeTabs - margin_top, 0, 0);
        this.view.addView(content, params);
        var params = new RelativeLayout.LayoutParams(GUI.Size.MATCH_PARENT, sizeTabs);
        this.view.addView(top, params);
        tab_exit = new LinearLayout(GUI.ctx);
        tab_exit.setGravity(GUI.Gravity.CENTER);
        tab_exit.setBackgroundDrawable(GUI.createDrawable(settings.texture.tabs.top.pressed));
        exitButton = new GUI.ImageButton(settings.texture.exitButton || GUI.DefaultTextures.exitButton);
        exitButton.create();
        exitButton.window = this;
        exitButton.setOnClick(settings.onClickExitButton || function (container) {
            container.close();
        });
        params = new RelativeLayout.LayoutParams(sizeTabs * 0.6, sizeTabs * 0.6);
        tab_exit.addView(exitButton.view, params);
        params = new RelativeLayout.LayoutParams(GUI.Size.MATCH_PARENT, GUI.getUnitsInPixels(100));
        params.addRule(RelativeLayout.ALIGN_PARENT_BOTTOM);
        if (_tabs.length > 8) {
            this.view.addView(bottom, params);
        }
        for (var i = 0; i < _tabs.length; i++) {
            let bitmap;
            _tabs[i].window = this;
            _tabs[i].create();
            tabs[i] = new LinearLayout(GUI.ctx);
            tabs[i].setGravity(GUI.Gravity.CENTER);
            if (_tabs[i].icon) {
                if (_tabs[i].icon.id) {
                    bitmap = GUI.Native.getIconItem(64, _tabs[i].icon.id, _tabs[i].icon.count, _tabs[i].icon.data, _tabs[i].icon.extra);
                } else {
                    bitmap = GUI.createBitmap(_tabs[i].icon);
                }
            } else {
                bitmap = GUI.Native.getIconItem(64, 2, 1, 0);
            }
            tabs_icon = new GUI.Image(bitmap);
            tabs_icon.create();
            tabs_icon.window = this;
            params = new RelativeLayout.LayoutParams(sizeTabs * 0.6, sizeTabs * 0.6);
            tabs[i].addView(tabs_icon.view, params);
        }
        renderTabs();
        tabs.forEach(function (item, index) {
            item.setOnClickListener(new View.OnClickListener() {onClick: function (v) {
                window.openTab(index);
            }});
        });
        this.openTab(0);
    };
    this.onOpenEls = function () {
        for (var i in settings.tabs) {
            settings.tabs[i].onOpenEls(settings.tabs[i]);
        }
    };
}, Text: function (str) {
    GUI.IElement.apply(this, arguments);
    this.type = "text";
    var view = this.view;
    this.setText = function (str) {
        var view = this.view;
        GUI.run(function () {
            view.setText(Translation.translate(str));
        });
    };
    var textSize = 32, grav = GUI.Gravity.LEFT;
    this.setTextSize = function (size) {
        if (this.isCreated) {
            this.view.setTextSize(android.util.TypedValue.COMPLEX_UNIT_PX, size);
        }
        textSize = size;
    };
    this.getTextSize = function () {
        return textSize;
    };
    this.setGravity = function (gravity) {
        if (this.isCreated) {
            this.view.setGravity(gravity || GUI.Gravity.LEFT);
        } else {
            grav = gravity || GUI.Gravity.LEFT;
        }
    };
    this.onCreate = function () {
        if (!this.view) {
            this.view = new TextView(GUI.ctx);
        }
        this.view.setTextColor(Color.parseColor("#FFFFFFFF"));
        this.view.setTypeface(Typeface.createFromFile(FileTools.root + "games/com.mojang/innercore/mc-typeface.ttf"));
        if (str == undefined) {
            this.view.setText(Translation.translate("TextView"));
        } else {
            this.view.setText(Translation.translate(str));
        }
        this.setTextSize(textSize);
        this.setGravity(grav);
    };
    this.onOpen = function () {
        this.view.setText(Translation.translate(this.view.getText()));
    };
}, Button: function (str) {
    GUI.Text.apply(this);
    this.type = "button";
    if (!str) {
        str = "Button";
    }
    var drawableNormal, drawablePressed, view = this.view, touch = function (b, c) {
        var f = c.getActionMasked();
        if (f == MotionEvent.ACTION_DOWN) {
            b.setBackgroundDrawable(drawablePressed);
        }
        if (f == MotionEvent.ACTION_CANCEL || f == MotionEvent.ACTION_UP) {
            b.setBackgroundDrawable(drawableNormal);
        }
        return false;
    }, padding = {left: 20, right: 20, up: 20, top: 20, down: 20, bottom: 20};
    this.setPadding = function (l, u, r, d) {
        if (l.left !== undefined) {
            r = l.right || l.left;
            u = l.up || l.top || l.left;
            d = l.down || l.bottom || u;
            l = l.left;
        }
        if (r === undefined) {
            r = l;
        }
        if (u === undefined) {
            u = l;
        }
        if (d === undefined) {
            d = u;
        }
        l = parseInt(l);
        u = parseInt(u);
        d = parseInt(d);
        r = parseInt(r);
        if (this.isCreated) {
            this.view.setPadding(l, u, r, d);
        }
        padding.left = l;
        padding.right = r;
        padding.top = padding.up = u;
        padding.bottom = padding.down = d;
    };
    this.getPadding = function () {
        return padding;
    };
    this.onCreate = function () {
        this.view = new Button(GUI.ctx);
        this.view.setMinHeight(0);
        this.view.setMinimumHeight(0);
        this.view.setGravity(GUI.Gravity.CENTER);
        this.view.setTextColor(Color.parseColor("#FFFFFFFF"));
        this.view.setTypeface(Typeface.createFromFile(FileTools.root + "games/com.mojang/innercore/mc-typeface.ttf"));
        this.view.setText(str);
        if (drawableNormal == null) {
            this.setBackground(GUI.DefaultTextures.button);
        } else {
            this.view.setBackgroundDrawable(drawableNormal);
        }
        this.setPadding(padding);
        this.setTextSize(this.getTextSize());
        view = this.view;
        this.view.setOnTouchListener(new View.OnTouchListener() {onTouch: touch});
    };
    this.onOpen = function () {
        this.view.setText(Translation.translate(this.view.getText()));
    };
    this.setBackground = function (obj) {
        if (obj.name) {
            drawableNormal = drawablePressed = GUI.createDrawable(obj);
        } else {
            if (obj.normal) {
                drawableNormal = drawablePressed = GUI.createDrawable(obj.normal);
                if (obj.pressed) {
                    drawablePressed = GUI.createDrawable(obj.pressed);
                }
            }
        }
        if (this.isCreated) {
            this.view.setBackgroundDrawable(drawableNormal);
        }
    };
    this.setOnTouch = function (f) {
        var container = this.getWindow().getContainer();
        var element = this;
        GUI.run(function () {
            view.setOnTouchListener(new View.OnTouchListener() {onTouch: function (a, b) {
                f(container, element, b);
                return touch(a, b);
            }});
        });
    };
}, EditText: function () {
    GUI.Text.apply(this);
    this.type = "edittext";
    this.onCreate = function () {
        this.view = new EditText(GUI.ctx);
        this.view.setTextColor(Color.parseColor("#FFFFFFFF"));
        this.view.setTypeface(Typeface.createFromFile(FileTools.root + "games/com.mojang/innercore/mc-typeface.ttf"));
        this.view.setPadding(8, 12, 8, 12);
        this.view.setSingleLine(true);
        this.view.setImeOptions(EditorInfo.IME_FLAG_NO_EXTRACT_UI);
        this.view.setBackgroundDrawable(GUI.createDrawable(GUI.DefaultTextures.editText));
    };
    this.onOpen = function () {
        this.clear();
    };
    this.getText = function () {
        return this.view.getText().toString();
    };
    this.setText = function (str) {
        if (!this.isCreated) {
            return;
        }
        var view = this.view;
        GUI.run(function () {
            view.setText(Translation.translate(str));
        });
    };
    this.clear = function () {
        this.setText("");
    };
}, Image: function (settings) {
    GUI.IElement.apply(this);
    this.type = "image";
    this.view = new ImageView(GUI.ctx);
    var bitmapNormal = null;
    this.setSource = function (obj) {
        if (typeof (obj) != "object") {
            return;
        }
        bitmapNormal = GUI.createBitmap(obj);
        var view = this.view;
        GUI.run(function () {
            view.setImageBitmap(bitmapNormal);
        });
    };
    this.onCreate = function () {
        this.setSource(settings);
    };
}, ImageButton: function (bitmap) {
    GUI.Image.apply(this);
    this.type = "image_button";
    var bitmapNormal, bitmapPressed, touch = function (b, c) {
        var f = c.getActionMasked();
        if (f == MotionEvent.ACTION_DOWN) {
            b.setImageBitmap(bitmapPressed);
        }
        if (f == MotionEvent.ACTION_CANCEL || f == MotionEvent.ACTION_UP) {
            b.setImageBitmap(bitmapNormal);
        }
        return false;
    }, view = this.view;
    this.setSource = function (obj) {
        if (typeof (obj) != "object") {
            return;
        }
        if (obj.name) {
            bitmapNormal = bitmapPressed = GUI.createBitmap(obj);
        } else {
            if (obj.normal) {
                bitmapNormal = bitmapPressed = GUI.createBitmap(obj.normal);
                if (obj.pressed) {
                    bitmapPressed = GUI.createBitmap(obj.pressed);
                }
            }
        }
        this.view.setImageBitmap(bitmapNormal);
    };
    this.setOnTouch = function (f) {
        var container = this.getWindow().getContainer();
        var element = this;
        GUI.run(function () {
            view.setOnTouchListener(new View.OnTouchListener() {onTouch: function (a, b) {
                f(container, element, b);
                return touch(a, b);
            }});
        });
    };
    this.onCreate = function () {
        this.setSource(bitmap);
        view.setOnTouchListener(new View.OnTouchListener() {onTouch: touch});
        view.setOnClickListener(new View.OnClickListener() {onClick: function () {
            return true;
        }});
    };
}, ButtonWithIcon: function (str, _icon) {
    GUI.IElement.apply(this);
    this.type = "button_with_icon";
    if (typeof (_icon) == "object") {
        if (_icon.id) {
            _icon = GUI.Native.getIconItem(54, _icon.id, _icon.count, _icon.data, _icon.extra);
        }
    }
    var drawableNormal, drawablePressed, icon, label, view = this.view, touch = function (b, c) {
        var f = c.getActionMasked();
        if (f == MotionEvent.ACTION_DOWN) {
            b.setBackgroundDrawable(drawablePressed);
        }
        if (f == MotionEvent.ACTION_CANCEL || f == MotionEvent.ACTION_UP) {
            b.setBackgroundDrawable(drawableNormal);
        }
        return false;
    };
    this.setBackground = function (obj) {
        if (obj.name) {
            drawableNormal = drawablePressed = GUI.createDrawable(obj);
        } else {
            if (obj.normal) {
                drawableNormal = drawablePressed = GUI.createDrawable(obj.normal);
                if (obj.pressed) {
                    drawablePressed = GUI.createDrawable(obj.pressed);
                }
            }
        }
        this.view.setBackgroundDrawable(drawableNormal);
    };
    this.setOnTouch = function (f) {
        var container = this.getWindow().getContainer();
        var element = this;
        GUI.run(function () {
            view.setOnTouchListener(new View.OnTouchListener() {onTouch: function (a, b) {
                f(container, element, b);
                return touch(a, b);
            }});
        });
    };
    this.setSource = function (obj) {
        icon.setSource(obj);
    };
    this.setText = function (str) {
        GUI.run(function () {
            label.setText(str);
        });
    };
    var textSize = 16;
    this.setTextSize = function (size) {
        if (this.isCreated) {
            label.setTextSize(size);
        } else {
            textSize = size;
        }
    };
    this.onCreate = function () {
        this.view = new LinearLayout(GUI.ctx);
        this.view.setPadding(20, 20, 20, 20);
        this.view.setGravity(GUI.Gravity.CENTER);
        icon = new GUI.Image(_icon);
        icon.create();
        icon.view.setClickable(false);
        label = new GUI.Text(str);
        label.create();
        label.view.setClickable(false);
        this.view.addView(icon.view);
        this.view.addView(label.view);
        view = this.view;
        this.setBackground(GUI.DefaultTextures.button);
        this.view.setOnTouchListener(new View.OnTouchListener() {onTouch: touch});
    };
    this.onOpen = function () {
        this.view.setText(Translation.translate(this.view.getText()));
    };
}, Scale: function (settings) {
    GUI.IElement.apply(this, arguments);
    this.type = "scale";
    if (settings.texture === undefined) {
        settings.texture = {};
    }
    var maxValue = settings.maxValue || 100, value = settings.value || 100, direction = settings.direction || settings.dir || GUI.Direction.RIGHT, invert = settings.invert || settings.inv || false, scale, lay, textureBar, view;
    this.onCreate = function () {
        this.view = new LinearLayout(GUI.ctx);
        view = this.view;
        lay = new LinearLayout(GUI.ctx);
        scale = new ImageView(GUI.ctx);
        let defaultBackground, defaultTextureBar;
        switch (direction) {
          case GUI.Direction.TOP:
            lay.setGravity(GUI.Gravity.BOTTOM);
            defaultBackground = GUI.DefaultTextures.scales.vertical.empty;
            defaultTextureBar = GUI.DefaultTextures.scales.vertical.full;
            break;
          case GUI.Direction.BOTTOM:
            lay.setGravity(GUI.Gravity.TOP);
            defaultBackground = GUI.DefaultTextures.scales.vertical.empty;
            defaultTextureBar = GUI.DefaultTextures.scales.vertical.full;
            break;
          case GUI.Direction.LEFT:
            lay.setGravity(GUI.Gravity.RIGHT);
            defaultBackground = GUI.DefaultTextures.scales.horizontal.empty;
            defaultTextureBar = GUI.DefaultTextures.scales.horizontal.full;
            break;
          case GUI.Direction.RIGHT:
          default:
            lay.setGravity(GUI.Gravity.LEFT);
            defaultBackground = GUI.DefaultTextures.scales.horizontal.empty;
            defaultTextureBar = GUI.DefaultTextures.scales.horizontal.full;
            break;
        }
        lay.addView(scale);
        view.addView(lay);
        this.setTextureScale(settings.texture.scale || defaultTextureBar);
        this.setBackground(settings.texture.background || (settings.texture.scale ? 0 : defaultBackground));
    };
    this.setTextureScale = function (obj) {
        if (typeof (obj) != "object") {
            return;
        }
        GUI.createBitmap(obj);
        var params = new LinearLayout.LayoutParams(obj.bitmap.width * obj.bitmap.scale, obj.bitmap.height * obj.bitmap.scale);
        this.view.removeView(lay);
        lay.setLayoutParams(params);
        this.view.addView(lay);
        textureBar = Object.assign({}, obj);
        this.setValue(value, true);
    };
    this.setBackground = function (obj) {
        if (typeof (obj) != "object") {
            return;
        }
        lay.setBackgroundDrawable(GUI.createDrawable(obj));
    };
    this.setValue = function (val, ignoreNotChange) {
        val = (val > maxValue) ? maxValue : (val <= 0) ? 0 : val;
        if (value == val && ignoreNotChange != true) {
            return false;
        }
        value = val;
        if (value == 0) {
            return GUI.run(function () {
                scale.setImageDrawable(new ColorDrawable(Color.TRANSPARENT));
            });
        }
        let bitmap = Object.assign({}, textureBar), unit, units;
        if (value != maxValue) {
            if (direction == GUI.Direction.TOP || direction == GUI.Direction.BOTTOM) {
                unit = bitmap.bitmap.height / maxValue;
                units = Math.ceil(unit * value);
                if (direction == GUI.Direction.TOP || (direction == GUI.Direction.BOTTOM && invert)) {
                    bitmap.bitmap.y += (bitmap.bitmap.height - units);
                    bitmap.bitmap.height -= (bitmap.bitmap.height - units);
                } else {
                    bitmap.bitmap.height = units;
                }
            } else {
                unit = bitmap.bitmap.width / maxValue;
                units = Math.ceil(unit * value);
                if (direction == GUI.Direction.LEFT || (direction == GUI.Direction.RIGHT && invert)) {
                    bitmap.bitmap.x += (bitmap.bitmap.width - units);
                    bitmap.bitmap.width -= (bitmap.bitmap.width - units);
                } else {
                    bitmap.bitmap.width = units;
                }
            }
        }
        GUI.run(function () {
            scale.setImageBitmap(GUI.createBitmap(bitmap));
        });
    };
    this.getValue = function () {
        return value;
    };
}, Scroll: function (settings) {
    GUI.IScroll.apply(this);
    this.type = "scroll";
    this.onCreate = function () {
        this.view = new ScrollView(GUI.ctx);
        this.root = new RelativeLayout(GUI.ctx);
        if (settings.elements) {
            for (var i in settings.elements) {
                this.addElement(i, settings.elements[i]);
            }
        }
        this.view.addView(this.root);
    };
}, Slot: function (settings) {
    GUI.IElement.apply(this, arguments);
    this.type = "slot";
    this.id = 0;
    this.data = 0;
    this.count = 0;
    this.extra = null;
    this.selected = false;
    this.alwaysShowCount = settings.alwaysShowCount || settings.showCount || false;
    var view = this.view, frame, icon_item, count_item, params;
    this.onChange = settings.onChange || settings.onchange || settings.change || function () {
    };
    if (!settings.textures) {
        settings.textures = {};
    }
    this.isValid = settings.isValid || settings.valid || function () {
        return true;
    };
    this.onCreate = function () {
        this.view = new RelativeLayout(GUI.ctx);
        this.setSlotTexture(settings.textures.slot || GUI.DefaultTextures.slot);
        var element = this;
        this.view.setOnClickListener(new View.OnClickListener() {onClick: function () {
            element.defaultOnClick();
        }});
        icon_item = new ImageView(GUI.ctx);
        icon_item.setClickable(false);
        params = new android.widget.RelativeLayout.LayoutParams((GUI.SIZE_SLOT - GUI.MARGIN_SLOT * 2) * settings.size, (GUI.SIZE_SLOT - GUI.MARGIN_SLOT * 2) * settings.size);
        params.addRule(android.widget.RelativeLayout.CENTER_IN_PARENT);
        this.view.addView(icon_item, params);
        count_item = new TextView(GUI.ctx);
        count_item.setClickable(false);
        count_item.setGravity(android.view.Gravity.RIGHT | android.view.Gravity.BOTTOM);
        count_item.setTextColor(android.graphics.Color.parseColor("#FFFFFFFF"));
        count_item.setTypeface(android.graphics.Typeface.createFromFile(FileTools.root + "games/com.mojang/innercore/mc-typeface.ttf"));
        count_item.setTextSize(GUI.MARGIN_SLOT * settings.size);
        params = new android.widget.RelativeLayout.LayoutParams((GUI.SIZE_SLOT - GUI.MARGIN_SLOT * 2) * settings.size, (GUI.SIZE_SLOT - GUI.MARGIN_SLOT * 2) * settings.size);
        params.addRule(android.widget.RelativeLayout.ALIGN_PARENT_RIGHT);
        params.setMargins(0, GUI.MARGIN_SLOT * settings.size, GUI.MARGIN_SLOT * settings.size, 0);
        this.view.addView(count_item, params);
        frame = new ImageView(GUI.ctx);
        frame.setClickable(false);
        this.setFrameTexture(settings.textures.frame || GUI.DefaultTextures.frame_slot);
        params = new android.widget.RelativeLayout.LayoutParams(GUI.SIZE_SLOT * settings.size, GUI.SIZE_SLOT * settings.size);
        params.addRule(android.widget.RelativeLayout.CENTER_IN_PARENT);
        this.view.addView(frame, params);
        this.setSelected(false);
        if (settings.item) {
            alert(settings.item.id);
            this.setSlot(settings.item);
        }
    };
    this.setSlotTexture = function (obj) {
        if (typeof (obj) != "object") {
            return;
        }
        this.view.setBackground(GUI.createDrawable(obj));
    };
    this.setFrameTexture = function (obj) {
        frame.setImageBitmap(GUI.createBitmap(obj));
    };
    this.getSelected = function () {
        return this.selected;
    };
    this.setSelected = function (select) {
        if (select === null) {
            select = true;
        }
        this.selected = select;
        if (this.selected) {
            frame.setVisibility(View.VISIBLE);
        } else {
            frame.setVisibility(View.INVISIBLE);
        }
    };
    this.toggleSelected = function () {
        this.setSelected(!this.selected);
    };
    this.refreshSlot = function () {
        if (this.id == 0 || this.count < 0 || (!this.alwaysShowCount && this.count <= 0)) {
            this.id = this.count = this.data = 0;
            this.extra = null;
        }
        if (!this.isCreated) {
            return;
        }
        if (this.id != 0) {
            icon_item.setImageBitmap(GUI.createBitmap(GUI.Native.getIconItem((GUI.SIZE_SLOT - GUI.MARGIN_SLOT * 2) * settings.size, this.id, this.count, this.data, this.extra)));
        } else {
            icon_item.setImageResource(android.R.color.transparent);
        }
        if (this.id && (this.count > 1 || this.alwaysShowCount)) {
            count_item.setText(this.count.toString());
        } else {
            count_item.setText("");
        }
    };
    this.refreshSlotInThread = function () {
        var slot = this;
        GUI.run(function () {
            slot.refreshSlot();
        });
    };
    this.clearSlot = function () {
        this.setSlot(0, 0, 0, null);
    };
    this.setSlot = function (id, count, data, extra) {
        if (id instanceof Object || typeof id == "object" || id.id !== null) {
            count = id.count == null ? 1 : id.count;
            data = id.data || 0;
            extra = id.extra || null;
            id = id.id || 0;
        }
        if (!id) {
            id = 0;
        }
        if (count == null) {
            count = 1;
        }
        if (!data) {
            data = 0;
        }
        if (!extra) {
            extra = null;
        }
        if (id == 0 || count < 0 || (!this.alwaysShowCount && count <= 0)) {
            id = count = data = 0;
            extra = null;
        }
        var oldItem = {id: this.id, data: this.data, count: this.count, extra: this.extra};
        this.id = id;
        this.count = count;
        this.data = data;
        this.extra = extra;
        let container = this.getWindow().getContainer();
        this.onChange(this, {id: id, count: count, data: data, extra: extra}, oldItem, container);
        this.refreshSlotInThread();
        return true;
    };
    this.addItem = function (id, count, data, extra, unvalid) {
        if (count == null) {
            count = 1;
        }
        if (data == null) {
            data = 0;
        }
        if (unvalid == null) {
            unvalid = false;
        }
        var container = this.getWindow().getContainer();
        if (this.isValid(id, count, data, extra, this, container) !== true && !unvalid) {
            return false;
        }
        if (this.id != 0 && this.id != id) {
            return false;
        }
        if (this.id == id && this.data != data) {
            return false;
        }
        if (count > Item.getMaxStack(id)) {
            return false;
        }
        return this.getWindow().getContainer().setSlot(this.name, id, this.count + count, data, extra);
    };
    this.defaultOnClick = function () {
        if (!this.getSelected()) {
            this.getWindow().getContainer().selectSlot(this.name);
        } else {
            this.removeItem();
        }
    };
    this.removeItem = function () {
        if (this.id == 0 || this.count == 0) {
            return;
        }
        var slot = -1;
        for (var i = 0; i < 36; i++) {
            var index = i + 9;
            var invSlot = Player.getInventorySlot(index);
            if (invSlot.id == 0 && slot == -1) {
                slot = index;
            }
            if (invSlot.id == this.id && invSlot.data == this.data && invSlot.count < Item.getMaxStack(invSlot.id)) {
                slot = -2;
                GUI.Native.setInventorySlot(index, invSlot.id, invSlot.count + 1, invSlot.data, invSlot.extra);
                break;
            }
        }
        if (slot != -1) {
            if (slot != -2) {
                GUI.Native.setInventorySlot(slot, this.id, 1, this.data, this.extra);
            }
            this.addItem(this.id, -1, this.data, this.extra, true);
            this.getWindow().inventory.refreshSlots();
        }
    };
}, Inventory: function (settings) {
    GUI.IElement.apply(this, arguments);
    this.type = "inventory";
    var slots = [];
    var inventory_width = 0;
    this.getWidth = function () {
        return inventory_width;
    };
    this.onCreate = function () {
        this.view = new ScrollView(GUI.ctx);
        var lay = new RelativeLayout(GUI.ctx);
        var params = new android.widget.RelativeLayout.LayoutParams(inventory_width = GUI.SIZE_SLOT * 4 * settings.size, 200);
        this.view.setLayoutParams(params);
        var inventory = this;
        for (var iii = 0; iii < 9; iii++) {
            for (var ii = 0; ii < 4; ii++) {
                var i = 4 * iii + ii;
                slots[i] = new GUI.Slot(settings);
                slots[i].name = "InvSlot_" + i;
                slots[i].slot_id = i;
                slots[i].window = this.window;
                slots[i].create();
                params = new android.widget.RelativeLayout.LayoutParams(GUI.SIZE_SLOT * settings.size, GUI.SIZE_SLOT * settings.size);
                params.setMargins(settings.size * GUI.SIZE_SLOT * ii, settings.size * GUI.SIZE_SLOT * iii, 0, 0);
                slots[i].setOnClick(function (c, e) {
                    if (e.id == 0 || e.count == 0) {
                        return;
                    }
                    var slot = c.getSelectedSlot();
                    if (slot != false) {
                        var a = slot.addItem(e.id, 1, e.data, e.extra);
                        if (a) {
                            GUI.Native.setInventorySlot(e.slot_id + 9, e.id, e.count - 1, e.data, e.extra);
                            inventory.refreshSlots();
                        }
                    }
                });
                slots[i].setOnLongClick(function (c, e) {
                    if (e.id == 0 || e.count == 0) {
                        return;
                    }
                    var slot = c.getSelectedSlot();
                    if (slot != false) {
                        let max = Item.getMaxStack(e.id) - slot.count;
                        if (max > e.count) {
                            max = e.count;
                        }
                        var a = slot.addItem(e.id, max, e.data, e.extra);
                        if (a) {
                            GUI.Native.setInventorySlot(e.slot_id + 9, e.id, e.count - max, e.data, e.extra);
                            inventory.refreshSlots();
                        }
                    }
                });
                lay.addView(slots[i].view, params);
            }
        }
        this.view.addView(lay);
        this.refreshSlots();
    };
    this.refreshSlots = function () {
        for (var i = 0; i < slots.length; i++) {
            let item;
            if (inLevel) {
                item = Player.getInventorySlot(i + 9);
            } else {
                item = {id: 0, count: 0, data: 0, extra: null};
            }
            slots[i].id = item.id;
            slots[i].count = item.count;
            slots[i].data = item.data;
            slots[i].extra = item.extra;
            slots[i].refreshSlot();
        }
    };
}};
GUI.IWindow.prototype = Object.create(GUI.I.prototype);
GUI.IElement.prototype = Object.create(GUI.I.prototype);
GUI.IScroll.prototype = Object.create(GUI.IElement.prototype);
GUI.Window.prototype = Object.create(GUI.IWindow.prototype);
GUI.Dialog.prototype = Object.create(GUI.IWindow.prototype);
GUI.Overlay.prototype = Object.create(GUI.IWindow.prototype);
GUI.TabWindow.prototype = Object.create(GUI.IWindow.prototype);
GUI.TabsWindow.prototype = Object.create(GUI.IWindow.prototype);
GUI.Text.prototype = Object.create(GUI.IElement.prototype);
GUI.Button.prototype = Object.create(GUI.Text.prototype);
GUI.EditText.prototype = Object.create(GUI.Text.prototype);
GUI.Image.prototype = Object.create(GUI.IElement.prototype);
GUI.ImageButton.prototype = Object.create(GUI.Image.prototype);
GUI.ButtonWithIcon.prototype = Object.create(GUI.IElement.prototype);
GUI.Scale.prototype = Object.create(GUI.IElement.prototype);
GUI.Scroll.prototype = Object.create(GUI.IScroll.prototype);
GUI.IWindow.ElementTypes = {"text": function (settings) {
    if (typeof settings.text == "string") {
        text = settings.text;
    } else {
        text = settings.text.content;
    }
    var el = new GUI.Text(text);
    if (settings.text.size) {
        el.setTextSize(settings.text.size);
    }
    if (settings.gravity) {
        el.setGravity(settings.gravity);
    }
    return el;
}, "button": function (settings) {
    if (typeof settings.text == "string") {
        text = settings.text;
    } else {
        text = settings.text.content;
    }
    var el = new GUI.Button(text);
    if (settings.text.size) {
        el.setTextSize(settings.text.size);
    }
    if (settings.texture) {
        el.setBackground(settings.texture);
    }
    if (settings.padding) {
        el.setPadding(settings.padding);
    }
    return el;
}, "edittext": function (settings) {
    settings.width = settings.width || 150;
    return new GUI.EditText();
}, "image": function (settings) {
    return new GUI.Image(settings.texture);
}, "image_button": function (settings) {
    return new GUI.ImageButton(settings.texture);
}, "button_with_icon": function (settings) {
    if (typeof settings.text == "string") {
        text = settings.text;
    } else {
        text = settings.text.content;
    }
    var el = new GUI.ButtonWithIcon(text, settings.icon);
    if (settings.text.size) {
        el.setTextSize(settings.text.size);
    }
    if (settings.texture) {
        el.setBackground(settings.texture);
    }
    return el;
}, "scale": function (settings) {
    return new GUI.Scale(settings);
}, "slot": function (settings) {
    settings.size = settings.size || settings.scale || GUI.getUnitsInPixels(4);
    settings.width = settings.height = (settings.size * GUI.SIZE_SLOT);
    let slot = new GUI.Slot(settings);
    return slot;
}, "scroll": function (settings) {
    return new GUI.Scroll(settings);
}};
var display = GUI.ctx.getWindowManager().getDefaultDisplay();
var _width = display.getWidth(), _height = display.getHeight();
if (_width > _height) {
    GUI.width = _width;
    GUI.height = _height;
} else {
    GUI.width = _height;
    GUI.height = _width;
}
GUI.Size.WIDTH = GUI.width;
GUI.Size.HEIGHT = GUI.height;
var resources = JSON.parse(FileTools.ReadText(__dir__ + "build.config")).resources;
for (var i = 0; i < resources.length; i++) {
    if (resources[i].resourceType == "gui") {
        GUI.path = resources[i].path;
        break;
    }
}
GUI.Native.NativeItemInstanceExtra = java.lang.Class.forName("zhekasmirnov.launcher.api.NativeItemInstanceExtra", true, GUI.Native.classLoader);
GUI.Native.NativeItem = java.lang.Class.forName("zhekasmirnov.launcher.api.NativeItem", true, GUI.Native.classLoader);
GUI.Native.ResourcePackManager = java.lang.Class.forName("zhekasmirnov.launcher.mod.resource.ResourcePackManager", true, GUI.Native.classLoader);
GUI.Native.ItemIconSource = java.lang.Class.forName("zhekasmirnov.launcher.api.mod.ui.icon.ItemIconSource", true, GUI.Native.classLoader).getField("instance").get(null);
GUI.Native.getIntValueExtraData = function (extra) {
    return GUI.Native.NativeItemInstanceExtra.getMethod("getValueOrNullPtr", GUI.Native.NativeItemInstanceExtra).invoke(null, extra);
};
GUI.Native.getDinamicIconName = function (id, count, data, extra) {
    return GUI.Native.NativeItem.getMethod("getDynamicItemIconOverride", GUI.Native.t_int, GUI.Native.t_int, GUI.Native.t_int, GUI.Native.t_int).invoke(null, new java.lang.Integer(id), new java.lang.Integer(count), new java.lang.Integer(data), extra);
};
GUI.Native.getBitmapFromResources = function (dinamic) {
    return GUI.Native.ResourcePackManager.getMethod("getBitmapFromResources", GUI.Native.t_str).invoke(null, dinamic);
};
GUI.Native.getScaledIcon = function (dinamic, id, data, size) {
    return GUI.Native.ItemIconSource.getScaledIcon(dinamic, new java.lang.Integer(id), new java.lang.Integer(data), new java.lang.Integer(size), new java.lang.Integer(-1));
};
GUI.Native.getIconItem = function (size, id, count, data, extra) {
    size = size || 16;
    id = id || 0;
    count = count || 1;
    data = data || 0;
    if (extra && (extra.toString().startsWith("zhekasmirnov.launcher.api.NativeItemInstanceExtra") || extra instanceof ItemExtraData)) {
        extra = GUI.Native.getIntValueExtraData(extra);
    } else {
        extra = GUI.Native.getIntValueExtraData(GUI.clearExtra);
    }
    var dinamic = GUI.Native.getDinamicIconName(id, count, data, extra);
    if (dinamic != null) {
        dinamic = GUI.Native.getBitmapFromResources(dinamic);
    }
    return GUI.Native.getScaledIcon(dinamic, id, data, size);
};
GUI.Native.setInventorySlot = function (slot, id, count, data, extra) {
    if (id == 0 || count == 0) {
        id = data = count = 0;
    }
    if (extra && (extra.toString().startsWith("zhekasmirnov.launcher.api.NativeItemInstanceExtra") || extra instanceof ItemExtraData)) {
        extra = GUI.Native.getIntValueExtraData(extra);
    } else {
        extra = GUI.Native.getIntValueExtraData(GUI.clearExtra);
    }
    ModAPI.requireGlobal("Player.setInventorySlot(" + slot + ", " + id + ", " + count + ", " + data + ", " + extra + ")");
};
Callback.addCallback("LevelLoaded", function () {
    inLevel = true;
});
Callback.addCallback("LevelLeft", function () {
    inLevel = false;
});
EXPORT("GUI", GUI);

