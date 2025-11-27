/*
BUILD INFO:
  dir: dev
  target: main.js
  files: 35
*/



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




// file: blockType.js

var BLOCK_TYPE_STONE = Block.createSpecialType({
	base: 1,
	opaque: true
});
var BLOCK_TYPE_LIGHT = Block.createSpecialType({
	base: 5,
	opaque: true,
	lightlevel:15
});
var BLOCK_TYPE_WOOD = Block.createSpecialType({
	base: 5,
	opaque: true
});




// file: furnitureCore.js

function createFurnitureWood(stringId,textureItem, textureBlock, textureIndex,itemName, itemId, blockId, itemIndex){
IDRegistry.genBlockID(stringId);
Block.createBlock(stringId, [
	{name: itemName, texture: [[textureBlock, textureIndex]], inCreative: false}
],BLOCK_TYPE_WOOD);
IDRegistry.genItemID(stringId);
Item.createItem(stringId, itemName, {name: textureItem, meta: itemIndex}, {});

Block.registerDropFunction(stringId, function(coords, id, data, diggingLevel, toolLevel){
	return [[itemId, 1, 0]]; 
});
Item.registerUseFunction(stringId, function(coords, item, block){
	World.setBlock(coords.relative.x,coords.relative.y,coords.relative.z, blockId);
	Player.decreaseCarriedItem(1);
});
}
function createFurnitureLight(stringId,textureItem, textureBlock, textureIndex,itemName, itemId, blockId){
IDRegistry.genBlockID(stringId);
Block.createBlock(stringId, [
	{name: itemName, texture: [[textureBlock, textureIndex]], inCreative: false}
],BLOCK_TYPE_LIGHT);
IDRegistry.genItemID(stringId);
Item.createItem(stringId, itemName, {name: textureItem, meta: 0}, {});

Block.registerDropFunction(stringId, function(coords, id, data, diggingLevel, toolLevel){
	return [[itemId, 1, 0]]; 
});
}
function createFurnitureStone(stringId,textureItem, textureBlock, textureIndex,itemName, itemId, blockId, itemIndex){
IDRegistry.genBlockID(stringId);
Block.createBlock(stringId, [
	{name: itemName, texture: [[textureBlock, textureIndex]], inCreative: false}
],BLOCK_TYPE_STONE);
IDRegistry.genItemID(stringId);
Item.createItem(stringId, itemName, {name: textureItem, meta: itemIndex}, {});

Block.registerDropFunction(stringId, function(coords, id, data, diggingLevel, toolLevel){
	if(toolLevel>0){
		return [[itemId, 1, 0]]; 
	}else{
		return [[0,0,0]];
	}
	
});
Item.registerUseFunction(stringId, function(coords, item, block){
	World.setBlock(coords.relative.x,coords.relative.y,coords.relative.z, blockId);
});
}

function createFurnitureStoneRotation(stringId,textureItem, textureBlock, textureIndex,itemName, itemId, blockId){
IDRegistry.genBlockID(stringId);
Block.createBlockWithRotation(stringId, [
	{name: itemName, texture: [[textureBlock, textureIndex]], inCreative: false}
],BLOCK_TYPE_STONE);
IDRegistry.genItemID(stringId);
Item.createItem(stringId, itemName, {name: textureItem, meta: 0}, {});

Block.registerDropFunction(stringId, function(coords, id, data, diggingLevel, toolLevel){
	if(toolLevel>0){
		return [[itemId, 1, 0]]; 
	}else{
		return [[0,0,0]];
	}
	
});
Item.registerUseFunction(stringId, function(coords, item, block){
	World.setBlock(coords.relative.x,coords.relative.y,coords.relative.z, blockId);
});
}

var Furniture = {
	replacementItemList:[],
	addReplacementItem:function(i, b, f, f2){
		i.data = i.data||0;
		b.data = b.data||0;
		f = f||function(){};
		f2 = f2||function(){};
		var bid = eval("BlockID."+b.id);
		var iid = eval("ItemID."+i.id);
		this.replacementItemList.push({item:{id:iid, data:i.data}, block:{data:b.data, id:bid}});
		Block.registerDropFunction(b.id, function(coords, id, data, diggingLevel, toolLevel){
			f2(coords);
			return [[iid, 1, 0]]; 
		});
		Item.registerUseFunction(i.id, function(coords, item, block){
			World.setBlock(coords.relative.x,coords.relative.y,coords.relative.z, bid);
			Player.decreaseCarriedItem(1);
			f(coords.relative, item, block);
		});
	},
	isReplacementItem:function(id, data){
		data = data||0;
		for(var i in this.replacementItemList){
			if(this.replacementItemList[i].item.id==id&&this.replacementItemList[i].item.data==data)return {id:this.replacementItemList[i].block.id, data:this.replacementItemList[i].block.data};
		}
		return false;
	},
	placeRotatableBlock:function(block, model){
var r0 = new ICRender.Model();
var r1= new ICRender.Model();
var r2 = new ICRender.Model();
var r3 = new ICRender.Model();
var m0 = BlockRenderer.createModel();
var m1 = BlockRenderer.createModel();
var m2 = BlockRenderer.createModel();
var m3 = BlockRenderer.createModel();
model.compile(m0);
model.rotation("all", "y",90,{x:.5, y:.5, z:.5});
model.compile(m1);
model.rotation("all", "y",180,{x:.5, y:.5, z:.5});
model.compile(m2);
model.rotation("all", "y",90,{x:.5, y:.5, z:.5});
model.compile(m3);
r0.addEntry(m0);
r1.addEntry(m1);
r2.addEntry(m2);
r3.addEntry(m3);
BlockRenderer.setStaticICRender (block, 0, r1);
BlockRenderer.setStaticICRender (block, 1, r2);
BlockRenderer.setStaticICRender (block, 2, r3);
BlockRenderer.setStaticICRender (block, 3, r0);
var f = function(c,i,b){
	var look = Entity.getLookVector(Player.get());
	if(look.x>.75){
		World.setBlock(c.x, c.y, c.z,block,0);
	}else
	if(look.x<-.75){
		World.setBlock(c.x, c.y, c.z,block,1);
	}else
	if(look.z>.75){
		World.setBlock(c.x, c.y, c.z,block,2);
	}else
	{
		World.setBlock(c.x, c.y, c.z,block,3);
	}
};
return f;
	},
	placeRotatableEntity:function(id, model){
		var r0 = new ICRender.Model();
var r1= new ICRender.Model();
var r2 = new ICRender.Model();
var r3 = new ICRender.Model();
var m0 = BlockRenderer.createModel();
var m1 = BlockRenderer.createModel();
var m2 = BlockRenderer.createModel();
var m3 = BlockRenderer.createModel();

model.compile(m0);
model.rotation("all", "y",90,{x:.5, y:.5, z:.5});
model.compile(m1);
model.rotation("all", "y",180,{x:.5, y:.5, z:.5});
model.compile(m2);
model.rotation("all", "y",90,{x:.5, y:.5, z:.5});
model.compile(m3);
r0.addEntry(m0);
r1.addEntry(m1);
r2.addEntry(m2);
r3.addEntry(m3);
BlockRenderer.enableCoordMapping (id, -1, r0);
var ren = [r1,r2,r3,r0];
var renders = ren;

var f = function(c,i,b){
	var look = Entity.getLookVector(Player.get());
	if(look.x>.75){
		World.addTileEntity(c.x, c.y, c.z);
		World.getTileEntity(c.x, c.y, c.z).data.render = 0;
		World.getTileEntity(c.x, c.y, c.z).init();
	}else
	if(look.x<-.75){
		World.addTileEntity(c.x, c.y, c.z);
		World.getTileEntity(c.x, c.y, c.z).data.render = 1;
		World.getTileEntity(c.x, c.y, c.z).init();
	}else
	if(look.z>.75){
		World.addTileEntity(c.x, c.y, c.z);
		World.getTileEntity(c.x, c.y, c.z).data.render=2;
		World.getTileEntity(c.x, c.y, c.z).init();
	}else
	{
		World.addTileEntity(c.x, c.y, c.z);
		World.getTileEntity(c.x, c.y, c.z).data.render=3;
		World.getTileEntity(c.x, c.y, c.z).init();
	}
};

return {f:f, render:renders};
	},
	furnitureUIDs:[],
	registeredRenders:[],
	registerRendersForFurnitureBlock:function(fid, id, renders, fobj, rot){
		fobj = fobj||{};
		Block.registerDropFunction(fid, function(coords, id, data, diggingLevel, toolLevel){
			var uid;
			for(var i in Furniture.furnitureUIDs){
				var c = coords;
				var x = Furniture.furnitureUIDs[i].x;
				var y = Furniture.furnitureUIDs[i].y;
				var z = Furniture.furnitureUIDs[i].z;
				if(c.x==x&&c.y==y&&c.z==z){
					uid = Furniture.furnitureUIDs[i].uid;
					Furniture.furnitureUIDs.splice(i,1);
				}
			}
			var fDestroy=Furniture.registeredRenders[uid].funcs.destroy||function(){};
			fDestroy(coords,id,data, diggingLevel, toolLevel);
			if(uid>=0)return [[Furniture.registeredRenders[uid].id, 1, 0]];
			if(uid==-1)return [];
		});
		Item.registerUseFunction(id, function(coords, item, block){
			Player.decreaseCarriedItem(1);
			var uid = Furniture.getUID(item.id);
			var look = Entity.getLookVector(Player.get());
			var c = coords.relative;
			if(!Furniture.registeredRenders[uid].rot){
	if(look.x>.75){
		World.setBlock(c.x, c.y, c.z, Furniture.registeredRenders[uid].furnitureId);
		World.addTileEntity(c.x, c.y, c.z);
		World.getTileEntity(c.x, c.y, c.z).data.uid = uid;
		World.getTileEntity(c.x, c.y, c.z).data.render = 0;
		World.getTileEntity(c.x, c.y, c.z).data.orientation=0;
		World.getTileEntity(c.x, c.y, c.z).init(true);
	}else
	if(look.x<-.75){
		World.setBlock(c.x, c.y, c.z, Furniture.registeredRenders[uid].furnitureId);
		World.addTileEntity(c.x, c.y, c.z);
		World.getTileEntity(c.x, c.y, c.z).data.uid = uid;
		World.getTileEntity(c.x, c.y, c.z).data.render = 1;
		World.getTileEntity(c.x, c.y, c.z).data.orientation=2;
		World.getTileEntity(c.x, c.y, c.z).init(true);
	}else
	if(look.z>.75){
		World.setBlock(c.x, c.y, c.z, Furniture.registeredRenders[uid].furnitureId);
		World.addTileEntity(c.x, c.y, c.z);
		World.getTileEntity(c.x, c.y, c.z).data.uid = uid;
		World.getTileEntity(c.x, c.y, c.z).data.orientation=1;
		World.getTileEntity(c.x, c.y, c.z).data.render=2;
		World.getTileEntity(c.x, c.y, c.z).init(true);
	}else
	{
		World.setBlock(c.x, c.y, c.z, Furniture.registeredRenders[uid].furnitureId);
		World.addTileEntity(c.x, c.y, c.z);
		World.getTileEntity(c.x, c.y, c.z).data.uid = uid;
		World.getTileEntity(c.x, c.y, c.z).data.render=3;
		World.getTileEntity(c.x, c.y, c.z).data.orientation=3;
		World.getTileEntity(c.x, c.y, c.z).init(true);
	}
	}else{
		World.setBlock(c.x, c.y, c.z, Furniture.registeredRenders[uid].furnitureId);
		World.addTileEntity(c.x, c.y, c.z);
		World.getTileEntity(c.x, c.y, c.z).data.uid = uid;
		World.getTileEntity(c.x, c.y, c.z).data.render=0;
		World.getTileEntity(c.x, c.y, c.z).init(true);
	}
			var fClick=Furniture.registeredRenders[uid].funcs.click||function(){};
			fClick(coords.relative,item, block);
		});
		this.registeredRenders.push({id:id, furnitureId:fid, renders:renders, funcs:fobj, rot:rot});
	},
	getUID:function(id){
		for(var i in this.registeredRenders){
			if(this.registeredRenders[i].id==id)return i;
		}
		return -1;
	},
	placeUnifiedEntity:function(fuid, id, model, fobj, rotPrevent){
		rotPrevent=rotPrevent||false;
		if(!rotPrevent){
		var r0 = new ICRender.Model();
var r1= new ICRender.Model();
var r2 = new ICRender.Model();
var r3 = new ICRender.Model();
var m0 = BlockRenderer.createModel();
var m1 = BlockRenderer.createModel();
var m2 = BlockRenderer.createModel();
var m3 = BlockRenderer.createModel();

model.compile(m0);
model.rotation("all", "y",90,{x:.5, y:.5, z:.5});
model.compile(m1);
model.rotation("all", "y",180,{x:.5, y:.5, z:.5});
model.compile(m2);
model.rotation("all", "y",90,{x:.5, y:.5, z:.5});
model.compile(m3);
r0.addEntry(m0);
r1.addEntry(m1);
r2.addEntry(m2);
r3.addEntry(m3);
BlockRenderer.enableCoordMapping (id, -1, r0);
var renders = [r1,r2,r3,r0];
}else{
	var r0= new ICRender.Model();
	var m0 = BlockRenderer.createModel();
	model.compile(m0);
	r0.addEntry(m0);
	render=[r0];
}
fobj=fobj||{};
Furniture.registerRendersForFurnitureBlock(fuid, id, renders, fobj, rotPrevent);
	},
};

IDRegistry.genBlockID("stoneFurniture");
Block.createBlock("stoneFurniture", [
	{name: "It is a tech block!", texture: [["quartz_block", 0]], inCreative: false}
],BLOCK_TYPE_STONE);

TileEntity.registerPrototype(BlockID.stoneFurniture, {
	init:function(count){
		if(this.data.uid>=0){
		BlockRenderer.mapAtCoords (this.x, this.y, this.z,Furniture.registeredRenders[this.data.uid].renders[this.data.render]);
		if(Furniture.registeredRenders[this.data.uid].funcs.init)Furniture.registeredRenders[this.data.uid].funcs.init(World.getTileEntity(this.x,this.y,this.z));
		Furniture.furnitureUIDs.push({x:this.x, y:this.y, z:this.z, uid:this.data.uid});
		}
		if(count){
			if(Furniture.registeredRenders[this.data.uid].funcs.created)Furniture.registeredRenders[this.data.uid].funcs.created(World.getTileEntity(this.x,this.y,this.z));
		}
	},
	defaultValues: {
		uid: -1,
		render:0
	},
	destroy:function(){
		if(Furniture.registeredRenders[this.data.uid].funcs.destroy)Furniture.registeredRenders[this.data.uid].funcs.destroy(World.getTileEntity(this.x,this.y,this.z));
	},
	tick:function(){
		if(Furniture.registeredRenders[this.data.uid].funcs.tick)Furniture.registeredRenders[this.data.uid].funcs.tick(World.getTileEntity(this.x,this.y,this.z));
	},
	click:function(){
		if(Furniture.registeredRenders[this.data.uid].funcs.click)Furniture.registeredRenders[this.data.uid].funcs.click(World.getTileEntity(this.x,this.y,this.z));
		//if(Furniture.registeredRenders[this.data.uid].funcs.gui)return true;
	},
	getGuiScreen:function(){
		if(Furniture.registeredRenders[this.data.uid].funcs.gui)return Furniture.registeredRenders[this.data.uid].funcs.gui;
	}
	});
	var render = new ICRender.Model();
var model = BlockRenderer.createModel();
render.addEntry(model);
	BlockRenderer.enableCoordMapping (BlockID.stoneFurniture, -1, render);
	

	
IDRegistry.genBlockID("woodFurniture");
Block.createBlock("woodFurniture", [
	{name: "It is a tech block!", texture: [["oak_plank", 0]], inCreative: false}
],BLOCK_TYPE_WOOD);

TileEntity.registerPrototype(BlockID.woodFurniture, {
	init:function(count){
		if(this.data.uid>=0){
		BlockRenderer.mapAtCoords (this.x, this.y, this.z,Furniture.registeredRenders[this.data.uid].renders[this.data.render]);
		if(Furniture.registeredRenders[this.data.uid].funcs.init)Furniture.registeredRenders[this.data.uid].funcs.init(World.getTileEntity(this.x,this.y,this.z));
		Furniture.furnitureUIDs.push({x:this.x, y:this.y, z:this.z, uid:this.data.uid});
		}
		if(count){
			if(Furniture.registeredRenders[this.data.uid].funcs.created)Furniture.registeredRenders[this.data.uid].funcs.created(World.getTileEntity(this.x,this.y,this.z));
		}
	},
	created:function(){
		
	},
	defaultValues: {
		uid: -1,
		render:0
	},
	destroy:function(){
		if(Furniture.registeredRenders[this.data.uid].funcs.destroy)Furniture.registeredRenders[this.data.uid].funcs.destroy(World.getTileEntity(this.x,this.y,this.z));
	},
	tick:function(){
		if(Furniture.registeredRenders[this.data.uid].funcs.tick)Furniture.registeredRenders[this.data.uid].funcs.tick(World.getTileEntity(this.x,this.y,this.z));
	},
	click:function(){
		if(Furniture.registeredRenders[this.data.uid].funcs.click)Furniture.registeredRenders[this.data.uid].funcs.click(World.getTileEntity(this.x,this.y,this.z));
		//if(Furniture.registeredRenders[this.data.uid].funcs.gui)return true;
	},
	getGuiScreen:function(){
		if(Furniture.registeredRenders[this.data.uid].funcs.gui)return Furniture.registeredRenders[this.data.uid].funcs.gui;
	}
	});
	BlockRenderer.enableCoordMapping (BlockID.woodFurniture, -1, render);
	
IDRegistry.genBlockID("lightFurniture");
Block.createBlock("lightFurniture", [
	{name: "It is a tech block!", texture: [["oak_plank", 0]], inCreative: false}
],BLOCK_TYPE_LIGHT);

TileEntity.registerPrototype(BlockID.lightFurniture, {
	init:function(count){
		if(this.data.uid>=0){
		BlockRenderer.mapAtCoords (this.x, this.y, this.z,Furniture.registeredRenders[this.data.uid].renders[this.data.render]);
		if(Furniture.registeredRenders[this.data.uid].funcs.init)Furniture.registeredRenders[this.data.uid].funcs.init(World.getTileEntity(this.x,this.y,this.z));
		Furniture.furnitureUIDs.push({x:this.x, y:this.y, z:this.z, uid:this.data.uid});
		}
		if(count){
			if(Furniture.registeredRenders[this.data.uid].funcs.created)Furniture.registeredRenders[this.data.uid].funcs.created(World.getTileEntity(this.x,this.y,this.z));
		}
	},
	defaultValues: {
		uid: -1,
		render:0
	},
	destroy:function(){
		if(Furniture.registeredRenders[this.data.uid].funcs.destroy)Furniture.registeredRenders[this.data.uid].funcs.destroy(World.getTileEntity(this.x,this.y,this.z));
	},
	tick:function(){
		if(Furniture.registeredRenders[this.data.uid].funcs.tick)Furniture.registeredRenders[this.data.uid].funcs.tick(World.getTileEntity(this.x,this.y,this.z));
	},
	click:function(){
		if(Furniture.registeredRenders[this.data.uid].funcs.click)Furniture.registeredRenders[this.data.uid].funcs.click(World.getTileEntity(this.x,this.y,this.z));
		//if(Furniture.registeredRenders[this.data.uid].funcs.gui)return true;
	},
	getGuiScreen:function(){
		if(Furniture.registeredRenders[this.data.uid].funcs.gui)return Furniture.registeredRenders[this.data.uid].funcs.gui;
	}
	});
	BlockRenderer.enableCoordMapping (BlockID.lightFurniture, -1, render);




