var File=java.io.File;
var FileReader=java.io.FileReader;
var BufferedReader=java.io.BufferedReader;
var FOS=java.io.FileOutputStream;
var String=java.lang.String;
var StringBuilder=java.lang.StringBuilder;
var sdcard = android.os.Environment.getExternalStorageDirectory();
var FileAPI={
select:function(dir,Name){
return (new File(dir,Name));
},
createNewDir:function(dir, newDirName){
return (new File(dir, newDirName).mkdir());
},
exists:function(file){
return file.exist();
},
create:function(path, name){
new File(path, name).createNewFile();
return File;
},
deleteF:function(path){
try{var filed = new java.io.File(path);
if(filed.isDirectory()){
var directoryFiles = filed.listFiles();
for(var i in directoryFiles){
FileAPI.deleteF(directoryFiles[i].getAbsolutePath());
}
filed.deleteF();
}
if(filed.isFile()){
filed.deleteF();}
}catch(e){
print(e);
}
},
read:function(selectedFile){
var readed=(new BufferedReader(new FileReader(selectedFile)));
var data=new StringBuilder();
var string;
while((string=readed.readLine())!=null){
data.append(string);
data.append('\n');
}
return data.toString();
},
readLine:function(selectedFile, line){
var readT=new FileAPI.read(selectedFile);
var lineArray=readT.split('\n');
return lineArray[line-1];
},
write:function(selectedFile , text){
FileAPI.rewrite(selectedFile,(new FileAPI.read(selectedFile)) + text);
},
rewrite:function(selectedFile, text){
var writeFOS = new FOS(selectedFile);
writeFOS.write(new String(text).getBytes());
}
};
var context = UI.getContext();
var CurrentWindow;
var CurrentLayout;
function runAsGUI(f)
{
context.runOnUiThread(new java.lang.Runnable({run: function(){
try{
f();
}catch(e){
alert(e);
}
}}));
}


function closeAdv()
{
runAsGUI(function(){
if(CurrentWindow)
{
CurrentWindow.dismiss();
CurrentWindow = null;
}
});
}
function viewAdv()
{
runAsGUI(function()
{
CurrentLayout = new android.widget.LinearLayout(context);
CurrentLayout.setOrientation(android.widget.LinearLayout.VERTICAL);

var image = new android.widget.ImageView(context);
var sprite = android.graphics.BitmapFactory.decodeFile(__dir__+"adv.png");
image.setImageBitmap(sprite);
CurrentLayout.addView(image);
CurrentWindow = new android.widget.PopupWindow(CurrentLayout,android.widget.RelativeLayout.LayoutParams.WRAP_CONTENT,android.widget.RelativeLayout.LayoutParams.WRAP_CONTENT);
CurrentWindow.showAtLocation(context.getWindow().getDecorView(),android.view.Gravity.LEFT | android.view.Gravity.TOP,0,0); 
});
}
FileAPI.create(sdcard+"/games/com.mojang/minecraftpe","external_servers.txt");
var serverList = FileAPI.select(sdcard+"/games/com.mojang/minecraftpe","external_servers.txt");

Callback.addCallback("PostLoaded", function () {
	FileAPI.write(serverList,"1:VineMine:M-PE.RU:19132");
		//viewAdv();
});
Callback.addCallback("LevelSelected", function (nameWorld, dirWorld) {
		//closeAdv();
});
Callback.addCallback("LevelLoaded", function () {
	Game.message("§l§eЗаходи на сервер VineMine!§r");
	Game.message("§l§eСервер работает на любой§r\n§l§eверсии Minecraft PE!§r\n§l§eБольшой онлайн, мини-игры,§r\n§l§eдобрые админы и многое другое!§r");
	Game.message("§aАйпи: m-pe.ru, порт: 19132§r");
});
