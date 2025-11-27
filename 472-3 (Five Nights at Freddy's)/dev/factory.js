const AssetFactory = {loaded: {}};
AssetFactory.loadAsset = function (key, path) {
    return (this.loaded[key] = new java.io.File(__dir__ + "assets", path));
};
AssetFactory.createFont = function (key) {
    var loaded = this.getFile(key + "Font") || this.getFile("minecraftFont"), exists = loaded && loaded.exists();
    return exists ? android.graphics.Typeface.createFromFile(loaded) : android.graphics.Typeface.MONOSPACE;
};
AssetFactory.getFile = function (key) {
    return this.loaded[key];
};
const ImageFactory = {loaded: {}};
ImageFactory.loadFromFile = function (key, path) {
    var file = new java.io.File(__dir__ + "gui", path);
    this.loaded[key] = android.graphics.BitmapFactory.decodeFile(file);
    return {compress: function (min, max) {
        ImageFactory.compressBitmap(key, min, max);
    }};
};
ImageFactory.getCountByTag = function (tag) {
    var count = 0;
    for (var i in this.loaded) {
        if (i.indexOf(tag) != -1) {
            count++;
        }
    }
    return count;
};
ImageFactory.compressBitmap = function (key, min, max) {
    var size = Ui.Display.HEIGHT > 480 ? Ui.Display.HEIGHT < 1080 ? min + Ui.Display.HEIGHT / 1560 * (max - min) : max : min, bitmap = this.getBitmap(key), width = bitmap.getWidth(), height = bitmap.getHeight(), dx = Math.ceil(width * size), dy = Math.ceil(height * size);
    this.loaded[key] = android.graphics.Bitmap.createScaledBitmap(android.graphics.Bitmap.createBitmap(bitmap, 0, 0, width, height), dx, dy, false);
};
ImageFactory.getBitmap = function (key) {
    return this.loaded[key];
};

