const ImageFactory = new Object();
ImageFactory.loaded = new Object();
ImageFactory.drawables = new Object();
ImageFactory.resizes = new Object();
ImageFactory.tiles = new Object();
ImageFactory.resourcesCount = 0;
ImageFactory.loadFromAsset = function (key, path) {
    return tryoutSafety.call(this, function () {
        let params = new android.graphics.BitmapFactory.Options();
        params.inPreferredConfig = android.graphics.Bitmap.Config.ARGB_4444;
        let file = path instanceof java.io.File ? path : new java.io.File(Dirs.ASSET, path);
        if (file == null || !file.exists()) {
            return null;
        }
        let readed = Files.readBytes(file);
        if (!readed || readed.length == 0) {
            return null;
        }
        Encyption.updateKey("nernar", "editorResource");
        let base64 = Encyption.decrypt(readed);
        if (!base64 || base64.length == 0) {
            return null;
        }
        let bytes = Base64.decode(base64);
        if (!bytes || bytes.length == 0) {
            return null;
        }
        this.loaded[key] = android.graphics.BitmapFactory.decodeByteArray(bytes, 0, bytes.length, params);
        this.checkAndResize(key);
        this.checkAndRetile(key);
        return key;
    }, function (e) {
        Logger.Log("ImageFactory failed to decode resource " + key, "WARNING");
    }, null);
};
ImageFactory.loadFromFile = function (key, path) {
    return tryoutSafety.call(this, function () {
        let params = new android.graphics.BitmapFactory.Options();
        params.inPreferredConfig = android.graphics.Bitmap.Config.ARGB_4444;
        let file = path instanceof java.io.File ? path : new java.io.File(Dirs.ASSET, path);
        if (file == null || !file.exists()) {
            return null;
        }
        this.loaded[key] = android.graphics.BitmapFactory.decodeFile(file, params);
        this.checkAndResize(key);
        this.checkAndRetile(key);
        return key;
    }, function (e) {
        Logger.Log("ImageFactory failed to decode file " + key, "WARNING");
    }, null);
};
ImageFactory.checkSize = function (file) {
    return tryoutSafety.call(this, function () {
        let options = new android.graphics.BitmapFactory.Options();
        options.inJustDecodeBounds = true;
        android.graphics.BitmapFactory.decodeFile(file, options);
        return [options.outWidth, options.outHeight];
    }, null);
};
ImageFactory.getCountByTag = function (tag) {
    let count = 0;
    for (let item in this.loaded) {
        if (item.indexOf(tag) != -1) {
            count++;
        }
    }
    return count;
};
ImageFactory.getBitmap = function (key) {
    return this.loaded[key] || null;
};
ImageFactory.getDrawable = function (key) {
    if (this.drawables.hasOwnProperty(key)) {
        return this.drawables[key];
    }
    if (key instanceof android.graphics.drawable.Drawable) {
        return key;
    }
    let bitmap = this.getBitmap(key);
    if (bitmap === null) {
        return null;
    }
    let drawable = new android.graphics.drawable.BitmapDrawable(bitmap);
    drawable.setFilterBitmap(false);
    return drawable;
};
ImageFactory.getTintDrawable = function (drawable, color) {
    if (!(drawable instanceof android.graphics.drawable.Drawable)) {
        drawable = this.getDrawable(drawable);
    }
    if (drawable === null) {
        return drawable;
    }
    if (android.os.Build.VERSION.SDK_INT >= 29) {
        let filter = new android.graphics.BlendModeColorFilter(color, android.graphics.BlendMode.SRC_ATOP);
        drawable.setColorFilter(filter);
        return drawable;
    }
    drawable.setColorFilter(color, android.graphics.PorterDuff.Mode.SRC_ATOP);
    return drawable;
};
ImageFactory.clipAndMerge = function (background, foreground, level, orientate) {
    if (!(foreground instanceof android.graphics.drawable.Drawable)) {
        foreground = this.getDrawable(foreground);
    }
    if (!(background instanceof android.graphics.drawable.Drawable)) {
        background = this.getDrawable(background);
    }
    if (background === null && foreground == null) {
        return null;
    }
    if (orientate === undefined) {
        orientate = 1;
    }
    if (foreground !== null) {
        foreground = new android.graphics.drawable.ClipDrawable(foreground, orientate == 1 ? Interface.Gravity.LEFT : Interface.Gravity.BOTTOM, orientate);
        foreground.setLevel(preround(level, 0) || 1);
        if (background === null) {
            return foreground;
        }
    }
    if (background !== null) {
        background = new android.graphics.drawable.ClipDrawable(background, orientate == 1 ? Interface.Gravity.RIGHT : Interface.Gravity.TOP, orientate);
        background.setLevel(preround(10001 - level, 0) || 10000);
        if (foreground === null) {
            return background;
        }
    }
    return new android.graphics.drawable.LayerDrawable([background, foreground]);
};
ImageFactory.isLoaded = function (key) {
    return this.getBitmap(key) !== null;
};
ImageFactory.resizeBitmap = function (key, dx, dy) {
    let bitmap = this.getBitmap(key);
    if (bitmap === null) {
        return;
    }
    if (dy === undefined) {
        dy = dx;
    }
    let width = bitmap.getWidth(), height = bitmap.getHeight();
    this.loaded[key] = android.graphics.Bitmap.createScaledBitmap(android.graphics.Bitmap.createBitmap(bitmap, 0, 0, width, height), dx, dy, false);
};
ImageFactory.compressBitmap = function (key, min, max) {
    let bitmap = this.getBitmap(key);
    if (bitmap === null) {
        return;
    }
    let size = Interface.Display.HEIGHT > 480 ? Interface.Display.HEIGHT < 1080 ? min + Interface.Display.HEIGHT / 1560 * (max - min) : max : min, width = bitmap.getWidth(), height = bitmap.getHeight(), dx = Math.ceil(width * size), dy = Math.ceil(height * size);
    this.resizeBitmap(key, dx, dy);
};
ImageFactory.decodeAsAnimation = function (key, keys, time, oneshot) {
    return tryoutSafety.call(this, function () {
        let animation = new android.graphics.drawable.AnimationDrawable(), timeInFrames = typeof time != "number";
        if (oneshot) {
            animation.setOneShot(true);
        }
        for (let i = 0; i < keys.length; i++) {
            let drawable = this.getDrawable(keys[i]), ms = timeInFrames ? time[i] : time;
            animation.addFrame(drawable, ms);
        }
        this.drawables[key] = animation;
        this.checkAndResize(key);
        this.checkAndRetile(key);
        animation.start();
        return key;
    }, function (e) {
        Logger.Log("ImageFactory failed to create animation for " + key, "WARNING");
    }, null);
};
ImageFactory.loadDirectory = function (key, pathOrExplore, explore) {
    if (key === undefined) {
        key = new String();
        pathOrExplore = new String();
        explore = true;
    } else {
        if (pathOrExplore === undefined && explore == undefined) {
            pathOrExplore = new String();
            explore = true;
        } else {
            if (typeof pathOrExplore == "boolean") {
                explore = pathOrExplore;
                pathOrExplore = new String();
            }
        }
    }
    let file = new java.io.File(Dirs.ASSET, pathOrExplore);
    if (!file.exists()) {
        return null;
    }
    let list = file.listFiles(), keys = new Array();
    for (let i = 0; i < list.length; i++) {
        let name = list[i].getName(), path = pathOrExplore.length == 0 ? name : pathOrExplore + "/" + name;
        name = Files.getNameWithoutExtension(name) || name;
        let current = key.length == 0 ? name : key;
        if (!current.toLowerCase().endsWith(name.toLowerCase())) {
            name = name.substring(0, 1).toUpperCase() + name.substring(1);
            current += name;
        }
        if (list[i].isDirectory()) {
            if (explore) {
                this.loadDirectory(current, path, explore);
            }
        } else {
            if (list[i].getName().endsWith(".dnr")) {
                keys.push(this.loadFromAsset(current, path));
            }
        }
    }
    return keys;
};
ImageFactory.prepareParams = function (key, dx, dy) {
    this.resizes[key] = [dx, typeof dy != "number" ? dx : dy];
};
ImageFactory.checkAndResize = function (key) {
    for (let item in this.resizes) {
        let size = this.resizes[item];
        if (key.startsWith(item)) {
            this.resizeBitmap(key, size[0], size[1]);
        }
    }
};
ImageFactory.prepareTileMode = function (key, xt, yt) {
    this.tiles[key] = new Array();
    xt !== undefined && this.tiles[key].push(xt);
    yt !== undefined && this.tiles[key].push(yt);
};
ImageFactory.checkAndRetile = function (key) {
    for (let item in this.tiles) {
        let tile = this.tiles[item];
        if (key.startsWith(item)) {
            let drawable = this.getDrawable(key);
            tile.length >= 1 && drawable.setTileModeX(tile[0]);
            tile.length >= 2 && drawable.setTileModeY(tile[1]);
            this.drawables[key] = drawable;
        }
    }
};
const AssetFactory = new Object();
AssetFactory.loaded = new Object();
AssetFactory.loadAsset = function (key, path) {
    return (this.loaded[key] = new java.io.File(Dirs.ASSET, path));
};
AssetFactory.createFont = function (key) {
    let loaded = this.getFile(key + "Font"), exists = loaded && loaded.exists();
    return exists ? android.graphics.Typeface.createFromFile(loaded) : android.graphics.Typeface.MONOSPACE;
};
AssetFactory.getFile = function (key) {
    return this.loaded[key] || null;
};