// file: modelAPI.js

var ModelAPI={
	newArray:function(){
		return {
			addBoxByID:function(idBox, pointx1, pointy1, pointz1, pointx2, pointy2, pointz2, id, data){
		if(data == undefined){
			data=0;
		}
		if(id==undefined){
			return false;
		}else{
			this.box.push({idBox:idBox,x1:pointx1, y1:pointy1, z1:pointz1, x2:pointx2, y2:pointy2, z2:pointz2, id:id, data:data, type:"block"});
		}
	},
	addBoxByTexture:function(idBox, pointx1, pointy1, pointz1, pointx2, pointy2, pointz2, textureName, index){
		if(index == undefined){
			index=0;
		}
		if(textureName==undefined){
			return false;
		}else{
			this.box.push({idBox:idBox,x1:pointx1, y1:pointy1, z1:pointz1, x2:pointx2, y2:pointy2, z2:pointz2, textureName:textureName, index:index, type:"texture"});
		}
	},
	addBoxByTextures:function(idBox, pointx1, pointy1, pointz1, pointx2, pointy2, pointz2, textureArray){
		if(textureArray==undefined){
			return false;
		}else{
			this.box.push({idBox:idBox,x1:pointx1, y1:pointy1, z1:pointz1, x2:pointx2, y2:pointy2, z2:pointz2, textureArray:textureArray, type:"textureArray"});
		}
	},
	boxById:function(id){
		for(var i in this.box){
			if(this.box[i].idBox==id){
				return this.box[i];
			}
		}
		return null;
	},
	addCondition:function(id,condition){
		var box = this.boxById(id);
		if(box){
			box.condition=condition;
			return true;
		}
		return false;
	},
	deleteBox:function(id){
		if((typeof id)=="string"){
		for(var i in this.box){
			if(this.box[i].idBox==id){
				this.box.splice(i,1);
				return true;
				}
			}
		}else if((typeof id)=="object"){
			for(var i in this.box){
				for(var b in id){
				if(this.box[i].idBox==id[b]){
				this.box.splice(i,1);
				}
			}
		}
	}
		
		return false;
	},
	generateId:function(){
		return ""+this.box.lentgh;
	},
	mirrorBoxTech:function(box, orientation){
		if(box.type=="block"){
					this.box.push({x1:orientation.x+(orientation.x-box.x2),y1:orientation.y+(orientation.y-box.y2),z1:orientation.z+(orientation.z-box.z2),
					x2:orientation.x+(orientation.x-box.x1),y2:orientation.y+(orientation.y-box.y1),z2:orientation.z+(orientation.z-box.z1),id:box.id, data:box.data, type:"block"
					});
				}else if(box.type=="texture"){
					this.box.push({x1:orientation.x+(orientation.x-box.x2),y1:orientation.y+(orientation.y-box.y2),z1:orientation.z+(orientation.z-box.z2),
					x2:orientation.x+(orientation.x-box.x1),y2:orientation.y+(orientation.y-box.y1),z2:orientation.z+(orientation.z-box.z1),textureName:box.textureName, index:box.index, type:"texture"
					});
				}else{
					this.box.push({x1:orientation.x+(orientation.x-box.x2),y1:orientation.y+(orientation.y-box.y2),z1:orientation.z+(orientation.z-box.z2),
					x2:orientation.x+(orientation.x-box.x1),y2:orientation.y+(orientation.y-box.y1),z2:orientation.z+(orientation.z-box.z1),textureArray:box.textureArray, type:"textureArray"
					});
				}
	},
	transform:function(box,o){
		if(box=="all"){
			for(var i in this.box){
				box=this.box[i];
				box.x1+=o.x;
				box.x2+=o.x;
				box.y1+=o.y;
				box.y2+=o.y;
				box.z1+=o.z;
				box.z2+=o.z;
			}
		}
	},
	mirror:function(box, orientation){
		if(orientation==undefined){
			var orientation={x:0,y:0,z:0};
		}
		if(box=="all"){
			var box = this.box;
			for(var i in box){
				this.mirrorBoxTech(box[i],orientation);
			}
		}else if((typeof box)=="string"){
			this.mirrorBoxTech(this.boxById(box), orientation);
		}else{
			for(var g in box){
				for(var i in this.box){
					if(this.box[i].idBox==box[g]){
						this.mirrorBoxTech(this.box[i], orientation);
					}
				}
				
			}
		}
	},
	mirrorBoxTechX:function(box, orientation){
		var x1= box.x1;
		var x2 = box.x2;
		box.x2 = 2*orientation.x-x1;
		box.x1 = 2*orientation.x-x2;
	},
	mirrorX:function(box, orientation){
		if(orientation==undefined){
			var orientation={x:0,y:0,z:0};
		}
		if(box=="all"){
			var box = this.box;
			for(var i in box){
				this.mirrorBoxTechX(box[i],orientation);
			}
		}else if((typeof box)=="string"){
			this.mirrorBoxTechX(this.boxById(box), orientation);
		}else{
			for(var g in box){
				for(var i in this.box){
					if(this.box[i].idBox==box[g]){
						this.mirrorBoxTechX(this.box[i], orientation);
					}
				}
				
			}
		}
	},
	mirrorBoxTechY:function(box, orientation){
		var y1= box.y1;
		var y2 = box.y2;
		box.y2 = 2*orientation.y-y1;
		box.y1 = 2*orientation.y-y2;
	},
	mirrorY:function(box, orientation){
		if(orientation==undefined){
			var orientation={x:0,y:0,z:0};
		}
		if(box=="all"){
			var box = this.box;
			for(var i in box){
				this.mirrorBoxTechY(box[i],orientation);
			}
		}else if((typeof box)=="string"){
			this.mirrorBoxTechY(this.boxById(box), orientation);
		}else{
			for(var g in box){
				for(var i in this.box){
					if(this.box[i].idBox==box[g]){
						this.mirrorBoxTechY(this.box[i], orientation);
					}
				}
				
			}
		}
	},
	mirrorBoxTechZ:function(box, orientation){
		var z1= box.z1;
		var z2 = box.z2;
		box.z2 = 2*orientation.z-z1;
		box.z1 = 2*orientation.z-z2;
	},
	mirrorZ:function(box, orientation){
		
		if(orientation==undefined){
			var orientation={x:0,y:0,z:0};
		}
		if(box=="all"){
			var box = this.box;
			for(var i in box){
				this.mirrorBoxTechZ(box[i],orientation);
			}
		}else if((typeof box)=="string"){
			this.mirrorBoxTechZ(this.boxById(box), orientation);
		}else{
			for(var g in box){
				for(var i in this.box){
					if(this.box[i].idBox==box[g]){
						this.mirrorBoxTechZ(this.box[i], orientation);
					}
				}
				
			}
		}
	},
	copyBoxTech:function(box, newId){
		var block ={};
		for (var key in box) {
  			block[key] = box[key];
		}
		if(newId!=undefined){
			block.idBox=newId;
		}else{
			block.idBox="Copied"+this.box.length;
		}
		this.box.push(block);
		return this.box[this.box.length-1];
	},
	copyBox:function(boxId, idBox){
		
		if(boxId=="all"){
			if(idBox==undefined){
				idBox=[];
			}
			for(var i in this.box){
				this.copyBoxTech(box[i],idBox[i]);
			}
		}else if((typeof boxId)=="string"){
			
			this.copyBoxTech(this.boxById(boxId),idBox);
		}else{
			if(idBox==undefined){
				idBox=[];
			}
			for(var g in boxId){
				for(var i in this.box){
					if(this.box[i].idBox==boxId[g]){
						this.copyBoxTech(this.box[i],idBox[g]);
					}
				}
				
			}
		}
	},
	rotationTech:function(box, orientation, angle, point){
		if(orientation=="y"){
			if(angle==90){
				var tech = 0;
				tech = box.x1;
				box.x1=box.z1;
				box.z1=tech;
				tech = box.x2;
				box.x2=box.z2;
				box.z2=tech;
				this.mirrorX(box.idBox, {x:point.x, y:point.y, z:point.z});
				this.mirrorZ(box.idBox, {x:point.x, y:point.y, z:point.z});
			}
			if(angle==180){
				this.mirrorX(box.idBox, {x:point.x, y:point.y, z:point.z});
				this.mirrorZ(box.idBox, {x:point.x, y:point.y, z:point.z});
			}
			if(angle==270){
				var tech = 0;
				tech = box.x1;
				box.x1=-box.z1;
				box.z1=-tech;
				tech = box.x2;
				box.x2=-box.z2;
				box.z2=-tech;
				box.x1+point.x;
				box.x2+point.x;
				box.z1+point.z;
				box.z2+point.z;
			}
		}
		if(orientation=="x"){
			if(angle==90){
				var tech = 0;
				tech = box.y1;
				box.y1=box.z1;
				box.z1=tech;
				tech = box.y2;
				box.y2=box.y2;
				box.z2=tech;
				this.mirrorY(box.idBox, {x:point.x, y:point.y, z:point.z});
				this.mirrorZ(box.idBox, {x:point.x, y:point.y, z:point.z});
			}
			if(angle==180){
				this.mirrorY(box.idBox, {x:point.x, y:point.y, z:point.z});
				this.mirrorZ(box.idBox, {x:point.x, y:point.y, z:point.z});
			}
			if(angle==270){
				var tech = 0;
				tech = box.y1;
				box.y1=-box.z1;
				box.z1=-tech;
				tech = box.y2;
				box.y2=-box.z2;
				box.z2=-tech;
				box.y1+point.y;
				box.y2+point.y;
				box.z1+point.z;
				box.z2+point.z;
			}
		}
		if(orientation=="z"){
			if(angle==90){
				var tech = 0;
				tech = box.x1;
				box.x1=box.y1;
				box.y1=tech;
				tech = box.x2;
				box.x2=box.y2;
				box.y2=tech;
				this.mirrorX(box.idBox, {x:point.x, y:point.y, z:point.z});
				this.mirrorY(box.idBox, {x:point.x, y:point.y, z:point.z});
			}
			if(angle==180){
				this.mirrorX(box.idBox, {x:point.x, y:point.y, z:point.z});
				this.mirrorY(box.idBox, {x:point.x, y:point.y, z:point.z});
			}
			if(angle==270){
				var tech = 0;
				tech = box.x1;
				box.x1=-box.y1;
				box.y1=-tech;
				tech = box.x2;
				box.x2=-box.y2;
				box.y2=-tech;
				box.x1+point.x;
				box.x2+point.x;
				box.y1+point.y;
				box.y2+point.y;
			}
		}
	},
	rotation:function(id, orientation, angle, point){
		if(id=="all"){
			for(var i in this.box){
				this.rotationTech(this.box[i],orientation,angle,point);
			}
		}else if((typeof id)=="string"){
			this.rotationTech(this.boxById(id),orientation,angle,point);
		}else{
			for(var g in id){
				for(var i in this.box){
					if(this.box[i].idBox==id[g]){
						this.mirrorBoxTechZ(id[g], orientation);
					}
				}
			}
		}
	},
	checkInersection:function(box1, box2){
		if(box1.x1<box2.x2&&box1.x2>box2.x1||box1.x1>box2.x1&&box1.x2<box2.x2){
			if(box1.y1<box2.y2&&box1.y2>box2.y1||box1.y1>box2.y1&&box1.y2<box2.y2){
				if(box1.z1<box2.z2&&box2.z1>box2.z1||box1.z1>box2.z1&&box1.z2<box2.z2){
					box1.type="block";
					box1.id = 152;
					box1.data = 0;
					box2.id = 152;
					box2.data = 0;
					box2.type="block";
				}
			}
		}
	},
	debugMode:function(){
		for(var i in this.box){
			for(var t in this.box){
				if(i!=t){
				this.checkInersection(this.box[i], this.box[t]);
				}
			}
		}
	}, 
	copyModel:function(model){
		for(var i in this.box){
			var block ={};
			for (var key in box) {
  				block[key] = box[key];
			}	
			model.box.push(block);
		}
	},
	addMesh:function(mesh){
		this.box.push({type:"mesh", mesh:mesh});
	},
	compile:function(model){
		for(var i in this.box){
			var m= this.box[i];
			if(m.idBox!=undefined&&!m.condition){
			if(m.type=="block"){
				model.addBox(m.x1, m.y1, m.z1, m.x2, m.y2, m.z2, m.id, m.data);
			}else if(m.type=="texture"){
				model.addBox(m.x1, m.y1, m.z1, m.x2, m.y2, m.z2, m.textureName, m.index);
			}else if(m.type=="textureArray"){
				model.addBox(m.x1, m.y1, m.z1, m.x2, m.y2, m.z2, m.textureArray);
			}else if(m.type=="mesh"){
				model.addMesh(m.mesh);
			}
		}
		}
	},
	box:[]
		};
	}
};







// file: aquarium.js

var BLOCK_TYPE_AQUARIUM_BLOCK = Block.createSpecialType({
	base: 5,
	opaque: false,
	explosionres: 1,
	renderlayer:2
});

IDRegistry.genBlockID("aquarium");
Block.createBlock("aquarium", [
	{name: "Phantom Block", texture: [["water_still",0]],inCreative: true}
],BLOCK_TYPE_AQUARIUM_BLOCK);





// file: gui.js

var storageGUI = new UI.StandartWindow({
	standart: {
		header: {
			text: {
				text: "Storage"
			},
		},
		minHeight: 700,
		inventory: {
			standart: true
		},
		background: {
			standart: true
		}
	},
	elements: {
		"storage0": { type: "slot", x: 445, y: 150, size: 100 },
		"storage1": { type: "slot", x: 555, y: 150, size: 100 },
		"storage2": { type: "slot", x: 445, y: 260, size: 100 },
		"storage3": { type: "slot", x: 555, y: 260, size: 100 }
	}
});




// file: kitchen/cooker.js

createFurnitureStone("cooker","cooker","quartz_block",0, "Cooker", ItemID.cooker, BlockID.cooker);
Translation.addTranslation("Cooker", {ru: "Кухонная Плита"});
Recipes.addShaped({id: IDData.item.cooker, count: 1, data: 0}, ["iii", "iii", "ibi"], ["i",265,0, "b",42,0]);
Item.registerUseFunction("cooker", function(coords, item, block){
	World.setBlock(coords.relative.x,coords.relative.y,coords.relative.z, BlockID.cooker);
	World.addTileEntity(coords.relative.x,coords.relative.y,coords.relative.z);
	var look = Entity.getLookVector(Player.get());
	if(look.x>.75){
		World.getTileEntity(coords.relative.x,coords.relative.y,coords.relative.z).data.orientation=1;
	}
	if(look.x<-.75){
		World.getTileEntity(coords.relative.x,coords.relative.y,coords.relative.z).data.orientation=3;
	}
	if(look.z>.75){
		World.getTileEntity(coords.relative.x,coords.relative.y,coords.relative.z).data.orientation=2;
	}
	if(look.z<-.75){
		World.getTileEntity(coords.relative.x,coords.relative.y,coords.relative.z).data.orientation=4;
	}
});
var render0 = new ICRender.Model();
var render1 = new ICRender.Model();
var render2 = new ICRender.Model();
var render3 = new ICRender.Model();
BlockRenderer.setStaticICRender (BlockID.cooker, 0, render);
var model = BlockRenderer.createModel();
var model1 = BlockRenderer.createModel();
var model2 = BlockRenderer.createModel();
var model3 = BlockRenderer.createModel();

var modelArray=ModelAPI.newArray();
modelArray.addBoxByID("mainBlock1", 0, 0, 0, 1, 2/16, 1, 155);
modelArray.addBoxByID("mainBlock2", 0, 12/16, 0, 1, 15/16, 1, 155);
modelArray.addBoxByID("mainBlock3", 0, 2/16, 0, 1, 12/16, 3/16, 155);
modelArray.addBoxByID("mainBlock4", 0, 2/16, 13/16, 1, 12/16, 1, 155);
modelArray.addBoxByID("mainBlock5", 14/16, 2/16, 3/16, 1, 12/16, 13/16, 155);

modelArray.addBoxByID("fire1", 3/16, 15/16, 3/16, 7/16, 1, 7/16, 173);
modelArray.addBoxByID("fire3", 9/16, 15/16, 9/16, 13/16, 1, 13/16, 173);
modelArray.addBoxByID("fire2", 3/16, 15/16, 9/16, 7/16, 1, 13/16, 173);
modelArray.addBoxByID("fire4", 9/16, 15/16, 3/16, 13/16, 1, 7/16, 173);
modelArray.addBoxByID("ledge1", 0, 15/16, 0, 1, 1, 1/16, 155);
modelArray.addBoxByID("ledge2", 0, 15/16, 15/16, 1, 1, 1, 155);
modelArray.addBoxByID("ledge3", 0, 15/16, 1/16, 1/16, 1, 15/16, 155);
modelArray.addBoxByID("ledge4", 15/16, 15/16, 1/16, 1, 1, 15/16, 155);

modelArray.addBoxByID("glass", -1/16, 3/16, 3/16, 0, 11/16, 13/16, 20);
modelArray.addBoxByID("ledgeGlass1", -1/16, 2/16, 2/16, 0, 3/16, 14/16, 155);
modelArray.addBoxByID("ledgeGlass2", -1/16, 11/16, 2/16, 0, 12/16, 14/16, 155);
modelArray.addBoxByID("ledgeGlass3", -1/16, 3/16, 2/16, 0, 11/16, 3/16, 155);
modelArray.addBoxByID("ledgeGlass4", -1/16, 3/16, 13/16, 0, 11/16, 14/16, 155);

modelArray.addBoxByID("1", -2/16, 11/16, 6/16, -1/16, 12/16, 10/16, 173);

modelArray.addBoxByID("2", -.3/16, 12.5/16, 1/16, 0, 14.5/16, 3/16, 44);
modelArray.addBoxByID("3", -.3/16, 12.5/16, 4/16, 0, 14.5/16, 6/16, 44);
modelArray.addBoxByID("4", -.3/16, 12.5/16, 7/16, 0, 14.5/16, 9/16, 44);
modelArray.addBoxByID("5", -.3/16, 12.5/16, 10/16, 0, 14.5/16, 12/16, 44);

modelArray.addBoxByID("6", -.5/16, 12.5/16, 14/16, 0, 13.5/16, 15/16, 35, 5);
modelArray.addBoxByID("7", -.5/16, 13.5/16, 14/16, 0, 14.5/16, 15/16, 35, 14);

for(var i = 3; i<14; i+=2){
	modelArray.addBoxByID("rod"+i, i/16, 5/16, 3/16, (i+1)/16, 5.3/16, 13/16, 44);
}

