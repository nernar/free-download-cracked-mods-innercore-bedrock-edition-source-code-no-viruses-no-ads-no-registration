const Archives = {};
Archives.getFile = function (zip) {
    return new java.util.zip.ZipFile(zip);
};
Archives.getEntry = function (zip, name) {
    return this.getFile(zip).getEntry(name);
};
Archives.contains = function (zip, name) {
    return Archives.getEntry(zip, name) != null;
};
Archives.unpack = function (file, path) {
    var zip = this.getFile(file), elements = zip.entries();
    Files.createDir(path);
    while (elements.hasMoreElements()) {
        var element = elements.nextElement(), source = zip.getInputStream(element), result = new java.io.File(path, element.getName()), bis = new java.io.BufferedInputStream(source);
        if (element.isDirectory()) {
            result.mkdir();
        } else {
            result.getParentFile().mkdir();
            var bos = new java.io.BufferedOutputStream(new java.io.FileOutputStream(result)), buf = java.lang.reflect.Array.newInstance(java.lang.Byte.TYPE, 4096);
            while ((line = bis.read(buf)) >= 0) {
                bos.write(buf, 0, line);
            }
            bis.close();
            bos.close();
        }
    }
    zip.close();
};

