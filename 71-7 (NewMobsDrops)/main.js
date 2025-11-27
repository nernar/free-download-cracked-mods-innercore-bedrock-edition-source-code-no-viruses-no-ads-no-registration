/*
BUILD INFO:
  dir: dev
  target: main.js
  files: 22
*/



// file: modelAPI.js

var BLOCK_TYPE_WOOD = Block.createSpecialType({
	base: 5,
	opaque: true
});

var BLOCK_TYPE_LIGHT = Block.createSpecialType({
	destroytime: 2,
	explosionres: 0.5,
	opaque: false,
	lightopacity: 0,
	renderlayer: 3,
	lightlevel: 15
});

var BLOCK_TYPE_STONE = Block.createSpecialType({
	bace: 1,
	solid: true,
	destroytime: 1.5,
	explosionres: 2
}, "stone");

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




// file: BLOCK/blocks.js

IDRegistry.genBlockID("bzombie");
Block.createBlock("bzombie", [
    {name: "Зомбаковый блок", texture: [["new_zombieblock", 0]], inCreative: true}
], BLOCK_TYPE_STONE);
ToolAPI.registerBlockMaterial(BlockID.bzombie, "stone");
Block.setDestroyLevel("bzombie", 2);

IDRegistry.genBlockID("bskelet");
Block.createBlock("bskelet", [
    {name: "Скелетовый блок", texture: [["new_skeletonblock", 0]], inCreative: true}
], BLOCK_TYPE_STONE);
ToolAPI.registerBlockMaterial(BlockID.bskelet, "stone");
Block.setDestroyLevel("bskelet", 2);

IDRegistry.genBlockID("bspider");
Block.createBlock("bspider", [
    {name: "Пауковый блок", texture: [["new_spiderblock", 0]], inCreative: true}
], BLOCK_TYPE_STONE);
ToolAPI.registerBlockMaterial(BlockID.bspider, "stone");
Block.setDestroyLevel("bspider", 2);

IDRegistry.genBlockID("bcreeper");
Block.createBlock("bcreeper", [
    {name: "Криперовый блок", texture: [["new_creeperblock", 0]], inCreative: true}
], BLOCK_TYPE_STONE);
ToolAPI.registerBlockMaterial(BlockID.bcreeper, "stone");
Block.setDestroyLevel("bcreeper", 2);

IDRegistry.genBlockID("bsprut");
Block.createBlock("bsprut", [
    {name: "Спрутовый блок", texture: [["new_sprutblock", 0]], inCreative: true}
], BLOCK_TYPE_STONE);
ToolAPI.registerBlockMaterial(BlockID.bsprut, "stone");
Block.setDestroyLevel("bsprut", 2);

IDRegistry.genBlockID("bslime");
Block.createBlock("bslime", [
    {name: "Слизовый блок", texture: [["new_slimeblock", 0]], inCreative: true}
], BLOCK_TYPE_STONE);
ToolAPI.registerBlockMaterial(BlockID.bslime, "stone");
Block.setDestroyLevel("bslime", 2);

IDRegistry.genBlockID("bocelot");
Block.createBlock("bocelot", [
    {name: "Оцелотовый блок", texture: [["new_ocelotblock", 0]], inCreative: true}
], BLOCK_TYPE_STONE);
ToolAPI.registerBlockMaterial(BlockID.bocelot, "stone");
Block.setDestroyLevel("bocelot", 2);

IDRegistry.genBlockID("bblaze");
Block.createBlock("bblaze", [
    {name: "Ифритовый блок", texture: [["new_blazeblock", 0]], inCreative: true}
], BLOCK_TYPE_STONE);
ToolAPI.registerBlockMaterial(BlockID.bblaze, "stone");
Block.setDestroyLevel("bblaze", 2);

IDRegistry.genBlockID("bend");
Block.createBlock("bend", [
    {name: "Эндерменовый блок", texture: [["new_endblock", 0]], inCreative: true}
], BLOCK_TYPE_STONE);
ToolAPI.registerBlockMaterial(BlockID.bend, "stone");
Block.setDestroyLevel("bend", 2)




// file: BLOCK/furnace.js

var FURNACE_FUEL_MAP = {    5: 300,     6: 100,     17: 300,    263: 1600,  280: 100,   268: 200,   269: 200,   270: 200,   271: 200,   85: 300,    107: 300,   134: 300,   135: 300,   158: 150,   162: 300,   163: 300,   164: 300,   184: 300,   185: 300,   186: 300,   187: 300,   53: 300,    54: 300,    58: 300 };

var guiTiyFurnace = new UI.StandartWindow({
    standart: {
        header: {text: {text: "Mobs Furnace"}},
        inventory: {standart: true},
        background: {standart: true}
    },
    
    drawing: [
        {type: "bitmap", x: 530, y: 246, bitmap: "furnace_bar_background", scale: 3.2},
        {type: "bitmap", x: 450, y: 250, bitmap: "fire_background", scale: 3.2}
    ],
    
    elements: {
     "progressScale": {type: "scale", x: 530, y: 246, direction: 0, value: 0.5, bitmap: "furnace_bar_scale", scale: 3.2},
        "burningScale": {type: "scale", x: 450, y: 250, direction: 1, value: 0.5, bitmap: "fire_scale", scale: 3.2},
        "slotSource1": {type: "slot", x: 379, y: 175},
        "slotSource2": {type: "slot", x: 441, y: 175},
        "slotSource3": {type: "slot", x: 503, y: 175},
        "slotFuel": {type: "slot", x: 441, y: 312},
        "slotResult": {type: "slot", x: 625, y: 242},
    }
});

IDRegistry.genBlockID("MobsFurnace");
Block.createBlock("MobsFurnace", [
	{name: "MobsFurnace", texture: [["quartz_block", 0]], inCreative: false},
	{name: "MobsFurnace", texture: [["quartz_block", 0]], inCreative: false},
	{name: "MobsFurnace", texture: [["quartz_block", 0]], inCreative: false},
	{name: "MobsFurnace", texture: [["quartz_block", 0]], inCreative: false}
], BLOCK_TYPE_LIGHT);
IDRegistry.genItemID("MobsFurnace");
Item.createItem("MobsFurnace", "MobsFurnace", {name: "MobsFurnace", meta: 0}, {stack: 64});

var MobsFurnaceModel = ModelAPI.newArray();
MobsFurnaceModel.addBoxByID ("1", 0.3125,0.0625,0.3125,0.6875,0.5625,0.6875, 51);
MobsFurnaceModel.addBoxByID ("2", 0.5625,0.375,0.6875,0.75,0.4375,0.75, 216);
MobsFurnaceModel.addBoxByID ("3", 0.375,0.25,0.6875,0.625,0.375,0.75, 216);
MobsFurnaceModel.addBoxByID ("4", 0.6875,0.4375,0.6875,0.75,0.5625,0.75, 216);
MobsFurnaceModel.addBoxByID ("5", 0.25,0.3125,0.25,0.3125,0.375,0.5625, 216);
MobsFurnaceModel.addBoxByID ("6", 0.4375,0.4375,0.6875,0.5625,0.5625,0.75, 216);
MobsFurnaceModel.addBoxByID ("7", 0.25,0.5625,0.6875,0.75,0.8125,0.75, 216);
MobsFurnaceModel.addBoxByID ("8", 0.6875,0.0625,0.6875,0.75,0.1875,0.75, 216);
MobsFurnaceModel.addBoxByID ("9", 0.3125,0.0625,0.25,0.6875,0.8125,0.3125, 216);
MobsFurnaceModel.addBoxByID ("10", 0.6875,0.0625,0.25,0.75,0.3125,0.6875, 216);
MobsFurnaceModel.addBoxByID ("11", 0.3125,0,0.3125,0.6875,0.0625,0.6875, 216);
MobsFurnaceModel.addBoxByID ("12", 0.3125,0.8125,0.3125,0.6875,0.875,0.6875, 216);
MobsFurnaceModel.addBoxByID ("13", 0.6875,0.375,0.25,0.75,0.8125,0.6875, 216);
MobsFurnaceModel.addBoxByID ("14", 0.25,0.4375,0.6875,0.3125,0.5625,0.75, 216);
MobsFurnaceModel.addBoxByID ("15", 0.25,0.0625,0.6875,0.3125,0.1875,0.75, 216);
MobsFurnaceModel.addBoxByID ("16", 0.375,0.0625,0.6875,0.4375,0.1875,0.75, 216);
MobsFurnaceModel.addBoxByID ("17", 0.5625,0.0625,0.6875,0.625,0.1875,0.75, 216);
MobsFurnaceModel.addBoxByID ("18", 0.25,0.375,0.25,0.3125,0.8125,0.6875, 216);
MobsFurnaceModel.addBoxByID ("19", 0.25,0.0625,0.25,0.3125,0.3125,0.6875, 216);
MobsFurnaceModel.addBoxByID ("20", 0.25,0.375,0.6875,0.4375,0.4375,0.75, 216);
MobsFurnaceModel.addBoxByID ("21", 0.6875,0.3125,0.25,0.75,0.375,0.5625, 216);
Furniture.addReplacementItem({id:"MobsFurnace"},{id:"MobsFurnace"}, Furniture.placeRotatableBlock(BlockID.MobsFurnace, MobsFurnaceModel));

var MobsRecipes = {
    recipes: {},
  
   set: function(abdulla1, abdulla2, abdulla3, result){
      this.recipes[JSON.stringify([abdulla1, abdulla2, abdulla3])] = {id: result.id, count: result.count, data: result.data || 0};
   },
 
   get: function(abdulla1, abdulla2, abdulla3){
     return this.recipes[JSON.stringify([abdulla1, abdulla2, abdulla3])];
   }
};

/*RECIPES FOR MOBS FURNACE*/

//MobsRecipes.set(slot1, slot2, slot3, {id: resultat id, count: 1, data: 0});

MobsRecipes.set(ItemID.spider, ItemID.spider, ItemID.spider, {
    id: ItemID.spider_ingot, count: 1, data: 0
});
MobsRecipes.set(ItemID.zombie, ItemID.zombie, ItemID.zombie, {
    id: ItemID.zombie_ingot, count: 1, data: 0
});
MobsRecipes.set(ItemID.skelet, ItemID.skelet, ItemID.skelet, {
    id: ItemID.skelet_ingot, count: 1, data: 0
});
MobsRecipes.set(ItemID.creeper, ItemID.creeper, ItemID.creeper, {
    id: ItemID.creeper_ingot, count: 1, data: 0
});
MobsRecipes.set(ItemID.ocelota, ItemID.ocelota, ItemID.ocelota, {
    id: ItemID.ocelot_ingot, count: 1, data: 0
});
MobsRecipes.set(ItemID.blaze, ItemID.blaze, ItemID.blaze, {
    id: ItemID.blaze_ingot, count: 1, data: 0
});
MobsRecipes.set(ItemID.enderman, ItemID.enderman, ItemID.enderman, {
    id: ItemID.end_ingot, count: 1, data: 0
});
MobsRecipes.set(ItemID.sprut, ItemID.sprut, ItemID.sprut, {
    id: ItemID.sprut_ingot, count: 1, data: 0
});
MobsRecipes.set(ItemID.slime_crystal, ItemID.slime_crystal, ItemID.slime_crystal, {
    id: ItemID.slime_ingot, count: 1, data: 0
});

/*THE END*/

