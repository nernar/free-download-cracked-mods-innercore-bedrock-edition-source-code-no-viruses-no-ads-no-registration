var File = java.io.File;
var Bitmap = android.graphics.Bitmap;
var BitmapFactory = android.graphics.BitmapFactory;
var FileOutputStream = java.io.FileOutputStream;
var BufferedReader = java.io.BufferedReader;
var FileReader = java.io.FileReader;
var JavaString = java.lang.String;
var Canvas = android.graphics.Canvas;
var Paint = android.graphics.Paint;
var PorterDuffColorFilter = android.graphics.PorterDuffColorFilter;
var Color = android.graphics.Color;
var PorterDuff = android.graphics.PorterDuff;
var IllegalStateException = java.lang.IllegalStateException;
var TextureWorker;
(function (TextureWorker) {
    function changeBitmapColor(bitmap, color) {
        var newbmp = Bitmap.createBitmap(bitmap.getWidth(), bitmap.getHeight(), Bitmap.Config.ARGB_8888);
        var canvas = new Canvas(newbmp);
        var paint = new Paint();
        paint.setColorFilter(new PorterDuffColorFilter(Color.rgb(color[0], color[1], color[2]), PorterDuff.Mode.MULTIPLY));
        canvas.drawBitmap(bitmap, 0, 0, paint);
        return newbmp;
    }
    function fromModDir(textureSource) {
        if (textureSource.path.startsWith(__dir__))
            return textureSource;
        return { name: textureSource.name, path: "".concat(__dir__, "/").concat(textureSource.path), color: textureSource.color };
    }
    function createTextureWithOverlays(args, fallback) {
        var _a;
        if (FileUtil.isExist("".concat(args.result.path).concat(args.result.name, ".png")))
            return;
        var bmp = Bitmap.createBitmap(args.bitmap.width, args.bitmap.height, (_a = args.bitmap.config) !== null && _a !== void 0 ? _a : Bitmap.Config.ARGB_8888);
        var cvs = new Canvas(bmp);
        args.overlays.forEach(function (over) {
            var tex = FileUtil.readImage("".concat(over.path).concat(over.name, ".png"));
            cvs.drawBitmap(over.color ? changeBitmapColor(tex, over.color) : tex, 0, 0, null);
        });
        FileUtil.writeImage("".concat(args.result.path).concat(args.result.name, ".png"), bmp);
        if (fallback)
            return bmp;
    }
    function createTextureWithOverlaysModDir(args, fallback) {
        args.result = fromModDir(args.result);
        args.overlays = args.overlays.map(fromModDir);
        return createTextureWithOverlays(args, fallback);
    }
    TextureWorker.createTextureWithOverlaysModDir = createTextureWithOverlaysModDir;
})(TextureWorker || (TextureWorker = {}));
var IAHelper;
(function (IAHelper) {
    function convertTexture(srcPath, srcName, resultPath, resultName) {
        if (FileUtil.isExist("".concat(__dir__, "/").concat(resultPath).concat(resultName, "_0.png")))
            return;
        var anim = FileUtil.readImage("".concat(__dir__, "/").concat(srcPath).concat(srcName, ".png"));
        if (anim.getHeight() % anim.getWidth() !== 0)
            throw new IllegalStateException("The bitmap height must be a multiple of its width!");
        for (var i = 0; i < anim.getHeight() / anim.getWidth(); i++) {
            var bmp = Bitmap.createBitmap(anim.getWidth(), anim.getWidth(), Bitmap.Config.ARGB_8888);
            for (var x = 0; x < anim.getWidth(); x++)
                for (var y = 0; y < anim.getWidth(); y++)
                    bmp.setPixel(x, y, anim.getPixel(x, y + anim.getWidth() * i));
            FileUtil.writeImage("".concat(__dir__, "/").concat(resultPath).concat(resultName, "_").concat(i, ".png"), bmp);
        }
    }
    IAHelper.convertTexture = convertTexture;
})(IAHelper || (IAHelper = {}));
function hex2rgb(hex) {
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return [parseInt(result[1], 16), parseInt(result[2], 16), parseInt(result[3], 16)];
}
var FileUtil;
(function (FileUtil) {
    function isExist(path) {
        return new File(path).exists();
    }
    FileUtil.isExist = isExist;
    function readImage(path) {
        var options = new BitmapFactory.Options();
        options.inScaled = false;
        return BitmapFactory.decodeFile(path, options);
    }
    FileUtil.readImage = readImage;
    function writeImage(path, bitmap) {
        bitmap.compress(Bitmap.CompressFormat.PNG, 100, new FileOutputStream(path));
    }
    FileUtil.writeImage = writeImage;
    function readFileText(path) {
        var reader = new BufferedReader(new FileReader(new File(path)));
        var text = "";
        while (true) {
            var readLine = reader.readLine();
            var line = readLine;
            if (readLine != null)
                text += "".concat(line, "\n");
            else {
                reader.close();
                return text;
            }
        }
    }
    function readJSON(path) {
        var textFile = readFileText(path);
        try {
            return JSON.parse(textFile) || {};
        }
        catch (e) {
            return {};
        }
    }
    FileUtil.readJSON = readJSON;
    function getListOfFiles(path, extension) {
        var dir = new File(path);
        var list = [];
        var files = dir.listFiles();
        if (!files)
            return list;
        for (var i = 0; i < files.length; i++) {
            var file = files[i];
            if (!file.isDirectory() && (!extension || file.getName().endsWith(extension))) {
                list.push(file);
            }
        }
        return list;
    }
    FileUtil.getListOfFiles = getListOfFiles;
    function getListOfDirs(path) {
        var dir = new File(path);
        var list = [];
        var files = dir.listFiles();
        if (!files)
            return list;
        for (var i = 0; i < files.length; i++) {
            var file = files[i];
            if (file.isDirectory())
                list.push(file);
        }
        return list;
    }
    FileUtil.getListOfDirs = getListOfDirs;
})(FileUtil || (FileUtil = {}));
var BaseTex = {
    infuser_type: "infuser_type",
    liquid: "liquid",
    heat: "heat",
    mek_dir_source: "resources/res/texture_source/",
    mek_dir_result_item: "resources/res/items-opaque/",
    mek_dir_result_gui: "gui/gui/"
};
var ScaleTexture = {
    infuser: { width: 16, height: 160 },
    liquid: { width: 16, height: 512 },
    heat: { width: 16, height: 512 },
};
function createTexure(path, texture, color_rgb, scale, output_dir, output_texture) {
    TextureWorker.createTextureWithOverlaysModDir({
        bitmap: { width: scale.width, height: scale.height },
        overlays: [
            { path: path, name: texture, color: color_rgb }
        ],
        result: { path: output_dir, name: output_texture }
    });
}
var InfuserType = [
    { key: "redstone", hex: "#ff0000" },
    { key: "coal", hex: "#1a1a1a" },
    { key: "diamond", hex: "#00ffff" },
    { key: "obsidian", hex: "#57099a" },
    { key: "tin", hex: "#edf4ff" },
    { key: "gold", hex: "#fff700" }
];
InfuserType.forEach(function (type) {
    createTexure(BaseTex.mek_dir_source, BaseTex.infuser_type, hex2rgb(type.hex), ScaleTexture.infuser, BaseTex.mek_dir_result_gui, "infuser_".concat(type.key));
});
var GasType = [
    { key: "hydrogen", hex: "#ffffff" },
    { key: "oxygen", hex: "#6ce2ff" },
    { key: "chlorine", hex: "#cfe800" },
    { key: "sulfur_dioxide", hex: "#a99d90" },
    { key: "sulfur_trioxide", hex: "#ce6c6c" },
    // fluid
    { key: "sodium", hex: "#e9fef4" },
    { key: "heater_sodium", hex: "#d19469" },
    { key: "sulfuric_acid", hex: "#82802b" },
    { key: "hydrogen_chloride", hex: "#a8f1e9" },
    { key: "ethene", hex: "#eaccf9" },
    { key: "lithium", hex: "#eba400" },
    { key: "hydrofluoric_acid", hex: "#c6c7bd" },
    { key: "uranium_oxide", hex: "#e1f573" },
    { key: "uranium_hexafluoride", hex: "#809960" }
];
GasType.forEach(function (type) {
    createTexure(BaseTex.mek_dir_source, BaseTex.liquid, hex2rgb(type.hex), ScaleTexture.liquid, BaseTex.mek_dir_result_gui, "".concat(type.key, "_gas"));
    createTexure(BaseTex.mek_dir_source, BaseTex.liquid, hex2rgb(type.hex), ScaleTexture.liquid, BaseTex.mek_dir_result_gui, "".concat(type.key, "_liquid"));
});
// FileUtil.getListOfFiles(`${__dir__}/resources/res/animated_items/`, "png").forEach(file => {
//     const fileName = new JavaString(file.getName()).replaceFirst("[.][^.]+$", "");
//     IAHelper.convertTexture("resources/res/animated_items/", fileName, "resources/res/items-opaque/", fileName);
// });