modelArray.compile(model);
modelArray.rotation("all", "y",90,{x:.5, y:.5, z:.5});
modelArray.compile(model1);
modelArray.rotation("all", "y",180,{x:.5, y:.5, z:.5});
modelArray.compile(model2);
modelArray.rotation("all", "y",90,{x:.5, y:.5, z:.5});
modelArray.compile(model3);
render0.addEntry(model);
render1.addEntry(model1);
render2.addEntry(model2);
render3.addEntry(model3);
var FURNACE_FUEL_MAP = {
	5: 300,
	6: 100,
	17: 300,
	263: 1600,
	280: 100,
	268: 200,
	269: 200,
	270: 200,
	271: 200,
	85: 300,
	107: 300,
	134: 300,
	135: 300,
	158: 150,
	162: 300,
	163: 300,
	164: 300,
	184: 300,
	185: 300,
	186: 300,
	187: 300,
	53: 300,
	54: 300,
	58: 300
};
BlockRenderer.enableCoordMapping (BlockID.cooker, -1, render);
var GUI_BAR_STANDART_SCALE=3.2;
var guiCooker = new UI.StandartWindow({
	standart: {
		header: {text: {text: "Cooker"}},
		inventory: {standart: true},
		background: {standart: true}
	},
	
	drawing: [
		{type: "bitmap", x: 530, y: 146, bitmap: "furnace_bar_background", scale: GUI_BAR_STANDART_SCALE},
		{type: "bitmap", x: 450, y: 150, bitmap: "fire_background", scale: GUI_BAR_STANDART_SCALE}
	],
	
	elements: {
		"progressScale": {type: "scale", x: 530, y: 146, direction: 0, value: 0.5, bitmap: "furnace_bar_scale", scale: GUI_BAR_STANDART_SCALE},
		"burningScale": {type: "scale", x: 450, y: 150, direction: 1, value: 0.5, bitmap: "fire_scale", scale: GUI_BAR_STANDART_SCALE},
		"slotSource": {type: "slot", x: 441, y: 75},
		"slotFuel": {type: "slot", x: 441, y: 212},
		"slotResult": {type: "slot", x: 625, y: 142},
	}
});
TileEntity.registerPrototype(BlockID.cooker, {
	init:function(){
		this.animationDown = new Animation.Item(this.x+.5, this.y+.18, this.z+.5);
		this.animationUp = new Animation.Item(this.x+.5, this.y+.38, this.z+.5);
		if(this.data.orientation==1){
			BlockRenderer.mapAtCoords (this.x, this.y, this.z, render0);
		}else if(this.data.orientation==2){
			BlockRenderer.mapAtCoords (this.x, this.y, this.z, render2);
		}else if(this.data.orientation==3){
			BlockRenderer.mapAtCoords (this.x, this.y, this.z, render3);
		}else if(this.data.orientation==4){
			BlockRenderer.mapAtCoords (this.x, this.y, this.z, render1);
		}
	},
	defaultValues: {
		progress: 0,
		burn: 0,
		burnMax: 0
	},
	
	getGuiScreen: function(){
		return guiCooker;
	},
	
	tick:function(){
		var sourceSlot = this.container.getSlot("slotSource");
		var resultSlot = this.container.getSlot("slotResult");
		if(World.getThreadTime()%20==0){
			if(sourceSlot.id!=0){
				this.animationDown.describeItem({
			id: sourceSlot.id,
			count: 1,
			data: sourceSlot.data,
			size: .5,
			rotation:[3.14/2, 0, 0]
		});
		if(!this.animationDown.isLoaded)this.animationDown.load();
			}else {
				if(this.animationDown.isLoaded)this.animationDown.destroy();
			}
			if(resultSlot.id!=0){
				this.animationUp.describeItem({
			id: resultSlot.id,
			count: 1,
			data: resultSlot.data,
			size: .5,
			rotation:[3.14/2, 0, 0]
		});
		if(!this.animationUp.isLoaded)this.animationUp.load();
			}else{
			if(this.animationUp.isLoaded)this.animationUp.destroy();
			}
		}
	
		var result = Recipes.getFurnaceRecipeResult(sourceSlot.id, "iron");
		if(result && this.data.burn > 0){
			
			if((resultSlot.id == result.id && resultSlot.data == result.data && resultSlot.count < 64 || resultSlot.id == 0) && this.data.progress++ >= 160){
				sourceSlot.count--;
				resultSlot.id = result.id;
				resultSlot.data = result.data;
				resultSlot.count++;
				this.container.validateAll();
				this.data.progress = 0;
			}
		}
		else {
			this.data.progress = 0;
		}
		
		if(this.data.burn > 0){
			this.data.burn--;
		}
		else if(result){
			this.data.burn = this.data.burnMax = this.getFuel("slotFuel");
		}
		
		this.container.setScale("burningScale", this.data.burn / this.data.burnMax || 0);
		this.container.setScale("progressScale", this.data.progress / 160);
	},
	
	getFuel: function(slotName){
		var fuelSlot = this.container.getSlot(slotName);
		if(fuelSlot.id > 0){
			var burn = FURNACE_FUEL_MAP[fuelSlot.id];
			if(burn){
				fuelSlot.count--;
				this.container.validateSlot(slotName);
				return burn;
			}
			if(LiquidRegistry.getItemLiquid(fuelSlot.id, fuelSlot.data) == "lava"){
				var empty = LiquidRegistry.getEmptyItem(fuelSlot.id, fuelSlot.data);
				fuelSlot.id = empty.id;
				fuelSlot.data = empty.data;
				return 20000;
			}
		}
		return 0;
	}
});




// file: kitchen/plate.js

createFurnitureWood("plate","plate","qurtz_block",0, "Plate", ItemID.plate, BlockID.plate);
Translation.addTranslation("Plate", {ru: "Тарелка"});
Recipes.addShaped({id: IDData.item.plate, count: 1, data: 0}, ["vvv", "qvq", "vqv"], ["q",406,0]);
Block.setShape(BlockID.plate,1/8,0,1/8,7/8,1/8,7/8);

var render = new ICRender.Model();
BlockRenderer.setStaticICRender (BlockID.plate, 0, render);
var model = BlockRenderer.createModel();
var plateModel = ModelAPI.newArray();
plateModel.addBoxByID("downPlate", 2/8, 0, 2/8, 6/8, 1/16, 6/8, 155);
plateModel.addBoxByID("ledge0", 1/8, 1/16, 1/8, 2/8, 1/8, 7/8, 155);
plateModel.addBoxByID("ledge1", 2/8, 1/16, 1/8, 6/8, 1/8, 2/8, 155);
plateModel.addBoxByID("ledge2", 6/8, 1/16, 1/8, 7/8, 1/8, 7/8, 155);
plateModel.addBoxByID("ledge1", 2/8, 1/16, 6/8, 6/8, 1/8, 7/8, 155);

plateModel.compile(model);
render.addEntry(model);
var sN= ModAPI.requireGlobal("Entity.isSneaking");
TileEntity.registerPrototype(BlockID.plate, {
	defaultValues: {
		id:0,
		data:0
	},
	destroy:function(){
		if(this.animation.isLoaded)this.animation.destroy();
		if(this.data.id!=0)World.drop(this.x+.5, this.y+0.25, this.z+.5, this.data.id, 1, this.data.data);
	},
	init:function(){
		this.animation = new Animation.Item(this.x+.5, this.y+2.5/16, this.z+.5);
		this.animationSet();
	},
	animationSet:function(){
		this.animation = this.animation||new Animation.Item(this.x+.5, this.y+2.5/16, this.z+.5);
		if(this.data.id>0){
			if(this.data.id<256){
				this.animation.describeItem({
			id: this.data.id,
			count: 1,
			data: this.data.data,
			size: .5,
		});
		this.animation.setPos(this.x + .57, this.y + 0.20, this.z + .43);
			}else{
			this.animation.describeItem({
			id: this.data.id,
			count: 1,
			data: this.data.data,
			size: .5,
			rotation:[3.14/2, 0, 0]
		});
		this.animation.setPos(this.x + .5, this.y+1/16+1/64, this.z + .5);
		}
		if(!this.animation.isLoaded){
			this.animation.load();
		}
		}else{
			if(this.animation.isLoaded)this.animation.destroy();
		}
	},
	click:function(){
		if(this.data.id!=0){
			World.drop(this.x+.5, this.y+0.25, this.z+.5, this.data.id, 1, this.data.data);
		}
		if(!sN(Player.get())){
		this.data.id=Player.getCarriedItem().id;
		this.data.data=Player.getCarriedItem().data;
		Player.decreaseCarriedItem(1);
		Game.prevent();
		this.animationSet();
		}else{
			this.data.id=0;
			this.data.data=0;
			if(this.animation.isLoaded)this.animation.destroy();
		}
	}
});




// file: bathroom/toilet.js

IDRegistry.genItemID("toilet");
Item.createItem("toilet", "Toilet", {name: "toilet", meta: 0}, {stack: 64});

Translation.addTranslation("Toilet", {ru: "Унитаз"});
Recipes.addShaped({id: ItemID.toilet, count: 1, data: 0}, ["iib", "qvq", "vqq"], ["q",155,0,"b", 77,0, "i",406,0]);

var toiletModel = ModelAPI.newArray();
toiletModel.addBoxByID("downPlate", 3/16, 0, 3/16, 13/16, 6/16, 13/16, 155);
toiletModel.addBoxByID("backPlate", 1/16, 6/16, 1/16, 15/16, 18/16, 6/16, 155);
toiletModel.addBoxByID("upPlate", 0/16, 18/16, 0/16, 16/16, 20/16, 7/16, 155);
toiletModel.addBoxByID("button", 6/16, 20/16, 2/16, 10/16, 20.5/16, 4/16, 1);
toiletModel.addBoxByID("leftSideBorder", 1/16, 6/16, 6/16, 3/16, 11/16, 15/16, 155);
toiletModel.addBoxByID("rightSideBorder", 13/16, 6/16, 6/16, 15/16, 11/16, 15/16, 155);
toiletModel.addBoxByID("frontSideBorder", 3/16, 6/16, 13/16, 13/16, 11/16, 15/16, 155);
toiletModel.addBoxByID("waterPlate", 3/16, 6/16, 3/16, 13/16, 6.1/16, 13/16, 8);
Furniture.placeUnifiedEntity(BlockID.stoneFurniture, ItemID.toilet,toiletModel,{});




// file: bathroom/sink.js

IDRegistry.genItemID("sink");
Item.createItem("sink", "Sink", {name: "sink", meta: 0}, {stack: 64});

Translation.addTranslation("Sink", {ru: "Раковина"});
Recipes.addShaped({id: ItemID.sink, count: 1, data: 0}, ["qiq", "vqv", "vqv"], ["q",406,0, "i", 265,0]);

var sinkModel = ModelAPI.newArray();
sinkModel.addBoxByID("downPlate", 3/16, 0, 0/16, 13/16, 12/16, 8/16, 155);
sinkModel.addBoxByID("backBorder", 1/16, 12/16, 0/16, 15/16, 16/16, 2/16, 155);
sinkModel.addBoxByID("frontBorder", 1/16, 12/16, 8/16, 15/16, 16/16, 10/16, 155);
sinkModel.addBoxByID("leftBorder", 1/16, 12/16, 2/16, 3/16, 16/16, 8/16, 155);
sinkModel.addBoxByID("rightBorder", 13/16, 12/16, 2/16, 15/16, 16/16, 8/16, 155);
sinkModel.addBoxByID("water", 3/16, 12/16, 1/16, 13/16, 13.5/16, 8/16, 8);
sinkModel.addBoxByID("redButton", 5/16, 16/16, 0.5/16, 6/16, 17/16, 1.5/16, 35, 14);
sinkModel.addBoxByID("blueButton", 10/16, 16/16, 0.5/16, 11/16, 17/16, 1.5/16, 35, 11);
sinkModel.addBoxByID("gate_1", 7.5/16, 16/16, 0.5/16, 8.5/16, 18/16, 1.5/16, 1);
sinkModel.addBoxByID("gate_2", 7.5/16, 18/16, 0.5/16, 8.5/16, 19/16, 4/16, 1);
sinkModel.addBoxByID("gate_3", 7.5/16, 17/16, 3/16, 8.5/16, 18/16, 4/16, 1);

Furniture.placeUnifiedEntity(BlockID.stoneFurniture, ItemID.sink,sinkModel,{});




// file: bathroom/bath.js

IDRegistry.genBlockID("bath");
Block.createBlock("bath", [
	{name: "Bath", texture: [["quartz_block", 0]], inCreative: false},
	{name: "Bath", texture: [["quartz_block", 0]], inCreative: false},
	{name: "Bath", texture: [["quartz_block", 0]], inCreative: false},
	{name: "Bath", texture: [["quartz_block", 0]], inCreative: false}
],BLOCK_TYPE_STONE);
IDRegistry.genItemID("bath");
Item.createItem("bath", "Bath", {name: "bath", meta: 0}, {stack: 64});

Translation.addTranslation("Bath", {ru: "Ванна"});
Recipes.addShaped({id: ItemID.bath, count: 1, data: 0}, ["qiq", "qvq", "qqq"], ["q",155,0, "i", 265,0]);

var bathModel = ModelAPI.newArray();
bathModel.addBoxByID("downPlate0", 0/16, 0/16, -16/16, 16/16, 15/16, 0/16, 155);
bathModel.addBoxByID("leftBorder0", 0/16, 15/16, -16/16, 2/16, 16/16, 0/16, 155);
bathModel.addBoxByID("rightBorder0", 14/16, 15/16, -16/16, 16/16, 16/16, 0/16, 155);
bathModel.addBoxByID("downPlate1", 0/16, 0/16, 0/16, 16/16, 15/16, 16/16, 155);
bathModel.addBoxByID("leftBorder1", 0/16, 15/16, 0/16, 2/16, 16/16, 16/16, 155);
bathModel.addBoxByID("rightBorder1", 14/16, 15/16, 0/16, 16/16, 16/16, 16/16, 155);
bathModel.addBoxByID("backBorder", 2/16, 15/16, -16/16, 14/16, 16/16, -14/16, 155);
bathModel.addBoxByID("frontBorder", 2/16, 15/16, 14/16, 14/16, 16/16, 16/16, 155);
bathModel.addBoxByID("water0", 2/16, 15/16, -14/16, 14/16, 15.1/16, 0, 8);
bathModel.addBoxByID("water1", 2/16, 15/16, 0, 14/16, 15.1/16, 14/16, 8);
bathModel.addBoxByID("redButton", 5/16, 16/16, -15.5/16, 6/16, 17/16, 1.5/16-1, 35, 14);
bathModel.addBoxByID("blueButton", 10/16, 16/16, -15.5/16, 11/16, 17/16, 1.5/16-1, 35, 11);
bathModel.addBoxByID("gate_1", 7.5/16, 16/16, -15.5/16, 8.5/16, 18/16, 1.5/16-1, 1);
bathModel.addBoxByID("gate_2", 7.5/16, 18/16, -15.5/16, 8.5/16, 19/16, 4/16-1, 1);
bathModel.addBoxByID("gate_3", 7.5/16, 17/16, -13/16, 8.5/16, 18/16, 4/16-1, 1);
Furniture.addReplacementItem({id:"bath"},{id:"bath"}, Furniture.placeRotatableBlock(BlockID.bath, bathModel));
//Block.setShape(BlockID.bath, -1, 0, 0, 1, 1, 1, 1);
//Block.setShape(BlockID.bath, 0, 0, -1, 1, 1, 1, 3);




// file: bathroom/shower.js

IDRegistry.genBlockID("shower");
Block.createBlock("shower", [
	{name: "Shower", texture: [["glass", 0]], inCreative: false},
	{name: "Shower", texture: [["glass", 0]], inCreative: false},
	{name: "Shower", texture: [["glass", 0]], inCreative: false},
	{name: "Shower", texture: [["glass", 0]], inCreative: false}
],BLOCK_TYPE_STONE);
Block.setShape(BlockID.shower, 0, 0, 0, 1, 1/16, 1);
IDRegistry.genBlockID("showerTop");
Block.createBlock("showerTop", [
	{name: "Shower", texture: [["glass", 0]], inCreative: false},
	{name: "Shower", texture: [["glass", 0]], inCreative: false},
	{name: "Shower", texture: [["glass", 0]], inCreative: false},
	{name: "Shower", texture: [["glass", 0]], inCreative: false}
],BLOCK_TYPE_STONE);
Block.setShape(BlockID.showerTop, 0, 15/16, 0, 1, 1, 1);
IDRegistry.genItemID("shower");
Item.createItem("shower", "Shower", {name: "shower", meta: 0}, {stack: 64});

Translation.addTranslation("Shower", {ru: "Душ"});
Recipes.addShaped({id: ItemID.shower, count: 1, data: 0}, ["qiq", "qgq", "qqq"], ["q",155,0, "g", 20, 0, "i",265,0]);

var showerModel = ModelAPI.newArray();
showerModel.addBoxByID("downPlate", 0/16, 0/16, 0/16, 16/16, 1/16, 16/16, 155);
showerModel.addBoxByID("bottomPlastic0", 0/16, 1/16, 0/16, 1/16, 16/16, 1/16, 155);
showerModel.addBoxByID("bottomPlastic1", 15/16, 1/16, 0/16, 16/16, 16/16, 1/16, 155);
showerModel.addBoxByID("bottomPlastic2", 0/16, 1/16, 15/16, 1/16, 16/16, 16/16, 155);
showerModel.addBoxByID("bottomPlastic3", 15/16, 1/16, 15/16, 16/16, 16/16, 16/16, 155);
showerModel.addBoxByID("leftBottomBorder", 0/16, 15/16, 1/16, 1/16, 16/16, 15/16, 155);
showerModel.addBoxByID("rightBottomTopBorder", 15/16, 15/16, 1/16, 16/16, 16/16, 15/16, 155);
showerModel.addBoxByID("backBottomBorder", 1/16, 15/16, 0/16, 15/16, 16/16, 1/16, 155);
showerModel.addBoxByID("glassPanelLeft", 0/16, 1/16, 1/16, 1/16, 15/16, 15/16, 20);
showerModel.addBoxByID("glassPanelRight", 15/16, 1/16, 1/16, 16/16, 15/16, 15/16, 20);
showerModel.addBoxByID("glassPanelBack", 1/16, 1/16, 0/16, 15/16, 15/16, 1/16, 20);
var showerModelTop = ModelAPI.newArray();
showerModelTop.addBoxByID("topPlastic0", 0/16, 16/16-1, 0/16, 1/16, 31/16-1, 1/16, 155);
showerModelTop.addBoxByID("topPlastic1", 15/16, 16/16-1, 0/16, 16/16, 31/16-1, 1/16, 155);
showerModelTop.addBoxByID("topPlastic2", 0/16, 16/16-1, 15/16, 1/16, 31/16-1, 16/16, 155);
showerModelTop.addBoxByID("topPlastic3", 15/16, 16/16-1, 15/16, 16/16, 31/16-1, 16/16, 155);
showerModelTop.addBoxByID("leftTopBorder", 0/16, 31/16-1, 0/16, 1/16, 32/16-1, 16/16, 155);
showerModelTop.addBoxByID("rightTopBorder", 15/16, 31/16-1, 0/16, 16/16, 32/16-1, 16/16, 155);
showerModelTop.addBoxByID("backTopBorder", 1/16, 31/16-1, 0/16, 15/16, 32/16-1, 1/16, 155);
showerModelTop.addBoxByID("frontTopBorder", 1/16, 31/16-1, 15/16, 15/16, 32/16-1, 16/16, 155);
showerModelTop.addBoxByID("glassPanelLeftTop", 0/16, 16/16-1, 1/16, 1/16, 31/16-1, 15/16, 20);
showerModelTop.addBoxByID("glassPanelRightTop", 15/16, 16/16-1, 1/16, 16/16, 31/16-1, 15/16, 20);
showerModelTop.addBoxByID("glassPanelBackTop", 1/16, 16/16-1, 0/16, 15/16, 31/16-1, 1/16, 20);
showerModelTop.addBoxByID("gate_1", 7.5/16, 16/16, 0/16, 8.5/16, 18/16, 1/16, 1);
showerModelTop.addBoxByID("gate_2", 7.5/16, 18/16, 0/16, 8.5/16, 19/16, 8/16, 1);
showerModelTop.addBoxByID("gate_3", 6/16, 17/16, 6/16, 10/16, 18/16, 10/16, 1);
var fshower = Furniture.placeRotatableBlock(BlockID.shower, showerModel);
var f2shower = Furniture.placeRotatableBlock(BlockID.showerTop, showerModelTop);
Furniture.addReplacementItem({id:"shower"},{id:"shower"}, function(c,i,b){
	fshower(c,i,b);
	f2shower({x:c.x, y:c.y+1, z:c.z});
}, function(c){World.setBlock(c.x, c.y+1, c.z, 0);});
Block.registerDropFunction(BlockID.showerTop, function(c, id, data, diggingLevel, toolLevel){
			World.setBlock(c.x, c.y-1, c.z, 0);
			return [[ItemID.shower, 1, 0]]; 
		});




