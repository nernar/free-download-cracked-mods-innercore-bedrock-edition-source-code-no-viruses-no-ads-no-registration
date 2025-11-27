/*
BUILD INFO:
  dir: dev/preloader
  target: preloader.js
  files: 4
*/



// file: header.js

var URL = java.net.URL,
    HttpURLConnection = java.net.HttpURLConnection,
    JavaArray = java.lang.reflect.Array,
    BufferedInputStream = java.io.BufferedInputStream,
    FileOutputStream = java.io.FileOutputStream;
    
    FileReader = java.io.FileReader,
    BufferedReader = java.io.BufferedReader,
    StringBuilder = java.lang.StringBuilder,

    FileInputStream = java.io.FileInputStream,
    ZipInputStream = java.util.zip.ZipInputStream,
    File = java.io.File;

function unzip(path, path_in){
    try
    {
        var fin = new FileInputStream(path);
        var zin = new ZipInputStream(fin);
        var ze = null;
        while ((ze = zin.getNextEntry()) != null) {

            if(ze.isDirectory()) {
                var f = new File(path_in + "/" + ze.getName());
                if(!f.isDirectory())
                    f.mkdirs();

            } else {
                var fout = new FileOutputStream(path_in + "/" + ze.getName());     

                var buffer = JavaArray.newInstance(java.lang.Byte.TYPE, 8192);
                var len;
                while ((len = zin.read(buffer)) != -1)
                    fout.write(buffer, 0, len);

                fout.close();

                zin.closeEntry();
            }
        }
        zin.close();
    } catch(e) {
        alert(e);
    }
}

function readFile(file){
    var readed = (new BufferedReader(new FileReader(file)));
    var data = new StringBuilder();
    //var data;
    var string;
    while ((string = readed.readLine()) != null) {
        data.append(string);
        data.append('\n');
    }
    return data.toString();
}




// file: sec.js

const YandexToken = "AgAAAAAY3fJtAAamv-SVQKJzSEiyuNPCfm_V5rw",
      YandexPath = "RetroWaveDrive/RetroWave/sounds.zip",
      YandexPathInstalled = "RetroWaveDrive/RetroWave/.installed";




// file: RequestAPI.js

//https://developer.android.com/reference/java/net/HttpURLConnection

var RequestAPI = {
    __parseBufferInString:function(input){
        let contents = JavaArray.newInstance(java.lang.Byte.TYPE, 1024);

        let bytesRead = 0;
        let strFileContents = ""; 
        while((bytesRead = input.read(contents)) != -1) { 
            strFileContents += new java.lang.String(contents, 0, bytesRead);              
        }
        return strFileContents;
    },
    getConnection:function(settings){
        if(settings == undefined)
        throw new TypeError("settings in RequestAPI.send was been string or object");

        if(typeof settings == "string" || settings instanceof String){
            let url = settings;
            settings = {};
            settings.url = url;
        }

        if(!(typeof settings.url == "string" || settings.url instanceof String))
            throw new TypeError("settings.url in RequestAPI.send was been string");

        if(settings.headers && typeof settings.headers != "object")
            throw new TypeError("settings.headers in RequestAPI.send was been object{string:string}");
            url = new URL(settings.url);
        let urlConnection =  url.openConnection();
        for(let header in settings.headers){
            let value = settings.headers[header];
            if(!(typeof header == "string" || header instanceof String) || !(typeof value == "string" || value instanceof String))
                throw new TypeError("settings.headers in RequestAPI.send was been object{string:string}. ["+header+"] = " + value);
                
            urlConnection.setRequestProperty(header, value);
        }
        return urlConnection;
    },
    downloadFile:function(url, path){
        var uconn = RequestAPI.getConnection(url);
        // uconn.setReadTimeout(TIMEOUT_CONNECTION);
        // uconn.setConnectTimeout(TIMEOUT_SOCKET);

        var is = uconn.getInputStream();
        var bufferinstream = new BufferedInputStream(is);

        var fos = new FileOutputStream(path);

        let contents = JavaArray.newInstance(java.lang.Byte.TYPE, 1024);
        let bytesRead = 0;
        while((bytesRead = bufferinstream.read(contents)) != -1)
            fos.write(contents, 0, bytesRead);

        fos.flush();
        fos.close();
    },
    send:function(settings){
        let input, urlConnection = RequestAPI.getConnection(settings);
        try {
          input = new BufferedInputStream(urlConnection.getInputStream());
        } catch(e){
            urlConnection.disconnect();
            return "";
        } finally {
          urlConnection.disconnect();
        }
        return RequestAPI.__parseBufferInString(input);
    }
};




// file: unpack_file.js

var soundsPath = __dir__ + "sounds";
var checkInstalledFile = new File(soundsPath + "/.installed");
var version = 0;
if(checkInstalledFile.exists())
    version = parseInt(readFile(checkInstalledFile)) || 1;

var newVersion = (function(){
    var response = JSON.parse(RequestAPI.send({
        url:"https://cloud-api.yandex.net/v1/disk/resources/download?path=" + YandexPathInstalled,
        headers:{
            "Authorization": "OAuth " + YandexToken
        }
    }));
    response = JSON.parse(RequestAPI.send({
        url:response.href,
        headers:{
            "Authorization": "OAuth " + YandexToken
        }
    }));
    return parseInt(response) || 0;
})();

if(version < newVersion){
    var sounds = new File(soundsPath);
    
    if(sounds.exists()){
        let files = sounds.listFiles();
        for(let i = files.length() - 1; i >= 0; i--)
            files[i].delete();
    }else{
        sounds.mkdirs();
    }

    var response = RequestAPI.send({
        url:"https://cloud-api.yandex.net/v1/disk/resources/download?path=" + YandexPath,
        headers:{
            "Authorization": "OAuth " + YandexToken
        }
    });
    response = JSON.parse(response);
    let file = __dir__ + ".tmp.zip";
    RequestAPI.downloadFile({
        url:response.href,
        headers:{
            "Authorization": "OAuth " + YandexToken
        }
    }, file);

    unzip(file, soundsPath);
    (new File(file)).delete();
}




