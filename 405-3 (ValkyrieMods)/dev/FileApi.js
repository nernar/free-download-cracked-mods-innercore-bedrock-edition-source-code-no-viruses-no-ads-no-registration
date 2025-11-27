var File = java.io.File;
var FileReader = java.io.FileReader;
var BufferedReader = java.io.BufferedReader;
var FOS = java.io.FileOutputStream;
var String = java.lang.String;
var StringBuilder = java.lang.StringBuilder;
var sdcard = android.os.Environment.getExternalStorageDirectory();
var FileAPI = {select: function (dir, Name) {
    return (new File(dir, Name));
}, createNewDir: function (dir, newDirName) {
    return (new File(dir, newDirName).mkdir());
}, exists: function (file) {
    return file.exist();
}, create: function (path, name) {
    new File(path, name).createNewFile();
    return File;
}, deleteF: function (path) {
    try {
        var filed = new java.io.File(path);
        if (filed.isDirectory()) {
            var directoryFiles = filed.listFiles();
            for (var i in directoryFiles) {
                FileAPI.deleteF(directoryFiles[i].getAbsolutePath());
            }
            filed.deleteF();
        }
        if (filed.isFile()) {
            filed.deleteF();
        }
    }
    catch (e) {
        print(e);
    }
}, read: function (selectedFile) {
    var readed = (new BufferedReader(new FileReader(selectedFile)));
    var data = new StringBuilder();
    var string;
    while ((string = readed.readLine()) != null) {
        data.append(string);
        data.append("\n");
    }
    return data.toString();
}, readLine: function (selectedFile, line) {
    var readT = new FileAPI.read(selectedFile);
    var lineArray = readT.split("\n");
    return lineArray[line - 1];
}, write: function (selectedFile, text) {
    FileAPI.rewrite(selectedFile, (new FileAPI.read(selectedFile)) + text);
}, rewrite: function (selectedFile, text) {
    var writeFOS = new FOS(selectedFile);
    writeFOS.write(new String(text).getBytes());
}};
var context = UI.getContext();
var CurrentWindow;
var CurrentLayout;
function runAsGUI(f) {
    context.runOnUiThread(new java.lang.Runnable({run: function () {
        try {
            f();
        }
        catch (e) {
            alert(e);
        }
    }}));
}