// file: bathroom/closet.js

IDRegistry.genBlockID("closet");
Block.createBlock("closet", [
	{name: "Closet", texture: [["quartz_block", 0]], inCreative: false},
	{name: "Closet", texture: [["quartz_block", 0]], inCreative: false},
	{name: "Closet", texture: [["quartz_block", 0]], inCreative: false},
	{name: "Closet", texture: [["quartz_block", 0]], inCreative: false}
],BLOCK_TYPE_STONE);
IDRegistry.genItemID("closet");
Item.createItem("closet", "Closet", {name: "closet", meta: 0}, {stack: 64});

Translation.addTranslation("Closet", {ru: "Шкафчик"});
Recipes.addShaped({id: ItemID.closet, count: 1, data: 0}, ["qvq", "qqq", "qvq"], ["q",406,0]);

var closetModel = ModelAPI.newArray();
closetModel.addBoxByID("body", 3/16, 2/16, 0/16, 13/16, 14/16, 5/16, 155);
closetModel.addBoxByID("hand0", 4/16, 10/16, 5/16, 7/16, 11/16, 6/16, 1);
closetModel.addBoxByID("hand1", 4/16, 6/16, 5/16, 5/16, 10/16, 6/16, 1);
closetModel.addBoxByID("hand2", 4/16, 5/16, 5/16, 7/16, 6/16, 6/16, 1);

Furniture.addReplacementItem({id:"closet"},{id:"closet"}, Furniture.placeRotatableBlock(BlockID.closet, closetModel));




// file: bathroom/towelsHolder.js

IDRegistry.genBlockID("towelsHolder");
Block.createBlock("towelsHolder", [
	{name: "Towels Holder", texture: [["stone", 0]], inCreative: false},
	{name: "Towels Holder", texture: [["stone", 0]], inCreative: false},
	{name: "Towels Holder", texture: [["stone", 0]], inCreative: false},
	{name: "Towels Holder", texture: [["stone", 0]], inCreative: false}
],BLOCK_TYPE_STONE);
IDRegistry.genItemID("towelsHolder");
Item.createItem("towelsHolder", "Towels Holder", {name: "towelsHolder", meta: 0}, {stack: 64});
Translation.addTranslation("Towels Holder", {ru: "Держатель полотенец"});
Recipes.addShaped({id: ItemID.towelsHolder, count: 1, data: 0}, ["qvq", "vqv", "vqv"], ["q",155,0]);

var towelsHolderModel = ModelAPI.newArray();
towelsHolderModel.addBoxByID("topCrossbeam", 1/16, 13/16, 2/16, 15/16, 15/16, 4/16, 1);
towelsHolderModel.addBoxByID("middleCrossbeam", 1/16, 7/16, 2/16, 15/16, 9/16, 4/16, 1);
towelsHolderModel.addBoxByID("bottomCrossbeam", 1/16, 1/16, 2/16, 15/16, 3/16, 4/16, 1);
towelsHolderModel.addBoxByID("topCrossbar", 0/16, 9/16, 2/16, 2/16, 13/16, 4/16, 1);
towelsHolderModel.addBoxByID("bottomCrossbar", 14/16, 3/16, 2/16, 16/16, 7/16, 4/16, 1);
towelsHolderModel.addBoxByID("bottomHolder", 2/16, 1/16, 0/16, 4/16, 3/16, 2/16, 1);
towelsHolderModel.addBoxByID("topHolder", 12/16, 14/16, 0/16, 14/16, 15/16, 2/16, 1);
towelsHolderModel.addBoxByID("cork0", 0/16, 0/16, 1/16, 1/16, 4/16, 5/16, 159,9);
towelsHolderModel.addBoxByID("cork2", 15/16, 12/16, 1/16, 16/16, 16/16, 5/16, 159,9);
//TODO нормальная физическая модель+ возможность вешать полотенца

Furniture.addReplacementItem({id:"towelsHolder"},{id:"towelsHolder"}, Furniture.placeRotatableBlock(BlockID.towelsHolder, towelsHolderModel));




// file: kitchen/Table.js

function createTableRender(id, idMaterial, dataMaterial){
var render = new ICRender.Model();
BlockRenderer.setStaticICRender (id, 0, render);
var model = BlockRenderer.createModel();

model.addBox (6/16, 0, 6/16, 10/16, 0.95, 10/16,  idMaterial, dataMaterial);
model.addBox (0, 14/16, 0, 1, 1, 1,  idMaterial, dataMaterial);
model.addBox (4/16, 0, 1/4, 3/4, 1/32, 3/4,  idMaterial, dataMaterial);

render.addEntry(model);
}
createFurnitureWood("oakTable","table","planks",0, "Oak Table", ItemID.oakTable, BlockID.oakTable,0);
Translation.addTranslation("Oak Table", {ru: "Дубовый Стол"});
Recipes.addShaped({id: IDData.item.oakTable, count: 1, data: 0}, ["www", "vwv", "vwv"], ["w",5,0]);
createTableRender(BlockID.oakTable, 5, 0);

createFurnitureWood("birchTable","table","planks",2, "Birch Table", ItemID.birchTable, BlockID.birchTable,1);
Translation.addTranslation("Birch Table", {ru: "Берёзовый Стол"});
Recipes.addShaped({id: IDData.item.birchTable, count: 1, data: 2}, ["www", "vwv", "vwv"], ["w",5,2]);
createTableRender(BlockID.birchTable, 5, 2);

createFurnitureWood("spruceTable","table","planks",1, "Spruce Table", ItemID.spruceTable, BlockID.spruceTable,2);
Translation.addTranslation("Spruce Table", {ru: "Еловый Стол"});
Recipes.addShaped({id: IDData.item.spruceTable, count: 1, data: 1}, ["www", "vwv", "vwv"], ["w",5,1]);
createTableRender(BlockID.spruceTable, 5, 1);

createFurnitureWood("jungleTable","table","planks",3, "Jungle Table", ItemID.jungleTable, BlockID.jungleTable,3);
Translation.addTranslation("Jungle Table", {ru: "Стол из Тропической Древесины"});
Recipes.addShaped({id: IDData.item.spruceTable, count: 1, data: 3}, ["www", "vwv", "vwv"], ["w",5,3]);
createTableRender(BlockID.jungleTable, 5, 3);

createFurnitureWood("acaciaTable","table","planks",4, "Acacia Table", ItemID.acaciaTable, BlockID.acaciaTable,4);
Translation.addTranslation("Acacia Table", {ru: "Стол из Акации"});
Recipes.addShaped({id: IDData.item.acaciaTable, count: 1, data: 4}, ["www", "vwv", "vwv"], ["w",5,4]);
createTableRender(BlockID.acaciaTable, 5, 4);

createFurnitureWood("darkOakTable","table","planks",5, "Dark Oak Table", ItemID.darkOakTable, BlockID.darkOakTable,5);
Translation.addTranslation("Dark Oak Table", {ru: "Стол из Тёмного Дуба"});
Recipes.addShaped({id: IDData.item.darkOakTable, count: 1, data: 5}, ["www", "vwv", "vwv"], ["w",5,5]);
createTableRender(BlockID.darkOakTable, 5, 5);

createFurnitureStone("cobblestoneTable","table","cobblestone",0, "Cobblestone Table", ItemID.cobblestoneTable, BlockID.cobblestoneTable,6);
Translation.addTranslation("Cobblestone Table", {ru: "Стол из Булыжника"});
Recipes.addShaped({id: IDData.item.cobblestoneTable, count: 1, data: 0}, ["www", "vwv", "vwv"], ["w",4,0]);
createTableRender(BlockID.cobblestoneTable, 4, 0);

createFurnitureStone("stoneBrickTable","table","stonebrick",0, "Stone Brick Table", ItemID.stoneBrickTable, BlockID.stoneBrickTable,7);
Translation.addTranslation("Stone Brick Table", {ru: "Стол из Каменного Кирпича"});
Recipes.addShaped({id: IDData.item.stoneBrickTable, count: 1, data: 0}, ["www", "vwv", "vwv"], ["w",98,0]);
createTableRender(BlockID.stoneBrickTable, 98, 0);

createFurnitureStone("quartzTable","table","quartz_block",0, "Quartz Table", ItemID.quartzTable, BlockID.quartzTable,8);
Translation.addTranslation("Quartz Table", {ru: "Кварцевый Стол"});
Recipes.addShaped({id: IDData.item.quartzTable, count: 1, data: 0}, ["www", "vwv", "vwv"], ["w",155,0]);
createTableRender(BlockID.quartzTable, 155, 0);




// file: kitchen/toster.js

IDRegistry.genBlockID("toster");
Block.createBlock("toster", [
	{name: "Toster", texture: [["iron_block", 0]], inCreative: false}
],BLOCK_TYPE_STONE);
IDRegistry.genItemID("toster");
Item.createItem("toster", "Toaster", {name: "toster", meta: 0}, {stack: 64});
//TODO физическая модель + крафт
Translation.addTranslation("Toaster", {ru: "Тостер"});
Recipes.addShaped({id: ItemID.toster, count: 1, data: 0}, ["bvb", "bvb", "bgb"], ["b",159,-1, "g",259,0]);

var tosterModel = ModelAPI.newArray();
tosterModel.addBoxByID("bodyLeft", 5.5/16, 1/16, 3/16, 7/16, 5/16, 13/16, 155);
tosterModel.addBoxByID("bodyRight", 9/16, 1/16, 3/16, 10.5/16, 5/16, 13/16, 155);
tosterModel.addBoxByID("bottom", 5.5/16, 0/16, 3/16, 10.5/16, 1/16, 13/16, 155);
tosterModel.addBoxByID("bodyBack", 7/16, 1/16, 3/16, 9/16, 5/16, 4/16, 155);
tosterModel.addBoxByID("bodyFront0", 7/16, 1/16, 12/16, 7.8/16, 5/16, 13/16, 155);
tosterModel.addBoxByID("bodyFront1", 8.2/16, 1/16, 12/16, 9/16, 5/16, 13/16, 155);
tosterModel.addBoxByID("bodyFront2", 7.8/16, 1/16, 12/16, 8.2/16, 2/16, 13/16, 155);
tosterModel.addBoxByID("separator", 7.8/16, 1/16, 4/16, 8.2/16, 5.5/16, 12/16, 159,9);
tosterModel.addBoxByID("hand", 7/16, 3.5/16, 13/16, 9/16, 4.5/16, 13.5/16, 159,9);
Furniture.addReplacementItem({id:"toster"},{id:"toster"});
var render = new ICRender.Model();
var model = BlockRenderer.createModel();
tosterModel.compile(model);
render.addEntry(model);
BlockRenderer.setStaticICRender (BlockID.toster, 0, render);




// file: kitchen/bin.js

IDRegistry.genBlockID("bin");
Block.createBlock("bin", [
	{name: "Bin", texture: [["iron_block", 0]], inCreative: false}
],BLOCK_TYPE_STONE);
IDRegistry.genItemID("bin");
Item.createItem("bin", "Bin", {name: "bin", meta: 0}, {stack: 64});

Translation.addTranslation("Bin", {ru: "Ведро"});
Recipes.addShaped({id: ItemID.bin, count: 1, data: 0}, ["www", "bob", "bnb"], ["w",35,-1, "b",159, -1, "o",259,0,"n", 87,0]);

var binModel = ModelAPI.newArray();
binModel.addBoxByID("body", 3/16, 0/16, 3/16, 13/16, 14/16, 13/16, 159,5);
binModel.addBoxByID("cover", 1/16, 14/16, 1/16, 15/16, 16/16, 15/16, 159,5);
binModel.addBoxByID("hand", 7.5/16, 16/16, 6/16, 8.5/16, 17/16, 10/16, 159,9);
Furniture.addReplacementItem({id:"bin"},{id:"bin"});
var render = new ICRender.Model();
var model = BlockRenderer.createModel();
binModel.compile(model);
render.addEntry(model);
BlockRenderer.setStaticICRender (BlockID.bin, 0, render);
Callback.addCallback("ItemUse",function(coords, item, block){
	if(block.id==BlockID.bin&&!sN(Player.get())){
		if(item.id!=0){
			Game.prevent();
			Player.decreaseCarriedItem(1);
		}
	}
});




// file: kitchen/breadBasket.js

IDRegistry.genItemID("breadBasket");
Item.createItem("breadBasket", "Bread Basket", {name: "breadBasket", meta: 0}, {stack: 64});

Translation.addTranslation("Bread Basket", {ru: "Хлебница"});
Recipes.addShaped({id: ItemID.breadBasket, count: 1, data: 0}, ["vvp", "pvp", "ppp"], ["p",5,-1]);
var breadBasketModel = ModelAPI.newArray();
breadBasketModel.addBoxByID("0", 1/16, 0, 0/16, 15/16, 2/16, 10/16, 5);
breadBasketModel.addBoxByID("1", 1/16, 2/16, 0/16, 15/16, 4/16, 9/16, 5);
breadBasketModel.addBoxByID("2", 1/16, 4/16, 0/16, 15/16, 5/16, 8/16, 5);
breadBasketModel.addBoxByID("3", 1/16, 5/16, 0/16, 15/16, 6/16, 7/16, 5);
breadBasketModel.addBoxByID("4", 1/16, 6/16, 0/16, 15/16, 7/16, 6/16, 5);
breadBasketModel.addBoxByID("5", 1/16, 7/16, 0/16, 15/16, 8/16, 4/16, 5);

Furniture.placeUnifiedEntity(BlockID.woodFurniture, ItemID.breadBasket,breadBasketModel,{gui:storageGUI});




// file: kitchen/kitchenLocker.js

IDRegistry.genItemID("kitchenLocker");
Item.createItem("kitchenLocker", "Kitchen locker", {name: "kitchenPanel", meta: 1}, {stack: 64});

Translation.addTranslation("Kitchen locker", {ru: "Кухонный шкафчик"});

//TODO физ модаль+крафт
var kitchenLockerModel = ModelAPI.newArray();
kitchenLockerModel.addBoxByID("body", 0/16, 0/16, 0/16, 16/16, 15/16, 14/16, 155);
kitchenLockerModel.addBoxByID("top", 0/16, 15/16, 0/16, 16/16, 16/16, 16/16, 159,9);
kitchenLockerModel.addBoxByID("box", 1/16, 1/16, 14/16, 15/16, 14/16, 15/16, 155);
kitchenLockerModel.addBoxByID("hand", 2/16, 7/16, 15/16, 3/16, 10/16, 16/16, 159,9);

Furniture.placeUnifiedEntity(BlockID.stoneFurniture, ItemID.kitchenLocker,kitchenLockerModel,{gui:storageGUI});

IDRegistry.genItemID("kitchenLocker2");
Item.createItem("kitchenLocker2", "Kitchen locker with 2 box", {name: "kitchenPanel", meta: 2}, {stack: 64});

Translation.addTranslation("Kitchen locker with 2 box", {ru: "Кухонный шкафчик с 2 ящиками"});

//TODO физ модаль+крафт
var kitchenLockerModel2 = ModelAPI.newArray();
kitchenLockerModel2.addBoxByID("body", 0/16, 0/16, 0/16, 16/16, 15/16, 14/16, 155);
kitchenLockerModel2.addBoxByID("top", 0/16, 15/16, 0/16, 16/16, 16/16, 16/16, 159,9);
kitchenLockerModel2.addBoxByID("downBox", 1/16, 2/16, 14/16, 15/16, 7/16, 15/16, 155);
kitchenLockerModel2.addBoxByID("upBox", 1/16, 9/16, 14/16, 15/16, 14/16, 15/16, 155);
kitchenLockerModel2.addBoxByID("downHand", 7/16, 4/16, 15/16, 9/16, 5/16, 16/16, 159,9);
kitchenLockerModel2.addBoxByID("upHand", 7/16, 11/16, 15/16, 9/16, 12/16, 16/16, 159,9);

Furniture.placeUnifiedEntity(BlockID.stoneFurniture, ItemID.kitchenLocker2,kitchenLockerModel2,{gui:storageGUI});


IDRegistry.genItemID("kitchenPanel");
Item.createItem("kitchenPanel", "Kitchen panel", {name: "kitchenPanel", meta: 0}, {stack: 64});
Translation.addTranslation("Kitchen panel", {ru: "Кухонная панель"});
Recipes.addShaped({id: ItemID.kitchenPanel, count: 1, data: 0}, ["bbb", "qvq", "qqq"], ["q",155,0,"b",159,0]);
Recipes.addShaped({id: ItemID.kitchenLocker, count: 1, data: 0}, ["vvv", "cpv", "vvv"], ["p",ItemID.kitchenPanel,0, "c",54,0]);
Recipes.addShaped({id: ItemID.kitchenLocker2, count: 1, data: 0}, ["vcv", "vpv", "vcv"], ["p",ItemID.kitchenPanel,0, "c",54,0]);
var kitchenPanelWithoutBoxesModel = ModelAPI.newArray();
kitchenPanelWithoutBoxesModel.addBoxByID("body", 0/16, 0/16, 0/16, 16/16, 15/16, 14/16, 155);
kitchenPanelWithoutBoxesModel.addBoxByID("top", 0/16, 15/16, 0/16, 16/16, 16/16, 16/16, 159,9);
Furniture.placeUnifiedEntity(BlockID.stoneFurniture, ItemID.kitchenPanel,kitchenPanelWithoutBoxesModel,{gui:storageGUI});

IDRegistry.genItemID("cornerKitchenPanel1");
Item.createItem("cornerKitchenPanel1", "Corner kitchen panel 1", {name: "kitchenPanel", meta: 3}, {stack: 64});
Translation.addTranslation("Corner kitchen panel 1", {ru: "Угловая кухонная панель 1"});
Recipes.addShaped({id: ItemID.cornerKitchenPanel1, count: 1, data: 0}, ["vvv", "vpv", "vvv"], ["p",ItemID.kitchenPanel,0]);

var cornerKitchenPanel = ModelAPI.newArray();
cornerKitchenPanel.addBoxByID("body", 0/16, 0/16, 0/16, 16/16, 15/16, 14/16, 155);
cornerKitchenPanel.addBoxByID("body2", 0/16, 0/16, 14/16, 14/16, 15/16, 16/16, 155);
cornerKitchenPanel.addBoxByID("top", 0/16, 15/16, 0/16, 16/16, 16/16, 16/16, 159,9);
Furniture.placeUnifiedEntity(BlockID.stoneFurniture, ItemID.cornerKitchenPanel1,cornerKitchenPanel,{gui:storageGUI});

IDRegistry.genItemID("cornerKitchenPanel2");
Item.createItem("cornerKitchenPanel2", "Corner kitchen panel 2", {name: "kitchenPanel", meta: 4}, {stack: 64});
Translation.addTranslation("Corner kitchen panel 2", {ru: "Угловая кухонная панель 2"});
Recipes.addShaped({id: ItemID.cornerKitchenPanel2, count: 1, data: 0}, ["vvv", "vpv", "vvv"], ["p",ItemID.kitchenPanel,0]);
Recipes.addShaped({id: ItemID.cornerKitchenPanel1, count: 1, data: 0}, ["vvv", "vpv", "vvv"], ["p",ItemID.cornerKitchenPanel2,0]);
Recipes.addShaped({id: ItemID.cornerKitchenPanel2, count: 1, data: 0}, ["vvv", "vpv", "vvv"], ["p",ItemID.cornerKitchenPanel1,0]);
var cornerKitchenPanel2 = ModelAPI.newArray();
cornerKitchenPanel2.addBoxByID("body", 0/16, 0/16, 0/16, 16/16, 15/16, 14/16, 155);
cornerKitchenPanel2.addBoxByID("body2", 2/16, 0/16, 14/16, 16/16, 15/16, 16/16, 155);
cornerKitchenPanel2.addBoxByID("top", 0/16, 15/16, 0/16, 16/16, 16/16, 16/16, 159,9);
Furniture.placeUnifiedEntity(BlockID.stoneFurniture, ItemID.cornerKitchenPanel2,cornerKitchenPanel2,{gui:storageGUI});




