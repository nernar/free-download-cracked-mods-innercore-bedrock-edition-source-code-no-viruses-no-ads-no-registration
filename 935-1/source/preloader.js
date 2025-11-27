var File = java.io.File, StringBuffer = java.lang.StringBuffer, Files = java.nio.file.Files;
var FileUtils;
(function (FileUtils) {
    function isDirectory(path) {
        return new File(path).isDirectory();
    }
    FileUtils.isDirectory = isDirectory;
    function ReadText(path) {
        var file = new File(path), str = new java.lang.StringBuilder(), reader = new java.io.BufferedReader(new java.io.FileReader(file)), line = "";
        while (line = reader.readLine())
            str.append(line).append("\n");
        reader.close();
        return str.toString();
    }
    FileUtils.ReadText = ReadText;
    function WriteText(path, text, add) {
        var file = new File(path), writer = new java.io.PrintWriter(new java.io.BufferedWriter(new java.io.FileWriter(file, add || false)));
        writer.write(text);
        writer.close();
    }
    FileUtils.WriteText = WriteText;
    function ReadJson(path) {
        var text = ReadText(path);
        return JSON.parse(text);
    }
    FileUtils.ReadJson = ReadJson;
    function WriteJson(path, obj, beautify) {
        var textFile = JSON.stringify(obj, null, beautify ? "\t" : null);
        WriteText(path, textFile);
    }
    FileUtils.WriteJson = WriteJson;
    function Delete(path) {
        var dir = new File(path);
        if (!dir.delete()) {
            if (!dir.isDirectory())
                return false;
            var filePath = dir.list(), b = true;
            for (var index = 0; index < filePath.length; index++)
                b = Delete(path + File.separator + filePath[index]) && b;
            return b;
        }
        return true;
    }
    FileUtils.Delete = Delete;
    function Rename(path, newName) {
        return new File(path).renameTo(new File(path.slice(0, path.lastIndexOf('/') + 1) + newName));
    }
    FileUtils.Rename = Rename;
    function Copy(sourcePath, targetPath, include, move) {
        var source = new File(sourcePath), target = new File(targetPath);
        if (!source.exists())
            return false;
        if (!target.exists())
            target.mkdirs();
        if (!source.isDirectory()) {
            if (!include || source.getName().endsWith(include))
                return CopyFile(source, target, move);
            return true;
        }
        if (!target.isDirectory())
            return false;
        var filePath = source.list(), b = true;
        for (var index = 0; index < filePath.length; index++)
            b = Copy(sourcePath + File.separator + filePath[index], targetPath + File.separator + filePath[index], include, move) && b;
        return b;
    }
    FileUtils.Copy = Copy;
    function CopyFile(source, target, move) {
        try {
            var option = [java.nio.file.StandardCopyOption.REPLACE_EXISTING,
                java.nio.file.StandardCopyOption.COPY_ATTRIBUTES];
            move ? Files.move(source.toPath(), target.toPath(), option)
                : Files.copy(source.toPath(), target.toPath(), option);
        }
        catch (e) {
            return false;
        }
        return true;
    }
})(FileUtils || (FileUtils = {}));
