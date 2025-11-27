var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __values = (this && this.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
IMPORT("TextureWorker");
var TextureSource = WRAP_JAVA("com.zhekasmirnov.innercore.api.mod.ui.TextureSource").instance;
var uiOptions = android.view.View.SYSTEM_UI_FLAG_LAYOUT_STABLE
    | android.view.View.SYSTEM_UI_FLAG_LAYOUT_HIDE_NAVIGATION
    | android.view.View.SYSTEM_UI_FLAG_LAYOUT_FULLSCREEN
    | android.view.View.SYSTEM_UI_FLAG_HIDE_NAVIGATION
    | android.view.View.SYSTEM_UI_FLAG_FULLSCREEN
    | android.view.View.SYSTEM_UI_FLAG_IMMERSIVE_STICKY;
function runUi(func) {
    var context = UI.getContext();
    context.runOnUiThread({
        run: function () {
            func();
        }
    });
}
var open = false;
function onSystemUiVisibilityChange(layout, is) {
    if (is === void 0) { is = true; }
    runUi(function () { return layout.setOnSystemUiVisibilityChangeListener({
        onSystemUiVisibilityChange: function (visibility) {
            if ((visibility & android.view.View.SYSTEM_UI_FLAG_LAYOUT_HIDE_NAVIGATION) == 0)
                layout.setSystemUiVisibility(uiOptions);
        }
    }); });
}
function onSystemUiVisibility(win) {
    win.setEventListener({
        onClose: function (window) { },
        onOpen: function (window) {
            onSystemUiVisibilityChange(win.layout, true);
        },
    });
}
/*
Союз нерушимый республик свободных
Сплотила навеки Великая Русь
Да здравствует созданный волей народов
Единый, могучий Советский Союз!
Славься, Отечество наше свободное
Дружбы народов надёжный оплот!
Партия Ленина — сила народная
Нас к торжеству коммунизма ведёт!
Сквозь грозы сияло нам солнце свободы
И Ленин великий нам путь озарил
На правое дело он поднял народы
На труд и на подвиги нас вдохновил
Славься, Отечество наше свободное
Дружбы народов надёжный оплот!
Партия Ленина — сила народная
Нас к торжеству коммунизма ведёт!
В победе бессмертных идей коммунизма
Мы видим грядущее нашей страны
И Красному знамени славной Отчизны
Мы будем всегда беззаветно верны!
Славься, Отечество наше свободное
Дружбы народов надёжный оплот!
Партия Ленина — сила народная
Нас к торжеству коммунизма ведёт!
*/
var ItemAir = { id: 0, count: 0, data: 0 };
var LineBuilder = WRAP_JAVA("com.ftbquests.LineBuilder");
LineBuilder.boot();
function line(posParent, posChild, width, color) {
    return {
        type: 'custom',
        isLine: true,
        onDraw: function (canvas, scale) {
            LineBuilder.buildLine(canvas, color, posChild, posParent, scale, width);
        }
    };
}
var TextureBuilder = /** @class */ (function () {
    function TextureBuilder() {
    }
    TextureBuilder.paintTextures = function (result, bitmaps, x, y) {
        TextureSource.put(result, TextureWorker._createTextureWithOverlays({
            bitmap: {
                width: x,
                height: y
            },
            overlays: bitmaps
        }));
    };
    TextureBuilder.setAlphaTexture = function (input, result, alpha, xx, yy) {
        var inp = TextureSource.get(input);
        var out = android.graphics.Bitmap.createBitmap(xx, yy, android.graphics.Bitmap.Config.ARGB_8888);
        for (var x = 0; x < inp.getWidth(); x++)
            for (var y = 0; y < inp.getHeight(); y++) {
                var color = inp.getPixel(x, y);
                out.setPixel(x, y, android.graphics.Color.argb(alpha, android.graphics.Color.red(color), android.graphics.Color.green(color), android.graphics.Color.blue(color)));
            }
        TextureSource.put(result, out);
    };
    return TextureBuilder;
}());
;
TextureBuilder.paintTextures("ftbquests_default_quest", [
    {
        bitmap: "shapes.circle.background",
        color: [87, 87, 87]
    }, {
        bitmap: "shapes.circle.outline",
        color: [66, 66, 66]
    }
], 128, 128);
TextureBuilder.paintTextures("ftbquests_default_quest_post", [
    {
        bitmap: "shapes.circle.background",
        color: [46, 122, 49]
    }, {
        bitmap: "shapes.circle.outline",
        color: [44, 115, 44]
    }
], 128, 128);
TextureBuilder.setAlphaTexture("default_container_frame", "default_container_frame_alpha", .3, 16, 16);
TextureBuilder.setAlphaTexture("_button_next_48x24", "_button_next_48x24_alpha", .4, 48, 24);
TextureBuilder.setAlphaTexture("_button_next_48x24p", "_button_next_48x24p_alpha", .4, 48, 24);
TextureBuilder.setAlphaTexture("_button_prev_48x24", "_button_prev_48x24_alpha", .4, 48, 24);
TextureBuilder.setAlphaTexture("_button_prev_48x24p", "_button_prev_48x24p_alpha", .4, 48, 24);
var AndroidFileSystem = /** @class */ (function () {
    function AndroidFileSystem(directory) {
        this.directory = directory;
    }
    AndroidFileSystem.prototype.parseJson = function (json) {
        var RE_BLOCKS = new RegExp([
            /\/(\*)[^*]*\*+(?:[^*\/][^*]*\*+)*\//.source,
            /\/(\/)[^\n]*$/.source,
            /"(?:[^"\\]*|\\[\S\s])*"|'(?:[^'\\]*|\\[\S\s])*'|`(?:[^`\\]*|\\[\S\s])*`/.source,
            /(?:[$\w\)\]]|\+\+|--)\s*\/(?![*\/])/.source,
            /\/(?=[^*\/])[^[/\\]*(?:(?:\[(?:\\.|[^\]\\]*)*\]|\\.)[^[/\\]*)*?\/[gim]*/.source
        ].join('|'), 'gm');
        return JSON.parse(json.replace(RE_BLOCKS, function (match, mlc, slc) {
            return mlc ? ' ' : slc ? '' : match;
        }));
    };
    AndroidFileSystem.prototype.getFullAddres = function (path) {
        return this.directory + "/" + path;
    };
    AndroidFileSystem.prototype.isExists = function (path) {
        return FileTools.isExists(this.getFullAddres(path));
    };
    AndroidFileSystem.prototype.getFile = function (path) {
        if (!this.isExists(path))
            return null;
        return FileTools.ReadText(this.getFullAddres(path));
    };
    AndroidFileSystem.prototype.getJsonToFile = function (path) {
        var json = this.getFile(path);
        if (json == null)
            return null;
        return this.parseJson(json);
    };
    return AndroidFileSystem;
}());
var DefaultHttpClient = WRAP_JAVA("org.apache.http.impl.client.DefaultHttpClient");
var HttpGet = WRAP_JAVA("org.apache.http.client.methods.HttpGet");
var ByteArrayOutputStream = WRAP_JAVA("java.io.ByteArrayOutputStream");
var HttpStatus = WRAP_JAVA("org.apache.http.HttpStatus");
var Base64 = WRAP_JAVA("android.util.Base64");
var Jstring = WRAP_JAVA("java.lang.String");
function isConnection() {
    var cm = UI.getContext().getSystemService(android.content.Context.CONNECTIVITY_SERVICE);
    var netInfo = cm.getActiveNetworkInfo();
    return netInfo != null && netInfo.isConnectedOrConnecting();
}
function sendHttp(http) {
    if (!isConnection())
        return null;
    try {
        var httpclient = new DefaultHttpClient();
        var response = httpclient.execute(new HttpGet(http));
        var statusLine = response.getStatusLine();
        if (statusLine.getStatusCode() == HttpStatus.SC_OK) {
            var out = new ByteArrayOutputStream();
            response.getEntity().writeTo(out);
            var result = String(out.toString());
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
var GitHubFileSystem = /** @class */ (function (_super) {
    __extends(GitHubFileSystem, _super);
    function GitHubFileSystem(user, repository) {
        var _this = _super.call(this, null) || this;
        _this.user = user;
        _this.repository = repository;
        return _this;
    }
    GitHubFileSystem.prototype.getGithubInfo = function (path) {
        var request = sendHttp(this.getFullAddres(path));
        if (request == null)
            return null;
        return this.parseJson(request);
    };
    GitHubFileSystem.prototype.getFullAddres = function (path) {
        return "https://api.github.com/repos/" + this.user + "/" + this.repository + "/contents/" + path + "?ref=main";
    };
    GitHubFileSystem.prototype.isExists = function (path) {
        var request = this.getGithubInfo(path);
        if (request == null)
            return null;
        return !!request.content;
    };
    GitHubFileSystem.prototype.parseBase64String = function (text) {
        var result = "";
        try {
            var array = text.split("\\n");
            for (var i in array)
                result += new Jstring(Base64.decode(new Jstring(array[i]).getBytes(), Base64.DEFAULT));
        }
        catch (e) {
            return null;
        }
        return result;
    };
    GitHubFileSystem.prototype.getFile = function (path) {
        var request = this.getGithubInfo(path);
        if (request == null)
            return null;
        var file = this.parseBase64String(request.content);
        if (file == null)
            return null;
        return this.parseJson(file);
    };
    return GitHubFileSystem;
}(AndroidFileSystem));
function CodeInitialization() {
    var scope = { "Initization": this };
    this.add = function (name, value) {
        scope[name] = value;
    };
    this.getNames = function () {
        return Object.keys(scope);
    };
    this.get = function (name) {
        return scope[name];
    };
    this.can = function (name) {
        return !!this.get(name);
    };
    this.load = function (code) {
        with (scope) {
            try {
                eval(code);
            }
            catch (e) {
                alert(e);
            }
        }
    };
    this.clone = function () {
        var result = new CodeInitialization();
        for (var key in scope)
            result.add(key, scope[key]);
        result.add("Initization", result);
        return result;
    };
}
var PathEvent = /** @class */ (function () {
    function PathEvent() {
    }
    PathEvent.prototype.buildConfig = function (ui) {
    };
    PathEvent.prototype.closeConfig = function () {
    };
    PathEvent.prototype.buildVersion = function (ui) {
    };
    PathEvent.prototype.openVersion = function (ui) {
    };
    PathEvent.prototype.openNewVersion = function (ui) {
    };
    PathEvent.prototype.getInformation = function () {
        return { name: "Not name" };
    };
    PathEvent.prototype.getLog = function () {
    };
    PathEvent.prototype.preInit = function () {
    };
    PathEvent.prototype.postInit = function () {
    };
    PathEvent.prototype.open = function (window) {
    };
    PathEvent.prototype.close = function (window) {
    };
    return PathEvent;
}());
var PatchedManager = /** @class */ (function () {
    function PatchedManager() {
    }
    return PatchedManager;
}());
/*function PathManager(initization, system, path, loaded){
    if(isConnection()) void function(){
        let patcheds = FileTools.ReadJSON(path+".info");
        for(let key in patcheds)
            patcheds[key] = false;
            
        for(let key in loaded){
            patcheds["."+key] = true;
            FileTools.WriteText(path+".files/."+key, system.getFile(loaded[key]));
        }
        FileTools.WriteJSON(path+".info", patcheds, true);
    }();
    
    let cache_path = {};
    
    this.updateCache = function(){
        cache_path = {};
        let all = this.getActivePath();
        for(let i in all)
            cache_path[all[i]] = FileTools.ReadText(path+".files/"+all[i]);
    }
    
    this.getAllPath = function(){
        return Object.keys(FileTools.ReadJSON(path+".info"));
    }
    
    this.getActivePath = function(){
        let result = [];
        let info = FileTools.ReadJSON(path+".info");
        let custom = FileTools.ReadJSON(path+".custom");
        
        for(let key in info)
            if(custom[key] === undefined ? info[key] : custom[key])
                result.push(key);
        for(let key in custom)
            if(info[key] === undefined && custom[key])
                result.push(key);
        
        return result;
    }
    
    this.getUserSetting = function(){
        return FileTools.ReadJSON(path+".custom");
    }
    
    this.setUserSetting = function(setting){
        FileTools.WriteJSON(path+".custom", setting, true);
    }
    
    let events = [];
    this.addEvent = function(event){
        events.push(event);
    }
    
    this.invokeEvent = function(name, args){
        args = args || [];
        for(let i in events){
            let event = events[i];
            event[name].apply(event, args);
        }
    }
    
    this.deloaded = function(){
        events = [];
    }
    
    this.loaded = function(){
        this.updateCache();
        for(let key in cache_path)
            initization.load(cache_path[key]);
    }
    
    this.restart = function(){
        this.deloaded();
        this.loaded();
    }
}*/ 
var MinecraftOnline;
(function (MinecraftOnline) {
    var mods = [];
    var Mod = /** @class */ (function () {
        function Mod(filesystem, main) {
            this.name = "";
            this.show = false;
            this.filesystem = filesystem;
            this.main = main;
        }
        Mod.prototype.initFileJsCode = function (path) {
        };
        Mod.prototype.init = function () {
            var json = this.filesystem.getJsonToFile(this.main);
            if (json == null)
                return;
        };
        Mod.prototype.setName = function (name) {
            this.name = name;
            return this;
        };
        Mod.prototype.getName = function () {
            return this.name;
        };
        Mod.prototype.setShow = function (show) {
            this.show = show;
            return this;
        };
        Mod.prototype.canShow = function () {
            return this.show;
        };
        return Mod;
    }());
    MinecraftOnline.Mod = Mod;
    function register(mod) {
        mods.push(mod);
        mod.init();
    }
    MinecraftOnline.register = register;
    function endLoadMods() {
        open();
    }
    MinecraftOnline.endLoadMods = endLoadMods;
    function open() {
    }
    MinecraftOnline.open = open;
    function close() {
    }
    MinecraftOnline.close = close;
})(MinecraftOnline || (MinecraftOnline = {}));
Callback.addCallback("CoreConfigured", function () {
    MinecraftOnline.endLoadMods();
});
Callback.addCallback("NativeGuiChanged", function (name) {
    if (name == "start_screen")
        MinecraftOnline.open();
    else
        MinecraftOnline.close();
});
MinecraftOnline.register(new MinecraftOnline.Mod(new AndroidFileSystem(__dir__ + "test"), "main.json")
    .setName("FtbQuests")
    .setShow(true));
var Color = android.graphics.Color;
var UiDialogBaseStyle = /** @class */ (function () {
    function UiDialogBaseStyle(frame, size, scale, color, text, background) {
        if (frame === void 0) { frame = "default_container_frame"; }
        if (size === void 0) { size = 20; }
        if (scale === void 0) { scale = .5; }
        if (color === void 0) { color = [.1, 0, 0, 0]; }
        if (text === void 0) { text = [1, 1, 1]; }
        if (background === void 0) { background = [.25, 0, 0, 0]; }
        this.frame = frame;
        this.size = size;
        this.scale = scale;
        this.color = color;
        this.text = text;
        this.background = background;
    }
    return UiDialogBaseStyle;
}());
var CloseButtonStyle = /** @class */ (function () {
    function CloseButtonStyle(bitmap) {
        if (bitmap === void 0) { bitmap = "missing_image"; }
        this.bitmap = bitmap;
        var image = TextureSource.get(bitmap);
        this.scale = 50 / image.getWidth();
    }
    return CloseButtonStyle;
}());
;
var UiTabStyle = /** @class */ (function () {
    function UiTabStyle() {
        this.frame = "default_container_frame";
        this.tab_slot = "_default_slot_empty";
        this.tab_selected = "default_container_frame_alpha";
        this.scale = .5;
        this.quest = "ftbquests_default_quest";
        this.questPost = "ftbquests_default_quest_post";
    }
    return UiTabStyle;
}());
;
var UiStyle = /** @class */ (function () {
    function UiStyle() {
        this.setMainBackground("background_squares");
        this.close_main = new CloseButtonStyle();
        this.tab = new UiTabStyle();
    }
    UiStyle.prototype.setMainBackground = function (bitmap) {
        this.bitmap = TextureSource.get(bitmap);
    };
    UiStyle.prototype.setCloseButton = function (button) {
        this.close_main = button;
    };
    return UiStyle;
}());
;
/// <reference path="./UiStyle.ts"/>
var Font = com.zhekasmirnov.innercore.api.mod.ui.types.Font;
var TextElement = com.zhekasmirnov.innercore.api.mod.ui.elements.UITextElement;
var Size = /** @class */ (function () {
    function Size(width, height) {
        this.width = width;
        this.height = height;
    }
    return Size;
}());
Translation.addTranslation("Tasks", {
    ru: "Задачи"
});
Translation.addTranslation("Awards", {
    ru: "Награды"
});
var McTypeface = (function () {
    var paint = new android.graphics.Paint();
    paint.setTypeface(WRAP_JAVA("com.zhekasmirnov.innercore.utils.FileTools").getMcTypeface());
    return paint;
})();
var UiDialogBase = /** @class */ (function () {
    function UiDialogBase(message, x, y) {
        if (x === void 0) { x = 0; }
        if (y === void 0) { y = 0; }
        this.status_exit = true;
        this.message = Translation.translate(message);
        this.x = x;
        this.y = y;
        this.style = new UiDialogBaseStyle();
        this.build();
    }
    UiDialogBase.prototype.setStyle = function (style) {
        this.style = style;
        return this;
    };
    UiDialogBase.getWidthText = function (message, size) {
        McTypeface.setTextSize(size);
        return Number(McTypeface.measureText(message));
    };
    UiDialogBase.getSize = function (message, size) {
        var font = new Font({ size: size });
        var lines = message.split("\n");
        var height = 0;
        var width = 0;
        for (var i in lines) {
            var text = lines[i];
            height += font.getTextHeight(text, 0, 0 + height, 1) * 1.1;
            if (width < UiDialogBase.getWidthText(text, size))
                width = UiDialogBase.getWidthText(text, size);
        }
        return new Size(width, height);
    };
    UiDialogBase.prototype.getSize = function () {
        return UiDialogBase.getSize(this.message, this.style.size);
    };
    UiDialogBase.prototype.openCenter = function (location) {
        if (location === void 0) { location = new UI.WindowLocation(); }
        var size = this.getSize();
        if (size.height < this.ui.location.height)
            this.setPos((1000 / 2) - (size.width / 2), (this.ui.location.height / 2) - (size.height / 2)).build().open();
        else {
            this.setPos((1000 / 2) - (size.width / 2), 0).build().open();
            var location_1 = this.ui.getLocation();
            location_1.setScroll(0, size.height);
            this.ui.updateWindowLocation();
        }
    };
    UiDialogBase.prototype.isDisplay = function (x, y) {
        if (x === void 0) { x = this.x; }
        if (y === void 0) { y = this.y; }
        var size = this.getSize();
        if (x + size.width > 1000 || y + size.height > height)
            return false;
        return true;
    };
    UiDialogBase.prototype.setCanExit = function (status) {
        this.status_exit = status;
        return this;
    };
    UiDialogBase.prototype.build = function () {
        var self = this;
        var description = { type: "text", text: this.message, x: this.x, y: this.y, font: { size: this.style.size, color: android.graphics.Color.rgb(this.style.text[0], this.style.text[1], this.style.text[2]) }, multiline: true };
        var size = this.getSize();
        var display = null;
        try {
            display = UI.getContext().getWindowManager().getDefaultDisplay();
        }
        catch (ignore) { }
        var dispaly_size = new android.graphics.Point();
        display && display.getSize(dispaly_size);
        this.ui = new UI.Window({
            location: {
                forceScrollY: true
            },
            drawing: [
                { type: "color", color: android.graphics.Color.argb(this.style.background[0], this.style.background[1], this.style.background[2], this.style.background[3]) }
            ],
            elements: {
                "background": { type: "image", bitmap: "_default_slot_empty", x: 0, y: 0, width: 1000, height: 999999, onTouchEvent: function (self_, event) {
                        var x = event.x;
                        var y = event.y;
                        var frame = self.ui.getContent().elements.frame;
                        if (self.status_exit && !(x >= frame.x && y >= frame.y && x <= frame.x + frame.width && y <= frame.y + frame.height))
                            self.close();
                    }, z: -5 },
                "frame": { type: "frame", bitmap: this.style.frame, x: this.x - 10, y: this.y - 10, width: size.width + 20, height: size.height + 20, scale: this.style.scale, color: android.graphics.Color.argb(this.style.color[0], this.style.color[1], this.style.color[2], this.style.color[3]) },
                "text": description
            }
        });
        this.ui.setEventListener({
            onClose: function (window) { },
            onOpen: function (window) {
                onSystemUiVisibilityChange(self.ui.layout);
            },
        });
        this.ui.setCloseOnBackPressed(this.status_exit);
        this.ui.setBlockingBackground(true);
        return this;
    };
    UiDialogBase.prototype.setPos = function (x, y) {
        this.x = x;
        this.y = y;
        return this;
    };
    UiDialogBase.prototype.setMessage = function (message) {
        this.message = Translation.translate(message);
        return this;
    };
    UiDialogBase.prototype.getUi = function () {
        return this.ui;
    };
    UiDialogBase.prototype.open = function () {
        this.ui.open();
        return this;
    };
    UiDialogBase.prototype.close = function () {
        this.ui.close();
        return this;
    };
    UiDialogBase.prototype.toJson = function () {
        return {
            type: "base",
            message: this.message,
            status_exit: this.status_exit
        };
    };
    UiDialogBase.register = function (type, func) {
        this.dialog_types[type] = func;
    };
    UiDialogBase.buildFrom = function (json) {
        if (!json)
            return null;
        var func = this.dialog_types[json.type];
        if (func)
            return func(json);
        return null;
    };
    UiDialogBase.dialog_types = {};
    return UiDialogBase;
}());
;
UiDialogBase.register("base", function (json) { return new UiDialogBase(json.message)
    .setCanExit(json.status_exit); });
/// <reference path="./UiDialogBase.ts"/>
var UiDialogStyle = /** @class */ (function (_super) {
    __extends(UiDialogStyle, _super);
    function UiDialogStyle(frame, size, scale, color, text, background) {
        if (frame === void 0) { frame = undefined; }
        if (size === void 0) { size = 20; }
        if (scale === void 0) { scale = .5; }
        if (color === void 0) { color = undefined; }
        if (text === void 0) { text = [1, 1, 1]; }
        if (background === void 0) { background = [0, 0, 0, 0]; }
        var _this = _super.call(this, frame, size, scale, color, text, background) || this;
        _this.slot_size = 60;
        _this.count_slot = 4;
        _this.description_size = 15;
        _this.description_color = text;
        return _this;
    }
    return UiDialogStyle;
}(UiDialogBaseStyle));
Network.addServerPacket("ftb.accept_quest", function (client, data) {
    var e_1, _a, e_2, _b;
    if (UiMainBuilder.getUiMainByName(data.main).canQuest(data.isLeft, data.tab, data.quest, client.getPlayerUid()))
        return;
    var actor = new PlayerActor(client.getPlayerUid());
    var items = {};
    for (var slot = 0; slot < 36; slot++) {
        var item = actor.getInventorySlot(slot);
        try {
            for (var _c = (e_1 = void 0, __values(data.items)), _d = _c.next(); !_d.done; _d = _c.next()) {
                var input = _d.value;
                if (input.item.id == item.id && input.item.data == item.data && input.item.count <= item.count) {
                    items[item.id] = { slot: slot, item: input.item };
                    break;
                }
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_d && !_d.done && (_a = _c.return)) _a.call(_c);
            }
            finally { if (e_1) throw e_1.error; }
        }
    }
    var keys = Object.keys(items);
    try {
        for (var _e = __values(data.items), _f = _e.next(); !_f.done; _f = _e.next()) {
            var input = _f.value;
            if (keys.indexOf(String(input.item.id)) == -1)
                return;
        }
    }
    catch (e_2_1) { e_2 = { error: e_2_1 }; }
    finally {
        try {
            if (_f && !_f.done && (_b = _e.return)) _b.call(_e);
        }
        finally { if (e_2) throw e_2.error; }
    }
    for (var key in items) {
        var item = items[key];
        var _item = actor.getInventorySlot(item.slot);
        actor.setInventorySlot(item.slot, _item.id, _item.count - item.item.count, _item.data, null);
    }
    UiMainBuilder.getUiMainByName(data.main).give(data.isLeft, data.tab, data.quest, client.getPlayerUid(), data.description, data.title);
});
;
var UiDialog = /** @class */ (function (_super) {
    __extends(UiDialog, _super);
    function UiDialog(title, description, x, y, maxWidth) {
        if (description === void 0) { description = ""; }
        if (x === void 0) { x = 0; }
        if (y === void 0) { y = 0; }
        if (maxWidth === void 0) { maxWidth = 600; }
        var _this = _super.call(this, title, x, y) || this;
        _this.inventontory_check = false;
        _this.input = [];
        _this.result = [];
        _this.style = new UiDialogStyle();
        _this.setDescription(description, maxWidth);
        return _this;
    }
    UiDialog.prototype.setDescription = function (description, maxWidth) {
        if (maxWidth === void 0) { maxWidth = 600; }
        this.descriptionOrginal = description;
        description = Translation.translate(description);
        var list = description.split(" ");
        var width = 0;
        var result = "";
        for (var i in list) {
            var text = list[i];
            var size = UiDialogBase.getSize(text, this.style.description_size);
            if (width + size.width > maxWidth)
                width = 0, result += "\n";
            if (width != 0)
                result += " ";
            result += text, width += size.width;
        }
        description = result;
        this.description = description;
        return this;
    };
    UiDialog.prototype.setInput = function (inputs) {
        this.input = inputs;
        return this;
    };
    UiDialog.prototype.setResult = function (results) {
        this.result = results;
        return this;
    };
    UiDialog.prototype.getSize = function () {
        var size = _super.prototype.getSize.call(this);
        try {
            size.height += 30;
            var count_slot = Math.min(Math.max(this.input.length, this.result.length), this.style.count_slot);
            var count_line = Math.max(Math.ceil(this.input.length / this.style.count_slot), Math.ceil(this.result.length / this.style.count_slot));
            size.height += (count_line * this.style.slot_size) || 0;
            var slot = this.style.slot_size;
            size.width = Math.max(size.width, slot * (count_slot * 2) + 60);
            var description = UiDialogBase.getSize(this.description, this.style.description_size);
            if (this.description != "") {
                size.width = Math.max(size.width, description.width + 40);
                size.height += description.height + 20;
            }
            if (this.inventontory_check && this.quest && !this.quest.tab.tab.main.canQuest(this.quest.tab.tab.isLeft, this.quest.tab.getId(), this.quest.getId())) {
                size.width = Math.max(size.width, 102);
                size.height += 62;
            }
        }
        catch (error) { }
        return size;
    };
    UiDialog.prototype.setInventoryCheck = function (inventontory_check) {
        this.inventontory_check = inventontory_check;
        return this;
    };
    UiDialog.prototype.buildSlots = function (items, x, name) {
        var content = this.ui.getContent();
        var size = _super.prototype.getSize.call(this);
        var y = this.y + size.height + 20;
        var _x = this.x + x;
        var slots = 1;
        var _loop_1 = function (i) {
            var item = items[i];
            content.elements[name + i] = { type: "slot", x: _x, size: this_1.style.slot_size, y: y, source: item.item, visual: true, bitmap: "_default_slot_empty", clicker: {
                    onClick: function () {
                        if (item.dialog)
                            item.dialog.openCenter();
                    }
                } };
            _x += this_1.style.slot_size;
            if (slots == this_1.style.count_slot || i == items.length - 1) {
                slots = 0;
                y += this_1.style.slot_size;
                _x = this_1.x + x;
            }
            slots++;
        };
        var this_1 = this;
        for (var i = 0; i < items.length; i++) {
            _loop_1(i);
        }
        return y;
    };
    UiDialog.prototype.build = function () {
        try {
            _super.prototype.build.call(this);
            var content = this.ui.getContent();
            var _size = this.getSize();
            var size = _super.prototype.getSize.call(this);
            var y = this.y + size.height;
            if (this.input.length > 0 || this.result.length > 0) {
                var slots1 = this.buildSlots(this.input, -10, "input_");
                var slots2 = this.buildSlots(this.result, _size.width / 2 - 10, "result_");
                y = Math.max(slots1, slots2);
                if (this.description != "")
                    y += 10;
                content.drawing.push({ type: "line", width: 5, x1: this.x - 10, y1: this.y + size.height + 15, x2: this.x + _size.width - 10, y2: this.y + size.height + 15 });
                content.drawing.push({ type: "line", width: 5, x1: this.x + _size.width / 2 - 10, y1: this.y + size.height + 15, x2: this.x + _size.width / 2 - 10, y2: y });
            }
            if (this.description != "") {
                content.drawing.push({ type: "line", width: 5, x1: this.x - 10, y1: y, x2: this.x + _size.width - 10, y2: y });
                content.elements["description"] = { type: "text", text: this.description, x: this.x, y: y + 3, font: { size: this.style.description_size, color: android.graphics.Color.rgb(this.style.description_color[0], this.style.description_color[1], this.style.description_color[2]) }, multiline: true };
            }
            var self_1 = this;
            if (this.inventontory_check && this.quest && !this.quest.tab.tab.main.canQuest(this.quest.tab.tab.isLeft, this.quest.tab.getId(), this.quest.getId()))
                content.elements["accept"] = { type: "button", bitmap: "accept", bitmap2: "accept_gray", x: this.x + _size.width - 62, y: this.y + _size.height - 62, scale: 2, clicker: {
                        onClick: function () {
                            Network.sendToServer("ftb.accept_quest", {
                                items: self_1.input,
                                main: self_1.quest.tab.tab.main.getClientName(),
                                isLeft: self_1.quest.tab.tab.isLeft,
                                tab: self_1.quest.tab.getId(),
                                quest: self_1.quest.getId(),
                                description: self_1.quest.quest.description,
                                title: self_1.quest.quest.name
                            });
                        }
                    } };
            content.elements["frame"].width = _size.width;
            content.elements["frame"].height = _size.height;
        }
        catch (error) { }
        return this;
    };
    UiDialog.prototype.toJson = function () {
        var input = [];
        for (var i in this.input)
            input.push(this.input[i].item);
        var result = [];
        for (var i in this.result)
            result.push(this.result[i].item);
        return {
            type: "dialog",
            message: this.message,
            status_exit: this.status_exit,
            description: this.descriptionOrginal,
            input: input,
            result: result
        };
    };
    return UiDialog;
}(UiDialogBase));
UiDialogBase.register("dialog", function (json) {
    var input = [];
    for (var i in json.input)
        input.push({
            item: json.input[i]
        });
    var result = [];
    for (var i in json.result)
        result.push({
            item: json.result[i]
        });
    return new UiDialog(json.message)
        .setCanExit(json.status_exit)
        .setDescription(json.description)
        .setInput(input)
        .setResult(result);
});
var MinecraftDialogStyle = /** @class */ (function (_super) {
    __extends(MinecraftDialogStyle, _super);
    function MinecraftDialogStyle(text, background) {
        return _super.call(this, "minecraft_frame", 20, 1, [1, 0, 0, 0], text, background) || this;
    }
    return MinecraftDialogStyle;
}(UiDialogBaseStyle));
var Quest = /** @class */ (function () {
    function Quest(description) {
        this.client_type = "base";
        this.dialog = new UiDialog("", "");
        this.description = description;
        this.description.lines = this.description.lines === undefined ? [] : this.description.lines;
    }
    Quest.prototype.getTab = function () {
        return this.tab;
    };
    Quest.prototype.getId = function () {
        return this.description.id;
    };
    Quest.prototype.getItem = function () {
        return this.description.item === undefined ? { id: 0, count: 1, data: 0 } : this.description.item;
    };
    Quest.prototype.getX = function () {
        return this.description.x;
    };
    Quest.prototype.getY = function () {
        return this.description.y;
    };
    Quest.prototype.getSize = function () {
        return this.description.size === undefined ? 50 : this.description.size;
    };
    Quest.prototype.getTexture = function (style) {
        return this.description.texture === undefined ? style.tab.quest : this.description.texture;
    };
    Quest.prototype.getTexturePost = function (style) {
        return this.description.texturePost === undefined ? style.tab.questPost : this.description.texturePost;
    };
    Quest.prototype.getLines = function () {
        return this.description.lines === undefined ? [] : this.description.lines;
    };
    Quest.prototype.setDialog = function (dialog) {
        dialog.quest = this;
        this.dialog = dialog;
        return this;
    };
    Quest.prototype.getDialog = function () {
        return this.dialog;
    };
    Quest.prototype.onClick = function (position, container, tileEntity, window, canvas, scale) {
        this.dialog.style.background = [.25, 0, 0, 0];
        this.dialog.openCenter();
    };
    Quest.prototype.onLongClick = function (position, container, tileEntity, window, canvas, scale) {
        if (this.tab.tab.main.isDebug()) {
            var self_2 = this;
            var ui_1 = new UiDialogSetting("What?")
                .addElement(new SettingButtonTextElement(Translation.translate("Delete")).setClick(function () {
                self_2.tab.deleteQuest(self_2.getId());
                ui_1.close();
                self_2.tab.tab.main.open();
            }))
                .addElement(new SettingButtonTextElement(Translation.translate("Edit")).setClick(function () {
                ui_1.close();
                QuestEditor.openEditor(self_2.tab.tab.main, self_2, false);
            }))
                .setEnableExitButton(false);
            ui_1.openCenter();
        }
    };
    Quest.prototype.buildLine = function (window, x1, y1, x2, y2, size1, size2, name) {
        var color = android.graphics.Color.WHITE;
        if (this.tab.tab.main.canQuest(this.tab.tab.canLeft(), this.tab.getId(), name)) {
            color = android.graphics.Color.YELLOW;
            if (this.tab.tab.main.canQuest(this.tab.tab.canLeft(), this.tab.getId(), this.getId()))
                color = android.graphics.Color.GREEN;
        }
        window.getContent().drawing.push(line([x1 + size1 / 2, y1 + size1 / 2], [x2 + size2 / 2, y2 + size2 / 2], 15, color));
    };
    Quest.prototype.build = function (window) {
        var self = this;
        for (var i in this.description.lines) {
            var name = this.description.lines[i];
            var quest = this.tab.getQuest(name);
            quest && this.buildLine(window, quest.getX(), quest.getY(), this.getX(), this.getY(), quest.getSize(), this.getSize(), name);
        }
        var slot = { type: "slot", bitmap: this.tab.tab.main.canQuest(this.tab.tab.canLeft(), this.tab.getId(), this.getId()) ? this.getTexturePost(this.tab.tab.main.style) : this.getTexture(this.tab.tab.main.style), source: this.getItem(), x: this.getX(), y: this.getY(), size: this.getSize(), visual: true, clicker: {
                onClick: function (position, container, tileEntity, window, canvas, scale) {
                    self.onClick(position, container, tileEntity, window, canvas, scale);
                },
                onLongClick: function (position, container, tileEntity, window, canvas, scale) {
                    self.onLongClick(position, container, tileEntity, window, canvas, scale);
                },
            } };
        return slot;
    };
    Quest.prototype.onAddedQuest = function () {
        return true;
    };
    Quest.prototype.onRemoveQuest = function () {
        return true;
    };
    Quest.prototype.canExternal = function () {
        return false;
    };
    Quest.prototype.externalPacket = function () {
        return this.description;
    };
    Quest.prototype.getClientType = function () {
        return this.client_type;
    };
    Quest.registerClient = function (type, clazz) {
        Quest.clients[type] = clazz;
    };
    Quest.buildForServer = function (type, data, dialog) {
        var clazz = Quest.clients[type];
        if (clazz) {
            var res = new clazz(data);
            dialog && res.setDialog(dialog);
            return res;
        }
        return null;
    };
    Quest.clients = {};
    return Quest;
}());
;
var ExternalQuest = /** @class */ (function (_super) {
    __extends(ExternalQuest, _super);
    function ExternalQuest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ExternalQuest.prototype.canExternal = function () {
        return true;
    };
    return ExternalQuest;
}(Quest));
Quest.registerClient("base", ExternalQuest);
/// <reference path="./UiDialogBase.ts"/>
var Utils = WRAP_JAVA("com.zhekasmirnov.innercore.utils.UIUtils");
Translation.addTranslation("What?", {
    ru: "Что?"
});
Translation.addTranslation("Delete", {
    ru: "Удалить"
});
Translation.addTranslation("Edit", {
    ru: "Редактировать"
});
var UiTabsBuilder = /** @class */ (function () {
    function UiTabsBuilder(prefix, isLeft) {
        this.dialog = new UiDialogBase("", 0, 0);
        this.elements = [];
        this.prefix = prefix;
        this.isLeft = isLeft;
    }
    UiTabsBuilder.prototype.getTab = function (name) {
        var e_3, _a;
        try {
            for (var _b = __values(this.elements), _c = _b.next(); !_c.done; _c = _b.next()) {
                var element = _c.value;
                if (element.getId() == name)
                    return element;
                else {
                    var tab = element.getTab(name);
                    if (tab)
                        return tab;
                }
            }
        }
        catch (e_3_1) { e_3 = { error: e_3_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_3) throw e_3.error; }
        }
        return null;
    };
    UiTabsBuilder.prototype.remove = function (id) {
        for (var i = 0; i < this.elements.length; i++)
            if (this.elements[i].getId() == id)
                return this.elements.splice(i, 1)[0];
        return null;
    };
    UiTabsBuilder.prototype.getAllTab = function () {
        var tabs = [];
        for (var i in this.elements)
            tabs.push(this.elements[i].getId());
        return tabs;
    };
    UiTabsBuilder.prototype.getIdQuest = function (id, count, id_org) {
        if (count === void 0) { count = 0; }
        if (id_org === void 0) { id_org = id; }
        for (var tab in this.elements) {
            var elements = this.elements[tab].getAllQuest();
            for (var quest in elements)
                if (id == elements[quest]) {
                    count++;
                    return this.getIdQuest(id_org + "_" + count, count, id_org);
                }
        }
        return id;
    };
    UiTabsBuilder.prototype.addRender = function (element) {
        if (this.getTab(element.getId()) !== null)
            return this;
        element.setUiTabsBuilder(this);
        this.elements.push(element);
        element.addedTab();
        return this;
    };
    UiTabsBuilder.prototype.forEach = function (func) {
        for (var i in this.elements)
            func(this.elements[i]);
    };
    UiTabsBuilder.prototype.setUiMainBuilder = function (main, ui) {
        this.main = main;
        this.ui = ui;
        return this;
    };
    UiTabsBuilder.prototype.getUiMainBuilder = function () {
        return this.main;
    };
    UiTabsBuilder.prototype.canLeft = function () {
        return this.isLeft;
    };
    UiTabsBuilder.prototype.buildServer = function (container) {
        this.elements.forEach(function (element) {
            if (element.isDisplay())
                element.updateSlotItem(container);
        });
        return this;
    };
    UiTabsBuilder.prototype.buildTabInformation = function (element, group, style) {
        element.build(group.getWindow("main"));
    };
    UiTabsBuilder.prototype.clear = function (element) {
        var _this = this;
        this.elements.forEach(function (element) {
            _this.ui.content.elements[_this.prefix + "_" + element.getId()].bitmap = element.getTextureSlot(_this.main.style);
        });
    };
    UiTabsBuilder.prototype.selectedTab = function (builder, element) {
        this.clear(element);
    };
    UiTabsBuilder.prototype.onClick = function (element, position, container, tileEntity, window, canvas, scale) {
        if (element.onClick(position, container, tileEntity, window, canvas, scale)) {
            this.main.selectedTab(this, element);
            this.ui.content.elements[this.prefix + "_" + element.getId()].bitmap = element.getTextureSelected(this.main.style);
            this.buildTabInformation(element, this.main.group, this.main.style);
        }
    };
    UiTabsBuilder.prototype.openDialogToTab = function (dialog, tab) {
        var element = this.ui.content.elements[this.prefix + "_" + tab.getId()];
        var size = dialog.getSize();
        var y = this.ui.location.windowToGlobal(element.y - this.ui.location.globalToWindow(this.ui.layout.getScrollY() / this.ui.location.getScale()));
        if (this.isLeft)
            dialog.setPos(tab.getSize() + 10, y + 10).build().open();
        else
            dialog.setPos((1000 - this.getMaxSize()) - size.width - 10, y + 10).build().open();
        return this;
    };
    UiTabsBuilder.prototype.replaceTab = function (name, tab) {
        for (var i in this.elements)
            if (this.elements[i].getId() == name) {
                this.deleteFileTab(this.elements[i]);
                tab.copyQuests(this.elements[i]);
                this.elements[i] = tab;
                break;
            }
    };
    UiTabsBuilder.prototype.deleteFileTab = function (tab) {
        var file = FileTools.ReadJSON(tab.path);
        if (file.type == "main") {
            for (var i in file.tabs) {
                var path = file.tabs[i];
                var _tab = FileTools.ReadJSON(path);
                if (_tab.identifier == tab.getId()) {
                    file.tabs.splice(Number(i), 1);
                    break;
                }
            }
            FileTools.WriteJSON(tab.path, file, true);
        }
        else
            new java.io.File(tab.path).delete();
    };
    UiTabsBuilder.prototype.deleteTab = function (name) {
        for (var i in this.elements)
            if (this.elements[i].getId() == name) {
                this.deleteFileTab(this.elements.splice(Number(i), 1)[0]);
                break;
            }
        return this;
    };
    UiTabsBuilder.prototype.onLongClick = function (element, position, container, tileEntity, window, canvas, scale) {
        if (this.main.isDebug() && element.isEdit()) {
            var self_3 = this;
            var ui_2 = new UiDialogSetting("What?")
                .addElement(new SettingButtonTextElement(Translation.translate("Delete")).setClick(function () {
                self_3.deleteTab(element.getId());
                ui_2.close();
                self_3.main.open();
            }))
                .addElement(new SettingButtonTextElement(Translation.translate("Edit")).setClick(function () {
                ui_2.close();
                TabEditor.openEditor(self_3.main, element, self_3.isLeft, false);
            }))
                .setEnableExitButton(false);
            ui_2.openCenter();
            return;
        }
        if (element.onLongClick(position, container, tileEntity, window, canvas, scale) && element.getDisplayName() != "") {
            this.dialog.setMessage(element.getDisplayName());
            this.openDialogToTab(this.dialog, element);
        }
    };
    UiTabsBuilder.prototype.build = function (container, left, right) {
        var _this = this;
        var location = new UI.WindowLocation({
            padding: {
                right: right,
                left: left
            }
        });
        var elements = {};
        var self = this;
        var y = 0;
        this.elements.forEach(function (element) {
            if (element.isDisplay()) {
                var size = location.globalToWindow(element.getSize());
                elements[_this.prefix + "_" + element.getId()] = { type: "slot", x: 0, y: y, size: size, visual: true, bitmap: element.getTextureSlot(_this.main.style), clicker: {
                        onClick: function (position, container, tileEntity, window, canvas, scale) {
                            self.onClick(element, position, container, tileEntity, window, canvas, scale);
                        },
                        onLongClick: function (position, container, tileEntity, window, canvas, scale) {
                            self.onLongClick(element, position, container, tileEntity, window, canvas, scale);
                        },
                    }, source: element.getItem() };
                element.updateSlotClient(container);
                y += size;
            }
        });
        location.setScroll(0, location.windowToGlobal(y));
        this.ui = new UI.Window({
            location: location.asScriptable(),
            drawing: [
                { type: "color", color: android.graphics.Color.argb(0, 0, 0, 0) }
            ],
            elements: elements,
        });
        onSystemUiVisibility(this.ui);
        return this;
    };
    UiTabsBuilder.prototype.getMaxSize = function () {
        var max = 0;
        this.elements.forEach(function (element) {
            if (element.isDisplay() && max < element.getSize())
                max = element.getSize();
        });
        return max;
    };
    UiTabsBuilder.prototype.getHeight = function () {
        var y = 0;
        this.elements.forEach(function (element) {
            if (element.isDisplay())
                y += element.getSize();
        });
        return y;
    };
    return UiTabsBuilder;
}());
;
var StandartTabElement = /** @class */ (function () {
    function StandartTabElement(id) {
        this.id = id;
        this.quests = [];
    }
    StandartTabElement.prototype.setUiTabsBuilder = function (tab) {
        this.tab = tab;
        if (tab)
            this.isLeft = tab.isLeft;
        return this;
    };
    StandartTabElement.prototype.getUitabsBuilder = function () {
        return this.tab;
    };
    StandartTabElement.prototype.getAllQuest = function () {
        var result = [];
        for (var i in this.quests)
            result.push(this.quests[i].getId());
        return result;
    };
    StandartTabElement.prototype.addQuest = function (quest) {
        if (!quest || !quest.onAddedQuest() || this.getQuest(quest.getId()) !== null)
            return this;
        quest.tab = this;
        this.quests.push(quest);
        return this;
    };
    StandartTabElement.prototype.forEach = function (func) {
        for (var i in this.quests)
            func(this.quests[i]);
    };
    StandartTabElement.prototype.getQuest = function (name) {
        var e_4, _a;
        try {
            for (var _b = __values(this.quests), _c = _b.next(); !_c.done; _c = _b.next()) {
                var quest = _c.value;
                if (quest.getId() == name)
                    return quest;
            }
        }
        catch (e_4_1) { e_4 = { error: e_4_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_4) throw e_4.error; }
        }
        return null;
    };
    StandartTabElement.prototype.copyQuests = function (tab) {
        var e_5, _a;
        var names = tab.getAllQuest();
        try {
            for (var names_1 = __values(names), names_1_1 = names_1.next(); !names_1_1.done; names_1_1 = names_1.next()) {
                var name = names_1_1.value;
                this.addQuest(tab.getQuest(name));
            }
        }
        catch (e_5_1) { e_5 = { error: e_5_1 }; }
        finally {
            try {
                if (names_1_1 && !names_1_1.done && (_a = names_1.return)) _a.call(names_1);
            }
            finally { if (e_5) throw e_5.error; }
        }
        return this;
    };
    StandartTabElement.prototype.build = function (window) {
        var _this = this;
        var content = window.getContent();
        var width = 0;
        var heigth = 0;
        var location = window.getLocation();
        content.drawing = [{ type: "color", color: android.graphics.Color.argb(0, 0, 0, 0) }];
        content.elements = {};
        this.quests.forEach(function (element) {
            element.tab = _this;
            var object = element.build(window);
            width = Math.max(width, object.x + object.size);
            heigth = Math.max(heigth, object.y + object.size);
            content.elements[element.getId()] = object;
        });
        window.setContent(content);
        window.forceRefresh();
        location.setScroll(width, heigth);
        window.updateScrollDimensions();
    };
    StandartTabElement.prototype.getId = function () {
        return this.id;
    };
    StandartTabElement.prototype.getDisplayName = function () {
        return this.name || "Display Name";
    };
    StandartTabElement.prototype.setDisplayName = function (name) {
        this.name = name;
        return this;
    };
    StandartTabElement.prototype.isDisplay = function () {
        return true;
    };
    StandartTabElement.prototype.getItem = function () {
        return this.item || { id: 0, count: 1, data: 0 };
    };
    StandartTabElement.prototype.setItem = function (item) {
        this.item = item;
        return this;
    };
    StandartTabElement.prototype.updateSlotItem = function (container) { };
    StandartTabElement.prototype.updateSlotClient = function (container) { };
    StandartTabElement.prototype.getTextureSlot = function (style) {
        return style.tab.tab_slot;
    };
    StandartTabElement.prototype.getTextureSelected = function (style) {
        return style.tab.tab_selected;
    };
    StandartTabElement.prototype.getSize = function () {
        return 60;
    };
    StandartTabElement.prototype.onClick = function (position, container, tileEntity, window, canvas, scale) {
        return true;
    };
    StandartTabElement.prototype.onLongClick = function (position, container, tileEntity, window, canvas, scale) {
        return true;
    };
    StandartTabElement.prototype.addedTab = function () {
        return this;
    };
    StandartTabElement.prototype.getTab = function (name) {
        return null;
    };
    StandartTabElement.prototype.isEdit = function () {
        return true;
    };
    StandartTabElement.prototype.deleteQuestToTab = function (tab, quest) {
        for (var i in tab.quests) {
            var quest_ = tab.quests[i];
            if (typeof quest_ == "object" && quest_.identifier == quest.getId()) {
                tab.quests.splice(Number(i), 1);
                break;
            }
        }
    };
    StandartTabElement.prototype.deleteQuest = function (name) {
        var e_6, _a;
        for (var i in this.quests) {
            var quest = this.quests[i];
            if (quest.getId() == name) {
                if (!quest.onRemoveQuest())
                    break;
                this.quests.splice(Number(i), 1);
                var file = FileTools.ReadJSON(quest.path);
                if (file.type == "main") {
                    try {
                        for (var _b = (e_6 = void 0, __values(file.tabs)), _c = _b.next(); !_c.done; _c = _b.next()) {
                            var tab = _c.value;
                            if (typeof tab == "object" && tab.identifier == this.getId())
                                this.deleteQuestToTab(tab, quest);
                        }
                    }
                    catch (e_6_1) { e_6 = { error: e_6_1 }; }
                    finally {
                        try {
                            if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                        }
                        finally { if (e_6) throw e_6.error; }
                    }
                    FileTools.WriteJSON(quest.path, file, true);
                }
                else if (file.type == "tab") {
                    this.deleteQuestToTab(file, quest);
                    FileTools.WriteJSON(quest.path, file, true);
                }
                else
                    new java.io.File(quest.path).delete();
                return this;
            }
        }
        return this;
    };
    StandartTabElement.prototype.replaceQuest = function (name, quest) {
        for (var i in this.quests)
            if (this.quests[i].getId() == name) {
                this.quests[i] = quest;
                return this;
            }
        return this;
    };
    return StandartTabElement;
}());
;
/// <reference path="./StandartTabElement.ts"/>
/// <reference path="./UiStyle.ts"/>
var TabCloseElement = /** @class */ (function (_super) {
    __extends(TabCloseElement, _super);
    function TabCloseElement() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TabCloseElement.prototype.getTextureSlot = function (style) {
        return "classic_close_button";
    };
    TabCloseElement.prototype.isEdit = function () {
        return false;
    };
    TabCloseElement.prototype.onClick = function (position, container, tileEntity, window, canvas, scale) {
        this.tab.main.main.close();
        return false;
    };
    TabCloseElement.prototype.onLongClick = function (position, container, tileEntity, window, canvas, scale) {
        return false;
    };
    return TabCloseElement;
}(StandartTabElement));
;
var items = [];
var ItemIconSource = WRAP_JAVA("com.zhekasmirnov.innercore.api.mod.ui.icon.ItemIconSource").instance;
function added(object, tag) {
    for (var key in object)
        items.push({
            id: key,
            _id: object[key],
            tag: tag,
            fullId: tag + key
        });
}
Callback.addCallback("PostLoaded", function () {
    added(VanillaBlockID, "VanillaBlockID.");
    added(VanillaItemID, "VanillaItemID.");
    added(BlockID, "BlockID.");
    added(ItemID, "ItemID.");
});
var SelectedItemDialog = /** @class */ (function (_super) {
    __extends(SelectedItemDialog, _super);
    function SelectedItemDialog(title) {
        var _this = _super.call(this, title) || this;
        _this.count_x = 10;
        _this.count_y = 8;
        _this.size = 40;
        _this.list = 0;
        _this.items = items;
        return _this;
    }
    SelectedItemDialog.getItemSelectedById = function (id) {
        var e_7, _a;
        try {
            for (var items_1 = __values(items), items_1_1 = items_1.next(); !items_1_1.done; items_1_1 = items_1.next()) {
                var item = items_1_1.value;
                if (item._id == id)
                    return item;
            }
        }
        catch (e_7_1) { e_7 = { error: e_7_1 }; }
        finally {
            try {
                if (items_1_1 && !items_1_1.done && (_a = items_1.return)) _a.call(items_1);
            }
            finally { if (e_7) throw e_7.error; }
        }
        return null;
    };
    SelectedItemDialog.prototype.getSize = function () {
        var size = _super.prototype.getSize.call(this);
        size.width = Math.max(size.width, 20 + this.size * this.count_x);
        size.height = Math.max(size.height, 20 + this.size * this.count_y + size.height + 28);
        return size;
    };
    SelectedItemDialog.prototype.updateList = function (content, height) {
        var self = this;
        var i = 0 + this.list * (this.count_x * this.count_y);
        for (var y = 0; y < this.count_y; y++) {
            var _loop_2 = function (x) {
                var _i = i;
                content.elements["slot_" + x + "_" + y] = { type: "slot", x: this_2.x + this_2.size * x, y: this_2.y + this_2.size * y + height, size: this_2.size, source: {
                        id: i < this_2.items.length ? this_2.items[i]._id : 0,
                        count: 1,
                        data: 0
                    }, visual: true, bitmap: "_default_slot_empty", clicker: {
                        onClick: function () {
                            self.close();
                            self.func(self.items[_i]);
                        }
                    } };
                i++;
            };
            var this_2 = this;
            for (var x = 0; x < this.count_x; x++) {
                _loop_2(x);
            }
        }
    };
    SelectedItemDialog.prototype.build = function () {
        _super.prototype.build.call(this);
        var size = _super.prototype.getSize.call(this);
        var _size = this.getSize();
        if (!this.items)
            this.items = items;
        var content = this.ui.getContent();
        var max = Math.ceil(this.items.length / (this.count_x * this.count_y));
        this.updateList(content, size.height);
        var y = this.y + this.size * this.count_y + size.height;
        var self = this;
        content.elements["button_next"] = { type: "button", bitmap: "_button_next_48x24", bitmap2: "_button_next_48x24p", clicker: {
                onClick: function () {
                    self.list = (self.list + 1) % max;
                    self.updateList(content, size.height);
                    self.ui.forceRefresh();
                }
            }, x: (this.x + this.size * (this.count_x - 1)) - 48 + this.size, y: y + 2 };
        content.elements["button_prev"] = { type: "button", bitmap: "_button_prev_48x24", bitmap2: "_button_prev_48x24p", clicker: {
                onClick: function () {
                    self.list = (self.list - 1) % max;
                    if (self.list < 0)
                        self.list = max - 1;
                    self.updateList(content, size.height);
                    self.ui.forceRefresh();
                }
            }, x: this.x, y: y + 2 };
        content.elements["search"] = { type: "image", bitmap: "compass", x: this.x + 49, y: y + 2, width: 24, height: 24, clicker: {
                onClick: function () {
                    new Keyboard("")
                        .getText(function (text) {
                        var e_8, _a;
                        var _items = [];
                        try {
                            for (var items_2 = __values(items), items_2_1 = items_2.next(); !items_2_1.done; items_2_1 = items_2.next()) {
                                var item = items_2_1.value;
                                if (Translation.translate(Item.getName(item._id, 0)).toLowerCase().split(text.toLowerCase()).length > 1)
                                    _items.push(item);
                            }
                        }
                        catch (e_8_1) { e_8 = { error: e_8_1 }; }
                        finally {
                            try {
                                if (items_2_1 && !items_2_1.done && (_a = items_2.return)) _a.call(items_2);
                            }
                            finally { if (e_8) throw e_8.error; }
                        }
                        self.close();
                        self.list = 0;
                        self.items = _items;
                        self.openCenter();
                    })
                        .open();
                },
                onLongClick: function () {
                    self.close();
                    self.list = 0;
                    self.items = items;
                    self.openCenter();
                }
            } };
        content.elements["frame"].width = _size.width;
        content.elements["frame"].height = _size.height;
        content.elements["background"].clicker = {};
        return this;
    };
    SelectedItemDialog.prototype.getSelectedItem = function (func) {
        this.func = func;
        return this;
    };
    return SelectedItemDialog;
}(UiDialogBase));
;
var Keyboard = /** @class */ (function () {
    function Keyboard(default_string) {
        this.context = UI.getContext();
        this.default_string = default_string;
    }
    Keyboard.prototype.getText = function (func) {
        this.func = func;
        return this;
    };
    Keyboard.prototype.open = function () {
        var self = this;
        this.context.runOnUiThread({
            run: function () {
                var editText = new android.widget.EditText(self.context);
                editText.setHint(self.default_string);
                var builder = new android.app.AlertDialog.Builder(self.context);
                builder.setView(editText)
                    .setPositiveButton("ok", {
                    onClick: function () {
                        var text = String(editText.getText());
                        self.func(text == "" ? self.default_string : text);
                    }
                }).show();
            }
        });
    };
    return Keyboard;
}());
;
/// <reference path="./api/selectedItemDialog.ts"/>
/// <reference path="./api/Keyboard.ts"/>
Translation.addTranslation("Tab name:", {
    ru: "Имя вкладки:"
});
Translation.addTranslation("Tab icon:", {
    ru: "Иконка вкладки:"
});
var TabEditor = /** @class */ (function (_super) {
    __extends(TabEditor, _super);
    function TabEditor() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TabEditor.prototype.getTextureSlot = function (style) {
        return "nbt.byte_array_closed";
    };
    TabEditor.openEditor = function (main, _tab, isLeft, added) {
        var ui = new UiDialogSetting("Tab editor")
            .addElement(new SettingTextElement("Tab name:", 10))
            .addElement(new SettingTranslationElement("name", "Tab name", UiJsonParser.getLangs(main.path)))
            .addElement(new SettingTextElement("Tab icon:", 10))
            .addElement(new SettingIconElement("icon"))
            .setCloseHandler(function (self) {
            var path = main.path;
            var configs = self.configs;
            if (path) {
                var json = FileTools.ReadJSON(path);
                if (json.type == "main") {
                    var directory = UiJsonParser.getDirectory(path);
                    var text = configs.name.en;
                    var id = _tab === null ? main.getIdTab(text) : _tab.getId();
                    var item = configs.icon;
                    if (added) {
                        json.tabs.push("tabs/" + id + ".json");
                        FileTools.WriteJSON(path, json, true);
                    }
                    if (!FileTools.isExists(directory + "tabs"))
                        FileTools.mkdir(directory + "tabs");
                    var tab = {
                        "type": "tab",
                        "name": text,
                        "identifier": id,
                        "item": { "id": item.fullId, "count": 1, "data": 0 },
                        "isLeft": true,
                        "quests": []
                    };
                    UiJsonParser.saveLang(path, configs.name);
                    UiJsonParser.buildTabFunctions(main, UiJsonParser.buildTab(tab, directory + "tabs/" + id + ".json", id), isLeft, added);
                    FileTools.WriteJSON(directory + "tabs/" + id + ".json", tab, true);
                    main.open();
                }
            }
        });
        if (!added)
            ui.setConfig({
                name: UiJsonParser.getTranslations(_tab.getDisplayName()),
                icon: SelectedItemDialog.getItemSelectedById(_tab.getItem().id)
            });
        ui.openCenter();
    };
    TabEditor.prototype.isEdit = function () {
        return false;
    };
    TabEditor.prototype.onClick = function (position, container, tileEntity, window, canvas, scale) {
        TabEditor.openEditor(this.tab.main, null, this.isLeft, true);
        return false;
    };
    return TabEditor;
}(StandartTabElement));
var SettingElement = /** @class */ (function () {
    function SettingElement() {
        this.configName = null;
    }
    SettingElement.prototype.getSize = function () {
        return {
            width: 0,
            height: 0
        };
    };
    SettingElement.prototype.initConfig = function (config) {
    };
    SettingElement.prototype.build = function (dialog, content, org_size, size, id) {
        return null;
    };
    return SettingElement;
}());
;
var SettingTextElement = /** @class */ (function (_super) {
    __extends(SettingTextElement, _super);
    function SettingTextElement(text, size) {
        if (size === void 0) { size = 15; }
        var _this = _super.call(this) || this;
        _this.color = android.graphics.Color.WHITE;
        _this.func = function () { };
        _this.text = text;
        _this.size = size;
        return _this;
    }
    SettingTextElement.prototype.setStyle = function (color, size) {
        if (color === void 0) { color = android.graphics.Color.WHITE; }
        if (size === void 0) { size = 15; }
        this.color = color;
        this.size = size;
        return this;
    };
    SettingTextElement.prototype.setClick = function (func) {
        this.func = func;
        return this;
    };
    SettingTextElement.prototype.getSize = function () {
        return UiDialogBase.getSize(this.text, this.size + .5);
    };
    SettingTextElement.prototype.build = function (dialog, content, org_size, size, id) {
        var self = this;
        return [{ type: "text", text: this.text, x: 0, y: 0, multiline: true, font: { size: this.size, color: this.color }, clicker: {
                    onClick: function () {
                        self.func(dialog);
                    }
                } }];
    };
    return SettingTextElement;
}(SettingElement));
var SettingKeyboardElement = /** @class */ (function (_super) {
    __extends(SettingKeyboardElement, _super);
    function SettingKeyboardElement(text, configName) {
        var _this = _super.call(this, text) || this;
        _this.configName = configName;
        return _this;
    }
    SettingKeyboardElement.prototype.getSize = function () {
        var size = _super.prototype.getSize.call(this);
        size.width += 10;
        size.height += 10;
        return size;
    };
    SettingKeyboardElement.prototype.initConfig = function (config) {
        if (config)
            this.text = config;
    };
    SettingKeyboardElement.prototype.build = function (dialog, content, org_size, size, id) {
        var elements = _super.prototype.build.call(this, arguments);
        elements[0].x += 5;
        elements[0].y += 5;
        var size_ = this.getSize();
        var self = this;
        dialog.configs[self.configName] = this.text;
        elements.unshift({ type: "frame", bitmap: "default_container_frame", scale: .3, color: android.graphics.Color.argb(.3, 0, 0, 0), x: 0, y: 0, width: size_.width, height: size_.height, clicker: {
                onClick: function () {
                    new Keyboard(self.text).getText(function (text) {
                        dialog.configs[self.configName] = text;
                        self.text = text;
                        dialog.close();
                        dialog.build();
                        dialog.openCenter();
                    }).open();
                }
            } });
        return elements;
    };
    return SettingKeyboardElement;
}(SettingTextElement));
;
var SettingIconElement = /** @class */ (function (_super) {
    __extends(SettingIconElement, _super);
    function SettingIconElement(configName, size) {
        if (size === void 0) { size = 50; }
        var _this = _super.call(this) || this;
        _this.item = items[0];
        _this.configName = configName;
        _this.size = size;
        return _this;
    }
    SettingIconElement.prototype.getSize = function () {
        return {
            width: this.size,
            height: this.size
        };
    };
    SettingIconElement.prototype.initConfig = function (config) {
        if (config)
            this.item = config;
    };
    SettingIconElement.prototype.build = function (dialog, content, org_size, size, id) {
        var self = this;
        dialog.configs[self.configName] = this.item;
        return [{ type: "slot", bitmap: "_default_slot_empty", x: 0, y: 0, size: this.size, clicker: {
                    onClick: function () {
                        new SelectedItemDialog("Selected item")
                            .getSelectedItem(function (item) {
                            dialog.configs[self.configName] = item;
                            self.item = item;
                            dialog.close();
                            dialog.build();
                            dialog.openCenter();
                        })
                            .openCenter();
                    },
                    onLongClick: function () {
                        self.item = { id: null, _id: 0, tag: null, fullId: "0" };
                        dialog.close();
                        dialog.build();
                        dialog.openCenter();
                    }
                }, source: {
                    id: self.item._id,
                    count: 1,
                    data: 0
                } }];
    };
    return SettingIconElement;
}(SettingElement));
;
var SettingItemsElement = /** @class */ (function (_super) {
    __extends(SettingItemsElement, _super);
    function SettingItemsElement(configName, size) {
        if (size === void 0) { size = 50; }
        var _this = _super.call(this) || this;
        _this.items = [null];
        _this.line_x = 6;
        _this.configName = configName;
        _this.size = size;
        return _this;
    }
    SettingItemsElement.prototype.getSize = function () {
        var size = {
            width: 0,
            height: 0
        };
        size.width = Math.max(size.width, this.items.length < this.line_x ? this.items.length * this.size : this.line_x * this.size);
        size.height = Math.ceil(this.items.length / this.line_x) * this.size;
        return size;
    };
    SettingItemsElement.prototype.initConfig = function (config) {
        if (!config)
            return;
        config.push(null);
        this.items = config;
    };
    SettingItemsElement.prototype.getItems = function () {
        var result = [];
        for (var i in this.items)
            if (this.items[i] !== null)
                result.push(this.items[i]);
        return result;
    };
    SettingItemsElement.prototype.build = function (dialog, content, org_size, size, id) {
        dialog.configs[this.configName] = this.getItems();
        var slots = [];
        var count = 0;
        var y = 0;
        var self = this;
        var _loop_3 = function (i) {
            var item = this_3.items[i];
            if (count >= this_3.line_x) {
                y += this_3.size;
                count -= this_3.line_x;
            }
            var a = i;
            if (item === null) {
                slots.push({ type: "slot", bitmap: "nbt.byte_array_closed", x: this_3.size * count, y: y, size: this_3.size, clicker: {
                        onClick: function () {
                            new SelectedItemDialog("Selected item")
                                .getSelectedItem(function (item) {
                                self.items.unshift(item);
                                dialog.configs[self.configName] = self.getItems();
                                dialog.close();
                                dialog.build();
                                dialog.openCenter();
                            })
                                .openCenter();
                        }
                    } });
                return "continue";
            }
            slots.push({ type: "slot", bitmap: "_default_slot_empty", x: this_3.size * count, y: y, size: this_3.size, clicker: {
                    onClick: function () {
                        var items = [];
                        for (var i_1 = 0; i_1 < self.items.length; i_1++)
                            if (a != i_1)
                                items.push(self.items[i_1]);
                        self.items = items;
                        dialog.configs[self.configName] = self.getItems();
                        dialog.close();
                        dialog.build();
                        dialog.openCenter();
                    }
                }, source: {
                    id: item._id,
                    count: 1,
                    data: 0
                } });
            count++;
        };
        var this_3 = this;
        for (var i = 0; i < this.items.length; i++) {
            _loop_3(i);
        }
        return slots;
    };
    return SettingItemsElement;
}(SettingElement));
;
var SettingButtonElement = /** @class */ (function (_super) {
    __extends(SettingButtonElement, _super);
    function SettingButtonElement(texture, scale) {
        if (scale === void 0) { scale = 1; }
        var _this = _super.call(this) || this;
        _this.func = function () { };
        _this.texture = texture;
        _this.scale = scale;
        return _this;
    }
    SettingButtonElement.prototype.getSize = function () {
        var texture = TextureSource.get(this.texture);
        return {
            width: texture.getWidth(),
            height: texture.getHeight()
        };
    };
    SettingButtonElement.prototype.onClick = function (func) {
        this.func = func;
        return this;
    };
    SettingButtonElement.prototype.build = function (dialog, content, org_size, size, id) {
        var self = this;
        return [{ type: "button", scale: this.scale, bitmap: this.texture, x: 0, y: 0, clicker: {
                    onClick: function () {
                        self.func(dialog);
                    }
                } }];
    };
    return SettingButtonElement;
}(SettingElement));
;
var SettingNumbersElement = /** @class */ (function (_super) {
    __extends(SettingNumbersElement, _super);
    function SettingNumbersElement(configName, min, max, value, _value) {
        if (_value === void 0) { _value = 0; }
        var _this = _super.call(this) || this;
        _this._value = 0;
        _this.configName = configName;
        _this.min = min;
        _this.max = max;
        _this.value = value;
        _this._value = _value;
        return _this;
    }
    SettingNumbersElement.prototype.getSize = function () {
        return {
            height: 24,
            width: 48 * 2 + UiDialogBase.getSize(String(this._value), 24).width + 2
        };
    };
    SettingNumbersElement.prototype.initConfig = function (config) {
        if (config)
            this._value = config;
    };
    SettingNumbersElement.prototype.build = function (dialog, content, org_size, size, id) {
        var self = this;
        dialog.configs[this.configName] = this._value;
        return [
            { type: "button", bitmap: "_button_prev_48x24", bitmap2: "_button_prev_48x24p", x: 0, y: 0, clicker: {
                    onClick: function () {
                        self._value = Math.max(self._value - self.value, self.min);
                        dialog.configs[this.configName] = self._value;
                        dialog.close();
                        dialog.build();
                        dialog.openCenter();
                    },
                    onLongClick: function () {
                        self._value = Math.max(self._value - (self.value * 5), self.min);
                        dialog.configs[this.configName] = self._value;
                        dialog.close();
                        dialog.build();
                        dialog.openCenter();
                    }
                } },
            { type: "text", text: String(this._value), font: { size: 24, color: android.graphics.Color.WHITE }, x: 49, y: 0 },
            { type: "button", bitmap: "_button_next_48x24", bitmap2: "_button_next_48x24p", x: 50 + UiDialogBase.getSize(String(this._value), 24).width, y: 0, clicker: {
                    onClick: function () {
                        self._value = Math.min(self._value + self.value, self.max);
                        dialog.configs[this.configName] = self._value;
                        dialog.close();
                        dialog.build();
                        dialog.openCenter();
                    },
                    onLongClick: function () {
                        self._value = Math.min(self._value + (self.value * 5), self.max);
                        dialog.configs[this.configName] = self._value;
                        dialog.close();
                        dialog.build();
                        dialog.openCenter();
                    }
                } },
        ];
    };
    return SettingNumbersElement;
}(SettingElement));
;
var SettingStringsElement = /** @class */ (function (_super) {
    __extends(SettingStringsElement, _super);
    function SettingStringsElement(configName, strings, value) {
        if (value === void 0) { value = ""; }
        var _this = this;
        var index = strings.indexOf(value);
        _this = _super.call(this, configName, 0, strings.length - 1, 1, index == -1 ? 0 : index) || this;
        _this.strings = strings;
        return _this;
    }
    SettingStringsElement.prototype.initConfig = function (config) {
        if (!config)
            return;
        this._value = this.strings.indexOf(config);
        if (this._value < 0)
            this._value = 0;
    };
    SettingStringsElement.prototype.getSize = function () {
        return {
            height: 24,
            width: 48 * 2 + UiDialogBase.getSize(this.strings[this._value], 24).width + 2
        };
    };
    SettingStringsElement.prototype.build = function (dialog, content, org_size, size, id) {
        var elements = _super.prototype.build.call(this, dialog, content, org_size, size, id);
        elements[1].text = this.strings[this._value];
        dialog.configs[this.configName] = this.strings[this._value];
        elements[2].x = 50 + UiDialogBase.getSize(this.strings[this._value], 24).width;
        return elements;
    };
    return SettingStringsElement;
}(SettingNumbersElement));
;
var SettingButtonTextElement = /** @class */ (function (_super) {
    __extends(SettingButtonTextElement, _super);
    function SettingButtonTextElement(text, bitmap, color, size_text) {
        if (bitmap === void 0) { bitmap = "default_container_frame"; }
        if (color === void 0) { color = [.25, 0, 0, 0]; }
        var _this = _super.call(this, text, size_text) || this;
        _this.bitmap = bitmap;
        _this.color_frame = color;
        return _this;
    }
    SettingButtonTextElement.prototype.getSize = function () {
        var size = _super.prototype.getSize.call(this);
        size.width += 20;
        size.height += 20;
        return size;
    };
    SettingButtonTextElement.prototype.build = function (dialog, content, org_size, size, id) {
        var build = _super.prototype.build.apply(this, arguments);
        var _size = this.getSize();
        build[0].x += 10;
        build[0].y += 10;
        var self = this;
        build.unshift({ type: "frame", scale: .5, x: 0, y: 0, width: _size.width, height: _size.height, bitmap: this.bitmap, color: android.graphics.Color.argb(this.color_frame[0], this.color_frame[1], this.color_frame[2], this.color_frame[3]), clicker: {
                onClick: function () {
                    self.func(dialog);
                }
            } });
        build[1].clicker = {};
        return build;
    };
    return SettingButtonTextElement;
}(SettingTextElement));
;
var SettingSlotElement = /** @class */ (function (_super) {
    __extends(SettingSlotElement, _super);
    function SettingSlotElement(item, size, texture) {
        if (item === void 0) { item = { id: 0, count: 0, data: 0 }; }
        if (size === void 0) { size = 70; }
        if (texture === void 0) { texture = "_default_slot_empty"; }
        var _this = _super.call(this) || this;
        _this.iconScale = .8;
        _this.func = function () { };
        _this.item = item;
        _this.size = size;
        _this.texture = texture;
        return _this;
    }
    SettingSlotElement.prototype.getSize = function () {
        return {
            width: this.size,
            height: this.size
        };
    };
    SettingSlotElement.prototype.setClick = function (func) {
        this.func = func;
        return this;
    };
    SettingSlotElement.prototype.build = function (dialog, content, org_size, size, id) {
        var self = this;
        return [{ type: "slot", bitmap: this.texture, source: this.item, clicker: {
                    onClick: function () {
                        self.func(dialog);
                    }
                }, x: 0, y: 0, visual: true, size: this.size, iconScale: this.iconScale }];
    };
    return SettingSlotElement;
}(SettingElement));
var SettingTranslationElement = /** @class */ (function (_super) {
    __extends(SettingTranslationElement, _super);
    function SettingTranslationElement(configName, en, langs) {
        var _this = _super.call(this, en) || this;
        _this.translations = {};
        langs = langs.slice(0);
        _this.configName = configName;
        for (var i in langs)
            _this.translations[langs[i]] = langs[i];
        _this.translations.en = en;
        langs.unshift("en");
        var self = _this;
        _this.setClick(function (dialog) {
            var e_9, _a;
            var ui = new UiDialogSetting("Translation text");
            try {
                for (var langs_1 = __values(langs), langs_1_1 = langs_1.next(); !langs_1_1.done; langs_1_1 = langs_1.next()) {
                    var lang = langs_1_1.value;
                    ui.addElement(new SettingTextElement(lang + ":")).addElement(new SettingKeyboardElement(lang, lang));
                }
            }
            catch (e_9_1) { e_9 = { error: e_9_1 }; }
            finally {
                try {
                    if (langs_1_1 && !langs_1_1.done && (_a = langs_1.return)) _a.call(langs_1);
                }
                finally { if (e_9) throw e_9.error; }
            }
            ui.setCloseHandler(function () {
                for (var key in ui.configs)
                    self.translations[key] = ui.configs[key];
                dialog.configs[configName] = self.translations;
            }).setConfig(self.translations).openCenter();
        });
        return _this;
    }
    SettingTranslationElement.prototype.initConfig = function (config) {
        this.translations = config;
    };
    SettingTranslationElement.prototype.build = function (dialog, content, org_size, size, id) {
        var result = _super.prototype.build.apply(this, arguments);
        dialog.configs[this.configName] = this.translations;
        return result;
    };
    return SettingTranslationElement;
}(SettingButtonTextElement));
;
var SettingSwitchElement = /** @class */ (function (_super) {
    __extends(SettingSwitchElement, _super);
    function SettingSwitchElement(configName, scale, def) {
        if (scale === void 0) { scale = 2.5; }
        if (def === void 0) { def = false; }
        var _this = _super.call(this) || this;
        _this.configName = configName;
        _this.active = def;
        _this.scale = scale;
        return _this;
    }
    SettingSwitchElement.prototype.getSize = function () {
        return {
            width: 30 * this.scale,
            height: 16 * this.scale
        };
    };
    SettingSwitchElement.prototype.initConfig = function (config) {
        if (config)
            this.active = config;
    };
    SettingSwitchElement.prototype.build = function (dialog, content, org_size, size, id) {
        var texture = "default_switch_" + (this.active ? "on" : "off");
        var self = this;
        return [
            { type: "button", x: 0, y: 0, bitmap: texture, bitmap2: texture + "_hover", scale: this.scale, clicker: {
                    onClick: function () {
                        self.active = !self.active;
                        dialog.configs[self.configName] = self.active;
                        dialog.close();
                        dialog.build();
                        dialog.openCenter();
                    }
                } }
        ];
    };
    return SettingSwitchElement;
}(SettingElement));
;
var UiDialogSetting = /** @class */ (function (_super) {
    __extends(UiDialogSetting, _super);
    function UiDialogSetting(title) {
        var _this = _super.call(this, title) || this;
        _this.elements = [];
        _this.configs = {};
        _this.func = function (self) { };
        _this.texture = "icon_mod_compile";
        _this.setEnableExitButton(true);
        return _this;
    }
    UiDialogSetting.prototype.addElement = function (element, newHeigth) {
        if (newHeigth === void 0) { newHeigth = false; }
        this.elements.push({ element: element, newHeigth: newHeigth });
        return this;
    };
    UiDialogSetting.prototype.add = function (element, newHeigth) {
        return this.addElement(element, newHeigth);
    };
    UiDialogSetting.prototype.setConfig = function (configs) {
        var e_10, _a;
        this.configs = configs;
        try {
            for (var _b = __values(this.elements), _c = _b.next(); !_c.done; _c = _b.next()) {
                var el = _c.value;
                el.element.initConfig(this.configs[el.element.configName]);
            }
        }
        catch (e_10_1) { e_10 = { error: e_10_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_10) throw e_10.error; }
        }
        return this;
    };
    UiDialogSetting.prototype.getConfig = function () {
        return this.configs;
    };
    UiDialogSetting.prototype.setTextureExit = function (texture) {
        this.texture = texture;
        return this;
    };
    UiDialogSetting.prototype.getSize = function () {
        var size = _super.prototype.getSize.call(this);
        var width = 0;
        for (var i in this.elements) {
            var _size = this.elements[i].element.getSize();
            if (this.elements[i].newHeigth) {
                size.height = Math.max(size.height, size.height + 5);
                width += _size.width + 10;
                size.width = Math.max(size.width, width + 20);
            }
            else {
                if (this.elements[Number(i) - 1] && this.elements[Number(i) - 1].newHeigth)
                    size.width = Math.max(size.width, width + _size.width + 20);
                else
                    size.width = Math.max(size.width, _size.width + 20);
                width = 0;
                size.height += _size.height + 5;
            }
        }
        size.width += 20;
        size.height += 20;
        if (this.enableExitButton)
            size.height += 30;
        return size;
    };
    UiDialogSetting.prototype.setCloseHandler = function (func) {
        this.func = func;
        return this;
    };
    UiDialogSetting.prototype.setEnableExitButton = function (status) {
        this.enableExitButton = status;
        return this;
    };
    UiDialogSetting.prototype.canEnableExitButton = function () {
        return this.enableExitButton;
    };
    UiDialogSetting.prototype.build = function () {
        _super.prototype.build.call(this);
        var size = _super.prototype.getSize.call(this);
        var _size = this.getSize();
        var content = this.ui.getContent();
        var heigth = size.height;
        var x = 0;
        for (var i in this.elements) {
            var el = this.elements[i].element;
            var elements = el.build(this, content, size, _size, "element_" + i + "_");
            var element_size = el.getSize();
            for (var a in elements) {
                var element = elements[a];
                element.x += this.x + x;
                element.y += this.y + heigth;
                content.elements["element_" + i + "_" + a] = element;
            }
            if (this.elements[i].newHeigth)
                x += element_size.width + 5;
            else {
                x = 0;
                heigth += element_size.height + 5;
            }
        }
        if (this.enableExitButton) {
            var self_4 = this;
            content.elements["save"] = { type: "button", bitmap: self_4.texture, scale: 30 / 15, x: this.x, y: this.y + heigth, clicker: {
                    onClick: function () {
                        self_4.func(self_4);
                        self_4.close();
                    }
                } };
        }
        content.elements["frame"].width = _size.width;
        content.elements["frame"].height = _size.height;
        this.ui.setContent(content);
        return this;
    };
    return UiDialogSetting;
}(UiDialogBase));
/// <reference path="./api/selectedItemDialog.ts"/>
/// <reference path="./api/UiDialogSetting.ts"/>
Translation.addTranslation('Quest name:', {
    ru: "Имя квеста"
});
Translation.addTranslation('Quest icon:', {
    ru: "Иконка квеста:"
});
Translation.addTranslation('Description:', {
    ru: "Опиание:"
});
var QuestEditor = /** @class */ (function (_super) {
    __extends(QuestEditor, _super);
    function QuestEditor() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    QuestEditor.prototype.getTextureSlot = function (style) {
        return "nbt.byte_array_closed";
    };
    QuestEditor.openEditor = function (main, quest, added) {
        var langs = UiJsonParser.getLangs(main.path);
        var ui = new UiDialogSetting("Quest editor")
            .addElement(new SettingTextElement("Quest name:", 10), true)
            .addElement(new SettingTranslationElement("name", "Quest name", langs))
            .addElement(new SettingTextElement("Description:", 10), true)
            .addElement(new SettingTranslationElement("description", "Quest description", langs))
            .addElement(new SettingTextElement("Quest icon:", 10), true)
            .addElement(new SettingIconElement("icon", 45))
            .addElement(new SettingTextElement("x:", 10), true)
            .addElement(new SettingNumbersElement("x", 0, 1000, 30))
            .addElement(new SettingTextElement("y:", 10), true)
            .addElement(new SettingNumbersElement("y", 0, 1000, 30))
            .addElement(new SettingTextElement("size:", 10), true)
            .addElement(new SettingNumbersElement("size", 0, 100, 5, 60))
            .addElement(new SettingTextElement("Dialog:", 25))
            .addElement(new SettingTextElement("input:", 10), true)
            .addElement(new SettingItemsElement("input", 50))
            .addElement(new SettingTextElement("output:", 10), true)
            .addElement(new SettingItemsElement("output", 50))
            .addElement(new SettingTextElement("Quest name:", 10), true)
            .addElement(new SettingTranslationElement("dialog_name", "Quest name", langs))
            .addElement(new SettingTextElement("Description:", 10), true)
            .addElement(new SettingTranslationElement("dialog_description", "Quest description", langs))
            .addElement(new SettingTextElement("Give:", 25))
            .addElement(new SettingStringsElement("type_give", ["recipe", "destroy", "inventory"], "recipe"));
        var quests = main.selected_tab.getAllQuest();
        if (quests.length > 0) {
            quests.unshift("");
            var line_1 = "";
            if (quest)
                line_1 = quest.quest.lines[0] || "";
            ui.addElement(new SettingStringsElement("line", quests, line_1));
        }
        function tab_save(object, configs, path) {
            UiJsonParser.saveLang(main.path, configs.name);
            UiJsonParser.saveLang(main.path, configs.description);
            UiJsonParser.saveLang(main.path, configs.dialog_name);
            UiJsonParser.saveLang(main.path, configs.dialog_description);
            var id = quest === null ? main.selected_tab.tab.getIdQuest(configs.name.en) : quest.getId();
            if (added)
                object.quests.push("quests/" + id + "_" + main.selected_tab.getId() + ".json");
            var save = {
                type: "quest",
                item: { id: configs.icon.fullId, count: 1, data: 0 },
                identifier: id,
                name: configs.name.en,
                x: configs.x,
                y: configs.y,
                size: configs.size,
                dialog: {
                    input: (function () {
                        var items = [];
                        var items_ = configs.input;
                        for (var i in items_)
                            items.push({ id: items_[i].fullId, count: 1, data: 0 });
                        return items;
                    })(),
                    output: (function () {
                        var items = [];
                        var items_ = configs.output;
                        for (var i in items_)
                            items.push({ id: items_[i].fullId, count: 1, data: 0 });
                        return items;
                    })(),
                    give_item: true,
                    title: configs.dialog_name.en,
                    description: configs.dialog_description.en
                },
                description: configs.description.en,
                give: [
                    {
                        type: configs.type_give,
                        items: (function () {
                            var items = [];
                            var items_ = configs.input;
                            for (var i in items_)
                                items.push(items_[i].fullId);
                            return items;
                        })(),
                        block: {
                            id: (configs.input[0] || {}).fullId || "VanillaBlockID.stone",
                            data: 0
                        }
                    }
                ],
                lines: (function () {
                    if (configs.line && configs.line != "")
                        return [configs.line];
                    return [];
                })()
            };
            if (!FileTools.isExists(UiJsonParser.getDirectory(path) + "quests"))
                FileTools.mkdir(UiJsonParser.getDirectory(path) + "quests");
            UiJsonParser.buildQuest(JSON.parse(JSON.stringify(save)), UiJsonParser.getDirectory(path) + "quests/" + id + "_" + main.selected_tab.getId() + ".json", id);
            UiJsonParser.buildQuestFunctions(main, main.selected_tab, id, main.selected_tab.isLeft, added);
            FileTools.WriteJSON(UiJsonParser.getDirectory(path) + "quests/" + id + "_" + main.selected_tab.getId() + ".json", save, true);
            main.open();
        }
        if (!added) {
            ui.setConfig({
                name: UiJsonParser.getTranslations(quest.quest.name),
                description: UiJsonParser.getTranslations(quest.quest.description),
                dialog_name: UiJsonParser.getTranslations(quest.quest.dialog.title),
                dialog_description: UiJsonParser.getTranslations(quest.quest.dialog.description),
                input: (function () {
                    var items = [];
                    var items_ = quest.quest.dialog.input;
                    for (var i in items_)
                        items.push(SelectedItemDialog.getItemSelectedById(eval(items_[i].id)));
                    return items;
                })(),
                output: (function () {
                    var items = [];
                    var items_ = quest.quest.dialog.output;
                    for (var i in items_)
                        items.push(SelectedItemDialog.getItemSelectedById(eval(items_[i].id)));
                    return items;
                })(),
                icon: SelectedItemDialog.getItemSelectedById(quest.getItem().id),
                x: quest.getX(),
                y: quest.getY(),
                size: quest.getSize(),
                type_give: quest.quest.give[0].type
            });
        }
        ui.setCloseHandler(function (self) {
            var path = main.selected_tab.path;
            var configs = self.configs;
            if (path) {
                var json = FileTools.ReadJSON(path);
                if (json.type == "main") {
                    for (var i in json.tabs) {
                        var element = json.tabs[i];
                        if (typeof element != "string") {
                            if (element.identifier == main.selected_tab.getId()) {
                                tab_save(element, configs, path);
                                break;
                            }
                        }
                    }
                }
                else if (json.type == "tab")
                    tab_save(json, configs, path);
                if (added)
                    FileTools.WriteJSON(path, json, true);
            }
        }).openCenter();
    };
    QuestEditor.prototype.isEdit = function () {
        return false;
    };
    QuestEditor.prototype.onClick = function (position, container, tileEntity, window, canvas, scale) {
        if (this.tab.main.selected_tab === null || this.tab.main.selected_tab.path === undefined)
            return false;
        QuestEditor.openEditor(this.tab.main, null, true);
        return false;
    };
    return QuestEditor;
}(StandartTabElement));
/// <reference path="./UiStyle.ts"/>
/// <reference path="./quest_editor/TabEditor.ts"/>
/// <reference path="./quest_editor/QuestEditor.ts"/>
var height = (function () {
    var size = new android.graphics.Point();
    try {
        UI.getContext().getWindowManager().getDefaultDisplay().getSize(size);
    }
    catch (e) {
        return 1000;
    }
    return size.y;
})();
var width = (function () {
    var size = new android.graphics.Point();
    try {
        UI.getContext().getWindowManager().getDefaultDisplay().getSize(size);
    }
    catch (e) {
        return 1000;
    }
    return size.x;
})();
;
;
Network.addClientPacket("ftb.synchronization_status_quests", function (data) {
    var players = UiMainBuilder.quests[data.client_ui_name] || {};
    players[Player.get()] = data.quests;
    UiMainBuilder.quests[data.client_ui_name] = players;
});
Network.addClientPacket("ftb.update_status_quest", function (data) {
    return UiMainBuilder.all_main[data.client_ui_name]
        .updateStatusQuestClient(data.isLeft, data.tab, data.quest, data.value);
});
function installQuestForServer(main, isLeft, data) {
    var tab_builder = main.getTabsBuilder(isLeft);
    var tabs = data.quests[isLeft ? 1 : 0];
    for (var tab_id in tabs) {
        var quests = tabs[tab_id];
        var tab = tab_builder.getTab(tab_id);
        if (tab) {
            for (var i in quests) {
                var quest = quests[i];
                if (!tab.getQuest(quest[1].id))
                    tab.addQuest(Quest.buildForServer(quest[0], quest[1], UiDialogBase.buildFrom(quest[2])));
            }
        }
    }
}
Network.addClientPacket("ftb.synchronization_quests", function (data) {
    var main = UiMainBuilder.all_main[data.client_ui_name];
    installQuestForServer(main, true, data);
    installQuestForServer(main, false, data);
});
var UiMainBuilder = /** @class */ (function () {
    function UiMainBuilder(client_name) {
        this.debug = false;
        this.send_quests = null;
        this.selected_tab = null;
        this.main = new UI.Window();
        this.style = new UiStyle();
        this.ui_left = new UiTabsBuilder("left", true);
        this.ui_right = new UiTabsBuilder("right", false);
        this.client_name = client_name;
        this.ui_left.setUiMainBuilder(this, new UI.Window());
        this.ui_right.setUiMainBuilder(this, new UI.Window());
        UiMainBuilder.all_main[client_name] = this;
        //синхронизация о выполниных квестов с игроком
        var self = this;
        Callback.addCallback("ServerPlayerLoaded", function (player) {
            var client = Network.getClientForPlayer(player);
            var players = UiMainBuilder.quests[client_name] || {};
            var packet_status = {
                client_ui_name: client_name,
                quests: players[player] || {}
            };
            if (!self.send_quests) {
                var send_quests_1 = [{}, {}];
                self.forEach(function (isLeft, tab, quest) {
                    var tab_id = tab.getId();
                    var quests = send_quests_1[isLeft ? 1 : 0][tab_id] || [];
                    var data = quest.externalPacket();
                    if (data) {
                        var ui = quest.getDialog();
                        quests.push([quest.getClientType(), data, ui ? ui.toJson() : null]);
                    }
                    send_quests_1[isLeft ? 1 : 0][tab_id] = quests;
                });
                self.send_quests = send_quests_1;
            }
            var packet_synchronization = {
                client_ui_name: client_name,
                quests: self.send_quests
            };
            if (client) {
                client.send("ftb.synchronization_status_quests", packet_status);
                client.send("ftb.synchronization_quests", packet_synchronization);
            }
        });
        Callback.addCallback("LevelLeft", function () {
            return self.forEach(function (isLeft, tab, quest) {
                return quest.canExternal() && tab.deleteQuest(quest.getId());
            });
        });
    }
    UiMainBuilder.getUiMainByName = function (name) {
        return UiMainBuilder.all_main[name];
    };
    UiMainBuilder.prototype.setDebug = function (debug) {
        if (debug) {
            this.addRenderLeft(new TabEditor("tab_added"));
            this.addRenderRight(new QuestEditor("quest_added"));
        }
        else if (this.getTab(false, "quest_added")) {
            this.removeLeft("tab_added");
            this.removeRight("quest_added");
        }
        this.reopen();
        this.debug = debug;
        return this;
    };
    UiMainBuilder.prototype.reopen = function () {
        var win = this.getUi();
        if (win) {
            this.getUi().close();
            this.open();
            return true;
        }
        return false;
    };
    UiMainBuilder.prototype.isDebug = function () {
        return this.debug;
    };
    UiMainBuilder.prototype.getClientName = function () {
        return this.client_name;
    };
    UiMainBuilder.prototype.getIdTab = function (id, count, org_id) {
        if (count === void 0) { count = 0; }
        if (org_id === void 0) { org_id = id; }
        var tabs = this.ui_left.getAllTab();
        for (var i in tabs)
            if (tabs[i] == id) {
                count++;
                return this.getIdTab(org_id + "_" + count, count, org_id);
            }
        tabs = this.ui_right.getAllTab();
        for (var i in tabs)
            if (tabs[i] == id) {
                count++;
                return this.getIdTab(org_id + "_" + count, count, org_id);
            }
        return id;
    };
    UiMainBuilder.prototype.getTabsBuilder = function (isLeft) {
        if (isLeft)
            return this.ui_left;
        return this.ui_right;
    };
    UiMainBuilder.prototype.getTab = function (isLeft, tab) {
        return this.getTabsBuilder(isLeft).getTab(tab);
    };
    UiMainBuilder.prototype.getAllQuest = function (isLeft, tab) {
        return this.getTab(isLeft, tab).getAllQuest();
    };
    UiMainBuilder.prototype.getQuest = function (isLeft, tab, quest) {
        var _tab = this.getTab(isLeft, tab);
        if (_tab != null)
            return _tab.getQuest(quest);
        return null;
    };
    UiMainBuilder.prototype.forEach = function (func) {
        this.ui_left.forEach(function (tab) { return tab.forEach(function (quest) { return func(true, tab, quest); }); });
        this.ui_right.forEach(function (tab) { return tab.forEach(function (quest) { return func(false, tab, quest); }); });
    };
    UiMainBuilder.prototype.isGive = function (isLeft, tab, quest, player) {
        var e_11, _a;
        if (player === void 0) { player = Player.get(); }
        var check = this.getQuest(isLeft, tab, quest);
        var lines = check.getLines();
        if (this.canQuest(isLeft, tab, quest, player))
            return true;
        try {
            for (var lines_1 = __values(lines), lines_1_1 = lines_1.next(); !lines_1_1.done; lines_1_1 = lines_1.next()) {
                var element = lines_1_1.value;
                if (!this.canQuest(isLeft, tab, element, player) || !this.isGive(isLeft, tab, element, player))
                    return false;
            }
        }
        catch (e_11_1) { e_11 = { error: e_11_1 }; }
        finally {
            try {
                if (lines_1_1 && !lines_1_1.done && (_a = lines_1.return)) _a.call(lines_1);
            }
            finally { if (e_11) throw e_11.error; }
        }
        return true;
    };
    UiMainBuilder.prototype.giveQuest = function (isLeft, tab, quest, player, value, is) {
        if (player === void 0) { player = Player.get(); }
        if (value === void 0) { value = true; }
        if (is === void 0) { is = true; }
        var result = true;
        var players = UiMainBuilder.quests[this.client_name] = UiMainBuilder.quests[this.client_name] || {};
        var storages = players[player] = players[player] || {};
        if (!storages[isLeft + ":" + tab + ":" + quest]) {
            if (is && this.isGive(isLeft, tab, quest, player))
                storages[isLeft + ":" + tab + ":" + quest] = value;
            else if (!is)
                storages[isLeft + ":" + tab + ":" + quest] = value;
            else
                result = false;
        }
        else
            result = false;
        Callback.invokeCallback("QuestGive", this, isLeft, tab, quest, player, value, is, result);
        var client = Network.getClientForPlayer(player);
        var data = {
            client_ui_name: this.client_name,
            isLeft: isLeft,
            tab: tab,
            quest: quest,
            value: value
        };
        client && client.send("ftb.update_status_quest", data);
        return result;
    };
    UiMainBuilder.prototype.give = function (isLeft, tab, quest, player, description, title) {
        if (player === void 0) { player = Player.get(); }
        if (!this.canQuest(isLeft, tab, quest, player) && this.giveQuest(isLeft, tab, quest, player, true, true) && description != undefined && title != undefined)
            AchievementAPI.give(player, title, description, this.getQuest(isLeft, tab, quest).getItem());
    };
    UiMainBuilder.prototype.updateStatusQuestClient = function (isLeft, tab, quest, value) {
        var player = Player.get();
        var players = UiMainBuilder.quests[this.client_name] = UiMainBuilder.quests[this.client_name] || {};
        var storages = players[player] = players[player] || {};
        storages[isLeft + ":" + tab + ":" + quest] = value;
    };
    UiMainBuilder.prototype.canQuest = function (isLeft, tab, quest, player) {
        if (player === void 0) { player = Player.get(); }
        return !!UiMainBuilder.quests[this.client_name] && !!UiMainBuilder.quests[this.client_name][player] && !!UiMainBuilder.quests[this.client_name][player][isLeft + ":" + tab + ":" + quest];
    };
    UiMainBuilder.prototype.registerSave = function () {
        var self = this;
        Saver.addSavesScope("FTBQuests." + this.client_name, function (scope) {
            var quests = scope.new_quests || {};
            if (!scope.newSave) {
                for (var key in scope.quests) {
                    var list = key.split(":");
                    var player = list.pop();
                    var players = quests[player] = quests[player] || {};
                    players[list[0] + ":" + list[1] + ":" + list[2]] = scope.quests[key];
                }
            }
            UiMainBuilder.quests[self.client_name] = quests;
        }, function () {
            return {
                newSave: true,
                quests: {},
                new_quests: UiMainBuilder.quests[self.client_name] || {}
            };
        });
        Callback.addCallback('LevelLeft', function () {
            UiMainBuilder.quests[self.client_name] = {};
        });
        return this;
    };
    UiMainBuilder.prototype.registerItem = function (id) {
        var self = this;
        if (typeof id == "number") {
            for (var key in ItemID)
                if (ItemID[key] == id)
                    id = key;
            for (var key in VanillaItemID)
                if (VanillaItemID[key] == id)
                    id = key;
            //пошли вы на*** с блоками, знай если кто-то так делает, то ты конченный с*к* имб*ц*л метод называется registerItem, а не  registerBlock
        }
        ItemContainer.registerScreenFactory("FTBQuests." + id + "." + self.client_name, function (container) {
            return self.build(container);
        });
        Item.registerUseFunction(id, function (coords, item, block, player) {
            var container = new ItemContainer();
            self.buildServer(container);
            container.setClientContainerTypeName("FTBQuests." + id + "." + self.client_name);
            container.openFor(Network.getClientForPlayer(player), "main");
        });
        return this;
    };
    UiMainBuilder.prototype.selectedTab = function (builder, element) {
        this.selected_tab = element;
        this.ui_left.selectedTab(builder, element);
        this.ui_right.selectedTab(builder, element);
    };
    UiMainBuilder.prototype.openTab = function (builder, element, id) {
        this.selectedTab(builder, element);
        if (builder.ui.content.elements[builder.prefix + "_" + id])
            builder.ui.content.elements[builder.prefix + "_" + id].bitmap = element.getTextureSelected(this.style);
        builder.buildTabInformation(element, this.group, this.style);
        return this;
    };
    UiMainBuilder.prototype.getUiLeft = function () {
        return this.ui_left;
    };
    UiMainBuilder.prototype.getUiRight = function () {
        return this.ui_right;
    };
    UiMainBuilder.prototype.removeLeft = function (id) {
        return this.ui_left.remove(id);
    };
    UiMainBuilder.prototype.removeRight = function (id) {
        return this.ui_right.remove(id);
    };
    UiMainBuilder.prototype.remove = function (isLeft, id) {
        if (isLeft)
            return this.ui_left.remove(id);
        return this.ui_right.remove(id);
    };
    UiMainBuilder.prototype.addRender = function (isLeft, element) {
        if (isLeft)
            return this.addRenderLeft(element);
        return this.addRenderRight(element);
    };
    UiMainBuilder.prototype.addRenderLeft = function (element) {
        this.ui_left.addRender(element);
        return this;
    };
    UiMainBuilder.prototype.addRenderRight = function (element) {
        this.ui_right.addRender(element);
        return this;
    };
    UiMainBuilder.prototype.setStyle = function (style) {
        this.style = style;
        return this;
    };
    UiMainBuilder.prototype.getStyle = function () {
        return this.style;
    };
    UiMainBuilder.prototype.buildServer = function (container) {
        this.ui_left.buildServer(container);
        this.ui_right.buildServer(container);
    };
    UiMainBuilder.prototype.build = function (container) {
        this.container = container;
        this.group = new UI.WindowGroup();
        var self = this;
        var paint = new android.graphics.Paint();
        var background = self.style.bitmap;
        var _x = Math.ceil(width / background.getWidth()) + 1;
        var _y = Math.ceil(height / background.getHeight()) + 1;
        this.main.setContent({
            drawing: [
                { type: "color", color: android.graphics.Color.argb(0, 0, 0, 0) },
                { type: "custom", onDraw: function (canvas, scale) {
                        paint.setAlpha(255 * .8);
                        for (var x = 0; x < _x; x++)
                            for (var y = 0; y < _y; y++)
                                canvas.drawBitmap(background, x * background.getWidth(), y * background.getHeight(), paint);
                    } },
                { type: "frame", bitmap: this.style.tab.frame, x: 0, y: 0, width: this.ui_left.getMaxSize(), height: height, color: android.graphics.Color.argb(.5, 0, 0, 0), scale: this.style.tab.scale },
                { type: "frame", bitmap: this.style.tab.frame, x: 1000 - this.ui_right.getMaxSize(), y: 0, width: this.ui_right.getMaxSize(), height: height, color: android.graphics.Color.argb(.5, 0, 0, 0), scale: this.style.tab.scale }
            ],
            elements: {
            //"close": {type: "closeButton", bitmap: this.style.close_main.bitmap, x: 950, y: 0, scale: this.style.close_main.scale}
            }
        });
        this.group.addWindowInstance("background", this.main);
        this.group.addWindowInstance("main", new UI.Window({
            location: {
                padding: {
                    left: this.ui_left.getMaxSize() + 3,
                    right: this.ui_right.getMaxSize() - 3
                },
                forceScrollY: true,
                forceScrollX: true
            },
            drawing: [
                { type: "color", color: android.graphics.Color.argb(0, 0, 0, 0) }
            ],
            elements: {}
        }));
        this.group.addWindowInstance("left", this.ui_left.build(container, 0, 1000 - this.ui_left.getMaxSize()).ui);
        this.group.addWindowInstance("right", this.ui_right.build(container, 1000 - this.ui_right.getMaxSize(), 0).ui);
        var win = this.group.getWindow("main");
        onSystemUiVisibility(win);
        win.setCloseOnBackPressed(true);
        return this.group;
    };
    UiMainBuilder.prototype.isOpened = function () {
        return this.group.isOpened();
    };
    UiMainBuilder.prototype.open = function () {
        if (this.isOpened())
            this.group.close();
        this.build(this.container).open();
        return this;
    };
    UiMainBuilder.prototype.getUi = function () {
        return this.group;
    };
    UiMainBuilder.quests = {};
    UiMainBuilder.all_main = {};
    return UiMainBuilder;
}());
;
var JAVA_ANIMATOR = android.animation.ValueAnimator;
var JAVA_HANDLER = android.os.Handler;
var LOOPER_THREAD = android.os.Looper;
var JAVA_HANDLER_THREAD = new JAVA_HANDLER(LOOPER_THREAD.getMainLooper());
function createAnimation(_duration, _updateFunc) {
    var animation = JAVA_ANIMATOR.ofFloat([0, 1]);
    animation.setDuration(_duration);
    if (_updateFunc)
        animation.addUpdateListener({
            onAnimationUpdate: function (updatedAnim) {
                _updateFunc(updatedAnim.getAnimatedValue(), updatedAnim);
            }
        });
    JAVA_HANDLER_THREAD.post({
        run: function () {
            animation.start();
        }
    });
    return animation;
}
function setTimeout(func, tick) {
    Updatable.addLocalUpdatable({
        tick: 0,
        update: function () {
            this.tick++;
            if (this.tick >= tick) {
                func();
                this.remove = true;
            }
        },
    });
}
Translation.addTranslation(Native.Color.DARK_PURPLE + "Performed quest " + Native.Color.GREEN, {
    ru: Native.Color.DARK_PURPLE + "Выполнен квест " + Native.Color.GREEN
});
var AchievementStyle = /** @class */ (function () {
    function AchievementStyle() {
        this.frame = "default_completed";
        this.slot = "challenge_completed";
        this.bacground = "achievement_frame";
        this.title_color = android.graphics.Color.WHITE;
        this.description_color = android.graphics.Color.GREEN;
    }
    return AchievementStyle;
}());
;
;
Network.addClientPacket("AchievementAPI.giveClient", function (data) {
    AchievementAPI.giveClient(data.title, data.description, data.item);
});
var AchievementAPI = /** @class */ (function () {
    function AchievementAPI() {
        this.isOpen = false;
        this.style = new AchievementStyle();
        this.client_message = true;
        this.window = new UI.Window({
            drawing: [],
            elements: {}
        });
        this.end = new UI.Window({
            drawing: [],
            elements: {}
        });
        this.start = new UI.Window({
            drawing: [],
            elements: {}
        });
        this.window.setDynamic(true);
        this.window.setAsGameOverlay(true);
        this.window.setTouchable(false);
        this.setTitle("");
        this.setDescrption("");
        this.setItemInstance({
            id: 1,
            count: 1,
            data: 0
        });
        this.setTime(2000, 60);
        this.setPosEnd(5);
    }
    AchievementAPI.prototype.setTitle = function (title) {
        this.title = Translation.translate(title);
        return this;
    };
    AchievementAPI.prototype.getTitle = function () {
        return this.title;
    };
    AchievementAPI.prototype.setDescrption = function (description) {
        this.decription = Translation.translate(description);
        return this;
    };
    AchievementAPI.prototype.getDescription = function () {
        return this.decription;
    };
    AchievementAPI.prototype.setItemInstance = function (item) {
        this.item = item;
        return this;
    };
    AchievementAPI.prototype.getItemInstance = function () {
        return this.item;
    };
    AchievementAPI.prototype.setTime = function (time, pause) {
        this.time = time;
        this.pause = pause;
        return this;
    };
    AchievementAPI.prototype.getTime = function () {
        return this.time;
    };
    AchievementAPI.prototype.getPause = function () {
        return this.pause;
    };
    AchievementAPI.prototype.setAnimationType = function (type) {
        this.animatiom_type = type;
        return this;
    };
    AchievementAPI.prototype.getAnimationType = function () {
        return this.animatiom_type;
    };
    AchievementAPI.prototype.setPosEnd = function (y) {
        this.end_y = y;
        return this;
    };
    AchievementAPI.prototype.updateUi = function (window, end) {
        var content = window.getContent();
        var title = UiDialogBase.getSize(this.title, 25);
        var decription = UiDialogBase.getSize(this.decription, 15);
        var width = Math.max(title.width + 85, decription.width + 30);
        var size_slot = 55;
        var heigth = decription.height + size_slot + 18;
        if (this.animatiom_type = 0)
            var x = 1000 - width, y = end ? this.end_y : -heigth;
        else
            var x = end ? 1000 - width : 1000 + width, y = this.end_y;
        content.elements.title = { type: "text", text: this.title, font: { size: 25, color: this.style.title_color, shadow: .5 }, x: x + 75, y: y + 10 };
        content.elements.decription = { type: "text", text: this.decription, font: { size: 15, color: this.style.description_color }, multiline: true, x: x + 15, y: y + size_slot + 10 };
        content.elements.item = { type: "slot", bitmap: this.style.slot, x: x + 10, y: y + 10, size: size_slot, visual: true, source: this.getItemInstance() };
        content.drawing = [
            { type: "color", color: android.graphics.Color.argb(0, 0, 0, 0) },
            { type: "frame", x: x, y: y, width: width, height: heigth, bitmap: this.style.bacground, scale: 3 },
            { type: "frame", x: x, y: y, width: width, height: size_slot, bitmap: this.style.frame, scale: 3 }
        ];
        this.width = width;
        this.heigth = heigth;
        window.setContent(content);
    };
    AchievementAPI.prototype.update = function (start, end, value) {
        var content = this.window.getContent();
        var e_content = end.getContent();
        var s_content = start.getContent();
        for (var i in content.drawing) {
            var element = content.drawing[i];
            if (element.y)
                element.y = s_content.drawing[i].y + (e_content.drawing[i].y - s_content.drawing[i].y) * value;
            if (element.x)
                element.x = s_content.drawing[i].x + (e_content.drawing[i].x - s_content.drawing[i].x) * value;
        }
        for (var key in content.elements) {
            var element = content.elements[key];
            element.y = s_content.elements[key].y + (e_content.elements[key].y - s_content.elements[key].y) * value;
            element.x = s_content.elements[key].x + (e_content.elements[key].x - s_content.elements[key].x) * value;
        }
        this.window.setContent(content);
        this.window.forceRefresh();
    };
    AchievementAPI.prototype.canOpen = function () {
        return this.isOpen;
    };
    AchievementAPI.prototype.setHandlerEnd = function (end) {
        this.handler_end = end;
        return this;
    };
    AchievementAPI.prototype.setClientMessage = function (enable) {
        return this;
    };
    AchievementAPI.prototype.canClientMessage = function () {
        return this.client_message;
    };
    AchievementAPI.prototype.message = function () {
        Game.message(Translation.translate(Native.Color.DARK_PURPLE + "Performed quest " + Native.Color.GREEN) + this.title);
    };
    AchievementAPI.prototype.animationStop = function (v) {
        if (v === void 0) { v = false; }
        if (!v) {
            var self_5 = this;
            var animation = createAnimation(self_5.time, function (value, animation) {
                self_5.update(self_5.end, self_5.start, value);
            });
            animation.addListener({
                onAnimationEnd: function () {
                    self_5.window.close();
                    self_5.isOpen = false;
                    self_5.heigth = 0;
                    self_5.width = 0;
                    self_5.handler_end();
                }
            });
        }
        else {
            this.window.close();
            this.isOpen = false;
            this.heigth = 0;
            this.width = 0;
        }
        return this;
    };
    AchievementAPI.prototype.giveClient = function () {
        if (this.isOpen)
            return this;
        this.isOpen = true;
        this.updateUi(this.start, false);
        this.updateUi(this.window, false);
        this.updateUi(this.end, true);
        this.window.open();
        var self = this;
        var animation = createAnimation(this.time, function (value, animation) {
            self.update(self.start, self.end, value);
        });
        animation.addListener({
            onAnimationEnd: function () {
                if (self.canClientMessage())
                    self.message();
                setTimeout(function () {
                    self.animationStop();
                }, self.pause);
            }
        });
        return this;
    };
    AchievementAPI.giveClient = function (title, description, item) {
        var height = 5;
        for (var i in AchievementAPI.instances) {
            var element = AchievementAPI.instances[i];
            if (!element.canOpen() && height <= element.window.location.height) {
                element.setTitle(title);
                element.setDescrption(description);
                element.setItemInstance(item);
                element.setPosEnd(height);
                element.setHandlerEnd(function () {
                    if (AchievementAPI.cache.length >= 1) {
                        var cache = AchievementAPI.cache.shift();
                        AchievementAPI.giveClient(cache.title, cache.description, cache.item);
                    }
                });
                element.giveClient();
                return;
            }
            height += (element.heigth || 0) + 5;
        }
        AchievementAPI.cache.push({
            title: title,
            description: description,
            item: item
        });
    };
    AchievementAPI.give = function (player, title, description, item) {
        var client = Network.getClientForPlayer(player);
        if (client != null)
            client.send("AchievementAPI.giveClient", {
                title: title,
                description: description,
                item: item
            });
    };
    AchievementAPI.max = 10;
    AchievementAPI.instances = [];
    AchievementAPI.cache = [];
    (function () {
        for (var i = 0; i < AchievementAPI.max; i++) {
            var instance = new AchievementAPI()
                .setAnimationType(1);
            AchievementAPI.instances[i] = instance;
        }
    })();
    return AchievementAPI;
}());
;
Callback.addCallback("LocalLevelLeft", function () {
    AchievementAPI.cache = [];
    for (var i in AchievementAPI.instances)
        AchievementAPI.instances[i].animationStop(true);
});
Translation.addTranslation("Tabs", {
    ru: "Вкладки"
});
var GroupTabElement = /** @class */ (function (_super) {
    __extends(GroupTabElement, _super);
    function GroupTabElement() {
        var _this = _super.apply(this, __spreadArray([], __read(arguments), false)) || this;
        _this.tabs = [];
        return _this;
    }
    GroupTabElement.prototype.addTab = function (tab) {
        tab.setUiTabsBuilder(this.tab);
        tab.isLeft = this.isLeft;
        this.tabs.push(tab);
        return this;
    };
    GroupTabElement.prototype.addQuest = function (quest) {
        if (this.tabs.length > 0)
            this.tabs[0].addQuest(quest);
        return this;
    };
    GroupTabElement.prototype.getQuest = function (name) {
        var e_12, _a;
        try {
            for (var _b = __values(this.tabs), _c = _b.next(); !_c.done; _c = _b.next()) {
                var tab = _c.value;
                var quest = tab.getQuest(name);
                if (quest)
                    return quest;
            }
        }
        catch (e_12_1) { e_12 = { error: e_12_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_12) throw e_12.error; }
        }
        return null;
    };
    GroupTabElement.prototype.getTab = function (name) {
        var e_13, _a;
        try {
            for (var _b = __values(this.tabs), _c = _b.next(); !_c.done; _c = _b.next()) {
                var tab = _c.value;
                if (tab.getId() == name)
                    return tab;
            }
        }
        catch (e_13_1) { e_13 = { error: e_13_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_13) throw e_13.error; }
        }
        return null;
    };
    GroupTabElement.prototype.addedTab = function () {
        var e_14, _a;
        try {
            for (var _b = __values(this.tabs), _c = _b.next(); !_c.done; _c = _b.next()) {
                var tab = _c.value;
                tab.setUiTabsBuilder(this.tab);
                tab.isLeft = this.isLeft;
            }
        }
        catch (e_14_1) { e_14 = { error: e_14_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_14) throw e_14.error; }
        }
        return this;
    };
    GroupTabElement.prototype.onClick = function (position, container, tileEntity, window, canvas, scale) {
        var e_15, _a;
        var ui = new UiDialogSetting("Tabs")
            .setEnableExitButton(false);
        var self = this;
        var _loop_4 = function (tab) {
            ui.addElement(new SettingSlotElement(tab.getItem(), 35), true);
            ui.addElement(new SettingButtonTextElement(tab.getDisplayName()).setClick(function () {
                self.tab.main.openTab(self.tab, tab, self.getId());
                ui.close();
            }));
        };
        try {
            for (var _b = __values(this.tabs), _c = _b.next(); !_c.done; _c = _b.next()) {
                var tab = _c.value;
                _loop_4(tab);
            }
        }
        catch (e_15_1) { e_15 = { error: e_15_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_15) throw e_15.error; }
        }
        this.tab.openDialogToTab(ui, this);
        return false;
    };
    GroupTabElement.prototype.onLongClick = function (position, container, tileEntity, window, canvas, scale) {
        return this.onClick.apply(this, arguments);
    };
    return GroupTabElement;
}(StandartTabElement));
;
var TabSetting = /** @class */ (function (_super) {
    __extends(TabSetting, _super);
    function TabSetting(id, texture, path) {
        var _this = _super.call(this, id) || this;
        _this.han = function () { };
        _this.texture = texture;
        var save = {};
        if (FileTools.isExists(path))
            save = FileTools.ReadJSON(path);
        _this.setting = new UiDialogSetting("Setting");
        _this.setting.add(new SettingTextElement("Quest editor"));
        _this.setting.add(new SettingSwitchElement("quest_editor"));
        _this.setting.setConfig(save);
        _this.setting.setCloseHandler(function (setting) {
            FileTools.WriteJSON(path, setting.getConfig(), true);
            _this.han(setting.getConfig());
        });
        return _this;
    }
    TabSetting.prototype.apply = function () {
        this.han(this.setting.getConfig());
        return this;
    };
    TabSetting.prototype.isEdit = function () {
        return false;
    };
    TabSetting.prototype.setHandlerClose = function (han) {
        this.han = han;
        return this;
    };
    TabSetting.prototype.getSetting = function () {
        return this.setting;
    };
    TabSetting.prototype.getConfig = function () {
        return this.setting.getConfig();
    };
    TabSetting.prototype.getItem = function () {
        return ItemAir;
    };
    TabSetting.prototype.getTextureSelected = function (style) {
        return this.getTextureSlot(style);
    };
    TabSetting.prototype.getTextureSlot = function (style) {
        return this.texture;
    };
    TabSetting.prototype.onClick = function (position, container, tileEntity, window, canvas, scale) {
        this.setting.openCenter();
        return false;
    };
    TabSetting.prototype.onLongClick = function (position, container, tileEntity, window, canvas, scale) {
        return false;
    };
    return TabSetting;
}(StandartTabElement));
var GiveItems = /** @class */ (function () {
    function GiveItems() {
    }
    GiveItems.registerGive = function (main, isLeft, tab, quest, items) {
        GiveItems.items[main.getClientName() + ":" + isLeft + ":" + tab + ":" + quest] = items;
    };
    GiveItems.items = {};
    return GiveItems;
}());
;
Callback.addCallback("QuestGive", function (main, isLeft, tab, quest, player, value, is, result) {
    var e_16, _a;
    if (result) {
        var items_4 = GiveItems.items[main.getClientName() + ":" + isLeft + ":" + tab + ":" + quest];
        if (items_4) {
            var actor = new PlayerActor(player);
            try {
                for (var items_3 = __values(items_4), items_3_1 = items_3.next(); !items_3_1.done; items_3_1 = items_3.next()) {
                    var item = items_3_1.value;
                    actor.addItemToInventory(item.id, item.count, item.data, item.extra || null, true);
                }
            }
            catch (e_16_1) { e_16 = { error: e_16_1 }; }
            finally {
                try {
                    if (items_3_1 && !items_3_1.done && (_a = items_3.return)) _a.call(items_3);
                }
                finally { if (e_16) throw e_16.error; }
            }
        }
    }
});
;
;
var UiJsonParser = /** @class */ (function () {
    function UiJsonParser(path) {
        if (!FileTools.isExists(path))
            return;
        this.path = path;
        var object = FileTools.ReadJSON(path);
        if (object.type == "main") {
            if (UiJsonParser.mains[path])
                return;
            UiJsonParser.mains[path] = { path: path, main: object };
            if (object.translations) {
                var translations = {};
                for (var i in object.translations) {
                    var file = object.translations[i];
                    var _path = UiJsonParser.getDirectory(path) + file;
                    var lang = file.split("/").pop().split(".")[0];
                    var objects = FileTools.ReadText(_path).split("\n");
                    for (var i_2 = 0; i_2 < objects.length; i_2++) {
                        var text = objects[i_2].split(":=");
                        translations[text[0]] = translations[text[0]] || {};
                        translations[text[0]][lang] = (text[1] || "").replace("\\n", "\n");
                    }
                }
                for (var key in translations) {
                    UiJsonParser.translations[key] = translations[key];
                    Translation.addTranslation(key, translations[key]);
                }
            }
            for (var i in object.tabs) {
                var element = object.tabs[i];
                if (typeof element == "string")
                    new UiJsonParser(UiJsonParser.getDirectory(path) + element);
                else {
                    for (var i_3 in element.quests) {
                        var _element = element.quests[i_3];
                        if (typeof _element == "string")
                            new UiJsonParser(UiJsonParser.getDirectory(path) + _element);
                        else
                            UiJsonParser.quest[path + "_" + i_3] = { path: path, quest: _element };
                    }
                    UiJsonParser.tab[path + "_" + element.identifier] = { path: path, tab: element };
                }
            }
        }
        else if (object.type == "tab") {
            if (UiJsonParser.tab[path])
                return;
            for (var i in object.quests) {
                var element = object.quests[i];
                if (typeof element == "string")
                    new UiJsonParser(UiJsonParser.getDirectory(path) + element);
                else
                    UiJsonParser.quest[path + "_" + i] = { path: path, quest: element };
            }
            UiJsonParser.tab[path] = { path: path, tab: object };
        }
        else if (object.type == "quest") {
            if (UiJsonParser.quest[path])
                return;
            UiJsonParser.quest[path] = { path: path, quest: object };
        }
    }
    UiJsonParser.getDirectory = function (path) {
        var e_17, _a;
        var files = path.replace(/\\/g, '/').split("/");
        files.pop();
        var result = "";
        try {
            for (var files_1 = __values(files), files_1_1 = files_1.next(); !files_1_1.done; files_1_1 = files_1.next()) {
                var file = files_1_1.value;
                result += file + "/";
            }
        }
        catch (e_17_1) { e_17 = { error: e_17_1 }; }
        finally {
            try {
                if (files_1_1 && !files_1_1.done && (_a = files_1.return)) _a.call(files_1);
            }
            finally { if (e_17) throw e_17.error; }
        }
        return result;
    };
    UiJsonParser.getTranslations = function (name) {
        if (this.translations[name]) {
            this.translations[name].en = name;
            return this.translations[name];
        }
        return { en: name };
    };
    UiJsonParser.buildTab = function (element, path, key) {
        var tab = new StandartTabElement(element.identifier);
        tab.setDisplayName(element.name);
        element.item.id = eval(element.item.id);
        tab.setItem(element.item);
        tab.path = path;
        var quests = [];
        for (var i in element.quests) {
            var quest = element.quests[i];
            if (typeof quest == "string")
                quests.push(UiJsonParser.getDirectory(path) + quest);
            else
                quests.push(path + "_" + i);
        }
        UiJsonParser.tab_build[key || element.identifier] = {
            isLeft: element.isLeft,
            tab: tab,
            quests: quests
        };
        return tab;
    };
    UiJsonParser.buildQuest = function (element, path, key) {
        element.item.id = eval(element.item.id);
        var quest = new Quest({
            id: element.identifier,
            item: element.item,
            x: element.x,
            y: element.y,
            lines: element.lines,
            size: element.size
        });
        quest.quest = element;
        quest.path = path;
        var dialog = new UiDialog(element.dialog.title, element.dialog.description);
        var items = [];
        for (var i in element.dialog.input) {
            element.dialog.input[i].id = eval(element.dialog.input[i].id);
            items.push({ item: element.dialog.input[i] });
        }
        dialog.setInput(items);
        items = [];
        for (var i in element.dialog.output) {
            element.dialog.output[i].id = eval(element.dialog.output[i].id);
            items.push({ item: element.dialog.output[i] });
        }
        dialog.setResult(items);
        quest.setDialog(dialog);
        UiJsonParser.quest_build[key || element.identifier] = {
            quest: quest
        };
        UiJsonParser.quest[key || element.identifier] = { quest: element, path: path };
        return quest;
    };
    UiJsonParser.buildQuestFunctions = function (main, tab, key, isLeft, added) {
        if (added === void 0) { added = true; }
        if (!UiJsonParser.quest_build[key])
            return null;
        var quest = UiJsonParser.quest_build[key].quest;
        var object = UiJsonParser.quest[key];
        var items = [];
        for (var i in object.quest.dialog.output) {
            object.quest.dialog.output[i].id = eval(object.quest.dialog.output[i].id);
            items.push(object.quest.dialog.output[i]);
        }
        if (object.quest.dialog.give_item)
            GiveItems.registerGive(main, isLeft, tab.getId(), quest.getId(), items);
        if (object.quest.give)
            for (var i in object.quest.give) {
                var give = object.quest.give[i];
                if (give.type == "recipe")
                    RecipeCheck.registerRecipeCheck(main, UiJsonParser.getIds(give.items), isLeft, tab.getId(), quest.getId(), object.quest.name, object.quest.description);
                else if (give.type == "destroy")
                    DestroyBlocks.registerDestroyBlocks(main, [eval(give.block.id) + ":" + give.block.data], isLeft, tab.getId(), quest.getId(), object.quest.name, object.quest.description);
                else if (give.type == "inventory")
                    quest.dialog.setInventoryCheck(true);
            }
        if (added)
            tab.addQuest(quest);
        else
            tab.replaceQuest(quest.getId(), quest);
    };
    UiJsonParser.buildTabFunctions = function (main, tab, isLeft, added) {
        if (added === void 0) { added = true; }
        tab.setUiTabsBuilder(main.getTabsBuilder(isLeft));
        if (added)
            main.addRender(isLeft, tab);
        else
            main.getTabsBuilder(isLeft).replaceTab(tab.getId(), tab);
    };
    UiJsonParser.getLangs = function (path) {
        var e_18, _a;
        var file = FileTools.ReadJSON(path);
        var langs = [];
        try {
            for (var _b = __values(file.translations), _c = _b.next(); !_c.done; _c = _b.next()) {
                var path_1 = _c.value;
                langs.push(path_1.replace(/\\/g, '/').split("/").pop().split(".")[0]);
            }
        }
        catch (e_18_1) { e_18 = { error: e_18_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_18) throw e_18.error; }
        }
        return langs;
    };
    UiJsonParser.saveLang = function (pathMain, translations) {
        var e_19, _a;
        this.translations[translations.en] = translations;
        var json = FileTools.ReadJSON(pathMain);
        try {
            for (var _b = __values(json.translations), _c = _b.next(); !_c.done; _c = _b.next()) {
                var path = _c.value;
                var text = FileTools.ReadText(this.getDirectory(pathMain) + path);
                var translation = translations[path.replace(/\\/g, '/').split("/").pop().split(".")[0]];
                if (translation && path.replace(/\\/g, '/').split("/").pop().split(".")[0] != translation)
                    text += "\n" + translations.en + ":=" + translation;
                FileTools.WriteText(this.getDirectory(pathMain) + path, text);
            }
        }
        catch (e_19_1) { e_19 = { error: e_19_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_19) throw e_19.error; }
        }
    };
    UiJsonParser.getIds = function (ids) {
        var result = [];
        for (var i in ids)
            result.push(eval(ids[i]));
        return result;
    };
    UiJsonParser.getId = function (ids) {
        return eval(ids);
    };
    UiJsonParser.mains = {};
    UiJsonParser.tab = {};
    UiJsonParser.quest = {};
    UiJsonParser.tab_build = {};
    UiJsonParser.quest_build = {};
    UiJsonParser.translations = {};
    return UiJsonParser;
}());
;
new UiJsonParser(__dir__ + "book.json");
Callback.addCallback("PostLoaded", function () {
    for (var key in UiJsonParser.quest)
        UiJsonParser.buildQuest(UiJsonParser.quest[key].quest, UiJsonParser.quest[key].path, key);
    for (var key in UiJsonParser.tab)
        UiJsonParser.buildTab(UiJsonParser.tab[key].tab, UiJsonParser.tab[key].path, key);
    var _loop_5 = function (key) {
        var element = UiJsonParser.mains[key].main;
        if (element.item.createItem) {
            IDRegistry.genItemID(element.item.createItem.id);
            Item.createItem(element.item.createItem.id, element.item.createItem.name, element.item.createItem.texture, {
                stack: 1
            });
        }
        var main = new UiMainBuilder(element.identifier);
        main.path = UiJsonParser.mains[key].path;
        main.addRenderRight(new TabCloseElement("close_button"));
        main.setDebug(element.debug);
        if (element.setting === undefined || element.setting)
            main.addRenderRight(new TabSetting("setting_tab", "settings", UiJsonParser.getDirectory(main.path) + (element.setting_save_path || "book_save.json"))
                .setHandlerClose(function (config) {
                main.setDebug(config.quest_editor);
            })
                .apply());
        for (var i in element.tabs) {
            var tab = element.tabs[i];
            if (typeof tab == "string")
                id = UiJsonParser.getDirectory(UiJsonParser.mains[key].path) + tab;
            else
                id = UiJsonParser.mains[key].path + "_" + tab.identifier;
            var _tab = UiJsonParser.tab_build[id];
            if (!_tab)
                continue;
            UiJsonParser.buildTabFunctions(main, _tab.tab, _tab.isLeft);
            for (var i_4 in _tab.quests)
                UiJsonParser.buildQuestFunctions(main, _tab.tab, _tab.quests[i_4], _tab.isLeft);
        }
        if (element.save)
            main.registerSave();
        main.registerItem(eval(element.item.ui_item));
        Callback.invokeCallback("MainRegister", main.getClientName(), main);
    };
    var id, id;
    for (var key in UiJsonParser.mains) {
        _loop_5(key);
    }
    Callback.invokeCallback("EndRegisterUi");
});
var RecipesUtil;
(function (RecipesUtil) {
    var itemsCraft = {};
    function is(player, items) {
        var e_20, _a;
        var items_crafts = itemsCraft[player];
        if (!items_crafts)
            return false;
        try {
            for (var items_5 = __values(items), items_5_1 = items_5.next(); !items_5_1.done; items_5_1 = items_5.next()) {
                var item = items_5_1.value;
                if ((items_crafts[item] || 0) < 1)
                    return false;
            }
        }
        catch (e_20_1) { e_20 = { error: e_20_1 }; }
        finally {
            try {
                if (items_5_1 && !items_5_1.done && (_a = items_5.return)) _a.call(items_5);
            }
            finally { if (e_20) throw e_20.error; }
        }
        return true;
    }
    RecipesUtil.is = is;
    function add(player, item) {
        var items_crafts = (itemsCraft[player] || {});
        items_crafts[item] = (items_crafts[item] || 0) + 1;
        itemsCraft[player] = items_crafts;
    }
    RecipesUtil.add = add;
    function getPlayers() {
        var players = [];
        for (var player in itemsCraft)
            players.push(Number(player));
        return players;
    }
    RecipesUtil.getPlayers = getPlayers;
    function get(player) {
        return itemsCraft[player] || {};
    }
    RecipesUtil.get = get;
    function set(player, items) {
        itemsCraft[player] = items;
    }
    RecipesUtil.set = set;
    function clear() {
        itemsCraft = {};
    }
    RecipesUtil.clear = clear;
})(RecipesUtil || (RecipesUtil = {}));
;
var RecipeCheck = /** @class */ (function () {
    function RecipeCheck() {
    }
    RecipeCheck.isCrafts = function (player, items) {
        return RecipesUtil.is(player, items) == true;
    };
    RecipeCheck.addCraft = function (player, item) {
        RecipesUtil.add(player, item);
    };
    RecipeCheck.registerRecipeCheck = function (ui, items, isLeft, tab, quest, title, description) {
        RecipeCheck.register_checks.push({
            ui: ui,
            items: items,
            isLeft: isLeft,
            tab: tab,
            quest: quest,
            description: description,
            title: title
        });
    };
    RecipeCheck.register_checks = [];
    return RecipeCheck;
}());
;
Callback.addCallback("VanillaWorkbenchCraft", function (result, container, player) {
    RecipeCheck.addCraft(player, result.id);
    for (var i in RecipeCheck.register_checks) {
        var object = RecipeCheck.register_checks[i];
        if (RecipeCheck.isCrafts(player, object.items))
            if (!object.ui.canQuest(object.isLeft, object.tab, object.quest, player) && object.ui.giveQuest(object.isLeft, object.tab, object.quest, player, true, true) && object.description != undefined && object.title != undefined)
                AchievementAPI.give(player, object.title, object.description, object.ui.getQuest(object.isLeft, object.tab, object.quest).getItem());
    }
});
;
var DestroyBlocks = /** @class */ (function () {
    function DestroyBlocks() {
    }
    DestroyBlocks.isDestroys = function (player, arr) {
        var blocks = DestroyBlocks.blocks[player] = DestroyBlocks.blocks[player] || {};
        for (var i in arr)
            if (!blocks[arr[i]])
                return false;
        return true;
    };
    DestroyBlocks.addDestroy = function (player, id, data) {
        this.blocks[player] = this.blocks[player] || {};
        this.blocks[player][id + ":" + data] = true;
    };
    DestroyBlocks.registerDestroyBlocks = function (ui, blocks, isLeft, tab, quest, title, description) {
        DestroyBlocks.register_checks.push({
            ui: ui,
            blocks: blocks,
            isLeft: isLeft,
            tab: tab,
            quest: quest,
            description: description,
            title: title
        });
    };
    DestroyBlocks.blocks = {};
    DestroyBlocks.register_checks = [];
    return DestroyBlocks;
}());
;
Callback.addCallback("DestroyBlock", function (coords, tile, player) {
    DestroyBlocks.addDestroy(player, tile.id, tile.data);
    for (var i in DestroyBlocks.register_checks) {
        var object = DestroyBlocks.register_checks[i];
        if (DestroyBlocks.isDestroys(player, object.blocks))
            if (!object.ui.canQuest(object.isLeft, object.tab, object.quest, player) && object.ui.giveQuest(object.isLeft, object.tab, object.quest, player, true, true) && object.description != undefined && object.title != undefined)
                AchievementAPI.give(player, object.title, object.description, object.ui.getQuest(object.isLeft, object.tab, object.quest).getItem());
    }
});
/// <reference path="./ui/UiMainBuilder.ts"/>
/// <reference path="./ui/StandartTabElement.ts"/>
/// <reference path="./ui/TabCloseElement.ts"/>
/// <reference path="./ui/GroupTabElement.ts"/>
/// <reference path="./ui/Quest.ts"/>
/// <reference path="./quests_utils/RecipeCheck.ts"/>
/// <reference path="./quests_utils/DestroyBlocks.ts"/>
/// <reference path="./quests_utils/GiveItems.ts"/>
Saver.addSavesScope("FTBQuests", function (scope) {
    scope = scope || { new_recipes_status: true, recipes: {}, recipes_new: {}, blocks: {} };
    if (!scope.new_recipes_status) { //legacy save
        var keys = Object.keys(scope.recipes || {});
        for (var i in keys) {
            var recipes = scope.recipes[keys[i]];
            for (var a in recipes)
                RecipesUtil.add(Number(keys[i]), recipes[a]);
        }
    }
    var RECIPES = scope.recipes_new || {};
    for (var player in RECIPES)
        RecipesUtil.set(Number(player), RECIPES[player]);
    DestroyBlocks.blocks = scope.blocks || {};
}, function () {
    var recipes = {};
    var players = RecipesUtil.getPlayers();
    for (var i in players) {
        var player = players[i];
        recipes[player] = RecipesUtil.get(player);
    }
    return {
        new_recipes_status: true,
        recipes: {},
        recipes_new: recipes,
        blocks: DestroyBlocks.blocks || {}
    };
});
Callback.addCallback('LevelLeft', function () {
    RecipesUtil.clear();
    DestroyBlocks.blocks = {};
});
ModAPI.registerAPI("FTBQuests", {
    UiMainBuilder: UiMainBuilder,
    StandartTabElement: StandartTabElement,
    GroupTabElement: GroupTabElement,
    UiTabsBuilder: UiTabsBuilder,
    Quest: Quest,
    TabCloseElement: TabCloseElement,
    TabSetting: TabSetting,
    RecipeCheck: RecipeCheck,
    DestroyBlocks: DestroyBlocks,
    AchievementAPI: AchievementAPI,
    UiDialogBaseStyle: UiDialogBaseStyle,
    UiDialogStyle: UiDialogStyle,
    UiDialog: UiDialog,
    UiDialogBase: UiDialogBase,
    UiStyle: UiStyle,
    MinecraftDialogStyle: MinecraftDialogStyle,
    UiTabStyle: UiTabStyle,
    UiJsonParser: UiJsonParser,
    CloseButtonStyle: CloseButtonStyle,
    GiveItems: GiveItems,
    UiDialogSetting: UiDialogSetting,
    Keyboard: Keyboard,
    SelectedItemDialog: SelectedItemDialog,
    Setting: {
        SettingElement: SettingElement,
        SettingButtonElement: SettingButtonElement,
        SettingIconElement: SettingIconElement,
        SettingItemsElement: SettingItemsElement,
        SettingKeyboardElement: SettingKeyboardElement,
        SettingNumbersElement: SettingNumbersElement,
        SettingStringsElement: SettingStringsElement,
        SettingTextElement: SettingTextElement,
        SettingButtonTextElement: SettingButtonTextElement,
        SettingSlotElement: SettingSlotElement,
        SettingTranslationElement: SettingTranslationElement,
        SettingSwitchElement: SettingSwitchElement
    },
    requireGlobal: function (cmd) {
        return eval(cmd);
    }
});
/*
Example

class ExampleCustomTab extends StandartTabElement {
    public onLongClick(position: Vector, container: ItemContainer, tileEntity: TileEntity, window: UI.Window, canvas: globalAndroid.graphics.Canvas, scale: number): boolean {
        alert("tab custom");
        return super.onLongClick(position, container, tileEntity, window, canvas, scale);
    }

    public getDisplayName(): string {
        return "Custom tab";
    }

    public getItem(): ItemInstance {
        return {id: Math.floor(264*Math.random()), count: 1, data: 0};
    }
};

class ExampleCustomQuest extends Quest {
    private custom_ui: UiDialogSetting;

    constructor(description: IQuest){
        super(description);

        this.custom_ui = new UiDialogSetting("Test dialog");
        this.custom_ui.add(new SettingTextElement("Ехал Жека через реку, проебал Жека репу!"))
    }

    public getItem(): ItemInstance {
        return {id: Math.floor(264*Math.random()), count: 1, data: 0};
    }

    public onClick(position: Vector, container: ItemContainer, tileEntity: TileEntity, window: UI.Window, canvas: globalAndroid.graphics.Canvas, scale: number): void {
        this.custom_ui.openCenter();
    }
}

let example = new UiMainBuilder("example_book");
example.addRenderLeft(
    new StandartTabElement("example_tab_left")
        .setItem({id: 264, count: 1, data: 0})
        .setDisplayName("1")

        .addQuest(new ExampleCustomQuest({
            id: "example_1",
            x: 100,
            y: 100,
            size: 60
        }))

        .addQuest(new ExampleCustomQuest({
            id: "example_2",
            x: 200,
            y: 400,
            size: 100,
            lines: ["example_1"]
        }))
);
example.addRenderLeft(
    new GroupTabElement("example_group")
        .addTab(
            new StandartTabElement("example_group_1")
                .setItem({id: 266, count: 1, data: 0})
                .setDisplayName("2")
        )
        .addTab(
            new StandartTabElement("example_group_2")
                .setItem({id: 263, count: 1, data: 0})
                .setDisplayName("3")
        )
);
example.addRender(true, new ExampleCustomTab("example_custom_tab"))

example.addRenderRight(
    new StandartTabElement("example_tab_right")
        .setItem({id: 1, count: 1, data: 0})
        .setDisplayName("4")
);

example.registerItem(VanillaItemID.book);
example.registerSave();

//The last 2 parameters are needed for the animation of the achievement
RecipeCheck.registerRecipeCheck(example, [263], true, "example_tab_left", "example_1", "Title", "description");
RecipeCheck.registerRecipeCheck(example, [264], true, "example_tab_left", "example_2");*/ 