// file: kitchen/ventilation.js

IDRegistry.genItemID("kitchenVentilation");
Item.createItem("kitchenVentilation", "Kitchen ventilation", {name: "ventilation", meta: 0}, {stack: 64});

Translation.addTranslation("Kitchen ventilation", {ru: "Кухонная вентиляция"});
Recipes.addShaped({id: ItemID.kitchenVentilation, count: 1, data: 0}, ["bvv", "bib", "bvb"], ["b",159,-1, "i",265,0]);
var kitchenVentilationModel = ModelAPI.newArray();
kitchenVentilationModel.addBoxByID("body", 0/16, 0/16, 0/16, 16/16, 2/16, 16/16, 155);
kitchenVentilationModel.addBoxByID("body1", 1/16, 2/16, 0/16, 15/16, 3/16, 15/16, 159,9);
kitchenVentilationModel.addBoxByID("body2", 2/16, 3/16, 0/16, 14/16, 4/16, 14/16, 159,9);
kitchenVentilationModel.addBoxByID("body3", 3/16, 4/16, 0/16, 13/16, 5/16, 13/16, 159,9);
kitchenVentilationModel.addBoxByID("body4", 4/16, 5/16, 0/16, 12/16, 6/16, 12/16, 159,9);
kitchenVentilationModel.addBoxByID("body5", 5/16, 6/16, 0/16, 11/16, 16/16, 6/16, 159,9);

Furniture.placeUnifiedEntity(BlockID.stoneFurniture, ItemID.kitchenVentilation,kitchenVentilationModel,{}, false);




// file: kitchen/kitchenSink.js

IDRegistry.genItemID("kitchenSink");
Item.createItem("kitchenSink", "Kitchen sink", {name: "kitchenSink", meta: 0}, {stack: 64});

Translation.addTranslation("Kitchen sink", {ru: "Кухонная раковина"});
Recipes.addShaped({id: ItemID.kitchenSink, count: 1, data: 0}, ["vsv", "vpv", "vvv"], ["p",ItemID.kitchenPanel,0, "s", ItemID.sink,0]);

var kitchenSinkModel = ModelAPI.newArray();
kitchenSinkModel.addBoxByID("backBorder", 1/16, 12/16, 0.5/16, 15/16, 16/16, 2/16, 155);
kitchenSinkModel.addBoxByID("frontBorder", 1/16, 12/16, 8/16, 15/16, 16/16, 10/16, 155);
kitchenSinkModel.addBoxByID("leftBorder", 1/16, 12/16, 2/16, 3/16, 16/16, 8/16, 155);
kitchenSinkModel.addBoxByID("rightBorder", 13/16, 12/16, 2/16, 15/16, 16/16, 8/16, 155);
kitchenSinkModel.addBoxByID("water", 3/16, 12/16, 1/16, 13/16, 13.5/16, 8/16, 8);
kitchenSinkModel.addBoxByID("redButton", 5/16, 16/16, 0.5/16, 6/16, 17/16, 1.5/16, 35, 14);
kitchenSinkModel.addBoxByID("blueButton", 10/16, 16/16, 0.5/16, 11/16, 17/16, 1.5/16, 35, 11);
kitchenSinkModel.addBoxByID("gate_1", 7.5/16, 16/16, 0.5/16, 8.5/16, 18/16, 1.5/16, 1);
kitchenSinkModel.addBoxByID("gate_2", 7.5/16, 18/16, 0.5/16, 8.5/16, 19/16, 4/16, 1);
kitchenSinkModel.addBoxByID("gate_3", 7.5/16, 17/16, 3/16, 8.5/16, 18/16, 4/16, 1);
kitchenSinkModel.addBoxByID("frontPanel", 0/16, 0/16, 13/16, 16/16, 15/16, 14/16, 155);
kitchenSinkModel.addBoxByID("backPanel", 0/16, 0/16, 0/16, 16/16, 15/16, 1/16, 155);
kitchenSinkModel.addBoxByID("leftPanel", 0/16, 0/16, 1/16, 1/16, 15/16, 13/16, 155);
kitchenSinkModel.addBoxByID("rightPanel", 15/16, 0/16, 1/16, 16/16, 15/16, 13/16, 155);
kitchenSinkModel.addBoxByID("upPanel0", 0/16, 15/16, 10/16, 16/16, 16/16, 16/16, 159,9);
kitchenSinkModel.addBoxByID("upPanel1", 0/16, 15/16, 0/16, 16/16, 16/16, 0.5/16, 159,9);
kitchenSinkModel.addBoxByID("upPanel2", 0/16, 15/16, .5/16, 1/16, 16/16, 10/16, 159,9);
kitchenSinkModel.addBoxByID("upPanel3", 15/16, 15/16, .5/16, 16/16, 16/16, 10/16, 159,9);
kitchenSinkModel.addBoxByID("box", 1/16, 1/16, 14/16, 15/16, 14/16, 15/16, 155);
kitchenSinkModel.addBoxByID("hand", 2/16, 7/16, 15/16, 3/16, 10/16, 16/16, 159,9);
/*var a = Furniture.placeRotatableEntity(BlockID.kitchenSink, kitchenSinkModel);
var kitchenSinkRender=a.render;
var f = a.f;
Furniture.addReplacementItem({id:"kitchenSink"},{id:"kitchenSink"}, f);
TileEntity.registerPrototype(BlockID.kitchenSink, {
	init:function(){
		BlockRenderer.mapAtCoords (this.x, this.y, this.z,kitchenSinkRender[this.data.render]);
	},
	defaultValues: {
		render: 0
	}});*/
	
	Furniture.placeUnifiedEntity(BlockID.stoneFurniture, ItemID.kitchenSink,kitchenSinkModel,{});




// file: kitchen/fridge.js

IDRegistry.genBlockID("fridge");
Block.createBlock("fridge", [
	{name: "Fridge", texture: [["glass", 0]], inCreative: false}
],BLOCK_TYPE_STONE);
IDRegistry.genBlockID("fridgeTop");
Block.createBlock("fridgeTop", [
	{name: "Fridge", texture: [["glass", 0]], inCreative: false}
],BLOCK_TYPE_STONE);
IDRegistry.genItemID("fridge");
Item.createItem("fridge", "Fridge", {name: "fridge", meta: 0}, {stack: 64});

Translation.addTranslation("Fridge", {ru: "Холодильник"});
Recipes.addShaped({id: ItemID.fridge, count: 1, data: 0}, ["qgq", "qgq", "qqq"], ["q",155,0, "g", 20, 0]);

var fridgeModel = ModelAPI.newArray();
fridgeModel.addBoxByID("body", 0/16, 0/16, 0/16, 16/16, 16/16, 15/16, 155);
fridgeModel.addBoxByID("panel", 1/16, 1/16, 15/16, 15/16, 10/16, 16/16, 155);
fridgeModel.addBoxByID("hand", 2/16, 3/16, 16/16, 3/16, 7/16, 17/16, 159,15);
fridgeModel.addBoxByID("panel2", 1/16, 12/16, 15/16, 15/16, 16/16, 16/16, 155);
var fridgeModelTop = ModelAPI.newArray();
fridgeModelTop.addBoxByID("body", 0/16, 0/16, 0/16, 16/16, 16/16, 15/16, 155);
fridgeModelTop.addBoxByID("panel", 1/16, 0/16, 15/16, 15/16, 15/16, 16/16, 155);
fridgeModelTop.addBoxByID("hand", 2/16, 2/16, 16/16, 3/16, 6/16, 17/16, 159,15);

var a = Furniture.placeRotatableEntity(BlockID.fridge, fridgeModel);
var b = Furniture.placeRotatableEntity(BlockID.fridgeTop, fridgeModelTop);
var fridgeRender=a.render;
var fridgeTopRender=b.render;
var f = function(c,i,b){
	World.setBlock(c.x, c.y+1, c.z,BlockID.fridgeTop);
	a.f(c,i,b);
	a.f({x:c.x, y:c.y+1, z:c.z});
};
Furniture.addReplacementItem({id:"fridge"},{id:"fridge"}, f, function(c){World.setBlock(c.x, c.y+1, c.z, 0);});
TileEntity.registerPrototype(BlockID.fridge, {
	init:function(){
		BlockRenderer.mapAtCoords (this.x, this.y, this.z,fridgeRender[this.data.render]);
	},
	defaultValues: {
		render: 0
	}});
	TileEntity.registerPrototype(BlockID.fridgeTop, {
	init:function(){
		BlockRenderer.mapAtCoords (this.x, this.y, this.z,fridgeTopRender[this.data.render]);
	},
	defaultValues: {
		render: 0
	}});
	Block.registerDropFunction(BlockID.fridgeTop, function(c, id, data, diggingLevel, toolLevel){
			World.setBlock(c.x, c.y-1, c.z, 0);
			return [[ItemID.shower, 1, 0]]; 
		});




// file: kitchen/microwave.js

IDRegistry.genItemID("microwave");
Item.createItem("microwave", "Microwave", {name: "microwawe", meta: 1}, {stack: 64});

Translation.addTranslation("Microwave", {ru: "Микроволновая печь"});
Recipes.addShaped({id: ItemID.microwave, count: 1, data: 0}, ["qqq", "bgg", "bqq"], ["q",406,0, "b", 77,0,"g",20,0]);

var microwaveModel = ModelAPI.newArray();
microwaveModel.addBoxByID("backPlate", 0/16, 1/16, 0/16, 16/16, 9/16, 1/16, 155);
microwaveModel.addBoxByID("leftPlate", 0/16, 1/16, 1/16, 1/16, 9/16, 10/16, 155);
microwaveModel.addBoxByID("rightPlate", 10/16, 1/16, 1/16, 16/16, 9/16, 10/16, 155);
microwaveModel.addBoxByID("topPlate", 0/16, 9/16, 0/16, 16/16, 10/16, 10/16, 155);
microwaveModel.addBoxByID("bottomPlate", 0/16, 0/16, 0/16, 16/16, 1/16, 10/16, 155);
microwaveModel.addBoxByID("leftBorder", 1/16, 1/16, 10/16, 2/16, 9/16, 11/16, 159,9);
microwaveModel.addBoxByID("rightBorder", 9/16, 1/16, 10/16, 10/16, 9/16, 11/16, 159,9);
microwaveModel.addBoxByID("bottomBorder", 1/16, 1/16, 10/16, 10/16, 2/16, 11/16, 159,9);
microwaveModel.addBoxByID("topBorder", 1/16, 9/16, 10/16, 10/16, 10/16, 11/16, 159,9);
microwaveModel.addBoxByID("glass", 2/16, 2/16, 10/16, 9/16, 9/16, 11/16, 20);
for(var i = 0; i<2; i++){
	var y = 3+2*i;
	microwaveModel.addBoxByID("button0"+i,11/16, y/16, 10/16, 12/16, (y+1)/16, 10.5/16, 1);
	microwaveModel.addBoxByID("button1"+i,12.5/16, y/16, 10/16, 13.5/16, (y+1)/16, 10.5/16, 1);
	microwaveModel.addBoxByID("button2"+i,14/16, y/16, 10/16, 15/16, (y+1)/16, 10.5/16, 1);
}
microwaveModel.addBoxByID("button110",11/16, 1/16, 10/16, 12/16, 2/16, 10.5/16, 35,5);
microwaveModel.addBoxByID("button111",12.5/16, 1/16, 10/16, 13.5/16, 2/16, 10.5/16, 1);
microwaveModel.addBoxByID("button112",14/16, 1/16, 10/16, 15/16, 2/16, 10.5/16, 35,14);
microwaveModel.addBoxByID("display",11/16, 7/16, 10/16, 15/16, 9/16, 10.2/16, 159,15);

Furniture.placeUnifiedEntity(BlockID.stoneFurniture, ItemID.microwave,microwaveModel,{});




// file: kitchen/bar-hour.js

IDRegistry.genItemID("bar_hour");
Item.createItem("bar_hour", "Bar-hour", {name: "table", meta: 6}, {stack: 64});
Translation.addTranslation("Bar-hour", {ru: "Барная стойка"});
Recipes.addShaped({id: ItemID.bar_hour, count: 1, data: 0}, ["bbb", "vbv", "vbv"], ["q",159,-1]);
var bar_hourModel = ModelAPI.newArray();
bar_hourModel.addBoxByID("body", 7/16, 0/16, 7/16, 9/16, 15/16, 9/16, 159,9);
bar_hourModel.addBoxByID("top", 0/16, 15/16, 0/16, 16/16, 16/16, 16/16, 159,9);
Furniture.placeUnifiedEntity(BlockID.stoneFurniture, ItemID.bar_hour,bar_hourModel,{});




// file: kitchen/dishwosher.js

IDRegistry.genItemID("dishwosher");
Item.createItem("dishwosher", "Dishwasher", {name: "dishWasher", meta: 0}, {stack: 64});
Translation.addTranslation("Dishwasher", {ru: "Посудомоечная машина"});
Recipes.addShaped({id: ItemID.dishwosher, count: 1, data: 0}, ["qvq", "vqv", "vqv"], ["q",155,0]);
var dishwosherModel = ModelAPI.newArray();
dishwosherModel.addBoxByID("body", 0/16, 0/16, 0/16, 16/16, 15/16, 14/16, 155);
dishwosherModel.addBoxByID("door", 2/16, 1/16, 14/16, 14/16, 12/16, 15/16, 155);
dishwosherModel.addBoxByID("hand0", 6/16, 10/16, 15/16, 7/16, 11/16, 16/16, 159,15);
dishwosherModel.addBoxByID("hand1", 9/16, 10/16, 15/16, 10/16, 11/16, 16/16, 159,15);
dishwosherModel.addBoxByID("hand2", 6/16, 10/16, 16/16, 10/16, 11/16, 16.5/16, 159,15);
dishwosherModel.addBoxByID("button0", 7/16, 13/16, 14/16, 8/16, 14/16, 14.5/16, 1);
dishwosherModel.addBoxByID("button1", 9/16, 13/16, 14/16, 10/16, 14/16, 14.5/16, 1);
dishwosherModel.addBoxByID("button2", 11/16, 13/16, 14/16, 12/16, 14/16, 14.5/16, 35,14);
dishwosherModel.addBoxByID("button3", 13/16, 13/16, 14/16, 14/16, 14/16, 14.5/16, 35,5);
dishwosherModel.addBoxByID("top", 0/16, 15/16, 0/16, 16/16, 16/16, 16/16, 159,9);
Furniture.placeUnifiedEntity(BlockID.stoneFurniture, ItemID.dishwosher,dishwosherModel,{});




// file: kitchen/napkin.js

IDRegistry.genItemID("napkin");
Item.createItem("napkin", "Napkin holder", {name: "napkinHolder", meta: 0}, {stack: 64});
Translation.addTranslation("Napkin holder", {ru: "Салфетница"});
Recipes.addShaped({id: ItemID.napkin, count: 1, data: 0}, ["vvv", "bpb", "vvv"], ["b",159,-1, "p",339,0]);
var napkinModel = ModelAPI.newArray();
napkinModel.addBoxByID("bottom", 5/16, 0/16, 7/16, 11/16, 0.5/16, 9/16, 159,9);
napkinModel.addBoxByID("frontBorder0", 5/16, 0.5/16, 8.5/16, 11/16, 1.5/16, 9/16, 159,9);
napkinModel.addBoxByID("frontBorder1", 6/16, 1.5/16, 8.5/16, 10/16, 2.5/16, 9/16, 159,9);
napkinModel.addBoxByID("frontBorder2", 7/16, 2.5/16, 8.5/16, 9/16, 3.5/16, 9/16, 159,9);
napkinModel.addBoxByID("backBorder0", 5/16, 0.5/16, 7/16, 11/16, 1.5/16, 7.5/16, 159,9);
napkinModel.addBoxByID("backBorder1", 6/16, 1.5/16, 7/16, 10/16, 2.5/16, 7.5/16, 159,9);
napkinModel.addBoxByID("backBorder2", 7/16, 2.5/16, 7/16, 9/16, 3.5/16, 7.5/16, 159,9);
napkinModel.addBoxByID("napkin", 4.5/16, 0.5/16, 7.5/16, 11.5/16, 4/16, 8.5/16, 159,0);
Furniture.placeUnifiedEntity(BlockID.stoneFurniture, ItemID.napkin,napkinModel,{});




// file: kitchen/stool.js

IDRegistry.genItemID("stoolOak");
Item.createItem("stoolOak", "Oak stool", {name: "stool", meta: 0}, {stack: 64});
Translation.addTranslation("Oak stool", {ru: "Дубовая табуретка"});
Recipes.addShaped({id: ItemID.stoolOak, count: 1, data: 0}, ["plp", "pvp", "pvp"], ["l",17,0, "p", 5,0]);
var stoolModel = ModelAPI.newArray();
var data = 0;
stoolModel.addBoxByID("top", 3/16, 10/16, 3/16, 13/16, 11/16, 13/16, 17,data);
stoolModel.addBoxByID("hand0", 4/16, 0/16, 4/16, 6/16, 10/16, 6/16, 5,data);
stoolModel.addBoxByID("hand1", 10/16, 0/16, 4/16, 12/16, 10/16, 6/16, 5,data);
stoolModel.addBoxByID("hand2", 4/16, 0/16, 10/16, 6/16, 10/16, 12/16, 5,data);
stoolModel.addBoxByID("hand3", 10/16, 0/16, 10/16, 12/16, 10/16, 12/16, 5,data);

Furniture.placeUnifiedEntity(BlockID.woodFurniture, ItemID.stoolOak,stoolModel,{}, false);


IDRegistry.genItemID("stoolBirch");
Item.createItem("stoolBirch", "Birch stool", {name: "stool", meta: 2}, {stack: 64});
Translation.addTranslation("Birch stool", {ru: "Берёзовая табуретка"});
Recipes.addShaped({id: ItemID.stoolBirch, count: 1, data: 0}, ["plp", "pvp", "pvp"], ["l",17,2, "p", 5,2]);
var stoolModel = ModelAPI.newArray();
data = 2;
stoolModel.addBoxByID("top", 3/16, 10/16, 3/16, 13/16, 11/16, 13/16, 17,data);
stoolModel.addBoxByID("hand0", 4/16, 0/16, 4/16, 6/16, 10/16, 6/16, 5,data);
stoolModel.addBoxByID("hand1", 10/16, 0/16, 4/16, 12/16, 10/16, 6/16, 5,data);
stoolModel.addBoxByID("hand2", 4/16, 0/16, 10/16, 6/16, 10/16, 12/16, 5,data);
stoolModel.addBoxByID("hand3", 10/16, 0/16, 10/16, 12/16, 10/16, 12/16, 5,data);

Furniture.placeUnifiedEntity(BlockID.woodFurniture, ItemID.stoolBirch,stoolModel,{}, false);


IDRegistry.genItemID("stoolPines");
Item.createItem("stoolPines", "Pines stool", {name: "stool", meta: 1}, {stack: 64});
Translation.addTranslation("Pines stool", {ru: "Сосновая табуретка"});
Recipes.addShaped({id: ItemID.stoolPines, count: 1, data: 0}, ["plp", "pvp", "pvp"], ["l",17,1, "p", 5,1]);
var stoolModel = ModelAPI.newArray();
data = 1;
stoolModel.addBoxByID("top", 3/16, 10/16, 3/16, 13/16, 11/16, 13/16, 17,data);
stoolModel.addBoxByID("hand0", 4/16, 0/16, 4/16, 6/16, 10/16, 6/16, 5,data);
stoolModel.addBoxByID("hand1", 10/16, 0/16, 4/16, 12/16, 10/16, 6/16, 5,data);
stoolModel.addBoxByID("hand2", 4/16, 0/16, 10/16, 6/16, 10/16, 12/16, 5,data);
stoolModel.addBoxByID("hand3", 10/16, 0/16, 10/16, 12/16, 10/16, 12/16, 5,data);