TileEntity.registerPrototype(BlockID.MobsFurnace, {
    defaultValues: {
        progress: 0,
        burn: 0,
        burnMax: 0
    },
    
    getGuiScreen: function(){
        return guiTiyFurnace;
    },
    
    tick: function(){
        let source1 = this.container.getSlot("slotSource1");
        var source2 = this.container.getSlot("slotSource2");
        let source3 = this.container.getSlot("slotSource3");
        var resultSlot = this.container.getSlot("slotResult");
        let f = MobsRecipes.get(source1.id,source2.id,source3.id);
        if(this.data.burn > 0){
        if(f!=null) {
   if((((resultSlot.id == f.id && resultSlot.data == f.data) && resultSlot.count < 64) || resultSlot.id == 0) && this.data.progress ++ >= 150){
            source1.count--;
            source2.count--;
            source3.count--;
            resultSlot.id = f.id;
            resultSlot.data = f.data;
            resultSlot.count++;
            this.container.validateAll();
            this.data.progress = 0;
                }
            }
        }
        else {
            this.data.progress = 0;
        }
        if(this.data.burn > 0){
            this.data.burn--;
        }
        else if(f){
            this.data.burn = this.data.burnMax = this.getFuel("slotFuel");
        }
        
        this.container.setScale("burningScale", this.data.burn / this.data.burnMax || 0);
        this.container.setScale("progressScale", this.data.progress / 90);
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




// file: BLOCK/trade_block.js

IDRegistry.genBlockID("TradeRED");
Block.createBlock("TradeRED", [
	{name: "TradeRED", texture: [["quartz_block", 0]], inCreative: false},
	{name: "TradeRED", texture: [["quartz_block", 0]], inCreative: false},
	{name: "TradeRED", texture: [["quartz_block", 0]], inCreative: false},
	{name: "TradeRED", texture: [["quartz_block", 0]], inCreative: false}
], BLOCK_TYPE_WOOD);
IDRegistry.genItemID("TradeRED");
Item.createItem("TradeRED", "Trade Block", {name: "tradeRED", meta: 0}, {stack: 64});

var TradeREDModel = ModelAPI.newArray();
TradeREDModel.addBoxByTextures("1", 0.125,0.125,0.875,0.875,1,1, [['planks_oak',0],['planks_oak',0],['plank_cake',0],['plank_cake',0],['planks_oak',0],['planks_oak',0]]);
TradeREDModel.addBoxByTextures("2", 0,0.125,0,0.125,1,1, [['planks_oak',0],['planks_oak',0],['plank_cake',0],['plank_cake',0],['planks_oak',0],['planks_oak',0]]);
TradeREDModel.addBoxByID("3", 0.125,0.5625,0.375,0.875,0.625,0.875, 5, 0);
TradeREDModel.addBoxByTextures("4", 0.875,0.125,0,1,1,1, [['planks_oak',0],['planks_oak',0],['plank_cake',0],['plank_cake',0],['planks_oak',0],['planks_oak',0]]);
TradeREDModel.addBoxByID("5", 0.125,0.875,0.375,0.875,0.9375,0.875, 5, 0);
TradeREDModel.addBoxByID("6", 0.125,0.125,0.375,0.875,0.1875,0.875, 5, 0);
TradeREDModel.addBoxByID("7", 0.875,1,0.5,1,2,0.625, 17, 0);
TradeREDModel.addBoxByID("8", 0.0625,0,0.8125,0.1875,0.125,0.9375, 17, 0);
TradeREDModel.addBoxByID("9", 0,1,0.5,0.125,2,0.625, 17, 0);
TradeREDModel.addBoxByID("10", 0.8125,0,0.8125,0.9375,0.125,0.9375, 17, 0);
TradeREDModel.addBoxByID("11", 0.0625,0,0.375,0.1875,0.125,0.5, 17, 0);
TradeREDModel.addBoxByID("12", 0.8125,0,0.375,0.9375,0.125,0.5, 17, 0);
TradeREDModel.addBoxByID("13", 0.3125,2,0,0.6875,2.125,0.625, 35, 0);
TradeREDModel.addBoxByID("14", 0,2,0,0.3125,2.125,0.625, 35, 14);
TradeREDModel.addBoxByID("15", 0.6875,2,0,1,2.125,0.625, 35, 14);
TradeREDModel.addBoxByID("16", 0.6875,1.875,0.625,1,2,1, 35, 14);
TradeREDModel.addBoxByID("17", 0,1.875,0.625,0.3125,2,1, 35, 14);
TradeREDModel.addBoxByID("18", 0.3125,1.875,0.625,0.6875,2,1, 35, 0);
TradeREDModel.addBoxByID("19", 0.6875,1,0.6875,0.75,1.0625,0.75, 41);
TradeREDModel.addBoxByID("20", 0.625,0.9375,0.625,0.8125,1,0.8125, 41);
TradeREDModel.addBoxByID("21", 0.1875,0.625,0.5,0.8125,0.6875,0.875, 35, 1);
TradeREDModel.addBoxByID("22", 0.125,0.1875,0.5,0.375,0.3125,0.875, 35, 3);
TradeREDModel.addBoxByID("23", 0.625,0.1875,0.5,0.875,0.3125,0.875, 35, 5);
Furniture.addReplacementItem({id:"TradeRED"},{id:"TradeRED"}, Furniture.placeRotatableBlock(BlockID.TradeRED, TradeREDModel));

var guiTiyTradeRED = new UI.StandartWindow({
    standart: {
        header: {text: {text: "Red Trade"}},
        inventory: {standart: true},
        background: {standart: true}
    },
    
    drawing: [
        {type: "bitmap", x: 550, y: 75, bitmap: "furnace_bar_background", scale: 3.2},
        {type: "bitmap", x: 550, y: 155, bitmap: "furnace_bar_background", scale: 3.2},
        {type: "bitmap", x: 550, y: 215, bitmap: "furnace_bar_background", scale: 3.2},
        {type: "bitmap", x: 550, y: 275, bitmap: "furnace_bar_background", scale: 3.2},
        {type: "bitmap", x: 550, y: 335, bitmap: "furnace_bar_background", scale: 3.2},
       
        {type: "bitmap", x: 450, y: 155, bitmap: "red_bumaga", scale: 3.2},
        {type: "bitmap", x: 650, y: 155, bitmap: "bread", scale: 1.6},
       
        {type: "bitmap", x: 450, y: 215, bitmap: "green_bumaga", scale: 3.2},
        {type: "bitmap", x: 650, y: 215, bitmap: "beef_cooked", scale: 1.6},
       
        {type: "bitmap", x: 450, y: 285, bitmap: "blue_bumaga", scale: 3.2},
        {type: "bitmap", x: 650 , y: 285, bitmap: "cake", scale: 3.2},
      
        {type: "bitmap", x: 450, y: 335, bitmap: "yellow_bumaga", scale: 3.2},
        {type: "bitmap", x: 650, y: 335, bitmap: "beetroot_soup", scale: 1.6},
       
        {type: "bitmap", x: 750, y: 155, bitmap: "tradeRED", scale: 12.8},
],
    
    elements: {
        "slotSource1": {type: "slot", x: 450, y: 75},
        "slotResult1": {type: "slot", x: 650, y: 75},
    }
});


IDRegistry.genBlockID("TradeGREEN");
Block.createBlock("TradeGREEN", [
	{name: "TradeGREEN", texture: [["quartz_block", 0]], inCreative: false},
	{name: "TradeGREEN", texture: [["quartz_block", 0]], inCreative: false},
	{name: "TradeGREEN", texture: [["quartz_block", 0]], inCreative: false},
	{name: "TradeGREEN", texture: [["quartz_block", 0]], inCreative: false}
], BLOCK_TYPE_WOOD);
IDRegistry.genItemID("TradeGREEN");
Item.createItem("TradeGREEN", "Trade Block", {name: "tradeGREEN", meta: 0}, {stack: 64});

var TradeGREENModel = ModelAPI.newArray();
TradeGREENModel.addBoxByTextures("1", 0.125,0.125,0.875,0.875,1,1,[['planks_oak',0],['planks_oak',0],['plank_bamboo',0],['plank_bamboo',0],['planks_oak',0],['planks_oak',0]]);
TradeGREENModel.addBoxByTextures("2", 0,0.125,0,0.125,1,1,[['planks_oak',0],['planks_oak',0],['plank_bamboo',0],['plank_bamboo',0],['planks_oak',0],['planks_oak',0]]);
TradeGREENModel.addBoxByID("3", 0.125,0.5625,0.375,0.875,0.625,0.875, 5, 0);
TradeGREENModel.addBoxByTextures("4", 0.875,0.125,0,1,1,1,[['planks_oak',0],['planks_oak',0],['plank_bamboo',0],['plank_bamboo',0],['planks_oak',0],['planks_oak',0]]);
TradeGREENModel.addBoxByID("5", 0.125,0.875,0.375,0.875,0.9375,0.875, 5, 0);
TradeGREENModel.addBoxByID("6", 0.125,0.125,0.375,0.875,0.1875,0.875, 5, 0);
TradeGREENModel.addBoxByID("7", 0.875,1,0.5,1,2,0.625, 17, 0);
TradeGREENModel.addBoxByID("8", 0.0625,0,0.8125,0.1875,0.125,0.9375, 17, 0);
TradeGREENModel.addBoxByID("9", 0,1,0.5,0.125,2,0.625, 17, 0);
TradeGREENModel.addBoxByID("10", 0.8125,0,0.8125,0.9375,0.125,0.9375, 17, 0);
TradeGREENModel.addBoxByID("11", 0.0625,0,0.375,0.1875,0.125,0.5, 17, 0);
TradeGREENModel.addBoxByID("12", 0.8125,0,0.375,0.9375,0.125,0.5, 17, 0);
TradeGREENModel.addBoxByID("13", 0.3125,2,0,0.6875,2.125,0.625, 35, 0);
TradeGREENModel.addBoxByID("14", 0,2,0,0.3125,2.125,0.625, 35, 5);
TradeGREENModel.addBoxByID("15", 0.6875,2,0,1,2.125,0.625, 35, 5);
TradeGREENModel.addBoxByID("16", 0.6875,1.875,0.625,1,2,1, 35, 5);
TradeGREENModel.addBoxByID("17", 0,1.875,0.625,0.3125,2,1, 35, 5);
TradeGREENModel.addBoxByID("18", 0.3125,1.875,0.625,0.6875,2,1, 35, 0);
TradeGREENModel.addBoxByID("19", 0.6875,1,0.6875,0.75,1.0625,0.75, 41);
TradeGREENModel.addBoxByID("20", 0.625,0.9375,0.625,0.8125,1,0.8125, 41);
TradeGREENModel.addBoxByID("21", 0.1875,0.625,0.5,0.8125,0.6875,0.875, 35, 1);
TradeGREENModel.addBoxByID("22", 0.125,0.1875,0.5,0.375,0.3125,0.875, 35, 3);
TradeGREENModel.addBoxByID("23", 0.625,0.1875,0.5,0.875,0.3125,0.875, 35, 5);
Furniture.addReplacementItem({id:"TradeGREEN"},{id:"TradeGREEN"}, Furniture.placeRotatableBlock(BlockID.TradeGREEN, TradeGREENModel));

var guiTiyTradeGREEN = new UI.StandartWindow({
    standart: {
        header: {text: {text: "Green Trade"}},
        inventory: {standart: true},
        background: {standart: true}
    },
    
    drawing: [
        {type: "bitmap", x: 550, y: 75, bitmap: "furnace_bar_background", scale: 3.2},
        {type: "bitmap", x: 550, y: 155, bitmap: "furnace_bar_background", scale: 3.2},
        {type: "bitmap", x: 550, y: 215, bitmap: "furnace_bar_background", scale: 3.2},
        {type: "bitmap", x: 550, y: 275, bitmap: "furnace_bar_background", scale: 3.2},
        {type: "bitmap", x: 550, y: 335, bitmap: "furnace_bar_background", scale: 3.2},
       
        {type: "bitmap", x: 450, y: 155, bitmap: "red_bumaga", scale: 3.2},
        {type: "bitmap", x: 650, y: 155, bitmap: "sapling", scale: 1.6},
       
        {type: "bitmap", x: 450, y: 215, bitmap: "green_bumaga", scale: 3.2},
        {type: "bitmap", x: 650, y: 215, bitmap: "cactus", scale: 1.6},
       
        {type: "bitmap", x: 450, y: 285, bitmap: "blue_bumaga", scale: 3.2},
        {type: "bitmap", x: 650 , y: 285, bitmap: "bamboo", scale: 1.6},
      
        {type: "bitmap", x: 450, y: 335, bitmap: "yellow_bumaga", scale: 3.2},
        {type: "bitmap", x: 650, y: 335, bitmap: "trosnik", scale: 1.6},
       
        {type: "bitmap", x: 750, y: 155, bitmap: "tradeGREEN", scale: 12.8},
],
    
    elements: {
        "slotSource1": {type: "slot", x: 450, y: 75},
        "slotResult1": {type: "slot", x: 650, y: 75},
    }
});


IDRegistry.genBlockID("TradeBLUE");
Block.createBlock("TradeBLUE", [
	{name: "TradeBLUE", texture: [["quartz_block", 0]], inCreative: false},
	{name: "TradeBLUE", texture: [["quartz_block", 0]], inCreative: false},
	{name: "TradeBLUE", texture: [["quartz_block", 0]], inCreative: false},
	{name: "TradeBLUE", texture: [["quartz_block", 0]], inCreative: false}
], BLOCK_TYPE_WOOD);
IDRegistry.genItemID("TradeBLUE");
Item.createItem("TradeBLUE", "Trade Block", {name: "tradeBLUE", meta: 0}, {stack: 64});

var TradeBLUEModel = ModelAPI.newArray();
TradeBLUEModel.addBoxByTextures("1", 0.125,0.125,0.875,0.875,1,1,[['planks_oak',0],['planks_oak',0],['plank_sword',0],['plank_sword',0],['planks_oak',0],['planks_oak',0]]);
TradeBLUEModel.addBoxByTextures("2", 0,0.125,0,0.125,1,1,[['planks_oak',0],['planks_oak',0],['plank_sword',0],['plank_sword',0],['planks_oak',0],['planks_oak',0]]);
TradeBLUEModel.addBoxByID("3", 0.125,0.5625,0.375,0.875,0.625,0.875, 5, 0);
TradeBLUEModel.addBoxByTextures("4", 0.875,0.125,0,1,1,1,[['planks_oak',0],['planks_oak',0],['plank_sword',0],['plank_sword',0],['planks_oak',0],['planks_oak',0]]);
TradeBLUEModel.addBoxByID("5", 0.125,0.875,0.375,0.875,0.9375,0.875, 5, 0);
TradeBLUEModel.addBoxByID("6", 0.125,0.125,0.375,0.875,0.1875,0.875, 5, 0);
TradeBLUEModel.addBoxByID("7", 0.875,1,0.5,1,2,0.625, 17, 0);
TradeBLUEModel.addBoxByID("8", 0.0625,0,0.8125,0.1875,0.125,0.9375, 17, 0);
TradeBLUEModel.addBoxByID("9", 0,1,0.5,0.125,2,0.625, 17, 0);
TradeBLUEModel.addBoxByID("10", 0.8125,0,0.8125,0.9375,0.125,0.9375, 17, 0);
TradeBLUEModel.addBoxByID("11", 0.0625,0,0.375,0.1875,0.125,0.5, 17, 0);
TradeBLUEModel.addBoxByID("12", 0.8125,0,0.375,0.9375,0.125,0.5, 17, 0);
TradeBLUEModel.addBoxByID("13", 0.3125,2,0,0.6875,2.125,0.625, 35, 0);
TradeBLUEModel.addBoxByID("14", 0,2,0,0.3125,2.125,0.625, 35, 11);
TradeBLUEModel.addBoxByID("15", 0.6875,2,0,1,2.125,0.625, 35, 11);
TradeBLUEModel.addBoxByID("16", 0.6875,1.875,0.625,1,2,1, 35, 11);
TradeBLUEModel.addBoxByID("17", 0,1.875,0.625,0.3125,2,1, 35, 11);
TradeBLUEModel.addBoxByID("18", 0.3125,1.875,0.625,0.6875,2,1, 35, 0);
TradeBLUEModel.addBoxByID("19", 0.6875,1,0.6875,0.75,1.0625,0.75, 41);
TradeBLUEModel.addBoxByID("20", 0.625,0.9375,0.625,0.8125,1,0.8125, 41);
TradeBLUEModel.addBoxByID("21", 0.1875,0.625,0.5,0.8125,0.6875,0.875, 35, 1);
TradeBLUEModel.addBoxByID("22", 0.125,0.1875,0.5,0.375,0.3125,0.875, 35, 3);
TradeBLUEModel.addBoxByID("23", 0.625,0.1875,0.5,0.875,0.3125,0.875, 35, 5);
Furniture.addReplacementItem({id:"TradeBLUE"},{id:"TradeBLUE"}, Furniture.placeRotatableBlock(BlockID.TradeBLUE, TradeBLUEModel));

var guiTiyTradeBLUE = new UI.StandartWindow({
    standart: {
        header: {text: {text: "Blue Trade"}},
        inventory: {standart: true},
        background: {standart: true}
    },
    
    drawing: [
        {type: "bitmap", x: 550, y: 75, bitmap: "furnace_bar_background", scale: 3.2},
        {type: "bitmap", x: 550, y: 155, bitmap: "furnace_bar_background", scale: 3.2},
        {type: "bitmap", x: 550, y: 215, bitmap: "furnace_bar_background", scale: 3.2},
        {type: "bitmap", x: 550, y: 275, bitmap: "furnace_bar_background", scale: 3.2},
        {type: "bitmap", x: 550, y: 335, bitmap: "furnace_bar_background", scale: 3.2},
       
        {type: "bitmap", x: 450, y: 155, bitmap: "red_bumaga", scale: 3.2},
        {type: "bitmap", x: 650, y: 155, bitmap: "iron_sword", scale: 3.2},
       
        {type: "bitmap", x: 450, y: 215, bitmap: "green_bumaga", scale: 3.2},
        {type: "bitmap", x: 650, y: 215, bitmap: "diamond_shovel", scale: 3.2},
       
        {type: "bitmap", x: 450, y: 285, bitmap: "blue_bumaga", scale: 3.2},
        {type: "bitmap", x: 650 , y: 285, bitmap: "gold_chestplate", scale: 3.2},
      
        {type: "bitmap", x: 450, y: 335, bitmap: "yellow_bumaga", scale: 3.2},
        {type: "bitmap", x: 650, y: 335, bitmap: "iron_leggings", scale: 3.2},
       
        {type: "bitmap", x: 750, y: 155, bitmap: "tradeBLUE", scale: 12.8},
],
    
    elements: {
        "slotSource1": {type: "slot", x: 450, y: 75},
        "slotResult1": {type: "slot", x: 650, y: 75},
    }
});


IDRegistry.genBlockID("TradeYELLOW");
Block.createBlock("TradeYELLOW", [
	{name: "TradeYELLOW", texture: [["quartz_block", 0]], inCreative: false},
	{name: "TradeYELLOW", texture: [["quartz_block", 0]], inCreative: false},
	{name: "TradeYELLOW", texture: [["quartz_block", 0]], inCreative: false},
	{name: "TradeYELLOW", texture: [["quartz_block", 0]], inCreative: false}
], BLOCK_TYPE_WOOD);
IDRegistry.genItemID("TradeYELLOW");
Item.createItem("TradeYELLOW", "Trade Block", {name: "tradeYELLOW", meta: 0}, {stack: 64});

var TradeYELLOWModel = ModelAPI.newArray();
TradeYELLOWModel.addBoxByTextures("1", 0.125,0.125,0.875,0.875,1,1,[['planks_oak',0],['planks_oak',0],['plank_bed',0],['plank_bed',0],['planks_oak',0],['planks_oak',0]]);
TradeYELLOWModel.addBoxByTextures("2", 0,0.125,0,0.125,1,1,[['planks_oak',0],['planks_oak',0],['plank_bed',0],['plank_bed',0],['planks_oak',0],['planks_oak',0]]);
TradeYELLOWModel.addBoxByID("3", 0.125,0.5625,0.375,0.875,0.625,0.875, 5, 0);
TradeYELLOWModel.addBoxByTextures("4", 0.875,0.125,0,1,1,1,[['planks_oak',0],['planks_oak',0],['plank_bed',0],['plank_bed',0],['planks_oak',0],['planks_oak',0]]);
TradeYELLOWModel.addBoxByID("5", 0.125,0.875,0.375,0.875,0.9375,0.875, 5, 0);
TradeYELLOWModel.addBoxByID("6", 0.125,0.125,0.375,0.875,0.1875,0.875, 5, 0);
TradeYELLOWModel.addBoxByID("7", 0.875,1,0.5,1,2,0.625, 17, 0);
TradeYELLOWModel.addBoxByID("8", 0.0625,0,0.8125,0.1875,0.125,0.9375, 17, 0);
TradeYELLOWModel.addBoxByID("9", 0,1,0.5,0.125,2,0.625, 17, 0);
TradeYELLOWModel.addBoxByID("10", 0.8125,0,0.8125,0.9375,0.125,0.9375, 17, 0);
TradeYELLOWModel.addBoxByID("11", 0.0625,0,0.375,0.1875,0.125,0.5, 17, 0);
TradeYELLOWModel.addBoxByID("12", 0.8125,0,0.375,0.9375,0.125,0.5, 17, 0);
TradeYELLOWModel.addBoxByID("13", 0.3125,2,0,0.6875,2.125,0.625, 35, 0);
TradeYELLOWModel.addBoxByID("14", 0,2,0,0.3125,2.125,0.625, 35, 4);
TradeYELLOWModel.addBoxByID("15", 0.6875,2,0,1,2.125,0.625, 35, 4);
TradeYELLOWModel.addBoxByID("16", 0.6875,1.875,0.625,1,2,1, 35, 4);
TradeYELLOWModel.addBoxByID("17", 0,1.875,0.625,0.3125,2,1, 35, 4);
TradeYELLOWModel.addBoxByID("18", 0.3125,1.875,0.625,0.6875,2,1, 35, 0);
TradeYELLOWModel.addBoxByID("19", 0.6875,1,0.6875,0.75,1.0625,0.75, 41);
TradeYELLOWModel.addBoxByID("20", 0.625,0.9375,0.625,0.8125,1,0.8125, 41);
TradeYELLOWModel.addBoxByID("21", 0.1875,0.625,0.5,0.8125,0.6875,0.875, 35, 1);
TradeYELLOWModel.addBoxByID("22", 0.125,0.1875,0.5,0.375,0.3125,0.875, 35, 3);
TradeYELLOWModel.addBoxByID("23", 0.625,0.1875,0.5,0.875,0.3125,0.875, 35, 5);
Furniture.addReplacementItem({id:"TradeYELLOW"},{id:"TradeYELLOW"}, Furniture.placeRotatableBlock(BlockID.TradeYELLOW, TradeYELLOWModel));

var guiTiyTradeYELLOW = new UI.StandartWindow({
    standart: {
        header: {text: {text: "Yellow Trade"}},
        inventory: {standart: true},
        background: {standart: true}
    },
    
    drawing: [
        {type: "bitmap", x: 550, y: 75, bitmap: "furnace_bar_background", scale: 3.2},
        {type: "bitmap", x: 550, y: 155, bitmap: "furnace_bar_background", scale: 3.2},
        {type: "bitmap", x: 550, y: 215, bitmap: "furnace_bar_background", scale: 3.2},
        {type: "bitmap", x: 550, y: 275, bitmap: "furnace_bar_background", scale: 3.2},
        {type: "bitmap", x: 550, y: 335, bitmap: "furnace_bar_background", scale: 3.2},
       
        {type: "bitmap", x: 450, y: 155, bitmap: "red_bumaga", scale: 3.2},
        {type: "bitmap", x: 650, y: 155, bitmap: "furnace_front_off", scale: 3.2},
       
        {type: "bitmap", x: 450, y: 215, bitmap: "green_bumaga", scale: 3.2},
        {type: "bitmap", x: 650, y: 215, bitmap: "chest_front", scale: 3.2},
       
        {type: "bitmap", x: 450, y: 285, bitmap: "blue_bumaga", scale: 3.2},
        {type: "bitmap", x: 650 , y: 285, bitmap: "crafting_table_front", scale: 3.2},
      
        {type: "bitmap", x: 450, y: 335, bitmap: "yellow_bumaga", scale: 3.2},
        {type: "bitmap", x: 650, y: 335, bitmap: "bed_white", scale: 3.2},
       
        {type: "bitmap", x: 750, y: 155, bitmap: "tradeYELLOW", scale: 12.8},
],
    
    elements: {
        "slotSource1": {type: "slot", x: 450, y: 75},
        "slotResult1": {type: "slot", x: 650, y: 75},
    }
});

Block.setShape(BlockID.TradeRED,0,0,0.5,1,1,1);
Block.setShape(BlockID.TradeGREEN,0,0,0.5,1,1,1);
Block.setShape(BlockID.TradeBLUE,0,0,0.5,1,1,1);
Block.setShape(BlockID.TradeYELLOW,0,0,0.5,1,1,1);




// file: BLOCK/trade_red.js

var REDTrade = {
    recipes: {},
  
   set: function(nagymet1, result){
      this.recipes[JSON.stringify([nagymet1])] = {id: result.id, count: result.count, data: result.data};
},
 
   get: function(nagymet1){
     return this.recipes[JSON.stringify([nagymet1])];
}
};

REDTrade.set(ItemID.red_coupon, {
    id: 297, count: 5, data: 0
});
REDTrade.set(ItemID.green_coupon, {
    id: 364, count: 5, data: 0
});
REDTrade.set(ItemID.blue_coupon, {
    id: 354, count: 1, data: 0
});
REDTrade.set(ItemID.yellow_coupon, {
    id: 459, count: 5, data: 0
});

TileEntity.registerPrototype(BlockID.TradeRED, {
    defaultValues: {
        progress: 0
    },    
    getGuiScreen: function(){
        return guiTiyTradeRED;
    },  
    tick: function(){
        let source1 = this.container.getSlot("slotSource1");
        var resultSlot1 = this.container.getSlot("slotResult1");

let f = REDTrade.get(source1.id);
        {
        if(f!=null) {
   if((((resultSlot1.id == f.id && resultSlot1.data == f.data) && resultSlot1.count < 64) || resultSlot1.id == 0) && this.data.progress ++ >= 2){
            source1.count--;
            resultSlot1.id = f.id;
            resultSlot1.data = f.data;
            resultSlot1.count+= f.count;
            this.container.validateAll();
            this.data.progress = 0;
                }
            }
        }
        this.container.setScale("progressScale", this.data.progress / 0);
    },
});




// file: BLOCK/trade_green.js

var GREENTrade = {
    recipes: {},
  
   set: function(nagymet1, result){
      this.recipes[JSON.stringify([nagymet1])] = {id: result.id, count: result.count, data: result.data};
},
 
   get: function(nagymet1){
     return this.recipes[JSON.stringify([nagymet1])];
}
};

GREENTrade.set(ItemID.red_coupon, {
    id: 6, count: 8, data: 3
});
GREENTrade.set(ItemID.green_coupon, {
    id: 81, count: 5, data: 0
});
GREENTrade.set(ItemID.blue_coupon, {
    id: VanillaBlockID.bamboo, count: 5, data: 0
});
GREENTrade.set(ItemID.yellow_coupon, {
    id: 338, count: 8, data: 0
});

TileEntity.registerPrototype(BlockID.TradeGREEN, {
    defaultValues: {
        progress: 0
    },    
    getGuiScreen: function(){
        return guiTiyTradeGREEN;
    },  
    tick: function(){
        let source1 = this.container.getSlot("slotSource1");
        var resultSlot1 = this.container.getSlot("slotResult1");

let f = GREENTrade.get(source1.id);
        {
        if(f!=null) {
   if((((resultSlot1.id == f.id && resultSlot1.data == f.data) && resultSlot1.count < 64) || resultSlot1.id == 0) && this.data.progress ++ >= 2){
            source1.count--;
            resultSlot1.id = f.id;
            resultSlot1.data = f.data;
            resultSlot1.count+= f.count;
            this.container.validateAll();
            this.data.progress = 0;
                }
            }
        }
        this.container.setScale("progressScale", this.data.progress / 0);
    },
});




// file: BLOCK/trade_blue.js

var BLUETrade = {
    recipes: {},
  
   set: function(nagymet1, result){
      this.recipes[JSON.stringify([nagymet1])] = {id: result.id, count: result.count, data: result.data};
},
 
   get: function(nagymet1){
     return this.recipes[JSON.stringify([nagymet1])];
}
};

BLUETrade.set(ItemID.red_coupon, {
    id: 267, count: 1, data: 0
});
BLUETrade.set(ItemID.green_coupon, {
    id: 277, count: 1, data: 0
});
BLUETrade.set(ItemID.blue_coupon, {
    id: 315, count: 1, data: 0
});
BLUETrade.set(ItemID.yellow_coupon, {
    id: 308, count: 1, data: 0
});

TileEntity.registerPrototype(BlockID.TradeBLUE, {
    defaultValues: {
        progress: 0
    },    
    getGuiScreen: function(){
        return guiTiyTradeBLUE;
    },  
    tick: function(){
        let source1 = this.container.getSlot("slotSource1");
        var resultSlot1 = this.container.getSlot("slotResult1");

let f = BLUETrade.get(source1.id);
        {
        if(f!=null) {
   if((((resultSlot1.id == f.id && resultSlot1.data == f.data) && resultSlot1.count < 64) || resultSlot1.id == 0) && this.data.progress ++ >= 2){
            source1.count--;
            resultSlot1.id = f.id;
            resultSlot1.data = f.data;
            resultSlot1.count+= f.count;
            this.container.validateAll();
            this.data.progress = 0;
                }
            }
        }
        this.container.setScale("progressScale", this.data.progress / 0);
    },
});




// file: BLOCK/trade_yellow.js

var YELLOWTrade = {
    recipes: {},
  
   set: function(nagymet1, result){
      this.recipes[JSON.stringify([nagymet1])] = {id: result.id, count: result.count, data: result.data};
},
 
   get: function(nagymet1){
     return this.recipes[JSON.stringify([nagymet1])];
}
};

YELLOWTrade.set(ItemID.red_coupon, {
    id: 61, count: 1, data: 0
});
YELLOWTrade.set(ItemID.green_coupon, {
    id: 54, count: 1, data: 0
});
YELLOWTrade.set(ItemID.blue_coupon, {
    id: 58, count: 1, data: 0
});
YELLOWTrade.set(ItemID.yellow_coupon, {
    id: 355, count: 1, data: 0
});

TileEntity.registerPrototype(BlockID.TradeYELLOW, {
    defaultValues: {
        progress: 0
    },    
    getGuiScreen: function(){
        return guiTiyTradeYELLOW;
    },  
    tick: function(){
        let source1 = this.container.getSlot("slotSource1");
        var resultSlot1 = this.container.getSlot("slotResult1");

let f = YELLOWTrade.get(source1.id);
        {
        if(f!=null) {
   if((((resultSlot1.id == f.id && resultSlot1.data == f.data) && resultSlot1.count < 64) || resultSlot1.id == 0) && this.data.progress ++ >= 2){
            source1.count--;
            resultSlot1.id = f.id;
            resultSlot1.data = f.data;
            resultSlot1.count+= f.count;
            this.container.validateAll();
            this.data.progress = 0;
                }
            }
        }
        this.container.setScale("progressScale", this.data.progress / 0);
    },
});




// file: materials.js

ToolAPI.addToolMaterial("zombie_sword", {durability: 500, level: 3, efficiency: 11, damage: 5, enchantability: 14});
ToolAPI.addToolMaterial("zombie_axe", {durability: 500, level: 3, efficiency: 11, damage: 6, enchantability: 14});
ToolAPI.addToolMaterial("zombie_pickaxe", {durability: 500, level: 3, efficiency: 11, damage: 3, enchantability: 14});
ToolAPI.addToolMaterial("zombie_shovel", {durability: 500, level: 3, efficiency: 11, damage: 3, enchantability: 14});

ToolAPI.addToolMaterial("skelet_sword", {durability: 500, level: 3, efficiency: 11, damage: 5, enchantability: 14});
ToolAPI.addToolMaterial("skelet_axe", {durability: 500, level: 3, efficiency: 11, damage: 6, enchantability: 14});
ToolAPI.addToolMaterial("skelet_pickaxe", {durability: 500, level: 3, efficiency: 11, damage: 3, enchantability: 14});
ToolAPI.addToolMaterial("skelet_shovel", {durability: 500, level: 3, efficiency: 11, damage: 3, enchantability: 14});

ToolAPI.addToolMaterial("spider_sword", {durability: 500, level: 3, efficiency: 11, damage: 5, enchantability: 14});
ToolAPI.addToolMaterial("spider_axe", {durability: 500, level: 3, efficiency: 11, damage: 6, enchantability: 14});
ToolAPI.addToolMaterial("spider_pickaxe", {durability: 500, level: 3, efficiency: 11, damage: 3, enchantability: 14});
ToolAPI.addToolMaterial("spider_shovel", {durability: 500, level: 3, efficiency: 11, damage: 3, enchantability: 14});

ToolAPI.addToolMaterial("creeper_sword", {durability: 900, level: 4, efficiency: 13, damage: 6, enchantability: 14});
ToolAPI.addToolMaterial("creeper_axe", {durability: 900, level: 4, efficiency: 13, damage: 7, enchantability: 14});
ToolAPI.addToolMaterial("creeper_pickaxe", {durability: 900, level: 4, efficiency: 13, damage: 4, enchantability: 14});
ToolAPI.addToolMaterial("creeper_shovel", {durability: 900, level: 4, efficiency: 13, damage: 4, enchantability: 14});

ToolAPI.addToolMaterial("sprut_sword", {durability: 900, level: 4, efficiency: 15, damage: 6, enchantability: 14});
ToolAPI.addToolMaterial("sprut_axe", {durability: 900, level: 4, efficiency: 15, damage: 7, enchantability: 14});
ToolAPI.addToolMaterial("sprut_pickaxe", {durability: 900, level: 4, efficiency: 15, damage: 4, enchantability: 14});
ToolAPI.addToolMaterial("sprut_shovel", {durability: 900, level: 4, efficiency: 15, damage: 4, enchantability: 14});

ToolAPI.addToolMaterial("slime_sword", {durability: 1300, level: 4, efficiency: 17, damage: 7, enchantability: 14});
ToolAPI.addToolMaterial("slime_axe", {durability: 1300, level: 4, efficiency: 17, damage: 8, enchantability: 14});
ToolAPI.addToolMaterial("slime_pickaxe", {durability: 1300, level: 4, efficiency: 17, damage: 5, enchantability: 14});
ToolAPI.addToolMaterial("slime_shovel", {durability: 1300, level: 4, efficiency: 17, damage: 5, enchantability: 14});

ToolAPI.addToolMaterial("ocelot_sword", {durability: 1300, level: 4, efficiency: 17, damage: 7, enchantability: 14});
ToolAPI.addToolMaterial("ocelot_axe", {durability: 1300, level: 4, efficiency: 17, damage: 8, enchantability: 14});
ToolAPI.addToolMaterial("ocelot_pickaxe", {durability: 1300, level: 4, efficiency: 17, damage: 5, enchantability: 14});
ToolAPI.addToolMaterial("ocelot_shovel", {durability: 1300, level: 4, efficiency: 17, damage: 5, enchantability: 14});

ToolAPI.addToolMaterial("blaze_sword", {durability: 1700, level: 4, efficiency: 19, damage: 8, enchantability: 14});
ToolAPI.addToolMaterial("blaze_axe", {durability: 1700, level: 4, efficiency: 19, damage: 9, enchantability: 14});
ToolAPI.addToolMaterial("blaze_pickaxe", {durability: 1700, level: 4, efficiency: 19, damage: 6, enchantability: 14});
ToolAPI.addToolMaterial("blaze_shovel", {durability: 1700, level: 4, efficiency: 19, damage: 6, enchantability: 14});

ToolAPI.addToolMaterial("end_sword", {durability: 1700, level: 4, efficiency: 19, damage: 8, enchantability: 14});
ToolAPI.addToolMaterial("end_axe", {durability: 1700, level: 4, efficiency: 19, damage: 9, enchantability: 14});
ToolAPI.addToolMaterial("end_pickaxe", {durability: 1700, level: 4, efficiency: 19, damage: 6, enchantability: 14});
ToolAPI.addToolMaterial("end_shovel", {durability: 1700, level: 4, efficiency: 19, damage: 6, enchantability: 14});

ToolAPI.addToolMaterial("zombie_upaxe", {durability: 1300, level: 4, efficiency: 13, damage: 8, enchantability: 14});
ToolAPI.addToolMaterial("zombie_uppickaxe", {durability: 1300, level: 4, efficiency: 13, damage: 6, enchantability: 14});

ToolAPI.addToolMaterial("skelet_upaxe", {durability: 1300, level: 4, efficiency: 13, damage: 8, enchantability: 14});
ToolAPI.addToolMaterial("skelet_uppickaxe", {durability: 1300, level: 4, efficiency: 13, damage: 6, enchantability: 14});

ToolAPI.addToolMaterial("spider_upaxe", {durability: 1300, level: 4, efficiency: 13, damage: 8, enchantability: 14});
ToolAPI.addToolMaterial("spider_uppickaxe", {durability: 1300, level: 4, efficiency: 13, damage: 6, enchantability: 14});

ToolAPI.addToolMaterial("creeper_upaxe", {durability: 1700, level: 4, efficiency: 15, damage: 9, enchantability: 14});
ToolAPI.addToolMaterial("creeper_uppickaxe", {durability: 1700, level: 4, efficiency: 15, damage: 7, enchantability: 14});

ToolAPI.addToolMaterial("sprut_upaxe", {durability: 1700, level: 4, efficiency: 15, damage: 9, enchantability: 14});
ToolAPI.addToolMaterial("sprut_uppickaxe", {durability: 1700, level: 4, efficiency: 15, damage: 7, enchantability: 14});

ToolAPI.addToolMaterial("slime_upaxe", {durability: 2100, level: 4, efficiency: 17, damage: 10, enchantability: 14});
ToolAPI.addToolMaterial("slime_uppickaxe", {durability: 2100, level: 4, efficiency: 17, damage: 7, enchantability: 14});

ToolAPI.addToolMaterial("ocelot_upaxe", {durability: 2100, level: 4, efficiency: 17, damage: 10, enchantability: 14});
ToolAPI.addToolMaterial("ocelot_uppickaxe", {durability: 2100, level: 4, efficiency: 17, damage: 7, enchantability: 14});

ToolAPI.addToolMaterial("blaze_upaxe", {durability: 2500, level: 4, efficiency: 19, damage: 11, enchantability: 14});
ToolAPI.addToolMaterial("blaze_uppickaxe", {durability: 2500, level: 4, efficiency: 19, damage: 8, enchantability: 14});

ToolAPI.addToolMaterial("end_upaxe", {durability: 2500, level: 4, efficiency: 19, damage: 11, enchantability: 14});
ToolAPI.addToolMaterial("end_uppickaxe", {durability: 2500, level: 4, efficiency: 19, damage: 8, enchantability: 14});




// file: ITEMS/armor.js

IDRegistry.genItemID("zombie_helmet");
IDRegistry.genItemID("zombie_chestplate");
IDRegistry.genItemID("zombie_leggings");
IDRegistry.genItemID("zombie_boots");

Item.createArmorItem("zombie_helmet", "Шлем Зомбака", {name: "zombie_helmet"}, {type: "helmet", armor: 4, durability: 800, texture: "armor/zombie1_1.png"});
Item.createArmorItem("zombie_chestplate", "Нагрудник Зомбака", {name: "zombie_chestplate"}, {type: "chestplate", armor: 4, durability: 800, texture: "armor/zombie1_1.png"});
Item.createArmorItem("zombie_leggings", "Штаны Зомбака", {name: "zombie_leggings"}, {type: "leggings", armor: 4, durability: 800, texture: "armor/zombie2_2.png"});
Item.createArmorItem("zombie_boots", "Ботинки Зомбака", {name: "zombie_boots"}, {type: "boots", armor: 4, durability: 800, texture: "armor/zombie1_1.png"});

IDRegistry.genItemID("skelet_helmet");
IDRegistry.genItemID("skelet_chestplate");
IDRegistry.genItemID("skelet_leggings");
IDRegistry.genItemID("skelet_boots");

Item.createArmorItem("skelet_helmet", "Шлем Скелета", {name: "skelet_helmet"}, {type: "helmet", armor: 4, durability: 800, texture: "armor/skelet1_1.png"});
Item.createArmorItem("skelet_chestplate", "Нагрудник Скелета", {name: "skelet_chestplate"}, {type: "chestplate", armor: 4, durability: 800, texture: "armor/skelet1_1.png"});
Item.createArmorItem("skelet_leggings", "Штаны Скелета", {name: "skelet_leggings"}, {type: "leggings", armor: 4, durability: 800, texture: "armor/skelet2_2.png"});
Item.createArmorItem("skelet_boots", "Ботинки Скелета", {name: "skelet_boots"}, {type: "boots", armor: 4, durability: 800, texture: "armor/skelet1_1.png"});

IDRegistry.genItemID("spider_helmet");
IDRegistry.genItemID("spider_chestplate");
IDRegistry.genItemID("spider_leggings");
IDRegistry.genItemID("spider_boots");

Item.createArmorItem("spider_helmet", "Шлем Паука", {name: "spider_helmet"}, {type: "helmet", armor: 4, durability: 800, texture: "armor/spider1_1.png"});
Item.createArmorItem("spider_chestplate", "Нагрудник Паука", {name: "spider_chestplate"}, {type: "chestplate", armor: 4, durability: 800, texture: "armor/spider1_1.png"});
Item.createArmorItem("spider_leggings", "Штаны Паука", {name: "spider_leggings"}, {type: "leggings", armor: 4, durability: 800, texture: "armor/spider2_2.png"});
Item.createArmorItem("spider_boots", "Ботинки Паука", {name: "spider_boots"}, {type: "boots", armor: 4, durability: 800, texture: "armor/spider1_1.png"});

IDRegistry.genItemID("creeper_helmet");
IDRegistry.genItemID("creeper_chestplate");
IDRegistry.genItemID("creeper_leggings");
IDRegistry.genItemID("creeper_boots");

Item.createArmorItem("creeper_helmet", "Шлем Крипера", {name: "creeper_helmet"}, {type: "helmet", armor: 5, durability: 1200, texture: "armor/creeper1_1.png"});
Item.createArmorItem("creeper_chestplate", "Нагрудник Крипера", {name: "creeper_chestplate"}, {type: "chestplate", armor: 5, durability: 1200, texture: "armor/creeper1_1.png"});
Item.createArmorItem("creeper_leggings", "Штаны Крипера", {name: "creeper_leggings"}, {type: "leggings", armor: 5, durability: 1200, texture: "armor/creeper2_2.png"});
Item.createArmorItem("creeper_boots", "Ботинки Крипера", {name: "creeper_boots"}, {type: "boots", armor: 5, durability: 1200, texture: "armor/creeper1_1.png"});

IDRegistry.genItemID("sprut_helmet");
IDRegistry.genItemID("sprut_chestplate");
IDRegistry.genItemID("sprut_leggings");
IDRegistry.genItemID("sprut_boots");

Item.createArmorItem("sprut_helmet", "Шлем Спрута", {name: "sprut_helmet"}, {type: "helmet", armor: 5, durability: 1200, texture: "armor/sprut1_1.png"});
Item.createArmorItem("sprut_chestplate", "Нагрудник Спрута", {name: "sprut_chestplate"}, {type: "chestplate", armor: 5, durability: 1200, texture: "armor/sprut1_1.png"});
Item.createArmorItem("sprut_leggings", "Штаны Спрута", {name: "sprut_leggings"}, {type: "leggings", armor: 5, durability: 1200, texture: "armor/sprut2_2.png"});
Item.createArmorItem("sprut_boots", "Ботинки Спрута", {name: "sprut_boots"}, {type: "boots", armor: 5, durability: 1200, texture: "armor/sprut1_1.png"});

IDRegistry.genItemID("slime_helmet");
IDRegistry.genItemID("slime_chestplate");
IDRegistry.genItemID("slime_leggings");
IDRegistry.genItemID("slime_boots");

Item.createArmorItem("slime_helmet", "Шлем Слиза", {name: "slime_helmet"}, {type: "helmet", armor: 6, durability: 1400, texture: "armor/slime1_1.png"});
Item.createArmorItem("slime_chestplate", "Нагрудник Слиза", {name: "slime_chestplate"}, {type: "chestplate", armor: 6, durability: 1400, texture: "armor/slime1_1.png"});
Item.createArmorItem("slime_leggings", "Штаны Слиза", {name: "slime_leggings"}, {type: "leggings", armor: 6, durability: 1400, texture: "armor/slime2_2.png"});
Item.createArmorItem("slime_boots", "Ботинки Слиза", {name: "slime_boots"}, {type: "boots", armor: 6, durability: 1400, texture: "armor/slime1_1.png"});

IDRegistry.genItemID("ocelot_helmet");
IDRegistry.genItemID("ocelot_chestplate");
IDRegistry.genItemID("ocelot_leggings");
IDRegistry.genItemID("ocelot_boots");

Item.createArmorItem("ocelot_helmet", "Шлем Оцелота", {name: "ocelot_helmet"}, {type: "helmet", armor: 6, durability: 1400, texture: "armor/ocelot1_1.png"});
Item.createArmorItem("ocelot_chestplate", "Нагрудник Оцелота", {name: "ocelot_chestplate"}, {type: "chestplate", armor: 6, durability: 1400, texture: "armor/ocelot1_1.png"});
Item.createArmorItem("ocelot_leggings", "Штаны Оцелота", {name: "ocelot_leggings"}, {type: "leggings", armor: 6, durability: 1400, texture: "armor/ocelot2_2.png"});
Item.createArmorItem("ocelot_boots", "Ботинки Оцелота", {name: "ocelot_boots"}, {type: "boots", armor: 6, durability: 1400, texture: "armor/ocelot1_1.png"});

IDRegistry.genItemID("blaze_helmet");
IDRegistry.genItemID("blaze_chestplate");
IDRegistry.genItemID("blaze_leggings");
IDRegistry.genItemID("blaze_boots");

Item.createArmorItem("blaze_helmet", "Шлем Ифрита", {name: "blaze_helmet"}, {type: "helmet", armor: 7, durability: 1600, texture: "armor/blaze1_1.png"});
Item.createArmorItem("blaze_chestplate", "Нагрудник Ифрита", {name: "blaze_chestplate"}, {type: "chestplate", armor: 7, durability: 1600, texture: "armor/blaze1_1.png"});
Item.createArmorItem("blaze_leggings", "Штаны Ифрита", {name: "blaze_leggings"}, {type: "leggings", armor: 7, durability: 1600, texture: "armor/blaze2_2.png"});
Item.createArmorItem("blaze_boots", "Ботинки Ифрита", {name: "blaze_boots"}, {type: "boots", armor: 7, durability: 1600, texture: "armor/blaze1_1.png"});

IDRegistry.genItemID("end_helmet");
IDRegistry.genItemID("end_chestplate");
IDRegistry.genItemID("end_leggings");
IDRegistry.genItemID("end_boots");

Item.createArmorItem("end_helmet", "Шлем Эндермена", {name: "end_helmet"}, {type: "helmet", armor: 7, durability: 1600, texture: "armor/end1_1.png"});
Item.createArmorItem("end_chestplate", "Нагрудник Эндермена", {name: "end_chestplate"}, {type: "chestplate", armor: 7, durability: 1600, texture: "armor/end1_1.png"});
Item.createArmorItem("end_leggings", "Штаны Эндермена", {name: "end_leggings"}, {type: "leggings", armor: 7, durability: 1600, texture: "armor/end2_2.png"});
Item.createArmorItem("end_boots", "Ботинки Эндермена", {name: "end_boots"}, {type: "boots", armor: 7, durability: 1600, texture: "armor/end1_1.png"});




// file: ITEMS/items.js

IDRegistry.genItemID("zombie");
Item.createItem("zombie", "Кристал Зомбака", {name: "zombie", meta: 0}, {stack: 64});
IDRegistry.genItemID("skelet");
Item.createItem("skelet", "Кристал Скелета", {name: "skelet", meta: 0}, {stack: 64});
IDRegistry.genItemID("spider");
Item.createItem("spider", "Кристал Паука", {name: "spider", meta: 0}, {stack: 64});
IDRegistry.genItemID("creeper");
Item.createItem("creeper", "Кристал Крипера", {name: "creeper", meta: 0}, {stack: 64});
IDRegistry.genItemID("sprut");
Item.createItem("sprut", "Кристал Спрута", {name: "sprut", meta: 0}, {stack: 64});
IDRegistry.genItemID("slime_crystal");
Item.createItem("slime_crystal", "Кристал Слиза", {name: "slime", meta: 0}, {stack: 64});
IDRegistry.genItemID("ocelota");
Item.createItem("ocelota", "Кристал Оцелота", {name: "ocelota", meta: 0}, {stack: 64});
IDRegistry.genItemID("blaze");
Item.createItem("blaze", "Кристал Ифрита", {name: "blaze", meta: 0}, {stack: 64});
IDRegistry.genItemID("enderman");
Item.createItem("enderman", "Кристал Эндермена", {name: "enderman", meta: 0}, {stack: 64});

IDRegistry.genItemID("zombie_ingot");
Item.createItem("zombie_ingot", "Слиток Зомбака", {name: "new_zombieingot", meta: 0}, {stack: 64});
IDRegistry.genItemID("skelet_ingot");
Item.createItem("skelet_ingot", "Слиток Скелета", {name: "new_skeletoningot", meta: 0}, {stack: 64});
IDRegistry.genItemID("spider_ingot");
Item.createItem("spider_ingot", "Слиток Паука", {name: "new_spideringot", meta: 0}, {stack: 64});
IDRegistry.genItemID("creeper_ingot");
Item.createItem("creeper_ingot", "Слиток Крипера", {name: "new_creeperingot", meta: 0}, {stack: 64});
IDRegistry.genItemID("sprut_ingot");
Item.createItem("sprut_ingot", "Слиток Спрута", {name: "new_sprutingot", meta: 0}, {stack: 64});
IDRegistry.genItemID("slime_ingot");
Item.createItem("slime_ingot", "Слиток Слиза", {name: "new_slimeingot", meta: 0}, {stack: 64});
IDRegistry.genItemID("ocelot_ingot");
Item.createItem("ocelot_ingot", "Слиток Оцелота", {name: "new_ocelotingot", meta: 0}, {stack: 64});
IDRegistry.genItemID("blaze_ingot");
Item.createItem("blaze_ingot", "Слиток Ифрита", {name: "new_blazeingot", meta: 0}, {stack: 64});
IDRegistry.genItemID("end_ingot");
Item.createItem("end_ingot", "Слиток Эндермена", {name: "new_endingot", meta: 0}, {stack: 64});

IDRegistry.genItemID("red_coupon");
Item.createItem("red_coupon", "Красный Купон", {name: "red_coupon", meta: 0}, {stack: 64});
IDRegistry.genItemID("green_coupon");
Item.createItem("green_coupon", "Зеленый Купон", {name: "green_coupon", meta: 0}, {stack: 64});
IDRegistry.genItemID("blue_coupon");
Item.createItem("blue_coupon", "Синий Купон", {name: "blue_coupon", meta: 0}, {stack: 64});
IDRegistry.genItemID("yellow_coupon");
Item.createItem("yellow_coupon", "Желтый Купон", {name: "yellow_coupon", meta: 0}, {stack: 64});

IDRegistry.genItemID("mobs_book"); 
Item.createItem("mobs_book", "Mobs Book", {name: "mobs_book", meta: 0}, {stack: 1});




// file: ITEMS/tools.js

IMPORT("ToolType");

IDRegistry.genItemID("zombie_sword");
IDRegistry.genItemID("zombie_shovel");
IDRegistry.genItemID("zombie_pickaxe");
IDRegistry.genItemID("zombie_axe");
Item.createItem("zombie_sword", "Меч Зомбака", {name: "zombie_sword", meta: 0}, {stack: 1});
Item.createItem("zombie_shovel", "Лопата Зомбака", {name: "zombie_shovel", meta: 0}, {stack: 1});
Item.createItem("zombie_pickaxe", "Кирка Зомбака", {name: "zombie_pickaxe", meta: 0}, {stack: 1});
Item.createItem("zombie_axe", "Топор Зомбака", {name: "zombie_axe", meta: 0}, {stack: 1});

ToolAPI.setTool(ItemID.zombie_sword, "zombie_sword", ToolType.sword);
ToolAPI.setTool(ItemID.zombie_shovel, "zombie_shovel", ToolType.shovel);
ToolAPI.setTool(ItemID.zombie_pickaxe, "zombie_pickaxe", ToolType.pickaxe);
ToolAPI.setTool(ItemID.zombie_axe, "zombie_axe", ToolType.axe);

IDRegistry.genItemID("skelet_sword");
IDRegistry.genItemID("skelet_shovel");
IDRegistry.genItemID("skelet_pickaxe");
IDRegistry.genItemID("skelet_axe");
Item.createItem("skelet_sword", "Меч Скелета", {name: "skelet_sword", meta: 0}, {stack: 1});
Item.createItem("skelet_shovel", "Лопата Скелета", {name: "skelet_shovel", meta: 0}, {stack: 1});
Item.createItem("skelet_pickaxe", "Кирка Скелета", {name: "skelet_pickaxe", meta: 0}, {stack: 1});
Item.createItem("skelet_axe", "Топор Скелета", {name: "skelet_axe", meta: 0}, {stack: 1});

ToolAPI.setTool(ItemID.skelet_sword, "skelet_sword", ToolType.sword);
ToolAPI.setTool(ItemID.skelet_shovel, "skelet_shovel", ToolType.shovel);
ToolAPI.setTool(ItemID.skelet_pickaxe, "skelet_pickaxe", ToolType.pickaxe);
ToolAPI.setTool(ItemID.skelet_axe, "skelet_axe", ToolType.axe);

IDRegistry.genItemID("spider_sword");
IDRegistry.genItemID("spider_shovel");
IDRegistry.genItemID("spider_pickaxe");
IDRegistry.genItemID("spider_axe");
Item.createItem("spider_sword", "Меч Паука", {name: "spider_sword", meta: 0}, {stack: 1});
Item.createItem("spider_shovel", "Лопата Паука", {name: "spider_shovel", meta: 0}, {stack: 1});
Item.createItem("spider_pickaxe", "Кирка Паука", {name: "spider_pickaxe", meta: 0}, {stack: 1});
Item.createItem("spider_axe", "Топор Паука", {name: "spider_axe", meta: 0}, {stack: 1});

ToolAPI.setTool(ItemID.spider_sword, "spider_sword", ToolType.sword);
ToolAPI.setTool(ItemID.spider_shovel, "spider_shovel", ToolType.shovel);
ToolAPI.setTool(ItemID.spider_pickaxe, "spider_pickaxe", ToolType.pickaxe);
ToolAPI.setTool(ItemID.spider_axe, "spider_axe", ToolType.axe);

IDRegistry.genItemID("creeper_sword");
IDRegistry.genItemID("creeper_shovel");
IDRegistry.genItemID("creeper_pickaxe");
IDRegistry.genItemID("creeper_axe");
Item.createItem("creeper_sword", "Меч Крипера", {name: "creeper_sword", meta: 0}, {stack: 1});
Item.createItem("creeper_shovel", "Лопата Крипера", {name: "creeper_shovel", meta: 0}, {stack: 1});
Item.createItem("creeper_pickaxe", "Кирка Крипера", {name: "creeper_pickaxe", meta: 0}, {stack: 1});
Item.createItem("creeper_axe", "Топор Крипера", {name: "creeper_axe", meta: 0}, {stack: 1});

ToolAPI.setTool(ItemID.creeper_sword, "creeper_sword", ToolType.sword);
ToolAPI.setTool(ItemID.creeper_shovel, "creeper_shovel", ToolType.shovel);
ToolAPI.setTool(ItemID.creeper_pickaxe, "creeper_pickaxe", ToolType.pickaxe);
ToolAPI.setTool(ItemID.creeper_axe, "creeper_axe", ToolType.axe);

IDRegistry.genItemID("sprut_sword");
IDRegistry.genItemID("sprut_shovel");
IDRegistry.genItemID("sprut_pickaxe");
IDRegistry.genItemID("sprut_axe");
Item.createItem("sprut_sword", "Меч Спрута", {name: "sprut_sword", meta: 0}, {stack: 1});
Item.createItem("sprut_shovel", "Лопата Спрута", {name: "sprut_shovel", meta: 0}, {stack: 1});
Item.createItem("sprut_pickaxe", "Кирка Спрута", {name: "sprut_pickaxe", meta: 0}, {stack: 1});
Item.createItem("sprut_axe", "Топор Спрута", {name: "sprut_axe", meta: 0}, {stack: 1});

ToolAPI.setTool(ItemID.sprut_sword, "sprut_sword", ToolType.sword);
ToolAPI.setTool(ItemID.sprut_shovel, "sprut_shovel", ToolType.shovel);
ToolAPI.setTool(ItemID.sprut_pickaxe, "sprut_pickaxe", ToolType.pickaxe);
ToolAPI.setTool(ItemID.sprut_axe, "sprut_axe", ToolType.axe);

IDRegistry.genItemID("slime_sword");
IDRegistry.genItemID("slime_shovel");
IDRegistry.genItemID("slime_pickaxe");
IDRegistry.genItemID("slime_axe");
Item.createItem("slime_sword", "Меч Слиза", {name: "slime_sword", meta: 0}, {stack: 1});
Item.createItem("slime_shovel", "Лопата Слиза", {name: "slime_shovel", meta: 0}, {stack: 1});
Item.createItem("slime_pickaxe", "Кирка Слиза", {name: "slime_pickaxe", meta: 0}, {stack: 1});
Item.createItem("slime_axe", "Топор Слиза", {name: "slime_axe", meta: 0}, {stack: 1});

ToolAPI.setTool(ItemID.slime_sword, "slime_sword", ToolType.sword);
ToolAPI.setTool(ItemID.slime_shovel, "slime_shovel", ToolType.shovel);
ToolAPI.setTool(ItemID.slime_pickaxe, "slime_pickaxe", ToolType.pickaxe);
ToolAPI.setTool(ItemID.slime_axe, "slime_axe", ToolType.axe);

IDRegistry.genItemID("ocelot_sword");
IDRegistry.genItemID("ocelot_shovel");
IDRegistry.genItemID("ocelot_pickaxe");
IDRegistry.genItemID("ocelot_axe");
Item.createItem("ocelot_sword", "Меч Оцелота", {name: "ocelot_sword", meta: 0}, {stack: 1});
Item.createItem("ocelot_shovel", "Лопата Оцелота", {name: "ocelot_shovel", meta: 0}, {stack: 1});
Item.createItem("ocelot_pickaxe", "Кирка Оцелота", {name: "ocelot_pickaxe", meta: 0}, {stack: 1});
Item.createItem("ocelot_axe", "Топор Оцелота", {name: "ocelot_axe", meta: 0}, {stack: 1});

ToolAPI.setTool(ItemID.ocelot_sword, "ocelot_sword", ToolType.sword);
ToolAPI.setTool(ItemID.ocelot_shovel, "ocelot_shovel", ToolType.shovel);
ToolAPI.setTool(ItemID.ocelot_pickaxe, "ocelot_pickaxe", ToolType.pickaxe);
ToolAPI.setTool(ItemID.ocelot_axe, "ocelot_axe", ToolType.axe);

IDRegistry.genItemID("blaze_sword");
IDRegistry.genItemID("blaze_shovel");
IDRegistry.genItemID("blaze_pickaxe");
IDRegistry.genItemID("blaze_axe");
Item.createItem("blaze_sword", "Меч Ифрита", {name: "blaze_sword", meta: 0}, {stack: 1});
Item.createItem("blaze_shovel", "Лопата Ифрита", {name: "blaze_shovel", meta: 0}, {stack: 1});
Item.createItem("blaze_pickaxe", "Кирка Ифрита", {name: "blaze_pickaxe", meta: 0}, {stack: 1});
Item.createItem("blaze_axe", "Топор Ифрита", {name: "blaze_axe", meta: 0}, {stack: 1});

ToolAPI.setTool(ItemID.blaze_sword, "blaze_sword", ToolType.sword);
ToolAPI.setTool(ItemID.blaze_shovel, "blaze_shovel", ToolType.shovel);
ToolAPI.setTool(ItemID.blaze_pickaxe, "blaze_pickaxe", ToolType.pickaxe);
ToolAPI.setTool(ItemID.blaze_axe, "blaze_axe", ToolType.axe);

IDRegistry.genItemID("end_sword");
IDRegistry.genItemID("end_shovel");
IDRegistry.genItemID("end_pickaxe");
IDRegistry.genItemID("end_axe");
Item.createItem("end_sword", "Меч Эндермена", {name: "end_sword", meta: 0}, {stack: 1});
Item.createItem("end_shovel", "Лопата Эндермена", {name: "end_shovel", meta: 0}, {stack: 1});
Item.createItem("end_pickaxe", "Кирка Эндермена", {name: "end_pickaxe", meta: 0}, {stack: 1});
Item.createItem("end_axe", "Топор Эндермена", {name: "end_axe", meta: 0}, {stack: 1});

ToolAPI.setTool(ItemID.end_sword, "end_sword", ToolType.sword);
ToolAPI.setTool(ItemID.end_shovel, "end_shovel", ToolType.shovel);
ToolAPI.setTool(ItemID.end_pickaxe, "end_pickaxe", ToolType.pickaxe);
ToolAPI.setTool(ItemID.end_axe, "end_axe", ToolType.axe);




// file: ITEMS/uptools.js

IDRegistry.genItemID("UP_zombie_pickaxe");
Item.createItem("UP_zombie_pickaxe", "Усиленный Кирка Зомбака", {name: "UP_zombie_pickaxe", meta: 0}, {stack: 1});
ToolAPI.setTool(ItemID.UP_zombie_pickaxe, "zombie_uppickaxe", ToolType.pickaxe);

Callback.addCallback("DestroyBlock", function(coords, player){
if(Player.getCarriedItem().id==ItemID.UP_zombie_pickaxe)
{
x = coords.x;
y = coords.y;
z = coords.z;
World.destroyBlock(x, y+1, z, true);
World.destroyBlock(x, y-1, z, true);
}
});

IDRegistry.genItemID("UP_skelet_pickaxe");
Item.createItem("UP_skelet_pickaxe", "Усиленный Кирка Скелета", {name: "UP_skelet_pickaxe", meta: 0}, {stack: 1});
ToolAPI.setTool(ItemID.UP_skelet_pickaxe, "skelet_uppickaxe", ToolType.pickaxe);

Callback.addCallback("DestroyBlock", function(coords, player){
if(Player.getCarriedItem().id==ItemID.UP_skelet_pickaxe)
{
x = coords.x;
y = coords.y;
z = coords.z;
World.destroyBlock(x+1, y, z, true);
World.destroyBlock(x-1, y, z, true);
}
});

IDRegistry.genItemID("UP_spider_pickaxe");
Item.createItem("UP_spider_pickaxe", "Усиленный Кирка Паука", {name: "UP_spider_pickaxe", meta: 0}, {stack: 1});
ToolAPI.setTool(ItemID.UP_spider_pickaxe, "spider_uppickaxe", ToolType.pickaxe);

Callback.addCallback("DestroyBlock", function(coords, player){
if(Player.getCarriedItem().id==ItemID.UP_spider_pickaxe)
{
x = coords.x;
y = coords.y;
z = coords.z;
World.destroyBlock(x+1, y, z, true);
World.destroyBlock(x-1, y, z, true);
World.destroyBlock(x, y, z+1, true);
World.destroyBlock(x, y, z-1, true);
World.destroyBlock(x+1, y, z+1, true);
World.destroyBlock(x-1, y, z-1, true);
World.destroyBlock(x+1, y, z-1, true);
World.destroyBlock(x-1, y, z+1, true);
}
});

IDRegistry.genItemID("UP_creeper_pickaxe");
Item.createItem("UP_creeper_pickaxe", "Усиленный Кирка Крипера", {name: "UP_creeper_pickaxe", meta: 0}, {stack: 1});
ToolAPI.setTool(ItemID.UP_creeper_pickaxe, "creeper_uppickaxe", ToolType.pickaxe);

Callback.addCallback("DestroyBlock", function(coords, player){
if(Player.getCarriedItem().id==ItemID.UP_creeper_pickaxe)
{
x = coords.x;
y = coords.y;
z = coords.z;
World.destroyBlock(x, y+1, z, true);
World.destroyBlock(x, y-1, z, true);
World.destroyBlock(x, y, z+1, true);
World.destroyBlock(x, y, z-1, true);
World.destroyBlock(x, y+1, z+1, true);
World.destroyBlock(x, y-1, z-1, true);
World.destroyBlock(x, y+1, z-1, true);
World.destroyBlock(x, y-1, z+1, true);
}
});

IDRegistry.genItemID("UP_sprut_pickaxe");
Item.createItem("UP_sprut_pickaxe", "Усиленный Кирка Спрута", {name: "UP_sprut_pickaxe", meta: 0}, {stack: 1});
ToolAPI.setTool(ItemID.UP_sprut_pickaxe, "sprut_uppickaxe", ToolType.pickaxe);

Callback.addCallback("DestroyBlock", function(coords, player){
if(Player.getCarriedItem().id==ItemID.UP_sprut_pickaxe)
{
x = coords.x;
y = coords.y;
z = coords.z;
World.destroyBlock(x, y+1, z, true);
World.destroyBlock(x, y-1, z, true);
World.destroyBlock(x, y, z+1, true);
World.destroyBlock(x, y, z-1, true);
World.destroyBlock(x, y+1, z+1, true);
World.destroyBlock(x, y-1, z-1, true);
World.destroyBlock(x, y+1, z-1, true);
World.destroyBlock(x, y-1, z+1, true);
World.destroyBlock(x, y+2, z, true);
World.destroyBlock(x, y-2, z, true);
World.destroyBlock(x, y, z+2, true);
World.destroyBlock(x, y, z-2, true);
World.destroyBlock(x, y+2, z+2, true);
World.destroyBlock(x, y-2, z-2, true);
World.destroyBlock(x, y+2, z-2, true);
World.destroyBlock(x, y-2, z+2, true);
}
});

IDRegistry.genItemID("UP_slime_pickaxe");
Item.createItem("UP_slime_pickaxe", "Усиленный Кирка Слиза", {name: "UP_slime_pickaxe", meta: 0}, {stack: 1});
ToolAPI.setTool(ItemID.UP_slime_pickaxe, "slime_uppickaxe", ToolType.pickaxe);

Callback.addCallback("DestroyBlock", function(coords, player){
if(Player.getCarriedItem().id==ItemID.UP_slime_pickaxe)
{
x = coords.x;
y = coords.y;
z = coords.z;
World.destroyBlock(x, y+1, z, true);
World.destroyBlock(x, y-1, z, true);
World.destroyBlock(x, y, z+1, true);
World.destroyBlock(x, y, z-1, true);
World.destroyBlock(x, y+2, z, true);
World.destroyBlock(x, y-2, z, true);
World.destroyBlock(x, y, z+2, true);
World.destroyBlock(x, y, z-2, true);
}
});

IDRegistry.genItemID("UP_ocelot_pickaxe");
Item.createItem("UP_ocelot_pickaxe", "Усиленный Кирка Оцелота", {name: "UP_ocelot_pickaxe", meta: 0}, {stack: 1});
ToolAPI.setTool(ItemID.UP_ocelot_pickaxe, "ocelot_uppickaxe", ToolType.pickaxe);

Callback.addCallback("DestroyBlock", function(coords, player){
if(Player.getCarriedItem().id==ItemID.UP_ocelot_pickaxe)
{
x = coords.x;
y = coords.y;
z = coords.z;
World.destroyBlock(x, y+1, z, true);
World.destroyBlock(x, y-1, z, true);
World.destroyBlock(x, y, z+1, true);
World.destroyBlock(x, y, z-1, true);
World.destroyBlock(x, y+1, z+1, true);
World.destroyBlock(x, y-1, z-1, true);
World.destroyBlock(x, y+1, z-1, true);
World.destroyBlock(x, y-1, z+1, true);
World.destroyBlock(x, y+2, z, true);
World.destroyBlock(x, y-2, z, true);
World.destroyBlock(x, y, z+2, true);
World.destroyBlock(x, y, z-2, true);
World.destroyBlock(x, y+2, z+2, true);
World.destroyBlock(x, y-2, z-2, true);
World.destroyBlock(x, y+2, z-2, true);
World.destroyBlock(x, y-2, z+2, true);
}
});

IDRegistry.genItemID("UP_blaze_pickaxe");
Item.createItem("UP_blaze_pickaxe", "Усиленный Кирка Ифрита", {name: "UP_blaze_pickaxe", meta: 0}, {stack: 1});
ToolAPI.setTool(ItemID.UP_blaze_pickaxe, "blaze_uppickaxe", ToolType.pickaxe);

Callback.addCallback("DestroyBlock", function(coords, player){
if(Player.getCarriedItem().id==ItemID.UP_blaze_pickaxe)
{
x = coords.x;
y = coords.y;
z = coords.z;
World.destroyBlock(x, y+1, z, true);
World.destroyBlock(x, y-1, z, true);
World.destroyBlock(x, y, z+1, true);
World.destroyBlock(x, y, z-1, true);
World.destroyBlock(x, y+1, z+1, true);
World.destroyBlock(x, y-1, z-1, true);
World.destroyBlock(x, y+1, z-1, true);
World.destroyBlock(x, y-1, z+1, true);
World.destroyBlock(x, y+2, z, true);
World.destroyBlock(x, y-2, z, true);
World.destroyBlock(x, y, z+2, true);
World.destroyBlock(x, y, z-2, true);
World.destroyBlock(x, y+2, z+2, true);
World.destroyBlock(x, y-2, z-2, true);
World.destroyBlock(x, y+2, z-2, true);
World.destroyBlock(x, y-2, z+2, true);
World.destroyBlock(x, y+1, z+2, true);
World.destroyBlock(x, y-1, z-2, true);
World.destroyBlock(x, y+2, z-1, true);
World.destroyBlock(x, y-1, z+2, true);
World.destroyBlock(x, y+2, z+1, true);
World.destroyBlock(x, y-2, z-1, true);
World.destroyBlock(x, y-2, z+1, true);
World.destroyBlock(x, y+1, z-2, true);
}
});

IDRegistry.genItemID("UP_end_pickaxe");
Item.createItem("UP_end_pickaxe", "Усиленный Кирка Эндермена", {name: "UP_end_pickaxe", meta: 0}, {stack: 1});
ToolAPI.setTool(ItemID.UP_end_pickaxe, "end_uppickaxe", ToolType.pickaxe);

Callback.addCallback("DestroyBlock", function(coords, player){
if(Player.getCarriedItem().id==ItemID.UP_end_pickaxe)
{
x = coords.x;
y = coords.y;
z = coords.z;
World.destroyBlock(x+1, y, z, true);
World.destroyBlock(x-1, y, z, true);
World.destroyBlock(x, y, z+1, true);
World.destroyBlock(x, y, z-1, true);
World.destroyBlock(x+1, y, z+1, true);
World.destroyBlock(x-1, y, z-1, true);
World.destroyBlock(x+1, y, z-1, true);
World.destroyBlock(x-1, y, z+1, true);
World.destroyBlock(x+2, y, z, true);
World.destroyBlock(x-2, y, z, true);
World.destroyBlock(x, y, z+2, true);
World.destroyBlock(x, y, z-2, true);
World.destroyBlock(x+2, y, z+2, true);
World.destroyBlock(x-2, y, z-2, true);
World.destroyBlock(x+2, y, z-2, true);
World.destroyBlock(x-2, y, z+2, true);
World.destroyBlock(x+1, y, z+2, true);
World.destroyBlock(x-1, y, z-2, true);
World.destroyBlock(x+2, y, z-1, true);
World.destroyBlock(x-1, y, z+2, true);
World.destroyBlock(x+2, y, z+1, true);
World.destroyBlock(x-2, y, z-1, true);
World.destroyBlock(x-2, y, z+1, true);
World.destroyBlock(x+1, y, z-2, true);
}
});

IDRegistry.genItemID("UP_zombie_axe");
Item.createItem("UP_zombie_axe", "Усиленный Топор Зомбака", {name: "UP_zombie_axe", meta: 0}, {stack: 1});
ToolAPI.setTool(ItemID.UP_zombie_axe, "zombie_upaxe", ToolType.axe);

Callback.addCallback("DestroyBlock", function(coords, player){
if(Player.getCarriedItem().id==ItemID.UP_zombie_axe)
{
x = coords.x;
y = coords.y;
z = coords.z;
World.destroyBlock(x, y+1, z, true);
}
});

IDRegistry.genItemID("UP_skelet_axe");
Item.createItem("UP_skelet_axe", "Усиленный Топор Скелета", {name: "UP_skelet_axe", meta: 0}, {stack: 1});
ToolAPI.setTool(ItemID.UP_skelet_axe, "skelet_upaxe", ToolType.axe);

Callback.addCallback("DestroyBlock", function(coords, player){
if(Player.getCarriedItem().id==ItemID.UP_skelet_axe)
{
x = coords.x;
y = coords.y;
z = coords.z;
World.destroyBlock(x, y+1, z, true);
}
});

IDRegistry.genItemID("UP_spider_axe");
Item.createItem("UP_spider_axe", "Усиленный Топор Паука", {name: "UP_spider_axe", meta: 0}, {stack: 1});
ToolAPI.setTool(ItemID.UP_spider_axe, "spider_upaxe", ToolType.axe);

Callback.addCallback("DestroyBlock", function(coords, player){
if(Player.getCarriedItem().id==ItemID.UP_spider_axe)
{
x = coords.x;
y = coords.y;
z = coords.z;
World.destroyBlock(x, y+1, z, true);
World.destroyBlock(x, y-1, z, true);
}
});

IDRegistry.genItemID("UP_creeper_axe");
Item.createItem("UP_creeper_axe", "Усиленный Топор Крипера", {name: "UP_creeper_axe", meta: 0}, {stack: 1});
ToolAPI.setTool(ItemID.UP_creeper_axe, "creeper_upaxe", ToolType.axe);

Callback.addCallback("DestroyBlock", function(coords, player){
if(Player.getCarriedItem().id==ItemID.UP_creeper_axe)
{
x = coords.x;
y = coords.y;
z = coords.z;
World.destroyBlock(x, y+1, z, true);
World.destroyBlock(x, y-1, z, true);
}
});

IDRegistry.genItemID("UP_sprut_axe");
Item.createItem("UP_sprut_axe", "Усиленный Топор Спрута", {name: "UP_sprut_axe", meta: 0}, {stack: 1});
ToolAPI.setTool(ItemID.UP_sprut_axe, "sprut_upaxe", ToolType.axe);

Callback.addCallback("DestroyBlock", function(coords, player){
if(Player.getCarriedItem().id==ItemID.UP_sprut_axe)
{
x = coords.x;
y = coords.y;
z = coords.z;
World.destroyBlock(x, y+1, z, true);
World.destroyBlock(x, y-1, z, true);
World.destroyBlock(x, y+2, z, true);
World.destroyBlock(x, y+3, z, true);
}
});

IDRegistry.genItemID("UP_slime_axe");
Item.createItem("UP_slime_axe", "Усиленный Топор Слиза", {name: "UP_slime_axe", meta: 0}, {stack: 1});
ToolAPI.setTool(ItemID.UP_slime_axe, "slime_upaxe", ToolType.axe);

Callback.addCallback("DestroyBlock", function(coords, player){
if(Player.getCarriedItem().id==ItemID.UP_slime_axe)
{
x = coords.x;
y = coords.y;
z = coords.z;
World.destroyBlock(x, y+1, z, true);
World.destroyBlock(x, y-1, z, true);
World.destroyBlock(x, y+2, z, true);
World.destroyBlock(x, y+3, z, true);
}
});

IDRegistry.genItemID("UP_ocelot_axe");
Item.createItem("UP_ocelot_axe", "Усиленный Топор Оцелота", {name: "UP_ocelot_axe", meta: 0}, {stack: 1});
ToolAPI.setTool(ItemID.UP_ocelot_axe, "ocelot_upaxe", ToolType.axe);

Callback.addCallback("DestroyBlock", function(coords, player){
if(Player.getCarriedItem().id==ItemID.UP_ocelot_axe)
{
x = coords.x;
y = coords.y;
z = coords.z;
World.destroyBlock(x, y+1, z, true);
World.destroyBlock(x, y-1, z, true);
World.destroyBlock(x, y+2, z, true);
World.destroyBlock(x, y+3, z, true);
}
});

IDRegistry.genItemID("UP_blaze_axe");
Item.createItem("UP_blaze_axe", "Усиленный Топор Ифрита", {name: "UP_blaze_axe", meta: 0}, {stack: 1});
ToolAPI.setTool(ItemID.UP_blaze_axe, "blaze_upaxe", ToolType.axe);

Callback.addCallback("DestroyBlock", function(coords, player){
if(Player.getCarriedItem().id==ItemID.UP_blaze_axe)
{
x = coords.x;
y = coords.y;
z = coords.z;
World.destroyBlock(x, y+1, z, true);
World.destroyBlock(x, y-1, z, true);
World.destroyBlock(x, y+2, z, true);
World.destroyBlock(x, y+3, z, true);
}
});

IDRegistry.genItemID("UP_end_axe");
Item.createItem("UP_end_axe", "Усиленный Топор Эндермена", {name: "UP_end_axe", meta: 0}, {stack: 1});
ToolAPI.setTool(ItemID.UP_end_axe, "end_upaxe", ToolType.axe);

Callback.addCallback("DestroyBlock", function(coords, player){
if(Player.getCarriedItem().id==ItemID.UP_end_axe)
{
x = coords.x;
y = coords.y;
z = coords.z;
World.destroyBlock(x, y+1, z, true);
World.destroyBlock(x, y-1, z, true);
World.destroyBlock(x, y+2, z, true);
World.destroyBlock(x, y+3, z, true);
}
});




// file: ITEMS/suriken.js

IDRegistry.genItemID("shurikenzb");
Item.createThrowableItem("shurikenzb", "Сюрикен Зомбака", {name:"shurikenzb"}, {stack:64});
IDRegistry.genItemID("shurikensk");
Item.createThrowableItem("shurikensk", "Сюрикен Скелета", {name:"shurikensk"}, {stack:64});
IDRegistry.genItemID("shurikensp");
Item.createThrowableItem("shurikensp", "Сюрикен Паука", {name:"shurikensp"}, {stack:64});
IDRegistry.genItemID("shurikencp");
Item.createThrowableItem("shurikencp", "Сюрикен Крипера", {name:"shurikencp"}, {stack:64});
IDRegistry.genItemID("shurikensq");
Item.createThrowableItem("shurikensq", "Сюрикен Спрута", {name:"shurikensq"}, {stack:64});
IDRegistry.genItemID("shurikensm");
Item.createThrowableItem("shurikensm", "Сюрикен Слиза", {name:"shurikensm"}, {stack:64});
IDRegistry.genItemID("shurikenot");
Item.createThrowableItem("shurikenot", "Сюрикен Оцелота", {name:"shurikenot"}, {stack:64});
IDRegistry.genItemID("shurikenif");
Item.createThrowableItem("shurikenif", "Сюрикен Ифрита", {name:"shurikenif"}, {stack:64});
IDRegistry.genItemID("shurikenen");
Item.createThrowableItem("shurikenen", "Сюрикен Эндермена", {name:"shurikenen"}, {stack:64});

Item.registerThrowableFunction("shurikencp", function(projectile, item, target){
if(target.entity == -1){} else {
var targetEntity = target.entity;
Entity.damageEntity(targetEntity, 5);
} 
} 
);

Item.registerThrowableFunction("shurikenzb", function(projectile, item, target){
if(target.entity == -1){} else {
var targetEntity = target.entity;
Entity.damageEntity(targetEntity, 3);
} 
} 
);

Item.registerThrowableFunction("shurikenen", function(projectile, item, target){
if(target.entity == -1){} else {
var targetEntity = target.entity;
Entity.damageEntity(targetEntity, 10);
} 
} 
);

Item.registerThrowableFunction("shurikensp", function(projectile, item, target){
if(target.entity == -1){} else {
var targetEntity = target.entity;
Entity.damageEntity(targetEntity, 3);
} 
} 
);

Item.registerThrowableFunction("shurikenif", function(projectile, item, target){
if(target.entity == -1){} else {
var targetEntity = target.entity;
Entity.damageEntity(targetEntity, 10);
} 
} 
);

Item.registerThrowableFunction("shurikensk", function(projectile, item, target){
if(target.entity == -1){} else {
var targetEntity = target.entity;
Entity.damageEntity(targetEntity, 3);
} 
} 
);

Item.registerThrowableFunction("shurikenot", function(projectile, item, target){
if(target.entity == -1){} else {
var targetEntity = target.entity;
Entity.damageEntity(targetEntity, 8);
} 
} 
);

Item.registerThrowableFunction("shurikensm", function(projectile, item, target){
if(target.entity == -1){} else {
var targetEntity = target.entity;
Entity.damageEntity(targetEntity, 8);
} 
} 
);

Item.registerThrowableFunction("shurikensq", function(projectile, item, target){
if(target.entity == -1){} else {
var targetEntity = target.entity;
Entity.damageEntity(targetEntity, 5);
} 
} 
);

IDRegistry.genItemID("szb");
Item.createItem("szb", "Кусочек Сюрикен Зомбака", {name: "szb", meta: 0}, {stack: 64});
IDRegistry.genItemID("ssk");
Item.createItem("ssk", "Кусочек Сюрикен Скелета", {name: "ssk", meta: 0}, {stack: 64});
IDRegistry.genItemID("ssp");
Item.createItem("ssp", "Кусочек Сюрикен Паука", {name: "ssp", meta: 0}, {stack: 64});
IDRegistry.genItemID("scp");
Item.createItem("scp", "Кусочек Сюрикен Крипера", {name: "scp", meta: 0}, {stack: 64});
IDRegistry.genItemID("ssq");
Item.createItem("ssq", "Кусочек Сюрикен Спрута", {name: "ssq", meta: 0}, {stack: 64});
IDRegistry.genItemID("ssm");
Item.createItem("ssm", "Кусочек Сюрикен Слиза", {name: "ssm", meta: 0}, {stack: 64});
IDRegistry.genItemID("sot");
Item.createItem("sot", "Кусочек Сюрикен Отцелота", {name: "sot", meta: 0}, {stack: 64});
IDRegistry.genItemID("sif");
Item.createItem("sif", "Кусочек Сюрикен Ифрита", {name: "sif", meta: 0}, {stack: 64});
IDRegistry.genItemID("sen");
Item.createItem("sen", "Кусочек Сюрикен Эндермена", {name: "sen", meta: 0}, {stack: 64});




// file: ITEMS/mobs_book.js

IMPORT("GuideAPI");

ModAPI.registerAPI("GuideAPI", {
	GuideAPI: GuideAPI,
	GuideHelper: GuideHelper,
	PageControllers: PageControllers
});

GuideAPI.registerGuide("mobs_book", { 
item: ItemID.mobs_book, 
debug: false, 
textures: {
background: "mobsbook_gui", 
nextLink: "next_page", 
preLink: "pre_page", 
close: "cancel", 
}, 

pages: {
 
            "default": {         
            left: {
 controller: PageControllers.ITEM_PAGE,
 items: [ 
     {id: ItemID.mobs_book},     
 ],
 elements: [
 {text: "MOOBS BOOK", size: 25},
 {text: "MOBS BOOK - в этой книге вы можете узнать всё о моде.", size: 18},
 ]
 }, 
                
                right: {
                    controller: PageControllers.BASIC_PAGE,
                    elements: [
                    {text: "Кристаллы", size: 25, link: "crystal"},
                    {text: "Слитки", size: 25, link: "ingots"},
                    {text: "Блоки", size: 25, link: "blocks"},
                    {text: "Печь", size: 25, link: "furnace"},
                    {text: "Инструменты", size: 25, link: "tools"},                                               
                        {text: "Усиленные Инструменты", size: 25, link: "up_tools"},
                        {text: "Броня", size: 25, link: "armors"},
                        {text: "Сюрикен", size: 25, link: "suriken"},                        
                        {text: "Купоны и Торговля", size: 25, link: "coupons"},                                                                                                                                                                                           
                    ]
                },
          },
//tools
"tools": {
                preLink: "default",            
            left: {
                    controller: PageControllers.BASIC_PAGE,
                    elements: [
                        {text: "Инструменты", size: 30},
                        {text: "Инструменты - их надо крафтить из слитков которые можно получить с помощью кристаллов.", size: 18},
                    ]
                },
                
        right: {
                    controller: PageControllers.BASIC_PAGE,
                    elements: [
                        {text: "Инструменты Зомби", size: 25, link: "zombie_tools"},
                        {text: "Инструменты Скелета", size: 25, link: "skelet_tools"},
                        {text: "Инструменты Паука", size: 25, link: "spider_tools"},
                        {text: "Инструменты Крипера", size: 25, link: "creeper_tools"},
                        {text: "Инструменты Спрута", size: 25, link: "sprut_tools"},
                        {text: "Инструменты Оцелота", size: 25, link: "ocelot_tools"},
                        {text: "Инструменты Слизня", size: 25, link: "slime_tools"},
                        {text: "Инструменты Ифрита", size: 25, link: "blaze_tools"},
                        {text: "Инструменты Эндермэна", size: 25, link: "enderman_tools"},
                    ]
                }
            },
          
          "zombie_tools": {
                preLink: "tools",                
            left: {
 controller: PageControllers.ITEM_PAGE,
 items: [ 
     {id: ItemID.zombie_sword},
     {id: ItemID.zombie_axe},
     {id: ItemID.zombie_pickaxe},
     {id: ItemID.zombie_shovel},

 ],
 elements: [
 {text: "Инструменты Зомбака!", size: 18},
 {text: "Меч: Урон: 5, Эффективность: 11, Прочность: 500, Уровень: 3", size: 10},
 {text: "Топор: Урон: 6, Эффективность: 11, Прочность: 500, Уровень: 3", size: 10},
{text: "Кирка: Урон: 3, Эффективность: 11, Прочность: 500, Уровень: 3", size: 10},
{text: "Лопата: Урон: 3, Эффективность: 11, Прочность: 500, Уровень: 3", size: 10},
 ]
 }, 
    right: {
                    controller: PageControllers.ITEM_PAGE,
                    items: [
                        {id: ItemID.zombie_ingot}
                    ],
                    elements: [
                    {text: "Слиток Зомбака", size: 20},
                        {text: "Чтобы получить этот слиток вам    надо убивать Зомбаков", size: 18},
                        {text: "И из Зомбаков выпадает кристалл зомби   который можно переплавить в Печи Мобов!", size: 18}
                    ]
                },
    }, 

          "skelet_tools": {
                preLink: "tools",
            left: {
 controller: PageControllers.ITEM_PAGE,
 items: [ 
     {id: ItemID.skelet_sword},
     {id: ItemID.skelet_axe},
     {id: ItemID.skelet_pickaxe},
     {id: ItemID.skelet_shovel},

 ],
 elements: [
 {text: "Инструменты Скелета!", size: 18},
 {text: "Меч: Урон: 5, Эффективность: 11, Прочность: 500, Уровень: 3", size: 10},
 {text: "Топор: Урон: 6, Эффективность: 11, Прочность: 500, Уровень: 3", size: 10},
{text: "Кирка: Урон: 3, Эффективность: 11, Прочность: 500, Уровень: 3", size: 10},
{text: "Лопата: Урон: 3, Эффективность: 11, Прочность: 500, Уровень: 3", size: 10},
 ]
 }, 
    right: {
                    controller: PageControllers.ITEM_PAGE,
                    items: [
                        {id: ItemID.skelet_ingot}
                    ],
                    elements: [
                    {text: "Слиток Скелета", size: 20},
                        {text: "Чтобы получить этот слиток вам    надо убивать Скелетов", size: 18},
                        {text: "И из Скелетов выпадает кристалл скелета  который можно переплавить в Печи Мобов!", size: 18}
                    ]
                },
    }, 
    
"spider_tools": {
                preLink: "tools",
            left: {
 controller: PageControllers.ITEM_PAGE,
 items: [ 
     {id: ItemID.spider_sword},
     {id: ItemID.spider_axe},
     {id: ItemID.spider_pickaxe},
     {id: ItemID.spider_shovel},

 ],
 elements: [
 {text: "Инструменты Паука!", size: 18},
 {text: "Меч: Урон: 5, Эффективность: 11, Прочность: 500, Уровень: 3", size: 10},
 {text: "Топор: Урон: 6, Эффективность: 11, Прочность: 500, Уровень: 3", size: 10},
{text: "Кирка: Урон: 3, Эффективность: 11, Прочность: 500, Уровень: 3", size: 10},
{text: "Лопата: Урон: 3, Эффективность: 11, Прочность: 500, Уровень: 3", size: 10},
 ]
 }, 
    right: {
                    controller: PageControllers.ITEM_PAGE,
                    items: [
                        {id: ItemID.spider_ingot}
                    ],
                    elements: [
                    {text: "Слиток Паука", size: 20},
                        {text: "Чтобы получить этот слиток вам    надо убивать Пауков", size: 18},
                        {text: "И из Пауков выпадает кристалл паука  который можно переплавить в Печи Мобов!", size: 18}
                    ]
                },
    }, 

"creeper_tools": {
                preLink: "tools",
            left: {
 controller: PageControllers.ITEM_PAGE,
 items: [ 
     {id: ItemID.creeper_sword},
     {id: ItemID.creeper_axe},
     {id: ItemID.creeper_pickaxe},
     {id: ItemID.creeper_shovel},

 ],
 elements: [
 {text: "Инструменты Крипера!", size: 18},
 {text: "Меч: Урон: 6, Эффективность: 12, Прочность: 900, Уровень: 4", size: 10},
 {text: "Топор: Урон: 7, Эффективность: 12, Прочность: 900, Уровень: 4", size: 10},
{text: "Кирка: Урон: 4, Эффективность: 12, Прочность: 900, Уровень: 4", size: 10},
{text: "Лопата: Урон: 4, Эффективность: 12, Прочность: 900, Уровень: 4", size: 10},
 ]
 }, 
    right: {
                    controller: PageControllers.ITEM_PAGE,
                    items: [
                        {id: ItemID.creeper_ingot}
                    ],
                    elements: [
                    {text: "Слиток Крипера", size: 20},
                        {text: "Чтобы получить этот слиток вам    надо убивать Криперов", size: 18},
                        {text: "И из Криперов выпадает кристалл крипера   который можно переплавить в Печи Мобов!", size: 18}
                    ]
                },
    }, 

"sprut_tools": {
                preLink: "tools",
            left: {
 controller: PageControllers.ITEM_PAGE,
 items: [ 
     {id: ItemID.sprut_sword},
     {id: ItemID.sprut_axe},
     {id: ItemID.sprut_pickaxe},
     {id: ItemID.sprut_shovel},

 ],
 elements: [
 {text: "Инструменты Спрута!", size: 18},
{text: "Меч: Урон: 6, Эффективность: 12, Прочность: 900, Уровень: 4", size: 10},
 {text: "Топор: Урон: 7, Эффективность: 12, Прочность: 900, Уровень: 4", size: 10},
{text: "Кирка: Урон: 4, Эффективность: 12, Прочность: 900, Уровень: 4", size: 10},
{text: "Лопата: Урон: 4, Эффективность: 12, Прочность: 900, Уровень: 4", size: 10},
 ]
 }, 
    right: {
                    controller: PageControllers.ITEM_PAGE,
                    items: [
                        {id: ItemID.sprut_ingot}
                    ],
                    elements: [
                    {text: "Слиток Спрута", size: 20},
                        {text: "Чтобы получить этот слиток вам    надо убивать Спрутов", size: 18},
                        {text: "И из Спрутов выпадает кристалл спрута   который можно переплавить в Печи Мобов!", size: 18}
                    ]
                },
    }, 

"ocelot_tools": {
                preLink: "tools",
            left: {
 controller: PageControllers.ITEM_PAGE,
 items: [ 
     {id: ItemID.ocelot_sword},
     {id: ItemID.ocelot_axe},
     {id: ItemID.ocelot_pickaxe},
     {id: ItemID.ocelot_shovel},

 ],
 elements: [
 {text: "Инструменты Оцелота!", size: 18},
 {text: "Меч: Урон: 7, Эффективность: 14, Прочность: 1300, Уровень: 4", size: 10},
 {text: "Топор: Урон: 8, Эффективность: 14, Прочность: 1300, Уровень: 4", size: 10},
{text: "Кирка: Урон: 5, Эффективность: 14, Прочность: 1300, Уровень: 4", size: 10},
{text: "Лопата: Урон: 5, Эффективность: 14, Прочность: 1300, Уровень: 4", size: 10},
 ]
 }, 
    right: {
                    controller: PageControllers.ITEM_PAGE,
                    items: [
                        {id: ItemID.ocelot_ingot}
                    ],
                    elements: [
                    {text: "Слиток Оцелота", size: 20},
                        {text: "Чтобы получить этот слиток вам    надо убивать Оцелотов", size: 18},
                        {text: "И из Оцелотов выпадает кристалл оцелота   который можно переплавить в Печи Мобов!", size: 18}
                    ]
                },
    }, 
    
    "slime_tools": {
                preLink: "tools",
            left: {
 controller: PageControllers.ITEM_PAGE,
 items: [ 
     {id: ItemID.slime_sword},
     {id: ItemID.slime_axe},
     {id: ItemID.slime_pickaxe},
     {id: ItemID.slime_shovel},

 ],
 elements: [
 {text: "Инструменты Слизня!", size: 18},
 {text: "Меч: Урон: 7, Эффективность: 14, Прочность: 1300, Уровень: 4", size: 10},
 {text: "Топор: Урон: 8, Эффективность: 14, Прочность: 1300, Уровень: 4", size: 10},
{text: "Кирка: Урон: 5, Эффективность: 14, Прочность: 1300, Уровень: 4", size: 10},
{text: "Лопата: Урон: 5, Эффективность: 14, Прочность: 1300, Уровень: 4", size: 10},
 ]
 }, 
    right: {
                    controller: PageControllers.ITEM_PAGE,
                    items: [
                        {id: ItemID.slime_ingot}
                    ],
                    elements: [
                    {text: "Слиток Слизня", size: 20},
                        {text: "Чтобы получить этот слиток вам    переплавить обычную слизь в Печи Мобов", size: 18}
                    ]
                },
    }, 
    
    "blaze_tools": {
                preLink: "tools",
            left: {
 controller: PageControllers.ITEM_PAGE,
 items: [ 
     {id: ItemID.blaze_sword},
     {id: ItemID.blaze_axe},
     {id: ItemID.blaze_pickaxe},
     {id: ItemID.blaze_shovel},

 ],
 elements: [
 {text: "Инструменты Ифрита!", size: 18},
 {text: "Меч: Урон: 8, Эффективность: 16, Прочность: 1700, Уровень: 4", size: 10},
 {text: "Топор: Урон: 9, Эффективность: 16, Прочность: 1700, Уровень: 4", size: 10},
{text: "Кирка: Урон: 6, Эффективность: 16, Прочность: 1700, Уровень: 4", size: 10},
{text: "Лопата: Урон: 6, Эффективность: 16, Прочность: 1700, Уровень: 4", size: 10},
 ]
 }, 
    right: {
                    controller: PageControllers.ITEM_PAGE,
                    items: [
                        {id: ItemID.blaze_ingot}
                    ],
                    elements: [
                    {text: "Слиток Ифрита", size: 20},
                        {text: "Чтобы получить этот слиток вам    надо убивать Ифритов", size: 18},
                        {text: "И из Ифритов выпадает кристалл ифрита   который можно переплавить в Печи Мобов!", size: 18}
                    ]
                },
    }, 
    
"enderman_tools": {
                preLink: "tools",
            left: {
 controller: PageControllers.ITEM_PAGE,
 items: [ 
     {id: ItemID.end_sword},
     {id: ItemID.end_axe},
     {id: ItemID.end_pickaxe},
     {id: ItemID.end_shovel},

 ],
 elements: [
 {text: "Инструменты Эндермена!", size: 25},
 {text: "Меч: Урон: 8, Эффективность: 16, Прочность: 1700, Уровень: 4", size: 10},
 {text: "Топор: Урон: 9, Эффективность: 16, Прочность: 1700, Уровень: 4", size: 10},
{text: "Кирка: Урон: 6, Эффективность: 16, Прочность: 1700, Уровень: 4", size: 10},
{text: "Лопата: Урон: 6, Эффективность: 16, Прочность: 1700, Уровень: 4", size: 10},
 ]
 }, 
    right: {
                    controller: PageControllers.ITEM_PAGE,
                    items: [
                        {id: ItemID.end_ingot}
                    ],
                    elements: [
                    {text: "Слиток Эндермена", size: 20},
                        {text: "Чтобы получить этот слиток вам    надо убивать Эндерменов", size: 18},
                        {text: "И из Эндерменов  выпадает кристалл эндермэна   который можно переплавить в Печи Мобов!", size: 18}
                    ]
                },
    }, 
//uptools
"up_tools": {
                preLink: "default",
            left: {
                    controller: PageControllers.BASIC_PAGE,
                    elements: [
                        {text: "Усиленные Инструменты", size: 30},
                        {text: "Усиленные Инструменты - они намного лучше чем обчные! И они все по разному ломают блоки! Например 3×3, 5×5", size: 18},
                    ]
                },
                
        right: {
                    controller: PageControllers.BASIC_PAGE,
                    elements: [
                        {text: "Инструменты Зомби", size: 25, link: "zombie_uptools"},
                        {text: "Инструменты Скелета", size: 25, link: "skelet_uptools"},
                        {text: "Инструменты Паука", size: 25, link: "spider_uptools"},
                        {text: "Инструменты Крипера", size: 25, link: "creeper_uptools"},
                        {text: "Инструменты Спрута", size: 25, link: "sprut_uptools"},
                        {text: "Инструменты Оцелота", size: 25, link: "ocelot_uptools"},
                        {text: "Инструменты Слизня", size: 25, link: "slime_uptools"},
                        {text: "Инструменты Ифрита", size: 25, link: "blaze_uptools"},
                        {text: "Инструменты Эндермэна", size: 25, link: "enderman_uptools"},
                    ]
                }
            },
            
            "zombie_uptools": {
                preLink: "up_tools",
            left: {
                    controller: PageControllers.BASIC_PAGE,
                    elements: [
                        {text: "Усиленные Инструменты Зомбака", size: 30},
                    ]
                },
                
        right: {
                    controller: PageControllers.BASIC_PAGE,
                    elements: [
                        {text: "Топор", size: 25, link: "zombie_upaxe"},
                        {text: "Кирка", size: 25, link: "zombie_uppickaxe"},       
                    ]
                }
            },

"skelet_uptools": {
                preLink: "up_tools",
            left: {
                    controller: PageControllers.BASIC_PAGE,
                    elements: [
                        {text: "Усиленные Инструменты Скелета", size: 30},
                    ]
                },
                
        right: {
                    controller: PageControllers.BASIC_PAGE,
                    elements: [
                        {text: "Топор", size: 25, link: "skelet_upaxe"},
                        {text: "Кирка", size: 25, link: "skelet_uppickaxe"},       
                    ]
                }
            },

"spider_uptools": {
                preLink: "up_tools",
            left: {
                    controller: PageControllers.BASIC_PAGE,
                    elements: [
                        {text: "Усиленные Инструменты Паука", size: 30},
                    ]
                },
                
        right: {
                    controller: PageControllers.BASIC_PAGE,
                    elements: [
                        {text: "Топор", size: 25, link: "spider_upaxe"},
                        {text: "Кирка", size: 25, link: "spider_uppickaxe"},       
                    ]
                }
            },

"creeper_uptools": {
                preLink: "up_tools",
            left: {
                    controller: PageControllers.BASIC_PAGE,
                    elements: [
                        {text: "Усиленные Инструменты Крипера", size: 30},
                    ]
                },
                
        right: {
                    controller: PageControllers.BASIC_PAGE,
                    elements: [
                        {text: "Топор", size: 25, link: "creeper_upaxe"},
                        {text: "Кирка", size: 25, link: "creeper_uppickaxe"},       
                    ]
                }
            },

"sprut_uptools": {
                preLink: "up_tools",
            left: {
                    controller: PageControllers.BASIC_PAGE,
                    elements: [
                        {text: "Усиленные Инструменты Спрута", size: 30},
                    ]
                },
                
        right: {
                    controller: PageControllers.BASIC_PAGE,
                    elements: [
                        {text: "Топор", size: 25, link: "sprut_upaxe"},
                        {text: "Кирка", size: 25, link: "sprut_uppickaxe"},       
                    ]
                }
            },

"slime_uptools": {
                preLink: "up_tools",
            left: {
                    controller: PageControllers.BASIC_PAGE,
                    elements: [
                        {text: "Усиленные Инструменты Слизня", size: 30},
                    ]
                },
                
        right: {
                    controller: PageControllers.BASIC_PAGE,
                    elements: [
                        {text: "Топор", size: 25, link: "slime_upaxe"},
                        {text: "Кирка", size: 25, link: "slime_uppickaxe"},       
                    ]
                }
            },

"ocelot_uptools": {
                preLink: "up_tools",
            left: {
                    controller: PageControllers.BASIC_PAGE,
                    elements: [
                        {text: "Усиленные Инструменты Оцелота", size: 30},
                    ]
                },
                
        right: {
                    controller: PageControllers.BASIC_PAGE,
                    elements: [
                        {text: "Топор", size: 25, link: "ocelot_upaxe"},
                        {text: "Кирка", size: 25, link: "ocelot_uppickaxe"},       
                    ]
                }
            },

"blaze_uptools": {
                preLink: "up_tools",
            left: {
                    controller: PageControllers.BASIC_PAGE,
                    elements: [
                        {text: "Усиленные Инструменты Ифрита", size: 30},
                    ]
                },
                
        right: {
                    controller: PageControllers.BASIC_PAGE,
                    elements: [
                        {text: "Топор", size: 25, link: "blaze_upaxe"},
                        {text: "Кирка", size: 25, link: "blaze_uppickaxe"},       
                    ]
                }
            },

"enderman_uptools": {
                preLink: "up_tools",
            left: {
                    controller: PageControllers.BASIC_PAGE,
                    elements: [
                        {text: "Усиленные Инструменты Эндермена", size: 30},
                    ]
                },
                
        right: {
                    controller: PageControllers.BASIC_PAGE,
                    elements: [
                        {text: "Топор", size: 25, link: "enderman_upaxe"},
                        {text: "Кирка", size: 25, link: "enderman_uppickaxe"},       
                    ]
                }
            },
//up_tools start
"zombie_upaxe": {
                preLink: "zombie_uptools",
            left: {
 controller: PageControllers.ITEM_PAGE,
 items: [ 
     {id: ItemID.UP_zombie_axe},
 ],
 elements: [
 {text: "Усиленный Топор Зомбака!", size: 18},
 {text: "Урон: 8", size: 15},
 {text: "Эффективность: 13", size: 15},
 {text: "Прочность: 1300", size: 15},
  {text: "Уровень: 4", size: 15},
 ]
 }, 
    right: {
                    controller: PageControllers.GRID_3x3_PAGE,
 title: "Рецепт в верстаке",
 recipes: [
 {
 grid: [
 ["a", "a", "a"],
 ["a", "b", "a"],
 ["a", "a", "a"]
 ],
 materials: {
 "a": {id: ItemID.zombie_ingot, data: 0},
 "b": {id: ItemID.zombie_axe, data: 0}
 },
 result: {id: ItemID.UP_zombie_axe, count: 1}
 }
 ],
 elements: [
 {text: "Усиленный Топор Зомбака!", size: 25},
 ],
 }
},

"zombie_uppickaxe": {
                preLink: "zombie_uptools",
            left: {
 controller: PageControllers.ITEM_PAGE,
 items: [ 
     {id: ItemID.UP_zombie_pickaxe},
 ],
 elements: [
 {text: "Усиленная Кирка Зомбака!", size: 18},
 {text: "Урон: 5", size: 15},
 {text: "Эффективность: 13", size: 15},
 {text: "Прочность: 1300", size: 15},
  {text: "Уровень: 4", size: 15},
 ]
 }, 
    right: {
                    controller: PageControllers.GRID_3x3_PAGE,
 title: "Рецепт в верстаке",
 recipes: [
 {
 grid: [
 ["a", "a", "a"],
 ["a", "b", "a"],
 ["a", "a", "a"]
 ],
 materials: {
 "a": {id: ItemID.zombie_ingot, data: 0},
 "b": {id: ItemID.zombie_pickaxe, data: 0}
 },
 result: {id: ItemID.UP_zombie_pickaxe, count: 1}
 }
 ],
 elements: [
 {text: "Усиленная Кирка Зомбака!", size: 25},
 ],
 }
},

"skelet_upaxe": {
                preLink: "skelet_uptools",
            left: {
 controller: PageControllers.ITEM_PAGE,
 items: [ 
     {id: ItemID.UP_skelet_axe},
 ],
 elements: [
 {text: "Усиленный Топор Скелета!", size: 18},
 {text: "Урон: 8", size: 15},
 {text: "Эффективность: 13", size: 15},
 {text: "Прочность: 1300", size: 15},
  {text: "Уровень: 4", size: 15},
 ]
 }, 
    right: {
                    controller: PageControllers.GRID_3x3_PAGE,
 title: "Рецепт в верстаке",
 recipes: [
 {
 grid: [
 ["a", "a", "a"],
 ["a", "b", "a"],
 ["a", "a", "a"]
 ],
 materials: {
 "a": {id: ItemID.skelet_ingot, data: 0},
 "b": {id: ItemID.skelet_axe, data: 0}
 },
 result: {id: ItemID.UP_skelet_axe, count: 1}
 }
 ],
 elements: [
 {text: "Усиленный Топор Скелета!", size: 25},
 ],
 }
},

"skelet_uppickaxe": {
                preLink: "skelet_uptools",
            left: {
 controller: PageControllers.ITEM_PAGE,
 items: [ 
     {id: ItemID.UP_skelet_pickaxe},
 ],
 elements: [
 {text: "Усиленная Кирка Скелета!", size: 18},
 {text: "Урон: 5", size: 15},
 {text: "Эффективность: 13", size: 15},
 {text: "Прочность: 1300", size: 15},
  {text: "Уровень: 4", size: 15},
 ]
 }, 
    right: {
                    controller: PageControllers.GRID_3x3_PAGE,
 title: "Рецепт в верстаке",
 recipes: [
 {
 grid: [
 ["a", "a", "a"],
 ["a", "b", "a"],
 ["a", "a", "a"]
 ],
 materials: {
 "a": {id: ItemID.skelet_ingot, data: 0},
 "b": {id: ItemID.skelet_pickaxe, data: 0}
 },
 result: {id: ItemID.UP_skelet_pickaxe, count: 1}
 }
 ],
 elements: [
 {text: "Усиленная Кирка Скелета!", size: 25},
 ],
 }
},

"spider_upaxe": {
                preLink: "spider_uptools",
            left: {
 controller: PageControllers.ITEM_PAGE,
 items: [ 
     {id: ItemID.UP_spider_axe},
 ],
 elements: [
 {text: "Усиленный Топор Паука!", size: 18},
 {text: "Урон: 8", size: 15},
 {text: "Эффективность: 13", size: 15},
 {text: "Прочность: 1300", size: 15},
  {text: "Уровень: 4", size: 15},
 ]
 }, 
    right: {
                    controller: PageControllers.GRID_3x3_PAGE,
 title: "Рецепт в верстаке",
 recipes: [
 {
 grid: [
 ["a", "a", "a"],
 ["a", "b", "a"],
 ["a", "a", "a"]
 ],
 materials: {
 "a": {id: ItemID.spider_ingot, data: 0},
 "b": {id: ItemID.spider_axe, data: 0}
 },
 result: {id: ItemID.UP_spider_axe, count: 1}
 }
 ],
 elements: [
 {text: "Усиленный Топор Паука!", size: 25},
 ],
 }
},

"spider_uppickaxe": {
                preLink: "spider_uptools",
            left: {
 controller: PageControllers.ITEM_PAGE,
 items: [ 
     {id: ItemID.UP_spider_pickaxe},
 ],
 elements: [
 {text: "Усиленная Кирка Паука!", size: 18},
 {text: "Урон: 5", size: 15},
 {text: "Эффективность: 13", size: 15},
 {text: "Прочность: 1300", size: 15},
  {text: "Уровень: 4", size: 15},
 ]
 }, 
    right: {
                    controller: PageControllers.GRID_3x3_PAGE,
 title: "Рецепт в верстаке",
 recipes: [
 {
 grid: [
 ["a", "a", "a"],
 ["a", "b", "a"],
 ["a", "a", "a"]
 ],
 materials: {
 "a": {id: ItemID.spider_ingot, data: 0},
 "b": {id: ItemID.spider_pickaxe, data: 0}
 },
 result: {id: ItemID.UP_spider_pickaxe, count: 1}
 }
 ],
 elements: [
 {text: "Усиленная Кирка Паука!", size: 25},
 ],
 }
},

"creeper_upaxe": {
                preLink: "creeper_uptools",
            left: {
 controller: PageControllers.ITEM_PAGE,
 items: [ 
     {id: ItemID.UP_creeper_axe},
 ],
 elements: [
 {text: "Усиленный Топор Крипера!", size: 18},
 {text: "Урон: 9", size: 15},
 {text: "Эффективность: 15", size: 15},
 {text: "Прочность: 1700", size: 15},
  {text: "Уровень: 4", size: 15},
 ]
 }, 
    right: {
                    controller: PageControllers.GRID_3x3_PAGE,
 title: "Рецепт в верстаке",
 recipes: [
 {
 grid: [
 ["a", "a", "a"],
 ["a", "b", "a"],
 ["a", "a", "a"]
 ],
 materials: {
 "a": {id: ItemID.creeper_ingot, data: 0},
 "b": {id: ItemID.creeper_axe, data: 0}
 },
 result: {id: ItemID.UP_creeper_axe, count: 1}
 }
 ],
 elements: [
 {text: "Усиленный Топор Крипера!", size: 25},
 ],
 }
},

"creeper_uppickaxe": {
                preLink: "creeper_uptools",
            left: {
 controller: PageControllers.ITEM_PAGE,
 items: [ 
     {id: ItemID.UP_creeper_pickaxe},
 ],
 elements: [
 {text: "Усиленная Кирка Крипера!", size: 18},
 {text: "Урон: 6", size: 15},
 {text: "Эффективность: 15", size: 15},
 {text: "Прочность: 1700", size: 15},
  {text: "Уровень: 4", size: 15},
 ]
 }, 
    right: {
                    controller: PageControllers.GRID_3x3_PAGE,
 title: "Рецепт в верстаке",
 recipes: [
 {
 grid: [
 ["a", "a", "a"],
 ["a", "b", "a"],
 ["a", "a", "a"]
 ],
 materials: {
 "a": {id: ItemID.creeper_ingot, data: 0},
 "b": {id: ItemID.creeper_pickaxe, data: 0}
 },
 result: {id: ItemID.UP_creeper_pickaxe, count: 1}
 }
 ],
 elements: [
 {text: "Усиленная Кирка Крипера!", size: 25},
 ],
 }
},

"sprut_upaxe": {
                preLink: "sprut_uptools",
            left: {
 controller: PageControllers.ITEM_PAGE,
 items: [ 
     {id: ItemID.UP_sprut_axe},
 ],
 elements: [
 {text: "Усиленный Топор Спрута!", size: 18},
 {text: "Урон: 9", size: 15},
 {text: "Эффективность: 15", size: 15},
 {text: "Прочность: 1700", size: 15},
  {text: "Уровень: 4", size: 15},
 ]
 }, 
    right: {
                    controller: PageControllers.GRID_3x3_PAGE,
 title: "Рецепт в верстаке",
 recipes: [
 {
 grid: [
 ["a", "a", "a"],
 ["a", "b", "a"],
 ["a", "a", "a"]
 ],
 materials: {
 "a": {id: ItemID.sprut_ingot, data: 0},
 "b": {id: ItemID.sprut_axe, data: 0}
 },
 result: {id: ItemID.UP_sprut_axe, count: 1}
 }
 ],
 elements: [
 {text: "Усиленный Топор Спрута!", size: 25},
 ],
 }
},

"sprut_uppickaxe": {
                preLink: "sprut_uptools",
            left: {
 controller: PageControllers.ITEM_PAGE,
 items: [ 
     {id: ItemID.UP_sprut_pickaxe},
 ],
 elements: [
 {text: "Усиленная Кирка Спрута!", size: 18},
 {text: "Урон: 6", size: 15},
 {text: "Эффективность: 15", size: 15},
 {text: "Прочность: 1700", size: 15},
  {text: "Уровень: 4", size: 15},
 ]
 }, 
    right: {
                    controller: PageControllers.GRID_3x3_PAGE,
 title: "Рецепт в верстаке",
 recipes: [
 {
 grid: [
 ["a", "a", "a"],
 ["a", "b", "a"],
 ["a", "a", "a"]
 ],
 materials: {
 "a": {id: ItemID.sprut_ingot, data: 0},
 "b": {id: ItemID.sprut_pickaxe, data: 0}
 },
 result: {id: ItemID.UP_sprut_pickaxe, count: 1}
 }
 ],
 elements: [
 {text: "Усиленная Кирка Спрута!", size: 25},
 ],
 }
},

"slime_upaxe": {
                preLink: "slime_uptools",
            left: {
 controller: PageControllers.ITEM_PAGE,
 items: [ 
     {id: ItemID.UP_slime_axe},
 ],
 elements: [
 {text: "Усиленный Топор Слизня!", size: 18},
 {text: "Урон: 10", size: 15},
 {text: "Эффективность: 17", size: 15},
 {text: "Прочность: 2100", size: 15},
  {text: "Уровень: 4", size: 15},
 ]
 }, 
    right: {
                    controller: PageControllers.GRID_3x3_PAGE,
 title: "Рецепт в верстаке",
 recipes: [
 {
 grid: [
 ["a", "a", "a"],
 ["a", "b", "a"],
 ["a", "a", "a"]
 ],
 materials: {
 "a": {id: ItemID.slime_ingot, data: 0},
 "b": {id: ItemID.slime_axe, data: 0}
 },
 result: {id: ItemID.UP_slime_axe, count: 1}
 }
 ],
 elements: [
 {text: "Усиленный Топор Слизня!", size: 25},
 ],
 }
},

"slime_uppickaxe": {
                preLink: "slime_uptools",
            left: {
 controller: PageControllers.ITEM_PAGE,
 items: [ 
     {id: ItemID.UP_slime_pickaxe},
 ],
 elements: [
 {text: "Усиленная Кирка Слизня!", size: 18},
 {text: "Урон: 7", size: 15},
 {text: "Эффективность: 17", size: 15},
 {text: "Прочность: 2100", size: 15},
  {text: "Уровень: 4", size: 15},
 ]
 }, 
    right: {
                    controller: PageControllers.GRID_3x3_PAGE,
 title: "Рецепт в верстаке",
 recipes: [
 {
 grid: [
 ["a", "a", "a"],
 ["a", "b", "a"],
 ["a", "a", "a"]
 ],
 materials: {
 "a": {id: ItemID.slime_ingot, data: 0},
 "b": {id: ItemID.slime_pickaxe, data: 0}
 },
 result: {id: ItemID.UP_slime_pickaxe, count: 1}
 }
 ],
 elements: [
 {text: "Усиленная Кирка Слизня!", size: 25},
 ],
 }
},

"ocelot_upaxe": {
                preLink: "ocelot_uptools",
            left: {
 controller: PageControllers.ITEM_PAGE,
 items: [ 
     {id: ItemID.UP_ocelot_axe},
 ],
 elements: [
 {text: "Усиленный Топор Оцелота!", size: 18},
 {text: "Урон: 10", size: 15},
 {text: "Эффективность: 17", size: 15},
 {text: "Прочность: 2100", size: 15},
  {text: "Уровень: 4", size: 15},
 ]
 }, 
    right: {
                    controller: PageControllers.GRID_3x3_PAGE,
 title: "Рецепт в верстаке",
 recipes: [
 {
 grid: [
 ["a", "a", "a"],
 ["a", "b", "a"],
 ["a", "a", "a"]
 ],
 materials: {
 "a": {id: ItemID.ocelot_ingot, data: 0},
 "b": {id: ItemID.ocelot_axe, data: 0}
 },
 result: {id: ItemID.UP_ocelot_axe, count: 1}
 }
 ],
 elements: [
 {text: "Усиленный Топор Оцелота!", size: 25},
 ],
 }
},

"ocelot_uppickaxe": {
                preLink: "ocelot_uptools",
            left: {
 controller: PageControllers.ITEM_PAGE,
 items: [ 
     {id: ItemID.UP_ocelot_pickaxe},
 ],
 elements: [
 {text: "Усиленная Кирка Оцелота!", size: 18},
 {text: "Урон: 7", size: 15},
 {text: "Эффективность: 17", size: 15},
 {text: "Прочность: 2100", size: 15},
  {text: "Уровень: 4", size: 15},
 ]
 }, 
    right: {
                    controller: PageControllers.GRID_3x3_PAGE,
 title: "Рецепт в верстаке",
 recipes: [
 {
 grid: [
 ["a", "a", "a"],
 ["a", "b", "a"],
 ["a", "a", "a"]
 ],
 materials: {
 "a": {id: ItemID.ocelot_ingot, data: 0},
 "b": {id: ItemID.ocelot_pickaxe, data: 0}
 },
 result: {id: ItemID.UP_ocelot_pickaxe, count: 1}
 }
 ],
 elements: [
 {text: "Усиленная Кирка Оцелота!", size: 25},
 ],
 }
},

"blaze_upaxe": {
                preLink: "blaze_uptools",
            left: {
 controller: PageControllers.ITEM_PAGE,
 items: [ 
     {id: ItemID.UP_blaze_axe},
 ],
 elements: [
 {text: "Усиленный Топор Ифрита!", size: 18},
{text: "Урон: 11", size: 15},
 {text: "Эффективность: 19", size: 15},
 {text: "Прочность: 2500", size: 15},
  {text: "Уровень: 4", size: 15},
 ]
 }, 
    right: {
                    controller: PageControllers.GRID_3x3_PAGE,
 title: "Рецепт в верстаке",
 recipes: [
 {
 grid: [
 ["a", "a", "a"],
 ["a", "b", "a"],
 ["a", "a", "a"]
 ],
 materials: {
 "a": {id: ItemID.blaze_ingot, data: 0},
 "b": {id: ItemID.blaze_axe, data: 0}
 },
 result: {id: ItemID.UP_blaze_axe, count: 1}
 }
 ],
 elements: [
 {text: "Усиленный Топор Ифрита!", size: 25},
 ],
 }
},

"blaze_uppickaxe": {
                preLink: "blaze_uptools",
            left: {
 controller: PageControllers.ITEM_PAGE,
 items: [ 
     {id: ItemID.UP_blaze_pickaxe},
 ],
 elements: [
 {text: "Усиленная Кирка Ифрита!", size: 18},
 {text: "Урон: 8", size: 15},
 {text: "Эффективность: 19", size: 15},
 {text: "Прочность: 2500", size: 15},
  {text: "Уровень: 4", size: 15},
 ]
 }, 
    right: {
                    controller: PageControllers.GRID_3x3_PAGE,
 title: "Рецепт в верстаке",
 recipes: [
 {
 grid: [
 ["a", "a", "a"],
 ["a", "b", "a"],
 ["a", "a", "a"]
 ],
 materials: {
 "a": {id: ItemID.blaze_ingot, data: 0},
 "b": {id: ItemID.blaze_pickaxe, data: 0}
 },
 result: {id: ItemID.UP_blaze_pickaxe, count: 1}
 }
 ],
 elements: [
 {text: "Усиленная Кирка Ифрита!", size: 25},
 ],
 }
},

"enderman_upaxe": {
                preLink: "enderman_uptools",
            left: {
 controller: PageControllers.ITEM_PAGE,
 items: [ 
     {id: ItemID.UP_end_axe},
 ],
 elements: [
 {text: "Усиленный Топор Эндермена!", size: 18},
 {text: "Урон: 11", size: 15},
 {text: "Эффективность: 19", size: 15},
 {text: "Прочность: 2500", size: 15},
  {text: "Уровень: 4", size: 15},
 ]
 }, 
    right: {
                    controller: PageControllers.GRID_3x3_PAGE,
 title: "Рецепт в верстаке",
 recipes: [
 {
 grid: [
 ["a", "a", "a"],
 ["a", "b", "a"],
 ["a", "a", "a"]
 ],
 materials: {
 "a": {id: ItemID.end_ingot, data: 0},
 "b": {id: ItemID.end_axe, data: 0}
 },
 result: {id: ItemID.UP_end_axe, count: 1}
 }
 ],
 elements: [
 {text: "Усиленный Топор Эндермена!", size: 25},
 ],
 }
},

"enderman_uppickaxe": {
                preLink: "enderman_uptools",
            left: {
 controller: PageControllers.ITEM_PAGE,
 items: [ 
     {id: ItemID.UP_end_pickaxe},
 ],
 elements: [
 {text: "Усиленная Кирка Эндермена!", size: 25},
 {text: "Урон: 8", size: 15},
 {text: "Эффективность: 19", size: 15},
 {text: "Прочность: 2500", size: 15},
  {text: "Уровень: 4", size: 15},
 ]
 }, 
    right: {
                    controller: PageControllers.GRID_3x3_PAGE,
 title: "Рецепт в верстаке",
 recipes: [
 {
 grid: [
 ["a", "a", "a"],
 ["a", "b", "a"],
 ["a", "a", "a"]
 ],
 materials: {
 "a": {id: ItemID.end_ingot, data: 0},
 "b": {id: ItemID.end_pickaxe, data: 0}
 },
 result: {id: ItemID.UP_end_pickaxe, count: 1}
 }
 ],
 elements: [
 {text: "Усиленная Кирка Эндермена!", size: 25},
 ],
 }
},
//blocks
"blocks": {
                preLink: "default",
            left: {
 controller: PageControllers.ITEM_PAGE,
 items: [ 
     {id: BlockID.bzombie},
     {id: BlockID.bskelet},
     {id: BlockID.bspider},
     {id: BlockID.bcreeper},
     {id: BlockID.bsprut},
     {id: BlockID.bslime},
     {id: BlockID.bocelot},
     {id: BlockID.bblaze},
     {id: BlockID.bend},
          
 ],
 elements: [
 {text: "Все Блоки из мода!", size: 25},
 {text: "Компрессироваонные блоки из слитков", size: 17},
 {text: "Чтобы крафтить этот блок вам нужно 9 слитков одного типа соединить в верстаке", size: 18},
 ]
 }, 
    right: {
                    controller: PageControllers.GRID_3x3_PAGE,
 title: "Рецепт в верстаке",
 recipes: [
 {
 grid: [
 ["a", "a", "a"],
 ["a", "a", "a"],
 ["a", "a", "a"]
 ],
 materials: {
 "a": {id: ItemID.spider_ingot, data: 0}
 },
 result: {id: BlockID.bspider, count: 1}
 }
 ],
 elements: [
 {text: "Вот один пример !", size: 25},
 ],
 }
},
//coupons
"coupons": {
                preLink: "default",
            left: {
 controller: PageControllers.ITEM_PAGE,
 items: [ 
     {id: ItemID.red_coupon},
     {id: ItemID.green_coupon},
     {id: ItemID.blue_coupon},
     {id: ItemID.yellow_coupon},
          
 ],
 elements: [
 {text: "Все Купоны из мода!", size: 18},
 {text: "Все купоны дропаются из разных мобов", size: 11},
 {text: "Дропается из: ", size: 11},
 {text: "Красный купон : Летучая мышь, корова, рыба треска!", size: 11},
 {text: "Зеленый купон : Лошадь, овца, свинья!", size: 11},
 {text: "Синий купон : Курица, лосось, спрут", size: 11},
 {text: "Желтый купон : Тропическая рыба, волк, лама", size: 11}, 
 ]
 }, 

right: {
                    controller: PageControllers.ITEM_PAGE,
                    items: [
                        {id: ItemID.TradeRED},
     {id: ItemID.TradeGREEN},
     {id: ItemID.TradeBLUE},
     {id: ItemID.TradeYELLOW},
                    ],
                    elements: [
                    {text: "Все Трейд Блоки в которых можно торгововаться купонами!", size: 18},
 {text: "Они спавнятся в мире,Как структуры!", size: 15},
 {text: "У них есть разные виды! Еда, Растения, Инструменты и Броня, Блоки для выживания", size: 15}
                    ]
                },
    }, 
//armors
"armors": {
                preLink: "default",
            left: {
                    controller: PageControllers.BASIC_PAGE,
                    elements: [
                        {text: "Броня", size: 30},
                        {text: "Броня - её надо крафтить  из слитков, которые можно получить с поммощью кристаллов", size: 18},
                        {text: "И у каждый брони есть свой эффект! Эффекты работают когда игрок надел все шмотки из одного типа слитков", size: 18},
                    ]
                },
                
        right: {
                    controller: PageControllers.BASIC_PAGE,
                    elements: [
                        {text: "Броня Зомбака", size: 25, link: "zombie_armor"},
                        {text: "Броня Скелета", size: 25, link: "skelet_armor"},
                        {text: "Броня Паука", size: 25, link: "spider_armor"},
                        {text: "Броня Крипера", size: 25, link: "creeper_armor"},
                        {text: "Броня Спрута", size: 25, link: "sprut_armor"},
                        {text: "Броня Оцелота", size: 25, link: "ocelot_armor"},
                        {text: "Броня Слизня", size: 25, link: "slime_armor"},
                        {text: "Броня Ифрита", size: 25, link: "blaze_armor"},
                        {text: "Броня Эндермена", size: 25, link: "enderman_armor"},
                    ]
                }
            },

"zombie_armor": {
                preLink: "armors",
                nextLink: "zombie_armor_1",
            left: {
 controller: PageControllers.ITEM_PAGE,
 items: [ 
     {id: ItemID.zombie_helmet},
 ],
 elements: [
 {text: "Когда будет надет полный сет брони зомбака, игроку выдастся эффект: Сила", size: 20},
{text: "Шлем Зомбака", size: 18},
 {text: "Защита: 4", size: 18},
 {text: "Прочность: 800", size: 18}
 ]
 }, 
    right: {
                    controller: PageControllers.ITEM_PAGE,
                    items: [
                        {id: ItemID.zombie_chestplate}
                    ],
                    elements: [
                    {text: "Нагрудник Зомбака", size: 18},
                        {text: "Защита: 4", size: 18},
                        {text: "Прочность: 800", size: 18}
                    ]
                },
    }, 
    
    "zombie_armor_1": {
                preLink: "zombie_armor",
            left: {
 controller: PageControllers.ITEM_PAGE,
 items: [ 
     {id: ItemID.zombie_leggings},
 ],
 elements: [
{text: "Штаны Зомбака", size: 18},
 {text: "Защита: 4", size: 18},
 {text: "Прочность: 800", size: 18}
 ]
 }, 
    right: {
                    controller: PageControllers.ITEM_PAGE,
                    items: [
                        {id: ItemID.zombie_boots}
                    ],
                    elements: [
                    {text: "Ботинки Зомбака", size: 18},
                        {text: "Защита: 4 ", size: 18},
                        {text: "Прочность: 800 ", size: 18}
                    ]
                },
    }, 

"skelet_armor": {
                preLink: "armors",
                nextLink: "skelet_armor_1",
            left: {
 controller: PageControllers.ITEM_PAGE,
 items: [ 
     {id: ItemID.skelet_helmet},
 ],
 elements: [
 {text: "Когда будет надет полный сет брони скелета, игроку выдастся эффект: Медленное падение", size: 20},
{text: "Шлем Скелета", size: 18},
 {text: "Защита: 4", size: 18},
 {text: "Прочность: 800", size: 18}
 ]
 }, 
    right: {
                    controller: PageControllers.ITEM_PAGE,
                    items: [
                        {id: ItemID.skelet_chestplate}
                    ],
                    elements: [
                    {text: "Нагрудник Скелета", size: 18},
                        {text: "Защита: 4 ", size: 18},
                        {text: "Прочность: 800 ", size: 18}
                    ]
                },
    }, 
    
    "skelet_armor_1": {
                preLink: "skelet_armor",
            left: {
 controller: PageControllers.ITEM_PAGE,
 items: [ 
     {id: ItemID.skelet_leggings},
 ],
 elements: [
{text: "Штаны Скелета", size: 18},
 {text: "Защита: 4", size: 18},
 {text: "Прочность: 800", size: 18}
 ]
 }, 
    right: {
                    controller: PageControllers.ITEM_PAGE,
                    items: [
                        {id: ItemID.skelet_boots}
                    ],
                    elements: [
                    {text: "Ботинки Скелета", size: 18},
                        {text: "Защита: 4 ", size: 18},
                        {text: "Прочность: 800 ", size: 18}
                    ]
                },
    }, 

"spider_armor": {
                preLink: "armors",
                nextLink: "spider_armor_1",
            left: {
 controller: PageControllers.ITEM_PAGE,
 items: [ 
     {id: ItemID.spider_helmet},
 ],
 elements: [
 {text: "Когда будет надет полный сет брони паука, игроку выдастся эффект: Ночное зрение и Медленное падение", size: 20},
{text: "Шлем Паука", size: 18},
 {text: "Защита: 4", size: 18},
 {text: "Прочность: 800", size: 18}
 ]
 }, 
    right: {
                    controller: PageControllers.ITEM_PAGE,
                    items: [
                        {id: ItemID.spider_chestplate}
                    ],
                    elements: [
                    {text: "Нагрудник Паука", size: 18},
                        {text: "Защита: 4 ", size: 18},
                        {text: "Прочность: 800 ", size: 18}
                    ]
                },
    }, 
    
    "spider_armor_1": {
                preLink: "spider_armor",
            left: {
 controller: PageControllers.ITEM_PAGE,
 items: [ 
     {id: ItemID.spider_leggings},
 ],
 elements: [
{text: "Штаны Паука", size: 18},
 {text: "Защита: 4", size: 18},
 {text: "Прочность: 800", size: 18}
 ]
 }, 
    right: {
                    controller: PageControllers.ITEM_PAGE,
                    items: [
                        {id: ItemID.spider_boots}
                    ],
                    elements: [
                    {text: "Ботинки Паука", size: 18},
                        {text: "Защита: 4 ", size: 18},
                        {text: "Прочность: 800 ", size: 18}
                    ]
                },
    }, 

"creeper_armor": {
                preLink: "armors",
                nextLink: "creeper_armor_1",
            left: {
 controller: PageControllers.ITEM_PAGE,
 items: [ 
     {id: ItemID.creeper_helmet},
 ],
 elements: [
 {text: "Когда будет надет полный сет брони крипера, игроку выдастся эффект: Сопротивление и Исцеление", size: 20},
{text: "Шлем Крипера", size: 18},
 {text: "Защита: 5", size: 18},
 {text: "Прочность: 1200", size: 18}
 ]
 }, 
    right: {
                    controller: PageControllers.ITEM_PAGE,
                    items: [
                        {id: ItemID.creeper_chestplate}
                    ],
                    elements: [
                    {text: "Нагрудник Крипера", size: 18},
                        {text: "Защита: 5 ", size: 18},
                        {text: "Прочность: 1200 ", size: 18}
                    ]
                },
    }, 
    
    "creeper_armor_1": {
                preLink: "creeper_armor",
            left: {
 controller: PageControllers.ITEM_PAGE,
 items: [ 
     {id: ItemID.creeper_leggings},
 ],
 elements: [
{text: "Штаны Крипера", size: 18},
 {text: "Защита: 5", size: 18},
 {text: "Прочность: 1200", size: 18}
 ]
 }, 
    right: {
                    controller: PageControllers.ITEM_PAGE,
                    items: [
                        {id: ItemID.creeper_boots}
                    ],
                    elements: [
                    {text: "Ботинки Крипера", size: 18},
                        {text: "Защита: 5 ", size: 18},
                        {text: "Прочность: 1200 ", size: 18}
                    ]
                },
    }, 

"sprut_armor": {
                preLink: "armors",
                nextLink: "sprut_armor_1",
            left: {
 controller: PageControllers.ITEM_PAGE,
 items: [ 
     {id: ItemID.sprut_helmet},
 ],
 elements: [
 {text: "Когда будет надет полный сет брони спрута, игроку выдастся эффект: Подводное дыхание, Исцеление и Морская сила", size: 20},
{text: "Шлем Спрута", size: 18},
 {text: "Защита: 5", size: 18},
 {text: "Прочность: 1200", size: 18}
 ]
 }, 
    right: {
                    controller: PageControllers.ITEM_PAGE,
                    items: [
                        {id: ItemID.sprut_chestplate}
                    ],
                    elements: [
                    {text: "Нагрудник Спрута", size: 18},
                        {text: "Защита: 5 ", size: 18},
                        {text: "Прочность: 1200 ", size: 18}
                    ]
                },
    }, 
    
    "sprut_armor_1": {
                preLink: "sprut_armor",
            left: {
 controller: PageControllers.ITEM_PAGE,
 items: [ 
     {id: ItemID.sprut_leggings},
 ],
 elements: [
{text: "Штаны Спрута", size: 18},
 {text: "Защита: 5", size: 18},
 {text: "Прочность: 1200", size: 18}
 ]
 }, 
    right: {
                    controller: PageControllers.ITEM_PAGE,
                    items: [
                        {id: ItemID.sprut_boots}
                    ],
                    elements: [
                    {text: "Ботинки Спрута", size: 18},
                        {text: "Защита: 5 ", size: 18},
                        {text: "Прочность: 1200 ", size: 18}
                    ]
                },
    }, 

"slime_armor": {
                preLink: "armors",
                nextLink: "slime_armor_1",
            left: {
 controller: PageControllers.ITEM_PAGE,
 items: [ 
     {id: ItemID.slime_helmet},
 ],
 elements: [
 {text: "Когда будет надет полный сет брони слизня, игроку выдастся эффект: Прыгучесть, Регенерация и Медленное падение", size: 20},
{text: "Шлем Слизня", size: 18},
 {text: "Защита: 6", size: 18},
 {text: "Прочность: 1400", size: 18}
 ]
 }, 
    right: {
                    controller: PageControllers.ITEM_PAGE,
                    items: [
                        {id: ItemID.slime_chestplate}
                    ],
                    elements: [
                    {text: "Нагрудник Слизня", size: 18},
                        {text: "Защита: 6", size: 18},
                        {text: "Прочность: 1400", size: 18}
                    ]
                },
    }, 
    
    "slime_armor_1": {
                preLink: "slime_armor",
            left: {
 controller: PageControllers.ITEM_PAGE,
 items: [ 
     {id: ItemID.slime_leggings},
 ],
 elements: [
{text: "Штаны Слизня", size: 18},
 {text: "Защита: 6", size: 18},
 {text: "Прочность: 1400", size: 18}
 ]
 }, 
    right: {
                    controller: PageControllers.ITEM_PAGE,
                    items: [
                        {id: ItemID.slime_boots}
                    ],
                    elements: [
                    {text: "Ботинки Слизня", size: 18},
                        {text: "Защита: 6 ", size: 18},
                        {text: "Прочность: 1400 ", size: 18}
                    ]
                },
    }, 

"ocelot_armor": {
                preLink: "armors",
                nextLink: "ocelot_armor_1",
            left: {
 controller: PageControllers.ITEM_PAGE,
 items: [ 
     {id: ItemID.ocelot_helmet},
 ],
 elements: [
 {text: "Когда будет надет полный сет брони оцелота, игроку выдастся эффект: Скорость, Спешка и Сила", size: 20},
{text: "Шлем Оцелота", size: 18},
 {text: "Защита: 6", size: 18},
 {text: "Прочность: 1400", size: 18}
 ]
 }, 
    right: {
                    controller: PageControllers.ITEM_PAGE,
                    items: [
                        {id: ItemID.ocelot_chestplate}
                    ],
                    elements: [
                    {text: "Нагрудник Оцелота", size: 18},
                        {text: "Защита: 6 ", size: 18},
                        {text: "Прочность: 1400 ", size: 18}
                    ]
                },
    }, 
    
    "ocelot_armor_1": {
                preLink: "ocelot_armor",
            left: {
 controller: PageControllers.ITEM_PAGE,
 items: [ 
     {id: ItemID.ocelot_leggings},
 ],
 elements: [
{text: "Штаны Оцелота", size: 18},
 {text: "Защита: 6", size: 18},
 {text: "Прочность: 1400", size: 18}
 ]
 }, 
    right: {
                    controller: PageControllers.ITEM_PAGE,
                    items: [
                        {id: ItemID.ocelot_boots}
                    ],
                    elements: [
                    {text: "Ботинки Оцелота", size: 18},
                        {text: "Защита: 6 ", size: 18},
                        {text: "Прочность: 1400 ", size: 18}
                    ]
                },
    }, 

"blaze_armor": {
                preLink: "armors",
                nextLink: "blaze_armor_1",
            left: {
 controller: PageControllers.ITEM_PAGE,
 items: [ 
     {id: ItemID.blaze_helmet},
 ],
 elements: [
 {text: "Когда будет надет полный сет брони ифрита, игроку выдастся эффект: Огнестойкость, Поглощение, Прилив здоровья и Сила", size: 20},
{text: "Шлем Ифрита", size: 18},
 {text: "Защита: 7", size: 18},
 {text: "Прочность: 1600", size: 18}
 ]
 }, 
    right: {
                    controller: PageControllers.ITEM_PAGE,
                    items: [
                        {id: ItemID.blaze_chestplate}
                    ],
                    elements: [
                    {text: "Нагрудник Ифрита", size: 18},
                        {text: "Защита: 7 ", size: 18},
                        {text: "Прочность: 1600 ", size: 18}
                    ]
                },
    }, 
    
    "blaze_armor_1": {
                preLink: "blaze_armor",
            left: {
 controller: PageControllers.ITEM_PAGE,
 items: [ 
     {id: ItemID.blaze_leggings},
 ],
 elements: [
{text: "Штаны Ифрита", size: 18},
 {text: "Защита: 7", size: 18},
 {text: "Прочность: 1600", size: 18}
 ]
 }, 
    right: {
                    controller: PageControllers.ITEM_PAGE,
                    items: [
                        {id: ItemID.blaze_boots}
                    ],
                    elements: [
                    {text: "Ботинки Ифрита", size: 18},
                        {text: "Защита: 7 ", size: 18},
                        {text: "Прочность: 1600 ", size: 18}
                    ]
                },
    }, 

"enderman_armor": {
                preLink: "armors",
                nextLink: "enderman_armor_1",
            left: {
 controller: PageControllers.ITEM_PAGE,
 items: [ 
     {id: ItemID.end_helmet},
 ],
 elements: [
 {text: "Когда будет надет полный сет брони эндермена, игроку выдастся эффект: Невидимость, Скорость, Прилив здоровья и Сила", size: 20},
{text: "Шлем Эндермена", size: 18},
 {text: "Защита: 7", size: 18},
 {text: "Прочность: 1600", size: 18}
 ]
 }, 
    right: {
                    controller: PageControllers.ITEM_PAGE,
                    items: [
                        {id: ItemID.end_chestplate}
                    ],
                    elements: [
                    {text: "Нагрудник Эндермена", size: 18},
                        {text: "Защита: 7 ", size: 18},
                        {text: "Прочность: 1600 ", size: 18}
                    ]
                },
    }, 
    
    "enderman_armor_1": {
                preLink: "enderman_armor",
            left: {
 controller: PageControllers.ITEM_PAGE,
 items: [ 
     {id: ItemID.end_leggings},
 ],
 elements: [
{text: "Штаны Эндермена", size: 18},
 {text: "Защита: 7", size: 18},
 {text: "Прочность: 1600", size: 18}
 ]
 }, 
    right: {
                    controller: PageControllers.ITEM_PAGE,
                    items: [
                        {id: ItemID.end_boots}
                    ],
                    elements: [
                    {text: "Ботинки Эндермена", size: 18},
                        {text: "Защита: 7 ", size: 18},
                        {text: "Прочность: 1600 ", size: 18}
                    ]
                },
    }, 

"suriken": {
                preLink: "default",
            left: {
 controller: PageControllers.ITEM_PAGE,
 items: [ 
     {id: ItemID.shurikenzb},
     {id: ItemID.shurikensk},
     {id: ItemID.shurikensp},
     {id: ItemID.shurikencp},
     {id: ItemID.shurikensq},
     {id: ItemID.shurikensm},
     {id: ItemID.shurikenot},
     {id: ItemID.shurikenif},
     {id: ItemID.shurikenen},

 ],
 elements: [
 {text: "Сюрикены из мода", size: 25},
 {text: "Сюрикен Зомбака Урон: 3", size: 11},
 {text: "Сюрикен Скелета Урон: 3", size: 11},
 {text: "Сюрикен Паука Урон: 3", size: 11},
 {text: "Сюрикен Крипера Урон: 5", size: 11},
 {text: "Сюрикен Спрута Урон: 5", size: 11},
 {text: "Сюрикен Слизня Урон: 8", size: 11},
 {text: "Сюрикен Оцелота Урон: 8", size: 11},
 {text: "Сюрикен Ифрита Урон: 10", size: 11},
 {text: "Сюрикен Эндермена Урон: 10", size: 11}
 ]
 }, 
    right: {
                    controller: PageControllers.ITEM_PAGE,
                    items: [
                        {id: ItemID.szb},
                        {id: ItemID.ssk},
                        {id: ItemID.ssp},
                        {id: ItemID.scp},
                        {id: ItemID.ssq},
                        {id: ItemID.ssm},
                        {id: ItemID.sot},
                        {id: ItemID.sif},
                        {id: ItemID.sen}
                    ],
                    elements: [
                    {text: "Все кусочки сюрикенов", size: 20},
                        {text: "Чтобы скрафтить сюрикены вам понадобятся эти кусочки!", size: 18},
                        {text: "А из 4 кусочков можно получить 4 сюрикен моба!", size: 18}
                    ]
                },
    }, 
    
    "ingots": {
                preLink: "default",
            left: {
 controller: PageControllers.GRID_3x3_PAGE,
 title: "Рецепт в Печи Мобов",
 recipes: [
 {
 grid: [
 ["a", "a", "a"],
 [],
 []
 ],
 materials: {
 "a": {id: ItemID.enderman, data: 0}
 },
 result: {id: ItemID.end_ingot, count: 1}
 }
 ],
 elements: [
 {text: "Вот один пример!", size: 25},
 ]
 },
    right: {
                    controller: PageControllers.ITEM_PAGE,
 items: [ 
     {id: ItemID.zombie_ingot},
     {id: ItemID.skelet_ingot},
     {id: ItemID.spider_ingot},
     {id: ItemID.creeper_ingot},
     {id: ItemID.sprut_ingot},
     {id: ItemID.slime_ingot},
     {id: ItemID.ocelot_ingot},
     {id: ItemID.blaze_ingot},
     {id: ItemID.end_ingot},

 ],
 elements: [
 {text: "Слитки можно получить из кристаллов! А кристаллы дропаются из разных мобов! Чтобы получить слиток вам надо эти кристаллы переплавить в Печи Мобов", size: 20}
 ],
 }
},

"furnace": {
                preLink: "default",
            left: {
 controller: PageControllers.ITEM_PAGE,
 items: [ 
     {id: ItemID.MobsFurnace},          
 ],
 elements: [
 {text: "Печь Мобов!", size: 18},
 {text: "В этой печке нужно переплавлять кристаллы которые выпадают из разных мобов!", size: 15},
 {text: "Из кристаллов можно получить Слитки из мобов!", size: 15},
 ]
 }, 

right: {
                    controller: PageControllers.GRID_3x3_PAGE,
 title: "Рецепт в верстаке",
 recipes: [
 {
 grid: [
 ["a", "a", "a"],
 ["b", "b", "b"],
 ["s", "o", "s"]
 ],
 materials: {
 "a": {id: ItemID.spider, data: 0},
 "b": {id: ItemID.creeper, data: 0},
  "s": {id: ItemID.skelet, data: 0},
  "o": {id: ItemID.zombie, data: 0}
 
 },
 result: {id: ItemID.MobsFurnace, count: 1}
 }
 ],
 elements: [
 ],
 }
},


"furnace": {
                preLink: "default",
            left: {
 controller: PageControllers.ITEM_PAGE,
 items: [ 
     {id: ItemID.MobsFurnace},          
 ],
 elements: [
 {text: "Печь Мобов!", size: 18},
 {text: "В этой печке надо переплавлять кристаллы которые выпадают из разных мобов!", size: 15},
 {text: "Из кристаллов можно получить Слитки из мобов!", size: 15},
 ]
 }, 

right: {
                    controller: PageControllers.GRID_3x3_PAGE,
 title: "Рецепт в верстаке",
 recipes: [
 {
 grid: [
 ["a", "a", "a"],
 ["b", "b", "b"],
 ["s", "o", "s"]
 ],
 materials: {
 "a": {id: ItemID.spider, data: 0},
 "b": {id: ItemID.creeper, data: 0},
  "s": {id: ItemID.skelet, data: 0},
  "o": {id: ItemID.zombie, data: 0}
 
 },
 result: {id: ItemID.MobsFurnace, count: 1}
 }
 ],
 elements: [
 ],
 }
},

"crystal": {
                preLink: "default",
            left: {
                    controller: PageControllers.BASIC_PAGE,
                    elements: [
                        {text: "Зомби", size: 25, link: "1"},
                        {text: "Скелет", size: 25, link: "2"},
                        {text: "Паук", size: 25, link: "3"},
                        {text: "Крипер", size: 25, link: "4"},
                        {text: "Спрут", size: 25, link: "5"},
                        {text: "Слиз", size: 25, link: "6"},
                        {text: "Оцелота", size: 25, link: "7"},
                        {text: "Ифрит", size: 25, link: "8"},
                        {text: "Эндермен", size: 25, link: "9"},                        
                    ],
 },
    right: {
                    controller: PageControllers.ITEM_PAGE,
 items: [ 
     {id: ItemID.zombie},
     {id: ItemID.skelet},
     {id: ItemID.spider},
     {id: ItemID.creeper},
     {id: ItemID.sprut},
     {id: ItemID.slime_crystal},
     {id: ItemID.ocelot},
     {id: ItemID.blaze},
     {id: ItemID.enderman},

 ],
 elements: [
 {text: "Кристаллы которые выпадает из этих мобов!", size: 25},
 ]
                }
          },

}
});




// file: MobsDrops.js

Callback.addCallback("EntityDeath", function(entity){
 if(Entity.getType(entity) == 32){
        var coords = Entity.getPosition(entity);
      var leth = parseInt(Math.random() * 2);
      var mea = 3 + parseInt(Math.random() * 100);
      World.drop(coords.x, coords.y, coords.z, ItemID.zombie, leth);
 }
});

Callback.addCallback("EntityDeath", function(entity){
 if(Entity.getType(entity) == 34){
        var coords = Entity.getPosition(entity);
      var leth = parseInt(Math.random() * 2);
      var mea = 3 + parseInt(Math.random() * 100);
      World.drop(coords.x, coords.y, coords.z, ItemID.skelet, leth);
 }
});

Callback.addCallback("EntityDeath", function(entity){
 if(Entity.getType(entity) == 35){
        var coords = Entity.getPosition(entity);
      var leth = parseInt(Math.random() * 2);
      var mea = 3 + parseInt(Math.random() * 100);
      World.drop(coords.x, coords.y, coords.z, ItemID.spider, leth);
 }
});

Callback.addCallback("EntityDeath", function(entity){
 if(Entity.getType(entity) == Native.EntityType.CREEPER){
        var coords = Entity.getPosition(entity);
      var leth = parseInt(Math.random() * 2);
      var mea = 3 + parseInt(Math.random() * 100);
      World.drop(coords.x, coords.y, coords.z, ItemID.creeper, leth);
 }
});

Callback.addCallback("EntityDeath", function(entity){
 if(Entity.getType(entity) == 17){
        var coords = Entity.getPosition(entity);
      var leth = parseInt(Math.random() * 2);
      var mea = 3 + parseInt(Math.random() * 100);
      World.drop(coords.x, coords.y, coords.z, ItemID.sprut, leth);
 }
});

Callback.addCallback("EntityDeath", function(entity){
 if(Entity.getType(entity) == 37){
        var coords = Entity.getPosition(entity);
      var leth = parseInt(Math.random() * 2);
      var mea = 3 + parseInt(Math.random() * 100);
      World.drop(coords.x, coords.y, coords.z, ItemID.slime_crystal, leth);
 }
});

Callback.addCallback("EntityDeath", function(entity){
 if(Entity.getType(entity) == 22){
        var coords = Entity.getPosition(entity);
      var leth = parseInt(Math.random() * 2);
      var mea = 3 + parseInt(Math.random() * 100);
      World.drop(coords.x, coords.y, coords.z, ItemID.ocelota, leth);
 }
});

Callback.addCallback("EntityDeath", function(entity){
 if(Entity.getType(entity) == 43){
        var coords = Entity.getPosition(entity);
      var leth = parseInt(Math.random() * 2);
      var mea = 3 + parseInt(Math.random() * 100);
      World.drop(coords.x, coords.y, coords.z, ItemID.blaze, leth);
 }
});

Callback.addCallback("EntityDeath", function(entity){
 if(Entity.getType(entity) == 38){
        var coords = Entity.getPosition(entity);
      var leth = parseInt(Math.random() * 2);
      var mea = 3 + parseInt(Math.random() * 100);
      World.drop(coords.x, coords.y, coords.z, ItemID.enderman, leth);
 }
});

Callback.addCallback("EntityDeath", function(entity){
 if(Entity.getType(entity) == 11){
        var coords = Entity.getPosition(entity);
      var leth = parseInt(Math.random() * 2);
      var mea = 3 + parseInt(Math.random() * 100);
      World.drop(coords.x, coords.y, coords.z, ItemID.red_coupon, leth);
 }
});

Callback.addCallback("EntityDeath", function(entity){
 if(Entity.getType(entity) == 19){
        var coords = Entity.getPosition(entity);
      var leth = parseInt(Math.random() * 2);
      var mea = 3 + parseInt(Math.random() * 100);
      World.drop(coords.x, coords.y, coords.z, ItemID.red_coupon, leth);
 }
});

Callback.addCallback("EntityDeath", function(entity){
 if(Entity.getType(entity) == Native.EntityType.COD){
        var coords = Entity.getPosition(entity);
      var leth = parseInt(Math.random() * 2);
      var mea = 3 + parseInt(Math.random() * 100);
      World.drop(coords.x, coords.y, coords.z, ItemID.red_coupon, leth);
 }
});

Callback.addCallback("EntityDeath", function(entity){
 if(Entity.getType(entity) == Native.EntityType.SALMON){
        var coords = Entity.getPosition(entity);
      var leth = parseInt(Math.random() * 2);
      var mea = 3 + parseInt(Math.random() * 100);
      World.drop(coords.x, coords.y, coords.z, ItemID.red_coupon, leth);
 }
});

Callback.addCallback("EntityDeath", function(entity){
 if(Entity.getType(entity) == 10){
        var coords = Entity.getPosition(entity);
      var leth = parseInt(Math.random() * 2);
      var mea = 3 + parseInt(Math.random() * 100);
      World.drop(coords.x, coords.y, coords.z, ItemID.blue_coupon, leth);
 }
});

Callback.addCallback("EntityDeath", function(entity){
 if(Entity.getType(entity) == 17){
        var coords = Entity.getPosition(entity);
      var leth = parseInt(Math.random() * 2);
      var mea = 3 + parseInt(Math.random() * 100);
      World.drop(coords.x, coords.y, coords.z, ItemID.blue_coupon, leth);
 }
});

Callback.addCallback("EntityDeath", function(entity){
 if(Entity.getType(entity) == 23){
        var coords = Entity.getPosition(entity);
      var leth = parseInt(Math.random() * 2);
      var mea = 3 + parseInt(Math.random() * 100);
      World.drop(coords.x, coords.y, coords.z, ItemID.green_coupon, leth);
 }
});

Callback.addCallback("EntityDeath", function(entity){
 if(Entity.getType(entity) == 13){
        var coords = Entity.getPosition(entity);
      var leth = parseInt(Math.random() * 2);
      var mea = 3 + parseInt(Math.random() * 100);
      World.drop(coords.x, coords.y, coords.z, ItemID.green_coupon, leth);
 }
});

Callback.addCallback("EntityDeath", function(entity){
 if(Entity.getType(entity) == 12){
        var coords = Entity.getPosition(entity);
      var leth = parseInt(Math.random() * 2);
      var mea = 3 + parseInt(Math.random() * 100);
      World.drop(coords.x, coords.y, coords.z, ItemID.green_coupon, leth);
 }
});

Callback.addCallback("EntityDeath", function(entity){
 if(Entity.getType(entity) == 14){
        var coords = Entity.getPosition(entity);
      var leth = parseInt(Math.random() * 2);
      var mea = 3 + parseInt(Math.random() * 100);
      World.drop(coords.x, coords.y, coords.z, ItemID.yellow_coupon, leth);
 }
});

Callback.addCallback("EntityDeath", function(entity){
 if(Entity.getType(entity) == 29){
        var coords = Entity.getPosition(entity);
      var leth = parseInt(Math.random() * 2);
      var mea = 3 + parseInt(Math.random() * 100);
      World.drop(coords.x, coords.y, coords.z, ItemID.yellow_coupon, leth);
 }
});

Callback.addCallback("EntityDeath", function(entity){
 if(Entity.getType(entity) == Native.EntityType.TROPICALFISH){
        var coords = Entity.getPosition(entity);
      var leth = parseInt(Math.random() * 2);
      var mea = 3 + parseInt(Math.random() * 100);
      World.drop(coords.x, coords.y, coords.z, ItemID.yellow_coupon, leth);
 }
});




// file: structure.js

Callback.addCallback("GenerateChunk", function (chunkX, chunkZ) {

    let coords = GenerationUtils.randomCoords(chunkX, chunkZ, 64, 128);
    if(Math.random() < 0.004){
    coords = GenerationUtils.findSurface(coords.x, coords.y, coords.z);

if(World.getBlock(coords.x,coords.y+1,coords.z).id === 0 && GenerationUtils.canSeeSky(coords.x, coords.y + 1, coords.z)) { 
       World.setBlock(coords.x,coords.y+1, coords.z, 158, 5);
World.setBlock(coords.x+1,coords.y+1,  coords.z, 17, 0);  
World.setBlock(coords.x+1,coords.y+2,  coords.z, 17, 0);  
World.setBlock(coords.x+1,coords.y+3,  coords.z, 17, 0);  
World.setBlock(coords.x+1,coords.y+4,  coords.z, 85, 0);  
World.setBlock(coords.x+1,coords.y+5,  coords.z, 35, 14);  
World.setBlock(coords.x+1,coords.y+5,  coords.z+1, 35, 0);  
World.setBlock(coords.x,coords.y+1,  coords.z+1, 158, 0);  
World.setBlock(coords.x,coords.y+1,  coords.z+2, 158, 0);  
World.setBlock(coords.x,coords.y+1,  coords.z+3, 158, 0);  
World.setBlock(coords.x,coords.y+1,  coords.z+4, 158, 5);  
World.setBlock(coords.x+1,coords.y+1,  coords.z+1, 158, 8);  
World.setBlock(coords.x+1,coords.y+1,  coords.z+2, 158, 8);  
World.setBlock(coords.x+1,coords.y+1,  coords.z+3, 158, 8);  
World.setBlock(coords.x+1,coords.y+1,  coords.z+4, 17, 0);  
World.setBlock(coords.x+1,coords.y+2,  coords.z+4, 17, 0);  
World.setBlock(coords.x+1,coords.y+3,  coords.z+4, 17, 0);  
World.setBlock(coords.x+1,coords.y+4,  coords.z+4, 85, 0);  
World.setBlock(coords.x+1,coords.y+5,  coords.z+4, 35, 14);  
World.setBlock(coords.x+1,coords.y+5,  coords.z+2, 35, 14);  
World.setBlock(coords.x+1,coords.y+5,  coords.z+3, 35, 0);  
World.setBlock(coords.x+1,coords.y+5,  coords.z+4, 35, 14);  
World.setBlock(coords.x+2,coords.y+1,  coords.z, 158, 8);
World.setBlock(coords.x+3,coords.y+1,  coords.z, 158, 8);
World.setBlock(coords.x+4,coords.y+1,  coords.z, 17, 0);
World.setBlock(coords.x+2,coords.y+2,  coords.z, 158, 13);
World.setBlock(coords.x+3,coords.y+2,  coords.z, 158, 13);
World.setBlock(coords.x+4,coords.y+2,  coords.z, 17, 0);
World.setBlock(coords.x+2,coords.y+3,  coords.z, 158, 8);
World.setBlock(coords.x+3,coords.y+3,  coords.z, 158, 8);
World.setBlock(coords.x+4,coords.y+3,  coords.z, 17, 0);
World.setBlock(coords.x+2,coords.y+4,  coords.z, 158, 5);
World.setBlock(coords.x+4,coords.y+4,  coords.z, 158, 5);
World.setBlock(coords.x+2,coords.y+1,  coords.z+1, 158, 8);
World.setBlock(coords.x+3,coords.y+1,  coords.z+1, 158, 8);
World.setBlock(coords.x+4,coords.y+1,  coords.z+1, 158, 8);
World.setBlock(coords.x+2,coords.y+1,  coords.z+2, 158, 8);
World.setBlock(coords.x+3,coords.y+1,  coords.z+2, 158, 8);
World.setBlock(coords.x+4,coords.y+1,  coords.z+2, 158, 8);
World.setBlock(coords.x+2,coords.y+1,  coords.z+3, 158, 8);
World.setBlock(coords.x+3,coords.y+1,  coords.z+3, 158, 8);
World.setBlock(coords.x+4,coords.y+1,  coords.z+3, 158, 8);
World.setBlock(coords.x+2,coords.y+1,  coords.z+4, 158, 8);
World.setBlock(coords.x+3,coords.y+1,  coords.z+4, 158, 8);
World.setBlock(coords.x+4,coords.y+1,  coords.z+4, 17, 0);
World.setBlock(coords.x+2,coords.y+2,  coords.z+4, 158, 13);
World.setBlock(coords.x+3,coords.y+2,  coords.z+4, 158, 13);
World.setBlock(coords.x+4,coords.y+2,  coords.z+4, 17, 0);
World.setBlock(coords.x+2,coords.y+3,  coords.z+4, 158, 8);
World.setBlock(coords.x+3,coords.y+3,  coords.z+4, 158, 8);
World.setBlock(coords.x+4,coords.y+3,  coords.z+4, 17, 0);
World.setBlock(coords.x+2,coords.y+4,  coords.z+4, 158, 5);
World.setBlock(coords.x+4,coords.y+4,  coords.z+4, 158, 5);
World.setBlock(coords.x+4,coords.y+3,  coords.z+1, 158, 8);
World.setBlock(coords.x+4,coords.y+3,  coords.z+2, 158, 8);
World.setBlock(coords.x+4,coords.y+3,  coords.z+3, 158, 8);
World.setBlock(coords.x+4,coords.y+4,  coords.z+2, 158, 5);
World.setBlock(coords.x+4,coords.y+2,  coords.z+1, 158, 13);
World.setBlock(coords.x+4,coords.y+2,  coords.z+2, 158, 13);
World.setBlock(coords.x+4,coords.y+2,  coords.z+3, 158, 13);
World.setBlock(coords.x+3,coords.y+2,  coords.z+3, VanillaBlockID.barrel, 0);
World.setBlock(coords.x+2,coords.y+2,  coords.z+2, BlockID.TradeRED, 0);
}}});

Callback.addCallback("GenerateChunk", function (chunkX, chunkZ) {

    let coords = GenerationUtils.randomCoords(chunkX, chunkZ, 64, 128);
    if(Math.random() < 0.004){
    coords = GenerationUtils.findSurface(coords.x, coords.y, coords.z);

if(World.getBlock(coords.x,coords.y+1,coords.z).id === 0 && GenerationUtils.canSeeSky(coords.x, coords.y + 1, coords.z)) { 
       World.setBlock(coords.x,coords.y+1, coords.z, 158, 5);
World.setBlock(coords.x+1,coords.y+1,  coords.z, 17, 0);  
World.setBlock(coords.x+1,coords.y+2,  coords.z, 17, 0);  
World.setBlock(coords.x+1,coords.y+3,  coords.z, 17, 0);  
World.setBlock(coords.x+1,coords.y+4,  coords.z, 85, 0);  
World.setBlock(coords.x+1,coords.y+5,  coords.z, 35, 5);  
World.setBlock(coords.x+1,coords.y+5,  coords.z+1, 35, 0);  
World.setBlock(coords.x,coords.y+1,  coords.z+1, 158, 0);  
World.setBlock(coords.x,coords.y+1,  coords.z+2, 158, 0);  
World.setBlock(coords.x,coords.y+1,  coords.z+3, 158, 0);  
World.setBlock(coords.x,coords.y+1,  coords.z+4, 158, 5);  
World.setBlock(coords.x+1,coords.y+1,  coords.z+1, 158, 8);  
World.setBlock(coords.x+1,coords.y+1,  coords.z+2, 158, 8);  
World.setBlock(coords.x+1,coords.y+1,  coords.z+3, 158, 8);  
World.setBlock(coords.x+1,coords.y+1,  coords.z+4, 17, 0);  
World.setBlock(coords.x+1,coords.y+2,  coords.z+4, 17, 0);  
World.setBlock(coords.x+1,coords.y+3,  coords.z+4, 17, 0);  
World.setBlock(coords.x+1,coords.y+4,  coords.z+4, 85, 0);  
World.setBlock(coords.x+1,coords.y+5,  coords.z+4, 35, 5);  
World.setBlock(coords.x+1,coords.y+5,  coords.z+2, 35, 5);  
World.setBlock(coords.x+1,coords.y+5,  coords.z+3, 35, 0);  
World.setBlock(coords.x+1,coords.y+5,  coords.z+4, 35, 5);  
World.setBlock(coords.x+2,coords.y+1,  coords.z, 158, 8);
World.setBlock(coords.x+3,coords.y+1,  coords.z, 158, 8);
World.setBlock(coords.x+4,coords.y+1,  coords.z, 17, 0);
World.setBlock(coords.x+2,coords.y+2,  coords.z, 158, 13);
World.setBlock(coords.x+3,coords.y+2,  coords.z, 158, 13);
World.setBlock(coords.x+4,coords.y+2,  coords.z, 17, 0);
World.setBlock(coords.x+2,coords.y+3,  coords.z, 158, 8);
World.setBlock(coords.x+3,coords.y+3,  coords.z, 158, 8);
World.setBlock(coords.x+4,coords.y+3,  coords.z, 17, 0);
World.setBlock(coords.x+2,coords.y+4,  coords.z, 158, 5);
World.setBlock(coords.x+4,coords.y+4,  coords.z, 158, 5);
World.setBlock(coords.x+2,coords.y+1,  coords.z+1, 158, 8);
World.setBlock(coords.x+3,coords.y+1,  coords.z+1, 158, 8);
World.setBlock(coords.x+4,coords.y+1,  coords.z+1, 158, 8);
World.setBlock(coords.x+2,coords.y+1,  coords.z+2, 158, 8);
World.setBlock(coords.x+3,coords.y+1,  coords.z+2, 158, 8);
World.setBlock(coords.x+4,coords.y+1,  coords.z+2, 158, 8);
World.setBlock(coords.x+2,coords.y+1,  coords.z+3, 158, 8);
World.setBlock(coords.x+3,coords.y+1,  coords.z+3, 158, 8);
World.setBlock(coords.x+4,coords.y+1,  coords.z+3, 158, 8);
World.setBlock(coords.x+2,coords.y+1,  coords.z+4, 158, 8);
World.setBlock(coords.x+3,coords.y+1,  coords.z+4, 158, 8);
World.setBlock(coords.x+4,coords.y+1,  coords.z+4, 17, 0);
World.setBlock(coords.x+2,coords.y+2,  coords.z+4, 158, 13);
World.setBlock(coords.x+3,coords.y+2,  coords.z+4, 158, 13);
World.setBlock(coords.x+4,coords.y+2,  coords.z+4, 17, 0);
World.setBlock(coords.x+2,coords.y+3,  coords.z+4, 158, 8);
World.setBlock(coords.x+3,coords.y+3,  coords.z+4, 158, 8);
World.setBlock(coords.x+4,coords.y+3,  coords.z+4, 17, 0);
World.setBlock(coords.x+2,coords.y+4,  coords.z+4, 158, 5);
World.setBlock(coords.x+4,coords.y+4,  coords.z+4, 158, 5);
World.setBlock(coords.x+4,coords.y+3,  coords.z+1, 158, 8);
World.setBlock(coords.x+4,coords.y+3,  coords.z+2, 158, 8);
World.setBlock(coords.x+4,coords.y+3,  coords.z+3, 158, 8);
World.setBlock(coords.x+4,coords.y+4,  coords.z+2, 158, 5);
World.setBlock(coords.x+4,coords.y+2,  coords.z+1, 158, 13);
World.setBlock(coords.x+4,coords.y+2,  coords.z+2, 158, 13);
World.setBlock(coords.x+4,coords.y+2,  coords.z+3, 158, 13);
World.setBlock(coords.x+3,coords.y+2,  coords.z+3, VanillaBlockID.barrel, 0);
World.setBlock(coords.x+2,coords.y+2,  coords.z+2, BlockID.TradeGREEN, 0);
}}});

Callback.addCallback("GenerateChunk", function (chunkX, chunkZ) {

    let coords = GenerationUtils.randomCoords(chunkX, chunkZ, 64, 128);
    if(Math.random() < 0.004){
    coords = GenerationUtils.findSurface(coords.x, coords.y, coords.z);

if(World.getBlock(coords.x,coords.y+1,coords.z).id === 0 && GenerationUtils.canSeeSky(coords.x, coords.y + 1, coords.z)) { 
       World.setBlock(coords.x,coords.y+1, coords.z, 158, 5);
World.setBlock(coords.x+1,coords.y+1,  coords.z, 17, 0);  
World.setBlock(coords.x+1,coords.y+2,  coords.z, 17, 0);  
World.setBlock(coords.x+1,coords.y+3,  coords.z, 17, 0);  
World.setBlock(coords.x+1,coords.y+4,  coords.z, 85, 0);  
World.setBlock(coords.x+1,coords.y+5,  coords.z, 35, 11);  
World.setBlock(coords.x+1,coords.y+5,  coords.z+1, 35, 0);  
World.setBlock(coords.x,coords.y+1,  coords.z+1, 158, 0);  
World.setBlock(coords.x,coords.y+1,  coords.z+2, 158, 0);  
World.setBlock(coords.x,coords.y+1,  coords.z+3, 158, 0);  
World.setBlock(coords.x,coords.y+1,  coords.z+4, 158, 5);  
World.setBlock(coords.x+1,coords.y+1,  coords.z+1, 158, 8);  
World.setBlock(coords.x+1,coords.y+1,  coords.z+2, 158, 8);  
World.setBlock(coords.x+1,coords.y+1,  coords.z+3, 158, 8);  
World.setBlock(coords.x+1,coords.y+1,  coords.z+4, 17, 0);  
World.setBlock(coords.x+1,coords.y+2,  coords.z+4, 17, 0);  
World.setBlock(coords.x+1,coords.y+3,  coords.z+4, 17, 0);  
World.setBlock(coords.x+1,coords.y+4,  coords.z+4, 85, 0);  
World.setBlock(coords.x+1,coords.y+5,  coords.z+4, 35, 11);  
World.setBlock(coords.x+1,coords.y+5,  coords.z+2, 35, 11);  
World.setBlock(coords.x+1,coords.y+5,  coords.z+3, 35, 0);  
World.setBlock(coords.x+1,coords.y+5,  coords.z+4, 35, 11);  
World.setBlock(coords.x+2,coords.y+1,  coords.z, 158, 8);
World.setBlock(coords.x+3,coords.y+1,  coords.z, 158, 8);
World.setBlock(coords.x+4,coords.y+1,  coords.z, 17, 0);
World.setBlock(coords.x+2,coords.y+2,  coords.z, 158, 13);
World.setBlock(coords.x+3,coords.y+2,  coords.z, 158, 13);
World.setBlock(coords.x+4,coords.y+2,  coords.z, 17, 0);
World.setBlock(coords.x+2,coords.y+3,  coords.z, 158, 8);
World.setBlock(coords.x+3,coords.y+3,  coords.z, 158, 8);
World.setBlock(coords.x+4,coords.y+3,  coords.z, 17, 0);
World.setBlock(coords.x+2,coords.y+4,  coords.z, 158, 5);
World.setBlock(coords.x+4,coords.y+4,  coords.z, 158, 5);
World.setBlock(coords.x+2,coords.y+1,  coords.z+1, 158, 8);
World.setBlock(coords.x+3,coords.y+1,  coords.z+1, 158, 8);
World.setBlock(coords.x+4,coords.y+1,  coords.z+1, 158, 8);
World.setBlock(coords.x+2,coords.y+1,  coords.z+2, 158, 8);
World.setBlock(coords.x+3,coords.y+1,  coords.z+2, 158, 8);
World.setBlock(coords.x+4,coords.y+1,  coords.z+2, 158, 8);
World.setBlock(coords.x+2,coords.y+1,  coords.z+3, 158, 8);
World.setBlock(coords.x+3,coords.y+1,  coords.z+3, 158, 8);
World.setBlock(coords.x+4,coords.y+1,  coords.z+3, 158, 8);
World.setBlock(coords.x+2,coords.y+1,  coords.z+4, 158, 8);
World.setBlock(coords.x+3,coords.y+1,  coords.z+4, 158, 8);
World.setBlock(coords.x+4,coords.y+1,  coords.z+4, 17, 0);
World.setBlock(coords.x+2,coords.y+2,  coords.z+4, 158, 13);
World.setBlock(coords.x+3,coords.y+2,  coords.z+4, 158, 13);
World.setBlock(coords.x+4,coords.y+2,  coords.z+4, 17, 0);
World.setBlock(coords.x+2,coords.y+3,  coords.z+4, 158, 8);
World.setBlock(coords.x+3,coords.y+3,  coords.z+4, 158, 8);
World.setBlock(coords.x+4,coords.y+3,  coords.z+4, 17, 0);
World.setBlock(coords.x+2,coords.y+4,  coords.z+4, 158, 5);
World.setBlock(coords.x+4,coords.y+4,  coords.z+4, 158, 5);
World.setBlock(coords.x+4,coords.y+3,  coords.z+1, 158, 8);
World.setBlock(coords.x+4,coords.y+3,  coords.z+2, 158, 8);
World.setBlock(coords.x+4,coords.y+3,  coords.z+3, 158, 8);
World.setBlock(coords.x+4,coords.y+4,  coords.z+2, 158, 5);
World.setBlock(coords.x+4,coords.y+2,  coords.z+1, 158, 13);
World.setBlock(coords.x+4,coords.y+2,  coords.z+2, 158, 13);
World.setBlock(coords.x+4,coords.y+2,  coords.z+3, 158, 13);
World.setBlock(coords.x+3,coords.y+2,  coords.z+3, VanillaBlockID.barrel, 0);
World.setBlock(coords.x+2,coords.y+2,  coords.z+2, BlockID.TradeBLUE, 0);
}}});

Callback.addCallback("GenerateChunk", function (chunkX, chunkZ) {

    let coords = GenerationUtils.randomCoords(chunkX, chunkZ, 64, 128);
    if(Math.random() < 0.004){
    coords = GenerationUtils.findSurface(coords.x, coords.y, coords.z);

if(World.getBlock(coords.x,coords.y+1,coords.z).id === 0 && GenerationUtils.canSeeSky(coords.x, coords.y + 1, coords.z)) { 
       World.setBlock(coords.x,coords.y+1, coords.z, 158, 5);
World.setBlock(coords.x+1,coords.y+1,  coords.z, 17, 0);  
World.setBlock(coords.x+1,coords.y+2,  coords.z, 17, 0);  
World.setBlock(coords.x+1,coords.y+3,  coords.z, 17, 0);  
World.setBlock(coords.x+1,coords.y+4,  coords.z, 85, 0);  
World.setBlock(coords.x+1,coords.y+5,  coords.z, 35, 4);  
World.setBlock(coords.x+1,coords.y+5,  coords.z+1, 35, 0);  
World.setBlock(coords.x,coords.y+1,  coords.z+1, 158, 0);  
World.setBlock(coords.x,coords.y+1,  coords.z+2, 158, 0);  
World.setBlock(coords.x,coords.y+1,  coords.z+3, 158, 0);  
World.setBlock(coords.x,coords.y+1,  coords.z+4, 158, 5);  
World.setBlock(coords.x+1,coords.y+1,  coords.z+1, 158, 8);  
World.setBlock(coords.x+1,coords.y+1,  coords.z+2, 158, 8);  
World.setBlock(coords.x+1,coords.y+1,  coords.z+3, 158, 8);  
World.setBlock(coords.x+1,coords.y+1,  coords.z+4, 17, 0);  
World.setBlock(coords.x+1,coords.y+2,  coords.z+4, 17, 0);  
World.setBlock(coords.x+1,coords.y+3,  coords.z+4, 17, 0);  
World.setBlock(coords.x+1,coords.y+4,  coords.z+4, 85, 0);  
World.setBlock(coords.x+1,coords.y+5,  coords.z+4, 35, 4);  
World.setBlock(coords.x+1,coords.y+5,  coords.z+2, 35, 4);  
World.setBlock(coords.x+1,coords.y+5,  coords.z+3, 35, 0);  
World.setBlock(coords.x+1,coords.y+5,  coords.z+4, 35, 4);  
World.setBlock(coords.x+2,coords.y+1,  coords.z, 158, 8);
World.setBlock(coords.x+3,coords.y+1,  coords.z, 158, 8);
World.setBlock(coords.x+4,coords.y+1,  coords.z, 17, 0);
World.setBlock(coords.x+2,coords.y+2,  coords.z, 158, 13);
World.setBlock(coords.x+3,coords.y+2,  coords.z, 158, 13);
World.setBlock(coords.x+4,coords.y+2,  coords.z, 17, 0);
World.setBlock(coords.x+2,coords.y+3,  coords.z, 158, 8);
World.setBlock(coords.x+3,coords.y+3,  coords.z, 158, 8);
World.setBlock(coords.x+4,coords.y+3,  coords.z, 17, 0);
World.setBlock(coords.x+2,coords.y+4,  coords.z, 158, 5);
World.setBlock(coords.x+4,coords.y+4,  coords.z, 158, 5);
World.setBlock(coords.x+2,coords.y+1,  coords.z+1, 158, 8);
World.setBlock(coords.x+3,coords.y+1,  coords.z+1, 158, 8);
World.setBlock(coords.x+4,coords.y+1,  coords.z+1, 158, 8);
World.setBlock(coords.x+2,coords.y+1,  coords.z+2, 158, 8);
World.setBlock(coords.x+3,coords.y+1,  coords.z+2, 158, 8);
World.setBlock(coords.x+4,coords.y+1,  coords.z+2, 158, 8);
World.setBlock(coords.x+2,coords.y+1,  coords.z+3, 158, 8);
World.setBlock(coords.x+3,coords.y+1,  coords.z+3, 158, 8);
World.setBlock(coords.x+4,coords.y+1,  coords.z+3, 158, 8);
World.setBlock(coords.x+2,coords.y+1,  coords.z+4, 158, 8);
World.setBlock(coords.x+3,coords.y+1,  coords.z+4, 158, 8);
World.setBlock(coords.x+4,coords.y+1,  coords.z+4, 17, 0);
World.setBlock(coords.x+2,coords.y+2,  coords.z+4, 158, 13);
World.setBlock(coords.x+3,coords.y+2,  coords.z+4, 158, 13);
World.setBlock(coords.x+4,coords.y+2,  coords.z+4, 17, 0);
World.setBlock(coords.x+2,coords.y+3,  coords.z+4, 158, 8);
World.setBlock(coords.x+3,coords.y+3,  coords.z+4, 158, 8);
World.setBlock(coords.x+4,coords.y+3,  coords.z+4, 17, 0);
World.setBlock(coords.x+2,coords.y+4,  coords.z+4, 158, 5);
World.setBlock(coords.x+4,coords.y+4,  coords.z+4, 158, 5);
World.setBlock(coords.x+4,coords.y+3,  coords.z+1, 158, 8);
World.setBlock(coords.x+4,coords.y+3,  coords.z+2, 158, 8);
World.setBlock(coords.x+4,coords.y+3,  coords.z+3, 158, 8);
World.setBlock(coords.x+4,coords.y+4,  coords.z+2, 158, 5);
World.setBlock(coords.x+4,coords.y+2,  coords.z+1, 158, 13);
World.setBlock(coords.x+4,coords.y+2,  coords.z+2, 158, 13);
World.setBlock(coords.x+4,coords.y+2,  coords.z+3, 158, 13);
World.setBlock(coords.x+3,coords.y+2,  coords.z+3, VanillaBlockID.barrel, 0);
World.setBlock(coords.x+2,coords.y+2,  coords.z+2, BlockID.TradeYELLOW, 0);
}}});




// file: armoreffect.js

Callback.addCallback("tick", function(){
    var helmet = Player.getArmorSlot(0);
    var chest = Player.getArmorSlot(1);
    var legs = Player.getArmorSlot(2);
    var boots = Player.getArmorSlot(3);
    var pos = Player.getPosition();

if (helmet.id == ItemID.zombie_helmet && chest.id == ItemID.zombie_chestplate && legs.id == ItemID.zombie_leggings && boots.id == ItemID.zombie_boots) {
    Entity.addEffect(Player.get(), Native.PotionEffect.damageBoost, 5, 3);
   }

if (helmet.id == ItemID.skelet_helmet && chest.id == ItemID.skelet_chestplate && legs.id == ItemID.skelet_leggings && boots.id == ItemID.skelet_boots) {
    Entity.addEffect(Player.get(), Native.PotionEffect.slow_falling, 5, 3);
   }

if (helmet.id == ItemID.spider_helmet && chest.id == ItemID.spider_chestplate && legs.id == ItemID.spider_leggings && boots.id == ItemID.spider_boots) {
    Entity.addEffect(Player.get(), Native.PotionEffect.nightVision, 5, 3);
    Entity.addEffect(Player.get(), Native.PotionEffect.slow_falling, 5, 3);
   }

if (helmet.id == ItemID.creeper_helmet && chest.id == ItemID.creeper_chestplate && legs.id == ItemID.creeper_leggings && boots.id == ItemID.creeper_boots) {
    Entity.addEffect(Player.get(), Native.PotionEffect.damageResistance, 25, 3);
 Entity.addEffect(Player.get(), Native.PotionEffect.heal, 10, 3);
  }

if (helmet.id == ItemID.sprut_helmet && chest.id == ItemID.sprut_chestplate && legs.id == ItemID.sprut_leggings && boots.id == ItemID.sprut_boots) {
    Entity.addEffect(Player.get(), Native.PotionEffect.waterBreathing, 10, 3);
 Entity.addEffect(Player.get(), Native.PotionEffect.heal, 10, 3);
Entity.addEffect(Player.get(), Native.PotionEffect.conduit_power, 10, 3);
  }

if (helmet.id == ItemID.slime_helmet && chest.id == ItemID.slime_chestplate && legs.id == ItemID.slime_leggings && boots.id == ItemID.slime_boots) {
    Entity.addEffect(Player.get(), Native.PotionEffect.jump, 5, 3);
 Entity.addEffect(Player.get(), Native.PotionEffect.regeneration, 5, 3);
Entity.addEffect(Player.get(), Native.PotionEffect.slow_falling, 5, 3);
  }

if (helmet.id == ItemID.ocelot_helmet && chest.id == ItemID.ocelot_chestplate && legs.id == ItemID.ocelot_leggings && boots.id == ItemID.ocelot_boots) {
    Entity.addEffect(Player.get(), Native.PotionEffect.movementSpeed, 10, 3);
 Entity.addEffect(Player.get(), Native.PotionEffect.digSpeed, 10, 3);
Entity.addEffect(Player.get(), Native.PotionEffect.damageBoost, 10, 3);
  }

if (helmet.id == ItemID.blaze_helmet && chest.id == ItemID.blaze_chestplate && legs.id == ItemID.blaze_leggings && boots.id == ItemID.blaze_boots) {
    Entity.addEffect(Player.get(), Native.PotionEffect.fireResistance, 25, 3);
    Entity.addEffect(Player.get(), Native.PotionEffect.absorption, 25, 3);
Entity.addEffect(Player.get(), Native.PotionEffect.healthBoost, 25, 3);
Entity.addEffect(Player.get(), Native.PotionEffect.damageBoost, 25, 3);
   }
   
if (helmet.id == ItemID.end_helmet && chest.id == ItemID.end_chestplate && legs.id == ItemID.end_leggings && boots.id == ItemID.end_boots) {
    Entity.addEffect(Player.get(), Native.PotionEffect.invisibility, 3, 3);
    Entity.addEffect(Player.get(), Native.PotionEffect.movementSpeed, 15, 3);
    Entity.addEffect(Player.get(), Native.PotionEffect.healthBoost, 25, 3);
    Entity.addEffect(Player.get(), Native.PotionEffect.damageBoost, 25, 3);
   }
});




// file: translation.js

Translation.addTranslation("Слиток Крипера", {en: "Creeper Ingot"});
Translation.addTranslation("Слиток Скелета", {en: "Skelet Ingot"});
Translation.addTranslation("Слиток Ифрита", {en: "Ifrit Ingot"});
Translation.addTranslation("Слиток Паука", {en: "Spider Ingot"});
Translation.addTranslation("Слиток Эндермена", {en: "Enderman Ingot"});
Translation.addTranslation("Слиток Зомбака", {en: "Zombie Ingot"});
Translation.addTranslation("Меч Крипера", {en: "Creeper Sword"});
Translation.addTranslation("Лопата Крипера", {en: "Creeper Shovel"});
Translation.addTranslation("Топор Крипера", {en: "Creeper Axe"});
Translation.addTranslation("Кирка Крипера", {en: "Creeper Pickaxe"});
Translation.addTranslation("Меч Скелета", {en: "Skeleton Sword"});
Translation.addTranslation("Лопата Скелета", {en: "Skeleton Shovel"});
Translation.addTranslation("Топор Скелета", {en: "Skeleton Axe"});
Translation.addTranslation("Кирка Скелета", {en: "Skeleton Pickaxe"});
Translation.addTranslation("Меч Паука", {en: "Spider Sword"});
Translation.addTranslation("Лопата Паука", {en: "Spider Shovel"});
Translation.addTranslation("Топор Паука", {en: "Spider Axe"});
Translation.addTranslation("Кирка Паука", {en: "Spider Pickaxe"});
Translation.addTranslation("Меч Ифрита", {en: "Blaze Sword"});
Translation.addTranslation("Лопата Ифрита", {en: "Blaze Shovel"});
Translation.addTranslation("Топор Ифрита", {en: "Blaze Axe"});
Translation.addTranslation("Кирка Ифрита", {en: "Blaze Pickaxe"});
Translation.addTranslation("Меч Зомбака", {en: "Zombie Sword"});
Translation.addTranslation("Лопата Зомбака", {en: "Zombie Shovel"});
Translation.addTranslation("Топор Зомбака", {en: "Zombie Axe"});
Translation.addTranslation("Кирка Зомбака", {en: "Zombie Pickaxe"});
Translation.addTranslation("Меч Эндермена", {en: "Enderman Sword"});
Translation.addTranslation("Лопата Эндермена", {en: "Enderman Shovel"});
Translation.addTranslation("Топор Эндермена", {en: "Enderman Axe"});
Translation.addTranslation("Кирка Эндермена", {en: "Enderman Pickaxe"});
Translation.addTranslation("Усиленный Топор Эндермена", {en: "Update Enderman Axe"});
Translation.addTranslation("Усиленный Топор Ифрита", {en: "Update Blaze Axe"});
Translation.addTranslation("Усиленный Топор Зомбака", {en: "Update Zombie Axe"});
Translation.addTranslation("Усиленный Топор Скелета", {en: "Update Skeleton Axe"});
Translation.addTranslation("Усиленный Топор Паука", {en: "Update Spider Axe"});
Translation.addTranslation("Усиленный Топор Крипера", {en: "Update Creeper Axe"});
Translation.addTranslation("Усиленный Кирка Эндермена", {en: "Update Enderman Pickaxe"});
Translation.addTranslation("Усиленный Кирка Скелета", {en: "Update Skeleton Pickaxe"});
Translation.addTranslation("Усиленный Кирка Паука", {en: "Update Spider Pickaxe"});
Translation.addTranslation("Усиленный Кирка Зомбака", {en: "Update Zombie Pickaxe"});
Translation.addTranslation("Усиленный Кирка Крипера", {en: "Update Creeper Pickaxe"});
Translation.addTranslation("Усиленный Кирка Ифрита", {en: "Update Blaze Pickaxe"});
Translation.addTranslation("Шлем Крипера", {en: "Creeper Helmet"});
Translation.addTranslation("Шлем Скелета", {en: "Skeleton Helmet"});
Translation.addTranslation("Шлем Паука", {en: "Spider Helmet"});
Translation.addTranslation("Шлем Ифрита", {en: "Blaze Helmet"});
Translation.addTranslation("Шлем Зомбака", {en: "Zombie Helmet"});
Translation.addTranslation("Шлем Эндермена", {en: "Enderman Helmet"});
Translation.addTranslation("Нагрудник Крипера", {en: "Creeper Chestplate"});
Translation.addTranslation("Нагрудник Скелета", {en: "Skeleton Chestplate"});
Translation.addTranslation("Нагрудник Паука", {en: "Spider Chestplate"});
Translation.addTranslation("Нагрудник Зомбака", {en: "Creeper Chestplate"});
Translation.addTranslation("Нагрудник Ифрита", {en: "Blaze Chestplate"});
Translation.addTranslation("Нагрудник Эндермена", {en: "Enderman Chestplate"});
Translation.addTranslation("Штаны Крипера", {en: "Creeper Leggings"});
Translation.addTranslation("Штаны Скелета", {en: "Creeper Leggings"});
Translation.addTranslation("Штаны Паука", {en: "Creeper Leggings"});
Translation.addTranslation("Штаны Зомбака", {en: "Creeper Leggings"});
Translation.addTranslation("Штаны Ифрита", {en: "Creeper Leggings"});
Translation.addTranslation("Штаны Эндермена", {en: "Creeper Leggings"});
Translation.addTranslation("Ботинки Крипера", {en: "Creeper Boots"});
Translation.addTranslation("Ботинки Скелета", {en: "Skeleton Boots"});
Translation.addTranslation("Ботинки Паука", {en: "Spider Boots"});
Translation.addTranslation("Ботинки Зомбака", {en: "Zombie Boots"});
Translation.addTranslation("Ботинки Ифрита", {en: "Blaze Boots"});
Translation.addTranslation("Ботинки Эндермена", {en: "Enderman Boots"});
Translation.addTranslation("Эндерменовый блок", {en: "Enderman Block"});
Translation.addTranslation("Ифритовый блок", {en: "Blaze Block"});
Translation.addTranslation("Пауковый блок", {en: "Spider Block"});
Translation.addTranslation("Зомбаковый блок", {en: "Zombie Block"});
Translation.addTranslation("Скелетовый блок", {en: "Skeleton Block"});
Translation.addTranslation("Криперовый блок", {en: "Creeper Block"});
Translation.addTranslation("Mobs Furnace", {ru: "Печка Мобы"});
Translation.addTranslation("Слиток Оцелота", {en: "Ocelot Ingot"});
Translation.addTranslation("Слиток Слиза", {en: "Slime Ingot"});
Translation.addTranslation("Слиток Спрута", {en: "Squid Ingot"});
Translation.addTranslation("Оцелотовый блок", {en: "Ocelot Block"});
Translation.addTranslation("Слизовый блок", {en: "Slime Block"});
Translation.addTranslation("Спрутовый блок", {en: "Squid Block"});
Translation.addTranslation("Шлем Слиза", {en: "Slime Helmet"});
Translation.addTranslation("Шлем Оцелота", {en: "Ocelot Helmet"});
Translation.addTranslation("Шлем Спрута", {en: "Squid Helmet"});
Translation.addTranslation("Нагрудник Слиза", {en: "Slime Chestplate"});
Translation.addTranslation("Нагрудник Оцелота", {en: "Ocelot Chestplate"});
Translation.addTranslation("Нагрудник Спрута", {en: "Squid Chestplate"});
Translation.addTranslation("Штаны Слиза", {en: "Slime Leggings"});
Translation.addTranslation("Штаны Оцелота", {en: "Ocelot Leggings"});
Translation.addTranslation("Штаны Спрута", {en: "Squid Leggings"});
Translation.addTranslation("Ботинки Слиза", {en: "Slime Boots"});
Translation.addTranslation("Ботинки Оцелота", {en: "Ocelot Boots"});
Translation.addTranslation("Ботинки Спрута", {en: "Squid Boots"});
Translation.addTranslation("Меч Слиза", {en: "Slime Sword"});
Translation.addTranslation("Меч Оцелота", {en: "Ocelot Sword"});
Translation.addTranslation("Меч Спрута", {en: "Squid Sword"});
Translation.addTranslation("Лопата Слиза", {en: "Slime Shovel"});
Translation.addTranslation("Лопата Оцелота", {en: "Ocelot Shovel"});
Translation.addTranslation("Лопата Спрута", {en: "Squid Shovel"});
Translation.addTranslation("Топор Слиза", {en: "Slime Axe"});
Translation.addTranslation("Топор Оцелота", {en: "Ocelot Axe"});
Translation.addTranslation("Топор Спрута", {en: "Squid Axe"});
Translation.addTranslation("Кирка Слиза", {en: "Slime Pickaxe"});
Translation.addTranslation("Кирка Оцелота", {en: "Ocelot Pickaxe"});
Translation.addTranslation("Кирка Спрута", {en: "Squid Pickaxe"});
Translation.addTranslation("Усиленный Топор Слиза", {en: "Update Slime Axe"});
Translation.addTranslation("Усиленный Кирка Слиза", {en: "Update Slime Pickaxe"});
Translation.addTranslation("Усиленный Топор Оцелота", {en: "Update Ocelot Axe"});
Translation.addTranslation("Усиленный Кирка Оцелота", {en: "Update Ocelot Pickaxe"});
Translation.addTranslation("Усиленный Топор Спрута", {en: "Update Squid Axe"});
Translation.addTranslation("Усиленный Кирка Спрута", {en: "Update Squid Pickaxe"});
Translation.addTranslation("Голова Скелета", {en: "Skeleton Head"});
Translation.addTranslation("Голова Зомби", {en: "Zombie Head"});
Translation.addTranslation("Голова Эндермена", {en: "Enderman Head"});
Translation.addTranslation("Сюрикен Крипера", {en: "Shuriken Creeper"});
Translation.addTranslation("Сюрикен Зомбака", {en: "Shuriken Zombie"});
Translation.addTranslation("Сюрикен Эндермена", {en: "Shuriken Enderman"});
Translation.addTranslation("Сюрикен Паука", {en: "Shuriken Spider"});
Translation.addTranslation("Сюрикен Ифрита", {en: "Shuriken Blaze"});
Translation.addTranslation("Сюрикен Скелета", {en: "Shuriken Skeleton"});
Translation.addTranslation("Сюрикен Оцелота", {en: "Shuriken Ocelot"});
Translation.addTranslation("Сюрикен Слиза", {en: "Shuriken Slime"});
Translation.addTranslation("Сюрикен Спрута", {en: "Shuriken Squid"});




// file: crafts.js

//armor crafts
Recipes.addShaped({id: ItemID.zombie_helmet, count: 1, data: 0}, [
    "xxx",
    "x x"
], ['x', ItemID.zombie_ingot, 0]);

Recipes.addShaped({id: ItemID.zombie_chestplate, count: 1, data: 0}, [
    "x x",
    "xxx",
    "xxx"
], ['x', ItemID.zombie_ingot, 0]);

Recipes.addShaped({id: ItemID.zombie_leggings, count: 1, data: 0}, [
    "xxx",
    "x x",
    "x x"
], ['x', ItemID.zombie_ingot, 0]);

Recipes.addShaped({id: ItemID.zombie_boots, count: 1, data: 0}, [
    "x x",
    "x x"
], ['x', ItemID.zombie_ingot, 0]);

Recipes.addShaped({id: ItemID.skelet_helmet, count: 1, data: 0}, [
    "xxx",
    "x x"
], ['x', ItemID.skelet_ingot, 0]);

Recipes.addShaped({id: ItemID.skelet_chestplate, count: 1, data: 0}, [
    "x x",
    "xxx",
    "xxx"
], ['x', ItemID.skelet_ingot, 0]);

Recipes.addShaped({id: ItemID.skelet_leggings, count: 1, data: 0}, [
    "xxx",
    "x x",
    "x x"
], ['x', ItemID.skelet_ingot, 0]);

Recipes.addShaped({id: ItemID.skelet_boots, count: 1, data: 0}, [
    "x x",
    "x x"
], ['x', ItemID.skelet_ingot, 0]);

Recipes.addShaped({id: ItemID.spider_helmet, count: 1, data: 0}, [
    "xxx",
    "x x"
], ['x', ItemID.spider_ingot, 0]);

Recipes.addShaped({id: ItemID.spider_chestplate, count: 1, data: 0}, [
    "x x",
    "xxx",
    "xxx"
], ['x', ItemID.spider_ingot, 0]);

Recipes.addShaped({id: ItemID.spider_leggings, count: 1, data: 0}, [
    "xxx",
    "x x",
    "x x"
], ['x', ItemID.spider_ingot, 0]);

Recipes.addShaped({id: ItemID.spider_boots, count: 1, data: 0}, [
    "x x",
    "x x"
], ['x', ItemID.spider_ingot, 0]);

Recipes.addShaped({id: ItemID.creeper_helmet, count: 1, data: 0}, [
    "xxx",
    "x x"
], ['x', ItemID.creeper_ingot, 0]);

Recipes.addShaped({id: ItemID.creeper_chestplate, count: 1, data: 0}, [
    "x x",
    "xxx",
    "xxx"
], ['x', ItemID.creeper_ingot, 0]);

Recipes.addShaped({id: ItemID.creeper_leggings, count: 1, data: 0}, [
    "xxx",
    "x x",
    "x x"
], ['x', ItemID.creeper_ingot, 0]);

Recipes.addShaped({id: ItemID.creeper_boots, count: 1, data: 0}, [
    "x x",
    "x x"
], ['x', ItemID.creeper_ingot, 0]);

Recipes.addShaped({id: ItemID.sprut_helmet, count: 1, data: 0}, [
    "xxx",
    "x x"
    ], ['x', ItemID.sprut_ingot, 0]);

Recipes.addShaped({id: ItemID.sprut_chestplate, count: 1, data: 0}, [
    "x x",
    "xxx",
    "xxx"
], ['x', ItemID.sprut_ingot, 0]);

Recipes.addShaped({id: ItemID.sprut_leggings, count: 1, data: 0}, [
    "xxx",
    "x x",
    "x x"
], ['x', ItemID.sprut_ingot, 0]);

Recipes.addShaped({id: ItemID.sprut_boots, count: 1, data: 0}, [
    "x x",
    "x x"
], ['x', ItemID.sprut_ingot, 0]);

Recipes.addShaped({id: ItemID.slime_helmet, count: 1, data: 0}, [
    "xxx",
    "x x"
], ['x', ItemID.slime_ingot, 0]);

Recipes.addShaped({id: ItemID.slime_chestplate, count: 1, data: 0}, [
    "x x",
    "xxx",
    "xxx"
], ['x', ItemID.slime_ingot, 0]);

Recipes.addShaped({id: ItemID.slime_leggings, count: 1, data: 0}, [
    "xxx",
    "x x",
    "x x"
], ['x', ItemID.slime_ingot, 0]);

Recipes.addShaped({id: ItemID.slime_boots, count: 1, data: 0}, [
    "x x",
    "x x"
], ['x', ItemID.slime_ingot, 0]);

Recipes.addShaped({id: ItemID.ocelot_helmet, count: 1, data: 0}, [
    "xxx",
    "x x"
    ], ['x', ItemID.ocelot_ingot, 0]);

Recipes.addShaped({id: ItemID.ocelot_chestplate, count: 1, data: 0}, [
    "x x",
    "xxx",
    "xxx"
], ['x', ItemID.ocelot_ingot, 0]);

Recipes.addShaped({id: ItemID.ocelot_leggings, count: 1, data: 0}, [
    "xxx",
    "x x",
    "x x"
], ['x', ItemID.ocelot_ingot, 0]);

Recipes.addShaped({id: ItemID.ocelot_boots, count: 1, data: 0}, [
    "x x",
    "x x"
], ['x', ItemID.ocelot_ingot, 0]);

Recipes.addShaped({id: ItemID.blaze_helmet, count: 1, data: 0}, [
    "xxx",
    "x x"
], ['x', ItemID.blaze_ingot, 0]);

Recipes.addShaped({id: ItemID.blaze_chestplate, count: 1, data: 0}, [
    "x x",
    "xxx",
    "xxx"
], ['x', ItemID.blaze_ingot, 0]);

Recipes.addShaped({id: ItemID.blaze_leggings, count: 1, data: 0}, [
    "xxx",
    "x x",
    "x x"
], ['x', ItemID.blaze_ingot, 0]);

Recipes.addShaped({id: ItemID.blaze_boots, count: 1, data: 0}, [
    "x x",
    "x x"
], ['x', ItemID.blaze_ingot, 0]);

Recipes.addShaped({id: ItemID.end_helmet, count: 1, data: 0}, [
    "xxx",
    "x x"
], ['x', ItemID.end_ingot, 0]);

Recipes.addShaped({id: ItemID.end_chestplate, count: 1, data: 0}, [
    "x x",
    "xxx",
    "xxx"
], ['x', ItemID.end_ingot, 0]);

Recipes.addShaped({id: ItemID.end_leggings, count: 1, data: 0}, [
    "xxx",
    "x x",
    "x x"
], ['x', ItemID.end_ingot, 0]);

Recipes.addShaped({id: ItemID.end_boots, count: 1, data: 0}, [
    "x x",
    "x x"
], ['x', ItemID.end_ingot, 0]);

//tools crafts
Recipes.addShaped({id: ItemID.zombie_sword, count: 1, data: 0}, [
    "a",
    "a",
    "b"
], ['a', ItemID.zombie_ingot, 0, 'b', 280, 0]);

Recipes.addShaped({id: ItemID.zombie_shovel, count: 1, data: 0}, [
    "a",
    "b",
    "b"
], ['a', ItemID.zombie_ingot, 0, 'b', 280, 0]);

Recipes.addShaped({id: ItemID.zombie_pickaxe, count: 1, data: 0}, [
    "aaa",
    " b ",
    " b "
], ['a', ItemID.zombie_ingot, 0, 'b', 280, 0]);

Recipes.addShaped({id: ItemID.zombie_axe, count: 1, data: 0}, [
    "aa",
    "ab",
    " b"
], ['a', ItemID.zombie_ingot, 0, 'b', 280, 0]);

Recipes.addShaped({id: ItemID.skelet_sword, count: 1, data: 0}, [
    "a",
    "a",
    "b"
], ['a', ItemID.skelet_ingot, 0, 'b', 352, 0]);

Recipes.addShaped({id: ItemID.skelet_shovel, count: 1, data: 0}, [
    "a",
    "b",
    "b"
], ['a', ItemID.skelet_ingot, 0, 'b', 352, 0]);

Recipes.addShaped({id: ItemID.skelet_pickaxe, count: 1, data: 0}, [
    "aaa",
    " b ",
    " b "
], ['a', ItemID.skelet_ingot, 0, 'b', 352, 0]);

Recipes.addShaped({id: ItemID.skelet_axe, count: 1, data: 0}, [
    "aa",
    "ab",
    " b"
], ['a', ItemID.skelet_ingot, 0, 'b', 352, 0]);

Recipes.addShaped({id: ItemID.spider_sword, count: 1, data: 0}, [
    "a",
    "a",
    "b"
], ['a', ItemID.spider_ingot, 0, 'b', 280, 0]);

Recipes.addShaped({id: ItemID.spider_shovel, count: 1, data: 0}, [
    "a",
    "b",
    "b"
], ['a', ItemID.spider_ingot, 0, 'b', 280, 0]);

Recipes.addShaped({id: ItemID.spider_pickaxe, count: 1, data: 0}, [
    "aaa",
    " b ",
    " b "
], ['a', ItemID.spider_ingot, 0, 'b', 280, 0]);

Recipes.addShaped({id: ItemID.spider_axe, count: 1, data: 0}, [
    "aa",
    "ab",
    " b"
], ['a', ItemID.spider_ingot, 0, 'b', 280, 0]);

Recipes.addShaped({id: ItemID.creeper_sword, count: 1, data: 0}, [
    "a",
    "a",
    "b"
], ['a', ItemID.creeper_ingot, 0, 'b', 280, 0]);

Recipes.addShaped({id: ItemID.creeper_shovel, count: 1, data: 0}, [
    "a",
    "b",
    "b"
], ['a', ItemID.creeper_ingot, 0, 'b', 280, 0]);

Recipes.addShaped({id: ItemID.creeper_pickaxe, count: 1, data: 0}, [
    "aaa",
    " b ",
    " b "
], ['a', ItemID.creeper_ingot, 0, 'b', 280, 0]);

Recipes.addShaped({id: ItemID.creeper_axe, count: 1, data: 0}, [
    "aa",
    "ab",
    " b"
], ['a', ItemID.creeper_ingot, 0, 'b', 280, 0]);

Recipes.addShaped({id: ItemID.sprut_sword, count: 1, data: 0}, [
    "a",
    "a",
    "b"
], ['a', ItemID.sprut_ingot, 0, 'b', 280, 0]);

Recipes.addShaped({id: ItemID.sprut_shovel, count: 1, data: 0}, [
    "a",
    "b",
    "b"
], ['a', ItemID.sprut_ingot, 0, 'b', 280, 0]);

Recipes.addShaped({id: ItemID.sprut_pickaxe, count: 1, data: 0}, [
    "aaa",
    " b ",
    " b "
], ['a', ItemID.sprut_ingot, 0, 'b', 280, 0]);

Recipes.addShaped({id: ItemID.sprut_axe, count: 1, data: 0}, [
    "aa",
    "ab",
    " b"
    ], ['a', ItemID.sprut_ingot, 0, 'b', 280, 0]);

Recipes.addShaped({id: ItemID.slime_sword, count: 1, data: 0}, [
    "a",
    "a",
    "b"
], ['a', ItemID.slime_ingot, 0, 'b', 280, 0]);

Recipes.addShaped({id: ItemID.slime_shovel, count: 1, data: 0}, [
    "a",
    "b",
    "b"
], ['a', ItemID.slime_ingot, 0, 'b', 280, 0]);

Recipes.addShaped({id: ItemID.slime_pickaxe, count: 1, data: 0}, [
    "aaa",
    " b ",
    " b "
], ['a', ItemID.slime_ingot, 0, 'b', 280, 0]);

Recipes.addShaped({id: ItemID.slime_axe, count: 1, data: 0}, [
    "aa",
    "ab",
    " b"
], ['a', ItemID.slime_ingot, 0, 'b', 280, 0]);

Recipes.addShaped({id: ItemID.ocelot_sword, count: 1, data: 0}, [
    "a",
    "a",
    "b"
], ['a', ItemID.ocelot_ingot, 0, 'b', 280, 0]);

Recipes.addShaped({id: ItemID.ocelot_shovel, count: 1, data: 0}, [
    "a",
    "b",
    "b"
], ['a', ItemID.ocelot_ingot, 0, 'b', 280, 0]);

Recipes.addShaped({id: ItemID.ocelot_pickaxe, count: 1, data: 0}, [
    "aaa",
    " b ",
    " b "
], ['a', ItemID.ocelot_ingot, 0, 'b', 280, 0]);

Recipes.addShaped({id: ItemID.ocelot_axe, count: 1, data: 0}, [
    "aa",
    "ab",
    " b"
    ], ['a', ItemID.ocelot_ingot, 0, 'b', 280, 0]);

Recipes.addShaped({id: ItemID.blaze_sword, count: 1, data: 0}, [
    "a",
    "a",
    "b"
], ['a', ItemID.blaze_ingot, 0, 'b', 280, 0]);

Recipes.addShaped({id: ItemID.blaze_shovel, count: 1, data: 0}, [
    "a",
    "b",
    "b"
], ['a', ItemID.blaze_ingot, 0, 'b', 280, 0]);

Recipes.addShaped({id: ItemID.blaze_pickaxe, count: 1, data: 0}, [
    "aaa",
    " b ",
    " b "
], ['a', ItemID.blaze_ingot, 0, 'b', 280, 0]);

Recipes.addShaped({id: ItemID.blaze_axe, count: 1, data: 0}, [
    "aa",
    "ab",
    " b"
], ['a', ItemID.blaze_ingot, 0, 'b', 280, 0]);

Recipes.addShaped({id: ItemID.end_sword, count: 1, data: 0}, [
    "a",
    "a",
    "b"
], ['a', ItemID.end_ingot, 0, 'b', 280, 0]);

Recipes.addShaped({id: ItemID.end_shovel, count: 1, data: 0}, [
    "a",
    "b",
    "b"
], ['a', ItemID.end_ingot, 0, 'b', 280, 0]);

Recipes.addShaped({id: ItemID.end_pickaxe, count: 1, data: 0}, [
    "aaa",
    " b ",
    " b "
], ['a', ItemID.end_ingot, 0, 'b', 280, 0]);

Recipes.addShaped({id: ItemID.end_axe, count: 1, data: 0}, [
    "aa",
    "ab",
    " b"
], ['a', ItemID.end_ingot, 0, 'b', 280, 0]);

//up tools crafts
Recipes.addShaped({id: ItemID.UP_zombie_pickaxe, count: 1, data: 0}, [
    "aaa",
    "ada",
    "aaa"
], ['a', ItemID.zombie_ingot, 0, 'd', ItemID.zombie_pickaxe, 0]);

Recipes.addShaped({id: ItemID.UP_skelet_pickaxe, count: 1, data: 0}, [
    "aaa",
    "ada",
    "aaa"
], ['a', ItemID.skelet_ingot, 0, 'd', ItemID.skelet_pickaxe, 0]);

Recipes.addShaped({id: ItemID.UP_spider_pickaxe, count: 1, data: 0}, [
    "aaa",
    "ada",
    "aaa"
], ['a', ItemID.spider_ingot, 0, 'd', ItemID.spider_pickaxe, 0]);

Recipes.addShaped({id: ItemID.UP_creeper_pickaxe, count: 1, data: 0}, [
    "aaa",
    "ada",
    "aaa"
], ['a', ItemID.creeper_ingot, 0, 'd', ItemID.creeper_pickaxe, 0]);

Recipes.addShaped({id: ItemID.UP_sprut_pickaxe, count: 1, data: 0}, [
    "aaa",
    "ada",
    "aaa"
    ], ['a', ItemID.sprut_ingot, 0, 'd', ItemID.sprut_pickaxe, 0]);

Recipes.addShaped({id: ItemID.UP_slime_pickaxe, count: 1, data: 0}, [
    "aaa",
    "ada",
    "aaa"
    ], ['a', ItemID.slime_ingot, 0, 'd', ItemID.slime_pickaxe, 0]);

Recipes.addShaped({id: ItemID.UP_ocelot_pickaxe, count: 1, data: 0}, [
    "aaa",
    "ada",
    "aaa"
    ], ['a', ItemID.ocelot_ingot, 0, 'd', ItemID.ocelot_pickaxe, 0]);
    
    Recipes.addShaped({id: ItemID.UP_blaze_pickaxe, count: 1, data: 0}, [
    "aaa",
    "ada",
    "aaa"
], ['a', ItemID.blaze_ingot, 0, 'd', ItemID.blaze_pickaxe, 0]);
    
    Recipes.addShaped({id: ItemID.UP_end_pickaxe, count: 1, data: 0}, [
    "aaa",
    "ada",
    "aaa"
], ['a', ItemID.end_ingot, 0, 'd', ItemID.end_pickaxe, 0]);

Recipes.addShaped({id: ItemID.UP_zombie_axe, count: 1, data: 0}, [
    "aaa",
    "ada",
    "aaa"
], ['a', ItemID.zombie_ingot, 0, 'd', ItemID.zombie_axe, 0]);

Recipes.addShaped({id: ItemID.UP_skelet_axe, count: 1, data: 0}, [
    "aaa",
    "ada",
    "aaa"
], ['a', ItemID.skelet_ingot, 0, 'd', ItemID.skelet_axe, 0]);

Recipes.addShaped({id: ItemID.UP_spider_axe, count: 1, data: 0}, [
    "aaa",
    "ada",
    "aaa"
], ['a', ItemID.spider_ingot, 0, 'd', ItemID.spider_axe, 0]);

    Recipes.addShaped({id: ItemID.UP_creeper_axe, count: 1, data: 0}, [
    "aaa",
    "ada",
    "aaa"
], ['a', ItemID.creeper_ingot, 0, 'd', ItemID.creeper_axe, 0]);

Recipes.addShaped({id: ItemID.UP_sprut_axe, count: 1, data: 0}, [
    "aaa",
    "ada",
    "aaa"
    ], ['a', ItemID.sprut_ingot, 0, 'd', ItemID.sprut_axe, 0]);

Recipes.addShaped({id: ItemID.UP_slime_axe, count: 1, data: 0}, [
    "aaa",
    "ada",
    "aaa"
    ], ['a', ItemID.slime_ingot, 0, 'd', ItemID.slime_axe, 0]);

Recipes.addShaped({id: ItemID.UP_ocelot_axe, count: 1, data: 0}, [
    "aaa",
    "ada",
    "aaa"
    ], ['a', ItemID.ocelot_ingot, 0, 'd', ItemID.ocelot_axe, 0]);

Recipes.addShaped({id: ItemID.UP_blaze_axe, count: 1, data: 0}, [
    "aaa",
    "ada",
    "aaa"
], ['a', ItemID.blaze_ingot, 0, 'd', ItemID.blaze_axe, 0]);

Recipes.addShaped({id: ItemID.UP_end_axe, count: 1, data: 0}, [
    "aaa",
    "ada",
    "aaa"
], ['a', ItemID.end_ingot, 0, 'd', ItemID.end_axe, 0]);

//suriken crafts
Recipes.addShaped({id: ItemID.shurikencp, count: 4, data: 0}, [
    " x ",
    "x x",
    " x "
], ['x', ItemID.scp, 0]);

Recipes.addShaped({id: ItemID.shurikensk, count: 4, data: 0}, [
    " x ",
    "x x",
    " x "
], ['x', ItemID.ssk, 0]);

Recipes.addShaped({id: ItemID.shurikensp, count: 4, data: 0}, [
    " x ",
    "x x",
    " x "
], ['x', ItemID.ssp, 0]);

Recipes.addShaped({id: ItemID.shurikenzb, count: 4, data: 0}, [
    " x ",
    "x x",
    " x "
], ['x', ItemID.szb, 0]);

Recipes.addShaped({id: ItemID.shurikenot, count: 4, data: 0}, [
    " x ",
    "x x",
    " x "
], ['x', ItemID.sot, 0]);

Recipes.addShaped({id: ItemID.shurikensm, count: 4, data: 0}, [
    " x ",
    "x x",
    " x "
], ['x', ItemID.ssm, 0]);

Recipes.addShaped({id: ItemID.shurikenif, count: 4, data: 0}, [
    " x ",
    "x x",
    " x "
], ['x', ItemID.sif, 0]);

Recipes.addShaped({id: ItemID.shurikenen, count: 4, data: 0}, [
    " x ",
    "x x",
    " x "
], ['x', ItemID.sen, 0]);

Recipes.addShaped({id: ItemID.shurikensq, count: 4, data: 0}, [
    " x ",
    "x x",
    " x "
], ['x', ItemID.ssq, 0]);

Recipes.addShaped({id: ItemID.szb, count: 4, data: 0}, [
    " x "
], ['x', ItemID.zombie_ingot, 0]);

Recipes.addShaped({id: ItemID.ssk, count: 4, data: 0}, [
    " x "
], ['x', ItemID.skelet_ingot, 0]);

Recipes.addShaped({id: ItemID.ssp, count: 4, data: 0}, [
    " x "
], ['x', ItemID.spider_ingot, 0]);

Recipes.addShaped({id: ItemID.scp, count: 4, data: 0}, [
    " x "
], ['x', ItemID.creeper_ingot, 0]);

Recipes.addShaped({id: ItemID.ssq, count: 4, data: 0}, [
    " x "
], ['x', ItemID.sprut_ingot, 0]);

Recipes.addShaped({id: ItemID.ssm, count: 4, data: 0}, [
    " x "
], ['x', ItemID.slime_ingot, 0]);

Recipes.addShaped({id: ItemID.sot, count: 4, data: 0}, [
    " x "
], ['x', ItemID.ocelot_ingot, 0]);

Recipes.addShaped({id: ItemID.sif, count: 4, data: 0}, [
    " x "
], ['x', ItemID.blaze_ingot, 0]);

Recipes.addShaped({id: ItemID.sen, count: 4, data: 0}, [
    " x "
], ['x', ItemID.end_ingot, 0]);

//craft furnace
Recipes.addShaped({id: ItemID.MobsFurnace, count: 1, data: 0}, [
        "xxx",
        "aaa",
        "ses"
    ], ['x', ItemID.spider, 0, 'a', ItemID.creeper, 0, 's', ItemID.skelet, 0, 'e', ItemID.zombie, 0]);
    
//craft blocks
Recipes.addShaped({id: BlockID.bsprut, count: 1, data: 0}, [
    "xxx", "xxx", "xxx"], ['x', ItemID.sprut_ingot, 0]);
Recipes.addShaped({id: BlockID.bocelot, count: 1, data: 0}, [
    "xxx", "xxx", "xxx"], ['x', ItemID.ocelot_ingot, 0]);
Recipes.addShaped({id: BlockID.bslime, count: 1, data: 0}, [
    "xxx", "xxx", "xxx"], ['x', ItemID.slime_ingot, 0]);
Recipes.addShaped({id: BlockID.bcreeper, count: 1, data: 0}, [
    "xxx", "xxx", "xxx"], ['x', ItemID.creeper_ingot, 0]);
Recipes.addShaped({id: BlockID.bzombie, count: 1, data: 0}, [
    "xxx", "xxx", "xxx"], ['x', ItemID.zombie_ingot, 0]);
    Recipes.addShaped({id: BlockID.bskelet, count: 1, data: 0}, [
    "xxx", "xxx", "xxx"], ['x', ItemID.skelet_ingot, 0]);
    Recipes.addShaped({id: BlockID.bspider, count: 1, data: 0}, [
    "xxx", "xxx", "xxx"], ['x', ItemID.spider_ingot, 0]);
    Recipes.addShaped({id: BlockID.bend, count: 1, data: 0}, [
    "xxx", "xxx", "xxx"], ['x', ItemID.end_ingot, 0]);
    Recipes.addShaped({id: BlockID.bblaze, count: 1, data: 0}, [
    "xxx", "xxx", "xxx"], ['x', ItemID.blaze_ingot, 0]);
    
    Recipes.addShaped({id: ItemID.sprut_ingot, count: 9, data: 0}, [
    "x"], ['x', BlockID.bsprut, 0]);
    Recipes.addShaped({id: ItemID.ocelot_ingot, count: 9, data: 0}, [
    "x"], ['x', BlockID.bocelot, 0]);
    Recipes.addShaped({id: ItemID.slime_ingot, count: 9, data: 0}, [
    "x"], ['x', BlockID.bslime, 0]);
    Recipes.addShaped({id: ItemID.creeper_ingot, count: 9, data: 0}, [
    "x"], ['x', BlockID.bcreeper, 0]);
    Recipes.addShaped({id: ItemID.zombie_ingot, count: 9, data: 0}, [
    "x"], ['x', BlockID.bzombie, 0]);
    Recipes.addShaped({id: ItemID.skelet_ingot, count: 9, data: 0}, [
    "x"], ['x', BlockID.bskelet, 0]);
    Recipes.addShaped({id: ItemID.spider_ingot, count: 9, data: 0}, [
    "x"], ['x', BlockID.bspider, 0]);
    Recipes.addShaped({id: ItemID.end_ingot, count: 9, data: 0}, [
    "x"], ['x', BlockID.bend, 0]);
    Recipes.addShaped({id: ItemID.blaze_ingot, count: 9, data: 0}, [
    "x"], ['x', BlockID.bblaze, 0]);
    
//Mobs Book Craft
Recipes.addShaped({id: ItemID.mobs_book, count: 1, data: 0}, [
        " a ",
        "zxc",
        " s "
    ], ['a', ItemID.zombie, 0, 'z', ItemID.skelet, 0, 'x', 340, 0, 'c', ItemID.spider, 0, 's', ItemID.creeper, 0]);




// file: group.js

Item.addCreativeGroup("swords", Translation.translate("Swords"), [
 ItemID.zombie_sword,
 ItemID.skelet_sword,
 ItemID.spider_sword,
 ItemID.creeper_sword,
 ItemID.sprut_sword,
 ItemID.slime_sword,
 ItemID.ocelot_sword,
 ItemID.blaze_sword,
 ItemID.end_sword
]);

Item.addCreativeGroup("axes", Translation.translate("Axes"), [
 ItemID.zombie_axe,
 ItemID.skelet_axe,
 ItemID.spider_axe,
 ItemID.creeper_axe,
 ItemID.sprut_axe,
 ItemID.slime_axe,
 ItemID.ocelot_axe,
 ItemID.blaze_axe,
 ItemID.end_axe
]);

Item.addCreativeGroup("pickaxes", Translation.translate("Pickaxes"), [
 ItemID.zombie_pickaxe,
 ItemID.skelet_pickaxe,
 ItemID.spider_pickaxe,
 ItemID.creeper_pickaxe,
 ItemID.sprut_pickaxe,
 ItemID.slime_pickaxe,
 ItemID.ocelot_pickaxe,
 ItemID.blaze_pickaxe,
 ItemID.end_pickaxe
]);

Item.addCreativeGroup("shovels", Translation.translate("Shovels"), [
 ItemID.zombie_shovel,
 ItemID.skelet_shovel,
 ItemID.spider_shovel,
 ItemID.creeper_shovel,
 ItemID.sprut_shovel,
 ItemID.slime_shovel,
 ItemID.ocelot_shovel,
 ItemID.blaze_shovel,
 ItemID.end_shovel
]);

Item.addCreativeGroup("upaxes", Translation.translate("UP Axes"), [
 ItemID.UP_zombie_axe,
 ItemID.UP_skelet_axe,
 ItemID.UP_spider_axe,
 ItemID.UP_creeper_axe,
 ItemID.UP_sprut_axe,
 ItemID.UP_slime_axe,
 ItemID.UP_ocelot_axe,
 ItemID.UP_blaze_axe,
 ItemID.UP_end_axe
]);

Item.addCreativeGroup("uppickaxes", Translation.translate("UP Pickaxes"), [
 ItemID.UP_zombie_pickaxe,
 ItemID.UP_skelet_pickaxe,
 ItemID.UP_spider_pickaxe,
 ItemID.UP_creeper_pickaxe,
 ItemID.UP_sprut_pickaxe,
 ItemID.UP_slime_pickaxe,
 ItemID.UP_ocelot_pickaxe,
 ItemID.UP_blaze_pickaxe,
 ItemID.UP_end_pickaxe
]);

Item.addCreativeGroup("helmets", Translation.translate("Helmets"), [
 ItemID.zombie_helmet,
 ItemID.skelet_helmet,
 ItemID.spider_helmet,
 ItemID.creeper_helmet,
 ItemID.sprut_helmet,
 ItemID.slime_helmet,
 ItemID.ocelot_helmet,
 ItemID.blaze_helmet,
 ItemID.end_helmet
]);

Item.addCreativeGroup("chestplates", Translation.translate("Chestplates"), [
 ItemID.zombie_chestplate,
 ItemID.skelet_chestplate,
 ItemID.spider_chestplate,
 ItemID.creeper_chestplate,
 ItemID.sprut_chestplate,
 ItemID.slime_chestplate,
 ItemID.ocelot_chestplate,
 ItemID.blaze_chestplate,
 ItemID.end_chestplate
]);

Item.addCreativeGroup("leggings", Translation.translate("Leggings"), [
 ItemID.zombie_leggings,
 ItemID.skelet_leggings,
 ItemID.spider_leggings,
 ItemID.creeper_leggings,
 ItemID.sprut_leggings,
 ItemID.slime_leggings,
 ItemID.ocelot_leggings,
 ItemID.blaze_leggings,
 ItemID.end_leggings
]);

Item.addCreativeGroup("boots", Translation.translate("Boots"), [
 ItemID.zombie_boots,
 ItemID.skelet_boots,
 ItemID.spider_boots,
 ItemID.creeper_boots,
 ItemID.sprut_boots,
 ItemID.slime_boots,
 ItemID.ocelot_boots,
 ItemID.blaze_boots,
 ItemID.end_boots
]);

Item.addCreativeGroup("surikens", Translation.translate("Surikens"), [
 ItemID.shurikenzb,
 ItemID.shurikensk,
 ItemID.shurikensp,
 ItemID.shurikencp,
 ItemID.shurikensq,
 ItemID.shurikensm,
 ItemID.shurikenot,
 ItemID.shurikenif,
 ItemID.shurikenen
]);

Item.addCreativeGroup("pazls", Translation.translate("Suriken Pazls"), [
 ItemID.szb,
 ItemID.ssk,
 ItemID.ssp,
 ItemID.scp,
 ItemID.ssq,
 ItemID.ssm,
 ItemID.sot,
 ItemID.sif,
 ItemID.sen
]);

Item.addCreativeGroup("crystals", Translation.translate("Crystals"), [
 ItemID.zombie,
 ItemID.skelet,
 ItemID.spider,
 ItemID.creeper,
 ItemID.sprut,
ItemID.slime_crystal,
 ItemID.ocelota,
 ItemID.blaze,
 ItemID.enderman
]);

Item.addCreativeGroup("ingots", Translation.translate("Ingots"), [
 ItemID.zombie_ingot,
 ItemID.skelet_ingot,
 ItemID.spider_ingot,
 ItemID.creeper_ingot,
 ItemID.sprut_ingot,
ItemID.slime_ingot,
 ItemID.ocelot_ingot,
 ItemID.blaze_ingot,
 ItemID.end_ingot
]);

Item.addCreativeGroup("mobs_blocks", Translation.translate("Mobs Blocks"), [
 BlockID.bzombie,
 BlockID.bskelet,
 BlockID.bspider,
 BlockID.bcreeper,
 BlockID.bsprut,
BlockID.bslime,
 BlockID.bocelot,
 BlockID.bblaze,
 BlockID.bend
]);




