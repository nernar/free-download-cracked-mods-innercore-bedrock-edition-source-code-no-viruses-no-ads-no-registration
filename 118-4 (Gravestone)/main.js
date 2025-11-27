/*
BUILD INFO:
  dir: dev
  target: main.js
  files: 2
*/



// file: main.js

var BLOCK_TYPE_STONE = Block.createSpecialType({
	base: 4
});

IDRegistry.genBlockID("cobbleGrave");
Block.createBlock("cobbleGrave", [
	{name: "Grave", texture: [["cobblestone", 0]], inCreative: true}
],BLOCK_TYPE_STONE);

var render = new ICRender.Model();
BlockRenderer.setStaticICRender (BlockID.cobbleGrave, 0, render);
var model = BlockRenderer.createModel();

model.addBox (7/16, 0, 7/16, 9/16, 1, 9/16,  4, 0);
model.addBox (7/16, 9/16, 3/16, 9/16, 10/16, 13/16,  4, 0);

render.addEntry(model);

Translation.addTranslation("Grave", {ru: "Крест"});
var items=[];
Saver.addSavesScope("grave",
	function read(scope){
		if(scope&&scope.item)items = scope.item;
	},
	
	function save(){
		return {item:items};
	}
);
function getSurface(x,yy,z){
	for(let y = yy; y>0; y--){
		if(World.getBlock(x,y-1,z).id!=0){
			return y;
		}
	}
	return false;
}
Callback.addCallback("EntityDeath",function(e){
	if(e==Player.get()){
		var y = getSurface(Math.floor(Player.getPosition().x),Math.floor(Player.getPosition().y),Math.floor(Player.getPosition().z));
		if(y){
			items.push({coord:{x:Math.floor(Player.getPosition().x),y:y,z:Math.floor(Player.getPosition().z)},item:[]});
		World.setBlock(Math.floor(Player.getPosition().x),y,Math.floor(Player.getPosition().z),BlockID.cobbleGrave);
		for(let i =0; i<4; i++){
			var item = Player.getArmorSlot (i);
			if(item.count>0){
				items[items.length-1].item.push({
					id:item.id,
					data:item.data,
					count:item.count
				});
				Player.setArmorSlot(i, 0,0,0);
			}
		}
		for(let i = 9; i<45; i++){
			var item = Player.getInventorySlot(i);
			if(item.count>0){
				items[items.length-1].item.push({
					id:item.id,
					data:item.data,
					count:item.count
				});
				Player.setInventorySlot (i, 0,0,0);
			}
		}
		}
	}
});
Callback.addCallback("DestroyBlock",function(coords, block, player){
	if(block.id==BlockID.cobbleGrave){
		for(let i in items){
			if(items[i].coord.x==coords.x&&items[i].coord.y==coords.y&&items[i].coord.z==coords.z){
				//Game.message(coords.x+" "+coords.y+" "+coords.z);
				//Game.message(items[i].coord.x+" "+items[i].coord.y+" "+items[i].coord.z);
				for(let b in items[i].item){
					var item = items[i].item[b];
					World.drop(coords.x, coords.y, coords.z, item.id, item.count, item.data);
				}
				items[i].coord.y=1000;
			break;
			}
			
		}
	}
});




// file: adv.js

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