Furniture.placeUnifiedEntity(BlockID.woodFurniture, ItemID.stoolPines,stoolModel,{}, false);


IDRegistry.genItemID("stoolJungle");
Item.createItem("stoolJungle", "Jungle stool", {name: "stool", meta: 3}, {stack: 64});
Translation.addTranslation("Jungle stool", {ru: "Тропическая табуретка"});
Recipes.addShaped({id: ItemID.stoolJungle, count: 1, data: 0}, ["plp", "pvp", "pvp"], ["l",17,3, "p", 5,3]);
var stoolModel = ModelAPI.newArray();
data = 3;
stoolModel.addBoxByID("top", 3/16, 10/16, 3/16, 13/16, 11/16, 13/16, 17,data);
stoolModel.addBoxByID("hand0", 4/16, 0/16, 4/16, 6/16, 10/16, 6/16, 5,data);
stoolModel.addBoxByID("hand1", 10/16, 0/16, 4/16, 12/16, 10/16, 6/16, 5,data);
stoolModel.addBoxByID("hand2", 4/16, 0/16, 10/16, 6/16, 10/16, 12/16, 5,data);
stoolModel.addBoxByID("hand3", 10/16, 0/16, 10/16, 12/16, 10/16, 12/16, 5,data);

Furniture.placeUnifiedEntity(BlockID.woodFurniture, ItemID.stoolJungle,stoolModel,{}, false);


IDRegistry.genItemID("stoolAcacia");
Item.createItem("stoolAcacia", "Acacia stool", {name: "stool", meta: 4}, {stack: 64});
Translation.addTranslation("Acacia stool", {ru: "Акациевая табуретка"});
Recipes.addShaped({id: ItemID.stoolAcacia, count: 1, data: 0}, ["plp", "pvp", "pvp"], ["l",162,0, "p", 5,4]);
var stoolModel = ModelAPI.newArray();
data = 4;
stoolModel.addBoxByID("top", 3/16, 10/16, 3/16, 13/16, 11/16, 13/16, 162,0);
stoolModel.addBoxByID("hand0", 4/16, 0/16, 4/16, 6/16, 10/16, 6/16, 5,data);
stoolModel.addBoxByID("hand1", 10/16, 0/16, 4/16, 12/16, 10/16, 6/16, 5,data);
stoolModel.addBoxByID("hand2", 4/16, 0/16, 10/16, 6/16, 10/16, 12/16, 5,data);
stoolModel.addBoxByID("hand3", 10/16, 0/16, 10/16, 12/16, 10/16, 12/16, 5,data);

Furniture.placeUnifiedEntity(BlockID.woodFurniture, ItemID.stoolAcacia,stoolModel,{}, false);


IDRegistry.genItemID("stoolDarkOak");
Item.createItem("stoolDarkOak", "Dark oak stool", {name: "stool", meta: 5}, {stack: 64});
Translation.addTranslation("Dark oak stool", {ru: "Тёмно-дубовая табуретка"});
Recipes.addShaped({id: ItemID.stoolDarkOak, count: 1, data: 0}, ["plp", "pvp", "pvp"], ["l",162,1, "p", 5,5]);
var stoolModel = ModelAPI.newArray();
data = 5;
stoolModel.addBoxByID("top", 3/16, 10/16, 3/16, 13/16, 11/16, 13/16, 162,1);
stoolModel.addBoxByID("hand0", 4/16, 0/16, 4/16, 6/16, 10/16, 6/16, 5,data);
stoolModel.addBoxByID("hand1", 10/16, 0/16, 4/16, 12/16, 10/16, 6/16, 5,data);
stoolModel.addBoxByID("hand2", 4/16, 0/16, 10/16, 6/16, 10/16, 12/16, 5,data);
stoolModel.addBoxByID("hand3", 10/16, 0/16, 10/16, 12/16, 10/16, 12/16, 5,data);

Furniture.placeUnifiedEntity(BlockID.woodFurniture, ItemID.stoolDarkOak,stoolModel,{}, false);




// file: livingroom/coffeeTable.js

function createCoffeeTableRender(id, idMaterial, dataMaterial){
var render = new ICRender.Model();
BlockRenderer.setStaticICRender (id, 0, render);
var model = BlockRenderer.createModel();

model.addBox (0, 0, 0, 2/16, 0.4, 2/16,  idMaterial, dataMaterial);
model.addBox (14/16, 0, 0, 1, 0.4, 2/16,  idMaterial, dataMaterial);
model.addBox (0, 0, 14/16, 2/16, 0.4, 1,  idMaterial, dataMaterial);
model.addBox (14/16, 0, 14/16, 1, 0.4, 1,  idMaterial, dataMaterial);

model.addBox (0, 6/16, 0, 2/16, 1/2, 1,  idMaterial, dataMaterial);
model.addBox (14/16, 6/16, 0, 1, 1/2, 1,  idMaterial, dataMaterial);
model.addBox (2/16, 6/16, 0, 14/16, 1/2, 2/16,  idMaterial, dataMaterial);
model.addBox (2/16, 6/16, 14/16, 14/16, 1/2, 1,  idMaterial, dataMaterial);

model.addBox (2/16, 7/16, 2/16, 14/16, 1/2, 14/16,  20,0);
//model.addBox (2/16, 6/16, 2/16, 14/16, 7/16, 14/16,  idMaterial, dataMaterial);

render.addEntry(model);
}
createFurnitureWood("oakCoffeeTable","cofeetable","planks",0, "Oak Coffe Table", ItemID.oakCoffeeTable, BlockID.oakCoffeeTable,0);
Translation.addTranslation("Oak Coffe Table", {ru: "Дубовый Кофейный Стол"});
Recipes.addShaped({id: IDData.item.oakCoffeeTable, count: 1, data: 0}, ["vvv", "www", "wvw"], ["w",5,0]);
createCoffeeTableRender(BlockID.oakCoffeeTable, 5, 0);
Block.setShape(BlockID.oakCoffeeTable,0,0,0,1,1/2,1);

createFurnitureWood("spruceCoffeeTable","cofeetable","planks",1, "Spruce Coffe Table", ItemID.spruceCoffeeTable, BlockID.spruceCoffeeTable,1);
Translation.addTranslation("Spruce Coffe Table", {ru: "Еловый Кофейный Стол"});
Recipes.addShaped({id: IDData.item.spruceCoffeeTable, count: 1, data: 0}, ["vvv", "www", "wvw"], ["w",5,1]);
createCoffeeTableRender(BlockID.spruceCoffeeTable, 5, 1);
Block.setShape(BlockID.spruceCoffeeTable,0,0,0,1,1/2,1);

createFurnitureWood("birchCoffeeTable","cofeetable","planks",2, "Birch Coffe Table", ItemID.birchCoffeeTable, BlockID.birchCoffeeTable,2);
Translation.addTranslation("Birch Coffe Table", {ru: "Берёзовый Кофейный Стол"});
Recipes.addShaped({id: IDData.item.birchCoffeeTable, count: 1, data: 0}, ["vvv", "www", "wvw"], ["w",5,2]);
createCoffeeTableRender(BlockID.birchCoffeeTable, 5, 2);
Block.setShape(BlockID.birchCoffeeTable,0,0,0,1,1/2,1);

createFurnitureWood("jungleCoffeeTable","cofeetable","planks",3, "Jungle Coffe Table", ItemID.jungleCoffeeTable, BlockID.jungleCoffeeTable,3);
Translation.addTranslation("Jungle Coffe Table", {ru: "Кофейный Стол из Тропической Древесины"});
Recipes.addShaped({id: IDData.item.jungleCoffeeTable, count: 1, data: 0}, ["vvv", "www", "wvw"], ["w",5,3]);
createCoffeeTableRender(BlockID.jungleCoffeeTable, 5, 3);
Block.setShape(BlockID.jungleCoffeeTable,0,0,0,1,1/2,1);

createFurnitureWood("acaciaCoffeeTable","cofeetable","planks",4, "Oak Coffe Table", ItemID.acaciaCoffeeTable, BlockID.acaciaCoffeeTable,4);
Translation.addTranslation("Acacia Coffe Table", {ru: "Кофейный Стол из Акации"});
Recipes.addShaped({id: IDData.item.acaciaCoffeeTable, count: 1, data: 0}, ["vvv", "www", "wvw"], ["w",5,4]);
createCoffeeTableRender(BlockID.acaciaCoffeeTable, 5, 4);
Block.setShape(BlockID.acaciaCoffeeTable,0,0,0,1,1/2,1);

createFurnitureWood("darkOakCoffeeTable","cofeetable","planks",0, "Dark Oak Coffe Table", ItemID.darkOakCoffeeTable, BlockID.darkOakCoffeeTable,5);
Translation.addTranslation("Dark Oak Coffe Table", {ru: "Кофейный Стол из Тёмного Дуба"});
Recipes.addShaped({id: IDData.item.darkOakCoffeeTable, count: 1, data: 0}, ["vvv", "www", "wvw"], ["w",5,5]);
createCoffeeTableRender(BlockID.darkOakCoffeeTable, 5, 5);
Block.setShape(BlockID.darkOakCoffeeTable,0,0,0,1,1/2,1);

createFurnitureStone("cobblestoneCoffeeTable","cofeetable","cobblestone",0, "Cobblestone Coffe Table", ItemID.cobblestoneCoffeeTable, BlockID.cobblestoneCoffeeTable,6);
Translation.addTranslation("Cobblestone Coffe Table", {ru: "Каменный Кофейный Стол"});
Recipes.addShaped({id: IDData.item.cobblestoneCoffeeTable, count: 1, data: 0}, ["vvv", "www", "wvw"], ["w",4,0]);
createCoffeeTableRender(BlockID.cobblestoneCoffeeTable, 4, 0);
Block.setShape(BlockID.cobblestoneCoffeeTable,0,0,0,1,1/2,1);

createFurnitureStone("stoneBrickCoffeeTable","cofeetable","stonebrick",0, "Stone Brick Coffe Table", ItemID.stoneBrickCoffeeTable, BlockID.stoneBrickCoffeeTable,7);
Translation.addTranslation("Stone Brick Coffe Table", {ru: "Кофейный Стол из Каменных Кирпичей"});
Recipes.addShaped({id: IDData.item.stoneBrickCoffeeTable, count: 1, data: 0}, ["vvv", "www", "wvw"], ["w",98,0]);
createCoffeeTableRender(BlockID.stoneBrickCoffeeTable, 98, 0);
Block.setShape(BlockID.stoneBrickCoffeeTable,0,0,0,1,1/2,1);

createFurnitureStone("quartzCoffeeTable","cofeetable","quartz_block",0, "Quartz Coffe Table", ItemID.quartzCoffeeTable, BlockID.quartzCoffeeTable,8);
Translation.addTranslation("Quartz Coffe Table", {ru: "Кварцевый Кофейный Стол"});
Recipes.addShaped({id: IDData.item.quartzCoffeeTable, count: 1, data: 0}, ["vvv", "www", "wvw"], ["w",155,0]);
createCoffeeTableRender(BlockID.quartzCoffeeTable, 155, 0);
Block.setShape(BlockID.quartzCoffeeTable,0,0,0,1,1/2,1);




// file: livingroom/candlestick.js

createFurnitureLight("candlestick","candlestick","gold_block",0, "Candlestick", ItemID.candlestick, BlockID.candlestick);
Translation.addTranslation("Candlestick", {ru: "Подсвечник"});
Recipes.addShaped({id: IDData.item.candlestick, count: 1, data: 0}, ["ccc", "ggg", "vgv"], ["g",266,0,"c",263,0]);
Block.setShape(BlockID.candlestick,0,0,7.5/16,1,1,8.5/16);

var render = new ICRender.Model();
BlockRenderer.setStaticICRender (BlockID.candlestick, 0, render);
var model = BlockRenderer.createModel();
model.addBox (7/16, 0, 7/16, 9/16, 1/32, 9/16,  41, 0);
model.addBox (7.5/16, 0.01, 7.5/16, 8.5/16, 11/16, 8.5/16,  41, 0);
model.addBox (4/16, 6/16, 7.5/16, 12/16, 7/16, 8.5/16,  41, 0);

model.addBox (4/16, 7/16, 7.5/16, 5/16, 10/16, 8.5/16,  41, 0);
model.addBox (11/16, 7/16, 7.5/16, 12/16, 10/16, 8.5/16,  41, 0);

model.addBox (3.5/16, 9/16, 7/16, 5.5/16, 10/16, 9/16,  41, 0);
model.addBox (10.5/16, 9/16, 7/16, 12.5/16, 10/16, 9/16,  41, 0);
model.addBox (7/16, 11/16, 7/16, 9/16, 12/16, 9/16,  41, 0);

model.addBox (4/16, 10/16, 7.5/16, 5/16, 13/16, 8.5/16,  155, 0);
model.addBox (11/16, 10/16, 7.5/16, 12/16, 13/16, 8.5/16,  155, 0);
model.addBox (7.5/16, 12/16, 7.5/16, 8.5/16, 15/16, 8.5/16,  155, 0);

model.addBox (4.4/16, 13/16, 7.9/16, 4.6/16, 13.4/16, 8.1/16,  173, 0);
model.addBox (11.4/16, 13/16, 7.9/16, 11.6/16, 13.4/16, 8.1/16,  173, 0);
model.addBox (7.9/16, 15/16, 7.9/16, 8.1/16, 15.4/16, 8.1/16,  173, 0);

render.addEntry(model);
Item.registerUseFunction("candlestick", function(coords, item, block){
	World.setBlock(coords.relative.x,coords.relative.y,coords.relative.z, BlockID.candlestick);
	World.addTileEntity(coords.relative.x,coords.relative.y,coords.relative.z);
});
TileEntity.registerPrototype(BlockID.candlestick, {
	init:function(){
		if(World.getBlock(this.x, this.y-1, this.z).id==0){
			World.destroyBlock(this.x, this.y, this.z, true);
			World.removeTileEntity(this.x, this.y, this.z);
		}
	},
	tick:function(){
		if(World.getWorldTime()%20==0&&World.getBlock(this.x, this.y-1, this.z).id==0){
			World.destroyBlock(this.x, this.y, this.z, true);
			World.removeTileEntity(this.x, this.y, this.z);
		}
		if(World.getWorldTime()%15==0){
			var random = Math.floor(Math.random()*3);
			if(random==0){
				Particles.addFarParticle(7,this.x+0.5, this.y+1.07, this.z+0.5);
			}else if (random ==1){
				Particles.addFarParticle(7,this.x+4.5/16, this.y+15.5/16, this.z+0.5);
			}else{
				Particles.addFarParticle(7,this.x+11.5/16, this.y+15.5/16, this.z+0.5);
			}
		}
	}
});




// file: livingroom/fireplace.js

var fireplaceObject={tick:function(tile){
	if(World.getThreadTime()%7==0){
		var x = Math.random()*10/16;
		var z = Math.random()*3/16;
		Particles.addFarParticle(16,tile.x+3/16+x, tile.y+7/16, tile.z+z+6/16,0,0,0,0);
	}
}};
function getFireplaceModel(i){
var fireplaceBrickModel = ModelAPI.newArray();
fireplaceBrickModel.addBoxByID("bottomPlate0", -3/16, 0/16, 0/16, 8/16, 3/16, 16/16, i);
fireplaceBrickModel.addBoxByID("bottomPlate1", 8/16, 0/16, 0/16, 19/16, 3/16, 16/16, i);
fireplaceBrickModel.addBoxByID("topPlate0", -3/16, 11/16, 0/16, 8/16, 14/16, 16/16, i);
fireplaceBrickModel.addBoxByID("topPlate1", 8/16, 11/16, 0/16, 19/16, 14/16, 16/16, i);
fireplaceBrickModel.addBoxByID("topPlate", -2/16, 14/16, 0/16, 8/16, 16/16, 16/16, i);
fireplaceBrickModel.addBoxByID("topPlate", 8/16, 14/16, 0/16, 18/16, 16/16, 16/16, i);
fireplaceBrickModel.addBoxByID("backPlate", 0/16, 3/16, 0/16, 16/16, 11/16, 3/16, i);
fireplaceBrickModel.addBoxByID("leftPlate", -3/16, 3/16, 0/16, 0/16, 11/16, 16/16, i);
fireplaceBrickModel.addBoxByID("rightPlate", 16/16, 3/16, 0/16, 19/16, 11/16, 16/16, i);
fireplaceBrickModel.addBoxByID("left", 0/16, 9/16, 2/16, 3/16, 11/16, 16/16, i);
fireplaceBrickModel.addBoxByID("right", 13/16, 9/16, 2/16, 16/16, 11/16, 16/16, i);
fireplaceBrickModel.addBoxByID("leftIron", 3/16, 3/16, 14/16, 4/16, 7/16, 15/16, 159,15);
fireplaceBrickModel.addBoxByID("rightIron", 12/16, 3/16, 14/16, 13/16, 7/16, 15/16, 159,15);
fireplaceBrickModel.addBoxByID("centerIron", 7.5/16, 3/16, 14/16, 8.5/16, 8/16, 15/16, 159,15);
fireplaceBrickModel.addBoxByID("borderIron", 0/16, 5/16, 14/16, 16/16, 6/16, 15/16, 159,15);
fireplaceBrickModel.addBoxByID("log0", 3/16, 3/16, 3/16, 13/16, 6/16, 6/16, 17,5);
fireplaceBrickModel.addBoxByID("log1", 3/16, 3/16, 8/16, 13/16, 6/16, 11/16, 17,5);
return fireplaceBrickModel;
}
IDRegistry.genItemID("fireplaceBrick");
Item.createItem("fireplaceBrick", "Brick fireplace", {name: "brick_hearth", meta: 0}, {stack: 64});
Translation.addTranslation("Brick fireplace", {ru: "Камин из кирпичей"});
Recipes.addShaped({id: ItemID.fireplaceBrick, count: 1, data: 0}, ["vbv", "brb", "bbb"], ["b",45,0, "r",101,0]);
var fireplaceBrickModel=getFireplaceModel(45);
Furniture.placeUnifiedEntity(BlockID.lightFurniture, ItemID.fireplaceBrick,fireplaceBrickModel,fireplaceObject);

IDRegistry.genItemID("fireplaceCobblestone");
Item.createItem("fireplaceCobblestone", "Cobblestone fireplace", {name: "cobblestone_hearth", meta: 0}, {stack: 64});
Translation.addTranslation("Cobblestone fireplace", {ru: "Камин из булыжников"});
Recipes.addShaped({id: ItemID.fireplaceCobblestone, count: 1, data: 0}, ["vbv", "brb", "bbb"], ["b",4,0, "r",101,0]);
var fireplaceCobblestoneModel=getFireplaceModel(4);
Furniture.placeUnifiedEntity(BlockID.lightFurniture, ItemID.fireplaceCobblestone,fireplaceCobblestoneModel,fireplaceObject);

IDRegistry.genItemID("fireplaceStoneBrick");
Item.createItem("fireplaceStoneBrick", "Stonebrick fireplace", {name: "stoneblock_hearth", meta: 0}, {stack: 64});
Translation.addTranslation("Stonebrick fireplace", {ru: "Камин из каменных кирпичей"});
Recipes.addShaped({id: ItemID.fireplaceStoneBrick, count: 1, data: 0}, ["vbv", "brb", "bbb"], ["b",98,0, "r",101,0]);
var fireplaceStonebrickModel=getFireplaceModel(98);
Furniture.placeUnifiedEntity(BlockID.lightFurniture, ItemID.fireplaceStoneBrick,fireplaceStonebrickModel,fireplaceObject);

IDRegistry.genItemID("fireplaceNetherbrick");
Item.createItem("fireplaceNetherbrick", "Netherbrick fireplace", {name: "netherbrickstone_hearth", meta: 0}, {stack: 64});
Translation.addTranslation("Netherbrick fireplace", {ru: "Камин из адских кирпичей"});
Recipes.addShaped({id: ItemID.fireplaceNetherbrick, count: 1, data: 0}, ["vbv", "brb", "bbb"], ["b",112,0, "r",101,0]);
var fireplaceNetherbrickModel=getFireplaceModel(112);
Furniture.placeUnifiedEntity(BlockID.lightFurniture, ItemID.fireplaceNetherbrick,fireplaceNetherbrickModel,fireplaceObject);




// file: badroom/itemShelf.js

IDRegistry.genItemID("itemShelf");
Item.createItem("itemShelf", "Item Shelf", {name: "itemshelf", meta: 0}, {stack: 64});
Translation.addTranslation("Item Shelf", {ru: "Полка для предметов"});
Recipes.addShaped({id: ItemID.itemShelf, count: 1, data: 0}, ["bbb", "bsb", "bbb"], ["b",5,-1, "s", 280,0]);
var itemShelfModel = ModelAPI.newArray();
itemShelfModel.addBoxByID("left", 0/16, 1/16, 0/16, 1/16, 15/16, 6/16, 5,0);
itemShelfModel.addBoxByID("right", 15/16, 1/16, 0/16, 16/16, 15/16, 6/16, 5,0);
itemShelfModel.addBoxByID("center", 7.5/16, 1/16, 0/16, 8.5/16, 15/16, 6/16, 5,0);
itemShelfModel.addBoxByID("top", 0/16, 15/16, 0/16, 16/16, 16/16, 6/16, 5,0);
itemShelfModel.addBoxByID("bottom", 0/16, 0/16, 0/16, 16/16, 1/16, 6/16, 5,0);
itemShelfModel.addBoxByID("center1", 1/16, 7.5/16, 0/16, 7.5/16, 8.5/16, 6/16, 5,0);
itemShelfModel.addBoxByID("center2", 8.5/16, 7.5/16, 0/16, 15/16, 8.5/16, 6/16, 5,0);

Furniture.placeUnifiedEntity(BlockID.woodFurniture, ItemID.itemShelf,itemShelfModel,{gui:storageGUI, created:function(tile){
	tile.data.slot0={id:0, data:0};
	tile.data.slot1={id:0, data:0};
	tile.data.slot2={id:0, data:0};
	tile.data.slot3={id:0, data:0};
	tile.gRC=function(x,z){
		var deg=this.data.orientation*90;
		return {x:(x-.5)*Math.cos(deg),z:(z-.5)*Math.sin(deg)};
	};
	tile.updateAnimation=function(tile){
		var slot0=this.container.getSlot("itemShelf0");
		var slot1=this.container.getSlot("itemShelf1");
		var slot2=this.container.getSlot("itemShelf2");
		var slot3=this.container.getSlot("itemShelf3");
		if(Item.getNumericId(slot0.id)>=256){
			this.itemAnimation0.describeItem({
				id: slot0.id,
				data: slot0.data,
				size: .25,
				count:1,
				rotation:[0,0,Math.PI/2]
			});
			this.itemAnimation0.setPos(this.x + .2, this.y + 1+1/32, this.z + .5);
		}else{
			this.itemAnimation0.describeItem({
				id: slot0.id,
				data: slot0.data,
				size: 0.4,
				count:1,
				//rotation:[0,0,Math.PI/2]
			});
			coord=this.gRC(13/16,3/16);
			this.itemAnimation0.setPos(coord.x+this.x, this.y + .7, this.z + coord.z);
		}
		if(Item.getNumericId(slot0.id)!=0){
		if(!this.itemAnimation0.isLoaded){
			this.itemAnimation0.load();
		}
		}else{
			if(this.itemAnimation0.isLoaded)this.itemAnimation0.destroy();
		}
	};
}, destroy:function(tile){
	tile.itemAnimation0.destroy();
}, init:function(tile){
	tile.itemAnimation0 =new Animation.Item(tile.x + .2, tile.y + 1.12, tile.z + .43);
}, tick:function(tile){
	//Debug.m(tile);
	var slot0=tile.container.getSlot("itemShelf0");
	var slot1=tile.container.getSlot("itemShelf1");
	var slot2=tile.container.getSlot("itemShelf2");
	var slot3=tile.container.getSlot("itemShelf3");
	if(slot0.id!=tile.data.slot0.id||slot0.data!=tile.data.slot0.data){
		tile.data.slot0=slot0;
		tile.updateAnimation(tile);
	}
}});




// file: badroom/headphone.js

IDRegistry.genItemID("headphone");
Item.createItem("headphone", "Headphone", {name: "stick", meta: 0}, {stack: 64});
Translation.addTranslation("Headphone", {ru: "Наушники"});
Recipes.addShaped({id: ItemID.itemShelf, count: 1, data: 0}, ["qvq", "vqv", "vqv"], ["q",155,0]);
var headphoneModel = ModelAPI.newArray();
headphoneModel.addBoxByID("0", 3/16, 1.5/16, 6.5/16, 4/16, 2/16, 9.5/16, 35,15);
headphoneModel.addBoxByID("1", 3/16, 5/16, 6.5/16, 4/16, 5.5/16, 9.5/16, 35,15);
headphoneModel.addBoxByID("2", 3/16, 2/16, 6/16, 4/16, 5/16, 6.5/16, 35,15);
headphoneModel.addBoxByID("3", 3/16, 2/16, 9.5/16, 4/16, 5/16, 10/16, 35,15);
headphoneModel.addBoxByID("4", 3.1/16, 2/16, 6.5/16, 3.2/16, 5/16, 9.5/16, 152,0);
headphoneModel.addBoxByID("5", 3.3/16, 2/16, 6.5/16, 3.6/16, 5/16, 9.5/16, 35,7);
headphoneModel.addBoxByID("6", 2.5/16, 2.25/16, 6.75/16, 3.1/16, 4.75/16, 9.25/16, 35,7);

headphoneModel.addBoxByID("7", 2.57/16, 4.25/16, 7.5/16, 2.925/16, 10/16, 8.5/16, 35,15);
headphoneModel.addBoxByID("8", 2.3/16, 5.5/16, 7.5/16, 2.57/16, 10/16, 8.5/16, 35,15);
headphoneModel.addBoxByID("9", 2.57/16, 4.25/16, 7.4/16, 2.925/16, 10/16, 7.53/16, 152,0);
headphoneModel.addBoxByID("10", 2.57/16, 4.25/16, 8.48/16, 2.925/16, 10/16, 8.6/16, 152,0);
for(var i = 0; i<3;i++){
	x=i*0.75/16;
	if(i==2){
		headphoneModel.addBoxByID("7", 2.57/16+x*2, 10/16+x, 7.5/16, 8/16, 11/16+x, 8.5/16, 35,15);
		headphoneModel.addBoxByID("7", 2.57/16+x*2, 10/16+x, 7.4/16, 8/16, 10.25/16+x, 7.53/16, 152,0);
		headphoneModel.addBoxByID("7", 2.57/16+x*2, 10/16+x, 8.48/16, 8/16, 10.25/16+x, 8.6/16, 152,0);
		break;
	}
	headphoneModel.addBoxByID("7", 2.57/16+x*2, 10/16+x, 7.5/16, 4.1/16+x*2, 11/16+x, 8.5/16, 35,15);
	headphoneModel.addBoxByID("7", 2.57/16+x*2, 10/16+x, 7.4/16, 4.1/16+x*2, 10.25/16+x, 7.53/16, 152,0);
	headphoneModel.addBoxByID("7", 2.57/16+x*2, 10/16+x, 8.48/16, 4.1/16+x*2, 10.25/16+x, 8.6/16, 152,0);
	//headphoneModel.addBoxByID("7", 4.1/16+x*2, 10/16+x, 7.4/16, 4.2/16+x*2, 10.25/16+x, 8.6/16, 152,0);
	headphoneModel.addBoxByID("7", 4.1/16+x*2, 10/16+x, 7.4/16, 4.2/16+x*2, 11/16+x, 7.5/16, 152,0);
	headphoneModel.addBoxByID("7", 4.1/16+x*2, 10/16+x, 8.5/16, 4.2/16+x*2, 11/16+x, 8.6/16, 152,0);
}
headphoneModel.copyBox(["0","1","2","3","4","5","6","7","8","9","10"]);
headphoneModel.mirrorX(["0","1","2","3","4","5","6","7","8","9","10"],{x:.5,y:.5,z:.5});
headphoneModel.addBoxByID("17", 7/16, 11.5/16, 5/16, 9/16, 14/16, 5.5/16, 155,0);
headphoneModel.addBoxByID("15", 7/16, 11/16, 5/16, 9/16, 11.5/16, 9/16, 155,0);
headphoneModel.addBoxByID("5", 3/16, 3.25/16, 7.25/16, 3.25/16, 3.5/16, 12/16, 35,15);
headphoneModel.addBoxByID("5", 3/16, 3.25/16, 12/16, (7-1)/16, 3.5/16, 12.25/16, 35,15);
headphoneModel.addBoxByID("5", (6-1)/16, 3/16, 11.75/16, (7.5-1)/16, 3.75/16, 12.5/16, 35,15);
headphoneModel.addBoxByID("5", (7.5-1)/16, 3/16, 11.75/16, (8-1)/16, 3.75/16, 12.5/16, 152,0);
headphoneModel.transform("all",{z:-5/16,y:0,x:0});

//headphoneModel.addBoxByID("0", 0/16, 0/16, 0/16, 0/16, 0/16, 0/16, 35,0);
Furniture.placeUnifiedEntity(BlockID.woodFurniture, ItemID.headphone,headphoneModel,{});




// file: other/industrialLamp.js

IDRegistry.genItemID("industrialLamp");
Item.createItem("industrialLamp", "Indastrial lamp", {name: "industrialLamp", meta: 0}, {stack: 64});

Translation.addTranslation("Indastrial lamp", {ru: "Индустриальная лампа"});
Recipes.addShaped({id: ItemID.industrialLamp, count: 1, data: 0}, ["qqq", "qgq", "vbv"], ["b",155,0,"q", 406,0, "g",89,0]);

var indLampModel = ModelAPI.newArray();
indLampModel.addBoxByID("leg", 6/16, 0, 6/16, 10/16, 4/16, 10/16, 155);
indLampModel.addBoxByID("bottom", 4/16, 4/16, 4/16, 12/16, 6/16, 12/16, 155);
indLampModel.addBoxByID("leg0", 4/16, 6/16, 4/16, 6/16, 12/16, 6/16, 155);
indLampModel.addBoxByID("leg1", 4/16, 6/16, 10/16, 6/16, 12/16, 12/16, 155);
indLampModel.addBoxByID("leg2", 10/16, 6/16, 4/16, 12/16, 12/16, 6/16, 155);
indLampModel.addBoxByID("leg3", 10/16, 6/16, 10/16, 12/16, 12/16, 12/16, 155);
indLampModel.addBoxByID("top", 3/16, 12/16, 3/16, 13/16, 14/16, 13/16, 155);
indLampModel.addBoxByID("top2", 6/16, 14/16, 6/16, 10/16, 15/16, 10/16, 155);
indLampModel.addBoxByID("lamp", 7/16, 6/16, 7/16, 9/16, 8/16, 9/16, 41);

Furniture.placeUnifiedEntity(BlockID.lightFurniture, ItemID.industrialLamp,indLampModel,{}, false);




// file: other/lantern.js

createFurnitureLight("lantern","lamp","stone",6, "Lantern", ItemID.lantern, BlockID.lantern);
Translation.addTranslation("Lantern", {ru: "Ручной Фонарь"});
Recipes.addShaped({id: IDData.item.lantern, count: 1, data: 0}, ["viv", "ici", "ici"], ["i",265,0, "c",263,0]);
Block.setShape(BlockID.lantern,5/16,0,5/16,11/16,1,11/16);


Item.registerUseFunction("lantern", function(coords, item, block){
	World.setBlock(coords.relative.x,coords.relative.y,coords.relative.z, BlockID.lantern);
	World.addTileEntity(coords.relative.x,coords.relative.y,coords.relative.z);
	World.getTileEntity(coords.relative.x,coords.relative.y,coords.relative.z).data.side=coords.side;
});


var render = new ICRender.Model();
var renderUp = new ICRender.Model();
var renderRight = new ICRender.Model();
var renderLeft = new ICRender.Model();
var renderFront = new ICRender.Model();
var renderBack = new ICRender.Model();
BlockRenderer.setStaticICRender (BlockID.lantern, 0, render);
var model = BlockRenderer.createModel();
var modelUp = BlockRenderer.createModel();
var modelFront = BlockRenderer.createModel();
var modelBack = BlockRenderer.createModel();
var modelRight = BlockRenderer.createModel();
var modelLeft = BlockRenderer.createModel();
model.addBox (5/16, 0, 5/16, 11/16, 1/16, 11/16,  1, 6);
model.addBox (6/16, 1/16, 6/16, 10/16, 2/16, 10/16,  1, 6);
model.addBox (7/16, 2/16, 7/16, 9/16, 3/16, 9/16,  1, 6);
model.addBox (6/16, 3/16, 6/16, 10/16, 6/16, 10/16,  [["glass_lanterne",0]]);
model.addBox (7/16, 6/16, 7/16, 9/16, 9/16, 9/16,  [["glass_lanterne",0]]);
model.addBox (6/16, 9/16, 6/16, 10/16, 10/16, 10/16,  1, 6);
model.addBox (7/16, 10/16, 7/16, 9/16, 11/16, 9/16,  1, 6);

model.addBox (5/16, 1/16, 7.5/16, 6/16, 2/16, 8.5/16,  1, 6);
model.addBox (10/16, 1/16, 7.5/16, 11/16, 2/16, 8.5/16,  1, 6);
model.addBox (4/16, 2/16, 7.5/16, 5/16, 7/16, 8.5/16,  1, 6);
model.addBox (11/16, 2/16, 7.5/16, 12/16, 7/16, 8.5/16,  1, 6);
model.addBox (5/16, 7/16, 7.5/16, 6/16, 9/16, 8.5/16,  1, 6);
model.addBox (10/16, 7/16, 7.5/16, 11/16, 9/16, 8.5/16,  1, 6);

model.addBox (5/16, 10/16, 7.5/16, 6/16, 12/16, 8.5/16,  1, 6);
model.addBox (10/16, 10/16, 7.5/16, 11/16, 12/16, 8.5/16,  1, 6);
model.addBox (6/16, 12/16, 7.5/16, 7/16, 13/16, 8.5/16,  1, 6);
model.addBox (9/16, 12/16, 7.5/16, 10/16, 13/16, 8.5/16,  1, 6);
model.addBox (7/16, 12/16, 7.5/16, 9/16, 13/16, 8.5/16,  [["stained_clay",12]]);



modelUp.addBox (5/16, 1/4, 5/16, 11/16, 5/16, 11/16,  1, 6);
modelUp.addBox (6/16, 5/16, 6/16, 10/16, 6/16, 10/16,  1, 6);
modelUp.addBox (7/16, 6/16, 7/16, 9/16, 7/16, 9/16,  1, 6);
modelUp.addBox (6/16, 7/16, 6/16, 10/16, 10/16, 10/16,  [["glass_lanterne",0]]);
modelUp.addBox (7/16, 10/16, 7/16, 9/16, 13/16, 9/16,  [["glass_lanterne",0]]);
modelUp.addBox (6/16, 13/16, 6/16, 10/16, 14/16, 10/16,  1, 6);
modelUp.addBox (7/16, 14/16, 7/16, 9/16, 15/16, 9/16,  1, 6);

modelUp.addBox (5/16, 5/16, 7.5/16, 6/16, 6/16, 8.5/16,  1, 6);
modelUp.addBox (10/16, 5/16, 7.5/16, 11/16, 6/16, 8.5/16,  1, 6);
modelUp.addBox (4/16, 6/16, 7.5/16, 5/16, 11/16, 8.5/16,  1, 6);
modelUp.addBox (11/16, 6/16, 7.5/16, 12/16, 11/16, 8.5/16,  1, 6);
modelUp.addBox (5/16, 11/16, 7.5/16, 6/16, 13/16, 8.5/16,  1, 6);
modelUp.addBox (10/16, 11/16, 7.5/16, 11/16, 13/16, 8.5/16,  1, 6);
modelUp.addBox (5/16, 14/16, 7.5/16, 6/16, 16/16, 8.5/16,  1, 6);
modelUp.addBox (10/16, 14/16, 7.5/16, 11/16, 16/16, 8.5/16,  1, 6);


modelFront.addBox (5/16, 0, 10/16, 11/16, 1/16, 16/16,  1, 6);
modelFront.addBox (6/16, 1/16, 11/16, 10/16, 2/16, 15/16,  1, 6);
modelFront.addBox (7/16, 2/16, 12/16, 9/16, 3/16, 14/16,  1, 6);
modelFront.addBox (6/16, 3/16, 11/16, 10/16, 6/16, 15/16,  [["glass_lanterne",0]]);
modelFront.addBox (7/16, 6/16, 12/16, 9/16, 9/16, 14/16,  [["glass_lanterne",0]]);
modelFront.addBox (6/16, 9/16, 11/16, 10/16, 10/16, 15/16,  1, 6);
modelFront.addBox (7/16, 10/16, 12/16, 9/16, 11/16, 14/16,  1, 6);

modelFront.addBox (5/16, 1/16, 12.5/16, 6/16, 2/16, 13.5/16,  1, 6);
modelFront.addBox (10/16, 1/16, 12.5/16, 11/16, 2/16, 13.5/16,  1, 6);
modelFront.addBox (4/16, 2/16, 12.5/16, 5/16, 7/16, 13.5/16,  1, 6);
modelFront.addBox (11/16, 2/16, 12.5/16, 12/16, 7/16, 13.5/16,  1, 6);
modelFront.addBox (5/16, 7/16, 12.5/16, 6/16, 9/16, 13.5/16,  1, 6);
modelFront.addBox (10/16, 7/16, 12.5/16, 11/16, 9/16, 13.5/16,  1, 6);

modelFront.addBox (5/16, 10/16, 12.5/16, 6/16, 12/16, 13.5/16,  1, 6);
modelFront.addBox (10/16, 10/16, 12.5/16, 11/16, 12/16, 13.5/16,  1, 6);
modelFront.addBox (6/16, 12/16, 12.5/16, 7/16, 13/16, 13.5/16,  1, 6);
modelFront.addBox (9/16, 12/16, 12.5/16, 10/16, 13/16, 13.5/16,  1, 6);
modelFront.addBox (7/16, 12/16, 12.5/16, 9/16, 13/16, 13.5/16,  [["stained_clay",12]]);
modelFront.addBox (7.5/16, 11.5/16, 12/16, 8.5/16, 12/16, 1, 5,0);
modelFront.addBox (7.5/16, 12/16, 12/16, 8.5/16, 12.5/16, 12.5/16, 5,0);



modelBack.addBox (5/16, 0, 0, 11/16, 1/16, 6/16,  1, 6);
modelBack.addBox (6/16, 1/16, 1/16, 10/16, 2/16, 5/16,  1, 6);
modelBack.addBox (7/16, 2/16, 2/16, 9/16, 3/16, 4/16,  1, 6);
modelBack.addBox (6/16, 3/16, 1/16, 10/16, 6/16, 5/16,  [["glass_lanterne",0]]);
modelBack.addBox (7/16, 6/16, 2/16, 9/16, 9/16, 4/16,  [["glass_lanterne",0]]);
modelBack.addBox (6/16, 9/16, 1/16, 10/16, 10/16, 5/16,  1, 6);
modelBack.addBox (7/16, 10/16, 2/16, 9/16, 11/16, 4/16,  1, 6);

modelBack.addBox (5/16, 1/16, 2.5/16, 6/16, 2/16, 3.5/16,  1, 6);
modelBack.addBox (10/16, 1/16,2.5/16, 11/16, 2/16, 3.5/16,  1, 6);
modelBack.addBox (4/16, 2/16, 2.5/16, 5/16, 7/16, 3.5/16,  1, 6);
modelBack.addBox (11/16, 2/16, 2.5/16, 12/16, 7/16, 3.5/16,  1, 6);
modelBack.addBox (5/16, 7/16, 2.5/16, 6/16, 9/16, 3.5/16,  1, 6);
modelBack.addBox (10/16, 7/16, 2.5/16, 11/16, 9/16, 3.5/16,  1, 6);

modelBack.addBox (5/16, 10/16, 2.5/16, 6/16, 12/16, 3.5/16,  1, 6);
modelBack.addBox (10/16, 10/16, 2.5/16, 11/16, 12/16, 3.5/16,  1, 6);
modelBack.addBox (6/16, 12/16, 2.5/16, 7/16, 13/16, 3.5/16,  1, 6);
modelBack.addBox (9/16, 12/16, 2.5/16, 10/16, 13/16, 3.5/16,  1, 6);
modelBack.addBox (7/16, 12/16, 2.5/16, 9/16, 13/16, 3.5/16,  [["stained_clay",12]]);
modelBack.addBox (7.5/16, 11.5/16, 0, 8.5/16, 12/16, 4/16, 5,0);
modelBack.addBox (7.5/16, 12/16, 3.5/16, 8.5/16, 12.5/16, 4/16, 5,0);



modelRight.addBox (0, 0, 5/16, 6/16, 1/16, 11/16,  1, 6);
modelRight.addBox (1/16, 1/16, 6/16, 5/16, 2/16, 10/16,  1, 6);
modelRight.addBox (2/16, 2/16, 7/16, 4/16, 3/16, 9/16,  1, 6);
modelRight.addBox (1/16, 3/16, 6/16, 5/16, 6/16, 10/16,  [["glass_lanterne",0]]);
modelRight.addBox (2/16, 6/16, 7/16, 4/16, 9/16, 9/16,  [["glass_lanterne",0]]);
modelRight.addBox (1/16, 9/16, 6/16, 5/16, 10/16, 10/16,  1, 6);
modelRight.addBox (2/16, 10/16, 7/16, 4/16, 11/16, 9/16,  1, 6);

modelRight.addBox (2.5/16, 1/16, 5/16, 3.5/16, 2/16, 6/16,  1, 6);
modelRight.addBox (2.5/16, 1/16,10/16, 3.5/16, 2/16, 11/16,  1, 6);
modelRight.addBox (2.5/16, 2/16, 4/16, 3.5/16, 7/16, 5/16,  1, 6);
modelRight.addBox (2.5/16, 2/16, 11/16, 3.5/16, 7/16, 12/16,  1, 6);
modelRight.addBox (2.5/16, 7/16, 5/16, 3.5/16, 9/16, 6/16,  1, 6);
modelRight.addBox (2.5/16, 7/16, 10/16, 3.5/16, 9/16, 11/16,  1, 6);

modelRight.addBox (2.5/16, 10/16, 5/16, 3.5/16, 12/16, 6/16,  1, 6);
modelRight.addBox (2.5/16, 10/16, 10/16, 3.5/16, 12/16, 11/16,  1, 6);
modelRight.addBox (2.5/16, 12/16, 6/16, 3.5/16, 13/16, 7/16,  1, 6);
modelRight.addBox (2.5/16, 12/16, 9/16, 3.5/16, 13/16, 10/16,  1, 6);
modelRight.addBox (2.5/16, 12/16, 7/16, 3.5/16, 13/16, 9/16,  [["stained_clay",12]]);
modelRight.addBox (0, 11.5/16, 7.5/16, 4/16, 12/16, 8.5/16, 5,0);
modelRight.addBox (3.5/16, 12/16, 7.5/16, 4/16, 12.5/16, 8.5/16, 5,0);



modelLeft.addBox (10/16, 0, 5/16, 16/16, 1/16, 11/16,  1, 6);
modelLeft.addBox (11/16, 1/16, 6/16, 15/16, 2/16, 10/16,  1, 6);
modelLeft.addBox (12/16, 2/16, 7/16, 14/16, 3/16, 9/16,  1, 6);
modelLeft.addBox (11/16, 3/16, 6/16, 15/16, 6/16, 10/16,  [["glass_lanterne",0]]);
modelLeft.addBox (12/16, 6/16, 7/16, 14/16, 9/16, 9/16,  [["glass_lanterne",0]]);
modelLeft.addBox (11/16, 9/16, 6/16, 15/16, 10/16, 10/16,  1, 6);
modelLeft.addBox (12/16, 10/16, 7/16, 14/16, 11/16, 9/16,  1, 6);

modelLeft.addBox (12.5/16, 1/16, 5/16, 13.5/16, 2/16, 6/16,  1, 6);
modelLeft.addBox (12.5/16, 1/16,10/16, 13.5/16, 2/16, 11/16,  1, 6);
modelLeft.addBox (12.5/16, 2/16, 4/16, 13.5/16, 7/16, 5/16,  1, 6);
modelLeft.addBox (12.5/16, 2/16, 11/16, 13.5/16, 7/16, 12/16,  1, 6);
modelLeft.addBox (12.5/16, 7/16, 5/16, 13.5/16, 9/16, 6/16,  1, 6);
modelLeft.addBox (12.5/16, 7/16, 10/16, 13.5/16, 9/16, 11/16,  1, 6);

modelLeft.addBox (12.5/16, 10/16, 5/16, 13.5/16, 12/16, 6/16,  1, 6);
modelLeft.addBox (12.5/16, 10/16, 10/16, 13.5/16, 12/16, 11/16,  1, 6);
modelLeft.addBox (12.5/16, 12/16, 6/16, 13.5/16, 13/16, 7/16,  1, 6);
modelLeft.addBox (12.5/16, 12/16, 9/16, 13.5/16, 13/16, 10/16,  1, 6);
modelLeft.addBox (12.5/16, 12/16, 7/16, 13.5/16, 13/16, 9/16,  [["stained_clay",12]]);
modelLeft.addBox (12/16, 11.5/16, 7.5/16, 1, 12/16, 8.5/16, 5,0);
modelLeft.addBox (12/16, 12/16, 7.5/16, 12.5/16, 12.5/16, 8.5/16, 5,0);

render.addEntry(model);
renderFront.addEntry(modelFront);
renderBack.addEntry(modelBack);
renderRight.addEntry(modelLeft);
renderLeft.addEntry(modelRight);
renderUp.addEntry(modelUp);
BlockRenderer.enableCoordMapping (BlockID.lantern, -1, render);

TileEntity.registerPrototype(BlockID.lantern, {
	init:function(){
		if(this.data.side==0){
			BlockRenderer.mapAtCoords (this.x, this.y, this.z, renderUp);
		}else if(this.data.side==2){
			BlockRenderer.mapAtCoords (this.x, this.y, this.z, renderFront);
		}else if(this.data.side==3){
			BlockRenderer.mapAtCoords (this.x, this.y, this.z, renderBack);
		}else if(this.data.side==4){
			BlockRenderer.mapAtCoords (this.x, this.y, this.z, renderRight);
		}else if(this.data.side==5){
			BlockRenderer.mapAtCoords (this.x, this.y, this.z, renderLeft);
		}
	},
	tick:function(){
		if(World.getWorldTime()%15==0){
			if(this.data.side==1){
				Particles.addFarParticle(7,this.x+.5, this.y+.3, this.z+.5);
				}else if(this.data.side==0){
					Particles.addFarParticle(7,this.x+.5, this.y+.7, this.z+.5);
				}else if(this.data.side==2){
					Particles.addFarParticle(7,this.x+.5, this.y+.3, this.z+.8);
				}else if(this.data.side==3){
					Particles.addFarParticle(7,this.x+.5, this.y+.3, this.z+.2);
				}else if(this.data.side==4){
					Particles.addFarParticle(7,this.x+.8, this.y+.3, this.z+.5);
				}else{
					Particles.addFarParticle(7,this.x+.2, this.y+.3, this.z+.5);
				}
		}
	}
});




// file: other/innerRoom.js

createFurnitureWood("innerRoom","miniblock","glass",0, "Inner Room", ItemID.innerRoom, BlockID.innerRoom);
Recipes.addShaped({id: ItemID.innerRoom, count: 1, data: 0}, ["ggg", "gvg", "gvg"], ["g", 21,0,"v", 266,0]);
Translation.addTranslation("Inner Room", {ru: "Внутренняя комната"});
var currentPlayerPosition;
var render = new ICRender.Model();
BlockRenderer.setStaticICRender (BlockID.innerRoom, 0, render);
var model = BlockRenderer.createModel();
model.addBox (7/16, 0, 7/16, 9/16, 1/32, 9/16,  41, 0);
var group = ICRender.getGroup("innerRoom");
group.add(BlockID.innerRoom,0);
var innerRoomBorderRender=[
	{side:ICRender.AND(ICRender.BLOCK(0,1,0,group,true),ICRender.BLOCK(1,0,0,group,true)),
	box:[15/16,15/16,0,16/16,16/16,16/16]
	},
	{side:ICRender.AND(ICRender.BLOCK(0,1,0,group,true),ICRender.BLOCK(-1,0,0,group,true)),
	box:[0/16,15/16,0,1/16,16/16,16/16]
	},
	{side:ICRender.AND(ICRender.BLOCK(0,1,0,group,true),ICRender.BLOCK(0,0,1,group,true)),
	box:[0/16,15/16,15/16,16/16,16/16,16/16]
	},
	{side:ICRender.AND(ICRender.BLOCK(0,1,0,group,true),ICRender.BLOCK(0,0,-1,group,true)),
	box:[0/16,15/16,0/16,16/16,16/16,1/16]
	},
	{side:ICRender.AND(ICRender.BLOCK(0,-1,0,group,true),ICRender.BLOCK(1,0,0,group,true)),
	box:[15/16,0/16,0,16/16,1/16,16/16]
	},
	{side:ICRender.AND(ICRender.BLOCK(0,-1,0,group,true),ICRender.BLOCK(-1,0,0,group,true)),
	box:[0/16,0/16,0,1/16,1/16,16/16]
	},
	{side:ICRender.AND(ICRender.BLOCK(0,-1,0,group,true),ICRender.BLOCK(0,0,1,group,true)),
	box:[0/16,0/16,15/16,16/16,1/16,16/16]
	},
	{side:ICRender.AND(ICRender.BLOCK(0,-1,0,group,true),ICRender.BLOCK(0,0,-1,group,true)),
	box:[0/16,0/16,0/16,16/16,1/16,1/16]
	},
	{side:ICRender.AND(ICRender.BLOCK(-1,0,0,group,true),ICRender.BLOCK(0,0,-1,group,true)),
	box:[0/16,0/16,0/16,1/16,16/16,1/16]
	},
	{side:ICRender.AND(ICRender.BLOCK(1,0,0,group,true),ICRender.BLOCK(0,0,1,group,true)),
	box:[15/16,0/16,15/16,16/16,16/16,16/16]
	},
	{side:ICRender.AND(ICRender.BLOCK(-1,0,0,group,true),ICRender.BLOCK(0,0,1,group,true)),
	box:[0/16,0/16,15/16,1/16,16/16,16/16]
	},
	{side:ICRender.AND(ICRender.BLOCK(0,0,-1,group,true),ICRender.BLOCK(1,0,0,group,true)),
	box:[15/16,0/16,0/16,16/16,16/16,1/16]
	},
	{side:ICRender.BLOCK(0,1,0,group,true),
	box:[1/16,15/16,1/16,15/16,16/16,15/16],
	id:20
	},
	{side:ICRender.BLOCK(0,-1,0,group,true),
	box:[1/16,0/16,1/16,15/16,1/16,15/16],
	id:20
	},
	{side:ICRender.BLOCK(-1,0,0,group,true),
	box:[0/16,1/16,1/16,1/16,15/16,15/16],
	id:20
	},
	{side:ICRender.BLOCK(1,0,0,group,true),
	box:[15/16,1/16,1/16,16/16,15/16,15/16],
	id:20
	},
	{side:ICRender.BLOCK(0,0,-1,group,true),
	box:[1/16,1/16,0/16,15/16,15/16,1/16],
	id:20
	},
	{side:ICRender.BLOCK(0,0,1,group,true),
	box:[1/16,1/16,15/16,15/16,15/16,16/16],
	id:20
	}
];
for(var i in innerRoomBorderRender){
	var c = innerRoomBorderRender[i];
	var sModel= BlockRenderer.createModel();
	var box=c.box;
	sModel.addBox(box[0],box[1],box[2],box[3],box[4],box[5],c.id||155,0);
	render.addEntry(sModel).setCondition(c.side);
}
var seeds=0;
var playerInDimension=false;
Timer={};
Timer.timers=[];
Timer.addTimer=function(func, time, arg){
	this.timers.push({func:func, time:time, arg:arg});
};
Callback.addCallback("tick", function() {
	for(var i in Timer.timers){
		var t = Timer.timers[i];
		t.time--;
		if(t.time==0){
			t.func(t.arg);
			Timer.timers.splice(Timer.timers.indexOf(i), 1);
		}
	}
});
var PlayerInDimension;
Saver.addSavesScope("PlayerInDimension",
	function read(scope){
		if(scope&&scope.origin){PlayerInDimension = scope.origin;}
	},
	
	function save(){
		return {origin:PlayerInDimension};
	}
);
getGamemode=function(){
	let gm=ModAPI.requireGlobal("Level.getGameMode");
	return gm(Player.get());
};
setGamemode=function(i){
	let gm=ModAPI.requireGlobal("Level.setGameMode");
	return gm(i);
};
TileEntity.registerPrototype(BlockID.innerRoom, {
	init:function(){
		this.animateBlock();
	},
	click:function(){
		if(!PlayerInDimension){
			PlayerInDimension={
			armors:[],
			items:[],
			bool:false,
			position:{},
			currentRoom:null,
			origin:{},
			seeds:0,
			gamemode:0
		};
		}
		if(!PlayerInDimension.bool){
		PlayerInDimension.position=Player.getPosition();
		PlayerInDimension.gamemode=getGamemode();
		setGamemode(1);
		Game.message("Вы попали внутрь блока, чтобы выбраться, напишите в чат /exit");
		if(typeof this.data.seed!="number"){
			this.data.seed=PlayerInDimension.seeds;
			seed=this.data.seed;
			PlayerInDimension.seeds++;
			Player.setPosition(34567,8,34567+16*seed);
			var o={x:34567,y:1,z:34567+16*seed};
			Timer.addTimer(function(o){
			for(var x = 0; x<17; x++){
				for(var z = 0; z<17; z++){
					World.setBlock(o.x+x, o.y,o.z+z, 155,5);
				}
			}
			for(var x = 0; x<17; x++){
				for(var z = 0; z<17; z++){
					World.setBlock(o.x+x, o.y+17,o.z+z, 155,5);
				}
			}
			for(var x = 0; x<17; x++){
				for(var y = 0; y<17; y++){
					World.setBlock(o.x+x, o.y+y,o.z, 155,5);
				}
			}
			for(var x = 0; x<17; x++){
				for(var y = 0; y<17; y++){
					World.setBlock(o.x+x, o.y+y,o.z+17, 155,5);
				}
			}
			for(var z = 0; z<17; z++){
				for(var y = 0; y<17; y++){
					World.setBlock(o.x, o.y+y,o.z+z, 155,5);
				}
			}
			for(var z = 0; z<17; z++){
				for(var y = 0; y<17; y++){
					World.setBlock(o.x+17, o.y+y,o.z+z, 155,5);
				}
			}
			for(var z = 1; z<17; z++){
				for(var y = 1; y<17; y++){
					for(var x = 1; x<17; x++){
						World.setBlock(o.x+x, o.y+y,o.z+z, 0);
					}
				}
			}
		},20,o);
		}
		Player.setPosition(34567+8,8,34567+8+16*this.data.seed);
		PlayerInDimension.origin={x:34568,y:2,z:34568+16*this.data.seed};
		PlayerInDimension.currentRoom=this;
		PlayerInDimension.bool=true;
		PlayerInDimension.items=[];
		PlayerInDimension.armors=[];
		for(var i =0; i<4; i++){
			var item = Player.getArmorSlot (i);
				PlayerInDimension.armors[i]={
					id:item.id,
					data:item.data,
					count:item.count
				};
				Player.setArmorSlot(i, 0,0,0);
		}
		for(var i = 9; i<45; i++){
			var item = Player.getInventorySlot(i);
			if(item.count>0){
				PlayerInDimension.items.push({
					id:item.id,
					data:item.data,
					count:item.count
				});
				Player.setInventorySlot(i, 0,0,0);
			}
		}
	}
	},
	animateBlock:function(destroy){
		var blocks=this.data.blocks||[];
		if(this.animations){
			for(var i in this.animations){
				if(this.animations[i].isLoaded){
					this.animations[i].destroy();
				}
			}
		}
		this.animations=[];
		if(!destroy){
		for(var i in blocks){
			this.animations.push(new Animation.Item(this.x+(blocks[i].x+.5)/16, this.y+(blocks[i].y+.5)/16, this.z+(blocks[i].z+.5)/16));
			this.animations[this.animations.length-1].describeItem({
				id: blocks[i].id,
				count: 1,
				data: blocks[i].data,
				size: 1/16,
			});
			this.animations[this.animations.length-1].load();
		}
		}
	},
	destroy:function(){
		this.animateBlock(true);
	}
});
Callback.addCallback("NativeCommand", function (c) {
	str = c.split(" ");
	if(str[0] == "/exit"&&PlayerInDimension.bool){
		if(!PlayerInDimension){
			PlayerInDimension={
			armors:[],
			items:[],
			bool:false,
			position:{},
			currentRoom:null,
			origin:{},
			seeds:0
		};
		}
		PlayerInDimension.bool=false;
		setGamemode(PlayerInDimension.gamemode);
		Player.setPosition(PlayerInDimension.position.x,PlayerInDimension.position.y,PlayerInDimension.position.z);
		for(var i =9;i<45; i++){
			var it=PlayerInDimension.items[i-9];
			if(it&&it.id&&it.count){Player.setInventorySlot(i,it.id,it.count,it.data);}else{
				Player.setInventorySlot(i, 0,0,0);
			}
		}
		for(var i = 0; i<4; i++){
			var it=PlayerInDimension.armors[i];
			Player.setArmorSlot(i, 0,0,0); 
			Player.setArmorSlot(i,it.id,it.count,it.data);
		}
		Entity.clearEffects(Player.get());
		var blocks=[];
		for(var x=0; x<16; x++){
			for(var y=0; y<16; y++){
				for(var z=0; z<16; z++){
					var o = PlayerInDimension.origin;
					block=World.getBlock(o.x+x, o.y+y, o.z+z);
					if(block.id!=0){
						blocks.push({x:x,y:y,z:z,id:block.id,data:block.data});
					}
				}
			}
		}
		PlayerInDimension.currentRoom.data.blocks=blocks;
		PlayerInDimension.currentRoom.animateBlock();
	}
});
Callback.addCallback("DestroyBlock",function(c,b,p){
	if(PlayerInDimension&&PlayerInDimension.bool&&b.id==155&&b.data==5){
		Game.prevent();
	}
});
/*Callback.addCallback("tick",function(){
	if(PlayerInDimension.bool){
		
	}
});*/




